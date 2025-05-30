!(function (e) {
  'use strict';
  function t(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function n(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = null != arguments[n] ? arguments[n] : {};
      n % 2
        ? t(Object(r), !0).forEach(function (t) {
            l(e, t, r[t]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : t(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
    }
    return e;
  }
  function r() {
    r = function () {
      return e;
    };
    var e = {},
      t = Object.prototype,
      n = t.hasOwnProperty,
      o = 'function' == typeof Symbol ? Symbol : {},
      a = o.iterator || '@@iterator',
      i = o.asyncIterator || '@@asyncIterator',
      s = o.toStringTag || '@@toStringTag';
    function u(e, t, n) {
      return (
        Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        }),
        e[t]
      );
    }
    try {
      u({}, '');
    } catch (e) {
      u = function (e, t, n) {
        return (e[t] = n);
      };
    }
    function c(e, t, n, r) {
      var o = t && t.prototype instanceof f ? t : f,
        a = Object.create(o.prototype),
        i = new w(r || []);
      return (
        (a._invoke = (function (e, t, n) {
          var r = 'suspendedStart';
          return function (o, a) {
            if ('executing' === r)
              throw new Error('Generator is already running');
            if ('completed' === r) {
              if ('throw' === o) throw a;
              return M();
            }
            for (n.method = o, n.arg = a; ; ) {
              var i = n.delegate;
              if (i) {
                var s = b(i, n);
                if (s) {
                  if (s === d) continue;
                  return s;
                }
              }
              if ('next' === n.method) n.sent = n._sent = n.arg;
              else if ('throw' === n.method) {
                if ('suspendedStart' === r) throw ((r = 'completed'), n.arg);
                n.dispatchException(n.arg);
              } else 'return' === n.method && n.abrupt('return', n.arg);
              r = 'executing';
              var u = l(e, t, n);
              if ('normal' === u.type) {
                if (
                  ((r = n.done ? 'completed' : 'suspendedYield'), u.arg === d)
                )
                  continue;
                return { value: u.arg, done: n.done };
              }
              'throw' === u.type &&
                ((r = 'completed'), (n.method = 'throw'), (n.arg = u.arg));
            }
          };
        })(e, n, i)),
        a
      );
    }
    function l(e, t, n) {
      try {
        return { type: 'normal', arg: e.call(t, n) };
      } catch (e) {
        return { type: 'throw', arg: e };
      }
    }
    e.wrap = c;
    var d = {};
    function f() {}
    function p() {}
    function h() {}
    var g = {};
    u(g, a, function () {
      return this;
    });
    var m = Object.getPrototypeOf,
      v = m && m(m(k([])));
    v && v !== t && n.call(v, a) && (g = v);
    var y = (h.prototype = f.prototype = Object.create(g));
    function I(e) {
      ['next', 'throw', 'return'].forEach(function (t) {
        u(e, t, function (e) {
          return this._invoke(t, e);
        });
      });
    }
    function C(e, t) {
      function r(o, a, i, s) {
        var u = l(e[o], e, a);
        if ('throw' !== u.type) {
          var c = u.arg,
            d = c.value;
          return d && 'object' == typeof d && n.call(d, '__await')
            ? t.resolve(d.__await).then(
                function (e) {
                  r('next', e, i, s);
                },
                function (e) {
                  r('throw', e, i, s);
                }
              )
            : t.resolve(d).then(
                function (e) {
                  (c.value = e), i(c);
                },
                function (e) {
                  return r('throw', e, i, s);
                }
              );
        }
        s(u.arg);
      }
      var o;
      this._invoke = function (e, n) {
        function a() {
          return new t(function (t, o) {
            r(e, n, t, o);
          });
        }
        return (o = o ? o.then(a, a) : a());
      };
    }
    function b(e, t) {
      var n = e.iterator[t.method];
      if (void 0 === n) {
        if (((t.delegate = null), 'throw' === t.method)) {
          if (
            e.iterator.return &&
            ((t.method = 'return'),
            (t.arg = void 0),
            b(e, t),
            'throw' === t.method)
          )
            return d;
          (t.method = 'throw'),
            (t.arg = new TypeError(
              "The iterator does not provide a 'throw' method"
            ));
        }
        return d;
      }
      var r = l(n, e.iterator, t.arg);
      if ('throw' === r.type)
        return (t.method = 'throw'), (t.arg = r.arg), (t.delegate = null), d;
      var o = r.arg;
      return o
        ? o.done
          ? ((t[e.resultName] = o.value),
            (t.next = e.nextLoc),
            'return' !== t.method && ((t.method = 'next'), (t.arg = void 0)),
            (t.delegate = null),
            d)
          : o
        : ((t.method = 'throw'),
          (t.arg = new TypeError('iterator result is not an object')),
          (t.delegate = null),
          d);
    }
    function S(e) {
      var t = { tryLoc: e[0] };
      1 in e && (t.catchLoc = e[1]),
        2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
        this.tryEntries.push(t);
    }
    function A(e) {
      var t = e.completion || {};
      (t.type = 'normal'), delete t.arg, (e.completion = t);
    }
    function w(e) {
      (this.tryEntries = [{ tryLoc: 'root' }]),
        e.forEach(S, this),
        this.reset(!0);
    }
    function k(e) {
      if (e) {
        var t = e[a];
        if (t) return t.call(e);
        if ('function' == typeof e.next) return e;
        if (!isNaN(e.length)) {
          var r = -1,
            o = function t() {
              for (; ++r < e.length; )
                if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
              return (t.value = void 0), (t.done = !0), t;
            };
          return (o.next = o);
        }
      }
      return { next: M };
    }
    function M() {
      return { value: void 0, done: !0 };
    }
    return (
      (p.prototype = h),
      u(y, 'constructor', h),
      u(h, 'constructor', p),
      (p.displayName = u(h, s, 'GeneratorFunction')),
      (e.isGeneratorFunction = function (e) {
        var t = 'function' == typeof e && e.constructor;
        return (
          !!t && (t === p || 'GeneratorFunction' === (t.displayName || t.name))
        );
      }),
      (e.mark = function (e) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(e, h)
            : ((e.__proto__ = h), u(e, s, 'GeneratorFunction')),
          (e.prototype = Object.create(y)),
          e
        );
      }),
      (e.awrap = function (e) {
        return { __await: e };
      }),
      I(C.prototype),
      u(C.prototype, i, function () {
        return this;
      }),
      (e.AsyncIterator = C),
      (e.async = function (t, n, r, o, a) {
        void 0 === a && (a = Promise);
        var i = new C(c(t, n, r, o), a);
        return e.isGeneratorFunction(n)
          ? i
          : i.next().then(function (e) {
              return e.done ? e.value : i.next();
            });
      }),
      I(y),
      u(y, s, 'Generator'),
      u(y, a, function () {
        return this;
      }),
      u(y, 'toString', function () {
        return '[object Generator]';
      }),
      (e.keys = function (e) {
        var t = [];
        for (var n in e) t.push(n);
        return (
          t.reverse(),
          function n() {
            for (; t.length; ) {
              var r = t.pop();
              if (r in e) return (n.value = r), (n.done = !1), n;
            }
            return (n.done = !0), n;
          }
        );
      }),
      (e.values = k),
      (w.prototype = {
        constructor: w,
        reset: function (e) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = void 0),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = void 0),
            this.tryEntries.forEach(A),
            !e)
          )
            for (var t in this)
              't' === t.charAt(0) &&
                n.call(this, t) &&
                !isNaN(+t.slice(1)) &&
                (this[t] = void 0);
        },
        stop: function () {
          this.done = !0;
          var e = this.tryEntries[0].completion;
          if ('throw' === e.type) throw e.arg;
          return this.rval;
        },
        dispatchException: function (e) {
          if (this.done) throw e;
          var t = this;
          function r(n, r) {
            return (
              (i.type = 'throw'),
              (i.arg = e),
              (t.next = n),
              r && ((t.method = 'next'), (t.arg = void 0)),
              !!r
            );
          }
          for (var o = this.tryEntries.length - 1; o >= 0; --o) {
            var a = this.tryEntries[o],
              i = a.completion;
            if ('root' === a.tryLoc) return r('end');
            if (a.tryLoc <= this.prev) {
              var s = n.call(a, 'catchLoc'),
                u = n.call(a, 'finallyLoc');
              if (s && u) {
                if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                if (this.prev < a.finallyLoc) return r(a.finallyLoc);
              } else if (s) {
                if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
              } else {
                if (!u)
                  throw new Error('try statement without catch or finally');
                if (this.prev < a.finallyLoc) return r(a.finallyLoc);
              }
            }
          }
        },
        abrupt: function (e, t) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var o = this.tryEntries[r];
            if (
              o.tryLoc <= this.prev &&
              n.call(o, 'finallyLoc') &&
              this.prev < o.finallyLoc
            ) {
              var a = o;
              break;
            }
          }
          a &&
            ('break' === e || 'continue' === e) &&
            a.tryLoc <= t &&
            t <= a.finallyLoc &&
            (a = null);
          var i = a ? a.completion : {};
          return (
            (i.type = e),
            (i.arg = t),
            a
              ? ((this.method = 'next'), (this.next = a.finallyLoc), d)
              : this.complete(i)
          );
        },
        complete: function (e, t) {
          if ('throw' === e.type) throw e.arg;
          return (
            'break' === e.type || 'continue' === e.type
              ? (this.next = e.arg)
              : 'return' === e.type
                ? ((this.rval = this.arg = e.arg),
                  (this.method = 'return'),
                  (this.next = 'end'))
                : 'normal' === e.type && t && (this.next = t),
            d
          );
        },
        finish: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n.finallyLoc === e)
              return this.complete(n.completion, n.afterLoc), A(n), d;
          }
        },
        catch: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n.tryLoc === e) {
              var r = n.completion;
              if ('throw' === r.type) {
                var o = r.arg;
                A(n);
              }
              return o;
            }
          }
          throw new Error('illegal catch attempt');
        },
        delegateYield: function (e, t, n) {
          return (
            (this.delegate = { iterator: k(e), resultName: t, nextLoc: n }),
            'next' === this.method && (this.arg = void 0),
            d
          );
        },
      }),
      e
    );
  }
  function o(e) {
    return (
      (o =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            }),
      o(e)
    );
  }
  function a(e, t, n, r, o, a, i) {
    try {
      var s = e[a](i),
        u = s.value;
    } catch (e) {
      return void n(e);
    }
    s.done ? t(u) : Promise.resolve(u).then(r, o);
  }
  function i(e) {
    return function () {
      var t = this,
        n = arguments;
      return new Promise(function (r, o) {
        var i = e.apply(t, n);
        function s(e) {
          a(i, r, o, s, u, 'next', e);
        }
        function u(e) {
          a(i, r, o, s, u, 'throw', e);
        }
        s(void 0);
      });
    };
  }
  function s(e, t) {
    if (!(e instanceof t))
      throw new TypeError('Cannot call a class as a function');
  }
  function u(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        'value' in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function c(e, t, n) {
    return (
      t && u(e.prototype, t),
      n && u(e, n),
      Object.defineProperty(e, 'prototype', { writable: !1 }),
      e
    );
  }
  function l(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function d(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        var n =
          null == e
            ? null
            : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
              e['@@iterator'];
        if (null == n) return;
        var r,
          o,
          a = [],
          i = !0,
          s = !1;
        try {
          for (
            n = n.call(e);
            !(i = (r = n.next()).done) &&
            (a.push(r.value), !t || a.length !== t);
            i = !0
          );
        } catch (e) {
          (s = !0), (o = e);
        } finally {
          try {
            i || null == n.return || n.return();
          } finally {
            if (s) throw o;
          }
        }
        return a;
      })(e, t) ||
      p(e, t) ||
      (function () {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      })()
    );
  }
  function f(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) return h(e);
      })(e) ||
      (function (e) {
        if (
          ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e['@@iterator']
        )
          return Array.from(e);
      })(e) ||
      p(e) ||
      (function () {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      })()
    );
  }
  function p(e, t) {
    if (e) {
      if ('string' == typeof e) return h(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      return (
        'Object' === n && e.constructor && (n = e.constructor.name),
        'Map' === n || 'Set' === n
          ? Array.from(e)
          : 'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? h(e, t)
            : void 0
      );
    }
  }
  function h(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function g(e, t) {
    var n =
      ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
    if (!n) {
      if (
        Array.isArray(e) ||
        (n = p(e)) ||
        (t && e && 'number' == typeof e.length)
      ) {
        n && (e = n);
        var r = 0,
          o = function () {};
        return {
          s: o,
          n: function () {
            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
          },
          e: function (e) {
            throw e;
          },
          f: o,
        };
      }
      throw new TypeError(
        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
      );
    }
    var a,
      i = !0,
      s = !1;
    return {
      s: function () {
        n = n.call(e);
      },
      n: function () {
        var e = n.next();
        return (i = e.done), e;
      },
      e: function (e) {
        (s = !0), (a = e);
      },
      f: function () {
        try {
          i || null == n.return || n.return();
        } finally {
          if (s) throw a;
        }
      },
    };
  }
  var m;
  function v(e) {
    var t = null == e ? void 0 : e.host;
    return Boolean((null == t ? void 0 : t.shadowRoot) === e);
  }
  function y(e) {
    return '[object ShadowRoot]' === Object.prototype.toString.call(e);
  }
  function I(e) {
    try {
      var t = e.rules || e.cssRules;
      return t
        ? ((n = Array.from(t, C).join('')).includes(
            ' background-clip: text;'
          ) &&
            !n.includes(' -webkit-background-clip: text;') &&
            (n = n.replace(
              ' background-clip: text;',
              ' -webkit-background-clip: text; background-clip: text;'
            )),
          n)
        : null;
    } catch (e) {
      return null;
    }
    var n;
  }
  function C(e) {
    var t, n, r;
    if (
      (function (e) {
        return 'styleSheet' in e;
      })(e)
    )
      try {
        t =
          I(e.styleSheet) ||
          (function (e) {
            var t = e.cssText;
            if (t.split('"').length < 3) return t;
            var n = ['@import', 'url('.concat(JSON.stringify(e.href), ')')];
            return (
              '' === e.layerName
                ? n.push('layer')
                : e.layerName && n.push('layer('.concat(e.layerName, ')')),
              e.supportsText && n.push('supports('.concat(e.supportsText, ')')),
              e.media.length && n.push(e.media.mediaText),
              n.join(' ') + ';'
            );
          })(e);
      } catch (e) {}
    else if (
      (function (e) {
        return 'selectorText' in e;
      })(e) &&
      e.selectorText.includes(':')
    )
      return (
        (n = e.cssText),
        (r = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm),
        n.replace(r, '$1\\$2')
      );
    return t || e.cssText;
  }
  !(function (e) {
    (e[(e.Document = 0)] = 'Document'),
      (e[(e.DocumentType = 1)] = 'DocumentType'),
      (e[(e.Element = 2)] = 'Element'),
      (e[(e.Text = 3)] = 'Text'),
      (e[(e.CDATA = 4)] = 'CDATA'),
      (e[(e.Comment = 5)] = 'Comment');
  })(m || (m = {}));
  var b = (function () {
    function e() {
      s(this, e),
        (this.idNodeMap = new Map()),
        (this.nodeMetaMap = new WeakMap());
    }
    return (
      c(e, [
        {
          key: 'getId',
          value: function (e) {
            var t;
            if (!e) return -1;
            var n =
              null === (t = this.getMeta(e)) || void 0 === t ? void 0 : t.id;
            return null != n ? n : -1;
          },
        },
        {
          key: 'getNode',
          value: function (e) {
            return this.idNodeMap.get(e) || null;
          },
        },
        {
          key: 'getIds',
          value: function () {
            return Array.from(this.idNodeMap.keys());
          },
        },
        {
          key: 'getMeta',
          value: function (e) {
            return this.nodeMetaMap.get(e) || null;
          },
        },
        {
          key: 'removeNodeFromMap',
          value: function (e) {
            var t = this,
              n = this.getId(e);
            this.idNodeMap.delete(n),
              e.childNodes &&
                e.childNodes.forEach(function (e) {
                  return t.removeNodeFromMap(e);
                });
          },
        },
        {
          key: 'has',
          value: function (e) {
            return this.idNodeMap.has(e);
          },
        },
        {
          key: 'hasNode',
          value: function (e) {
            return this.nodeMetaMap.has(e);
          },
        },
        {
          key: 'add',
          value: function (e, t) {
            var n = t.id;
            this.idNodeMap.set(n, e), this.nodeMetaMap.set(e, t);
          },
        },
        {
          key: 'replace',
          value: function (e, t) {
            var n = this.getNode(e);
            if (n) {
              var r = this.nodeMetaMap.get(n);
              r && this.nodeMetaMap.set(t, r);
            }
            this.idNodeMap.set(e, t);
          },
        },
        {
          key: 'reset',
          value: function () {
            (this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap());
          },
        },
      ]),
      e
    );
  })();
  function S(e) {
    var t = e.element,
      n = e.maskInputOptions,
      r = e.tagName,
      o = e.type,
      a = e.value,
      i = e.maskInputFn,
      s = a || '',
      u = o && A(o);
    return (
      (n[r.toLowerCase()] || (u && n[u])) &&
        (s = i ? i(s, t) : '*'.repeat(s.length)),
      s
    );
  }
  function A(e) {
    return e.toLowerCase();
  }
  var w = '__rrweb_original__';
  function k(e) {
    var t = e.type;
    return e.hasAttribute('data-rr-is-password') ? 'password' : t ? A(t) : null;
  }
  function M(e, t) {
    var n, r;
    try {
      r = new URL(e, null != t ? t : window.location.href);
    } catch (e) {
      return null;
    }
    var o = r.pathname.match(/\.([0-9a-z]+)(?:$)/i);
    return null !== (n = null == o ? void 0 : o[1]) && void 0 !== n ? n : null;
  }
  var T,
    O,
    N = 1,
    E = new RegExp('[^a-z0-9-_:]'),
    R = -2;
  function x() {
    return N++;
  }
  var L = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
    F = /^(?:[a-z+]+:)?\/\//i,
    D = /^www\..*/i,
    B = /^(data:)([^,]*),(.*)/i;
  function W(e, t) {
    return (e || '').replace(L, function (e, n, r, o, a, i) {
      var s,
        u = r || a || i,
        c = n || o || '';
      if (!u) return e;
      if (F.test(u) || D.test(u))
        return 'url('.concat(c).concat(u).concat(c, ')');
      if (B.test(u)) return 'url('.concat(c).concat(u).concat(c, ')');
      if ('/' === u[0])
        return 'url('
          .concat(c)
          .concat(
            ((s = t),
            (s.indexOf('//') > -1
              ? s.split('/').slice(0, 3).join('/')
              : s.split('/')[0]
            ).split('?')[0] + u)
          )
          .concat(c, ')');
      var l = t.split('/'),
        d = u.split('/');
      l.pop();
      var f,
        p = g(d);
      try {
        for (p.s(); !(f = p.n()).done; ) {
          var h = f.value;
          '.' !== h && ('..' === h ? l.pop() : l.push(h));
        }
      } catch (e) {
        p.e(e);
      } finally {
        p.f();
      }
      return 'url('.concat(c).concat(l.join('/')).concat(c, ')');
    });
  }
  var G = /^[^ \t\n\r\u000c]+/,
    V = /^[, \t\n\r\u000c]+/;
  function Z(e, t) {
    if (!t || '' === t.trim()) return t;
    var n = e.createElement('a');
    return (n.href = t), n.href;
  }
  function U(e) {
    return Boolean('svg' === e.tagName || e.ownerSVGElement);
  }
  function K() {
    var e = document.createElement('a');
    return (e.href = ''), e.href;
  }
  function _(e, t, n, r) {
    return r
      ? 'src' === n ||
        ('href' === n && ('use' !== t || '#' !== r[0])) ||
        ('xlink:href' === n && '#' !== r[0])
        ? Z(e, r)
        : 'background' !== n || ('table' !== t && 'td' !== t && 'th' !== t)
          ? 'srcset' === n
            ? (function (e, t) {
                if ('' === t.trim()) return t;
                var n = 0;
                function r(e) {
                  var r,
                    o = e.exec(t.substring(n));
                  return o ? ((r = o[0]), (n += r.length), r) : '';
                }
                for (var o = []; r(V), !(n >= t.length); ) {
                  var a = r(G);
                  if (',' === a.slice(-1))
                    (a = Z(e, a.substring(0, a.length - 1))), o.push(a);
                  else {
                    var i = '';
                    a = Z(e, a);
                    for (var s = !1; ; ) {
                      var u = t.charAt(n);
                      if ('' === u) {
                        o.push((a + i).trim());
                        break;
                      }
                      if (s) ')' === u && (s = !1);
                      else {
                        if (',' === u) {
                          (n += 1), o.push((a + i).trim());
                          break;
                        }
                        '(' === u && (s = !0);
                      }
                      (i += u), (n += 1);
                    }
                  }
                }
                return o.join(', ');
              })(e, r)
            : 'style' === n
              ? W(r, K())
              : 'object' === t && 'data' === n
                ? Z(e, r)
                : r
          : Z(e, r)
      : r;
  }
  function j(e, t, n) {
    return ('video' === e || 'audio' === e) && 'autoplay' === t;
  }
  function P(e, t, n) {
    if (!e) return !1;
    if (e.nodeType !== e.ELEMENT_NODE) return !!n && P(e.parentNode, t, n);
    for (var r = e.classList.length; r--; ) {
      var o = e.classList[r];
      if (t.test(o)) return !0;
    }
    return !!n && P(e.parentNode, t, n);
  }
  function H(e, t, n, r) {
    try {
      var o = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
      if (null === o) return !1;
      if ('string' == typeof t) {
        if (r) {
          if (o.closest('.'.concat(t))) return !0;
        } else if (o.classList.contains(t)) return !0;
      } else if (P(o, t, r)) return !0;
      if (n)
        if (r) {
          if (o.closest(n)) return !0;
        } else if (o.matches(n)) return !0;
    } catch (e) {}
    return !1;
  }
  function Y(e, t) {
    var n = t.doc,
      r = t.mirror,
      o = t.blockClass,
      a = t.blockSelector,
      i = t.needsMask,
      s = t.inlineStylesheet,
      u = t.maskInputOptions,
      c = void 0 === u ? {} : u,
      l = t.maskTextFn,
      d = t.maskInputFn,
      f = t.dataURLOptions,
      p = void 0 === f ? {} : f,
      h = t.inlineImages,
      g = t.recordCanvas,
      v = t.keepIframeSrcFn,
      y = t.newlyAddedElement,
      C = void 0 !== y && y,
      b = (function (e, t) {
        if (!t.hasNode(e)) return;
        var n = t.getId(e);
        return 1 === n ? void 0 : n;
      })(n, r);
    switch (e.nodeType) {
      case e.DOCUMENT_NODE:
        return 'CSS1Compat' !== e.compatMode
          ? { type: m.Document, childNodes: [], compatMode: e.compatMode }
          : { type: m.Document, childNodes: [] };
      case e.DOCUMENT_TYPE_NODE:
        return {
          type: m.DocumentType,
          name: e.name,
          publicId: e.publicId,
          systemId: e.systemId,
          rootId: b,
        };
      case e.ELEMENT_NODE:
        return (function (e, t) {
          for (
            var n,
              r = t.doc,
              o = t.blockClass,
              a = t.blockSelector,
              i = t.inlineStylesheet,
              s = t.maskInputOptions,
              u = void 0 === s ? {} : s,
              c = t.maskInputFn,
              l = t.dataURLOptions,
              d = void 0 === l ? {} : l,
              f = t.inlineImages,
              p = t.recordCanvas,
              h = t.keepIframeSrcFn,
              g = t.newlyAddedElement,
              v = void 0 !== g && g,
              y = t.rootId,
              C = (function (e, t, n) {
                try {
                  if ('string' == typeof t) {
                    if (e.classList.contains(t)) return !0;
                  } else
                    for (var r = e.classList.length; r--; ) {
                      var o = e.classList[r];
                      if (t.test(o)) return !0;
                    }
                  if (n) return e.matches(n);
                } catch (e) {}
                return !1;
              })(e, o, a),
              b = (function (e) {
                if (e instanceof HTMLFormElement) return 'form';
                var t = A(e.tagName);
                return E.test(t) ? 'div' : t;
              })(e),
              M = {},
              N = e.attributes.length,
              R = 0;
            R < N;
            R++
          ) {
            var x = e.attributes[R];
            j(b, x.name, x.value) || (M[x.name] = _(r, b, A(x.name), x.value));
          }
          if ('link' === b && i) {
            var L = Array.from(r.styleSheets).find(function (t) {
                return t.href === e.href;
              }),
              F = null;
            L && (F = I(L)),
              F && (delete M.rel, delete M.href, (M._cssText = W(F, L.href)));
          }
          if (
            'style' === b &&
            e.sheet &&
            !(e.innerText || e.textContent || '').trim().length
          ) {
            var D = I(e.sheet);
            D && (M._cssText = W(D, K()));
          }
          if ('input' === b || 'textarea' === b || 'select' === b) {
            var B = e.value,
              G = e.checked;
            'radio' !== M.type &&
            'checkbox' !== M.type &&
            'submit' !== M.type &&
            'button' !== M.type &&
            B
              ? (M.value = S({
                  element: e,
                  type: k(e),
                  tagName: b,
                  value: B,
                  maskInputOptions: u,
                  maskInputFn: c,
                }))
              : G && (M.checked = G);
          }
          'option' === b &&
            (e.selected && !u.select ? (M.selected = !0) : delete M.selected);
          if ('canvas' === b && p)
            if ('2d' === e.__context)
              (function (e) {
                var t = e.getContext('2d');
                if (!t) return !0;
                for (var n = 0; n < e.width; n += 50)
                  for (var r = 0; r < e.height; r += 50) {
                    var o = t.getImageData,
                      a = w in o ? o[w] : o;
                    if (
                      new Uint32Array(
                        a.call(
                          t,
                          n,
                          r,
                          Math.min(50, e.width - n),
                          Math.min(50, e.height - r)
                        ).data.buffer
                      ).some(function (e) {
                        return 0 !== e;
                      })
                    )
                      return !1;
                  }
                return !0;
              })(e) || (M.rr_dataURL = e.toDataURL(d.type, d.quality));
            else if (!('__context' in e)) {
              var V = e.toDataURL(d.type, d.quality),
                Z = document.createElement('canvas');
              (Z.width = e.width),
                (Z.height = e.height),
                V !== Z.toDataURL(d.type, d.quality) && (M.rr_dataURL = V);
            }
          if ('img' === b && f) {
            T || ((T = r.createElement('canvas')), (O = T.getContext('2d')));
            var P = e,
              H = P.crossOrigin;
            P.crossOrigin = 'anonymous';
            var Y = function e() {
              P.removeEventListener('load', e);
              try {
                (T.width = P.naturalWidth),
                  (T.height = P.naturalHeight),
                  O.drawImage(P, 0, 0),
                  (M.rr_dataURL = T.toDataURL(d.type, d.quality));
              } catch (e) {
                console.warn(
                  'Cannot inline img src='
                    .concat(P.currentSrc, '! Error: ')
                    .concat(e)
                );
              }
              H ? (M.crossOrigin = H) : P.removeAttribute('crossorigin');
            };
            P.complete && 0 !== P.naturalWidth
              ? Y()
              : P.addEventListener('load', Y);
          }
          if ('audio' === b || 'video' === b) {
            var q = M;
            (q.rr_mediaState = e.paused ? 'paused' : 'played'),
              (q.rr_mediaCurrentTime = e.currentTime),
              (q.rr_mediaPlaybackRate = e.playbackRate),
              (q.rr_mediaMuted = e.muted),
              (q.rr_mediaLoop = e.loop),
              (q.rr_mediaVolume = e.volume);
          }
          v ||
            (e.scrollLeft && (M.rr_scrollLeft = e.scrollLeft),
            e.scrollTop && (M.rr_scrollTop = e.scrollTop));
          if (C) {
            var J = e.getBoundingClientRect(),
              z = J.width,
              Q = J.height;
            M = {
              class: M.class,
              rr_width: ''.concat(z, 'px'),
              rr_height: ''.concat(Q, 'px'),
            };
          }
          'iframe' !== b ||
            h(M.src) ||
            (e.contentDocument || (M.rr_src = M.src), delete M.src);
          try {
            customElements.get(b) && (n = !0);
          } catch (e) {}
          return {
            type: m.Element,
            tagName: b,
            attributes: M,
            childNodes: [],
            isSVG: U(e) || void 0,
            needBlock: C,
            rootId: y,
            isCustom: n,
          };
        })(e, {
          doc: n,
          blockClass: o,
          blockSelector: a,
          inlineStylesheet: s,
          maskInputOptions: c,
          maskInputFn: d,
          dataURLOptions: p,
          inlineImages: h,
          recordCanvas: g,
          keepIframeSrcFn: v,
          newlyAddedElement: C,
          rootId: b,
        });
      case e.TEXT_NODE:
        return (function (e, t) {
          var n,
            r = t.needsMask,
            o = t.maskTextFn,
            a = t.rootId,
            i = e.parentNode && e.parentNode.tagName,
            s = e.textContent,
            u = 'STYLE' === i || void 0,
            c = 'SCRIPT' === i || void 0;
          if (u && s) {
            try {
              e.nextSibling ||
                e.previousSibling ||
                ((null === (n = e.parentNode.sheet) || void 0 === n
                  ? void 0
                  : n.cssRules) &&
                  (s = I(e.parentNode.sheet)));
            } catch (t) {
              console.warn(
                "Cannot get CSS styles from text's parentNode. Error: ".concat(
                  t
                ),
                e
              );
            }
            s = W(s, K());
          }
          c && (s = 'SCRIPT_PLACEHOLDER');
          !u &&
            !c &&
            s &&
            r &&
            (s = o ? o(s, e.parentElement) : s.replace(/[\S]/g, '*'));
          return { type: m.Text, textContent: s || '', isStyle: u, rootId: a };
        })(e, { needsMask: i, maskTextFn: l, rootId: b });
      case e.CDATA_SECTION_NODE:
        return { type: m.CDATA, textContent: '', rootId: b };
      case e.COMMENT_NODE:
        return { type: m.Comment, textContent: e.textContent || '', rootId: b };
      default:
        return !1;
    }
  }
  function q(e) {
    return null == e ? '' : e.toLowerCase();
  }
  function J(e, t) {
    var n = t.doc,
      r = t.mirror,
      o = t.blockClass,
      a = t.blockSelector,
      i = t.maskTextClass,
      s = t.maskTextSelector,
      u = t.skipChild,
      c = void 0 !== u && u,
      l = t.inlineStylesheet,
      d = void 0 === l || l,
      f = t.maskInputOptions,
      p = void 0 === f ? {} : f,
      h = t.maskTextFn,
      g = t.maskInputFn,
      I = t.slimDOMOptions,
      C = t.dataURLOptions,
      b = void 0 === C ? {} : C,
      S = t.inlineImages,
      A = void 0 !== S && S,
      w = t.recordCanvas,
      k = void 0 !== w && w,
      T = t.onSerialize,
      O = t.onIframeLoad,
      N = t.iframeLoadTimeout,
      E = void 0 === N ? 5e3 : N,
      L = t.onStylesheetLoad,
      F = t.stylesheetLoadTimeout,
      D = void 0 === F ? 5e3 : F,
      B = t.keepIframeSrcFn,
      W =
        void 0 === B
          ? function () {
              return !1;
            }
          : B,
      G = t.newlyAddedElement,
      V = void 0 !== G && G,
      Z = t.needsMask,
      U = t.preserveWhiteSpace,
      K = void 0 === U || U;
    !Z && e.childNodes && (Z = H(e, i, s, void 0 === Z));
    var _,
      j = Y(e, {
        doc: n,
        mirror: r,
        blockClass: o,
        blockSelector: a,
        needsMask: Z,
        inlineStylesheet: d,
        maskInputOptions: p,
        maskTextFn: h,
        maskInputFn: g,
        dataURLOptions: b,
        inlineImages: A,
        recordCanvas: k,
        keepIframeSrcFn: W,
        newlyAddedElement: V,
      });
    if (!j) return console.warn(e, 'not serialized'), null;
    _ = r.hasNode(e)
      ? r.getId(e)
      : !(function (e, t) {
            if (t.comment && e.type === m.Comment) return !0;
            if (e.type === m.Element) {
              if (
                t.script &&
                ('script' === e.tagName ||
                  ('link' === e.tagName &&
                    ('preload' === e.attributes.rel ||
                      'modulepreload' === e.attributes.rel) &&
                    'script' === e.attributes.as) ||
                  ('link' === e.tagName &&
                    'prefetch' === e.attributes.rel &&
                    'string' == typeof e.attributes.href &&
                    'js' === M(e.attributes.href)))
              )
                return !0;
              if (
                t.headFavicon &&
                (('link' === e.tagName &&
                  'shortcut icon' === e.attributes.rel) ||
                  ('meta' === e.tagName &&
                    (q(e.attributes.name).match(
                      /^msapplication-tile(image|color)$/
                    ) ||
                      'application-name' === q(e.attributes.name) ||
                      'icon' === q(e.attributes.rel) ||
                      'apple-touch-icon' === q(e.attributes.rel) ||
                      'shortcut icon' === q(e.attributes.rel))))
              )
                return !0;
              if ('meta' === e.tagName) {
                if (
                  t.headMetaDescKeywords &&
                  q(e.attributes.name).match(/^description|keywords$/)
                )
                  return !0;
                if (
                  t.headMetaSocial &&
                  (q(e.attributes.property).match(/^(og|twitter|fb):/) ||
                    q(e.attributes.name).match(/^(og|twitter):/) ||
                    'pinterest' === q(e.attributes.name))
                )
                  return !0;
                if (
                  t.headMetaRobots &&
                  ('robots' === q(e.attributes.name) ||
                    'googlebot' === q(e.attributes.name) ||
                    'bingbot' === q(e.attributes.name))
                )
                  return !0;
                if (
                  t.headMetaHttpEquiv &&
                  void 0 !== e.attributes['http-equiv']
                )
                  return !0;
                if (
                  t.headMetaAuthorship &&
                  ('author' === q(e.attributes.name) ||
                    'generator' === q(e.attributes.name) ||
                    'framework' === q(e.attributes.name) ||
                    'publisher' === q(e.attributes.name) ||
                    'progid' === q(e.attributes.name) ||
                    q(e.attributes.property).match(/^article:/) ||
                    q(e.attributes.property).match(/^product:/))
                )
                  return !0;
                if (
                  t.headMetaVerification &&
                  ('google-site-verification' === q(e.attributes.name) ||
                    'yandex-verification' === q(e.attributes.name) ||
                    'csrf-token' === q(e.attributes.name) ||
                    'p:domain_verify' === q(e.attributes.name) ||
                    'verify-v1' === q(e.attributes.name) ||
                    'verification' === q(e.attributes.name) ||
                    'shopify-checkout-api-token' === q(e.attributes.name))
                )
                  return !0;
              }
            }
            return !1;
          })(j, I) &&
          (K ||
            j.type !== m.Text ||
            j.isStyle ||
            j.textContent.replace(/^\s+|\s+$/gm, '').length)
        ? x()
        : R;
    var P = Object.assign(j, { id: _ });
    if ((r.add(e, P), _ === R)) return null;
    T && T(e);
    var z = !c;
    if (P.type === m.Element) {
      (z = z && !P.needBlock), delete P.needBlock;
      var Q = e.shadowRoot;
      Q && y(Q) && (P.isShadowHost = !0);
    }
    if ((P.type === m.Document || P.type === m.Element) && z) {
      I.headWhitespace &&
        P.type === m.Element &&
        'head' === P.tagName &&
        (K = !1);
      var X = {
        doc: n,
        mirror: r,
        blockClass: o,
        blockSelector: a,
        needsMask: Z,
        maskTextClass: i,
        maskTextSelector: s,
        skipChild: c,
        inlineStylesheet: d,
        maskInputOptions: p,
        maskTextFn: h,
        maskInputFn: g,
        slimDOMOptions: I,
        dataURLOptions: b,
        inlineImages: A,
        recordCanvas: k,
        preserveWhiteSpace: K,
        onSerialize: T,
        onIframeLoad: O,
        iframeLoadTimeout: E,
        onStylesheetLoad: L,
        stylesheetLoadTimeout: D,
        keepIframeSrcFn: W,
      };
      if (
        P.type === m.Element &&
        'textarea' === P.tagName &&
        void 0 !== P.attributes.value
      );
      else
        for (var $ = 0, ee = Array.from(e.childNodes); $ < ee.length; $++) {
          var te = J(ee[$], X);
          te && P.childNodes.push(te);
        }
      if (
        (function (e) {
          return e.nodeType === e.ELEMENT_NODE;
        })(e) &&
        e.shadowRoot
      )
        for (
          var ne = 0, re = Array.from(e.shadowRoot.childNodes);
          ne < re.length;
          ne++
        ) {
          var oe = J(re[ne], X);
          oe && (y(e.shadowRoot) && (oe.isShadow = !0), P.childNodes.push(oe));
        }
    }
    return (
      e.parentNode && v(e.parentNode) && y(e.parentNode) && (P.isShadow = !0),
      P.type === m.Element &&
        'iframe' === P.tagName &&
        (function (e, t, n) {
          var r = e.contentWindow;
          if (r) {
            var o,
              a = !1;
            try {
              o = r.document.readyState;
            } catch (e) {
              return;
            }
            if ('complete' === o) {
              var i = 'about:blank';
              if (r.location.href !== i || e.src === i || '' === e.src)
                return setTimeout(t, 0), e.addEventListener('load', t);
              e.addEventListener('load', t);
            } else {
              var s = setTimeout(function () {
                a || (t(), (a = !0));
              }, n);
              e.addEventListener('load', function () {
                clearTimeout(s), (a = !0), t();
              });
            }
          }
        })(
          e,
          function () {
            var t = e.contentDocument;
            if (t && O) {
              var n = J(t, {
                doc: t,
                mirror: r,
                blockClass: o,
                blockSelector: a,
                needsMask: Z,
                maskTextClass: i,
                maskTextSelector: s,
                skipChild: !1,
                inlineStylesheet: d,
                maskInputOptions: p,
                maskTextFn: h,
                maskInputFn: g,
                slimDOMOptions: I,
                dataURLOptions: b,
                inlineImages: A,
                recordCanvas: k,
                preserveWhiteSpace: K,
                onSerialize: T,
                onIframeLoad: O,
                iframeLoadTimeout: E,
                onStylesheetLoad: L,
                stylesheetLoadTimeout: D,
                keepIframeSrcFn: W,
              });
              n && O(e, n);
            }
          },
          E
        ),
      P.type === m.Element &&
        'link' === P.tagName &&
        'string' == typeof P.attributes.rel &&
        ('stylesheet' === P.attributes.rel ||
          ('preload' === P.attributes.rel &&
            'string' == typeof P.attributes.href &&
            'css' === M(P.attributes.href))) &&
        (function (e, t, n) {
          var r,
            o = !1;
          try {
            r = e.sheet;
          } catch (e) {
            return;
          }
          if (!r) {
            var a = setTimeout(function () {
              o || (t(), (o = !0));
            }, n);
            e.addEventListener('load', function () {
              clearTimeout(a), (o = !0), t();
            });
          }
        })(
          e,
          function () {
            if (L) {
              var t = J(e, {
                doc: n,
                mirror: r,
                blockClass: o,
                blockSelector: a,
                needsMask: Z,
                maskTextClass: i,
                maskTextSelector: s,
                skipChild: !1,
                inlineStylesheet: d,
                maskInputOptions: p,
                maskTextFn: h,
                maskInputFn: g,
                slimDOMOptions: I,
                dataURLOptions: b,
                inlineImages: A,
                recordCanvas: k,
                preserveWhiteSpace: K,
                onSerialize: T,
                onIframeLoad: O,
                iframeLoadTimeout: E,
                onStylesheetLoad: L,
                stylesheetLoadTimeout: D,
                keepIframeSrcFn: W,
              });
              t && L(e, t);
            }
          },
          D
        ),
      P
    );
  }
  function z(e, t) {
    var n =
        arguments.length > 2 && void 0 !== arguments[2]
          ? arguments[2]
          : document,
      r = { capture: !0, passive: !0 };
    return (
      n.addEventListener(e, t, r),
      function () {
        return n.removeEventListener(e, t, r);
      }
    );
  }
  var Q =
      'Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.',
    X = {
      map: {},
      getId: function () {
        return console.error(Q), -1;
      },
      getNode: function () {
        return console.error(Q), null;
      },
      removeNodeFromMap: function () {
        console.error(Q);
      },
      has: function () {
        return console.error(Q), !1;
      },
      reset: function () {
        console.error(Q);
      },
    };
  function $(e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      r = null,
      o = 0;
    return function () {
      for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++)
        i[s] = arguments[s];
      var u = Date.now();
      o || !1 !== n.leading || (o = u);
      var c = t - (u - o),
        l = this;
      c <= 0 || c > t
        ? (r && (clearTimeout(r), (r = null)), (o = u), e.apply(l, i))
        : r ||
          !1 === n.trailing ||
          (r = setTimeout(function () {
            (o = !1 === n.leading ? 0 : Date.now()), (r = null), e.apply(l, i);
          }, c));
    };
  }
  function ee(e, t, n, r) {
    var o =
        arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : window,
      a = o.Object.getOwnPropertyDescriptor(e, t);
    return (
      o.Object.defineProperty(
        e,
        t,
        r
          ? n
          : {
              set: function (e) {
                var t = this;
                setTimeout(function () {
                  n.set.call(t, e);
                }, 0),
                  a && a.set && a.set.call(this, e);
              },
            }
      ),
      function () {
        return ee(e, t, a || {}, !0);
      }
    );
  }
  function te(e, t, n) {
    try {
      if (!(t in e)) return function () {};
      var r = e[t],
        o = n(r);
      return (
        'function' == typeof o &&
          ((o.prototype = o.prototype || {}),
          Object.defineProperties(o, {
            __rrweb_original__: { enumerable: !1, value: r },
          })),
        (e[t] = o),
        function () {
          e[t] = r;
        }
      );
    } catch (e) {
      return function () {};
    }
  }
  'undefined' != typeof window &&
    window.Proxy &&
    window.Reflect &&
    (X = new Proxy(X, {
      get: function (e, t, n) {
        return 'map' === t && console.error(Q), Reflect.get(e, t, n);
      },
    }));
  var ne = Date.now;
  function re(e) {
    var t,
      n,
      r,
      o,
      a,
      i,
      s = e.document;
    return {
      left: s.scrollingElement
        ? s.scrollingElement.scrollLeft
        : void 0 !== e.pageXOffset
          ? e.pageXOffset
          : (null == s ? void 0 : s.documentElement.scrollLeft) ||
            (null ===
              (n =
                null === (t = null == s ? void 0 : s.body) || void 0 === t
                  ? void 0
                  : t.parentElement) || void 0 === n
              ? void 0
              : n.scrollLeft) ||
            (null === (r = null == s ? void 0 : s.body) || void 0 === r
              ? void 0
              : r.scrollLeft) ||
            0,
      top: s.scrollingElement
        ? s.scrollingElement.scrollTop
        : void 0 !== e.pageYOffset
          ? e.pageYOffset
          : (null == s ? void 0 : s.documentElement.scrollTop) ||
            (null ===
              (a =
                null === (o = null == s ? void 0 : s.body) || void 0 === o
                  ? void 0
                  : o.parentElement) || void 0 === a
              ? void 0
              : a.scrollTop) ||
            (null === (i = null == s ? void 0 : s.body) || void 0 === i
              ? void 0
              : i.scrollTop) ||
            0,
    };
  }
  function oe() {
    return (
      window.innerHeight ||
      (document.documentElement && document.documentElement.clientHeight) ||
      (document.body && document.body.clientHeight)
    );
  }
  function ae() {
    return (
      window.innerWidth ||
      (document.documentElement && document.documentElement.clientWidth) ||
      (document.body && document.body.clientWidth)
    );
  }
  function ie(e) {
    return e ? (e.nodeType === e.ELEMENT_NODE ? e : e.parentElement) : null;
  }
  function se(e, t, n, r) {
    if (!e) return !1;
    var o = ie(e);
    if (!o) return !1;
    try {
      if ('string' == typeof t) {
        if (o.classList.contains(t)) return !0;
        if (r && null !== o.closest('.' + t)) return !0;
      } else if (P(o, t, r)) return !0;
    } catch (e) {}
    if (n) {
      if (o.matches(n)) return !0;
      if (r && null !== o.closest(n)) return !0;
    }
    return !1;
  }
  function ue(e, t) {
    return t.getId(e) === R;
  }
  function ce(e, t) {
    if (v(e)) return !1;
    var n = t.getId(e);
    return (
      !t.has(n) ||
      ((!e.parentNode || e.parentNode.nodeType !== e.DOCUMENT_NODE) &&
        (!e.parentNode || ce(e.parentNode, t)))
    );
  }
  function le(e) {
    return Boolean(e.changedTouches);
  }
  function de(e, t) {
    return Boolean('IFRAME' === e.nodeName && t.getMeta(e));
  }
  function fe(e, t) {
    return Boolean(
      'LINK' === e.nodeName &&
        e.nodeType === e.ELEMENT_NODE &&
        e.getAttribute &&
        'stylesheet' === e.getAttribute('rel') &&
        t.getMeta(e)
    );
  }
  function pe(e) {
    return Boolean(null == e ? void 0 : e.shadowRoot);
  }
  /[1-9][0-9]{12}/.test(Date.now().toString()) ||
    (ne = function () {
      return new Date().getTime();
    });
  var he = (function () {
    function e() {
      s(this, e),
        (this.id = 1),
        (this.styleIDMap = new WeakMap()),
        (this.idStyleMap = new Map());
    }
    return (
      c(e, [
        {
          key: 'getId',
          value: function (e) {
            var t;
            return null !== (t = this.styleIDMap.get(e)) && void 0 !== t
              ? t
              : -1;
          },
        },
        {
          key: 'has',
          value: function (e) {
            return this.styleIDMap.has(e);
          },
        },
        {
          key: 'add',
          value: function (e, t) {
            return this.has(e)
              ? this.getId(e)
              : ((n = void 0 === t ? this.id++ : t),
                this.styleIDMap.set(e, n),
                this.idStyleMap.set(n, e),
                n);
            var n;
          },
        },
        {
          key: 'getStyle',
          value: function (e) {
            return this.idStyleMap.get(e) || null;
          },
        },
        {
          key: 'reset',
          value: function () {
            (this.styleIDMap = new WeakMap()),
              (this.idStyleMap = new Map()),
              (this.id = 1);
          },
        },
        {
          key: 'generateId',
          value: function () {
            return this.id++;
          },
        },
      ]),
      e
    );
  })();
  function ge(e) {
    var t,
      n,
      r = null;
    return (
      (null ===
        (n =
          null === (t = e.getRootNode) || void 0 === t ? void 0 : t.call(e)) ||
      void 0 === n
        ? void 0
        : n.nodeType) === Node.DOCUMENT_FRAGMENT_NODE &&
        e.getRootNode().host &&
        (r = e.getRootNode().host),
      r
    );
  }
  function me(e) {
    var t = e.ownerDocument;
    if (!t) return !1;
    var n = (function (e) {
      for (var t, n = e; (t = ge(n)); ) n = t;
      return n;
    })(e);
    return t.contains(n);
  }
  function ve(e) {
    var t = e.ownerDocument;
    return !!t && (t.contains(e) || me(e));
  }
  var ye = (function (e) {
      return (
        (e[(e.DomContentLoaded = 0)] = 'DomContentLoaded'),
        (e[(e.Load = 1)] = 'Load'),
        (e[(e.FullSnapshot = 2)] = 'FullSnapshot'),
        (e[(e.IncrementalSnapshot = 3)] = 'IncrementalSnapshot'),
        (e[(e.Meta = 4)] = 'Meta'),
        (e[(e.Custom = 5)] = 'Custom'),
        (e[(e.Plugin = 6)] = 'Plugin'),
        e
      );
    })(ye || {}),
    Ie = (function (e) {
      return (
        (e[(e.Mutation = 0)] = 'Mutation'),
        (e[(e.MouseMove = 1)] = 'MouseMove'),
        (e[(e.MouseInteraction = 2)] = 'MouseInteraction'),
        (e[(e.Scroll = 3)] = 'Scroll'),
        (e[(e.ViewportResize = 4)] = 'ViewportResize'),
        (e[(e.Input = 5)] = 'Input'),
        (e[(e.TouchMove = 6)] = 'TouchMove'),
        (e[(e.MediaInteraction = 7)] = 'MediaInteraction'),
        (e[(e.StyleSheetRule = 8)] = 'StyleSheetRule'),
        (e[(e.CanvasMutation = 9)] = 'CanvasMutation'),
        (e[(e.Font = 10)] = 'Font'),
        (e[(e.Log = 11)] = 'Log'),
        (e[(e.Drag = 12)] = 'Drag'),
        (e[(e.StyleDeclaration = 13)] = 'StyleDeclaration'),
        (e[(e.Selection = 14)] = 'Selection'),
        (e[(e.AdoptedStyleSheet = 15)] = 'AdoptedStyleSheet'),
        (e[(e.CustomElement = 16)] = 'CustomElement'),
        e
      );
    })(Ie || {}),
    Ce = (function (e) {
      return (
        (e[(e.MouseUp = 0)] = 'MouseUp'),
        (e[(e.MouseDown = 1)] = 'MouseDown'),
        (e[(e.Click = 2)] = 'Click'),
        (e[(e.ContextMenu = 3)] = 'ContextMenu'),
        (e[(e.DblClick = 4)] = 'DblClick'),
        (e[(e.Focus = 5)] = 'Focus'),
        (e[(e.Blur = 6)] = 'Blur'),
        (e[(e.TouchStart = 7)] = 'TouchStart'),
        (e[(e.TouchMove_Departed = 8)] = 'TouchMove_Departed'),
        (e[(e.TouchEnd = 9)] = 'TouchEnd'),
        (e[(e.TouchCancel = 10)] = 'TouchCancel'),
        e
      );
    })(Ce || {}),
    be = (function (e) {
      return (
        (e[(e.Mouse = 0)] = 'Mouse'),
        (e[(e.Pen = 1)] = 'Pen'),
        (e[(e.Touch = 2)] = 'Touch'),
        e
      );
    })(be || {}),
    Se = (function (e) {
      return (
        (e[(e['2D'] = 0)] = '2D'),
        (e[(e.WebGL = 1)] = 'WebGL'),
        (e[(e.WebGL2 = 2)] = 'WebGL2'),
        e
      );
    })(Se || {});
  function Ae(e) {
    return '__ln' in e;
  }
  var we,
    ke = (function () {
      function e() {
        s(this, e), (this.length = 0), (this.head = null), (this.tail = null);
      }
      return (
        c(e, [
          {
            key: 'get',
            value: function (e) {
              if (e >= this.length)
                throw new Error('Position outside of list range');
              for (var t = this.head, n = 0; n < e; n++)
                t = (null == t ? void 0 : t.next) || null;
              return t;
            },
          },
          {
            key: 'addNode',
            value: function (e) {
              var t = { value: e, previous: null, next: null };
              if (((e.__ln = t), e.previousSibling && Ae(e.previousSibling))) {
                var n = e.previousSibling.__ln.next;
                (t.next = n),
                  (t.previous = e.previousSibling.__ln),
                  (e.previousSibling.__ln.next = t),
                  n && (n.previous = t);
              } else if (
                e.nextSibling &&
                Ae(e.nextSibling) &&
                e.nextSibling.__ln.previous
              ) {
                var r = e.nextSibling.__ln.previous;
                (t.previous = r),
                  (t.next = e.nextSibling.__ln),
                  (e.nextSibling.__ln.previous = t),
                  r && (r.next = t);
              } else
                this.head && (this.head.previous = t),
                  (t.next = this.head),
                  (this.head = t);
              null === t.next && (this.tail = t), this.length++;
            },
          },
          {
            key: 'removeNode',
            value: function (e) {
              var t = e.__ln;
              this.head &&
                (t.previous
                  ? ((t.previous.next = t.next),
                    t.next
                      ? (t.next.previous = t.previous)
                      : (this.tail = t.previous))
                  : ((this.head = t.next),
                    this.head
                      ? (this.head.previous = null)
                      : (this.tail = null)),
                e.__ln && delete e.__ln,
                this.length--);
            },
          },
        ]),
        e
      );
    })(),
    Me = function (e, t) {
      return ''.concat(e, '@').concat(t);
    },
    Te = (function () {
      function e() {
        var t = this;
        s(this, e),
          (this.frozen = !1),
          (this.locked = !1),
          (this.texts = []),
          (this.attributes = []),
          (this.attributeMap = new WeakMap()),
          (this.removes = []),
          (this.mapRemoves = []),
          (this.movedMap = {}),
          (this.addedSet = new Set()),
          (this.movedSet = new Set()),
          (this.droppedSet = new Set()),
          (this.processMutations = function (e) {
            e.forEach(t.processMutation), t.emit();
          }),
          (this.emit = function () {
            if (!t.frozen && !t.locked) {
              for (
                var e = [],
                  n = new Set(),
                  r = new ke(),
                  o = function (e) {
                    for (var n = e, r = R; r === R; )
                      r = (n = n && n.nextSibling) && t.mirror.getId(n);
                    return r;
                  },
                  a = function (a) {
                    if (
                      a.parentNode &&
                      ve(a) &&
                      'TEXTAREA' !== a.parentNode.tagName
                    ) {
                      var i = v(a.parentNode)
                          ? t.mirror.getId(ge(a))
                          : t.mirror.getId(a.parentNode),
                        s = o(a);
                      if (-1 === i || -1 === s) return r.addNode(a);
                      var u = J(a, {
                        doc: t.doc,
                        mirror: t.mirror,
                        blockClass: t.blockClass,
                        blockSelector: t.blockSelector,
                        maskTextClass: t.maskTextClass,
                        maskTextSelector: t.maskTextSelector,
                        skipChild: !0,
                        newlyAddedElement: !0,
                        inlineStylesheet: t.inlineStylesheet,
                        maskInputOptions: t.maskInputOptions,
                        maskTextFn: t.maskTextFn,
                        maskInputFn: t.maskInputFn,
                        slimDOMOptions: t.slimDOMOptions,
                        dataURLOptions: t.dataURLOptions,
                        recordCanvas: t.recordCanvas,
                        inlineImages: t.inlineImages,
                        onSerialize: function (e) {
                          de(e, t.mirror) && t.iframeManager.addIframe(e),
                            fe(e, t.mirror) &&
                              t.stylesheetManager.trackLinkElement(e),
                            pe(a) &&
                              t.shadowDomManager.addShadowRoot(
                                a.shadowRoot,
                                t.doc
                              );
                        },
                        onIframeLoad: function (e, n) {
                          t.iframeManager.attachIframe(e, n),
                            t.shadowDomManager.observeAttachShadow(e);
                        },
                        onStylesheetLoad: function (e, n) {
                          t.stylesheetManager.attachLinkElement(e, n);
                        },
                      });
                      u &&
                        (e.push({ parentId: i, nextId: s, node: u }),
                        n.add(u.id));
                    }
                  };
                t.mapRemoves.length;

              )
                t.mirror.removeNodeFromMap(t.mapRemoves.shift());
              var i,
                s = g(t.movedSet);
              try {
                for (s.s(); !(i = s.n()).done; ) {
                  var u = i.value;
                  (Ne(t.removes, u, t.mirror) &&
                    !t.movedSet.has(u.parentNode)) ||
                    a(u);
                }
              } catch (e) {
                s.e(e);
              } finally {
                s.f();
              }
              var c,
                l = g(t.addedSet);
              try {
                for (l.s(); !(c = l.n()).done; ) {
                  var d = c.value;
                  Re(t.droppedSet, d) || Ne(t.removes, d, t.mirror)
                    ? Re(t.movedSet, d)
                      ? a(d)
                      : t.droppedSet.add(d)
                    : a(d);
                }
              } catch (e) {
                l.e(e);
              } finally {
                l.f();
              }
              for (var f = null; r.length; ) {
                var p = null;
                if (f) {
                  var h = t.mirror.getId(f.value.parentNode),
                    m = o(f.value);
                  -1 !== h && -1 !== m && (p = f);
                }
                if (!p)
                  for (var y = r.tail; y; ) {
                    var I = y;
                    if (((y = y.previous), I)) {
                      var C = t.mirror.getId(I.value.parentNode);
                      if (-1 === o(I.value)) continue;
                      if (-1 !== C) {
                        p = I;
                        break;
                      }
                      var b = I.value;
                      if (
                        b.parentNode &&
                        b.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE
                      ) {
                        var S = b.parentNode.host;
                        if (-1 !== t.mirror.getId(S)) {
                          p = I;
                          break;
                        }
                      }
                    }
                  }
                if (!p) {
                  for (; r.head; ) r.removeNode(r.head.value);
                  break;
                }
                (f = p.previous), r.removeNode(p.value), a(p.value);
              }
              var A = {
                texts: t.texts
                  .map(function (e) {
                    var n = e.node;
                    return (
                      n.parentNode &&
                        'TEXTAREA' === n.parentNode.tagName &&
                        t.genTextAreaValueMutation(n.parentNode),
                      { id: t.mirror.getId(n), value: e.value }
                    );
                  })
                  .filter(function (e) {
                    return !n.has(e.id);
                  })
                  .filter(function (e) {
                    return t.mirror.has(e.id);
                  }),
                attributes: t.attributes
                  .map(function (e) {
                    var n = e.attributes;
                    if ('string' == typeof n.style) {
                      var r = JSON.stringify(e.styleDiff),
                        o = JSON.stringify(e._unchangedStyles);
                      r.length < n.style.length &&
                        (r + o).split('var(').length ===
                          n.style.split('var(').length &&
                        (n.style = e.styleDiff);
                    }
                    return { id: t.mirror.getId(e.node), attributes: n };
                  })
                  .filter(function (e) {
                    return !n.has(e.id);
                  })
                  .filter(function (e) {
                    return t.mirror.has(e.id);
                  }),
                removes: t.removes,
                adds: e,
              };
              (A.texts.length ||
                A.attributes.length ||
                A.removes.length ||
                A.adds.length) &&
                ((t.texts = []),
                (t.attributes = []),
                (t.attributeMap = new WeakMap()),
                (t.removes = []),
                (t.addedSet = new Set()),
                (t.movedSet = new Set()),
                (t.droppedSet = new Set()),
                (t.movedMap = {}),
                t.mutationCb(A));
            }
          }),
          (this.genTextAreaValueMutation = function (e) {
            var n = t.attributeMap.get(e);
            n ||
              ((n = {
                node: e,
                attributes: {},
                styleDiff: {},
                _unchangedStyles: {},
              }),
              t.attributes.push(n),
              t.attributeMap.set(e, n)),
              (n.attributes.value = Array.from(e.childNodes, function (e) {
                return e.textContent || '';
              }).join(''));
          }),
          (this.processMutation = function (e) {
            if (!ue(e.target, t.mirror))
              switch (e.type) {
                case 'characterData':
                  var n = e.target.textContent;
                  se(e.target, t.blockClass, t.blockSelector, !1) ||
                    n === e.oldValue ||
                    t.texts.push({
                      value:
                        H(e.target, t.maskTextClass, t.maskTextSelector, !0) &&
                        n
                          ? t.maskTextFn
                            ? t.maskTextFn(n, ie(e.target))
                            : n.replace(/[\S]/g, '*')
                          : n,
                      node: e.target,
                    });
                  break;
                case 'attributes':
                  var r = e.target,
                    o = e.attributeName,
                    a = e.target.getAttribute(o);
                  if ('value' === o) {
                    var i = k(r);
                    a = S({
                      element: r,
                      maskInputOptions: t.maskInputOptions,
                      tagName: r.tagName,
                      type: i,
                      value: a,
                      maskInputFn: t.maskInputFn,
                    });
                  }
                  if (
                    se(e.target, t.blockClass, t.blockSelector, !1) ||
                    a === e.oldValue
                  )
                    return;
                  var s = t.attributeMap.get(e.target);
                  if (
                    'IFRAME' === r.tagName &&
                    'src' === o &&
                    !t.keepIframeSrcFn(a)
                  ) {
                    if (r.contentDocument) return;
                    o = 'rr_src';
                  }
                  if (
                    (s ||
                      ((s = {
                        node: e.target,
                        attributes: {},
                        styleDiff: {},
                        _unchangedStyles: {},
                      }),
                      t.attributes.push(s),
                      t.attributeMap.set(e.target, s)),
                    'type' === o &&
                      'INPUT' === r.tagName &&
                      'password' === (e.oldValue || '').toLowerCase() &&
                      r.setAttribute('data-rr-is-password', 'true'),
                    !j(r.tagName, o) &&
                      ((s.attributes[o] = _(t.doc, A(r.tagName), A(o), a)),
                      'style' === o))
                  ) {
                    if (!t.unattachedDoc)
                      try {
                        t.unattachedDoc =
                          document.implementation.createHTMLDocument();
                      } catch (e) {
                        t.unattachedDoc = t.doc;
                      }
                    var u = t.unattachedDoc.createElement('span');
                    e.oldValue && u.setAttribute('style', e.oldValue);
                    for (
                      var c = 0, l = Array.from(r.style);
                      c < l.length;
                      c++
                    ) {
                      var d = l[c],
                        f = r.style.getPropertyValue(d),
                        p = r.style.getPropertyPriority(d);
                      f !== u.style.getPropertyValue(d) ||
                      p !== u.style.getPropertyPriority(d)
                        ? (s.styleDiff[d] = '' === p ? f : [f, p])
                        : (s._unchangedStyles[d] = [f, p]);
                    }
                    for (
                      var h = 0, g = Array.from(u.style);
                      h < g.length;
                      h++
                    ) {
                      var m = g[h];
                      '' === r.style.getPropertyValue(m) &&
                        (s.styleDiff[m] = !1);
                    }
                  }
                  break;
                case 'childList':
                  if (se(e.target, t.blockClass, t.blockSelector, !0)) return;
                  if ('TEXTAREA' === e.target.tagName)
                    return void t.genTextAreaValueMutation(e.target);
                  e.addedNodes.forEach(function (n) {
                    return t.genAdds(n, e.target);
                  }),
                    e.removedNodes.forEach(function (n) {
                      var r = t.mirror.getId(n),
                        o = v(e.target)
                          ? t.mirror.getId(e.target.host)
                          : t.mirror.getId(e.target);
                      se(e.target, t.blockClass, t.blockSelector, !1) ||
                        ue(n, t.mirror) ||
                        !(function (e, t) {
                          return -1 !== t.getId(e);
                        })(n, t.mirror) ||
                        (t.addedSet.has(n)
                          ? (Oe(t.addedSet, n), t.droppedSet.add(n))
                          : (t.addedSet.has(e.target) && -1 === r) ||
                            ce(e.target, t.mirror) ||
                            (t.movedSet.has(n) && t.movedMap[Me(r, o)]
                              ? Oe(t.movedSet, n)
                              : t.removes.push({
                                  parentId: o,
                                  id: r,
                                  isShadow:
                                    !(!v(e.target) || !y(e.target)) || void 0,
                                })),
                        t.mapRemoves.push(n));
                    });
              }
          }),
          (this.genAdds = function (e, n) {
            if (
              !t.processedNodeManager.inOtherBuffer(e, t) &&
              !t.addedSet.has(e) &&
              !t.movedSet.has(e)
            ) {
              if (t.mirror.hasNode(e)) {
                if (ue(e, t.mirror)) return;
                t.movedSet.add(e);
                var r = null;
                n && t.mirror.hasNode(n) && (r = t.mirror.getId(n)),
                  r && -1 !== r && (t.movedMap[Me(t.mirror.getId(e), r)] = !0);
              } else t.addedSet.add(e), t.droppedSet.delete(e);
              se(e, t.blockClass, t.blockSelector, !1) ||
                (e.childNodes.forEach(function (e) {
                  return t.genAdds(e);
                }),
                pe(e) &&
                  e.shadowRoot.childNodes.forEach(function (n) {
                    t.processedNodeManager.add(n, t), t.genAdds(n, e);
                  }));
            }
          });
      }
      return (
        c(e, [
          {
            key: 'init',
            value: function (e) {
              var t = this;
              [
                'mutationCb',
                'blockClass',
                'blockSelector',
                'maskTextClass',
                'maskTextSelector',
                'inlineStylesheet',
                'maskInputOptions',
                'maskTextFn',
                'maskInputFn',
                'keepIframeSrcFn',
                'recordCanvas',
                'inlineImages',
                'slimDOMOptions',
                'dataURLOptions',
                'doc',
                'mirror',
                'iframeManager',
                'stylesheetManager',
                'shadowDomManager',
                'canvasManager',
                'processedNodeManager',
              ].forEach(function (n) {
                t[n] = e[n];
              });
            },
          },
          {
            key: 'freeze',
            value: function () {
              (this.frozen = !0), this.canvasManager.freeze();
            },
          },
          {
            key: 'unfreeze',
            value: function () {
              (this.frozen = !1), this.canvasManager.unfreeze(), this.emit();
            },
          },
          {
            key: 'isFrozen',
            value: function () {
              return this.frozen;
            },
          },
          {
            key: 'lock',
            value: function () {
              (this.locked = !0), this.canvasManager.lock();
            },
          },
          {
            key: 'unlock',
            value: function () {
              (this.locked = !1), this.canvasManager.unlock(), this.emit();
            },
          },
          {
            key: 'reset',
            value: function () {
              this.shadowDomManager.reset(), this.canvasManager.reset();
            },
          },
        ]),
        e
      );
    })();
  function Oe(e, t) {
    e.delete(t),
      t.childNodes.forEach(function (t) {
        return Oe(e, t);
      });
  }
  function Ne(e, t, n) {
    return 0 !== e.length && Ee(e, t, n);
  }
  function Ee(e, t, n) {
    var r = t.parentNode;
    if (!r) return !1;
    var o = n.getId(r);
    return (
      !!e.some(function (e) {
        return e.id === o;
      }) || Ee(e, r, n)
    );
  }
  function Re(e, t) {
    return 0 !== e.size && xe(e, t);
  }
  function xe(e, t) {
    var n = t.parentNode;
    return !!n && (!!e.has(n) || xe(e, n));
  }
  function Le(e) {
    we = e;
  }
  function Fe() {
    we = void 0;
  }
  var De = function (e) {
      if (!we) return e;
      return function () {
        try {
          return e.apply(void 0, arguments);
        } catch (e) {
          if (we && !0 === we(e)) return;
          throw e;
        }
      };
    },
    Be = [];
  function We(e) {
    try {
      if ('composedPath' in e) {
        var t = e.composedPath();
        if (t.length) return t[0];
      } else if ('path' in e && e.path.length) return e.path[0];
    } catch (e) {}
    return e && e.target;
  }
  function Ge(e, t) {
    var n,
      r,
      o = new Te();
    Be.push(o), o.init(e);
    var a = window.MutationObserver || window.__rrMutationObserver,
      i =
        null ===
          (r =
            null ===
              (n =
                null === window || void 0 === window ? void 0 : window.Zone) ||
            void 0 === n
              ? void 0
              : n.__symbol__) || void 0 === r
          ? void 0
          : r.call(n, 'MutationObserver');
    i && window[i] && (a = window[i]);
    var s = new a(De(o.processMutations.bind(o)));
    return (
      s.observe(t, {
        attributes: !0,
        attributeOldValue: !0,
        characterData: !0,
        characterDataOldValue: !0,
        childList: !0,
        subtree: !0,
      }),
      s
    );
  }
  function Ve(e) {
    var t = e.mouseInteractionCb,
      n = e.doc,
      r = e.mirror,
      o = e.blockClass,
      a = e.blockSelector,
      i = e.sampling;
    if (!1 === i.mouseInteraction) return function () {};
    var s =
        !0 === i.mouseInteraction || void 0 === i.mouseInteraction
          ? {}
          : i.mouseInteraction,
      u = [],
      c = null;
    return (
      Object.keys(Ce)
        .filter(function (e) {
          return (
            Number.isNaN(Number(e)) && !e.endsWith('_Departed') && !1 !== s[e]
          );
        })
        .forEach(function (e) {
          var i = A(e),
            s = (function (e) {
              return function (n) {
                var i = We(n);
                if (!se(i, o, a, !0)) {
                  var s = null,
                    u = e;
                  if ('pointerType' in n) {
                    switch (n.pointerType) {
                      case 'mouse':
                        s = be.Mouse;
                        break;
                      case 'touch':
                        s = be.Touch;
                        break;
                      case 'pen':
                        s = be.Pen;
                    }
                    s === be.Touch
                      ? Ce[e] === Ce.MouseDown
                        ? (u = 'TouchStart')
                        : Ce[e] === Ce.MouseUp && (u = 'TouchEnd')
                      : be.Pen;
                  } else le(n) && (s = be.Touch);
                  null !== s
                    ? ((c = s),
                      ((u.startsWith('Touch') && s === be.Touch) ||
                        (u.startsWith('Mouse') && s === be.Mouse)) &&
                        (s = null))
                    : Ce[e] === Ce.Click && ((s = c), (c = null));
                  var l = le(n) ? n.changedTouches[0] : n;
                  if (l) {
                    var d = r.getId(i),
                      f = l.clientX,
                      p = l.clientY;
                    De(t)(
                      Object.assign(
                        { type: Ce[u], id: d, x: f, y: p },
                        null !== s && { pointerType: s }
                      )
                    );
                  }
                }
              };
            })(e);
          if (window.PointerEvent)
            switch (Ce[e]) {
              case Ce.MouseDown:
              case Ce.MouseUp:
                i = i.replace('mouse', 'pointer');
                break;
              case Ce.TouchStart:
              case Ce.TouchEnd:
                return;
            }
          u.push(z(i, s, n));
        }),
      De(function () {
        u.forEach(function (e) {
          return e();
        });
      })
    );
  }
  function Ze(e) {
    var t = e.scrollCb,
      n = e.doc,
      r = e.mirror,
      o = e.blockClass,
      a = e.blockSelector,
      i = e.sampling;
    return z(
      'scroll',
      De(
        $(
          De(function (e) {
            var i = We(e);
            if (i && !se(i, o, a, !0)) {
              var s = r.getId(i);
              if (i === n && n.defaultView) {
                var u = re(n.defaultView);
                t({ id: s, x: u.left, y: u.top });
              } else t({ id: s, x: i.scrollLeft, y: i.scrollTop });
            }
          }),
          i.scroll || 100
        )
      ),
      n
    );
  }
  var Ue = ['INPUT', 'TEXTAREA', 'SELECT'],
    Ke = new WeakMap();
  function _e(e) {
    return (function (e, t) {
      if (
        (Ye('CSSGroupingRule') && e.parentRule instanceof CSSGroupingRule) ||
        (Ye('CSSMediaRule') && e.parentRule instanceof CSSMediaRule) ||
        (Ye('CSSSupportsRule') && e.parentRule instanceof CSSSupportsRule) ||
        (Ye('CSSConditionRule') && e.parentRule instanceof CSSConditionRule)
      ) {
        var n = Array.from(e.parentRule.cssRules).indexOf(e);
        t.unshift(n);
      } else if (e.parentStyleSheet) {
        var r = Array.from(e.parentStyleSheet.cssRules).indexOf(e);
        t.unshift(r);
      }
      return t;
    })(e, []);
  }
  function je(e, t, n) {
    var r, o;
    return e
      ? (e.ownerNode ? (r = t.getId(e.ownerNode)) : (o = n.getId(e)),
        { styleId: o, id: r })
      : {};
  }
  function Pe(e, t) {
    var n,
      r,
      o,
      a = e.mirror,
      i = e.stylesheetManager,
      s = null;
    s = '#document' === t.nodeName ? a.getId(t) : a.getId(t.host);
    var u =
        '#document' === t.nodeName
          ? null === (n = t.defaultView) || void 0 === n
            ? void 0
            : n.Document
          : null ===
                (o =
                  null === (r = t.ownerDocument) || void 0 === r
                    ? void 0
                    : r.defaultView) || void 0 === o
            ? void 0
            : o.ShadowRoot,
      c = (null == u ? void 0 : u.prototype)
        ? Object.getOwnPropertyDescriptor(
            null == u ? void 0 : u.prototype,
            'adoptedStyleSheets'
          )
        : void 0;
    return null !== s && -1 !== s && u && c
      ? (Object.defineProperty(t, 'adoptedStyleSheets', {
          configurable: c.configurable,
          enumerable: c.enumerable,
          get: function () {
            var e;
            return null === (e = c.get) || void 0 === e ? void 0 : e.call(this);
          },
          set: function (e) {
            var t,
              n =
                null === (t = c.set) || void 0 === t ? void 0 : t.call(this, e);
            if (null !== s && -1 !== s)
              try {
                i.adoptStyleSheets(e, s);
              } catch (e) {}
            return n;
          },
        }),
        De(function () {
          Object.defineProperty(t, 'adoptedStyleSheets', {
            configurable: c.configurable,
            enumerable: c.enumerable,
            get: c.get,
            set: c.set,
          });
        }))
      : function () {};
  }
  function He(e) {
    var t,
      n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      r = e.doc.defaultView;
    if (!r) return function () {};
    !(function (e, t) {
      var n = e.mutationCb,
        r = e.mousemoveCb,
        o = e.mouseInteractionCb,
        a = e.scrollCb,
        i = e.viewportResizeCb,
        s = e.inputCb,
        u = e.mediaInteractionCb,
        c = e.styleSheetRuleCb,
        l = e.styleDeclarationCb,
        d = e.canvasMutationCb,
        f = e.fontCb,
        p = e.selectionCb,
        h = e.customElementCb;
      (e.mutationCb = function () {
        t.mutation && t.mutation.apply(t, arguments),
          n.apply(void 0, arguments);
      }),
        (e.mousemoveCb = function () {
          t.mousemove && t.mousemove.apply(t, arguments),
            r.apply(void 0, arguments);
        }),
        (e.mouseInteractionCb = function () {
          t.mouseInteraction && t.mouseInteraction.apply(t, arguments),
            o.apply(void 0, arguments);
        }),
        (e.scrollCb = function () {
          t.scroll && t.scroll.apply(t, arguments), a.apply(void 0, arguments);
        }),
        (e.viewportResizeCb = function () {
          t.viewportResize && t.viewportResize.apply(t, arguments),
            i.apply(void 0, arguments);
        }),
        (e.inputCb = function () {
          t.input && t.input.apply(t, arguments), s.apply(void 0, arguments);
        }),
        (e.mediaInteractionCb = function () {
          t.mediaInteaction && t.mediaInteaction.apply(t, arguments),
            u.apply(void 0, arguments);
        }),
        (e.styleSheetRuleCb = function () {
          t.styleSheetRule && t.styleSheetRule.apply(t, arguments),
            c.apply(void 0, arguments);
        }),
        (e.styleDeclarationCb = function () {
          t.styleDeclaration && t.styleDeclaration.apply(t, arguments),
            l.apply(void 0, arguments);
        }),
        (e.canvasMutationCb = function () {
          t.canvasMutation && t.canvasMutation.apply(t, arguments),
            d.apply(void 0, arguments);
        }),
        (e.fontCb = function () {
          t.font && t.font.apply(t, arguments), f.apply(void 0, arguments);
        }),
        (e.selectionCb = function () {
          t.selection && t.selection.apply(t, arguments),
            p.apply(void 0, arguments);
        }),
        (e.customElementCb = function () {
          t.customElement && t.customElement.apply(t, arguments),
            h.apply(void 0, arguments);
        });
    })(e, n),
      e.recordDOM && (t = Ge(e, e.doc));
    var o = (function (e) {
        var t = e.mousemoveCb,
          n = e.sampling,
          r = e.doc,
          o = e.mirror;
        if (!1 === n.mousemove) return function () {};
        var a,
          i = 'number' == typeof n.mousemove ? n.mousemove : 50,
          s =
            'number' == typeof n.mousemoveCallback ? n.mousemoveCallback : 500,
          u = [],
          c = $(
            De(function (e) {
              var n = Date.now() - a;
              t(
                u.map(function (e) {
                  return (e.timeOffset -= n), e;
                }),
                e
              ),
                (u = []),
                (a = null);
            }),
            s
          ),
          l = De(
            $(
              De(function (e) {
                var t = We(e),
                  n = le(e) ? e.changedTouches[0] : e,
                  r = n.clientX,
                  i = n.clientY;
                a || (a = ne()),
                  u.push({ x: r, y: i, id: o.getId(t), timeOffset: ne() - a }),
                  c(
                    'undefined' != typeof DragEvent && e instanceof DragEvent
                      ? Ie.Drag
                      : e instanceof MouseEvent
                        ? Ie.MouseMove
                        : Ie.TouchMove
                  );
              }),
              i,
              { trailing: !1 }
            )
          ),
          d = [z('mousemove', l, r), z('touchmove', l, r), z('drag', l, r)];
        return De(function () {
          d.forEach(function (e) {
            return e();
          });
        });
      })(e),
      a = Ve(e),
      i = Ze(e),
      s = (function (e, t) {
        var n = e.viewportResizeCb,
          r = t.win,
          o = -1,
          a = -1;
        return z(
          'resize',
          De(
            $(
              De(function () {
                var e = oe(),
                  t = ae();
                (o === e && a === t) ||
                  (n({ width: Number(t), height: Number(e) }),
                  (o = e),
                  (a = t));
              }),
              200
            )
          ),
          r
        );
      })(e, { win: r }),
      u = (function (e) {
        var t = e.inputCb,
          n = e.doc,
          r = e.mirror,
          o = e.blockClass,
          a = e.blockSelector,
          i = e.ignoreClass,
          s = e.ignoreSelector,
          u = e.maskInputOptions,
          c = e.maskInputFn,
          l = e.sampling,
          d = e.userTriggeredOnInput;
        function p(e) {
          var t = We(e),
            r = e.isTrusted,
            l = t && t.tagName;
          if (
            (t && 'OPTION' === l && (t = t.parentElement),
            t &&
              l &&
              !(Ue.indexOf(l) < 0) &&
              !se(t, o, a, !0) &&
              !(t.classList.contains(i) || (s && t.matches(s))))
          ) {
            var f = t.value,
              p = !1,
              g = k(t) || '';
            'radio' === g || 'checkbox' === g
              ? (p = t.checked)
              : (u[l.toLowerCase()] || u[g]) &&
                (f = S({
                  element: t,
                  maskInputOptions: u,
                  tagName: l,
                  type: g,
                  value: f,
                  maskInputFn: c,
                })),
              h(
                t,
                d
                  ? { text: f, isChecked: p, userTriggered: r }
                  : { text: f, isChecked: p }
              );
            var m = t.name;
            'radio' === g &&
              m &&
              p &&
              n
                .querySelectorAll('input[type="radio"][name="'.concat(m, '"]'))
                .forEach(function (e) {
                  if (e !== t) {
                    var n = e.value;
                    h(
                      e,
                      d
                        ? { text: n, isChecked: !p, userTriggered: !1 }
                        : { text: n, isChecked: !p }
                    );
                  }
                });
          }
        }
        function h(e, n) {
          var o = Ke.get(e);
          if (!o || o.text !== n.text || o.isChecked !== n.isChecked) {
            Ke.set(e, n);
            var a = r.getId(e);
            De(t)(Object.assign(Object.assign({}, n), { id: a }));
          }
        }
        var g = ('last' === l.input ? ['change'] : ['input', 'change']).map(
            function (e) {
              return z(e, De(p), n);
            }
          ),
          m = n.defaultView;
        if (!m)
          return function () {
            g.forEach(function (e) {
              return e();
            });
          };
        var v = m.Object.getOwnPropertyDescriptor(
            m.HTMLInputElement.prototype,
            'value'
          ),
          y = [
            [m.HTMLInputElement.prototype, 'value'],
            [m.HTMLInputElement.prototype, 'checked'],
            [m.HTMLSelectElement.prototype, 'value'],
            [m.HTMLTextAreaElement.prototype, 'value'],
            [m.HTMLSelectElement.prototype, 'selectedIndex'],
            [m.HTMLOptionElement.prototype, 'selected'],
          ];
        return (
          v &&
            v.set &&
            g.push.apply(
              g,
              f(
                y.map(function (e) {
                  return ee(
                    e[0],
                    e[1],
                    {
                      set: function () {
                        De(p)({ target: this, isTrusted: !1 });
                      },
                    },
                    !1,
                    m
                  );
                })
              )
            ),
          De(function () {
            g.forEach(function (e) {
              return e();
            });
          })
        );
      })(e),
      c = (function (e) {
        var t = e.mediaInteractionCb,
          n = e.blockClass,
          r = e.blockSelector,
          o = e.mirror,
          a = e.sampling,
          i = e.doc,
          s = De(function (e) {
            return $(
              De(function (a) {
                var i = We(a);
                if (i && !se(i, n, r, !0)) {
                  var s = i.currentTime,
                    u = i.volume,
                    c = i.muted,
                    l = i.playbackRate,
                    d = i.loop;
                  t({
                    type: e,
                    id: o.getId(i),
                    currentTime: s,
                    volume: u,
                    muted: c,
                    playbackRate: l,
                    loop: d,
                  });
                }
              }),
              a.media || 500
            );
          }),
          u = [
            z('play', s(0), i),
            z('pause', s(1), i),
            z('seeked', s(2), i),
            z('volumechange', s(3), i),
            z('ratechange', s(4), i),
          ];
        return De(function () {
          u.forEach(function (e) {
            return e();
          });
        });
      })(e),
      l = function () {},
      p = function () {},
      h = function () {},
      m = function () {};
    e.recordDOM &&
      ((l = (function (e, t) {
        var n = e.styleSheetRuleCb,
          r = e.mirror,
          o = e.stylesheetManager,
          a = t.win;
        if (!a.CSSStyleSheet || !a.CSSStyleSheet.prototype)
          return function () {};
        var i = a.CSSStyleSheet.prototype.insertRule;
        a.CSSStyleSheet.prototype.insertRule = new Proxy(i, {
          apply: De(function (e, t, a) {
            var i = d(a, 2),
              s = i[0],
              u = i[1],
              c = je(t, r, o.styleMirror),
              l = c.id,
              f = c.styleId;
            return (
              ((l && -1 !== l) || (f && -1 !== f)) &&
                n({ id: l, styleId: f, adds: [{ rule: s, index: u }] }),
              e.apply(t, a)
            );
          }),
        });
        var s,
          u,
          c = a.CSSStyleSheet.prototype.deleteRule;
        (a.CSSStyleSheet.prototype.deleteRule = new Proxy(c, {
          apply: De(function (e, t, a) {
            var i = d(a, 1)[0],
              s = je(t, r, o.styleMirror),
              u = s.id,
              c = s.styleId;
            return (
              ((u && -1 !== u) || (c && -1 !== c)) &&
                n({ id: u, styleId: c, removes: [{ index: i }] }),
              e.apply(t, a)
            );
          }),
        })),
          a.CSSStyleSheet.prototype.replace &&
            ((s = a.CSSStyleSheet.prototype.replace),
            (a.CSSStyleSheet.prototype.replace = new Proxy(s, {
              apply: De(function (e, t, a) {
                var i = d(a, 1)[0],
                  s = je(t, r, o.styleMirror),
                  u = s.id,
                  c = s.styleId;
                return (
                  ((u && -1 !== u) || (c && -1 !== c)) &&
                    n({ id: u, styleId: c, replace: i }),
                  e.apply(t, a)
                );
              }),
            }))),
          a.CSSStyleSheet.prototype.replaceSync &&
            ((u = a.CSSStyleSheet.prototype.replaceSync),
            (a.CSSStyleSheet.prototype.replaceSync = new Proxy(u, {
              apply: De(function (e, t, a) {
                var i = d(a, 1)[0],
                  s = je(t, r, o.styleMirror),
                  u = s.id,
                  c = s.styleId;
                return (
                  ((u && -1 !== u) || (c && -1 !== c)) &&
                    n({ id: u, styleId: c, replaceSync: i }),
                  e.apply(t, a)
                );
              }),
            })));
        var l = {};
        qe('CSSGroupingRule')
          ? (l.CSSGroupingRule = a.CSSGroupingRule)
          : (qe('CSSMediaRule') && (l.CSSMediaRule = a.CSSMediaRule),
            qe('CSSConditionRule') && (l.CSSConditionRule = a.CSSConditionRule),
            qe('CSSSupportsRule') && (l.CSSSupportsRule = a.CSSSupportsRule));
        var p = {};
        return (
          Object.entries(l).forEach(function (e) {
            var t = d(e, 2),
              a = t[0],
              i = t[1];
            (p[a] = {
              insertRule: i.prototype.insertRule,
              deleteRule: i.prototype.deleteRule,
            }),
              (i.prototype.insertRule = new Proxy(p[a].insertRule, {
                apply: De(function (e, t, a) {
                  var i = d(a, 2),
                    s = i[0],
                    u = i[1],
                    c = je(t.parentStyleSheet, r, o.styleMirror),
                    l = c.id,
                    p = c.styleId;
                  return (
                    ((l && -1 !== l) || (p && -1 !== p)) &&
                      n({
                        id: l,
                        styleId: p,
                        adds: [
                          { rule: s, index: [].concat(f(_e(t)), [u || 0]) },
                        ],
                      }),
                    e.apply(t, a)
                  );
                }),
              })),
              (i.prototype.deleteRule = new Proxy(p[a].deleteRule, {
                apply: De(function (e, t, a) {
                  var i = d(a, 1)[0],
                    s = je(t.parentStyleSheet, r, o.styleMirror),
                    u = s.id,
                    c = s.styleId;
                  return (
                    ((u && -1 !== u) || (c && -1 !== c)) &&
                      n({
                        id: u,
                        styleId: c,
                        removes: [{ index: [].concat(f(_e(t)), [i]) }],
                      }),
                    e.apply(t, a)
                  );
                }),
              }));
          }),
          De(function () {
            (a.CSSStyleSheet.prototype.insertRule = i),
              (a.CSSStyleSheet.prototype.deleteRule = c),
              s && (a.CSSStyleSheet.prototype.replace = s),
              u && (a.CSSStyleSheet.prototype.replaceSync = u),
              Object.entries(l).forEach(function (e) {
                var t = d(e, 2),
                  n = t[0],
                  r = t[1];
                (r.prototype.insertRule = p[n].insertRule),
                  (r.prototype.deleteRule = p[n].deleteRule);
              });
          })
        );
      })(e, { win: r })),
      (p = Pe(e, e.doc)),
      (h = (function (e, t) {
        var n = e.styleDeclarationCb,
          r = e.mirror,
          o = e.ignoreCSSAttributes,
          a = e.stylesheetManager,
          i = t.win,
          s = i.CSSStyleDeclaration.prototype.setProperty;
        i.CSSStyleDeclaration.prototype.setProperty = new Proxy(s, {
          apply: De(function (e, t, i) {
            var u,
              c = d(i, 3),
              l = c[0],
              f = c[1],
              p = c[2];
            if (o.has(l)) return s.apply(t, [l, f, p]);
            var h = je(
                null === (u = t.parentRule) || void 0 === u
                  ? void 0
                  : u.parentStyleSheet,
                r,
                a.styleMirror
              ),
              g = h.id,
              m = h.styleId;
            return (
              ((g && -1 !== g) || (m && -1 !== m)) &&
                n({
                  id: g,
                  styleId: m,
                  set: { property: l, value: f, priority: p },
                  index: _e(t.parentRule),
                }),
              e.apply(t, i)
            );
          }),
        });
        var u = i.CSSStyleDeclaration.prototype.removeProperty;
        return (
          (i.CSSStyleDeclaration.prototype.removeProperty = new Proxy(u, {
            apply: De(function (e, t, i) {
              var s,
                c = d(i, 1)[0];
              if (o.has(c)) return u.apply(t, [c]);
              var l = je(
                  null === (s = t.parentRule) || void 0 === s
                    ? void 0
                    : s.parentStyleSheet,
                  r,
                  a.styleMirror
                ),
                f = l.id,
                p = l.styleId;
              return (
                ((f && -1 !== f) || (p && -1 !== p)) &&
                  n({
                    id: f,
                    styleId: p,
                    remove: { property: c },
                    index: _e(t.parentRule),
                  }),
                e.apply(t, i)
              );
            }),
          })),
          De(function () {
            (i.CSSStyleDeclaration.prototype.setProperty = s),
              (i.CSSStyleDeclaration.prototype.removeProperty = u);
          })
        );
      })(e, { win: r })),
      e.collectFonts &&
        (m = (function (e) {
          var t = e.fontCb,
            n = e.doc,
            r = n.defaultView;
          if (!r) return function () {};
          var o = [],
            a = new WeakMap(),
            i = r.FontFace;
          r.FontFace = function (e, t, n) {
            var r = new i(e, t, n);
            return (
              a.set(r, {
                family: e,
                buffer: 'string' != typeof t,
                descriptors: n,
                fontSource:
                  'string' == typeof t
                    ? t
                    : JSON.stringify(Array.from(new Uint8Array(t))),
              }),
              r
            );
          };
          var s = te(n.fonts, 'add', function (e) {
            return function (n) {
              return (
                setTimeout(
                  De(function () {
                    var e = a.get(n);
                    e && (t(e), a.delete(n));
                  }),
                  0
                ),
                e.apply(this, [n])
              );
            };
          });
          return (
            o.push(function () {
              r.FontFace = i;
            }),
            o.push(s),
            De(function () {
              o.forEach(function (e) {
                return e();
              });
            })
          );
        })(e)));
    var v,
      y = (function (e) {
        var t = e.doc,
          n = e.mirror,
          r = e.blockClass,
          o = e.blockSelector,
          a = e.selectionCb,
          i = !0,
          s = De(function () {
            var e = t.getSelection();
            if (!(!e || (i && (null == e ? void 0 : e.isCollapsed)))) {
              i = e.isCollapsed || !1;
              for (var s = [], u = e.rangeCount || 0, c = 0; c < u; c++) {
                var l = e.getRangeAt(c),
                  d = l.startContainer,
                  f = l.startOffset,
                  p = l.endContainer,
                  h = l.endOffset;
                se(d, r, o, !0) ||
                  se(p, r, o, !0) ||
                  s.push({
                    start: n.getId(d),
                    startOffset: f,
                    end: n.getId(p),
                    endOffset: h,
                  });
              }
              a({ ranges: s });
            }
          });
        return s(), z('selectionchange', s);
      })(e),
      I = (function (e) {
        var t = e.doc,
          n = e.customElementCb,
          r = t.defaultView;
        return r && r.customElements
          ? te(r.customElements, 'define', function (e) {
              return function (t, r, o) {
                try {
                  n({ define: { name: t } });
                } catch (e) {
                  console.warn('Custom element callback failed for '.concat(t));
                }
                return e.apply(this, [t, r, o]);
              };
            })
          : function () {};
      })(e),
      C = [],
      b = g(e.plugins);
    try {
      for (b.s(); !(v = b.n()).done; ) {
        var A = v.value;
        C.push(A.observer(A.callback, r, A.options));
      }
    } catch (e) {
      b.e(e);
    } finally {
      b.f();
    }
    return De(function () {
      Be.forEach(function (e) {
        return e.reset();
      }),
        null == t || t.disconnect(),
        o(),
        a(),
        i(),
        s(),
        u(),
        c(),
        l(),
        p(),
        h(),
        m(),
        y(),
        I(),
        C.forEach(function (e) {
          return e();
        });
    });
  }
  function Ye(e) {
    return void 0 !== window[e];
  }
  function qe(e) {
    return Boolean(
      void 0 !== window[e] &&
        window[e].prototype &&
        'insertRule' in window[e].prototype &&
        'deleteRule' in window[e].prototype
    );
  }
  var Je = (function () {
      function e(t) {
        s(this, e),
          (this.generateIdFn = t),
          (this.iframeIdToRemoteIdMap = new WeakMap()),
          (this.iframeRemoteIdToIdMap = new WeakMap());
      }
      return (
        c(e, [
          {
            key: 'getId',
            value: function (e, t, n, r) {
              var o = n || this.getIdToRemoteIdMap(e),
                a = r || this.getRemoteIdToIdMap(e),
                i = o.get(t);
              return (
                i || ((i = this.generateIdFn()), o.set(t, i), a.set(i, t)), i
              );
            },
          },
          {
            key: 'getIds',
            value: function (e, t) {
              var n = this,
                r = this.getIdToRemoteIdMap(e),
                o = this.getRemoteIdToIdMap(e);
              return t.map(function (t) {
                return n.getId(e, t, r, o);
              });
            },
          },
          {
            key: 'getRemoteId',
            value: function (e, t, n) {
              var r = n || this.getRemoteIdToIdMap(e);
              if ('number' != typeof t) return t;
              var o = r.get(t);
              return o || -1;
            },
          },
          {
            key: 'getRemoteIds',
            value: function (e, t) {
              var n = this,
                r = this.getRemoteIdToIdMap(e);
              return t.map(function (t) {
                return n.getRemoteId(e, t, r);
              });
            },
          },
          {
            key: 'reset',
            value: function (e) {
              if (!e)
                return (
                  (this.iframeIdToRemoteIdMap = new WeakMap()),
                  void (this.iframeRemoteIdToIdMap = new WeakMap())
                );
              this.iframeIdToRemoteIdMap.delete(e),
                this.iframeRemoteIdToIdMap.delete(e);
            },
          },
          {
            key: 'getIdToRemoteIdMap',
            value: function (e) {
              var t = this.iframeIdToRemoteIdMap.get(e);
              return (
                t || ((t = new Map()), this.iframeIdToRemoteIdMap.set(e, t)), t
              );
            },
          },
          {
            key: 'getRemoteIdToIdMap',
            value: function (e) {
              var t = this.iframeRemoteIdToIdMap.get(e);
              return (
                t || ((t = new Map()), this.iframeRemoteIdToIdMap.set(e, t)), t
              );
            },
          },
        ]),
        e
      );
    })(),
    ze = (function () {
      function e(t) {
        s(this, e),
          (this.iframes = new WeakMap()),
          (this.crossOriginIframeMap = new WeakMap()),
          (this.crossOriginIframeMirror = new Je(x)),
          (this.crossOriginIframeRootIdMap = new WeakMap()),
          (this.mutationCb = t.mutationCb),
          (this.wrappedEmit = t.wrappedEmit),
          (this.stylesheetManager = t.stylesheetManager),
          (this.recordCrossOriginIframes = t.recordCrossOriginIframes),
          (this.crossOriginIframeStyleMirror = new Je(
            this.stylesheetManager.styleMirror.generateId.bind(
              this.stylesheetManager.styleMirror
            )
          )),
          (this.mirror = t.mirror),
          this.recordCrossOriginIframes &&
            window.addEventListener('message', this.handleMessage.bind(this));
      }
      return (
        c(e, [
          {
            key: 'addIframe',
            value: function (e) {
              this.iframes.set(e, !0),
                e.contentWindow &&
                  this.crossOriginIframeMap.set(e.contentWindow, e);
            },
          },
          {
            key: 'addLoadListener',
            value: function (e) {
              this.loadListener = e;
            },
          },
          {
            key: 'attachIframe',
            value: function (e, t) {
              var n;
              this.mutationCb({
                adds: [
                  { parentId: this.mirror.getId(e), nextId: null, node: t },
                ],
                removes: [],
                texts: [],
                attributes: [],
                isAttachIframe: !0,
              }),
                null === (n = this.loadListener) ||
                  void 0 === n ||
                  n.call(this, e),
                e.contentDocument &&
                  e.contentDocument.adoptedStyleSheets &&
                  e.contentDocument.adoptedStyleSheets.length > 0 &&
                  this.stylesheetManager.adoptStyleSheets(
                    e.contentDocument.adoptedStyleSheets,
                    this.mirror.getId(e.contentDocument)
                  );
            },
          },
          {
            key: 'handleMessage',
            value: function (e) {
              var t = e;
              if (
                'rrweb' === t.data.type &&
                t.origin === t.data.origin &&
                e.source
              ) {
                var n = this.crossOriginIframeMap.get(e.source);
                if (n) {
                  var r = this.transformCrossOriginEvent(n, t.data.event);
                  r && this.wrappedEmit(r, t.data.isCheckout);
                }
              }
            },
          },
          {
            key: 'transformCrossOriginEvent',
            value: function (e, t) {
              var n,
                r = this;
              switch (t.type) {
                case ye.FullSnapshot:
                  this.crossOriginIframeMirror.reset(e),
                    this.crossOriginIframeStyleMirror.reset(e),
                    this.replaceIdOnNode(t.data.node, e);
                  var o = t.data.node.id;
                  return (
                    this.crossOriginIframeRootIdMap.set(e, o),
                    this.patchRootIdOnNode(t.data.node, o),
                    {
                      timestamp: t.timestamp,
                      type: ye.IncrementalSnapshot,
                      data: {
                        source: Ie.Mutation,
                        adds: [
                          {
                            parentId: this.mirror.getId(e),
                            nextId: null,
                            node: t.data.node,
                          },
                        ],
                        removes: [],
                        texts: [],
                        attributes: [],
                        isAttachIframe: !0,
                      },
                    }
                  );
                case ye.Meta:
                case ye.Load:
                case ye.DomContentLoaded:
                  return !1;
                case ye.Plugin:
                  return t;
                case ye.Custom:
                  return (
                    this.replaceIds(t.data.payload, e, [
                      'id',
                      'parentId',
                      'previousId',
                      'nextId',
                    ]),
                    t
                  );
                case ye.IncrementalSnapshot:
                  switch (t.data.source) {
                    case Ie.Mutation:
                      return (
                        t.data.adds.forEach(function (t) {
                          r.replaceIds(t, e, [
                            'parentId',
                            'nextId',
                            'previousId',
                          ]),
                            r.replaceIdOnNode(t.node, e);
                          var n = r.crossOriginIframeRootIdMap.get(e);
                          n && r.patchRootIdOnNode(t.node, n);
                        }),
                        t.data.removes.forEach(function (t) {
                          r.replaceIds(t, e, ['parentId', 'id']);
                        }),
                        t.data.attributes.forEach(function (t) {
                          r.replaceIds(t, e, ['id']);
                        }),
                        t.data.texts.forEach(function (t) {
                          r.replaceIds(t, e, ['id']);
                        }),
                        t
                      );
                    case Ie.Drag:
                    case Ie.TouchMove:
                    case Ie.MouseMove:
                      return (
                        t.data.positions.forEach(function (t) {
                          r.replaceIds(t, e, ['id']);
                        }),
                        t
                      );
                    case Ie.ViewportResize:
                      return !1;
                    case Ie.MediaInteraction:
                    case Ie.MouseInteraction:
                    case Ie.Scroll:
                    case Ie.CanvasMutation:
                    case Ie.Input:
                      return this.replaceIds(t.data, e, ['id']), t;
                    case Ie.StyleSheetRule:
                    case Ie.StyleDeclaration:
                      return (
                        this.replaceIds(t.data, e, ['id']),
                        this.replaceStyleIds(t.data, e, ['styleId']),
                        t
                      );
                    case Ie.Font:
                      return t;
                    case Ie.Selection:
                      return (
                        t.data.ranges.forEach(function (t) {
                          r.replaceIds(t, e, ['start', 'end']);
                        }),
                        t
                      );
                    case Ie.AdoptedStyleSheet:
                      return (
                        this.replaceIds(t.data, e, ['id']),
                        this.replaceStyleIds(t.data, e, ['styleIds']),
                        null === (n = t.data.styles) ||
                          void 0 === n ||
                          n.forEach(function (t) {
                            r.replaceStyleIds(t, e, ['styleId']);
                          }),
                        t
                      );
                  }
              }
              return !1;
            },
          },
          {
            key: 'replace',
            value: function (e, t, n, r) {
              var o,
                a = g(r);
              try {
                for (a.s(); !(o = a.n()).done; ) {
                  var i = o.value;
                  (Array.isArray(t[i]) || 'number' == typeof t[i]) &&
                    (Array.isArray(t[i])
                      ? (t[i] = e.getIds(n, t[i]))
                      : (t[i] = e.getId(n, t[i])));
                }
              } catch (e) {
                a.e(e);
              } finally {
                a.f();
              }
              return t;
            },
          },
          {
            key: 'replaceIds',
            value: function (e, t, n) {
              return this.replace(this.crossOriginIframeMirror, e, t, n);
            },
          },
          {
            key: 'replaceStyleIds',
            value: function (e, t, n) {
              return this.replace(this.crossOriginIframeStyleMirror, e, t, n);
            },
          },
          {
            key: 'replaceIdOnNode',
            value: function (e, t) {
              var n = this;
              this.replaceIds(e, t, ['id', 'rootId']),
                'childNodes' in e &&
                  e.childNodes.forEach(function (e) {
                    n.replaceIdOnNode(e, t);
                  });
            },
          },
          {
            key: 'patchRootIdOnNode',
            value: function (e, t) {
              var n = this;
              e.type === m.Document || e.rootId || (e.rootId = t),
                'childNodes' in e &&
                  e.childNodes.forEach(function (e) {
                    n.patchRootIdOnNode(e, t);
                  });
            },
          },
        ]),
        e
      );
    })(),
    Qe = (function () {
      function e(t) {
        s(this, e),
          (this.shadowDoms = new WeakSet()),
          (this.restoreHandlers = []),
          (this.mutationCb = t.mutationCb),
          (this.scrollCb = t.scrollCb),
          (this.bypassOptions = t.bypassOptions),
          (this.mirror = t.mirror),
          this.init();
      }
      return (
        c(e, [
          {
            key: 'init',
            value: function () {
              this.reset(), this.patchAttachShadow(Element, document);
            },
          },
          {
            key: 'addShadowRoot',
            value: function (e, t) {
              var n = this;
              if (y(e) && !this.shadowDoms.has(e)) {
                this.shadowDoms.add(e);
                var r = Ge(
                  Object.assign(Object.assign({}, this.bypassOptions), {
                    doc: t,
                    mutationCb: this.mutationCb,
                    mirror: this.mirror,
                    shadowDomManager: this,
                  }),
                  e
                );
                this.restoreHandlers.push(function () {
                  return r.disconnect();
                }),
                  this.restoreHandlers.push(
                    Ze(
                      Object.assign(Object.assign({}, this.bypassOptions), {
                        scrollCb: this.scrollCb,
                        doc: e,
                        mirror: this.mirror,
                      })
                    )
                  ),
                  setTimeout(function () {
                    e.adoptedStyleSheets &&
                      e.adoptedStyleSheets.length > 0 &&
                      n.bypassOptions.stylesheetManager.adoptStyleSheets(
                        e.adoptedStyleSheets,
                        n.mirror.getId(e.host)
                      ),
                      n.restoreHandlers.push(
                        Pe(
                          {
                            mirror: n.mirror,
                            stylesheetManager:
                              n.bypassOptions.stylesheetManager,
                          },
                          e
                        )
                      );
                  }, 0);
              }
            },
          },
          {
            key: 'observeAttachShadow',
            value: function (e) {
              e.contentWindow &&
                e.contentDocument &&
                this.patchAttachShadow(
                  e.contentWindow.Element,
                  e.contentDocument
                );
            },
          },
          {
            key: 'patchAttachShadow',
            value: function (e, t) {
              var n = this;
              this.restoreHandlers.push(
                te(e.prototype, 'attachShadow', function (e) {
                  return function (r) {
                    var o = e.call(this, r);
                    return (
                      this.shadowRoot &&
                        ve(this) &&
                        n.addShadowRoot(this.shadowRoot, t),
                      o
                    );
                  };
                })
              );
            },
          },
          {
            key: 'reset',
            value: function () {
              this.restoreHandlers.forEach(function (e) {
                try {
                  e();
                } catch (e) {}
              }),
                (this.restoreHandlers = []),
                (this.shadowDoms = new WeakSet());
            },
          },
        ]),
        e
      );
    })();
  function Xe(e, t, n, r) {
    return new (n || (n = Promise))(function (o, a) {
      function i(e) {
        try {
          u(r.next(e));
        } catch (e) {
          a(e);
        }
      }
      function s(e) {
        try {
          u(r.throw(e));
        } catch (e) {
          a(e);
        }
      }
      function u(e) {
        var t;
        e.done
          ? o(e.value)
          : ((t = e.value),
            t instanceof n
              ? t
              : new n(function (e) {
                  e(t);
                })).then(i, s);
      }
      u((r = r.apply(e, t || [])).next());
    });
  }
  for (
    var $e = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
      et = 'undefined' == typeof Uint8Array ? [] : new Uint8Array(256),
      tt = 0;
    tt < 64;
    tt++
  )
    et[$e.charCodeAt(tt)] = tt;
  var nt = new Map();
  var rt = function (e, t, n) {
    if (e && (it(e, t) || 'object' === o(e))) {
      var r = (function (e, t) {
          var n = nt.get(e);
          return (
            n || ((n = new Map()), nt.set(e, n)),
            n.has(t) || n.set(t, []),
            n.get(t)
          );
        })(n, e.constructor.name),
        a = r.indexOf(e);
      return -1 === a && ((a = r.length), r.push(e)), a;
    }
  };
  function ot(e, t, n) {
    if (e instanceof Array)
      return e.map(function (e) {
        return ot(e, t, n);
      });
    if (null === e) return e;
    if (
      e instanceof Float32Array ||
      e instanceof Float64Array ||
      e instanceof Int32Array ||
      e instanceof Uint32Array ||
      e instanceof Uint8Array ||
      e instanceof Uint16Array ||
      e instanceof Int16Array ||
      e instanceof Int8Array ||
      e instanceof Uint8ClampedArray
    )
      return { rr_type: e.constructor.name, args: [Object.values(e)] };
    if (e instanceof ArrayBuffer) {
      var r = e.constructor.name,
        a = (function (e) {
          var t,
            n = new Uint8Array(e),
            r = n.length,
            o = '';
          for (t = 0; t < r; t += 3)
            (o += $e[n[t] >> 2]),
              (o += $e[((3 & n[t]) << 4) | (n[t + 1] >> 4)]),
              (o += $e[((15 & n[t + 1]) << 2) | (n[t + 2] >> 6)]),
              (o += $e[63 & n[t + 2]]);
          return (
            r % 3 == 2
              ? (o = o.substring(0, o.length - 1) + '=')
              : r % 3 == 1 && (o = o.substring(0, o.length - 2) + '=='),
            o
          );
        })(e);
      return { rr_type: r, base64: a };
    }
    if (e instanceof DataView)
      return {
        rr_type: e.constructor.name,
        args: [ot(e.buffer, t, n), e.byteOffset, e.byteLength],
      };
    if (e instanceof HTMLImageElement)
      return { rr_type: e.constructor.name, src: e.src };
    if (e instanceof HTMLCanvasElement) {
      return { rr_type: 'HTMLImageElement', src: e.toDataURL() };
    }
    return e instanceof ImageData
      ? {
          rr_type: e.constructor.name,
          args: [ot(e.data, t, n), e.width, e.height],
        }
      : it(e, t) || 'object' === o(e)
        ? { rr_type: e.constructor.name, index: rt(e, t, n) }
        : e;
  }
  var at = function (e, t, n) {
      return e.map(function (e) {
        return ot(e, t, n);
      });
    },
    it = function (e, t) {
      var n = [
        'WebGLActiveInfo',
        'WebGLBuffer',
        'WebGLFramebuffer',
        'WebGLProgram',
        'WebGLRenderbuffer',
        'WebGLShader',
        'WebGLShaderPrecisionFormat',
        'WebGLTexture',
        'WebGLUniformLocation',
        'WebGLVertexArrayObject',
        'WebGLVertexArrayObjectOES',
      ].filter(function (e) {
        return 'function' == typeof t[e];
      });
      return Boolean(
        n.find(function (n) {
          return e instanceof t[n];
        })
      );
    };
  function st(e, t, n, r) {
    var a = [];
    try {
      var i = te(e.HTMLCanvasElement.prototype, 'getContext', function (e) {
        return function (a) {
          for (
            var i = arguments.length, s = new Array(i > 1 ? i - 1 : 0), u = 1;
            u < i;
            u++
          )
            s[u - 1] = arguments[u];
          if (!se(this, t, n, !0)) {
            var c = (function (e) {
              return 'experimental-webgl' === e ? 'webgl' : e;
            })(a);
            if (
              ('__context' in this || (this.__context = c),
              r && ['webgl', 'webgl2'].includes(c))
            )
              if (s[0] && 'object' === o(s[0])) {
                var l = s[0];
                l.preserveDrawingBuffer || (l.preserveDrawingBuffer = !0);
              } else s.splice(0, 1, { preserveDrawingBuffer: !0 });
          }
          return e.apply(this, [a].concat(s));
        };
      });
      a.push(i);
    } catch (e) {
      console.error('failed to patch HTMLCanvasElement.prototype.getContext');
    }
    return function () {
      a.forEach(function (e) {
        return e();
      });
    };
  }
  function ut(e, t, n, r, o, a, i) {
    var s,
      u = [],
      c = g(Object.getOwnPropertyNames(e));
    try {
      var l = function () {
        var a = s.value;
        if (
          [
            'isContextLost',
            'canvas',
            'drawingBufferWidth',
            'drawingBufferHeight',
          ].includes(a)
        )
          return 'continue';
        try {
          if ('function' != typeof e[a]) return 'continue';
          var c = te(e, a, function (e) {
            return function () {
              for (
                var s = arguments.length, u = new Array(s), c = 0;
                c < s;
                c++
              )
                u[c] = arguments[c];
              var l = e.apply(this, u);
              if (
                (rt(l, i, this),
                'tagName' in this.canvas && !se(this.canvas, r, o, !0))
              ) {
                var d = at(u, i, this),
                  f = { type: t, property: a, args: d };
                n(this.canvas, f);
              }
              return l;
            };
          });
          u.push(c);
        } catch (r) {
          var l = ee(e, a, {
            set: function (e) {
              n(this.canvas, { type: t, property: a, args: [e], setter: !0 });
            },
          });
          u.push(l);
        }
      };
      for (c.s(); !(s = c.n()).done; ) l();
    } catch (e) {
      c.e(e);
    } finally {
      c.f();
    }
    return u;
  }
  function ct(e, t, n) {
    var r = void 0 === t ? null : t,
      o = (function (e, t) {
        var n = atob(e);
        if (t) {
          for (
            var r = new Uint8Array(n.length), o = 0, a = n.length;
            o < a;
            ++o
          )
            r[o] = n.charCodeAt(o);
          return String.fromCharCode.apply(null, new Uint16Array(r.buffer));
        }
        return n;
      })(e, void 0 !== n && n),
      a = o.indexOf('\n', 10) + 1,
      i = o.substring(a) + (r ? '//# sourceMappingURL=' + r : ''),
      s = new Blob([i], { type: 'application/javascript' });
    return URL.createObjectURL(s);
  }
  var lt,
    dt,
    ft,
    pt,
    ht,
    gt,
    mt,
    vt =
      ((lt =
        'Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwooZnVuY3Rpb24gKCkgewogICAgJ3VzZSBzdHJpY3QnOwoKICAgIC8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKg0KICAgIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLg0KDQogICAgUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55DQogICAgcHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLg0KDQogICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEICJBUyBJUyIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEgNCiAgICBSRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkNCiAgICBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsDQogICAgSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NDQogICAgTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1INCiAgICBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SDQogICAgUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS4NCiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqLw0KDQogICAgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikgew0KICAgICAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH0NCiAgICAgICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7DQogICAgICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9DQogICAgICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvclsidGhyb3ciXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9DQogICAgICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfQ0KICAgICAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpOw0KICAgICAgICB9KTsNCiAgICB9CgogICAgLyoKICAgICAqIGJhc2U2NC1hcnJheWJ1ZmZlciAxLjAuMSA8aHR0cHM6Ly9naXRodWIuY29tL25pa2xhc3ZoL2Jhc2U2NC1hcnJheWJ1ZmZlcj4KICAgICAqIENvcHlyaWdodCAoYykgMjAyMSBOaWtsYXMgdm9uIEhlcnR6ZW4gPGh0dHBzOi8vaGVydHplbi5jb20+CiAgICAgKiBSZWxlYXNlZCB1bmRlciBNSVQgTGljZW5zZQogICAgICovCiAgICB2YXIgY2hhcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyc7CiAgICAvLyBVc2UgYSBsb29rdXAgdGFibGUgdG8gZmluZCB0aGUgaW5kZXguCiAgICB2YXIgbG9va3VwID0gdHlwZW9mIFVpbnQ4QXJyYXkgPT09ICd1bmRlZmluZWQnID8gW10gOiBuZXcgVWludDhBcnJheSgyNTYpOwogICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGFycy5sZW5ndGg7IGkrKykgewogICAgICAgIGxvb2t1cFtjaGFycy5jaGFyQ29kZUF0KGkpXSA9IGk7CiAgICB9CiAgICB2YXIgZW5jb2RlID0gZnVuY3Rpb24gKGFycmF5YnVmZmVyKSB7CiAgICAgICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlidWZmZXIpLCBpLCBsZW4gPSBieXRlcy5sZW5ndGgsIGJhc2U2NCA9ICcnOwogICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkgKz0gMykgewogICAgICAgICAgICBiYXNlNjQgKz0gY2hhcnNbYnl0ZXNbaV0gPj4gMl07CiAgICAgICAgICAgIGJhc2U2NCArPSBjaGFyc1soKGJ5dGVzW2ldICYgMykgPDwgNCkgfCAoYnl0ZXNbaSArIDFdID4+IDQpXTsKICAgICAgICAgICAgYmFzZTY0ICs9IGNoYXJzWygoYnl0ZXNbaSArIDFdICYgMTUpIDw8IDIpIHwgKGJ5dGVzW2kgKyAyXSA+PiA2KV07CiAgICAgICAgICAgIGJhc2U2NCArPSBjaGFyc1tieXRlc1tpICsgMl0gJiA2M107CiAgICAgICAgfQogICAgICAgIGlmIChsZW4gJSAzID09PSAyKSB7CiAgICAgICAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDEpICsgJz0nOwogICAgICAgIH0KICAgICAgICBlbHNlIGlmIChsZW4gJSAzID09PSAxKSB7CiAgICAgICAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDIpICsgJz09JzsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIGJhc2U2NDsKICAgIH07CgogICAgY29uc3QgbGFzdEJsb2JNYXAgPSBuZXcgTWFwKCk7DQogICAgY29uc3QgdHJhbnNwYXJlbnRCbG9iTWFwID0gbmV3IE1hcCgpOw0KICAgIGZ1bmN0aW9uIGdldFRyYW5zcGFyZW50QmxvYkZvcih3aWR0aCwgaGVpZ2h0LCBkYXRhVVJMT3B0aW9ucykgew0KICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkgew0KICAgICAgICAgICAgY29uc3QgaWQgPSBgJHt3aWR0aH0tJHtoZWlnaHR9YDsNCiAgICAgICAgICAgIGlmICgnT2Zmc2NyZWVuQ2FudmFzJyBpbiBnbG9iYWxUaGlzKSB7DQogICAgICAgICAgICAgICAgaWYgKHRyYW5zcGFyZW50QmxvYk1hcC5oYXMoaWQpKQ0KICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNwYXJlbnRCbG9iTWFwLmdldChpZCk7DQogICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2NyZWVuID0gbmV3IE9mZnNjcmVlbkNhbnZhcyh3aWR0aCwgaGVpZ2h0KTsNCiAgICAgICAgICAgICAgICBvZmZzY3JlZW4uZ2V0Q29udGV4dCgnMmQnKTsNCiAgICAgICAgICAgICAgICBjb25zdCBibG9iID0geWllbGQgb2Zmc2NyZWVuLmNvbnZlcnRUb0Jsb2IoZGF0YVVSTE9wdGlvbnMpOw0KICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5QnVmZmVyID0geWllbGQgYmxvYi5hcnJheUJ1ZmZlcigpOw0KICAgICAgICAgICAgICAgIGNvbnN0IGJhc2U2NCA9IGVuY29kZShhcnJheUJ1ZmZlcik7DQogICAgICAgICAgICAgICAgdHJhbnNwYXJlbnRCbG9iTWFwLnNldChpZCwgYmFzZTY0KTsNCiAgICAgICAgICAgICAgICByZXR1cm4gYmFzZTY0Ow0KICAgICAgICAgICAgfQ0KICAgICAgICAgICAgZWxzZSB7DQogICAgICAgICAgICAgICAgcmV0dXJuICcnOw0KICAgICAgICAgICAgfQ0KICAgICAgICB9KTsNCiAgICB9DQogICAgY29uc3Qgd29ya2VyID0gc2VsZjsNCiAgICB3b3JrZXIub25tZXNzYWdlID0gZnVuY3Rpb24gKGUpIHsNCiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHsNCiAgICAgICAgICAgIGlmICgnT2Zmc2NyZWVuQ2FudmFzJyBpbiBnbG9iYWxUaGlzKSB7DQogICAgICAgICAgICAgICAgY29uc3QgeyBpZCwgYml0bWFwLCB3aWR0aCwgaGVpZ2h0LCBkYXRhVVJMT3B0aW9ucyB9ID0gZS5kYXRhOw0KICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zcGFyZW50QmFzZTY0ID0gZ2V0VHJhbnNwYXJlbnRCbG9iRm9yKHdpZHRoLCBoZWlnaHQsIGRhdGFVUkxPcHRpb25zKTsNCiAgICAgICAgICAgICAgICBjb25zdCBvZmZzY3JlZW4gPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKHdpZHRoLCBoZWlnaHQpOw0KICAgICAgICAgICAgICAgIGNvbnN0IGN0eCA9IG9mZnNjcmVlbi5nZXRDb250ZXh0KCcyZCcpOw0KICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoYml0bWFwLCAwLCAwKTsNCiAgICAgICAgICAgICAgICBiaXRtYXAuY2xvc2UoKTsNCiAgICAgICAgICAgICAgICBjb25zdCBibG9iID0geWllbGQgb2Zmc2NyZWVuLmNvbnZlcnRUb0Jsb2IoZGF0YVVSTE9wdGlvbnMpOw0KICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBibG9iLnR5cGU7DQogICAgICAgICAgICAgICAgY29uc3QgYXJyYXlCdWZmZXIgPSB5aWVsZCBibG9iLmFycmF5QnVmZmVyKCk7DQogICAgICAgICAgICAgICAgY29uc3QgYmFzZTY0ID0gZW5jb2RlKGFycmF5QnVmZmVyKTsNCiAgICAgICAgICAgICAgICBpZiAoIWxhc3RCbG9iTWFwLmhhcyhpZCkgJiYgKHlpZWxkIHRyYW5zcGFyZW50QmFzZTY0KSA9PT0gYmFzZTY0KSB7DQogICAgICAgICAgICAgICAgICAgIGxhc3RCbG9iTWFwLnNldChpZCwgYmFzZTY0KTsNCiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdvcmtlci5wb3N0TWVzc2FnZSh7IGlkIH0pOw0KICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICBpZiAobGFzdEJsb2JNYXAuZ2V0KGlkKSA9PT0gYmFzZTY0KQ0KICAgICAgICAgICAgICAgICAgICByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQgfSk7DQogICAgICAgICAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKHsNCiAgICAgICAgICAgICAgICAgICAgaWQsDQogICAgICAgICAgICAgICAgICAgIHR5cGUsDQogICAgICAgICAgICAgICAgICAgIGJhc2U2NCwNCiAgICAgICAgICAgICAgICAgICAgd2lkdGgsDQogICAgICAgICAgICAgICAgICAgIGhlaWdodCwNCiAgICAgICAgICAgICAgICB9KTsNCiAgICAgICAgICAgICAgICBsYXN0QmxvYk1hcC5zZXQoaWQsIGJhc2U2NCk7DQogICAgICAgICAgICB9DQogICAgICAgICAgICBlbHNlIHsNCiAgICAgICAgICAgICAgICByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQ6IGUuZGF0YS5pZCB9KTsNCiAgICAgICAgICAgIH0NCiAgICAgICAgfSk7DQogICAgfTsKCn0pKCk7Cgo='),
      (dt = null),
      (ft = !1),
      function (e) {
        return (pt = pt || ct(lt, dt, ft)), new Worker(pt, e);
      }),
    yt = (function () {
      function e(t) {
        var n = this;
        s(this, e),
          (this.pendingCanvasMutations = new Map()),
          (this.rafStamps = { latestId: 0, invokeId: null }),
          (this.frozen = !1),
          (this.locked = !1),
          (this.processMutation = function (e, t) {
            (!(
              n.rafStamps.invokeId &&
              n.rafStamps.latestId !== n.rafStamps.invokeId
            ) &&
              n.rafStamps.invokeId) ||
              (n.rafStamps.invokeId = n.rafStamps.latestId),
              n.pendingCanvasMutations.has(e) ||
                n.pendingCanvasMutations.set(e, []),
              n.pendingCanvasMutations.get(e).push(t);
          });
        var r = t.sampling,
          o = void 0 === r ? 'all' : r,
          a = t.win,
          i = t.blockClass,
          u = t.blockSelector,
          c = t.recordCanvas,
          l = t.dataURLOptions;
        (this.mutationCb = t.mutationCb),
          (this.mirror = t.mirror),
          c && 'all' === o && this.initCanvasMutationObserver(a, i, u),
          c &&
            'number' == typeof o &&
            this.initCanvasFPSObserver(o, a, i, u, { dataURLOptions: l });
      }
      return (
        c(e, [
          {
            key: 'reset',
            value: function () {
              this.pendingCanvasMutations.clear(),
                this.resetObservers && this.resetObservers();
            },
          },
          {
            key: 'freeze',
            value: function () {
              this.frozen = !0;
            },
          },
          {
            key: 'unfreeze',
            value: function () {
              this.frozen = !1;
            },
          },
          {
            key: 'lock',
            value: function () {
              this.locked = !0;
            },
          },
          {
            key: 'unlock',
            value: function () {
              this.locked = !1;
            },
          },
          {
            key: 'initCanvasFPSObserver',
            value: function (e, t, n, o, a) {
              var i = this,
                s = st(t, n, o, !0),
                u = new Map(),
                c = new vt();
              c.onmessage = function (e) {
                var t = e.data.id;
                if ((u.set(t, !1), 'base64' in e.data)) {
                  var n = e.data,
                    r = n.base64,
                    o = n.type,
                    a = n.width,
                    s = n.height;
                  i.mutationCb({
                    id: t,
                    type: Se['2D'],
                    commands: [
                      { property: 'clearRect', args: [0, 0, a, s] },
                      {
                        property: 'drawImage',
                        args: [
                          {
                            rr_type: 'ImageBitmap',
                            args: [
                              {
                                rr_type: 'Blob',
                                data: [{ rr_type: 'ArrayBuffer', base64: r }],
                                type: o,
                              },
                            ],
                          },
                          0,
                          0,
                        ],
                      },
                    ],
                  });
                }
              };
              var l,
                d = 1e3 / e,
                f = 0;
              (l = requestAnimationFrame(function e(s) {
                var p;
                f && s - f < d
                  ? (l = requestAnimationFrame(e))
                  : ((f = s),
                    ((p = []),
                    (function e(t) {
                      t.querySelectorAll('canvas').forEach(function (e) {
                        se(e, n, o, !0) || p.push(e);
                      }),
                        t.querySelectorAll('*').forEach(function (t) {
                          t.shadowRoot && e(t.shadowRoot);
                        });
                    })(t.document),
                    p).forEach(function (e) {
                      return Xe(
                        i,
                        void 0,
                        void 0,
                        r().mark(function t() {
                          var n, o, i, s, l, d;
                          return r().wrap(
                            function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    if (
                                      ((o = this.mirror.getId(e)), !u.get(o))
                                    ) {
                                      t.next = 3;
                                      break;
                                    }
                                    return t.abrupt('return');
                                  case 3:
                                    if (0 !== e.width && 0 !== e.height) {
                                      t.next = 5;
                                      break;
                                    }
                                    return t.abrupt('return');
                                  case 5:
                                    return (
                                      u.set(o, !0),
                                      ['webgl', 'webgl2'].includes(
                                        e.__context
                                      ) &&
                                        ((i = e.getContext(e.__context)),
                                        !1 ===
                                          (null ===
                                            (n =
                                              null == i
                                                ? void 0
                                                : i.getContextAttributes()) ||
                                          void 0 === n
                                            ? void 0
                                            : n.preserveDrawingBuffer) &&
                                          i.clear(i.COLOR_BUFFER_BIT)),
                                      (s = e.clientWidth),
                                      (l = e.clientHeight),
                                      (t.next = 11),
                                      createImageBitmap(e, {
                                        resizeWidth: s,
                                        resizeHeight: l,
                                      })
                                    );
                                  case 11:
                                    (d = t.sent),
                                      c.postMessage(
                                        {
                                          id: o,
                                          bitmap: d,
                                          width: s,
                                          height: l,
                                          dataURLOptions: a.dataURLOptions,
                                        },
                                        [d]
                                      );
                                  case 13:
                                  case 'end':
                                    return t.stop();
                                }
                            },
                            t,
                            this
                          );
                        })
                      );
                    }),
                    (l = requestAnimationFrame(e)));
              })),
                (this.resetObservers = function () {
                  s(), cancelAnimationFrame(l);
                });
            },
          },
          {
            key: 'initCanvasMutationObserver',
            value: function (e, t, n) {
              this.startRAFTimestamping(),
                this.startPendingCanvasMutationFlusher();
              var r = st(e, t, n, !1),
                o = (function (e, t, n, r) {
                  var o,
                    a = [],
                    i = g(
                      Object.getOwnPropertyNames(
                        t.CanvasRenderingContext2D.prototype
                      )
                    );
                  try {
                    var s = function () {
                      var i = o.value;
                      try {
                        if (
                          'function' !=
                          typeof t.CanvasRenderingContext2D.prototype[i]
                        )
                          return 'continue';
                        var s = te(
                          t.CanvasRenderingContext2D.prototype,
                          i,
                          function (o) {
                            return function () {
                              for (
                                var a = this,
                                  s = arguments.length,
                                  u = new Array(s),
                                  c = 0;
                                c < s;
                                c++
                              )
                                u[c] = arguments[c];
                              return (
                                se(this.canvas, n, r, !0) ||
                                  setTimeout(function () {
                                    var n = at(u, t, a);
                                    e(a.canvas, {
                                      type: Se['2D'],
                                      property: i,
                                      args: n,
                                    });
                                  }, 0),
                                o.apply(this, u)
                              );
                            };
                          }
                        );
                        a.push(s);
                      } catch (n) {
                        var u = ee(t.CanvasRenderingContext2D.prototype, i, {
                          set: function (t) {
                            e(this.canvas, {
                              type: Se['2D'],
                              property: i,
                              args: [t],
                              setter: !0,
                            });
                          },
                        });
                        a.push(u);
                      }
                    };
                    for (i.s(); !(o = i.n()).done; ) s();
                  } catch (e) {
                    i.e(e);
                  } finally {
                    i.f();
                  }
                  return function () {
                    a.forEach(function (e) {
                      return e();
                    });
                  };
                })(this.processMutation.bind(this), e, t, n),
                a = (function (e, t, n, r, o) {
                  var a = [];
                  return (
                    a.push.apply(
                      a,
                      f(
                        ut(
                          t.WebGLRenderingContext.prototype,
                          Se.WebGL,
                          e,
                          n,
                          r,
                          0,
                          t
                        )
                      )
                    ),
                    void 0 !== t.WebGL2RenderingContext &&
                      a.push.apply(
                        a,
                        f(
                          ut(
                            t.WebGL2RenderingContext.prototype,
                            Se.WebGL2,
                            e,
                            n,
                            r,
                            0,
                            t
                          )
                        )
                      ),
                    function () {
                      a.forEach(function (e) {
                        return e();
                      });
                    }
                  );
                })(this.processMutation.bind(this), e, t, n, this.mirror);
              this.resetObservers = function () {
                r(), o(), a();
              };
            },
          },
          {
            key: 'startPendingCanvasMutationFlusher',
            value: function () {
              var e = this;
              requestAnimationFrame(function () {
                return e.flushPendingCanvasMutations();
              });
            },
          },
          {
            key: 'startRAFTimestamping',
            value: function () {
              var e = this;
              requestAnimationFrame(function t(n) {
                (e.rafStamps.latestId = n), requestAnimationFrame(t);
              });
            },
          },
          {
            key: 'flushPendingCanvasMutations',
            value: function () {
              var e = this;
              this.pendingCanvasMutations.forEach(function (t, n) {
                var r = e.mirror.getId(n);
                e.flushPendingCanvasMutationFor(n, r);
              }),
                requestAnimationFrame(function () {
                  return e.flushPendingCanvasMutations();
                });
            },
          },
          {
            key: 'flushPendingCanvasMutationFor',
            value: function (e, t) {
              if (!this.frozen && !this.locked) {
                var n = this.pendingCanvasMutations.get(e);
                if (n && -1 !== t) {
                  var r = n.map(function (e) {
                      var t =
                        /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
                        (function (e, t) {
                          var n = {};
                          for (var r in e)
                            Object.prototype.hasOwnProperty.call(e, r) &&
                              t.indexOf(r) < 0 &&
                              (n[r] = e[r]);
                          if (
                            null != e &&
                            'function' == typeof Object.getOwnPropertySymbols
                          ) {
                            var o = 0;
                            for (
                              r = Object.getOwnPropertySymbols(e);
                              o < r.length;
                              o++
                            )
                              t.indexOf(r[o]) < 0 &&
                                Object.prototype.propertyIsEnumerable.call(
                                  e,
                                  r[o]
                                ) &&
                                (n[r[o]] = e[r[o]]);
                          }
                          return n;
                        })(e, ['type']);
                      return t;
                    }),
                    o = n[0].type;
                  this.mutationCb({ id: t, type: o, commands: r }),
                    this.pendingCanvasMutations.delete(e);
                }
              }
            },
          },
        ]),
        e
      );
    })(),
    It = (function () {
      function e(t) {
        s(this, e),
          (this.trackedLinkElements = new WeakSet()),
          (this.styleMirror = new he()),
          (this.mutationCb = t.mutationCb),
          (this.adoptedStyleSheetCb = t.adoptedStyleSheetCb);
      }
      return (
        c(e, [
          {
            key: 'attachLinkElement',
            value: function (e, t) {
              '_cssText' in t.attributes &&
                this.mutationCb({
                  adds: [],
                  removes: [],
                  texts: [],
                  attributes: [{ id: t.id, attributes: t.attributes }],
                }),
                this.trackLinkElement(e);
            },
          },
          {
            key: 'trackLinkElement',
            value: function (e) {
              this.trackedLinkElements.has(e) ||
                (this.trackedLinkElements.add(e),
                this.trackStylesheetInLinkElement(e));
            },
          },
          {
            key: 'adoptStyleSheets',
            value: function (e, t) {
              if (0 !== e.length) {
                var n,
                  r = { id: t, styleIds: [] },
                  o = [],
                  a = g(e);
                try {
                  for (a.s(); !(n = a.n()).done; ) {
                    var i = n.value,
                      s = void 0;
                    this.styleMirror.has(i)
                      ? (s = this.styleMirror.getId(i))
                      : ((s = this.styleMirror.add(i)),
                        o.push({
                          styleId: s,
                          rules: Array.from(
                            i.rules || CSSRule,
                            function (e, t) {
                              return { rule: C(e), index: t };
                            }
                          ),
                        })),
                      r.styleIds.push(s);
                  }
                } catch (e) {
                  a.e(e);
                } finally {
                  a.f();
                }
                o.length > 0 && (r.styles = o), this.adoptedStyleSheetCb(r);
              }
            },
          },
          {
            key: 'reset',
            value: function () {
              this.styleMirror.reset(),
                (this.trackedLinkElements = new WeakSet());
            },
          },
          { key: 'trackStylesheetInLinkElement', value: function (e) {} },
        ]),
        e
      );
    })(),
    Ct = (function () {
      function e() {
        s(this, e),
          (this.nodeMap = new WeakMap()),
          (this.loop = !0),
          this.periodicallyClear();
      }
      return (
        c(e, [
          {
            key: 'periodicallyClear',
            value: function () {
              var e = this;
              requestAnimationFrame(function () {
                e.clear(), e.loop && e.periodicallyClear();
              });
            },
          },
          {
            key: 'inOtherBuffer',
            value: function (e, t) {
              var n = this.nodeMap.get(e);
              return (
                n &&
                Array.from(n).some(function (e) {
                  return e !== t;
                })
              );
            },
          },
          {
            key: 'add',
            value: function (e, t) {
              this.nodeMap.set(e, (this.nodeMap.get(e) || new Set()).add(t));
            },
          },
          {
            key: 'clear',
            value: function () {
              this.nodeMap = new WeakMap();
            },
          },
          {
            key: 'destroy',
            value: function () {
              this.loop = !1;
            },
          },
        ]),
        e
      );
    })();
  function bt(e) {
    return Object.assign(Object.assign({}, e), { timestamp: ne() });
  }
  var St = !1,
    At = new b();
  function wt() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      t = e.emit,
      n = e.checkoutEveryNms,
      r = e.checkoutEveryNth,
      o = e.blockClass,
      a = void 0 === o ? 'rr-block' : o,
      i = e.blockSelector,
      s = void 0 === i ? null : i,
      u = e.ignoreClass,
      c = void 0 === u ? 'rr-ignore' : u,
      l = e.ignoreSelector,
      d = void 0 === l ? null : l,
      f = e.maskTextClass,
      p = void 0 === f ? 'rr-mask' : f,
      h = e.maskTextSelector,
      m = void 0 === h ? null : h,
      v = e.inlineStylesheet,
      y = void 0 === v || v,
      I = e.maskAllInputs,
      C = e.maskInputOptions,
      S = e.slimDOMOptions,
      A = e.maskInputFn,
      w = e.maskTextFn,
      k = e.hooks,
      M = e.packFn,
      T = e.sampling,
      O = void 0 === T ? {} : T,
      N = e.dataURLOptions,
      E = void 0 === N ? {} : N,
      R = e.mousemoveWait,
      x = e.recordDOM,
      L = void 0 === x || x,
      F = e.recordCanvas,
      D = void 0 !== F && F,
      B = e.recordCrossOriginIframes,
      W = void 0 !== B && B,
      G = e.recordAfter,
      V =
        void 0 === G
          ? 'DOMContentLoaded' === e.recordAfter
            ? e.recordAfter
            : 'load'
          : G,
      Z = e.userTriggeredOnInput,
      U = void 0 !== Z && Z,
      K = e.collectFonts,
      _ = void 0 !== K && K,
      j = e.inlineImages,
      P = void 0 !== j && j,
      H = e.plugins,
      Y = e.keepIframeSrcFn,
      q =
        void 0 === Y
          ? function () {
              return !1;
            }
          : Y,
      Q = e.ignoreCSSAttributes,
      X = void 0 === Q ? new Set([]) : Q;
    Le(e.errorHandler);
    var $ = !W || window.parent === window,
      ee = !1;
    if (!$)
      try {
        window.parent.document && (ee = !1);
      } catch (e) {
        ee = !0;
      }
    if ($ && !t) throw new Error('emit function is required');
    void 0 !== R && void 0 === O.mousemove && (O.mousemove = R), At.reset();
    var te,
      ne =
        !0 === I
          ? {
              color: !0,
              date: !0,
              'datetime-local': !0,
              email: !0,
              month: !0,
              number: !0,
              range: !0,
              search: !0,
              tel: !0,
              text: !0,
              time: !0,
              url: !0,
              week: !0,
              textarea: !0,
              select: !0,
              password: !0,
            }
          : void 0 !== C
            ? C
            : { password: !0 },
      ie =
        !0 === S || 'all' === S
          ? {
              script: !0,
              comment: !0,
              headFavicon: !0,
              headWhitespace: !0,
              headMetaSocial: !0,
              headMetaRobots: !0,
              headMetaHttpEquiv: !0,
              headMetaVerification: !0,
              headMetaAuthorship: 'all' === S,
              headMetaDescKeywords: 'all' === S,
            }
          : S || {};
    !(function () {
      var e = this,
        t =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : window;
      'NodeList' in t &&
        !t.NodeList.prototype.forEach &&
        (t.NodeList.prototype.forEach = Array.prototype.forEach),
        'DOMTokenList' in t &&
          !t.DOMTokenList.prototype.forEach &&
          (t.DOMTokenList.prototype.forEach = Array.prototype.forEach),
        Node.prototype.contains ||
          (Node.prototype.contains = function () {
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            var o = n[0];
            if (!(0 in n)) throw new TypeError('1 argument is required');
            do {
              if (e === o) return !0;
            } while ((o = o && o.parentNode));
            return !1;
          });
    })();
    var se = 0,
      ue = function (e) {
        var t,
          n = g(H || []);
        try {
          for (n.s(); !(t = n.n()).done; ) {
            var r = t.value;
            r.eventProcessor && (e = r.eventProcessor(e));
          }
        } catch (e) {
          n.e(e);
        } finally {
          n.f();
        }
        return M && !ee && (e = M(e)), e;
      };
    ht = function (e, o) {
      var a;
      if (
        (!(null === (a = Be[0]) || void 0 === a ? void 0 : a.isFrozen()) ||
          e.type === ye.FullSnapshot ||
          (e.type === ye.IncrementalSnapshot &&
            e.data.source === Ie.Mutation) ||
          Be.forEach(function (e) {
            return e.unfreeze();
          }),
        $)
      )
        null == t || t(ue(e), o);
      else if (ee) {
        var i = {
          type: 'rrweb',
          event: ue(e),
          origin: window.location.origin,
          isCheckout: o,
        };
        window.parent.postMessage(i, '*');
      }
      if (e.type === ye.FullSnapshot) (te = e), (se = 0);
      else if (e.type === ye.IncrementalSnapshot) {
        if (e.data.source === Ie.Mutation && e.data.isAttachIframe) return;
        se++;
        var s = r && se >= r,
          u = n && e.timestamp - te.timestamp > n;
        (s || u) && gt(!0);
      }
    };
    var ce,
      le = function (e) {
        ht(
          bt({
            type: ye.IncrementalSnapshot,
            data: Object.assign({ source: Ie.Mutation }, e),
          })
        );
      },
      he = function (e) {
        return ht(
          bt({
            type: ye.IncrementalSnapshot,
            data: Object.assign({ source: Ie.Scroll }, e),
          })
        );
      },
      ge = function (e) {
        return ht(
          bt({
            type: ye.IncrementalSnapshot,
            data: Object.assign({ source: Ie.CanvasMutation }, e),
          })
        );
      },
      me = new It({
        mutationCb: le,
        adoptedStyleSheetCb: function (e) {
          return ht(
            bt({
              type: ye.IncrementalSnapshot,
              data: Object.assign({ source: Ie.AdoptedStyleSheet }, e),
            })
          );
        },
      }),
      ve = new ze({
        mirror: At,
        mutationCb: le,
        stylesheetManager: me,
        recordCrossOriginIframes: W,
        wrappedEmit: ht,
      }),
      Ce = g(H || []);
    try {
      for (Ce.s(); !(ce = Ce.n()).done; ) {
        var be = ce.value;
        be.getMirror &&
          be.getMirror({
            nodeMirror: At,
            crossOriginIframeMirror: ve.crossOriginIframeMirror,
            crossOriginIframeStyleMirror: ve.crossOriginIframeStyleMirror,
          });
      }
    } catch (e) {
      Ce.e(e);
    } finally {
      Ce.f();
    }
    var Se = new Ct();
    mt = new yt({
      recordCanvas: D,
      mutationCb: ge,
      win: window,
      blockClass: a,
      blockSelector: s,
      mirror: At,
      sampling: O.canvas,
      dataURLOptions: E,
    });
    var Ae = new Qe({
      mutationCb: le,
      scrollCb: he,
      bypassOptions: {
        blockClass: a,
        blockSelector: s,
        maskTextClass: p,
        maskTextSelector: m,
        inlineStylesheet: y,
        maskInputOptions: ne,
        dataURLOptions: E,
        maskTextFn: w,
        maskInputFn: A,
        recordCanvas: D,
        inlineImages: P,
        sampling: O,
        slimDOMOptions: ie,
        iframeManager: ve,
        stylesheetManager: me,
        canvasManager: mt,
        keepIframeSrcFn: q,
        processedNodeManager: Se,
      },
      mirror: At,
    });
    gt = function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      if (L) {
        ht(
          bt({
            type: ye.Meta,
            data: { href: window.location.href, width: ae(), height: oe() },
          }),
          e
        ),
          me.reset(),
          Ae.init(),
          Be.forEach(function (e) {
            return e.lock();
          });
        var t = (function (e, t) {
          var n = t || {},
            r = n.mirror,
            o = void 0 === r ? new b() : r,
            a = n.blockClass,
            i = void 0 === a ? 'rr-block' : a,
            s = n.blockSelector,
            u = void 0 === s ? null : s,
            c = n.maskTextClass,
            l = void 0 === c ? 'rr-mask' : c,
            d = n.maskTextSelector,
            f = void 0 === d ? null : d,
            p = n.inlineStylesheet,
            h = void 0 === p || p,
            g = n.inlineImages,
            m = void 0 !== g && g,
            v = n.recordCanvas,
            y = void 0 !== v && v,
            I = n.maskAllInputs,
            C = void 0 !== I && I,
            S = n.maskTextFn,
            A = n.maskInputFn,
            w = n.slimDOM,
            k = void 0 !== w && w,
            M = n.dataURLOptions,
            T = n.preserveWhiteSpace,
            O = n.onSerialize,
            N = n.onIframeLoad,
            E = n.iframeLoadTimeout,
            R = n.onStylesheetLoad,
            x = n.stylesheetLoadTimeout,
            L = n.keepIframeSrcFn;
          return J(e, {
            doc: e,
            mirror: o,
            blockClass: i,
            blockSelector: u,
            maskTextClass: l,
            maskTextSelector: f,
            skipChild: !1,
            inlineStylesheet: h,
            maskInputOptions:
              !0 === C
                ? {
                    color: !0,
                    date: !0,
                    'datetime-local': !0,
                    email: !0,
                    month: !0,
                    number: !0,
                    range: !0,
                    search: !0,
                    tel: !0,
                    text: !0,
                    time: !0,
                    url: !0,
                    week: !0,
                    textarea: !0,
                    select: !0,
                    password: !0,
                  }
                : !1 === C
                  ? { password: !0 }
                  : C,
            maskTextFn: S,
            maskInputFn: A,
            slimDOMOptions:
              !0 === k || 'all' === k
                ? {
                    script: !0,
                    comment: !0,
                    headFavicon: !0,
                    headWhitespace: !0,
                    headMetaDescKeywords: 'all' === k,
                    headMetaSocial: !0,
                    headMetaRobots: !0,
                    headMetaHttpEquiv: !0,
                    headMetaAuthorship: !0,
                    headMetaVerification: !0,
                  }
                : !1 === k
                  ? {}
                  : k,
            dataURLOptions: M,
            inlineImages: m,
            recordCanvas: y,
            preserveWhiteSpace: T,
            onSerialize: O,
            onIframeLoad: N,
            iframeLoadTimeout: E,
            onStylesheetLoad: R,
            stylesheetLoadTimeout: x,
            keepIframeSrcFn:
              void 0 === L
                ? function () {
                    return !1;
                  }
                : L,
            newlyAddedElement: !1,
          });
        })(document, {
          mirror: At,
          blockClass: a,
          blockSelector: s,
          maskTextClass: p,
          maskTextSelector: m,
          inlineStylesheet: y,
          maskAllInputs: ne,
          maskTextFn: w,
          slimDOM: ie,
          dataURLOptions: E,
          recordCanvas: D,
          inlineImages: P,
          onSerialize: function (e) {
            de(e, At) && ve.addIframe(e),
              fe(e, At) && me.trackLinkElement(e),
              pe(e) && Ae.addShadowRoot(e.shadowRoot, document);
          },
          onIframeLoad: function (e, t) {
            ve.attachIframe(e, t), Ae.observeAttachShadow(e);
          },
          onStylesheetLoad: function (e, t) {
            me.attachLinkElement(e, t);
          },
          keepIframeSrcFn: q,
        });
        if (!t) return console.warn('Failed to snapshot the document');
        ht(
          bt({
            type: ye.FullSnapshot,
            data: { node: t, initialOffset: re(window) },
          }),
          e
        ),
          Be.forEach(function (e) {
            return e.unlock();
          }),
          document.adoptedStyleSheets &&
            document.adoptedStyleSheets.length > 0 &&
            me.adoptStyleSheets(
              document.adoptedStyleSheets,
              At.getId(document)
            );
      }
    };
    try {
      var we = [],
        ke = function (e) {
          var t;
          return De(He)(
            {
              mutationCb: le,
              mousemoveCb: function (e, t) {
                return ht(
                  bt({
                    type: ye.IncrementalSnapshot,
                    data: { source: t, positions: e },
                  })
                );
              },
              mouseInteractionCb: function (e) {
                return ht(
                  bt({
                    type: ye.IncrementalSnapshot,
                    data: Object.assign({ source: Ie.MouseInteraction }, e),
                  })
                );
              },
              scrollCb: he,
              viewportResizeCb: function (e) {
                return ht(
                  bt({
                    type: ye.IncrementalSnapshot,
                    data: Object.assign({ source: Ie.ViewportResize }, e),
                  })
                );
              },
              inputCb: function (e) {
                return ht(
                  bt({
                    type: ye.IncrementalSnapshot,
                    data: Object.assign({ source: Ie.Input }, e),
                  })
                );
              },
              mediaInteractionCb: function (e) {
                return ht(
                  bt({
                    type: ye.IncrementalSnapshot,
                    data: Object.assign({ source: Ie.MediaInteraction }, e),
                  })
                );
              },
              styleSheetRuleCb: function (e) {
                return ht(
                  bt({
                    type: ye.IncrementalSnapshot,
                    data: Object.assign({ source: Ie.StyleSheetRule }, e),
                  })
                );
              },
              styleDeclarationCb: function (e) {
                return ht(
                  bt({
                    type: ye.IncrementalSnapshot,
                    data: Object.assign({ source: Ie.StyleDeclaration }, e),
                  })
                );
              },
              canvasMutationCb: ge,
              fontCb: function (e) {
                return ht(
                  bt({
                    type: ye.IncrementalSnapshot,
                    data: Object.assign({ source: Ie.Font }, e),
                  })
                );
              },
              selectionCb: function (e) {
                ht(
                  bt({
                    type: ye.IncrementalSnapshot,
                    data: Object.assign({ source: Ie.Selection }, e),
                  })
                );
              },
              customElementCb: function (e) {
                ht(
                  bt({
                    type: ye.IncrementalSnapshot,
                    data: Object.assign({ source: Ie.CustomElement }, e),
                  })
                );
              },
              blockClass: a,
              ignoreClass: c,
              ignoreSelector: d,
              maskTextClass: p,
              maskTextSelector: m,
              maskInputOptions: ne,
              inlineStylesheet: y,
              sampling: O,
              recordDOM: L,
              recordCanvas: D,
              inlineImages: P,
              userTriggeredOnInput: U,
              collectFonts: _,
              doc: e,
              maskInputFn: A,
              maskTextFn: w,
              keepIframeSrcFn: q,
              blockSelector: s,
              slimDOMOptions: ie,
              dataURLOptions: E,
              mirror: At,
              iframeManager: ve,
              stylesheetManager: me,
              shadowDomManager: Ae,
              processedNodeManager: Se,
              canvasManager: mt,
              ignoreCSSAttributes: X,
              plugins:
                (null ===
                  (t =
                    null == H
                      ? void 0
                      : H.filter(function (e) {
                          return e.observer;
                        })) || void 0 === t
                  ? void 0
                  : t.map(function (e) {
                      return {
                        observer: e.observer,
                        options: e.options,
                        callback: function (t) {
                          return ht(
                            bt({
                              type: ye.Plugin,
                              data: { plugin: e.name, payload: t },
                            })
                          );
                        },
                      };
                    })) || [],
            },
            k
          );
        };
      ve.addLoadListener(function (e) {
        try {
          we.push(ke(e.contentDocument));
        } catch (e) {
          console.warn(e);
        }
      });
      var Me = function () {
        gt(), we.push(ke(document)), (St = !0);
      };
      return (
        'interactive' === document.readyState ||
        'complete' === document.readyState
          ? Me()
          : (we.push(
              z('DOMContentLoaded', function () {
                ht(bt({ type: ye.DomContentLoaded, data: {} })),
                  'DOMContentLoaded' === V && Me();
              })
            ),
            we.push(
              z(
                'load',
                function () {
                  ht(bt({ type: ye.Load, data: {} })), 'load' === V && Me();
                },
                window
              )
            )),
        function () {
          we.forEach(function (e) {
            return e();
          }),
            Se.destroy(),
            (St = !1),
            Fe();
        }
      );
    } catch (e) {
      console.warn(e);
    }
  }
  (wt.addCustomEvent = function (e, t) {
    if (!St) throw new Error('please add custom event after start recording');
    ht(bt({ type: ye.Custom, data: { tag: e, payload: t } }));
  }),
    (wt.freezePage = function () {
      Be.forEach(function (e) {
        return e.freeze();
      });
    }),
    (wt.takeFullSnapshot = function (e) {
      if (!St)
        throw new Error('please take full snapshot after start recording');
      gt(e);
    }),
    (wt.mirror = At);
  var kt = (function () {
      function e(t) {
        s(this, e),
          (this.fileName = t.fileName || ''),
          (this.functionName = t.functionName || ''),
          (this.lineNumber = t.lineNumber),
          (this.columnNumber = t.columnNumber);
      }
      return (
        c(e, [
          {
            key: 'toString',
            value: function () {
              var e = this.lineNumber || '',
                t = this.columnNumber || '';
              return this.functionName
                ? ''
                    .concat(this.functionName, ' (')
                    .concat(this.fileName, ':')
                    .concat(e, ':')
                    .concat(t, ')')
                : ''.concat(this.fileName, ':').concat(e, ':').concat(t);
            },
          },
        ]),
        e
      );
    })(),
    Mt = /(^|@)\S+:\d+/,
    Tt = /^\s*at .*(\S+:\d+|\(native\))/m,
    Ot = /^(eval@)?(\[native code])?$/,
    Nt = {
      parse: function (e) {
        return e
          ? void 0 !== e.stacktrace || void 0 !== e['opera#sourceloc']
            ? this.parseOpera(e)
            : e.stack && e.stack.match(Tt)
              ? this.parseV8OrIE(e)
              : e.stack
                ? this.parseFFOrSafari(e)
                : (console.warn(
                    '[console-record-plugin]: Failed to parse error object:',
                    e
                  ),
                  [])
          : [];
      },
      extractLocation: function (e) {
        if (-1 === e.indexOf(':')) return [e];
        var t = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(e.replace(/[()]/g, ''));
        if (!t) throw new Error('Cannot parse given url: '.concat(e));
        return [t[1], t[2] || void 0, t[3] || void 0];
      },
      parseV8OrIE: function (e) {
        return e.stack
          .split('\n')
          .filter(function (e) {
            return !!e.match(Tt);
          }, this)
          .map(function (e) {
            e.indexOf('(eval ') > -1 &&
              (e = e
                .replace(/eval code/g, 'eval')
                .replace(/(\(eval at [^()]*)|(\),.*$)/g, ''));
            var t = e.replace(/^\s+/, '').replace(/\(eval code/g, '('),
              n = t.match(/ (\((.+):(\d+):(\d+)\)$)/),
              r = (t = n ? t.replace(n[0], '') : t).split(/\s+/).slice(1),
              o = this.extractLocation(n ? n[1] : r.pop()),
              a = r.join(' ') || void 0,
              i = ['eval', '<anonymous>'].indexOf(o[0]) > -1 ? void 0 : o[0];
            return new kt({
              functionName: a,
              fileName: i,
              lineNumber: o[1],
              columnNumber: o[2],
            });
          }, this);
      },
      parseFFOrSafari: function (e) {
        return e.stack
          .split('\n')
          .filter(function (e) {
            return !e.match(Ot);
          }, this)
          .map(function (e) {
            if (
              (e.indexOf(' > eval') > -1 &&
                (e = e.replace(
                  / line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,
                  ':$1'
                )),
              -1 === e.indexOf('@') && -1 === e.indexOf(':'))
            )
              return new kt({ functionName: e });
            var t = /((.*".+"[^@]*)?[^@]*)(?:@)/,
              n = e.match(t),
              r = n && n[1] ? n[1] : void 0,
              o = this.extractLocation(e.replace(t, ''));
            return new kt({
              functionName: r,
              fileName: o[0],
              lineNumber: o[1],
              columnNumber: o[2],
            });
          }, this);
      },
      parseOpera: function (e) {
        return !e.stacktrace ||
          (e.message.indexOf('\n') > -1 &&
            e.message.split('\n').length > e.stacktrace.split('\n').length)
          ? this.parseOpera9(e)
          : e.stack
            ? this.parseOpera11(e)
            : this.parseOpera10(e);
      },
      parseOpera9: function (e) {
        for (
          var t = /Line (\d+).*script (?:in )?(\S+)/i,
            n = e.message.split('\n'),
            r = [],
            o = 2,
            a = n.length;
          o < a;
          o += 2
        ) {
          var i = t.exec(n[o]);
          i && r.push(new kt({ fileName: i[2], lineNumber: parseFloat(i[1]) }));
        }
        return r;
      },
      parseOpera10: function (e) {
        for (
          var t = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,
            n = e.stacktrace.split('\n'),
            r = [],
            o = 0,
            a = n.length;
          o < a;
          o += 2
        ) {
          var i = t.exec(n[o]);
          i &&
            r.push(
              new kt({
                functionName: i[3] || void 0,
                fileName: i[2],
                lineNumber: parseFloat(i[1]),
              })
            );
        }
        return r;
      },
      parseOpera11: function (e) {
        return e.stack
          .split('\n')
          .filter(function (e) {
            return !!e.match(Mt) && !e.match(/^Error created at/);
          }, this)
          .map(function (e) {
            var t = e.split('@'),
              n = this.extractLocation(t.pop()),
              r =
                (t.shift() || '')
                  .replace(/<anonymous function(: (\w+))?>/, '$2')
                  .replace(/\([^)]*\)/g, '') || void 0;
            return new kt({
              functionName: r,
              fileName: n[0],
              lineNumber: n[1],
              columnNumber: n[2],
            });
          }, this);
      },
    };
  function Et(e) {
    if (!e || !e.outerHTML) return '';
    for (var t = ''; e.parentElement; ) {
      var n = e.localName;
      if (!n) break;
      n = n.toLowerCase();
      var r = e.parentElement,
        o = [];
      if (r.children && r.children.length > 0)
        for (var a = 0; a < r.children.length; a++) {
          var i = r.children[a];
          i.localName &&
            i.localName.toLowerCase &&
            i.localName.toLowerCase() === n &&
            o.push(i);
        }
      o.length > 1 && (n += ':eq('.concat(o.indexOf(e), ')')),
        (t = n + (t ? '>' + t : '')),
        (e = r);
    }
    return t;
  }
  function Rt(e) {
    return '[object Object]' === Object.prototype.toString.call(e);
  }
  function xt(e, t) {
    if (0 === t) return !0;
    for (var n = 0, r = Object.keys(e); n < r.length; n++) {
      var o = r[n];
      if (Rt(e[o]) && xt(e[o], t - 1)) return !0;
    }
    return !1;
  }
  function Lt(e, t) {
    var n = { numOfKeysLimit: 50, depthOfLimit: 4 };
    Object.assign(n, t);
    var r = [],
      o = [];
    return JSON.stringify(e, function (e, t) {
      if (r.length > 0) {
        var a = r.indexOf(this);
        ~a ? r.splice(a + 1) : r.push(this),
          ~a ? o.splice(a, 1 / 0, e) : o.push(e),
          ~r.indexOf(t) &&
            (t =
              r[0] === t
                ? '[Circular ~]'
                : '[Circular ~.' + o.slice(0, r.indexOf(t)).join('.') + ']');
      } else r.push(t);
      if (null === t) return t;
      if (void 0 === t) return 'undefined';
      if (
        (function (e) {
          if (Rt(e) && Object.keys(e).length > n.numOfKeysLimit) return !0;
          if ('function' == typeof e) return !0;
          if (Rt(e) && xt(e, n.depthOfLimit)) return !0;
          return !1;
        })(t)
      )
        return (function (e) {
          var t = e.toString();
          n.stringLengthLimit &&
            t.length > n.stringLengthLimit &&
            (t = ''.concat(t.slice(0, n.stringLengthLimit), '...'));
          return t;
        })(t);
      if ('bigint' == typeof t) return t.toString() + 'n';
      if (t instanceof Event) {
        var i = {};
        for (var s in t) {
          var u = t[s];
          Array.isArray(u) ? (i[s] = Et(u.length ? u[0] : null)) : (i[s] = u);
        }
        return i;
      }
      return t instanceof Node
        ? t instanceof HTMLElement
          ? t
            ? t.outerHTML
            : ''
          : t.nodeName
        : t instanceof Error
          ? t.stack
            ? t.stack + '\nEnd of stack for Error object'
            : t.name + ': ' + t.message
          : t;
    });
  }
  var Ft = {
    level: [
      'assert',
      'clear',
      'count',
      'countReset',
      'debug',
      'dir',
      'dirxml',
      'error',
      'group',
      'groupCollapsed',
      'groupEnd',
      'info',
      'log',
      'table',
      'time',
      'timeEnd',
      'timeLog',
      'trace',
      'warn',
    ],
    lengthThreshold: 1e3,
    logger: 'console',
  };
  function Dt(e, t, n) {
    var r,
      o = n ? Object.assign({}, Ft, n) : Ft,
      a = o.logger;
    if (!a) return function () {};
    r = 'string' == typeof a ? t[a] : a;
    var i = 0,
      s = !1,
      u = [];
    if (o.level.includes('error')) {
      var c = function (t) {
        var n = t.message,
          r = t.error,
          a = Nt.parse(r).map(function (e) {
            return e.toString();
          }),
          i = [Lt(n, o.stringifyOptions)];
        e({ level: 'error', trace: a, payload: i });
      };
      t.addEventListener('error', c),
        u.push(function () {
          t.removeEventListener('error', c);
        });
      var l = function (t) {
        var n, r;
        t.reason instanceof Error
          ? ((n = t.reason),
            (r = [
              Lt(
                'Uncaught (in promise) '.concat(n.name, ': ').concat(n.message),
                o.stringifyOptions
              ),
            ]))
          : ((n = new Error()),
            (r = [
              Lt('Uncaught (in promise)', o.stringifyOptions),
              Lt(t.reason, o.stringifyOptions),
            ]));
        var a = Nt.parse(n).map(function (e) {
          return e.toString();
        });
        e({ level: 'error', trace: a, payload: r });
      };
      t.addEventListener('unhandledrejection', l),
        u.push(function () {
          t.removeEventListener('unhandledrejection', l);
        });
    }
    var d,
      f = g(o.level);
    try {
      for (f.s(); !(d = f.n()).done; ) {
        var p = d.value;
        u.push(h(r, p));
      }
    } catch (e) {
      f.e(e);
    } finally {
      f.f();
    }
    return function () {
      u.forEach(function (e) {
        return e();
      });
    };
    function h(t, n) {
      var r = this;
      return t[n]
        ? te(t, n, function (t) {
            return function () {
              for (
                var a = arguments.length, u = new Array(a), c = 0;
                c < a;
                c++
              )
                u[c] = arguments[c];
              if ((t.apply(r, u), !s)) {
                s = !0;
                try {
                  var l = Nt.parse(new Error())
                      .map(function (e) {
                        return e.toString();
                      })
                      .splice(1),
                    d = u.map(function (e) {
                      return Lt(e, o.stringifyOptions);
                    });
                  ++i < o.lengthThreshold
                    ? e({ level: n, trace: l, payload: d })
                    : i === o.lengthThreshold &&
                      e({
                        level: 'warn',
                        trace: [],
                        payload: [
                          Lt(
                            'The number of log records reached the threshold.'
                          ),
                        ],
                      });
                } catch (e) {
                  t.apply(void 0, ['rrweb logger error:', e].concat(u));
                } finally {
                  s = !1;
                }
              }
            };
          })
        : function () {};
    }
  }
  var Bt = Array.isArray,
    Wt = Object.prototype,
    Gt = Wt.hasOwnProperty,
    Vt = Wt.toString,
    Zt =
      Bt ||
      function (e) {
        return '[object Array]' === Vt.call(e);
      },
    Ut = function (e) {
      return 'function' == typeof e;
    },
    Kt = function (e) {
      return e === Object(e) && !Zt(e);
    },
    _t = function (e) {
      return void 0 === e;
    },
    jt = function (e) {
      return '[object String]' == Vt.call(e);
    },
    Pt = function (e) {
      return null === e;
    },
    Ht = function (e) {
      return _t(e) || Pt(e);
    },
    Yt = function (e) {
      return '[object Boolean]' === Vt.call(e);
    },
    qt = function (e) {
      return e instanceof Document;
    },
    Jt = function (e) {
      return e instanceof FormData;
    },
    zt = 'undefined' != typeof window ? window : void 0,
    Qt = 'undefined' != typeof globalThis ? globalThis : zt,
    Xt = Array.prototype.forEach,
    $t = null == Qt ? void 0 : Qt.navigator;
  null == Qt || Qt.document,
    null == Qt || Qt.location,
    null == Qt || Qt.fetch,
    null != Qt &&
      Qt.XMLHttpRequest &&
      'withCredentials' in new Qt.XMLHttpRequest() &&
      Qt.XMLHttpRequest,
    null == Qt || Qt.AbortController,
    null == $t || $t.userAgent;
  var en = null != zt ? zt : {},
    tn = '[PostHog.js]',
    nn = {
      _log: function (e) {
        if (zt && en.POSTHOG_DEBUG && !_t(zt.console) && zt.console) {
          for (
            var t =
                ('__rrweb_original__' in zt.console[e])
                  ? zt.console[e].__rrweb_original__
                  : zt.console[e],
              n = arguments.length,
              r = new Array(n > 1 ? n - 1 : 0),
              o = 1;
            o < n;
            o++
          )
            r[o - 1] = arguments[o];
          t.apply(void 0, [tn].concat(r));
        }
      },
      info: function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        nn._log.apply(nn, ['log'].concat(t));
      },
      warn: function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        nn._log.apply(nn, ['warn'].concat(t));
      },
      error: function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        nn._log.apply(nn, ['error'].concat(t));
      },
      critical: function () {
        for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
          n[r] = arguments[r];
        (e = console).error.apply(e, [tn].concat(n));
      },
      uninitializedWarning: function (e) {
        nn.error('You must initialize PostHog before calling '.concat(e));
      },
    },
    rn = {};
  function on(e, t, n) {
    if (!Ht(e)) {
      if (Zt(e))
        return (function (e, t, n) {
          if (Zt(e))
            if (Xt && e.forEach === Xt) e.forEach(t, n);
            else if ('length' in e && e.length === +e.length)
              for (var r = 0, o = e.length; r < o; r++)
                if (r in e && t.call(n, e[r], r) === rn) return;
        })(e, t, n);
      if (Jt(e)) {
        var r,
          o = g(e.entries());
        try {
          for (o.s(); !(r = o.n()).done; ) {
            var a = r.value;
            if (t.call(n, a[1], a[0]) === rn) return;
          }
        } catch (e) {
          o.e(e);
        } finally {
          o.f();
        }
      } else
        for (var i in e) if (Gt.call(e, i) && t.call(n, e[i], i) === rn) return;
    }
  }
  var an = function (e) {
      var t,
        n,
        r =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '&',
        o = [];
      return (
        on(e, function (e, r) {
          _t(e) ||
            _t(r) ||
            'undefined' === r ||
            ((t = encodeURIComponent(
              e instanceof File ? e.name : e.toString()
            )),
            (n = encodeURIComponent(r)),
            (o[o.length] = n + '=' + t));
        }),
        o.join(r)
      );
    },
    sn = {
      initiatorTypes: [
        'audio',
        'beacon',
        'body',
        'css',
        'early-hint',
        'embed',
        'fetch',
        'frame',
        'iframe',
        'icon',
        'image',
        'img',
        'input',
        'link',
        'navigation',
        'object',
        'ping',
        'script',
        'track',
        'video',
        'xmlhttprequest',
      ],
      maskRequestFn: function (e) {
        return e;
      },
      recordHeaders: !1,
      recordBody: !1,
      recordInitialRequests: !1,
      recordPerformance: !1,
      performanceEntryTypeToObserve: [
        'first-input',
        'navigation',
        'paint',
        'resource',
      ],
      payloadSizeLimitBytes: 1e6,
    },
    un = function (e) {
      return 'navigation' === e.entryType;
    },
    cn = function (e) {
      return 'resource' === e.entryType;
    };
  function ln(e, t, n) {
    try {
      if (!(t in e)) return function () {};
      var r = e[t],
        o = n(r);
      return (
        Ut(o) &&
          ((o.prototype = o.prototype || {}),
          Object.defineProperties(o, {
            __rrweb_original__: { enumerable: !1, value: r },
            __posthog_wrapped__: { enumerable: !1, value: !0 },
          })),
        (e[t] = o),
        function () {
          e[t] = r;
        }
      );
    } catch (e) {
      return function () {};
    }
  }
  function dn(e, t) {
    for (var n = e.length - 1; n >= 0; n -= 1) if (t(e[n])) return e[n];
  }
  function fn(e, t, n) {
    if (n.recordInitialRequests) {
      var r = t.performance.getEntries().filter(function (e) {
        return un(e) || (cn(e) && n.initiatorTypes.includes(e.initiatorType));
      });
      e({
        requests: r.flatMap(function (e) {
          return In(e, void 0, void 0, {}, !0);
        }),
        isInitial: !0,
      });
    }
    var o = new t.PerformanceObserver(function (t) {
        var r = t.getEntries().filter(function (e) {
          return (
            un(e) ||
            (cn(e) &&
              n.initiatorTypes.includes(e.initiatorType) &&
              (function (e) {
                return (
                  (!n.recordBody && !n.recordHeaders) ||
                  ('xmlhttprequest' !== e.initiatorType &&
                    'fetch' !== e.initiatorType)
                );
              })(e))
          );
        });
        e({
          requests: r.flatMap(function (e) {
            return In(e, void 0, void 0, {});
          }),
        });
      }),
      a = PerformanceObserver.supportedEntryTypes.filter(function (e) {
        return n.performanceEntryTypeToObserve.includes(e);
      });
    return (
      o.observe({ entryTypes: a }),
      function () {
        o.disconnect();
      }
    );
  }
  function pn(e, t) {
    return !!t && (Yt(t) || t[e]);
  }
  function hn(e, t, n) {
    function r(e) {
      var t = Object.keys(n).find(function (e) {
          return 'content-type' === e.toLowerCase();
        }),
        r = t && n[t];
      return e.some(function (e) {
        return null == r ? void 0 : r.includes(e);
      });
    }
    if (!t) return !1;
    if (Yt(t)) return !0;
    if (Zt(t)) return r(t);
    var o = t[e];
    return Yt(o) ? o : r(o);
  }
  function gn(e, t, n, r, o) {
    return mn.apply(this, arguments);
  }
  function mn() {
    return (
      (mn = i(
        r().mark(function e(t, n, o, a, i) {
          var s,
            u,
            c,
            l = arguments;
          return r().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (
                    !((s = l.length > 5 && void 0 !== l[5] ? l[5] : 0) > 10)
                  ) {
                    e.next = 4;
                    break;
                  }
                  return (
                    nn.warn('Failed to get performance entry for request', {
                      url: o,
                      initiatorType: n,
                    }),
                    e.abrupt('return', null)
                  );
                case 4:
                  if (
                    ((u = t.performance.getEntriesByName(o)),
                    (c = dn(u, function (e) {
                      return (
                        cn(e) &&
                        e.initiatorType === n &&
                        (!a || e.startTime >= a) &&
                        (!i || e.startTime <= i)
                      );
                    })))
                  ) {
                    e.next = 10;
                    break;
                  }
                  return (
                    (e.next = 9),
                    new Promise(function (e) {
                      return setTimeout(e, 50 * s);
                    })
                  );
                case 9:
                  return e.abrupt('return', gn(t, n, o, a, i, s + 1));
                case 10:
                  return e.abrupt('return', c);
                case 11:
                case 'end':
                  return e.stop();
              }
          }, e);
        })
      )),
      mn.apply(this, arguments)
    );
  }
  function vn(e) {
    if (Ht(e)) return null;
    if (jt(e)) return e;
    if (qt(e)) return e.textContent;
    if (Jt(e)) return an(e);
    if (Kt(e))
      try {
        return JSON.stringify(e);
      } catch (e) {
        return '[SessionReplay] Failed to stringify response object';
      }
    return '[SessionReplay] Cannot read body of type ' + toString.call(e);
  }
  var yn = function (e) {
    return 'navigation' === e.entryType || 'resource' === e.entryType;
  };
  function In(e, t, r, o, a) {
    var i = Math.floor(Date.now() - performance.now()),
      s = Math.floor(i + e.startTime),
      u = [
        n(
          n({}, e.toJSON()),
          {},
          {
            startTime: Math.round(e.startTime),
            endTime: Math.round(e.responseEnd),
            timeOrigin: i,
            timestamp: s,
            method: t,
            initiatorType: e.initiatorType,
            status: r,
            requestHeaders: o.requestHeaders,
            requestBody: o.requestBody,
            responseHeaders: o.responseHeaders,
            responseBody: o.responseBody,
            isInitial: a,
          }
        ),
      ];
    if (yn(e)) {
      var c,
        l = g(e.serverTiming || []);
      try {
        for (l.s(); !(c = l.n()).done; ) {
          var d = c.value;
          u.push({
            timeOrigin: i,
            timestamp: s,
            startTime: Math.round(e.startTime),
            name: d.name,
            duration: d.duration,
            entryType: 'serverTiming',
          });
        }
      } catch (e) {
        l.e(e);
      } finally {
        l.f();
      }
    }
    return u;
  }
  var Cn = ['video/', 'audio/'];
  function bn(e) {
    var t;
    if ('chunked' === e.headers.get('Transfer-Encoding'))
      return 'Chunked Transfer-Encoding is not supported';
    var n =
        null === (t = e.headers.get('Content-Type')) || void 0 === t
          ? void 0
          : t.toLowerCase(),
      r = Cn.some(function (e) {
        return null == n ? void 0 : n.startsWith(e);
      });
    return n && r ? 'Content-Type '.concat(n, ' is not supported') : null;
  }
  function Sn(e) {
    return new Promise(function (t, n) {
      var r = setTimeout(function () {
        return t('[SessionReplay] Timeout while trying to read body');
      }, 500);
      e.clone()
        .text()
        .then(
          function (e) {
            return t(e);
          },
          function (e) {
            return n(e);
          }
        )
        .finally(function () {
          return clearTimeout(r);
        });
    });
  }
  function An(e) {
    return wn.apply(this, arguments);
  }
  function wn() {
    return (wn = i(
      r().mark(function e(t) {
        var n;
        return r().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (((n = bn(t)), Pt(n))) {
                  e.next = 3;
                  break;
                }
                return e.abrupt('return', Promise.resolve(n));
              case 3:
                return e.abrupt('return', Sn(t));
              case 4:
              case 'end':
                return e.stop();
            }
        }, e);
      })
    )).apply(this, arguments);
  }
  function kn(e, t, o) {
    if (!('performance' in t)) return function () {};
    var a = o ? Object.assign({}, sn, o) : sn,
      s = function (t) {
        var r = [];
        t.requests.forEach(function (e) {
          var t = a.maskRequestFn(e);
          t && r.push(t);
        }),
          r.length > 0 && e(n(n({}, t), {}, { requests: r }));
      },
      u = fn(s, t, a),
      c = function () {},
      l = function () {};
    return (
      (a.recordHeaders || a.recordBody) &&
        ((c = (function (e, t, n) {
          if (!n.initiatorTypes.includes('xmlhttprequest'))
            return function () {};
          var r = pn('request', n.recordHeaders),
            o = pn('response', n.recordHeaders),
            a = ln(t.XMLHttpRequest.prototype, 'open', function (a) {
              return function (i, s) {
                var u,
                  c,
                  l =
                    !(arguments.length > 2 && void 0 !== arguments[2]) ||
                    arguments[2],
                  d = arguments.length > 3 ? arguments[3] : void 0,
                  f = arguments.length > 4 ? arguments[4] : void 0,
                  p = this,
                  h = new Request(s),
                  g = {},
                  m = {},
                  v = p.setRequestHeader.bind(p);
                (p.setRequestHeader = function (e, t) {
                  return (m[e] = t), v(e, t);
                }),
                  r && (g.requestHeaders = m);
                var y = p.send.bind(p);
                (p.send = function (e) {
                  return (
                    hn('request', n.recordBody, m) &&
                      (_t(e) || Pt(e)
                        ? (g.requestBody = null)
                        : (g.requestBody = vn(e))),
                    (u = t.performance.now()),
                    y(e)
                  );
                }),
                  p.addEventListener('readystatechange', function () {
                    if (p.readyState === p.DONE) {
                      c = t.performance.now();
                      var r = {};
                      p
                        .getAllResponseHeaders()
                        .trim()
                        .split(/[\r\n]+/)
                        .forEach(function (e) {
                          var t = e.split(': '),
                            n = t.shift(),
                            o = t.join(': ');
                          n && (r[n] = o);
                        }),
                        o && (g.responseHeaders = r),
                        hn('response', n.recordBody, r) &&
                          (Ht(p.response)
                            ? (g.responseBody = null)
                            : (g.responseBody = vn(p.response))),
                        gn(t, 'xmlhttprequest', h.url, u, c)
                          .then(function (t) {
                            if (!Pt(t)) {
                              var n = In(
                                t,
                                h.method,
                                null == p ? void 0 : p.status,
                                g
                              );
                              e({ requests: n });
                            }
                          })
                          .catch(function () {});
                    }
                  }),
                  a.call(p, i, s, l, d, f);
              };
            });
          return function () {
            a();
          };
        })(s, t, a)),
        (l = (function (e, t, n) {
          if (!n.initiatorTypes.includes('fetch')) return function () {};
          var o = pn('request', n.recordHeaders),
            a = pn('response', n.recordHeaders),
            s = ln(t, 'fetch', function (s) {
              return (function () {
                var u = i(
                  r().mark(function i(u, c) {
                    var l, d, f, p, h, g, m;
                    return r().wrap(
                      function (r) {
                        for (;;)
                          switch ((r.prev = r.next)) {
                            case 0:
                              if (
                                ((l = new Request(u, c)),
                                (f = {}),
                                (r.prev = 2),
                                (g = {}),
                                l.headers.forEach(function (e, t) {
                                  g[t] = e;
                                }),
                                o && (f.requestHeaders = g),
                                !hn('request', n.recordBody, g))
                              ) {
                                r.next = 10;
                                break;
                              }
                              return (r.next = 9), Sn(l);
                            case 9:
                              f.requestBody = r.sent;
                            case 10:
                              return (
                                (p = t.performance.now()), (r.next = 13), s(l)
                              );
                            case 13:
                              if (
                                ((d = r.sent),
                                (h = t.performance.now()),
                                (m = {}),
                                d.headers.forEach(function (e, t) {
                                  m[t] = e;
                                }),
                                a && (f.responseHeaders = m),
                                !hn('response', n.recordBody, m))
                              ) {
                                r.next = 22;
                                break;
                              }
                              return (r.next = 21), An(d);
                            case 21:
                              f.responseBody = r.sent;
                            case 22:
                              return r.abrupt('return', d);
                            case 23:
                              return (
                                (r.prev = 23),
                                gn(t, 'fetch', l.url, p, h)
                                  .then(function (t) {
                                    var n;
                                    if (!Pt(t)) {
                                      var r = In(
                                        t,
                                        l.method,
                                        null === (n = d) || void 0 === n
                                          ? void 0
                                          : n.status,
                                        f
                                      );
                                      e({ requests: r });
                                    }
                                  })
                                  .catch(function () {}),
                                r.finish(23)
                              );
                            case 26:
                            case 'end':
                              return r.stop();
                          }
                      },
                      i,
                      null,
                      [[2, , 23, 26]]
                    );
                  })
                );
                return function (e, t) {
                  return u.apply(this, arguments);
                };
              })();
            });
          return function () {
            s();
          };
        })(s, t, a))),
      function () {
        u(), c(), l();
      }
    );
  }
  var Mn = 'rrweb/network@1',
    Tn = function (e) {
      return { name: Mn, observer: kn, options: e };
    };
  zt &&
    ((zt.rrweb = { record: wt, version: 'v2', rrwebVersion: '2.0.0-alpha.13' }),
    (zt.rrwebConsoleRecord = {
      getRecordConsolePlugin: function (e) {
        return { name: 'rrweb/console@1', observer: Dt, options: e };
      },
    }),
    (zt.getRecordNetworkPlugin = Tn)),
    (e.NETWORK_PLUGIN_NAME = Mn),
    (e.default = wt),
    (e.findLast = dn),
    (e.getRecordNetworkPlugin = Tn),
    (e.patch = ln),
    Object.defineProperty(e, '__esModule', { value: !0 });
})({});
//# sourceMappingURL=recorder-v2.js.map
