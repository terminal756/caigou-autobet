import { egret } from './egret'

var e,
  n,
  r = 'EVENT_PACKET',
  bytes = {},
  i = 0,
  o = 12
;((e = bytes.ReadyState || (bytes.ReadyState = {}))[(e.CONNECTING = 0)] = 'CONNECTING'),
  (e[(e.OPEN = 1)] = 'OPEN'),
  (e[(e.CLOSING = 2)] = 'CLOSING'),
  (e[(e.CLOSED = 3)] = 'CLOSED'),
  (e[(e.DEAD = 4)] = 'DEAD'),
  ((n = bytes.UCGatePluginType || (bytes.UCGatePluginType = {}))[(n.USER = 0)] = 'USER'),
  (n[(n.USER_STREAM = 1)] = 'USER_STREAM'),
  (n[(n.USER_STREAM_IP = 2)] = 'USER_STREAM_IP'),
  (n[(n.STREAM = 3)] = 'STREAM'),
  (n[(n.CACHE = 4)] = 'CACHE'),
  (n[(n.SUBSCRIBE = 5)] = 'SUBSCRIBE'),
  (n[(n.UNSUBSCRIBE = 6)] = 'UNSUBSCRIBE')
var a,
  s = 8781826,
  c = 263522,
  u = 264705
!(function (t) {
  ;(t[(t.BREAK_BY_RESET = 0)] = 'BREAK_BY_RESET'),
    (t[(t.REPEAT_TOO_MANY = 1)] = 'REPEAT_TOO_MANY'),
    (t[(t.EMPTY_URL = 2)] = 'EMPTY_URL'),
    (t[(t.TIMEOUT = 3)] = 'TIMEOUT')
})(a || (a = {}))
var f = function (t, e) {
  return (f =
    Object.setPrototypeOf ||
    ({
      __proto__: []
    } instanceof Array &&
      function (t, e) {
        t.__proto__ = e
      }) ||
    function (t, e) {
      for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
    })(t, e)
}
function l(t, e) {
  function n() {
    this.constructor = t
  }
  f(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()))
}
function h(t, e, n, r) {
  return new (n || (n = Promise))(function (i, o) {
    function a(t) {
      try {
        c(r.next(t))
      } catch (t) {
        o(t)
      }
    }
    function s(t) {
      try {
        c(r.throw(t))
      } catch (t) {
        o(t)
      }
    }
    function c(t) {
      t.done
        ? i(t.value)
        : new n(function (e) {
            e(t.value)
          }).then(a, s)
    }
    c((r = r.apply(t, e || [])).next())
  })
}
function p(t, e) {
  var n,
    r,
    i,
    o,
    a = {
      label: 0,
      sent: function () {
        if (1 & i[0]) throw i[1]
        return i[1]
      },
      trys: [],
      ops: []
    }
  return (
    (o = {
      next: s(0),
      throw: s(1),
      return: s(2)
    }),
    'function' == typeof Symbol &&
      (o[Symbol.iterator] = function () {
        return this
      }),
    o
  )
  function s(o) {
    return function (s) {
      return (function (o) {
        if (n) throw new TypeError('Generator is already executing.')
        for (; a; )
          try {
            if (
              ((n = 1),
              r &&
                (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) &&
                !(i = i.call(r, o[1])).done)
            )
              return i
            switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
              case 0:
              case 1:
                i = o
                break
              case 4:
                return (
                  a.label++,
                  {
                    value: o[1],
                    done: !1
                  }
                )
              case 5:
                a.label++, (r = o[1]), (o = [0])
                continue
              case 7:
                ;(o = a.ops.pop()), a.trys.pop()
                continue
              default:
                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                  a = 0
                  continue
                }
                if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                  a.label = o[1]
                  break
                }
                if (6 === o[0] && a.label < i[1]) {
                  ;(a.label = i[1]), (i = o)
                  break
                }
                if (i && a.label < i[2]) {
                  ;(a.label = i[2]), a.ops.push(o)
                  break
                }
                i[2] && a.ops.pop(), a.trys.pop()
                continue
            }
            o = e.call(t, a)
          } catch (t) {
            ;(o = [6, t]), (r = 0)
          } finally {
            n = i = 0
          }
        if (5 & o[0]) throw o[1]
        return {
          value: o[0] ? o[1] : void 0,
          done: !0
        }
      })([o, s])
    }
  }
}
var d = (function () {
    function t() {
      ;(this.timeoutSet = new Set()), (this.intervalSet = new Set())
    }
    return (
      (t.prototype.setTimeout = function (t, e) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r]
        var i = window.setTimeout.apply(window, [t, e].concat(n))
        return this.timeoutSet.add(i), i
      }),
      (t.prototype.setInterval = function (t, e) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r]
        var i = window.setInterval.apply(window, [t, e].concat(n))
        return this.intervalSet.add(i), i
      }),
      (t.prototype.clearTimeout = function (t) {
        this.timeoutSet.delete(t), window.clearTimeout(t)
      }),
      (t.prototype.clearInterval = function (t) {
        this.intervalSet.delete(t), window.clearInterval(t)
      }),
      (t.prototype.clearAll = function () {
        this.timeoutSet.forEach(function (t) {
          window.clearTimeout(t)
        }),
          this.intervalSet.forEach(function (t) {
            window.clearInterval(t)
          }),
          this.timeoutSet.clear(),
          this.intervalSet.clear()
      }),
      t
    )
  })(),
  y = (function () {
    function t() {
      this.egretTickers = new Map()
    }
    return (
      (t.prototype.startTick = function (t, e) {
        this.egretTickers.set(t, {
          callback: t,
          scope: e
        }),
          egret.startTick(t, e)
      }),
      (t.prototype.stopTick = function (t, e) {
        this.egretTickers.delete(t), egret.stopTick(t, e)
      }),
      (t.prototype.clearAll = function () {
        var t = this
        this.egretTickers.forEach(function (e, n) {
          t.stopTick(e.callback, e.scope)
        })
      }),
      t
    )
  })(),
  g =
    "\nlet timeoutMap = {};\nlet intervalMap = {};\nonmessage = function(event){\n    var message = event.data.split(':');\n    var cmd = message[0];\n    var ID = message[1];\n    var delay = parseInt(message[2]);\n\n    switch(cmd) {\n        case 'check':\n            self.postMessage(event.data);\n            break;\n        case 'calibrate':\n            self.postMessage('calibrate:' + ID);\n            break;\n        case 'createTimeout':\n            var $timeout = setTimeout(function(){\n                self.postMessage('timeout:' + ID);\n            }, delay);\n            timeoutMap[ID] = $timeout;\n            self.postMessage('createTimeout:' + ID);\n            break;\n        case 'createInterval':\n            var $interval = setInterval(function(){\n                self.postMessage('interval:' + ID);\n            }, delay);\n            intervalMap[ID] = $interval;\n            self.postMessage('createInterval:' + ID);\n            break;\n        case 'clearTimeout':\n            const timeout = timeoutMap[ID];\n            clearTimeout(timeout);\n            break;\n        case 'clearInterval':\n            const interval = intervalMap[ID];\n            clearInterval(interval);\n            break;\n    }\n}\n",
  v = new ((function () {
    function t() {
      var t = this
      ;(this.timerCount = 0),
        (this._refCount = 0),
        (this.isWorker = !1),
        (this.checkTimer = 0),
        (this.intervalMap = new Map()),
        (this.timeoutMap = new Map()),
        (this.timeError = 0),
        (this.timerCount = 0)
      try {
        ;(this._worker = new Worker(
          URL.createObjectURL(
            new Blob([g], {
              type: 'application/javascript'
            })
          )
        )),
          this._worker.addEventListener('message', function (e) {
            t.handleWorkerMsg(e.data)
          }),
          this._worker.postMessage('check:0'),
          // (window.onbeforeunload = function () {
          //   t._worker.terminate(), console.log('NonstopTimer.timeWorker.terminate')
          // }),
          (this.checkTimer = window.setTimeout(function () {
            clearTimeout(t.checkTimer), t.isWorker || (t._worker.terminate(), t.replaceNonWorker())
          }, 200))
      } catch (t) {
        console.warn('mostly can not new web worker'), console.warn(t), this.replaceNonWorker()
      }
    }
    return (
      (t.prototype.replaceNonWorker = function () {
        var t = this
        ;(this._worker = function () {}),
          (this._worker.postMessage = function (e) {
            t.handleNonWorkerMsg(e)
          }),
          (this._worker.terminate = function () {})
      }),
      Object.defineProperty(t.prototype, 'refCount', {
        get: function () {
          return this._refCount
        },
        set: function (t) {
          ;(this._refCount = t), this._refCount
        },
        enumerable: !0,
        configurable: !0
      }),
      (t.prototype.calibrate = function () {
        var t = Date.now()
        this._worker.postMessage('calibrate:' + t.toString())
      }),
      (t.prototype.setTimeout = function (t, e) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r]
        var i = e || 0
        i > this.timeError && (i -= this.timeError)
        var o = this.$getTimerID()
        return (
          this.timeoutMap.set(o, {
            fn: t,
            delay: i,
            params: n || [],
            status: !1
          }),
          this._worker.postMessage('createTimeout:' + o + ':' + i),
          o
        )
      }),
      (t.prototype.setInterval = function (t, e) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r]
        var i = e,
          o = this.$getTimerID()
        return (
          this.intervalMap.set(o, {
            fn: t,
            delay: i,
            params: n || [],
            status: !1
          }),
          this._worker.postMessage('createInterval:' + o + ':' + i),
          o
        )
      }),
      (t.prototype.clearTimeout = function (t) {
        this.timeoutMap.get(t) && (this._worker.postMessage('clearTimeout:' + t), this.timeoutMap.delete(t))
      }),
      (t.prototype.clearInterval = function (t) {
        this.intervalMap.get(t) && (this._worker.postMessage('clearInterval:' + t), this.intervalMap.delete(t))
      }),
      (t.prototype.clearTimeoutSet = function (t) {
        var e = this
        t.forEach(function (t) {
          e.clearTimeout(t)
        })
      }),
      (t.prototype.clearIntervalSet = function (t) {
        var e = this
        t.forEach(function (t) {
          e.clearInterval(t)
        })
      }),
      (t.prototype.clearAll = function () {
        var t = this
        this.timeoutMap.forEach(function (e, n) {
          t.clearTimeout(n)
        }),
          this.intervalMap.forEach(function (e, n) {
            t.clearInterval(n)
          })
      }),
      (t.prototype.hasTimer = function (t) {
        return this.timeoutMap.has(t) || this.intervalMap.has(t)
      }),
      (t.prototype.onRelease = function () {
        this.clearAll(), this._worker.terminate()
      }),
      (t.prototype.handleWorkerMsg = function (t) {
        var e = t.split(':'),
          n = e[0],
          r = parseInt(e[1])
        switch (n) {
          case 'check':
            ;(this.isWorker = !0), window.clearTimeout(this.checkTimer)
            break
          case 'createTimeout':
            this.createResp(r, this.timeoutMap)
            break
          case 'createInterval':
            this.createResp(r, this.intervalMap)
            break
          case 'timeout':
            this.runResp(r, this.timeoutMap)
            break
          case 'interval':
            this.runResp(r, this.intervalMap)
            break
          case 'calibrate':
            var i = Date.now(),
              o = r
            this.timeError = i - o
        }
      }),
      (t.prototype.handleNonWorkerMsg = function (t) {
        var e = this,
          n = t.split(':'),
          r = n[0],
          i = parseInt(n[1]),
          o = parseInt(n[2])
        switch (r) {
          case 'createTimeout':
            this.createResp(i, this.timeoutMap),
              setTimeout(function () {
                e.runResp(i, e.timeoutMap)
              }, o)
            break
          case 'createInterval':
            this.createResp(i, this.intervalMap),
              setInterval(function () {
                e.runResp(i, e.intervalMap)
              }, o)
            break
          case 'clearTimeout':
            clearTimeout(i)
            break
          case 'clearInterval':
            clearInterval(i)
            break
          case 'calibrate':
            var a = Date.now(),
              s = i
            this.timeError = a - s
        }
      }),
      (t.prototype.createResp = function (t, e) {
        var n = e.get(t)
        n && (n.status = !0)
      }),
      (t.prototype.runResp = function (t, e) {
        var n = e.get(t)
        n && !0 === n.status && n.fn.apply(this, n.params)
      }),
      (t.prototype.$getTimerID = function () {
        return ++this.timerCount
      }),
      t
    )
  })())(),
  E = (function () {
    function t() {
      ;(this.sys = new d()),
        (this.worker = v),
        (this._egret = void 0),
        ++this.worker.refCount,
        (this.timeoutSet = new Set()),
        (this.intervalSet = new Set())
    }
    return (
      Object.defineProperty(t.prototype, 'egret', {
        get: function () {
          return window.egret
            ? (this._egret || (this._egret = new y()), this._egret)
            : void console.warn('Cannot find egret, please make sure you have imported egret')
        },
        enumerable: !0,
        configurable: !0
      }),
      Object.defineProperty(t.prototype, 'timeError', {
        get: function () {
          return this.worker.timeError
        },
        enumerable: !0,
        configurable: !0
      }),
      (t.prototype.calibrate = function () {
        this.worker.calibrate()
      }),
      (t.prototype.setTimeout = function (t, e) {
        for (var n, r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i]
        var o = (n = this.worker).setTimeout.apply(n, [t, e].concat(r))
        return this.timeoutSet.add(o), o
      }),
      (t.prototype.setInterval = function (t, e) {
        for (var n, r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i]
        var o = (n = this.worker).setInterval.apply(n, [t, e].concat(r))
        return this.intervalSet.add(o), o
      }),
      (t.prototype.clearTimeout = function (t) {
        this.timeoutSet.delete(t), this.worker.clearTimeout(t)
      }),
      (t.prototype.clearInterval = function (t) {
        this.intervalSet.delete(t), this.worker.clearInterval(t)
      }),
      (t.prototype.clearAll = function () {
        this.worker.clearTimeoutSet(this.timeoutSet),
          this.worker.clearIntervalSet(this.intervalSet),
          this.timeoutSet.clear(),
          this.intervalSet.clear(),
          --this.worker.refCount,
          this.sys.clearAll(),
          this.egret && this.egret.clearAll()
      }),
      (t.prototype.hasTimer = function (t) {
        return this.worker.hasTimer(t)
      }),
      (t.prototype.onRelease = function () {
        this.clearAll()
      }),
      t
    )
  })(),
  w = (function (t) {
    function e() {
      return (null !== t && t.apply(this, arguments)) || this
    }
    return l(e, t), e
  })(egret.ByteArray),
  T = (function () {
    function t(t, e) {
      ;(this.respId = t), (e.position = 8), (this.seqNo = e.readUnsignedInt()), (this.packetLength = e.length)
    }
    return (
      (t.prototype.parseResp = function (t) {}),
      (t.prototype.parseResponse = function (t) {
        this.parseResp(t), (this.parseResp = null)
      }),
      t
    )
  })(),
  _ = (function (t) {
    function e(e, n) {
      var r = t.call(this, e, n) || this
      return (r.bytes = n), r
    }
    return l(e, t), e
  })(T)
function A(t) {
  return null === t
    ? 'null'
    : void 0 === t
    ? 'undefined'
    : 'object' == typeof t
    ? Array.isArray(t)
      ? 'array'
      : 'object'
    : typeof t
}
function b(t) {
  return 'object' === A(t) ? S(t) : 'array' === A(t) ? m(t) : t
}
function m(t) {
  return t.map(b)
}
function S(t) {
  var e = {}
  for (var n in t) t.hasOwnProperty(n) && (e[n] = b(t[n]))
  return e
}
function R(t, e, n) {
  void 0 === e && (e = []), void 0 === n && (n = {})
  for (
    var r = {
        arrayBehaviour: n.arrayBehaviour || 'replace'
      },
      i = e.map(function (t) {
        return t || {}
      }),
      o = t || {},
      a = 0;
    a < i.length;
    a++
  )
    for (var s = i[a], c = Object.keys(s), u = 0; u < c.length; u++) {
      var f = c[u],
        l = s[f],
        h = A(l),
        p = A(o[f])
      if ('object' === h)
        if ('undefined' !== p) {
          var d = 'object' === p ? o[f] : {}
          o[f] = R({}, [d, S(l)], r)
        } else o[f] = S(l)
      else if ('array' === h)
        if ('array' === p) {
          var y = m(l)
          o[f] = 'merge' === r.arrayBehaviour ? o[f].concat(y) : y
        } else o[f] = m(l)
      else o[f] = l
    }
  return o
}
var k = function (t) {
  for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n]
  return R(t, e)
}
;(k.noMutate = function () {
  for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
  return R({}, t)
}),
  (k.withOptions = function (t, e, n) {
    return R(t, e, n)
  })
var M = {}
function I() {
  return k(
    {
      tag: void 0,
      debug: !0,
      unzip: !1,
      dynamic: !1,
      heartBeatPeriod: 15e3,
      heartBeatLength: 12,
      ucHeartBeatPeriod: 25e3,
      reconnect: {
        singleRetry: 1,
        totalRetry: 7,
        pendingTime: 1e3,
        forceRetryTime: 0
      },
      lineSelect: {
        cache: !0,
        cacheTime: 6e5,
        duration: 1e4,
        repeat: 3,
        refPort: '',
        respId: s,
        reqId: c
      },
      crypto: {
        enable: !1,
        encryptList: [],
        decryptList: []
      },
      qna: {
        version: '',
        userIp: '',
        aliveList: []
      }
    },
    M
  )
}
function O(t, e, n) {
  void 0 === n && (n = i)
  var r = new w()
  if (((r.cmdId = t), (r.seqNo = n), r.writeUnsignedInt(t), r.writeUnsignedInt(o), r.writeUnsignedInt(n), !e)) return r
  e(r)
  var a = r.position
  return (r.position = 4), r.writeUnsignedInt(a), r
}
function P(t, e) {
  var n = new egret.ByteArray()
  return n.writeUTFBytes(t), (n.length = e), n
}
var N = new E(),
  U = function (t) {
    try {
      return !!t()
    } catch (t) {
      return !0
    }
  },
  D = !U(function () {
    return (
      7 !=
      Object.defineProperty({}, 'a', {
        get: function () {
          return 7
        }
      }).a
    )
  }),
  F = function (t) {
    return 'object' == typeof t ? null !== t : 'function' == typeof t
  },
  C = function (t) {
    if (!F(t)) throw TypeError(t + ' is not an object!')
    return t
  }
function L(t, e) {
  return (
    t(
      (e = {
        exports: {}
      }),
      e.exports
    ),
    e.exports
  )
}
var x = L(function (t) {
    var e = (t.exports =
      'undefined' != typeof window && window.Math == Math
        ? window
        : 'undefined' != typeof self && self.Math == Math
        ? self
        : Function('return this')())
    'number' == typeof __g && (__g = e)
  }),
  B = x.document,
  X = F(B) && F(B.createElement),
  z = function (t) {
    return X ? B.createElement(t) : {}
  },
  V =
    !D &&
    !U(function () {
      return (
        7 !=
        Object.defineProperty(z('div'), 'a', {
          get: function () {
            return 7
          }
        }).a
      )
    }),
  H = function (t, e) {
    if (!F(t)) return t
    var n, r
    if (e && 'function' == typeof (n = t.toString) && !F((r = n.call(t)))) return r
    if ('function' == typeof (n = t.valueOf) && !F((r = n.call(t)))) return r
    if (!e && 'function' == typeof (n = t.toString) && !F((r = n.call(t)))) return r
    throw TypeError("Can't convert object to primitive value")
  },
  j = Object.defineProperty,
  W = {
    f: D
      ? Object.defineProperty
      : function (t, e, n) {
          if ((C(t), (e = H(e, !0)), C(n), V))
            try {
              return j(t, e, n)
            } catch (t) {}
          if ('get' in n || 'set' in n) throw TypeError('Accessors not supported!')
          return 'value' in n && (t[e] = n.value), t
        }
  },
  Q = function () {
    var t = C(this),
      e = ''
    return (
      t.global && (e += 'g'),
      t.ignoreCase && (e += 'i'),
      t.multiline && (e += 'm'),
      t.unicode && (e += 'u'),
      t.sticky && (e += 'y'),
      e
    )
  }
D &&
  'g' != /./g.flags &&
  W.f(RegExp.prototype, 'flags', {
    configurable: !0,
    get: Q
  })
var G = function (t, e) {
    return {
      enumerable: !(1 & t),
      configurable: !(2 & t),
      writable: !(4 & t),
      value: e
    }
  },
  K = D
    ? function (t, e, n) {
        return W.f(t, e, G(1, n))
      }
    : function (t, e, n) {
        return (t[e] = n), t
      },
  Y = {}.hasOwnProperty,
  q = function (t, e) {
    return Y.call(t, e)
  },
  J = 0,
  $ = Math.random(),
  Z = function (t) {
    return 'Symbol('.concat(void 0 === t ? '' : t, ')_', (++J + $).toString(36))
  },
  tt = L(function (t) {
    var e = (t.exports = {
      version: '2.5.7'
    })
    'number' == typeof __e && (__e = e)
  }),
  et =
    (tt.version,
    L(function (t) {
      var e = Z('src'),
        n = Function.toString,
        r = ('' + n).split('toString')
      ;(tt.inspectSource = function (t) {
        return n.call(t)
      }),
        (t.exports = function (t, n, i, o) {
          var a = 'function' == typeof i
          a && (q(i, 'name') || K(i, 'name', n)),
            t[n] !== i &&
              (a && (q(i, e) || K(i, e, t[n] ? '' + t[n] : r.join(String(n)))),
              t === x ? (t[n] = i) : o ? (t[n] ? (t[n] = i) : K(t, n, i)) : (delete t[n], K(t, n, i)))
        })(Function.prototype, 'toString', function () {
          return ('function' == typeof this && this[e]) || n.call(this)
        })
    })),
  nt = /./.toString,
  rt = function (t) {
    et(RegExp.prototype, 'toString', t, !0)
  }
U(function () {
  return (
    '/a/b' !=
    nt.call({
      source: 'a',
      flags: 'b'
    })
  )
})
  ? rt(function () {
      var t = C(this)
      return '/'.concat(t.source, '/', 'flags' in t ? t.flags : !D && t instanceof RegExp ? Q.call(t) : void 0)
    })
  : 'toString' != nt.name &&
    rt(function () {
      return nt.call(this)
    })
var it = Date.prototype,
  ot = it.toString,
  at = it.getTime
new Date(NaN) + '' != 'Invalid Date' &&
  et(it, 'toString', function () {
    var t = at.call(this)
    return t == t ? ot.call(this) : 'Invalid Date'
  })
var st = {}.toString,
  ct = function (t) {
    return st.call(t).slice(8, -1)
  },
  ut = L(function (t) {
    var e = x['__core-js_shared__'] || (x['__core-js_shared__'] = {})
    ;(t.exports = function (t, n) {
      return e[t] || (e[t] = void 0 !== n ? n : {})
    })('versions', []).push({
      version: tt.version,
      mode: 'global',
      copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
    })
  }),
  ft = L(function (t) {
    var e = ut('wks'),
      n = x.Symbol,
      r = 'function' == typeof n
    ;(t.exports = function (t) {
      return e[t] || (e[t] = (r && n[t]) || (r ? n : Z)('Symbol.' + t))
    }).store = e
  }),
  lt = ft('toStringTag'),
  ht =
    'Arguments' ==
    ct(
      (function () {
        return arguments
      })()
    ),
  pt = function (t) {
    var e, n, r
    return void 0 === t
      ? 'Undefined'
      : null === t
      ? 'Null'
      : 'string' ==
        typeof (n = (function (t, e) {
          try {
            return t[e]
          } catch (t) {}
        })((e = Object(t)), lt))
      ? n
      : ht
      ? ct(e)
      : 'Object' == (r = ct(e)) && 'function' == typeof e.callee
      ? 'Arguments'
      : r
  },
  dt = {}
;(dt[ft('toStringTag')] = 'z'),
  dt + '' != '[object z]' &&
    et(
      Object.prototype,
      'toString',
      function () {
        return '[object ' + pt(this) + ']'
      },
      !0
    )
var yt = (function (t) {
    function e() {
      var e = (null !== t && t.apply(this, arguments)) || this
      return (e.shouldOutputEvent = !1), e
    }
    return (
      l(e, t),
      (e.prototype.pipeEvent = function (t, e) {
        var n = {
          originType: t,
          data: e
        }
        return this.dispatchEventWith('EVT_PIPE', !0, n, !1)
      }),
      (e.prototype.appendPipeAt = function (t) {
        ;(this.prevPipe = t), t.addEventListener('EVT_PIPE', this.onPropagate, this)
      }),
      (e.prototype.outputEventAt = function (t) {
        ;(this.shouldOutputEvent = !0), this.appendPipeAt(t)
      }),
      (e.prototype.removeFromPipe = function () {
        this.prevPipe
          ? (this.prevPipe.removeEventListener('EVT_PIPE', this.onPropagate, this), (this.prevPipe = null))
          : console.warn('Need append to a pipe first')
      }),
      (e.prototype.onPipeEvent = function (t, e, n) {}),
      (e.prototype.onPropagate = function (t) {
        var e = t.data
        this.onPipeEvent(e.originType, e.data, t),
          t.$isPropagationStopped ||
            (this.shouldOutputEvent ? this.dispatchEventWith(e.originType, !1, e.data) : this.dispatchEvent(t))
      }),
      e
    )
  })(egret.EventDispatcher),
  gt = (function (t) {
    function e() {
      return (null !== t && t.apply(this, arguments)) || this
    }
    return l(e, t), (e.prototype.onDestory = function () {}), e
  })(yt)
function vt(t, e, n) {
  return (n = n || '0'), (t += '').length >= e ? t : new Array(e - t.length + 1).join(n) + t
}
var Et = (function (t) {
    function e(e) {
      var n = t.call(this) || this
      return (n.config = e), n
    }
    return (
      l(e, t),
      (e.prototype.onPipeEvent = function (t, e, n) {
        if (this.config.debug)
          switch (t) {
            case 'EVENT_CONNECTING':
              console.log(this.config.tag + ' connecting...')
              break
            case 'EVENT_OPEN':
              console.log(this.config.tag + ' open!')
              break
            case r:
              e instanceof T
                ? console.log(
                    this.config.tag +
                      ' receive: 0x' +
                      vt(e.respId.toString(16), 6) +
                      ', length:' +
                      e.packetLength +
                      ', seq:' +
                      e.seqNo
                  )
                : 'number' == typeof e.op && console.log(this.config.tag + ' receive: ' + e.op.toString())
              break
            case 'EVENT_CLOSE':
              console.log(this.config.tag + ' close!')
              break
            case 'EVENT_ERROR':
              console.log(this.config.tag + ' error!', e)
              break
            case 'EVENT_DIE':
              console.log(this.config.tag + ' die!')
              break
            case 'EVENT_DATA_VIEW':
              var i = e,
                o = i.getInt32(0),
                a = i.getInt32(4),
                s = i.getInt32(8)
              console.log(
                this.config.tag + ' receive dataview: 0x' + vt(o.toString(16), 6) + ', length:' + a + ', seq:' + s
              )
          }
      }),
      e
    )
  })(gt),
  wt = (function (t) {
    function e(e, n) {
      var r = t.call(this) || this
      return (r.config = e), (r.dynamicRespMapMap = n), r
    }
    return (
      l(e, t),
      (e.prototype.onPipeEvent = function (t, e, n) {
        switch (t) {
          case r:
            if (e instanceof _) {
              var i = this.identifyResp(e)
              i && (n.stopPropagation(), this.pipeEvent(r, i))
            }
        }
      }),
      (e.prototype.identifyResp = function (t) {
        var e = this.getRespClazzByID(t.respId)
        if (e) {
          var n = t
          return (n = new e(t.respId, t.bytes)).parseResponse(t.bytes), (n.parseResponse = null), n
        }
        return null
      }),
      (e.prototype.getRespClazzByID = function (t) {
        var e = null
        return (
          this.dynamicRespMapMap.forEach(function (n) {
            n.has(t) && (e = n.get(t))
          }),
          e
        )
      }),
      e
    )
  })(gt),
  Tt = (function (t) {
    function e(e) {
      var n = t.call(this, e) || this
      return (n.config = e), n
    }
    return (
      l(e, t),
      (e.prototype.getBeatCMD = function () {
        var t = this
        return O(1, function (e) {
          for (var n = 12; n < t.config.heartBeatLength; n++) e.writeByte(0)
        })
      }),
      e
    )
  })(
    (function (t) {
      function e(e) {
        var n = t.call(this) || this
        return (
          (n.config = e),
          !1 === isNaN(n.config.heartBeatPeriod)
            ? n.config.heartBeatPeriod <= 0
              ? (n.beatPeriod = -1)
              : n.config.heartBeatPeriod >= 100
              ? (n.beatPeriod = n.config.heartBeatPeriod)
              : (console.warn('UC heartbeat period should be longer than 100ms, automatically set to 5000 ms.'),
                (n.beatPeriod = 5e3))
            : (console.warn('config.ucUeartBeatPeriod is NaN, automatically set to 5000 ms.'), (n.beatPeriod = 5e3)),
          (n.beatCMD = n.getBeatCMD()),
          n
        )
      }
      return (
        l(e, t),
        (e.prototype.onPipeEvent = function (t, e, n) {
          var r = this
          if (!(this.beatPeriod <= 0))
            switch (t) {
              case 'EVENT_OPEN':
                this.beatInterval = N.setInterval(function () {
                  r.socket.writeBytes(r.beatCMD)
                }, this.beatPeriod)
                break
              case 'EVENT_CLOSE':
                N.clearInterval(this.beatInterval)
            }
        }),
        (e.prototype.onDestory = function () {
          N.clearInterval(this.beatInterval),
            (this.beatPeriod = 0),
            (this.beatCMD = null),
            (this.beatInterval = null),
            (this.config = null)
        }),
        e
      )
    })(gt)
  ),
  _t = (function (e) {
    function n(n, r) {
      var i = e.call(this) || this
      return (
        (i.config = n),
        (i.urlList = r),
        (i.urlIndex = 0),
        (i.hasValidPacket = !1),
        (i.singleRetryCount = 0),
        (i.totalRetryCount = 0),
        (i.totalRetryCount = i.config.reconnect.totalRetry < 0 ? 1 / 0 : i.config.reconnect.totalRetry),
        i.config.reconnect.forceRetryTime >= 3e3 &&
          (i.forceRetryInterval && N.clearInterval(i.forceRetryInterval),
          (i.forceRetryInterval = N.setInterval(function () {
            ;(i.socket.readyState === bytes.ReadyState.OPEN && i.hasValidPacket) || i.reconnect()
          }, i.config.reconnect.forceRetryTime))),
        i
      )
    }
    return (
      l(n, e),
      (n.prototype.onPipeEvent = function (t, e, n) {
        switch (t) {
          case r:
            this.totalRetryCount < this.config.reconnect.totalRetry &&
              (this.totalRetryCount = this.config.reconnect.totalRetry),
              (this.hasValidPacket = !0)
            break
          case 'EVENT_CLOSE':
            e && 4033 === e.code
              ? (n.stopPropagation(), this.pipeEvent('EVENT_CLOSE', e), this.kill())
              : this.totalRetryCount > 0
              ? this.forceRetryInterval || this.reconnect()
              : (n.stopPropagation(),
                this.pipeEvent('EVENT_CLOSE', e),
                this.pipeEvent('EVENT_RECONNECT_FAILED', e),
                this.kill())
        }
      }),
      (n.prototype.reconnect = function () {
        this.totalRetryCount--,
          this.hasValidPacket && this.singleRetryCount < this.config.reconnect.singleRetry
            ? (this.singleRetryCount++, this.connectWithDelay())
            : this.connectNextURL()
      }),
      (n.prototype.connectNextURL = function () {
        ;(this.hasValidPacket = !1),
          (this.singleRetryCount = 0),
          (this.urlIndex = (this.urlIndex + 1) % this.urlList.length),
          this.connectWithDelay()
      }),
      (n.prototype.connectWithDelay = function () {
        var t = this
        this.pendingTimeout && N.clearTimeout(this.pendingTimeout),
          (this.pendingTimeout = N.setTimeout(function () {
            var e = t.urlList[t.urlIndex]
            t.socket.connectByUrl(e)
          }, this.config.reconnect.pendingTime))
      }),
      (n.prototype.kill = function () {
        ;(this.totalRetryCount = 0),
          (this.singleRetryCount = 0),
          (this.hasValidPacket = !1),
          this.pipeEvent('EVENT_DIE'),
          N.clearTimeout(this.pendingTimeout),
          this.forceRetryInterval && N.clearInterval(this.forceRetryInterval)
      }),
      n
    )
  })(gt),
  At = (function (t) {
    function e(e) {
      var n = t.call(this, e) || this
      return (n.config = e), n
    }
    return (
      l(e, t),
      (e.prototype.getBeatCMD = function () {
        return O(s)
      }),
      (e.prototype.getValidHostCMD = function () {
        return O(this.config.lineSelect.reqId, function (t) {
          t.writeBytes(P('', 3))
        })
      }),
      e
    )
  })(
    (function (t) {
      function e(e) {
        var n = t.call(this) || this
        return (
          (n.config = e),
          (n.lastPacketTime = 0),
          !1 === isNaN(n.config.ucHeartBeatPeriod)
            ? n.config.ucHeartBeatPeriod <= 0
              ? (n.beatPeriod = -1)
              : n.config.ucHeartBeatPeriod >= 100
              ? (n.beatPeriod = n.config.ucHeartBeatPeriod)
              : (console.warn('UC heartbeat period should be longer than 100ms, automatically set to 5000 ms.'),
                (n.beatPeriod = 5e3))
            : (console.warn('config.ucHeartBeatPeriod is NaN, automatically set to 5000 ms.'), (n.beatPeriod = 5e3)),
          (n.ucgateBeatCMD = n.getBeatCMD()),
          n
        )
      }
      return (
        l(e, t),
        (e.prototype.onPipeEvent = function (t, e, n) {
          switch (t) {
            case 'EVENT_OPEN':
              this.config.lineSelect.respId === s
                ? this.socket.writeBytes(this.ucgateBeatCMD)
                : 0 === this.config.lineSelect.respId
                ? this.pipeEvent('EVENT_PONG')
                : this.socket.writeBytes(this.getValidHostCMD()),
                this.beatPeriod > 0 &&
                  ((this.lastPacketTime = Date.now()),
                  (this.beatInterval = N.setInterval(this.doBeat.bind(this), this.beatPeriod)))
              break
            case r:
              this.beatPeriod > 0 && (this.lastPacketTime = Date.now()),
                e.respId === this.config.lineSelect.respId && (n.stopPropagation(), this.pipeEvent('EVENT_PONG'))
              break
            case 'EVENT_CLOSE':
              this.beatPeriod > 0 && N.clearInterval(this.beatInterval)
          }
        }),
        (e.prototype.doBeat = function () {
          Date.now() - this.lastPacketTime >= 2 * this.beatPeriod - 50
            ? this.socket.close()
            : this.socket.writeBytes(this.ucgateBeatCMD)
        }),
        (e.prototype.onDestory = function () {
          ;(this.beatPeriod = 0),
            (this.ucgateBeatCMD = null),
            N.clearInterval(this.beatInterval),
            (this.beatInterval = 0),
            (this.lastPacketTime = 0),
            (this.config = null)
        }),
        e
      )
    })(gt)
  ),
  bt = (function (t) {
    function e() {
      var e = (null !== t && t.apply(this, arguments)) || this
      return (e.bytearray = new egret.ByteArray()), e
    }
    return (
      l(e, t),
      (e.prototype.onPipeEvent = function (t, e, n) {
        'EVENT_RAW_DATA' === t && (n.stopPropagation(), this.assemble(e))
      }),
      (e.prototype.assemble = function (t) {
        for (
          this.bytearray.position = this.bytearray.length, this.bytearray.writeBytes(t);
          this.bytearray.length >= 12;

        ) {
          this.bytearray.position = 4
          var e = this.bytearray.readUnsignedInt()
          if (!e) return void console.warn('Cannot read packet length, skip parsing this packet')
          if (!(this.bytearray.length >= e)) break
          var n = new egret.ByteArray(this.bytearray.buffer.slice(0, e)),
            i = new _(n.readUnsignedInt(), n)
          this.pipeEvent(r, i),
            this.bytearray.length === e
              ? this.bytearray.clear()
              : (this.bytearray = new egret.ByteArray(this.bytearray.buffer.slice(e)))
        }
      }),
      e
    )
  })(gt),
  mt = (function (t) {
    function e(e, n) {
      var r = t.call(this) || this
      return (r.config = e), (r.responseMap = n), r
    }
    return (
      l(e, t),
      (e.prototype.onPipeEvent = function (t, e, n) {
        if (t === r) {
          var i = void 0
          null !== (i = e instanceof _ ? this.parse(e) : e)
            ? (n.stopPropagation(), this.pipeEvent(r, i))
            : this.config.dataview && (n.stopPropagation(), this.pipeEvent('EVENT_DATA_VIEW', e.bytes.dataView))
        }
      }),
      (e.prototype.parse = function (t) {
        ;(t instanceof T != !1 && !0 !== isNaN(t.respId)) ||
          (console.warn('Invalid data type, please check if "AssemblePacket" has pluged'), this.pipeEvent(r, t))
        var e = t.respId,
          n = this.responseMap.get(e),
          i = t
        return n
          ? ((i = new n(e, t.bytes)).parseResponse(t.bytes), (i.parseResponse = null), delete i.parseResponse, i)
          : null
      }),
      e
    )
  })(gt),
  St = function (t) {
    if ('function' != typeof t) throw TypeError(t + ' is not a function!')
    return t
  },
  Rt = function (t, e, n) {
    if ((St(t), void 0 === e)) return t
    switch (n) {
      case 1:
        return function (n) {
          return t.call(e, n)
        }
      case 2:
        return function (n, r) {
          return t.call(e, n, r)
        }
      case 3:
        return function (n, r, i) {
          return t.call(e, n, r, i)
        }
    }
    return function () {
      return t.apply(e, arguments)
    }
  },
  kt = function (t, e, n) {
    var r,
      i,
      o,
      a,
      s = t & kt.F,
      c = t & kt.G,
      u = t & kt.S,
      f = t & kt.P,
      l = t & kt.B,
      h = c ? x : u ? x[e] || (x[e] = {}) : (x[e] || {}).prototype,
      p = c ? tt : tt[e] || (tt[e] = {}),
      d = p.prototype || (p.prototype = {})
    for (r in (c && (n = e), n))
      (o = ((i = !s && h && void 0 !== h[r]) ? h : n)[r]),
        (a = l && i ? Rt(o, x) : f && 'function' == typeof o ? Rt(Function.call, o) : o),
        h && et(h, r, o, t & kt.U),
        p[r] != o && K(p, r, a),
        f && d[r] != o && (d[r] = o)
  }
