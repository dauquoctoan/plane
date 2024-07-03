(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6654],
  {
    29528: function (e, r, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/[workspaceSlug]/analytics',
        function () {
          return t(77082);
        },
      ]);
    },
    77082: function (e, r, t) {
      'use strict';
      t.r(r);
      var n = t(24246),
        s = t(27378),
        o = t(43659),
        a = t(86677),
        c = t(12625),
        l = t(27441),
        u = t(23258),
        d = t(74371),
        i = t(14649),
        m = t(45693),
        x = t(70540),
        b = t(10634),
        p = t(34067);
      let f = (0, o.Pi)(() => {
        let e = (0, a.useRouter)(),
          { analytics_tab: r } = e.query,
          {
            commandPalette: { toggleCreateProjectModal: t },
          } = (0, b.IX)(),
          { setTrackElement: o } = (0, b.DN)(),
          { workspaceProjectIds: i } = (0, b.PY)(),
          { currentWorkspace: p } = (0, b.cF)(),
          f = (null == p ? void 0 : p.name)
            ? ''.concat(null == p ? void 0 : p.name, ' - Analytics')
            : void 0;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(u.yG, { title: f }),
            i && i.length > 0
              ? (0, n.jsx)('div', {
                  className:
                    'flex h-full flex-col overflow-hidden bg-custom-background-100',
                  children: (0, n.jsxs)(c.O.Group, {
                    as: s.Fragment,
                    defaultIndex: 'custom' === r ? 1 : 0,
                    children: [
                      (0, n.jsx)(c.O.List, {
                        as: 'div',
                        className:
                          'flex space-x-2 border-b border-custom-border-200 px-0 md:px-5 py-0 md:py-3',
                        children: m.Br.map(r =>
                          (0, n.jsx)(
                            c.O,
                            {
                              className: e => {
                                let { selected: r } = e;
                                return 'rounded-0 w-full md:w-max md:rounded-3xl border-b md:border border-custom-border-200 focus:outline-none px-0 md:px-4 py-2 text-xs hover:bg-custom-background-80 '.concat(
                                  r
                                    ? 'border-custom-primary-100 text-custom-primary-100 md:bg-custom-background-80 md:text-custom-text-200 md:border-custom-border-200'
                                    : 'border-transparent'
                                );
                              },
                              onClick: () => {
                                (e.query.analytics_tab = r.key), e.push(e);
                              },
                              children: r.title,
                            },
                            r.key
                          )
                        ),
                      }),
                      (0, n.jsxs)(c.O.Panels, {
                        as: s.Fragment,
                        children: [
                          (0, n.jsx)(c.O.Panel, {
                            as: s.Fragment,
                            children: (0, n.jsx)(l.GJ, { fullScreen: !0 }),
                          }),
                          (0, n.jsx)(c.O.Panel, {
                            as: s.Fragment,
                            children: (0, n.jsx)(l.x6, { fullScreen: !0 }),
                          }),
                        ],
                      }),
                    ],
                  }),
                })
              : (0, n.jsx)(d.ub, {
                  type: x.C.WORKSPACE_ANALYTICS,
                  primaryButtonOnClick: () => {
                    o('Analytics empty state'), t(!0);
                  },
                }),
          ],
        });
      });
      (f.getLayout = function (e) {
        return (0, n.jsx)(p.L, { header: (0, n.jsx)(i.CK, {}), children: e });
      }),
        (r.default = f);
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
        return e((e.s = 29528));
      }
    ),
      (_N_E = e.O());
  },
]);
