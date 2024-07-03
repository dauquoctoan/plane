(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8797],
  {
    62610: function (e) {
      var t = /[\\\/\-_+.# \t"@\[\(\{&]/,
        n = /[\\\/\-_+.# \t"@\[\(\{&]/g;
      e.exports = function (e, r) {
        return (function e(r, o, i, u, l, c) {
          if (c === o.length) return l === r.length ? 1 : 0.99;
          for (
            var a, s, f, d = u.charAt(c), p = i.indexOf(d, l), m = 0;
            p >= 0;

          )
            (a = e(r, o, i, u, p + 1, c + 1)) > m &&
              (p === l
                ? (a *= 1)
                : t.test(r.charAt(p - 1))
                  ? ((a *= 0.9),
                    (f = r.slice(l, p - 1).match(n)) &&
                      l > 0 &&
                      (a *= Math.pow(0.999, f.length)))
                  : (t.test(r.slice(l, p - 1)) ? (a *= 0) : (a *= 0.3),
                    l > 0 && (a *= Math.pow(0.999, p - l))),
              r.charAt(p) !== o.charAt(c) && (a *= 0.9999)),
              a < 0.1 &&
                i.charAt(p - 1) === u.charAt(c + 1) &&
                i.charAt(p - 1) !== u.charAt(c) &&
                0.1 * (s = e(r, o, i, u, p + 1, c + 2)) > a &&
                (a = 0.1 * s),
              a > m && (m = a),
              (p = i.indexOf(d, p + 1));
          return m;
        })(e, r, e.toLowerCase(), r.toLowerCase(), 0, 0);
      };
    },
    26452: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      /**
       * @license lucide-react v0.378.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let r = (0, n(73471).Z)('ClipboardList', [
        [
          'rect',
          {
            width: '8',
            height: '4',
            x: '8',
            y: '2',
            rx: '1',
            ry: '1',
            key: 'tgr4d6',
          },
        ],
        [
          'path',
          {
            d: 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2',
            key: '116196',
          },
        ],
        ['path', { d: 'M12 11h4', key: '1jrz19' }],
        ['path', { d: 'M12 16h4', key: 'n85exb' }],
        ['path', { d: 'M8 11h.01', key: '1dfujw' }],
        ['path', { d: 'M8 16h.01', key: '18s6g9' }],
      ]);
    },
    95665: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      /**
       * @license lucide-react v0.378.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let r = (0, n(73471).Z)('Clipboard', [
        [
          'rect',
          {
            width: '8',
            height: '4',
            x: '8',
            y: '2',
            rx: '1',
            ry: '1',
            key: 'tgr4d6',
          },
        ],
        [
          'path',
          {
            d: 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2',
            key: '116196',
          },
        ],
      ]);
    },
    24830: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      /**
       * @license lucide-react v0.378.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let r = (0, n(73471).Z)('Command', [
        [
          'path',
          {
            d: 'M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3',
            key: '11bfej',
          },
        ],
      ]);
    },
    88758: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      /**
       * @license lucide-react v0.378.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let r = (0, n(73471).Z)('FolderPlus', [
        ['path', { d: 'M12 10v6', key: '1bos4e' }],
        ['path', { d: 'M9 13h6', key: '1uhe8q' }],
        [
          'path',
          {
            d: 'M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z',
            key: '1kt360',
          },
        ],
      ]);
    },
    93739: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      /**
       * @license lucide-react v0.378.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let r = (0, n(73471).Z)('Github', [
        [
          'path',
          {
            d: 'M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4',
            key: 'tonef',
          },
        ],
        ['path', { d: 'M9 18c-4.51 2-5-2-7-2', key: '9comsn' }],
      ]);
    },
    70048: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      /**
       * @license lucide-react v0.378.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let r = (0, n(73471).Z)('Globe', [
        ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
        [
          'path',
          {
            d: 'M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20',
            key: '13o1zl',
          },
        ],
        ['path', { d: 'M2 12h20', key: '9i4pu4' }],
      ]);
    },
    36890: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      /**
       * @license lucide-react v0.378.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let r = (0, n(73471).Z)('Link2Off', [
        ['path', { d: 'M9 17H7A5 5 0 0 1 7 7', key: '10o201' }],
        ['path', { d: 'M15 7h2a5 5 0 0 1 4 8', key: '1d3206' }],
        ['line', { x1: '8', x2: '12', y1: '12', y2: '12', key: 'rvw6j4' }],
        ['line', { x1: '2', x2: '22', y1: '2', y2: '22', key: 'a6p6uj' }],
      ]);
    },
    14178: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      /**
       * @license lucide-react v0.378.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let r = (0, n(73471).Z)('LockOpen', [
        [
          'rect',
          {
            width: '18',
            height: '11',
            x: '3',
            y: '11',
            rx: '2',
            ry: '2',
            key: '1w4ew1',
          },
        ],
        ['path', { d: 'M7 11V7a5 5 0 0 1 9.9-1', key: '1mm8w8' }],
      ]);
    },
    37904: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      /**
       * @license lucide-react v0.378.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let r = (0, n(73471).Z)('Menu', [
        ['line', { x1: '4', x2: '20', y1: '12', y2: '12', key: '1e0a9i' }],
        ['line', { x1: '4', x2: '20', y1: '6', y2: '6', key: '1owob3' }],
        ['line', { x1: '4', x2: '20', y1: '18', y2: '18', key: 'yk5zj1' }],
      ]);
    },
    62253: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      /**
       * @license lucide-react v0.378.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let r = (0, n(73471).Z)('Minus', [
        ['path', { d: 'M5 12h14', key: '1ays0h' }],
      ]);
    },
    9486: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      /**
       * @license lucide-react v0.378.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let r = (0, n(73471).Z)('UserRoundMinus', [
        ['path', { d: 'M2 21a8 8 0 0 1 13.292-6', key: 'bjp14o' }],
        ['circle', { cx: '10', cy: '8', r: '5', key: 'o932ke' }],
        ['path', { d: 'M22 19h-6', key: 'vcuq98' }],
      ]);
    },
    34659: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      /**
       * @license lucide-react v0.378.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let r = (0, n(73471).Z)('UserRoundPlus', [
        ['path', { d: 'M2 21a8 8 0 0 1 13.292-6', key: 'bjp14o' }],
        ['circle', { cx: '10', cy: '8', r: '5', key: 'o932ke' }],
        ['path', { d: 'M19 16v6', key: 'tddt3s' }],
        ['path', { d: 'M22 19h-6', key: 'vcuq98' }],
      ]);
    },
    75288: function (e, t, n) {
      'use strict';
      n.d(t, {
        Cp: function () {
          return s;
        },
        RR: function () {
          return l;
        },
        oo: function () {
          return i;
        },
        uY: function () {
          return f;
        },
      });
      var r = n(92876);
      function o(e, t, n) {
        let o,
          { reference: i, floating: u } = e,
          l = (0, r.Qq)(t),
          c = (0, r.Wh)(t),
          a = (0, r.I4)(c),
          s = (0, r.k3)(t),
          f = 'y' === l,
          d = i.x + i.width / 2 - u.width / 2,
          p = i.y + i.height / 2 - u.height / 2,
          m = i[a] / 2 - u[a] / 2;
        switch (s) {
          case 'top':
            o = { x: d, y: i.y - u.height };
            break;
          case 'bottom':
            o = { x: d, y: i.y + i.height };
            break;
          case 'right':
            o = { x: i.x + i.width, y: p };
            break;
          case 'left':
            o = { x: i.x - u.width, y: p };
            break;
          default:
            o = { x: i.x, y: i.y };
        }
        switch ((0, r.hp)(t)) {
          case 'start':
            o[c] -= m * (n && f ? -1 : 1);
            break;
          case 'end':
            o[c] += m * (n && f ? -1 : 1);
        }
        return o;
      }
      let i = async (e, t, n) => {
        let {
            placement: r = 'bottom',
            strategy: i = 'absolute',
            middleware: u = [],
            platform: l,
          } = n,
          c = u.filter(Boolean),
          a = await (null == l.isRTL ? void 0 : l.isRTL(t)),
          s = await l.getElementRects({
            reference: e,
            floating: t,
            strategy: i,
          }),
          { x: f, y: d } = o(s, r, a),
          p = r,
          m = {},
          v = 0;
        for (let n = 0; n < c.length; n++) {
          let { name: u, fn: h } = c[n],
            {
              x: g,
              y: y,
              data: w,
              reset: E,
            } = await h({
              x: f,
              y: d,
              initialPlacement: r,
              placement: p,
              strategy: i,
              middlewareData: m,
              rects: s,
              platform: l,
              elements: { reference: e, floating: t },
            });
          if (
            ((f = null != g ? g : f),
            (d = null != y ? y : d),
            (m = { ...m, [u]: { ...m[u], ...w } }),
            E && v <= 50)
          ) {
            v++,
              'object' == typeof E &&
                (E.placement && (p = E.placement),
                E.rects &&
                  (s =
                    !0 === E.rects
                      ? await l.getElementRects({
                          reference: e,
                          floating: t,
                          strategy: i,
                        })
                      : E.rects),
                ({ x: f, y: d } = o(s, p, a))),
              (n = -1);
            continue;
          }
        }
        return { x: f, y: d, placement: p, strategy: i, middlewareData: m };
      };
      async function u(e, t) {
        var n;
        void 0 === t && (t = {});
        let { x: o, y: i, platform: u, rects: l, elements: c, strategy: a } = e,
          {
            boundary: s = 'clippingAncestors',
            rootBoundary: f = 'viewport',
            elementContext: d = 'floating',
            altBoundary: p = !1,
            padding: m = 0,
          } = (0, r.ku)(t, e),
          v = (0, r.yd)(m),
          h = c[p ? ('floating' === d ? 'reference' : 'floating') : d],
          g = (0, r.JB)(
            await u.getClippingRect({
              element:
                null ==
                  (n = await (null == u.isElement ? void 0 : u.isElement(h))) ||
                n
                  ? h
                  : h.contextElement ||
                    (await (null == u.getDocumentElement
                      ? void 0
                      : u.getDocumentElement(c.floating))),
              boundary: s,
              rootBoundary: f,
              strategy: a,
            })
          ),
          y = 'floating' === d ? { ...l.floating, x: o, y: i } : l.reference,
          w = await (null == u.getOffsetParent
            ? void 0
            : u.getOffsetParent(c.floating)),
          E = ((await (null == u.isElement ? void 0 : u.isElement(w))) &&
            (await (null == u.getScale ? void 0 : u.getScale(w)))) || {
            x: 1,
            y: 1,
          },
          b = (0, r.JB)(
            u.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await u.convertOffsetParentRelativeRectToViewportRelativeRect({
                  rect: y,
                  offsetParent: w,
                  strategy: a,
                })
              : y
          );
        return {
          top: (g.top - b.top + v.top) / E.y,
          bottom: (b.bottom - g.bottom + v.bottom) / E.y,
          left: (g.left - b.left + v.left) / E.x,
          right: (b.right - g.right + v.right) / E.x,
        };
      }
      let l = function (e) {
        return (
          void 0 === e && (e = {}),
          {
            name: 'flip',
            options: e,
            async fn(t) {
              var n, o, i, l, c;
              let {
                  placement: a,
                  middlewareData: s,
                  rects: f,
                  initialPlacement: d,
                  platform: p,
                  elements: m,
                } = t,
                {
                  mainAxis: v = !0,
                  crossAxis: h = !0,
                  fallbackPlacements: g,
                  fallbackStrategy: y = 'bestFit',
                  fallbackAxisSideDirection: w = 'none',
                  flipAlignment: E = !0,
                  ...b
                } = (0, r.ku)(e, t);
              if (null != (n = s.arrow) && n.alignmentOffset) return {};
              let x = (0, r.k3)(a),
                k = (0, r.k3)(d) === d,
                C = await (null == p.isRTL ? void 0 : p.isRTL(m.floating)),
                R = g || (k || !E ? [(0, r.pw)(d)] : (0, r.gy)(d));
              g || 'none' === w || R.push(...(0, r.KX)(d, E, w, C));
              let S = [d, ...R],
                M = await u(t, b),
                L = [],
                P = (null == (o = s.flip) ? void 0 : o.overflows) || [];
              if ((v && L.push(M[x]), h)) {
                let e = (0, r.i8)(a, f, C);
                L.push(M[e[0]], M[e[1]]);
              }
              if (
                ((P = [...P, { placement: a, overflows: L }]),
                !L.every(e => e <= 0))
              ) {
                let e = ((null == (i = s.flip) ? void 0 : i.index) || 0) + 1,
                  t = S[e];
                if (t)
                  return {
                    data: { index: e, overflows: P },
                    reset: { placement: t },
                  };
                let n =
                  null ==
                  (l = P.filter(e => e.overflows[0] <= 0).sort(
                    (e, t) => e.overflows[1] - t.overflows[1]
                  )[0])
                    ? void 0
                    : l.placement;
                if (!n)
                  switch (y) {
                    case 'bestFit': {
                      let e =
                        null ==
                        (c = P.map(e => [
                          e.placement,
                          e.overflows
                            .filter(e => e > 0)
                            .reduce((e, t) => e + t, 0),
                        ]).sort((e, t) => e[1] - t[1])[0])
                          ? void 0
                          : c[0];
                      e && (n = e);
                      break;
                    }
                    case 'initialPlacement':
                      n = d;
                  }
                if (a !== n) return { reset: { placement: n } };
              }
              return {};
            },
          }
        );
      };
      function c(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width,
        };
      }
      function a(e) {
        return r.mA.some(t => e[t] >= 0);
      }
      let s = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: 'hide',
              options: e,
              async fn(t) {
                let { rects: n } = t,
                  { strategy: o = 'referenceHidden', ...i } = (0, r.ku)(e, t);
                switch (o) {
                  case 'referenceHidden': {
                    let e = c(
                      await u(t, { ...i, elementContext: 'reference' }),
                      n.reference
                    );
                    return {
                      data: {
                        referenceHiddenOffsets: e,
                        referenceHidden: a(e),
                      },
                    };
                  }
                  case 'escaped': {
                    let e = c(
                      await u(t, { ...i, altBoundary: !0 }),
                      n.floating
                    );
                    return { data: { escapedOffsets: e, escaped: a(e) } };
                  }
                  default:
                    return {};
                }
              },
            }
          );
        },
        f = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: 'shift',
              options: e,
              async fn(t) {
                let { x: n, y: o, placement: i } = t,
                  {
                    mainAxis: l = !0,
                    crossAxis: c = !1,
                    limiter: a = {
                      fn: e => {
                        let { x: t, y: n } = e;
                        return { x: t, y: n };
                      },
                    },
                    ...s
                  } = (0, r.ku)(e, t),
                  f = { x: n, y: o },
                  d = await u(t, s),
                  p = (0, r.Qq)((0, r.k3)(i)),
                  m = (0, r.Rn)(p),
                  v = f[m],
                  h = f[p];
                if (l) {
                  let e = 'y' === m ? 'top' : 'left',
                    t = 'y' === m ? 'bottom' : 'right',
                    n = v + d[e],
                    o = v - d[t];
                  v = (0, r.uZ)(n, v, o);
                }
                if (c) {
                  let e = 'y' === p ? 'top' : 'left',
                    t = 'y' === p ? 'bottom' : 'right',
                    n = h + d[e],
                    o = h - d[t];
                  h = (0, r.uZ)(n, h, o);
                }
                let g = a.fn({ ...t, [m]: v, [p]: h });
                return { ...g, data: { x: g.x - n, y: g.y - o } };
              },
            }
          );
        };
    },
    46345: function (e, t, n) {
      'use strict';
      n.d(t, {
        Me: function () {
          return y;
        },
        oo: function () {
          return w;
        },
      });
      var r = n(92876),
        o = n(75288),
        i = n(88321);
      function u(e) {
        let t = (0, i.Dx)(e),
          n = parseFloat(t.width) || 0,
          o = parseFloat(t.height) || 0,
          u = (0, i.Re)(e),
          l = u ? e.offsetWidth : n,
          c = u ? e.offsetHeight : o,
          a = (0, r.NM)(n) !== l || (0, r.NM)(o) !== c;
        return a && ((n = l), (o = c)), { width: n, height: o, $: a };
      }
      function l(e) {
        return (0, i.kK)(e) ? e : e.contextElement;
      }
      function c(e) {
        let t = l(e);
        if (!(0, i.Re)(t)) return (0, r.ze)(1);
        let n = t.getBoundingClientRect(),
          { width: o, height: c, $: a } = u(t),
          s = (a ? (0, r.NM)(n.width) : n.width) / o,
          f = (a ? (0, r.NM)(n.height) : n.height) / c;
        return (
          (s && Number.isFinite(s)) || (s = 1),
          (f && Number.isFinite(f)) || (f = 1),
          { x: s, y: f }
        );
      }
      let a = (0, r.ze)(0);
      function s(e) {
        let t = (0, i.Jj)(e);
        return (0, i.Pf)() && t.visualViewport
          ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
          : a;
      }
      function f(e, t, n, o) {
        var u;
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        let a = e.getBoundingClientRect(),
          f = l(e),
          d = (0, r.ze)(1);
        t && (o ? (0, i.kK)(o) && (d = c(o)) : (d = c(e)));
        let p = (void 0 === (u = n) && (u = !1),
          o && (!u || o === (0, i.Jj)(f)) && u)
            ? s(f)
            : (0, r.ze)(0),
          m = (a.left + p.x) / d.x,
          v = (a.top + p.y) / d.y,
          h = a.width / d.x,
          g = a.height / d.y;
        if (f) {
          let e = (0, i.Jj)(f),
            t = o && (0, i.kK)(o) ? (0, i.Jj)(o) : o,
            n = e.frameElement;
          for (; n && o && t !== e; ) {
            let e = c(n),
              t = n.getBoundingClientRect(),
              r = (0, i.Dx)(n),
              o = t.left + (n.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              u = t.top + (n.clientTop + parseFloat(r.paddingTop)) * e.y;
            (m *= e.x),
              (v *= e.y),
              (h *= e.x),
              (g *= e.y),
              (m += o),
              (v += u),
              (n = (0, i.Jj)(n).frameElement);
          }
        }
        return (0, r.JB)({ width: h, height: g, x: m, y: v });
      }
      function d(e) {
        return f((0, i.tF)(e)).left + (0, i.Lw)(e).scrollLeft;
      }
      function p(e, t, n) {
        let o;
        if ('viewport' === t)
          o = (function (e, t) {
            let n = (0, i.Jj)(e),
              r = (0, i.tF)(e),
              o = n.visualViewport,
              u = r.clientWidth,
              l = r.clientHeight,
              c = 0,
              a = 0;
            if (o) {
              (u = o.width), (l = o.height);
              let e = (0, i.Pf)();
              (!e || (e && 'fixed' === t)) &&
                ((c = o.offsetLeft), (a = o.offsetTop));
            }
            return { width: u, height: l, x: c, y: a };
          })(e, n);
        else if ('document' === t)
          o = (function (e) {
            let t = (0, i.tF)(e),
              n = (0, i.Lw)(e),
              o = e.ownerDocument.body,
              u = (0, r.Fp)(
                t.scrollWidth,
                t.clientWidth,
                o.scrollWidth,
                o.clientWidth
              ),
              l = (0, r.Fp)(
                t.scrollHeight,
                t.clientHeight,
                o.scrollHeight,
                o.clientHeight
              ),
              c = -n.scrollLeft + d(e),
              a = -n.scrollTop;
            return (
              'rtl' === (0, i.Dx)(o).direction &&
                (c += (0, r.Fp)(t.clientWidth, o.clientWidth) - u),
              { width: u, height: l, x: c, y: a }
            );
          })((0, i.tF)(e));
        else if ((0, i.kK)(t))
          o = (function (e, t) {
            let n = f(e, !0, 'fixed' === t),
              o = n.top + e.clientTop,
              u = n.left + e.clientLeft,
              l = (0, i.Re)(e) ? c(e) : (0, r.ze)(1),
              a = e.clientWidth * l.x;
            return {
              width: a,
              height: e.clientHeight * l.y,
              x: u * l.x,
              y: o * l.y,
            };
          })(t, n);
        else {
          let n = s(e);
          o = { ...t, x: t.x - n.x, y: t.y - n.y };
        }
        return (0, r.JB)(o);
      }
      function m(e, t) {
        return (0, i.Re)(e) && 'fixed' !== (0, i.Dx)(e).position
          ? t
            ? t(e)
            : e.offsetParent
          : null;
      }
      function v(e, t) {
        let n = (0, i.Jj)(e);
        if (!(0, i.Re)(e)) return n;
        let r = m(e, t);
        for (; r && (0, i.Ze)(r) && 'static' === (0, i.Dx)(r).position; )
          r = m(r, t);
        return r &&
          ('html' === (0, i.wk)(r) ||
            ('body' === (0, i.wk)(r) &&
              'static' === (0, i.Dx)(r).position &&
              !(0, i.hT)(r)))
          ? n
          : r || (0, i.gQ)(e) || n;
      }
      let h = async function (e) {
          let { reference: t, floating: n, strategy: o } = e,
            u = this.getOffsetParent || v,
            l = this.getDimensions;
          return {
            reference: (function (e, t, n) {
              let o = (0, i.Re)(t),
                u = (0, i.tF)(t),
                l = 'fixed' === n,
                c = f(e, !0, l, t),
                a = { scrollLeft: 0, scrollTop: 0 },
                s = (0, r.ze)(0);
              if (o || (!o && !l)) {
                if (
                  (('body' !== (0, i.wk)(t) || (0, i.ao)(u)) &&
                    (a = (0, i.Lw)(t)),
                  o)
                ) {
                  let e = f(t, !0, l, t);
                  (s.x = e.x + t.clientLeft), (s.y = e.y + t.clientTop);
                } else u && (s.x = d(u));
              }
              return {
                x: c.left + a.scrollLeft - s.x,
                y: c.top + a.scrollTop - s.y,
                width: c.width,
                height: c.height,
              };
            })(t, await u(n), o),
            floating: { x: 0, y: 0, ...(await l(n)) },
          };
        },
        g = {
          convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
            let { rect: t, offsetParent: n, strategy: o } = e,
              u = (0, i.Re)(n),
              l = (0, i.tF)(n);
            if (n === l) return t;
            let a = { scrollLeft: 0, scrollTop: 0 },
              s = (0, r.ze)(1),
              d = (0, r.ze)(0);
            if (
              (u || (!u && 'fixed' !== o)) &&
              (('body' !== (0, i.wk)(n) || (0, i.ao)(l)) && (a = (0, i.Lw)(n)),
              (0, i.Re)(n))
            ) {
              let e = f(n);
              (s = c(n)), (d.x = e.x + n.clientLeft), (d.y = e.y + n.clientTop);
            }
            return {
              width: t.width * s.x,
              height: t.height * s.y,
              x: t.x * s.x - a.scrollLeft * s.x + d.x,
              y: t.y * s.y - a.scrollTop * s.y + d.y,
            };
          },
          getDocumentElement: i.tF,
          getClippingRect: function (e) {
            let { element: t, boundary: n, rootBoundary: o, strategy: u } = e,
              l = [
                ...('clippingAncestors' === n
                  ? (function (e, t) {
                      let n = t.get(e);
                      if (n) return n;
                      let r = (0, i.Kx)(e, [], !1).filter(
                          e => (0, i.kK)(e) && 'body' !== (0, i.wk)(e)
                        ),
                        o = null,
                        u = 'fixed' === (0, i.Dx)(e).position,
                        l = u ? (0, i.Ow)(e) : e;
                      for (; (0, i.kK)(l) && !(0, i.Py)(l); ) {
                        let t = (0, i.Dx)(l),
                          n = (0, i.hT)(l);
                        n || 'fixed' !== t.position || (o = null),
                          (
                            u
                              ? !n && !o
                              : (!n &&
                                  'static' === t.position &&
                                  !!o &&
                                  ['absolute', 'fixed'].includes(o.position)) ||
                                ((0, i.ao)(l) &&
                                  !n &&
                                  (function e(t, n) {
                                    let r = (0, i.Ow)(t);
                                    return (
                                      !(
                                        r === n ||
                                        !(0, i.kK)(r) ||
                                        (0, i.Py)(r)
                                      ) &&
                                      ('fixed' === (0, i.Dx)(r).position ||
                                        e(r, n))
                                    );
                                  })(e, l))
                          )
                            ? (r = r.filter(e => e !== l))
                            : (o = t),
                          (l = (0, i.Ow)(l));
                      }
                      return t.set(e, r), r;
                    })(t, this._c)
                  : [].concat(n)),
                o,
              ],
              c = l[0],
              a = l.reduce(
                (e, n) => {
                  let o = p(t, n, u);
                  return (
                    (e.top = (0, r.Fp)(o.top, e.top)),
                    (e.right = (0, r.VV)(o.right, e.right)),
                    (e.bottom = (0, r.VV)(o.bottom, e.bottom)),
                    (e.left = (0, r.Fp)(o.left, e.left)),
                    e
                  );
                },
                p(t, c, u)
              );
            return {
              width: a.right - a.left,
              height: a.bottom - a.top,
              x: a.left,
              y: a.top,
            };
          },
          getOffsetParent: v,
          getElementRects: h,
          getClientRects: function (e) {
            return Array.from(e.getClientRects());
          },
          getDimensions: function (e) {
            return u(e);
          },
          getScale: c,
          isElement: i.kK,
          isRTL: function (e) {
            return 'rtl' === (0, i.Dx)(e).direction;
          },
        };
      function y(e, t, n, o) {
        let u;
        void 0 === o && (o = {});
        let {
            ancestorScroll: c = !0,
            ancestorResize: a = !0,
            elementResize: s = 'function' == typeof ResizeObserver,
            layoutShift: d = 'function' == typeof IntersectionObserver,
            animationFrame: p = !1,
          } = o,
          m = l(e),
          v = c || a ? [...(m ? (0, i.Kx)(m) : []), ...(0, i.Kx)(t)] : [];
        v.forEach(e => {
          c && e.addEventListener('scroll', n, { passive: !0 }),
            a && e.addEventListener('resize', n);
        });
        let h =
            m && d
              ? (function (e, t) {
                  let n,
                    o = null,
                    u = (0, i.tF)(e);
                  function l() {
                    clearTimeout(n), o && o.disconnect(), (o = null);
                  }
                  return (
                    !(function i(c, a) {
                      void 0 === c && (c = !1), void 0 === a && (a = 1), l();
                      let {
                        left: s,
                        top: f,
                        width: d,
                        height: p,
                      } = e.getBoundingClientRect();
                      if ((c || t(), !d || !p)) return;
                      let m = (0, r.GW)(f),
                        v = (0, r.GW)(u.clientWidth - (s + d)),
                        h = {
                          rootMargin:
                            -m +
                            'px ' +
                            -v +
                            'px ' +
                            -(0, r.GW)(u.clientHeight - (f + p)) +
                            'px ' +
                            -(0, r.GW)(s) +
                            'px',
                          threshold: (0, r.Fp)(0, (0, r.VV)(1, a)) || 1,
                        },
                        g = !0;
                      function y(e) {
                        let t = e[0].intersectionRatio;
                        if (t !== a) {
                          if (!g) return i();
                          t
                            ? i(!1, t)
                            : (n = setTimeout(() => {
                                i(!1, 1e-7);
                              }, 100));
                        }
                        g = !1;
                      }
                      try {
                        o = new IntersectionObserver(y, {
                          ...h,
                          root: u.ownerDocument,
                        });
                      } catch (e) {
                        o = new IntersectionObserver(y, h);
                      }
                      o.observe(e);
                    })(!0),
                    l
                  );
                })(m, n)
              : null,
          g = -1,
          y = null;
        s &&
          ((y = new ResizeObserver(e => {
            let [r] = e;
            r &&
              r.target === m &&
              y &&
              (y.unobserve(t),
              cancelAnimationFrame(g),
              (g = requestAnimationFrame(() => {
                y && y.observe(t);
              }))),
              n();
          })),
          m && !p && y.observe(m),
          y.observe(t));
        let w = p ? f(e) : null;
        return (
          p &&
            (function t() {
              let r = f(e);
              w &&
                (r.x !== w.x ||
                  r.y !== w.y ||
                  r.width !== w.width ||
                  r.height !== w.height) &&
                n(),
                (w = r),
                (u = requestAnimationFrame(t));
            })(),
          n(),
          () => {
            v.forEach(e => {
              c && e.removeEventListener('scroll', n),
                a && e.removeEventListener('resize', n);
            }),
              h && h(),
              y && y.disconnect(),
              (y = null),
              p && cancelAnimationFrame(u);
          }
        );
      }
      let w = (e, t, n) => {
        let r = new Map(),
          i = { platform: g, ...n },
          u = { ...i.platform, _c: r };
        return (0, o.oo)(e, t, { ...i, platform: u });
      };
    },
    29119: function (e, t, n) {
      'use strict';
      n.d(t, {
        bQ: function () {
          return O;
        },
        YF: function () {
          return T;
        },
        NI: function () {
          return K;
        },
      });
      var r = n(27378),
        o = n.t(r, 2),
        i = n(88321);
      function u(e, t) {
        if (!e || !t) return !1;
        let n = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && (0, i.Zq)(n)) {
          let n = t;
          for (; n; ) {
            if (e === n) return !0;
            n = n.parentNode || n.host;
          }
        }
        return !1;
      }
      function l(e) {
        return (null == e ? void 0 : e.ownerDocument) || document;
      }
      function c(e, t) {
        return (
          null != t &&
          ('composedPath' in e
            ? e.composedPath().includes(t)
            : null != e.target && t.contains(e.target))
        );
      }
      function a(e) {
        return 'composedPath' in e ? e.composedPath()[0] : e.target;
      }
      var s = n(46345),
        f = n(31542),
        d = 'undefined' != typeof document ? r.useLayoutEffect : r.useEffect;
      function p(e, t) {
        let n, r, o;
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ('function' == typeof e && e.toString() === t.toString()) return !0;
        if (e && t && 'object' == typeof e) {
          if (Array.isArray(e)) {
            if ((n = e.length) != t.length) return !1;
            for (r = n; 0 != r--; ) if (!p(e[r], t[r])) return !1;
            return !0;
          }
          if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length)
            return !1;
          for (r = n; 0 != r--; )
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 != r--; ) {
            let n = o[r];
            if (('_owner' !== n || !e.$$typeof) && !p(e[n], t[n])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function m(e) {
        return 'undefined' == typeof window
          ? 1
          : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function v(e, t) {
        let n = m(e);
        return Math.round(t * n) / n;
      }
      function h(e) {
        let t = r.useRef(e);
        return (
          d(() => {
            t.current = e;
          }),
          t
        );
      }
      let g = o['useInsertionEffect'.toString()] || (e => e());
      function y(e) {
        let t = r.useRef(() => {});
        return (
          g(() => {
            t.current = e;
          }),
          r.useCallback(function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            return null == t.current ? void 0 : t.current(...n);
          }, [])
        );
      }
      var w = 'undefined' != typeof document ? r.useLayoutEffect : r.useEffect;
      let E = !1,
        b = 0,
        x = () => 'floating-ui-' + b++,
        k =
          o['useId'.toString()] ||
          function () {
            let [e, t] = r.useState(() => (E ? x() : void 0));
            return (
              w(() => {
                null == e && t(x());
              }, []),
              r.useEffect(() => {
                E || (E = !0);
              }, []),
              e
            );
          },
        C = r.createContext(null),
        R = r.createContext(null),
        S = () => {
          var e;
          return (null == (e = r.useContext(C)) ? void 0 : e.id) || null;
        },
        M = () => r.useContext(R);
      function L(e, t) {
        let n = e.filter(e => {
            var n;
            return (
              e.parentId === t && (null == (n = e.context) ? void 0 : n.open)
            );
          }),
          r = n;
        for (; r.length; )
          (r = e.filter(e => {
            var t;
            return null == (t = r)
              ? void 0
              : t.some(t => {
                  var n;
                  return (
                    e.parentId === t.id &&
                    (null == (n = e.context) ? void 0 : n.open)
                  );
                });
          })),
            (n = n.concat(r));
        return n;
      }
      let P = {
          pointerdown: 'onPointerDown',
          mousedown: 'onMouseDown',
          click: 'onClick',
        },
        D = {
          pointerdown: 'onPointerDownCapture',
          mousedown: 'onMouseDownCapture',
          click: 'onClickCapture',
        },
        A = e => {
          var t, n;
          return {
            escapeKey:
              'boolean' == typeof e
                ? e
                : null != (t = null == e ? void 0 : e.escapeKey) && t,
            outsidePress:
              'boolean' == typeof e
                ? e
                : null == (n = null == e ? void 0 : e.outsidePress) || n,
          };
        };
      function O(e, t) {
        void 0 === t && (t = {});
        let {
            open: n,
            onOpenChange: o,
            nodeId: s,
            elements: { reference: f, domReference: d, floating: p },
            dataRef: m,
          } = e,
          {
            enabled: v = !0,
            escapeKey: h = !0,
            outsidePress: g = !0,
            outsidePressEvent: w = 'pointerdown',
            referencePress: E = !1,
            referencePressEvent: b = 'pointerdown',
            ancestorScroll: x = !1,
            bubbles: k,
            capture: C,
          } = t,
          R = M(),
          S = y('function' == typeof g ? g : () => !1),
          O = 'function' == typeof g ? S : g,
          T = r.useRef(!1),
          N = r.useRef(!1),
          { escapeKey: F, outsidePress: I } = A(k),
          { escapeKey: K, outsidePress: _ } = A(C),
          Z = y(e => {
            if (!n || !v || !h || 'Escape' !== e.key) return;
            let t = R ? L(R.nodesRef.current, s) : [];
            if (!F && (e.stopPropagation(), t.length > 0)) {
              let e = !0;
              if (
                (t.forEach(t => {
                  var n;
                  if (
                    null != (n = t.context) &&
                    n.open &&
                    !t.context.dataRef.current.__escapeKeyBubbles
                  ) {
                    e = !1;
                    return;
                  }
                }),
                !e)
              )
                return;
            }
            o(!1, 'nativeEvent' in e ? e.nativeEvent : e, 'escape-key');
          }),
          W = y(e => {
            var t;
            let n = () => {
              var t;
              Z(e), null == (t = a(e)) || t.removeEventListener('keydown', n);
            };
            null == (t = a(e)) || t.addEventListener('keydown', n);
          }),
          V = y(e => {
            let t = T.current;
            T.current = !1;
            let n = N.current;
            if (
              ((N.current = !1),
              ('click' === w && n) || t || ('function' == typeof O && !O(e)))
            )
              return;
            let r = a(e),
              f = l(p).querySelectorAll('[data-floating-ui-inert]'),
              m = (0, i.kK)(r) ? r : null;
            for (; m && !(0, i.Py)(m); ) {
              let e = (0, i.Ow)(m);
              if ((0, i.Py)(e) || !(0, i.kK)(e)) break;
              m = e;
            }
            if (
              f.length &&
              (0, i.kK)(r) &&
              !r.matches('html,body') &&
              !u(r, p) &&
              Array.from(f).every(e => !u(m, e))
            )
              return;
            if ((0, i.Re)(r) && p) {
              let t = r.clientWidth > 0 && r.scrollWidth > r.clientWidth,
                n = r.clientHeight > 0 && r.scrollHeight > r.clientHeight,
                o = n && e.offsetX > r.clientWidth;
              if (
                (n &&
                  'rtl' === (0, i.Dx)(r).direction &&
                  (o = e.offsetX <= r.offsetWidth - r.clientWidth),
                o || (t && e.offsetY > r.clientHeight))
              )
                return;
            }
            let v =
              R &&
              L(R.nodesRef.current, s).some(t => {
                var n;
                return c(
                  e,
                  null == (n = t.context) ? void 0 : n.elements.floating
                );
              });
            if (c(e, p) || c(e, d) || v) return;
            let h = R ? L(R.nodesRef.current, s) : [];
            if (h.length > 0) {
              let e = !0;
              if (
                (h.forEach(t => {
                  var n;
                  if (
                    null != (n = t.context) &&
                    n.open &&
                    !t.context.dataRef.current.__outsidePressBubbles
                  ) {
                    e = !1;
                    return;
                  }
                }),
                !e)
              )
                return;
            }
            o(!1, e, 'outside-press');
          }),
          j = y(e => {
            var t;
            let n = () => {
              var t;
              V(e), null == (t = a(e)) || t.removeEventListener(w, n);
            };
            null == (t = a(e)) || t.addEventListener(w, n);
          });
        return (
          r.useEffect(() => {
            if (!n || !v) return;
            function e(e) {
              o(!1, e, 'ancestor-scroll');
            }
            (m.current.__escapeKeyBubbles = F),
              (m.current.__outsidePressBubbles = I);
            let t = l(p);
            h && t.addEventListener('keydown', K ? W : Z, K),
              O && t.addEventListener(w, _ ? j : V, _);
            let r = [];
            return (
              x &&
                ((0, i.kK)(d) && (r = (0, i.Kx)(d)),
                (0, i.kK)(p) && (r = r.concat((0, i.Kx)(p))),
                !(0, i.kK)(f) &&
                  f &&
                  f.contextElement &&
                  (r = r.concat((0, i.Kx)(f.contextElement)))),
              (r = r.filter(e => {
                var n;
                return (
                  e !==
                  (null == (n = t.defaultView) ? void 0 : n.visualViewport)
                );
              })).forEach(t => {
                t.addEventListener('scroll', e, { passive: !0 });
              }),
              () => {
                h && t.removeEventListener('keydown', K ? W : Z, K),
                  O && t.removeEventListener(w, _ ? j : V, _),
                  r.forEach(t => {
                    t.removeEventListener('scroll', e);
                  });
              }
            );
          }, [m, p, d, f, h, O, w, n, o, x, v, F, I, Z, K, W, V, _, j]),
          r.useEffect(() => {
            T.current = !1;
          }, [O, w]),
          r.useMemo(
            () =>
              v
                ? {
                    reference: {
                      onKeyDown: Z,
                      [P[b]]: e => {
                        E && o(!1, e.nativeEvent, 'reference-press');
                      },
                    },
                    floating: {
                      onKeyDown: Z,
                      onMouseDown() {
                        N.current = !0;
                      },
                      onMouseUp() {
                        N.current = !0;
                      },
                      [D[w]]: () => {
                        T.current = !0;
                      },
                    },
                  }
                : {},
            [v, E, w, b, o, Z]
          )
        );
      }
      function T(e) {
        var t;
        void 0 === e && (e = {});
        let { open: n = !1, onOpenChange: o, nodeId: u } = e,
          [l, c] = r.useState(null),
          a = (null == (t = e.elements) ? void 0 : t.reference) || l,
          g = (function (e) {
            void 0 === e && (e = {});
            let {
                placement: t = 'bottom',
                strategy: n = 'absolute',
                middleware: o = [],
                platform: i,
                elements: { reference: u, floating: l } = {},
                transform: c = !0,
                whileElementsMounted: a,
                open: g,
              } = e,
              [y, w] = r.useState({
                x: 0,
                y: 0,
                strategy: n,
                placement: t,
                middlewareData: {},
                isPositioned: !1,
              }),
              [E, b] = r.useState(o);
            p(E, o) || b(o);
            let [x, k] = r.useState(null),
              [C, R] = r.useState(null),
              S = r.useCallback(
                e => {
                  e != D.current && ((D.current = e), k(e));
                },
                [k]
              ),
              M = r.useCallback(
                e => {
                  e !== A.current && ((A.current = e), R(e));
                },
                [R]
              ),
              L = u || x,
              P = l || C,
              D = r.useRef(null),
              A = r.useRef(null),
              O = r.useRef(y),
              T = h(a),
              N = h(i),
              F = r.useCallback(() => {
                if (!D.current || !A.current) return;
                let e = { placement: t, strategy: n, middleware: E };
                N.current && (e.platform = N.current),
                  (0, s.oo)(D.current, A.current, e).then(e => {
                    let t = { ...e, isPositioned: !0 };
                    I.current &&
                      !p(O.current, t) &&
                      ((O.current = t),
                      f.flushSync(() => {
                        w(t);
                      }));
                  });
              }, [E, t, n, N]);
            d(() => {
              !1 === g &&
                O.current.isPositioned &&
                ((O.current.isPositioned = !1),
                w(e => ({ ...e, isPositioned: !1 })));
            }, [g]);
            let I = r.useRef(!1);
            d(
              () => (
                (I.current = !0),
                () => {
                  I.current = !1;
                }
              ),
              []
            ),
              d(() => {
                if ((L && (D.current = L), P && (A.current = P), L && P)) {
                  if (T.current) return T.current(L, P, F);
                  F();
                }
              }, [L, P, F, T]);
            let K = r.useMemo(
                () => ({
                  reference: D,
                  floating: A,
                  setReference: S,
                  setFloating: M,
                }),
                [S, M]
              ),
              _ = r.useMemo(() => ({ reference: L, floating: P }), [L, P]),
              Z = r.useMemo(() => {
                let e = { position: n, left: 0, top: 0 };
                if (!_.floating) return e;
                let t = v(_.floating, y.x),
                  r = v(_.floating, y.y);
                return c
                  ? {
                      ...e,
                      transform: 'translate(' + t + 'px, ' + r + 'px)',
                      ...(m(_.floating) >= 1.5 && { willChange: 'transform' }),
                    }
                  : { position: n, left: t, top: r };
              }, [n, c, _.floating, y.x, y.y]);
            return r.useMemo(
              () => ({
                ...y,
                update: F,
                refs: K,
                elements: _,
                floatingStyles: Z,
              }),
              [y, F, K, _, Z]
            );
          })(e),
          E = M(),
          b = null != S(),
          x = y((e, t, n) => {
            e && (R.current.openEvent = t),
              L.emit('openchange', { open: e, event: t, reason: n, nested: b }),
              null == o || o(e, t, n);
          }),
          C = r.useRef(null),
          R = r.useRef({}),
          L = r.useState(() =>
            (function () {
              let e = new Map();
              return {
                emit(t, n) {
                  var r;
                  null == (r = e.get(t)) || r.forEach(e => e(n));
                },
                on(t, n) {
                  e.set(t, [...(e.get(t) || []), n]);
                },
                off(t, n) {
                  var r;
                  e.set(
                    t,
                    (null == (r = e.get(t))
                      ? void 0
                      : r.filter(e => e !== n)) || []
                  );
                },
              };
            })()
          )[0],
          P = k(),
          D = r.useCallback(
            e => {
              let t = (0, i.kK)(e)
                ? {
                    getBoundingClientRect: () => e.getBoundingClientRect(),
                    contextElement: e,
                  }
                : e;
              g.refs.setReference(t);
            },
            [g.refs]
          ),
          A = r.useCallback(
            e => {
              ((0, i.kK)(e) || null === e) && ((C.current = e), c(e)),
                ((0, i.kK)(g.refs.reference.current) ||
                  null === g.refs.reference.current ||
                  (null !== e && !(0, i.kK)(e))) &&
                  g.refs.setReference(e);
            },
            [g.refs]
          ),
          O = r.useMemo(
            () => ({
              ...g.refs,
              setReference: A,
              setPositionReference: D,
              domReference: C,
            }),
            [g.refs, A, D]
          ),
          T = r.useMemo(
            () => ({ ...g.elements, domReference: a }),
            [g.elements, a]
          ),
          N = r.useMemo(
            () => ({
              ...g,
              refs: O,
              elements: T,
              dataRef: R,
              nodeId: u,
              floatingId: P,
              events: L,
              open: n,
              onOpenChange: x,
            }),
            [g, u, P, L, n, x, O, T]
          );
        return (
          w(() => {
            let e =
              null == E ? void 0 : E.nodesRef.current.find(e => e.id === u);
            e && (e.context = N);
          }),
          r.useMemo(
            () => ({ ...g, context: N, refs: O, elements: T }),
            [g, O, T, N]
          )
        );
      }
      let N = 'active',
        F = 'selected';
      function I(e, t, n) {
        let r = new Map(),
          o = 'item' === n,
          i = e;
        if (o && e) {
          let { [N]: t, [F]: n, ...r } = e;
          i = r;
        }
        return {
          ...('floating' === n && { tabIndex: -1 }),
          ...i,
          ...t
            .map(t => {
              let r = t ? t[n] : null;
              return 'function' == typeof r ? (e ? r(e) : null) : r;
            })
            .concat(e)
            .reduce(
              (e, t) => (
                t &&
                  Object.entries(t).forEach(t => {
                    let [n, i] = t;
                    if (!(o && [N, F].includes(n))) {
                      if (0 === n.indexOf('on')) {
                        if (
                          (r.has(n) || r.set(n, []), 'function' == typeof i)
                        ) {
                          var u;
                          null == (u = r.get(n)) || u.push(i),
                            (e[n] = function () {
                              for (
                                var e,
                                  t = arguments.length,
                                  o = Array(t),
                                  i = 0;
                                i < t;
                                i++
                              )
                                o[i] = arguments[i];
                              return null == (e = r.get(n))
                                ? void 0
                                : e.map(e => e(...o)).find(e => void 0 !== e);
                            });
                        }
                      } else e[n] = i;
                    }
                  }),
                e
              ),
              {}
            ),
        };
      }
      function K(e) {
        void 0 === e && (e = []);
        let t = e,
          n = r.useCallback(t => I(t, e, 'reference'), t),
          o = r.useCallback(t => I(t, e, 'floating'), t),
          i = r.useCallback(
            t => I(t, e, 'item'),
            e.map(e => (null == e ? void 0 : e.item))
          );
        return r.useMemo(
          () => ({
            getReferenceProps: n,
            getFloatingProps: o,
            getItemProps: i,
          }),
          [n, o, i]
        );
      }
    },
    92876: function (e, t, n) {
      'use strict';
      n.d(t, {
        Fp: function () {
          return i;
        },
        GW: function () {
          return l;
        },
        I4: function () {
          return h;
        },
        JB: function () {
          return R;
        },
        KX: function () {
          return x;
        },
        NM: function () {
          return u;
        },
        Qq: function () {
          return g;
        },
        Rn: function () {
          return v;
        },
        VV: function () {
          return o;
        },
        Wh: function () {
          return y;
        },
        gy: function () {
          return E;
        },
        hp: function () {
          return m;
        },
        i8: function () {
          return w;
        },
        k3: function () {
          return p;
        },
        ku: function () {
          return d;
        },
        mA: function () {
          return r;
        },
        pw: function () {
          return k;
        },
        uZ: function () {
          return f;
        },
        yd: function () {
          return C;
        },
        ze: function () {
          return c;
        },
      });
      let r = ['top', 'right', 'bottom', 'left'],
        o = Math.min,
        i = Math.max,
        u = Math.round,
        l = Math.floor,
        c = e => ({ x: e, y: e }),
        a = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' },
        s = { start: 'end', end: 'start' };
      function f(e, t, n) {
        return i(e, o(t, n));
      }
      function d(e, t) {
        return 'function' == typeof e ? e(t) : e;
      }
      function p(e) {
        return e.split('-')[0];
      }
      function m(e) {
        return e.split('-')[1];
      }
      function v(e) {
        return 'x' === e ? 'y' : 'x';
      }
      function h(e) {
        return 'y' === e ? 'height' : 'width';
      }
      function g(e) {
        return ['top', 'bottom'].includes(p(e)) ? 'y' : 'x';
      }
      function y(e) {
        return v(g(e));
      }
      function w(e, t, n) {
        void 0 === n && (n = !1);
        let r = m(e),
          o = y(e),
          i = h(o),
          u =
            'x' === o
              ? r === (n ? 'end' : 'start')
                ? 'right'
                : 'left'
              : 'start' === r
                ? 'bottom'
                : 'top';
        return t.reference[i] > t.floating[i] && (u = k(u)), [u, k(u)];
      }
      function E(e) {
        let t = k(e);
        return [b(e), t, b(t)];
      }
      function b(e) {
        return e.replace(/start|end/g, e => s[e]);
      }
      function x(e, t, n, r) {
        let o = m(e),
          i = (function (e, t, n) {
            let r = ['left', 'right'],
              o = ['right', 'left'];
            switch (e) {
              case 'top':
              case 'bottom':
                if (n) return t ? o : r;
                return t ? r : o;
              case 'left':
              case 'right':
                return t ? ['top', 'bottom'] : ['bottom', 'top'];
              default:
                return [];
            }
          })(p(e), 'start' === n, r);
        return (
          o && ((i = i.map(e => e + '-' + o)), t && (i = i.concat(i.map(b)))), i
        );
      }
      function k(e) {
        return e.replace(/left|right|bottom|top/g, e => a[e]);
      }
      function C(e) {
        return 'number' != typeof e
          ? { top: 0, right: 0, bottom: 0, left: 0, ...e }
          : { top: e, right: e, bottom: e, left: e };
      }
      function R(e) {
        return {
          ...e,
          top: e.y,
          left: e.x,
          right: e.x + e.width,
          bottom: e.y + e.height,
        };
      }
    },
    88321: function (e, t, n) {
      'use strict';
      function r(e) {
        return u(e) ? (e.nodeName || '').toLowerCase() : '#document';
      }
      function o(e) {
        var t;
        return (
          (null == e
            ? void 0
            : null == (t = e.ownerDocument)
              ? void 0
              : t.defaultView) || window
        );
      }
      function i(e) {
        var t;
        return null ==
          (t = (u(e) ? e.ownerDocument : e.document) || window.document)
          ? void 0
          : t.documentElement;
      }
      function u(e) {
        return e instanceof Node || e instanceof o(e).Node;
      }
      function l(e) {
        return e instanceof Element || e instanceof o(e).Element;
      }
      function c(e) {
        return e instanceof HTMLElement || e instanceof o(e).HTMLElement;
      }
      function a(e) {
        return (
          'undefined' != typeof ShadowRoot &&
          (e instanceof ShadowRoot || e instanceof o(e).ShadowRoot)
        );
      }
      function s(e) {
        let { overflow: t, overflowX: n, overflowY: r, display: o } = h(e);
        return (
          /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
          !['inline', 'contents'].includes(o)
        );
      }
      function f(e) {
        return ['table', 'td', 'th'].includes(r(e));
      }
      function d(e) {
        let t = m(),
          n = h(e);
        return (
          'none' !== n.transform ||
          'none' !== n.perspective ||
          (!!n.containerType && 'normal' !== n.containerType) ||
          (!t && !!n.backdropFilter && 'none' !== n.backdropFilter) ||
          (!t && !!n.filter && 'none' !== n.filter) ||
          ['transform', 'perspective', 'filter'].some(e =>
            (n.willChange || '').includes(e)
          ) ||
          ['paint', 'layout', 'strict', 'content'].some(e =>
            (n.contain || '').includes(e)
          )
        );
      }
      function p(e) {
        let t = y(e);
        for (; c(t) && !v(t); ) {
          if (d(t)) return t;
          t = y(t);
        }
        return null;
      }
      function m() {
        return (
          'undefined' != typeof CSS &&
          !!CSS.supports &&
          CSS.supports('-webkit-backdrop-filter', 'none')
        );
      }
      function v(e) {
        return ['html', 'body', '#document'].includes(r(e));
      }
      function h(e) {
        return o(e).getComputedStyle(e);
      }
      function g(e) {
        return l(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
      }
      function y(e) {
        if ('html' === r(e)) return e;
        let t = e.assignedSlot || e.parentNode || (a(e) && e.host) || i(e);
        return a(t) ? t.host : t;
      }
      n.d(t, {
        Dx: function () {
          return h;
        },
        Jj: function () {
          return o;
        },
        Kx: function () {
          return function e(t, n, r) {
            var i;
            void 0 === n && (n = []), void 0 === r && (r = !0);
            let u = (function e(t) {
                let n = y(t);
                return v(n)
                  ? t.ownerDocument
                    ? t.ownerDocument.body
                    : t.body
                  : c(n) && s(n)
                    ? n
                    : e(n);
              })(t),
              l = u === (null == (i = t.ownerDocument) ? void 0 : i.body),
              a = o(u);
            return l
              ? n.concat(
                  a,
                  a.visualViewport || [],
                  s(u) ? u : [],
                  a.frameElement && r ? e(a.frameElement) : []
                )
              : n.concat(u, e(u, [], r));
          };
        },
        Lw: function () {
          return g;
        },
        Ow: function () {
          return y;
        },
        Pf: function () {
          return m;
        },
        Py: function () {
          return v;
        },
        Re: function () {
          return c;
        },
        Ze: function () {
          return f;
        },
        Zq: function () {
          return a;
        },
        ao: function () {
          return s;
        },
        gQ: function () {
          return p;
        },
        hT: function () {
          return d;
        },
        kK: function () {
          return l;
        },
        tF: function () {
          return i;
        },
        wk: function () {
          return r;
        },
      });
    },
    12004: function (e, t, n) {
      'use strict';
      let r, o;
      n.d(t, {
        mY: function () {
          return td;
        },
      });
      var i,
        u,
        l,
        c,
        a,
        s,
        f = n(25773),
        d = n(27378),
        p = n.t(d, 2);
      function m(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function (r) {
          if ((null == e || e(r), !1 === n || !r.defaultPrevented))
            return null == t ? void 0 : t(r);
        };
      }
      function v(...e) {
        return t =>
          e.forEach(e => {
            'function' == typeof e ? e(t) : null != e && (e.current = t);
          });
      }
      function h(...e) {
        return (0, d.useCallback)(v(...e), e);
      }
      let g = (null == globalThis ? void 0 : globalThis.document)
          ? d.useLayoutEffect
          : () => {},
        y = p['useId'.toString()] || (() => void 0),
        w = 0;
      function E(e) {
        let [t, n] = d.useState(y());
        return (
          g(() => {
            e || n(e => (null != e ? e : String(w++)));
          }, [e]),
          e || (t ? `radix-${t}` : '')
        );
      }
      function b(e) {
        let t = (0, d.useRef)(e);
        return (
          (0, d.useEffect)(() => {
            t.current = e;
          }),
          (0, d.useMemo)(
            () =>
              (...e) => {
                var n;
                return null === (n = t.current) || void 0 === n
                  ? void 0
                  : n.call(t, ...e);
              },
            []
          )
        );
      }
      var x = n(31542);
      let k = (0, d.forwardRef)((e, t) => {
        let { children: n, ...r } = e,
          o = d.Children.toArray(n),
          i = o.find(S);
        if (i) {
          let e = i.props.children,
            n = o.map(t =>
              t !== i
                ? t
                : d.Children.count(e) > 1
                  ? d.Children.only(null)
                  : (0, d.isValidElement)(e)
                    ? e.props.children
                    : null
            );
          return (0, d.createElement)(
            C,
            (0, f.Z)({}, r, { ref: t }),
            (0, d.isValidElement)(e) ? (0, d.cloneElement)(e, void 0, n) : null
          );
        }
        return (0, d.createElement)(C, (0, f.Z)({}, r, { ref: t }), n);
      });
      k.displayName = 'Slot';
      let C = (0, d.forwardRef)((e, t) => {
        let { children: n, ...r } = e;
        return (0, d.isValidElement)(n)
          ? (0, d.cloneElement)(n, {
              ...(function (e, t) {
                let n = { ...t };
                for (let r in t) {
                  let o = e[r],
                    i = t[r];
                  /^on[A-Z]/.test(r)
                    ? (n[r] = (...e) => {
                        null == i || i(...e), null == o || o(...e);
                      })
                    : 'style' === r
                      ? (n[r] = { ...o, ...i })
                      : 'className' === r &&
                        (n[r] = [o, i].filter(Boolean).join(' '));
                }
                return { ...e, ...n };
              })(r, n.props),
              ref: v(t, n.ref),
            })
          : d.Children.count(n) > 1
            ? d.Children.only(null)
            : null;
      });
      C.displayName = 'SlotClone';
      let R = ({ children: e }) => (0, d.createElement)(d.Fragment, null, e);
      function S(e) {
        return (0, d.isValidElement)(e) && e.type === R;
      }
      let M = [
          'a',
          'button',
          'div',
          'h2',
          'h3',
          'img',
          'li',
          'nav',
          'ol',
          'p',
          'span',
          'svg',
          'ul',
        ].reduce((e, t) => {
          let n = (0, d.forwardRef)((e, n) => {
            let { asChild: r, ...o } = e,
              i = r ? k : t;
            return (
              (0, d.useEffect)(() => {
                window[Symbol.for('radix-ui')] = !0;
              }, []),
              (0, d.createElement)(i, (0, f.Z)({}, o, { ref: n }))
            );
          });
          return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
        }, {}),
        L = 'dismissableLayer.update',
        P = (0, d.createContext)({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        D = (0, d.forwardRef)((e, t) => {
          let {
              disableOutsidePointerEvents: n = !1,
              onEscapeKeyDown: o,
              onPointerDownOutside: i,
              onFocusOutside: u,
              onInteractOutside: l,
              onDismiss: c,
              ...a
            } = e,
            s = (0, d.useContext)(P),
            [p, v] = (0, d.useState)(null),
            [, g] = (0, d.useState)({}),
            y = h(t, e => v(e)),
            w = Array.from(s.layers),
            [E] = [...s.layersWithOutsidePointerEventsDisabled].slice(-1),
            x = w.indexOf(E),
            k = p ? w.indexOf(p) : -1,
            C = s.layersWithOutsidePointerEventsDisabled.size > 0,
            R = k >= x,
            S = (function (e) {
              let t = b(e),
                n = (0, d.useRef)(!1),
                r = (0, d.useRef)(() => {});
              return (
                (0, d.useEffect)(() => {
                  let e = e => {
                      if (e.target && !n.current) {
                        let n = { originalEvent: e };
                        function o() {
                          O('dismissableLayer.pointerDownOutside', t, n, {
                            discrete: !0,
                          });
                        }
                        'touch' === e.pointerType
                          ? (document.removeEventListener('click', r.current),
                            (r.current = o),
                            document.addEventListener('click', r.current, {
                              once: !0,
                            }))
                          : o();
                      }
                      n.current = !1;
                    },
                    o = window.setTimeout(() => {
                      document.addEventListener('pointerdown', e);
                    }, 0);
                  return () => {
                    window.clearTimeout(o),
                      document.removeEventListener('pointerdown', e),
                      document.removeEventListener('click', r.current);
                  };
                }, [t]),
                { onPointerDownCapture: () => (n.current = !0) }
              );
            })(e => {
              let t = e.target,
                n = [...s.branches].some(e => e.contains(t));
              !R ||
                n ||
                (null == i || i(e),
                null == l || l(e),
                e.defaultPrevented || null == c || c());
            }),
            D = (function (e) {
              let t = b(e),
                n = (0, d.useRef)(!1);
              return (
                (0, d.useEffect)(() => {
                  let e = e => {
                    e.target &&
                      !n.current &&
                      O(
                        'dismissableLayer.focusOutside',
                        t,
                        { originalEvent: e },
                        { discrete: !1 }
                      );
                  };
                  return (
                    document.addEventListener('focusin', e),
                    () => document.removeEventListener('focusin', e)
                  );
                }, [t]),
                {
                  onFocusCapture: () => (n.current = !0),
                  onBlurCapture: () => (n.current = !1),
                }
              );
            })(e => {
              let t = e.target;
              [...s.branches].some(e => e.contains(t)) ||
                (null == u || u(e),
                null == l || l(e),
                e.defaultPrevented || null == c || c());
            });
          return (
            !(function (e) {
              let t = b(e);
              (0, d.useEffect)(() => {
                let e = e => {
                  'Escape' === e.key && t(e);
                };
                return (
                  document.addEventListener('keydown', e),
                  () => document.removeEventListener('keydown', e)
                );
              }, [t]);
            })(e => {
              k !== s.layers.size - 1 ||
                (null == o || o(e),
                !e.defaultPrevented && c && (e.preventDefault(), c()));
            }),
            (0, d.useEffect)(() => {
              if (p)
                return (
                  n &&
                    (0 === s.layersWithOutsidePointerEventsDisabled.size &&
                      ((r = document.body.style.pointerEvents),
                      (document.body.style.pointerEvents = 'none')),
                    s.layersWithOutsidePointerEventsDisabled.add(p)),
                  s.layers.add(p),
                  A(),
                  () => {
                    n &&
                      1 === s.layersWithOutsidePointerEventsDisabled.size &&
                      (document.body.style.pointerEvents = r);
                  }
                );
            }, [p, n, s]),
            (0, d.useEffect)(
              () => () => {
                p &&
                  (s.layers.delete(p),
                  s.layersWithOutsidePointerEventsDisabled.delete(p),
                  A());
              },
              [p, s]
            ),
            (0, d.useEffect)(() => {
              let e = () => g({});
              return (
                document.addEventListener(L, e),
                () => document.removeEventListener(L, e)
              );
            }, []),
            (0, d.createElement)(
              M.div,
              (0, f.Z)({}, a, {
                ref: y,
                style: {
                  pointerEvents: C ? (R ? 'auto' : 'none') : void 0,
                  ...e.style,
                },
                onFocusCapture: m(e.onFocusCapture, D.onFocusCapture),
                onBlurCapture: m(e.onBlurCapture, D.onBlurCapture),
                onPointerDownCapture: m(
                  e.onPointerDownCapture,
                  S.onPointerDownCapture
                ),
              })
            )
          );
        });
      function A() {
        let e = new CustomEvent(L);
        document.dispatchEvent(e);
      }
      function O(e, t, n, { discrete: r }) {
        let o = n.originalEvent.target,
          i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        (t && o.addEventListener(e, t, { once: !0 }), r)
          ? o && (0, x.flushSync)(() => o.dispatchEvent(i))
          : o.dispatchEvent(i);
      }
      let T = 'focusScope.autoFocusOnMount',
        N = 'focusScope.autoFocusOnUnmount',
        F = { bubbles: !1, cancelable: !0 },
        I = (0, d.forwardRef)((e, t) => {
          let {
              loop: n = !1,
              trapped: r = !1,
              onMountAutoFocus: o,
              onUnmountAutoFocus: i,
              ...u
            } = e,
            [l, c] = (0, d.useState)(null),
            a = b(o),
            s = b(i),
            p = (0, d.useRef)(null),
            m = h(t, e => c(e)),
            v = (0, d.useRef)({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              },
            }).current;
          (0, d.useEffect)(() => {
            if (r) {
              function e(e) {
                if (v.paused || !l) return;
                let t = e.target;
                l.contains(t) ? (p.current = t) : Z(p.current, { select: !0 });
              }
              function t(e) {
                v.paused ||
                  !l ||
                  l.contains(e.relatedTarget) ||
                  Z(p.current, { select: !0 });
              }
              return (
                document.addEventListener('focusin', e),
                document.addEventListener('focusout', t),
                () => {
                  document.removeEventListener('focusin', e),
                    document.removeEventListener('focusout', t);
                }
              );
            }
          }, [r, l, v.paused]),
            (0, d.useEffect)(() => {
              if (l) {
                W.add(v);
                let e = document.activeElement;
                if (!l.contains(e)) {
                  let t = new CustomEvent(T, F);
                  l.addEventListener(T, a),
                    l.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e, { select: t = !1 } = {}) {
                        let n = document.activeElement;
                        for (let r of e)
                          if (
                            (Z(r, { select: t }), document.activeElement !== n)
                          )
                            return;
                      })(
                        K(l).filter(e => 'A' !== e.tagName),
                        { select: !0 }
                      ),
                      document.activeElement === e && Z(l));
                }
                return () => {
                  l.removeEventListener(T, a),
                    setTimeout(() => {
                      let t = new CustomEvent(N, F);
                      l.addEventListener(N, s),
                        l.dispatchEvent(t),
                        t.defaultPrevented ||
                          Z(null != e ? e : document.body, { select: !0 }),
                        l.removeEventListener(N, s),
                        W.remove(v);
                    }, 0);
                };
              }
            }, [l, a, s, v]);
          let g = (0, d.useCallback)(
            e => {
              if ((!n && !r) || v.paused) return;
              let t = 'Tab' === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                o = document.activeElement;
              if (t && o) {
                let t = e.currentTarget,
                  [r, i] = (function (e) {
                    let t = K(e);
                    return [_(t, e), _(t.reverse(), e)];
                  })(t);
                r && i
                  ? e.shiftKey || o !== i
                    ? e.shiftKey &&
                      o === r &&
                      (e.preventDefault(), n && Z(i, { select: !0 }))
                    : (e.preventDefault(), n && Z(r, { select: !0 }))
                  : o === t && e.preventDefault();
              }
            },
            [n, r, v.paused]
          );
          return (0, d.createElement)(
            M.div,
            (0, f.Z)({ tabIndex: -1 }, u, { ref: m, onKeyDown: g })
          );
        });
      function K(e) {
        let t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: e => {
              let t = 'INPUT' === e.tagName && 'hidden' === e.type;
              return e.disabled || e.hidden || t
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                  ? NodeFilter.FILTER_ACCEPT
                  : NodeFilter.FILTER_SKIP;
            },
          });
        for (; n.nextNode(); ) t.push(n.currentNode);
        return t;
      }
      function _(e, t) {
        for (let n of e)
          if (
            !(function (e, { upTo: t }) {
              if ('hidden' === getComputedStyle(e).visibility) return !0;
              for (; e && (void 0 === t || e !== t); ) {
                if ('none' === getComputedStyle(e).display) return !0;
                e = e.parentElement;
              }
              return !1;
            })(n, { upTo: t })
          )
            return n;
      }
      function Z(e, { select: t = !1 } = {}) {
        if (e && e.focus) {
          var n;
          let r = document.activeElement;
          e.focus({ preventScroll: !0 }),
            e !== r &&
              (n = e) instanceof HTMLInputElement &&
              'select' in n &&
              t &&
              e.select();
        }
      }
      let W =
        ((o = []),
        {
          add(e) {
            let t = o[0];
            e !== t && (null == t || t.pause()), (o = V(o, e)).unshift(e);
          },
          remove(e) {
            var t;
            null === (t = (o = V(o, e))[0]) || void 0 === t || t.resume();
          },
        });
      function V(e, t) {
        let n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n;
      }
      let j = (0, d.forwardRef)((e, t) => {
          var n;
          let {
            container: r = null == globalThis
              ? void 0
              : null === (n = globalThis.document) || void 0 === n
                ? void 0
                : n.body,
            ...o
          } = e;
          return r
            ? x.createPortal(
                (0, d.createElement)(M.div, (0, f.Z)({}, o, { ref: t })),
                r
              )
            : null;
        }),
        B = e => {
          let { present: t, children: n } = e,
            r = (function (e) {
              var t, n;
              let [r, o] = (0, d.useState)(),
                i = (0, d.useRef)({}),
                u = (0, d.useRef)(e),
                l = (0, d.useRef)('none'),
                [c, a] =
                  ((t = e ? 'mounted' : 'unmounted'),
                  (n = {
                    mounted: {
                      UNMOUNT: 'unmounted',
                      ANIMATION_OUT: 'unmountSuspended',
                    },
                    unmountSuspended: {
                      MOUNT: 'mounted',
                      ANIMATION_END: 'unmounted',
                    },
                    unmounted: { MOUNT: 'mounted' },
                  }),
                  (0, d.useReducer)((e, t) => {
                    let r = n[e][t];
                    return null != r ? r : e;
                  }, t));
              return (
                (0, d.useEffect)(() => {
                  let e = H(i.current);
                  l.current = 'mounted' === c ? e : 'none';
                }, [c]),
                g(() => {
                  let t = i.current,
                    n = u.current;
                  if (n !== e) {
                    let r = l.current,
                      o = H(t);
                    e
                      ? a('MOUNT')
                      : 'none' === o ||
                          (null == t ? void 0 : t.display) === 'none'
                        ? a('UNMOUNT')
                        : n && r !== o
                          ? a('ANIMATION_OUT')
                          : a('UNMOUNT'),
                      (u.current = e);
                  }
                }, [e, a]),
                g(() => {
                  if (r) {
                    let e = e => {
                        let t = H(i.current).includes(e.animationName);
                        e.target === r &&
                          t &&
                          (0, x.flushSync)(() => a('ANIMATION_END'));
                      },
                      t = e => {
                        e.target === r && (l.current = H(i.current));
                      };
                    return (
                      r.addEventListener('animationstart', t),
                      r.addEventListener('animationcancel', e),
                      r.addEventListener('animationend', e),
                      () => {
                        r.removeEventListener('animationstart', t),
                          r.removeEventListener('animationcancel', e),
                          r.removeEventListener('animationend', e);
                      }
                    );
                  }
                  a('ANIMATION_END');
                }, [r, a]),
                {
                  isPresent: ['mounted', 'unmountSuspended'].includes(c),
                  ref: (0, d.useCallback)(e => {
                    e && (i.current = getComputedStyle(e)), o(e);
                  }, []),
                }
              );
            })(t),
            o =
              'function' == typeof n
                ? n({ present: r.isPresent })
                : d.Children.only(n),
            i = h(r.ref, o.ref);
          return 'function' == typeof n || r.isPresent
            ? (0, d.cloneElement)(o, { ref: i })
            : null;
        };
      function H(e) {
        return (null == e ? void 0 : e.animationName) || 'none';
      }
      B.displayName = 'Presence';
      let z = 0;
      function q() {
        let e = document.createElement('span');
        return (
          e.setAttribute('data-radix-focus-guard', ''),
          (e.tabIndex = 0),
          (e.style.cssText =
            'outline: none; opacity: 0; position: fixed; pointer-events: none'),
          e
        );
      }
      var U = n(85556),
        $ = 'right-scroll-bar-position',
        Y = 'width-before-scroll-bar';
      function J(e, t) {
        return 'function' == typeof e ? e(t) : e && (e.current = t), e;
      }
      var X = new WeakMap(),
        G =
          (void 0 === i && (i = {}),
          ((void 0 === u &&
            (u = function (e) {
              return e;
            }),
          (l = []),
          (c = !1),
          (a = {
            read: function () {
              if (c)
                throw Error(
                  'Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.'
                );
              return l.length ? l[l.length - 1] : null;
            },
            useMedium: function (e) {
              var t = u(e, c);
              return (
                l.push(t),
                function () {
                  l = l.filter(function (e) {
                    return e !== t;
                  });
                }
              );
            },
            assignSyncMedium: function (e) {
              for (c = !0; l.length; ) {
                var t = l;
                (l = []), t.forEach(e);
              }
              l = {
                push: function (t) {
                  return e(t);
                },
                filter: function () {
                  return l;
                },
              };
            },
            assignMedium: function (e) {
              c = !0;
              var t = [];
              if (l.length) {
                var n = l;
                (l = []), n.forEach(e), (t = l);
              }
              var r = function () {
                  var n = t;
                  (t = []), n.forEach(e);
                },
                o = function () {
                  return Promise.resolve().then(r);
                };
              o(),
                (l = {
                  push: function (e) {
                    t.push(e), o();
                  },
                  filter: function (e) {
                    return (t = t.filter(e)), l;
                  },
                });
            },
          })).options = (0, U.pi)({ async: !0, ssr: !1 }, i)),
          a),
        Q = function () {},
        ee = d.forwardRef(function (e, t) {
          var n,
            r,
            o,
            i,
            u = d.useRef(null),
            l = d.useState({
              onScrollCapture: Q,
              onWheelCapture: Q,
              onTouchMoveCapture: Q,
            }),
            c = l[0],
            a = l[1],
            s = e.forwardProps,
            f = e.children,
            p = e.className,
            m = e.removeScrollBar,
            v = e.enabled,
            h = e.shards,
            g = e.sideCar,
            y = e.noIsolation,
            w = e.inert,
            E = e.allowPinchZoom,
            b = e.as,
            x = (0, U._T)(e, [
              'forwardProps',
              'children',
              'className',
              'removeScrollBar',
              'enabled',
              'shards',
              'sideCar',
              'noIsolation',
              'inert',
              'allowPinchZoom',
              'as',
            ]),
            k =
              ((n = [u, t]),
              (r = function (e) {
                return n.forEach(function (t) {
                  return J(t, e);
                });
              }),
              ((o = (0, d.useState)(function () {
                return {
                  value: null,
                  callback: r,
                  facade: {
                    get current() {
                      return o.value;
                    },
                    set current(value) {
                      var e = o.value;
                      e !== value && ((o.value = value), o.callback(value, e));
                    },
                  },
                };
              })[0]).callback = r),
              (i = o.facade),
              d.useLayoutEffect(
                function () {
                  var e = X.get(i);
                  if (e) {
                    var t = new Set(e),
                      r = new Set(n),
                      o = i.current;
                    t.forEach(function (e) {
                      r.has(e) || J(e, null);
                    }),
                      r.forEach(function (e) {
                        t.has(e) || J(e, o);
                      });
                  }
                  X.set(i, n);
                },
                [n]
              ),
              i),
            C = (0, U.pi)((0, U.pi)({}, x), c);
          return d.createElement(
            d.Fragment,
            null,
            v &&
              d.createElement(g, {
                sideCar: G,
                removeScrollBar: m,
                shards: h,
                noIsolation: y,
                inert: w,
                setCallbacks: a,
                allowPinchZoom: !!E,
                lockRef: u,
              }),
            s
              ? d.cloneElement(
                  d.Children.only(f),
                  (0, U.pi)((0, U.pi)({}, C), { ref: k })
                )
              : d.createElement(
                  void 0 === b ? 'div' : b,
                  (0, U.pi)({}, C, { className: p, ref: k }),
                  f
                )
          );
        });
      (ee.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (ee.classNames = { fullWidth: Y, zeroRight: $ });
      var et = function (e) {
        var t = e.sideCar,
          n = (0, U._T)(e, ['sideCar']);
        if (!t)
          throw Error(
            'Sidecar: please provide `sideCar` property to import the right car'
          );
        var r = t.read();
        if (!r) throw Error('Sidecar medium not found');
        return d.createElement(r, (0, U.pi)({}, n));
      };
      et.isSideCarExport = !0;
      var en = function () {
          var e = 0,
            t = null;
          return {
            add: function (r) {
              if (
                0 == e &&
                (t = (function () {
                  if (!document) return null;
                  var e = document.createElement('style');
                  e.type = 'text/css';
                  var t = s || n.nc;
                  return t && e.setAttribute('nonce', t), e;
                })())
              ) {
                var o, i;
                (o = t).styleSheet
                  ? (o.styleSheet.cssText = r)
                  : o.appendChild(document.createTextNode(r)),
                  (i = t),
                  (
                    document.head || document.getElementsByTagName('head')[0]
                  ).appendChild(i);
              }
              e++;
            },
            remove: function () {
              --e ||
                !t ||
                (t.parentNode && t.parentNode.removeChild(t), (t = null));
            },
          };
        },
        er = function () {
          var e = en();
          return function (t, n) {
            d.useEffect(
              function () {
                return (
                  e.add(t),
                  function () {
                    e.remove();
                  }
                );
              },
              [t && n]
            );
          };
        },
        eo = function () {
          var e = er();
          return function (t) {
            return e(t.styles, t.dynamic), null;
          };
        },
        ei = { left: 0, top: 0, right: 0, gap: 0 },
        eu = function (e) {
          return parseInt(e || '', 10) || 0;
        },
        el = function (e) {
          var t = window.getComputedStyle(document.body),
            n = t['padding' === e ? 'paddingLeft' : 'marginLeft'],
            r = t['padding' === e ? 'paddingTop' : 'marginTop'],
            o = t['padding' === e ? 'paddingRight' : 'marginRight'];
          return [eu(n), eu(r), eu(o)];
        },
        ec = function (e) {
          if ((void 0 === e && (e = 'margin'), 'undefined' == typeof window))
            return ei;
          var t = el(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0]),
          };
        },
        ea = eo(),
        es = function (e, t, n, r) {
          var o = e.left,
            i = e.top,
            u = e.right,
            l = e.gap;
          return (
            void 0 === n && (n = 'margin'),
            '\n  .'
              .concat('with-scroll-bars-hidden', ' {\n   overflow: hidden ')
              .concat(r, ';\n   padding-right: ')
              .concat(l, 'px ')
              .concat(r, ';\n  }\n  body {\n    overflow: hidden ')
              .concat(r, ';\n    overscroll-behavior: contain;\n    ')
              .concat(
                [
                  t && 'position: relative '.concat(r, ';'),
                  'margin' === n &&
                    '\n    padding-left: '
                      .concat(o, 'px;\n    padding-top: ')
                      .concat(i, 'px;\n    padding-right: ')
                      .concat(
                        u,
                        'px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: '
                      )
                      .concat(l, 'px ')
                      .concat(r, ';\n    '),
                  'padding' === n &&
                    'padding-right: '.concat(l, 'px ').concat(r, ';'),
                ]
                  .filter(Boolean)
                  .join(''),
                '\n  }\n  \n  .'
              )
              .concat($, ' {\n    right: ')
              .concat(l, 'px ')
              .concat(r, ';\n  }\n  \n  .')
              .concat(Y, ' {\n    margin-right: ')
              .concat(l, 'px ')
              .concat(r, ';\n  }\n  \n  .')
              .concat($, ' .')
              .concat($, ' {\n    right: 0 ')
              .concat(r, ';\n  }\n  \n  .')
              .concat(Y, ' .')
              .concat(Y, ' {\n    margin-right: 0 ')
              .concat(r, ';\n  }\n  \n  body {\n    ')
              .concat('--removed-body-scroll-bar-size', ': ')
              .concat(l, 'px;\n  }\n')
          );
        },
        ef = function (e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            o = void 0 === r ? 'margin' : r,
            i = d.useMemo(
              function () {
                return ec(o);
              },
              [o]
            );
          return d.createElement(ea, {
            styles: es(i, !t, o, n ? '' : '!important'),
          });
        },
        ed = !1;
      if ('undefined' != typeof window)
        try {
          var ep = Object.defineProperty({}, 'passive', {
            get: function () {
              return (ed = !0), !0;
            },
          });
          window.addEventListener('test', ep, ep),
            window.removeEventListener('test', ep, ep);
        } catch (e) {
          ed = !1;
        }
      var em = !!ed && { passive: !1 },
        ev = function (e) {
          var t = window.getComputedStyle(e);
          return (
            'hidden' !== t.overflowY &&
            !(t.overflowY === t.overflowX && 'visible' === t.overflowY)
          );
        },
        eh = function (e) {
          var t = window.getComputedStyle(e);
          return (
            'hidden' !== t.overflowX &&
            !(t.overflowY === t.overflowX && 'visible' === t.overflowX)
          );
        },
        eg = function (e, t) {
          var n = t;
          do {
            if (
              ('undefined' != typeof ShadowRoot &&
                n instanceof ShadowRoot &&
                (n = n.host),
              ey(e, n))
            ) {
              var r = ew(e, n);
              if (r[1] > r[2]) return !0;
            }
            n = n.parentNode;
          } while (n && n !== document.body);
          return !1;
        },
        ey = function (e, t) {
          return 'v' === e ? ev(t) : eh(t);
        },
        ew = function (e, t) {
          return 'v' === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        eE = function (e, t, n, r, o) {
          var i,
            u =
              ((i = window.getComputedStyle(t).direction),
              'h' === e && 'rtl' === i ? -1 : 1),
            l = u * r,
            c = n.target,
            a = t.contains(c),
            s = !1,
            f = l > 0,
            d = 0,
            p = 0;
          do {
            var m = ew(e, c),
              v = m[0],
              h = m[1] - m[2] - u * v;
            (v || h) && ey(e, c) && ((d += h), (p += v)), (c = c.parentNode);
          } while (
            (!a && c !== document.body) ||
            (a && (t.contains(c) || t === c))
          );
          return (
            f && ((o && 0 === d) || (!o && l > d))
              ? (s = !0)
              : !f && ((o && 0 === p) || (!o && -l > p)) && (s = !0),
            s
          );
        },
        eb = function (e) {
          return 'changedTouches' in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        ex = function (e) {
          return [e.deltaX, e.deltaY];
        },
        ek = function (e) {
          return e && 'current' in e ? e.current : e;
        },
        eC = 0,
        eR = [],
        eS =
          (G.useMedium(function (e) {
            var t = d.useRef([]),
              n = d.useRef([0, 0]),
              r = d.useRef(),
              o = d.useState(eC++)[0],
              i = d.useState(function () {
                return eo();
              })[0],
              u = d.useRef(e);
            d.useEffect(
              function () {
                u.current = e;
              },
              [e]
            ),
              d.useEffect(
                function () {
                  if (e.inert) {
                    document.body.classList.add(
                      'block-interactivity-'.concat(o)
                    );
                    var t = (0, U.ev)(
                      [e.lockRef.current],
                      (e.shards || []).map(ek),
                      !0
                    ).filter(Boolean);
                    return (
                      t.forEach(function (e) {
                        return e.classList.add(
                          'allow-interactivity-'.concat(o)
                        );
                      }),
                      function () {
                        document.body.classList.remove(
                          'block-interactivity-'.concat(o)
                        ),
                          t.forEach(function (e) {
                            return e.classList.remove(
                              'allow-interactivity-'.concat(o)
                            );
                          });
                      }
                    );
                  }
                },
                [e.inert, e.lockRef.current, e.shards]
              );
            var l = d.useCallback(function (e, t) {
                if ('touches' in e && 2 === e.touches.length)
                  return !u.current.allowPinchZoom;
                var o,
                  i = eb(e),
                  l = n.current,
                  c = 'deltaX' in e ? e.deltaX : l[0] - i[0],
                  a = 'deltaY' in e ? e.deltaY : l[1] - i[1],
                  s = e.target,
                  f = Math.abs(c) > Math.abs(a) ? 'h' : 'v';
                if ('touches' in e && 'h' === f && 'range' === s.type)
                  return !1;
                var d = eg(f, s);
                if (!d) return !0;
                if (
                  (d ? (o = f) : ((o = 'v' === f ? 'h' : 'v'), (d = eg(f, s))),
                  !d)
                )
                  return !1;
                if (
                  (!r.current &&
                    'changedTouches' in e &&
                    (c || a) &&
                    (r.current = o),
                  !o)
                )
                  return !0;
                var p = r.current || o;
                return eE(p, t, e, 'h' === p ? c : a, !0);
              }, []),
              c = d.useCallback(function (e) {
                if (eR.length && eR[eR.length - 1] === i) {
                  var n = 'deltaY' in e ? ex(e) : eb(e),
                    r = t.current.filter(function (t) {
                      var r;
                      return (
                        t.name === e.type &&
                        t.target === e.target &&
                        (r = t.delta)[0] === n[0] &&
                        r[1] === n[1]
                      );
                    })[0];
                  if (r && r.should) {
                    e.preventDefault();
                    return;
                  }
                  if (!r) {
                    var o = (u.current.shards || [])
                      .map(ek)
                      .filter(Boolean)
                      .filter(function (t) {
                        return t.contains(e.target);
                      });
                    (o.length > 0 ? l(e, o[0]) : !u.current.noIsolation) &&
                      e.preventDefault();
                  }
                }
              }, []),
              a = d.useCallback(function (e, n, r, o) {
                var i = { name: e, delta: n, target: r, should: o };
                t.current.push(i),
                  setTimeout(function () {
                    t.current = t.current.filter(function (e) {
                      return e !== i;
                    });
                  }, 1);
              }, []),
              s = d.useCallback(function (e) {
                (n.current = eb(e)), (r.current = void 0);
              }, []),
              f = d.useCallback(function (t) {
                a(t.type, ex(t), t.target, l(t, e.lockRef.current));
              }, []),
              p = d.useCallback(function (t) {
                a(t.type, eb(t), t.target, l(t, e.lockRef.current));
              }, []);
            d.useEffect(function () {
              return (
                eR.push(i),
                e.setCallbacks({
                  onScrollCapture: f,
                  onWheelCapture: f,
                  onTouchMoveCapture: p,
                }),
                document.addEventListener('wheel', c, em),
                document.addEventListener('touchmove', c, em),
                document.addEventListener('touchstart', s, em),
                function () {
                  (eR = eR.filter(function (e) {
                    return e !== i;
                  })),
                    document.removeEventListener('wheel', c, em),
                    document.removeEventListener('touchmove', c, em),
                    document.removeEventListener('touchstart', s, em);
                }
              );
            }, []);
            var m = e.removeScrollBar,
              v = e.inert;
            return d.createElement(
              d.Fragment,
              null,
              v
                ? d.createElement(i, {
                    styles: '\n  .block-interactivity-'
                      .concat(
                        o,
                        ' {pointer-events: none;}\n  .allow-interactivity-'
                      )
                      .concat(o, ' {pointer-events: all;}\n'),
                  })
                : null,
              m ? d.createElement(ef, { gapMode: 'margin' }) : null
            );
          }),
          et),
        eM = d.forwardRef(function (e, t) {
          return d.createElement(ee, (0, U.pi)({}, e, { ref: t, sideCar: eS }));
        });
      eM.classNames = ee.classNames;
      var eL = new WeakMap(),
        eP = new WeakMap(),
        eD = {},
        eA = 0,
        eO = function (e) {
          return e && (e.host || eO(e.parentNode));
        },
        eT = function (e, t, n, r) {
          var o = (Array.isArray(e) ? e : [e])
            .map(function (e) {
              if (t.contains(e)) return e;
              var n = eO(e);
              return n && t.contains(n)
                ? n
                : (console.error(
                    'aria-hidden',
                    e,
                    'in not contained inside',
                    t,
                    '. Doing nothing'
                  ),
                  null);
            })
            .filter(function (e) {
              return !!e;
            });
          eD[n] || (eD[n] = new WeakMap());
          var i = eD[n],
            u = [],
            l = new Set(),
            c = new Set(o),
            a = function (e) {
              !e || l.has(e) || (l.add(e), a(e.parentNode));
            };
          o.forEach(a);
          var s = function (e) {
            !e ||
              c.has(e) ||
              Array.prototype.forEach.call(e.children, function (e) {
                if (l.has(e)) s(e);
                else {
                  var t = e.getAttribute(r),
                    o = null !== t && 'false' !== t,
                    c = (eL.get(e) || 0) + 1,
                    a = (i.get(e) || 0) + 1;
                  eL.set(e, c),
                    i.set(e, a),
                    u.push(e),
                    1 === c && o && eP.set(e, !0),
                    1 === a && e.setAttribute(n, 'true'),
                    o || e.setAttribute(r, 'true');
                }
              });
          };
          return (
            s(t),
            l.clear(),
            eA++,
            function () {
              u.forEach(function (e) {
                var t = eL.get(e) - 1,
                  o = i.get(e) - 1;
                eL.set(e, t),
                  i.set(e, o),
                  t || (eP.has(e) || e.removeAttribute(r), eP.delete(e)),
                  o || e.removeAttribute(n);
              }),
                --eA ||
                  ((eL = new WeakMap()),
                  (eL = new WeakMap()),
                  (eP = new WeakMap()),
                  (eD = {}));
            }
          );
        },
        eN = function (e, t, n) {
          void 0 === n && (n = 'data-aria-hidden');
          var r = Array.from(Array.isArray(e) ? e : [e]),
            o =
              t ||
              ('undefined' == typeof document
                ? null
                : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
          return o
            ? (r.push.apply(r, Array.from(o.querySelectorAll('[aria-live]'))),
              eT(r, o, n, 'aria-hidden'))
            : function () {
                return null;
              };
        };
      let eF = 'Dialog',
        [eI, eK] = (function (e, t = []) {
          let n = [],
            r = () => {
              let t = n.map(e => (0, d.createContext)(e));
              return function (n) {
                let r = (null == n ? void 0 : n[e]) || t;
                return (0, d.useMemo)(
                  () => ({ [`__scope${e}`]: { ...n, [e]: r } }),
                  [n, r]
                );
              };
            };
          return (
            (r.scopeName = e),
            [
              function (t, r) {
                let o = (0, d.createContext)(r),
                  i = n.length;
                function u(t) {
                  let { scope: n, children: r, ...u } = t,
                    l = (null == n ? void 0 : n[e][i]) || o,
                    c = (0, d.useMemo)(() => u, Object.values(u));
                  return (0, d.createElement)(l.Provider, { value: c }, r);
                }
                return (
                  (n = [...n, r]),
                  (u.displayName = t + 'Provider'),
                  [
                    u,
                    function (n, u) {
                      let l = (null == u ? void 0 : u[e][i]) || o,
                        c = (0, d.useContext)(l);
                      if (c) return c;
                      if (void 0 !== r) return r;
                      throw Error(`\`${n}\` must be used within \`${t}\``);
                    },
                  ]
                );
              },
              (function (...e) {
                let t = e[0];
                if (1 === e.length) return t;
                let n = () => {
                  let n = e.map(e => ({
                    useScope: e(),
                    scopeName: e.scopeName,
                  }));
                  return function (e) {
                    let r = n.reduce((t, { useScope: n, scopeName: r }) => {
                      let o = n(e)[`__scope${r}`];
                      return { ...t, ...o };
                    }, {});
                    return (0, d.useMemo)(
                      () => ({ [`__scope${t.scopeName}`]: r }),
                      [r]
                    );
                  };
                };
                return (n.scopeName = t.scopeName), n;
              })(r, ...t),
            ]
          );
        })(eF),
        [e_, eZ] = eI(eF),
        eW = 'DialogPortal',
        [eV, ej] = eI(eW, { forceMount: void 0 }),
        eB = 'DialogOverlay',
        eH = (0, d.forwardRef)((e, t) => {
          let n = ej(eB, e.__scopeDialog),
            { forceMount: r = n.forceMount, ...o } = e,
            i = eZ(eB, e.__scopeDialog);
          return i.modal
            ? (0, d.createElement)(
                B,
                { present: r || i.open },
                (0, d.createElement)(ez, (0, f.Z)({}, o, { ref: t }))
              )
            : null;
        }),
        ez = (0, d.forwardRef)((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = eZ(eB, n);
          return (0, d.createElement)(
            eM,
            { as: k, allowPinchZoom: !0, shards: [o.contentRef] },
            (0, d.createElement)(
              M.div,
              (0, f.Z)({ 'data-state': eX(o.open) }, r, {
                ref: t,
                style: { pointerEvents: 'auto', ...r.style },
              })
            )
          );
        }),
        eq = 'DialogContent',
        eU = (0, d.forwardRef)((e, t) => {
          let n = ej(eq, e.__scopeDialog),
            { forceMount: r = n.forceMount, ...o } = e,
            i = eZ(eq, e.__scopeDialog);
          return (0, d.createElement)(
            B,
            { present: r || i.open },
            i.modal
              ? (0, d.createElement)(e$, (0, f.Z)({}, o, { ref: t }))
              : (0, d.createElement)(eY, (0, f.Z)({}, o, { ref: t }))
          );
        }),
        e$ = (0, d.forwardRef)((e, t) => {
          let n = eZ(eq, e.__scopeDialog),
            r = (0, d.useRef)(null),
            o = h(t, n.contentRef, r);
          return (
            (0, d.useEffect)(() => {
              let e = r.current;
              if (e) return eN(e);
            }, []),
            (0, d.createElement)(
              eJ,
              (0, f.Z)({}, e, {
                ref: o,
                trapFocus: n.open,
                disableOutsidePointerEvents: !0,
                onCloseAutoFocus: m(e.onCloseAutoFocus, e => {
                  var t;
                  e.preventDefault(),
                    null === (t = n.triggerRef.current) ||
                      void 0 === t ||
                      t.focus();
                }),
                onPointerDownOutside: m(e.onPointerDownOutside, e => {
                  let t = e.detail.originalEvent,
                    n = 0 === t.button && !0 === t.ctrlKey;
                  (2 === t.button || n) && e.preventDefault();
                }),
                onFocusOutside: m(e.onFocusOutside, e => e.preventDefault()),
              })
            )
          );
        }),
        eY = (0, d.forwardRef)((e, t) => {
          let n = eZ(eq, e.__scopeDialog),
            r = (0, d.useRef)(!1);
          return (0, d.createElement)(
            eJ,
            (0, f.Z)({}, e, {
              ref: t,
              trapFocus: !1,
              disableOutsidePointerEvents: !1,
              onCloseAutoFocus: t => {
                var o, i;
                null === (o = e.onCloseAutoFocus) ||
                  void 0 === o ||
                  o.call(e, t),
                  t.defaultPrevented ||
                    (r.current ||
                      null === (i = n.triggerRef.current) ||
                      void 0 === i ||
                      i.focus(),
                    t.preventDefault()),
                  (r.current = !1);
              },
              onInteractOutside: t => {
                var o, i;
                null === (o = e.onInteractOutside) ||
                  void 0 === o ||
                  o.call(e, t),
                  t.defaultPrevented || (r.current = !0);
                let u = t.target;
                (null === (i = n.triggerRef.current) || void 0 === i
                  ? void 0
                  : i.contains(u)) && t.preventDefault();
              },
            })
          );
        }),
        eJ = (0, d.forwardRef)((e, t) => {
          let {
              __scopeDialog: n,
              trapFocus: r,
              onOpenAutoFocus: o,
              onCloseAutoFocus: i,
              ...u
            } = e,
            l = eZ(eq, n),
            c = h(t, (0, d.useRef)(null));
          return (
            (0, d.useEffect)(() => {
              var e, t;
              let n = document.querySelectorAll('[data-radix-focus-guard]');
              return (
                document.body.insertAdjacentElement(
                  'afterbegin',
                  null !== (e = n[0]) && void 0 !== e ? e : q()
                ),
                document.body.insertAdjacentElement(
                  'beforeend',
                  null !== (t = n[1]) && void 0 !== t ? t : q()
                ),
                z++,
                () => {
                  1 === z &&
                    document
                      .querySelectorAll('[data-radix-focus-guard]')
                      .forEach(e => e.remove()),
                    z--;
                }
              );
            }, []),
            (0, d.createElement)(
              d.Fragment,
              null,
              (0, d.createElement)(
                I,
                {
                  asChild: !0,
                  loop: !0,
                  trapped: r,
                  onMountAutoFocus: o,
                  onUnmountAutoFocus: i,
                },
                (0, d.createElement)(
                  D,
                  (0, f.Z)(
                    {
                      role: 'dialog',
                      id: l.contentId,
                      'aria-describedby': l.descriptionId,
                      'aria-labelledby': l.titleId,
                      'data-state': eX(l.open),
                    },
                    u,
                    { ref: c, onDismiss: () => l.onOpenChange(!1) }
                  )
                )
              ),
              !1
            )
          );
        });
      function eX(e) {
        return e ? 'open' : 'closed';
      }
      let [eG, eQ] = (function (e, t) {
          let n = (0, d.createContext)(t);
          function r(e) {
            let { children: t, ...r } = e,
              o = (0, d.useMemo)(() => r, Object.values(r));
            return (0, d.createElement)(n.Provider, { value: o }, t);
          }
          return (
            (r.displayName = e + 'Provider'),
            [
              r,
              function (r) {
                let o = (0, d.useContext)(n);
                if (o) return o;
                if (void 0 !== t) return t;
                throw Error(`\`${r}\` must be used within \`${e}\``);
              },
            ]
          );
        })('DialogTitleWarning', {
          contentName: eq,
          titleName: 'DialogTitle',
          docsSlug: 'dialog',
        }),
        e0 = e => {
          let {
              __scopeDialog: t,
              children: n,
              open: r,
              defaultOpen: o,
              onOpenChange: i,
              modal: u = !0,
            } = e,
            l = (0, d.useRef)(null),
            c = (0, d.useRef)(null),
            [a = !1, s] = (function ({
              prop: e,
              defaultProp: t,
              onChange: n = () => {},
            }) {
              let [r, o] = (function ({ defaultProp: e, onChange: t }) {
                  let n = (0, d.useState)(e),
                    [r] = n,
                    o = (0, d.useRef)(r),
                    i = b(t);
                  return (
                    (0, d.useEffect)(() => {
                      o.current !== r && (i(r), (o.current = r));
                    }, [r, o, i]),
                    n
                  );
                })({ defaultProp: t, onChange: n }),
                i = void 0 !== e,
                u = i ? e : r,
                l = b(n);
              return [
                u,
                (0, d.useCallback)(
                  t => {
                    if (i) {
                      let n = 'function' == typeof t ? t(e) : t;
                      n !== e && l(n);
                    } else o(t);
                  },
                  [i, e, o, l]
                ),
              ];
            })({ prop: r, defaultProp: o, onChange: i });
          return (0, d.createElement)(
            e_,
            {
              scope: t,
              triggerRef: l,
              contentRef: c,
              contentId: E(),
              titleId: E(),
              descriptionId: E(),
              open: a,
              onOpenChange: s,
              onOpenToggle: (0, d.useCallback)(() => s(e => !e), [s]),
              modal: u,
            },
            n
          );
        },
        e1 = e => {
          let {
              __scopeDialog: t,
              forceMount: n,
              children: r,
              container: o,
            } = e,
            i = eZ(eW, t);
          return (0, d.createElement)(
            eV,
            { scope: t, forceMount: n },
            d.Children.map(r, e =>
              (0, d.createElement)(
                B,
                { present: n || i.open },
                (0, d.createElement)(j, { asChild: !0, container: o }, e)
              )
            )
          );
        };
      var e2 = n(62610),
        e3 = '[cmdk-group=""]',
        e4 = '[cmdk-group-items=""]',
        e5 = '[cmdk-item=""]',
        e6 = `${e5}:not([aria-disabled="true"])`,
        e8 = 'cmdk-item-select',
        e9 = 'data-value',
        e7 = (e, t) => e2(e, t),
        te = d.createContext(void 0),
        tt = () => d.useContext(te),
        tn = d.createContext(void 0),
        tr = () => d.useContext(tn),
        to = d.createContext(void 0),
        ti = d.forwardRef((e, t) => {
          let n = d.useRef(null),
            r = tv(() => ({
              search: '',
              value: '',
              filtered: { count: 0, items: new Map(), groups: new Set() },
            })),
            o = tv(() => new Set()),
            i = tv(() => new Map()),
            u = tv(() => new Map()),
            l = tv(() => new Set()),
            c = tp(e),
            {
              label: a,
              children: s,
              value: f,
              onValueChange: p,
              filter: m,
              shouldFilter: v,
              ...h
            } = e,
            g = d.useId(),
            y = d.useId(),
            w = d.useId(),
            E = tw();
          tm(() => {
            if (void 0 !== f) {
              let e = f.trim().toLowerCase();
              (r.current.value = e), E(6, M), b.emit();
            }
          }, [f]);
          let b = d.useMemo(
              () => ({
                subscribe: e => (l.current.add(e), () => l.current.delete(e)),
                snapshot: () => r.current,
                setState: (e, t, n) => {
                  var o, i, u;
                  if (!Object.is(r.current[e], t)) {
                    if (((r.current[e] = t), 'search' === e)) S(), C(), E(1, R);
                    else if ('value' === e) {
                      if (
                        (null == (o = c.current) ? void 0 : o.value) !== void 0
                      ) {
                        null == (u = (i = c.current).onValueChange) ||
                          u.call(i, t);
                        return;
                      }
                      n || E(5, M);
                    }
                    b.emit();
                  }
                },
                emit: () => {
                  l.current.forEach(e => e());
                },
              }),
              []
            ),
            x = d.useMemo(
              () => ({
                value: (e, t) => {
                  t !== u.current.get(e) &&
                    (u.current.set(e, t),
                    r.current.filtered.items.set(e, k(t)),
                    E(2, () => {
                      C(), b.emit();
                    }));
                },
                item: (e, t) => (
                  o.current.add(e),
                  t &&
                    (i.current.has(t)
                      ? i.current.get(t).add(e)
                      : i.current.set(t, new Set([e]))),
                  E(3, () => {
                    S(), C(), r.current.value || R(), b.emit();
                  }),
                  () => {
                    u.current.delete(e),
                      o.current.delete(e),
                      r.current.filtered.items.delete(e),
                      E(4, () => {
                        S(), R(), b.emit();
                      });
                  }
                ),
                group: e => (
                  i.current.has(e) || i.current.set(e, new Set()),
                  () => {
                    u.current.delete(e), i.current.delete(e);
                  }
                ),
                filter: () => c.current.shouldFilter,
                label: a || e['aria-label'],
                listId: g,
                inputId: w,
                labelId: y,
              }),
              []
            );
          function k(e) {
            var t;
            let n = (null == (t = c.current) ? void 0 : t.filter) ?? e7;
            return e ? n(e, r.current.search) : 0;
          }
          function C() {
            if (
              !n.current ||
              !r.current.search ||
              !1 === c.current.shouldFilter
            )
              return;
            let e = r.current.filtered.items,
              t = [];
            r.current.filtered.groups.forEach(n => {
              let r = i.current.get(n),
                o = 0;
              r.forEach(t => {
                o = Math.max(e.get(t), o);
              }),
                t.push([n, o]);
            });
            let o = n.current.querySelector('[cmdk-list-sizer=""]');
            P()
              .sort((t, n) => {
                let r = t.getAttribute(e9),
                  o = n.getAttribute(e9);
                return (e.get(o) ?? 0) - (e.get(r) ?? 0);
              })
              .forEach(e => {
                let t = e.closest(e4);
                t
                  ? t.appendChild(
                      e.parentElement === t ? e : e.closest(`${e4} > *`)
                    )
                  : o.appendChild(
                      e.parentElement === o ? e : e.closest(`${e4} > *`)
                    );
              }),
              t
                .sort((e, t) => t[1] - e[1])
                .forEach(e => {
                  let t = n.current.querySelector(`${e3}[${e9}="${e[0]}"]`);
                  null == t || t.parentElement.appendChild(t);
                });
          }
          function R() {
            let e = P().find(e => !e.ariaDisabled),
              t = null == e ? void 0 : e.getAttribute(e9);
            b.setState('value', t || void 0);
          }
          function S() {
            if (!r.current.search || !1 === c.current.shouldFilter) {
              r.current.filtered.count = o.current.size;
              return;
            }
            r.current.filtered.groups = new Set();
            let e = 0;
            for (let t of o.current) {
              let n = k(u.current.get(t));
              r.current.filtered.items.set(t, n), n > 0 && e++;
            }
            for (let [e, t] of i.current)
              for (let n of t)
                if (r.current.filtered.items.get(n) > 0) {
                  r.current.filtered.groups.add(e);
                  break;
                }
            r.current.filtered.count = e;
          }
          function M() {
            var e, t, n;
            let r = L();
            r &&
              ((null == (e = r.parentElement) ? void 0 : e.firstChild) === r &&
                (null ==
                  (n =
                    null == (t = r.closest(e3))
                      ? void 0
                      : t.querySelector('[cmdk-group-heading=""]')) ||
                  n.scrollIntoView({ block: 'nearest' })),
              r.scrollIntoView({ block: 'nearest' }));
          }
          function L() {
            return n.current.querySelector(`${e5}[aria-selected="true"]`);
          }
          function P() {
            return Array.from(n.current.querySelectorAll(e6));
          }
          function D(e) {
            let t = P()[e];
            t && b.setState('value', t.getAttribute(e9));
          }
          function A(e) {
            var t;
            let n = L(),
              r = P(),
              o = r.findIndex(e => e === n),
              i = r[o + e];
            null != (t = c.current) &&
              t.loop &&
              (i =
                o + e < 0
                  ? r[r.length - 1]
                  : o + e === r.length
                    ? r[0]
                    : r[o + e]),
              i && b.setState('value', i.getAttribute(e9));
          }
          function O(e) {
            let t = L(),
              n = null == t ? void 0 : t.closest(e3),
              r;
            for (; n && !r; )
              r =
                null ==
                (n =
                  e > 0
                    ? (function (e, t) {
                        let n = e.nextElementSibling;
                        for (; n; ) {
                          if (n.matches(t)) return n;
                          n = n.nextElementSibling;
                        }
                      })(n, e3)
                    : (function (e, t) {
                        let n = e.previousElementSibling;
                        for (; n; ) {
                          if (n.matches(t)) return n;
                          n = n.previousElementSibling;
                        }
                      })(n, e3))
                  ? void 0
                  : n.querySelector(e6);
            r ? b.setState('value', r.getAttribute(e9)) : A(e);
          }
          let T = () => D(P().length - 1),
            N = e => {
              e.preventDefault(), e.metaKey ? T() : e.altKey ? O(1) : A(1);
            },
            F = e => {
              e.preventDefault(), e.metaKey ? D(0) : e.altKey ? O(-1) : A(-1);
            };
          return d.createElement(
            'div',
            {
              ref: th([n, t]),
              ...h,
              'cmdk-root': '',
              onKeyDown: e => {
                var t;
                if (
                  (null == (t = h.onKeyDown) || t.call(h, e),
                  !e.defaultPrevented)
                )
                  switch (e.key) {
                    case 'n':
                    case 'j':
                      e.ctrlKey && N(e);
                      break;
                    case 'ArrowDown':
                      N(e);
                      break;
                    case 'p':
                    case 'k':
                      e.ctrlKey && F(e);
                      break;
                    case 'ArrowUp':
                      F(e);
                      break;
                    case 'Home':
                      e.preventDefault(), D(0);
                      break;
                    case 'End':
                      e.preventDefault(), T();
                      break;
                    case 'Enter': {
                      e.preventDefault();
                      let t = L();
                      if (t) {
                        let e = new Event(e8);
                        t.dispatchEvent(e);
                      }
                    }
                  }
              },
            },
            d.createElement(
              'label',
              {
                'cmdk-label': '',
                htmlFor: x.inputId,
                id: x.labelId,
                style: tE,
              },
              a
            ),
            d.createElement(
              tn.Provider,
              { value: b },
              d.createElement(te.Provider, { value: x }, s)
            )
          );
        }),
        tu = d.forwardRef((e, t) => {
          let n = d.useId(),
            r = d.useRef(null),
            o = d.useContext(to),
            i = tt(),
            u = tp(e);
          tm(() => i.item(n, o), []);
          let l = ty(n, r, [e.value, e.children, r]),
            c = tr(),
            a = tg(e => e.value && e.value === l.current),
            s = tg(
              e => !1 === i.filter() || !e.search || e.filtered.items.get(n) > 0
            );
          function f() {
            var e, t;
            null == (t = (e = u.current).onSelect) || t.call(e, l.current);
          }
          if (
            (d.useEffect(() => {
              let t = r.current;
              if (!(!t || e.disabled))
                return (
                  t.addEventListener(e8, f), () => t.removeEventListener(e8, f)
                );
            }, [s, e.onSelect, e.disabled]),
            !s)
          )
            return null;
          let { disabled: p, value: m, onSelect: v, ...h } = e;
          return d.createElement(
            'div',
            {
              ref: th([r, t]),
              ...h,
              'cmdk-item': '',
              role: 'option',
              'aria-disabled': p || void 0,
              'aria-selected': a || void 0,
              'data-selected': a || void 0,
              onPointerMove: p
                ? void 0
                : function () {
                    c.setState('value', l.current, !0);
                  },
              onClick: p ? void 0 : f,
            },
            e.children
          );
        }),
        tl = d.forwardRef((e, t) => {
          let { heading: n, children: r, ...o } = e,
            i = d.useId(),
            u = d.useRef(null),
            l = d.useRef(null),
            c = d.useId(),
            a = tt(),
            s = tg(
              e => !1 === a.filter() || !e.search || e.filtered.groups.has(i)
            );
          tm(() => a.group(i), []), ty(i, u, [e.value, e.heading, l]);
          let f = d.createElement(to.Provider, { value: i }, r);
          return d.createElement(
            'div',
            {
              ref: th([u, t]),
              ...o,
              'cmdk-group': '',
              role: 'presentation',
              hidden: !s || void 0,
            },
            n &&
              d.createElement(
                'div',
                { ref: l, 'cmdk-group-heading': '', 'aria-hidden': !0, id: c },
                n
              ),
            d.createElement(
              'div',
              {
                'cmdk-group-items': '',
                role: 'group',
                'aria-labelledby': n ? c : void 0,
              },
              f
            )
          );
        }),
        tc = d.forwardRef((e, t) => {
          let { alwaysRender: n, ...r } = e,
            o = d.useRef(null),
            i = tg(e => !e.search);
          return n || i
            ? d.createElement('div', {
                ref: th([o, t]),
                ...r,
                'cmdk-separator': '',
                role: 'separator',
              })
            : null;
        }),
        ta = d.forwardRef((e, t) => {
          let { onValueChange: n, ...r } = e,
            o = null != e.value,
            i = tr(),
            u = tg(e => e.search),
            l = tt();
          return (
            d.useEffect(() => {
              null != e.value && i.setState('search', e.value);
            }, [e.value]),
            d.createElement('input', {
              ref: t,
              ...r,
              'cmdk-input': '',
              autoComplete: 'off',
              autoCorrect: 'off',
              spellCheck: !1,
              'aria-autocomplete': 'list',
              role: 'combobox',
              'aria-expanded': !0,
              'aria-controls': l.listId,
              'aria-labelledby': l.labelId,
              id: l.inputId,
              type: 'text',
              value: o ? e.value : u,
              onChange: e => {
                o || i.setState('search', e.target.value),
                  null == n || n(e.target.value);
              },
            })
          );
        }),
        ts = d.forwardRef((e, t) => {
          let { children: n, ...r } = e,
            o = d.useRef(null),
            i = d.useRef(null),
            u = tt();
          return (
            d.useEffect(() => {
              if (i.current && o.current) {
                let e = i.current,
                  t = o.current,
                  n,
                  r = new ResizeObserver(() => {
                    n = requestAnimationFrame(() => {
                      let n = e.getBoundingClientRect().height;
                      t.style.setProperty(
                        '--cmdk-list-height',
                        n.toFixed(1) + 'px'
                      );
                    });
                  });
                return (
                  r.observe(e),
                  () => {
                    cancelAnimationFrame(n), r.unobserve(e);
                  }
                );
              }
            }, []),
            d.createElement(
              'div',
              {
                ref: th([o, t]),
                ...r,
                'cmdk-list': '',
                role: 'listbox',
                'aria-label': 'Suggestions',
                id: u.listId,
                'aria-labelledby': u.inputId,
              },
              d.createElement('div', { ref: i, 'cmdk-list-sizer': '' }, n)
            )
          );
        }),
        tf = d.forwardRef((e, t) => {
          let { open: n, onOpenChange: r, container: o, ...i } = e;
          return d.createElement(
            e0,
            { open: n, onOpenChange: r },
            d.createElement(
              e1,
              { container: o },
              d.createElement(eH, { 'cmdk-overlay': '' }),
              d.createElement(
                eU,
                { 'aria-label': e.label, 'cmdk-dialog': '' },
                d.createElement(ti, { ref: t, ...i })
              )
            )
          );
        }),
        td = Object.assign(ti, {
          List: ts,
          Item: tu,
          Input: ta,
          Group: tl,
          Separator: tc,
          Dialog: tf,
          Empty: d.forwardRef((e, t) => {
            let n = d.useRef(!0),
              r = tg(e => 0 === e.filtered.count);
            return (
              d.useEffect(() => {
                n.current = !1;
              }, []),
              n.current || !r
                ? null
                : d.createElement('div', {
                    ref: t,
                    ...e,
                    'cmdk-empty': '',
                    role: 'presentation',
                  })
            );
          }),
          Loading: d.forwardRef((e, t) => {
            let { progress: n, children: r, ...o } = e;
            return d.createElement(
              'div',
              {
                ref: t,
                ...o,
                'cmdk-loading': '',
                role: 'progressbar',
                'aria-valuenow': n,
                'aria-valuemin': 0,
                'aria-valuemax': 100,
                'aria-label': 'Loading...',
              },
              d.createElement('div', { 'aria-hidden': !0 }, r)
            );
          }),
        });
      function tp(e) {
        let t = d.useRef(e);
        return (
          tm(() => {
            t.current = e;
          }),
          t
        );
      }
      var tm = typeof window > 'u' ? d.useEffect : d.useLayoutEffect;
      function tv(e) {
        let t = d.useRef();
        return void 0 === t.current && (t.current = e()), t;
      }
      function th(e) {
        return t => {
          e.forEach(e => {
            'function' == typeof e ? e(t) : null != e && (e.current = t);
          });
        };
      }
      function tg(e) {
        let t = tr(),
          n = () => e(t.snapshot());
        return d.useSyncExternalStore(t.subscribe, n, n);
      }
      function ty(e, t, n) {
        let r = d.useRef(),
          o = tt();
        return (
          tm(() => {
            var i;
            let u = (() => {
              var e;
              for (let t of n) {
                if ('string' == typeof t) return t.trim().toLowerCase();
                if ('object' == typeof t && 'current' in t && t.current)
                  return null == (e = t.current.textContent)
                    ? void 0
                    : e.trim().toLowerCase();
              }
            })();
            o.value(e, u),
              null == (i = t.current) || i.setAttribute(e9, u),
              (r.current = u);
          }),
          r
        );
      }
      var tw = () => {
          let [e, t] = d.useState(),
            n = tv(() => new Map());
          return (
            tm(() => {
              n.current.forEach(e => e()), (n.current = new Map());
            }, [e]),
            (e, r) => {
              n.current.set(e, r), t({});
            }
          );
        },
        tE = {
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: '0',
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          borderWidth: '0',
        };
    },
    32699: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(30201);
      let o = (0, n(42063).xD)(
        r.ZP,
        e => (t, n, r) => (
          (r.revalidateOnFocus = !1),
          (r.revalidateIfStale = !1),
          (r.revalidateOnReconnect = !1),
          e(t, n, r)
        )
      );
    },
  },
]);