;(x.core = tt), (kt.F = 1), (kt.G = 2), (kt.S = 4), (kt.P = 8), (kt.B = 16), (kt.W = 32), (kt.U = 64), (kt.R = 128)
var Mt,
  It,
  Ot,
  Pt = kt,
  Nt = function (t, e, n, r) {
    if (!(t instanceof e) || (void 0 !== r && r in t)) throw TypeError(n + ': incorrect invocation!')
    return t
  },
  Ut = function (t, e, n, r) {
    try {
      return r ? e(C(n)[0], n[1]) : e(n)
    } catch (e) {
      var i = t.return
      throw (void 0 !== i && C(i.call(t)), e)
    }
  },
  Dt = {},
  Ft = ft('iterator'),
  Ct = Array.prototype,
  Lt = function (t) {
    return void 0 !== t && (Dt.Array === t || Ct[Ft] === t)
  },
  xt = Math.ceil,
  Bt = Math.floor,
  Xt = function (t) {
    return isNaN((t = +t)) ? 0 : (t > 0 ? Bt : xt)(t)
  },
  zt = Math.min,
  Vt = function (t) {
    return t > 0 ? zt(Xt(t), 9007199254740991) : 0
  },
  Ht = ft('iterator'),
  jt = (tt.getIteratorMethod = function (t) {
    if (null != t) return t[Ht] || t['@@iterator'] || Dt[pt(t)]
  }),
  Wt = L(function (t) {
    var e = {},
      n = {},
      r = (t.exports = function (t, r, i, o, a) {
        var s,
          c,
          u,
          f,
          l = a
            ? function () {
                return t
              }
            : jt(t),
          h = Rt(i, o, r ? 2 : 1),
          p = 0
        if ('function' != typeof l) throw TypeError(t + ' is not iterable!')
        if (Lt(l)) {
          for (s = Vt(t.length); s > p; p++)
            if ((f = r ? h(C((c = t[p]))[0], c[1]) : h(t[p])) === e || f === n) return f
        } else for (u = l.call(t); !(c = u.next()).done; ) if ((f = Ut(u, h, c.value, r)) === e || f === n) return f
      })
    ;(r.BREAK = e), (r.RETURN = n)
  }),
  Qt = ft('species'),
  Gt = function (t, e) {
    var n,
      r = C(t).constructor
    return void 0 === r || null == (n = C(r)[Qt]) ? e : St(n)
  },
  Kt = x.document,
  Yt = Kt && Kt.documentElement,
  qt = x.process,
  Jt = x.setImmediate,
  $t = x.clearImmediate,
  Zt = x.MessageChannel,
  te = x.Dispatch,
  ee = 0,
  ne = {},
  re = function () {
    var t = +this
    if (ne.hasOwnProperty(t)) {
      var e = ne[t]
      delete ne[t], e()
    }
  },
  ie = function (t) {
    re.call(t.data)
  }
;(Jt && $t) ||
  ((Jt = function (t) {
    for (var e = [], n = 1; arguments.length > n; ) e.push(arguments[n++])
    return (
      (ne[++ee] = function () {
        !(function (t, e, n) {
          var r = void 0 === n
          switch (e.length) {
            case 0:
              return r ? t() : t.call(n)
            case 1:
              return r ? t(e[0]) : t.call(n, e[0])
            case 2:
              return r ? t(e[0], e[1]) : t.call(n, e[0], e[1])
            case 3:
              return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2])
            case 4:
              return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
          }
          t.apply(n, e)
        })('function' == typeof t ? t : Function(t), e)
      }),
      Mt(ee),
      ee
    )
  }),
  ($t = function (t) {
    delete ne[t]
  }),
  'process' == ct(qt)
    ? (Mt = function (t) {
        qt.nextTick(Rt(re, t, 1))
      })
    : te && te.now
    ? (Mt = function (t) {
        te.now(Rt(re, t, 1))
      })
    : Zt
    ? ((Ot = (It = new Zt()).port2), (It.port1.onmessage = ie), (Mt = Rt(Ot.postMessage, Ot, 1)))
    : x.addEventListener && 'function' == typeof postMessage && !x.importScripts
    ? ((Mt = function (t) {
        x.postMessage(t + '', '*')
      }),
      x.addEventListener('message', ie, !1))
    : (Mt =
        'onreadystatechange' in z('script')
          ? function (t) {
              Yt.appendChild(z('script')).onreadystatechange = function () {
                Yt.removeChild(this), re.call(t)
              }
            }
          : function (t) {
              setTimeout(Rt(re, t, 1), 0)
            }))
var oe = {
    set: Jt,
    clear: $t
  },
  ae = oe.set,
  se = x.MutationObserver || x.WebKitMutationObserver,
  ce = x.process,
  ue = x.Promise,
  fe = 'process' == ct(ce)
function le(t) {
  var e, n
  ;(this.promise = new t(function (t, r) {
    if (void 0 !== e || void 0 !== n) throw TypeError('Bad Promise constructor')
    ;(e = t), (n = r)
  })),
    (this.resolve = St(e)),
    (this.reject = St(n))
}
var he = {
    f: function (t) {
      return new le(t)
    }
  },
  pe = function (t) {
    try {
      return {
        e: !1,
        v: t()
      }
    } catch (t) {
      return {
        e: !0,
        v: t
      }
    }
  },
  de = x.navigator,
  ye = (de && de.userAgent) || '',
  ge = function (t, e, n) {
    for (var r in e) et(t, r, e[r], n)
    return t
  },
  ve = W.f,
  Ee = ft('toStringTag'),
  we = function (t, e, n) {
    t &&
      !q((t = n ? t : t.prototype), Ee) &&
      ve(t, Ee, {
        configurable: !0,
        value: e
      })
  },
  Te = ft('species'),
  _e = function (t) {
    var e = x[t]
    D &&
      e &&
      !e[Te] &&
      W.f(e, Te, {
        configurable: !0,
        get: function () {
          return this
        }
      })
  },
  Ae = ft('iterator'),
  be = !1
try {
  ;[7][Ae]().return = function () {
    be = !0
  }
} catch (d) {}
var me,
  Se,
  Re,
  ke,
  Me = function (t, e) {
    if (!e && !be) return !1
    var n = !1
    try {
      var r = [7],
        i = r[Ae]()
      ;(i.next = function () {
        return {
          done: (n = !0)
        }
      }),
        (r[Ae] = function () {
          return i
        }),
        t(r)
    } catch (t) {}
    return n
  },
  Ie = oe.set,
  Oe = (function () {
    var t,
      e,
      n,
      r = function () {
        var r, i
        for (fe && (r = ce.domain) && r.exit(); t; ) {
          ;(i = t.fn), (t = t.next)
          try {
            i()
          } catch (r) {
            throw (t ? n() : (e = void 0), r)
          }
        }
        ;(e = void 0), r && r.enter()
      }
    if (fe)
      n = function () {
        ce.nextTick(r)
      }
    else if (!se || (x.navigator && x.navigator.standalone))
      if (ue && ue.resolve) {
        var i = ue.resolve(void 0)
        n = function () {
          i.then(r)
        }
      } else
        n = function () {
          ae.call(x, r)
        }
    else {
      var o = !0,
        a = document.createTextNode('')
      new se(r).observe(a, {
        characterData: !0
      }),
        (n = function () {
          a.data = o = !o
        })
    }
    return function (r) {
      var i = {
        fn: r,
        next: void 0
      }
      e && (e.next = i), t || ((t = i), n()), (e = i)
    }
  })(),
  Pe = x.TypeError,
  Ne = x.process,
  Ue = Ne && Ne.versions,
  De = (Ue && Ue.v8) || '',
  Fe = x.Promise,
  Ce = 'process' == pt(Ne),
  Le = function () {},
  xe = (Se = he.f),
  Be = !!(function () {
    try {
      var t = Fe.resolve(1),
        e = ((t.constructor = {})[ft('species')] = function (t) {
          t(Le, Le)
        })
      return (
        (Ce || 'function' == typeof PromiseRejectionEvent) &&
        t.then(Le) instanceof e &&
        0 !== De.indexOf('6.6') &&
        -1 === ye.indexOf('Chrome/66')
      )
    } catch (t) {}
  })(),
  Xe = function (t) {
    var e
    return !(!F(t) || 'function' != typeof (e = t.then)) && e
  },
  ze = function (t, e) {
    if (!t._n) {
      t._n = !0
      var n = t._c
      Oe(function () {
        for (
          var r = t._v,
            i = 1 == t._s,
            o = 0,
            a = function (e) {
              var n,
                o,
                a,
                s = i ? e.ok : e.fail,
                c = e.resolve,
                u = e.reject,
                f = e.domain
              try {
                s
                  ? (i || (2 == t._h && je(t), (t._h = 1)),
                    !0 === s ? (n = r) : (f && f.enter(), (n = s(r)), f && (f.exit(), (a = !0))),
                    n === e.promise ? u(Pe('Promise-chain cycle')) : (o = Xe(n)) ? o.call(n, c, u) : c(n))
                  : u(r)
              } catch (t) {
                f && !a && f.exit(), u(t)
              }
            };
          n.length > o;

        )
          a(n[o++])
        ;(t._c = []), (t._n = !1), e && !t._h && Ve(t)
      })
    }
  },
  Ve = function (t) {
    Ie.call(x, function () {
      var e,
        n,
        r,
        i = t._v,
        o = He(t)
      if (
        (o &&
          ((e = pe(function () {
            Ce
              ? Ne.emit('unhandledRejection', i, t)
              : (n = x.onunhandledrejection)
              ? n({
                  promise: t,
                  reason: i
                })
              : (r = x.console) && r.error && r.error('Unhandled promise rejection', i)
          })),
          (t._h = Ce || He(t) ? 2 : 1)),
        (t._a = void 0),
        o && e.e)
      )
        throw e.v
    })
  },
  He = function (t) {
    return 1 !== t._h && 0 === (t._a || t._c).length
  },
  je = function (t) {
    Ie.call(x, function () {
      var e
      Ce
        ? Ne.emit('rejectionHandled', t)
        : (e = x.onrejectionhandled) &&
          e({
            promise: t,
            reason: t._v
          })
    })
  },
  We = function (t) {
    var e = this
    e._d || ((e._d = !0), ((e = e._w || e)._v = t), (e._s = 2), e._a || (e._a = e._c.slice()), ze(e, !0))
  },
  Qe = function (t) {
    var e,
      n = this
    if (!n._d) {
      ;(n._d = !0), (n = n._w || n)
      try {
        if (n === t) throw Pe("Promise can't be resolved itself")
        ;(e = Xe(t))
          ? Oe(function () {
              var r = {
                _w: n,
                _d: !1
              }
              try {
                e.call(t, Rt(Qe, r, 1), Rt(We, r, 1))
              } catch (t) {
                We.call(r, t)
              }
            })
          : ((n._v = t), (n._s = 1), ze(n, !1))
      } catch (t) {
        We.call(
          {
            _w: n,
            _d: !1
          },
          t
        )
      }
    }
  }
Be ||
  ((Fe = function (t) {
    Nt(this, Fe, 'Promise', '_h'), St(t), me.call(this)
    try {
      t(Rt(Qe, this, 1), Rt(We, this, 1))
    } catch (t) {
      We.call(this, t)
    }
  }),
  ((me = function (t) {
    ;(this._c = []),
      (this._a = void 0),
      (this._s = 0),
      (this._d = !1),
      (this._v = void 0),
      (this._h = 0),
      (this._n = !1)
  }).prototype = ge(Fe.prototype, {
    then: function (t, e) {
      var n = xe(Gt(this, Fe))
      return (
        (n.ok = 'function' != typeof t || t),
        (n.fail = 'function' == typeof e && e),
        (n.domain = Ce ? Ne.domain : void 0),
        this._c.push(n),
        this._a && this._a.push(n),
        this._s && ze(this, !1),
        n.promise
      )
    },
    catch: function (t) {
      return this.then(void 0, t)
    }
  })),
  (Re = function () {
    var t = new me()
    ;(this.promise = t), (this.resolve = Rt(Qe, t, 1)), (this.reject = Rt(We, t, 1))
  }),
  (he.f = xe = function (t) {
    return t === Fe || t === ke ? new Re(t) : Se(t)
  })),
  Pt(Pt.G + Pt.W + Pt.F * !Be, {
    Promise: Fe
  }),
  we(Fe, 'Promise'),
  _e('Promise'),
  (ke = tt.Promise),
  Pt(Pt.S + Pt.F * !Be, 'Promise', {
    reject: function (t) {
      var e = xe(this)
      return (0, e.reject)(t), e.promise
    }
  }),
  Pt(Pt.S + Pt.F * !Be, 'Promise', {
    resolve: function (t) {
      return (function (t, e) {
        if ((C(t), F(e) && e.constructor === t)) return e
        var n = he.f(t)
        return (0, n.resolve)(e), n.promise
      })(this, t)
    }
  }),
  Pt(
    Pt.S +
      Pt.F *
        !(
          Be &&
          Me(function (t) {
            Fe.all(t).catch(Le)
          })
        ),
    'Promise',
    {
      all: function (t) {
        var e = this,
          n = xe(e),
          r = n.resolve,
          i = n.reject,
          o = pe(function () {
            var n = [],
              o = 0,
              a = 1
            Wt(t, !1, function (t) {
              var s = o++,
                c = !1
              n.push(void 0),
                a++,
                e.resolve(t).then(function (t) {
                  c || ((c = !0), (n[s] = t), --a || r(n))
                }, i)
            }),
              --a || r(n)
          })
        return o.e && i(o.v), n.promise
      },
      race: function (t) {
        var e = this,
          n = xe(e),
          r = n.reject,
          i = pe(function () {
            Wt(t, !1, function (t) {
              e.resolve(t).then(n.resolve, r)
            })
          })
        return i.e && r(i.v), n.promise
      }
    }
  )
var Ge = ft('unscopables'),
  Ke = Array.prototype
null == Ke[Ge] && K(Ke, Ge, {})
var Ye = function (t) {
    Ke[Ge][t] = !0
  },
  qe = function (t, e) {
    return {
      value: e,
      done: !!t
    }
  },
  Je = Object('z').propertyIsEnumerable(0)
    ? Object
    : function (t) {
        return 'String' == ct(t) ? t.split('') : Object(t)
      },
  $e = function (t) {
    if (null == t) throw TypeError("Can't call method on  " + t)
    return t
  },
  Ze = function (t) {
    return Je($e(t))
  },
  tn = Math.max,
  en = Math.min,
  nn = function (t, e) {
    return (t = Xt(t)) < 0 ? tn(t + e, 0) : en(t, e)
  },
  rn = function (t) {
    return function (e, n, r) {
      var i,
        o = Ze(e),
        a = Vt(o.length),
        s = nn(r, a)
      if (t && n != n) {
        for (; a > s; ) if ((i = o[s++]) != i) return !0
      } else for (; a > s; s++) if ((t || s in o) && o[s] === n) return t || s || 0
      return !t && -1
    }
  },
  on = ut('keys'),
  an = function (t) {
    return on[t] || (on[t] = Z(t))
  },
  sn = rn(!1),
  cn = an('IE_PROTO'),
  un = function (t, e) {
    var n,
      r = Ze(t),
      i = 0,
      o = []
    for (n in r) n != cn && q(r, n) && o.push(n)
    for (; e.length > i; ) q(r, (n = e[i++])) && (~sn(o, n) || o.push(n))
    return o
  },
  fn = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(','),
  ln =
    Object.keys ||
    function (t) {
      return un(t, fn)
    },
  hn = D
    ? Object.defineProperties
    : function (t, e) {
        C(t)
        for (var n, r = ln(e), i = r.length, o = 0; i > o; ) W.f(t, (n = r[o++]), e[n])
        return t
      },
  pn = an('IE_PROTO'),
  dn = function () {},
  yn = function () {
    var t,
      e = z('iframe'),
      n = fn.length
    for (
      e.style.display = 'none',
        Yt.appendChild(e),
        e.src = 'javascript:',
        (t = e.contentWindow.document).open(),
        t.write('<script>document.F=Object</script>'),
        t.close(),
        yn = t.F;
      n--;

    )
      delete yn.prototype[fn[n]]
    return yn()
  },
  gn =
    Object.create ||
    function (t, e) {
      var n
      return (
        null !== t ? ((dn.prototype = C(t)), (n = new dn()), (dn.prototype = null), (n[pn] = t)) : (n = yn()),
        void 0 === e ? n : hn(n, e)
      )
    },
  vn = {}
K(vn, ft('iterator'), function () {
  return this
})
var En = function (t, e, n) {
    ;(t.prototype = gn(vn, {
      next: G(1, n)
    })),
      we(t, e + ' Iterator')
  },
  wn = function (t) {
    return Object($e(t))
  },
  Tn = an('IE_PROTO'),
  _n = Object.prototype,
  An =
    Object.getPrototypeOf ||
    function (t) {
      return (
        (t = wn(t)),
        q(t, Tn)
          ? t[Tn]
          : 'function' == typeof t.constructor && t instanceof t.constructor
          ? t.constructor.prototype
          : t instanceof Object
          ? _n
          : null
      )
    },
  bn = ft('iterator'),
  mn = !([].keys && 'next' in [].keys()),
  Sn = function () {
    return this
  },
  Rn = function (t, e, n, r, i, o, a) {
    En(n, e, r)
    var s,
      c,
      u,
      f = function (t) {
        if (!mn && t in d) return d[t]
        switch (t) {
          case 'keys':
          case 'values':
            return function () {
              return new n(this, t)
            }
        }
        return function () {
          return new n(this, t)
        }
      },
      l = e + ' Iterator',
      h = 'values' == i,
      p = !1,
      d = t.prototype,
      y = d[bn] || d['@@iterator'] || (i && d[i]),
      g = y || f(i),
      v = i ? (h ? f('entries') : g) : void 0,
      E = ('Array' == e && d.entries) || y
    if (
      (E &&
        (u = An(E.call(new t()))) !== Object.prototype &&
        u.next &&
        (we(u, l, !0), 'function' != typeof u[bn] && K(u, bn, Sn)),
      h &&
        y &&
        'values' !== y.name &&
        ((p = !0),
        (g = function () {
          return y.call(this)
        })),
      (mn || p || !d[bn]) && K(d, bn, g),
      (Dt[e] = g),
      (Dt[l] = Sn),
      i)
    )
      if (
        ((s = {
          values: h ? g : f('values'),
          keys: o ? g : f('keys'),
          entries: v
        }),
        a)
      )
        for (c in s) c in d || et(d, c, s[c])
      else Pt(Pt.P + Pt.F * (mn || p), e, s)
    return s
  },
  kn = Rn(
    Array,
    'Array',
    function (t, e) {
      ;(this._t = Ze(t)), (this._i = 0), (this._k = e)
    },
    function () {
      var t = this._t,
        e = this._k,
        n = this._i++
      return !t || n >= t.length
        ? ((this._t = void 0), qe(1))
        : qe(0, 'keys' == e ? n : 'values' == e ? t[n] : [n, t[n]])
    },
    'values'
  )
;(Dt.Arguments = Dt.Array), Ye('keys'), Ye('values'), Ye('entries')
for (
  var Mn = ft('iterator'),
    In = ft('toStringTag'),
    On = Dt.Array,
    Pn = {
      CSSRuleList: !0,
      CSSStyleDeclaration: !1,
      CSSValueList: !1,
      ClientRectList: !1,
      DOMRectList: !1,
      DOMStringList: !1,
      DOMTokenList: !0,
      DataTransferItemList: !1,
      FileList: !1,
      HTMLAllCollection: !1,
      HTMLCollection: !1,
      HTMLFormElement: !1,
      HTMLSelectElement: !1,
      MediaList: !0,
      MimeTypeArray: !1,
      NamedNodeMap: !1,
      NodeList: !0,
      PaintRequestList: !1,
      Plugin: !1,
      PluginArray: !1,
      SVGLengthList: !1,
      SVGNumberList: !1,
      SVGPathSegList: !1,
      SVGPointList: !1,
      SVGStringList: !1,
      SVGTransformList: !1,
      SourceBufferList: !1,
      StyleSheetList: !0,
      TextTrackCueList: !1,
      TextTrackList: !1,
      TouchList: !1
    },
    Nn = ln(Pn),
    Un = 0;
  Un < Nn.length;
  Un++
) {
  var Dn,
    Fn = Nn[Un],
    Cn = Pn[Fn],
    Ln = x[Fn],
    xn = Ln && Ln.prototype
  if (xn && (xn[Mn] || K(xn, Mn, On), xn[In] || K(xn, In, Fn), (Dt[Fn] = On), Cn))
    for (Dn in kn) xn[Dn] || et(xn, Dn, kn[Dn], !0)
}
var Bn = (function (t) {
  return function (e, n) {
    var r,
      i,
      o = String($e(e)),
      a = Xt(n),
      s = o.length
    return a < 0 || a >= s
      ? t
        ? ''
        : void 0
      : (r = o.charCodeAt(a)) < 55296 || r > 56319 || a + 1 === s || (i = o.charCodeAt(a + 1)) < 56320 || i > 57343
      ? t
        ? o.charAt(a)
        : r
      : t
      ? o.slice(a, a + 2)
      : i - 56320 + ((r - 55296) << 10) + 65536
  }
})(!0)
Rn(
  String,
  'String',
  function (t) {
    ;(this._t = String(t)), (this._i = 0)
  },
  function () {
    var t,
      e = this._t,
      n = this._i
    return n >= e.length
      ? {
          value: void 0,
          done: !0
        }
      : ((t = Bn(e, n)),
        (this._i += t.length),
        {
          value: t,
          done: !1
        })
  }
)
var Xn = L(function (t) {
    var e = Z('meta'),
      n = W.f,
      r = 0,
      i =
        Object.isExtensible ||
        function () {
          return !0
        },
      o = !U(function () {
        return i(Object.preventExtensions({}))
      }),
      a = function (t) {
        n(t, e, {
          value: {
            i: 'O' + ++r,
            w: {}
          }
        })
      },
      s = (t.exports = {
        KEY: e,
        NEED: !1,
        fastKey: function (t, n) {
          if (!F(t)) return 'symbol' == typeof t ? t : ('string' == typeof t ? 'S' : 'P') + t
          if (!q(t, e)) {
            if (!i(t)) return 'F'
            if (!n) return 'E'
            a(t)
          }
          return t[e].i
        },
        getWeak: function (t, n) {
          if (!q(t, e)) {
            if (!i(t)) return !0
            if (!n) return !1
            a(t)
          }
          return t[e].w
        },
        onFreeze: function (t) {
          return o && s.NEED && i(t) && !q(t, e) && a(t), t
        }
      })
  }),
  zn =
    (Xn.KEY,
    Xn.NEED,
    Xn.fastKey,
    Xn.getWeak,
    Xn.onFreeze,
    function (t, e) {
      if (!F(t) || t._t !== e) throw TypeError('Incompatible receiver, ' + e + ' required!')
      return t
    }),
  Vn = W.f,
  Hn = Xn.fastKey,
  jn = D ? '_s' : 'size',
  Wn = function (t, e) {
    var n,
      r = Hn(e)
    if ('F' !== r) return t._i[r]
    for (n = t._f; n; n = n.n) if (n.k == e) return n
  },
  Qn = {
    getConstructor: function (t, e, n, r) {
      var i = t(function (t, o) {
        Nt(t, i, e, '_i'),
          (t._t = e),
          (t._i = gn(null)),
          (t._f = void 0),
          (t._l = void 0),
          (t[jn] = 0),
          null != o && Wt(o, n, t[r], t)
      })
      return (
        ge(i.prototype, {
          clear: function () {
            for (var t = zn(this, e), n = t._i, r = t._f; r; r = r.n)
              (r.r = !0), r.p && (r.p = r.p.n = void 0), delete n[r.i]
            ;(t._f = t._l = void 0), (t[jn] = 0)
          },
          delete: function (t) {
            var n = zn(this, e),
              r = Wn(n, t)
            if (r) {
              var i = r.n,
                o = r.p
              delete n._i[r.i],
                (r.r = !0),
                o && (o.n = i),
                i && (i.p = o),
                n._f == r && (n._f = i),
                n._l == r && (n._l = o),
                n[jn]--
            }
            return !!r
          },
          forEach: function (t) {
            zn(this, e)
            for (var n, r = Rt(t, arguments.length > 1 ? arguments[1] : void 0, 3); (n = n ? n.n : this._f); )
              for (r(n.v, n.k, this); n && n.r; ) n = n.p
          },
          has: function (t) {
            return !!Wn(zn(this, e), t)
          }
        }),
        D &&
          Vn(i.prototype, 'size', {
            get: function () {
              return zn(this, e)[jn]
            }
          }),
        i
      )
    },
    def: function (t, e, n) {
      var r,
        i,
        o = Wn(t, e)
      return (
        o
          ? (o.v = n)
          : ((t._l = o = {
              i: (i = Hn(e, !0)),
              k: e,
              v: n,
              p: (r = t._l),
              n: void 0,
              r: !1
            }),
            t._f || (t._f = o),
            r && (r.n = o),
            t[jn]++,
            'F' !== i && (t._i[i] = o)),
        t
      )
    },
    getEntry: Wn,
    setStrong: function (t, e, n) {
      Rn(
        t,
        e,
        function (t, n) {
          ;(this._t = zn(t, e)), (this._k = n), (this._l = void 0)
        },
        function () {
          for (var t = this._k, e = this._l; e && e.r; ) e = e.p
          return this._t && (this._l = e = e ? e.n : this._t._f)
            ? qe(0, 'keys' == t ? e.k : 'values' == t ? e.v : [e.k, e.v])
            : ((this._t = void 0), qe(1))
        },
        n ? 'entries' : 'values',
        !n,
        !0
      ),
        _e(e)
    }
  },
  Gn = {
    f: {}.propertyIsEnumerable
  },
  Kn = Object.getOwnPropertyDescriptor,
  Yn = {
    f: D
      ? Kn
      : function (t, e) {
          if (((t = Ze(t)), (e = H(e, !0)), V))
            try {
              return Kn(t, e)
            } catch (t) {}
          if (q(t, e)) return G(!Gn.f.call(t, e), t[e])
        }
  },
  qn = function (t, e) {
    if ((C(t), !F(e) && null !== e)) throw TypeError(e + ": can't set as prototype!")
  },
  Jn = {
    set:
      Object.setPrototypeOf ||
      ('__proto__' in {}
        ? (function (t, e, n) {
            try {
              ;(n = Rt(Function.call, Yn.f(Object.prototype, '__proto__').set, 2))(t, []), (e = !(t instanceof Array))
            } catch (t) {
              e = !0
            }
            return function (t, r) {
              return qn(t, r), e ? (t.__proto__ = r) : n(t, r), t
            }
          })({}, !1)
        : void 0),
    check: qn
  }.set,
  $n = function (t, e, n) {
    var r,
      i = e.constructor
    return i !== n && 'function' == typeof i && (r = i.prototype) !== n.prototype && F(r) && Jn && Jn(t, r), t
  },
  Zn = function (t, e, n, r, i, o) {
    var a = x[t],
      s = a,
      c = i ? 'set' : 'add',
      u = s && s.prototype,
      f = {},
      l = function (t) {
        var e = u[t]
        et(
          u,
          t,
          'delete' == t
            ? function (t) {
                return !(o && !F(t)) && e.call(this, 0 === t ? 0 : t)
              }
            : 'has' == t
            ? function (t) {
                return !(o && !F(t)) && e.call(this, 0 === t ? 0 : t)
              }
            : 'get' == t
            ? function (t) {
                return o && !F(t) ? void 0 : e.call(this, 0 === t ? 0 : t)
              }
            : 'add' == t
            ? function (t) {
                return e.call(this, 0 === t ? 0 : t), this
              }
            : function (t, n) {
                return e.call(this, 0 === t ? 0 : t, n), this
              }
        )
      }
    if (
      'function' == typeof s &&
      (o ||
        (u.forEach &&
          !U(function () {
            new s().entries().next()
          })))
    ) {
      var h = new s(),
        p = h[c](o ? {} : -0, 1) != h,
        d = U(function () {
          h.has(1)
        }),
        y = Me(function (t) {
          new s(t)
        }),
        g =
          !o &&
          U(function () {
            for (var t = new s(), e = 5; e--; ) t[c](e, e)
            return !t.has(-0)
          })
      y ||
        (((s = e(function (e, n) {
          Nt(e, s, t)
          var r = $n(new a(), e, s)
          return null != n && Wt(n, i, r[c], r), r
        })).prototype = u),
        (u.constructor = s)),
        (d || g) && (l('delete'), l('has'), i && l('get')),
        (g || p) && l(c),
        o && u.clear && delete u.clear
    } else (s = r.getConstructor(e, t, i, c)), ge(s.prototype, n), (Xn.NEED = !0)
    return we(s, t), (f[t] = s), Pt(Pt.G + Pt.W + Pt.F * (s != a), f), o || r.setStrong(s, t, i), s
  }
