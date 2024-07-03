'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3484],
  {
    27320: function (e, t, s) {
      s.d(t, {
        VF: function () {
          return y;
        },
        MR: function () {
          return j;
        },
        wG: function () {
          return g;
        },
        fo: function () {
          return es;
        },
        f$: function () {
          return em;
        },
        ZS: function () {
          return C;
        },
        li: function () {
          return f;
        },
        W_: function () {
          return E;
        },
        pb: function () {
          return I;
        },
        mm: function () {
          return D;
        },
        ee: function () {
          return Z;
        },
        H2: function () {
          return H;
        },
        S6: function () {
          return U;
        },
        pn: function () {
          return ex;
        },
      });
      var n = s(24246),
        i = s(12004),
        r = s(43659),
        l = s(86677),
        a = s(49743),
        o = s(9486),
        c = s(34659),
        d = s(54129),
        u = s(3515),
        m = s(25449),
        h = s(93997),
        p = s(10712),
        x = s(10634);
      let f = (0, r.Pi)(e => {
        var t;
        let {
            closePalette: s,
            issueDetails: r,
            pages: f,
            setPages: v,
            setPlaceholder: g,
            setSearchTerm: j,
          } = e,
          y = (0, l.useRouter)(),
          { workspaceSlug: w, projectId: b } = y.query,
          {
            issues: { updateIssue: N },
          } = (0, x.gk)(h.rS.PROJECT),
          {
            commandPalette: {
              toggleCommandPaletteModal: k,
              toggleDeleteIssueModal: C,
            },
          } = (0, x.IX)(),
          { currentUser: S } = (0, x.aF)(),
          E = async e => {
            if (!w || !b || !r) return;
            let t = { ...e };
            await N(w.toString(), b.toString(), r.id, t).catch(e => {
              console.error(e);
            });
          },
          I = e => {
            var t;
            if (!r || !e) return;
            s();
            let n = null !== (t = r.assignee_ids) && void 0 !== t ? t : [];
            n.includes(e) ? n.splice(n.indexOf(e), 1) : n.push(e),
              E({ assignee_ids: n });
          },
          R = () => {
            if (!y.query.issueId) return;
            let e = new URL(window.location.href);
            (0, p.TE)(e.href)
              .then(() => {
                (0, m.fz)({ type: m.do.SUCCESS, title: 'Copied to clipboard' });
              })
              .catch(() => {
                (0, m.fz)({ type: m.do.ERROR, title: 'Some error occurred' });
              });
          };
        return (0, n.jsxs)(i.mY.Group, {
          heading: 'Issue actions',
          children: [
            (0, n.jsx)(i.mY.Item, {
              onSelect: () => {
                g('Change state...'), j(''), v([...f, 'change-issue-state']);
              },
              className: 'focus:outline-none',
              children: (0, n.jsxs)('div', {
                className: 'flex items-center gap-2 text-custom-text-200',
                children: [
                  (0, n.jsx)(m.go, { className: 'h-3.5 w-3.5' }),
                  'Change state...',
                ],
              }),
            }),
            (0, n.jsx)(i.mY.Item, {
              onSelect: () => {
                g('Change priority...'),
                  j(''),
                  v([...f, 'change-issue-priority']);
              },
              className: 'focus:outline-none',
              children: (0, n.jsxs)('div', {
                className: 'flex items-center gap-2 text-custom-text-200',
                children: [
                  (0, n.jsx)(a.Z, { className: 'h-3.5 w-3.5' }),
                  'Change priority...',
                ],
              }),
            }),
            (0, n.jsx)(i.mY.Item, {
              onSelect: () => {
                g('Assign to...'), j(''), v([...f, 'change-issue-assignee']);
              },
              className: 'focus:outline-none',
              children: (0, n.jsxs)('div', {
                className: 'flex items-center gap-2 text-custom-text-200',
                children: [
                  (0, n.jsx)(m.Ti, { className: 'h-3.5 w-3.5' }),
                  'Assign to...',
                ],
              }),
            }),
            (0, n.jsx)(i.mY.Item, {
              onSelect: () => {
                var e;
                I(
                  null !== (e = null == S ? void 0 : S.id) && void 0 !== e
                    ? e
                    : ''
                ),
                  j('');
              },
              className: 'focus:outline-none',
              children: (0, n.jsx)('div', {
                className: 'flex items-center gap-2 text-custom-text-200',
                children: (
                  null == r
                    ? void 0
                    : r.assignee_ids.includes(
                        null !== (t = null == S ? void 0 : S.id) && void 0 !== t
                          ? t
                          : ''
                      )
                )
                  ? (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)(o.Z, { className: 'h-3.5 w-3.5' }),
                        'Un-assign from me',
                      ],
                    })
                  : (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)(c.Z, { className: 'h-3.5 w-3.5' }),
                        'Assign to me',
                      ],
                    }),
              }),
            }),
            (0, n.jsx)(i.mY.Item, {
              onSelect: () => {
                k(!1), C(!0);
              },
              className: 'focus:outline-none',
              children: (0, n.jsxs)('div', {
                className: 'flex items-center gap-2 text-custom-text-200',
                children: [
                  (0, n.jsx)(d.Z, { className: 'h-3.5 w-3.5' }),
                  'Delete issue',
                ],
              }),
            }),
            (0, n.jsx)(i.mY.Item, {
              onSelect: () => {
                s(), R();
              },
              className: 'focus:outline-none',
              children: (0, n.jsxs)('div', {
                className: 'flex items-center gap-2 text-custom-text-200',
                children: [
                  (0, n.jsx)(u.Z, { className: 'h-3.5 w-3.5' }),
                  'Copy issue URL',
                ],
              }),
            }),
          ],
        });
      });
      var v = s(1759);
      let g = (0, r.Pi)(e => {
          let { closePalette: t, issue: s } = e,
            { workspaceSlug: r, projectId: a } = (0, l.useRouter)().query,
            {
              issues: { updateIssue: o },
            } = (0, x.gk)(h.rS.PROJECT),
            { projectStates: c } = (0, x.eD)(),
            d = async e => {
              if (!r || !a || !s) return;
              let t = { ...e };
              await o(r.toString(), a.toString(), s.id, t).catch(e => {
                console.error(e);
              });
            },
            u = e => {
              d({ state_id: e }), t();
            };
          return (0, n.jsx)(n.Fragment, {
            children: c
              ? c.length > 0
                ? c.map(e =>
                    (0, n.jsxs)(
                      i.mY.Item,
                      {
                        onSelect: () => u(e.id),
                        className: 'focus:outline-none',
                        children: [
                          (0, n.jsxs)('div', {
                            className: 'flex items-center space-x-3',
                            children: [
                              (0, n.jsx)(m.b_, {
                                stateGroup: e.group,
                                color: e.color,
                                height: '16px',
                                width: '16px',
                              }),
                              (0, n.jsx)('p', { children: e.name }),
                            ],
                          }),
                          (0, n.jsx)('div', {
                            children:
                              e.id === s.state_id &&
                              (0, n.jsx)(v.Z, { className: 'h-3 w-3' }),
                          }),
                        ],
                      },
                      e.id
                    )
                  )
                : (0, n.jsx)('div', {
                    className: 'text-center',
                    children: 'No states found',
                  })
              : (0, n.jsx)(m.$j, {}),
          });
        }),
        j = (0, r.Pi)(e => {
          let { closePalette: t, issue: s } = e,
            { workspaceSlug: r, projectId: a } = (0, l.useRouter)().query,
            {
              issues: { updateIssue: o },
            } = (0, x.gk)(h.rS.PROJECT),
            c = async e => {
              if (!r || !a || !s) return;
              let t = { ...e };
              await o(r.toString(), a.toString(), s.id, t).catch(e => {
                console.error(e);
              });
            },
            d = e => {
              c({ priority: e }), t();
            };
          return (0, n.jsx)(n.Fragment, {
            children: h.Ku.map(e => {
              var t;
              return (0, n.jsxs)(
                i.mY.Item,
                {
                  onSelect: () => d(e.key),
                  className: 'focus:outline-none',
                  children: [
                    (0, n.jsxs)('div', {
                      className: 'flex items-center space-x-3',
                      children: [
                        (0, n.jsx)(m.bJ, { priority: e.key }),
                        (0, n.jsx)('span', {
                          className: 'capitalize',
                          children:
                            null !== (t = e.title) && void 0 !== t ? t : 'None',
                        }),
                      ],
                    }),
                    (0, n.jsx)('div', {
                      children:
                        e.key === s.priority &&
                        (0, n.jsx)(v.Z, { className: 'h-3 w-3' }),
                    }),
                  ],
                },
                e.key
              );
            }),
          });
        }),
        y = (0, r.Pi)(e => {
          var t;
          let { closePalette: s, issue: r } = e,
            { workspaceSlug: a, projectId: o } = (0, l.useRouter)().query,
            {
              issues: { updateIssue: c },
            } = (0, x.gk)(h.rS.PROJECT),
            {
              project: { projectMemberIds: d, getProjectMemberDetails: u },
            } = (0, x.Kb)(),
            p =
              null !==
                (t =
                  null == d
                    ? void 0
                    : d.map(e => {
                        var t, s, i, l, a, o, c;
                        let d = u(e);
                        return {
                          value: ''.concat(
                            null == d
                              ? void 0
                              : null === (t = d.member) || void 0 === t
                                ? void 0
                                : t.id
                          ),
                          query: ''.concat(
                            null == d
                              ? void 0
                              : null === (s = d.member) || void 0 === s
                                ? void 0
                                : s.display_name
                          ),
                          content: (0, n.jsxs)(n.Fragment, {
                            children: [
                              (0, n.jsxs)('div', {
                                className: 'flex items-center gap-2',
                                children: [
                                  (0, n.jsx)(m.qE, {
                                    name:
                                      null == d
                                        ? void 0
                                        : null === (i = d.member) ||
                                            void 0 === i
                                          ? void 0
                                          : i.display_name,
                                    src:
                                      null == d
                                        ? void 0
                                        : null === (l = d.member) ||
                                            void 0 === l
                                          ? void 0
                                          : l.avatar,
                                    showTooltip: !1,
                                  }),
                                  null == d
                                    ? void 0
                                    : null === (a = d.member) || void 0 === a
                                      ? void 0
                                      : a.display_name,
                                ],
                              }),
                              r.assignee_ids.includes(
                                null !==
                                  (c =
                                    null == d
                                      ? void 0
                                      : null === (o = d.member) || void 0 === o
                                        ? void 0
                                        : o.id) && void 0 !== c
                                  ? c
                                  : ''
                              ) &&
                                (0, n.jsx)('div', {
                                  children: (0, n.jsx)(v.Z, {
                                    className: 'h-3 w-3',
                                  }),
                                }),
                            ],
                          }),
                        };
                      })) && void 0 !== t
                ? t
                : [],
            f = async e => {
              if (!a || !o || !r) return;
              let t = { ...e };
              await c(a.toString(), o.toString(), r.id, t).catch(e => {
                console.error(e);
              });
            },
            g = e => {
              var t;
              let n = null !== (t = r.assignee_ids) && void 0 !== t ? t : [];
              n.includes(e) ? n.splice(n.indexOf(e), 1) : n.push(e),
                f({ assignee_ids: n }),
                s();
            };
          return (0, n.jsx)(n.Fragment, {
            children: p.map(e =>
              (0, n.jsx)(
                i.mY.Item,
                {
                  onSelect: () => g(e.value),
                  className: 'focus:outline-none',
                  children: e.content,
                },
                e.value
              )
            ),
          });
        });
      var w = s(59100),
        b = s(95108),
        N = s(93739),
        k = s(71561);
      let C = e => {
        let { closePalette: t } = e,
          {
            commandPalette: { toggleShortcutModal: s },
          } = (0, x.IX)();
        return (0, n.jsxs)(i.mY.Group, {
          heading: 'Help',
          children: [
            (0, n.jsx)(i.mY.Item, {
              onSelect: () => {
                t(), s(!0);
              },
              className: 'focus:outline-none',
              children: (0, n.jsxs)('div', {
                className: 'flex items-center gap-2 text-custom-text-200',
                children: [
                  (0, n.jsx)(w.Z, { className: 'h-3.5 w-3.5' }),
                  'Open keyboard shortcuts',
                ],
              }),
            }),
            (0, n.jsx)(i.mY.Item, {
              onSelect: () => {
                t(), window.open('https://docs.plane.so/', '_blank');
              },
              className: 'focus:outline-none',
              children: (0, n.jsxs)('div', {
                className: 'flex items-center gap-2 text-custom-text-200',
                children: [
                  (0, n.jsx)(b.Z, { className: 'h-3.5 w-3.5' }),
                  'Open Plane documentation',
                ],
              }),
            }),
            (0, n.jsx)(i.mY.Item, {
              onSelect: () => {
                t(),
                  window.open(
                    'https://discord.com/invite/A92xrEGCge',
                    '_blank'
                  );
              },
              className: 'focus:outline-none',
              children: (0, n.jsxs)('div', {
                className: 'flex items-center gap-2 text-custom-text-200',
                children: [
                  (0, n.jsx)(m.D7, {
                    className: 'h-4 w-4',
                    color: 'rgb(var(--color-text-200))',
                  }),
                  'Join our Discord',
                ],
              }),
            }),
            (0, n.jsx)(i.mY.Item, {
              onSelect: () => {
                t(),
                  window.open(
                    'https://github.com/makeplane/plane/issues/new/choose',
                    '_blank'
                  );
              },
              className: 'focus:outline-none',
              children: (0, n.jsxs)('div', {
                className: 'flex items-center gap-2 text-custom-text-200',
                children: [
                  (0, n.jsx)(N.Z, {
                    className: 'h-4 w-4',
                    color: 'rgb(var(--color-text-200))',
                  }),
                  'Report a bug',
                ],
              }),
            }),
            (0, n.jsx)(i.mY.Item, {
              onSelect: () => {
                t(), window && window.$crisp.push(['do', 'chat:show']);
              },
              className: 'focus:outline-none',
              children: (0, n.jsxs)('div', {
                className: 'flex items-center gap-2 text-custom-text-200',
                children: [
                  (0, n.jsx)(k.Z, { className: 'h-3.5 w-3.5' }),
                  'Chat with us',
                ],
              }),
            }),
          ],
        });
      };
      var S = s(88287);
      let E = e => {
          let { closePalette: t } = e,
            {
              commandPalette: {
                toggleCreateCycleModal: s,
                toggleCreateModuleModal: r,
                toggleCreatePageModal: l,
                toggleCreateViewModal: a,
              },
            } = (0, x.IX)(),
            { setTrackElement: o } = (0, x.DN)();
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(i.mY.Group, {
                heading: 'Cycle',
                children: (0, n.jsxs)(i.mY.Item, {
                  onSelect: () => {
                    t(), o('Command palette'), s(!0);
                  },
                  className: 'focus:outline-none',
                  children: [
                    (0, n.jsxs)('div', {
                      className: 'flex items-center gap-2 text-custom-text-200',
                      children: [
                        (0, n.jsx)(S.Z, { className: 'h-3.5 w-3.5' }),
                        'Create new cycle',
                      ],
                    }),
                    (0, n.jsx)('kbd', { children: 'Q' }),
                  ],
                }),
              }),
              (0, n.jsx)(i.mY.Group, {
                heading: 'Module',
                children: (0, n.jsxs)(i.mY.Item, {
                  onSelect: () => {
                    t(), o('Command palette'), r(!0);
                  },
                  className: 'focus:outline-none',
                  children: [
                    (0, n.jsxs)('div', {
                      className: 'flex items-center gap-2 text-custom-text-200',
                      children: [
                        (0, n.jsx)(m.kB, { className: 'h-3.5 w-3.5' }),
                        'Create new module',
                      ],
                    }),
                    (0, n.jsx)('kbd', { children: 'M' }),
                  ],
                }),
              }),
              (0, n.jsx)(i.mY.Group, {
                heading: 'View',
                children: (0, n.jsxs)(i.mY.Item, {
                  onSelect: () => {
                    t(), o('Command palette'), a(!0);
                  },
                  className: 'focus:outline-none',
                  children: [
                    (0, n.jsxs)('div', {
                      className: 'flex items-center gap-2 text-custom-text-200',
                      children: [
                        (0, n.jsx)(m.DK, { className: 'h-3.5 w-3.5' }),
                        'Create new view',
                      ],
                    }),
                    (0, n.jsx)('kbd', { children: 'V' }),
                  ],
                }),
              }),
              (0, n.jsx)(i.mY.Group, {
                heading: 'Page',
                children: (0, n.jsxs)(i.mY.Item, {
                  onSelect: () => {
                    t(), o('Command palette'), l(!0);
                  },
                  className: 'focus:outline-none',
                  children: [
                    (0, n.jsxs)('div', {
                      className: 'flex items-center gap-2 text-custom-text-200',
                      children: [
                        (0, n.jsx)(b.Z, { className: 'h-3.5 w-3.5' }),
                        'Create new page',
                      ],
                    }),
                    (0, n.jsx)('kbd', { children: 'D' }),
                  ],
                }),
              }),
            ],
          });
        },
        I = e => {
          let { closePalette: t, results: s } = e,
            r = (0, l.useRouter)();
          return (0, n.jsx)(n.Fragment, {
            children: Object.keys(s.results).map(e => {
              let l = s.results[e],
                a = ex[e];
              if (l.length > 0)
                return (0, n.jsx)(
                  i.mY.Group,
                  {
                    heading: ''.concat(a.title, ' search'),
                    children: l.map(s => {
                      var l, o;
                      return (0, n.jsx)(
                        i.mY.Item,
                        {
                          onSelect: () => {
                            t(), r.push(a.path(s));
                          },
                          value: ''
                            .concat(e, '-')
                            .concat(null == s ? void 0 : s.id, '-')
                            .concat(s.name, '-')
                            .concat(
                              null !== (l = s.project__identifier) &&
                                void 0 !== l
                                ? l
                                : '',
                              '-'
                            )
                            .concat(
                              null !== (o = s.sequence_id) && void 0 !== o
                                ? o
                                : ''
                            ),
                          className: 'focus:outline-none',
                          children: (0, n.jsxs)('div', {
                            className:
                              'flex items-center gap-2 overflow-hidden text-custom-text-200',
                            children: [
                              a.icon,
                              (0, n.jsx)('p', {
                                className: 'block flex-1 truncate',
                                children: a.itemName(s),
                              }),
                            ],
                          }),
                        },
                        s.id
                      );
                    }),
                  },
                  e
                );
            }),
          });
        };
      var R = s(27378),
        P = s(35704),
        O = s(38330),
        _ = s(21645);
      let D = (0, r.Pi)(e => {
        let { closePalette: t } = e,
          [s, r] = (0, R.useState)(!1),
          { updateCurrentUserTheme: l } = (0, x.aF)(),
          { setTheme: a } = (0, P.F)(),
          o = async e => (
            a(e),
            l(e).catch(() => {
              (0, m.fz)({
                type: m.do.ERROR,
                title: 'Failed to save user theme settings!',
              });
            })
          );
        return ((0, R.useEffect)(() => {
          r(!0);
        }, []),
        s)
          ? (0, n.jsx)(n.Fragment, {
              children: _.K.filter(e => 'custom' !== e.value).map(e =>
                (0, n.jsx)(
                  i.mY.Item,
                  {
                    onSelect: () => {
                      o(e.value), t();
                    },
                    className: 'focus:outline-none',
                    children: (0, n.jsxs)('div', {
                      className: 'flex items-center gap-2 text-custom-text-200',
                      children: [
                        (0, n.jsx)(O.Z, {
                          className: 'h-4 w-4 text-custom-text-200',
                        }),
                        e.label,
                      ],
                    }),
                  },
                  e.value
                )
              ),
            })
          : null;
      });
      var F = s(79894),
        M = s.n(F),
        A = s(93116);
      let Z = e => {
        let { closePalette: t } = e,
          s = (0, l.useRouter)(),
          { workspaceSlug: r } = s.query,
          {
            membership: { currentWorkspaceRole: a },
          } = (0, x.aF)(),
          o = a || A.fp.GUEST,
          c = e => {
            t(), s.push(e);
          };
        return (0, n.jsx)(n.Fragment, {
          children: A.Pi.map(
            e =>
              o >= e.access &&
              (0, n.jsx)(
                i.mY.Item,
                {
                  onSelect: () => c('/'.concat(r).concat(e.href)),
                  className: 'focus:outline-none',
                  children: (0, n.jsx)(M(), {
                    href: '/'.concat(r).concat(e.href),
                    children: (0, n.jsxs)('div', {
                      className: 'flex items-center gap-2 text-custom-text-200',
                      children: [
                        (0, n.jsx)(e.Icon, {
                          className: 'h-4 w-4 text-custom-text-200',
                        }),
                        e.label,
                      ],
                    }),
                  }),
                },
                e.key
              )
          ),
        });
      };
      var L = s(24830);
      let T = [
          {
            key: 'navigation',
            title: 'Navigation',
            shortcuts: [{ keys: 'Ctrl,K', description: 'Open command menu' }],
          },
          {
            key: 'common',
            title: 'Common',
            shortcuts: [
              { keys: 'P', description: 'Create project' },
              { keys: 'C', description: 'Create issue' },
              { keys: 'Q', description: 'Create cycle' },
              { keys: 'M', description: 'Create module' },
              { keys: 'V', description: 'Create view' },
              { keys: 'D', description: 'Create page' },
              { keys: 'Delete', description: 'Bulk delete issues' },
              { keys: 'H', description: 'Open shortcuts guide' },
              {
                keys: 'Ctrl,Alt,C',
                description: 'Copy issue URL from the issue details page',
              },
            ],
          },
        ],
        H = e => {
          let { searchQuery: t } = e,
            s = T.map(e => {
              let s = { ...e };
              return (
                (s.shortcuts = s.shortcuts.filter(e =>
                  (0, p.te)(e.description, t)
                )),
                s
              );
            }),
            i = s.every(e => 0 === e.shortcuts.length);
          return (0, n.jsx)('div', {
            className: 'flex flex-col gap-y-3 overflow-y-auto',
            children: i
              ? (0, n.jsxs)('p', {
                  className:
                    'flex justify-center text-center text-sm text-custom-text-200',
                  children: [
                    'No shortcuts found for',
                    ' ',
                    (0, n.jsxs)('span', {
                      className: 'font-semibold italic',
                      children: ['"', t, '"'],
                    }),
                  ],
                })
              : s.map(e => {
                  if (0 !== e.shortcuts.length)
                    return (0, n.jsxs)(
                      'div',
                      {
                        children: [
                          (0, n.jsx)('h5', {
                            className: 'text-left text-sm font-medium',
                            children: e.title,
                          }),
                          (0, n.jsx)('div', {
                            className: 'space-y-3 px-1',
                            children: e.shortcuts.map(e =>
                              (0, n.jsx)(
                                'div',
                                {
                                  className: 'mt-1',
                                  children: (0, n.jsxs)('div', {
                                    className:
                                      'flex items-center justify-between',
                                    children: [
                                      (0, n.jsx)('h4', {
                                        className:
                                          'text-xs text-custom-text-200',
                                        children: e.description,
                                      }),
                                      (0, n.jsx)('div', {
                                        className:
                                          'flex items-center gap-x-1.5',
                                        children: e.keys
                                          .split(',')
                                          .map(e =>
                                            (0, n.jsx)(
                                              'div',
                                              {
                                                className:
                                                  'flex items-center gap-1',
                                                children:
                                                  'Ctrl' === e
                                                    ? (0, n.jsx)('div', {
                                                        className:
                                                          'grid h-6 min-w-[1.5rem] place-items-center rounded-sm border-[0.5px] border-custom-border-200 bg-custom-background-90 px-1.5',
                                                        children: (0, n.jsx)(
                                                          L.Z,
                                                          {
                                                            className:
                                                              'h-2.5 w-2.5 text-custom-text-200',
                                                          }
                                                        ),
                                                      })
                                                    : (0, n.jsx)('kbd', {
                                                        className:
                                                          'grid h-6 min-w-[1.5rem] place-items-center rounded-sm border-[0.5px] border-custom-border-200 bg-custom-background-90 px-1.5 text-[10px] text-custom-text-200',
                                                        children: e,
                                                      }),
                                              },
                                              e
                                            )
                                          ),
                                      }),
                                    ],
                                  }),
                                },
                                e.keys
                              )
                            ),
                          }),
                        ],
                      },
                      e.key
                    );
                }),
          });
        };
      var z = s(82558),
        V = s(81630),
        q = s(30335),
        Y = s(15455);
      let U = e => {
        let { isOpen: t, onClose: s } = e,
          [i, r] = (0, R.useState)(''),
          l = () => {
            s(), r('');
          };
        return (0, n.jsx)(q.u.Root, {
          show: t,
          as: R.Fragment,
          children: (0, n.jsxs)(Y.V, {
            as: 'div',
            className: 'relative z-20',
            onClose: l,
            children: [
              (0, n.jsx)(q.u.Child, {
                as: R.Fragment,
                enter: 'ease-out duration-300',
                enterFrom: 'opacity-0',
                enterTo: 'opacity-100',
                leave: 'ease-in duration-200',
                leaveFrom: 'opacity-100',
                leaveTo: 'opacity-0',
                children: (0, n.jsx)('div', {
                  className:
                    'fixed inset-0 bg-custom-backdrop transition-opacity',
                }),
              }),
              (0, n.jsx)('div', {
                className: 'fixed inset-0 z-20 overflow-y-auto',
                children: (0, n.jsx)('div', {
                  className:
                    'my-10 flex items-center justify-center p-4 text-center sm:p-0 md:my-20',
                  children: (0, n.jsx)(q.u.Child, {
                    as: R.Fragment,
                    enter: 'ease-out duration-300',
                    enterFrom:
                      'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
                    enterTo: 'opacity-100 translate-y-0 sm:scale-100',
                    leave: 'ease-in duration-200',
                    leaveFrom: 'opacity-100 translate-y-0 sm:scale-100',
                    leaveTo:
                      'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
                    children: (0, n.jsx)(Y.V.Panel, {
                      className:
                        'relative flex h-full items-center justify-center',
                      children: (0, n.jsxs)('div', {
                        className:
                          'flex h-[61vh] w-full flex-col  space-y-4 overflow-hidden rounded-lg bg-custom-background-100 p-5 shadow-custom-shadow-md transition-all sm:w-[28rem]',
                        children: [
                          (0, n.jsxs)(Y.V.Title, {
                            as: 'h3',
                            className: 'flex justify-between',
                            children: [
                              (0, n.jsx)('span', {
                                className: 'text-lg font-medium',
                                children: 'Keyboard shortcuts',
                              }),
                              (0, n.jsx)('button', {
                                type: 'button',
                                onClick: l,
                                children: (0, n.jsx)(z.Z, {
                                  className:
                                    'h-4 w-4 text-custom-text-200 hover:text-custom-text-100',
                                  'aria-hidden': 'true',
                                }),
                              }),
                            ],
                          }),
                          (0, n.jsxs)('div', {
                            className:
                              'flex w-full items-center rounded border-[0.5px] border-custom-border-200 bg-custom-background-90 px-2',
                            children: [
                              (0, n.jsx)(V.Z, {
                                className: 'h-3.5 w-3.5 text-custom-text-200',
                              }),
                              (0, n.jsx)(m.II, {
                                id: 'search',
                                name: 'search',
                                type: 'text',
                                value: i,
                                onChange: e => r(e.target.value),
                                placeholder: 'Search for shortcuts',
                                className:
                                  'w-full border-none bg-transparent py-1 text-xs text-custom-text-200 outline-none',
                                autoFocus: !0,
                                tabIndex: 1,
                              }),
                            ],
                          }),
                          (0, n.jsx)(H, { searchQuery: i }),
                        ],
                      }),
                    }),
                  }),
                }),
              }),
            ],
          }),
        });
      };
      var B = s(30201),
        K = s(88758),
        W = s(74371),
        G = s(70540),
        $ = s(82750),
        Q = s(65758),
        J = s(18894),
        X = s(4225);
      let ee = new (s(16933).A)(),
        et = new X.vq(),
        es = (0, r.Pi)(() => {
          var e;
          let { getProjectById: t, workspaceProjectIds: s } = (0, x.PY)(),
            { isMobile: r } = (0, J.L)(),
            [a, o] = (0, R.useState)('Type a command or search...'),
            [c, d] = (0, R.useState)(0),
            [u, h] = (0, R.useState)(!1),
            [p, v] = (0, R.useState)(!1),
            [w, b] = (0, R.useState)(''),
            [N, k] = (0, R.useState)({
              results: {
                workspace: [],
                project: [],
                issue: [],
                cycle: [],
                module: [],
                issue_view: [],
                page: [],
              },
            }),
            [S, P] = (0, R.useState)(!1),
            [_, F] = (0, R.useState)([]),
            {
              commandPalette: {
                isCommandPaletteOpen: M,
                toggleCommandPaletteModal: A,
                toggleCreateIssueModal: L,
                toggleCreateProjectModal: T,
              },
            } = (0, x.IX)(),
            { setTrackElement: H } = (0, x.DN)(),
            z = (0, l.useRouter)(),
            { workspaceSlug: U, projectId: X, issueId: es } = z.query,
            en = _[_.length - 1],
            ei = (0, Q.Z)(w, 500),
            { data: er } = (0, B.ZP)(
              U && X && es ? (0, $.eA)(es.toString()) : null,
              U && X && es
                ? () => et.retrieve(U.toString(), X.toString(), es.toString())
                : null
            ),
            el = () => {
              A(!1);
            };
          (0, R.useEffect)(() => {
            U &&
              (h(!0),
              ei
                ? (v(!0),
                  ee
                    .searchWorkspace(U.toString(), {
                      ...(X ? { project_id: X.toString() } : {}),
                      search: ei,
                      workspace_search: !X || S,
                    })
                    .then(e => {
                      k(e),
                        d(
                          Object.keys(e.results).reduce(
                            (t, s) => e.results[s].length + t,
                            0
                          )
                        );
                    })
                    .finally(() => {
                      h(!1), v(!1);
                    }))
                : (k({
                    results: {
                      workspace: [],
                      project: [],
                      issue: [],
                      cycle: [],
                      module: [],
                      issue_view: [],
                      page: [],
                    },
                  }),
                  h(!1),
                  v(!1)));
          }, [ei, S, X, U]);
          let ea = t(
            null !== (e = null == er ? void 0 : er.project_id) && void 0 !== e
              ? e
              : ''
          );
          return (0, n.jsx)(q.u.Root, {
            show: M,
            afterLeave: () => b(''),
            as: R.Fragment,
            children: (0, n.jsxs)(Y.V, {
              as: 'div',
              className: 'relative z-30',
              onClose: () => el(),
              children: [
                (0, n.jsx)(q.u.Child, {
                  as: R.Fragment,
                  enter: 'ease-out duration-300',
                  enterFrom: 'opacity-0',
                  enterTo: 'opacity-100',
                  leave: 'ease-in duration-200',
                  leaveFrom: 'opacity-100',
                  leaveTo: 'opacity-0',
                  children: (0, n.jsx)('div', {
                    className:
                      'fixed inset-0 bg-custom-backdrop transition-opacity',
                  }),
                }),
                (0, n.jsx)('div', {
                  className: 'fixed inset-0 z-30 overflow-y-auto',
                  children: (0, n.jsx)('div', {
                    className:
                      'flex items-center justify-center p-4 sm:p-6 md:p-20',
                    children: (0, n.jsx)(q.u.Child, {
                      as: R.Fragment,
                      enter: 'ease-out duration-300',
                      enterFrom:
                        'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
                      enterTo: 'opacity-100 translate-y-0 sm:scale-100',
                      leave: 'ease-in duration-200',
                      leaveFrom: 'opacity-100 translate-y-0 sm:scale-100',
                      leaveTo:
                        'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
                      children: (0, n.jsx)(Y.V.Panel, {
                        className:
                          'relative flex w-full max-w-2xl items-center justify-center transform divide-y divide-custom-border-200 divide-opacity-10 rounded-lg bg-custom-background-100 shadow-custom-shadow-md transition-all',
                        children: (0, n.jsx)('div', {
                          className: 'w-full max-w-2xl',
                          children: (0, n.jsxs)(i.mY, {
                            filter: (e, t) =>
                              e.toLowerCase().includes(t.toLowerCase()) ? 1 : 0,
                            onKeyDown: e => {
                              'Escape' === e.key && w && b(''),
                                'Escape' !== e.key || en || w || el(),
                                ('Escape' !== e.key &&
                                  ('Backspace' !== e.key || w)) ||
                                  (e.preventDefault(),
                                  F(e => e.slice(0, -1)),
                                  o('Type a command or search...'));
                            },
                            children: [
                              (0, n.jsxs)('div', {
                                className:
                                  'flex gap-4 p-3 pb-0 sm:items-center '.concat(
                                    er
                                      ? 'flex-col justify-between sm:flex-row'
                                      : 'justify-end'
                                  ),
                                children: [
                                  er &&
                                    (0, n.jsxs)('div', {
                                      className:
                                        'overflow-hidden truncate rounded-md bg-custom-background-80 p-2 text-xs font-medium text-custom-text-200',
                                      children: [
                                        null == ea ? void 0 : ea.identifier,
                                        '-',
                                        er.sequence_id,
                                        ' ',
                                        er.name,
                                      ],
                                    }),
                                  X &&
                                    (0, n.jsx)(m.u, {
                                      tooltipContent:
                                        'Toggle workspace level search',
                                      isMobile: r,
                                      children: (0, n.jsxs)('div', {
                                        className:
                                          'flex flex-shrink-0 cursor-pointer items-center gap-1 self-end text-xs sm:self-center',
                                        children: [
                                          (0, n.jsx)('button', {
                                            type: 'button',
                                            onClick: () => P(e => !e),
                                            className: 'flex-shrink-0',
                                            children: 'Workspace Level',
                                          }),
                                          (0, n.jsx)(m.Zh, {
                                            value: S,
                                            onChange: () => P(e => !e),
                                          }),
                                        ],
                                      }),
                                    }),
                                ],
                              }),
                              (0, n.jsxs)('div', {
                                className: 'relative',
                                children: [
                                  (0, n.jsx)(V.Z, {
                                    className:
                                      'pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-custom-text-200',
                                    'aria-hidden': 'true',
                                    strokeWidth: 2,
                                  }),
                                  (0, n.jsx)(i.mY.Input, {
                                    className:
                                      'w-full border-0 border-b border-custom-border-200 bg-transparent p-4 pl-11 text-sm text-custom-text-100 outline-none placeholder:text-custom-text-400 focus:ring-0',
                                    placeholder: a,
                                    value: w,
                                    onValueChange: e => b(e),
                                    autoFocus: !0,
                                    tabIndex: 1,
                                  }),
                                ],
                              }),
                              (0, n.jsxs)(i.mY.List, {
                                className:
                                  'max-h-96 overflow-scroll p-2 vertical-scrollbar scrollbar-sm',
                                children: [
                                  '' !== w &&
                                    (0, n.jsxs)('h5', {
                                      className:
                                        'mx-[3px] my-4 text-xs text-custom-text-100',
                                      children: [
                                        'Search results for',
                                        ' ',
                                        (0, n.jsxs)('span', {
                                          className: 'font-medium',
                                          children: ['"', w, '"'],
                                        }),
                                        ' ',
                                        'in ',
                                        !X || S ? 'workspace' : 'project',
                                        ':',
                                      ],
                                    }),
                                  !u &&
                                    0 === c &&
                                    '' !== w &&
                                    '' !== ei &&
                                    (0, n.jsx)('div', {
                                      className:
                                        'flex flex-col items-center justify-center px-3 py-8 text-center',
                                      children: (0, n.jsx)(W.ub, {
                                        type: G.C.COMMAND_K_SEARCH_EMPTY_STATE,
                                        layout: 'screen-simple',
                                      }),
                                    }),
                                  (u || p) &&
                                    (0, n.jsx)(i.mY.Loading, {
                                      children: (0, n.jsxs)(m.aN, {
                                        className: 'space-y-3',
                                        children: [
                                          (0, n.jsx)(m.aN.Item, {
                                            height: '40px',
                                          }),
                                          (0, n.jsx)(m.aN.Item, {
                                            height: '40px',
                                          }),
                                          (0, n.jsx)(m.aN.Item, {
                                            height: '40px',
                                          }),
                                          (0, n.jsx)(m.aN.Item, {
                                            height: '40px',
                                          }),
                                        ],
                                      }),
                                    }),
                                  '' !== ei &&
                                    (0, n.jsx)(I, {
                                      closePalette: el,
                                      results: N,
                                    }),
                                  !en &&
                                    (0, n.jsxs)(n.Fragment, {
                                      children: [
                                        es &&
                                          (0, n.jsx)(f, {
                                            closePalette: el,
                                            issueDetails: er,
                                            pages: _,
                                            setPages: e => F(e),
                                            setPlaceholder: e => o(e),
                                            setSearchTerm: e => b(e),
                                          }),
                                        U &&
                                          s &&
                                          s.length > 0 &&
                                          (0, n.jsx)(i.mY.Group, {
                                            heading: 'Issue',
                                            children: (0, n.jsxs)(i.mY.Item, {
                                              onSelect: () => {
                                                el(),
                                                  H('Command Palette'),
                                                  L(!0);
                                              },
                                              className:
                                                'focus:bg-custom-background-80',
                                              children: [
                                                (0, n.jsxs)('div', {
                                                  className:
                                                    'flex items-center gap-2 text-custom-text-200',
                                                  children: [
                                                    (0, n.jsx)(m.uQ, {
                                                      className: 'h-3.5 w-3.5',
                                                    }),
                                                    'Create new issue',
                                                  ],
                                                }),
                                                (0, n.jsx)('kbd', {
                                                  children: 'C',
                                                }),
                                              ],
                                            }),
                                          }),
                                        U &&
                                          (0, n.jsx)(i.mY.Group, {
                                            heading: 'Project',
                                            children: (0, n.jsxs)(i.mY.Item, {
                                              onSelect: () => {
                                                el(),
                                                  H('Command palette'),
                                                  T(!0);
                                              },
                                              className: 'focus:outline-none',
                                              children: [
                                                (0, n.jsxs)('div', {
                                                  className:
                                                    'flex items-center gap-2 text-custom-text-200',
                                                  children: [
                                                    (0, n.jsx)(K.Z, {
                                                      className: 'h-3.5 w-3.5',
                                                    }),
                                                    'Create new project',
                                                  ],
                                                }),
                                                (0, n.jsx)('kbd', {
                                                  children: 'P',
                                                }),
                                              ],
                                            }),
                                          }),
                                        X &&
                                          (0, n.jsx)(E, { closePalette: el }),
                                        (0, n.jsx)(i.mY.Group, {
                                          heading: 'Workspace Settings',
                                          children: (0, n.jsx)(i.mY.Item, {
                                            onSelect: () => {
                                              o('Search workspace settings...'),
                                                b(''),
                                                F([..._, 'settings']);
                                            },
                                            className: 'focus:outline-none',
                                            children: (0, n.jsxs)('div', {
                                              className:
                                                'flex items-center gap-2 text-custom-text-200',
                                              children: [
                                                (0, n.jsx)(O.Z, {
                                                  className: 'h-3.5 w-3.5',
                                                }),
                                                'Search settings...',
                                              ],
                                            }),
                                          }),
                                        }),
                                        (0, n.jsxs)(i.mY.Group, {
                                          heading: 'Account',
                                          children: [
                                            (0, n.jsx)(i.mY.Item, {
                                              onSelect: () => {
                                                el(),
                                                  z.push('/create-workspace');
                                              },
                                              className: 'focus:outline-none',
                                              children: (0, n.jsxs)('div', {
                                                className:
                                                  'flex items-center gap-2 text-custom-text-200',
                                                children: [
                                                  (0, n.jsx)(K.Z, {
                                                    className: 'h-3.5 w-3.5',
                                                  }),
                                                  'Create new workspace',
                                                ],
                                              }),
                                            }),
                                            (0, n.jsx)(i.mY.Item, {
                                              onSelect: () => {
                                                o('Change interface theme...'),
                                                  b(''),
                                                  F([
                                                    ..._,
                                                    'change-interface-theme',
                                                  ]);
                                              },
                                              className: 'focus:outline-none',
                                              children: (0, n.jsxs)('div', {
                                                className:
                                                  'flex items-center gap-2 text-custom-text-200',
                                                children: [
                                                  (0, n.jsx)(O.Z, {
                                                    className: 'h-3.5 w-3.5',
                                                  }),
                                                  'Change interface theme...',
                                                ],
                                              }),
                                            }),
                                          ],
                                        }),
                                        (0, n.jsx)(C, { closePalette: el }),
                                      ],
                                    }),
                                  'settings' === en &&
                                    U &&
                                    (0, n.jsx)(Z, { closePalette: el }),
                                  'change-issue-state' === en &&
                                    er &&
                                    (0, n.jsx)(g, {
                                      closePalette: el,
                                      issue: er,
                                    }),
                                  'change-issue-priority' === en &&
                                    er &&
                                    (0, n.jsx)(j, {
                                      closePalette: el,
                                      issue: er,
                                    }),
                                  'change-issue-assignee' === en &&
                                    er &&
                                    (0, n.jsx)(y, {
                                      closePalette: el,
                                      issue: er,
                                    }),
                                  'change-interface-theme' === en &&
                                    (0, n.jsx)(D, {
                                      closePalette: () => {
                                        el(), F(e => e.slice(0, -1));
                                      },
                                    }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                  }),
                }),
              ],
            }),
          });
        });
      var en = s(23258),
        ei = s(40240),
        er = s(68114),
        el = s(98036),
        ea = s(56595),
        eo = s(91256),
        ec = s(31408),
        ed = s(51374);
      let eu = new X.vq(),
        em = (0, r.Pi)(() => {
          var e;
          let t = (0, l.useRouter)(),
            {
              workspaceSlug: s,
              projectId: i,
              issueId: r,
              cycleId: a,
              moduleId: o,
            } = t.query,
            {
              commandPalette: c,
              theme: { toggleSidebar: d },
            } = (0, x.IX)(),
            { setTrackElement: u } = (0, x.DN)(),
            {
              currentUser: f,
              membership: { currentWorkspaceRole: v, currentProjectRole: g },
            } = (0, x.aF)(),
            {
              issues: { removeIssue: j },
            } = (0, x.gk)(h.rS.PROJECT),
            {
              toggleCommandPaletteModal: y,
              isCreateIssueModalOpen: w,
              toggleCreateIssueModal: b,
              isCreateCycleModalOpen: N,
              toggleCreateCycleModal: k,
              isCreatePageModalOpen: C,
              toggleCreatePageModal: S,
              isCreateProjectModalOpen: E,
              toggleCreateProjectModal: I,
              isCreateModuleModalOpen: P,
              toggleCreateModuleModal: O,
              isCreateViewModalOpen: _,
              toggleCreateViewModal: D,
              isShortcutModalOpen: F,
              toggleShortcutModal: M,
              isBulkDeleteIssueModalOpen: Z,
              toggleBulkDeleteIssueModal: L,
              isDeleteIssueModalOpen: T,
              toggleDeleteIssueModal: H,
              isAnyModalOpen: z,
              createIssueStoreType: V,
            } = c,
            { data: q } = (0, B.ZP)(
              s && i && r ? (0, $.eA)(r) : null,
              s && i && r ? () => eu.retrieve(s, i, r) : null
            ),
            Y = (0, R.useCallback)(() => {
              if (!r) return;
              let e = new URL(window.location.href);
              (0, p.TE)(e.href)
                .then(() => {
                  (0, m.fz)({
                    type: m.do.SUCCESS,
                    title: 'Copied to clipboard',
                  });
                })
                .catch(() => {
                  (0, m.fz)({ type: m.do.ERROR, title: 'Some error occurred' });
                });
            }, [r]),
            K = (0, R.useCallback)(
              function () {
                let e =
                    !(arguments.length > 0) ||
                    void 0 === arguments[0] ||
                    arguments[0],
                  t = !!g && g >= ed.MC.MEMBER;
                return (
                  !t &&
                    e &&
                    (0, m.fz)({
                      type: m.do.ERROR,
                      title:
                        "You don't have permission to perform this action.",
                    }),
                  t
                );
              },
              [g]
            ),
            W = (0, R.useCallback)(
              function () {
                let e =
                    !(arguments.length > 0) ||
                    void 0 === arguments[0] ||
                    arguments[0],
                  t = !!v && v >= A.fp.MEMBER;
                return (
                  !t &&
                    e &&
                    (0, m.fz)({
                      type: m.do.ERROR,
                      title:
                        "You don't have permission to perform this action.",
                    }),
                  t
                );
              },
              [v]
            ),
            G = (0, R.useMemo)(
              () => ({
                global: {
                  c: {
                    title: 'Create a new issue',
                    description: 'Create a new issue in the current project',
                    action: () => b(!0),
                  },
                  h: {
                    title: 'Show shortcuts',
                    description: 'Show all the available shortcuts',
                    action: () => M(!0),
                  },
                },
                workspace: {
                  p: {
                    title: 'Create a new project',
                    description:
                      'Create a new project in the current workspace',
                    action: () => I(!0),
                  },
                },
                project: {
                  d: {
                    title: 'Create a new page',
                    description: 'Create a new page in the current project',
                    action: () => S(!0),
                  },
                  m: {
                    title: 'Create a new module',
                    description: 'Create a new module in the current project',
                    action: () => O(!0),
                  },
                  q: {
                    title: 'Create a new cycle',
                    description: 'Create a new cycle in the current project',
                    action: () => k(!0),
                  },
                  v: {
                    title: 'Create a new view',
                    description: 'Create a new view in the current project',
                    action: () => D(!0),
                  },
                  backspace: {
                    title: 'Bulk delete issues',
                    description: 'Bulk delete issues in the current project',
                    action: () => L(!0),
                  },
                  delete: {
                    title: 'Bulk delete issues',
                    description: 'Bulk delete issues in the current project',
                    action: () => L(!0),
                  },
                },
              }),
              [L, k, b, O, S, I, D, M]
            ),
            Q = (0, R.useCallback)(
              e => {
                var t, n;
                let { key: r, ctrlKey: l, metaKey: a, altKey: o } = e;
                if (!r) return;
                let c = r.toLowerCase(),
                  m = l || a;
                m && 'k' === c && !z && (e.preventDefault(), y(!0)),
                  !(
                    e.target instanceof HTMLTextAreaElement ||
                    e.target instanceof HTMLInputElement ||
                    (null === (n = e.target) || void 0 === n
                      ? void 0
                      : null === (t = n.classList) || void 0 === t
                        ? void 0
                        : t.contains('ProseMirror'))
                  ) &&
                    (m
                      ? 'c' === c && o
                        ? (e.preventDefault(), Y())
                        : 'b' === c && (e.preventDefault(), d())
                      : !z &&
                        (u('Shortcut key'),
                        Object.keys(G.global).includes(c)
                          ? G.global[c].action()
                          : Object.keys(G.workspace).includes(c) && s && W()
                            ? G.workspace[c].action()
                            : Object.keys(G.project).includes(c) &&
                              i &&
                              K() &&
                              (e.preventDefault(), G.project[c].action())));
              },
              [K, W, Y, z, i, u, G, y, d, s]
            );
          (0, R.useEffect)(
            () => (
              document.addEventListener('keydown', Q),
              () => document.removeEventListener('keydown', Q)
            ),
            [Q]
          );
          let J =
            (null == t
              ? void 0
              : null === (e = t.asPath) || void 0 === e
                ? void 0
                : e.includes('draft-issues')) || !1;
          return f
            ? (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(U, { isOpen: F, onClose: () => M(!1) }),
                  s &&
                    (0, n.jsx)(eo.Pn, {
                      isOpen: E,
                      onClose: () => I(!1),
                      workspaceSlug: s.toString(),
                    }),
                  s &&
                    i &&
                    (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)(ei.UE, {
                          isOpen: N,
                          handleClose: () => k(!1),
                          workspaceSlug: s.toString(),
                          projectId: i.toString(),
                        }),
                        (0, n.jsx)(el.vz, {
                          isOpen: P,
                          onClose: () => O(!1),
                          workspaceSlug: s.toString(),
                          projectId: i.toString(),
                        }),
                        (0, n.jsx)(ec.xB, {
                          isOpen: _,
                          onClose: () => D(!1),
                          workspaceSlug: s.toString(),
                          projectId: i.toString(),
                        }),
                        (0, n.jsx)(ea.V7, {
                          workspaceSlug: s.toString(),
                          projectId: i.toString(),
                          isModalOpen: C,
                          handleModalClose: () => S(!1),
                          redirectionEnabled: !0,
                        }),
                      ],
                    }),
                  (0, n.jsx)(er.vlH, {
                    isOpen: w,
                    onClose: () => b(!1),
                    data: a
                      ? { cycle_id: a.toString() }
                      : o
                        ? { module_ids: [o.toString()] }
                        : void 0,
                    storeType: V,
                    isDraft: J,
                  }),
                  s &&
                    i &&
                    r &&
                    q &&
                    (0, n.jsx)(er.rKc, {
                      handleClose: () => H(!1),
                      isOpen: T,
                      data: q,
                      onSubmit: async () => {
                        await j(s.toString(), i.toString(), r.toString()),
                          t.push(
                            '/'.concat(s, '/projects/').concat(i, '/issues')
                          );
                      },
                    }),
                  (0, n.jsx)(en.LV, {
                    isOpen: Z,
                    onClose: () => L(!1),
                    user: f,
                  }),
                  (0, n.jsx)(es, {}),
                ],
              })
            : null;
        });
      var eh = s(26536),
        ep = s(97151);
      let ex = {
        cycle: {
          icon: (0, n.jsx)(m.sI, { className: 'h-3 w-3' }),
          itemName: e =>
            (0, n.jsxs)('h6', {
              children: [
                (0, n.jsx)('span', {
                  className: 'text-xs text-custom-text-300',
                  children: e.project__identifier,
                }),
                ' ',
                e.name,
              ],
            }),
          path: e =>
            '/'
              .concat(null == e ? void 0 : e.workspace__slug, '/projects/')
              .concat(null == e ? void 0 : e.project_id, '/cycles/')
              .concat(null == e ? void 0 : e.id),
          title: 'Cycles',
        },
        issue: {
          icon: (0, n.jsx)(m.uQ, { className: 'h-3 w-3' }),
          itemName: e =>
            (0, n.jsxs)('h6', {
              children: [
                (0, n.jsxs)('span', {
                  className: 'text-xs text-custom-text-300',
                  children: [e.project__identifier, '-', e.sequence_id],
                }),
                ' ',
                e.name,
              ],
            }),
          path: e =>
            '/'
              .concat(null == e ? void 0 : e.workspace__slug, '/projects/')
              .concat(null == e ? void 0 : e.project_id, '/issues/')
              .concat(null == e ? void 0 : e.id),
          title: 'Issues',
        },
        issue_view: {
          icon: (0, n.jsx)(m.DK, { className: 'h-3 w-3' }),
          itemName: e =>
            (0, n.jsxs)('h6', {
              children: [
                (0, n.jsx)('span', {
                  className: 'text-xs text-custom-text-300',
                  children: e.project__identifier,
                }),
                ' ',
                e.name,
              ],
            }),
          path: e =>
            '/'
              .concat(null == e ? void 0 : e.workspace__slug, '/projects/')
              .concat(null == e ? void 0 : e.project_id, '/views/')
              .concat(null == e ? void 0 : e.id),
          title: 'Views',
        },
        module: {
          icon: (0, n.jsx)(m.kB, { className: 'h-3 w-3' }),
          itemName: e =>
            (0, n.jsxs)('h6', {
              children: [
                (0, n.jsx)('span', {
                  className: 'text-xs text-custom-text-300',
                  children: e.project__identifier,
                }),
                ' ',
                e.name,
              ],
            }),
          path: e =>
            '/'
              .concat(null == e ? void 0 : e.workspace__slug, '/projects/')
              .concat(null == e ? void 0 : e.project_id, '/modules/')
              .concat(null == e ? void 0 : e.id),
          title: 'Modules',
        },
        page: {
          icon: (0, n.jsx)(b.Z, { className: 'h-3 w-3' }),
          itemName: e =>
            (0, n.jsxs)('h6', {
              children: [
                (0, n.jsx)('span', {
                  className: 'text-xs text-custom-text-300',
                  children: e.project__identifier,
                }),
                ' ',
                e.name,
              ],
            }),
          path: e =>
            '/'
              .concat(null == e ? void 0 : e.workspace__slug, '/projects/')
              .concat(null == e ? void 0 : e.project_id, '/pages/')
              .concat(null == e ? void 0 : e.id),
          title: 'Pages',
        },
        project: {
          icon: (0, n.jsx)(eh.Z, { className: 'h-3 w-3' }),
          itemName: e => (null == e ? void 0 : e.name),
          path: e =>
            '/'
              .concat(null == e ? void 0 : e.workspace__slug, '/projects/')
              .concat(null == e ? void 0 : e.id, '/issues/'),
          title: 'Projects',
        },
        workspace: {
          icon: (0, n.jsx)(ep.Z, { className: 'h-3 w-3' }),
          itemName: e => (null == e ? void 0 : e.name),
          path: e => '/'.concat(null == e ? void 0 : e.slug, '/'),
          title: 'Workspaces',
        },
      };
    },
    21109: function (e, t, s) {
      s.d(t, {
        P: function () {
          return a;
        },
      });
      var n = s(24246),
        i = s(50649),
        r = s(37904),
        l = s(10634);
      let a = (0, i.Pi)(e => {
        let { onClick: t } = e,
          { theme: s } = (0, l.IX)();
        return (0, n.jsx)('div', {
          className:
            'w-7 h-7 flex-shrink-0 rounded flex justify-center items-center bg-custom-background-80 transition-all hover:bg-custom-background-90 cursor-pointer group md:hidden',
          onClick: () => {
            t ? t() : s.toggleSidebar();
          },
          children: (0, n.jsx)(r.Z, {
            size: 14,
            className:
              'text-custom-text-200 group-hover:text-custom-text-100 transition-all',
          }),
        });
      });
    },
    56595: function (e, t, s) {
      s.d(t, {
        zg: function () {
          return ep;
        },
        lx: function () {
          return ex;
        },
        V7: function () {
          return eU;
        },
        R$: function () {
          return eB;
        },
        aI: function () {
          return eb;
        },
        j5: function () {
          return ej;
        },
        G8: function () {
          return y;
        },
        iC: function () {
          return eg;
        },
        iW: function () {
          return G;
        },
        q: function () {
          return eV;
        },
        q7: function () {
          return er;
        },
        c1: function () {
          return L;
        },
        jC: function () {
          return T;
        },
        EM: function () {
          return el;
        },
        lJ: function () {
          return S;
        },
        G6: function () {
          return ek;
        },
        ag: function () {
          return eK;
        },
        YI: function () {
          return O;
        },
        wY: function () {
          return eq;
        },
        BG: function () {
          return Z;
        },
        lS: function () {
          return eF;
        },
        tW: function () {
          return eZ;
        },
        PI: function () {
          return Q;
        },
        FJ: function () {
          return ez;
        },
        XD: function () {
          return U;
        },
        el: function () {
          return ed;
        },
        d6: function () {
          return e2;
        },
        G$: function () {
          return eM;
        },
        Gw: function () {
          return e3;
        },
      });
      var n = s(24246),
        i = s(27378),
        r = s(50649),
        l = s(85997),
        a = s(75289),
        o = s(37969),
        c = s(3515),
        d = s(9204),
        u = s(54129),
        m = s(25449),
        h = s(10712),
        p = s(10634);
      let x = (0, r.Pi)(e => {
        let { pageId: t, parentRef: s, projectId: r, workspaceSlug: x } = e,
          [f, v] = (0, i.useState)(!1),
          {
            access: g,
            archive: j,
            archived_at: y,
            makePublic: w,
            makePrivate: b,
            restore: N,
            canCurrentUserArchivePage: k,
            canCurrentUserChangeAccess: C,
            canCurrentUserDeletePage: S,
          } = (0, p.qt)(t),
          E = ''.concat(x, '/projects/').concat(r, '/pages/').concat(t),
          I = [
            {
              key: 'make-public-private',
              action: 0 === g ? b : w,
              title: 0 === g ? 'Make private' : 'Make public',
              icon: 0 === g ? l.Z : a.Z,
              shouldRender: C && !y,
            },
            {
              key: 'open-new-tab',
              action: () => window.open('/'.concat(E), '_blank'),
              title: 'Open in new tab',
              icon: o.Z,
              shouldRender: !0,
            },
            {
              key: 'copy-link',
              action: () =>
                (0, h.fQ)(E).then(() => {
                  (0, m.fz)({
                    type: m.do.SUCCESS,
                    title: 'Link Copied!',
                    message: 'Page link copied to clipboard.',
                  });
                }),
              title: 'Copy link',
              icon: c.Z,
              shouldRender: !0,
            },
            {
              key: 'archive-restore',
              action: y ? N : j,
              title: y ? 'Restore' : 'Archive',
              icon: y ? d.Z : m.rK,
              shouldRender: k,
            },
            {
              key: 'delete',
              action: () => v(!0),
              title: 'Delete',
              icon: u.Z,
              shouldRender: S && !!y,
            },
          ];
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(eB, {
              isOpen: f,
              onClose: () => v(!1),
              pageId: t,
              projectId: r,
            }),
            (0, n.jsx)(m.xV, { parentRef: s, items: I }),
            (0, n.jsx)(m.fR, {
              placement: 'bottom-end',
              ellipsis: !0,
              closeOnSelect: !0,
              children: I.map(e =>
                e.shouldRender
                  ? (0, n.jsxs)(
                      m.fR.MenuItem,
                      {
                        onClick: t => {
                          t.preventDefault(), t.stopPropagation(), e.action();
                        },
                        className: 'flex items-center gap-2',
                        disabled: e.disabled,
                        children: [
                          e.icon &&
                            (0, n.jsx)(e.icon, { className: 'h-3 w-3' }),
                          e.title,
                        ],
                      },
                      e.key
                    )
                  : null
              ),
            }),
          ],
        });
      });
      var f = s(80986),
        v = s(17764),
        g = s(93997),
        j = s(51374);
      let y = (0, r.Pi)(e => {
        let { issueId: t, projectId: s, workspaceSlug: r } = e,
          [l, a] = (0, i.useState)(null),
          {
            membership: { currentWorkspaceAllProjectsRole: o },
          } = (0, p.aF)(),
          { getProjectById: c } = (0, p.PY)(),
          {
            setPeekIssue: d,
            issue: { fetchIssue: u, getIssueById: h, updateIssue: x },
          } = (0, p.p1)(),
          y = null == o ? void 0 : o[s],
          w = c(s),
          b = h(t),
          N = !!y && y < j.MC.MEMBER,
          k = {};
        return (g.Hj.forEach(e => {
          k[e.key] = !0;
        }),
        (0, i.useEffect)(() => {
          b ||
            u(r, s, t)
              .then(() => a(null))
              .catch(e => a(e));
        }, [u, b, t, s, r]),
        b || l)
          ? l
            ? (0, n.jsxs)('div', {
                className:
                  'flex items-center gap-3 rounded-md border-2 border-orange-500 bg-orange-500/10 text-orange-500 px-4 py-3 my-2 text-base',
                children: [
                  (0, n.jsx)(f.Z, { className: 'text-orange-500 size-8' }),
                  'This Issue embed is not found in any project. It can no longer be updated or accessed from here.',
                ],
              })
            : (0, n.jsxs)('div', {
                className:
                  'issue-embed cursor-pointer space-y-2 rounded-md bg-custom-background-90 p-3 my-2',
                role: 'button',
                onClick: () =>
                  d({ issueId: t, projectId: s, workspaceSlug: r }),
                children: [
                  (0, n.jsxs)('h5', {
                    className: 'text-xs text-custom-text-300',
                    children: [
                      null == w ? void 0 : w.identifier,
                      '-',
                      null == b ? void 0 : b.sequence_id,
                    ],
                  }),
                  (0, n.jsx)('h4', {
                    className: 'text-sm font-medium line-clamp-2 break-words',
                    children: null == b ? void 0 : b.name,
                  }),
                  b &&
                    (0, n.jsx)(v.j, {
                      className:
                        'flex flex-wrap items-center gap-2 whitespace-nowrap text-custom-text-300 pt-1.5',
                      issue: b,
                      displayProperties: k,
                      activeLayout: 'Page issue embed',
                      updateIssue: async (e, t, s) => await x(r, e, t, s),
                      isReadOnly: N,
                    }),
                ],
              })
          : (0, n.jsx)('div', {
              className: 'rounded-md p-3 my-2',
              children: (0, n.jsxs)(m.aN, {
                className: 'px-6',
                children: [
                  (0, n.jsx)(m.aN.Item, { height: '30px' }),
                  (0, n.jsxs)('div', {
                    className: 'mt-3 space-y-2',
                    children: [
                      (0, n.jsx)(m.aN.Item, { height: '20px', width: '70%' }),
                      (0, n.jsx)(m.aN.Item, { height: '20px', width: '60%' }),
                    ],
                  }),
                ],
              }),
            });
      });
      var w = s(19823),
        b = s(31920),
        N = s(23258),
        k = s(6780),
        C = s(74273);
      let S = (0, r.Pi)(e => {
        let {
            editorRef: t,
            handleDuplicatePage: s,
            isSyncing: r,
            pageStore: a,
            projectId: o,
            readOnlyEditorRef: c,
          } = e,
          [d, u] = (0, i.useState)(!1),
          {
            config: { envConfig: h },
          } = (0, p.IX)(),
          {
            archived_at: x,
            isContentEditable: f,
            isSubmitting: v,
            is_locked: g,
          } = a,
          j = async e => {
            var s;
            t &&
              (null === (s = t.current) ||
                void 0 === s ||
                s.setEditorValueAtCursorPosition(e));
          };
        return (0, n.jsxs)('div', {
          className: 'flex flex-grow items-center justify-end gap-3',
          children: [
            f &&
              (0, n.jsxs)('div', {
                className: (0, k.cn)(
                  'fade-in flex items-center gap-x-2 transition-all duration-300',
                  { 'fade-out': 'saved' === v }
                ),
                children: [
                  'submitting' === v &&
                    (0, n.jsx)(w.Z, {
                      className: 'h-4 w-4 stroke-custom-text-300',
                    }),
                  (0, n.jsx)('span', {
                    className: 'text-sm text-custom-text-300',
                    children: 'submitting' === v ? 'Saving...' : 'Saved',
                  }),
                ],
              }),
            r &&
              (0, n.jsxs)('div', {
                className: 'flex items-center gap-x-2',
                children: [
                  (0, n.jsx)(w.Z, {
                    className: 'h-4 w-4 stroke-custom-text-300',
                  }),
                  (0, n.jsx)('span', {
                    className: 'text-sm text-custom-text-300',
                    children: 'Syncing...',
                  }),
                ],
              }),
            g &&
              (0, n.jsxs)('div', {
                className:
                  'flex h-7 items-center gap-2 rounded-full bg-custom-background-80 px-3 py-0.5 text-xs font-medium text-custom-text-300',
                children: [
                  (0, n.jsx)(l.Z, { className: 'h-3 w-3' }),
                  (0, n.jsx)('span', { children: 'Locked' }),
                ],
              }),
            x &&
              (0, n.jsxs)('div', {
                className:
                  'flex h-7 items-center gap-2 rounded-full bg-blue-500/20 px-3 py-0.5 text-xs font-medium text-blue-500',
                children: [
                  (0, n.jsx)(m.rK, { className: 'h-3 w-3' }),
                  (0, n.jsxs)('span', {
                    children: ['Archived at ', (0, C.ot)(x)],
                  }),
                ],
              }),
            f &&
              (null == h ? void 0 : h.has_openai_configured) &&
              (0, n.jsx)(N.TM, {
                isOpen: d,
                projectId: o,
                handleClose: () => {
                  u(e => !e);
                },
                onResponse: j,
                placement: 'top-end',
                button: (0, n.jsxs)('button', {
                  type: 'button',
                  className:
                    'flex items-center gap-1 rounded px-1.5 py-1 text-xs hover:bg-custom-background-90',
                  onClick: () => u(e => !e),
                  children: [(0, n.jsx)(b.Z, { className: 'h-4 w-4' }), 'AI'],
                }),
                className: '!min-w-[38rem]',
              }),
            (0, n.jsx)(O, { pageStore: a }),
            (0, n.jsx)(Z, {
              editorRef: f ? t.current : c.current,
              handleDuplicatePage: s,
              pageStore: a,
            }),
          ],
        });
      });
      var E = s(69570),
        I = s(19711),
        R = s(94743),
        P = s(17901);
      let O = e => {
        let { pageStore: t } = e,
          [s, r] = (0, i.useState)(!1),
          [l, a] = (0, i.useState)(null),
          [o, c] = (0, i.useState)(null),
          { styles: d, attributes: u } = (0, E.D)(l, o, {
            placement: 'bottom-start',
          }),
          { created_at: m, updated_at: h } = t;
        return (0, n.jsxs)('div', {
          onMouseEnter: () => r(!0),
          onMouseLeave: () => r(!1),
          children: [
            (0, n.jsx)('button', {
              type: 'button',
              ref: a,
              className: 'block',
              children: (0, n.jsx)(I.Z, { className: 'h-3.5 w-3.5' }),
            }),
            s &&
              (0, n.jsxs)('div', {
                className:
                  'z-10 w-64 space-y-2.5 rounded border-[0.5px] border-custom-border-200 bg-custom-background-100 p-3 shadow-custom-shadow-rg',
                ref: c,
                style: d.popper,
                ...u.popper,
                children: [
                  (0, n.jsxs)('div', {
                    className: 'space-y-1.5',
                    children: [
                      (0, n.jsx)('h6', {
                        className: 'text-xs text-custom-text-400',
                        children: 'Last updated on',
                      }),
                      (0, n.jsxs)('h5', {
                        className: 'flex items-center gap-1 text-sm',
                        children: [
                          (0, n.jsx)(R.Z, { className: 'h-3 w-3' }),
                          (0, C.ot)(h),
                        ],
                      }),
                    ],
                  }),
                  (0, n.jsxs)('div', {
                    className: 'space-y-1.5',
                    children: [
                      (0, n.jsx)('h6', {
                        className: 'text-xs text-custom-text-400',
                        children: 'Created on',
                      }),
                      (0, n.jsxs)('h5', {
                        className: 'flex items-center gap-1 text-sm',
                        children: [
                          (0, n.jsx)(P.Z, { className: 'h-3 w-3' }),
                          (0, C.ot)(m),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
          ],
        });
      };
      var _ = s(95665),
        D = s(32681),
        F = s(14178),
        M = s(15108);
      let A = () => {
          let { storedValue: e, setValue: t } = (0, M.Z)('page_full_width', !0);
          return { isFullWidth: !!e, handleFullWidth: e => t(e) };
        },
        Z = (0, r.Pi)(e => {
          let { editorRef: t, handleDuplicatePage: s, pageStore: i } = e,
            {
              archived_at: r,
              is_locked: a,
              id: o,
              archive: u,
              lock: x,
              unlock: f,
              canCurrentUserArchivePage: v,
              canCurrentUserDuplicatePage: g,
              canCurrentUserLockPage: j,
              restore: y,
            } = i,
            {
              router: { workspaceSlug: w, projectId: b },
            } = (0, p.IX)(),
            { isFullWidth: N, handleFullWidth: k } = A(),
            C = async () =>
              await u().catch(() =>
                (0, m.fz)({
                  type: m.do.ERROR,
                  title: 'Error!',
                  message:
                    'Page could not be archived. Please try again later.',
                })
              ),
            S = async () =>
              await y().catch(() =>
                (0, m.fz)({
                  type: m.do.ERROR,
                  title: 'Error!',
                  message:
                    'Page could not be restored. Please try again later.',
                })
              ),
            E = async () =>
              await x().catch(() =>
                (0, m.fz)({
                  type: m.do.ERROR,
                  title: 'Error!',
                  message: 'Page could not be locked. Please try again later.',
                })
              ),
            I = async () =>
              await f().catch(() =>
                (0, m.fz)({
                  type: m.do.ERROR,
                  title: 'Error!',
                  message:
                    'Page could not be unlocked. Please try again later.',
                })
              ),
            R = [
              {
                key: 'copy-markdown',
                action: () => {
                  t &&
                    (0, h.TE)(t.getMarkDown()).then(() =>
                      (0, m.fz)({
                        type: m.do.SUCCESS,
                        title: 'Success!',
                        message: 'Markdown copied to clipboard.',
                      })
                    );
                },
                label: 'Copy markdown',
                icon: _.Z,
                shouldRender: !0,
              },
              {
                key: 'copy-page-link',
                action: () => {
                  (0, h.fQ)(
                    ''.concat(w, '/projects/').concat(b, '/pages/').concat(o)
                  ).then(() =>
                    (0, m.fz)({
                      type: m.do.SUCCESS,
                      title: 'Success!',
                      message: 'Page link copied to clipboard.',
                    })
                  );
                },
                label: 'Copy page link',
                icon: c.Z,
                shouldRender: !0,
              },
              {
                key: 'make-a-copy',
                action: s,
                label: 'Make a copy',
                icon: D.Z,
                shouldRender: g,
              },
              {
                key: 'lock-unlock-page',
                action: a ? I : E,
                label: a ? 'Unlock page' : 'Lock page',
                icon: a ? F.Z : l.Z,
                shouldRender: j,
              },
              {
                key: 'archive-restore-page',
                action: r ? S : C,
                label: r ? 'Restore page' : 'Archive page',
                icon: r ? d.Z : m.rK,
                shouldRender: v,
              },
            ];
          return (0, n.jsxs)(m.fR, {
            maxHeight: 'md',
            placement: 'bottom-start',
            verticalEllipsis: !0,
            closeOnSelect: !0,
            children: [
              (0, n.jsxs)(m.fR.MenuItem, {
                className:
                  'hidden md:flex w-full items-center justify-between gap-2',
                onClick: () => k(!N),
                children: [
                  'Full width',
                  (0, n.jsx)(m.Zh, { value: N, onChange: () => {} }),
                ],
              }),
              R.map(e =>
                e.shouldRender
                  ? (0, n.jsxs)(
                      m.fR.MenuItem,
                      {
                        onClick: e.action,
                        className: 'flex items-center gap-2',
                        children: [
                          (0, n.jsx)(e.icon, { className: 'h-3 w-3' }),
                          e.label,
                        ],
                      },
                      e.key
                    )
                  : null
              ),
            ],
          });
        }),
        L = (0, r.Pi)(e => {
          let {
              editorRef: t,
              readOnlyEditorRef: s,
              editorReady: i,
              markings: r,
              readOnlyEditorReady: l,
              handleDuplicatePage: a,
              isSyncing: o,
              pageStore: c,
              projectId: d,
              sidePeekVisible: u,
              setSidePeekVisible: m,
            } = e,
            { isContentEditable: h } = c,
            { isFullWidth: p } = A();
          return t.current || s.current
            ? (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsxs)('div', {
                    className:
                      'hidden md:flex items-center border-b border-custom-border-200 px-3 py-2 md:px-5',
                    children: [
                      (0, n.jsx)('div', {
                        className: (0, k.cn)('flex-shrink-0', {
                          'w-40 lg:w-56': !p,
                          'w-[5%]': p,
                        }),
                        children: (0, n.jsx)(Q, {
                          editorRef: h ? t.current : s.current,
                          isFullWidth: p,
                          markings: r,
                          sidePeekVisible: u,
                          setSidePeekVisible: m,
                        }),
                      }),
                      (i || l) &&
                        h &&
                        t.current &&
                        (0, n.jsx)(U, {
                          editorRef: null == t ? void 0 : t.current,
                        }),
                      (0, n.jsx)(S, {
                        editorRef: t,
                        handleDuplicatePage: a,
                        isSyncing: o,
                        pageStore: c,
                        projectId: d,
                        readOnlyEditorRef: s,
                      }),
                    ],
                  }),
                  (0, n.jsx)('div', {
                    className: 'md:hidden',
                    children: (0, n.jsx)(T, {
                      editorRef: t,
                      readOnlyEditorRef: s,
                      editorReady: i,
                      readOnlyEditorReady: l,
                      markings: r,
                      handleDuplicatePage: a,
                      isSyncing: o,
                      pageStore: c,
                      projectId: d,
                      sidePeekVisible: u,
                      setSidePeekVisible: m,
                    }),
                  }),
                ],
              })
            : null;
        }),
        T = (0, r.Pi)(e => {
          let {
              editorRef: t,
              readOnlyEditorRef: s,
              editorReady: i,
              markings: r,
              readOnlyEditorReady: l,
              handleDuplicatePage: a,
              isSyncing: o,
              pageStore: c,
              projectId: d,
              sidePeekVisible: u,
              setSidePeekVisible: m,
            } = e,
            { isContentEditable: h } = c,
            { isFullWidth: p } = A();
          return t.current || s.current
            ? (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsxs)('div', {
                    className:
                      'flex items-center border-b border-custom-border-200 px-2 py-1',
                    children: [
                      (0, n.jsx)('div', {
                        className: 'flex-shrink-0',
                        children: (0, n.jsx)(Q, {
                          editorRef: h ? t.current : s.current,
                          isFullWidth: p,
                          markings: r,
                          sidePeekVisible: u,
                          setSidePeekVisible: m,
                        }),
                      }),
                      (0, n.jsx)(S, {
                        editorRef: t,
                        handleDuplicatePage: a,
                        isSyncing: o,
                        pageStore: c,
                        projectId: d,
                        readOnlyEditorRef: s,
                      }),
                    ],
                  }),
                  (0, n.jsx)('div', {
                    className: 'border-b border-custom-border-200 py-1 px-2',
                    children:
                      (i || l) &&
                      h &&
                      t.current &&
                      (0, n.jsx)(U, {
                        editorRef: null == t ? void 0 : t.current,
                      }),
                  }),
                ],
              })
            : null;
        });
      var H = s(65709),
        z = s(1759),
        V = s(12021);
      let q = i.memo(e => {
        let { item: t, isActive: s, executeCommand: i } = e;
        return (0, n.jsx)(m.u, {
          tooltipContent: (0, n.jsxs)('p', {
            className: 'flex flex-col gap-1 text-center text-xs',
            children: [
              (0, n.jsx)('span', {
                className: 'font-medium',
                children: t.name,
              }),
              t.shortcut &&
                (0, n.jsx)('kbd', {
                  className: 'text-custom-text-400',
                  children: t.shortcut.join(' + '),
                }),
            ],
          }),
          children: (0, n.jsx)(
            'button',
            {
              type: 'button',
              onClick: () => i(t.key),
              className: (0, k.cn)(
                'grid size-7 place-items-center rounded text-custom-text-300 hover:bg-custom-background-80',
                { 'bg-custom-background-80 text-custom-text-100': s }
              ),
              children: (0, n.jsx)(t.icon, {
                className: (0, k.cn)('size-4', { 'text-custom-text-100': s }),
              }),
            },
            t.key
          ),
        });
      });
      q.displayName = 'ToolbarButton';
      let Y = V.O.document,
        U = e => {
          let { editorRef: t } = e,
            [s, r] = (0, i.useState)({}),
            l = (0, i.useCallback)(() => {
              let e = {};
              Object.values(Y)
                .flat()
                .forEach(s => {
                  e[s.key] = t.isMenuItemActive(s.key);
                }),
                r(e);
            }, [t]);
          (0, i.useEffect)(() => {
            let e = t.onStateChange(l);
            return l(), () => e();
          }, [t, l]);
          let a = V.D.find(e => t.isMenuItemActive(e.key));
          return (0, n.jsxs)('div', {
            className:
              'flex flex-wrap items-center divide-x divide-custom-border-200',
            children: [
              (0, n.jsx)(m.fR, {
                customButton: (0, n.jsxs)('span', {
                  className:
                    'text-custom-text-300 text-sm border-[0.5px] border-custom-border-300 hover:bg-custom-background-80 h-7 w-24 rounded px-2 flex items-center justify-between gap-2 whitespace-nowrap text-left',
                  children: [
                    (null == a ? void 0 : a.name) || 'Text',
                    (0, n.jsx)(H.Z, { className: 'flex-shrink-0 size-3' }),
                  ],
                }),
                className: 'pr-2',
                placement: 'bottom-start',
                closeOnSelect: !0,
                maxHeight: 'lg',
                children: V.D.map(e =>
                  (0, n.jsxs)(
                    m.fR.MenuItem,
                    {
                      className: 'flex items-center justify-between gap-2',
                      onClick: () => t.executeMenuItemCommand(e.key),
                      children: [
                        (0, n.jsxs)('span', {
                          className: 'flex items-center gap-2',
                          children: [
                            (0, n.jsx)(e.icon, { className: 'size-3' }),
                            e.name,
                          ],
                        }),
                        (null == a ? void 0 : a.key) === e.key &&
                          (0, n.jsx)(z.Z, {
                            className:
                              'size-3 text-custom-text-300 flex-shrink-0',
                          }),
                      ],
                    },
                    e.key
                  )
                ),
              }),
              Object.keys(Y).map(e =>
                (0, n.jsx)(
                  'div',
                  {
                    className:
                      'flex items-center gap-0.5 px-2 first:pl-0 last:pr-0',
                    children: Y[e].map(e =>
                      (0, n.jsx)(
                        q,
                        {
                          item: e,
                          isActive: s[e.key],
                          executeCommand: t.executeMenuItemCommand,
                        },
                        e.key
                      )
                    ),
                  },
                  e
                )
              ),
            ],
          });
        },
        B = e => {
          let { marking: t, onClick: s } = e;
          return (0, n.jsx)('button', {
            type: 'button',
            onClick: s,
            className:
              'text-sm text-left font-medium text-custom-text-300 hover:text-custom-primary-100',
            children: t.text,
          });
        },
        K = e => {
          let { marking: t, onClick: s } = e;
          return (0, n.jsx)('button', {
            type: 'button',
            onClick: s,
            className:
              'ml-2 text-xs text-left font-medium text-custom-text-300 hover:text-custom-primary-100',
            children: t.text,
          });
        },
        W = e => {
          let { marking: t, onClick: s } = e;
          return (0, n.jsx)('button', {
            type: 'button',
            onClick: s,
            className:
              'ml-4 text-xs text-left font-medium text-custom-text-300 hover:text-custom-primary-100',
            children: t.text,
          });
        },
        G = e => {
          let { editorRef: t, markings: s, setSidePeekVisible: i } = e,
            r = e => {
              null == t || t.scrollSummary(e), i && i(!1);
            },
            l = { 1: B, 2: K, 3: W };
          return (0, n.jsx)('div', {
            className: 'h-full flex flex-col overflow-hidden',
            children: (0, n.jsx)('div', {
              className:
                'h-full flex flex-col items-start gap-y-2 overflow-y-auto mt-2',
              children:
                0 !== s.length
                  ? s.map(e => {
                      let t = l[e.level];
                      return t
                        ? (0, n.jsx)(
                            t,
                            { marking: e, onClick: () => r(e) },
                            ''.concat(e.level, '-').concat(e.sequence)
                          )
                        : null;
                    })
                  : (0, n.jsx)('p', {
                      className: 'mt-3 text-xs text-custom-text-400',
                      children:
                        'Headings will be displayed here for navigation',
                    }),
            }),
          });
        };
      var $ = s(58645);
      let Q = e => {
        let {
            editorRef: t,
            markings: s,
            sidePeekVisible: r,
            setSidePeekVisible: l,
          } = e,
          [a, o] = (0, i.useState)(null),
          [c, d] = (0, i.useState)(null),
          { styles: u, attributes: m } = (0, E.D)(a, c, {
            placement: 'bottom-start',
          });
        return (0, n.jsxs)('div', {
          className: 'group/summary-popover w-min whitespace-nowrap',
          children: [
            (0, n.jsx)('button', {
              type: 'button',
              ref: o,
              className: 'grid h-7 w-7 place-items-center rounded '.concat(
                r
                  ? 'bg-custom-primary-100/20 text-custom-primary-100'
                  : 'text-custom-text-300'
              ),
              onClick: () => l(!r),
              children: (0, n.jsx)($.Z, { className: 'h-4 w-4' }),
            }),
            (0, n.jsx)('div', {
              className: (0, k.cn)('block md:hidden', {}),
              children:
                r &&
                (0, n.jsx)('div', {
                  className:
                    'z-10 max-h-80 w-64 overflow-y-auto rounded border-[0.5px] border-custom-border-200 bg-custom-background-100 p-3 shadow-custom-shadow-rg',
                  ref: d,
                  style: u.popper,
                  ...m.popper,
                  children: (0, n.jsx)(G, {
                    setSidePeekVisible: l,
                    editorRef: t,
                    markings: s,
                  }),
                }),
            }),
            (0, n.jsx)('div', {
              className: 'hidden md:block',
              children:
                !r &&
                (0, n.jsx)('div', {
                  className:
                    'z-10 hidden max-h-80 w-64 overflow-y-auto rounded border-[0.5px] border-custom-border-200 bg-custom-background-100 p-3 shadow-custom-shadow-rg group-hover/summary-popover:block',
                  ref: d,
                  style: u.popper,
                  ...m.popper,
                  children: (0, n.jsx)(G, { editorRef: t, markings: s }),
                }),
            }),
          ],
        });
      };
      var J = s(86677),
        X = s(88039),
        ee = s(76796);
      let et = new (s(52306).P)(),
        es = (e, t) => ({
          fetchIssues: async s =>
            await et
              .searchEmbed(e, t, { query_type: 'issue', query: s, count: 10 })
              .then(e =>
                (null != e ? e : []).map(e => ({
                  id: e.id,
                  subTitle: ''
                    .concat(e.project__identifier, '-')
                    .concat(e.sequence_id),
                  title: e.name,
                  icon: (0, n.jsx)(m.bJ, { priority: e.priority }),
                }))
              )
              .catch(e => {
                throw Error(e);
              }),
        });
      var en = s(83114);
      let ei = new (s(44029).I)(),
        er = (0, r.Pi)(e => {
          var t, s, r, l, a, o, c, d;
          let {
              control: u,
              handleReadOnlyEditorReady: m,
              handleEditorReady: h,
              editorRef: x,
              markings: f,
              readOnlyEditorRef: v,
              handleSubmit: g,
              pageStore: j,
              swrPageDetails: w,
              sidePeekVisible: b,
              updateMarkings: N,
            } = e,
            { workspaceSlug: C, projectId: S } = (0, J.useRouter)().query,
            { currentUser: E } = (0, p.aF)(),
            { getWorkspaceBySlug: I } = (0, p.cF)(),
            {
              getUserDetails: R,
              project: { getProjectMemberIds: P },
            } = (0, p.Kb)(),
            O =
              C &&
              null !==
                (r =
                  null === (t = I(C.toString())) || void 0 === t
                    ? void 0
                    : t.id) &&
              void 0 !== r
                ? r
                : '',
            _ =
              null !== (l = null == j ? void 0 : j.name) && void 0 !== l
                ? l
                : '',
            D = null == j ? void 0 : j.description_html,
            {
              description_html: F,
              isContentEditable: M,
              updateTitle: Z,
              isSubmitting: L,
              setIsSubmitting: T,
            } = j,
            H = S ? P(S.toString()) : [],
            z = null == H ? void 0 : H.map(e => R(e)),
            { mentionHighlights: V, mentionSuggestions: q } = (0, p.W4)({
              workspaceSlug:
                null !== (a = null == C ? void 0 : C.toString()) && void 0 !== a
                  ? a
                  : '',
              projectId:
                null !== (o = null == S ? void 0 : S.toString()) && void 0 !== o
                  ? o
                  : '',
              members: z,
              user: null != E ? E : void 0,
            }),
            { isFullWidth: Y } = A(),
            { fetchIssues: U } = es(
              null !== (c = null == C ? void 0 : C.toString()) && void 0 !== c
                ? c
                : '',
              null !== (d = null == S ? void 0 : S.toString()) && void 0 !== d
                ? d
                : ''
            ),
            { setShowAlert: B } = (0, en.Z)('submitting' === L);
          (0, i.useEffect)(() => {
            N(null != F ? F : '<p></p>');
          }, [F, N]);
          let K = async e => await U(e);
          return void 0 === D
            ? (0, n.jsx)(eV, {})
            : (0, n.jsxs)('div', {
                className: 'flex items-center h-full w-full overflow-y-auto',
                children: [
                  (0, n.jsx)('div', {
                    className: (0, k.cn)(
                      'sticky top-0 hidden h-full flex-shrink-0 -translate-x-full p-5 duration-200 md:block',
                      { 'translate-x-0': b, 'w-40 lg:w-56': !Y, 'w-[5%]': Y }
                    ),
                    children:
                      !Y &&
                      (0, n.jsx)(G, {
                        editorRef:
                          null === (s = M ? x : v) || void 0 === s
                            ? void 0
                            : s.current,
                        markings: f,
                      }),
                  }),
                  (0, n.jsx)('div', {
                    className: (0, k.cn)('h-full w-full pt-5', {
                      'md:w-[calc(100%-10rem)] xl:w-[calc(100%-14rem-14rem)]':
                        !Y,
                      'md:w-[90%]': Y,
                    }),
                    children: (0, n.jsxs)('div', {
                      className:
                        'h-full w-full flex flex-col gap-y-7 overflow-y-auto overflow-x-hidden',
                      children: [
                        (0, n.jsx)('div', {
                          className:
                            'relative w-full flex-shrink-0 md:pl-5 px-4',
                          children: (0, n.jsx)(el, {
                            editorRef: x,
                            title: _,
                            updateTitle: Z,
                            readOnly: !M,
                          }),
                        }),
                        M
                          ? (0, n.jsx)(X.Qr, {
                              name: 'description_html',
                              control: u,
                              render: e => {
                                var t;
                                let {
                                  field: { onChange: s },
                                } = e;
                                return (0, n.jsx)(ee.xl, {
                                  fileHandler: {
                                    cancel: ei.cancelUpload,
                                    delete: ei.getDeleteImageFunction(O),
                                    restore: ei.getRestoreImageFunction(O),
                                    upload: ei.getUploadFileFunction(C, T),
                                  },
                                  handleEditorReady: h,
                                  initialValue: null != D ? D : '<p></p>',
                                  value:
                                    null !==
                                      (t =
                                        null == w
                                          ? void 0
                                          : w.description_html) && void 0 !== t
                                      ? t
                                      : '<p></p>',
                                  ref: x,
                                  containerClassName: 'p-0 pb-64',
                                  editorClassName: 'lg:px-10 pl-8',
                                  onChange: (e, t) => {
                                    T('submitting'), B(!0), s(t), g();
                                  },
                                  mentionHandler: {
                                    highlights: V,
                                    suggestions: q,
                                  },
                                  embedHandler: {
                                    issue: {
                                      searchCallback: async e =>
                                        new Promise(t => {
                                          setTimeout(async () => {
                                            t(await K(e));
                                          }, 300);
                                        }),
                                      widgetCallback: e => {
                                        var t, s;
                                        return (0, n.jsx)(y, {
                                          issueId: e,
                                          projectId:
                                            null !==
                                              (t =
                                                null == S
                                                  ? void 0
                                                  : S.toString()) &&
                                            void 0 !== t
                                              ? t
                                              : '',
                                          workspaceSlug:
                                            null !==
                                              (s =
                                                null == C
                                                  ? void 0
                                                  : C.toString()) &&
                                            void 0 !== s
                                              ? s
                                              : '',
                                        });
                                      },
                                    },
                                  },
                                });
                              },
                            })
                          : (0, n.jsx)(ee.Q, {
                              ref: v,
                              initialValue: null != D ? D : '<p></p>',
                              handleEditorReady: m,
                              containerClassName: 'p-0 pb-64 border-none',
                              editorClassName: 'lg:px-10 pl-8',
                              mentionHandler: { highlights: V },
                              embedHandler: {
                                issue: {
                                  widgetCallback: e => {
                                    var t, s;
                                    return (0, n.jsx)(y, {
                                      issueId: e,
                                      projectId:
                                        null !==
                                          (t =
                                            null == S
                                              ? void 0
                                              : S.toString()) && void 0 !== t
                                          ? t
                                          : '',
                                      workspaceSlug:
                                        null !==
                                          (s =
                                            null == C
                                              ? void 0
                                              : C.toString()) && void 0 !== s
                                          ? s
                                          : '',
                                    });
                                  },
                                },
                              },
                            }),
                      ],
                    }),
                  }),
                  (0, n.jsx)('div', {
                    className: (0, k.cn)('hidden xl:block flex-shrink-0', {
                      'w-40 lg:w-56': !Y,
                      'w-[5%]': Y,
                    }),
                  }),
                ],
              });
        }),
        el = (0, r.Pi)(e => {
          let { editorRef: t, readOnly: s, title: r, updateTitle: l } = e,
            [a, o] = (0, i.useState)(!1);
          return (0, n.jsx)(n.Fragment, {
            children: s
              ? (0, n.jsx)('h6', {
                  className:
                    'break-words bg-transparent text-[1.75rem] font-semibold',
                  style: { lineHeight: '1.2' },
                  children: r,
                })
              : (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)(m.Kx, {
                      onChange: e => l(e.target.value),
                      className:
                        'w-full bg-custom-background text-[1.75rem] font-semibold outline-none p-0 border-none resize-none rounded-none',
                      style: { lineHeight: '1.2' },
                      placeholder: 'Untitled Page',
                      onKeyDown: e => {
                        if ('Enter' === e.key) {
                          var s;
                          e.preventDefault(),
                            null === (s = t.current) ||
                              void 0 === s ||
                              s.setFocusAtPosition(0);
                        }
                      },
                      value: r,
                      maxLength: 255,
                      onFocus: () => o(!0),
                      onBlur: () => o(!1),
                    }),
                    (0, n.jsxs)('div', {
                      className: (0, k.cn)(
                        'pointer-events-none absolute bottom-1 right-1 z-[2] rounded bg-custom-background-100 p-0.5 text-xs text-custom-text-200 opacity-0 transition-opacity',
                        { 'opacity-100': a }
                      ),
                      children: [
                        (0, n.jsx)('span', {
                          className: (0, k.cn)({
                            'text-red-500': 0 === r.length || r.length > 255,
                          }),
                          children: r.length,
                        }),
                        '/255',
                      ],
                    }),
                  ],
                }),
          });
        });
      var ea = s(64273),
        eo = s(68114),
        ec = s(1422);
      let ed = (0, r.Pi)(e => {
        var t, s, r;
        let { pageType: l, projectId: a, workspaceSlug: o } = e,
          { filters: c, updateFilters: d, clearAllFilters: u } = (0, p.qm)(a),
          {
            workspace: { workspaceMemberIds: m },
          } = (0, p.Kb)(),
          h = (0, i.useCallback)(
            (e, t) => {
              var s;
              let n = null === (s = c.filters) || void 0 === s ? void 0 : s[e];
              'favorites' === e && (n = !!t),
                Array.isArray(n) && (n = t ? n.filter(e => e !== t) : []),
                d('filters', { [e]: n });
            },
            [c.filters, d]
          ),
          x =
            0 !==
            (0, ec.w)(
              null !== (t = null == c ? void 0 : c.filters) && void 0 !== t
                ? t
                : {}
            );
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)('div', {
              className:
                'flex-shrink-0 h-[50px] w-full border-b border-custom-border-200 px-6 relative flex items-center gap-4 justify-between',
              children: [
                (0, n.jsx)(ez, { workspaceSlug: o, projectId: a, pageType: l }),
                (0, n.jsxs)('div', {
                  className: 'h-full flex items-center gap-2 self-end',
                  children: [
                    (0, n.jsx)(eZ, { projectId: a }),
                    (0, n.jsx)(eF, {
                      sortBy: c.sortBy,
                      sortKey: c.sortKey,
                      onChange: e => {
                        e.key && d('sortKey', e.key),
                          e.order && d('sortBy', e.order);
                      },
                    }),
                    (0, n.jsx)(eo.lqY, {
                      icon: (0, n.jsx)(ea.Z, { className: 'h-3 w-3' }),
                      title: 'Filters',
                      placement: 'bottom-end',
                      isFiltersApplied: x,
                      children: (0, n.jsx)(ek, {
                        filters: c,
                        handleFiltersUpdate: d,
                        memberIds: null != m ? m : void 0,
                      }),
                    }),
                  ],
                }),
              ],
            }),
            0 !==
              (0, ec.w)(
                null !== (s = null == c ? void 0 : c.filters) && void 0 !== s
                  ? s
                  : {}
              ) &&
              (0, n.jsx)('div', {
                className: 'border-b border-custom-border-200 px-5 py-3',
                children: (0, n.jsx)(eg, {
                  appliedFilters:
                    null !== (r = c.filters) && void 0 !== r ? r : {},
                  handleClearAllFilters: u,
                  handleRemoveFilter: h,
                  alwaysAllowEditing: !0,
                }),
              }),
          ],
        });
      });
      var eu = s(43659),
        em = s(82558),
        eh = s(60801);
      let ep = (0, eu.Pi)(e => {
          let { editable: t, handleRemove: s, values: i } = e,
            r = e => {
              let t = '',
                s = eh.kB.find(t => t.value === e);
              if (s) t = s.name;
              else {
                let s = e.split(';');
                if (2 === s.length) {
                  let [e, n] = s;
                  t = ''.concat((0, h.fm)(n), ' ').concat((0, C.ot)(e));
                }
              }
              return t;
            };
          return (0, n.jsx)(n.Fragment, {
            children: i.map(e =>
              (0, n.jsxs)(
                'div',
                {
                  className:
                    'flex items-center gap-1 rounded bg-custom-background-80 p-1 text-xs',
                  children: [
                    (0, n.jsx)('span', {
                      className: 'normal-case',
                      children: r(e),
                    }),
                    t &&
                      (0, n.jsx)('button', {
                        type: 'button',
                        className:
                          'grid place-items-center text-custom-text-300 hover:text-custom-text-200',
                        onClick: () => s(e),
                        children: (0, n.jsx)(em.Z, {
                          size: 10,
                          strokeWidth: 2,
                        }),
                      }),
                  ],
                },
                e
              )
            ),
          });
        }),
        ex = (0, eu.Pi)(e => {
          let { handleRemove: t, values: s, editable: i } = e,
            {
              workspace: { getWorkspaceMemberDetails: r },
            } = (0, p.Kb)();
          return (0, n.jsx)(n.Fragment, {
            children: s.map(e => {
              var s;
              let l = null === (s = r(e)) || void 0 === s ? void 0 : s.member;
              return l
                ? (0, n.jsxs)(
                    'div',
                    {
                      className:
                        'flex items-center gap-1 rounded bg-custom-background-80 p-1 text-xs',
                      children: [
                        (0, n.jsx)(m.qE, {
                          name: l.display_name,
                          src: l.avatar,
                          showTooltip: !1,
                        }),
                        (0, n.jsx)('span', {
                          className: 'normal-case',
                          children: l.display_name,
                        }),
                        i &&
                          (0, n.jsx)('button', {
                            type: 'button',
                            className:
                              'grid place-items-center text-custom-text-300 hover:text-custom-text-200',
                            onClick: () => t(e),
                            children: (0, n.jsx)(em.Z, {
                              size: 10,
                              strokeWidth: 2,
                            }),
                          }),
                      ],
                    },
                    e
                  )
                : null;
            }),
          });
        }),
        ef = ['created_by'],
        ev = ['created_at'],
        eg = e => {
          let {
            appliedFilters: t,
            handleClearAllFilters: s,
            handleRemoveFilter: i,
            alwaysAllowEditing: r,
          } = e;
          return t && 0 !== Object.keys(t).length
            ? (0, n.jsxs)('div', {
                className:
                  'flex flex-wrap items-stretch gap-2 bg-custom-background-100',
                children: [
                  Object.entries(t).map(e => {
                    let [t, s] = e;
                    if (s && (!Array.isArray(s) || 0 !== s.length))
                      return (0, n.jsx)(
                        'div',
                        {
                          className:
                            'flex flex-wrap items-center gap-2 rounded-md border border-custom-border-200 px-2 py-1 capitalize',
                          children: (0, n.jsxs)('div', {
                            className: 'flex flex-wrap items-center gap-1.5',
                            children: [
                              (0, n.jsx)('span', {
                                className: 'text-xs text-custom-text-300',
                                children: (0, h.y2)(t),
                              }),
                              ev.includes(t) &&
                                (0, n.jsx)(ep, {
                                  editable: r,
                                  handleRemove: e => i(t, e),
                                  values: Array.isArray(s) ? s : [],
                                }),
                              ef.includes(t) &&
                                (0, n.jsx)(ex, {
                                  editable: r,
                                  handleRemove: e => i(t, e),
                                  values: Array.isArray(s) ? s : [],
                                }),
                              r &&
                                (0, n.jsx)('button', {
                                  type: 'button',
                                  className:
                                    'grid place-items-center text-custom-text-300 hover:text-custom-text-200',
                                  onClick: () => i(t, null),
                                  children: (0, n.jsx)(em.Z, {
                                    size: 12,
                                    strokeWidth: 2,
                                  }),
                                }),
                            ],
                          }),
                        },
                        t
                      );
                  }),
                  r &&
                    (0, n.jsxs)('button', {
                      type: 'button',
                      onClick: s,
                      className:
                        'flex items-center gap-2 rounded-md border border-custom-border-200 px-2 py-1 text-xs text-custom-text-300 hover:text-custom-text-200',
                      children: [
                        'Clear all',
                        (0, n.jsx)(em.Z, { size: 12, strokeWidth: 2 }),
                      ],
                    }),
                ],
              })
            : null;
        },
        ej = (0, eu.Pi)(e => {
          var t;
          let { appliedFilters: s, handleUpdate: r, searchQuery: l } = e,
            [a, o] = (0, i.useState)(!0),
            [c, d] = (0, i.useState)(!1),
            u =
              null !== (t = null == s ? void 0 : s.length) && void 0 !== t
                ? t
                : 0,
            m = eh.kB.filter(e =>
              e.name.toLowerCase().includes(l.toLowerCase())
            ),
            h = () =>
              (
                (null == s
                  ? void 0
                  : s.filter(e => (0, C.hc)(e.split(';')[0]))) || []
              ).length > 0;
          return (0, n.jsxs)(n.Fragment, {
            children: [
              c &&
                (0, n.jsx)(N.iF, {
                  handleClose: () => d(!1),
                  isOpen: c,
                  onSelect: e => r(e),
                  title: 'Created date',
                }),
              (0, n.jsx)(eo.YHs, {
                title: 'Created date'.concat(u > 0 ? ' ('.concat(u, ')') : ''),
                isPreviewEnabled: a,
                handleIsPreviewEnabled: () => o(!a),
              }),
              a &&
                (0, n.jsx)('div', {
                  children:
                    m.length > 0
                      ? (0, n.jsxs)(n.Fragment, {
                          children: [
                            m.map(e =>
                              (0, n.jsx)(
                                eo.f2,
                                {
                                  isChecked: null != s && !!s.includes(e.value),
                                  onClick: () => r(e.value),
                                  title: e.name,
                                  multiple: !0,
                                },
                                e.value
                              )
                            ),
                            (0, n.jsx)(eo.f2, {
                              isChecked: h(),
                              onClick: () => {
                                h()
                                  ? r(
                                      (null == s
                                        ? void 0
                                        : s.filter(e => e.includes('-'))) || []
                                    )
                                  : d(!0);
                              },
                              title: 'Custom',
                              multiple: !0,
                            }),
                          ],
                        })
                      : (0, n.jsx)('p', {
                          className: 'text-xs italic text-custom-text-400',
                          children: 'No matches found',
                        }),
                }),
            ],
          });
        });
      var ey = s(95099),
        ew = s.n(ey);
      let eb = (0, eu.Pi)(e => {
        var t;
        let {
            appliedFilters: s,
            handleUpdate: r,
            memberIds: l,
            searchQuery: a,
          } = e,
          [o, c] = (0, i.useState)(5),
          [d, u] = (0, i.useState)(!0),
          { getUserDetails: h } = (0, p.Kb)(),
          { currentUser: x } = (0, p.aF)(),
          f =
            null !== (t = null == s ? void 0 : s.length) && void 0 !== t
              ? t
              : 0,
          v = (0, i.useMemo)(() => {
            let e = (l || []).filter(e => {
              var t;
              return null === (t = h(e)) || void 0 === t
                ? void 0
                : t.display_name.toLowerCase().includes(a.toLowerCase());
            });
            return ew()(e, [
              e => !(null != s ? s : []).includes(e),
              e => e !== (null == x ? void 0 : x.id),
              e => {
                var t;
                return null === (t = h(e)) || void 0 === t
                  ? void 0
                  : t.display_name.toLowerCase();
              },
            ]);
          }, [a]);
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(eo.YHs, {
              title: 'Created by'.concat(f > 0 ? ' ('.concat(f, ')') : ''),
              isPreviewEnabled: d,
              handleIsPreviewEnabled: () => u(!d),
            }),
            d &&
              (0, n.jsx)('div', {
                children: v
                  ? v.length > 0
                    ? (0, n.jsxs)(n.Fragment, {
                        children: [
                          v.slice(0, o).map(e => {
                            let t = h(e);
                            return t
                              ? (0, n.jsx)(
                                  eo.f2,
                                  {
                                    isChecked: null != s && !!s.includes(t.id),
                                    onClick: () => r(t.id),
                                    icon: (0, n.jsx)(m.qE, {
                                      name: t.display_name,
                                      src: t.avatar,
                                      showTooltip: !1,
                                      size: 'md',
                                    }),
                                    title:
                                      (null == x ? void 0 : x.id) === t.id
                                        ? 'You'
                                        : null == t
                                          ? void 0
                                          : t.display_name,
                                  },
                                  'member-'.concat(t.id)
                                )
                              : null;
                          }),
                          v.length > 5 &&
                            (0, n.jsx)('button', {
                              type: 'button',
                              className:
                                'ml-8 text-xs font-medium text-custom-primary-100',
                              onClick: () => {
                                v && (o === v.length ? c(5) : c(v.length));
                              },
                              children:
                                o === v.length ? 'View less' : 'View all',
                            }),
                        ],
                      })
                    : (0, n.jsx)('p', {
                        className: 'text-xs italic text-custom-text-400',
                        children: 'No matches found',
                      })
                  : (0, n.jsxs)(m.aN, {
                      className: 'space-y-2',
                      children: [
                        (0, n.jsx)(m.aN.Item, { height: '20px' }),
                        (0, n.jsx)(m.aN.Item, { height: '20px' }),
                        (0, n.jsx)(m.aN.Item, { height: '20px' }),
                      ],
                    }),
              }),
          ],
        });
      });
      var eN = s(81630);
      let ek = (0, eu.Pi)(e => {
        var t, s, r, l, a;
        let { filters: o, handleFiltersUpdate: c, memberIds: d } = e,
          [u, m] = (0, i.useState)(''),
          h = (e, t) => {
            var s, n;
            let i =
              null !==
                (n =
                  null === (s = o.filters) || void 0 === s ? void 0 : s[e]) &&
              void 0 !== n
                ? n
                : [];
            ('boolean' != typeof i || 'boolean' != typeof t) &&
              (Array.isArray(i) &&
                (Array.isArray(t)
                  ? t.forEach(e => {
                      i.includes(e) ? i.splice(i.indexOf(e), 1) : i.push(e);
                    })
                  : 'string' == typeof t &&
                    ((null == i ? void 0 : i.includes(t))
                      ? i.splice(i.indexOf(t), 1)
                      : i.push(t))),
              c('filters', { ...o.filters, [e]: i }));
          };
        return (0, n.jsxs)('div', {
          className: 'flex h-full w-full flex-col overflow-hidden',
          children: [
            (0, n.jsx)('div', {
              className: 'bg-custom-background-100 p-2.5 pb-0',
              children: (0, n.jsxs)('div', {
                className:
                  'flex items-center gap-1.5 rounded border-[0.5px] border-custom-border-200 bg-custom-background-90 px-1.5 py-1 text-xs',
                children: [
                  (0, n.jsx)(eN.Z, {
                    className: 'text-custom-text-400',
                    size: 12,
                    strokeWidth: 2,
                  }),
                  (0, n.jsx)('input', {
                    type: 'text',
                    className:
                      'w-full bg-custom-background-90 outline-none placeholder:text-custom-text-400',
                    placeholder: 'Search',
                    value: u,
                    onChange: e => m(e.target.value),
                    autoFocus: !0,
                  }),
                  '' !== u &&
                    (0, n.jsx)('button', {
                      type: 'button',
                      className: 'grid place-items-center',
                      onClick: () => m(''),
                      children: (0, n.jsx)(em.Z, {
                        className: 'text-custom-text-300',
                        size: 12,
                        strokeWidth: 2,
                      }),
                    }),
                ],
              }),
            }),
            (0, n.jsxs)('div', {
              className:
                'h-full w-full divide-y divide-custom-border-200 overflow-y-auto px-2.5 vertical-scrollbar scrollbar-sm',
              children: [
                (0, n.jsx)('div', {
                  className: 'py-2',
                  children: (0, n.jsx)(eo.f2, {
                    isChecked: !!(null === (t = o.filters) || void 0 === t
                      ? void 0
                      : t.favorites),
                    onClick: () => {
                      var e;
                      return c('filters', {
                        ...o.filters,
                        favorites: !(null === (e = o.filters) || void 0 === e
                          ? void 0
                          : e.favorites),
                      });
                    },
                    title: 'Favorites',
                  }),
                }),
                (0, n.jsx)('div', {
                  className: 'py-2',
                  children: (0, n.jsx)(ej, {
                    appliedFilters:
                      null !==
                        (l =
                          null === (s = o.filters) || void 0 === s
                            ? void 0
                            : s.created_at) && void 0 !== l
                        ? l
                        : null,
                    handleUpdate: e => h('created_at', e),
                    searchQuery: u,
                  }),
                }),
                (0, n.jsx)('div', {
                  className: 'py-2',
                  children: (0, n.jsx)(eb, {
                    appliedFilters:
                      null !==
                        (a =
                          null === (r = o.filters) || void 0 === r
                            ? void 0
                            : r.created_by) && void 0 !== a
                        ? a
                        : null,
                    handleUpdate: e => h('created_by', e),
                    searchQuery: u,
                    memberIds: d,
                  }),
                }),
              ],
            }),
          ],
        });
      });
      var eC = s(4314),
        eS = s(18894);
      let eE = (0, r.Pi)(e => {
        let { workspaceSlug: t, projectId: s, pageId: r } = e,
          l = (0, i.useRef)(null),
          { name: a } = (0, p.qt)(r),
          { isMobile: o } = (0, eS.L)();
        return (0, n.jsx)(eC.H, {
          title: null != a ? a : '',
          itemLink: '/'.concat(t, '/projects/').concat(s, '/pages/').concat(r),
          actionableItems: (0, n.jsx)(eO, {
            workspaceSlug: t,
            projectId: s,
            pageId: r,
            parentRef: l,
          }),
          isMobile: o,
          parentRef: l,
        });
      });
      var eI = s(3807),
        eR = s(80372),
        eP = s(62253);
      let eO = (0, r.Pi)(e => {
        let { workspaceSlug: t, projectId: s, pageId: i, parentRef: r } = e,
          {
            access: a,
            created_at: o,
            is_favorite: c,
            owned_by: d,
            addToFavorites: u,
            removeFromFavorites: h,
          } = (0, p.qt)(i),
          { getUserDetails: f } = (0, p.Kb)(),
          v = d ? f(d) : void 0,
          g = () => {
            c
              ? h().then(() =>
                  (0, m.fz)({
                    type: m.do.SUCCESS,
                    title: 'Success!',
                    message: 'Page removed from favorites.',
                  })
                )
              : u().then(() =>
                  (0, m.fz)({
                    type: m.do.SUCCESS,
                    title: 'Success!',
                    message: 'Page added to favorites.',
                  })
                );
          };
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)('div', {
              className: 'flex items-center gap-2 text-custom-text-400',
              children: [
                (0, n.jsx)('div', {
                  className: 'cursor-default',
                  children: (0, n.jsx)(m.u, {
                    tooltipHeading: 'Owned by',
                    tooltipContent: null == v ? void 0 : v.display_name,
                    children: (0, n.jsx)(m.qE, {
                      src: null == v ? void 0 : v.avatar,
                      name: null == v ? void 0 : v.display_name,
                    }),
                  }),
                }),
                (0, n.jsx)(eI.Z, { className: 'h-1 w-1 fill-custom-text-300' }),
                (0, n.jsx)('div', {
                  className: 'cursor-default',
                  children: (0, n.jsx)(m.u, {
                    tooltipContent: 0 === a ? 'Public' : 'Private',
                    children:
                      0 === a
                        ? (0, n.jsx)(eR.Z, { className: 'h-3 w-3' })
                        : (0, n.jsx)(l.Z, { className: 'h-3 w-3' }),
                  }),
                }),
              ],
            }),
            (0, n.jsx)(eP.Z, {
              className: 'h-5 w-5 text-custom-text-400 rotate-90 -mx-3',
              strokeWidth: 1,
            }),
            (0, n.jsx)(m.u, {
              tooltipContent: 'Created on '.concat((0, C.ot)(o)),
              children: (0, n.jsx)('span', {
                className: 'h-4 w-4 grid place-items-center cursor-default',
                children: (0, n.jsx)(I.Z, {
                  className: 'h-4 w-4 text-custom-text-300',
                }),
              }),
            }),
            (0, n.jsx)(N.MD, {
              onClick: e => {
                e.preventDefault(), e.stopPropagation(), g();
              },
              selected: c,
            }),
            (0, n.jsx)(x, {
              parentRef: r,
              pageId: i,
              projectId: s,
              workspaceSlug: t,
            }),
          ],
        });
      });
      var e_ = s(91603),
        eD = s(74647);
      let eF = e => {
          let { onChange: t, sortBy: s, sortKey: i } = e,
            r = eD.Su.find(e => i === e.key),
            l = 'desc' === s;
          return (0, n.jsxs)(m.fR, {
            customButton: (0, n.jsxs)('div', {
              className: (0, k.cn)(
                (0, m.A6)('neutral-primary', 'sm'),
                'px-2 text-custom-text-300'
              ),
              children: [
                (0, n.jsx)(e_.Z, { className: 'h-3 w-3' }),
                null == r ? void 0 : r.label,
                (0, n.jsx)(H.Z, { className: 'h-3 w-3', strokeWidth: 2 }),
              ],
            }),
            placement: 'bottom-end',
            maxHeight: 'lg',
            closeOnSelect: !0,
            children: [
              eD.Su.map(e =>
                (0, n.jsxs)(
                  m.fR.MenuItem,
                  {
                    className: 'flex items-center justify-between gap-2',
                    onClick: () => t({ key: e.key }),
                    children: [
                      e.label,
                      i === e.key && (0, n.jsx)(z.Z, { className: 'h-3 w-3' }),
                    ],
                  },
                  e.key
                )
              ),
              (0, n.jsx)('hr', { className: 'my-2 border-custom-border-200' }),
              (0, n.jsxs)(m.fR.MenuItem, {
                className: 'flex items-center justify-between gap-2',
                onClick: () => {
                  l && t({ order: 'asc' });
                },
                children: [
                  'Ascending',
                  !l && (0, n.jsx)(z.Z, { className: 'h-3 w-3' }),
                ],
              }),
              (0, n.jsxs)(m.fR.MenuItem, {
                className: 'flex items-center justify-between gap-2',
                onClick: () => {
                  l || t({ order: 'desc' });
                },
                children: [
                  'Descending',
                  l && (0, n.jsx)(z.Z, { className: 'h-3 w-3' }),
                ],
              }),
            ],
          });
        },
        eM = (0, r.Pi)(e => {
          let { pageType: t, projectId: s, workspaceSlug: i } = e,
            { getCurrentProjectFilteredPageIds: r } = (0, p.qm)(s),
            l = r(t);
          return l
            ? (0, n.jsx)(eC.P, {
                children: l.map(e =>
                  (0, n.jsx)(
                    eE,
                    { workspaceSlug: i, projectId: s, pageId: e },
                    e
                  )
                ),
              })
            : (0, n.jsx)(n.Fragment, {});
        });
      var eA = s(42683);
      let eZ = (0, eu.Pi)(e => {
        let { projectId: t } = e,
          {
            filters: { searchQuery: s },
            updateFilters: r,
          } = (0, p.qm)(t),
          [l, a] = (0, i.useState)(!1),
          o = (0, i.useRef)(null);
        return (
          (0, eA.Z)(o, () => {
            l && '' === s.trim() && a(!1);
          }),
          (0, n.jsxs)(n.Fragment, {
            children: [
              !l &&
                (0, n.jsx)('button', {
                  type: 'button',
                  className:
                    'flex-shrink-0 hover:bg-custom-background-80 rounded text-custom-text-400 relative flex justify-center items-center w-6 h-6',
                  onClick: () => {
                    var e;
                    a(!0),
                      null === (e = o.current) || void 0 === e || e.focus();
                  },
                  children: (0, n.jsx)(eN.Z, { className: 'h-3.5 w-3.5' }),
                }),
              (0, n.jsxs)('div', {
                className: (0, k.cn)(
                  'ml-auto flex items-center justify-start gap-1 rounded-md border border-transparent bg-custom-background-100 text-custom-text-400 w-0 transition-[width] ease-linear overflow-hidden opacity-0',
                  {
                    'w-64 px-2.5 py-1.5 border-custom-border-200 opacity-100':
                      l,
                  }
                ),
                children: [
                  (0, n.jsx)(eN.Z, { className: 'h-3.5 w-3.5' }),
                  (0, n.jsx)('input', {
                    ref: o,
                    className:
                      'w-full max-w-[234px] border-none bg-transparent text-sm text-custom-text-100 placeholder:text-custom-text-400 focus:outline-none',
                    placeholder: 'Search pages',
                    value: s,
                    onChange: e => r('searchQuery', e.target.value),
                    onKeyDown: e => {
                      if ('Escape' === e.key) {
                        if (s && '' !== s.trim()) r('searchQuery', '');
                        else {
                          var t;
                          a(!1),
                            null === (t = o.current) ||
                              void 0 === t ||
                              t.blur();
                        }
                      }
                    },
                  }),
                  l &&
                    (0, n.jsx)('button', {
                      type: 'button',
                      className: 'grid place-items-center',
                      onClick: () => {
                        r('searchQuery', ''), a(!1);
                      },
                      children: (0, n.jsx)(em.Z, { className: 'h-3 w-3' }),
                    }),
                ],
              }),
            ],
          })
        );
      });
      var eL = s(79894),
        eT = s.n(eL);
      let eH = [
          { key: 'public', label: 'Public' },
          { key: 'private', label: 'Private' },
          { key: 'archived', label: 'Archived' },
        ],
        ez = e => {
          let { workspaceSlug: t, projectId: s, pageType: i } = e,
            r = (e, t) => {
              t === i && e.preventDefault();
            };
          return (0, n.jsx)('div', {
            className: 'relative flex items-center',
            children: eH.map(e =>
              (0, n.jsxs)(
                eT(),
                {
                  href: '/'
                    .concat(t, '/projects/')
                    .concat(s, '/pages?type=')
                    .concat(e.key),
                  onClick: t => r(t, e.key),
                  children: [
                    (0, n.jsx)('span', {
                      className: (0, k.cn)(
                        'block p-3 py-4 text-sm font-medium transition-all',
                        { 'text-custom-primary-100': e.key === i }
                      ),
                      children: e.label,
                    }),
                    (0, n.jsx)('div', {
                      className: (0, k.cn)(
                        'rounded-t border-t-2 transition-all border-transparent',
                        { 'border-custom-primary-100': e.key === i }
                      ),
                    }),
                  ],
                },
                e.key
              )
            ),
          });
        },
        eV = () =>
          (0, n.jsxs)('div', {
            className: 'flex',
            children: [
              (0, n.jsx)('div', { className: 'w-[5%]' }),
              (0, n.jsxs)(m.aN, {
                className: 'flex-shrink-0 flex-grow',
                children: [
                  (0, n.jsxs)('div', {
                    className: 'mt-10 space-y-2',
                    children: [
                      (0, n.jsx)(m.aN.Item, { height: '20px' }),
                      (0, n.jsx)(m.aN.Item, { height: '20px', width: '80%' }),
                      (0, n.jsx)(m.aN.Item, { height: '20px', width: '80%' }),
                    ],
                  }),
                  (0, n.jsx)('div', {
                    className: 'mt-12 space-y-10',
                    children: Array.from([, , , ,]).map(e =>
                      (0, n.jsxs)(
                        'div',
                        {
                          children: [
                            (0, n.jsx)(m.aN.Item, {
                              height: '25px',
                              width: '20%',
                            }),
                            (0, n.jsxs)('div', {
                              className: 'mt-5 space-y-3',
                              children: [
                                (0, n.jsx)(m.aN.Item, {
                                  height: '15px',
                                  width: '40%',
                                }),
                                (0, n.jsx)(m.aN.Item, {
                                  height: '15px',
                                  width: '30%',
                                }),
                                (0, n.jsx)(m.aN.Item, {
                                  height: '15px',
                                  width: '35%',
                                }),
                              ],
                            }),
                          ],
                        },
                        e
                      )
                    ),
                  }),
                ],
              }),
              (0, n.jsx)('div', { className: 'w-[5%]' }),
            ],
          }),
        eq = e => {
          let {} = e;
          return (0, n.jsxs)('div', {
            className: 'relative w-full h-full flex flex-col',
            children: [
              (0, n.jsx)('div', {
                className: 'px-3 border-b border-custom-border-100 py-3',
                children: (0, n.jsxs)(m.aN, {
                  className: 'relative flex items-center gap-2',
                  children: [
                    (0, n.jsx)(m.aN.Item, { width: '200px', height: '30px' }),
                    (0, n.jsxs)('div', {
                      className: 'relative flex items-center gap-2 ml-auto',
                      children: [
                        (0, n.jsx)(m.aN.Item, {
                          width: '100px',
                          height: '30px',
                        }),
                        (0, n.jsx)(m.aN.Item, {
                          width: '100px',
                          height: '30px',
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, n.jsx)('div', {
                children: Array.from(Array(10)).map(e =>
                  (0, n.jsxs)(
                    m.aN,
                    {
                      className:
                        'relative flex items-center gap-2 p-3 py-4 border-b border-custom-border-100',
                      children: [
                        (0, n.jsx)(m.aN.Item, {
                          width: ''.concat(
                            250 + 10 * Math.floor(10 * Math.random()),
                            'px'
                          ),
                          height: '22px',
                        }),
                        (0, n.jsxs)('div', {
                          className: 'ml-auto relative flex items-center gap-2',
                          children: [
                            (0, n.jsx)(m.aN.Item, {
                              width: '60px',
                              height: '22px',
                            }),
                            (0, n.jsx)(m.aN.Item, {
                              width: '22px',
                              height: '22px',
                            }),
                            (0, n.jsx)(m.aN.Item, {
                              width: '22px',
                              height: '22px',
                            }),
                            (0, n.jsx)(m.aN.Item, {
                              width: '22px',
                              height: '22px',
                            }),
                          ],
                        }),
                      ],
                    },
                    e
                  )
                ),
              }),
            ],
          });
        };
      var eY = s(865);
      let eU = e => {
          let {
              workspaceSlug: t,
              projectId: s,
              isModalOpen: r,
              handleModalClose: l,
              redirectionEnabled: a = !1,
            } = e,
            [o, c] = (0, i.useState)({
              id: void 0,
              name: '',
              access: eD._A.PUBLIC,
            }),
            d = (0, J.useRouter)(),
            { createPage: u } = (0, p.qm)(s),
            { capturePageEvent: m } = (0, p.DN)(),
            h = () => {
              c({ id: void 0, name: '', access: eD._A.PUBLIC }), l();
            },
            x = async () => {
              if (t && s)
                try {
                  let e = await u(o);
                  e &&
                    (m({
                      eventName: eY.F8,
                      payload: { ...e, state: 'SUCCESS' },
                    }),
                    h(),
                    a &&
                      d.push(
                        '/'
                          .concat(t, '/projects/')
                          .concat(s, '/pages/')
                          .concat(e.id)
                      ));
                } catch (e) {
                  m({ eventName: eY.F8, payload: { state: 'FAILED' } });
                }
            };
          return (0, n.jsx)(N.QU, {
            isOpen: r,
            handleClose: l,
            position: N.fM.TOP,
            width: N.j4.XXL,
            children: (0, n.jsx)(eK, {
              formData: o,
              handleFormData: (e, t) => c(s => ({ ...s, [e]: t })),
              handleModalClose: h,
              handleFormSubmit: x,
            }),
          });
        },
        eB = (0, eu.Pi)(e => {
          let { pageId: t, projectId: s, isOpen: r, onClose: l } = e,
            [a, o] = (0, i.useState)(!1),
            { removePage: c } = (0, p.qm)(s),
            { capturePageEvent: d } = (0, p.DN)(),
            u = (0, p.qt)(t);
          if (!u) return null;
          let { name: h } = u,
            x = () => {
              o(!1), l();
            },
            f = async () => {
              o(!0),
                await c(t)
                  .then(() => {
                    d({
                      eventName: eY.nb,
                      payload: { ...u, state: 'SUCCESS' },
                    }),
                      x(),
                      (0, m.fz)({
                        type: m.do.SUCCESS,
                        title: 'Success!',
                        message: 'Page deleted successfully.',
                      });
                  })
                  .catch(() => {
                    d({ eventName: eY.nb, payload: { ...u, state: 'FAILED' } }),
                      (0, m.fz)({
                        type: m.do.ERROR,
                        title: 'Error!',
                        message: 'Page could not be deleted. Please try again.',
                      });
                  }),
                o(!1);
            };
          return (0, n.jsx)(N.qv, {
            handleClose: x,
            handleSubmit: f,
            isDeleting: a,
            isOpen: r,
            title: 'Delete Page',
            content: (0, n.jsxs)(n.Fragment, {
              children: [
                'Are you sure you want to delete page-',
                ' ',
                (0, n.jsx)('span', {
                  className: 'break-words font-medium text-custom-text-100',
                  children: h,
                }),
                '? The Page will be deleted permanently. This action cannot be undone.',
              ],
            }),
          });
        }),
        eK = e => {
          var t;
          let {
              formData: s,
              handleFormData: r,
              handleModalClose: l,
              handleFormSubmit: a,
            } = e,
            { isMobile: o } = (0, eS.L)(),
            [c, d] = (0, i.useState)(!1),
            u = async e => {
              e.preventDefault();
              try {
                d(!0), await a(), d(!1);
              } catch (e) {
                d(!1);
              }
            },
            h = !!s.name && s.name.length > 255;
          return (0, n.jsxs)('form', {
            onSubmit: u,
            children: [
              (0, n.jsxs)('div', {
                className: 'space-y-5 p-5',
                children: [
                  (0, n.jsx)('h3', {
                    className: 'text-xl font-medium text-custom-text-200',
                    children: 'Create Page',
                  }),
                  (0, n.jsxs)('div', {
                    className: 'space-y-1',
                    children: [
                      (0, n.jsx)(m.II, {
                        id: 'name',
                        type: 'text',
                        value: s.name,
                        onChange: e => r('name', e.target.value),
                        placeholder: 'Title',
                        className: 'w-full resize-none text-base',
                        tabIndex: 1,
                        required: !0,
                        autoFocus: !0,
                      }),
                      h &&
                        (0, n.jsx)('span', {
                          className: 'text-xs text-red-500',
                          children:
                            'Max length of the name should be less than 255 characters',
                        }),
                    ],
                  }),
                ],
              }),
              (0, n.jsxs)('div', {
                className:
                  'px-5 py-4 flex items-center justify-between gap-2 border-t-[0.5px] border-custom-border-200',
                children: [
                  (0, n.jsxs)('div', {
                    className: 'flex items-center gap-2',
                    children: [
                      (0, n.jsx)('div', {
                        className:
                          'flex flex-shrink-0 items-stretch gap-0.5 rounded border-[0.5px] border-custom-border-200 p-1',
                        children: eD.at.map((e, t) =>
                          (0, n.jsx)(
                            m.u,
                            {
                              tooltipContent: e.label,
                              isMobile: o,
                              children: (0, n.jsx)('button', {
                                type: 'button',
                                onClick: () => r('access', e.key),
                                className: (0, k.cn)(
                                  'flex-shrink-0 relative flex justify-center items-center w-6 h-6 rounded-sm p-1 transition-all',
                                  s.access === e.key
                                    ? 'bg-custom-background-80'
                                    : 'hover:bg-custom-background-80'
                                ),
                                tabIndex: 2 + t,
                                children: (0, n.jsx)(e.icon, {
                                  className: (0, k.cn)(
                                    'h-3.5 w-3.5 transition-all',
                                    s.access === e.key
                                      ? 'text-custom-text-100'
                                      : 'text-custom-text-400'
                                  ),
                                  strokeWidth: 2,
                                }),
                              }),
                            },
                            e.key
                          )
                        ),
                      }),
                      (0, n.jsx)('h6', {
                        className: 'text-xs font-medium',
                        children:
                          null === (t = eD.at.find(e => e.key === s.access)) ||
                          void 0 === t
                            ? void 0
                            : t.label,
                      }),
                    ],
                  }),
                  (0, n.jsxs)('div', {
                    className: 'flex items-center justify-end gap-2',
                    children: [
                      (0, n.jsx)(m.zx, {
                        variant: 'neutral-primary',
                        size: 'sm',
                        onClick: l,
                        tabIndex: 4,
                        children: 'Cancel',
                      }),
                      (0, n.jsx)(m.zx, {
                        variant: 'primary',
                        size: 'sm',
                        type: 'submit',
                        loading: c,
                        disabled: h,
                        tabIndex: 5,
                        children: c ? 'Creating' : 'Create Page',
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        eW = () =>
          (0, n.jsxs)('div', {
            className: ' relative w-full h-full flex flex-col',
            children: [
              (0, n.jsxs)('div', {
                className:
                  'px-4 flex-shrink-0 relative flex items-center justify-between h-12 border-b border-custom-border-100',
                children: [
                  (0, n.jsx)(m.aN, {
                    className: 'flex-shrink-0 w-[280px]',
                    children: (0, n.jsx)(m.aN.Item, {
                      width: '26px',
                      height: '26px',
                    }),
                  }),
                  (0, n.jsxs)('div', {
                    className:
                      'w-full relative flex items-center divide-x divide-custom-border-100',
                    children: [
                      (0, n.jsxs)(m.aN, {
                        className: 'relative flex items-center gap-1 pr-2',
                        children: [
                          (0, n.jsx)(m.aN.Item, {
                            width: '26px',
                            height: '26px',
                          }),
                          (0, n.jsx)(m.aN.Item, {
                            width: '26px',
                            height: '26px',
                          }),
                          (0, n.jsx)(m.aN.Item, {
                            width: '26px',
                            height: '26px',
                          }),
                          (0, n.jsx)(m.aN.Item, {
                            width: '26px',
                            height: '26px',
                          }),
                          (0, n.jsx)(m.aN.Item, {
                            width: '26px',
                            height: '26px',
                          }),
                          (0, n.jsx)(m.aN.Item, {
                            width: '26px',
                            height: '26px',
                          }),
                          (0, n.jsx)(m.aN.Item, {
                            width: '26px',
                            height: '26px',
                          }),
                        ],
                      }),
                      (0, n.jsxs)(m.aN, {
                        className: 'relative flex items-center gap-1 px-2',
                        children: [
                          (0, n.jsx)(m.aN.Item, {
                            width: '26px',
                            height: '26px',
                          }),
                          (0, n.jsx)(m.aN.Item, {
                            width: '26px',
                            height: '26px',
                          }),
                        ],
                      }),
                      (0, n.jsxs)(m.aN, {
                        className: 'relative flex items-center gap-1 px-2',
                        children: [
                          (0, n.jsx)(m.aN.Item, {
                            width: '26px',
                            height: '26px',
                          }),
                          (0, n.jsx)(m.aN.Item, {
                            width: '26px',
                            height: '26px',
                          }),
                        ],
                      }),
                      (0, n.jsxs)(m.aN, {
                        className: 'relative flex items-center gap-1 pl-2',
                        children: [
                          (0, n.jsx)(m.aN.Item, {
                            width: '26px',
                            height: '26px',
                          }),
                          (0, n.jsx)(m.aN.Item, {
                            width: '26px',
                            height: '26px',
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, n.jsxs)(m.aN, {
                    className:
                      'w-full relative flex justify-end items-center gap-1',
                    children: [
                      (0, n.jsx)(m.aN.Item, { width: '60px', height: '26px' }),
                      (0, n.jsx)(m.aN.Item, { width: '40px', height: '26px' }),
                      (0, n.jsx)(m.aN.Item, { width: '26px', height: '26px' }),
                      (0, n.jsx)(m.aN.Item, { width: '26px', height: '26px' }),
                    ],
                  }),
                ],
              }),
              (0, n.jsxs)('div', {
                className: 'px-4 w-full h-full overflow-hidden relative flex',
                children: [
                  (0, n.jsx)('div', {
                    className: 'flex-shrink-0 w-[280px] pr-5 py-5',
                    children: (0, n.jsxs)(m.aN, {
                      className: 'w-full space-y-4',
                      children: [
                        (0, n.jsx)(m.aN.Item, {
                          width: '100%',
                          height: '24px',
                        }),
                        (0, n.jsxs)('div', {
                          className: 'space-y-2',
                          children: [
                            (0, n.jsx)(m.aN.Item, {
                              width: '60%',
                              height: '12px',
                            }),
                            (0, n.jsxs)('div', {
                              className: 'ml-6 space-y-2',
                              children: [
                                (0, n.jsx)(m.aN.Item, {
                                  width: '80%',
                                  height: '12px',
                                }),
                                (0, n.jsx)(m.aN.Item, {
                                  width: '100%',
                                  height: '12px',
                                }),
                              ],
                            }),
                            (0, n.jsx)(m.aN.Item, {
                              width: '60%',
                              height: '12px',
                            }),
                            (0, n.jsxs)('div', {
                              className: 'ml-6 space-y-2',
                              children: [
                                (0, n.jsx)(m.aN.Item, {
                                  width: '80%',
                                  height: '12px',
                                }),
                                (0, n.jsx)(m.aN.Item, {
                                  width: '100%',
                                  height: '12px',
                                }),
                              ],
                            }),
                            (0, n.jsx)(m.aN.Item, {
                              width: '100%',
                              height: '12px',
                            }),
                            (0, n.jsx)(m.aN.Item, {
                              width: '60%',
                              height: '12px',
                            }),
                            (0, n.jsxs)('div', {
                              className: 'ml-6 space-y-2',
                              children: [
                                (0, n.jsx)(m.aN.Item, {
                                  width: '80%',
                                  height: '12px',
                                }),
                                (0, n.jsx)(m.aN.Item, {
                                  width: '100%',
                                  height: '12px',
                                }),
                              ],
                            }),
                            (0, n.jsx)(m.aN.Item, {
                              width: '80%',
                              height: '12px',
                            }),
                            (0, n.jsx)(m.aN.Item, {
                              width: '100%',
                              height: '12px',
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, n.jsx)('div', {
                    className: 'w-full h-full py-5',
                    children: (0, n.jsxs)(m.aN, {
                      className: 'relative space-y-4',
                      children: [
                        (0, n.jsx)(m.aN.Item, { width: '50%', height: '36px' }),
                        (0, n.jsxs)('div', {
                          className: 'space-y-2',
                          children: [
                            (0, n.jsx)('div', {
                              className: 'py-2',
                              children: (0, n.jsx)(m.aN.Item, {
                                width: '100%',
                                height: '36px',
                              }),
                            }),
                            (0, n.jsx)(m.aN.Item, {
                              width: '80%',
                              height: '22px',
                            }),
                            (0, n.jsxs)('div', {
                              className: 'relative flex items-center gap-2',
                              children: [
                                (0, n.jsx)(m.aN.Item, {
                                  width: '30px',
                                  height: '30px',
                                }),
                                (0, n.jsx)(m.aN.Item, {
                                  width: '30%',
                                  height: '22px',
                                }),
                              ],
                            }),
                            (0, n.jsx)('div', {
                              className: 'py-2',
                              children: (0, n.jsx)(m.aN.Item, {
                                width: '60%',
                                height: '36px',
                              }),
                            }),
                            (0, n.jsx)(m.aN.Item, {
                              width: '70%',
                              height: '22px',
                            }),
                            (0, n.jsx)(m.aN.Item, {
                              width: '30%',
                              height: '22px',
                            }),
                            (0, n.jsxs)('div', {
                              className: 'relative flex items-center gap-2',
                              children: [
                                (0, n.jsx)(m.aN.Item, {
                                  width: '30px',
                                  height: '30px',
                                }),
                                (0, n.jsx)(m.aN.Item, {
                                  width: '30%',
                                  height: '22px',
                                }),
                              ],
                            }),
                            (0, n.jsx)('div', {
                              className: 'py-2',
                              children: (0, n.jsx)(m.aN.Item, {
                                width: '50%',
                                height: '30px',
                              }),
                            }),
                            (0, n.jsx)(m.aN.Item, {
                              width: '100%',
                              height: '22px',
                            }),
                            (0, n.jsx)('div', {
                              className: 'py-2',
                              children: (0, n.jsx)(m.aN.Item, {
                                width: '30%',
                                height: '30px',
                              }),
                            }),
                            (0, n.jsx)(m.aN.Item, {
                              width: '30%',
                              height: '22px',
                            }),
                            (0, n.jsxs)('div', {
                              className: 'relative flex items-center gap-2',
                              children: [
                                (0, n.jsx)('div', {
                                  className: 'py-2',
                                  children: (0, n.jsx)(m.aN.Item, {
                                    width: '30px',
                                    height: '30px',
                                  }),
                                }),
                                (0, n.jsx)(m.aN.Item, {
                                  width: '30%',
                                  height: '22px',
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
      (0, eu.Pi)(e => {
        let { projectId: t, pageId: s } = e,
          { loader: r } = (0, p.qm)(t),
          { id: l, name: a } = (0, p.qt)(s);
        return 'init-loader' === r
          ? (0, n.jsx)(eW, {})
          : l
            ? (0, n.jsxs)(i.Fragment, {
                children: [
                  (0, n.jsx)(N.yG, { title: a || 'Pages' }),
                  (0, n.jsxs)('div', {
                    className: 'relative w-full h-full flex flex-col',
                    children: [
                      (0, n.jsxs)('div', {
                        className:
                          'flex-shrink-0 px-4 relative flex items-center justify-between h-12 border-b border-custom-border-100',
                        children: [
                          (0, n.jsx)('div', {
                            className: 'flex-shrink-0 w-[280px]',
                            children: 'Icon',
                          }),
                          (0, n.jsx)('div', {
                            className:
                              'w-full relative hidden md:flex items-center divide-x divide-custom-border-100 ',
                            children: 'Editor keys',
                          }),
                          (0, n.jsx)('div', {
                            className: 'w-full relative flex justify-end',
                            children: 'right saved',
                          }),
                        ],
                      }),
                      (0, n.jsx)('div', {
                        className:
                          'px-4 h-12 relative flex md:hidden items-center border-b border-custom-border-100',
                        children: 'Editor keys',
                      }),
                      (0, n.jsxs)('div', {
                        className:
                          'px-4 w-full h-full overflow-hidden relative flex',
                        children: [
                          (0, n.jsx)('div', {
                            className: 'flex-shrink-0 w-[280px] pr-5 py-5',
                            children: 'Table of content',
                          }),
                          (0, n.jsx)('div', {
                            className: 'w-full h-full py-5',
                            children: 'Editor Container',
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              })
            : (0, n.jsx)('div', {
                className: '',
                children: 'No page is available.',
              });
      });
      var eG = s(38579),
        e$ = s.n(eG),
        eQ = s(74371),
        eJ = s(70540),
        eX = {
          src: '/_next/static/media/all-filters.636b17df.svg',
          height: 217,
          width: 206,
          blurWidth: 0,
          blurHeight: 0,
        },
        e0 = {
          src: '/_next/static/media/name-filter.041df490.svg',
          height: 217,
          width: 206,
          blurWidth: 0,
          blurHeight: 0,
        };
      let e2 = (0, r.Pi)(e => {
        let { children: t, pageType: s, projectId: i } = e,
          {
            loader: r,
            getCurrentProjectFilteredPageIds: l,
            getCurrentProjectPageIds: a,
            filters: o,
          } = (0, p.qm)(i),
          { commandPalette: c } = (0, p.IX)(),
          d = a(s),
          u = l(s);
        if ('init-loader' === r) return (0, n.jsx)(eq, {});
        if ((null == d ? void 0 : d.length) === 0) {
          if ('public' === s)
            return (0, n.jsx)(eQ.ub, {
              type: eJ.C.PROJECT_PAGE_PUBLIC,
              primaryButtonOnClick: () => {
                c.toggleCreatePageModal(!0);
              },
            });
          if ('private' === s)
            return (0, n.jsx)(eQ.ub, {
              type: eJ.C.PROJECT_PAGE_PRIVATE,
              primaryButtonOnClick: () => {
                c.toggleCreatePageModal(!0);
              },
            });
          if ('archived' === s)
            return (0, n.jsx)(eQ.ub, { type: eJ.C.PROJECT_PAGE_ARCHIVED });
        }
        return (null == u ? void 0 : u.length) === 0
          ? (0, n.jsx)('div', {
              className: 'h-full w-full grid place-items-center',
              children: (0, n.jsxs)('div', {
                className: 'text-center',
                children: [
                  (0, n.jsx)(e$(), {
                    src: o.searchQuery.length > 0 ? e0 : eX,
                    className: 'h-36 sm:h-48 w-36 sm:w-48 mx-auto',
                    alt: 'No matching modules',
                  }),
                  (0, n.jsx)('h5', {
                    className: 'text-xl font-medium mt-7 mb-1',
                    children: 'No matching pages',
                  }),
                  (0, n.jsx)('p', {
                    className: 'text-custom-text-400 text-base',
                    children:
                      o.searchQuery.length > 0
                        ? 'Remove the search criteria to see all pages'
                        : 'Remove the filters to see all pages',
                  }),
                ],
              }),
            })
          : (0, n.jsx)('div', {
              className: 'h-full w-full overflow-hidden',
              children: t,
            });
      });
      var e1 = s(30201);
      let e3 = (0, eu.Pi)(e => {
        let { workspaceSlug: t, projectId: s, pageType: i, children: r } = e,
          { getAllPages: l } = (0, p.qm)(s);
        return (
          (0, e1.ZP)(
            s ? 'PROJECT_PAGES_'.concat(s) : null,
            s ? () => l(i) : null
          ),
          (0, n.jsxs)('div', {
            className: 'relative w-full h-full overflow-hidden flex flex-col',
            children: [
              (0, n.jsx)(ed, { pageType: i, projectId: s, workspaceSlug: t }),
              (0, n.jsx)(e2, { pageType: i, projectId: s, children: r }),
            ],
          })
        );
      });
    },
    76796: function (e, t, s) {
      s.d(t, {
        Ar: function () {
          return eN;
        },
        Q: function () {
          return eb;
        },
        xl: function () {
          return ey;
        },
      });
      var n,
        i = s(27378),
        r = s(18469),
        l = s(54848),
        a = s(82789),
        o = s(22773),
        c = s(31542),
        d = s(36890),
        u = s(24246),
        m = s(70048),
        h = s(32681),
        p = s(62468),
        x = s(29119),
        f = s(75288),
        v = s(46345),
        g = s(54129),
        j = s(53347),
        y = s(38788),
        w = s(15463),
        b = s(75004),
        N = s(25449),
        k = Object.defineProperty,
        C = Object.defineProperties,
        S = Object.getOwnPropertyDescriptor,
        E = Object.getOwnPropertyDescriptors,
        I = Object.getOwnPropertyNames,
        R = Object.getOwnPropertySymbols,
        P = Object.prototype.hasOwnProperty,
        O = Object.prototype.propertyIsEnumerable,
        _ = (e, t, s) =>
          t in e
            ? k(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: s,
              })
            : (e[t] = s),
        D = (e, t) => {
          for (var s in t || (t = {})) P.call(t, s) && _(e, s, t[s]);
          if (R) for (var s of R(t)) O.call(t, s) && _(e, s, t[s]);
          return e;
        },
        F = (e, t) => C(e, E(t)),
        M = (e, t) => {
          var s = {};
          for (var n in e) P.call(e, n) && 0 > t.indexOf(n) && (s[n] = e[n]);
          if (null != e && R)
            for (var n of R(e))
              0 > t.indexOf(n) && O.call(e, n) && (s[n] = e[n]);
          return s;
        },
        A = (e, t, s, n) => {
          if ((t && 'object' == typeof t) || 'function' == typeof t)
            for (let i of I(t))
              P.call(e, i) ||
                i === s ||
                k(e, i, {
                  get: () => t[i],
                  enumerable: !(n = S(t, i)) || n.enumerable,
                });
          return e;
        },
        Z = {};
      ((e, t) => {
        for (var s in t) k(e, s, { get: t[s], enumerable: !0 });
      })(Z, {
        BubbleMenu: () => Q,
        Editor: () => U,
        EditorConsumer: () => W,
        EditorContent: () => Y,
        EditorContext: () => K,
        EditorProvider: () => $,
        FloatingMenu: () => J,
        NodeViewContent: () => et,
        NodeViewWrapper: () => es,
        PureEditorContent: () => q,
        ReactNodeViewRenderer: () => er,
        ReactRenderer: () => en,
        useCurrentEditor: () => G,
        useEditor: () => B,
      });
      var L = class {
          constructor({
            editor: e,
            element: t,
            view: s,
            tippyOptions: n = {},
            updateDelay: i = 250,
            shouldShow: r,
          }) {
            (this.preventHide = !1),
              (this.shouldShow = ({ view: e, state: t, from: s, to: n }) => {
                let { doc: i, selection: r } = t,
                  { empty: a } = r,
                  o =
                    !i.textBetween(s, n).length &&
                    (0, l.isTextSelection)(t.selection),
                  c = this.element.contains(document.activeElement);
                return !(
                  !(e.hasFocus() || c) ||
                  a ||
                  o ||
                  !this.editor.isEditable
                );
              }),
              (this.mousedownHandler = () => {
                this.preventHide = !0;
              }),
              (this.dragstartHandler = () => {
                this.hide();
              }),
              (this.focusHandler = () => {
                setTimeout(() => this.update(this.editor.view));
              }),
              (this.blurHandler = ({ event: e }) => {
                var t;
                if (this.preventHide) {
                  this.preventHide = !1;
                  return;
                }
                (null != e &&
                  e.relatedTarget &&
                  !(null === (t = this.element.parentNode) || void 0 === t) &&
                  t.contains(e.relatedTarget)) ||
                  this.hide();
              }),
              (this.tippyBlurHandler = e => {
                this.blurHandler({ event: e });
              }),
              (this.handleDebouncedUpdate = (e, t) => {
                let s = !(null != t && t.selection.eq(e.state.selection)),
                  n = !(null != t && t.doc.eq(e.state.doc));
                (s || n) &&
                  (this.updateDebounceTimer &&
                    clearTimeout(this.updateDebounceTimer),
                  (this.updateDebounceTimer = window.setTimeout(() => {
                    this.updateHandler(e, s, n, t);
                  }, this.updateDelay)));
              }),
              (this.updateHandler = (e, t, s, n) => {
                var i, r, a;
                let { state: o, composing: c } = e,
                  { selection: d } = o;
                if (c || (!t && !s)) return;
                this.createTooltip();
                let { ranges: u } = d,
                  m = Math.min(...u.map(e => e.$from.pos)),
                  h = Math.max(...u.map(e => e.$to.pos));
                if (
                  !(null === (i = this.shouldShow) || void 0 === i
                    ? void 0
                    : i.call(this, {
                        editor: this.editor,
                        view: e,
                        state: o,
                        oldState: n,
                        from: m,
                        to: h,
                      }))
                ) {
                  this.hide();
                  return;
                }
                null === (r = this.tippy) ||
                  void 0 === r ||
                  r.setProps({
                    getReferenceClientRect:
                      (null === (a = this.tippyOptions) || void 0 === a
                        ? void 0
                        : a.getReferenceClientRect) ||
                      (() => {
                        if ((0, l.isNodeSelection)(o.selection)) {
                          let t = e.nodeDOM(m),
                            s = t.dataset.nodeViewWrapper
                              ? t
                              : t.querySelector('[data-node-view-wrapper]');
                          if ((s && (t = s.firstChild), t))
                            return t.getBoundingClientRect();
                        }
                        return (0, l.posToDOMRect)(e, m, h);
                      }),
                  }),
                  this.show();
              }),
              (this.editor = e),
              (this.element = t),
              (this.view = s),
              (this.updateDelay = i),
              r && (this.shouldShow = r),
              this.element.addEventListener(
                'mousedown',
                this.mousedownHandler,
                { capture: !0 }
              ),
              this.view.dom.addEventListener(
                'dragstart',
                this.dragstartHandler
              ),
              this.editor.on('focus', this.focusHandler),
              this.editor.on('blur', this.blurHandler),
              (this.tippyOptions = n),
              this.element.remove(),
              (this.element.style.visibility = 'visible');
          }
          createTooltip() {
            let { element: e } = this.editor.options,
              t = !!e.parentElement;
            this.tippy ||
              !t ||
              ((this.tippy = (0, o.ZP)(
                e,
                D(
                  {
                    duration: 0,
                    getReferenceClientRect: null,
                    content: this.element,
                    interactive: !0,
                    trigger: 'manual',
                    placement: 'top',
                    hideOnClick: 'toggle',
                  },
                  this.tippyOptions
                )
              )),
              this.tippy.popper.firstChild &&
                this.tippy.popper.firstChild.addEventListener(
                  'blur',
                  this.tippyBlurHandler
                ));
          }
          update(e, t) {
            let { state: s } = e,
              n = s.selection.$from.pos !== s.selection.$to.pos;
            if (this.updateDelay > 0 && n) {
              this.handleDebouncedUpdate(e, t);
              return;
            }
            let i = !(null != t && t.selection.eq(e.state.selection)),
              r = !(null != t && t.doc.eq(e.state.doc));
            this.updateHandler(e, i, r, t);
          }
          show() {
            var e;
            null === (e = this.tippy) || void 0 === e || e.show();
          }
          hide() {
            var e;
            null === (e = this.tippy) || void 0 === e || e.hide();
          }
          destroy() {
            var e, t;
            !(null === (e = this.tippy) || void 0 === e) &&
              e.popper.firstChild &&
              this.tippy.popper.firstChild.removeEventListener(
                'blur',
                this.tippyBlurHandler
              ),
              null === (t = this.tippy) || void 0 === t || t.destroy(),
              this.element.removeEventListener(
                'mousedown',
                this.mousedownHandler,
                { capture: !0 }
              ),
              this.view.dom.removeEventListener(
                'dragstart',
                this.dragstartHandler
              ),
              this.editor.off('focus', this.focusHandler),
              this.editor.off('blur', this.blurHandler);
          }
        },
        T = e =>
          new a.Sy({
            key:
              'string' == typeof e.pluginKey
                ? new a.H$(e.pluginKey)
                : e.pluginKey,
            view: t => new L(D({ view: t }, e)),
          });
      l.Extension.create({
        name: 'bubbleMenu',
        addOptions: () => ({
          element: null,
          tippyOptions: {},
          pluginKey: 'bubbleMenu',
          updateDelay: void 0,
          shouldShow: null,
        }),
        addProseMirrorPlugins() {
          return this.options.element
            ? [
                T({
                  pluginKey: this.options.pluginKey,
                  editor: this.editor,
                  element: this.options.element,
                  tippyOptions: this.options.tippyOptions,
                  updateDelay: this.options.updateDelay,
                  shouldShow: this.options.shouldShow,
                }),
              ]
            : [];
        },
      }),
        A(Z, l, 'default'),
        n && A(n, l, 'default');
      var H = class {
          constructor({
            editor: e,
            element: t,
            view: s,
            tippyOptions: n = {},
            shouldShow: i,
          }) {
            (this.preventHide = !1),
              (this.shouldShow = ({ view: e, state: t }) => {
                let { selection: s } = t,
                  { $anchor: n, empty: i } = s,
                  r = 1 === n.depth,
                  l =
                    n.parent.isTextblock &&
                    !n.parent.type.spec.code &&
                    !n.parent.textContent;
                return !(
                  !e.hasFocus() ||
                  !i ||
                  !r ||
                  !l ||
                  !this.editor.isEditable
                );
              }),
              (this.mousedownHandler = () => {
                this.preventHide = !0;
              }),
              (this.focusHandler = () => {
                setTimeout(() => this.update(this.editor.view));
              }),
              (this.blurHandler = ({ event: e }) => {
                var t;
                if (this.preventHide) {
                  this.preventHide = !1;
                  return;
                }
                (null != e &&
                  e.relatedTarget &&
                  !(null === (t = this.element.parentNode) || void 0 === t) &&
                  t.contains(e.relatedTarget)) ||
                  this.hide();
              }),
              (this.tippyBlurHandler = e => {
                this.blurHandler({ event: e });
              }),
              (this.editor = e),
              (this.element = t),
              (this.view = s),
              i && (this.shouldShow = i),
              this.element.addEventListener(
                'mousedown',
                this.mousedownHandler,
                { capture: !0 }
              ),
              this.editor.on('focus', this.focusHandler),
              this.editor.on('blur', this.blurHandler),
              (this.tippyOptions = n),
              this.element.remove(),
              (this.element.style.visibility = 'visible');
          }
          createTooltip() {
            let { element: e } = this.editor.options,
              t = !!e.parentElement;
            this.tippy ||
              !t ||
              ((this.tippy = (0, o.ZP)(
                e,
                D(
                  {
                    duration: 0,
                    getReferenceClientRect: null,
                    content: this.element,
                    interactive: !0,
                    trigger: 'manual',
                    placement: 'right',
                    hideOnClick: 'toggle',
                  },
                  this.tippyOptions
                )
              )),
              this.tippy.popper.firstChild &&
                this.tippy.popper.firstChild.addEventListener(
                  'blur',
                  this.tippyBlurHandler
                ));
          }
          update(e, t) {
            var s, n, i;
            let { state: r } = e,
              { doc: a, selection: o } = r,
              { from: c, to: d } = o;
            if (!(t && t.doc.eq(a) && t.selection.eq(o))) {
              if (
                (this.createTooltip(),
                !(null === (s = this.shouldShow) || void 0 === s
                  ? void 0
                  : s.call(this, {
                      editor: this.editor,
                      view: e,
                      state: r,
                      oldState: t,
                    })))
              ) {
                this.hide();
                return;
              }
              null === (n = this.tippy) ||
                void 0 === n ||
                n.setProps({
                  getReferenceClientRect:
                    (null === (i = this.tippyOptions) || void 0 === i
                      ? void 0
                      : i.getReferenceClientRect) ||
                    (() => (0, l.posToDOMRect)(e, c, d)),
                }),
                this.show();
            }
          }
          show() {
            var e;
            null === (e = this.tippy) || void 0 === e || e.show();
          }
          hide() {
            var e;
            null === (e = this.tippy) || void 0 === e || e.hide();
          }
          destroy() {
            var e, t;
            !(null === (e = this.tippy) || void 0 === e) &&
              e.popper.firstChild &&
              this.tippy.popper.firstChild.removeEventListener(
                'blur',
                this.tippyBlurHandler
              ),
              null === (t = this.tippy) || void 0 === t || t.destroy(),
              this.element.removeEventListener(
                'mousedown',
                this.mousedownHandler,
                { capture: !0 }
              ),
              this.editor.off('focus', this.focusHandler),
              this.editor.off('blur', this.blurHandler);
          }
        },
        z = e =>
          new a.Sy({
            key:
              'string' == typeof e.pluginKey
                ? new a.H$(e.pluginKey)
                : e.pluginKey,
            view: t => new H(D({ view: t }, e)),
          });
      l.Extension.create({
        name: 'floatingMenu',
        addOptions: () => ({
          element: null,
          tippyOptions: {},
          pluginKey: 'floatingMenu',
          shouldShow: null,
        }),
        addProseMirrorPlugins() {
          return this.options.element
            ? [
                z({
                  pluginKey: this.options.pluginKey,
                  editor: this.editor,
                  element: this.options.element,
                  tippyOptions: this.options.tippyOptions,
                  shouldShow: this.options.shouldShow,
                }),
              ]
            : [];
        },
      });
      var V = ({ renderers: e }) =>
          i.createElement(
            i.Fragment,
            null,
            Object.entries(e).map(([e, t]) =>
              c.createPortal(t.reactElement, t.element, e)
            )
          ),
        q = class extends i.Component {
          constructor(e) {
            super(e),
              (this.editorContentRef = i.createRef()),
              (this.initialized = !1),
              (this.state = { renderers: {} });
          }
          componentDidMount() {
            this.init();
          }
          componentDidUpdate() {
            this.init();
          }
          init() {
            let { editor: e } = this.props;
            if (e && e.options.element) {
              if (e.contentComponent) return;
              let t = this.editorContentRef.current;
              t.append(...e.options.element.childNodes),
                e.setOptions({ element: t }),
                (e.contentComponent = this),
                e.createNodeViews(),
                (this.initialized = !0);
            }
          }
          maybeFlushSync(e) {
            this.initialized ? (0, c.flushSync)(e) : e();
          }
          setRenderer(e, t) {
            this.maybeFlushSync(() => {
              this.setState(({ renderers: s }) => ({
                renderers: F(D({}, s), { [e]: t }),
              }));
            });
          }
          removeRenderer(e) {
            this.maybeFlushSync(() => {
              this.setState(({ renderers: t }) => {
                let s = D({}, t);
                return delete s[e], { renderers: s };
              });
            });
          }
          componentWillUnmount() {
            let { editor: e } = this.props;
            if (
              !e ||
              ((this.initialized = !1),
              e.isDestroyed || e.view.setProps({ nodeViews: {} }),
              (e.contentComponent = null),
              !e.options.element.firstChild)
            )
              return;
            let t = document.createElement('div');
            t.append(...e.options.element.childNodes),
              e.setOptions({ element: t });
          }
          render() {
            let e = this.props,
              { editor: t } = e,
              s = M(e, ['editor']);
            return i.createElement(
              i.Fragment,
              null,
              i.createElement('div', D({ ref: this.editorContentRef }, s)),
              i.createElement(V, { renderers: this.state.renderers })
            );
          }
        },
        Y = i.memo(e => {
          let t = i.useMemo(
            () => Math.floor(4294967295 * Math.random()).toString(),
            [e.editor]
          );
          return i.createElement(q, D({ key: t }, e));
        }),
        U = class extends l.Editor {
          constructor() {
            super(...arguments), (this.contentComponent = null);
          }
        },
        B = (e = {}, t = []) => {
          let [s, n] = (0, i.useState)(null),
            r = (function () {
              let [, e] = (0, i.useState)(0);
              return () => e(e => e + 1);
            })(),
            {
              onBeforeCreate: l,
              onBlur: a,
              onCreate: o,
              onDestroy: c,
              onFocus: d,
              onSelectionUpdate: u,
              onTransaction: m,
              onUpdate: h,
            } = e,
            p = (0, i.useRef)(l),
            x = (0, i.useRef)(a),
            f = (0, i.useRef)(o),
            v = (0, i.useRef)(c),
            g = (0, i.useRef)(d),
            j = (0, i.useRef)(u),
            y = (0, i.useRef)(m),
            w = (0, i.useRef)(h);
          return (
            (0, i.useEffect)(() => {
              s &&
                (l &&
                  (s.off('beforeCreate', p.current),
                  s.on('beforeCreate', l),
                  (p.current = l)),
                a &&
                  (s.off('blur', x.current), s.on('blur', a), (x.current = a)),
                o &&
                  (s.off('create', f.current),
                  s.on('create', o),
                  (f.current = o)),
                c &&
                  (s.off('destroy', v.current),
                  s.on('destroy', c),
                  (v.current = c)),
                d &&
                  (s.off('focus', g.current),
                  s.on('focus', d),
                  (g.current = d)),
                u &&
                  (s.off('selectionUpdate', j.current),
                  s.on('selectionUpdate', u),
                  (j.current = u)),
                m &&
                  (s.off('transaction', y.current),
                  s.on('transaction', m),
                  (y.current = m)),
                h &&
                  (s.off('update', w.current),
                  s.on('update', h),
                  (w.current = h)));
            }, [l, a, o, c, d, u, m, h, s]),
            (0, i.useEffect)(() => {
              let t = !0,
                s = new U(e);
              return (
                n(s),
                s.on('transaction', () => {
                  requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                      t && r();
                    });
                  });
                }),
                () => {
                  t = !1;
                }
              );
            }, t),
            (0, i.useEffect)(
              () => () => {
                null == s || s.destroy();
              },
              [s]
            ),
            s
          );
        },
        K = (0, i.createContext)({ editor: null }),
        W = K.Consumer,
        G = () => (0, i.useContext)(K),
        $ = e => {
          var { children: t, slotAfter: s, slotBefore: n } = e;
          let r = B(M(e, ['children', 'slotAfter', 'slotBefore']));
          return r
            ? i.createElement(
                K.Provider,
                { value: { editor: r } },
                n,
                i.createElement(W, null, ({ editor: e }) =>
                  i.createElement(Y, { editor: e })
                ),
                t,
                s
              )
            : null;
        },
        Q = e => {
          let [t, s] = (0, i.useState)(null),
            { editor: n } = G();
          return (
            (0, i.useEffect)(() => {
              var s;
              if (
                !t ||
                (!(null === (s = e.editor) || void 0 === s) && s.isDestroyed) ||
                (null != n && n.isDestroyed)
              )
                return;
              let {
                  pluginKey: i = 'bubbleMenu',
                  editor: r,
                  tippyOptions: l = {},
                  updateDelay: a,
                  shouldShow: o = null,
                } = e,
                c = r || n;
              if (!c) {
                console.warn(
                  'BubbleMenu component is not rendered inside of an editor component or does not have editor prop.'
                );
                return;
              }
              let d = T({
                updateDelay: a,
                editor: c,
                element: t,
                pluginKey: i,
                shouldShow: o,
                tippyOptions: l,
              });
              return c.registerPlugin(d), () => c.unregisterPlugin(i);
            }, [e.editor, n, t]),
            i.createElement(
              'div',
              {
                ref: s,
                className: e.className,
                style: { visibility: 'hidden' },
              },
              e.children
            )
          );
        },
        J = e => {
          let [t, s] = (0, i.useState)(null),
            { editor: n } = G();
          return (
            (0, i.useEffect)(() => {
              var s;
              if (
                !t ||
                (!(null === (s = e.editor) || void 0 === s) && s.isDestroyed) ||
                (null != n && n.isDestroyed)
              )
                return;
              let {
                  pluginKey: i = 'floatingMenu',
                  editor: r,
                  tippyOptions: l = {},
                  shouldShow: a = null,
                } = e,
                o = r || n;
              if (!o) {
                console.warn(
                  'FloatingMenu component is not rendered inside of an editor component or does not have editor prop.'
                );
                return;
              }
              let c = z({
                pluginKey: i,
                editor: o,
                element: t,
                tippyOptions: l,
                shouldShow: a,
              });
              return o.registerPlugin(c), () => o.unregisterPlugin(i);
            }, [e.editor, n, t]),
            i.createElement(
              'div',
              {
                ref: s,
                className: e.className,
                style: { visibility: 'hidden' },
              },
              e.children
            )
          );
        },
        X = (0, i.createContext)({ onDragStart: void 0 }),
        ee = () => (0, i.useContext)(X),
        et = e => {
          let t = e.as || 'div',
            { nodeViewContentRef: s } = ee();
          return i.createElement(
            t,
            F(D({}, e), {
              ref: s,
              'data-node-view-content': '',
              style: D({ whiteSpace: 'pre-wrap' }, e.style),
            })
          );
        },
        es = i.forwardRef((e, t) => {
          let { onDragStart: s } = ee(),
            n = e.as || 'div';
          return i.createElement(
            n,
            F(D({}, e), {
              ref: t,
              'data-node-view-wrapper': '',
              onDragStart: s,
              style: D({ whiteSpace: 'normal' }, e.style),
            })
          );
        }),
        en = class {
          constructor(
            e,
            {
              editor: t,
              props: s = {},
              as: n = 'div',
              className: i = '',
              attrs: r,
            }
          ) {
            (this.ref = null),
              (this.id = Math.floor(4294967295 * Math.random()).toString()),
              (this.component = e),
              (this.editor = t),
              (this.props = s),
              (this.element = document.createElement(n)),
              this.element.classList.add('react-renderer'),
              i && this.element.classList.add(...i.split(' ')),
              r &&
                Object.keys(r).forEach(e => {
                  this.element.setAttribute(e, r[e]);
                }),
              this.render();
          }
          render() {
            var e, t, s;
            let n = this.component,
              r = this.props;
            (('function' == typeof n &&
              n.prototype &&
              n.prototype.isReactComponent) ||
              ('object' == typeof n &&
                (null === (s = n.$$typeof) || void 0 === s
                  ? void 0
                  : s.toString()) === 'Symbol(react.forward_ref)')) &&
              (r.ref = e => {
                this.ref = e;
              }),
              (this.reactElement = i.createElement(n, D({}, r))),
              null ===
                (t =
                  null === (e = this.editor) || void 0 === e
                    ? void 0
                    : e.contentComponent) ||
                void 0 === t ||
                t.setRenderer(this.id, this);
          }
          updateProps(e = {}) {
            (this.props = D(D({}, this.props), e)), this.render();
          }
          destroy() {
            var e, t;
            null ===
              (t =
                null === (e = this.editor) || void 0 === e
                  ? void 0
                  : e.contentComponent) ||
              void 0 === t ||
              t.removeRenderer(this.id);
          }
        },
        ei = class extends l.NodeView {
          mount() {
            let e = {
              editor: this.editor,
              node: this.node,
              decorations: this.decorations,
              selected: !1,
              extension: this.extension,
              getPos: () => this.getPos(),
              updateAttributes: (e = {}) => this.updateAttributes(e),
              deleteNode: () => this.deleteNode(),
            };
            if (!this.component.displayName) {
              var t;
              this.component.displayName =
                (t = this.extension.name).charAt(0).toUpperCase() +
                t.substring(1);
            }
            let s = e => {
              let t = this.component,
                s = this.onDragStart.bind(this);
              return i.createElement(
                i.Fragment,
                null,
                i.createElement(
                  X.Provider,
                  {
                    value: {
                      onDragStart: s,
                      nodeViewContentRef: e => {
                        e &&
                          this.contentDOMElement &&
                          e.firstChild !== this.contentDOMElement &&
                          e.appendChild(this.contentDOMElement);
                      },
                    },
                  },
                  i.createElement(t, D({}, e))
                )
              );
            };
            (s.displayName = 'ReactNodeView'),
              (this.contentDOMElement = this.node.isLeaf
                ? null
                : document.createElement(this.node.isInline ? 'span' : 'div')),
              this.contentDOMElement &&
                (this.contentDOMElement.style.whiteSpace = 'inherit');
            let n = this.node.isInline ? 'span' : 'div';
            this.options.as && (n = this.options.as);
            let { className: r = '' } = this.options;
            (this.handleSelectionUpdate =
              this.handleSelectionUpdate.bind(this)),
              this.editor.on('selectionUpdate', this.handleSelectionUpdate),
              (this.renderer = new en(s, {
                editor: this.editor,
                props: e,
                as: n,
                className: `node-${this.node.type.name} ${r}`.trim(),
                attrs: this.options.attrs,
              }));
          }
          get dom() {
            var e;
            if (
              this.renderer.element.firstElementChild &&
              !(
                !(
                  null === (e = this.renderer.element.firstElementChild) ||
                  void 0 === e
                ) && e.hasAttribute('data-node-view-wrapper')
              )
            )
              throw Error(
                'Please use the NodeViewWrapper component for your node view.'
              );
            return this.renderer.element;
          }
          get contentDOM() {
            return this.node.isLeaf ? null : this.contentDOMElement;
          }
          handleSelectionUpdate() {
            let { from: e, to: t } = this.editor.state.selection;
            if (e <= this.getPos() && t >= this.getPos() + this.node.nodeSize) {
              if (this.renderer.props.selected) return;
              this.selectNode();
            } else {
              if (!this.renderer.props.selected) return;
              this.deselectNode();
            }
          }
          update(e, t) {
            let s = e => {
              this.renderer.updateProps(e);
            };
            if (e.type !== this.node.type) return !1;
            if ('function' == typeof this.options.update) {
              let n = this.node,
                i = this.decorations;
              return (
                (this.node = e),
                (this.decorations = t),
                this.options.update({
                  oldNode: n,
                  oldDecorations: i,
                  newNode: e,
                  newDecorations: t,
                  updateProps: () => s({ node: e, decorations: t }),
                })
              );
            }
            return (
              (e === this.node && this.decorations === t) ||
                ((this.node = e),
                (this.decorations = t),
                s({ node: e, decorations: t })),
              !0
            );
          }
          selectNode() {
            this.renderer.updateProps({ selected: !0 }),
              this.renderer.element.classList.add('ProseMirror-selectednode');
          }
          deselectNode() {
            this.renderer.updateProps({ selected: !1 }),
              this.renderer.element.classList.remove(
                'ProseMirror-selectednode'
              );
          }
          destroy() {
            this.renderer.destroy(),
              this.editor.off('selectionUpdate', this.handleSelectionUpdate),
              (this.contentDOMElement = null);
          }
        };
      function er(e, t) {
        return s => (s.editor.contentComponent ? new ei(e, s, t) : {});
      }
      var el = ({ label: e, defaultValue: t, placeholder: s, onChange: n }) =>
          (0, u.jsxs)('div', {
            className: 'flex flex-col gap-1',
            children: [
              (0, u.jsx)('label', {
                className:
                  'inline-block font-semibold text-xs text-custom-text-400',
                children: e,
              }),
              (0, u.jsx)('input', {
                placeholder: s,
                onClick: e => {
                  e.stopPropagation();
                },
                className:
                  'w-[280px] outline-none bg-custom-background-90 text-custom-text-900 text-sm',
                defaultValue: t,
                onChange: n,
              }),
            ],
          }),
        ea = ({ viewProps: e }) => {
          let { editor: t, from: s, to: n } = e,
            [l, a] = (0, i.useState)({ from: s, to: n }),
            [o, c] = (0, i.useState)(e.url),
            m = (0, i.useRef)(),
            h = e => {
              let t = RegExp(
                  '^(https?:\\/\\/)?([\\w-]+\\.)+[\\w-]{2,}|((\\d{1,3}\\.){3}\\d{1,3})(\\:\\d+)?(\\/[-\\w.%]+)*(\\?[;&\\w.%=-]*)?(\\#[-\\w]*)?$',
                  'i'
                ).test(e),
                s = (0, r.HH)(e);
              return t && s;
            },
            p = e => {
              c(e);
            };
          (0, i.useEffect)(
            () => () => {
              if (m.current) return;
              let i = h(o) ? o : e.url;
              n >= t.state.doc.content.size ||
                (t.view.dispatch(
                  t.state.tr.removeMark(s, n, t.schema.marks.link)
                ),
                t.view.dispatch(
                  t.state.tr.addMark(
                    s,
                    n,
                    t.schema.marks.link.create({ href: i })
                  )
                ));
            },
            [o, t, s, n, e.url]
          );
          let x = e => {
              if ('' === e) return;
              let n = t.view.state.doc.nodeAt(s);
              if (!n) return;
              let i = n.marks;
              i &&
                (t.chain().setTextSelection(s).run(),
                t.chain().deleteRange({ from: l.from, to: l.to }).run(),
                t.chain().insertContent(e).run(),
                t
                  .chain()
                  .setTextSelection({ from: s, to: s + e.length })
                  .run(),
                a({ from: s, to: s + e.length }),
                i.forEach(e => {
                  t.chain().setMark(e.type.name, e.attrs).run();
                }));
            },
            f = () => {
              t.view.dispatch(t.state.tr.removeMark(s, n, t.schema.marks.link)),
                (m.current = !0),
                e.closeLinkView();
            };
          return (0, u.jsxs)('div', {
            onKeyDown: t => 'Enter' === t.key && e.closeLinkView(),
            className:
              'shadow-md rounded p-2 flex flex-col gap-3 bg-custom-background-90 border-custom-border-100 border-2',
            children: [
              (0, u.jsx)(el, {
                label: 'URL',
                placeholder: 'Enter or paste URL',
                defaultValue: o,
                onChange: e => p(e.target.value),
              }),
              (0, u.jsx)(el, {
                label: 'Text',
                placeholder: 'Enter Text to display',
                defaultValue:
                  n >= t.state.doc.content.size
                    ? ''
                    : t.state.doc.textBetween(
                        s,
                        n,
                        `
`
                      ),
                onChange: e => x(e.target.value),
              }),
              (0, u.jsx)('div', {
                className: 'mb-1 bg-custom-border-300 h-[1px] w-full gap-2',
              }),
              (0, u.jsxs)('div', {
                className:
                  'flex text-sm text-custom-text-800 gap-2 items-center',
                children: [
                  (0, u.jsx)(d.Z, { size: 14, className: 'inline-block' }),
                  (0, u.jsx)('button', {
                    onClick: () => f(),
                    className: 'cursor-pointer',
                    children: 'Remove Link',
                  }),
                ],
              }),
            ],
          });
        },
        eo = ({ viewProps: e, switchView: t }) =>
          (0, u.jsx)('p', { children: 'LinkInputView' }),
        ec = ({ viewProps: e, switchView: t }) => {
          let { editor: s, from: n, to: i, url: r } = e;
          return (0, u.jsx)('div', {
            className: 'absolute left-0 top-0 max-w-max',
            children: (0, u.jsxs)('div', {
              className:
                'shadow-md items-center rounded p-2 flex gap-3 bg-custom-background-90 border-custom-border-100 border-2 text-custom-text-300 text-xs',
              children: [
                (0, u.jsx)(m.Z, { size: 14, className: 'inline-block' }),
                (0, u.jsx)('p', {
                  children: r.length > 40 ? r.slice(0, 40) + '...' : r,
                }),
                (0, u.jsxs)('div', {
                  className: 'flex gap-2',
                  children: [
                    (0, u.jsx)('button', {
                      onClick: () => {
                        navigator.clipboard.writeText(r), e.closeLinkView();
                      },
                      className: 'cursor-pointer',
                      children: (0, u.jsx)(h.Z, {
                        size: 14,
                        className: 'inline-block',
                      }),
                    }),
                    (0, u.jsx)('button', {
                      onClick: () => t('LinkEditView'),
                      className: 'cursor-pointer',
                      children: (0, u.jsx)(p.Z, {
                        size: 14,
                        className: 'inline-block',
                      }),
                    }),
                    (0, u.jsx)('button', {
                      onClick: () => {
                        s.view.dispatch(
                          s.state.tr.removeMark(n, i, s.schema.marks.link)
                        ),
                          e.closeLinkView();
                      },
                      className: 'cursor-pointer',
                      children: (0, u.jsx)(d.Z, {
                        size: 14,
                        className: 'inline-block',
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        ed = e => {
          var t;
          let [s, n] = (0, i.useState)(
              null != (t = e.view) ? t : 'LinkInputView'
            ),
            [r, l] = (0, i.useState)(e.from),
            a = e => {
              n(e);
            };
          return (
            (0, i.useEffect)(() => {
              e.from !== r && (n('LinkPreview'), l(e.from));
            }, []),
            (() => {
              switch (s) {
                case 'LinkPreview':
                  return (0, u.jsx)(ec, { viewProps: e, switchView: a });
                case 'LinkEditView':
                  return (0, u.jsx)(ea, { viewProps: e, switchView: a });
                case 'LinkInputView':
                  return (0, u.jsx)(eo, { viewProps: e, switchView: a });
              }
            })()
          );
        };
      function eu(e) {
        var t;
        let { editor: s } = e,
          n = (0, i.useRef)(null),
          r = (0, i.useRef)(null),
          l = (0, i.useCallback)(e => {
            var t, s, n;
            let i = e.target;
            if (
              i.matches('.drag-handle-dots') ||
              i.matches('.drag-handle-dot')
            ) {
              e.preventDefault(),
                null == (t = r.current) ||
                  t.setProps({
                    getReferenceClientRect: () => i.getBoundingClientRect(),
                  }),
                null == (s = r.current) || s.show();
              return;
            }
            null == (n = r.current) || n.hide();
          }, []);
        (0, i.useEffect)(
          () => (
            n.current &&
              (n.current.remove(),
              (n.current.style.visibility = 'visible'),
              (r.current = (0, o.ZP)(document.body, {
                getReferenceClientRect: null,
                content: n.current,
                appendTo: () => document.querySelector('.frame-renderer'),
                trigger: 'manual',
                interactive: !0,
                arrow: !1,
                placement: 'left-start',
                animation: 'shift-away',
                maxWidth: 500,
                hideOnClick: !0,
                onShown: () => {
                  var e;
                  null == (e = n.current) || e.focus();
                },
              }))),
            () => {
              var e;
              null == (e = r.current) || e.destroy(), (r.current = null);
            }
          ),
          []
        ),
          (0, i.useEffect)(() => {
            let e = () => {
                var e;
                null == (e = r.current) || e.hide();
              },
              t = () => {
                var e;
                null == (e = r.current) || e.hide();
              };
            return (
              document.addEventListener('click', l),
              document.addEventListener('contextmenu', l),
              document.addEventListener('keydown', e),
              document.addEventListener('scroll', t, !0),
              () => {
                document.removeEventListener('click', l),
                  document.removeEventListener('contextmenu', l),
                  document.removeEventListener('keydown', e),
                  document.removeEventListener('scroll', t, !0);
              }
            );
          }, [l]);
        let a = [
          {
            icon: g.Z,
            key: 'delete',
            label: 'Delete',
            onClick: e => {
              var t;
              s.chain().deleteSelection().focus().run(),
                null == (t = r.current) || t.hide(),
                e.preventDefault(),
                e.stopPropagation();
            },
          },
          {
            icon: h.Z,
            key: 'duplicate',
            label: 'Duplicate',
            isDisabled:
              (null == (t = s.state.selection.content().content.firstChild)
                ? void 0
                : t.type.name) === 'image',
            onClick: e => {
              var t;
              e.preventDefault(), e.stopPropagation();
              try {
                let { state: e } = s,
                  { selection: t } = e,
                  n = t.content().content.firstChild,
                  i = e.doc.content.size;
                if (!n)
                  throw Error(
                    'No content selected or content is not duplicable.'
                  );
                let r = t.to;
                if (r < 0 || r > i)
                  throw Error(
                    'The insertion position is invalid or outside the document.'
                  );
                let l = n.toJSON();
                s.chain()
                  .insertContentAt(r, l, { updateSelection: !0 })
                  .focus(Math.min(r + 1, i), { scrollIntoView: !1 })
                  .run();
              } catch (e) {
                e instanceof Error && console.error(e.message);
              }
              null == (t = r.current) || t.hide();
            },
          },
        ];
        return (0, u.jsx)('div', {
          ref: n,
          className:
            'z-10 max-h-60 min-w-[7rem] overflow-y-scroll rounded-md border-[0.5px] border-custom-border-300 bg-custom-background-100 px-2 py-2.5 shadow-custom-shadow-rg',
          children: a.map(e =>
            e.isDisabled && 'duplicate' === e.key
              ? null
              : (0, u.jsxs)(
                  'button',
                  {
                    type: 'button',
                    className:
                      'flex w-full items-center gap-2 truncate rounded px-1 py-1.5 text-xs text-custom-text-200 hover:bg-custom-background-80',
                    onClick: e.onClick,
                    disabled: e.isDisabled,
                    children: [
                      (0, u.jsx)(e.icon, { className: 'h-3 w-3' }),
                      e.label,
                    ],
                  },
                  e.key
                )
          ),
        });
      }
      var em = e => {
          let {
              tabIndex: t,
              editor: s,
              hideDragHandle: n,
              editorContainerClassName: l,
            } = e,
            [a, o] = (0, i.useState)(),
            [c, d] = (0, i.useState)(!1),
            [m, h] = (0, i.useState)(),
            [p, g] = (0, i.useState)(() => () => {}),
            {
              refs: j,
              floatingStyles: y,
              context: w,
            } = (0, x.YF)({
              open: c,
              onOpenChange: d,
              middleware: [
                (0, f.RR)(),
                (0, f.uY)(),
                (0, f.Cp)({ strategy: 'referenceHidden' }),
              ],
              whileElementsMounted: v.Me,
            }),
            b = (0, x.bQ)(w, { ancestorScroll: !0 }),
            { getFloatingProps: N } = (0, x.NI)([b]),
            k = (0, i.useRef)(null),
            C = () => d(!1),
            S = (0, i.useCallback)(
              e => {
                var t;
                if (!s) return;
                let n = e.target,
                  i = s.view;
                if (!n || !i) return;
                let r = i.posAtDOM(n, 0);
                if (!r || r < 0 || 'A' !== n.nodeName) return;
                let l = i.state.doc.nodeAt(r);
                if (!l || !l.isAtom) return;
                let a = l.marks;
                if (!a) return;
                let c = a.find(e => 'link' === e.type.name);
                if (!c) return;
                k.current && (null == (t = k.current) || t.remove()), p && p();
                let u = c.attrs.href,
                  m = new en(ed, {
                    props: {
                      view: 'LinkPreview',
                      url: u,
                      editor: s,
                      from: r,
                      to: r + l.nodeSize,
                    },
                    editor: s,
                  }).element;
                (k.current = m),
                  g(
                    (0, v.Me)(n, m, () => {
                      (0, v.oo)(n, m, {
                        placement: 'bottom',
                        middleware: [
                          (0, f.RR)(),
                          (0, f.uY)(),
                          (0, f.Cp)({ strategy: 'referenceHidden' }),
                        ],
                      }).then(({ x: e, y: t }) => {
                        h({ x: e - 300, y: t - 50 }),
                          d(!0),
                          o({
                            closeLinkView: C,
                            view: 'LinkPreview',
                            url: u,
                            editor: s,
                            from: r,
                            to: r + l.nodeSize,
                          });
                      });
                    })
                  );
              },
              [s, p]
            );
          return (0, u.jsxs)(u.Fragment, {
            children: [
              (0, u.jsx)('div', {
                className: 'frame-renderer flex-grow w-full -mx-5',
                onMouseOver: S,
                children: (0, u.jsxs)(r.Nf, {
                  editor: s,
                  hideDragHandle: n,
                  editorContainerClassName: l,
                  children: [
                    (0, u.jsx)(r.zg, { tabIndex: t, editor: s }),
                    s && s.isEditable && (0, u.jsx)(eu, { editor: s }),
                  ],
                }),
              }),
              c &&
                a &&
                m &&
                (0, u.jsx)('div', {
                  style: F(D({}, y), { left: `${m.x}px`, top: `${m.y}px` }),
                  className: 'absolute',
                  ref: j.setFloating,
                  children: (0, u.jsx)(ed, D(F(D({}, a), { style: y }), N())),
                }),
            ],
          });
        },
        eh = e =>
          l.Node.create({
            name: 'issue-embed-component',
            group: 'block',
            atom: !0,
            addAttributes: () => ({
              entity_identifier: { default: void 0 },
              id: { default: void 0 },
            }),
            addNodeView: () =>
              er(t =>
                (0, u.jsx)(es, {
                  children: e.widgetCallback(t.node.attrs.entity_identifier),
                })
              ),
            parseHTML: () => [
              {
                tag: 'issue-embed-component',
                getAttrs: e =>
                  'string' == typeof e
                    ? null
                    : {
                        id: e.getAttribute('id') || '',
                        title: e.getAttribute('title') || '',
                        entity_name: e.getAttribute('entity_name') || '',
                        entity_identifier:
                          e.getAttribute('entity_identifier') || '',
                        project_identifier:
                          e.getAttribute('project_identifier') || '',
                        sequence_id: e.getAttribute('sequence_id') || '',
                      },
              },
            ],
            renderHTML: ({ HTMLAttributes: e }) => [
              'issue-embed-component',
              (0, l.mergeAttributes)(e),
            ],
          }),
        ep = l.Extension.create({
          name: 'issue-embed-suggestions',
          addOptions: () => ({
            suggestion: {
              char: '#issue_',
              allowSpaces: !0,
              command: ({ editor: e, range: t, props: s }) => {
                s.command({ editor: e, range: t });
              },
            },
          }),
          addProseMirrorPlugins() {
            return [
              (0, j.ZP)(
                D(
                  {
                    pluginKey: new a.H$('issue-embed-suggestions'),
                    editor: this.editor,
                  },
                  this.options.suggestion
                )
              ),
            ];
          },
        }),
        ex = e => {
          let { editor: t, searchCallback: s, query: n, range: l } = e,
            [a, o] = (0, i.useState)(void 0),
            [c, d] = (0, i.useState)(0),
            m = (0, i.useCallback)(
              e => {
                try {
                  let s = t.state.doc.content.size;
                  if (l.from < 0 || l.to >= s) return;
                  let n = (0, y.Z)();
                  t.chain()
                    .focus()
                    .insertContentAt(l, {
                      type: 'issue-embed-component',
                      attrs: {
                        entity_identifier: null == e ? void 0 : e.id,
                        id: n,
                      },
                    })
                    .run();
                } catch (e) {
                  console.log('Error inserting issue embed', e);
                }
              },
              [t, l]
            );
          return (
            (0, i.useEffect)(() => {
              let e = ['ArrowUp', 'ArrowDown', 'Enter', 'Tab'],
                s = s => {
                  if (a) {
                    if (e.includes(s.key)) {
                      if ('ArrowUp' === s.key) {
                        let e = c - 1;
                        return d(e < 0 ? a.length - 1 : e), !0;
                      }
                      if ('ArrowDown' === s.key) {
                        let e = c + 1;
                        return d(e >= a.length ? 0 : e), !0;
                      }
                      return 'Enter' === s.key && (m(a[c]), !0);
                    }
                    'Escape' === s.key && (t.isFocused || t.chain().focus());
                  }
                };
              return (
                document.addEventListener('keydown', s),
                () => {
                  document.removeEventListener('keydown', s);
                }
              );
            }, [t, a, c, d, m]),
            (0, i.useEffect)(() => {
              o(void 0),
                s(n).then(e => {
                  o(e);
                });
            }, [n, s]),
            (0, u.jsx)('div', {
              id: 'issue-list-container',
              className:
                'z-10 overflow-y-auto overflow-x-hidden rounded-md border-[0.5px] border-custom-border-300 bg-custom-background-100 max-h-60 w-96 px-2 py-2.5 shadow-custom-shadow-rg whitespace-nowrap transition-all',
              children: a
                ? a.length > 0
                  ? a.map((e, t) =>
                      (0, u.jsxs)(
                        'button',
                        {
                          type: 'button',
                          className: (0, r.cn)(
                            'w-full flex items-center gap-2 select-none truncate rounded px-1 py-1.5 text-left text-xs text-custom-text-200 hover:bg-custom-background-90',
                            { 'bg-custom-background-90': t === c }
                          ),
                          onClick: () => m(e),
                          children: [
                            (0, u.jsx)('h5', {
                              className:
                                'whitespace-nowrap text-xs text-custom-text-300 flex-shrink-0',
                              children: e.subTitle,
                            }),
                            e.icon,
                            (0, u.jsx)('p', {
                              className: 'flex-grow w-full truncate text-xs',
                              children: e.title,
                            }),
                          ],
                        },
                        e.id
                      )
                    )
                  : (0, u.jsx)('div', {
                      className: 'text-center text-xs text-custom-text-400',
                      children: 'No results found',
                    })
                : (0, u.jsx)('div', {
                    className: 'text-center text-xs text-custom-text-400',
                    children: 'Loading',
                  }),
            })
          );
        },
        ef = e => {
          let t = null,
            s = null;
          return {
            onStart: n => {
              var i;
              let r =
                null != (i = document.querySelector('.active-editor'))
                  ? i
                  : document.querySelector('#editor-container');
              (t = new en(ex, {
                props: F(D({}, n), { searchCallback: e }),
                editor: n.editor,
              })),
                (s = (0, o.ZP)('body', {
                  flipbehavior: ['bottom', 'top'],
                  appendTo: r,
                  flip: !0,
                  flipOnUpdate: !0,
                  getReferenceClientRect: n.clientRect,
                  content: t.element,
                  showOnCreate: !0,
                  interactive: !0,
                  trigger: 'manual',
                  placement: 'bottom-start',
                })),
                null == r ||
                  r.addEventListener('scroll', () => {
                    null == s || s[0].destroy();
                  });
            },
            onUpdate: e => {
              null == t || t.updateProps(e),
                s && s[0].setProps({ getReferenceClientRect: e.clientRect });
            },
            onKeyDown: e => {
              var n;
              return 'Escape' === e.event.key
                ? (null == s || s[0].hide(), !0)
                : !!['ArrowUp', 'ArrowDown', 'Enter', 'Tab'].includes(
                    e.event.key
                  ) &&
                    (null == (n = null == t ? void 0 : t.ref) || n.onKeyDown(e),
                    !0);
            },
            onExit: () => {
              let e = document.querySelector('.frame-renderer');
              e && e.removeEventListener('scroll', () => {}),
                null == s || s[0].destroy(),
                setTimeout(() => {
                  null == t || t.destroy();
                }, 300);
            },
          };
        },
        ev = l.Extension.create({
          name: 'placeholder',
          addOptions: () => ({
            emptyEditorClass: 'is-editor-empty',
            emptyNodeClass: 'is-empty',
            placeholder: 'Write something …',
            showOnlyWhenEditable: !0,
            considerAnyAsEmpty: !1,
            showOnlyCurrent: !0,
            includeChildren: !1,
          }),
          addProseMirrorPlugins() {
            return [
              new a.Sy({
                key: new a.H$('placeholder'),
                props: {
                  decorations: ({ doc: e, selection: t }) => {
                    var s;
                    let n =
                        this.editor.isEditable ||
                        !this.options.showOnlyWhenEditable,
                      { anchor: i } = t,
                      r = [];
                    if (!n) return null;
                    let { firstChild: l } = e.content,
                      a = l && l.type.isLeaf,
                      o = l && l.isAtom,
                      c =
                        !!this.options.considerAnyAsEmpty ||
                        (l &&
                          l.type.name ===
                            (null === (s = e.type.contentMatch.defaultType) ||
                            void 0 === s
                              ? void 0
                              : s.name)),
                      d =
                        e.content.childCount <= 1 &&
                        l &&
                        c &&
                        l.nodeSize <= 2 &&
                        (!a || !o);
                    return (
                      e.descendants((e, t) => {
                        let s = i >= t && i <= t + e.nodeSize,
                          n = !e.isLeaf && !e.childCount;
                        if ((s || !this.options.showOnlyCurrent) && n) {
                          let n = [this.options.emptyNodeClass];
                          d && n.push(this.options.emptyEditorClass);
                          let i = w.p.node(t, t + e.nodeSize, {
                            class: n.join(' '),
                            'data-placeholder':
                              'function' == typeof this.options.placeholder
                                ? this.options.placeholder({
                                    editor: this.editor,
                                    node: e,
                                    pos: t,
                                    hasAnchor: s,
                                  })
                                : this.options.placeholder,
                          });
                          r.push(i);
                        }
                        return this.options.includeChildren;
                      }),
                      w.EH.create(e, r)
                    );
                  },
                },
              }),
            ];
          },
        }),
        eg = (e, t, s) => {
          let n = [
            (0, b.v)(e, [
              {
                key: 'issue_embed',
                title: 'Issue embed',
                description: 'Embed an issue from the project.',
                searchTerms: ['issue', 'link', 'embed'],
                icon: (0, u.jsx)(N.uQ, { className: 'h-3.5 w-3.5' }),
                command: ({ editor: e, range: t }) => {
                  e.chain()
                    .focus()
                    .insertContentAt(
                      t,
                      "<p class='text-sm bg-gray-300 w-fit pl-3 pr-3 pt-1 pb-1 rounded shadow-sm'>#issue_</p>"
                    )
                    .run();
                },
              },
            ]),
            (0, b.l)(t),
            ev.configure({
              placeholder: ({ node: e }) =>
                'heading' === e.type.name
                  ? `Heading ${e.attrs.level}`
                  : 'image' === e.type.name || 'table' === e.type.name
                    ? ''
                    : "Press '/' for commands...",
              includeChildren: !0,
            }),
          ];
          return (
            s &&
              n.push(
                eh({ widgetCallback: s.widgetCallback }).configure({
                  issueEmbedConfig: s,
                }),
                ep.configure({
                  suggestion: { render: () => ef(s.searchCallback) },
                })
              ),
            n
          );
        },
        ej = e => {
          let {
              onChange: t,
              initialValue: s,
              value: n,
              fileHandler: l,
              containerClassName: a,
              editorClassName: o = '',
              mentionHandler: c,
              handleEditorReady: d,
              forwardedRef: m,
              tabIndex: h,
              embedHandler: p,
              placeholder: x,
            } = e,
            [f, v] = (0, i.useState)(() => {}),
            g = (0, r.jE)({
              onChange(e, s) {
                t(e, s);
              },
              editorClassName: o,
              restoreFile: l.restore,
              uploadFile: l.upload,
              deleteFile: l.delete,
              cancelUploadImage: l.cancel,
              initialValue: s,
              value: n,
              handleEditorReady: d,
              forwardedRef: m,
              mentionHandler: c,
              extensions: eg(
                l.upload,
                e => {
                  v(() => e);
                },
                null == p ? void 0 : p.issue
              ),
              placeholder: x,
              tabIndex: h,
            }),
            j = (0, r.mo)({
              noBorder: !0,
              borderOnFocus: !1,
              containerClassName: a,
            });
          return g
            ? (0, u.jsx)(em, {
                tabIndex: h,
                editor: g,
                editorContainerClassName: j,
                hideDragHandle: f,
              })
            : null;
        },
        ey = i.forwardRef((e, t) =>
          (0, u.jsx)(ej, F(D({}, e), { forwardedRef: t }))
        );
      ey.displayName = 'DocumentEditorWithRef';
      var ew = e => {
          var t;
          let {
              containerClassName: s,
              editorClassName: n = '',
              initialValue: i,
              forwardedRef: l,
              tabIndex: a,
              handleEditorReady: o,
              mentionHandler: c,
              embedHandler: d,
            } = e,
            m = (0, r.oz)({
              initialValue: i,
              editorClassName: n,
              mentionHandler: c,
              forwardedRef: l,
              handleEditorReady: o,
              extensions:
                null != d && d.issue
                  ? [
                      eh({
                        widgetCallback:
                          null == (t = null == d ? void 0 : d.issue)
                            ? void 0
                            : t.widgetCallback,
                      }).configure({
                        issueEmbedConfig: null == d ? void 0 : d.issue,
                      }),
                    ]
                  : [],
            });
          if (!m) return null;
          let h = (0, r.mo)({ containerClassName: s });
          return (0, u.jsx)(em, {
            tabIndex: a,
            editor: m,
            editorContainerClassName: h,
          });
        },
        eb = (0, i.forwardRef)((e, t) =>
          (0, u.jsx)(ew, F(D({}, e), { forwardedRef: t }))
        );
      eb.displayName = 'DocumentReadOnlyEditorWithRef';
      var eN = () => {
        let [e, t] = (0, i.useState)([]);
        return {
          updateMarkings: (0, i.useCallback)(e => {
            let s = new DOMParser()
                .parseFromString(e, 'text/html')
                .querySelectorAll('h1, h2, h3'),
              n = [],
              i = 0,
              r = 0,
              l = 0;
            s.forEach(e => {
              let t = parseInt(e.tagName[1]);
              n.push({
                type: 'heading',
                level: t,
                text: e.textContent || '',
                sequence: 1 === t ? ++i : 2 === t ? ++r : ++l,
              });
            }),
              t(n);
          }, []),
          markings: e,
        };
      };
    },
  },
]);
