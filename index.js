const manifest = {"name":"Game Theme Music"};
const API_VERSION = 2;
const internalAPIConnection = window.__DECKY_SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_deckyLoaderAPIInit;
if (!internalAPIConnection) {
    throw new Error('[@decky/api]: Failed to connect to the loader as as the loader API was not initialized. This is likely a bug in Decky Loader.');
}
let api;
try {
    api = internalAPIConnection.connect(API_VERSION, manifest.name);
}
catch {
    api = internalAPIConnection.connect(1, manifest.name);
    console.warn(`[@decky/api] Requested API version ${API_VERSION} but the running loader only supports version 1. Some features may not work.`);
}
if (api._version != API_VERSION) {
    console.warn(`[@decky/api] Requested API version ${API_VERSION} but the running loader only supports version ${api._version}. Some features may not work.`);
}
const call = api.call;
const routerHook = api.routerHook;
const toaster = api.toaster;
const definePlugin = (fn) => {
    return (...args) => {
        return fn(...args);
    };
};

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = SP_REACT.createContext && /*#__PURE__*/SP_REACT.createContext(DefaultContext);

var _excluded = ["attr", "size", "title"];
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function Tree2Element(tree) {
  return tree && tree.map((node, i) => /*#__PURE__*/SP_REACT.createElement(node.tag, _objectSpread({
    key: i
  }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
  return props => /*#__PURE__*/SP_REACT.createElement(IconBase, _extends({
    attr: _objectSpread({}, data.attr)
  }, props), Tree2Element(data.child));
}
function IconBase(props) {
  var elem = conf => {
    var {
        attr,
        size,
        title
      } = props,
      svgProps = _objectWithoutProperties(props, _excluded);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return /*#__PURE__*/SP_REACT.createElement("svg", _extends({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: _objectSpread(_objectSpread({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && /*#__PURE__*/SP_REACT.createElement("title", null, title), props.children);
  };
  return IconContext !== undefined ? /*#__PURE__*/SP_REACT.createElement(IconContext.Consumer, null, conf => elem(conf)) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
function GiMusicalNotes (props) {
  return GenIcon({"attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M98.05 18.54c-11.46-.08-23.59 1.28-36.08 3.99L130.1 261.1c-14.2-5.1-31.18-6.2-48.09-3.2-39.17 6.9-67.15 33.8-62.52 59.8 4.64 26.1 40.14 41.7 79.33 34.7 39.08-6.9 67.08-33.7 62.38-59.8-22.1-80.8-44.4-163-66.39-244.21 50.69 3.59 72.59 31.58 90.59 60.31-.5-62.33-37.7-89.81-87.35-90.16zm310.65 30.7c-13.9.1-28.8 2.59-44.1 7.22l87.1 232.44c-14.6-3.9-31.6-3.7-48.3.7-38.4 10-64.2 39-57.5 64.6 6.7 25.7 43.4 38.3 81.8 28.2 38.5-10 64.2-39 57.5-64.6-28.6-78.8-57.3-158.9-85.8-238.2 50.8-.5 74.9 25.7 95.2 52.9-5.2-58.55-40.4-83.61-85.9-83.26zM258.4 163.5l1.8 248.1c-12.3-8.6-28.4-14.3-45.6-15.9-39.4-3.8-73.7 14.5-76.2 41-2.5 26.3 27.7 50.8 67.1 54.5 39.7 3.9 73.7-14.5 76.3-40.9.2-83.8.8-168.9 1.3-253.1 47.9 17 61.6 49.8 71.2 82.4 19.9-74.1-27.9-112.3-95.9-116.1z"},"child":[]}]})(props);
}

// THIS FILE IS AUTO GENERATED
function SiYoutubemusic (props) {
  return GenIcon({"attr":{"role":"img","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm0 19.104c-3.924 0-7.104-3.18-7.104-7.104S8.076 4.896 12 4.896s7.104 3.18 7.104 7.104-3.18 7.104-7.104 7.104zm0-13.332c-3.432 0-6.228 2.796-6.228 6.228S8.568 18.228 12 18.228s6.228-2.796 6.228-6.228S15.432 5.772 12 5.772zM9.684 15.54V8.46L15.816 12l-6.132 3.54z"},"child":[]}]})(props);
}function SiKofi (props) {
  return GenIcon({"attr":{"role":"img","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11.351 2.715c-2.7 0-4.986.025-6.83.26C2.078 3.285 0 5.154 0 8.61c0 3.506.182 6.13 1.585 8.493 1.584 2.701 4.233 4.182 7.662 4.182h.83c4.209 0 6.494-2.234 7.637-4a9.5 9.5 0 0 0 1.091-2.338C21.792 14.688 24 12.22 24 9.208v-.415c0-3.247-2.13-5.507-5.792-5.87-1.558-.156-2.65-.208-6.857-.208m0 1.947c4.208 0 5.09.052 6.571.182 2.624.311 4.13 1.584 4.13 4v.39c0 2.156-1.792 3.844-3.87 3.844h-.935l-.156.649c-.208 1.013-.597 1.818-1.039 2.546-.909 1.428-2.545 3.064-5.922 3.064h-.805c-2.571 0-4.831-.883-6.078-3.195-1.09-2-1.298-4.155-1.298-7.506 0-2.181.857-3.402 3.012-3.714 1.533-.233 3.559-.26 6.39-.26m6.547 2.287c-.416 0-.65.234-.65.546v2.935c0 .311.234.545.65.545 1.324 0 2.051-.754 2.051-2s-.727-2.026-2.052-2.026m-10.39.182c-1.818 0-3.013 1.48-3.013 3.142 0 1.533.858 2.857 1.949 3.897.727.701 1.87 1.429 2.649 1.896a1.47 1.47 0 0 0 1.507 0c.78-.467 1.922-1.195 2.623-1.896 1.117-1.039 1.974-2.364 1.974-3.897 0-1.662-1.247-3.142-3.039-3.142-1.065 0-1.792.545-2.338 1.298-.493-.753-1.246-1.298-2.312-1.298"},"child":[]}]})(props);
}function SiItunes (props) {
  return GenIcon({"attr":{"role":"img","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11.977 23.999c-2.483 0-4.898-.777-6.954-2.262a11.928 11.928 0 01-4.814-7.806A11.954 11.954 0 012.3 4.994 11.85 11.85 0 0110.08.159a11.831 11.831 0 018.896 2.104 11.933 11.933 0 014.815 7.807 11.958 11.958 0 01-2.091 8.937 11.855 11.855 0 01-7.78 4.835 12.17 12.17 0 01-1.943.157zm-6.474-2.926a11.022 11.022 0 008.284 1.96 11.044 11.044 0 007.246-4.504c3.583-5.003 2.445-12.003-2.538-15.603a11.022 11.022 0 00-8.284-1.96A11.046 11.046 0 002.966 5.47C-.618 10.474.521 17.473 5.503 21.073zm10.606-3.552a2.08 2.08 0 001.458-1.468l.062-.216.008-5.786c.006-4.334 0-5.814-.024-5.895a.535.535 0 00-.118-.214.514.514 0 00-.276-.073c-.073 0-.325.035-.56.078-1.041.19-7.176 1.411-7.281 1.45a.786.786 0 00-.399.354l-.065.128s-.031 9.07-.078 9.172a.7.7 0 01-.376.35 9.425 9.425 0 01-.609.137c-1.231.245-1.688.421-2.075.801-.22.216-.382.51-.453.82-.067.294-.045.736.051 1.005.1.281.262.521.473.71.192.148.419.258.674.324.563.144 1.618-.016 2.158-.328a2.36 2.36 0 00.667-.629c.06-.089.15-.268.2-.399.176-.456.181-8.581.204-8.683a.44.44 0 01.32-.344c.147-.04 6.055-1.207 6.222-1.23.146-.02.284.027.36.12a.29.29 0 01.109.096c.048.07.051.213.058 2.785.008 2.96.012 2.892-.149 3.079-.117.136-.263.189-.864.31-.914.188-1.226.276-1.576.447-.437.213-.679.446-.867.835a1.58 1.58 0 00-.182.754c.001.49.169.871.55 1.245.035.034.069.066.104.097.192.148.387.238.633.294.37.082 1.124.025 1.641-.126z"},"child":[]}]})(props);
}function SiGithub (props) {
  return GenIcon({"attr":{"role":"img","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"},"child":[]}]})(props);
}function SiDiscord (props) {
  return GenIcon({"attr":{"role":"img","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"},"child":[]}]})(props);
}function SiCrowdin (props) {
  return GenIcon({"attr":{"role":"img","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M16.119 17.793a2.619 2.619 0 0 1-1.667-.562c-.546-.436-1.004-1.09-1.018-1.858-.008-.388.414-.388.414-.388l1.018-.008c.332.008.43.47.445.586.128 1.04.717 1.495 1.168 1.702.273.123.204.513-.362.528zm-5.695-5.287L8.5 12.252c-.867-.214-.844-.982-.807-1.247a5.119 5.119 0 0 1 .814-2.125c.545-.804 1.303-1.508 2.29-2.073 1.856-1.074 4.45-1.673 7.31-1.673 2.09 0 4.256.27 4.29.27.197.025.328.213.333.437a.377.377 0 0 1-.355.393l-.92-.01c-2.902 0-4.968.394-6.506 1.248-1.527.837-2.57 2.117-3.287 4.012-.076.163-.335 1.12-1.24 1.022zm2.533 7.823c-1.44 0-2.797-.622-3.825-1.746-.87-.96-1.397-1.931-1.493-3.164-.06-.813.3-1.094.788-1.044l1.988.218c.45.092.75.34.825.854.397 2.736 2.122 3.814 3.15 4.046.18.042.292.157.283.365a.412.412 0 0 1-.322.398c-.458.074-.936.073-1.394.073zm-4.101 2.418a14.216 14.216 0 0 1-2.307-.214c-1.202-.214-2.208-.582-3.072-1.13C1.41 20.095.163 17.786.014 15.048c-.037-.65-.11-1.89 1.427-1.797.638.033 1.653.343 2.368.548.887.247 1.314.933 1.314 1.608 0 3.858 3.494 6.408 5.02 6.408.654 0 .414.701.127.779-.502.136-1.15.153-1.413.153zM3.525 11.419c-.605-.109-1.194-.358-1.768-.5C-.018 10.479.284 8.688.45 8.196c1.617-4.757 6.746-6.35 10.887-6.773 3.898-.4 7.978-.092 11.778.967.31.083 1.269.327.718.891-.35.358-1.7-.016-2.073-.041-2.23-.167-4.434-.192-6.656.15-2.349.357-4.768 1.099-6.71 2.665-.938.758-1.76 1.723-2.313 2.866-.144.3-.256.6-.354.9-.11.327-.47 1.91-2.215 1.6zm9.94.917c.332-1.488 1.81-3.848 6.385-3.686 1.05.033.57.749.052.731-2.586-.09-3.815 1.578-4.457 3.27-.219.546-.68.626-1.271.53-.415-.074-.866-.123-.71-.846Z"},"child":[]}]})(props);
}

const defaultSettings = {
    defaultMuted: false,
    volume: 1,
    homepageFocusMode: false
};
let _settings = { ...defaultSettings };
let _loaded = false;
let _loadPromise = null;
const _subscribers = new Set();
function notifyAll() {
    _subscribers.forEach((fn) => fn());
}
function loadSettings() {
    if (_loadPromise)
        return _loadPromise;
    _loadPromise = call('get_setting', 'settings', defaultSettings)
        .then((saved) => {
        // Keys added in newer versions fall back to their defaults.
        _settings = {
            ...defaultSettings,
            ...(saved && typeof saved === 'object' ? saved : {})
        };
    })
        .catch((e) => {
        console.error('[GameThemeMusic] Could not load settings', e);
        _settings = { ...defaultSettings };
    })
        .finally(() => {
        _loaded = true;
        notifyAll();
    });
    return _loadPromise;
}
function saveSettings(key, value) {
    _settings = { ..._settings, [key]: value };
    notifyAll();
    call('set_setting', 'settings', _settings).catch(console.error);
}
const useSettings = () => {
    const [, forceUpdate] = SP_REACT.useReducer((x) => x + 1, 0);
    SP_REACT.useEffect(() => {
        _subscribers.add(forceUpdate);
        if (!_loaded) {
            loadSettings();
        }
        return () => {
            _subscribers.delete(forceUpdate);
        };
    }, []);
    function setDefaultMuted(value) {
        saveSettings('defaultMuted', value);
    }
    function setVolume(value) {
        saveSettings('volume', value);
    }
    function setHomepageFocusMode(value) {
        saveSettings('homepageFocusMode', value);
    }
    return {
        settings: _settings,
        setDefaultMuted,
        setVolume,
        setHomepageFocusMode,
        isLoading: !_loaded
    };
};

var about$r = "Относно";
var aboutDescription$r = "Пускане на тематични песни в игровите ви страници";
var aboutLabel$r = "За Game Theme Music";
var backupOverrides$r = "Backup overrides";
var backupOverridesLabel$r = "Backup all overrides";
var backupSuccessful$r = "Backup successful";
var backupSuccessfulDetails$r = "Overrides have been backed up.";
var changeThemeMusic$r = "Промяна на тематичната музика";
var close$r = "Close";
var defaultMuted$r = "Стандартно заглушено";
var defaultMutedDescription$r = "Да не се пуска музика, освен ако не е ръчно зададено";
var deleteDownloads$r = "Delete downloads";
var deleteDownloadsConfirm$r = "Are you sure you want to delete all downloaded music?";
var deleteDownloadsDescription$r = "Delete all downloaded music. This will not reset overrides.";
var deleteDownloadsLabel$r = "Delete all downloads";
var deleteOverrides$r = "Изтриване на замените";
var deleteOverridesConfirm$r = "Are you sure you want to delete all overrides?";
var deleteOverridesDescription$r = "This will also delete all backups of your overrides!";
var deleteOverridesLabel$r = "Изтриване на всички замени";
var download$r = "Download";
var downloadAudio$r = "Download Music";
var downloadAudioDescription$r = "Download selected music instead of streaming it. Only applies to newly made selections.";
var downloadFailed$r = "Download failed";
var downloadFailedDetail$r = "Could not download this music.";
var downloadRestoreSuccessful$r = "Downloads successful";
var downloadRestoreSuccessfulDetails$r = "All missing songs have been downloaded.";
var extras$r = "Extras";
var gameSettings$r = "Настройки на играта";
var gameVolumeDescription$r = "Настройване на силата на музиката за тази игра";
var helpTranslate$r = "Help translate";
var invidiousInstance$r = "Invidious Instance";
var invidiousInstanceDescription$r = "Which Invidious instance would you like to use for searching and getting audio?";
var noMusicLabel$r = "Няма музика";
var overrides$r = "Замени";
var play$r = "Пускане";
var reset$r = "Reset";
var resetVolume$r = "Нулиране";
var restoreDownloads$r = "Restore downloads";
var restoreDownloadsConfirm$r = "Download all missing songs?";
var restoreDownloadsConfirmDescription$r = "This will download up to {num} songs and might take a while.";
var restoreDownloadsDescription$r = "Download all songs from manually set overrides that haven't been downloaded yet.";
var restoreDownloadsLabel$r = "Restore missing downloads";
var restoreDownloadsOperation$r = "Downloading {current}/{total}...";
var restoreDownloadsOperationTitle$r = "Downloading missing songs...";
var restoreOverrides$r = "Select backup";
var restoreOverridesConfirm$r = "Restore this backup?";
var restoreOverridesConfirmDetails$r = "This will overwrite all your current overrides!";
var restoreOverridesLabel$r = "Restore overrides from backup";
var restoreSuccessful$r = "Restore successful";
var restoreSuccessfulDetails$r = "Overrides have been restored from backup.";
var search$r = "Търсене";
var select$r = "Избор";
var selected$r = "Избрано";
var settings$r = "Настройки";
var showQrCode$r = "Show QR Code";
var stop$r = "Спиране";
var supportDescription$r = "Посетете сървъра на Discord \"Steam Deck Homebrew\" deckbrew.xyz/discord";
var supportLabel$r = "Поддръжка";
var useYtDlp$r = "Use yt-dlp";
var useYtDlpDescription$r = "Access YouTube directly without Invidious";
var volume$r = "Сила на музиката";
var volumeDescription$r = "Настройване на силата на музиката";
var bg = {
	about: about$r,
	aboutDescription: aboutDescription$r,
	aboutLabel: aboutLabel$r,
	backupOverrides: backupOverrides$r,
	backupOverridesLabel: backupOverridesLabel$r,
	backupSuccessful: backupSuccessful$r,
	backupSuccessfulDetails: backupSuccessfulDetails$r,
	changeThemeMusic: changeThemeMusic$r,
	close: close$r,
	defaultMuted: defaultMuted$r,
	defaultMutedDescription: defaultMutedDescription$r,
	deleteDownloads: deleteDownloads$r,
	deleteDownloadsConfirm: deleteDownloadsConfirm$r,
	deleteDownloadsDescription: deleteDownloadsDescription$r,
	deleteDownloadsLabel: deleteDownloadsLabel$r,
	deleteOverrides: deleteOverrides$r,
	deleteOverridesConfirm: deleteOverridesConfirm$r,
	deleteOverridesDescription: deleteOverridesDescription$r,
	deleteOverridesLabel: deleteOverridesLabel$r,
	download: download$r,
	downloadAudio: downloadAudio$r,
	downloadAudioDescription: downloadAudioDescription$r,
	downloadFailed: downloadFailed$r,
	downloadFailedDetail: downloadFailedDetail$r,
	downloadRestoreSuccessful: downloadRestoreSuccessful$r,
	downloadRestoreSuccessfulDetails: downloadRestoreSuccessfulDetails$r,
	extras: extras$r,
	gameSettings: gameSettings$r,
	gameVolumeDescription: gameVolumeDescription$r,
	helpTranslate: helpTranslate$r,
	invidiousInstance: invidiousInstance$r,
	invidiousInstanceDescription: invidiousInstanceDescription$r,
	noMusicLabel: noMusicLabel$r,
	overrides: overrides$r,
	play: play$r,
	reset: reset$r,
	resetVolume: resetVolume$r,
	restoreDownloads: restoreDownloads$r,
	restoreDownloadsConfirm: restoreDownloadsConfirm$r,
	restoreDownloadsConfirmDescription: restoreDownloadsConfirmDescription$r,
	restoreDownloadsDescription: restoreDownloadsDescription$r,
	restoreDownloadsLabel: restoreDownloadsLabel$r,
	restoreDownloadsOperation: restoreDownloadsOperation$r,
	restoreDownloadsOperationTitle: restoreDownloadsOperationTitle$r,
	restoreOverrides: restoreOverrides$r,
	restoreOverridesConfirm: restoreOverridesConfirm$r,
	restoreOverridesConfirmDetails: restoreOverridesConfirmDetails$r,
	restoreOverridesLabel: restoreOverridesLabel$r,
	restoreSuccessful: restoreSuccessful$r,
	restoreSuccessfulDetails: restoreSuccessfulDetails$r,
	search: search$r,
	select: select$r,
	selected: selected$r,
	settings: settings$r,
	showQrCode: showQrCode$r,
	stop: stop$r,
	supportDescription: supportDescription$r,
	supportLabel: supportLabel$r,
	useYtDlp: useYtDlp$r,
	useYtDlpDescription: useYtDlpDescription$r,
	volume: volume$r,
	volumeDescription: volumeDescription$r
};

var about$q = "O pluginu";
var aboutDescription$q = "Přehrajte si úvodní skladbu hry přímo na jejím detailu";
var aboutLabel$q = "O Game Theme Music";
var backupOverrides$q = "Backup overrides";
var backupOverridesLabel$q = "Backup all overrides";
var backupSuccessful$q = "Backup successful";
var backupSuccessfulDetails$q = "Overrides have been backed up.";
var changeThemeMusic$q = "Změnit úvodní melodii";
var close$q = "Close";
var defaultMuted$q = "Defaultně ztlumeno";
var defaultMutedDescription$q = "Nepřehrávat hudbu, pokud není ručně povoleno";
var deleteDownloads$q = "Delete downloads";
var deleteDownloadsConfirm$q = "Are you sure you want to delete all downloaded music?";
var deleteDownloadsDescription$q = "Delete all downloaded music. This will not reset overrides.";
var deleteDownloadsLabel$q = "Delete all downloads";
var deleteOverrides$q = "Smazat vynucení";
var deleteOverridesConfirm$q = "Are you sure you want to delete all overrides?";
var deleteOverridesDescription$q = "This will also delete all backups of your overrides!";
var deleteOverridesLabel$q = "Delete all overrides";
var download$q = "Download";
var downloadAudio$q = "Download Music";
var downloadAudioDescription$q = "Download selected music instead of streaming it. Only applies to newly made selections.";
var downloadFailed$q = "Download failed";
var downloadFailedDetail$q = "Could not download this music.";
var downloadRestoreSuccessful$q = "Downloads successful";
var downloadRestoreSuccessfulDetails$q = "All missing songs have been downloaded.";
var extras$q = "Extras";
var gameSettings$q = "Game Settings";
var gameVolumeDescription$q = "Adjust music volume for this game";
var helpTranslate$q = "Help translate";
var invidiousInstance$q = "Invidious Instance";
var invidiousInstanceDescription$q = "Which Invidious instance would you like to use for searching and getting audio?";
var noMusicLabel$q = "No Music";
var overrides$q = "Overrides";
var play$q = "Play";
var reset$q = "Reset";
var resetVolume$q = "Reset";
var restoreDownloads$q = "Restore downloads";
var restoreDownloadsConfirm$q = "Download all missing songs?";
var restoreDownloadsConfirmDescription$q = "This will download up to {num} songs and might take a while.";
var restoreDownloadsDescription$q = "Download all songs from manually set overrides that haven't been downloaded yet.";
var restoreDownloadsLabel$q = "Restore missing downloads";
var restoreDownloadsOperation$q = "Downloading {current}/{total}...";
var restoreDownloadsOperationTitle$q = "Downloading missing songs...";
var restoreOverrides$q = "Select backup";
var restoreOverridesConfirm$q = "Restore this backup?";
var restoreOverridesConfirmDetails$q = "This will overwrite all your current overrides!";
var restoreOverridesLabel$q = "Restore overrides from backup";
var restoreSuccessful$q = "Restore successful";
var restoreSuccessfulDetails$q = "Overrides have been restored from backup.";
var search$q = "Search";
var select$q = "Select";
var selected$q = "Selected";
var settings$q = "Settings";
var showQrCode$q = "Show QR Code";
var stop$q = "Stop";
var supportDescription$q = "Visit the Steam Deck Homebrew Discord deckbrew.xyz/discord";
var supportLabel$q = "Support";
var useYtDlp$q = "Use yt-dlp";
var useYtDlpDescription$q = "Access YouTube directly without Invidious";
var volume$q = "Music Volume";
var volumeDescription$q = "Adjust music volume";
var cs = {
	about: about$q,
	aboutDescription: aboutDescription$q,
	aboutLabel: aboutLabel$q,
	backupOverrides: backupOverrides$q,
	backupOverridesLabel: backupOverridesLabel$q,
	backupSuccessful: backupSuccessful$q,
	backupSuccessfulDetails: backupSuccessfulDetails$q,
	changeThemeMusic: changeThemeMusic$q,
	close: close$q,
	defaultMuted: defaultMuted$q,
	defaultMutedDescription: defaultMutedDescription$q,
	deleteDownloads: deleteDownloads$q,
	deleteDownloadsConfirm: deleteDownloadsConfirm$q,
	deleteDownloadsDescription: deleteDownloadsDescription$q,
	deleteDownloadsLabel: deleteDownloadsLabel$q,
	deleteOverrides: deleteOverrides$q,
	deleteOverridesConfirm: deleteOverridesConfirm$q,
	deleteOverridesDescription: deleteOverridesDescription$q,
	deleteOverridesLabel: deleteOverridesLabel$q,
	download: download$q,
	downloadAudio: downloadAudio$q,
	downloadAudioDescription: downloadAudioDescription$q,
	downloadFailed: downloadFailed$q,
	downloadFailedDetail: downloadFailedDetail$q,
	downloadRestoreSuccessful: downloadRestoreSuccessful$q,
	downloadRestoreSuccessfulDetails: downloadRestoreSuccessfulDetails$q,
	extras: extras$q,
	gameSettings: gameSettings$q,
	gameVolumeDescription: gameVolumeDescription$q,
	helpTranslate: helpTranslate$q,
	invidiousInstance: invidiousInstance$q,
	invidiousInstanceDescription: invidiousInstanceDescription$q,
	noMusicLabel: noMusicLabel$q,
	overrides: overrides$q,
	play: play$q,
	reset: reset$q,
	resetVolume: resetVolume$q,
	restoreDownloads: restoreDownloads$q,
	restoreDownloadsConfirm: restoreDownloadsConfirm$q,
	restoreDownloadsConfirmDescription: restoreDownloadsConfirmDescription$q,
	restoreDownloadsDescription: restoreDownloadsDescription$q,
	restoreDownloadsLabel: restoreDownloadsLabel$q,
	restoreDownloadsOperation: restoreDownloadsOperation$q,
	restoreDownloadsOperationTitle: restoreDownloadsOperationTitle$q,
	restoreOverrides: restoreOverrides$q,
	restoreOverridesConfirm: restoreOverridesConfirm$q,
	restoreOverridesConfirmDetails: restoreOverridesConfirmDetails$q,
	restoreOverridesLabel: restoreOverridesLabel$q,
	restoreSuccessful: restoreSuccessful$q,
	restoreSuccessfulDetails: restoreSuccessfulDetails$q,
	search: search$q,
	select: select$q,
	selected: selected$q,
	settings: settings$q,
	showQrCode: showQrCode$q,
	stop: stop$q,
	supportDescription: supportDescription$q,
	supportLabel: supportLabel$q,
	useYtDlp: useYtDlp$q,
	useYtDlpDescription: useYtDlpDescription$q,
	volume: volume$q,
	volumeDescription: volumeDescription$q
};

var about$p = "About";
var aboutDescription$p = "Play theme songs on your game pages";
var aboutLabel$p = "About Game Theme Music";
var backupOverrides$p = "Backup overrides";
var backupOverridesLabel$p = "Backup all overrides";
var backupSuccessful$p = "Backup successful";
var backupSuccessfulDetails$p = "Overrides have been backed up.";
var changeThemeMusic$p = "Change Theme Music";
var close$p = "Close";
var defaultMuted$p = "Default Muted";
var defaultMutedDescription$p = "Don't play music unless manually set";
var deleteDownloads$p = "Delete downloads";
var deleteDownloadsConfirm$p = "Are you sure you want to delete all downloaded music?";
var deleteDownloadsDescription$p = "Delete all downloaded music. This will not reset overrides.";
var deleteDownloadsLabel$p = "Delete all downloads";
var deleteOverrides$p = "Delete Overrides";
var deleteOverridesConfirm$p = "Are you sure you want to delete all overrides?";
var deleteOverridesDescription$p = "This will also delete all backups of your overrides!";
var deleteOverridesLabel$p = "Delete all overrides";
var download$p = "Download";
var downloadAudio$p = "Download Music";
var downloadAudioDescription$p = "Download selected music instead of streaming it. Only applies to newly made selections.";
var downloadFailed$p = "Download failed";
var downloadFailedDetail$p = "Could not download this music.";
var downloadRestoreSuccessful$p = "Downloads successful";
var downloadRestoreSuccessfulDetails$p = "All missing songs have been downloaded.";
var extras$p = "Extras";
var gameSettings$p = "Game Settings";
var gameVolumeDescription$p = "Adjust music volume for this game";
var helpTranslate$p = "Help translate";
var invidiousInstance$p = "Invidious Instance";
var invidiousInstanceDescription$p = "Which Invidious instance would you like to use for searching and getting audio?";
var noMusicLabel$p = "No Music";
var overrides$p = "Overrides";
var play$p = "Play";
var reset$p = "Reset";
var resetVolume$p = "Reset";
var restoreDownloads$p = "Restore downloads";
var restoreDownloadsConfirm$p = "Download all missing songs?";
var restoreDownloadsConfirmDescription$p = "This will download up to {num} songs and might take a while.";
var restoreDownloadsDescription$p = "Download all songs from manually set overrides that haven't been downloaded yet.";
var restoreDownloadsLabel$p = "Restore missing downloads";
var restoreDownloadsOperation$p = "Downloading {current}/{total}...";
var restoreDownloadsOperationTitle$p = "Downloading missing songs...";
var restoreOverrides$p = "Select backup";
var restoreOverridesConfirm$p = "Restore this backup?";
var restoreOverridesConfirmDetails$p = "This will overwrite all your current overrides!";
var restoreOverridesLabel$p = "Restore overrides from backup";
var restoreSuccessful$p = "Restore successful";
var restoreSuccessfulDetails$p = "Overrides have been restored from backup.";
var search$p = "Search";
var select$p = "Select";
var selected$p = "Selected";
var settings$p = "Settings";
var showQrCode$p = "Show QR Code";
var stop$p = "Stop";
var supportDescription$p = "Visit the Steam Deck Homebrew Discord deckbrew.xyz/discord";
var supportLabel$p = "Support";
var useYtDlp$p = "Use yt-dlp";
var useYtDlpDescription$p = "Access YouTube directly without Invidious";
var volume$p = "Music Volume";
var volumeDescription$p = "Adjust music volume";
var da = {
	about: about$p,
	aboutDescription: aboutDescription$p,
	aboutLabel: aboutLabel$p,
	backupOverrides: backupOverrides$p,
	backupOverridesLabel: backupOverridesLabel$p,
	backupSuccessful: backupSuccessful$p,
	backupSuccessfulDetails: backupSuccessfulDetails$p,
	changeThemeMusic: changeThemeMusic$p,
	close: close$p,
	defaultMuted: defaultMuted$p,
	defaultMutedDescription: defaultMutedDescription$p,
	deleteDownloads: deleteDownloads$p,
	deleteDownloadsConfirm: deleteDownloadsConfirm$p,
	deleteDownloadsDescription: deleteDownloadsDescription$p,
	deleteDownloadsLabel: deleteDownloadsLabel$p,
	deleteOverrides: deleteOverrides$p,
	deleteOverridesConfirm: deleteOverridesConfirm$p,
	deleteOverridesDescription: deleteOverridesDescription$p,
	deleteOverridesLabel: deleteOverridesLabel$p,
	download: download$p,
	downloadAudio: downloadAudio$p,
	downloadAudioDescription: downloadAudioDescription$p,
	downloadFailed: downloadFailed$p,
	downloadFailedDetail: downloadFailedDetail$p,
	downloadRestoreSuccessful: downloadRestoreSuccessful$p,
	downloadRestoreSuccessfulDetails: downloadRestoreSuccessfulDetails$p,
	extras: extras$p,
	gameSettings: gameSettings$p,
	gameVolumeDescription: gameVolumeDescription$p,
	helpTranslate: helpTranslate$p,
	invidiousInstance: invidiousInstance$p,
	invidiousInstanceDescription: invidiousInstanceDescription$p,
	noMusicLabel: noMusicLabel$p,
	overrides: overrides$p,
	play: play$p,
	reset: reset$p,
	resetVolume: resetVolume$p,
	restoreDownloads: restoreDownloads$p,
	restoreDownloadsConfirm: restoreDownloadsConfirm$p,
	restoreDownloadsConfirmDescription: restoreDownloadsConfirmDescription$p,
	restoreDownloadsDescription: restoreDownloadsDescription$p,
	restoreDownloadsLabel: restoreDownloadsLabel$p,
	restoreDownloadsOperation: restoreDownloadsOperation$p,
	restoreDownloadsOperationTitle: restoreDownloadsOperationTitle$p,
	restoreOverrides: restoreOverrides$p,
	restoreOverridesConfirm: restoreOverridesConfirm$p,
	restoreOverridesConfirmDetails: restoreOverridesConfirmDetails$p,
	restoreOverridesLabel: restoreOverridesLabel$p,
	restoreSuccessful: restoreSuccessful$p,
	restoreSuccessfulDetails: restoreSuccessfulDetails$p,
	search: search$p,
	select: select$p,
	selected: selected$p,
	settings: settings$p,
	showQrCode: showQrCode$p,
	stop: stop$p,
	supportDescription: supportDescription$p,
	supportLabel: supportLabel$p,
	useYtDlp: useYtDlp$p,
	useYtDlpDescription: useYtDlpDescription$p,
	volume: volume$p,
	volumeDescription: volumeDescription$p
};

var about$o = "Über";
var aboutDescription$o = "Spiel Titellieder auf der Spiele Seite";
var aboutLabel$o = "Über Spiel Titellieder";
var backupOverrides$o = "Überschreibungen sichern";
var backupOverridesLabel$o = "Alle Überschreibungen sichern";
var backupSuccessful$o = "Backup erfolgreich";
var backupSuccessfulDetails$o = "Überschreibungen wurden gesichert.";
var changeThemeMusic$o = "Ändere das Titellied";
var close$o = "Schließen";
var defaultMuted$o = "Stummschalten";
var defaultMutedDescription$o = "Musik nicht abspielen, außer manuell aktiviert";
var deleteDownloads$o = "Downloads löschen";
var deleteDownloadsConfirm$o = "Möchtest du wirklich alle heruntergeladene Musik löschen?";
var deleteDownloadsDescription$o = "Lösche alle heruntergeladene Musik. Überschreibungen werden nicht zurückgesetzt.";
var deleteDownloadsLabel$o = "Alle Downloads löschen";
var deleteOverrides$o = "Überschreibungen löschen";
var deleteOverridesConfirm$o = "Möchtest du wirklich alle Überschreibungen löschen?";
var deleteOverridesDescription$o = "Dies wird auch alle Backups deiner Überschreibungen löschen!";
var deleteOverridesLabel$o = "Lösche alle Überschreibungen";
var download$o = "Herunterladen";
var downloadAudio$o = "Musik herunterladen";
var downloadAudioDescription$o = "Lade die ausgewählte Musik herunter anstatt sie zu streamen. Gilt nur für neu ausgewählte Musik.";
var downloadFailed$o = "Herunterladen fehlgeschlagen";
var downloadFailedDetail$o = "Konnte diese Musik nicht herunterladen.";
var downloadRestoreSuccessful$o = "Downloads erfolgreich";
var downloadRestoreSuccessfulDetails$o = "Alle fehlenden Lieder wurden heruntergeladen.";
var extras$o = "Extras";
var gameSettings$o = "Spiel-Einstellungen";
var gameVolumeDescription$o = "Musik-Lautstärke für dieses Spiel anpassen";
var helpTranslate$o = "Help translate";
var invidiousInstance$o = "Invidious-Instanz";
var invidiousInstanceDescription$o = "Welche Invidious-Instanz möchtest du zum Suchen und Abrufen von Musik verwenden?";
var noMusicLabel$o = "Keine Musik";
var overrides$o = "Überschreibungen";
var play$o = "Abspielen";
var reset$o = "Zurücksetzen";
var resetVolume$o = "Zurücksetzen";
var restoreDownloads$o = "Downloads wiederherstellen";
var restoreDownloadsConfirm$o = "Wirklich alle fehlenden Lieder herunterladen?";
var restoreDownloadsConfirmDescription$o = "Dies wird bis zu {num} Lieder herunterladen und kann eine Weile dauern.";
var restoreDownloadsDescription$o = "Lädt alle Lieder aus Überschreibungen herunter, die noch nicht heruntergeladen wurden.";
var restoreDownloadsLabel$o = "Fehlende Downloads wiederherstellen";
var restoreDownloadsOperation$o = "Lade {current}/{total} herunter...";
var restoreDownloadsOperationTitle$o = "Lade fehlende Lieder...";
var restoreOverrides$o = "Backup wählen";
var restoreOverridesConfirm$o = "Dieses Backup wiederherstellen?";
var restoreOverridesConfirmDetails$o = "Dies wird deine aktuellen Überschreibungen verwerfen!";
var restoreOverridesLabel$o = "Überschreibungen aus Backup wiederherstellen";
var restoreSuccessful$o = "Wiederherstellung erfolgreich";
var restoreSuccessfulDetails$o = "Überschreibungen wurden erfolgreich vom Backup wiederhergestellt.";
var search$o = "Suchen";
var select$o = "Auswählen";
var selected$o = "Ausgewählt";
var settings$o = "Einstellungen";
var showQrCode$o = "Show QR Code";
var stop$o = "Stoppen";
var supportDescription$o = "Besuche den Steam Deck Homebrew Discord deckbrew.xyz/discord";
var supportLabel$o = "Hilfe";
var useYtDlp$o = "yt-dlp verwenden";
var useYtDlpDescription$o = "Direkt auf YouTube zugreifen statt über Invidious";
var volume$o = "Musik Lautstärke";
var volumeDescription$o = "Musik Lautstärke anpassen";
var de = {
	about: about$o,
	aboutDescription: aboutDescription$o,
	aboutLabel: aboutLabel$o,
	backupOverrides: backupOverrides$o,
	backupOverridesLabel: backupOverridesLabel$o,
	backupSuccessful: backupSuccessful$o,
	backupSuccessfulDetails: backupSuccessfulDetails$o,
	changeThemeMusic: changeThemeMusic$o,
	close: close$o,
	defaultMuted: defaultMuted$o,
	defaultMutedDescription: defaultMutedDescription$o,
	deleteDownloads: deleteDownloads$o,
	deleteDownloadsConfirm: deleteDownloadsConfirm$o,
	deleteDownloadsDescription: deleteDownloadsDescription$o,
	deleteDownloadsLabel: deleteDownloadsLabel$o,
	deleteOverrides: deleteOverrides$o,
	deleteOverridesConfirm: deleteOverridesConfirm$o,
	deleteOverridesDescription: deleteOverridesDescription$o,
	deleteOverridesLabel: deleteOverridesLabel$o,
	download: download$o,
	downloadAudio: downloadAudio$o,
	downloadAudioDescription: downloadAudioDescription$o,
	downloadFailed: downloadFailed$o,
	downloadFailedDetail: downloadFailedDetail$o,
	downloadRestoreSuccessful: downloadRestoreSuccessful$o,
	downloadRestoreSuccessfulDetails: downloadRestoreSuccessfulDetails$o,
	extras: extras$o,
	gameSettings: gameSettings$o,
	gameVolumeDescription: gameVolumeDescription$o,
	helpTranslate: helpTranslate$o,
	invidiousInstance: invidiousInstance$o,
	invidiousInstanceDescription: invidiousInstanceDescription$o,
	noMusicLabel: noMusicLabel$o,
	overrides: overrides$o,
	play: play$o,
	reset: reset$o,
	resetVolume: resetVolume$o,
	restoreDownloads: restoreDownloads$o,
	restoreDownloadsConfirm: restoreDownloadsConfirm$o,
	restoreDownloadsConfirmDescription: restoreDownloadsConfirmDescription$o,
	restoreDownloadsDescription: restoreDownloadsDescription$o,
	restoreDownloadsLabel: restoreDownloadsLabel$o,
	restoreDownloadsOperation: restoreDownloadsOperation$o,
	restoreDownloadsOperationTitle: restoreDownloadsOperationTitle$o,
	restoreOverrides: restoreOverrides$o,
	restoreOverridesConfirm: restoreOverridesConfirm$o,
	restoreOverridesConfirmDetails: restoreOverridesConfirmDetails$o,
	restoreOverridesLabel: restoreOverridesLabel$o,
	restoreSuccessful: restoreSuccessful$o,
	restoreSuccessfulDetails: restoreSuccessfulDetails$o,
	search: search$o,
	select: select$o,
	selected: selected$o,
	settings: settings$o,
	showQrCode: showQrCode$o,
	stop: stop$o,
	supportDescription: supportDescription$o,
	supportLabel: supportLabel$o,
	useYtDlp: useYtDlp$o,
	useYtDlpDescription: useYtDlpDescription$o,
	volume: volume$o,
	volumeDescription: volumeDescription$o
};

var about$n = "About";
var aboutDescription$n = "Play theme songs on your game pages";
var aboutLabel$n = "About Game Theme Music";
var backupOverrides$n = "Backup overrides";
var backupOverridesLabel$n = "Backup all overrides";
var backupSuccessful$n = "Backup successful";
var backupSuccessfulDetails$n = "Overrides have been backed up.";
var changeThemeMusic$n = "Change Theme Music";
var close$n = "Close";
var defaultMuted$n = "Default Muted";
var defaultMutedDescription$n = "Don't play music unless manually set";
var deleteDownloads$n = "Delete downloads";
var deleteDownloadsConfirm$n = "Are you sure you want to delete all downloaded music?";
var deleteDownloadsDescription$n = "Delete all downloaded music. This will not reset overrides.";
var deleteDownloadsLabel$n = "Delete all downloads";
var deleteOverrides$n = "Delete Overrides";
var deleteOverridesConfirm$n = "Are you sure you want to delete all overrides?";
var deleteOverridesDescription$n = "This will also delete all backups of your overrides!";
var deleteOverridesLabel$n = "Delete all overrides";
var download$n = "Download";
var downloadAudio$n = "Download Music";
var downloadAudioDescription$n = "Download selected music instead of streaming it. Only applies to newly made selections.";
var downloadFailed$n = "Download failed";
var downloadFailedDetail$n = "Could not download this music.";
var downloadRestoreSuccessful$n = "Downloads successful";
var downloadRestoreSuccessfulDetails$n = "All missing songs have been downloaded.";
var extras$n = "Extras";
var gameSettings$n = "Game Settings";
var gameVolumeDescription$n = "Adjust music volume for this game";
var helpTranslate$n = "Help translate";
var invidiousInstance$n = "Invidious Instance";
var invidiousInstanceDescription$n = "Which Invidious instance would you like to use for searching and getting audio?";
var noMusicLabel$n = "No Music";
var overrides$n = "Overrides";
var play$n = "Play";
var reset$n = "Reset";
var resetVolume$n = "Reset";
var restoreDownloads$n = "Restore downloads";
var restoreDownloadsConfirm$n = "Download all missing songs?";
var restoreDownloadsConfirmDescription$n = "This will download up to {num} songs and might take a while.";
var restoreDownloadsDescription$n = "Download all songs from manually set overrides that haven't been downloaded yet.";
var restoreDownloadsLabel$n = "Restore missing downloads";
var restoreDownloadsOperation$n = "Downloading {current}/{total}...";
var restoreDownloadsOperationTitle$n = "Downloading missing songs...";
var restoreOverrides$n = "Select backup";
var restoreOverridesConfirm$n = "Restore this backup?";
var restoreOverridesConfirmDetails$n = "This will overwrite all your current overrides!";
var restoreOverridesLabel$n = "Restore overrides from backup";
var restoreSuccessful$n = "Restore successful";
var restoreSuccessfulDetails$n = "Overrides have been restored from backup.";
var search$n = "Search";
var select$n = "Select";
var selected$n = "Selected";
var settings$n = "Settings";
var showQrCode$n = "Show QR Code";
var stop$n = "Stop";
var supportDescription$n = "Visit the Steam Deck Homebrew Discord deckbrew.xyz/discord";
var supportLabel$n = "Support";
var useYtDlp$n = "Use yt-dlp";
var useYtDlpDescription$n = "Access YouTube directly without Invidious";
var volume$n = "Music Volume";
var volumeDescription$n = "Adjust music volume";
var el = {
	about: about$n,
	aboutDescription: aboutDescription$n,
	aboutLabel: aboutLabel$n,
	backupOverrides: backupOverrides$n,
	backupOverridesLabel: backupOverridesLabel$n,
	backupSuccessful: backupSuccessful$n,
	backupSuccessfulDetails: backupSuccessfulDetails$n,
	changeThemeMusic: changeThemeMusic$n,
	close: close$n,
	defaultMuted: defaultMuted$n,
	defaultMutedDescription: defaultMutedDescription$n,
	deleteDownloads: deleteDownloads$n,
	deleteDownloadsConfirm: deleteDownloadsConfirm$n,
	deleteDownloadsDescription: deleteDownloadsDescription$n,
	deleteDownloadsLabel: deleteDownloadsLabel$n,
	deleteOverrides: deleteOverrides$n,
	deleteOverridesConfirm: deleteOverridesConfirm$n,
	deleteOverridesDescription: deleteOverridesDescription$n,
	deleteOverridesLabel: deleteOverridesLabel$n,
	download: download$n,
	downloadAudio: downloadAudio$n,
	downloadAudioDescription: downloadAudioDescription$n,
	downloadFailed: downloadFailed$n,
	downloadFailedDetail: downloadFailedDetail$n,
	downloadRestoreSuccessful: downloadRestoreSuccessful$n,
	downloadRestoreSuccessfulDetails: downloadRestoreSuccessfulDetails$n,
	extras: extras$n,
	gameSettings: gameSettings$n,
	gameVolumeDescription: gameVolumeDescription$n,
	helpTranslate: helpTranslate$n,
	invidiousInstance: invidiousInstance$n,
	invidiousInstanceDescription: invidiousInstanceDescription$n,
	noMusicLabel: noMusicLabel$n,
	overrides: overrides$n,
	play: play$n,
	reset: reset$n,
	resetVolume: resetVolume$n,
	restoreDownloads: restoreDownloads$n,
	restoreDownloadsConfirm: restoreDownloadsConfirm$n,
	restoreDownloadsConfirmDescription: restoreDownloadsConfirmDescription$n,
	restoreDownloadsDescription: restoreDownloadsDescription$n,
	restoreDownloadsLabel: restoreDownloadsLabel$n,
	restoreDownloadsOperation: restoreDownloadsOperation$n,
	restoreDownloadsOperationTitle: restoreDownloadsOperationTitle$n,
	restoreOverrides: restoreOverrides$n,
	restoreOverridesConfirm: restoreOverridesConfirm$n,
	restoreOverridesConfirmDetails: restoreOverridesConfirmDetails$n,
	restoreOverridesLabel: restoreOverridesLabel$n,
	restoreSuccessful: restoreSuccessful$n,
	restoreSuccessfulDetails: restoreSuccessfulDetails$n,
	search: search$n,
	select: select$n,
	selected: selected$n,
	settings: settings$n,
	showQrCode: showQrCode$n,
	stop: stop$n,
	supportDescription: supportDescription$n,
	supportLabel: supportLabel$n,
	useYtDlp: useYtDlp$n,
	useYtDlpDescription: useYtDlpDescription$n,
	volume: volume$n,
	volumeDescription: volumeDescription$n
};

var about$m = "About";
var aboutDescription$m = "Play theme songs on your game pages";
var aboutLabel$m = "About Game Theme Music";
var audioProvider = "Music Provider";
var audioProviderDescription = "Choose which service to use for searching music";
var backupOverrides$m = "Backup overrides";
var backupOverridesLabel$m = "Backup all overrides";
var backupSuccessful$m = "Backup successful";
var backupSuccessfulDetails$m = "Overrides have been backed up.";
var changeThemeMusic$m = "Change Theme Music";
var close$m = "Close";
var defaultMuted$m = "Default Muted";
var defaultMutedDescription$m = "Don't play music unless manually set";
var deleteDownloads$m = "Delete downloads";
var deleteDownloadsConfirm$m = "Are you sure you want to delete all downloaded music?";
var deleteDownloadsDescription$m = "Delete all downloaded music. This will not reset overrides.";
var deleteDownloadsLabel$m = "Delete all downloads";
var deleteOverrides$m = "Delete Overrides";
var deleteOverridesConfirm$m = "Are you sure you want to delete all overrides?";
var deleteOverridesDescription$m = "This will also delete all backups of your overrides!";
var deleteOverridesLabel$m = "Delete all overrides";
var download$m = "Download";
var downloadAudio$m = "Download Music";
var downloadAudioDescription$m = "Download selected music instead of streaming it. Only applies to newly made selections.";
var downloadFailed$m = "Download failed";
var downloadFailedDetail$m = "Could not download this music.";
var downloadRestoreSuccessful$m = "Downloads successful";
var downloadRestoreSuccessfulDetails$m = "All missing songs have been downloaded.";
var downloading$1 = "Downloading...";
var extras$m = "Extras";
var gameSettings$m = "Game Settings";
var gameVolumeDescription$m = "Adjust music volume for this game";
var helpTranslate$m = "Help translate";
var homepageFocusMode = "Homepage Music Mode";
var homepageFocusModeDescription = "Play music when focusing a game tile on the home/library screen. When off, music plays on the game detail page instead.";
var invidiousInstance$m = "Invidious Instance";
var invidiousInstanceDescription$m = "Which Invidious instance would you like to use for searching and getting audio?";
var musicProvider = "Music Provider";
var musicProviderDescription = "Where to look for music (YouTube or KHInsider)";
var noMusicLabel$m = "No Music";
var overrides$m = "Overrides";
var play$m = "Play";
var playbackFailed$1 = "Playback failed";
var playbackFailedDetail$1 = "Unable to fetch audio. The downloaded file may be too large or the stream has expired.";
var reset$m = "Reset";
var resetVolume$m = "Reset";
var restoreDownloads$m = "Restore downloads";
var restoreDownloadsConfirm$m = "Download all missing songs?";
var restoreDownloadsConfirmDescription$m = "This will download up to {num} songs and might take a while.";
var restoreDownloadsDescription$m = "Download all songs from manually set overrides that haven't been downloaded yet.";
var restoreDownloadsLabel$m = "Restore missing downloads";
var restoreDownloadsOperation$m = "Downloading {current}/{total}...";
var restoreDownloadsOperationTitle$m = "Downloading missing songs...";
var restoreOverrides$m = "Select backup";
var restoreOverridesConfirm$m = "Restore this backup?";
var restoreOverridesConfirmDetails$m = "This will overwrite all your current overrides!";
var restoreOverridesLabel$m = "Restore overrides from backup";
var restoreSuccessful$m = "Restore successful";
var restoreSuccessfulDetails$m = "Overrides have been restored from backup.";
var search$m = "Search";
var select$m = "Select";
var selected$m = "Selected";
var settings$m = "Settings";
var showQrCode$m = "Show QR Code";
var stop$m = "Stop";
var supportDescription$m = "Visit the Steam Deck Homebrew Discord deckbrew.xyz/discord";
var supportLabel$m = "Support";
var updateYtDlp = "Update yt-dlp";
var updateYtDlpDescription = "Download and install the latest version of yt-dlp";
var updateYtDlpFailed = "Update failed";
var updateYtDlpLabel = "Update yt-dlp binary";
var updateYtDlpSuccess = "Update successful";
var updating = "Updating...";
var useYtDlp$m = "Use yt-dlp";
var useYtDlpDescription$m = "Access YouTube directly without Invidious";
var volume$m = "Music Volume";
var volumeDescription$m = "Adjust music volume";
var en = {
	about: about$m,
	aboutDescription: aboutDescription$m,
	aboutLabel: aboutLabel$m,
	audioProvider: audioProvider,
	audioProviderDescription: audioProviderDescription,
	backupOverrides: backupOverrides$m,
	backupOverridesLabel: backupOverridesLabel$m,
	backupSuccessful: backupSuccessful$m,
	backupSuccessfulDetails: backupSuccessfulDetails$m,
	changeThemeMusic: changeThemeMusic$m,
	close: close$m,
	defaultMuted: defaultMuted$m,
	defaultMutedDescription: defaultMutedDescription$m,
	deleteDownloads: deleteDownloads$m,
	deleteDownloadsConfirm: deleteDownloadsConfirm$m,
	deleteDownloadsDescription: deleteDownloadsDescription$m,
	deleteDownloadsLabel: deleteDownloadsLabel$m,
	deleteOverrides: deleteOverrides$m,
	deleteOverridesConfirm: deleteOverridesConfirm$m,
	deleteOverridesDescription: deleteOverridesDescription$m,
	deleteOverridesLabel: deleteOverridesLabel$m,
	download: download$m,
	downloadAudio: downloadAudio$m,
	downloadAudioDescription: downloadAudioDescription$m,
	downloadFailed: downloadFailed$m,
	downloadFailedDetail: downloadFailedDetail$m,
	downloadRestoreSuccessful: downloadRestoreSuccessful$m,
	downloadRestoreSuccessfulDetails: downloadRestoreSuccessfulDetails$m,
	downloading: downloading$1,
	extras: extras$m,
	gameSettings: gameSettings$m,
	gameVolumeDescription: gameVolumeDescription$m,
	helpTranslate: helpTranslate$m,
	homepageFocusMode: homepageFocusMode,
	homepageFocusModeDescription: homepageFocusModeDescription,
	invidiousInstance: invidiousInstance$m,
	invidiousInstanceDescription: invidiousInstanceDescription$m,
	musicProvider: musicProvider,
	musicProviderDescription: musicProviderDescription,
	noMusicLabel: noMusicLabel$m,
	overrides: overrides$m,
	play: play$m,
	playbackFailed: playbackFailed$1,
	playbackFailedDetail: playbackFailedDetail$1,
	reset: reset$m,
	resetVolume: resetVolume$m,
	restoreDownloads: restoreDownloads$m,
	restoreDownloadsConfirm: restoreDownloadsConfirm$m,
	restoreDownloadsConfirmDescription: restoreDownloadsConfirmDescription$m,
	restoreDownloadsDescription: restoreDownloadsDescription$m,
	restoreDownloadsLabel: restoreDownloadsLabel$m,
	restoreDownloadsOperation: restoreDownloadsOperation$m,
	restoreDownloadsOperationTitle: restoreDownloadsOperationTitle$m,
	restoreOverrides: restoreOverrides$m,
	restoreOverridesConfirm: restoreOverridesConfirm$m,
	restoreOverridesConfirmDetails: restoreOverridesConfirmDetails$m,
	restoreOverridesLabel: restoreOverridesLabel$m,
	restoreSuccessful: restoreSuccessful$m,
	restoreSuccessfulDetails: restoreSuccessfulDetails$m,
	search: search$m,
	select: select$m,
	selected: selected$m,
	settings: settings$m,
	showQrCode: showQrCode$m,
	stop: stop$m,
	supportDescription: supportDescription$m,
	supportLabel: supportLabel$m,
	updateYtDlp: updateYtDlp,
	updateYtDlpDescription: updateYtDlpDescription,
	updateYtDlpFailed: updateYtDlpFailed,
	updateYtDlpLabel: updateYtDlpLabel,
	updateYtDlpSuccess: updateYtDlpSuccess,
	updating: updating,
	useYtDlp: useYtDlp$m,
	useYtDlpDescription: useYtDlpDescription$m,
	volume: volume$m,
	volumeDescription: volumeDescription$m
};

var about$l = "Acerca de";
var aboutDescription$l = "Reproduce temas de música en la sección de tus juegos";
var aboutLabel$l = "Acerca de Game Theme Music";
var backupOverrides$l = "Backup overrides";
var backupOverridesLabel$l = "Backup all overrides";
var backupSuccessful$l = "Backup successful";
var backupSuccessfulDetails$l = "Overrides have been backed up.";
var changeThemeMusic$l = "Cambiar tema de música";
var close$l = "Close";
var defaultMuted$l = "Silenciado por defecto";
var defaultMutedDescription$l = "Silenciar solo al seleccionar manualmente";
var deleteDownloads$l = "Delete downloads";
var deleteDownloadsConfirm$l = "Are you sure you want to delete all downloaded music?";
var deleteDownloadsDescription$l = "Delete all downloaded music. This will not reset overrides.";
var deleteDownloadsLabel$l = "Delete all downloads";
var deleteOverrides$l = "Eliminar control manual";
var deleteOverridesConfirm$l = "Are you sure you want to delete all overrides?";
var deleteOverridesDescription$l = "This will also delete all backups of your overrides!";
var deleteOverridesLabel$l = "Eliminar perfiles de control manual";
var download$l = "Download";
var downloadAudio$l = "Download Music";
var downloadAudioDescription$l = "Download selected music instead of streaming it. Only applies to newly made selections.";
var downloadFailed$l = "Download failed";
var downloadFailedDetail$l = "Could not download this music.";
var downloadRestoreSuccessful$l = "Downloads successful";
var downloadRestoreSuccessfulDetails$l = "All missing songs have been downloaded.";
var extras$l = "Extras";
var gameSettings$l = "Configuración del juego";
var gameVolumeDescription$l = "Ajustar el volumen de la música para este juego";
var helpTranslate$l = "Help translate";
var invidiousInstance$l = "Instancia de Invidious";
var invidiousInstanceDescription$l = "¿Qué instancia de Invidious te gustaría usar para buscar y obtener audio?";
var noMusicLabel$l = "Sin música";
var overrides$l = "Perfiles de control manual";
var play$l = "Reproducir";
var reset$l = "Reset";
var resetVolume$l = "Reiniciar";
var restoreDownloads$l = "Restore downloads";
var restoreDownloadsConfirm$l = "Download all missing songs?";
var restoreDownloadsConfirmDescription$l = "This will download up to {num} songs and might take a while.";
var restoreDownloadsDescription$l = "Download all songs from manually set overrides that haven't been downloaded yet.";
var restoreDownloadsLabel$l = "Restore missing downloads";
var restoreDownloadsOperation$l = "Downloading {current}/{total}...";
var restoreDownloadsOperationTitle$l = "Downloading missing songs...";
var restoreOverrides$l = "Select backup";
var restoreOverridesConfirm$l = "Restore this backup?";
var restoreOverridesConfirmDetails$l = "This will overwrite all your current overrides!";
var restoreOverridesLabel$l = "Restore overrides from backup";
var restoreSuccessful$l = "Restore successful";
var restoreSuccessfulDetails$l = "Overrides have been restored from backup.";
var search$l = "Buscar";
var select$l = "Seleccionar";
var selected$l = "Marcado";
var settings$l = "Configuración";
var showQrCode$l = "Show QR Code";
var stop$l = "Detener";
var supportDescription$l = "Visita el canal de Discord no oficial de Steam Deck deckbrew.xyz/discord";
var supportLabel$l = "Soporte";
var useYtDlp$l = "Use yt-dlp";
var useYtDlpDescription$l = "Access YouTube directly without Invidious";
var volume$l = "Volumen de la Música";
var volumeDescription$l = "Ajustar el volumen de la música";
var es = {
	about: about$l,
	aboutDescription: aboutDescription$l,
	aboutLabel: aboutLabel$l,
	backupOverrides: backupOverrides$l,
	backupOverridesLabel: backupOverridesLabel$l,
	backupSuccessful: backupSuccessful$l,
	backupSuccessfulDetails: backupSuccessfulDetails$l,
	changeThemeMusic: changeThemeMusic$l,
	close: close$l,
	defaultMuted: defaultMuted$l,
	defaultMutedDescription: defaultMutedDescription$l,
	deleteDownloads: deleteDownloads$l,
	deleteDownloadsConfirm: deleteDownloadsConfirm$l,
	deleteDownloadsDescription: deleteDownloadsDescription$l,
	deleteDownloadsLabel: deleteDownloadsLabel$l,
	deleteOverrides: deleteOverrides$l,
	deleteOverridesConfirm: deleteOverridesConfirm$l,
	deleteOverridesDescription: deleteOverridesDescription$l,
	deleteOverridesLabel: deleteOverridesLabel$l,
	download: download$l,
	downloadAudio: downloadAudio$l,
	downloadAudioDescription: downloadAudioDescription$l,
	downloadFailed: downloadFailed$l,
	downloadFailedDetail: downloadFailedDetail$l,
	downloadRestoreSuccessful: downloadRestoreSuccessful$l,
	downloadRestoreSuccessfulDetails: downloadRestoreSuccessfulDetails$l,
	extras: extras$l,
	gameSettings: gameSettings$l,
	gameVolumeDescription: gameVolumeDescription$l,
	helpTranslate: helpTranslate$l,
	invidiousInstance: invidiousInstance$l,
	invidiousInstanceDescription: invidiousInstanceDescription$l,
	noMusicLabel: noMusicLabel$l,
	overrides: overrides$l,
	play: play$l,
	reset: reset$l,
	resetVolume: resetVolume$l,
	restoreDownloads: restoreDownloads$l,
	restoreDownloadsConfirm: restoreDownloadsConfirm$l,
	restoreDownloadsConfirmDescription: restoreDownloadsConfirmDescription$l,
	restoreDownloadsDescription: restoreDownloadsDescription$l,
	restoreDownloadsLabel: restoreDownloadsLabel$l,
	restoreDownloadsOperation: restoreDownloadsOperation$l,
	restoreDownloadsOperationTitle: restoreDownloadsOperationTitle$l,
	restoreOverrides: restoreOverrides$l,
	restoreOverridesConfirm: restoreOverridesConfirm$l,
	restoreOverridesConfirmDetails: restoreOverridesConfirmDetails$l,
	restoreOverridesLabel: restoreOverridesLabel$l,
	restoreSuccessful: restoreSuccessful$l,
	restoreSuccessfulDetails: restoreSuccessfulDetails$l,
	search: search$l,
	select: select$l,
	selected: selected$l,
	settings: settings$l,
	showQrCode: showQrCode$l,
	stop: stop$l,
	supportDescription: supportDescription$l,
	supportLabel: supportLabel$l,
	useYtDlp: useYtDlp$l,
	useYtDlpDescription: useYtDlpDescription$l,
	volume: volume$l,
	volumeDescription: volumeDescription$l
};

var about$k = "Acerca de";
var aboutDescription$k = "Reproducir musica pricipal en las páginas de tu juego";
var aboutLabel$k = "Acerca de Game Theme Music";
var backupOverrides$k = "Backup overrides";
var backupOverridesLabel$k = "Backup all overrides";
var backupSuccessful$k = "Backup successful";
var backupSuccessfulDetails$k = "Overrides have been backed up.";
var changeThemeMusic$k = "Cambiar la musica principal";
var close$k = "Close";
var defaultMuted$k = "Silenciado por defecto";
var defaultMutedDescription$k = "No reproducir música a menos que se establezca manualmente";
var deleteDownloads$k = "Delete downloads";
var deleteDownloadsConfirm$k = "Are you sure you want to delete all downloaded music?";
var deleteDownloadsDescription$k = "Delete all downloaded music. This will not reset overrides.";
var deleteDownloadsLabel$k = "Delete all downloads";
var deleteOverrides$k = "Eliminar sobrescritas";
var deleteOverridesConfirm$k = "Are you sure you want to delete all overrides?";
var deleteOverridesDescription$k = "This will also delete all backups of your overrides!";
var deleteOverridesLabel$k = "Borrar todas las sobreescrituras";
var download$k = "Download";
var downloadAudio$k = "Download Music";
var downloadAudioDescription$k = "Download selected music instead of streaming it. Only applies to newly made selections.";
var downloadFailed$k = "Download failed";
var downloadFailedDetail$k = "Could not download this music.";
var downloadRestoreSuccessful$k = "Downloads successful";
var downloadRestoreSuccessfulDetails$k = "All missing songs have been downloaded.";
var extras$k = "Extras";
var gameSettings$k = "Ajustes del Juego";
var gameVolumeDescription$k = "Ajustar el volumen de la música para este juego";
var helpTranslate$k = "Help translate";
var invidiousInstance$k = "Invidious Instance";
var invidiousInstanceDescription$k = "Which Invidious instance would you like to use for searching and getting audio?";
var noMusicLabel$k = "Sin música";
var overrides$k = "Sobreescrituras";
var play$k = "Reproducir";
var reset$k = "Reset";
var resetVolume$k = "Reestablecer";
var restoreDownloads$k = "Restore downloads";
var restoreDownloadsConfirm$k = "Download all missing songs?";
var restoreDownloadsConfirmDescription$k = "This will download up to {num} songs and might take a while.";
var restoreDownloadsDescription$k = "Download all songs from manually set overrides that haven't been downloaded yet.";
var restoreDownloadsLabel$k = "Restore missing downloads";
var restoreDownloadsOperation$k = "Downloading {current}/{total}...";
var restoreDownloadsOperationTitle$k = "Downloading missing songs...";
var restoreOverrides$k = "Select backup";
var restoreOverridesConfirm$k = "Restore this backup?";
var restoreOverridesConfirmDetails$k = "This will overwrite all your current overrides!";
var restoreOverridesLabel$k = "Restore overrides from backup";
var restoreSuccessful$k = "Restore successful";
var restoreSuccessfulDetails$k = "Overrides have been restored from backup.";
var search$k = "Buscar";
var select$k = "Seleccionar";
var selected$k = "Seleccionado";
var settings$k = "Configuración";
var showQrCode$k = "Show QR Code";
var stop$k = "Detener";
var supportDescription$k = "Visita el discord de Steam Deck Homebrew deckbrew.xyz/discord";
var supportLabel$k = "Soporte";
var useYtDlp$k = "Use yt-dlp";
var useYtDlpDescription$k = "Access YouTube directly without Invidious";
var volume$k = "Volumen de la Música";
var volumeDescription$k = "Ajustar el volumen de la música";
var es419 = {
	about: about$k,
	aboutDescription: aboutDescription$k,
	aboutLabel: aboutLabel$k,
	backupOverrides: backupOverrides$k,
	backupOverridesLabel: backupOverridesLabel$k,
	backupSuccessful: backupSuccessful$k,
	backupSuccessfulDetails: backupSuccessfulDetails$k,
	changeThemeMusic: changeThemeMusic$k,
	close: close$k,
	defaultMuted: defaultMuted$k,
	defaultMutedDescription: defaultMutedDescription$k,
	deleteDownloads: deleteDownloads$k,
	deleteDownloadsConfirm: deleteDownloadsConfirm$k,
	deleteDownloadsDescription: deleteDownloadsDescription$k,
	deleteDownloadsLabel: deleteDownloadsLabel$k,
	deleteOverrides: deleteOverrides$k,
	deleteOverridesConfirm: deleteOverridesConfirm$k,
	deleteOverridesDescription: deleteOverridesDescription$k,
	deleteOverridesLabel: deleteOverridesLabel$k,
	download: download$k,
	downloadAudio: downloadAudio$k,
	downloadAudioDescription: downloadAudioDescription$k,
	downloadFailed: downloadFailed$k,
	downloadFailedDetail: downloadFailedDetail$k,
	downloadRestoreSuccessful: downloadRestoreSuccessful$k,
	downloadRestoreSuccessfulDetails: downloadRestoreSuccessfulDetails$k,
	extras: extras$k,
	gameSettings: gameSettings$k,
	gameVolumeDescription: gameVolumeDescription$k,
	helpTranslate: helpTranslate$k,
	invidiousInstance: invidiousInstance$k,
	invidiousInstanceDescription: invidiousInstanceDescription$k,
	noMusicLabel: noMusicLabel$k,
	overrides: overrides$k,
	play: play$k,
	reset: reset$k,
	resetVolume: resetVolume$k,
	restoreDownloads: restoreDownloads$k,
	restoreDownloadsConfirm: restoreDownloadsConfirm$k,
	restoreDownloadsConfirmDescription: restoreDownloadsConfirmDescription$k,
	restoreDownloadsDescription: restoreDownloadsDescription$k,
	restoreDownloadsLabel: restoreDownloadsLabel$k,
	restoreDownloadsOperation: restoreDownloadsOperation$k,
	restoreDownloadsOperationTitle: restoreDownloadsOperationTitle$k,
	restoreOverrides: restoreOverrides$k,
	restoreOverridesConfirm: restoreOverridesConfirm$k,
	restoreOverridesConfirmDetails: restoreOverridesConfirmDetails$k,
	restoreOverridesLabel: restoreOverridesLabel$k,
	restoreSuccessful: restoreSuccessful$k,
	restoreSuccessfulDetails: restoreSuccessfulDetails$k,
	search: search$k,
	select: select$k,
	selected: selected$k,
	settings: settings$k,
	showQrCode: showQrCode$k,
	stop: stop$k,
	supportDescription: supportDescription$k,
	supportLabel: supportLabel$k,
	useYtDlp: useYtDlp$k,
	useYtDlpDescription: useYtDlpDescription$k,
	volume: volume$k,
	volumeDescription: volumeDescription$k
};

var about$j = "Tietoa";
var aboutDescription$j = "Soita teema kappaleita pelien sivuilla";
var aboutLabel$j = "Tietoa pelin teema musiikista";
var backupOverrides$j = "Backup overrides";
var backupOverridesLabel$j = "Backup all overrides";
var backupSuccessful$j = "Backup successful";
var backupSuccessfulDetails$j = "Overrides have been backed up.";
var changeThemeMusic$j = "Vaihda teema musiikki";
var close$j = "Close";
var defaultMuted$j = "Oletuksena Mykistetty";
var defaultMutedDescription$j = "Älä soita musiikkia, jos sitä ei ole manuaalisesti asetettu";
var deleteDownloads$j = "Delete downloads";
var deleteDownloadsConfirm$j = "Are you sure you want to delete all downloaded music?";
var deleteDownloadsDescription$j = "Delete all downloaded music. This will not reset overrides.";
var deleteDownloadsLabel$j = "Delete all downloads";
var deleteOverrides$j = "Poista Ylikirjoitukset";
var deleteOverridesConfirm$j = "Are you sure you want to delete all overrides?";
var deleteOverridesDescription$j = "This will also delete all backups of your overrides!";
var deleteOverridesLabel$j = "Poista Kaikki Ylikirjoitukset";
var download$j = "Download";
var downloadAudio$j = "Download Music";
var downloadAudioDescription$j = "Download selected music instead of streaming it. Only applies to newly made selections.";
var downloadFailed$j = "Download failed";
var downloadFailedDetail$j = "Could not download this music.";
var downloadRestoreSuccessful$j = "Downloads successful";
var downloadRestoreSuccessfulDetails$j = "All missing songs have been downloaded.";
var extras$j = "Extras";
var gameSettings$j = "Pelin asetukset";
var gameVolumeDescription$j = "Säädä musiikin äänenvoimakkuutta tälle pelille";
var helpTranslate$j = "Help translate";
var invidiousInstance$j = "Invidious Instance";
var invidiousInstanceDescription$j = "Which Invidious instance would you like to use for searching and getting audio?";
var noMusicLabel$j = "Ei musiikkia";
var overrides$j = "Ylikirjoitukset";
var play$j = "Soita";
var reset$j = "Reset";
var resetVolume$j = "Palauta";
var restoreDownloads$j = "Restore downloads";
var restoreDownloadsConfirm$j = "Download all missing songs?";
var restoreDownloadsConfirmDescription$j = "This will download up to {num} songs and might take a while.";
var restoreDownloadsDescription$j = "Download all songs from manually set overrides that haven't been downloaded yet.";
var restoreDownloadsLabel$j = "Restore missing downloads";
var restoreDownloadsOperation$j = "Downloading {current}/{total}...";
var restoreDownloadsOperationTitle$j = "Downloading missing songs...";
var restoreOverrides$j = "Select backup";
var restoreOverridesConfirm$j = "Restore this backup?";
var restoreOverridesConfirmDetails$j = "This will overwrite all your current overrides!";
var restoreOverridesLabel$j = "Restore overrides from backup";
var restoreSuccessful$j = "Restore successful";
var restoreSuccessfulDetails$j = "Overrides have been restored from backup.";
var search$j = "Hae";
var select$j = "Valitse";
var selected$j = "Valittu";
var settings$j = "Asetukset";
var showQrCode$j = "Show QR Code";
var stop$j = "Pysäytä";
var supportDescription$j = "Liity Steam Deck Homebrew Discord-palvelimeen. deckbrew.xyz/discord";
var supportLabel$j = "Tuki";
var useYtDlp$j = "Use yt-dlp";
var useYtDlpDescription$j = "Access YouTube directly without Invidious";
var volume$j = "Musiikin äänenvoimakkuus";
var volumeDescription$j = "Säädä musiikin äänenvoimakkuutta";
var fi = {
	about: about$j,
	aboutDescription: aboutDescription$j,
	aboutLabel: aboutLabel$j,
	backupOverrides: backupOverrides$j,
	backupOverridesLabel: backupOverridesLabel$j,
	backupSuccessful: backupSuccessful$j,
	backupSuccessfulDetails: backupSuccessfulDetails$j,
	changeThemeMusic: changeThemeMusic$j,
	close: close$j,
	defaultMuted: defaultMuted$j,
	defaultMutedDescription: defaultMutedDescription$j,
	deleteDownloads: deleteDownloads$j,
	deleteDownloadsConfirm: deleteDownloadsConfirm$j,
	deleteDownloadsDescription: deleteDownloadsDescription$j,
	deleteDownloadsLabel: deleteDownloadsLabel$j,
	deleteOverrides: deleteOverrides$j,
	deleteOverridesConfirm: deleteOverridesConfirm$j,
	deleteOverridesDescription: deleteOverridesDescription$j,
	deleteOverridesLabel: deleteOverridesLabel$j,
	download: download$j,
	downloadAudio: downloadAudio$j,
	downloadAudioDescription: downloadAudioDescription$j,
	downloadFailed: downloadFailed$j,
	downloadFailedDetail: downloadFailedDetail$j,
	downloadRestoreSuccessful: downloadRestoreSuccessful$j,
	downloadRestoreSuccessfulDetails: downloadRestoreSuccessfulDetails$j,
	extras: extras$j,
	gameSettings: gameSettings$j,
	gameVolumeDescription: gameVolumeDescription$j,
	helpTranslate: helpTranslate$j,
	invidiousInstance: invidiousInstance$j,
	invidiousInstanceDescription: invidiousInstanceDescription$j,
	noMusicLabel: noMusicLabel$j,
	overrides: overrides$j,
	play: play$j,
	reset: reset$j,
	resetVolume: resetVolume$j,
	restoreDownloads: restoreDownloads$j,
	restoreDownloadsConfirm: restoreDownloadsConfirm$j,
	restoreDownloadsConfirmDescription: restoreDownloadsConfirmDescription$j,
	restoreDownloadsDescription: restoreDownloadsDescription$j,
	restoreDownloadsLabel: restoreDownloadsLabel$j,
	restoreDownloadsOperation: restoreDownloadsOperation$j,
	restoreDownloadsOperationTitle: restoreDownloadsOperationTitle$j,
	restoreOverrides: restoreOverrides$j,
	restoreOverridesConfirm: restoreOverridesConfirm$j,
	restoreOverridesConfirmDetails: restoreOverridesConfirmDetails$j,
	restoreOverridesLabel: restoreOverridesLabel$j,
	restoreSuccessful: restoreSuccessful$j,
	restoreSuccessfulDetails: restoreSuccessfulDetails$j,
	search: search$j,
	select: select$j,
	selected: selected$j,
	settings: settings$j,
	showQrCode: showQrCode$j,
	stop: stop$j,
	supportDescription: supportDescription$j,
	supportLabel: supportLabel$j,
	useYtDlp: useYtDlp$j,
	useYtDlpDescription: useYtDlpDescription$j,
	volume: volume$j,
	volumeDescription: volumeDescription$j
};

var about$i = "À propos";
var aboutDescription$i = "Jouez le thème musical de vos jeux sur leur page de présentation";
var aboutLabel$i = "À propos de l'extension Game Theme Music";
var backupOverrides$i = "Backup overrides";
var backupOverridesLabel$i = "Backup all overrides";
var backupSuccessful$i = "Backup successful";
var backupSuccessfulDetails$i = "Overrides have been backed up.";
var changeThemeMusic$i = "Changer le thème musical";
var close$i = "Close";
var defaultMuted$i = "Muet par défaut";
var defaultMutedDescription$i = "Ne jouez la musique que si elle est définie manuellement";
var deleteDownloads$i = "Delete downloads";
var deleteDownloadsConfirm$i = "Are you sure you want to delete all downloaded music?";
var deleteDownloadsDescription$i = "Delete all downloaded music. This will not reset overrides.";
var deleteDownloadsLabel$i = "Delete all downloads";
var deleteOverrides$i = "Supprimer les remplacements";
var deleteOverridesConfirm$i = "Are you sure you want to delete all overrides?";
var deleteOverridesDescription$i = "This will also delete all backups of your overrides!";
var deleteOverridesLabel$i = "Supprimer tous les remplacements";
var download$i = "Download";
var downloadAudio$i = "Download Music";
var downloadAudioDescription$i = "Download selected music instead of streaming it. Only applies to newly made selections.";
var downloadFailed$i = "Download failed";
var downloadFailedDetail$i = "Could not download this music.";
var downloadRestoreSuccessful$i = "Downloads successful";
var downloadRestoreSuccessfulDetails$i = "All missing songs have been downloaded.";
var extras$i = "Extras";
var gameSettings$i = "Paramètres du jeu";
var gameVolumeDescription$i = "Ajuster le volume de la musique pour ce jeu";
var helpTranslate$i = "Help translate";
var invidiousInstance$i = "Invidious Instance";
var invidiousInstanceDescription$i = "Which Invidious instance would you like to use for searching and getting audio?";
var noMusicLabel$i = "Aucune musique";
var overrides$i = "Remplacements";
var play$i = "Lire";
var reset$i = "Reset";
var resetVolume$i = "Réinitialiser";
var restoreDownloads$i = "Restore downloads";
var restoreDownloadsConfirm$i = "Download all missing songs?";
var restoreDownloadsConfirmDescription$i = "This will download up to {num} songs and might take a while.";
var restoreDownloadsDescription$i = "Download all songs from manually set overrides that haven't been downloaded yet.";
var restoreDownloadsLabel$i = "Restore missing downloads";
var restoreDownloadsOperation$i = "Downloading {current}/{total}...";
var restoreDownloadsOperationTitle$i = "Downloading missing songs...";
var restoreOverrides$i = "Select backup";
var restoreOverridesConfirm$i = "Restore this backup?";
var restoreOverridesConfirmDetails$i = "This will overwrite all your current overrides!";
var restoreOverridesLabel$i = "Restore overrides from backup";
var restoreSuccessful$i = "Restore successful";
var restoreSuccessfulDetails$i = "Overrides have been restored from backup.";
var search$i = "Rechercher";
var select$i = "Sélectionner";
var selected$i = "Sélectionné";
var settings$i = "Paramètres";
var showQrCode$i = "Show QR Code";
var stop$i = "Arrêter";
var supportDescription$i = "Visitez le serveur Discord \"Steam Deck Homebrew\" deckbrew.xyz/discord";
var supportLabel$i = "Assistance";
var useYtDlp$i = "Use yt-dlp";
var useYtDlpDescription$i = "Access YouTube directly without Invidious";
var volume$i = "Volume de la musique";
var volumeDescription$i = "Ajuster le volume de la musique";
var fr = {
	about: about$i,
	aboutDescription: aboutDescription$i,
	aboutLabel: aboutLabel$i,
	backupOverrides: backupOverrides$i,
	backupOverridesLabel: backupOverridesLabel$i,
	backupSuccessful: backupSuccessful$i,
	backupSuccessfulDetails: backupSuccessfulDetails$i,
	changeThemeMusic: changeThemeMusic$i,
	close: close$i,
	defaultMuted: defaultMuted$i,
	defaultMutedDescription: defaultMutedDescription$i,
	deleteDownloads: deleteDownloads$i,
	deleteDownloadsConfirm: deleteDownloadsConfirm$i,
	deleteDownloadsDescription: deleteDownloadsDescription$i,
	deleteDownloadsLabel: deleteDownloadsLabel$i,
	deleteOverrides: deleteOverrides$i,
	deleteOverridesConfirm: deleteOverridesConfirm$i,
	deleteOverridesDescription: deleteOverridesDescription$i,
	deleteOverridesLabel: deleteOverridesLabel$i,
	download: download$i,
	downloadAudio: downloadAudio$i,
	downloadAudioDescription: downloadAudioDescription$i,
	downloadFailed: downloadFailed$i,
	downloadFailedDetail: downloadFailedDetail$i,
	downloadRestoreSuccessful: downloadRestoreSuccessful$i,
	downloadRestoreSuccessfulDetails: downloadRestoreSuccessfulDetails$i,
	extras: extras$i,
	gameSettings: gameSettings$i,
	gameVolumeDescription: gameVolumeDescription$i,
	helpTranslate: helpTranslate$i,
	invidiousInstance: invidiousInstance$i,
	invidiousInstanceDescription: invidiousInstanceDescription$i,
	noMusicLabel: noMusicLabel$i,
	overrides: overrides$i,
	play: play$i,
	reset: reset$i,
	resetVolume: resetVolume$i,
	restoreDownloads: restoreDownloads$i,
	restoreDownloadsConfirm: restoreDownloadsConfirm$i,
	restoreDownloadsConfirmDescription: restoreDownloadsConfirmDescription$i,
	restoreDownloadsDescription: restoreDownloadsDescription$i,
	restoreDownloadsLabel: restoreDownloadsLabel$i,
	restoreDownloadsOperation: restoreDownloadsOperation$i,
	restoreDownloadsOperationTitle: restoreDownloadsOperationTitle$i,
	restoreOverrides: restoreOverrides$i,
	restoreOverridesConfirm: restoreOverridesConfirm$i,
	restoreOverridesConfirmDetails: restoreOverridesConfirmDetails$i,
	restoreOverridesLabel: restoreOverridesLabel$i,
	restoreSuccessful: restoreSuccessful$i,
	restoreSuccessfulDetails: restoreSuccessfulDetails$i,
	search: search$i,
	select: select$i,
	selected: selected$i,
	settings: settings$i,
	showQrCode: showQrCode$i,
	stop: stop$i,
	supportDescription: supportDescription$i,
	supportLabel: supportLabel$i,
	useYtDlp: useYtDlp$i,
	useYtDlpDescription: useYtDlpDescription$i,
	volume: volume$i,
	volumeDescription: volumeDescription$i
};

var about$h = "About";
var aboutDescription$h = "Play theme songs on your game pages";
var aboutLabel$h = "About Game Theme Music";
var backupOverrides$h = "Backup overrides";
var backupOverridesLabel$h = "Backup all overrides";
var backupSuccessful$h = "Backup successful";
var backupSuccessfulDetails$h = "Overrides have been backed up.";
var changeThemeMusic$h = "Change Theme Music";
var close$h = "Close";
var defaultMuted$h = "Default Muted";
var defaultMutedDescription$h = "Don't play music unless manually set";
var deleteDownloads$h = "Delete downloads";
var deleteDownloadsConfirm$h = "Are you sure you want to delete all downloaded music?";
var deleteDownloadsDescription$h = "Delete all downloaded music. This will not reset overrides.";
var deleteDownloadsLabel$h = "Delete all downloads";
var deleteOverrides$h = "Delete Overrides";
var deleteOverridesConfirm$h = "Are you sure you want to delete all overrides?";
var deleteOverridesDescription$h = "This will also delete all backups of your overrides!";
var deleteOverridesLabel$h = "Delete all overrides";
var download$h = "Download";
var downloadAudio$h = "Download Music";
var downloadAudioDescription$h = "Download selected music instead of streaming it. Only applies to newly made selections.";
var downloadFailed$h = "Download failed";
var downloadFailedDetail$h = "Could not download this music.";
var downloadRestoreSuccessful$h = "Downloads successful";
var downloadRestoreSuccessfulDetails$h = "All missing songs have been downloaded.";
var extras$h = "Extras";
var gameSettings$h = "Game Settings";
var gameVolumeDescription$h = "Adjust music volume for this game";
var helpTranslate$h = "Help translate";
var invidiousInstance$h = "Invidious Instance";
var invidiousInstanceDescription$h = "Which Invidious instance would you like to use for searching and getting audio?";
var noMusicLabel$h = "No Music";
var overrides$h = "Overrides";
var play$h = "Play";
var reset$h = "Reset";
var resetVolume$h = "Reset";
var restoreDownloads$h = "Restore downloads";
var restoreDownloadsConfirm$h = "Download all missing songs?";
var restoreDownloadsConfirmDescription$h = "This will download up to {num} songs and might take a while.";
var restoreDownloadsDescription$h = "Download all songs from manually set overrides that haven't been downloaded yet.";
var restoreDownloadsLabel$h = "Restore missing downloads";
var restoreDownloadsOperation$h = "Downloading {current}/{total}...";
var restoreDownloadsOperationTitle$h = "Downloading missing songs...";
var restoreOverrides$h = "Select backup";
var restoreOverridesConfirm$h = "Restore this backup?";
var restoreOverridesConfirmDetails$h = "This will overwrite all your current overrides!";
var restoreOverridesLabel$h = "Restore overrides from backup";
var restoreSuccessful$h = "Restore successful";
var restoreSuccessfulDetails$h = "Overrides have been restored from backup.";
var search$h = "Search";
var select$h = "Select";
var selected$h = "Selected";
var settings$h = "Settings";
var showQrCode$h = "Show QR Code";
var stop$h = "Stop";
var supportDescription$h = "Visit the Steam Deck Homebrew Discord deckbrew.xyz/discord";
var supportLabel$h = "Support";
var useYtDlp$h = "Use yt-dlp";
var useYtDlpDescription$h = "Access YouTube directly without Invidious";
var volume$h = "Music Volume";
var volumeDescription$h = "Adjust music volume";
var hu = {
	about: about$h,
	aboutDescription: aboutDescription$h,
	aboutLabel: aboutLabel$h,
	backupOverrides: backupOverrides$h,
	backupOverridesLabel: backupOverridesLabel$h,
	backupSuccessful: backupSuccessful$h,
	backupSuccessfulDetails: backupSuccessfulDetails$h,
	changeThemeMusic: changeThemeMusic$h,
	close: close$h,
	defaultMuted: defaultMuted$h,
	defaultMutedDescription: defaultMutedDescription$h,
	deleteDownloads: deleteDownloads$h,
	deleteDownloadsConfirm: deleteDownloadsConfirm$h,
	deleteDownloadsDescription: deleteDownloadsDescription$h,
	deleteDownloadsLabel: deleteDownloadsLabel$h,
	deleteOverrides: deleteOverrides$h,
	deleteOverridesConfirm: deleteOverridesConfirm$h,
	deleteOverridesDescription: deleteOverridesDescription$h,
	deleteOverridesLabel: deleteOverridesLabel$h,
	download: download$h,
	downloadAudio: downloadAudio$h,
	downloadAudioDescription: downloadAudioDescription$h,
	downloadFailed: downloadFailed$h,
	downloadFailedDetail: downloadFailedDetail$h,
	downloadRestoreSuccessful: downloadRestoreSuccessful$h,
	downloadRestoreSuccessfulDetails: downloadRestoreSuccessfulDetails$h,
	extras: extras$h,
	gameSettings: gameSettings$h,
	gameVolumeDescription: gameVolumeDescription$h,
	helpTranslate: helpTranslate$h,
	invidiousInstance: invidiousInstance$h,
	invidiousInstanceDescription: invidiousInstanceDescription$h,
	noMusicLabel: noMusicLabel$h,
	overrides: overrides$h,
	play: play$h,
	reset: reset$h,
	resetVolume: resetVolume$h,
	restoreDownloads: restoreDownloads$h,
	restoreDownloadsConfirm: restoreDownloadsConfirm$h,
	restoreDownloadsConfirmDescription: restoreDownloadsConfirmDescription$h,
	restoreDownloadsDescription: restoreDownloadsDescription$h,
	restoreDownloadsLabel: restoreDownloadsLabel$h,
	restoreDownloadsOperation: restoreDownloadsOperation$h,
	restoreDownloadsOperationTitle: restoreDownloadsOperationTitle$h,
	restoreOverrides: restoreOverrides$h,
	restoreOverridesConfirm: restoreOverridesConfirm$h,
	restoreOverridesConfirmDetails: restoreOverridesConfirmDetails$h,
	restoreOverridesLabel: restoreOverridesLabel$h,
	restoreSuccessful: restoreSuccessful$h,
	restoreSuccessfulDetails: restoreSuccessfulDetails$h,
	search: search$h,
	select: select$h,
	selected: selected$h,
	settings: settings$h,
	showQrCode: showQrCode$h,
	stop: stop$h,
	supportDescription: supportDescription$h,
	supportLabel: supportLabel$h,
	useYtDlp: useYtDlp$h,
	useYtDlpDescription: useYtDlpDescription$h,
	volume: volume$h,
	volumeDescription: volumeDescription$h
};

var about$g = "Riguardo a";
var aboutDescription$g = "Riproduce musica a tema nelle schede dei tuoi giochi";
var aboutLabel$g = "Riguardo a Game Theme Music";
var backupOverrides$g = "Backup overrides";
var backupOverridesLabel$g = "Backup all overrides";
var backupSuccessful$g = "Backup successful";
var backupSuccessfulDetails$g = "Overrides have been backed up.";
var changeThemeMusic$g = "Cambia musica a tema";
var close$g = "Close";
var defaultMuted$g = "Mutato di default";
var defaultMutedDescription$g = "Non riprodurre la musica se non abilitato manualmente per titolo";
var deleteDownloads$g = "Delete downloads";
var deleteDownloadsConfirm$g = "Are you sure you want to delete all downloaded music?";
var deleteDownloadsDescription$g = "Delete all downloaded music. This will not reset overrides.";
var deleteDownloadsLabel$g = "Delete all downloads";
var deleteOverrides$g = "Override della route";
var deleteOverridesConfirm$g = "Are you sure you want to delete all overrides?";
var deleteOverridesDescription$g = "This will also delete all backups of your overrides!";
var deleteOverridesLabel$g = "Override cancellato";
var download$g = "Download";
var downloadAudio$g = "Download Music";
var downloadAudioDescription$g = "Download selected music instead of streaming it. Only applies to newly made selections.";
var downloadFailed$g = "Download failed";
var downloadFailedDetail$g = "Could not download this music.";
var downloadRestoreSuccessful$g = "Downloads successful";
var downloadRestoreSuccessfulDetails$g = "All missing songs have been downloaded.";
var extras$g = "Extras";
var gameSettings$g = "Impostazioni gioco";
var gameVolumeDescription$g = "Regola il volume della musica per questo titolo";
var helpTranslate$g = "Help translate";
var invidiousInstance$g = "Invidious Instance";
var invidiousInstanceDescription$g = "Which Invidious instance would you like to use for searching and getting audio?";
var noMusicLabel$g = "Nessuna musica";
var overrides$g = "Overrides";
var play$g = "Riproduci";
var reset$g = "Reset";
var resetVolume$g = "Resetta";
var restoreDownloads$g = "Restore downloads";
var restoreDownloadsConfirm$g = "Download all missing songs?";
var restoreDownloadsConfirmDescription$g = "This will download up to {num} songs and might take a while.";
var restoreDownloadsDescription$g = "Download all songs from manually set overrides that haven't been downloaded yet.";
var restoreDownloadsLabel$g = "Restore missing downloads";
var restoreDownloadsOperation$g = "Downloading {current}/{total}...";
var restoreDownloadsOperationTitle$g = "Downloading missing songs...";
var restoreOverrides$g = "Select backup";
var restoreOverridesConfirm$g = "Restore this backup?";
var restoreOverridesConfirmDetails$g = "This will overwrite all your current overrides!";
var restoreOverridesLabel$g = "Restore overrides from backup";
var restoreSuccessful$g = "Restore successful";
var restoreSuccessfulDetails$g = "Overrides have been restored from backup.";
var search$g = "Cerca";
var select$g = "Seleziona";
var selected$g = "Selezionato";
var settings$g = "Impostazioni";
var showQrCode$g = "Show QR Code";
var stop$g = "Ferma";
var supportDescription$g = "Visita il Discord di Steam Deck Homebrew deckbrew.xyz/discord";
var supportLabel$g = "Supporto";
var useYtDlp$g = "Use yt-dlp";
var useYtDlpDescription$g = "Access YouTube directly without Invidious";
var volume$g = "Volume musica";
var volumeDescription$g = "Regola il volume della musica";
var it = {
	about: about$g,
	aboutDescription: aboutDescription$g,
	aboutLabel: aboutLabel$g,
	backupOverrides: backupOverrides$g,
	backupOverridesLabel: backupOverridesLabel$g,
	backupSuccessful: backupSuccessful$g,
	backupSuccessfulDetails: backupSuccessfulDetails$g,
	changeThemeMusic: changeThemeMusic$g,
	close: close$g,
	defaultMuted: defaultMuted$g,
	defaultMutedDescription: defaultMutedDescription$g,
	deleteDownloads: deleteDownloads$g,
	deleteDownloadsConfirm: deleteDownloadsConfirm$g,
	deleteDownloadsDescription: deleteDownloadsDescription$g,
	deleteDownloadsLabel: deleteDownloadsLabel$g,
	deleteOverrides: deleteOverrides$g,
	deleteOverridesConfirm: deleteOverridesConfirm$g,
	deleteOverridesDescription: deleteOverridesDescription$g,
	deleteOverridesLabel: deleteOverridesLabel$g,
	download: download$g,
	downloadAudio: downloadAudio$g,
	downloadAudioDescription: downloadAudioDescription$g,
	downloadFailed: downloadFailed$g,
	downloadFailedDetail: downloadFailedDetail$g,
	downloadRestoreSuccessful: downloadRestoreSuccessful$g,
	downloadRestoreSuccessfulDetails: downloadRestoreSuccessfulDetails$g,
	extras: extras$g,
	gameSettings: gameSettings$g,
	gameVolumeDescription: gameVolumeDescription$g,
	helpTranslate: helpTranslate$g,
	invidiousInstance: invidiousInstance$g,
	invidiousInstanceDescription: invidiousInstanceDescription$g,
	noMusicLabel: noMusicLabel$g,
	overrides: overrides$g,
	play: play$g,
	reset: reset$g,
	resetVolume: resetVolume$g,
	restoreDownloads: restoreDownloads$g,
	restoreDownloadsConfirm: restoreDownloadsConfirm$g,
	restoreDownloadsConfirmDescription: restoreDownloadsConfirmDescription$g,
	restoreDownloadsDescription: restoreDownloadsDescription$g,
	restoreDownloadsLabel: restoreDownloadsLabel$g,
	restoreDownloadsOperation: restoreDownloadsOperation$g,
	restoreDownloadsOperationTitle: restoreDownloadsOperationTitle$g,
	restoreOverrides: restoreOverrides$g,
	restoreOverridesConfirm: restoreOverridesConfirm$g,
	restoreOverridesConfirmDetails: restoreOverridesConfirmDetails$g,
	restoreOverridesLabel: restoreOverridesLabel$g,
	restoreSuccessful: restoreSuccessful$g,
	restoreSuccessfulDetails: restoreSuccessfulDetails$g,
	search: search$g,
	select: select$g,
	selected: selected$g,
	settings: settings$g,
	showQrCode: showQrCode$g,
	stop: stop$g,
	supportDescription: supportDescription$g,
	supportLabel: supportLabel$g,
	useYtDlp: useYtDlp$g,
	useYtDlpDescription: useYtDlpDescription$g,
	volume: volume$g,
	volumeDescription: volumeDescription$g
};

var about$f = "紹介";
var aboutDescription$f = "ゲームページで主題歌を再生する";
var aboutLabel$f = "ゲームの主題歌について";
var backupOverrides$f = "Backup overrides";
var backupOverridesLabel$f = "Backup all overrides";
var backupSuccessful$f = "Backup successful";
var backupSuccessfulDetails$f = "Overrides have been backed up.";
var changeThemeMusic$f = "主題歌を変える";
var close$f = "Close";
var defaultMuted$f = "デフォルトミュート";
var defaultMutedDescription$f = "手動設置で主題歌を再生する";
var deleteDownloads$f = "Delete downloads";
var deleteDownloadsConfirm$f = "Are you sure you want to delete all downloaded music?";
var deleteDownloadsDescription$f = "Delete all downloaded music. This will not reset overrides.";
var deleteDownloadsLabel$f = "Delete all downloads";
var deleteOverrides$f = "オーバーライドを削除";
var deleteOverridesConfirm$f = "Are you sure you want to delete all overrides?";
var deleteOverridesDescription$f = "This will also delete all backups of your overrides!";
var deleteOverridesLabel$f = "全てのオーバーライドを削除する";
var download$f = "Download";
var downloadAudio$f = "Download Music";
var downloadAudioDescription$f = "Download selected music instead of streaming it. Only applies to newly made selections.";
var downloadFailed$f = "Download failed";
var downloadFailedDetail$f = "Could not download this music.";
var downloadRestoreSuccessful$f = "Downloads successful";
var downloadRestoreSuccessfulDetails$f = "All missing songs have been downloaded.";
var extras$f = "Extras";
var gameSettings$f = "ゲーム設定";
var gameVolumeDescription$f = "ゲームのため、主題歌を調整する";
var helpTranslate$f = "Help translate";
var invidiousInstance$f = "Invidious Instance";
var invidiousInstanceDescription$f = "Which Invidious instance would you like to use for searching and getting audio?";
var noMusicLabel$f = "音楽なし";
var overrides$f = "オーバーライド";
var play$f = "再生";
var reset$f = "Reset";
var resetVolume$f = "リセット";
var restoreDownloads$f = "Restore downloads";
var restoreDownloadsConfirm$f = "Download all missing songs?";
var restoreDownloadsConfirmDescription$f = "This will download up to {num} songs and might take a while.";
var restoreDownloadsDescription$f = "Download all songs from manually set overrides that haven't been downloaded yet.";
var restoreDownloadsLabel$f = "Restore missing downloads";
var restoreDownloadsOperation$f = "Downloading {current}/{total}...";
var restoreDownloadsOperationTitle$f = "Downloading missing songs...";
var restoreOverrides$f = "Select backup";
var restoreOverridesConfirm$f = "Restore this backup?";
var restoreOverridesConfirmDetails$f = "This will overwrite all your current overrides!";
var restoreOverridesLabel$f = "Restore overrides from backup";
var restoreSuccessful$f = "Restore successful";
var restoreSuccessfulDetails$f = "Overrides have been restored from backup.";
var search$f = "検索";
var select$f = "選択";
var selected$f = "したした";
var settings$f = "設定";
var showQrCode$f = "Show QR Code";
var stop$f = "中止";
var supportDescription$f = "スチームデック自作の ディスコードdeckbrew.xyz/discordを訪ねる";
var supportLabel$f = "サポート";
var useYtDlp$f = "Use yt-dlp";
var useYtDlpDescription$f = "Access YouTube directly without Invidious";
var volume$f = "音量";
var volumeDescription$f = "音量調整";
var ja = {
	about: about$f,
	aboutDescription: aboutDescription$f,
	aboutLabel: aboutLabel$f,
	backupOverrides: backupOverrides$f,
	backupOverridesLabel: backupOverridesLabel$f,
	backupSuccessful: backupSuccessful$f,
	backupSuccessfulDetails: backupSuccessfulDetails$f,
	changeThemeMusic: changeThemeMusic$f,
	close: close$f,
	defaultMuted: defaultMuted$f,
	defaultMutedDescription: defaultMutedDescription$f,
	deleteDownloads: deleteDownloads$f,
	deleteDownloadsConfirm: deleteDownloadsConfirm$f,
	deleteDownloadsDescription: deleteDownloadsDescription$f,
	deleteDownloadsLabel: deleteDownloadsLabel$f,
	deleteOverrides: deleteOverrides$f,
	deleteOverridesConfirm: deleteOverridesConfirm$f,
	deleteOverridesDescription: deleteOverridesDescription$f,
	deleteOverridesLabel: deleteOverridesLabel$f,
	download: download$f,
	downloadAudio: downloadAudio$f,
	downloadAudioDescription: downloadAudioDescription$f,
	downloadFailed: downloadFailed$f,
	downloadFailedDetail: downloadFailedDetail$f,
	downloadRestoreSuccessful: downloadRestoreSuccessful$f,
	downloadRestoreSuccessfulDetails: downloadRestoreSuccessfulDetails$f,
	extras: extras$f,
	gameSettings: gameSettings$f,
	gameVolumeDescription: gameVolumeDescription$f,
	helpTranslate: helpTranslate$f,
	invidiousInstance: invidiousInstance$f,
	invidiousInstanceDescription: invidiousInstanceDescription$f,
	noMusicLabel: noMusicLabel$f,
	overrides: overrides$f,
	play: play$f,
	reset: reset$f,
	resetVolume: resetVolume$f,
	restoreDownloads: restoreDownloads$f,
	restoreDownloadsConfirm: restoreDownloadsConfirm$f,
	restoreDownloadsConfirmDescription: restoreDownloadsConfirmDescription$f,
	restoreDownloadsDescription: restoreDownloadsDescription$f,
	restoreDownloadsLabel: restoreDownloadsLabel$f,
	restoreDownloadsOperation: restoreDownloadsOperation$f,
	restoreDownloadsOperationTitle: restoreDownloadsOperationTitle$f,
	restoreOverrides: restoreOverrides$f,
	restoreOverridesConfirm: restoreOverridesConfirm$f,
	restoreOverridesConfirmDetails: restoreOverridesConfirmDetails$f,
	restoreOverridesLabel: restoreOverridesLabel$f,
	restoreSuccessful: restoreSuccessful$f,
	restoreSuccessfulDetails: restoreSuccessfulDetails$f,
	search: search$f,
	select: select$f,
	selected: selected$f,
	settings: settings$f,
	showQrCode: showQrCode$f,
	stop: stop$f,
	supportDescription: supportDescription$f,
	supportLabel: supportLabel$f,
	useYtDlp: useYtDlp$f,
	useYtDlpDescription: useYtDlpDescription$f,
	volume: volume$f,
	volumeDescription: volumeDescription$f
};

var about$e = "더보기";
var aboutDescription$e = "게임 페이지에서 좋아하는 음악을 재생하세요";
var aboutLabel$e = "Game Theme Music 정보";
var backupOverrides$e = "Backup overrides";
var backupOverridesLabel$e = "Backup all overrides";
var backupSuccessful$e = "Backup successful";
var backupSuccessfulDetails$e = "Overrides have been backed up.";
var changeThemeMusic$e = "테마음악 변경";
var close$e = "Close";
var defaultMuted$e = "기본 음소거";
var defaultMutedDescription$e = "설정을 하신 뒤 음악을 재생해주세요";
var deleteDownloads$e = "Delete downloads";
var deleteDownloadsConfirm$e = "Are you sure you want to delete all downloaded music?";
var deleteDownloadsDescription$e = "Delete all downloaded music. This will not reset overrides.";
var deleteDownloadsLabel$e = "Delete all downloads";
var deleteOverrides$e = "오버드라이브 삭제";
var deleteOverridesConfirm$e = "Are you sure you want to delete all overrides?";
var deleteOverridesDescription$e = "This will also delete all backups of your overrides!";
var deleteOverridesLabel$e = "모든 사용자 정의 속성 지우기";
var download$e = "Download";
var downloadAudio$e = "Download Music";
var downloadAudioDescription$e = "Download selected music instead of streaming it. Only applies to newly made selections.";
var downloadFailed$e = "Download failed";
var downloadFailedDetail$e = "Could not download this music.";
var downloadRestoreSuccessful$e = "Downloads successful";
var downloadRestoreSuccessfulDetails$e = "All missing songs have been downloaded.";
var extras$e = "Extras";
var gameSettings$e = "게임 설정";
var gameVolumeDescription$e = "이 게임의 음악 볼륨 조절";
var helpTranslate$e = "Help translate";
var invidiousInstance$e = "Invidious Instance";
var invidiousInstanceDescription$e = "Which Invidious instance would you like to use for searching and getting audio?";
var noMusicLabel$e = "음악 없음";
var overrides$e = "사용자 설정";
var play$e = "재생";
var reset$e = "Reset";
var resetVolume$e = "초기화";
var restoreDownloads$e = "Restore downloads";
var restoreDownloadsConfirm$e = "Download all missing songs?";
var restoreDownloadsConfirmDescription$e = "This will download up to {num} songs and might take a while.";
var restoreDownloadsDescription$e = "Download all songs from manually set overrides that haven't been downloaded yet.";
var restoreDownloadsLabel$e = "Restore missing downloads";
var restoreDownloadsOperation$e = "Downloading {current}/{total}...";
var restoreDownloadsOperationTitle$e = "Downloading missing songs...";
var restoreOverrides$e = "Select backup";
var restoreOverridesConfirm$e = "Restore this backup?";
var restoreOverridesConfirmDetails$e = "This will overwrite all your current overrides!";
var restoreOverridesLabel$e = "Restore overrides from backup";
var restoreSuccessful$e = "Restore successful";
var restoreSuccessfulDetails$e = "Overrides have been restored from backup.";
var search$e = "검색";
var select$e = "선택";
var selected$e = "선택됨";
var settings$e = "설정";
var showQrCode$e = "Show QR Code";
var stop$e = "중지";
var supportDescription$e = "Discord deckbrew.xyz/discord에서 Decky Loader 정보를 얻어가세요";
var supportLabel$e = "지원";
var useYtDlp$e = "Use yt-dlp";
var useYtDlpDescription$e = "Access YouTube directly without Invidious";
var volume$e = "음악 볼륨";
var volumeDescription$e = "음악 볼륨 조절";
var ko = {
	about: about$e,
	aboutDescription: aboutDescription$e,
	aboutLabel: aboutLabel$e,
	backupOverrides: backupOverrides$e,
	backupOverridesLabel: backupOverridesLabel$e,
	backupSuccessful: backupSuccessful$e,
	backupSuccessfulDetails: backupSuccessfulDetails$e,
	changeThemeMusic: changeThemeMusic$e,
	close: close$e,
	defaultMuted: defaultMuted$e,
	defaultMutedDescription: defaultMutedDescription$e,
	deleteDownloads: deleteDownloads$e,
	deleteDownloadsConfirm: deleteDownloadsConfirm$e,
	deleteDownloadsDescription: deleteDownloadsDescription$e,
	deleteDownloadsLabel: deleteDownloadsLabel$e,
	deleteOverrides: deleteOverrides$e,
	deleteOverridesConfirm: deleteOverridesConfirm$e,
	deleteOverridesDescription: deleteOverridesDescription$e,
	deleteOverridesLabel: deleteOverridesLabel$e,
	download: download$e,
	downloadAudio: downloadAudio$e,
	downloadAudioDescription: downloadAudioDescription$e,
	downloadFailed: downloadFailed$e,
	downloadFailedDetail: downloadFailedDetail$e,
	downloadRestoreSuccessful: downloadRestoreSuccessful$e,
	downloadRestoreSuccessfulDetails: downloadRestoreSuccessfulDetails$e,
	extras: extras$e,
	gameSettings: gameSettings$e,
	gameVolumeDescription: gameVolumeDescription$e,
	helpTranslate: helpTranslate$e,
	invidiousInstance: invidiousInstance$e,
	invidiousInstanceDescription: invidiousInstanceDescription$e,
	noMusicLabel: noMusicLabel$e,
	overrides: overrides$e,
	play: play$e,
	reset: reset$e,
	resetVolume: resetVolume$e,
	restoreDownloads: restoreDownloads$e,
	restoreDownloadsConfirm: restoreDownloadsConfirm$e,
	restoreDownloadsConfirmDescription: restoreDownloadsConfirmDescription$e,
	restoreDownloadsDescription: restoreDownloadsDescription$e,
	restoreDownloadsLabel: restoreDownloadsLabel$e,
	restoreDownloadsOperation: restoreDownloadsOperation$e,
	restoreDownloadsOperationTitle: restoreDownloadsOperationTitle$e,
	restoreOverrides: restoreOverrides$e,
	restoreOverridesConfirm: restoreOverridesConfirm$e,
	restoreOverridesConfirmDetails: restoreOverridesConfirmDetails$e,
	restoreOverridesLabel: restoreOverridesLabel$e,
	restoreSuccessful: restoreSuccessful$e,
	restoreSuccessfulDetails: restoreSuccessfulDetails$e,
	search: search$e,
	select: select$e,
	selected: selected$e,
	settings: settings$e,
	showQrCode: showQrCode$e,
	stop: stop$e,
	supportDescription: supportDescription$e,
	supportLabel: supportLabel$e,
	useYtDlp: useYtDlp$e,
	useYtDlpDescription: useYtDlpDescription$e,
	volume: volume$e,
	volumeDescription: volumeDescription$e
};

var about$d = "Over";
var aboutDescription$d = "Speel themanummers af op je spelpagina's";
var aboutLabel$d = "Over Game Thema Muziek";
var backupOverrides$d = "Backup overrides";
var backupOverridesLabel$d = "Backup all overrides";
var backupSuccessful$d = "Backup successful";
var backupSuccessfulDetails$d = "Overrides have been backed up.";
var changeThemeMusic$d = "Themamuziek wijzigen";
var close$d = "Close";
var defaultMuted$d = "Standaard gedempt";
var defaultMutedDescription$d = "Speel geen muziek af, maar niet als dit handmatig wordt ingesteld";
var deleteDownloads$d = "Delete downloads";
var deleteDownloadsConfirm$d = "Are you sure you want to delete all downloaded music?";
var deleteDownloadsDescription$d = "Delete all downloaded music. This will not reset overrides.";
var deleteDownloadsLabel$d = "Delete all downloads";
var deleteOverrides$d = "Verwijder overschrijvingen";
var deleteOverridesConfirm$d = "Are you sure you want to delete all overrides?";
var deleteOverridesDescription$d = "This will also delete all backups of your overrides!";
var deleteOverridesLabel$d = "Alle overschrijvingen verwijderen";
var download$d = "Download";
var downloadAudio$d = "Download Music";
var downloadAudioDescription$d = "Download selected music instead of streaming it. Only applies to newly made selections.";
var downloadFailed$d = "Download failed";
var downloadFailedDetail$d = "Could not download this music.";
var downloadRestoreSuccessful$d = "Downloads successful";
var downloadRestoreSuccessfulDetails$d = "All missing songs have been downloaded.";
var extras$d = "Extras";
var gameSettings$d = "Spelinstellingen";
var gameVolumeDescription$d = "Pas het muziekvolume voor dit spel aan";
var helpTranslate$d = "Help translate";
var invidiousInstance$d = "Instantie";
var invidiousInstanceDescription$d = "Welke instantie wil je gebruiken om audio te zoeken?";
var noMusicLabel$d = "Geen muziek";
var overrides$d = "Overschrijvingen";
var play$d = "Afspelen";
var reset$d = "Reset";
var resetVolume$d = "Resetten";
var restoreDownloads$d = "Restore downloads";
var restoreDownloadsConfirm$d = "Download all missing songs?";
var restoreDownloadsConfirmDescription$d = "This will download up to {num} songs and might take a while.";
var restoreDownloadsDescription$d = "Download all songs from manually set overrides that haven't been downloaded yet.";
var restoreDownloadsLabel$d = "Restore missing downloads";
var restoreDownloadsOperation$d = "Downloading {current}/{total}...";
var restoreDownloadsOperationTitle$d = "Downloading missing songs...";
var restoreOverrides$d = "Select backup";
var restoreOverridesConfirm$d = "Restore this backup?";
var restoreOverridesConfirmDetails$d = "This will overwrite all your current overrides!";
var restoreOverridesLabel$d = "Restore overrides from backup";
var restoreSuccessful$d = "Restore successful";
var restoreSuccessfulDetails$d = "Overrides have been restored from backup.";
var search$d = "Zoeken";
var select$d = "Selecteer";
var selected$d = "Geselecteerd";
var settings$d = "Instellingen";
var showQrCode$d = "Show QR Code";
var stop$d = "Stoppen";
var supportDescription$d = "Bezoek het Steam Deck Homebrew Discord deckbrew.xyz/discord";
var supportLabel$d = "Ondersteuning";
var useYtDlp$d = "Use yt-dlp";
var useYtDlpDescription$d = "Access YouTube directly without Invidious";
var volume$d = "Muziek Volume";
var volumeDescription$d = "Muziekvolume aanpassen";
var nl = {
	about: about$d,
	aboutDescription: aboutDescription$d,
	aboutLabel: aboutLabel$d,
	backupOverrides: backupOverrides$d,
	backupOverridesLabel: backupOverridesLabel$d,
	backupSuccessful: backupSuccessful$d,
	backupSuccessfulDetails: backupSuccessfulDetails$d,
	changeThemeMusic: changeThemeMusic$d,
	close: close$d,
	defaultMuted: defaultMuted$d,
	defaultMutedDescription: defaultMutedDescription$d,
	deleteDownloads: deleteDownloads$d,
	deleteDownloadsConfirm: deleteDownloadsConfirm$d,
	deleteDownloadsDescription: deleteDownloadsDescription$d,
	deleteDownloadsLabel: deleteDownloadsLabel$d,
	deleteOverrides: deleteOverrides$d,
	deleteOverridesConfirm: deleteOverridesConfirm$d,
	deleteOverridesDescription: deleteOverridesDescription$d,
	deleteOverridesLabel: deleteOverridesLabel$d,
	download: download$d,
	downloadAudio: downloadAudio$d,
	downloadAudioDescription: downloadAudioDescription$d,
	downloadFailed: downloadFailed$d,
	downloadFailedDetail: downloadFailedDetail$d,
	downloadRestoreSuccessful: downloadRestoreSuccessful$d,
	downloadRestoreSuccessfulDetails: downloadRestoreSuccessfulDetails$d,
	extras: extras$d,
	gameSettings: gameSettings$d,
	gameVolumeDescription: gameVolumeDescription$d,
	helpTranslate: helpTranslate$d,
	invidiousInstance: invidiousInstance$d,
	invidiousInstanceDescription: invidiousInstanceDescription$d,
	noMusicLabel: noMusicLabel$d,
	overrides: overrides$d,
	play: play$d,
	reset: reset$d,
	resetVolume: resetVolume$d,
	restoreDownloads: restoreDownloads$d,
	restoreDownloadsConfirm: restoreDownloadsConfirm$d,
	restoreDownloadsConfirmDescription: restoreDownloadsConfirmDescription$d,
	restoreDownloadsDescription: restoreDownloadsDescription$d,
	restoreDownloadsLabel: restoreDownloadsLabel$d,
	restoreDownloadsOperation: restoreDownloadsOperation$d,
	restoreDownloadsOperationTitle: restoreDownloadsOperationTitle$d,
	restoreOverrides: restoreOverrides$d,
	restoreOverridesConfirm: restoreOverridesConfirm$d,
	restoreOverridesConfirmDetails: restoreOverridesConfirmDetails$d,
	restoreOverridesLabel: restoreOverridesLabel$d,
	restoreSuccessful: restoreSuccessful$d,
	restoreSuccessfulDetails: restoreSuccessfulDetails$d,
	search: search$d,
	select: select$d,
	selected: selected$d,
	settings: settings$d,
	showQrCode: showQrCode$d,
	stop: stop$d,
	supportDescription: supportDescription$d,
	supportLabel: supportLabel$d,
	useYtDlp: useYtDlp$d,
	useYtDlpDescription: useYtDlpDescription$d,
	volume: volume$d,
	volumeDescription: volumeDescription$d
};

var about$c = "About";
var aboutDescription$c = "Play theme songs on your game pages";
var aboutLabel$c = "About Game Theme Music";
var backupOverrides$c = "Backup overrides";
var backupOverridesLabel$c = "Backup all overrides";
var backupSuccessful$c = "Backup successful";
var backupSuccessfulDetails$c = "Overrides have been backed up.";
var changeThemeMusic$c = "Change Theme Music";
var close$c = "Close";
var defaultMuted$c = "Default Muted";
var defaultMutedDescription$c = "Don't play music unless manually set";
var deleteDownloads$c = "Delete downloads";
var deleteDownloadsConfirm$c = "Are you sure you want to delete all downloaded music?";
var deleteDownloadsDescription$c = "Delete all downloaded music. This will not reset overrides.";
var deleteDownloadsLabel$c = "Delete all downloads";
var deleteOverrides$c = "Delete Overrides";
var deleteOverridesConfirm$c = "Are you sure you want to delete all overrides?";
var deleteOverridesDescription$c = "This will also delete all backups of your overrides!";
var deleteOverridesLabel$c = "Delete all overrides";
var download$c = "Download";
var downloadAudio$c = "Download Music";
var downloadAudioDescription$c = "Download selected music instead of streaming it. Only applies to newly made selections.";
var downloadFailed$c = "Download failed";
var downloadFailedDetail$c = "Could not download this music.";
var downloadRestoreSuccessful$c = "Downloads successful";
var downloadRestoreSuccessfulDetails$c = "All missing songs have been downloaded.";
var extras$c = "Extras";
var gameSettings$c = "Game Settings";
var gameVolumeDescription$c = "Adjust music volume for this game";
var helpTranslate$c = "Help translate";
var invidiousInstance$c = "Invidious Instance";
var invidiousInstanceDescription$c = "Which Invidious instance would you like to use for searching and getting audio?";
var noMusicLabel$c = "No Music";
var overrides$c = "Overrides";
var play$c = "Play";
var reset$c = "Reset";
var resetVolume$c = "Reset";
var restoreDownloads$c = "Restore downloads";
var restoreDownloadsConfirm$c = "Download all missing songs?";
var restoreDownloadsConfirmDescription$c = "This will download up to {num} songs and might take a while.";
var restoreDownloadsDescription$c = "Download all songs from manually set overrides that haven't been downloaded yet.";
var restoreDownloadsLabel$c = "Restore missing downloads";
var restoreDownloadsOperation$c = "Downloading {current}/{total}...";
var restoreDownloadsOperationTitle$c = "Downloading missing songs...";
var restoreOverrides$c = "Select backup";
var restoreOverridesConfirm$c = "Restore this backup?";
var restoreOverridesConfirmDetails$c = "This will overwrite all your current overrides!";
var restoreOverridesLabel$c = "Restore overrides from backup";
var restoreSuccessful$c = "Restore successful";
var restoreSuccessfulDetails$c = "Overrides have been restored from backup.";
var search$c = "Search";
var select$c = "Select";
var selected$c = "Selected";
var settings$c = "Settings";
var showQrCode$c = "Show QR Code";
var stop$c = "Stop";
var supportDescription$c = "Visit the Steam Deck Homebrew Discord deckbrew.xyz/discord";
var supportLabel$c = "Support";
var useYtDlp$c = "Use yt-dlp";
var useYtDlpDescription$c = "Access YouTube directly without Invidious";
var volume$c = "Music Volume";
var volumeDescription$c = "Adjust music volume";
var no = {
	about: about$c,
	aboutDescription: aboutDescription$c,
	aboutLabel: aboutLabel$c,
	backupOverrides: backupOverrides$c,
	backupOverridesLabel: backupOverridesLabel$c,
	backupSuccessful: backupSuccessful$c,
	backupSuccessfulDetails: backupSuccessfulDetails$c,
	changeThemeMusic: changeThemeMusic$c,
	close: close$c,
	defaultMuted: defaultMuted$c,
	defaultMutedDescription: defaultMutedDescription$c,
	deleteDownloads: deleteDownloads$c,
	deleteDownloadsConfirm: deleteDownloadsConfirm$c,
	deleteDownloadsDescription: deleteDownloadsDescription$c,
	deleteDownloadsLabel: deleteDownloadsLabel$c,
	deleteOverrides: deleteOverrides$c,
	deleteOverridesConfirm: deleteOverridesConfirm$c,
	deleteOverridesDescription: deleteOverridesDescription$c,
	deleteOverridesLabel: deleteOverridesLabel$c,
	download: download$c,
	downloadAudio: downloadAudio$c,
	downloadAudioDescription: downloadAudioDescription$c,
	downloadFailed: downloadFailed$c,
	downloadFailedDetail: downloadFailedDetail$c,
	downloadRestoreSuccessful: downloadRestoreSuccessful$c,
	downloadRestoreSuccessfulDetails: downloadRestoreSuccessfulDetails$c,
	extras: extras$c,
	gameSettings: gameSettings$c,
	gameVolumeDescription: gameVolumeDescription$c,
	helpTranslate: helpTranslate$c,
	invidiousInstance: invidiousInstance$c,
	invidiousInstanceDescription: invidiousInstanceDescription$c,
	noMusicLabel: noMusicLabel$c,
	overrides: overrides$c,
	play: play$c,
	reset: reset$c,
	resetVolume: resetVolume$c,
	restoreDownloads: restoreDownloads$c,
	restoreDownloadsConfirm: restoreDownloadsConfirm$c,
	restoreDownloadsConfirmDescription: restoreDownloadsConfirmDescription$c,
	restoreDownloadsDescription: restoreDownloadsDescription$c,
	restoreDownloadsLabel: restoreDownloadsLabel$c,
	restoreDownloadsOperation: restoreDownloadsOperation$c,
	restoreDownloadsOperationTitle: restoreDownloadsOperationTitle$c,
	restoreOverrides: restoreOverrides$c,
	restoreOverridesConfirm: restoreOverridesConfirm$c,
	restoreOverridesConfirmDetails: restoreOverridesConfirmDetails$c,
	restoreOverridesLabel: restoreOverridesLabel$c,
	restoreSuccessful: restoreSuccessful$c,
	restoreSuccessfulDetails: restoreSuccessfulDetails$c,
	search: search$c,
	select: select$c,
	selected: selected$c,
	settings: settings$c,
	showQrCode: showQrCode$c,
	stop: stop$c,
	supportDescription: supportDescription$c,
	supportLabel: supportLabel$c,
	useYtDlp: useYtDlp$c,
	useYtDlpDescription: useYtDlpDescription$c,
	volume: volume$c,
	volumeDescription: volumeDescription$c
};

var about$b = "O Wtyczce";
var aboutDescription$b = "Odtwarzaj muzykę na ekranach związanych z grą";
var aboutLabel$b = "Informacje o Game Theme Music";
var backupOverrides$b = "Backup overrides";
var backupOverridesLabel$b = "Backup all overrides";
var backupSuccessful$b = "Backup successful";
var backupSuccessfulDetails$b = "Overrides have been backed up.";
var changeThemeMusic$b = "Zmień Muzykę";
var close$b = "Close";
var defaultMuted$b = "Domyślnie Wyciszony";
var defaultMutedDescription$b = "Nie odtwarzaj muzyki, chyba że wybrano ją ręcznie";
var deleteDownloads$b = "Delete downloads";
var deleteDownloadsConfirm$b = "Are you sure you want to delete all downloaded music?";
var deleteDownloadsDescription$b = "Delete all downloaded music. This will not reset overrides.";
var deleteDownloadsLabel$b = "Delete all downloads";
var deleteOverrides$b = "Usuń Własne";
var deleteOverridesConfirm$b = "Are you sure you want to delete all overrides?";
var deleteOverridesDescription$b = "This will also delete all backups of your overrides!";
var deleteOverridesLabel$b = "Usuń wszystkie utwory ustawione ręcznie";
var download$b = "Download";
var downloadAudio$b = "Download Music";
var downloadAudioDescription$b = "Download selected music instead of streaming it. Only applies to newly made selections.";
var downloadFailed$b = "Download failed";
var downloadFailedDetail$b = "Could not download this music.";
var downloadRestoreSuccessful$b = "Downloads successful";
var downloadRestoreSuccessfulDetails$b = "All missing songs have been downloaded.";
var extras$b = "Extras";
var gameSettings$b = "Ustawienia Gry";
var gameVolumeDescription$b = "Dostosuj głośność muzyki dla wybranej gry";
var helpTranslate$b = "Help translate";
var invidiousInstance$b = "Invidious Instance";
var invidiousInstanceDescription$b = "Which Invidious instance would you like to use for searching and getting audio?";
var noMusicLabel$b = "Brak Muzyki";
var overrides$b = "Nadpisania";
var play$b = "Odtwórz";
var reset$b = "Reset";
var resetVolume$b = "Resetuj";
var restoreDownloads$b = "Restore downloads";
var restoreDownloadsConfirm$b = "Download all missing songs?";
var restoreDownloadsConfirmDescription$b = "This will download up to {num} songs and might take a while.";
var restoreDownloadsDescription$b = "Download all songs from manually set overrides that haven't been downloaded yet.";
var restoreDownloadsLabel$b = "Restore missing downloads";
var restoreDownloadsOperation$b = "Downloading {current}/{total}...";
var restoreDownloadsOperationTitle$b = "Downloading missing songs...";
var restoreOverrides$b = "Select backup";
var restoreOverridesConfirm$b = "Restore this backup?";
var restoreOverridesConfirmDetails$b = "This will overwrite all your current overrides!";
var restoreOverridesLabel$b = "Restore overrides from backup";
var restoreSuccessful$b = "Restore successful";
var restoreSuccessfulDetails$b = "Overrides have been restored from backup.";
var search$b = "Wyszukaj";
var select$b = "Wybierz";
var selected$b = "Wybrano";
var settings$b = "Ustawienia";
var showQrCode$b = "Show QR Code";
var stop$b = "Zatrzymaj";
var supportDescription$b = "Odwiedź Discorda Steam Deck Homebrew - deckbrew.xyz/discord";
var supportLabel$b = "Wsparcie";
var useYtDlp$b = "Use yt-dlp";
var useYtDlpDescription$b = "Access YouTube directly without Invidious";
var volume$b = "Głośność Odtwarzania";
var volumeDescription$b = "Dostosuj głośność muzyki";
var pl = {
	about: about$b,
	aboutDescription: aboutDescription$b,
	aboutLabel: aboutLabel$b,
	backupOverrides: backupOverrides$b,
	backupOverridesLabel: backupOverridesLabel$b,
	backupSuccessful: backupSuccessful$b,
	backupSuccessfulDetails: backupSuccessfulDetails$b,
	changeThemeMusic: changeThemeMusic$b,
	close: close$b,
	defaultMuted: defaultMuted$b,
	defaultMutedDescription: defaultMutedDescription$b,
	deleteDownloads: deleteDownloads$b,
	deleteDownloadsConfirm: deleteDownloadsConfirm$b,
	deleteDownloadsDescription: deleteDownloadsDescription$b,
	deleteDownloadsLabel: deleteDownloadsLabel$b,
	deleteOverrides: deleteOverrides$b,
	deleteOverridesConfirm: deleteOverridesConfirm$b,
	deleteOverridesDescription: deleteOverridesDescription$b,
	deleteOverridesLabel: deleteOverridesLabel$b,
	download: download$b,
	downloadAudio: downloadAudio$b,
	downloadAudioDescription: downloadAudioDescription$b,
	downloadFailed: downloadFailed$b,
	downloadFailedDetail: downloadFailedDetail$b,
	downloadRestoreSuccessful: downloadRestoreSuccessful$b,
	downloadRestoreSuccessfulDetails: downloadRestoreSuccessfulDetails$b,
	extras: extras$b,
	gameSettings: gameSettings$b,
	gameVolumeDescription: gameVolumeDescription$b,
	helpTranslate: helpTranslate$b,
	invidiousInstance: invidiousInstance$b,
	invidiousInstanceDescription: invidiousInstanceDescription$b,
	noMusicLabel: noMusicLabel$b,
	overrides: overrides$b,
	play: play$b,
	reset: reset$b,
	resetVolume: resetVolume$b,
	restoreDownloads: restoreDownloads$b,
	restoreDownloadsConfirm: restoreDownloadsConfirm$b,
	restoreDownloadsConfirmDescription: restoreDownloadsConfirmDescription$b,
	restoreDownloadsDescription: restoreDownloadsDescription$b,
	restoreDownloadsLabel: restoreDownloadsLabel$b,
	restoreDownloadsOperation: restoreDownloadsOperation$b,
	restoreDownloadsOperationTitle: restoreDownloadsOperationTitle$b,
	restoreOverrides: restoreOverrides$b,
	restoreOverridesConfirm: restoreOverridesConfirm$b,
	restoreOverridesConfirmDetails: restoreOverridesConfirmDetails$b,
	restoreOverridesLabel: restoreOverridesLabel$b,
	restoreSuccessful: restoreSuccessful$b,
	restoreSuccessfulDetails: restoreSuccessfulDetails$b,
	search: search$b,
	select: select$b,
	selected: selected$b,
	settings: settings$b,
	showQrCode: showQrCode$b,
	stop: stop$b,
	supportDescription: supportDescription$b,
	supportLabel: supportLabel$b,
	useYtDlp: useYtDlp$b,
	useYtDlpDescription: useYtDlpDescription$b,
	volume: volume$b,
	volumeDescription: volumeDescription$b
};

var about$a = "About";
var aboutDescription$a = "Play theme songs on your game pages";
var aboutLabel$a = "About Game Theme Music";
var backupOverrides$a = "Backup overrides";
var backupOverridesLabel$a = "Backup all overrides";
var backupSuccessful$a = "Backup successful";
var backupSuccessfulDetails$a = "Overrides have been backed up.";
var changeThemeMusic$a = "Change Theme Music";
var close$a = "Close";
var defaultMuted$a = "Default Muted";
var defaultMutedDescription$a = "Don't play music unless manually set";
var deleteDownloads$a = "Delete downloads";
var deleteDownloadsConfirm$a = "Are you sure you want to delete all downloaded music?";
var deleteDownloadsDescription$a = "Delete all downloaded music. This will not reset overrides.";
var deleteDownloadsLabel$a = "Delete all downloads";
var deleteOverrides$a = "Delete Overrides";
var deleteOverridesConfirm$a = "Are you sure you want to delete all overrides?";
var deleteOverridesDescription$a = "This will also delete all backups of your overrides!";
var deleteOverridesLabel$a = "Delete all overrides";
var download$a = "Download";
var downloadAudio$a = "Download Music";
var downloadAudioDescription$a = "Download selected music instead of streaming it. Only applies to newly made selections.";
var downloadFailed$a = "Download failed";
var downloadFailedDetail$a = "Could not download this music.";
var downloadRestoreSuccessful$a = "Downloads successful";
var downloadRestoreSuccessfulDetails$a = "All missing songs have been downloaded.";
var extras$a = "Extras";
var gameSettings$a = "Game Settings";
var gameVolumeDescription$a = "Adjust music volume for this game";
var helpTranslate$a = "Help translate";
var invidiousInstance$a = "Invidious Instance";
var invidiousInstanceDescription$a = "Which Invidious instance would you like to use for searching and getting audio?";
var noMusicLabel$a = "No Music";
var overrides$a = "Overrides";
var play$a = "Play";
var reset$a = "Reset";
var resetVolume$a = "Reset";
var restoreDownloads$a = "Restore downloads";
var restoreDownloadsConfirm$a = "Download all missing songs?";
var restoreDownloadsConfirmDescription$a = "This will download up to {num} songs and might take a while.";
var restoreDownloadsDescription$a = "Download all songs from manually set overrides that haven't been downloaded yet.";
var restoreDownloadsLabel$a = "Restore missing downloads";
var restoreDownloadsOperation$a = "Downloading {current}/{total}...";
var restoreDownloadsOperationTitle$a = "Downloading missing songs...";
var restoreOverrides$a = "Select backup";
var restoreOverridesConfirm$a = "Restore this backup?";
var restoreOverridesConfirmDetails$a = "This will overwrite all your current overrides!";
var restoreOverridesLabel$a = "Restore overrides from backup";
var restoreSuccessful$a = "Restore successful";
var restoreSuccessfulDetails$a = "Overrides have been restored from backup.";
var search$a = "Search";
var select$a = "Select";
var selected$a = "Selected";
var settings$a = "Settings";
var showQrCode$a = "Show QR Code";
var stop$a = "Stop";
var supportDescription$a = "Visit the Steam Deck Homebrew Discord deckbrew.xyz/discord";
var supportLabel$a = "Support";
var useYtDlp$a = "Use yt-dlp";
var useYtDlpDescription$a = "Access YouTube directly without Invidious";
var volume$a = "Music Volume";
var volumeDescription$a = "Adjust music volume";
var pt = {
	about: about$a,
	aboutDescription: aboutDescription$a,
	aboutLabel: aboutLabel$a,
	backupOverrides: backupOverrides$a,
	backupOverridesLabel: backupOverridesLabel$a,
	backupSuccessful: backupSuccessful$a,
	backupSuccessfulDetails: backupSuccessfulDetails$a,
	changeThemeMusic: changeThemeMusic$a,
	close: close$a,
	defaultMuted: defaultMuted$a,
	defaultMutedDescription: defaultMutedDescription$a,
	deleteDownloads: deleteDownloads$a,
	deleteDownloadsConfirm: deleteDownloadsConfirm$a,
	deleteDownloadsDescription: deleteDownloadsDescription$a,
	deleteDownloadsLabel: deleteDownloadsLabel$a,
	deleteOverrides: deleteOverrides$a,
	deleteOverridesConfirm: deleteOverridesConfirm$a,
	deleteOverridesDescription: deleteOverridesDescription$a,
	deleteOverridesLabel: deleteOverridesLabel$a,
	download: download$a,
	downloadAudio: downloadAudio$a,
	downloadAudioDescription: downloadAudioDescription$a,
	downloadFailed: downloadFailed$a,
	downloadFailedDetail: downloadFailedDetail$a,
	downloadRestoreSuccessful: downloadRestoreSuccessful$a,
	downloadRestoreSuccessfulDetails: downloadRestoreSuccessfulDetails$a,
	extras: extras$a,
	gameSettings: gameSettings$a,
	gameVolumeDescription: gameVolumeDescription$a,
	helpTranslate: helpTranslate$a,
	invidiousInstance: invidiousInstance$a,
	invidiousInstanceDescription: invidiousInstanceDescription$a,
	noMusicLabel: noMusicLabel$a,
	overrides: overrides$a,
	play: play$a,
	reset: reset$a,
	resetVolume: resetVolume$a,
	restoreDownloads: restoreDownloads$a,
	restoreDownloadsConfirm: restoreDownloadsConfirm$a,
	restoreDownloadsConfirmDescription: restoreDownloadsConfirmDescription$a,
	restoreDownloadsDescription: restoreDownloadsDescription$a,
	restoreDownloadsLabel: restoreDownloadsLabel$a,
	restoreDownloadsOperation: restoreDownloadsOperation$a,
	restoreDownloadsOperationTitle: restoreDownloadsOperationTitle$a,
	restoreOverrides: restoreOverrides$a,
	restoreOverridesConfirm: restoreOverridesConfirm$a,
	restoreOverridesConfirmDetails: restoreOverridesConfirmDetails$a,
	restoreOverridesLabel: restoreOverridesLabel$a,
	restoreSuccessful: restoreSuccessful$a,
	restoreSuccessfulDetails: restoreSuccessfulDetails$a,
	search: search$a,
	select: select$a,
	selected: selected$a,
	settings: settings$a,
	showQrCode: showQrCode$a,
	stop: stop$a,
	supportDescription: supportDescription$a,
	supportLabel: supportLabel$a,
	useYtDlp: useYtDlp$a,
	useYtDlpDescription: useYtDlpDescription$a,
	volume: volume$a,
	volumeDescription: volumeDescription$a
};

var about$9 = "Sobre";
var aboutDescription$9 = "Reproduz a música tema dos seus jogos na página inicial";
var aboutLabel$9 = "Sobre o Game Theme Music";
var backupOverrides$9 = "Backup overrides";
var backupOverridesLabel$9 = "Backup all overrides";
var backupSuccessful$9 = "Backup successful";
var backupSuccessfulDetails$9 = "Overrides have been backed up.";
var changeThemeMusic$9 = "Altera a música";
var close$9 = "Close";
var defaultMuted$9 = "Padrão Silenciado";
var defaultMutedDescription$9 = "Reproduzir apenas manualmente";
var deleteDownloads$9 = "Delete downloads";
var deleteDownloadsConfirm$9 = "Are you sure you want to delete all downloaded music?";
var deleteDownloadsDescription$9 = "Delete all downloaded music. This will not reset overrides.";
var deleteDownloadsLabel$9 = "Delete all downloads";
var deleteOverrides$9 = "Apagar substituições";
var deleteOverridesConfirm$9 = "Are you sure you want to delete all overrides?";
var deleteOverridesDescription$9 = "This will also delete all backups of your overrides!";
var deleteOverridesLabel$9 = "Apagar todas as substituições";
var download$9 = "Download";
var downloadAudio$9 = "Download Music";
var downloadAudioDescription$9 = "Download selected music instead of streaming it. Only applies to newly made selections.";
var downloadFailed$9 = "Download failed";
var downloadFailedDetail$9 = "Could not download this music.";
var downloadRestoreSuccessful$9 = "Downloads successful";
var downloadRestoreSuccessfulDetails$9 = "All missing songs have been downloaded.";
var extras$9 = "Extras";
var gameSettings$9 = "Configurações do jogo";
var gameVolumeDescription$9 = "Ajustar o volume da música para este jogo";
var helpTranslate$9 = "Help translate";
var invidiousInstance$9 = "Invidious Instance";
var invidiousInstanceDescription$9 = "Which Invidious instance would you like to use for searching and getting audio?";
var noMusicLabel$9 = "Sem Música";
var overrides$9 = "Substituições";
var play$9 = "Reproduzir";
var reset$9 = "Reset";
var resetVolume$9 = "Redefinir";
var restoreDownloads$9 = "Restore downloads";
var restoreDownloadsConfirm$9 = "Download all missing songs?";
var restoreDownloadsConfirmDescription$9 = "This will download up to {num} songs and might take a while.";
var restoreDownloadsDescription$9 = "Download all songs from manually set overrides that haven't been downloaded yet.";
var restoreDownloadsLabel$9 = "Restore missing downloads";
var restoreDownloadsOperation$9 = "Downloading {current}/{total}...";
var restoreDownloadsOperationTitle$9 = "Downloading missing songs...";
var restoreOverrides$9 = "Select backup";
var restoreOverridesConfirm$9 = "Restore this backup?";
var restoreOverridesConfirmDetails$9 = "This will overwrite all your current overrides!";
var restoreOverridesLabel$9 = "Restore overrides from backup";
var restoreSuccessful$9 = "Restore successful";
var restoreSuccessfulDetails$9 = "Overrides have been restored from backup.";
var search$9 = "Buscar";
var select$9 = "Selecionar";
var selected$9 = "Selecionado";
var settings$9 = "Configurações";
var showQrCode$9 = "Show QR Code";
var stop$9 = "Parar";
var supportDescription$9 = "Visite o Dicrod do Steam Deck Homebrew: deckbrew.xyz/discord";
var supportLabel$9 = "Suporte";
var useYtDlp$9 = "Use yt-dlp";
var useYtDlpDescription$9 = "Access YouTube directly without Invidious";
var volume$9 = "Volume da Música";
var volumeDescription$9 = "Ajustar o volume da música";
var ptBr = {
	about: about$9,
	aboutDescription: aboutDescription$9,
	aboutLabel: aboutLabel$9,
	backupOverrides: backupOverrides$9,
	backupOverridesLabel: backupOverridesLabel$9,
	backupSuccessful: backupSuccessful$9,
	backupSuccessfulDetails: backupSuccessfulDetails$9,
	changeThemeMusic: changeThemeMusic$9,
	close: close$9,
	defaultMuted: defaultMuted$9,
	defaultMutedDescription: defaultMutedDescription$9,
	deleteDownloads: deleteDownloads$9,
	deleteDownloadsConfirm: deleteDownloadsConfirm$9,
	deleteDownloadsDescription: deleteDownloadsDescription$9,
	deleteDownloadsLabel: deleteDownloadsLabel$9,
	deleteOverrides: deleteOverrides$9,
	deleteOverridesConfirm: deleteOverridesConfirm$9,
	deleteOverridesDescription: deleteOverridesDescription$9,
	deleteOverridesLabel: deleteOverridesLabel$9,
	download: download$9,
	downloadAudio: downloadAudio$9,
	downloadAudioDescription: downloadAudioDescription$9,
	downloadFailed: downloadFailed$9,
	downloadFailedDetail: downloadFailedDetail$9,
	downloadRestoreSuccessful: downloadRestoreSuccessful$9,
	downloadRestoreSuccessfulDetails: downloadRestoreSuccessfulDetails$9,
	extras: extras$9,
	gameSettings: gameSettings$9,
	gameVolumeDescription: gameVolumeDescription$9,
	helpTranslate: helpTranslate$9,
	invidiousInstance: invidiousInstance$9,
	invidiousInstanceDescription: invidiousInstanceDescription$9,
	noMusicLabel: noMusicLabel$9,
	overrides: overrides$9,
	play: play$9,
	reset: reset$9,
	resetVolume: resetVolume$9,
	restoreDownloads: restoreDownloads$9,
	restoreDownloadsConfirm: restoreDownloadsConfirm$9,
	restoreDownloadsConfirmDescription: restoreDownloadsConfirmDescription$9,
	restoreDownloadsDescription: restoreDownloadsDescription$9,
	restoreDownloadsLabel: restoreDownloadsLabel$9,
	restoreDownloadsOperation: restoreDownloadsOperation$9,
	restoreDownloadsOperationTitle: restoreDownloadsOperationTitle$9,
	restoreOverrides: restoreOverrides$9,
	restoreOverridesConfirm: restoreOverridesConfirm$9,
	restoreOverridesConfirmDetails: restoreOverridesConfirmDetails$9,
	restoreOverridesLabel: restoreOverridesLabel$9,
	restoreSuccessful: restoreSuccessful$9,
	restoreSuccessfulDetails: restoreSuccessfulDetails$9,
	search: search$9,
	select: select$9,
	selected: selected$9,
	settings: settings$9,
	showQrCode: showQrCode$9,
	stop: stop$9,
	supportDescription: supportDescription$9,
	supportLabel: supportLabel$9,
	useYtDlp: useYtDlp$9,
	useYtDlpDescription: useYtDlpDescription$9,
	volume: volume$9,
	volumeDescription: volumeDescription$9
};

var about$8 = "About";
var aboutDescription$8 = "Play theme songs on your game pages";
var aboutLabel$8 = "About Game Theme Music";
var backupOverrides$8 = "Backup overrides";
var backupOverridesLabel$8 = "Backup all overrides";
var backupSuccessful$8 = "Backup successful";
var backupSuccessfulDetails$8 = "Overrides have been backed up.";
var changeThemeMusic$8 = "Change Theme Music";
var close$8 = "Close";
var defaultMuted$8 = "Default Muted";
var defaultMutedDescription$8 = "Don't play music unless manually set";
var deleteDownloads$8 = "Delete downloads";
var deleteDownloadsConfirm$8 = "Are you sure you want to delete all downloaded music?";
var deleteDownloadsDescription$8 = "Delete all downloaded music. This will not reset overrides.";
var deleteDownloadsLabel$8 = "Delete all downloads";
var deleteOverrides$8 = "Delete Overrides";
var deleteOverridesConfirm$8 = "Are you sure you want to delete all overrides?";
var deleteOverridesDescription$8 = "This will also delete all backups of your overrides!";
var deleteOverridesLabel$8 = "Delete all overrides";
var download$8 = "Download";
var downloadAudio$8 = "Download Music";
var downloadAudioDescription$8 = "Download selected music instead of streaming it. Only applies to newly made selections.";
var downloadFailed$8 = "Download failed";
var downloadFailedDetail$8 = "Could not download this music.";
var downloadRestoreSuccessful$8 = "Downloads successful";
var downloadRestoreSuccessfulDetails$8 = "All missing songs have been downloaded.";
var extras$8 = "Extras";
var gameSettings$8 = "Game Settings";
var gameVolumeDescription$8 = "Adjust music volume for this game";
var helpTranslate$8 = "Help translate";
var invidiousInstance$8 = "Invidious Instance";
var invidiousInstanceDescription$8 = "Which Invidious instance would you like to use for searching and getting audio?";
var noMusicLabel$8 = "No Music";
var overrides$8 = "Overrides";
var play$8 = "Play";
var reset$8 = "Reset";
var resetVolume$8 = "Reset";
var restoreDownloads$8 = "Restore downloads";
var restoreDownloadsConfirm$8 = "Download all missing songs?";
var restoreDownloadsConfirmDescription$8 = "This will download up to {num} songs and might take a while.";
var restoreDownloadsDescription$8 = "Download all songs from manually set overrides that haven't been downloaded yet.";
var restoreDownloadsLabel$8 = "Restore missing downloads";
var restoreDownloadsOperation$8 = "Downloading {current}/{total}...";
var restoreDownloadsOperationTitle$8 = "Downloading missing songs...";
var restoreOverrides$8 = "Select backup";
var restoreOverridesConfirm$8 = "Restore this backup?";
var restoreOverridesConfirmDetails$8 = "This will overwrite all your current overrides!";
var restoreOverridesLabel$8 = "Restore overrides from backup";
var restoreSuccessful$8 = "Restore successful";
var restoreSuccessfulDetails$8 = "Overrides have been restored from backup.";
var search$8 = "Search";
var select$8 = "Select";
var selected$8 = "Selected";
var settings$8 = "Settings";
var showQrCode$8 = "Show QR Code";
var stop$8 = "Stop";
var supportDescription$8 = "Visit the Steam Deck Homebrew Discord deckbrew.xyz/discord";
var supportLabel$8 = "Support";
var useYtDlp$8 = "Use yt-dlp";
var useYtDlpDescription$8 = "Access YouTube directly without Invidious";
var volume$8 = "Music Volume";
var volumeDescription$8 = "Adjust music volume";
var ro = {
	about: about$8,
	aboutDescription: aboutDescription$8,
	aboutLabel: aboutLabel$8,
	backupOverrides: backupOverrides$8,
	backupOverridesLabel: backupOverridesLabel$8,
	backupSuccessful: backupSuccessful$8,
	backupSuccessfulDetails: backupSuccessfulDetails$8,
	changeThemeMusic: changeThemeMusic$8,
	close: close$8,
	defaultMuted: defaultMuted$8,
	defaultMutedDescription: defaultMutedDescription$8,
	deleteDownloads: deleteDownloads$8,
	deleteDownloadsConfirm: deleteDownloadsConfirm$8,
	deleteDownloadsDescription: deleteDownloadsDescription$8,
	deleteDownloadsLabel: deleteDownloadsLabel$8,
	deleteOverrides: deleteOverrides$8,
	deleteOverridesConfirm: deleteOverridesConfirm$8,
	deleteOverridesDescription: deleteOverridesDescription$8,
	deleteOverridesLabel: deleteOverridesLabel$8,
	download: download$8,
	downloadAudio: downloadAudio$8,
	downloadAudioDescription: downloadAudioDescription$8,
	downloadFailed: downloadFailed$8,
	downloadFailedDetail: downloadFailedDetail$8,
	downloadRestoreSuccessful: downloadRestoreSuccessful$8,
	downloadRestoreSuccessfulDetails: downloadRestoreSuccessfulDetails$8,
	extras: extras$8,
	gameSettings: gameSettings$8,
	gameVolumeDescription: gameVolumeDescription$8,
	helpTranslate: helpTranslate$8,
	invidiousInstance: invidiousInstance$8,
	invidiousInstanceDescription: invidiousInstanceDescription$8,
	noMusicLabel: noMusicLabel$8,
	overrides: overrides$8,
	play: play$8,
	reset: reset$8,
	resetVolume: resetVolume$8,
	restoreDownloads: restoreDownloads$8,
	restoreDownloadsConfirm: restoreDownloadsConfirm$8,
	restoreDownloadsConfirmDescription: restoreDownloadsConfirmDescription$8,
	restoreDownloadsDescription: restoreDownloadsDescription$8,
	restoreDownloadsLabel: restoreDownloadsLabel$8,
	restoreDownloadsOperation: restoreDownloadsOperation$8,
	restoreDownloadsOperationTitle: restoreDownloadsOperationTitle$8,
	restoreOverrides: restoreOverrides$8,
	restoreOverridesConfirm: restoreOverridesConfirm$8,
	restoreOverridesConfirmDetails: restoreOverridesConfirmDetails$8,
	restoreOverridesLabel: restoreOverridesLabel$8,
	restoreSuccessful: restoreSuccessful$8,
	restoreSuccessfulDetails: restoreSuccessfulDetails$8,
	search: search$8,
	select: select$8,
	selected: selected$8,
	settings: settings$8,
	showQrCode: showQrCode$8,
	stop: stop$8,
	supportDescription: supportDescription$8,
	supportLabel: supportLabel$8,
	useYtDlp: useYtDlp$8,
	useYtDlpDescription: useYtDlpDescription$8,
	volume: volume$8,
	volumeDescription: volumeDescription$8
};

var about$7 = "О программе";
var aboutDescription$7 = "Воспроизводит заглавные темы на страницах ваших игр";
var aboutLabel$7 = "Информация о Game Theme Music";
var backupOverrides$7 = "Резервное копирование изменений";
var backupOverridesLabel$7 = "Резервное копирование всех изменений";
var backupSuccessful$7 = "Резервное копирование завершено";
var backupSuccessfulDetails$7 = "Изменения успешно зарезервированны.";
var changeThemeMusic$7 = "Сменить заглавную музыку";
var close$7 = "Закрыть";
var defaultMuted$7 = "По умолчанию без музыки";
var defaultMutedDescription$7 = "По умолчанию не воспроизводить музыку, пока она не выбрана вручную";
var deleteDownloads$7 = "Удалить загруженные";
var deleteDownloadsConfirm$7 = "Вы уверены, что хотите удалить всю загруженную музыку?";
var deleteDownloadsDescription$7 = "Удалить все загруженные песни. Это не сбросит изменения.";
var deleteDownloadsLabel$7 = "Удалить все загрузки";
var deleteOverrides$7 = "Удалить переопределения";
var deleteOverridesConfirm$7 = "Вы уверены, что хотите удалить все изменения?";
var deleteOverridesDescription$7 = "Это также удалит все резервные копии всех изменений!";
var deleteOverridesLabel$7 = "Удалить все переопределения";
var download$7 = "Скачать";
var downloadAudio$7 = "Скачать музыку";
var downloadAudioDescription$7 = "Загружает выбранную музыку вместо ее потокового вещания. Применяется только к новым выборам.";
var downloadFailed$7 = "Ошибка загрузки";
var downloadFailedDetail$7 = "Не удалось скачать эту музыку.";
var downloadRestoreSuccessful$7 = "Загрузка завершена";
var downloadRestoreSuccessfulDetails$7 = "Все недостающие песни были скачены.";
var extras$7 = "Дополнительные";
var gameSettings$7 = "Настройки игры";
var gameVolumeDescription$7 = "Регулировка громкости музыки для этой игры";
var helpTranslate$7 = "Помощь в переводе";
var invidiousInstance$7 = "Хост Invidious";
var invidiousInstanceDescription$7 = "Какой вы хотите использовать хост Invidious, чтобы искать и получать аудио?";
var noMusicLabel$7 = "Без музыки";
var overrides$7 = "Переопределения";
var play$7 = "Воспроизвести";
var reset$7 = "Сброс";
var resetVolume$7 = "Сброс";
var restoreDownloads$7 = "Восстановить загруженные";
var restoreDownloadsConfirm$7 = "Скачать все недостающие песни?";
var restoreDownloadsConfirmDescription$7 = "Это скачает до {num} песен и может занять некоторое время.";
var restoreDownloadsDescription$7 = "Скачать все песни из заданных изменений, которые еще не были скачаны.";
var restoreDownloadsLabel$7 = "Восстановить недостающие загрузки";
var restoreDownloadsOperation$7 = "Скачивание: {current}/{total}...";
var restoreDownloadsOperationTitle$7 = "Скачивание недостающих песен...";
var restoreOverrides$7 = "Выберите резервную копию";
var restoreOverridesConfirm$7 = "Восстановить эту резервную копию?";
var restoreOverridesConfirmDetails$7 = "Это перезапишет все ваши текущие изменения!";
var restoreOverridesLabel$7 = "Восстановить изменения";
var restoreSuccessful$7 = "Данные восстановлены";
var restoreSuccessfulDetails$7 = "Изменения были восстановлены.";
var search$7 = "Поиск";
var select$7 = "Выбрать";
var selected$7 = "Выбрано";
var settings$7 = "Настройки";
var showQrCode$7 = "Показать QR-код";
var stop$7 = "Стоп";
var supportDescription$7 = "Посетите Discord Steam Deck Homebrew deckbrew.xyz/discord";
var supportLabel$7 = "Поддержка";
var useYtDlp$7 = "Использовать yt-dlp";
var useYtDlpDescription$7 = "Доступ к YouTube напрямую, без Invidious";
var volume$7 = "Громкость музыки";
var volumeDescription$7 = "Регулировка громкости музыки";
var ru = {
	about: about$7,
	aboutDescription: aboutDescription$7,
	aboutLabel: aboutLabel$7,
	backupOverrides: backupOverrides$7,
	backupOverridesLabel: backupOverridesLabel$7,
	backupSuccessful: backupSuccessful$7,
	backupSuccessfulDetails: backupSuccessfulDetails$7,
	changeThemeMusic: changeThemeMusic$7,
	close: close$7,
	defaultMuted: defaultMuted$7,
	defaultMutedDescription: defaultMutedDescription$7,
	deleteDownloads: deleteDownloads$7,
	deleteDownloadsConfirm: deleteDownloadsConfirm$7,
	deleteDownloadsDescription: deleteDownloadsDescription$7,
	deleteDownloadsLabel: deleteDownloadsLabel$7,
	deleteOverrides: deleteOverrides$7,
	deleteOverridesConfirm: deleteOverridesConfirm$7,
	deleteOverridesDescription: deleteOverridesDescription$7,
	deleteOverridesLabel: deleteOverridesLabel$7,
	download: download$7,
	downloadAudio: downloadAudio$7,
	downloadAudioDescription: downloadAudioDescription$7,
	downloadFailed: downloadFailed$7,
	downloadFailedDetail: downloadFailedDetail$7,
	downloadRestoreSuccessful: downloadRestoreSuccessful$7,
	downloadRestoreSuccessfulDetails: downloadRestoreSuccessfulDetails$7,
	extras: extras$7,
	gameSettings: gameSettings$7,
	gameVolumeDescription: gameVolumeDescription$7,
	helpTranslate: helpTranslate$7,
	invidiousInstance: invidiousInstance$7,
	invidiousInstanceDescription: invidiousInstanceDescription$7,
	noMusicLabel: noMusicLabel$7,
	overrides: overrides$7,
	play: play$7,
	reset: reset$7,
	resetVolume: resetVolume$7,
	restoreDownloads: restoreDownloads$7,
	restoreDownloadsConfirm: restoreDownloadsConfirm$7,
	restoreDownloadsConfirmDescription: restoreDownloadsConfirmDescription$7,
	restoreDownloadsDescription: restoreDownloadsDescription$7,
	restoreDownloadsLabel: restoreDownloadsLabel$7,
	restoreDownloadsOperation: restoreDownloadsOperation$7,
	restoreDownloadsOperationTitle: restoreDownloadsOperationTitle$7,
	restoreOverrides: restoreOverrides$7,
	restoreOverridesConfirm: restoreOverridesConfirm$7,
	restoreOverridesConfirmDetails: restoreOverridesConfirmDetails$7,
	restoreOverridesLabel: restoreOverridesLabel$7,
	restoreSuccessful: restoreSuccessful$7,
	restoreSuccessfulDetails: restoreSuccessfulDetails$7,
	search: search$7,
	select: select$7,
	selected: selected$7,
	settings: settings$7,
	showQrCode: showQrCode$7,
	stop: stop$7,
	supportDescription: supportDescription$7,
	supportLabel: supportLabel$7,
	useYtDlp: useYtDlp$7,
	useYtDlpDescription: useYtDlpDescription$7,
	volume: volume$7,
	volumeDescription: volumeDescription$7
};

var about$6 = "Om";
var aboutDescription$6 = "Spela temalåtar på dina spelsidor";
var aboutLabel$6 = "Om Game Theme Music";
var backupOverrides$6 = "Backup overrides";
var backupOverridesLabel$6 = "Backup all overrides";
var backupSuccessful$6 = "Backup successful";
var backupSuccessfulDetails$6 = "Overrides have been backed up.";
var changeThemeMusic$6 = "Ändra temamusik";
var close$6 = "Close";
var defaultMuted$6 = "Tystad som standard";
var defaultMutedDescription$6 = "Spela inte musik om inte manuellt aktiverat";
var deleteDownloads$6 = "Delete downloads";
var deleteDownloadsConfirm$6 = "Are you sure you want to delete all downloaded music?";
var deleteDownloadsDescription$6 = "Delete all downloaded music. This will not reset overrides.";
var deleteDownloadsLabel$6 = "Delete all downloads";
var deleteOverrides$6 = "Ta bort åsidosättningar";
var deleteOverridesConfirm$6 = "Are you sure you want to delete all overrides?";
var deleteOverridesDescription$6 = "This will also delete all backups of your overrides!";
var deleteOverridesLabel$6 = "Ta bort alla åsidosättningar";
var download$6 = "Download";
var downloadAudio$6 = "Download Music";
var downloadAudioDescription$6 = "Download selected music instead of streaming it. Only applies to newly made selections.";
var downloadFailed$6 = "Download failed";
var downloadFailedDetail$6 = "Could not download this music.";
var downloadRestoreSuccessful$6 = "Downloads successful";
var downloadRestoreSuccessfulDetails$6 = "All missing songs have been downloaded.";
var extras$6 = "Extras";
var gameSettings$6 = "Spelinställningar";
var gameVolumeDescription$6 = "Justera musikvolymen för det här spelet";
var helpTranslate$6 = "Help translate";
var invidiousInstance$6 = "Invidious Instance";
var invidiousInstanceDescription$6 = "Which Invidious instance would you like to use for searching and getting audio?";
var noMusicLabel$6 = "Ingen musik";
var overrides$6 = "Åsidosättande";
var play$6 = "Spela";
var reset$6 = "Reset";
var resetVolume$6 = "Återställ";
var restoreDownloads$6 = "Restore downloads";
var restoreDownloadsConfirm$6 = "Download all missing songs?";
var restoreDownloadsConfirmDescription$6 = "This will download up to {num} songs and might take a while.";
var restoreDownloadsDescription$6 = "Download all songs from manually set overrides that haven't been downloaded yet.";
var restoreDownloadsLabel$6 = "Restore missing downloads";
var restoreDownloadsOperation$6 = "Downloading {current}/{total}...";
var restoreDownloadsOperationTitle$6 = "Downloading missing songs...";
var restoreOverrides$6 = "Select backup";
var restoreOverridesConfirm$6 = "Restore this backup?";
var restoreOverridesConfirmDetails$6 = "This will overwrite all your current overrides!";
var restoreOverridesLabel$6 = "Restore overrides from backup";
var restoreSuccessful$6 = "Restore successful";
var restoreSuccessfulDetails$6 = "Overrides have been restored from backup.";
var search$6 = "Sök";
var select$6 = "Välj";
var selected$6 = "Vald";
var settings$6 = "Inställningar";
var showQrCode$6 = "Show QR Code";
var stop$6 = "Stopp";
var supportDescription$6 = "Besök Steam Deck Homebrew Discord deckbrew.xyz/discord";
var supportLabel$6 = "Support";
var useYtDlp$6 = "Use yt-dlp";
var useYtDlpDescription$6 = "Access YouTube directly without Invidious";
var volume$6 = "Musikvolym";
var volumeDescription$6 = "Justera musikvolymen";
var sv = {
	about: about$6,
	aboutDescription: aboutDescription$6,
	aboutLabel: aboutLabel$6,
	backupOverrides: backupOverrides$6,
	backupOverridesLabel: backupOverridesLabel$6,
	backupSuccessful: backupSuccessful$6,
	backupSuccessfulDetails: backupSuccessfulDetails$6,
	changeThemeMusic: changeThemeMusic$6,
	close: close$6,
	defaultMuted: defaultMuted$6,
	defaultMutedDescription: defaultMutedDescription$6,
	deleteDownloads: deleteDownloads$6,
	deleteDownloadsConfirm: deleteDownloadsConfirm$6,
	deleteDownloadsDescription: deleteDownloadsDescription$6,
	deleteDownloadsLabel: deleteDownloadsLabel$6,
	deleteOverrides: deleteOverrides$6,
	deleteOverridesConfirm: deleteOverridesConfirm$6,
	deleteOverridesDescription: deleteOverridesDescription$6,
	deleteOverridesLabel: deleteOverridesLabel$6,
	download: download$6,
	downloadAudio: downloadAudio$6,
	downloadAudioDescription: downloadAudioDescription$6,
	downloadFailed: downloadFailed$6,
	downloadFailedDetail: downloadFailedDetail$6,
	downloadRestoreSuccessful: downloadRestoreSuccessful$6,
	downloadRestoreSuccessfulDetails: downloadRestoreSuccessfulDetails$6,
	extras: extras$6,
	gameSettings: gameSettings$6,
	gameVolumeDescription: gameVolumeDescription$6,
	helpTranslate: helpTranslate$6,
	invidiousInstance: invidiousInstance$6,
	invidiousInstanceDescription: invidiousInstanceDescription$6,
	noMusicLabel: noMusicLabel$6,
	overrides: overrides$6,
	play: play$6,
	reset: reset$6,
	resetVolume: resetVolume$6,
	restoreDownloads: restoreDownloads$6,
	restoreDownloadsConfirm: restoreDownloadsConfirm$6,
	restoreDownloadsConfirmDescription: restoreDownloadsConfirmDescription$6,
	restoreDownloadsDescription: restoreDownloadsDescription$6,
	restoreDownloadsLabel: restoreDownloadsLabel$6,
	restoreDownloadsOperation: restoreDownloadsOperation$6,
	restoreDownloadsOperationTitle: restoreDownloadsOperationTitle$6,
	restoreOverrides: restoreOverrides$6,
	restoreOverridesConfirm: restoreOverridesConfirm$6,
	restoreOverridesConfirmDetails: restoreOverridesConfirmDetails$6,
	restoreOverridesLabel: restoreOverridesLabel$6,
	restoreSuccessful: restoreSuccessful$6,
	restoreSuccessfulDetails: restoreSuccessfulDetails$6,
	search: search$6,
	select: select$6,
	selected: selected$6,
	settings: settings$6,
	showQrCode: showQrCode$6,
	stop: stop$6,
	supportDescription: supportDescription$6,
	supportLabel: supportLabel$6,
	useYtDlp: useYtDlp$6,
	useYtDlpDescription: useYtDlpDescription$6,
	volume: volume$6,
	volumeDescription: volumeDescription$6
};

var about$5 = "About";
var aboutDescription$5 = "Play theme songs on your game pages";
var aboutLabel$5 = "About Game Theme Music";
var backupOverrides$5 = "Backup overrides";
var backupOverridesLabel$5 = "Backup all overrides";
var backupSuccessful$5 = "Backup successful";
var backupSuccessfulDetails$5 = "Overrides have been backed up.";
var changeThemeMusic$5 = "Change Theme Music";
var close$5 = "Close";
var defaultMuted$5 = "Default Muted";
var defaultMutedDescription$5 = "Don't play music unless manually set";
var deleteDownloads$5 = "Delete downloads";
var deleteDownloadsConfirm$5 = "Are you sure you want to delete all downloaded music?";
var deleteDownloadsDescription$5 = "Delete all downloaded music. This will not reset overrides.";
var deleteDownloadsLabel$5 = "Delete all downloads";
var deleteOverrides$5 = "Delete Overrides";
var deleteOverridesConfirm$5 = "Are you sure you want to delete all overrides?";
var deleteOverridesDescription$5 = "This will also delete all backups of your overrides!";
var deleteOverridesLabel$5 = "Delete all overrides";
var download$5 = "Download";
var downloadAudio$5 = "Download Music";
var downloadAudioDescription$5 = "Download selected music instead of streaming it. Only applies to newly made selections.";
var downloadFailed$5 = "Download failed";
var downloadFailedDetail$5 = "Could not download this music.";
var downloadRestoreSuccessful$5 = "Downloads successful";
var downloadRestoreSuccessfulDetails$5 = "All missing songs have been downloaded.";
var extras$5 = "Extras";
var gameSettings$5 = "Game Settings";
var gameVolumeDescription$5 = "Adjust music volume for this game";
var helpTranslate$5 = "Help translate";
var invidiousInstance$5 = "Invidious Instance";
var invidiousInstanceDescription$5 = "Which Invidious instance would you like to use for searching and getting audio?";
var noMusicLabel$5 = "No Music";
var overrides$5 = "Overrides";
var play$5 = "Play";
var reset$5 = "Reset";
var resetVolume$5 = "Reset";
var restoreDownloads$5 = "Restore downloads";
var restoreDownloadsConfirm$5 = "Download all missing songs?";
var restoreDownloadsConfirmDescription$5 = "This will download up to {num} songs and might take a while.";
var restoreDownloadsDescription$5 = "Download all songs from manually set overrides that haven't been downloaded yet.";
var restoreDownloadsLabel$5 = "Restore missing downloads";
var restoreDownloadsOperation$5 = "Downloading {current}/{total}...";
var restoreDownloadsOperationTitle$5 = "Downloading missing songs...";
var restoreOverrides$5 = "Select backup";
var restoreOverridesConfirm$5 = "Restore this backup?";
var restoreOverridesConfirmDetails$5 = "This will overwrite all your current overrides!";
var restoreOverridesLabel$5 = "Restore overrides from backup";
var restoreSuccessful$5 = "Restore successful";
var restoreSuccessfulDetails$5 = "Overrides have been restored from backup.";
var search$5 = "Search";
var select$5 = "Select";
var selected$5 = "Selected";
var settings$5 = "Settings";
var showQrCode$5 = "Show QR Code";
var stop$5 = "Stop";
var supportDescription$5 = "Visit the Steam Deck Homebrew Discord deckbrew.xyz/discord";
var supportLabel$5 = "Support";
var useYtDlp$5 = "Use yt-dlp";
var useYtDlpDescription$5 = "Access YouTube directly without Invidious";
var volume$5 = "Music Volume";
var volumeDescription$5 = "Adjust music volume";
var th = {
	about: about$5,
	aboutDescription: aboutDescription$5,
	aboutLabel: aboutLabel$5,
	backupOverrides: backupOverrides$5,
	backupOverridesLabel: backupOverridesLabel$5,
	backupSuccessful: backupSuccessful$5,
	backupSuccessfulDetails: backupSuccessfulDetails$5,
	changeThemeMusic: changeThemeMusic$5,
	close: close$5,
	defaultMuted: defaultMuted$5,
	defaultMutedDescription: defaultMutedDescription$5,
	deleteDownloads: deleteDownloads$5,
	deleteDownloadsConfirm: deleteDownloadsConfirm$5,
	deleteDownloadsDescription: deleteDownloadsDescription$5,
	deleteDownloadsLabel: deleteDownloadsLabel$5,
	deleteOverrides: deleteOverrides$5,
	deleteOverridesConfirm: deleteOverridesConfirm$5,
	deleteOverridesDescription: deleteOverridesDescription$5,
	deleteOverridesLabel: deleteOverridesLabel$5,
	download: download$5,
	downloadAudio: downloadAudio$5,
	downloadAudioDescription: downloadAudioDescription$5,
	downloadFailed: downloadFailed$5,
	downloadFailedDetail: downloadFailedDetail$5,
	downloadRestoreSuccessful: downloadRestoreSuccessful$5,
	downloadRestoreSuccessfulDetails: downloadRestoreSuccessfulDetails$5,
	extras: extras$5,
	gameSettings: gameSettings$5,
	gameVolumeDescription: gameVolumeDescription$5,
	helpTranslate: helpTranslate$5,
	invidiousInstance: invidiousInstance$5,
	invidiousInstanceDescription: invidiousInstanceDescription$5,
	noMusicLabel: noMusicLabel$5,
	overrides: overrides$5,
	play: play$5,
	reset: reset$5,
	resetVolume: resetVolume$5,
	restoreDownloads: restoreDownloads$5,
	restoreDownloadsConfirm: restoreDownloadsConfirm$5,
	restoreDownloadsConfirmDescription: restoreDownloadsConfirmDescription$5,
	restoreDownloadsDescription: restoreDownloadsDescription$5,
	restoreDownloadsLabel: restoreDownloadsLabel$5,
	restoreDownloadsOperation: restoreDownloadsOperation$5,
	restoreDownloadsOperationTitle: restoreDownloadsOperationTitle$5,
	restoreOverrides: restoreOverrides$5,
	restoreOverridesConfirm: restoreOverridesConfirm$5,
	restoreOverridesConfirmDetails: restoreOverridesConfirmDetails$5,
	restoreOverridesLabel: restoreOverridesLabel$5,
	restoreSuccessful: restoreSuccessful$5,
	restoreSuccessfulDetails: restoreSuccessfulDetails$5,
	search: search$5,
	select: select$5,
	selected: selected$5,
	settings: settings$5,
	showQrCode: showQrCode$5,
	stop: stop$5,
	supportDescription: supportDescription$5,
	supportLabel: supportLabel$5,
	useYtDlp: useYtDlp$5,
	useYtDlpDescription: useYtDlpDescription$5,
	volume: volume$5,
	volumeDescription: volumeDescription$5
};

var about$4 = "Hakkında";
var aboutDescription$4 = "Oyun sayfalarınızda tema şarkılarını çalın";
var aboutLabel$4 = "Oyun Tema Müziği Hakkında";
var backupOverrides$4 = "Backup overrides";
var backupOverridesLabel$4 = "Backup all overrides";
var backupSuccessful$4 = "Backup successful";
var backupSuccessfulDetails$4 = "Overrides have been backed up.";
var changeThemeMusic$4 = "Tema Müziğini Değiştir";
var close$4 = "Close";
var defaultMuted$4 = "Varsayılan Susturulmuş";
var defaultMutedDescription$4 = "Manuel olarak ayarlanmadıkça müzik çalmayın";
var deleteDownloads$4 = "Delete downloads";
var deleteDownloadsConfirm$4 = "Are you sure you want to delete all downloaded music?";
var deleteDownloadsDescription$4 = "Delete all downloaded music. This will not reset overrides.";
var deleteDownloadsLabel$4 = "Delete all downloads";
var deleteOverrides$4 = "Geçersiz Kılmaları Sil";
var deleteOverridesConfirm$4 = "Are you sure you want to delete all overrides?";
var deleteOverridesDescription$4 = "This will also delete all backups of your overrides!";
var deleteOverridesLabel$4 = "Tüm geçersiz kılmaları sil";
var download$4 = "Download";
var downloadAudio$4 = "Download Music";
var downloadAudioDescription$4 = "Download selected music instead of streaming it. Only applies to newly made selections.";
var downloadFailed$4 = "Download failed";
var downloadFailedDetail$4 = "Could not download this music.";
var downloadRestoreSuccessful$4 = "Downloads successful";
var downloadRestoreSuccessfulDetails$4 = "All missing songs have been downloaded.";
var extras$4 = "Extras";
var gameSettings$4 = "Oyun Ayarları";
var gameVolumeDescription$4 = "Bu oyun için müzik sesini ayarlayın";
var helpTranslate$4 = "Help translate";
var invidiousInstance$4 = "Invidious Instance";
var invidiousInstanceDescription$4 = "Which Invidious instance would you like to use for searching and getting audio?";
var noMusicLabel$4 = "Müzik yok";
var overrides$4 = "Geçersiz Kılmalar";
var play$4 = "Oynat";
var reset$4 = "Reset";
var resetVolume$4 = "Sıfırla";
var restoreDownloads$4 = "Restore downloads";
var restoreDownloadsConfirm$4 = "Download all missing songs?";
var restoreDownloadsConfirmDescription$4 = "This will download up to {num} songs and might take a while.";
var restoreDownloadsDescription$4 = "Download all songs from manually set overrides that haven't been downloaded yet.";
var restoreDownloadsLabel$4 = "Restore missing downloads";
var restoreDownloadsOperation$4 = "Downloading {current}/{total}...";
var restoreDownloadsOperationTitle$4 = "Downloading missing songs...";
var restoreOverrides$4 = "Select backup";
var restoreOverridesConfirm$4 = "Restore this backup?";
var restoreOverridesConfirmDetails$4 = "This will overwrite all your current overrides!";
var restoreOverridesLabel$4 = "Restore overrides from backup";
var restoreSuccessful$4 = "Restore successful";
var restoreSuccessfulDetails$4 = "Overrides have been restored from backup.";
var search$4 = "Ara";
var select$4 = "Seç";
var selected$4 = "Seçili";
var settings$4 = "Ayarlar";
var showQrCode$4 = "Show QR Code";
var stop$4 = "Durdur";
var supportDescription$4 = "Steam deck ev yapımı Discordu ziyaret edin deckbrew.xyz/discord";
var supportLabel$4 = "Destek";
var useYtDlp$4 = "Use yt-dlp";
var useYtDlpDescription$4 = "Access YouTube directly without Invidious";
var volume$4 = "Müzik Sesi";
var volumeDescription$4 = "Müzik Sesini Ayarlama";
var tr = {
	about: about$4,
	aboutDescription: aboutDescription$4,
	aboutLabel: aboutLabel$4,
	backupOverrides: backupOverrides$4,
	backupOverridesLabel: backupOverridesLabel$4,
	backupSuccessful: backupSuccessful$4,
	backupSuccessfulDetails: backupSuccessfulDetails$4,
	changeThemeMusic: changeThemeMusic$4,
	close: close$4,
	defaultMuted: defaultMuted$4,
	defaultMutedDescription: defaultMutedDescription$4,
	deleteDownloads: deleteDownloads$4,
	deleteDownloadsConfirm: deleteDownloadsConfirm$4,
	deleteDownloadsDescription: deleteDownloadsDescription$4,
	deleteDownloadsLabel: deleteDownloadsLabel$4,
	deleteOverrides: deleteOverrides$4,
	deleteOverridesConfirm: deleteOverridesConfirm$4,
	deleteOverridesDescription: deleteOverridesDescription$4,
	deleteOverridesLabel: deleteOverridesLabel$4,
	download: download$4,
	downloadAudio: downloadAudio$4,
	downloadAudioDescription: downloadAudioDescription$4,
	downloadFailed: downloadFailed$4,
	downloadFailedDetail: downloadFailedDetail$4,
	downloadRestoreSuccessful: downloadRestoreSuccessful$4,
	downloadRestoreSuccessfulDetails: downloadRestoreSuccessfulDetails$4,
	extras: extras$4,
	gameSettings: gameSettings$4,
	gameVolumeDescription: gameVolumeDescription$4,
	helpTranslate: helpTranslate$4,
	invidiousInstance: invidiousInstance$4,
	invidiousInstanceDescription: invidiousInstanceDescription$4,
	noMusicLabel: noMusicLabel$4,
	overrides: overrides$4,
	play: play$4,
	reset: reset$4,
	resetVolume: resetVolume$4,
	restoreDownloads: restoreDownloads$4,
	restoreDownloadsConfirm: restoreDownloadsConfirm$4,
	restoreDownloadsConfirmDescription: restoreDownloadsConfirmDescription$4,
	restoreDownloadsDescription: restoreDownloadsDescription$4,
	restoreDownloadsLabel: restoreDownloadsLabel$4,
	restoreDownloadsOperation: restoreDownloadsOperation$4,
	restoreDownloadsOperationTitle: restoreDownloadsOperationTitle$4,
	restoreOverrides: restoreOverrides$4,
	restoreOverridesConfirm: restoreOverridesConfirm$4,
	restoreOverridesConfirmDetails: restoreOverridesConfirmDetails$4,
	restoreOverridesLabel: restoreOverridesLabel$4,
	restoreSuccessful: restoreSuccessful$4,
	restoreSuccessfulDetails: restoreSuccessfulDetails$4,
	search: search$4,
	select: select$4,
	selected: selected$4,
	settings: settings$4,
	showQrCode: showQrCode$4,
	stop: stop$4,
	supportDescription: supportDescription$4,
	supportLabel: supportLabel$4,
	useYtDlp: useYtDlp$4,
	useYtDlpDescription: useYtDlpDescription$4,
	volume: volume$4,
	volumeDescription: volumeDescription$4
};

var about$3 = "Про додаток";
var aboutDescription$3 = "Відтворення головних тем на сторінках ваших ігор";
var aboutLabel$3 = "Інформація про тематичну музику у грі";
var backupOverrides$3 = "Резервне копіювання перевизначень";
var backupOverridesLabel$3 = "Резервне копіювання усіх перевизначень";
var backupSuccessful$3 = "Резервне копіювання завершено";
var backupSuccessfulDetails$3 = "Перевизначення успішно зарезервовані.";
var changeThemeMusic$3 = "Змінити музичну тему";
var close$3 = "Закрити";
var defaultMuted$3 = "За замовчуванням беззвучно";
var defaultMutedDescription$3 = "Не відтворювати музику, якщо не вибрана композиція вручну";
var deleteDownloads$3 = "Видалити завантаження";
var deleteDownloadsConfirm$3 = "Ви впевнені, що хочете видалити усю завантажену музику?";
var deleteDownloadsDescription$3 = "Видалити усю збережену музику. Це не скине перевизначення.";
var deleteDownloadsLabel$3 = "Видалити усі завантаження";
var deleteOverrides$3 = "Видалити перевизначення";
var deleteOverridesConfirm$3 = "Ви впевнені, що хочете видалити усі перевизначення?";
var deleteOverridesDescription$3 = "Це також видалить усі резервні копії ваших перевизначень!";
var deleteOverridesLabel$3 = "Видалити усі перевизначені";
var download$3 = "Завантажити";
var downloadAudio$3 = "Завантажити Музику";
var downloadAudioDescription$3 = "Завантажувати обрану музику замість її потокового передавання. Застосовується лише до нових виборів.";
var downloadFailed$3 = "Помилка завантаження";
var downloadFailedDetail$3 = "Не вдалось завантажити цю музику.";
var downloadRestoreSuccessful$3 = "Завантаження успішні";
var downloadRestoreSuccessfulDetails$3 = "Усі відсутні пісні було завантажено.";
var downloading = "Завантаження...";
var extras$3 = "Додатково";
var gameSettings$3 = "Налаштування гри";
var gameVolumeDescription$3 = "Регулювання гучності композиції для цієї гри";
var helpTranslate$3 = "Переклади";
var invidiousInstance$3 = "Хост Invidious";
var invidiousInstanceDescription$3 = "Який хост Invidious ви хотіли би використовувати для пошуку та отримання аудіо?";
var noMusicLabel$3 = "Без музики";
var overrides$3 = "Перевизначення";
var play$3 = "Відтворити";
var playbackFailed = "Відтворення не вдалося";
var playbackFailedDetail = "Не вдалося отримати аудіо. Завантажений файл може бути завеликим або термін дії потоку закінчився.";
var reset$3 = "Скинути";
var resetVolume$3 = "Скинути";
var restoreDownloads$3 = "Відновити завантаження";
var restoreDownloadsConfirm$3 = "Завантажити усі відсутні пісні?";
var restoreDownloadsConfirmDescription$3 = "Це завантажить до {num} пісень і може зайняти деякий час.";
var restoreDownloadsDescription$3 = "Завантажити усі пісні від встановлених перевизначень, які ще не були завантажені.";
var restoreDownloadsLabel$3 = "Відновити відсутні завантаження";
var restoreDownloadsOperation$3 = "Завантаження {current}/{total}...";
var restoreDownloadsOperationTitle$3 = "Завантаження відсутніх пісень...";
var restoreOverrides$3 = "Оберіть резервну копію";
var restoreOverridesConfirm$3 = "Відновити цю резервну копію?";
var restoreOverridesConfirmDetails$3 = "Це перезапише усі ваші поточні перевизначення!";
var restoreOverridesLabel$3 = "Відновити перевизначення з резервної копії";
var restoreSuccessful$3 = "Відновлення успішне";
var restoreSuccessfulDetails$3 = "Перевизначення були відновлені з резервної копії.";
var search$3 = "Пошук";
var select$3 = "Обрати";
var selected$3 = "Обрано";
var settings$3 = "Налаштування";
var showQrCode$3 = "Показати QR код";
var stop$3 = "Зупинити";
var supportDescription$3 = "Відвідайте Steam Deck Homebrew Discord deckbrew.xyz/discord";
var supportLabel$3 = "Підтримка";
var useYtDlp$3 = "Використовувати yt-dlp";
var useYtDlpDescription$3 = "Доступ до YouTube безпосередньо без Invidious";
var volume$3 = "Гучність Музики";
var volumeDescription$3 = "Регулювання гучності музики";
var uk = {
	about: about$3,
	aboutDescription: aboutDescription$3,
	aboutLabel: aboutLabel$3,
	backupOverrides: backupOverrides$3,
	backupOverridesLabel: backupOverridesLabel$3,
	backupSuccessful: backupSuccessful$3,
	backupSuccessfulDetails: backupSuccessfulDetails$3,
	changeThemeMusic: changeThemeMusic$3,
	close: close$3,
	defaultMuted: defaultMuted$3,
	defaultMutedDescription: defaultMutedDescription$3,
	deleteDownloads: deleteDownloads$3,
	deleteDownloadsConfirm: deleteDownloadsConfirm$3,
	deleteDownloadsDescription: deleteDownloadsDescription$3,
	deleteDownloadsLabel: deleteDownloadsLabel$3,
	deleteOverrides: deleteOverrides$3,
	deleteOverridesConfirm: deleteOverridesConfirm$3,
	deleteOverridesDescription: deleteOverridesDescription$3,
	deleteOverridesLabel: deleteOverridesLabel$3,
	download: download$3,
	downloadAudio: downloadAudio$3,
	downloadAudioDescription: downloadAudioDescription$3,
	downloadFailed: downloadFailed$3,
	downloadFailedDetail: downloadFailedDetail$3,
	downloadRestoreSuccessful: downloadRestoreSuccessful$3,
	downloadRestoreSuccessfulDetails: downloadRestoreSuccessfulDetails$3,
	downloading: downloading,
	extras: extras$3,
	gameSettings: gameSettings$3,
	gameVolumeDescription: gameVolumeDescription$3,
	helpTranslate: helpTranslate$3,
	invidiousInstance: invidiousInstance$3,
	invidiousInstanceDescription: invidiousInstanceDescription$3,
	noMusicLabel: noMusicLabel$3,
	overrides: overrides$3,
	play: play$3,
	playbackFailed: playbackFailed,
	playbackFailedDetail: playbackFailedDetail,
	reset: reset$3,
	resetVolume: resetVolume$3,
	restoreDownloads: restoreDownloads$3,
	restoreDownloadsConfirm: restoreDownloadsConfirm$3,
	restoreDownloadsConfirmDescription: restoreDownloadsConfirmDescription$3,
	restoreDownloadsDescription: restoreDownloadsDescription$3,
	restoreDownloadsLabel: restoreDownloadsLabel$3,
	restoreDownloadsOperation: restoreDownloadsOperation$3,
	restoreDownloadsOperationTitle: restoreDownloadsOperationTitle$3,
	restoreOverrides: restoreOverrides$3,
	restoreOverridesConfirm: restoreOverridesConfirm$3,
	restoreOverridesConfirmDetails: restoreOverridesConfirmDetails$3,
	restoreOverridesLabel: restoreOverridesLabel$3,
	restoreSuccessful: restoreSuccessful$3,
	restoreSuccessfulDetails: restoreSuccessfulDetails$3,
	search: search$3,
	select: select$3,
	selected: selected$3,
	settings: settings$3,
	showQrCode: showQrCode$3,
	stop: stop$3,
	supportDescription: supportDescription$3,
	supportLabel: supportLabel$3,
	useYtDlp: useYtDlp$3,
	useYtDlpDescription: useYtDlpDescription$3,
	volume: volume$3,
	volumeDescription: volumeDescription$3
};

var about$2 = "About";
var aboutDescription$2 = "Play theme songs on your game pages";
var aboutLabel$2 = "About Game Theme Music";
var backupOverrides$2 = "Backup overrides";
var backupOverridesLabel$2 = "Backup all overrides";
var backupSuccessful$2 = "Backup successful";
var backupSuccessfulDetails$2 = "Overrides have been backed up.";
var changeThemeMusic$2 = "Change Theme Music";
var close$2 = "Close";
var defaultMuted$2 = "Default Muted";
var defaultMutedDescription$2 = "Don't play music unless manually set";
var deleteDownloads$2 = "Delete downloads";
var deleteDownloadsConfirm$2 = "Are you sure you want to delete all downloaded music?";
var deleteDownloadsDescription$2 = "Delete all downloaded music. This will not reset overrides.";
var deleteDownloadsLabel$2 = "Delete all downloads";
var deleteOverrides$2 = "Delete Overrides";
var deleteOverridesConfirm$2 = "Are you sure you want to delete all overrides?";
var deleteOverridesDescription$2 = "This will also delete all backups of your overrides!";
var deleteOverridesLabel$2 = "Delete all overrides";
var download$2 = "Download";
var downloadAudio$2 = "Download Music";
var downloadAudioDescription$2 = "Download selected music instead of streaming it. Only applies to newly made selections.";
var downloadFailed$2 = "Download failed";
var downloadFailedDetail$2 = "Could not download this music.";
var downloadRestoreSuccessful$2 = "Downloads successful";
var downloadRestoreSuccessfulDetails$2 = "All missing songs have been downloaded.";
var extras$2 = "Extras";
var gameSettings$2 = "Game Settings";
var gameVolumeDescription$2 = "Adjust music volume for this game";
var helpTranslate$2 = "Help translate";
var invidiousInstance$2 = "Invidious Instance";
var invidiousInstanceDescription$2 = "Which Invidious instance would you like to use for searching and getting audio?";
var noMusicLabel$2 = "No Music";
var overrides$2 = "Overrides";
var play$2 = "Play";
var reset$2 = "Reset";
var resetVolume$2 = "Reset";
var restoreDownloads$2 = "Restore downloads";
var restoreDownloadsConfirm$2 = "Download all missing songs?";
var restoreDownloadsConfirmDescription$2 = "This will download up to {num} songs and might take a while.";
var restoreDownloadsDescription$2 = "Download all songs from manually set overrides that haven't been downloaded yet.";
var restoreDownloadsLabel$2 = "Restore missing downloads";
var restoreDownloadsOperation$2 = "Downloading {current}/{total}...";
var restoreDownloadsOperationTitle$2 = "Downloading missing songs...";
var restoreOverrides$2 = "Select backup";
var restoreOverridesConfirm$2 = "Restore this backup?";
var restoreOverridesConfirmDetails$2 = "This will overwrite all your current overrides!";
var restoreOverridesLabel$2 = "Restore overrides from backup";
var restoreSuccessful$2 = "Restore successful";
var restoreSuccessfulDetails$2 = "Overrides have been restored from backup.";
var search$2 = "Search";
var select$2 = "Select";
var selected$2 = "Selected";
var settings$2 = "Settings";
var showQrCode$2 = "Show QR Code";
var stop$2 = "Stop";
var supportDescription$2 = "Visit the Steam Deck Homebrew Discord deckbrew.xyz/discord";
var supportLabel$2 = "Support";
var useYtDlp$2 = "Use yt-dlp";
var useYtDlpDescription$2 = "Access YouTube directly without Invidious";
var volume$2 = "Music Volume";
var volumeDescription$2 = "Adjust music volume";
var vi = {
	about: about$2,
	aboutDescription: aboutDescription$2,
	aboutLabel: aboutLabel$2,
	backupOverrides: backupOverrides$2,
	backupOverridesLabel: backupOverridesLabel$2,
	backupSuccessful: backupSuccessful$2,
	backupSuccessfulDetails: backupSuccessfulDetails$2,
	changeThemeMusic: changeThemeMusic$2,
	close: close$2,
	defaultMuted: defaultMuted$2,
	defaultMutedDescription: defaultMutedDescription$2,
	deleteDownloads: deleteDownloads$2,
	deleteDownloadsConfirm: deleteDownloadsConfirm$2,
	deleteDownloadsDescription: deleteDownloadsDescription$2,
	deleteDownloadsLabel: deleteDownloadsLabel$2,
	deleteOverrides: deleteOverrides$2,
	deleteOverridesConfirm: deleteOverridesConfirm$2,
	deleteOverridesDescription: deleteOverridesDescription$2,
	deleteOverridesLabel: deleteOverridesLabel$2,
	download: download$2,
	downloadAudio: downloadAudio$2,
	downloadAudioDescription: downloadAudioDescription$2,
	downloadFailed: downloadFailed$2,
	downloadFailedDetail: downloadFailedDetail$2,
	downloadRestoreSuccessful: downloadRestoreSuccessful$2,
	downloadRestoreSuccessfulDetails: downloadRestoreSuccessfulDetails$2,
	extras: extras$2,
	gameSettings: gameSettings$2,
	gameVolumeDescription: gameVolumeDescription$2,
	helpTranslate: helpTranslate$2,
	invidiousInstance: invidiousInstance$2,
	invidiousInstanceDescription: invidiousInstanceDescription$2,
	noMusicLabel: noMusicLabel$2,
	overrides: overrides$2,
	play: play$2,
	reset: reset$2,
	resetVolume: resetVolume$2,
	restoreDownloads: restoreDownloads$2,
	restoreDownloadsConfirm: restoreDownloadsConfirm$2,
	restoreDownloadsConfirmDescription: restoreDownloadsConfirmDescription$2,
	restoreDownloadsDescription: restoreDownloadsDescription$2,
	restoreDownloadsLabel: restoreDownloadsLabel$2,
	restoreDownloadsOperation: restoreDownloadsOperation$2,
	restoreDownloadsOperationTitle: restoreDownloadsOperationTitle$2,
	restoreOverrides: restoreOverrides$2,
	restoreOverridesConfirm: restoreOverridesConfirm$2,
	restoreOverridesConfirmDetails: restoreOverridesConfirmDetails$2,
	restoreOverridesLabel: restoreOverridesLabel$2,
	restoreSuccessful: restoreSuccessful$2,
	restoreSuccessfulDetails: restoreSuccessfulDetails$2,
	search: search$2,
	select: select$2,
	selected: selected$2,
	settings: settings$2,
	showQrCode: showQrCode$2,
	stop: stop$2,
	supportDescription: supportDescription$2,
	supportLabel: supportLabel$2,
	useYtDlp: useYtDlp$2,
	useYtDlpDescription: useYtDlpDescription$2,
	volume: volume$2,
	volumeDescription: volumeDescription$2
};

var about$1 = "关于";
var aboutDescription$1 = "在游戏页面上播放其主题歌曲";
var aboutLabel$1 = "关于Game Theme Music";
var backupOverrides$1 = "Backup overrides";
var backupOverridesLabel$1 = "Backup all overrides";
var backupSuccessful$1 = "Backup successful";
var backupSuccessfulDetails$1 = "Overrides have been backed up.";
var changeThemeMusic$1 = "更换主题音乐";
var close$1 = "Close";
var defaultMuted$1 = "默认静音";
var defaultMutedDescription$1 = "除非手动设置，否则不播放音乐";
var deleteDownloads$1 = "Delete downloads";
var deleteDownloadsConfirm$1 = "Are you sure you want to delete all downloaded music?";
var deleteDownloadsDescription$1 = "Delete all downloaded music. This will not reset overrides.";
var deleteDownloadsLabel$1 = "Delete all downloads";
var deleteOverrides$1 = "删除覆盖项";
var deleteOverridesConfirm$1 = "Are you sure you want to delete all overrides?";
var deleteOverridesDescription$1 = "This will also delete all backups of your overrides!";
var deleteOverridesLabel$1 = "删除所有覆盖项";
var download$1 = "Download";
var downloadAudio$1 = "Download Music";
var downloadAudioDescription$1 = "Download selected music instead of streaming it. Only applies to newly made selections.";
var downloadFailed$1 = "Download failed";
var downloadFailedDetail$1 = "Could not download this music.";
var downloadRestoreSuccessful$1 = "Downloads successful";
var downloadRestoreSuccessfulDetails$1 = "All missing songs have been downloaded.";
var extras$1 = "Extras";
var gameSettings$1 = "游戏设置";
var gameVolumeDescription$1 = "调整此游戏的主题音乐音量";
var helpTranslate$1 = "Help translate";
var invidiousInstance$1 = "数据源服务器";
var invidiousInstanceDescription$1 = "您想使用哪个渠道搜索游戏主题曲？";
var noMusicLabel$1 = "无音乐";
var overrides$1 = "覆盖项";
var play$1 = "播放";
var reset$1 = "Reset";
var resetVolume$1 = "重置";
var restoreDownloads$1 = "Restore downloads";
var restoreDownloadsConfirm$1 = "Download all missing songs?";
var restoreDownloadsConfirmDescription$1 = "This will download up to {num} songs and might take a while.";
var restoreDownloadsDescription$1 = "Download all songs from manually set overrides that haven't been downloaded yet.";
var restoreDownloadsLabel$1 = "Restore missing downloads";
var restoreDownloadsOperation$1 = "Downloading {current}/{total}...";
var restoreDownloadsOperationTitle$1 = "Downloading missing songs...";
var restoreOverrides$1 = "Select backup";
var restoreOverridesConfirm$1 = "Restore this backup?";
var restoreOverridesConfirmDetails$1 = "This will overwrite all your current overrides!";
var restoreOverridesLabel$1 = "Restore overrides from backup";
var restoreSuccessful$1 = "Restore successful";
var restoreSuccessfulDetails$1 = "Overrides have been restored from backup.";
var search$1 = "搜索";
var select$1 = "选择";
var selected$1 = "已选择";
var settings$1 = "设置";
var showQrCode$1 = "Show QR Code";
var stop$1 = "暂停";
var supportDescription$1 = "访问Steam Deck Homebrew Discord: deckbrew.xyz/discord";
var supportLabel$1 = "支持";
var useYtDlp$1 = "Use yt-dlp";
var useYtDlpDescription$1 = "Access YouTube directly without Invidious";
var volume$1 = "音乐音量";
var volumeDescription$1 = "调整音乐音量";
var zhCn = {
	about: about$1,
	aboutDescription: aboutDescription$1,
	aboutLabel: aboutLabel$1,
	backupOverrides: backupOverrides$1,
	backupOverridesLabel: backupOverridesLabel$1,
	backupSuccessful: backupSuccessful$1,
	backupSuccessfulDetails: backupSuccessfulDetails$1,
	changeThemeMusic: changeThemeMusic$1,
	close: close$1,
	defaultMuted: defaultMuted$1,
	defaultMutedDescription: defaultMutedDescription$1,
	deleteDownloads: deleteDownloads$1,
	deleteDownloadsConfirm: deleteDownloadsConfirm$1,
	deleteDownloadsDescription: deleteDownloadsDescription$1,
	deleteDownloadsLabel: deleteDownloadsLabel$1,
	deleteOverrides: deleteOverrides$1,
	deleteOverridesConfirm: deleteOverridesConfirm$1,
	deleteOverridesDescription: deleteOverridesDescription$1,
	deleteOverridesLabel: deleteOverridesLabel$1,
	download: download$1,
	downloadAudio: downloadAudio$1,
	downloadAudioDescription: downloadAudioDescription$1,
	downloadFailed: downloadFailed$1,
	downloadFailedDetail: downloadFailedDetail$1,
	downloadRestoreSuccessful: downloadRestoreSuccessful$1,
	downloadRestoreSuccessfulDetails: downloadRestoreSuccessfulDetails$1,
	extras: extras$1,
	gameSettings: gameSettings$1,
	gameVolumeDescription: gameVolumeDescription$1,
	helpTranslate: helpTranslate$1,
	invidiousInstance: invidiousInstance$1,
	invidiousInstanceDescription: invidiousInstanceDescription$1,
	noMusicLabel: noMusicLabel$1,
	overrides: overrides$1,
	play: play$1,
	reset: reset$1,
	resetVolume: resetVolume$1,
	restoreDownloads: restoreDownloads$1,
	restoreDownloadsConfirm: restoreDownloadsConfirm$1,
	restoreDownloadsConfirmDescription: restoreDownloadsConfirmDescription$1,
	restoreDownloadsDescription: restoreDownloadsDescription$1,
	restoreDownloadsLabel: restoreDownloadsLabel$1,
	restoreDownloadsOperation: restoreDownloadsOperation$1,
	restoreDownloadsOperationTitle: restoreDownloadsOperationTitle$1,
	restoreOverrides: restoreOverrides$1,
	restoreOverridesConfirm: restoreOverridesConfirm$1,
	restoreOverridesConfirmDetails: restoreOverridesConfirmDetails$1,
	restoreOverridesLabel: restoreOverridesLabel$1,
	restoreSuccessful: restoreSuccessful$1,
	restoreSuccessfulDetails: restoreSuccessfulDetails$1,
	search: search$1,
	select: select$1,
	selected: selected$1,
	settings: settings$1,
	showQrCode: showQrCode$1,
	stop: stop$1,
	supportDescription: supportDescription$1,
	supportLabel: supportLabel$1,
	useYtDlp: useYtDlp$1,
	useYtDlpDescription: useYtDlpDescription$1,
	volume: volume$1,
	volumeDescription: volumeDescription$1
};

var about = "關於";
var aboutDescription = "在您的遊戲頁面播放主題曲";
var aboutLabel = "關於遊戲主題音樂";
var backupOverrides = "Backup overrides";
var backupOverridesLabel = "Backup all overrides";
var backupSuccessful = "Backup successful";
var backupSuccessfulDetails = "Overrides have been backed up.";
var changeThemeMusic = "修改主題音樂";
var close = "Close";
var defaultMuted = "預設靜音";
var defaultMutedDescription = "除非手動設定否則不播放音樂";
var deleteDownloads = "Delete downloads";
var deleteDownloadsConfirm = "Are you sure you want to delete all downloaded music?";
var deleteDownloadsDescription = "Delete all downloaded music. This will not reset overrides.";
var deleteDownloadsLabel = "Delete all downloads";
var deleteOverrides = "刪除覆蓋";
var deleteOverridesConfirm = "Are you sure you want to delete all overrides?";
var deleteOverridesDescription = "This will also delete all backups of your overrides!";
var deleteOverridesLabel = "刪除所有覆蓋";
var download = "Download";
var downloadAudio = "Download Music";
var downloadAudioDescription = "Download selected music instead of streaming it. Only applies to newly made selections.";
var downloadFailed = "Download failed";
var downloadFailedDetail = "Could not download this music.";
var downloadRestoreSuccessful = "Downloads successful";
var downloadRestoreSuccessfulDetails = "All missing songs have been downloaded.";
var extras = "Extras";
var gameSettings = "遊戲設定";
var gameVolumeDescription = "調整本遊戲的音樂音量";
var helpTranslate = "Help translate";
var invidiousInstance = "Invidious Instance";
var invidiousInstanceDescription = "Which Invidious instance would you like to use for searching and getting audio?";
var noMusicLabel = "無音樂";
var overrides = "覆蓋";
var play = "播放";
var reset = "Reset";
var resetVolume = "重設";
var restoreDownloads = "Restore downloads";
var restoreDownloadsConfirm = "Download all missing songs?";
var restoreDownloadsConfirmDescription = "This will download up to {num} songs and might take a while.";
var restoreDownloadsDescription = "Download all songs from manually set overrides that haven't been downloaded yet.";
var restoreDownloadsLabel = "Restore missing downloads";
var restoreDownloadsOperation = "Downloading {current}/{total}...";
var restoreDownloadsOperationTitle = "Downloading missing songs...";
var restoreOverrides = "Select backup";
var restoreOverridesConfirm = "Restore this backup?";
var restoreOverridesConfirmDetails = "This will overwrite all your current overrides!";
var restoreOverridesLabel = "Restore overrides from backup";
var restoreSuccessful = "Restore successful";
var restoreSuccessfulDetails = "Overrides have been restored from backup.";
var search = "搜尋";
var select = "選擇";
var selected = "已選";
var settings = "設定";
var showQrCode = "Show QR Code";
var stop = "停止";
var supportDescription = "前往 Steam Deck Homebrew Discord deckbrew.xyz/discord";
var supportLabel = "支援";
var useYtDlp = "Use yt-dlp";
var useYtDlpDescription = "Access YouTube directly without Invidious";
var volume = "音樂音量";
var volumeDescription = "調整音樂音量";
var zhTw = {
	about: about,
	aboutDescription: aboutDescription,
	aboutLabel: aboutLabel,
	backupOverrides: backupOverrides,
	backupOverridesLabel: backupOverridesLabel,
	backupSuccessful: backupSuccessful,
	backupSuccessfulDetails: backupSuccessfulDetails,
	changeThemeMusic: changeThemeMusic,
	close: close,
	defaultMuted: defaultMuted,
	defaultMutedDescription: defaultMutedDescription,
	deleteDownloads: deleteDownloads,
	deleteDownloadsConfirm: deleteDownloadsConfirm,
	deleteDownloadsDescription: deleteDownloadsDescription,
	deleteDownloadsLabel: deleteDownloadsLabel,
	deleteOverrides: deleteOverrides,
	deleteOverridesConfirm: deleteOverridesConfirm,
	deleteOverridesDescription: deleteOverridesDescription,
	deleteOverridesLabel: deleteOverridesLabel,
	download: download,
	downloadAudio: downloadAudio,
	downloadAudioDescription: downloadAudioDescription,
	downloadFailed: downloadFailed,
	downloadFailedDetail: downloadFailedDetail,
	downloadRestoreSuccessful: downloadRestoreSuccessful,
	downloadRestoreSuccessfulDetails: downloadRestoreSuccessfulDetails,
	extras: extras,
	gameSettings: gameSettings,
	gameVolumeDescription: gameVolumeDescription,
	helpTranslate: helpTranslate,
	invidiousInstance: invidiousInstance,
	invidiousInstanceDescription: invidiousInstanceDescription,
	noMusicLabel: noMusicLabel,
	overrides: overrides,
	play: play,
	reset: reset,
	resetVolume: resetVolume,
	restoreDownloads: restoreDownloads,
	restoreDownloadsConfirm: restoreDownloadsConfirm,
	restoreDownloadsConfirmDescription: restoreDownloadsConfirmDescription,
	restoreDownloadsDescription: restoreDownloadsDescription,
	restoreDownloadsLabel: restoreDownloadsLabel,
	restoreDownloadsOperation: restoreDownloadsOperation,
	restoreDownloadsOperationTitle: restoreDownloadsOperationTitle,
	restoreOverrides: restoreOverrides,
	restoreOverridesConfirm: restoreOverridesConfirm,
	restoreOverridesConfirmDetails: restoreOverridesConfirmDetails,
	restoreOverridesLabel: restoreOverridesLabel,
	restoreSuccessful: restoreSuccessful,
	restoreSuccessfulDetails: restoreSuccessfulDetails,
	search: search,
	select: select,
	selected: selected,
	settings: settings,
	showQrCode: showQrCode,
	stop: stop,
	supportDescription: supportDescription,
	supportLabel: supportLabel,
	useYtDlp: useYtDlp,
	useYtDlpDescription: useYtDlpDescription,
	volume: volume,
	volumeDescription: volumeDescription
};

const languages = {
    bg,
    cs,
    da,
    de,
    el,
    en,
    es,
    es419,
    fi,
    fr,
    hu,
    it,
    ja,
    ko,
    nl,
    no,
    pl,
    pt,
    ptBr,
    ro,
    ru,
    sv,
    th,
    tr,
    uk,
    vi,
    zhCn,
    zhTw
};

function getCurrentLanguage() {
    const steamLang = window.LocalizationManager.m_rgLocalesToUse[0];
    const lang = steamLang.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
    return languages[lang] ? lang : 'en';
}
function useTranslations() {
    const [lang] = SP_REACT.useState(getCurrentLanguage());
    return function (key, replacements = {}) {
        let result;
        const langObj = languages[lang];
        if (langObj?.[key]?.length) {
            result = langObj[key];
        }
        else if (languages.en?.[key]?.length) {
            result = languages.en[key];
        }
        else {
            result = key;
        }
        return result.replace(/{\w+}/g, (placeholder) => replacements[placeholder.substring(1, placeholder.length - 1)] ||
            placeholder);
    };
}

// THIS FILE IS AUTO GENERATED
function FaVolumeUp (props) {
  return GenIcon({"attr":{"viewBox":"0 0 576 512"},"child":[{"tag":"path","attr":{"d":"M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z"},"child":[]}]})(props);
}function FaVolumeMute (props) {
  return GenIcon({"attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zM461.64 256l45.64-45.64c6.3-6.3 6.3-16.52 0-22.82l-22.82-22.82c-6.3-6.3-16.52-6.3-22.82 0L416 210.36l-45.64-45.64c-6.3-6.3-16.52-6.3-22.82 0l-22.82 22.82c-6.3 6.3-6.3 16.52 0 22.82L370.36 256l-45.63 45.63c-6.3 6.3-6.3 16.52 0 22.82l22.82 22.82c6.3 6.3 16.52 6.3 22.82 0L416 301.64l45.64 45.64c6.3 6.3 16.52 6.3 22.82 0l22.82-22.82c6.3-6.3 6.3-16.52 0-22.82L461.64 256z"},"child":[]}]})(props);
}function FaUndo (props) {
  return GenIcon({"attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M212.333 224.333H12c-6.627 0-12-5.373-12-12V12C0 5.373 5.373 0 12 0h48c6.627 0 12 5.373 12 12v78.112C117.773 39.279 184.26 7.47 258.175 8.007c136.906.994 246.448 111.623 246.157 248.532C504.041 393.258 393.12 504 256.333 504c-64.089 0-122.496-24.313-166.51-64.215-5.099-4.622-5.334-12.554-.467-17.42l33.967-33.967c4.474-4.474 11.662-4.717 16.401-.525C170.76 415.336 211.58 432 256.333 432c97.268 0 176-78.716 176-176 0-97.267-78.716-176-176-176-58.496 0-110.28 28.476-142.274 72.333h98.274c6.627 0 12 5.373 12 12v48c0 6.627-5.373 12-12 12z"},"child":[]}]})(props);
}function FaSync (props) {
  return GenIcon({"attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M440.65 12.57l4 82.77A247.16 247.16 0 0 0 255.83 8C134.73 8 33.91 94.92 12.29 209.82A12 12 0 0 0 24.09 224h49.05a12 12 0 0 0 11.67-9.26 175.91 175.91 0 0 1 317-56.94l-101.46-4.86a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12H500a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12h-47.37a12 12 0 0 0-11.98 12.57zM255.83 432a175.61 175.61 0 0 1-146-77.8l101.8 4.87a12 12 0 0 0 12.57-12v-47.4a12 12 0 0 0-12-12H12a12 12 0 0 0-12 12V500a12 12 0 0 0 12 12h47.35a12 12 0 0 0 12-12.6l-4.15-82.57A247.17 247.17 0 0 0 255.83 504c121.11 0 221.93-86.92 243.55-201.82a12 12 0 0 0-11.8-14.18h-49.05a12 12 0 0 0-11.67 9.26A175.86 175.86 0 0 1 255.83 432z"},"child":[]}]})(props);
}function FaSave (props) {
  return GenIcon({"attr":{"viewBox":"0 0 448 512"},"child":[{"tag":"path","attr":{"d":"M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"},"child":[]}]})(props);
}function FaMusic (props) {
  return GenIcon({"attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"},"child":[]}]})(props);
}function FaLevelUpAlt (props) {
  return GenIcon({"attr":{"viewBox":"0 0 320 512"},"child":[{"tag":"path","attr":{"d":"M313.553 119.669L209.587 7.666c-9.485-10.214-25.676-10.229-35.174 0L70.438 119.669C56.232 134.969 67.062 160 88.025 160H152v272H68.024a11.996 11.996 0 0 0-8.485 3.515l-56 56C-4.021 499.074 1.333 512 12.024 512H208c13.255 0 24-10.745 24-24V160h63.966c20.878 0 31.851-24.969 17.587-40.331z"},"child":[]}]})(props);
}function FaHome (props) {
  return GenIcon({"attr":{"viewBox":"0 0 576 512"},"child":[{"tag":"path","attr":{"d":"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"},"child":[]}]})(props);
}function FaFolder (props) {
  return GenIcon({"attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z"},"child":[]}]})(props);
}function FaExclamationTriangle (props) {
  return GenIcon({"attr":{"viewBox":"0 0 576 512"},"child":[{"tag":"path","attr":{"d":"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},"child":[]}]})(props);
}function FaDownload (props) {
  return GenIcon({"attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"},"child":[]}]})(props);
}function FaCompactDisc (props) {
  return GenIcon({"attr":{"viewBox":"0 0 496 512"},"child":[{"tag":"path","attr":{"d":"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zM88 256H56c0-105.9 86.1-192 192-192v32c-88.2 0-160 71.8-160 160zm160 96c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96zm0-128c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z"},"child":[]}]})(props);
}function FaCheck (props) {
  return GenIcon({"attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},"child":[]}]})(props);
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function commonjsRequire(path) {
	throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}

var localforage$1 = {exports: {}};

/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/

(function (module, exports$1) {
	(function(f){{module.exports=f();}})(function(){return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof commonjsRequire=="function"&&commonjsRequire;if(!u&&a)return a(o,true);if(i)return i(o,true);var f=new Error("Cannot find module '"+o+"'");throw (f.code="MODULE_NOT_FOUND", f)}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r);}return n[o].exports}var i=typeof commonjsRequire=="function"&&commonjsRequire;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports$1){
	(function (global){
	var Mutation = global.MutationObserver || global.WebKitMutationObserver;

	var scheduleDrain;

	{
	  if (Mutation) {
	    var called = 0;
	    var observer = new Mutation(nextTick);
	    var element = global.document.createTextNode('');
	    observer.observe(element, {
	      characterData: true
	    });
	    scheduleDrain = function () {
	      element.data = (called = ++called % 2);
	    };
	  } else if (!global.setImmediate && typeof global.MessageChannel !== 'undefined') {
	    var channel = new global.MessageChannel();
	    channel.port1.onmessage = nextTick;
	    scheduleDrain = function () {
	      channel.port2.postMessage(0);
	    };
	  } else if ('document' in global && 'onreadystatechange' in global.document.createElement('script')) {
	    scheduleDrain = function () {

	      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
	      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
	      var scriptEl = global.document.createElement('script');
	      scriptEl.onreadystatechange = function () {
	        nextTick();

	        scriptEl.onreadystatechange = null;
	        scriptEl.parentNode.removeChild(scriptEl);
	        scriptEl = null;
	      };
	      global.document.documentElement.appendChild(scriptEl);
	    };
	  } else {
	    scheduleDrain = function () {
	      setTimeout(nextTick, 0);
	    };
	  }
	}

	var draining;
	var queue = [];
	//named nextTick for less confusing stack traces
	function nextTick() {
	  draining = true;
	  var i, oldQueue;
	  var len = queue.length;
	  while (len) {
	    oldQueue = queue;
	    queue = [];
	    i = -1;
	    while (++i < len) {
	      oldQueue[i]();
	    }
	    len = queue.length;
	  }
	  draining = false;
	}

	module.exports = immediate;
	function immediate(task) {
	  if (queue.push(task) === 1 && !draining) {
	    scheduleDrain();
	  }
	}

	}).call(this,typeof commonjsGlobal !== "undefined" ? commonjsGlobal : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
	},{}],2:[function(_dereq_,module,exports$1){
	var immediate = _dereq_(1);

	/* istanbul ignore next */
	function INTERNAL() {}

	var handlers = {};

	var REJECTED = ['REJECTED'];
	var FULFILLED = ['FULFILLED'];
	var PENDING = ['PENDING'];

	module.exports = Promise;

	function Promise(resolver) {
	  if (typeof resolver !== 'function') {
	    throw new TypeError('resolver must be a function');
	  }
	  this.state = PENDING;
	  this.queue = [];
	  this.outcome = void 0;
	  if (resolver !== INTERNAL) {
	    safelyResolveThenable(this, resolver);
	  }
	}

	Promise.prototype["catch"] = function (onRejected) {
	  return this.then(null, onRejected);
	};
	Promise.prototype.then = function (onFulfilled, onRejected) {
	  if (typeof onFulfilled !== 'function' && this.state === FULFILLED ||
	    typeof onRejected !== 'function' && this.state === REJECTED) {
	    return this;
	  }
	  var promise = new this.constructor(INTERNAL);
	  if (this.state !== PENDING) {
	    var resolver = this.state === FULFILLED ? onFulfilled : onRejected;
	    unwrap(promise, resolver, this.outcome);
	  } else {
	    this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
	  }

	  return promise;
	};
	function QueueItem(promise, onFulfilled, onRejected) {
	  this.promise = promise;
	  if (typeof onFulfilled === 'function') {
	    this.onFulfilled = onFulfilled;
	    this.callFulfilled = this.otherCallFulfilled;
	  }
	  if (typeof onRejected === 'function') {
	    this.onRejected = onRejected;
	    this.callRejected = this.otherCallRejected;
	  }
	}
	QueueItem.prototype.callFulfilled = function (value) {
	  handlers.resolve(this.promise, value);
	};
	QueueItem.prototype.otherCallFulfilled = function (value) {
	  unwrap(this.promise, this.onFulfilled, value);
	};
	QueueItem.prototype.callRejected = function (value) {
	  handlers.reject(this.promise, value);
	};
	QueueItem.prototype.otherCallRejected = function (value) {
	  unwrap(this.promise, this.onRejected, value);
	};

	function unwrap(promise, func, value) {
	  immediate(function () {
	    var returnValue;
	    try {
	      returnValue = func(value);
	    } catch (e) {
	      return handlers.reject(promise, e);
	    }
	    if (returnValue === promise) {
	      handlers.reject(promise, new TypeError('Cannot resolve promise with itself'));
	    } else {
	      handlers.resolve(promise, returnValue);
	    }
	  });
	}

	handlers.resolve = function (self, value) {
	  var result = tryCatch(getThen, value);
	  if (result.status === 'error') {
	    return handlers.reject(self, result.value);
	  }
	  var thenable = result.value;

	  if (thenable) {
	    safelyResolveThenable(self, thenable);
	  } else {
	    self.state = FULFILLED;
	    self.outcome = value;
	    var i = -1;
	    var len = self.queue.length;
	    while (++i < len) {
	      self.queue[i].callFulfilled(value);
	    }
	  }
	  return self;
	};
	handlers.reject = function (self, error) {
	  self.state = REJECTED;
	  self.outcome = error;
	  var i = -1;
	  var len = self.queue.length;
	  while (++i < len) {
	    self.queue[i].callRejected(error);
	  }
	  return self;
	};

	function getThen(obj) {
	  // Make sure we only access the accessor once as required by the spec
	  var then = obj && obj.then;
	  if (obj && (typeof obj === 'object' || typeof obj === 'function') && typeof then === 'function') {
	    return function appyThen() {
	      then.apply(obj, arguments);
	    };
	  }
	}

	function safelyResolveThenable(self, thenable) {
	  // Either fulfill, reject or reject with error
	  var called = false;
	  function onError(value) {
	    if (called) {
	      return;
	    }
	    called = true;
	    handlers.reject(self, value);
	  }

	  function onSuccess(value) {
	    if (called) {
	      return;
	    }
	    called = true;
	    handlers.resolve(self, value);
	  }

	  function tryToUnwrap() {
	    thenable(onSuccess, onError);
	  }

	  var result = tryCatch(tryToUnwrap);
	  if (result.status === 'error') {
	    onError(result.value);
	  }
	}

	function tryCatch(func, value) {
	  var out = {};
	  try {
	    out.value = func(value);
	    out.status = 'success';
	  } catch (e) {
	    out.status = 'error';
	    out.value = e;
	  }
	  return out;
	}

	Promise.resolve = resolve;
	function resolve(value) {
	  if (value instanceof this) {
	    return value;
	  }
	  return handlers.resolve(new this(INTERNAL), value);
	}

	Promise.reject = reject;
	function reject(reason) {
	  var promise = new this(INTERNAL);
	  return handlers.reject(promise, reason);
	}

	Promise.all = all;
	function all(iterable) {
	  var self = this;
	  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
	    return this.reject(new TypeError('must be an array'));
	  }

	  var len = iterable.length;
	  var called = false;
	  if (!len) {
	    return this.resolve([]);
	  }

	  var values = new Array(len);
	  var resolved = 0;
	  var i = -1;
	  var promise = new this(INTERNAL);

	  while (++i < len) {
	    allResolver(iterable[i], i);
	  }
	  return promise;
	  function allResolver(value, i) {
	    self.resolve(value).then(resolveFromAll, function (error) {
	      if (!called) {
	        called = true;
	        handlers.reject(promise, error);
	      }
	    });
	    function resolveFromAll(outValue) {
	      values[i] = outValue;
	      if (++resolved === len && !called) {
	        called = true;
	        handlers.resolve(promise, values);
	      }
	    }
	  }
	}

	Promise.race = race;
	function race(iterable) {
	  var self = this;
	  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
	    return this.reject(new TypeError('must be an array'));
	  }

	  var len = iterable.length;
	  var called = false;
	  if (!len) {
	    return this.resolve([]);
	  }

	  var i = -1;
	  var promise = new this(INTERNAL);

	  while (++i < len) {
	    resolver(iterable[i]);
	  }
	  return promise;
	  function resolver(value) {
	    self.resolve(value).then(function (response) {
	      if (!called) {
	        called = true;
	        handlers.resolve(promise, response);
	      }
	    }, function (error) {
	      if (!called) {
	        called = true;
	        handlers.reject(promise, error);
	      }
	    });
	  }
	}

	},{"1":1}],3:[function(_dereq_,module,exports$1){
	(function (global){
	if (typeof global.Promise !== 'function') {
	  global.Promise = _dereq_(2);
	}

	}).call(this,typeof commonjsGlobal !== "undefined" ? commonjsGlobal : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
	},{"2":2}],4:[function(_dereq_,module,exports$1){

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function getIDB() {
	    /* global indexedDB,webkitIndexedDB,mozIndexedDB,OIndexedDB,msIndexedDB */
	    try {
	        if (typeof indexedDB !== 'undefined') {
	            return indexedDB;
	        }
	        if (typeof webkitIndexedDB !== 'undefined') {
	            return webkitIndexedDB;
	        }
	        if (typeof mozIndexedDB !== 'undefined') {
	            return mozIndexedDB;
	        }
	        if (typeof OIndexedDB !== 'undefined') {
	            return OIndexedDB;
	        }
	        if (typeof msIndexedDB !== 'undefined') {
	            return msIndexedDB;
	        }
	    } catch (e) {
	        return;
	    }
	}

	var idb = getIDB();

	function isIndexedDBValid() {
	    try {
	        // Initialize IndexedDB; fall back to vendor-prefixed versions
	        // if needed.
	        if (!idb || !idb.open) {
	            return false;
	        }
	        // We mimic PouchDB here;
	        //
	        // We test for openDatabase because IE Mobile identifies itself
	        // as Safari. Oh the lulz...
	        var isSafari = typeof openDatabase !== 'undefined' && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform);

	        var hasFetch = typeof fetch === 'function' && fetch.toString().indexOf('[native code') !== -1;

	        // Safari <10.1 does not meet our requirements for IDB support
	        // (see: https://github.com/pouchdb/pouchdb/issues/5572).
	        // Safari 10.1 shipped with fetch, we can use that to detect it.
	        // Note: this creates issues with `window.fetch` polyfills and
	        // overrides; see:
	        // https://github.com/localForage/localForage/issues/856
	        return (!isSafari || hasFetch) && typeof indexedDB !== 'undefined' &&
	        // some outdated implementations of IDB that appear on Samsung
	        // and HTC Android devices <4.4 are missing IDBKeyRange
	        // See: https://github.com/mozilla/localForage/issues/128
	        // See: https://github.com/mozilla/localForage/issues/272
	        typeof IDBKeyRange !== 'undefined';
	    } catch (e) {
	        return false;
	    }
	}

	// Abstracts constructing a Blob object, so it also works in older
	// browsers that don't support the native Blob constructor. (i.e.
	// old QtWebKit versions, at least).
	// Abstracts constructing a Blob object, so it also works in older
	// browsers that don't support the native Blob constructor. (i.e.
	// old QtWebKit versions, at least).
	function createBlob(parts, properties) {
	    /* global BlobBuilder,MSBlobBuilder,MozBlobBuilder,WebKitBlobBuilder */
	    parts = parts || [];
	    properties = properties || {};
	    try {
	        return new Blob(parts, properties);
	    } catch (e) {
	        if (e.name !== 'TypeError') {
	            throw e;
	        }
	        var Builder = typeof BlobBuilder !== 'undefined' ? BlobBuilder : typeof MSBlobBuilder !== 'undefined' ? MSBlobBuilder : typeof MozBlobBuilder !== 'undefined' ? MozBlobBuilder : WebKitBlobBuilder;
	        var builder = new Builder();
	        for (var i = 0; i < parts.length; i += 1) {
	            builder.append(parts[i]);
	        }
	        return builder.getBlob(properties.type);
	    }
	}

	// This is CommonJS because lie is an external dependency, so Rollup
	// can just ignore it.
	if (typeof Promise === 'undefined') {
	    // In the "nopromises" build this will just throw if you don't have
	    // a global promise object, but it would throw anyway later.
	    _dereq_(3);
	}
	var Promise$1 = Promise;

	function executeCallback(promise, callback) {
	    if (callback) {
	        promise.then(function (result) {
	            callback(null, result);
	        }, function (error) {
	            callback(error);
	        });
	    }
	}

	function executeTwoCallbacks(promise, callback, errorCallback) {
	    if (typeof callback === 'function') {
	        promise.then(callback);
	    }

	    if (typeof errorCallback === 'function') {
	        promise["catch"](errorCallback);
	    }
	}

	function normalizeKey(key) {
	    // Cast the key to a string, as that's all we can set as a key.
	    if (typeof key !== 'string') {
	        console.warn(key + ' used as a key, but it is not a string.');
	        key = String(key);
	    }

	    return key;
	}

	function getCallback() {
	    if (arguments.length && typeof arguments[arguments.length - 1] === 'function') {
	        return arguments[arguments.length - 1];
	    }
	}

	// Some code originally from async_storage.js in
	// [Gaia](https://github.com/mozilla-b2g/gaia).

	var DETECT_BLOB_SUPPORT_STORE = 'local-forage-detect-blob-support';
	var supportsBlobs = void 0;
	var dbContexts = {};
	var toString = Object.prototype.toString;

	// Transaction Modes
	var READ_ONLY = 'readonly';
	var READ_WRITE = 'readwrite';

	// Transform a binary string to an array buffer, because otherwise
	// weird stuff happens when you try to work with the binary string directly.
	// It is known.
	// From http://stackoverflow.com/questions/14967647/ (continues on next line)
	// encode-decode-image-with-base64-breaks-image (2013-04-21)
	function _binStringToArrayBuffer(bin) {
	    var length = bin.length;
	    var buf = new ArrayBuffer(length);
	    var arr = new Uint8Array(buf);
	    for (var i = 0; i < length; i++) {
	        arr[i] = bin.charCodeAt(i);
	    }
	    return buf;
	}

	//
	// Blobs are not supported in all versions of IndexedDB, notably
	// Chrome <37 and Android <5. In those versions, storing a blob will throw.
	//
	// Various other blob bugs exist in Chrome v37-42 (inclusive).
	// Detecting them is expensive and confusing to users, and Chrome 37-42
	// is at very low usage worldwide, so we do a hacky userAgent check instead.
	//
	// content-type bug: https://code.google.com/p/chromium/issues/detail?id=408120
	// 404 bug: https://code.google.com/p/chromium/issues/detail?id=447916
	// FileReader bug: https://code.google.com/p/chromium/issues/detail?id=447836
	//
	// Code borrowed from PouchDB. See:
	// https://github.com/pouchdb/pouchdb/blob/master/packages/node_modules/pouchdb-adapter-idb/src/blobSupport.js
	//
	function _checkBlobSupportWithoutCaching(idb) {
	    return new Promise$1(function (resolve) {
	        var txn = idb.transaction(DETECT_BLOB_SUPPORT_STORE, READ_WRITE);
	        var blob = createBlob(['']);
	        txn.objectStore(DETECT_BLOB_SUPPORT_STORE).put(blob, 'key');

	        txn.onabort = function (e) {
	            // If the transaction aborts now its due to not being able to
	            // write to the database, likely due to the disk being full
	            e.preventDefault();
	            e.stopPropagation();
	            resolve(false);
	        };

	        txn.oncomplete = function () {
	            var matchedChrome = navigator.userAgent.match(/Chrome\/(\d+)/);
	            var matchedEdge = navigator.userAgent.match(/Edge\//);
	            // MS Edge pretends to be Chrome 42:
	            // https://msdn.microsoft.com/en-us/library/hh869301%28v=vs.85%29.aspx
	            resolve(matchedEdge || !matchedChrome || parseInt(matchedChrome[1], 10) >= 43);
	        };
	    })["catch"](function () {
	        return false; // error, so assume unsupported
	    });
	}

	function _checkBlobSupport(idb) {
	    if (typeof supportsBlobs === 'boolean') {
	        return Promise$1.resolve(supportsBlobs);
	    }
	    return _checkBlobSupportWithoutCaching(idb).then(function (value) {
	        supportsBlobs = value;
	        return supportsBlobs;
	    });
	}

	function _deferReadiness(dbInfo) {
	    var dbContext = dbContexts[dbInfo.name];

	    // Create a deferred object representing the current database operation.
	    var deferredOperation = {};

	    deferredOperation.promise = new Promise$1(function (resolve, reject) {
	        deferredOperation.resolve = resolve;
	        deferredOperation.reject = reject;
	    });

	    // Enqueue the deferred operation.
	    dbContext.deferredOperations.push(deferredOperation);

	    // Chain its promise to the database readiness.
	    if (!dbContext.dbReady) {
	        dbContext.dbReady = deferredOperation.promise;
	    } else {
	        dbContext.dbReady = dbContext.dbReady.then(function () {
	            return deferredOperation.promise;
	        });
	    }
	}

	function _advanceReadiness(dbInfo) {
	    var dbContext = dbContexts[dbInfo.name];

	    // Dequeue a deferred operation.
	    var deferredOperation = dbContext.deferredOperations.pop();

	    // Resolve its promise (which is part of the database readiness
	    // chain of promises).
	    if (deferredOperation) {
	        deferredOperation.resolve();
	        return deferredOperation.promise;
	    }
	}

	function _rejectReadiness(dbInfo, err) {
	    var dbContext = dbContexts[dbInfo.name];

	    // Dequeue a deferred operation.
	    var deferredOperation = dbContext.deferredOperations.pop();

	    // Reject its promise (which is part of the database readiness
	    // chain of promises).
	    if (deferredOperation) {
	        deferredOperation.reject(err);
	        return deferredOperation.promise;
	    }
	}

	function _getConnection(dbInfo, upgradeNeeded) {
	    return new Promise$1(function (resolve, reject) {
	        dbContexts[dbInfo.name] = dbContexts[dbInfo.name] || createDbContext();

	        if (dbInfo.db) {
	            if (upgradeNeeded) {
	                _deferReadiness(dbInfo);
	                dbInfo.db.close();
	            } else {
	                return resolve(dbInfo.db);
	            }
	        }

	        var dbArgs = [dbInfo.name];

	        if (upgradeNeeded) {
	            dbArgs.push(dbInfo.version);
	        }

	        var openreq = idb.open.apply(idb, dbArgs);

	        if (upgradeNeeded) {
	            openreq.onupgradeneeded = function (e) {
	                var db = openreq.result;
	                try {
	                    db.createObjectStore(dbInfo.storeName);
	                    if (e.oldVersion <= 1) {
	                        // Added when support for blob shims was added
	                        db.createObjectStore(DETECT_BLOB_SUPPORT_STORE);
	                    }
	                } catch (ex) {
	                    if (ex.name === 'ConstraintError') {
	                        console.warn('The database "' + dbInfo.name + '"' + ' has been upgraded from version ' + e.oldVersion + ' to version ' + e.newVersion + ', but the storage "' + dbInfo.storeName + '" already exists.');
	                    } else {
	                        throw ex;
	                    }
	                }
	            };
	        }

	        openreq.onerror = function (e) {
	            e.preventDefault();
	            reject(openreq.error);
	        };

	        openreq.onsuccess = function () {
	            var db = openreq.result;
	            db.onversionchange = function (e) {
	                // Triggered when the database is modified (e.g. adding an objectStore) or
	                // deleted (even when initiated by other sessions in different tabs).
	                // Closing the connection here prevents those operations from being blocked.
	                // If the database is accessed again later by this instance, the connection
	                // will be reopened or the database recreated as needed.
	                e.target.close();
	            };
	            resolve(db);
	            _advanceReadiness(dbInfo);
	        };
	    });
	}

	function _getOriginalConnection(dbInfo) {
	    return _getConnection(dbInfo, false);
	}

	function _getUpgradedConnection(dbInfo) {
	    return _getConnection(dbInfo, true);
	}

	function _isUpgradeNeeded(dbInfo, defaultVersion) {
	    if (!dbInfo.db) {
	        return true;
	    }

	    var isNewStore = !dbInfo.db.objectStoreNames.contains(dbInfo.storeName);
	    var isDowngrade = dbInfo.version < dbInfo.db.version;
	    var isUpgrade = dbInfo.version > dbInfo.db.version;

	    if (isDowngrade) {
	        // If the version is not the default one
	        // then warn for impossible downgrade.
	        if (dbInfo.version !== defaultVersion) {
	            console.warn('The database "' + dbInfo.name + '"' + " can't be downgraded from version " + dbInfo.db.version + ' to version ' + dbInfo.version + '.');
	        }
	        // Align the versions to prevent errors.
	        dbInfo.version = dbInfo.db.version;
	    }

	    if (isUpgrade || isNewStore) {
	        // If the store is new then increment the version (if needed).
	        // This will trigger an "upgradeneeded" event which is required
	        // for creating a store.
	        if (isNewStore) {
	            var incVersion = dbInfo.db.version + 1;
	            if (incVersion > dbInfo.version) {
	                dbInfo.version = incVersion;
	            }
	        }

	        return true;
	    }

	    return false;
	}

	// encode a blob for indexeddb engines that don't support blobs
	function _encodeBlob(blob) {
	    return new Promise$1(function (resolve, reject) {
	        var reader = new FileReader();
	        reader.onerror = reject;
	        reader.onloadend = function (e) {
	            var base64 = btoa(e.target.result || '');
	            resolve({
	                __local_forage_encoded_blob: true,
	                data: base64,
	                type: blob.type
	            });
	        };
	        reader.readAsBinaryString(blob);
	    });
	}

	// decode an encoded blob
	function _decodeBlob(encodedBlob) {
	    var arrayBuff = _binStringToArrayBuffer(atob(encodedBlob.data));
	    return createBlob([arrayBuff], { type: encodedBlob.type });
	}

	// is this one of our fancy encoded blobs?
	function _isEncodedBlob(value) {
	    return value && value.__local_forage_encoded_blob;
	}

	// Specialize the default `ready()` function by making it dependent
	// on the current database operations. Thus, the driver will be actually
	// ready when it's been initialized (default) *and* there are no pending
	// operations on the database (initiated by some other instances).
	function _fullyReady(callback) {
	    var self = this;

	    var promise = self._initReady().then(function () {
	        var dbContext = dbContexts[self._dbInfo.name];

	        if (dbContext && dbContext.dbReady) {
	            return dbContext.dbReady;
	        }
	    });

	    executeTwoCallbacks(promise, callback, callback);
	    return promise;
	}

	// Try to establish a new db connection to replace the
	// current one which is broken (i.e. experiencing
	// InvalidStateError while creating a transaction).
	function _tryReconnect(dbInfo) {
	    _deferReadiness(dbInfo);

	    var dbContext = dbContexts[dbInfo.name];
	    var forages = dbContext.forages;

	    for (var i = 0; i < forages.length; i++) {
	        var forage = forages[i];
	        if (forage._dbInfo.db) {
	            forage._dbInfo.db.close();
	            forage._dbInfo.db = null;
	        }
	    }
	    dbInfo.db = null;

	    return _getOriginalConnection(dbInfo).then(function (db) {
	        dbInfo.db = db;
	        if (_isUpgradeNeeded(dbInfo)) {
	            // Reopen the database for upgrading.
	            return _getUpgradedConnection(dbInfo);
	        }
	        return db;
	    }).then(function (db) {
	        // store the latest db reference
	        // in case the db was upgraded
	        dbInfo.db = dbContext.db = db;
	        for (var i = 0; i < forages.length; i++) {
	            forages[i]._dbInfo.db = db;
	        }
	    })["catch"](function (err) {
	        _rejectReadiness(dbInfo, err);
	        throw err;
	    });
	}

	// FF doesn't like Promises (micro-tasks) and IDDB store operations,
	// so we have to do it with callbacks
	function createTransaction(dbInfo, mode, callback, retries) {
	    if (retries === undefined) {
	        retries = 1;
	    }

	    try {
	        var tx = dbInfo.db.transaction(dbInfo.storeName, mode);
	        callback(null, tx);
	    } catch (err) {
	        if (retries > 0 && (!dbInfo.db || err.name === 'InvalidStateError' || err.name === 'NotFoundError')) {
	            return Promise$1.resolve().then(function () {
	                if (!dbInfo.db || err.name === 'NotFoundError' && !dbInfo.db.objectStoreNames.contains(dbInfo.storeName) && dbInfo.version <= dbInfo.db.version) {
	                    // increase the db version, to create the new ObjectStore
	                    if (dbInfo.db) {
	                        dbInfo.version = dbInfo.db.version + 1;
	                    }
	                    // Reopen the database for upgrading.
	                    return _getUpgradedConnection(dbInfo);
	                }
	            }).then(function () {
	                return _tryReconnect(dbInfo).then(function () {
	                    createTransaction(dbInfo, mode, callback, retries - 1);
	                });
	            })["catch"](callback);
	        }

	        callback(err);
	    }
	}

	function createDbContext() {
	    return {
	        // Running localForages sharing a database.
	        forages: [],
	        // Shared database.
	        db: null,
	        // Database readiness (promise).
	        dbReady: null,
	        // Deferred operations on the database.
	        deferredOperations: []
	    };
	}

	// Open the IndexedDB database (automatically creates one if one didn't
	// previously exist), using any options set in the config.
	function _initStorage(options) {
	    var self = this;
	    var dbInfo = {
	        db: null
	    };

	    if (options) {
	        for (var i in options) {
	            dbInfo[i] = options[i];
	        }
	    }

	    // Get the current context of the database;
	    var dbContext = dbContexts[dbInfo.name];

	    // ...or create a new context.
	    if (!dbContext) {
	        dbContext = createDbContext();
	        // Register the new context in the global container.
	        dbContexts[dbInfo.name] = dbContext;
	    }

	    // Register itself as a running localForage in the current context.
	    dbContext.forages.push(self);

	    // Replace the default `ready()` function with the specialized one.
	    if (!self._initReady) {
	        self._initReady = self.ready;
	        self.ready = _fullyReady;
	    }

	    // Create an array of initialization states of the related localForages.
	    var initPromises = [];

	    function ignoreErrors() {
	        // Don't handle errors here,
	        // just makes sure related localForages aren't pending.
	        return Promise$1.resolve();
	    }

	    for (var j = 0; j < dbContext.forages.length; j++) {
	        var forage = dbContext.forages[j];
	        if (forage !== self) {
	            // Don't wait for itself...
	            initPromises.push(forage._initReady()["catch"](ignoreErrors));
	        }
	    }

	    // Take a snapshot of the related localForages.
	    var forages = dbContext.forages.slice(0);

	    // Initialize the connection process only when
	    // all the related localForages aren't pending.
	    return Promise$1.all(initPromises).then(function () {
	        dbInfo.db = dbContext.db;
	        // Get the connection or open a new one without upgrade.
	        return _getOriginalConnection(dbInfo);
	    }).then(function (db) {
	        dbInfo.db = db;
	        if (_isUpgradeNeeded(dbInfo, self._defaultConfig.version)) {
	            // Reopen the database for upgrading.
	            return _getUpgradedConnection(dbInfo);
	        }
	        return db;
	    }).then(function (db) {
	        dbInfo.db = dbContext.db = db;
	        self._dbInfo = dbInfo;
	        // Share the final connection amongst related localForages.
	        for (var k = 0; k < forages.length; k++) {
	            var forage = forages[k];
	            if (forage !== self) {
	                // Self is already up-to-date.
	                forage._dbInfo.db = dbInfo.db;
	                forage._dbInfo.version = dbInfo.version;
	            }
	        }
	    });
	}

	function getItem(key, callback) {
	    var self = this;

	    key = normalizeKey(key);

	    var promise = new Promise$1(function (resolve, reject) {
	        self.ready().then(function () {
	            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
	                if (err) {
	                    return reject(err);
	                }

	                try {
	                    var store = transaction.objectStore(self._dbInfo.storeName);
	                    var req = store.get(key);

	                    req.onsuccess = function () {
	                        var value = req.result;
	                        if (value === undefined) {
	                            value = null;
	                        }
	                        if (_isEncodedBlob(value)) {
	                            value = _decodeBlob(value);
	                        }
	                        resolve(value);
	                    };

	                    req.onerror = function () {
	                        reject(req.error);
	                    };
	                } catch (e) {
	                    reject(e);
	                }
	            });
	        })["catch"](reject);
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	// Iterate over all items stored in database.
	function iterate(iterator, callback) {
	    var self = this;

	    var promise = new Promise$1(function (resolve, reject) {
	        self.ready().then(function () {
	            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
	                if (err) {
	                    return reject(err);
	                }

	                try {
	                    var store = transaction.objectStore(self._dbInfo.storeName);
	                    var req = store.openCursor();
	                    var iterationNumber = 1;

	                    req.onsuccess = function () {
	                        var cursor = req.result;

	                        if (cursor) {
	                            var value = cursor.value;
	                            if (_isEncodedBlob(value)) {
	                                value = _decodeBlob(value);
	                            }
	                            var result = iterator(value, cursor.key, iterationNumber++);

	                            // when the iterator callback returns any
	                            // (non-`undefined`) value, then we stop
	                            // the iteration immediately
	                            if (result !== void 0) {
	                                resolve(result);
	                            } else {
	                                cursor["continue"]();
	                            }
	                        } else {
	                            resolve();
	                        }
	                    };

	                    req.onerror = function () {
	                        reject(req.error);
	                    };
	                } catch (e) {
	                    reject(e);
	                }
	            });
	        })["catch"](reject);
	    });

	    executeCallback(promise, callback);

	    return promise;
	}

	function setItem(key, value, callback) {
	    var self = this;

	    key = normalizeKey(key);

	    var promise = new Promise$1(function (resolve, reject) {
	        var dbInfo;
	        self.ready().then(function () {
	            dbInfo = self._dbInfo;
	            if (toString.call(value) === '[object Blob]') {
	                return _checkBlobSupport(dbInfo.db).then(function (blobSupport) {
	                    if (blobSupport) {
	                        return value;
	                    }
	                    return _encodeBlob(value);
	                });
	            }
	            return value;
	        }).then(function (value) {
	            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
	                if (err) {
	                    return reject(err);
	                }

	                try {
	                    var store = transaction.objectStore(self._dbInfo.storeName);

	                    // The reason we don't _save_ null is because IE 10 does
	                    // not support saving the `null` type in IndexedDB. How
	                    // ironic, given the bug below!
	                    // See: https://github.com/mozilla/localForage/issues/161
	                    if (value === null) {
	                        value = undefined;
	                    }

	                    var req = store.put(value, key);

	                    transaction.oncomplete = function () {
	                        // Cast to undefined so the value passed to
	                        // callback/promise is the same as what one would get out
	                        // of `getItem()` later. This leads to some weirdness
	                        // (setItem('foo', undefined) will return `null`), but
	                        // it's not my fault localStorage is our baseline and that
	                        // it's weird.
	                        if (value === undefined) {
	                            value = null;
	                        }

	                        resolve(value);
	                    };
	                    transaction.onabort = transaction.onerror = function () {
	                        var err = req.error ? req.error : req.transaction.error;
	                        reject(err);
	                    };
	                } catch (e) {
	                    reject(e);
	                }
	            });
	        })["catch"](reject);
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	function removeItem(key, callback) {
	    var self = this;

	    key = normalizeKey(key);

	    var promise = new Promise$1(function (resolve, reject) {
	        self.ready().then(function () {
	            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
	                if (err) {
	                    return reject(err);
	                }

	                try {
	                    var store = transaction.objectStore(self._dbInfo.storeName);
	                    // We use a Grunt task to make this safe for IE and some
	                    // versions of Android (including those used by Cordova).
	                    // Normally IE won't like `.delete()` and will insist on
	                    // using `['delete']()`, but we have a build step that
	                    // fixes this for us now.
	                    var req = store["delete"](key);
	                    transaction.oncomplete = function () {
	                        resolve();
	                    };

	                    transaction.onerror = function () {
	                        reject(req.error);
	                    };

	                    // The request will be also be aborted if we've exceeded our storage
	                    // space.
	                    transaction.onabort = function () {
	                        var err = req.error ? req.error : req.transaction.error;
	                        reject(err);
	                    };
	                } catch (e) {
	                    reject(e);
	                }
	            });
	        })["catch"](reject);
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	function clear(callback) {
	    var self = this;

	    var promise = new Promise$1(function (resolve, reject) {
	        self.ready().then(function () {
	            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
	                if (err) {
	                    return reject(err);
	                }

	                try {
	                    var store = transaction.objectStore(self._dbInfo.storeName);
	                    var req = store.clear();

	                    transaction.oncomplete = function () {
	                        resolve();
	                    };

	                    transaction.onabort = transaction.onerror = function () {
	                        var err = req.error ? req.error : req.transaction.error;
	                        reject(err);
	                    };
	                } catch (e) {
	                    reject(e);
	                }
	            });
	        })["catch"](reject);
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	function length(callback) {
	    var self = this;

	    var promise = new Promise$1(function (resolve, reject) {
	        self.ready().then(function () {
	            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
	                if (err) {
	                    return reject(err);
	                }

	                try {
	                    var store = transaction.objectStore(self._dbInfo.storeName);
	                    var req = store.count();

	                    req.onsuccess = function () {
	                        resolve(req.result);
	                    };

	                    req.onerror = function () {
	                        reject(req.error);
	                    };
	                } catch (e) {
	                    reject(e);
	                }
	            });
	        })["catch"](reject);
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	function key(n, callback) {
	    var self = this;

	    var promise = new Promise$1(function (resolve, reject) {
	        if (n < 0) {
	            resolve(null);

	            return;
	        }

	        self.ready().then(function () {
	            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
	                if (err) {
	                    return reject(err);
	                }

	                try {
	                    var store = transaction.objectStore(self._dbInfo.storeName);
	                    var advanced = false;
	                    var req = store.openKeyCursor();

	                    req.onsuccess = function () {
	                        var cursor = req.result;
	                        if (!cursor) {
	                            // this means there weren't enough keys
	                            resolve(null);

	                            return;
	                        }

	                        if (n === 0) {
	                            // We have the first key, return it if that's what they
	                            // wanted.
	                            resolve(cursor.key);
	                        } else {
	                            if (!advanced) {
	                                // Otherwise, ask the cursor to skip ahead n
	                                // records.
	                                advanced = true;
	                                cursor.advance(n);
	                            } else {
	                                // When we get here, we've got the nth key.
	                                resolve(cursor.key);
	                            }
	                        }
	                    };

	                    req.onerror = function () {
	                        reject(req.error);
	                    };
	                } catch (e) {
	                    reject(e);
	                }
	            });
	        })["catch"](reject);
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	function keys(callback) {
	    var self = this;

	    var promise = new Promise$1(function (resolve, reject) {
	        self.ready().then(function () {
	            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
	                if (err) {
	                    return reject(err);
	                }

	                try {
	                    var store = transaction.objectStore(self._dbInfo.storeName);
	                    var req = store.openKeyCursor();
	                    var keys = [];

	                    req.onsuccess = function () {
	                        var cursor = req.result;

	                        if (!cursor) {
	                            resolve(keys);
	                            return;
	                        }

	                        keys.push(cursor.key);
	                        cursor["continue"]();
	                    };

	                    req.onerror = function () {
	                        reject(req.error);
	                    };
	                } catch (e) {
	                    reject(e);
	                }
	            });
	        })["catch"](reject);
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	function dropInstance(options, callback) {
	    callback = getCallback.apply(this, arguments);

	    var currentConfig = this.config();
	    options = typeof options !== 'function' && options || {};
	    if (!options.name) {
	        options.name = options.name || currentConfig.name;
	        options.storeName = options.storeName || currentConfig.storeName;
	    }

	    var self = this;
	    var promise;
	    if (!options.name) {
	        promise = Promise$1.reject('Invalid arguments');
	    } else {
	        var isCurrentDb = options.name === currentConfig.name && self._dbInfo.db;

	        var dbPromise = isCurrentDb ? Promise$1.resolve(self._dbInfo.db) : _getOriginalConnection(options).then(function (db) {
	            var dbContext = dbContexts[options.name];
	            var forages = dbContext.forages;
	            dbContext.db = db;
	            for (var i = 0; i < forages.length; i++) {
	                forages[i]._dbInfo.db = db;
	            }
	            return db;
	        });

	        if (!options.storeName) {
	            promise = dbPromise.then(function (db) {
	                _deferReadiness(options);

	                var dbContext = dbContexts[options.name];
	                var forages = dbContext.forages;

	                db.close();
	                for (var i = 0; i < forages.length; i++) {
	                    var forage = forages[i];
	                    forage._dbInfo.db = null;
	                }

	                var dropDBPromise = new Promise$1(function (resolve, reject) {
	                    var req = idb.deleteDatabase(options.name);

	                    req.onerror = function () {
	                        var db = req.result;
	                        if (db) {
	                            db.close();
	                        }
	                        reject(req.error);
	                    };

	                    req.onblocked = function () {
	                        // Closing all open connections in onversionchange handler should prevent this situation, but if
	                        // we do get here, it just means the request remains pending - eventually it will succeed or error
	                        console.warn('dropInstance blocked for database "' + options.name + '" until all open connections are closed');
	                    };

	                    req.onsuccess = function () {
	                        var db = req.result;
	                        if (db) {
	                            db.close();
	                        }
	                        resolve(db);
	                    };
	                });

	                return dropDBPromise.then(function (db) {
	                    dbContext.db = db;
	                    for (var i = 0; i < forages.length; i++) {
	                        var _forage = forages[i];
	                        _advanceReadiness(_forage._dbInfo);
	                    }
	                })["catch"](function (err) {
	                    (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function () {});
	                    throw err;
	                });
	            });
	        } else {
	            promise = dbPromise.then(function (db) {
	                if (!db.objectStoreNames.contains(options.storeName)) {
	                    return;
	                }

	                var newVersion = db.version + 1;

	                _deferReadiness(options);

	                var dbContext = dbContexts[options.name];
	                var forages = dbContext.forages;

	                db.close();
	                for (var i = 0; i < forages.length; i++) {
	                    var forage = forages[i];
	                    forage._dbInfo.db = null;
	                    forage._dbInfo.version = newVersion;
	                }

	                var dropObjectPromise = new Promise$1(function (resolve, reject) {
	                    var req = idb.open(options.name, newVersion);

	                    req.onerror = function (err) {
	                        var db = req.result;
	                        db.close();
	                        reject(err);
	                    };

	                    req.onupgradeneeded = function () {
	                        var db = req.result;
	                        db.deleteObjectStore(options.storeName);
	                    };

	                    req.onsuccess = function () {
	                        var db = req.result;
	                        db.close();
	                        resolve(db);
	                    };
	                });

	                return dropObjectPromise.then(function (db) {
	                    dbContext.db = db;
	                    for (var j = 0; j < forages.length; j++) {
	                        var _forage2 = forages[j];
	                        _forage2._dbInfo.db = db;
	                        _advanceReadiness(_forage2._dbInfo);
	                    }
	                })["catch"](function (err) {
	                    (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function () {});
	                    throw err;
	                });
	            });
	        }
	    }

	    executeCallback(promise, callback);
	    return promise;
	}

	var asyncStorage = {
	    _driver: 'asyncStorage',
	    _initStorage: _initStorage,
	    _support: isIndexedDBValid(),
	    iterate: iterate,
	    getItem: getItem,
	    setItem: setItem,
	    removeItem: removeItem,
	    clear: clear,
	    length: length,
	    key: key,
	    keys: keys,
	    dropInstance: dropInstance
	};

	function isWebSQLValid() {
	    return typeof openDatabase === 'function';
	}

	// Sadly, the best way to save binary data in WebSQL/localStorage is serializing
	// it to Base64, so this is how we store it to prevent very strange errors with less
	// verbose ways of binary <-> string data storage.
	var BASE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

	var BLOB_TYPE_PREFIX = '~~local_forage_type~';
	var BLOB_TYPE_PREFIX_REGEX = /^~~local_forage_type~([^~]+)~/;

	var SERIALIZED_MARKER = '__lfsc__:';
	var SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER.length;

	// OMG the serializations!
	var TYPE_ARRAYBUFFER = 'arbf';
	var TYPE_BLOB = 'blob';
	var TYPE_INT8ARRAY = 'si08';
	var TYPE_UINT8ARRAY = 'ui08';
	var TYPE_UINT8CLAMPEDARRAY = 'uic8';
	var TYPE_INT16ARRAY = 'si16';
	var TYPE_INT32ARRAY = 'si32';
	var TYPE_UINT16ARRAY = 'ur16';
	var TYPE_UINT32ARRAY = 'ui32';
	var TYPE_FLOAT32ARRAY = 'fl32';
	var TYPE_FLOAT64ARRAY = 'fl64';
	var TYPE_SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER_LENGTH + TYPE_ARRAYBUFFER.length;

	var toString$1 = Object.prototype.toString;

	function stringToBuffer(serializedString) {
	    // Fill the string into a ArrayBuffer.
	    var bufferLength = serializedString.length * 0.75;
	    var len = serializedString.length;
	    var i;
	    var p = 0;
	    var encoded1, encoded2, encoded3, encoded4;

	    if (serializedString[serializedString.length - 1] === '=') {
	        bufferLength--;
	        if (serializedString[serializedString.length - 2] === '=') {
	            bufferLength--;
	        }
	    }

	    var buffer = new ArrayBuffer(bufferLength);
	    var bytes = new Uint8Array(buffer);

	    for (i = 0; i < len; i += 4) {
	        encoded1 = BASE_CHARS.indexOf(serializedString[i]);
	        encoded2 = BASE_CHARS.indexOf(serializedString[i + 1]);
	        encoded3 = BASE_CHARS.indexOf(serializedString[i + 2]);
	        encoded4 = BASE_CHARS.indexOf(serializedString[i + 3]);

	        /*jslint bitwise: true */
	        bytes[p++] = encoded1 << 2 | encoded2 >> 4;
	        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
	        bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
	    }
	    return buffer;
	}

	// Converts a buffer to a string to store, serialized, in the backend
	// storage library.
	function bufferToString(buffer) {
	    // base64-arraybuffer
	    var bytes = new Uint8Array(buffer);
	    var base64String = '';
	    var i;

	    for (i = 0; i < bytes.length; i += 3) {
	        /*jslint bitwise: true */
	        base64String += BASE_CHARS[bytes[i] >> 2];
	        base64String += BASE_CHARS[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
	        base64String += BASE_CHARS[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
	        base64String += BASE_CHARS[bytes[i + 2] & 63];
	    }

	    if (bytes.length % 3 === 2) {
	        base64String = base64String.substring(0, base64String.length - 1) + '=';
	    } else if (bytes.length % 3 === 1) {
	        base64String = base64String.substring(0, base64String.length - 2) + '==';
	    }

	    return base64String;
	}

	// Serialize a value, afterwards executing a callback (which usually
	// instructs the `setItem()` callback/promise to be executed). This is how
	// we store binary data with localStorage.
	function serialize(value, callback) {
	    var valueType = '';
	    if (value) {
	        valueType = toString$1.call(value);
	    }

	    // Cannot use `value instanceof ArrayBuffer` or such here, as these
	    // checks fail when running the tests using casper.js...
	    //
	    // TODO: See why those tests fail and use a better solution.
	    if (value && (valueType === '[object ArrayBuffer]' || value.buffer && toString$1.call(value.buffer) === '[object ArrayBuffer]')) {
	        // Convert binary arrays to a string and prefix the string with
	        // a special marker.
	        var buffer;
	        var marker = SERIALIZED_MARKER;

	        if (value instanceof ArrayBuffer) {
	            buffer = value;
	            marker += TYPE_ARRAYBUFFER;
	        } else {
	            buffer = value.buffer;

	            if (valueType === '[object Int8Array]') {
	                marker += TYPE_INT8ARRAY;
	            } else if (valueType === '[object Uint8Array]') {
	                marker += TYPE_UINT8ARRAY;
	            } else if (valueType === '[object Uint8ClampedArray]') {
	                marker += TYPE_UINT8CLAMPEDARRAY;
	            } else if (valueType === '[object Int16Array]') {
	                marker += TYPE_INT16ARRAY;
	            } else if (valueType === '[object Uint16Array]') {
	                marker += TYPE_UINT16ARRAY;
	            } else if (valueType === '[object Int32Array]') {
	                marker += TYPE_INT32ARRAY;
	            } else if (valueType === '[object Uint32Array]') {
	                marker += TYPE_UINT32ARRAY;
	            } else if (valueType === '[object Float32Array]') {
	                marker += TYPE_FLOAT32ARRAY;
	            } else if (valueType === '[object Float64Array]') {
	                marker += TYPE_FLOAT64ARRAY;
	            } else {
	                callback(new Error('Failed to get type for BinaryArray'));
	            }
	        }

	        callback(marker + bufferToString(buffer));
	    } else if (valueType === '[object Blob]') {
	        // Conver the blob to a binaryArray and then to a string.
	        var fileReader = new FileReader();

	        fileReader.onload = function () {
	            // Backwards-compatible prefix for the blob type.
	            var str = BLOB_TYPE_PREFIX + value.type + '~' + bufferToString(this.result);

	            callback(SERIALIZED_MARKER + TYPE_BLOB + str);
	        };

	        fileReader.readAsArrayBuffer(value);
	    } else {
	        try {
	            callback(JSON.stringify(value));
	        } catch (e) {
	            console.error("Couldn't convert value into a JSON string: ", value);

	            callback(null, e);
	        }
	    }
	}

	// Deserialize data we've inserted into a value column/field. We place
	// special markers into our strings to mark them as encoded; this isn't
	// as nice as a meta field, but it's the only sane thing we can do whilst
	// keeping localStorage support intact.
	//
	// Oftentimes this will just deserialize JSON content, but if we have a
	// special marker (SERIALIZED_MARKER, defined above), we will extract
	// some kind of arraybuffer/binary data/typed array out of the string.
	function deserialize(value) {
	    // If we haven't marked this string as being specially serialized (i.e.
	    // something other than serialized JSON), we can just return it and be
	    // done with it.
	    if (value.substring(0, SERIALIZED_MARKER_LENGTH) !== SERIALIZED_MARKER) {
	        return JSON.parse(value);
	    }

	    // The following code deals with deserializing some kind of Blob or
	    // TypedArray. First we separate out the type of data we're dealing
	    // with from the data itself.
	    var serializedString = value.substring(TYPE_SERIALIZED_MARKER_LENGTH);
	    var type = value.substring(SERIALIZED_MARKER_LENGTH, TYPE_SERIALIZED_MARKER_LENGTH);

	    var blobType;
	    // Backwards-compatible blob type serialization strategy.
	    // DBs created with older versions of localForage will simply not have the blob type.
	    if (type === TYPE_BLOB && BLOB_TYPE_PREFIX_REGEX.test(serializedString)) {
	        var matcher = serializedString.match(BLOB_TYPE_PREFIX_REGEX);
	        blobType = matcher[1];
	        serializedString = serializedString.substring(matcher[0].length);
	    }
	    var buffer = stringToBuffer(serializedString);

	    // Return the right type based on the code/type set during
	    // serialization.
	    switch (type) {
	        case TYPE_ARRAYBUFFER:
	            return buffer;
	        case TYPE_BLOB:
	            return createBlob([buffer], { type: blobType });
	        case TYPE_INT8ARRAY:
	            return new Int8Array(buffer);
	        case TYPE_UINT8ARRAY:
	            return new Uint8Array(buffer);
	        case TYPE_UINT8CLAMPEDARRAY:
	            return new Uint8ClampedArray(buffer);
	        case TYPE_INT16ARRAY:
	            return new Int16Array(buffer);
	        case TYPE_UINT16ARRAY:
	            return new Uint16Array(buffer);
	        case TYPE_INT32ARRAY:
	            return new Int32Array(buffer);
	        case TYPE_UINT32ARRAY:
	            return new Uint32Array(buffer);
	        case TYPE_FLOAT32ARRAY:
	            return new Float32Array(buffer);
	        case TYPE_FLOAT64ARRAY:
	            return new Float64Array(buffer);
	        default:
	            throw new Error('Unkown type: ' + type);
	    }
	}

	var localforageSerializer = {
	    serialize: serialize,
	    deserialize: deserialize,
	    stringToBuffer: stringToBuffer,
	    bufferToString: bufferToString
	};

	/*
	 * Includes code from:
	 *
	 * base64-arraybuffer
	 * https://github.com/niklasvh/base64-arraybuffer
	 *
	 * Copyright (c) 2012 Niklas von Hertzen
	 * Licensed under the MIT license.
	 */

	function createDbTable(t, dbInfo, callback, errorCallback) {
	    t.executeSql('CREATE TABLE IF NOT EXISTS ' + dbInfo.storeName + ' ' + '(id INTEGER PRIMARY KEY, key unique, value)', [], callback, errorCallback);
	}

	// Open the WebSQL database (automatically creates one if one didn't
	// previously exist), using any options set in the config.
	function _initStorage$1(options) {
	    var self = this;
	    var dbInfo = {
	        db: null
	    };

	    if (options) {
	        for (var i in options) {
	            dbInfo[i] = typeof options[i] !== 'string' ? options[i].toString() : options[i];
	        }
	    }

	    var dbInfoPromise = new Promise$1(function (resolve, reject) {
	        // Open the database; the openDatabase API will automatically
	        // create it for us if it doesn't exist.
	        try {
	            dbInfo.db = openDatabase(dbInfo.name, String(dbInfo.version), dbInfo.description, dbInfo.size);
	        } catch (e) {
	            return reject(e);
	        }

	        // Create our key/value table if it doesn't exist.
	        dbInfo.db.transaction(function (t) {
	            createDbTable(t, dbInfo, function () {
	                self._dbInfo = dbInfo;
	                resolve();
	            }, function (t, error) {
	                reject(error);
	            });
	        }, reject);
	    });

	    dbInfo.serializer = localforageSerializer;
	    return dbInfoPromise;
	}

	function tryExecuteSql(t, dbInfo, sqlStatement, args, callback, errorCallback) {
	    t.executeSql(sqlStatement, args, callback, function (t, error) {
	        if (error.code === error.SYNTAX_ERR) {
	            t.executeSql('SELECT name FROM sqlite_master ' + "WHERE type='table' AND name = ?", [dbInfo.storeName], function (t, results) {
	                if (!results.rows.length) {
	                    // if the table is missing (was deleted)
	                    // re-create it table and retry
	                    createDbTable(t, dbInfo, function () {
	                        t.executeSql(sqlStatement, args, callback, errorCallback);
	                    }, errorCallback);
	                } else {
	                    errorCallback(t, error);
	                }
	            }, errorCallback);
	        } else {
	            errorCallback(t, error);
	        }
	    }, errorCallback);
	}

	function getItem$1(key, callback) {
	    var self = this;

	    key = normalizeKey(key);

	    var promise = new Promise$1(function (resolve, reject) {
	        self.ready().then(function () {
	            var dbInfo = self._dbInfo;
	            dbInfo.db.transaction(function (t) {
	                tryExecuteSql(t, dbInfo, 'SELECT * FROM ' + dbInfo.storeName + ' WHERE key = ? LIMIT 1', [key], function (t, results) {
	                    var result = results.rows.length ? results.rows.item(0).value : null;

	                    // Check to see if this is serialized content we need to
	                    // unpack.
	                    if (result) {
	                        result = dbInfo.serializer.deserialize(result);
	                    }

	                    resolve(result);
	                }, function (t, error) {
	                    reject(error);
	                });
	            });
	        })["catch"](reject);
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	function iterate$1(iterator, callback) {
	    var self = this;

	    var promise = new Promise$1(function (resolve, reject) {
	        self.ready().then(function () {
	            var dbInfo = self._dbInfo;

	            dbInfo.db.transaction(function (t) {
	                tryExecuteSql(t, dbInfo, 'SELECT * FROM ' + dbInfo.storeName, [], function (t, results) {
	                    var rows = results.rows;
	                    var length = rows.length;

	                    for (var i = 0; i < length; i++) {
	                        var item = rows.item(i);
	                        var result = item.value;

	                        // Check to see if this is serialized content
	                        // we need to unpack.
	                        if (result) {
	                            result = dbInfo.serializer.deserialize(result);
	                        }

	                        result = iterator(result, item.key, i + 1);

	                        // void(0) prevents problems with redefinition
	                        // of `undefined`.
	                        if (result !== void 0) {
	                            resolve(result);
	                            return;
	                        }
	                    }

	                    resolve();
	                }, function (t, error) {
	                    reject(error);
	                });
	            });
	        })["catch"](reject);
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	function _setItem(key, value, callback, retriesLeft) {
	    var self = this;

	    key = normalizeKey(key);

	    var promise = new Promise$1(function (resolve, reject) {
	        self.ready().then(function () {
	            // The localStorage API doesn't return undefined values in an
	            // "expected" way, so undefined is always cast to null in all
	            // drivers. See: https://github.com/mozilla/localForage/pull/42
	            if (value === undefined) {
	                value = null;
	            }

	            // Save the original value to pass to the callback.
	            var originalValue = value;

	            var dbInfo = self._dbInfo;
	            dbInfo.serializer.serialize(value, function (value, error) {
	                if (error) {
	                    reject(error);
	                } else {
	                    dbInfo.db.transaction(function (t) {
	                        tryExecuteSql(t, dbInfo, 'INSERT OR REPLACE INTO ' + dbInfo.storeName + ' ' + '(key, value) VALUES (?, ?)', [key, value], function () {
	                            resolve(originalValue);
	                        }, function (t, error) {
	                            reject(error);
	                        });
	                    }, function (sqlError) {
	                        // The transaction failed; check
	                        // to see if it's a quota error.
	                        if (sqlError.code === sqlError.QUOTA_ERR) {
	                            // We reject the callback outright for now, but
	                            // it's worth trying to re-run the transaction.
	                            // Even if the user accepts the prompt to use
	                            // more storage on Safari, this error will
	                            // be called.
	                            //
	                            // Try to re-run the transaction.
	                            if (retriesLeft > 0) {
	                                resolve(_setItem.apply(self, [key, originalValue, callback, retriesLeft - 1]));
	                                return;
	                            }
	                            reject(sqlError);
	                        }
	                    });
	                }
	            });
	        })["catch"](reject);
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	function setItem$1(key, value, callback) {
	    return _setItem.apply(this, [key, value, callback, 1]);
	}

	function removeItem$1(key, callback) {
	    var self = this;

	    key = normalizeKey(key);

	    var promise = new Promise$1(function (resolve, reject) {
	        self.ready().then(function () {
	            var dbInfo = self._dbInfo;
	            dbInfo.db.transaction(function (t) {
	                tryExecuteSql(t, dbInfo, 'DELETE FROM ' + dbInfo.storeName + ' WHERE key = ?', [key], function () {
	                    resolve();
	                }, function (t, error) {
	                    reject(error);
	                });
	            });
	        })["catch"](reject);
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	// Deletes every item in the table.
	// TODO: Find out if this resets the AUTO_INCREMENT number.
	function clear$1(callback) {
	    var self = this;

	    var promise = new Promise$1(function (resolve, reject) {
	        self.ready().then(function () {
	            var dbInfo = self._dbInfo;
	            dbInfo.db.transaction(function (t) {
	                tryExecuteSql(t, dbInfo, 'DELETE FROM ' + dbInfo.storeName, [], function () {
	                    resolve();
	                }, function (t, error) {
	                    reject(error);
	                });
	            });
	        })["catch"](reject);
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	// Does a simple `COUNT(key)` to get the number of items stored in
	// localForage.
	function length$1(callback) {
	    var self = this;

	    var promise = new Promise$1(function (resolve, reject) {
	        self.ready().then(function () {
	            var dbInfo = self._dbInfo;
	            dbInfo.db.transaction(function (t) {
	                // Ahhh, SQL makes this one soooooo easy.
	                tryExecuteSql(t, dbInfo, 'SELECT COUNT(key) as c FROM ' + dbInfo.storeName, [], function (t, results) {
	                    var result = results.rows.item(0).c;
	                    resolve(result);
	                }, function (t, error) {
	                    reject(error);
	                });
	            });
	        })["catch"](reject);
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	// Return the key located at key index X; essentially gets the key from a
	// `WHERE id = ?`. This is the most efficient way I can think to implement
	// this rarely-used (in my experience) part of the API, but it can seem
	// inconsistent, because we do `INSERT OR REPLACE INTO` on `setItem()`, so
	// the ID of each key will change every time it's updated. Perhaps a stored
	// procedure for the `setItem()` SQL would solve this problem?
	// TODO: Don't change ID on `setItem()`.
	function key$1(n, callback) {
	    var self = this;

	    var promise = new Promise$1(function (resolve, reject) {
	        self.ready().then(function () {
	            var dbInfo = self._dbInfo;
	            dbInfo.db.transaction(function (t) {
	                tryExecuteSql(t, dbInfo, 'SELECT key FROM ' + dbInfo.storeName + ' WHERE id = ? LIMIT 1', [n + 1], function (t, results) {
	                    var result = results.rows.length ? results.rows.item(0).key : null;
	                    resolve(result);
	                }, function (t, error) {
	                    reject(error);
	                });
	            });
	        })["catch"](reject);
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	function keys$1(callback) {
	    var self = this;

	    var promise = new Promise$1(function (resolve, reject) {
	        self.ready().then(function () {
	            var dbInfo = self._dbInfo;
	            dbInfo.db.transaction(function (t) {
	                tryExecuteSql(t, dbInfo, 'SELECT key FROM ' + dbInfo.storeName, [], function (t, results) {
	                    var keys = [];

	                    for (var i = 0; i < results.rows.length; i++) {
	                        keys.push(results.rows.item(i).key);
	                    }

	                    resolve(keys);
	                }, function (t, error) {
	                    reject(error);
	                });
	            });
	        })["catch"](reject);
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	// https://www.w3.org/TR/webdatabase/#databases
	// > There is no way to enumerate or delete the databases available for an origin from this API.
	function getAllStoreNames(db) {
	    return new Promise$1(function (resolve, reject) {
	        db.transaction(function (t) {
	            t.executeSql('SELECT name FROM sqlite_master ' + "WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function (t, results) {
	                var storeNames = [];

	                for (var i = 0; i < results.rows.length; i++) {
	                    storeNames.push(results.rows.item(i).name);
	                }

	                resolve({
	                    db: db,
	                    storeNames: storeNames
	                });
	            }, function (t, error) {
	                reject(error);
	            });
	        }, function (sqlError) {
	            reject(sqlError);
	        });
	    });
	}

	function dropInstance$1(options, callback) {
	    callback = getCallback.apply(this, arguments);

	    var currentConfig = this.config();
	    options = typeof options !== 'function' && options || {};
	    if (!options.name) {
	        options.name = options.name || currentConfig.name;
	        options.storeName = options.storeName || currentConfig.storeName;
	    }

	    var self = this;
	    var promise;
	    if (!options.name) {
	        promise = Promise$1.reject('Invalid arguments');
	    } else {
	        promise = new Promise$1(function (resolve) {
	            var db;
	            if (options.name === currentConfig.name) {
	                // use the db reference of the current instance
	                db = self._dbInfo.db;
	            } else {
	                db = openDatabase(options.name, '', '', 0);
	            }

	            if (!options.storeName) {
	                // drop all database tables
	                resolve(getAllStoreNames(db));
	            } else {
	                resolve({
	                    db: db,
	                    storeNames: [options.storeName]
	                });
	            }
	        }).then(function (operationInfo) {
	            return new Promise$1(function (resolve, reject) {
	                operationInfo.db.transaction(function (t) {
	                    function dropTable(storeName) {
	                        return new Promise$1(function (resolve, reject) {
	                            t.executeSql('DROP TABLE IF EXISTS ' + storeName, [], function () {
	                                resolve();
	                            }, function (t, error) {
	                                reject(error);
	                            });
	                        });
	                    }

	                    var operations = [];
	                    for (var i = 0, len = operationInfo.storeNames.length; i < len; i++) {
	                        operations.push(dropTable(operationInfo.storeNames[i]));
	                    }

	                    Promise$1.all(operations).then(function () {
	                        resolve();
	                    })["catch"](function (e) {
	                        reject(e);
	                    });
	                }, function (sqlError) {
	                    reject(sqlError);
	                });
	            });
	        });
	    }

	    executeCallback(promise, callback);
	    return promise;
	}

	var webSQLStorage = {
	    _driver: 'webSQLStorage',
	    _initStorage: _initStorage$1,
	    _support: isWebSQLValid(),
	    iterate: iterate$1,
	    getItem: getItem$1,
	    setItem: setItem$1,
	    removeItem: removeItem$1,
	    clear: clear$1,
	    length: length$1,
	    key: key$1,
	    keys: keys$1,
	    dropInstance: dropInstance$1
	};

	function isLocalStorageValid() {
	    try {
	        return typeof localStorage !== 'undefined' && 'setItem' in localStorage &&
	        // in IE8 typeof localStorage.setItem === 'object'
	        !!localStorage.setItem;
	    } catch (e) {
	        return false;
	    }
	}

	function _getKeyPrefix(options, defaultConfig) {
	    var keyPrefix = options.name + '/';

	    if (options.storeName !== defaultConfig.storeName) {
	        keyPrefix += options.storeName + '/';
	    }
	    return keyPrefix;
	}

	// Check if localStorage throws when saving an item
	function checkIfLocalStorageThrows() {
	    var localStorageTestKey = '_localforage_support_test';

	    try {
	        localStorage.setItem(localStorageTestKey, true);
	        localStorage.removeItem(localStorageTestKey);

	        return false;
	    } catch (e) {
	        return true;
	    }
	}

	// Check if localStorage is usable and allows to save an item
	// This method checks if localStorage is usable in Safari Private Browsing
	// mode, or in any other case where the available quota for localStorage
	// is 0 and there wasn't any saved items yet.
	function _isLocalStorageUsable() {
	    return !checkIfLocalStorageThrows() || localStorage.length > 0;
	}

	// Config the localStorage backend, using options set in the config.
	function _initStorage$2(options) {
	    var self = this;
	    var dbInfo = {};
	    if (options) {
	        for (var i in options) {
	            dbInfo[i] = options[i];
	        }
	    }

	    dbInfo.keyPrefix = _getKeyPrefix(options, self._defaultConfig);

	    if (!_isLocalStorageUsable()) {
	        return Promise$1.reject();
	    }

	    self._dbInfo = dbInfo;
	    dbInfo.serializer = localforageSerializer;

	    return Promise$1.resolve();
	}

	// Remove all keys from the datastore, effectively destroying all data in
	// the app's key/value store!
	function clear$2(callback) {
	    var self = this;
	    var promise = self.ready().then(function () {
	        var keyPrefix = self._dbInfo.keyPrefix;

	        for (var i = localStorage.length - 1; i >= 0; i--) {
	            var key = localStorage.key(i);

	            if (key.indexOf(keyPrefix) === 0) {
	                localStorage.removeItem(key);
	            }
	        }
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	// Retrieve an item from the store. Unlike the original async_storage
	// library in Gaia, we don't modify return values at all. If a key's value
	// is `undefined`, we pass that value to the callback function.
	function getItem$2(key, callback) {
	    var self = this;

	    key = normalizeKey(key);

	    var promise = self.ready().then(function () {
	        var dbInfo = self._dbInfo;
	        var result = localStorage.getItem(dbInfo.keyPrefix + key);

	        // If a result was found, parse it from the serialized
	        // string into a JS object. If result isn't truthy, the key
	        // is likely undefined and we'll pass it straight to the
	        // callback.
	        if (result) {
	            result = dbInfo.serializer.deserialize(result);
	        }

	        return result;
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	// Iterate over all items in the store.
	function iterate$2(iterator, callback) {
	    var self = this;

	    var promise = self.ready().then(function () {
	        var dbInfo = self._dbInfo;
	        var keyPrefix = dbInfo.keyPrefix;
	        var keyPrefixLength = keyPrefix.length;
	        var length = localStorage.length;

	        // We use a dedicated iterator instead of the `i` variable below
	        // so other keys we fetch in localStorage aren't counted in
	        // the `iterationNumber` argument passed to the `iterate()`
	        // callback.
	        //
	        // See: github.com/mozilla/localForage/pull/435#discussion_r38061530
	        var iterationNumber = 1;

	        for (var i = 0; i < length; i++) {
	            var key = localStorage.key(i);
	            if (key.indexOf(keyPrefix) !== 0) {
	                continue;
	            }
	            var value = localStorage.getItem(key);

	            // If a result was found, parse it from the serialized
	            // string into a JS object. If result isn't truthy, the
	            // key is likely undefined and we'll pass it straight
	            // to the iterator.
	            if (value) {
	                value = dbInfo.serializer.deserialize(value);
	            }

	            value = iterator(value, key.substring(keyPrefixLength), iterationNumber++);

	            if (value !== void 0) {
	                return value;
	            }
	        }
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	// Same as localStorage's key() method, except takes a callback.
	function key$2(n, callback) {
	    var self = this;
	    var promise = self.ready().then(function () {
	        var dbInfo = self._dbInfo;
	        var result;
	        try {
	            result = localStorage.key(n);
	        } catch (error) {
	            result = null;
	        }

	        // Remove the prefix from the key, if a key is found.
	        if (result) {
	            result = result.substring(dbInfo.keyPrefix.length);
	        }

	        return result;
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	function keys$2(callback) {
	    var self = this;
	    var promise = self.ready().then(function () {
	        var dbInfo = self._dbInfo;
	        var length = localStorage.length;
	        var keys = [];

	        for (var i = 0; i < length; i++) {
	            var itemKey = localStorage.key(i);
	            if (itemKey.indexOf(dbInfo.keyPrefix) === 0) {
	                keys.push(itemKey.substring(dbInfo.keyPrefix.length));
	            }
	        }

	        return keys;
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	// Supply the number of keys in the datastore to the callback function.
	function length$2(callback) {
	    var self = this;
	    var promise = self.keys().then(function (keys) {
	        return keys.length;
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	// Remove an item from the store, nice and simple.
	function removeItem$2(key, callback) {
	    var self = this;

	    key = normalizeKey(key);

	    var promise = self.ready().then(function () {
	        var dbInfo = self._dbInfo;
	        localStorage.removeItem(dbInfo.keyPrefix + key);
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	// Set a key's value and run an optional callback once the value is set.
	// Unlike Gaia's implementation, the callback function is passed the value,
	// in case you want to operate on that value only after you're sure it
	// saved, or something like that.
	function setItem$2(key, value, callback) {
	    var self = this;

	    key = normalizeKey(key);

	    var promise = self.ready().then(function () {
	        // Convert undefined values to null.
	        // https://github.com/mozilla/localForage/pull/42
	        if (value === undefined) {
	            value = null;
	        }

	        // Save the original value to pass to the callback.
	        var originalValue = value;

	        return new Promise$1(function (resolve, reject) {
	            var dbInfo = self._dbInfo;
	            dbInfo.serializer.serialize(value, function (value, error) {
	                if (error) {
	                    reject(error);
	                } else {
	                    try {
	                        localStorage.setItem(dbInfo.keyPrefix + key, value);
	                        resolve(originalValue);
	                    } catch (e) {
	                        // localStorage capacity exceeded.
	                        // TODO: Make this a specific error/event.
	                        if (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
	                            reject(e);
	                        }
	                        reject(e);
	                    }
	                }
	            });
	        });
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	function dropInstance$2(options, callback) {
	    callback = getCallback.apply(this, arguments);

	    options = typeof options !== 'function' && options || {};
	    if (!options.name) {
	        var currentConfig = this.config();
	        options.name = options.name || currentConfig.name;
	        options.storeName = options.storeName || currentConfig.storeName;
	    }

	    var self = this;
	    var promise;
	    if (!options.name) {
	        promise = Promise$1.reject('Invalid arguments');
	    } else {
	        promise = new Promise$1(function (resolve) {
	            if (!options.storeName) {
	                resolve(options.name + '/');
	            } else {
	                resolve(_getKeyPrefix(options, self._defaultConfig));
	            }
	        }).then(function (keyPrefix) {
	            for (var i = localStorage.length - 1; i >= 0; i--) {
	                var key = localStorage.key(i);

	                if (key.indexOf(keyPrefix) === 0) {
	                    localStorage.removeItem(key);
	                }
	            }
	        });
	    }

	    executeCallback(promise, callback);
	    return promise;
	}

	var localStorageWrapper = {
	    _driver: 'localStorageWrapper',
	    _initStorage: _initStorage$2,
	    _support: isLocalStorageValid(),
	    iterate: iterate$2,
	    getItem: getItem$2,
	    setItem: setItem$2,
	    removeItem: removeItem$2,
	    clear: clear$2,
	    length: length$2,
	    key: key$2,
	    keys: keys$2,
	    dropInstance: dropInstance$2
	};

	var sameValue = function sameValue(x, y) {
	    return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
	};

	var includes = function includes(array, searchElement) {
	    var len = array.length;
	    var i = 0;
	    while (i < len) {
	        if (sameValue(array[i], searchElement)) {
	            return true;
	        }
	        i++;
	    }

	    return false;
	};

	var isArray = Array.isArray || function (arg) {
	    return Object.prototype.toString.call(arg) === '[object Array]';
	};

	// Drivers are stored here when `defineDriver()` is called.
	// They are shared across all instances of localForage.
	var DefinedDrivers = {};

	var DriverSupport = {};

	var DefaultDrivers = {
	    INDEXEDDB: asyncStorage,
	    WEBSQL: webSQLStorage,
	    LOCALSTORAGE: localStorageWrapper
	};

	var DefaultDriverOrder = [DefaultDrivers.INDEXEDDB._driver, DefaultDrivers.WEBSQL._driver, DefaultDrivers.LOCALSTORAGE._driver];

	var OptionalDriverMethods = ['dropInstance'];

	var LibraryMethods = ['clear', 'getItem', 'iterate', 'key', 'keys', 'length', 'removeItem', 'setItem'].concat(OptionalDriverMethods);

	var DefaultConfig = {
	    description: '',
	    driver: DefaultDriverOrder.slice(),
	    name: 'localforage',
	    // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
	    // we can use without a prompt.
	    size: 4980736,
	    storeName: 'keyvaluepairs',
	    version: 1.0
	};

	function callWhenReady(localForageInstance, libraryMethod) {
	    localForageInstance[libraryMethod] = function () {
	        var _args = arguments;
	        return localForageInstance.ready().then(function () {
	            return localForageInstance[libraryMethod].apply(localForageInstance, _args);
	        });
	    };
	}

	function extend() {
	    for (var i = 1; i < arguments.length; i++) {
	        var arg = arguments[i];

	        if (arg) {
	            for (var _key in arg) {
	                if (arg.hasOwnProperty(_key)) {
	                    if (isArray(arg[_key])) {
	                        arguments[0][_key] = arg[_key].slice();
	                    } else {
	                        arguments[0][_key] = arg[_key];
	                    }
	                }
	            }
	        }
	    }

	    return arguments[0];
	}

	var LocalForage = function () {
	    function LocalForage(options) {
	        _classCallCheck(this, LocalForage);

	        for (var driverTypeKey in DefaultDrivers) {
	            if (DefaultDrivers.hasOwnProperty(driverTypeKey)) {
	                var driver = DefaultDrivers[driverTypeKey];
	                var driverName = driver._driver;
	                this[driverTypeKey] = driverName;

	                if (!DefinedDrivers[driverName]) {
	                    // we don't need to wait for the promise,
	                    // since the default drivers can be defined
	                    // in a blocking manner
	                    this.defineDriver(driver);
	                }
	            }
	        }

	        this._defaultConfig = extend({}, DefaultConfig);
	        this._config = extend({}, this._defaultConfig, options);
	        this._driverSet = null;
	        this._initDriver = null;
	        this._ready = false;
	        this._dbInfo = null;

	        this._wrapLibraryMethodsWithReady();
	        this.setDriver(this._config.driver)["catch"](function () {});
	    }

	    // Set any config values for localForage; can be called anytime before
	    // the first API call (e.g. `getItem`, `setItem`).
	    // We loop through options so we don't overwrite existing config
	    // values.


	    LocalForage.prototype.config = function config(options) {
	        // If the options argument is an object, we use it to set values.
	        // Otherwise, we return either a specified config value or all
	        // config values.
	        if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
	            // If localforage is ready and fully initialized, we can't set
	            // any new configuration values. Instead, we return an error.
	            if (this._ready) {
	                return new Error("Can't call config() after localforage " + 'has been used.');
	            }

	            for (var i in options) {
	                if (i === 'storeName') {
	                    options[i] = options[i].replace(/\W/g, '_');
	                }

	                if (i === 'version' && typeof options[i] !== 'number') {
	                    return new Error('Database version must be a number.');
	                }

	                this._config[i] = options[i];
	            }

	            // after all config options are set and
	            // the driver option is used, try setting it
	            if ('driver' in options && options.driver) {
	                return this.setDriver(this._config.driver);
	            }

	            return true;
	        } else if (typeof options === 'string') {
	            return this._config[options];
	        } else {
	            return this._config;
	        }
	    };

	    // Used to define a custom driver, shared across all instances of
	    // localForage.


	    LocalForage.prototype.defineDriver = function defineDriver(driverObject, callback, errorCallback) {
	        var promise = new Promise$1(function (resolve, reject) {
	            try {
	                var driverName = driverObject._driver;
	                var complianceError = new Error('Custom driver not compliant; see ' + 'https://mozilla.github.io/localForage/#definedriver');

	                // A driver name should be defined and not overlap with the
	                // library-defined, default drivers.
	                if (!driverObject._driver) {
	                    reject(complianceError);
	                    return;
	                }

	                var driverMethods = LibraryMethods.concat('_initStorage');
	                for (var i = 0, len = driverMethods.length; i < len; i++) {
	                    var driverMethodName = driverMethods[i];

	                    // when the property is there,
	                    // it should be a method even when optional
	                    var isRequired = !includes(OptionalDriverMethods, driverMethodName);
	                    if ((isRequired || driverObject[driverMethodName]) && typeof driverObject[driverMethodName] !== 'function') {
	                        reject(complianceError);
	                        return;
	                    }
	                }

	                var configureMissingMethods = function configureMissingMethods() {
	                    var methodNotImplementedFactory = function methodNotImplementedFactory(methodName) {
	                        return function () {
	                            var error = new Error('Method ' + methodName + ' is not implemented by the current driver');
	                            var promise = Promise$1.reject(error);
	                            executeCallback(promise, arguments[arguments.length - 1]);
	                            return promise;
	                        };
	                    };

	                    for (var _i = 0, _len = OptionalDriverMethods.length; _i < _len; _i++) {
	                        var optionalDriverMethod = OptionalDriverMethods[_i];
	                        if (!driverObject[optionalDriverMethod]) {
	                            driverObject[optionalDriverMethod] = methodNotImplementedFactory(optionalDriverMethod);
	                        }
	                    }
	                };

	                configureMissingMethods();

	                var setDriverSupport = function setDriverSupport(support) {
	                    if (DefinedDrivers[driverName]) {
	                        console.info('Redefining LocalForage driver: ' + driverName);
	                    }
	                    DefinedDrivers[driverName] = driverObject;
	                    DriverSupport[driverName] = support;
	                    // don't use a then, so that we can define
	                    // drivers that have simple _support methods
	                    // in a blocking manner
	                    resolve();
	                };

	                if ('_support' in driverObject) {
	                    if (driverObject._support && typeof driverObject._support === 'function') {
	                        driverObject._support().then(setDriverSupport, reject);
	                    } else {
	                        setDriverSupport(!!driverObject._support);
	                    }
	                } else {
	                    setDriverSupport(true);
	                }
	            } catch (e) {
	                reject(e);
	            }
	        });

	        executeTwoCallbacks(promise, callback, errorCallback);
	        return promise;
	    };

	    LocalForage.prototype.driver = function driver() {
	        return this._driver || null;
	    };

	    LocalForage.prototype.getDriver = function getDriver(driverName, callback, errorCallback) {
	        var getDriverPromise = DefinedDrivers[driverName] ? Promise$1.resolve(DefinedDrivers[driverName]) : Promise$1.reject(new Error('Driver not found.'));

	        executeTwoCallbacks(getDriverPromise, callback, errorCallback);
	        return getDriverPromise;
	    };

	    LocalForage.prototype.getSerializer = function getSerializer(callback) {
	        var serializerPromise = Promise$1.resolve(localforageSerializer);
	        executeTwoCallbacks(serializerPromise, callback);
	        return serializerPromise;
	    };

	    LocalForage.prototype.ready = function ready(callback) {
	        var self = this;

	        var promise = self._driverSet.then(function () {
	            if (self._ready === null) {
	                self._ready = self._initDriver();
	            }

	            return self._ready;
	        });

	        executeTwoCallbacks(promise, callback, callback);
	        return promise;
	    };

	    LocalForage.prototype.setDriver = function setDriver(drivers, callback, errorCallback) {
	        var self = this;

	        if (!isArray(drivers)) {
	            drivers = [drivers];
	        }

	        var supportedDrivers = this._getSupportedDrivers(drivers);

	        function setDriverToConfig() {
	            self._config.driver = self.driver();
	        }

	        function extendSelfWithDriver(driver) {
	            self._extend(driver);
	            setDriverToConfig();

	            self._ready = self._initStorage(self._config);
	            return self._ready;
	        }

	        function initDriver(supportedDrivers) {
	            return function () {
	                var currentDriverIndex = 0;

	                function driverPromiseLoop() {
	                    while (currentDriverIndex < supportedDrivers.length) {
	                        var driverName = supportedDrivers[currentDriverIndex];
	                        currentDriverIndex++;

	                        self._dbInfo = null;
	                        self._ready = null;

	                        return self.getDriver(driverName).then(extendSelfWithDriver)["catch"](driverPromiseLoop);
	                    }

	                    setDriverToConfig();
	                    var error = new Error('No available storage method found.');
	                    self._driverSet = Promise$1.reject(error);
	                    return self._driverSet;
	                }

	                return driverPromiseLoop();
	            };
	        }

	        // There might be a driver initialization in progress
	        // so wait for it to finish in order to avoid a possible
	        // race condition to set _dbInfo
	        var oldDriverSetDone = this._driverSet !== null ? this._driverSet["catch"](function () {
	            return Promise$1.resolve();
	        }) : Promise$1.resolve();

	        this._driverSet = oldDriverSetDone.then(function () {
	            var driverName = supportedDrivers[0];
	            self._dbInfo = null;
	            self._ready = null;

	            return self.getDriver(driverName).then(function (driver) {
	                self._driver = driver._driver;
	                setDriverToConfig();
	                self._wrapLibraryMethodsWithReady();
	                self._initDriver = initDriver(supportedDrivers);
	            });
	        })["catch"](function () {
	            setDriverToConfig();
	            var error = new Error('No available storage method found.');
	            self._driverSet = Promise$1.reject(error);
	            return self._driverSet;
	        });

	        executeTwoCallbacks(this._driverSet, callback, errorCallback);
	        return this._driverSet;
	    };

	    LocalForage.prototype.supports = function supports(driverName) {
	        return !!DriverSupport[driverName];
	    };

	    LocalForage.prototype._extend = function _extend(libraryMethodsAndProperties) {
	        extend(this, libraryMethodsAndProperties);
	    };

	    LocalForage.prototype._getSupportedDrivers = function _getSupportedDrivers(drivers) {
	        var supportedDrivers = [];
	        for (var i = 0, len = drivers.length; i < len; i++) {
	            var driverName = drivers[i];
	            if (this.supports(driverName)) {
	                supportedDrivers.push(driverName);
	            }
	        }
	        return supportedDrivers;
	    };

	    LocalForage.prototype._wrapLibraryMethodsWithReady = function _wrapLibraryMethodsWithReady() {
	        // Add a stub for each driver API method that delays the call to the
	        // corresponding driver method until localForage is ready. These stubs
	        // will be replaced by the driver methods as soon as the driver is
	        // loaded, so there is no performance impact.
	        for (var i = 0, len = LibraryMethods.length; i < len; i++) {
	            callWhenReady(this, LibraryMethods[i]);
	        }
	    };

	    LocalForage.prototype.createInstance = function createInstance(options) {
	        return new LocalForage(options);
	    };

	    return LocalForage;
	}();

	// The actual localForage object that we expose as a module or via a
	// global. It's extended by pulling in one of our other libraries.


	var localforage_js = new LocalForage();

	module.exports = localforage_js;

	},{"3":3}]},{},[4])(4)
	}); 
} (localforage$1));

var localforageExports = localforage$1.exports;
var localforage = /*@__PURE__*/getDefaultExportFromCjs(localforageExports);

const STORAGE_KEY = 'game-theme-music-cache';
localforage.config({
    name: STORAGE_KEY
});
async function updateCache(appId, newData) {
    const oldCache = (await localforage.getItem(appId.toString()));
    return await localforage.setItem(appId.toString(), {
        ...(oldCache || {}),
        ...newData
    });
}
async function getFullCache() {
    const fullCache = {};
    await localforage.iterate((value, key) => {
        fullCache[key] = value;
    });
    return fullCache;
}
async function exportCache() {
    await call('export_cache', await getFullCache());
}
async function importCache(name) {
    const newCache = await call('import_cache', name);
    await localforage.clear();
    for (const [key, value] of Object.entries(newCache)) {
        await localforage.setItem(key, value);
    }
}
async function listCacheBackups() {
    return await call('list_cache_backups');
}
async function clearCache(appId) {
    if (appId?.toString().length) {
        await localforage.removeItem(appId.toString());
    }
    else {
        await localforage.clear();
        await call('clear_cache');
    }
}
async function getCache(appId) {
    return await localforage.getItem(appId.toString());
}
async function clearDownloads() {
    await call('clear_downloads');
}

class AudioResolver {
    async isDownloaded(video) {
        try {
            return await call('local_audio_exists', video.id);
        }
        catch (e) {
            console.error('local_audio_exists error:', e);
            return false;
        }
    }
    /**
     * First playable search result for a game. Does not download it; callers
     * decide whether to (e.g. in the background).
     */
    async getAudio(appName, isCancelled = () => false) {
        const videos = this.getSearchResults(appName + ' Theme Music');
        let tried = 0;
        for await (const video of videos) {
            if (isCancelled() || tried++ >= 5)
                return undefined;
            const audioUrl = await this.getAudioUrlFromVideo(video);
            if (audioUrl?.length) {
                return { audioUrl, videoId: video.id };
            }
        }
        return undefined;
    }
}
function isYouTubeUrl(url) {
    return url.includes('youtube.com') || url.includes('youtu.be');
}
class YtDlpAudioResolver extends AudioResolver {
    async *getSearchResults(searchTerm) {
        try {
            await call('search_yt', searchTerm);
            let result = await call('next_yt_result');
            while (result) {
                yield result;
                result = await call('next_yt_result');
            }
            return;
        }
        catch (err) {
            console.error('YtDlp search error:', err);
        }
        return;
    }
    async getAudioUrlFromVideo(video) {
        if (video.url && !isYouTubeUrl(video.url)) {
            return video.url;
        }
        else {
            const result = await call('single_yt_url', video.id);
            return result || undefined;
        }
    }
    async downloadAudio(video) {
        try {
            await call('download_yt_audio', video.id);
            return true;
        }
        catch (e) {
            console.error('YtDlp download error:', e);
            return false;
        }
    }
}
class ITunesAudioResolver extends AudioResolver {
    async *getSearchResults(searchTerm) {
        try {
            const results = await call('search_itunes', searchTerm, 10);
            if (results && results.length > 0) {
                for (const result of results) {
                    yield {
                        id: result.id,
                        title: result.title,
                        thumbnail: result.thumbnail,
                        url: result.url
                    };
                }
            }
        }
        catch (err) {
            console.error('iTunes search error:', err);
        }
        return;
    }
    async getAudioUrlFromVideo(video) {
        if (video.url && video.url.startsWith('http')) {
            return video.url;
        }
        try {
            const url = await call('local_audio_url', video.id);
            return url || undefined;
        }
        catch (e) {
            console.error('iTunes local music URL error:', e);
            return undefined;
        }
    }
    async downloadAudio(video) {
        try {
            await call('download_url', video.url ?? '', video.id);
            return true;
        }
        catch (e) {
            console.error('iTunes download error:', e);
            return false;
        }
    }
}
class LocalMusicAudioResolver extends AudioResolver {
    async *getSearchResults(searchTerm) {
        try {
            const results = await call('search_local_music', searchTerm, 100);
            if (results && results.length > 0) {
                for (const result of results) {
                    yield {
                        id: result.id,
                        title: result.title,
                        thumbnail: result.thumbnail || '',
                        url: result.url || ''
                    };
                }
            }
        }
        catch (err) {
            console.error('Local music search error:', err);
        }
        return;
    }
    async getAudioUrlFromVideo(video) {
        try {
            const url = await call('get_local_music_url', video.id);
            return url || undefined;
        }
        catch (e) {
            console.error('Local music URL error:', e);
            return undefined;
        }
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async downloadAudio(_video) {
        return true;
    }
    async isDownloaded() {
        return true;
    }
}
const KHINSIDER_BASE = 'https://downloads.khinsider.com';
const KHINSIDER_NO_COVER = `${KHINSIDER_BASE}/images/no-cover.png`;
function khinsiderUrl(href) {
    return href.startsWith('http') ? href : `${KHINSIDER_BASE}${href}`;
}
function resolveDownloadHref(href) {
    if (!href || !/\.(mp3|ogg|flac|m4a|wav|aac|opus)$/i.test(href)) {
        return undefined;
    }
    return khinsiderUrl(href);
}
async function fetchDoc(url) {
    try {
        const html = await call('fetch_url', url);
        if (!html)
            return null;
        return new DOMParser().parseFromString(html, 'text/html');
    }
    catch {
        return null;
    }
}
class KhinsiderAudioResolver extends AudioResolver {
    async *getSearchResults(searchTerm) {
        const searchUrl = (query) => `${KHINSIDER_BASE}/search?search=${encodeURIComponent(query)}`;
        try {
            let doc = await fetchDoc(searchUrl(searchTerm));
            if (!doc ||
                (doc.querySelectorAll('a[href*="/album/"]').length === 0 &&
                    doc.querySelectorAll('.playlistItem, #songlist, .clickable-row')
                        .length === 0)) {
                const baseName = searchTerm.replace(/\s+(Theme Music|Main Theme|Soundtrack|OST)$/i, '');
                if (baseName !== searchTerm) {
                    doc = await fetchDoc(searchUrl(baseName));
                }
            }
            if (!doc)
                return;
            const seenAlbumHrefs = new Set();
            const topAlbums = [];
            for (const link of Array.from(doc.querySelectorAll('a[href*="/game-soundtracks/album/"]'))) {
                const href = link.getAttribute('href');
                if (!href || seenAlbumHrefs.has(href))
                    continue;
                seenAlbumHrefs.add(href);
                let title = link.textContent?.trim();
                const row = link.closest('tr');
                if (!title && row) {
                    title = Array.from(row.querySelectorAll('td'))
                        .map((td) => td.textContent?.trim())
                        .filter((t) => t && t.length > 2)[0];
                }
                let thumbnail = KHINSIDER_NO_COVER;
                const img = row?.querySelector('img');
                if (img?.getAttribute('src')) {
                    thumbnail = khinsiderUrl(img.getAttribute('src'));
                }
                topAlbums.push({
                    url: khinsiderUrl(href),
                    title: title || 'Unknown Album',
                    thumbnail
                });
                if (topAlbums.length >= 8)
                    break;
            }
            const seenTrackHrefs = new Set();
            const albumResponses = await Promise.all(topAlbums.map(async (album) => {
                const albumDoc = await fetchDoc(album.url);
                if (!albumDoc)
                    return [];
                const results = [];
                const trackLinks = Array.from(albumDoc.querySelectorAll('.playlistItem td.clickable-row a, #songlist td.clickable-row a'));
                for (const trackLink of trackLinks) {
                    const href = trackLink.getAttribute('href');
                    if (!href || seenTrackHrefs.has(href))
                        continue;
                    seenTrackHrefs.add(href);
                    results.push({
                        id: khinsiderUrl(href),
                        title: `${trackLink.textContent?.trim() || 'Track'} (${album.title})`,
                        thumbnail: album.thumbnail
                    });
                }
                return results;
            }));
            for (const batch of albumResponses) {
                for (const track of batch) {
                    yield track;
                }
            }
            if (topAlbums.length === 0) {
                for (const track of Array.from(doc.querySelectorAll('.playlistItem a, .clickable-row a, #songlist a'))) {
                    const href = track.getAttribute('href');
                    if (!href ||
                        href.includes('/search') ||
                        !href.includes('/album/') ||
                        seenTrackHrefs.has(href))
                        continue;
                    seenTrackHrefs.add(href);
                    const title = track.textContent?.trim();
                    if (!title || title.length < 2)
                        continue;
                    yield {
                        id: khinsiderUrl(href),
                        title,
                        thumbnail: KHINSIDER_NO_COVER
                    };
                    if (seenTrackHrefs.size >= 30)
                        break;
                }
            }
        }
        catch (err) {
            console.error('KHInsider search failed:', err);
        }
    }
    async getAudioUrlFromVideo(video) {
        try {
            const localUrl = await call('local_audio_url', video.id);
            if (localUrl)
                return localUrl;
            const doc = await fetchDoc(video.id);
            if (!doc)
                return undefined;
            const audio = doc.querySelector('audio');
            const audioSrc = audio?.getAttribute('src') ||
                audio?.querySelector('source')?.getAttribute('src');
            if (audioSrc)
                return audioSrc;
            const downloadLink = doc
                .querySelector('a .songDownloadLink')
                ?.closest('a');
            const downloadHref = resolveDownloadHref(downloadLink?.getAttribute('href') ?? null);
            if (downloadHref)
                return downloadHref;
            for (const link of Array.from(doc.querySelectorAll('a'))) {
                const href = resolveDownloadHref(link.getAttribute('href'));
                if (href)
                    return href;
            }
            return undefined;
        }
        catch (e) {
            console.error('KHInsider audio fetch failed:', e);
            return undefined;
        }
    }
    async downloadAudio(video) {
        try {
            if (await this.isDownloaded(video))
                return true;
            const url = video.url && !video.url.startsWith('data:')
                ? video.url
                : await this.getAudioUrlFromVideo(video);
            if (!url)
                return false;
            if (url.startsWith('data:'))
                return true;
            await call('download_url', url, video.id);
            return true;
        }
        catch (e) {
            console.error('KHInsider download error:', e);
            return false;
        }
    }
}
const SEARCH_PROVIDERS = [
    'ytdlp',
    'itunes',
    'khinsider',
    'local'
];
function getProviderFromId(videoId) {
    if (videoId.startsWith('itunes_'))
        return 'itunes';
    if (videoId.startsWith('local_'))
        return 'local';
    if (/^https?:\/\//.test(videoId) && !isYouTubeUrl(videoId)) {
        return 'khinsider';
    }
    return 'ytdlp';
}
function getResolver(provider) {
    switch (provider) {
        case 'itunes':
            return new ITunesAudioResolver();
        case 'local':
            return new LocalMusicAudioResolver();
        case 'khinsider':
            return new KhinsiderAudioResolver();
        case 'ytdlp':
        default:
            return new YtDlpAudioResolver();
    }
}
function getResolverForVideoId(videoId) {
    return getResolver(getProviderFromId(videoId));
}

// THIS FILE IS AUTO GENERATED
function HiQrCode (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 4.875C3 3.839 3.84 3 4.875 3h4.5c1.036 0 1.875.84 1.875 1.875v4.5c0 1.036-.84 1.875-1.875 1.875h-4.5A1.875 1.875 0 0 1 3 9.375v-4.5ZM4.875 4.5a.375.375 0 0 0-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 0 0 .375-.375v-4.5a.375.375 0 0 0-.375-.375h-4.5Zm7.875.375c0-1.036.84-1.875 1.875-1.875h4.5C20.16 3 21 3.84 21 4.875v4.5c0 1.036-.84 1.875-1.875 1.875h-4.5a1.875 1.875 0 0 1-1.875-1.875v-4.5Zm1.875-.375a.375.375 0 0 0-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 0 0 .375-.375v-4.5a.375.375 0 0 0-.375-.375h-4.5ZM6 6.75A.75.75 0 0 1 6.75 6h.75a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75h-.75A.75.75 0 0 1 6 7.5v-.75Zm9.75 0A.75.75 0 0 1 16.5 6h.75a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75v-.75ZM3 14.625c0-1.036.84-1.875 1.875-1.875h4.5c1.036 0 1.875.84 1.875 1.875v4.5c0 1.035-.84 1.875-1.875 1.875h-4.5A1.875 1.875 0 0 1 3 19.125v-4.5Zm1.875-.375a.375.375 0 0 0-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 0 0 .375-.375v-4.5a.375.375 0 0 0-.375-.375h-4.5Zm7.875-.75a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75v-.75Zm6 0a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75v-.75ZM6 16.5a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75v-.75Zm9.75 0a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75v-.75Zm-3 3a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75v-.75Zm6 0a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75v-.75Z","clipRule":"evenodd"},"child":[]}]})(props);
}

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/index.tsx


// src/third-party/qrcodegen/index.ts
/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */
var qrcodegen;
((qrcodegen2) => {
  const _QrCode = class _QrCode {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code with the given version number,
    // error correction level, data codeword bytes, and mask number.
    // This is a low-level API that most users should not use directly.
    // A mid-level API is the encodeSegments() function.
    constructor(version, errorCorrectionLevel, dataCodewords, msk) {
      this.version = version;
      this.errorCorrectionLevel = errorCorrectionLevel;
      // The modules of this QR Code (false = light, true = dark).
      // Immutable after constructor finishes. Accessed through getModule().
      this.modules = [];
      // Indicates function modules that are not subjected to masking. Discarded when constructor finishes.
      this.isFunction = [];
      if (version < _QrCode.MIN_VERSION || version > _QrCode.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (msk < -1 || msk > 7)
        throw new RangeError("Mask value out of range");
      this.size = version * 4 + 17;
      let row = [];
      for (let i = 0; i < this.size; i++)
        row.push(false);
      for (let i = 0; i < this.size; i++) {
        this.modules.push(row.slice());
        this.isFunction.push(row.slice());
      }
      this.drawFunctionPatterns();
      const allCodewords = this.addEccAndInterleave(dataCodewords);
      this.drawCodewords(allCodewords);
      if (msk == -1) {
        let minPenalty = 1e9;
        for (let i = 0; i < 8; i++) {
          this.applyMask(i);
          this.drawFormatBits(i);
          const penalty = this.getPenaltyScore();
          if (penalty < minPenalty) {
            msk = i;
            minPenalty = penalty;
          }
          this.applyMask(i);
        }
      }
      assert(0 <= msk && msk <= 7);
      this.mask = msk;
      this.applyMask(msk);
      this.drawFormatBits(msk);
      this.isFunction = [];
    }
    /*-- Static factory functions (high level) --*/
    // Returns a QR Code representing the given Unicode text string at the given error correction level.
    // As a conservative upper bound, this function is guaranteed to succeed for strings that have 738 or fewer
    // Unicode code points (not UTF-16 code units) if the low error correction level is used. The smallest possible
    // QR Code version is automatically chosen for the output. The ECC level of the result may be higher than the
    // ecl argument if it can be done without increasing the version.
    static encodeText(text, ecl) {
      const segs = qrcodegen2.QrSegment.makeSegments(text);
      return _QrCode.encodeSegments(segs, ecl);
    }
    // Returns a QR Code representing the given binary data at the given error correction level.
    // This function always encodes using the binary segment mode, not any text mode. The maximum number of
    // bytes allowed is 2953. The smallest possible QR Code version is automatically chosen for the output.
    // The ECC level of the result may be higher than the ecl argument if it can be done without increasing the version.
    static encodeBinary(data, ecl) {
      const seg = qrcodegen2.QrSegment.makeBytes(data);
      return _QrCode.encodeSegments([seg], ecl);
    }
    /*-- Static factory functions (mid level) --*/
    // Returns a QR Code representing the given segments with the given encoding parameters.
    // The smallest possible QR Code version within the given range is automatically
    // chosen for the output. Iff boostEcl is true, then the ECC level of the result
    // may be higher than the ecl argument if it can be done without increasing the
    // version. The mask number is either between 0 to 7 (inclusive) to force that
    // mask, or -1 to automatically choose an appropriate mask (which may be slow).
    // This function allows the user to create a custom sequence of segments that switches
    // between modes (such as alphanumeric and byte) to encode text in less space.
    // This is a mid-level API; the high-level API is encodeText() and encodeBinary().
    static encodeSegments(segs, ecl, minVersion = 1, maxVersion = 40, mask = -1, boostEcl = true) {
      if (!(_QrCode.MIN_VERSION <= minVersion && minVersion <= maxVersion && maxVersion <= _QrCode.MAX_VERSION) || mask < -1 || mask > 7)
        throw new RangeError("Invalid value");
      let version;
      let dataUsedBits;
      for (version = minVersion; ; version++) {
        const dataCapacityBits2 = _QrCode.getNumDataCodewords(version, ecl) * 8;
        const usedBits = QrSegment.getTotalBits(segs, version);
        if (usedBits <= dataCapacityBits2) {
          dataUsedBits = usedBits;
          break;
        }
        if (version >= maxVersion)
          throw new RangeError("Data too long");
      }
      for (const newEcl of [_QrCode.Ecc.MEDIUM, _QrCode.Ecc.QUARTILE, _QrCode.Ecc.HIGH]) {
        if (boostEcl && dataUsedBits <= _QrCode.getNumDataCodewords(version, newEcl) * 8)
          ecl = newEcl;
      }
      let bb = [];
      for (const seg of segs) {
        appendBits(seg.mode.modeBits, 4, bb);
        appendBits(seg.numChars, seg.mode.numCharCountBits(version), bb);
        for (const b of seg.getData())
          bb.push(b);
      }
      assert(bb.length == dataUsedBits);
      const dataCapacityBits = _QrCode.getNumDataCodewords(version, ecl) * 8;
      assert(bb.length <= dataCapacityBits);
      appendBits(0, Math.min(4, dataCapacityBits - bb.length), bb);
      appendBits(0, (8 - bb.length % 8) % 8, bb);
      assert(bb.length % 8 == 0);
      for (let padByte = 236; bb.length < dataCapacityBits; padByte ^= 236 ^ 17)
        appendBits(padByte, 8, bb);
      let dataCodewords = [];
      while (dataCodewords.length * 8 < bb.length)
        dataCodewords.push(0);
      bb.forEach((b, i) => dataCodewords[i >>> 3] |= b << 7 - (i & 7));
      return new _QrCode(version, ecl, dataCodewords, mask);
    }
    /*-- Accessor methods --*/
    // Returns the color of the module (pixel) at the given coordinates, which is false
    // for light or true for dark. The top left corner has the coordinates (x=0, y=0).
    // If the given coordinates are out of bounds, then false (light) is returned.
    getModule(x, y) {
      return 0 <= x && x < this.size && 0 <= y && y < this.size && this.modules[y][x];
    }
    // Modified to expose modules for easy access
    getModules() {
      return this.modules;
    }
    /*-- Private helper methods for constructor: Drawing function modules --*/
    // Reads this object's version field, and draws and marks all function modules.
    drawFunctionPatterns() {
      for (let i = 0; i < this.size; i++) {
        this.setFunctionModule(6, i, i % 2 == 0);
        this.setFunctionModule(i, 6, i % 2 == 0);
      }
      this.drawFinderPattern(3, 3);
      this.drawFinderPattern(this.size - 4, 3);
      this.drawFinderPattern(3, this.size - 4);
      const alignPatPos = this.getAlignmentPatternPositions();
      const numAlign = alignPatPos.length;
      for (let i = 0; i < numAlign; i++) {
        for (let j = 0; j < numAlign; j++) {
          if (!(i == 0 && j == 0 || i == 0 && j == numAlign - 1 || i == numAlign - 1 && j == 0))
            this.drawAlignmentPattern(alignPatPos[i], alignPatPos[j]);
        }
      }
      this.drawFormatBits(0);
      this.drawVersion();
    }
    // Draws two copies of the format bits (with its own error correction code)
    // based on the given mask and this object's error correction level field.
    drawFormatBits(mask) {
      const data = this.errorCorrectionLevel.formatBits << 3 | mask;
      let rem = data;
      for (let i = 0; i < 10; i++)
        rem = rem << 1 ^ (rem >>> 9) * 1335;
      const bits = (data << 10 | rem) ^ 21522;
      assert(bits >>> 15 == 0);
      for (let i = 0; i <= 5; i++)
        this.setFunctionModule(8, i, getBit(bits, i));
      this.setFunctionModule(8, 7, getBit(bits, 6));
      this.setFunctionModule(8, 8, getBit(bits, 7));
      this.setFunctionModule(7, 8, getBit(bits, 8));
      for (let i = 9; i < 15; i++)
        this.setFunctionModule(14 - i, 8, getBit(bits, i));
      for (let i = 0; i < 8; i++)
        this.setFunctionModule(this.size - 1 - i, 8, getBit(bits, i));
      for (let i = 8; i < 15; i++)
        this.setFunctionModule(8, this.size - 15 + i, getBit(bits, i));
      this.setFunctionModule(8, this.size - 8, true);
    }
    // Draws two copies of the version bits (with its own error correction code),
    // based on this object's version field, iff 7 <= version <= 40.
    drawVersion() {
      if (this.version < 7)
        return;
      let rem = this.version;
      for (let i = 0; i < 12; i++)
        rem = rem << 1 ^ (rem >>> 11) * 7973;
      const bits = this.version << 12 | rem;
      assert(bits >>> 18 == 0);
      for (let i = 0; i < 18; i++) {
        const color = getBit(bits, i);
        const a = this.size - 11 + i % 3;
        const b = Math.floor(i / 3);
        this.setFunctionModule(a, b, color);
        this.setFunctionModule(b, a, color);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(x, y) {
      for (let dy = -4; dy <= 4; dy++) {
        for (let dx = -4; dx <= 4; dx++) {
          const dist = Math.max(Math.abs(dx), Math.abs(dy));
          const xx = x + dx;
          const yy = y + dy;
          if (0 <= xx && xx < this.size && 0 <= yy && yy < this.size)
            this.setFunctionModule(xx, yy, dist != 2 && dist != 4);
        }
      }
    }
    // Draws a 5*5 alignment pattern, with the center module
    // at (x, y). All modules must be in bounds.
    drawAlignmentPattern(x, y) {
      for (let dy = -2; dy <= 2; dy++) {
        for (let dx = -2; dx <= 2; dx++)
          this.setFunctionModule(x + dx, y + dy, Math.max(Math.abs(dx), Math.abs(dy)) != 1);
      }
    }
    // Sets the color of a module and marks it as a function module.
    // Only used by the constructor. Coordinates must be in bounds.
    setFunctionModule(x, y, isDark) {
      this.modules[y][x] = isDark;
      this.isFunction[y][x] = true;
    }
    /*-- Private helper methods for constructor: Codewords and masking --*/
    // Returns a new byte string representing the given data with the appropriate error correction
    // codewords appended to it, based on this object's version and error correction level.
    addEccAndInterleave(data) {
      const ver = this.version;
      const ecl = this.errorCorrectionLevel;
      if (data.length != _QrCode.getNumDataCodewords(ver, ecl))
        throw new RangeError("Invalid argument");
      const numBlocks = _QrCode.NUM_ERROR_CORRECTION_BLOCKS[ecl.ordinal][ver];
      const blockEccLen = _QrCode.ECC_CODEWORDS_PER_BLOCK[ecl.ordinal][ver];
      const rawCodewords = Math.floor(_QrCode.getNumRawDataModules(ver) / 8);
      const numShortBlocks = numBlocks - rawCodewords % numBlocks;
      const shortBlockLen = Math.floor(rawCodewords / numBlocks);
      let blocks = [];
      const rsDiv = _QrCode.reedSolomonComputeDivisor(blockEccLen);
      for (let i = 0, k = 0; i < numBlocks; i++) {
        let dat = data.slice(k, k + shortBlockLen - blockEccLen + (i < numShortBlocks ? 0 : 1));
        k += dat.length;
        const ecc = _QrCode.reedSolomonComputeRemainder(dat, rsDiv);
        if (i < numShortBlocks)
          dat.push(0);
        blocks.push(dat.concat(ecc));
      }
      let result = [];
      for (let i = 0; i < blocks[0].length; i++) {
        blocks.forEach((block, j) => {
          if (i != shortBlockLen - blockEccLen || j >= numShortBlocks)
            result.push(block[i]);
        });
      }
      assert(result.length == rawCodewords);
      return result;
    }
    // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
    // data area of this QR Code. Function modules need to be marked off before this is called.
    drawCodewords(data) {
      if (data.length != Math.floor(_QrCode.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let i = 0;
      for (let right = this.size - 1; right >= 1; right -= 2) {
        if (right == 6)
          right = 5;
        for (let vert = 0; vert < this.size; vert++) {
          for (let j = 0; j < 2; j++) {
            const x = right - j;
            const upward = (right + 1 & 2) == 0;
            const y = upward ? this.size - 1 - vert : vert;
            if (!this.isFunction[y][x] && i < data.length * 8) {
              this.modules[y][x] = getBit(data[i >>> 3], 7 - (i & 7));
              i++;
            }
          }
        }
      }
      assert(i == data.length * 8);
    }
    // XORs the codeword modules in this QR Code with the given mask pattern.
    // The function modules must be marked and the codeword bits must be drawn
    // before masking. Due to the arithmetic of XOR, calling applyMask() with
    // the same mask value a second time will undo the mask. A final well-formed
    // QR Code needs exactly one (not zero, two, etc.) mask applied.
    applyMask(mask) {
      if (mask < 0 || mask > 7)
        throw new RangeError("Mask value out of range");
      for (let y = 0; y < this.size; y++) {
        for (let x = 0; x < this.size; x++) {
          let invert;
          switch (mask) {
            case 0:
              invert = (x + y) % 2 == 0;
              break;
            case 1:
              invert = y % 2 == 0;
              break;
            case 2:
              invert = x % 3 == 0;
              break;
            case 3:
              invert = (x + y) % 3 == 0;
              break;
            case 4:
              invert = (Math.floor(x / 3) + Math.floor(y / 2)) % 2 == 0;
              break;
            case 5:
              invert = x * y % 2 + x * y % 3 == 0;
              break;
            case 6:
              invert = (x * y % 2 + x * y % 3) % 2 == 0;
              break;
            case 7:
              invert = ((x + y) % 2 + x * y % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          if (!this.isFunction[y][x] && invert)
            this.modules[y][x] = !this.modules[y][x];
        }
      }
    }
    // Calculates and returns the penalty score based on state of this QR Code's current modules.
    // This is used by the automatic mask choice algorithm to find the mask pattern that yields the lowest score.
    getPenaltyScore() {
      let result = 0;
      for (let y = 0; y < this.size; y++) {
        let runColor = false;
        let runX = 0;
        let runHistory = [0, 0, 0, 0, 0, 0, 0];
        for (let x = 0; x < this.size; x++) {
          if (this.modules[y][x] == runColor) {
            runX++;
            if (runX == 5)
              result += _QrCode.PENALTY_N1;
            else if (runX > 5)
              result++;
          } else {
            this.finderPenaltyAddHistory(runX, runHistory);
            if (!runColor)
              result += this.finderPenaltyCountPatterns(runHistory) * _QrCode.PENALTY_N3;
            runColor = this.modules[y][x];
            runX = 1;
          }
        }
        result += this.finderPenaltyTerminateAndCount(runColor, runX, runHistory) * _QrCode.PENALTY_N3;
      }
      for (let x = 0; x < this.size; x++) {
        let runColor = false;
        let runY = 0;
        let runHistory = [0, 0, 0, 0, 0, 0, 0];
        for (let y = 0; y < this.size; y++) {
          if (this.modules[y][x] == runColor) {
            runY++;
            if (runY == 5)
              result += _QrCode.PENALTY_N1;
            else if (runY > 5)
              result++;
          } else {
            this.finderPenaltyAddHistory(runY, runHistory);
            if (!runColor)
              result += this.finderPenaltyCountPatterns(runHistory) * _QrCode.PENALTY_N3;
            runColor = this.modules[y][x];
            runY = 1;
          }
        }
        result += this.finderPenaltyTerminateAndCount(runColor, runY, runHistory) * _QrCode.PENALTY_N3;
      }
      for (let y = 0; y < this.size - 1; y++) {
        for (let x = 0; x < this.size - 1; x++) {
          const color = this.modules[y][x];
          if (color == this.modules[y][x + 1] && color == this.modules[y + 1][x] && color == this.modules[y + 1][x + 1])
            result += _QrCode.PENALTY_N2;
        }
      }
      let dark = 0;
      for (const row of this.modules)
        dark = row.reduce((sum, color) => sum + (color ? 1 : 0), dark);
      const total = this.size * this.size;
      const k = Math.ceil(Math.abs(dark * 20 - total * 10) / total) - 1;
      assert(0 <= k && k <= 9);
      result += k * _QrCode.PENALTY_N4;
      assert(0 <= result && result <= 2568888);
      return result;
    }
    /*-- Private helper functions --*/
    // Returns an ascending list of positions of alignment patterns for this version number.
    // Each position is in the range [0,177), and are used on both the x and y axes.
    // This could be implemented as lookup table of 40 variable-length lists of integers.
    getAlignmentPatternPositions() {
      if (this.version == 1)
        return [];
      else {
        const numAlign = Math.floor(this.version / 7) + 2;
        const step = this.version == 32 ? 26 : Math.ceil((this.version * 4 + 4) / (numAlign * 2 - 2)) * 2;
        let result = [6];
        for (let pos = this.size - 7; result.length < numAlign; pos -= step)
          result.splice(1, 0, pos);
        return result;
      }
    }
    // Returns the number of data bits that can be stored in a QR Code of the given version number, after
    // all function modules are excluded. This includes remainder bits, so it might not be a multiple of 8.
    // The result is in the range [208, 29648]. This could be implemented as a 40-entry lookup table.
    static getNumRawDataModules(ver) {
      if (ver < _QrCode.MIN_VERSION || ver > _QrCode.MAX_VERSION)
        throw new RangeError("Version number out of range");
      let result = (16 * ver + 128) * ver + 64;
      if (ver >= 2) {
        const numAlign = Math.floor(ver / 7) + 2;
        result -= (25 * numAlign - 10) * numAlign - 55;
        if (ver >= 7)
          result -= 36;
      }
      assert(208 <= result && result <= 29648);
      return result;
    }
    // Returns the number of 8-bit data (i.e. not error correction) codewords contained in any
    // QR Code of the given version number and error correction level, with remainder bits discarded.
    // This stateless pure function could be implemented as a (40*4)-cell lookup table.
    static getNumDataCodewords(ver, ecl) {
      return Math.floor(_QrCode.getNumRawDataModules(ver) / 8) - _QrCode.ECC_CODEWORDS_PER_BLOCK[ecl.ordinal][ver] * _QrCode.NUM_ERROR_CORRECTION_BLOCKS[ecl.ordinal][ver];
    }
    // Returns a Reed-Solomon ECC generator polynomial for the given degree. This could be
    // implemented as a lookup table over all possible parameter values, instead of as an algorithm.
    static reedSolomonComputeDivisor(degree) {
      if (degree < 1 || degree > 255)
        throw new RangeError("Degree out of range");
      let result = [];
      for (let i = 0; i < degree - 1; i++)
        result.push(0);
      result.push(1);
      let root = 1;
      for (let i = 0; i < degree; i++) {
        for (let j = 0; j < result.length; j++) {
          result[j] = _QrCode.reedSolomonMultiply(result[j], root);
          if (j + 1 < result.length)
            result[j] ^= result[j + 1];
        }
        root = _QrCode.reedSolomonMultiply(root, 2);
      }
      return result;
    }
    // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
    static reedSolomonComputeRemainder(data, divisor) {
      let result = divisor.map((_) => 0);
      for (const b of data) {
        const factor = b ^ result.shift();
        result.push(0);
        divisor.forEach((coef, i) => result[i] ^= _QrCode.reedSolomonMultiply(coef, factor));
      }
      return result;
    }
    // Returns the product of the two given field elements modulo GF(2^8/0x11D). The arguments and result
    // are unsigned 8-bit integers. This could be implemented as a lookup table of 256*256 entries of uint8.
    static reedSolomonMultiply(x, y) {
      if (x >>> 8 != 0 || y >>> 8 != 0)
        throw new RangeError("Byte out of range");
      let z = 0;
      for (let i = 7; i >= 0; i--) {
        z = z << 1 ^ (z >>> 7) * 285;
        z ^= (y >>> i & 1) * x;
      }
      assert(z >>> 8 == 0);
      return z;
    }
    // Can only be called immediately after a light run is added, and
    // returns either 0, 1, or 2. A helper function for getPenaltyScore().
    finderPenaltyCountPatterns(runHistory) {
      const n = runHistory[1];
      assert(n <= this.size * 3);
      const core = n > 0 && runHistory[2] == n && runHistory[3] == n * 3 && runHistory[4] == n && runHistory[5] == n;
      return (core && runHistory[0] >= n * 4 && runHistory[6] >= n ? 1 : 0) + (core && runHistory[6] >= n * 4 && runHistory[0] >= n ? 1 : 0);
    }
    // Must be called at the end of a line (row or column) of modules. A helper function for getPenaltyScore().
    finderPenaltyTerminateAndCount(currentRunColor, currentRunLength, runHistory) {
      if (currentRunColor) {
        this.finderPenaltyAddHistory(currentRunLength, runHistory);
        currentRunLength = 0;
      }
      currentRunLength += this.size;
      this.finderPenaltyAddHistory(currentRunLength, runHistory);
      return this.finderPenaltyCountPatterns(runHistory);
    }
    // Pushes the given value to the front and drops the last value. A helper function for getPenaltyScore().
    finderPenaltyAddHistory(currentRunLength, runHistory) {
      if (runHistory[0] == 0)
        currentRunLength += this.size;
      runHistory.pop();
      runHistory.unshift(currentRunLength);
    }
  };
  /*-- Constants and tables --*/
  // The minimum version number supported in the QR Code Model 2 standard.
  _QrCode.MIN_VERSION = 1;
  // The maximum version number supported in the QR Code Model 2 standard.
  _QrCode.MAX_VERSION = 40;
  // For use in getPenaltyScore(), when evaluating which mask is best.
  _QrCode.PENALTY_N1 = 3;
  _QrCode.PENALTY_N2 = 3;
  _QrCode.PENALTY_N3 = 40;
  _QrCode.PENALTY_N4 = 10;
  _QrCode.ECC_CODEWORDS_PER_BLOCK = [
    // Version: (note that index 0 is for padding, and is set to an illegal value)
    //0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40    Error correction level
    [-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    // Low
    [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
    // Medium
    [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    // Quartile
    [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
    // High
  ];
  _QrCode.NUM_ERROR_CORRECTION_BLOCKS = [
    // Version: (note that index 0 is for padding, and is set to an illegal value)
    //0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40    Error correction level
    [-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25],
    // Low
    [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49],
    // Medium
    [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68],
    // Quartile
    [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81]
    // High
  ];
  qrcodegen2.QrCode = _QrCode;
  function appendBits(val, len, bb) {
    if (len < 0 || len > 31 || val >>> len != 0)
      throw new RangeError("Value out of range");
    for (let i = len - 1; i >= 0; i--)
      bb.push(val >>> i & 1);
  }
  function getBit(x, i) {
    return (x >>> i & 1) != 0;
  }
  function assert(cond) {
    if (!cond)
      throw new Error("Assertion error");
  }
  const _QrSegment = class _QrSegment {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code segment with the given attributes and data.
    // The character count (numChars) must agree with the mode and the bit buffer length,
    // but the constraint isn't checked. The given bit buffer is cloned and stored.
    constructor(mode, numChars, bitData) {
      this.mode = mode;
      this.numChars = numChars;
      this.bitData = bitData;
      if (numChars < 0)
        throw new RangeError("Invalid argument");
      this.bitData = bitData.slice();
    }
    /*-- Static factory functions (mid level) --*/
    // Returns a segment representing the given binary data encoded in
    // byte mode. All input byte arrays are acceptable. Any text string
    // can be converted to UTF-8 bytes and encoded as a byte mode segment.
    static makeBytes(data) {
      let bb = [];
      for (const b of data)
        appendBits(b, 8, bb);
      return new _QrSegment(_QrSegment.Mode.BYTE, data.length, bb);
    }
    // Returns a segment representing the given string of decimal digits encoded in numeric mode.
    static makeNumeric(digits) {
      if (!_QrSegment.isNumeric(digits))
        throw new RangeError("String contains non-numeric characters");
      let bb = [];
      for (let i = 0; i < digits.length; ) {
        const n = Math.min(digits.length - i, 3);
        appendBits(parseInt(digits.substring(i, i + n), 10), n * 3 + 1, bb);
        i += n;
      }
      return new _QrSegment(_QrSegment.Mode.NUMERIC, digits.length, bb);
    }
    // Returns a segment representing the given text string encoded in alphanumeric mode.
    // The characters allowed are: 0 to 9, A to Z (uppercase only), space,
    // dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static makeAlphanumeric(text) {
      if (!_QrSegment.isAlphanumeric(text))
        throw new RangeError("String contains unencodable characters in alphanumeric mode");
      let bb = [];
      let i;
      for (i = 0; i + 2 <= text.length; i += 2) {
        let temp = _QrSegment.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i)) * 45;
        temp += _QrSegment.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i + 1));
        appendBits(temp, 11, bb);
      }
      if (i < text.length)
        appendBits(_QrSegment.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i)), 6, bb);
      return new _QrSegment(_QrSegment.Mode.ALPHANUMERIC, text.length, bb);
    }
    // Returns a new mutable list of zero or more segments to represent the given Unicode text string.
    // The result may use various segment modes and switch modes to optimize the length of the bit stream.
    static makeSegments(text) {
      if (text == "")
        return [];
      else if (_QrSegment.isNumeric(text))
        return [_QrSegment.makeNumeric(text)];
      else if (_QrSegment.isAlphanumeric(text))
        return [_QrSegment.makeAlphanumeric(text)];
      else
        return [_QrSegment.makeBytes(_QrSegment.toUtf8ByteArray(text))];
    }
    // Returns a segment representing an Extended Channel Interpretation
    // (ECI) designator with the given assignment value.
    static makeEci(assignVal) {
      let bb = [];
      if (assignVal < 0)
        throw new RangeError("ECI assignment value out of range");
      else if (assignVal < 1 << 7)
        appendBits(assignVal, 8, bb);
      else if (assignVal < 1 << 14) {
        appendBits(2, 2, bb);
        appendBits(assignVal, 14, bb);
      } else if (assignVal < 1e6) {
        appendBits(6, 3, bb);
        appendBits(assignVal, 21, bb);
      } else
        throw new RangeError("ECI assignment value out of range");
      return new _QrSegment(_QrSegment.Mode.ECI, 0, bb);
    }
    // Tests whether the given string can be encoded as a segment in numeric mode.
    // A string is encodable iff each character is in the range 0 to 9.
    static isNumeric(text) {
      return _QrSegment.NUMERIC_REGEX.test(text);
    }
    // Tests whether the given string can be encoded as a segment in alphanumeric mode.
    // A string is encodable iff each character is in the following set: 0 to 9, A to Z
    // (uppercase only), space, dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static isAlphanumeric(text) {
      return _QrSegment.ALPHANUMERIC_REGEX.test(text);
    }
    /*-- Methods --*/
    // Returns a new copy of the data bits of this segment.
    getData() {
      return this.bitData.slice();
    }
    // (Package-private) Calculates and returns the number of bits needed to encode the given segments at
    // the given version. The result is infinity if a segment has too many characters to fit its length field.
    static getTotalBits(segs, version) {
      let result = 0;
      for (const seg of segs) {
        const ccbits = seg.mode.numCharCountBits(version);
        if (seg.numChars >= 1 << ccbits)
          return Infinity;
        result += 4 + ccbits + seg.bitData.length;
      }
      return result;
    }
    // Returns a new array of bytes representing the given string encoded in UTF-8.
    static toUtf8ByteArray(str) {
      str = encodeURI(str);
      let result = [];
      for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) != "%")
          result.push(str.charCodeAt(i));
        else {
          result.push(parseInt(str.substring(i + 1, i + 3), 16));
          i += 2;
        }
      }
      return result;
    }
  };
  /*-- Constants --*/
  // Describes precisely all strings that are encodable in numeric mode.
  _QrSegment.NUMERIC_REGEX = /^[0-9]*$/;
  // Describes precisely all strings that are encodable in alphanumeric mode.
  _QrSegment.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/;
  // The set of all legal characters in alphanumeric mode,
  // where each character value maps to the index in the string.
  _QrSegment.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";
  let QrSegment = _QrSegment;
  qrcodegen2.QrSegment = _QrSegment;
})(qrcodegen || (qrcodegen = {}));
((qrcodegen2) => {
  ((QrCode2) => {
    const _Ecc = class _Ecc {
      // The QR Code can tolerate about 30% erroneous codewords
      /*-- Constructor and fields --*/
      constructor(ordinal, formatBits) {
        this.ordinal = ordinal;
        this.formatBits = formatBits;
      }
    };
    /*-- Constants --*/
    _Ecc.LOW = new _Ecc(0, 1);
    // The QR Code can tolerate about  7% erroneous codewords
    _Ecc.MEDIUM = new _Ecc(1, 0);
    // The QR Code can tolerate about 15% erroneous codewords
    _Ecc.QUARTILE = new _Ecc(2, 3);
    // The QR Code can tolerate about 25% erroneous codewords
    _Ecc.HIGH = new _Ecc(3, 2);
    QrCode2.Ecc = _Ecc;
  })(qrcodegen2.QrCode || (qrcodegen2.QrCode = {}));
})(qrcodegen || (qrcodegen = {}));
((qrcodegen2) => {
  ((QrSegment2) => {
    const _Mode = class _Mode {
      /*-- Constructor and fields --*/
      constructor(modeBits, numBitsCharCount) {
        this.modeBits = modeBits;
        this.numBitsCharCount = numBitsCharCount;
      }
      /*-- Method --*/
      // (Package-private) Returns the bit width of the character count field for a segment in
      // this mode in a QR Code at the given version number. The result is in the range [0, 16].
      numCharCountBits(ver) {
        return this.numBitsCharCount[Math.floor((ver + 7) / 17)];
      }
    };
    /*-- Constants --*/
    _Mode.NUMERIC = new _Mode(1, [10, 12, 14]);
    _Mode.ALPHANUMERIC = new _Mode(2, [9, 11, 13]);
    _Mode.BYTE = new _Mode(4, [8, 16, 16]);
    _Mode.KANJI = new _Mode(8, [8, 10, 12]);
    _Mode.ECI = new _Mode(7, [0, 0, 0]);
    QrSegment2.Mode = _Mode;
  })(qrcodegen2.QrSegment || (qrcodegen2.QrSegment = {}));
})(qrcodegen || (qrcodegen = {}));
var qrcodegen_default = qrcodegen;

// src/index.tsx
/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */
var ERROR_LEVEL_MAP = {
  L: qrcodegen_default.QrCode.Ecc.LOW,
  M: qrcodegen_default.QrCode.Ecc.MEDIUM,
  Q: qrcodegen_default.QrCode.Ecc.QUARTILE,
  H: qrcodegen_default.QrCode.Ecc.HIGH
};
var DEFAULT_SIZE = 128;
var DEFAULT_LEVEL = "L";
var DEFAULT_BGCOLOR = "#FFFFFF";
var DEFAULT_FGCOLOR = "#000000";
var DEFAULT_INCLUDEMARGIN = false;
var DEFAULT_MINVERSION = 1;
var SPEC_MARGIN_SIZE = 4;
var DEFAULT_MARGIN_SIZE = 0;
var DEFAULT_IMG_SCALE = 0.1;
function generatePath(modules, margin = 0) {
  const ops = [];
  modules.forEach(function(row, y) {
    let start = null;
    row.forEach(function(cell, x) {
      if (!cell && start !== null) {
        ops.push(
          `M${start + margin} ${y + margin}h${x - start}v1H${start + margin}z`
        );
        start = null;
        return;
      }
      if (x === row.length - 1) {
        if (!cell) {
          return;
        }
        if (start === null) {
          ops.push(`M${x + margin},${y + margin} h1v1H${x + margin}z`);
        } else {
          ops.push(
            `M${start + margin},${y + margin} h${x + 1 - start}v1H${start + margin}z`
          );
        }
        return;
      }
      if (cell && start === null) {
        start = x;
      }
    });
  });
  return ops.join("");
}
function excavateModules(modules, excavation) {
  return modules.slice().map((row, y) => {
    if (y < excavation.y || y >= excavation.y + excavation.h) {
      return row;
    }
    return row.map((cell, x) => {
      if (x < excavation.x || x >= excavation.x + excavation.w) {
        return cell;
      }
      return false;
    });
  });
}
function getImageSettings(cells, size, margin, imageSettings) {
  if (imageSettings == null) {
    return null;
  }
  const numCells = cells.length + margin * 2;
  const defaultSize = Math.floor(size * DEFAULT_IMG_SCALE);
  const scale = numCells / size;
  const w = (imageSettings.width || defaultSize) * scale;
  const h = (imageSettings.height || defaultSize) * scale;
  const x = imageSettings.x == null ? cells.length / 2 - w / 2 : imageSettings.x * scale;
  const y = imageSettings.y == null ? cells.length / 2 - h / 2 : imageSettings.y * scale;
  const opacity = imageSettings.opacity == null ? 1 : imageSettings.opacity;
  let excavation = null;
  if (imageSettings.excavate) {
    let floorX = Math.floor(x);
    let floorY = Math.floor(y);
    let ceilW = Math.ceil(w + x - floorX);
    let ceilH = Math.ceil(h + y - floorY);
    excavation = { x: floorX, y: floorY, w: ceilW, h: ceilH };
  }
  const crossOrigin = imageSettings.crossOrigin;
  return { x, y, h, w, excavation, opacity, crossOrigin };
}
function getMarginSize(includeMargin, marginSize) {
  if (marginSize != null) {
    return Math.max(Math.floor(marginSize), 0);
  }
  return includeMargin ? SPEC_MARGIN_SIZE : DEFAULT_MARGIN_SIZE;
}
function useQRCode({
  value,
  level,
  minVersion,
  includeMargin,
  marginSize,
  imageSettings,
  size,
  boostLevel
}) {
  let qrcode = SP_REACT.useMemo(() => {
    const values = Array.isArray(value) ? value : [value];
    const segments = values.reduce((accum, v) => {
      accum.push(...qrcodegen_default.QrSegment.makeSegments(v));
      return accum;
    }, []);
    return qrcodegen_default.QrCode.encodeSegments(
      segments,
      ERROR_LEVEL_MAP[level],
      minVersion,
      void 0,
      void 0,
      boostLevel
    );
  }, [value, level, minVersion, boostLevel]);
  const { cells, margin, numCells, calculatedImageSettings } = SP_REACT.useMemo(() => {
    let cells2 = qrcode.getModules();
    const margin2 = getMarginSize(includeMargin, marginSize);
    const numCells2 = cells2.length + margin2 * 2;
    const calculatedImageSettings2 = getImageSettings(
      cells2,
      size,
      margin2,
      imageSettings
    );
    return {
      cells: cells2,
      margin: margin2,
      numCells: numCells2,
      calculatedImageSettings: calculatedImageSettings2
    };
  }, [qrcode, size, imageSettings, includeMargin, marginSize]);
  return {
    qrcode,
    margin,
    cells,
    numCells,
    calculatedImageSettings
  };
}
var SUPPORTS_PATH2D = function() {
  try {
    new Path2D().addPath(new Path2D());
  } catch (e) {
    return false;
  }
  return true;
}();
var QRCodeCanvas = SP_REACT.forwardRef(
  function QRCodeCanvas2(props, forwardedRef) {
    const _a = props, {
      value,
      size = DEFAULT_SIZE,
      level = DEFAULT_LEVEL,
      bgColor = DEFAULT_BGCOLOR,
      fgColor = DEFAULT_FGCOLOR,
      includeMargin = DEFAULT_INCLUDEMARGIN,
      minVersion = DEFAULT_MINVERSION,
      boostLevel,
      marginSize,
      imageSettings
    } = _a, extraProps = __objRest(_a, [
      "value",
      "size",
      "level",
      "bgColor",
      "fgColor",
      "includeMargin",
      "minVersion",
      "boostLevel",
      "marginSize",
      "imageSettings"
    ]);
    const _b = extraProps, { style } = _b, otherProps = __objRest(_b, ["style"]);
    const imgSrc = imageSettings == null ? void 0 : imageSettings.src;
    const _canvas = SP_REACT.useRef(null);
    const _image = SP_REACT.useRef(null);
    const setCanvasRef = SP_REACT.useCallback(
      (node) => {
        _canvas.current = node;
        if (typeof forwardedRef === "function") {
          forwardedRef(node);
        } else if (forwardedRef) {
          forwardedRef.current = node;
        }
      },
      [forwardedRef]
    );
    const [isImgLoaded, setIsImageLoaded] = SP_REACT.useState(false);
    const { margin, cells, numCells, calculatedImageSettings } = useQRCode({
      value,
      level,
      minVersion,
      boostLevel,
      includeMargin,
      marginSize,
      imageSettings,
      size
    });
    SP_REACT.useEffect(() => {
      if (_canvas.current != null) {
        const canvas = _canvas.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          return;
        }
        let cellsToDraw = cells;
        const image = _image.current;
        const haveImageToRender = calculatedImageSettings != null && image !== null && image.complete && image.naturalHeight !== 0 && image.naturalWidth !== 0;
        if (haveImageToRender) {
          if (calculatedImageSettings.excavation != null) {
            cellsToDraw = excavateModules(
              cells,
              calculatedImageSettings.excavation
            );
          }
        }
        const pixelRatio = window.devicePixelRatio || 1;
        canvas.height = canvas.width = size * pixelRatio;
        const scale = size / numCells * pixelRatio;
        ctx.scale(scale, scale);
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, numCells, numCells);
        ctx.fillStyle = fgColor;
        if (SUPPORTS_PATH2D) {
          ctx.fill(new Path2D(generatePath(cellsToDraw, margin)));
        } else {
          cells.forEach(function(row, rdx) {
            row.forEach(function(cell, cdx) {
              if (cell) {
                ctx.fillRect(cdx + margin, rdx + margin, 1, 1);
              }
            });
          });
        }
        if (calculatedImageSettings) {
          ctx.globalAlpha = calculatedImageSettings.opacity;
        }
        if (haveImageToRender) {
          ctx.drawImage(
            image,
            calculatedImageSettings.x + margin,
            calculatedImageSettings.y + margin,
            calculatedImageSettings.w,
            calculatedImageSettings.h
          );
        }
      }
    });
    SP_REACT.useEffect(() => {
      setIsImageLoaded(false);
    }, [imgSrc]);
    const canvasStyle = __spreadValues({ height: size, width: size }, style);
    let img = null;
    if (imgSrc != null) {
      img = /* @__PURE__ */ SP_REACT.createElement(
        "img",
        {
          src: imgSrc,
          key: imgSrc,
          style: { display: "none" },
          onLoad: () => {
            setIsImageLoaded(true);
          },
          ref: _image,
          crossOrigin: calculatedImageSettings == null ? void 0 : calculatedImageSettings.crossOrigin
        }
      );
    }
    return /* @__PURE__ */ SP_REACT.createElement(SP_REACT.Fragment, null, /* @__PURE__ */ SP_REACT.createElement(
      "canvas",
      __spreadValues({
        style: canvasStyle,
        height: size,
        width: size,
        ref: setCanvasRef,
        role: "img"
      }, otherProps)
    ), img);
  }
);
QRCodeCanvas.displayName = "QRCodeCanvas";
var QRCodeSVG = SP_REACT.forwardRef(
  function QRCodeSVG2(props, forwardedRef) {
    const _a = props, {
      value,
      size = DEFAULT_SIZE,
      level = DEFAULT_LEVEL,
      bgColor = DEFAULT_BGCOLOR,
      fgColor = DEFAULT_FGCOLOR,
      includeMargin = DEFAULT_INCLUDEMARGIN,
      minVersion = DEFAULT_MINVERSION,
      boostLevel,
      title,
      marginSize,
      imageSettings
    } = _a, otherProps = __objRest(_a, [
      "value",
      "size",
      "level",
      "bgColor",
      "fgColor",
      "includeMargin",
      "minVersion",
      "boostLevel",
      "title",
      "marginSize",
      "imageSettings"
    ]);
    const { margin, cells, numCells, calculatedImageSettings } = useQRCode({
      value,
      level,
      minVersion,
      boostLevel,
      includeMargin,
      marginSize,
      imageSettings,
      size
    });
    let cellsToDraw = cells;
    let image = null;
    if (imageSettings != null && calculatedImageSettings != null) {
      if (calculatedImageSettings.excavation != null) {
        cellsToDraw = excavateModules(
          cells,
          calculatedImageSettings.excavation
        );
      }
      image = /* @__PURE__ */ SP_REACT.createElement(
        "image",
        {
          href: imageSettings.src,
          height: calculatedImageSettings.h,
          width: calculatedImageSettings.w,
          x: calculatedImageSettings.x + margin,
          y: calculatedImageSettings.y + margin,
          preserveAspectRatio: "none",
          opacity: calculatedImageSettings.opacity,
          crossOrigin: calculatedImageSettings.crossOrigin
        }
      );
    }
    const fgPath = generatePath(cellsToDraw, margin);
    return /* @__PURE__ */ SP_REACT.createElement(
      "svg",
      __spreadValues({
        height: size,
        width: size,
        viewBox: `0 0 ${numCells} ${numCells}`,
        ref: forwardedRef,
        role: "img"
      }, otherProps),
      !!title && /* @__PURE__ */ SP_REACT.createElement("title", null, title),
      /* @__PURE__ */ SP_REACT.createElement(
        "path",
        {
          fill: bgColor,
          d: `M0,0 h${numCells}v${numCells}H0z`,
          shapeRendering: "crispEdges"
        }
      ),
      /* @__PURE__ */ SP_REACT.createElement("path", { fill: fgColor, d: fgPath, shapeRendering: "crispEdges" }),
      image
    );
  }
);
QRCodeSVG.displayName = "QRCodeSVG";

const showQrModal = (url) => {
    DFL.showModal(window.SP_REACT.createElement(DFL.ModalRoot, null,
        window.SP_REACT.createElement(QRCodeSVG, { style: { margin: '0 auto 1.5em auto' }, value: url, includeMargin: true, size: 256 }),
        window.SP_REACT.createElement("span", { style: { textAlign: 'center', wordBreak: 'break-word' } }, url)), window);
};

const navLink = (url) => {
    DFL.Navigation.CloseSideMenus();
    DFL.Navigation.NavigateToExternalWeb(url);
};
const PanelSocialButton = ({ icon, children, url }) => {
    const t = useTranslations();
    return (window.SP_REACT.createElement(DFL.PanelSectionRow, null,
        window.SP_REACT.createElement(DFL.Field, { bottomSeparator: "none", icon: null, label: null, childrenLayout: undefined, inlineWrap: "keep-inline", padding: "none", spacingBetweenLabelAndChild: "none", childrenContainerWidth: "max" },
            window.SP_REACT.createElement(DFL.Focusable, { style: { display: 'flex' } },
                window.SP_REACT.createElement("div", { style: {
                        display: 'flex',
                        fontSize: '1.5em',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: '.5em'
                    } }, icon),
                window.SP_REACT.createElement(DFL.DialogButton, { onClick: () => navLink(url), onSecondaryButton: () => showQrModal(url), onSecondaryActionDescription: t('showQrCode'), style: {
                        padding: '10px',
                        fontSize: '14px'
                    } }, children),
                window.SP_REACT.createElement(DFL.DialogButton, { onOKActionDescription: t('showQrCode'), onClick: () => showQrModal(url), style: {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '10px',
                        maxWidth: '40px',
                        minWidth: 'auto',
                        marginLeft: '.5em'
                    } },
                    window.SP_REACT.createElement(HiQrCode, null))))));
};

function Index() {
    const { settings, setDefaultMuted, setVolume, setHomepageFocusMode } = useSettings();
    const t = useTranslations();
    const [isUpdatingYtDlp, setIsUpdatingYtDlp] = SP_REACT.useState(false);
    async function updateYtDlp() {
        setIsUpdatingYtDlp(true);
        try {
            const result = await call('update_yt_dlp');
            toaster.toast({
                title: result.success
                    ? t('updateYtDlpSuccess')
                    : t('updateYtDlpFailed'),
                body: result.message,
                icon: window.SP_REACT.createElement(FaSync, null),
                duration: result.success ? 3000 : 5000
            });
        }
        catch (error) {
            toaster.toast({
                title: t('updateYtDlpFailed'),
                body: error instanceof Error ? error.message : String(error),
                icon: window.SP_REACT.createElement(FaSync, null),
                duration: 5000
            });
        }
        finally {
            setIsUpdatingYtDlp(false);
        }
    }
    const confirmClearCache = () => {
        DFL.showModal(window.SP_REACT.createElement(DFL.ConfirmModal, { strTitle: t('deleteOverridesConfirm'), strDescription: t('deleteOverridesDescription'), onOK: clearCache }));
    };
    const confirmClearDownloads = () => {
        DFL.showModal(window.SP_REACT.createElement(DFL.ConfirmModal, { strTitle: t('deleteDownloadsConfirm'), onOK: clearDownloads }));
    };
    const confirmRestoreDownloads = async () => {
        const num = Object.values(await getFullCache()).filter((entry) => entry.videoId?.length).length;
        const modal = DFL.showModal(window.SP_REACT.createElement(DFL.ConfirmModal, { strTitle: t('restoreDownloadsConfirm'), strDescription: t('restoreDownloadsConfirmDescription', {
                num: num.toString()
            }), onOK: () => restoreDownloads(modal) }));
    };
    function restoreCache(backup) {
        DFL.showModal(window.SP_REACT.createElement(DFL.ConfirmModal, { strTitle: t('restoreOverridesConfirm'), strDescription: t('restoreOverridesConfirmDetails'), onOK: async () => {
                await importCache(backup);
                toaster.toast({
                    title: t('restoreSuccessful'),
                    body: t('restoreSuccessfulDetails'),
                    icon: window.SP_REACT.createElement(FaUndo, null),
                    duration: 1500
                });
            } }));
    }
    async function restoreDownloads(modal) {
        function getProgressModal(index, total) {
            const current = index + 1;
            const progress = (current * 100) / total;
            return (window.SP_REACT.createElement(DFL.ConfirmModal, { bHideCloseIcon: true, bOKDisabled: true, onCancel: modal.Close, strCancelButtonText: t('close'), strTitle: window.SP_REACT.createElement("div", { style: {
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: '100%'
                    } },
                    t('restoreDownloadsOperationTitle'),
                    window.SP_REACT.createElement("div", { style: { marginLeft: 'auto' } },
                        window.SP_REACT.createElement(DFL.ProgressBarWithInfo, { nProgress: progress, sOperationText: t('restoreDownloadsOperation', {
                                current: current.toString(),
                                total: total.toString()
                            }) }))) }));
        }
        const cached = Object.values(await getFullCache()).filter((entry) => entry.videoId?.length);
        let failed = 0;
        for (let index = 0; index < cached.length; index++) {
            const videoId = cached[index].videoId;
            const resolver = getResolverForVideoId(videoId);
            modal.Update(getProgressModal(index, cached.length));
            if (await resolver.isDownloaded({ id: videoId }))
                continue;
            if (!(await resolver.downloadAudio({ id: videoId })))
                failed++;
        }
        modal.Close();
        toaster.toast({
            title: failed ? t('downloadFailed') : t('downloadRestoreSuccessful'),
            body: failed
                ? t('downloadFailedDetail')
                : t('downloadRestoreSuccessfulDetails'),
            icon: window.SP_REACT.createElement(FaDownload, null),
            duration: failed ? 3000 : 1500
        });
    }
    return (window.SP_REACT.createElement("div", null,
        window.SP_REACT.createElement(DFL.PanelSection, { title: t('settings') },
            window.SP_REACT.createElement(DFL.PanelSectionRow, null,
                window.SP_REACT.createElement(DFL.SliderField, { label: t('volume'), description: t('volumeDescription'), value: settings.volume * 100, onChange: (newVal) => {
                        setVolume(newVal / 100);
                    }, min: 0, max: 100, step: 1, icon: window.SP_REACT.createElement(FaVolumeUp, null), editableValue: true })),
            window.SP_REACT.createElement(DFL.PanelSectionRow, null,
                window.SP_REACT.createElement(DFL.ToggleField, { icon: window.SP_REACT.createElement(FaVolumeMute, null), checked: settings.defaultMuted, label: t('defaultMuted'), description: t('defaultMutedDescription'), onChange: (newVal) => {
                        setDefaultMuted(newVal);
                    } })),
            window.SP_REACT.createElement(DFL.PanelSectionRow, null,
                window.SP_REACT.createElement(DFL.ToggleField, { checked: settings.homepageFocusMode, label: t('homepageFocusMode'), description: t('homepageFocusModeDescription'), onChange: (newVal) => {
                        setHomepageFocusMode(newVal);
                    } })),
            window.SP_REACT.createElement(DFL.PanelSectionRow, null,
                window.SP_REACT.createElement(DFL.ButtonItem, { label: t('updateYtDlpLabel'), description: t('updateYtDlpDescription'), layout: "below", disabled: isUpdatingYtDlp, onClick: updateYtDlp }, isUpdatingYtDlp ? t('updating') : t('updateYtDlp'))),
            window.SP_REACT.createElement(DFL.PanelSectionRow, null,
                window.SP_REACT.createElement(DFL.ButtonItem, { label: t('deleteDownloadsLabel'), description: t('deleteDownloadsDescription'), layout: "below", onClick: () => confirmClearDownloads() }, t('deleteDownloads'))),
            window.SP_REACT.createElement(DFL.PanelSectionRow, null,
                window.SP_REACT.createElement(DFL.ButtonItem, { label: t('restoreDownloadsLabel'), description: t('restoreDownloadsDescription'), bottomSeparator: "none", layout: "below", onClick: () => confirmRestoreDownloads() }, t('restoreDownloads')))),
        window.SP_REACT.createElement(DFL.PanelSection, { title: t('overrides') },
            window.SP_REACT.createElement(DFL.PanelSectionRow, null,
                window.SP_REACT.createElement(DFL.ButtonItem, { label: t('deleteOverridesLabel'), bottomSeparator: "none", layout: "below", onClick: () => confirmClearCache() }, t('deleteOverrides'))),
            window.SP_REACT.createElement(DFL.PanelSectionRow, null,
                window.SP_REACT.createElement(DFL.ButtonItem, { label: t('backupOverridesLabel'), bottomSeparator: "none", layout: "below", onClick: async () => {
                        await exportCache();
                        toaster.toast({
                            title: t('backupSuccessful'),
                            body: t('backupSuccessfulDetails'),
                            icon: window.SP_REACT.createElement(FaSave, null),
                            duration: 1500
                        });
                    } }, t('backupOverrides'))),
            window.SP_REACT.createElement(DFL.PanelSectionRow, null,
                window.SP_REACT.createElement(DFL.ButtonItem, { label: t('restoreOverridesLabel'), bottomSeparator: "none", layout: "below", onClick: async () => {
                        const backups = await listCacheBackups();
                        DFL.showContextMenu(window.SP_REACT.createElement(DFL.Menu, { label: t('restoreOverridesLabel') }, backups.map((backup) => (window.SP_REACT.createElement(DFL.MenuItem, { tone: "positive", onClick: () => restoreCache(backup), key: backup }, backup)))));
                    } }, t('restoreOverrides')))),
        window.SP_REACT.createElement(DFL.PanelSection, { title: t('extras') },
            window.SP_REACT.createElement(PanelSocialButton, { icon: window.SP_REACT.createElement(SiKofi, { fill: "#FF5E5B" }), url: "https://ko-fi.com/Nytuo" }, "Ko-fi"),
            window.SP_REACT.createElement(PanelSocialButton, { icon: window.SP_REACT.createElement(SiDiscord, { fill: "#5865F2" }), url: "https://deckbrew.xyz/discord" }, "Discord"),
            window.SP_REACT.createElement(PanelSocialButton, { icon: window.SP_REACT.createElement(SiGithub, { fill: "#f5f5f5" }), url: "https://github.com/Nytuo/SDH-GameThemeMusic/" }, "Github"),
            window.SP_REACT.createElement(PanelSocialButton, { icon: window.SP_REACT.createElement(SiCrowdin, { fill: "#FFFFFF" }), url: "https://crowdin.com/project/sdh-gamethememusic" }, t('helpTranslate')))));
}

/** "No music" is stored as an empty id and must never be downloaded. */
function shouldSkipAudioDownload(videoId) {
    return !videoId.length;
}
/** An empty cached id means the user explicitly chose "No Music". */
function isCachedNoMusic(videoId) {
    return videoId !== undefined && videoId.length === 0;
}

const NO_AUDIO = { videoId: '', audioUrl: '' };
function getAppName(appId) {
    if (!appId)
        return undefined;
    try {
        return appStore
            .GetAppOverviewByGameID(appId)
            ?.display_name?.replace(/([™®©])/g, '')
            .trim();
    }
    catch {
        return undefined;
    }
}
const useThemeMusic = (appId) => {
    const { settings, isLoading: settingsLoading } = useSettings();
    const [audio, setAudio] = SP_REACT.useState(NO_AUDIO);
    const [isLoading, setIsLoading] = SP_REACT.useState(true);
    const appName = getAppName(appId);
    SP_REACT.useEffect(() => {
        let ignore = false;
        async function resolve() {
            const cache = await getCache(appId);
            if (isCachedNoMusic(cache?.videoId))
                return NO_AUDIO;
            if (cache?.videoId?.length) {
                const resolver = getResolverForVideoId(cache.videoId);
                const audioUrl = await resolver.getAudioUrlFromVideo({
                    id: cache.videoId
                });
                return audioUrl?.length
                    ? { videoId: cache.videoId, audioUrl }
                    : NO_AUDIO;
            }
            if (settings.defaultMuted || !appName?.length)
                return NO_AUDIO;
            const resolver = getResolverForVideoId('');
            const found = await resolver.getAudio(appName, () => ignore);
            if (ignore || !found?.audioUrl?.length)
                return NO_AUDIO;
            // Only the id is persisted: stream URLs expire and data URLs are huge.
            await updateCache(appId, { videoId: found.videoId });
            // Download in the background so playback starts right away.
            resolver.downloadAudio({ id: found.videoId }).catch(() => { });
            return found;
        }
        if (!appId || settingsLoading) {
            setIsLoading(!!appId);
            setAudio(NO_AUDIO);
            return;
        }
        setIsLoading(true);
        resolve()
            .catch((e) => {
            console.error('[GameThemeMusic] Could not resolve theme music', e);
            return NO_AUDIO;
        })
            .then((result) => {
            if (ignore)
                return;
            setAudio(result);
            setIsLoading(false);
        });
        return () => {
            ignore = true;
        };
    }, [appId, appName, settingsLoading]);
    return {
        audio,
        isLoading
    };
};

/**
 * Shared audio outputs.
 *
 * - `theme`: the game's theme music. Shared so that Steam re-mounting the
 *   library page does not restart the track, but released (stopped) shortly
 *   after the last component using it unmounts.
 * - `preview`: the "Change Theme Music" previews. Only the card that pressed
 *   play owns it, so a preview can never play another card's (or the
 *   downloaded) track.
 *
 * Every channel can be suspended (Big Picture closed, device sleeping, plugin
 * unloading); a suspended channel refuses to play.
 */
/** Time a channel keeps playing after its last user unmounted. */
const RELEASE_GRACE_MS = 400;
const MEDIA_EVENTS = [
    'play',
    'playing',
    'pause',
    'ended',
    'canplay',
    'canplaythrough',
    'emptied',
    'error'
];
class AudioChannel {
    constructor(name) {
        this.name = name;
        this.url = '';
        this.owner = null;
        this.users = new Set();
        this.releaseTimer = null;
        this.suspended = false;
        this.listeners = new Set();
        this.element = new Audio();
        this.element.preload = 'auto';
        this.element.loop = true;
        for (const event of MEDIA_EVENTS) {
            this.element.addEventListener(event, () => this.emit());
        }
    }
    subscribe(listener) {
        this.listeners.add(listener);
        return () => {
            this.listeners.delete(listener);
        };
    }
    emit() {
        this.listeners.forEach((listener) => listener());
    }
    acquire(id) {
        this.users.add(id);
        if (this.releaseTimer !== null) {
            clearTimeout(this.releaseTimer);
            this.releaseTimer = null;
        }
    }
    release(id) {
        this.users.delete(id);
        if (this.owner === id) {
            this.owner = null;
            if (this.name === 'preview')
                this.halt();
        }
        if (this.users.size === 0 && this.releaseTimer === null) {
            this.releaseTimer = setTimeout(() => {
                this.releaseTimer = null;
                if (this.users.size === 0)
                    this.halt();
            }, RELEASE_GRACE_MS);
        }
    }
    getUrl() {
        return this.url;
    }
    isOwner(id) {
        return this.owner === id;
    }
    isSuspended() {
        return this.suspended;
    }
    isPlayingFor(id, url) {
        return (this.owner === id &&
            !this.element.paused &&
            (url === undefined || url === this.url));
    }
    isReadyFor(url) {
        return (!!url &&
            url === this.url &&
            this.element.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA);
    }
    /** Take ownership without changing what is loaded. */
    claim(id) {
        this.owner = id;
    }
    /** Point the channel at `url` (without playing) and take ownership. */
    load(id, url) {
        if (!url)
            return;
        this.owner = id;
        if (url !== this.url) {
            this.url = url;
            this.element.src = url;
            this.element.loop = true;
        }
        this.emit();
    }
    play(id, url) {
        if (!url)
            return false;
        this.load(id, url);
        if (this.suspended)
            return false;
        // A preview always wins over the theme music.
        const preview = channels.get('preview');
        if (this.name === 'theme' && preview && !preview.element.paused) {
            return false;
        }
        if (this.name === 'preview')
            channels.get('theme')?.pause();
        try {
            const result = this.element.play();
            if (result && typeof result.catch === 'function') {
                result.catch((err) => {
                    if (err?.name !== 'AbortError') {
                        console.warn(`[GameThemeMusic] ${this.name} playback failed`, err);
                    }
                });
            }
        }
        catch (err) {
            console.warn(`[GameThemeMusic] ${this.name} playback failed`, err);
            return false;
        }
        return true;
    }
    /** Pause if `id` owns the channel (or unconditionally without an id). */
    pause(id) {
        if (id !== undefined && this.owner !== id)
            return;
        if (!this.element.paused)
            this.element.pause();
    }
    stop(id) {
        if (id !== undefined && this.owner !== id)
            return;
        this.pause();
        try {
            this.element.currentTime = 0;
        }
        catch {
            /* not seekable yet */
        }
    }
    setVolume(volume) {
        if (!Number.isFinite(volume))
            return;
        this.element.volume = Math.min(1, Math.max(0, volume));
    }
    /** Stop playback and drop the source so nothing can resume it. */
    halt() {
        this.pause();
        this.url = '';
        this.owner = null;
        this.element.removeAttribute('src');
        try {
            this.element.load();
        }
        catch {
            /* jsdom / detached element */
        }
        this.emit();
    }
    setSuspended(suspended) {
        if (this.suspended === suspended)
            return;
        this.suspended = suspended;
        if (suspended)
            this.pause();
        this.emit();
    }
}
const channels = new Map();
let allSuspended = false;
function getAudioChannel(name) {
    let channel = channels.get(name);
    if (!channel) {
        channel = new AudioChannel(name);
        channel.setSuspended(allSuspended);
        channels.set(name, channel);
    }
    return channel;
}
function setAllAudioSuspended(suspended) {
    allSuspended = suspended;
    channels.forEach((channel) => channel.setSuspended(suspended));
}
function pauseAllAudio() {
    channels.forEach((channel) => channel.pause());
}
/** Stop everything and forget the channels (plugin unload / tests). */
function destroyAudioChannels() {
    channels.forEach((channel) => channel.halt());
    channels.clear();
    allSuspended = false;
}

class AudioLoaderCompatState {
    constructor() {
        this.delayMs = 1000;
        this.gamesRunning = [];
        this.onThemePage = false;
        this.themePageClaims = 0;
        this.lastOnThemePageTime = 0;
        this.suspended = false;
        this.eventBus = new EventTarget();
    }
    getPublicState() {
        return {
            gamesRunning: this.gamesRunning,
            onAppPage: this.onThemePage,
            suspended: this.suspended
        };
    }
    setGamesRunning(gamesRunning) {
        const oldGamesRunning = this.gamesRunning;
        const next = Array.from(new Set(gamesRunning));
        const noGamesRunning = next.length === 0;
        const incrMs = 10;
        this.gamesRunning = next;
        if (!noGamesRunning) {
            pauseAllAudio();
        }
        // AudioLoader resumes its menu music on its own once no game is running,
        // force it off for a moment so we stay in control.
        if (noGamesRunning && oldGamesRunning.length > 0) {
            for (let i = 0; i < this.delayMs; i += incrMs) {
                setTimeout(() => {
                    this.setAudioLoaderEnabled(false);
                }, i);
            }
        }
        setTimeout(() => {
            this.forceUpdate();
        }, noGamesRunning ? this.delayMs : 0);
    }
    /**
     * Every mounted player claims the theme page with `true` and releases it
     * with `false`; AudioLoader menu music only comes back once all claims are
     * released (after a short delay to cover page transitions).
     */
    setOnThemePage(onAppPage) {
        this.themePageClaims = Math.max(0, this.themePageClaims + (onAppPage ? 1 : -1));
        const target = this.themePageClaims > 0;
        const time = Date.now();
        setTimeout(() => {
            this.setOnThemePageInternal(target, time);
        }, target ? 0 : this.delayMs);
    }
    setSuspended(suspended) {
        if (this.suspended === suspended)
            return;
        this.suspended = suspended;
        setAllAudioSuspended(suspended);
        this.forceUpdate();
    }
    setAudioLoaderEnabled(enabled) {
        const audioLoader = window.AUDIOLOADER_MENUMUSIC;
        if (audioLoader) {
            if (enabled)
                audioLoader.play();
            else
                audioLoader.pause();
        }
    }
    setOnThemePageInternal(onAppPage, time) {
        if (time < this.lastOnThemePageTime) {
            return;
        }
        // A release scheduled before a newer claim must not win.
        if (!onAppPage && this.themePageClaims > 0) {
            return;
        }
        this.onThemePage = onAppPage;
        this.lastOnThemePageTime = time;
        this.forceUpdate();
    }
    forceUpdate() {
        if (this.onThemePage) {
            this.setAudioLoaderEnabled(false);
        }
        else {
            this.setAudioLoaderEnabled(this.gamesRunning.length === 0);
        }
        if (this.gamesRunning.length > 0) {
            pauseAllAudio();
        }
        this.eventBus.dispatchEvent(new Event('stateUpdate'));
    }
}
const AudioLoaderCompatStateContext = SP_REACT.createContext({
    gamesRunning: [],
    onAppPage: false,
    suspended: false,
    setGamesRunning: () => { },
    setOnThemePage: () => { }
});
const useAudioLoaderCompatState = () => SP_REACT.useContext(AudioLoaderCompatStateContext);
const AudioLoaderCompatStateContextProvider = ({ children, AudioLoaderCompatStateClass }) => {
    const [publicState, setPublicState] = SP_REACT.useState({
        ...AudioLoaderCompatStateClass.getPublicState()
    });
    SP_REACT.useEffect(() => {
        function onUpdate() {
            setPublicState({ ...AudioLoaderCompatStateClass.getPublicState() });
        }
        AudioLoaderCompatStateClass.eventBus.addEventListener('stateUpdate', onUpdate);
        // Catch updates that happened between first render and subscribing.
        onUpdate();
        return () => AudioLoaderCompatStateClass.eventBus.removeEventListener('stateUpdate', onUpdate);
    }, []);
    const setGamesRunning = (gamesRunning) => AudioLoaderCompatStateClass.setGamesRunning(gamesRunning);
    const setOnThemePage = (onAppPage) => AudioLoaderCompatStateClass.setOnThemePage(onAppPage);
    return (window.SP_REACT.createElement(AudioLoaderCompatStateContext.Provider, { value: {
            ...publicState,
            setGamesRunning,
            setOnThemePage
        } }, children));
};

/**
 * Control one of the shared audio channels.
 *
 * The `theme` channel preloads `audioUrl` as soon as it is known; the
 * `preview` channel only loads it when `play()` is called, so rendering a page
 * full of previews does not start dozens of downloads.
 */
const useAudioPlayer = (audioUrl, channelName = 'theme') => {
    const { setOnThemePage } = useAudioLoaderCompatState();
    const [id] = SP_REACT.useState(() => Symbol(channelName));
    const channel = getAudioChannel(channelName);
    const [, rerender] = SP_REACT.useReducer((x) => x + 1, 0);
    SP_REACT.useEffect(() => {
        channel.acquire(id);
        // The most recently mounted theme player is the one in control.
        if (channelName === 'theme')
            channel.claim(id);
        setOnThemePage(true);
        const unsubscribe = channel.subscribe(rerender);
        return () => {
            unsubscribe();
            channel.release(id);
            setOnThemePage(false);
        };
    }, [channel]);
    SP_REACT.useEffect(() => {
        if (channelName === 'theme' && audioUrl?.length) {
            channel.load(id, audioUrl);
        }
        else if (!audioUrl?.length && channel.isOwner(id)) {
            channel.stop(id);
        }
    }, [audioUrl, channel]);
    function play(url = audioUrl) {
        if (url?.length)
            channel.play(id, url);
    }
    function pause() {
        channel.pause(id);
    }
    function stop() {
        channel.stop(id);
    }
    const isPlaying = channel.isPlayingFor(id);
    function togglePlay() {
        if (isPlaying)
            stop();
        else
            play();
    }
    function setVolume(newVolume) {
        channel.setVolume(newVolume);
    }
    return {
        play,
        pause,
        stop,
        setVolume,
        togglePlay,
        isPlaying,
        isReady: channel.isReadyFor(audioUrl)
    };
};

function AppThemePlayer({ appid }) {
    const { settings, isLoading: settingsIsLoading } = useSettings();
    const { gamesRunning, suspended } = useAudioLoaderCompatState();
    const { audio, isLoading } = useThemeMusic(appid);
    const audioPlayer = useAudioPlayer(audio.audioUrl);
    SP_REACT.useEffect(() => {
        let ignore = false;
        if (!settingsIsLoading) {
            getCache(appid).then((cache) => {
                if (ignore)
                    return;
                audioPlayer.setVolume(typeof cache?.volume === 'number' && isFinite(cache.volume)
                    ? cache.volume
                    : settings.volume);
            });
        }
        return () => {
            ignore = true;
        };
    }, [appid, settingsIsLoading, settings.volume]);
    const canPlay = gamesRunning.length === 0 && !suspended;
    SP_REACT.useEffect(() => {
        if (isLoading)
            return;
        if (!audio.audioUrl?.length) {
            // "No music" (or nothing found): silence whatever was playing before.
            audioPlayer.stop();
        }
        else if (canPlay) {
            audioPlayer.play();
        }
        else {
            audioPlayer.pause();
        }
    }, [audio.audioUrl, isLoading, canPlay]);
    return window.SP_REACT.createElement(window.SP_REACT.Fragment, null);
}
/**
 * Game detail page player (no `appid` prop, read from the route) or
 * homepage focus player (`appid` prop).
 */
function ThemePlayer({ appid: propAppId } = {}) {
    const { settings, isLoading } = useSettings();
    const { appid: paramAppId } = DFL.useParams();
    const isDetailPage = propAppId === undefined;
    const appid = isDetailPage ? parseInt(paramAppId ?? '0') : propAppId;
    if (isLoading || !appid || !Number.isFinite(appid))
        return window.SP_REACT.createElement(window.SP_REACT.Fragment, null);
    // In homepage mode the detail page stays silent.
    if (isDetailPage && settings.homepageFocusMode)
        return window.SP_REACT.createElement(window.SP_REACT.Fragment, null);
    return window.SP_REACT.createElement(AppThemePlayer, { key: appid, appid: appid });
}

function patchLibraryApp(AudioLoaderCompatState) {
    return routerHook.addPatch('/library/app/:appid', (tree) => {
        const routeProps = DFL.findInReactTree(tree, (x) => x?.renderFunc);
        if (routeProps) {
            const patchHandler = DFL.createReactTreePatcher([
                (tree) => DFL.findInReactTree(tree, (x) => x?.props?.children?.props?.overview)?.props?.children
            ], (_, ret) => {
                const container = DFL.findInReactTree(ret, (x) => Array.isArray(x?.props?.children) &&
                    x?.props?.className?.includes(DFL.appDetailsClasses.InnerContainer));
                if (typeof container !== 'object') {
                    return ret;
                }
                container.props.children.push(window.SP_REACT.createElement(AudioLoaderCompatStateContextProvider, { AudioLoaderCompatStateClass: AudioLoaderCompatState },
                    window.SP_REACT.createElement(ThemePlayer, null)));
                return ret;
            });
            DFL.afterPatch(routeProps, 'renderFunc', patchHandler);
        }
        return tree;
    });
}

/** Wait this long on a tile before switching music (avoids thrashing). */
const FOCUS_DWELL_MS = 500;
const POLL_INTERVAL_MS = 400;
/** Routes where the focus player must stay silent. */
const BLOCKED_ROUTES = ['/gamethememusic/'];
const DETAIL_ROUTE = /\/library\/app\/(\d+)/;
function getCurrentRoute() {
    try {
        const main = DFL.Router?.WindowStore?.GamepadUIMainWindowInstance;
        const path = main?.m_history?.location?.pathname ??
            main?.BrowserWindow?.location?.pathname;
        return typeof path === 'string' ? path : null;
    }
    catch {
        return null;
    }
}
function isFocusPlaybackRoute(path) {
    if (path === null)
        return true;
    return !BLOCKED_ROUTES.some((blocked) => path.includes(blocked));
}
function getDetailRouteAppId(path) {
    const match = path?.match(DETAIL_ROUTE);
    const appId = match ? Number(match[1]) : NaN;
    return appId > 0 ? appId : null;
}
function isDomElement(obj) {
    return (obj &&
        typeof obj === 'object' &&
        obj.nodeType === 1 &&
        typeof obj.tagName === 'string');
}
function getAppIdFromFiber(fiber) {
    const props = fiber.memoizedProps || fiber.pendingProps;
    if (!props)
        return null;
    for (const key of [
        'appid',
        'nAppID',
        'nGameId',
        'appId',
        'gameId',
        'gameid',
        'nApp',
        'id'
    ]) {
        if (typeof props[key] === 'number' && props[key] > 0)
            return props[key];
        if (typeof props[key] === 'string' && Number(props[key]) > 0)
            return Number(props[key]);
    }
    for (const key of [
        'overview',
        'appOverview',
        'app',
        'game',
        'appData',
        'item',
        'capsule'
    ]) {
        const obj = props[key];
        if (!obj)
            continue;
        for (const idKey of ['appid', 'nAppID', 'id', 'appId']) {
            if (typeof obj[idKey] === 'number' && obj[idKey] > 0)
                return obj[idKey];
        }
    }
    return null;
}
function getAppIdFromElement(el) {
    let current = el;
    while (current) {
        try {
            const fiberKey = Object.keys(current).find((k) => k.startsWith('__reactFiber$'));
            if (fiberKey) {
                let fiber = current[fiberKey];
                let depth = 0;
                while (fiber && depth < 150) {
                    const id = getAppIdFromFiber(fiber);
                    if (id !== null)
                        return id;
                    fiber = fiber.return;
                    depth++;
                }
            }
        }
        catch {
            /* ignore */
        }
        current = current.parentElement;
    }
    return null;
}
function getElementFromNavNode(node) {
    if (!node || typeof node !== 'object')
        return null;
    if (isDomElement(node))
        return node;
    if (isDomElement(node.m_element))
        return node.m_element;
    return null;
}
function FocusedGameThemePlayer() {
    const { settings } = useSettings();
    const enabled = settings.homepageFocusMode;
    const [focusedAppId, setFocusedAppId] = SP_REACT.useState(null);
    SP_REACT.useEffect(() => {
        if (!enabled) {
            setFocusedAppId(null);
            return;
        }
        const w = window;
        let dwellTimer = null;
        const commit = (appId) => {
            if (dwellTimer !== null)
                clearTimeout(dwellTimer);
            dwellTimer = null;
            if (appId === null) {
                setFocusedAppId(null);
            }
            else {
                dwellTimer = setTimeout(() => setFocusedAppId(appId), FOCUS_DWELL_MS);
            }
        };
        let lastAppId = null;
        const update = (appId) => {
            const route = getCurrentRoute();
            // On a game's detail page keep playing that game, whatever is focused.
            const next = isFocusPlaybackRoute(route)
                ? (getDetailRouteAppId(route) ?? appId)
                : null;
            if (next === lastAppId)
                return;
            lastAppId = next;
            commit(next);
        };
        const getFocusedNavNode = () => {
            try {
                const ctx = w.FocusNavController?.m_ActiveContext;
                if (!ctx)
                    return null;
                const tree = ctx.m_LastActiveFocusNavTree ?? ctx.m_LastActiveNavTree;
                return tree?.m_lastFocusNode ?? null;
            }
            catch {
                return null;
            }
        };
        const getAppIdFromNavNode = (node) => {
            const el = getElementFromNavNode(node);
            if (!el)
                return null;
            return getAppIdFromElement(el);
        };
        const onFocusChanged = (_type, _from, to) => {
            if (!to)
                return;
            const el = getElementFromNavNode(to);
            update(el ? getAppIdFromElement(el) : null);
        };
        let unregister = null;
        const registerCallback = () => {
            try {
                const ctx = w.FocusNavController?.m_ActiveContext;
                const cb = ctx?.m_FocusChangedCallbacks;
                if (!cb)
                    return;
                if (typeof cb.Register === 'function') {
                    const result = cb.Register(onFocusChanged);
                    if (result && typeof result.Unregister === 'function') {
                        unregister = () => result.Unregister();
                    }
                    else if (typeof result === 'function') {
                        unregister = result;
                    }
                }
            }
            catch {
                /* ignore */
            }
        };
        const registerTimer = setTimeout(registerCallback, 2000);
        const tick = () => {
            let appId = null;
            const node = getFocusedNavNode();
            if (node) {
                appId = getAppIdFromNavNode(node);
            }
            if (appId === null) {
                try {
                    const ctx = w.FocusNavController?.m_ActiveContext;
                    const to = ctx?.m_ActiveFocusChange?.to;
                    if (to) {
                        appId = getAppIdFromNavNode(to);
                    }
                }
                catch {
                    /* ignore */
                }
            }
            if (appId === null) {
                try {
                    const hovered = Array.from(document.querySelectorAll(':hover'));
                    for (let i = hovered.length - 1; i >= 0; i--) {
                        const id = getAppIdFromElement(hovered[i]);
                        if (id !== null) {
                            appId = id;
                            break;
                        }
                    }
                }
                catch {
                    /* ignore */
                }
            }
            update(appId);
        };
        const interval = setInterval(tick, POLL_INTERVAL_MS);
        return () => {
            clearInterval(interval);
            clearTimeout(registerTimer);
            if (dwellTimer !== null)
                clearTimeout(dwellTimer);
            if (unregister)
                unregister();
        };
    }, [enabled]);
    if (!focusedAppId || !enabled)
        return window.SP_REACT.createElement(window.SP_REACT.Fragment, null);
    return window.SP_REACT.createElement(ThemePlayer, { key: focusedAppId, appid: focusedAppId });
}

function ChangeMusicButton({ appId }) {
    const t = useTranslations();
    return (window.SP_REACT.createElement(DFL.MenuItem, { key: "game-theme-music-change-music", onSelected: () => {
            DFL.Navigation.Navigate(`/gamethememusic/${appId}`);
        } },
        t('changeThemeMusic'),
        "..."));
}
const spliceChangeMusic = (children, appid) => {
    if (!Array.isArray(children) || typeof appid !== 'number')
        return;
    try {
        const existingIdx = children.findIndex((x) => x?.key === 'game-theme-music-change-music');
        if (existingIdx !== -1)
            children.splice(existingIdx, 1);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }
    catch (_) {
        // no-op
    }
    let insertIdx = -1;
    try {
        insertIdx = children.findIndex((item) => DFL.findInReactTree(item, (x) => x?.onSelected && x.onSelected.toString().includes('AppProperties')));
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }
    catch (_) {
        insertIdx = -1;
    }
    if (insertIdx < 0)
        return;
    children.splice(insertIdx, 0, window.SP_REACT.createElement(ChangeMusicButton, { appId: appid }));
};
const contextMenuPatch = (LibraryContextMenu) => {
    const patches = {
        unpatch: () => {
            return null;
        }
    };
    if (!LibraryContextMenu) {
        return patches;
    }
    patches.outer = DFL.afterPatch(LibraryContextMenu.prototype, 'render', (_, component) => {
        let appid;
        try {
            appid = component?._owner?.pendingProps?.overview?.appid;
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        }
        catch (_) {
            appid = undefined;
        }
        if (typeof appid !== 'number') {
            try {
                const found = DFL.findInTree(component?.props?.children, (x) => x?.app?.appid, { walkable: ['props', 'children'] });
                if (found?.app?.appid)
                    appid = found.app.appid;
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            }
            catch (_) {
                // no-op
            }
        }
        if (!patches.inner) {
            patches.inner = DFL.afterPatch(component.type?.prototype ?? component, 'shouldComponentUpdate', ([nextProps], shouldUpdate) => {
                const nextChildren = nextProps?.children;
                if (!Array.isArray(nextChildren))
                    return shouldUpdate;
                try {
                    const gtmIdx = nextChildren.findIndex((x) => x?.key === 'game-theme-music-change-music');
                    if (gtmIdx !== -1)
                        nextChildren.splice(gtmIdx, 1);
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                }
                catch (_) {
                    return shouldUpdate;
                }
                if (shouldUpdate === true) {
                    let updatedAppid = appid;
                    try {
                        const parentOverview = nextChildren.find((x) => x?._owner?.pendingProps?.overview?.appid);
                        if (typeof parentOverview?._owner?.pendingProps?.overview
                            ?.appid === 'number') {
                            updatedAppid =
                                parentOverview._owner.pendingProps.overview.appid;
                        }
                        // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    }
                    catch (_) {
                        // no-op
                    }
                    if (typeof updatedAppid !== 'number') {
                        try {
                            const found = DFL.findInTree(nextChildren, (x) => x?.app?.appid, { walkable: ['props', 'children'] });
                            if (found?.app?.appid)
                                updatedAppid = found.app.appid;
                            // eslint-disable-next-line @typescript-eslint/no-unused-vars
                        }
                        catch (_) {
                            // no-op
                        }
                    }
                    spliceChangeMusic(nextChildren, updatedAppid);
                }
                return shouldUpdate;
            });
        }
        else {
            const compChildren = component?.props?.children;
            spliceChangeMusic(compChildren, appid);
        }
        return component;
    });
    patches.unpatch = () => {
        patches.outer?.unpatch();
        patches.inner?.unpatch();
    };
    return patches;
};
const libraryContextMenuModule = DFL.findModuleChild((m) => {
    if (typeof m !== 'object' || m === null)
        return;
    for (const prop in m) {
        if (typeof m[prop] === 'function' &&
            m[prop].toString().includes('().LibraryContextMenu')) {
            return Object.values(m).find((sibling) => typeof sibling === 'function' &&
                sibling.toString().includes('navigator:'));
        }
    }
    return;
});
const LibraryContextMenu = libraryContextMenuModule
    ? DFL.fakeRenderComponent(libraryContextMenuModule).type
    : null;

function SteamSpinner() {
    return window.SP_REACT.createElement(DFL.SteamSpinner, { background: "transparent" });
}

// THIS FILE IS AUTO GENERATED
function ImSpinner2 (props) {
  return GenIcon({"attr":{"version":"1.1","viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"d":"M16 8c-0.020-1.045-0.247-2.086-0.665-3.038-0.417-0.953-1.023-1.817-1.766-2.53s-1.624-1.278-2.578-1.651c-0.953-0.374-1.978-0.552-2.991-0.531-1.013 0.020-2.021 0.24-2.943 0.646-0.923 0.405-1.758 0.992-2.449 1.712s-1.237 1.574-1.597 2.497c-0.361 0.923-0.533 1.914-0.512 2.895 0.020 0.981 0.234 1.955 0.627 2.847 0.392 0.892 0.961 1.7 1.658 2.368s1.523 1.195 2.416 1.543c0.892 0.348 1.851 0.514 2.799 0.493 0.949-0.020 1.89-0.227 2.751-0.608 0.862-0.379 1.642-0.929 2.287-1.604s1.154-1.472 1.488-2.335c0.204-0.523 0.342-1.069 0.415-1.622 0.019 0.001 0.039 0.002 0.059 0.002 0.552 0 1-0.448 1-1 0-0.028-0.001-0.056-0.004-0.083h0.004zM14.411 10.655c-0.367 0.831-0.898 1.584-1.55 2.206s-1.422 1.112-2.254 1.434c-0.832 0.323-1.723 0.476-2.608 0.454-0.884-0.020-1.759-0.215-2.56-0.57-0.801-0.354-1.526-0.867-2.125-1.495s-1.071-1.371-1.38-2.173c-0.31-0.801-0.457-1.66-0.435-2.512s0.208-1.694 0.551-2.464c0.342-0.77 0.836-1.468 1.441-2.044s1.321-1.029 2.092-1.326c0.771-0.298 1.596-0.438 2.416-0.416s1.629 0.202 2.368 0.532c0.74 0.329 1.41 0.805 1.963 1.387s0.988 1.27 1.272 2.011c0.285 0.74 0.418 1.532 0.397 2.32h0.004c-0.002 0.027-0.004 0.055-0.004 0.083 0 0.516 0.39 0.94 0.892 0.994-0.097 0.544-0.258 1.075-0.481 1.578z"},"child":[]}]})(props);
}

function Spinner() {
    return (window.SP_REACT.createElement("div", null,
        window.SP_REACT.createElement("style", null, `
            .icon-spin {
              
              -webkit-animation: icon-spin 2s infinite linear;
                      animation: icon-spin 2s infinite linear;
            }
            
            @-webkit-keyframes icon-spin {
              0% {
                -webkit-transform: rotate(0deg);
                        transform: rotate(0deg);
              }
              100% {
                -webkit-transform: rotate(359deg);
                        transform: rotate(359deg);
              }
            }
            
            @keyframes icon-spin {
              0% {
                -webkit-transform: rotate(0deg);
                        transform: rotate(0deg);
              }
              100% {
                -webkit-transform: rotate(359deg);
                        transform: rotate(359deg);
              }
            }
              `),
        window.SP_REACT.createElement(ImSpinner2, { className: "icon-spin" })));
}

const BADGES = {
    itunes: { color: '#d82d2d', icon: window.SP_REACT.createElement(SiItunes, { size: 16 }), label: 'iTunes' },
    khinsider: {
        color: '#2d6fd8',
        icon: window.SP_REACT.createElement(FaCompactDisc, { size: 16 }),
        label: 'KHInsider'
    },
    local: { color: '#3a8f3a', icon: window.SP_REACT.createElement(FaFolder, { size: 16 }), label: 'Local' },
    ytdlp: {
        color: '#e62117',
        icon: window.SP_REACT.createElement(SiYoutubemusic, { size: 16 }),
        label: 'YouTube'
    }
};
/** A URL that can be played as-is (no resolution needed). */
function directUrl(video) {
    const url = video.url;
    if (!url)
        return undefined;
    if (url.includes('youtube.com') || url.includes('youtu.be'))
        return undefined;
    return /^(https?:|data:)/.test(url) ? url : undefined;
}
function AudioPlayer({ selected, selectNewAudio, video, volume }) {
    const t = useTranslations();
    const provider = getProviderFromId(video.id);
    const [resolving, setResolving] = SP_REACT.useState(false);
    const [downloading, setDownloading] = SP_REACT.useState(false);
    const [downloaded, setDownloaded] = SP_REACT.useState(provider === 'local');
    const [audioUrl, setAudioUrl] = SP_REACT.useState(() => directUrl(video));
    const audioPlayer = useAudioPlayer(audioUrl, 'preview');
    const mounted = SP_REACT.useRef(true);
    SP_REACT.useEffect(() => {
        mounted.current = true;
        return () => {
            mounted.current = false;
        };
    }, []);
    SP_REACT.useEffect(() => {
        if (provider === 'local')
            return;
        getResolverForVideoId(video.id)
            .isDownloaded(video)
            .then((result) => {
            if (mounted.current)
                setDownloaded(result);
        });
    }, [video.id]);
    SP_REACT.useEffect(() => {
        if (audioPlayer.isPlaying)
            audioPlayer.setVolume(volume);
    }, [volume, audioPlayer.isPlaying]);
    function playbackFailed() {
        toaster.toast({
            title: t('playbackFailed'),
            body: t('playbackFailedDetail'),
            icon: window.SP_REACT.createElement(FaExclamationTriangle, null),
            duration: 3000
        });
    }
    async function resolveUrl() {
        if (audioUrl?.length)
            return audioUrl;
        setResolving(true);
        try {
            const url = await getResolverForVideoId(video.id).getAudioUrlFromVideo(video);
            if (mounted.current)
                setAudioUrl(url);
            return url;
        }
        catch (e) {
            console.error('[GameThemeMusic] Could not resolve preview', e);
            return undefined;
        }
        finally {
            if (mounted.current)
                setResolving(false);
        }
    }
    async function togglePlay() {
        if (audioPlayer.isPlaying) {
            audioPlayer.stop();
            return;
        }
        const url = await resolveUrl();
        if (!mounted.current)
            return;
        if (!url?.length) {
            playbackFailed();
            return;
        }
        audioPlayer.setVolume(volume);
        audioPlayer.play(url);
    }
    async function selectAudio() {
        if (!video.id.length)
            return;
        setDownloading(true);
        try {
            await selectNewAudio({
                title: video.title,
                videoId: video.id,
                audioUrl: audioUrl ?? directUrl(video) ?? ''
            });
            if (mounted.current)
                setDownloaded(true);
        }
        finally {
            if (mounted.current)
                setDownloading(false);
        }
    }
    const isItunes = provider === 'itunes';
    const badgeInfo = BADGES[provider];
    const busy = resolving || downloading;
    return (window.SP_REACT.createElement("div", null,
        window.SP_REACT.createElement(DFL.Focusable, { style: {
                background: 'var(--main-editor-bg-color)',
                borderRadius: '6px',
                display: 'grid',
                gridTemplateRows: 'max-content max-content max-content',
                overflow: 'hidden',
                padding: '10px',
                width: '230px'
            } },
            window.SP_REACT.createElement("div", { style: {
                    position: 'relative',
                    width: '100%',
                    aspectRatio: isItunes ? '1/1' : '16/9',
                    maxWidth: '230px',
                    margin: '0 auto',
                    overflow: 'hidden',
                    background: '#222',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                } },
                video.thumbnail ? (window.SP_REACT.createElement("img", { src: video.thumbnail, alt: video.title, loading: "lazy", style: {
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '6px',
                        display: 'block',
                        background: '#222'
                    } })) : (window.SP_REACT.createElement(FaMusic, { size: 48, color: "#666" })),
                window.SP_REACT.createElement("div", { style: {
                        position: 'absolute',
                        top: 6,
                        left: 6,
                        background: 'rgba(255,255,255,0.85)',
                        borderRadius: '4px',
                        padding: '2px 6px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 4,
                        fontSize: '12px',
                        fontWeight: 600,
                        color: badgeInfo.color,
                        zIndex: 2
                    } },
                    badgeInfo.icon,
                    badgeInfo.label)),
            window.SP_REACT.createElement("p", { style: {
                    color: 'var(--main-editor-text-color)',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    width: '230px',
                    height: '68px'
                } }, video.title),
            window.SP_REACT.createElement("div", { style: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                    width: '230px'
                } },
                window.SP_REACT.createElement(DFL.DialogButton, { onClick: togglePlay, disabled: busy, focusable: !busy }, resolving ? (window.SP_REACT.createElement(Spinner, null)) : audioPlayer.isPlaying ? (t('stop')) : (t('play'))),
                window.SP_REACT.createElement("div", { style: { position: 'relative' } },
                    window.SP_REACT.createElement(DFL.DialogButton, { disabled: selected || busy, focusable: !selected && !busy, onClick: selectAudio }, selected
                        ? t('selected')
                        : downloading
                            ? t('downloading')
                            : downloaded
                                ? t('select')
                                : t('download')),
                    selected || downloaded ? (window.SP_REACT.createElement("div", { style: {
                            height: '20px',
                            width: '20px',
                            position: 'absolute',
                            bottom: '-6px',
                            right: '-6px',
                            background: selected ? '#59bf40' : '#4a6b8a',
                            borderRadius: '50%',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        } },
                        window.SP_REACT.createElement(FaCheck, null))) : (''))))));
}

function NoMusic({ selected, selectNewAudio }) {
    const t = useTranslations();
    return (window.SP_REACT.createElement("div", null,
        window.SP_REACT.createElement(DFL.Focusable, { style: {
                background: 'var(--main-editor-bg-color)',
                borderRadius: '6px',
                display: 'grid',
                gridTemplateRows: '95px max-content max-content',
                overflow: 'hidden',
                padding: '10px',
                width: '170px'
            } },
            window.SP_REACT.createElement("div", { style: {
                    overflow: 'hidden',
                    width: '170px',
                    height: '95px',
                    borderRadius: '6px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                } },
                window.SP_REACT.createElement(FaVolumeMute, { size: "md" })),
            window.SP_REACT.createElement("p", { style: {
                    color: 'var(--main-editor-text-color)',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    width: '170px',
                    height: '68px'
                } }, t('noMusicLabel')),
            window.SP_REACT.createElement("div", { style: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                    width: '170px'
                } },
                window.SP_REACT.createElement(DFL.DialogButton, { disabled: true, focusable: false }, t('play')),
                window.SP_REACT.createElement("div", { style: { position: 'relative' } },
                    window.SP_REACT.createElement(DFL.DialogButton, { disabled: selected, focusable: !selected, onClick: () => selectNewAudio({
                            title: '',
                            videoId: '',
                            audioUrl: ''
                        }) }, selected ? t('selected') : t('select')),
                    selected ? (window.SP_REACT.createElement("div", { style: {
                            height: '20px',
                            width: '20px',
                            position: 'absolute',
                            bottom: '-6px',
                            right: '-6px',
                            background: '#59bf40',
                            borderRadius: '50%',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        } },
                        window.SP_REACT.createElement(FaCheck, null))) : (''))))));
}

function FileBrowser({ onFileSelected }) {
    const isWindows = navigator.platform.startsWith('Win');
    const defaultPath = isWindows ? 'C:\\' : '/home/deck';
    const [currentPath, setCurrentPath] = SP_REACT.useState(defaultPath);
    const [entries, setEntries] = SP_REACT.useState([]);
    const [loading, setLoading] = SP_REACT.useState(false);
    const [error, setError] = SP_REACT.useState('');
    const audioExtensions = [
        '.mp3',
        '.m4a',
        '.webm',
        '.ogg',
        '.wav',
        '.flac',
        '.aac',
        '.opus'
    ];
    SP_REACT.useEffect(() => {
        loadDirectory(currentPath).then(() => {
            return;
        });
    }, [currentPath]);
    async function loadDirectory(path) {
        setLoading(true);
        setError('');
        try {
            const result = await call('list_directory', path);
            if (result && result.entries) {
                const fileEntries = result.entries.map((entry) => ({
                    name: entry.name,
                    path: entry.path,
                    isDirectory: entry.is_directory,
                    isAudio: !entry.is_directory &&
                        audioExtensions.some((ext) => entry.name.toLowerCase().endsWith(ext))
                }));
                fileEntries.sort((a, b) => {
                    if (a.isDirectory && !b.isDirectory)
                        return -1;
                    if (!a.isDirectory && b.isDirectory)
                        return 1;
                    return a.name.localeCompare(b.name);
                });
                setEntries(fileEntries);
            }
        }
        catch (e) {
            console.error('Failed to load directory:', e);
            setError(`Failed to load directory: ${String(e)}`);
        }
        finally {
            setLoading(false);
        }
    }
    function goToParent() {
        if (isWindows) {
            const normalized = currentPath.replace(/\\+$/, '');
            const idx = normalized.lastIndexOf('\\');
            if (idx > 2) {
                setCurrentPath(normalized.slice(0, idx));
            }
            else {
                setCurrentPath(normalized.slice(0, 3));
            }
        }
        else {
            const parent = currentPath.split('/').slice(0, -1).join('/') || '/';
            setCurrentPath(parent);
        }
    }
    function goToHome() {
        setCurrentPath(defaultPath);
    }
    function handleEntryClick(entry) {
        if (entry.isDirectory) {
            setCurrentPath(entry.path);
        }
        else if (entry.isAudio && onFileSelected) {
            onFileSelected(entry.path, entry.name);
        }
    }
    return (window.SP_REACT.createElement(DFL.PanelSection, { title: "Browse Music Files" },
        window.SP_REACT.createElement(DFL.PanelSectionRow, null,
            window.SP_REACT.createElement(DFL.Focusable, { style: {
                    display: 'flex',
                    gap: '8px',
                    marginBottom: '10px',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    width: '100%'
                } },
                window.SP_REACT.createElement(DFL.DialogButton, { style: { minWidth: '40px', padding: '8px', flex: '0 0 auto' }, onClick: goToHome, disabled: loading },
                    window.SP_REACT.createElement(FaHome, null)),
                window.SP_REACT.createElement(DFL.DialogButton, { style: { minWidth: '40px', padding: '8px', flex: '0 0 auto' }, onClick: goToParent, disabled: loading || currentPath === '/' },
                    window.SP_REACT.createElement(FaLevelUpAlt, null)),
                window.SP_REACT.createElement("div", { style: {
                        flex: '1 1 120px',
                        minWidth: 0,
                        padding: '8px',
                        background: 'rgba(0,0,0,0.2)',
                        borderRadius: '4px',
                        fontSize: '12px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        maxWidth: '100%'
                    } }, currentPath))),
        error && (window.SP_REACT.createElement(DFL.PanelSectionRow, null,
            window.SP_REACT.createElement("div", { style: { color: '#ff6b6b', fontSize: '12px' } }, error))),
        window.SP_REACT.createElement(DFL.PanelSectionRow, null,
            window.SP_REACT.createElement(DFL.Focusable, { style: {
                    maxHeight: '50vh',
                    minHeight: '120px',
                    overflowY: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    width: '100%'
                } }, loading ? (window.SP_REACT.createElement("div", { style: { padding: '20px', textAlign: 'center', opacity: 0.7 } }, "Loading...")) : entries.length === 0 ? (window.SP_REACT.createElement("div", { style: { padding: '20px', textAlign: 'center', opacity: 0.7 } }, "Empty directory")) : (entries.map((entry) => (window.SP_REACT.createElement(DFL.DialogButton, { key: entry.path, style: {
                    justifyContent: 'flex-start',
                    padding: '10px',
                    background: entry.isAudio
                        ? 'rgba(100, 200, 100, 0.1)'
                        : 'rgba(0, 0, 0, 0.2)',
                    borderLeft: entry.isAudio ? '3px solid #64c864' : 'none',
                    width: '100%',
                    minWidth: 0,
                    boxSizing: 'border-box',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    height: '44px',
                    display: 'flex',
                    alignItems: 'center'
                }, onClick: () => handleEntryClick(entry) },
                window.SP_REACT.createElement("div", { style: {
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        minWidth: 0,
                        width: '100%'
                    } },
                    entry.isDirectory ? (window.SP_REACT.createElement(FaFolder, { style: { color: '#ffd93d' } })) : entry.isAudio ? (window.SP_REACT.createElement(FaMusic, { style: { color: '#64c864' } })) : (window.SP_REACT.createElement("div", { style: { width: '16px' } })),
                    window.SP_REACT.createElement("span", { style: {
                            fontSize: '13px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            minWidth: 0,
                            flex: 1
                        } }, entry.name)))))))),
        window.SP_REACT.createElement(DFL.PanelSectionRow, null,
            window.SP_REACT.createElement("div", { style: { fontSize: '11px', opacity: 0.6, marginTop: '8px' } }, "Supported: MP3, M4A, WebM, OGG, WAV, FLAC, AAC, OPUS"))));
}

const SuccessModalContent = ({ message, closeModal }) => (window.SP_REACT.createElement(DFL.ModalRoot, null,
    window.SP_REACT.createElement("div", { style: { padding: 24, textAlign: 'center' } },
        window.SP_REACT.createElement("h3", null, "Success"),
        window.SP_REACT.createElement("div", { style: { margin: '16px 0' } }, message),
        window.SP_REACT.createElement(DFL.DialogButton, { onClick: closeModal }, "Close"))));
function showSuccessModal(message) {
    DFL.showModal(window.SP_REACT.createElement(SuccessModalContent, { message: message }));
}
function LocalMusicImport({ selectNewAudio }) {
    const [customName, setCustomName] = SP_REACT.useState('');
    const [selectedFile, setSelectedFile] = SP_REACT.useState('');
    async function handleFileSelect(filePath, fileName) {
        setSelectedFile(fileName);
        const id = `local_${fileName.replace(/\.[^/.]+$/, '')}`;
        const importResult = await call('import_local_music', filePath, fileName.replace(/\.[^/.]+$/, ''));
        if (!importResult) {
            showSuccessModal('Failed to import music file.');
            return;
        }
        if (selectNewAudio) {
            const res = await call('get_local_music_url', id);
            if (res) {
                await selectNewAudio({
                    title: fileName.replace(/\.[^/.]+$/, ''),
                    videoId: id,
                    audioUrl: res
                });
                showSuccessModal('Music imported successfully!');
            }
        }
    }
    const [showLocal, setShowLocal] = SP_REACT.useState(false);
    return (window.SP_REACT.createElement(window.SP_REACT.Fragment, null,
        window.SP_REACT.createElement(DFL.DialogButton, { style: { marginBottom: 12, alignSelf: 'flex-start' }, onClick: () => setShowLocal((v) => !v) }, showLocal ? 'Hide Local Import Panel' : 'Show Local Import Panel'),
        showLocal && (window.SP_REACT.createElement(DFL.PanelSection, { title: "Import Music from Filesystem" },
            window.SP_REACT.createElement(DFL.PanelSectionRow, null,
                window.SP_REACT.createElement(DFL.Focusable, { style: { display: 'flex', flexDirection: 'column', gap: '8px' } },
                    window.SP_REACT.createElement(DFL.TextField, { label: "Custom Name (Optional)", value: customName, onChange: (e) => setCustomName(e.target.value) }),
                    selectedFile && (window.SP_REACT.createElement("div", { style: {
                            fontSize: '12px',
                            opacity: 0.7,
                            padding: '8px',
                            background: 'rgba(100, 200, 100, 0.1)',
                            borderRadius: '4px'
                        } }, `Last imported: ${selectedFile}`)))),
            window.SP_REACT.createElement(DFL.PanelSectionRow, null,
                window.SP_REACT.createElement(FileBrowser, { onFileSelected: handleFileSelect }))))));
}

function ChangePage({ customSearch, currentSearch, setInitialSearch, loading, videos }) {
    const t = useTranslations();
    const { settings } = useSettings();
    const { appid } = DFL.useParams();
    const appDetails = appStore.GetAppOverviewByGameID(parseInt(appid));
    const appName = appDetails?.display_name?.replace(/([™®©])/g, '');
    const [selected, setSelected] = SP_REACT.useState();
    const [searchTerm, setSearchTerm] = SP_REACT.useState(currentSearch);
    SP_REACT.useEffect(() => {
        async function getData() {
            const cache = await getCache(parseInt(appid));
            setSelected(cache?.videoId);
        }
        getData().then(() => {
            return;
        });
    }, [appid]);
    async function selectNewAudio(audio) {
        if (!shouldSkipAudioDownload(audio.videoId)) {
            const success = await getResolverForVideoId(audio.videoId).downloadAudio({
                id: audio.videoId,
                url: audio.audioUrl
            });
            if (!success) {
                DFL.showModal(window.SP_REACT.createElement(DFL.ModalRoot, null, t('downloadFailedDetail')), undefined, { strTitle: t('downloadFailed') });
                return;
            }
        }
        setSelected(audio.videoId);
        await updateCache(parseInt(appid), { videoId: audio.videoId });
    }
    return (window.SP_REACT.createElement("div", null,
        window.SP_REACT.createElement("h2", { style: { margin: '20px 0' } }, appName),
        window.SP_REACT.createElement(LocalMusicImport, { selectNewAudio: selectNewAudio }),
        window.SP_REACT.createElement(DFL.PanelSection, null,
            window.SP_REACT.createElement(DFL.PanelSectionRow, null,
                window.SP_REACT.createElement(DFL.Focusable, { style: {
                        display: 'grid',
                        gap: '6px',
                        gridTemplateColumns: '2fr max-content max-content',
                        height: 'max-content',
                        background: 'var(--main-editor-bg-color)',
                        borderRadius: '6px',
                        padding: '10px'
                    } },
                    window.SP_REACT.createElement("form", { onSubmit: (e) => {
                            e.preventDefault();
                            customSearch(searchTerm);
                        } },
                        window.SP_REACT.createElement(DFL.TextField, { onChange: (e) => setSearchTerm(e.target.value), value: searchTerm })),
                    window.SP_REACT.createElement(DFL.DialogButton, { disabled: !searchTerm?.length, focusable: !loading && Boolean(searchTerm?.length), onClick: () => customSearch(searchTerm) }, t('search')),
                    window.SP_REACT.createElement(DFL.DialogButton, { disabled: !searchTerm?.length, focusable: !loading && Boolean(searchTerm?.length), onClick: () => {
                            setSearchTerm(setInitialSearch());
                        } }, t('reset'))))),
        loading && videos?.length === 0 ? (window.SP_REACT.createElement(SteamSpinner, null)) : (window.SP_REACT.createElement(window.SP_REACT.Fragment, null,
            window.SP_REACT.createElement(DFL.Focusable, { style: {
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '10px',
                    flexDirection: 'row'
                } },
                window.SP_REACT.createElement(NoMusic, { selected: selected === '', selectNewAudio: selectNewAudio }),
                videos.map((video) => (window.SP_REACT.createElement(AudioPlayer, { key: video.id, video: video, volume: settings.volume, selected: selected === video.id, selectNewAudio: selectNewAudio }))),
                loading && window.SP_REACT.createElement(SteamSpinner, null))))));
}

function AboutPage() {
    const t = useTranslations();
    return (window.SP_REACT.createElement("div", null,
        window.SP_REACT.createElement("h1", null, t('aboutLabel')),
        window.SP_REACT.createElement("p", null, t('aboutDescription')),
        window.SP_REACT.createElement("h2", null, t('extras')),
        window.SP_REACT.createElement(DFL.PanelSection, null,
            window.SP_REACT.createElement(PanelSocialButton, { icon: window.SP_REACT.createElement(SiKofi, { fill: "#FF5E5B" }), url: "https://ko-fi.com/Nytuo" }, "Ko-fi"),
            window.SP_REACT.createElement(PanelSocialButton, { icon: window.SP_REACT.createElement(SiDiscord, { fill: "#5865F2" }), url: "https://deckbrew.xyz/discord" }, "Discord"),
            window.SP_REACT.createElement(PanelSocialButton, { icon: window.SP_REACT.createElement(SiGithub, { fill: "#f5f5f5" }), url: "https://github.com/Nytuo/SDH-GameThemeMusic/" }, "Github"),
            window.SP_REACT.createElement(PanelSocialButton, { icon: window.SP_REACT.createElement(SiCrowdin, { fill: "#FFFFFF" }), url: "https://crowdin.com/project/sdh-gamethememusic" }, t('helpTranslate')))));
}

function GameSettings() {
    const t = useTranslations();
    const { settings, isLoading: settingsIsLoading } = useSettings();
    const { appid } = DFL.useParams();
    const appId = parseInt(appid);
    const appName = getAppName(appId);
    const { audio, isLoading: loading } = useThemeMusic(appId);
    const [themeVolume, setThemeVolume] = SP_REACT.useState(settings.volume);
    const audioPlayer = useAudioPlayer(audio.audioUrl, 'preview');
    SP_REACT.useEffect(() => {
        let ignore = false;
        if (!settingsIsLoading) {
            getCache(appId).then((cache) => {
                if (ignore)
                    return;
                const volume = typeof cache?.volume === 'number' && isFinite(cache.volume)
                    ? cache.volume
                    : settings.volume;
                setThemeVolume(volume);
                audioPlayer.setVolume(volume);
            });
        }
        return () => {
            ignore = true;
        };
    }, [appId, settingsIsLoading]);
    function updateThemeVolume(newVol, reset) {
        setThemeVolume(newVol);
        audioPlayer.setVolume(newVol);
        updateCache(appId, { volume: reset ? undefined : newVol }).catch(console.error);
    }
    return (window.SP_REACT.createElement("div", null,
        window.SP_REACT.createElement("h2", { style: { margin: '20px 0' } }, appName),
        window.SP_REACT.createElement(DFL.Focusable, { style: {
                background: 'var(--main-editor-bg-color)',
                borderRadius: '6px',
                display: 'grid',
                gridGap: '16px',
                gridTemplateColumns: '2fr max-content max-content',
                height: 'max-content',
                padding: '10px 10px 10px 16px',
                alignItems: 'center'
            } },
            window.SP_REACT.createElement("div", { style: { padding: '0 10px' } },
                window.SP_REACT.createElement(DFL.PanelSectionRow, null,
                    window.SP_REACT.createElement(DFL.SliderField, { layout: "below", bottomSeparator: "none", label: t('volume'), description: t('gameVolumeDescription'), value: themeVolume * 100, onChange: (newVal) => updateThemeVolume(newVal / 100), min: 0, max: 100, step: 1, icon: window.SP_REACT.createElement(FaVolumeUp, null), editableValue: true }))),
            window.SP_REACT.createElement(DFL.DialogButton, { onClick: audioPlayer.togglePlay, disabled: loading || !audio.audioUrl, focusable: !loading && !!audio.audioUrl, style: { height: 'max-content' } }, loading ? (window.SP_REACT.createElement(Spinner, null)) : audioPlayer.isPlaying ? (t('stop')) : (t('play'))),
            window.SP_REACT.createElement(DFL.DialogButton, { onClick: () => updateThemeVolume(settings.volume, true), style: { height: 'max-content' } }, t('resetVolume')))));
}

function ChangeTheme() {
    const [currentTab, setCurrentTab] = SP_REACT.useState('change-music-tab');
    const t = useTranslations();
    const { isLoading: settingsLoading } = useSettings();
    const { appid } = DFL.useParams();
    const appName = getAppName(parseInt(appid));
    const [results, setResults] = SP_REACT.useState({});
    const [loadingNum, setLoadingNum] = SP_REACT.useState(0);
    const initialSearch = appName?.concat(' main theme') ?? '';
    const [searchTerm, setSearchTerm] = SP_REACT.useState(initialSearch);
    SP_REACT.useEffect(() => {
        if (!searchTerm.length || settingsLoading)
            return;
        let ignore = false;
        setResults({});
        // Each provider fills its own bucket in one update once it finishes, so
        // fast providers don't wait for slow ones and the list doesn't re-render
        // on every streamed item.
        SEARCH_PROVIDERS.forEach(async (provider) => {
            setLoadingNum((x) => x + 1);
            const seen = new Set();
            const found = [];
            try {
                for await (const video of getResolver(provider).getSearchResults(searchTerm)) {
                    if (ignore)
                        break;
                    if (!video?.id || seen.has(video.id))
                        continue;
                    seen.add(video.id);
                    found.push(video);
                }
            }
            catch (e) {
                console.error(`Error searching ${provider}:`, e);
            }
            finally {
                if (!ignore && found.length) {
                    setResults((old) => ({ ...old, [provider]: found }));
                }
                setLoadingNum((x) => x - 1);
            }
        });
        return () => {
            ignore = true;
        };
    }, [searchTerm, settingsLoading]);
    const videos = SEARCH_PROVIDERS.flatMap((provider) => results[provider] ?? []);
    function setInitialSearch() {
        setSearchTerm(initialSearch);
        return initialSearch;
    }
    return (window.SP_REACT.createElement("div", { style: {
            marginTop: '40px',
            height: 'calc(100% - 40px)'
        } },
        window.SP_REACT.createElement(DFL.Tabs, { autoFocusContents: true, activeTab: currentTab, onShowTab: setCurrentTab, tabs: [
                {
                    title: t('changeThemeMusic'),
                    content: (window.SP_REACT.createElement(ChangePage, { videos: videos, loading: loadingNum > 0, customSearch: setSearchTerm, currentSearch: searchTerm, setInitialSearch: setInitialSearch })),
                    id: 'change-music-tab'
                },
                {
                    title: t('gameSettings'),
                    content: window.SP_REACT.createElement(GameSettings, null),
                    id: 'game-settings-tab'
                },
                { title: t('about'), content: window.SP_REACT.createElement(AboutPage, null), id: 'about-tab' }
            ] })));
}

/** EUIMode.Desktop – Steam left Big Picture / Game Mode. */
const UI_MODE_DESKTOP = 7;
const WATCHDOG_INTERVAL_MS = 1000;
const steamClient = () => globalThis.SteamClient;
function register(target, method, callback) {
    try {
        if (typeof target?.[method] !== 'function')
            return null;
        const handle = target[method](callback);
        if (handle && typeof handle.unregister === 'function')
            return handle;
    }
    catch (e) {
        console.warn('[GameThemeMusic] Could not register Steam callback', e);
    }
    return null;
}
/** True when the Big Picture window is gone or closed. */
function isGamepadUIClosed() {
    try {
        const store = DFL.Router?.WindowStore;
        if (!store)
            return false; // unknown client layout, don't block playback
        const main = store.GamepadUIMainWindowInstance;
        if (!main)
            return true;
        return main.BrowserWindow?.closed === true;
    }
    catch {
        return false;
    }
}
const VIDEO_EVENTS = [
    'play',
    'playing',
    'pause',
    'ended',
    'emptied',
    'volumechange'
];
function getWatchedDocuments() {
    const docs = [];
    try {
        const main = DFL.Router?.WindowStore?.GamepadUIMainWindowInstance;
        const doc = main?.BrowserWindow?.document;
        if (doc && typeof doc.querySelectorAll === 'function')
            docs.push(doc);
    }
    catch {
        /* window gone */
    }
    if (typeof document !== 'undefined' && !docs.includes(document)) {
        docs.push(document);
    }
    return docs;
}
/**
 * True while a video with sound is playing, e.g. the Big Picture startup
 * movie. Looping or muted videos (animated backgrounds) are ignored.
 */
function isAudibleVideoPlaying(docs = getWatchedDocuments()) {
    try {
        return docs.some((doc) => Array.from(doc.querySelectorAll('video')).some((video) => !video.paused &&
            !video.ended &&
            !video.muted &&
            !video.loop &&
            video.volume > 0));
    }
    catch {
        return false;
    }
}
/**
 * Suspend playback whenever Steam is not showing Big Picture / Game Mode,
 * the device goes to sleep, or a video with sound (the startup movie) plays. Calls `onChange(true)` to suspend and
 * `onChange(false)` to allow playback again. Returns a disposer.
 */
function startPlaybackGuard(onChange) {
    let desktopMode = false;
    let sleeping = false;
    let windowClosed = isGamepadUIClosed();
    let videoPlaying = isAudibleVideoPlaying();
    let last = null;
    const update = () => {
        const suspended = desktopMode || sleeping || windowClosed || videoPlaying;
        if (suspended !== last) {
            last = suspended;
            onChange(suspended);
        }
    };
    const onUIMode = (mode) => {
        desktopMode = mode === UI_MODE_DESKTOP;
        update();
    };
    const handles = [
        register(steamClient()?.UI, 'RegisterForUIModeChanged', onUIMode),
        register(steamClient()?.System, 'RegisterForOnSuspendRequest', () => {
            sleeping = true;
            update();
        }),
        register(steamClient()?.System, 'RegisterForOnResumeFromSuspend', () => {
            sleeping = false;
            update();
        })
    ];
    try {
        const pending = steamClient()?.UI?.GetUIMode?.();
        if (pending && typeof pending.then === 'function') {
            pending.then(onUIMode).catch(() => { });
        }
    }
    catch {
        /* older clients */
    }
    // Media events don't bubble, so listen in the capture phase.
    const onVideoEvent = (event) => {
        if (event.target?.tagName !== 'VIDEO')
            return;
        videoPlaying = isAudibleVideoPlaying();
        update();
    };
    const listened = new Set();
    const listenToVideos = () => {
        for (const doc of getWatchedDocuments()) {
            if (listened.has(doc))
                continue;
            try {
                VIDEO_EVENTS.forEach((e) => doc.addEventListener(e, onVideoEvent, true));
                listened.add(doc);
            }
            catch {
                /* detached document */
            }
        }
    };
    const unlistenToVideos = () => {
        listened.forEach((doc) => {
            try {
                VIDEO_EVENTS.forEach((e) => doc.removeEventListener(e, onVideoEvent, true));
            }
            catch {
                /* window gone */
            }
        });
        listened.clear();
    };
    listenToVideos();
    const watchdog = setInterval(() => {
        windowClosed = isGamepadUIClosed();
        listenToVideos();
        videoPlaying = isAudibleVideoPlaying();
        update();
    }, WATCHDOG_INTERVAL_MS);
    update();
    return () => {
        clearInterval(watchdog);
        unlistenToVideos();
        handles.forEach((h) => {
            try {
                h?.unregister();
            }
            catch {
                /* already gone */
            }
        });
    };
}

var index = definePlugin(() => {
    const state = new AudioLoaderCompatState();
    // Games already running when the plugin (re)loads.
    try {
        const running = (DFL.Router?.RunningApps ?? [])
            .map((app) => Number(app.appid))
            .filter((appid) => Number.isFinite(appid) && appid > 0);
        if (running.length)
            state.setGamesRunning(running);
    }
    catch {
        /* Router not ready */
    }
    const stopPlaybackGuard = startPlaybackGuard((suspended) => state.setSuspended(suspended));
    const libraryPatch = patchLibraryApp(state);
    const GlobalPlayer = () => (window.SP_REACT.createElement(AudioLoaderCompatStateContextProvider, { AudioLoaderCompatStateClass: state },
        window.SP_REACT.createElement(FocusedGameThemePlayer, null)));
    routerHook.addGlobalComponent('GTMFocusedPlayer', GlobalPlayer);
    routerHook.addRoute('/gamethememusic/:appid', () => (window.SP_REACT.createElement(AudioLoaderCompatStateContextProvider, { AudioLoaderCompatStateClass: state },
        window.SP_REACT.createElement(ChangeTheme, null))), {
        exact: true
    });
    let patchedMenu = null;
    try {
        if (LibraryContextMenu) {
            patchedMenu = contextMenuPatch(LibraryContextMenu);
        }
    }
    catch (e) {
        console.warn('[GameThemeMusic] Failed to patch context menu:', e);
    }
    const AppStateRegistrar = SteamClient.GameSessions.RegisterForAppLifetimeNotifications((update) => {
        const { gamesRunning } = state.getPublicState();
        const setGamesRunning = state.setGamesRunning.bind(state);
        if (update.bRunning) {
            setGamesRunning([...gamesRunning, update.unAppID]);
        }
        else {
            const filteredGames = gamesRunning.filter((e) => e !== update.unAppID);
            setGamesRunning(filteredGames);
        }
    });
    return {
        name: {"name":"Game Theme Music"}.name,
        titleView: window.SP_REACT.createElement("div", { className: DFL.staticClasses.Title }, {"name":"Game Theme Music"}.name),
        icon: window.SP_REACT.createElement(GiMusicalNotes, null),
        content: window.SP_REACT.createElement(Index, null),
        onDismount() {
            stopPlaybackGuard();
            AppStateRegistrar.unregister();
            routerHook.removePatch('/library/app/:appid', libraryPatch);
            routerHook.removeRoute('/gamethememusic/:appid');
            routerHook.removeGlobalComponent('GTMFocusedPlayer');
            patchedMenu?.unpatch();
            destroyAudioChannels();
        }
    };
});

export { index as default };
//# sourceMappingURL=index.js.map