Zn(
  'Map',
  function (t) {
    return function () {
      return t(this, arguments.length > 0 ? arguments[0] : void 0)
    }
  },
  {
    get: function (t) {
      var e = Qn.getEntry(zn(this, 'Map'), t)
      return e && e.v
    },
    set: function (t, e) {
      return Qn.def(zn(this, 'Map'), 0 === t ? 0 : t, e)
    }
  },
  Qn,
  !0
)
function tr() {
  for (var t = 0; t < 9007199254740991 && (!window || 'function' != typeof window.setTimeout); t++) t--
}
var er = (function (e) {
    function n(t) {
      var n = e.call(this) || this
      return (
        (n.config = t),
        (n.sortedUrlList = []),
        tr(),
        (n.respClazzMap = new Map()),
        n.config ? (n.config = k(I(), t)) : (n.config = I()),
        n.customConfig(),
        (n.socketSelector = n.createSocketSelector()),
        n
      )
    }
    return (
      l(n, e),
      Object.defineProperty(n.prototype, 'readyState', {
        get: function () {
          return this.socketSelector.connecting
            ? bytes.ReadyState.CONNECTING
            : this.singleSocket
            ? this.singleSocket.readyState
            : bytes.ReadyState.DEAD
        },
        enumerable: !0,
        configurable: !0
      }),
      Object.defineProperty(n.prototype, 'url', {
        get: function () {
          return this.singleSocket && this.singleSocket.url ? this.singleSocket.url : null
        },
        enumerable: !0,
        configurable: !0
      }),
      (n.prototype.isOpen = function () {
        return this.readyState === bytes.ReadyState.OPEN
      }),
      (n.prototype.autoConnect = function () {
        return h(this, void 0, void 0, function () {
          var t, e, n
          return p(this, function (r) {
            switch (r.label) {
              case 0:
                if (this.socketSelector.connecting)
                  return console.warn('Call connect too fast, the socket is connecting!'), [2]
                if (
                  (this.killSocket(),
                  this.config.tag || (this.config.tag = this.getTag()),
                  !(t = this.getUrlList()) || 0 === t.length)
                )
                  return console.error('Invalid url list!'), [2, Promise.reject('Invalid url list!')]
                this.setupRespClazzMap(),
                  this.config.debug && console.log(this.config.tag + ' connecting...'),
                  this.dispatchEventWith('EVENT_CONNECTING'),
                  (r.label = 1)
              case 1:
                return r.trys.push([1, 3, , 4]), (e = this), [4, this.socketSelector.getSocket(t)]
              case 2:
                return (e.singleSocket = r.sent()), [2, this.onSocketSelected()]
              case 3:
                if (
                  ((n = r.sent()),
                  (this.singleSocket = null),
                  this.dispatchEventWith('EVENT_DIE'),
                  n.code !== a.BREAK_BY_RESET)
                )
                  throw n
                return this.config.debug && console.warn(this.config.tag + ' Connect cancel!!'), [3, 4]
              case 4:
                return [2]
            }
          })
        })
      }),
      (n.prototype.sortLines = function () {
        return h(this, void 0, Promise, function () {
          var t, e, n
          return p(this, function (r) {
            switch (r.label) {
              case 0:
                if (this.socketSelector.connecting)
                  return console.warn('Call sortLines too fast, the socket is connecting!'), [2]
                if (
                  (this.killSocket(),
                  this.config.tag || (this.config.tag = this.getTag()),
                  !(t = this.getUrlList()) || 0 === t.length)
                )
                  return console.error('Invalid url list!'), [2, Promise.reject('Invalid url list!')]
                this.config.debug && console.log(this.config.tag + ' connecting...'), (r.label = 1)
              case 1:
                return r.trys.push([1, 3, , 4]), (e = this), [4, this.socketSelector.getSocket(t, !0)]
              case 2:
                return (
                  (e.singleSocket = r.sent()),
                  this.killSocket(),
                  (this.sortedUrlList = this.socketSelector.sortedUrlList),
                  [2, this.sortedUrlList]
                )
              case 3:
                if (((n = r.sent()), (this.singleSocket = null), n.code !== a.BREAK_BY_RESET)) throw n
                return this.config.debug && console.warn(this.config.tag + ' Connect cancel!!'), [3, 4]
              case 4:
                return [2]
            }
          })
        })
      }),
      (n.prototype.onSocketSelected = function () {
        ;(this.sortedUrlList = this.socketSelector.sortedUrlList),
          this.appendPluginAfter(),
          this.outputEventAt(this.singleSocket.getPipeEnd()),
          this.dispatchEventWith('EVENT_OPEN'),
          this.config.debug && console.log(this.config.tag + ' open!')
      }),
      (n.prototype.killSocket = function () {
        return h(this, void 0, void 0, function () {
          return p(this, function (t) {
            switch (t.label) {
              case 0:
                return this.socketSelector.connecting ? [4, this.socketSelector.reset()] : [3, 2]
              case 1:
                t.sent(),
                  this.config.debug && console.log(this.config.tag + ' close'),
                  this.dispatchEventWith('EVENT_CLOSE'),
                  (t.label = 2)
              case 2:
                return (
                  this.singleSocket && (this.singleSocket.close(4033, 'kill socket'), (this.singleSocket = null)), [2]
                )
            }
          })
        })
      }),
      (n.prototype.connect = function () {
        this.autoConnect()
      }),
      (n.prototype.close = function () {
        this.killSocket()
      }),
      (n.prototype.writeBytes = function (t) {
        this.isOpen()
          ? this.singleSocket.writeBytes(t)
          : this.config.debug && console.warn(this.config.tag + ' is not open, cannot write bytes')
      }),
      (n.prototype.customConfig = function () {}),
      (n.prototype.getTag = function () {
        return this.config.tag || '[Default]'
      }),
      (n.prototype.getRespMap = function () {
        return this.respClazzMap
      }),
      (n.prototype.getUrlList = function () {
        return this.config.urlList
      }),
      (n.prototype.setupRespClazzMap = function () {}),
      (n.prototype.appendPluginAfter = function () {}),
      n
    )
  })(yt),
  nr = (function (t) {
    function e(e, n) {
      var r = t.call(this, n) || this
      return (
        (r.config = e),
        (r.pluginStack = []),
        (r.pipeEnd = new yt()),
        r.pipeEnd.appendPipeAt(r),
        r.outputEventAt(r.pipeEnd),
        r
      )
    }
    return (
      l(e, t),
      (e.prototype.appendPlugin = function (t) {
        return (
          (t.socket = this),
          this.pipeEnd.removeFromPipe(),
          this.pluginStack.length > 0
            ? t.appendPipeAt(this.pluginStack[this.pluginStack.length - 1])
            : t.appendPipeAt(this),
          this.pipeEnd.appendPipeAt(t),
          this.pluginStack.push(t),
          this
        )
      }),
      (e.prototype.writeBytes = function (e) {
        var n,
          r = this
        this.printLog(e)
        var i = []
        this.pluginStack.forEach(function (t, e) {
          t.doSend && 'function' == typeof t.doSend && i.unshift(t.doSend.bind(t))
        }),
          i.forEach(function (t, i) {
            ;(n = t(e)) !== e && r.printLog(n, ' really')
          }),
          void 0 === n && (n = e),
          t.prototype.writeBytes.call(this, n)
      }),
      (e.prototype.printLog = function (t, e) {
        if ((void 0 === e && (e = ''), this.config.debug)) {
          var n = void 0,
            r = void 0
          t instanceof w
            ? ((n = t.cmdId), (r = t.seqNo))
            : ((t.position = 0), (n = t.readUnsignedInt()), (t.position = 8), (r = t.readUnsignedInt())),
            console.log(
              '[' +
                this.url +
                '] ' +
                this.config.tag +
                e +
                ' send: 0x' +
                vt(n.toString(16), 6) +
                ', length: ' +
                t.length +
                ', seq:' +
                r
            )
        }
      }),
      (e.prototype.getPipeEnd = function () {
        return this.pipeEnd
      }),
      (e.prototype.removeAllPlugins = function () {
        this.pluginStack.forEach(function (t) {
          t.onDestory && 'function' == typeof t.onDestory && t.onDestory(), (t = null)
        }),
          (this.pluginStack = []),
          this.pipeEnd.appendPipeAt(this),
          this.outputEventAt(this.pipeEnd)
      }),
      e
    )
  })(
    (function (e) {
      function n(t) {
        var n = e.call(this) || this
        return (n.WebSocketClazz = t), (n._writeByte = new egret.ByteArray()), n
      }
      return (
        l(n, e),
        (n.prototype.connectByUrl = function (e) {
          return h(this, void 0, Promise, function () {
            var n,
              r,
              i = this
            return p(this, function (o) {
              return (
                (n = 10),
                (r = function () {
                  return new Promise(function (t, o) {
                    i.url = e
                    try {
                      ;(i.socket = new i.WebSocketClazz(e)),
                        (i.socket.binaryType = 'arraybuffer'),
                        i.pipeEvent('EVENT_CONNECTING'),
                        i.bindSocketEvent(),
                        t()
                    } catch (t) {
                      var a = 200 * (11 - n)
                      if ((console.warn(t), !(n > 0))) throw t
                      n--,
                        console.warn('connect error', t, n),
                        N.setTimeout(function () {
                          return r()
                        }, a)
                    }
                  })
                }),
                this.socket &&
                (this.socket.readyState === bytes.ReadyState.CONNECTING ||
                  this.socket.readyState === bytes.ReadyState.OPEN)
                  ? this.url === e
                    ? (console.warn('ReadyState is ' + this.socket.readyState + ', do nothing'), [2, void 0])
                    : (this.close(4033, 'reconnect to another url'), [2, r()])
                  : [2, r()]
              )
            })
          })
        }),
        Object.defineProperty(n.prototype, 'readyState', {
          get: function () {
            return void 0 !== this._readyState
              ? this._readyState
              : this.socket
              ? this.socket.readyState
              : bytes.ReadyState.CLOSED
          },
          enumerable: !0,
          configurable: !0
        }),
        (n.prototype.send = function (t) {
          this.socket ? this.socket.send(t) : console.warn('Send before connect!')
        }),
        (n.prototype.close = function (e, n) {
          if (this.socket)
            switch (this.readyState) {
              case bytes.ReadyState.CONNECTING:
              case bytes.ReadyState.OPEN:
              case bytes.ReadyState.CLOSED:
                if (
                  (this.unbindSocketEvent(),
                  (this._readyState = bytes.ReadyState.CLOSED),
                  this.pipeEvent('EVENT_CLOSE', {
                    code: e,
                    reason: n
                  }),
                  this.socket)
                ) {
                  this.socket.close(e, n)
                  try {
                    this.socket.close(e, n)
                  } catch (t) {
                    console.error('Socket close error', t)
                  }
                }
                ;(this._readyState = void 0), (this.socket = null)
                break
              case bytes.ReadyState.CLOSING:
                this.unbindSocketEvent(),
                  (this.socket = null),
                  this.pipeEvent('EVENT_CLOSE', {
                    code: e,
                    reason: n
                  })
            }
          else console.warn('Close before connect!')
        }),
        (n.prototype.writeBytes = function (t, e, n) {
          void 0 === e && (e = 0),
            void 0 === n && (n = 0),
            this._writeByte.writeBytes(t, e, n),
            this.socket.send(this._writeByte.buffer),
            this._writeByte.clear()
        }),
        (n.prototype.handleEvent = function (t) {
          switch ((tr(), t.type)) {
            case 'open':
              this.pipeEvent('EVENT_OPEN', t)
              break
            case 'message':
              var e = t
              this.pipeEvent('EVENT_RAW_DATA', new egret.ByteArray(e.data))
              break
            case 'close':
              this.pipeEvent('EVENT_CLOSE', t)
              break
            case 'error':
              this.pipeEvent('EVENT_ERROR', t)
          }
        }),
        (n.prototype.bindSocketEvent = function () {
          this.socket.addEventListener('open', this),
            this.socket.addEventListener('message', this),
            this.socket.addEventListener('close', this),
            this.socket.addEventListener('error', this)
        }),
        (n.prototype.unbindSocketEvent = function () {
          this.socket.removeEventListener('open', this),
            this.socket.removeEventListener('message', this),
            this.socket.removeEventListener('close', this),
            this.socket.removeEventListener('error', this)
        }),
        n
      )
    })(yt)
  ),
  rr = function (t, e, n) {
    var r = ft(t),
      i = n($e, r, ''[t]),
      o = i[0],
      a = i[1]
    U(function () {
      var e = {}
      return (
        (e[r] = function () {
          return 7
        }),
        7 != ''[t](e)
      )
    }) &&
      (et(String.prototype, t, o),
      K(
        RegExp.prototype,
        r,
        2 == e
          ? function (t, e) {
              return a.call(t, this, e)
            }
          : function (t) {
              return a.call(t, this)
            }
      ))
  },
  ir = ft('match'),
  or = function (t) {
    var e
    return F(t) && (void 0 !== (e = t[ir]) ? !!e : 'RegExp' == ct(t))
  }
rr('split', 2, function (t, e, n) {
  var r = or,
    i = n,
    o = [].push
  if (
    'c' == 'abbc'.split(/(b)*/)[1] ||
    4 != 'test'.split(/(?:)/, -1).length ||
    2 != 'ab'.split(/(?:ab)*/).length ||
    4 != '.'.split(/(.?)(.?)/).length ||
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    var a = void 0 === /()??/.exec('')[1]
    n = function (t, e) {
      var n = String(this)
      if (void 0 === t && 0 === e) return []
      if (!r(t)) return i.call(n, t, e)
      var s,
        c,
        u,
        f,
        l,
        h = [],
        p = (t.ignoreCase ? 'i' : '') + (t.multiline ? 'm' : '') + (t.unicode ? 'u' : '') + (t.sticky ? 'y' : ''),
        d = 0,
        y = void 0 === e ? 4294967295 : e >>> 0,
        g = new RegExp(t.source, p + 'g')
      for (
        a || (s = new RegExp('^' + g.source + '$(?!\\s)', p));
        (c = g.exec(n)) &&
        !(
          (u = c.index + c[0].length) > d &&
          (h.push(n.slice(d, c.index)),
          !a &&
            c.length > 1 &&
            c[0].replace(s, function () {
              for (l = 1; l < arguments.length - 2; l++) void 0 === arguments[l] && (c[l] = void 0)
            }),
          c.length > 1 && c.index < n.length && o.apply(h, c.slice(1)),
          (f = c[0].length),
          (d = u),
          h.length >= y)
        );

      )
        g.lastIndex === c.index && g.lastIndex++
      return d === n.length ? (!f && g.test('')) || h.push('') : h.push(n.slice(d)), h.length > y ? h.slice(0, y) : h
    }
  } else
    '0'.split(void 0, 0).length &&
      (n = function (t, e) {
        return void 0 === t && 0 === e ? [] : i.call(this, t, e)
      })
  return [
    function (r, i) {
      var o = t(this),
        a = null == r ? void 0 : r[e]
      return void 0 !== a ? a.call(r, o, i) : n.call(String(o), r, i)
    },
    n
  ]
})
Pt(Pt.P, 'String', {
  repeat: function (t) {
    var e = String($e(this)),
      n = '',
      r = Xt(t)
    if (r < 0 || r == 1 / 0) throw RangeError("Count can't be negative")
    for (; r > 0; (r >>>= 1) && (e += e)) 1 & r && (n += e)
    return n
  }
}),
  rr('replace', 2, function (t, e, n) {
    return [
      function (r, i) {
        var o = t(this),
          a = null == r ? void 0 : r[e]
        return void 0 !== a ? a.call(r, o, i) : n.call(String(o), r, i)
      },
      n
    ]
  })
Zn(
  'Set',
  function (t) {
    return function () {
      return t(this, arguments.length > 0 ? arguments[0] : void 0)
    }
  },
  {
    add: function (t) {
      return Qn.def(zn(this, 'Set'), (t = 0 === t ? 0 : t), t)
    }
  },
  Qn
)
for (
  var ar,
    sr = (function (t) {
      function e(e, n, r) {
        var i = t.call(this) || this
        return (
          (i.config = e),
          (i.socketFactory = n),
          (i.cacheManager = r),
          (i._connecting = !1),
          (i.socketGrp = new Set()),
          i
        )
      }
      return (
        l(e, t),
        Object.defineProperty(e.prototype, 'connecting', {
          get: function () {
            return this._connecting
          },
          enumerable: !0,
          configurable: !0
        }),
        (e.prototype.getSocket = function (t, e) {
          return (
            void 0 === e && (e = !1),
            h(this, void 0, void 0, function () {
              var n, r, i
              return p(this, function (o) {
                switch (o.label) {
                  case 0:
                    if (0 === t.length)
                      throw {
                        code: a.EMPTY_URL,
                        msg: 'Empty urlList!'
                      }
                    return (
                      (this.urlList = t),
                      (this._connecting = !0),
                      (n = this.getPortByUrl(t[0])),
                      (r = this.config.lineSelect.refPort),
                      (this.sortedUrlList = []),
                      !e &&
                        this.config.lineSelect.cache &&
                        (r &&
                          r !== n &&
                          (this.sortedUrlList = this.cacheManager.getCache(r).map(function (t) {
                            return t.replace(':' + r, ':' + n)
                          })),
                        0 === this.sortedUrlList.length && (this.sortedUrlList = this.cacheManager.getCache(n))),
                      0 === this.sortedUrlList.length
                        ? ((this.lastPromise = this.retryGetBestSocket()),
                          this.cacheManager.setCache(n, this.sortedUrlList, this.config.lineSelect.cacheTime, e))
                        : (this.lastPromise = this.retryOpenSocket()),
                      [4, this.lastPromise]
                    )
                  case 1:
                    return (i = o.sent()), (this._connecting = !1), [2, i]
                }
              })
            })
          )
        }),
        (e.prototype.reset = function () {
          return h(this, void 0, void 0, function () {
            var t = this
            return p(this, function (e) {
              switch (e.label) {
                case 0:
                  this.socketGrp.forEach(function (e) {
                    e.close(4033), t.socketGrp.delete(e)
                  }, this),
                    (this._connecting = !1),
                    (e.label = 1)
                case 1:
                  return e.trys.push([1, 4, , 5]), this.lastPromise ? [4, this.lastPromise] : [3, 3]
                case 2:
                  e.sent(), (e.label = 3)
                case 3:
                  return [3, 5]
                case 4:
                  return e.sent(), [3, 5]
                case 5:
                  return [2]
              }
            })
          })
        }),
        (e.prototype.retryGetBestSocket = function (t) {
          return (
            void 0 === t && (t = 0),
            h(this, void 0, Promise, function () {
              return p(this, function (e) {
                switch (e.label) {
                  case 0:
                    if (!this._connecting)
                      throw {
                        code: a.BREAK_BY_RESET,
                        msg: 'Break by reset!'
                      }
                    e.label = 1
                  case 1:
                    return e.trys.push([1, 3, , 7]), [4, this.tryGetBestSocket()]
                  case 2:
                    return [2, e.sent()]
                  case 3:
                    return e.sent(), t < this.config.lineSelect.repeat ? [4, this.retryGetBestSocket(t + 1)] : [3, 5]
                  case 4:
                    return [2, e.sent()]
                  case 5:
                    throw {
                      code: a.REPEAT_TOO_MANY,
                      msg: 'Repeat too many!'
                    }
                  case 6:
                    return [3, 7]
                  case 7:
                    return [2]
                }
              })
            })
          )
        }),
        (e.prototype.tryGetBestSocket = function () {
          return h(this, void 0, void 0, function () {
            var t,
              e,
              n = this
            return p(this, function (r) {
              switch (r.label) {
                case 0:
                  return (
                    (t = this.urlList.map(function (t) {
                      return n.trySocket(t)
                    }, this)),
                    [4, Promise.race(t)]
                  )
                case 1:
                  return (
                    (e = r.sent()),
                    t.forEach(function (t) {
                      t.then(function (t) {
                        n.sortedUrlList.push(t.url), t !== e && t.close(4033)
                      }).catch(function (t) {
                        console.warn(t)
                      })
                    }, this),
                    [2, e]
                  )
              }
            })
          })
        }),
        (e.prototype.trySocket = function (t) {
          return h(this, void 0, void 0, function () {
            var e = this
            return p(this, function (n) {
              switch (n.label) {
                case 0:
                  return [
                    4,
                    new Promise(function (n, r) {
                      return h(e, void 0, void 0, function () {
                        var e,
                          i,
                          o,
                          s = this
                        return p(this, function (c) {
                          switch (c.label) {
                            case 0:
                              return (
                                (i = this.socketFactory.createSocket()),
                                (o = function (t) {
                                  N.clearTimeout(e), s.socketGrp.delete(i), n(t.currentTarget)
                                }),
                                i.once('EVENT_PONG', o, this),
                                this.socketGrp.add(i),
                                [4, i.connectByUrl(t)]
                              )
                            case 1:
                              return (
                                c.sent(),
                                (e = N.setTimeout(function () {
                                  i.removeEventListener('EVENT_PONG', o, s),
                                    i.close(4033),
                                    s.socketGrp.delete(i),
                                    r({
                                      code: a.TIMEOUT,
                                      msg: 'Select socket timeout!'
                                    })
                                }, this.config.lineSelect.duration)),
                                [2]
                              )
                          }
                        })
                      })
                    })
                  ]
                case 1:
                  return [2, n.sent()]
              }
            })
          })
        }),
        (e.prototype.getPortByUrl = function (t) {
          var e = t.split(':')[2]
          return void 0 === e && (e = '80'), e
        }),
        (e.prototype.retryOpenSocket = function (t) {
          return (
            void 0 === t && (t = 0),
            h(this, void 0, Promise, function () {
              return p(this, function (e) {
                switch (e.label) {
                  case 0:
                    if (!this._connecting)
                      throw {
                        code: a.BREAK_BY_RESET,
                        msg: 'Break by reset!'
                      }
                    e.label = 1
                  case 1:
                    return (
                      e.trys.push([1, 3, , 4]), [4, this.trySocket(this.sortedUrlList[t % this.sortedUrlList.length])]
                    )
                  case 2:
                    return [2, e.sent()]
                  case 3:
                    if ((e.sent(), t < this.config.lineSelect.repeat)) return [2, this.retryOpenSocket(t + 1)]
                    throw {
                      code: a.REPEAT_TOO_MANY,
                      msg: 'Repeat too many!'
                    }
                  case 4:
                    return [2]
                }
              })
            })
          )
        }),
        e
      )
    })(yt),
    cr = (function () {
      function t(t, e) {
        ;(this.urlList = t), (this.lifeLong = e), (this.timestamp = Date.now())
      }
      return (
        (t.prototype.isExpired = function () {
          return Date.now() - this.timestamp > this.lifeLong
        }),
        t
      )
    })(),
    ur = new ((function () {
      function t() {
        this.cacheMap = new Map()
      }
      return (
        (t.prototype.setCache = function (t, e, n, r) {
          void 0 === r && (r = !1),
            r && e ? this.cacheMap.set(t, new cr(e, n)) : this.cacheMap.has(t) || this.cacheMap.set(t, new cr(e, n))
        }),
        (t.prototype.removeCache = function (t) {
          var e = this.cacheMap.get(t)
          return this.cacheMap.delete(t), e.urlList
        }),
        (t.prototype.getCache = function (t) {
          var e = this.cacheMap.get(t)
          return void 0 === e ? [] : e.isExpired() ? (this.cacheMap.delete(t), []) : e.urlList
        }),
        t
      )
    })())(),
    fr = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this
      }
      return (
        l(e, t),
        (e.prototype.setupRespClazzMap = function () {}),
        (e.prototype.createSocketSelector = function () {
          return new sr(this.config, this, ur)
        }),
        (e.prototype.createSocket = function () {
          var t = new nr(this.config, WebSocket)
          return t.appendPlugin(new bt()), t.appendPlugin(new At(this.config)), t.appendPlugin(new Tt(this.config)), t
        }),
        (e.prototype.appendPluginAfter = function () {
          tr(), this.singleSocket.appendPlugin(new _t(this.config, this.sortedUrlList))
        }),
        e
      )
    })(er),
    lr =
      ((function (t) {
        function e(e) {
          var n = t.call(this, e) || this
          return (n.createParams = e), n
        }
        l(e, t),
          (e.prototype.sendDataView = function (t) {
            this.singleSocket.send(t.buffer)
          }),
          (e.prototype.getUrlList = function () {
            return this.createParams.urlList
          }),
          (e.prototype.setupRespClazzMap = function () {
            var e
            t.prototype.setupRespClazzMap.call(this),
              this.createParams.respClazzMap &&
                ((e = this.respClazzMap),
                this.createParams.respClazzMap.forEach(function (t, n) {
                  e.set(n, t)
                }))
          })
      })(fr),
      (function (t) {
        function e(e) {
          var n = t.call(this, e) || this
          return (n.dynRespClazzMapMap = new Map()), n
        }
        return (
          l(e, t),
          (e.prototype.appendRespClazzMap = function (t, e) {
            this.dynRespClazzMapMap.set(t, e)
          }),
          (e.prototype.removeRespClazzMap = function (t) {
            this.dynRespClazzMapMap.delete(t)
          }),
          (e.prototype.appendRespClazz = function (t, e, n) {
            var r
            void 0 === n && (n = '_default_'),
              this.dynRespClazzMapMap.has(n)
                ? (r = this.dynRespClazzMapMap.get(n))
                : ((r = new Map()), this.dynRespClazzMapMap.set(n, r)),
              r.set(t, e)
          }),
          (e.prototype.removeRespClazz = function (t, e) {
            void 0 === e && (e = '_default_'),
              this.dynRespClazzMapMap.has(e) && this.dynRespClazzMapMap.get(e).delete(t)
          }),
          e
        )
      })(fr)),
    hr = Z('typed_array'),
    pr = Z('view'),
    dr = !(!x.ArrayBuffer || !x.DataView),
    yr = dr,
    gr = 0,
    vr = 'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'.split(
      ','
    );
  gr < 9;

)
  (ar = x[vr[gr++]]) ? (K(ar.prototype, hr, !0), K(ar.prototype, pr, !0)) : (yr = !1)
