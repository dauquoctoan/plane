'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [846],
  {
    54533: function (e, t, r) {
      r.d(t, {
        Z5: function () {
          return nF;
        },
        _l: function () {
          return n1;
        },
        bK: function () {
          return lA;
        },
      });
      var n = r(27378),
        l = r(31542),
        i = r(13273),
        a = r(55331),
        o = r(3495),
        d = r(39963),
        s = r(56583),
        u = r(18726),
        c = r(25773);
      let p = /[ \t]{2,}/g,
        f = /^[ \t]*/gm,
        g = e => e.replace(p, ' ').replace(f, '').trim();
      function m(e, t) {}
      function b() {}
      function h(e, t, r) {
        let n = t.map(t => {
          var n;
          let l = ((n = t.options), { ...r, ...n });
          return (
            e.addEventListener(t.eventName, t.fn, l),
            function () {
              e.removeEventListener(t.eventName, t.fn, l);
            }
          );
        });
        return function () {
          n.forEach(e => {
            e();
          });
        };
      }
      m.bind(null, 'warn'), m.bind(null, 'error');
      class I extends Error {}
      function y(e, t) {
        if (!e) throw new I('Invariant failed');
      }
      I.prototype.toString = function () {
        return this.message;
      };
      class v extends n.Component {
        constructor(...e) {
          super(...e),
            (this.callbacks = null),
            (this.unbind = b),
            (this.onWindowError = e => {
              let t = this.getCallbacks();
              t.isDragging() && t.tryAbort(),
                e.error instanceof I && e.preventDefault();
            }),
            (this.getCallbacks = () => {
              if (!this.callbacks)
                throw Error('Unable to find AppCallbacks in <ErrorBoundary/>');
              return this.callbacks;
            }),
            (this.setCallbacks = e => {
              this.callbacks = e;
            });
        }
        componentDidMount() {
          this.unbind = h(window, [
            { eventName: 'error', fn: this.onWindowError },
          ]);
        }
        componentDidCatch(e) {
          if (e instanceof I) {
            this.setState({});
            return;
          }
          throw e;
        }
        componentWillUnmount() {
          this.unbind();
        }
        render() {
          return this.props.children(this.setCallbacks);
        }
      }
      let x = e => e + 1,
        D = (e, t) => {
          let r = e.droppableId === t.droppableId,
            n = x(e.index),
            l = x(t.index);
          return r
            ? `
      You have moved the item from position ${n}
      to position ${l}
    `
            : `
    You have moved the item from position ${n}
    in list ${e.droppableId}
    to list ${t.droppableId}
    in position ${l}
  `;
        },
        E = (e, t, r) =>
          t.droppableId === r.droppableId
            ? `
      The item ${e}
      has been combined with ${r.draggableId}`
            : `
      The item ${e}
      in list ${t.droppableId}
      has been combined with ${r.draggableId}
      in list ${r.droppableId}
    `,
        A = e => `
  The item has returned to its starting position
  of ${x(e.index)}
`;
      var N = {
        dragHandleUsageInstructions: `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`,
        onDragStart: e => `
  You have lifted an item in position ${x(e.source.index)}
`,
        onDragUpdate: e => {
          let t = e.destination;
          if (t) return D(e.source, t);
          let r = e.combine;
          return r
            ? E(e.draggableId, e.source, r)
            : 'You are over an area that cannot be dropped on';
        },
        onDragEnd: e => {
          if ('CANCEL' === e.reason)
            return `
      Movement cancelled.
      ${A(e.source)}
    `;
          let t = e.destination,
            r = e.combine;
          return t
            ? `
      You have dropped the item.
      ${D(e.source, t)}
    `
            : r
              ? `
      You have dropped the item.
      ${E(e.draggableId, e.source, r)}
    `
              : `
    The item has been dropped while not over a drop area.
    ${A(e.source)}
  `;
        },
      };
      let C = { x: 0, y: 0 },
        R = (e, t) => ({ x: e.x + t.x, y: e.y + t.y }),
        P = (e, t) => ({ x: e.x - t.x, y: e.y - t.y }),
        w = (e, t) => e.x === t.x && e.y === t.y,
        O = e => ({ x: 0 !== e.x ? -e.x : 0, y: 0 !== e.y ? -e.y : 0 }),
        S = (e, t, r = 0) => ('x' === e ? { x: t, y: r } : { x: r, y: t }),
        B = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2),
        G = (e, t) => Math.min(...t.map(t => B(e, t))),
        L = e => t => ({ x: e(t.x), y: e(t.y) });
      var T = (e, t) => {
        let r = (0, d.Dz)({
          top: Math.max(t.top, e.top),
          right: Math.min(t.right, e.right),
          bottom: Math.min(t.bottom, e.bottom),
          left: Math.max(t.left, e.left),
        });
        return r.width <= 0 || r.height <= 0 ? null : r;
      };
      let _ = (e, t) => ({
          top: e.top + t.y,
          left: e.left + t.x,
          bottom: e.bottom + t.y,
          right: e.right + t.x,
        }),
        M = e => [
          { x: e.left, y: e.top },
          { x: e.right, y: e.top },
          { x: e.left, y: e.bottom },
          { x: e.right, y: e.bottom },
        ],
        F = (e, t) => (t ? _(e, t.scroll.diff.displacement) : e),
        k = (e, t, r) =>
          r && r.increasedBy
            ? { ...e, [t.end]: e[t.end] + r.increasedBy[t.line] }
            : e,
        $ = (e, t) =>
          t && t.shouldClipSubject ? T(t.pageMarginBox, e) : (0, d.Dz)(e);
      var W = ({ page: e, withPlaceholder: t, axis: r, frame: n }) => {
          let l = $(k(F(e.marginBox, n), r, t), n);
          return { page: e, withPlaceholder: t, active: l };
        },
        U = (e, t) => {
          e.frame || y(!1);
          let r = e.frame,
            n = P(t, r.scroll.initial),
            l = O(n),
            i = {
              ...r,
              scroll: {
                initial: r.scroll.initial,
                current: t,
                diff: { value: n, displacement: l },
                max: r.scroll.max,
              },
            },
            a = W({
              page: e.subject.page,
              withPlaceholder: e.subject.withPlaceholder,
              axis: e.axis,
              frame: i,
            });
          return { ...e, frame: i, subject: a };
        };
      let Y = (0, s.Z)(e =>
          e.reduce((e, t) => ((e[t.descriptor.id] = t), e), {})
        ),
        H = (0, s.Z)(e =>
          e.reduce((e, t) => ((e[t.descriptor.id] = t), e), {})
        ),
        V = (0, s.Z)(e => Object.values(e)),
        j = (0, s.Z)(e => Object.values(e));
      var z = (0, s.Z)((e, t) =>
        j(t)
          .filter(t => e === t.descriptor.droppableId)
          .sort((e, t) => e.descriptor.index - t.descriptor.index)
      );
      function q(e) {
        return e.at && 'REORDER' === e.at.type ? e.at.destination : null;
      }
      function Z(e) {
        return e.at && 'COMBINE' === e.at.type ? e.at.combine : null;
      }
      var J = (0, s.Z)((e, t) =>
          t.filter(t => t.descriptor.id !== e.descriptor.id)
        ),
        X = ({
          isMovingForward: e,
          draggable: t,
          destination: r,
          insideDestination: n,
          previousImpact: l,
        }) => {
          if (!r.isCombineEnabled || !q(l)) return null;
          function i(e) {
            let t = {
              type: 'COMBINE',
              combine: { draggableId: e, droppableId: r.descriptor.id },
            };
            return { ...l, at: t };
          }
          let a = l.displaced.all,
            o = a.length ? a[0] : null;
          if (e) return o ? i(o) : null;
          let d = J(t, n);
          if (!o) return d.length ? i(d[d.length - 1].descriptor.id) : null;
          let s = d.findIndex(e => e.descriptor.id === o);
          -1 !== s || y(!1);
          let u = s - 1;
          return u < 0 ? null : i(d[u].descriptor.id);
        },
        K = (e, t) => e.descriptor.droppableId === t.descriptor.id;
      let Q = { point: C, value: 0 },
        ee = { invisible: {}, visible: {}, all: [] };
      var et = { displaced: ee, displacedBy: Q, at: null },
        er = (e, t) => r => e <= r && r <= t,
        en = e => {
          let t = er(e.top, e.bottom),
            r = er(e.left, e.right);
          return n => {
            if (t(n.top) && t(n.bottom) && r(n.left) && r(n.right)) return !0;
            let l = t(n.top) || t(n.bottom),
              i = r(n.left) || r(n.right);
            if (l && i) return !0;
            let a = n.top < e.top && n.bottom > e.bottom,
              o = n.left < e.left && n.right > e.right;
            return (!!a && !!o) || (a && i) || (o && l);
          };
        },
        el = e => {
          let t = er(e.top, e.bottom),
            r = er(e.left, e.right);
          return e => t(e.top) && t(e.bottom) && r(e.left) && r(e.right);
        };
      let ei = {
          direction: 'vertical',
          line: 'y',
          crossAxisLine: 'x',
          start: 'top',
          end: 'bottom',
          size: 'height',
          crossAxisStart: 'left',
          crossAxisEnd: 'right',
          crossAxisSize: 'width',
        },
        ea = {
          direction: 'horizontal',
          line: 'x',
          crossAxisLine: 'y',
          start: 'left',
          end: 'right',
          size: 'width',
          crossAxisStart: 'top',
          crossAxisEnd: 'bottom',
          crossAxisSize: 'height',
        };
      var eo = e => t => {
        let r = er(t.top, t.bottom),
          n = er(t.left, t.right);
        return t =>
          e === ei ? r(t.top) && r(t.bottom) : n(t.left) && n(t.right);
      };
      let ed = (e, t) => _(e, t.frame ? t.frame.scroll.diff.displacement : C),
        es = (e, t, r) => !!t.subject.active && r(t.subject.active)(e),
        eu = (e, t, r) => r(t)(e),
        ec = ({
          target: e,
          destination: t,
          viewport: r,
          withDroppableDisplacement: n,
          isVisibleThroughFrameFn: l,
        }) => {
          let i = n ? ed(e, t) : e;
          return es(i, t, l) && eu(i, r, l);
        },
        ep = e => ec({ ...e, isVisibleThroughFrameFn: en }),
        ef = e => ec({ ...e, isVisibleThroughFrameFn: el }),
        eg = e => ec({ ...e, isVisibleThroughFrameFn: eo(e.destination.axis) }),
        em = (e, t, r) => {
          if ('boolean' == typeof r) return r;
          if (!t) return !0;
          let { invisible: n, visible: l } = t;
          if (n[e]) return !1;
          let i = l[e];
          return !i || i.shouldAnimate;
        };
      function eb({
        afterDragging: e,
        destination: t,
        displacedBy: r,
        viewport: n,
        forceShouldAnimate: l,
        last: i,
      }) {
        return e.reduce(
          function (e, a) {
            let o = (function (e, t) {
                let r = e.page.marginBox,
                  n = { top: t.point.y, right: 0, bottom: 0, left: t.point.x };
                return (0, d.Dz)((0, d.jn)(r, n));
              })(a, r),
              s = a.descriptor.id;
            if (
              (e.all.push(s),
              !ep({
                target: o,
                destination: t,
                viewport: n,
                withDroppableDisplacement: !0,
              }))
            )
              return (e.invisible[a.descriptor.id] = !0), e;
            let u = em(s, i, l);
            return (e.visible[s] = { draggableId: s, shouldAnimate: u }), e;
          },
          { all: [], visible: {}, invisible: {} }
        );
      }
      function eh({
        insideDestination: e,
        inHomeList: t,
        displacedBy: r,
        destination: n,
      }) {
        let l = (function (e, t) {
          if (!e.length) return 0;
          let r = e[e.length - 1].descriptor.index;
          return t.inHomeList ? r : r + 1;
        })(e, { inHomeList: t });
        return {
          displaced: ee,
          displacedBy: r,
          at: {
            type: 'REORDER',
            destination: { droppableId: n.descriptor.id, index: l },
          },
        };
      }
      function eI({
        draggable: e,
        insideDestination: t,
        destination: r,
        viewport: n,
        displacedBy: l,
        last: i,
        index: a,
        forceShouldAnimate: o,
      }) {
        let d = K(e, r);
        if (null == a)
          return eh({
            insideDestination: t,
            inHomeList: d,
            displacedBy: l,
            destination: r,
          });
        let s = t.find(e => e.descriptor.index === a);
        if (!s)
          return eh({
            insideDestination: t,
            inHomeList: d,
            displacedBy: l,
            destination: r,
          });
        let u = J(e, t),
          c = t.indexOf(s);
        return {
          displaced: eb({
            afterDragging: u.slice(c),
            destination: r,
            displacedBy: l,
            last: i,
            viewport: n.frame,
            forceShouldAnimate: o,
          }),
          displacedBy: l,
          at: {
            type: 'REORDER',
            destination: { droppableId: r.descriptor.id, index: a },
          },
        };
      }
      function ey(e, t) {
        return !!t.effected[e];
      }
      var ev = ({
          isMovingForward: e,
          destination: t,
          draggables: r,
          combine: n,
          afterCritical: l,
        }) => {
          if (!t.isCombineEnabled) return null;
          let i = n.draggableId,
            a = r[i].descriptor.index;
          return ey(i, l) ? (e ? a : a - 1) : e ? a + 1 : a;
        },
        ex = ({
          isMovingForward: e,
          isInHomeList: t,
          insideDestination: r,
          location: n,
        }) => {
          if (!r.length) return null;
          let l = n.index,
            i = e ? l + 1 : l - 1,
            a = r[0].descriptor.index,
            o = r[r.length - 1].descriptor.index;
          return i < a || i > (t ? o : o + 1) ? null : i;
        },
        eD = ({
          isMovingForward: e,
          isInHomeList: t,
          draggable: r,
          draggables: n,
          destination: l,
          insideDestination: i,
          previousImpact: a,
          viewport: o,
          afterCritical: d,
        }) => {
          let s = a.at;
          if ((s || y(!1), 'REORDER' === s.type)) {
            let n = ex({
              isMovingForward: e,
              isInHomeList: t,
              location: s.destination,
              insideDestination: i,
            });
            return null == n
              ? null
              : eI({
                  draggable: r,
                  insideDestination: i,
                  destination: l,
                  viewport: o,
                  last: a.displaced,
                  displacedBy: a.displacedBy,
                  index: n,
                });
          }
          let u = ev({
            isMovingForward: e,
            destination: l,
            displaced: a.displaced,
            draggables: n,
            combine: s.combine,
            afterCritical: d,
          });
          return null == u
            ? null
            : eI({
                draggable: r,
                insideDestination: i,
                destination: l,
                viewport: o,
                last: a.displaced,
                displacedBy: a.displacedBy,
                index: u,
              });
        },
        eE = ({
          displaced: e,
          afterCritical: t,
          combineWith: r,
          displacedBy: n,
        }) => {
          let l = !!(e.visible[r] || e.invisible[r]);
          return ey(r, t) ? (l ? C : O(n.point)) : l ? n.point : C;
        },
        eA = ({ afterCritical: e, impact: t, draggables: r }) => {
          let n = Z(t);
          n || y(!1);
          let l = n.draggableId;
          return R(
            r[l].page.borderBox.center,
            eE({
              displaced: t.displaced,
              afterCritical: e,
              combineWith: l,
              displacedBy: t.displacedBy,
            })
          );
        };
      let eN = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2,
        eC = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2,
        eR = (e, t, r) =>
          t[e.crossAxisStart] +
          r.margin[e.crossAxisStart] +
          r.borderBox[e.crossAxisSize] / 2,
        eP = ({ axis: e, moveRelativeTo: t, isMoving: r }) =>
          S(e.line, t.marginBox[e.end] + eN(e, r), eR(e, t.marginBox, r)),
        ew = ({ axis: e, moveRelativeTo: t, isMoving: r }) =>
          S(e.line, t.marginBox[e.start] - eC(e, r), eR(e, t.marginBox, r)),
        eO = ({ axis: e, moveInto: t, isMoving: r }) =>
          S(e.line, t.contentBox[e.start] + eN(e, r), eR(e, t.contentBox, r));
      var eS = ({
          impact: e,
          draggable: t,
          draggables: r,
          droppable: n,
          afterCritical: l,
        }) => {
          let i = z(n.descriptor.id, r),
            a = t.page,
            o = n.axis;
          if (!i.length) return eO({ axis: o, moveInto: n.page, isMoving: a });
          let { displaced: s, displacedBy: u } = e,
            c = s.all[0];
          if (c) {
            let e = r[c];
            return ey(c, l)
              ? ew({ axis: o, moveRelativeTo: e.page, isMoving: a })
              : ew({
                  axis: o,
                  moveRelativeTo: (0, d.cv)(e.page, u.point),
                  isMoving: a,
                });
          }
          let p = i[i.length - 1];
          return p.descriptor.id === t.descriptor.id
            ? a.borderBox.center
            : ey(p.descriptor.id, l)
              ? eP({
                  axis: o,
                  moveRelativeTo: (0, d.cv)(p.page, O(l.displacedBy.point)),
                  isMoving: a,
                })
              : eP({ axis: o, moveRelativeTo: p.page, isMoving: a });
        },
        eB = (e, t) => {
          let r = e.frame;
          return r ? R(t, r.scroll.diff.displacement) : t;
        };
      let eG = ({
        impact: e,
        draggable: t,
        droppable: r,
        draggables: n,
        afterCritical: l,
      }) => {
        let i = t.page.borderBox.center,
          a = e.at;
        return r && a
          ? 'REORDER' === a.type
            ? eS({
                impact: e,
                draggable: t,
                draggables: n,
                droppable: r,
                afterCritical: l,
              })
            : eA({ impact: e, draggables: n, afterCritical: l })
          : i;
      };
      var eL = e => {
          let t = eG(e),
            r = e.droppable;
          return r ? eB(r, t) : t;
        },
        eT = (e, t) => {
          let r = P(t, e.scroll.initial),
            n = O(r);
          return {
            frame: (0, d.Dz)({
              top: t.y,
              bottom: t.y + e.frame.height,
              left: t.x,
              right: t.x + e.frame.width,
            }),
            scroll: {
              initial: e.scroll.initial,
              max: e.scroll.max,
              current: t,
              diff: { value: r, displacement: n },
            },
          };
        };
      function e_(e, t) {
        return e.map(e => t[e]);
      }
      var eM = ({
          impact: e,
          viewport: t,
          destination: r,
          draggables: n,
          maxScrollChange: l,
        }) => {
          let i = eT(t, R(t.scroll.current, l)),
            a = r.frame ? U(r, R(r.frame.scroll.current, l)) : r,
            o = e.displaced,
            d = eb({
              afterDragging: e_(o.all, n),
              destination: r,
              displacedBy: e.displacedBy,
              viewport: i.frame,
              last: o,
              forceShouldAnimate: !1,
            }),
            s = eb({
              afterDragging: e_(o.all, n),
              destination: a,
              displacedBy: e.displacedBy,
              viewport: t.frame,
              last: o,
              forceShouldAnimate: !1,
            }),
            u = {},
            c = {},
            p = [o, d, s];
          return (
            o.all.forEach(e => {
              let t = (function (e, t) {
                for (let r = 0; r < t.length; r++) {
                  let n = t[r].visible[e];
                  if (n) return n;
                }
                return null;
              })(e, p);
              if (t) {
                c[e] = t;
                return;
              }
              u[e] = !0;
            }),
            { ...e, displaced: { all: o.all, invisible: u, visible: c } }
          );
        },
        eF = (e, t) => R(e.scroll.diff.displacement, t),
        ek = ({ pageBorderBoxCenter: e, draggable: t, viewport: r }) => {
          let n = P(eF(r, e), t.page.borderBox.center);
          return R(t.client.borderBox.center, n);
        },
        e$ = ({
          draggable: e,
          destination: t,
          newPageBorderBoxCenter: r,
          viewport: n,
          withDroppableDisplacement: l,
          onlyOnMainAxis: i = !1,
        }) => {
          let a = P(r, e.page.borderBox.center),
            o = {
              target: _(e.page.borderBox, a),
              destination: t,
              withDroppableDisplacement: l,
              viewport: n,
            };
          return i ? eg(o) : ef(o);
        },
        eW = ({
          isMovingForward: e,
          draggable: t,
          destination: r,
          draggables: n,
          previousImpact: l,
          viewport: i,
          previousPageBorderBoxCenter: a,
          previousClientSelection: o,
          afterCritical: d,
        }) => {
          if (!r.isEnabled) return null;
          let s = z(r.descriptor.id, n),
            u = K(t, r),
            c =
              X({
                isMovingForward: e,
                draggable: t,
                destination: r,
                insideDestination: s,
                previousImpact: l,
              }) ||
              eD({
                isMovingForward: e,
                isInHomeList: u,
                draggable: t,
                draggables: n,
                destination: r,
                insideDestination: s,
                previousImpact: l,
                viewport: i,
                afterCritical: d,
              });
          if (!c) return null;
          let p = eL({
            impact: c,
            draggable: t,
            droppable: r,
            draggables: n,
            afterCritical: d,
          });
          if (
            e$({
              draggable: t,
              destination: r,
              newPageBorderBoxCenter: p,
              viewport: i.frame,
              withDroppableDisplacement: !1,
              onlyOnMainAxis: !0,
            })
          )
            return {
              clientSelection: ek({
                pageBorderBoxCenter: p,
                draggable: t,
                viewport: i,
              }),
              impact: c,
              scrollJumpRequest: null,
            };
          let f = P(p, a);
          return {
            clientSelection: o,
            impact: eM({
              impact: c,
              viewport: i,
              destination: r,
              draggables: n,
              maxScrollChange: f,
            }),
            scrollJumpRequest: f,
          };
        };
      let eU = e => {
        let t = e.subject.active;
        return t || y(!1), t;
      };
      var eY = ({
        isMovingForward: e,
        pageBorderBoxCenter: t,
        source: r,
        droppables: n,
        viewport: l,
      }) => {
        let i = r.subject.active;
        if (!i) return null;
        let a = r.axis,
          o = er(i[a.start], i[a.end]),
          d = V(n)
            .filter(e => e !== r)
            .filter(e => e.isEnabled)
            .filter(e => !!e.subject.active)
            .filter(e => en(l.frame)(eU(e)))
            .filter(t => {
              let r = eU(t);
              return e
                ? i[a.crossAxisEnd] < r[a.crossAxisEnd]
                : r[a.crossAxisStart] < i[a.crossAxisStart];
            })
            .filter(e => {
              let t = eU(e),
                r = er(t[a.start], t[a.end]);
              return (
                o(t[a.start]) || o(t[a.end]) || r(i[a.start]) || r(i[a.end])
              );
            })
            .sort((t, r) => {
              let n = eU(t)[a.crossAxisStart],
                l = eU(r)[a.crossAxisStart];
              return e ? n - l : l - n;
            })
            .filter(
              (e, t, r) =>
                eU(e)[a.crossAxisStart] === eU(r[0])[a.crossAxisStart]
            );
        if (!d.length) return null;
        if (1 === d.length) return d[0];
        let s = d.filter(e => er(eU(e)[a.start], eU(e)[a.end])(t[a.line]));
        return 1 === s.length
          ? s[0]
          : s.length > 1
            ? s.sort((e, t) => eU(e)[a.start] - eU(t)[a.start])[0]
            : d.sort((e, r) => {
                let n = G(t, M(eU(e))),
                  l = G(t, M(eU(r)));
                return n !== l ? n - l : eU(e)[a.start] - eU(r)[a.start];
              })[0];
      };
      let eH = (e, t) => {
          let r = e.page.borderBox.center;
          return ey(e.descriptor.id, t) ? P(r, t.displacedBy.point) : r;
        },
        eV = (e, t) => {
          let r = e.page.borderBox;
          return ey(e.descriptor.id, t) ? _(r, O(t.displacedBy.point)) : r;
        };
      var ej = ({
          pageBorderBoxCenter: e,
          viewport: t,
          destination: r,
          insideDestination: n,
          afterCritical: l,
        }) =>
          n
            .filter(e =>
              ef({
                target: eV(e, l),
                destination: r,
                viewport: t.frame,
                withDroppableDisplacement: !0,
              })
            )
            .sort((t, n) => {
              let i = B(e, eB(r, eH(t, l))),
                a = B(e, eB(r, eH(n, l)));
              return i < a
                ? -1
                : a < i
                  ? 1
                  : t.descriptor.index - n.descriptor.index;
            })[0] || null,
        ez = (0, s.Z)(function (e, t) {
          let r = t[e.line];
          return { value: r, point: S(e.line, r) };
        });
      let eq = (e, t, r) => {
          let n = e.axis;
          if ('virtual' === e.descriptor.mode) return S(n.line, t[n.line]);
          let l = e.subject.page.contentBox[n.size],
            i =
              z(e.descriptor.id, r).reduce(
                (e, t) => e + t.client.marginBox[n.size],
                0
              ) +
              t[n.line] -
              l;
          return i <= 0 ? null : S(n.line, i);
        },
        eZ = (e, t) => ({ ...e, scroll: { ...e.scroll, max: t } }),
        eJ = (e, t, r) => {
          let n = e.frame;
          K(t, e) && y(!1), e.subject.withPlaceholder && y(!1);
          let l = ez(e.axis, t.displaceBy).point,
            i = eq(e, l, r),
            a = {
              placeholderSize: l,
              increasedBy: i,
              oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null,
            };
          if (!n) {
            let t = W({
              page: e.subject.page,
              withPlaceholder: a,
              axis: e.axis,
              frame: e.frame,
            });
            return { ...e, subject: t };
          }
          let o = i ? R(n.scroll.max, i) : n.scroll.max,
            d = eZ(n, o),
            s = W({
              page: e.subject.page,
              withPlaceholder: a,
              axis: e.axis,
              frame: d,
            });
          return { ...e, subject: s, frame: d };
        },
        eX = e => {
          let t = e.subject.withPlaceholder;
          t || y(!1);
          let r = e.frame;
          if (!r) {
            let t = W({
              page: e.subject.page,
              axis: e.axis,
              frame: null,
              withPlaceholder: null,
            });
            return { ...e, subject: t };
          }
          let n = t.oldFrameMaxScroll;
          n || y(!1);
          let l = eZ(r, n),
            i = W({
              page: e.subject.page,
              axis: e.axis,
              frame: l,
              withPlaceholder: null,
            });
          return { ...e, subject: i, frame: l };
        };
      var eK = ({
          previousPageBorderBoxCenter: e,
          moveRelativeTo: t,
          insideDestination: r,
          draggable: n,
          draggables: l,
          destination: i,
          viewport: a,
          afterCritical: o,
        }) => {
          if (!t) {
            if (r.length) return null;
            let e = {
                displaced: ee,
                displacedBy: Q,
                at: {
                  type: 'REORDER',
                  destination: { droppableId: i.descriptor.id, index: 0 },
                },
              },
              t = eL({
                impact: e,
                draggable: n,
                droppable: i,
                draggables: l,
                afterCritical: o,
              }),
              d = K(n, i) ? i : eJ(i, n, l);
            return e$({
              draggable: n,
              destination: d,
              newPageBorderBoxCenter: t,
              viewport: a.frame,
              withDroppableDisplacement: !1,
              onlyOnMainAxis: !0,
            })
              ? e
              : null;
          }
          let d = e[i.axis.line] <= t.page.borderBox.center[i.axis.line],
            s = (() => {
              let e = t.descriptor.index;
              return t.descriptor.id === n.descriptor.id || d ? e : e + 1;
            })(),
            u = ez(i.axis, n.displaceBy);
          return eI({
            draggable: n,
            insideDestination: r,
            destination: i,
            viewport: a,
            displacedBy: u,
            last: ee,
            index: s,
          });
        },
        eQ = ({
          isMovingForward: e,
          previousPageBorderBoxCenter: t,
          draggable: r,
          isOver: n,
          draggables: l,
          droppables: i,
          viewport: a,
          afterCritical: o,
        }) => {
          let d = eY({
            isMovingForward: e,
            pageBorderBoxCenter: t,
            source: n,
            droppables: i,
            viewport: a,
          });
          if (!d) return null;
          let s = z(d.descriptor.id, l),
            u = ej({
              pageBorderBoxCenter: t,
              viewport: a,
              destination: d,
              insideDestination: s,
              afterCritical: o,
            }),
            c = eK({
              previousPageBorderBoxCenter: t,
              destination: d,
              draggable: r,
              draggables: l,
              moveRelativeTo: u,
              insideDestination: s,
              viewport: a,
              afterCritical: o,
            });
          return c
            ? {
                clientSelection: ek({
                  pageBorderBoxCenter: eL({
                    impact: c,
                    draggable: r,
                    droppable: d,
                    draggables: l,
                    afterCritical: o,
                  }),
                  draggable: r,
                  viewport: a,
                }),
                impact: c,
                scrollJumpRequest: null,
              }
            : null;
        },
        e0 = e => {
          let t = e.at;
          return t
            ? 'REORDER' === t.type
              ? t.destination.droppableId
              : t.combine.droppableId
            : null;
        };
      let e1 = (e, t) => {
        let r = e0(e);
        return r ? t[r] : null;
      };
      var e4 = ({ state: e, type: t }) => {
        let r = e1(e.impact, e.dimensions.droppables),
          n = !!r,
          l = e.dimensions.droppables[e.critical.droppable.id],
          i = r || l,
          a = i.axis.direction,
          o =
            ('vertical' === a && ('MOVE_UP' === t || 'MOVE_DOWN' === t)) ||
            ('horizontal' === a && ('MOVE_LEFT' === t || 'MOVE_RIGHT' === t));
        if (o && !n) return null;
        let d = 'MOVE_DOWN' === t || 'MOVE_RIGHT' === t,
          s = e.dimensions.draggables[e.critical.draggable.id],
          u = e.current.page.borderBoxCenter,
          { draggables: c, droppables: p } = e.dimensions;
        return o
          ? eW({
              isMovingForward: d,
              previousPageBorderBoxCenter: u,
              draggable: s,
              destination: i,
              draggables: c,
              viewport: e.viewport,
              previousClientSelection: e.current.client.selection,
              previousImpact: e.impact,
              afterCritical: e.afterCritical,
            })
          : eQ({
              isMovingForward: d,
              previousPageBorderBoxCenter: u,
              draggable: s,
              isOver: i,
              draggables: c,
              droppables: p,
              viewport: e.viewport,
              afterCritical: e.afterCritical,
            });
      };
      function e3(e) {
        return 'DRAGGING' === e.phase || 'COLLECTING' === e.phase;
      }
      function e2(e) {
        let t = er(e.top, e.bottom),
          r = er(e.left, e.right);
        return function (e) {
          return t(e.y) && r(e.x);
        };
      }
      let e5 = (e, t) => (0, d.Dz)(_(e, t));
      var e7 = (e, t) => {
        let r = e.frame;
        return r ? e5(t, r.scroll.diff.value) : t;
      };
      function e6({ displaced: e, id: t }) {
        return !!(e.visible[t] || e.invisible[t]);
      }
      var e8 = ({
          pageBorderBoxWithDroppableScroll: e,
          draggable: t,
          destination: r,
          insideDestination: n,
          last: l,
          viewport: i,
          afterCritical: a,
        }) => {
          let o = r.axis,
            d = ez(r.axis, t.displaceBy),
            s = d.value,
            u = e[o.start],
            c = e[o.end],
            p =
              J(t, n).find(e => {
                let t = e.descriptor.id,
                  r = e.page.borderBox.center[o.line],
                  n = ey(t, a),
                  i = e6({ displaced: l, id: t });
                return n ? (i ? c <= r : u < r - s) : i ? c <= r + s : u < r;
              }) || null,
            f = (function ({ draggable: e, closest: t, inHomeList: r }) {
              return t
                ? r && t.descriptor.index > e.descriptor.index
                  ? t.descriptor.index - 1
                  : t.descriptor.index
                : null;
            })({ draggable: t, closest: p, inHomeList: K(t, r) });
          return eI({
            draggable: t,
            insideDestination: n,
            destination: r,
            viewport: i,
            last: l,
            displacedBy: d,
            index: f,
          });
        },
        e9 = ({
          draggable: e,
          pageBorderBoxWithDroppableScroll: t,
          previousImpact: r,
          destination: n,
          insideDestination: l,
          afterCritical: i,
        }) => {
          if (!n.isCombineEnabled) return null;
          let a = n.axis,
            o = ez(n.axis, e.displaceBy),
            d = o.value,
            s = t[a.start],
            u = t[a.end],
            c = J(e, l).find(e => {
              let t = e.descriptor.id,
                n = e.page.borderBox,
                l = n[a.size] / 4,
                o = ey(t, i),
                c = e6({ displaced: r.displaced, id: t });
              return o
                ? c
                  ? u > n[a.start] + l && u < n[a.end] - l
                  : s > n[a.start] - d + l && s < n[a.end] - d - l
                : c
                  ? u > n[a.start] + d + l && u < n[a.end] + d - l
                  : s > n[a.start] + l && s < n[a.end] - l;
            });
          return c
            ? {
                displacedBy: o,
                displaced: r.displaced,
                at: {
                  type: 'COMBINE',
                  combine: {
                    draggableId: c.descriptor.id,
                    droppableId: n.descriptor.id,
                  },
                },
              }
            : null;
        },
        te = ({
          pageOffset: e,
          draggable: t,
          draggables: r,
          droppables: n,
          previousImpact: l,
          viewport: i,
          afterCritical: a,
        }) => {
          let o = e5(t.page.borderBox, e),
            d = (function ({ pageBorderBox: e, draggable: t, droppables: r }) {
              let n = V(r).filter(t => {
                if (!t.isEnabled) return !1;
                let r = t.subject.active;
                if (
                  !r ||
                  !(e.left < r.right) ||
                  !(e.right > r.left) ||
                  !(e.top < r.bottom) ||
                  !(e.bottom > r.top)
                )
                  return !1;
                if (e2(r)(e.center)) return !0;
                let n = t.axis,
                  l = r.center[n.crossAxisLine],
                  i = e[n.crossAxisStart],
                  a = e[n.crossAxisEnd],
                  o = er(r[n.crossAxisStart], r[n.crossAxisEnd]),
                  d = o(i),
                  s = o(a);
                return (!d && !s) || (d ? i < l : a > l);
              });
              return n.length
                ? 1 === n.length
                  ? n[0].descriptor.id
                  : (function ({
                      pageBorderBox: e,
                      draggable: t,
                      candidates: r,
                    }) {
                      let n = t.page.borderBox.center,
                        l = r
                          .map(t => {
                            let r = t.axis,
                              l = S(
                                t.axis.line,
                                e.center[r.line],
                                t.page.borderBox.center[r.crossAxisLine]
                              );
                            return { id: t.descriptor.id, distance: B(n, l) };
                          })
                          .sort((e, t) => t.distance - e.distance);
                      return l[0] ? l[0].id : null;
                    })({ pageBorderBox: e, draggable: t, candidates: n })
                : null;
            })({ pageBorderBox: o, draggable: t, droppables: n });
          if (!d) return et;
          let s = n[d],
            u = z(s.descriptor.id, r),
            c = e7(s, o);
          return (
            e9({
              pageBorderBoxWithDroppableScroll: c,
              draggable: t,
              previousImpact: l,
              destination: s,
              insideDestination: u,
              afterCritical: a,
            }) ||
            e8({
              pageBorderBoxWithDroppableScroll: c,
              draggable: t,
              destination: s,
              insideDestination: u,
              last: l.displaced,
              viewport: i,
              afterCritical: a,
            })
          );
        },
        tt = (e, t) => ({ ...e, [t.descriptor.id]: t });
      let tr = ({ previousImpact: e, impact: t, droppables: r }) => {
        let n = e0(e),
          l = e0(t);
        if (!n || n === l) return r;
        let i = r[n];
        return i.subject.withPlaceholder ? tt(r, eX(i)) : r;
      };
      var tn = ({
          draggable: e,
          draggables: t,
          droppables: r,
          previousImpact: n,
          impact: l,
        }) => {
          let i = tr({ previousImpact: n, impact: l, droppables: r }),
            a = e0(l);
          if (!a) return i;
          let o = r[a];
          return K(e, o) || o.subject.withPlaceholder ? i : tt(i, eJ(o, e, t));
        },
        tl = ({
          state: e,
          clientSelection: t,
          dimensions: r,
          viewport: n,
          impact: l,
          scrollJumpRequest: i,
        }) => {
          let a = n || e.viewport,
            o = r || e.dimensions,
            d = t || e.current.client.selection,
            s = P(d, e.initial.client.selection),
            u = {
              offset: s,
              selection: d,
              borderBoxCenter: R(e.initial.client.borderBoxCenter, s),
            },
            c = {
              selection: R(u.selection, a.scroll.current),
              borderBoxCenter: R(u.borderBoxCenter, a.scroll.current),
              offset: R(u.offset, a.scroll.diff.value),
            },
            p = { client: u, page: c };
          if ('COLLECTING' === e.phase)
            return { ...e, dimensions: o, viewport: a, current: p };
          let f = o.draggables[e.critical.draggable.id],
            g =
              l ||
              te({
                pageOffset: c.offset,
                draggable: f,
                draggables: o.draggables,
                droppables: o.droppables,
                previousImpact: e.impact,
                viewport: a,
                afterCritical: e.afterCritical,
              }),
            m = tn({
              draggable: f,
              impact: g,
              previousImpact: e.impact,
              draggables: o.draggables,
              droppables: o.droppables,
            });
          return {
            ...e,
            current: p,
            dimensions: { draggables: o.draggables, droppables: m },
            impact: g,
            viewport: a,
            scrollJumpRequest: i || null,
            forceShouldAnimate: !i && null,
          };
        },
        ti = ({
          impact: e,
          viewport: t,
          draggables: r,
          destination: n,
          forceShouldAnimate: l,
        }) => {
          let i = e.displaced,
            a = eb({
              afterDragging: i.all.map(e => r[e]),
              destination: n,
              displacedBy: e.displacedBy,
              viewport: t.frame,
              forceShouldAnimate: l,
              last: i,
            });
          return { ...e, displaced: a };
        },
        ta = ({
          impact: e,
          draggable: t,
          droppable: r,
          draggables: n,
          viewport: l,
          afterCritical: i,
        }) =>
          ek({
            pageBorderBoxCenter: eL({
              impact: e,
              draggable: t,
              draggables: n,
              droppable: r,
              afterCritical: i,
            }),
            draggable: t,
            viewport: l,
          }),
        to = ({ state: e, dimensions: t, viewport: r }) => {
          'SNAP' !== e.movementMode && y(!1);
          let n = e.impact,
            l = r || e.viewport,
            i = t || e.dimensions,
            { draggables: a, droppables: o } = i,
            d = a[e.critical.draggable.id],
            s = e0(n);
          s || y(!1);
          let u = o[s],
            c = ti({ impact: n, viewport: l, destination: u, draggables: a }),
            p = ta({
              impact: c,
              draggable: d,
              droppable: u,
              draggables: a,
              viewport: l,
              afterCritical: e.afterCritical,
            });
          return tl({
            impact: c,
            clientSelection: p,
            state: e,
            dimensions: i,
            viewport: l,
          });
        },
        td = e => ({ index: e.index, droppableId: e.droppableId }),
        ts = ({ draggable: e, home: t, draggables: r, viewport: n }) => {
          let l = ez(t.axis, e.displaceBy),
            i = z(t.descriptor.id, r),
            a = i.indexOf(e);
          -1 !== a || y(!1);
          let o = i.slice(a + 1),
            d = o.reduce((e, t) => ((e[t.descriptor.id] = !0), e), {}),
            s = {
              inVirtualList: 'virtual' === t.descriptor.mode,
              displacedBy: l,
              effected: d,
            };
          return {
            impact: {
              displaced: eb({
                afterDragging: o,
                destination: t,
                displacedBy: l,
                last: null,
                viewport: n.frame,
                forceShouldAnimate: !1,
              }),
              displacedBy: l,
              at: { type: 'REORDER', destination: td(e.descriptor) },
            },
            afterCritical: s,
          };
        },
        tu = (e, t) => ({
          draggables: e.draggables,
          droppables: tt(e.droppables, t),
        });
      let tc = e => {},
        tp = e => {};
      var tf = ({ draggable: e, offset: t, initialWindowScroll: r }) => {
          let n = (0, d.cv)(e.client, t),
            l = (0, d.oc)(n, r);
          return {
            ...e,
            placeholder: { ...e.placeholder, client: n },
            client: n,
            page: l,
          };
        },
        tg = e => {
          let t = e.frame;
          return t || y(!1), t;
        },
        tm = ({ additions: e, updatedDroppables: t, viewport: r }) => {
          let n = r.scroll.diff.value;
          return e.map(e => {
            let l = R(n, tg(t[e.descriptor.droppableId]).scroll.diff.value);
            return tf({
              draggable: e,
              offset: l,
              initialWindowScroll: r.scroll.initial,
            });
          });
        };
      let tb = 'Processing dynamic changes';
      var th = ({ state: e, published: t }) => {
        tc(tb);
        let r = t.modified.map(t =>
            U(e.dimensions.droppables[t.droppableId], t.scroll)
          ),
          n = { ...e.dimensions.droppables, ...Y(r) },
          l = H(
            tm({
              additions: t.additions,
              updatedDroppables: n,
              viewport: e.viewport,
            })
          ),
          i = { ...e.dimensions.draggables, ...l };
        t.removals.forEach(e => {
          delete i[e];
        });
        let a = { droppables: n, draggables: i },
          o = e0(e.impact),
          d = o ? a.droppables[o] : null,
          { impact: s, afterCritical: u } = ts({
            draggable: a.draggables[e.critical.draggable.id],
            home: a.droppables[e.critical.droppable.id],
            draggables: i,
            viewport: e.viewport,
          }),
          c = d && d.isCombineEnabled ? e.impact : s,
          p = te({
            pageOffset: e.current.page.offset,
            draggable: a.draggables[e.critical.draggable.id],
            draggables: a.draggables,
            droppables: a.droppables,
            previousImpact: c,
            viewport: e.viewport,
            afterCritical: u,
          });
        tp(tb);
        let f = {
          ...e,
          phase: 'DRAGGING',
          impact: p,
          onLiftImpact: s,
          dimensions: a,
          afterCritical: u,
          forceShouldAnimate: !1,
        };
        return 'COLLECTING' === e.phase
          ? f
          : { ...f, phase: 'DROP_PENDING', reason: e.reason, isWaiting: !1 };
      };
      let tI = e => 'SNAP' === e.movementMode,
        ty = (e, t, r) => {
          let n = tu(e.dimensions, t);
          return !tI(e) || r
            ? tl({ state: e, dimensions: n })
            : to({ state: e, dimensions: n });
        };
      function tv(e) {
        return e.isDragging && 'SNAP' === e.movementMode
          ? { ...e, scrollJumpRequest: null }
          : e;
      }
      let tx = { phase: 'IDLE', completed: null, shouldFlush: !1 };
      var tD = (e = tx, t) => {
        if ('FLUSH' === t.type) return { ...tx, shouldFlush: !0 };
        if ('INITIAL_PUBLISH' === t.type) {
          'IDLE' !== e.phase && y(!1);
          let {
              critical: r,
              clientSelection: n,
              viewport: l,
              dimensions: i,
              movementMode: a,
            } = t.payload,
            o = i.draggables[r.draggable.id],
            d = i.droppables[r.droppable.id],
            s = {
              selection: n,
              borderBoxCenter: o.client.borderBox.center,
              offset: C,
            },
            u = {
              client: s,
              page: {
                selection: R(s.selection, l.scroll.initial),
                borderBoxCenter: R(s.selection, l.scroll.initial),
                offset: R(s.selection, l.scroll.diff.value),
              },
            },
            c = V(i.droppables).every(e => !e.isFixedOnPage),
            { impact: p, afterCritical: f } = ts({
              draggable: o,
              home: d,
              draggables: i.draggables,
              viewport: l,
            });
          return {
            phase: 'DRAGGING',
            isDragging: !0,
            critical: r,
            movementMode: a,
            dimensions: i,
            initial: u,
            current: u,
            isWindowScrollAllowed: c,
            impact: p,
            afterCritical: f,
            onLiftImpact: p,
            viewport: l,
            scrollJumpRequest: null,
            forceShouldAnimate: null,
          };
        }
        if ('COLLECTION_STARTING' === t.type)
          return 'COLLECTING' === e.phase || 'DROP_PENDING' === e.phase
            ? e
            : ('DRAGGING' !== e.phase && y(!1), { ...e, phase: 'COLLECTING' });
        if ('PUBLISH_WHILE_DRAGGING' === t.type)
          return (
            'COLLECTING' === e.phase || 'DROP_PENDING' === e.phase || y(!1),
            th({ state: e, published: t.payload })
          );
        if ('MOVE' === t.type) {
          if ('DROP_PENDING' === e.phase) return e;
          e3(e) || y(!1);
          let { client: r } = t.payload;
          return w(r, e.current.client.selection)
            ? e
            : tl({
                state: e,
                clientSelection: r,
                impact: tI(e) ? e.impact : null,
              });
        }
        if ('UPDATE_DROPPABLE_SCROLL' === t.type) {
          if ('DROP_PENDING' === e.phase || 'COLLECTING' === e.phase)
            return tv(e);
          e3(e) || y(!1);
          let { id: r, newScroll: n } = t.payload,
            l = e.dimensions.droppables[r];
          return l ? ty(e, U(l, n), !1) : e;
        }
        if ('UPDATE_DROPPABLE_IS_ENABLED' === t.type) {
          if ('DROP_PENDING' === e.phase) return e;
          e3(e) || y(!1);
          let { id: r, isEnabled: n } = t.payload,
            l = e.dimensions.droppables[r];
          return (
            l || y(!1),
            l.isEnabled !== n || y(!1),
            ty(e, { ...l, isEnabled: n }, !0)
          );
        }
        if ('UPDATE_DROPPABLE_IS_COMBINE_ENABLED' === t.type) {
          if ('DROP_PENDING' === e.phase) return e;
          e3(e) || y(!1);
          let { id: r, isCombineEnabled: n } = t.payload,
            l = e.dimensions.droppables[r];
          return (
            l || y(!1),
            l.isCombineEnabled !== n || y(!1),
            ty(e, { ...l, isCombineEnabled: n }, !0)
          );
        }
        if ('MOVE_BY_WINDOW_SCROLL' === t.type) {
          if ('DROP_PENDING' === e.phase || 'DROP_ANIMATING' === e.phase)
            return e;
          e3(e) || y(!1), e.isWindowScrollAllowed || y(!1);
          let r = t.payload.newScroll;
          if (w(e.viewport.scroll.current, r)) return tv(e);
          let n = eT(e.viewport, r);
          return tI(e)
            ? to({ state: e, viewport: n })
            : tl({ state: e, viewport: n });
        }
        if ('UPDATE_VIEWPORT_MAX_SCROLL' === t.type) {
          if (!e3(e)) return e;
          let r = t.payload.maxScroll;
          if (w(r, e.viewport.scroll.max)) return e;
          let n = { ...e.viewport, scroll: { ...e.viewport.scroll, max: r } };
          return { ...e, viewport: n };
        }
        if (
          'MOVE_UP' === t.type ||
          'MOVE_DOWN' === t.type ||
          'MOVE_LEFT' === t.type ||
          'MOVE_RIGHT' === t.type
        ) {
          if ('COLLECTING' === e.phase || 'DROP_PENDING' === e.phase) return e;
          'DRAGGING' !== e.phase && y(!1);
          let r = e4({ state: e, type: t.type });
          return r
            ? tl({
                state: e,
                impact: r.impact,
                clientSelection: r.clientSelection,
                scrollJumpRequest: r.scrollJumpRequest,
              })
            : e;
        }
        if ('DROP_PENDING' === t.type) {
          let r = t.payload.reason;
          return (
            'COLLECTING' !== e.phase && y(!1),
            { ...e, phase: 'DROP_PENDING', isWaiting: !0, reason: r }
          );
        }
        if ('DROP_ANIMATE' === t.type) {
          let {
            completed: r,
            dropDuration: n,
            newHomeClientOffset: l,
          } = t.payload;
          return (
            'DRAGGING' === e.phase || 'DROP_PENDING' === e.phase || y(!1),
            {
              phase: 'DROP_ANIMATING',
              completed: r,
              dropDuration: n,
              newHomeClientOffset: l,
              dimensions: e.dimensions,
            }
          );
        }
        if ('DROP_COMPLETE' === t.type) {
          let { completed: e } = t.payload;
          return { phase: 'IDLE', completed: e, shouldFlush: !1 };
        }
        return e;
      };
      let tE = e => ({ type: 'BEFORE_INITIAL_CAPTURE', payload: e }),
        tA = e => ({ type: 'LIFT', payload: e }),
        tN = e => ({ type: 'INITIAL_PUBLISH', payload: e }),
        tC = e => ({ type: 'PUBLISH_WHILE_DRAGGING', payload: e }),
        tR = () => ({ type: 'COLLECTION_STARTING', payload: null }),
        tP = e => ({ type: 'UPDATE_DROPPABLE_SCROLL', payload: e }),
        tw = e => ({ type: 'UPDATE_DROPPABLE_IS_ENABLED', payload: e }),
        tO = e => ({ type: 'UPDATE_DROPPABLE_IS_COMBINE_ENABLED', payload: e }),
        tS = e => ({ type: 'MOVE', payload: e }),
        tB = e => ({ type: 'MOVE_BY_WINDOW_SCROLL', payload: e }),
        tG = () => ({ type: 'MOVE_UP', payload: null }),
        tL = () => ({ type: 'MOVE_DOWN', payload: null }),
        tT = () => ({ type: 'MOVE_RIGHT', payload: null }),
        t_ = () => ({ type: 'MOVE_LEFT', payload: null }),
        tM = () => ({ type: 'FLUSH', payload: null }),
        tF = e => ({ type: 'DROP_ANIMATE', payload: e }),
        tk = e => ({ type: 'DROP_COMPLETE', payload: e }),
        t$ = e => ({ type: 'DROP', payload: e }),
        tW = e => ({ type: 'DROP_PENDING', payload: e }),
        tU = () => ({ type: 'DROP_ANIMATION_FINISHED', payload: null });
      var tY =
          e =>
          ({ getState: t, dispatch: r }) =>
          n =>
          l => {
            if ('LIFT' !== l.type) {
              n(l);
              return;
            }
            let { id: i, clientSelection: a, movementMode: o } = l.payload,
              d = t();
            'DROP_ANIMATING' === d.phase && r(tk({ completed: d.completed })),
              'IDLE' !== t().phase && y(!1),
              r(tM()),
              r(tE({ draggableId: i, movementMode: o }));
            let {
              critical: s,
              dimensions: u,
              viewport: c,
            } = e.startPublishing({
              draggableId: i,
              scrollOptions: { shouldPublishImmediately: 'SNAP' === o },
            });
            r(
              tN({
                critical: s,
                dimensions: u,
                clientSelection: a,
                movementMode: o,
                viewport: c,
              })
            );
          },
        tH = e => () => t => r => {
          'INITIAL_PUBLISH' === r.type && e.dragging(),
            'DROP_ANIMATE' === r.type &&
              e.dropping(r.payload.completed.result.reason),
            ('FLUSH' === r.type || 'DROP_COMPLETE' === r.type) && e.resting(),
            t(r);
        };
      let tV = {
          outOfTheWay: 'cubic-bezier(0.2, 0, 0, 1)',
          drop: 'cubic-bezier(.2,1,.1,1)',
        },
        tj = { opacity: { drop: 0, combining: 0.7 }, scale: { drop: 0.75 } },
        tz = { outOfTheWay: 0.2, minDropTime: 0.33, maxDropTime: 0.55 },
        tq = `${tz.outOfTheWay}s ${tV.outOfTheWay}`,
        tZ = {
          fluid: `opacity ${tq}`,
          snap: `transform ${tq}, opacity ${tq}`,
          drop: e => {
            let t = `${e}s ${tV.drop}`;
            return `transform ${t}, opacity ${t}`;
          },
          outOfTheWay: `transform ${tq}`,
          placeholder: `height ${tq}, width ${tq}, margin ${tq}`,
        },
        tJ = e => (w(e, C) ? void 0 : `translate(${e.x}px, ${e.y}px)`),
        tX = {
          moveTo: tJ,
          drop: (e, t) => {
            let r = tJ(e);
            return r ? (t ? `${r} scale(${tj.scale.drop})` : r) : void 0;
          },
        },
        { minDropTime: tK, maxDropTime: tQ } = tz,
        t0 = tQ - tK;
      var t1 = ({ current: e, destination: t, reason: r }) => {
          let n = B(e, t);
          if (n <= 0) return tK;
          if (n >= 1500) return tQ;
          let l = tK + (n / 1500) * t0;
          return Number(('CANCEL' === r ? 0.6 * l : l).toFixed(2));
        },
        t4 = ({
          impact: e,
          draggable: t,
          dimensions: r,
          viewport: n,
          afterCritical: l,
        }) => {
          let { draggables: i, droppables: a } = r,
            o = e0(e),
            d = o ? a[o] : null,
            s = a[t.descriptor.droppableId];
          return P(
            ta({
              impact: e,
              draggable: t,
              draggables: i,
              afterCritical: l,
              droppable: d || s,
              viewport: n,
            }),
            t.client.borderBox.center
          );
        },
        t3 = ({
          draggables: e,
          reason: t,
          lastImpact: r,
          home: n,
          viewport: l,
          onLiftImpact: i,
        }) =>
          r.at && 'DROP' === t
            ? 'REORDER' === r.at.type
              ? { impact: r, didDropInsideDroppable: !0 }
              : { impact: { ...r, displaced: ee }, didDropInsideDroppable: !0 }
            : {
                impact: ti({
                  draggables: e,
                  impact: i,
                  destination: n,
                  viewport: l,
                  forceShouldAnimate: !0,
                }),
                didDropInsideDroppable: !1,
              },
        t2 =
          ({ getState: e, dispatch: t }) =>
          r =>
          n => {
            if ('DROP' !== n.type) {
              r(n);
              return;
            }
            let l = e(),
              i = n.payload.reason;
            if ('COLLECTING' === l.phase) {
              t(tW({ reason: i }));
              return;
            }
            if ('IDLE' === l.phase) return;
            'DROP_PENDING' === l.phase && l.isWaiting && y(!1),
              'DRAGGING' === l.phase || 'DROP_PENDING' === l.phase || y(!1);
            let a = l.critical,
              o = l.dimensions,
              d = o.draggables[l.critical.draggable.id],
              { impact: s, didDropInsideDroppable: u } = t3({
                reason: i,
                lastImpact: l.impact,
                afterCritical: l.afterCritical,
                onLiftImpact: l.onLiftImpact,
                home: l.dimensions.droppables[l.critical.droppable.id],
                viewport: l.viewport,
                draggables: l.dimensions.draggables,
              }),
              c = u ? q(s) : null,
              p = u ? Z(s) : null,
              f = { index: a.draggable.index, droppableId: a.droppable.id },
              g = {
                draggableId: d.descriptor.id,
                type: d.descriptor.type,
                source: f,
                reason: i,
                mode: l.movementMode,
                destination: c,
                combine: p,
              },
              m = t4({
                impact: s,
                draggable: d,
                dimensions: o,
                viewport: l.viewport,
                afterCritical: l.afterCritical,
              }),
              b = {
                critical: l.critical,
                afterCritical: l.afterCritical,
                result: g,
                impact: s,
              };
            if (!(!w(l.current.client.offset, m) || g.combine)) {
              t(tk({ completed: b }));
              return;
            }
            let h = t1({
              current: l.current.client.offset,
              destination: m,
              reason: i,
            });
            t(tF({ newHomeClientOffset: m, dropDuration: h, completed: b }));
          },
        t5 = () => ({ x: window.pageXOffset, y: window.pageYOffset });
      let t7 = e =>
        'DROP_COMPLETE' === e.type ||
        'DROP_ANIMATE' === e.type ||
        'FLUSH' === e.type;
      var t6 = e => {
          let t = (function ({ onWindowScroll: e }) {
            let t = (0, u.Z)(function () {
                e(t5());
              }),
              r = {
                eventName: 'scroll',
                options: { passive: !0, capture: !1 },
                fn: e => {
                  (e.target === window || e.target === window.document) && t();
                },
              },
              n = b;
            function l() {
              return n !== b;
            }
            return {
              start: function () {
                l() && y(!1), (n = h(window, [r]));
              },
              stop: function () {
                l() || y(!1), t.cancel(), n(), (n = b);
              },
              isActive: l,
            };
          })({
            onWindowScroll: t => {
              e.dispatch(tB({ newScroll: t }));
            },
          });
          return e => r => {
            t.isActive() || 'INITIAL_PUBLISH' !== r.type || t.start(),
              t.isActive() && t7(r) && t.stop(),
              e(r);
          };
        },
        t8 = e => {
          let t = !1,
            r = !1,
            n = setTimeout(() => {
              r = !0;
            }),
            l = l => {
              t || r || ((t = !0), e(l), clearTimeout(n));
            };
          return (l.wasCalled = () => t), l;
        },
        t9 = () => {
          let e = [],
            t = t => {
              let r = e.findIndex(e => e.timerId === t);
              -1 !== r || y(!1);
              let [n] = e.splice(r, 1);
              n.callback();
            };
          return {
            add: r => {
              let n = setTimeout(() => t(n));
              e.push({ timerId: n, callback: r });
            },
            flush: () => {
              if (!e.length) return;
              let t = [...e];
              (e.length = 0),
                t.forEach(e => {
                  clearTimeout(e.timerId), e.callback();
                });
            },
          };
        };
      let re = (e, t) =>
          (null == e && null == t) ||
          (null != e &&
            null != t &&
            e.droppableId === t.droppableId &&
            e.index === t.index),
        rt = (e, t) =>
          (null == e && null == t) ||
          (null != e &&
            null != t &&
            e.draggableId === t.draggableId &&
            e.droppableId === t.droppableId),
        rr = (e, t) => {
          if (e === t) return !0;
          let r =
              e.draggable.id === t.draggable.id &&
              e.draggable.droppableId === t.draggable.droppableId &&
              e.draggable.type === t.draggable.type &&
              e.draggable.index === t.draggable.index,
            n =
              e.droppable.id === t.droppable.id &&
              e.droppable.type === t.droppable.type;
          return r && n;
        },
        rn = (e, t) => {
          tc(), t(), tp();
        },
        rl = (e, t) => ({
          draggableId: e.draggable.id,
          type: e.droppable.type,
          source: { droppableId: e.droppable.id, index: e.draggable.index },
          mode: t,
        });
      function ri(e, t, r, n) {
        if (!e) {
          r(n(t));
          return;
        }
        let l = t8(r);
        e(t, { announce: l }), l.wasCalled() || r(n(t));
      }
      var ra = (e, t) => {
          let r = t9(),
            n = null,
            l = r => {
              n || y(!1),
                (n = null),
                rn('onDragEnd', () => ri(e().onDragEnd, r, t, N.onDragEnd));
            };
          return {
            beforeCapture: (t, r) => {
              n && y(!1),
                rn('onBeforeCapture', () => {
                  let n = e().onBeforeCapture;
                  n && n({ draggableId: t, mode: r });
                });
            },
            beforeStart: (t, r) => {
              n && y(!1),
                rn('onBeforeDragStart', () => {
                  let n = e().onBeforeDragStart;
                  n && n(rl(t, r));
                });
            },
            start: (l, i) => {
              n && y(!1);
              let a = rl(l, i);
              (n = {
                mode: i,
                lastCritical: l,
                lastLocation: a.source,
                lastCombine: null,
              }),
                r.add(() => {
                  rn('onDragStart', () =>
                    ri(e().onDragStart, a, t, N.onDragStart)
                  );
                });
            },
            update: (l, i) => {
              let a = q(i),
                o = Z(i);
              n || y(!1);
              let d = !rr(l, n.lastCritical);
              d && (n.lastCritical = l);
              let s = !re(n.lastLocation, a);
              s && (n.lastLocation = a);
              let u = !rt(n.lastCombine, o);
              if ((u && (n.lastCombine = o), !d && !s && !u)) return;
              let c = { ...rl(l, n.mode), combine: o, destination: a };
              r.add(() => {
                rn('onDragUpdate', () =>
                  ri(e().onDragUpdate, c, t, N.onDragUpdate)
                );
              });
            },
            flush: () => {
              n || y(!1), r.flush();
            },
            drop: l,
            abort: () => {
              n &&
                l({
                  ...rl(n.lastCritical, n.mode),
                  combine: null,
                  destination: null,
                  reason: 'CANCEL',
                });
            },
          };
        },
        ro = (e, t) => {
          let r = ra(e, t);
          return e => t => n => {
            if ('BEFORE_INITIAL_CAPTURE' === n.type) {
              r.beforeCapture(n.payload.draggableId, n.payload.movementMode);
              return;
            }
            if ('INITIAL_PUBLISH' === n.type) {
              let e = n.payload.critical;
              r.beforeStart(e, n.payload.movementMode),
                t(n),
                r.start(e, n.payload.movementMode);
              return;
            }
            if ('DROP_COMPLETE' === n.type) {
              let e = n.payload.completed.result;
              r.flush(), t(n), r.drop(e);
              return;
            }
            if ((t(n), 'FLUSH' === n.type)) {
              r.abort();
              return;
            }
            let l = e.getState();
            'DRAGGING' === l.phase && r.update(l.critical, l.impact);
          };
        },
        rd = e => t => r => {
          if ('DROP_ANIMATION_FINISHED' !== r.type) {
            t(r);
            return;
          }
          let n = e.getState();
          'DROP_ANIMATING' !== n.phase && y(!1),
            e.dispatch(tk({ completed: n.completed }));
        },
        rs = e => {
          let t = null,
            r = null;
          return n => l => {
            if (
              (('FLUSH' === l.type ||
                'DROP_COMPLETE' === l.type ||
                'DROP_ANIMATION_FINISHED' === l.type) &&
                (r && (cancelAnimationFrame(r), (r = null)),
                t && (t(), (t = null))),
              n(l),
              'DROP_ANIMATE' !== l.type)
            )
              return;
            let i = {
              eventName: 'scroll',
              options: { capture: !0, passive: !1, once: !0 },
              fn: function () {
                'DROP_ANIMATING' === e.getState().phase && e.dispatch(tU());
              },
            };
            r = requestAnimationFrame(() => {
              (r = null), (t = h(window, [i]));
            });
          };
        },
        ru = e => () => t => r => {
          ('DROP_COMPLETE' === r.type ||
            'FLUSH' === r.type ||
            'DROP_ANIMATE' === r.type) &&
            e.stopPublishing(),
            t(r);
        },
        rc = e => {
          let t = !1;
          return () => r => n => {
            if ('INITIAL_PUBLISH' === n.type) {
              (t = !0),
                e.tryRecordFocus(n.payload.critical.draggable.id),
                r(n),
                e.tryRestoreFocusRecorded();
              return;
            }
            if ((r(n), t)) {
              if ('FLUSH' === n.type) {
                (t = !1), e.tryRestoreFocusRecorded();
                return;
              }
              if ('DROP_COMPLETE' === n.type) {
                t = !1;
                let r = n.payload.completed.result;
                r.combine &&
                  e.tryShiftRecord(r.draggableId, r.combine.draggableId),
                  e.tryRestoreFocusRecorded();
              }
            }
          };
        };
      let rp = e =>
        'DROP_COMPLETE' === e.type ||
        'DROP_ANIMATE' === e.type ||
        'FLUSH' === e.type;
      var rf = e => t => r => n => {
          if (rp(n)) {
            e.stop(), r(n);
            return;
          }
          if ('INITIAL_PUBLISH' === n.type) {
            r(n);
            let l = t.getState();
            'DRAGGING' !== l.phase && y(!1), e.start(l);
            return;
          }
          r(n), e.scroll(t.getState());
        },
        rg = e => t => r => {
          if ((t(r), 'PUBLISH_WHILE_DRAGGING' !== r.type)) return;
          let n = e.getState();
          'DROP_PENDING' !== n.phase ||
            n.isWaiting ||
            e.dispatch(t$({ reason: n.reason }));
        };
      let rm = i.qC;
      var rb = ({
        dimensionMarshal: e,
        focusMarshal: t,
        styleMarshal: r,
        getResponders: n,
        announce: l,
        autoScroller: a,
      }) =>
        (0, i.MT)(
          tD,
          rm(
            (0, i.md)(
              tH(r),
              ru(e),
              tY(e),
              t2,
              rd,
              rs,
              rg,
              rf(a),
              t6,
              rc(t),
              ro(n, l)
            )
          )
        );
      let rh = () => ({ additions: {}, removals: {}, modified: {} });
      var rI = ({ scrollHeight: e, scrollWidth: t, height: r, width: n }) => {
          let l = P({ x: t, y: e }, { x: n, y: r });
          return { x: Math.max(0, l.x), y: Math.max(0, l.y) };
        },
        ry = () => {
          let e = document.documentElement;
          return e || y(!1), e;
        },
        rv = () => {
          let e = ry();
          return rI({
            scrollHeight: e.scrollHeight,
            scrollWidth: e.scrollWidth,
            width: e.clientWidth,
            height: e.clientHeight,
          });
        },
        rx = () => {
          let e = t5(),
            t = rv(),
            r = e.y,
            n = e.x,
            l = ry(),
            i = l.clientWidth,
            a = l.clientHeight;
          return {
            frame: (0, d.Dz)({ top: r, left: n, right: n + i, bottom: r + a }),
            scroll: {
              initial: e,
              current: e,
              max: t,
              diff: { value: C, displacement: C },
            },
          };
        },
        rD = ({ critical: e, scrollOptions: t, registry: r }) => {
          tc();
          let n = rx(),
            l = n.scroll.current,
            i = e.droppable,
            a = r.droppable
              .getAllByType(i.type)
              .map(e => e.callbacks.getDimensionAndWatchScroll(l, t)),
            o = {
              draggables: H(
                r.draggable
                  .getAllByType(e.draggable.type)
                  .map(e => e.getDimension(l))
              ),
              droppables: Y(a),
            };
          return tp(), { dimensions: o, critical: e, viewport: n };
        };
      function rE(e, t, r) {
        return (
          r.descriptor.id !== t.id &&
          r.descriptor.type === t.type &&
          'virtual' ===
            e.droppable.getById(r.descriptor.droppableId).descriptor.mode
        );
      }
      var rA = (e, t) => {
          let r = null,
            n = (function ({ registry: e, callbacks: t }) {
              let r = rh(),
                n = null,
                l = () => {
                  n ||
                    (t.collectionStarting(),
                    (n = requestAnimationFrame(() => {
                      (n = null), tc();
                      let { additions: l, removals: i, modified: a } = r,
                        o = Object.keys(l)
                          .map(t => e.draggable.getById(t).getDimension(C))
                          .sort(
                            (e, t) => e.descriptor.index - t.descriptor.index
                          ),
                        d = Object.keys(a).map(t => {
                          let r = e.droppable
                            .getById(t)
                            .callbacks.getScrollWhileDragging();
                          return { droppableId: t, scroll: r };
                        }),
                        s = {
                          additions: o,
                          removals: Object.keys(i),
                          modified: d,
                        };
                      (r = rh()), tp(), t.publish(s);
                    })));
                };
              return {
                add: e => {
                  let t = e.descriptor.id;
                  (r.additions[t] = e),
                    (r.modified[e.descriptor.droppableId] = !0),
                    r.removals[t] && delete r.removals[t],
                    l();
                },
                remove: e => {
                  let t = e.descriptor;
                  (r.removals[t.id] = !0),
                    (r.modified[t.droppableId] = !0),
                    r.additions[t.id] && delete r.additions[t.id],
                    l();
                },
                stop: () => {
                  n && (cancelAnimationFrame(n), (n = null), (r = rh()));
                },
              };
            })({
              callbacks: {
                publish: t.publishWhileDragging,
                collectionStarting: t.collectionStarting,
              },
              registry: e,
            }),
            l = t => {
              r || y(!1);
              let l = r.critical.draggable;
              'ADDITION' === t.type && rE(e, l, t.value) && n.add(t.value),
                'REMOVAL' === t.type && rE(e, l, t.value) && n.remove(t.value);
            };
          return {
            updateDroppableIsEnabled: (n, l) => {
              e.droppable.exists(n) || y(!1),
                r && t.updateDroppableIsEnabled({ id: n, isEnabled: l });
            },
            updateDroppableIsCombineEnabled: (n, l) => {
              r &&
                (e.droppable.exists(n) || y(!1),
                t.updateDroppableIsCombineEnabled({
                  id: n,
                  isCombineEnabled: l,
                }));
            },
            scrollDroppable: (t, n) => {
              r && e.droppable.getById(t).callbacks.scroll(n);
            },
            updateDroppableScroll: (n, l) => {
              r &&
                (e.droppable.exists(n) || y(!1),
                t.updateDroppableScroll({ id: n, newScroll: l }));
            },
            startPublishing: t => {
              r && y(!1);
              let n = e.draggable.getById(t.draggableId),
                i = e.droppable.getById(n.descriptor.droppableId),
                a = { draggable: n.descriptor, droppable: i.descriptor };
              return (
                (r = { critical: a, unsubscribe: e.subscribe(l) }),
                rD({ critical: a, registry: e, scrollOptions: t.scrollOptions })
              );
            },
            stopPublishing: () => {
              if (!r) return;
              n.stop();
              let t = r.critical.droppable;
              e.droppable
                .getAllByType(t.type)
                .forEach(e => e.callbacks.dragStopped()),
                r.unsubscribe(),
                (r = null);
            },
          };
        },
        rN = (e, t) =>
          'IDLE' === e.phase ||
          ('DROP_ANIMATING' === e.phase &&
            e.completed.result.draggableId !== t &&
            'DROP' === e.completed.result.reason),
        rC = e => {
          window.scrollBy(e.x, e.y);
        };
      let rR = (0, s.Z)(e => V(e).filter(e => !!e.isEnabled && !!e.frame)),
        rP = (e, t) =>
          rR(t).find(t => (t.frame || y(!1), e2(t.frame.pageMarginBox)(e))) ||
          null;
      var rw = ({ center: e, destination: t, droppables: r }) => {
        if (t) {
          let e = r[t];
          return e.frame ? e : null;
        }
        return rP(e, r);
      };
      let rO = {
        startFromPercentage: 0.25,
        maxScrollAtPercentage: 0.05,
        maxPixelScroll: 28,
        ease: e => e ** 2,
        durationDampening: { stopDampeningAt: 1200, accelerateAt: 360 },
        disabled: !1,
      };
      var rS = (e, t, r = () => rO) => {
          let n = r();
          return {
            startScrollingFrom: e[t.size] * n.startFromPercentage,
            maxScrollValueAt: e[t.size] * n.maxScrollAtPercentage,
          };
        },
        rB = ({ startOfRange: e, endOfRange: t, current: r }) => {
          let n = t - e;
          return 0 === n ? 0 : (r - e) / n;
        },
        rG = (e, t, r = () => rO) => {
          let n = r();
          if (e > t.startScrollingFrom) return 0;
          if (e <= t.maxScrollValueAt) return n.maxPixelScroll;
          if (e === t.startScrollingFrom) return 1;
          let l = rB({
            startOfRange: t.maxScrollValueAt,
            endOfRange: t.startScrollingFrom,
            current: e,
          });
          return Math.ceil(n.maxPixelScroll * n.ease(1 - l));
        },
        rL = (e, t, r) => {
          let n = r(),
            l = n.durationDampening.accelerateAt,
            i = n.durationDampening.stopDampeningAt,
            a = Date.now() - t;
          if (a >= i) return e;
          if (a < l) return 1;
          let o = rB({ startOfRange: l, endOfRange: i, current: a });
          return Math.ceil(e * n.ease(o));
        },
        rT = ({
          distanceToEdge: e,
          thresholds: t,
          dragStartTime: r,
          shouldUseTimeDampening: n,
          getAutoScrollerOptions: l,
        }) => {
          let i = rG(e, t, l);
          return 0 === i ? 0 : n ? Math.max(rL(i, r, l), 1) : i;
        },
        r_ = ({
          container: e,
          distanceToEdges: t,
          dragStartTime: r,
          axis: n,
          shouldUseTimeDampening: l,
          getAutoScrollerOptions: i,
        }) => {
          let a = rS(e, n, i);
          return t[n.end] < t[n.start]
            ? rT({
                distanceToEdge: t[n.end],
                thresholds: a,
                dragStartTime: r,
                shouldUseTimeDampening: l,
                getAutoScrollerOptions: i,
              })
            : -1 *
                rT({
                  distanceToEdge: t[n.start],
                  thresholds: a,
                  dragStartTime: r,
                  shouldUseTimeDampening: l,
                  getAutoScrollerOptions: i,
                });
        },
        rM = ({ container: e, subject: t, proposedScroll: r }) => {
          let n = t.height > e.height,
            l = t.width > e.width;
          return l || n
            ? l && n
              ? null
              : { x: l ? 0 : r.x, y: n ? 0 : r.y }
            : r;
        };
      let rF = L(e => (0 === e ? 0 : e));
      var rk = ({
        dragStartTime: e,
        container: t,
        subject: r,
        center: n,
        shouldUseTimeDampening: l,
        getAutoScrollerOptions: i,
      }) => {
        let a = {
            top: n.y - t.top,
            right: t.right - n.x,
            bottom: t.bottom - n.y,
            left: n.x - t.left,
          },
          o = r_({
            container: t,
            distanceToEdges: a,
            dragStartTime: e,
            axis: ei,
            shouldUseTimeDampening: l,
            getAutoScrollerOptions: i,
          }),
          d = rF({
            x: r_({
              container: t,
              distanceToEdges: a,
              dragStartTime: e,
              axis: ea,
              shouldUseTimeDampening: l,
              getAutoScrollerOptions: i,
            }),
            y: o,
          });
        if (w(d, C)) return null;
        let s = rM({ container: t, subject: r, proposedScroll: d });
        return s ? (w(s, C) ? null : s) : null;
      };
      let r$ = L(e => (0 === e ? 0 : e > 0 ? 1 : -1)),
        rW = (() => {
          let e = (e, t) => (e < 0 ? e : e > t ? e - t : 0);
          return ({ current: t, max: r, change: n }) => {
            let l = R(t, n),
              i = { x: e(l.x, r.x), y: e(l.y, r.y) };
            return w(i, C) ? null : i;
          };
        })(),
        rU = ({ max: e, current: t, change: r }) => {
          let n = { x: Math.max(t.x, e.x), y: Math.max(t.y, e.y) },
            l = r$(r),
            i = rW({ max: n, current: t, change: l });
          return !i || (0 !== l.x && 0 === i.x) || (0 !== l.y && 0 === i.y);
        },
        rY = (e, t) =>
          rU({ current: e.scroll.current, max: e.scroll.max, change: t }),
        rH = (e, t) => {
          if (!rY(e, t)) return null;
          let r = e.scroll.max;
          return rW({ current: e.scroll.current, max: r, change: t });
        },
        rV = (e, t) => {
          let r = e.frame;
          return (
            !!r &&
            rU({ current: r.scroll.current, max: r.scroll.max, change: t })
          );
        },
        rj = (e, t) => {
          let r = e.frame;
          return r && rV(e, t)
            ? rW({ current: r.scroll.current, max: r.scroll.max, change: t })
            : null;
        };
      var rz = ({
          viewport: e,
          subject: t,
          center: r,
          dragStartTime: n,
          shouldUseTimeDampening: l,
          getAutoScrollerOptions: i,
        }) => {
          let a = rk({
            dragStartTime: n,
            container: e.frame,
            subject: t,
            center: r,
            shouldUseTimeDampening: l,
            getAutoScrollerOptions: i,
          });
          return a && rY(e, a) ? a : null;
        },
        rq = ({
          droppable: e,
          subject: t,
          center: r,
          dragStartTime: n,
          shouldUseTimeDampening: l,
          getAutoScrollerOptions: i,
        }) => {
          let a = e.frame;
          if (!a) return null;
          let o = rk({
            dragStartTime: n,
            container: a.pageMarginBox,
            subject: t,
            center: r,
            shouldUseTimeDampening: l,
            getAutoScrollerOptions: i,
          });
          return o && rV(e, o) ? o : null;
        },
        rZ = ({
          state: e,
          dragStartTime: t,
          shouldUseTimeDampening: r,
          scrollWindow: n,
          scrollDroppable: l,
          getAutoScrollerOptions: i,
        }) => {
          let a = e.current.page.borderBoxCenter,
            o = e.dimensions.draggables[e.critical.draggable.id].page.marginBox;
          if (e.isWindowScrollAllowed) {
            let l = rz({
              dragStartTime: t,
              viewport: e.viewport,
              subject: o,
              center: a,
              shouldUseTimeDampening: r,
              getAutoScrollerOptions: i,
            });
            if (l) {
              n(l);
              return;
            }
          }
          let d = rw({
            center: a,
            destination: e0(e.impact),
            droppables: e.dimensions.droppables,
          });
          if (!d) return;
          let s = rq({
            dragStartTime: t,
            droppable: d,
            subject: o,
            center: a,
            shouldUseTimeDampening: r,
            getAutoScrollerOptions: i,
          });
          s && l(d.descriptor.id, s);
        },
        rJ = ({
          scrollWindow: e,
          scrollDroppable: t,
          getAutoScrollerOptions: r = () => rO,
        }) => {
          let n = (0, u.Z)(e),
            l = (0, u.Z)(t),
            i = null,
            a = e => {
              i || y(!1);
              let { shouldUseTimeDampening: t, dragStartTime: a } = i;
              rZ({
                state: e,
                scrollWindow: n,
                scrollDroppable: l,
                dragStartTime: a,
                shouldUseTimeDampening: t,
                getAutoScrollerOptions: r,
              });
            };
          return {
            start: e => {
              tc(), i && y(!1);
              let t = Date.now(),
                n = !1,
                l = () => {
                  n = !0;
                };
              rZ({
                state: e,
                dragStartTime: 0,
                shouldUseTimeDampening: !1,
                scrollWindow: l,
                scrollDroppable: l,
                getAutoScrollerOptions: r,
              }),
                (i = { dragStartTime: t, shouldUseTimeDampening: n }),
                tp(),
                n && a(e);
            },
            stop: () => {
              i && (n.cancel(), l.cancel(), (i = null));
            },
            scroll: a,
          };
        },
        rX = ({ move: e, scrollDroppable: t, scrollWindow: r }) => {
          let n = (t, r) => {
              e({ client: R(t.current.client.selection, r) });
            },
            l = (e, r) => {
              if (!rV(e, r)) return r;
              let n = rj(e, r);
              if (!n) return t(e.descriptor.id, r), null;
              let l = P(r, n);
              return t(e.descriptor.id, l), P(r, l);
            },
            i = (e, t, n) => {
              if (!e || !rY(t, n)) return n;
              let l = rH(t, n);
              if (!l) return r(n), null;
              let i = P(n, l);
              return r(i), P(n, i);
            };
          return e => {
            let t = e.scrollJumpRequest;
            if (!t) return;
            let r = e0(e.impact);
            r || y(!1);
            let a = l(e.dimensions.droppables[r], t);
            if (!a) return;
            let o = e.viewport,
              d = i(e.isWindowScrollAllowed, o, a);
            d && n(e, d);
          };
        },
        rK = ({
          scrollDroppable: e,
          scrollWindow: t,
          move: r,
          getAutoScrollerOptions: n,
        }) => {
          let l = rJ({
              scrollWindow: t,
              scrollDroppable: e,
              getAutoScrollerOptions: n,
            }),
            i = rX({ move: r, scrollWindow: t, scrollDroppable: e });
          return {
            scroll: e => {
              if (!n().disabled && 'DRAGGING' === e.phase) {
                if ('FLUID' === e.movementMode) {
                  l.scroll(e);
                  return;
                }
                e.scrollJumpRequest && i(e);
              }
            },
            start: l.start,
            stop: l.stop,
          };
        };
      let rQ = 'data-rfd',
        r0 = (() => {
          let e = `${rQ}-drag-handle`;
          return {
            base: e,
            draggableId: `${e}-draggable-id`,
            contextId: `${e}-context-id`,
          };
        })(),
        r1 = (() => {
          let e = `${rQ}-draggable`;
          return { base: e, contextId: `${e}-context-id`, id: `${e}-id` };
        })(),
        r4 = (() => {
          let e = `${rQ}-droppable`;
          return { base: e, contextId: `${e}-context-id`, id: `${e}-id` };
        })(),
        r3 = { contextId: `${rQ}-scroll-container-context-id` },
        r2 = e => t => `[${t}="${e}"]`,
        r5 = (e, t) =>
          e
            .map(e => {
              let r = e.styles[t];
              return r ? `${e.selector} { ${r} }` : '';
            })
            .join(' ');
      var r7 = e => {
        let t = r2(e),
          r = (() => {
            let e = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
            return {
              selector: t(r0.contextId),
              styles: {
                always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
                resting: e,
                dragging: 'pointer-events: none;',
                dropAnimating: e,
              },
            };
          })(),
          n = [
            (() => {
              let e = `
      transition: ${tZ.outOfTheWay};
    `;
              return {
                selector: t(r1.contextId),
                styles: { dragging: e, dropAnimating: e, userCancel: e },
              };
            })(),
            r,
            {
              selector: t(r4.contextId),
              styles: { always: 'overflow-anchor: none;' },
            },
            {
              selector: 'body',
              styles: {
                dragging: `
        cursor: grabbing;
        cursor: -webkit-grabbing;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        overflow-anchor: none;
      `,
              },
            },
          ];
        return {
          always: r5(n, 'always'),
          resting: r5(n, 'resting'),
          dragging: r5(n, 'dragging'),
          dropAnimating: r5(n, 'dropAnimating'),
          userCancel: r5(n, 'userCancel'),
        };
      };
      let r6 =
          'undefined' != typeof window &&
          void 0 !== window.document &&
          void 0 !== window.document.createElement
            ? n.useLayoutEffect
            : n.useEffect,
        r8 = () => {
          let e = document.querySelector('head');
          return e || y(!1), e;
        },
        r9 = e => {
          let t = document.createElement('style');
          return e && t.setAttribute('nonce', e), (t.type = 'text/css'), t;
        };
      function ne(e, t) {
        return Array.from(e.querySelectorAll(t));
      }
      var nt = e =>
        e && e.ownerDocument && e.ownerDocument.defaultView
          ? e.ownerDocument.defaultView
          : window;
      function nr(e) {
        return e instanceof nt(e).HTMLElement;
      }
      function nn(e, t) {
        let r = `[${r0.contextId}="${e}"]`,
          n = ne(document, r);
        if (!n.length) return null;
        let l = n.find(e => e.getAttribute(r0.draggableId) === t);
        return l && nr(l) ? l : null;
      }
      function nl() {
        let e = { draggables: {}, droppables: {} },
          t = [];
        function r(e) {
          t.length && t.forEach(t => t(e));
        }
        function n(t) {
          return e.draggables[t] || null;
        }
        function l(t) {
          return e.droppables[t] || null;
        }
        return {
          draggable: {
            register: t => {
              (e.draggables[t.descriptor.id] = t),
                r({ type: 'ADDITION', value: t });
            },
            update: (t, r) => {
              let n = e.draggables[r.descriptor.id];
              n &&
                n.uniqueId === t.uniqueId &&
                (delete e.draggables[r.descriptor.id],
                (e.draggables[t.descriptor.id] = t));
            },
            unregister: t => {
              let l = t.descriptor.id,
                i = n(l);
              i &&
                t.uniqueId === i.uniqueId &&
                (delete e.draggables[l],
                e.droppables[t.descriptor.droppableId] &&
                  r({ type: 'REMOVAL', value: t }));
            },
            getById: function (e) {
              let t = n(e);
              return t || y(!1), t;
            },
            findById: n,
            exists: e => !!n(e),
            getAllByType: t =>
              Object.values(e.draggables).filter(e => e.descriptor.type === t),
          },
          droppable: {
            register: t => {
              e.droppables[t.descriptor.id] = t;
            },
            unregister: t => {
              let r = l(t.descriptor.id);
              r &&
                t.uniqueId === r.uniqueId &&
                delete e.droppables[t.descriptor.id];
            },
            getById: function (e) {
              let t = l(e);
              return t || y(!1), t;
            },
            findById: l,
            exists: e => !!l(e),
            getAllByType: t =>
              Object.values(e.droppables).filter(e => e.descriptor.type === t),
          },
          subscribe: function (e) {
            return (
              t.push(e),
              function () {
                let r = t.indexOf(e);
                -1 !== r && t.splice(r, 1);
              }
            );
          },
          clean: function () {
            (e.draggables = {}), (e.droppables = {}), (t.length = 0);
          },
        };
      }
      var ni = n.createContext(null),
        na = () => {
          let e = document.body;
          return e || y(!1), e;
        },
        no = {
          position: 'absolute',
          width: '1px',
          height: '1px',
          margin: '-1px',
          border: '0',
          padding: '0',
          overflow: 'hidden',
          clip: 'rect(0 0 0 0)',
          'clip-path': 'inset(100%)',
        };
      let nd = e => `rfd-announcement-${e}`,
        ns = { separator: '::' };
      var nu = function (e, t = ns) {
          let r = n.useId();
          return (0, o.Ye)(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
        },
        nc = n.createContext(null);
      let np = /(\d+)\.(\d+)\.(\d+)/,
        nf = e => {
          let t = np.exec(e);
          return (
            null != t || y(!1),
            {
              major: Number(t[1]),
              minor: Number(t[2]),
              patch: Number(t[3]),
              raw: e,
            }
          );
        },
        ng = (e, t) =>
          t.major > e.major ||
          (!(t.major < e.major) &&
            (t.minor > e.minor ||
              (!(t.minor < e.minor) && t.patch >= e.patch)));
      var nm = (e, t) => {
          if (ng(nf(e), nf(t))) return;
        },
        nb = e => {
          let t = e.doctype;
          t && (t.name.toLowerCase(), t.publicId);
        };
      function nh(e, t) {}
      function nI(e) {
        let t = (0, n.useRef)(e);
        return (
          (0, n.useEffect)(() => {
            t.current = e;
          }),
          t
        );
      }
      function ny(e) {
        return (
          'IDLE' !== e.phase && 'DROP_ANIMATING' !== e.phase && e.isDragging
        );
      }
      let nv = { 13: !0, 9: !0 };
      var nx = e => {
        nv[e.keyCode] && e.preventDefault();
      };
      let nD = (() => {
          let e = 'visibilitychange';
          return 'undefined' == typeof document
            ? e
            : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find(
                e => `on${e}` in document
              ) || e;
        })(),
        nE = { type: 'IDLE' };
      function nA() {}
      let nN = { 34: !0, 33: !0, 36: !0, 35: !0 },
        nC = { type: 'IDLE' },
        nR = [
          'input',
          'button',
          'textarea',
          'select',
          'option',
          'optgroup',
          'video',
          'audio',
        ];
      var nP = e => (0, d.Dz)(e.getBoundingClientRect()).center;
      let nw = (() => {
        let e = 'matches';
        return 'undefined' == typeof document
          ? e
          : [e, 'msMatchesSelector', 'webkitMatchesSelector'].find(
              e => e in Element.prototype
            ) || e;
      })();
      function nO(e) {
        e.preventDefault();
      }
      function nS({ expected: e, phase: t, isLockActive: r, shouldWarn: n }) {
        return !!r() && e === t;
      }
      function nB({ lockAPI: e, store: t, registry: r, draggableId: n }) {
        if (e.isClaimed()) return !1;
        let l = r.draggable.findById(n);
        return !!(l && l.options.isEnabled && rN(t.getState(), n));
      }
      let nG = [
          function (e) {
            let t = (0, n.useRef)(nE),
              r = (0, n.useRef)(b),
              l = (0, o.Ye)(
                () => ({
                  eventName: 'mousedown',
                  fn: function (t) {
                    if (
                      t.defaultPrevented ||
                      0 !== t.button ||
                      t.ctrlKey ||
                      t.metaKey ||
                      t.shiftKey ||
                      t.altKey
                    )
                      return;
                    let n = e.findClosestDraggableId(t);
                    if (!n) return;
                    let l = e.tryGetLock(n, d, { sourceEvent: t });
                    if (!l) return;
                    t.preventDefault();
                    let i = { x: t.clientX, y: t.clientY };
                    r.current(), c(l, i);
                  },
                }),
                [e]
              ),
              i = (0, o.Ye)(
                () => ({
                  eventName: 'webkitmouseforcewillbegin',
                  fn: t => {
                    if (t.defaultPrevented) return;
                    let r = e.findClosestDraggableId(t);
                    if (!r) return;
                    let n = e.findOptionsForDraggable(r);
                    n &&
                      !n.shouldRespectForcePress &&
                      e.canGetLock(r) &&
                      t.preventDefault();
                  },
                }),
                [e]
              ),
              a = (0, o.I4)(
                function () {
                  r.current = h(window, [i, l], { passive: !1, capture: !0 });
                },
                [i, l]
              ),
              d = (0, o.I4)(() => {
                'IDLE' !== t.current.type &&
                  ((t.current = nE), r.current(), a());
              }, [a]),
              s = (0, o.I4)(() => {
                let e = t.current;
                d(),
                  'DRAGGING' === e.type &&
                    e.actions.cancel({ shouldBlockNextClick: !0 }),
                  'PENDING' === e.type && e.actions.abort();
              }, [d]),
              u = (0, o.I4)(
                function () {
                  let e = (function ({
                    cancel: e,
                    completed: t,
                    getPhase: r,
                    setPhase: n,
                  }) {
                    return [
                      {
                        eventName: 'mousemove',
                        fn: e => {
                          var t;
                          let { button: l, clientX: i, clientY: a } = e;
                          if (0 !== l) return;
                          let o = { x: i, y: a },
                            d = r();
                          if ('DRAGGING' === d.type) {
                            e.preventDefault(), d.actions.move(o);
                            return;
                          }
                          'PENDING' !== d.type && y(!1),
                            (t = d.point),
                            (Math.abs(o.x - t.x) >= 5 ||
                              Math.abs(o.y - t.y) >= 5) &&
                              (e.preventDefault(),
                              n({
                                type: 'DRAGGING',
                                actions: d.actions.fluidLift(o),
                              }));
                        },
                      },
                      {
                        eventName: 'mouseup',
                        fn: n => {
                          let l = r();
                          if ('DRAGGING' !== l.type) {
                            e();
                            return;
                          }
                          n.preventDefault(),
                            l.actions.drop({ shouldBlockNextClick: !0 }),
                            t();
                        },
                      },
                      {
                        eventName: 'mousedown',
                        fn: t => {
                          'DRAGGING' === r().type && t.preventDefault(), e();
                        },
                      },
                      {
                        eventName: 'keydown',
                        fn: t => {
                          if ('PENDING' === r().type) {
                            e();
                            return;
                          }
                          if (27 === t.keyCode) {
                            t.preventDefault(), e();
                            return;
                          }
                          nx(t);
                        },
                      },
                      { eventName: 'resize', fn: e },
                      {
                        eventName: 'scroll',
                        options: { passive: !0, capture: !1 },
                        fn: () => {
                          'PENDING' === r().type && e();
                        },
                      },
                      {
                        eventName: 'webkitmouseforcedown',
                        fn: t => {
                          let n = r();
                          if (
                            ('IDLE' !== n.type || y(!1),
                            n.actions.shouldRespectForcePress())
                          ) {
                            e();
                            return;
                          }
                          t.preventDefault();
                        },
                      },
                      { eventName: nD, fn: e },
                    ];
                  })({
                    cancel: s,
                    completed: d,
                    getPhase: () => t.current,
                    setPhase: e => {
                      t.current = e;
                    },
                  });
                  r.current = h(window, e, { capture: !0, passive: !1 });
                },
                [s, d]
              ),
              c = (0, o.I4)(
                function (e, r) {
                  'IDLE' !== t.current.type && y(!1),
                    (t.current = { type: 'PENDING', point: r, actions: e }),
                    u();
                },
                [u]
              );
            r6(
              function () {
                return (
                  a(),
                  function () {
                    r.current();
                  }
                );
              },
              [a]
            );
          },
          function (e) {
            let t = (0, n.useRef)(nA),
              r = (0, o.Ye)(
                () => ({
                  eventName: 'keydown',
                  fn: function (r) {
                    if (r.defaultPrevented || 32 !== r.keyCode) return;
                    let n = e.findClosestDraggableId(r);
                    if (!n) return;
                    let i = e.tryGetLock(n, d, { sourceEvent: r });
                    if (!i) return;
                    r.preventDefault();
                    let a = !0,
                      o = i.snapLift();
                    function d() {
                      a || y(!1), (a = !1), t.current(), l();
                    }
                    t.current(),
                      (t.current = h(
                        window,
                        (function (e, t) {
                          function r() {
                            t(), e.cancel();
                          }
                          return [
                            {
                              eventName: 'keydown',
                              fn: n => {
                                if (27 === n.keyCode) {
                                  n.preventDefault(), r();
                                  return;
                                }
                                if (32 === n.keyCode) {
                                  n.preventDefault(), t(), e.drop();
                                  return;
                                }
                                if (40 === n.keyCode) {
                                  n.preventDefault(), e.moveDown();
                                  return;
                                }
                                if (38 === n.keyCode) {
                                  n.preventDefault(), e.moveUp();
                                  return;
                                }
                                if (39 === n.keyCode) {
                                  n.preventDefault(), e.moveRight();
                                  return;
                                }
                                if (37 === n.keyCode) {
                                  n.preventDefault(), e.moveLeft();
                                  return;
                                }
                                if (nN[n.keyCode]) {
                                  n.preventDefault();
                                  return;
                                }
                                nx(n);
                              },
                            },
                            { eventName: 'mousedown', fn: r },
                            { eventName: 'mouseup', fn: r },
                            { eventName: 'click', fn: r },
                            { eventName: 'touchstart', fn: r },
                            { eventName: 'resize', fn: r },
                            {
                              eventName: 'wheel',
                              fn: r,
                              options: { passive: !0 },
                            },
                            { eventName: nD, fn: r },
                          ];
                        })(o, d),
                        { capture: !0, passive: !1 }
                      ));
                  },
                }),
                [e]
              ),
              l = (0, o.I4)(
                function () {
                  t.current = h(window, [r], { passive: !1, capture: !0 });
                },
                [r]
              );
            r6(
              function () {
                return (
                  l(),
                  function () {
                    t.current();
                  }
                );
              },
              [l]
            );
          },
          function (e) {
            let t = (0, n.useRef)(nC),
              r = (0, n.useRef)(b),
              l = (0, o.I4)(function () {
                return t.current;
              }, []),
              i = (0, o.I4)(function (e) {
                t.current = e;
              }, []),
              a = (0, o.Ye)(
                () => ({
                  eventName: 'touchstart',
                  fn: function (t) {
                    if (t.defaultPrevented) return;
                    let n = e.findClosestDraggableId(t);
                    if (!n) return;
                    let l = e.tryGetLock(n, s, { sourceEvent: t });
                    if (!l) return;
                    let { clientX: i, clientY: a } = t.touches[0];
                    r.current(), f(l, { x: i, y: a });
                  },
                }),
                [e]
              ),
              d = (0, o.I4)(
                function () {
                  r.current = h(window, [a], { capture: !0, passive: !1 });
                },
                [a]
              ),
              s = (0, o.I4)(() => {
                let e = t.current;
                'IDLE' !== e.type &&
                  ('PENDING' === e.type && clearTimeout(e.longPressTimerId),
                  i(nC),
                  r.current(),
                  d());
              }, [d, i]),
              u = (0, o.I4)(() => {
                let e = t.current;
                s(),
                  'DRAGGING' === e.type &&
                    e.actions.cancel({ shouldBlockNextClick: !0 }),
                  'PENDING' === e.type && e.actions.abort();
              }, [s]),
              c = (0, o.I4)(
                function () {
                  let e = { capture: !0, passive: !1 },
                    t = { cancel: u, completed: s, getPhase: l },
                    n = h(
                      window,
                      (function ({ cancel: e, completed: t, getPhase: r }) {
                        return [
                          {
                            eventName: 'touchmove',
                            options: { capture: !1 },
                            fn: t => {
                              let n = r();
                              if ('DRAGGING' !== n.type) {
                                e();
                                return;
                              }
                              n.hasMoved = !0;
                              let { clientX: l, clientY: i } = t.touches[0];
                              t.preventDefault(),
                                n.actions.move({ x: l, y: i });
                            },
                          },
                          {
                            eventName: 'touchend',
                            fn: n => {
                              let l = r();
                              if ('DRAGGING' !== l.type) {
                                e();
                                return;
                              }
                              n.preventDefault(),
                                l.actions.drop({ shouldBlockNextClick: !0 }),
                                t();
                            },
                          },
                          {
                            eventName: 'touchcancel',
                            fn: t => {
                              if ('DRAGGING' !== r().type) {
                                e();
                                return;
                              }
                              t.preventDefault(), e();
                            },
                          },
                          {
                            eventName: 'touchforcechange',
                            fn: t => {
                              let n = r();
                              'IDLE' !== n.type || y(!1);
                              let l = t.touches[0];
                              if (!l || !(l.force >= 0.15)) return;
                              let i = n.actions.shouldRespectForcePress();
                              if ('PENDING' === n.type) {
                                i && e();
                                return;
                              }
                              if (i) {
                                if (n.hasMoved) {
                                  t.preventDefault();
                                  return;
                                }
                                e();
                                return;
                              }
                              t.preventDefault();
                            },
                          },
                          { eventName: nD, fn: e },
                        ];
                      })(t),
                      e
                    ),
                    i = h(
                      window,
                      (function ({ cancel: e, getPhase: t }) {
                        return [
                          { eventName: 'orientationchange', fn: e },
                          { eventName: 'resize', fn: e },
                          {
                            eventName: 'contextmenu',
                            fn: e => {
                              e.preventDefault();
                            },
                          },
                          {
                            eventName: 'keydown',
                            fn: r => {
                              if ('DRAGGING' !== t().type) {
                                e();
                                return;
                              }
                              27 === r.keyCode && r.preventDefault(), e();
                            },
                          },
                          { eventName: nD, fn: e },
                        ];
                      })(t),
                      e
                    );
                  r.current = function () {
                    n(), i();
                  };
                },
                [u, l, s]
              ),
              p = (0, o.I4)(
                function () {
                  let e = l();
                  'PENDING' !== e.type && y(!1),
                    i({
                      type: 'DRAGGING',
                      actions: e.actions.fluidLift(e.point),
                      hasMoved: !1,
                    });
                },
                [l, i]
              ),
              f = (0, o.I4)(
                function (e, t) {
                  'IDLE' !== l().type && y(!1),
                    i({
                      type: 'PENDING',
                      point: t,
                      actions: e,
                      longPressTimerId: setTimeout(p, 120),
                    }),
                    c();
                },
                [c, l, i, p]
              );
            r6(
              function () {
                return (
                  d(),
                  function () {
                    r.current();
                    let e = l();
                    'PENDING' === e.type &&
                      (clearTimeout(e.longPressTimerId), i(nC));
                  }
                );
              },
              [l, d, i]
            ),
              r6(function () {
                return h(window, [
                  {
                    eventName: 'touchmove',
                    fn: () => {},
                    options: { capture: !1, passive: !1 },
                  },
                ]);
              }, []);
          },
        ],
        nL = e => ({
          onBeforeCapture: t => {
            let r = () => {
              e.onBeforeCapture && e.onBeforeCapture(t);
            };
            n.version.startsWith('16') || n.version.startsWith('17')
              ? r()
              : (0, l.flushSync)(r);
          },
          onBeforeDragStart: e.onBeforeDragStart,
          onDragStart: e.onDragStart,
          onDragEnd: e.onDragEnd,
          onDragUpdate: e.onDragUpdate,
        }),
        nT = e => ({
          ...rO,
          ...e.autoScrollerOptions,
          durationDampening: {
            ...rO.durationDampening,
            ...e.autoScrollerOptions,
          },
        });
      function n_(e) {
        return e.current || y(!1), e.current;
      }
      function nM(e) {
        let {
            contextId: t,
            setCallbacks: r,
            sensors: l,
            nonce: d,
            dragHandleUsageInstructions: p,
          } = e,
          f = (0, n.useRef)(null),
          g = nI(e),
          m = (0, o.I4)(() => nL(g.current), [g]),
          I = (0, o.I4)(() => nT(g.current), [g]),
          v = (function (e) {
            let t = (0, o.Ye)(() => nd(e), [e]),
              r = (0, n.useRef)(null);
            return (
              (0, n.useEffect)(
                function () {
                  let e = document.createElement('div');
                  return (
                    (r.current = e),
                    (e.id = t),
                    e.setAttribute('aria-live', 'assertive'),
                    e.setAttribute('aria-atomic', 'true'),
                    (0, c.Z)(e.style, no),
                    na().appendChild(e),
                    function () {
                      setTimeout(function () {
                        let t = na();
                        t.contains(e) && t.removeChild(e),
                          e === r.current && (r.current = null);
                      });
                    }
                  );
                },
                [t]
              ),
              (0, o.I4)(e => {
                let t = r.current;
                if (t) {
                  t.textContent = e;
                  return;
                }
              }, [])
            );
          })(t),
          x = (function ({ contextId: e, text: t }) {
            let r = nu('hidden-text', { separator: '-' }),
              l = (0, o.Ye)(
                () =>
                  (function ({ contextId: e, uniqueId: t }) {
                    return `rfd-hidden-text-${e}-${t}`;
                  })({ contextId: e, uniqueId: r }),
                [r, e]
              );
            return (
              (0, n.useEffect)(
                function () {
                  let e = document.createElement('div');
                  return (
                    (e.id = l),
                    (e.textContent = t),
                    (e.style.display = 'none'),
                    na().appendChild(e),
                    function () {
                      let t = na();
                      t.contains(e) && t.removeChild(e);
                    }
                  );
                },
                [l, t]
              ),
              l
            );
          })({ contextId: t, text: p }),
          D = (function (e, t) {
            let r = (0, o.Ye)(() => r7(e), [e]),
              l = (0, n.useRef)(null),
              i = (0, n.useRef)(null),
              a = (0, o.I4)(
                (0, s.Z)(e => {
                  let t = i.current;
                  t || y(!1), (t.textContent = e);
                }),
                []
              ),
              d = (0, o.I4)(e => {
                let t = l.current;
                t || y(!1), (t.textContent = e);
              }, []);
            r6(() => {
              (l.current || i.current) && y(!1);
              let n = r9(t),
                o = r9(t);
              return (
                (l.current = n),
                (i.current = o),
                n.setAttribute(`${rQ}-always`, e),
                o.setAttribute(`${rQ}-dynamic`, e),
                r8().appendChild(n),
                r8().appendChild(o),
                d(r.always),
                a(r.resting),
                () => {
                  let e = e => {
                    let t = e.current;
                    t || y(!1), r8().removeChild(t), (e.current = null);
                  };
                  e(l), e(i);
                }
              );
            }, [t, d, a, r.always, r.resting, e]);
            let u = (0, o.I4)(() => a(r.dragging), [a, r.dragging]),
              c = (0, o.I4)(
                e => {
                  if ('DROP' === e) {
                    a(r.dropAnimating);
                    return;
                  }
                  a(r.userCancel);
                },
                [a, r.dropAnimating, r.userCancel]
              ),
              p = (0, o.I4)(() => {
                i.current && a(r.resting);
              }, [a, r.resting]);
            return (0, o.Ye)(
              () => ({ dragging: u, dropping: c, resting: p }),
              [u, c, p]
            );
          })(t, d),
          E = (0, o.I4)(e => {
            n_(f).dispatch(e);
          }, []),
          A = (0, o.Ye)(
            () =>
              (0, i.DE)(
                {
                  publishWhileDragging: tC,
                  updateDroppableScroll: tP,
                  updateDroppableIsEnabled: tw,
                  updateDroppableIsCombineEnabled: tO,
                  collectionStarting: tR,
                },
                E
              ),
            [E]
          ),
          N = (function () {
            let e = (0, o.Ye)(nl, []);
            return (
              (0, n.useEffect)(
                () =>
                  function () {
                    n.version.startsWith('16') || n.version.startsWith('17')
                      ? requestAnimationFrame(e.clean)
                      : e.clean();
                  },
                [e]
              ),
              e
            );
          })(),
          C = (0, o.Ye)(() => rA(N, A), [N, A]),
          R = (0, o.Ye)(
            () =>
              rK({
                scrollWindow: rC,
                scrollDroppable: C.scrollDroppable,
                getAutoScrollerOptions: I,
                ...(0, i.DE)({ move: tS }, E),
              }),
            [C.scrollDroppable, E, I]
          ),
          P = (function (e) {
            let t = (0, n.useRef)({}),
              r = (0, n.useRef)(null),
              l = (0, n.useRef)(null),
              i = (0, n.useRef)(!1),
              a = (0, o.I4)(function (e, r) {
                let n = { id: e, focus: r };
                return (
                  (t.current[e] = n),
                  function () {
                    let r = t.current;
                    r[e] !== n && delete r[e];
                  }
                );
              }, []),
              d = (0, o.I4)(
                function (t) {
                  let r = nn(e, t);
                  r && r !== document.activeElement && r.focus();
                },
                [e]
              ),
              s = (0, o.I4)(function (e, t) {
                r.current === e && (r.current = t);
              }, []),
              u = (0, o.I4)(
                function () {
                  !l.current &&
                    i.current &&
                    (l.current = requestAnimationFrame(() => {
                      l.current = null;
                      let e = r.current;
                      e && d(e);
                    }));
                },
                [d]
              ),
              c = (0, o.I4)(function (e) {
                r.current = null;
                let t = document.activeElement;
                t && t.getAttribute(r0.draggableId) === e && (r.current = e);
              }, []);
            return (
              r6(
                () => (
                  (i.current = !0),
                  function () {
                    i.current = !1;
                    let e = l.current;
                    e && cancelAnimationFrame(e);
                  }
                ),
                []
              ),
              (0, o.Ye)(
                () => ({
                  register: a,
                  tryRecordFocus: c,
                  tryRestoreFocusRecorded: u,
                  tryShiftRecord: s,
                }),
                [a, c, u, s]
              )
            );
          })(t),
          w = (0, o.Ye)(
            () =>
              rb({
                announce: v,
                autoScroller: R,
                dimensionMarshal: C,
                focusMarshal: P,
                getResponders: m,
                styleMarshal: D,
              }),
            [v, R, C, P, m, D]
          );
        f.current = w;
        let O = (0, o.I4)(() => {
            let e = n_(f);
            'IDLE' !== e.getState().phase && e.dispatch(tM());
          }, []),
          S = (0, o.I4)(() => {
            let e = n_(f).getState();
            return (
              'DROP_ANIMATING' === e.phase ||
              ('IDLE' !== e.phase && e.isDragging)
            );
          }, []);
        r((0, o.Ye)(() => ({ isDragging: S, tryAbort: O }), [S, O]));
        let B = (0, o.I4)(e => rN(n_(f).getState(), e), []),
          G = (0, o.I4)(() => e3(n_(f).getState()), []),
          L = (0, o.Ye)(
            () => ({
              marshal: C,
              focus: P,
              contextId: t,
              canLift: B,
              isMovementAllowed: G,
              dragHandleUsageInstructionsId: x,
              registry: N,
            }),
            [t, C, x, P, B, G, N]
          );
        return (
          !(function ({
            contextId: e,
            store: t,
            registry: r,
            customSensors: l,
            enableDefaultSensors: i,
          }) {
            let a = [...(i ? nG : []), ...(l || [])],
              d = (0, n.useState)(() =>
                (function () {
                  let e = null;
                  function t() {
                    e || y(!1), (e = null);
                  }
                  return {
                    isClaimed: function () {
                      return !!e;
                    },
                    isActive: function (t) {
                      return t === e;
                    },
                    claim: function (t) {
                      e && y(!1);
                      let r = { abandon: t };
                      return (e = r), r;
                    },
                    release: t,
                    tryAbandon: function () {
                      e && (e.abandon(), t());
                    },
                  };
                })()
              )[0],
              s = (0, o.I4)(
                function (e, t) {
                  ny(e) && !ny(t) && d.tryAbandon();
                },
                [d]
              );
            r6(
              function () {
                let e = t.getState();
                return t.subscribe(() => {
                  let r = t.getState();
                  s(e, r), (e = r);
                });
              },
              [d, t, s]
            ),
              r6(() => d.tryAbandon, [d.tryAbandon]);
            let c = (0, o.I4)(
                e => nB({ lockAPI: d, registry: r, store: t, draggableId: e }),
                [d, r, t]
              ),
              p = (0, o.I4)(
                (n, l, i) =>
                  (function ({
                    lockAPI: e,
                    contextId: t,
                    store: r,
                    registry: n,
                    draggableId: l,
                    forceSensorStop: i,
                    sourceEvent: a,
                  }) {
                    if (
                      !nB({ lockAPI: e, store: r, registry: n, draggableId: l })
                    )
                      return null;
                    let o = n.draggable.getById(l),
                      d = (function (e, t) {
                        let r = `[${r1.contextId}="${e}"]`,
                          n = ne(document, r).find(
                            e => e.getAttribute(r1.id) === t
                          );
                        return n && nr(n) ? n : null;
                      })(t, o.descriptor.id);
                    if (
                      !d ||
                      (a &&
                        !o.options.canDragInteractiveElements &&
                        (function (e, t) {
                          let r = t.target;
                          return (
                            !!nr(r) &&
                            (function e(t, r) {
                              if (null == r) return !1;
                              if (nR.includes(r.tagName.toLowerCase()))
                                return !0;
                              let n = r.getAttribute('contenteditable');
                              return (
                                'true' === n ||
                                '' === n ||
                                (r !== t && e(t, r.parentElement))
                              );
                            })(e, r)
                          );
                        })(d, a))
                    )
                      return null;
                    let s = e.claim(i || b),
                      c = 'PRE_DRAG';
                    function p() {
                      return o.options.shouldRespectForcePress;
                    }
                    function f() {
                      return e.isActive(s);
                    }
                    let g = function (e, t) {
                      nS({
                        expected: e,
                        phase: c,
                        isLockActive: f,
                        shouldWarn: !0,
                      }) && r.dispatch(t());
                    }.bind(null, 'DRAGGING');
                    function m(t) {
                      function n() {
                        e.release(), (c = 'COMPLETED');
                      }
                      function l(e, l = { shouldBlockNextClick: !1 }) {
                        t.cleanup(),
                          l.shouldBlockNextClick &&
                            setTimeout(
                              h(window, [
                                {
                                  eventName: 'click',
                                  fn: nO,
                                  options: {
                                    once: !0,
                                    passive: !1,
                                    capture: !0,
                                  },
                                },
                              ])
                            ),
                          n(),
                          r.dispatch(t$({ reason: e }));
                      }
                      return (
                        'PRE_DRAG' !== c && (n(), y(!1)),
                        r.dispatch(tA(t.liftActionArgs)),
                        (c = 'DRAGGING'),
                        {
                          isActive: () =>
                            nS({
                              expected: 'DRAGGING',
                              phase: c,
                              isLockActive: f,
                              shouldWarn: !1,
                            }),
                          shouldRespectForcePress: p,
                          drop: e => l('DROP', e),
                          cancel: e => l('CANCEL', e),
                          ...t.actions,
                        }
                      );
                    }
                    return {
                      isActive: () =>
                        nS({
                          expected: 'PRE_DRAG',
                          phase: c,
                          isLockActive: f,
                          shouldWarn: !1,
                        }),
                      shouldRespectForcePress: p,
                      fluidLift: function (e) {
                        let t = (0, u.Z)(e => {
                          g(() => tS({ client: e }));
                        });
                        return {
                          ...m({
                            liftActionArgs: {
                              id: l,
                              clientSelection: e,
                              movementMode: 'FLUID',
                            },
                            cleanup: () => t.cancel(),
                            actions: { move: t },
                          }),
                          move: t,
                        };
                      },
                      snapLift: function () {
                        return m({
                          liftActionArgs: {
                            id: l,
                            clientSelection: nP(d),
                            movementMode: 'SNAP',
                          },
                          cleanup: b,
                          actions: {
                            moveUp: () => g(tG),
                            moveRight: () => g(tT),
                            moveDown: () => g(tL),
                            moveLeft: () => g(t_),
                          },
                        });
                      },
                      abort: function () {
                        nS({
                          expected: 'PRE_DRAG',
                          phase: c,
                          isLockActive: f,
                          shouldWarn: !0,
                        }) && e.release();
                      },
                    };
                  })({
                    lockAPI: d,
                    registry: r,
                    contextId: e,
                    store: t,
                    draggableId: n,
                    forceSensorStop: l || null,
                    sourceEvent: i && i.sourceEvent ? i.sourceEvent : null,
                  }),
                [e, d, r, t]
              ),
              f = (0, o.I4)(
                t =>
                  (function (e, t) {
                    let r = (function (e, t) {
                      let r = t.target;
                      if (!(r instanceof nt(r).Element)) return null;
                      let n = `[${r0.contextId}="${e}"]`,
                        l = r.closest
                          ? r.closest(n)
                          : (function e(t, r) {
                              return null == t
                                ? null
                                : t[nw](r)
                                  ? t
                                  : e(t.parentElement, r);
                            })(r, n);
                      return l && nr(l) ? l : null;
                    })(e, t);
                    return r ? r.getAttribute(r0.draggableId) : null;
                  })(e, t),
                [e]
              ),
              g = (0, o.I4)(
                e => {
                  let t = r.draggable.findById(e);
                  return t ? t.options : null;
                },
                [r.draggable]
              ),
              m = (0, o.I4)(
                function () {
                  d.isClaimed() &&
                    (d.tryAbandon(),
                    'IDLE' !== t.getState().phase && t.dispatch(tM()));
                },
                [d, t]
              ),
              I = (0, o.I4)(() => d.isClaimed(), [d]),
              v = (0, o.Ye)(
                () => ({
                  canGetLock: c,
                  tryGetLock: p,
                  findClosestDraggableId: f,
                  findOptionsForDraggable: g,
                  tryReleaseLock: m,
                  isLockClaimed: I,
                }),
                [c, p, f, g, m, I]
              );
            for (let e = 0; e < a.length; e++) a[e](v);
          })({
            contextId: t,
            store: w,
            registry: N,
            customSensors: l || null,
            enableDefaultSensors: !1 !== e.enableDefaultSensors,
          }),
          (0, n.useEffect)(() => O, [O]),
          n.createElement(
            nc.Provider,
            { value: L },
            n.createElement(a.zt, { context: ni, store: w }, e.children)
          )
        );
      }
      function nF(e) {
        let t = n.useId(),
          r = e.dragHandleUsageInstructions || N.dragHandleUsageInstructions;
        return n.createElement(v, null, l =>
          n.createElement(
            nM,
            {
              nonce: e.nonce,
              contextId: t,
              setCallbacks: l,
              dragHandleUsageInstructions: r,
              enableDefaultSensors: e.enableDefaultSensors,
              sensors: e.sensors,
              onBeforeCapture: e.onBeforeCapture,
              onBeforeDragStart: e.onBeforeDragStart,
              onDragStart: e.onDragStart,
              onDragUpdate: e.onDragUpdate,
              onDragEnd: e.onDragEnd,
              autoScrollerOptions: e.autoScrollerOptions,
            },
            e.children
          )
        );
      }
      let nk = { dragging: 5e3, dropAnimating: 4500 },
        n$ = (e, t) => (t ? tZ.drop(t.duration) : e ? tZ.snap : tZ.fluid),
        nW = (e, t) => {
          if (e) return t ? tj.opacity.drop : tj.opacity.combining;
        },
        nU = e =>
          null != e.forceShouldAnimate
            ? e.forceShouldAnimate
            : 'SNAP' === e.mode;
      var nY = n.createContext(null);
      function nH(e) {
        (e && nr(e)) || y(!1);
      }
      function nV(e) {
        let t = (0, n.useContext)(e);
        return t || y(!1), t;
      }
      function nj(e) {
        e.preventDefault();
      }
      var nz = (e, t) => e === t,
        nq = e => {
          let { combine: t, destination: r } = e;
          return r ? r.droppableId : t ? t.droppableId : null;
        };
      let nZ = e => (e.combine ? e.combine.draggableId : null),
        nJ = e =>
          e.at && 'COMBINE' === e.at.type ? e.at.combine.draggableId : null;
      function nX(e = null) {
        return {
          isDragging: !1,
          isDropAnimating: !1,
          isClone: !1,
          dropAnimation: null,
          mode: null,
          draggingOver: null,
          combineTargetFor: e,
          combineWith: null,
        };
      }
      let nK = {
          mapped: {
            type: 'SECONDARY',
            offset: C,
            combineTargetFor: null,
            shouldAnimateDisplacement: !0,
            snapshot: nX(null),
          },
        },
        nQ = (0, a.$j)(
          () => {
            let e = (function () {
                let e = (0, s.Z)((e, t) => ({ x: e, y: t })),
                  t = (0, s.Z)((e, t, r = null, n = null, l = null) => ({
                    isDragging: !0,
                    isClone: t,
                    isDropAnimating: !!l,
                    dropAnimation: l,
                    mode: e,
                    draggingOver: r,
                    combineWith: n,
                    combineTargetFor: null,
                  })),
                  r = (0, s.Z)((e, r, n, l, i = null, a = null, o = null) => ({
                    mapped: {
                      type: 'DRAGGING',
                      dropping: null,
                      draggingOver: i,
                      combineWith: a,
                      mode: r,
                      offset: e,
                      dimension: n,
                      forceShouldAnimate: o,
                      snapshot: t(r, l, i, a, null),
                    },
                  }));
                return (n, l) => {
                  if (ny(n)) {
                    if (n.critical.draggable.id !== l.draggableId) return null;
                    let t = n.current.client.offset,
                      i = n.dimensions.draggables[l.draggableId],
                      a = e0(n.impact),
                      o = nJ(n.impact),
                      d = n.forceShouldAnimate;
                    return r(
                      e(t.x, t.y),
                      n.movementMode,
                      i,
                      l.isClone,
                      a,
                      o,
                      d
                    );
                  }
                  if ('DROP_ANIMATING' === n.phase) {
                    let e = n.completed;
                    if (e.result.draggableId !== l.draggableId) return null;
                    let r = l.isClone,
                      i = n.dimensions.draggables[l.draggableId],
                      a = e.result,
                      o = a.mode,
                      d = nq(a),
                      s = nZ(a),
                      u = {
                        duration: n.dropDuration,
                        curve: tV.drop,
                        moveTo: n.newHomeClientOffset,
                        opacity: s ? tj.opacity.drop : null,
                        scale: s ? tj.scale.drop : null,
                      };
                    return {
                      mapped: {
                        type: 'DRAGGING',
                        offset: n.newHomeClientOffset,
                        dimension: i,
                        dropping: u,
                        draggingOver: d,
                        combineWith: s,
                        mode: o,
                        forceShouldAnimate: null,
                        snapshot: t(o, r, d, s, u),
                      },
                    };
                  }
                  return null;
                };
              })(),
              t = (function () {
                let e = (0, s.Z)((e, t) => ({ x: e, y: t })),
                  t = (0, s.Z)(nX),
                  r = (0, s.Z)((e, r = null, n) => ({
                    mapped: {
                      type: 'SECONDARY',
                      offset: e,
                      combineTargetFor: r,
                      shouldAnimateDisplacement: n,
                      snapshot: t(r),
                    },
                  })),
                  n = e => (e ? r(C, e, !0) : null),
                  l = (t, l, i, a) => {
                    let o = i.displaced.visible[t],
                      d = !!(a.inVirtualList && a.effected[t]),
                      s = Z(i),
                      u = s && s.draggableId === t ? l : null;
                    if (!o) {
                      if (!d) return n(u);
                      if (i.displaced.invisible[t]) return null;
                      let l = O(a.displacedBy.point);
                      return r(e(l.x, l.y), u, !0);
                    }
                    if (d) return n(u);
                    let c = i.displacedBy.point;
                    return r(e(c.x, c.y), u, o.shouldAnimate);
                  };
                return (e, t) => {
                  if (ny(e))
                    return e.critical.draggable.id === t.draggableId
                      ? null
                      : l(
                          t.draggableId,
                          e.critical.draggable.id,
                          e.impact,
                          e.afterCritical
                        );
                  if ('DROP_ANIMATING' === e.phase) {
                    let r = e.completed;
                    return r.result.draggableId === t.draggableId
                      ? null
                      : l(
                          t.draggableId,
                          r.result.draggableId,
                          r.impact,
                          r.afterCritical
                        );
                  }
                  return null;
                };
              })();
            return (r, n) => e(r, n) || t(r, n) || nK;
          },
          { dropAnimationFinished: tU },
          null,
          { context: ni, areStatePropsEqual: nz }
        )(e => {
          let t = (0, n.useRef)(null),
            r = (0, o.I4)((e = null) => {
              t.current = e;
            }, []),
            i = (0, o.I4)(() => t.current, []),
            {
              contextId: a,
              dragHandleUsageInstructionsId: s,
              registry: u,
            } = nV(nc),
            { type: c, droppableId: p } = nV(nY),
            f = (0, o.Ye)(
              () => ({
                id: e.draggableId,
                index: e.index,
                type: c,
                droppableId: p,
              }),
              [e.draggableId, e.index, c, p]
            ),
            {
              children: g,
              draggableId: m,
              isEnabled: b,
              shouldRespectForcePress: h,
              canDragInteractiveElements: I,
              isClone: v,
              mapped: x,
              dropAnimationFinished: D,
            } = e;
          () => {
            let t = e.draggableId;
            t || y(!1),
              'string' != typeof t && y(!1),
              Number.isInteger(e.index) || y(!1),
              'DRAGGING' !== e.mapped.type &&
                (nH(i()), e.isEnabled && (nn(a, t) || y(!1)));
          },
            v ||
              (function (e) {
                let t = nu('draggable'),
                  {
                    descriptor: r,
                    registry: l,
                    getDraggableRef: i,
                    canDragInteractiveElements: a,
                    shouldRespectForcePress: s,
                    isEnabled: u,
                  } = e,
                  c = (0, o.Ye)(
                    () => ({
                      canDragInteractiveElements: a,
                      shouldRespectForcePress: s,
                      isEnabled: u,
                    }),
                    [a, u, s]
                  ),
                  p = (0, o.I4)(
                    e => {
                      let t = i();
                      return (
                        t || y(!1),
                        (function (e, t, r = C) {
                          let n = window.getComputedStyle(t),
                            l = t.getBoundingClientRect(),
                            i = (0, d.Oq)(l, n),
                            a = (0, d.oc)(i, r);
                          return {
                            descriptor: e,
                            placeholder: {
                              client: i,
                              tagName: t.tagName.toLowerCase(),
                              display: n.display,
                            },
                            displaceBy: {
                              x: i.marginBox.width,
                              y: i.marginBox.height,
                            },
                            client: i,
                            page: a,
                          };
                        })(r, t, e)
                      );
                    },
                    [r, i]
                  ),
                  f = (0, o.Ye)(
                    () => ({
                      uniqueId: t,
                      descriptor: r,
                      options: c,
                      getDimension: p,
                    }),
                    [r, p, c, t]
                  ),
                  g = (0, n.useRef)(f),
                  m = (0, n.useRef)(!0);
                r6(
                  () => (
                    l.draggable.register(g.current),
                    () => l.draggable.unregister(g.current)
                  ),
                  [l.draggable]
                ),
                  r6(() => {
                    if (m.current) {
                      m.current = !1;
                      return;
                    }
                    let e = g.current;
                    (g.current = f), l.draggable.update(f, e);
                  }, [f, l.draggable]);
              })(
                (0, o.Ye)(
                  () => ({
                    descriptor: f,
                    registry: u,
                    getDraggableRef: i,
                    canDragInteractiveElements: I,
                    shouldRespectForcePress: h,
                    isEnabled: b,
                  }),
                  [f, u, i, I, h, b]
                )
              );
          let E = (0, o.Ye)(
              () =>
                b
                  ? {
                      tabIndex: 0,
                      role: 'button',
                      'aria-describedby': s,
                      'data-rfd-drag-handle-draggable-id': m,
                      'data-rfd-drag-handle-context-id': a,
                      draggable: !1,
                      onDragStart: nj,
                    }
                  : null,
              [a, s, m, b]
            ),
            A = (0, o.I4)(
              e => {
                'DRAGGING' === x.type &&
                  x.dropping &&
                  'transform' === e.propertyName &&
                  (n.version.startsWith('16') || n.version.startsWith('17')
                    ? D()
                    : (0, l.flushSync)(D));
              },
              [D, x]
            ),
            N = (0, o.Ye)(
              () => ({
                innerRef: r,
                draggableProps: {
                  'data-rfd-draggable-context-id': a,
                  'data-rfd-draggable-id': m,
                  style:
                    'DRAGGING' === x.type
                      ? (function (e) {
                          let t = e.dimension.client,
                            { offset: r, combineWith: n, dropping: l } = e,
                            i = !!n,
                            a = nU(e),
                            o = !!l,
                            d = o ? tX.drop(r, i) : tX.moveTo(r);
                          return {
                            position: 'fixed',
                            top: t.marginBox.top,
                            left: t.marginBox.left,
                            boxSizing: 'border-box',
                            width: t.borderBox.width,
                            height: t.borderBox.height,
                            transition: n$(a, l),
                            transform: d,
                            opacity: nW(i, o),
                            zIndex: o ? nk.dropAnimating : nk.dragging,
                            pointerEvents: 'none',
                          };
                        })(x)
                      : {
                          transform: tX.moveTo(x.offset),
                          transition: x.shouldAnimateDisplacement
                            ? void 0
                            : 'none',
                        },
                  onTransitionEnd:
                    'DRAGGING' === x.type && x.dropping ? A : void 0,
                },
                dragHandleProps: E,
              }),
              [a, E, m, x, A, r]
            ),
            R = (0, o.Ye)(
              () => ({
                draggableId: f.id,
                type: f.type,
                source: { index: f.index, droppableId: f.droppableId },
              }),
              [f.droppableId, f.id, f.index, f.type]
            );
          return n.createElement(n.Fragment, null, g(N, x.snapshot, R));
        });
      function n0(e) {
        return nV(nY).isUsingCloneFor !== e.draggableId || e.isClone
          ? n.createElement(nQ, e)
          : null;
      }
      function n1(e) {
        let t = 'boolean' != typeof e.isDragDisabled || !e.isDragDisabled,
          r = !!e.disableInteractiveElementBlocking,
          l = !!e.shouldRespectForcePress;
        return n.createElement(
          n0,
          (0, c.Z)({}, e, {
            isClone: !1,
            isEnabled: t,
            canDragInteractiveElements: r,
            shouldRespectForcePress: l,
          })
        );
      }
      let n4 = e => t => e === t,
        n3 = n4('scroll'),
        n2 = n4('auto');
      n4('visible');
      let n5 = (e, t) => t(e.overflowX) || t(e.overflowY),
        n7 = e => {
          let t = window.getComputedStyle(e),
            r = { overflowX: t.overflowX, overflowY: t.overflowY };
          return n5(r, n3) || n5(r, n2);
        },
        n6 = () => !1,
        n8 = e =>
          null == e
            ? null
            : e === document.body
              ? n6()
                ? e
                : null
              : e === document.documentElement
                ? null
                : n7(e)
                  ? e
                  : n8(e.parentElement);
      var n9 = e => ({ x: e.scrollLeft, y: e.scrollTop });
      let le = e =>
        !!e &&
        ('fixed' === window.getComputedStyle(e).position ||
          le(e.parentElement));
      var lt = e => ({ closestScrollable: n8(e), isFixedOnPage: le(e) }),
        lr = ({
          descriptor: e,
          isEnabled: t,
          isCombineEnabled: r,
          isFixedOnPage: n,
          direction: l,
          client: i,
          page: a,
          closest: o,
        }) => {
          let d = (() => {
              if (!o) return null;
              let { scrollSize: e, client: t } = o,
                r = rI({
                  scrollHeight: e.scrollHeight,
                  scrollWidth: e.scrollWidth,
                  height: t.paddingBox.height,
                  width: t.paddingBox.width,
                });
              return {
                pageMarginBox: o.page.marginBox,
                frameClient: t,
                scrollSize: e,
                shouldClipSubject: o.shouldClipSubject,
                scroll: {
                  initial: o.scroll,
                  current: o.scroll,
                  max: r,
                  diff: { value: C, displacement: C },
                },
              };
            })(),
            s = 'vertical' === l ? ei : ea,
            u = W({ page: a, withPlaceholder: null, axis: s, frame: d });
          return {
            descriptor: e,
            isCombineEnabled: r,
            isFixedOnPage: n,
            axis: s,
            isEnabled: t,
            client: i,
            page: a,
            frame: d,
            subject: u,
          };
        };
      let ln = (e, t) => {
        let r = (0, d.iz)(e);
        if (!t || e !== t) return r;
        let n = r.paddingBox.top - t.scrollTop,
          l = r.paddingBox.left - t.scrollLeft,
          i = n + t.scrollHeight,
          a = l + t.scrollWidth,
          o = (0, d.jn)({ top: n, right: a, bottom: i, left: l }, r.border);
        return (0, d.dO)({
          borderBox: o,
          margin: r.margin,
          border: r.border,
          padding: r.padding,
        });
      };
      var ll = ({
        ref: e,
        descriptor: t,
        env: r,
        windowScroll: n,
        direction: l,
        isDropDisabled: i,
        isCombineEnabled: a,
        shouldClipSubject: o,
      }) => {
        let s = r.closestScrollable,
          u = ln(e, s),
          c = (0, d.oc)(u, n),
          p = (() => {
            if (!s) return null;
            let e = (0, d.iz)(s),
              t = { scrollHeight: s.scrollHeight, scrollWidth: s.scrollWidth };
            return {
              client: e,
              page: (0, d.oc)(e, n),
              scroll: n9(s),
              scrollSize: t,
              shouldClipSubject: o,
            };
          })();
        return lr({
          descriptor: t,
          isEnabled: !i,
          isCombineEnabled: a,
          isFixedOnPage: r.isFixedOnPage,
          direction: l,
          client: u,
          page: c,
          closest: p,
        });
      };
      let li = { passive: !1 },
        la = { passive: !0 };
      var lo = e => (e.shouldPublishImmediately ? li : la);
      let ld = e => (e && e.env.closestScrollable) || null;
      function ls() {}
      let lu = {
          width: 0,
          height: 0,
          margin: { top: 0, right: 0, bottom: 0, left: 0 },
        },
        lc = ({ isAnimatingOpenOnMount: e, placeholder: t, animate: r }) =>
          e || 'close' === r
            ? lu
            : {
                height: t.client.borderBox.height,
                width: t.client.borderBox.width,
                margin: t.client.margin,
              },
        lp = ({ isAnimatingOpenOnMount: e, placeholder: t, animate: r }) => {
          let n = lc({ isAnimatingOpenOnMount: e, placeholder: t, animate: r });
          return {
            display: t.display,
            boxSizing: 'border-box',
            width: n.width,
            height: n.height,
            marginTop: n.margin.top,
            marginRight: n.margin.right,
            marginBottom: n.margin.bottom,
            marginLeft: n.margin.left,
            flexShrink: '0',
            flexGrow: '0',
            pointerEvents: 'none',
            transition: 'none' !== r ? tZ.placeholder : null,
          };
        };
      var lf = n.memo(e => {
        let t = (0, n.useRef)(null),
          r = (0, o.I4)(() => {
            t.current && (clearTimeout(t.current), (t.current = null));
          }, []),
          { animate: l, onTransitionEnd: i, onClose: a, contextId: d } = e,
          [s, u] = (0, n.useState)('open' === e.animate);
        (0, n.useEffect)(
          () =>
            s
              ? 'open' !== l
                ? (r(), u(!1), ls)
                : t.current
                  ? ls
                  : ((t.current = setTimeout(() => {
                      (t.current = null), u(!1);
                    })),
                    r)
              : ls,
          [l, s, r]
        );
        let c = (0, o.I4)(
            e => {
              'height' === e.propertyName && (i(), 'close' === l && a());
            },
            [l, a, i]
          ),
          p = lp({
            isAnimatingOpenOnMount: s,
            animate: e.animate,
            placeholder: e.placeholder,
          });
        return n.createElement(e.placeholder.tagName, {
          style: p,
          'data-rfd-placeholder-context-id': d,
          onTransitionEnd: c,
          ref: e.innerRef,
        });
      });
      function lg(e) {
        return 'boolean' == typeof e;
      }
      function lm(e, t) {
        t.forEach(t => t(e));
      }
      let lb = [
          function ({ props: e }) {
            e.droppableId || y(!1), 'string' != typeof e.droppableId && y(!1);
          },
          function ({ props: e }) {
            lg(e.isDropDisabled) || y(!1),
              lg(e.isCombineEnabled) || y(!1),
              lg(e.ignoreContainerClipping) || y(!1);
          },
          function ({ getDroppableRef: e }) {
            nH(e());
          },
        ],
        lh = [
          function ({ props: e, getPlaceholderRef: t }) {
            if (!e.placeholder || t()) return;
          },
        ],
        lI = [
          function ({ props: e }) {
            e.renderClone || y(!1);
          },
          function ({ getPlaceholderRef: e }) {
            e() && y(!1);
          },
        ];
      class ly extends n.PureComponent {
        constructor(...e) {
          super(...e),
            (this.state = {
              isVisible: !!this.props.on,
              data: this.props.on,
              animate:
                this.props.shouldAnimate && this.props.on ? 'open' : 'none',
            }),
            (this.onClose = () => {
              'close' === this.state.animate &&
                this.setState({ isVisible: !1 });
            });
        }
        static getDerivedStateFromProps(e, t) {
          return e.shouldAnimate
            ? e.on
              ? { isVisible: !0, data: e.on, animate: 'open' }
              : t.isVisible
                ? { isVisible: !0, data: t.data, animate: 'close' }
                : { isVisible: !1, animate: 'close', data: null }
            : { isVisible: !!e.on, data: e.on, animate: 'none' };
        }
        render() {
          if (!this.state.isVisible) return null;
          let e = {
            onClose: this.onClose,
            data: this.state.data,
            animate: this.state.animate,
          };
          return this.props.children(e);
        }
      }
      let lv = {
          mode: 'standard',
          type: 'DEFAULT',
          direction: 'vertical',
          isDropDisabled: !1,
          isCombineEnabled: !1,
          ignoreContainerClipping: !1,
          renderClone: null,
          getContainerForClone: function () {
            return document.body || y(!1), document.body;
          },
        },
        lx = e => {
          let t,
            r = { ...e };
          for (t in lv) void 0 === e[t] && (r = { ...r, [t]: lv[t] });
          return r;
        },
        lD = (e, t) => e === t.droppable.type,
        lE = (e, t) => t.draggables[e.draggable.id];
      var lA = (0, a.$j)(
        () => {
          let e = {
              placeholder: null,
              shouldAnimatePlaceholder: !0,
              snapshot: {
                isDraggingOver: !1,
                draggingOverWith: null,
                draggingFromThisWith: null,
                isUsingPlaceholder: !1,
              },
              useClone: null,
            },
            t = { ...e, shouldAnimatePlaceholder: !1 },
            r = (0, s.Z)(e => ({
              draggableId: e.id,
              type: e.type,
              source: { index: e.index, droppableId: e.droppableId },
            })),
            n = (0, s.Z)((n, l, i, a, o, d) => {
              let s = o.descriptor.id;
              if (o.descriptor.droppableId === n) {
                let e = d ? { render: d, dragging: r(o.descriptor) } : null;
                return {
                  placeholder: o.placeholder,
                  shouldAnimatePlaceholder: !1,
                  snapshot: {
                    isDraggingOver: i,
                    draggingOverWith: i ? s : null,
                    draggingFromThisWith: s,
                    isUsingPlaceholder: !0,
                  },
                  useClone: e,
                };
              }
              return l
                ? a
                  ? {
                      placeholder: o.placeholder,
                      shouldAnimatePlaceholder: !0,
                      snapshot: {
                        isDraggingOver: i,
                        draggingOverWith: s,
                        draggingFromThisWith: null,
                        isUsingPlaceholder: !0,
                      },
                      useClone: null,
                    }
                  : e
                : t;
            });
          return (r, l) => {
            let i = lx(l),
              a = i.droppableId,
              o = i.type,
              d = !i.isDropDisabled,
              s = i.renderClone;
            if (ny(r)) {
              let e = r.critical;
              if (!lD(o, e)) return t;
              let l = lE(e, r.dimensions),
                i = e0(r.impact) === a;
              return n(a, d, i, i, l, s);
            }
            if ('DROP_ANIMATING' === r.phase) {
              let e = r.completed;
              if (!lD(o, e.critical)) return t;
              let l = lE(e.critical, r.dimensions);
              return n(a, d, nq(e.result) === a, e0(e.impact) === a, l, s);
            }
            if ('IDLE' === r.phase && r.completed && !r.shouldFlush) {
              let n = r.completed;
              if (!lD(o, n.critical)) return t;
              let l = e0(n.impact) === a,
                i = !!(n.impact.at && 'COMBINE' === n.impact.at.type),
                d = n.critical.droppable.id === a;
              if (l) return i ? e : t;
              if (d) return e;
            }
            return t;
          };
        },
        {
          updateViewportMaxScroll: e => ({
            type: 'UPDATE_VIEWPORT_MAX_SCROLL',
            payload: e,
          }),
        },
        (e, t, r) => ({ ...lx(r), ...e, ...t }),
        { context: ni, areStatePropsEqual: nz }
      )(e => {
        var t;
        let r = (0, n.useContext)(nc);
        r || y(!1);
        let { contextId: i, isMovementAllowed: a } = r,
          d = (0, n.useRef)(null),
          c = (0, n.useRef)(null),
          {
            children: p,
            droppableId: f,
            type: g,
            mode: m,
            direction: b,
            ignoreContainerClipping: h,
            isDropDisabled: I,
            isCombineEnabled: v,
            snapshot: x,
            useClone: D,
            updateViewportMaxScroll: E,
            getContainerForClone: A,
          } = e,
          N = (0, o.I4)(() => d.current, []),
          R = (0, o.I4)((e = null) => {
            d.current = e;
          }, []),
          P = (0, o.I4)(() => c.current, []),
          w = (0, o.I4)((e = null) => {
            c.current = e;
          }, []);
        (t = { props: e, getDroppableRef: N, getPlaceholderRef: P }),
          () => {
            lm(t, lb),
              'standard' === t.props.mode && lm(t, lh),
              'virtual' === t.props.mode && lm(t, lI);
          };
        let O = (0, o.I4)(() => {
          a() && E({ maxScroll: rv() });
        }, [a, E]);
        !(function (e) {
          let t = (0, n.useRef)(null),
            r = nV(nc),
            l = nu('droppable'),
            { registry: i, marshal: a } = r,
            d = nI(e),
            c = (0, o.Ye)(
              () => ({ id: e.droppableId, type: e.type, mode: e.mode }),
              [e.droppableId, e.mode, e.type]
            ),
            p = (0, n.useRef)(c),
            f = (0, o.Ye)(
              () =>
                (0, s.Z)((e, r) => {
                  t.current || y(!1),
                    a.updateDroppableScroll(c.id, { x: e, y: r });
                }),
              [c.id, a]
            ),
            g = (0, o.I4)(() => {
              let e = t.current;
              return e && e.env.closestScrollable
                ? n9(e.env.closestScrollable)
                : C;
            }, []),
            m = (0, o.I4)(() => {
              let e = g();
              f(e.x, e.y);
            }, [g, f]),
            b = (0, o.Ye)(() => (0, u.Z)(m), [m]),
            h = (0, o.I4)(() => {
              let e = t.current,
                r = ld(e);
              if (
                ((e && r) || y(!1), e.scrollOptions.shouldPublishImmediately)
              ) {
                m();
                return;
              }
              b();
            }, [b, m]),
            I = (0, o.I4)(
              (e, n) => {
                t.current && y(!1);
                let l = d.current,
                  i = l.getDroppableRef();
                i || y(!1);
                let a = lt(i),
                  o = { ref: i, descriptor: c, env: a, scrollOptions: n };
                t.current = o;
                let s = ll({
                    ref: i,
                    descriptor: c,
                    env: a,
                    windowScroll: e,
                    direction: l.direction,
                    isDropDisabled: l.isDropDisabled,
                    isCombineEnabled: l.isCombineEnabled,
                    shouldClipSubject: !l.ignoreContainerClipping,
                  }),
                  u = a.closestScrollable;
                return (
                  u &&
                    (u.setAttribute(r3.contextId, r.contextId),
                    u.addEventListener('scroll', h, lo(o.scrollOptions))),
                  s
                );
              },
              [r.contextId, c, h, d]
            ),
            v = (0, o.I4)(() => {
              let e = t.current,
                r = ld(e);
              return (e && r) || y(!1), n9(r);
            }, []),
            x = (0, o.I4)(() => {
              let e = t.current;
              e || y(!1);
              let r = ld(e);
              (t.current = null),
                r &&
                  (b.cancel(),
                  r.removeAttribute(r3.contextId),
                  r.removeEventListener('scroll', h, lo(e.scrollOptions)));
            }, [h, b]),
            D = (0, o.I4)(e => {
              let r = t.current;
              r || y(!1);
              let n = ld(r);
              n || y(!1), (n.scrollTop += e.y), (n.scrollLeft += e.x);
            }, []),
            E = (0, o.Ye)(
              () => ({
                getDimensionAndWatchScroll: I,
                getScrollWhileDragging: v,
                dragStopped: x,
                scroll: D,
              }),
              [x, I, v, D]
            ),
            A = (0, o.Ye)(
              () => ({ uniqueId: l, descriptor: c, callbacks: E }),
              [E, c, l]
            );
          r6(
            () => (
              (p.current = A.descriptor),
              i.droppable.register(A),
              () => {
                t.current && x(), i.droppable.unregister(A);
              }
            ),
            [E, c, x, A, a, i.droppable]
          ),
            r6(() => {
              t.current &&
                a.updateDroppableIsEnabled(p.current.id, !e.isDropDisabled);
            }, [e.isDropDisabled, a]),
            r6(() => {
              t.current &&
                a.updateDroppableIsCombineEnabled(
                  p.current.id,
                  e.isCombineEnabled
                );
            }, [e.isCombineEnabled, a]);
        })({
          droppableId: f,
          type: g,
          mode: m,
          direction: b,
          isDropDisabled: I,
          isCombineEnabled: v,
          ignoreContainerClipping: h,
          getDroppableRef: N,
        });
        let S = (0, o.Ye)(
            () =>
              n.createElement(
                ly,
                {
                  on: e.placeholder,
                  shouldAnimate: e.shouldAnimatePlaceholder,
                },
                ({ onClose: e, data: t, animate: r }) =>
                  n.createElement(lf, {
                    placeholder: t,
                    onClose: e,
                    innerRef: w,
                    animate: r,
                    contextId: i,
                    onTransitionEnd: O,
                  })
              ),
            [i, O, e.placeholder, e.shouldAnimatePlaceholder, w]
          ),
          B = (0, o.Ye)(
            () => ({
              innerRef: R,
              placeholder: S,
              droppableProps: {
                'data-rfd-droppable-id': f,
                'data-rfd-droppable-context-id': i,
              },
            }),
            [i, f, S, R]
          ),
          G = D ? D.dragging.draggableId : null,
          L = (0, o.Ye)(
            () => ({ droppableId: f, type: g, isUsingCloneFor: G }),
            [f, G, g]
          );
        return n.createElement(
          nY.Provider,
          { value: L },
          p(B, x),
          (function () {
            if (!D) return null;
            let { dragging: e, render: t } = D,
              r = n.createElement(
                n0,
                {
                  draggableId: e.draggableId,
                  index: e.source.index,
                  isClone: !0,
                  isEnabled: !0,
                  shouldRespectForcePress: !1,
                  canDragInteractiveElements: !0,
                },
                (r, n) => t(r, n, e)
              );
            return l.createPortal(r, A());
          })()
        );
      });
    },
  },
]);
