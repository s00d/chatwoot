(function init() {
  var styles = `
.wootm-widget-bubble {
    background: #056BFF;
    border-radius: 100px;
    border-width: 0px;
    bottom: 24px;
    box-shadow: 0 8px 24px rgb(0 0 0 / 16%) !important;
    cursor: pointer;
    height: 48px;
    padding: 0px;
    position: fixed;
    user-select: none;
    width: auto;
    z-index: 1000 !important;
    display: flex;
}
@media (max-width: 768px) {
  .wootm-widget-bubble {
    height: 48px;
    font-size: 14px;
  }
}

.wootm-widget-hidden {
  display:none;
}
.wootm-widget-bubble:hover {
  background: #056BFF;
  box-shadow: 0 8px 32px rgb(0 0 0 / 40%) !important;
}
.wootm-widget-bubble.wootm-elements--right {
  right: 20px;
}
.wootm-widget-bubble.wootm-elements--left {
  left: 20px;
}
.wootm-widget-bubble img {
  all: revert;
  height: 20px;
  margin: 14px 8px 14px 16px;
  width: 20px;
}
@media (max-width: 768px) {
  .wootm-widget-bubble img {
    margin: 14px;
  }
}
.wootm-desktop-text {
  display: block;
  color: #fff;
  text-align: center;
  align-self: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  padding-right: 20px;
  width: auto !important;
}
@media (max-width: 768px) {
  .wootm-desktop-text {
    display: none;
  }
}
`;

  function storage_get(key) {
    if (!localStorage) return null;
    try {
      return localStorage.getItem(key);
    } catch (e) {
      return null;
    }
  }

  function storage_set(key, val) {
    if (!localStorage) return null;
    try {
      return localStorage.setItem(key, val);
    } catch (e) {
      return null;
    }
  }

  function storage_del(key) {
    if (!localStorage) return null;
    try {
      return localStorage.removeItem(key);
    } catch (e) {
      return null;
    }
  }

  // eslint-disable-next-line vars-on-top
  var styleSheet = document.createElement('style');
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);

  // eslint-disable-next-line vars-on-top
  var newDiv = document.createElement('div');
  newDiv.innerHTML =
    '<button class="wootm-widget-bubble wootm-desktop wootm-elements--right wootm-widget--expanded" style="background: #056BFF;">' +
    '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAUVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////8IN+deAAAAGnRSTlMAAwgJEBk0TVheY2R5eo+ut8jb5OXs8fX2+cjRDTIAAADsSURBVHgBldZbkoMgFIThRgQv8SKKgGf/C51UnJqaRI30/9zfe+NQUQ3TvG7bOk9DVeCmshmj/CuOTYnrdBfkUOg0zlOtl9OWVuEk4+QyZ3DIevmSt/ioTvK1VH/s5bY3YdM9SBZ/mUUyWgx+U06ycgp7D8msxSvtc4HXL9BLdj2elSEfhBJAI0QNgJEBI1BEBsQClVBVGDgwYOLAhJkDM1YOrNg4sLFAsLJgZsHEgoEFFQt0JAFGFjQsKAMJ0LFAexKgZYFyJIDxJIBNJEDNAtSJBLCeBDCOBFAPzwFA94ED+zmhwDO9358r8ANtIsMXi7qVAwAAAABJRU5ErkJggg==" alt="bubble-icon">' +
    `<span class="wootm-desktop-text">Support</span>` +
    '</button>';

  // eslint-disable-next-line vars-on-top
  function open(isOpen = true) {
    (function load_script(d, t) {
      var BASE_URL = window.chatwootLITESDK.BASE_URL;
      var websiteToken = window.chatwootLITESDK.websiteToken;
      var g = d.createElement(t);
      var s = d.getElementsByTagName(t)[0];
      g.src = BASE_URL + '/packs/js/sdk.js?v4';
      g.defer = true;
      g.async = true;
      s.parentNode.insertBefore(g, s);
      g.onload = function onload() {
        window.chatwootSDK.run({
          websiteToken: websiteToken,
          baseUrl: BASE_URL,
        });
        window.addEventListener('chatwoot:open2', function on_close() {
          var time = Math.floor(Date.now() / 1000);
          storage_set('chatwoot_opened_date', time);
        });
        window.addEventListener('chatwoot:close2', function on_close() {
          // storage_del('chatwoot_opened_date');
        });
        window.addEventListener('chatwoot:ready2', function on_ready() {
          if (isOpen) {
            window.$chatwoot.toggle('open');
          }
          try {
            document.body.removeChild(newDiv);
          } catch (e) {}
        });
      };
    })(document, 'script');
  }

  newDiv.onclick = function onclick() {
    open(true);
  };

  document.body.appendChild(newDiv);

  window.chatwootLITESDK = {
    BASE_URL: '//',
    websiteToken: '',
    locale: 'en',
    run: function run(force = false) {
      if (force) {
        open(true);
        return;
      }
      var time = Math.floor(Date.now() / 1000);
      var worked_date = storage_get('chatwoot_opened_date');
      if (worked_date && time - worked_date < 14400) {
        open(false);
      } else {
        storage_del('chatwoot_opened_date');
      }

      const locale =
        window.chatwootLITESDK && window.chatwootLITESDK.locale
          ? window.chatwootLITESDK.locale
          : 'en';

      const text = locale === 'ru' ? 'Поддержка' : 'Support';
      const wootDesktopText = document.querySelector('.wootm-desktop-text');
      if (wootDesktopText) {
        wootDesktopText.textContent = text;
      }
    },
  };
})();
