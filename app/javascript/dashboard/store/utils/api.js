import fromUnixTime from 'date-fns/fromUnixTime';
import differenceInDays from 'date-fns/differenceInDays';
import Cookies from 'js-cookie';
import {
  ANALYTICS_IDENTITY,
  ANALYTICS_RESET,
  CHATWOOT_RESET,
  CHATWOOT_SET_USER,
} from '../../helper/scriptHelpers';
import { LOCAL_STORAGE_KEYS } from 'dashboard/constants/localStorage';
import { LocalStorage } from 'shared/helpers/localStorage';
import { emitter } from 'shared/helpers/mitt';

// Cookies.defaults = { sameSite: 'Lax' };
Cookies.defaults = {
  sameSite: 'none',
  secure: true,
};

export const getLoadingStatus = state => state.fetchAPIloadingStatus;
export const setLoadingStatus = (state, status) => {
  state.fetchAPIloadingStatus = status;
};

export const setUser = user => {
  emitter.emit(CHATWOOT_SET_USER, { user });
  emitter.emit(ANALYTICS_IDENTITY, { user });
};

export const getHeaderExpiry = response =>
  fromUnixTime(response.headers.expiry);

export const setAuthCredentials = response => {
  const expiryDate = getHeaderExpiry(response);
  Cookies.set('cw_d_session_info', JSON.stringify(response.headers), {
    expires: differenceInDays(expiryDate, new Date()),
  });
  setUser(response.data.data, expiryDate);
};

export const clearBrowserSessionCookies = () => {
  Cookies.remove('cw_d_session_info');
  Cookies.remove('auth_data');
  Cookies.remove('user');
};

export const clearLocalStorageOnLogout = () => {
  LocalStorage.remove(LOCAL_STORAGE_KEYS.DRAFT_MESSAGES);
};

export const deleteIndexedDBOnLogout = async () => {
  let dbs = [];
  try {
    dbs = await window.indexedDB.databases();
    dbs = dbs.map(db => db.name);
  } catch (e) {
    dbs = JSON.parse(localStorage.getItem('cw-idb-names') || '[]');
  }

  dbs.forEach(dbName => {
    const deleteRequest = window.indexedDB.deleteDatabase(dbName);

    deleteRequest.onerror = event => {
      // eslint-disable-next-line no-console
      console.error(`Error deleting database ${dbName}.`, event);
    };

    deleteRequest.onsuccess = () => {
      // eslint-disable-next-line no-console
      console.log(`Database ${dbName} deleted successfully.`);
    };
  });

  localStorage.removeItem('cw-idb-names');
};

export const clearCookiesOnLogout = () => {
  emitter.emit(CHATWOOT_RESET);
  emitter.emit(ANALYTICS_RESET);
  clearBrowserSessionCookies();
  clearLocalStorageOnLogout();
  const globalConfig = window.globalConfig || {};
  const logoutRedirectLink = globalConfig.LOGOUT_REDIRECT_LINK || '/';
  window.location = logoutRedirectLink;
};

export const parseAPIErrorResponse = error => {
  if (error?.response?.data?.message) {
    return error?.response?.data?.message;
  }
  if (error?.response?.data?.error) {
    return error?.response?.data?.error;
  }
  if (error?.response?.data?.errors) {
    return error?.response?.data?.errors[0];
  }
  return error;
};

export const throwErrorMessage = error => {
  const errorMessage = parseAPIErrorResponse(error);
  throw new Error(errorMessage);
};

export const parseLinearAPIErrorResponse = (error, defaultMessage) => {
  const errorData = error.response.data;
  const errorMessage = errorData?.error?.errors?.[0]?.message || defaultMessage;
  return errorMessage;
};
