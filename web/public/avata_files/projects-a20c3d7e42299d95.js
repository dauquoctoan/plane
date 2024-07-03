(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7326],
  {
    79369: function (l, e, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/[workspaceSlug]/projects',
        function () {
          return r(84589);
        },
      ]);
    },
    84589: function (l, e, r) {
      'use strict';
      r.r(e),
        r.d(e, {
          default: function () {
            return m;
          },
        });
      var i = r(24246),
        s = r(27378),
        t = r(50649),
        n = r(23258),
        o = r(14649),
        d = r(91256),
        a = r(64273),
        u = r(65709),
        c = r(96861),
        h = r(10779),
        p = r(1422),
        v = r(10634);
      let x = (0, t.Pi)(() => {
        let {
            currentWorkspaceDisplayFilters: l,
            currentWorkspaceFilters: e,
            updateDisplayFilters: r,
            updateFilters: t,
          } = (0, v.HK)(),
          {
            router: { workspaceSlug: n },
          } = (0, v.IX)(),
          {
            workspace: { workspaceMemberIds: o },
          } = (0, v.Kb)(),
          d = (0, s.useCallback)(
            (l, r) => {
              var i, s;
              if (!n) return;
              let o =
                null !== (i = null == e ? void 0 : e[l]) && void 0 !== i
                  ? i
                  : [];
              Array.isArray(r)
                ? r.forEach(l => {
                    o.includes(l) ? o.splice(o.indexOf(l), 1) : o.push(l);
                  })
                : (
                      null == e
                        ? void 0
                        : null === (s = e[l]) || void 0 === s
                          ? void 0
                          : s.includes(r)
                    )
                  ? o.splice(o.indexOf(r), 1)
                  : o.push(r),
                t(n, { [l]: o });
            },
            [e, t, n]
          ),
          x = 0 !== (0, p.w)(null != e ? e : {});
        return (0, i.jsxs)('div', {
          className:
            'flex py-2 border-b border-custom-border-200 md:hidden bg-custom-background-100 w-full',
          children: [
            (0, i.jsx)(h.FU, {
              value: null == l ? void 0 : l.order_by,
              onChange: e => {
                n &&
                  e !== (null == l ? void 0 : l.order_by) &&
                  r(n, { order_by: e });
              },
              isMobile: !0,
            }),
            (0, i.jsx)('div', {
              className:
                'border-l border-custom-border-200 flex justify-around w-full',
              children: (0, i.jsx)(c.lq, {
                icon: (0, i.jsx)(a.Z, { className: 'h-3 w-3' }),
                title: 'Filters',
                placement: 'bottom-end',
                menuButton: (0, i.jsxs)('div', {
                  className:
                    'flex text-sm items-center gap-2 neutral-primary text-custom-text-200',
                  children: [
                    (0, i.jsx)(a.Z, { className: 'h-3 w-3' }),
                    'Filters',
                    (0, i.jsx)(u.Z, { className: 'h-3 w-3', strokeWidth: 2 }),
                  ],
                }),
                isFiltersApplied: x,
                children: (0, i.jsx)(h.U5, {
                  displayFilters: null != l ? l : {},
                  filters: null != e ? e : {},
                  handleFiltersUpdate: d,
                  handleDisplayFiltersUpdate: l => {
                    n && r(n, l);
                  },
                  memberIds: null != o ? o : void 0,
                }),
              }),
            }),
          ],
        });
      });
      var b = r(34067);
      let f = (0, t.Pi)(() => {
        var l, e;
        let {
            router: { workspaceSlug: r },
          } = (0, v.IX)(),
          { currentWorkspace: t } = (0, v.cF)(),
          { totalProjectIds: o, filteredProjectIds: a } = (0, v.PY)(),
          {
            currentWorkspaceFilters: u,
            currentWorkspaceAppliedDisplayFilters: c,
            clearAllFilters: h,
            clearAllAppliedDisplayFilters: x,
            updateFilters: b,
            updateDisplayFilters: f,
          } = (0, v.HK)(),
          m = (null == t ? void 0 : t.name)
            ? ''.concat(null == t ? void 0 : t.name, ' - Projects')
            : void 0,
          j = (0, s.useCallback)(
            (l, e) => {
              var i;
              if (!r) return;
              let s =
                null !== (i = null == u ? void 0 : u[l]) && void 0 !== i
                  ? i
                  : [];
              (s = e ? s.filter(l => l !== e) : []),
                b(r.toString(), { [l]: s });
            },
            [u, b, r]
          ),
          w = (0, s.useCallback)(
            l => {
              r && f(r.toString(), { [l]: !1 });
            },
            [f, r]
          ),
          y = (0, s.useCallback)(() => {
            r && (h(r.toString()), x(r.toString()));
          }, [h, x, r]);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(n.yG, { title: m }),
            (0, i.jsxs)('div', {
              className: 'h-full w-full flex flex-col',
              children: [
                (0 !== (0, p.w)(null != u ? u : {}) ||
                  (null == c ? void 0 : c.length) !== 0) &&
                  (0, i.jsx)('div', {
                    className: 'border-b border-custom-border-200 px-5 py-3',
                    children: (0, i.jsx)(d.Uh, {
                      appliedFilters: null != u ? u : {},
                      appliedDisplayFilters: null != c ? c : [],
                      handleClearAllFilters: y,
                      handleRemoveFilter: j,
                      handleRemoveDisplayFilter: w,
                      filteredProjects:
                        null !== (l = null == a ? void 0 : a.length) &&
                        void 0 !== l
                          ? l
                          : 0,
                      totalProjects:
                        null !== (e = null == o ? void 0 : o.length) &&
                        void 0 !== e
                          ? e
                          : 0,
                      alwaysAllowEditing: !0,
                    }),
                  }),
                (0, i.jsx)(d.Uj, {}),
              ],
            }),
          ],
        });
      });
      f.getLayout = function (l) {
        return (0, i.jsx)(b.L, {
          header: (0, i.jsx)(o.Ab, {}),
          mobileHeader: (0, i.jsx)(x, {}),
          children: l,
        });
      };
      var m = f;
    },
  },
  function (l) {
    l.O(
      0,
      [
        3684, 6337, 8345, 846, 4499, 860, 8797, 1077, 384, 8114, 3484, 6936,
        4963, 9774, 2888, 179,
      ],
      function () {
        return l((l.s = 79369));
      }
    ),
      (_N_E = l.O());
  },
]);
