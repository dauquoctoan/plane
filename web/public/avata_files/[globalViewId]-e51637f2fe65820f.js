(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6975],
  {
    88499: function (n, e, l) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/[workspaceSlug]/workspace-views/[globalViewId]',
        function () {
          return l(88475);
        },
      ]);
    },
    88475: function (n, e, l) {
      'use strict';
      l.r(e);
      var o = l(24246),
        u = l(50649),
        i = l(86677),
        c = l(23258),
        r = l(14649),
        t = l(68114),
        d = l(86936),
        a = l(93116),
        s = l(10634),
        f = l(34067);
      let v = (0, u.Pi)(() => {
        let { globalViewId: n } = (0, i.useRouter)().query,
          { currentWorkspace: e } = (0, s.cF)(),
          { getViewDetailsById: l } = (0, s.Vz)(),
          u = n ? l(n.toString()) : void 0,
          r = a.F5.find(e => e.key === n),
          f =
            (null == e ? void 0 : e.name) && (null == r ? void 0 : r.label)
              ? ''
                  .concat(null == e ? void 0 : e.name, ' - ')
                  .concat(null == r ? void 0 : r.label)
              : (null == e ? void 0 : e.name) && (null == u ? void 0 : u.name)
                ? ''
                    .concat(null == e ? void 0 : e.name, ' - ')
                    .concat(null == u ? void 0 : u.name)
                : void 0;
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(c.yG, { title: f }),
            (0, o.jsx)('div', {
              className: 'h-full overflow-hidden bg-custom-background-100',
              children: (0, o.jsxs)('div', {
                className:
                  'flex h-full w-full flex-col border-b border-custom-border-300',
                children: [(0, o.jsx)(d.LM, {}), (0, o.jsx)(t.Iyz, {})],
              }),
            }),
          ],
        });
      });
      (v.getLayout = function (n) {
        return (0, o.jsx)(f.L, { header: (0, o.jsx)(r.VM, {}), children: n });
      }),
        (e.default = v);
    },
  },
  function (n) {
    n.O(
      0,
      [
        3684, 6337, 8345, 846, 4499, 860, 8797, 1077, 384, 8114, 3484, 6936,
        4963, 9774, 2888, 179,
      ],
      function () {
        return n((n.s = 88499));
      }
    ),
      (_N_E = n.O());
  },
]);
