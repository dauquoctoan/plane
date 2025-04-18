(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [794],
  {
    44797: function (e, t, l) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/[workspaceSlug]/projects/[projectId]/issues',
        function () {
          return l(28165);
        },
      ]);
    },
    28165: function (e, t, l) {
      'use strict';
      l.r(t),
        l.d(t, {
          default: function () {
            return F;
          },
        });
      var s = l(24246),
        i = l(50649),
        n = l(88038),
        r = l.n(n),
        o = l(86677),
        c = l.n(o),
        u = l(23258),
        a = l(14649),
        d = l(68114),
        x = l(27378),
        m = l(58645),
        f = l(38516),
        v = l(17901),
        p = l(65709),
        j = l(25449),
        y = l(27441),
        h = l(96861),
        b = l(93997),
        w = l(1422),
        g = l(10634);
      let N = (0, i.Pi)(() => {
        var e, t, l, i, n;
        let r = [
            { key: 'list', title: 'List', icon: m.Z },
            { key: 'kanban', title: 'Kanban', icon: f.Z },
            { key: 'calendar', title: 'Calendar', icon: v.Z },
          ],
          [o, u] = (0, x.useState)(!1),
          { workspaceSlug: a, projectId: d } = c().query,
          { currentProjectDetails: N } = (0, g.PY)(),
          { projectStates: _ } = (0, g.eD)(),
          { projectLabels: k } = (0, g.NP)(),
          {
            issuesFilter: { issueFilters: F, updateFilters: P },
          } = (0, g.gk)(b.rS.PROJECT),
          {
            project: { projectMemberIds: D },
          } = (0, g.Kb)(),
          I =
            null == F
              ? void 0
              : null === (e = F.displayFilters) || void 0 === e
                ? void 0
                : e.layout,
          E = (0, x.useCallback)(
            e => {
              a && d && P(a, d, b.gc.DISPLAY_FILTERS, { layout: e });
            },
            [a, d, P]
          ),
          C = (0, x.useCallback)(
            (e, t) => {
              var l, s, i, n;
              if (!a || !d) return;
              let r =
                null !==
                  (s =
                    null == F
                      ? void 0
                      : null === (l = F.filters) || void 0 === l
                        ? void 0
                        : l[e]) && void 0 !== s
                  ? s
                  : [];
              Array.isArray(t)
                ? t.forEach(e => {
                    r.includes(e) ? r.splice(r.indexOf(e), 1) : r.push(e);
                  })
                : (
                      null == F
                        ? void 0
                        : null === (n = F.filters) || void 0 === n
                          ? void 0
                          : null === (i = n[e]) || void 0 === i
                            ? void 0
                            : i.includes(t)
                    )
                  ? r.splice(r.indexOf(t), 1)
                  : r.push(t),
                P(a, d, b.gc.FILTERS, { [e]: r });
            },
            [a, d, F, P]
          ),
          S = (0, x.useCallback)(
            e => {
              a && d && P(a, d, b.gc.DISPLAY_FILTERS, e);
            },
            [a, d, P]
          ),
          L = (0, x.useCallback)(
            e => {
              a && d && P(a, d, b.gc.DISPLAY_PROPERTIES, e);
            },
            [a, d, P]
          ),
          O =
            0 !==
            (0, w.w)(
              null !== (t = null == F ? void 0 : F.filters) && void 0 !== t
                ? t
                : {}
            );
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(y.a5, {
              isOpen: o,
              onClose: () => u(!1),
              projectDetails: null != N ? N : void 0,
            }),
            (0, s.jsxs)('div', {
              className:
                'md:hidden flex justify-evenly border-b border-custom-border-200 py-2 z-[13] bg-custom-background-100',
              children: [
                (0, s.jsx)(j.fR, {
                  maxHeight: 'md',
                  className:
                    'flex flex-grow justify-center text-sm text-custom-text-200',
                  placement: 'bottom-start',
                  customButton: (0, s.jsx)('span', {
                    className:
                      'flex flex-grow justify-center text-sm text-custom-text-200',
                    children: 'Layout',
                  }),
                  customButtonClassName:
                    'flex flex-grow justify-center text-custom-text-200 text-sm',
                  closeOnSelect: !0,
                  children: r.map((e, t) =>
                    (0, s.jsxs)(
                      j.fR.MenuItem,
                      {
                        onClick: () => {
                          E(b.u2[t].key);
                        },
                        className: 'flex items-center gap-2',
                        children: [
                          (0, s.jsx)(e.icon, { className: 'h-3 w-3' }),
                          (0, s.jsx)('div', {
                            className: 'text-custom-text-300',
                            children: e.title,
                          }),
                        ],
                      },
                      t
                    )
                  ),
                }),
                (0, s.jsx)('div', {
                  className:
                    'flex flex-grow items-center justify-center border-l border-custom-border-200 text-sm text-custom-text-200',
                  children: (0, s.jsx)(h.lq, {
                    title: 'Filters',
                    placement: 'bottom-end',
                    menuButton: (0, s.jsxs)('span', {
                      className:
                        'flex items-center text-sm text-custom-text-200',
                      children: [
                        'Filters',
                        (0, s.jsx)(p.Z, {
                          className: 'ml-2  h-4 w-4 text-custom-text-200',
                        }),
                      ],
                    }),
                    isFiltersApplied: O,
                    children: (0, s.jsx)(h.dG, {
                      filters:
                        null !== (l = null == F ? void 0 : F.filters) &&
                        void 0 !== l
                          ? l
                          : {},
                      handleFiltersUpdate: C,
                      layoutDisplayFiltersOptions: I ? b.BI.issues[I] : void 0,
                      labels: k,
                      memberIds: null != D ? D : void 0,
                      states: _,
                      cycleViewDisabled: !(null == N ? void 0 : N.cycle_view),
                      moduleViewDisabled: !(null == N ? void 0 : N.module_view),
                    }),
                  }),
                }),
                (0, s.jsx)('div', {
                  className:
                    'flex flex-grow items-center justify-center border-l border-custom-border-200 text-sm text-custom-text-200',
                  children: (0, s.jsx)(h.lq, {
                    title: 'Display',
                    placement: 'bottom-end',
                    menuButton: (0, s.jsxs)('span', {
                      className:
                        'flex items-center text-sm text-custom-text-200',
                      children: [
                        'Display',
                        (0, s.jsx)(p.Z, {
                          className: 'ml-2 h-4 w-4 text-custom-text-200',
                        }),
                      ],
                    }),
                    children: (0, s.jsx)(h.hv, {
                      layoutDisplayFiltersOptions: I ? b.BI.issues[I] : void 0,
                      displayFilters:
                        null !== (i = null == F ? void 0 : F.displayFilters) &&
                        void 0 !== i
                          ? i
                          : {},
                      handleDisplayFiltersUpdate: S,
                      displayProperties:
                        null !==
                          (n = null == F ? void 0 : F.displayProperties) &&
                        void 0 !== n
                          ? n
                          : {},
                      handleDisplayPropertiesUpdate: L,
                      cycleViewDisabled: !(null == N ? void 0 : N.cycle_view),
                      moduleViewDisabled: !(null == N ? void 0 : N.module_view),
                    }),
                  }),
                }),
                (0, s.jsx)('button', {
                  onClick: () => u(!0),
                  className:
                    'flex flex-grow justify-center border-l border-custom-border-200 text-sm text-custom-text-200',
                  children: 'Analytics',
                }),
              ],
            }),
          ],
        });
      });
      var _ = l(34067);
      let k = (0, i.Pi)(() => {
        let { projectId: e } = (0, o.useRouter)().query,
          { getProjectById: t } = (0, g.PY)();
        if (!e) return (0, s.jsx)(s.Fragment, {});
        let l = t(e.toString()),
          i = (null == l ? void 0 : l.name)
            ? ''.concat(null == l ? void 0 : l.name, ' - Issues')
            : void 0;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(u.yG, { title: i }),
            (0, s.jsx)(r(), {
              children: (0, s.jsxs)('title', {
                children: [null == l ? void 0 : l.name, ' - Issues'],
              }),
            }),
            (0, s.jsx)('div', {
              className: 'h-full w-full',
              children: (0, s.jsx)(d.$EI, {}),
            }),
          ],
        });
      });
      k.getLayout = function (e) {
        return (0, s.jsx)(_.L, {
          header: (0, s.jsx)(a.fr, {}),
          mobileHeader: (0, s.jsx)(N, {}),
          withProjectWrapper: !0,
          children: e,
        });
      };
      var F = k;
    },
  },
  function (e) {
    e.O(
      0,
      [
        3684, 6337, 8345, 846, 4499, 860, 8797, 1077, 384, 8114, 3484, 6936,
        4963, 9774, 2888, 179,
      ],
      function () {
        return e((e.s = 44797));
      }
    ),
      (_N_E = e.O());
  },
]);
