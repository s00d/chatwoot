(function init() {
  var styles = `
.woot-widget-bubble {
    background: #1f93ff;
    border-radius: 100px;
    border-width: 0px;
    bottom: 20px;
    box-shadow: 0 8px 24px rgb(0 0 0 / 16%) !important;
    cursor: pointer;
    height: 64px;
    padding: 0px;
    position: fixed;
    user-select: none;
    width: 64px;
    z-index: 2147483000 !important;
}
.woot-widget-bubble:hover {
  background: #1f93ff;
  box-shadow: 0 8px 32px rgb(0 0 0 / 40%) !important;
}
.woot-widget-bubble.woot-elements--right {
  right: 20px;
}
.woot-widget-bubble img {
  all: revert;
  height: 24px;
  margin: 20px;
  width: 24px;
}`;

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
    '<button class="woot-widget-bubble woot-elements--right" style="background: rgb(33, 150, 243);">' +
    '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAUVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////8IN+deAAAAGnRSTlMAAwgJEBk0TVheY2R5eo+ut8jb5OXs8fX2+cjRDTIAAADsSURBVHgBldZbkoMgFIThRgQv8SKKgGf/C51UnJqaRI30/9zfe+NQUQ3TvG7bOk9DVeCmshmj/CuOTYnrdBfkUOg0zlOtl9OWVuEk4+QyZ3DIevmSt/ioTvK1VH/s5bY3YdM9SBZ/mUUyWgx+U06ycgp7D8msxSvtc4HXL9BLdj2elSEfhBJAI0QNgJEBI1BEBsQClVBVGDgwYOLAhJkDM1YOrNg4sLFAsLJgZsHEgoEFFQt0JAFGFjQsKAMJ0LFAexKgZYFyJIDxJIBNJEDNAtSJBLCeBDCOBFAPzwFA94ED+zmhwDO9358r8ANtIsMXi7qVAwAAAABJRU5ErkJggg==" alt="bubble-icon">' +
    '</button>';

  // eslint-disable-next-line vars-on-top
  function open(isOpen = true) {
    (function load_script(d, t) {
      var BASE_URL = window.chatwootLITESDK.BASE_URL;
      var websiteToken = window.chatwootLITESDK.websiteToken;
      var g = d.createElement(t);
      var s = d.getElementsByTagName(t)[0];
      g.src = BASE_URL + '/packs/js/sdk.js';
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
          console.log('on_ready')
          if (isOpen) {
            window.$chatwoot.toggle('open');
          }
          document.body.removeChild(newDiv);
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
    run: function run() {
      var time = Math.floor(Date.now() / 1000);
      var worked_date = storage_get('chatwoot_opened_date');
      if (worked_date && time - worked_date < 3600) {
        open(false);
      } else {
        storage_del('chatwoot_opened_date');
      }
    },
  };
})();
