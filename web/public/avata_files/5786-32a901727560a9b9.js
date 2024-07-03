'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5786],
  {
    15786: function (e, s, t) {
      t.d(s, {
        m: function () {
          return b;
        },
        I$: function () {
          return P;
        },
        yY: function () {
          return y;
        },
        nh: function () {
          return W;
        },
        MT: function () {
          return Y;
        },
        lU: function () {
          return D;
        },
        ZE: function () {
          return et;
        },
        A$: function () {
          return E;
        },
        Jr: function () {
          return z;
        },
        hZ: function () {
          return q;
        },
        xC: function () {
          return I;
        },
      });
      var a = t(24246),
        i = t(50649),
        l = t(79894),
        r = t.n(l),
        d = t(94743),
        n = t(71561),
        c = t(23258),
        o = t(67972),
        u = t(92775),
        m = t(74273),
        x = t(10634);
      let h = (0, i.Pi)(e => {
        let { activity: s } = e,
          { currentUser: t } = (0, x.aF)();
        return (0, a.jsx)(a.Fragment, {
          children: s
            ? (0, a.jsx)('ul', {
                role: 'list',
                children: s.results.map(e => {
                  var s, i, l, u, x, h;
                  if ('comment' === e.field)
                    return (0, a.jsx)(
                      'div',
                      {
                        className: 'mt-2',
                        children: (0, a.jsxs)('div', {
                          className: 'relative flex items-start space-x-3',
                          children: [
                            (0, a.jsxs)('div', {
                              className: 'relative px-1',
                              children: [
                                e.field
                                  ? 'restore' === e.new_value &&
                                    (0, a.jsx)(d.Z, {
                                      className:
                                        'h-3.5 w-3.5 text-custom-text-200',
                                    })
                                  : e.actor_detail.avatar &&
                                      '' !== e.actor_detail.avatar
                                    ? (0, a.jsx)('img', {
                                        src: e.actor_detail.avatar,
                                        alt: e.actor_detail.display_name,
                                        height: 30,
                                        width: 30,
                                        className:
                                          'grid h-7 w-7 place-items-center rounded-full border-2 border-white bg-gray-500 text-white',
                                      })
                                    : (0, a.jsx)('div', {
                                        className:
                                          'grid h-7 w-7 place-items-center rounded-full border-2 border-white bg-gray-500 text-white capitalize',
                                        children:
                                          null ===
                                            (s = e.actor_detail.display_name) ||
                                          void 0 === s
                                            ? void 0
                                            : s[0],
                                      }),
                                (0, a.jsx)('span', {
                                  className:
                                    'ring-6 flex h-6 w-6 items-center justify-center rounded-full bg-custom-background-80 text-custom-text-200 ring-white',
                                  children: (0, a.jsx)(n.Z, {
                                    className:
                                      'h-6 w-6 !text-2xl text-custom-text-200',
                                    'aria-hidden': 'true',
                                  }),
                                }),
                              ],
                            }),
                            (0, a.jsxs)('div', {
                              className: 'min-w-0 flex-1',
                              children: [
                                (0, a.jsxs)('div', {
                                  children: [
                                    (0, a.jsx)('div', {
                                      className: 'text-xs',
                                      children: e.actor_detail.is_bot
                                        ? e.actor_detail.first_name + ' Bot'
                                        : e.actor_detail.display_name,
                                    }),
                                    (0, a.jsxs)('p', {
                                      className:
                                        'mt-0.5 text-xs text-custom-text-200',
                                      children: [
                                        'Commented ',
                                        (0, m.KI)(e.created_at),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, a.jsx)('div', {
                                  className: 'issue-comments-section p-0',
                                  children: (0, a.jsx)(o.h, {
                                    initialValue:
                                      (null == e ? void 0 : e.new_value) !== ''
                                        ? null === (i = e.new_value) ||
                                          void 0 === i
                                          ? void 0
                                          : i.toString()
                                        : null === (l = e.old_value) ||
                                            void 0 === l
                                          ? void 0
                                          : l.toString(),
                                    containerClassName:
                                      'text-xs bg-custom-background-100',
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      },
                      e.id
                    );
                  let v =
                    'created' !== e.verb ||
                    [
                      'cycles',
                      'modules',
                      'attachment',
                      'link',
                      'estimate',
                    ].includes(
                      null === (u = e.field) || void 0 === u
                        ? void 0
                        : u.toString()
                    ) ||
                    e.field
                      ? (0, a.jsx)(c.t2, { activity: e, showIssue: !0 })
                      : (0, a.jsxs)('span', {
                          children: [
                            'created ',
                            (0, a.jsx)(c.zE, { activity: e }),
                          ],
                        });
                  if ('field' in e && 'updated_by' !== e.field)
                    return (0, a.jsx)(
                      'li',
                      {
                        children: (0, a.jsx)('div', {
                          className: 'relative pb-1',
                          children: (0, a.jsx)('div', {
                            className: 'relative flex items-start space-x-2',
                            children: (0, a.jsxs)(a.Fragment, {
                              children: [
                                (0, a.jsx)('div', {
                                  children: (0, a.jsx)('div', {
                                    className: 'relative px-1.5 mt-4',
                                    children: (0, a.jsx)('div', {
                                      className: 'mt-1.5',
                                      children: (0, a.jsx)('div', {
                                        className:
                                          'flex h-6 w-6 items-center justify-center',
                                        children: e.field
                                          ? 'restore' === e.new_value
                                            ? (0, a.jsx)(d.Z, {
                                                className:
                                                  'h-5 w-5 text-custom-text-200',
                                              })
                                            : (0, a.jsx)(c.AH, { activity: e })
                                          : e.actor_detail.avatar &&
                                              '' !== e.actor_detail.avatar
                                            ? (0, a.jsx)('img', {
                                                src: e.actor_detail.avatar,
                                                alt: e.actor_detail
                                                  .display_name,
                                                height: 24,
                                                width: 24,
                                                className:
                                                  'h-full w-full rounded-full object-cover',
                                              })
                                            : (0, a.jsx)('div', {
                                                className:
                                                  'grid h-6 w-6 place-items-center rounded-full border-2 border-white bg-gray-700 text-xs text-white capitalize',
                                                children:
                                                  null ===
                                                    (x =
                                                      e.actor_detail
                                                        .display_name) ||
                                                  void 0 === x
                                                    ? void 0
                                                    : x[0],
                                              }),
                                      }),
                                    }),
                                  }),
                                }),
                                (0, a.jsx)('div', {
                                  className:
                                    'min-w-0 flex-1 border-b border-custom-border-100 py-4',
                                  children: (0, a.jsxs)('div', {
                                    className:
                                      'break-words text-sm text-custom-text-200',
                                    children: [
                                      'archived_at' === e.field &&
                                      'restore' !== e.new_value
                                        ? (0, a.jsx)('span', {
                                            className: 'text-gray font-medium',
                                            children: 'Plane',
                                          })
                                        : e.actor_detail.is_bot
                                          ? (0, a.jsxs)('span', {
                                              className:
                                                'text-gray font-medium',
                                              children: [
                                                e.actor_detail.first_name,
                                                ' Bot',
                                              ],
                                            })
                                          : (0, a.jsx)(r(), {
                                              href: '/'
                                                .concat(
                                                  null ===
                                                    (h = e.workspace_detail) ||
                                                    void 0 === h
                                                    ? void 0
                                                    : h.slug,
                                                  '/profile/'
                                                )
                                                .concat(e.actor_detail.id),
                                              className: 'inline',
                                              children: (0, a.jsx)('span', {
                                                className:
                                                  'text-gray font-medium',
                                                children:
                                                  (null == t
                                                    ? void 0
                                                    : t.id) ===
                                                  e.actor_detail.id
                                                    ? 'You'
                                                    : e.actor_detail
                                                        .display_name,
                                              }),
                                            }),
                                      ' ',
                                      (0, a.jsxs)('div', {
                                        className: 'inline gap-1',
                                        children: [
                                          v,
                                          ' ',
                                          (0, a.jsx)('span', {
                                            className:
                                              'flex-shrink-0 whitespace-nowrap',
                                            children: (0, m.KI)(e.created_at),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                      },
                      e.id
                    );
                }),
              })
            : (0, a.jsx)(u.D3, {}),
        });
      });
      var v = t(27378),
        p = t(86677),
        g = t(25449),
        j = t(77235);
      let f = new j.K(),
        b = () => {
          let [e, s] = (0, v.useState)(!1),
            { workspaceSlug: t, userId: i } = (0, p.useRouter)().query,
            l = async () => {
              let e = (0, m.ss)(new Date());
              if (!t || !i || !e) return;
              s(!0);
              let a = await f
                  .downloadProfileActivity(t.toString(), i.toString(), {
                    date: e,
                  })
                  .finally(() => s(!1)),
                l = new Blob([a], { type: 'text/csv' }),
                r = window.URL.createObjectURL(l),
                d = document.createElement('a');
              (d.href = r),
                (d.download = 'profile-activity-'.concat(Date.now(), '.csv')),
                document.body.appendChild(d),
                d.click(),
                window.URL.revokeObjectURL(r),
                document.body.removeChild(d);
            };
          return (0, a.jsx)(g.zx, {
            onClick: l,
            loading: e,
            children: e ? 'Downloading' : "Download today's activity",
          });
        };
      var N = t(30201),
        w = t(82750);
      let _ = new j.K(),
        y = (0, i.Pi)(e => {
          let {
              cursor: s,
              perPage: t,
              updateResultsCount: i,
              updateTotalPages: l,
            } = e,
            { currentUser: h } = (0, x.aF)(),
            { data: p } = (0, N.ZP)((0, w.Rd)({ cursor: s }), () =>
              _.getUserActivity({ cursor: s, per_page: t })
            );
          return (
            (0, v.useEffect)(() => {
              p && (l(p.total_pages), i(p.results.length));
            }, [i, l, p]),
            (0, a.jsx)(a.Fragment, {
              children: p
                ? (0, a.jsx)('ul', {
                    role: 'list',
                    children: p.results.map(e => {
                      var s, t;
                      if ('comment' === e.field)
                        return (0, a.jsx)(
                          'div',
                          {
                            className: 'mt-2',
                            children: (0, a.jsxs)('div', {
                              className: 'relative flex items-start space-x-3',
                              children: [
                                (0, a.jsxs)('div', {
                                  className: 'relative px-1',
                                  children: [
                                    e.field
                                      ? 'restore' === e.new_value &&
                                        (0, a.jsx)(d.Z, {
                                          className:
                                            'h-3.5 w-3.5 text-custom-text-200',
                                        })
                                      : e.actor_detail.avatar &&
                                          '' !== e.actor_detail.avatar
                                        ? (0, a.jsx)('img', {
                                            src: e.actor_detail.avatar,
                                            alt: e.actor_detail.display_name,
                                            height: 30,
                                            width: 30,
                                            className:
                                              'grid h-7 w-7 place-items-center rounded-full border-2 border-white bg-gray-500 text-white',
                                          })
                                        : (0, a.jsx)('div', {
                                            className:
                                              'grid h-7 w-7 place-items-center rounded-full border-2 border-white bg-gray-500 text-white capitalize',
                                            children:
                                              null ===
                                                (s =
                                                  e.actor_detail
                                                    .display_name) ||
                                              void 0 === s
                                                ? void 0
                                                : s[0],
                                          }),
                                    (0, a.jsx)('span', {
                                      className:
                                        'ring-6 flex h-6 w-6 items-center justify-center rounded-full bg-custom-background-80 text-custom-text-200 ring-white',
                                      children: (0, a.jsx)(n.Z, {
                                        className:
                                          'h-6 w-6 !text-2xl text-custom-text-200',
                                        'aria-hidden': 'true',
                                      }),
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)('div', {
                                  className: 'min-w-0 flex-1',
                                  children: [
                                    (0, a.jsxs)('div', {
                                      children: [
                                        (0, a.jsx)('div', {
                                          className: 'text-xs',
                                          children: e.actor_detail.is_bot
                                            ? e.actor_detail.first_name + ' Bot'
                                            : e.actor_detail.display_name,
                                        }),
                                        (0, a.jsxs)('p', {
                                          className:
                                            'mt-0.5 text-xs text-custom-text-200',
                                          children: [
                                            'Commented ',
                                            (0, m.KI)(e.created_at),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, a.jsx)('div', {
                                      className: 'issue-comments-section p-0',
                                      children: (0, a.jsx)(o.h, {
                                        initialValue:
                                          (null == e ? void 0 : e.new_value) !==
                                          ''
                                            ? e.new_value
                                            : e.old_value,
                                        containerClassName:
                                          'text-xs bg-custom-background-100',
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          },
                          e.id
                        );
                      let i =
                        'created' !== e.verb ||
                        [
                          'cycles',
                          'modules',
                          'attachment',
                          'link',
                          'estimate',
                        ].includes(e.field) ||
                        e.field
                          ? (0, a.jsx)(c.t2, { activity: e, showIssue: !0 })
                          : (0, a.jsxs)('span', {
                              children: [
                                'created ',
                                (0, a.jsx)(c.zE, { activity: e }),
                              ],
                            });
                      if ('field' in e && 'updated_by' !== e.field)
                        return (0, a.jsx)(
                          'li',
                          {
                            children: (0, a.jsx)('div', {
                              className: 'relative pb-1',
                              children: (0, a.jsx)('div', {
                                className:
                                  'relative flex items-start space-x-2',
                                children: (0, a.jsxs)(a.Fragment, {
                                  children: [
                                    (0, a.jsx)('div', {
                                      children: (0, a.jsx)('div', {
                                        className: 'relative px-1.5 mt-4',
                                        children: (0, a.jsx)('div', {
                                          className: 'mt-1.5',
                                          children: (0, a.jsx)('div', {
                                            className:
                                              'flex h-6 w-6 items-center justify-center',
                                            children: e.field
                                              ? 'restore' === e.new_value
                                                ? (0, a.jsx)(d.Z, {
                                                    className:
                                                      'h-5 w-5 text-custom-text-200',
                                                  })
                                                : (0, a.jsx)(c.AH, {
                                                    activity: e,
                                                  })
                                              : e.actor_detail.avatar &&
                                                  '' !== e.actor_detail.avatar
                                                ? (0, a.jsx)('img', {
                                                    src: e.actor_detail.avatar,
                                                    alt: e.actor_detail
                                                      .display_name,
                                                    height: 24,
                                                    width: 24,
                                                    className:
                                                      'h-full w-full rounded-full object-cover',
                                                  })
                                                : (0, a.jsx)('div', {
                                                    className:
                                                      'grid h-6 w-6 place-items-center rounded-full border-2 border-white bg-gray-700 text-xs text-white capitalize',
                                                    children:
                                                      null ===
                                                        (t =
                                                          e.actor_detail
                                                            .display_name) ||
                                                      void 0 === t
                                                        ? void 0
                                                        : t[0],
                                                  }),
                                          }),
                                        }),
                                      }),
                                    }),
                                    (0, a.jsx)('div', {
                                      className:
                                        'min-w-0 flex-1 border-b border-custom-border-100 py-4',
                                      children: (0, a.jsxs)('div', {
                                        className:
                                          'break-words text-sm text-custom-text-200',
                                        children: [
                                          'archived_at' === e.field &&
                                          'restore' !== e.new_value
                                            ? (0, a.jsx)('span', {
                                                className:
                                                  'text-gray font-medium',
                                                children: 'Plane',
                                              })
                                            : e.actor_detail.is_bot
                                              ? (0, a.jsxs)('span', {
                                                  className:
                                                    'text-gray font-medium',
                                                  children: [
                                                    e.actor_detail.first_name,
                                                    ' Bot',
                                                  ],
                                                })
                                              : (0, a.jsx)(r(), {
                                                  href: '/'
                                                    .concat(
                                                      e.workspace_detail.slug,
                                                      '/profile/'
                                                    )
                                                    .concat(e.actor_detail.id),
                                                  className: 'inline',
                                                  children: (0, a.jsx)('span', {
                                                    className:
                                                      'text-gray font-medium',
                                                    children:
                                                      (null == h
                                                        ? void 0
                                                        : h.id) ===
                                                      e.actor_detail.id
                                                        ? 'You'
                                                        : e.actor_detail
                                                            .display_name,
                                                  }),
                                                }),
                                          ' ',
                                          (0, a.jsxs)('div', {
                                            className: 'inline gap-1',
                                            children: [
                                              i,
                                              ' ',
                                              (0, a.jsx)('span', {
                                                className:
                                                  'flex-shrink-0 whitespace-nowrap',
                                                children: (0, m.KI)(
                                                  e.created_at
                                                ),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          },
                          e.id
                        );
                    }),
                  })
                : (0, a.jsx)(u.D3, {}),
            })
          );
        }),
        k = new j.K(),
        I = e => {
          let {
              cursor: s,
              perPage: t,
              updateResultsCount: i,
              updateTotalPages: l,
            } = e,
            { workspaceSlug: r, userId: d } = (0, p.useRouter)().query,
            { data: n } = (0, N.ZP)(
              r && d
                ? (0, w.zB)(r.toString(), d.toString(), { cursor: s })
                : null,
              r && d
                ? () =>
                    k.getUserProfileActivity(r.toString(), d.toString(), {
                      cursor: s,
                      per_page: t,
                    })
                : null
            );
          return (
            (0, v.useEffect)(() => {
              n && (l(n.total_pages), i(n.results.length));
            }, [i, l, n]),
            (0, a.jsx)(h, { activity: n })
          );
        };
      var S = {
        src: '/_next/static/media/recent_activity.5b4a9552.svg',
        height: 28,
        width: 28,
        blurWidth: 0,
        blurHeight: 0,
      };
      let C = new j.K(),
        P = (0, i.Pi)(() => {
          let { workspaceSlug: e, userId: s } = (0, p.useRouter)().query,
            { currentUser: t } = (0, x.aF)(),
            { data: i } = (0, N.ZP)(
              e && s ? (0, w.zB)(e.toString(), s.toString(), {}) : null,
              e && s
                ? () =>
                    C.getUserProfileActivity(e.toString(), s.toString(), {
                      per_page: 10,
                    })
                : null
            );
          return (0, a.jsxs)('div', {
            className: 'space-y-2',
            children: [
              (0, a.jsx)('h3', {
                className: 'text-lg font-medium',
                children: 'Recent activity',
              }),
              (0, a.jsx)('div', {
                className: 'rounded border border-custom-border-100 p-6',
                children: i
                  ? i.results.length > 0
                    ? (0, a.jsx)('div', {
                        className: 'space-y-5',
                        children: i.results.map(e => {
                          var s, i, l, r, d, n, o, u;
                          return (0, a.jsxs)(
                            'div',
                            {
                              className: 'flex gap-3',
                              children: [
                                (0, a.jsx)('div', {
                                  className: 'flex-shrink-0',
                                  children:
                                    (null === (s = e.actor_detail) ||
                                    void 0 === s
                                      ? void 0
                                      : s.avatar) &&
                                    (null === (i = e.actor_detail) ||
                                    void 0 === i
                                      ? void 0
                                      : i.avatar) !== ''
                                      ? (0, a.jsx)('img', {
                                          src:
                                            null === (l = e.actor_detail) ||
                                            void 0 === l
                                              ? void 0
                                              : l.avatar,
                                          alt:
                                            null === (r = e.actor_detail) ||
                                            void 0 === r
                                              ? void 0
                                              : r.display_name,
                                          height: 24,
                                          width: 24,
                                          className: 'rounded',
                                        })
                                      : (0, a.jsx)('div', {
                                          className:
                                            'grid h-6 w-6 place-items-center rounded border-2 bg-gray-700 text-xs text-white',
                                          children:
                                            null === (n = e.actor_detail) ||
                                            void 0 === n
                                              ? void 0
                                              : null === (d = n.display_name) ||
                                                  void 0 === d
                                                ? void 0
                                                : d.charAt(0),
                                        }),
                                }),
                                (0, a.jsxs)('div', {
                                  className: '-mt-1 w-4/5 break-words',
                                  children: [
                                    (0, a.jsxs)('p', {
                                      className:
                                        'inline text-sm text-custom-text-200',
                                      children: [
                                        (0, a.jsxs)('span', {
                                          className:
                                            'font-medium text-custom-text-100',
                                          children: [
                                            (null == t ? void 0 : t.id) ===
                                            (null === (o = e.actor_detail) ||
                                            void 0 === o
                                              ? void 0
                                              : o.id)
                                              ? 'You'
                                              : null === (u = e.actor_detail) ||
                                                  void 0 === u
                                                ? void 0
                                                : u.display_name,
                                            ' ',
                                          ],
                                        }),
                                        e.field
                                          ? (0, a.jsx)(c.t2, {
                                              activity: e,
                                              showIssue: !0,
                                            })
                                          : (0, a.jsxs)('span', {
                                              children: [
                                                'created ',
                                                (0, a.jsx)(c.zE, {
                                                  activity: e,
                                                }),
                                              ],
                                            }),
                                      ],
                                    }),
                                    (0, a.jsx)('p', {
                                      className:
                                        'text-xs text-custom-text-200 whitespace-nowrap ',
                                      children: (0, m.KI)(e.created_at),
                                    }),
                                  ],
                                }),
                              ],
                            },
                            e.id
                          );
                        }),
                      })
                    : (0, a.jsx)(u.es, {
                        title: 'No Data yet',
                        description:
                          'We couldn’t find data. Kindly view your inputs',
                        image: S,
                      })
                  : (0, a.jsxs)(g.aN, {
                      className: 'space-y-5',
                      children: [
                        (0, a.jsx)(g.aN.Item, { height: '40px' }),
                        (0, a.jsx)(g.aN.Item, { height: '40px' }),
                        (0, a.jsx)(g.aN.Item, { height: '40px' }),
                        (0, a.jsx)(g.aN.Item, { height: '40px' }),
                        (0, a.jsx)(g.aN.Item, { height: '40px' }),
                      ],
                    }),
              }),
            ],
          });
        });
      var F = t(10712),
        R = t(92477);
      let D = e => {
        let { userProfile: s } = e;
        return (0, a.jsxs)('div', {
          className: 'flex flex-col space-y-2',
          children: [
            (0, a.jsx)('h3', {
              className: 'text-lg font-medium',
              children: 'Issues by Priority',
            }),
            s
              ? (0, a.jsx)('div', {
                  className:
                    'flex-grow rounded border border-custom-border-100',
                  children:
                    s.priority_distribution.length > 0
                      ? (0, a.jsx)(u.b8, {
                          data: s.priority_distribution.map(e => {
                            var s;
                            return {
                              priority: (0, F.fm)(
                                null !== (s = e.priority) && void 0 !== s
                                  ? s
                                  : 'None'
                              ),
                              value: e.priority_count,
                            };
                          }),
                          height: '300px',
                          indexBy: 'priority',
                          keys: ['value'],
                          borderRadius: 4,
                          padding: 0.7,
                          customYAxisTickValues: s.priority_distribution.map(
                            e => e.priority_count
                          ),
                          tooltip: e => {
                            var s;
                            return (0, a.jsxs)('div', {
                              className:
                                'flex items-center gap-2 rounded-md border border-custom-border-200 bg-custom-background-80 p-2 text-xs',
                              children: [
                                (0, a.jsx)('span', {
                                  className: 'h-3 w-3 rounded',
                                  style: {
                                    backgroundColor:
                                      null !==
                                        (s = null == e ? void 0 : e.color) &&
                                      void 0 !== s
                                        ? s
                                        : 'rgb(var(--color-primary-100))',
                                  },
                                }),
                                (0, a.jsxs)('span', {
                                  className: 'font-medium text-custom-text-200',
                                  children: [e.data.priority, ':'],
                                }),
                                (0, a.jsx)('span', { children: e.value }),
                              ],
                            });
                          },
                          colors: e =>
                            'Urgent' === e.data.priority
                              ? '#991b1b'
                              : 'High' === e.data.priority
                                ? '#ef4444'
                                : 'Medium' === e.data.priority
                                  ? '#f59e0b'
                                  : 'Low' === e.data.priority
                                    ? '#16a34a'
                                    : '#e5e5e5',
                          theme: {
                            axis: {
                              domain: { line: { stroke: 'transparent' } },
                            },
                            grid: { line: { stroke: 'transparent' } },
                          },
                        })
                      : (0, a.jsx)('div', {
                          className: 'flex-grow p-7',
                          children: (0, a.jsx)(u.es, {
                            title: 'No Data yet',
                            description:
                              'Create issues to view the them by priority in the graph for better analysis.',
                            image: R.Z,
                          }),
                        }),
                })
              : (0, a.jsx)('div', {
                  className: 'grid place-items-center p-7',
                  children: (0, a.jsxs)(g.aN, {
                    className: 'flex items-end gap-12',
                    children: [
                      (0, a.jsx)(g.aN.Item, { width: '30px', height: '200px' }),
                      (0, a.jsx)(g.aN.Item, { width: '30px', height: '150px' }),
                      (0, a.jsx)(g.aN.Item, { width: '30px', height: '250px' }),
                      (0, a.jsx)(g.aN.Item, { width: '30px', height: '150px' }),
                      (0, a.jsx)(g.aN.Item, { width: '30px', height: '100px' }),
                    ],
                  }),
                }),
          ],
        });
      };
      var L = t(52934),
        Z = {
          src: '/_next/static/media/state_graph.06b4f8b6.svg',
          height: 34,
          width: 34,
          blurWidth: 0,
          blurHeight: 0,
        };
      let E = e => {
        var s;
        let { stateDistribution: t, userProfile: i } = e;
        return i
          ? (0, a.jsxs)('div', {
              className: 'flex flex-col space-y-2',
              children: [
                (0, a.jsx)('h3', {
                  className: 'text-lg font-medium',
                  children: 'Issues by state',
                }),
                (0, a.jsx)('div', {
                  className:
                    'flex-grow rounded border border-custom-border-100 p-7',
                  children:
                    i.state_distribution.length > 0
                      ? (0, a.jsxs)('div', {
                          className: 'grid grid-cols-1 gap-x-6 md:grid-cols-2',
                          children: [
                            (0, a.jsx)('div', {
                              children: (0, a.jsx)(u.HD, {
                                data:
                                  null !==
                                    (s = i.state_distribution.map(e => {
                                      var s, t;
                                      return {
                                        id: e.state_group,
                                        label: e.state_group,
                                        value: e.state_count,
                                        color:
                                          null !==
                                            (t =
                                              null ===
                                                (s = L.q[e.state_group]) ||
                                              void 0 === s
                                                ? void 0
                                                : s.color) && void 0 !== t
                                            ? t
                                            : 'rgb(var(--color-primary-100))',
                                      };
                                    })) && void 0 !== s
                                    ? s
                                    : [],
                                height: '250px',
                                innerRadius: 0.6,
                                cornerRadius: 5,
                                padAngle: 2,
                                enableArcLabels: !0,
                                arcLabelsTextColor: '#000000',
                                enableArcLinkLabels: !1,
                                activeInnerRadiusOffset: 5,
                                colors: e => {
                                  var s;
                                  return null == e
                                    ? void 0
                                    : null === (s = e.data) || void 0 === s
                                      ? void 0
                                      : s.color;
                                },
                                tooltip: e =>
                                  (0, a.jsxs)('div', {
                                    className:
                                      'flex items-center gap-2 rounded-md border border-custom-border-200 bg-custom-background-90 p-2 text-xs',
                                    children: [
                                      (0, a.jsxs)('span', {
                                        className:
                                          'capitalize text-custom-text-200',
                                        children: [e.datum.label, ' issues:'],
                                      }),
                                      ' ',
                                      e.datum.value,
                                    ],
                                  }),
                                margin: {
                                  top: 32,
                                  right: 0,
                                  bottom: 32,
                                  left: 0,
                                },
                              }),
                            }),
                            (0, a.jsx)('div', {
                              className: 'flex items-center',
                              children: (0, a.jsx)('div', {
                                className: 'w-full space-y-4',
                                children: t.map(e => {
                                  var s, t;
                                  return (0, a.jsxs)(
                                    'div',
                                    {
                                      className:
                                        'flex items-center justify-between gap-2 text-xs',
                                      children: [
                                        (0, a.jsxs)('div', {
                                          className:
                                            'flex items-center gap-1.5',
                                          children: [
                                            (0, a.jsx)('div', {
                                              className:
                                                'h-2.5 w-2.5 rounded-sm',
                                              style: {
                                                backgroundColor:
                                                  null !==
                                                    (t =
                                                      null ===
                                                        (s =
                                                          L.q[e.state_group]) ||
                                                      void 0 === s
                                                        ? void 0
                                                        : s.color) &&
                                                  void 0 !== t
                                                    ? t
                                                    : 'rgb(var(--color-primary-100))',
                                              },
                                            }),
                                            (0, a.jsx)('div', {
                                              className: 'whitespace-nowrap',
                                              children:
                                                L.q[e.state_group].label,
                                            }),
                                          ],
                                        }),
                                        (0, a.jsx)('div', {
                                          children: e.state_count,
                                        }),
                                      ],
                                    },
                                    e.state_group
                                  );
                                }),
                              }),
                            }),
                          ],
                        })
                      : (0, a.jsx)(u.es, {
                          title: 'No Data yet',
                          description:
                            'Create issues to view the them by states in the graph for better analysis.',
                          image: Z,
                        }),
                }),
              ],
            })
          : null;
      };
      var A = t(75437);
      let z = e => {
          var s, t, i;
          let { userProfile: l } = e,
            { workspaceSlug: d, userId: n } = (0, p.useRouter)().query,
            c = [
              {
                icon: g.x2,
                route: 'created',
                title: 'Issues created',
                value:
                  null !== (s = null == l ? void 0 : l.created_issues) &&
                  void 0 !== s
                    ? s
                    : '...',
              },
              {
                icon: A.Z,
                route: 'assigned',
                title: 'Issues assigned',
                value:
                  null !== (t = null == l ? void 0 : l.assigned_issues) &&
                  void 0 !== t
                    ? t
                    : '...',
              },
              {
                icon: g.uK,
                route: 'subscribed',
                title: 'Issues subscribed',
                value:
                  null !== (i = null == l ? void 0 : l.subscribed_issues) &&
                  void 0 !== i
                    ? i
                    : '...',
              },
            ];
          return (0, a.jsxs)('div', {
            className: 'space-y-2',
            children: [
              (0, a.jsx)('h3', {
                className: 'text-lg font-medium',
                children: 'Overview',
              }),
              l
                ? (0, a.jsx)('div', {
                    className:
                      'grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3',
                    children: c.map(e =>
                      (0, a.jsx)(
                        r(),
                        {
                          href: '/'
                            .concat(d, '/profile/')
                            .concat(n, '/')
                            .concat(e.route),
                          children: (0, a.jsxs)('span', {
                            className:
                              'flex items-center gap-3 whitespace-nowrap rounded border border-custom-border-100 p-4',
                            children: [
                              (0, a.jsx)('div', {
                                className:
                                  'grid h-11 w-11 place-items-center rounded bg-custom-background-90',
                                children: (0, a.jsx)(e.icon, {
                                  className: 'h-5 w-5',
                                }),
                              }),
                              (0, a.jsxs)('div', {
                                className: 'space-y-1',
                                children: [
                                  (0, a.jsx)('p', {
                                    className: 'text-sm text-custom-text-400',
                                    children: e.title,
                                  }),
                                  (0, a.jsx)('p', {
                                    className: 'text-xl font-semibold',
                                    children: e.value,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        },
                        e.route
                      )
                    ),
                  })
                : (0, a.jsxs)(g.aN, {
                    className:
                      'grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3',
                    children: [
                      (0, a.jsx)(g.aN.Item, { height: '80px' }),
                      (0, a.jsx)(g.aN.Item, { height: '80px' }),
                      (0, a.jsx)(g.aN.Item, { height: '80px' }),
                    ],
                  }),
            ],
          });
        },
        q = e => {
          let { stateDistribution: s } = e;
          return (0, a.jsxs)('div', {
            className: 'space-y-2',
            children: [
              (0, a.jsx)('h3', {
                className: 'text-lg font-medium',
                children: 'Workload',
              }),
              (0, a.jsx)('div', {
                className:
                  'grid grid-cols-1 justify-stretch gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
                children: s.map(e =>
                  (0, a.jsx)(
                    'div',
                    {
                      children: (0, a.jsxs)('a', {
                        className:
                          'flex gap-2 whitespace-nowrap rounded border border-custom-border-100 p-4',
                        children: [
                          (0, a.jsx)('div', {
                            className: 'h-3 w-3 rounded-sm',
                            style: {
                              backgroundColor: L.q[e.state_group].color,
                            },
                          }),
                          (0, a.jsxs)('div', {
                            className: '-mt-1 space-y-1',
                            children: [
                              (0, a.jsx)('p', {
                                className: 'text-sm text-custom-text-400',
                                children:
                                  'unstarted' === e.state_group
                                    ? 'Not started'
                                    : 'started' === e.state_group
                                      ? 'Working on'
                                      : L.q[e.state_group].label,
                              }),
                              (0, a.jsx)('p', {
                                className: 'text-xl font-semibold',
                                children: e.state_count,
                              }),
                            ],
                          }),
                        ],
                      }),
                    },
                    e.state_group
                  )
                ),
              }),
            ],
          });
        };
      var U = t(38313);
      let Y = e => {
        let { isAuthorized: s, showProfileIssuesFilter: t } = e,
          i = (0, p.useRouter)(),
          { workspaceSlug: l, userId: d } = i.query,
          n = s ? [...U.S2, ...U.f9] : U.S2;
        return (0, a.jsxs)('div', {
          className:
            'sticky -top-0.5 z-10 hidden md:flex items-center justify-between gap-4 border-b border-custom-border-300 bg-custom-background-100 px-4 sm:px-5 md:static',
          children: [
            (0, a.jsx)('div', {
              className: 'flex items-center overflow-x-scroll',
              children: n.map(e =>
                (0, a.jsx)(
                  r(),
                  {
                    href: '/'
                      .concat(l, '/profile/')
                      .concat(d, '/')
                      .concat(e.route),
                    children: (0, a.jsx)('span', {
                      className:
                        'flex whitespace-nowrap border-b-2 p-4 text-sm font-medium outline-none '.concat(
                          i.pathname === e.selected
                            ? 'border-custom-primary-100 text-custom-primary-100'
                            : 'border-transparent'
                        ),
                      children: e.label,
                    }),
                  },
                  e.route
                )
              ),
            }),
            t && (0, a.jsx)(W, {}),
          ],
        });
      };
      var K = t(43659),
        B = t(68114),
        T = t(93997),
        O = t(1422);
      let W = (0, K.Pi)(() => {
        var e, s, t, i, l;
        let { workspaceSlug: r, userId: d } = (0, p.useRouter)().query,
          {
            issuesFilter: { issueFilters: n, updateFilters: c },
          } = (0, x.gk)(T.rS.PROFILE),
          { workspaceLabels: o } = (0, x.NP)(),
          u =
            null == n
              ? void 0
              : null === (e = n.displayFilters) || void 0 === e
                ? void 0
                : e.layout,
          m = (0, v.useCallback)(
            e => {
              r &&
                d &&
                c(
                  r.toString(),
                  void 0,
                  T.gc.DISPLAY_FILTERS,
                  { layout: e },
                  d.toString()
                );
            },
            [r, c, d]
          ),
          h = (0, v.useCallback)(
            (e, s) => {
              var t, a, i, l;
              if (!r || !d) return;
              let o =
                null !==
                  (a =
                    null == n
                      ? void 0
                      : null === (t = n.filters) || void 0 === t
                        ? void 0
                        : t[e]) && void 0 !== a
                  ? a
                  : [];
              Array.isArray(s)
                ? s.forEach(e => {
                    o.includes(e) ? o.splice(o.indexOf(e), 1) : o.push(e);
                  })
                : (
                      null == n
                        ? void 0
                        : null === (l = n.filters) || void 0 === l
                          ? void 0
                          : null === (i = l[e]) || void 0 === i
                            ? void 0
                            : i.includes(s)
                    )
                  ? o.splice(o.indexOf(s), 1)
                  : o.push(s),
                c(r.toString(), void 0, T.gc.FILTERS, { [e]: o }, d.toString());
            },
            [r, n, c, d]
          ),
          g = (0, v.useCallback)(
            e => {
              r &&
                d &&
                c(r.toString(), void 0, T.gc.DISPLAY_FILTERS, e, d.toString());
            },
            [r, c, d]
          ),
          j = (0, v.useCallback)(
            e => {
              r &&
                d &&
                c(
                  r.toString(),
                  void 0,
                  T.gc.DISPLAY_PROPERTIES,
                  e,
                  d.toString()
                );
            },
            [r, c, d]
          ),
          f =
            0 !==
            (0, O.w)(
              null !== (s = null == n ? void 0 : n.filters) && void 0 !== s
                ? s
                : {}
            );
        return (0, a.jsxs)('div', {
          className: 'relative flex items-center justify-end gap-2',
          children: [
            (0, a.jsx)(B.ZxZ, {
              layouts: ['list', 'kanban'],
              onChange: e => m(e),
              selectedLayout: u,
            }),
            (0, a.jsx)(B.lqY, {
              title: 'Filters',
              placement: 'bottom-end',
              isFiltersApplied: f,
              children: (0, a.jsx)(B.dGX, {
                layoutDisplayFiltersOptions: u
                  ? T.BI.profile_issues[u]
                  : void 0,
                filters:
                  null !== (t = null == n ? void 0 : n.filters) && void 0 !== t
                    ? t
                    : {},
                handleFiltersUpdate: h,
                states: void 0,
                labels: o,
                memberIds: void 0,
              }),
            }),
            (0, a.jsx)(B.lqY, {
              title: 'Display',
              placement: 'bottom-end',
              children: (0, a.jsx)(B.hvF, {
                layoutDisplayFiltersOptions: u
                  ? T.BI.profile_issues[u]
                  : void 0,
                displayFilters:
                  null !== (i = null == n ? void 0 : n.displayFilters) &&
                  void 0 !== i
                    ? i
                    : {},
                handleDisplayFiltersUpdate: g,
                displayProperties:
                  null !== (l = null == n ? void 0 : n.displayProperties) &&
                  void 0 !== l
                    ? l
                    : {},
                handleDisplayPropertiesUpdate: j,
              }),
            }),
          ],
        });
      });
      var H = t(62468),
        M = t(65709),
        V = t(49505),
        J = t(30335),
        X = t(91256),
        $ = t(42683),
        G = t(18894),
        Q = t(89821);
      let ee = e => {
          let { timeZone: s } = e,
            { currentTime: t } = (0, Q.Y)(),
            i = new Intl.DateTimeFormat('en-US', {
              timeZone: s,
              hour12: !1,
              hour: '2-digit',
              minute: '2-digit',
            }).format(t);
          return (0, a.jsxs)('span', {
            children: [
              i,
              ' ',
              (0, a.jsx)('span', {
                className: 'text-custom-text-200',
                children: s,
              }),
            ],
          });
        },
        es = new j.K(),
        et = (0, K.Pi)(() => {
          var e, s, t, i, l, d, n, c, o, u, h, j, f, b;
          let _ = (0, v.useRef)(null),
            { workspaceSlug: y, userId: k } = (0, p.useRouter)().query,
            { currentUser: I } = (0, x.aF)(),
            { theme: S } = (0, x.IX)(),
            { getProjectById: C } = (0, x.PY)(),
            { isMobile: P } = (0, G.L)(),
            { data: F } = (0, N.ZP)(
              y && k ? (0, w.MM)(y.toString(), k.toString()) : null,
              y && k
                ? () =>
                    es.getUserProfileProjectsSegregation(
                      y.toString(),
                      k.toString()
                    )
                : null
            );
          (0, $.Z)(_, () => {
            !1 === S.profileSidebarCollapsed &&
              window.innerWidth < 768 &&
              S.toggleProfileSidebar();
          });
          let R = [
            {
              label: 'Joined on',
              value: (0, m.ot)(
                null !== (f = null == F ? void 0 : F.user_data.date_joined) &&
                  void 0 !== f
                  ? f
                  : ''
              ),
            },
            {
              label: 'Timezone',
              value: (0, a.jsx)(ee, {
                timeZone: null == F ? void 0 : F.user_data.user_timezone,
              }),
            },
          ];
          return (
            (0, v.useEffect)(() => {
              let e = () => {
                window && window.innerWidth < 768 && S.toggleProfileSidebar(!0),
                  window &&
                    S.profileSidebarCollapsed &&
                    window.innerWidth >= 768 &&
                    S.toggleProfileSidebar(!1);
              };
              return (
                window.addEventListener('resize', e),
                e(),
                () => window.removeEventListener('resize', e)
              );
            }, [S]),
            (0, a.jsx)('div', {
              className:
                'vertical-scrollbar scrollbar-md fixed z-[5] h-full w-full flex-shrink-0 overflow-hidden overflow-y-auto border-l border-custom-border-100 bg-custom-sidebar-background-100 shadow-custom-shadow-sm transition-all md:relative md:w-[300px]',
              style: S.profileSidebarCollapsed
                ? {
                    marginLeft: ''.concat(
                      (null === (e = window) || void 0 === e
                        ? void 0
                        : e.innerWidth) || 0,
                      'px'
                    ),
                  }
                : {},
              children: F
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsxs)('div', {
                        className: 'relative h-32',
                        children: [
                          (null == I ? void 0 : I.id) === k &&
                            (0, a.jsx)('div', {
                              className:
                                'absolute right-3.5 top-3.5 grid h-5 w-5 place-items-center rounded bg-white',
                              children: (0, a.jsx)(r(), {
                                href: '/profile',
                                children: (0, a.jsx)('span', {
                                  className:
                                    'grid place-items-center text-black',
                                  children: (0, a.jsx)(H.Z, {
                                    className: 'h-3 w-3',
                                  }),
                                }),
                              }),
                            }),
                          (0, a.jsx)('img', {
                            src:
                              null !==
                                (b =
                                  null === (s = F.user_data) || void 0 === s
                                    ? void 0
                                    : s.cover_image) && void 0 !== b
                                ? b
                                : 'https://images.unsplash.com/photo-1506383796573-caf02b4a79ab',
                            alt:
                              null === (t = F.user_data) || void 0 === t
                                ? void 0
                                : t.display_name,
                            className: 'h-32 w-full object-cover',
                          }),
                          (0, a.jsx)('div', {
                            className:
                              'absolute -bottom-[26px] left-5 h-[52px] w-[52px] rounded',
                            children:
                              (null === (i = F.user_data) || void 0 === i
                                ? void 0
                                : i.avatar) &&
                              (null === (l = F.user_data) || void 0 === l
                                ? void 0
                                : l.avatar) !== ''
                                ? (0, a.jsx)('img', {
                                    src:
                                      null === (d = F.user_data) || void 0 === d
                                        ? void 0
                                        : d.avatar,
                                    alt:
                                      null === (n = F.user_data) || void 0 === n
                                        ? void 0
                                        : n.display_name,
                                    className:
                                      'h-full w-full rounded object-cover',
                                  })
                                : (0, a.jsx)('div', {
                                    className:
                                      'flex h-[52px] w-[52px] items-center justify-center rounded bg-custom-background-90 capitalize text-custom-text-100',
                                    children:
                                      null === (o = F.user_data) || void 0 === o
                                        ? void 0
                                        : null === (c = o.first_name) ||
                                            void 0 === c
                                          ? void 0
                                          : c[0],
                                  }),
                          }),
                        ],
                      }),
                      (0, a.jsxs)('div', {
                        className: 'px-5',
                        children: [
                          (0, a.jsxs)('div', {
                            className: 'mt-[38px]',
                            children: [
                              (0, a.jsxs)('h4', {
                                className: 'text-lg font-semibold',
                                children: [
                                  null === (u = F.user_data) || void 0 === u
                                    ? void 0
                                    : u.first_name,
                                  ' ',
                                  null === (h = F.user_data) || void 0 === h
                                    ? void 0
                                    : h.last_name,
                                ],
                              }),
                              (0, a.jsxs)('h6', {
                                className: 'text-sm text-custom-text-200',
                                children: [
                                  '(',
                                  null === (j = F.user_data) || void 0 === j
                                    ? void 0
                                    : j.display_name,
                                  ')',
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsx)('div', {
                            className: 'mt-6 space-y-5',
                            children: R.map(e =>
                              (0, a.jsxs)(
                                'div',
                                {
                                  className: 'flex items-center gap-4 text-sm',
                                  children: [
                                    (0, a.jsx)('div', {
                                      className:
                                        'w-2/5 flex-shrink-0 text-custom-text-200',
                                      children: e.label,
                                    }),
                                    (0, a.jsx)('div', {
                                      className:
                                        'w-3/5 break-words font-medium',
                                      children: e.value,
                                    }),
                                  ],
                                },
                                e.label
                              )
                            ),
                          }),
                          (0, a.jsx)('div', {
                            className: 'mt-9 divide-y divide-custom-border-100',
                            children: F.project_data.map((e, s) => {
                              let t = C(e.id),
                                i =
                                  e.created_issues +
                                  e.assigned_issues +
                                  e.pending_issues +
                                  e.completed_issues,
                                l =
                                  0 === e.assigned_issues
                                    ? 0
                                    : Math.round(
                                        (e.completed_issues /
                                          e.assigned_issues) *
                                          100
                                      );
                              return t
                                ? (0, a.jsx)(
                                    V.p,
                                    {
                                      as: 'div',
                                      className: ''.concat(
                                        0 === s ? 'pb-3' : 'py-3'
                                      ),
                                      children: s => {
                                        let { open: r } = s;
                                        return (0, a.jsxs)('div', {
                                          className: 'w-full',
                                          children: [
                                            (0, a.jsxs)(V.p.Button, {
                                              className:
                                                'flex w-full items-center justify-between gap-2',
                                              children: [
                                                (0, a.jsxs)('div', {
                                                  className:
                                                    'flex w-3/4 items-center gap-2',
                                                  children: [
                                                    (0, a.jsx)('span', {
                                                      className:
                                                        'grid place-items-center flex-shrink-0 h-7 w-7',
                                                      children: (0, a.jsx)(
                                                        X.h0,
                                                        { logo: t.logo_props }
                                                      ),
                                                    }),
                                                    (0, a.jsx)('div', {
                                                      className:
                                                        'truncate break-words text-sm font-medium',
                                                      children: t.name,
                                                    }),
                                                  ],
                                                }),
                                                (0, a.jsxs)('div', {
                                                  className:
                                                    'flex flex-shrink-0 items-center gap-2',
                                                  children: [
                                                    e.assigned_issues > 0 &&
                                                      (0, a.jsx)(g.u, {
                                                        tooltipContent:
                                                          'Completion percentage',
                                                        position: 'left',
                                                        isMobile: P,
                                                        children: (0, a.jsxs)(
                                                          'div',
                                                          {
                                                            className:
                                                              'rounded px-1 py-0.5 text-xs font-medium '.concat(
                                                                l <= 35
                                                                  ? 'bg-red-500/10 text-red-500'
                                                                  : l <= 70
                                                                    ? 'bg-yellow-500/10 text-yellow-500'
                                                                    : 'bg-green-500/10 text-green-500'
                                                              ),
                                                            children: [l, '%'],
                                                          }
                                                        ),
                                                      }),
                                                    (0, a.jsx)(M.Z, {
                                                      className: 'h-4 w-4',
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, a.jsx)(J.u, {
                                              show: r,
                                              enter:
                                                'transition duration-100 ease-out',
                                              enterFrom: 'transform opacity-0',
                                              enterTo: 'transform opacity-100',
                                              leave:
                                                'transition duration-75 ease-out',
                                              leaveFrom:
                                                'transform opacity-100',
                                              leaveTo: 'transform opacity-0',
                                              children: (0, a.jsxs)(V.p.Panel, {
                                                className: 'mt-5 pl-9',
                                                children: [
                                                  i > 0 &&
                                                    (0, a.jsxs)('div', {
                                                      className:
                                                        'flex items-center gap-0.5',
                                                      children: [
                                                        (0, a.jsx)('div', {
                                                          className:
                                                            'h-1 rounded',
                                                          style: {
                                                            backgroundColor:
                                                              '#203b80',
                                                            width: ''.concat(
                                                              (e.created_issues /
                                                                i) *
                                                                100,
                                                              '%'
                                                            ),
                                                          },
                                                        }),
                                                        (0, a.jsx)('div', {
                                                          className:
                                                            'h-1 rounded',
                                                          style: {
                                                            backgroundColor:
                                                              '#3f76ff',
                                                            width: ''.concat(
                                                              (e.assigned_issues /
                                                                i) *
                                                                100,
                                                              '%'
                                                            ),
                                                          },
                                                        }),
                                                        (0, a.jsx)('div', {
                                                          className:
                                                            'h-1 rounded',
                                                          style: {
                                                            backgroundColor:
                                                              '#f59e0b',
                                                            width: ''.concat(
                                                              (e.pending_issues /
                                                                i) *
                                                                100,
                                                              '%'
                                                            ),
                                                          },
                                                        }),
                                                        (0, a.jsx)('div', {
                                                          className:
                                                            'h-1 rounded',
                                                          style: {
                                                            backgroundColor:
                                                              '#16a34a',
                                                            width: ''.concat(
                                                              (e.completed_issues /
                                                                i) *
                                                                100,
                                                              '%'
                                                            ),
                                                          },
                                                        }),
                                                      ],
                                                    }),
                                                  (0, a.jsxs)('div', {
                                                    className:
                                                      'mt-7 space-y-5 text-sm text-custom-text-200',
                                                    children: [
                                                      (0, a.jsxs)('div', {
                                                        className:
                                                          'flex items-center justify-between gap-2',
                                                        children: [
                                                          (0, a.jsxs)('div', {
                                                            className:
                                                              'flex items-center gap-2',
                                                            children: [
                                                              (0, a.jsx)(
                                                                'div',
                                                                {
                                                                  className:
                                                                    'h-2.5 w-2.5 rounded-sm bg-[#203b80]',
                                                                }
                                                              ),
                                                              'Created',
                                                            ],
                                                          }),
                                                          (0, a.jsxs)('div', {
                                                            className:
                                                              'font-medium',
                                                            children: [
                                                              e.created_issues,
                                                              ' Issues',
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                      (0, a.jsxs)('div', {
                                                        className:
                                                          'flex items-center justify-between gap-2',
                                                        children: [
                                                          (0, a.jsxs)('div', {
                                                            className:
                                                              'flex items-center gap-2',
                                                            children: [
                                                              (0, a.jsx)(
                                                                'div',
                                                                {
                                                                  className:
                                                                    'h-2.5 w-2.5 rounded-sm bg-[#3f76ff]',
                                                                }
                                                              ),
                                                              'Assigned',
                                                            ],
                                                          }),
                                                          (0, a.jsxs)('div', {
                                                            className:
                                                              'font-medium',
                                                            children: [
                                                              e.assigned_issues,
                                                              ' Issues',
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                      (0, a.jsxs)('div', {
                                                        className:
                                                          'flex items-center justify-between gap-2',
                                                        children: [
                                                          (0, a.jsxs)('div', {
                                                            className:
                                                              'flex items-center gap-2',
                                                            children: [
                                                              (0, a.jsx)(
                                                                'div',
                                                                {
                                                                  className:
                                                                    'h-2.5 w-2.5 rounded-sm bg-[#f59e0b]',
                                                                }
                                                              ),
                                                              'Due',
                                                            ],
                                                          }),
                                                          (0, a.jsxs)('div', {
                                                            className:
                                                              'font-medium',
                                                            children: [
                                                              e.pending_issues,
                                                              ' Issues',
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                      (0, a.jsxs)('div', {
                                                        className:
                                                          'flex items-center justify-between gap-2',
                                                        children: [
                                                          (0, a.jsxs)('div', {
                                                            className:
                                                              'flex items-center gap-2',
                                                            children: [
                                                              (0, a.jsx)(
                                                                'div',
                                                                {
                                                                  className:
                                                                    'h-2.5 w-2.5 rounded-sm bg-[#16a34a]',
                                                                }
                                                              ),
                                                              'Completed',
                                                            ],
                                                          }),
                                                          (0, a.jsxs)('div', {
                                                            className:
                                                              'font-medium',
                                                            children: [
                                                              e.completed_issues,
                                                              ' Issues',
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            }),
                                          ],
                                        });
                                      },
                                    },
                                    e.id
                                  )
                                : null;
                            }),
                          }),
                        ],
                      }),
                    ],
                  })
                : (0, a.jsxs)(g.aN, {
                    className: 'space-y-7 px-5',
                    children: [
                      (0, a.jsx)(g.aN.Item, { height: '130px' }),
                      (0, a.jsxs)('div', {
                        className: 'space-y-5',
                        children: [
                          (0, a.jsx)(g.aN.Item, { height: '20px' }),
                          (0, a.jsx)(g.aN.Item, { height: '20px' }),
                          (0, a.jsx)(g.aN.Item, { height: '20px' }),
                          (0, a.jsx)(g.aN.Item, { height: '20px' }),
                          (0, a.jsx)(g.aN.Item, { height: '20px' }),
                        ],
                      }),
                    ],
                  }),
            })
          );
        });
    },
    89821: function (e, s, t) {
      t.d(s, {
        Y: function () {
          return i;
        },
      });
      var a = t(27378);
      let i = () => {
        let [e, s] = (0, a.useState)(new Date());
        return (
          (0, a.useEffect)(() => {
            let e = setInterval(() => {
              s(new Date());
            }, 1e3);
            return () => clearInterval(e);
          }, []),
          { currentTime: e }
        );
      };
    },
  },
]);
