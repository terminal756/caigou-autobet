/* eslint-disable */
import { egret } from './egret'

let Core,
  __reflect =
    (this && this.__reflect) ||
    function (_e_, _t_, _n_) {
      ;(_e_.__class__ = _t_),
        _n_ ? _n_.push(_t_) : (_n_ = [_t_]),
        (_e_.__types__ = _e_.__types__ ? _n_.concat(_e_.__types__) : _n_)
    }
;(function (_e_) {
  ;(_e_.CDN_TIMEOUT = 8e3),
    (_e_.DEV_PC = 'PC'),
    (_e_.DEV_MOBILE = 'MOBILE'),
    (_e_.ENV_QA = 'QA'),
    (_e_.ENV_UAT = 'UAT'),
    (_e_.ENV_PROD = 'PROD'),
    (_e_.ORI_PORTRAIT = 'portrait'),
    (_e_.ORI_LANDSCAPE = 'landscape'),
    (_e_.LANG_HANS = 'hans'),
    (_e_.LANG_HANT = 'hant'),
    (_e_.LANG_EN = 'en'),
    (_e_.LANG_JA = 'ja'),
    (_e_.LANG_TH = 'th'),
    (_e_.LANG_KO = 'ko'),
    (_e_.LANG_ID = 'id'),
    (_e_.LANG_VI = 'vi'),
    (_e_.LANG_KM = 'km'),
    (_e_.LANG_PT = 'pt'),
    (_e_.LANG_MY = 'my'),
    (_e_.LANG_CANDIDATE_LIST = [
      _e_.LANG_HANS,
      _e_.LANG_HANT,
      _e_.LANG_EN,
      _e_.LANG_KO,
      _e_.LANG_JA,
      _e_.LANG_TH,
      _e_.LANG_ID,
      _e_.LANG_VI,
      _e_.LANG_KM,
      _e_.LANG_PT,
      _e_.LANG_MY
    ]),
    (_e_.LANG_SOUND_SUPPORTED = [_e_.LANG_HANS, _e_.LANG_HANT, _e_.LANG_EN, _e_.LANG_KO, _e_.LANG_JA]),
    (_e_.LANG_DEFAULT = _e_.LANG_EN),
    (_e_.LANG_BACKUP = _e_.LANG_EN),
    (_e_.LANG_CNS_XML = 'lang_cns'),
    (_e_.LANG_CNR_XML = 'lang_cnr'),
    (_e_.LANG_EN_XML = 'lang_english'),
    (_e_.LANG_ZH_CONF = 'ZH'),
    (_e_.LANG_TR_CONF = 'TR'),
    (_e_.LANG_EN_CONF = 'EN'),
    (_e_.LANG_JP_CONF = 'JP'),
    (_e_.LANG_KR_CONF = 'KR'),
    (_e_.LANG_TH_CONF = 'TH'),
    (_e_.LANG_VT_CONF = 'VT'),
    (_e_.LANG_ID_CONF = 'ID'),
    (_e_.LANG_KM_CONF = 'KM'),
    (_e_.LANG_PT_CONF = 'PT'),
    (_e_.LANG_MY_CONF = 'MY'),
    (_e_.LANG_ANY_CONF = '*'),
    (_e_.LOGIN_TYPE_NORMAL = 'normal'),
    (_e_.LOGIN_TYPE_XIN = 'xin'),
    (_e_.LOGIN_TYPE_AIRLOGIN = 'airlogin'),
    (_e_.LOGIN_TYPE_EXWALLET = 'exwallet'),
    (_e_.LOGIN_TYPE_WALLET = 'wallet'),
    (_e_.LOGIN_TYPE_REDIRECT = 'redirect'),
    (_e_.LOGIN_TYPE_LINK = 'link'),
    (_e_.CHANNEL_TAG_BGM = '[BGM]'),
    (_e_.CHANNEL_TAG_GAME = '[GAME]'),
    (_e_.CHANNEL_TAG_LIVE = '[LIVE]'),
    (_e_.CHANNEL_TAG_DEFAULT = '[DEFAULT]'),
    (_e_.CHANNEL_TAG_EFFECT = '[EFFECT]'),
    (_e_.EVENT_COMPLETE = 'EVENT_COMPLETE'),
    (_e_.EVENT_PROGRESS = 'EVENT_PROGRESS'),
    (_e_.EVENT_RELEASE = 'EVENT_RELEASE'),
    (_e_.TAG_SILENT_LOADER = 'TAG_SILENT_LOADER'),
    (_e_.TAG_URGENT_LOADER = 'TAG_URGENT_LOADER'),
    (_e_._c_ = 'ACTION_INIT'),
    (_e_._Cc_ = 'ACTION_INIT_CHILDREN'),
    (_e_._X_ = 'ACTION_LANG_CHANGE'),
    (_e_._lc_ = 'ACTION_LOGIN_FAILD'),
    (_e_._mc_ = 'ACTION_LOGIN_SUCCESS'),
    (_e_._dc_ = 'ACTION_LOGIN_PWD_INVALID'),
    (_e_._vc_ = 'ACTION_LOGIN_USER_INVALID'),
    (_e_._Gc_ = 'ACTION_ENTER_SUCCESS'),
    (_e_._fn_ = 'ACTION_ENTER_MAINTAIN'),
    (_e_._Cn_ = 'ACTION_ENTER_NEED_LOGIN'),
    (_e_._ln_ = 'ACTION_ENTER_NO_DEMO'),
    (_e_.__c_ = 'ACTION_ENTER_CURR_UNSUPPORT'),
    (_e_._Pc_ = 'ACTION_UPDATE_NICK'),
    (_e_._rs_ = 'ACTION_CHANGE_SCENE'),
    (_e_._ed_ = 'ACTION_SWITCH_TABLE'),
    (_e_._Jh_ = 'ACTION_ADD_TOP_POPUP'),
    (_e_._Mh_ = 'ACTION_ADD_TOP_POPUP_PARAM'),
    (_e_._sn_ = 'ACTION_REMOVE_TOP_POPUP'),
    (_e_._qh_ = 'ACTION_CLEAR_TOP_POPUP'),
    (_e_._bc_ = 'ACTION_CHANGE_LANG_LOAD'),
    (_e_._Bh_ = 'ACTION_CHANGE_GAME_CHECK'),
    (_e_._Jr_ = 'ACTION_SAVE_CHANGE_GAME_INFO'),
    (_e_._ld_ = 'ACTION_ADD_EVENT_POPUP'),
    (_e_._md_ = 'ACTION_REMOVE_EVENT_POPUP'),
    (_e_._dd_ = 'ACTION_LOBBY_TOP_LOGO_LOAD_COMPLETE'),
    (_e_._Vc_ = 'ACTION_ADD_BET_HISTORY_POPUP'),
    (_e_._gc_ = 'ACTION_REMOVE_BET_HISTORY_POPUP'),
    (_e_._pc_ = 'ACTION_BET_HISTORY_NEXT_PAGE'),
    (_e_._kc_ = 'ACTION_BET_HISTORY_PREVIOUS_PAGE'),
    (_e_._wc_ = 'ACTION_GET_BET_HISTORY_RECORDS_BY_DATE'),
    (_e_._zc_ = 'ACTION_SHOW_ROU_FRENCH_BET_PANEL'),
    (_e_._Sc_ = 'ACTION_HIDE_ROU_FRENCH_BET_PANEL'),
    (_e_._yc_ = 'ACTION_SHOW_MY_BETS_PANEL'),
    (_e_._Ec_ = 'ACTION_HIDE_MY_BETS_PANEL'),
    (_e_._xc_ = 'ACTION_POP_VIDEO_ROU'),
    (_e_._Tc_ = 'ACTION_CLOSE_VIDEO_ROU'),
    (_e_._Oc_ = 'ACTION_LOGIN_LIVE_PLATFORM_SESSION_SUCCESS'),
    (_e_._V_ = 'ACTION_SOCKET_WRITE_FAIL'),
    (_e_._ac_ = 'ACTION_EU_TWEEN_COMPLETE'),
    (_e_._Om_ = 'ACTION_THIRD_CALL_UPDATE_BALANCE'),
    (_e_._Rm_ = 'ACTION_ENTER_THIRD_GAME'),
    (_e_.CHAT_LOGIN_TYPE = 5),
    (_e_.CHAT_PLAZA_LOGIN_VID = 'ALL'),
    (_e_.LOCALKEY_LANG = 'LOCALKEY_LANG'),
    (_e_.LOCALKEY_LANG_SOUND = 'LOCALKEY_LANG_SOUND'),
    (_e_.LOCALKEY_BGM_SOUND = 'LOCALKEY_BGM_SOUND'),
    (_e_.LOCALKEY_EGAME_SOUND = 'LOCALKEY_EGAME_SOUND'),
    (_e_.LOCALKEY_LIVE_SOUND = 'LOCALKEY_LIVE_SOUND'),
    (_e_.LOCALKEY_VIDEO_AUTO_CHANGE = 'LOCALKEY_VIDEO_AUTO_CHANGE'),
    (_e_.LOCALKEY_BGM_VOLUME = 'LOCALKEY_BGM_VOLUME'),
    (_e_.LOCALKEY_SOUND_VOLUME = 'LOCALKEY_SOUND_VOLUME'),
    (_e_.LOCALKEY_GAME_VOLUME = 'LOCALKEY_GAME_VOLUME'),
    (_e_.LOCALKEY_LIVE_VOLUME = 'LOCALKEY_LIVE_VOLUME'),
    (_e_._vd_ = 'ACTION_FORCE_KILL_IFRAME'),
    (_e_._Gd_ = 'ACTION_NAVLIST_CLICK'),
    (_e_.LAST_LOGIN_DATE = 'LAST_LOGIN_DATE'),
    (_e_.BET_AREA_PREFERENCE = 'BET_AREA_PREFERENCE'),
    (_e_.SWITCH_TABLE_ROAD_MODE = 'SWITCH_TABLE_ROAD_MODE'),
    (_e_._ka_ = 0),
    (_e_._Aa_ = 63),
    (_e_._Ic_ = 12),
    (_e_.__u_ = 30),
    (_e_._Rc_ = 30),
    (_e_._Pu_ = 16),
    (_e_._Lc_ = 100),
    (_e_._ba_ = 4),
    (_e_._Va_ = 4),
    (_e_._ga_ = 14),
    (_e_._pa_ = 4),
    (_e_._Zu_ = 6),
    (_e_._Bc_ = 12),
    (_e_._jc_ = 8),
    (_e_._Nc_ = 8),
    (_e_._Ac_ = 6),
    (_e_._Mc_ = 16),
    (_e_._Dc_ = 30),
    (_e_._Hc_ = 50),
    (_e_._Uc_ = 19),
    (_e_.__d_ = 10),
    (_e_._Pd_ = 16),
    (_e_._bd_ = 18),
    (_e_._rh_ = 'MULT'),
    (_e_._Fc_ = 'ROAD'),
    (_e_.EA_TIME_ZONE = -4),
    (_e_.GMT_2 = 2),
    (_e_.GMT_3 = 3),
    (_e_.SEC_MILLI = 1e3),
    (_e_.MINUTE_SEC = 60),
    (_e_.HOUR_MINUTE = 60),
    (_e_.DAY_HOUR = 24),
    (_e_.BAC_SECTION_TYPES = {
      FEATURED: 'FEATURED',
      OTHERS: 'OTHERS'
    }),
    (_e_.GA_CONFIGS = {
      ENTRY_POINT_START_TIME: '21:00:00',
      ENTRY_POINT_END_TIME: '22:00:00',
      FEATURE_SECTION: 'feature_section',
      GAME_SECTION: 'game_section',
      TABLE_SELECTOR: 'table_selector'
    })
})(Core || (Core = {}))
;(function (_e_) {
  var _t_
  ;((_t_ = _e_.Protocol || (_e_.Protocol = {})).KEEP_ALIVE = 1),
    (_t_.UCGATE_ALIVE = 8781826),
    (_t_.CLIENT_LOGIN = 65537),
    (_t_._Bf_ = 131073),
    (_t_._jf_ = 73729),
    (_t_._Nf_ = 131087),
    (_t_.CLIENT_LOGIN_TRIAL = 201392129),
    (_t_.CLIENT_DEMO_LOGIN = 201396241),
    (_t_.CHAT_LOGIN_SERVER = 397313),
    (_t_.CHAT_LOGIN_SERVER_TRIAL = 397312),
    (_t_.CHAT_LOGIN_SERVER_EXT = 401409),
    (_t_.CHAT_LOGIN_SERVER_EXT_TRIAL = 401408),
    (_t_._Af_ = 401410),
    (_t_.CHAT_DISABLE_KEY = 397314),
    (_t_.CHAT_ENTER_TABLE = 397315),
    (_t_._Mf_ = 399769),
    (_t_.CHAT_QUICK_MESSAGE_LIST = 397361),
    (_t_._Df_ = 397362),
    (_t_._Hf_ = 397575),
    (_t_._Uf_ = 397573),
    (_t_._Ff_ = 131082),
    (_t_.CHAT_SEND_MESSAGE = 397386),
    (_t_.CHAT_SEND_QUICK_MESSAGE = 397319),
    (_t_.CHAT_NICKNAME_CHANGE = 397345),
    (_t_.CHAT_REMOVE_MESSAGE = 397577),
    (_t_.CHAT_CLIENT_MESSAGE_XML = 401157),
    (_t_.CHAT_SERVER_MESSAGE_XML = 401153),
    (_t_.CHAT_SERVER_VALIDATE_MESSAGE = 398150),
    (_t_._Kf_ = 398151),
    (_t_.CLIENT_LOGIN_LIVE_PLATFORM_SESSION = 69669),
    (_t_.CLIENT_LOGIN_LIVE_PLATFORM_SESSION_TRIAL = 201396261),
    (_t_._Yf_ = 301569),
    (_t_._Zf_ = 301584),
    (_t_._Jf_ = 301825),
    (_t_.CRYPTO_USER_KEY_ACK = 301826),
    (_t_.CRYPTO_USER_SR = 301840),
    (_t_.USER_CHECK = 257),
    (_t_._Rf_ = 258)
})(Core || (Core = {}))
;(function (_s_) {
  function _n_(_e_) {
    var _t_,
      _n_ = ''
    if (!_e_) return _n_
    for (_t_ in _e_) 'object' == typeof _e_[_t_] || (_n_ += '&' + _t_ + '=' + _e_[_t_])
    return 0 < _n_.length && (_n_ = _n_.substr(1)), _n_
  }
  function _r_(_e_, _t_) {
    return (
      void 0 === _t_ && (_t_ = _s_.EA_TIME_ZONE), _e_ + (_a_ + _t_ * _s_.HOUR_MINUTE) * _s_.MINUTE_SEC * _s_.SEC_MILLI
    )
  }
  function _i_(_e_, _t_) {
    void 0 === _t_ && (_t_ = '')
    var _n_ = ''
    if (0 <= [_s_.LANG_HANS, _s_.LANG_HANT, ''].indexOf(_t_)) _n_ = (_e_.getMonth() + 1).toString()
    else {
      _n_ = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][_e_.getMonth()]
    }
    return _n_
  }
  function _o_(_e_, _t_, _n_) {
    void 0 === _n_ && (_n_ = '')
    var _r_ = {
      S: _t_.getMilliseconds(),
      'M+': _i_(_t_, _n_),
      'd+': _t_.getDate(),
      'h+': _t_.getHours() % 12 == 0 ? 12 : _t_.getHours() % 12,
      'H+': _t_.getHours(),
      'm+': _t_.getMinutes(),
      's+': _t_.getSeconds(),
      'q+': Math.floor((_t_.getMonth() + 3) / 3)
    }
    for (var _o_ in (/(y+)/.test(_e_) &&
      (_e_ = _e_.replace(RegExp.$1, (_t_.getFullYear() + '').substr(4 - RegExp.$1.length))),
    /(E+)/.test(_e_) &&
      (_e_ = _e_.replace(
        RegExp.$1,
        (1 < RegExp.$1.length ? (2 < RegExp.$1.length ? '/u661f/u671f' : '/u5468') : '') +
          {
            0: '/u65e5',
            1: '/u4e00',
            2: '/u4e8c',
            3: '/u4e09',
            4: '/u56db',
            5: '/u4e94',
            6: '/u516d'
          }[_t_.getDay() + '']
      )),
    _r_))
      new RegExp('(' + _o_ + ')').test(_e_) &&
        (_e_ = _e_.replace(
          RegExp.$1,
          1 == RegExp.$1.length ? _r_[_o_] : ('00' + _r_[_o_]).substr(('' + _r_[_o_]).length)
        ))
    return _e_
  }
  function _t_(_e_) {
    return (_e_ <= 9 ? '0' : '') + _e_
  }
  function _e_(_e_) {
    var _t_ = _s_.LoginStore.instance.getCurServerTime().toString(),
      _n_ =
        'pid=' +
        _s_.ExternalData.pid +
        '@method=' +
        _e_ +
        '@loginname=' +
        _s_.LoginStore.instance.userName +
        '@stamp=' +
        _t_ +
        '@dm=' +
        _s_.ExternalData.domainName
    return (
      _s_.ExternalData.serverName + '/forwardPage.do?params=' + _n_ + '&key=' + new md5().hex_md5(_n_ + 'jhs#%!fde')
    )
  }
  ;(_s_.getUrlParams = function (_e_) {
    var _t_ = new RegExp('(^|&)' + _e_ + '=([^&]*)(&|$)', 'i'),
      _n_ = location.search.substr(1).match(_t_)
    return _n_ && 2 <= _n_.length ? decodeURIComponent(_n_[2]) : null
  }),
    (_s_.urlWithParams = function (_e_, _t_) {
      return 0 <= _e_.split('/').pop().indexOf('?') ? _e_ + '&' + _n_(_t_) : _e_ + '?' + _n_(_t_)
    }),
    (_s_.openUrl = function (_e_, _t_, _n_, _r_) {
      if (_n_ && _r_) {
        var _o_ = 'height=' + _r_ + ',width=' + _n_
        return window.open(_e_, _t_, _o_)
      }
      return window.open(_e_, _t_)
    }),
    (_s_.openUrlWithProps = function (_e_, _t_, _n_) {
      return window.open(_e_, _t_, _n_)
    }),
    (_s_.ANONYMOUS_NAME_PREFIX_USERNAME = 'username'),
    (_s_.ANONYMOUS_NAME_PREFIX_NICKNAME = 'nickname'),
    (_s_.getAnonymousName = function (_e_, _t_, _n_, _r_) {
      if ((void 0 === _n_ && (_n_ = !1), void 0 === _r_ && (_r_ = ''), _e_ === _s_.LoginStore.instance.loginName))
        return _n_ && 8 < _t_.length ? _t_.substring(0, 8) + '...' : _t_
      var _o_ = _e_.substring(3, _s_._Pu_ + 3)
      if (_t_ && _t_ != _o_ && _t_ != _e_) return _n_ && 8 < _t_.length ? _t_.substring(0, 7) + '...' : _t_
      var _i_ = '***'
      switch (_r_) {
        case _s_.ANONYMOUS_NAME_PREFIX_USERNAME:
          _i_ = _o_.charAt(0) + _i_ + _o_.slice(_o_.length - 3)
          break
        case _s_.ANONYMOUS_NAME_PREFIX_NICKNAME:
          _i_ = _t_.charAt(0) + _i_ + _t_.slice(_o_.length - 3)
          break
        default:
          _i_ += _t_.slice(_t_.length - 3)
      }
      return _i_
    }),
    (_s_.hexStringToByteArray = function (_e_) {
      for (var _t_ = _e_.length, _n_ = new egret.ByteArray(), _r_ = 0; _r_ < _t_; _r_ += 2) {
        var _o_ = parseInt(_e_[_r_], 16),
          _i_ = parseInt(_e_[_r_ + 1], 16)
        _n_.writeByte((_o_ << 4) + _i_)
      }
      return (_n_.position = 0), _n_
    }),
    (_s_.BYTE_MAX = 4294967296),
    (_s_.readLong = function (_e_) {
      var _t_, _n_
      return 8 <= _e_.bytesAvailable
        ? ((_t_ = _e_.readUnsignedInt()), (_n_ = _e_.readUnsignedInt()), _t_ * _s_.BYTE_MAX + _n_)
        : 0
    }),
    (_s_.writeLong = function (_e_, _t_) {
      var _n_, _r_
      ;(_n_ = _t_ % _s_.BYTE_MAX),
        (_r_ = Math.floor(_t_ / _s_.BYTE_MAX)),
        _e_.writeUnsignedInt(_r_),
        _e_.writeUnsignedInt(_n_)
    }),
    (_s_.quit = function () {
      'UAT' === _s_.ExternalData.env
        ? location.reload()
        : _s_.ExternalData.domainName
        ? (window.location.href = _e_('et'))
        : (window.location.href = 'about:blank')
    }),
    (_s_.FLOAT_MIN_VALUE = 1e-6),
    (_s_.isZero = function (_e_) {
      return _e_ > -_s_.FLOAT_MIN_VALUE && _e_ < _s_.FLOAT_MIN_VALUE
    }),
    (_s_.formatNumStr = function (_e_) {
      return (Math.floor(_e_) == _e_ ? _e_.toFixed(0) : _e_.toFixed(2)).replace(/./g, function (_e_, _t_, _n_) {
        return _t_ && '.' != _e_ && (_n_.length - _t_) % 3 == 0 ? ',' + _e_ : _e_
      })
    }),
    (_s_.degreeToRadians = function (_e_) {
      return (_e_ * Math.PI) / 180
    }),
    (_s_.checkBalance = function (_e_, _t_) {
      return 0 < _e_ - _t_
    }),
    (_s_.getTimerColor = function (_e_) {
      return _e_ <= 10 ? 16711680 : 16768512
    }),
    (_s_.resetMouseCursor = function () {
      if (_s_.ExternalData.isPcVersion) {
        var _e_ = document.getElementsByTagName('canvas')
        _e_ && 0 < _e_.length && (_e_[0].style.cursor = 'default')
      }
    })
  var _a_ = new Date().getTimezoneOffset()
  ;(_s_.getTimeAtTimeZone = _r_),
    (_s_.getMonthStr = _i_),
    (_s_.patternDate = _o_),
    (_s_.getDateAtTimeZone = function (_e_, _t_, _n_) {
      return (
        void 0 === _t_ && (_t_ = 'yyyy-MM-dd HH:mm:ss'),
        void 0 === _n_ && (_n_ = _s_.EA_TIME_ZONE),
        _o_(_t_, new Date(_r_(_e_, _n_)))
      )
    }),
    (_s_.sequence = 1e4),
    (_s_.addSequence = function () {
      _s_.sequence++, 65535 < _s_.sequence && (_s_.sequence = 1e4)
    }),
    (_s_.getSequence = function () {
      return _s_.sequence
    }),
    (_s_.checkSeqArr = []),
    (_s_.getFullTimeStamp = function () {
      var _e_ = new Date()
      return _o_('yyyyMMddhhmmss', _e_) + _e_.getMilliseconds()
    }),
    (_s_.ARRAY_NUMERIC_ASCENDING = 1),
    (_s_.ARRAY_NUMERIC_DESCENDING = 2),
    (_s_.ARRAY_CASEINSENSITIVE_ASCENDING = 3),
    (_s_.ARRAY_CASEINSENSITIVE_DESCENDING = 4),
    (_s_.arraySort = function (_e_, _t_) {
      void 0 === _t_ && (_t_ = 0), 0 == _t_ && (_t_ = _s_.ARRAY_NUMERIC_ASCENDING)
      var _n_ = _t_ == _s_.ARRAY_NUMERIC_ASCENDING || _t_ == _s_.ARRAY_CASEINSENSITIVE_ASCENDING
      _e_.sort(function (_e_, _t_) {
        return _t_ < _e_ ? (_n_ ? 1 : -1) : _n_ ? -1 : 1
      })
    }),
    (_s_.copyTextToClipboard = function (_n_) {
      var _r_ = function (_e_) {
          var _t_ = _e_.contentEditable,
            _n_ = _e_.readOnly
          try {
            ;(_e_.contentEditable = 'true'), (_e_.readOnly = !1), _o_(_e_)
          } finally {
            ;(_e_.contentEditable = _t_), (_e_.readOnly = _n_), document.body.removeChild(_e_)
          }
        },
        _o_ = function (_e_) {
          var _t_ = document.createRange(),
            _n_ = window.getSelection()
          _t_.selectNodeContents(_e_),
            _n_.removeAllRanges(),
            _n_.addRange(_t_),
            _e_.setSelectionRange(0, 999999),
            document.execCommand('copy')
        }
      try {
        !(function (_e_) {
          try {
            return navigator.clipboard
              ? navigator.clipboard.writeText(_e_)
              : window.clipboardData
              ? window.clipboardData.setData('text', _e_)
              : _r_(
                  (((_t_ = document.createElement('textarea')).style.position = 'fixed'),
                  (_t_.style.top = '0'),
                  (_t_.style.left = '0'),
                  (_t_.style.width = '2em'),
                  (_t_.style.height = '2em'),
                  (_t_.style.padding = '0'),
                  (_t_.style.border = 'none'),
                  (_t_.style.outline = 'none'),
                  (_t_.style.boxShadow = 'none'),
                  (_t_.style.background = 'transparent'),
                  (_t_.value = _n_),
                  document.body.appendChild(_t_),
                  _t_.select(),
                  _t_)
                )
          } catch (_e_) {
            return
          }
          var _t_
        })(_n_)
      } catch (_e_) {}
    }),
    (_s_.pasteHtmlToString = function (_e_) {
      var _t_ = document.createElement('textarea')
      return (_t_.innerHTML = _e_), _t_.value
    }),
    (_s_.getConfigLang = function (_e_) {
      switch (_e_) {
        case _s_.LANG_HANS:
          return _s_.LANG_ZH_CONF
        case _s_.LANG_HANT:
          return _s_.LANG_TR_CONF
        case _s_.LANG_EN:
          return _s_.LANG_EN_CONF
        case _s_.LANG_JA:
          return _s_.LANG_JP_CONF
        case _s_.LANG_KO:
          return _s_.LANG_KR_CONF
        case _s_.LANG_TH:
          return _s_.LANG_TH_CONF
        case _s_.LANG_KM:
          return _s_.LANG_KM_CONF
        case _s_.LANG_PT:
          return _s_.LANG_PT_CONF
        case _s_.LANG_ID:
          return _s_.LANG_ID_CONF
      }
      return _s_.LANG_EN_CONF
    }),
    (_s_.pad2 = _t_),
    (_s_.formatToDatetime = function (_e_) {
      return (
        [_e_.getFullYear(), _t_(_e_.getMonth() + 1), _t_(_e_.getDate())].join('-') +
        ' ' +
        [_t_(_e_.getHours()), _t_(_e_.getMinutes()), _t_(_e_.getSeconds())].join(':')
      )
    }),
    (_s_.callCallback = function (_e_) {
      _e_.thisArg ? _e_.callback.call(_e_.thisArg) : _e_.callback()
    }),
    (_s_.callCallbackParam = function (_e_, _t_) {
      _e_.thisArg ? _e_.callback.call(_e_.thisArg, _t_) : _e_.callback(_t_)
    }),
    (_s_.traceStack = function (_e_) {
      void 0 === _e_ && (_e_ = ''), new Error()
    }),
    (_s_.setGrpTitleStyle = function (_e_, _t_, _n_) {
      for (var _r_, _o_ = !!_n_, _i_ = 0; _i_ < _e_.numChildren; _i_++)
        ((_r_ = _e_.getChildAt(_i_)).textColor = _t_),
          (_r_.bold = _o_),
          (_r_.background = _o_) && (_r_.backgroundColor = _n_)
    }),
    (_s_.getErrorCodeStr = function (_e_) {
      return '[' + _e_.toString() + ']'
    }),
    (_s_.getWebapi = _e_),
    (_s_.formatNumLeftFillZero = function (_e_) {
      return _e_ < 10 ? '00' + _e_ : _e_ < 100 ? '0' + _e_ : _e_.toString()
    }),
    (_s_.addStar = function (_e_, _t_) {
      void 0 === _t_ && (_t_ = 0)
      for (var _n_ = _e_, _r_ = 0; _r_ < _t_; _r_++) _n_ = '*' + _n_
      return _n_
    })
})(Core || (Core = {}))
;(function (_r_) {
  ;(_r_.getSimpleCMD = function (_e_, _t_) {
    void 0 === _t_ && (_t_ = _r_._ka_)
    var _n_ = new egret.ByteArray()
    return _n_.writeInt(_e_), _n_.writeInt(_r_._Ic_), _n_.writeInt(_t_), _n_
  }),
    (_r_.startCMD = function (_e_, _t_) {
      void 0 === _t_ && (_t_ = _r_._ka_)
      var _n_ = new egret.ByteArray()
      return _n_.writeInt(_e_), _n_.writeInt(0), _n_.writeInt(_t_), _n_
    }),
    (_r_.startBetCMD = function (_e_, _t_, _n_) {
      void 0 === _n_ && (_n_ = 99999)
      var _r_ = new egret.ByteArray()
      return _r_.writeInt(_e_), _r_.writeInt(0), _r_.writeUnsignedShort(_n_), _r_.writeUnsignedShort(_t_), _r_
    }),
    (_r_.endCMD = function (_e_) {
      var _t_ = _e_.position
      return (_e_.position = 4), _e_.writeInt(_t_), _e_
    }),
    (_r_.hexStrToBytes = function (_e_) {
      for (var _t_ = _e_.length, _n_ = new egret.ByteArray(), _r_ = 0; _r_ < _t_; _r_ += 2) {
        var _o_ = parseInt(_e_[_r_], 16),
          _i_ = parseInt(_e_[_r_ + 1], 16)
        _n_.writeByte((_o_ << 4) + _i_)
      }
      return _n_
    }),
    (_r_.stringToBytes = function (_e_, _t_) {
      var _n_ = new egret.ByteArray()
      return _n_.writeUTFBytes(_e_), (_n_.length = _t_), _n_
    }),
    (_r_.readInt64FromBytes = function (_e_) {
      return (_e_.readUnsignedInt() << 32) | _e_.readUnsignedInt()
    }),
    (_r_.writeInt64ToBytes = function (_t_, _e_) {
      var _n_ = Math.floor(_e_),
        _r_ = []
      4294967295 < _n_
        ? ((_r_[0] = 0), (_r_[1] = (_n_ >> 48) & 31), (_r_[2] = (_n_ >> 40) & 255), (_r_[3] = (_n_ >> 32) & 255))
        : ((_r_[0] = 0), (_r_[1] = 0), (_r_[2] = 0), (_r_[3] = 0)),
        (_r_[4] = (_n_ >> 24) & 255),
        (_r_[5] = (_n_ >> 16) & 255),
        (_r_[6] = (_n_ >> 8) & 255),
        (_r_[7] = 255 & _n_),
        _r_.forEach(function (_e_) {
          _t_.writeByte(_e_)
        })
    })
})(Core || (Core = {}))

export { Core, __reflect }
