import en from './locale/en';

// English ships with the bundle and is the fallback. Every other supported locale is a separate
// chunk, loaded the first time the user switches to it: bundling all of them added ~30 MB of
// JSON to every dashboard page load. Locale folders missing from this list are incomplete.
const localeLoaders = import.meta.glob(
  './locale/{ar,bg,ca,cs,da,de,el,es,et,fa,fi,fr,he,hi,hu,id,it,ja,ko,ml,lv,nl,no,pl,pt_BR,pt,ro,ru,sk,sl,sr,sv,ta,th,tr,uk,uz,vi,zh_CN,zh_TW,is,lt}/index.js',
  { import: 'default' }
);

export const loadLocaleMessages = async (i18n, locale) => {
  const { global } = i18n;
  const loader = localeLoaders[`./locale/${locale}/index.js`];
  if (!loader || global.availableLocales.includes(locale)) return;

  global.setLocaleMessage(locale, await loader());
};

export default { en };
