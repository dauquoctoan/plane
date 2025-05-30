/**
 * crisp-client
 * @version v2.12.1 9e7cb0c
 * @author Crisp IM SAS
 * @date 5/9/2024
 */
(function () {
  try {
    new ((function () {
      function t() {
        var t,
          i = this;
        try {
          (this.ns = 'CrispLoader'),
            (this.n = {
              warn: function (t, i) {},
              error: function (t, i) {},
              info: function (t, i) {},
              log: function (t, i) {},
              debug: function (t, i) {},
            }),
            (this.s = !1),
            (this.f = 'crisp-client'),
            (this.w = 'client.crisp.chat'),
            (this.y = 'client.relay.crisp.chat'),
            (this.v = 'stream.relay.crisp.chat'),
            (this.x = '9e7cb0c'),
            (this.on = 'production'),
            (this.fn = 'https:'),
            (this._n = 'https://crisp.chat'),
            (this.fs = 'https://go.crisp.chat'),
            (this.ws = 'https://image.crisp.chat'),
            (this.ms = 'https://game.crisp.chat'),
            (this.$s = ''.concat(this.fn, '//').concat(this.y)),
            (this._e = ''.concat(this.fn, '//').concat(this.v)),
            (this.io = ''.concat(this.fn, '//').concat(this.w)),
            (this.do = [
              {
                urls: [
                  'stun:stun.media.crisp.chat:3478',
                  'stun:stun.media.crisp.chat:3479',
                ],
              },
              {
                urls: [
                  'turn:turn.media.crisp.chat:3478?transport=udp',
                  'turn:turn.media.crisp.chat:3478?transport=tcp',
                  'turn:turn.media.crisp.chat:3479?transport=udp',
                  'turn:turn.media.crisp.chat:3479?transport=tcp',
                  'turns:turn.media.crisp.chat:443?transport=tcp',
                ],
                username: 'client_9F9kh',
                credential:
                  'DPCEHTqUb7jiJ2mvnzcUmFV4mKK6c8jntUXo4gC8tYCbHTocuy9YJiCxpQ4tmG3p',
              },
            ]),
            (this._a = !0),
            (this._f = {
              domains: [],
              agents: [
                'Trident',
                'Googlebot',
                'Bingbot',
                'Slurp',
                'DuckDuckBot',
                'Baiduspider',
                'YandexBot',
                'GTmetrix',
                'Lighthouse',
                'Acunetix',
                'Ahrefs',
                'SemrushBot',
                'SiteAuditBot',
                'SplitSignalBot',
              ],
            }),
            (this.el = 'static/javascripts'),
            (this._p = 'static/stylesheets'),
            (this.wp = '$__CRISP_INSTANCE'),
            (this.mp = '$__CRISP_INCLUDED'),
            (this.Ip = 100),
            (this.yp = 3e4),
            (this.Cp = 1e3),
            (this.gp = 280),
            (this.Rp = 320),
            (this.Ep = 420),
            (this.Sp = [
              { pattern: /edg(?:e)?\/([0-9\.]+)/, version: 79 },
              { pattern: /chrom(?:e|ium)\/([0-9\.]+)/, version: 53 },
              { pattern: /firefox\/([0-9\.]+)/, version: 49 },
              {
                pattern: /version\/([0-9\.]+)(?: mobile\/(?:[^\s]+))? safari\//,
                version: 10,
              },
              { pattern: /android ([0-9\.]+)/, version: 5 },
            ]),
            (this.Pp =
              /(?:http\:|https\:)?\/\/[^\/]+\/l\/([a-zA-Z0-9\-_]+)\.js/i),
            this.bp(),
            !0 === window[this.mp] ||
              (void 0 !== window[this.wp] &&
                'function' == typeof window[this.wp].__init) ||
              !0 !== this.Dp() ||
              ((window[this.mp] = !0),
              'interactive' === document.readyState ||
              'complete' === document.readyState
                ? this.init()
                : ((t = document.onreadystatechange || function () {}),
                  window.addEventListener('DOMContentLoaded', function () {
                    i.init();
                  }),
                  (document.onreadystatechange = function () {
                    'function' == typeof t && t(),
                      ('interactive' !== document.readyState &&
                        'complete' !== document.readyState) ||
                        setTimeout(function () {
                          i.init();
                        }, i.Cp);
                  })),
              this.Op());
        } catch (t) {}
      }
      var i = t.prototype;
      return (
        (i.init = function () {
          var i,
            n,
            s = this,
            e = 'init';
          try {
            this.Tp || !0 === this.Np || this.kp(),
              this.Tp &&
                !0 !== this.Np &&
                ((this.Np = !0),
                ((i = document.createElement('div')).id = 'crisp-loader'),
                document.getElementsByTagName('body')[0].appendChild(i),
                (n = function () {
                  return (
                    'none' ===
                    window.getComputedStyle(i).getPropertyValue('display')
                  );
                }),
                (function t() {
                  s.Kp = setTimeout(function () {
                    (s.Kp = null),
                      (s.Ap -= s.Ip),
                      void 0 !== window[s.wp] &&
                      'function' == typeof window[s.wp].__init &&
                      !0 === n()
                        ? (s.n.info(
                            ''.concat(s.ns, '.').concat(e),
                            'Dependencies loaded'
                          ),
                          i.parentNode.removeChild(i),
                          window[s.wp].__init({
                            dollar_crisp: window[s.wp],
                            project_name: s.f,
                            url_go: s.fs,
                            url_image: s.ws,
                            url_game: s.ms,
                            url_relay_client: s.$s,
                            url_relay_stream: s._e,
                            url_website: s._n,
                            url_assets: s.io,
                            rtc_ice: s.do,
                            socket_affinity: s._a,
                            client_environment: s.on,
                            client_revision: s.x,
                            website_domain: s.jp,
                            website_id: s.Tp,
                            token_id: s.Bp,
                            cookie_expire: s.Pi,
                            cookie_domain: s.Gp,
                            page_url: s.xp,
                            page_domain: s.Up,
                            browser_useragent: s.Lp,
                            browser_timezone: s.Mp,
                            browser_capabilities: s.Yp,
                            browser_locales: s.Fp,
                            ready_trigger: s.Xp,
                            runtime_configuration: s.zp,
                            reset_handler: function () {
                              s.reset();
                            },
                          }))
                        : 0 < s.Ap
                          ? t()
                          : s.n.error(
                              ''.concat(s.ns, '.').concat(e),
                              'Could not load dependencies'
                            );
                  }, s.Ip);
                })());
          } catch (t) {}
        }),
        (i.reset = function () {
          try {
            null !== this.Kp && clearTimeout(this.Kp), this.bp(), this.init();
          } catch (t) {}
        }),
        (i.Op = function () {
          try {
            this.Jp('dns-prefetch', this.$s),
              this.Jp('preconnect', this.io),
              this.Wp(),
              this.Hp();
          } catch (t) {}
        }),
        (i.Jp = function (t, i) {
          try {
            var n = document.createElement('link');
            n.setAttribute('href', i),
              n.setAttribute('rel', t),
              n.setAttribute('crossorigin', ''),
              this.$p(n),
              document.getElementsByTagName('head')[0].appendChild(n);
          } catch (t) {}
        }),
        (i.Wp = function () {
          try {
            var t = document.createElement('script');
            (t.src = [
              ''.concat(this.io, '/'),
              ''.concat(this.el, '/'),
              'client.js?'.concat(this.x),
            ].join('')),
              (t.type = 'text/javascript'),
              (t.async = !0),
              this.$p(t),
              document.getElementsByTagName('head')[0].appendChild(t);
          } catch (t) {}
        }),
        (i.Hp = function () {
          try {
            var t = this.qp(),
              i = document.createElement('link');
            (i.href = [
              ''.concat(this.io, '/'),
              ''.concat(this._p, '/'),
              'client_'.concat(t, '.css?').concat(this.x),
            ].join('')),
              (i.type = 'text/css'),
              (i.rel = 'stylesheet'),
              this.$p(i),
              document.getElementsByTagName('head')[0].appendChild(i);
          } catch (t) {}
        }),
        (i.bp = function () {
          this.Qp(), this.kp(), this.Vp(), this.Zp();
        }),
        (i.Qp = function () {
          (this.Np = !1),
            (this.Kp = null),
            (this.Ap = this.yp),
            (this.jp = document.domain),
            (this.xp = document.location.href),
            (this.Up = document.location.hostname),
            (this.Lp = window.navigator.userAgent),
            (this.Mp = new Date().getTimezoneOffset()),
            (this.Fp = this.t_());
        }),
        (i.kp = function () {
          'string' == typeof CRISP_WEBSITE_ID && CRISP_WEBSITE_ID
            ? (this.Tp = CRISP_WEBSITE_ID)
            : (this.Tp = this.i_()),
            'string' == typeof CRISP_TOKEN_ID && CRISP_TOKEN_ID
              ? (this.Bp = CRISP_TOKEN_ID)
              : 'number' == typeof CRISP_TOKEN_ID && CRISP_TOKEN_ID
                ? (this.Bp = CRISP_TOKEN_ID.toString())
                : (this.Bp = null),
            'number' == typeof CRISP_COOKIE_EXPIRE && 0 < CRISP_COOKIE_EXPIRE
              ? (this.Pi = CRISP_COOKIE_EXPIRE)
              : (this.Pi = null),
            'string' == typeof CRISP_COOKIE_DOMAIN && CRISP_COOKIE_DOMAIN
              ? (this.Gp = CRISP_COOKIE_DOMAIN)
              : (this.Gp = null),
            'function' == typeof CRISP_READY_TRIGGER
              ? (this.Xp = CRISP_READY_TRIGGER)
              : (this.Xp = {}),
            'object' == typeof CRISP_RUNTIME_CONFIG
              ? (this.zp = CRISP_RUNTIME_CONFIG)
              : (this.zp = {}),
            'object' == typeof CRISP_INCLUDE_ATTRS
              ? (this.n_ = CRISP_INCLUDE_ATTRS)
              : (this.n_ = {});
        }),
        (i.Vp = function () {
          try {
            (this.Yp = []),
              'function' == typeof window.MutationObserver &&
                'function' == typeof JSON.stringify &&
                this.Yp.push('browsing'),
              (('function' == typeof window.RTCPeerConnection &&
                'object' == typeof navigator.mediaDevices &&
                'https:' === document.location.protocol &&
                (window.innerWidth || 0) >= this.Rp &&
                (window.innerHeight || 0) >= this.Ep) ||
                !0 === this.s) &&
                this.Yp.push('call');
          } catch (t) {}
        }),
        (i.Zp = function () {
          var t;
          try {
            this.zp.locale &&
              (-1 !== (t = this.Fp.indexOf(this.zp.locale)) &&
                this.Fp.splice(t, 1),
              this.Fp.unshift(this.zp.locale));
          } catch (t) {}
        }),
        (i.$p = function (t) {
          try {
            for (var i in this.n_)
              this.n_.hasOwnProperty(i) && t.setAttribute(i, this.n_[i]);
          } catch (t) {}
        }),
        (i.i_ = function () {
          var t = null;
          try {
            for (
              var i = document.querySelectorAll('script[src]'), n = 0;
              n < i.length;
              n++
            ) {
              var s = this.Pp.exec(i[n].src);
              if (s && 'string' == typeof s[1]) {
                t = s[1];
                break;
              }
            }
          } catch (t) {
          } finally {
            return t;
          }
        }),
        (i.qp = function () {
          var t = 'default';
          try {
            var i = (navigator.userAgent || '').toLowerCase(),
              n = (navigator.appVersion || '').toLowerCase(),
              s = !1;
            if (
              (!0 !== s &&
                ((-1 === i.indexOf('opera mini/') &&
                  -1 === i.indexOf('msie') &&
                  -1 === n.indexOf('trident/')) ||
                  (s = !0)),
              !0 !== s)
            )
              for (var e = 0; e < this.Sp.length; e++) {
                var r = this.Sp[e],
                  o = i.match(r.pattern);
                if (null != o && o[1] && parseInt(o[1], 10) <= r.version) {
                  s = !0;
                  break;
                }
              }
            !0 === s && (t = 'legacy');
          } catch (t) {
          } finally {
            return t;
          }
        }),
        (i.Dp = function () {
          var t = !0;
          try {
            ((window.innerWidth && window.innerWidth < this.gp) ||
              !0 !== this.s_() ||
              !0 === this.e_(this.Up) ||
              !0 === this.r_(this.Lp) ||
              !window.WebSocket ||
              (window.__nativePerformance && window.__nativePromise)) &&
              (t = !1);
          } catch (t) {
          } finally {
            return t;
          }
        }),
        (i.s_ = function () {
          var t,
            i,
            n = !1;
          try {
            !0 === navigator.cookieEnabled
              ? (n = !0)
              : window.localStorage &&
                'function' == typeof window.localStorage.setItem &&
                'function' == typeof window.localStorage.getItem &&
                'function' == typeof window.localStorage.removeItem &&
                ((t = ''.concat(new Date().getTime())),
                (i = 'crisp-client/loader/storage/check'),
                window.localStorage.setItem(i, t),
                (n = window.localStorage.getItem(i) === t));
          } catch (t) {
          } finally {
            return n;
          }
        }),
        (i.e_ = function () {
          var t =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : '',
            i = !1;
          try {
            if (t)
              for (var n = 0; n < this._f.domains.length; n++) {
                var s = this._f.domains[n],
                  e = '.'.concat(s);
                if (t === s || t.slice(-1 * e.length) === e) {
                  i = !0;
                  break;
                }
              }
          } catch (t) {
          } finally {
            return i;
          }
        }),
        (i.r_ = function () {
          var t =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : '',
            i = !1;
          try {
            if (t)
              for (var n = 0; n < this._f.agents.length; n++)
                if (-1 !== t.indexOf(this._f.agents[n])) {
                  i = !0;
                  break;
                }
          } catch (t) {
          } finally {
            return i;
          }
        }),
        (i.t_ = function () {
          var t = [];
          try {
            for (
              var i,
                n =
                  0 <
                  (null === (i = navigator.languages) || void 0 === i
                    ? void 0
                    : i.length)
                    ? navigator.languages
                    : [navigator.language || navigator.userLanguage],
                s = 0;
              s < n.length;
              s++
            )
              n[s] && t.push(n[s]);
          } catch (t) {
          } finally {
            return t;
          }
        }),
        t
      );
    })())();
  } catch (t) {}
})();
