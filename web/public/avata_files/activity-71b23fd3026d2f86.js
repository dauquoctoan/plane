(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8278],
  {
    38931: function (e, l, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/[workspaceSlug]/profile/[userId]/activity',
        function () {
          return s(86051);
        },
      ]);
    },
    11207: function (e, l, s) {
      'use strict';
      s.d(l, {
        E: function () {
          return d;
        },
      });
      var t = s(24246),
        i = s(43659),
        r = s(86677),
        c = s(15786),
        n = s(93116),
        u = s(10634);
      let a = [n.fp.ADMIN, n.fp.MEMBER, n.fp.VIEWER],
        d = (0, i.Pi)(e => {
          let { children: l, className: s, showProfileIssuesFilter: i } = e,
            n = (0, r.useRouter)(),
            {
              membership: { currentWorkspaceRole: d },
            } = (0, u.aF)(),
            o = d && a.includes(d),
            f = n.pathname.includes('assigned');
          return (0, t.jsxs)('div', {
            className: 'h-full w-full flex md:overflow-hidden',
            children: [
              (0, t.jsxs)('div', {
                className: 'flex w-full flex-col md:h-full md:overflow-hidden',
                children: [
                  (0, t.jsx)(c.MT, {
                    isAuthorized: !!o,
                    showProfileIssuesFilter: i,
                  }),
                  o || !f
                    ? (0, t.jsx)('div', {
                        className: 'w-full overflow-hidden md:h-full '.concat(
                          s
                        ),
                        children: l,
                      })
                    : (0, t.jsx)('div', {
                        className:
                          'grid h-full w-full place-items-center text-custom-text-200',
                        children:
                          'You do not have the permission to access this page.',
                      }),
                ],
              }),
              (0, t.jsx)(c.ZE, {}),
            ],
          });
        });
    },
    86051: function (e, l, s) {
      'use strict';
      s.r(l);
      var t = s(24246),
        i = s(27378),
        r = s(50649),
        c = s(86677),
        n = s(25449),
        u = s(14649),
        a = s(15786),
        d = s(93116),
        o = s(10634),
        f = s(34067),
        h = s(11207);
      let x = (0, r.Pi)(() => {
        let [e, l] = (0, i.useState)(1),
          [s, r] = (0, i.useState)(0),
          [u, f] = (0, i.useState)(0),
          { userId: h } = (0, c.useRouter)().query,
          {
            currentUser: x,
            membership: { currentWorkspaceRole: m },
          } = (0, o.aF)(),
          p = e => r(e),
          v = e => f(e),
          w = [];
        for (let l = 0; l < e; l++)
          w.push(
            (0, t.jsx)(
              a.xC,
              {
                cursor: ''.concat(100, ':').concat(l, ':0'),
                perPage: 100,
                updateResultsCount: v,
                updateTotalPages: p,
              },
              l
            )
          );
        let j = (null == x ? void 0 : x.id) === h && !!m && m >= d.fp.MEMBER;
        return (0, t.jsxs)('div', {
          className: 'h-full w-full py-5 flex flex-col overflow-hidden',
          children: [
            (0, t.jsxs)('div', {
              className: 'flex items-center justify-between gap-2 px-5 md:px-9',
              children: [
                (0, t.jsx)('h3', {
                  className: 'text-lg font-medium',
                  children: 'Recent activity',
                }),
                j && (0, t.jsx)(a.m, {}),
              ],
            }),
            (0, t.jsxs)('div', {
              className:
                'h-full flex flex-col overflow-y-auto vertical-scrollbar scrollbar-md px-5 md:px-9',
              children: [
                w,
                e < s &&
                  0 !== u &&
                  (0, t.jsx)('div', {
                    className:
                      'flex items-center justify-center text-xs w-full',
                    children: (0, t.jsx)(n.zx, {
                      variant: 'accent-primary',
                      size: 'sm',
                      onClick: () => l(e => e + 1),
                      children: 'Load more',
                    }),
                  }),
              ],
            }),
          ],
        });
      });
      (x.getLayout = function (e) {
        return (0, t.jsx)(f.L, {
          header: (0, t.jsx)(u.FZ, { type: 'Activity' }),
          children: (0, t.jsx)(h.E, { children: e }),
        });
      }),
        (l.default = x);
    },
  },
  function (e) {
    e.O(
      0,
      [
        3684, 6337, 8345, 846, 4499, 860, 8797, 1077, 384, 8114, 3484, 6936,
        4963, 5786, 9774, 2888, 179,
      ],
      function () {
        return e((e.s = 38931));
      }
    ),
      (_N_E = e.O());
  },
]);
