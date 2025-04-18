'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1591],
  {
    55968: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return l;
        },
      });
      /**
       * @license lucide-react v0.378.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let l = (0, s(73471).Z)('RefreshCcw', [
        [
          'path',
          {
            d: 'M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8',
            key: '14sxne',
          },
        ],
        ['path', { d: 'M3 3v5h5', key: '1xhq8a' }],
        [
          'path',
          {
            d: 'M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16',
            key: '1hlbsb',
          },
        ],
        ['path', { d: 'M16 16h5v5', key: 'ccwih5' }],
      ]);
    },
    11591: function (e, t, s) {
      s.d(t, {
        o: function () {
          return h;
        },
        Z: function () {
          return e6;
        },
      });
      var l = s(24246),
        i = s(27378),
        a = s(43659),
        r = s(38579),
        n = s.n(r),
        c = s(25449),
        d = s(612),
        o = s(23258),
        u = s(10634),
        x = s(89774),
        m = s(60574);
      let h = (0, a.Pi)(() => {
        let {
            config: { envConfig: e },
          } = (0, u.IX)(),
          { currentUser: t } = (0, u.aF)(),
          { isRedirecting: s, handleRedirection: a } = (0, x.Z)();
        return ((0, i.useEffect)(() => {
          a();
        }, [a]),
        s || t || !e)
          ? (0, l.jsx)('div', {
              className: 'grid h-screen place-items-center',
              children: (0, l.jsx)(c.$j, {}),
            })
          : (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)(o.yG, { title: 'Sign In' }),
                (0, l.jsxs)('div', {
                  className: 'h-full w-full bg-onboarding-gradient-100',
                  children: [
                    (0, l.jsx)('div', {
                      className:
                        'flex items-center justify-between px-8 pb-4 sm:px-16 sm:py-5 lg:px-28',
                      children: (0, l.jsxs)('div', {
                        className: 'flex items-center gap-x-2 py-10',
                        children: [
                          (0, l.jsx)(n(), {
                            src: m.Z,
                            height: 30,
                            width: 30,
                            alt: 'Plane Logo',
                            className: 'mr-2',
                          }),
                          (0, l.jsx)('span', {
                            className: 'text-2xl font-semibold sm:text-3xl',
                            children: 'Plane',
                          }),
                        ],
                      }),
                    }),
                    (0, l.jsx)('div', {
                      className:
                        'mx-auto h-full rounded-t-md border-x border-t border-custom-border-200 bg-onboarding-gradient-100 px-4 pt-4 shadow-sm sm:w-4/5 md:w-2/3',
                      children: (0, l.jsx)('div', {
                        className:
                          'h-full overflow-auto rounded-t-md bg-onboarding-gradient-200 px-7 pb-56 pt-24 sm:px-0',
                        children: (0, l.jsx)(d.mA, {}),
                      }),
                    }),
                  ],
                }),
              ],
            });
      });
      var p = s(65709),
        g = s(45867),
        v = s(54571),
        f = s(35754),
        j = s(71217),
        b = s(18309),
        w = s(93680),
        N = s(32825),
        y = s(85902),
        _ = s(74273);
      let k = (e, t) => {
          let s, l;
          let i = new Date();
          switch (e) {
            case g.uZ.NONE:
              return '';
            case g.uZ.TODAY:
              return (
                (s = (0, _.ss)(i)),
                (l = (0, _.ss)(i)),
                ''.concat(s, ';after,').concat(l, ';before')
              );
            case g.uZ.THIS_WEEK:
              return (
                (s = (0, _.ss)((0, v.Z)(i))),
                (l = (0, _.ss)((0, f.Z)(i))),
                ''.concat(s, ';after,').concat(l, ';before')
              );
            case g.uZ.THIS_MONTH:
              return (
                (s = (0, _.ss)((0, j.Z)(i))),
                (l = (0, _.ss)((0, b.Z)(i))),
                ''.concat(s, ';after,').concat(l, ';before')
              );
            case g.uZ.THIS_YEAR:
              return (
                (s = (0, _.ss)((0, w.Z)(i))),
                (l = (0, _.ss)(
                  (function (e) {
                    (0, y.Z)(1, arguments);
                    var t = (0, N.Z)(e),
                      s = t.getFullYear();
                    return (
                      t.setFullYear(s + 1, 0, 0), t.setHours(23, 59, 59, 999), t
                    );
                  })(i)
                )),
                ''.concat(s, ';after,').concat(l, ';before')
              );
            case g.uZ.CUSTOM:
              return t.join(',');
          }
        },
        I = e => {
          let t = (0, _.ss)(new Date());
          return 'pending' === e
            ? '?state_group=backlog,unstarted,started'
            : 'upcoming' === e
              ? '?target_date='.concat(t, ';after')
              : 'overdue' === e
                ? '?target_date='.concat(t, ';before')
                : '?state_group=completed';
        },
        C = (e, t) =>
          t
            ? 'completed' === t
              ? t
              : 'none' === e
                ? 'pending'
                : ['upcoming', 'overdue'].includes(t)
                  ? t
                  : 'upcoming'
            : 'completed',
        P = (e, t) => {
          var s, l, i, a;
          if ('custom' !== e)
            return null !==
              (l =
                null === (s = g.ve.find(t => t.key === e)) || void 0 === s
                  ? void 0
                  : s.label) && void 0 !== l
              ? l
              : '';
          {
            let e =
                null === (i = t.find(e => e.includes('after'))) || void 0 === i
                  ? void 0
                  : i.split(';')[0],
              s =
                null === (a = t.find(e => e.includes('before'))) || void 0 === a
                  ? void 0
                  : a.split(';')[0];
            return e && s
              ? ''.concat((0, _.ot)(e), ' - ').concat((0, _.ot)(s))
              : e
                ? 'After '.concat((0, _.ot)(e))
                : s
                  ? 'Before '.concat((0, _.ot)(s))
                  : '';
          }
        },
        S = e => {
          let { customDates: t, onChange: s, value: a } = e,
            [r, n] = (0, i.useState)(!1);
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(o.iF, {
                isOpen: r,
                handleClose: () => n(!1),
                onSelect: e => s(g.uZ.CUSTOM, e),
                title: 'Due date',
              }),
              (0, l.jsx)(c.fR, {
                className: 'flex-shrink-0',
                customButton: (0, l.jsxs)('div', {
                  className:
                    'px-3 py-2 border-[0.5px] border-custom-border-300 hover:bg-custom-background-80 focus:bg-custom-background-80 text-xs font-medium whitespace-nowrap rounded-md outline-none flex items-center gap-2',
                  children: [
                    P(a, null != t ? t : []),
                    (0, l.jsx)(p.Z, { className: 'h-3 w-3' }),
                  ],
                }),
                placement: 'bottom-end',
                closeOnSelect: !0,
                children: g.ve.map(e =>
                  (0, l.jsx)(
                    c.fR.MenuItem,
                    {
                      onClick: () => {
                        'custom' === e.key ? n(!0) : s(e.key);
                      },
                      children: e.label,
                    },
                    e.key
                  )
                ),
              }),
            ],
          });
        };
      var E = s(35704);
      let F = e => {
          let { type: t } = e,
            { resolvedTheme: s } = (0, E.F)(),
            i = g.qp[t],
            a = 'dark' === s ? i.darkImage : i.lightImage;
          return (0, l.jsxs)('div', {
            className: 'text-center space-y-6 flex flex-col items-center',
            children: [
              (0, l.jsx)('div', {
                className: 'h-24 w-24',
                children: (0, l.jsx)(n(), {
                  src: a,
                  className: 'w-full h-full',
                  alt: 'Assigned issues',
                }),
              }),
              (0, l.jsx)('p', {
                className:
                  'text-sm font-medium text-custom-text-300 whitespace-pre-line',
                children: i.title,
              }),
            ],
          });
        },
        D = e => {
          let { type: t } = e,
            { resolvedTheme: s } = (0, E.F)(),
            i = g.Mx[t],
            a = 'dark' === s ? i.darkImage : i.lightImage;
          return (0, l.jsxs)('div', {
            className: 'text-center space-y-6 flex flex-col items-center',
            children: [
              (0, l.jsx)('div', {
                className: 'h-24 w-24',
                children: (0, l.jsx)(n(), {
                  src: a,
                  className: 'w-full h-full',
                  alt: 'Assigned issues',
                }),
              }),
              (0, l.jsx)('p', {
                className:
                  'text-sm font-medium text-custom-text-300 whitespace-pre-line',
                children: i.title,
              }),
            ],
          });
        };
      var Z = {
          src: '/_next/static/media/issues-by-priority.697f61e5.svg',
          height: 98,
          width: 98,
          blurWidth: 0,
          blurHeight: 0,
        },
        A = {
          src: '/_next/static/media/issues-by-priority.6bfc3a63.svg',
          height: 98,
          width: 98,
          blurWidth: 0,
          blurHeight: 0,
        };
      let O = () => {
        let { resolvedTheme: e } = (0, E.F)();
        return (0, l.jsxs)('div', {
          className: 'text-center space-y-6 flex flex-col items-center',
          children: [
            (0, l.jsx)('div', {
              className: 'h-24 w-24',
              children: (0, l.jsx)(n(), {
                src: 'dark' === e ? Z : A,
                className: 'w-full h-full',
                alt: 'Issues by state group',
              }),
            }),
            (0, l.jsxs)('p', {
              className: 'text-sm font-medium text-custom-text-300',
              children: [
                'Issues assigned to you, broken down by',
                (0, l.jsx)('br', {}),
                'priority will show up here.',
              ],
            }),
          ],
        });
      };
      var T = {
          src: '/_next/static/media/issues-by-state-group.2588cb5b.svg',
          height: 98,
          width: 98,
          blurWidth: 0,
          blurHeight: 0,
        },
        U = {
          src: '/_next/static/media/issues-by-state-group.a966ec1d.svg',
          height: 98,
          width: 98,
          blurWidth: 0,
          blurHeight: 0,
        };
      let H = () => {
        let { resolvedTheme: e } = (0, E.F)();
        return (0, l.jsxs)('div', {
          className: 'text-center space-y-6 flex flex-col items-center',
          children: [
            (0, l.jsx)('div', {
              className: 'h-24 w-24',
              children: (0, l.jsx)(n(), {
                src: 'dark' === e ? T : U,
                className: 'w-full h-full',
                alt: 'Issues by state group',
              }),
            }),
            (0, l.jsxs)('p', {
              className: 'text-sm font-medium text-custom-text-300',
              children: [
                'Issue assigned to you, broken down by state,',
                (0, l.jsx)('br', {}),
                'will show up here.',
              ],
            }),
          ],
        });
      };
      var R = {
          src: '/_next/static/media/recent-activity.9d545edf.svg',
          height: 93,
          width: 93,
          blurWidth: 0,
          blurHeight: 0,
        },
        W = {
          src: '/_next/static/media/recent-activity.90ff9f3c.svg',
          height: 93,
          width: 93,
          blurWidth: 0,
          blurHeight: 0,
        };
      let K = () => {
        let { resolvedTheme: e } = (0, E.F)();
        return (0, l.jsxs)('div', {
          className: 'text-center space-y-6 flex flex-col items-center',
          children: [
            (0, l.jsx)('div', {
              className: 'h-24 w-24',
              children: (0, l.jsx)(n(), {
                src: 'dark' === e ? R : W,
                className: 'w-full h-full',
                alt: 'Issues by state group',
              }),
            }),
            (0, l.jsxs)('p', {
              className: 'text-sm font-medium text-custom-text-300',
              children: [
                'All your issue activities across',
                (0, l.jsx)('br', {}),
                'projects will show up here.',
              ],
            }),
          ],
        });
      };
      var z = {
          src: '/_next/static/media/recent-collaborators-1.499e8293.svg',
          height: 200,
          width: 200,
          blurWidth: 0,
          blurHeight: 0,
        },
        Y = {
          src: '/_next/static/media/recent-collaborators-1.c543ddc8.svg',
          height: 98,
          width: 98,
          blurWidth: 0,
          blurHeight: 0,
        },
        q = s(80986),
        M = s(55968);
      let B = e => {
        let { isRefreshing: t, onClick: s } = e;
        return (0, l.jsx)('div', {
          className: 'h-full w-full grid place-items-center',
          children: (0, l.jsxs)('div', {
            className: 'text-center',
            children: [
              (0, l.jsx)('div', {
                className:
                  'h-24 w-24 bg-red-500/20 rounded-full grid place-items-center mx-auto',
                children: (0, l.jsx)(q.Z, {
                  className: 'h-12 w-12 text-red-500',
                }),
              }),
              (0, l.jsx)('p', {
                className: 'mt-7 text-custom-text-300 text-sm font-medium',
                children: 'There was an error in fetching widget details',
              }),
              (0, l.jsx)(c.zx, {
                variant: 'neutral-primary',
                prependIcon: (0, l.jsx)(M.Z, { className: 'h-3 w-3' }),
                className: 'mt-2 mx-auto',
                onClick: s,
                loading: t,
                children: t ? 'Retrying' : 'Retry',
              }),
            ],
          }),
        });
      };
      var L = s(45116);
      let Q = (0, a.Pi)(e => {
          var t, s, i, a, r;
          let { issueId: n, onClick: d, workspaceSlug: o } = e,
            { getProjectById: x } = (0, u.PY)(),
            {
              issue: { getIssueById: m },
            } = (0, u.p1)(),
            h = m(n);
          if (!h) return null;
          let p = x(h.project_id),
            g =
              null !==
                (a =
                  null === (t = h.issue_relation) || void 0 === t
                    ? void 0
                    : t.filter(e => 'blocked_by' === e.relation_type)) &&
              void 0 !== a
                ? a
                : [],
            v =
              1 === g.length
                ? x(
                    null !==
                      (r =
                        null === (s = g[0]) || void 0 === s
                          ? void 0
                          : s.project_id) && void 0 !== r
                      ? r
                      : ''
                  )
                : null,
            f = (0, _._3)(h.target_date);
          return (0, l.jsxs)(c.Ug, {
            href: '/'
              .concat(o, '/projects/')
              .concat(h.project_id, '/issues/')
              .concat(h.id),
            onClick: () => d(h),
            className:
              'py-2 px-3 hover:bg-custom-background-80 rounded grid grid-cols-6 gap-1',
            children: [
              (0, l.jsxs)('div', {
                className: 'col-span-4 flex items-center gap-3',
                children: [
                  (0, l.jsx)(c.bJ, { priority: h.priority, withContainer: !0 }),
                  (0, l.jsxs)('span', {
                    className: 'text-xs font-medium flex-shrink-0',
                    children: [
                      null == p ? void 0 : p.identifier,
                      ' ',
                      h.sequence_id,
                    ],
                  }),
                  (0, l.jsx)('h6', {
                    className: 'text-sm flex-grow truncate',
                    children: h.name,
                  }),
                ],
              }),
              (0, l.jsx)('div', {
                className: 'text-xs text-center',
                children: f ? ((0, L.Z)(f) ? 'Today' : (0, _.ot)(f)) : '-',
              }),
              (0, l.jsx)('div', {
                className: 'text-xs text-center',
                children:
                  g.length > 0
                    ? g.length > 1
                      ? ''.concat(g.length, ' blockers')
                      : ''
                          .concat(null == v ? void 0 : v.identifier, ' ')
                          .concat(
                            null === (i = g[0]) || void 0 === i
                              ? void 0
                              : i.sequence_id
                          )
                    : '-',
              }),
            ],
          });
        }),
        X = (0, a.Pi)(e => {
          var t, s, i, a, r, n;
          let { issueId: d, onClick: o, workspaceSlug: x } = e,
            { getProjectById: m } = (0, u.PY)(),
            {
              issue: { getIssueById: h },
            } = (0, u.p1)(),
            p = h(d);
          if (!p) return null;
          let g = m(p.project_id),
            v =
              null !==
                (a =
                  null === (t = p.issue_relation) || void 0 === t
                    ? void 0
                    : t.filter(e => 'blocked_by' === e.relation_type)) &&
              void 0 !== a
                ? a
                : [],
            f =
              1 === v.length
                ? m(
                    null !==
                      (r =
                        null === (s = v[0]) || void 0 === s
                          ? void 0
                          : s.project_id) && void 0 !== r
                      ? r
                      : ''
                  )
                : null,
            j =
              null !==
                (n = (0, _.sX)((0, _._3)(p.target_date), new Date(), !1)) &&
              void 0 !== n
                ? n
                : 0;
          return (0, l.jsxs)(c.Ug, {
            href: '/'
              .concat(x, '/projects/')
              .concat(p.project_id, '/issues/')
              .concat(p.id),
            onClick: () => o(p),
            className:
              'py-2 px-3 hover:bg-custom-background-80 rounded grid grid-cols-6 gap-1',
            children: [
              (0, l.jsxs)('div', {
                className: 'col-span-4 flex items-center gap-3',
                children: [
                  (0, l.jsx)(c.bJ, { priority: p.priority, withContainer: !0 }),
                  (0, l.jsxs)('span', {
                    className: 'text-xs font-medium flex-shrink-0',
                    children: [
                      null == g ? void 0 : g.identifier,
                      ' ',
                      p.sequence_id,
                    ],
                  }),
                  (0, l.jsx)('h6', {
                    className: 'text-sm flex-grow truncate',
                    children: p.name,
                  }),
                ],
              }),
              (0, l.jsxs)('div', {
                className: 'text-xs text-center',
                children: [j, ' ', 'day'.concat(j > 1 ? 's' : '')],
              }),
              (0, l.jsx)('div', {
                className: 'text-xs text-center',
                children:
                  v.length > 0
                    ? v.length > 1
                      ? ''.concat(v.length, ' blockers')
                      : ''
                          .concat(null == f ? void 0 : f.identifier, ' ')
                          .concat(
                            null === (i = v[0]) || void 0 === i
                              ? void 0
                              : i.sequence_id
                          )
                    : '-',
              }),
            ],
          });
        }),
        V = (0, a.Pi)(e => {
          let { issueId: t, onClick: s, workspaceSlug: i } = e,
            {
              issue: { getIssueById: a },
            } = (0, u.p1)(),
            { getProjectById: r } = (0, u.PY)(),
            n = a(t);
          if (!n) return null;
          let d = r(n.project_id);
          return (0, l.jsx)(c.Ug, {
            href: '/'
              .concat(i, '/projects/')
              .concat(n.project_id, '/issues/')
              .concat(n.id),
            onClick: () => s(n),
            className:
              'py-2 px-3 hover:bg-custom-background-80 rounded grid grid-cols-6 gap-1',
            children: (0, l.jsxs)('div', {
              className: 'col-span-6 flex items-center gap-3',
              children: [
                (0, l.jsx)(c.bJ, { priority: n.priority, withContainer: !0 }),
                (0, l.jsxs)('span', {
                  className: 'text-xs font-medium flex-shrink-0',
                  children: [
                    null == d ? void 0 : d.identifier,
                    ' ',
                    n.sequence_id,
                  ],
                }),
                (0, l.jsx)('h6', {
                  className: 'text-sm flex-grow truncate',
                  children: n.name,
                }),
              ],
            }),
          });
        }),
        J = (0, a.Pi)(e => {
          var t, s;
          let { issueId: i, onClick: a, workspaceSlug: r } = e,
            { getUserDetails: n } = (0, u.Kb)(),
            {
              issue: { getIssueById: d },
            } = (0, u.p1)(),
            { getProjectById: o } = (0, u.PY)(),
            x = d(i);
          if (!x) return null;
          let m = o(x.project_id),
            h = (0, _._3)(x.target_date);
          return (0, l.jsxs)(c.Ug, {
            href: '/'
              .concat(r, '/projects/')
              .concat(x.project_id, '/issues/')
              .concat(x.id),
            onClick: () => a(x),
            className:
              'py-2 px-3 hover:bg-custom-background-80 rounded grid grid-cols-6 gap-1',
            children: [
              (0, l.jsxs)('div', {
                className: 'col-span-4 flex items-center gap-3',
                children: [
                  (0, l.jsx)(c.bJ, { priority: x.priority, withContainer: !0 }),
                  (0, l.jsxs)('span', {
                    className: 'text-xs font-medium flex-shrink-0',
                    children: [
                      null == m ? void 0 : m.identifier,
                      ' ',
                      x.sequence_id,
                    ],
                  }),
                  (0, l.jsx)('h6', {
                    className: 'text-sm flex-grow truncate',
                    children: x.name,
                  }),
                ],
              }),
              (0, l.jsx)('div', {
                className: 'text-xs text-center',
                children: h ? ((0, L.Z)(h) ? 'Today' : (0, _.ot)(h)) : '-',
              }),
              (0, l.jsx)('div', {
                className: 'text-xs flex justify-center',
                children:
                  x.assignee_ids &&
                  (null === (t = x.assignee_ids) || void 0 === t
                    ? void 0
                    : t.length) > 0
                    ? (0, l.jsx)(c.HE, {
                        children:
                          null === (s = x.assignee_ids) || void 0 === s
                            ? void 0
                            : s.map(e => {
                                let t = n(e);
                                return t
                                  ? (0, l.jsx)(
                                      c.qE,
                                      { src: t.avatar, name: t.display_name },
                                      e
                                    )
                                  : null;
                              }),
                      })
                    : '-',
              }),
            ],
          });
        }),
        G = (0, a.Pi)(e => {
          var t, s;
          let { issueId: i, onClick: a, workspaceSlug: r } = e,
            { getUserDetails: n } = (0, u.Kb)(),
            {
              issue: { getIssueById: d },
            } = (0, u.p1)(),
            { getProjectById: o } = (0, u.PY)(),
            x = d(i);
          if (!x) return null;
          let m = o(x.project_id),
            h =
              null !==
                (s = (0, _.sX)((0, _._3)(x.target_date), new Date(), !1)) &&
              void 0 !== s
                ? s
                : 0;
          return (0, l.jsxs)(c.Ug, {
            href: '/'
              .concat(r, '/projects/')
              .concat(x.project_id, '/issues/')
              .concat(x.id),
            onClick: () => a(x),
            className:
              'py-2 px-3 hover:bg-custom-background-80 rounded grid grid-cols-6 gap-1',
            children: [
              (0, l.jsxs)('div', {
                className: 'col-span-4 flex items-center gap-3',
                children: [
                  (0, l.jsx)(c.bJ, { priority: x.priority, withContainer: !0 }),
                  (0, l.jsxs)('span', {
                    className: 'text-xs font-medium flex-shrink-0',
                    children: [
                      null == m ? void 0 : m.identifier,
                      ' ',
                      x.sequence_id,
                    ],
                  }),
                  (0, l.jsx)('h6', {
                    className: 'text-sm flex-grow truncate',
                    children: x.name,
                  }),
                ],
              }),
              (0, l.jsxs)('div', {
                className: 'text-xs text-center',
                children: [h, ' ', 'day'.concat(h > 1 ? 's' : '')],
              }),
              (0, l.jsx)('div', {
                className: 'text-xs flex justify-center',
                children:
                  x.assignee_ids.length > 0
                    ? (0, l.jsx)(c.HE, {
                        children:
                          null === (t = x.assignee_ids) || void 0 === t
                            ? void 0
                            : t.map(e => {
                                let t = n(e);
                                return t
                                  ? (0, l.jsx)(
                                      c.qE,
                                      { src: t.avatar, name: t.display_name },
                                      e
                                    )
                                  : null;
                              }),
                      })
                    : '-',
              }),
            ],
          });
        }),
        $ = (0, a.Pi)(e => {
          var t;
          let { issueId: s, onClick: i, workspaceSlug: a } = e,
            { getUserDetails: r } = (0, u.Kb)(),
            {
              issue: { getIssueById: n },
            } = (0, u.p1)(),
            { getProjectById: d } = (0, u.PY)(),
            o = n(s);
          if (!o) return null;
          let x = d(o.project_id);
          return (0, l.jsxs)(c.Ug, {
            href: '/'
              .concat(a, '/projects/')
              .concat(o.project_id, '/issues/')
              .concat(o.id),
            onClick: () => i(o),
            className:
              'py-2 px-3 hover:bg-custom-background-80 rounded grid grid-cols-6 gap-1',
            children: [
              (0, l.jsxs)('div', {
                className: 'col-span-5 flex items-center gap-3',
                children: [
                  (0, l.jsx)(c.bJ, { priority: o.priority, withContainer: !0 }),
                  (0, l.jsxs)('span', {
                    className: 'text-xs font-medium flex-shrink-0',
                    children: [
                      null == x ? void 0 : x.identifier,
                      ' ',
                      o.sequence_id,
                    ],
                  }),
                  (0, l.jsx)('h6', {
                    className: 'text-sm flex-grow truncate',
                    children: o.name,
                  }),
                ],
              }),
              (0, l.jsx)('div', {
                className: 'text-xs flex justify-center',
                children:
                  o.assignee_ids.length > 0
                    ? (0, l.jsx)(c.HE, {
                        children:
                          null === (t = o.assignee_ids) || void 0 === t
                            ? void 0
                            : t.map(e => {
                                let t = r(e);
                                return t
                                  ? (0, l.jsx)(
                                      c.qE,
                                      { src: t.avatar, name: t.display_name },
                                      e
                                    )
                                  : null;
                              }),
                      })
                    : '-',
              }),
            ],
          });
        });
      var ee = s(79894),
        et = s.n(ee),
        es = s(6780);
      let el = e => {
        let {
            isLoading: t,
            tab: s,
            type: i,
            widgetStats: a,
            workspaceSlug: r,
          } = e,
          { setPeekIssue: n } = (0, u.p1)(),
          d = e =>
            n({ workspaceSlug: r, projectId: e.project_id, issueId: e.id }),
          o = I(s),
          x = {
            assigned: { pending: Q, upcoming: Q, overdue: X, completed: V },
            created: { pending: J, upcoming: J, overdue: G, completed: $ },
          },
          m = a.issues;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)('div', {
              className: 'h-full',
              children: t
                ? (0, l.jsxs)(c.aN, {
                    className: 'space-y-4 mx-6 mt-7',
                    children: [
                      (0, l.jsx)(c.aN.Item, { height: '25px' }),
                      (0, l.jsx)(c.aN.Item, { height: '25px' }),
                      (0, l.jsx)(c.aN.Item, { height: '25px' }),
                      (0, l.jsx)(c.aN.Item, { height: '25px' }),
                    ],
                  })
                : m.length > 0
                  ? (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsxs)('div', {
                          className:
                            'mt-7 mx-6 border-b-[0.5px] border-custom-border-200 grid grid-cols-6 gap-1 text-xs text-custom-text-300 pb-1',
                          children: [
                            (0, l.jsxs)('h6', {
                              className: (0, es.cn)(
                                'pl-1 flex items-center gap-1 col-span-4',
                                {
                                  'col-span-6':
                                    'assigned' === i && 'completed' === s,
                                  'col-span-5':
                                    'created' === i && 'completed' === s,
                                }
                              ),
                              children: [
                                'Issues',
                                (0, l.jsx)('span', {
                                  className:
                                    'flex-shrink-0 bg-custom-primary-100/20 text-custom-primary-100 text-xs font-medium rounded-xl px-3 flex items-center text-center justify-center',
                                  children: a.count,
                                }),
                              ],
                            }),
                            ['upcoming', 'pending'].includes(s) &&
                              (0, l.jsx)('h6', {
                                className: 'text-center',
                                children: 'Due date',
                              }),
                            'overdue' === s &&
                              (0, l.jsx)('h6', {
                                className: 'text-center',
                                children: 'Due by',
                              }),
                            'assigned' === i &&
                              'completed' !== s &&
                              (0, l.jsx)('h6', {
                                className: 'text-center',
                                children: 'Blocked by',
                              }),
                            'created' === i &&
                              (0, l.jsx)('h6', {
                                className: 'text-center',
                                children: 'Assigned to',
                              }),
                          ],
                        }),
                        (0, l.jsx)('div', {
                          className: 'px-4 pb-3 mt-2',
                          children: m.map(e => {
                            let t = x[i][s];
                            return t
                              ? (0, l.jsx)(
                                  t,
                                  {
                                    issueId: e.id,
                                    workspaceSlug: r,
                                    onClick: d,
                                  },
                                  e.id
                                )
                              : null;
                          }),
                        }),
                      ],
                    })
                  : (0, l.jsxs)('div', {
                      className: 'h-full grid place-items-center',
                      children: [
                        'assigned' === i && (0, l.jsx)(F, { type: s }),
                        'created' === i && (0, l.jsx)(D, { type: s }),
                      ],
                    }),
            }),
            !t &&
              m.length > 0 &&
              (0, l.jsx)(et(), {
                href: '/'
                  .concat(r, '/workspace-views/')
                  .concat(i, '/')
                  .concat(o),
                className: (0, es.cn)(
                  (0, c.A6)('link-primary', 'sm'),
                  'w-min my-3 mx-auto py-1 px-2 text-xs hover:bg-custom-primary-100/20'
                ),
                children: 'View all issues',
              }),
          ],
        });
      };
      var ei = s(50649),
        ea = s(12625);
      let er = (0, ei.Pi)(e => {
          let { durationFilter: t, selectedTab: s } = e,
            i = 'none' === t ? g.v_ : g.sr,
            a = i.findIndex(e => e.key === s);
          return (0, l.jsxs)(ea.O.List, {
            as: 'div',
            className:
              'relative border-[0.5px] border-custom-border-200 rounded bg-custom-background-80 p-[1px] grid',
            style: {
              gridTemplateColumns: 'repeat('.concat(i.length, ', 1fr)'),
            },
            children: [
              (0, l.jsx)('div', {
                className: (0, es.cn)(
                  'absolute top-1/2 left-[1px] bg-custom-background-100 rounded-[3px] transition-all duration-500 ease-in-out',
                  {
                    'shadow-[2px_0_8px_rgba(167,169,174,0.15)]':
                      a !== i.length - 1,
                    'shadow-[-2px_0_8px_rgba(167,169,174,0.15)]': 0 !== a,
                  }
                ),
                style: {
                  height: 'calc(100% - 2px)',
                  width: 'calc('.concat(100 / i.length, '% - 1px)'),
                  transform: 'translate('.concat(100 * a, '%, -50%)'),
                },
              }),
              i.map(e =>
                (0, l.jsx)(
                  ea.O,
                  {
                    className: (0, es.cn)(
                      'relative z-[1] font-semibold text-xs rounded-[3px] py-1.5 text-custom-text-400 focus:outline-none transition duration-500',
                      {
                        'text-custom-text-100': s === e.key,
                        'hover:text-custom-text-300': s !== e.key,
                      }
                    ),
                    children: (0, l.jsx)('span', {
                      className: 'scale-110',
                      children: e.label,
                    }),
                  },
                  e.key
                )
              ),
            ],
          });
        }),
        en = () =>
          (0, l.jsxs)(c.aN, {
            className: 'bg-custom-background-100 p-6 rounded-xl',
            children: [
              (0, l.jsxs)('div', {
                className: 'flex items-center justify-between gap-2',
                children: [
                  (0, l.jsx)(c.aN.Item, { height: '17px', width: '35%' }),
                  (0, l.jsx)(c.aN.Item, { height: '17px', width: '10%' }),
                ],
              }),
              (0, l.jsxs)('div', {
                className: 'mt-6 space-y-7',
                children: [
                  (0, l.jsx)(c.aN.Item, { height: '29px' }),
                  (0, l.jsx)(c.aN.Item, { height: '17px', width: '10%' }),
                ],
              }),
              (0, l.jsxs)('div', {
                className: 'mt-11 space-y-10',
                children: [
                  (0, l.jsx)(c.aN.Item, { height: '11px', width: '35%' }),
                  (0, l.jsx)(c.aN.Item, { height: '11px', width: '45%' }),
                  (0, l.jsx)(c.aN.Item, { height: '11px', width: '55%' }),
                  (0, l.jsx)(c.aN.Item, { height: '11px', width: '40%' }),
                  (0, l.jsx)(c.aN.Item, { height: '11px', width: '60%' }),
                ],
              }),
            ],
          }),
        ec = () =>
          (0, l.jsxs)(c.aN, {
            className: 'bg-custom-background-100 rounded-xl p-6',
            children: [
              (0, l.jsx)(c.aN.Item, { height: '17px', width: '35%' }),
              (0, l.jsxs)('div', {
                className: 'flex items-center gap-1 h-full',
                children: [
                  (0, l.jsx)(c.aN.Item, { height: '119px', width: '14%' }),
                  (0, l.jsx)(c.aN.Item, { height: '119px', width: '26%' }),
                  (0, l.jsx)(c.aN.Item, { height: '119px', width: '36%' }),
                  (0, l.jsx)(c.aN.Item, { height: '119px', width: '18%' }),
                  (0, l.jsx)(c.aN.Item, { height: '119px', width: '6%' }),
                ],
              }),
            ],
          }),
        ed = () =>
          (0, l.jsxs)(c.aN, {
            className: 'bg-custom-background-100 rounded-xl p-6',
            children: [
              (0, l.jsx)(c.aN.Item, { height: '17px', width: '35%' }),
              (0, l.jsxs)('div', {
                className:
                  'flex items-center justify-between gap-32 mt-12 pl-6',
                children: [
                  (0, l.jsx)('div', {
                    className: 'w-1/2 grid place-items-center',
                    children: (0, l.jsxs)('div', {
                      className:
                        'rounded-full overflow-hidden relative flex-shrink-0 h-[184px] w-[184px]',
                      children: [
                        (0, l.jsx)(c.aN.Item, {
                          height: '184px',
                          width: '184px',
                        }),
                        (0, l.jsx)('div', {
                          className:
                            'absolute h-[100px] w-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-custom-background-100 rounded-full',
                        }),
                      ],
                    }),
                  }),
                  (0, l.jsx)('div', {
                    className: 'w-1/2 space-y-7 flex-shrink-0',
                    children: Array.from({ length: 5 }).map((e, t) =>
                      (0, l.jsx)(
                        c.aN.Item,
                        { height: '11px', width: '100%' },
                        t
                      )
                    ),
                  }),
                ],
              }),
            ],
          }),
        eo = () =>
          (0, l.jsx)(c.aN, {
            className:
              'bg-custom-background-100 rounded-xl py-6 grid grid-cols-4 gap-36 px-12',
            children: Array.from({ length: 4 }).map((e, t) =>
              (0, l.jsxs)(
                'div',
                {
                  className: 'space-y-3',
                  children: [
                    (0, l.jsx)(c.aN.Item, { height: '11px', width: '50%' }),
                    (0, l.jsx)(c.aN.Item, { height: '15px' }),
                  ],
                },
                t
              )
            ),
          }),
        eu = () =>
          (0, l.jsxs)(c.aN, {
            className: 'bg-custom-background-100 rounded-xl p-6 space-y-6',
            children: [
              (0, l.jsx)(c.aN.Item, { height: '17px', width: '35%' }),
              Array.from({ length: 7 }).map((e, t) =>
                (0, l.jsxs)(
                  'div',
                  {
                    className: 'flex items-start gap-3.5',
                    children: [
                      (0, l.jsx)('div', {
                        className: 'flex-shrink-0',
                        children: (0, l.jsx)(c.aN.Item, {
                          height: '16px',
                          width: '16px',
                        }),
                      }),
                      (0, l.jsxs)('div', {
                        className: 'space-y-3 flex-shrink-0 w-full',
                        children: [
                          (0, l.jsx)(c.aN.Item, {
                            height: '15px',
                            width: '70%',
                          }),
                          (0, l.jsx)(c.aN.Item, {
                            height: '11px',
                            width: '10%',
                          }),
                        ],
                      }),
                    ],
                  },
                  t
                )
              ),
            ],
          }),
        ex = () =>
          (0, l.jsx)(l.Fragment, {
            children: Array.from({ length: 8 }).map((e, t) =>
              (0, l.jsx)(
                c.aN,
                {
                  className: 'bg-custom-background-100 rounded-xl px-6 pb-12',
                  children: (0, l.jsxs)('div', {
                    className: 'space-y-11 flex flex-col items-center',
                    children: [
                      (0, l.jsx)('div', {
                        className:
                          'rounded-full overflow-hidden h-[69px] w-[69px]',
                        children: (0, l.jsx)(c.aN.Item, {
                          height: '69px',
                          width: '69px',
                        }),
                      }),
                      (0, l.jsx)(c.aN.Item, { height: '11px', width: '70%' }),
                    ],
                  }),
                },
                t
              )
            ),
          }),
        em = () =>
          (0, l.jsxs)(c.aN, {
            className: 'bg-custom-background-100 rounded-xl p-6 space-y-6',
            children: [
              (0, l.jsx)(c.aN.Item, { height: '17px', width: '35%' }),
              Array.from({ length: 5 }).map((e, t) =>
                (0, l.jsxs)(
                  'div',
                  {
                    className: 'flex items-center gap-6',
                    children: [
                      (0, l.jsx)('div', {
                        className: 'flex-shrink-0',
                        children: (0, l.jsx)(c.aN.Item, {
                          height: '60px',
                          width: '60px',
                        }),
                      }),
                      (0, l.jsxs)('div', {
                        className: 'space-y-3 flex-shrink-0 w-full',
                        children: [
                          (0, l.jsx)(c.aN.Item, {
                            height: '17px',
                            width: '42%',
                          }),
                          (0, l.jsx)(c.aN.Item, {
                            height: '23px',
                            width: '10%',
                          }),
                        ],
                      }),
                    ],
                  },
                  t
                )
              ),
            ],
          }),
        eh = e => {
          let { widgetKey: t } = e;
          return {
            overview_stats: (0, l.jsx)(eo, {}),
            assigned_issues: (0, l.jsx)(en, {}),
            created_issues: (0, l.jsx)(en, {}),
            issues_by_state_groups: (0, l.jsx)(ed, {}),
            issues_by_priority: (0, l.jsx)(ec, {}),
            recent_activity: (0, l.jsx)(eu, {}),
            recent_projects: (0, l.jsx)(em, {}),
            recent_collaborators: (0, l.jsx)(ex, {}),
          }[t];
        },
        ep = 'assigned_issues',
        eg = (0, a.Pi)(e => {
          var t, s;
          let { dashboardId: a, workspaceSlug: r } = e,
            [n, c] = (0, i.useState)(!1),
            {
              fetchWidgetStats: d,
              getWidgetDetails: o,
              getWidgetStats: x,
              getWidgetStatsError: m,
              updateDashboardWidgetFilters: h,
            } = (0, u.QU)(),
            p = o(r, a, ep),
            v = x(r, a, ep),
            f = m(r, a, ep),
            j =
              null !== (t = null == p ? void 0 : p.widget_filters.duration) &&
              void 0 !== t
                ? t
                : g.uZ.NONE,
            b = C(j, null == p ? void 0 : p.widget_filters.tab),
            w =
              null !==
                (s = null == p ? void 0 : p.widget_filters.custom_dates) &&
              void 0 !== s
                ? s
                : [],
            N = async e => {
              var t, s, l;
              if (!p) return;
              c(!0), await h(r, a, p.id, { widgetKey: ep, filters: e });
              let i = k(
                null !== (t = e.duration) && void 0 !== t ? t : j,
                null !== (s = e.custom_dates) && void 0 !== s ? s : w
              );
              d(r, a, {
                widget_key: ep,
                issue_type: null !== (l = e.tab) && void 0 !== l ? l : b,
                ...('' !== i.trim() ? { target_date: i } : {}),
                expand: 'issue_relation',
              }).finally(() => c(!1));
            };
          (0, i.useEffect)(() => {
            let e = k(j, w);
            d(r, a, {
              widget_key: ep,
              issue_type: b,
              ...('' !== e.trim() ? { target_date: e } : {}),
              expand: 'issue_relation',
            });
          }, []);
          let y = I(b),
            _ = 'none' === j ? g.v_ : g.sr,
            P = _.findIndex(e => e.key === b);
          return (p && v) || f
            ? (0, l.jsx)('div', {
                className:
                  'bg-custom-background-100 rounded-xl border-[0.5px] border-custom-border-200 w-full hover:shadow-custom-shadow-4xl duration-300 flex flex-col min-h-96',
                children: f
                  ? (0, l.jsx)(B, {
                      isRefreshing: n,
                      onClick: () => N({ duration: g.uZ.NONE, tab: 'pending' }),
                    })
                  : v &&
                    (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsxs)('div', {
                          className:
                            'flex items-center justify-between gap-2 p-6 pl-7',
                          children: [
                            (0, l.jsx)(et(), {
                              href: '/'
                                .concat(r, '/workspace-views/assigned/')
                                .concat(y),
                              className:
                                'text-lg font-semibold text-custom-text-300 hover:underline',
                              children: 'Assigned to you',
                            }),
                            (0, l.jsx)(S, {
                              customDates: w,
                              value: j,
                              onChange: (e, t) => {
                                if ('custom' === e && t) {
                                  N({ duration: e, custom_dates: t });
                                  return;
                                }
                                if (e === j) return;
                                let s = b;
                                'none' === e &&
                                  'completed' !== b &&
                                  (s = 'pending'),
                                  'none' !== e &&
                                    'none' === j &&
                                    'completed' !== b &&
                                    (s = 'upcoming'),
                                  N({ duration: e, tab: s });
                              },
                            }),
                          ],
                        }),
                        (0, l.jsxs)(ea.O.Group, {
                          as: 'div',
                          selectedIndex: P,
                          onChange: e => {
                            var t;
                            let s = _[e];
                            N({
                              tab:
                                null !== (t = null == s ? void 0 : s.key) &&
                                void 0 !== t
                                  ? t
                                  : 'completed',
                            });
                          },
                          className: 'h-full flex flex-col',
                          children: [
                            (0, l.jsx)('div', {
                              className: 'px-6',
                              children: (0, l.jsx)(er, {
                                durationFilter: j,
                                selectedTab: b,
                              }),
                            }),
                            (0, l.jsx)(ea.O.Panels, {
                              as: 'div',
                              className: 'h-full',
                              children: _.map(e =>
                                e.key !== b
                                  ? null
                                  : (0, l.jsx)(
                                      ea.O.Panel,
                                      {
                                        as: 'div',
                                        className: 'h-full flex flex-col',
                                        static: !0,
                                        children: (0, l.jsx)(el, {
                                          tab: e.key,
                                          type: 'assigned',
                                          workspaceSlug: r,
                                          widgetStats: v,
                                          isLoading: n,
                                        }),
                                      },
                                      e.key
                                    )
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
              })
            : (0, l.jsx)(eh, { widgetKey: ep });
        }),
        ev = 'created_issues',
        ef = (0, a.Pi)(e => {
          var t, s;
          let { dashboardId: a, workspaceSlug: r } = e,
            [n, c] = (0, i.useState)(!1),
            {
              fetchWidgetStats: d,
              getWidgetDetails: o,
              getWidgetStats: x,
              getWidgetStatsError: m,
              updateDashboardWidgetFilters: h,
            } = (0, u.QU)(),
            p = o(r, a, ev),
            v = x(r, a, ev),
            f = m(r, a, ev),
            j =
              null !== (t = null == p ? void 0 : p.widget_filters.duration) &&
              void 0 !== t
                ? t
                : g.uZ.NONE,
            b = C(j, null == p ? void 0 : p.widget_filters.tab),
            w =
              null !==
                (s = null == p ? void 0 : p.widget_filters.custom_dates) &&
              void 0 !== s
                ? s
                : [],
            N = async e => {
              var t, s, l;
              if (!p) return;
              c(!0), await h(r, a, p.id, { widgetKey: ev, filters: e });
              let i = k(
                null !== (t = e.duration) && void 0 !== t ? t : j,
                null !== (s = e.custom_dates) && void 0 !== s ? s : w
              );
              d(r, a, {
                widget_key: ev,
                issue_type: null !== (l = e.tab) && void 0 !== l ? l : b,
                ...('' !== i.trim() ? { target_date: i } : {}),
              }).finally(() => c(!1));
            };
          (0, i.useEffect)(() => {
            let e = k(j, w);
            d(r, a, {
              widget_key: ev,
              issue_type: b,
              ...('' !== e.trim() ? { target_date: e } : {}),
            });
          }, []);
          let y = I(b),
            _ = 'none' === j ? g.v_ : g.sr,
            P = _.findIndex(e => e.key === b);
          return (p && v) || f
            ? (0, l.jsx)('div', {
                className:
                  'bg-custom-background-100 rounded-xl border-[0.5px] border-custom-border-200 w-full hover:shadow-custom-shadow-4xl duration-300 flex flex-col min-h-96',
                children: f
                  ? (0, l.jsx)(B, {
                      isRefreshing: n,
                      onClick: () => N({ duration: g.uZ.NONE, tab: 'pending' }),
                    })
                  : v &&
                    (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsxs)('div', {
                          className:
                            'flex items-center justify-between gap-2 p-6 pl-7',
                          children: [
                            (0, l.jsx)(et(), {
                              href: '/'
                                .concat(r, '/workspace-views/created/')
                                .concat(y),
                              className:
                                'text-lg font-semibold text-custom-text-300 hover:underline',
                              children: 'Created by you',
                            }),
                            (0, l.jsx)(S, {
                              customDates: w,
                              value: j,
                              onChange: (e, t) => {
                                if ('custom' === e && t) {
                                  N({ duration: e, custom_dates: t });
                                  return;
                                }
                                if (e === j) return;
                                let s = b;
                                'none' === e &&
                                  'completed' !== b &&
                                  (s = 'pending'),
                                  'none' !== e &&
                                    'none' === j &&
                                    'completed' !== b &&
                                    (s = 'upcoming'),
                                  N({ duration: e, tab: s });
                              },
                            }),
                          ],
                        }),
                        (0, l.jsxs)(ea.O.Group, {
                          as: 'div',
                          selectedIndex: P,
                          onChange: e => {
                            var t;
                            N({
                              tab:
                                null !== (t = _[e].key) && void 0 !== t
                                  ? t
                                  : 'completed',
                            });
                          },
                          className: 'h-full flex flex-col',
                          children: [
                            (0, l.jsx)('div', {
                              className: 'px-6',
                              children: (0, l.jsx)(er, {
                                durationFilter: j,
                                selectedTab: b,
                              }),
                            }),
                            (0, l.jsx)(ea.O.Panels, {
                              as: 'div',
                              className: 'h-full',
                              children: _.map(e =>
                                e.key !== b
                                  ? null
                                  : (0, l.jsx)(
                                      ea.O.Panel,
                                      {
                                        as: 'div',
                                        className: 'h-full flex flex-col',
                                        static: !0,
                                        children: (0, l.jsx)(el, {
                                          tab: e.key,
                                          type: 'created',
                                          workspaceSlug: r,
                                          widgetStats: v,
                                          isLoading: n,
                                        }),
                                      },
                                      e.key
                                    )
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
              })
            : (0, l.jsx)(eh, { widgetKey: ev });
        });
      var ej = s(86677),
        eb = s(92775),
        ew = s(93997),
        eN = s(10712);
      let ey = {
          urgent: '#CE2C31',
          high: '#AB4800',
          medium: '#AB6400',
          low: '#1F2D5C',
          none: '#60646C',
        },
        e_ = e => {
          let {
              borderRadius: t = 8,
              data: s,
              height: i = 300,
              onBarClick: a,
              padding: r = 0.05,
              theme: n,
            } = e,
            c = s.map(e => ({
              priority: (0, eN.fm)(e.priority),
              value: e.priority_count,
            }));
          return (0, l.jsx)(eb.b8, {
            data: c,
            height: ''.concat(i, 'px'),
            indexBy: 'priority',
            keys: ['value'],
            borderRadius: t,
            padding: r,
            customYAxisTickValues: s.map(e => e.priority_count),
            axisBottom: { tickPadding: 8, tickSize: 0 },
            tooltip: e =>
              (0, l.jsxs)('div', {
                className:
                  'flex items-center gap-2 rounded-md border border-custom-border-200 bg-custom-background-80 p-2 text-xs',
                children: [
                  (0, l.jsx)('span', {
                    className: 'h-3 w-3 rounded',
                    style: {
                      backgroundColor:
                        ey[''.concat(e.data.priority).toLowerCase()],
                    },
                  }),
                  (0, l.jsxs)('span', {
                    className: 'font-medium text-custom-text-200',
                    children: [e.data.priority, ':'],
                  }),
                  (0, l.jsx)('span', { children: e.value }),
                ],
              }),
            colors: e => {
              let { data: t } = e;
              return 'url(#gradient'.concat(t.priority, ')');
            },
            defs: g.F,
            fill: ew.Ku.map(e => ({
              match: { id: e.key },
              id: 'gradient'.concat(e.title),
            })),
            onClick: e => {
              a && a(e);
            },
            theme: {
              axis: {
                domain: { line: { stroke: 'transparent' } },
                ticks: { text: { fontSize: 13 } },
              },
              grid: { line: { stroke: 'transparent' } },
              ...n,
            },
          });
        },
        ek = 'issues_by_priority',
        eI = (0, a.Pi)(e => {
          var t, s;
          let { dashboardId: a, workspaceSlug: r } = e,
            n = (0, ej.useRouter)(),
            {
              fetchWidgetStats: c,
              getWidgetDetails: d,
              getWidgetStats: o,
              updateDashboardWidgetFilters: x,
            } = (0, u.QU)(),
            m = d(r, a, ek),
            h = o(r, a, ek),
            p =
              null !== (t = null == m ? void 0 : m.widget_filters.duration) &&
              void 0 !== t
                ? t
                : g.uZ.NONE,
            v =
              null !==
                (s = null == m ? void 0 : m.widget_filters.custom_dates) &&
              void 0 !== s
                ? s
                : [],
            f = async e => {
              var t, s;
              if (!m) return;
              await x(r, a, m.id, { widgetKey: ek, filters: e });
              let l = k(
                null !== (t = e.duration) && void 0 !== t ? t : p,
                null !== (s = e.custom_dates) && void 0 !== s ? s : v
              );
              c(r, a, {
                widget_key: ek,
                ...('' !== l.trim() ? { target_date: l } : {}),
              });
            };
          if (
            ((0, i.useEffect)(() => {
              let e = k(p, v);
              c(r, a, {
                widget_key: ek,
                ...('' !== e.trim() ? { target_date: e } : {}),
              });
            }, []),
            !m || !h)
          )
            return (0, l.jsx)(eh, { widgetKey: ek });
          let j = h.reduce((e, t) => e + (null == t ? void 0 : t.count), 0),
            b = h.map(e => ({
              priority: null == e ? void 0 : e.priority,
              priority_count: null == e ? void 0 : e.count,
            }));
          return (0, l.jsxs)('div', {
            className:
              'flex min-h-96 w-full flex-col overflow-hidden rounded-xl border-[0.5px] border-custom-border-200 bg-custom-background-100 py-6 duration-300 hover:shadow-custom-shadow-4xl',
            children: [
              (0, l.jsxs)('div', {
                className: 'flex items-center justify-between gap-2 pl-7 pr-6',
                children: [
                  (0, l.jsx)(et(), {
                    href: '/'.concat(r, '/workspace-views/assigned'),
                    className:
                      'text-lg font-semibold text-custom-text-300 hover:underline',
                    children: 'Assigned by priority',
                  }),
                  (0, l.jsx)(S, {
                    customDates: v,
                    value: p,
                    onChange: (e, t) =>
                      f({
                        duration: e,
                        ...('custom' === e ? { custom_dates: t } : {}),
                      }),
                  }),
                ],
              }),
              j > 0
                ? (0, l.jsx)('div', {
                    className: 'flex h-full items-center',
                    children: (0, l.jsx)('div', {
                      className: '-mt-[11px] w-full',
                      children: (0, l.jsx)(e_, {
                        data: b,
                        onBarClick: e => {
                          n.push(
                            '/'
                              .concat(r, '/workspace-views/assigned?priority=')
                              .concat(''.concat(e.data.priority).toLowerCase())
                          );
                        },
                      }),
                    }),
                  })
                : (0, l.jsx)('div', {
                    className: 'grid h-full place-items-center',
                    children: (0, l.jsx)(O, {}),
                  }),
            ],
          });
        });
      var eC = s(52934);
      let eP = 'issues_by_state_groups',
        eS = (0, a.Pi)(e => {
          var t, s;
          let { dashboardId: a, workspaceSlug: r } = e,
            [n, c] = (0, i.useState)(null),
            [d, o] = (0, i.useState)(null),
            x = (0, ej.useRouter)(),
            {
              fetchWidgetStats: m,
              getWidgetDetails: h,
              getWidgetStats: p,
              updateDashboardWidgetFilters: v,
            } = (0, u.QU)(),
            f = h(r, a, eP),
            j = p(r, a, eP),
            b =
              null !== (t = null == f ? void 0 : f.widget_filters.duration) &&
              void 0 !== t
                ? t
                : g.uZ.NONE,
            w =
              null !==
                (s = null == f ? void 0 : f.widget_filters.custom_dates) &&
              void 0 !== s
                ? s
                : [],
            N = async e => {
              var t, s;
              if (!f) return;
              await v(r, a, f.id, { widgetKey: eP, filters: e });
              let l = k(
                null !== (t = e.duration) && void 0 !== t ? t : b,
                null !== (s = e.custom_dates) && void 0 !== s ? s : w
              );
              m(r, a, {
                widget_key: eP,
                ...('' !== l.trim() ? { target_date: l } : {}),
              });
            };
          if (
            ((0, i.useEffect)(() => {
              let e = k(b, w);
              m(r, a, {
                widget_key: eP,
                ...('' !== e.trim() ? { target_date: e } : {}),
              });
            }, []),
            (0, i.useEffect)(() => {
              var e, t, s, l, i, a, r, n, d, u;
              if (!j) return;
              let x =
                  null !==
                    (a =
                      null == j
                        ? void 0
                        : null ===
                              (e = j.find(
                                e =>
                                  (null == e ? void 0 : e.state) === 'started'
                              )) || void 0 === e
                          ? void 0
                          : e.count) && void 0 !== a
                    ? a
                    : 0,
                m =
                  null !==
                    (r =
                      null == j
                        ? void 0
                        : null ===
                              (t = j.find(
                                e =>
                                  (null == e ? void 0 : e.state) === 'unstarted'
                              )) || void 0 === t
                          ? void 0
                          : t.count) && void 0 !== r
                    ? r
                    : 0,
                h =
                  null !==
                    (n =
                      null == j
                        ? void 0
                        : null ===
                              (s = j.find(
                                e =>
                                  (null == e ? void 0 : e.state) === 'backlog'
                              )) || void 0 === s
                          ? void 0
                          : s.count) && void 0 !== n
                    ? n
                    : 0,
                p =
                  null !==
                    (d =
                      null == j
                        ? void 0
                        : null ===
                              (l = j.find(
                                e =>
                                  (null == e ? void 0 : e.state) === 'completed'
                              )) || void 0 === l
                          ? void 0
                          : l.count) && void 0 !== d
                    ? d
                    : 0,
                g =
                  null !==
                    (u =
                      null == j
                        ? void 0
                        : null ===
                              (i = j.find(
                                e =>
                                  (null == e ? void 0 : e.state) === 'cancelled'
                              )) || void 0 === i
                          ? void 0
                          : i.count) && void 0 !== u
                    ? u
                    : 0,
                v =
                  x > 0
                    ? 'started'
                    : m > 0
                      ? 'unstarted'
                      : h > 0
                        ? 'backlog'
                        : p > 0
                          ? 'completed'
                          : g > 0
                            ? 'cancelled'
                            : null;
              o(v), c(v);
            }, [j]),
            !f || !j)
          )
            return (0, l.jsx)(eh, { widgetKey: eP });
          let y =
              null == j
                ? void 0
                : j.reduce((e, t) => e + (null == t ? void 0 : t.count), 0),
            _ =
              null == j
                ? void 0
                : j.map(e => ({
                    color: g.Rj[null == e ? void 0 : e.state],
                    id: null == e ? void 0 : e.state,
                    label: null == e ? void 0 : e.state,
                    value: ((null == e ? void 0 : e.count) / y) * 100,
                  }));
          return (0, l.jsxs)('div', {
            className:
              'bg-custom-background-100 rounded-xl border-[0.5px] border-custom-border-200 w-full py-6 hover:shadow-custom-shadow-4xl duration-300 overflow-hidden min-h-96 flex flex-col',
            children: [
              (0, l.jsxs)('div', {
                className: 'flex items-center justify-between gap-2 pl-7 pr-6',
                children: [
                  (0, l.jsx)(et(), {
                    href: '/'.concat(r, '/workspace-views/assigned'),
                    className:
                      'text-lg font-semibold text-custom-text-300 hover:underline',
                    children: 'Assigned by state',
                  }),
                  (0, l.jsx)(S, {
                    customDates: w,
                    value: b,
                    onChange: (e, t) =>
                      N({
                        duration: e,
                        ...('custom' === e ? { custom_dates: t } : {}),
                      }),
                  }),
                ],
              }),
              y > 0
                ? (0, l.jsx)('div', {
                    className:
                      'flex items-center pl-10 md:pl-11 lg:pl-14 pr-11 mt-11',
                    children: (0, l.jsxs)('div', {
                      className:
                        'flex flex-col sm:flex-row md:flex-row lg:flex-row items-center justify-evenly gap-x-10 gap-y-8 w-full',
                      children: [
                        (0, l.jsx)('div', {
                          children: (0, l.jsx)(eb.HD, {
                            data: _,
                            height: '220px',
                            width: '200px',
                            innerRadius: 0.6,
                            cornerRadius: 5,
                            colors: e => e.data.color,
                            padAngle: 1,
                            enableArcLinkLabels: !1,
                            enableArcLabels: !1,
                            activeOuterRadiusOffset: 5,
                            tooltip: () => (0, l.jsx)(l.Fragment, {}),
                            margin: { top: 0, right: 5, bottom: 0, left: 5 },
                            defs: g.JX,
                            fill: Object.values(eC.q).map(e => ({
                              match: { id: e.key },
                              id: 'gradient'.concat(e.label),
                            })),
                            onClick: (e, t) => {
                              t.preventDefault(),
                                t.stopPropagation(),
                                x.push(
                                  '/'
                                    .concat(
                                      r,
                                      '/workspace-views/assigned/?state_group='
                                    )
                                    .concat(e.id)
                                );
                            },
                            onMouseEnter: e => o(e.id),
                            onMouseLeave: () => o(n),
                            layers: [
                              'arcs',
                              e => {
                                var t, s;
                                let {
                                    dataWithArc: i,
                                    centerX: a,
                                    centerY: r,
                                  } = e,
                                  n =
                                    null == i
                                      ? void 0
                                      : i.find(
                                          e => (null == e ? void 0 : e.id) === d
                                        ),
                                  c =
                                    null == _
                                      ? void 0
                                      : null ===
                                            (s = _.find(e => e.id === d)) ||
                                          void 0 === s
                                        ? void 0
                                        : null === (t = s.value) || void 0 === t
                                          ? void 0
                                          : t.toFixed(0);
                                return (0, l.jsxs)('g', {
                                  children: [
                                    (0, l.jsxs)('text', {
                                      x: a,
                                      y: r - 8,
                                      textAnchor: 'middle',
                                      dominantBaseline: 'central',
                                      className: 'text-3xl font-bold',
                                      style: {
                                        fill: null == n ? void 0 : n.color,
                                      },
                                      children: [c, '%'],
                                    }),
                                    (0, l.jsx)('text', {
                                      x: a,
                                      y: r + 20,
                                      textAnchor: 'middle',
                                      dominantBaseline: 'central',
                                      className:
                                        'text-sm font-medium fill-custom-text-300 capitalize',
                                      children: null == n ? void 0 : n.id,
                                    }),
                                  ],
                                });
                              },
                            ],
                          }),
                        }),
                        (0, l.jsx)('div', {
                          className: 'space-y-6 w-min whitespace-nowrap',
                          children: _.map(e =>
                            (0, l.jsxs)(
                              'div',
                              {
                                className:
                                  'flex items-center justify-between gap-6',
                                children: [
                                  (0, l.jsxs)('div', {
                                    className: 'flex items-center gap-2.5 w-24',
                                    children: [
                                      (0, l.jsx)('div', {
                                        className: 'h-3 w-3 rounded-full',
                                        style: { backgroundColor: e.color },
                                      }),
                                      (0, l.jsx)('span', {
                                        className:
                                          'text-custom-text-300 text-sm font-medium capitalize',
                                        children: e.label,
                                      }),
                                    ],
                                  }),
                                  (0, l.jsxs)('span', {
                                    className: 'text-custom-text-400 text-sm',
                                    children: [e.value.toFixed(0), '%'],
                                  }),
                                ],
                              },
                              e.id
                            )
                          ),
                        }),
                      ],
                    }),
                  })
                : (0, l.jsx)('div', {
                    className: 'h-full grid place-items-center',
                    children: (0, l.jsx)(H, {}),
                  }),
            ],
          });
        }),
        eE = 'overview_stats',
        eF = (0, a.Pi)(e => {
          let { dashboardId: t, workspaceSlug: s } = e,
            { fetchWidgetStats: a, getWidgetStats: r } = (0, u.QU)(),
            n = r(s, t, eE),
            c = (0, _.ss)(new Date()),
            d = [
              {
                key: 'assigned',
                title: 'Issues assigned',
                count: null == n ? void 0 : n.assigned_issues_count,
                link: '/'.concat(s, '/workspace-views/assigned'),
              },
              {
                key: 'overdue',
                title: 'Issues overdue',
                count: null == n ? void 0 : n.pending_issues_count,
                link: '/'
                  .concat(
                    s,
                    '/workspace-views/assigned/?state_group=backlog,unstarted,started&target_date='
                  )
                  .concat(c, ';before'),
              },
              {
                key: 'created',
                title: 'Issues created',
                count: null == n ? void 0 : n.created_issues_count,
                link: '/'.concat(s, '/workspace-views/created'),
              },
              {
                key: 'completed',
                title: 'Issues completed',
                count: null == n ? void 0 : n.completed_issues_count,
                link: '/'.concat(
                  s,
                  '/workspace-views/assigned?state_group=completed'
                ),
              },
            ];
          return ((0, i.useEffect)(() => {
            a(s, t, { widget_key: eE });
          }, []),
          n)
            ? (0, l.jsx)('div', {
                className:
                  'bg-custom-background-100 rounded-xl border-[0.5px] border-custom-border-200 w-full grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-2  p-0.5 hover:shadow-custom-shadow-4xl duration-300 [&>div>a>div]:border-r [&>div:last-child>a>div]:border-0 [&>div>a>div]:border-custom-border-200 [&>div:nth-child(2)>a>div]:border-0 [&>div:nth-child(2)>a>div]:lg:border-r ',
                children: d.map((e, t) =>
                  (0, l.jsx)(
                    'div',
                    {
                      className: (0, es.cn)(
                        'w-full flex flex-col gap-2 hover:bg-custom-background-80',
                        0 === t ? 'rounded-tl-xl lg:rounded-l-xl' : '',
                        t === d.length - 1
                          ? 'rounded-br-xl lg:rounded-r-xl'
                          : '',
                        1 === t ? 'rounded-tr-xl lg:rounded-[0px]' : '',
                        2 == t ? 'rounded-bl-xl lg:rounded-[0px]' : ''
                      ),
                      children: (0, l.jsx)(et(), {
                        href: e.link,
                        className: 'py-4 duration-300 rounded-[10px] w-full ',
                        children: (0, l.jsx)('div', {
                          className:
                            'relative flex pl-10 sm:pl-20 md:pl-20 lg:pl-20 items-center',
                          children: (0, l.jsxs)('div', {
                            children: [
                              (0, l.jsx)('h5', {
                                className: 'font-semibold text-xl',
                                children: e.count,
                              }),
                              (0, l.jsx)('p', {
                                className:
                                  'text-custom-text-300 text-sm xl:text-base',
                                children: e.title,
                              }),
                            ],
                          }),
                        }),
                      }),
                    },
                    e.key
                  )
                ),
              })
            : (0, l.jsx)(eh, { widgetKey: eE });
        });
      var eD = s(94743);
      let eZ = 'recent_activity',
        eA = (0, a.Pi)(e => {
          let { dashboardId: t, workspaceSlug: s } = e,
            { currentUser: a } = (0, u.aF)(),
            { fetchWidgetStats: r, getWidgetStats: n } = (0, u.QU)(),
            d = n(s, t, eZ),
            x = '/'
              .concat(s, '/profile/')
              .concat(null == a ? void 0 : a.id, '/activity');
          return ((0, i.useEffect)(() => {
            r(s, t, { widget_key: eZ });
          }, []),
          d)
            ? (0, l.jsxs)('div', {
                className:
                  'min-h-96 w-full rounded-xl border-[0.5px] border-custom-border-200 bg-custom-background-100 py-6 duration-300 hover:shadow-custom-shadow-4xl',
                children: [
                  (0, l.jsx)(et(), {
                    href: x,
                    className:
                      'mx-7 text-lg font-semibold text-custom-text-300 hover:underline',
                    children: 'Your issue activities',
                  }),
                  d.length > 0
                    ? (0, l.jsxs)('div', {
                        className: 'mx-7 mt-4 space-y-6',
                        children: [
                          d.map(e => {
                            var t;
                            return (0, l.jsxs)(
                              'div',
                              {
                                className: 'flex gap-5',
                                children: [
                                  (0, l.jsx)('div', {
                                    className: 'flex-shrink-0',
                                    children: e.field
                                      ? 'restore' === e.new_value
                                        ? (0, l.jsx)(eD.Z, {
                                            className:
                                              'h-3.5 w-3.5 text-custom-text-200',
                                          })
                                        : (0, l.jsx)('div', {
                                            className:
                                              'flex h-6 w-6 justify-center',
                                            children: (0, l.jsx)(o.AH, {
                                              activity: e,
                                            }),
                                          })
                                      : e.actor_detail.avatar &&
                                          '' !== e.actor_detail.avatar
                                        ? (0, l.jsx)(c.qE, {
                                            src: e.actor_detail.avatar,
                                            name: e.actor_detail.display_name,
                                            size: 24,
                                            className:
                                              'h-full w-full rounded-full object-cover',
                                          })
                                        : (0, l.jsx)('div', {
                                            className:
                                              'grid h-7 w-7 place-items-center rounded-full border-2 border-white bg-gray-700 text-xs text-white',
                                            children: e.actor_detail.is_bot
                                              ? e.actor_detail.first_name.charAt(
                                                  0
                                                )
                                              : e.actor_detail.display_name.charAt(
                                                  0
                                                ),
                                          }),
                                  }),
                                  (0, l.jsxs)('div', {
                                    className: '-mt-2 break-words',
                                    children: [
                                      (0, l.jsxs)('p', {
                                        className:
                                          'inline text-sm text-custom-text-200',
                                        children: [
                                          (0, l.jsxs)('span', {
                                            className:
                                              'font-medium text-custom-text-100',
                                            children: [
                                              (null == a ? void 0 : a.id) ===
                                              e.actor_detail.id
                                                ? 'You'
                                                : null ===
                                                      (t = e.actor_detail) ||
                                                    void 0 === t
                                                  ? void 0
                                                  : t.display_name,
                                              ' ',
                                            ],
                                          }),
                                          e.field
                                            ? (0, l.jsx)(o.t2, {
                                                activity: e,
                                                showIssue: !0,
                                              })
                                            : (0, l.jsxs)('span', {
                                                children: [
                                                  'created ',
                                                  (0, l.jsx)(o.zE, {
                                                    activity: e,
                                                  }),
                                                ],
                                              }),
                                        ],
                                      }),
                                      (0, l.jsx)('p', {
                                        className:
                                          'text-xs text-custom-text-200 whitespace-nowrap',
                                        children: (0, _.KI)(e.created_at),
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              e.id
                            );
                          }),
                          (0, l.jsx)(et(), {
                            href: x,
                            className: (0, es.cn)(
                              (0, c.A6)('link-primary', 'sm'),
                              'mx-auto w-min px-2 py-1 text-xs hover:bg-custom-primary-100/20'
                            ),
                            children: 'View all',
                          }),
                        ],
                      })
                    : (0, l.jsx)('div', {
                        className: 'grid h-full place-items-center',
                        children: (0, l.jsx)(K, {}),
                      }),
                ],
              })
            : (0, l.jsx)(eh, { widgetKey: eZ });
        });
      var eO = s(81630),
        eT = s(30201);
      let eU = (0, ei.Pi)(e => {
          let { issueCount: t, userId: s, workspaceSlug: i } = e,
            { currentUser: a } = (0, u.aF)(),
            { getUserDetails: r } = (0, u.Kb)(),
            n = r(s),
            d = s === (null == a ? void 0 : a.id);
          return n
            ? (0, l.jsxs)(et(), {
                href: '/'.concat(i, '/profile/').concat(s),
                className: 'group text-center',
                children: [
                  (0, l.jsx)('div', {
                    className: 'flex justify-center',
                    children: (0, l.jsx)(c.qE, {
                      src: n.avatar,
                      name: n.display_name,
                      size: 69,
                      className: '!text-3xl !font-medium',
                      showTooltip: !1,
                    }),
                  }),
                  (0, l.jsx)('h6', {
                    className:
                      'mt-6 text-xs font-semibold group-hover:underline truncate',
                    children: d ? 'You' : null == n ? void 0 : n.display_name,
                  }),
                  (0, l.jsxs)('p', {
                    className: 'text-sm mt-2',
                    children: [t, ' active issue', t > 1 ? 's' : ''],
                  }),
                ],
              })
            : null;
        }),
        eH = 'recent_collaborators',
        eR = e => {
          var t;
          let {
              cursor: s,
              dashboardId: a,
              perPage: r,
              searchQuery: n = '',
              updateIsLoading: c,
              updateResultsCount: d,
              updateTotalPages: o,
              workspaceSlug: x,
            } = e,
            { fetchWidgetStats: m } = (0, u.QU)(),
            { data: h } = (0, eT.ZP)(
              x && a && s
                ? 'WIDGET_STATS_'
                    .concat(x, '_')
                    .concat(a, '_')
                    .concat(s, '_')
                    .concat(n)
                : null,
              x && a && s
                ? () =>
                    m(x, a, {
                      cursor: s,
                      per_page: r,
                      search: n,
                      widget_key: eH,
                    })
                : null
            );
          return ((0, i.useEffect)(() => {
            var e;
            null == c || c(!0),
              h &&
                (null == c || c(!1),
                o(h.total_pages),
                d(
                  null === (e = h.results) || void 0 === e ? void 0 : e.length
                ));
          }, [c, d, o, h]),
          h && (null == h ? void 0 : h.results))
            ? (0, l.jsx)(l.Fragment, {
                children:
                  null == h
                    ? void 0
                    : null === (t = h.results) || void 0 === t
                      ? void 0
                      : t.map(e =>
                          (0, l.jsx)(
                            eU,
                            {
                              issueCount: e.active_issue_count,
                              userId: e.user_id,
                              workspaceSlug: x,
                            },
                            e.user_id
                          )
                        ),
              })
            : (0, l.jsx)(eh, { widgetKey: eH });
        },
        eW = e => {
          let { dashboardId: t, perPage: s, workspaceSlug: a } = e,
            [r, n] = (0, i.useState)(1),
            [d, o] = (0, i.useState)(0),
            [u, x] = (0, i.useState)(0),
            m = e => o(e),
            h = e => x(e),
            p = [];
          for (let e = 0; e < r; e++)
            p.push(
              (0, l.jsx)(
                eR,
                {
                  dashboardId: t,
                  cursor: ''.concat(s, ':').concat(e, ':0'),
                  perPage: s,
                  updateResultsCount: h,
                  updateTotalPages: m,
                  workspaceSlug: a,
                },
                e
              )
            );
          let g = r < d && 0 !== u,
            v = r > 1;
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)('div', {
                className:
                  'mt-7 mb-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 xl:grid-cols-8 gap-2 gap-y-8',
                children: p,
              }),
              (v || g) &&
                (0, l.jsxs)('div', {
                  className: 'flex items-center justify-center text-xs w-full',
                  children: [
                    v &&
                      (0, l.jsx)(c.zx, {
                        variant: 'link-primary',
                        size: 'sm',
                        className: 'my-3 hover:bg-custom-primary-100/20',
                        onClick: () => n(1),
                        children: 'View less',
                      }),
                    g &&
                      (0, l.jsx)(c.zx, {
                        variant: 'link-primary',
                        size: 'sm',
                        className: 'my-3 hover:bg-custom-primary-100/20',
                        onClick: () => n(e => e + 1),
                        children: 'View more',
                      }),
                  ],
                }),
            ],
          });
        },
        eK = e => {
          let {
              dashboardId: t,
              perPage: s,
              searchQuery: a,
              workspaceSlug: r,
            } = e,
            [d, o] = (0, i.useState)(1),
            [u, x] = (0, i.useState)(0),
            [m, h] = (0, i.useState)(0),
            [p, g] = (0, i.useState)(!0),
            { resolvedTheme: v } = (0, E.F)(),
            f = e => x(e),
            j = e => h(e),
            b = [];
          for (let e = 0; e < d; e++)
            b.push(
              (0, l.jsx)(
                eR,
                {
                  dashboardId: t,
                  cursor: ''.concat(s, ':').concat(e, ':0'),
                  perPage: s,
                  searchQuery: a,
                  updateIsLoading: g,
                  updateResultsCount: j,
                  updateTotalPages: f,
                  workspaceSlug: r,
                },
                e
              )
            );
          let w = d < u && 0 !== m,
            N = d > 1;
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)('div', {
                className:
                  'mt-7 mb-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 xl:grid-cols-8 gap-2 gap-y-8',
                children: b,
              }),
              !p &&
                0 === u &&
                (0, l.jsxs)('div', {
                  className: 'flex flex-col items-center gap-6 mb-8',
                  children: [
                    (0, l.jsx)('div', {
                      className: 'h-24 w-24 flex-shrink-0',
                      children: (0, l.jsx)(n(), {
                        src: 'dark' === v ? z : Y,
                        className: 'w-full h-full',
                        alt: 'Recent collaborators',
                      }),
                    }),
                    (0, l.jsx)('p', {
                      className: 'font-medium text-sm',
                      children: 'No matching member',
                    }),
                  ],
                }),
              (N || w) &&
                (0, l.jsxs)('div', {
                  className: 'flex items-center justify-center text-xs w-full',
                  children: [
                    N &&
                      (0, l.jsx)(c.zx, {
                        variant: 'link-primary',
                        size: 'sm',
                        className: 'my-3 hover:bg-custom-primary-100/20',
                        onClick: () => o(1),
                        children: 'View less',
                      }),
                    w &&
                      (0, l.jsx)(c.zx, {
                        variant: 'link-primary',
                        size: 'sm',
                        className: 'my-3 hover:bg-custom-primary-100/20',
                        onClick: () => o(e => e + 1),
                        children: 'View more',
                      }),
                  ],
                }),
            ],
          });
        };
      var ez = s(47542),
        eY = s(91256),
        eq = s(93116);
      let eM = 'recent_projects',
        eB = (0, a.Pi)(e => {
          var t;
          let { projectId: s, workspaceSlug: i } = e,
            { getProjectById: a } = (0, u.PY)(),
            r = a(s),
            n = g.P2[Math.floor(Math.random() * g.P2.length)];
          return r
            ? (0, l.jsxs)(et(), {
                href: '/'.concat(i, '/projects/').concat(s, '/issues'),
                className: 'group flex items-center gap-8',
                children: [
                  (0, l.jsx)('div', {
                    className:
                      'h-[3.375rem] w-[3.375rem] grid place-items-center rounded border border-transparent flex-shrink-0 '.concat(
                        n
                      ),
                    children: (0, l.jsx)('div', {
                      className: 'h-7 w-7 grid place-items-center',
                      children: (0, l.jsx)(eY.h0, {
                        logo: r.logo_props,
                        className: 'text-xl',
                      }),
                    }),
                  }),
                  (0, l.jsxs)('div', {
                    className: 'flex-grow truncate',
                    children: [
                      (0, l.jsx)('h6', {
                        className:
                          'text-sm text-custom-text-300 font-medium group-hover:underline group-hover:text-custom-text-100 truncate',
                        children: r.name,
                      }),
                      (0, l.jsx)('div', {
                        className: 'mt-2',
                        children: (0, l.jsx)(c.HE, {
                          children:
                            null === (t = r.members) || void 0 === t
                              ? void 0
                              : t.map(e =>
                                  (0, l.jsx)(
                                    c.qE,
                                    {
                                      src: e.member__avatar,
                                      name: e.member__display_name,
                                    },
                                    e.member_id
                                  )
                                ),
                        }),
                      }),
                    ],
                  }),
                ],
              })
            : null;
        }),
        eL = {
          overview_stats: { component: eF, fullWidth: !0 },
          assigned_issues: { component: eg, fullWidth: !1 },
          created_issues: { component: ef, fullWidth: !1 },
          issues_by_state_groups: { component: eS, fullWidth: !1 },
          issues_by_priority: { component: eI, fullWidth: !1 },
          recent_activity: { component: eA, fullWidth: !1 },
          recent_projects: {
            component: (0, a.Pi)(e => {
              let { dashboardId: t, workspaceSlug: s } = e,
                {
                  commandPalette: { toggleCreateProjectModal: a },
                } = (0, u.IX)(),
                { setTrackElement: r } = (0, u.DN)(),
                {
                  membership: { currentWorkspaceRole: n },
                } = (0, u.aF)(),
                { fetchWidgetStats: c, getWidgetStats: d } = (0, u.QU)(),
                o = d(s, t, eM),
                x = n && n >= eq.fp.MEMBER;
              return ((0, i.useEffect)(() => {
                c(s, t, { widget_key: eM });
              }, []),
              o)
                ? (0, l.jsxs)('div', {
                    className:
                      'bg-custom-background-100 rounded-xl border-[0.5px] border-custom-border-200 w-full py-6 hover:shadow-custom-shadow-4xl duration-300 min-h-96',
                    children: [
                      (0, l.jsx)(et(), {
                        href: '/'.concat(s, '/projects'),
                        className:
                          'text-lg font-semibold text-custom-text-300 mx-7 hover:underline',
                        children: 'Recent projects',
                      }),
                      (0, l.jsxs)('div', {
                        className: 'space-y-8 mt-4 mx-7',
                        children: [
                          x &&
                            (0, l.jsxs)('button', {
                              type: 'button',
                              className: 'group flex items-center gap-8',
                              onClick: e => {
                                e.preventDefault(),
                                  e.stopPropagation(),
                                  r('Sidebar'),
                                  a(!0);
                              },
                              children: [
                                (0, l.jsx)('div', {
                                  className:
                                    'h-[3.375rem] w-[3.375rem] bg-custom-primary-100/20 text-custom-primary-100 grid place-items-center rounded border border-dashed border-custom-primary-60 flex-shrink-0',
                                  children: (0, l.jsx)(ez.Z, {
                                    className: 'h-6 w-6',
                                  }),
                                }),
                                (0, l.jsx)('p', {
                                  className:
                                    'text-sm text-custom-text-300 font-medium group-hover:underline group-hover:text-custom-text-100',
                                  children: 'Create new project',
                                }),
                              ],
                            }),
                          o.map(e =>
                            (0, l.jsx)(
                              eB,
                              { projectId: e, workspaceSlug: s },
                              e
                            )
                          ),
                        ],
                      }),
                    ],
                  })
                : (0, l.jsx)(eh, { widgetKey: eM });
            }),
            fullWidth: !1,
          },
          recent_collaborators: {
            component: e => {
              let { dashboardId: t, workspaceSlug: s } = e,
                [a, r] = (0, i.useState)('');
              return (0, l.jsxs)('div', {
                className:
                  'w-full rounded-xl border-[0.5px] border-custom-border-200 bg-custom-background-100 duration-300 hover:shadow-custom-shadow-4xl',
                children: [
                  (0, l.jsxs)('div', {
                    className: 'flex items-start justify-between px-7 pt-6',
                    children: [
                      (0, l.jsxs)('div', {
                        children: [
                          (0, l.jsx)('h4', {
                            className:
                              'text-lg font-semibold text-custom-text-300',
                            children: 'Collaborators',
                          }),
                          (0, l.jsx)('p', {
                            className:
                              'mt-2 text-xs font-medium text-custom-text-300',
                            children:
                              'View and find all members you collaborate with across projects',
                          }),
                        ],
                      }),
                      (0, l.jsxs)('div', {
                        className:
                          'flex min-w-72 items-center justify-start gap-2 rounded-md border border-custom-border-200 px-2.5 py-1.5 placeholder:text-custom-text-400',
                        children: [
                          (0, l.jsx)(eO.Z, {
                            className: 'h-3.5 w-3.5 text-custom-text-400',
                          }),
                          (0, l.jsx)('input', {
                            className:
                              'w-full border-none bg-transparent text-sm focus:outline-none',
                            placeholder: 'Search for collaborators',
                            value: a,
                            onChange: e => r(e.target.value),
                          }),
                        ],
                      }),
                    ],
                  }),
                  '' !== a.trim()
                    ? (0, l.jsx)(eK, {
                        dashboardId: t,
                        perPage: 8,
                        searchQuery: a,
                        workspaceSlug: s,
                      })
                    : (0, l.jsx)(eW, {
                        dashboardId: t,
                        perPage: 8,
                        workspaceSlug: s,
                      }),
                ],
              });
            },
            fullWidth: !0,
          },
        },
        eQ = (0, a.Pi)(() => {
          let {
              router: { workspaceSlug: e },
            } = (0, u.IX)(),
            { homeDashboardId: t, homeDashboardWidgets: s } = (0, u.QU)(),
            i = e => !!(null == s ? void 0 : s.find(t => t.key === e));
          return e && t
            ? (0, l.jsx)('div', {
                className:
                  'relative flex flex-col lg:grid lg:grid-cols-2 gap-7',
                children: Object.entries(eL).map(s => {
                  let [a, r] = s,
                    n = r.component;
                  return i(a)
                    ? r.fullWidth
                      ? (0, l.jsx)(
                          'div',
                          {
                            className: 'lg:col-span-2',
                            children: (0, l.jsx)(n, {
                              dashboardId: t,
                              workspaceSlug: e,
                            }),
                          },
                          a
                        )
                      : (0, l.jsx)(n, { dashboardId: t, workspaceSlug: e }, a)
                    : null;
                }),
              })
            : null;
        });
      var eX = {
        src: '/_next/static/media/project.feac5f63.svg',
        height: 476,
        width: 986,
        blurWidth: 0,
        blurHeight: 0,
      };
      (0, a.Pi)(() => {
        let {
            commandPalette: { toggleCreateProjectModal: e },
          } = (0, u.IX)(),
          { setTrackElement: t } = (0, u.DN)(),
          {
            membership: { currentWorkspaceRole: s },
          } = (0, u.aF)(),
          i = s === eq.fp.ADMIN;
        return (0, l.jsxs)('div', {
          className:
            'h-full flex flex-col justify-center lg:w-3/5 mx-auto space-y-4',
          children: [
            (0, l.jsx)('h4', {
              className: 'text-xl font-semibold',
              children: 'Overview of your projects, activity, and metrics',
            }),
            (0, l.jsx)('p', {
              className: 'text-custom-text-300',
              children:
                'Welcome to Plane, we are excited to have you here. Create your first project and track your issues, and this page will transform into a space that helps you progress. Admins will also see items which help their team progress.',
            }),
            (0, l.jsx)(n(), {
              src: eX,
              className: 'w-full',
              alt: 'Project empty state',
            }),
            i &&
              (0, l.jsx)('div', {
                className: 'flex justify-center',
                children: (0, l.jsx)(c.zx, {
                  variant: 'primary',
                  onClick: () => {
                    t('Project empty state'), e(!0);
                  },
                  children: 'Build your first project',
                }),
              }),
          ],
        });
      });
      var eV = s(74371),
        eJ = s(68114),
        eG = s(82471),
        e$ = s(89821);
      let e0 = e => {
        let { user: t } = e,
          { currentTime: s } = (0, e$.Y)(),
          i = new Intl.DateTimeFormat('en-US', {
            hour12: !1,
            hour: 'numeric',
          }).format(s),
          a = new Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: 'numeric',
          }).format(s),
          r = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(s),
          n = new Intl.DateTimeFormat('en-US', {
            timeZone: null == t ? void 0 : t.user_timezone,
            hour12: !1,
            hour: '2-digit',
            minute: '2-digit',
          }).format(s),
          c =
            12 > parseInt(i, 10)
              ? 'morning'
              : 18 > parseInt(i, 10)
                ? 'afternoon'
                : 'evening';
        return (0, l.jsxs)('div', {
          children: [
            (0, l.jsxs)('h3', {
              className: 'text-xl font-semibold',
              children: [
                'Good ',
                c,
                ', ',
                null == t ? void 0 : t.first_name,
                ' ',
                null == t ? void 0 : t.last_name,
              ],
            }),
            (0, l.jsxs)('h6', {
              className:
                'flex items-center gap-2 font-medium text-custom-text-400',
              children: [
                (0, l.jsx)('div', {
                  children:
                    'morning' === c
                      ? '\uD83C\uDF24️'
                      : 'afternoon' === c
                        ? '\uD83C\uDF25️'
                        : '\uD83C\uDF19️',
                }),
                (0, l.jsxs)('div', { children: [r, ', ', a, ' ', n] }),
              ],
            }),
          ],
        });
      };
      var e1 = s(70540),
        e2 = s(865),
        e3 = s(45530);
      let e6 = (0, a.Pi)(() => {
        let { captureEvent: e, setTrackElement: t } = (0, u.DN)(),
          {
            commandPalette: { toggleCreateProjectModal: s },
            router: { workspaceSlug: a },
          } = (0, u.IX)(),
          { currentUser: r, updateTourCompleted: n } = (0, u.aF)(),
          { homeDashboardId: d, fetchHomeDashboardWidgets: o } = (0, u.QU)(),
          { joinedProjectIds: x } = (0, u.PY)(),
          [m] = (0, e3.Z)();
        return (
          (0, i.useEffect)(() => {
            a && o(a);
          }, [o, a]),
          (0, l.jsxs)(l.Fragment, {
            children: [
              r &&
                !r.is_tour_completed &&
                (0, l.jsx)('div', {
                  className:
                    'fixed left-0 top-0 z-20 grid h-full w-full place-items-center bg-custom-backdrop bg-opacity-50 transition-opacity',
                  children: (0, l.jsx)(eG.rk, {
                    onComplete: () => {
                      n()
                        .then(() => {
                          e(e2.HX, {
                            user_id: null == r ? void 0 : r.id,
                            state: 'SUCCESS',
                          });
                        })
                        .catch(e => {
                          console.error(e);
                        });
                    },
                  }),
                }),
              d && x
                ? (0, l.jsx)(l.Fragment, {
                    children:
                      x.length > 0
                        ? (0, l.jsxs)(l.Fragment, {
                            children: [
                              (0, l.jsx)(eJ.Kyp, {}),
                              (0, l.jsxs)('div', {
                                className: (0, es.cn)(
                                  'space-y-7 md:p-7 p-3 bg-custom-background-90 h-full w-full flex flex-col overflow-y-auto',
                                  {
                                    'vertical-scrollbar scrollbar-lg': m >= 768,
                                  }
                                ),
                                children: [
                                  r && (0, l.jsx)(e0, { user: r }),
                                  (0, l.jsx)(eQ, {}),
                                ],
                              }),
                            ],
                          })
                        : (0, l.jsx)(eV.ub, {
                            type: e1.C.WORKSPACE_DASHBOARD,
                            primaryButtonOnClick: () => {
                              t('Dashboard empty state'), s(!0);
                            },
                          }),
                  })
                : (0, l.jsx)('div', {
                    className: 'grid h-full w-full place-items-center',
                    children: (0, l.jsx)(c.$j, {}),
                  }),
            ],
          })
        );
      });
    },
    89821: function (e, t, s) {
      s.d(t, {
        Y: function () {
          return i;
        },
      });
      var l = s(27378);
      let i = () => {
        let [e, t] = (0, l.useState)(new Date());
        return (
          (0, l.useEffect)(() => {
            let e = setInterval(() => {
              t(new Date());
            }, 1e3);
            return () => clearInterval(e);
          }, []),
          { currentTime: e }
        );
      };
    },
  },
]);
