(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6993],
  {
    82274: function (e, l, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/[workspaceSlug]',
        function () {
          return s(83301);
        },
      ]);
    },
    24673: function (e, l, s) {
      'use strict';
      s.d(l, {
        w: function () {
          return f;
        },
      });
      var r = s(24246),
        n = s(38579),
        i = s.n(n),
        a = s(35704),
        t = s(20546),
        c = s(75839),
        d = s(12862),
        o = {
          src: '/_next/static/media/github-white.cf98513a.png',
          height: 512,
          width: 512,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEX///////////9MaXH////////////////////////////+/v7///////90CahnAAAADnRSTlP8CyMAuQTNiUGi7uBcLbA1pPcAAAAJcEhZcwAAECYAABAmAYO2TBUAAAA3SURBVHicRca5AcAwDAJAEFifvf+8KXPVQTH3TgiRC2wGnIxgGiido8If5+N5a7SLBBrqId36AColASWgjvAyAAAAAElFTkSuQmCC',
          blurWidth: 8,
          blurHeight: 8,
        },
        x = s(25449),
        u = s(78593),
        h = s(865),
        m = s(10634);
      let f = () => {
        let { captureEvent: e } = (0, m.DN)(),
          { resolvedTheme: l } = (0, a.F)();
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsxs)('div', {
            className:
              'relative z-[15] flex h-[3.75rem] w-full flex-shrink-0 flex-row items-center justify-between gap-x-2 gap-y-4 bg-custom-sidebar-background-100 p-4',
            children: [
              (0, r.jsx)('div', {
                className:
                  'flex items-center gap-2 overflow-ellipsis whitespace-nowrap',
                children: (0, r.jsx)('div', {
                  children: (0, r.jsx)(x.Oo, {
                    children: (0, r.jsx)(x.Oo.BreadcrumbItem, {
                      type: 'text',
                      link: (0, r.jsx)(u.At, {
                        label: 'Home',
                        icon: (0, r.jsx)(t.Z, {
                          className: 'h-4 w-4 text-custom-text-300',
                        }),
                      }),
                    }),
                  }),
                }),
              }),
              (0, r.jsxs)('div', {
                className: 'flex items-center gap-3 px-3',
                children: [
                  (0, r.jsxs)('a', {
                    onClick: () => e(h.$N, { element: 'navbar' }),
                    href: 'https://plane.so/changelog',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    className:
                      'flex flex-shrink-0 items-center gap-1.5 rounded bg-custom-background-80 px-3 py-1.5',
                    children: [
                      (0, r.jsx)(c.Z, {
                        size: 14,
                        strokeWidth: 2,
                        fill: 'rgb(var(--color-text-100))',
                      }),
                      (0, r.jsx)('span', {
                        className:
                          'hidden text-xs font-medium sm:hidden md:block',
                        children: "What's new?",
                      }),
                    ],
                  }),
                  (0, r.jsxs)('a', {
                    onClick: () => e(h.hY, { element: 'navbar' }),
                    className:
                      'flex flex-shrink-0 items-center gap-1.5 rounded bg-custom-background-80 px-3 py-1.5',
                    href: 'https://github.com/makeplane/plane',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    children: [
                      (0, r.jsx)(i(), {
                        src: 'dark' === l ? o : d.Z,
                        height: 16,
                        width: 16,
                        alt: 'GitHub Logo',
                      }),
                      (0, r.jsx)('span', {
                        className:
                          'hidden text-xs font-medium sm:hidden md:block',
                        children: 'Star us on GitHub',
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
    34067: function (e, l, s) {
      'use strict';
      s.d(l, {
        L: function () {
          return m;
        },
      });
      var r = s(24246),
        n = s(43659),
        i = s(27320),
        a = s(21109),
        t = s(23194),
        c = s(27378),
        d = s(91256),
        o = s(86936),
        x = s(10634),
        u = s(42683);
      let h = (0, n.Pi)(() => {
          let { theme: e } = (0, x.IX)(),
            l = (0, c.useRef)(null);
          return (
            (0, u.Z)(l, () => {
              !1 === e.sidebarCollapsed &&
                window.innerWidth < 768 &&
                e.toggleSidebar();
            }),
            (0, r.jsx)('div', {
              className:
                'inset-y-0 z-20 flex h-full flex-shrink-0 flex-grow-0 flex-col border-r border-custom-sidebar-border-200 bg-custom-sidebar-background-100 duration-300\n        fixed md:relative\n        '
                  .concat(
                    e.sidebarCollapsed ? '-ml-[280px]' : '',
                    '\n        sm:'
                  )
                  .concat(
                    e.sidebarCollapsed ? '-ml-[280px]' : '',
                    '\n        md:ml-0 '
                  )
                  .concat(
                    e.sidebarCollapsed ? 'w-[80px]' : 'w-[280px]',
                    '\n        lg:ml-0 '
                  )
                  .concat(
                    e.sidebarCollapsed ? 'w-[80px]' : 'w-[280px]',
                    '\n      '
                  ),
              children: (0, r.jsxs)('div', {
                ref: l,
                className: 'flex h-full w-full flex-1 flex-col',
                children: [
                  (0, r.jsx)(o.mG, {}),
                  (0, r.jsx)(o.rB, {}),
                  (0, r.jsx)(o.b8, {}),
                  (0, r.jsx)(d.Cl, {}),
                  (0, r.jsx)(o.N4, {}),
                ],
              }),
            })
          );
        }),
        m = (0, n.Pi)(e => {
          let {
            children: l,
            header: s,
            withProjectWrapper: n = !1,
            mobileHeader: c,
          } = e;
          return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)(t.bQ, {
              children: [
                (0, r.jsx)(i.f$, {}),
                (0, r.jsx)(t.Cr, {
                  children: (0, r.jsxs)('div', {
                    className: 'relative flex h-screen w-full overflow-hidden',
                    children: [
                      (0, r.jsx)(h, {}),
                      (0, r.jsxs)('main', {
                        className:
                          'relative flex h-full w-full flex-col overflow-hidden bg-custom-background-100',
                        children: [
                          (0, r.jsxs)('div', {
                            className: 'z-[15]',
                            children: [
                              (0, r.jsxs)('div', {
                                className:
                                  'flex items-center w-full border-b border-custom-border-200 z-10',
                                children: [
                                  (0, r.jsx)('div', {
                                    className:
                                      'pl-5 py-4  bg-custom-sidebar-background-100 block md:hidden',
                                    children: (0, r.jsx)(a.P, {}),
                                  }),
                                  (0, r.jsx)('div', {
                                    className: 'w-full',
                                    children: s,
                                  }),
                                ],
                              }),
                              c && c,
                            ],
                          }),
                          (0, r.jsx)('div', {
                            className: 'h-full w-full overflow-hidden',
                            children: (0, r.jsx)('div', {
                              className:
                                'relative h-full w-full overflow-x-hidden overflow-y-scroll',
                              children: n
                                ? (0, r.jsx)(t.nV, { children: l })
                                : (0, r.jsx)(r.Fragment, { children: l }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        });
    },
    83301: function (e, l, s) {
      'use strict';
      s.r(l);
      var r = s(24246),
        n = s(50649),
        i = s(23258),
        a = s(24673),
        t = s(11591),
        c = s(10634),
        d = s(34067);
      let o = (0, n.Pi)(() => {
        let { currentWorkspace: e } = (0, c.cF)(),
          l = (null == e ? void 0 : e.name)
            ? ''.concat(null == e ? void 0 : e.name, ' - Home')
            : void 0;
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(i.yG, { title: l }), (0, r.jsx)(t.Z, {})],
        });
      });
      (o.getLayout = function (e) {
        return (0, r.jsx)(d.L, { header: (0, r.jsx)(a.w, {}), children: e });
      }),
        (l.default = o);
    },
  },
  function (e) {
    e.O(
      0,
      [
        3684, 6337, 8345, 846, 4499, 860, 8797, 1077, 384, 8114, 3484, 6936,
        612, 2471, 1591, 9774, 2888, 179,
      ],
      function () {
        return e((e.s = 82274));
      }
    ),
      (_N_E = e.O());
  },
]);