var Er = {
    ABV: dr,
    CONSTR: yr,
    TYPED: hr,
    VIEW: pr
  },
  wr = function (t) {
    if (void 0 === t) return 0
    var e = Xt(t),
      n = Vt(e)
    if (e !== n) throw RangeError('Wrong length!')
    return n
  },
  Tr = fn.concat('length', 'prototype'),
  _r = {
    f:
      Object.getOwnPropertyNames ||
      function (t) {
        return un(t, Tr)
      }
  },
  Ar = function (t) {
    for (
      var e = wn(this),
        n = Vt(e.length),
        r = arguments.length,
        i = nn(r > 1 ? arguments[1] : void 0, n),
        o = r > 2 ? arguments[2] : void 0,
        a = void 0 === o ? n : nn(o, n);
      a > i;

    )
      e[i++] = t
    return e
  },
  br = L(function (t, e) {
    var n = _r.f,
      r = W.f,
      i = 'prototype',
      o = 'Wrong index!',
      a = x.ArrayBuffer,
      s = x.DataView,
      c = x.Math,
      u = x.RangeError,
      f = x.Infinity,
      l = a,
      h = c.abs,
      p = c.pow,
      d = c.floor,
      y = c.log,
      g = c.LN2,
      v = D ? '_b' : 'buffer',
      E = D ? '_l' : 'byteLength',
      w = D ? '_o' : 'byteOffset'
    function T(t, e, n) {
      var r,
        i,
        o,
        a = new Array(n),
        s = 8 * n - e - 1,
        c = (1 << s) - 1,
        u = c >> 1,
        l = 23 === e ? p(2, -24) - p(2, -77) : 0,
        v = 0,
        E = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0
      for (
        (t = h(t)) != t || t === f
          ? ((i = t != t ? 1 : 0), (r = c))
          : ((r = d(y(t) / g)),
            t * (o = p(2, -r)) < 1 && (r--, (o *= 2)),
            (t += r + u >= 1 ? l / o : l * p(2, 1 - u)) * o >= 2 && (r++, (o /= 2)),
            r + u >= c
              ? ((i = 0), (r = c))
              : r + u >= 1
              ? ((i = (t * o - 1) * p(2, e)), (r += u))
              : ((i = t * p(2, u - 1) * p(2, e)), (r = 0)));
        e >= 8;
        a[v++] = 255 & i, i /= 256, e -= 8
      );
      for (r = (r << e) | i, s += e; s > 0; a[v++] = 255 & r, r /= 256, s -= 8);
      return (a[--v] |= 128 * E), a
    }
    function _(t, e, n) {
      var r,
        i = 8 * n - e - 1,
        o = (1 << i) - 1,
        a = o >> 1,
        s = i - 7,
        c = n - 1,
        u = t[c--],
        l = 127 & u
      for (u >>= 7; s > 0; l = 256 * l + t[c], c--, s -= 8);
      for (r = l & ((1 << -s) - 1), l >>= -s, s += e; s > 0; r = 256 * r + t[c], c--, s -= 8);
      if (0 === l) l = 1 - a
      else {
        if (l === o) return r ? NaN : u ? -f : f
        ;(r += p(2, e)), (l -= a)
      }
      return (u ? -1 : 1) * r * p(2, l - e)
    }
    function A(t) {
      return (t[3] << 24) | (t[2] << 16) | (t[1] << 8) | t[0]
    }
    function b(t) {
      return [255 & t]
    }
    function m(t) {
      return [255 & t, (t >> 8) & 255]
    }
    function S(t) {
      return [255 & t, (t >> 8) & 255, (t >> 16) & 255, (t >> 24) & 255]
    }
    function R(t) {
      return T(t, 52, 8)
    }
    function k(t) {
      return T(t, 23, 4)
    }
    function M(t, e, n) {
      r(t[i], e, {
        get: function () {
          return this[n]
        }
      })
    }
    function I(t, e, n, r) {
      var i = wr(+n)
      if (i + e > t[E]) throw u(o)
      var a = t[v]._b,
        s = i + t[w],
        c = a.slice(s, s + e)
      return r ? c : c.reverse()
    }
    function O(t, e, n, r, i, a) {
      var s = wr(+n)
      if (s + e > t[E]) throw u(o)
      for (var c = t[v]._b, f = s + t[w], l = r(+i), h = 0; h < e; h++) c[f + h] = l[a ? h : e - h - 1]
    }
    if (Er.ABV) {
      if (
        !U(function () {
          a(1)
        }) ||
        !U(function () {
          new a(-1)
        }) ||
        U(function () {
          return new a(), new a(1.5), new a(NaN), 'ArrayBuffer' != a.name
        })
      ) {
        for (
          var P,
            N = ((a = function (t) {
              return Nt(this, a), new l(wr(t))
            })[i] = l[i]),
            F = n(l),
            C = 0;
          F.length > C;

        )
          (P = F[C++]) in a || K(a, P, l[P])
        N.constructor = a
      }
      var L = new s(new a(2)),
        B = s[i].setInt8
      L.setInt8(0, 2147483648),
        L.setInt8(1, 2147483649),
        (!L.getInt8(0) && L.getInt8(1)) ||
          ge(
            s[i],
            {
              setInt8: function (t, e) {
                B.call(this, t, (e << 24) >> 24)
              },
              setUint8: function (t, e) {
                B.call(this, t, (e << 24) >> 24)
              }
            },
            !0
          )
    } else
      (a = function (t) {
        Nt(this, a, 'ArrayBuffer')
        var e = wr(t)
        ;(this._b = Ar.call(new Array(e), 0)), (this[E] = e)
      }),
        (s = function (t, e, n) {
          Nt(this, s, 'DataView'), Nt(t, a, 'DataView')
          var r = t[E],
            i = Xt(e)
          if (i < 0 || i > r) throw u('Wrong offset!')
          if (i + (n = void 0 === n ? r - i : Vt(n)) > r) throw u('Wrong length!')
          ;(this[v] = t), (this[w] = i), (this[E] = n)
        }),
        D && (M(a, 'byteLength', '_l'), M(s, 'buffer', '_b'), M(s, 'byteLength', '_l'), M(s, 'byteOffset', '_o')),
        ge(s[i], {
          getInt8: function (t) {
            return (I(this, 1, t)[0] << 24) >> 24
          },
          getUint8: function (t) {
            return I(this, 1, t)[0]
          },
          getInt16: function (t) {
            var e = I(this, 2, t, arguments[1])
            return (((e[1] << 8) | e[0]) << 16) >> 16
          },
          getUint16: function (t) {
            var e = I(this, 2, t, arguments[1])
            return (e[1] << 8) | e[0]
          },
          getInt32: function (t) {
            return A(I(this, 4, t, arguments[1]))
          },
          getUint32: function (t) {
            return A(I(this, 4, t, arguments[1])) >>> 0
          },
          getFloat32: function (t) {
            return _(I(this, 4, t, arguments[1]), 23, 4)
          },
          getFloat64: function (t) {
            return _(I(this, 8, t, arguments[1]), 52, 8)
          },
          setInt8: function (t, e) {
            O(this, 1, t, b, e)
          },
          setUint8: function (t, e) {
            O(this, 1, t, b, e)
          },
          setInt16: function (t, e) {
            O(this, 2, t, m, e, arguments[2])
          },
          setUint16: function (t, e) {
            O(this, 2, t, m, e, arguments[2])
          },
          setInt32: function (t, e) {
            O(this, 4, t, S, e, arguments[2])
          },
          setUint32: function (t, e) {
            O(this, 4, t, S, e, arguments[2])
          },
          setFloat32: function (t, e) {
            O(this, 4, t, k, e, arguments[2])
          },
          setFloat64: function (t, e) {
            O(this, 8, t, R, e, arguments[2])
          }
        })
    we(a, 'ArrayBuffer'), we(s, 'DataView'), K(s[i], Er.VIEW, !0), (e.ArrayBuffer = a), (e.DataView = s)
  }),
  mr =
    Array.isArray ||
    function (t) {
      return 'Array' == ct(t)
    },
  Sr = ft('species'),
  Rr = function (t, e) {
    return new ((function (t) {
      var e
      return (
        mr(t) &&
          ('function' != typeof (e = t.constructor) || (e !== Array && !mr(e.prototype)) || (e = void 0),
          F(e) && null === (e = e[Sr]) && (e = void 0)),
        void 0 === e ? Array : e
      )
    })(t))(e)
  },
  kr = function (t, e) {
    var n = 1 == t,
      r = 2 == t,
      i = 3 == t,
      o = 4 == t,
      a = 6 == t,
      s = 5 == t || a,
      c = e || Rr
    return function (e, u, f) {
      for (
        var l,
          h,
          p = wn(e),
          d = Je(p),
          y = Rt(u, f, 3),
          g = Vt(d.length),
          v = 0,
          E = n ? c(e, g) : r ? c(e, 0) : void 0;
        g > v;
        v++
      )
        if ((s || v in d) && ((h = y((l = d[v]), v, p)), t))
          if (n) E[v] = h
          else if (h)
            switch (t) {
              case 3:
                return !0
              case 5:
                return l
              case 6:
                return v
              case 2:
                E.push(l)
            }
          else if (o) return !1
      return a ? -1 : i || o ? o : E
    }
  },
  Mr =
    [].copyWithin ||
    function (t, e) {
      var n = wn(this),
        r = Vt(n.length),
        i = nn(t, r),
        o = nn(e, r),
        a = arguments.length > 2 ? arguments[2] : void 0,
        s = Math.min((void 0 === a ? r : nn(a, r)) - o, r - i),
        c = 1
      for (o < i && i < o + s && ((c = -1), (o += s - 1), (i += s - 1)); s-- > 0; )
        o in n ? (n[i] = n[o]) : delete n[i], (i += c), (o += c)
      return n
    },
  Ir = L(function (t) {
    if (D) {
      var e = x,
        n = U,
        r = Pt,
        i = Er,
        o = br,
        a = Rt,
        s = Nt,
        c = G,
        u = K,
        f = ge,
        l = Xt,
        h = Vt,
        p = wr,
        d = nn,
        y = H,
        g = q,
        v = pt,
        E = F,
        w = wn,
        T = Lt,
        _ = gn,
        A = An,
        b = _r.f,
        m = jt,
        S = Z,
        R = ft,
        k = kr,
        M = rn,
        I = Gt,
        O = kn,
        P = Dt,
        N = Me,
        C = _e,
        L = Ar,
        B = Mr,
        X = W,
        z = Yn,
        V = X.f,
        j = z.f,
        Q = e.RangeError,
        Y = e.TypeError,
        J = e.Uint8Array,
        $ = Array.prototype,
        tt = o.ArrayBuffer,
        et = o.DataView,
        nt = k(0),
        rt = k(2),
        it = k(3),
        ot = k(4),
        at = k(5),
        st = k(6),
        ct = M(!0),
        ut = M(!1),
        lt = O.values,
        ht = O.keys,
        dt = O.entries,
        yt = $.lastIndexOf,
        gt = $.reduce,
        vt = $.reduceRight,
        Et = $.join,
        wt = $.sort,
        Tt = $.slice,
        _t = $.toString,
        At = $.toLocaleString,
        bt = R('iterator'),
        mt = R('toStringTag'),
        St = S('typed_constructor'),
        kt = S('def_constructor'),
        Mt = i.CONSTR,
        It = i.TYPED,
        Ot = i.VIEW,
        Ut = k(1, function (t, e) {
          return zt(I(t, t[kt]), e)
        }),
        Ft = n(function () {
          return 1 === new J(new Uint16Array([1]).buffer)[0]
        }),
        Ct =
          !!J &&
          !!J.prototype.set &&
          n(function () {
            new J(1).set({})
          }),
        xt = function (t, e) {
          var n = l(t)
          if (n < 0 || n % e) throw Q('Wrong offset!')
          return n
        },
        Bt = function (t) {
          if (E(t) && It in t) return t
          throw Y(t + ' is not a typed array!')
        },
        zt = function (t, e) {
          if (!(E(t) && St in t)) throw Y('It is not a typed array constructor!')
          return new t(e)
        },
        Ht = function (t, e) {
          return Wt(I(t, t[kt]), e)
        },
        Wt = function (t, e) {
          for (var n = 0, r = e.length, i = zt(t, r); r > n; ) i[n] = e[n++]
          return i
        },
        Qt = function (t, e, n) {
          V(t, e, {
            get: function () {
              return this._d[n]
            }
          })
        },
        Kt = function (t) {
          var e,
            n,
            r,
            i,
            o,
            s,
            c = w(t),
            u = arguments.length,
            f = u > 1 ? arguments[1] : void 0,
            l = void 0 !== f,
            p = m(c)
          if (null != p && !T(p)) {
            for (s = p.call(c), r = [], e = 0; !(o = s.next()).done; e++) r.push(o.value)
            c = r
          }
          for (l && u > 2 && (f = a(f, arguments[2], 2)), e = 0, n = h(c.length), i = zt(this, n); n > e; e++)
            i[e] = l ? f(c[e], e) : c[e]
          return i
        },
        Yt = function () {
          for (var t = 0, e = arguments.length, n = zt(this, e); e > t; ) n[t] = arguments[t++]
          return n
        },
        qt =
          !!J &&
          n(function () {
            At.call(new J(1))
          }),
        Jt = function () {
          return At.apply(qt ? Tt.call(Bt(this)) : Bt(this), arguments)
        },
        $t = {
          copyWithin: function (t, e) {
            return B.call(Bt(this), t, e, arguments.length > 2 ? arguments[2] : void 0)
          },
          every: function (t) {
            return ot(Bt(this), t, arguments.length > 1 ? arguments[1] : void 0)
          },
          fill: function (t) {
            return L.apply(Bt(this), arguments)
          },
          filter: function (t) {
            return Ht(this, rt(Bt(this), t, arguments.length > 1 ? arguments[1] : void 0))
          },
          find: function (t) {
            return at(Bt(this), t, arguments.length > 1 ? arguments[1] : void 0)
          },
          findIndex: function (t) {
            return st(Bt(this), t, arguments.length > 1 ? arguments[1] : void 0)
          },
          forEach: function (t) {
            nt(Bt(this), t, arguments.length > 1 ? arguments[1] : void 0)
          },
          indexOf: function (t) {
            return ut(Bt(this), t, arguments.length > 1 ? arguments[1] : void 0)
          },
          includes: function (t) {
            return ct(Bt(this), t, arguments.length > 1 ? arguments[1] : void 0)
          },
          join: function (t) {
            return Et.apply(Bt(this), arguments)
          },
          lastIndexOf: function (t) {
            return yt.apply(Bt(this), arguments)
          },
          map: function (t) {
            return Ut(Bt(this), t, arguments.length > 1 ? arguments[1] : void 0)
          },
          reduce: function (t) {
            return gt.apply(Bt(this), arguments)
          },
          reduceRight: function (t) {
            return vt.apply(Bt(this), arguments)
          },
          reverse: function () {
            for (var t, e = Bt(this).length, n = Math.floor(e / 2), r = 0; r < n; )
              (t = this[r]), (this[r++] = this[--e]), (this[e] = t)
            return this
          },
          some: function (t) {
            return it(Bt(this), t, arguments.length > 1 ? arguments[1] : void 0)
          },
          sort: function (t) {
            return wt.call(Bt(this), t)
          },
          subarray: function (t, e) {
            var n = Bt(this),
              r = n.length,
              i = d(t, r)
            return new (I(n, n[kt]))(
              n.buffer,
              n.byteOffset + i * n.BYTES_PER_ELEMENT,
              h((void 0 === e ? r : d(e, r)) - i)
            )
          }
        },
        Zt = function (t, e) {
          return Ht(this, Tt.call(Bt(this), t, e))
        },
        te = function (t) {
          Bt(this)
          var e = xt(arguments[1], 1),
            n = this.length,
            r = w(t),
            i = h(r.length),
            o = 0
          if (i + e > n) throw Q('Wrong length!')
          for (; o < i; ) this[e + o] = r[o++]
        },
        ee = {
          entries: function () {
            return dt.call(Bt(this))
          },
          keys: function () {
            return ht.call(Bt(this))
          },
          values: function () {
            return lt.call(Bt(this))
          }
        },
        ne = function (t, e) {
          return E(t) && t[It] && 'symbol' != typeof e && e in t && String(+e) == String(e)
        },
        re = function (t, e) {
          return ne(t, (e = y(e, !0))) ? c(2, t[e]) : j(t, e)
        },
        ie = function (t, e, n) {
          return !(ne(t, (e = y(e, !0))) && E(n) && g(n, 'value')) ||
            g(n, 'get') ||
            g(n, 'set') ||
            n.configurable ||
            (g(n, 'writable') && !n.writable) ||
            (g(n, 'enumerable') && !n.enumerable)
            ? V(t, e, n)
            : ((t[e] = n.value), t)
        }
      Mt || ((z.f = re), (X.f = ie)),
        r(r.S + r.F * !Mt, 'Object', {
          getOwnPropertyDescriptor: re,
          defineProperty: ie
        }),
        n(function () {
          _t.call({})
        }) &&
          (_t = At = function () {
            return Et.call(this)
          })
      var oe = f({}, $t)
      f(oe, ee),
        u(oe, bt, ee.values),
        f(oe, {
          slice: Zt,
          set: te,
          constructor: function () {},
          toString: _t,
          toLocaleString: Jt
        }),
        Qt(oe, 'buffer', 'b'),
        Qt(oe, 'byteOffset', 'o'),
        Qt(oe, 'byteLength', 'l'),
        Qt(oe, 'length', 'e'),
        V(oe, mt, {
          get: function () {
            return this[It]
          }
        }),
        (t.exports = function (t, o, a, c) {
          var f = t + ((c = !!c) ? 'Clamped' : '') + 'Array',
            l = 'get' + t,
            d = 'set' + t,
            y = e[f],
            g = y || {},
            w = y && A(y),
            T = !y || !i.ABV,
            m = {},
            S = y && y.prototype,
            R = function (t, e) {
              V(t, e, {
                get: function () {
                  return (function (t, e) {
                    var n = t._d
                    return n.v[l](e * o + n.o, Ft)
                  })(this, e)
                },
                set: function (t) {
                  return (function (t, e, n) {
                    var r = t._d
                    c && (n = (n = Math.round(n)) < 0 ? 0 : n > 255 ? 255 : 255 & n), r.v[d](e * o + r.o, n, Ft)
                  })(this, e, t)
                },
                enumerable: !0
              })
            }
          T
            ? ((y = a(function (t, e, n, r) {
                s(t, y, f, '_d')
                var i,
                  a,
                  c,
                  l,
                  d = 0,
                  g = 0
                if (E(e)) {
                  if (!(e instanceof tt || 'ArrayBuffer' == (l = v(e)) || 'SharedArrayBuffer' == l))
                    return It in e ? Wt(y, e) : Kt.call(y, e)
                  ;(i = e), (g = xt(n, o))
                  var w = e.byteLength
                  if (void 0 === r) {
                    if (w % o) throw Q('Wrong length!')
                    if ((a = w - g) < 0) throw Q('Wrong length!')
                  } else if ((a = h(r) * o) + g > w) throw Q('Wrong length!')
                  c = a / o
                } else (c = p(e)), (i = new tt((a = c * o)))
                for (
                  u(t, '_d', {
                    b: i,
                    o: g,
                    l: a,
                    e: c,
                    v: new et(i)
                  });
                  d < c;

                )
                  R(t, d++)
              })),
              (S = y.prototype = _(oe)),
              u(S, 'constructor', y))
            : (n(function () {
                y(1)
              }) &&
                n(function () {
                  new y(-1)
                }) &&
                N(function (t) {
                  new y(), new y(null), new y(1.5), new y(t)
                }, !0)) ||
              ((y = a(function (t, e, n, r) {
                var i
                return (
                  s(t, y, f),
                  E(e)
                    ? e instanceof tt || 'ArrayBuffer' == (i = v(e)) || 'SharedArrayBuffer' == i
                      ? void 0 !== r
                        ? new g(e, xt(n, o), r)
                        : void 0 !== n
                        ? new g(e, xt(n, o))
                        : new g(e)
                      : It in e
                      ? Wt(y, e)
                      : Kt.call(y, e)
                    : new g(p(e))
                )
              })),
              nt(w !== Function.prototype ? b(g).concat(b(w)) : b(g), function (t) {
                t in y || u(y, t, g[t])
              }),
              (y.prototype = S),
              (S.constructor = y))
          var k = S[bt],
            M = !!k && ('values' == k.name || null == k.name),
            I = ee.values
          u(y, St, !0),
            u(S, It, f),
            u(S, Ot, !0),
            u(S, kt, y),
            (c ? new y(1)[mt] == f : mt in S) ||
              V(S, mt, {
                get: function () {
                  return f
                }
              }),
            (m[f] = y),
            r(r.G + r.W + r.F * (y != g), m),
            r(r.S, f, {
              BYTES_PER_ELEMENT: o
            }),
            r(
              r.S +
                r.F *
                  n(function () {
                    g.of.call(y, 1)
                  }),
              f,
              {
                from: Kt,
                of: Yt
              }
            ),
            'BYTES_PER_ELEMENT' in S || u(S, 'BYTES_PER_ELEMENT', o),
            r(r.P, f, $t),
            C(f),
            r(r.P + r.F * Ct, f, {
              set: te
            }),
            r(r.P + r.F * !M, f, ee),
            S.toString != _t && (S.toString = _t),
            r(
              r.P +
                r.F *
                  n(function () {
                    new y(1).slice()
                  }),
              f,
              {
                slice: Zt
              }
            ),
            r(
              r.P +
                r.F *
                  (n(function () {
                    return [1, 2].toLocaleString() != new y([1, 2]).toLocaleString()
                  }) ||
                    !n(function () {
                      S.toLocaleString.call([1, 2])
                    })),
              f,
              {
                toLocaleString: Jt
              }
            ),
            (P[f] = M ? k : I),
            M || u(S, bt, I)
        })
    } else t.exports = function () {}
  })
Ir('Uint8', 1, function (t) {
  return function (e, n, r) {
    return t(this, e, n, r)
  }
})
var Or = '\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff',
  Pr = '[' + Or + ']',
  Nr = RegExp('^' + Pr + Pr + '*'),
  Ur = RegExp(Pr + Pr + '*$'),
  Dr = function (t, e, n) {
    var r = {},
      i = U(function () {
        return !!Or[t]() || '​' != '​'[t]()
      }),
      o = (r[t] = i ? e(Fr) : Or[t])
    n && (r[n] = o), Pt(Pt.P + Pt.F * i, 'String', r)
  },
  Fr = (Dr.trim = function (t, e) {
    return (t = String($e(t))), 1 & e && (t = t.replace(Nr, '')), 2 & e && (t = t.replace(Ur, '')), t
  }),
  Cr = Dr,
  Lr = _r.f,
  xr = Yn.f,
  Br = W.f,
  Xr = Cr.trim,
  zr = x.Number,
  Vr = zr,
  Hr = zr.prototype,
  jr = 'Number' == ct(gn(Hr)),
  Wr = 'trim' in String.prototype,
  Qr = function (t) {
    var e = H(t, !1)
    if ('string' == typeof e && e.length > 2) {
      var n,
        r,
        i,
        o = (e = Wr ? e.trim() : Xr(e, 3)).charCodeAt(0)
      if (43 === o || 45 === o) {
        if (88 === (n = e.charCodeAt(2)) || 120 === n) return NaN
      } else if (48 === o) {
        switch (e.charCodeAt(1)) {
          case 66:
          case 98:
            ;(r = 2), (i = 49)
            break
          case 79:
          case 111:
            ;(r = 8), (i = 55)
            break
          default:
            return +e
        }
        for (var a, s = e.slice(2), c = 0, u = s.length; c < u; c++) if ((a = s.charCodeAt(c)) < 48 || a > i) return NaN
        return parseInt(s, r)
      }
    }
    return +e
  }
if (!zr(' 0o1') || !zr('0b1') || zr('+0x1')) {
  zr = function (t) {
    var e = arguments.length < 1 ? 0 : t,
      n = this
    return n instanceof zr &&
      (jr
        ? U(function () {
            Hr.valueOf.call(n)
          })
        : 'Number' != ct(n))
      ? $n(new Vr(Qr(e)), n, zr)
      : Qr(e)
  }
  for (
    var Gr,
      Kr = D
        ? Lr(Vr)
        : 'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'.split(
            ','
          ),
      Yr = 0;
    Kr.length > Yr;
    Yr++
  )
    q(Vr, (Gr = Kr[Yr])) && !q(zr, Gr) && Br(zr, Gr, xr(Vr, Gr))
  ;(zr.prototype = Hr), (Hr.constructor = zr), et(x, 'Number', zr)
}
Pt(Pt.G + Pt.W + Pt.F * !Er.ABV, {
  DataView: br.DataView
}),
  Ir('Uint32', 4, function (t) {
    return function (e, n, r) {
      return t(this, e, n, r)
    }
  }),
  Ir('Uint16', 2, function (t) {
    return function (e, n, r) {
      return t(this, e, n, r)
    }
  })
var qr = void 0,
  Jr =
    'undefined' != typeof Uint8Array &&
    'undefined' != typeof Uint16Array &&
    'undefined' != typeof Uint32Array &&
    'undefined' != typeof DataView
function $r(t) {
  var e,
    n,
    r,
    i,
    o,
    a,
    s,
    c,
    u,
    f,
    l = t.length,
    h = 0,
    p = Number.POSITIVE_INFINITY
  for (c = 0; c < l; ++c) t[c] > h && (h = t[c]), t[c] < p && (p = t[c])
  for (e = 1 << h, n = new (Jr ? Uint32Array : Array)(e), r = 1, i = 0, o = 2; r <= h; ) {
    for (c = 0; c < l; ++c)
      if (t[c] === r) {
        for (a = 0, s = i, u = 0; u < r; ++u) (a = (a << 1) | (1 & s)), (s >>= 1)
        for (f = (r << 16) | c, u = a; u < e; u += o) n[u] = f
        ++i
      }
    ++r, (i <<= 1), (o <<= 1)
  }
  return [n, h, p]
}
function Zr(t, e) {
  switch (
    ((this.g = []),
    (this.h = 32768),
    (this.d = this.f = this.a = this.l = 0),
    (this.input = Jr ? new Uint8Array(t) : t),
    (this.m = !1),
    (this.i = ei),
    (this.r = !1),
    (!e && (e = {})) ||
      (e.index && (this.a = e.index),
      e.bufferSize && (this.h = e.bufferSize),
      e.bufferType && (this.i = e.bufferType),
      e.resize && (this.r = e.resize)),
    this.i)
  ) {
    case ti:
      ;(this.b = 32768), (this.c = new (Jr ? Uint8Array : Array)(32768 + this.h + 258))
      break
    case ei:
      ;(this.b = 0),
        (this.c = new (Jr ? Uint8Array : Array)(this.h)),
        (this.e = this.z),
        (this.n = this.v),
        (this.j = this.w)
      break
    default:
      throw Error('invalid inflate mode')
  }
}
var ti = 0,
  ei = 1,
  ni = {
    t: ti,
    s: ei
  }
Zr.prototype.k = function () {
  for (; !this.m; ) {
    var t = _i(this, 3)
    switch ((1 & t && (this.m = !0), (t >>>= 1))) {
      case 0:
        var e = this.input,
          n = this.a,
          r = this.c,
          i = this.b,
          o = e.length,
          a = qr,
          s = r.length,
          c = qr
        if (((this.d = this.f = 0), n + 1 >= o)) throw Error('invalid uncompressed block header: LEN')
        if (((a = e[n++] | (e[n++] << 8)), n + 1 >= o)) throw Error('invalid uncompressed block header: NLEN')
        if (a === ~(e[n++] | (e[n++] << 8))) throw Error('invalid uncompressed block header: length verify')
        if (n + a > e.length) throw Error('input buffer is broken')
        switch (this.i) {
          case ti:
            for (; i + a > r.length; ) {
              if (((a -= c = s - i), Jr)) r.set(e.subarray(n, n + c), i), (i += c), (n += c)
              else for (; c--; ) r[i++] = e[n++]
              ;(this.b = i), (r = this.e()), (i = this.b)
            }
            break
          case ei:
            for (; i + a > r.length; )
              r = this.e({
                p: 2
              })
            break
          default:
            throw Error('invalid inflate mode')
        }
        if (Jr) r.set(e.subarray(n, n + a), i), (i += a), (n += a)
        else for (; a--; ) r[i++] = e[n++]
        ;(this.a = n), (this.b = i), (this.c = r)
        break
      case 1:
        this.j(Ei, Ti)
        break
      case 2:
        var u,
          f,
          l,
          h,
          p = _i(this, 5) + 257,
          d = _i(this, 5) + 1,
          y = _i(this, 4) + 4,
          g = new (Jr ? Uint8Array : Array)(ai.length),
          v = qr,
          E = qr,
          w = qr,
          T = qr,
          _ = qr
        for (_ = 0; _ < y; ++_) g[ai[_]] = _i(this, 3)
        if (!Jr) for (_ = y, y = g.length; _ < y; ++_) g[ai[_]] = 0
        for (u = $r(g), v = new (Jr ? Uint8Array : Array)(p + d), _ = 0, h = p + d; _ < h; )
          switch ((E = Ai(this, u))) {
            case 16:
              for (T = 3 + _i(this, 2); T--; ) v[_++] = w
              break
            case 17:
              for (T = 3 + _i(this, 3); T--; ) v[_++] = 0
              w = 0
              break
            case 18:
              for (T = 11 + _i(this, 7); T--; ) v[_++] = 0
              w = 0
              break
            default:
              w = v[_++] = E
          }
        ;(f = $r(Jr ? v.subarray(0, p) : v.slice(0, p))), (l = $r(Jr ? v.subarray(p) : v.slice(p))), this.j(f, l)
        break
      default:
        throw Error('unknown BTYPE: ' + t)
    }
  }
  return this.n()
}
var ri,
  ii,
  oi = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
  ai = Jr ? new Uint16Array(oi) : oi,
  si = [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    13,
    15,
    17,
    19,
    23,
    27,
    31,
    35,
    43,
    51,
    59,
    67,
    83,
    99,
    115,
    131,
    163,
    195,
    227,
    258,
    258,
    258
  ],
  ci = Jr ? new Uint16Array(si) : si,
  ui = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0],
  fi = Jr ? new Uint8Array(ui) : ui,
  li = [
    1,
    2,
    3,
    4,
    5,
    7,
    9,
    13,
    17,
    25,
    33,
    49,
    65,
    97,
    129,
    193,
    257,
    385,
    513,
    769,
    1025,
    1537,
    2049,
    3073,
    4097,
    6145,
    8193,
    12289,
    16385,
    24577
  ],
  hi = Jr ? new Uint16Array(li) : li,
  pi = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
  di = Jr ? new Uint8Array(pi) : pi,
  yi = new (Jr ? Uint8Array : Array)(288)
for (ri = 0, ii = yi.length; ri < ii; ++ri) yi[ri] = 143 >= ri ? 8 : 255 >= ri ? 9 : 279 >= ri ? 7 : 8
var gi,
  vi,
  Ei = $r(yi),
  wi = new (Jr ? Uint8Array : Array)(30)
for (gi = 0, vi = wi.length; gi < vi; ++gi) wi[gi] = 5
var Ti = $r(wi)
function _i(t, e) {
  for (var n, r = t.f, i = t.d, o = t.input, a = t.a, s = o.length; i < e; ) {
    if (a >= s) throw Error('input buffer is broken')
    ;(r |= o[a++] << i), (i += 8)
  }
  return (n = r & ((1 << e) - 1)), (t.f = r >>> e), (t.d = i - e), (t.a = a), n
}
function Ai(t, e) {
  for (var n, r, i = t.f, o = t.d, a = t.input, s = t.a, c = a.length, u = e[0], f = e[1]; o < f && !(s >= c); )
    (i |= a[s++] << o), (o += 8)
  if ((r = (n = u[i & ((1 << f) - 1)]) >>> 16) > o) throw Error('invalid code length: ' + r)
  return (t.f = i >> r), (t.d = o - r), (t.a = s), 65535 & n
}
;(Zr.prototype.j = function (t, e) {
  var n = this.c,
    r = this.b
  this.o = t
  for (var i, o, a, s, c = n.length - 258; 256 !== (i = Ai(this, t)); )
    if (256 > i) r >= c && ((this.b = r), (n = this.e()), (r = this.b)), (n[r++] = i)
    else
      for (
        s = ci[(o = i - 257)],
          0 < fi[o] && (s += _i(this, fi[o])),
          i = Ai(this, e),
          a = hi[i],
          0 < di[i] && (a += _i(this, di[i])),
          r >= c && ((this.b = r), (n = this.e()), (r = this.b));
        s--;

      )
        n[r] = n[r++ - a]
  for (; 8 <= this.d; ) (this.d -= 8), this.a--
  this.b = r
}),
  (Zr.prototype.w = function (t, e) {
    var n = this.c,
      r = this.b
    this.o = t
    for (var i, o, a, s, c = n.length; 256 !== (i = Ai(this, t)); )
      if (256 > i) r >= c && (c = (n = this.e()).length), (n[r++] = i)
      else
        for (
          s = ci[(o = i - 257)],
            0 < fi[o] && (s += _i(this, fi[o])),
            i = Ai(this, e),
            a = hi[i],
            0 < di[i] && (a += _i(this, di[i])),
            r + s > c && (c = (n = this.e()).length);
          s--;

        )
          n[r] = n[r++ - a]
    for (; 8 <= this.d; ) (this.d -= 8), this.a--
    this.b = r
  }),
  (Zr.prototype.e = function () {
    var t,
      e,
      n = new (Jr ? Uint8Array : Array)(this.b - 32768),
      r = this.b - 32768,
      i = this.c
    if (Jr) n.set(i.subarray(32768, n.length))
    else for (t = 0, e = n.length; t < e; ++t) n[t] = i[t + 32768]
    if ((this.g.push(n), (this.l += n.length), Jr)) i.set(i.subarray(r, r + 32768))
    else for (t = 0; 32768 > t; ++t) i[t] = i[r + t]
    return (this.b = 32768), i
  }),
  (Zr.prototype.z = function (t) {
    var e,
      n,
      r,
      i = (this.input.length / this.a + 1) | 0,
      o = this.input,
      a = this.c
    return (
      t && ('number' == typeof t.p && (i = t.p), 'number' == typeof t.u && (i += t.u)),
      2 > i
        ? (n = (r = (((o.length - this.a) / this.o[2] / 2) * 258) | 0) < a.length ? a.length + r : a.length << 1)
        : (n = a.length * i),
      Jr ? (e = new Uint8Array(n)).set(a) : (e = a),
      (this.c = e)
    )
  }),
  (Zr.prototype.n = function () {
    var t,
      e,
      n,
      r,
      i,
      o = 0,
      a = this.c,
      s = this.g,
      c = new (Jr ? Uint8Array : Array)(this.l + (this.b - 32768))
    if (0 === s.length) return Jr ? this.c.subarray(32768, this.b) : this.c.slice(32768, this.b)
    for (e = 0, n = s.length; e < n; ++e) for (r = 0, i = (t = s[e]).length; r < i; ++r) c[o++] = t[r]
    for (e = 32768, n = this.b; e < n; ++e) c[o++] = a[e]
    return (this.g = []), (this.buffer = c)
  }),
  (Zr.prototype.v = function () {
    var t,
      e = this.b
    return (
      Jr
        ? this.r
          ? (t = new Uint8Array(e)).set(this.c.subarray(0, e))
          : (t = this.c.subarray(0, e))
        : (this.c.length > e && (this.c.length = e), (t = this.c)),
      (this.buffer = t)
    )
  })
var bi = (function () {
    function t(t, e) {
      var n, r
      switch (
        ((this.input = t),
        (this.a = 0),
        (!e && (e = {})) || (e.index && (this.a = e.index), e.verify && (this.A = e.verify)),
        (n = t[this.a++]),
        (r = t[this.a++]),
        15 & n)
      ) {
        case mi:
          this.method = mi
          break
        default:
          throw Error('unsupported compression method')
      }
      if (0 != ((n << 8) + r) % 31) throw Error('invalid fcheck flag:' + (((n << 8) + r) % 31))
      if (32 & r) throw Error('fdict flag is not supported')
      this.q = new Zr(t, {
        index: this.a,
        bufferSize: e.bufferSize,
        bufferType: e.bufferType,
        resize: e.resize
      })
    }
    return (
      (t.prototype.decompress = function () {
        var t,
          e,
          n = this.input
        if (((t = this.q.k()), (this.a = this.q.a), this.A)) {
          e = ((n[this.a++] << 24) | (n[this.a++] << 16) | (n[this.a++] << 8) | n[this.a++]) >>> 0
          var r = t
          if ('string' == typeof r) {
            var i,
              o,
              a = r.split('')
            for (i = 0, o = a.length; i < o; i++) a[i] = (255 & a[i].charCodeAt(0)) >>> 0
            r = a
          }
          for (var s, c = 1, u = 0, f = r.length, l = 0; 0 < f; ) {
            f -= s = 1024 < f ? 1024 : f
            do {
              u += c += r[l++]
            } while (--s)
            ;(c %= 65521), (u %= 65521)
          }
          if (e !== ((u << 16) | c) >>> 0) throw Error('invalid adler-32 checksum')
        }
        return t
      }),
      t
    )
  })(),
  mi = 8
bi.BufferType = {
  ADAPTIVE: ni.s,
  BLOCK: ni.t
}
var Si = (function (t) {
    function e() {
      return (null !== t && t.apply(this, arguments)) || this
    }
    return (
      l(e, t),
      (e.prototype.onPipeEvent = function (t, e, n) {
        t === r && (n.stopPropagation(), this.unzip(e))
      }),
      (e.prototype.unzip = function (t) {
        if (65649 === t.respId) {
          var e = new egret.ByteArray(t.bytes.buffer.slice(13)),
            n = (e.readUnsignedInt(), e.readUnsignedInt()),
            i = e.readUnsignedInt(),
            o = e.buffer.slice(12, 12 + i),
            a = new Uint8Array(o),
            s = new bi(a).decompress()
          if (n === s.byteLength) {
            var c = new egret.ByteArray(s),
              u = c.readUnsignedInt(),
              f = new _(u, c)
            this.pipeEvent(r, f)
          } else this.pipeEvent(r, t)
        } else this.pipeEvent(r, t)
      }),
      e
    )
  })(gt),
  Ri = 0,
  ki = 1,
  Mi = 2,
  Ii = 3,
  Oi = 4,
  Pi =
    ((function (t) {
      function e(e) {
        var n = t.call(this) || this
        return (
          (n.encryptList = []),
          (n.decryptList = []),
          e &&
            e.crypto &&
            (e.crypto.encryptList &&
              e.crypto.encryptList instanceof Array &&
              (n.encryptList = n.encryptList.concat(e.crypto.encryptList)),
            e.crypto.decryptList &&
              e.crypto.decryptList instanceof Array &&
              (n.decryptList = n.decryptList.concat(e.crypto.decryptList))),
          n
        )
      }
      l(e, t),
        (e.prototype.doSend = function (t) {
          if (t) {
            t.position = 0
            var e = t.readUnsignedInt()
            if (((t.position = 0), 73730 === e && void 0 === this.userEncryptKey))
              return (this.userEncryptKey = new egret.ByteArray(t.buffer.slice(49, 53))), t
            if (this.encryptList.indexOf(e) >= 0 || (e >= 3718905856 && e <= 3718914047)) {
              var n = this.$encrypt(t, this.userEncryptKey),
                r = new egret.ByteArray()
              return (
                r.writeUnsignedInt(301840), r.writeUnsignedInt(n.length + 12), r.writeUnsignedInt(0), r.writeBytes(n), r
              )
            }
          }
          return t
        }),
        (e.prototype.onPipeEvent = function (t, e, n) {
          t === r && (n.stopPropagation(), this.handleCryptoPacket(e))
        }),
        (e.prototype.handleCryptoPacket = function (t) {
          if (!(this.decryptList.indexOf(t.respId) > -1))
            switch (t.respId) {
              case 301569:
                var e = t.bytes.buffer.slice(12, 16)
                this.broadcastDecryptKey = new egret.ByteArray(e)
                break
              case 301584:
                var n = new egret.ByteArray(t.bytes.buffer.slice(12)),
                  i = this.$decrypt(n, this.broadcastDecryptKey),
                  o = new _(i.readUnsignedInt(), i)
                this.pipeEvent(r, o)
                break
              case 301825:
                t.bytes.position = 12
                var a = t.bytes.readByte(),
                  s = t.bytes.buffer.slice(13, 17)
                if (0 === a) {
                  var c = new egret.ByteArray(s),
                    u = this.$generateACKPacket(this.userEncryptKey, c)
                  this.socket.writeBytes(u), (this.userEncryptKey = c)
                } else 1 === a && (this.userDecryptKey = new egret.ByteArray(s))
                break
              case 301840:
                var f = new egret.ByteArray(t.bytes.buffer.slice(12)),
                  l = this.$decrypt(f, this.userDecryptKey),
                  h = new _(l.readUnsignedInt(), l)
                this.pipeEvent(r, h)
                break
              default:
                this.pipeEvent(r, t)
            }
        }),
        (e.prototype.$generateACKPacket = function (t, e) {
          var n = new egret.ByteArray(new ArrayBuffer(16))
          n.writeUnsignedInt(301826), n.writeUnsignedInt(16), n.writeUnsignedInt(0), (t.position = 0), (e.position = 0)
          for (var r = 0; r < 4; r++) n.writeByte(t.readByte() ^ e.readByte())
          return (t.position = 0), (e.position = 0), (n.position = 0), n
        }),
        (e.prototype.$decrypt = function (t, e) {
          var n = new egret.ByteArray()
          ;(t.position = 0), (e.position = 0)
          for (var r = 0; r < t.length; r++) (e.position = r % e.length), n.writeByte(t.readByte() ^ e.readByte())
          return (n.position = 0), n
        }),
        (e.prototype.$encrypt = function (t, e) {
          return this.$decrypt(t, e)
        })
    })(gt),
    W.f),
  Ni = Function.prototype,
  Ui = /^\s*function ([^ (]*)/
'name' in Ni ||
  (D &&
    Pi(Ni, 'name', {
      configurable: !0,
      get: function () {
        try {
          return ('' + this).match(Ui)[1]
        } catch (t) {
          return ''
        }
      }
    }))
var Di = ft('match'),
  Fi = ''.startsWith
Pt(
  Pt.P +
    Pt.F *
      (function (t) {
        var e = /./
        try {
          '/./'[t](e)
        } catch (n) {
          try {
            return (e[Di] = !1), !'/./'[t](e)
          } catch (t) {}
        }
        return !0
      })('startsWith'),
  'String',
  {
    startsWith: function (t) {
      var e = (function (t, e, n) {
          if (or(e)) throw TypeError('String#' + n + " doesn't accept regex!")
          return String($e(t))
        })(this, t, 'startsWith'),
        n = Vt(Math.min(arguments.length > 1 ? arguments[1] : void 0, e.length)),
        r = String(t)
      return Fi ? Fi.call(e, r, n) : e.slice(n, n + r.length) === r
    }
  }
),
  Pt(Pt.S, 'Math', {
    trunc: function (t) {
      return (t > 0 ? Math.floor : Math.ceil)(t)
    }
  }),
  Pt(Pt.S, 'Math', {
    clz32: function (t) {
      return (t >>>= 0) ? 31 - Math.floor(Math.log(t + 0.5) * Math.LOG2E) : 32
    }
  })
var Ci = Math.imul
function Li(t) {
  return (Li =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t
        }
      : function (t) {
          return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
            ? 'symbol'
            : typeof t
        })(t)
}
Pt(
  Pt.S +
    Pt.F *
      U(function () {
        return -5 != Ci(4294967295, 5) || 2 != Ci.length
      }),
  'Math',
  {
    imul: function (t, e) {
      var n = +t,
        r = +e,
        i = 65535 & n,
        o = 65535 & r
      return 0 | (i * o + ((((65535 & (n >>> 16)) * o + i * (65535 & (r >>> 16))) << 16) >>> 0))
    }
  }
),
  Ir('Float64', 8, function (t) {
    return function (e, n, r) {
      return t(this, e, n, r)
    }
  }),
  Ir('Float32', 4, function (t) {
    return function (e, n, r) {
      return t(this, e, n, r)
    }
  }),
  Ir('Int32', 4, function (t) {
    return function (e, n, r) {
      return t(this, e, n, r)
    }
  }),
  Ir('Int16', 2, function (t) {
    return function (e, n, r) {
      return t(this, e, n, r)
    }
  }),
  Ir('Int8', 1, function (t) {
    return function (e, n, r) {
      return t(this, e, n, r)
    }
  })
