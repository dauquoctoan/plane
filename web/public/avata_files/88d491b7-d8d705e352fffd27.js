'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3684],
  {
    72952: function (t, e, r) {
      r.d(e, {
        ZP: function () {
          return nm;
        },
      });
      var n,
        i,
        o = r(3308),
        a = r(96526),
        s = r(12767),
        u = r(98271),
        l = r(1234),
        c = r(78948),
        f = r(23838),
        p = r(49215),
        d = r(27378),
        g = r(24964),
        h = r(21990),
        v = r(86625),
        m = r(90283),
        b = function (t, e) {
          return (b =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            })(t, e);
        };
      function x(t, e) {
        if ('function' != typeof e && null !== e)
          throw TypeError(
            'Class extends value ' + String(e) + ' is not a constructor or null'
          );
        function r() {
          this.constructor = t;
        }
        b(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((r.prototype = e.prototype), new r()));
      }
      var S = function () {
        return (S =
          Object.assign ||
          function (t) {
            for (var e, r = 1, n = arguments.length; r < n; r++)
              for (var i in (e = arguments[r]))
                Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t;
          }).apply(this, arguments);
      };
      function y(t, e) {
        var r = 'function' == typeof Symbol && t[Symbol.iterator];
        if (!r) return t;
        var n,
          i,
          o = r.call(t),
          a = [];
        try {
          for (; (void 0 === e || e-- > 0) && !(n = o.next()).done; )
            a.push(n.value);
        } catch (t) {
          i = { error: t };
        } finally {
          try {
            n && !n.done && (r = o.return) && r.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
        return a;
      }
      function E(t, e, r) {
        if (r || 2 == arguments.length)
          for (var n, i = 0, o = e.length; i < o; i++)
            (!n && i in e) ||
              (n || (n = Array.prototype.slice.call(e, 0, i)), (n[i] = e[i]));
        return t.concat(n || Array.prototype.slice.call(e));
      }
      function D(t, e) {
        return S({ events: [], props: [], name: t }, e);
      }
      var C = ['n', 'w', 's', 'e'],
        R = ['n', 'w', 's', 'e', 'nw', 'ne', 'sw', 'se'],
        M = (0, o.ZP)(),
        P = M.browser.webkit,
        z =
          P &&
          ((n =
            'undefined' == typeof window
              ? { userAgent: '' }
              : window.navigator),
          !!(i = /applewebkit\/([^\s]+)/g.exec(n.userAgent.toLowerCase())) &&
            605 > parseFloat(i[1])),
        O = M.browser.name,
        T = parseInt(M.browser.version, 10),
        w = M.browser.chromium,
        G = parseInt(M.browser.chromiumVersion, 10) || 0,
        A = ('chrome' === O && T >= 109) || (w && G >= 109),
        B = 'firefox' === O,
        _ = parseInt(M.browser.webkitVersion, 10) >= 612 || T >= 15,
        k = 'moveable-',
        I = R.map(function (t) {
          var e = '',
            r = '',
            n = 'center',
            i = 'center',
            o = 'calc(var(--moveable-control-padding, 20) * -1px)';
          return (
            t.indexOf('n') > -1 &&
              ((e = 'top: '.concat(o, ';')), (i = 'bottom')),
            t.indexOf('s') > -1 && ((e = 'top: 0px;'), (i = 'top')),
            t.indexOf('w') > -1 &&
              ((r = 'left: '.concat(o, ';')), (n = 'right')),
            t.indexOf('e') > -1 && ((r = 'left: 0px;'), (n = 'left')),
            '.around-control[data-direction*="'
              .concat(t, '"] {\n        ')
              .concat(r)
              .concat(e, '\n        transform-origin: ')
              .concat(n, ' ')
              .concat(i, ';\n    }')
          );
        }).join('\n'),
        F =
          '\n{\nposition: absolute;\nwidth: 1px;\nheight: 1px;\nleft: 0;\ntop: 0;\nz-index: 3000;\n--moveable-color: #4af;\n--zoom: 1;\n--zoompx: 1px;\n--moveable-line-padding: 0;\n--moveable-control-padding: 0;\nwill-change: transform;\noutline: 1px solid transparent;\n}\n.control-box {\nz-index: 0;\n}\n.line, .control {\nposition: absolute;\nleft: 0;\ntop: 0;\nwill-change: transform;\n}\n.control {\nwidth: 14px;\nheight: 14px;\nborder-radius: 50%;\nborder: 2px solid #fff;\nbox-sizing: border-box;\nbackground: #4af;\nbackground: var(--moveable-color);\nmargin-top: -7px;\nmargin-left: -7px;\nborder: 2px solid #fff;\nz-index: 10;\n}\n.around-control {\nposition: absolute;\nwill-change: transform;\nwidth: calc(var(--moveable-control-padding, 20) * 1px);\nheight: calc(var(--moveable-control-padding, 20) * 1px);\nleft: calc(var(--moveable-control-padding, 20) * -0.5px);\ntop: calc(var(--moveable-control-padding, 20) * -0.5px);\nbox-sizing: border-box;\nbackground: transparent;\nz-index: 8;\ncursor: alias;\ntransform-origin: center center;\n}\n'
            .concat(
              I,
              '\n.padding {\nposition: absolute;\ntop: 0px;\nleft: 0px;\nwidth: 100px;\nheight: 100px;\ntransform-origin: 0 0;\n}\n.line {\nwidth: 1px;\nheight: 1px;\nbackground: #4af;\nbackground: var(--moveable-color);\ntransform-origin: 0px 50%;\n}\n.line.edge {\nz-index: 1;\nbackground: transparent;\n}\n.line.dashed {\nbox-sizing: border-box;\nbackground: transparent;\n}\n.line.dashed.horizontal {\nborder-top: 1px dashed #4af;\nborder-top-color: #4af;\nborder-top-color: var(--moveable-color);\n}\n.line.dashed.vertical {\nborder-left: 1px dashed #4af;\nborder-left-color: #4af;\nborder-left-color: var(--moveable-color);\n}\n.line.vertical {\ntransform: translateX(-50%);\n}\n.line.horizontal {\ntransform: translateY(-50%);\n}\n.line.vertical.bold {\nwidth: 2px;\n}\n.line.horizontal.bold {\nheight: 2px;\n}\n\n.control.origin {\nborder-color: #f55;\nbackground: #fff;\nwidth: 12px;\nheight: 12px;\nmargin-top: -6px;\nmargin-left: -6px;\npointer-events: none;\n}\n'
            )
            .concat(
              [0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165]
                .map(function (t) {
                  var e, r, n;
                  return '\n.direction[data-rotation="'
                    .concat(t, '"], :global .view-control-rotation')
                    .concat(t, ' {\n')
                    .concat(
                      ((e =
                        'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="'
                          .concat(32, 'px" height="')
                          .concat(
                            32,
                            'px" viewBox="0 0 32 32" ><path d="M 16,5 L 12,10 L 14.5,10 L 14.5,22 L 12,22 L 16,27 L 20,22 L 17.5,22 L 17.5,10 L 20, 10 L 16,5 Z" stroke-linejoin="round" stroke-width="1.2" fill="black" stroke="white" style="transform:rotate('
                          )
                          .concat(
                            t,
                            'deg);transform-origin: 16px 16px"></path></svg>'
                          )),
                      (n = 'ns-resize'),
                      135 == (r = (45 * Math.round(t / 45)) % 180)
                        ? (n = 'nwse-resize')
                        : 45 === r
                          ? (n = 'nesw-resize')
                          : 90 === r && (n = 'ew-resize'),
                      'cursor:'
                        .concat(n, ";cursor: url('")
                        .concat(e, "') 16 16, ")
                        .concat(n, ';')),
                      '\n}\n'
                    );
                })
                .join('\n'),
              '\n\n.line.direction:before {\ncontent: "";\nposition: absolute;\nwidth: 100%;\nheight: calc(var(--moveable-line-padding, 0) * 1px);\nbottom: 0;\nleft: 0;\n}\n.group {\nz-index: -1;\n}\n.area {\nposition: absolute;\n}\n.area-pieces {\nposition: absolute;\ntop: 0;\nleft: 0;\ndisplay: none;\n}\n.area.avoid, .area.pass {\npointer-events: none;\n}\n.area.avoid+.area-pieces {\ndisplay: block;\n}\n.area-piece {\nposition: absolute;\n}\n\n'
            )
            .concat(
              z
                ? ':global svg *:before {\ncontent:"";\ntransform-origin: inherit;\n}'
                : '',
              '\n'
            ),
        N = [
          [0, 1, 2],
          [1, 0, 3],
          [2, 0, 3],
          [3, 1, 2],
        ],
        W = {
          n: [0, -1],
          e: [1, 0],
          s: [0, 1],
          w: [-1, 0],
          nw: [-1, -1],
          ne: [1, -1],
          sw: [-1, 1],
          se: [1, 1],
        },
        q = {
          n: [0, 1],
          e: [1, 3],
          s: [3, 2],
          w: [2, 0],
          nw: [0],
          ne: [1],
          sw: [2],
          se: [3],
        },
        H = { n: 0, s: 180, w: 270, e: 90, nw: 315, ne: 45, sw: 225, se: 135 },
        Y = [
          'isMoveableElement',
          'updateRect',
          'updateTarget',
          'destroy',
          'dragStart',
          'isInside',
          'hitTest',
          'setState',
          'getRect',
          'request',
          'isDragging',
          'getManager',
          'forceUpdate',
          'waitToChangeTarget',
          'updateSelectors',
          'getTargets',
          'stopDrag',
          'getControlBoxElement',
          'getMoveables',
          'getDragElement',
        ];
      function X(t, e, r, n, i, o) {
        void 0 === o && (o = 'draggable');
        var a,
          s,
          u =
            null !==
              (s =
                null === (a = e.gestos[o]) || void 0 === a
                  ? void 0
                  : a.move(r, t.inputEvent)) && void 0 !== s
              ? s
              : {},
          l = u.originalDatas || u.datas,
          c = l[o] || (l[o] = {});
        return S(S({}, i ? rs(e, u) : u), {
          isPinch: !!n,
          parentEvent: !0,
          datas: c,
          originalDatas: t.originalDatas,
        });
      }
      var j = (function () {
        function t(t) {
          var e;
          void 0 === t && (t = 'draggable'),
            (this.ableName = t),
            (this.prevX = 0),
            (this.prevY = 0),
            (this.startX = 0),
            (this.startY = 0),
            (this.isDrag = !1),
            (this.isFlag = !1),
            (this.datas = { draggable: {} }),
            (this.datas = (((e = {})[t] = {}), e));
        }
        return (
          (t.prototype.dragStart = function (t, e) {
            (this.isDrag = !1), (this.isFlag = !1);
            var r = e.originalDatas;
            return (
              (this.datas = r),
              r[this.ableName] || (r[this.ableName] = {}),
              S(S({}, this.move(t, e.inputEvent)), { type: 'dragstart' })
            );
          }),
          (t.prototype.drag = function (t, e) {
            return this.move([t[0] - this.prevX, t[1] - this.prevY], e);
          }),
          (t.prototype.move = function (t, e) {
            var r,
              n,
              i = !1;
            if (this.isFlag) {
              var o = this.isDrag;
              (r = this.prevX + t[0]),
                (n = this.prevY + t[1]),
                (t[0] || t[1]) && (this.isDrag = !0),
                !o && this.isDrag && (i = !0);
            } else
              (this.prevX = t[0]),
                (this.prevY = t[1]),
                (this.startX = t[0]),
                (this.startY = t[1]),
                (r = t[0]),
                (n = t[1]),
                (this.isFlag = !0);
            return (
              (this.prevX = r),
              (this.prevY = n),
              {
                type: 'drag',
                clientX: r,
                clientY: n,
                inputEvent: e,
                isFirstDrag: i,
                isDrag: this.isDrag,
                distX: r - this.startX,
                distY: n - this.startY,
                deltaX: t[0],
                deltaY: t[1],
                datas: this.datas[this.ableName],
                originalDatas: this.datas,
                parentEvent: !0,
                parentGesto: this,
              }
            );
          }),
          t
        );
      })();
      function L(t, e, r, n) {
        var i = 16 === t.length ? 4 : 3,
          o = y(eN(t, r, n, i), 4),
          a = y(o[0], 2),
          s = a[0],
          u = a[1],
          l = y(o[1], 2),
          c = l[0],
          f = l[1],
          p = y(o[2], 2),
          d = p[0],
          g = p[1],
          h = y(o[3], 2),
          v = h[0],
          m = h[1],
          b = y(eF(t, e, i), 2),
          x = b[0],
          S = b[1],
          E = Math.min(s, c, d, v),
          D = Math.min(u, f, g, m),
          C = Math.max(s, c, d, v),
          R = Math.max(u, f, g, m);
        return (
          (s = s - E || 0),
          (c = c - E || 0),
          (d = d - E || 0),
          (v = v - E || 0),
          (u = u - D || 0),
          (f = f - D || 0),
          (g = g - D || 0),
          (m = m - D || 0),
          (x = x - E || 0),
          (S = S - D || 0),
          {
            left: E,
            top: D,
            right: C,
            bottom: R,
            origin: [x, S],
            pos1: [s, u],
            pos2: [c, f],
            pos3: [d, g],
            pos4: [v, m],
            direction: rS(t[0] * t[i + 1]),
          }
        );
      }
      function V(t, e) {
        var r = e.clientX,
          n = e.clientY,
          i = e.datas,
          o = t.state,
          a = o.moveableClientRect,
          s = o.rootMatrix,
          l = o.is3d,
          c = o.pos1,
          f = a.left,
          p = a.top,
          d = y((0, u.h9)(ra(s, [r - f, n - p], l ? 4 : 3), c), 2),
          g = y(Q({ datas: i, distX: d[0], distY: d[1] }), 2);
        return [g[0], g[1]];
      }
      function U(t, e) {
        var r = e.datas,
          n = t.state,
          i = n.allMatrix,
          o = n.beforeMatrix,
          a = n.is3d,
          s = n.left,
          l = n.top,
          c = n.origin,
          f = n.offsetMatrix,
          p = n.targetMatrix,
          d = n.transformOrigin,
          g = a ? 4 : 3;
        (r.is3d = a),
          (r.matrix = i),
          (r.targetMatrix = p),
          (r.beforeMatrix = o),
          (r.offsetMatrix = f),
          (r.transformOrigin = d),
          (r.inverseMatrix = (0, u.U_)(i, g)),
          (r.inverseBeforeMatrix = (0, u.U_)(o, g)),
          (r.absoluteOrigin = (0, u.WK)((0, u.PD)([s, l], c), g)),
          (r.startDragBeforeDist = (0, u.Kf)(
            r.inverseBeforeMatrix,
            r.absoluteOrigin,
            g
          )),
          (r.startDragDist = (0, u.Kf)(r.inverseMatrix, r.absoluteOrigin, g));
      }
      function K(t, e, r) {
        var n,
          i,
          o,
          a,
          c,
          f,
          p,
          d,
          g,
          h,
          v,
          m,
          b,
          x,
          S,
          D,
          C,
          R,
          M,
          P,
          z = e.datas,
          O = e.originalDatas.beforeRenderable,
          T = z.transformIndex,
          w = O.nextTransforms,
          G = w.length,
          A = O.nextTransformAppendedIndexes,
          B = -1;
        -1 === T
          ? ('translate' === r
              ? (B = 0)
              : 'rotate' === r &&
                (B = (0, s.cx)(w, function (t) {
                  return t.match(/scale\(/g);
                })),
            -1 === B && (B = w.length),
            (z.transformIndex = B))
          : (B = (0, s.sE)(A, function (t) {
              return t.index === T && t.functionName === r;
            })
              ? T
              : T +
                A.filter(function (t) {
                  return t.index < T;
                }).length);
        var _ =
            ((n = t.state),
            (i = B),
            (a = (0, l.Qc)(w, {
              'x%': function (t) {
                return (t / 100) * n.offsetWidth;
              },
              'y%': function (t) {
                return (t / 100) * n.offsetHeight;
              },
            })),
            (c = w.slice(0, i < 0 ? void 0 : i)),
            (f = w.slice(0, i < 0 ? void 0 : i + 1)),
            (p = w[i] || ''),
            (d = i < 0 ? [] : w.slice(i)),
            (g = i < 0 ? [] : w.slice(i + 1)),
            (h = a.slice(0, i < 0 ? void 0 : i)),
            (v = a.slice(0, i < 0 ? void 0 : i + 1)),
            (m = null !== (o = a[i]) && void 0 !== o ? o : (0, l.Qc)([''])[0]),
            (b = i < 0 ? [] : a.slice(i)),
            (x = i < 0 ? [] : a.slice(i + 1)),
            (S = m ? [m] : []),
            (D = (0, l.rk)(h)),
            (C = (0, l.rk)(v)),
            (R = (0, l.rk)(b)),
            (M = (0, l.rk)(x)),
            (P = (0, u.ml)(D, R, 4)),
            {
              transforms: w,
              beforeFunctionMatrix: D,
              beforeFunctionMatrix2: C,
              targetFunctionMatrix: (0, l.rk)(S),
              afterFunctionMatrix: R,
              afterFunctionMatrix2: M,
              allFunctionMatrix: P,
              beforeFunctions: h,
              beforeFunctions2: v,
              targetFunction: S[0],
              afterFunctions: b,
              afterFunctions2: x,
              beforeFunctionTexts: c,
              beforeFunctionTexts2: f,
              targetFunctionText: p,
              afterFunctionTexts: d,
              afterFunctionTexts2: g,
            }),
          k = _.targetFunction,
          I = 'rotate' === r ? 'rotateZ' : r;
        (z.beforeFunctionTexts = _.beforeFunctionTexts),
          (z.afterFunctionTexts = _.afterFunctionTexts),
          (z.beforeTransform = _.beforeFunctionMatrix),
          (z.beforeTransform2 = _.beforeFunctionMatrix2),
          (z.targetTansform = _.targetFunctionMatrix),
          (z.afterTransform = _.afterFunctionMatrix),
          (z.afterTransform2 = _.afterFunctionMatrix2),
          (z.targetAllTransform = _.allFunctionMatrix),
          k.functionName === I
            ? (z.afterFunctionTexts.splice(0, 1), (z.isAppendTransform = !1))
            : G > B &&
              ((z.isAppendTransform = !0),
              (O.nextTransformAppendedIndexes = E(
                E([], y(A), !1),
                [{ functionName: r, index: B, isAppend: !0 }],
                !1
              )));
      }
      function J(t, e, r) {
        return ''
          .concat(t.beforeFunctionTexts.join(' '), ' ')
          .concat(t.isAppendTransform ? r : e, ' ')
          .concat(t.afterFunctionTexts.join(' '));
      }
      function Z(t, e, r) {
        var n = t.beforeTransform,
          i = t.afterTransform,
          o = t.beforeTransform2,
          a = t.afterTransform2,
          s = t.targetAllTransform,
          l = r ? (0, u.ml)(s, e, 4) : (0, u.ml)(e, s, 4),
          c = (0, u.ml)((0, u.U_)(r ? o : n, 4), l, 4);
        return (0, u.ml)(c, (0, u.U_)(r ? a : i, 4), 4);
      }
      function $(t) {
        var e = t.datas,
          r = t.distX,
          n = t.distY,
          i = e.inverseBeforeMatrix,
          o = e.is3d,
          a = e.startDragBeforeDist,
          s = e.absoluteOrigin;
        return (0, u.h9)((0, u.Kf)(i, (0, u.PD)(s, [r, n]), o ? 4 : 3), a);
      }
      function Q(t, e) {
        var r = t.datas,
          n = t.distX,
          i = t.distY,
          o = r.inverseBeforeMatrix,
          a = r.inverseMatrix,
          s = r.is3d,
          l = r.startDragBeforeDist,
          c = r.startDragDist,
          f = r.absoluteOrigin;
        return (0, u.h9)(
          (0, u.Kf)(e ? o : a, (0, u.PD)(f, [n, i]), s ? 4 : 3),
          e ? l : c
        );
      }
      function tt(t) {
        var e = [];
        return (
          t[1] >= 0 && (t[0] >= 0 && e.push(3), t[0] <= 0 && e.push(2)),
          t[1] <= 0 && (t[0] >= 0 && e.push(1), t[0] <= 0 && e.push(0)),
          e
        );
      }
      function te(t, e) {
        var r = (e[0] + 1) / 2,
          n = (e[1] + 1) / 2,
          i = [
            (0, s.AK)(t[0][0], t[1][0], r, 1 - r),
            (0, s.AK)(t[0][1], t[1][1], r, 1 - r),
          ],
          o = [
            (0, s.AK)(t[2][0], t[3][0], r, 1 - r),
            (0, s.AK)(t[2][1], t[3][1], r, 1 - r),
          ];
        return [
          (0, s.AK)(i[0], o[0], n, 1 - n),
          (0, s.AK)(i[1], o[1], n, 1 - n),
        ];
      }
      function tr(t, e, r, n) {
        return (0, u.ml)(t, eT(e, n, r), n);
      }
      function tn(t, e) {
        var r = ts(e);
        return {
          setTransform: function (n, i) {
            void 0 === i && (i = -1),
              (r.startTransforms = (0, s.kJ)(n) ? n : (0, s.WE)(n)),
              to(t, e, i);
          },
          setTransformIndex: function (r) {
            to(t, e, r);
          },
        };
      }
      function ti(t, e, r) {
        var n = ts(e).startTransforms;
        to(
          t,
          e,
          (0, s.cx)(n, function (t) {
            return 0 === t.indexOf(''.concat(r, '('));
          })
        );
      }
      function to(t, e, r) {
        var n = ts(e),
          i = e.datas;
        if (((i.transformIndex = r), -1 !== r)) {
          var o = n.startTransforms[r];
          if (o) {
            var a = t.state,
              s = (0, l.Qc)([o], {
                'x%': function (t) {
                  return (t / 100) * a.offsetWidth;
                },
                'y%': function (t) {
                  return (t / 100) * a.offsetHeight;
                },
              });
            i.startValue = s[0].functionValue;
          }
        }
      }
      function ta(t, e) {
        ts(t).nextTransforms = (0, s.WE)(e);
      }
      function ts(t) {
        return t.originalDatas.beforeRenderable;
      }
      function tu(t) {
        return t.originalDatas.beforeRenderable.nextTransforms;
      }
      function tl(t) {
        return (tu(t) || []).join(' ');
      }
      function tc(t) {
        return ts(t).nextStyle;
      }
      function tf(t, e, r, n, i) {
        ta(i, e);
        var o = et.drag(t, X(i, t.state, r, n, !1)),
          a = o ? o.transform : e;
        return S(S({ transform: e, drag: o }, e4({ transform: a }, i)), {
          afterTransform: a,
        });
      }
      function tp(t, e, r, n, i, o) {
        var a, c, f, p, d;
        return (
          void 0 ===
            (a = (function (t, e, r, n) {
              var i,
                o = t.transformOrigin,
                a = t.offsetMatrix,
                c = t.is3d ? 4 : 3;
              if ((0, s.HD)(r)) {
                var f = e.beforeTransform,
                  p = e.afterTransform;
                i = n
                  ? (0, u.mA)((0, l.Y6)(r), 4, c)
                  : (0, u.mA)(
                      (0, u.ml)((0, u.ml)(f, (0, l.Y6)([r]), 4), p, 4),
                      4,
                      c
                    );
              } else i = r;
              return tr(a, i, o, c);
            })(t.state, i, e, o)) && (a = t.state.allMatrix),
          (f = (c = t.state).width),
          (p = c.height),
          (d = c.is3d),
          eF(
            a,
            [(f / 2) * (1 + r[0]) + n[0], (p / 2) * (1 + r[1]) + n[1]],
            d ? 4 : 3
          )
        );
      }
      function td(t, e, r, n, i, o, a) {
        var s = tp(t, e, r, i, o, a),
          l = t.state,
          c = l.left,
          f = l.top,
          p = t.props.groupable,
          d = (0, u.h9)(n, s);
        return (0, u.h9)(d, [p ? c : 0, p ? f : 0]);
      }
      function tg(t, e, r) {
        for (
          var n,
            i,
            o,
            a = t,
            c = [],
            f = (0, s.mB)(t) || (0, s.zi)(t),
            p = (!r && t === e) || t === f,
            d = p,
            g = !1,
            h = 3,
            v = !1,
            m = eA(e, e, !0).offsetParent,
            b = 1;
          a && !d;

        ) {
          d = p;
          var x = tx(a),
            S = x('position'),
            E = eG(a),
            D = 'fixed' === S,
            C = (function (t) {
              var e = t('scale'),
                r = t('rotate'),
                n = t('translate'),
                i = [];
              return (
                n &&
                  '0px' !== n &&
                  'none' !== n &&
                  i.push('translate('.concat(n.split(/\s+/).join(','), ')')),
                r &&
                  '1' !== r &&
                  'none' !== r &&
                  i.push('rotate('.concat(r, ')')),
                e &&
                  '1' !== e &&
                  'none' !== e &&
                  i.push('scale('.concat(e.split(/\s+/).join(','), ')')),
                i
              );
            })(x),
            R = (0, u.YX)(
              E && 'none' !== E
                ? (0, s.Kn)(E)
                  ? E
                  : (0, l.Y6)(E)
                : [1, 0, 0, 1, 0, 0]
            ),
            M = void 0,
            O = !1,
            T = !1,
            w = 0,
            G = 0,
            k = 0,
            I = 0,
            F = { hasTransform: !1, fixedContainer: null };
          D &&
            ((v = !0),
            (m = (F = (function (t) {
              for (var e = t.parentElement, r = !1, n = (0, s.zi)(t); e; ) {
                var i = rt(e).transform;
                if (i && 'none' !== i) {
                  r = !0;
                  break;
                }
                if (e === n) break;
                e = e.parentElement;
              }
              return { fixedContainer: e || n, hasTransform: r };
            })(a)).fixedContainer));
          var N = R.length;
          !g &&
            (16 === N || C.length) &&
            ((g = !0), (h = 4), e_(c), o && (o = (0, u.mA)(o, 3, 4))),
            g && 9 === N && (R = (0, u.mA)(R, 3, 4));
          var W = (function (t, e) {
              var r,
                n,
                i,
                o = t.tagName.toLowerCase(),
                a = t.offsetLeft,
                u = t.offsetTop,
                l = tx(t),
                c = (0, s.o8)(a),
                f = !c;
              return (
                f || 'svg' === o
                  ? (i = (n = ew(l('transformOrigin')).map(function (t) {
                      return parseFloat(t);
                    })).slice())
                  : ((i = (n = z
                      ? ew(rt(t, ':before').transformOrigin).map(
                          function (e, r) {
                            var n,
                              i = (0, s.jL)(e),
                              o = i.value,
                              a = i.unit;
                            return (
                              o *
                              ((n = 0 === r),
                              '%' === a
                                ? eI(t.ownerSVGElement)[
                                    n ? 'width' : 'height'
                                  ] / 100
                                : 1)
                            );
                          }
                        )
                      : ew(l('transformOrigin')).map(function (t) {
                          return parseFloat(t);
                        })).slice()),
                    (f = !0),
                    (a = (r = y(
                      (function (t, e, r) {
                        if (
                          !t.getBBox ||
                          (!r && 'g' === t.tagName.toLowerCase())
                        )
                          return [0, 0, 0, 0];
                        var n = 'fill-box' === tx(t)('transform-box'),
                          i = t.getBBox(),
                          o = eI(t.ownerSVGElement),
                          a = i.x - o.x,
                          s = i.y - o.y,
                          u = n ? e[0] : e[0] - a,
                          l = n ? e[1] : e[1] - s;
                        return [a, s, u, l];
                      })(t, n, t === e && 'g' === e.tagName.toLowerCase()),
                      4
                    ))[0]),
                    (u = r[1]),
                    (n[0] = r[2]),
                    (n[1] = r[3])),
                {
                  tagName: o,
                  isSVG: c,
                  hasOffset: f,
                  offset: [a || 0, u || 0],
                  origin: n,
                  targetOrigin: i,
                }
              );
            })(a, t),
            q = W.tagName,
            H = W.hasOffset,
            Y = W.isSVG,
            X = W.origin,
            j = W.targetOrigin,
            L = y(W.offset, 2),
            V = L[0],
            U = L[1];
          'svg' === q &&
            o &&
            (c.push({
              type: 'target',
              target: a,
              matrix: (function (t, e) {
                var r,
                  n = eI(t),
                  i = n.width,
                  o = n.height,
                  a = n.clientWidth,
                  s = n.clientHeight,
                  l = a / i,
                  c = s / o,
                  f = t.preserveAspectRatio.baseVal,
                  p = f.align,
                  d = f.meetOrSlice,
                  g = [0, 0],
                  h = [l, c],
                  v = [0, 0];
                if (1 !== p) {
                  var m = (p - 2) % 3,
                    b = Math.floor((p - 2) / 3);
                  (g[0] = (i * m) / 2), (g[1] = (o * b) / 2);
                  var x = 2 === d ? Math.max(c, l) : Math.min(l, c);
                  (h[0] = x),
                    (h[1] = x),
                    (v[0] = ((a - i) / 2) * m),
                    (v[1] = ((s - o) / 2) * b);
                }
                var S = (0, u.Wi)(h, e);
                return (
                  (r = y(v, 2)),
                  (S[e * (e - 1)] = r[0]),
                  (S[e * (e - 1) + 1] = r[1]),
                  eT(S, e, g)
                );
              })(a, h),
            }),
            c.push({ type: 'offset', target: a, matrix: (0, u.Te)(h) }));
          var K = parseFloat(x('zoom')) || 1;
          if (D) (M = F.fixedContainer), (O = !0);
          else {
            var J = eA(a, e, !1, !0, x),
              Z = J.offsetZoom;
            if (
              ((M = J.offsetParent),
              (O = J.isEnd),
              (T = J.isStatic),
              (b *= Z),
              (J.isCustomElement || 1 !== Z) && T)
            )
              (V -= M.offsetLeft), (U -= M.offsetTop);
            else if ((B || A) && J.parentSlotElement) {
              for (
                var $ = M, Q = 0, tt = 0;
                $ &&
                (function (t) {
                  if (t && t.getRootNode) {
                    var e = t.getRootNode();
                    if (11 === e.nodeType) return e;
                  }
                })($);

              )
                (Q += $.offsetLeft), (tt += $.offsetTop), ($ = $.offsetParent);
              (V -= Q), (U -= tt);
            }
          }
          if (
            (P &&
              !_ &&
              H &&
              !Y &&
              T &&
              ('relative' === S || 'static' === S) &&
              ((V -= M.offsetLeft), (U -= M.offsetTop), (p = p || O)),
            D)
          )
            H && F.hasTransform && ((k = M.clientLeft), (I = M.clientTop));
          else if (
            (H && m !== M && ((w = M.clientLeft), (G = M.clientTop)),
            H && M === f)
          ) {
            var te = eB(a, !1);
            (V += te[0]), (U += te[1]);
          }
          if (
            (c.push({ type: 'target', target: a, matrix: eT(R, h, X) }),
            C.length &&
              (c.push({ type: 'offset', target: a, matrix: (0, u.Te)(h) }),
              c.push({
                type: 'target',
                target: a,
                matrix: eT((0, l.Y6)(C), h, X),
              })),
            H)
          ) {
            var tr = a === t,
              tn = tr ? 0 : a.scrollLeft,
              ti = tr ? 0 : a.scrollTop;
            c.push({
              type: 'offset',
              target: a,
              matrix: (0, u.Jm)([V - tn + w - k, U - ti + G - I], h),
            });
          } else c.push({ type: 'offset', target: a, origin: X });
          if (
            (1 !== K &&
              c.push({
                type: 'zoom',
                target: a,
                matrix: eT((0, u.Wi)([K, K], h), h, [0, 0]),
              }),
            o || (o = R),
            n || (n = X),
            i || (i = j),
            d || D)
          )
            break;
          (a = M), (p = O), (r && a !== f) || (d = p);
        }
        return (
          o || (o = (0, u.Te)(h)),
          n || (n = [0, 0]),
          i || (i = [0, 0]),
          {
            zoom: b,
            offsetContainer: m,
            matrixes: c,
            targetMatrix: o,
            transformOrigin: n,
            targetOrigin: i,
            is3d: g,
            hasFixed: v,
          }
        );
      }
      var th = null,
        tv = null,
        tm = null;
      function tb(t) {
        t
          ? (window.Map && ((th = new Map()), (tv = new Map())), (tm = []))
          : ((th = null), (tm = null), (tv = null));
      }
      function tx(t) {
        var e = null == th ? void 0 : th.get(t);
        if (!e) {
          var r = (0, s.Jj)(t).getComputedStyle(t);
          if (!th)
            return function (t) {
              return r[t];
            };
          (e = { style: r, cached: {} }), th.set(t, e);
        }
        var n = e.cached,
          i = e.style;
        return function (t) {
          return t in n || (n[t] = i[t]), n[t];
        };
      }
      function tS(t, e, r) {
        var n = r.originalDatas;
        n.groupable = n.groupable || {};
        var i = n.groupable;
        i.childDatas = i.childDatas || [];
        var o = i.childDatas;
        return t.moveables.map(function (t, n) {
          return (
            (o[n] = o[n] || {}),
            (o[n][e] = o[n][e] || {}),
            S(S({}, r), {
              isRequestChild: !0,
              datas: o[n][e],
              originalDatas: o[n],
            })
          );
        });
      }
      function ty(t, e, r, n, i, o, a) {
        var s = !!r.match(/Start$/g),
          u = !!r.match(/End$/g),
          l = i.isPinch,
          c = i.datas,
          f = tS(t, e.name, i),
          p = t.moveables,
          d = f.map(function (t, i) {
            var f = p[i],
              d = f.state,
              g = d.gestos,
              h = t;
            if (s) h = new j(a).dragStart(n, t);
            else {
              if ((g[a] || (g[a] = c.childGestos[i]), !g[a])) return;
              h = X(t, d, n, l, o, a);
            }
            var v = e[r](f, S(S({}, h), { parentFlag: !0 }));
            return u && (g[a] = null), v;
          });
        return (
          s &&
            (c.childGestos = p.map(function (t) {
              return t.state.gestos[a];
            })),
          d
        );
      }
      function tE(t, e, r, n, i, o) {
        void 0 === i &&
          (i = function (t, e) {
            return e;
          });
        var a = !!r.match(/End$/g),
          s = tS(t, e.name, n),
          u = t.moveables;
        return s.map(function (t, n) {
          var s = u[n],
            l = t;
          l = i(s, t);
          var c = e[r](s, S(S({}, l), { parentFlag: !0 }));
          return c && o && o(s, t, c, n), a && (s.state.gestos = {}), c;
        });
      }
      function tD(t, e, r, n) {
        var i = r.fixedDirection,
          o = r.fixedPosition,
          a = te(n.datas.startPositions || e1(e.state), i),
          s = y(
            (0, u.Kf)(
              (0, u.sQ)((-t.rotation / 180) * Math.PI, 3),
              [a[0] - o[0], a[1] - o[1], 1],
              3
            ),
            2
          ),
          l = s[0],
          c = s[1];
        return (n.datas.originalX = l), (n.datas.originalY = c), n;
      }
      function tC(t, e, r, n) {
        var i = t.getState(),
          o = i.renderPoses,
          a = i.rotation,
          u = i.direction,
          l = ej(t.props, e).zoom,
          c = ey((a / Math.PI) * 180),
          f = {},
          p = t.renderState;
        p.renderDirectionMap || (p.renderDirectionMap = {});
        var d = p.renderDirectionMap;
        r.forEach(function (t) {
          f[t.dir] = !0;
        });
        var g = rS(u);
        return r.map(function (t) {
          var r = t.data,
            i = t.classNames,
            u = t.dir,
            p = q[u];
          if (!p || !f[u]) return null;
          d[u] = !0;
          var h = ((0, s.P2)(c, 15) + g * H[u] + 720) % 180,
            v = {};
          return (
            (0, s.RR)(r).forEach(function (t) {
              v['data-'.concat(t)] = r[t];
            }),
            n.createElement(
              'div',
              S(
                {
                  className: ez.apply(
                    void 0,
                    E(['control', 'direction', u, e], y(i), !1)
                  ),
                  'data-rotation': h,
                  'data-direction': u,
                },
                v,
                {
                  key: 'direction-'.concat(u),
                  style: eX.apply(
                    void 0,
                    E(
                      [a, l],
                      y(
                        p.map(function (t) {
                          return o[t];
                        })
                      ),
                      !1
                    )
                  ),
                }
              )
            )
          );
        });
      }
      function tR(t, e, r, n) {
        var i = ej(t.props, r),
          o = i.renderDirections,
          a = void 0 === o ? e : o,
          s = i.displayAroundControls;
        if (!a) return [];
        var u = !0 === a ? R : a;
        return E(
          E([], y(s ? tO(t, n, r, u) : []), !1),
          y(
            tC(
              t,
              r,
              u.map(function (t) {
                return { data: {}, classNames: [], dir: t };
              }),
              n
            )
          ),
          !1
        );
      }
      function tM(t, e, r, n, i, o) {
        for (var a = [], u = 6; u < arguments.length; u++)
          a[u - 6] = arguments[u];
        var l = (0, s.jv)(r, n),
          c = e ? (0, s.P2)((l / Math.PI) * 180, 15) % 180 : -1;
        return t.createElement('div', {
          key: 'line-'.concat(o),
          className: ez.apply(
            void 0,
            E(['line', 'direction', e ? 'edge' : '', e], y(a), !1)
          ),
          'data-rotation': c,
          'data-line-key': o,
          'data-direction': e,
          style: eY(r, n, i, l),
        });
      }
      function tP(t, e, r, n, i) {
        return (!0 === r ? C : r)
          .map(function (r, o) {
            var a = y(q[r], 2),
              s = a[0],
              u = a[1];
            if (null != u)
              return tM(t, r, n[s], n[u], i, ''.concat(e, 'Edge').concat(o), e);
          })
          .filter(Boolean);
      }
      function tz(t) {
        return function (e, r) {
          var n = ej(e.props, t).edge;
          return n && (!0 === n || n.length)
            ? E(
                E(
                  [],
                  y(tP(r, t, n, e.getState().renderPoses, e.props.zoom)),
                  !1
                ),
                y(tR(e, ['nw', 'ne', 'sw', 'se'], t, r)),
                !1
              )
            : tR(e, R, t, r);
        };
      }
      function tO(t, e, r, n) {
        var i = t.renderState;
        i.renderDirectionMap || (i.renderDirectionMap = {});
        var o = t.getState(),
          a = o.renderPoses,
          u = o.rotation,
          l = o.direction,
          c = i.renderDirectionMap,
          f = t.props.zoom,
          p = rS(l),
          d = (u / Math.PI) * 180;
        return (n || (0, s.RR)(c)).map(function (t) {
          var n = q[t];
          if (!n) return null;
          var i = ((0, s.P2)(d, 15) + p * H[t] + 720) % 180,
            o = ['around-control'];
          return (
            r && o.push('direction', r),
            e.createElement('div', {
              className: ez.apply(void 0, E([], y(o), !1)),
              'data-rotation': i,
              'data-direction': t,
              key: 'direction-around-'.concat(t),
              style: eX.apply(
                void 0,
                E(
                  [u, f],
                  y(
                    n.map(function (t) {
                      return a[t];
                    })
                  ),
                  !1
                )
              ),
            })
          );
        });
      }
      function tT(t, e, r) {
        var n = t || {},
          i = n.position,
          o = n.left,
          a = n.top,
          s = n.right,
          u = n.bottom,
          l = {
            position: void 0 === i ? 'client' : i,
            left: void 0 === o ? -1 / 0 : o,
            top: void 0 === a ? -1 / 0 : a,
            right: void 0 === s ? 1 / 0 : s,
            bottom: void 0 === u ? 1 / 0 : u,
          };
        return { vertical: tG(l, e, !0), horizontal: tG(l, r, !1) };
      }
      function tw(t, e) {
        var r = t.state,
          n = r.containerClientRect,
          i = n.clientHeight,
          o = n.clientWidth,
          a = n.clientLeft,
          s = n.clientTop,
          u = r.snapOffset,
          l = u.left,
          c = u.top,
          f = u.right,
          p = u.bottom,
          d = e || t.props.bounds || {},
          g = 'css' === (d.position || 'client'),
          h = d.left,
          v = d.top,
          m = d.right,
          b = void 0 === m ? (g ? -1 / 0 : 1 / 0) : m,
          x = d.bottom,
          S = void 0 === x ? (g ? -1 / 0 : 1 / 0) : x;
        return (
          g && ((b = o + f - l - b), (S = i + p - c - S)),
          {
            left: (void 0 === h ? -1 / 0 : h) + l - a,
            right: b + l - a,
            top: (void 0 === v ? -1 / 0 : v) + c - s,
            bottom: S + c - s,
          }
        );
      }
      function tG(t, e, r) {
        var n = t[r ? 'left' : 'top'],
          i = t[r ? 'right' : 'bottom'],
          o = Math.min.apply(Math, E([], y(e), !1)),
          a = Math.max.apply(Math, E([], y(e), !1)),
          s = [];
        return (
          n + 1 > o &&
            s.push({ direction: 'start', isBound: !0, offset: o - n, pos: n }),
          i - 1 < a &&
            s.push({ direction: 'end', isBound: !0, offset: a - i, pos: i }),
          s.length || s.push({ isBound: !1, offset: 0, pos: 0 }),
          s.sort(function (t, e) {
            return ry(e.offset) - ry(t.offset);
          })
        );
      }
      function tA(t, e, r) {
        return (
          r
            ? t.map(function (t) {
                return (0, u.U1)(t, r);
              })
            : t
        ).some(function (t) {
          return (
            (t[0] < e.left && ry(t[0] - e.left) > 0.1) ||
            (t[0] > e.right && ry(t[0] - e.right) > 0.1) ||
            (t[1] < e.top && ry(t[1] - e.top) > 0.1) ||
            (t[1] > e.bottom && ry(t[1] - e.bottom) > 0.1)
          );
        });
      }
      var tB = ['left', 'right', 'center'],
        t_ = ['top', 'bottom', 'middle'],
        tk = {
          left: 'start',
          right: 'end',
          center: 'center',
          top: 'start',
          bottom: 'end',
          middle: 'center',
        },
        tI = { start: 'left', end: 'right', center: 'center' },
        tF = { start: 'top', end: 'bottom', center: 'middle' };
      function tN() {
        return { left: !1, top: !1, right: !1, bottom: !1 };
      }
      function tW(t, e) {
        var r = t.props,
          n = r.snappable,
          i = r.bounds,
          o = r.innerBounds,
          a = r.verticalGuidelines,
          s = r.horizontalGuidelines,
          u = r.snapGridWidth,
          l = r.snapGridHeight,
          c = t.state,
          f = c.guidelines,
          p = c.enableSnap;
        return (
          !(!n || !p || (e && !0 !== n && 0 > n.indexOf(e))) &&
          (!!u ||
            !!l ||
            !!i ||
            !!o ||
            (!!f && !!f.length) ||
            (!!a && !!a.length) ||
            (!!s && !!s.length))
        );
      }
      function tq(t) {
        return !1 === t
          ? {}
          : !0 !== t && t
            ? t
            : { left: !0, right: !0, top: !0, bottom: !0 };
      }
      function tH(t, e) {
        var r = (function (t, e) {
            var r = tq(t),
              n = {};
            for (var i in r) i in e && r[i] && (n[i] = e[i]);
            return n;
          })(t, e),
          n = t_.filter(function (t) {
            return t in r;
          }),
          i = tB.filter(function (t) {
            return t in r;
          });
        return {
          horizontalNames: n,
          verticalNames: i,
          horizontal: n.map(function (t) {
            return r[t];
          }),
          vertical: i.map(function (t) {
            return r[t];
          }),
        };
      }
      function tY(t, e, r, n, i, o) {
        void 0 === n && (n = []), void 0 === i && (i = []);
        var a = (function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          for (var r = t.length - 1, n = 0; n < r; ++n) {
            var i = t[n];
            if (!(0, s.o8)(i)) return i;
          }
          return t[r];
        })(o, t.props.snapThreshold, 5);
        return tX(t.state.guidelines, e, r, n, i, a);
      }
      function tX(t, e, r, n, i, o) {
        return {
          vertical: tU(t, 'vertical', e, o, n),
          horizontal: tU(t, 'horizontal', r, o, i),
        };
      }
      function tj(t) {
        var e = '';
        return (
          -1 === t || 'top' === t || 'left' === t
            ? (e = 'start')
            : 0 === t || 'center' === t || 'middle' === t
              ? (e = 'center')
              : (1 === t || 'right' === t || 'bottom' === t) && (e = 'end'),
          e
        );
      }
      function tL(t, e, r) {
        var n = tH(t.props.snapDirections, e),
          i = tY(
            t,
            n.vertical,
            n.horizontal,
            n.verticalNames.map(function (t) {
              return tj(t);
            }),
            n.horizontalNames.map(function (t) {
              return tj(t);
            }),
            r
          ),
          o = tj(n.horizontalNames[i.horizontal.index]),
          a = tj(n.verticalNames[i.vertical.index]);
        return {
          vertical: S(S({}, i.vertical), { direction: a }),
          horizontal: S(S({}, i.horizontal), { direction: o }),
        };
      }
      function tV(t) {
        var e = t.isSnap;
        if (!e)
          return { isSnap: !1, offset: 0, dist: -1, pos: 0, guideline: null };
        var r = t.posInfos[0],
          n = r.guidelineInfos[0],
          i = n.offset,
          o = n.dist,
          a = n.guideline;
        return { isSnap: e, offset: i, dist: o, pos: r.pos, guideline: a };
      }
      function tU(t, e, r, n, i) {
        if ((void 0 === i && (i = []), !t || !t.length))
          return { isSnap: !1, index: -1, direction: '', posInfos: [] };
        var o,
          a,
          s = 'vertical' === e ? 0 : 1,
          u = r
            .map(function (r, o) {
              var a = i[o] || '',
                u = t
                  .map(function (t) {
                    var e = r - t.pos[s];
                    return {
                      offset: e,
                      dist: ry(e),
                      guideline: t,
                      direction: a,
                    };
                  })
                  .filter(function (t) {
                    var r = t.guideline,
                      i = t.dist;
                    return r.type === e && !(i > n);
                  })
                  .sort(function (t, e) {
                    return t.dist - e.dist;
                  });
              return { pos: r, index: o, guidelineInfos: u, direction: a };
            })
            .filter(function (t) {
              return t.guidelineInfos.length > 0;
            })
            .sort(function (t, e) {
              return t.guidelineInfos[0].dist - e.guidelineInfos[0].dist;
            }),
          l = u.length > 0;
        return {
          isSnap: l,
          index: l ? u[0].index : -1,
          direction:
            null !==
              (a =
                null === (o = u[0]) || void 0 === o ? void 0 : o.direction) &&
            void 0 !== a
              ? a
              : '',
          posInfos: u,
        };
      }
      function tK(t, e) {
        var r = ry(t.offset),
          n = ry(e.offset);
        if (t.isBound && e.isBound) return n - r;
        if (t.isBound) return -1;
        if (e.isBound) return 1;
        if (t.isSnap && e.isSnap) return n - r;
        if (t.isSnap) return -1;
        if (e.isSnap) return 1;
        if (r < 1e-7) return 1;
        else if (n < 1e-7) return -1;
        return r - n;
      }
      function tJ(t, e) {
        return t.slice().sort(function (t, r) {
          var n = t.sign[e],
            i = r.sign[e],
            o = t.offset[e],
            a = r.offset[e];
          return n
            ? i
              ? tK(
                  { isBound: t.isBound, isSnap: t.isSnap, offset: o },
                  { isBound: r.isBound, isSnap: r.isSnap, offset: a }
                )
              : -1
            : 1;
        })[0];
      }
      function tZ(t, e) {
        var r = (0, s.Y8)([e[0][0], e[1][0]]),
          n = (0, s.Y8)([e[0][1], e[1][1]]);
        return { vertical: r <= t[0], horizontal: n <= t[1] };
      }
      function t$(t, e) {
        var r,
          n,
          i = y(e, 2),
          o = i[0],
          a = i[1],
          s = a[0] - o[0],
          u = a[1] - o[1];
        return (
          1e-7 > ry(s) && (s = 0),
          1e-7 > ry(u) && (u = 0),
          s
            ? ((r = u ? (u / s) * (t[0] - o[0]) + o[1] : o[1]), (n = t[1]))
            : ((r = o[0]), (n = t[0])),
          r - n
        );
      }
      function tQ(t, e, r, n) {
        return (
          void 0 === n && (n = 1e-7),
          t.every(function (t) {
            var i = t$(t, e);
            return i <= 0 === r || ry(i) <= n;
          })
        );
      }
      function t0(t, e, r, n, i) {
        return (void 0 === i && (i = 0),
        (n && e - i <= t) || (!n && t <= r + i))
          ? { isBound: !0, offset: n ? e - t : r - t }
          : { isBound: !1, offset: 0 };
      }
      function t1(t, e, r, n, i, o) {
        var a = y(e, 2),
          s = a[0],
          u = a[1],
          l = t[0],
          c = r[0],
          f = r[1],
          p = rc(f[1] - c[1]),
          d = rc(f[0] - c[0]),
          g = -s / u;
        if (d) {
          if (!p) {
            if (o && !u);
            else {
              if (s) return t0((c[1] - l[1]) / g + l[0], c[0], f[0], n, i);
              var h = c[1] - l[1],
                v = ry(h) <= (i || 0);
              return { isBound: v, offset: v ? h : 0 };
            }
          }
        } else if (o && !s);
        else {
          if (u) return t0(g * (c[0] - l[0]) + l[1], c[1], f[1], n, i);
          var h = c[0] - l[0],
            v = ry(h) <= (i || 0);
          return { isBound: v, offset: v ? h : 0 };
        }
        return { isBound: !1, offset: 0 };
      }
      function t2(t, e, r) {
        return e.map(function (e) {
          var n = (function (t, e) {
              var r = e.line,
                n = e.centerSign,
                i = e.verticalSign,
                o = e.horizontalSign,
                a = e.lineConstants,
                s = t.props.innerBounds;
              if (!s)
                return {
                  isAllBound: !1,
                  isBound: !1,
                  isVerticalBound: !1,
                  isHorizontalBound: !1,
                  offset: [0, 0],
                };
              var u = s.left,
                l = s.top,
                c = s.width,
                f = s.height,
                p = [
                  [u, l],
                  [u, l + f],
                ],
                d = [
                  [u, l],
                  [u + c, l],
                ],
                g = [
                  [u + c, l],
                  [u + c, l + f],
                ],
                h = [
                  [u, l + f],
                  [u + c, l + f],
                ];
              if (
                tQ(
                  [
                    [u, l],
                    [u + c, l],
                    [u, l + f],
                    [u + c, l + f],
                  ],
                  r,
                  n
                )
              )
                return {
                  isAllBound: !1,
                  isBound: !1,
                  isVerticalBound: !1,
                  isHorizontalBound: !1,
                  offset: [0, 0],
                };
              var v = t1(r, a, d, i),
                m = t1(r, a, h, i),
                b = t1(r, a, p, o),
                x = t1(r, a, g, o),
                S = v.isBound && m.isBound,
                y = v.isBound || m.isBound,
                E = b.isBound && x.isBound,
                D = b.isBound || x.isBound,
                C = ro(v.offset, m.offset),
                R = ro(b.offset, x.offset),
                M = [0, 0],
                P = !1,
                z = !1;
              return (
                ry(R) < ry(C)
                  ? ((M = [C, 0]), (P = y), (z = S))
                  : ((M = [0, R]), (P = D), (z = E)),
                {
                  isAllBound: z,
                  isVerticalBound: y,
                  isHorizontalBound: D,
                  isBound: P,
                  offset: M,
                }
              );
            })(t, e),
            i = n.isBound,
            o = n.offset,
            a = n.isVerticalBound,
            s = n.isHorizontalBound,
            u = e.multiple,
            l = Q({ datas: r, distX: o[0], distY: o[1] }).map(function (t, e) {
              return t * (u[e] ? 2 / u[e] : 0);
            });
          return {
            sign: u,
            isBound: i,
            isVerticalBound: a,
            isHorizontalBound: s,
            isSnap: !1,
            offset: l,
          };
        });
      }
      function t3(t, e, r, n) {
        var i,
          o,
          a,
          u = t.state,
          l = eN(u.allMatrix, 100, 100, u.is3d ? 4 : 3),
          c = te(l, [0, 0]);
        return ((i = []),
        (o = r[0]),
        (a = r[1]),
        o && a
          ? i.push([[0, 2 * a], r, [-o, a]], [[2 * o, 0], r, [o, -a]])
          : o
            ? (i.push([
                [2 * o, 0],
                [o, 1],
                [o, -1],
              ]),
              n &&
                i.push(
                  [
                    [0, -1],
                    [o, -1],
                    [-o, -1],
                  ],
                  [
                    [0, 1],
                    [o, 1],
                    [-o, 1],
                  ]
                ))
            : a
              ? (i.push([
                  [0, 2 * a],
                  [1, a],
                  [-1, a],
                ]),
                n &&
                  i.push(
                    [
                      [-1, 0],
                      [-1, a],
                      [-1, -a],
                    ],
                    [
                      [1, 0],
                      [1, a],
                      [1, -a],
                    ]
                  ))
              : i.push(
                  [
                    [-1, 0],
                    [-1, -1],
                    [-1, 1],
                  ],
                  [
                    [1, 0],
                    [1, -1],
                    [1, 1],
                  ],
                  [
                    [0, -1],
                    [-1, -1],
                    [1, -1],
                  ],
                  [
                    [0, 1],
                    [-1, 1],
                    [1, 1],
                  ]
                ),
        i).map(function (t) {
          var r,
            n,
            i,
            o,
            a,
            u,
            f,
            p,
            d = y(t, 3),
            g = d[0],
            h = d[1],
            v = d[2],
            m = [te(l, h), te(l, v)],
            b =
              ((n = (r = y(m, 2))[0]),
              (o = (i = r[1])[0] - n[0]),
              (a = i[1] - n[1]),
              Math.abs(o) < s.Vp && (o = 0),
              Math.abs(a) < s.Vp && (a = 0),
              (u = 0),
              (f = 0),
              (p = 0),
              o
                ? a
                  ? ((f = 1), (p = (u = -a / o) * n[0] - n[1]))
                  : ((f = 1), (p = -n[1]))
                : ((u = -1), (p = n[0])),
              [u, f, p].map(function (t) {
                return (0, s.P2)(t, s.Vp);
              })),
            x = tZ(c, m),
            S = x.vertical,
            E = x.horizontal;
          return {
            multiple: g,
            centerSign: 0 >= t$(c, m),
            verticalSign: S,
            horizontalSign: E,
            lineConstants: b,
            line: [te(e, h), te(e, v)],
          };
        });
      }
      function t4(t, e, r, n) {
        var i = n
          ? t.map(function (t) {
              return (0, u.U1)(t, n);
            })
          : t;
        return [
          [i[0], i[1]],
          [i[1], i[3]],
          [i[3], i[2]],
          [i[2], i[0]],
        ].some(function (t) {
          var n = 0 >= t$(r, t);
          return !tQ(e, t, n);
        });
      }
      function t5(t, e, r, n, i) {
        var o = (function (t, e, r, n) {
          var i = e[0] - t[0],
            o = e[1] - t[1];
          if ((ry(i) < s.Vp && (i = 0), ry(o) < s.Vp && (o = 0), !i))
            return n ? [0, 0] : [0, r];
          if (!o) return n ? [r, 0] : [0, 0];
          var a = o / i,
            u = t[1] - a * t[0];
          if (!n) return [(e[1] + r - u) / a - e[0], r];
          var l = a * (e[0] + r) + u;
          return [r, l - e[1]];
        })(t, e, r, n);
        if (!o) return { isOutside: !1, offset: [0, 0] };
        var a = (0, s.zt)(t, e),
          u = (0, s.zt)(o, t),
          l = (0, s.zt)(o, e),
          c = y(Q({ datas: i, distX: o[0], distY: o[1] }), 2);
        return { offset: [c[0], c[1]], isOutside: u > a || l > a };
      }
      function t9(t, e) {
        return t.isBound ? t.offset : e.isSnap ? tV(e).offset : 0;
      }
      function t6(t, e, r, n) {
        void 0 === n && (n = r);
        var i = tT(tw(t), n.vertical, n.horizontal),
          o = i.horizontal,
          a = i.vertical,
          s = e
            ? {
                horizontal: { isSnap: !1, index: -1 },
                vertical: { isSnap: !1, index: -1 },
              }
            : tY(t, r.vertical, r.horizontal),
          u = s.horizontal,
          l = s.vertical,
          c = t9(o[0], u),
          f = t9(a[0], l),
          p = ry(c),
          d = ry(f);
        return {
          horizontal: {
            isBound: o[0].isBound,
            isSnap: u.isSnap,
            snapIndex: u.index,
            offset: c,
            dist: p,
            bounds: o,
            snap: u,
          },
          vertical: {
            isBound: a[0].isBound,
            isSnap: l.isSnap,
            snapIndex: l.index,
            offset: f,
            dist: d,
            bounds: a,
            snap: l,
          },
        };
      }
      function t8(t, e, r, n, i) {
        var o = tT(e, r, n),
          a = o.horizontal,
          s = o.vertical,
          u = tX(t, r, n, [], [], i),
          l = u.horizontal,
          c = u.vertical,
          f = t9(a[0], l),
          p = t9(s[0], c),
          d = ry(f),
          g = ry(p);
        return {
          horizontal: {
            isBound: a[0].isBound,
            isSnap: l.isSnap,
            snapIndex: l.index,
            offset: f,
            dist: d,
            bounds: a,
            snap: l,
          },
          vertical: {
            isBound: s[0].isBound,
            isSnap: c.isSnap,
            snapIndex: c.index,
            offset: p,
            dist: g,
            bounds: s,
            snap: c,
          },
        };
      }
      function t7(t, e) {
        return t.isBound ? t.offset : e.isSnap ? e.offset : 0;
      }
      var et = {
        name: 'draggable',
        props: [
          'draggable',
          'throttleDrag',
          'throttleDragRotate',
          'hideThrottleDragRotateLine',
          'startDragRotate',
          'edgeDraggable',
        ],
        events: [
          'dragStart',
          'drag',
          'dragEnd',
          'dragGroupStart',
          'dragGroup',
          'dragGroupEnd',
        ],
        requestStyle: function () {
          return ['left', 'top', 'right', 'bottom'];
        },
        requestChildStyle: function () {
          return ['left', 'top', 'right', 'bottom'];
        },
        render: function (t, e) {
          var r = t.props,
            n = r.hideThrottleDragRotateLine,
            i = r.throttleDragRotate,
            o = r.zoom,
            a = t.getState(),
            u = a.dragInfo,
            l = a.beforeOrigin;
          if (n || !i || !u) return [];
          var c = u.dist;
          if (!c[0] && !c[1]) return [];
          var f = eq(c),
            p = (0, s.jv)(c, [0, 0]);
          return [
            e.createElement('div', {
              className: ez('line', 'horizontal', 'dragline', 'dashed'),
              key: 'dragRotateGuideline',
              style: {
                width: ''.concat(f, 'px'),
                transform: 'translate('
                  .concat(l[0], 'px, ')
                  .concat(l[1], 'px) rotate(')
                  .concat(p, 'rad) scaleY(')
                  .concat(o, ')'),
              },
            }),
          ];
        },
        dragStart: function (t, e) {
          var r = e.datas,
            n = e.parentEvent,
            i = e.parentGesto,
            o = t.state,
            a = o.gestos,
            s = o.style;
          if (a.draggable) return !1;
          (a.draggable = i || t.targetGesto),
            (r.datas = {}),
            (r.left = parseFloat(s.left || '') || 0),
            (r.top = parseFloat(s.top || '') || 0),
            (r.bottom = parseFloat(s.bottom || '') || 0),
            (r.right = parseFloat(s.right || '') || 0),
            (r.startValue = [0, 0]),
            U(t, e),
            ti(t, e, 'translate'),
            (r.absolutePoses = e1(t.state)),
            (r.prevDist = [0, 0]),
            (r.prevBeforeDist = [0, 0]),
            (r.isDrag = !1),
            (r.deltaOffset = [0, 0]);
          var u = e9(
            t,
            e,
            S(
              {
                set: function (t) {
                  r.startValue = t;
                },
              },
              tn(t, e)
            )
          );
          return (
            !1 !== (n || e7(t, 'onDragStart', u))
              ? ((r.isDrag = !0),
                (t.state.dragInfo = { startRect: t.getRect(), dist: [0, 0] }))
              : ((a.draggable = null), (r.isPinch = !1)),
            !!r.isDrag && u
          );
        },
        drag: function (t, e) {
          if (e) {
            K(t, e, 'translate');
            var r,
              n,
              i,
              o,
              a,
              l,
              c = e.datas,
              f = e.parentEvent,
              p = e.parentFlag,
              d = e.isPinch,
              g = e.deltaOffset,
              h = e.useSnap,
              v = e.isRequest,
              m = e.distX,
              b = e.distY,
              x = c.isDrag,
              E = c.prevDist,
              D = c.prevBeforeDist,
              C = c.startValue;
            if (x) {
              g && ((m += g[0]), (b += g[1]));
              var R = t.props,
                M = R.parentMoveable,
                P = f ? 0 : R.throttleDrag || 0,
                z = f ? 0 : R.throttleDragRotate || 0,
                O = 0,
                T = !1,
                w = !1,
                G = !1,
                A = !1;
              if (!f && z > 0 && (m || b)) {
                var B = R.startDragRotate || 0,
                  _ =
                    (0, s.P2)(
                      B + (180 * (0, s.jv)([0, 0], [m, b])) / Math.PI,
                      z
                    ) - B,
                  k = b * Math.abs(Math.cos(((_ - 90) / 180) * Math.PI)),
                  I = eq([m * Math.abs(Math.cos((_ / 180) * Math.PI)), k]);
                (m = I * Math.cos((O = (_ * Math.PI) / 180))),
                  (b = I * Math.sin(O));
              }
              if (!d && !f && !p) {
                var F = y(
                    (function (t, e, r, n, i, o) {
                      if (!tW(t, 'draggable'))
                        return [
                          { isSnap: !1, isBound: !1, offset: 0 },
                          { isSnap: !1, isBound: !1, offset: 0 },
                        ];
                      var a,
                        l,
                        c,
                        f,
                        p,
                        d,
                        g,
                        h,
                        v,
                        m,
                        b,
                        x,
                        E,
                        D,
                        C,
                        R,
                        M,
                        P,
                        z,
                        O,
                        T = e0(o.absolutePoses, [e, r]),
                        w = eW(T),
                        G = w.left,
                        A = w.right,
                        B = w.top,
                        _ = w.bottom,
                        k = {
                          horizontal: T.map(function (t) {
                            return t[1];
                          }),
                          vertical: T.map(function (t) {
                            return t[0];
                          }),
                        },
                        I = tH(tq(t.props.snapDirections), {
                          left: G,
                          right: A,
                          top: B,
                          bottom: _,
                          center: (G + A) / 2,
                          middle: (B + _) / 2,
                        }),
                        F = t6(t, i, I, k),
                        N = F.vertical,
                        W = F.horizontal,
                        q =
                          ((E = t3(t, T, [0, 0], !1).map(function (t) {
                            return S(S({}, t), {
                              multiple: t.multiple.map(function (t) {
                                return 2 * ry(t);
                              }),
                            });
                          })),
                          (C = tJ((D = t2(t, E, o)), 0)),
                          (R = tJ(D, 1)),
                          (M = 0),
                          (P = 0),
                          (z = C.isVerticalBound || R.isVerticalBound),
                          (O = C.isHorizontalBound || R.isHorizontalBound),
                          (z || O) &&
                            ((M = (x = y(
                              ((c = (a = {
                                datas: o,
                                distX: -C.offset[0],
                                distY: -R.offset[1],
                              }).datas),
                              (f = a.distX),
                              (p = a.distY),
                              (d = c.beforeMatrix),
                              (g = c.matrix),
                              (h = c.is3d),
                              (v = c.startDragBeforeDist),
                              (m = c.startDragDist),
                              (b = c.absoluteOrigin),
                              (0, u.h9)(
                                (0, u.Kf)(
                                  l ? d : g,
                                  (0, u.PD)(l ? v : m, [f, p]),
                                  h ? 4 : 3
                                ),
                                b
                              )),
                              2
                            ))[0]),
                            (P = x[1])),
                          {
                            vertical: { isBound: z, offset: M },
                            horizontal: { isBound: O, offset: P },
                          }),
                        H = q.vertical,
                        Y = q.horizontal,
                        X = N.isSnap,
                        j = W.isSnap,
                        L = N.isBound || H.isBound,
                        V = W.isBound || Y.isBound,
                        U = y(
                          (function (t, e, r, n, i) {
                            var o = y(e, 2),
                              a = o[0],
                              l = o[1],
                              c = y(r, 2),
                              f = c[0],
                              p = c[1],
                              d = y(n, 2),
                              g = d[0],
                              h = d[1],
                              v = y(i, 2),
                              m = v[0],
                              b = v[1],
                              x = -m,
                              S = -b;
                            if (t && a && l) {
                              (x = 0), (S = 0);
                              var E = [];
                              if (
                                (f && p
                                  ? E.push([0, b], [m, 0])
                                  : f
                                    ? E.push([m, 0])
                                    : p
                                      ? E.push([0, b])
                                      : g && h
                                        ? E.push([0, b], [m, 0])
                                        : g
                                          ? E.push([m, 0])
                                          : h && E.push([0, b]),
                                E.length)
                              ) {
                                E.sort(function (t, e) {
                                  return (
                                    eq((0, u.h9)([a, l], t)) -
                                    eq((0, u.h9)([a, l], e))
                                  );
                                });
                                var D = E[0];
                                if (
                                  (D[0] && ry(a) > s.Vp
                                    ? (S =
                                        (l * ry(a + (x = -D[0]))) / ry(a) - l)
                                    : D[1] &&
                                      ry(l) > s.Vp &&
                                      (x =
                                        (a * ry(l + (S = -D[1]))) / ry(l) - a),
                                  t && p && f)
                                ) {
                                  if (ry(x) > s.Vp && ry(x) < ry(m)) {
                                    var C = ry(m) / ry(x);
                                    (x *= C), (S *= C);
                                  } else if (ry(S) > s.Vp && ry(S) < ry(b)) {
                                    var C = ry(b) / ry(S);
                                    (x *= C), (S *= C);
                                  } else (x = ro(-m, x)), (S = ro(-b, S));
                                }
                              }
                            } else (x = a || f ? -m : 0), (S = l || p ? -b : 0);
                            return [x, S];
                          })(
                            n,
                            [e, r],
                            [L, V],
                            [X, j],
                            [ro(N.offset, H.offset), ro(W.offset, Y.offset)]
                          ),
                          2
                        );
                      return [
                        { isBound: L, isSnap: X, offset: U[0] },
                        { isBound: V, isSnap: j, offset: U[1] },
                      ];
                    })(t, m, b, z, (!h && v) || g, c),
                    2
                  ),
                  N = F[0],
                  W = F[1];
                (T = N.isSnap),
                  (w = N.isBound),
                  (G = W.isSnap),
                  (A = W.isBound);
                var q = N.offset,
                  H = W.offset;
                (m += q), (b += H);
              }
              var Y = (0, u.PD)($({ datas: c, distX: m, distY: b }), C),
                X = (0, u.PD)(
                  ((o = (i = y(
                    $({
                      datas: (n = (r = { datas: c, distX: m, distY: b }).datas),
                      distX: r.distX,
                      distY: r.distY,
                    }),
                    2
                  ))[0]),
                  (a = i[1]),
                  (l = Z(n, (0, u.vc)([o, a], 4))),
                  (0, u.Kf)(l, (0, u.WK)([0, 0, 0], 4), 4)),
                  C
                );
              (0, s.Xh)(X, 1e-7),
                (0, s.Xh)(Y, 1e-7),
                z ||
                  (T ||
                    w ||
                    ((X[0] = (0, s.P2)(X[0], P)), (Y[0] = (0, s.P2)(Y[0], P))),
                  G ||
                    A ||
                    ((X[1] = (0, s.P2)(X[1], P)), (Y[1] = (0, s.P2)(Y[1], P))));
              var j = (0, u.h9)(Y, C),
                L = (0, u.h9)(X, C),
                V = (0, u.h9)(L, E),
                U = (0, u.h9)(j, D);
              (c.prevDist = L),
                (c.prevBeforeDist = j),
                (c.passDelta = V),
                (c.passDist = L);
              var Q = c.left + j[0],
                tt = c.top + j[1],
                te = c.right - j[0],
                tr = c.bottom - j[1],
                tn = J(
                  c,
                  'translate('.concat(X[0], 'px, ').concat(X[1], 'px)'),
                  'translate('.concat(L[0], 'px, ').concat(L[1], 'px)')
                );
              if (
                (ta(e, tn),
                (t.state.dragInfo.dist = f ? [0, 0] : L),
                !(
                  !f &&
                  !M &&
                  V.every(function (t) {
                    return !t;
                  }) &&
                  U.some(function (t) {
                    return !t;
                  })
                ))
              ) {
                var ti = t.state,
                  to = ti.width,
                  ts = ti.height,
                  tu = e9(
                    t,
                    e,
                    S(
                      {
                        transform: tn,
                        dist: L,
                        delta: V,
                        translate: X,
                        beforeDist: j,
                        beforeDelta: U,
                        beforeTranslate: Y,
                        left: Q,
                        top: tt,
                        right: te,
                        bottom: tr,
                        width: to,
                        height: ts,
                        isPinch: d,
                      },
                      e4({ transform: tn }, e)
                    )
                  );
                return f || e7(t, 'onDrag', tu), tu;
              }
            }
          }
        },
        dragAfter: function (t, e) {
          var r = e.datas,
            n = r.deltaOffset;
          return (
            (!!n[0] || !!n[1]) &&
            ((r.deltaOffset = [0, 0]),
            this.drag(t, S(S({}, e), { deltaOffset: n })))
          );
        },
        dragEnd: function (t, e) {
          var r = e.parentEvent,
            n = e.datas;
          if (((t.state.dragInfo = null), n.isDrag)) {
            n.isDrag = !1;
            var i = e6(t, e, {});
            return r || e7(t, 'onDragEnd', i), i;
          }
        },
        dragGroupStart: function (t, e) {
          var r = e.datas,
            n = e.clientX,
            i = e.clientY,
            o = this.dragStart(t, e);
          if (!o) return !1;
          var a = ty(
              t,
              this,
              'dragStart',
              [n || 0, i || 0],
              e,
              !1,
              'draggable'
            ),
            s = S(S({}, o), { targets: t.props.targets, events: a }),
            u = e7(t, 'onDragGroupStart', s);
          return (r.isDrag = !1 !== u), !!r.isDrag && o;
        },
        dragGroup: function (t, e) {
          if (e.datas.isDrag) {
            var r = this.drag(t, e),
              n = ty(t, this, 'drag', e.datas.passDelta, e, !1, 'draggable');
            if (r) {
              var i = S({ targets: t.props.targets, events: n }, r);
              return e7(t, 'onDragGroup', i), i;
            }
          }
        },
        dragGroupEnd: function (t, e) {
          var r = e.isDrag;
          if (e.datas.isDrag) {
            this.dragEnd(t, e);
            var n = ty(t, this, 'dragEnd', [0, 0], e, !1, 'draggable');
            return (
              e7(
                t,
                'onDragGroupEnd',
                e6(t, e, { targets: t.props.targets, events: n })
              ),
              r
            );
          }
        },
        request: function (t) {
          var e = {},
            r = t.getRect(),
            n = 0,
            i = 0,
            o = !1;
          return {
            isControl: !1,
            requestStart: function (t) {
              return { datas: e, useSnap: (o = t.useSnap) };
            },
            request: function (t) {
              return (
                'x' in t
                  ? (n = t.x - r.left)
                  : 'deltaX' in t && (n += t.deltaX),
                'y' in t ? (i = t.y - r.top) : 'deltaY' in t && (i += t.deltaY),
                { datas: e, distX: n, distY: i, useSnap: o }
              );
            },
            requestEnd: function () {
              return { datas: e, isDrag: !0, useSnap: o };
            },
          };
        },
        unset: function (t) {
          (t.state.gestos.draggable = null), (t.state.dragInfo = null);
        },
      };
      function ee(t, e) {
        return {
          fixedPosition: te(t, e),
          fixedDirection: e,
          fixedOffset: [0, 0],
        };
      }
      function er(t, e) {
        var r = t.allMatrix,
          n = t.is3d,
          i = t.width,
          o = t.height,
          a = [i ? -1 + e[0] / (i / 2) : 0, o ? -1 + e[1] / (o / 2) : 0];
        return {
          fixedPosition: eF(r, e, n ? 4 : 3),
          fixedDirection: a,
          fixedOffset: [i ? 0 : e[0], o ? 0 : e[1]],
        };
      }
      var en = rp('resizable'),
        ei = {
          name: 'resizable',
          ableGroup: 'size',
          canPinch: !0,
          props: [
            'resizable',
            'throttleResize',
            'renderDirections',
            'displayAroundControls',
            'keepRatio',
            'resizeFormat',
            'keepRatioFinally',
            'edge',
            'checkResizableError',
          ],
          events: [
            'resizeStart',
            'beforeResize',
            'resize',
            'resizeEnd',
            'resizeGroupStart',
            'beforeResizeGroup',
            'resizeGroup',
            'resizeGroupEnd',
          ],
          render: tz('resizable'),
          dragControlCondition: en,
          viewClassName: rf('resizable'),
          dragControlStart: function (t, e) {
            var r,
              n = e.inputEvent,
              i = e.isPinch,
              o = e.isGroup,
              a = e.parentDirection,
              u = e.parentGesto,
              l = e.datas,
              c = e.parentFixedDirection,
              f = e.parentEvent,
              p = e$(a, i, n, l),
              d = t.state,
              g = d.target,
              h = d.width,
              v = d.height,
              m = d.gestos;
            if (!p || !g || m.resizable) return !1;
            (m.resizable = u || t.controlGesto),
              i || U(t, e),
              (l.datas = {}),
              (l.direction = p),
              (l.startOffsetWidth = h),
              (l.startOffsetHeight = v),
              (l.prevWidth = 0),
              (l.prevHeight = 0),
              (l.minSize = [0, 0]),
              (l.startWidth = d.inlineCSSWidth || d.cssWidth),
              (l.startHeight = d.inlineCSSHeight || d.cssHeight),
              (l.maxSize = [1 / 0, 1 / 0]),
              o ||
                ((l.minSize = [d.minOffsetWidth, d.minOffsetHeight]),
                (l.maxSize = [d.maxOffsetWidth, d.maxOffsetHeight]));
            var b = t.props.transformOrigin || '% %';
            function x(t) {
              l.ratio = t && isFinite(t) ? t : 0;
            }
            function S(t) {
              var e = ee(l.startPositions, t);
              (l.fixedDirection = e.fixedDirection),
                (l.fixedPosition = e.fixedPosition),
                (l.fixedOffset = e.fixedOffset);
            }
            function E(e) {
              var r = er(t.state, e);
              (l.fixedDirection = r.fixedDirection),
                (l.fixedPosition = r.fixedPosition),
                (l.fixedOffset = r.fixedOffset);
            }
            function D(t) {
              l.minSize = [
                (0, s.AA)(''.concat(t[0]), 0) || 0,
                (0, s.AA)(''.concat(t[1]), 0) || 0,
              ];
            }
            function C(t) {
              var e = [t[0] || 1 / 0, t[1] || 1 / 0];
              (!(0, s.hj)(e[0]) || isFinite(e[0])) &&
                (e[0] = (0, s.AA)(''.concat(e[0]), 0) || 1 / 0),
                (!(0, s.hj)(e[1]) || isFinite(e[1])) &&
                  (e[1] = (0, s.AA)(''.concat(e[1]), 0) || 1 / 0),
                (l.maxSize = e);
            }
            (l.transformOrigin = b && (0, s.HD)(b) ? b.split(' ') : b),
              (l.startOffsetMatrix = d.offsetMatrix),
              (l.startTransformOrigin = d.transformOrigin),
              (l.isWidth =
                null !== (r = null == e ? void 0 : e.parentIsWidth) &&
                void 0 !== r
                  ? r
                  : (!p[0] && !p[1]) || p[0] || !p[1]),
              (l.startPositions = e1(t.state)),
              x(h / v),
              S(c || [-p[0], -p[1]]),
              (l.setFixedDirection = S),
              (l.setFixedPosition = E),
              (l.setMin = D),
              (l.setMax = C);
            var R = e9(t, e, {
                direction: p,
                startRatio: l.ratio,
                set: function (t) {
                  var e = y(t, 2),
                    r = e[0],
                    n = e[1];
                  (l.startWidth = r), (l.startHeight = n);
                },
                setMin: D,
                setMax: C,
                setRatio: x,
                setFixedDirection: S,
                setFixedPosition: E,
                setOrigin: function (t) {
                  l.transformOrigin = t;
                },
                dragStart: et.dragStart(t, new j().dragStart([0, 0], e)),
              }),
              M = f || e7(t, 'onResizeStart', R);
            return (
              (l.startFixedDirection = l.fixedDirection),
              (l.startFixedPosition = l.fixedPosition),
              !1 !== M &&
                ((l.isResize = !0),
                (t.state.snapRenderInfo = {
                  request: e.isRequest,
                  direction: p,
                })),
              !!l.isResize && R
            );
          },
          dragControl: function (t, e) {
            var r,
              n,
              i,
              o,
              a,
              c,
              f,
              p,
              d,
              g,
              h,
              v,
              m,
              b,
              x,
              E,
              D,
              C,
              R,
              M,
              P,
              z,
              O = e.datas,
              T = e.parentFlag,
              w = e.isPinch,
              G = e.parentKeepRatio,
              A = e.dragClient,
              B = e.parentDist,
              _ = e.useSnap,
              k = e.isRequest,
              I = e.isGroup,
              F = e.parentEvent,
              N = e.resolveMatrix,
              W = O.isResize,
              q = O.transformOrigin,
              H = O.startWidth,
              Y = O.startHeight,
              j = O.prevWidth,
              L = O.prevHeight,
              V = O.minSize,
              U = O.maxSize,
              K = O.ratio,
              J = O.startOffsetWidth,
              Z = O.startOffsetHeight,
              $ = O.isWidth;
            if (W) {
              if (N) {
                var Q = t.state.is3d,
                  tt = O.startOffsetMatrix,
                  tn = O.startTransformOrigin,
                  ti = Q ? 4 : 3,
                  to = (0, l.Y6)(tu(e)),
                  ta = Math.sqrt(to.length);
                ti !== ta && (to = (0, u.mA)(to, ta, ti));
                var ts = tr(tt, to, tn, ti),
                  tl = eN(ts, J, Z, ti);
                (O.startPositions = tl),
                  (O.nextTargetMatrix = to),
                  (O.nextAllMatrix = ts);
              }
              var tc = ej(t.props, 'resizable'),
                tf = tc.resizeFormat,
                tp = tc.throttleResize,
                td = void 0 === tp ? (T ? 0 : 1) : tp,
                tg = tc.parentMoveable,
                th = tc.keepRatioFinally,
                tv = O.direction,
                tm = tv,
                tb = 0,
                tx = 0;
              tv[0] || tv[1] || (tm = [1, 1]);
              var tS = (K && (null != G ? G : tc.keepRatio)) || !1,
                ty = y(tB(), 2),
                tE = ty[0],
                tD = ty[1];
              F ||
                (O.setFixedDirection(O.fixedDirection),
                e7(
                  t,
                  'onBeforeResize',
                  e9(
                    t,
                    e,
                    {
                      startFixedDirection: O.startFixedDirection,
                      startFixedPosition: O.startFixedPosition,
                      setFixedDirection: function (t) {
                        var e;
                        return (
                          O.setFixedDirection(t),
                          (tE = (e = y(tB(), 2))[0]),
                          (tD = e[1]),
                          [tE, tD]
                        );
                      },
                      setFixedPosition: function (t) {
                        var e;
                        return (
                          O.setFixedPosition(t),
                          (tE = (e = y(tB(), 2))[0]),
                          (tD = e[1]),
                          [tE, tD]
                        );
                      },
                      boundingWidth: tE,
                      boundingHeight: tD,
                      setSize: function (t) {
                        var e;
                        (tE = (e = y(t, 2))[0]), (tD = e[1]);
                      },
                    },
                    !0
                  )
                ));
              var tC = A;
              A || (tC = !T && w ? te(e1(t.state), [0, 0]) : O.fixedPosition);
              var tR = [0, 0];
              if (
                (w ||
                  (tR = (function (t, e, r, n, i, o, a) {
                    if (!tW(t, 'resizable')) return [0, 0];
                    var s = a.fixedDirection,
                      u = a.nextAllMatrix,
                      l = t.state,
                      c = l.allMatrix,
                      f = l.is3d;
                    return eS(
                      t,
                      function (t, n) {
                        return ex(u || c, e + t, r + n, s, i, f);
                      },
                      e,
                      r,
                      n,
                      i,
                      o,
                      a
                    );
                  })(t, tE, tD, tv, tC, !_ && k, O)),
                B && (B[0] || (tR[0] = 0), B[1] || (tR[1] = 0)),
                tS)
              ) {
                tm[0] &&
                  tm[1] &&
                  tR[0] &&
                  tR[1] &&
                  (ry(tR[0]) > ry(tR[1]) ? (tR[1] = 0) : (tR[0] = 0));
                var tM = !tR[0] && !tR[1];
                tM && t_(),
                  (tm[0] && !tm[1]) || (tR[0] && !tR[1]) || (tM && $)
                    ? ((tE += tR[0]), (tD = tE / K))
                    : ((!tm[0] && tm[1]) || (!tR[0] && tR[1]) || (tM && !$)) &&
                      ((tD += tR[1]), (tE = tD * K));
              } else
                (tE += tR[0]),
                  (tD += tR[1]),
                  (tE = Math.max(0, tE)),
                  (tD = Math.max(0, tD));
              (tE = (z = y((0, s.F1)([tE, tD], V, U, !!tS && K), 2))[0]),
                (tD = z[1]),
                t_(),
                tS && (I || th) && ($ ? (tD = tE / K) : (tE = tD * K));
              var tP = [(tb = tE - J) - j, (tx = tD - Z) - L];
              (O.prevWidth = tb), (O.prevHeight = tx);
              var tz =
                ((r = tE),
                (n = tD),
                (i = tC),
                (o = t.props.groupable),
                (c = (a = t.state).transformOrigin),
                (f = a.offsetMatrix),
                (p = a.is3d),
                (d = a.width),
                (g = a.height),
                (h = a.left),
                (v = a.top),
                (m = O.fixedDirection),
                (b = O.nextTargetMatrix || a.targetMatrix),
                (x = p ? 4 : 3),
                (M = te(
                  eN(
                    tr(
                      f,
                      b,
                      ((E = d),
                      (D = g),
                      (C = c),
                      (void 0 === E && (E = r),
                      void 0 === D && (D = n),
                      void 0 === C && (C = [0, 0]),
                      q)
                        ? q.map(function (t, e) {
                            var i = (0, s.jL)(t),
                              o = i.value,
                              a = i.unit,
                              u = e ? D : E,
                              l = e ? n : r;
                            return '%' === t || isNaN(o)
                              ? l * (u ? C[e] / u : 0)
                              : '%' !== a
                                ? o
                                : (l * o) / 100;
                          })
                        : C),
                      x
                    ),
                    r,
                    n,
                    x
                  ),
                  m
                )),
                (P = [i[0] - M[0], i[1] - M[1]]),
                (0, u.h9)(P, [o ? h : 0, o ? v : 0]));
              if (
                !(
                  !tg &&
                  tP.every(function (t) {
                    return !t;
                  }) &&
                  tz.every(function (t) {
                    return !t;
                  })
                )
              ) {
                var tO = et.drag(t, X(e, t.state, tz, !!w, !1, 'draggable')),
                  tT = tO.transform,
                  tw = H + tb,
                  tG = Y + tx,
                  tA = e9(
                    t,
                    e,
                    S(
                      {
                        width: tw,
                        height: tG,
                        offsetWidth: Math.round(tE),
                        offsetHeight: Math.round(tD),
                        startRatio: K,
                        boundingWidth: tE,
                        boundingHeight: tD,
                        direction: tv,
                        dist: [tb, tx],
                        delta: tP,
                        isPinch: !!w,
                        drag: tO,
                      },
                      e5(
                        {
                          style: {
                            width: ''.concat(tw, 'px'),
                            height: ''.concat(tG, 'px'),
                          },
                          transform: tT,
                        },
                        tO,
                        e
                      )
                    )
                  );
                return F || e7(t, 'onResize', tA), tA;
              }
            }
            function tB() {
              var t = O.fixedDirection,
                r = rm(tm, tS, O, e);
              (tb = r.distWidth), (tx = r.distHeight);
              var n = tm[0] - t[0] || tS ? Math.max(J + tb, 1e-7) : J,
                i = tm[1] - t[1] || tS ? Math.max(Z + tx, 1e-7) : Z;
              return tS && J && Z && ($ ? (i = n / K) : (n = i * K)), [n, i];
            }
            function t_() {
              var t;
              tf && ((tE = (t = y(tf([tE, tD]), 2))[0]), (tD = t[1])),
                (tE = (0, s.P2)(tE, td)),
                (tD = (0, s.P2)(tD, td));
            }
          },
          dragControlAfter: function (t, e) {
            var r = e.datas,
              n = r.isResize,
              i = r.startOffsetWidth,
              o = r.startOffsetHeight,
              a = r.prevWidth,
              s = r.prevHeight;
            if (n && !1 !== t.props.checkResizableError) {
              var u = t.state,
                l = u.width,
                c = u.height,
                f = l - (i + a),
                p = c - (o + s),
                d = ry(f) > 3,
                g = ry(p) > 3;
              if (
                (d &&
                  ((r.startWidth += f),
                  (r.startOffsetWidth += f),
                  (r.prevWidth += f)),
                g &&
                  ((r.startHeight += p),
                  (r.startOffsetHeight += p),
                  (r.prevHeight += p)),
                d || g)
              )
                return this.dragControl(t, e);
            }
          },
          dragControlEnd: function (t, e) {
            var r = e.datas,
              n = e.parentEvent;
            if (r.isResize) {
              r.isResize = !1;
              var i = e6(t, e, {});
              return n || e7(t, 'onResizeEnd', i), i;
            }
          },
          dragGroupControlCondition: en,
          dragGroupControlStart: function (t, e) {
            var r = e.datas,
              n = this.dragControlStart(t, S(S({}, e), { isGroup: !0 }));
            if (!n) return !1;
            var i = tS(t, 'resizable', e),
              o = r.startOffsetWidth,
              a = r.startOffsetHeight;
            function s() {
              var t = r.minSize;
              i.forEach(function (e) {
                var r = e.datas,
                  n = r.minSize,
                  i = r.startOffsetWidth,
                  s = r.startOffsetHeight,
                  u = o * (i ? n[0] / i : 0),
                  l = a * (s ? n[1] / s : 0);
                (t[0] = Math.max(t[0], u)), (t[1] = Math.max(t[1], l));
              });
            }
            function u() {
              var t = r.maxSize;
              i.forEach(function (e) {
                var r = e.datas,
                  n = r.maxSize,
                  i = r.startOffsetWidth,
                  s = r.startOffsetHeight,
                  u = o * (i ? n[0] / i : 0),
                  l = a * (s ? n[1] / s : 0);
                (t[0] = Math.min(t[0], u)), (t[1] = Math.min(t[1], l));
              });
            }
            var l = tE(t, this, 'dragControlStart', e, function (e, n) {
              return tD(t, e, r, n);
            });
            s(), u();
            var c = function (e) {
              n.setFixedDirection(e),
                l.forEach(function (n, o) {
                  n.setFixedDirection(e), tD(t, n.moveable, r, i[o]);
                });
            };
            r.setFixedDirection = c;
            var f = S(S({}, n), {
                targets: t.props.targets,
                events: l.map(function (t) {
                  return S(S({}, t), {
                    setMin: function (e) {
                      t.setMin(e), s();
                    },
                    setMax: function (e) {
                      t.setMax(e), u();
                    },
                  });
                }),
                setFixedDirection: c,
                setMin: function (t) {
                  n.setMin(t), s();
                },
                setMax: function (t) {
                  n.setMax(t), u();
                },
              }),
              p = e7(t, 'onResizeGroupStart', f);
            return (r.isResize = !1 !== p), !!r.isResize && n;
          },
          dragGroupControl: function (t, e) {
            var r = e.datas;
            if (r.isResize) {
              var n = ej(t.props, 'resizable');
              e8(t, 'onBeforeResize', function (r) {
                e7(
                  t,
                  'onBeforeResizeGroup',
                  e9(t, e, S(S({}, r), { targets: n.targets }), !0)
                );
              });
              var i = this.dragControl(t, S(S({}, e), { isGroup: !0 }));
              if (i) {
                var o = i.boundingWidth,
                  a = i.boundingHeight,
                  s = i.dist,
                  l = n.keepRatio,
                  c = [o / (o - s[0]), a / (a - s[1])],
                  f = r.fixedPosition,
                  p = tE(t, this, 'dragControl', e, function (e, r) {
                    var n = y(
                        (0, u.Kf)(
                          (0, u.sQ)((t.rotation / 180) * Math.PI, 3),
                          [
                            r.datas.originalX * c[0],
                            r.datas.originalY * c[1],
                            1,
                          ],
                          3
                        ),
                        2
                      ),
                      i = n[0],
                      o = n[1];
                    return S(S({}, r), {
                      parentDist: null,
                      parentScale: c,
                      dragClient: (0, u.PD)(f, [i, o]),
                      parentKeepRatio: l,
                    });
                  }),
                  d = S({ targets: n.targets, events: p }, i);
                return e7(t, 'onResizeGroup', d), d;
              }
            }
          },
          dragGroupControlEnd: function (t, e) {
            var r = e.isDrag;
            if (e.datas.isResize) {
              this.dragControlEnd(t, e);
              var n = tE(t, this, 'dragControlEnd', e),
                i = e6(t, e, { targets: t.props.targets, events: n });
              return e7(t, 'onResizeGroupEnd', i), r;
            }
          },
          request: function (t) {
            var e = {},
              r = 0,
              n = 0,
              i = !1,
              o = t.getRect();
            return {
              isControl: !0,
              requestStart: function (t) {
                var r;
                return (
                  (i = t.useSnap),
                  {
                    datas: e,
                    parentDirection: t.direction || [1, 1],
                    parentIsWidth:
                      null === (r = null == t ? void 0 : t.horizontal) ||
                      void 0 === r ||
                      r,
                    useSnap: i,
                  }
                );
              },
              request: function (t) {
                return (
                  'offsetWidth' in t
                    ? (r = t.offsetWidth - o.offsetWidth)
                    : 'deltaWidth' in t && (r += t.deltaWidth),
                  'offsetHeight' in t
                    ? (n = t.offsetHeight - o.offsetHeight)
                    : 'deltaHeight' in t && (n += t.deltaHeight),
                  {
                    datas: e,
                    parentDist: [r, n],
                    parentKeepRatio: t.keepRatio,
                    useSnap: i,
                  }
                );
              },
              requestEnd: function () {
                return { datas: e, isDrag: !0, useSnap: i };
              },
            };
          },
          unset: function (t) {
            t.state.gestos.resizable = null;
          },
        };
      function eo(t, e, r, n, i) {
        var o = t.props.groupable,
          a = t.state,
          l = a.is3d ? 4 : 3,
          c = e.origin,
          f = eF(
            t.state.rootMatrix,
            (0, u.h9)([c[0], c[1]], o ? [0, 0] : [a.left, a.top]),
            l
          ),
          p = (0, u.PD)([i.left, i.top], f);
        (e.startAbsoluteOrigin = p),
          (e.prevDeg = ((0, s.jv)(p, [r, n]) / Math.PI) * 180),
          (e.defaultDeg = e.prevDeg),
          (e.prevSnapDeg = 0),
          (e.loop = 0),
          (e.startDist = (0, s.zt)(p, [r, n]));
      }
      function ea(t, e, r) {
        var n = r.defaultDeg,
          i = r.prevDeg,
          o = i % 360,
          a = Math.floor(i / 360);
        o < 0 && (o += 360),
          o > t && o > 270 && t < 90 ? ++a : o < t && o < 90 && t > 270 && --a;
        var s = e * (360 * a + t - n);
        return (r.prevDeg = n + s), s;
      }
      function es(t, e, r, n) {
        return ea(
          ((0, s.jv)(n.startAbsoluteOrigin, [t, e]) / Math.PI) * 180,
          r,
          n
        );
      }
      function eu(t, e, r, n, i, o) {
        var a = t.props.throttleRotate,
          l = r.prevSnapDeg,
          c = 0,
          f = !1;
        if (o) {
          var p = (function (t, e, r, n) {
            var i,
              o = t.props,
              a = null !== (i = o[eM]) && void 0 !== i ? i : 5,
              l = o[eP];
            if (tW(t, 'rotatable')) {
              var c = e.pos1,
                f = e.pos2,
                p = e.pos3,
                d = e.pos4,
                g = e.origin,
                h = (r * Math.PI) / 180,
                v = [c, f, p, d].map(function (t) {
                  return (0, u.h9)(t, g);
                }),
                m = v.map(function (t) {
                  return (0, u.U1)(t, h);
                }),
                b = E(
                  E(
                    [],
                    y(
                      (function (t, e, r, n, i) {
                        if (!t.props.bounds) return [];
                        var o = (i * Math.PI) / 180,
                          a = tw(t),
                          u = a.left,
                          l = a.top,
                          c = a.right,
                          f = a.bottom,
                          p = u - n[0],
                          d = c - n[0],
                          g = l - n[1],
                          h = f - n[1],
                          v = { left: p, top: g, right: d, bottom: h };
                        if (!tA(r, v, 0)) return [];
                        var m = [];
                        return (
                          [
                            [p, 0],
                            [d, 0],
                            [g, 1],
                            [h, 1],
                          ].forEach(function (t) {
                            var n = y(t, 2),
                              i = n[0],
                              a = n[1];
                            r.forEach(function (t) {
                              var r,
                                n,
                                u = (0, s.jv)([0, 0], t);
                              m.push.apply(
                                m,
                                E(
                                  [],
                                  y(
                                    [
                                      (n =
                                        Math.sqrt((r = eq(t)) * r - i * i) ||
                                        0),
                                      -n,
                                    ]
                                      .sort(function (e, r) {
                                        return (
                                          ry(e - t[a ? 0 : 1]) -
                                          ry(r - t[a ? 0 : 1])
                                        );
                                      })
                                      .map(function (t) {
                                        return (0, s.jv)(
                                          [0, 0],
                                          a ? [t, i] : [i, t]
                                        );
                                      })
                                      .map(function (t) {
                                        return o + t - u;
                                      })
                                      .filter(function (t) {
                                        return !tA(e, v, t);
                                      })
                                      .map(function (t) {
                                        return (0, s.P2)(
                                          (180 * t) / Math.PI,
                                          1e-7
                                        );
                                      })
                                  ),
                                  !1
                                )
                              );
                            });
                          }),
                          m
                        );
                      })(t, v, m, g, r)
                    ),
                    !1
                  ),
                  y(
                    (function (t, e, r, n, i) {
                      var o = t.props.innerBounds,
                        a = (i * Math.PI) / 180;
                      if (!o) return [];
                      var u = o.left,
                        l = o.top,
                        c = o.width,
                        f = o.height,
                        p = u - n[0],
                        d = u + c - n[0],
                        g = l - n[1],
                        h = l + f - n[1],
                        v = [
                          [p, g],
                          [d, g],
                          [p, h],
                          [d, h],
                        ],
                        m = te(r, [0, 0]);
                      if (!t4(r, v, m, 0)) return [];
                      var b = [],
                        x = v.map(function (t) {
                          return [eq(t), (0, s.jv)([0, 0], t)];
                        });
                      return (
                        [
                          [r[0], r[1]],
                          [r[1], r[3]],
                          [r[3], r[2]],
                          [r[2], r[0]],
                        ].forEach(function (t) {
                          var r = (0, s.jv)(
                              [0, 0],
                              (function (t) {
                                var e = y(t, 2),
                                  r = e[0],
                                  n = e[1],
                                  i = n[0] - r[0],
                                  o = n[1] - r[1];
                                if (!i) return [r[0], 0];
                                if (!o) return [0, r[1]];
                                var a = o / i,
                                  s = -a * r[0] + r[1];
                                return [-s / (a + 1 / a), s / (a * a + 1)];
                              })(t)
                            ),
                            n = (function (t) {
                              var e = y(t, 2),
                                r = e[0],
                                n = e[1],
                                i = n[0] - r[0],
                                o = n[1] - r[1];
                              if (!i) return ry(r[0]);
                              if (!o) return ry(r[1]);
                              var a = o / i;
                              return ry(
                                (-a * r[0] + r[1]) /
                                  Math.sqrt(Math.pow(a, 2) + 1)
                              );
                            })(t);
                          b.push.apply(
                            b,
                            E(
                              [],
                              y(
                                x
                                  .filter(function (t) {
                                    var e = y(t, 1)[0];
                                    return e && n <= e;
                                  })
                                  .map(function (t) {
                                    var e = y(t, 2),
                                      i = e[0],
                                      o = e[1],
                                      s = Math.acos(i ? n / i : 0);
                                    return [a + (o + s) - r, a + (o - s) - r];
                                  })
                                  .reduce(function (t, e) {
                                    return t.push.apply(t, E([], y(e), !1)), t;
                                  }, [])
                                  .filter(function (t) {
                                    return !t4(e, v, m, t);
                                  })
                                  .map(function (t) {
                                    return (0, s.P2)((180 * t) / Math.PI, 1e-7);
                                  })
                              ),
                              !1
                            )
                          );
                        }),
                        b
                      );
                    })(t, v, m, g, r)
                  ),
                  !1
                );
              b.sort(function (t, e) {
                return ry(t - r) - ry(e - r);
              });
              var x = b.length > 0;
              if (x) return { isSnap: x, dist: x ? b[0] : r };
            }
            if ((null == l ? void 0 : l.length) && a) {
              var S,
                D,
                C,
                R,
                M = l.slice().sort(function (t, e) {
                  return eE(t, n) - eE(e, n);
                })[0];
              if (eE(M, n) <= a)
                return {
                  isSnap: !0,
                  dist:
                    r +
                    ((S = ey((S = M))),
                    (C = 360 * (D = Math.floor(n / 360)) + 360 - S),
                    (R = 360 * D + S),
                    ry(n - C) < ry(n - R) ? C : R) -
                    n,
                };
            }
            return { isSnap: !1, dist: r };
          })(t, e, n, i + n);
          (f = p.isSnap), (c = i + p.dist);
        }
        f || (c = (0, s.P2)(i + n, void 0 === a ? 0 : a));
        var d = c - i;
        return (r.prevSnapDeg = d), [d - l, d, c];
      }
      function el(t, e) {
        if (e.isRequest) return 'rotatable' === e.requestAble;
        var r = e.inputEvent.target;
        if (
          (0, s.pv)(r, ez('rotation-control')) ||
          (t.props.rotateAroundControls &&
            (0, s.pv)(r, ez('around-control'))) ||
          ((0, s.pv)(r, ez('control')) && (0, s.pv)(r, ez('rotatable')))
        )
          return !0;
        var n = t.props.rotationTarget;
        return (
          !!n &&
          rg(n, !0).some(function (t) {
            return !!t && (r === t || r.contains(t));
          })
        );
      }
      function ec(t, e) {
        var r, n, i, o, a, u, l, c, f, p;
        return (
          (i = (r = S(S({}, t), {
            classNames: E(
              [ez('line', 'guideline', t.direction)],
              y(t.classNames),
              !1
            ).filter(function (t) {
              return t;
            }),
            size: t.size || ''.concat(t.sizeValue, 'px'),
            pos:
              t.pos ||
              t.posValue.map(function (t) {
                return ''.concat((0, s.P2)(t, 0.1), 'px');
              }),
          })).direction),
          (o = r.classNames),
          (a = r.size),
          (u = r.pos),
          (l = r.zoom),
          (c = r.key),
          (p = (f = 'horizontal' === i) ? 'Y' : 'X'),
          e.createElement('div', {
            key: c,
            className: o.join(' '),
            style:
              (((n = {})[f ? 'width' : 'height'] = ''.concat(a)),
              (n.transform = 'translate('
                .concat(u[0], ', ')
                .concat(u[1], ') translate')
                .concat(p, '(-50%) scale')
                .concat(p, '(')
                .concat(l, ')')),
              n),
          })
        );
      }
      function ef(t, e, r, n, i, o, a, s) {
        var u = t.props.zoom;
        return r.map(function (t, r) {
          var l = t.type,
            c = t.pos,
            f = [0, 0];
          return (
            (f[a] = n),
            (f[a ? 0 : 1] = -i + c),
            ec(
              {
                key: ''.concat(e, 'TargetGuideline').concat(r),
                classNames: [ez('target', 'bold', l)],
                posValue: f,
                sizeValue: o,
                zoom: u,
                direction: e,
              },
              s
            )
          );
        });
      }
      function ep(t, e, r, n, i, o) {
        var a = t.props,
          s = a.zoom,
          u = a.isDisplayInnerSnapDigit,
          l = 'horizontal' === e ? tI : tF,
          c = i[l.start],
          f = i[l.end];
        return r
          .filter(function (t) {
            var e = t.hide,
              r = t.elementRect;
            if (e) return !1;
            if (u && r) {
              var n = r.rect;
              if (n[l.start] <= c && f <= n[l.end]) return !1;
            }
            return !0;
          })
          .map(function (t, r) {
            var i = t.pos,
              a = t.size,
              u = t.element,
              l = t.className,
              c = [-n[0] + i[0], -n[1] + i[1]];
            return ec(
              {
                key: ''.concat(e, '-default-guideline-').concat(r),
                classNames: u ? [ez('bold'), l] : [ez('normal'), l],
                direction: e,
                posValue: c,
                sizeValue: a,
                zoom: s,
              },
              o
            );
          });
      }
      function ed(t, e, r, n, i, o, a, s) {
        var u,
          l = t.props,
          c = l.snapDigit,
          f = l.isDisplaySnapDigit,
          p = l.snapDistFormat,
          d = l.zoom,
          g = 'horizontal' === e ? 'X' : 'Y',
          h = 'vertical' === e ? 'height' : 'width',
          v = Math.abs(i),
          m =
            void 0 === f || f ? parseFloat(v.toFixed(void 0 === c ? 0 : c)) : 0;
        return s.createElement(
          'div',
          {
            key: ''.concat(e, '-').concat(r, '-guideline-').concat(n),
            className: ez('guideline-group', e),
            style:
              (((u = {
                left: ''.concat(o[0], 'px'),
                top: ''.concat(o[1], 'px'),
              })[h] = ''.concat(v, 'px')),
              u),
          },
          ec(
            {
              direction: e,
              classNames: [ez(r), a],
              size: '100%',
              posValue: [0, 0],
              sizeValue: v,
              zoom: d,
            },
            s
          ),
          s.createElement(
            'div',
            {
              className: ez('size-value', 'gap'),
              style: {
                transform: 'translate'
                  .concat(g, '(-50%) scale(')
                  .concat(d, ')'),
              },
            },
            m > 0
              ? (void 0 === p
                  ? function (t, e) {
                      return t;
                    }
                  : p)(m, e)
              : ''
          )
        );
      }
      function eg(t) {
        var e,
          r,
          n,
          i,
          o,
          a,
          u,
          l,
          f = t.state,
          p = f.containerClientRect,
          d = f.hasFixed,
          g = p.overflow,
          h = p.scrollHeight,
          v = p.scrollWidth,
          m = p.clientHeight,
          b = p.clientWidth,
          x = p.clientLeft,
          D = p.clientTop,
          C = t.props,
          R = C.snapGap,
          M = C.verticalGuidelines,
          P = C.horizontalGuidelines,
          z = C.snapThreshold,
          O = C.snapGridWidth,
          T = C.snapGridHeight,
          w = C.maxSnapElementGuidelineDistance,
          G = void 0 === w ? 1 / 0 : w,
          A = C.isDisplayGridGuidelines,
          B = eW(e1(t.state)),
          _ = B.top,
          k = B.left,
          I = B.bottom,
          F = B.right,
          N = {
            top: _,
            left: k,
            bottom: I,
            right: F,
            center: (k + F) / 2,
            middle: (_ + I) / 2,
          },
          W = E(
            [],
            y(
              (function (t) {
                var e = t.state,
                  r = t.props.elementGuidelines,
                  n = void 0 === r ? [] : r;
                if (!n.length) return (e.elementRects = []), [];
                var i = (e.elementRects || []).filter(function (t) {
                    return !t.refresh;
                  }),
                  o = n
                    .map(function (t) {
                      return (0, s.Kn)(t) && 'element' in t
                        ? S(S({}, t), { element: rd(t.element, !0) })
                        : { element: rd(t, !0) };
                    })
                    .filter(function (t) {
                      return t.element;
                    }),
                  a = (0, c.H)(
                    i.map(function (t) {
                      return t.element;
                    }),
                    o.map(function (t) {
                      return t.element;
                    })
                  ),
                  u = a.maintained,
                  l = a.added,
                  f = [];
                u.forEach(function (t) {
                  var e = y(t, 2),
                    r = e[0];
                  f[e[1]] = i[r];
                }),
                  (function (t, e) {
                    if (!e.length) return [];
                    var r,
                      n = t.props.groupable,
                      i = t.state,
                      o = i.containerClientRect,
                      a = i.rootMatrix,
                      s = i.is3d,
                      u = i.offsetDelta,
                      l = s ? 4 : 3,
                      c = y(
                        ((r = eF(a, [o.clientLeft, o.clientTop], l)),
                        [o.left + r[0], o.top + r[1]]),
                        2
                      ),
                      f = c[0],
                      p = c[1],
                      d = n ? 0 : u[0],
                      g = n ? 0 : u[1];
                    return e.map(function (t) {
                      var e = t.element.getBoundingClientRect(),
                        r = e.left - f - d,
                        n = e.top - p - g,
                        i = n + e.height,
                        o = r + e.width,
                        s = y(ra(a, [r, n], l), 2),
                        u = s[0],
                        c = s[1],
                        h = y(ra(a, [o, i], l), 2),
                        v = h[0],
                        m = h[1];
                      return S(S({}, t), {
                        rect: {
                          left: u,
                          right: v,
                          top: c,
                          bottom: m,
                          center: (u + v) / 2,
                          middle: (c + m) / 2,
                        },
                      });
                    });
                  })(
                    t,
                    l.map(function (t) {
                      return o[t];
                    })
                  ).map(function (t, e) {
                    f[l[e]] = t;
                  }),
                  (e.elementRects = f);
                var p = tq(t.props.elementSnapDirections),
                  d = [];
                return (
                  f.forEach(function (t) {
                    var e = t.element,
                      r = t.top,
                      n = void 0 === r ? p.top : r,
                      i = t.left,
                      o = void 0 === i ? p.left : i,
                      a = t.right,
                      u = void 0 === a ? p.right : a,
                      l = t.bottom,
                      c = void 0 === l ? p.bottom : l,
                      f = t.center,
                      g = void 0 === f ? p.center : f,
                      h = t.middle,
                      v = void 0 === h ? p.middle : h,
                      m = t.className,
                      b = t.rect,
                      x = tH(
                        {
                          top: n,
                          right: u,
                          left: o,
                          bottom: c,
                          center: g,
                          middle: v,
                        },
                        b
                      ),
                      S = x.horizontal,
                      y = x.vertical,
                      E = x.horizontalNames,
                      D = x.verticalNames,
                      C = b.top,
                      R = b.left,
                      M = b.right - R,
                      P = b.bottom - C,
                      z = [M, P];
                    y.forEach(function (r, n) {
                      d.push({
                        type: 'vertical',
                        element: e,
                        pos: [(0, s.P2)(r, 0.1), C],
                        size: P,
                        sizes: z,
                        className: m,
                        elementRect: t,
                        elementDirection: tk[D[n]] || D[n],
                        direction: '',
                      });
                    }),
                      S.forEach(function (r, n) {
                        d.push({
                          type: 'horizontal',
                          element: e,
                          pos: [R, (0, s.P2)(r, 0.1)],
                          size: M,
                          sizes: z,
                          className: m,
                          elementRect: t,
                          elementDirection: tk[E[n]] || E[n],
                          direction: '',
                        });
                      });
                  }),
                  d
                );
              })(t)
            ),
            !1
          );
        (void 0 === R || R) &&
          W.push.apply(
            W,
            E(
              [],
              y(
                ((e = void 0 === z ? 5 : z),
                (i =
                  void 0 === (n = (r = t.props).maxSnapElementGuidelineDistance)
                    ? 1 / 0
                    : n),
                (a = void 0 === (o = r.maxSnapElementGapDistance) ? 1 / 0 : o),
                (u = t.state.elementRects),
                (l = []),
                [
                  ['vertical', tI, tF],
                  ['horizontal', tF, tI],
                ].forEach(function (t) {
                  var r = y(t, 3),
                    n = r[0],
                    o = r[1],
                    s = r[2],
                    c = N[o.start],
                    f = N[o.end],
                    p = N[o.center],
                    d = N[s.start],
                    g = N[s.end];
                  function h(t) {
                    var r = t.rect;
                    return r[o.end] < c + e
                      ? c - r[o.end]
                      : f - e < r[o.start]
                        ? r[o.start] - f
                        : -1;
                  }
                  var v = u
                      .filter(function (t) {
                        var e = t.rect;
                        return !(e[s.start] > g) && !(e[s.end] < d) && h(t) > 0;
                      })
                      .sort(function (t, e) {
                        return h(t) - h(e);
                      }),
                    m = [];
                  v.forEach(function (t) {
                    v.forEach(function (e) {
                      if (t !== e) {
                        var r = t.rect,
                          n = e.rect,
                          i = r[s.start],
                          o = r[s.end],
                          a = n[s.start];
                        i > n[s.end] || a > o || m.push([t, e]);
                      }
                    });
                  }),
                    m.forEach(function (t) {
                      var r = y(t, 2),
                        s = r[0],
                        u = r[1],
                        d = s.rect,
                        g = u.rect,
                        h = d[o.start],
                        v = d[o.end],
                        m = g[o.start],
                        b = g[o.end],
                        x = 0,
                        S = 0,
                        E = !1,
                        D = !1,
                        C = !1;
                      if (v <= c && f <= m) {
                        if (
                          ((D = !0),
                          (x = (m - v - (f - c)) / 2),
                          ry((S = v + x + (f - c) / 2) - p) > e)
                        )
                          return;
                      } else if (v < m && b < c + e) {
                        if (((E = !0), ry((S = b + (x = m - v)) - c) > e))
                          return;
                      } else if (!(v < m) || !(f - e < h)) return;
                      else if (((C = !0), ry((S = h - (x = m - v)) - f) > e))
                        return;
                      x &&
                        eh(N, g, n, i) &&
                        !(x > a) &&
                        l.push({
                          type: n,
                          pos: 'vertical' === n ? [S, 0] : [0, S],
                          element: u.element,
                          size: 0,
                          className: u.className,
                          isStart: E,
                          isCenter: D,
                          isEnd: C,
                          gap: x,
                          hide: !0,
                          gapRects: [s, u],
                          direction: '',
                          elementDirection: '',
                        });
                    });
                }),
                l)
              ),
              !1
            )
          );
        var q = S({}, f.snapOffset || { left: 0, top: 0, bottom: 0, right: 0 });
        if (
          (W.push.apply(
            W,
            E(
              [],
              y(
                (function (t, e, r, n, i, o, a, u) {
                  void 0 === i && (i = 0), void 0 === o && (o = 0);
                  var l = [],
                    c = a.left,
                    f = a.top;
                  if (e)
                    for (var p = 0; p <= n; p += e)
                      l.push({
                        type: 'horizontal',
                        pos: [c, (0, s.P2)(p - o + f, 0.1)],
                        className: ez('grid-guideline'),
                        size: r,
                        hide: !u,
                        direction: '',
                      });
                  if (t)
                    for (var p = 0; p <= r; p += t)
                      l.push({
                        type: 'vertical',
                        pos: [(0, s.P2)(p - i + c, 0.1), f],
                        className: ez('grid-guideline'),
                        size: n,
                        hide: !u,
                        direction: '',
                      });
                  return l;
                })(
                  void 0 === O ? 0 : O,
                  void 0 === T ? 0 : T,
                  g ? v : b,
                  g ? h : m,
                  x,
                  D,
                  q,
                  A
                )
              ),
              !1
            )
          ),
          d)
        ) {
          var H = p.left,
            Y = p.top;
          (q.left += H), (q.top += Y), (q.right += H), (q.bottom += Y);
        }
        return (
          W.push.apply(
            W,
            E([], y(em(P || !1, M || !1, g ? v : b, g ? h : m, x, D, q)), !1)
          ),
          (W = W.filter(function (t) {
            var e = t.element,
              r = t.elementRect,
              n = t.type;
            return !e || !r || eh(N, r.rect, n, G);
          }))
        );
      }
      function eh(t, e, r, n) {
        return 'horizontal' === r
          ? ry(t.right - e.left) <= n ||
              ry(t.left - e.right) <= n ||
              (t.left <= e.right && e.left <= t.right)
          : 'vertical' !== r ||
              ry(t.bottom - e.top) <= n ||
              ry(t.top - e.bottom) <= n ||
              (t.top <= e.bottom && e.top <= t.bottom);
      }
      function ev(t, e) {
        return t
          ? t.map(function (t) {
              var r = (0, s.Kn)(t) ? t : { pos: t },
                n = r.pos;
              return (0, s.hj)(n) ? r : S(S({}, r), { pos: (0, s.AA)(n, e) });
            })
          : [];
      }
      function em(t, e, r, n, i, o, a) {
        void 0 === i && (i = 0),
          void 0 === o && (o = 0),
          void 0 === a && (a = { left: 0, top: 0, right: 0, bottom: 0 });
        var u = [],
          l = a.left,
          c = a.top,
          f = a.bottom,
          p = r + a.right - l,
          d = n + f - c;
        return (
          ev(t, d).forEach(function (t) {
            u.push({
              type: 'horizontal',
              pos: [l, (0, s.P2)(t.pos - o + c, 0.1)],
              size: p,
              className: t.className,
              direction: '',
            });
          }),
          ev(e, p).forEach(function (t) {
            u.push({
              type: 'vertical',
              pos: [(0, s.P2)(t.pos - i + l, 0.1), c],
              size: d,
              className: t.className,
              direction: '',
            });
          }),
          u
        );
      }
      function eb(t) {
        var e = t.state,
          r = e.container,
          n = t.props.snapContainer || r;
        if (e.snapContainer === n && e.guidelines && e.guidelines.length)
          return !1;
        var i = e.containerClientRect,
          o = { left: 0, top: 0, bottom: 0, right: 0 };
        if (r !== n) {
          var a = rd(n, !0);
          if (a) {
            var u = eZ(a),
              l = rh(e, [u.left - i.left, u.top - i.top]),
              c = rh(e, [u.right - i.right, u.bottom - i.bottom]);
            (o.left = (0, s.P2)(l[0], 1e-5)),
              (o.top = (0, s.P2)(l[1], 1e-5)),
              (o.right = (0, s.P2)(c[0], 1e-5)),
              (o.bottom = (0, s.P2)(c[1], 1e-5));
          }
        }
        return (
          (e.snapContainer = n),
          (e.snapOffset = o),
          (e.guidelines = eg(t)),
          (e.enableSnap = !0),
          !0
        );
      }
      function ex(t, e, r, n, i, o) {
        var a = eN(t, e, r, o ? 4 : 3),
          s = te(a, n);
        return e0(a, (0, u.h9)(i, s));
      }
      function eS(t, e, r, n, i, o, a, l) {
        for (
          var c = e1(t.state), f = t.props.keepRatio, p = 0, d = 0, g = 0;
          g < 2;
          ++g
        ) {
          var h = (function (t, e, r, n, i, o) {
              var a = (function (t, e, r) {
                  var n = [];
                  if (r)
                    1 !== ry(e[0]) || 1 !== ry(e[1])
                      ? n.push(
                          [e, [-1, -1]],
                          [e, [-1, 1]],
                          [e, [1, -1]],
                          [e, [1, 1]]
                        )
                      : n.push([e, [t[0], -t[1]]], [e, [-t[0], t[1]]]),
                      n.push([e, t]);
                  else if ((t[0] && t[1]) || (!t[0] && !t[1])) {
                    var i = t[0] ? t : [1, 1];
                    [1, -1].forEach(function (t) {
                      [1, -1].forEach(function (r) {
                        var o = [t * i[0], r * i[1]];
                        (e[0] !== o[0] || e[1] !== o[1]) && n.push([e, o]);
                      });
                    });
                  } else if (t[0]) {
                    var o = 1 === ry(e[0]) ? [1] : [1, -1];
                    o.forEach(function (r) {
                      n.push(
                        [
                          [e[0], -1],
                          [r * t[0], -1],
                        ],
                        [
                          [e[0], 0],
                          [r * t[0], 0],
                        ],
                        [
                          [e[0], 1],
                          [r * t[0], 1],
                        ]
                      );
                    });
                  } else if (t[1]) {
                    var o = 1 === ry(e[1]) ? [1] : [1, -1];
                    o.forEach(function (r) {
                      n.push(
                        [
                          [-1, e[1]],
                          [-1, r * t[1]],
                        ],
                        [
                          [0, e[1]],
                          [0, r * t[1]],
                        ],
                        [
                          [1, e[1]],
                          [1, r * t[1]],
                        ]
                      );
                    });
                  }
                  return n;
                })(r, o.fixedDirection, n),
                l = t3(t, e, r, n),
                c = E(
                  E(
                    [],
                    y(
                      a.map(function (r) {
                        var a,
                          l,
                          c,
                          f,
                          p,
                          d,
                          g,
                          h,
                          v,
                          m,
                          b,
                          x,
                          S = y(r, 2),
                          E = S[0],
                          D = S[1],
                          C = te(e, E),
                          R = te(e, D),
                          M = n
                            ? (function (t, e, r, n) {
                                var i = (function (t, e, r) {
                                    var n = tw(t),
                                      i = n.left,
                                      o = n.top,
                                      a = n.right,
                                      s = n.bottom,
                                      l = y(r, 2),
                                      c = l[0],
                                      f = l[1],
                                      p = y((0, u.h9)(r, e), 2),
                                      d = p[0],
                                      g = p[1];
                                    1e-7 > ry(d) && (d = 0),
                                      1e-7 > ry(g) && (g = 0);
                                    var h = g > 0,
                                      v = d > 0,
                                      m = { isBound: !1, offset: 0, pos: 0 },
                                      b = { isBound: !1, offset: 0, pos: 0 };
                                    if (0 === d && 0 === g);
                                    else if (0 === d)
                                      h
                                        ? s < f &&
                                          ((b.pos = s), (b.offset = f - s))
                                        : o > f &&
                                          ((b.pos = o), (b.offset = f - o));
                                    else if (0 === g)
                                      v
                                        ? a < c &&
                                          ((m.pos = a), (m.offset = c - a))
                                        : i > c &&
                                          ((m.pos = i), (m.offset = c - i));
                                    else {
                                      var x = g / d,
                                        S = r[1] - x * c,
                                        E = 0,
                                        D = 0,
                                        C = !1;
                                      v && a <= c
                                        ? ((E = x * a + S), (D = a), (C = !0))
                                        : !v &&
                                          c <= i &&
                                          ((E = x * i + S), (D = i), (C = !0)),
                                        C && (E < o || E > s) && (C = !1),
                                        C ||
                                          (h && s <= f
                                            ? ((D = ((E = s) - S) / x),
                                              (C = !0))
                                            : h ||
                                              !(f <= o) ||
                                              ((D = ((E = o) - S) / x),
                                              (C = !0))),
                                        C &&
                                          ((m.isBound = !0),
                                          (m.pos = D),
                                          (m.offset = c - D),
                                          (b.isBound = !0),
                                          (b.pos = E),
                                          (b.offset = f - E));
                                    }
                                    return { vertical: m, horizontal: b };
                                  })(t, e, r),
                                  o = i.horizontal,
                                  a = i.vertical,
                                  s = n
                                    ? {
                                        horizontal: { isSnap: !1 },
                                        vertical: { isSnap: !1 },
                                      }
                                    : (function (t, e, r) {
                                        var n = y(r, 2),
                                          i = n[0],
                                          o = n[1],
                                          a = y(e, 2),
                                          s = a[0],
                                          l = a[1],
                                          c = y((0, u.h9)(r, e), 2),
                                          f = c[0],
                                          p = c[1],
                                          d = p > 0,
                                          g = f > 0;
                                        (f = rc(f)), (p = rc(p));
                                        var h = {
                                            isSnap: !1,
                                            offset: 0,
                                            pos: 0,
                                          },
                                          v = { isSnap: !1, offset: 0, pos: 0 };
                                        if (0 === f && 0 === p)
                                          return { vertical: h, horizontal: v };
                                        var m = tY(
                                            t,
                                            f ? [i] : [],
                                            p ? [o] : []
                                          ),
                                          b = m.vertical,
                                          x = m.horizontal;
                                        b.posInfos.filter(function (t) {
                                          var e = t.pos;
                                          return g ? e >= s : e <= s;
                                        }),
                                          x.posInfos.filter(function (t) {
                                            var e = t.pos;
                                            return d ? e >= l : e <= l;
                                          }),
                                          (b.isSnap = b.posInfos.length > 0),
                                          (x.isSnap = x.posInfos.length > 0);
                                        var S = tV(b),
                                          E = S.isSnap,
                                          D = S.guideline,
                                          C = tV(x),
                                          R = C.isSnap,
                                          M = C.guideline,
                                          P = R ? M.pos[1] : 0,
                                          z = E ? D.pos[0] : 0;
                                        if (0 === f)
                                          R &&
                                            ((v.isSnap = !0),
                                            (v.pos = M.pos[1]),
                                            (v.offset = o - v.pos));
                                        else if (0 === p)
                                          E &&
                                            ((h.isSnap = !0),
                                            (h.pos = z),
                                            (h.offset = i - z));
                                        else {
                                          var O = p / f,
                                            T = r[1] - O * i,
                                            w = 0,
                                            G = 0,
                                            A = !1;
                                          E
                                            ? ((w = O * (G = z) + T), (A = !0))
                                            : R &&
                                              ((G = ((w = P) - T) / O),
                                              (A = !0)),
                                            A &&
                                              ((h.isSnap = !0),
                                              (h.pos = G),
                                              (h.offset = i - G),
                                              (v.isSnap = !0),
                                              (v.pos = w),
                                              (v.offset = o - w));
                                        }
                                        return { vertical: h, horizontal: v };
                                      })(t, e, r),
                                  l = s.horizontal,
                                  c = s.vertical,
                                  f = t7(o, l),
                                  p = t7(a, c),
                                  d = ry(f),
                                  g = ry(p);
                                return {
                                  horizontal: {
                                    isBound: o.isBound,
                                    isSnap: l.isSnap,
                                    offset: f,
                                    dist: d,
                                  },
                                  vertical: {
                                    isBound: a.isBound,
                                    isSnap: c.isSnap,
                                    offset: p,
                                    dist: g,
                                  },
                                };
                              })(t, C, R, i)
                            : t6(t, i, {
                                vertical: [R[0]],
                                horizontal: [R[1]],
                              }),
                          P = M.horizontal,
                          z = P.offset,
                          O = P.isBound,
                          T = P.isSnap,
                          w = M.vertical,
                          G = w.offset,
                          A = w.isBound,
                          B = w.isSnap,
                          _ = (0, u.h9)(D, E);
                        if (!G && !z)
                          return {
                            isBound: A || O,
                            isSnap: B || T,
                            sign: _,
                            offset: [0, 0],
                          };
                        var k =
                          ((a = ((0, s.jv)(C, R) / Math.PI) * 180),
                          (c = (l = M.vertical).isBound),
                          (f = l.isSnap),
                          (p = l.dist),
                          (g = (d = M.horizontal).isBound),
                          (h = d.isSnap),
                          (v = d.dist),
                          (b = (m = a % 180) < 3 || m > 177),
                          (x = m > 87 && m < 93),
                          v < p && (c || (f && !x && (!n || !b)))
                            ? 'vertical'
                            : !g && (!h || b || (n && x))
                              ? ''
                              : 'horizontal');
                        if (!k)
                          return {
                            sign: _,
                            isBound: !1,
                            isSnap: !1,
                            offset: [0, 0],
                          };
                        var I = 'vertical' === k,
                          F = [0, 0];
                        return (
                          (F = (F =
                            n ||
                            1 !== ry(D[0]) ||
                            1 !== ry(D[1]) ||
                            E[0] === D[0] ||
                            E[1] === D[1]
                              ? t5(C, R, -(I ? G : z), I, o).offset
                              : Q({ datas: o, distX: -G, distY: -z })).map(
                            function (t, e) {
                              return t * (_[e] ? 2 / _[e] : 0);
                            }
                          )),
                          {
                            sign: _,
                            isBound: I ? A : O,
                            isSnap: I ? B : T,
                            offset: F,
                          }
                        );
                      })
                    ),
                    !1
                  ),
                  y(t2(t, l, o)),
                  !1
                ),
                f = tJ(c, 0),
                p = tJ(c, 1);
              return {
                width: { isBound: f.isBound, offset: f.offset[0] },
                height: { isBound: p.isBound, offset: p.offset[1] },
              };
            })(t, e(p, d), i, f, a, l),
            v = h.width,
            m = h.height,
            b = v.isBound,
            x = m.isBound,
            S = v.offset,
            D = m.offset;
          if (
            (1 !== g || (b || (S = 0), x || (D = 0)), 0 === g && a && !b && !x)
          )
            return [0, 0];
          if (f) {
            var C = ry(S) * (r ? 1 / r : 1),
              R = ry(D) * (n ? 1 / n : 1);
            (b && x ? C < R : x || (!b && C < R))
              ? (S = (r * D) / n)
              : (D = (n * S) / r);
          }
          (p += S), (d += D);
        }
        if (!f && i[0] && i[1]) {
          var M = (function (t, e, r, n, i) {
              var o = [-r[0], -r[1]],
                a = t.state,
                u = a.width,
                l = a.height,
                c = t.props.bounds,
                f = 1 / 0,
                p = 1 / 0;
              if (c) {
                var d = [
                    [r[0], -r[1]],
                    [-r[0], r[1]],
                  ],
                  g = c.left,
                  h = void 0 === g ? -1 / 0 : g,
                  v = c.top,
                  m = void 0 === v ? -1 / 0 : v,
                  b = c.right,
                  x = void 0 === b ? 1 / 0 : b,
                  S = c.bottom,
                  E = void 0 === S ? 1 / 0 : S;
                d.forEach(function (t) {
                  var r = t[0] !== o[0],
                    a = t[1] !== o[1],
                    c = te(e, t),
                    d = (360 * (0, s.jv)(n, c)) / Math.PI;
                  if (a) {
                    var g = c.slice();
                    (2 > ry(d - 360) || 2 > ry(d - 180)) && (g[1] = n[1]);
                    var v = t5(n, g, (n[1] < c[1] ? E : m) - c[1], !1, i),
                      b = y(v.offset, 2)[1],
                      S = v.isOutside;
                    isNaN(b) || (p = l + (S ? 1 : -1) * ry(b));
                  }
                  if (r) {
                    var g = c.slice();
                    (2 > ry(d - 90) || 2 > ry(d - 270)) && (g[0] = n[0]);
                    var D = t5(n, g, (n[0] < c[0] ? x : h) - c[0], !0, i),
                      C = y(D.offset, 1)[0],
                      R = D.isOutside;
                    isNaN(C) || (f = u + (R ? 1 : -1) * ry(C));
                  }
                });
              }
              return { maxWidth: f, maxHeight: p };
            })(t, c, i, o, l),
            P = M.maxWidth,
            z = M.maxHeight,
            O = y(
              (function (t, e, r, n, i, o, a, u, l) {
                var c = te(e, a),
                  f = t6(t, u, { vertical: [c[0]], horizontal: [c[1]] }),
                  p = f.horizontal.offset,
                  d = f.vertical.offset;
                if ((0, s.P2)(d, 1e-4) || (0, s.P2)(p, 1e-4)) {
                  var g = y(Q({ datas: l, distX: -d, distY: -p }), 2),
                    h = g[0],
                    v = g[1];
                  return [
                    Math.min(i || 1 / 0, r + a[0] * h) - r,
                    Math.min(o || 1 / 0, n + a[1] * v) - n,
                  ];
                }
                return [0, 0];
              })(
                t,
                e(p, d).map(function (t) {
                  return t.map(function (t) {
                    return (0, s.P2)(t, 1e-4);
                  });
                }),
                r + p,
                n + d,
                P,
                z,
                i,
                a,
                l
              ),
              2
            ),
            S = O[0],
            D = O[1];
          (p += S), (d += D);
        }
        return [p, d];
      }
      function ey(t) {
        return t < 0 && (t = (t % 360) + 360), (t %= 360);
      }
      function eE(t, e) {
        (t = ey(t)), (e = ey(e));
        var r = ey(t - e);
        return Math.min(r, 360 - r);
      }
      function eD(t) {
        var e = [];
        return (
          t.forEach(function (t) {
            t.guidelineInfos.forEach(function (r) {
              var n = r.guideline;
              (0, s.sE)(e, function (t) {
                return t.guideline === n;
              }) || ((n.direction = ''), e.push({ guideline: n, posInfo: t }));
            });
          }),
          e.map(function (t) {
            var e = t.guideline,
              r = t.posInfo;
            return S(S({}, e), { direction: r.direction });
          })
        );
      }
      function eC(t, e, r, n, i, o) {
        var a = tT(tw(t, o), e, r),
          u = a.vertical,
          l = a.horizontal,
          c = tN();
        u.forEach(function (t) {
          t.isBound &&
            ('start' === t.direction && (c.left = !0),
            'end' === t.direction && (c.right = !0),
            n.push({ type: 'bounds', pos: t.pos }));
        }),
          l.forEach(function (t) {
            t.isBound &&
              ('start' === t.direction && (c.top = !0),
              'end' === t.direction && (c.bottom = !0),
              i.push({ type: 'bounds', pos: t.pos }));
          });
        var f = (function (t) {
            var e = t.props.innerBounds,
              r = tN();
            if (!e) return { boundMap: r, vertical: [], horizontal: [] };
            var n = t.getRect(),
              i = [n.pos1, n.pos2, n.pos3, n.pos4],
              o = te(i, [0, 0]),
              a = e.left,
              s = e.top,
              u = e.width,
              l = e.height,
              c = [
                [a, s],
                [a, s + l],
              ],
              f = [
                [a, s],
                [a + u, s],
              ],
              p = [
                [a + u, s],
                [a + u, s + l],
              ],
              d = [
                [a, s + l],
                [a + u, s + l],
              ],
              g = t3(t, i, [0, 0], !1),
              h = [],
              v = [];
            return (
              g.forEach(function (t) {
                var e = t.line,
                  n = t.lineConstants,
                  i = tZ(o, e),
                  g = i.horizontal,
                  m = i.vertical,
                  b = t1(e, n, f, m, 1, !0),
                  x = t1(e, n, d, m, 1, !0),
                  S = t1(e, n, c, g, 1, !0),
                  y = t1(e, n, p, g, 1, !0);
                b.isBound && !r.top && (h.push(s), (r.top = !0)),
                  x.isBound && !r.bottom && (h.push(s + l), (r.bottom = !0)),
                  S.isBound && !r.left && (v.push(a), (r.left = !0)),
                  y.isBound && !r.right && (v.push(a + u), (r.right = !0));
              }),
              { boundMap: r, horizontal: h, vertical: v }
            );
          })(t),
          p = f.boundMap,
          d = f.vertical,
          g = f.horizontal;
        return (
          d.forEach(function (t) {
            (0, s.cx)(n, function (e) {
              var r = e.type,
                n = e.pos;
              return 'bounds' === r && n === t;
            }) >= 0 || n.push({ type: 'bounds', pos: t });
          }),
          g.forEach(function (t) {
            (0, s.cx)(i, function (e) {
              var r = e.type,
                n = e.pos;
              return 'bounds' === r && n === t;
            }) >= 0 || i.push({ type: 'bounds', pos: t });
          }),
          { boundMap: c, innerBoundMap: p }
        );
      }
      var eR = rp('', ['resizable', 'scalable']),
        eM = 'snapRotationThreshold',
        eP = 'snapRotationDegrees';
      function ez() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return a.tI.apply(void 0, E([k], y(t), !1));
      }
      function eO(t) {
        t();
      }
      function eT(t, e, r) {
        return (0, u.KF)(
          e,
          (0, u.Jm)(r, e),
          t,
          (0, u.Jm)(
            r.map(function (t) {
              return -t;
            }),
            e
          )
        );
      }
      function ew(t) {
        return t ? t.split(' ') : ['0', '0'];
      }
      function eG(t) {
        var e = tx(t)('transform');
        if (e && 'none' !== e) return e;
        if ('transform' in t) {
          var r = t.transform.baseVal;
          if (!r) return '';
          var n = r.length;
          if (!n) return '';
          for (var i = [], o = 0; o < n; ++o)
            !(function (t) {
              var e = r[t].matrix;
              i.push(
                'matrix('.concat(
                  ['a', 'b', 'c', 'd', 'e', 'f']
                    .map(function (t) {
                      return e[t];
                    })
                    .join(', '),
                  ')'
                )
              );
            })(o);
          return i.join(' ');
        }
        return '';
      }
      function eA(t, e, r, n, i) {
        var o,
          a,
          u,
          l,
          c = (0, s.mB)(t) || (0, s.zi)(t),
          f = !1;
        if (!t || r) u = t;
        else {
          var p =
              null === (o = null == t ? void 0 : t.assignedSlot) || void 0 === o
                ? void 0
                : o.parentElement,
            d = t.parentElement;
          p ? ((f = !0), (l = d), (u = p)) : (u = d);
        }
        for (
          var g = !1,
            h = t === e || u === e,
            v = 'relative',
            m = 1,
            b = parseFloat(null == i ? void 0 : i('zoom')) || 1,
            x = null == i ? void 0 : i('position');
          u && u !== c;

        ) {
          e === u && (h = !0);
          var S = tx(u),
            y = u.tagName.toLowerCase(),
            E = eG(u),
            D = S('willChange'),
            C = parseFloat(S('zoom')) || 1;
          if (((v = S('position')), n && 1 !== C)) {
            m = C;
            break;
          }
          if (
            (!r && n && 1 !== b && x && 'absolute' !== x) ||
            'svg' === y ||
            'static' !== v ||
            (E && 'none' !== E) ||
            'transform' === D
          )
            break;
          var R =
              null === (a = null == t ? void 0 : t.assignedSlot) || void 0 === a
                ? void 0
                : a.parentNode,
            M = u.parentNode;
          if ((R && ((f = !0), (l = M)), M && 11 === M.nodeType)) {
            (u = M.host), (g = !0), (v = tx(u)('position'));
            break;
          }
          (u = M), (v = 'relative');
        }
        return {
          offsetZoom: m,
          hasSlot: f,
          parentSlotElement: l,
          isCustomElement: g,
          isStatic: 'static' === v,
          isEnd: h || !u || u === c,
          offsetParent: u || c,
        };
      }
      function eB(t, e) {
        var r = tx(t),
          n = tx((0, s.zi)(t)),
          i = n('position');
        if (!e && (!i || 'static' === i)) return [0, 0];
        var o = parseInt(n('marginLeft'), 10),
          a = parseInt(n('marginTop'), 10);
        return (
          'absolute' === r('position') &&
            (('auto' !== r('top') || 'auto' !== r('bottom')) && (a = 0),
            ('auto' !== r('left') || 'auto' !== r('right')) && (o = 0)),
          [o, a]
        );
      }
      function e_(t) {
        t.forEach(function (t) {
          var e = t.matrix;
          e && (t.matrix = (0, u.mA)(e, 3, 4));
        });
      }
      function ek(t, e) {
        return (
          void 0 === e && (e = t.length > 9),
          ''
            .concat(e ? 'matrix3d' : 'matrix', '(')
            .concat((0, u.pQ)(t, !e).join(','), ')')
        );
      }
      function eI(t) {
        var e = t.clientWidth,
          r = t.clientHeight;
        if (!t)
          return {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            clientWidth: e,
            clientHeight: r,
          };
        var n = t.viewBox,
          i = (n && n.baseVal) || { x: 0, y: 0, width: 0, height: 0 };
        return {
          x: i.x,
          y: i.y,
          width: i.width || e,
          height: i.height || r,
          clientWidth: e,
          clientHeight: r,
        };
      }
      function eF(t, e, r) {
        return (0, u.Kf)(t, (0, u.WK)(e, r), r);
      }
      function eN(t, e, r, n) {
        return [
          [0, 0],
          [e, 0],
          [0, r],
          [e, r],
        ].map(function (e) {
          return eF(t, e, n);
        });
      }
      function eW(t) {
        var e = t.map(function (t) {
            return t[0];
          }),
          r = t.map(function (t) {
            return t[1];
          }),
          n = Math.min.apply(Math, E([], y(e), !1)),
          i = Math.min.apply(Math, E([], y(r), !1)),
          o = Math.max.apply(Math, E([], y(e), !1)),
          a = Math.max.apply(Math, E([], y(r), !1));
        return {
          left: n,
          top: i,
          right: o,
          bottom: a,
          width: o - n,
          height: a - i,
        };
      }
      function eq(t) {
        return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
      }
      function eH(t, e) {
        return eq([e[0] - t[0], e[1] - t[1]]);
      }
      function eY(t, e, r, n) {
        void 0 === r && (r = 1), void 0 === n && (n = (0, s.jv)(t, e));
        var i = eH(t, e);
        return {
          transform: 'translateY(-50%) translate('
            .concat(t[0], 'px, ')
            .concat(t[1], 'px) rotate(')
            .concat(n, 'rad) scaleY(')
            .concat(r, ')'),
          width: ''.concat(i, 'px'),
        };
      }
      function eX(t, e) {
        for (var r = [], n = 2; n < arguments.length; n++)
          r[n - 2] = arguments[n];
        var i = r.length,
          o =
            r.reduce(function (t, e) {
              return t + e[0];
            }, 0) / i,
          a =
            r.reduce(function (t, e) {
              return t + e[1];
            }, 0) / i;
        return {
          transform: 'translateZ(0px) translate('
            .concat(o, 'px, ')
            .concat(a, 'px) rotate(')
            .concat(t, 'rad) scale(')
            .concat(e, ')'),
        };
      }
      function ej(t, e) {
        var r = t[e];
        return (0, s.Kn)(r) ? S(S({}, t), r) : t;
      }
      function eL(t) {
        var e = t && !(0, s.o8)(t.offsetWidth),
          r = 0,
          n = 0,
          i = 0,
          o = 0,
          a = 0,
          u = 0,
          l = 0,
          c = 0,
          f = 0,
          p = 0,
          d = 0,
          g = 0,
          h = 1 / 0,
          v = 1 / 0,
          m = 1 / 0,
          b = 1 / 0,
          x = 0,
          S = 0,
          y = !1;
        if (t) {
          if (e || 'svg' === t.tagName.toLowerCase()) {
            var E = tx(t),
              D = t.style,
              C = 'border-box' === E('boxSizing'),
              R = parseFloat(E('borderLeftWidth')) || 0,
              M = parseFloat(E('borderRightWidth')) || 0,
              P = parseFloat(E('borderTopWidth')) || 0,
              z = parseFloat(E('borderBottomWidth')) || 0,
              O = parseFloat(E('paddingLeft')) || 0,
              T = parseFloat(E('paddingRight')) || 0,
              w = parseFloat(E('paddingTop')) || 0,
              G = parseFloat(E('paddingBottom')) || 0,
              A = O + T,
              B = w + G,
              _ = A + (R + M),
              k = B + (P + z),
              I = E('position'),
              F = 0,
              N = 0;
            if ('clientLeft' in t) {
              var W = null;
              if (
                (W =
                  'absolute' === I
                    ? eA(t, (0, s.zi)(t)).offsetParent
                    : t.parentElement)
              ) {
                var q = tx(W);
                (F = parseFloat(q('width'))), (N = parseFloat(q('height')));
              }
            }
            (f = Math.max(A, (0, s.AA)(E('minWidth'), F) || 0)),
              (p = Math.max(B, (0, s.AA)(E('minHeight'), N) || 0)),
              (h = (0, s.AA)(E('maxWidth'), F)),
              (v = (0, s.AA)(E('maxHeight'), N)),
              isNaN(h) && (h = 1 / 0),
              isNaN(v) && (v = 1 / 0),
              (x = (0, s.AA)(D.width, 0) || 0),
              (S = (0, s.AA)(D.height, 0) || 0),
              (a = parseFloat(E('width')) || 0),
              (u = parseFloat(E('height')) || 0),
              (l = 1 > ry(a - x) ? (0, s.vX)(f, x || a, h) : a),
              (c = 1 > ry(u - S) ? (0, s.vX)(p, S || u, v) : u),
              (r = l),
              (n = c),
              (i = l),
              (o = c),
              C
                ? ((m = h), (b = v), (d = f), (g = p), (l = r - _), (c = n - k))
                : ((m = h + _),
                  (b = v + k),
                  (d = f + _),
                  (g = p + k),
                  (r = l + _),
                  (n = c + k)),
              (i = l + A),
              (o = c + B);
          } else {
            var H = t.getBBox();
            (y = !0),
              (r = H.width),
              (n = H.height),
              (a = r),
              (u = n),
              (l = r),
              (c = n),
              (i = r),
              (o = n);
          }
        }
        return {
          svg: y,
          offsetWidth: r,
          offsetHeight: n,
          clientWidth: i,
          clientHeight: o,
          contentWidth: l,
          contentHeight: c,
          inlineCSSWidth: x,
          inlineCSSHeight: S,
          cssWidth: a,
          cssHeight: u,
          minWidth: f,
          minHeight: p,
          maxWidth: h,
          maxHeight: v,
          minOffsetWidth: d,
          minOffsetHeight: g,
          maxOffsetWidth: m,
          maxOffsetHeight: b,
        };
      }
      function eV(t, e) {
        return (0, s.jv)(e > 0 ? t[0] : t[1], e > 0 ? t[1] : t[0]);
      }
      function eU() {
        return {
          left: 0,
          top: 0,
          width: 0,
          height: 0,
          right: 0,
          bottom: 0,
          clientLeft: 0,
          clientTop: 0,
          clientWidth: 0,
          clientHeight: 0,
          scrollWidth: 0,
          scrollHeight: 0,
        };
      }
      function eK(t, e) {
        var r = t === (0, s.zi)(t) || t === (0, s.mB)(t),
          n = {
            clientLeft: t.clientLeft,
            clientTop: t.clientTop,
            clientWidth: t.clientWidth,
            clientHeight: t.clientHeight,
            scrollWidth: t.scrollWidth,
            scrollHeight: t.scrollHeight,
            overflow: !1,
          };
        return (
          r &&
            ((n.clientHeight = Math.max(e.height, n.clientHeight)),
            (n.scrollHeight = Math.max(e.height, n.scrollHeight))),
          (n.overflow = 'visible' !== tx(t)('overflow')),
          S(S({}, e), n)
        );
      }
      function eJ(t, e, r, n) {
        var i = t.left,
          o = t.right,
          a = t.top,
          s = t.bottom,
          u = e.top,
          l = e.left,
          c = {
            left: l + i,
            top: u + a,
            right: l + o,
            bottom: u + s,
            width: o - i,
            height: s - a,
          };
        return r && n ? eK(r, c) : c;
      }
      function eZ(t, e) {
        var r = 0,
          n = 0,
          i = 0,
          o = 0;
        if (t) {
          var a = t.getBoundingClientRect();
          (r = a.left), (n = a.top), (i = a.width), (o = a.height);
        }
        var s = {
          left: r,
          top: n,
          width: i,
          height: o,
          right: r + i,
          bottom: n + o,
        };
        return t && e ? eK(t, s) : s;
      }
      function e$(t, e, r, n) {
        return t || (e ? [0, 0] : eQ(r.target, n));
      }
      function eQ(t, e) {
        if (t) {
          var r = t.getAttribute('data-rotation') || '',
            n = t.getAttribute('data-direction');
          if (((e.deg = r), n)) {
            var i = [0, 0];
            return (
              n.indexOf('w') > -1 && (i[0] = -1),
              n.indexOf('e') > -1 && (i[0] = 1),
              n.indexOf('n') > -1 && (i[1] = -1),
              n.indexOf('s') > -1 && (i[1] = 1),
              i
            );
          }
        }
      }
      function e0(t, e) {
        return [
          (0, u.PD)(e, t[0]),
          (0, u.PD)(e, t[1]),
          (0, u.PD)(e, t[2]),
          (0, u.PD)(e, t[3]),
        ];
      }
      function e1(t) {
        var e = t.left,
          r = t.top;
        return e0([t.pos1, t.pos2, t.pos3, t.pos4], [e, r]);
      }
      function e2(t, e) {
        t[e ? 'controlAbles' : 'targetAbles'].forEach(function (e) {
          e.unset && e.unset(t);
        });
      }
      function e3(t, e) {
        var r = e ? 'controlGesto' : 'targetGesto',
          n = t[r];
        (null == n ? void 0 : n.isIdle()) === !1 && e2(t, e),
          null == n || n.unset(),
          (t[r] = null);
      }
      function e4(t, e) {
        if (e) {
          var r = ts(e);
          r.nextStyle = S(S({}, r.nextStyle), t);
        }
        return {
          style: t,
          cssText: (0, s.RR)(t)
            .map(function (e) {
              return ''.concat((0, s.wV)(e, '-'), ': ').concat(t[e], ';');
            })
            .join(''),
        };
      }
      function e5(t, e, r) {
        var n = e.afterTransform || e.transform;
        return S(
          S({}, e4(S(S(S({}, t.style), e.style), { transform: n }), r)),
          { afterTransform: n, transform: t.transform }
        );
      }
      function e9(t, e, r, n) {
        var i = e.datas;
        i.datas || (i.datas = {});
        var o = S(S({}, r), {
          target: t.state.target,
          clientX: e.clientX,
          clientY: e.clientY,
          inputEvent: e.inputEvent,
          currentTarget: t,
          moveable: t,
          datas: i.datas,
          isRequest: e.isRequest,
          isRequestChild: e.isRequestChild,
          isFirstDrag: !!e.isFirstDrag,
          isTrusted: !1 !== e.isTrusted,
          stopAble: function () {
            i.isEventStart = !1;
          },
          stopDrag: function () {
            var t;
            null === (t = e.stop) || void 0 === t || t.call(e);
          },
        });
        return (
          i.isStartEvent ? n || (i.lastEvent = o) : (i.isStartEvent = !0), o
        );
      }
      function e6(t, e, r) {
        var n = e.datas,
          i = 'isDrag' in r ? r.isDrag : e.isDrag;
        return (
          n.datas || (n.datas = {}),
          S(S({ isDrag: i }, r), {
            moveable: t,
            target: t.state.target,
            clientX: e.clientX,
            clientY: e.clientY,
            inputEvent: e.inputEvent,
            currentTarget: t,
            lastEvent: n.lastEvent,
            isDouble: e.isDouble,
            datas: n.datas,
            isFirstDrag: !!e.isFirstDrag,
          })
        );
      }
      function e8(t, e, r) {
        t._emitter.on(e, r);
      }
      function e7(t, e, r, n, i) {
        return t.triggerEvent(e, r, n, i);
      }
      function rt(t, e) {
        return (0, s.Jj)(t).getComputedStyle(t, e);
      }
      function re(t, e, r) {
        var n = {},
          i = {};
        return t.filter(function (t) {
          var o = t.name;
          if (
            n[o] ||
            !e.some(function (e) {
              return t[e];
            })
          )
            return !1;
          if (!r && t.ableGroup) {
            if (i[t.ableGroup]) return !1;
            i[t.ableGroup] = !0;
          }
          return (n[o] = !0), !0;
        });
      }
      function rr(t, e) {
        return t === e || (null == t && null == e);
      }
      function rn(t, e) {
        var r = [],
          n = [];
        return (
          t.forEach(function (i, o) {
            var a = e(i, o, t),
              s = n.indexOf(a),
              u = r[s] || [];
            -1 === s && (n.push(a), r.push(u)), u.push(i);
          }),
          r
        );
      }
      function ri(t) {
        return t.reduce(function (t, e) {
          return t.concat(e);
        }, []);
      }
      function ro() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return (
          t.sort(function (t, e) {
            return ry(e) - ry(t);
          }),
          t[0]
        );
      }
      function ra(t, e, r) {
        return (0, u.Kf)((0, u.U_)(t, r), (0, u.WK)(e, r), r);
      }
      function rs(t, e) {
        var r,
          n = t.is3d;
        return (
          (r = y(ra(t.rootMatrix, [e.distX, e.distY], n ? 4 : 3), 2)),
          (e.distX = r[0]),
          (e.distY = r[1]),
          e
        );
      }
      function ru(t, e, r, n) {
        if (!r[0] && !r[1]) return e;
        var i,
          o,
          a = eF(t, [(i = r[0]) ? i / ry(i) : 0, 0], n),
          s = eF(t, [0, (o = r[1]) ? o / ry(o) : 0], n),
          l = eF(t, [r[0] / eq(a), r[1] / eq(s)], n);
        return (0, u.PD)(e, l);
      }
      function rl(t, e, r) {
        return r ? ''.concat((t / e) * 100, '%') : ''.concat(t, 'px');
      }
      function rc(t) {
        return 1e-7 >= ry(t) ? 0 : t;
      }
      function rf(t) {
        return function (e) {
          if (!e.isDragging(t)) return '';
          var r,
            n,
            i,
            o = ((n = e.targetGesto),
            (i = e.controlGesto),
            (null == n ? void 0 : n.isFlag()) && (r = n.getEventData()[t]),
            !r &&
              (null == i ? void 0 : i.isFlag()) &&
              (r = i.getEventData()[t]),
            r || {}).deg;
          return o ? ez('view-control-rotation'.concat(o)) : '';
        };
      }
      function rp(t, e) {
        return (
          void 0 === e && (e = [t]),
          function (r, n) {
            if (n.isRequest)
              return (
                !!e.some(function (t) {
                  return n.requestAble === t;
                }) && n.parentDirection
              );
            var i = n.inputEvent.target;
            return (0, s.pv)(i, ez('direction')) && (!t || (0, s.pv)(i, ez(t)));
          }
        );
      }
      function rd(t, e) {
        return t
          ? (0, s.UG)(t)
            ? t
            : (0, s.HD)(t)
              ? e
                ? document.querySelector(t)
                : t
              : (0, s.mf)(t)
                ? t()
                : (0, s.FJ)(t)
                  ? t
                  : 'current' in t
                    ? t.current
                    : t
          : null;
      }
      function rg(t, e) {
        return t
          ? (!(!t || !(0, s.Kn)(t) || (0, s.UG)(t)) &&
            ((0, s.kJ)(t) || 'length' in t)
              ? [].slice.call(t)
              : [t]
            ).reduce(function (t, r) {
              return (0, s.HD)(r) && e
                ? E(
                    E([], y(t), !1),
                    y([].slice.call(document.querySelectorAll(r))),
                    !1
                  )
                : ((0, s.kJ)(r) ? t.push(rg(r, e)) : t.push(rd(r, e)), t);
            }, [])
          : [];
      }
      function rh(t, e) {
        var r = t.rootMatrix,
          n = t.is3d,
          i = (0, u.U_)(r, n ? 4 : 3);
        return (
          n || (i = (0, u.mA)(i, 3, 4)),
          (i[12] = 0),
          (i[13] = 0),
          (i[14] = 0),
          (0, l.A8)(i, e)
        );
      }
      function rv(t, e, r, n, i) {
        var o = y(t, 2),
          a = o[0],
          u = o[1],
          l = 0,
          c = 0;
        if (i && a && u) {
          var f = Math.cos((0, s.jv)([0, 0], e) - (0, s.jv)([0, 0], n)) * eq(e);
          if (n[0]) {
            if (n[1]) {
              var p = n[0] * a,
                d = n[1] * u,
                g = Math.atan2(p + e[0], d + e[1]),
                h = Math.atan2(p, d);
              g < 0 && (g += 2 * Math.PI), h < 0 && (h += 2 * Math.PI);
              var v = 0;
              ry(g - h) < Math.PI / 2 ||
                ry(g - h) > (Math.PI / 2) * 3 ||
                (h += Math.PI),
                (v = g - h) > 2 * Math.PI
                  ? (v -= 2 * Math.PI)
                  : v > Math.PI
                    ? (v = 2 * Math.PI - v)
                    : v < -Math.PI && (v = -2 * Math.PI - v);
              var m = eq([p + e[0], d + e[1]]) * Math.cos(v);
              (l = m * Math.sin(h) - p),
                (c = m * Math.cos(h) - d),
                n[0] < 0 && (l *= -1),
                n[1] < 0 && (c *= -1);
            } else c = (l = f) / r;
          } else l = (c = f) * r;
        } else (l = n[0] * e[0]), (c = n[1] * e[1]);
        return [l, c];
      }
      function rm(t, e, r, n) {
        var i,
          o = r.ratio,
          a = r.startOffsetWidth,
          u = r.startOffsetHeight,
          l = 0,
          c = 0,
          f = n.distX,
          p = n.distY,
          d = n.pinchScale,
          g = n.parentDistance,
          h = n.parentDist,
          v = n.parentScale,
          m = r.fixedDirection,
          b = [0, 1].map(function (e) {
            return ry(t[e] - m[e]);
          }),
          x = [0, 1].map(function (t) {
            var e = b[t];
            return 0 !== e && (e = 2 / e), e;
          });
        if (h)
          (l = h[0]), (c = h[1]), e && (l ? c || (c = l / o) : (l = c * o));
        else if ((0, s.hj)(d)) (l = (d - 1) * a), (c = (d - 1) * u);
        else if (v) (l = (v[0] - 1) * a), (c = (v[1] - 1) * u);
        else if (g) {
          var S = a * b[0],
            E = u * b[1],
            D = eq([S, E]);
          (l = (g / D) * S * x[0]), (c = (g / D) * E * x[1]);
        } else {
          var C = Q({ datas: r, distX: f, distY: p });
          (l = (i = y(
            rv(
              [a, u],
              (C = x.map(function (t, e) {
                return C[e] * t;
              })),
              o,
              t,
              e
            ),
            2
          ))[0]),
            (c = i[1]);
        }
        return { distWidth: l, distHeight: c };
      }
      function rb(t, e, r) {
        var n = (function t(e, r) {
            if (r) {
              if ('left' === e) return { x: '0%', y: '50%' };
              if ('top' === e) return { x: '50%', y: '50%' };
              if ('center' === e) return { x: '50%', y: '50%' };
              if ('right' === e) return { x: '100%', y: '50%' };
              else if ('bottom' === e) return { x: '50%', y: '100%' };
              var n = y(e.split(' '), 2),
                i = n[0],
                o = n[1],
                a = t(i || ''),
                s = t(o || ''),
                u = S(S({}, a), s),
                l = { x: '50%', y: '50%' };
              return (
                u.x && (l.x = u.x),
                u.y && (l.y = u.y),
                u.value &&
                  (u.x && !u.y && (l.y = u.value),
                  !u.x && u.y && (l.x = u.value)),
                l
              );
            }
            return 'left' === e
              ? { x: '0%' }
              : 'right' === e
                ? { x: '100%' }
                : 'top' === e
                  ? { y: '0%' }
                  : 'bottom' === e
                    ? { y: '100%' }
                    : e
                      ? 'center' === e
                        ? { value: '50%' }
                        : { value: e }
                      : {};
          })(t, !0),
          i = n.x,
          o = n.y;
        return [(0, s.AA)(i, e) || 0, (0, s.AA)(o, r) || 0];
      }
      function rx(t, e, r, n, i) {
        var o = t._store,
          a = o[e];
        if (!(e in o)) {
          if (null == i) return (o[e] = r), r;
          (o[e] = i), (a = i);
        }
        return a === r || n(a) === n(r) ? a : ((o[e] = r), r);
      }
      function rS(t) {
        return t >= 0 ? 1 : -1;
      }
      function ry(t) {
        return Math.abs(t);
      }
      function rE(t, e) {
        return (0, s.cL)(t).map(function (t) {
          return e(t);
        });
      }
      function rD(t) {
        return (0, s.hj)(t)
          ? { top: t, left: t, right: t, bottom: t }
          : {
              left: t.left || 0,
              top: t.top || 0,
              right: t.right || 0,
              bottom: t.bottom || 0,
            };
      }
      var rC = D('pinchable', {
          props: ['pinchable'],
          events: [
            'pinchStart',
            'pinch',
            'pinchEnd',
            'pinchGroupStart',
            'pinchGroup',
            'pinchGroupEnd',
          ],
          dragStart: function () {
            return !0;
          },
          pinchStart: function (t, e) {
            var r = e.datas,
              n = e.targets,
              i = e.angle,
              o = e.originalDatas,
              a = t.props,
              s = a.pinchable,
              u = a.ables;
            if (!s) return !1;
            var l = 'drag'.concat(n ? 'Group' : '', 'ControlStart'),
              c = (
                !0 === s
                  ? t.controlAbles
                  : u.filter(function (t) {
                      return s.indexOf(t.name) > -1;
                    })
              ).filter(function (t) {
                return t.canPinch && t[l];
              }),
              f = e9(t, e, {});
            n && (f.targets = n);
            var p = e7(t, 'onPinch'.concat(n ? 'Group' : '', 'Start'), f);
            (r.isPinch = !1 !== p), (r.ables = c);
            var d = r.isPinch;
            return (
              !!d &&
              (c.forEach(function (r) {
                if (((o[r.name] = o[r.name] || {}), r[l])) {
                  var n = S(S({}, e), {
                    datas: o[r.name],
                    parentRotate: i,
                    isPinch: !0,
                  });
                  r[l](t, n);
                }
              }),
              (t.state.snapRenderInfo = {
                request: e.isRequest,
                direction: [0, 0],
              }),
              d)
            );
          },
          pinch: function (t, e) {
            var r = e.datas,
              n = e.scale,
              i = e.distance,
              o = e.originalDatas,
              a = e.inputEvent,
              s = e.targets,
              u = e.angle;
            if (r.isPinch) {
              var l = i * (1 - 1 / n),
                c = e9(t, e, {});
              s && (c.targets = s),
                e7(t, 'onPinch'.concat(s ? 'Group' : ''), c);
              var f = r.ables,
                p = 'drag'.concat(s ? 'Group' : '', 'Control');
              return (
                f.forEach(function (r) {
                  r[p] &&
                    r[p](
                      t,
                      S(S({}, e), {
                        datas: o[r.name],
                        inputEvent: a,
                        resolveMatrix: !0,
                        pinchScale: n,
                        parentDistance: l,
                        parentRotate: u,
                        isPinch: !0,
                      })
                    );
                }),
                c
              );
            }
          },
          pinchEnd: function (t, e) {
            var r = e.datas,
              n = e.isPinch,
              i = e.inputEvent,
              o = e.targets,
              a = e.originalDatas;
            if (r.isPinch) {
              var s = e6(t, e, { isDrag: n });
              o && (s.targets = o),
                e7(t, 'onPinch'.concat(o ? 'Group' : '', 'End'), s);
              var u = r.ables,
                l = 'drag'.concat(o ? 'Group' : '', 'ControlEnd');
              return (
                u.forEach(function (r) {
                  r[l] &&
                    r[l](
                      t,
                      S(S({}, e), {
                        isDrag: n,
                        datas: a[r.name],
                        inputEvent: i,
                        isPinch: !0,
                      })
                    );
                }),
                n
              );
            }
          },
          pinchGroupStart: function (t, e) {
            return this.pinchStart(
              t,
              S(S({}, e), { targets: t.props.targets })
            );
          },
          pinchGroup: function (t, e) {
            return this.pinch(t, S(S({}, e), { targets: t.props.targets }));
          },
          pinchGroupEnd: function (t, e) {
            return this.pinchEnd(t, S(S({}, e), { targets: t.props.targets }));
          },
        }),
        rR = rp('scalable'),
        rM = {
          name: 'scalable',
          ableGroup: 'size',
          canPinch: !0,
          props: [
            'scalable',
            'throttleScale',
            'renderDirections',
            'keepRatio',
            'edge',
            'displayAroundControls',
          ],
          events: [
            'scaleStart',
            'beforeScale',
            'scale',
            'scaleEnd',
            'scaleGroupStart',
            'beforeScaleGroup',
            'scaleGroup',
            'scaleGroupEnd',
          ],
          render: tz('scalable'),
          dragControlCondition: rR,
          viewClassName: rf('scalable'),
          dragControlStart: function (t, e) {
            var r = e.datas,
              n = e.isPinch,
              i = e.inputEvent,
              o = e$(e.parentDirection, n, i, r),
              a = t.state,
              u = a.width,
              l = a.height,
              c = a.targetTransform,
              f = a.target,
              p = a.pos1,
              d = a.pos2,
              g = a.pos4;
            if (!o || !f) return !1;
            n || U(t, e),
              (r.datas = {}),
              (r.transform = c),
              (r.prevDist = [1, 1]),
              (r.direction = o),
              (r.startOffsetWidth = u),
              (r.startOffsetHeight = l),
              (r.startValue = [1, 1]);
            var h = (!o[0] && !o[1]) || o[0] || !o[1];
            function v(t) {
              r.ratio = t && isFinite(t) ? t : 0;
            }
            function m(t) {
              var e = ee(r.startPositions, t);
              (r.fixedDirection = e.fixedDirection),
                (r.fixedPosition = e.fixedPosition),
                (r.fixedOffset = e.fixedOffset);
            }
            ti(t, e, 'scale'),
              (r.isWidth = h),
              (r.startPositions = e1(t.state)),
              (r.setFixedDirection = m),
              v((0, s.zt)(p, d) / (0, s.zt)(d, g)),
              m([-o[0], -o[1]]);
            var b = function (t) {
                r.minScaleSize = t;
              },
              x = function (t) {
                r.maxScaleSize = t;
              };
            b([-1 / 0, -1 / 0]), x([1 / 0, 1 / 0]);
            var y = e9(
                t,
                e,
                S(
                  S(
                    {
                      direction: o,
                      set: function (t) {
                        r.startValue = t;
                      },
                      setRatio: v,
                      setFixedDirection: m,
                      setMinScaleSize: b,
                      setMaxScaleSize: x,
                    },
                    tn(t, e)
                  ),
                  { dragStart: et.dragStart(t, new j().dragStart([0, 0], e)) }
                )
              ),
              E = e7(t, 'onScaleStart', y);
            return (
              (r.startFixedDirection = r.fixedDirection),
              !1 !== E &&
                ((r.isScale = !0),
                (t.state.snapRenderInfo = {
                  request: e.isRequest,
                  direction: o,
                })),
              !!r.isScale && y
            );
          },
          dragControl: function (t, e) {
            K(t, e, 'scale');
            var r,
              n,
              i = e.datas,
              o = e.parentKeepRatio,
              a = e.parentFlag,
              l = e.isPinch,
              c = e.dragClient,
              f = e.isRequest,
              p = e.useSnap,
              d = e.resolveMatrix,
              g = i.prevDist,
              h = i.direction,
              v = i.startOffsetWidth,
              m = i.startOffsetHeight,
              b = i.isScale,
              x = i.startValue,
              y = i.isWidth,
              E = i.ratio;
            if (!b) return !1;
            var D = t.props,
              C = D.throttleScale,
              R = D.parentMoveable,
              M = h;
            h[0] || h[1] || (M = [1, 1]);
            var P = (E && (null != o ? o : D.keepRatio)) || !1,
              z = t.state,
              O = [x[0], x[1]];
            function T() {
              var t = rm(M, P, i, e),
                r = t.distWidth,
                n = t.distHeight,
                o = v ? (v + r) / v : 1,
                a = m ? (m + n) / m : 1;
              x[0] || (O[0] = r / v), x[1] || (O[1] = n / m);
              var s = (M[0] || P ? o : 1) * O[0],
                u = (M[1] || P ? a : 1) * O[1];
              return (
                0 === s && (s = 1e-9 * rS(g[0])),
                0 === u && (u = 1e-9 * rS(g[1])),
                [s, u]
              );
            }
            var w = T();
            if (!l && t.props.groupable) {
              var G = (z.snapRenderInfo || {}).direction;
              (0, s.kJ)(G) &&
                (G[0] || G[1]) &&
                (z.snapRenderInfo = { direction: h, request: e.isRequest });
            }
            e7(
              t,
              'onBeforeScale',
              e9(
                t,
                e,
                {
                  scale: w,
                  setFixedDirection: function (t) {
                    return i.setFixedDirection(t), (w = T());
                  },
                  startFixedDirection: i.startFixedDirection,
                  setScale: function (t) {
                    w = t;
                  },
                },
                !0
              )
            );
            var A = [w[0] / O[0], w[1] / O[1]],
              B = c,
              _ = [0, 0],
              k = !c && !a && l;
            if (
              (k || d
                ? (B = tp(t, i.targetAllTransform, [0, 0], [0, 0], i))
                : c || (B = i.fixedPosition),
              l ||
                (_ = (function (t, e, r, n, i) {
                  if (!tW(t, 'scalable')) return [0, 0];
                  var o = i.startOffsetWidth,
                    a = i.startOffsetHeight,
                    s = i.fixedPosition,
                    l = i.fixedDirection,
                    c = i.is3d,
                    f = eS(
                      t,
                      function (t, r) {
                        var n, f, p, d, g, h, v;
                        return ex(
                          ((n = (0, u.PD)(e, [t / o, r / a])),
                          (f = i.transformOrigin),
                          (p = i.offsetMatrix),
                          (d = i.is3d),
                          (g = i.targetMatrix),
                          (h = i.targetAllTransform),
                          (v = d ? 4 : 3),
                          tr(p, (0, u.ml)(h || g, (0, u.Wi)(n, v), v), f, v)),
                          o,
                          a,
                          l,
                          s,
                          c
                        );
                      },
                      o,
                      a,
                      r,
                      s,
                      n,
                      i
                    );
                  return [f[0] / o, f[1] / a];
                })(t, A, h, !p && f, i)),
              P)
            ) {
              M[0] &&
                M[1] &&
                _[0] &&
                _[1] &&
                (Math.abs(_[0] * v) > Math.abs(_[1] * m)
                  ? (_[1] = 0)
                  : (_[0] = 0));
              var I = !_[0] && !_[1];
              if (
                (I &&
                  (y
                    ? (A[0] = (0, s.P2)(A[0] * O[0], C) / O[0])
                    : (A[1] = (0, s.P2)(A[1] * O[1], C) / O[1])),
                (M[0] && !M[1]) || (_[0] && !_[1]) || (I && y))
              ) {
                A[0] += _[0];
                var F = (v * A[0] * O[0]) / E;
                A[1] = F / m / O[1];
              } else if ((!M[0] && M[1]) || (!_[0] && _[1]) || (I && !y)) {
                A[1] += _[1];
                var N = m * A[1] * O[1] * E;
                A[0] = N / v / O[0];
              }
            } else
              (A[0] += _[0]),
                (A[1] += _[1]),
                _[0] || (A[0] = (0, s.P2)(A[0] * O[0], C) / O[0]),
                _[1] || (A[1] = (0, s.P2)(A[1] * O[1], C) / O[1]);
            0 === A[0] && (A[0] = 1e-9 * rS(g[0])),
              0 === A[1] && (A[1] = 1e-9 * rS(g[1])),
              (r = A),
              (n = [O[0], O[1]]);
            var W = [v, m],
              q = [v * (w = [r[0] * n[0], r[1] * n[1]])[0], m * w[1]];
            (q = (0, s.F1)(q, i.minScaleSize, i.maxScaleSize, !!P && E)),
              (w = rE(2, function (t) {
                return W[t] ? q[t] / W[t] : q[t];
              })),
              (A = rE(2, function (t) {
                return w[t] / O[t];
              }));
            var H = rE(2, function (t) {
                return g[t] ? A[t] / g[t] : A[t];
              }),
              Y = 'scale('.concat(A.join(', '), ')'),
              X = 'scale('.concat(w.join(', '), ')'),
              j = J(i, X, Y),
              L = !x[0] || !x[1],
              V = td(t, L ? X : Y, i.fixedDirection, B, i.fixedOffset, i, L),
              U = k ? V : (0, u.h9)(V, i.prevInverseDist || [0, 0]);
            if (
              ((i.prevDist = A),
              (i.prevInverseDist = V),
              w[0] === g[0] &&
                w[1] === g[1] &&
                U.every(function (t) {
                  return !t;
                }) &&
                !R &&
                !k)
            )
              return !1;
            var Z = e9(
              t,
              e,
              S(
                {
                  offsetWidth: v,
                  offsetHeight: m,
                  direction: h,
                  scale: w,
                  dist: A,
                  delta: H,
                  isPinch: !!l,
                },
                tf(t, j, U, l, e)
              )
            );
            return e7(t, 'onScale', Z), Z;
          },
          dragControlEnd: function (t, e) {
            var r = e.datas;
            if (!r.isScale) return !1;
            r.isScale = !1;
            var n = e6(t, e, {});
            return e7(t, 'onScaleEnd', n), n;
          },
          dragGroupControlCondition: rR,
          dragGroupControlStart: function (t, e) {
            var r = e.datas,
              n = this.dragControlStart(t, e);
            if (!n) return !1;
            var i = tS(t, 'resizable', e);
            r.moveableScale = t.scale;
            var o = tE(t, this, 'dragControlStart', e, function (e, n) {
                return tD(t, e, r, n);
              }),
              a = function (e) {
                n.setFixedDirection(e),
                  o.forEach(function (n, o) {
                    n.setFixedDirection(e), tD(t, n.moveable, r, i[o]);
                  });
              };
            r.setFixedDirection = a;
            var s = S(S({}, n), {
                targets: t.props.targets,
                events: o,
                setFixedDirection: a,
              }),
              u = e7(t, 'onScaleGroupStart', s);
            return (r.isScale = !1 !== u), !!r.isScale && s;
          },
          dragGroupControl: function (t, e) {
            var r = e.datas;
            if (r.isScale) {
              e8(t, 'onBeforeScale', function (r) {
                e7(
                  t,
                  'onBeforeScaleGroup',
                  e9(t, e, S(S({}, r), { targets: t.props.targets }), !0)
                );
              });
              var n = this.dragControl(t, e);
              if (n) {
                var i = n.dist,
                  o = r.moveableScale;
                t.scale = [i[0] * o[0], i[1] * o[1]];
                var a = t.props.keepRatio,
                  s = r.fixedPosition,
                  l = tE(t, this, 'dragControl', e, function (e, r) {
                    var n = y(
                        (0, u.Kf)(
                          (0, u.sQ)((t.rotation / 180) * Math.PI, 3),
                          [
                            r.datas.originalX * i[0],
                            r.datas.originalY * i[1],
                            1,
                          ],
                          3
                        ),
                        2
                      ),
                      o = n[0],
                      l = n[1];
                    return S(S({}, r), {
                      parentDist: null,
                      parentScale: i,
                      parentKeepRatio: a,
                      dragClient: (0, u.PD)(s, [o, l]),
                    });
                  }),
                  c = S({ targets: t.props.targets, events: l }, n);
                return e7(t, 'onScaleGroup', c), c;
              }
            }
          },
          dragGroupControlEnd: function (t, e) {
            var r = e.isDrag;
            if (e.datas.isScale) {
              this.dragControlEnd(t, e);
              var n = tE(t, this, 'dragControlEnd', e),
                i = e6(t, e, { targets: t.props.targets, events: n });
              return e7(t, 'onScaleGroupEnd', i), r;
            }
          },
          request: function () {
            var t = {},
              e = 0,
              r = 0,
              n = !1;
            return {
              isControl: !0,
              requestStart: function (e) {
                return (
                  (n = e.useSnap),
                  {
                    datas: t,
                    parentDirection: e.direction || [1, 1],
                    useSnap: n,
                  }
                );
              },
              request: function (i) {
                return (
                  (e += i.deltaWidth),
                  (r += i.deltaHeight),
                  {
                    datas: t,
                    parentDist: [e, r],
                    parentKeepRatio: i.keepRatio,
                    useSnap: n,
                  }
                );
              },
              requestEnd: function () {
                return { datas: t, isDrag: !0, useSnap: n };
              },
            };
          },
        };
      function rP(t, e) {
        return t.map(function (t, r) {
          return (0, s.AK)(t, e[r], 1, 2);
        });
      }
      function rz(t, e, r) {
        var n = (0, s.jv)(t, e),
          i = (0, s.jv)(t, r) - n;
        return i >= 0 ? i : i + 2 * Math.PI;
      }
      var rO = {
          name: 'warpable',
          ableGroup: 'size',
          props: [
            'warpable',
            'renderDirections',
            'edge',
            'displayAroundControls',
          ],
          events: ['warpStart', 'warp', 'warpEnd'],
          viewClassName: rf('warpable'),
          render: function (t, e) {
            var r = t.props,
              n = r.resizable,
              i = r.scalable,
              o = r.warpable,
              a = r.zoom;
            if (n || i || !o) return [];
            var s = t.state,
              u = s.pos1,
              l = s.pos2,
              c = s.pos3,
              f = s.pos4,
              p = rP(u, l),
              d = rP(l, u),
              g = rP(u, c),
              h = rP(c, u),
              v = rP(c, f),
              m = rP(f, c),
              b = rP(l, f),
              x = rP(f, l);
            return E(
              [
                e.createElement('div', {
                  className: ez('line'),
                  key: 'middeLine1',
                  style: eY(p, v, a),
                }),
                e.createElement('div', {
                  className: ez('line'),
                  key: 'middeLine2',
                  style: eY(d, m, a),
                }),
                e.createElement('div', {
                  className: ez('line'),
                  key: 'middeLine3',
                  style: eY(g, b, a),
                }),
                e.createElement('div', {
                  className: ez('line'),
                  key: 'middeLine4',
                  style: eY(h, x, a),
                }),
              ],
              y(tR(t, R, 'warpable', e)),
              !1
            );
          },
          dragControlCondition: function (t, e) {
            if (e.isRequest) return !1;
            var r = e.inputEvent.target;
            return (
              (0, s.pv)(r, ez('direction')) && (0, s.pv)(r, ez('warpable'))
            );
          },
          dragControlStart: function (t, e) {
            var r = e.datas,
              n = e.inputEvent,
              i = t.props.target,
              o = eQ(n.target, r);
            if (!o || !i) return !1;
            var a = t.state,
              s = a.transformOrigin,
              l = a.is3d,
              c = a.targetTransform,
              f = a.targetMatrix,
              p = a.width,
              d = a.height,
              g = a.left,
              h = a.top;
            (r.datas = {}),
              (r.targetTransform = c),
              (r.warpTargetMatrix = l ? f : (0, u.mA)(f, 3, 4)),
              (r.targetInverseMatrix = (0, u.Xj)(
                (0, u.U_)(r.warpTargetMatrix, 4),
                3,
                4
              )),
              (r.direction = o),
              (r.left = g),
              (r.top = h),
              (r.poses = [
                [0, 0],
                [p, 0],
                [0, d],
                [p, d],
              ].map(function (t) {
                return (0, u.h9)(t, s);
              })),
              (r.nextPoses = r.poses.map(function (t) {
                var e = y(t, 2),
                  n = e[0],
                  i = e[1];
                return (0, u.Kf)(r.warpTargetMatrix, [n, i, 0, 1], 4);
              })),
              (r.startValue = (0, u.Te)(4)),
              (r.prevMatrix = (0, u.Te)(4)),
              (r.absolutePoses = e1(a)),
              (r.posIndexes = tt(o)),
              U(t, e),
              ti(t, e, 'matrix3d'),
              (a.snapRenderInfo = { request: e.isRequest, direction: o });
            var v = e9(
              t,
              e,
              S(
                {
                  set: function (t) {
                    r.startValue = t;
                  },
                },
                tn(t, e)
              )
            );
            return !1 !== e7(t, 'onWarpStart', v) && (r.isWarp = !0), r.isWarp;
          },
          dragControl: function (t, e) {
            var r = e.datas,
              n = e.isRequest,
              i = e.distX,
              o = e.distY,
              a = r.targetInverseMatrix,
              s = r.prevMatrix,
              l = r.isWarp,
              c = r.startValue,
              f = r.poses,
              p = r.posIndexes,
              d = r.absolutePoses;
            if (!l) return !1;
            if ((K(t, e, 'matrix3d'), tW(t, 'warpable'))) {
              var g = p.map(function (t) {
                return d[t];
              });
              g.length > 1 &&
                g.push([(g[0][0] + g[1][0]) / 2, (g[0][1] + g[1][1]) / 2]);
              var h = t6(t, n, {
                  horizontal: g.map(function (t) {
                    return t[1] + o;
                  }),
                  vertical: g.map(function (t) {
                    return t[0] + i;
                  }),
                }),
                v = h.horizontal,
                m = h.vertical;
              (o -= v.offset), (i -= m.offset);
            }
            var b = Q({ datas: r, distX: i, distY: o }, !0),
              x = r.nextPoses.slice();
            if (
              (p.forEach(function (t) {
                x[t] = (0, u.PD)(x[t], b);
              }),
              !N.every(function (t) {
                var e, r, n, i, o;
                return (
                  (e = t.map(function (t) {
                    return f[t];
                  })),
                  (r = t.map(function (t) {
                    return x[t];
                  })),
                  (n = rz(e[0], e[1], e[2])),
                  (i = rz(r[0], r[1], r[2])),
                  (!(n >= (o = Math.PI)) || !(i <= o)) &&
                    (!(n <= o) || !(i >= o))
                );
              }))
            )
              return !1;
            var y = (0, u.mX)(f[0], f[2], f[1], f[3], x[0], x[2], x[1], x[3]);
            if (!y.length) return !1;
            var E = Z(r, (0, u.ml)(a, y, 4), !0),
              D = (0, u.ml)((0, u.U_)(s, 4), E, 4);
            r.prevMatrix = E;
            var C = (0, u.ml)(c, E, 4),
              R = J(
                r,
                'matrix3d('.concat(C.join(', '), ')'),
                'matrix3d('.concat(E.join(', '), ')')
              );
            return (
              ta(e, R),
              e7(
                t,
                'onWarp',
                e9(
                  t,
                  e,
                  S(
                    {
                      delta: D,
                      matrix: C,
                      dist: E,
                      multiply: u.ml,
                      transform: R,
                    },
                    e4({ transform: R }, e)
                  )
                )
              ),
              !0
            );
          },
          dragControlEnd: function (t, e) {
            var r = e.datas,
              n = e.isDrag;
            return (
              !!r.isWarp &&
              ((r.isWarp = !1), e7(t, 'onWarpEnd', e6(t, e, {})), n)
            );
          },
        },
        rT = ez('area-pieces'),
        rw = ez('area-piece'),
        rG = ez('avoid'),
        rA = ez('view-dragging');
      function rB(t) {
        var e = t.areaElement;
        if (e) {
          var r = t.state,
            n = r.width,
            i = r.height;
          (0, s.IV)(e, rG),
            (e.style.cssText += 'left: 0px; top: 0px; width: '
              .concat(n, 'px; height: ')
              .concat(i, 'px'));
        }
      }
      function r_(t) {
        return t.createElement(
          'div',
          { key: 'area_pieces', className: rT },
          t.createElement('div', { className: rw }),
          t.createElement('div', { className: rw }),
          t.createElement('div', { className: rw }),
          t.createElement('div', { className: rw })
        );
      }
      var rk = {
          name: 'dragArea',
          props: ['dragArea', 'passDragArea'],
          events: ['click', 'clickGroup'],
          render: function (t, e) {
            var r = t.props,
              n = r.target,
              i = r.dragArea,
              o = r.groupable,
              s = r.passDragArea,
              l = t.getState(),
              c = l.width,
              f = l.height,
              p = l.renderPoses,
              d = s ? ez('area', 'pass') : ez('area');
            if (o)
              return [
                e.createElement('div', {
                  key: 'area',
                  ref: (0, a.iH)(t, 'areaElement'),
                  className: d,
                }),
                r_(e),
              ];
            if (!n || !i) return [];
            var g = (0, u.mX)(
                [0, 0],
                [c, 0],
                [0, f],
                [c, f],
                p[0],
                p[1],
                p[2],
                p[3]
              ),
              h = g.length ? ek(g, !0) : 'none';
            return [
              e.createElement('div', {
                key: 'area',
                ref: (0, a.iH)(t, 'areaElement'),
                className: d,
                style: {
                  top: '0px',
                  left: '0px',
                  width: ''.concat(c, 'px'),
                  height: ''.concat(f, 'px'),
                  transformOrigin: '0 0',
                  transform: h,
                },
              }),
              r_(e),
            ];
          },
          dragStart: function (t, e) {
            var r = e.datas,
              n = e.clientX,
              i = e.clientY;
            if (!e.inputEvent) return !1;
            r.isDragArea = !1;
            var o = t.areaElement,
              a = t.state,
              u = a.moveableClientRect,
              l = a.renderPoses,
              c = a.rootMatrix,
              f = a.is3d,
              p = u.left,
              d = u.top,
              g = eW(l),
              h = g.left,
              v = g.top,
              m = g.width,
              b = g.height,
              x = y(ra(c, [n - p, i - d], f ? 4 : 3), 2),
              S = x[0],
              E = x[1];
            (S -= h), (E -= v);
            var D = [
                { left: h, top: v, width: m, height: E - 10 },
                { left: h, top: v, width: S - 10, height: b },
                { left: h, top: v + E + 10, width: m, height: b - E - 10 },
                { left: h + S + 10, top: v, width: m - S - 10, height: b },
              ],
              C = [].slice.call(o.nextElementSibling.children);
            D.forEach(function (t, e) {
              C[e].style.cssText = 'left: '
                .concat(t.left, 'px;top: ')
                .concat(t.top, 'px; width: ')
                .concat(t.width, 'px; height: ')
                .concat(t.height, 'px;');
            }),
              (0, s.cn)(o, rG),
              (a.disableNativeEvent = !0);
          },
          drag: function (t, e) {
            var r = e.datas,
              n = e.inputEvent;
            if ((this.enableNativeEvent(t), !n)) return !1;
            r.isDragArea || ((r.isDragArea = !0), rB(t));
          },
          dragEnd: function (t, e) {
            this.enableNativeEvent(t);
            var r = e.inputEvent,
              n = e.datas;
            if (!r) return !1;
            n.isDragArea || rB(t);
          },
          dragGroupStart: function (t, e) {
            return this.dragStart(t, e);
          },
          dragGroup: function (t, e) {
            return this.drag(t, e);
          },
          dragGroupEnd: function (t, e) {
            return this.dragEnd(t, e);
          },
          unset: function (t) {
            rB(t), (t.state.disableNativeEvent = !1);
          },
          enableNativeEvent: function (t) {
            var e = t.state;
            e.disableNativeEvent &&
              (0, s.U7)(function () {
                e.disableNativeEvent = !1;
              });
          },
        },
        rI = D('origin', {
          props: ['origin', 'svgOrigin'],
          render: function (t, e) {
            var r,
              n = t.props,
              i = n.zoom,
              o = n.svgOrigin,
              a = n.groupable,
              s = t.getState(),
              l = s.beforeOrigin,
              c = s.rotation,
              f = s.svg,
              p = s.allMatrix,
              d = s.is3d,
              g = s.left,
              h = s.top,
              v = s.offsetWidth,
              m = s.offsetHeight;
            if (!a && f && o) {
              var b = y(rb(o, v, m), 2),
                x = eF(p, [b[0], b[1]], d ? 4 : 3);
              r = eX(c, i, (0, u.h9)(x, [g, h]));
            } else r = eX(c, i, l);
            return [
              e.createElement('div', {
                className: ez('control', 'origin'),
                style: r,
                key: 'beforeOrigin',
              }),
            ];
          },
        });
      function rF(t) {
        var e = t.scrollContainer;
        return [e.scrollLeft, e.scrollTop];
      }
      var rN = {
          name: '',
          props: [
            'target',
            'dragTargetSelf',
            'dragTarget',
            'dragContainer',
            'container',
            'warpSelf',
            'rootContainer',
            'useResizeObserver',
            'useMutationObserver',
            'zoom',
            'dragFocusedInput',
            'transformOrigin',
            'ables',
            'className',
            'pinchThreshold',
            'pinchOutside',
            'triggerAblesSimultaneously',
            'checkInput',
            'cspNonce',
            'translateZ',
            'hideDefaultLines',
            'props',
            'flushSync',
            'stopPropagation',
            'preventClickEventOnDrag',
            'preventClickDefault',
            'viewContainer',
            'persistData',
            'useAccuratePosition',
            'firstRenderState',
            'linePadding',
            'controlPadding',
            'preventDefault',
            'requestStyles',
          ],
          events: ['changeTargets'],
        },
        rW = D('padding', {
          props: ['padding'],
          render: function (t, e) {
            var r = t.props;
            if (r.dragArea) return [];
            var n = rD(r.padding || {}),
              i = n.left,
              o = n.top,
              a = n.right,
              s = n.bottom,
              l = t.getState(),
              c = l.renderPoses,
              f = [l.pos1, l.pos2, l.pos3, l.pos4],
              p = [];
            return (
              i > 0 && p.push([0, 2]),
              o > 0 && p.push([0, 1]),
              a > 0 && p.push([1, 3]),
              s > 0 && p.push([2, 3]),
              p.map(function (t, r) {
                var n = y(t, 2),
                  i = n[0],
                  o = n[1],
                  a = f[i],
                  s = f[o],
                  l = c[i],
                  p = c[o],
                  d = (0, u.mX)(
                    [0, 0],
                    [100, 0],
                    [0, 100],
                    [100, 100],
                    a,
                    s,
                    l,
                    p
                  );
                if (d.length)
                  return e.createElement('div', {
                    key: 'padding'.concat(r),
                    className: ez('padding'),
                    style: { transform: ek(d, !0) },
                  });
              })
            );
          },
        }),
        rq = ['nw', 'ne', 'se', 'sw'];
      function rH(t, e) {
        var r = t[0] + t[1],
          n = r > e ? e / r : 1;
        return (t[0] *= n), (t[1] = e - t[1] * n), t;
      }
      var rY = [1, 2, 5, 6],
        rX = [0, 3, 4, 7],
        rj = [1, -1, -1, 1],
        rL = [1, 1, -1, -1];
      function rV(t, e, r, n, i, o, a, s) {
        void 0 === i && (i = 0),
          void 0 === o && (o = 0),
          void 0 === a && (a = r),
          void 0 === s && (s = n);
        var u = [],
          l = !1,
          c = t.filter(function (t) {
            return !t.virtual;
          }),
          f = c.map(function (t) {
            var c = t.horizontal,
              f = t.vertical,
              p = t.pos;
            if ((f && !l && ((l = !0), u.push('/')), l)) {
              var d = Math.max(0, 1 === f ? p[1] - o : s - p[1]);
              return u.push(rl(d, n, e)), d;
            }
            var d = Math.max(0, 1 === c ? p[0] - i : a - p[0]);
            return u.push(rl(d, r, e)), d;
          });
        return { radiusPoses: c, styles: u, raws: f };
      }
      function rU(t) {
        for (var e = [0, 0], r = [0, 0], n = t.length, i = 0; i < n; ++i) {
          var o = t[i];
          o.sub &&
            (o.horizontal &&
              (0 === e[1] && (e[0] = i), (e[1] = i - e[0] + 1), (r[0] = i + 1)),
            o.vertical && (0 === r[1] && (r[0] = i), (r[1] = i - r[0] + 1)));
        }
        return { horizontalRange: e, verticalRange: r };
      }
      function rK(t, e, r, n, i, o, a) {
        void 0 === o && (o = [0, 0]), void 0 === a && (a = !1);
        var u,
          l,
          c,
          f,
          p = t.indexOf('/'),
          d = (p > -1 ? t.slice(0, p) : t).length,
          g = t.slice(0, d),
          h = t.slice(d + 1),
          v = g.length,
          m = h.length,
          b = m > 0,
          x = y(g, 4),
          S = x[0],
          D = void 0 === S ? '0px' : S,
          C = x[1],
          R = void 0 === C ? D : C,
          M = x[2],
          P = void 0 === M ? D : M,
          z = x[3],
          O = void 0 === z ? R : z,
          T = y(h, 4),
          w = T[0],
          G = void 0 === w ? D : w,
          A = T[1],
          B = void 0 === A ? (b ? G : R) : A,
          _ = T[2],
          k = T[3],
          I = [D, R, P, O].map(function (t) {
            return (0, s.AA)(t, e);
          }),
          F = [
            G,
            B,
            void 0 === _ ? (b ? G : P) : _,
            void 0 === k ? (b ? B : O) : k,
          ].map(function (t) {
            return (0, s.AA)(t, r);
          }),
          N = I.slice(),
          W = F.slice();
        (u = y(rH([N[0], N[1]], e), 2)),
          (N[0] = u[0]),
          (N[1] = u[1]),
          (l = y(rH([N[3], N[2]], e), 2)),
          (N[3] = l[0]),
          (N[2] = l[1]),
          (c = y(rH([W[0], W[3]], r), 2)),
          (W[0] = c[0]),
          (W[3] = c[1]),
          (f = y(rH([W[1], W[2]], r), 2)),
          (W[1] = f[0]),
          (W[2] = f[1]);
        var q = a ? N : N.slice(0, Math.max(o[0], v)),
          H = a ? W : W.slice(0, Math.max(o[1], m));
        return E(
          E(
            [],
            y(
              q.map(function (t, e) {
                var o = rq[e];
                return {
                  virtual: e >= v,
                  horizontal: rj[e],
                  vertical: 0,
                  pos: [n + t, i + (-1 === rL[e] ? r : 0)],
                  sub: !0,
                  raw: I[e],
                  direction: o,
                };
              })
            ),
            !1
          ),
          y(
            H.map(function (t, r) {
              var o = rq[r];
              return {
                virtual: r >= m,
                horizontal: 0,
                vertical: rL[r],
                pos: [n + (-1 === rj[r] ? e : 0), i + t],
                sub: !0,
                raw: F[r],
                direction: o,
              };
            })
          ),
          !1
        );
      }
      var rJ = [
          [0, -1, 'n'],
          [1, 0, 'e'],
        ],
        rZ = [
          [-1, -1, 'nw'],
          [0, -1, 'n'],
          [1, -1, 'ne'],
          [1, 0, 'e'],
          [1, 1, 'se'],
          [0, 1, 's'],
          [-1, 1, 'sw'],
          [-1, 0, 'w'],
        ];
      function r$(t, e, r) {
        var n = t.props.clipRelative,
          i = t.state,
          o = i.width,
          a = i.height,
          s = e.type,
          l = e.poses,
          c = 'rect' === s,
          f = 'circle' === s;
        if ('polygon' === s)
          return r.map(function (t) {
            return ''.concat(rl(t[0], o, n), ' ').concat(rl(t[1], a, n));
          });
        if (c || 'inset' === s) {
          var p = r[1][1],
            d = r[3][0],
            g = r[7][0],
            h = r[5][1];
          if (c)
            return [p, d, h, g].map(function (t) {
              return ''.concat(t, 'px');
            });
          var v = [p, o - d, a - h, g].map(function (t, e) {
            return rl(t, e % 2 ? o : a, n);
          });
          if (r.length > 8) {
            var m = y((0, u.h9)(r[4], r[0]), 2),
              b = m[0],
              x = m[1];
            v.push.apply(
              v,
              E(
                ['round'],
                y(
                  rV(
                    l.slice(8).map(function (t, e) {
                      return S(S({}, t), { pos: r[e] });
                    }),
                    n,
                    b,
                    x,
                    g,
                    p,
                    d,
                    h
                  ).styles
                ),
                !1
              )
            );
          }
          return v;
        }
        if (f || 'ellipse' === s) {
          var D = r[0],
            C = rl(
              ry(r[1][1] - D[1]),
              f ? Math.sqrt((o * o + a * a) / 2) : a,
              n
            ),
            v = f ? [C] : [rl(ry(r[2][0] - D[0]), o, n), C];
          return v.push('at', rl(D[0], o, n), rl(D[1], a, n)), v;
        }
      }
      function rQ(t, e, r, n) {
        var i = [n, (n + e) / 2, e],
          o = [t, (t + r) / 2, r];
        return rZ.map(function (t) {
          var e = y(t, 3),
            r = e[0],
            n = e[1],
            a = e[2],
            s = i[r + 1],
            u = o[n + 1];
          return {
            vertical: ry(n),
            horizontal: ry(r),
            direction: a,
            pos: [s, u],
          };
        });
      }
      function r0(t) {
        var e = [1 / 0, -1 / 0],
          r = [1 / 0, -1 / 0];
        return (
          t.forEach(function (t) {
            var n = t.pos;
            (e[0] = Math.min(e[0], n[0])),
              (e[1] = Math.max(e[1], n[0])),
              (r[0] = Math.min(r[0], n[1])),
              (r[1] = Math.max(r[1], n[1]));
          }),
          [ry(e[1] - e[0]), ry(r[1] - r[0])]
        );
      }
      function r1(t, e, r, n, i) {
        if (t) {
          var o,
            a,
            u,
            l,
            c,
            f,
            d,
            g,
            h,
            v = i;
          if (!v) {
            var m = tx(t),
              b = m('clipPath');
            v = 'none' !== b ? b : m('clip');
          }
          if ((v && 'none' !== v && 'auto' !== v) || (v = n)) {
            var x = (0, s.Le)(v),
              S = x.prefix,
              D = void 0 === S ? v : S,
              C = x.value,
              R = void 0 === C ? '' : C,
              M = 'circle' === D,
              P = ' ';
            if ('polygon' === D) {
              var z = (0, s.W6)(R || '0% 0%, 100% 0%, 100% 100%, 0% 100%');
              P = ',';
              var O = z.map(function (t) {
                  var n = y(t.split(' '), 2),
                    i = n[0],
                    o = n[1];
                  return {
                    vertical: 1,
                    horizontal: 1,
                    pos: [(0, s.AA)(i, e), (0, s.AA)(o, r)],
                  };
                }),
                T = (0, p.i$)(
                  O.map(function (t) {
                    return t.pos;
                  })
                );
              return {
                type: D,
                clipText: v,
                poses: O,
                splitter: P,
                left: T.minX,
                right: T.maxX,
                top: T.minY,
                bottom: T.maxY,
              };
            }
            if (M || 'ellipse' === D) {
              var w = '',
                G = '',
                A = 0,
                B = 0,
                z = (0, s.WE)(R);
              if (M) {
                var _ = '';
                (_ = void 0 === (a = (o = y(z, 4))[0]) ? '50%' : a),
                  (w = void 0 === (u = o[2]) ? '50%' : u),
                  (G = void 0 === (l = o[3]) ? '50%' : l),
                  (B = A = (0, s.AA)(_, Math.sqrt((e * e + r * r) / 2)));
              } else {
                var k = '',
                  I = '';
                (k = void 0 === (f = (c = y(z, 5))[0]) ? '50%' : f),
                  (I = void 0 === (d = c[1]) ? '50%' : d),
                  (w = void 0 === (g = c[3]) ? '50%' : g),
                  (G = void 0 === (h = c[4]) ? '50%' : h),
                  (A = (0, s.AA)(k, e)),
                  (B = (0, s.AA)(I, r));
              }
              var F = [(0, s.AA)(w, e), (0, s.AA)(G, r)],
                O = E(
                  [{ vertical: 1, horizontal: 1, pos: F, direction: 'nesw' }],
                  y(
                    rJ.slice(0, M ? 1 : 2).map(function (t) {
                      return {
                        vertical: ry(t[1]),
                        horizontal: t[0],
                        direction: t[2],
                        sub: !0,
                        pos: [F[0] + t[0] * A, F[1] + t[1] * B],
                      };
                    })
                  ),
                  !1
                );
              return {
                type: D,
                clipText: v,
                radiusX: A,
                radiusY: B,
                left: F[0] - A,
                top: F[1] - B,
                right: F[0] + A,
                bottom: F[1] + B,
                poses: O,
                splitter: P,
              };
            }
            if ('inset' === D) {
              var z = (0, s.WE)(R || '0 0 0 0'),
                N = z.indexOf('round'),
                W = (N > -1 ? z.slice(0, N) : z).length,
                q = z.slice(W + 1),
                H = y(z.slice(0, W), 4),
                Y = H[0],
                X = H[1],
                j = void 0 === X ? Y : X,
                L = H[2],
                V = H[3],
                U = y(
                  [Y, void 0 === L ? Y : L].map(function (t) {
                    return (0, s.AA)(t, r);
                  }),
                  2
                ),
                K = U[0],
                J = U[1],
                Z = y(
                  [void 0 === V ? j : V, j].map(function (t) {
                    return (0, s.AA)(t, e);
                  }),
                  2
                ),
                $ = Z[0],
                Q = Z[1],
                tt = e - Q,
                te = r - J,
                tr = rK(q, tt - $, te - K, $, K),
                O = E(E([], y(rQ(K, tt, te, $)), !1), y(tr), !1);
              return {
                type: 'inset',
                clipText: v,
                poses: O,
                top: K,
                left: $,
                right: tt,
                bottom: te,
                radius: q,
                splitter: P,
              };
            }
            if ('rect' === D) {
              var z = (0, s.W6)(
                R || '0px, '.concat(e, 'px, ').concat(r, 'px, 0px')
              );
              P = ',';
              var tn = y(
                  z.map(function (t) {
                    return (0, s.jL)(t).value;
                  }),
                  4
                ),
                ti = tn[0],
                Q = tn[1],
                J = tn[2],
                $ = tn[3],
                O = rQ(ti, Q, J, $);
              return {
                type: 'rect',
                clipText: v,
                poses: O,
                top: ti,
                right: Q,
                bottom: J,
                left: $,
                values: z,
                splitter: P,
              };
            }
          }
        }
      }
      function r2(t, e, r, n, i) {
        return (
          void 0 === n && (n = [0, 0]),
          rK(t && '0px' !== t ? (0, s.WE)(t) : [], e, r, 0, 0, n, i)
        );
      }
      function r3(t, e, r, n, i) {
        var o,
          a,
          s = t.state,
          u = s.width,
          l = s.height,
          c = rV(i, t.props.roundRelative, u, l),
          f = c.raws,
          p = c.styles,
          d =
            ((o = c.radiusPoses),
            void 0 === (a = f) &&
              (a = o.map(function (t) {
                return t.raw;
              })),
            {
              horizontals: o
                .map(function (t, e) {
                  return t.horizontal ? a[e] : null;
                })
                .filter(function (t) {
                  return null != t;
                }),
              verticals: o
                .map(function (t, e) {
                  return t.vertical ? a[e] : null;
                })
                .filter(function (t) {
                  return null != t;
                }),
            }),
          g = d.horizontals,
          h = d.verticals,
          v = p.join(' ');
        s.borderRadiusState = v;
        var m = e9(
          t,
          e,
          S(
            {
              horizontals: g,
              verticals: h,
              borderRadius: v,
              width: u,
              height: l,
              delta: n,
              dist: r,
            },
            e4({ borderRadius: v }, e)
          )
        );
        return e7(t, 'onRound', m), m;
      }
      function r4(t) {
        var e,
          r,
          n = t.getState().style,
          i = n.borderRadius || '';
        if (!i && t.props.groupable) {
          var o = t.moveables[0],
            a = t.getTargets()[0];
          a &&
            ((i =
              (null == o ? void 0 : o.props.target) === a
                ? null !==
                    (r =
                      null === (e = t.moveables[0]) || void 0 === e
                        ? void 0
                        : e.state.style.borderRadius) && void 0 !== r
                  ? r
                  : ''
                : rt(a).borderRadius),
            (n.borderRadius = i));
        }
        return i;
      }
      var r5 = {
          isPinch: !0,
          name: 'beforeRenderable',
          props: [],
          events: [
            'beforeRenderStart',
            'beforeRender',
            'beforeRenderEnd',
            'beforeRenderGroupStart',
            'beforeRenderGroup',
            'beforeRenderGroupEnd',
          ],
          dragRelation: 'weak',
          setTransform: function (t, e) {
            var r,
              n = t.state,
              i = n.is3d,
              o = n.targetMatrix,
              a = n.inlineTransform,
              l = i
                ? 'matrix3d('.concat(o.join(','), ')')
                : 'matrix('.concat((0, u.pQ)(o, !0), ')'),
              c = a && 'none' !== a ? a : l;
            (r = (0, u.Te)(i ? 4 : 3)),
              (e.datas.startTransforms =
                c ===
                  'matrix'
                    .concat(i ? '3d' : '', '(')
                    .concat(r.join(','), ')') || 'matrix(1,0,0,1,0,0)' === c
                  ? []
                  : (0, s.WE)(c));
          },
          resetStyle: function (t) {
            var e = t.datas;
            (e.nextStyle = {}),
              (e.nextTransforms = t.datas.startTransforms),
              (e.nextTransformAppendedIndexes = []);
          },
          fillDragStartParams: function (t, e) {
            return e9(t, e, {
              setTransform: function (t) {
                e.datas.startTransforms = (0, s.kJ)(t) ? t : (0, s.WE)(t);
              },
              isPinch: !!e.isPinch,
            });
          },
          fillDragParams: function (t, e) {
            return e9(t, e, { isPinch: !!e.isPinch });
          },
          dragStart: function (t, e) {
            this.setTransform(t, e),
              this.resetStyle(e),
              e7(t, 'onBeforeRenderStart', this.fillDragStartParams(t, e));
          },
          drag: function (t, e) {
            e.datas.startTransforms || this.setTransform(t, e),
              this.resetStyle(e),
              e7(t, 'onBeforeRender', e9(t, e, { isPinch: !!e.isPinch }));
          },
          dragEnd: function (t, e) {
            e.datas.startTransforms ||
              (this.setTransform(t, e), this.resetStyle(e)),
              e7(
                t,
                'onBeforeRenderEnd',
                e9(t, e, { isPinch: !!e.isPinch, isDrag: e.isDrag })
              );
          },
          dragGroupStart: function (t, e) {
            var r = this;
            this.dragStart(t, e);
            var n = tS(t, 'beforeRenderable', e),
              i = t.moveables,
              o = n.map(function (t, e) {
                var n = i[e];
                return (
                  r.setTransform(n, t),
                  r.resetStyle(t),
                  r.fillDragStartParams(n, t)
                );
              });
            e7(
              t,
              'onBeforeRenderGroupStart',
              e9(t, e, {
                isPinch: !!e.isPinch,
                targets: t.props.targets,
                setTransform: function () {},
                events: o,
              })
            );
          },
          dragGroup: function (t, e) {
            var r = this;
            this.drag(t, e);
            var n = tS(t, 'beforeRenderable', e),
              i = t.moveables,
              o = n.map(function (t, e) {
                var n = i[e];
                return r.resetStyle(t), r.fillDragParams(n, t);
              });
            e7(
              t,
              'onBeforeRenderGroup',
              e9(t, e, {
                isPinch: !!e.isPinch,
                targets: t.props.targets,
                events: o,
              })
            );
          },
          dragGroupEnd: function (t, e) {
            this.dragEnd(t, e),
              e7(
                t,
                'onBeforeRenderGroupEnd',
                e9(t, e, {
                  isPinch: !!e.isPinch,
                  isDrag: e.isDrag,
                  targets: t.props.targets,
                })
              );
          },
          dragControlStart: function (t, e) {
            return this.dragStart(t, e);
          },
          dragControl: function (t, e) {
            return this.drag(t, e);
          },
          dragControlEnd: function (t, e) {
            return this.dragEnd(t, e);
          },
          dragGroupControlStart: function (t, e) {
            return this.dragGroupStart(t, e);
          },
          dragGroupControl: function (t, e) {
            return this.dragGroup(t, e);
          },
          dragGroupControlEnd: function (t, e) {
            return this.dragGroupEnd(t, e);
          },
        },
        r9 = {
          name: 'renderable',
          props: [],
          events: [
            'renderStart',
            'render',
            'renderEnd',
            'renderGroupStart',
            'renderGroup',
            'renderGroupEnd',
          ],
          dragRelation: 'weak',
          dragStart: function (t, e) {
            e7(t, 'onRenderStart', e9(t, e, { isPinch: !!e.isPinch }));
          },
          drag: function (t, e) {
            e7(t, 'onRender', this.fillDragParams(t, e));
          },
          dragAfter: function (t, e) {
            return this.drag(t, e);
          },
          dragEnd: function (t, e) {
            e7(t, 'onRenderEnd', this.fillDragEndParams(t, e));
          },
          dragGroupStart: function (t, e) {
            e7(
              t,
              'onRenderGroupStart',
              e9(t, e, { isPinch: !!e.isPinch, targets: t.props.targets })
            );
          },
          dragGroup: function (t, e) {
            var r = this,
              n = tS(t, 'beforeRenderable', e),
              i = t.moveables,
              o = n.map(function (t, e) {
                var n = i[e];
                return r.fillDragParams(n, t);
              });
            e7(
              t,
              'onRenderGroup',
              e9(
                t,
                e,
                S(
                  S(
                    {
                      isPinch: !!e.isPinch,
                      targets: t.props.targets,
                      transform: tl(e),
                      transformObject: {},
                    },
                    e4(tc(e))
                  ),
                  { events: o }
                )
              )
            );
          },
          dragGroupEnd: function (t, e) {
            var r = this,
              n = tS(t, 'beforeRenderable', e),
              i = t.moveables,
              o = n.map(function (t, e) {
                var n = i[e];
                return r.fillDragEndParams(n, t);
              });
            e7(
              t,
              'onRenderGroupEnd',
              e9(
                t,
                e,
                S(
                  {
                    isPinch: !!e.isPinch,
                    isDrag: e.isDrag,
                    targets: t.props.targets,
                    events: o,
                    transformObject: {},
                    transform: tl(e),
                  },
                  e4(tc(e))
                )
              )
            );
          },
          dragControlStart: function (t, e) {
            return this.dragStart(t, e);
          },
          dragControl: function (t, e) {
            return this.drag(t, e);
          },
          dragControlAfter: function (t, e) {
            return this.dragAfter(t, e);
          },
          dragControlEnd: function (t, e) {
            return this.dragEnd(t, e);
          },
          dragGroupControlStart: function (t, e) {
            return this.dragGroupStart(t, e);
          },
          dragGroupControl: function (t, e) {
            return this.dragGroup(t, e);
          },
          dragGroupControlEnd: function (t, e) {
            return this.dragGroupEnd(t, e);
          },
          fillDragParams: function (t, e) {
            var r = {};
            return (
              (0, l.Qc)(tu(e) || []).forEach(function (t) {
                r[t.name] = t.functionValue;
              }),
              e9(
                t,
                e,
                S(
                  {
                    isPinch: !!e.isPinch,
                    transformObject: r,
                    transform: tl(e),
                  },
                  e4(tc(e))
                )
              )
            );
          },
          fillDragEndParams: function (t, e) {
            var r = {};
            return (
              (0, l.Qc)(tu(e) || []).forEach(function (t) {
                r[t.name] = t.functionValue;
              }),
              e9(
                t,
                e,
                S(
                  {
                    isPinch: !!e.isPinch,
                    isDrag: e.isDrag,
                    transformObject: r,
                    transform: tl(e),
                  },
                  e4(tc(e))
                )
              )
            );
          },
        };
      function r6(t, e, r, n, i, o, a) {
        (o.clientDistX = o.distX), (o.clientDistY = o.distY);
        var s,
          u = 'Start' === i,
          l = 'End' === i,
          c = 'After' === i,
          f = t.state.target,
          p = o.isRequest,
          d = n.indexOf('Control') > -1;
        if (!f || (u && d && !p && t.areaElement === o.inputEvent.target))
          return !1;
        var g = E([], y(e), !1);
        if (p) {
          var h = o.requestAble;
          g.some(function (t) {
            return t.name === h;
          }) ||
            g.push.apply(
              g,
              E(
                [],
                y(
                  t.props.ables.filter(function (t) {
                    return t.name === h;
                  })
                ),
                !1
              )
            );
        }
        if (
          !g.length ||
          g.every(function (t) {
            return t.dragRelation;
          })
        )
          return !1;
        var v = o.inputEvent;
        l &&
          v &&
          (s = document.elementFromPoint(o.clientX, o.clientY) || v.target);
        var m = !1,
          b = function () {
            var t;
            (m = !0), null === (t = o.stop) || void 0 === t || t.call(o);
          },
          x =
            u &&
            (!t.targetGesto ||
              !t.controlGesto ||
              !t.targetGesto.isFlag() ||
              !t.controlGesto.isFlag());
        x && t.updateRect(i, !0, !1);
        var D = o.datas,
          C = d ? 'controlGesto' : 'targetGesto',
          R = t[C],
          M = function (e, r, n) {
            if (!(r in e) || R !== t[C]) return !1;
            var i = e.name,
              a = D[i] || (D[i] = {});
            if (
              (u && (a.isEventStart = !n || !e[n] || e[n](t, o)),
              !a.isEventStart)
            )
              return !1;
            var l = e[r](
              t,
              S(S({}, o), {
                stop: b,
                datas: a,
                originalDatas: D,
                inputTarget: s,
              })
            );
            return t._emitter.off(), u && !1 === l && (a.isEventStart = !1), l;
          };
        x &&
          g.forEach(function (e) {
            e.unset && e.unset(t);
          }),
          M(r5, 'drag'.concat(n).concat(i));
        var P = 0,
          z = 0;
        r.forEach(function (e) {
          if (m) return !1;
          var r = ''.concat(e).concat(n).concat(i),
            a = ''.concat(e).concat(n, 'Condition');
          '' !== i || p || rs(t.state, o);
          var s = g.filter(function (t) {
              return t[r];
            }),
            l = (s = s.filter(function (t, e) {
              return t.name && s.indexOf(t) === e;
            })).filter(function (t) {
              return M(t, r, a);
            }).length;
          m && ++P,
            l && ++z,
            !m &&
              u &&
              s.length &&
              !l &&
              (P += s.filter(function (t) {
                return !!D[t.name].isEventStart && 'strong' !== t.dragRelation;
              }).length
                ? 1
                : 0);
        }),
          (!c || z) && M(r9, 'drag'.concat(n).concat(i));
        var O = R !== t[C] || P === r.length;
        return (
          (l || m || O) &&
            ((t.state.gestos = {}),
            t.moveables &&
              t.moveables.forEach(function (t) {
                t.state.gestos = {};
              }),
            g.forEach(function (e) {
              e.unset && e.unset(t);
            })),
          u &&
            !O &&
            !p &&
            z &&
            t.props.preventDefault &&
            (null == o || o.preventDefault()),
          !t.isUnmounted &&
            !O &&
            (((!u && z && !a) || l) &&
              (t.props.flushSync || eO)(function () {
                t.updateRect(l ? i : '', !0, !1), t.forceUpdate();
              }),
            u || l || c || !z || a || r6(t, e, r, n, i + 'After', o),
            !0)
        );
      }
      function r8(t) {
        return function (e) {
          var r,
            n = e.inputEvent.target,
            i = t.areaElement,
            o = t._dragTarget;
          return (
            !(
              !o ||
              (null === (r = t.controlGesto) || void 0 === r
                ? void 0
                : r.isFlag())
            ) &&
            (n === o ||
              o.contains(n) ||
              n === i ||
              (!t.isMoveableElement(n) && !t.controlBox.contains(n)) ||
              (0, s.pv)(n, 'moveable-area') ||
              (0, s.pv)(n, 'moveable-padding') ||
              (0, s.pv)(n, 'moveable-edgeDraggable'))
          );
        };
      }
      function r7(t, e, r) {
        var n = t.controlBox,
          i = [],
          o = t.props,
          a = o.dragArea,
          s = t.state.target,
          u = o.dragTarget;
        return (
          i.push(n),
          (!a || u) && i.push(e),
          !a && u && s && e !== s && o.dragTargetSelf && i.push(s),
          nt(t, i, 'targetAbles', r, { dragStart: r8(t), pinchStart: r8(t) })
        );
      }
      function nt(t, e, r, n, i) {
        void 0 === i && (i = {});
        var o = 'targetAbles' === r,
          a = t.props,
          u = a.pinchOutside,
          l = a.pinchThreshold,
          c = a.preventClickEventOnDrag,
          f = a.preventClickDefault,
          p = a.checkInput,
          d = a.dragFocusedInput,
          h = a.preventDefault,
          v = {
            preventDefault: void 0 === h || h,
            preventRightClick: !0,
            preventWheelClick: !0,
            container:
              rd(a.dragContainer, !0) || (0, s.Jj)(t.getControlBoxElement()),
            pinchThreshold: l,
            pinchOutside: u,
            preventClickEventOnDrag: !!o && c,
            preventClickEventOnDragStart: !!o && f,
            preventClickEventByCondition: o
              ? null
              : function (e) {
                  return t.controlBox.contains(e.target);
                },
            checkInput: !!o && p,
            dragFocusedInput: d,
          },
          m = new g.Z(e, v),
          b = 'Control' === n;
        return (
          ['drag', 'pinch'].forEach(function (e) {
            ['Start', '', 'End'].forEach(function (o) {
              m.on(''.concat(e).concat(o), function (a) {
                var s,
                  u = a.eventType,
                  l = 'drag' === e && a.isPinch;
                if (i[u] && !i[u](a)) {
                  a.stop();
                  return;
                }
                if (!l) {
                  var c = E([], y(t[r]), !1);
                  r6(t, c, 'drag' === e ? [e] : ['drag', e], n, o, a)
                    ? (t.props.stopPropagation || ('Start' === o && b)) &&
                      (null === (s = null == a ? void 0 : a.inputEvent) ||
                        void 0 === s ||
                        s.stopPropagation())
                    : a.stop();
                }
              });
            });
          }),
          m
        );
      }
      var ne = (function () {
        function t(t, e, r) {
          var n = this;
          (this.target = t),
            (this.moveable = e),
            (this.eventName = r),
            (this.ables = []),
            (this._onEvent = function (t) {
              var e = n.eventName,
                r = n.moveable;
              r.state.disableNativeEvent ||
                n.ables.forEach(function (n) {
                  n[e](r, { inputEvent: t });
                });
            }),
            t.addEventListener(r.toLowerCase(), this._onEvent);
        }
        return (
          (t.prototype.setAbles = function (t) {
            this.ables = t;
          }),
          (t.prototype.destroy = function () {
            this.target.removeEventListener(
              this.eventName.toLowerCase(),
              this._onEvent
            ),
              (this.target = null),
              (this.moveable = null);
          }),
          t
        );
      })();
      function nr(t, e, r, n, i, o) {
        void 0 === o && (o = []);
        var a = 1,
          l = [0, 0],
          c = eU(),
          f = eU(),
          p = eU(),
          d = eU(),
          g = [0, 0],
          h = {},
          v = (function (t, e, r, n) {
            void 0 === r && (r = e);
            var i = 0,
              o = 0,
              a = 0,
              l = {},
              c = eL(t);
            if ((t && ((i = c.offsetWidth), (o = c.offsetHeight)), t)) {
              var f,
                p,
                d,
                g,
                h,
                v,
                m,
                b,
                x,
                D,
                C,
                R,
                M,
                P,
                z,
                O,
                T,
                w,
                G,
                A,
                B,
                _,
                k,
                I,
                F,
                N,
                W,
                q,
                H,
                Y,
                X,
                j,
                V =
                  (void 0 === (f = r) && (f = e),
                  (g = (d = tg(t, e)).matrixes),
                  (h = d.is3d),
                  (v = d.targetMatrix),
                  (m = d.transformOrigin),
                  (b = d.targetOrigin),
                  (x = d.offsetContainer),
                  (D = d.hasFixed),
                  (C = d.zoom),
                  (M = (R = (function (t, e) {
                    if (tm) {
                      var r = (0, s.sE)(tm, function (r) {
                        return r[0][0] == t && r[0][1] == e;
                      });
                      if (r) return r[1];
                    }
                    var n = tg(t, e, !0);
                    return tm && tm.push([[t, e], n]), n;
                  })(x, f)).matrixes),
                  (P = R.is3d),
                  (z = R.offsetContainer),
                  (O = R.zoom),
                  (w = (T = n || P || h) ? 4 : 3),
                  (G =
                    'svg' !== t.tagName.toLowerCase() &&
                    'ownerSVGElement' in t),
                  (A = v),
                  (B = (0, u.Te)(w)),
                  (_ = (0, u.Te)(w)),
                  (k = (0, u.Te)(w)),
                  (I = (0, u.Te)(w)),
                  (F = g.length),
                  (N = M.map(function (t) {
                    return S(S({}, t), {
                      matrix: t.matrix ? E([], y(t.matrix), !1) : void 0,
                    });
                  }).reverse()),
                  g.reverse(),
                  !h && T && ((A = (0, u.mA)(A, 3, 4)), e_(g)),
                  !P && T && e_(N),
                  N.forEach(function (t) {
                    _ = (0, u.ml)(_, t.matrix, w);
                  }),
                  (W = f || (0, s.zi)(t)),
                  (q =
                    (null === (p = N[0]) || void 0 === p ? void 0 : p.target) ||
                    eA(W, W, !0).offsetParent),
                  (H = N.slice(1).reduce(
                    function (t, e) {
                      return (0, u.ml)(t, e.matrix, w);
                    },
                    (0, u.Te)(w)
                  )),
                  g.forEach(function (t, e) {
                    if (
                      (F - 2 === e && (k = B.slice()),
                      F - 1 === e && (I = B.slice()),
                      !t.matrix)
                    ) {
                      var r = (function (t, e, r, n, i) {
                        var o,
                          a = t.target,
                          l = t.origin,
                          c = e.matrix,
                          f = eL(a),
                          p = f.offsetWidth,
                          d = f.offsetHeight,
                          g = r.getBoundingClientRect(),
                          h = [0, 0];
                        r === (0, s.zi)(r) && (h = eB(a, !0));
                        for (
                          var v = a.getBoundingClientRect(),
                            m =
                              v.left -
                              g.left +
                              r.scrollLeft -
                              (r.clientLeft || 0) +
                              h[0],
                            b =
                              v.top -
                              g.top +
                              r.scrollTop -
                              (r.clientTop || 0) +
                              h[1],
                            x = v.width,
                            S = v.height,
                            E = (0, u.KF)(n, i, c),
                            D = eW(eN(E, p, d, n)),
                            C = D.left,
                            R = D.top,
                            M = D.width,
                            P = D.height,
                            z = eF(E, l, n),
                            O = (0, u.h9)(z, [C, R]),
                            T = [m + (O[0] * x) / M, b + (O[1] * S) / P],
                            w = [0, 0],
                            G = 0;
                          ++G < 10;

                        ) {
                          var A = (0, u.U_)(i, n);
                          (o = y((0, u.h9)(eF(A, T, n), eF(A, z, n)), 2)),
                            (w[0] = o[0]),
                            (w[1] = o[1]);
                          var B = eW(
                              eN((0, u.KF)(n, i, (0, u.Jm)(w, n), c), p, d, n)
                            ),
                            _ = B.left,
                            k = B.top,
                            I = _ - m,
                            F = k - b;
                          if (2 > ry(I) && 2 > ry(F)) break;
                          (T[0] -= I), (T[1] -= F);
                        }
                        return w.map(function (t) {
                          return Math.round(t);
                        });
                      })(t, g[e + 1], q, w, (0, u.ml)(H, B, w));
                      t.matrix = (0, u.Jm)(r, w);
                    }
                    B = (0, u.ml)(B, t.matrix, w);
                  }),
                  (Y = !G && h),
                  A || (A = (0, u.Te)(Y ? 4 : 3)),
                  (X = ek(G && 16 === A.length ? (0, u.mA)(A, 4, 3) : A, Y)),
                  (j = _),
                  {
                    hasZoom: 1 !== C || 1 !== O,
                    hasFixed: D,
                    matrixes: g,
                    rootMatrix: (_ = (0, u.Xj)(_, w, w)),
                    originalRootMatrix: j,
                    beforeMatrix: k,
                    offsetMatrix: I,
                    allMatrix: B,
                    targetMatrix: A,
                    targetTransform: X,
                    inlineTransform: t.style.transform,
                    transformOrigin: m,
                    targetOrigin: b,
                    is3d: T,
                    offsetContainer: x,
                    offsetRootContainer: z,
                  }),
                U = L(V.allMatrix, V.transformOrigin, i, o);
              l = S(S({}, V), U);
              var K = L(V.allMatrix, [50, 50], 100, 100);
              a = eV([K.pos1, K.pos2], K.direction);
            }
            var J = n ? 4 : 3;
            return S(
              S(S({ hasZoom: !1, width: i, height: o, rotation: a }, c), {
                originalRootMatrix: (0, u.Te)(J),
                rootMatrix: (0, u.Te)(J),
                beforeMatrix: (0, u.Te)(J),
                offsetMatrix: (0, u.Te)(J),
                allMatrix: (0, u.Te)(J),
                targetMatrix: (0, u.Te)(J),
                targetTransform: '',
                inlineTransform: '',
                transformOrigin: [0, 0],
                targetOrigin: [0, 0],
                is3d: !!n,
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                origin: [0, 0],
                pos1: [0, 0],
                pos2: [0, 0],
                pos3: [0, 0],
                pos4: [0, 0],
                direction: 1,
                hasFixed: !1,
                offsetContainer: null,
                offsetRootContainer: null,
                matrixes: [],
              }),
              l
            );
          })(e, r, i, !0);
        if (e) {
          var m = tx(e);
          o.forEach(function (t) {
            h[t] = m(t);
          });
          var b = v.is3d ? 4 : 3,
            x = L(
              v.offsetMatrix,
              (0, u.PD)(v.transformOrigin, (0, u.P$)(v.targetMatrix, b)),
              v.width,
              v.height
            );
          (a = x.direction),
            (l = (0, u.PD)(x.origin, [x.left - v.left, x.top - v.top])),
            (d = eZ(v.offsetRootContainer));
          var D = eA(n, n, !0).offsetParent || v.offsetRootContainer;
          if (v.hasZoom) {
            var C = L(
                (0, u.ml)(v.originalRootMatrix, v.allMatrix),
                v.transformOrigin,
                v.width,
                v.height
              ),
              R = L(
                v.originalRootMatrix,
                ew(tx(D)('transformOrigin')).map(function (t) {
                  return parseFloat(t);
                }),
                D.offsetWidth,
                D.offsetHeight
              );
            if (((c = eJ(C, d)), (p = eJ(R, d, D, !0)), t)) {
              var M = C.left,
                P = C.top;
              f = eJ({ left: M, top: P, bottom: P, right: P }, d);
            }
          } else {
            (c = eZ(e)),
              (p = (function (t) {
                var e = null == tv ? void 0 : tv.get(t);
                if (e) return e;
                var r = eZ(t, !0);
                return tv && tv.set(t, r), r;
              })(D)),
              t && (f = eZ(t));
            var z = p.left,
              O = p.top,
              T = p.clientLeft,
              w = p.clientTop,
              G = [c.left - z, c.top - O];
            g = (0, u.h9)(ra(v.rootMatrix, G, 4), [T + v.left, w + v.top]);
          }
        }
        return S(
          {
            targetClientRect: c,
            containerClientRect: p,
            moveableClientRect: f,
            rootContainerClientRect: d,
            beforeDirection: a,
            beforeOrigin: l,
            originalBeforeOrigin: l,
            target: e,
            style: h,
            offsetDelta: g,
          },
          v
        );
      }
      function nn(t) {
        var e = t.pos1,
          r = t.pos2,
          n = t.pos3,
          i = t.pos4;
        if (!e || !r || !n || !i) return null;
        var o = (0, p.i$)([e, r, n, i]),
          a = [o.minX, o.minY],
          s = (0, u.h9)(t.origin, a);
        return (
          (e = (0, u.h9)(e, a)),
          (r = (0, u.h9)(r, a)),
          (n = (0, u.h9)(n, a)),
          (i = (0, u.h9)(i, a)),
          S(S({}, t), {
            left: t.left,
            top: t.top,
            posDelta: a,
            pos1: e,
            pos2: r,
            pos3: n,
            pos4: i,
            origin: s,
            beforeOrigin: s,
            isPersisted: !0,
          })
        );
      }
      var ni = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = S(
                {
                  container: null,
                  gestos: {},
                  renderPoses: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                  ],
                  disableNativeEvent: !1,
                  posDelta: [0, 0],
                },
                nr(null)
              )),
              (e.renderState = {}),
              (e.enabledAbles = []),
              (e.targetAbles = []),
              (e.controlAbles = []),
              (e.rotation = 0),
              (e.scale = [1, 1]),
              (e.isMoveableMounted = !1),
              (e.isUnmounted = !1),
              (e.events = { mouseEnter: null, mouseLeave: null }),
              (e._emitter = new v.Z()),
              (e._prevOriginalDragTarget = null),
              (e._originalDragTarget = null),
              (e._prevDragTarget = null),
              (e._dragTarget = null),
              (e._prevPropTarget = null),
              (e._propTarget = null),
              (e._prevDragArea = !1),
              (e._isPropTargetChanged = !1),
              (e._hasFirstTarget = !1),
              (e._reiszeObserver = null),
              (e._observerId = 0),
              (e._mutationObserver = null),
              (e._rootContainer = null),
              (e._viewContainer = null),
              (e._viewClassNames = []),
              (e._store = {}),
              (e.checkUpdateRect = function () {
                if (!e.isDragging()) {
                  var t = e.props.parentMoveable;
                  if (t) {
                    t.checkUpdateRect();
                    return;
                  }
                  (0, s.Wx)(e._observerId),
                    (e._observerId = (0, s.U7)(function () {
                      e.isDragging() || e.updateRect();
                    }));
                }
              }),
              (e._onPreventClick = function (t) {
                t.stopPropagation(), t.preventDefault();
              }),
              e
            );
          }
          return (
            x(e, t),
            (e.prototype.render = function () {
              var t = this.props,
                e = this.getState(),
                r = t.parentPosition,
                n = t.className,
                i = t.target,
                o = t.zoom,
                s = t.cspNonce,
                u = t.translateZ,
                l = t.cssStyled,
                c = t.groupable,
                f = t.linePadding,
                p = t.controlPadding;
              this._checkUpdateRootContainer(),
                this.checkUpdate(),
                this.updateRenderPoses();
              var g = y(r || [0, 0], 2),
                h = g[0],
                v = g[1],
                m = e.left,
                b = e.top,
                x = e.target,
                E = e.direction,
                D = e.hasFixed,
                C = e.offsetDelta,
                R = t.targets,
                M = this.isDragging(),
                P = {};
              this.getEnabledAbles().forEach(function (t) {
                P['data-able-'.concat(t.name.toLowerCase())] = !0;
              });
              var z = this._getAbleClassName(),
                O =
                  (R && R.length && (x || c)) ||
                  i ||
                  (!this._hasFirstTarget && this.state.isPersisted),
                T =
                  this.controlBox ||
                  this.props.firstRenderState ||
                  this.props.persistData,
                w = [m - h, b - v];
              !c && t.useAccuratePosition && ((w[0] += C[0]), (w[1] += C[1]));
              var G = {
                position: D ? 'fixed' : 'absolute',
                display: O ? 'block' : 'none',
                visibility: T ? 'visible' : 'hidden',
                transform: 'translate3d('
                  .concat(w[0], 'px, ')
                  .concat(w[1], 'px, ')
                  .concat(u, ')'),
                '--zoom': o,
                '--zoompx': ''.concat(o, 'px'),
              };
              return (
                f && (G['--moveable-line-padding'] = f),
                p && (G['--moveable-control-padding'] = p),
                d.createElement(
                  l,
                  S(
                    {
                      cspNonce: s,
                      ref: (0, a.iH)(this, 'controlBox'),
                      className: ''
                        .concat(
                          ez(
                            'control-box',
                            -1 === E ? 'reverse' : '',
                            M ? 'dragging' : ''
                          ),
                          ' '
                        )
                        .concat(z, ' ')
                        .concat(n),
                    },
                    P,
                    { onClick: this._onPreventClick, style: G }
                  ),
                  this.renderAbles(),
                  this._renderLines()
                )
              );
            }),
            (e.prototype.componentDidMount = function () {
              (this.isMoveableMounted = !0), (this.isUnmounted = !1);
              var t = this.props,
                e = t.parentMoveable,
                r = t.container;
              this._checkUpdateRootContainer(),
                this._checkUpdateViewContainer(),
                this._updateTargets(),
                this._updateNativeEvents(),
                this._updateEvents(),
                this.updateCheckInput(),
                this._updateObserver(this.props),
                r ||
                  e ||
                  this.state.isPersisted ||
                  (this.updateRect('', !1, !1), this.forceUpdate());
            }),
            (e.prototype.componentDidUpdate = function (t) {
              this._checkUpdateRootContainer(),
                this._checkUpdateViewContainer(),
                this._updateNativeEvents(),
                this._updateTargets(),
                this._updateEvents(),
                this.updateCheckInput(),
                this._updateObserver(t);
            }),
            (e.prototype.componentWillUnmount = function () {
              (this.isMoveableMounted = !1),
                (this.isUnmounted = !0),
                this._emitter.off(),
                null === (t = this._reiszeObserver) ||
                  void 0 === t ||
                  t.disconnect(),
                null === (e = this._mutationObserver) ||
                  void 0 === e ||
                  e.disconnect(),
                this._viewContainer && this._changeAbleViewClassNames([]),
                e3(this, !1),
                e3(this, !0);
              var t,
                e,
                r = this.events;
              for (var n in r) {
                var i = r[n];
                i && i.destroy();
              }
            }),
            (e.prototype.getTargets = function () {
              var t = this.props.target;
              return t ? [t] : [];
            }),
            (e.prototype.getAble = function (t) {
              var e = this.props.ables || [];
              return (0, s.sE)(e, function (e) {
                return e.name === t;
              });
            }),
            (e.prototype.getContainer = function () {
              var t = this.props,
                e = t.parentMoveable,
                r = t.wrapperMoveable;
              return (
                t.container ||
                (r && r.getContainer()) ||
                (e && e.getContainer()) ||
                this.controlBox.parentElement
              );
            }),
            (e.prototype.getControlBoxElement = function () {
              return this.controlBox;
            }),
            (e.prototype.getDragElement = function () {
              return this._dragTarget;
            }),
            (e.prototype.isMoveableElement = function (t) {
              var e;
              return (
                t &&
                (
                  (null === (e = t.getAttribute) || void 0 === e
                    ? void 0
                    : e.call(t, 'class')) || ''
                ).indexOf(k) > -1
              );
            }),
            (e.prototype.dragStart = function (t) {
              var e = this.targetGesto,
                r = this.controlGesto;
              return (
                e && r8(this)({ inputEvent: t })
                  ? e.isFlag() || e.triggerDragStart(t)
                  : r &&
                    this.isMoveableElement(t.target) &&
                    !r.isFlag() &&
                    r.triggerDragStart(t),
                this
              );
            }),
            (e.prototype.hitTest = function (t) {
              var e,
                r = this.state,
                n = r.target,
                i = r.pos1,
                o = r.pos2,
                a = r.pos3,
                u = r.pos4,
                l = r.targetClientRect;
              if (!n) return 0;
              if ((0, s.UG)(t)) {
                var c = t.getBoundingClientRect();
                e = {
                  left: c.left,
                  top: c.top,
                  width: c.width,
                  height: c.height,
                };
              } else e = S({ width: 0, height: 0 }, t);
              var f = e.left,
                d = e.top,
                g = e.width,
                h = e.height,
                v = (0, p.aD)([i, o, u, a], l),
                m = (0, p.IW)(v, [
                  [f, d],
                  [f + g, d],
                  [f + g, d + h],
                  [f, d + h],
                ]),
                b = (0, p.tB)(v);
              return m && b ? Math.min(100, (m / b) * 100) : 0;
            }),
            (e.prototype.isInside = function (t, e) {
              var r = this.state,
                n = r.target,
                i = r.pos1,
                o = r.pos2,
                a = r.pos3,
                s = r.pos4,
                u = r.targetClientRect;
              return !!n && (0, p.V0)([t, e], (0, p.aD)([i, o, s, a], u));
            }),
            (e.prototype.updateRect = function (t, e, r) {
              void 0 === r && (r = !0);
              var n = this.props,
                i = !n.parentPosition && !n.wrapperMoveable;
              i && tb(!0);
              var o = n.parentMoveable,
                a = this.state.target || n.target,
                s = this.getContainer(),
                u = o ? o._rootContainer : this._rootContainer,
                l = nr(
                  this.controlBox,
                  a,
                  s,
                  s,
                  u || s,
                  this._getRequestStyles()
                );
              if (!a && this._hasFirstTarget && n.persistData) {
                var c = nn(n.persistData);
                for (var f in c) l[f] = c[f];
              }
              i && tb(), this.updateState(l, !o && r);
            }),
            (e.prototype.isDragging = function (t) {
              var e,
                r,
                n = this.targetGesto,
                i = this.controlGesto;
              if (null == n ? void 0 : n.isFlag()) {
                if (!t) return !0;
                var o = n.getEventData();
                return !!(null === (e = o[t]) || void 0 === e
                  ? void 0
                  : e.isEventStart);
              }
              if (null == i ? void 0 : i.isFlag()) {
                if (!t) return !0;
                var o = i.getEventData();
                return !!(null === (r = o[t]) || void 0 === r
                  ? void 0
                  : r.isEventStart);
              }
              return !1;
            }),
            (e.prototype.updateTarget = function (t) {
              this.updateRect(t, !0);
            }),
            (e.prototype.getRect = function () {
              var t = this.state,
                e = e1(this.state),
                r = y(e, 4),
                n = r[0],
                i = r[1],
                o = r[2],
                a = r[3],
                s = eW(e),
                l = t.width,
                c = t.height,
                f = s.width,
                p = s.height,
                d = s.left,
                g = s.top,
                h = [t.left, t.top],
                v = (0, u.PD)(h, t.origin);
              return {
                width: f,
                height: p,
                left: d,
                top: g,
                pos1: n,
                pos2: i,
                pos3: o,
                pos4: a,
                offsetWidth: l,
                offsetHeight: c,
                beforeOrigin: (0, u.PD)(h, t.beforeOrigin),
                origin: v,
                transformOrigin: t.transformOrigin,
                rotation: this.getRotation(),
              };
            }),
            (e.prototype.getManager = function () {
              return this;
            }),
            (e.prototype.stopDrag = function (t) {
              if (!t || 'target' === t) {
                var e = this.targetGesto;
                (null == e ? void 0 : e.isIdle()) === !1 && e2(this, !1),
                  null == e || e.stop();
              }
              if (!t || 'control' === t) {
                var e = this.controlGesto;
                (null == e ? void 0 : e.isIdle()) === !1 && e2(this, !0),
                  null == e || e.stop();
              }
            }),
            (e.prototype.getRotation = function () {
              var t,
                e = this.state,
                r = e.pos1,
                n = e.pos2,
                i = e.direction;
              return (
                (t = ((0, s.jv)(r, n) / Math.PI) * 180),
                (t = (t = i >= 0 ? t : 180 - t) >= 0 ? t : 360 + t)
              );
            }),
            (e.prototype.request = function (t, e, r) {
              void 0 === e && (e = {});
              var n = this,
                i = n.props,
                o = i.parentMoveable || i.wrapperMoveable || n,
                a = o.props.ables,
                u = i.groupable,
                l = (0, s.sE)(a, function (e) {
                  return e.name === t;
                });
              if (this.isDragging() || !l || !l.request)
                return {
                  request: function () {
                    return this;
                  },
                  requestEnd: function () {
                    return this;
                  },
                };
              var c = l.request(n),
                f = r || e.isInstant,
                p = c.isControl ? 'controlAbles' : 'targetAbles',
                d = ''
                  .concat(u ? 'Group' : '')
                  .concat(c.isControl ? 'Control' : ''),
                g = E([], y(o[p]), !1),
                h = {
                  request: function (e) {
                    return (
                      r6(
                        n,
                        g,
                        ['drag'],
                        d,
                        '',
                        S(S({}, c.request(e)), {
                          requestAble: t,
                          isRequest: !0,
                        }),
                        f
                      ),
                      h
                    );
                  },
                  requestEnd: function () {
                    return (
                      r6(
                        n,
                        g,
                        ['drag'],
                        d,
                        'End',
                        S(S({}, c.requestEnd()), {
                          requestAble: t,
                          isRequest: !0,
                        }),
                        f
                      ),
                      h
                    );
                  },
                };
              return (
                r6(
                  n,
                  g,
                  ['drag'],
                  d,
                  'Start',
                  S(S({}, c.requestStart(e)), {
                    requestAble: t,
                    isRequest: !0,
                  }),
                  f
                ),
                f ? h.request(e).requestEnd() : h
              );
            }),
            (e.prototype.getMoveables = function () {
              return [this];
            }),
            (e.prototype.destroy = function () {
              this.componentWillUnmount();
            }),
            (e.prototype.updateRenderPoses = function () {
              var t = this.getState(),
                e = this.props,
                r = e.padding,
                n = t.originalBeforeOrigin,
                i = t.transformOrigin,
                o = t.allMatrix,
                a = t.is3d,
                s = t.pos1,
                l = t.pos2,
                c = t.pos3,
                f = t.pos4,
                p = t.left,
                d = t.top,
                g = t.isPersisted;
              if (!r) {
                t.renderPoses = [s, l, c, f];
                return;
              }
              var h = rD(r),
                v = h.left,
                m = h.top,
                b = h.bottom,
                x = h.right,
                S = a ? 4 : 3,
                y = [];
              y = g
                ? i
                : this.controlBox && e.groupable
                  ? n
                  : (0, u.PD)(n, [p, d]);
              var E = (0, u.KF)(
                S,
                (0, u.Jm)(
                  y.map(function (t) {
                    return -t;
                  }),
                  S
                ),
                o,
                (0, u.Jm)(i, S)
              );
              t.renderPoses = [
                ru(E, s, [-v, -m], S),
                ru(E, l, [x, -m], S),
                ru(E, c, [-v, b], S),
                ru(E, f, [x, b], S),
              ];
            }),
            (e.prototype.checkUpdate = function () {
              this._isPropTargetChanged = !1;
              var t = this.props,
                e = t.target,
                r = t.container,
                n = t.parentMoveable,
                i = this.state,
                o = i.target,
                a = i.container;
              if (o || e) {
                this.updateAbles();
                var s = !rr(o, e);
                if (s || !rr(a, r)) {
                  var u = r || this.controlBox;
                  u && this.unsetAbles(),
                    this.updateState({ target: e, container: r }),
                    !n && u && this.updateRect('End', !1, !1),
                    (this._isPropTargetChanged = s);
                }
              }
            }),
            (e.prototype.waitToChangeTarget = function () {
              return new Promise(function () {});
            }),
            (e.prototype.triggerEvent = function (t, e) {
              var r = this.props;
              if (
                (this._emitter.trigger(t, e),
                r.parentMoveable && e.isRequest && !e.isRequestChild)
              )
                return r.parentMoveable.triggerEvent(t, e, !0);
              var n = r[t];
              return n && n(e);
            }),
            (e.prototype.useCSS = function (t, e) {
              var r = this.props.customStyledMap,
                n = t + e;
              return r[n] || (r[n] = (0, h.zo)(t, e)), r[n];
            }),
            (e.prototype.getState = function () {
              var t,
                e = this.props;
              (e.target ||
                (null === (t = e.targets) || void 0 === t
                  ? void 0
                  : t.length)) &&
                (this._hasFirstTarget = !0);
              var r = this.controlBox,
                n = e.persistData,
                i = e.firstRenderState;
              if (i && !r) return i;
              if (!this._hasFirstTarget && n) {
                var o = nn(n);
                if (o) return this.updateState(o, !1), this.state;
              }
              return (this.state.isPersisted = !1), this.state;
            }),
            (e.prototype.updateSelectors = function () {}),
            (e.prototype.unsetAbles = function () {
              var t = this;
              this.targetAbles.forEach(function (e) {
                e.unset && e.unset(t);
              });
            }),
            (e.prototype.updateAbles = function (t, e) {
              void 0 === t && (t = this.props.ables), void 0 === e && (e = '');
              var r = this.props.triggerAblesSimultaneously,
                n = this.getEnabledAbles(t),
                i = 'drag'.concat(e, 'Start'),
                o = 'pinch'.concat(e, 'Start'),
                a = 'drag'.concat(e, 'ControlStart'),
                s = re(n, [i, o], r),
                u = re(n, [a], r);
              (this.enabledAbles = n),
                (this.targetAbles = s),
                (this.controlAbles = u);
            }),
            (e.prototype.updateState = function (t, e) {
              if (e) this.isUnmounted || this.setState(t);
              else {
                var r = this.state;
                for (var n in t) r[n] = t[n];
              }
            }),
            (e.prototype.getEnabledAbles = function (t) {
              void 0 === t && (t = this.props.ables);
              var e = this.props;
              return t.filter(function (t) {
                return t && ((t.always && !1 !== e[t.name]) || e[t.name]);
              });
            }),
            (e.prototype.renderAbles = function () {
              var t,
                e,
                r,
                n = this,
                i = this.props.triggerAblesSimultaneously,
                o = { createElement: d.createElement };
              return (
                (this.renderState = {}),
                ((t = ri(
                  re(this.getEnabledAbles(), ['render'], i).map(function (t) {
                    return (0, t.render)(n, o) || [];
                  })
                ).filter(function (t) {
                  return t;
                })),
                (e = []),
                (r = {}),
                t.forEach(function (t, n) {
                  var i = t.key,
                    o = r[i];
                  o || ((o = []), (r[i] = o), e.push(o)), o.push(t);
                }),
                e).map(function (t) {
                  return t[0];
                })
              );
            }),
            (e.prototype.updateCheckInput = function () {
              this.targetGesto &&
                (this.targetGesto.options.checkInput = this.props.checkInput);
            }),
            (e.prototype._getRequestStyles = function () {
              return this.getEnabledAbles().reduce(
                function (t, e) {
                  var r,
                    n,
                    i =
                      null !==
                        (n =
                          null === (r = e.requestStyle) || void 0 === r
                            ? void 0
                            : r.call(e)) && void 0 !== n
                        ? n
                        : [];
                  return E(E([], y(t), !1), y(i), !1);
                },
                E([], y(this.props.requestStyles || []), !1)
              );
            }),
            (e.prototype._updateObserver = function (t) {
              this._updateResizeObserver(t), this._updateMutationObserver(t);
            }),
            (e.prototype._updateEvents = function () {
              var t = this.controlBox,
                e = this.targetAbles.length,
                r = this.controlAbles.length,
                n = this._dragTarget;
              ((!e && this.targetGesto) || this._isTargetChanged(!0)) &&
                (e3(this, !1), this.updateState({ gestos: {} })),
                r || e3(this, !0),
                n &&
                  e &&
                  !this.targetGesto &&
                  (this.targetGesto = r7(this, n, '')),
                !this.controlGesto &&
                  r &&
                  (this.controlGesto = nt(this, t, 'controlAbles', 'Control'));
            }),
            (e.prototype._updateTargets = function () {
              var t = this.props;
              (this._prevPropTarget = this._propTarget),
                (this._prevDragTarget = this._dragTarget),
                (this._prevOriginalDragTarget = this._originalDragTarget),
                (this._prevDragArea = t.dragArea),
                (this._propTarget = t.target),
                (this._originalDragTarget = t.dragTarget || t.target),
                (this._dragTarget = rd(this._originalDragTarget, !0));
            }),
            (e.prototype._renderLines = function () {
              var t = this.props,
                e = t.zoom,
                r = t.hideDefaultLines,
                n = t.hideChildMoveableDefaultLines,
                i = t.parentMoveable;
              if (r || (i && n)) return [];
              var o = this.getState().renderPoses,
                a = { createElement: d.createElement };
              return [
                [0, 1],
                [1, 3],
                [3, 2],
                [2, 0],
              ].map(function (t, r) {
                var n = y(t, 2),
                  i = n[0],
                  s = n[1];
                return tM(a, '', o[i], o[s], e, 'render-line-'.concat(r));
              });
            }),
            (e.prototype._isTargetChanged = function (t) {
              var e = this.props,
                r = e.dragTarget || e.target,
                n = this._prevOriginalDragTarget,
                i = this._prevDragArea,
                o = e.dragArea;
              return (
                (!o && n !== r) ||
                ((t || o) && i !== o) ||
                this._prevPropTarget != this._propTarget
              );
            }),
            (e.prototype._updateNativeEvents = function () {
              var t = this,
                e = this.props.dragArea ? this.areaElement : this.state.target,
                r = this.events,
                n = (0, s.RR)(r);
              if (this._isTargetChanged())
                for (var i in r) {
                  var o = r[i];
                  o && o.destroy(), (r[i] = null);
                }
              if (e) {
                var a = this.enabledAbles;
                n.forEach(function (n) {
                  var i = re(a, [n]),
                    o = i.length > 0,
                    s = r[n];
                  if (!o) {
                    s && (s.destroy(), (r[n] = null));
                    return;
                  }
                  s || ((s = new ne(e, t, n)), (r[n] = s)), s.setAbles(i);
                });
              }
            }),
            (e.prototype._checkUpdateRootContainer = function () {
              var t = this.props.rootContainer;
              !this._rootContainer && t && (this._rootContainer = rd(t, !0));
            }),
            (e.prototype._checkUpdateViewContainer = function () {
              var t = this.props.viewContainer;
              !this._viewContainer && t && (this._viewContainer = rd(t, !0)),
                this._viewContainer &&
                  this._changeAbleViewClassNames(
                    E(
                      E([], y(this._getAbleViewClassNames()), !1),
                      [this.isDragging() ? rA : ''],
                      !1
                    )
                  );
            }),
            (e.prototype._changeAbleViewClassNames = function (t) {
              var e = this._viewContainer,
                r = rn(t.filter(Boolean), function (t) {
                  return t;
                }).map(function (t) {
                  return y(t, 1)[0];
                }),
                n = this._viewClassNames,
                i = (0, m.H)(n, r),
                o = i.removed,
                a = i.added;
              o.forEach(function (t) {
                (0, s.IV)(e, n[t]);
              }),
                a.forEach(function (t) {
                  (0, s.cn)(e, r[t]);
                }),
                (this._viewClassNames = r);
            }),
            (e.prototype._getAbleViewClassNames = function () {
              var t = this;
              return (
                this.getEnabledAbles()
                  .map(function (e) {
                    var r;
                    return (
                      (null === (r = e.viewClassName) || void 0 === r
                        ? void 0
                        : r.call(e, t)) || ''
                    );
                  })
                  .join(' ') + ' '.concat(this._getAbleClassName('-view'))
              ).split(/\s+/g);
            }),
            (e.prototype._getAbleClassName = function (t) {
              var e = this;
              void 0 === t && (t = '');
              var r = this.getEnabledAbles(),
                n = this.targetGesto,
                i = this.controlGesto,
                o = (null == n ? void 0 : n.isFlag()) ? n.getEventData() : {},
                a = (null == i ? void 0 : i.isFlag()) ? i.getEventData() : {};
              return r
                .map(function (r) {
                  var n,
                    i,
                    s,
                    u = r.name,
                    l =
                      (null === (n = r.className) || void 0 === n
                        ? void 0
                        : n.call(r, e)) || '';
                  return (
                    ((null === (i = o[u]) || void 0 === i
                      ? void 0
                      : i.isEventStart) ||
                      (null === (s = a[u]) || void 0 === s
                        ? void 0
                        : s.isEventStart)) &&
                      (l += ' '.concat(
                        ez(''.concat(u).concat(t, '-dragging'))
                      )),
                    l.trim()
                  );
                })
                .filter(Boolean)
                .join(' ');
            }),
            (e.prototype._updateResizeObserver = function (t) {
              var e,
                r = this.props,
                n = r.target,
                i = (0, s.Jj)(this.getControlBoxElement());
              if (!i.ResizeObserver || !n || !r.useResizeObserver) {
                null === (e = this._reiszeObserver) ||
                  void 0 === e ||
                  e.disconnect();
                return;
              }
              if (t.target !== n || !this._reiszeObserver) {
                var o = new i.ResizeObserver(this.checkUpdateRect);
                o.observe(n, { box: 'border-box' }), (this._reiszeObserver = o);
              }
            }),
            (e.prototype._updateMutationObserver = function (t) {
              var e,
                r = this,
                n = this.props,
                i = n.target,
                o = (0, s.Jj)(this.getControlBoxElement());
              if (!o.MutationObserver || !i || !n.useMutationObserver) {
                null === (e = this._mutationObserver) ||
                  void 0 === e ||
                  e.disconnect();
                return;
              }
              if (t.target !== i || !this._mutationObserver) {
                var a = new o.MutationObserver(function (t) {
                  var e, n;
                  try {
                    for (
                      var i = (function (t) {
                          var e =
                              'function' == typeof Symbol && Symbol.iterator,
                            r = e && t[e],
                            n = 0;
                          if (r) return r.call(t);
                          if (t && 'number' == typeof t.length)
                            return {
                              next: function () {
                                return (
                                  t && n >= t.length && (t = void 0),
                                  { value: t && t[n++], done: !t }
                                );
                              },
                            };
                          throw TypeError(
                            e
                              ? 'Object is not iterable.'
                              : 'Symbol.iterator is not defined.'
                          );
                        })(t),
                        o = i.next();
                      !o.done;
                      o = i.next()
                    ) {
                      var a = o.value;
                      'attributes' === a.type &&
                        'style' === a.attributeName &&
                        r.checkUpdateRect();
                    }
                  } catch (t) {
                    e = { error: t };
                  } finally {
                    try {
                      o && !o.done && (n = i.return) && n.call(i);
                    } finally {
                      if (e) throw e.error;
                    }
                  }
                });
                a.observe(i, { attributes: !0 }), (this._mutationObserver = a);
              }
            }),
            (e.defaultProps = {
              dragTargetSelf: !1,
              target: null,
              dragTarget: null,
              container: null,
              rootContainer: null,
              origin: !0,
              parentMoveable: null,
              wrapperMoveable: null,
              isWrapperMounted: !1,
              parentPosition: null,
              warpSelf: !1,
              svgOrigin: '',
              dragContainer: null,
              useResizeObserver: !1,
              useMutationObserver: !1,
              preventDefault: !0,
              linePadding: 0,
              controlPadding: 0,
              ables: [],
              pinchThreshold: 20,
              dragArea: !1,
              passDragArea: !1,
              transformOrigin: '',
              className: '',
              zoom: 1,
              triggerAblesSimultaneously: !1,
              padding: {},
              pinchOutside: !0,
              checkInput: !1,
              dragFocusedInput: !1,
              groupable: !1,
              hideDefaultLines: !1,
              cspNonce: '',
              translateZ: 0,
              cssStyled: null,
              customStyledMap: {},
              props: {},
              stopPropagation: !1,
              preventClickDefault: !1,
              preventClickEventOnDrag: !0,
              flushSync: eO,
              firstRenderState: null,
              persistData: null,
              viewContainer: null,
              requestStyles: [],
              useAccuratePosition: !1,
            }),
            e
          );
        })(d.PureComponent),
        no = {
          name: 'groupable',
          props: [
            'defaultGroupRotate',
            'useDefaultGroupRotate',
            'defaultGroupOrigin',
            'groupable',
            'groupableProps',
            'targetGroups',
            'hideChildMoveableDefaultLines',
          ],
          events: [],
          render: function (t, e) {
            var r,
              n = t.props,
              i = n.targets || [],
              o = t.getState(),
              s = o.left,
              l = o.top,
              c = o.isPersisted,
              f = n.zoom || 1,
              p = t.renderGroupRects,
              d =
                (null === (r = n.persistData) || void 0 === r
                  ? void 0
                  : r.children) || [];
            c
              ? (i = d.map(function () {
                  return null;
                }))
              : (d = []);
            var g = rx(t, 'parentPosition', [s, l], function (t) {
                return t.join(',');
              }),
              h = rx(
                t,
                'requestStyles',
                t.getRequestChildStyles(),
                function (t) {
                  return t.join(',');
                }
              );
            return (
              (t.moveables = t.moveables.slice(0, i.length)),
              E(
                E(
                  [],
                  y(
                    i.map(function (r, i) {
                      return e.createElement(ni, {
                        key: 'moveable' + i,
                        ref: (0, a.xL)(t, 'moveables', i),
                        target: r,
                        origin: !1,
                        requestStyles: h,
                        cssStyled: n.cssStyled,
                        customStyledMap: n.customStyledMap,
                        useResizeObserver: n.useResizeObserver,
                        useMutationObserver: n.useMutationObserver,
                        hideChildMoveableDefaultLines:
                          n.hideChildMoveableDefaultLines,
                        parentMoveable: t,
                        parentPosition: [s, l],
                        persistData: d[i],
                        zoom: f,
                      });
                    })
                  ),
                  !1
                ),
                y(
                  ri(
                    p.map(function (t, r) {
                      var n = [t.pos1, t.pos2, t.pos3, t.pos4];
                      return [
                        [0, 1],
                        [1, 3],
                        [3, 2],
                        [2, 0],
                      ].map(function (t, i) {
                        var o = y(t, 2),
                          a = o[0],
                          s = o[1];
                        return tM(
                          e,
                          '',
                          (0, u.h9)(n[a], g),
                          (0, u.h9)(n[s], g),
                          f,
                          'group-rect-'.concat(r, '-').concat(i)
                        );
                      });
                    })
                  )
                ),
                !1
              )
            );
          },
        },
        na = D('clickable', {
          props: ['clickable'],
          events: ['click', 'clickGroup'],
          always: !0,
          dragRelation: 'weak',
          dragStart: function () {},
          dragControlStart: function () {},
          dragGroupStart: function (t, e) {
            e.datas.inputTarget = e.inputEvent && e.inputEvent.target;
          },
          dragEnd: function (t, e) {
            var r = t.props.target,
              n = e.inputEvent,
              i = e.inputTarget,
              o = !t.isMoveableElement(i) && t.controlBox.contains(i);
            if (!(!n || !i || e.isDrag || t.isMoveableElement(i)) && !o) {
              var a = r.contains(i);
              e7(
                t,
                'onClick',
                e9(t, e, {
                  isDouble: e.isDouble,
                  inputTarget: i,
                  isTarget: r === i,
                  moveableTarget: t.props.target,
                  containsTarget: a,
                })
              );
            }
          },
          dragGroupEnd: function (t, e) {
            var r = e.inputEvent,
              n = e.inputTarget;
            if (
              !(!r || !n || e.isDrag || t.isMoveableElement(n)) &&
              e.datas.inputTarget !== n
            ) {
              var i = t.props.targets,
                o = i.indexOf(n),
                a = o > -1,
                u = !1;
              -1 === o &&
                (u =
                  (o = (0, s.cx)(i, function (t) {
                    return t.contains(n);
                  })) > -1),
                e7(
                  t,
                  'onClickGroup',
                  e9(t, e, {
                    isDouble: e.isDouble,
                    targets: i,
                    inputTarget: n,
                    targetIndex: o,
                    isTarget: a,
                    containsTarget: u,
                    moveableTarget: i[o],
                  })
                );
            }
          },
          dragControlEnd: function (t, e) {
            this.dragEnd(t, e);
          },
          dragGroupControlEnd: function (t, e) {
            this.dragEnd(t, e);
          },
        });
      function ns(t) {
        var e = t.originalDatas.draggable;
        return (
          e ||
            ((t.originalDatas.draggable = {}), (e = t.originalDatas.draggable)),
          S(S({}, t), { datas: e })
        );
      }
      var nu = D('edgeDraggable', {
          css: ['.edge.edgeDraggable.line {\ncursor: move;\n}'],
          render: function (t, e) {
            var r = t.props,
              n = r.edgeDraggable;
            return n
              ? tP(e, 'edgeDraggable', n, t.getState().renderPoses, r.zoom)
              : [];
          },
          dragCondition: function (t, e) {
            var r,
              n = t.props,
              i =
                null === (r = e.inputEvent) || void 0 === r ? void 0 : r.target;
            return (
              !!n.edgeDraggable &&
              !!i &&
              !n.draggable &&
              (0, s.pv)(i, ez('direction')) &&
              (0, s.pv)(i, ez('edge')) &&
              (0, s.pv)(i, ez('edgeDraggable'))
            );
          },
          dragStart: function (t, e) {
            return et.dragStart(t, ns(e));
          },
          drag: function (t, e) {
            return et.drag(t, ns(e));
          },
          dragEnd: function (t, e) {
            return et.dragEnd(t, ns(e));
          },
          dragGroupCondition: function (t, e) {
            var r,
              n = t.props,
              i =
                null === (r = e.inputEvent) || void 0 === r ? void 0 : r.target;
            return (
              !!n.edgeDraggable &&
              !!i &&
              !n.draggable &&
              (0, s.pv)(i, ez('direction')) &&
              (0, s.pv)(i, ez('line'))
            );
          },
          dragGroupStart: function (t, e) {
            return et.dragGroupStart(t, ns(e));
          },
          dragGroup: function (t, e) {
            return et.dragGroup(t, ns(e));
          },
          dragGroupEnd: function (t, e) {
            return et.dragGroupEnd(t, ns(e));
          },
          unset: function (t) {
            return et.unset(t);
          },
        }),
        nl = {
          name: 'individualGroupable',
          props: ['individualGroupable', 'individualGroupableProps'],
          events: [],
        },
        nc = [
          r5,
          rN,
          {
            name: 'snappable',
            dragRelation: 'strong',
            props: [
              'snappable',
              'snapContainer',
              'snapDirections',
              'elementSnapDirections',
              'snapGap',
              'snapGridWidth',
              'snapGridHeight',
              'isDisplaySnapDigit',
              'isDisplayInnerSnapDigit',
              'isDisplayGridGuidelines',
              'snapDigit',
              'snapThreshold',
              'snapRenderThreshold',
              eM,
              eP,
              'horizontalGuidelines',
              'verticalGuidelines',
              'elementGuidelines',
              'bounds',
              'innerBounds',
              'snapDistFormat',
              'maxSnapElementGuidelineDistance',
              'maxSnapElementGapDistance',
            ],
            events: ['snap', 'bound'],
            css: [
              ':host {\n--bounds-color: #d66;\n}\n.guideline {\npointer-events: none;\nz-index: 2;\n}\n.guideline.bounds {\nbackground: #d66;\nbackground: var(--bounds-color);\n}\n.guideline-group {\nposition: absolute;\ntop: 0;\nleft: 0;\n}\n.guideline-group .size-value {\nposition: absolute;\ncolor: #f55;\nfont-size: 12px;\nfont-size: calc(12px * var(--zoom));\nfont-weight: bold;\n}\n.guideline-group.horizontal .size-value {\ntransform-origin: 50% 100%;\ntransform: translateX(-50%);\nleft: 50%;\nbottom: 5px;\nbottom: calc(2px + 3px * var(--zoom));\n}\n.guideline-group.vertical .size-value {\ntransform-origin: 0% 50%;\ntop: 50%;\ntransform: translateY(-50%);\nleft: 5px;\nleft: calc(2px + 3px * var(--zoom));\n}\n.guideline.gap {\nbackground: #f55;\n}\n.size-value.gap {\ncolor: #f55;\n}\n',
            ],
            render: function (t, e) {
              var r,
                n,
                i,
                o,
                a,
                s = t.state,
                u = s.top,
                l = s.left,
                c = s.pos1,
                f = s.pos2,
                p = s.pos3,
                d = s.pos4,
                g = s.snapRenderInfo,
                h = t.props.snapRenderThreshold,
                v = void 0 === h ? 1 : h;
              if (!g || !g.render || !tW(t, ''))
                return (
                  rx(t, 'boundMap', tN(), function (t) {
                    return JSON.stringify(t);
                  }),
                  rx(t, 'innerBoundMap', tN(), function (t) {
                    return JSON.stringify(t);
                  }),
                  []
                );
              s.guidelines = eg(t);
              var m = Math.min(c[0], f[0], p[0], d[0]),
                b = Math.min(c[1], f[1], p[1], d[1]),
                x = g.externalPoses || [],
                D = e1(t.state),
                C = [],
                R = [],
                M = [],
                P = [],
                z = [],
                O = eW(D),
                T = O.width,
                w = O.height,
                G = O.top,
                A = O.left,
                B = O.bottom,
                _ = O.right,
                k = {
                  left: A,
                  right: _,
                  top: G,
                  bottom: B,
                  center: (A + _) / 2,
                  middle: (G + B) / 2,
                },
                I = x.length > 0,
                F = I ? eW(x) : {};
              if (!g.request) {
                if (
                  (g.direction &&
                    z.push(
                      ((N = g.direction),
                      void 0 === (W = v) && (W = 1),
                      (H = []),
                      N[0] && N[1]
                        ? (H = [N, [-N[0], N[1]], [N[0], -N[1]]])
                        : N[0] || N[1]
                          ? t.props.keepRatio
                            ? H.push([-1, -1], [-1, 1], [1, -1], [1, 1], N)
                            : (H.push.apply(
                                H,
                                E(
                                  [],
                                  y(
                                    ((q = [
                                      [-1, -1],
                                      [1, -1],
                                      [-1, -1],
                                      [1, 1],
                                    ]),
                                    tt(N).map(function (t) {
                                      return q[t];
                                    }))
                                  ),
                                  !1
                                )
                              ),
                              H.length > 1 &&
                                H.push([
                                  (H[0][0] + H[1][0]) / 2,
                                  (H[0][1] + H[1][1]) / 2,
                                ]))
                          : [
                              [-1, -1],
                              [1, -1],
                              [1, 1],
                              [-1, 1],
                            ].forEach(function (t, e, r) {
                              var n = r[e + 1] || r[0];
                              H.push(t),
                                H.push([(t[0] + n[0]) / 2, (t[1] + n[1]) / 2]);
                            }),
                      (X = tY(
                        t,
                        (Y = H.map(function (t) {
                          return te(D, t);
                        })).map(function (t) {
                          return t[0];
                        }),
                        Y.map(function (t) {
                          return t[1];
                        }),
                        H.map(function (t) {
                          return tj(t[0]);
                        }),
                        H.map(function (t) {
                          return tj(t[1]);
                        }),
                        W
                      )),
                      (j = tj(
                        H.map(function (t) {
                          return t[0];
                        })[X.vertical.index]
                      )),
                      (L = tj(
                        H.map(function (t) {
                          return t[1];
                        })[X.horizontal.index]
                      )),
                      {
                        vertical: S(S({}, X.vertical), { direction: j }),
                        horizontal: S(S({}, X.horizontal), { direction: L }),
                      })
                    ),
                  g.snap)
                ) {
                  var N,
                    W,
                    q,
                    H,
                    Y,
                    X,
                    j,
                    L,
                    V = eW(D);
                  g.center &&
                    ((V.middle = (V.top + V.bottom) / 2),
                    (V.center = (V.left + V.right) / 2)),
                    z.push(tL(t, V, v));
                }
                I &&
                  (g.center &&
                    ((F.middle = (F.top + F.bottom) / 2),
                    (F.center = (F.left + F.right) / 2)),
                  z.push(tL(t, F, v))),
                  z.forEach(function (t) {
                    var e = t.vertical.posInfos,
                      r = t.horizontal.posInfos;
                    C.push.apply(
                      C,
                      E(
                        [],
                        y(
                          e
                            .filter(function (t) {
                              return t.guidelineInfos.some(function (t) {
                                return !t.guideline.hide;
                              });
                            })
                            .map(function (t) {
                              return { type: 'snap', pos: t.pos };
                            })
                        ),
                        !1
                      )
                    ),
                      R.push.apply(
                        R,
                        E(
                          [],
                          y(
                            r
                              .filter(function (t) {
                                return t.guidelineInfos.some(function (t) {
                                  return !t.guideline.hide;
                                });
                              })
                              .map(function (t) {
                                return { type: 'snap', pos: t.pos };
                              })
                          ),
                          !1
                        )
                      ),
                      M.push.apply(M, E([], y(eD(e)), !1)),
                      P.push.apply(P, E([], y(eD(r)), !1));
                  });
              }
              var U = eC(t, [A, _], [G, B], C, R),
                K = U.boundMap,
                J = U.innerBoundMap;
              I &&
                eC(
                  t,
                  [F.left, F.right],
                  [F.top, F.bottom],
                  C,
                  R,
                  g.externalBounds
                );
              var Z = E(E([], y(M), !1), y(P), !1),
                $ = Z.filter(function (t) {
                  return t.element && !t.gapRects;
                }),
                Q = Z.filter(function (t) {
                  return t.gapRects;
                }).sort(function (t, e) {
                  return t.gap - e.gap;
                });
              e7(
                t,
                'onSnap',
                {
                  guidelines: Z.filter(function (t) {
                    return !t.element;
                  }),
                  elements: $,
                  gaps: Q,
                },
                !0
              );
              var tr = rx(
                  t,
                  'boundMap',
                  K,
                  function (t) {
                    return JSON.stringify(t);
                  },
                  tN()
                ),
                tn = rx(
                  t,
                  'innerBoundMap',
                  J,
                  function (t) {
                    return JSON.stringify(t);
                  },
                  tN()
                );
              return (
                (K === tr || J === tn) &&
                  e7(t, 'onBound', { bounds: K, innerBounds: J }, !0),
                E(
                  E(
                    E(
                      E(
                        E(
                          E(
                            [],
                            y(
                              ((r = [m, b]),
                              (n = t.props.isDisplayInnerSnapDigit),
                              (i = []),
                              ['vertical', 'horizontal'].forEach(function (o) {
                                var a,
                                  s,
                                  u,
                                  l,
                                  c,
                                  f = $.filter(function (t) {
                                    return t.type === o;
                                  }),
                                  p = 'vertical' === o ? 1 : 0,
                                  d = p ? 0 : 1,
                                  g =
                                    ((a = 'vertical' === o ? 0 : 1),
                                    (s = 'vertical' === o ? 1 : 0),
                                    (l = k[(u = a ? tI : tF).start]),
                                    (c = k[u.end]),
                                    rn(f, function (t) {
                                      return t.pos[a];
                                    }).map(function (t) {
                                      var e = [],
                                        r = [];
                                      return (
                                        t.forEach(function (t) {
                                          var i,
                                            f,
                                            p = t.element,
                                            d = t.elementRect.rect;
                                          if (d[u.end] < l) e.push(t);
                                          else if (c < d[u.start]) r.push(t);
                                          else if (
                                            d[u.start] <= l &&
                                            c <= d[u.end] &&
                                            n
                                          ) {
                                            var g = t.pos,
                                              h = {
                                                element: p,
                                                rect: S(
                                                  S({}, d),
                                                  (((i = {})[u.end] =
                                                    d[u.start]),
                                                  i)
                                                ),
                                              },
                                              v = {
                                                element: p,
                                                rect: S(
                                                  S({}, d),
                                                  (((f = {})[u.start] =
                                                    d[u.end]),
                                                  f)
                                                ),
                                              },
                                              m = [0, 0],
                                              b = [0, 0];
                                            (m[a] = g[a]),
                                              (m[s] = g[s]),
                                              (b[a] = g[a]),
                                              (b[s] = g[s] + t.size),
                                              e.push({
                                                type: o,
                                                pos: m,
                                                size: 0,
                                                elementRect: h,
                                                direction: '',
                                                elementDirection: 'end',
                                              }),
                                              r.push({
                                                type: o,
                                                pos: b,
                                                size: 0,
                                                elementRect: v,
                                                direction: '',
                                                elementDirection: 'start',
                                              });
                                          }
                                        }),
                                        e.sort(function (t, e) {
                                          return e.pos[s] - t.pos[s];
                                        }),
                                        r.sort(function (t, e) {
                                          return t.pos[s] - e.pos[s];
                                        }),
                                        {
                                          total: t,
                                          start: e,
                                          end: r,
                                          inner: [],
                                        }
                                      );
                                    })),
                                  h = p ? tF : tI,
                                  v = p ? tI : tF,
                                  m = k[h.start],
                                  b = k[h.end];
                                g.forEach(function (n) {
                                  var a = n.total,
                                    s = n.start,
                                    u = n.end,
                                    l = n.inner,
                                    c = r[d] + a[0].pos[d] - k[v.start],
                                    f = k;
                                  s.forEach(function (n) {
                                    var a = n.elementRect.rect,
                                      s = f[h.start] - a[h.end];
                                    if (s > 0) {
                                      var u = [0, 0];
                                      (u[p] = r[p] + f[h.start] - m - s),
                                        (u[d] = c),
                                        i.push(
                                          ed(
                                            t,
                                            o,
                                            'dashed',
                                            i.length,
                                            s,
                                            u,
                                            n.className,
                                            e
                                          )
                                        );
                                    }
                                    f = a;
                                  }),
                                    (f = k),
                                    u.forEach(function (n) {
                                      var a = n.elementRect.rect,
                                        s = a[h.start] - f[h.end];
                                      if (s > 0) {
                                        var u = [0, 0];
                                        (u[p] = r[p] + f[h.end] - m),
                                          (u[d] = c),
                                          i.push(
                                            ed(
                                              t,
                                              o,
                                              'dashed',
                                              i.length,
                                              s,
                                              u,
                                              n.className,
                                              e
                                            )
                                          );
                                      }
                                      f = a;
                                    }),
                                    l.forEach(function (n) {
                                      var a = n.elementRect.rect,
                                        s = m - a[h.start],
                                        u = a[h.end] - b,
                                        l = [0, 0],
                                        f = [0, 0];
                                      (l[p] = r[p] - s),
                                        (l[d] = c),
                                        (f[p] = r[p] + b - m),
                                        (f[d] = c),
                                        i.push(
                                          ed(
                                            t,
                                            o,
                                            'dashed',
                                            i.length,
                                            s,
                                            l,
                                            n.className,
                                            e
                                          )
                                        ),
                                        i.push(
                                          ed(
                                            t,
                                            o,
                                            'dashed',
                                            i.length,
                                            u,
                                            f,
                                            n.className,
                                            e
                                          )
                                        );
                                    });
                                });
                              }),
                              i)
                            ),
                            !1
                          ),
                          y(
                            ((o = [m, b]),
                            (a = []),
                            ['horizontal', 'vertical'].forEach(function (r) {
                              var n = Q.filter(function (t) {
                                  return t.type === r;
                                }).slice(0, 1),
                                i = 'vertical' === r ? 0 : 1,
                                s = i ? 0 : 1,
                                u = i ? tF : tI,
                                l = i ? tI : tF,
                                c = k[u.start],
                                f = k[u.end],
                                p = k[l.start],
                                d = k[l.end];
                              n.forEach(function (r) {
                                var n = r.gap,
                                  g = r.gapRects,
                                  h = Math.max.apply(
                                    Math,
                                    E(
                                      [p],
                                      y(
                                        g.map(function (t) {
                                          return t.rect[l.start];
                                        })
                                      ),
                                      !1
                                    )
                                  ),
                                  v = Math.min.apply(
                                    Math,
                                    E(
                                      [d],
                                      y(
                                        g.map(function (t) {
                                          return t.rect[l.end];
                                        })
                                      ),
                                      !1
                                    )
                                  ),
                                  m = (h + v) / 2;
                                h !== v &&
                                  m !== (p + d) / 2 &&
                                  g.forEach(function (r) {
                                    var l = r.rect,
                                      d = r.className,
                                      g = [o[0], o[1]];
                                    if (l[u.end] < c) g[i] += l[u.end] - c;
                                    else {
                                      if (!(f < l[u.start])) return;
                                      g[i] += l[u.start] - c - n;
                                    }
                                    (g[s] += m - p),
                                      a.push(
                                        ed(
                                          t,
                                          i ? 'vertical' : 'horizontal',
                                          'gap',
                                          a.length,
                                          n,
                                          g,
                                          d,
                                          e
                                        )
                                      );
                                  });
                              });
                            }),
                            a)
                          ),
                          !1
                        ),
                        y(ep(t, 'horizontal', P, [l, u], k, e)),
                        !1
                      ),
                      y(ep(t, 'vertical', M, [l, u], k, e)),
                      !1
                    ),
                    y(ef(t, 'horizontal', R, m, u, T, 0, e)),
                    !1
                  ),
                  y(ef(t, 'vertical', C, b, l, w, 1, e)),
                  !1
                )
              );
            },
            dragStart: function (t, e) {
              (t.state.snapRenderInfo = {
                request: e.isRequest,
                snap: !0,
                center: !0,
              }),
                eb(t);
            },
            drag: function (t) {
              var e = t.state;
              eb(t) || (e.guidelines = eg(t)),
                e.snapRenderInfo && (e.snapRenderInfo.render = !0);
            },
            pinchStart: function (t) {
              this.unset(t);
            },
            dragEnd: function (t) {
              this.unset(t);
            },
            dragControlCondition: function (t, e) {
              return (
                !!(eR(t, e) || el(t, e)) ||
                (!e.isRequest && e.inputEvent
                  ? (0, s.pv)(e.inputEvent.target, ez('snap-control'))
                  : void 0)
              );
            },
            dragControlStart: function (t) {
              (t.state.snapRenderInfo = null), eb(t);
            },
            dragControl: function (t) {
              this.drag(t);
            },
            dragControlEnd: function (t) {
              this.unset(t);
            },
            dragGroupStart: function (t, e) {
              this.dragStart(t, e);
            },
            dragGroup: function (t) {
              this.drag(t);
            },
            dragGroupEnd: function (t) {
              this.unset(t);
            },
            dragGroupControlStart: function (t) {
              (t.state.snapRenderInfo = null), eb(t);
            },
            dragGroupControl: function (t) {
              this.drag(t);
            },
            dragGroupControlEnd: function (t) {
              this.unset(t);
            },
            unset: function (t) {
              var e = t.state;
              (e.enableSnap = !1),
                (e.guidelines = []),
                (e.snapRenderInfo = null),
                (e.elementRects = []);
            },
          },
          rC,
          et,
          nu,
          ei,
          rM,
          rO,
          {
            name: 'rotatable',
            canPinch: !0,
            props: [
              'rotatable',
              'rotationPosition',
              'throttleRotate',
              'renderDirections',
              'rotationTarget',
              'rotateAroundControls',
              'edge',
              'resolveAblesWithRotatable',
              'displayAroundControls',
            ],
            events: [
              'rotateStart',
              'beforeRotate',
              'rotate',
              'rotateEnd',
              'rotateGroupStart',
              'beforeRotateGroup',
              'rotateGroup',
              'rotateGroupEnd',
            ],
            css: [
              '.rotation {\nposition: absolute;\nheight: 40px;\nwidth: 1px;\ntransform-origin: 50% 100%;\nheight: calc(40px * var(--zoom));\ntop: auto;\nleft: 0;\nbottom: 100%;\nwill-change: transform;\n}\n.rotation .rotation-line {\ndisplay: block;\nwidth: 100%;\nheight: 100%;\ntransform-origin: 50% 50%;\n}\n.rotation .rotation-control {\nborder-color: #4af;\nborder-color: var(--moveable-color);\nbackground:#fff;\ncursor: alias;\n}\n:global .view-rotation-dragging, .rotatable.direction.control {\ncursor: alias;\n}\n.rotatable.direction.control.move {\ncursor: move;\n}\n',
            ],
            viewClassName: function (t) {
              return t.isDragging('rotatable')
                ? ez('view-rotation-dragging')
                : '';
            },
            render: function (t, e) {
              var r = ej(t.props, 'rotatable'),
                n = r.rotatable,
                i = r.rotationPosition,
                o = r.zoom,
                a = r.renderDirections,
                u = r.rotateAroundControls,
                l = r.resolveAblesWithRotatable,
                c = t.getState(),
                f = c.renderPoses,
                p = c.direction;
              if (!n) return null;
              var d = (function t(e, r, n) {
                  var i = y(r, 4),
                    o = i[0],
                    a = i[1],
                    u = i[2],
                    l = i[3];
                  if ('none' === e) return [];
                  if ((0, s.kJ)(e))
                    return e.map(function (e) {
                      return t(e, [o, a, u, l], n)[0];
                    });
                  var c = y((e || 'top').split('-'), 2),
                    f = c[0],
                    p = c[1],
                    d = [o, a];
                  'left' === f
                    ? (d = [u, o])
                    : 'right' === f
                      ? (d = [a, l])
                      : 'bottom' === f && (d = [l, u]);
                  var g = [(d[0][0] + d[1][0]) / 2, (d[0][1] + d[1][1]) / 2],
                    h = eV(d, n);
                  if (p) {
                    var v = 'top' === p || 'left' === p,
                      m = 'bottom' === f || 'left' === f;
                    g = d[(v && !m) || (!v && m) ? 0 : 1];
                  }
                  return [[g, h]];
                })(i, f, p),
                g = [];
              if (
                (d.forEach(function (t, r) {
                  var n = y(t, 2),
                    i = n[0],
                    a = n[1];
                  g.push(
                    e.createElement(
                      'div',
                      {
                        key: 'rotation'.concat(r),
                        className: ez('rotation'),
                        style: {
                          transform: 'translate(-50%) translate('
                            .concat(i[0], 'px, ')
                            .concat(i[1], 'px) rotate(')
                            .concat(a, 'rad)'),
                        },
                      },
                      e.createElement('div', {
                        className: ez('line rotation-line'),
                        style: { transform: 'scaleX('.concat(o, ')') },
                      }),
                      e.createElement('div', {
                        className: ez('control rotation-control'),
                        style: {
                          transform: 'translate(0.5px) scale('.concat(o, ')'),
                        },
                      })
                    )
                  );
                }),
                a)
              ) {
                var h = (0, s.RR)(l || {}),
                  v = {};
                h.forEach(function (t) {
                  l[t].forEach(function (e) {
                    v[e] = t;
                  });
                });
                var m = [];
                (0, s.kJ)(a) &&
                  (m = a.map(function (t) {
                    var e = v[t];
                    return {
                      data: e ? { resolve: e } : {},
                      classNames: e ? ['move'] : [],
                      dir: t,
                    };
                  })),
                  g.push.apply(g, E([], y(tC(t, 'rotatable', m, e)), !1));
              }
              return u && g.push.apply(g, E([], y(tO(t, e)), !1)), g;
            },
            dragControlCondition: el,
            dragControlStart: function (t, e) {
              var r,
                n,
                i,
                o,
                a,
                l,
                c,
                f,
                p,
                d,
                g = e.datas,
                h = e.clientX,
                v = e.clientY,
                m = e.parentRotate,
                b = e.parentFlag,
                x = e.isPinch,
                E = e.isRequest,
                D = t.state,
                C = D.target,
                R = D.left,
                M = D.top,
                P = D.direction,
                z = D.beforeDirection,
                O = D.targetTransform,
                T = D.moveableClientRect,
                w = D.offsetMatrix,
                G = D.targetMatrix,
                A = D.allMatrix,
                B = D.width,
                _ = D.height;
              if (!E && !C) return !1;
              var k = t.getRect();
              (g.rect = k), (g.transform = O), (g.left = R), (g.top = M);
              var I = function (e) {
                  var r = er(t.state, e);
                  (g.fixedDirection = r.fixedDirection),
                    (g.fixedOffset = r.fixedOffset),
                    (g.fixedPosition = r.fixedPosition),
                    tr && tr.setFixedPosition(e);
                },
                F = function (e) {
                  var r,
                    n,
                    i,
                    o,
                    a,
                    s =
                      ((n = (r = t.state).allMatrix),
                      (i = r.is3d),
                      (o = r.width),
                      (a = r.height),
                      {
                        fixedPosition: eF(
                          n,
                          [(o / 2) * (1 + e[0]), (a / 2) * (1 + e[1])],
                          i ? 4 : 3
                        ),
                        fixedDirection: e,
                        fixedOffset: [0, 0],
                      });
                  (g.fixedDirection = s.fixedDirection),
                    (g.fixedOffset = s.fixedOffset),
                    (g.fixedPosition = s.fixedPosition),
                    tr && tr.setFixedDirection(e);
                },
                N = h,
                q = v;
              if (E || x || b) {
                var H = m || 0;
                (g.beforeInfo = {
                  origin: k.beforeOrigin,
                  prevDeg: H,
                  defaultDeg: H,
                  prevSnapDeg: 0,
                  startDist: 0,
                }),
                  (g.afterInfo = S(S({}, g.beforeInfo), { origin: k.origin })),
                  (g.absoluteInfo = S(S({}, g.beforeInfo), {
                    origin: k.origin,
                    startValue: H,
                  }));
              } else {
                var Y =
                  null === (d = e.inputEvent) || void 0 === d
                    ? void 0
                    : d.target;
                if (Y) {
                  var X = W[Y.getAttribute('data-direction') || ''];
                  if (X) {
                    (g.isControl = !0),
                      (g.isAroundControl = (0, s.pv)(Y, ez('around-control'))),
                      (g.controlDirection = X);
                    var L,
                      V,
                      U,
                      K,
                      J,
                      Z,
                      $ = Y.getAttribute('data-resolve');
                    $ && (g.resolveAble = $),
                      (N = (p = y(
                        te(
                          ((L = D.rootMatrix),
                          (V = D.renderPoses),
                          (U = 16 === L.length ? 4 : 3),
                          (K = V.map(function (t) {
                            return eF(L, t, U);
                          })),
                          (J = T.left),
                          (Z = T.top),
                          K.map(function (t) {
                            return [t[0] + J, t[1] + Z];
                          })),
                          X
                        ),
                        2
                      ))[0]),
                      (q = p[1]);
                  }
                }
                (g.beforeInfo = { origin: k.beforeOrigin }),
                  (g.afterInfo = { origin: k.origin }),
                  (g.absoluteInfo = {
                    origin: k.origin,
                    startValue: k.rotation,
                  });
                var Q = I;
                (I = function (e) {
                  var r = D.is3d ? 4 : 3,
                    n = y((0, u.PD)((0, u.P$)(G, r), e), 2),
                    i = n[0],
                    o = n[1],
                    a = (0, u.Kf)(w, (0, u.WK)([i, o], r)),
                    s = (0, u.Kf)(A, (0, u.WK)([e[0], e[1]], r));
                  Q(e);
                  var l = D.posDelta;
                  (g.beforeInfo.origin = (0, u.h9)(a, l)),
                    (g.afterInfo.origin = (0, u.h9)(s, l)),
                    (g.absoluteInfo.origin = (0, u.h9)(s, l)),
                    eo(t, g.beforeInfo, N, q, T),
                    eo(t, g.afterInfo, N, q, T),
                    eo(t, g.absoluteInfo, N, q, T);
                }),
                  (F = function (t) {
                    var e = te(
                      [
                        [0, 0],
                        [B, 0],
                        [0, _],
                        [B, _],
                      ],
                      t
                    );
                    I(e);
                  });
              }
              (g.startClientX = N),
                (g.startClientY = q),
                (g.direction = P),
                (g.beforeDirection = z),
                (g.startValue = 0),
                (g.datas = {}),
                ti(t, e, 'rotate');
              var tt = !1,
                tr = !1;
              g.isControl &&
                g.resolveAble &&
                'resizable' === g.resolveAble &&
                (tr = ei.dragControlStart(
                  t,
                  S(S({}, new j('resizable').dragStart([0, 0], e)), {
                    parentPosition: g.controlPosition,
                    parentFixedPosition: g.fixedPosition,
                  })
                )),
                tr || (tt = et.dragStart(t, new j().dragStart([0, 0], e))),
                I(
                  ((n = (r = t.props).groupable),
                  (i = r.svgOrigin),
                  (a = (o = t.getState()).offsetWidth),
                  (l = o.offsetHeight),
                  (c = o.svg),
                  (f = o.transformOrigin),
                  !n && c && i ? rb(i, a, l) : f)
                );
              var to = e9(
                  t,
                  e,
                  S(
                    S(
                      {
                        set: function (t) {
                          g.startValue = (t * Math.PI) / 180;
                        },
                        setFixedDirection: F,
                        setFixedPosition: I,
                      },
                      tn(t, e)
                    ),
                    { dragStart: tt, resizeStart: tr }
                  )
                ),
                ta = e7(t, 'onRotateStart', to);
              return (
                (g.isRotate = !1 !== ta),
                (D.snapRenderInfo = { request: e.isRequest }),
                !!g.isRotate && to
              );
            },
            dragControl: function (t, e) {
              var r,
                n,
                i,
                o,
                a,
                l,
                c,
                f,
                p,
                d,
                g,
                h,
                v,
                m = e.datas,
                b = e.clientDistX,
                x = e.clientDistY,
                E = e.parentRotate,
                D = e.parentFlag,
                C = e.isPinch,
                R = e.groupDelta,
                M = e.resolveMatrix,
                P = m.beforeDirection,
                z = m.beforeInfo,
                O = m.afterInfo,
                T = m.absoluteInfo,
                w = m.isRotate,
                G = m.startValue,
                A = m.rect,
                B = m.startClientX,
                _ = m.startClientY;
              if (w) {
                K(t, e, 'rotate');
                var k =
                    P *
                    L(e.datas.beforeTransform, [50, 50], 100, 100).direction,
                  I = t.props.parentMoveable,
                  F = 0,
                  N = 0,
                  W = 0,
                  q = (180 / Math.PI) * G,
                  H = T.startValue,
                  Y = !1,
                  j = B + b,
                  V = _ + x;
                if (!D && 'parentDist' in e) {
                  var U = e.parentDist;
                  (f = U), (d = U), (h = U);
                } else
                  C || D
                    ? ((f = ea(E, P, z)), (d = ea(E, k, O)), (h = ea(E, k, T)))
                    : ((f = es(j, V, P, z)),
                      (d = es(j, V, k, O)),
                      (h = es(j, V, k, T)),
                      (Y = !0));
                if (
                  (e7(
                    t,
                    'onBeforeRotate',
                    e9(
                      t,
                      e,
                      {
                        beforeRotation: (p = q + f),
                        rotation: (g = q + d),
                        absoluteRotation: (v = H + h),
                        setRotation: function (t) {
                          (f = d = t - q), (h = d);
                        },
                      },
                      !0
                    )
                  ),
                  (F = (a = y(eu(t, A, z, f, q, Y), 3))[0]),
                  (f = a[1]),
                  (p = a[2]),
                  (N = (l = y(eu(t, A, O, d, q, Y), 3))[0]),
                  (d = l[1]),
                  (g = l[2]),
                  (W = (c = y(eu(t, A, T, h, H, Y), 3))[0]),
                  (h = c[1]),
                  (v = c[2]),
                  W || N || F || I || M)
                ) {
                  var Z = J(
                    m,
                    'rotate('.concat(g, 'deg)'),
                    'rotate('.concat(d, 'deg)')
                  );
                  M &&
                    (m.fixedPosition = tp(
                      t,
                      m.targetAllTransform,
                      m.fixedDirection,
                      m.fixedOffset,
                      m
                    ));
                  var $ =
                      ((r = d),
                      (n = m.fixedDirection),
                      (i = m.fixedPosition),
                      (o = m.fixedOffset),
                      td(t, 'rotate('.concat(r, 'deg)'), n, i, o, m)),
                    Q = (0, u.h9)(
                      (0, u.PD)(R || [0, 0], $),
                      m.prevInverseDist || [0, 0]
                    );
                  (m.prevInverseDist = $), (m.requestValue = null);
                  var tt = tf(t, Z, Q, C, e),
                    te = tt,
                    tr = (0, s.zt)([j, V], T.startAbsoluteOrigin) - T.startDist,
                    tn = void 0;
                  if ('resizable' === m.resolveAble) {
                    var ti = ei.dragControl(
                      t,
                      S(
                        S(
                          {},
                          X(
                            e,
                            t.state,
                            [e.deltaX, e.deltaY],
                            !!C,
                            !1,
                            'resizable'
                          )
                        ),
                        { resolveMatrix: !0, parentDistance: tr }
                      )
                    );
                    ti && ((tn = ti), (te = e5(te, ti, e)));
                  }
                  var to = e9(
                    t,
                    e,
                    S(
                      S(
                        {
                          delta: N,
                          dist: d,
                          rotate: g,
                          rotation: g,
                          beforeDist: f,
                          beforeDelta: F,
                          beforeRotate: p,
                          beforeRotation: p,
                          absoluteDist: h,
                          absoluteDelta: W,
                          absoluteRotate: v,
                          absoluteRotation: v,
                          isPinch: !!C,
                          resize: tn,
                        },
                        tt
                      ),
                      te
                    )
                  );
                  return e7(t, 'onRotate', to), to;
                }
              }
            },
            dragControlEnd: function (t, e) {
              var r = e.datas;
              if (r.isRotate) {
                r.isRotate = !1;
                var n = e6(t, e, {});
                return e7(t, 'onRotateEnd', n), n;
              }
            },
            dragGroupControlCondition: el,
            dragGroupControlStart: function (t, e) {
              var r = e.datas,
                n = t.state,
                i = n.left,
                o = n.top,
                a = n.beforeOrigin,
                s = this.dragControlStart(t, e);
              if (!s) return !1;
              s.set(r.beforeDirection * t.rotation);
              var l = tE(t, this, 'dragControlStart', e, function (t, e) {
                  var r = t.state,
                    n = r.left,
                    s = r.top,
                    l = r.beforeOrigin,
                    c = (0, u.PD)((0, u.h9)([n, s], [i, o]), (0, u.h9)(l, a));
                  return (
                    (e.datas.startGroupClient = c),
                    (e.datas.groupClient = c),
                    S(S({}, e), { parentRotate: 0 })
                  );
                }),
                c = S(S({}, s), { targets: t.props.targets, events: l }),
                f = e7(t, 'onRotateGroupStart', c);
              return (r.isRotate = !1 !== f), !!r.isRotate && s;
            },
            dragGroupControl: function (t, e) {
              var r = e.datas;
              if (r.isRotate) {
                e8(t, 'onBeforeRotate', function (r) {
                  e7(
                    t,
                    'onBeforeRotateGroup',
                    e9(t, e, S(S({}, r), { targets: t.props.targets }), !0)
                  );
                });
                var n = this.dragControl(t, e);
                if (n) {
                  var i = r.beforeDirection,
                    o = n.beforeDist,
                    a = (o / 180) * Math.PI,
                    s = tE(t, this, 'dragControl', e, function (t, e) {
                      var r = e.datas.startGroupClient,
                        n = y(e.datas.groupClient, 2),
                        s = n[0],
                        l = n[1],
                        c = y((0, u.U1)(r, a * i), 2),
                        f = c[0],
                        p = c[1];
                      return (
                        (e.datas.groupClient = [f, p]),
                        S(S({}, e), {
                          parentRotate: o,
                          groupDelta: [f - s, p - l],
                        })
                      );
                    });
                  t.rotation = i * n.beforeRotation;
                  var l = S(
                    {
                      targets: t.props.targets,
                      events: s,
                      set: function (e) {
                        t.rotation = e;
                      },
                      setGroupRotation: function (e) {
                        t.rotation = e;
                      },
                    },
                    n
                  );
                  return e7(t, 'onRotateGroup', l), l;
                }
              }
            },
            dragGroupControlEnd: function (t, e) {
              var r = e.isDrag;
              if (e.datas.isRotate) {
                this.dragControlEnd(t, e);
                var n = tE(t, this, 'dragControlEnd', e),
                  i = e6(t, e, { targets: t.props.targets, events: n });
                return e7(t, 'onRotateGroupEnd', i), r;
              }
            },
            request: function (t) {
              var e = {},
                r = 0,
                n = t.getRotation();
              return {
                isControl: !0,
                requestStart: function () {
                  return { datas: e };
                },
                request: function (t) {
                  return (
                    'deltaRotate' in t
                      ? (r += t.deltaRotate)
                      : 'rotate' in t && (r = t.rotate - n),
                    { datas: e, parentDist: r }
                  );
                },
                requestEnd: function () {
                  return { datas: e, isDrag: !0 };
                },
              };
            },
          },
          {
            name: 'scrollable',
            canPinch: !0,
            props: [
              'scrollable',
              'scrollContainer',
              'scrollThreshold',
              'scrollThrottleTime',
              'getScrollPosition',
              'scrollOptions',
            ],
            events: ['scroll', 'scrollGroup'],
            dragRelation: 'strong',
            dragStart: function (t, e) {
              var r = t.props,
                n = r.scrollContainer,
                i = void 0 === n ? t.getContainer() : n,
                o = r.scrollOptions,
                a = new f.Z(),
                s = rd(i, !0);
              (e.datas.dragScroll = a), (t.state.dragScroll = a);
              var u = e.isControl ? 'controlGesto' : 'targetGesto',
                l = e.targets;
              a
                .on('scroll', function (r) {
                  var n = e9(t, e, {
                    scrollContainer: r.container,
                    direction: r.direction,
                  });
                  l && (n.targets = l),
                    e7(t, l ? 'onScrollGroup' : 'onScroll', n);
                })
                .on('move', function (e) {
                  var r = e.offsetX,
                    n = e.offsetY,
                    i = e.inputEvent;
                  t[u].scrollBy(r, n, i.inputEvent, !1);
                })
                .on('scrollDrag', function (e) {
                  (0, e.next)(t[u].getCurrentEvent());
                }),
                a.dragStart(e, S({ container: s }, o));
            },
            checkScroll: function (t, e) {
              var r = e.datas.dragScroll;
              if (r) {
                var n = t.props,
                  i = n.scrollContainer,
                  o = void 0 === i ? t.getContainer() : i,
                  a = n.scrollThreshold,
                  s = n.scrollThrottleTime,
                  u = n.getScrollPosition,
                  l = void 0 === u ? rF : u,
                  c = n.scrollOptions;
                return (
                  r.drag(
                    e,
                    S(
                      {
                        container: o,
                        threshold: void 0 === a ? 0 : a,
                        throttleTime: void 0 === s ? 0 : s,
                        getScrollPosition: function (t) {
                          return l({
                            scrollContainer: t.container,
                            direction: t.direction,
                          });
                        },
                      },
                      c
                    )
                  ),
                  !0
                );
              }
            },
            drag: function (t, e) {
              return this.checkScroll(t, e);
            },
            dragEnd: function (t, e) {
              e.datas.dragScroll.dragEnd(), (e.datas.dragScroll = null);
            },
            dragControlStart: function (t, e) {
              return this.dragStart(t, S(S({}, e), { isControl: !0 }));
            },
            dragControl: function (t, e) {
              return this.drag(t, e);
            },
            dragControlEnd: function (t, e) {
              return this.dragEnd(t, e);
            },
            dragGroupStart: function (t, e) {
              return this.dragStart(
                t,
                S(S({}, e), { targets: t.props.targets })
              );
            },
            dragGroup: function (t, e) {
              return this.drag(t, S(S({}, e), { targets: t.props.targets }));
            },
            dragGroupEnd: function (t, e) {
              return this.dragEnd(t, S(S({}, e), { targets: t.props.targets }));
            },
            dragGroupControlStart: function (t, e) {
              return this.dragStart(
                t,
                S(S({}, e), { targets: t.props.targets, isControl: !0 })
              );
            },
            dragGroupControl: function (t, e) {
              return this.drag(t, S(S({}, e), { targets: t.props.targets }));
            },
            dragGroupControEnd: function (t, e) {
              return this.dragEnd(t, S(S({}, e), { targets: t.props.targets }));
            },
            unset: function (t) {
              var e,
                r = t.state;
              null === (e = r.dragScroll) || void 0 === e || e.dragEnd(),
                (r.dragScroll = null);
            },
          },
          rW,
          rI,
          {
            name: 'originDraggable',
            props: ['originDraggable', 'originRelative'],
            events: ['dragOriginStart', 'dragOrigin', 'dragOriginEnd'],
            css: [
              ':host[data-able-origindraggable] .control.origin {\npointer-events: auto;\n}',
            ],
            dragControlCondition: function (t, e) {
              return e.isRequest
                ? 'originDraggable' === e.requestAble
                : (0, s.pv)(e.inputEvent.target, ez('origin'));
            },
            dragControlStart: function (t, e) {
              var r = e.datas;
              U(t, e);
              var n = e9(t, e, {
                  dragStart: et.dragStart(t, new j().dragStart([0, 0], e)),
                }),
                i = e7(t, 'onDragOriginStart', n);
              return ((r.startOrigin = t.state.transformOrigin),
              (r.startTargetOrigin = t.state.targetOrigin),
              (r.prevOrigin = [0, 0]),
              (r.isDragOrigin = !0),
              !1 === i)
                ? ((r.isDragOrigin = !1), !1)
                : n;
            },
            dragControl: function (t, e) {
              var r = e.datas,
                n = e.isPinch,
                i = e.isRequest;
              if (!r.isDragOrigin) return !1;
              var o = y(Q(e), 2),
                a = o[0],
                s = o[1],
                l = t.state,
                c = l.width,
                f = l.height,
                p = l.offsetMatrix,
                d = l.targetMatrix,
                g = l.is3d,
                h = t.props.originRelative,
                v = void 0 === h || h,
                m = g ? 4 : 3,
                b = [a, s];
              if (i) {
                var x = e.distOrigin;
                (x[0] || x[1]) && (b = x);
              }
              var E = (0, u.PD)(r.startOrigin, b),
                D = (0, u.PD)(r.startTargetOrigin, b),
                C = (0, u.h9)(b, r.prevOrigin),
                R = tr(p, d, E, m),
                M = t.getRect(),
                P = eW(eN(R, c, f, m)),
                z = [M.left - P.left, M.top - P.top];
              r.prevOrigin = b;
              var O = [rl(D[0], c, v), rl(D[1], f, v)].join(' '),
                T = et.drag(t, X(e, t.state, z, !!n, !1)),
                w = e9(
                  t,
                  e,
                  S(
                    S(
                      {
                        width: c,
                        height: f,
                        origin: E,
                        dist: b,
                        delta: C,
                        transformOrigin: O,
                        drag: T,
                      },
                      e4({ transformOrigin: O, transform: T.transform }, e)
                    ),
                    { afterTransform: T.transform }
                  )
                );
              return e7(t, 'onDragOrigin', w), w;
            },
            dragControlEnd: function (t, e) {
              return (
                !!e.datas.isDragOrigin &&
                (e7(t, 'onDragOriginEnd', e6(t, e, {})), !0)
              );
            },
            dragGroupControlCondition: function (t, e) {
              return this.dragControlCondition(t, e);
            },
            dragGroupControlStart: function (t, e) {
              return !!this.dragControlStart(t, e);
            },
            dragGroupControl: function (t, e) {
              var r = this.dragControl(t, e);
              return !!r && ((t.transformOrigin = r.transformOrigin), !0);
            },
            request: function (t) {
              var e = {},
                r = t.getRect(),
                n = 0,
                i = 0,
                o = r.transformOrigin,
                a = [0, 0];
              return {
                isControl: !0,
                requestStart: function () {
                  return { datas: e };
                },
                request: function (t) {
                  return (
                    'deltaOrigin' in t
                      ? ((a[0] += t.deltaOrigin[0]), (a[1] += t.deltaOrigin[1]))
                      : 'origin' in t
                        ? ((a[0] = t.origin[0] - o[0]),
                          (a[1] = t.origin[1] - o[1]))
                        : ('x' in t
                            ? (n = t.x - r.left)
                            : 'deltaX' in t && (n += t.deltaX),
                          'y' in t
                            ? (i = t.y - r.top)
                            : 'deltaY' in t && (i += t.deltaY)),
                    { datas: e, distX: n, distY: i, distOrigin: a }
                  );
                },
                requestEnd: function () {
                  return { datas: e, isDrag: !0 };
                },
              };
            },
          },
          {
            name: 'clippable',
            props: [
              'clippable',
              'defaultClipPath',
              'customClipPath',
              'keepRatio',
              'clipRelative',
              'clipArea',
              'dragWithClip',
              'clipTargetBounds',
              'clipVerticalGuidelines',
              'clipHorizontalGuidelines',
              'clipSnapThreshold',
            ],
            events: ['clipStart', 'clip', 'clipEnd'],
            css: [
              '.control.clip-control {\nbackground: #6d6;\ncursor: pointer;\n}\n.control.clip-control.clip-radius {\nbackground: #d66;\n}\n.line.clip-line {\nbackground: #6e6;\ncursor: move;\nz-index: 1;\n}\n.clip-area {\nposition: absolute;\ntop: 0;\nleft: 0;\n}\n.clip-ellipse {\nposition: absolute;\ncursor: move;\nborder: 1px solid #6d6;\nborder: var(--zoompx) solid #6d6;\nborder-radius: 50%;\ntransform-origin: 0px 0px;\n}',
              ':host {\n--bounds-color: #d66;\n}',
              '.guideline {\npointer-events: none;\nz-index: 2;\n}',
              '.line.guideline.bounds {\nbackground: #d66;\nbackground: var(--bounds-color);\n}',
            ],
            render: function (t, e) {
              var r = t.props,
                n = r.customClipPath,
                i = r.defaultClipPath,
                o = r.clipArea,
                a = r.zoom,
                l = r.groupable,
                c = t.getState(),
                f = c.target,
                p = c.width,
                d = c.height,
                g = c.allMatrix,
                h = c.is3d,
                v = c.left,
                m = c.top,
                b = c.pos1,
                x = c.pos2,
                S = c.pos3,
                D = c.pos4,
                C = c.clipPathState,
                R = c.snapBoundInfos,
                M = c.rotation;
              if (!f || l) return [];
              var P = r1(f, p, d, i || 'inset', C || n);
              if (!P) return [];
              var z = h ? 4 : 3,
                O = P.type,
                T = P.poses.map(function (t) {
                  var e = eF(g, t.pos, z);
                  return [e[0] - v, e[1] - m];
                }),
                w = [],
                G = [],
                A = 'rect' === O,
                B = 'inset' === O,
                _ = 'polygon' === O;
              if (A || B || _) {
                var k = B ? T.slice(0, 8) : T;
                G = k.map(function (t, r) {
                  var n = 0 === r ? k[k.length - 1] : k[r - 1],
                    i = (0, s.jv)(n, t),
                    o = eH(n, t);
                  return e.createElement('div', {
                    key: 'clipLine'.concat(r),
                    className: ez('line', 'clip-line', 'snap-control'),
                    'data-clip-index': r,
                    style: {
                      width: ''.concat(o, 'px'),
                      transform: 'translate('
                        .concat(n[0], 'px, ')
                        .concat(n[1], 'px) rotate(')
                        .concat(i, 'rad) scaleY(')
                        .concat(a, ')'),
                    },
                  });
                });
              }
              if (
                ((w = T.map(function (t, r) {
                  return e.createElement('div', {
                    key: 'clipControl'.concat(r),
                    className: ez('control', 'clip-control', 'snap-control'),
                    'data-clip-index': r,
                    style: {
                      transform: 'translate('
                        .concat(t[0], 'px, ')
                        .concat(t[1], 'px) rotate(')
                        .concat(M, 'rad) scale(')
                        .concat(a, ')'),
                    },
                  });
                })),
                B &&
                  w.push.apply(
                    w,
                    E(
                      [],
                      y(
                        T.slice(8).map(function (t, r) {
                          return e.createElement('div', {
                            key: 'clipRadiusControl'.concat(r),
                            className: ez(
                              'control',
                              'clip-control',
                              'clip-radius',
                              'snap-control'
                            ),
                            'data-clip-index': 8 + r,
                            style: {
                              transform: 'translate('
                                .concat(t[0], 'px, ')
                                .concat(t[1], 'px) rotate(')
                                .concat(M, 'rad) scale(')
                                .concat(a, ')'),
                            },
                          });
                        })
                      ),
                      !1
                    )
                  ),
                'circle' === O || 'ellipse' === O)
              ) {
                var I = P.left,
                  F = P.top,
                  N = P.radiusX,
                  W = P.radiusY,
                  q = y((0, u.h9)(eF(g, [I, F], z), eF(g, [0, 0], z)), 2),
                  H = q[0],
                  Y = q[1],
                  X = 'none';
                if (!o) {
                  for (
                    var j = Math.max(10, N / 5, W / 5), L = [], V = 0;
                    V <= j;
                    ++V
                  ) {
                    var U = ((2 * Math.PI) / j) * V;
                    L.push([
                      N + (N - a) * Math.cos(U),
                      W + (W - a) * Math.sin(U),
                    ]);
                  }
                  L.push([N, -2]),
                    L.push([-2, -2]),
                    L.push([-2, 2 * W + 2]),
                    L.push([2 * N + 2, 2 * W + 2]),
                    L.push([2 * N + 2, -2]),
                    L.push([N, -2]),
                    (X = 'polygon('.concat(
                      L.map(function (t) {
                        return ''.concat(t[0], 'px ').concat(t[1], 'px');
                      }).join(', '),
                      ')'
                    ));
                }
                w.push(
                  e.createElement('div', {
                    key: 'clipEllipse',
                    className: ez('clip-ellipse', 'snap-control'),
                    style: {
                      width: ''.concat(2 * N, 'px'),
                      height: ''.concat(2 * W, 'px'),
                      clipPath: X,
                      transform: 'translate('
                        .concat(-v + H, 'px, ')
                        .concat(-m + Y, 'px) ')
                        .concat(ek(g)),
                    },
                  })
                );
              }
              if (o) {
                var K = eW(E([b, x, S, D], y(T), !1)),
                  J = K.width,
                  Z = K.height,
                  $ = K.left,
                  Q = K.top;
                if (_ || A || B) {
                  var L = B ? T.slice(0, 8) : T;
                  w.push(
                    e.createElement('div', {
                      key: 'clipArea',
                      className: ez('clip-area', 'snap-control'),
                      style: {
                        width: ''.concat(J, 'px'),
                        height: ''.concat(Z, 'px'),
                        transform: 'translate('
                          .concat($, 'px, ')
                          .concat(Q, 'px)'),
                        clipPath: 'polygon('.concat(
                          L.map(function (t) {
                            return ''
                              .concat(t[0] - $, 'px ')
                              .concat(t[1] - Q, 'px');
                          }).join(', '),
                          ')'
                        ),
                      },
                    })
                  );
                }
              }
              return (
                R &&
                  ['vertical', 'horizontal'].forEach(function (t) {
                    var r = R[t],
                      n = 'horizontal' === t;
                    r.isSnap &&
                      G.push.apply(
                        G,
                        E(
                          [],
                          y(
                            r.snap.posInfos.map(function (r, i) {
                              var o = r.pos;
                              return tM(
                                e,
                                '',
                                (0, u.h9)(eF(g, n ? [0, o] : [o, 0], z), [
                                  v,
                                  m,
                                ]),
                                (0, u.h9)(eF(g, n ? [p, o] : [o, d], z), [
                                  v,
                                  m,
                                ]),
                                a,
                                'clip'.concat(t, 'snap').concat(i),
                                'guideline'
                              );
                            })
                          ),
                          !1
                        )
                      ),
                      r.isBound &&
                        G.push.apply(
                          G,
                          E(
                            [],
                            y(
                              r.bounds.map(function (r, i) {
                                var o = r.pos;
                                return tM(
                                  e,
                                  '',
                                  (0, u.h9)(eF(g, n ? [0, o] : [o, 0], z), [
                                    v,
                                    m,
                                  ]),
                                  (0, u.h9)(eF(g, n ? [p, o] : [o, d], z), [
                                    v,
                                    m,
                                  ]),
                                  a,
                                  'clip'.concat(t, 'bounds').concat(i),
                                  'guideline',
                                  'bounds',
                                  'bold'
                                );
                              })
                            ),
                            !1
                          )
                        );
                  }),
                E(E([], y(w), !1), y(G), !1)
              );
            },
            dragControlCondition: function (t, e) {
              return (
                e.inputEvent &&
                (e.inputEvent.target.getAttribute('class') || '').indexOf(
                  'clip'
                ) > -1
              );
            },
            dragStart: function (t, e) {
              var r = t.props.dragWithClip;
              return void 0 !== r && !r && this.dragControlStart(t, e);
            },
            drag: function (t, e) {
              return this.dragControl(t, S(S({}, e), { isDragTarget: !0 }));
            },
            dragEnd: function (t, e) {
              return this.dragControlEnd(t, e);
            },
            dragControlStart: function (t, e) {
              var r = t.state,
                n = t.props,
                i = n.defaultClipPath,
                o = n.customClipPath,
                a = r.target,
                s = r.width,
                u = r.height,
                l = e.inputEvent ? e.inputEvent.target : null,
                c = (l && l.getAttribute('class')) || '',
                f = e.datas,
                p = r1(a, s, u, i || 'inset', o);
              if (!p) return !1;
              var d = p.clipText;
              return !1 ===
                e7(
                  t,
                  'onClipStart',
                  e9(t, e, {
                    clipType: p.type,
                    clipStyle: d,
                    poses: p.poses.map(function (t) {
                      return t.pos;
                    }),
                  })
                )
                ? ((f.isClipStart = !1), !1)
                : ((f.isControl = c && c.indexOf('clip-control') > -1),
                  (f.isLine = c.indexOf('clip-line') > -1),
                  (f.isArea =
                    c.indexOf('clip-area') > -1 ||
                    c.indexOf('clip-ellipse') > -1),
                  (f.clipIndex = l
                    ? parseInt(l.getAttribute('data-clip-index'), 10)
                    : -1),
                  (f.clipPath = p),
                  (f.isClipStart = !0),
                  (r.clipPathState = d),
                  U(t, e),
                  !0);
            },
            dragControl: function (t, e) {
              var r,
                n,
                i,
                o = e.datas,
                a = e.originalDatas,
                l = e.isDragTarget;
              if (!o.isClipStart) return !1;
              var c = o.isControl,
                f = o.isLine,
                p = o.isArea,
                d = o.clipIndex,
                g = o.clipPath;
              if (!g) return !1;
              var h = ej(t.props, 'clippable'),
                v = h.keepRatio,
                m = 0,
                b = 0,
                x = a.draggable,
                D = Q(e);
              l && x
                ? ((m = (r = y(x.prevBeforeDist, 2))[0]), (b = r[1]))
                : ((m = (n = y(D, 2))[0]), (b = n[1]));
              var C = [m, b],
                R = t.state,
                M = R.width,
                P = R.height,
                z = g.type,
                O = g.poses,
                T = g.splitter,
                w = O.map(function (t) {
                  return t.pos;
                });
              p || c || f || ((m = -m), (b = -b));
              var G = !c || 'nesw' === O[d].direction,
                A = 'inset' === z || 'rect' === z,
                B = O.map(function () {
                  return [0, 0];
                });
              if (c && !G) {
                var _ = O[d],
                  k = _.horizontal,
                  I = _.vertical;
                B = (function (t, e, r, n, i) {
                  var o = t[e],
                    a = o.direction,
                    s = o.sub,
                    u = t.map(function () {
                      return [0, 0];
                    }),
                    l = a ? a.split('') : [];
                  if (n && e < 8) {
                    var c = l.filter(function (t) {
                        return 'w' === t || 'e' === t;
                      }),
                      f = l.filter(function (t) {
                        return 'n' === t || 's' === t;
                      }),
                      p = c[0],
                      d = f[0];
                    u[e] = r;
                    var g = y(r0(t), 2),
                      h = g[0],
                      v = g[1],
                      m = h && v ? h / v : 0;
                    if (m && i) {
                      var b = t[(e + 4) % 8].pos,
                        x = [0, 0];
                      a.indexOf('w') > -1
                        ? (x[0] = -1)
                        : a.indexOf('e') > -1 && (x[0] = 1),
                        a.indexOf('n') > -1
                          ? (x[1] = -1)
                          : a.indexOf('s') > -1 && (x[1] = 1);
                      var S = rv([h, v], r, m, x, !0),
                        E = h + S[0],
                        D = v + S[1],
                        C = b[1],
                        R = b[1],
                        M = b[0],
                        P = b[0];
                      -1 === x[0]
                        ? (M = P - E)
                        : 1 === x[0]
                          ? (P = M + E)
                          : ((M -= E / 2), (P += E / 2)),
                        -1 === x[1]
                          ? (C = R - D)
                          : (R = 1 === x[1] ? C + D : (C = R - D / 2) + D);
                      var z = rQ(C, P, R, M);
                      t.forEach(function (t, e) {
                        (u[e][0] = z[e].pos[0] - t.pos[0]),
                          (u[e][1] = z[e].pos[1] - t.pos[1]);
                      });
                    } else
                      t.forEach(function (t, e) {
                        var n = t.direction;
                        n &&
                          (n.indexOf(p) > -1 && (u[e][0] = r[0]),
                          n.indexOf(d) > -1 && (u[e][1] = r[1]));
                      }),
                        p && ((u[1][0] = r[0] / 2), (u[5][0] = r[0] / 2)),
                        d && ((u[3][1] = r[1] / 2), (u[7][1] = r[1] / 2));
                  } else
                    a && !s
                      ? l.forEach(function (e) {
                          var n = 'n' === e || 's' === e;
                          t.forEach(function (t, i) {
                            var o = t.direction,
                              a = t.horizontal,
                              s = t.vertical;
                            o &&
                              -1 !== o.indexOf(e) &&
                              (u[i] = [n || !a ? 0 : r[0], n && s ? r[1] : 0]);
                          });
                        })
                      : (u[e] = r);
                  return u;
                })(O, d, [m * ry(k), b * ry(I)], A, v);
              } else
                G &&
                  (B = w.map(function () {
                    return [m, b];
                  }));
              var F = w.map(function (t, e) {
                  return (0, u.PD)(t, B[e]);
                }),
                N = E([], y(F), !1);
              R.snapBoundInfos = null;
              var W = 'circle' === g.type,
                q = 'ellipse' === g.type;
              if (W || q) {
                var H = eW(F),
                  Y = ry(H.bottom - H.top),
                  X = ry(q ? H.right - H.left : Y),
                  j = F[0][1] + Y,
                  L = F[0][0] - X,
                  V = F[0][0] + X;
                W && (N.push([V, H.bottom]), B.push([1, 0])),
                  N.push([H.left, j]),
                  B.push([0, 1]),
                  N.push([L, H.bottom]),
                  B.push([1, 0]);
              }
              var U = em(
                  (h.clipHorizontalGuidelines || []).map(function (t) {
                    return (0, s.AA)(''.concat(t), P);
                  }),
                  (h.clipVerticalGuidelines || []).map(function (t) {
                    return (0, s.AA)(''.concat(t), M);
                  }),
                  M,
                  P
                ),
                K = [],
                J = [];
              if (W || q) (K = [N[4][0], N[2][0]]), (J = [N[1][1], N[3][1]]);
              else if (A) {
                var Z = [N[0], N[2], N[4], N[6]],
                  $ = [B[0], B[2], B[4], B[6]];
                (K = Z.filter(function (t, e) {
                  return $[e][0];
                }).map(function (t) {
                  return t[0];
                })),
                  (J = Z.filter(function (t, e) {
                    return $[e][1];
                  }).map(function (t) {
                    return t[1];
                  }));
              } else
                (K = N.filter(function (t, e) {
                  return B[e][0];
                }).map(function (t) {
                  return t[0];
                })),
                  (J = N.filter(function (t, e) {
                    return B[e][1];
                  }).map(function (t) {
                    return t[1];
                  }));
              var tt = [0, 0],
                te = t8(
                  U,
                  h.clipTargetBounds && {
                    left: 0,
                    top: 0,
                    right: M,
                    bottom: P,
                  },
                  K,
                  J,
                  5
                ),
                tr = te.horizontal,
                tn = te.vertical,
                ti = tr.offset,
                to = tn.offset;
              if (
                (tr.isBound && (tt[1] += ti),
                tn.isBound && (tt[0] += to),
                (q || W) && 0 === B[0][0] && 0 === B[0][1])
              ) {
                var H = eW(F),
                  ta = H.bottom - H.top,
                  ts = q ? H.right - H.left : ta,
                  tu = tn.isBound ? ry(to) : 0 === tn.snapIndex ? -to : to,
                  tl = tr.isBound ? ry(ti) : 0 === tr.snapIndex ? -ti : ti;
                (ts -= tu),
                  (ta -= tl),
                  W && (ts = ta = tK(tn, tr) > 0 ? ta : ts);
                var tc = N[0];
                (N[1][1] = tc[1] - ta),
                  (N[2][0] = tc[0] + ts),
                  (N[3][1] = tc[1] + ta),
                  (N[4][0] = tc[0] - ts);
              } else if (A && v && c) {
                var tf = y(r0(O), 2),
                  tp = tf[0],
                  td = tf[1],
                  tg = tp && td ? tp / td : 0,
                  th = O[d].direction || '',
                  tv = N[1][1],
                  j = N[5][1],
                  L = N[7][0],
                  V = N[3][0];
                ry(ti) <= ry(to)
                  ? (ti = (rS(ti) * ry(to)) / tg)
                  : (to = rS(to) * ry(ti) * tg),
                  th.indexOf('w') > -1
                    ? (L -= to)
                    : th.indexOf('e') > -1
                      ? (V -= to)
                      : ((L += to / 2), (V -= to / 2)),
                  th.indexOf('n') > -1
                    ? (tv -= ti)
                    : th.indexOf('s') > -1
                      ? (j -= ti)
                      : ((tv += ti / 2), (j -= ti / 2));
                var tm = rQ(tv, V, j, L);
                N.forEach(function (t, e) {
                  var r;
                  (r = y(tm[e].pos, 2)), (t[0] = r[0]), (t[1] = r[1]);
                });
              } else
                N.forEach(function (t, e) {
                  var r = B[e];
                  r[0] && (t[0] -= to), r[1] && (t[1] -= ti);
                });
              var tb = r$(t, g, F),
                tx = ''.concat(z, '(').concat(tb.join(T), ')');
              if (((R.clipPathState = tx), W || q))
                (K = [N[4][0], N[2][0]]), (J = [N[1][1], N[3][1]]);
              else if (A) {
                var Z = [N[0], N[2], N[4], N[6]];
                (K = Z.map(function (t) {
                  return t[0];
                })),
                  (J = Z.map(function (t) {
                    return t[1];
                  }));
              } else
                (K = N.map(function (t) {
                  return t[0];
                })),
                  (J = N.map(function (t) {
                    return t[1];
                  }));
              if (
                ((R.snapBoundInfos = t8(
                  U,
                  h.clipTargetBounds && {
                    left: 0,
                    top: 0,
                    right: M,
                    bottom: P,
                  },
                  K,
                  J,
                  1
                )),
                x)
              ) {
                var tS = R.is3d,
                  ty = R.allMatrix,
                  tE = tt;
                l && (tE = [C[0] + tt[0] - D[0], C[1] + tt[1] - D[1]]),
                  (x.deltaOffset = (0, u.ml)(
                    ty,
                    [tE[0], tE[1], 0, 0],
                    tS ? 4 : 3
                  ));
              }
              return (
                e7(
                  t,
                  'onClip',
                  e9(
                    t,
                    e,
                    S(
                      {
                        clipEventType: 'changed',
                        clipType: z,
                        poses: F,
                        clipStyle: tx,
                        clipStyles: tb,
                        distX: m,
                        distY: b,
                      },
                      e4(
                        (((i = {})['rect' === z ? 'clip' : 'clipPath'] = tx),
                        i),
                        e
                      )
                    )
                  )
                ),
                !0
              );
            },
            dragControlEnd: function (t, e) {
              this.unset(t);
              var r = e.isDrag,
                n = e.datas,
                i = e.isDouble,
                o = n.isLine,
                a = n.isClipStart,
                s = n.isControl;
              return (
                !!a &&
                (e7(t, 'onClipEnd', e6(t, e, {})),
                i &&
                  (s
                    ? (function (t, e) {
                        var r = e.datas,
                          n = r.clipPath,
                          i = r.clipIndex,
                          o = n.type,
                          a = n.poses,
                          s = n.splitter,
                          u = a.map(function (t) {
                            return t.pos;
                          }),
                          l = u.length;
                        if ('polygon' === o) a.splice(i, 1), u.splice(i, 1);
                        else if (
                          'inset' !== o ||
                          i < 8 ||
                          ((function (t, e, r, n, i) {
                            void 0 === i && (i = e.length);
                            var o = rU(t.slice(n)),
                              a = o.horizontalRange,
                              s = o.verticalRange,
                              u = r - n,
                              l = 0;
                            if (0 === u) l = i;
                            else if (u > 0 && u < a[1]) l = a[1] - u;
                            else {
                              if (!(u >= s[0])) return;
                              l = s[0] + s[1] - u;
                            }
                            t.splice(r, l), e.splice(r, l);
                          })(a, u, i, 8, l),
                          l === a.length)
                        )
                          return;
                        var c = r$(t, n, u),
                          f = ''.concat(o, '(').concat(c.join(s), ')');
                        e7(
                          t,
                          'onClip',
                          e9(
                            t,
                            e,
                            S(
                              {
                                clipEventType: 'removed',
                                clipType: o,
                                poses: u,
                                clipStyles: c,
                                clipStyle: f,
                                distX: 0,
                                distY: 0,
                              },
                              e4({ clipPath: f }, e)
                            )
                          )
                        );
                      })(t, e)
                    : o &&
                      (function (t, e) {
                        var r = y(V(t, e), 2),
                          n = r[0],
                          i = r[1],
                          o = e.datas,
                          a = o.clipPath,
                          s = o.clipIndex,
                          u = a.type,
                          l = a.poses,
                          c = a.splitter,
                          f = l.map(function (t) {
                            return t.pos;
                          });
                        if ('polygon' === u) f.splice(s, 0, [n, i]);
                        else {
                          if ('inset' !== u) return;
                          var p = rY.indexOf(s),
                            d = rX.indexOf(s),
                            g = l.length;
                          if (
                            ((function (t, e, r, n, i, o, a, s, u, l, c) {
                              void 0 === l && (l = 0), void 0 === c && (c = 0);
                              var f = rU(t.slice(r)),
                                p = f.horizontalRange,
                                d = f.verticalRange;
                              if (n > -1)
                                for (
                                  var g = 1 === rj[n] ? o - l : s - o, h = p[1];
                                  h <= n;
                                  ++h
                                ) {
                                  var v = 1 === rL[h] ? c : u,
                                    m = 0;
                                  if (
                                    (n === h
                                      ? (m = o)
                                      : 0 === h
                                        ? (m = l + g)
                                        : -1 === rj[h] &&
                                          (m = s - (e[r][0] - l)),
                                    t.splice(r + h, 0, {
                                      horizontal: rj[h],
                                      vertical: 0,
                                      pos: [m, v],
                                    }),
                                    e.splice(r + h, 0, [m, v]),
                                    0 === h)
                                  )
                                    break;
                                }
                              else if (i > -1) {
                                var b = 1 === rL[i] ? a - c : u - a;
                                if (0 === p[1] && 0 === d[1]) {
                                  var x = [l + b, c];
                                  t.push({
                                    horizontal: 1,
                                    vertical: 0,
                                    pos: x,
                                  }),
                                    e.push(x);
                                }
                                for (var S = d[0], h = d[1]; h <= i; ++h) {
                                  var m = 1 === rj[h] ? l : s,
                                    v = 0;
                                  if (
                                    (i === h
                                      ? (v = a)
                                      : 0 === h
                                        ? (v = c + b)
                                        : 1 === rL[h]
                                          ? (v = e[r + S][1])
                                          : -1 === rL[h] &&
                                            (v = u - (e[r + S][1] - c)),
                                    t.push({
                                      horizontal: 0,
                                      vertical: rL[h],
                                      pos: [m, v],
                                    }),
                                    e.push([m, v]),
                                    0 === h)
                                  )
                                    break;
                                }
                              }
                            })(
                              l,
                              f,
                              8,
                              p,
                              d,
                              n,
                              i,
                              f[4][0],
                              f[4][1],
                              f[0][0],
                              f[0][1]
                            ),
                            g === l.length)
                          )
                            return;
                        }
                        var h = r$(t, a, f),
                          v = ''.concat(u, '(').concat(h.join(c), ')');
                        e7(
                          t,
                          'onClip',
                          e9(
                            t,
                            e,
                            S(
                              {
                                clipEventType: 'added',
                                clipType: u,
                                poses: f,
                                clipStyles: h,
                                clipStyle: v,
                                distX: 0,
                                distY: 0,
                              },
                              e4({ clipPath: v }, e)
                            )
                          )
                        );
                      })(t, e)),
                i || r)
              );
            },
            unset: function (t) {
              (t.state.clipPathState = ''), (t.state.snapBoundInfos = null);
            },
          },
          {
            name: 'roundable',
            props: [
              'roundable',
              'roundRelative',
              'minRoundControls',
              'maxRoundControls',
              'roundClickable',
              'roundPadding',
              'isDisplayShadowRoundControls',
            ],
            events: [
              'roundStart',
              'round',
              'roundEnd',
              'roundGroupStart',
              'roundGroup',
              'roundGroupEnd',
            ],
            css: [
              '.control.border-radius {\nbackground: #d66;\ncursor: pointer;\nz-index: 3;\n}',
              '.control.border-radius.vertical {\nbackground: #d6d;\nz-index: 2;\n}',
              '.control.border-radius.virtual {\nopacity: 0.5;\nz-index: 1;\n}',
              ':host.round-line-clickable .line.direction {\ncursor: pointer;\n}',
            ],
            className: function (t) {
              var e = t.props.roundClickable;
              return !0 === e || 'line' === e ? ez('round-line-clickable') : '';
            },
            requestStyle: function () {
              return ['borderRadius'];
            },
            requestChildStyle: function () {
              return ['borderRadius'];
            },
            render: function (t, e) {
              var r = t.getState(),
                n = r.target,
                i = r.width,
                o = r.height,
                a = r.allMatrix,
                s = r.is3d,
                l = r.left,
                c = r.top,
                f = r.borderRadiusState,
                p = t.props,
                d = p.minRoundControls,
                g = p.maxRoundControls,
                h = void 0 === g ? [4, 4] : g,
                v = p.zoom,
                m = p.roundPadding,
                b = void 0 === m ? 0 : m,
                x = p.isDisplayShadowRoundControls,
                S = p.groupable;
              if (!n) return null;
              var D = f || r4(t),
                C = s ? 4 : 3,
                R = r2(D, i, o, void 0 === d ? [0, 0] : d, !0);
              if (!R) return null;
              var M = 0,
                P = 0,
                z = S ? [0, 0] : [l, c];
              return R.map(function (t, r) {
                var n = t.horizontal,
                  i = t.vertical,
                  o = t.direction || '',
                  s = E([], y(t.pos), !1);
                (P += Math.abs(n)),
                  (M += Math.abs(i)),
                  n && o.indexOf('n') > -1 && (s[1] -= b),
                  i && o.indexOf('w') > -1 && (s[0] -= b),
                  n && o.indexOf('s') > -1 && (s[1] += b),
                  i && o.indexOf('e') > -1 && (s[0] += b);
                var l = (0, u.h9)(eF(a, s, C), z),
                  c = t.vertical
                    ? M <= h[1] && ((x && 'horizontal' !== x) || !t.virtual)
                    : P <= h[0] && (x || !t.virtual);
                return e.createElement('div', {
                  key: 'borderRadiusControl'.concat(r),
                  className: ez(
                    'control',
                    'border-radius',
                    t.vertical ? 'vertical' : '',
                    t.virtual ? 'virtual' : ''
                  ),
                  'data-radius-index': r,
                  style: {
                    display: c ? 'block' : 'none',
                    transform: 'translate('
                      .concat(l[0], 'px, ')
                      .concat(l[1], 'px) scale(')
                      .concat(v, ')'),
                  },
                });
              });
            },
            dragControlCondition: function (t, e) {
              if (!e.inputEvent || e.isRequest) return !1;
              var r = e.inputEvent.target.getAttribute('class') || '';
              return (
                r.indexOf('border-radius') > -1 ||
                (r.indexOf('moveable-line') > -1 &&
                  r.indexOf('moveable-direction') > -1)
              );
            },
            dragGroupControlCondition: function (t, e) {
              return this.dragControlCondition(t, e);
            },
            dragControlStart: function (t, e) {
              var r = e.inputEvent,
                n = e.datas,
                i = r.target,
                o = i.getAttribute('class') || '',
                a = o.indexOf('border-radius') > -1,
                s =
                  o.indexOf('moveable-line') > -1 &&
                  o.indexOf('moveable-direction') > -1,
                u = a ? parseInt(i.getAttribute('data-radius-index'), 10) : -1,
                l = -1;
              if (s) {
                var c = i.getAttribute('data-line-key') || '';
                c &&
                  isNaN((l = parseInt(c.replace(/render-line-/g, ''), 10))) &&
                  (l = -1);
              }
              if (!a && !s) return !1;
              var f = e9(t, e, {});
              if (!1 === e7(t, 'onRoundStart', f)) return !1;
              (n.lineIndex = l),
                (n.controlIndex = u),
                (n.isControl = a),
                (n.isLine = s),
                U(t, e);
              var p = t.props,
                d = p.roundRelative,
                g = p.minRoundControls,
                h = t.state,
                v = h.width,
                m = h.height;
              (n.isRound = !0), (n.prevDist = [0, 0]);
              var b =
                r2(r4(t) || '', v, m, void 0 === g ? [0, 0] : g, !0) || [];
              return (
                (n.controlPoses = b),
                (h.borderRadiusState = rV(b, d, v, m).styles.join(' ')),
                f
              );
            },
            dragControl: function (t, e) {
              var r = e.datas,
                n = r.controlPoses;
              if (!r.isRound || !r.isControl || !n.length) return !1;
              var i = r.controlIndex,
                o = y(Q(e), 2),
                a = o[0],
                s = o[1],
                l = [a, s],
                c = (0, u.h9)(l, r.prevDist),
                f = t.props.maxRoundControls,
                p = void 0 === f ? [4, 4] : f,
                d = t.state,
                g = d.width,
                h = d.height,
                v = n[i],
                m = v.vertical,
                b = v.horizontal,
                x = n.map(function (t) {
                  var e = t.horizontal,
                    r = t.vertical,
                    n = [e * b * l[0], r * m * l[1]];
                  if (e) {
                    if (1 === p[0] || (p[0] < 4 && e !== b)) return n;
                  } else if (0 === p[1])
                    return (n[1] = ((r * b * l[0]) / g) * h), n;
                  else if (m && (1 === p[1] || (p[1] < 4 && r !== m))) return n;
                  return [0, 0];
                });
              x[i] = l;
              var E = n.map(function (t, e) {
                return S(S({}, t), { pos: (0, u.PD)(t.pos, x[e]) });
              });
              return (
                i < 4
                  ? E.slice(0, i + 1).forEach(function (t) {
                      t.virtual = !1;
                    })
                  : E.slice(4, i + 1).forEach(function (t) {
                      t.virtual = !1;
                    }),
                (r.prevDist = [a, s]),
                r3(t, e, l, c, E)
              );
            },
            dragControlEnd: function (t, e) {
              var r = t.state;
              r.borderRadiusState = '';
              var n = e.datas,
                i = e.isDouble;
              if (!n.isRound) return !1;
              var o = n.isControl,
                a = n.controlIndex,
                s = n.isLine,
                u = n.lineIndex,
                l = n.controlPoses,
                c = l.filter(function (t) {
                  return t.virtual;
                }).length,
                f = t.props.roundClickable,
                p = void 0 === f || f;
              if (i && p) {
                if (o && (!0 === p || 'control' === p))
                  a < 4
                    ? l.slice(a, 4).forEach(function (t) {
                        t.virtual = !0;
                      })
                    : l.slice(a).forEach(function (t) {
                        t.virtual = !0;
                      });
                else if (s && (!0 === p || 'line' === p)) {
                  var d = y(V(t, e), 2);
                  !(function (t, e, r, n) {
                    var i = t.filter(function (t) {
                        var e = t.virtual;
                        return t.horizontal && !e;
                      }).length,
                      o = t.filter(function (t) {
                        var e = t.virtual;
                        return t.vertical && !e;
                      }).length,
                      a = -1;
                    if (
                      (0 === e && (0 === i ? (a = 0) : 1 === i && (a = 1)),
                      2 === e && (i <= 2 ? (a = 2) : i <= 3 && (a = 3)),
                      3 === e && (0 === o ? (a = 4) : o < 4 && (a = 7)),
                      1 === e && (o <= 1 ? (a = 5) : o <= 2 && (a = 6)),
                      -1 !== a && t[a].virtual)
                    ) {
                      var s,
                        u = t[a];
                      (s = a) < 4
                        ? t.slice(0, s + 1).forEach(function (t) {
                            t.virtual = !1;
                          })
                        : (t[0].virtual && (t[0].virtual = !1),
                          t.slice(4, s + 1).forEach(function (t) {
                            t.virtual = !1;
                          })),
                        a < 4 ? (u.pos[0] = r) : (u.pos[1] = n);
                    }
                  })(l, u, d[0], d[1]);
                }
                c !==
                  l.filter(function (t) {
                    return t.virtual;
                  }).length && r3(t, e, [0, 0], [0, 0], l);
              }
              var g = e6(t, e, {});
              return e7(t, 'onRoundEnd', g), (r.borderRadiusState = ''), g;
            },
            dragGroupControlStart: function (t, e) {
              var r = this.dragControlStart(t, e);
              if (!r) return !1;
              var n = t.moveables,
                i = t.props.targets,
                o = tS(t, 'roundable', e),
                a = S(
                  {
                    targets: t.props.targets,
                    events: o.map(function (t, e) {
                      return S(S({}, t), {
                        target: i[e],
                        moveable: n[e],
                        currentTarget: n[e],
                      });
                    }),
                  },
                  r
                );
              return e7(t, 'onRoundGroupStart', a), r;
            },
            dragGroupControl: function (t, e) {
              var r = this.dragControl(t, e);
              if (!r) return !1;
              var n = t.moveables,
                i = t.props.targets,
                o = tS(t, 'roundable', e),
                a = S(
                  {
                    targets: t.props.targets,
                    events: o.map(function (t, e) {
                      return S(
                        S(S({}, t), {
                          target: i[e],
                          moveable: n[e],
                          currentTarget: n[e],
                        }),
                        e4({ borderRadius: r.borderRadius }, t)
                      );
                    }),
                  },
                  r
                );
              return e7(t, 'onRoundGroup', a), a;
            },
            dragGroupControlEnd: function (t, e) {
              var r = t.moveables,
                n = t.props.targets,
                i = tS(t, 'roundable', e);
              e8(t, 'onRound', function (e) {
                var o = S(
                  {
                    targets: t.props.targets,
                    events: i.map(function (t, i) {
                      return S(
                        S(S({}, t), {
                          target: n[i],
                          moveable: r[i],
                          currentTarget: r[i],
                        }),
                        e4({ borderRadius: e.borderRadius }, t)
                      );
                    }),
                  },
                  e
                );
                e7(t, 'onRoundGroup', o);
              });
              var o = this.dragControlEnd(t, e);
              if (!o) return !1;
              var a = S(
                {
                  targets: t.props.targets,
                  events: i.map(function (t, e) {
                    var i;
                    return S(S({}, t), {
                      target: n[e],
                      moveable: r[e],
                      currentTarget: r[e],
                      lastEvent:
                        null === (i = t.datas) || void 0 === i
                          ? void 0
                          : i.lastEvent,
                    });
                  }),
                },
                o
              );
              return e7(t, 'onRoundGroupEnd', a), a;
            },
            unset: function (t) {
              t.state.borderRadiusState = '';
            },
          },
          no,
          nl,
          na,
          rk,
          r9,
        ];
      function nf(t, e) {
        var r = y(t, 3),
          n = r[0],
          i = r[1],
          o = r[2];
        return (n * e[0] + i * e[1] + o) / Math.sqrt(n * n + i * i);
      }
      function np(t, e) {
        var r = y(t, 2),
          n = r[0],
          i = r[1];
        return -n * e[0] - i * e[1];
      }
      function nd(t, e) {
        return Math.max.apply(
          Math,
          E(
            [],
            y(
              t.map(function (t) {
                var r = y(t, 4),
                  n = r[0],
                  i = r[1],
                  o = r[2],
                  a = r[3];
                return Math.max(n[e], i[e], o[e], a[e]);
              })
            ),
            !1
          )
        );
      }
      function ng(t, e) {
        return Math.min.apply(
          Math,
          E(
            [],
            y(
              t.map(function (t) {
                var r = y(t, 4),
                  n = r[0],
                  i = r[1],
                  o = r[2],
                  a = r[3];
                return Math.min(n[e], i[e], o[e], a[e]);
              })
            ),
            !1
          )
        );
      }
      var nh = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.differ = new c.Z()),
              (e.moveables = []),
              (e.transformOrigin = '50% 50%'),
              (e.renderGroupRects = []),
              (e._targetGroups = []),
              (e._hasFirstTargets = !1),
              e
            );
          }
          return (
            x(e, t),
            (e.prototype.componentDidMount = function () {
              t.prototype.componentDidMount.call(this);
            }),
            (e.prototype.checkUpdate = function () {
              (this._isPropTargetChanged = !1), this.updateAbles();
            }),
            (e.prototype.getTargets = function () {
              return this.props.targets;
            }),
            (e.prototype.updateRect = function (t, e, r) {
              void 0 === r && (r = !0);
              var n,
                i,
                o,
                a,
                l,
                c,
                f = this.state;
              if (this.controlBox && !f.isPersisted) {
                tb(!0),
                  this.moveables.forEach(function (e) {
                    e.updateRect(t, !1, !1);
                  });
                var d = this.props,
                  g = this.moveables,
                  h = f.target || d.target,
                  v = g.map(function (t) {
                    return { finded: !1, manager: t };
                  }),
                  m = this.props.targetGroups || [],
                  b = (function t(e, r) {
                    var n = r
                      .map(function (r) {
                        if ((0, s.kJ)(r)) {
                          var n = t(e, r),
                            i = n.length;
                          return i > 1 ? n : 1 === i ? n[0] : null;
                        }
                        var o = (0, s.sE)(e, function (t) {
                          return t.manager.props.target === r;
                        });
                        return o ? ((o.finded = !0), o.manager) : null;
                      })
                      .filter(Boolean);
                    return 1 === n.length && (0, s.kJ)(n[0]) ? n[0] : n;
                  })(v, m),
                  x = d.useDefaultGroupRotate;
                b.push.apply(
                  b,
                  E(
                    [],
                    y(
                      v
                        .filter(function (t) {
                          return !t.finded;
                        })
                        .map(function (t) {
                          return t.manager;
                        })
                    ),
                    !1
                  )
                );
                var D = [],
                  C = !e || ('' !== t && d.updateGroup),
                  R = d.defaultGroupRotate || 0;
                if (!this._hasFirstTargets) {
                  var M =
                    null === (c = d.persistData) || void 0 === c
                      ? void 0
                      : c.rotation;
                  null != M && (R = M);
                }
                var P = (function t(e, r, n) {
                  var i = e.map(function (e) {
                      if (!(0, s.kJ)(e))
                        return {
                          poses: e1(e.state),
                          rotation: e.getRotation(),
                        };
                      var n = t(e, r),
                        i = [n.pos1, n.pos2, n.pos3, n.pos4];
                      return D.push(n), { poses: i, rotation: n.rotation };
                    }),
                    o = i.map(function (t) {
                      return t.rotation;
                    }),
                    a = 0,
                    u = o[0],
                    l = o.every(function (t) {
                      return 0.1 > Math.abs(u - t);
                    });
                  return (
                    (a = C ? (!x && l ? u : R) : x || n || !l ? r : u),
                    (function (t, e) {
                      var r,
                        n,
                        i,
                        o = [0, 0],
                        a = [0, 0],
                        u = [0, 0],
                        l = [0, 0],
                        c = 0,
                        f = 0;
                      if (!t.length)
                        return {
                          pos1: o,
                          pos2: a,
                          pos3: u,
                          pos4: l,
                          minX: 0,
                          minY: 0,
                          maxX: 0,
                          maxY: 0,
                          width: c,
                          height: f,
                          rotation: e,
                        };
                      var d = (0, s.P2)(e, 1e-7);
                      if (d % 90) {
                        var g = Math.tan((d / 180) * Math.PI),
                          h = -1 / g,
                          v = [1e10, -1e10],
                          m = [
                            [0, 0],
                            [0, 0],
                          ],
                          b = [1e10, -1e10],
                          x = [
                            [0, 0],
                            [0, 0],
                          ];
                        t.forEach(function (t) {
                          t.forEach(function (t) {
                            var e = nf([-g, 1, 0], t),
                              r = nf([-h, 1, 0], t);
                            v[0] > e && ((m[0] = t), (v[0] = e)),
                              v[1] < e && ((m[1] = t), (v[1] = e)),
                              b[0] > r && ((x[0] = t), (b[0] = r)),
                              b[1] < r && ((x[1] = t), (b[1] = r));
                          });
                        });
                        var S = y(m, 2),
                          E = S[0],
                          D = S[1],
                          C = y(x, 2),
                          R = C[0],
                          M = C[1],
                          P = [-g, 1, np([-g, 1], E)],
                          z = [-g, 1, np([-g, 1], D)],
                          O = [-h, 1, np([-h, 1], R)],
                          T = [-h, 1, np([-h, 1], M)];
                        (o = (r = y(
                          [
                            [P, O],
                            [P, T],
                            [z, O],
                            [z, T],
                          ].map(function (t) {
                            var e = y(t, 2),
                              r = e[0],
                              n = e[1];
                            return (0, p.jv)(r, n)[0];
                          }),
                          4
                        ))[0]),
                          (a = r[1]),
                          (u = r[2]),
                          (l = r[3]),
                          (c = b[1] - b[0]),
                          (f = v[1] - v[0]);
                      } else {
                        var w = ng(t, 0),
                          G = ng(t, 1),
                          A = nd(t, 0),
                          B = nd(t, 1);
                        if (
                          ((o = [w, G]),
                          (a = [A, G]),
                          (u = [w, B]),
                          (l = [A, B]),
                          (c = A - w),
                          (f = B - G),
                          d % 180)
                        ) {
                          var _ = [u, o, l, a];
                          (o = (n = y(_, 4))[0]),
                            (a = n[1]),
                            (u = n[2]),
                            (l = n[3]),
                            (c = B - G),
                            (f = A - w);
                        }
                      }
                      if (d % 360 > 180) {
                        var _ = [l, u, a, o];
                        (o = (i = y(_, 4))[0]),
                          (a = i[1]),
                          (u = i[2]),
                          (l = i[3]);
                      }
                      var k = (0, p.i$)([o, a, u, l]);
                      return {
                        pos1: o,
                        pos2: a,
                        pos3: u,
                        pos4: l,
                        width: c,
                        height: f,
                        minX: k.minX,
                        minY: k.minY,
                        maxX: k.maxX,
                        maxY: k.maxY,
                        rotation: e,
                      };
                    })(
                      i.map(function (t) {
                        return t.poses;
                      }),
                      a
                    )
                  );
                })(b, this.rotation, !0);
                C &&
                  ((this.rotation = P.rotation),
                  (this.transformOrigin = d.defaultGroupOrigin || '50% 50%'),
                  (this.scale = [1, 1])),
                  (this._targetGroups = m),
                  (this.renderGroupRects = D);
                var z = this.transformOrigin,
                  O = this.rotation,
                  T = this.scale,
                  w = P.width,
                  G = P.height,
                  A = P.minX,
                  B = P.minY,
                  _ =
                    ((n = [
                      [0, 0],
                      [w, 0],
                      [0, G],
                      [w, G],
                    ]),
                    (i = rb(z, w, G)),
                    (o = (this.rotation / 180) * Math.PI),
                    (l = (a = n.map(function (t) {
                      return (0, u.h9)(t, i);
                    })).map(function (t) {
                      return (0, u.U1)(t, o);
                    })),
                    {
                      prev: a,
                      next: l,
                      result: l.map(function (t) {
                        return (0, u.PD)(t, i);
                      }),
                    }),
                  k = (0, p.i$)(_.result),
                  I = k.minX,
                  F = k.minY,
                  N =
                    ' rotate('.concat(O, 'deg)') +
                    ' scale('.concat(rS(T[0]), ', ').concat(rS(T[1]), ')'),
                  W = 'translate('
                    .concat(-I, 'px, ')
                    .concat(-F, 'px)')
                    .concat(N);
                (this.controlBox.style.transform = 'translate3d('
                  .concat(A, 'px, ')
                  .concat(B, 'px, ')
                  .concat(this.props.translateZ || 0, ')')),
                  (h.style.cssText +=
                    'left:0px;top:0px;' +
                    'transform-origin:'.concat(z, ';') +
                    'width:'.concat(w, 'px;height:').concat(G, 'px;') +
                    'transform: '.concat(W)),
                  (f.width = w),
                  (f.height = G);
                var q = this.getContainer(),
                  H = nr(
                    this.controlBox,
                    h,
                    this.controlBox,
                    this.getContainer(),
                    this._rootContainer || q,
                    []
                  ),
                  Y = [H.left, H.top],
                  X = y(e1(H), 4),
                  j = X[0],
                  L = X[1],
                  V = X[2],
                  U = X[3],
                  K = (0, p.i$)([j, L, V, U]),
                  J = [K.minX, K.minY],
                  Z = rS(T[0] * T[1]);
                (H.pos1 = (0, u.h9)(j, J)),
                  (H.pos2 = (0, u.h9)(L, J)),
                  (H.pos3 = (0, u.h9)(V, J)),
                  (H.pos4 = (0, u.h9)(U, J)),
                  (H.left = A - H.left + J[0]),
                  (H.top = B - H.top + J[1]),
                  (H.origin = (0, u.h9)((0, u.PD)(Y, H.origin), J)),
                  (H.beforeOrigin = (0, u.h9)((0, u.PD)(Y, H.beforeOrigin), J)),
                  (H.originalBeforeOrigin = (0, u.PD)(
                    Y,
                    H.originalBeforeOrigin
                  )),
                  (H.transformOrigin = (0, u.h9)(
                    (0, u.PD)(Y, H.transformOrigin),
                    J
                  )),
                  (h.style.transform =
                    'translate('
                      .concat(-I - J[0], 'px, ')
                      .concat(-F - J[1], 'px)') + N),
                  tb(),
                  this.updateState(
                    S(S({}, H), {
                      posDelta: J,
                      direction: Z,
                      beforeDirection: Z,
                    }),
                    r
                  );
              }
            }),
            (e.prototype.getRect = function () {
              return S(S({}, t.prototype.getRect.call(this)), {
                children: this.moveables.map(function (t) {
                  return t.getRect();
                }),
              });
            }),
            (e.prototype.triggerEvent = function (e, r, n) {
              if (n || e.indexOf('Group') > -1)
                return t.prototype.triggerEvent.call(this, e, r);
              this._emitter.trigger(e, r);
            }),
            (e.prototype.getRequestChildStyles = function () {
              return this.getEnabledAbles().reduce(function (t, e) {
                var r,
                  n,
                  i =
                    null !==
                      (n =
                        null === (r = e.requestChildStyle) || void 0 === r
                          ? void 0
                          : r.call(e)) && void 0 !== n
                      ? n
                      : [];
                return E(E([], y(t), !1), y(i), !1);
              }, []);
            }),
            (e.prototype.getMoveables = function () {
              return E([], y(this.moveables), !1);
            }),
            (e.prototype.updateAbles = function () {
              t.prototype.updateAbles.call(
                this,
                E(E([], y(this.props.ables), !1), [no], !1),
                'Group'
              );
            }),
            (e.prototype._updateTargets = function () {
              t.prototype._updateTargets.call(this),
                (this._originalDragTarget =
                  this.props.dragTarget || this.areaElement),
                (this._dragTarget = rd(this._originalDragTarget, !0));
            }),
            (e.prototype._updateEvents = function () {
              var t = this.state,
                e = this.props,
                r = this._prevDragTarget,
                n = e.dragTarget || this.areaElement,
                i = e.targets,
                o = this.differ.update(i),
                a = o.added,
                u = o.changed,
                l = o.removed,
                c = a.length || l.length;
              (c ||
                this._prevOriginalDragTarget !== this._originalDragTarget) &&
                (e3(this, !1), e3(this, !0), this.updateState({ gestos: {} })),
                r !== n && (t.target = null),
                t.target ||
                  ((t.target = this.areaElement),
                  (this.controlBox.style.display = 'block')),
                t.target &&
                  (this.targetGesto ||
                    (this.targetGesto = r7(this, this._dragTarget, 'Group')),
                  this.controlGesto ||
                    (this.controlGesto = nt(
                      this,
                      this.controlBox,
                      'controlAbles',
                      'GroupControl'
                    )));
              var f = !rr(t.container, e.container);
              f && (t.container = e.container),
                (f ||
                  c ||
                  this.transformOrigin !==
                    (e.defaultGroupOrigin || '50% 50%') ||
                  u.length ||
                  (i.length &&
                    !(function t(e, r) {
                      return (
                        e.length === r.length &&
                        e.every(function (e, n) {
                          var i = r[n],
                            o = (0, s.kJ)(e),
                            a = (0, s.kJ)(i);
                          return o && a ? t(e, i) : !o && !a && e === i;
                        })
                      );
                    })(this._targetGroups, e.targetGroups || []))) &&
                  (this.updateRect(), (this._hasFirstTargets = !0)),
                (this._isPropTargetChanged = !!c);
            }),
            (e.prototype._updateObserver = function () {}),
            (e.defaultProps = S(S({}, ni.defaultProps), {
              transformOrigin: ['50%', '50%'],
              groupable: !0,
              dragArea: !0,
              keepRatio: !0,
              targets: [],
              defaultGroupRotate: 0,
              defaultGroupOrigin: '50% 50%',
            })),
            e
          );
        })(ni),
        nv = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.moveables = []), e;
          }
          return (
            x(e, t),
            (e.prototype.render = function () {
              var t,
                e = this,
                r = this.props,
                n = r.cspNonce,
                i = r.cssStyled,
                o = r.persistData,
                s = r.targets || [],
                u = s.length,
                l = this.isUnmounted || !u,
                c =
                  null !== (t = null == o ? void 0 : o.children) && void 0 !== t
                    ? t
                    : [];
              return (
                l && !u && c.length
                  ? (s = c.map(function () {
                      return null;
                    }))
                  : l || (c = []),
                d.createElement(
                  i,
                  {
                    cspNonce: n,
                    ref: (0, a.iH)(this, 'controlBox'),
                    className: ez('control-box'),
                  },
                  s.map(function (t, n) {
                    var i,
                      o,
                      s =
                        null !==
                          (o =
                            null === (i = r.individualGroupableProps) ||
                            void 0 === i
                              ? void 0
                              : i.call(r, t, n)) && void 0 !== o
                          ? o
                          : {};
                    return d.createElement(
                      ni,
                      S(
                        {
                          key: 'moveable' + n,
                          ref: (0, a.xL)(e, 'moveables', n),
                        },
                        r,
                        s,
                        {
                          target: t,
                          wrapperMoveable: e,
                          isWrapperMounted: e.isMoveableMounted,
                          persistData: c[n],
                        }
                      )
                    );
                  })
                )
              );
            }),
            (e.prototype.componentDidMount = function () {}),
            (e.prototype.componentDidUpdate = function () {}),
            (e.prototype.getTargets = function () {
              return this.props.targets;
            }),
            (e.prototype.updateRect = function (t, e, r) {
              void 0 === r && (r = !0),
                tb(!0),
                this.moveables.forEach(function (n) {
                  n.updateRect(t, e, r);
                }),
                tb();
            }),
            (e.prototype.getRect = function () {
              return S(S({}, t.prototype.getRect.call(this)), {
                children: this.moveables.map(function (t) {
                  return t.getRect();
                }),
              });
            }),
            (e.prototype.request = function (t, e, r) {
              void 0 === e && (e = {});
              var n = this.moveables.map(function (r) {
                  return r.request(t, S(S({}, e), { isInstant: !1 }), !1);
                }),
                i = r || e.isInstant,
                o = {
                  request: function (t) {
                    return (
                      n.forEach(function (e) {
                        return e.request(t);
                      }),
                      this
                    );
                  },
                  requestEnd: function () {
                    return (
                      n.forEach(function (t) {
                        return t.requestEnd();
                      }),
                      this
                    );
                  },
                };
              return i ? o.request(e).requestEnd() : o;
            }),
            (e.prototype.dragStart = function (t) {
              var e = t.target,
                r = (0, s.sE)(this.moveables, function (t) {
                  var r = t.getTargets()[0],
                    n = t.getControlBoxElement(),
                    i = t.getDragElement();
                  return (
                    !!r &&
                    !!i &&
                    (i === e ||
                      i.contains(e) ||
                      (i !== r && r === e) ||
                      r.contains(e) ||
                      n === e ||
                      n.contains(e))
                  );
                });
              return r && r.dragStart(t), this;
            }),
            (e.prototype.hitTest = function () {
              return 0;
            }),
            (e.prototype.isInside = function () {
              return !1;
            }),
            (e.prototype.isDragging = function () {
              return !1;
            }),
            (e.prototype.getDragElement = function () {
              return null;
            }),
            (e.prototype.getMoveables = function () {
              return E([], y(this.moveables), !1);
            }),
            (e.prototype.updateRenderPoses = function () {}),
            (e.prototype.checkUpdate = function () {}),
            (e.prototype.triggerEvent = function () {}),
            (e.prototype.updateAbles = function () {}),
            (e.prototype._updateEvents = function () {}),
            (e.prototype._updateObserver = function () {}),
            e
          );
        })(ni),
        nm = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return x(e, t), (e.defaultAbles = nc), e;
        })(
          (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.refTargets = []),
                (e.selectorMap = {}),
                (e._differ = new c.Z()),
                (e._elementTargets = []),
                (e._tmpRefTargets = []),
                (e._tmpSelectorMap = {}),
                (e._onChangeTargets = null),
                e
              );
            }
            return (
              x(e, t),
              (e.makeStyled = function () {
                var t = {};
                this.getTotalAbles().forEach(function (e) {
                  var r = e.css;
                  r &&
                    r.forEach(function (e) {
                      t[e] = !0;
                    });
                });
                var e = (0, s.RR)(t).join('\n');
                this.defaultStyled = (0, h.zo)('div', (0, a.$i)(k, F + e));
              }),
              (e.getTotalAbles = function () {
                return E([rN, no, nl, rk], y(this.defaultAbles), !1);
              }),
              (e.prototype.render = function () {
                var t,
                  e = this.constructor;
                e.defaultStyled || e.makeStyled();
                var r = this.props,
                  n = r.ables,
                  i = r.props,
                  o = (function (t, e) {
                    var r = {};
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        0 > e.indexOf(n) &&
                        (r[n] = t[n]);
                    if (
                      null != t &&
                      'function' == typeof Object.getOwnPropertySymbols
                    )
                      for (
                        var i = 0, n = Object.getOwnPropertySymbols(t);
                        i < n.length;
                        i++
                      )
                        0 > e.indexOf(n[i]) &&
                          Object.prototype.propertyIsEnumerable.call(t, n[i]) &&
                          (r[n[i]] = t[n[i]]);
                    return r;
                  })(r, ['ables', 'props']),
                  u = y(this._updateRefs(!0), 2),
                  l = u[0],
                  c = u[1],
                  f = (function t(e, r) {
                    var n = [];
                    return (
                      e.forEach(function (e) {
                        if (e) {
                          if ((0, s.HD)(e)) {
                            r[e] && n.push.apply(n, E([], y(r[e]), !1));
                            return;
                          }
                          (0, s.kJ)(e)
                            ? n.push.apply(n, E([], y(t(e, r)), !1))
                            : n.push(e);
                        }
                      }),
                      n
                    );
                  })(l, c),
                  p = f.length > 1,
                  g = E(E([], y(e.getTotalAbles()), !1), y(n || []), !1),
                  h = S(S(S({}, o), i || {}), {
                    ables: g,
                    cssStyled: e.defaultStyled,
                    customStyledMap: e.customStyledMap,
                  });
                this._elementTargets = f;
                var v = null,
                  m = this.moveable,
                  b = o.persistData;
                if (
                  ((null == b ? void 0 : b.children) && (p = !0),
                  o.individualGroupable)
                )
                  return d.createElement(
                    nv,
                    S(
                      {
                        key: 'individual-group',
                        ref: (0, a.iH)(this, 'moveable'),
                      },
                      h,
                      { target: null, targets: f }
                    )
                  );
                if (p) {
                  var x = (function t(e, r) {
                    var n = [];
                    return (
                      e.forEach(function (e) {
                        if (e) {
                          if ((0, s.HD)(e)) {
                            r[e] && n.push.apply(n, E([], y(r[e]), !1));
                            return;
                          }
                          (0, s.kJ)(e) ? n.push(t(e, r)) : n.push(e);
                        }
                      }),
                      n
                    );
                  })(l, c);
                  if (m && !m.props.groupable && !m.props.individualGroupable) {
                    var D = m.props.target;
                    D && f.indexOf(D) > -1 && (v = S({}, m.state));
                  }
                  return d.createElement(
                    nh,
                    S(
                      { key: 'group', ref: (0, a.iH)(this, 'moveable') },
                      h,
                      null !== (t = o.groupableProps) && void 0 !== t ? t : {},
                      {
                        target: null,
                        targets: f,
                        targetGroups: x,
                        firstRenderState: v,
                      }
                    )
                  );
                }
                var C = f[0];
                if (m && (m.props.groupable || m.props.individualGroupable)) {
                  var R = m.moveables || [],
                    M = (0, s.sE)(R, function (t) {
                      return t.props.target === C;
                    });
                  M && (v = S({}, M.state));
                }
                return d.createElement(
                  ni,
                  S({ key: 'single', ref: (0, a.iH)(this, 'moveable') }, h, {
                    target: C,
                    firstRenderState: v,
                  })
                );
              }),
              (e.prototype.componentDidMount = function () {
                this._checkChangeTargets();
              }),
              (e.prototype.componentDidUpdate = function () {
                this._checkChangeTargets();
              }),
              (e.prototype.componentWillUnmount = function () {
                (this.selectorMap = {}), (this.refTargets = []);
              }),
              (e.prototype.getTargets = function () {
                var t, e;
                return null !==
                  (e =
                    null === (t = this.moveable) || void 0 === t
                      ? void 0
                      : t.getTargets()) && void 0 !== e
                  ? e
                  : [];
              }),
              (e.prototype.updateSelectors = function () {
                (this.selectorMap = {}), this._updateRefs();
              }),
              (e.prototype.waitToChangeTarget = function () {
                var t,
                  e = this;
                return (
                  (this._onChangeTargets = function () {
                    (e._onChangeTargets = null), t();
                  }),
                  new Promise(function (e) {
                    t = e;
                  })
                );
              }),
              (e.prototype.waitToChangeTargets = function () {
                return this.waitToChangeTarget();
              }),
              (e.prototype.getManager = function () {
                return this.moveable;
              }),
              (e.prototype.getMoveables = function () {
                return this.moveable.getMoveables();
              }),
              (e.prototype.getDragElement = function () {
                return this.moveable.getDragElement();
              }),
              (e.prototype._updateRefs = function (t) {
                var e = this.refTargets,
                  r = rg(this.props.target || this.props.targets),
                  n = 'undefined' != typeof document,
                  i = (function t(e, r) {
                    return (
                      e.length !== r.length ||
                      e.some(function (e, n) {
                        var i = r[n];
                        return (
                          (!!e || !!i) &&
                          e != i &&
                          (!((0, s.kJ)(e) && (0, s.kJ)(i)) || t(e, i))
                        );
                      })
                    );
                  })(e, r),
                  o = this.selectorMap,
                  a = {};
                return (
                  this.refTargets.forEach(function t(e) {
                    (0, s.HD)(e)
                      ? o[e]
                        ? (a[e] = o[e])
                        : n &&
                          ((i = !0),
                          (a[e] = [].slice.call(document.querySelectorAll(e))))
                      : (0, s.kJ)(e) && e.forEach(t);
                  }),
                  (this._tmpRefTargets = r),
                  (this._tmpSelectorMap = a),
                  [r, a, !t && i]
                );
              }),
              (e.prototype._checkChangeTargets = function () {
                (this.refTargets = this._tmpRefTargets),
                  (this.selectorMap = this._tmpSelectorMap);
                var t,
                  e,
                  r,
                  n = this._differ.update(this._elementTargets),
                  i = n.added,
                  o = n.removed;
                (i.length || o.length) &&
                  (null === (e = (t = this.props).onChangeTargets) ||
                    void 0 === e ||
                    e.call(t, {
                      moveable: this.moveable,
                      targets: this._elementTargets,
                    }),
                  null === (r = this._onChangeTargets) ||
                    void 0 === r ||
                    r.call(this));
                var a = y(this._updateRefs(), 3),
                  s = a[0],
                  u = a[1],
                  l = a[2];
                (this.refTargets = s),
                  (this.selectorMap = u),
                  l && this.forceUpdate();
              }),
              (e.defaultAbles = []),
              (e.customStyledMap = {}),
              (e.defaultStyled = null),
              !(function (t, e, r, n) {
                var i,
                  o = arguments.length,
                  a =
                    o < 3
                      ? e
                      : null === n
                        ? (n = Object.getOwnPropertyDescriptor(e, r))
                        : n;
                if (
                  'object' == typeof Reflect &&
                  'function' == typeof Reflect.decorate
                )
                  a = Reflect.decorate(t, e, r, n);
                else
                  for (var s = t.length - 1; s >= 0; s--)
                    (i = t[s]) &&
                      (a = (o < 3 ? i(a) : o > 3 ? i(e, r, a) : i(e, r)) || a);
                o > 3 && a && Object.defineProperty(e, r, a);
              })([(0, a.qE)(Y)], e.prototype, 'moveable', void 0),
              e
            );
          })(d.PureComponent)
        );
    },
  },
]);
