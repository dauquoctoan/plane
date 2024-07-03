'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8345],
  {
    15463: function (e, t, n) {
      n.d(t, {
        EH: function () {
          return tg;
        },
        aV: function () {
          return tI;
        },
        p: function () {
          return tf;
        },
        tk: function () {
          return tL;
        },
      });
      var o = n(82789),
        i = n(2396),
        s = n(8465);
      let r = function (e) {
          for (var t = 0; ; t++) if (!(e = e.previousSibling)) return t;
        },
        l = function (e) {
          let t = e.assignedSlot || e.parentNode;
          return t && 11 == t.nodeType ? t.host : t;
        },
        d = null,
        a = function (e, t, n) {
          let o = d || (d = document.createRange());
          return (
            o.setEnd(e, null == n ? e.nodeValue.length : n),
            o.setStart(e, t || 0),
            o
          );
        },
        c = function (e, t, n, o) {
          return n && (u(e, t, n, o, -1) || u(e, t, n, o, 1));
        },
        h = /^(img|br|input|textarea|hr)$/i;
      function u(e, t, n, o, i) {
        for (;;) {
          if (e == n && t == o) return !0;
          if (t == (i < 0 ? 0 : f(e))) {
            let n = e.parentNode;
            if (
              !n ||
              1 != n.nodeType ||
              p(e) ||
              h.test(e.nodeName) ||
              'false' == e.contentEditable
            )
              return !1;
            (t = r(e) + (i < 0 ? 0 : 1)), (e = n);
          } else {
            if (
              1 != e.nodeType ||
              'false' ==
                (e = e.childNodes[t + (i < 0 ? -1 : 0)]).contentEditable
            )
              return !1;
            t = i < 0 ? f(e) : 0;
          }
        }
      }
      function f(e) {
        return 3 == e.nodeType ? e.nodeValue.length : e.childNodes.length;
      }
      function p(e) {
        let t;
        for (let n = e; n && !(t = n.pmViewDesc); n = n.parentNode);
        return (
          t && t.node && t.node.isBlock && (t.dom == e || t.contentDOM == e)
        );
      }
      let m = function (e) {
        return (
          e.focusNode &&
          c(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset)
        );
      };
      function g(e, t) {
        let n = document.createEvent('Event');
        return (
          n.initEvent('keydown', !0, !0),
          (n.keyCode = e),
          (n.key = n.code = t),
          n
        );
      }
      let y = 'undefined' != typeof navigator ? navigator : null,
        b = 'undefined' != typeof document ? document : null,
        v = (y && y.userAgent) || '',
        w = /Edge\/(\d+)/.exec(v),
        D = /MSIE \d/.exec(v),
        N = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(v),
        O = !!(D || N || w),
        S = D ? document.documentMode : N ? +N[1] : w ? +w[1] : 0,
        C = !O && /gecko\/(\d+)/i.test(v);
      C && (/Firefox\/(\d+)/.exec(v) || [0, 0])[1];
      let M = !O && /Chrome\/(\d+)/.exec(v),
        x = !!M,
        k = M ? +M[1] : 0,
        T = !O && !!y && /Apple Computer/.test(y.vendor),
        E = T && (/Mobile\/\w+/.test(v) || (!!y && y.maxTouchPoints > 2)),
        P = E || (!!y && /Mac/.test(y.platform)),
        A = !!y && /Win/.test(y.platform),
        V = /Android \d/.test(v),
        R = !!b && 'webkitFontSmoothing' in b.documentElement.style,
        B = R
          ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1]
          : 0;
      function q(e, t) {
        return 'number' == typeof e ? e : e[t];
      }
      function z(e, t, n) {
        let o = e.someProp('scrollThreshold') || 0,
          i = e.someProp('scrollMargin') || 5,
          s = e.dom.ownerDocument;
        for (let r = n || e.dom; r; r = l(r)) {
          if (1 != r.nodeType) continue;
          let e = r,
            n = e == s.body,
            l = n
              ? {
                  left: 0,
                  right: s.documentElement.clientWidth,
                  top: 0,
                  bottom: s.documentElement.clientHeight,
                }
              : (function (e) {
                  let t = e.getBoundingClientRect(),
                    n = t.width / e.offsetWidth || 1,
                    o = t.height / e.offsetHeight || 1;
                  return {
                    left: t.left,
                    right: t.left + e.clientWidth * n,
                    top: t.top,
                    bottom: t.top + e.clientHeight * o,
                  };
                })(e),
            d = 0,
            a = 0;
          if (
            (t.top < l.top + q(o, 'top')
              ? (a = -(l.top - t.top + q(i, 'top')))
              : t.bottom > l.bottom - q(o, 'bottom') &&
                (a =
                  t.bottom - t.top > l.bottom - l.top
                    ? t.top + q(i, 'top') - l.top
                    : t.bottom - l.bottom + q(i, 'bottom')),
            t.left < l.left + q(o, 'left')
              ? (d = -(l.left - t.left + q(i, 'left')))
              : t.right > l.right - q(o, 'right') &&
                (d = t.right - l.right + q(i, 'right')),
            d || a)
          ) {
            if (n) s.defaultView.scrollBy(d, a);
            else {
              let n = e.scrollLeft,
                o = e.scrollTop;
              a && (e.scrollTop += a), d && (e.scrollLeft += d);
              let i = e.scrollLeft - n,
                s = e.scrollTop - o;
              t = {
                left: t.left - i,
                top: t.top - s,
                right: t.right - i,
                bottom: t.bottom - s,
              };
            }
          }
          if (n || /^(fixed|sticky)$/.test(getComputedStyle(r).position)) break;
        }
      }
      function I(e) {
        let t = [],
          n = e.ownerDocument;
        for (
          let o = e;
          o &&
          (t.push({ dom: o, top: o.scrollTop, left: o.scrollLeft }), e != n);
          o = l(o)
        );
        return t;
      }
      function L(e, t) {
        for (let n = 0; n < e.length; n++) {
          let { dom: o, top: i, left: s } = e[n];
          o.scrollTop != i + t && (o.scrollTop = i + t),
            o.scrollLeft != s && (o.scrollLeft = s);
        }
      }
      let F = null;
      function K(e, t) {
        return (
          e.left >= t.left - 1 &&
          e.left <= t.right + 1 &&
          e.top >= t.top - 1 &&
          e.top <= t.bottom + 1
        );
      }
      function W(e) {
        return e.top < e.bottom || e.left < e.right;
      }
      function $(e, t) {
        let n = e.getClientRects();
        if (n.length) {
          let e = n[t < 0 ? 0 : n.length - 1];
          if (W(e)) return e;
        }
        return Array.prototype.find.call(n, W) || e.getBoundingClientRect();
      }
      let H = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
      function _(e, t, n) {
        let {
            node: o,
            offset: i,
            atom: s,
          } = e.docView.domFromPos(t, n < 0 ? -1 : 1),
          r = R || C;
        if (3 == o.nodeType) {
          if (
            r &&
            (H.test(o.nodeValue) || (n < 0 ? !i : i == o.nodeValue.length))
          ) {
            let e = $(a(o, i, i), n);
            if (
              C &&
              i &&
              /\s/.test(o.nodeValue[i - 1]) &&
              i < o.nodeValue.length
            ) {
              let t = $(a(o, i - 1, i - 1), -1);
              if (t.top == e.top) {
                let n = $(a(o, i, i + 1), -1);
                if (n.top != e.top) return Y(n, n.left < t.left);
              }
            }
            return e;
          }
          {
            let e = i,
              t = i,
              s = n < 0 ? 1 : -1;
            return (
              n < 0 && !i
                ? (t++, (s = -1))
                : n >= 0 && i == o.nodeValue.length
                  ? (e--, (s = 1))
                  : n < 0
                    ? e--
                    : t++,
              Y($(a(o, e, t), s), s < 0)
            );
          }
        }
        if (!e.state.doc.resolve(t - (s || 0)).parent.inlineContent) {
          if (null == s && i && (n < 0 || i == f(o))) {
            let e = o.childNodes[i - 1];
            if (1 == e.nodeType) return G(e.getBoundingClientRect(), !1);
          }
          if (null == s && i < f(o)) {
            let e = o.childNodes[i];
            if (1 == e.nodeType) return G(e.getBoundingClientRect(), !0);
          }
          return G(o.getBoundingClientRect(), n >= 0);
        }
        if (null == s && i && (n < 0 || i == f(o))) {
          let e = o.childNodes[i - 1],
            t =
              3 == e.nodeType
                ? a(e, f(e) - (r ? 0 : 1))
                : 1 != e.nodeType || ('BR' == e.nodeName && e.nextSibling)
                  ? null
                  : e;
          if (t) return Y($(t, 1), !1);
        }
        if (null == s && i < f(o)) {
          let e = o.childNodes[i];
          for (; e.pmViewDesc && e.pmViewDesc.ignoreForCoords; )
            e = e.nextSibling;
          let t = e
            ? 3 == e.nodeType
              ? a(e, 0, r ? 0 : 1)
              : 1 == e.nodeType
                ? e
                : null
            : null;
          if (t) return Y($(t, -1), !0);
        }
        return Y($(3 == o.nodeType ? a(o) : o, -n), n >= 0);
      }
      function Y(e, t) {
        if (0 == e.width) return e;
        let n = t ? e.left : e.right;
        return { top: e.top, bottom: e.bottom, left: n, right: n };
      }
      function G(e, t) {
        if (0 == e.height) return e;
        let n = t ? e.top : e.bottom;
        return { top: n, bottom: n, left: e.left, right: e.right };
      }
      function U(e, t, n) {
        let o = e.state,
          i = e.root.activeElement;
        o != t && e.updateState(t), i != e.dom && e.focus();
        try {
          return n();
        } finally {
          o != t && e.updateState(o), i != e.dom && i && i.focus();
        }
      }
      let j = /[\u0590-\u08ac]/,
        X = null,
        J = null,
        Q = !1;
      class Z {
        constructor(e, t, n, o) {
          (this.parent = e),
            (this.children = t),
            (this.dom = n),
            (this.contentDOM = o),
            (this.dirty = 0),
            (n.pmViewDesc = this);
        }
        matchesWidget(e) {
          return !1;
        }
        matchesMark(e) {
          return !1;
        }
        matchesNode(e, t, n) {
          return !1;
        }
        matchesHack(e) {
          return !1;
        }
        parseRule() {
          return null;
        }
        stopEvent(e) {
          return !1;
        }
        get size() {
          let e = 0;
          for (let t = 0; t < this.children.length; t++)
            e += this.children[t].size;
          return e;
        }
        get border() {
          return 0;
        }
        destroy() {
          (this.parent = void 0),
            this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0);
          for (let e = 0; e < this.children.length; e++)
            this.children[e].destroy();
        }
        posBeforeChild(e) {
          for (let t = 0, n = this.posAtStart; ; t++) {
            let o = this.children[t];
            if (o == e) return n;
            n += o.size;
          }
        }
        get posBefore() {
          return this.parent.posBeforeChild(this);
        }
        get posAtStart() {
          return this.parent
            ? this.parent.posBeforeChild(this) + this.border
            : 0;
        }
        get posAfter() {
          return this.posBefore + this.size;
        }
        get posAtEnd() {
          return this.posAtStart + this.size - 2 * this.border;
        }
        localPosFromDOM(e, t, n) {
          let o;
          if (
            this.contentDOM &&
            this.contentDOM.contains(1 == e.nodeType ? e : e.parentNode)
          ) {
            if (n < 0) {
              let n, o;
              if (e == this.contentDOM) n = e.childNodes[t - 1];
              else {
                for (; e.parentNode != this.contentDOM; ) e = e.parentNode;
                n = e.previousSibling;
              }
              for (; n && !((o = n.pmViewDesc) && o.parent == this); )
                n = n.previousSibling;
              return n ? this.posBeforeChild(o) + o.size : this.posAtStart;
            }
            {
              let n, o;
              if (e == this.contentDOM) n = e.childNodes[t];
              else {
                for (; e.parentNode != this.contentDOM; ) e = e.parentNode;
                n = e.nextSibling;
              }
              for (; n && !((o = n.pmViewDesc) && o.parent == this); )
                n = n.nextSibling;
              return n ? this.posBeforeChild(o) : this.posAtEnd;
            }
          }
          if (e == this.dom && this.contentDOM) o = t > r(this.contentDOM);
          else if (
            this.contentDOM &&
            this.contentDOM != this.dom &&
            this.dom.contains(this.contentDOM)
          )
            o = 2 & e.compareDocumentPosition(this.contentDOM);
          else if (this.dom.firstChild) {
            if (0 == t)
              for (let t = e; ; t = t.parentNode) {
                if (t == this.dom) {
                  o = !1;
                  break;
                }
                if (t.previousSibling) break;
              }
            if (null == o && t == e.childNodes.length)
              for (let t = e; ; t = t.parentNode) {
                if (t == this.dom) {
                  o = !0;
                  break;
                }
                if (t.nextSibling) break;
              }
          }
          return (null == o ? n > 0 : o) ? this.posAtEnd : this.posAtStart;
        }
        nearestDesc(e, t = !1) {
          for (let n = !0, o = e; o; o = o.parentNode) {
            let i = this.getDesc(o),
              s;
            if (i && (!t || i.node)) {
              if (
                !n ||
                !(s = i.nodeDOM) ||
                (1 == s.nodeType
                  ? s.contains(1 == e.nodeType ? e : e.parentNode)
                  : s == e)
              )
                return i;
              n = !1;
            }
          }
        }
        getDesc(e) {
          let t = e.pmViewDesc;
          for (let e = t; e; e = e.parent) if (e == this) return t;
        }
        posFromDOM(e, t, n) {
          for (let o = e; o; o = o.parentNode) {
            let i = this.getDesc(o);
            if (i) return i.localPosFromDOM(e, t, n);
          }
          return -1;
        }
        descAt(e) {
          for (let t = 0, n = 0; t < this.children.length; t++) {
            let o = this.children[t],
              i = n + o.size;
            if (n == e && i != n) {
              for (; !o.border && o.children.length; ) o = o.children[0];
              return o;
            }
            if (e < i) return o.descAt(e - n - o.border);
            n = i;
          }
        }
        domFromPos(e, t) {
          if (!this.contentDOM)
            return { node: this.dom, offset: 0, atom: e + 1 };
          let n = 0,
            o = 0;
          for (let t = 0; n < this.children.length; n++) {
            let i = this.children[n],
              s = t + i.size;
            if (s > e || i instanceof er) {
              o = e - t;
              break;
            }
            t = s;
          }
          if (o)
            return this.children[n].domFromPos(o - this.children[n].border, t);
          for (
            let e;
            n &&
            !(e = this.children[n - 1]).size &&
            e instanceof ee &&
            e.side >= 0;
            n--
          );
          if (t <= 0) {
            let e,
              o = !0;
            for (
              ;
              (e = n ? this.children[n - 1] : null) &&
              e.dom.parentNode != this.contentDOM;
              n--, o = !1
            );
            return e && t && o && !e.border && !e.domAtom
              ? e.domFromPos(e.size, t)
              : { node: this.contentDOM, offset: e ? r(e.dom) + 1 : 0 };
          }
          {
            let e,
              o = !0;
            for (
              ;
              (e = n < this.children.length ? this.children[n] : null) &&
              e.dom.parentNode != this.contentDOM;
              n++, o = !1
            );
            return e && o && !e.border && !e.domAtom
              ? e.domFromPos(0, t)
              : {
                  node: this.contentDOM,
                  offset: e ? r(e.dom) : this.contentDOM.childNodes.length,
                };
          }
        }
        parseRange(e, t, n = 0) {
          if (0 == this.children.length)
            return {
              node: this.contentDOM,
              from: e,
              to: t,
              fromOffset: 0,
              toOffset: this.contentDOM.childNodes.length,
            };
          let o = -1,
            i = -1;
          for (let s = n, l = 0; ; l++) {
            let n = this.children[l],
              d = s + n.size;
            if (-1 == o && e <= d) {
              let i = s + n.border;
              if (
                e >= i &&
                t <= d - n.border &&
                n.node &&
                n.contentDOM &&
                this.contentDOM.contains(n.contentDOM)
              )
                return n.parseRange(e, t, i);
              e = s;
              for (let t = l; t > 0; t--) {
                let n = this.children[t - 1];
                if (
                  n.size &&
                  n.dom.parentNode == this.contentDOM &&
                  !n.emptyChildAt(1)
                ) {
                  o = r(n.dom) + 1;
                  break;
                }
                e -= n.size;
              }
              -1 == o && (o = 0);
            }
            if (o > -1 && (d > t || l == this.children.length - 1)) {
              t = d;
              for (let e = l + 1; e < this.children.length; e++) {
                let n = this.children[e];
                if (
                  n.size &&
                  n.dom.parentNode == this.contentDOM &&
                  !n.emptyChildAt(-1)
                ) {
                  i = r(n.dom);
                  break;
                }
                t += n.size;
              }
              -1 == i && (i = this.contentDOM.childNodes.length);
              break;
            }
            s = d;
          }
          return {
            node: this.contentDOM,
            from: e,
            to: t,
            fromOffset: o,
            toOffset: i,
          };
        }
        emptyChildAt(e) {
          if (this.border || !this.contentDOM || !this.children.length)
            return !1;
          let t = this.children[e < 0 ? 0 : this.children.length - 1];
          return 0 == t.size || t.emptyChildAt(e);
        }
        domAfterPos(e) {
          let { node: t, offset: n } = this.domFromPos(e, 0);
          if (1 != t.nodeType || n == t.childNodes.length)
            throw RangeError('No node after pos ' + e);
          return t.childNodes[n];
        }
        setSelection(e, t, n, o = !1) {
          let i = Math.min(e, t),
            s = Math.max(e, t);
          for (let r = 0, l = 0; r < this.children.length; r++) {
            let d = this.children[r],
              a = l + d.size;
            if (i > l && s < a)
              return d.setSelection(e - l - d.border, t - l - d.border, n, o);
            l = a;
          }
          let l = this.domFromPos(e, e ? -1 : 1),
            d = t == e ? l : this.domFromPos(t, t ? -1 : 1),
            a = n.getSelection(),
            h = !1;
          if ((C || T) && e == t) {
            let { node: e, offset: t } = l;
            if (3 == e.nodeType) {
              if (
                (h = !!(t && '\n' == e.nodeValue[t - 1])) &&
                t == e.nodeValue.length
              )
                for (let t = e, n; t; t = t.parentNode) {
                  if ((n = t.nextSibling)) {
                    'BR' == n.nodeName &&
                      (l = d = { node: n.parentNode, offset: r(n) + 1 });
                    break;
                  }
                  let e = t.pmViewDesc;
                  if (e && e.node && e.node.isBlock) break;
                }
            } else {
              let n = e.childNodes[t - 1];
              h = n && ('BR' == n.nodeName || 'false' == n.contentEditable);
            }
          }
          if (
            C &&
            a.focusNode &&
            a.focusNode != d.node &&
            1 == a.focusNode.nodeType
          ) {
            let e = a.focusNode.childNodes[a.focusOffset];
            e && 'false' == e.contentEditable && (o = !0);
          }
          if (
            !(o || (h && T)) &&
            c(l.node, l.offset, a.anchorNode, a.anchorOffset) &&
            c(d.node, d.offset, a.focusNode, a.focusOffset)
          )
            return;
          let u = !1;
          if ((a.extend || e == t) && !h) {
            a.collapse(l.node, l.offset);
            try {
              e != t && a.extend(d.node, d.offset), (u = !0);
            } catch (e) {}
          }
          if (!u) {
            if (e > t) {
              let e = l;
              (l = d), (d = e);
            }
            let n = document.createRange();
            n.setEnd(d.node, d.offset),
              n.setStart(l.node, l.offset),
              a.removeAllRanges(),
              a.addRange(n);
          }
        }
        ignoreMutation(e) {
          return !this.contentDOM && 'selection' != e.type;
        }
        get contentLost() {
          return (
            this.contentDOM &&
            this.contentDOM != this.dom &&
            !this.dom.contains(this.contentDOM)
          );
        }
        markDirty(e, t) {
          for (let n = 0, o = 0; o < this.children.length; o++) {
            let i = this.children[o],
              s = n + i.size;
            if (n == s ? e <= s && t >= n : e < s && t > n) {
              let o = n + i.border,
                r = s - i.border;
              if (e >= o && t <= r) {
                (this.dirty = e == n || t == s ? 2 : 1),
                  e == o &&
                  t == r &&
                  (i.contentLost || i.dom.parentNode != this.contentDOM)
                    ? (i.dirty = 3)
                    : i.markDirty(e - o, t - o);
                return;
              }
              i.dirty =
                i.dom != i.contentDOM ||
                i.dom.parentNode != this.contentDOM ||
                i.children.length
                  ? 3
                  : 2;
            }
            n = s;
          }
          this.dirty = 2;
        }
        markParentsDirty() {
          let e = 1;
          for (let t = this.parent; t; t = t.parent, e++) {
            let n = 1 == e ? 2 : 1;
            t.dirty < n && (t.dirty = n);
          }
        }
        get domAtom() {
          return !1;
        }
        get ignoreForCoords() {
          return !1;
        }
      }
      class ee extends Z {
        constructor(e, t, n, o) {
          let i,
            s = t.type.toDOM;
          if (
            ('function' == typeof s &&
              (s = s(n, () =>
                i ? (i.parent ? i.parent.posBeforeChild(i) : void 0) : o
              )),
            !t.type.spec.raw)
          ) {
            if (1 != s.nodeType) {
              let e = document.createElement('span');
              e.appendChild(s), (s = e);
            }
            (s.contentEditable = 'false'),
              s.classList.add('ProseMirror-widget');
          }
          super(e, [], s, null),
            (this.widget = t),
            (this.widget = t),
            (i = this);
        }
        matchesWidget(e) {
          return 0 == this.dirty && e.type.eq(this.widget.type);
        }
        parseRule() {
          return { ignore: !0 };
        }
        stopEvent(e) {
          let t = this.widget.spec.stopEvent;
          return !!t && t(e);
        }
        ignoreMutation(e) {
          return 'selection' != e.type || this.widget.spec.ignoreSelection;
        }
        destroy() {
          this.widget.type.destroy(this.dom), super.destroy();
        }
        get domAtom() {
          return !0;
        }
        get side() {
          return this.widget.type.side;
        }
      }
      class et extends Z {
        constructor(e, t, n, o) {
          super(e, [], t, null), (this.textDOM = n), (this.text = o);
        }
        get size() {
          return this.text.length;
        }
        localPosFromDOM(e, t) {
          return e != this.textDOM
            ? this.posAtStart + (t ? this.size : 0)
            : this.posAtStart + t;
        }
        domFromPos(e) {
          return { node: this.textDOM, offset: e };
        }
        ignoreMutation(e) {
          return 'characterData' === e.type && e.target.nodeValue == e.oldValue;
        }
      }
      class en extends Z {
        constructor(e, t, n, o) {
          super(e, [], n, o), (this.mark = t);
        }
        static create(e, t, n, o) {
          let s = o.nodeViews[t.type.name],
            r = s && s(t, o, n);
          return (
            (r && r.dom) ||
              (r = i.PW.renderSpec(document, t.type.spec.toDOM(t, n))),
            new en(e, t, r.dom, r.contentDOM || r.dom)
          );
        }
        parseRule() {
          return 3 & this.dirty || this.mark.type.spec.reparseInView
            ? null
            : {
                mark: this.mark.type.name,
                attrs: this.mark.attrs,
                contentElement: this.contentDOM,
              };
        }
        matchesMark(e) {
          return 3 != this.dirty && this.mark.eq(e);
        }
        markDirty(e, t) {
          if ((super.markDirty(e, t), 0 != this.dirty)) {
            let e = this.parent;
            for (; !e.node; ) e = e.parent;
            e.dirty < this.dirty && (e.dirty = this.dirty), (this.dirty = 0);
          }
        }
        slice(e, t, n) {
          let o = en.create(this.parent, this.mark, !0, n),
            i = this.children,
            s = this.size;
          t < s && (i = ey(i, t, s, n)), e > 0 && (i = ey(i, 0, e, n));
          for (let e = 0; e < i.length; e++) i[e].parent = o;
          return (o.children = i), o;
        }
      }
      class eo extends Z {
        constructor(e, t, n, o, i, s, r, l, d) {
          super(e, [], i, s),
            (this.node = t),
            (this.outerDeco = n),
            (this.innerDeco = o),
            (this.nodeDOM = r);
        }
        static create(e, t, n, o, s, r) {
          let l = s.nodeViews[t.type.name],
            d,
            a =
              l &&
              l(
                t,
                s,
                () =>
                  d ? (d.parent ? d.parent.posBeforeChild(d) : void 0) : r,
                n,
                o
              ),
            c = a && a.dom,
            h = a && a.contentDOM;
          if (t.isText) {
            if (c) {
              if (3 != c.nodeType)
                throw RangeError('Text must be rendered as a DOM text node');
            } else c = document.createTextNode(t.text);
          } else
            c ||
              ({ dom: c, contentDOM: h } = i.PW.renderSpec(
                document,
                t.type.spec.toDOM(t)
              ));
          h ||
            t.isText ||
            'BR' == c.nodeName ||
            (c.hasAttribute('contenteditable') || (c.contentEditable = 'false'),
            t.type.spec.draggable && (c.draggable = !0));
          let u = c;
          return ((c = eu(c, n, t)), a)
            ? (d = new el(e, t, n, o, c, h || null, u, a, s, r + 1))
            : t.isText
              ? new es(e, t, n, o, c, u, s)
              : new eo(e, t, n, o, c, h || null, u, s, r + 1);
        }
        parseRule() {
          if (this.node.type.spec.reparseInView) return null;
          let e = { node: this.node.type.name, attrs: this.node.attrs };
          if (
            ('pre' == this.node.type.whitespace &&
              (e.preserveWhitespace = 'full'),
            this.contentDOM)
          ) {
            if (this.contentLost) {
              for (let t = this.children.length - 1; t >= 0; t--) {
                let n = this.children[t];
                if (this.dom.contains(n.dom.parentNode)) {
                  e.contentElement = n.dom.parentNode;
                  break;
                }
              }
              e.contentElement || (e.getContent = () => i.HY.empty);
            } else e.contentElement = this.contentDOM;
          } else e.getContent = () => this.node.content;
          return e;
        }
        matchesNode(e, t, n) {
          return (
            0 == this.dirty &&
            e.eq(this.node) &&
            ef(t, this.outerDeco) &&
            n.eq(this.innerDeco)
          );
        }
        get size() {
          return this.node.nodeSize;
        }
        get border() {
          return this.node.isLeaf ? 0 : 1;
        }
        updateChildren(e, t) {
          let n = this.node.inlineContent,
            o = t,
            s = e.composing ? this.localCompositionInfo(e, t) : null,
            r = s && s.pos > -1 ? s : null,
            l = s && s.pos < 0,
            d = new em(this, r && r.node, e);
          (function (e, t, n, o) {
            let i = t.locals(e),
              s = 0;
            if (0 == i.length) {
              for (let n = 0; n < e.childCount; n++) {
                let r = e.child(n);
                o(r, i, t.forChild(s, r), n), (s += r.nodeSize);
              }
              return;
            }
            let r = 0,
              l = [],
              d = null;
            for (let a = 0; ; ) {
              let c, h, u, f;
              for (; r < i.length && i[r].to == s; ) {
                let e = i[r++];
                e.widget && (c ? (h || (h = [c])).push(e) : (c = e));
              }
              if (c) {
                if (h) {
                  h.sort(eg);
                  for (let e = 0; e < h.length; e++) n(h[e], a, !!d);
                } else n(c, a, !!d);
              }
              if (d) (f = -1), (u = d), (d = null);
              else if (a < e.childCount) (f = a), (u = e.child(a++));
              else break;
              for (let e = 0; e < l.length; e++)
                l[e].to <= s && l.splice(e--, 1);
              for (; r < i.length && i[r].from <= s && i[r].to > s; )
                l.push(i[r++]);
              let p = s + u.nodeSize;
              if (u.isText) {
                let e = p;
                r < i.length && i[r].from < e && (e = i[r].from);
                for (let t = 0; t < l.length; t++) l[t].to < e && (e = l[t].to);
                e < p &&
                  ((d = u.cut(e - s)),
                  (u = u.cut(0, e - s)),
                  (p = e),
                  (f = -1));
              } else for (; r < i.length && i[r].to < p; ) r++;
              let m =
                u.isInline && !u.isLeaf ? l.filter(e => !e.inline) : l.slice();
              o(u, m, t.forChild(s, u), f), (s = p);
            }
          })(
            this.node,
            this.innerDeco,
            (t, s, r) => {
              t.spec.marks
                ? d.syncToMarks(t.spec.marks, n, e)
                : t.type.side >= 0 &&
                  !r &&
                  d.syncToMarks(
                    s == this.node.childCount
                      ? i.vc.none
                      : this.node.child(s).marks,
                    n,
                    e
                  ),
                d.placeWidget(t, e, o);
            },
            (t, i, r, a) => {
              let c;
              d.syncToMarks(t.marks, n, e),
                d.findNodeMatch(t, i, r, a) ||
                  (l &&
                    e.state.selection.from > o &&
                    e.state.selection.to < o + t.nodeSize &&
                    (c = d.findIndexWithChild(s.node)) > -1 &&
                    d.updateNodeAt(t, i, r, c, e)) ||
                  d.updateNextNode(t, i, r, e, a, o) ||
                  d.addNode(t, i, r, e, o),
                (o += t.nodeSize);
            }
          ),
            d.syncToMarks([], n, e),
            this.node.isTextblock && d.addTextblockHacks(),
            d.destroyRest(),
            (d.changed || 2 == this.dirty) &&
              (r && this.protectLocalComposition(e, r),
              (function e(t, n, o) {
                let i = t.firstChild,
                  s = !1;
                for (let r = 0; r < n.length; r++) {
                  let l = n[r],
                    d = l.dom;
                  if (d.parentNode == t) {
                    for (; d != i; ) (i = ep(i)), (s = !0);
                    i = i.nextSibling;
                  } else (s = !0), t.insertBefore(d, i);
                  if (l instanceof en) {
                    let n = i ? i.previousSibling : t.lastChild;
                    e(l.contentDOM, l.children, o),
                      (i = n ? n.nextSibling : t.firstChild);
                  }
                }
                for (; i; ) (i = ep(i)), (s = !0);
                s && o.trackWrites == t && (o.trackWrites = null);
              })(this.contentDOM, this.children, e),
              E &&
                (function (e) {
                  if ('UL' == e.nodeName || 'OL' == e.nodeName) {
                    let t = e.style.cssText;
                    (e.style.cssText = t + '; list-style: square !important'),
                      window.getComputedStyle(e).listStyle,
                      (e.style.cssText = t);
                  }
                })(this.dom));
        }
        localCompositionInfo(e, t) {
          let { from: n, to: i } = e.state.selection;
          if (
            !(e.state.selection instanceof o.Bs) ||
            n < t ||
            i > t + this.node.content.size
          )
            return null;
          let s = e.domSelectionRange(),
            r = (function (e, t) {
              for (;;) {
                if (3 == e.nodeType) return e;
                if (1 == e.nodeType && t > 0) {
                  if (e.childNodes.length > t && 3 == e.childNodes[t].nodeType)
                    return e.childNodes[t];
                  t = f((e = e.childNodes[t - 1]));
                } else {
                  if (1 != e.nodeType || !(t < e.childNodes.length))
                    return null;
                  (e = e.childNodes[t]), (t = 0);
                }
              }
            })(s.focusNode, s.focusOffset);
          if (!r || !this.dom.contains(r.parentNode)) return null;
          if (!this.node.inlineContent) return { node: r, pos: -1, text: '' };
          {
            let e = r.nodeValue,
              o = (function (e, t, n, o) {
                for (let i = 0, s = 0; i < e.childCount && s <= o; ) {
                  let r = e.child(i++),
                    l = s;
                  if (((s += r.nodeSize), !r.isText)) continue;
                  let d = r.text;
                  for (; i < e.childCount; ) {
                    let t = e.child(i++);
                    if (((s += t.nodeSize), !t.isText)) break;
                    d += t.text;
                  }
                  if (s >= n) {
                    if (s >= o && d.slice(o - t.length - l, o - l) == t)
                      return o - t.length;
                    let e = l < o ? d.lastIndexOf(t, o - l - 1) : -1;
                    if (e >= 0 && e + t.length + l >= n) return l + e;
                    if (
                      n == o &&
                      d.length >= o + t.length - l &&
                      d.slice(o - l, o - l + t.length) == t
                    )
                      return o;
                  }
                }
                return -1;
              })(this.node.content, e, n - t, i - t);
            return o < 0 ? null : { node: r, pos: o, text: e };
          }
        }
        protectLocalComposition(e, { node: t, pos: n, text: o }) {
          if (this.getDesc(t)) return;
          let i = t;
          for (; i.parentNode != this.contentDOM; i = i.parentNode) {
            for (; i.previousSibling; )
              i.parentNode.removeChild(i.previousSibling);
            for (; i.nextSibling; ) i.parentNode.removeChild(i.nextSibling);
            i.pmViewDesc && (i.pmViewDesc = void 0);
          }
          let s = new et(this, i, t, o);
          e.input.compositionNodes.push(s),
            (this.children = ey(this.children, n, n + o.length, e, s));
        }
        update(e, t, n, o) {
          return (
            !!(3 != this.dirty && e.sameMarkup(this.node)) &&
            (this.updateInner(e, t, n, o), !0)
          );
        }
        updateInner(e, t, n, o) {
          this.updateOuterDeco(t),
            (this.node = e),
            (this.innerDeco = n),
            this.contentDOM && this.updateChildren(o, this.posAtStart),
            (this.dirty = 0);
        }
        updateOuterDeco(e) {
          if (ef(e, this.outerDeco)) return;
          let t = 1 != this.nodeDOM.nodeType,
            n = this.dom;
          (this.dom = eh(
            this.dom,
            this.nodeDOM,
            ec(this.outerDeco, this.node, t),
            ec(e, this.node, t)
          )),
            this.dom != n &&
              ((n.pmViewDesc = void 0), (this.dom.pmViewDesc = this)),
            (this.outerDeco = e);
        }
        selectNode() {
          1 == this.nodeDOM.nodeType &&
            this.nodeDOM.classList.add('ProseMirror-selectednode'),
            (this.contentDOM || !this.node.type.spec.draggable) &&
              (this.dom.draggable = !0);
        }
        deselectNode() {
          1 == this.nodeDOM.nodeType &&
            this.nodeDOM.classList.remove('ProseMirror-selectednode'),
            (this.contentDOM || !this.node.type.spec.draggable) &&
              this.dom.removeAttribute('draggable');
        }
        get domAtom() {
          return this.node.isAtom;
        }
      }
      function ei(e, t, n, o, i) {
        eu(o, t, e);
        let s = new eo(void 0, e, t, n, o, o, o, i, 0);
        return s.contentDOM && s.updateChildren(i, 0), s;
      }
      class es extends eo {
        constructor(e, t, n, o, i, s, r) {
          super(e, t, n, o, i, null, s, r, 0);
        }
        parseRule() {
          let e = this.nodeDOM.parentNode;
          for (; e && e != this.dom && !e.pmIsDeco; ) e = e.parentNode;
          return { skip: e || !0 };
        }
        update(e, t, n, o) {
          return (
            !!(
              3 != this.dirty &&
              (0 == this.dirty || this.inParent()) &&
              e.sameMarkup(this.node)
            ) &&
            (this.updateOuterDeco(t),
            (0 != this.dirty || e.text != this.node.text) &&
              e.text != this.nodeDOM.nodeValue &&
              ((this.nodeDOM.nodeValue = e.text),
              o.trackWrites == this.nodeDOM && (o.trackWrites = null)),
            (this.node = e),
            (this.dirty = 0),
            !0)
          );
        }
        inParent() {
          let e = this.parent.contentDOM;
          for (let t = this.nodeDOM; t; t = t.parentNode) if (t == e) return !0;
          return !1;
        }
        domFromPos(e) {
          return { node: this.nodeDOM, offset: e };
        }
        localPosFromDOM(e, t, n) {
          return e == this.nodeDOM
            ? this.posAtStart + Math.min(t, this.node.text.length)
            : super.localPosFromDOM(e, t, n);
        }
        ignoreMutation(e) {
          return 'characterData' != e.type && 'selection' != e.type;
        }
        slice(e, t, n) {
          let o = this.node.cut(e, t),
            i = document.createTextNode(o.text);
          return new es(
            this.parent,
            o,
            this.outerDeco,
            this.innerDeco,
            i,
            i,
            n
          );
        }
        markDirty(e, t) {
          super.markDirty(e, t),
            this.dom != this.nodeDOM &&
              (0 == e || t == this.nodeDOM.nodeValue.length) &&
              (this.dirty = 3);
        }
        get domAtom() {
          return !1;
        }
      }
      class er extends Z {
        parseRule() {
          return { ignore: !0 };
        }
        matchesHack(e) {
          return 0 == this.dirty && this.dom.nodeName == e;
        }
        get domAtom() {
          return !0;
        }
        get ignoreForCoords() {
          return 'IMG' == this.dom.nodeName;
        }
      }
      class el extends eo {
        constructor(e, t, n, o, i, s, r, l, d, a) {
          super(e, t, n, o, i, s, r, d, a), (this.spec = l);
        }
        update(e, t, n, o) {
          if (3 == this.dirty) return !1;
          if (this.spec.update) {
            let i = this.spec.update(e, t, n);
            return i && this.updateInner(e, t, n, o), i;
          }
          return (!!this.contentDOM || !!e.isLeaf) && super.update(e, t, n, o);
        }
        selectNode() {
          this.spec.selectNode ? this.spec.selectNode() : super.selectNode();
        }
        deselectNode() {
          this.spec.deselectNode
            ? this.spec.deselectNode()
            : super.deselectNode();
        }
        setSelection(e, t, n, o) {
          this.spec.setSelection
            ? this.spec.setSelection(e, t, n)
            : super.setSelection(e, t, n, o);
        }
        destroy() {
          this.spec.destroy && this.spec.destroy(), super.destroy();
        }
        stopEvent(e) {
          return !!this.spec.stopEvent && this.spec.stopEvent(e);
        }
        ignoreMutation(e) {
          return this.spec.ignoreMutation
            ? this.spec.ignoreMutation(e)
            : super.ignoreMutation(e);
        }
      }
      let ed = function (e) {
        e && (this.nodeName = e);
      };
      ed.prototype = Object.create(null);
      let ea = [new ed()];
      function ec(e, t, n) {
        if (0 == e.length) return ea;
        let o = n ? ea[0] : new ed(),
          i = [o];
        for (let s = 0; s < e.length; s++) {
          let r = e[s].type.attrs;
          if (r)
            for (let e in (r.nodeName && i.push((o = new ed(r.nodeName))), r)) {
              let s = r[e];
              null != s &&
                (n &&
                  1 == i.length &&
                  i.push((o = new ed(t.isInline ? 'span' : 'div'))),
                'class' == e
                  ? (o.class = (o.class ? o.class + ' ' : '') + s)
                  : 'style' == e
                    ? (o.style = (o.style ? o.style + ';' : '') + s)
                    : 'nodeName' != e && (o[e] = s));
            }
        }
        return i;
      }
      function eh(e, t, n, o) {
        if (n == ea && o == ea) return t;
        let i = t;
        for (let t = 0; t < o.length; t++) {
          let s = o[t],
            r = n[t];
          if (t) {
            let t;
            (r &&
              r.nodeName == s.nodeName &&
              i != e &&
              (t = i.parentNode) &&
              t.nodeName.toLowerCase() == s.nodeName) ||
              (((t = document.createElement(s.nodeName)).pmIsDeco = !0),
              t.appendChild(i),
              (r = ea[0])),
              (i = t);
          }
          !(function (e, t, n) {
            for (let o in t)
              'class' == o ||
                'style' == o ||
                'nodeName' == o ||
                o in n ||
                e.removeAttribute(o);
            for (let o in n)
              'class' != o &&
                'style' != o &&
                'nodeName' != o &&
                n[o] != t[o] &&
                e.setAttribute(o, n[o]);
            if (t.class != n.class) {
              let o = t.class ? t.class.split(' ').filter(Boolean) : [],
                i = n.class ? n.class.split(' ').filter(Boolean) : [];
              for (let t = 0; t < o.length; t++)
                -1 == i.indexOf(o[t]) && e.classList.remove(o[t]);
              for (let t = 0; t < i.length; t++)
                -1 == o.indexOf(i[t]) && e.classList.add(i[t]);
              0 == e.classList.length && e.removeAttribute('class');
            }
            if (t.style != n.style) {
              if (t.style) {
                let n =
                    /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g,
                  o;
                for (; (o = n.exec(t.style)); ) e.style.removeProperty(o[1]);
              }
              n.style && (e.style.cssText += n.style);
            }
          })(i, r || ea[0], s);
        }
        return i;
      }
      function eu(e, t, n) {
        return eh(e, e, ea, ec(t, n, 1 != e.nodeType));
      }
      function ef(e, t) {
        if (e.length != t.length) return !1;
        for (let n = 0; n < e.length; n++)
          if (!e[n].type.eq(t[n].type)) return !1;
        return !0;
      }
      function ep(e) {
        let t = e.nextSibling;
        return e.parentNode.removeChild(e), t;
      }
      class em {
        constructor(e, t, n) {
          (this.lock = t),
            (this.view = n),
            (this.index = 0),
            (this.stack = []),
            (this.changed = !1),
            (this.top = e),
            (this.preMatch = (function (e, t) {
              let n = t,
                o = n.children.length,
                i = e.childCount,
                s = new Map(),
                r = [];
              e: for (; i > 0; ) {
                let l;
                for (;;)
                  if (o) {
                    let e = n.children[o - 1];
                    if (e instanceof en) (n = e), (o = e.children.length);
                    else {
                      (l = e), o--;
                      break;
                    }
                  } else if (n == t) break e;
                  else (o = n.parent.children.indexOf(n)), (n = n.parent);
                let d = l.node;
                if (d) {
                  if (d != e.child(i - 1)) break;
                  --i, s.set(l, i), r.push(l);
                }
              }
              return { index: i, matched: s, matches: r.reverse() };
            })(e.node.content, e));
        }
        destroyBetween(e, t) {
          if (e != t) {
            for (let n = e; n < t; n++) this.top.children[n].destroy();
            this.top.children.splice(e, t - e), (this.changed = !0);
          }
        }
        destroyRest() {
          this.destroyBetween(this.index, this.top.children.length);
        }
        syncToMarks(e, t, n) {
          let o = 0,
            i = this.stack.length >> 1,
            s = Math.min(i, e.length);
          for (
            ;
            o < s &&
            (o == i - 1 ? this.top : this.stack[(o + 1) << 1]).matchesMark(
              e[o]
            ) &&
            !1 !== e[o].type.spec.spanning;

          )
            o++;
          for (; o < i; )
            this.destroyRest(),
              (this.top.dirty = 0),
              (this.index = this.stack.pop()),
              (this.top = this.stack.pop()),
              i--;
          for (; i < e.length; ) {
            this.stack.push(this.top, this.index + 1);
            let o = -1;
            for (
              let t = this.index;
              t < Math.min(this.index + 3, this.top.children.length);
              t++
            ) {
              let n = this.top.children[t];
              if (n.matchesMark(e[i]) && !this.isLocked(n.dom)) {
                o = t;
                break;
              }
            }
            if (o > -1)
              o > this.index &&
                ((this.changed = !0), this.destroyBetween(this.index, o)),
                (this.top = this.top.children[this.index]);
            else {
              let o = en.create(this.top, e[i], t, n);
              this.top.children.splice(this.index, 0, o),
                (this.top = o),
                (this.changed = !0);
            }
            (this.index = 0), i++;
          }
        }
        findNodeMatch(e, t, n, o) {
          let i = -1,
            s;
          if (
            o >= this.preMatch.index &&
            (s = this.preMatch.matches[o - this.preMatch.index]).parent ==
              this.top &&
            s.matchesNode(e, t, n)
          )
            i = this.top.children.indexOf(s, this.index);
          else
            for (
              let o = this.index, s = Math.min(this.top.children.length, o + 5);
              o < s;
              o++
            ) {
              let s = this.top.children[o];
              if (s.matchesNode(e, t, n) && !this.preMatch.matched.has(s)) {
                i = o;
                break;
              }
            }
          return (
            !(i < 0) && (this.destroyBetween(this.index, i), this.index++, !0)
          );
        }
        updateNodeAt(e, t, n, o, i) {
          let s = this.top.children[o];
          return (
            3 == s.dirty && s.dom == s.contentDOM && (s.dirty = 2),
            !!s.update(e, t, n, i) &&
              (this.destroyBetween(this.index, o), this.index++, !0)
          );
        }
        findIndexWithChild(e) {
          for (;;) {
            let t = e.parentNode;
            if (!t) return -1;
            if (t == this.top.contentDOM) {
              let t = e.pmViewDesc;
              if (t) {
                for (let e = this.index; e < this.top.children.length; e++)
                  if (this.top.children[e] == t) return e;
              }
              return -1;
            }
            e = t;
          }
        }
        updateNextNode(e, t, n, o, i, s) {
          for (let r = this.index; r < this.top.children.length; r++) {
            let l = this.top.children[r];
            if (l instanceof eo) {
              let d = this.preMatch.matched.get(l);
              if (null != d && d != i) return !1;
              let a = l.dom,
                c,
                h =
                  this.isLocked(a) &&
                  !(
                    e.isText &&
                    l.node &&
                    l.node.isText &&
                    l.nodeDOM.nodeValue == e.text &&
                    3 != l.dirty &&
                    ef(t, l.outerDeco)
                  );
              if (!h && l.update(e, t, n, o))
                return (
                  this.destroyBetween(this.index, r),
                  l.dom != a && (this.changed = !0),
                  this.index++,
                  !0
                );
              if (!h && (c = this.recreateWrapper(l, e, t, n, o, s)))
                return (
                  (this.top.children[this.index] = c),
                  c.contentDOM &&
                    ((c.dirty = 2), c.updateChildren(o, s + 1), (c.dirty = 0)),
                  (this.changed = !0),
                  this.index++,
                  !0
                );
              break;
            }
          }
          return !1;
        }
        recreateWrapper(e, t, n, o, i, s) {
          if (
            e.dirty ||
            t.isAtom ||
            !e.children.length ||
            !e.node.content.eq(t.content)
          )
            return null;
          let r = eo.create(this.top, t, n, o, i, s);
          if (r.contentDOM)
            for (let t of ((r.children = e.children),
            (e.children = []),
            r.children))
              t.parent = r;
          return e.destroy(), r;
        }
        addNode(e, t, n, o, i) {
          let s = eo.create(this.top, e, t, n, o, i);
          s.contentDOM && s.updateChildren(o, i + 1),
            this.top.children.splice(this.index++, 0, s),
            (this.changed = !0);
        }
        placeWidget(e, t, n) {
          let o =
            this.index < this.top.children.length
              ? this.top.children[this.index]
              : null;
          if (
            o &&
            o.matchesWidget(e) &&
            (e == o.widget || !o.widget.type.toDOM.parentNode)
          )
            this.index++;
          else {
            let o = new ee(this.top, e, t, n);
            this.top.children.splice(this.index++, 0, o), (this.changed = !0);
          }
        }
        addTextblockHacks() {
          let e = this.top.children[this.index - 1],
            t = this.top;
          for (; e instanceof en; ) e = (t = e).children[t.children.length - 1];
          (!e ||
            !(e instanceof es) ||
            /\n$/.test(e.node.text) ||
            (this.view.requiresGeckoHackNode && /\s$/.test(e.node.text))) &&
            ((T || x) &&
              e &&
              'false' == e.dom.contentEditable &&
              this.addHackNode('IMG', t),
            this.addHackNode('BR', this.top));
        }
        addHackNode(e, t) {
          if (
            t == this.top &&
            this.index < t.children.length &&
            t.children[this.index].matchesHack(e)
          )
            this.index++;
          else {
            let n = document.createElement(e);
            'IMG' == e &&
              ((n.className = 'ProseMirror-separator'), (n.alt = '')),
              'BR' == e && (n.className = 'ProseMirror-trailingBreak');
            let o = new er(this.top, [], n, null);
            t != this.top
              ? t.children.push(o)
              : t.children.splice(this.index++, 0, o),
              (this.changed = !0);
          }
        }
        isLocked(e) {
          return (
            this.lock &&
            (e == this.lock ||
              (1 == e.nodeType && e.contains(this.lock.parentNode)))
          );
        }
      }
      function eg(e, t) {
        return e.type.side - t.type.side;
      }
      function ey(e, t, n, o, i) {
        let s = [];
        for (let r = 0, l = 0; r < e.length; r++) {
          let d = e[r],
            a = l,
            c = (l += d.size);
          a >= n || c <= t
            ? s.push(d)
            : (a < t && s.push(d.slice(0, t - a, o)),
              i && (s.push(i), (i = void 0)),
              c > n && s.push(d.slice(n - a, d.size, o)));
        }
        return s;
      }
      function eb(e, t = null) {
        let n = e.domSelectionRange(),
          i = e.state.doc;
        if (!n.focusNode) return null;
        let s = e.docView.nearestDesc(n.focusNode),
          l = s && 0 == s.size,
          d = e.docView.posFromDOM(n.focusNode, n.focusOffset, 1);
        if (d < 0) return null;
        let a = i.resolve(d),
          c,
          h;
        if (m(n)) {
          for (c = a; s && !s.node; ) s = s.parent;
          let e = s.node;
          if (
            s &&
            e.isAtom &&
            o.qv.isSelectable(e) &&
            s.parent &&
            !(
              e.isInline &&
              (function (e, t, n) {
                for (let o = 0 == t, i = t == f(e); o || i; ) {
                  if (e == n) return !0;
                  let t = r(e);
                  if (!(e = e.parentNode)) return !1;
                  (o = o && 0 == t), (i = i && t == f(e));
                }
              })(n.focusNode, n.focusOffset, s.dom)
            )
          ) {
            let e = s.posBefore;
            h = new o.qv(d == e ? a : i.resolve(e));
          }
        } else {
          let t = e.docView.posFromDOM(n.anchorNode, n.anchorOffset, 1);
          if (t < 0) return null;
          c = i.resolve(t);
        }
        if (!h) {
          let n =
            'pointer' == t || (e.state.selection.head < a.pos && !l) ? 1 : -1;
          h = ex(e, c, a, n);
        }
        return h;
      }
      function ev(e) {
        return e.editable
          ? e.hasFocus()
          : eT(e) &&
              document.activeElement &&
              document.activeElement.contains(e.dom);
      }
      function ew(e, t = !1) {
        let n = e.state.selection;
        if ((eC(e, n), ev(e))) {
          if (!t && e.input.mouseDown && e.input.mouseDown.allowDefault && x) {
            let t = e.domSelectionRange(),
              n = e.domObserver.currentSelection;
            if (
              t.anchorNode &&
              n.anchorNode &&
              c(t.anchorNode, t.anchorOffset, n.anchorNode, n.anchorOffset)
            ) {
              (e.input.mouseDown.delayedSelectionSync = !0),
                e.domObserver.setCurSelection();
              return;
            }
          }
          if ((e.domObserver.disconnectSelection(), e.cursorWrapper)) {
            let t, n, o, i;
            (t = e.domSelection()),
              (n = document.createRange()),
              (i = 'IMG' == (o = e.cursorWrapper.dom).nodeName)
                ? n.setEnd(o.parentNode, r(o) + 1)
                : n.setEnd(o, 0),
              n.collapse(!1),
              t.removeAllRanges(),
              t.addRange(n),
              !i &&
                !e.state.selection.visible &&
                O &&
                S <= 11 &&
                ((o.disabled = !0), (o.disabled = !1));
          } else {
            let i,
              s,
              r,
              l,
              { anchor: d, head: a } = n,
              c,
              h;
            !eD ||
              n instanceof o.Bs ||
              (n.$from.parent.inlineContent || (c = eN(e, n.from)),
              n.empty || n.$from.parent.inlineContent || (h = eN(e, n.to))),
              e.docView.setSelection(d, a, e.root, t),
              eD && (c && eS(c), h && eS(h)),
              n.visible
                ? e.dom.classList.remove('ProseMirror-hideselection')
                : (e.dom.classList.add('ProseMirror-hideselection'),
                  'onselectionchange' in document &&
                    ((i = e.dom.ownerDocument).removeEventListener(
                      'selectionchange',
                      e.input.hideSelectionGuard
                    ),
                    (r = (s = e.domSelectionRange()).anchorNode),
                    (l = s.anchorOffset),
                    i.addEventListener(
                      'selectionchange',
                      (e.input.hideSelectionGuard = () => {
                        (s.anchorNode != r || s.anchorOffset != l) &&
                          (i.removeEventListener(
                            'selectionchange',
                            e.input.hideSelectionGuard
                          ),
                          setTimeout(() => {
                            (!ev(e) || e.state.selection.visible) &&
                              e.dom.classList.remove(
                                'ProseMirror-hideselection'
                              );
                          }, 20));
                      })
                    )));
          }
          e.domObserver.setCurSelection(), e.domObserver.connectSelection();
        }
      }
      let eD = T || (x && k < 63);
      function eN(e, t) {
        let { node: n, offset: o } = e.docView.domFromPos(t, 0),
          i = o < n.childNodes.length ? n.childNodes[o] : null,
          s = o ? n.childNodes[o - 1] : null;
        if (T && i && 'false' == i.contentEditable) return eO(i);
        if (
          (!i || 'false' == i.contentEditable) &&
          (!s || 'false' == s.contentEditable)
        ) {
          if (i) return eO(i);
          if (s) return eO(s);
        }
      }
      function eO(e) {
        return (
          (e.contentEditable = 'true'),
          T && e.draggable && ((e.draggable = !1), (e.wasDraggable = !0)),
          e
        );
      }
      function eS(e) {
        (e.contentEditable = 'false'),
          e.wasDraggable && ((e.draggable = !0), (e.wasDraggable = null));
      }
      function eC(e, t) {
        if (t instanceof o.qv) {
          let n = e.docView.descAt(t.from);
          n != e.lastSelectedViewDesc &&
            (eM(e), n && n.selectNode(), (e.lastSelectedViewDesc = n));
        } else eM(e);
      }
      function eM(e) {
        e.lastSelectedViewDesc &&
          (e.lastSelectedViewDesc.parent &&
            e.lastSelectedViewDesc.deselectNode(),
          (e.lastSelectedViewDesc = void 0));
      }
      function ex(e, t, n, i) {
        return (
          e.someProp('createSelectionBetween', o => o(e, t, n)) ||
          o.Bs.between(t, n, i)
        );
      }
      function ek(e) {
        return (!e.editable || !!e.hasFocus()) && eT(e);
      }
      function eT(e) {
        let t = e.domSelectionRange();
        if (!t.anchorNode) return !1;
        try {
          return (
            e.dom.contains(
              3 == t.anchorNode.nodeType
                ? t.anchorNode.parentNode
                : t.anchorNode
            ) &&
            (e.editable ||
              e.dom.contains(
                3 == t.focusNode.nodeType ? t.focusNode.parentNode : t.focusNode
              ))
          );
        } catch (e) {
          return !1;
        }
      }
      function eE(e, t) {
        let { $anchor: n, $head: i } = e.selection,
          s = t > 0 ? n.max(i) : n.min(i),
          r = s.parent.inlineContent
            ? s.depth
              ? e.doc.resolve(t > 0 ? s.after() : s.before())
              : null
            : s;
        return r && o.Y1.findFrom(r, t);
      }
      function eP(e, t) {
        return e.dispatch(e.state.tr.setSelection(t).scrollIntoView()), !0;
      }
      function eA(e, t, n) {
        let i = e.state.selection;
        if (i instanceof o.Bs) {
          if (n.indexOf('s') > -1) {
            let { $head: n } = i,
              s = n.textOffset ? null : t < 0 ? n.nodeBefore : n.nodeAfter;
            if (!s || s.isText || !s.isLeaf) return !1;
            let r = e.state.doc.resolve(n.pos + s.nodeSize * (t < 0 ? -1 : 1));
            return eP(e, new o.Bs(i.$anchor, r));
          }
          if (!i.empty) return !1;
          if (e.endOfTextblock(t > 0 ? 'forward' : 'backward')) {
            let n = eE(e.state, t);
            return !!n && n instanceof o.qv && eP(e, n);
          }
          if (!(P && n.indexOf('m') > -1)) {
            let n = i.$head,
              s = n.textOffset ? null : t < 0 ? n.nodeBefore : n.nodeAfter,
              r;
            if (!s || s.isText) return !1;
            let l = t < 0 ? n.pos - s.nodeSize : n.pos;
            return (
              !!(s.isAtom || ((r = e.docView.descAt(l)) && !r.contentDOM)) &&
              (o.qv.isSelectable(s)
                ? eP(
                    e,
                    new o.qv(
                      t < 0 ? e.state.doc.resolve(n.pos - s.nodeSize) : n
                    )
                  )
                : !!R &&
                  eP(
                    e,
                    new o.Bs(e.state.doc.resolve(t < 0 ? l : l + s.nodeSize))
                  ))
            );
          }
        } else {
          if (i instanceof o.qv && i.node.isInline)
            return eP(e, new o.Bs(t > 0 ? i.$to : i.$from));
          let n = eE(e.state, t);
          return !!n && eP(e, n);
        }
      }
      function eV(e) {
        return 3 == e.nodeType ? e.nodeValue.length : e.childNodes.length;
      }
      function eR(e, t) {
        let n = e.pmViewDesc;
        return (
          n && 0 == n.size && (t < 0 || e.nextSibling || 'BR' != e.nodeName)
        );
      }
      function eB(e, t) {
        return t < 0
          ? (function (e) {
              let t = e.domSelectionRange(),
                n = t.focusNode,
                o = t.focusOffset;
              if (!n) return;
              let i,
                s,
                l = !1;
              for (
                C &&
                1 == n.nodeType &&
                o < eV(n) &&
                eR(n.childNodes[o], -1) &&
                (l = !0);
                ;

              )
                if (o > 0) {
                  if (1 != n.nodeType) break;
                  {
                    let e = n.childNodes[o - 1];
                    if (eR(e, -1)) (i = n), (s = --o);
                    else if (3 == e.nodeType) o = (n = e).nodeValue.length;
                    else break;
                  }
                } else if (eq(n)) break;
                else {
                  let t = n.previousSibling;
                  for (; t && eR(t, -1); )
                    (i = n.parentNode), (s = r(t)), (t = t.previousSibling);
                  if (t) o = eV((n = t));
                  else {
                    if ((n = n.parentNode) == e.dom) break;
                    o = 0;
                  }
                }
              l ? ez(e, n, o) : i && ez(e, i, s);
            })(e)
          : (function (e) {
              let t,
                n,
                o = e.domSelectionRange(),
                i = o.focusNode,
                s = o.focusOffset;
              if (!i) return;
              let l = eV(i);
              for (;;)
                if (s < l) {
                  if (1 != i.nodeType) break;
                  if (eR(i.childNodes[s], 1)) (t = i), (n = ++s);
                  else break;
                } else if (eq(i)) break;
                else {
                  let o = i.nextSibling;
                  for (; o && eR(o, 1); )
                    (t = o.parentNode), (n = r(o) + 1), (o = o.nextSibling);
                  if (o) (s = 0), (l = eV((i = o)));
                  else {
                    if ((i = i.parentNode) == e.dom) break;
                    s = l = 0;
                  }
                }
              t && ez(e, t, n);
            })(e);
      }
      function eq(e) {
        let t = e.pmViewDesc;
        return t && t.node && t.node.isBlock;
      }
      function ez(e, t, n) {
        if (3 != t.nodeType) {
          let e, o;
          (o = (function (e, t) {
            for (; e && t == e.childNodes.length && !p(e); )
              (t = r(e) + 1), (e = e.parentNode);
            for (; e && t < e.childNodes.length; ) {
              let n = e.childNodes[t];
              if (3 == n.nodeType) return n;
              if (1 == n.nodeType && 'false' == n.contentEditable) break;
              (e = n), (t = 0);
            }
          })(t, n))
            ? ((t = o), (n = 0))
            : (e = (function (e, t) {
                for (; e && !t && !p(e); ) (t = r(e)), (e = e.parentNode);
                for (; e && t; ) {
                  let n = e.childNodes[t - 1];
                  if (3 == n.nodeType) return n;
                  if (1 == n.nodeType && 'false' == n.contentEditable) break;
                  t = (e = n).childNodes.length;
                }
              })(t, n)) && ((t = e), (n = e.nodeValue.length));
        }
        let o = e.domSelection();
        if (m(o)) {
          let e = document.createRange();
          e.setEnd(t, n), e.setStart(t, n), o.removeAllRanges(), o.addRange(e);
        } else o.extend && o.extend(t, n);
        e.domObserver.setCurSelection();
        let { state: i } = e;
        setTimeout(() => {
          e.state == i && ew(e);
        }, 50);
      }
      function eI(e, t) {
        let n = e.state.doc.resolve(t);
        if (!(x || A) && n.parent.inlineContent) {
          let o = e.coordsAtPos(t);
          if (t > n.start()) {
            let n = e.coordsAtPos(t - 1),
              i = (n.top + n.bottom) / 2;
            if (i > o.top && i < o.bottom && Math.abs(n.left - o.left) > 1)
              return n.left < o.left ? 'ltr' : 'rtl';
          }
          if (t < n.end()) {
            let n = e.coordsAtPos(t + 1),
              i = (n.top + n.bottom) / 2;
            if (i > o.top && i < o.bottom && Math.abs(n.left - o.left) > 1)
              return n.left > o.left ? 'ltr' : 'rtl';
          }
        }
        return 'rtl' == getComputedStyle(e.dom).direction ? 'rtl' : 'ltr';
      }
      function eL(e, t, n) {
        let i = e.state.selection;
        if (
          (i instanceof o.Bs && !i.empty) ||
          n.indexOf('s') > -1 ||
          (P && n.indexOf('m') > -1)
        )
          return !1;
        let { $from: s, $to: r } = i;
        if (
          !s.parent.inlineContent ||
          e.endOfTextblock(t < 0 ? 'up' : 'down')
        ) {
          let n = eE(e.state, t);
          if (n && n instanceof o.qv) return eP(e, n);
        }
        if (!s.parent.inlineContent) {
          let n = t < 0 ? s : r,
            l = i instanceof o.C1 ? o.Y1.near(n, t) : o.Y1.findFrom(n, t);
          return !!l && eP(e, l);
        }
        return !1;
      }
      function eF(e, t) {
        if (!(e.state.selection instanceof o.Bs)) return !0;
        let { $head: n, $anchor: i, empty: s } = e.state.selection;
        if (!n.sameParent(i)) return !0;
        if (!s) return !1;
        if (e.endOfTextblock(t > 0 ? 'forward' : 'backward')) return !0;
        let r = !n.textOffset && (t < 0 ? n.nodeBefore : n.nodeAfter);
        if (r && !r.isText) {
          let o = e.state.tr;
          return (
            t < 0
              ? o.delete(n.pos - r.nodeSize, n.pos)
              : o.delete(n.pos, n.pos + r.nodeSize),
            e.dispatch(o),
            !0
          );
        }
        return !1;
      }
      function eK(e, t, n) {
        e.domObserver.stop(), (t.contentEditable = n), e.domObserver.start();
      }
      function eW(e, t) {
        e.someProp('transformCopied', n => {
          t = n(t, e);
        });
        let n = [],
          { content: o, openStart: s, openEnd: r } = t;
        for (
          ;
          s > 1 && r > 1 && 1 == o.childCount && 1 == o.firstChild.childCount;

        ) {
          s--, r--;
          let e = o.firstChild;
          n.push(e.type.name, e.attrs != e.type.defaultAttrs ? e.attrs : null),
            (o = e.content);
        }
        let l =
            e.someProp('clipboardSerializer') ||
            i.PW.fromSchema(e.state.schema),
          d = eX(),
          a = d.createElement('div');
        a.appendChild(l.serializeFragment(o, { document: d }));
        let c = a.firstChild,
          h,
          u = 0;
        for (; c && 1 == c.nodeType && (h = eU[c.nodeName.toLowerCase()]); ) {
          for (let e = h.length - 1; e >= 0; e--) {
            let t = d.createElement(h[e]);
            for (; a.firstChild; ) t.appendChild(a.firstChild);
            a.appendChild(t), u++;
          }
          c = a.firstChild;
        }
        return (
          c &&
            1 == c.nodeType &&
            c.setAttribute(
              'data-pm-slice',
              `${s} ${r}${u ? ` -${u}` : ''} ${JSON.stringify(n)}`
            ),
          {
            dom: a,
            text:
              e.someProp('clipboardTextSerializer', n => n(t, e)) ||
              t.content.textBetween(0, t.content.size, '\n\n'),
          }
        );
      }
      function e$(e, t, n, o, s) {
        let r,
          l,
          d = s.parent.type.spec.code;
        if (!n && !t) return null;
        let a = t && (o || d || !n);
        if (a) {
          if (
            (e.someProp('transformPastedText', n => {
              t = n(t, d || o, e);
            }),
            d)
          )
            return t
              ? new i.p2(
                  i.HY.from(e.state.schema.text(t.replace(/\r\n?/g, '\n'))),
                  0,
                  0
                )
              : i.p2.empty;
          let n = e.someProp('clipboardTextParser', n => n(t, s, o, e));
          if (n) l = n;
          else {
            let n = s.marks(),
              { schema: o } = e.state,
              l = i.PW.fromSchema(o);
            (r = document.createElement('div')),
              t.split(/(?:\r\n?|\n)+/).forEach(e => {
                let t = r.appendChild(document.createElement('p'));
                e && t.appendChild(l.serializeNode(o.text(e, n)));
              });
          }
        } else
          e.someProp('transformPastedHTML', t => {
            n = t(n, e);
          }),
            (r = (function (e) {
              let t = /^(\s*<meta [^>]*>)*/.exec(e);
              t && (e = e.slice(t[0].length));
              let n = eX().createElement('div'),
                o = /<([a-z][^>\s]+)/i.exec(e),
                i;
              if (
                ((i = o && eU[o[1].toLowerCase()]) &&
                  (e =
                    i.map(e => '<' + e + '>').join('') +
                    e +
                    i
                      .map(e => '</' + e + '>')
                      .reverse()
                      .join('')),
                (n.innerHTML = e),
                i)
              )
                for (let e = 0; e < i.length; e++)
                  n = n.querySelector(i[e]) || n;
              return n;
            })(n)),
            R &&
              (function (e) {
                let t = e.querySelectorAll(
                  x
                    ? 'span:not([class]):not([style])'
                    : 'span.Apple-converted-space'
                );
                for (let n = 0; n < t.length; n++) {
                  let o = t[n];
                  1 == o.childNodes.length &&
                    '\xa0' == o.textContent &&
                    o.parentNode &&
                    o.parentNode.replaceChild(
                      e.ownerDocument.createTextNode(' '),
                      o
                    );
                }
              })(r);
        let c = r && r.querySelector('[data-pm-slice]'),
          h =
            c &&
            /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(
              c.getAttribute('data-pm-slice') || ''
            );
        if (h && h[3])
          for (let e = +h[3]; e > 0; e--) {
            let e = r.firstChild;
            for (; e && 1 != e.nodeType; ) e = e.nextSibling;
            if (!e) break;
            r = e;
          }
        if (
          (l ||
            (l = (
              e.someProp('clipboardParser') ||
              e.someProp('domParser') ||
              i.aw.fromSchema(e.state.schema)
            ).parseSlice(r, {
              preserveWhitespace: !!(a || h),
              context: s,
              ruleFromNode: e =>
                'BR' != e.nodeName ||
                e.nextSibling ||
                !e.parentNode ||
                eH.test(e.parentNode.nodeName)
                  ? null
                  : { ignore: !0 },
            })),
          h)
        )
          l = (function (e, t) {
            if (!e.size) return e;
            let n = e.content.firstChild.type.schema,
              o;
            try {
              o = JSON.parse(t);
            } catch (t) {
              return e;
            }
            let { content: s, openStart: r, openEnd: l } = e;
            for (let e = o.length - 2; e >= 0; e -= 2) {
              let t = n.nodes[o[e]];
              if (!t || t.hasRequiredAttrs()) break;
              (s = i.HY.from(t.create(o[e + 1], s))), r++, l++;
            }
            return new i.p2(s, r, l);
          })(eG(l, +h[1], +h[2]), h[4]);
        else if (
          (l = i.p2.maxOpen(
            (function (e, t) {
              if (e.childCount < 2) return e;
              for (let n = t.depth; n >= 0; n--) {
                let o = t.node(n).contentMatchAt(t.index(n)),
                  s,
                  r = [];
                if (
                  (e.forEach(e => {
                    if (!r) return;
                    let t = o.findWrapping(e.type),
                      n;
                    if (!t) return (r = null);
                    if (
                      (n =
                        r.length &&
                        s.length &&
                        (function e(t, n, o, s, r) {
                          if (r < t.length && r < n.length && t[r] == n[r]) {
                            let l = e(t, n, o, s.lastChild, r + 1);
                            if (l)
                              return s.copy(
                                s.content.replaceChild(s.childCount - 1, l)
                              );
                            if (
                              s
                                .contentMatchAt(s.childCount)
                                .matchType(
                                  r == t.length - 1 ? o.type : t[r + 1]
                                )
                            )
                              return s.copy(
                                s.content.append(i.HY.from(e_(o, t, r + 1)))
                              );
                          }
                        })(t, s, e, r[r.length - 1], 0))
                    )
                      r[r.length - 1] = n;
                    else {
                      r.length &&
                        (r[r.length - 1] = (function e(t, n) {
                          if (0 == n) return t;
                          let o = t.content.replaceChild(
                              t.childCount - 1,
                              e(t.lastChild, n - 1)
                            ),
                            s = t
                              .contentMatchAt(t.childCount)
                              .fillBefore(i.HY.empty, !0);
                          return t.copy(o.append(s));
                        })(r[r.length - 1], s.length));
                      let n = e_(e, t);
                      r.push(n), (o = o.matchType(n.type)), (s = t);
                    }
                  }),
                  r)
                )
                  return i.HY.from(r);
              }
              return e;
            })(l.content, s),
            !0
          )).openStart ||
          l.openEnd
        ) {
          let e = 0,
            t = 0;
          for (
            let t = l.content.firstChild;
            e < l.openStart && !t.type.spec.isolating;
            e++, t = t.firstChild
          );
          for (
            let e = l.content.lastChild;
            t < l.openEnd && !e.type.spec.isolating;
            t++, e = e.lastChild
          );
          l = eG(l, e, t);
        }
        return (
          e.someProp('transformPasted', t => {
            l = t(l, e);
          }),
          l
        );
      }
      let eH =
        /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
      function e_(e, t, n = 0) {
        for (let o = t.length - 1; o >= n; o--)
          e = t[o].create(null, i.HY.from(e));
        return e;
      }
      function eY(e, t, n, o, s, r) {
        let l = t < 0 ? e.firstChild : e.lastChild,
          d = l.content;
        return (
          e.childCount > 1 && (r = 0),
          s < o - 1 && (d = eY(d, t, n, o, s + 1, r)),
          s >= n &&
            (d =
              t < 0
                ? l
                    .contentMatchAt(0)
                    .fillBefore(d, r <= s)
                    .append(d)
                : d.append(
                    l.contentMatchAt(l.childCount).fillBefore(i.HY.empty, !0)
                  )),
          e.replaceChild(t < 0 ? 0 : e.childCount - 1, l.copy(d))
        );
      }
      function eG(e, t, n) {
        return (
          t < e.openStart &&
            (e = new i.p2(
              eY(e.content, -1, t, e.openStart, 0, e.openEnd),
              t,
              e.openEnd
            )),
          n < e.openEnd &&
            (e = new i.p2(
              eY(e.content, 1, n, e.openEnd, 0, 0),
              e.openStart,
              n
            )),
          e
        );
      }
      let eU = {
          thead: ['table'],
          tbody: ['table'],
          tfoot: ['table'],
          caption: ['table'],
          colgroup: ['table'],
          col: ['table', 'colgroup'],
          tr: ['table', 'tbody'],
          td: ['table', 'tbody', 'tr'],
          th: ['table', 'tbody', 'tr'],
        },
        ej = null;
      function eX() {
        return ej || (ej = document.implementation.createHTMLDocument('title'));
      }
      let eJ = {},
        eQ = {},
        eZ = { touchstart: !0, touchmove: !0 };
      class e0 {
        constructor() {
          (this.shiftKey = !1),
            (this.mouseDown = null),
            (this.lastKeyCode = null),
            (this.lastKeyCodeTime = 0),
            (this.lastClick = { time: 0, x: 0, y: 0, type: '' }),
            (this.lastSelectionOrigin = null),
            (this.lastSelectionTime = 0),
            (this.lastIOSEnter = 0),
            (this.lastIOSEnterFallbackTimeout = -1),
            (this.lastFocus = 0),
            (this.lastTouch = 0),
            (this.lastAndroidDelete = 0),
            (this.composing = !1),
            (this.composingTimeout = -1),
            (this.compositionNodes = []),
            (this.compositionEndedAt = -2e8),
            (this.compositionID = 1),
            (this.compositionPendingChanges = 0),
            (this.domChangeCount = 0),
            (this.eventHandlers = Object.create(null)),
            (this.hideSelectionGuard = null);
        }
      }
      function e1(e, t) {
        (e.input.lastSelectionOrigin = t),
          (e.input.lastSelectionTime = Date.now());
      }
      function e2(e) {
        e.someProp('handleDOMEvents', t => {
          for (let n in t)
            e.input.eventHandlers[n] ||
              e.dom.addEventListener(
                n,
                (e.input.eventHandlers[n] = t => e3(e, t))
              );
        });
      }
      function e3(e, t) {
        return e.someProp('handleDOMEvents', n => {
          let o = n[t.type];
          return !!o && (o(e, t) || t.defaultPrevented);
        });
      }
      function e5(e) {
        return { left: e.clientX, top: e.clientY };
      }
      function e8(e, t, n, o, i) {
        if (-1 == o) return !1;
        let s = e.state.doc.resolve(o);
        for (let o = s.depth + 1; o > 0; o--)
          if (
            e.someProp(t, t =>
              o > s.depth
                ? t(e, n, s.nodeAfter, s.before(o), i, !0)
                : t(e, n, s.node(o), s.before(o), i, !1)
            )
          )
            return !0;
        return !1;
      }
      function e6(e, t, n) {
        e.focused || e.focus();
        let o = e.state.tr.setSelection(t);
        'pointer' == n && o.setMeta('pointer', !0), e.dispatch(o);
      }
      (eQ.keydown = (e, t) => {
        if (
          ((e.input.shiftKey = 16 == t.keyCode || t.shiftKey),
          !e7(e, t) &&
            ((e.input.lastKeyCode = t.keyCode),
            (e.input.lastKeyCodeTime = Date.now()),
            !V || !x || 13 != t.keyCode))
        ) {
          if (
            (229 != t.keyCode && e.domObserver.forceFlush(),
            !E || 13 != t.keyCode || t.ctrlKey || t.altKey || t.metaKey)
          )
            e.someProp('handleKeyDown', n => n(e, t)) ||
            (function (e, t) {
              let n;
              let o = t.keyCode,
                i =
                  ((n = ''),
                  t.ctrlKey && (n += 'c'),
                  t.metaKey && (n += 'm'),
                  t.altKey && (n += 'a'),
                  t.shiftKey && (n += 's'),
                  n);
              if (8 == o || (P && 72 == o && 'c' == i))
                return eF(e, -1) || eB(e, -1);
              if ((46 == o && !t.shiftKey) || (P && 68 == o && 'c' == i))
                return eF(e, 1) || eB(e, 1);
              if (13 == o || 27 == o) return !0;
              if (37 == o || (P && 66 == o && 'c' == i)) {
                let t =
                  37 == o
                    ? 'ltr' == eI(e, e.state.selection.from)
                      ? -1
                      : 1
                    : -1;
                return eA(e, t, i) || eB(e, t);
              }
              if (39 == o || (P && 70 == o && 'c' == i)) {
                let t =
                  39 == o
                    ? 'ltr' == eI(e, e.state.selection.from)
                      ? 1
                      : -1
                    : 1;
                return eA(e, t, i) || eB(e, t);
              }
              if (38 == o || (P && 80 == o && 'c' == i))
                return eL(e, -1, i) || eB(e, -1);
              if (40 == o || (P && 78 == o && 'c' == i))
                return (
                  (function (e) {
                    if (!T || e.state.selection.$head.parentOffset > 0)
                      return !1;
                    let { focusNode: t, focusOffset: n } =
                      e.domSelectionRange();
                    if (
                      t &&
                      1 == t.nodeType &&
                      0 == n &&
                      t.firstChild &&
                      'false' == t.firstChild.contentEditable
                    ) {
                      let n = t.firstChild;
                      eK(e, n, 'true'), setTimeout(() => eK(e, n, 'false'), 20);
                    }
                    return !1;
                  })(e) ||
                  eL(e, 1, i) ||
                  eB(e, 1)
                );
              else if (
                i == (P ? 'm' : 'c') &&
                (66 == o || 73 == o || 89 == o || 90 == o)
              )
                return !0;
              return !1;
            })(e, t)
              ? t.preventDefault()
              : e1(e, 'key');
          else {
            let t = Date.now();
            (e.input.lastIOSEnter = t),
              (e.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
                e.input.lastIOSEnter == t &&
                  (e.someProp('handleKeyDown', t => t(e, g(13, 'Enter'))),
                  (e.input.lastIOSEnter = 0));
              }, 200));
          }
        }
      }),
        (eQ.keyup = (e, t) => {
          16 == t.keyCode && (e.input.shiftKey = !1);
        }),
        (eQ.keypress = (e, t) => {
          if (
            e7(e, t) ||
            !t.charCode ||
            (t.ctrlKey && !t.altKey) ||
            (P && t.metaKey)
          )
            return;
          if (e.someProp('handleKeyPress', n => n(e, t))) {
            t.preventDefault();
            return;
          }
          let n = e.state.selection;
          if (!(n instanceof o.Bs) || !n.$from.sameParent(n.$to)) {
            let o = String.fromCharCode(t.charCode);
            /[\r\n]/.test(o) ||
              e.someProp('handleTextInput', t =>
                t(e, n.$from.pos, n.$to.pos, o)
              ) ||
              e.dispatch(e.state.tr.insertText(o).scrollIntoView()),
              t.preventDefault();
          }
        });
      let e9 = P ? 'metaKey' : 'ctrlKey';
      eJ.mousedown = (e, t) => {
        var n;
        let i, s;
        e.input.shiftKey = t.shiftKey;
        let r = to(e),
          l = Date.now(),
          d = 'singleClick';
        l - e.input.lastClick.time < 500 &&
          (i = (n = e.input.lastClick).x - t.clientX) * i +
            (s = n.y - t.clientY) * s <
            100 &&
          !t[e9] &&
          ('singleClick' == e.input.lastClick.type
            ? (d = 'doubleClick')
            : 'doubleClick' == e.input.lastClick.type && (d = 'tripleClick')),
          (e.input.lastClick = {
            time: l,
            x: t.clientX,
            y: t.clientY,
            type: d,
          });
        let a = e.posAtCoords(e5(t));
        a &&
          ('singleClick' == d
            ? (e.input.mouseDown && e.input.mouseDown.done(),
              (e.input.mouseDown = new e4(e, a, t, !!r)))
            : ('doubleClick' == d
                  ? function (e, t, n, o) {
                      return (
                        e8(e, 'handleDoubleClickOn', t, n, o) ||
                        e.someProp('handleDoubleClick', n => n(e, t, o))
                      );
                    }
                  : function (e, t, n, i) {
                      return (
                        e8(e, 'handleTripleClickOn', t, n, i) ||
                        e.someProp('handleTripleClick', n => n(e, t, i)) ||
                        (function (e, t, n) {
                          if (0 != n.button) return !1;
                          let i = e.state.doc;
                          if (-1 == t)
                            return (
                              !!i.inlineContent &&
                              (e6(
                                e,
                                o.Bs.create(i, 0, i.content.size),
                                'pointer'
                              ),
                              !0)
                            );
                          let s = i.resolve(t);
                          for (let t = s.depth + 1; t > 0; t--) {
                            let n = t > s.depth ? s.nodeAfter : s.node(t),
                              r = s.before(t);
                            if (n.inlineContent)
                              e6(
                                e,
                                o.Bs.create(i, r + 1, r + 1 + n.content.size),
                                'pointer'
                              );
                            else {
                              if (!o.qv.isSelectable(n)) continue;
                              e6(e, o.qv.create(i, r), 'pointer');
                            }
                            return !0;
                          }
                        })(e, n, i)
                      );
                    })(e, a.pos, a.inside, t)
              ? t.preventDefault()
              : e1(e, 'pointer'));
      };
      class e4 {
        constructor(e, t, n, i) {
          let s, r;
          if (
            ((this.view = e),
            (this.pos = t),
            (this.event = n),
            (this.flushed = i),
            (this.delayedSelectionSync = !1),
            (this.mightDrag = null),
            (this.startDoc = e.state.doc),
            (this.selectNode = !!n[e9]),
            (this.allowDefault = n.shiftKey),
            t.inside > -1)
          )
            (s = e.state.doc.nodeAt(t.inside)), (r = t.inside);
          else {
            let n = e.state.doc.resolve(t.pos);
            (s = n.parent), (r = n.depth ? n.before() : 0);
          }
          let l = i ? null : n.target,
            d = l ? e.docView.nearestDesc(l, !0) : null;
          this.target = d ? d.dom : null;
          let { selection: a } = e.state;
          ((0 == n.button &&
            s.type.spec.draggable &&
            !1 !== s.type.spec.selectable) ||
            (a instanceof o.qv && a.from <= r && a.to > r)) &&
            (this.mightDrag = {
              node: s,
              pos: r,
              addAttr: !!(this.target && !this.target.draggable),
              setUneditable: !!(
                this.target &&
                C &&
                !this.target.hasAttribute('contentEditable')
              ),
            }),
            this.target &&
              this.mightDrag &&
              (this.mightDrag.addAttr || this.mightDrag.setUneditable) &&
              (this.view.domObserver.stop(),
              this.mightDrag.addAttr && (this.target.draggable = !0),
              this.mightDrag.setUneditable &&
                setTimeout(() => {
                  this.view.input.mouseDown == this &&
                    this.target.setAttribute('contentEditable', 'false');
                }, 20),
              this.view.domObserver.start()),
            e.root.addEventListener('mouseup', (this.up = this.up.bind(this))),
            e.root.addEventListener(
              'mousemove',
              (this.move = this.move.bind(this))
            ),
            e1(e, 'pointer');
        }
        done() {
          this.view.root.removeEventListener('mouseup', this.up),
            this.view.root.removeEventListener('mousemove', this.move),
            this.mightDrag &&
              this.target &&
              (this.view.domObserver.stop(),
              this.mightDrag.addAttr &&
                this.target.removeAttribute('draggable'),
              this.mightDrag.setUneditable &&
                this.target.removeAttribute('contentEditable'),
              this.view.domObserver.start()),
            this.delayedSelectionSync && setTimeout(() => ew(this.view)),
            (this.view.input.mouseDown = null);
        }
        up(e) {
          if ((this.done(), !this.view.dom.contains(e.target))) return;
          let t = this.pos;
          if (
            (this.view.state.doc != this.startDoc &&
              (t = this.view.posAtCoords(e5(e))),
            this.updateAllowDefault(e),
            this.allowDefault || !t)
          )
            e1(this.view, 'pointer');
          else {
            var n, i, s, r;
            ((n = this.view),
            (i = t.pos),
            (s = t.inside),
            (r = this.selectNode),
            e8(n, 'handleClickOn', i, s, e) ||
              n.someProp('handleClick', t => t(n, i, e)) ||
              (r
                ? (function (e, t) {
                    if (-1 == t) return !1;
                    let n = e.state.selection,
                      i,
                      s;
                    n instanceof o.qv && (i = n.node);
                    let r = e.state.doc.resolve(t);
                    for (let e = r.depth + 1; e > 0; e--) {
                      let t = e > r.depth ? r.nodeAfter : r.node(e);
                      if (o.qv.isSelectable(t)) {
                        s =
                          i &&
                          n.$from.depth > 0 &&
                          e >= n.$from.depth &&
                          r.before(n.$from.depth + 1) == n.$from.pos
                            ? r.before(n.$from.depth)
                            : r.before(e);
                        break;
                      }
                    }
                    return (
                      null != s &&
                      (e6(e, o.qv.create(e.state.doc, s), 'pointer'), !0)
                    );
                  })(n, s)
                : (function (e, t) {
                    if (-1 == t) return !1;
                    let n = e.state.doc.resolve(t),
                      i = n.nodeAfter;
                    return (
                      !!(i && i.isAtom && o.qv.isSelectable(i)) &&
                      (e6(e, new o.qv(n), 'pointer'), !0)
                    );
                  })(n, s)))
              ? e.preventDefault()
              : 0 == e.button &&
                  (this.flushed ||
                    (T && this.mightDrag && !this.mightDrag.node.isAtom) ||
                    (x &&
                      !this.view.state.selection.visible &&
                      2 >=
                        Math.min(
                          Math.abs(t.pos - this.view.state.selection.from),
                          Math.abs(t.pos - this.view.state.selection.to)
                        )))
                ? (e6(
                    this.view,
                    o.Y1.near(this.view.state.doc.resolve(t.pos)),
                    'pointer'
                  ),
                  e.preventDefault())
                : e1(this.view, 'pointer');
          }
        }
        move(e) {
          this.updateAllowDefault(e),
            e1(this.view, 'pointer'),
            0 == e.buttons && this.done();
        }
        updateAllowDefault(e) {
          !this.allowDefault &&
            (Math.abs(this.event.x - e.clientX) > 4 ||
              Math.abs(this.event.y - e.clientY) > 4) &&
            (this.allowDefault = !0);
        }
      }
      function e7(e, t) {
        return (
          !!e.composing ||
          (!!(T && 500 > Math.abs(t.timeStamp - e.input.compositionEndedAt)) &&
            ((e.input.compositionEndedAt = -2e8), !0))
        );
      }
      (eJ.touchstart = e => {
        (e.input.lastTouch = Date.now()), to(e), e1(e, 'pointer');
      }),
        (eJ.touchmove = e => {
          (e.input.lastTouch = Date.now()), e1(e, 'pointer');
        }),
        (eJ.contextmenu = e => to(e));
      let te = V ? 5e3 : -1;
      function tt(e, t) {
        clearTimeout(e.input.composingTimeout),
          t > -1 && (e.input.composingTimeout = setTimeout(() => to(e), t));
      }
      function tn(e) {
        let t;
        for (
          e.composing &&
          ((e.input.composing = !1),
          (e.input.compositionEndedAt =
            ((t = document.createEvent('Event')).initEvent('event', !0, !0),
            t.timeStamp)));
          e.input.compositionNodes.length > 0;

        )
          e.input.compositionNodes.pop().markParentsDirty();
      }
      function to(e, t = !1) {
        if (!V || !(e.domObserver.flushingSoon >= 0)) {
          if (
            (e.domObserver.forceFlush(),
            tn(e),
            t || (e.docView && e.docView.dirty))
          ) {
            let t = eb(e);
            return (
              t && !t.eq(e.state.selection)
                ? e.dispatch(e.state.tr.setSelection(t))
                : e.updateState(e.state),
              !0
            );
          }
          return !1;
        }
      }
      (eQ.compositionstart = eQ.compositionupdate =
        e => {
          if (!e.composing) {
            e.domObserver.flush();
            let { state: t } = e,
              n = t.selection.$from;
            if (
              t.selection.empty &&
              (t.storedMarks ||
                (!n.textOffset &&
                  n.parentOffset &&
                  n.nodeBefore.marks.some(e => !1 === e.type.spec.inclusive)))
            )
              (e.markCursor = e.state.storedMarks || n.marks()),
                to(e, !0),
                (e.markCursor = null);
            else if (
              (to(e),
              C &&
                t.selection.empty &&
                n.parentOffset &&
                !n.textOffset &&
                n.nodeBefore.marks.length)
            ) {
              let t = e.domSelectionRange();
              for (
                let n = t.focusNode, o = t.focusOffset;
                n && 1 == n.nodeType && 0 != o;

              ) {
                let t = o < 0 ? n.lastChild : n.childNodes[o - 1];
                if (!t) break;
                if (3 == t.nodeType) {
                  e.domSelection().collapse(t, t.nodeValue.length);
                  break;
                }
                (n = t), (o = -1);
              }
            }
            e.input.composing = !0;
          }
          tt(e, te);
        }),
        (eQ.compositionend = (e, t) => {
          e.composing &&
            ((e.input.composing = !1),
            (e.input.compositionEndedAt = t.timeStamp),
            (e.input.compositionPendingChanges = e.domObserver.pendingRecords()
              .length
              ? e.input.compositionID
              : 0),
            e.input.compositionPendingChanges &&
              Promise.resolve().then(() => e.domObserver.flush()),
            e.input.compositionID++,
            tt(e, 20));
        });
      let ti = (O && S < 15) || (E && B < 604);
      function ts(e, t, n, o, s) {
        let r = e$(e, t, n, o, e.state.selection.$from);
        if (e.someProp('handlePaste', t => t(e, s, r || i.p2.empty))) return !0;
        if (!r) return !1;
        let l =
            0 == r.openStart && 0 == r.openEnd && 1 == r.content.childCount
              ? r.content.firstChild
              : null,
          d = l
            ? e.state.tr.replaceSelectionWith(l, o)
            : e.state.tr.replaceSelection(r);
        return (
          e.dispatch(
            d.scrollIntoView().setMeta('paste', !0).setMeta('uiEvent', 'paste')
          ),
          !0
        );
      }
      function tr(e) {
        let t = e.getData('text/plain') || e.getData('Text');
        if (t) return t;
        let n = e.getData('text/uri-list');
        return n ? n.replace(/\r?\n/g, ' ') : '';
      }
      (eJ.copy = eQ.cut =
        (e, t) => {
          let n = e.state.selection,
            o = 'cut' == t.type;
          if (n.empty) return;
          let i = ti ? null : t.clipboardData,
            { dom: s, text: r } = eW(e, n.content());
          i
            ? (t.preventDefault(),
              i.clearData(),
              i.setData('text/html', s.innerHTML),
              i.setData('text/plain', r))
            : (function (e, t) {
                if (!e.dom.parentNode) return;
                let n = e.dom.parentNode.appendChild(
                  document.createElement('div')
                );
                n.appendChild(t),
                  (n.style.cssText =
                    'position: fixed; left: -10000px; top: 10px');
                let o = getSelection(),
                  i = document.createRange();
                i.selectNodeContents(t),
                  e.dom.blur(),
                  o.removeAllRanges(),
                  o.addRange(i),
                  setTimeout(() => {
                    n.parentNode && n.parentNode.removeChild(n), e.focus();
                  }, 50);
              })(e, s),
            o &&
              e.dispatch(
                e.state.tr
                  .deleteSelection()
                  .scrollIntoView()
                  .setMeta('uiEvent', 'cut')
              );
        }),
        (eQ.paste = (e, t) => {
          if (e.composing && !V) return;
          let n = ti ? null : t.clipboardData,
            o = e.input.shiftKey && 45 != e.input.lastKeyCode;
          n && ts(e, tr(n), n.getData('text/html'), o, t)
            ? t.preventDefault()
            : (function (e, t) {
                if (!e.dom.parentNode) return;
                let n =
                    e.input.shiftKey ||
                    e.state.selection.$from.parent.type.spec.code,
                  o = e.dom.parentNode.appendChild(
                    document.createElement(n ? 'textarea' : 'div')
                  );
                n || (o.contentEditable = 'true'),
                  (o.style.cssText =
                    'position: fixed; left: -10000px; top: 10px'),
                  o.focus();
                let i = e.input.shiftKey && 45 != e.input.lastKeyCode;
                setTimeout(() => {
                  e.focus(),
                    o.parentNode && o.parentNode.removeChild(o),
                    n
                      ? ts(e, o.value, null, i, t)
                      : ts(e, o.textContent, o.innerHTML, i, t);
                }, 50);
              })(e, t);
        });
      class tl {
        constructor(e, t, n) {
          (this.slice = e), (this.move = t), (this.node = n);
        }
      }
      let td = P ? 'altKey' : 'ctrlKey';
      for (let e in ((eJ.dragstart = (e, t) => {
        let n;
        let i = e.input.mouseDown;
        if ((i && i.done(), !t.dataTransfer)) return;
        let s = e.state.selection,
          r = s.empty ? null : e.posAtCoords(e5(t));
        if (
          r &&
          r.pos >= s.from &&
          r.pos <= (s instanceof o.qv ? s.to - 1 : s.to)
        );
        else if (i && i.mightDrag)
          n = o.qv.create(e.state.doc, i.mightDrag.pos);
        else if (t.target && 1 == t.target.nodeType) {
          let i = e.docView.nearestDesc(t.target, !0);
          i &&
            i.node.type.spec.draggable &&
            i != e.docView &&
            (n = o.qv.create(e.state.doc, i.posBefore));
        }
        let l = (n || e.state.selection).content(),
          { dom: d, text: a } = eW(e, l);
        t.dataTransfer.clearData(),
          t.dataTransfer.setData(ti ? 'Text' : 'text/html', d.innerHTML),
          (t.dataTransfer.effectAllowed = 'copyMove'),
          ti || t.dataTransfer.setData('text/plain', a),
          (e.dragging = new tl(l, !t[td], n));
      }),
      (eJ.dragend = e => {
        let t = e.dragging;
        window.setTimeout(() => {
          e.dragging == t && (e.dragging = null);
        }, 50);
      }),
      (eQ.dragover = eQ.dragenter = (e, t) => t.preventDefault()),
      (eQ.drop = (e, t) => {
        let n = e.dragging;
        if (((e.dragging = null), !t.dataTransfer)) return;
        let r = e.posAtCoords(e5(t));
        if (!r) return;
        let l = e.state.doc.resolve(r.pos),
          d = n && n.slice;
        d
          ? e.someProp('transformPasted', t => {
              d = t(d, e);
            })
          : (d = e$(
              e,
              tr(t.dataTransfer),
              ti ? null : t.dataTransfer.getData('text/html'),
              !1,
              l
            ));
        let a = !!(n && !t[td]);
        if (e.someProp('handleDrop', n => n(e, t, d || i.p2.empty, a))) {
          t.preventDefault();
          return;
        }
        if (!d) return;
        t.preventDefault();
        let c = d ? (0, s.nj)(e.state.doc, l.pos, d) : l.pos;
        null == c && (c = l.pos);
        let h = e.state.tr;
        if (a) {
          let { node: e } = n;
          e ? e.replace(h) : h.deleteSelection();
        }
        let u = h.mapping.map(c),
          f = 0 == d.openStart && 0 == d.openEnd && 1 == d.content.childCount,
          p = h.doc;
        if (
          (f
            ? h.replaceRangeWith(u, u, d.content.firstChild)
            : h.replaceRange(u, u, d),
          h.doc.eq(p))
        )
          return;
        let m = h.doc.resolve(u);
        if (
          f &&
          o.qv.isSelectable(d.content.firstChild) &&
          m.nodeAfter &&
          m.nodeAfter.sameMarkup(d.content.firstChild)
        )
          h.setSelection(new o.qv(m));
        else {
          let t = h.mapping.map(c);
          h.mapping.maps[h.mapping.maps.length - 1].forEach(
            (e, n, o, i) => (t = i)
          ),
            h.setSelection(ex(e, m, h.doc.resolve(t)));
        }
        e.focus(), e.dispatch(h.setMeta('uiEvent', 'drop'));
      }),
      (eJ.focus = e => {
        (e.input.lastFocus = Date.now()),
          e.focused ||
            (e.domObserver.stop(),
            e.dom.classList.add('ProseMirror-focused'),
            e.domObserver.start(),
            (e.focused = !0),
            setTimeout(() => {
              e.docView &&
                e.hasFocus() &&
                !e.domObserver.currentSelection.eq(e.domSelectionRange()) &&
                ew(e);
            }, 20));
      }),
      (eJ.blur = (e, t) => {
        e.focused &&
          (e.domObserver.stop(),
          e.dom.classList.remove('ProseMirror-focused'),
          e.domObserver.start(),
          t.relatedTarget &&
            e.dom.contains(t.relatedTarget) &&
            e.domObserver.currentSelection.clear(),
          (e.focused = !1));
      }),
      (eJ.beforeinput = (e, t) => {
        if (x && V && 'deleteContentBackward' == t.inputType) {
          e.domObserver.flushSoon();
          let { domChangeCount: t } = e.input;
          setTimeout(() => {
            if (
              e.input.domChangeCount != t ||
              (e.dom.blur(),
              e.focus(),
              e.someProp('handleKeyDown', t => t(e, g(8, 'Backspace'))))
            )
              return;
            let { $cursor: n } = e.state.selection;
            n &&
              n.pos > 0 &&
              e.dispatch(e.state.tr.delete(n.pos - 1, n.pos).scrollIntoView());
          }, 50);
        }
      }),
      eQ))
        eJ[e] = eQ[e];
      function ta(e, t) {
        if (e == t) return !0;
        for (let n in e) if (e[n] !== t[n]) return !1;
        for (let n in t) if (!(n in e)) return !1;
        return !0;
      }
      class tc {
        constructor(e, t) {
          (this.toDOM = e),
            (this.spec = t || tm),
            (this.side = this.spec.side || 0);
        }
        map(e, t, n, o) {
          let { pos: i, deleted: s } = e.mapResult(
            t.from + o,
            this.side < 0 ? -1 : 1
          );
          return s ? null : new tf(i - n, i - n, this);
        }
        valid() {
          return !0;
        }
        eq(e) {
          return (
            this == e ||
            (e instanceof tc &&
              ((this.spec.key && this.spec.key == e.spec.key) ||
                (this.toDOM == e.toDOM && ta(this.spec, e.spec))))
          );
        }
        destroy(e) {
          this.spec.destroy && this.spec.destroy(e);
        }
      }
      class th {
        constructor(e, t) {
          (this.attrs = e), (this.spec = t || tm);
        }
        map(e, t, n, o) {
          let i = e.map(t.from + o, this.spec.inclusiveStart ? -1 : 1) - n,
            s = e.map(t.to + o, this.spec.inclusiveEnd ? 1 : -1) - n;
          return i >= s ? null : new tf(i, s, this);
        }
        valid(e, t) {
          return t.from < t.to;
        }
        eq(e) {
          return (
            this == e ||
            (e instanceof th &&
              ta(this.attrs, e.attrs) &&
              ta(this.spec, e.spec))
          );
        }
        static is(e) {
          return e.type instanceof th;
        }
        destroy() {}
      }
      class tu {
        constructor(e, t) {
          (this.attrs = e), (this.spec = t || tm);
        }
        map(e, t, n, o) {
          let i = e.mapResult(t.from + o, 1);
          if (i.deleted) return null;
          let s = e.mapResult(t.to + o, -1);
          return s.deleted || s.pos <= i.pos
            ? null
            : new tf(i.pos - n, s.pos - n, this);
        }
        valid(e, t) {
          let { index: n, offset: o } = e.content.findIndex(t.from),
            i;
          return (
            o == t.from && !(i = e.child(n)).isText && o + i.nodeSize == t.to
          );
        }
        eq(e) {
          return (
            this == e ||
            (e instanceof tu &&
              ta(this.attrs, e.attrs) &&
              ta(this.spec, e.spec))
          );
        }
        destroy() {}
      }
      class tf {
        constructor(e, t, n) {
          (this.from = e), (this.to = t), (this.type = n);
        }
        copy(e, t) {
          return new tf(e, t, this.type);
        }
        eq(e, t = 0) {
          return (
            this.type.eq(e.type) &&
            this.from + t == e.from &&
            this.to + t == e.to
          );
        }
        map(e, t, n) {
          return this.type.map(e, this, t, n);
        }
        static widget(e, t, n) {
          return new tf(e, e, new tc(t, n));
        }
        static inline(e, t, n, o) {
          return new tf(e, t, new th(n, o));
        }
        static node(e, t, n, o) {
          return new tf(e, t, new tu(n, o));
        }
        get spec() {
          return this.type.spec;
        }
        get inline() {
          return this.type instanceof th;
        }
        get widget() {
          return this.type instanceof tc;
        }
      }
      let tp = [],
        tm = {};
      class tg {
        constructor(e, t) {
          (this.local = e.length ? e : tp), (this.children = t.length ? t : tp);
        }
        static create(e, t) {
          return t.length ? tN(t, e, 0, tm) : ty;
        }
        find(e, t, n) {
          let o = [];
          return (
            this.findInner(null == e ? 0 : e, null == t ? 1e9 : t, o, 0, n), o
          );
        }
        findInner(e, t, n, o, i) {
          for (let s = 0; s < this.local.length; s++) {
            let r = this.local[s];
            r.from <= t &&
              r.to >= e &&
              (!i || i(r.spec)) &&
              n.push(r.copy(r.from + o, r.to + o));
          }
          for (let s = 0; s < this.children.length; s += 3)
            if (this.children[s] < t && this.children[s + 1] > e) {
              let r = this.children[s] + 1;
              this.children[s + 2].findInner(e - r, t - r, n, o + r, i);
            }
        }
        map(e, t, n) {
          return this == ty || 0 == e.maps.length
            ? this
            : this.mapInner(e, t, 0, 0, n || tm);
        }
        mapInner(e, t, n, o, i) {
          let s;
          for (let r = 0; r < this.local.length; r++) {
            let l = this.local[r].map(e, n, o);
            l && l.type.valid(t, l)
              ? (s || (s = [])).push(l)
              : i.onRemove && i.onRemove(this.local[r].spec);
          }
          return this.children.length
            ? (function (e, t, n, o, i, s, r) {
                let l = e.slice();
                for (let e = 0, t = s; e < n.maps.length; e++) {
                  let o = 0;
                  n.maps[e].forEach((e, n, i, s) => {
                    let r = s - i - (n - e);
                    for (let i = 0; i < l.length; i += 3) {
                      let s = l[i + 1];
                      if (s < 0 || e > s + t - o) continue;
                      let d = l[i] + t - o;
                      n >= d
                        ? (l[i + 1] = e <= d ? -2 : -1)
                        : e >= t && r && ((l[i] += r), (l[i + 1] += r));
                    }
                    o += r;
                  }),
                    (t = n.maps[e].map(t, -1));
                }
                let d = !1;
                for (let t = 0; t < l.length; t += 3)
                  if (l[t + 1] < 0) {
                    if (-2 == l[t + 1]) {
                      (d = !0), (l[t + 1] = -1);
                      continue;
                    }
                    let a = n.map(e[t] + s),
                      c = a - i;
                    if (c < 0 || c >= o.content.size) {
                      d = !0;
                      continue;
                    }
                    let h = n.map(e[t + 1] + s, -1) - i,
                      { index: u, offset: f } = o.content.findIndex(c),
                      p = o.maybeChild(u);
                    if (p && f == c && f + p.nodeSize == h) {
                      let o = l[t + 2].mapInner(n, p, a + 1, e[t] + s + 1, r);
                      o != ty
                        ? ((l[t] = c), (l[t + 1] = h), (l[t + 2] = o))
                        : ((l[t + 1] = -2), (d = !0));
                    } else d = !0;
                  }
                if (d) {
                  let d = tN(
                    (function (e, t, n, o, i, s, r) {
                      for (let l = 0; l < e.length; l += 3)
                        -1 == e[l + 1] &&
                          (function e(t, s) {
                            for (let e = 0; e < t.local.length; e++) {
                              let l = t.local[e].map(o, i, s);
                              l
                                ? n.push(l)
                                : r.onRemove && r.onRemove(t.local[e].spec);
                            }
                            for (let n = 0; n < t.children.length; n += 3)
                              e(t.children[n + 2], t.children[n] + s + 1);
                          })(e[l + 2], t[l] + s + 1);
                      return n;
                    })(l, e, t, n, i, s, r),
                    o,
                    0,
                    r
                  );
                  t = d.local;
                  for (let e = 0; e < l.length; e += 3)
                    l[e + 1] < 0 && (l.splice(e, 3), (e -= 3));
                  for (let e = 0, t = 0; e < d.children.length; e += 3) {
                    let n = d.children[e];
                    for (; t < l.length && l[t] < n; ) t += 3;
                    l.splice(
                      t,
                      0,
                      d.children[e],
                      d.children[e + 1],
                      d.children[e + 2]
                    );
                  }
                }
                return new tg(t.sort(tO), l);
              })(this.children, s || [], e, t, n, o, i)
            : s
              ? new tg(s.sort(tO), tp)
              : ty;
        }
        add(e, t) {
          return t.length
            ? this == ty
              ? tg.create(e, t)
              : this.addInner(e, t, 0)
            : this;
        }
        addInner(e, t, n) {
          let o,
            i = 0;
          e.forEach((e, s) => {
            let r = s + n,
              l;
            if ((l = tw(t, e, r))) {
              for (o || (o = this.children.slice()); i < o.length && o[i] < s; )
                i += 3;
              o[i] == s
                ? (o[i + 2] = o[i + 2].addInner(e, l, r + 1))
                : o.splice(i, 0, s, s + e.nodeSize, tN(l, e, r + 1, tm)),
                (i += 3);
            }
          });
          let s = tv(i ? tD(t) : t, -n);
          for (let t = 0; t < s.length; t++)
            s[t].type.valid(e, s[t]) || s.splice(t--, 1);
          return new tg(
            s.length ? this.local.concat(s).sort(tO) : this.local,
            o || this.children
          );
        }
        remove(e) {
          return 0 == e.length || this == ty ? this : this.removeInner(e, 0);
        }
        removeInner(e, t) {
          let n = this.children,
            o = this.local;
          for (let o = 0; o < n.length; o += 3) {
            let i;
            let s = n[o] + t,
              r = n[o + 1] + t;
            for (let t = 0, n; t < e.length; t++)
              (n = e[t]) &&
                n.from > s &&
                n.to < r &&
                ((e[t] = null), (i || (i = [])).push(n));
            if (!i) continue;
            n == this.children && (n = this.children.slice());
            let l = n[o + 2].removeInner(i, s + 1);
            l != ty ? (n[o + 2] = l) : (n.splice(o, 3), (o -= 3));
          }
          if (o.length) {
            for (let n = 0, i; n < e.length; n++)
              if ((i = e[n]))
                for (let e = 0; e < o.length; e++)
                  o[e].eq(i, t) &&
                    (o == this.local && (o = this.local.slice()),
                    o.splice(e--, 1));
          }
          return n == this.children && o == this.local
            ? this
            : o.length || n.length
              ? new tg(o, n)
              : ty;
        }
        forChild(e, t) {
          let n, o;
          if (this == ty) return this;
          if (t.isLeaf) return tg.empty;
          for (let t = 0; t < this.children.length; t += 3)
            if (this.children[t] >= e) {
              this.children[t] == e && (n = this.children[t + 2]);
              break;
            }
          let i = e + 1,
            s = i + t.content.size;
          for (let e = 0; e < this.local.length; e++) {
            let t = this.local[e];
            if (t.from < s && t.to > i && t.type instanceof th) {
              let e = Math.max(i, t.from) - i,
                n = Math.min(s, t.to) - i;
              e < n && (o || (o = [])).push(t.copy(e, n));
            }
          }
          if (o) {
            let e = new tg(o.sort(tO), tp);
            return n ? new tb([e, n]) : e;
          }
          return n || ty;
        }
        eq(e) {
          if (this == e) return !0;
          if (
            !(e instanceof tg) ||
            this.local.length != e.local.length ||
            this.children.length != e.children.length
          )
            return !1;
          for (let t = 0; t < this.local.length; t++)
            if (!this.local[t].eq(e.local[t])) return !1;
          for (let t = 0; t < this.children.length; t += 3)
            if (
              this.children[t] != e.children[t] ||
              this.children[t + 1] != e.children[t + 1] ||
              !this.children[t + 2].eq(e.children[t + 2])
            )
              return !1;
          return !0;
        }
        locals(e) {
          return tS(this.localsInner(e));
        }
        localsInner(e) {
          if (this == ty) return tp;
          if (e.inlineContent || !this.local.some(th.is)) return this.local;
          let t = [];
          for (let e = 0; e < this.local.length; e++)
            this.local[e].type instanceof th || t.push(this.local[e]);
          return t;
        }
      }
      (tg.empty = new tg([], [])), (tg.removeOverlap = tS);
      let ty = tg.empty;
      class tb {
        constructor(e) {
          this.members = e;
        }
        map(e, t) {
          let n = this.members.map(n => n.map(e, t, tm));
          return tb.from(n);
        }
        forChild(e, t) {
          if (t.isLeaf) return tg.empty;
          let n = [];
          for (let o = 0; o < this.members.length; o++) {
            let i = this.members[o].forChild(e, t);
            i != ty &&
              (i instanceof tb ? (n = n.concat(i.members)) : n.push(i));
          }
          return tb.from(n);
        }
        eq(e) {
          if (!(e instanceof tb) || e.members.length != this.members.length)
            return !1;
          for (let t = 0; t < this.members.length; t++)
            if (!this.members[t].eq(e.members[t])) return !1;
          return !0;
        }
        locals(e) {
          let t,
            n = !0;
          for (let o = 0; o < this.members.length; o++) {
            let i = this.members[o].localsInner(e);
            if (i.length) {
              if (t) {
                n && ((t = t.slice()), (n = !1));
                for (let e = 0; e < i.length; e++) t.push(i[e]);
              } else t = i;
            }
          }
          return t ? tS(n ? t : t.sort(tO)) : tp;
        }
        static from(e) {
          switch (e.length) {
            case 0:
              return ty;
            case 1:
              return e[0];
            default:
              return new tb(
                e.every(e => e instanceof tg)
                  ? e
                  : e.reduce(
                      (e, t) => e.concat(t instanceof tg ? t : t.members),
                      []
                    )
              );
          }
        }
      }
      function tv(e, t) {
        if (!t || !e.length) return e;
        let n = [];
        for (let o = 0; o < e.length; o++) {
          let i = e[o];
          n.push(new tf(i.from + t, i.to + t, i.type));
        }
        return n;
      }
      function tw(e, t, n) {
        if (t.isLeaf) return null;
        let o = n + t.nodeSize,
          i = null;
        for (let t = 0, s; t < e.length; t++)
          (s = e[t]) &&
            s.from > n &&
            s.to < o &&
            ((i || (i = [])).push(s), (e[t] = null));
        return i;
      }
      function tD(e) {
        let t = [];
        for (let n = 0; n < e.length; n++) null != e[n] && t.push(e[n]);
        return t;
      }
      function tN(e, t, n, o) {
        let i = [],
          s = !1;
        t.forEach((t, r) => {
          let l = tw(e, t, r + n);
          if (l) {
            s = !0;
            let e = tN(l, t, n + r + 1, o);
            e != ty && i.push(r, r + t.nodeSize, e);
          }
        });
        let r = tv(s ? tD(e) : e, -n).sort(tO);
        for (let e = 0; e < r.length; e++)
          r[e].type.valid(t, r[e]) ||
            (o.onRemove && o.onRemove(r[e].spec), r.splice(e--, 1));
        return r.length || i.length ? new tg(r, i) : ty;
      }
      function tO(e, t) {
        return e.from - t.from || e.to - t.to;
      }
      function tS(e) {
        let t = e;
        for (let n = 0; n < t.length - 1; n++) {
          let o = t[n];
          if (o.from != o.to)
            for (let i = n + 1; i < t.length; i++) {
              let s = t[i];
              if (s.from == o.from) {
                s.to != o.to &&
                  (t == e && (t = e.slice()),
                  (t[i] = s.copy(s.from, o.to)),
                  tC(t, i + 1, s.copy(o.to, s.to)));
                continue;
              }
              s.from < o.to &&
                (t == e && (t = e.slice()),
                (t[n] = o.copy(o.from, s.from)),
                tC(t, i, o.copy(s.from, o.to)));
              break;
            }
        }
        return t;
      }
      function tC(e, t, n) {
        for (; t < e.length && tO(n, e[t]) > 0; ) t++;
        e.splice(t, 0, n);
      }
      function tM(e) {
        let t = [];
        return (
          e.someProp('decorations', n => {
            let o = n(e.state);
            o && o != ty && t.push(o);
          }),
          e.cursorWrapper &&
            t.push(tg.create(e.state.doc, [e.cursorWrapper.deco])),
          tb.from(t)
        );
      }
      let tx = {
          childList: !0,
          characterData: !0,
          characterDataOldValue: !0,
          attributes: !0,
          attributeOldValue: !0,
          subtree: !0,
        },
        tk = O && S <= 11;
      class tT {
        constructor() {
          (this.anchorNode = null),
            (this.anchorOffset = 0),
            (this.focusNode = null),
            (this.focusOffset = 0);
        }
        set(e) {
          (this.anchorNode = e.anchorNode),
            (this.anchorOffset = e.anchorOffset),
            (this.focusNode = e.focusNode),
            (this.focusOffset = e.focusOffset);
        }
        clear() {
          this.anchorNode = this.focusNode = null;
        }
        eq(e) {
          return (
            e.anchorNode == this.anchorNode &&
            e.anchorOffset == this.anchorOffset &&
            e.focusNode == this.focusNode &&
            e.focusOffset == this.focusOffset
          );
        }
      }
      class tE {
        constructor(e, t) {
          (this.view = e),
            (this.handleDOMChange = t),
            (this.queue = []),
            (this.flushingSoon = -1),
            (this.observer = null),
            (this.currentSelection = new tT()),
            (this.onCharData = null),
            (this.suppressingSelectionUpdates = !1),
            (this.observer =
              window.MutationObserver &&
              new window.MutationObserver(e => {
                for (let t = 0; t < e.length; t++) this.queue.push(e[t]);
                O &&
                S <= 11 &&
                e.some(
                  e =>
                    ('childList' == e.type && e.removedNodes.length) ||
                    ('characterData' == e.type &&
                      e.oldValue.length > e.target.nodeValue.length)
                )
                  ? this.flushSoon()
                  : this.flush();
              })),
            tk &&
              (this.onCharData = e => {
                this.queue.push({
                  target: e.target,
                  type: 'characterData',
                  oldValue: e.prevValue,
                }),
                  this.flushSoon();
              }),
            (this.onSelectionChange = this.onSelectionChange.bind(this));
        }
        flushSoon() {
          this.flushingSoon < 0 &&
            (this.flushingSoon = window.setTimeout(() => {
              (this.flushingSoon = -1), this.flush();
            }, 20));
        }
        forceFlush() {
          this.flushingSoon > -1 &&
            (window.clearTimeout(this.flushingSoon),
            (this.flushingSoon = -1),
            this.flush());
        }
        start() {
          this.observer &&
            (this.observer.takeRecords(),
            this.observer.observe(this.view.dom, tx)),
            this.onCharData &&
              this.view.dom.addEventListener(
                'DOMCharacterDataModified',
                this.onCharData
              ),
            this.connectSelection();
        }
        stop() {
          if (this.observer) {
            let e = this.observer.takeRecords();
            if (e.length) {
              for (let t = 0; t < e.length; t++) this.queue.push(e[t]);
              window.setTimeout(() => this.flush(), 20);
            }
            this.observer.disconnect();
          }
          this.onCharData &&
            this.view.dom.removeEventListener(
              'DOMCharacterDataModified',
              this.onCharData
            ),
            this.disconnectSelection();
        }
        connectSelection() {
          this.view.dom.ownerDocument.addEventListener(
            'selectionchange',
            this.onSelectionChange
          );
        }
        disconnectSelection() {
          this.view.dom.ownerDocument.removeEventListener(
            'selectionchange',
            this.onSelectionChange
          );
        }
        suppressSelectionUpdates() {
          (this.suppressingSelectionUpdates = !0),
            setTimeout(() => (this.suppressingSelectionUpdates = !1), 50);
        }
        onSelectionChange() {
          if (ek(this.view)) {
            if (this.suppressingSelectionUpdates) return ew(this.view);
            if (O && S <= 11 && !this.view.state.selection.empty) {
              let e = this.view.domSelectionRange();
              if (
                e.focusNode &&
                c(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset)
              )
                return this.flushSoon();
            }
            this.flush();
          }
        }
        setCurSelection() {
          this.currentSelection.set(this.view.domSelectionRange());
        }
        ignoreSelectionChange(e) {
          if (!e.focusNode) return !0;
          let t = new Set(),
            n;
          for (let n = e.focusNode; n; n = l(n)) t.add(n);
          for (let o = e.anchorNode; o; o = l(o))
            if (t.has(o)) {
              n = o;
              break;
            }
          let o = n && this.view.docView.nearestDesc(n);
          if (
            o &&
            o.ignoreMutation({
              type: 'selection',
              target: 3 == n.nodeType ? n.parentNode : n,
            })
          )
            return this.setCurSelection(), !0;
        }
        pendingRecords() {
          if (this.observer)
            for (let e of this.observer.takeRecords()) this.queue.push(e);
          return this.queue;
        }
        flush() {
          let { view: e } = this;
          if (!e.docView || this.flushingSoon > -1) return;
          let t = this.pendingRecords();
          t.length && (this.queue = []);
          let n = e.domSelectionRange(),
            i =
              !this.suppressingSelectionUpdates &&
              !this.currentSelection.eq(n) &&
              ek(e) &&
              !this.ignoreSelectionChange(n),
            s = -1,
            r = -1,
            l = !1,
            d = [];
          if (e.editable)
            for (let e = 0; e < t.length; e++) {
              let n = this.registerMutation(t[e], d);
              n &&
                ((s = s < 0 ? n.from : Math.min(n.from, s)),
                (r = r < 0 ? n.to : Math.max(n.to, r)),
                n.typeOver && (l = !0));
            }
          if (C && d.length > 1) {
            let e = d.filter(e => 'BR' == e.nodeName);
            if (2 == e.length) {
              let t = e[0],
                n = e[1];
              t.parentNode && t.parentNode.parentNode == n.parentNode
                ? n.remove()
                : t.remove();
            }
          }
          let a = null;
          s < 0 &&
          i &&
          e.input.lastFocus > Date.now() - 200 &&
          Math.max(e.input.lastTouch, e.input.lastClick.time) <
            Date.now() - 300 &&
          m(n) &&
          (a = eb(e)) &&
          a.eq(o.Y1.near(e.state.doc.resolve(0), 1))
            ? ((e.input.lastFocus = 0),
              ew(e),
              this.currentSelection.set(n),
              e.scrollToSelection())
            : (s > -1 || i) &&
              (s > -1 &&
                (e.docView.markDirty(s, r),
                tP.has(e) ||
                  (tP.set(e, null),
                  -1 ===
                    ['normal', 'nowrap', 'pre-line'].indexOf(
                      getComputedStyle(e.dom).whiteSpace
                    )) ||
                  ((e.requiresGeckoHackNode = C),
                  tA ||
                    (console.warn(
                      "ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."
                    ),
                    (tA = !0)))),
              this.handleDOMChange(s, r, l, d),
              e.docView && e.docView.dirty
                ? e.updateState(e.state)
                : this.currentSelection.eq(n) || ew(e),
              this.currentSelection.set(n));
        }
        registerMutation(e, t) {
          if (t.indexOf(e.target) > -1) return null;
          let n = this.view.docView.nearestDesc(e.target);
          if (
            ('attributes' == e.type &&
              (n == this.view.docView ||
                'contenteditable' == e.attributeName ||
                ('style' == e.attributeName &&
                  !e.oldValue &&
                  !e.target.getAttribute('style')))) ||
            !n ||
            n.ignoreMutation(e)
          )
            return null;
          if ('childList' == e.type) {
            for (let n = 0; n < e.addedNodes.length; n++)
              t.push(e.addedNodes[n]);
            if (
              n.contentDOM &&
              n.contentDOM != n.dom &&
              !n.contentDOM.contains(e.target)
            )
              return { from: n.posBefore, to: n.posAfter };
            let o = e.previousSibling,
              i = e.nextSibling;
            if (O && S <= 11 && e.addedNodes.length)
              for (let t = 0; t < e.addedNodes.length; t++) {
                let { previousSibling: n, nextSibling: s } = e.addedNodes[t];
                (!n || 0 > Array.prototype.indexOf.call(e.addedNodes, n)) &&
                  (o = n),
                  (!s || 0 > Array.prototype.indexOf.call(e.addedNodes, s)) &&
                    (i = s);
              }
            let s = o && o.parentNode == e.target ? r(o) + 1 : 0,
              l = n.localPosFromDOM(e.target, s, -1),
              d =
                i && i.parentNode == e.target
                  ? r(i)
                  : e.target.childNodes.length;
            return { from: l, to: n.localPosFromDOM(e.target, d, 1) };
          }
          return 'attributes' == e.type
            ? { from: n.posAtStart - n.border, to: n.posAtEnd + n.border }
            : {
                from: n.posAtStart,
                to: n.posAtEnd,
                typeOver: e.target.nodeValue == e.oldValue,
              };
        }
      }
      let tP = new WeakMap(),
        tA = !1;
      function tV(e) {
        let t = e.pmViewDesc;
        if (t) return t.parseRule();
        if ('BR' == e.nodeName && e.parentNode) {
          if (T && /^(ul|ol)$/i.test(e.parentNode.nodeName)) {
            let e = document.createElement('div');
            return e.appendChild(document.createElement('li')), { skip: e };
          }
          if (
            e.parentNode.lastChild == e ||
            (T && /^(tr|table)$/i.test(e.parentNode.nodeName))
          )
            return { ignore: !0 };
        } else if ('IMG' == e.nodeName && e.getAttribute('mark-placeholder'))
          return { ignore: !0 };
        return null;
      }
      let tR =
        /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
      function tB(e, t, n) {
        return Math.max(n.anchor, n.head) > t.content.size
          ? null
          : ex(e, t.resolve(n.anchor), t.resolve(n.head));
      }
      function tq(e, t, n) {
        let o = e.depth,
          i = t ? e.end() : e.pos;
        for (; o > 0 && (t || e.indexAfter(o) == e.node(o).childCount); )
          o--, i++, (t = !1);
        if (n) {
          let t = e.node(o).maybeChild(e.indexAfter(o));
          for (; t && !t.isLeaf; ) (t = t.firstChild), i++;
        }
        return i;
      }
      function tz(e) {
        if (2 != e.length) return !1;
        let t = e.charCodeAt(0),
          n = e.charCodeAt(1);
        return t >= 56320 && t <= 57343 && n >= 55296 && n <= 56319;
      }
      let tI = eW;
      class tL {
        constructor(e, t) {
          (this._root = null),
            (this.focused = !1),
            (this.trackWrites = null),
            (this.mounted = !1),
            (this.markCursor = null),
            (this.cursorWrapper = null),
            (this.lastSelectedViewDesc = void 0),
            (this.input = new e0()),
            (this.prevDirectPlugins = []),
            (this.pluginViews = []),
            (this.requiresGeckoHackNode = !1),
            (this.dragging = null),
            (this._props = t),
            (this.state = t.state),
            (this.directPlugins = t.plugins || []),
            this.directPlugins.forEach(tH),
            (this.dispatch = this.dispatch.bind(this)),
            (this.dom = (e && e.mount) || document.createElement('div')),
            e &&
              (e.appendChild
                ? e.appendChild(this.dom)
                : 'function' == typeof e
                  ? e(this.dom)
                  : e.mount && (this.mounted = !0)),
            (this.editable = tW(this)),
            tK(this),
            (this.nodeViews = t$(this)),
            (this.docView = ei(
              this.state.doc,
              tF(this),
              tM(this),
              this.dom,
              this
            )),
            (this.domObserver = new tE(this, (e, t, n, s) =>
              (function (e, t, n, s, r) {
                let l,
                  d,
                  a,
                  c,
                  h,
                  u,
                  f =
                    e.input.compositionPendingChanges ||
                    (e.composing ? e.input.compositionID : 0);
                if (((e.input.compositionPendingChanges = 0), t < 0)) {
                  let t =
                      e.input.lastSelectionTime > Date.now() - 50
                        ? e.input.lastSelectionOrigin
                        : null,
                    n = eb(e, t);
                  if (n && !e.state.selection.eq(n)) {
                    if (
                      x &&
                      V &&
                      13 === e.input.lastKeyCode &&
                      Date.now() - 100 < e.input.lastKeyCodeTime &&
                      e.someProp('handleKeyDown', t => t(e, g(13, 'Enter')))
                    )
                      return;
                    let o = e.state.tr.setSelection(n);
                    'pointer' == t
                      ? o.setMeta('pointer', !0)
                      : 'key' == t && o.scrollIntoView(),
                      f && o.setMeta('composition', f),
                      e.dispatch(o);
                  }
                  return;
                }
                let p = e.state.doc.resolve(t),
                  y = p.sharedDepth(n);
                (t = p.before(y + 1)),
                  (n = e.state.doc.resolve(n).after(y + 1));
                let b = e.state.selection,
                  v = (function (e, t, n) {
                    let o,
                      {
                        node: s,
                        fromOffset: r,
                        toOffset: l,
                        from: d,
                        to: a,
                      } = e.docView.parseRange(t, n),
                      c = e.domSelectionRange(),
                      h = c.anchorNode;
                    if (
                      (h &&
                        e.dom.contains(1 == h.nodeType ? h : h.parentNode) &&
                        ((o = [{ node: h, offset: c.anchorOffset }]),
                        m(c) ||
                          o.push({ node: c.focusNode, offset: c.focusOffset })),
                      x && 8 === e.input.lastKeyCode)
                    )
                      for (let e = l; e > r; e--) {
                        let t = s.childNodes[e - 1],
                          n = t.pmViewDesc;
                        if ('BR' == t.nodeName && !n) {
                          l = e;
                          break;
                        }
                        if (!n || n.size) break;
                      }
                    let u = e.state.doc,
                      f =
                        e.someProp('domParser') ||
                        i.aw.fromSchema(e.state.schema),
                      p = u.resolve(d),
                      g = null,
                      y = f.parse(s, {
                        topNode: p.parent,
                        topMatch: p.parent.contentMatchAt(p.index()),
                        topOpen: !0,
                        from: r,
                        to: l,
                        preserveWhitespace:
                          'pre' != p.parent.type.whitespace || 'full',
                        findPositions: o,
                        ruleFromNode: tV,
                        context: p,
                      });
                    if (o && null != o[0].pos) {
                      let e = o[0].pos,
                        t = o[1] && o[1].pos;
                      null == t && (t = e),
                        (g = { anchor: e + d, head: t + d });
                    }
                    return { doc: y, sel: g, from: d, to: a };
                  })(e, t, n),
                  w = e.state.doc,
                  D = w.slice(v.from, v.to);
                8 === e.input.lastKeyCode &&
                Date.now() - 100 < e.input.lastKeyCodeTime
                  ? ((l = e.state.selection.to), (d = 'end'))
                  : ((l = e.state.selection.from), (d = 'start')),
                  (e.input.lastKeyCode = null);
                let N = (function (e, t, n, o, i) {
                  let s = e.findDiffStart(t, n);
                  if (null == s) return null;
                  let { a: r, b: l } = e.findDiffEnd(t, n + e.size, n + t.size);
                  if ('end' == i) {
                    let e = Math.max(0, s - Math.min(r, l));
                    o -= r + e - s;
                  }
                  if (r < s && e.size < t.size) {
                    let e = o <= s && o >= r ? s - o : 0;
                    (s -= e) &&
                      s < t.size &&
                      tz(t.textBetween(s - 1, s + 1)) &&
                      (s += e ? 1 : -1),
                      (l = s + (l - r)),
                      (r = s);
                  } else if (l < s) {
                    let t = o <= s && o >= l ? s - o : 0;
                    (s -= t) &&
                      s < e.size &&
                      tz(e.textBetween(s - 1, s + 1)) &&
                      (s += t ? 1 : -1),
                      (r = s + (r - l)),
                      (l = s);
                  }
                  return { start: s, endA: r, endB: l };
                })(D.content, v.doc.content, v.from, l, d);
                if (
                  ((E && e.input.lastIOSEnter > Date.now() - 225) || V) &&
                  r.some(e => 1 == e.nodeType && !tR.test(e.nodeName)) &&
                  (!N || N.endA >= N.endB) &&
                  e.someProp('handleKeyDown', t => t(e, g(13, 'Enter')))
                ) {
                  e.input.lastIOSEnter = 0;
                  return;
                }
                if (!N) {
                  if (
                    s &&
                    b instanceof o.Bs &&
                    !b.empty &&
                    b.$head.sameParent(b.$anchor) &&
                    !e.composing &&
                    !(v.sel && v.sel.anchor != v.sel.head)
                  )
                    N = { start: b.from, endA: b.to, endB: b.to };
                  else {
                    if (v.sel) {
                      let t = tB(e, e.state.doc, v.sel);
                      if (t && !t.eq(e.state.selection)) {
                        let n = e.state.tr.setSelection(t);
                        f && n.setMeta('composition', f), e.dispatch(n);
                      }
                    }
                    return;
                  }
                }
                if (
                  x &&
                  e.cursorWrapper &&
                  v.sel &&
                  v.sel.anchor == e.cursorWrapper.deco.from &&
                  v.sel.head == v.sel.anchor
                ) {
                  let e = N.endB - N.start;
                  v.sel = { anchor: v.sel.anchor + e, head: v.sel.anchor + e };
                }
                e.input.domChangeCount++,
                  e.state.selection.from < e.state.selection.to &&
                    N.start == N.endB &&
                    e.state.selection instanceof o.Bs &&
                    (N.start > e.state.selection.from &&
                    N.start <= e.state.selection.from + 2 &&
                    e.state.selection.from >= v.from
                      ? (N.start = e.state.selection.from)
                      : N.endA < e.state.selection.to &&
                        N.endA >= e.state.selection.to - 2 &&
                        e.state.selection.to <= v.to &&
                        ((N.endB += e.state.selection.to - N.endA),
                        (N.endA = e.state.selection.to))),
                  O &&
                    S <= 11 &&
                    N.endB == N.start + 1 &&
                    N.endA == N.start &&
                    N.start > v.from &&
                    ' \xa0' ==
                      v.doc.textBetween(
                        N.start - v.from - 1,
                        N.start - v.from + 1
                      ) &&
                    (N.start--, N.endA--, N.endB--);
                let C = v.doc.resolveNoCache(N.start - v.from),
                  M = v.doc.resolveNoCache(N.endB - v.from),
                  k = w.resolve(N.start),
                  T =
                    C.sameParent(M) &&
                    C.parent.inlineContent &&
                    k.end() >= N.endA;
                if (
                  ((E &&
                    e.input.lastIOSEnter > Date.now() - 225 &&
                    (!T ||
                      r.some(e => 'DIV' == e.nodeName || 'P' == e.nodeName))) ||
                    (!T &&
                      C.pos < v.doc.content.size &&
                      !C.sameParent(M) &&
                      (a = o.Y1.findFrom(v.doc.resolve(C.pos + 1), 1, !0)) &&
                      a.head == M.pos)) &&
                  e.someProp('handleKeyDown', t => t(e, g(13, 'Enter')))
                ) {
                  e.input.lastIOSEnter = 0;
                  return;
                }
                if (
                  e.state.selection.anchor > N.start &&
                  (function (e, t, n, o, i) {
                    if (
                      !o.parent.isTextblock ||
                      n - t <= i.pos - o.pos ||
                      tq(o, !0, !1) < i.pos
                    )
                      return !1;
                    let s = e.resolve(t);
                    if (
                      s.parentOffset < s.parent.content.size ||
                      !s.parent.isTextblock
                    )
                      return !1;
                    let r = e.resolve(tq(s, !0, !0));
                    return (
                      !(
                        !r.parent.isTextblock ||
                        r.pos > n ||
                        tq(r, !0, !1) < n
                      ) &&
                      o.parent.content.cut(o.parentOffset).eq(r.parent.content)
                    );
                  })(w, N.start, N.endA, C, M) &&
                  e.someProp('handleKeyDown', t => t(e, g(8, 'Backspace')))
                ) {
                  V && x && e.domObserver.suppressSelectionUpdates();
                  return;
                }
                x &&
                  V &&
                  N.endB == N.start &&
                  (e.input.lastAndroidDelete = Date.now()),
                  V &&
                    !T &&
                    C.start() != M.start() &&
                    0 == M.parentOffset &&
                    C.depth == M.depth &&
                    v.sel &&
                    v.sel.anchor == v.sel.head &&
                    v.sel.head == N.endA &&
                    ((N.endB -= 2),
                    (M = v.doc.resolveNoCache(N.endB - v.from)),
                    setTimeout(() => {
                      e.someProp('handleKeyDown', function (t) {
                        return t(e, g(13, 'Enter'));
                      });
                    }, 20));
                let P = N.start,
                  A = N.endA;
                if (T) {
                  if (C.pos == M.pos)
                    O &&
                      S <= 11 &&
                      0 == C.parentOffset &&
                      (e.domObserver.suppressSelectionUpdates(),
                      setTimeout(() => ew(e), 20)),
                      (c = e.state.tr.delete(P, A)),
                      (h = w.resolve(N.start).marksAcross(w.resolve(N.endA)));
                  else if (
                    N.endA == N.endB &&
                    (u = (function (e, t) {
                      let n = e.firstChild.marks,
                        o = t.firstChild.marks,
                        s = n,
                        r = o,
                        l,
                        d,
                        a;
                      for (let e = 0; e < o.length; e++)
                        s = o[e].removeFromSet(s);
                      for (let e = 0; e < n.length; e++)
                        r = n[e].removeFromSet(r);
                      if (1 == s.length && 0 == r.length)
                        (d = s[0]),
                          (l = 'add'),
                          (a = e => e.mark(d.addToSet(e.marks)));
                      else {
                        if (0 != s.length || 1 != r.length) return null;
                        (d = r[0]),
                          (l = 'remove'),
                          (a = e => e.mark(d.removeFromSet(e.marks)));
                      }
                      let c = [];
                      for (let e = 0; e < t.childCount; e++)
                        c.push(a(t.child(e)));
                      if (i.HY.from(c).eq(e)) return { mark: d, type: l };
                    })(
                      C.parent.content.cut(C.parentOffset, M.parentOffset),
                      k.parent.content.cut(k.parentOffset, N.endA - k.start())
                    ))
                  )
                    (c = e.state.tr),
                      'add' == u.type
                        ? c.addMark(P, A, u.mark)
                        : c.removeMark(P, A, u.mark);
                  else if (
                    C.parent.child(C.index()).isText &&
                    C.index() == M.index() - (M.textOffset ? 0 : 1)
                  ) {
                    let t = C.parent.textBetween(
                      C.parentOffset,
                      M.parentOffset
                    );
                    if (e.someProp('handleTextInput', n => n(e, P, A, t)))
                      return;
                    c = e.state.tr.insertText(t, P, A);
                  }
                }
                if (
                  (c ||
                    (c = e.state.tr.replace(
                      P,
                      A,
                      v.doc.slice(N.start - v.from, N.endB - v.from)
                    )),
                  v.sel)
                ) {
                  let t = tB(e, c.doc, v.sel);
                  t &&
                    !(
                      (x &&
                        V &&
                        e.composing &&
                        t.empty &&
                        (N.start != N.endB ||
                          e.input.lastAndroidDelete < Date.now() - 100) &&
                        (t.head == P || t.head == c.mapping.map(A) - 1)) ||
                      (O && t.empty && t.head == P)
                    ) &&
                    c.setSelection(t);
                }
                h && c.ensureMarks(h),
                  f && c.setMeta('composition', f),
                  e.dispatch(c.scrollIntoView());
              })(this, e, t, n, s)
            )),
            this.domObserver.start(),
            (function (e) {
              for (let t in eJ) {
                let n = eJ[t];
                e.dom.addEventListener(
                  t,
                  (e.input.eventHandlers[t] = t => {
                    !(function (e, t) {
                      if (!t.bubbles) return !0;
                      if (t.defaultPrevented) return !1;
                      for (let n = t.target; n != e.dom; n = n.parentNode)
                        if (
                          !n ||
                          11 == n.nodeType ||
                          (n.pmViewDesc && n.pmViewDesc.stopEvent(t))
                        )
                          return !1;
                      return !0;
                    })(e, t) ||
                      e3(e, t) ||
                      (!e.editable && t.type in eQ) ||
                      n(e, t);
                  }),
                  eZ[t] ? { passive: !0 } : void 0
                );
              }
              T && e.dom.addEventListener('input', () => null), e2(e);
            })(this),
            this.updatePluginViews();
        }
        get composing() {
          return this.input.composing;
        }
        get props() {
          if (this._props.state != this.state) {
            let e = this._props;
            for (let t in ((this._props = {}), e)) this._props[t] = e[t];
            this._props.state = this.state;
          }
          return this._props;
        }
        update(e) {
          e.handleDOMEvents != this._props.handleDOMEvents && e2(this);
          let t = this._props;
          (this._props = e),
            e.plugins &&
              (e.plugins.forEach(tH), (this.directPlugins = e.plugins)),
            this.updateStateInner(e.state, t);
        }
        setProps(e) {
          let t = {};
          for (let e in this._props) t[e] = this._props[e];
          for (let n in ((t.state = this.state), e)) t[n] = e[n];
          this.update(t);
        }
        updateState(e) {
          this.updateStateInner(e, this._props);
        }
        updateStateInner(e, t) {
          var n, o, i;
          let s = this.state,
            r = !1,
            l = !1;
          e.storedMarks && this.composing && (tn(this), (l = !0)),
            (this.state = e);
          let d = s.plugins != e.plugins || this._props.plugins != t.plugins;
          if (
            d ||
            this._props.plugins != t.plugins ||
            this._props.nodeViews != t.nodeViews
          ) {
            let e = t$(this);
            (function (e, t) {
              let n = 0,
                o = 0;
              for (let o in e) {
                if (e[o] != t[o]) return !0;
                n++;
              }
              for (let e in t) o++;
              return n != o;
            })(e, this.nodeViews) && ((this.nodeViews = e), (r = !0));
          }
          (d || t.handleDOMEvents != this._props.handleDOMEvents) && e2(this),
            (this.editable = tW(this)),
            tK(this);
          let a = tM(this),
            h = tF(this),
            u =
              s.plugins == e.plugins || s.doc.eq(e.doc)
                ? e.scrollToSelection > s.scrollToSelection
                  ? 'to selection'
                  : 'preserve'
                : 'reset',
            f = r || !this.docView.matchesNode(e.doc, h, a);
          (f || !e.selection.eq(s.selection)) && (l = !0);
          let p =
            'preserve' == u &&
            l &&
            null == this.dom.style.overflowAnchor &&
            (function (e) {
              let t,
                n,
                o = e.dom.getBoundingClientRect(),
                i = Math.max(0, o.top);
              for (
                let s = (o.left + o.right) / 2, r = i + 1;
                r < Math.min(innerHeight, o.bottom);
                r += 5
              ) {
                let o = e.root.elementFromPoint(s, r);
                if (!o || o == e.dom || !e.dom.contains(o)) continue;
                let l = o.getBoundingClientRect();
                if (l.top >= i - 20) {
                  (t = o), (n = l.top);
                  break;
                }
              }
              return { refDOM: t, refTop: n, stack: I(e.dom) };
            })(this);
          if (l) {
            let t, n, l;
            this.domObserver.stop();
            let d =
              f &&
              (O || x) &&
              !this.composing &&
              !s.selection.empty &&
              !e.selection.empty &&
              ((o = s.selection),
              (i = e.selection),
              (l = Math.min(
                o.$anchor.sharedDepth(o.head),
                i.$anchor.sharedDepth(i.head)
              )),
              o.$anchor.start(l) != i.$anchor.start(l));
            if (f) {
              let t = x
                ? (this.trackWrites = this.domSelectionRange().focusNode)
                : null;
              (r || !this.docView.update(e.doc, h, a, this)) &&
                (this.docView.updateOuterDeco([]),
                this.docView.destroy(),
                (this.docView = ei(e.doc, h, a, this.dom, this))),
                t && !this.trackWrites && (d = !0);
            }
            d ||
            !(
              this.input.mouseDown &&
              this.domObserver.currentSelection.eq(this.domSelectionRange()) &&
              ((t = this.docView.domFromPos(this.state.selection.anchor, 0)),
              (n = this.domSelectionRange()),
              c(t.node, t.offset, n.anchorNode, n.anchorOffset))
            )
              ? ew(this, d)
              : (eC(this, e.selection), this.domObserver.setCurSelection()),
              this.domObserver.start();
          }
          this.updatePluginViews(s),
            (null === (n = this.dragging) || void 0 === n ? void 0 : n.node) &&
              !s.doc.eq(e.doc) &&
              this.updateDraggedNode(this.dragging, s),
            'reset' == u
              ? (this.dom.scrollTop = 0)
              : 'to selection' == u
                ? this.scrollToSelection()
                : p &&
                  (function ({ refDOM: e, refTop: t, stack: n }) {
                    let o = e ? e.getBoundingClientRect().top : 0;
                    L(n, 0 == o ? 0 : o - t);
                  })(p);
        }
        scrollToSelection() {
          let e = this.domSelectionRange().focusNode;
          if (this.someProp('handleScrollToSelection', e => e(this)));
          else if (this.state.selection instanceof o.qv) {
            let t = this.docView.domAfterPos(this.state.selection.from);
            1 == t.nodeType && z(this, t.getBoundingClientRect(), e);
          } else z(this, this.coordsAtPos(this.state.selection.head, 1), e);
        }
        destroyPluginViews() {
          let e;
          for (; (e = this.pluginViews.pop()); ) e.destroy && e.destroy();
        }
        updatePluginViews(e) {
          if (
            e &&
            e.plugins == this.state.plugins &&
            this.directPlugins == this.prevDirectPlugins
          )
            for (let t = 0; t < this.pluginViews.length; t++) {
              let n = this.pluginViews[t];
              n.update && n.update(this, e);
            }
          else {
            (this.prevDirectPlugins = this.directPlugins),
              this.destroyPluginViews();
            for (let e = 0; e < this.directPlugins.length; e++) {
              let t = this.directPlugins[e];
              t.spec.view && this.pluginViews.push(t.spec.view(this));
            }
            for (let e = 0; e < this.state.plugins.length; e++) {
              let t = this.state.plugins[e];
              t.spec.view && this.pluginViews.push(t.spec.view(this));
            }
          }
        }
        updateDraggedNode(e, t) {
          let n = e.node,
            i = -1;
          if (this.state.doc.nodeAt(n.from) == n.node) i = n.from;
          else {
            let e = n.from + (this.state.doc.content.size - t.doc.content.size);
            (e > 0 && this.state.doc.nodeAt(e)) == n.node && (i = e);
          }
          this.dragging = new tl(
            e.slice,
            e.move,
            i < 0 ? void 0 : o.qv.create(this.state.doc, i)
          );
        }
        someProp(e, t) {
          let n = this._props && this._props[e],
            o;
          if (null != n && (o = t ? t(n) : n)) return o;
          for (let n = 0; n < this.directPlugins.length; n++) {
            let i = this.directPlugins[n].props[e];
            if (null != i && (o = t ? t(i) : i)) return o;
          }
          let i = this.state.plugins;
          if (i)
            for (let n = 0; n < i.length; n++) {
              let s = i[n].props[e];
              if (null != s && (o = t ? t(s) : s)) return o;
            }
        }
        hasFocus() {
          if (O) {
            let e = this.root.activeElement;
            if (e == this.dom) return !0;
            if (!e || !this.dom.contains(e)) return !1;
            for (; e && this.dom != e && this.dom.contains(e); ) {
              if ('false' == e.contentEditable) return !1;
              e = e.parentElement;
            }
            return !0;
          }
          return this.root.activeElement == this.dom;
        }
        focus() {
          this.domObserver.stop(),
            this.editable &&
              (function (e) {
                if (e.setActive) return e.setActive();
                if (F) return e.focus(F);
                let t = I(e);
                e.focus(
                  null == F
                    ? {
                        get preventScroll() {
                          return (F = { preventScroll: !0 }), !0;
                        },
                      }
                    : void 0
                ),
                  F || ((F = !1), L(t, 0));
              })(this.dom),
            ew(this),
            this.domObserver.start();
        }
        get root() {
          let e = this._root;
          if (null == e) {
            for (let e = this.dom.parentNode; e; e = e.parentNode)
              if (9 == e.nodeType || (11 == e.nodeType && e.host))
                return (
                  e.getSelection ||
                    (Object.getPrototypeOf(e).getSelection = () =>
                      e.ownerDocument.getSelection()),
                  (this._root = e)
                );
          }
          return e || document;
        }
        updateRoot() {
          this._root = null;
        }
        posAtCoords(e) {
          return (function (e, t) {
            var n;
            let o,
              i,
              s = e.dom.ownerDocument,
              r,
              d = 0,
              c = (function (e, t, n) {
                if (e.caretPositionFromPoint)
                  try {
                    let o = e.caretPositionFromPoint(t, n);
                    if (o) return { node: o.offsetNode, offset: o.offset };
                  } catch (e) {}
                if (e.caretRangeFromPoint) {
                  let o = e.caretRangeFromPoint(t, n);
                  if (o)
                    return { node: o.startContainer, offset: o.startOffset };
                }
              })(s, t.left, t.top);
            c && ({ node: r, offset: d } = c);
            let h = (e.root.elementFromPoint ? e.root : s).elementFromPoint(
              t.left,
              t.top
            );
            if (!h || !e.dom.contains(1 != h.nodeType ? h.parentNode : h)) {
              let n = e.dom.getBoundingClientRect();
              if (
                !K(t, n) ||
                !(h = (function e(t, n, o) {
                  let i = t.childNodes.length;
                  if (i && o.top < o.bottom)
                    for (
                      let s = Math.max(
                          0,
                          Math.min(
                            i - 1,
                            Math.floor(
                              (i * (n.top - o.top)) / (o.bottom - o.top)
                            ) - 2
                          )
                        ),
                        r = s;
                      ;

                    ) {
                      let o = t.childNodes[r];
                      if (1 == o.nodeType) {
                        let t = o.getClientRects();
                        for (let i = 0; i < t.length; i++) {
                          let s = t[i];
                          if (K(n, s)) return e(o, n, s);
                        }
                      }
                      if ((r = (r + 1) % i) == s) break;
                    }
                  return t;
                })(e.dom, t, n))
              )
                return null;
            }
            if (T)
              for (let e = h; r && e; e = l(e)) e.draggable && (r = void 0);
            if (
              ((h =
                (o = (n = h).parentNode) &&
                /^li$/i.test(o.nodeName) &&
                t.left < n.getBoundingClientRect().left
                  ? o
                  : n),
              r)
            ) {
              let n;
              if (
                C &&
                1 == r.nodeType &&
                (d = Math.min(d, r.childNodes.length)) < r.childNodes.length
              ) {
                let e = r.childNodes[d],
                  n;
                'IMG' == e.nodeName &&
                  (n = e.getBoundingClientRect()).right <= t.left &&
                  n.bottom > t.top &&
                  d++;
              }
              R &&
                d &&
                1 == r.nodeType &&
                1 == (n = r.childNodes[d - 1]).nodeType &&
                'false' == n.contentEditable &&
                n.getBoundingClientRect().top >= t.top &&
                d--,
                r == e.dom &&
                d == r.childNodes.length - 1 &&
                1 == r.lastChild.nodeType &&
                t.top > r.lastChild.getBoundingClientRect().bottom
                  ? (i = e.state.doc.content.size)
                  : (0 == d ||
                      1 != r.nodeType ||
                      'BR' != r.childNodes[d - 1].nodeName) &&
                    (i = (function (e, t, n, o) {
                      let i = -1;
                      for (let n = t, s = !1; n != e.dom; ) {
                        let t = e.docView.nearestDesc(n, !0);
                        if (!t) return null;
                        if (
                          1 == t.dom.nodeType &&
                          ((t.node.isBlock && t.parent && !s) || !t.contentDOM)
                        ) {
                          let e = t.dom.getBoundingClientRect();
                          if (
                            (t.node.isBlock &&
                              t.parent &&
                              !s &&
                              ((s = !0),
                              e.left > o.left || e.top > o.top
                                ? (i = t.posBefore)
                                : (e.right < o.left || e.bottom < o.top) &&
                                  (i = t.posAfter)),
                            !t.contentDOM && i < 0 && !t.node.isText)
                          )
                            return (
                              t.node.isBlock
                                ? o.top < (e.top + e.bottom) / 2
                                : o.left < (e.left + e.right) / 2
                            )
                              ? t.posBefore
                              : t.posAfter;
                        }
                        n = t.dom.parentNode;
                      }
                      return i > -1 ? i : e.docView.posFromDOM(t, n, -1);
                    })(e, r, d, t));
            }
            null == i &&
              (i = (function (e, t, n) {
                let { node: o, offset: i } = (function e(t, n) {
                    let o,
                      i,
                      s,
                      r = 2e8,
                      l,
                      d = 0,
                      c = n.top,
                      h = n.top;
                    for (
                      let e = t.firstChild, u = 0;
                      e;
                      e = e.nextSibling, u++
                    ) {
                      let t;
                      if (1 == e.nodeType) t = e.getClientRects();
                      else {
                        if (3 != e.nodeType) continue;
                        t = a(e).getClientRects();
                      }
                      for (let a = 0; a < t.length; a++) {
                        let f = t[a];
                        if (f.top <= c && f.bottom >= h) {
                          (c = Math.max(f.bottom, c)), (h = Math.min(f.top, h));
                          let t =
                            f.left > n.left
                              ? f.left - n.left
                              : f.right < n.left
                                ? n.left - f.right
                                : 0;
                          if (t < r) {
                            (s = e),
                              (r = t),
                              (l =
                                t && 3 == s.nodeType
                                  ? {
                                      left: f.right < n.left ? f.right : f.left,
                                      top: n.top,
                                    }
                                  : n),
                              1 == e.nodeType &&
                                t &&
                                (d =
                                  u +
                                  (n.left >= (f.left + f.right) / 2 ? 1 : 0));
                            continue;
                          }
                        } else
                          f.top > n.top &&
                            !o &&
                            f.left <= n.left &&
                            f.right >= n.left &&
                            ((o = e),
                            (i = {
                              left: Math.max(f.left, Math.min(f.right, n.left)),
                              top: f.top,
                            }));
                        !s &&
                          ((n.left >= f.right && n.top >= f.top) ||
                            (n.left >= f.left && n.top >= f.bottom)) &&
                          (d = u + 1);
                      }
                    }
                    return (!s && o && ((s = o), (l = i), (r = 0)),
                    s && 3 == s.nodeType)
                      ? (function (e, t) {
                          let n = e.nodeValue.length,
                            o = document.createRange();
                          for (let i = 0; i < n; i++) {
                            o.setEnd(e, i + 1), o.setStart(e, i);
                            let n = $(o, 1);
                            if (n.top != n.bottom && K(t, n))
                              return {
                                node: e,
                                offset:
                                  i +
                                  (t.left >= (n.left + n.right) / 2 ? 1 : 0),
                              };
                          }
                          return { node: e, offset: 0 };
                        })(s, l)
                      : !s || (r && 1 == s.nodeType)
                        ? { node: t, offset: d }
                        : e(s, l);
                  })(t, n),
                  s = -1;
                if (1 == o.nodeType && !o.firstChild) {
                  let e = o.getBoundingClientRect();
                  s =
                    e.left != e.right && n.left > (e.left + e.right) / 2
                      ? 1
                      : -1;
                }
                return e.docView.posFromDOM(o, i, s);
              })(e, h, t));
            let u = e.docView.nearestDesc(h, !0);
            return { pos: i, inside: u ? u.posAtStart - u.border : -1 };
          })(this, e);
        }
        coordsAtPos(e, t = 1) {
          return _(this, e, t);
        }
        domAtPos(e, t = 0) {
          return this.docView.domFromPos(e, t);
        }
        nodeDOM(e) {
          let t = this.docView.descAt(e);
          return t ? t.nodeDOM : null;
        }
        posAtDOM(e, t, n = -1) {
          let o = this.docView.posFromDOM(e, t, n);
          if (null == o) throw RangeError('DOM position not inside the editor');
          return o;
        }
        endOfTextblock(e, t) {
          var n, o, i;
          let s, r;
          return (
            (n = this),
            (o = t || this.state),
            (i = e),
            X == o && J == i
              ? Q
              : ((X = o),
                (J = i),
                (Q =
                  'up' == i || 'down' == i
                    ? ((s = o.selection),
                      (r = 'up' == i ? s.$from : s.$to),
                      U(n, o, () => {
                        let { node: e } = n.docView.domFromPos(
                          r.pos,
                          'up' == i ? -1 : 1
                        );
                        for (;;) {
                          let t = n.docView.nearestDesc(e, !0);
                          if (!t) break;
                          if (t.node.isBlock) {
                            e = t.contentDOM || t.dom;
                            break;
                          }
                          e = t.dom.parentNode;
                        }
                        let t = _(n, r.pos, 1);
                        for (let n = e.firstChild; n; n = n.nextSibling) {
                          let e;
                          if (1 == n.nodeType) e = n.getClientRects();
                          else {
                            if (3 != n.nodeType) continue;
                            e = a(n, 0, n.nodeValue.length).getClientRects();
                          }
                          for (let n = 0; n < e.length; n++) {
                            let o = e[n];
                            if (
                              o.bottom > o.top + 1 &&
                              ('up' == i
                                ? t.top - o.top > (o.bottom - t.top) * 2
                                : o.bottom - t.bottom > (t.bottom - o.top) * 2)
                            )
                              return !1;
                          }
                        }
                        return !0;
                      }))
                    : (function (e, t, n) {
                        let { $head: o } = t.selection;
                        if (!o.parent.isTextblock) return !1;
                        let i = o.parentOffset,
                          s = i == o.parent.content.size,
                          r = e.domSelection();
                        return j.test(o.parent.textContent) && r.modify
                          ? U(e, t, () => {
                              let {
                                  focusNode: t,
                                  focusOffset: i,
                                  anchorNode: s,
                                  anchorOffset: l,
                                } = e.domSelectionRange(),
                                d = r.caretBidiLevel;
                              r.modify('move', n, 'character');
                              let a = o.depth
                                  ? e.docView.domAfterPos(o.before())
                                  : e.dom,
                                { focusNode: c, focusOffset: h } =
                                  e.domSelectionRange(),
                                u =
                                  (c &&
                                    !a.contains(
                                      1 == c.nodeType ? c : c.parentNode
                                    )) ||
                                  (t == c && i == h);
                              try {
                                r.collapse(s, l),
                                  t &&
                                    (t != s || i != l) &&
                                    r.extend &&
                                    r.extend(t, i);
                              } catch (e) {}
                              return null != d && (r.caretBidiLevel = d), u;
                            })
                          : 'left' == n || 'backward' == n
                            ? !i
                            : s;
                      })(n, o, i)))
          );
        }
        pasteHTML(e, t) {
          return ts(this, '', e, !1, t || new ClipboardEvent('paste'));
        }
        pasteText(e, t) {
          return ts(this, e, null, !0, t || new ClipboardEvent('paste'));
        }
        destroy() {
          this.docView &&
            (!(function (e) {
              for (let t in (e.domObserver.stop(), e.input.eventHandlers))
                e.dom.removeEventListener(t, e.input.eventHandlers[t]);
              clearTimeout(e.input.composingTimeout),
                clearTimeout(e.input.lastIOSEnterFallbackTimeout);
            })(this),
            this.destroyPluginViews(),
            this.mounted
              ? (this.docView.update(this.state.doc, [], tM(this), this),
                (this.dom.textContent = ''))
              : this.dom.parentNode &&
                this.dom.parentNode.removeChild(this.dom),
            this.docView.destroy(),
            (this.docView = null));
        }
        get isDestroyed() {
          return null == this.docView;
        }
        dispatchEvent(e) {
          e3(this, e) ||
            !eJ[e.type] ||
            (!this.editable && e.type in eQ) ||
            eJ[e.type](this, e);
        }
        dispatch(e) {
          let t = this._props.dispatchTransaction;
          t ? t.call(this, e) : this.updateState(this.state.apply(e));
        }
        domSelectionRange() {
          return T &&
            11 === this.root.nodeType &&
            (function (e) {
              let t = e.activeElement;
              for (; t && t.shadowRoot; ) t = t.shadowRoot.activeElement;
              return t;
            })(this.dom.ownerDocument) == this.dom
            ? (function (e) {
                let t;
                function n(e) {
                  e.preventDefault(),
                    e.stopImmediatePropagation(),
                    (t = e.getTargetRanges()[0]);
                }
                e.dom.addEventListener('beforeinput', n, !0),
                  document.execCommand('indent'),
                  e.dom.removeEventListener('beforeinput', n, !0);
                let o = t.startContainer,
                  i = t.startOffset,
                  s = t.endContainer,
                  r = t.endOffset,
                  l = e.domAtPos(e.state.selection.anchor);
                return (
                  c(l.node, l.offset, s, r) && ([o, i, s, r] = [s, r, o, i]),
                  {
                    anchorNode: o,
                    anchorOffset: i,
                    focusNode: s,
                    focusOffset: r,
                  }
                );
              })(this)
            : this.domSelection();
        }
        domSelection() {
          return this.root.getSelection();
        }
      }
      function tF(e) {
        let t = Object.create(null);
        return (
          (t.class = 'ProseMirror'),
          (t.contenteditable = String(e.editable)),
          e.someProp('attributes', n => {
            if (('function' == typeof n && (n = n(e.state)), n))
              for (let e in n)
                'class' == e
                  ? (t.class += ' ' + n[e])
                  : 'style' == e
                    ? (t.style = (t.style ? t.style + ';' : '') + n[e])
                    : t[e] ||
                      'contenteditable' == e ||
                      'nodeName' == e ||
                      (t[e] = String(n[e]));
          }),
          t.translate || (t.translate = 'no'),
          [tf.node(0, e.state.doc.content.size, t)]
        );
      }
      function tK(e) {
        if (e.markCursor) {
          let t = document.createElement('img');
          (t.className = 'ProseMirror-separator'),
            t.setAttribute('mark-placeholder', 'true'),
            t.setAttribute('alt', ''),
            (e.cursorWrapper = {
              dom: t,
              deco: tf.widget(e.state.selection.head, t, {
                raw: !0,
                marks: e.markCursor,
              }),
            });
        } else e.cursorWrapper = null;
      }
      function tW(e) {
        return !e.someProp('editable', t => !1 === t(e.state));
      }
      function t$(e) {
        let t = Object.create(null);
        function n(e) {
          for (let n in e)
            Object.prototype.hasOwnProperty.call(t, n) || (t[n] = e[n]);
        }
        return e.someProp('nodeViews', n), e.someProp('markViews', n), t;
      }
      function tH(e) {
        if (
          e.spec.state ||
          e.spec.filterTransaction ||
          e.spec.appendTransaction
        )
          throw RangeError(
            'Plugins passed directly to the view must not have a state component'
          );
      }
    },
  },
]);