var xi = (function (t) {
    t = void 0 !== (t = t || {}) ? t : {}
    var e,
      n = {}
    for (e in t) t.hasOwnProperty(e) && (n[e] = t[e])
    ;(t.arguments = []),
      (t.thisProgram = './this.program'),
      (t.quit = function (t, e) {
        throw e
      }),
      (t.preRun = []),
      (t.postRun = [])
    var r,
      i,
      o,
      a = !1
    if (
      ((r = 'object' === ('undefined' == typeof window ? 'undefined' : Li(window))),
      (i = 'function' == typeof importScripts),
      (a =
        'object' === ('undefined' == typeof process ? 'undefined' : Li(process)) &&
        'function' == typeof require &&
        !r &&
        !i),
      (o = !r && !a && !i),
      t.ENVIRONMENT)
    )
      throw new Error(
        'Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -s ENVIRONMENT=web or -s ENVIRONMENT=node)'
      )
    y(
      void 0 === t.memoryInitializerPrefixURL,
      'Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead'
    ),
      y(
        void 0 === t.pthreadMainPrefixURL,
        'Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead'
      ),
      y(
        void 0 === t.cdInitializerPrefixURL,
        'Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead'
      ),
      y(
        void 0 === t.filePackagePrefixURL,
        'Module.filePackagePrefixURL option was removed, use Module.locateFile instead'
      )
    var s,
      c,
      u = ''
    if (a)
      (u = __dirname + '/'),
        (t.read = function (t, e) {
          var n
          return (
            (n = ot(t)) ||
              (s || (s = require('fs')), c || (c = require('path')), (t = c.normalize(t)), (n = s.readFileSync(t))),
            e ? n : n.toString()
          )
        }),
        (t.readBinary = function (e) {
          var n = t.read(e, !0)
          return n.buffer || (n = new Uint8Array(n)), y(n.buffer), n
        }),
        process.argv.length > 1 && (t.thisProgram = process.argv[1].replace(/\\/g, '/')),
        (t.arguments = process.argv.slice(2)),
        process.on('uncaughtException', function (t) {
          if (!(t instanceof Ut)) throw t
        }),
        process.on('unhandledRejection', Ct),
        (t.quit = function (t) {
          process.exit(t)
        }),
        (t.inspect = function () {
          return '[Emscripten Module object]'
        })
    else if (o)
      'undefined' != typeof read &&
        (t.read = function (t) {
          var e = ot(t)
          return e ? rt(e) : read(t)
        }),
        (t.readBinary = function (t) {
          var e
          return (e = ot(t))
            ? e
            : 'function' == typeof readbuffer
            ? new Uint8Array(readbuffer(t))
            : (y('object' === Li((e = read(t, 'binary')))), e)
        }),
        'undefined' != typeof scriptArgs
          ? (t.arguments = scriptArgs)
          : void 0 !== arguments && (t.arguments = arguments),
        'function' == typeof quit &&
          (t.quit = function (t) {
            quit(t)
          })
    else {
      if (!r && !i) throw new Error('environment detection error')
      i ? (u = self.location.href) : document.currentScript && (u = document.currentScript.src),
        (u = 0 !== u.indexOf('blob:') ? u.substr(0, u.lastIndexOf('/') + 1) : ''),
        (t.read = function (t) {
          try {
            var e = new XMLHttpRequest()
            return e.open('GET', t, !1), e.send(null), e.responseText
          } catch (e) {
            var n = ot(t)
            if (n) return rt(n)
            throw e
          }
        }),
        i &&
          (t.readBinary = function (t) {
            try {
              var e = new XMLHttpRequest()
              return e.open('GET', t, !1), (e.responseType = 'arraybuffer'), e.send(null), new Uint8Array(e.response)
            } catch (e) {
              var n = ot(t)
              if (n) return n
              throw e
            }
          }),
        (t.readAsync = function (t, e, n) {
          var r = new XMLHttpRequest()
          r.open('GET', t, !0),
            (r.responseType = 'arraybuffer'),
            (r.onload = function () {
              if (200 == r.status || (0 == r.status && r.response)) e(r.response)
              else {
                var i = ot(t)
                i ? e(i.buffer) : n()
              }
            }),
            (r.onerror = n),
            r.send(null)
        }),
        (t.setWindowTitle = function (t) {
          document.title = t
        })
    }
    var f =
        t.print ||
        ('undefined' != typeof console ? console.log.bind(console) : 'undefined' != typeof print ? print : null),
      l =
        t.printErr ||
        ('undefined' != typeof printErr ? printErr : ('undefined' != typeof console && console.warn.bind(console)) || f)
    for (e in n) n.hasOwnProperty(e) && (t[e] = n[e])
    n = void 0
    var h = 16
    function p(t, e) {
      return e || (e = h), (t = Math.ceil(t / e) * e)
    }
    kt = Rt = St = function () {
      Ct('cannot use the stack before compiled code is ready to run, and has provided stack access')
    }
    var d = !1
    function y(t, e) {
      t || Ct('Assertion failed: ' + e)
    }
    var g = {
        stackSave: function () {
          kt()
        },
        stackRestore: function () {
          Rt()
        },
        arrayToC: function (t) {
          var e,
            n,
            r = St(t.length)
          return (
            (n = r),
            y((e = t).length >= 0, 'writeArrayToMemory array must have a length (should be an array or typed array)'),
            A.set(e, n),
            r
          )
        },
        stringToC: function (t) {
          var e = 0
          if (null != t && 0 !== t) {
            var n = 1 + (t.length << 2)
            ;(function (t, e, n) {
              y(
                'number' == typeof n,
                'stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!'
              ),
                (function (t, e, n, r) {
                  if (!(r > 0)) return 0
                  for (var i = n, o = n + r - 1, a = 0; a < t.length; ++a) {
                    var s = t.charCodeAt(a)
                    if (s >= 55296 && s <= 57343) {
                      var c = t.charCodeAt(++a)
                      s = (65536 + ((1023 & s) << 10)) | (1023 & c)
                    }
                    if (s <= 127) {
                      if (n >= o) break
                      e[n++] = s
                    } else if (s <= 2047) {
                      if (n + 1 >= o) break
                      ;(e[n++] = 192 | (s >> 6)), (e[n++] = 128 | (63 & s))
                    } else if (s <= 65535) {
                      if (n + 2 >= o) break
                      ;(e[n++] = 224 | (s >> 12)), (e[n++] = 128 | ((s >> 6) & 63)), (e[n++] = 128 | (63 & s))
                    } else if (s <= 2097151) {
                      if (n + 3 >= o) break
                      ;(e[n++] = 240 | (s >> 18)),
                        (e[n++] = 128 | ((s >> 12) & 63)),
                        (e[n++] = 128 | ((s >> 6) & 63)),
                        (e[n++] = 128 | (63 & s))
                    } else if (s <= 67108863) {
                      if (n + 4 >= o) break
                      ;(e[n++] = 248 | (s >> 24)),
                        (e[n++] = 128 | ((s >> 18) & 63)),
                        (e[n++] = 128 | ((s >> 12) & 63)),
                        (e[n++] = 128 | ((s >> 6) & 63)),
                        (e[n++] = 128 | (63 & s))
                    } else {
                      if (n + 5 >= o) break
                      ;(e[n++] = 252 | (s >> 30)),
                        (e[n++] = 128 | ((s >> 24) & 63)),
                        (e[n++] = 128 | ((s >> 18) & 63)),
                        (e[n++] = 128 | ((s >> 12) & 63)),
                        (e[n++] = 128 | ((s >> 6) & 63)),
                        (e[n++] = 128 | (63 & s))
                    }
                  }
                  e[n] = 0
                })(t, b, e, n)
            })(t, (e = St(n)), n)
          }
          return e
        }
      },
      v = {
        string: g.stringToC,
        array: g.arrayToC
      }
    function E(t, e) {
      if (0 === e || !t) return ''
      for (var n, r = 0, i = 0; y(t + i < B), (r |= n = b[(t + i) >> 0]), (0 != n || e) && (i++, !e || i != e); );
      e || (e = i)
      var o = ''
      if (r < 128) {
        for (var a; e > 0; )
          (a = String.fromCharCode.apply(String, b.subarray(t, t + Math.min(e, 1024)))),
            (o = o ? o + a : a),
            (t += 1024),
            (e -= 1024)
        return o
      }
      return (function (t) {
        return T(b, t)
      })(t)
    }
    var w = 'undefined' != typeof TextDecoder ? new TextDecoder('utf8') : void 0
    function T(t, e) {
      for (var n = e; t[n]; ) ++n
      if (n - e > 16 && t.subarray && w) return w.decode(t.subarray(e, n))
      for (var r, i, o, a, s, c = ''; ; ) {
        if (!(r = t[e++])) return c
        if (128 & r)
          if (((i = 63 & t[e++]), 192 != (224 & r)))
            if (
              ((o = 63 & t[e++]),
              224 == (240 & r)
                ? (r = ((15 & r) << 12) | (i << 6) | o)
                : ((a = 63 & t[e++]),
                  240 == (248 & r)
                    ? (r = ((7 & r) << 18) | (i << 12) | (o << 6) | a)
                    : ((s = 63 & t[e++]),
                      (r =
                        248 == (252 & r)
                          ? ((3 & r) << 24) | (i << 18) | (o << 12) | (a << 6) | s
                          : ((1 & r) << 30) | (i << 24) | (o << 18) | (a << 12) | (s << 6) | (63 & t[e++])))),
              r < 65536)
            )
              c += String.fromCharCode(r)
            else {
              var u = r - 65536
              c += String.fromCharCode(55296 | (u >> 10), 56320 | (1023 & u))
            }
          else c += String.fromCharCode(((31 & r) << 6) | i)
        else c += String.fromCharCode(r)
      }
    }
    var _, A, b, m, S, R, k, M, I, O, P, N, U
    'undefined' != typeof TextDecoder && new TextDecoder('utf-16le')
    function D(t) {
      return (
        (function t(e) {
          t.shown || (t.shown = {}), t.shown[e] || ((t.shown[e] = 1), l(e))
        })('warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling'),
        t
      )
    }
    function F() {
      var e = (function () {
        var t = new Error()
        if (!t.stack) {
          try {
            throw new Error(0)
          } catch (e) {
            t = e
          }
          if (!t.stack) return '(no stack trace available)'
        }
        return t.stack.toString()
      })()
      return (
        t.extraStackTrace && (e += '\n' + t.extraStackTrace()),
        e.replace(/__Z[\w\d_]+/g, function (t) {
          var e = D(t)
          return t === e ? t : e + ' [' + t + ']'
        })
      )
    }
    function C() {
      if (
        ((34821223 == R[(P >> 2) - 1] && 2310721022 == R[(P >> 2) - 2]) ||
          Ct(
            'Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x02135467, but received 0x' +
              R[(P >> 2) - 2].toString(16) +
              ' ' +
              R[(P >> 2) - 1].toString(16)
          ),
        1668509029 !== S[0])
      )
        throw 'Runtime error: The application has corrupted its heap memory area (address zero)!'
    }
    function L() {
      Ct(
        'Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value ' +
          B +
          ', (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime but prevents some optimizations, (3) set Module.TOTAL_MEMORY to a higher value before the program runs, or (4) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 '
      )
    }
    ;(k = P = 0), (M = !1)
    var x = t.TOTAL_STACK || 5242880,
      B = t.TOTAL_MEMORY || 16777216
    if (
      (B < x && l('TOTAL_MEMORY should be larger than TOTAL_STACK, was ' + B + '! (TOTAL_STACK=' + x + ')'),
      y(
        'undefined' != typeof Int32Array &&
          'undefined' != typeof Float64Array &&
          void 0 !== Int32Array.prototype.subarray &&
          void 0 !== Int32Array.prototype.set,
        'JS engine does not provide full typed array support'
      ),
      t.buffer
        ? y((_ = t.buffer).byteLength === B, 'provided buffer should be ' + B + ' bytes, but it is ' + _.byteLength)
        : (y((_ = new ArrayBuffer(B)).byteLength === B), (t.buffer = _)),
      (t.HEAP8 = A = new Int8Array(_)),
      (t.HEAP16 = m = new Int16Array(_)),
      (t.HEAP32 = S = new Int32Array(_)),
      (t.HEAPU8 = b = new Uint8Array(_)),
      (t.HEAPU16 = new Uint16Array(_)),
      (t.HEAPU32 = R = new Uint32Array(_)),
      (t.HEAPF32 = new Float32Array(_)),
      (t.HEAPF64 = new Float64Array(_)),
      (S[0] = 1668509029),
      (m[1] = 25459),
      115 !== b[2] || 99 !== b[3])
    )
      throw 'Runtime error: expected the system to be little-endian!'
    function X(e) {
      for (; e.length > 0; ) {
        var n = e.shift()
        if ('function' != typeof n) {
          var r = n.func
          'number' == typeof r
            ? void 0 === n.arg
              ? t.dynCall_v(r)
              : t.dynCall_vi(r, n.arg)
            : r(void 0 === n.arg ? null : n.arg)
        } else n()
      }
    }
    var z = [],
      V = [],
      H = [],
      j = [],
      W = !1
    ;(Math.imul && -5 === Math.imul(4294967295, 5)) ||
      (Math.imul = function (t, e) {
        var n = 65535 & t,
          r = 65535 & e
        return (n * r + (((t >>> 16) * r + n * (e >>> 16)) << 16)) | 0
      }),
      (Math.imul = Math.imul),
      Math.clz32 ||
        (Math.clz32 = function (t) {
          var e = 32,
            n = t >> 16
          return (
            n && ((e -= 16), (t = n)),
            (n = t >> 8) && ((e -= 8), (t = n)),
            (n = t >> 4) && ((e -= 4), (t = n)),
            (n = t >> 2) && ((e -= 2), (t = n)),
            (n = t >> 1) ? e - 2 : e - t
          )
        }),
      (Math.clz32 = Math.clz32),
      Math.trunc ||
        (Math.trunc = function (t) {
          return t < 0 ? Math.ceil(t) : Math.floor(t)
        }),
      (Math.trunc = Math.trunc)
    var Q = 0,
      G = null,
      K = null,
      Y = {}
    ;(t.preloadedImages = {}), (t.preloadedAudios = {})
    var q = null,
      J = {
        error: function () {
          Ct(
            'Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with  -s FORCE_FILESYSTEM=1'
          )
        },
        init: function () {
          J.error()
        },
        createDataFile: function () {
          J.error()
        },
        createPreloadedFile: function () {
          J.error()
        },
        createLazyFile: function () {
          J.error()
        },
        open: function () {
          J.error()
        },
        mkdev: function () {
          J.error()
        },
        registerDevice: function () {
          J.error()
        },
        analyzePath: function () {
          J.error()
        },
        loadFilesFromDB: function () {
          J.error()
        },
        ErrnoError: function () {
          J.error()
        }
      }
    ;(t.FS_createDataFile = J.createDataFile), (t.FS_createPreloadedFile = J.createPreloadedFile)
    var $ = 'data:application/octet-stream;base64,'
    function Z(t) {
      return String.prototype.startsWith ? t.startsWith($) : 0 === t.indexOf($)
    }
    ;(k = 2344),
      V.push(),
      (q =
        'data:application/octet-stream;base64,AAAAAAAAAAAP57jKldKS6lWa2dpsg0hOBb/5CbeLpX2rF3WgeIpqLXEwUQxAFlbbUlC6tnattWdGBNHE9obmiR1Us6nNK0Ei7CiwWNV5cG/B/n7Jcy83ueQYT8c2OhkxWfi0BkOAd4U0iBvxA4I//PocjpAUAKdjodg9R5emEzz3S5/ocgHQYf+PmJu+y0qUlvJFINdg+1qEXSMmwwJ8CGniGvCvqJ3FEv0hZgdJTSkuX4GHCtwOLD5ome1/Km1b6SfdFVMeEfU4k8KMZOverFzT9G7W7jLOkeWeOaNC1OGuyBCNqjvvnMzjV2JEH2XgpN8zwLw1JLsLe8/zxkx6XqKxdLINayW90faR0tBw+Nr4vhT3DvdJyiU3N/BuLjkReUEYvrrvKDNXX2n6ft/uLujrRrSSCPheGLMm8TIW5KKpixvlzvT7Dev57RFtiIsoCjf3J2N+WxKaOIDPLvgmAGYw9y5s9zGnDt5bjmJSwvgyPDixHOeYmvpz9b/mLZ3X44lvGT2e5LxstEeYOupeUZbXjll1IG+RImRovT6CZLa5iJTRfLWgKuYmnuXAuPCVWoEud6E5F+4e704hYKobwYu1Gx78GEYAeAVI7Tyj5u/A8oGJb9DGKu7qvUP91eMPlNcnJKfIsik7fRAwV1WE94932aYAqiOR4WkOpBFlCxU/7NMIZ1DNuRRYiJ6wDNKCQmxJCjdLTtjWL03fagZ+F7jdFs62+Sva8PiaWbec6aH0h7/zLEd5Yhn+1HygqIv8lmjnky3RugMe9Lj394nKDvbbm9Jw9NrQNyU38C45u25fV2n63+4ufuHkhhgE9F6SQamx5fjxDc6LebQe7yQzGhO0Jvu26KIyBQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAIAAAAYAwAAAAQAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAACv////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAC')
    var tt = k
    ;(k += 16), y(tt % 8 == 0)
    var et = {
      varargs: 0,
      get: function (t) {
        return (et.varargs += 4), S[(et.varargs - 4) >> 2]
      },
      getStr: function () {
        return E(et.get())
      },
      get64: function () {
        var t = et.get(),
          e = et.get()
        return y(t >= 0 ? 0 === e : -1 === e), t
      },
      getZero: function () {
        y(0 === et.get())
      }
    }
    function nt(t, e) {
      et.varargs = e
      try {
        var n = et.get(),
          r = et.get(),
          i = et.get(),
          o = 0
        nt.buffers ||
          ((nt.buffers = [null, [], []]),
          (nt.printChar = function (t, e) {
            var n = nt.buffers[t]
            y(n), 0 === e || 10 === e ? ((1 === t ? f : l)(T(n, 0)), (n.length = 0)) : n.push(e)
          }))
        for (var a = 0; a < i; a++) {
          for (var s = S[(r + 8 * a) >> 2], c = S[(r + (8 * a + 4)) >> 2], u = 0; u < c; u++) nt.printChar(n, b[s + u])
          o += c
        }
        return o
      } catch (t) {
        return (void 0 !== J && t instanceof J.ErrnoError) || Ct(t), -t.errno
      }
    }
    function rt(t) {
      for (var e = [], n = 0; n < t.length; n++) {
        var r = t[n]
        r > 255 &&
          (y(!1, 'Character code ' + r + ' (' + String.fromCharCode(r) + ')  at offset ' + n + ' not in 0x00-0xFF.'),
          (r &= 255)),
          e.push(String.fromCharCode(r))
      }
      return e.join('')
    }
    ;(U = (function (t) {
      y(!M)
      var e = k
      return y((k = (k + t + 15) & -16) < B, 'not enough memory for static allocation - increase TOTAL_MEMORY'), e
    })(4)),
      (I = O = p(k)),
      (N = p((P = I + x))),
      (S[U >> 2] = N),
      (M = !0),
      y(N < B, 'TOTAL_MEMORY not big enough for stack')
    var it =
      'function' == typeof atob
        ? atob
        : function (t) {
            var e,
              n,
              r,
              i,
              o,
              a,
              s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
              c = '',
              u = 0
            t = t.replace(/[^A-Za-z0-9\+\/\=]/g, '')
            do {
              ;(e = (s.indexOf(t.charAt(u++)) << 2) | ((i = s.indexOf(t.charAt(u++))) >> 4)),
                (n = ((15 & i) << 4) | ((o = s.indexOf(t.charAt(u++))) >> 2)),
                (r = ((3 & o) << 6) | (a = s.indexOf(t.charAt(u++)))),
                (c += String.fromCharCode(e)),
                64 !== o && (c += String.fromCharCode(n)),
                64 !== a && (c += String.fromCharCode(r))
            } while (u < t.length)
            return c
          }
    function ot(t) {
      if (Z(t))
        return (function (t) {
          if ('boolean' == typeof a && a) {
            var e
            try {
              e = Buffer.from(t, 'base64')
            } catch (n) {
              e = new Buffer(t, 'base64')
            }
            return new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
          }
          try {
            for (var n = it(t), r = new Uint8Array(n.length), i = 0; i < n.length; ++i) r[i] = n.charCodeAt(i)
            return r
          } catch (t) {
            throw new Error('Converting base64 string to bytes failed.')
          }
        })(t.slice($.length))
    }
    ;(t.asmGlobalArg = {
      Math: Math,
      Int8Array: Int8Array,
      Int16Array: Int16Array,
      Int32Array: Int32Array,
      Uint8Array: Uint8Array,
      Uint16Array: Uint16Array,
      Uint32Array: Uint32Array,
      Float32Array: Float32Array,
      Float64Array: Float64Array,
      NaN: NaN,
      Infinity: 1 / 0
    }),
      (t.asmLibraryArg = {
        abort: Ct,
        assert: y,
        enlargeMemory: function () {
          L()
        },
        getTotalMemory: function () {
          return B
        },
        abortOnCannotGrowMemory: L,
        abortStackOverflow: function (t) {
          Ct(
            'Stack overflow! Attempted to allocate ' +
              t +
              ' bytes on the stack, but stack has only ' +
              (P - kt() + t) +
              ' bytes available!'
          )
        },
        nullFunc_ii: function (t) {
          l(
            "Invalid function pointer called with signature 'ii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)"
          ),
            l('Build with ASSERTIONS=2 for more gameInfo.'),
            Ct(t)
        },
        nullFunc_iiii: function (t) {
          l(
            "Invalid function pointer called with signature 'iiii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)"
          ),
            l('Build with ASSERTIONS=2 for more gameInfo.'),
            Ct(t)
        },
        invoke_ii: function (e, n) {
          var r = kt()
          try {
            return t.dynCall_ii(e, n)
          } catch (e) {
            if ((Rt(r), 'number' != typeof e && 'longjmp' !== e)) throw e
            t.setThrew(1, 0)
          }
        },
        invoke_iiii: function (e, n, r, i) {
          var o = kt()
          try {
            return t.dynCall_iiii(e, n, r, i)
          } catch (e) {
            if ((Rt(o), 'number' != typeof e && 'longjmp' !== e)) throw e
            t.setThrew(1, 0)
          }
        },
        ___lock: function () {},
        ___setErrNo: function (e) {
          return t.___errno_location ? (S[t.___errno_location() >> 2] = e) : l('failed to set errno from JS'), e
        },
        ___syscall140: function (t, e) {
          et.varargs = e
          try {
            var n = et.getStreamFromFD(),
              r = (et.get(), et.get()),
              i = et.get(),
              o = et.get(),
              a = r
            return (
              J.llseek(n, a, o), (S[i >> 2] = n.position), n.getdents && 0 === a && 0 === o && (n.getdents = null), 0
            )
          } catch (t) {
            return (void 0 !== J && t instanceof J.ErrnoError) || Ct(t), -t.errno
          }
        },
        ___syscall146: nt,
        ___syscall54: function (t, e) {
          et.varargs = e
          try {
            return 0
          } catch (t) {
            return (void 0 !== J && t instanceof J.ErrnoError) || Ct(t), -t.errno
          }
        },
        ___syscall6: function (t, e) {
          et.varargs = e
          try {
            var n = et.getStreamFromFD()
            return J.close(n), 0
          } catch (t) {
            return (void 0 !== J && t instanceof J.ErrnoError) || Ct(t), -t.errno
          }
        },
        ___unlock: function () {},
        _emscripten_memcpy_big: function (t, e, n) {
          return b.set(b.subarray(e, e + n), t), t
        },
        flush_NO_FILESYSTEM: function () {
          var e = t._fflush
          e && e(0)
          var n = nt.printChar
          if (n) {
            var r = nt.buffers
            r[1].length && n(1, 10), r[2].length && n(2, 10)
          }
        },
        DYNAMICTOP_PTR: U,
        tempDoublePtr: tt,
        STACKTOP: O,
        STACK_MAX: P
      })
    var at = (function (t, e, n) {
        'use asm'
        var r = new t.Int8Array(n)
        var i = new t.Int16Array(n)
        var o = new t.Int32Array(n)
        var a = new t.Uint8Array(n)
        var s = new t.Uint16Array(n)
        var c = new t.Uint32Array(n)
        var u = new t.Float32Array(n)
        var f = new t.Float64Array(n)
        var l = e.DYNAMICTOP_PTR | 0
        var h = e.tempDoublePtr | 0
        var p = e.STACKTOP | 0
        var d = e.STACK_MAX | 0
        var y = t.NaN,
          g = t.Infinity
        var v = 0
        var E = t.Math.floor
        var w = t.Math.abs
        var T = t.Math.sqrt
        var _ = t.Math.pow
        var A = t.Math.cos
        var b = t.Math.sin
        var m = t.Math.tan
        var S = t.Math.acos
        var R = t.Math.asin
        var k = t.Math.atan
        var M = t.Math.atan2
        var I = t.Math.exp
        var O = t.Math.log
        var P = t.Math.ceil
        var N = t.Math.imul
        var U = t.Math.min
        var D = t.Math.max
        var F = t.Math.clz32
        var C = e.abort
        var L = e.assert
        var x = e.enlargeMemory
        var B = e.getTotalMemory
        var X = e.abortOnCannotGrowMemory
        var z = e.abortStackOverflow
        var V = e.nullFunc_ii
        var H = e.nullFunc_iiii
        var j = e.invoke_ii
        var W = e.invoke_iiii
        var Q = e.___lock
        var G = e.___setErrNo
        var K = e.___syscall140
        var Y = e.___syscall146
        var q = e.___syscall54
        var J = e.___syscall6
        var $ = e.___unlock
        var Z = e._emscripten_memcpy_big
        var tt = e.flush_NO_FILESYSTEM
        function et(t) {
          t = t | 0
          var e = 0
          e = p
          p = (p + t) | 0
          p = (p + 15) & -16
          if ((p | 0) >= (d | 0)) z(t | 0)
          return e | 0
        }
        function nt() {
          return p | 0
        }
        function rt(t) {
          t = t | 0
          p = t
        }
        function it(t, e) {
          t = t | 0
          e = e | 0
          p = t
          d = e
        }
        function ot(t, e) {
          t = t | 0
          e = e | 0
        }
        function at(t) {
          t = t | 0
          v = t
        }
        function st() {
          return v | 0
        }
        function ct(t, e, n, i, s, c) {
          t = t | 0
          e = e | 0
          n = n | 0
          i = i | 0
          s = s | 0
          c = c | 0
          var u = 0,
            f = 0,
            l = 0,
            h = 0,
            y = 0,
            g = 0
          g = p
          p = (p + 80) | 0
          if ((p | 0) >= (d | 0)) z(80)
          y = (g + 68) | 0
          h = (g + 64) | 0
          l = g
          if (n >>> 0 < 12) {
            y = -1
            p = g
            return y | 0
          }
          u = o[e >> 2] | 0
          t = bt(u) | 0
          switch (t | 0) {
            case 301825: {
              s = (e + 12) | 0
              y = r[s >> 0] | 0
              c = (e + 13) | 0
              c = bt(a[c >> 0] | (a[(c + 1) >> 0] << 8) | (a[(c + 2) >> 0] << 16) | (a[(c + 3) >> 0] << 24)) | 0
              if ((y << 24) >> 24) {
                o[e >> 2] = bt(c) | 0
                y = 3
                p = g
                return y | 0
              }
              f = (e + 8) | 0
              t = o[f >> 2] | 0
              u = bt(t) | 0
              switch (((u >>> 0) % 3 | 0) & 3) {
                case 1: {
                  t =
                    ((((((((((a[(16 + (a[(e + 9) >> 0] | 0)) >> 0] | 0) + (a[(16 + (t & 255)) >> 0] | 0)) | 0) * 131) |
                      0) +
                      (a[(16 + (a[(e + 10) >> 0] | 0)) >> 0] | 0) +
                      (a[(16 + (a[(e + 11) >> 0] | 0)) >> 0] | 0)) |
                      0) *
                      131) |
                      0) +
                      2) |
                    0
                  break
                }
                case 2: {
                  t =
                    ((u & 44879) +
                      2 +
                      (((((a[(16 + ((t + (a[(e + 11) >> 0] | 0)) & 255)) >> 0] | 0) +
                        (a[(16 + (((a[(e + 10) >> 0] | 0) + (a[(e + 9) >> 0] | 0)) & 255)) >> 0] | 0)) |
                        0) *
                        131) |
                        0)) |
                    0
                  break
                }
                default:
                  t =
                    ((((((a[(16 + (a[(e + 9) >> 0] | 0)) >> 0] | 0) +
                      (a[(16 + (t & 255)) >> 0] | 0) +
                      (a[(16 + (a[(e + 10) >> 0] | 0)) >> 0] | 0) +
                      (a[(16 + (a[(e + 11) >> 0] | 0)) >> 0] | 0)) |
                      0) *
                      131) |
                      0) +
                      2) |
                    0
              }
              o[e >> 2] = bt(301826) | 0
              o[(e + 4) >> 2] = bt(16) | 0
              o[f >> 2] = bt((t ^ (c & 1688052650)) | -2147483648) | 0
              o[s >> 2] = bt(c ^ i) | 0
              o[(e + 16) >> 2] = bt(c) | 0
              y = 2
              p = g
              return y | 0
            }
            case 301569: {
              o[e >> 2] = bt(bt(o[(e + 12) >> 2] | 0) | 0) | 0
              y = 4
              p = g
              return y | 0
            }
            case 301840:
            case 301584: {
              i = bt(o[(e + 8) >> 2] | 0) | 0
              switch (t | 0) {
                case 301584: {
                  t = c
                  f = 13
                  break
                }
                case 301840: {
                  t = s
                  f = 13
                  break
                }
                default: {
                  t = 0
                  c = 0
                  s = 0
                  u = 0
                }
              }
              if ((f | 0) == 13) {
                u = bt(t) | 0
                o[h >> 2] = u
                t = u & 255
                c = (u >>> 8) & 255
                s = (u >>> 16) & 255
                u = (u >>> 24) & 255
              }
              if (((i >>> 0) % 7 | 0) >>> 0 > 3) {
                t = t ^ r[(272 + (i & 63)) >> 0]
                r[h >> 0] = t
                c = c ^ r[(272 + ((i + 1) & 63)) >> 0]
                r[(h + 1) >> 0] = c
                f = s ^ r[(272 + ((i + 2) & 63)) >> 0]
                r[(h + 2) >> 0] = f
                u = u ^ r[(272 + ((i + 3) & 63)) >> 0]
                r[(h + 3) >> 0] = u
              } else f = s
              do {
                if (((i + -200) | 0) >>> 0 < 100) {
                  if (n >>> 0 > 12) {
                    t = 12
                    do {
                      i = (t + -12) | 0
                      l = (e + t) | 0
                      r[l >> 0] = r[(336 + ((i >>> 0) % 67 | 0)) >> 0] ^ (r[l >> 0] ^ r[(h + (i & 3)) >> 0])
                      t = (t + 1) | 0
                    } while ((t | 0) != (n | 0))
                  }
                  i = (e + 12) | 0
                  f = (n + -12) | 0
                  s = bt(1522487922) | 0
                  o[y >> 2] = s
                  c = f >>> 2
                  if (!c) t = 0
                  else {
                    u = 0
                    t = 0
                    while (1) {
                      t = (i + t) | 0
                      o[t >> 2] = o[t >> 2] ^ s
                      t = (u + 1) | 0
                      if ((t | 0) == (c | 0)) break
                      else {
                        u = t
                        t = t << 2
                      }
                    }
                    t = f & -4
                  }
                  if (t >>> 0 < f >>> 0)
                    do {
                      n = (i + t) | 0
                      r[n >> 0] = r[n >> 0] ^ r[(y + (t & 3)) >> 0]
                      t = (t + 1) | 0
                    } while ((t | 0) != (f | 0))
                } else {
                  if (((i + -300) | 0) >>> 0 < 100) {
                    if (n >>> 0 > 12) {
                      t = 12
                      do {
                        l = (e + t) | 0
                        r[l >> 0] = r[(16 + ((r[(h + (t & 3)) >> 0] ^ r[l >> 0]) & 255)) >> 0] | 0
                        t = (t + 1) | 0
                      } while ((t | 0) != (n | 0))
                    }
                    i = (e + 12) | 0
                    f = (n + -12) | 0
                    s = bt(1522487922) | 0
                    o[y >> 2] = s
                    c = f >>> 2
                    if (!c) t = 0
                    else {
                      u = 0
                      t = 0
                      while (1) {
                        t = (i + t) | 0
                        o[t >> 2] = o[t >> 2] ^ s
                        t = (u + 1) | 0
                        if ((t | 0) == (c | 0)) break
                        else {
                          u = t
                          t = t << 2
                        }
                      }
                      t = f & -4
                    }
                    if (t >>> 0 < f >>> 0)
                      do {
                        n = (i + t) | 0
                        r[n >> 0] = r[n >> 0] ^ r[(y + (t & 3)) >> 0]
                        t = (t + 1) | 0
                      } while ((t | 0) != (f | 0))
                    break
                  }
                  if (((i + -400) | 0) >>> 0 < 100) {
                    u = (i >>> 0) % 31 | 0
                    if (n >>> 0 > 12) {
                      t = 12
                      do {
                        i = (t + -12) | 0
                        l = (e + t) | 0
                        r[l >> 0] = r[(336 + ((i >>> 0) % 67 | 0)) >> 0] ^ (r[l >> 0] ^ r[(h + ((i + u) & 3)) >> 0])
                        t = (t + 1) | 0
                      } while ((t | 0) != (n | 0))
                    }
                    i = (e + 12) | 0
                    f = (n + -12) | 0
                    s = bt(1522487922) | 0
                    o[y >> 2] = s
                    c = f >>> 2
                    if (!c) t = 0
                    else {
                      u = 0
                      t = 0
                      while (1) {
                        t = (i + t) | 0
                        o[t >> 2] = o[t >> 2] ^ s
                        t = (u + 1) | 0
                        if ((t | 0) == (c | 0)) break
                        else {
                          u = t
                          t = t << 2
                        }
                      }
                      t = f & -4
                    }
                    if (t >>> 0 < f >>> 0)
                      do {
                        n = (i + t) | 0
                        r[n >> 0] = r[n >> 0] ^ r[(y + (t & 3)) >> 0]
                        t = (t + 1) | 0
                      } while ((t | 0) != (f | 0))
                    break
                  }
                  if (((i + -800) | 0) >>> 0 < 78) {
                    u = (i >>> 0) % 80 | 0
                    if (n >>> 0 > 12) {
                      t = 12
                      do {
                        f = (t + -12) | 0
                        l = (e + t) | 0
                        r[l >> 0] =
                          r[(336 + (((((f + i) | 0) >>> 0) % 47 | 0) + u)) >> 0] ^ (r[l >> 0] ^ r[(h + (f & 3)) >> 0])
                        t = (t + 1) | 0
                      } while ((t | 0) != (n | 0))
                    }
                    i = (e + 12) | 0
                    f = (n + -12) | 0
                    s = bt(1522487922) | 0
                    o[y >> 2] = s
                    c = f >>> 2
                    if (!c) t = 0
                    else {
                      u = 0
                      t = 0
                      while (1) {
                        t = (i + t) | 0
                        o[t >> 2] = o[t >> 2] ^ s
                        t = (u + 1) | 0
                        if ((t | 0) == (c | 0)) break
                        else {
                          u = t
                          t = t << 2
                        }
                      }
                      t = f & -4
                    }
                    if (t >>> 0 < f >>> 0)
                      do {
                        n = (i + t) | 0
                        r[n >> 0] = r[n >> 0] ^ r[(y + (t & 3)) >> 0]
                        t = (t + 1) | 0
                      } while ((t | 0) != (f | 0))
                    break
                  }
                  if (((i + -900) | 0) >>> 0 < 54) {
                    if (n >>> 0 > 12) {
                      t =
                        (((((((((((((t * 131) & 255) + (f & 255)) & 255) * 13) | 0) + (c & 255)) & 255) * 23) | 0) +
                          (u & 255)) &
                          255) *
                          41) &
                        255
                      u = 12
                      do {
                        l = (e + u) | 0
                        f = t
                        t = r[l >> 0] | 0
                        r[l >> 0] = t ^ f ^ r[(464 + ((((i + (a[(h + (u & 3)) >> 0] | 0)) | 0) >>> 0) % 113 | 0)) >> 0]
                        u = (u + 1) | 0
                      } while ((u | 0) != (n | 0))
                    }
                    i = (e + 12) | 0
                    f = (n + -12) | 0
                    s = bt(1522487922) | 0
                    o[y >> 2] = s
                    c = f >>> 2
                    if (!c) t = 0
                    else {
                      u = 0
                      t = 0
                      while (1) {
                        t = (i + t) | 0
                        o[t >> 2] = o[t >> 2] ^ s
                        t = (u + 1) | 0
                        if ((t | 0) == (c | 0)) break
                        else {
                          u = t
                          t = t << 2
                        }
                      }
                      t = f & -4
                    }
                    if (t >>> 0 < f >>> 0)
                      do {
                        n = (i + t) | 0
                        r[n >> 0] = r[n >> 0] ^ r[(y + (t & 3)) >> 0]
                        t = (t + 1) | 0
                      } while ((t | 0) != (f | 0))
                    break
                  }
                  if (((i + -954) | 0) >>> 0 < 56) {
                    t = o[h >> 2] | 0
                    o[l >> 2] = t
                    o[(l + 4) >> 2] = t
                    o[(l + 8) >> 2] = t
                    o[(l + 12) >> 2] = t
                    o[(l + 16) >> 2] = t
                    o[(l + 20) >> 2] = t
                    o[(l + 24) >> 2] = t
                    o[(l + 28) >> 2] = t
                    o[(l + 32) >> 2] = t
                    o[(l + 36) >> 2] = t
                    o[(l + 40) >> 2] = t
                    o[(l + 44) >> 2] = t
                    o[(l + 48) >> 2] = t
                    o[(l + 52) >> 2] = t
                    o[(l + 56) >> 2] = t
                    o[(l + 60) >> 2] = t
                    o[(l + 64) >> 2] = t
                    o[(l + 68) >> 2] = t
                    o[(l + 72) >> 2] = t
                    o[(l + 76) >> 2] = t
                    o[(l + 80) >> 2] = t
                    o[(l + 84) >> 2] = t
                    o[(l + 88) >> 2] = t
                    o[(l + 92) >> 2] = t
                    o[(l + 96) >> 2] = t
                    o[(l + 100) >> 2] = t
                    o[(l + 104) >> 2] = t
                    o[(l + 108) >> 2] = t
                    o[(l + 112) >> 2] = t
                    o[(l + 116) >> 2] = t
                    o[(l + 120) >> 2] = t
                    o[(l + 124) >> 2] = t
                    o[(l + 128) >> 2] = t
                    o[(l + 132) >> 2] = t
                    o[(l + 136) >> 2] = t
                    o[(l + 140) >> 2] = t
                    o[(l + 144) >> 2] = t
                    o[(l + 148) >> 2] = t
                    o[(l + 152) >> 2] = t
                    o[(l + 156) >> 2] = t
                    o[(l + 160) >> 2] = t
                    o[(l + 164) >> 2] = t
                    o[(l + 168) >> 2] = t
                    o[(l + 172) >> 2] = t
                    o[(l + 176) >> 2] = t
                    o[(l + 180) >> 2] = t
                    o[(l + 184) >> 2] = t
                    o[(l + 188) >> 2] = t
                    o[(l + 192) >> 2] = t
                    o[(l + 196) >> 2] = t
                    o[(l + 200) >> 2] = t
                    o[(l + 204) >> 2] = t
                    o[(l + 208) >> 2] = t
                    o[(l + 212) >> 2] = t
                    o[(l + 216) >> 2] = t
                    o[(l + 220) >> 2] = t
                    o[(l + 224) >> 2] = t
                    o[(l + 228) >> 2] = t
                    o[(l + 232) >> 2] = t
                    o[(l + 236) >> 2] = t
                    o[(l + 240) >> 2] = t
                    o[(l + 244) >> 2] = t
                    o[(l + 248) >> 2] = t
                    o[(l + 252) >> 2] = t
                    t = 0
                    u = i
                    do {
                      c = (l + t) | 0
                      f = r[c >> 0] | 0
                      h = (l + (u & 63)) | 0
                      r[c >> 0] = r[h >> 0] | 0
                      r[h >> 0] = f
                      u = ((((u & 16777215) * 131) | 0) + t) | 0
                      t = (t + 1) | 0
                    } while ((t | 0) != 64)
                    if (n >>> 0 > 12) {
                      u = (i + -12) | 0
                      t = 12
                      do {
                        h = (e + t) | 0
                        r[h >> 0] = r[h >> 0] ^ r[(l + ((((u + t) | 0) >>> 0) % 53 | 0)) >> 0]
                        t = (t + 1) | 0
                      } while ((t | 0) != (n | 0))
                    }
                    i = (e + 12) | 0
                    f = (n + -12) | 0
                    s = bt(1522487922) | 0
                    o[y >> 2] = s
                    c = f >>> 2
                    if (!c) t = 0
                    else {
                      u = 0
                      t = 0
                      while (1) {
                        t = (i + t) | 0
                        o[t >> 2] = o[t >> 2] ^ s
                        t = (u + 1) | 0
                        if ((t | 0) == (c | 0)) break
                        else {
                          u = t
                          t = t << 2
                        }
                      }
                      t = f & -4
                    }
                    if (t >>> 0 < f >>> 0)
                      do {
                        n = (i + t) | 0
                        r[n >> 0] = r[n >> 0] ^ r[(y + (t & 3)) >> 0]
                        t = (t + 1) | 0
                      } while ((t | 0) != (f | 0))
                    break
                  }
                  if (((i + -1010) | 0) >>> 0 < 45) {
                    if (n >>> 0 > 12) {
                      s = (i + 231) | 0
                      t =
                        ((((c & 255) * 124) | 0) +
                          (((t & 255) * 232) | 0) +
                          (((f & 255) * 79) | 0) +
                          ((u & 255) << 3)) |
                        0
                      u = 12
                      do {
                        l = (e + u) | 0
                        t =
                          (t & 255) ^
                          (a[(464 + (((((s + (a[(h + (u & 3)) >> 0] | 0)) | 0) >>> 0) % 69 | 0) + 13)) >> 0] | 0) ^
                          (a[l >> 0] | 0)
                        r[l >> 0] = t
                        u = (u + 1) | 0
                      } while ((u | 0) != (n | 0))
                    }
                    i = (e + 12) | 0
                    f = (n + -12) | 0
                    s = bt(1522487922) | 0
                    o[y >> 2] = s
                    c = f >>> 2
                    if (!c) t = 0
                    else {
                      u = 0
                      t = 0
                      while (1) {
                        t = (i + t) | 0
                        o[t >> 2] = o[t >> 2] ^ s
                        t = (u + 1) | 0
                        if ((t | 0) == (c | 0)) break
                        else {
                          u = t
                          t = t << 2
                        }
                      }
                      t = f & -4
                    }
                    if (t >>> 0 < f >>> 0)
                      do {
                        n = (i + t) | 0
                        r[n >> 0] = r[n >> 0] ^ r[(y + (t & 3)) >> 0]
                        t = (t + 1) | 0
                      } while ((t | 0) != (f | 0))
                    break
                  }
                  if (((i + -1104) | 0) >>> 0 < 48) {
                    if (n >>> 0 > 12) {
                      u = 12
                      do {
                        s = (e + u) | 0
                        c = r[s >> 0] ^ r[(h + (u & 3)) >> 0]
                        r[s >> 0] = c
                        t = (u + i) | 0
                        if (!(u & 1)) t = (336 + ((((t + 77) | 0) >>> 0) % 119 | 0)) | 0
                        else t = (464 + ((t + 11) & 127)) | 0
                        r[s >> 0] = r[t >> 0] ^ c
                        u = (u + 1) | 0
                      } while ((u | 0) != (n | 0))
                    }
                    i = (e + 12) | 0
                    f = (n + -12) | 0
                    s = bt(1522487922) | 0
                    o[y >> 2] = s
                    c = f >>> 2
                    if (!c) t = 0
                    else {
                      u = 0
                      t = 0
                      while (1) {
                        t = (i + t) | 0
                        o[t >> 2] = o[t >> 2] ^ s
                        t = (u + 1) | 0
                        if ((t | 0) == (c | 0)) break
                        else {
                          u = t
                          t = t << 2
                        }
                      }
                      t = f & -4
                    }
                    if (t >>> 0 < f >>> 0)
                      do {
                        n = (i + t) | 0
                        r[n >> 0] = r[n >> 0] ^ r[(y + (t & 3)) >> 0]
                        t = (t + 1) | 0
                      } while ((t | 0) != (f | 0))
                    break
                  }
                  if (((i + -1055) | 0) >>> 0 < 76) {
                    if (n >>> 0 > 12) {
                      t = 12
                      do {
                        f = (t + -12) | 0
                        l = (e + t) | 0
                        r[l >> 0] =
                          r[(592 + (((((f >>> 3) & 7) | (f << 3)) + i) & 63)) >> 0] ^
                          (r[l >> 0] ^ r[(h + (f & 3)) >> 0])
                        t = (t + 1) | 0
                      } while ((t | 0) != (n | 0))
                    }
                    i = (e + 12) | 0
                    f = (n + -12) | 0
                    s = bt(1522487922) | 0
                    o[y >> 2] = s
                    c = f >>> 2
                    if (!c) t = 0
                    else {
                      u = 0
                      t = 0
                      while (1) {
                        t = (i + t) | 0
                        o[t >> 2] = o[t >> 2] ^ s
                        t = (u + 1) | 0
                        if ((t | 0) == (c | 0)) break
                        else {
                          u = t
                          t = t << 2
                        }
                      }
                      t = f & -4
                    }
                    if (t >>> 0 < f >>> 0)
                      do {
                        n = (i + t) | 0
                        r[n >> 0] = r[n >> 0] ^ r[(y + (t & 3)) >> 0]
                        t = (t + 1) | 0
                      } while ((t | 0) != (f | 0))
                    break
                  }
                  u = n >>> 2
                  if (n >>> 0 > 15) {
                    s = o[h >> 2] | 0
                    t = 3
                    do {
                      l = (e + (t << 2)) | 0
                      o[l >> 2] = o[l >> 2] ^ s
                      t = (t + 1) | 0
                    } while (t >>> 0 < u >>> 0)
                    t = t << 2
                  } else t = 12
                  if (t >>> 0 < n >>> 0)
                    do {
                      l = (e + t) | 0
                      r[l >> 0] = r[l >> 0] ^ r[(h + (t & 3)) >> 0]
                      t = (t + 1) | 0
                    } while ((t | 0) != (n | 0))
                  i = (e + 12) | 0
                  f = (n + -12) | 0
                  s = bt(1522487922) | 0
                  o[y >> 2] = s
                  c = f >>> 2
                  if (!c) t = 0
                  else {
                    u = 0
                    t = 0
                    while (1) {
                      t = (i + t) | 0
                      o[t >> 2] = o[t >> 2] ^ s
                      t = (u + 1) | 0
                      if ((t | 0) == (c | 0)) break
                      else {
                        u = t
                        t = t << 2
                      }
                    }
                    t = f & -4
                  }
                  if (t >>> 0 < f >>> 0)
                    do {
                      n = (i + t) | 0
                      r[n >> 0] = r[n >> 0] ^ r[(y + (t & 3)) >> 0]
                      t = (t + 1) | 0
                    } while ((t | 0) != (f | 0))
                }
              } while (0)
              y = 1
              p = g
              return y | 0
            }
            default: {
              s = bt(1522487922) | 0
              o[y >> 2] = s
              c = n >>> 2
              if (!c) t = 0
              else {
                o[e >> 2] = u ^ s
                if ((c | 0) != 1) {
                  u = 4
                  t = 1
                  while (1) {
                    o[(e + u) >> 2] = o[(e + u) >> 2] ^ s
                    t = (t + 1) | 0
                    if ((t | 0) == (c | 0)) break
                    else u = t << 2
                  }
                }
                t = n & -4
              }
              if (t >>> 0 < n >>> 0)
                do {
                  h = (e + t) | 0
                  r[h >> 0] = r[h >> 0] ^ r[(y + (t & 3)) >> 0]
                  t = (t + 1) | 0
                } while ((t | 0) != (n | 0))
              y = 0
              p = g
              return y | 0
            }
          }
          return 0
        }
        function ut(t, e, n, i, a, s, c) {
          t = t | 0
          e = e | 0
          n = n | 0
          i = i | 0
          a = a | 0
          s = s | 0
          c = c | 0
          var u = 0,
            f = 0,
            l = 0
          l = p
          p = (p + 16) | 0
          if ((p | 0) >= (d | 0)) z(16)
          u = l
          f = (n + 12) | 0
          if (f >>> 0 > i >>> 0) {
            n = -1
            p = l
            return n | 0
          }
          c = bt(a) | 0
          o[u >> 2] = c
          Mt((e + 12) | 0, e | 0, n | 0) | 0
          o[e >> 2] = bt(301840) | 0
          o[(e + 4) >> 2] = bt(f) | 0
          o[(e + 8) >> 2] = bt(2) | 0
          i = n >>> 2
          if (!i) t = 0
          else {
            s = 0
            t = 0
            while (1) {
              t = (e + (t + 12)) | 0
              o[t >> 2] = o[t >> 2] ^ c
              t = (s + 1) | 0
              if ((t | 0) == (i | 0)) break
              else {
                s = t
                t = t << 2
              }
            }
            t = n & -4
          }
          if (t >>> 0 < n >>> 0)
            do {
              a = (e + (t + 12)) | 0
              r[a >> 0] = r[a >> 0] ^ r[(u + (t & 3)) >> 0]
              t = (t + 1) | 0
            } while ((t | 0) != (n | 0))
          n = f
          p = l
          return n | 0
        }
        function ft(t) {
          t = t | 0
          var e = 0,
            n = 0,
            r = 0,
            i = 0,
            a = 0,
            s = 0,
            c = 0,
            u = 0,
            f = 0,
            l = 0,
            h = 0,
            y = 0,
            g = 0,
            v = 0,
            E = 0,
            w = 0,
            T = 0,
            _ = 0,
            A = 0,
            b = 0,
            m = 0
          m = p
          p = (p + 16) | 0
          if ((p | 0) >= (d | 0)) z(16)
          y = m
          do {
            if (t >>> 0 < 245) {
              f = t >>> 0 < 11 ? 16 : (t + 11) & -8
              t = f >>> 3
              h = o[456] | 0
              n = h >>> t
              if ((n & 3) | 0) {
                e = (((n & 1) ^ 1) + t) | 0
                t = (1864 + ((e << 1) << 2)) | 0
                n = (t + 8) | 0
                r = o[n >> 2] | 0
                i = (r + 8) | 0
                a = o[i >> 2] | 0
                if ((a | 0) == (t | 0)) o[456] = h & ~(1 << e)
                else {
                  o[(a + 12) >> 2] = t
                  o[n >> 2] = a
                }
                b = e << 3
                o[(r + 4) >> 2] = b | 3
                b = (r + b + 4) | 0
                o[b >> 2] = o[b >> 2] | 1
                b = i
                p = m
                return b | 0
              }
              l = o[458] | 0
              if (f >>> 0 > l >>> 0) {
                if (n | 0) {
                  e = 2 << t
                  e = (n << t) & (e | (0 - e))
                  e = ((e & (0 - e)) + -1) | 0
                  c = (e >>> 12) & 16
                  e = e >>> c
                  n = (e >>> 5) & 8
                  e = e >>> n
                  a = (e >>> 2) & 4
                  e = e >>> a
                  t = (e >>> 1) & 2
                  e = e >>> t
                  r = (e >>> 1) & 1
                  r = ((n | c | a | t | r) + (e >>> r)) | 0
                  e = (1864 + ((r << 1) << 2)) | 0
                  t = (e + 8) | 0
                  a = o[t >> 2] | 0
                  c = (a + 8) | 0
                  n = o[c >> 2] | 0
                  if ((n | 0) == (e | 0)) {
                    t = h & ~(1 << r)
                    o[456] = t
                  } else {
                    o[(n + 12) >> 2] = e
                    o[t >> 2] = n
                    t = h
                  }
                  b = r << 3
                  s = (b - f) | 0
                  o[(a + 4) >> 2] = f | 3
                  i = (a + f) | 0
                  o[(i + 4) >> 2] = s | 1
                  o[(a + b) >> 2] = s
                  if (l | 0) {
                    r = o[461] | 0
                    e = l >>> 3
                    n = (1864 + ((e << 1) << 2)) | 0
                    e = 1 << e
                    if (!(t & e)) {
                      o[456] = t | e
                      e = n
                      t = (n + 8) | 0
                    } else {
                      t = (n + 8) | 0
                      e = o[t >> 2] | 0
                    }
                    o[t >> 2] = r
                    o[(e + 12) >> 2] = r
                    o[(r + 8) >> 2] = e
                    o[(r + 12) >> 2] = n
                  }
                  o[458] = s
                  o[461] = i
                  b = c
                  p = m
                  return b | 0
                }
                a = o[457] | 0
                if (a) {
                  n = ((a & (0 - a)) + -1) | 0
                  i = (n >>> 12) & 16
                  n = n >>> i
                  r = (n >>> 5) & 8
                  n = n >>> r
                  s = (n >>> 2) & 4
                  n = n >>> s
                  c = (n >>> 1) & 2
                  n = n >>> c
                  u = (n >>> 1) & 1
                  u = o[(2128 + (((r | i | s | c | u) + (n >>> u)) << 2)) >> 2] | 0
                  n = u
                  c = u
                  u = ((o[(u + 4) >> 2] & -8) - f) | 0
                  while (1) {
                    t = o[(n + 16) >> 2] | 0
                    if (!t) {
                      t = o[(n + 20) >> 2] | 0
                      if (!t) break
                    }
                    s = ((o[(t + 4) >> 2] & -8) - f) | 0
                    i = s >>> 0 < u >>> 0
                    n = t
                    c = i ? t : c
                    u = i ? s : u
                  }
                  s = (c + f) | 0
                  if (s >>> 0 > c >>> 0) {
                    i = o[(c + 24) >> 2] | 0
                    e = o[(c + 12) >> 2] | 0
                    do {
                      if ((e | 0) == (c | 0)) {
                        t = (c + 20) | 0
                        e = o[t >> 2] | 0
                        if (!e) {
                          t = (c + 16) | 0
                          e = o[t >> 2] | 0
                          if (!e) {
                            n = 0
                            break
                          }
                        }
                        while (1) {
                          r = (e + 20) | 0
                          n = o[r >> 2] | 0
                          if (!n) {
                            r = (e + 16) | 0
                            n = o[r >> 2] | 0
                            if (!n) break
                            else {
                              e = n
                              t = r
                            }
                          } else {
                            e = n
                            t = r
                          }
                        }
                        o[t >> 2] = 0
                        n = e
                      } else {
                        n = o[(c + 8) >> 2] | 0
                        o[(n + 12) >> 2] = e
                        o[(e + 8) >> 2] = n
                        n = e
                      }
                    } while (0)
                    do {
                      if (i | 0) {
                        e = o[(c + 28) >> 2] | 0
                        t = (2128 + (e << 2)) | 0
                        if ((c | 0) == (o[t >> 2] | 0)) {
                          o[t >> 2] = n
                          if (!n) {
                            o[457] = a & ~(1 << e)
                            break
                          }
                        } else {
                          b = (i + 16) | 0
                          o[((o[b >> 2] | 0) == (c | 0) ? b : (i + 20) | 0) >> 2] = n
                          if (!n) break
                        }
                        o[(n + 24) >> 2] = i
                        e = o[(c + 16) >> 2] | 0
                        if (e | 0) {
                          o[(n + 16) >> 2] = e
                          o[(e + 24) >> 2] = n
                        }
                        e = o[(c + 20) >> 2] | 0
                        if (e | 0) {
                          o[(n + 20) >> 2] = e
                          o[(e + 24) >> 2] = n
                        }
                      }
                    } while (0)
                    if (u >>> 0 < 16) {
                      b = (u + f) | 0
                      o[(c + 4) >> 2] = b | 3
                      b = (c + b + 4) | 0
                      o[b >> 2] = o[b >> 2] | 1
                    } else {
                      o[(c + 4) >> 2] = f | 3
                      o[(s + 4) >> 2] = u | 1
                      o[(s + u) >> 2] = u
                      if (l | 0) {
                        r = o[461] | 0
                        e = l >>> 3
                        n = (1864 + ((e << 1) << 2)) | 0
                        e = 1 << e
                        if (!(e & h)) {
                          o[456] = e | h
                          e = n
                          t = (n + 8) | 0
                        } else {
                          t = (n + 8) | 0
                          e = o[t >> 2] | 0
                        }
                        o[t >> 2] = r
                        o[(e + 12) >> 2] = r
                        o[(r + 8) >> 2] = e
                        o[(r + 12) >> 2] = n
                      }
                      o[458] = u
                      o[461] = s
                    }
                    b = (c + 8) | 0
                    p = m
                    return b | 0
                  } else h = f
                } else h = f
              } else h = f
            } else if (t >>> 0 <= 4294967231) {
              t = (t + 11) | 0
              f = t & -8
              r = o[457] | 0
              if (r) {
                i = (0 - f) | 0
                t = t >>> 8
                if (t) {
                  if (f >>> 0 > 16777215) u = 31
                  else {
                    h = (((t + 1048320) | 0) >>> 16) & 8
                    E = t << h
                    c = (((E + 520192) | 0) >>> 16) & 4
                    E = E << c
                    u = (((E + 245760) | 0) >>> 16) & 2
                    u = (14 - (c | h | u) + ((E << u) >>> 15)) | 0
                    u = ((f >>> ((u + 7) | 0)) & 1) | (u << 1)
                  }
                } else u = 0
                n = o[(2128 + (u << 2)) >> 2] | 0
                t: do {
                  if (!n) {
                    n = 0
                    t = 0
                    E = 61
                  } else {
                    t = 0
                    c = f << ((u | 0) == 31 ? 0 : (25 - (u >>> 1)) | 0)
                    a = 0
                    while (1) {
                      s = ((o[(n + 4) >> 2] & -8) - f) | 0
                      if (s >>> 0 < i >>> 0)
                        if (!s) {
                          t = n
                          i = 0
                          E = 65
                          break t
                        } else {
                          t = n
                          i = s
                        }
                      E = o[(n + 20) >> 2] | 0
                      n = o[(n + 16 + ((c >>> 31) << 2)) >> 2] | 0
                      a = ((E | 0) == 0) | ((E | 0) == (n | 0)) ? a : E
                      if (!n) {
                        n = a
                        E = 61
                        break
                      } else c = c << 1
                    }
                  }
                } while (0)
                if ((E | 0) == 61) {
                  if (((n | 0) == 0) & ((t | 0) == 0)) {
                    t = 2 << u
                    t = (t | (0 - t)) & r
                    if (!t) {
                      h = f
                      break
                    }
                    h = ((t & (0 - t)) + -1) | 0
                    s = (h >>> 12) & 16
                    h = h >>> s
                    a = (h >>> 5) & 8
                    h = h >>> a
                    c = (h >>> 2) & 4
                    h = h >>> c
                    u = (h >>> 1) & 2
                    h = h >>> u
                    n = (h >>> 1) & 1
                    t = 0
                    n = o[(2128 + (((a | s | c | u | n) + (h >>> n)) << 2)) >> 2] | 0
                  }
                  if (!n) {
                    c = t
                    s = i
                  } else E = 65
                }
                if ((E | 0) == 65) {
                  a = n
                  while (1) {
                    h = ((o[(a + 4) >> 2] & -8) - f) | 0
                    n = h >>> 0 < i >>> 0
                    i = n ? h : i
                    t = n ? a : t
                    n = o[(a + 16) >> 2] | 0
                    if (!n) n = o[(a + 20) >> 2] | 0
                    if (!n) {
                      c = t
                      s = i
                      break
                    } else a = n
                  }
                }
                if (
                  ((c | 0) != 0 ? s >>> 0 < (((o[458] | 0) - f) | 0) >>> 0 : 0)
                    ? ((l = (c + f) | 0), l >>> 0 > c >>> 0)
                    : 0
                ) {
                  a = o[(c + 24) >> 2] | 0
                  e = o[(c + 12) >> 2] | 0
                  do {
                    if ((e | 0) == (c | 0)) {
                      t = (c + 20) | 0
                      e = o[t >> 2] | 0
                      if (!e) {
                        t = (c + 16) | 0
                        e = o[t >> 2] | 0
                        if (!e) {
                          e = 0
                          break
                        }
                      }
                      while (1) {
                        i = (e + 20) | 0
                        n = o[i >> 2] | 0
                        if (!n) {
                          i = (e + 16) | 0
                          n = o[i >> 2] | 0
                          if (!n) break
                          else {
                            e = n
                            t = i
                          }
                        } else {
                          e = n
                          t = i
                        }
                      }
                      o[t >> 2] = 0
                    } else {
                      b = o[(c + 8) >> 2] | 0
                      o[(b + 12) >> 2] = e
                      o[(e + 8) >> 2] = b
                    }
                  } while (0)
                  do {
                    if (a) {
                      t = o[(c + 28) >> 2] | 0
                      n = (2128 + (t << 2)) | 0
                      if ((c | 0) == (o[n >> 2] | 0)) {
                        o[n >> 2] = e
                        if (!e) {
                          r = r & ~(1 << t)
                          o[457] = r
                          break
                        }
                      } else {
                        b = (a + 16) | 0
                        o[((o[b >> 2] | 0) == (c | 0) ? b : (a + 20) | 0) >> 2] = e
                        if (!e) break
                      }
                      o[(e + 24) >> 2] = a
                      t = o[(c + 16) >> 2] | 0
                      if (t | 0) {
                        o[(e + 16) >> 2] = t
                        o[(t + 24) >> 2] = e
                      }
                      t = o[(c + 20) >> 2] | 0
                      if (t) {
                        o[(e + 20) >> 2] = t
                        o[(t + 24) >> 2] = e
                      }
                    }
                  } while (0)
                  t: do {
                    if (s >>> 0 < 16) {
                      b = (s + f) | 0
                      o[(c + 4) >> 2] = b | 3
                      b = (c + b + 4) | 0
                      o[b >> 2] = o[b >> 2] | 1
                    } else {
                      o[(c + 4) >> 2] = f | 3
                      o[(l + 4) >> 2] = s | 1
                      o[(l + s) >> 2] = s
                      e = s >>> 3
                      if (s >>> 0 < 256) {
                        n = (1864 + ((e << 1) << 2)) | 0
                        t = o[456] | 0
                        e = 1 << e
                        if (!(t & e)) {
                          o[456] = t | e
                          e = n
                          t = (n + 8) | 0
                        } else {
                          t = (n + 8) | 0
                          e = o[t >> 2] | 0
                        }
                        o[t >> 2] = l
                        o[(e + 12) >> 2] = l
                        o[(l + 8) >> 2] = e
                        o[(l + 12) >> 2] = n
                        break
                      }
                      e = s >>> 8
                      if (e) {
                        if (s >>> 0 > 16777215) n = 31
                        else {
                          A = (((e + 1048320) | 0) >>> 16) & 8
                          b = e << A
                          _ = (((b + 520192) | 0) >>> 16) & 4
                          b = b << _
                          n = (((b + 245760) | 0) >>> 16) & 2
                          n = (14 - (_ | A | n) + ((b << n) >>> 15)) | 0
                          n = ((s >>> ((n + 7) | 0)) & 1) | (n << 1)
                        }
                      } else n = 0
                      e = (2128 + (n << 2)) | 0
                      o[(l + 28) >> 2] = n
                      t = (l + 16) | 0
                      o[(t + 4) >> 2] = 0
                      o[t >> 2] = 0
                      t = 1 << n
                      if (!(r & t)) {
                        o[457] = r | t
                        o[e >> 2] = l
                        o[(l + 24) >> 2] = e
                        o[(l + 12) >> 2] = l
                        o[(l + 8) >> 2] = l
                        break
                      }
                      e = o[e >> 2] | 0
                      e: do {
                        if (((o[(e + 4) >> 2] & -8) | 0) != (s | 0)) {
                          r = s << ((n | 0) == 31 ? 0 : (25 - (n >>> 1)) | 0)
                          while (1) {
                            n = (e + 16 + ((r >>> 31) << 2)) | 0
                            t = o[n >> 2] | 0
                            if (!t) break
                            if (((o[(t + 4) >> 2] & -8) | 0) == (s | 0)) {
                              e = t
                              break e
                            } else {
                              r = r << 1
                              e = t
                            }
                          }
                          o[n >> 2] = l
                          o[(l + 24) >> 2] = e
                          o[(l + 12) >> 2] = l
                          o[(l + 8) >> 2] = l
                          break t
                        }
                      } while (0)
                      A = (e + 8) | 0
                      b = o[A >> 2] | 0
                      o[(b + 12) >> 2] = l
                      o[A >> 2] = l
                      o[(l + 8) >> 2] = b
                      o[(l + 12) >> 2] = e
                      o[(l + 24) >> 2] = 0
                    }
                  } while (0)
                  b = (c + 8) | 0
                  p = m
                  return b | 0
                } else h = f
              } else h = f
            } else h = -1
          } while (0)
          n = o[458] | 0
          if (n >>> 0 >= h >>> 0) {
            e = (n - h) | 0
            t = o[461] | 0
            if (e >>> 0 > 15) {
              b = (t + h) | 0
              o[461] = b
              o[458] = e
              o[(b + 4) >> 2] = e | 1
              o[(t + n) >> 2] = e
              o[(t + 4) >> 2] = h | 3
            } else {
              o[458] = 0
              o[461] = 0
              o[(t + 4) >> 2] = n | 3
              b = (t + n + 4) | 0
              o[b >> 2] = o[b >> 2] | 1
            }
            b = (t + 8) | 0
            p = m
            return b | 0
          }
          s = o[459] | 0
          if (s >>> 0 > h >>> 0) {
            _ = (s - h) | 0
            o[459] = _
            b = o[462] | 0
            A = (b + h) | 0
            o[462] = A
            o[(A + 4) >> 2] = _ | 1
            o[(b + 4) >> 2] = h | 3
            b = (b + 8) | 0
            p = m
            return b | 0
          }
          if (!(o[574] | 0)) {
            o[576] = 4096
            o[575] = 4096
            o[577] = -1
            o[578] = -1
            o[579] = 0
            o[567] = 0
            o[574] = (y & -16) ^ 1431655768
            t = 4096
          } else t = o[576] | 0
          c = (h + 48) | 0
          u = (h + 47) | 0
          a = (t + u) | 0
          i = (0 - t) | 0
          f = a & i
          if (f >>> 0 <= h >>> 0) {
            b = 0
            p = m
            return b | 0
          }
          t = o[566] | 0
          if (t | 0 ? ((l = o[564] | 0), (y = (l + f) | 0), (y >>> 0 <= l >>> 0) | (y >>> 0 > t >>> 0)) : 0) {
            b = 0
            p = m
            return b | 0
          }
          t: do {
            if (!(o[567] & 4)) {
              n = o[462] | 0
              e: do {
                if (n) {
                  r = 2272
                  while (1) {
                    y = o[r >> 2] | 0
                    if (y >>> 0 <= n >>> 0 ? ((y + (o[(r + 4) >> 2] | 0)) | 0) >>> 0 > n >>> 0 : 0) break
                    t = o[(r + 8) >> 2] | 0
                    if (!t) {
                      E = 128
                      break e
                    } else r = t
                  }
                  e = (a - s) & i
                  if (e >>> 0 < 2147483647) {
                    t = Ot(e | 0) | 0
                    if ((t | 0) == (((o[r >> 2] | 0) + (o[(r + 4) >> 2] | 0)) | 0)) {
                      if ((t | 0) != (-1 | 0)) {
                        s = e
                        a = t
                        E = 145
                        break t
                      }
                    } else {
                      r = t
                      E = 136
                    }
                  } else e = 0
                } else E = 128
              } while (0)
              do {
                if ((E | 0) == 128) {
                  n = Ot(0) | 0
                  if (
                    (n | 0) != (-1 | 0)
                      ? ((e = n),
                        (g = o[575] | 0),
                        (v = (g + -1) | 0),
                        (e = ((((v & e) | 0) == 0 ? 0 : (((v + e) & (0 - g)) - e) | 0) + f) | 0),
                        (g = o[564] | 0),
                        (v = (e + g) | 0),
                        (e >>> 0 > h >>> 0) & (e >>> 0 < 2147483647))
                      : 0
                  ) {
                    y = o[566] | 0
                    if (y | 0 ? (v >>> 0 <= g >>> 0) | (v >>> 0 > y >>> 0) : 0) {
                      e = 0
                      break
                    }
                    t = Ot(e | 0) | 0
                    if ((t | 0) == (n | 0)) {
                      s = e
                      a = n
                      E = 145
                      break t
                    } else {
                      r = t
                      E = 136
                    }
                  } else e = 0
                }
              } while (0)
              do {
                if ((E | 0) == 136) {
                  n = (0 - e) | 0
                  if (!((c >>> 0 > e >>> 0) & ((e >>> 0 < 2147483647) & ((r | 0) != (-1 | 0)))))
                    if ((r | 0) == (-1 | 0)) {
                      e = 0
                      break
                    } else {
                      s = e
                      a = r
                      E = 145
                      break t
                    }
                  t = o[576] | 0
                  t = (u - e + t) & (0 - t)
                  if (t >>> 0 >= 2147483647) {
                    s = e
                    a = r
                    E = 145
                    break t
                  }
                  if ((Ot(t | 0) | 0) == (-1 | 0)) {
                    Ot(n | 0) | 0
                    e = 0
                    break
                  } else {
                    s = (t + e) | 0
                    a = r
                    E = 145
                    break t
                  }
                }
              } while (0)
              o[567] = o[567] | 4
              E = 143
            } else {
              e = 0
              E = 143
            }
          } while (0)
          if (
            ((E | 0) == 143 ? f >>> 0 < 2147483647 : 0)
              ? ((_ = Ot(f | 0) | 0),
                (v = Ot(0) | 0),
                (w = (v - _) | 0),
                (T = w >>> 0 > ((h + 40) | 0) >>> 0),
                !(
                  ((_ | 0) == (-1 | 0)) |
                  (T ^ 1) |
                  (((_ >>> 0 < v >>> 0) & (((_ | 0) != (-1 | 0)) & ((v | 0) != (-1 | 0)))) ^ 1)
                ))
              : 0
          ) {
            s = T ? w : e
            a = _
            E = 145
          }
          if ((E | 0) == 145) {
            e = ((o[564] | 0) + s) | 0
            o[564] = e
            if (e >>> 0 > (o[565] | 0) >>> 0) o[565] = e
            u = o[462] | 0
            t: do {
              if (u) {
                e = 2272
                while (1) {
                  t = o[e >> 2] | 0
                  n = o[(e + 4) >> 2] | 0
                  if ((a | 0) == ((t + n) | 0)) {
                    E = 154
                    break
                  }
                  r = o[(e + 8) >> 2] | 0
                  if (!r) break
                  else e = r
                }
                if (
                  ((E | 0) == 154 ? ((A = (e + 4) | 0), ((o[(e + 12) >> 2] & 8) | 0) == 0) : 0)
                    ? (a >>> 0 > u >>> 0) & (t >>> 0 <= u >>> 0)
                    : 0
                ) {
                  o[A >> 2] = n + s
                  b = ((o[459] | 0) + s) | 0
                  _ = (u + 8) | 0
                  _ = ((_ & 7) | 0) == 0 ? 0 : (0 - _) & 7
                  A = (u + _) | 0
                  _ = (b - _) | 0
                  o[462] = A
                  o[459] = _
                  o[(A + 4) >> 2] = _ | 1
                  o[(u + b + 4) >> 2] = 40
                  o[463] = o[578]
                  break
                }
                if (a >>> 0 < (o[460] | 0) >>> 0) o[460] = a
                n = (a + s) | 0
                e = 2272
                while (1) {
                  if ((o[e >> 2] | 0) == (n | 0)) {
                    E = 162
                    break
                  }
                  t = o[(e + 8) >> 2] | 0
                  if (!t) break
                  else e = t
                }
                if ((E | 0) == 162 ? ((o[(e + 12) >> 2] & 8) | 0) == 0 : 0) {
                  o[e >> 2] = a
                  l = (e + 4) | 0
                  o[l >> 2] = (o[l >> 2] | 0) + s
                  l = (a + 8) | 0
                  l = (a + (((l & 7) | 0) == 0 ? 0 : (0 - l) & 7)) | 0
                  e = (n + 8) | 0
                  e = (n + (((e & 7) | 0) == 0 ? 0 : (0 - e) & 7)) | 0
                  f = (l + h) | 0
                  c = (e - l - h) | 0
                  o[(l + 4) >> 2] = h | 3
                  e: do {
                    if ((u | 0) == (e | 0)) {
                      b = ((o[459] | 0) + c) | 0
                      o[459] = b
                      o[462] = f
                      o[(f + 4) >> 2] = b | 1
                    } else {
                      if ((o[461] | 0) == (e | 0)) {
                        b = ((o[458] | 0) + c) | 0
                        o[458] = b
                        o[461] = f
                        o[(f + 4) >> 2] = b | 1
                        o[(f + b) >> 2] = b
                        break
                      }
                      t = o[(e + 4) >> 2] | 0
                      if (((t & 3) | 0) == 1) {
                        s = t & -8
                        r = t >>> 3
                        n: do {
                          if (t >>> 0 < 256) {
                            t = o[(e + 8) >> 2] | 0
                            n = o[(e + 12) >> 2] | 0
                            if ((n | 0) == (t | 0)) {
                              o[456] = o[456] & ~(1 << r)
                              break
                            } else {
                              o[(t + 12) >> 2] = n
                              o[(n + 8) >> 2] = t
                              break
                            }
                          } else {
                            a = o[(e + 24) >> 2] | 0
                            t = o[(e + 12) >> 2] | 0
                            do {
                              if ((t | 0) == (e | 0)) {
                                n = (e + 16) | 0
                                r = (n + 4) | 0
                                t = o[r >> 2] | 0
                                if (!t) {
                                  t = o[n >> 2] | 0
                                  if (!t) {
                                    t = 0
                                    break
                                  }
                                } else n = r
                                while (1) {
                                  i = (t + 20) | 0
                                  r = o[i >> 2] | 0
                                  if (!r) {
                                    i = (t + 16) | 0
                                    r = o[i >> 2] | 0
                                    if (!r) break
                                    else {
                                      t = r
                                      n = i
                                    }
                                  } else {
                                    t = r
                                    n = i
                                  }
                                }
                                o[n >> 2] = 0
                              } else {
                                b = o[(e + 8) >> 2] | 0
                                o[(b + 12) >> 2] = t
                                o[(t + 8) >> 2] = b
                              }
                            } while (0)
                            if (!a) break
                            n = o[(e + 28) >> 2] | 0
                            r = (2128 + (n << 2)) | 0
                            do {
                              if ((o[r >> 2] | 0) != (e | 0)) {
                                b = (a + 16) | 0
                                o[((o[b >> 2] | 0) == (e | 0) ? b : (a + 20) | 0) >> 2] = t
                                if (!t) break n
                              } else {
                                o[r >> 2] = t
                                if (t | 0) break
                                o[457] = o[457] & ~(1 << n)
                                break n
                              }
                            } while (0)
                            o[(t + 24) >> 2] = a
                            n = (e + 16) | 0
                            r = o[n >> 2] | 0
                            if (r | 0) {
                              o[(t + 16) >> 2] = r
                              o[(r + 24) >> 2] = t
                            }
                            n = o[(n + 4) >> 2] | 0
                            if (!n) break
                            o[(t + 20) >> 2] = n
                            o[(n + 24) >> 2] = t
                          }
                        } while (0)
                        e = (e + s) | 0
                        i = (s + c) | 0
                      } else i = c
                      e = (e + 4) | 0
                      o[e >> 2] = o[e >> 2] & -2
                      o[(f + 4) >> 2] = i | 1
                      o[(f + i) >> 2] = i
                      e = i >>> 3
                      if (i >>> 0 < 256) {
                        n = (1864 + ((e << 1) << 2)) | 0
                        t = o[456] | 0
                        e = 1 << e
                        if (!(t & e)) {
                          o[456] = t | e
                          e = n
                          t = (n + 8) | 0
                        } else {
                          t = (n + 8) | 0
                          e = o[t >> 2] | 0
                        }
                        o[t >> 2] = f
                        o[(e + 12) >> 2] = f
                        o[(f + 8) >> 2] = e
                        o[(f + 12) >> 2] = n
                        break
                      }
                      e = i >>> 8
                      do {
                        if (!e) r = 0
                        else {
                          if (i >>> 0 > 16777215) {
                            r = 31
                            break
                          }
                          A = (((e + 1048320) | 0) >>> 16) & 8
                          b = e << A
                          _ = (((b + 520192) | 0) >>> 16) & 4
                          b = b << _
                          r = (((b + 245760) | 0) >>> 16) & 2
                          r = (14 - (_ | A | r) + ((b << r) >>> 15)) | 0
                          r = ((i >>> ((r + 7) | 0)) & 1) | (r << 1)
                        }
                      } while (0)
                      e = (2128 + (r << 2)) | 0
                      o[(f + 28) >> 2] = r
                      t = (f + 16) | 0
                      o[(t + 4) >> 2] = 0
                      o[t >> 2] = 0
                      t = o[457] | 0
                      n = 1 << r
                      if (!(t & n)) {
                        o[457] = t | n
                        o[e >> 2] = f
                        o[(f + 24) >> 2] = e
                        o[(f + 12) >> 2] = f
                        o[(f + 8) >> 2] = f
                        break
                      }
                      e = o[e >> 2] | 0
                      n: do {
                        if (((o[(e + 4) >> 2] & -8) | 0) != (i | 0)) {
                          r = i << ((r | 0) == 31 ? 0 : (25 - (r >>> 1)) | 0)
                          while (1) {
                            n = (e + 16 + ((r >>> 31) << 2)) | 0
                            t = o[n >> 2] | 0
                            if (!t) break
                            if (((o[(t + 4) >> 2] & -8) | 0) == (i | 0)) {
                              e = t
                              break n
                            } else {
                              r = r << 1
                              e = t
                            }
                          }
                          o[n >> 2] = f
                          o[(f + 24) >> 2] = e
                          o[(f + 12) >> 2] = f
                          o[(f + 8) >> 2] = f
                          break e
                        }
                      } while (0)
                      A = (e + 8) | 0
                      b = o[A >> 2] | 0
                      o[(b + 12) >> 2] = f
                      o[A >> 2] = f
                      o[(f + 8) >> 2] = b
                      o[(f + 12) >> 2] = e
                      o[(f + 24) >> 2] = 0
                    }
                  } while (0)
                  b = (l + 8) | 0
                  p = m
                  return b | 0
                }
                e = 2272
                while (1) {
                  t = o[e >> 2] | 0
                  if (t >>> 0 <= u >>> 0 ? ((b = (t + (o[(e + 4) >> 2] | 0)) | 0), b >>> 0 > u >>> 0) : 0) break
                  e = o[(e + 8) >> 2] | 0
                }
                i = (b + -47) | 0
                t = (i + 8) | 0
                t = (i + (((t & 7) | 0) == 0 ? 0 : (0 - t) & 7)) | 0
                i = (u + 16) | 0
                t = t >>> 0 < i >>> 0 ? u : t
                e = (t + 8) | 0
                n = (s + -40) | 0
                _ = (a + 8) | 0
                _ = ((_ & 7) | 0) == 0 ? 0 : (0 - _) & 7
                A = (a + _) | 0
                _ = (n - _) | 0
                o[462] = A
                o[459] = _
                o[(A + 4) >> 2] = _ | 1
                o[(a + n + 4) >> 2] = 40
                o[463] = o[578]
                n = (t + 4) | 0
                o[n >> 2] = 27
                o[e >> 2] = o[568]
                o[(e + 4) >> 2] = o[569]
                o[(e + 8) >> 2] = o[570]
                o[(e + 12) >> 2] = o[571]
                o[568] = a
                o[569] = s
                o[571] = 0
                o[570] = e
                e = (t + 24) | 0
                do {
                  A = e
                  e = (e + 4) | 0
                  o[e >> 2] = 7
                } while (((A + 8) | 0) >>> 0 < b >>> 0)
                if ((t | 0) != (u | 0)) {
                  a = (t - u) | 0
                  o[n >> 2] = o[n >> 2] & -2
                  o[(u + 4) >> 2] = a | 1
                  o[t >> 2] = a
                  e = a >>> 3
                  if (a >>> 0 < 256) {
                    n = (1864 + ((e << 1) << 2)) | 0
                    t = o[456] | 0
                    e = 1 << e
                    if (!(t & e)) {
                      o[456] = t | e
                      e = n
                      t = (n + 8) | 0
                    } else {
                      t = (n + 8) | 0
                      e = o[t >> 2] | 0
                    }
                    o[t >> 2] = u
                    o[(e + 12) >> 2] = u
                    o[(u + 8) >> 2] = e
                    o[(u + 12) >> 2] = n
                    break
                  }
                  e = a >>> 8
                  if (e) {
                    if (a >>> 0 > 16777215) r = 31
                    else {
                      A = (((e + 1048320) | 0) >>> 16) & 8
                      b = e << A
                      _ = (((b + 520192) | 0) >>> 16) & 4
                      b = b << _
                      r = (((b + 245760) | 0) >>> 16) & 2
                      r = (14 - (_ | A | r) + ((b << r) >>> 15)) | 0
                      r = ((a >>> ((r + 7) | 0)) & 1) | (r << 1)
                    }
                  } else r = 0
                  n = (2128 + (r << 2)) | 0
                  o[(u + 28) >> 2] = r
                  o[(u + 20) >> 2] = 0
                  o[i >> 2] = 0
                  e = o[457] | 0
                  t = 1 << r
                  if (!(e & t)) {
                    o[457] = e | t
                    o[n >> 2] = u
                    o[(u + 24) >> 2] = n
                    o[(u + 12) >> 2] = u
                    o[(u + 8) >> 2] = u
                    break
                  }
                  e = o[n >> 2] | 0
                  e: do {
                    if (((o[(e + 4) >> 2] & -8) | 0) != (a | 0)) {
                      r = a << ((r | 0) == 31 ? 0 : (25 - (r >>> 1)) | 0)
                      while (1) {
                        n = (e + 16 + ((r >>> 31) << 2)) | 0
                        t = o[n >> 2] | 0
                        if (!t) break
                        if (((o[(t + 4) >> 2] & -8) | 0) == (a | 0)) {
                          e = t
                          break e
                        } else {
                          r = r << 1
                          e = t
                        }
                      }
                      o[n >> 2] = u
                      o[(u + 24) >> 2] = e
                      o[(u + 12) >> 2] = u
                      o[(u + 8) >> 2] = u
                      break t
                    }
                  } while (0)
                  A = (e + 8) | 0
                  b = o[A >> 2] | 0
                  o[(b + 12) >> 2] = u
                  o[A >> 2] = u
                  o[(u + 8) >> 2] = b
                  o[(u + 12) >> 2] = e
                  o[(u + 24) >> 2] = 0
                }
              } else {
                b = o[460] | 0
                if (((b | 0) == 0) | (a >>> 0 < b >>> 0)) o[460] = a
                o[568] = a
                o[569] = s
                o[571] = 0
                o[465] = o[574]
                o[464] = -1
                o[469] = 1864
                o[468] = 1864
                o[471] = 1872
                o[470] = 1872
                o[473] = 1880
                o[472] = 1880
                o[475] = 1888
                o[474] = 1888
                o[477] = 1896
                o[476] = 1896
                o[479] = 1904
                o[478] = 1904
                o[481] = 1912
                o[480] = 1912
                o[483] = 1920
                o[482] = 1920
                o[485] = 1928
                o[484] = 1928
                o[487] = 1936
                o[486] = 1936
                o[489] = 1944
                o[488] = 1944
                o[491] = 1952
                o[490] = 1952
                o[493] = 1960
                o[492] = 1960
                o[495] = 1968
                o[494] = 1968
                o[497] = 1976
                o[496] = 1976
                o[499] = 1984
                o[498] = 1984
                o[501] = 1992
                o[500] = 1992
                o[503] = 2e3
                o[502] = 2e3
                o[505] = 2008
                o[504] = 2008
                o[507] = 2016
                o[506] = 2016
                o[509] = 2024
                o[508] = 2024
                o[511] = 2032
                o[510] = 2032
                o[513] = 2040
                o[512] = 2040
                o[515] = 2048
                o[514] = 2048
                o[517] = 2056
                o[516] = 2056
                o[519] = 2064
                o[518] = 2064
                o[521] = 2072
                o[520] = 2072
                o[523] = 2080
                o[522] = 2080
                o[525] = 2088
                o[524] = 2088
                o[527] = 2096
                o[526] = 2096
                o[529] = 2104
                o[528] = 2104
                o[531] = 2112
                o[530] = 2112
                b = (s + -40) | 0
                _ = (a + 8) | 0
                _ = ((_ & 7) | 0) == 0 ? 0 : (0 - _) & 7
                A = (a + _) | 0
                _ = (b - _) | 0
                o[462] = A
                o[459] = _
                o[(A + 4) >> 2] = _ | 1
                o[(a + b + 4) >> 2] = 40
                o[463] = o[578]
              }
            } while (0)
            e = o[459] | 0
            if (e >>> 0 > h >>> 0) {
              _ = (e - h) | 0
              o[459] = _
              b = o[462] | 0
              A = (b + h) | 0
              o[462] = A
              o[(A + 4) >> 2] = _ | 1
              o[(b + 4) >> 2] = h | 3
              b = (b + 8) | 0
              p = m
              return b | 0
            }
          }
          o[(gt() | 0) >> 2] = 12
          b = 0
          p = m
          return b | 0
        }
        function lt(t) {
          t = t | 0
          var e = 0,
            n = 0,
            r = 0,
            i = 0,
            a = 0,
            s = 0,
            c = 0,
            u = 0
          if (!t) return
          n = (t + -8) | 0
          i = o[460] | 0
          t = o[(t + -4) >> 2] | 0
          e = t & -8
          u = (n + e) | 0
          do {
            if (!(t & 1)) {
              r = o[n >> 2] | 0
              if (!(t & 3)) return
              s = (n + (0 - r)) | 0
              a = (r + e) | 0
              if (s >>> 0 < i >>> 0) return
              if ((o[461] | 0) == (s | 0)) {
                t = (u + 4) | 0
                e = o[t >> 2] | 0
                if (((e & 3) | 0) != 3) {
                  c = s
                  e = a
                  break
                }
                o[458] = a
                o[t >> 2] = e & -2
                o[(s + 4) >> 2] = a | 1
                o[(s + a) >> 2] = a
                return
              }
              n = r >>> 3
              if (r >>> 0 < 256) {
                t = o[(s + 8) >> 2] | 0
                e = o[(s + 12) >> 2] | 0
                if ((e | 0) == (t | 0)) {
                  o[456] = o[456] & ~(1 << n)
                  c = s
                  e = a
                  break
                } else {
                  o[(t + 12) >> 2] = e
                  o[(e + 8) >> 2] = t
                  c = s
                  e = a
                  break
                }
              }
              i = o[(s + 24) >> 2] | 0
              t = o[(s + 12) >> 2] | 0
              do {
                if ((t | 0) == (s | 0)) {
                  e = (s + 16) | 0
                  n = (e + 4) | 0
                  t = o[n >> 2] | 0
                  if (!t) {
                    t = o[e >> 2] | 0
                    if (!t) {
                      t = 0
                      break
                    }
                  } else e = n
                  while (1) {
                    r = (t + 20) | 0
                    n = o[r >> 2] | 0
                    if (!n) {
                      r = (t + 16) | 0
                      n = o[r >> 2] | 0
                      if (!n) break
                      else {
                        t = n
                        e = r
                      }
                    } else {
                      t = n
                      e = r
                    }
                  }
                  o[e >> 2] = 0
                } else {
                  c = o[(s + 8) >> 2] | 0
                  o[(c + 12) >> 2] = t
                  o[(t + 8) >> 2] = c
                }
              } while (0)
              if (i) {
                e = o[(s + 28) >> 2] | 0
                n = (2128 + (e << 2)) | 0
                if ((o[n >> 2] | 0) == (s | 0)) {
                  o[n >> 2] = t
                  if (!t) {
                    o[457] = o[457] & ~(1 << e)
                    c = s
                    e = a
                    break
                  }
                } else {
                  c = (i + 16) | 0
                  o[((o[c >> 2] | 0) == (s | 0) ? c : (i + 20) | 0) >> 2] = t
                  if (!t) {
                    c = s
                    e = a
                    break
                  }
                }
                o[(t + 24) >> 2] = i
                e = (s + 16) | 0
                n = o[e >> 2] | 0
                if (n | 0) {
                  o[(t + 16) >> 2] = n
                  o[(n + 24) >> 2] = t
                }
                e = o[(e + 4) >> 2] | 0
                if (e) {
                  o[(t + 20) >> 2] = e
                  o[(e + 24) >> 2] = t
                  c = s
                  e = a
                } else {
                  c = s
                  e = a
                }
              } else {
                c = s
                e = a
              }
            } else {
              c = n
              s = n
            }
          } while (0)
          if (s >>> 0 >= u >>> 0) return
          t = (u + 4) | 0
          r = o[t >> 2] | 0
          if (!(r & 1)) return
          if (!(r & 2)) {
            if ((o[462] | 0) == (u | 0)) {
              u = ((o[459] | 0) + e) | 0
              o[459] = u
              o[462] = c
              o[(c + 4) >> 2] = u | 1
              if ((c | 0) != (o[461] | 0)) return
              o[461] = 0
              o[458] = 0
              return
            }
            if ((o[461] | 0) == (u | 0)) {
              u = ((o[458] | 0) + e) | 0
              o[458] = u
              o[461] = s
              o[(c + 4) >> 2] = u | 1
              o[(s + u) >> 2] = u
              return
            }
            i = ((r & -8) + e) | 0
            n = r >>> 3
            do {
              if (r >>> 0 < 256) {
                e = o[(u + 8) >> 2] | 0
                t = o[(u + 12) >> 2] | 0
                if ((t | 0) == (e | 0)) {
                  o[456] = o[456] & ~(1 << n)
                  break
                } else {
                  o[(e + 12) >> 2] = t
                  o[(t + 8) >> 2] = e
                  break
                }
              } else {
                a = o[(u + 24) >> 2] | 0
                t = o[(u + 12) >> 2] | 0
                do {
                  if ((t | 0) == (u | 0)) {
                    e = (u + 16) | 0
                    n = (e + 4) | 0
                    t = o[n >> 2] | 0
                    if (!t) {
                      t = o[e >> 2] | 0
                      if (!t) {
                        n = 0
                        break
                      }
                    } else e = n
                    while (1) {
                      r = (t + 20) | 0
                      n = o[r >> 2] | 0
                      if (!n) {
                        r = (t + 16) | 0
                        n = o[r >> 2] | 0
                        if (!n) break
                        else {
                          t = n
                          e = r
                        }
                      } else {
                        t = n
                        e = r
                      }
                    }
                    o[e >> 2] = 0
                    n = t
                  } else {
                    n = o[(u + 8) >> 2] | 0
                    o[(n + 12) >> 2] = t
                    o[(t + 8) >> 2] = n
                    n = t
                  }
                } while (0)
                if (a | 0) {
                  t = o[(u + 28) >> 2] | 0
                  e = (2128 + (t << 2)) | 0
                  if ((o[e >> 2] | 0) == (u | 0)) {
                    o[e >> 2] = n
                    if (!n) {
                      o[457] = o[457] & ~(1 << t)
                      break
                    }
                  } else {
                    r = (a + 16) | 0
                    o[((o[r >> 2] | 0) == (u | 0) ? r : (a + 20) | 0) >> 2] = n
                    if (!n) break
                  }
                  o[(n + 24) >> 2] = a
                  t = (u + 16) | 0
                  e = o[t >> 2] | 0
                  if (e | 0) {
                    o[(n + 16) >> 2] = e
                    o[(e + 24) >> 2] = n
                  }
                  t = o[(t + 4) >> 2] | 0
                  if (t | 0) {
                    o[(n + 20) >> 2] = t
                    o[(t + 24) >> 2] = n
                  }
                }
              }
            } while (0)
            o[(c + 4) >> 2] = i | 1
            o[(s + i) >> 2] = i
            if ((c | 0) == (o[461] | 0)) {
              o[458] = i
              return
            }
          } else {
            o[t >> 2] = r & -2
            o[(c + 4) >> 2] = e | 1
            o[(s + e) >> 2] = e
            i = e
          }
          t = i >>> 3
          if (i >>> 0 < 256) {
            n = (1864 + ((t << 1) << 2)) | 0
            e = o[456] | 0
            t = 1 << t
            if (!(e & t)) {
              o[456] = e | t
              t = n
              e = (n + 8) | 0
            } else {
              e = (n + 8) | 0
              t = o[e >> 2] | 0
            }
            o[e >> 2] = c
            o[(t + 12) >> 2] = c
            o[(c + 8) >> 2] = t
            o[(c + 12) >> 2] = n
            return
          }
          t = i >>> 8
          if (t) {
            if (i >>> 0 > 16777215) r = 31
            else {
              s = (((t + 1048320) | 0) >>> 16) & 8
              u = t << s
              a = (((u + 520192) | 0) >>> 16) & 4
              u = u << a
              r = (((u + 245760) | 0) >>> 16) & 2
              r = (14 - (a | s | r) + ((u << r) >>> 15)) | 0
              r = ((i >>> ((r + 7) | 0)) & 1) | (r << 1)
            }
          } else r = 0
          t = (2128 + (r << 2)) | 0
          o[(c + 28) >> 2] = r
          o[(c + 20) >> 2] = 0
          o[(c + 16) >> 2] = 0
          e = o[457] | 0
          n = 1 << r
          t: do {
            if (!(e & n)) {
              o[457] = e | n
              o[t >> 2] = c
              o[(c + 24) >> 2] = t
              o[(c + 12) >> 2] = c
              o[(c + 8) >> 2] = c
            } else {
              t = o[t >> 2] | 0
              e: do {
                if (((o[(t + 4) >> 2] & -8) | 0) != (i | 0)) {
                  r = i << ((r | 0) == 31 ? 0 : (25 - (r >>> 1)) | 0)
                  while (1) {
                    n = (t + 16 + ((r >>> 31) << 2)) | 0
                    e = o[n >> 2] | 0
                    if (!e) break
                    if (((o[(e + 4) >> 2] & -8) | 0) == (i | 0)) {
                      t = e
                      break e
                    } else {
                      r = r << 1
                      t = e
                    }
                  }
                  o[n >> 2] = c
                  o[(c + 24) >> 2] = t
                  o[(c + 12) >> 2] = c
                  o[(c + 8) >> 2] = c
                  break t
                }
              } while (0)
              s = (t + 8) | 0
              u = o[s >> 2] | 0
              o[(u + 12) >> 2] = c
              o[s >> 2] = c
              o[(c + 8) >> 2] = u
              o[(c + 12) >> 2] = t
              o[(c + 24) >> 2] = 0
            }
          } while (0)
          u = ((o[464] | 0) + -1) | 0
          o[464] = u
          if (u | 0) return
          t = 2280
          while (1) {
            t = o[t >> 2] | 0
            if (!t) break
            else t = (t + 8) | 0
          }
          o[464] = -1
          return
        }
        function ht(t) {
          t = t | 0
          var e = 0,
            n = 0
          e = p
          p = (p + 16) | 0
          if ((p | 0) >= (d | 0)) z(16)
          n = e
          o[n >> 2] = vt(o[(t + 60) >> 2] | 0) | 0
          t = yt(J(6, n | 0) | 0) | 0
          p = e
          return t | 0
        }
        function pt(t, e, n) {
          t = t | 0
          e = e | 0
          n = n | 0
          var r = 0,
            i = 0,
            a = 0,
            s = 0,
            c = 0,
            u = 0,
            f = 0,
            l = 0,
            h = 0,
            y = 0,
            g = 0
          h = p
          p = (p + 48) | 0
          if ((p | 0) >= (d | 0)) z(48)
          f = (h + 32) | 0
          a = (h + 16) | 0
          i = h
          c = (t + 28) | 0
          r = o[c >> 2] | 0
          o[i >> 2] = r
          u = (t + 20) | 0
          r = ((o[u >> 2] | 0) - r) | 0
          o[(i + 4) >> 2] = r
          o[(i + 8) >> 2] = e
          o[(i + 12) >> 2] = n
          r = (r + n) | 0
          s = (t + 60) | 0
          o[a >> 2] = o[s >> 2]
          o[(a + 4) >> 2] = i
          o[(a + 8) >> 2] = 2
          a = yt(Y(146, a | 0) | 0) | 0
          t: do {
            if ((r | 0) != (a | 0)) {
              e = 2
              while (1) {
                if ((a | 0) < 0) break
                r = (r - a) | 0
                g = o[(i + 4) >> 2] | 0
                y = a >>> 0 > g >>> 0
                i = y ? (i + 8) | 0 : i
                e = (e + ((y << 31) >> 31)) | 0
                g = (a - (y ? g : 0)) | 0
                o[i >> 2] = (o[i >> 2] | 0) + g
                y = (i + 4) | 0
                o[y >> 2] = (o[y >> 2] | 0) - g
                o[f >> 2] = o[s >> 2]
                o[(f + 4) >> 2] = i
                o[(f + 8) >> 2] = e
                a = yt(Y(146, f | 0) | 0) | 0
                if ((r | 0) == (a | 0)) {
                  l = 3
                  break t
                }
              }
              o[(t + 16) >> 2] = 0
              o[c >> 2] = 0
              o[u >> 2] = 0
              o[t >> 2] = o[t >> 2] | 32
              if ((e | 0) == 2) n = 0
              else n = (n - (o[(i + 4) >> 2] | 0)) | 0
            } else l = 3
          } while (0)
          if ((l | 0) == 3) {
            g = o[(t + 44) >> 2] | 0
            o[(t + 16) >> 2] = g + (o[(t + 48) >> 2] | 0)
            o[c >> 2] = g
            o[u >> 2] = g
          }
          p = h
          return n | 0
        }
        function dt(t, e, n) {
          t = t | 0
          e = e | 0
          n = n | 0
          var r = 0,
            i = 0,
            a = 0
          i = p
          p = (p + 32) | 0
          if ((p | 0) >= (d | 0)) z(32)
          a = i
          r = (i + 20) | 0
          o[a >> 2] = o[(t + 60) >> 2]
          o[(a + 4) >> 2] = 0
          o[(a + 8) >> 2] = e
          o[(a + 12) >> 2] = r
          o[(a + 16) >> 2] = n
          if ((yt(K(140, a | 0) | 0) | 0) < 0) {
            o[r >> 2] = -1
            t = -1
          } else t = o[r >> 2] | 0
          p = i
          return t | 0
        }
        function yt(t) {
          t = t | 0
          if (t >>> 0 > 4294963200) {
            o[(gt() | 0) >> 2] = 0 - t
            t = -1
          }
          return t | 0
        }
        function gt() {
          return 2320
        }
        function vt(t) {
          t = t | 0
          return t | 0
        }
        function Et(t, e, n) {
          t = t | 0
          e = e | 0
          n = n | 0
          var i = 0,
            a = 0
          a = p
          p = (p + 32) | 0
          if ((p | 0) >= (d | 0)) z(32)
          i = a
          o[(t + 36) >> 2] = 3
          if (
            ((o[t >> 2] & 64) | 0) == 0
              ? ((o[i >> 2] = o[(t + 60) >> 2]),
                (o[(i + 4) >> 2] = 21523),
                (o[(i + 8) >> 2] = a + 16),
                q(54, i | 0) | 0)
              : 0
          )
            r[(t + 75) >> 0] = -1
          i = pt(t, e, n) | 0
          p = a
          return i | 0
        }
        function wt() {
          Q(2324)
          return 2332
        }
        function Tt() {
          $(2324)
          return
        }
        function _t(t) {
          t = t | 0
          var e = 0
          do {
            if (t) {
              if ((o[(t + 76) >> 2] | 0) <= -1) {
                e = At(t) | 0
                break
              }
              e = At(t) | 0
            } else {
              if (!(o[195] | 0)) e = 0
              else e = _t(o[195] | 0) | 0
              t = o[(wt() | 0) >> 2] | 0
              if (t)
                do {
                  if ((o[(t + 20) >> 2] | 0) >>> 0 > (o[(t + 28) >> 2] | 0) >>> 0) e = At(t) | 0 | e
                  t = o[(t + 56) >> 2] | 0
                } while ((t | 0) != 0)
              Tt()
            }
          } while (0)
          return e | 0
        }
        function At(t) {
          t = t | 0
          var e = 0,
            n = 0,
            r = 0,
            i = 0,
            a = 0,
            s = 0
          e = (t + 20) | 0
          s = (t + 28) | 0
          if (
            (o[e >> 2] | 0) >>> 0 > (o[s >> 2] | 0) >>> 0
              ? (Ct[o[(t + 36) >> 2] & 3](t, 0, 0) | 0, (o[e >> 2] | 0) == 0)
              : 0
          )
            t = -1
          else {
            n = (t + 4) | 0
            r = o[n >> 2] | 0
            i = (t + 8) | 0
            a = o[i >> 2] | 0
            if (r >>> 0 < a >>> 0) Ct[o[(t + 40) >> 2] & 3](t, (r - a) | 0, 1) | 0
            o[(t + 16) >> 2] = 0
            o[s >> 2] = 0
            o[e >> 2] = 0
            o[i >> 2] = 0
            o[n >> 2] = 0
            t = 0
          }
          return t | 0
        }
        function bt(t) {
          t = t | 0
          return mt(t) | 0
        }
        function mt(t) {
          t = t | 0
          return Rt(t | 0) | 0
        }
        function St() {}
        function Rt(t) {
          t = t | 0
          return ((t & 255) << 24) | (((t >> 8) & 255) << 16) | (((t >> 16) & 255) << 8) | (t >>> 24) | 0
        }
        function kt(t, e, n) {
          t = t | 0
          e = e | 0
          n = n | 0
          var i = 0,
            a = 0,
            s = 0
          if ((n | 0) >= 8192) return Z(t | 0, e | 0, n | 0) | 0
          s = t | 0
          a = (t + n) | 0
          if ((t & 3) == (e & 3)) {
            while (t & 3) {
              if (!n) return s | 0
              r[t >> 0] = r[e >> 0] | 0
              t = (t + 1) | 0
              e = (e + 1) | 0
              n = (n - 1) | 0
            }
            n = (a & -4) | 0
            i = (n - 64) | 0
            while ((t | 0) <= (i | 0)) {
              o[t >> 2] = o[e >> 2]
              o[(t + 4) >> 2] = o[(e + 4) >> 2]
              o[(t + 8) >> 2] = o[(e + 8) >> 2]
              o[(t + 12) >> 2] = o[(e + 12) >> 2]
              o[(t + 16) >> 2] = o[(e + 16) >> 2]
              o[(t + 20) >> 2] = o[(e + 20) >> 2]
              o[(t + 24) >> 2] = o[(e + 24) >> 2]
              o[(t + 28) >> 2] = o[(e + 28) >> 2]
              o[(t + 32) >> 2] = o[(e + 32) >> 2]
              o[(t + 36) >> 2] = o[(e + 36) >> 2]
              o[(t + 40) >> 2] = o[(e + 40) >> 2]
              o[(t + 44) >> 2] = o[(e + 44) >> 2]
              o[(t + 48) >> 2] = o[(e + 48) >> 2]
              o[(t + 52) >> 2] = o[(e + 52) >> 2]
              o[(t + 56) >> 2] = o[(e + 56) >> 2]
              o[(t + 60) >> 2] = o[(e + 60) >> 2]
              t = (t + 64) | 0
              e = (e + 64) | 0
            }
            while ((t | 0) < (n | 0)) {
              o[t >> 2] = o[e >> 2]
              t = (t + 4) | 0
              e = (e + 4) | 0
            }
          } else {
            n = (a - 4) | 0
            while ((t | 0) < (n | 0)) {
              r[t >> 0] = r[e >> 0] | 0
              r[(t + 1) >> 0] = r[(e + 1) >> 0] | 0
              r[(t + 2) >> 0] = r[(e + 2) >> 0] | 0
              r[(t + 3) >> 0] = r[(e + 3) >> 0] | 0
              t = (t + 4) | 0
              e = (e + 4) | 0
            }
          }
          while ((t | 0) < (a | 0)) {
            r[t >> 0] = r[e >> 0] | 0
            t = (t + 1) | 0
            e = (e + 1) | 0
          }
          return s | 0
        }
        function Mt(t, e, n) {
          t = t | 0
          e = e | 0
          n = n | 0
          var i = 0
          if (((e | 0) < (t | 0)) & ((t | 0) < ((e + n) | 0))) {
            i = t
            e = (e + n) | 0
            t = (t + n) | 0
            while ((n | 0) > 0) {
              t = (t - 1) | 0
              e = (e - 1) | 0
              n = (n - 1) | 0
              r[t >> 0] = r[e >> 0] | 0
            }
            t = i
          } else kt(t, e, n) | 0
          return t | 0
        }
        function It(t, e, n) {
          t = t | 0
          e = e | 0
          n = n | 0
          var i = 0,
            a = 0,
            s = 0,
            c = 0
          s = (t + n) | 0
          e = e & 255
          if ((n | 0) >= 67) {
            while (t & 3) {
              r[t >> 0] = e
              t = (t + 1) | 0
            }
            i = (s & -4) | 0
            a = (i - 64) | 0
            c = e | (e << 8) | (e << 16) | (e << 24)
            while ((t | 0) <= (a | 0)) {
              o[t >> 2] = c
              o[(t + 4) >> 2] = c
              o[(t + 8) >> 2] = c
              o[(t + 12) >> 2] = c
              o[(t + 16) >> 2] = c
              o[(t + 20) >> 2] = c
              o[(t + 24) >> 2] = c
              o[(t + 28) >> 2] = c
              o[(t + 32) >> 2] = c
              o[(t + 36) >> 2] = c
              o[(t + 40) >> 2] = c
              o[(t + 44) >> 2] = c
              o[(t + 48) >> 2] = c
              o[(t + 52) >> 2] = c
              o[(t + 56) >> 2] = c
              o[(t + 60) >> 2] = c
              t = (t + 64) | 0
            }
            while ((t | 0) < (i | 0)) {
              o[t >> 2] = c
              t = (t + 4) | 0
            }
          }
          while ((t | 0) < (s | 0)) {
            r[t >> 0] = e
            t = (t + 1) | 0
          }
          return (s - n) | 0
        }
        function Ot(t) {
          t = t | 0
          var e = 0,
            n = 0
          n = o[l >> 2] | 0
          e = (n + t) | 0
          if ((((t | 0) > 0) & ((e | 0) < (n | 0))) | ((e | 0) < 0)) {
            X() | 0
            G(12)
            return -1
          }
          o[l >> 2] = e
          if ((e | 0) > (B() | 0) ? (x() | 0) == 0 : 0) {
            o[l >> 2] = n
            G(12)
            return -1
          }
          return n | 0
        }
        function Pt(t, e) {
          t = t | 0
          e = e | 0
          return Ft[t & 1](e | 0) | 0
        }
        function Nt(t, e, n, r) {
          t = t | 0
          e = e | 0
          n = n | 0
          r = r | 0
          return Ct[t & 3](e | 0, n | 0, r | 0) | 0
        }
        function Ut(t) {
          t = t | 0
          V(0)
          return 0
        }
        function Dt(t, e, n) {
          t = t | 0
          e = e | 0
          n = n | 0
          H(1)
          return 0
        }
        var Ft = [Ut, ht]
        var Ct = [Dt, Et, dt, pt]
        return {
          _Encrypt: ut,
          _Process: ct,
          ___errno_location: gt,
          _fflush: _t,
          _free: lt,
          _llvm_bswap_i32: Rt,
          _malloc: ft,
          _memcpy: kt,
          _memmove: Mt,
          _memset: It,
          _sbrk: Ot,
          dynCall_ii: Pt,
          dynCall_iiii: Nt,
          establishStackSpace: it,
          getTempRet0: st,
          runPostSets: St,
          setTempRet0: at,
          setThrew: ot,
          stackAlloc: et,
          stackRestore: rt,
          stackSave: nt
        }
      })(t.asmGlobalArg, t.asmLibraryArg, _),
      st = at._Encrypt
    at._Encrypt = function () {
      return (
        y(W, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)'),
        y(!0, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)'),
        st.apply(null, arguments)
      )
    }
    var ct = at._Process
    at._Process = function () {
      return (
        y(W, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)'),
        y(!0, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)'),
        ct.apply(null, arguments)
      )
    }
    var ut = at.___errno_location
    at.___errno_location = function () {
      return (
        y(W, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)'),
        y(!0, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)'),
        ut.apply(null, arguments)
      )
    }
    var ft = at._fflush
    at._fflush = function () {
      return (
        y(W, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)'),
        y(!0, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)'),
        ft.apply(null, arguments)
      )
    }
    var lt = at._free
    at._free = function () {
      return (
        y(W, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)'),
        y(!0, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)'),
        lt.apply(null, arguments)
      )
    }
    var ht = at._llvm_bswap_i32
    at._llvm_bswap_i32 = function () {
      return (
        y(W, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)'),
        y(!0, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)'),
        ht.apply(null, arguments)
      )
    }
    var pt = at._malloc
    at._malloc = function () {
      return (
        y(W, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)'),
        y(!0, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)'),
        pt.apply(null, arguments)
      )
    }
    var dt = at._memmove
    at._memmove = function () {
      return (
        y(W, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)'),
        y(!0, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)'),
        dt.apply(null, arguments)
      )
    }
    var yt = at._sbrk
    at._sbrk = function () {
      return (
        y(W, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)'),
        y(!0, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)'),
        yt.apply(null, arguments)
      )
    }
    var gt = at.establishStackSpace
    at.establishStackSpace = function () {
      return (
        y(W, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)'),
        y(!0, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)'),
        gt.apply(null, arguments)
      )
    }
    var vt = at.getTempRet0
    at.getTempRet0 = function () {
      return (
        y(W, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)'),
        y(!0, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)'),
        vt.apply(null, arguments)
      )
    }
    var Et = at.setTempRet0
    at.setTempRet0 = function () {
      return (
        y(W, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)'),
        y(!0, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)'),
        Et.apply(null, arguments)
      )
    }
    var wt = at.setThrew
    at.setThrew = function () {
      return (
        y(W, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)'),
        y(!0, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)'),
        wt.apply(null, arguments)
      )
    }
    var Tt = at.stackAlloc
    at.stackAlloc = function () {
      return (
        y(W, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)'),
        y(!0, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)'),
        Tt.apply(null, arguments)
      )
    }
    var _t = at.stackRestore
    at.stackRestore = function () {
      return (
        y(W, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)'),
        y(!0, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)'),
        _t.apply(null, arguments)
      )
    }
    var At = at.stackSave
    at.stackSave = function () {
      return (
        y(W, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)'),
        y(!0, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)'),
        At.apply(null, arguments)
      )
    }
    ;(t._Encrypt = at._Encrypt),
      (t._Process = at._Process),
      (t.___errno_location = at.___errno_location),
      (t._fflush = at._fflush),
      (t._free = at._free),
      (t._llvm_bswap_i32 = at._llvm_bswap_i32),
      (t._malloc = at._malloc),
      (t._memcpy = at._memcpy),
      (t._memmove = at._memmove),
      (t._memset = at._memset),
      (t._sbrk = at._sbrk),
      (t.establishStackSpace = at.establishStackSpace),
      (t.getTempRet0 = at.getTempRet0),
      (t.runPostSets = at.runPostSets),
      (t.setTempRet0 = at.setTempRet0),
      (t.setThrew = at.setThrew)
    var bt,
      mt,
      St = (t.stackAlloc = at.stackAlloc),
      Rt = (t.stackRestore = at.stackRestore),
      kt = (t.stackSave = at.stackSave)
    ;(t.dynCall_ii = at.dynCall_ii), (t.dynCall_iiii = at.dynCall_iiii)
    if (
      ((t.asm = at),
      t.intArrayFromString ||
        (t.intArrayFromString = function () {
          Ct("'intArrayFromString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }),
      t.intArrayToString ||
        (t.intArrayToString = function () {
          Ct("'intArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }),
      (t.ccall = function (e, n, r, i, o) {
        var a = (function (e) {
            var n = t['_' + e]
            return y(n, 'Cannot call unknown function ' + e + ', make sure it is exported'), n
          })(e),
          s = [],
          c = 0
        if ((y('array' !== n, 'Return type should not be "array".'), i))
          for (var u = 0; u < i.length; u++) {
            var f = v[r[u]]
            f ? (0 === c && (c = kt()), (s[u] = f(i[u]))) : (s[u] = i[u])
          }
        var l = a.apply(null, s)
        return (
          (l = (function (t) {
            return 'string' === n ? E(t) : 'boolean' === n ? Boolean(t) : t
          })(l)),
          0 !== c && Rt(c),
          l
        )
      }),
      t.cwrap ||
        (t.cwrap = function () {
          Ct("'cwrap' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }),
      t.setValue ||
        (t.setValue = function () {
          Ct("'setValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }),
      t.getValue ||
        (t.getValue = function () {
          Ct("'getValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }),
      t.allocate ||
        (t.allocate = function () {
          Ct("'allocate' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }),
      t.getMemory ||
        (t.getMemory = function () {
          Ct(
            "'getMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"
          )
        }),
      t.Pointer_stringify ||
        (t.Pointer_stringify = function () {
          Ct("'Pointer_stringify' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }),
      t.AsciiToString ||
        (t.AsciiToString = function () {
          Ct("'AsciiToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }),
      t.stringToAscii ||
        (t.stringToAscii = function () {
          Ct("'stringToAscii' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }),
      t.UTF8ArrayToString ||
        (t.UTF8ArrayToString = function () {
          Ct("'UTF8ArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }),
      t.UTF8ToString ||
        (t.UTF8ToString = function () {
          Ct("'UTF8ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }),
      t.stringToUTF8Array ||
        (t.stringToUTF8Array = function () {
          Ct("'stringToUTF8Array' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }),
      t.stringToUTF8 ||
        (t.stringToUTF8 = function () {
          Ct("'stringToUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }),
      t.lengthBytesUTF8 ||
        (t.lengthBytesUTF8 = function () {
          Ct("'lengthBytesUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }),
      t.UTF16ToString ||
        (t.UTF16ToString = function () {
          Ct("'UTF16ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }),
      t.stringToUTF16 ||
        (t.stringToUTF16 = function () {
          Ct("'stringToUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }),
      t.lengthBytesUTF16 ||
        (t.lengthBytesUTF16 = function () {
          Ct("'lengthBytesUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }),
      t.UTF32ToString ||
        (t.UTF32ToString = function () {
          Ct("'UTF32ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }),
      t.stringToUTF32 ||
        (t.stringToUTF32 = function () {
          Ct("'stringToUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }),
      t.lengthBytesUTF32 ||
        (t.lengthBytesUTF32 = function () {
          Ct("'lengthBytesUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }),
      t.allocateUTF8 ||
        (t.allocateUTF8 = function () {
          Ct("'allocateUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }),
      t.stackTrace ||
        (t.stackTrace = function () {
          Ct("'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }),
      t.addOnPreRun ||
        (t.addOnPreRun = function () {
          Ct("'addOnPreRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }),
      t.addOnInit ||
        (t.addOnInit = function () {
          Ct("'addOnInit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }),
      t.addOnPreMain ||
        (t.addOnPreMain = function () {
          Ct("'addOnPreMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }),
      t.addOnExit ||
        (t.addOnExit = function () {
          Ct("'addOnExit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }),
      t.addOnPostRun ||
        (t.addOnPostRun = function () {
          Ct("'addOnPostRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }),
      t.writeStringToMemory ||
        (t.writeStringToMemory = function () {
          Ct("'writeStringToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }),
      t.writeArrayToMemory ||
        (t.writeArrayToMemory = function () {
          Ct("'writeArrayToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }),
      t.writeAsciiToMemory ||
        (t.writeAsciiToMemory = function () {
          Ct("'writeAsciiToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }),
      t.addRunDependency ||
        (t.addRunDependency = function () {
          Ct(
            "'addRunDependency' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"
          )
        }),
      t.removeRunDependency ||
        (t.removeRunDependency = function () {
          Ct(
            "'removeRunDependency' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"
          )
        }),
      t.ENV ||
        (t.ENV = function () {
          Ct("'ENV' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }),
      t.FS ||
        (t.FS = function () {
          Ct("'FS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }),
      t.FS_createFolder ||
        (t.FS_createFolder = function () {
          Ct(
            "'FS_createFolder' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"
          )
        }),
      t.FS_createPath ||
        (t.FS_createPath = function () {
          Ct(
            "'FS_createPath' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"
          )
        }),
      t.FS_createDataFile ||
        (t.FS_createDataFile = function () {
          Ct(
            "'FS_createDataFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"
          )
        }),
      t.FS_createPreloadedFile ||
        (t.FS_createPreloadedFile = function () {
          Ct(
            "'FS_createPreloadedFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"
          )
        }),
      t.FS_createLazyFile ||
        (t.FS_createLazyFile = function () {
          Ct(
            "'FS_createLazyFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"
          )
        }),
      t.FS_createLink ||
        (t.FS_createLink = function () {
          Ct(
            "'FS_createLink' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"
          )
        }),
      t.FS_createDevice ||
        (t.FS_createDevice = function () {
          Ct(
            "'FS_createDevice' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"
          )
        }),
      t.FS_unlink ||
        (t.FS_unlink = function () {
          Ct(
            "'FS_unlink' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"
          )
        }),
      t.GL ||
        (t.GL = function () {
          Ct("'GL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }),
      t.staticAlloc ||
        (t.staticAlloc = function () {
          Ct("'staticAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }),
      t.dynamicAlloc ||
        (t.dynamicAlloc = function () {
          Ct("'dynamicAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }),
      t.warnOnce ||
        (t.warnOnce = function () {
          Ct("'warnOnce' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }),
      t.loadDynamicLibrary ||
        (t.loadDynamicLibrary = function () {
          Ct("'loadDynamicLibrary' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }),
      t.loadWebAssemblyModule ||
        (t.loadWebAssemblyModule = function () {
          Ct("'loadWebAssemblyModule' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }),
      t.getLEB ||
        (t.getLEB = function () {
          Ct("'getLEB' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }),
      t.getFunctionTables ||
        (t.getFunctionTables = function () {
          Ct("'getFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }),
      t.alignFunctionTables ||
        (t.alignFunctionTables = function () {
          Ct("'alignFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }),
      t.registerFunctions ||
        (t.registerFunctions = function () {
          Ct("'registerFunctions' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }),
      t.addFunction ||
        (t.addFunction = function () {
          Ct("'addFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }),
      t.removeFunction ||
        (t.removeFunction = function () {
          Ct("'removeFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }),
      t.getFuncWrapper ||
        (t.getFuncWrapper = function () {
          Ct("'getFuncWrapper' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }),
      t.prettyPrint ||
        (t.prettyPrint = function () {
          Ct("'prettyPrint' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }),
      t.makeBigInt ||
        (t.makeBigInt = function () {
          Ct("'makeBigInt' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }),
      t.dynCall ||
        (t.dynCall = function () {
          Ct("'dynCall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }),
      t.getCompilerSetting ||
        (t.getCompilerSetting = function () {
          Ct("'getCompilerSetting' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }),
      t.stackSave ||
        (t.stackSave = function () {
          Ct("'stackSave' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }),
      t.stackRestore ||
        (t.stackRestore = function () {
          Ct("'stackRestore' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }),
      t.stackAlloc ||
        (t.stackAlloc = function () {
          Ct("'stackAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }),
      t.establishStackSpace ||
        (t.establishStackSpace = function () {
          Ct("'establishStackSpace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }),
      t.print ||
        (t.print = function () {
          Ct("'print' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }),
      t.printErr ||
        (t.printErr = function () {
          Ct("'printErr' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }),
      t.intArrayFromBase64 ||
        (t.intArrayFromBase64 = function () {
          Ct("'intArrayFromBase64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }),
      t.tryParseAsDataURI ||
        (t.tryParseAsDataURI = function () {
          Ct("'tryParseAsDataURI' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }),
      t.ALLOC_NORMAL ||
        Object.defineProperty(t, 'ALLOC_NORMAL', {
          get: function () {
            Ct("'ALLOC_NORMAL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
          }
        }),
      t.ALLOC_STACK ||
        Object.defineProperty(t, 'ALLOC_STACK', {
          get: function () {
            Ct("'ALLOC_STACK' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
          }
        }),
      t.ALLOC_STATIC ||
        Object.defineProperty(t, 'ALLOC_STATIC', {
          get: function () {
            Ct("'ALLOC_STATIC' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
          }
        }),
      t.ALLOC_DYNAMIC ||
        Object.defineProperty(t, 'ALLOC_DYNAMIC', {
          get: function () {
            Ct("'ALLOC_DYNAMIC' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
          }
        }),
      t.ALLOC_NONE ||
        Object.defineProperty(t, 'ALLOC_NONE', {
          get: function () {
            Ct("'ALLOC_NONE' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
          }
        }),
      q)
    )
      if ((Z(q) || ((mt = q), (q = t.locateFile ? t.locateFile(mt, u) : u + mt)), a || o)) {
        var Mt = t.readBinary(q)
        b.set(Mt, 8)
      } else {
        var It = function () {
          t.readAsync(q, Ot, function () {
            throw 'could not load memory initializer ' + q
          })
        }
        ;(bt = 'memory initializer'),
          Q++,
          t.monitorRunDependencies && t.monitorRunDependencies(Q),
          bt
            ? (y(!Y[bt]),
              (Y[bt] = 1),
              null === G &&
                'undefined' != typeof setInterval &&
                (G = setInterval(function () {
                  if (d) return clearInterval(G), void (G = null)
                  var t = !1
                  for (var e in Y) t || ((t = !0), l('still waiting on run dependencies:')), l('dependency: ' + e)
                  t && l('(end of list)')
                }, 1e4)))
            : l('warning: run dependency added without ID')
        var Ot = function (e) {
            e.byteLength && (e = new Uint8Array(e))
            for (var n = 0; n < e.length; n++)
              y(0 === b[8 + n], "area for memory initializer should not have been touched before it's loaded")
            b.set(e, 8),
              t.memoryInitializerRequest && delete t.memoryInitializerRequest.response,
              (function (e) {
                if (
                  (Q--,
                  t.monitorRunDependencies && t.monitorRunDependencies(Q),
                  e ? (y(Y[e]), delete Y[e]) : l('warning: run dependency removed without ID'),
                  0 == Q && (null !== G && (clearInterval(G), (G = null)), K))
                ) {
                  var n = K
                  ;(K = null), n()
                }
              })('memory initializer')
          },
          Pt = ot(q)
        if (Pt) Ot(Pt.buffer)
        else if (t.memoryInitializerRequest) {
          var Nt = function () {
            var e = t.memoryInitializerRequest,
              n = e.response
            if (200 !== e.status && 0 !== e.status) {
              var r = ot(t.memoryInitializerRequestURL)
              if (!r)
                return (
                  console.warn(
                    'a problem seems to have happened with Module.memoryInitializerRequest, status: ' +
                      e.status +
                      ', retrying ' +
                      q
                  ),
                  void It()
                )
              n = r.buffer
            }
            Ot(n)
          }
          t.memoryInitializerRequest.response
            ? setTimeout(Nt, 0)
            : t.memoryInitializerRequest.addEventListener('load', Nt)
        } else It()
      }
    function Ut(t) {
      ;(this.name = 'ExitStatus'), (this.message = 'Program terminated with exit(' + t + ')'), (this.status = t)
    }
    function Dt(e) {
      function n() {
        t.calledRun ||
          ((t.calledRun = !0),
          d ||
            (C(),
            W || ((W = !0), X(V)),
            C(),
            X(H),
            t.onRuntimeInitialized && t.onRuntimeInitialized(),
            y(
              !t._main,
              'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'
            ),
            (function () {
              if ((C(), t.postRun))
                for ('function' == typeof t.postRun && (t.postRun = [t.postRun]); t.postRun.length; )
                  (e = t.postRun.shift()), j.unshift(e)
              var e
              X(j)
            })()))
      }
      ;(e = e || t.arguments),
        Q > 0 ||
          (y(0 == (3 & P)),
          (R[(P >> 2) - 1] = 34821223),
          (R[(P >> 2) - 2] = 2310721022),
          (function () {
            if (t.preRun)
              for ('function' == typeof t.preRun && (t.preRun = [t.preRun]); t.preRun.length; )
                (e = t.preRun.shift()), z.unshift(e)
            var e
            X(z)
          })(),
          Q > 0 ||
            t.calledRun ||
            (t.setStatus
              ? (t.setStatus('Running...'),
                setTimeout(function () {
                  setTimeout(function () {
                    t.setStatus('')
                  }, 1),
                    n()
                }, 1))
              : n(),
            C()))
    }
    ;(Ut.prototype = new Error()),
      (Ut.prototype.constructor = Ut),
      (K = function e() {
        t.calledRun || Dt(), t.calledRun || (K = e)
      }),
      (t.run = Dt)
    var Ft = []
    function Ct(e) {
      t.onAbort && t.onAbort(e), void 0 !== e ? (f(e), l(e), (e = JSON.stringify(e))) : (e = ''), (d = !0)
      var n = 'abort(' + e + ') at ' + F()
      throw (
        (Ft &&
          Ft.forEach(function (t) {
            n = t(n, e)
          }),
        n)
      )
    }
    if (((t.abort = Ct), t.preInit))
      for ('function' == typeof t.preInit && (t.preInit = [t.preInit]); t.preInit.length > 0; ) t.preInit.pop()()
    return (t.noExitRuntime = !0), Dt(), t
  })(),
  Bi = (function (t) {
    function e(e) {
      var n = t.call(this) || this
      return (
        (n.encryptList = []),
        e &&
          e.crypto &&
          (e.crypto.encryptList &&
            e.crypto.encryptList instanceof Array &&
            (n.encryptList = n.encryptList.concat(e.crypto.encryptList)),
          (n.socketId = Date.now() % 2147483647),
          (n.broadcastDecryptKey = 0),
          (n.userDecryptKey = 0),
          (n.userEncryptKey = 0),
          (n.jsDecryptKey = new egret.ByteArray(new Uint8Array([90, 191, 82, 114]).buffer))),
        n
      )
    }
    return (
      l(e, t),
      (e.prototype.doSend = function (t) {
        if ((tr(), t)) {
          t.position = 0
          var e = t.readUnsignedInt()
          switch (((t.position = 0), e)) {
            case 73730:
            case 73986:
              return (this.userEncryptKey = new egret.ByteArray(t.buffer.slice(49, 53)).readUnsignedInt()), t
            case 65538:
            case 65794:
            case 69634:
            case 69890:
              return (this.userEncryptKey = new egret.ByteArray(t.buffer.slice(42, 46)).readUnsignedInt()), t
            case 45057:
            case 45056:
              return (this.userEncryptKey = new egret.ByteArray(t.buffer.slice(47, 51)).readUnsignedInt()), t
          }
          if (this.encryptList.indexOf(e) > -1 || (e >= 3718905856 && e <= 3718914047)) {
            var n = t.length,
              r = zi(n + 12),
              i = new Uint8Array(n + 12),
              o = t.bytes || new Uint8Array(t.buffer)
            i.set(o), xi.HEAPU8.set(i, r)
            xi.ccall(
              'Encrypt',
              'number',
              ['number', 'number', 'number', 'number', 'number', 'number', 'number'],
              [this.socketId, r, n, n + 12, this.userEncryptKey, this.userDecryptKey, this.broadcastDecryptKey]
            )
            var a = Xi(r, n + 12).slice(0),
              s = new egret.ByteArray(a)
            return xi._free(r), s
          }
        }
        return t
      }),
      (e.prototype.onPipeEvent = function (t, e, n) {
        t === r && (n.stopPropagation(), this.handleCryptoPacket(e))
      }),
      (e.prototype.handleCryptoPacket = function (t) {
        tr()
        var e = t.packetLength,
          n = zi(e + 4),
          i = t.bytes.bytes || new Uint8Array(t.bytes.buffer)
        xi.HEAPU8.set(i, n)
        var o = xi.ccall(
          'Process',
          'number',
          ['number', 'number', 'number', 'number', 'number', 'number'],
          [this.socketId, n, e, this.userEncryptKey, this.userDecryptKey, this.broadcastDecryptKey]
        )
        switch (o) {
          case Ri:
          case ki:
            var a = Xi(n, e).slice(12 * o),
              s = (function (t, e) {
                var n = new egret.ByteArray()
                ;(t.position = 0), (e.position = 0)
                for (var r = 0; r < t.length; r++) (e.position = r % e.length), n.writeByte(t.readByte() ^ e.readByte())
                return (n.position = 0), n
              })(new egret.ByteArray(a), this.jsDecryptKey),
              c = new _(s.readUnsignedInt(), s)
            this.pipeEvent(r, c)
            break
          case Mi:
            var u = Xi(n, 20).slice(0, 16),
              f = Xi(n, 20).slice(16, 20),
              l = new egret.ByteArray(u)
            ;(this.userEncryptKey = new egret.ByteArray(f).readUnsignedInt()), this.socket.writeBytes(l)
            break
          case Ii:
            var h = Xi(n, 4)
            this.userDecryptKey = new egret.ByteArray(h).readUnsignedInt()
            break
          case Oi:
            var p = Xi(n, 4)
            this.broadcastDecryptKey = new egret.ByteArray(p).readUnsignedInt()
            break
          default:
            this.pipeEvent(r, t)
        }
        xi._free(n)
      }),
      e
    )
  })(gt)
function Xi(t, e) {
  var n = t + e
  return new Uint8Array(xi.HEAPU8.subarray(t, n)).buffer
}
function zi(t) {
  for (var e, n = 0; n < 5; n++) {
    if ((e = xi._malloc(t)) >= 0 && e < xi.HEAPU8.length) return e
    console.error('invalid malloc value: ', e), xi._free(e)
  }
  return Math.abs(e) % xi.HEAPU8.length
}
var Vi = (function (t) {
    function e() {
      return (null !== t && t.apply(this, arguments)) || this
    }
    return (
      l(e, t),
      (e.prototype.parseResp = function (t) {
        this.question = t.readUnsignedInt()
      }),
      e
    )
  })(T),
  Hi = 0,
  ji = 1,
  Wi = 2,
  Qi = 3,
  Gi = 4,
  Ki = 10,
  Yi = 20,
  qi = (function (t) {
    function e(e) {
      var n = t.call(this) || this
      return (n.config = e), n
    }
    return (
      l(e, t),
      (e.prototype.onPipeEvent = function (t, e, n) {
        t === r &&
          (257 === e.respId
            ? (n.stopPropagation(), this.answerServerQuestion(e))
            : this.config.qna.aliveList.indexOf(e.respId) >= 0 && this.replyKeepAlive(e.seqNo))
      }),
      (e.prototype.answerServerQuestion = function (t) {
        var e,
          n = new Vi(t.respId, t.bytes)
        switch (n.question) {
          case Hi:
            e = (navigator.userAgent || navigator.vendor || window.opera) + ';' + this.config.qna.version
            break
          case Qi:
            e = window.location.hostname
            break
          case Gi:
            e = this.config.qna.userIp || 'NO_ANSWER'
            break
          case ji:
          case Wi:
          default:
            e = n.question >= Ki && n.question <= Yi ? '' + 8 * n.question : 'NO_ANSWER'
        }
        this.socket.writeBytes(
          O(258, function (t) {
            t.writeUnsignedInt(n.question), t.writeUTFBytes(e)
          })
        )
      }),
      (e.prototype.replyKeepAlive = function (t) {
        this.socket.writeBytes(O(1, null, t))
      }),
      e
    )
  })(gt),
  Ji = (function (t) {
    function e() {
      return (null !== t && t.apply(this, arguments)) || this
    }
    return (
      l(e, t),
      (e.prototype.appendPluginAfter = function () {
        t.prototype.appendPluginAfter.call(this),
          this.config.unzip && this.singleSocket.appendPlugin(new Si()),
          this.config.crypto.enable && this.singleSocket.appendPlugin(new Bi(this.config)),
          this.config.qna.version && this.singleSocket.appendPlugin(new qi(this.config)),
          this.singleSocket.appendPlugin(new mt(this.config, this.respClazzMap)),
          this.config.debug && this.singleSocket.appendPlugin(new Et(this.config))
      }),
      e
    )
  })(fr),
  $i = (function (t) {
    function e() {
      return (null !== t && t.apply(this, arguments)) || this
    }
    return (
      l(e, t),
      (e.prototype.appendPluginAfter = function () {
        t.prototype.appendPluginAfter.call(this),
          this.config.unzip && this.singleSocket.appendPlugin(new Si()),
          this.config.crypto.enable && this.singleSocket.appendPlugin(new Bi(this.config)),
          this.config.qna.version && this.singleSocket.appendPlugin(new qi(this.config)),
          this.config.dynamic && this.singleSocket.appendPlugin(new wt(this.config, this.dynRespClazzMapMap)),
          this.singleSocket.appendPlugin(new mt(this.config, this.respClazzMap)),
          this.config.debug && this.singleSocket.appendPlugin(new Et(this.config))
      }),
      e
    )
  })(lr)
;(bytes.VERSION = 'v1.5.3'),
  (bytes.EVENT_CONNECTING = 'EVENT_CONNECTING'),
  (bytes.EVENT_OPEN = 'EVENT_OPEN'),
  (bytes.EVENT_PACKET = r),
  (bytes.EVENT_CLOSE = 'EVENT_CLOSE'),
  (bytes.EVENT_ERROR = 'EVENT_ERROR'),
  (bytes.EVENT_DIE = 'EVENT_DIE'),
  (bytes.EVENT_DATA_VIEW = 'EVENT_DATA_VIEW'),
  (bytes.EVENT_RECONNECT_FAILED = 'EVENT_RECONNECT_FAILED'),
  (bytes.createCMD = O),
  (bytes.createPluginCMD = function (e, n, r, a, s) {
    void 0 === n && (n = bytes.UCGatePluginType.USER_STREAM), void 0 === s && (s = i)
    var c = new w()
    ;(c.cmdId = r),
      (c.seqNo = s),
      c.writeUnsignedInt(u),
      c.writeUnsignedInt(o),
      c.writeUnsignedInt(s),
      c.writeUnsignedInt(e),
      c.writeByte(n)
    var f = O(r, a, s)
    c.writeBytes(f)
    var l = c.position
    return (c.position = 4), c.writeUnsignedInt(l), c
  }),
  (bytes.createPluginCachedCMD = function (e, n, r) {
    return (
      void 0 === r && (r = i),
      O(
        u,
        function (r) {
          r.writeUnsignedInt(e), r.writeByte(bytes.UCGatePluginType.CACHE), r.writeUnsignedInt(n)
        },
        r
      )
    )
  }),
  (bytes.customDefaultConfig = function (t) {
    M = t
  }),
  (bytes.createResponseClazz = function (t) {
    return (function (e) {
      function n() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        l(n, e),
        (n.prototype.parseResp = function (e) {
          t.call(this, e, this)
        }),
        n
      )
    })(T)
  }),
  (bytes.hexStrToBytes = function (t) {
    for (var e = t.length, n = new egret.ByteArray(), r = 0; r < e; r += 2) {
      var i, o
      r === e - 1 ? ((i = 0), (o = parseInt(t[r], 16))) : ((i = parseInt(t[r], 16)), (o = parseInt(t[r + 1], 16))),
        n.writeByte((i << 4) + o)
    }
    return n
  }),
  (bytes.stringToBytes = P),
  (bytes.readUnsighedInt64FromBytes = function (t) {
    return t.readUnsignedInt() * Math.pow(2, 32) + t.readUnsignedInt()
  }),
  (bytes.writeUnsighedInt64ToBytes = function (t, e) {
    var n = Math.floor(e),
      r = [],
      i = Math.pow(2, 32)
    ;(r[0] = Math.floor(n / i)), (r[1] = n - r[0] * i), t.writeUnsignedInt(r[0]), t.writeUnsignedInt(r[1])
  }),
  (bytes.ResponseBase = T),
  (bytes.UnknownResp = _),
  (bytes.CMDByteArray = w),
  (bytes.WebSocketBase = Ji),
  (bytes.WebSocketDynamic = $i),
  bytes

function handleCryptoPacket(byte, socketId, userEncryptKey, userDecryptKey, broadcastDecryptKey) {
  let data,
    _userEncryptKey,
    _userDecryptKey,
    _broadcastDecryptKey,
    jsDecryptKey = new egret.ByteArray(new Uint8Array([90, 191, 82, 114]).buffer)
  var e = byte.packetLength,
    n = zi(e + 4),
    i = byte.bytes.bytes || new Uint8Array(byte.bytes.buffer)
  xi.HEAPU8.set(i, n)
  const o = xi.ccall(
    'Process',
    'number',
    ['number', 'number', 'number', 'number', 'number', 'number'],
    [socketId, n, e, userEncryptKey, userDecryptKey, broadcastDecryptKey]
  )
  switch (o) {
    case 0:
    case 1:
      let a = Xi(n, e).slice(12 * o),
        s = (function (t, e) {
          var n = new egret.ByteArray()
          ;(t.position = 0), (e.position = 0)
          for (var r = 0; r < t.length; r++) (e.position = r % e.length), n.writeByte(t.readByte() ^ e.readByte())
          return (n.position = 0), n
        })(new egret.ByteArray(a), jsDecryptKey),
        c = new _(s.readUnsignedInt(), s)
      data = c
      break
    // respId = 301825 seqNo != 0 userEncryptKey
    case 2:
      let u = Xi(n, 20).slice(0, 16),
        f = Xi(n, 20).slice(16, 20),
        l = new egret.ByteArray(u)
      data = l
      _userEncryptKey = new egret.ByteArray(f).readUnsignedInt()
      break
    // respId = 301825 seqNo = 0 userDecryptKey
    case 3:
      const h = Xi(n, 4)
      _userDecryptKey = new egret.ByteArray(h).readUnsignedInt()
      break
    // 301569 broadcastDecryptKey
    case 4:
      const p = Xi(n, 4)
      _broadcastDecryptKey = new egret.ByteArray(p).readUnsignedInt()
      break
  }
  xi._free(n)
  return {
    data: data,
    userEncryptKey: _userEncryptKey,
    userDecryptKey: _userDecryptKey,
    broadcastDecryptKey: _broadcastDecryptKey
  }
}

function doSend(byteArray, socketId, userEncryptKey, userDecryptKey, broadcastDecryptKey) {
  var n = byteArray.length,
    r = zi(n + 12),
    i = new Uint8Array(n + 12),
    o = byteArray.bytes || new Uint8Array(byteArray.buffer)
  i.set(o), xi.HEAPU8.set(i, r)
  xi.ccall(
    'Encrypt',
    'number',
    ['number', 'number', 'number', 'number', 'number', 'number', 'number'],
    [socketId, r, n, n + 12, userEncryptKey, userDecryptKey, broadcastDecryptKey]
  )
  var a = Xi(r, n + 12).slice(0),
    s = new egret.ByteArray(a)
  return xi._free(r), s
}

export { handleCryptoPacket, doSend }
