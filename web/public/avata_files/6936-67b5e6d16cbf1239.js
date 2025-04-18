'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6936],
  {
    13995: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return a;
        },
      });
      /**
       * @license lucide-react v0.378.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let a = (0, s(73471).Z)('BarChart2', [
        ['line', { x1: '18', x2: '18', y1: '20', y2: '10', key: '1xfpm4' }],
        ['line', { x1: '12', x2: '12', y1: '20', y2: '4', key: 'be30l9' }],
        ['line', { x1: '6', x2: '6', y1: '20', y2: '14', key: '1r4le6' }],
      ]);
    },
    35854: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return a;
        },
      });
      /**
       * @license lucide-react v0.378.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let a = (0, s(73471).Z)('Clock', [
        ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
        ['polyline', { points: '12 6 12 12 16 14', key: '68esgv' }],
      ]);
    },
    20546: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return a;
        },
      });
      /**
       * @license lucide-react v0.378.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let a = (0, s(73471).Z)('Home', [
        [
          'path',
          {
            d: 'm3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z',
            key: 'y5dka4',
          },
        ],
        ['polyline', { points: '9 22 9 12 15 12 15 22', key: 'e2us08' }],
      ]);
    },
    75839: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return a;
        },
      });
      /**
       * @license lucide-react v0.378.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let a = (0, s(73471).Z)('Zap', [
        [
          'path',
          {
            d: 'M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z',
            key: '1xq2db',
          },
        ],
      ]);
    },
    86936: function (e, t, s) {
      s.d(t, {
        Kf: function () {
          return ea;
        },
        OR: function () {
          return W;
        },
        uE: function () {
          return er;
        },
        eR: function () {
          return ee;
        },
        wv: function () {
          return P;
        },
        oB: function () {
          return ei;
        },
        i8: function () {
          return T;
        },
        Vb: function () {
          return H;
        },
        LM: function () {
          return B;
        },
        xY: function () {
          return Q;
        },
        m6: function () {
          return eS;
        },
        Vw: function () {
          return th;
        },
        Tq: function () {
          return R;
        },
        N4: function () {
          return eN;
        },
        RA: function () {
          return x;
        },
        bH: function () {
          return y;
        },
        _q: function () {
          return g;
        },
        mG: function () {
          return eO;
        },
        b8: function () {
          return tn;
        },
        rB: function () {
          return td;
        },
        KK: function () {
          return Z;
        },
        J_: function () {
          return J;
        },
      });
      var a = s(24246),
        l = s(27378),
        r = s(43659),
        n = s(86677),
        i = s(65709),
        o = s(25262),
        c = s(25449),
        d = s(93116),
        m = s(10634),
        u = s(18894);
      let x = (0, r.Pi)(e => {
        var t;
        let { invitationId: s } = e,
          [r, x] = (0, l.useState)(!1),
          { workspaceSlug: h } = (0, n.useRouter)().query,
          {
            membership: {
              currentWorkspaceMemberInfo: p,
              currentWorkspaceRole: f,
            },
          } = (0, m.aF)(),
          {
            workspace: {
              updateMemberInvitation: v,
              deleteMemberInvitation: g,
              getWorkspaceInvitationDetails: b,
            },
          } = (0, m.Kb)(),
          { isMobile: j } = (0, u.L)(),
          y = b(s),
          w = async () => {
            h &&
              y &&
              (await g(h.toString(), y.id)
                .then(() => {
                  (0, c.fz)({
                    type: c.do.SUCCESS,
                    title: 'Success!',
                    message: 'Invitation removed successfully.',
                  });
                })
                .catch(e =>
                  (0, c.fz)({
                    type: c.do.ERROR,
                    title: 'Error!',
                    message:
                      (null == e ? void 0 : e.error) ||
                      'Something went wrong. Please try again.',
                  })
                ));
          };
        if (!y) return null;
        let N = f === d.fp.ADMIN,
          k = f && [d.fp.ADMIN, d.fp.MEMBER].includes(f);
        return p
          ? (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(ea, {
                  isOpen: r,
                  onClose: () => x(!1),
                  userDetails: { id: y.id, display_name: ''.concat(y.email) },
                  onSubmit: w,
                }),
                (0, a.jsxs)('div', {
                  className:
                    'group flex items-center justify-between px-3 py-4 hover:bg-custom-background-90',
                  children: [
                    (0, a.jsxs)('div', {
                      className: 'flex items-center gap-x-4 gap-y-2',
                      children: [
                        (0, a.jsx)('span', {
                          className:
                            'relative flex h-10 w-10 items-center justify-center rounded bg-gray-700 p-4 capitalize text-white',
                          children: (null !== (t = y.email) && void 0 !== t
                            ? t
                            : '?')[0],
                        }),
                        (0, a.jsx)('div', {
                          children: (0, a.jsx)('h4', {
                            className: 'cursor-default text-sm',
                            children: y.email,
                          }),
                        }),
                      ],
                    }),
                    (0, a.jsxs)('div', {
                      className: 'flex items-center gap-2 text-xs',
                      children: [
                        (0, a.jsx)('div', {
                          className:
                            'flex items-center justify-center rounded bg-yellow-500/20 px-2.5 py-1 text-center text-xs font-medium text-yellow-500',
                          children: (0, a.jsx)('p', { children: 'Pending' }),
                        }),
                        (0, a.jsx)(c.AP, {
                          customButton: (0, a.jsxs)('div', {
                            className:
                              'item-center flex gap-1 rounded px-2 py-0.5',
                            children: [
                              (0, a.jsx)('span', {
                                className:
                                  'flex items-center rounded text-xs font-medium '.concat(
                                    k ? '' : 'text-custom-sidebar-text-400'
                                  ),
                                children: d.HB[y.role],
                              }),
                              k &&
                                (0, a.jsx)('span', {
                                  className: 'grid place-items-center',
                                  children: (0, a.jsx)(i.Z, {
                                    className: 'h-3 w-3',
                                  }),
                                }),
                            ],
                          }),
                          value: y.role,
                          onChange: e => {
                            h &&
                              e &&
                              v(h.toString(), y.id, { role: e }).catch(() => {
                                (0, c.fz)({
                                  type: c.do.ERROR,
                                  title: 'Error!',
                                  message:
                                    'An error occurred while updating member role. Please try again.',
                                });
                              });
                          },
                          disabled: !k,
                          placement: 'bottom-end',
                          children: Object.keys(d.HB).map(e =>
                            f && 20 !== f && f < parseInt(e)
                              ? null
                              : (0, a.jsx)(
                                  c.AP.Option,
                                  {
                                    value: parseInt(e, 10),
                                    children: (0, a.jsx)(a.Fragment, {
                                      children: d.HB[parseInt(e)],
                                    }),
                                  },
                                  e
                                )
                          ),
                        }),
                        (0, a.jsx)(c.u, {
                          tooltipContent: 'Remove member',
                          disabled: !N,
                          isMobile: j,
                          children: (0, a.jsx)('button', {
                            type: 'button',
                            onClick: () => x(!0),
                            className: 'pointer-events-none opacity-0 '.concat(
                              N
                                ? 'group-hover:pointer-events-auto group-hover:opacity-100'
                                : ''
                            ),
                            children: (0, a.jsx)(o.Z, {
                              className: 'h-3.5 w-3.5 text-red-500',
                              strokeWidth: 2,
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          : null;
      });
      var h = s(79894),
        p = s.n(h),
        f = s(98563),
        v = s(865);
      let g = (0, r.Pi)(e => {
        var t, s;
        let { memberId: r } = e,
          [x, h] = (0, l.useState)(!1),
          g = (0, n.useRouter)(),
          { workspaceSlug: b } = g.query,
          {
            currentUser: j,
            currentUserSettings: y,
            membership: { currentWorkspaceRole: w, leaveWorkspace: N },
          } = (0, m.aF)(),
          {
            workspace: {
              updateMember: k,
              removeMemberFromWorkspace: C,
              getWorkspaceMemberDetails: S,
            },
          } = (0, m.Kb)(),
          { captureEvent: _ } = (0, m.DN)(),
          { isMobile: E } = (0, u.L)(),
          I = S(r),
          F = async () => {
            b &&
              y &&
              (await N(b.toString())
                .then(() => {
                  _(v.Xg, {
                    state: 'SUCCESS',
                    element: 'Workspace settings members page',
                  }),
                    g.push('/profile');
                })
                .catch(e =>
                  (0, c.fz)({
                    type: c.do.ERROR,
                    title: 'Error!',
                    message:
                      (null == e ? void 0 : e.error) ||
                      'Something went wrong. Please try again.',
                  })
                ));
          },
          z = async () => {
            b &&
              I &&
              (await C(b.toString(), I.member.id).catch(e =>
                (0, c.fz)({
                  type: c.do.ERROR,
                  title: 'Error!',
                  message:
                    (null == e ? void 0 : e.error) ||
                    'Something went wrong. Please try again.',
                })
              ));
          },
          R = async () => {
            (null == I ? void 0 : I.member.id) === (null == j ? void 0 : j.id)
              ? await F()
              : await z();
          };
        if (!I) return null;
        let T =
            (null == I ? void 0 : I.member.id) === (null == j ? void 0 : j.id),
          P = w === d.fp.ADMIN,
          A = w && !T && [d.fp.ADMIN, d.fp.MEMBER].includes(w) && I.role <= w;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(ea, {
              isOpen: x,
              onClose: () => h(!1),
              userDetails: {
                id: I.member.id,
                display_name: ''.concat(I.member.display_name),
              },
              onSubmit: R,
            }),
            (0, a.jsx)('div', {
              className:
                'group w-full flex items-center justify-between px-3 py-4 hover:bg-custom-background-90',
              children: (0, a.jsxs)('div', {
                className: 'flex w-full items-center gap-x-4 gap-y-2',
                children: [
                  I.member.avatar && '' !== I.member.avatar.trim()
                    ? (0, a.jsx)(p(), {
                        href: '/'.concat(b, '/profile/').concat(I.member.id),
                        children: (0, a.jsx)('span', {
                          className:
                            'relative flex h-10 w-10 items-center justify-center rounded p-4 capitalize text-white',
                          children: (0, a.jsx)('img', {
                            src: I.member.avatar,
                            className:
                              'absolute left-0 top-0 h-full w-full rounded object-cover',
                            alt: I.member.display_name || I.member.email,
                          }),
                        }),
                      })
                    : (0, a.jsx)(p(), {
                        href: '/'.concat(b, '/profile/').concat(I.member.id),
                        children: (0, a.jsx)('span', {
                          className:
                            'relative flex h-10 w-10 items-center justify-center rounded bg-gray-700 p-4 capitalize text-white',
                          children: (null !==
                            (s =
                              null !== (t = I.member.email) && void 0 !== t
                                ? t
                                : I.member.display_name) && void 0 !== s
                            ? s
                            : '?')[0],
                        }),
                      }),
                  (0, a.jsxs)('div', {
                    className:
                      'w-full truncate flex items-center justify-between',
                    children: [
                      (0, a.jsxs)('div', {
                        className: 'truncate',
                        children: [
                          (0, a.jsx)(p(), {
                            href: '/'
                              .concat(b, '/profile/')
                              .concat(I.member.id),
                            className: 'truncate',
                            children: (0, a.jsx)('div', {
                              className: 'w-full truncate',
                              children: (0, a.jsxs)('span', {
                                className: 'text-sm font-medium truncate',
                                children: [
                                  I.member.first_name,
                                  ' ',
                                  I.member.last_name,
                                ],
                              }),
                            }),
                          }),
                          (0, a.jsxs)('div', {
                            className:
                              'flex flex-col sm:flex-row items-start sm:items-center truncate',
                            children: [
                              (0, a.jsx)('p', {
                                className: 'text-xs text-custom-text-300',
                                children: I.member.display_name,
                              }),
                              P &&
                                (0, a.jsxs)(a.Fragment, {
                                  children: [
                                    (0, a.jsx)(f.Z, {
                                      height: 16,
                                      width: 16,
                                      className:
                                        'text-custom-text-300 hidden sm:block',
                                    }),
                                    (0, a.jsx)('p', {
                                      className:
                                        'text-xs text-custom-text-300 line-clamp-1 truncate',
                                      children: I.member.email,
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsxs)('div', {
                        className:
                          'flex flex-shrink-0 items-center gap-2 text-xs',
                        children: [
                          (0, a.jsx)(c.AP, {
                            customButton: (0, a.jsxs)('div', {
                              className:
                                'item-center flex gap-1 rounded px-2 py-0.5',
                              children: [
                                (0, a.jsx)('span', {
                                  className:
                                    'flex items-center rounded text-xs font-medium '.concat(
                                      A ? '' : 'text-custom-sidebar-text-400'
                                    ),
                                  children: d.HB[I.role],
                                }),
                                A &&
                                  (0, a.jsx)('span', {
                                    className: 'grid place-items-center',
                                    children: (0, a.jsx)(i.Z, {
                                      className: 'h-3 w-3',
                                    }),
                                  }),
                              ],
                            }),
                            value: I.role,
                            onChange: e => {
                              b &&
                                e &&
                                k(b.toString(), I.member.id, { role: e }).catch(
                                  () => {
                                    (0, c.fz)({
                                      type: c.do.ERROR,
                                      title: 'Error!',
                                      message:
                                        'An error occurred while updating member role. Please try again.',
                                    });
                                  }
                                );
                            },
                            disabled: !A,
                            placement: 'bottom-end',
                            children: Object.keys(d.HB).map(e =>
                              w && 20 !== w && w < parseInt(e)
                                ? null
                                : (0, a.jsx)(
                                    c.AP.Option,
                                    {
                                      value: parseInt(e, 10),
                                      children: (0, a.jsx)(a.Fragment, {
                                        children: d.HB[parseInt(e)],
                                      }),
                                    },
                                    e
                                  )
                            ),
                          }),
                          (0, a.jsx)(c.u, {
                            isMobile: E,
                            tooltipContent: T
                              ? 'Leave workspace'
                              : 'Remove member',
                            disabled: !P && !T,
                            children: (0, a.jsx)('button', {
                              type: 'button',
                              onClick: () => h(!0),
                              className:
                                P || T
                                  ? 'pointer-events-none md:opacity-0 group-hover:pointer-events-auto md:group-hover:opacity-100'
                                  : 'pointer-events-none hidden md:opacity-0 md:block',
                              children: (0, a.jsx)(o.Z, {
                                className: 'h-3.5 w-3.5 text-red-500',
                                strokeWidth: 2,
                              }),
                            }),
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
      });
      var b = s(30201),
        j = s(92775);
      let y = (0, r.Pi)(e => {
        let { searchQuery: t } = e,
          { workspaceSlug: s } = (0, n.useRouter)().query,
          {
            workspace: {
              fetchWorkspaceMemberInvitations: l,
              workspaceMemberIds: r,
              getSearchedWorkspaceMemberIds: i,
              workspaceMemberInvitationIds: o,
              getSearchedWorkspaceInvitationIds: c,
            },
          } = (0, m.Kb)();
        if (
          ((0, b.ZP)(
            s ? 'WORKSPACE_INVITATIONS_'.concat(s.toString()) : null,
            s ? () => l(s.toString()) : null
          ),
          !r && !o)
        )
          return (0, a.jsx)(j._V, {});
        let d = i(t),
          u = c(t);
        return (0, a.jsxs)('div', {
          className: 'divide-y-[0.5px] divide-custom-border-100',
          children: [
            u && u.length > 0
              ? null == u
                ? void 0
                : u.map(e => (0, a.jsx)(x, { invitationId: e }, e))
              : null,
            d && d.length > 0
              ? null == d
                ? void 0
                : d.map(e => (0, a.jsx)(g, { memberId: e }, e))
              : null,
            (null == u ? void 0 : u.length) === 0 &&
              (null == d ? void 0 : d.length) === 0 &&
              (0, a.jsx)('h4', {
                className: 'mt-16 text-center text-sm text-custom-text-400',
                children: 'No matching members',
              }),
          ],
        });
      });
      var w = s(88039),
        N = s(62468),
        k = s(18927),
        C = s(49505),
        S = s(30335),
        _ = s(23258),
        E = s(10712),
        I = s(44029);
      let F = { name: '', url: '', organization_size: '2-10', logo: null },
        z = new I.I(),
        R = (0, r.Pi)(() => {
          var e, t;
          let [s, r] = (0, l.useState)(!1),
            [n, o] = (0, l.useState)(!1),
            [u, x] = (0, l.useState)(!1),
            [h, p] = (0, l.useState)(!1),
            { captureWorkspaceEvent: f } = (0, m.DN)(),
            {
              membership: { currentWorkspaceRole: g },
            } = (0, m.aF)(),
            { currentWorkspace: b, updateWorkspace: j } = (0, m.cF)(),
            {
              handleSubmit: y,
              control: I,
              reset: R,
              watch: T,
              formState: { errors: P },
            } = (0, w.cI)({ defaultValues: { ...F, ...b } }),
            A = async e => {
              if (!b) return;
              r(!0);
              let t = {
                logo: e.logo,
                name: e.name,
                organization_size: e.organization_size,
              };
              await j(b.slug, t)
                .then(e => {
                  f({
                    eventName: v.Hw,
                    payload: {
                      ...e,
                      state: 'SUCCESS',
                      element: 'Workspace general settings page',
                    },
                  }),
                    (0, c.fz)({
                      title: 'Success!',
                      type: c.do.SUCCESS,
                      message: 'Workspace updated successfully',
                    });
                })
                .catch(e => {
                  f({
                    eventName: v.Hw,
                    payload: {
                      state: 'FAILED',
                      element: 'Workspace general settings page',
                    },
                  }),
                    console.error(e);
                }),
                setTimeout(() => {
                  r(!1);
                }, 300);
            },
            D = () => {
              if (!b) return;
              let e = b.logo;
              e &&
                (x(!0),
                z.deleteFile(b.id, e).then(() => {
                  j(b.slug, { logo: '' })
                    .then(() => {
                      (0, c.fz)({
                        type: c.do.SUCCESS,
                        title: 'Success!',
                        message: 'Workspace picture removed successfully.',
                      }),
                        p(!1);
                    })
                    .catch(() => {
                      (0, c.fz)({
                        type: c.do.ERROR,
                        title: 'Error!',
                        message:
                          'There was some error in deleting your profile picture. Please try again.',
                      });
                    })
                    .finally(() => x(!1));
                }));
            };
          (0, l.useEffect)(() => {
            b && R({ ...b });
          }, [b, R]);
          let M = g === d.fp.ADMIN;
          return b
            ? (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)(ei, { data: b, isOpen: n, onClose: () => o(!1) }),
                  (0, a.jsx)(w.Qr, {
                    control: I,
                    name: 'logo',
                    render: e => {
                      let {
                        field: { onChange: t, value: s },
                      } = e;
                      return (0, a.jsx)(_.K$, {
                        isOpen: h,
                        onClose: () => p(!1),
                        isRemoving: u,
                        handleRemove: D,
                        onSuccess: e => {
                          t(e), p(!1), y(A)();
                        },
                        value: s,
                      });
                    },
                  }),
                  (0, a.jsxs)('div', {
                    className:
                      'w-full overflow-y-auto md:py-8 py-4 md:pr-9 pr-4 '.concat(
                        M ? '' : 'opacity-60'
                      ),
                    children: [
                      (0, a.jsxs)('div', {
                        className:
                          'flex items-center gap-5 border-b border-custom-border-100 pb-7',
                        children: [
                          (0, a.jsx)('div', {
                            className: 'flex flex-col gap-1',
                            children: (0, a.jsx)('button', {
                              type: 'button',
                              onClick: () => p(!0),
                              disabled: !M,
                              children:
                                T('logo') &&
                                null !== T('logo') &&
                                '' !== T('logo')
                                  ? (0, a.jsx)('div', {
                                      className:
                                        'relative mx-auto flex h-14 w-14',
                                      children: (0, a.jsx)('img', {
                                        src: T('logo'),
                                        className:
                                          'absolute left-0 top-0 h-full w-full rounded-md object-cover',
                                        alt: 'Workspace Logo',
                                      }),
                                    })
                                  : (0, a.jsx)('div', {
                                      className:
                                        'relative flex h-14 w-14 items-center justify-center rounded bg-gray-700 p-4 uppercase text-white',
                                      children:
                                        null !==
                                          (t =
                                            null == b
                                              ? void 0
                                              : null === (e = b.name) ||
                                                  void 0 === e
                                                ? void 0
                                                : e.charAt(0)) && void 0 !== t
                                          ? t
                                          : 'N',
                                    }),
                            }),
                          }),
                          (0, a.jsxs)('div', {
                            className: 'flex flex-col gap-1',
                            children: [
                              (0, a.jsx)('h3', {
                                className: 'text-lg font-semibold leading-6',
                                children: T('name'),
                              }),
                              (0, a.jsx)('button', {
                                type: 'button',
                                onClick: () => {
                                  b &&
                                    (0, E.fQ)(''.concat(b.slug)).then(() => {
                                      (0, c.fz)({
                                        type: c.do.SUCCESS,
                                        title:
                                          'Workspace URL copied to the clipboard.',
                                      });
                                    });
                                },
                                className: 'text-sm tracking-tight text-left',
                                children: ''
                                  .concat(
                                    window.location.origin
                                      .replace('http://', '')
                                      .replace('https://', ''),
                                    '/'
                                  )
                                  .concat(b.slug),
                              }),
                              M &&
                                (0, a.jsx)('button', {
                                  className:
                                    'flex items-center gap-1.5 text-left text-xs font-medium text-custom-primary-100',
                                  onClick: () => p(!0),
                                  children:
                                    T('logo') &&
                                    null !== T('logo') &&
                                    '' !== T('logo')
                                      ? (0, a.jsxs)(a.Fragment, {
                                          children: [
                                            (0, a.jsx)(N.Z, {
                                              className: 'h-3 w-3',
                                            }),
                                            'Edit logo',
                                          ],
                                        })
                                      : 'Upload logo',
                                }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsxs)('div', {
                        className: 'my-10 flex flex-col gap-8',
                        children: [
                          (0, a.jsxs)('div', {
                            className:
                              'grid-col grid w-full grid-cols-1 items-center justify-between gap-10 xl:grid-cols-2 2xl:grid-cols-3',
                            children: [
                              (0, a.jsxs)('div', {
                                className: 'flex flex-col gap-1',
                                children: [
                                  (0, a.jsx)('h4', {
                                    className: 'text-sm',
                                    children: 'Workspace name',
                                  }),
                                  (0, a.jsx)(w.Qr, {
                                    control: I,
                                    name: 'name',
                                    rules: {
                                      required: 'Name is required',
                                      maxLength: {
                                        value: 80,
                                        message:
                                          'Workspace name should not exceed 80 characters',
                                      },
                                    },
                                    render: e => {
                                      let {
                                        field: {
                                          value: t,
                                          onChange: s,
                                          ref: l,
                                        },
                                      } = e;
                                      return (0, a.jsx)(c.II, {
                                        id: 'name',
                                        name: 'name',
                                        type: 'text',
                                        value: t,
                                        onChange: s,
                                        ref: l,
                                        hasError: !!P.name,
                                        placeholder: 'Name',
                                        className:
                                          'w-full rounded-md font-medium',
                                        disabled: !M,
                                      });
                                    },
                                  }),
                                ],
                              }),
                              (0, a.jsxs)('div', {
                                className: 'flex flex-col gap-1 ',
                                children: [
                                  (0, a.jsx)('h4', {
                                    className: 'text-sm',
                                    children: 'Company size',
                                  }),
                                  (0, a.jsx)(w.Qr, {
                                    name: 'organization_size',
                                    control: I,
                                    render: e => {
                                      var t;
                                      let {
                                        field: { value: s, onChange: l },
                                      } = e;
                                      return (0, a.jsx)(c.AP, {
                                        value: s,
                                        onChange: l,
                                        label:
                                          null !==
                                            (t = d.h1.find(e => e === s)) &&
                                          void 0 !== t
                                            ? t
                                            : 'Select organization size',
                                        optionsClassName: 'w-full',
                                        buttonClassName:
                                          '!border-[0.5px] !border-custom-border-200 !shadow-none',
                                        input: !0,
                                        disabled: !M,
                                        children: d.h1.map(e =>
                                          (0, a.jsx)(
                                            c.AP.Option,
                                            { value: e, children: e },
                                            e
                                          )
                                        ),
                                      });
                                    },
                                  }),
                                ],
                              }),
                              (0, a.jsxs)('div', {
                                className: 'flex flex-col gap-1 ',
                                children: [
                                  (0, a.jsx)('h4', {
                                    className: 'text-sm',
                                    children: 'Workspace URL',
                                  }),
                                  (0, a.jsx)(w.Qr, {
                                    control: I,
                                    name: 'url',
                                    render: e => {
                                      let {
                                        field: { onChange: t, ref: s },
                                      } = e;
                                      return (0, a.jsx)(c.II, {
                                        id: 'url',
                                        name: 'url',
                                        type: 'url',
                                        value: ''
                                          .concat(
                                            window.location.origin
                                              .replace('http://', '')
                                              .replace('https://', ''),
                                            '/'
                                          )
                                          .concat(b.slug),
                                        onChange: t,
                                        ref: s,
                                        hasError: !!P.url,
                                        className: 'w-full',
                                        disabled: !0,
                                      });
                                    },
                                  }),
                                ],
                              }),
                            ],
                          }),
                          M &&
                            (0, a.jsx)('div', {
                              className:
                                'flex items-center justify-between py-2',
                              children: (0, a.jsx)(c.zx, {
                                variant: 'primary',
                                onClick: y(A),
                                loading: s,
                                children: s
                                  ? 'Updating...'
                                  : 'Update Workspace',
                              }),
                            }),
                        ],
                      }),
                      M &&
                        (0, a.jsx)(C.p, {
                          as: 'div',
                          className: 'border-t border-custom-border-100',
                          children: e => {
                            let { open: t } = e;
                            return (0, a.jsxs)('div', {
                              className: 'w-full',
                              children: [
                                (0, a.jsxs)(C.p.Button, {
                                  as: 'button',
                                  type: 'button',
                                  className:
                                    'flex w-full items-center justify-between py-4',
                                  children: [
                                    (0, a.jsx)('span', {
                                      className: 'text-lg tracking-tight',
                                      children: 'Delete Workspace',
                                    }),
                                    t
                                      ? (0, a.jsx)(k.Z, {
                                          className: 'h-5 w-5',
                                        })
                                      : (0, a.jsx)(i.Z, {
                                          className: 'h-5 w-5',
                                        }),
                                  ],
                                }),
                                (0, a.jsx)(S.u, {
                                  show: t,
                                  enter: 'transition duration-100 ease-out',
                                  enterFrom: 'transform opacity-0',
                                  enterTo: 'transform opacity-100',
                                  leave: 'transition duration-75 ease-out',
                                  leaveFrom: 'transform opacity-100',
                                  leaveTo: 'transform opacity-0',
                                  children: (0, a.jsx)(C.p.Panel, {
                                    children: (0, a.jsxs)('div', {
                                      className: 'flex flex-col gap-8',
                                      children: [
                                        (0, a.jsx)('span', {
                                          className: 'text-sm tracking-tight',
                                          children:
                                            'The danger zone of the workspace delete page is a critical area that requires careful consideration and attention. When deleting a workspace, all of the data and resources within that workspace will be permanently removed and cannot be recovered.',
                                        }),
                                        (0, a.jsx)('div', {
                                          children: (0, a.jsx)(c.zx, {
                                            variant: 'danger',
                                            onClick: () => o(!0),
                                            children: 'Delete my workspace',
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                              ],
                            });
                          },
                        }),
                    ],
                  }),
                ],
              })
            : (0, a.jsx)('div', {
                className: 'grid h-full w-full place-items-center px-4 sm:px-0',
                children: (0, a.jsx)(c.$j, {}),
              });
        }),
        T = (0, r.Pi)(e => {
          let { view: t } = e,
            { workspaceSlug: s } = (0, n.useRouter)().query;
          return (0, a.jsx)('div', {
            className:
              'group border-b border-custom-border-200 hover:bg-custom-background-90',
            children: (0, a.jsx)(p(), {
              href: '/'.concat(s, '/workspace-views/').concat(t.key),
              children: (0, a.jsx)('div', {
                className:
                  'relative flex w-full h-[52px] items-center justify-between rounded px-5 py-4',
                children: (0, a.jsx)('div', {
                  className: 'flex w-full items-center justify-between',
                  children: (0, a.jsx)('div', {
                    className: 'flex items-center gap-4',
                    children: (0, a.jsx)('div', {
                      className: 'flex flex-col',
                      children: (0, a.jsx)('p', {
                        className: 'truncate text-sm font-medium leading-4',
                        children: (0, E.aF)(t.label, 75),
                      }),
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        P = (0, r.Pi)(e => {
          let { data: t, isOpen: s, onClose: r } = e,
            [i, o] = (0, l.useState)(!1),
            { workspaceSlug: d } = (0, n.useRouter)().query,
            { deleteGlobalView: u } = (0, m.Vz)(),
            { captureEvent: x } = (0, m.DN)(),
            h = () => r(),
            p = async () => {
              d &&
                (o(!0),
                await u(d.toString(), t.id)
                  .then(() => {
                    x(v._w, { view_id: t.id, state: 'SUCCESS' });
                  })
                  .catch(() => {
                    x(v._w, { view_id: t.id, state: 'FAILED' }),
                      (0, c.fz)({
                        type: c.do.ERROR,
                        title: 'Error!',
                        message:
                          'Something went wrong while deleting the view. Please try again.',
                      });
                  })
                  .finally(() => {
                    o(!1), h();
                  }),
                localStorage.removeItem('global_view_filters/'.concat(t.id)));
            };
          return (0, a.jsx)(_.qv, {
            handleClose: h,
            handleSubmit: p,
            isDeleting: i,
            isOpen: s,
            title: 'Delete View',
            content: (0, a.jsxs)(a.Fragment, {
              children: [
                'Are you sure you want to delete view-',
                ' ',
                (0, a.jsx)('span', {
                  className: 'break-words font-medium text-custom-text-100',
                  children: null == t ? void 0 : t.name,
                }),
                '? All of the data related to the view will be permanently removed. This action cannot be undone.',
              ],
            }),
          });
        });
      var A = s(68114),
        D = s(93997);
      let M = { name: '', description: '' },
        Z = (0, r.Pi)(e => {
          var t;
          let s;
          let {
              handleFormSubmit: r,
              handleClose: n,
              data: i,
              preLoadedData: o,
            } = e,
            { workspaceLabels: d } = (0, m.NP)(),
            {
              workspace: { workspaceMemberIds: u },
            } = (0, m.Kb)(),
            {
              formState: { errors: x, isSubmitting: h },
              handleSubmit: p,
              control: f,
              reset: v,
              setValue: g,
              watch: b,
            } = (0, w.cI)({ defaultValues: M }),
            j = async e => {
              await r(e), v({ ...M });
            };
          (0, l.useEffect)(() => {
            v({ ...M, ...o, ...i });
          }, [i, o, v]);
          let y = b('filters');
          return (
            Object.entries(null != y ? y : {}).forEach(e => {
              let [t, a] = e;
              a &&
                ((Array.isArray(a) && 0 === a.length) ||
                  (s || (s = {}), (s[t] = a)));
            }),
            (0, a.jsxs)('form', {
              onSubmit: p(j),
              children: [
                (0, a.jsxs)('div', {
                  className: 'space-y-5 p-5',
                  children: [
                    (0, a.jsxs)('h3', {
                      className: 'text-xl font-medium text-custom-text-200',
                      children: [i ? 'Update' : 'Create', ' View'],
                    }),
                    (0, a.jsxs)('div', {
                      className: 'space-y-3',
                      children: [
                        (0, a.jsxs)('div', {
                          className: 'space-y-1',
                          children: [
                            (0, a.jsx)(w.Qr, {
                              control: f,
                              name: 'name',
                              rules: {
                                required: 'Title is required',
                                maxLength: {
                                  value: 255,
                                  message:
                                    'Title should be less than 255 characters',
                                },
                              },
                              render: e => {
                                let {
                                  field: { value: t, onChange: s, ref: l },
                                } = e;
                                return (0, a.jsx)(c.II, {
                                  id: 'name',
                                  name: 'name',
                                  type: 'name',
                                  value: t,
                                  onChange: s,
                                  ref: l,
                                  hasError: !!x.name,
                                  placeholder: 'Title',
                                  className: 'w-full text-base',
                                });
                              },
                            }),
                            (0, a.jsx)('span', {
                              className: 'text-xs text-red-500',
                              children:
                                null == x
                                  ? void 0
                                  : null === (t = x.name) || void 0 === t
                                    ? void 0
                                    : t.message,
                            }),
                          ],
                        }),
                        (0, a.jsx)('div', {
                          children: (0, a.jsx)(w.Qr, {
                            name: 'description',
                            control: f,
                            render: e => {
                              let {
                                field: { value: t, onChange: s },
                              } = e;
                              return (0, a.jsx)(c.Kx, {
                                id: 'description',
                                name: 'description',
                                value: t,
                                placeholder: 'Description',
                                onChange: s,
                                className:
                                  'w-full text-base resize-none min-h-24',
                                hasError: !!(null == x
                                  ? void 0
                                  : x.description),
                              });
                            },
                          }),
                        }),
                        (0, a.jsx)('div', {
                          children: (0, a.jsx)(w.Qr, {
                            control: f,
                            name: 'filters',
                            render: e => {
                              let {
                                field: { onChange: t, value: s },
                              } = e;
                              return (0, a.jsx)(A.lqY, {
                                title: 'Filters',
                                children: (0, a.jsx)(A.dGX, {
                                  filters: null != s ? s : {},
                                  handleFiltersUpdate: (e, a) => {
                                    var l, r;
                                    let n =
                                      null !==
                                        (l = null == s ? void 0 : s[e]) &&
                                      void 0 !== l
                                        ? l
                                        : [];
                                    Array.isArray(a)
                                      ? a.forEach(e => {
                                          n.includes(e) || n.push(e);
                                        })
                                      : (
                                            null == s
                                              ? void 0
                                              : null === (r = s[e]) ||
                                                  void 0 === r
                                                ? void 0
                                                : r.includes(a)
                                          )
                                        ? n.splice(n.indexOf(a), 1)
                                        : n.push(a),
                                      t({ ...s, [e]: n });
                                  },
                                  layoutDisplayFiltersOptions:
                                    D.BI.my_issues.spreadsheet,
                                  labels: null != d ? d : void 0,
                                  memberIds: null != u ? u : void 0,
                                }),
                              });
                            },
                          }),
                        }),
                        y &&
                          Object.keys(y).length > 0 &&
                          (0, a.jsx)('div', {
                            children: (0, a.jsx)(A.v4D, {
                              appliedFilters: null != s ? s : {},
                              handleClearAllFilters: () => {
                                y && g('filters', {});
                              },
                              handleRemoveFilter: (e, t) => {
                                var s;
                                if (!t) {
                                  g('filters', { ...y, [e]: [] });
                                  return;
                                }
                                let a =
                                  null !== (s = null == y ? void 0 : y[e]) &&
                                  void 0 !== s
                                    ? s
                                    : [];
                                (a = a.filter(e => e !== t)),
                                  g('filters', { ...y, [e]: a });
                              },
                              labels: null != d ? d : void 0,
                              states: void 0,
                              alwaysAllowEditing: !0,
                            }),
                          }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)('div', {
                  className:
                    'px-5 py-4 flex items-center justify-end gap-2 border-t-[0.5px] border-custom-border-200',
                  children: [
                    (0, a.jsx)(c.zx, {
                      variant: 'neutral-primary',
                      size: 'sm',
                      onClick: n,
                      children: 'Cancel',
                    }),
                    (0, a.jsx)(c.zx, {
                      variant: 'primary',
                      size: 'sm',
                      type: 'submit',
                      loading: h,
                      children: i
                        ? h
                          ? 'Updating'
                          : 'Update View'
                        : h
                          ? 'Creating'
                          : 'Create View',
                    }),
                  ],
                }),
              ],
            })
          );
        });
      var O = s(47542);
      let U = (0, r.Pi)(e => {
          let { viewId: t } = e,
            s = (0, l.useRef)(null),
            { workspaceSlug: r, globalViewId: i } = (0, n.useRouter)().query,
            { getViewDetailsById: o } = (0, m.Vz)(),
            c = o(t);
          return c && r && i
            ? (0, a.jsx)('div', {
                ref: s,
                className: 'relative',
                children: (0, a.jsx)(J, {
                  parentRef: s,
                  view: c,
                  viewId: t,
                  globalViewId: null == i ? void 0 : i.toString(),
                  workspaceSlug: null == r ? void 0 : r.toString(),
                }),
              })
            : null;
        }),
        L = e => {
          let { tab: t } = e,
            s = (0, l.useRef)(null),
            { workspaceSlug: r, globalViewId: i } = (0, n.useRouter)().query;
          return r && i
            ? (0, a.jsx)(
                'div',
                {
                  ref: s,
                  className: 'relative',
                  children: (0, a.jsx)(ee, {
                    parentRef: s,
                    globalViewId: null == i ? void 0 : i.toString(),
                    workspaceSlug: null == r ? void 0 : r.toString(),
                    view: t,
                  }),
                },
                t.key
              )
            : null;
        },
        B = (0, r.Pi)(() => {
          let [e, t] = (0, l.useState)(!1),
            s = (0, l.useRef)(null),
            { globalViewId: r } = (0, n.useRouter)().query,
            { currentWorkspaceViews: i } = (0, m.Vz)(),
            {
              membership: { currentWorkspaceRole: o },
            } = (0, m.aF)(),
            { captureEvent: c } = (0, m.DN)();
          (0, l.useEffect)(() => {
            if (r && i) {
              c(v.df, {
                view_id: r,
                view_type: [
                  'all-issues',
                  'assigned',
                  'created',
                  'subscribed',
                ].includes(r.toString())
                  ? 'Default'
                  : 'Custom',
              });
              let e = document.querySelector(
                '#global-view-'.concat(r.toString())
              );
              if (e && s.current) {
                let t = s.current.getBoundingClientRect(),
                  a = e.getBoundingClientRect(),
                  l = t.right - a.right;
                e.scrollIntoView({
                  behavior: 'smooth',
                  inline: l > 500 ? 'center' : 'nearest',
                });
              }
            }
          }, [r, i, s, c]);
          let u = !!o && o >= d.fp.MEMBER;
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(W, { isOpen: e, onClose: () => t(!1) }),
              (0, a.jsxs)('div', {
                className:
                  'group relative flex border-b border-custom-border-200',
                children: [
                  (0, a.jsxs)('div', {
                    ref: s,
                    className:
                      'flex w-full items-center overflow-x-auto px-4 horizontal-scrollbar scrollbar-sm',
                    children: [
                      d.F5.map((e, t) =>
                        (0, a.jsx)(
                          L,
                          { tab: e },
                          ''.concat(e.key, '-').concat(t)
                        )
                      ),
                      null == i
                        ? void 0
                        : i.map(e => (0, a.jsx)(U, { viewId: e }, e)),
                    ],
                  }),
                  u &&
                    (0, a.jsx)('button', {
                      type: 'button',
                      className:
                        'sticky -right-4 flex w-12 flex-shrink-0 items-center justify-center border-transparent bg-custom-background-100 py-3 hover:border-custom-border-200 hover:text-custom-text-400',
                      onClick: () => t(!0),
                      children: (0, a.jsx)(O.Z, {
                        className: 'h-4 w-4 text-custom-primary-200',
                      }),
                    }),
                ],
              }),
            ],
          });
        }),
        W = (0, r.Pi)(e => {
          let { isOpen: t, onClose: s, data: l, preLoadedData: r } = e,
            i = (0, n.useRouter)(),
            { workspaceSlug: o } = i.query,
            { createGlobalView: d, updateGlobalView: u } = (0, m.Vz)(),
            { captureEvent: x } = (0, m.DN)(),
            h = () => {
              s();
            },
            p = async e => {
              if (!o) return;
              let t = {
                ...e,
                filters: { ...(null == e ? void 0 : e.filters) },
              };
              await d(o.toString(), t)
                .then(e => {
                  x(v.Nq, {
                    view_id: e.id,
                    applied_filters: e.filters,
                    state: 'SUCCESS',
                  }),
                    (0, c.fz)({
                      type: c.do.SUCCESS,
                      title: 'Success!',
                      message: 'View created successfully.',
                    }),
                    i.push('/'.concat(o, '/workspace-views/').concat(e.id)),
                    h();
                })
                .catch(() => {
                  x(v.Nq, {
                    applied_filters: null == e ? void 0 : e.filters,
                    state: 'FAILED',
                  }),
                    (0, c.fz)({
                      type: c.do.ERROR,
                      title: 'Error!',
                      message: 'View could not be created. Please try again.',
                    });
                });
            },
            f = async e => {
              if (!o || !l) return;
              let t = { ...e, query: { ...(null == e ? void 0 : e.filters) } };
              await u(o.toString(), l.id, t)
                .then(e => {
                  e &&
                    (x(v.sZ, {
                      view_id: e.id,
                      applied_filters: e.filters,
                      state: 'SUCCESS',
                    }),
                    (0, c.fz)({
                      type: c.do.SUCCESS,
                      title: 'Success!',
                      message: 'View updated successfully.',
                    }),
                    h());
                })
                .catch(() => {
                  x(v.sZ, {
                    view_id: l.id,
                    applied_filters: l.filters,
                    state: 'FAILED',
                  }),
                    (0, c.fz)({
                      type: c.do.ERROR,
                      title: 'Error!',
                      message: 'View could not be updated. Please try again.',
                    });
                });
            },
            g = async e => {
              o && (l ? await f(e) : await p(e));
            };
          return (0, a.jsx)(_.QU, {
            isOpen: t,
            handleClose: h,
            position: _.fM.TOP,
            width: _.j4.XXL,
            children: (0, a.jsx)(Z, {
              handleFormSubmit: g,
              handleClose: h,
              data: l,
              preLoadedData: r,
            }),
          });
        });
      var q = s(54129),
        V = s(1422);
      let H = (0, r.Pi)(e => {
          var t;
          let { viewId: s } = e,
            [r, i] = (0, l.useState)(!1),
            [o, d] = (0, l.useState)(!1),
            { workspaceSlug: u } = (0, n.useRouter)().query,
            { getViewDetailsById: x } = (0, m.Vz)(),
            { setTrackElement: h } = (0, m.DN)(),
            f = x(s);
          if (!f) return null;
          let v = (0, V.w)(null !== (t = f.filters) && void 0 !== t ? t : {});
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(W, { data: f, isOpen: r, onClose: () => i(!1) }),
              (0, a.jsx)(P, { data: f, isOpen: o, onClose: () => d(!1) }),
              (0, a.jsx)('div', {
                className:
                  'group border-b border-custom-border-200 hover:bg-custom-background-90',
                children: (0, a.jsx)(p(), {
                  href: '/'.concat(u, '/workspace-views/').concat(f.id),
                  children: (0, a.jsx)('div', {
                    className:
                      'relative flex h-[52px] w-full items-center justify-between rounded p-4',
                    children: (0, a.jsxs)('div', {
                      className: 'flex w-full items-center justify-between',
                      children: [
                        (0, a.jsx)('div', {
                          className: 'flex items-center gap-4',
                          children: (0, a.jsxs)('div', {
                            className: 'flex flex-col',
                            children: [
                              (0, a.jsx)('p', {
                                className:
                                  'truncate text-sm font-medium leading-4',
                                children: (0, E.aF)(f.name, 75),
                              }),
                              (null == f ? void 0 : f.description) &&
                                (0, a.jsx)('p', {
                                  className: 'text-xs text-custom-text-200',
                                  children: f.description,
                                }),
                            ],
                          }),
                        }),
                        (0, a.jsx)('div', {
                          className: 'ml-2 flex flex-shrink-0',
                          children: (0, a.jsxs)('div', {
                            className: 'flex items-center gap-4',
                            children: [
                              (0, a.jsxs)('p', {
                                className:
                                  'hidden rounded bg-custom-background-80 px-2 py-1 text-xs text-custom-text-200 group-hover:block',
                                children: [
                                  v,
                                  ' ',
                                  1 === v ? 'filter' : 'filters',
                                ],
                              }),
                              (0, a.jsxs)(c.fR, {
                                ellipsis: !0,
                                children: [
                                  (0, a.jsx)(c.fR.MenuItem, {
                                    onClick: e => {
                                      e.preventDefault(),
                                        e.stopPropagation(),
                                        h('List view'),
                                        i(!0);
                                    },
                                    children: (0, a.jsxs)('span', {
                                      className:
                                        'flex items-center justify-start gap-2',
                                      children: [
                                        (0, a.jsx)(N.Z, {
                                          size: 14,
                                          strokeWidth: 2,
                                        }),
                                        (0, a.jsx)('span', {
                                          children: 'Edit View',
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, a.jsx)(c.fR.MenuItem, {
                                    onClick: e => {
                                      e.preventDefault(),
                                        e.stopPropagation(),
                                        d(!0);
                                    },
                                    children: (0, a.jsxs)('span', {
                                      className:
                                        'flex items-center justify-start gap-2',
                                      children: [
                                        (0, a.jsx)(q.Z, {
                                          size: 14,
                                          strokeWidth: 2,
                                        }),
                                        (0, a.jsx)('span', {
                                          children: 'Delete View',
                                        }),
                                      ],
                                    }),
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
              }),
            ],
          });
        }),
        Q = (0, r.Pi)(e => {
          let { searchQuery: t } = e,
            { workspaceSlug: s } = (0, n.useRouter)().query,
            {
              fetchAllGlobalViews: l,
              currentWorkspaceViews: r,
              getSearchedViews: i,
            } = (0, m.Vz)();
          if (
            ((0, b.ZP)(
              s ? 'GLOBAL_VIEWS_LIST_'.concat(s.toString()) : null,
              s ? () => l(s.toString()) : null
            ),
            !r)
          )
            return (0, a.jsx)(j.vU, {});
          let o = i(t);
          return (0, a.jsx)(a.Fragment, {
            children:
              null == o ? void 0 : o.map(e => (0, a.jsx)(H, { viewId: e }, e)),
          });
        });
      var K = s(50649),
        Y = s(37969),
        $ = s(3515),
        G = s(51374),
        X = s(6780);
      let J = (0, K.Pi)(e => {
          let {
              parentRef: t,
              view: s,
              globalViewId: r,
              viewId: n,
              workspaceSlug: i,
            } = e,
            [o, d] = (0, l.useState)(!1),
            [u, x] = (0, l.useState)(!1),
            {
              membership: { currentWorkspaceRole: h },
            } = (0, m.aF)(),
            f = !!h && h >= G.MC.MEMBER,
            v = ''.concat(i, '/workspace-views/').concat(s.id),
            g = [
              {
                key: 'edit',
                action: () => d(!0),
                title: 'Edit',
                icon: N.Z,
                shouldRender: f,
              },
              {
                key: 'open-new-tab',
                action: () => window.open('/'.concat(v), '_blank'),
                title: 'Open in new tab',
                icon: Y.Z,
              },
              {
                key: 'copy-link',
                action: () =>
                  (0, E.fQ)(v).then(() => {
                    (0, c.fz)({
                      type: c.do.SUCCESS,
                      title: 'Link Copied!',
                      message: 'View link copied to clipboard.',
                    });
                  }),
                title: 'Copy link',
                icon: $.Z,
              },
              {
                key: 'delete',
                action: () => x(!0),
                title: 'Delete',
                icon: q.Z,
                shouldRender: f,
              },
            ];
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(W, { data: s, isOpen: o, onClose: () => d(!1) }),
              (0, a.jsx)(P, { data: s, isOpen: u, onClose: () => x(!1) }),
              (0, a.jsx)(c.xV, { parentRef: t, items: g }),
              (0, a.jsx)(c.fR, {
                customButton: (0, a.jsx)(a.Fragment, {
                  children:
                    n === r
                      ? (0, a.jsx)('span', {
                          className:
                            'flex min-w-min flex-shrink-0 whitespace-nowrap border-b-2 p-3 text-sm font-medium outline-none '.concat(
                              n === r
                                ? 'border-custom-primary-100 text-custom-primary-100'
                                : 'border-transparent hover:border-custom-border-200 hover:text-custom-text-400'
                            ),
                          children: s.name,
                        })
                      : (0, a.jsx)(
                          p(),
                          {
                            id: 'global-view-'.concat(n),
                            href: '/'.concat(i, '/workspace-views/').concat(n),
                            children: (0, a.jsx)('span', {
                              className:
                                'flex min-w-min flex-shrink-0 whitespace-nowrap border-b-2 p-3 text-sm font-medium outline-none '.concat(
                                  n === r
                                    ? 'border-custom-primary-100 text-custom-primary-100'
                                    : 'border-transparent hover:border-custom-border-200 hover:text-custom-text-400'
                                ),
                              children: s.name,
                            }),
                          },
                          n
                        ),
                }),
                placement: 'bottom-end',
                menuItemsClassName: 'z-20',
                closeOnSelect: !0,
                children: g.map(e =>
                  !1 === e.shouldRender
                    ? null
                    : (0, a.jsxs)(
                        c.fR.MenuItem,
                        {
                          onClick: t => {
                            t.preventDefault(), t.stopPropagation(), e.action();
                          },
                          className: (0, X.cn)(
                            'flex items-center gap-2',
                            { 'text-custom-text-400': e.disabled },
                            e.className
                          ),
                          disabled: e.disabled,
                          children: [
                            e.icon &&
                              (0, a.jsx)(e.icon, {
                                className: (0, X.cn)(
                                  'h-3 w-3',
                                  e.iconClassName
                                ),
                              }),
                            (0, a.jsxs)('div', {
                              children: [
                                (0, a.jsx)('h5', { children: e.title }),
                                e.description &&
                                  (0, a.jsx)('p', {
                                    className: (0, X.cn)(
                                      'text-custom-text-300 whitespace-pre-line',
                                      { 'text-custom-text-400': e.disabled }
                                    ),
                                    children: e.description,
                                  }),
                              ],
                            }),
                          ],
                        },
                        e.key
                      )
                ),
              }),
            ],
          });
        }),
        ee = (0, K.Pi)(e => {
          let { parentRef: t, globalViewId: s, view: l, workspaceSlug: r } = e,
            n = ''.concat(r, '/workspace-views/').concat(l.key),
            i = [
              {
                key: 'open-new-tab',
                action: () => window.open('/'.concat(n), '_blank'),
                title: 'Open in new tab',
                icon: Y.Z,
              },
              {
                key: 'copy-link',
                action: () =>
                  (0, E.fQ)(n).then(() => {
                    (0, c.fz)({
                      type: c.do.SUCCESS,
                      title: 'Link Copied!',
                      message: 'View link copied to clipboard.',
                    });
                  }),
                title: 'Copy link',
                icon: $.Z,
              },
            ];
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(c.xV, { parentRef: t, items: i }),
              (0, a.jsx)(c.fR, {
                customButton: (0, a.jsx)(a.Fragment, {
                  children:
                    l.key === s
                      ? (0, a.jsx)('span', {
                          className:
                            'flex min-w-min flex-shrink-0 whitespace-nowrap border-b-2 p-3 text-sm font-medium outline-none '.concat(
                              l.key === s
                                ? 'border-custom-primary-100 text-custom-primary-100'
                                : 'border-transparent hover:border-custom-border-200 hover:text-custom-text-400'
                            ),
                          children: l.label,
                        })
                      : (0, a.jsx)(
                          p(),
                          {
                            id: 'global-view-'.concat(l.key),
                            href: '/'
                              .concat(r, '/workspace-views/')
                              .concat(l.key),
                            children: (0, a.jsx)('span', {
                              className:
                                'flex min-w-min flex-shrink-0 whitespace-nowrap border-b-2 p-3 text-sm font-medium outline-none '.concat(
                                  l.key === s
                                    ? 'border-custom-primary-100 text-custom-primary-100'
                                    : 'border-transparent hover:border-custom-border-200 hover:text-custom-text-400'
                                ),
                              children: l.label,
                            }),
                          },
                          l.key
                        ),
                }),
                placement: 'bottom-end',
                menuItemsClassName: 'z-20',
                closeOnSelect: !0,
                children: i.map(e =>
                  !1 === e.shouldRender
                    ? null
                    : (0, a.jsxs)(
                        c.fR.MenuItem,
                        {
                          onClick: t => {
                            t.preventDefault(), t.stopPropagation(), e.action();
                          },
                          className: (0, X.cn)(
                            'flex items-center gap-2',
                            { 'text-custom-text-400': e.disabled },
                            e.className
                          ),
                          disabled: e.disabled,
                          children: [
                            e.icon &&
                              (0, a.jsx)(e.icon, {
                                className: (0, X.cn)(
                                  'h-3 w-3',
                                  e.iconClassName
                                ),
                              }),
                            (0, a.jsxs)('div', {
                              children: [
                                (0, a.jsx)('h5', { children: e.title }),
                                e.description &&
                                  (0, a.jsx)('p', {
                                    className: (0, X.cn)(
                                      'text-custom-text-300 whitespace-pre-line',
                                      { 'text-custom-text-400': e.disabled }
                                    ),
                                    children: e.description,
                                  }),
                              ],
                            }),
                          ],
                        },
                        e.key
                      )
                ),
              }),
            ],
          });
        });
      var et = s(80986),
        es = s(15455);
      let ea = (0, r.Pi)(e => {
          let { isOpen: t, onClose: s, onSubmit: r, userDetails: n } = e,
            [i, o] = (0, l.useState)(!1),
            { currentUser: d } = (0, m.aF)(),
            u = () => {
              s(), o(!1);
            },
            x = async () => {
              o(!0), await r(), u();
            };
          return (0, a.jsx)(S.u.Root, {
            show: t,
            as: l.Fragment,
            children: (0, a.jsxs)(es.V, {
              as: 'div',
              className: 'relative z-20',
              onClose: u,
              children: [
                (0, a.jsx)(S.u.Child, {
                  as: l.Fragment,
                  enter: 'ease-out duration-300',
                  enterFrom: 'opacity-0',
                  enterTo: 'opacity-100',
                  leave: 'ease-in duration-200',
                  leaveFrom: 'opacity-100',
                  leaveTo: 'opacity-0',
                  children: (0, a.jsx)('div', {
                    className:
                      'fixed inset-0 bg-custom-backdrop transition-opacity',
                  }),
                }),
                (0, a.jsx)('div', {
                  className: 'fixed inset-0 z-20 overflow-y-auto',
                  children: (0, a.jsx)('div', {
                    className:
                      'flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0',
                    children: (0, a.jsx)(S.u.Child, {
                      as: l.Fragment,
                      enter: 'ease-out duration-300',
                      enterFrom:
                        'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
                      enterTo: 'opacity-100 translate-y-0 sm:scale-100',
                      leave: 'ease-in duration-200',
                      leaveFrom: 'opacity-100 translate-y-0 sm:scale-100',
                      leaveTo:
                        'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
                      children: (0, a.jsxs)(es.V.Panel, {
                        className:
                          'relative transform overflow-hidden rounded-lg bg-custom-background-100 text-left shadow-custom-shadow-md transition-all sm:my-8 sm:w-[40rem]',
                        children: [
                          (0, a.jsx)('div', {
                            className: 'px-4 pb-4 pt-5 sm:p-6 sm:pb-4',
                            children: (0, a.jsxs)('div', {
                              className: 'sm:flex sm:items-start',
                              children: [
                                (0, a.jsx)('div', {
                                  className:
                                    'mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10',
                                  children: (0, a.jsx)(et.Z, {
                                    className: 'h-6 w-6 text-red-600',
                                    'aria-hidden': 'true',
                                  }),
                                }),
                                (0, a.jsxs)('div', {
                                  className:
                                    'mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left',
                                  children: [
                                    (0, a.jsx)(es.V.Title, {
                                      as: 'h3',
                                      className:
                                        'text-lg font-medium leading-6 text-custom-text-100',
                                      children:
                                        (null == d ? void 0 : d.id) === n.id
                                          ? 'Leave workspace?'
                                          : 'Remove '.concat(
                                              null == n
                                                ? void 0
                                                : n.display_name,
                                              '?'
                                            ),
                                    }),
                                    (0, a.jsx)('div', {
                                      className: 'mt-2',
                                      children:
                                        (null == d ? void 0 : d.id) === n.id
                                          ? (0, a.jsx)('p', {
                                              className:
                                                'text-sm text-custom-text-200',
                                              children:
                                                'Are you sure you want to leave the workspace? You will no longer have access to this workspace. This action cannot be undone.',
                                            })
                                          : (0, a.jsxs)('p', {
                                              className:
                                                'text-sm text-custom-text-200',
                                              children: [
                                                'Are you sure you want to remove member-',
                                                ' ',
                                                (0, a.jsx)('span', {
                                                  className: 'font-bold',
                                                  children:
                                                    null == n
                                                      ? void 0
                                                      : n.display_name,
                                                }),
                                                '? They will no longer have access to this workspace. This action cannot be undone.',
                                              ],
                                            }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, a.jsxs)('div', {
                            className: 'flex justify-end gap-2 p-4 sm:px-6',
                            children: [
                              (0, a.jsx)(c.zx, {
                                variant: 'neutral-primary',
                                size: 'sm',
                                onClick: u,
                                children: 'Cancel',
                              }),
                              (0, a.jsx)(c.zx, {
                                variant: 'danger',
                                size: 'sm',
                                tabIndex: 1,
                                onClick: x,
                                loading: i,
                                children:
                                  (null == d ? void 0 : d.id) === n.id
                                    ? i
                                      ? 'Leaving'
                                      : 'Leave'
                                    : i
                                      ? 'Removing'
                                      : 'Remove',
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              ],
            }),
          });
        }),
        el = new (s(16933).A)(),
        er = (0, r.Pi)(e => {
          var t;
          let {
              onSubmit: s,
              defaultValues: r,
              setDefaultValues: i,
              secondaryButton: o,
              primaryButtonText: u = {
                loading: 'Creating...',
                default: 'Create Workspace',
              },
            } = e,
            [x, h] = (0, l.useState)(!1),
            [p, f] = (0, l.useState)(!1),
            g = (0, n.useRouter)(),
            { captureWorkspaceEvent: b } = (0, m.DN)(),
            { createWorkspace: j } = (0, m.cF)(),
            {
              handleSubmit: y,
              control: N,
              setValue: k,
              getValues: C,
              formState: { errors: S, isSubmitting: _, isValid: E },
            } = (0, w.cI)({ defaultValues: r, mode: 'onChange' }),
            I = async e => {
              await el
                .workspaceSlugCheck(e.slug)
                .then(async t => {
                  !0 !== t.status || d.i1.includes(e.slug)
                    ? h(!0)
                    : (h(!1),
                      await j(e)
                        .then(async e => {
                          b({
                            eventName: v.iL,
                            payload: {
                              ...e,
                              state: 'SUCCESS',
                              element: 'Create workspace page',
                            },
                          }),
                            (0, c.fz)({
                              type: c.do.SUCCESS,
                              title: 'Success!',
                              message: 'Workspace created successfully.',
                            }),
                            s && (await s(e));
                        })
                        .catch(() => {
                          b({
                            eventName: v.iL,
                            payload: {
                              state: 'FAILED',
                              element: 'Create workspace page',
                            },
                          }),
                            (0, c.fz)({
                              type: c.do.ERROR,
                              title: 'Error!',
                              message:
                                'Workspace could not be created. Please try again.',
                            });
                        }));
                })
                .catch(() => {
                  (0, c.fz)({
                    type: c.do.ERROR,
                    title: 'Error!',
                    message:
                      'Some error occurred while creating workspace. Please try again.',
                  });
                });
            };
          return (
            (0, l.useEffect)(
              () => () => {
                i(C());
              },
              [C, i]
            ),
            (0, a.jsxs)('form', {
              className: 'space-y-6 sm:space-y-9',
              onSubmit: y(I),
              children: [
                (0, a.jsxs)('div', {
                  className: 'space-y-6 sm:space-y-7',
                  children: [
                    (0, a.jsxs)('div', {
                      className: 'space-y-1 text-sm',
                      children: [
                        (0, a.jsxs)('label', {
                          htmlFor: 'workspaceName',
                          children: [
                            'Workspace Name',
                            (0, a.jsx)('span', {
                              className: 'ml-0.5 text-red-500',
                              children: '*',
                            }),
                          ],
                        }),
                        (0, a.jsxs)('div', {
                          className: 'flex flex-col gap-1',
                          children: [
                            (0, a.jsx)(w.Qr, {
                              control: N,
                              name: 'name',
                              rules: {
                                required: 'Workspace name is required',
                                validate: e =>
                                  /^[\w\s-]*$/.test(e) ||
                                  'Name can only contain (" "), ( - ), ( _ ) & alphanumeric characters.',
                                maxLength: {
                                  value: 80,
                                  message:
                                    'Workspace name should not exceed 80 characters',
                                },
                              },
                              render: e => {
                                let {
                                  field: { value: t, ref: s, onChange: l },
                                } = e;
                                return (0, a.jsx)(c.II, {
                                  id: 'workspaceName',
                                  type: 'text',
                                  value: t,
                                  onChange: e => {
                                    l(e.target.value),
                                      k('name', e.target.value),
                                      k(
                                        'slug',
                                        e.target.value
                                          .toLocaleLowerCase()
                                          .trim()
                                          .replace(/ /g, '-')
                                      );
                                  },
                                  ref: s,
                                  hasError: !!S.name,
                                  placeholder: 'Enter workspace name...',
                                  className: 'w-full',
                                });
                              },
                            }),
                            (0, a.jsx)('span', {
                              className: 'text-xs text-red-500',
                              children:
                                null == S
                                  ? void 0
                                  : null === (t = S.name) || void 0 === t
                                    ? void 0
                                    : t.message,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)('div', {
                      className: 'space-y-1 text-sm',
                      children: [
                        (0, a.jsxs)('label', {
                          htmlFor: 'workspaceUrl',
                          children: [
                            'Workspace URL',
                            (0, a.jsx)('span', {
                              className: 'ml-0.5 text-red-500',
                              children: '*',
                            }),
                          ],
                        }),
                        (0, a.jsxs)('div', {
                          className:
                            'flex w-full items-center rounded-md border-[0.5px] border-custom-border-200 px-3',
                          children: [
                            (0, a.jsxs)('span', {
                              className:
                                'whitespace-nowrap text-sm text-custom-text-200',
                              children: [window && window.location.host, '/'],
                            }),
                            (0, a.jsx)(w.Qr, {
                              control: N,
                              name: 'slug',
                              rules: { required: 'Workspace URL is required' },
                              render: e => {
                                let {
                                  field: { onChange: t, value: s, ref: l },
                                } = e;
                                return (0, a.jsx)(c.II, {
                                  id: 'workspaceUrl',
                                  type: 'text',
                                  value: s
                                    .toLocaleLowerCase()
                                    .trim()
                                    .replace(/ /g, '-'),
                                  onChange: e => {
                                    /^[a-zA-Z0-9_-]+$/.test(e.target.value)
                                      ? f(!1)
                                      : f(!0),
                                      t(e.target.value.toLowerCase());
                                  },
                                  ref: l,
                                  hasError: !!S.slug,
                                  placeholder: 'Enter workspace url...',
                                  className:
                                    'block w-full rounded-md border-none bg-transparent !px-0 py-2 text-sm',
                                });
                              },
                            }),
                          ],
                        }),
                        x &&
                          (0, a.jsx)('span', {
                            className: '-mt-3 text-sm text-red-500',
                            children: 'Workspace URL is already taken!',
                          }),
                        p &&
                          (0, a.jsx)('span', {
                            className: 'text-sm text-red-500',
                            children:
                              'URL can only contain ( - ), ( _ ) & alphanumeric characters.',
                          }),
                      ],
                    }),
                    (0, a.jsxs)('div', {
                      className: 'space-y-1 text-sm',
                      children: [
                        (0, a.jsxs)('span', {
                          children: [
                            'What size is your organization?',
                            (0, a.jsx)('span', {
                              className: 'ml-0.5 text-red-500',
                              children: '*',
                            }),
                          ],
                        }),
                        (0, a.jsxs)('div', {
                          className: 'w-full',
                          children: [
                            (0, a.jsx)(w.Qr, {
                              name: 'organization_size',
                              control: N,
                              rules: { required: 'This field is required' },
                              render: e => {
                                var t;
                                let {
                                  field: { value: s, onChange: l },
                                } = e;
                                return (0, a.jsx)(c.AP, {
                                  value: s,
                                  onChange: l,
                                  label:
                                    null !== (t = d.h1.find(e => e === s)) &&
                                    void 0 !== t
                                      ? t
                                      : (0, a.jsx)('span', {
                                          className: 'text-custom-text-400',
                                          children: 'Select organization size',
                                        }),
                                  buttonClassName:
                                    '!border-[0.5px] !border-custom-border-200 !shadow-none',
                                  input: !0,
                                  optionsClassName: 'w-full',
                                  children: d.h1.map(e =>
                                    (0, a.jsx)(
                                      c.AP.Option,
                                      { value: e, children: e },
                                      e
                                    )
                                  ),
                                });
                              },
                            }),
                            S.organization_size &&
                              (0, a.jsx)('span', {
                                className: 'text-sm text-red-500',
                                children: S.organization_size.message,
                              }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)('div', {
                  className: 'flex items-center gap-4',
                  children: [
                    o,
                    (0, a.jsx)(c.zx, {
                      variant: 'primary',
                      type: 'submit',
                      size: 'md',
                      disabled: !E,
                      loading: _,
                      children: _ ? u.loading : u.default,
                    }),
                    !o &&
                      (0, a.jsx)(c.zx, {
                        variant: 'neutral-primary',
                        type: 'button',
                        size: 'md',
                        onClick: () => g.back(),
                        children: 'Go back',
                      }),
                  ],
                }),
              ],
            })
          );
        }),
        en = { workspaceName: '', confirmDelete: '' },
        ei = (0, r.Pi)(e => {
          let { isOpen: t, data: s, onClose: r } = e,
            i = (0, n.useRouter)(),
            { captureWorkspaceEvent: o } = (0, m.DN)(),
            { deleteWorkspace: d } = (0, m.cF)(),
            {
              control: u,
              formState: { errors: x, isSubmitting: h },
              handleSubmit: p,
              reset: f,
              watch: g,
            } = (0, w.cI)({ defaultValues: en }),
            b =
              g('workspaceName') === (null == s ? void 0 : s.name) &&
              'delete my workspace' === g('confirmDelete'),
            j = () => {
              let e = setTimeout(() => {
                f(en), clearTimeout(e);
              }, 350);
              r();
            },
            y = async () => {
              s &&
                b &&
                (await d(s.slug)
                  .then(() => {
                    j(),
                      i.push('/'),
                      o({
                        eventName: v.Ye,
                        payload: {
                          ...s,
                          state: 'SUCCESS',
                          element: 'Workspace general settings page',
                        },
                      }),
                      (0, c.fz)({
                        type: c.do.SUCCESS,
                        title: 'Success!',
                        message: 'Workspace deleted successfully.',
                      });
                  })
                  .catch(() => {
                    (0, c.fz)({
                      type: c.do.ERROR,
                      title: 'Error!',
                      message: 'Something went wrong. Please try again later.',
                    }),
                      o({
                        eventName: v.Ye,
                        payload: {
                          ...s,
                          state: 'FAILED',
                          element: 'Workspace general settings page',
                        },
                      });
                  }));
            };
          return (0, a.jsx)(S.u.Root, {
            show: t,
            as: l.Fragment,
            children: (0, a.jsxs)(es.V, {
              as: 'div',
              className: 'relative z-20',
              onClose: j,
              children: [
                (0, a.jsx)(S.u.Child, {
                  as: l.Fragment,
                  enter: 'ease-out duration-300',
                  enterFrom: 'opacity-0',
                  enterTo: 'opacity-100',
                  leave: 'ease-in duration-200',
                  leaveFrom: 'opacity-100',
                  leaveTo: 'opacity-0',
                  children: (0, a.jsx)('div', {
                    className:
                      'fixed inset-0 bg-custom-backdrop transition-opacity',
                  }),
                }),
                (0, a.jsx)('div', {
                  className: 'fixed inset-0 z-20 overflow-y-auto',
                  children: (0, a.jsx)('div', {
                    className:
                      'flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0',
                    children: (0, a.jsx)(S.u.Child, {
                      as: l.Fragment,
                      enter: 'ease-out duration-300',
                      enterFrom:
                        'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
                      enterTo: 'opacity-100 translate-y-0 sm:scale-100',
                      leave: 'ease-in duration-200',
                      leaveFrom: 'opacity-100 translate-y-0 sm:scale-100',
                      leaveTo:
                        'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
                      children: (0, a.jsx)(es.V.Panel, {
                        className:
                          'relative transform overflow-hidden rounded-lg bg-custom-background-100 text-left shadow-custom-shadow-md transition-all sm:my-8 sm:w-full sm:max-w-2xl',
                        children: (0, a.jsxs)('form', {
                          onSubmit: p(y),
                          className: 'flex flex-col gap-6 p-6',
                          children: [
                            (0, a.jsxs)('div', {
                              className:
                                'flex w-full items-center justify-start gap-6',
                              children: [
                                (0, a.jsx)('span', {
                                  className:
                                    'place-items-center rounded-full bg-red-500/20 p-4',
                                  children: (0, a.jsx)(et.Z, {
                                    className: 'h-6 w-6 text-red-600',
                                    'aria-hidden': 'true',
                                  }),
                                }),
                                (0, a.jsx)('span', {
                                  className: 'flex items-center justify-start',
                                  children: (0, a.jsx)('h3', {
                                    className:
                                      'text-xl font-medium 2xl:text-2xl',
                                    children: 'Delete Workspace',
                                  }),
                                }),
                              ],
                            }),
                            (0, a.jsx)('span', {
                              children: (0, a.jsxs)('p', {
                                className:
                                  'text-sm leading-7 text-custom-text-200',
                                children: [
                                  'Are you sure you want to delete workspace',
                                  ' ',
                                  (0, a.jsx)('span', {
                                    className: 'break-words font-semibold',
                                    children: null == s ? void 0 : s.name,
                                  }),
                                  '? All of the data related to the workspace will be permanently removed. This action cannot be undone.',
                                ],
                              }),
                            }),
                            (0, a.jsxs)('div', {
                              className: 'text-custom-text-200',
                              children: [
                                (0, a.jsxs)('p', {
                                  className: 'break-words text-sm ',
                                  children: [
                                    'Enter the workspace name ',
                                    (0, a.jsx)('span', {
                                      className:
                                        'font-medium text-custom-text-100',
                                      children: null == s ? void 0 : s.name,
                                    }),
                                    ' to continue:',
                                  ],
                                }),
                                (0, a.jsx)(w.Qr, {
                                  control: u,
                                  name: 'workspaceName',
                                  render: e => {
                                    let {
                                      field: { value: t, onChange: s, ref: l },
                                    } = e;
                                    return (0, a.jsx)(c.II, {
                                      id: 'workspaceName',
                                      name: 'workspaceName',
                                      type: 'text',
                                      value: t,
                                      onChange: s,
                                      ref: l,
                                      hasError: !!x.workspaceName,
                                      placeholder: 'Workspace name',
                                      className: 'mt-2 w-full',
                                      autoComplete: 'off',
                                    });
                                  },
                                }),
                              ],
                            }),
                            (0, a.jsxs)('div', {
                              className: 'text-custom-text-200',
                              children: [
                                (0, a.jsxs)('p', {
                                  className: 'text-sm',
                                  children: [
                                    'To confirm, type ',
                                    (0, a.jsx)('span', {
                                      className:
                                        'font-medium text-custom-text-100',
                                      children: 'delete my workspace',
                                    }),
                                    ' ',
                                    'below:',
                                  ],
                                }),
                                (0, a.jsx)(w.Qr, {
                                  control: u,
                                  name: 'confirmDelete',
                                  render: e => {
                                    let {
                                      field: { value: t, onChange: s, ref: l },
                                    } = e;
                                    return (0, a.jsx)(c.II, {
                                      id: 'confirmDelete',
                                      name: 'confirmDelete',
                                      type: 'text',
                                      value: t,
                                      onChange: s,
                                      ref: l,
                                      hasError: !!x.confirmDelete,
                                      placeholder:
                                        "Enter 'delete my workspace'",
                                      className: 'mt-2 w-full',
                                      autoComplete: 'off',
                                    });
                                  },
                                }),
                              ],
                            }),
                            (0, a.jsxs)('div', {
                              className: 'flex justify-end gap-2',
                              children: [
                                (0, a.jsx)(c.zx, {
                                  variant: 'neutral-primary',
                                  size: 'sm',
                                  onClick: j,
                                  children: 'Cancel',
                                }),
                                (0, a.jsx)(c.zx, {
                                  variant: 'danger',
                                  size: 'sm',
                                  type: 'submit',
                                  disabled: !b,
                                  loading: h,
                                  children: h
                                    ? 'Deleting...'
                                    : 'Delete Workspace',
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                }),
              ],
            }),
          });
        });
      var eo = s(95108),
        ec = s(75839),
        ed = s(62320),
        em = s(63763),
        eu = s(63363),
        ex = s(39709),
        eh = s(12625);
      function ep() {
        for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
          t[s] = arguments[s];
        return t.filter(Boolean).join(' ');
      }
      let ef = ['Monthly', 'Yearly'],
        ev = [
          'White-glove onboarding for your use-cases',
          'Bespoke implementation',
          'Priority integrations',
          'Priority Support and SLAs',
          'Early access to all paid features',
          'Locked-in discount for a whole year',
        ],
        eg = [
          'White-glove onboarding for your use-cases',
          'Bespoke implementation',
          'Priority integrations',
          'Priority Support and SLAs',
          'Early access to all paid features',
          'Tiered discounts for the second and third years',
        ],
        eb = e => {
          let { isOpen: t, handleClose: s } = e,
            { captureEvent: r } = (0, m.DN)(),
            [n, i] = (0, l.useState)(0);
          return (0, a.jsx)(S.u, {
            appear: !0,
            show: t,
            as: l.Fragment,
            children: (0, a.jsxs)(es.V, {
              as: 'div',
              className: 'relative z-50',
              onClose: s,
              children: [
                (0, a.jsx)(S.u.Child, {
                  as: l.Fragment,
                  enter: 'ease-out duration-300',
                  enterFrom: 'opacity-0',
                  enterTo: 'opacity-100',
                  leave: 'ease-in duration-200',
                  leaveFrom: 'opacity-100',
                  leaveTo: 'opacity-0',
                  children: (0, a.jsx)('div', {
                    className: 'fixed inset-0 bg-custom-backdrop',
                  }),
                }),
                (0, a.jsx)('div', {
                  className: 'fixed inset-0 overflow-y-auto',
                  children: (0, a.jsx)('div', {
                    className:
                      'flex min-h-full items-center justify-center p-4 text-center',
                    children: (0, a.jsx)(S.u.Child, {
                      as: l.Fragment,
                      enter: 'ease-out duration-300',
                      enterFrom: 'opacity-0 scale-95',
                      enterTo: 'opacity-100 scale-100',
                      leave: 'ease-in duration-200',
                      leaveFrom: 'opacity-100 scale-100',
                      leaveTo: 'opacity-0 scale-95',
                      children: (0, a.jsxs)(es.V.Panel, {
                        className:
                          'w-full max-w-lg transform overflow-hidden rounded-2xl bg-custom-background-100 p-6 text-left align-middle shadow-xl transition-all border-[0.5px] border-custom-border-100',
                        children: [
                          (0, a.jsx)(es.V.Title, {
                            as: 'h2',
                            className:
                              'text-2xl font-bold leading-6 mt-4 flex justify-center items-center',
                            children: 'Early-adopter pricing for believers',
                          }),
                          (0, a.jsxs)('div', {
                            className: 'mt-2 mb-5',
                            children: [
                              (0, a.jsx)('p', {
                                className:
                                  'text-center text-sm mb-6 px-10 text-custom-text-200',
                                children:
                                  'Build Plane to your specs. You decide what we prioritize and build for everyone. Also get tailored onboarding + implementation and priority support.',
                              }),
                              (0, a.jsxs)(eh.O.Group, {
                                children: [
                                  (0, a.jsx)('div', {
                                    className: 'flex w-full justify-center',
                                    children: (0, a.jsx)(eh.O.List, {
                                      className:
                                        'flex space-x-1 rounded-xl bg-custom-background-80 p-1 w-[72%]',
                                      children: ef.map((e, t) =>
                                        (0, a.jsx)(
                                          eh.O,
                                          {
                                            className: e => {
                                              let { selected: t } = e;
                                              return ep(
                                                'w-full rounded-lg py-2 text-sm font-medium leading-5',
                                                'ring-white/60 ring-offset-2 ring-offset-custom-primary-90 focus:outline-none',
                                                t
                                                  ? 'bg-custom-background-100 text-custom-primary-100 shadow'
                                                  : 'hover:bg-custom-background-80 text-custom-text-300 hover:text-custom-text-100'
                                              );
                                            },
                                            onClick: () => i(t),
                                            children: (0, a.jsxs)(a.Fragment, {
                                              children: [
                                                e,
                                                'Yearly' === e &&
                                                  (0, a.jsx)('span', {
                                                    className:
                                                      'bg-custom-primary-100 text-white rounded-full px-2 py-1 ml-1 text-xs',
                                                    children: '-28%',
                                                  }),
                                              ],
                                            }),
                                          },
                                          e
                                        )
                                      ),
                                    }),
                                  }),
                                  (0, a.jsxs)(eh.O.Panels, {
                                    className: 'mt-2',
                                    children: [
                                      (0, a.jsxs)(eh.O.Panel, {
                                        className: ep(
                                          'rounded-xl bg-custom-background-100 p-3'
                                        ),
                                        children: [
                                          (0, a.jsxs)('p', {
                                            className:
                                              'ml-4 text-4xl font-bold mb-2',
                                            children: [
                                              '$7',
                                              (0, a.jsx)('span', {
                                                className:
                                                  'text-sm ml-3 text-custom-text-300',
                                                children: '/user/month',
                                              }),
                                            ],
                                          }),
                                          (0, a.jsx)('ul', {
                                            children: ev.map(e =>
                                              (0, a.jsx)(
                                                'li',
                                                {
                                                  className:
                                                    'relative rounded-md p-3 flex',
                                                  children: (0, a.jsxs)('p', {
                                                    className:
                                                      'text-sm font-medium leading-5 flex items-center',
                                                    children: [
                                                      (0, a.jsx)(ex.Z, {
                                                        className:
                                                          'h-4 w-4 mr-4',
                                                      }),
                                                      (0, a.jsx)('span', {
                                                        children: e,
                                                      }),
                                                    ],
                                                  }),
                                                },
                                                e
                                              )
                                            ),
                                          }),
                                          (0, a.jsx)('div', {
                                            className:
                                              'flex justify-center w-full',
                                            children: (0, a.jsxs)('div', {
                                              className:
                                                'relative inline-flex group mt-8',
                                              children: [
                                                (0, a.jsx)('div', {
                                                  className:
                                                    'absolute transition-all duration-1000 opacity-50 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt',
                                                }),
                                                (0, a.jsx)('button', {
                                                  type: 'button',
                                                  className:
                                                    'relative inline-flex items-center justify-center px-8 py-4 text-sm font-medium border-custom-border-100 border-[1.5px] transition-all duration-200 bg-custom-background-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-border-200',
                                                  onClick: () => {
                                                    window.open(
                                                      'https://buy.stripe.com/7sI01XaCs7Db0MMaEE',
                                                      '_blank'
                                                    ),
                                                      r(
                                                        'pro_plan_modal_month_redirection',
                                                        {}
                                                      );
                                                  },
                                                  children:
                                                    'Become Early Adopter',
                                                }),
                                              ],
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, a.jsxs)(eh.O.Panel, {
                                        className: ep(
                                          'rounded-xl bg-custom-background-100 p-3'
                                        ),
                                        children: [
                                          (0, a.jsxs)('p', {
                                            className:
                                              'ml-4 text-4xl font-bold mb-2',
                                            children: [
                                              '$5',
                                              (0, a.jsx)('span', {
                                                className:
                                                  'text-sm ml-3 text-custom-text-300',
                                                children: '/user/month',
                                              }),
                                            ],
                                          }),
                                          (0, a.jsx)('ul', {
                                            children: eg.map(e =>
                                              (0, a.jsx)(
                                                'li',
                                                {
                                                  className:
                                                    'relative rounded-md p-3 flex',
                                                  children: (0, a.jsxs)('p', {
                                                    className:
                                                      'text-sm font-medium leading-5 flex items-center',
                                                    children: [
                                                      (0, a.jsx)(ex.Z, {
                                                        className:
                                                          'h-4 w-4 mr-4',
                                                      }),
                                                      (0, a.jsx)('span', {
                                                        children: e,
                                                      }),
                                                    ],
                                                  }),
                                                },
                                                e
                                              )
                                            ),
                                          }),
                                          (0, a.jsx)('div', {
                                            className:
                                              'flex justify-center w-full',
                                            children: (0, a.jsxs)('div', {
                                              className:
                                                'relative inline-flex group mt-8',
                                              children: [
                                                (0, a.jsx)('div', {
                                                  className:
                                                    'absolute transition-all duration-1000 opacity-50 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt',
                                                }),
                                                (0, a.jsx)('button', {
                                                  type: 'button',
                                                  className:
                                                    'relative inline-flex items-center justify-center px-8 py-4 text-sm font-medium border-custom-border-100 border-[1.5px] transition-all duration-200 bg-custom-background-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-border-200',
                                                  onClick: () => {
                                                    window.open(
                                                      'https://buy.stripe.com/fZecOJ8uk0aJ1QQ7sw',
                                                      '_blank'
                                                    ),
                                                      r(
                                                        'pro_plan_modal_yearly_redirection',
                                                        {}
                                                      );
                                                  },
                                                  children:
                                                    'Become Early Adopter',
                                                }),
                                              ],
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              ],
            }),
          });
        };
      var ej = s(42683),
        ey = s(4147);
      let ew = [
          { name: 'Documentation', href: 'https://docs.plane.so/', Icon: eo.Z },
          {
            name: 'Join our Discord',
            href: 'https://discord.com/invite/A92xrEGCge',
            Icon: c.D7,
          },
          {
            name: 'Report a bug',
            href: 'https://github.com/makeplane/plane/issues/new/choose',
            Icon: c.ET,
          },
        ],
        eN = (0, r.Pi)(() => {
          let [e, t] = (0, l.useState)(!1),
            {
              theme: { sidebarCollapsed: s, toggleSidebar: r },
              commandPalette: { toggleShortcutModal: n },
            } = (0, m.IX)(),
            { captureEvent: i } = (0, m.DN)(),
            { isMobile: o } = (0, u.L)(),
            [d, x] = (0, l.useState)(!1),
            h = (0, l.useRef)(null);
          (0, ej.Z)(h, () => x(!1));
          let f = s || !1;
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(eb, { isOpen: e, handleClose: () => t(!1) }),
              (0, a.jsxs)('div', {
                className:
                  'flex w-full items-center justify-between gap-1 self-baseline border-t border-custom-border-200 bg-custom-sidebar-background-100 px-4 py-[6px] '.concat(
                    f ? 'flex-col' : ''
                  ),
                children: [
                  !f &&
                    (0, a.jsx)(c.zx, {
                      variant: 'outline-primary',
                      className:
                        'w-1/2 cursor-pointer rounded-2xl px-2.5 py-1.5 text-center text-sm font-medium outline-none',
                      onClick: () => {
                        t(!0), i('pro_plan_modal_opened', {});
                      },
                      children: 'Plane Pro',
                    }),
                  (0, a.jsxs)('div', {
                    className: 'flex items-center gap-1 '.concat(
                      f ? 'flex-col justify-center' : 'w-1/2 justify-evenly'
                    ),
                    children: [
                      (0, a.jsx)(c.u, {
                        tooltipContent: 'Shortcuts',
                        isMobile: o,
                        children: (0, a.jsx)('button', {
                          type: 'button',
                          className:
                            'grid place-items-center rounded-md p-1.5 text-custom-text-200 outline-none hover:bg-custom-background-90 hover:text-custom-text-100 '.concat(
                              f ? 'w-full' : ''
                            ),
                          onClick: () => n(!0),
                          children: (0, a.jsx)(ec.Z, {
                            className: 'h-3.5 w-3.5',
                          }),
                        }),
                      }),
                      (0, a.jsx)(c.u, {
                        tooltipContent: 'Help',
                        isMobile: o,
                        children: (0, a.jsx)('button', {
                          type: 'button',
                          className:
                            'grid place-items-center rounded-md p-1.5 text-custom-text-200 outline-none hover:bg-custom-background-90 hover:text-custom-text-100 '.concat(
                              f ? 'w-full' : ''
                            ),
                          onClick: () => x(e => !e),
                          children: (0, a.jsx)(ed.Z, {
                            className: 'h-3.5 w-3.5',
                          }),
                        }),
                      }),
                      (0, a.jsx)('button', {
                        type: 'button',
                        className:
                          'grid place-items-center rounded-md p-1.5 text-custom-text-200 outline-none hover:bg-custom-background-90 hover:text-custom-text-100 md:hidden',
                        onClick: () => r(),
                        children: (0, a.jsx)(em.Z, {
                          className: 'h-3.5 w-3.5',
                        }),
                      }),
                      (0, a.jsx)(c.u, {
                        tooltipContent: ''.concat(f ? 'Expand' : 'Hide'),
                        isMobile: o,
                        children: (0, a.jsx)('button', {
                          type: 'button',
                          className:
                            'hidden place-items-center rounded-md p-1.5 text-custom-text-200 outline-none hover:bg-custom-background-90 hover:text-custom-text-100 md:grid '.concat(
                              f ? 'w-full' : ''
                            ),
                          onClick: () => r(),
                          children: (0, a.jsx)(em.Z, {
                            className: 'h-3.5 w-3.5 duration-300 '.concat(
                              f ? 'rotate-180' : ''
                            ),
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsx)('div', {
                    className: 'relative',
                    children: (0, a.jsx)(S.u, {
                      show: d,
                      enter: 'transition ease-out duration-100',
                      enterFrom: 'transform opacity-0 scale-95',
                      enterTo: 'transform opacity-100 scale-100',
                      leave: 'transition ease-in duration-75',
                      leaveFrom: 'transform opacity-100 scale-100',
                      leaveTo: 'transform opacity-0 scale-95',
                      children: (0, a.jsxs)('div', {
                        className: 'absolute bottom-2 min-w-[10rem] '.concat(
                          f ? 'left-full' : '-left-[75px]',
                          ' divide-y divide-custom-border-200 whitespace-nowrap rounded bg-custom-background-100 p-1 shadow-custom-shadow-xs'
                        ),
                        ref: h,
                        children: [
                          (0, a.jsxs)('div', {
                            className: 'space-y-1 pb-2',
                            children: [
                              ew.map(e => {
                                let { name: t, Icon: s, href: l } = e;
                                return (0, a.jsx)(
                                  p(),
                                  {
                                    href: l,
                                    target: '_blank',
                                    children: (0, a.jsxs)('span', {
                                      className:
                                        'flex items-center gap-x-2 rounded px-2 py-1 text-xs hover:bg-custom-background-80',
                                      children: [
                                        (0, a.jsx)('div', {
                                          className:
                                            'grid flex-shrink-0 place-items-center',
                                          children: (0, a.jsx)(s, {
                                            className:
                                              'h-3.5 w-3.5 text-custom-text-200',
                                            size: 14,
                                          }),
                                        }),
                                        (0, a.jsx)('span', {
                                          className: 'text-xs',
                                          children: t,
                                        }),
                                      ],
                                    }),
                                  },
                                  t
                                );
                              }),
                              (0, a.jsxs)('button', {
                                type: 'button',
                                onClick: () => {
                                  window &&
                                    window.$crisp.push(['do', 'chat:show']);
                                },
                                className:
                                  'flex w-full items-center gap-x-2 rounded px-2 py-1 text-xs hover:bg-custom-background-80',
                                children: [
                                  (0, a.jsx)('div', {
                                    className:
                                      'grid flex-shrink-0 place-items-center',
                                    children: (0, a.jsx)(eu.Z, {
                                      className:
                                        'h-3.5 w-3.5 text-custom-text-200',
                                    }),
                                  }),
                                  (0, a.jsx)('span', {
                                    className: 'text-xs',
                                    children: 'Chat with us',
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)('div', {
                            className: 'px-2 pb-1 pt-2 text-[10px]',
                            children: ['Version: v', ey.i8],
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            ],
          });
        });
      var ek = s(82558);
      let eC = { emails: [{ email: '', role: 15 }] },
        eS = (0, r.Pi)(e => {
          let { isOpen: t, onClose: s, onSubmit: r } = e,
            {
              membership: { currentWorkspaceRole: n },
            } = (0, m.aF)(),
            {
              control: i,
              reset: o,
              handleSubmit: u,
              formState: { isSubmitting: x, errors: h },
            } = (0, w.cI)(),
            {
              fields: p,
              append: f,
              remove: v,
            } = (0, w.Dq)({ control: i, name: 'emails' }),
            g = () => {
              s();
              let e = setTimeout(() => {
                o(eC), clearTimeout(e);
              }, 350);
            },
            b = async e => {
              var t;
              await (null === (t = r(e)) || void 0 === t
                ? void 0
                : t.then(() => {
                    o(eC);
                  }));
            };
          return (
            (0, l.useEffect)(() => {
              0 === p.length && f([{ email: '', role: 15 }]);
            }, [p, f]),
            (0, a.jsx)(S.u.Root, {
              show: t,
              as: l.Fragment,
              children: (0, a.jsxs)(es.V, {
                as: 'div',
                className: 'relative z-20',
                onClose: g,
                children: [
                  (0, a.jsx)(S.u.Child, {
                    as: l.Fragment,
                    enter: 'ease-out duration-300',
                    enterFrom: 'opacity-0',
                    enterTo: 'opacity-100',
                    leave: 'ease-in duration-200',
                    leaveFrom: 'opacity-100',
                    leaveTo: 'opacity-0',
                    children: (0, a.jsx)('div', {
                      className:
                        'fixed inset-0 bg-custom-backdrop transition-opacity',
                    }),
                  }),
                  (0, a.jsx)('div', {
                    className: 'fixed inset-0 z-20 overflow-y-auto',
                    children: (0, a.jsx)('div', {
                      className:
                        'flex min-h-full items-center justify-center p-4 text-center',
                      children: (0, a.jsx)(S.u.Child, {
                        as: l.Fragment,
                        enter: 'ease-out duration-300',
                        enterFrom:
                          'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
                        enterTo: 'opacity-100 translate-y-0 sm:scale-100',
                        leave: 'ease-in duration-200',
                        leaveFrom: 'opacity-100 translate-y-0 sm:scale-100',
                        leaveTo:
                          'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
                        children: (0, a.jsx)(es.V.Panel, {
                          className:
                            'relative translate-y-0 transform rounded-lg bg-custom-background-100 p-5 text-left opacity-100 shadow-custom-shadow-md transition-all w-full sm:max-w-2xl sm:scale-100',
                          children: (0, a.jsxs)('form', {
                            onSubmit: u(b),
                            onKeyDown: e => {
                              'Enter' === e.code && e.preventDefault();
                            },
                            children: [
                              (0, a.jsxs)('div', {
                                className: 'space-y-5',
                                children: [
                                  (0, a.jsx)(es.V.Title, {
                                    as: 'h3',
                                    className:
                                      'text-lg font-medium leading-6 text-custom-text-100',
                                    children: 'Invite people to collaborate',
                                  }),
                                  (0, a.jsx)('div', {
                                    className: 'mt-2',
                                    children: (0, a.jsx)('p', {
                                      className: 'text-sm text-custom-text-200',
                                      children:
                                        'Invite members to work on your workspace.',
                                    }),
                                  }),
                                  (0, a.jsx)('div', {
                                    className: 'mb-3 space-y-4',
                                    children: p.map((e, t) =>
                                      (0, a.jsxs)(
                                        'div',
                                        {
                                          className:
                                            'group relative flex items-start gap-4',
                                          children: [
                                            (0, a.jsx)('div', {
                                              className: 'w-full',
                                              children: (0, a.jsx)(w.Qr, {
                                                control: i,
                                                name: 'emails.'.concat(
                                                  t,
                                                  '.email'
                                                ),
                                                rules: {
                                                  required:
                                                    'Email ID is required',
                                                  pattern: {
                                                    value:
                                                      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: 'Invalid Email ID',
                                                  },
                                                },
                                                render: e => {
                                                  var s, l, r, n, i, o, d;
                                                  let {
                                                    field: {
                                                      value: m,
                                                      onChange: u,
                                                      ref: x,
                                                    },
                                                  } = e;
                                                  return (0, a.jsxs)(
                                                    a.Fragment,
                                                    {
                                                      children: [
                                                        (0, a.jsx)(c.II, {
                                                          id: 'emails.'.concat(
                                                            t,
                                                            '.email'
                                                          ),
                                                          name: 'emails.'.concat(
                                                            t,
                                                            '.email'
                                                          ),
                                                          type: 'text',
                                                          value: m,
                                                          onChange: u,
                                                          ref: x,
                                                          hasError: !!(null ===
                                                            (l = h.emails) ||
                                                          void 0 === l
                                                            ? void 0
                                                            : null ===
                                                                  (s = l[t]) ||
                                                                void 0 === s
                                                              ? void 0
                                                              : s.email),
                                                          placeholder:
                                                            'Enter their email...',
                                                          className:
                                                            'w-full text-xs sm:text-sm',
                                                        }),
                                                        (null ===
                                                          (n = h.emails) ||
                                                        void 0 === n
                                                          ? void 0
                                                          : null ===
                                                                (r = n[t]) ||
                                                              void 0 === r
                                                            ? void 0
                                                            : r.email) &&
                                                          (0, a.jsx)('span', {
                                                            className:
                                                              'ml-1 text-xs text-red-500',
                                                            children:
                                                              null ===
                                                                (d =
                                                                  h.emails) ||
                                                              void 0 === d
                                                                ? void 0
                                                                : null ===
                                                                      (o =
                                                                        d[t]) ||
                                                                    void 0 === o
                                                                  ? void 0
                                                                  : null ===
                                                                        (i =
                                                                          o.email) ||
                                                                      void 0 ===
                                                                        i
                                                                    ? void 0
                                                                    : i.message,
                                                          }),
                                                      ],
                                                    }
                                                  );
                                                },
                                              }),
                                            }),
                                            (0, a.jsxs)('div', {
                                              className:
                                                'flex items-center gap-2',
                                              children: [
                                                (0, a.jsx)(w.Qr, {
                                                  control: i,
                                                  name: 'emails.'.concat(
                                                    t,
                                                    '.role'
                                                  ),
                                                  rules: { required: !0 },
                                                  render: e => {
                                                    let {
                                                      field: {
                                                        value: t,
                                                        onChange: s,
                                                      },
                                                    } = e;
                                                    return (0, a.jsx)(c.AP, {
                                                      value: t,
                                                      label: (0, a.jsx)(
                                                        'span',
                                                        {
                                                          className:
                                                            'text-xs sm:text-sm',
                                                          children: d.HB[t],
                                                        }
                                                      ),
                                                      onChange: s,
                                                      optionsClassName:
                                                        'w-full',
                                                      className: 'flex-grow',
                                                      input: !0,
                                                      children: Object.entries(
                                                        d.HB
                                                      ).map(e => {
                                                        let [t, s] = e;
                                                        if (
                                                          n &&
                                                          n >= parseInt(t)
                                                        )
                                                          return (0, a.jsx)(
                                                            c.AP.Option,
                                                            {
                                                              value:
                                                                parseInt(t),
                                                              children: s,
                                                            },
                                                            t
                                                          );
                                                      }),
                                                    });
                                                  },
                                                }),
                                                p.length > 1 &&
                                                  (0, a.jsx)('button', {
                                                    type: 'button',
                                                    className:
                                                      'grid place-items-center self-center rounded flex-shrink-0',
                                                    onClick: () => v(t),
                                                    children: (0, a.jsx)(ek.Z, {
                                                      className:
                                                        'h-3.5 w-3.5 text-custom-text-200',
                                                    }),
                                                  }),
                                              ],
                                            }),
                                          ],
                                        },
                                        e.id
                                      )
                                    ),
                                  }),
                                ],
                              }),
                              (0, a.jsxs)('div', {
                                className:
                                  'mt-5 flex items-center justify-between gap-2',
                                children: [
                                  (0, a.jsxs)('button', {
                                    type: 'button',
                                    className:
                                      'flex items-center gap-2 bg-transparent py-2 pr-3 text-sm font-medium text-custom-primary outline-custom-primary',
                                    onClick: () => {
                                      f({ email: '', role: 15 });
                                    },
                                    children: [
                                      (0, a.jsx)(O.Z, { className: 'h-4 w-4' }),
                                      'Add more',
                                    ],
                                  }),
                                  (0, a.jsxs)('div', {
                                    className: 'flex items-center gap-2',
                                    children: [
                                      (0, a.jsx)(c.zx, {
                                        variant: 'neutral-primary',
                                        size: 'sm',
                                        onClick: g,
                                        children: 'Cancel',
                                      }),
                                      (0, a.jsx)(c.zx, {
                                        variant: 'primary',
                                        size: 'sm',
                                        type: 'submit',
                                        loading: x,
                                        children: x
                                          ? 'Sending invitation'
                                          : 'Send invitation',
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                  }),
                ],
              }),
            })
          );
        });
      var e_ = s(35704),
        eE = s(69570),
        eI = s(73471);
      /**
       * @license lucide-react v0.378.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let eF = (0, eI.Z)('Mails', [
        [
          'rect',
          { width: '16', height: '13', x: '6', y: '4', rx: '2', key: '1drq3f' },
        ],
        [
          'path',
          { d: 'm22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7', key: 'xn252p' },
        ],
        ['path', { d: 'M2 8v11c0 1.1.9 2 2 2h14', key: 'n13cji' }],
      ]);
      var ez = s(75437),
        eR = s(38330),
        eT = s(1759);
      /**
       * @license lucide-react v0.378.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let eP = (0, eI.Z)('SquarePlus', [
        [
          'rect',
          { width: '18', height: '18', x: '3', y: '3', rx: '2', key: 'afitv7' },
        ],
        ['path', { d: 'M8 12h8', key: '1wcyev' }],
        ['path', { d: 'M12 8v8', key: 'napkw2' }],
      ]);
      var eA = s(70609),
        eD = s(53944);
      let eM = (e, t) => [
          {
            key: 'workspace_invites',
            name: 'Workspace invites',
            href: '/invitations',
            icon: eF,
          },
          {
            key: 'my_activity',
            name: 'My activity',
            href: '/'.concat(e, '/profile/').concat(t),
            icon: ez.Z,
          },
          {
            key: 'settings',
            name: 'Settings',
            href: '/'.concat(e, '/settings'),
            icon: eR.Z,
          },
        ],
        eZ = (e, t) => [
          {
            name: 'My activity',
            icon: ez.Z,
            link: '/'.concat(e, '/profile/').concat(t),
          },
          { name: 'Settings', icon: eR.Z, link: '/profile' },
        ],
        eO = (0, r.Pi)(() => {
          var e, t;
          let s = (0, n.useRouter)(),
            { workspaceSlug: r } = s.query,
            {
              theme: { sidebarCollapsed: o, toggleSidebar: d },
            } = (0, m.IX)(),
            {
              currentUser: u,
              updateCurrentUser: x,
              isUserInstanceAdmin: h,
              signOut: f,
            } = (0, m.aF)(),
            { currentWorkspace: v, workspaces: g } = (0, m.cF)(),
            { setTheme: j } = (0, e_.F)(),
            [y, w] = (0, l.useState)(null),
            [N, k] = (0, l.useState)(null),
            { styles: C, attributes: _ } = (0, eE.D)(y, N, {
              placement: 'right',
              modifiers: [
                { name: 'preventOverflow', options: { padding: 12 } },
              ],
            }),
            E = e => x({ last_workspace_id: null == e ? void 0 : e.id }),
            I = async () => {
              await f()
                .then(() => {
                  (0, b.JG)('CURRENT_USER_DETAILS', null),
                    j('system'),
                    s.push('/');
                })
                .catch(() =>
                  (0, c.fz)({
                    type: c.do.ERROR,
                    title: 'Error!',
                    message: 'Failed to sign out. Please try again.',
                  })
                );
            },
            F = () => {
              window.innerWidth < 768 && d();
            },
            z = Object.values(null != g ? g : {});
          return (0, a.jsxs)('div', {
            className: 'flex items-center gap-x-3 gap-y-2 px-4 pt-4',
            children: [
              (0, a.jsx)(eD.v, {
                as: 'div',
                className: 'relative h-full flex-grow truncate text-left',
                children: e => {
                  var t, s, n, d;
                  let { open: m } = e;
                  return (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(eD.v.Button, {
                        className:
                          'group/menu-button h-full w-full truncate rounded-md text-sm font-medium text-custom-sidebar-text-200 hover:bg-custom-sidebar-background-80 focus:outline-none',
                        children: (0, a.jsxs)('div', {
                          className:
                            'flex items-center  gap-x-2 truncate rounded p-1 '.concat(
                              o ? 'justify-center' : 'justify-between'
                            ),
                          children: [
                            (0, a.jsxs)('div', {
                              className: 'flex items-center gap-2 truncate',
                              children: [
                                (0, a.jsx)('div', {
                                  className:
                                    'relative grid h-6 w-6 flex-shrink-0 place-items-center uppercase '.concat(
                                      !(null == v ? void 0 : v.logo) &&
                                        'rounded bg-custom-primary-500 text-white'
                                    ),
                                  children:
                                    (null == v ? void 0 : v.logo) &&
                                    '' !== v.logo
                                      ? (0, a.jsx)('img', {
                                          src: v.logo,
                                          className:
                                            'absolute left-0 top-0 h-full w-full rounded object-cover',
                                          alt: 'Workspace Logo',
                                        })
                                      : null !==
                                            (s =
                                              null == v
                                                ? void 0
                                                : null === (t = v.name) ||
                                                    void 0 === t
                                                  ? void 0
                                                  : t.charAt(0)) && void 0 !== s
                                        ? s
                                        : '...',
                                }),
                                !o &&
                                  (0, a.jsx)('h4', {
                                    className:
                                      'truncate text-base font-medium text-custom-text-100',
                                    children: (null == v ? void 0 : v.name)
                                      ? v.name
                                      : 'Loading...',
                                  }),
                              ],
                            }),
                            !o &&
                              (0, a.jsx)(i.Z, {
                                className:
                                  'mx-1 hidden h-4 w-4 flex-shrink-0 group-hover/menu-button:block '.concat(
                                    m ? 'rotate-180' : '',
                                    ' text-custom-sidebar-text-400 duration-300'
                                  ),
                              }),
                          ],
                        }),
                      }),
                      (0, a.jsx)(S.u, {
                        as: l.Fragment,
                        enter: 'transition ease-out duration-100',
                        enterFrom: 'transform opacity-0 scale-95',
                        enterTo: 'transform opacity-100 scale-100',
                        leave: 'transition ease-in duration-75',
                        leaveFrom: 'transform opacity-100 scale-100',
                        leaveTo: 'transform opacity-0 scale-95',
                        children: (0, a.jsx)(eD.v.Items, {
                          as: l.Fragment,
                          children: (0, a.jsxs)('div', {
                            className:
                              'fixed left-4 z-20 mt-1 flex w-full max-w-[19rem] origin-top-left flex-col rounded-md border-[0.5px] border-custom-sidebar-border-300 bg-custom-sidebar-background-100 shadow-custom-shadow-rg divide-y divide-custom-border-100 outline-none',
                            children: [
                              (0, a.jsxs)('div', {
                                className:
                                  'flex max-h-96 flex-col items-start justify-start gap-2 overflow-y-scroll mb-2 px-4 vertical-scrollbar scrollbar-sm',
                                children: [
                                  (0, a.jsx)('h6', {
                                    className:
                                      'sticky top-0 z-10 h-full w-full pt-3 pb-1 text-sm font-medium text-custom-sidebar-text-400 bg-custom-sidebar-background-100',
                                    children: null == u ? void 0 : u.email,
                                  }),
                                  z
                                    ? (0, a.jsx)('div', {
                                        className:
                                          'flex h-full w-full flex-col items-start justify-start gap-1.5',
                                        children:
                                          z.length > 0 &&
                                          z.map(e => {
                                            var t, s;
                                            return (0, a.jsx)(
                                              p(),
                                              {
                                                href: '/'.concat(e.slug),
                                                onClick: () => {
                                                  E(e), F();
                                                },
                                                className: 'w-full',
                                                children: (0, a.jsxs)(
                                                  eD.v.Item,
                                                  {
                                                    as: 'div',
                                                    className:
                                                      'flex items-center justify-between gap-1 rounded p-1 text-sm text-custom-sidebar-text-100 hover:bg-custom-sidebar-background-80',
                                                    children: [
                                                      (0, a.jsxs)('div', {
                                                        className:
                                                          'flex items-center justify-start gap-2.5 truncate',
                                                        children: [
                                                          (0, a.jsx)('span', {
                                                            className:
                                                              'relative flex h-6 w-6 flex-shrink-0 items-center  justify-center p-2 text-xs uppercase '.concat(
                                                                !(null == e
                                                                  ? void 0
                                                                  : e.logo) &&
                                                                  'rounded bg-custom-primary-500 text-white'
                                                              ),
                                                            children:
                                                              (null == e
                                                                ? void 0
                                                                : e.logo) &&
                                                              '' !== e.logo
                                                                ? (0, a.jsx)(
                                                                    'img',
                                                                    {
                                                                      src: e.logo,
                                                                      className:
                                                                        'absolute left-0 top-0 h-full w-full rounded object-cover',
                                                                      alt: 'Workspace Logo',
                                                                    }
                                                                  )
                                                                : null !==
                                                                      (s =
                                                                        null ==
                                                                        e
                                                                          ? void 0
                                                                          : null ===
                                                                                (t =
                                                                                  e.name) ||
                                                                              void 0 ===
                                                                                t
                                                                            ? void 0
                                                                            : t.charAt(
                                                                                0
                                                                              )) &&
                                                                    void 0 !== s
                                                                  ? s
                                                                  : '...',
                                                          }),
                                                          (0, a.jsx)('h5', {
                                                            className:
                                                              'truncate text-sm font-medium '.concat(
                                                                r === e.slug
                                                                  ? ''
                                                                  : 'text-custom-text-200'
                                                              ),
                                                            children: e.name,
                                                          }),
                                                        ],
                                                      }),
                                                      e.id ===
                                                        (null == v
                                                          ? void 0
                                                          : v.id) &&
                                                        (0, a.jsx)('span', {
                                                          className:
                                                            'flex-shrink-0 p-1',
                                                          children: (0, a.jsx)(
                                                            eT.Z,
                                                            {
                                                              className:
                                                                'h-5 w-5 text-custom-sidebar-text-100',
                                                            }
                                                          ),
                                                        }),
                                                    ],
                                                  }
                                                ),
                                              },
                                              e.id
                                            );
                                          }),
                                      })
                                    : (0, a.jsx)('div', {
                                        className: 'w-full',
                                        children: (0, a.jsxs)(c.aN, {
                                          className: 'space-y-2',
                                          children: [
                                            (0, a.jsx)(c.aN.Item, {
                                              height: '30px',
                                            }),
                                            (0, a.jsx)(c.aN.Item, {
                                              height: '30px',
                                            }),
                                          ],
                                        }),
                                      }),
                                ],
                              }),
                              (0, a.jsxs)('div', {
                                className:
                                  'flex w-full flex-col items-start justify-start gap-2 px-4 py-2 text-sm',
                                children: [
                                  (0, a.jsx)(p(), {
                                    href: '/create-workspace',
                                    className: 'w-full',
                                    children: (0, a.jsxs)(eD.v.Item, {
                                      as: 'div',
                                      className:
                                        'flex items-center gap-2 rounded px-2 py-1 text-sm text-custom-sidebar-text-100 hover:bg-custom-sidebar-background-80 font-medium',
                                      children: [
                                        (0, a.jsx)(eP, {
                                          strokeWidth: 1.75,
                                          className: 'h-4 w-4 flex-shrink-0',
                                        }),
                                        'Create workspace',
                                      ],
                                    }),
                                  }),
                                  eM(
                                    null !==
                                      (n = null == r ? void 0 : r.toString()) &&
                                      void 0 !== n
                                      ? n
                                      : '',
                                    null !== (d = null == u ? void 0 : u.id) &&
                                      void 0 !== d
                                      ? d
                                      : ''
                                  ).map((e, t) =>
                                    (0, a.jsx)(
                                      p(),
                                      {
                                        href: e.href,
                                        className: 'w-full',
                                        onClick: () => {
                                          t > 0 && F();
                                        },
                                        children: (0, a.jsxs)(eD.v.Item, {
                                          as: 'div',
                                          className:
                                            'flex items-center gap-2 rounded px-2 py-1 text-sm text-custom-sidebar-text-200 hover:bg-custom-sidebar-background-80 font-medium',
                                          children: [
                                            (0, a.jsx)(e.icon, {
                                              className:
                                                'h-4 w-4 flex-shrink-0',
                                            }),
                                            e.name,
                                          ],
                                        }),
                                      },
                                      e.key
                                    )
                                  ),
                                ],
                              }),
                              (0, a.jsx)('div', {
                                className: 'w-full px-4 py-2',
                                children: (0, a.jsxs)(eD.v.Item, {
                                  as: 'button',
                                  type: 'button',
                                  className:
                                    'w-full flex items-center gap-2 rounded px-2 py-1 text-sm text-red-600 hover:bg-custom-sidebar-background-80 font-medium',
                                  onClick: I,
                                  children: [
                                    (0, a.jsx)(eA.Z, {
                                      className: 'h-4 w-4 flex-shrink-0',
                                    }),
                                    'Sign out',
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  });
                },
              }),
              !o &&
                (0, a.jsxs)(eD.v, {
                  as: 'div',
                  className: 'relative flex-shrink-0',
                  children: [
                    (0, a.jsx)(eD.v.Button, {
                      className: 'grid place-items-center outline-none',
                      ref: w,
                      children: (0, a.jsx)(c.qE, {
                        name: null == u ? void 0 : u.display_name,
                        src: null == u ? void 0 : u.avatar,
                        size: 24,
                        shape: 'square',
                        className: '!text-base',
                      }),
                    }),
                    (0, a.jsx)(S.u, {
                      as: l.Fragment,
                      enter: 'transition ease-out duration-100',
                      enterFrom: 'transform opacity-0 scale-95',
                      enterTo: 'transform opacity-100 scale-100',
                      leave: 'transition ease-in duration-75',
                      leaveFrom: 'transform opacity-100 scale-100',
                      leaveTo: 'transform opacity-0 scale-95',
                      children: (0, a.jsxs)(eD.v.Items, {
                        className:
                          'absolute left-0 z-20 mt-1 flex w-52 origin-top-left  flex-col divide-y divide-custom-sidebar-border-200 rounded-md border border-custom-sidebar-border-200 bg-custom-sidebar-background-100 px-1 py-2 text-xs shadow-lg outline-none',
                        ref: k,
                        style: C.popper,
                        ..._.popper,
                        children: [
                          (0, a.jsxs)('div', {
                            className: 'flex flex-col gap-2.5 pb-2',
                            children: [
                              (0, a.jsx)('span', {
                                className: 'px-2 text-custom-sidebar-text-200',
                                children: null == u ? void 0 : u.email,
                              }),
                              eZ(
                                null !==
                                  (e = null == r ? void 0 : r.toString()) &&
                                  void 0 !== e
                                  ? e
                                  : '',
                                null !== (t = null == u ? void 0 : u.id) &&
                                  void 0 !== t
                                  ? t
                                  : ''
                              ).map((e, t) =>
                                (0, a.jsx)(
                                  p(),
                                  {
                                    href: e.link,
                                    onClick: () => {
                                      0 == t && F();
                                    },
                                    children: (0, a.jsx)(
                                      eD.v.Item,
                                      {
                                        as: 'div',
                                        children: (0, a.jsxs)('span', {
                                          className:
                                            'flex w-full items-center gap-2 rounded px-2 py-1 hover:bg-custom-sidebar-background-80',
                                          children: [
                                            (0, a.jsx)(e.icon, {
                                              className: 'h-4 w-4 stroke-[1.5]',
                                            }),
                                            e.name,
                                          ],
                                        }),
                                      },
                                      t
                                    ),
                                  },
                                  t
                                )
                              ),
                            ],
                          }),
                          (0, a.jsx)('div', {
                            className: 'pt-2 '.concat(h ? 'pb-2' : ''),
                            children: (0, a.jsxs)(eD.v.Item, {
                              as: 'button',
                              type: 'button',
                              className:
                                'flex w-full items-center gap-2 rounded px-2 py-1 hover:bg-custom-sidebar-background-80',
                              onClick: I,
                              children: [
                                (0, a.jsx)(eA.Z, {
                                  className: 'h-4 w-4 stroke-[1.5]',
                                }),
                                'Sign out',
                              ],
                            }),
                          }),
                          h &&
                            (0, a.jsx)('div', {
                              className: 'p-2 pb-0',
                              children: (0, a.jsx)(p(), {
                                href: '/god-mode',
                                children: (0, a.jsx)(eD.v.Item, {
                                  as: 'button',
                                  type: 'button',
                                  className: 'w-full',
                                  children: (0, a.jsx)('span', {
                                    className:
                                      'flex w-full items-center justify-center rounded bg-custom-primary-100/20 px-2 py-1 text-sm font-medium text-custom-primary-100 hover:bg-custom-primary-100/30 hover:text-custom-primary-200',
                                    children: 'Enter God Mode',
                                  }),
                                }),
                              }),
                            }),
                        ],
                      }),
                    }),
                  ],
                }),
            ],
          });
        });
      var eU = s(38579),
        eL = s.n(eU),
        eB = s(71561),
        eW = s(9204),
        eq = s(93164),
        eV = s(12248),
        eH = s(35854);
      let eQ = [
        { label: '1 day', value: new Date(new Date().getTime() + 864e5) },
        { label: '3 days', value: new Date(new Date().getTime() + 2592e5) },
        { label: '5 days', value: new Date(new Date().getTime() + 432e6) },
        { label: '1 week', value: new Date(new Date().getTime() + 6048e5) },
        { label: '2 weeks', value: new Date(new Date().getTime() + 12096e5) },
        { label: 'Custom', value: null },
      ];
      var eK = s(74273);
      let eY = e => {
        var t, s, r, i, o, d, x, h;
        let {
            selectedTab: f,
            notification: g,
            isSnoozedTabOpen: b,
            closePopover: j,
            markNotificationReadStatus: y,
            markNotificationReadStatusToggle: w,
            markNotificationArchivedStatus: N,
            setSelectedNotificationForSnooze: k,
            markSnoozeNotification: C,
          } = e,
          { captureEvent: S } = (0, m.DN)(),
          { isMobile: _ } = (0, u.L)(),
          { workspaceSlug: I } = (0, n.useRouter)().query,
          [F, z] = l.useState(!1),
          R = (0, l.useRef)(null),
          T = [
            {
              id: 1,
              name: g.read_at ? 'Mark as unread' : 'Mark as read',
              icon: (0, a.jsx)(eB.Z, {
                className: 'h-3.5 w-3.5 text-custom-text-300',
              }),
              onClick: () => {
                w(g.id).then(() => {
                  (0, c.fz)({
                    title: g.read_at
                      ? 'Notification marked as read'
                      : 'Notification marked as unread',
                    type: c.do.SUCCESS,
                  });
                });
              },
            },
            {
              id: 2,
              name: g.archived_at ? 'Unarchive' : 'Archive',
              icon: g.archived_at
                ? (0, a.jsx)(eW.Z, {
                    className: 'h-3.5 w-3.5 text-custom-text-300',
                  })
                : (0, a.jsx)(c.rK, {
                    className: 'h-3.5 w-3.5 text-custom-text-300',
                  }),
              onClick: () => {
                N(g.id).then(() => {
                  (0, c.fz)({
                    title: g.archived_at
                      ? 'Notification un-archived'
                      : 'Notification archived',
                    type: c.do.SUCCESS,
                  });
                });
              },
            },
          ],
          P = e => {
            if (!e) {
              k(g.id);
              return;
            }
            C(g.id, e).then(() => {
              (0, c.fz)({
                title: 'Notification snoozed till '.concat((0, eK.ot)(e)),
                type: c.do.SUCCESS,
              });
            });
          };
        (0, l.useEffect)(() => {
          let e = e => {
            var t;
            !R.current ||
              (null === (t = R.current) || void 0 === t
                ? void 0
                : t.contains(e.target)) ||
              z(!1);
          };
          return (
            document.addEventListener('mousedown', e, !0),
            document.addEventListener('touchend', e, !0),
            () => {
              document.removeEventListener('mousedown', e, !0),
                document.removeEventListener('touchend', e, !0);
            }
          );
        }, []);
        let A = g.data.issue_activity.field,
          D = g.triggered_by_details,
          M = (0, eK._3)(null == g ? void 0 : g.snoozed_till);
        return M && b && M < new Date()
          ? null
          : (0, a.jsxs)(p(), {
              onClick: () => {
                y(g.id),
                  S(v.hw, {
                    issue_id: g.data.issue.id,
                    element: 'notification',
                  }),
                  j();
              },
              href: '/'
                .concat(I, '/projects/')
                .concat(g.project, '/')
                .concat('archived_at' === A ? 'archives/' : '', 'issues/')
                .concat(g.data.issue.id),
              className:
                'group relative flex w-full cursor-pointer items-center gap-4 p-3 pl-6 '.concat(
                  null === g.read_at
                    ? 'bg-custom-primary-70/5'
                    : 'hover:bg-custom-background-200'
                ),
              children: [
                null === g.read_at &&
                  (0, a.jsx)('span', {
                    className:
                      'absolute left-2 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-custom-primary-100',
                  }),
                (0, a.jsx)('div', {
                  className: 'relative h-12 w-12 rounded-full',
                  children:
                    D.avatar && '' !== D.avatar
                      ? (0, a.jsx)('div', {
                          className: 'h-12 w-12 rounded-full',
                          children: (0, a.jsx)(eL(), {
                            src: D.avatar,
                            alt: 'Profile Image',
                            layout: 'fill',
                            objectFit: 'cover',
                            className: 'rounded-full',
                          }),
                        })
                      : (0, a.jsx)('div', {
                          className:
                            'flex h-12 w-12 items-center justify-center rounded-full bg-custom-background-80',
                          children: (0, a.jsx)('span', {
                            className:
                              'text-lg font-medium text-custom-text-100',
                            children: D.is_bot
                              ? null === (s = D.first_name) || void 0 === s
                                ? void 0
                                : null === (t = s[0]) || void 0 === t
                                  ? void 0
                                  : t.toUpperCase()
                              : (
                                    null === (r = D.display_name) ||
                                    void 0 === r
                                      ? void 0
                                      : r[0]
                                  )
                                ? null === (o = D.display_name) || void 0 === o
                                  ? void 0
                                  : null === (i = o[0]) || void 0 === i
                                    ? void 0
                                    : i.toUpperCase()
                                : (0, a.jsx)(eq.Z, { className: 'h-4 w-4' }),
                          }),
                        }),
                }),
                (0, a.jsxs)('div', {
                  className: 'w-full space-y-2.5 overflow-hidden',
                  children: [
                    (0, a.jsxs)('div', {
                      className: 'flex items-start',
                      children: [
                        g.message
                          ? (0, a.jsx)('div', {
                              className: 'w-full break-words text-sm',
                              children: (0, a.jsx)('span', {
                                className: 'semi-bold',
                                children: g.message,
                              }),
                            })
                          : (0, a.jsxs)('div', {
                              className: 'w-full break-words text-sm',
                              children: [
                                (0, a.jsxs)('span', {
                                  className: 'font-semibold',
                                  children: [
                                    D.is_bot ? D.first_name : D.display_name,
                                    ' ',
                                  ],
                                }),
                                !['comment', 'archived_at'].includes(A) &&
                                  g.data.issue_activity.verb,
                                ' ',
                                'comment' === A
                                  ? 'commented'
                                  : 'archived_at' === A
                                    ? 'restore' ===
                                      g.data.issue_activity.new_value
                                      ? 'restored the issue'
                                      : 'archived the issue'
                                    : 'None' === A
                                      ? null
                                      : (0, E.y2)(A),
                                ' ',
                                ['comment', 'archived_at', 'None'].includes(A)
                                  ? ''
                                  : 'to',
                                (0, a.jsxs)('span', {
                                  className: 'font-semibold',
                                  children: [
                                    ' ',
                                    'None' !== A
                                      ? 'comment' !== A
                                        ? 'target_date' === A
                                          ? (0, eK.ot)(
                                              g.data.issue_activity.new_value
                                            )
                                          : 'attachment' === A
                                            ? 'the issue'
                                            : 'description' === A
                                              ? (0, E.Kr)(
                                                  g.data.issue_activity
                                                    .new_value,
                                                  55
                                                )
                                              : 'archived_at' === A
                                                ? null
                                                : g.data.issue_activity
                                                    .new_value
                                        : (0, a.jsxs)('span', {
                                            children: [
                                              '"',
                                              g.data.issue_activity.new_value
                                                .length > 55
                                                ? (null == g
                                                    ? void 0
                                                    : null === (h = g.data) ||
                                                        void 0 === h
                                                      ? void 0
                                                      : null ===
                                                            (x =
                                                              h.issue_activity) ||
                                                          void 0 === x
                                                        ? void 0
                                                        : null ===
                                                              (d =
                                                                x.issue_comment) ||
                                                            void 0 === d
                                                          ? void 0
                                                          : d.slice(0, 50)) +
                                                  '...'
                                                : g.data.issue_activity
                                                    .issue_comment,
                                              '"',
                                            ],
                                          })
                                      : 'the issue and assigned it to you.',
                                  ],
                                }),
                              ],
                            }),
                        (0, a.jsxs)('div', {
                          className: 'flex items-start md:hidden',
                          children: [
                            (0, a.jsx)(eD.v, {
                              as: 'div',
                              className: ' w-min text-left',
                              children: e => {
                                let { open: t } = e;
                                return (0, a.jsxs)(a.Fragment, {
                                  children: [
                                    (0, a.jsx)(eD.v.Button, {
                                      as: l.Fragment,
                                      children: (0, a.jsx)('button', {
                                        onClick: e => e.stopPropagation(),
                                        className:
                                          'flex w-full items-center gap-x-2 rounded p-0.5 text-sm',
                                        children: (0, a.jsx)(eV.Z, {
                                          className:
                                            'h-3.5 w-3.5 text-custom-text-300',
                                        }),
                                      }),
                                    }),
                                    t &&
                                      (0, a.jsx)(eD.v.Items, {
                                        className: 'absolute right-0 z-10',
                                        static: !0,
                                        children: (0, a.jsxs)('div', {
                                          className:
                                            'my-1 min-w-[12rem] overflow-y-scroll whitespace-nowrap rounded-md border-[0.5px] border-custom-border-300 bg-custom-background-100 px-2 py-2.5 text-xs shadow-custom-shadow-rg focus:outline-none',
                                          children: [
                                            T.map(e =>
                                              (0, a.jsx)(
                                                eD.v.Item,
                                                {
                                                  as: 'div',
                                                  children: t => {
                                                    let { close: s } = t;
                                                    return (0, a.jsxs)(
                                                      'button',
                                                      {
                                                        onClick: t => {
                                                          t.stopPropagation(),
                                                            t.preventDefault(),
                                                            e.onClick(),
                                                            s();
                                                        },
                                                        className:
                                                          'flex items-center gap-x-2 p-1.5',
                                                        children: [
                                                          e.icon,
                                                          e.name,
                                                        ],
                                                      }
                                                    );
                                                  },
                                                },
                                                e.id
                                              )
                                            ),
                                            (0, a.jsx)(eD.v.Item, {
                                              as: 'div',
                                              children: (0, a.jsxs)('div', {
                                                onClick: e => {
                                                  e.stopPropagation(),
                                                    e.preventDefault(),
                                                    z(!0);
                                                },
                                                className:
                                                  'flex items-center gap-x-2 p-1.5',
                                                children: [
                                                  (0, a.jsx)(eH.Z, {
                                                    className:
                                                      'h-3.5 w-3.5 text-custom-text-300',
                                                  }),
                                                  'Snooze',
                                                ],
                                              }),
                                            }),
                                          ],
                                        }),
                                      }),
                                  ],
                                });
                              },
                            }),
                            F &&
                              (0, a.jsx)('div', {
                                ref: R,
                                className:
                                  'absolute right-36 top-24 z-20 my-1 min-w-[12rem] overflow-y-scroll whitespace-nowrap rounded-md border-[0.5px] border-custom-border-300 bg-custom-background-100 px-2 py-2.5 text-xs shadow-custom-shadow-rg focus:outline-none',
                                children: eQ.map(e =>
                                  (0, a.jsx)(
                                    'p',
                                    {
                                      className: 'p-1.5',
                                      onClick: t => {
                                        t.stopPropagation(),
                                          t.preventDefault(),
                                          z(!1),
                                          P(e.value);
                                      },
                                      children: e.label,
                                    },
                                    e.label
                                  )
                                ),
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)('div', {
                      className: 'flex justify-between gap-2 text-xs',
                      children: [
                        (0, a.jsx)('p', {
                          className: 'line-clamp-1 text-custom-text-300',
                          children: (0, E.aF)(
                            ''
                              .concat(g.data.issue.identifier, '-')
                              .concat(g.data.issue.sequence_id, ' ')
                              .concat(g.data.issue.name),
                            50
                          ),
                        }),
                        g.snoozed_till
                          ? (0, a.jsxs)('p', {
                              className:
                                'flex flex-shrink-0 items-center justify-end gap-x-1 text-custom-text-300',
                              children: [
                                (0, a.jsx)(eH.Z, { className: 'h-4 w-4' }),
                                (0, a.jsxs)('span', {
                                  children: [
                                    'Till ',
                                    (0, eK.ot)(g.snoozed_till),
                                    ',',
                                    ' ',
                                    (0, eK.bX)(g.snoozed_till, '12-hour'),
                                  ],
                                }),
                              ],
                            })
                          : (0, a.jsx)('p', {
                              className:
                                'mt-auto flex-shrink-0 text-custom-text-300',
                              children: (0, eK.KI)(g.created_at),
                            }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)('div', {
                  className:
                    'absolute right-3 top-3 hidden gap-x-3 py-1 group-hover:flex',
                  children: [
                    [
                      {
                        id: 1,
                        name: g.read_at ? 'Mark as unread' : 'Mark as read',
                        icon: (0, a.jsx)(eB.Z, {
                          className: 'h-3.5 w-3.5 text-custom-text-300',
                        }),
                        onClick: () => {
                          w(g.id).then(() => {
                            S(v.eS, {
                              issue_id: g.data.issue.id,
                              tab: f,
                              state: 'SUCCESS',
                            }),
                              (0, c.fz)({
                                title: g.read_at
                                  ? 'Notification marked as read'
                                  : 'Notification marked as unread',
                                type: c.do.SUCCESS,
                              });
                          });
                        },
                      },
                      {
                        id: 2,
                        name: g.archived_at ? 'Unarchive' : 'Archive',
                        icon: g.archived_at
                          ? (0, a.jsx)(eW.Z, {
                              className: 'h-3.5 w-3.5 text-custom-text-300',
                            })
                          : (0, a.jsx)(c.rK, {
                              className: 'h-3.5 w-3.5 text-custom-text-300',
                            }),
                        onClick: () => {
                          N(g.id).then(() => {
                            S(v.CU, {
                              issue_id: g.data.issue.id,
                              tab: f,
                              state: 'SUCCESS',
                            }),
                              (0, c.fz)({
                                title: g.archived_at
                                  ? 'Notification un-archived'
                                  : 'Notification archived',
                                type: c.do.SUCCESS,
                              });
                          });
                        },
                      },
                    ].map(e =>
                      (0, a.jsx)(
                        c.u,
                        {
                          tooltipContent: e.name,
                          isMobile: _,
                          children: (0, a.jsx)(
                            'button',
                            {
                              type: 'button',
                              onClick: t => {
                                t.stopPropagation(),
                                  t.preventDefault(),
                                  e.onClick();
                              },
                              className:
                                'flex w-full items-center gap-x-2 rounded bg-custom-background-80 p-0.5 text-sm outline-none hover:bg-custom-background-100',
                              children: e.icon,
                            },
                            e.id
                          ),
                        },
                        e.id
                      )
                    ),
                    (0, a.jsx)(c.fR, {
                      className: 'flex items-center',
                      customButton: (0, a.jsx)(c.u, {
                        tooltipContent: 'Snooze',
                        isMobile: _,
                        children: (0, a.jsx)('div', {
                          className:
                            'flex w-full items-center gap-x-2 rounded bg-custom-background-80 p-0.5 text-sm hover:bg-custom-background-100',
                          children: (0, a.jsx)(eH.Z, {
                            className: 'h-3.5 w-3.5 text-custom-text-300',
                          }),
                        }),
                      }),
                      optionsClassName: '!z-20',
                      children: eQ.map(e =>
                        (0, a.jsx)(
                          c.fR.MenuItem,
                          {
                            onClick: t => {
                              if (
                                (t.stopPropagation(),
                                t.preventDefault(),
                                !e.value)
                              ) {
                                k(g.id);
                                return;
                              }
                              C(g.id, e.value).then(() => {
                                S(v.eJ, {
                                  issue_id: g.data.issue.id,
                                  tab: f,
                                  state: 'SUCCESS',
                                }),
                                  (0, c.fz)({
                                    title: 'Notification snoozed till '.concat(
                                      (0, eK.ot)(e.value)
                                    ),
                                    type: c.do.SUCCESS,
                                  });
                              });
                            },
                            children: e.label,
                          },
                          e.label
                        )
                      ),
                    }),
                  ],
                }),
              ],
            });
      };
      var e$ = s(44893),
        eG = s(30640),
        eX = s(74371),
        eJ = s(70540),
        e0 = s(13411),
        e1 = s(82750);
      let e2 = new (s(95536).g)();
      var e5 = () => {
        var e, t;
        let { workspaceSlug: s } = (0, n.useRouter)().query,
          [a, r] = (0, l.useState)(!1),
          [i, o] = (0, l.useState)(!1),
          [d, m] = (0, l.useState)(!1),
          [u, x] = (0, l.useState)(!1),
          [h, p] = (0, l.useState)(null),
          [f, v] = (0, l.useState)('assigned'),
          g = (0, l.useMemo)(
            () => ({
              type: a || i || d ? void 0 : f,
              snoozed: a,
              archived: i,
              read: !d && null,
              per_page: 30,
            }),
            [i, d, f, a]
          ),
          {
            data: j,
            size: y,
            setSize: w,
            isLoading: N,
            isValidating: k,
            mutate: C,
          } = (0, e0.ZP)(
            u && s ? (e, t) => (0, e1.Be)(e, t, s.toString(), g) : () => null,
            async e => await e2.getNotifications(e)
          ),
          S = N || (y > 0 && j && void 0 === j[y - 1]),
          _ =
            (null == j
              ? void 0
              : null === (t = j[0]) || void 0 === t
                ? void 0
                : null === (e = t.results) || void 0 === e
                  ? void 0
                  : e.length) === 0,
          E = j ? j.map(e => e.results).flat() : void 0,
          I = _ || (j && j[j.length - 1].next_page_results),
          F = k && j && j.length === y,
          { data: z, mutate: R } = (0, b.ZP)(
            s ? (0, e1.WC)(s.toString()) : null,
            () => (s ? e2.getUnreadNotificationsCount(s.toString()) : null)
          ),
          T = e => {
            let t = 'read' === e ? -1 : 1;
            R(e => {
              if (!e) return e;
              let s =
                'assigned' === f
                  ? 'my_issues'
                  : 'created' === f
                    ? 'created_issues'
                    : 'watching_issues';
              return { ...e, [s]: e[s] + t };
            }, !1);
          },
          P = (e, t) => {
            C(s => {
              if (!s) return s;
              let a = Math.floor(
                  s
                    .map(e => e.results)
                    .flat()
                    .findIndex(t => t.id === e) / 30
                ),
                l = s[a].results.findIndex(t => t.id === e);
              if (
                -1 === l ||
                ((l = -1 === l ? 0 : l % 30), -1 === a || -1 === l)
              )
                return s;
              let r = Object.keys(t)[0];
              return (s[a].results[l][r] = t[r]), s;
            }, !1);
          },
          A = e => {
            C(t => {
              if (!t) return t;
              let s = Math.floor(
                  t
                    .map(e => e.results)
                    .flat()
                    .findIndex(t => t.id === e) / 30
                ),
                a = t[s].results.findIndex(t => t.id === e);
              return (
                -1 === a ||
                  ((a = -1 === a ? 0 : a % 30),
                  -1 === s || -1 === a || t[s].results.splice(a, 1)),
                t
              );
            }, !1);
          },
          D = async e => {
            var t;
            if (!s) return;
            let a =
              (null == E
                ? void 0
                : null === (t = E.find(t => t.id === e)) || void 0 === t
                  ? void 0
                  : t.read_at) !== null;
            T(a ? 'unread' : 'read'),
              P(e, { read_at: a ? null : new Date() }),
              d && A(e),
              a
                ? await e2
                    .markUserNotificationAsUnread(s.toString(), e)
                    .catch(() => {
                      throw Error('Something went wrong');
                    })
                    .finally(() => {
                      R();
                    })
                : await e2
                    .markUserNotificationAsRead(s.toString(), e)
                    .catch(() => {
                      throw Error('Something went wrong');
                    })
                    .finally(() => {
                      R();
                    });
          },
          M = async e => {
            var t;
            s &&
              ((null == E
                ? void 0
                : null === (t = E.find(t => t.id === e)) || void 0 === t
                  ? void 0
                  : t.read_at) !== null ||
                (P(e, { read_at: new Date() }),
                T('read'),
                await e2
                  .markUserNotificationAsRead(s.toString(), e)
                  .catch(() => {
                    throw Error('Something went wrong');
                  }),
                R()));
          },
          Z = async e => {
            var t;
            if (!s) return;
            let a =
              (null == E
                ? void 0
                : null === (t = E.find(t => t.id === e)) || void 0 === t
                  ? void 0
                  : t.archived_at) !== null;
            a ? i && A(e) : (T('read'), A(e)),
              a
                ? await e2
                    .markUserNotificationAsUnarchived(s.toString(), e)
                    .catch(() => {
                      throw Error('Something went wrong');
                    })
                    .finally(() => {
                      C(), R();
                    })
                : await e2
                    .markUserNotificationAsArchived(s.toString(), e)
                    .catch(() => {
                      throw Error('Something went wrong');
                    })
                    .finally(() => {
                      C(), R();
                    });
          },
          O = async (e, t) => {
            var a;
            if (!s) return;
            let l =
              (null == E
                ? void 0
                : null === (a = E.find(t => t.id === e)) || void 0 === a
                  ? void 0
                  : a.snoozed_till) !== null;
            P(e, { snoozed_till: l ? null : t }),
              l
                ? await e2
                    .patchUserNotification(s.toString(), e, {
                      snoozed_till: null,
                    })
                    .finally(() => {
                      C();
                    })
                : await e2
                    .patchUserNotification(s.toString(), e, { snoozed_till: t })
                    .catch(() => {
                      Error('Something went wrong');
                    })
                    .finally(() => {
                      C();
                    });
          },
          U = async () => {
            s &&
              (await e2
                .markAllNotificationsAsRead(
                  s.toString(),
                  a
                    ? { archived: !1, snoozed: !0 }
                    : i
                      ? { archived: !0, snoozed: !1 }
                      : { archived: !1, snoozed: !1, type: f }
                )
                .then(() => {
                  (0, c.fz)({
                    type: c.do.SUCCESS,
                    title: 'Success!',
                    message: 'All Notifications marked as read.',
                  });
                })
                .catch(() => {
                  (0, c.fz)({
                    type: c.do.ERROR,
                    title: 'Error!',
                    message: 'Something went wrong. Please try again.',
                  });
                })
                .finally(() => {
                  C(), R();
                }));
          };
        return {
          notifications: E,
          notificationMutate: C,
          markNotificationReadStatus: D,
          markNotificationArchivedStatus: Z,
          markSnoozeNotification: O,
          snoozed: a,
          setSnoozed: r,
          archived: i,
          setArchived: o,
          readNotification: d,
          setReadNotification: m,
          selectedNotificationForSnooze: h,
          setSelectedNotificationForSnooze: p,
          selectedTab: f,
          setSelectedTab: v,
          totalNotificationCount: z
            ? z.created_issues + z.watching_issues + z.my_issues
            : null,
          notificationCount: z,
          mutateNotificationCount: R,
          setSize: w,
          isLoading: N,
          isLoadingMore: S,
          hasMore: I,
          isRefreshing: F,
          setFetchNotifications: x,
          markNotificationAsRead: M,
          markAllNotificationsAsRead: U,
        };
      };
      let e3 = (0, r.Pi)(() => {
        let [e, t] = l.useState(!1),
          { theme: s } = (0, m.IX)(),
          r = l.useRef(null),
          { isMobile: n } = (0, u.L)(),
          {
            notifications: i,
            archived: o,
            readNotification: d,
            selectedNotificationForSnooze: x,
            selectedTab: h,
            setArchived: p,
            setReadNotification: f,
            setSelectedNotificationForSnooze: v,
            setSelectedTab: g,
            setSnoozed: b,
            snoozed: y,
            notificationMutate: w,
            markNotificationArchivedStatus: N,
            markNotificationReadStatus: k,
            markNotificationAsRead: C,
            markSnoozeNotification: _,
            notificationCount: I,
            totalNotificationCount: F,
            setSize: z,
            isLoadingMore: R,
            hasMore: T,
            isRefreshing: P,
            setFetchNotifications: A,
            markAllNotificationsAsRead: D,
          } = e5(),
          M = s.sidebarCollapsed;
        (0, ej.Z)(r, () => {
          null === x && t(!1);
        });
        let Z = y
          ? eJ.C.NOTIFICATION_SNOOZED_EMPTY_STATE
          : o
            ? eJ.C.NOTIFICATION_ARCHIVED_EMPTY_STATE
            : 'created' === h
              ? eJ.C.NOTIFICATION_CREATED_EMPTY_STATE
              : 'watching' === h
                ? eJ.C.NOTIFICATION_SUBSCRIBED_EMPTY_STATE
                : eJ.C.NOTIFICATION_MY_ISSUE_EMPTY_STATE;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(e6, {
              isOpen: null !== x,
              onClose: () => v(null),
              onSubmit: _,
              notification:
                (null == i ? void 0 : i.find(e => e.id === x)) || null,
              onSuccess: () => v(null),
            }),
            (0, a.jsx)(eG.J, {
              ref: r,
              className: 'md:relative w-full',
              children: (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)(c.u, {
                    tooltipContent: 'Notifications',
                    position: 'right',
                    className: 'ml-2',
                    disabled: !M,
                    isMobile: n,
                    children: (0, a.jsxs)('button', {
                      className:
                        'group relative flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium outline-none '
                          .concat(
                            e
                              ? 'bg-custom-primary-100/10 text-custom-primary-100'
                              : 'text-custom-sidebar-text-200 hover:bg-custom-sidebar-background-80',
                            ' '
                          )
                          .concat(M ? 'justify-center' : ''),
                      onClick: () => {
                        window.innerWidth < 768 && s.toggleSidebar(),
                          e || A(!0),
                          t(!e);
                      },
                      children: [
                        (0, a.jsx)(e$.Z, { className: 'h-4 w-4' }),
                        M
                          ? null
                          : (0, a.jsx)('span', { children: 'Notifications' }),
                        F && F > 0
                          ? M
                            ? (0, a.jsx)('span', {
                                className:
                                  'absolute right-3.5 top-2 h-2 w-2 rounded-full bg-custom-primary-300',
                              })
                            : (0, a.jsx)('span', {
                                className:
                                  'ml-auto rounded-full bg-custom-primary-300 px-1.5 text-xs text-white',
                                children: (0, E.gw)(F),
                              })
                          : null,
                      ],
                    }),
                  }),
                  (0, a.jsx)(S.u, {
                    show: e,
                    as: l.Fragment,
                    enter: 'transition ease-out duration-200',
                    enterFrom: 'opacity-0 translate-y-1',
                    enterTo: 'opacity-100 translate-y-0',
                    leave: 'transition ease-in duration-150',
                    leaveFrom: 'opacity-100 translate-y-0',
                    leaveTo: 'opacity-0 translate-y-1',
                    children: (0, a.jsxs)(eG.J.Panel, {
                      className:
                        'absolute top-0 left-[280px] md:-top-36 md:ml-8 md:h-[50vh] z-10 flex h-full w-[100vw] flex-col rounded-xl md:border border-custom-border-300 bg-custom-background-100 shadow-lg md:left-full md:w-[36rem]',
                      static: !0,
                      children: [
                        (0, a.jsx)(tl, {
                          notificationCount: I,
                          notificationMutate: w,
                          closePopover: () => t(!1),
                          isRefreshing: P,
                          snoozed: y,
                          archived: o,
                          readNotification: d,
                          selectedTab: h,
                          setSnoozed: b,
                          setArchived: p,
                          setReadNotification: f,
                          setSelectedTab: g,
                          markAllNotificationsAsRead: D,
                        }),
                        i
                          ? i.length > 0
                            ? (0, a.jsxs)('div', {
                                className:
                                  'h-full overflow-y-auto vertical-scrollbar scrollbar-md',
                                children: [
                                  (0, a.jsx)('div', {
                                    className:
                                      'divide-y divide-custom-border-100',
                                    children: i.map(e =>
                                      (0, a.jsx)(
                                        eY,
                                        {
                                          selectedTab: h,
                                          isSnoozedTabOpen: y,
                                          closePopover: () => t(!1),
                                          notification: e,
                                          markNotificationArchivedStatus: N,
                                          markNotificationReadStatus: C,
                                          markNotificationReadStatusToggle: k,
                                          setSelectedNotificationForSnooze: v,
                                          markSnoozeNotification: _,
                                        },
                                        e.id
                                      )
                                    ),
                                  }),
                                  R &&
                                    (0, a.jsxs)('div', {
                                      className:
                                        'my-6 flex items-center justify-center text-sm',
                                      children: [
                                        (0, a.jsxs)('div', {
                                          role: 'status',
                                          children: [
                                            (0, a.jsxs)('svg', {
                                              'aria-hidden': 'true',
                                              className:
                                                'mr-2 h-6 w-6 animate-spin fill-blue-600 text-custom-text-200',
                                              viewBox: '0 0 100 101',
                                              fill: 'none',
                                              xmlns:
                                                'http://www.w3.org/2000/svg',
                                              children: [
                                                (0, a.jsx)('path', {
                                                  d: 'M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z',
                                                  fill: 'currentColor',
                                                }),
                                                (0, a.jsx)('path', {
                                                  d: 'M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z',
                                                  fill: 'currentFill',
                                                }),
                                              ],
                                            }),
                                            (0, a.jsx)('span', {
                                              className: 'sr-only',
                                              children: 'Loading...',
                                            }),
                                          ],
                                        }),
                                        (0, a.jsx)('p', {
                                          children: 'Loading notifications',
                                        }),
                                      ],
                                    }),
                                  T &&
                                    !R &&
                                    (0, a.jsx)('button', {
                                      type: 'button',
                                      className:
                                        'my-6 flex w-full items-center justify-center text-sm font-medium text-custom-primary-100',
                                      disabled: R,
                                      onClick: () => {
                                        z(e => e + 1);
                                      },
                                      children: 'Load More',
                                    }),
                                ],
                              })
                            : (0, a.jsx)('div', {
                                className:
                                  'grid h-full w-full scale-75 place-items-center overflow-hidden',
                                children: (0, a.jsx)(eX.ub, {
                                  type: Z,
                                  layout: 'screen-simple',
                                }),
                              })
                          : (0, a.jsx)(j.pd, {}),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      });
      var e4 = s(36738);
      let e9 = { time: null, date: null, period: 'AM' },
        e8 = [
          { label: '12:00', value: '12:00' },
          { label: '12:30', value: '12:30' },
          { label: '01:00', value: '01:00' },
          { label: '01:30', value: '01:30' },
          { label: '02:00', value: '02:00' },
          { label: '02:30', value: '02:30' },
          { label: '03:00', value: '03:00' },
          { label: '03:30', value: '03:30' },
          { label: '04:00', value: '04:00' },
          { label: '04:30', value: '04:30' },
          { label: '05:00', value: '05:00' },
          { label: '05:30', value: '05:30' },
          { label: '06:00', value: '06:00' },
          { label: '06:30', value: '06:30' },
          { label: '07:00', value: '07:00' },
          { label: '07:30', value: '07:30' },
          { label: '08:00', value: '08:00' },
          { label: '08:30', value: '08:30' },
          { label: '09:00', value: '09:00' },
          { label: '09:30', value: '09:30' },
          { label: '10:00', value: '10:00' },
          { label: '10:30', value: '10:30' },
          { label: '11:00', value: '11:00' },
          { label: '11:30', value: '11:30' },
        ],
        e6 = e => {
          let {
              isOpen: t,
              onClose: s,
              notification: r,
              onSuccess: i,
              onSubmit: o,
            } = e,
            { workspaceSlug: d } = (0, n.useRouter)().query,
            {
              formState: { isSubmitting: m },
              reset: u,
              handleSubmit: x,
              control: h,
              watch: p,
              setValue: f,
            } = (0, w.cI)({ defaultValues: e9 }),
            v = () => {
              var e;
              let t = new Date(),
                s = p('date');
              if (
                !s ||
                t.toDateString() !==
                  (null === (e = (0, eK._3)(s)) || void 0 === e
                    ? void 0
                    : e.toDateString())
              )
                return e8;
              let a = t.getHours(),
                l = t.getMinutes();
              return e8.filter(e => {
                let t = parseInt(e.value.split(':')[0]),
                  s = parseInt(e.value.split(':')[1]);
                return (
                  'PM' === p('period') && 12 !== t && (t += 12),
                  !(t < a) && (t !== a || !(s < l))
                );
              });
            },
            g = async e => {
              if (!d || !r || !e.date || !e.time) return;
              let t = e.period,
                s = e.time.split(':'),
                a = parseInt(
                  ''.concat(
                    'AM' === t
                      ? s[0]
                      : parseInt(s[0]) + 12 === 24
                        ? '00'
                        : parseInt(s[0]) + 12
                  )
                ),
                l = parseInt(s[1]),
                n = (0, eK._3)(null == e ? void 0 : e.date);
              null == n || n.setHours(a),
                null == n || n.setMinutes(l),
                await o(r.id, n).then(() => {
                  b(),
                    i(),
                    (0, c.fz)({
                      title: 'Success!',
                      message: 'Notification snoozed successfully',
                      type: c.do.SUCCESS,
                    });
                });
            },
            b = () => {
              let e = setTimeout(() => {
                  s(), clearTimeout(e);
                }, 50),
                t = setTimeout(() => {
                  u({ ...e9 }), clearTimeout(t);
                }, 500);
            };
          return (0, a.jsx)(S.u.Root, {
            show: t,
            as: l.Fragment,
            children: (0, a.jsxs)(es.V, {
              as: 'div',
              className: 'relative z-20',
              onClose: b,
              children: [
                (0, a.jsx)(S.u.Child, {
                  as: l.Fragment,
                  enter: 'ease-out duration-300',
                  enterFrom: 'opacity-0',
                  enterTo: 'opacity-100',
                  leave: 'ease-in duration-200',
                  leaveFrom: 'opacity-100',
                  leaveTo: 'opacity-0',
                  children: (0, a.jsx)('div', {
                    className:
                      'fixed inset-0 bg-custom-backdrop transition-opacity',
                  }),
                }),
                (0, a.jsx)('div', {
                  className: 'fixed inset-0 z-20 overflow-y-auto',
                  children: (0, a.jsx)('div', {
                    className:
                      'flex min-h-full items-center justify-center p-4 text-center',
                    children: (0, a.jsx)(S.u.Child, {
                      as: l.Fragment,
                      enter: 'ease-out duration-300',
                      enterFrom:
                        'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
                      enterTo: 'opacity-100 translate-y-0 sm:scale-100',
                      leave: 'ease-in duration-200',
                      leaveFrom: 'opacity-100 translate-y-0 sm:scale-100',
                      leaveTo:
                        'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
                      children: (0, a.jsx)(es.V.Panel, {
                        className:
                          'relative w-full transform rounded-lg bg-custom-background-100 p-5 text-left shadow-custom-shadow-md transition-all sm:w-full sm:!max-w-2xl',
                        children: (0, a.jsxs)('form', {
                          onSubmit: x(g),
                          children: [
                            (0, a.jsxs)('div', {
                              className: 'flex items-center justify-between',
                              children: [
                                (0, a.jsx)(es.V.Title, {
                                  as: 'h3',
                                  className:
                                    'text-lg font-medium leading-6 text-custom-text-100',
                                  children: 'Customize Snooze Time',
                                }),
                                (0, a.jsx)('div', {
                                  children: (0, a.jsx)('button', {
                                    type: 'button',
                                    onClick: b,
                                    children: (0, a.jsx)(ek.Z, {
                                      className: 'h-5 w-5 text-custom-text-100',
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            (0, a.jsxs)('div', {
                              className:
                                'mt-5 flex flex-col gap-3 md:!flex-row md:items-center',
                              children: [
                                (0, a.jsxs)('div', {
                                  className: 'flex-1 pb-3 md:pb-0',
                                  children: [
                                    (0, a.jsx)('h6', {
                                      className:
                                        'mb-2 block text-sm font-medium text-custom-text-400',
                                      children: 'Pick a date',
                                    }),
                                    (0, a.jsx)(w.Qr, {
                                      name: 'date',
                                      control: h,
                                      rules: {
                                        required: 'Please select a date',
                                      },
                                      render: e => {
                                        let {
                                          field: { value: t, onChange: s },
                                        } = e;
                                        return (0, a.jsx)(e4.qp, {
                                          value: t,
                                          placeholder: 'Select date',
                                          onChange: e => {
                                            f('time', null), s(e);
                                          },
                                          minDate: new Date(),
                                          buttonVariant: 'border-with-text',
                                          buttonContainerClassName:
                                            'w-full text-left',
                                          buttonClassName:
                                            'border-custom-border-300 px-3 py-2.5',
                                          hideIcon: !0,
                                        });
                                      },
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)('div', {
                                  className: 'flex-1',
                                  children: [
                                    (0, a.jsx)('h6', {
                                      className:
                                        'mb-2 block text-sm font-medium text-custom-text-400',
                                      children: 'Pick a time',
                                    }),
                                    (0, a.jsx)(w.Qr, {
                                      control: h,
                                      name: 'time',
                                      rules: {
                                        required: 'Please select a time',
                                      },
                                      render: e => {
                                        let {
                                          field: { value: t, onChange: s },
                                        } = e;
                                        return (0, a.jsxs)(c.AP, {
                                          value: t,
                                          onChange: s,
                                          label: (0, a.jsx)('div', {
                                            className: 'truncate',
                                            children: t
                                              ? (0, a.jsxs)('span', {
                                                  children: [
                                                    t,
                                                    ' ',
                                                    p('period').toLowerCase(),
                                                  ],
                                                })
                                              : (0, a.jsx)('span', {
                                                  className:
                                                    'text-sm text-custom-text-400',
                                                  children: 'Select a time',
                                                }),
                                          }),
                                          optionsClassName: 'w-full',
                                          input: !0,
                                          children: [
                                            (0, a.jsxs)('div', {
                                              className:
                                                'mb-2 flex h-9 w-full overflow-hidden rounded',
                                              children: [
                                                (0, a.jsx)('div', {
                                                  onClick: () => {
                                                    f('period', 'AM');
                                                  },
                                                  className:
                                                    'flex h-full w-1/2 cursor-pointer items-center justify-center text-center '.concat(
                                                      'AM' === p('period')
                                                        ? 'bg-custom-primary-100/90 text-custom-primary-0'
                                                        : 'bg-custom-background-80'
                                                    ),
                                                  children: 'AM',
                                                }),
                                                (0, a.jsx)('div', {
                                                  onClick: () => {
                                                    f('period', 'PM');
                                                  },
                                                  className:
                                                    'flex h-full w-1/2 cursor-pointer items-center justify-center text-center '.concat(
                                                      'PM' === p('period')
                                                        ? 'bg-custom-primary-100/90 text-custom-primary-0'
                                                        : 'bg-custom-background-80'
                                                    ),
                                                  children: 'PM',
                                                }),
                                              ],
                                            }),
                                            v().length > 0
                                              ? v().map((e, t) =>
                                                  (0, a.jsx)(
                                                    c.AP.Option,
                                                    {
                                                      value: e.value,
                                                      children: (0, a.jsx)(
                                                        'div',
                                                        {
                                                          className:
                                                            'flex items-center',
                                                          children: (0, a.jsx)(
                                                            'span',
                                                            {
                                                              className:
                                                                'ml-3 block truncate',
                                                              children: e.label,
                                                            }
                                                          ),
                                                        }
                                                      ),
                                                    },
                                                    ''.concat(e, '-').concat(t)
                                                  )
                                                )
                                              : (0, a.jsx)('p', {
                                                  className:
                                                    'p-3 text-center text-custom-text-200',
                                                  children:
                                                    'No available time for this date.',
                                                }),
                                          ],
                                        });
                                      },
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, a.jsx)('div', {
                              className:
                                'mt-5 flex items-center justify-between gap-2',
                              children: (0, a.jsxs)('div', {
                                className:
                                  'flex w-full items-center justify-end gap-2',
                                children: [
                                  (0, a.jsx)(c.zx, {
                                    variant: 'neutral-primary',
                                    size: 'sm',
                                    onClick: b,
                                    children: 'Cancel',
                                  }),
                                  (0, a.jsx)(c.zx, {
                                    variant: 'primary',
                                    size: 'sm',
                                    type: 'submit',
                                    loading: m,
                                    children: m ? 'Submitting...' : 'Submit',
                                  }),
                                ],
                              }),
                            }),
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
      var e7 = s(19823),
        te = s(64273);
      /**
       * @license lucide-react v0.378.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let tt = (0, eI.Z)('CheckCheck', [
        ['path', { d: 'M18 6 7 17l-5-5', key: '116fxf' }],
        ['path', { d: 'm22 10-7.5 7.5L13 16', key: 'ke71qq' }],
      ]);
      var ts = s(84976),
        ta = s(21109);
      let tl = e => {
        let {
            notificationCount: t,
            notificationMutate: s,
            closePopover: l,
            isRefreshing: r,
            snoozed: n,
            archived: i,
            readNotification: o,
            selectedTab: d,
            setSnoozed: x,
            setArchived: h,
            setReadNotification: p,
            setSelectedTab: f,
            markAllNotificationsAsRead: g,
          } = e,
          { captureEvent: b } = (0, m.DN)(),
          { isMobile: j } = (0, u.L)(),
          y = [
            {
              label: 'My Issues',
              value: 'assigned',
              unreadCount: null == t ? void 0 : t.my_issues,
            },
            {
              label: 'Created by me',
              value: 'created',
              unreadCount: null == t ? void 0 : t.created_issues,
            },
            {
              label: 'Subscribed',
              value: 'watching',
              unreadCount: null == t ? void 0 : t.watching_issues,
            },
          ];
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)('div', {
              className: 'flex items-center justify-between px-5 pt-5',
              children: [
                (0, a.jsxs)('div', {
                  className: 'flex items-center gap-x-2 ',
                  children: [
                    (0, a.jsx)(ta.P, {}),
                    (0, a.jsx)('h2', {
                      className: 'md:text-xl md:font-semibold',
                      children: 'Notifications',
                    }),
                  ],
                }),
                (0, a.jsxs)('div', {
                  className:
                    'flex items-center justify-center gap-x-4 text-custom-text-200',
                  children: [
                    (0, a.jsx)(c.u, {
                      tooltipContent: 'Refresh',
                      isMobile: j,
                      children: (0, a.jsx)('button', {
                        type: 'button',
                        onClick: () => {
                          s();
                        },
                        children: (0, a.jsx)(e7.Z, {
                          className: 'h-3.5 w-3.5 '.concat(
                            r ? 'animate-spin' : ''
                          ),
                        }),
                      }),
                    }),
                    (0, a.jsx)(c.u, {
                      tooltipContent: 'Unread notifications',
                      isMobile: j,
                      children: (0, a.jsx)('button', {
                        type: 'button',
                        onClick: () => {
                          x(!1), h(!1), p(e => !e), b(v.Hu);
                        },
                        children: (0, a.jsx)(te.Z, {
                          className: 'h-3.5 w-3.5',
                        }),
                      }),
                    }),
                    (0, a.jsxs)(c.fR, {
                      customButton: (0, a.jsx)('div', {
                        className: 'grid place-items-center ',
                        children: (0, a.jsx)(eV.Z, {
                          className: 'h-3.5 w-3.5',
                        }),
                      }),
                      closeOnSelect: !0,
                      children: [
                        (0, a.jsx)(c.fR.MenuItem, {
                          onClick: () => {
                            g(), b(v.eS);
                          },
                          children: (0, a.jsxs)('div', {
                            className: 'flex items-center gap-2',
                            children: [
                              (0, a.jsx)(tt, { className: 'h-3.5 w-3.5' }),
                              'Mark all as read',
                            ],
                          }),
                        }),
                        (0, a.jsx)(c.fR.MenuItem, {
                          onClick: () => {
                            h(!1), p(!1), x(e => !e), b(v.r9);
                          },
                          children: (0, a.jsxs)('div', {
                            className: 'flex items-center gap-2',
                            children: [
                              (0, a.jsx)(eH.Z, { className: 'h-3.5 w-3.5' }),
                              'Show snoozed',
                            ],
                          }),
                        }),
                        (0, a.jsx)(c.fR.MenuItem, {
                          onClick: () => {
                            x(!1), p(!1), h(e => !e), b(v.aq);
                          },
                          children: (0, a.jsxs)('div', {
                            className: 'flex items-center gap-2',
                            children: [
                              (0, a.jsx)(c.rK, { className: 'h-3.5 w-3.5' }),
                              'Show archived',
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, a.jsx)('div', {
                      className: 'hidden md:block',
                      children: (0, a.jsx)(c.u, {
                        tooltipContent: 'Close',
                        isMobile: j,
                        children: (0, a.jsx)('button', {
                          type: 'button',
                          onClick: () => l(),
                          children: (0, a.jsx)(ek.Z, {
                            className: 'h-3.5 w-3.5',
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)('div', {
              className: 'mt-5 w-full border-b border-custom-border-300 px-5',
              children:
                n || i || o
                  ? (0, a.jsx)('button', {
                      type: 'button',
                      onClick: () => {
                        x(!1), h(!1), p(!1);
                      },
                      children: (0, a.jsxs)('h4', {
                        className: 'flex items-center gap-2 pb-4',
                        children: [
                          (0, a.jsx)(ts.Z, { className: 'h-3.5 w-3.5' }),
                          (0, a.jsx)('span', {
                            className: 'ml-2 font-medium',
                            children: n
                              ? 'Snoozed Notifications'
                              : o
                                ? 'Unread Notifications'
                                : 'Archived Notifications',
                          }),
                        ],
                      }),
                    })
                  : (0, a.jsx)('nav', {
                      className: 'flex space-x-5 overflow-x-auto',
                      'aria-label': 'Tabs',
                      children: y.map(e =>
                        (0, a.jsxs)(
                          'button',
                          {
                            type: 'button',
                            onClick: () => f(e.value),
                            className:
                              'whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium outline-none '.concat(
                                e.value === d
                                  ? 'border-custom-primary-100 text-custom-primary-100'
                                  : 'border-transparent text-custom-text-200'
                              ),
                            children: [
                              e.label,
                              e.unreadCount && e.unreadCount > 0
                                ? (0, a.jsx)('span', {
                                    className:
                                      'ml-2 rounded-full px-2 py-0.5 text-xs '.concat(
                                        e.value === d
                                          ? 'bg-custom-primary-100 text-white'
                                          : 'bg-custom-background-80 text-custom-text-200'
                                      ),
                                    children: (0, E.gw)(e.unreadCount),
                                  })
                                : null,
                            ],
                          },
                          e.value
                        )
                      ),
                    }),
            }),
          ],
        });
      };
      var tr = s(45867);
      let tn = (0, r.Pi)(() => {
        let { theme: e } = (0, m.IX)(),
          { captureEvent: t } = (0, m.DN)(),
          { isMobile: s } = (0, u.L)(),
          {
            membership: { currentWorkspaceRole: l },
          } = (0, m.aF)(),
          r = (0, n.useRouter)(),
          { workspaceSlug: i } = r.query,
          o = l || d.fp.GUEST,
          x = s => {
            window.innerWidth < 768 && e.toggleSidebar(),
              t(v.mb, { destination: s });
          };
        return (0, a.jsxs)('div', {
          className: 'w-full cursor-pointer space-y-2 p-4',
          children: [
            tr.G3.map(
              t =>
                o >= t.access &&
                (0, a.jsx)(
                  p(),
                  {
                    href: '/'.concat(i).concat(t.href),
                    onClick: () => x(t.key),
                    children: (0, a.jsx)('span', {
                      className: 'my-1 block w-full',
                      children: (0, a.jsx)(c.u, {
                        tooltipContent: t.label,
                        position: 'right',
                        className: 'ml-2',
                        disabled: !(null == e ? void 0 : e.sidebarCollapsed),
                        isMobile: s,
                        children: (0, a.jsxs)('div', {
                          className:
                            'group flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium outline-none '
                              .concat(
                                t.highlight(r.asPath, '/'.concat(i))
                                  ? 'bg-custom-primary-100/10 text-custom-primary-100'
                                  : 'text-custom-sidebar-text-200 hover:bg-custom-sidebar-background-80 focus:bg-custom-sidebar-background-80',
                                ' '
                              )
                              .concat(
                                (null == e ? void 0 : e.sidebarCollapsed)
                                  ? 'justify-center'
                                  : ''
                              ),
                          children: [
                            (0, a.jsx)(t.Icon, {
                              className: (0, X.cn)('h-4 w-4', {
                                'rotate-180': 'active-cycles' === t.key,
                              }),
                            }),
                            !(null == e ? void 0 : e.sidebarCollapsed) &&
                              (0, a.jsx)('p', {
                                className: 'leading-5',
                                children: t.label,
                              }),
                            !(null == e ? void 0 : e.sidebarCollapsed) &&
                              'active-cycles' === t.key &&
                              (0, a.jsx)('span', {
                                className:
                                  'flex items-center justify-center px-3.5 py-0.5 text-xs leading-4 rounded-xl text-orange-500 bg-orange-500/20',
                                children: 'Beta',
                              }),
                          ],
                        }),
                      }),
                    }),
                  },
                  t.key
                )
            ),
            (0, a.jsx)(e3, {}),
          ],
        });
      });
      var ti = s(46679),
        to = s(81630),
        tc = s(15108);
      let td = (0, r.Pi)(() => {
          var e;
          let [t, s] = (0, l.useState)(!1),
            {
              router: { workspaceSlug: r },
              theme: n,
              commandPalette: i,
            } = (0, m.IX)(),
            { setTrackElement: o } = (0, m.DN)(),
            { joinedProjectIds: c } = (0, m.PY)(),
            {
              membership: { currentWorkspaceRole: u },
            } = (0, m.aF)(),
            { storedValue: x, setValue: h } = (0, tc.Z)('draftedIssue', {}),
            [p, f] = (0, l.useState)(!1),
            v = (0, l.useRef)(),
            g = n.sidebarCollapsed,
            b = !!u && u >= d.fp.MEMBER,
            j = 0 === c.length,
            y =
              r && null !== (e = null == x ? void 0 : x[r]) && void 0 !== e
                ? e
                : void 0,
            w = () => {
              let e = null != x ? x : {};
              return r && e[r] && delete e[r], h(e), Promise.resolve();
            };
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(A.vlH, {
                isOpen: t,
                onClose: () => s(!1),
                data: null != y ? y : {},
                onSubmit: () => w(),
                isDraft: !0,
              }),
              (0, a.jsxs)('div', {
                className:
                  'mt-4 flex w-full cursor-pointer items-center justify-between px-4 '.concat(
                    g ? 'flex-col gap-1' : 'gap-2'
                  ),
                onMouseEnter: () => {
                  (null == v ? void 0 : v.current) && clearTimeout(v.current),
                    f(!0);
                },
                onMouseLeave: () => {
                  v.current = setTimeout(() => {
                    f(!1);
                  }, 300);
                },
                children: [
                  b &&
                    (0, a.jsxs)('div', {
                      className:
                        'relative flex w-full cursor-pointer items-center justify-between gap-1 rounded px-2 '.concat(
                          g
                            ? 'px-2 hover:bg-custom-sidebar-background-80'
                            : 'border-[0.5px] border-custom-border-200 px-3 shadow-custom-sidebar-shadow-2xs'
                        ),
                      children: [
                        (0, a.jsxs)('button', {
                          type: 'button',
                          className:
                            'relative flex flex-shrink-0 flex-grow items-center gap-2 rounded py-1.5 outline-none '
                              .concat(g ? 'justify-center' : '', ' ')
                              .concat(j ? 'cursor-not-allowed opacity-50' : ''),
                          onClick: () => {
                            o('APP_SIDEBAR_QUICK_ACTIONS'),
                              i.toggleCreateIssueModal(!0, D.rS.PROJECT);
                          },
                          disabled: j,
                          children: [
                            (0, a.jsx)(ti.Z, {
                              className: 'h-4 w-4 text-custom-sidebar-text-300',
                            }),
                            !g &&
                              (0, a.jsx)('span', {
                                className: 'text-sm font-medium',
                                children: 'New Issue',
                              }),
                          ],
                        }),
                        !j &&
                          y &&
                          (0, a.jsxs)(a.Fragment, {
                            children: [
                              (0, a.jsx)('div', {
                                className:
                                  'h-8 w-0.5 bg-custom-sidebar-background-80 '.concat(
                                    g ? 'hidden' : 'block'
                                  ),
                              }),
                              (0, a.jsx)('button', {
                                type: 'button',
                                className:
                                  'ml-1.5 flex flex-shrink-0 items-center justify-center rounded py-1.5 '.concat(
                                    g ? 'hidden' : 'block'
                                  ),
                                children: (0, a.jsx)(k.Z, {
                                  className:
                                    'h-4 w-4 rotate-180 transform !text-custom-sidebar-text-300 transition-transform duration-300 '.concat(
                                      p ? 'rotate-0' : ''
                                    ),
                                }),
                              }),
                              (0, a.jsx)('div', {
                                className:
                                  'fixed left-4 mt-0 h-10 w-[203px] pt-2 '
                                    .concat(g ? 'top-[5.5rem]' : 'top-24', ' ')
                                    .concat(p ? 'block' : 'hidden'),
                                children: (0, a.jsx)('div', {
                                  className: 'h-full w-full',
                                  children: (0, a.jsxs)('button', {
                                    onClick: () => s(!0),
                                    className:
                                      'flex w-full flex-shrink-0 items-center rounded border-[0.5px] border-custom-border-300 bg-custom-background-100 px-3 py-[10px] text-sm text-custom-text-300 shadow',
                                    children: [
                                      (0, a.jsx)(ti.Z, {
                                        size: 16,
                                        className:
                                          'mr-2 !text-lg !leading-4 text-custom-sidebar-text-300',
                                      }),
                                      'Last Drafted Issue',
                                    ],
                                  }),
                                }),
                              }),
                            ],
                          }),
                      ],
                    }),
                  (0, a.jsxs)('button', {
                    className:
                      'flex flex-shrink-0 items-center rounded p-2 gap-2 outline-none '
                        .concat(b ? 'justify-center' : 'w-full', ' ')
                        .concat(
                          g
                            ? 'hover:bg-custom-sidebar-background-80'
                            : 'border-[0.5px] border-custom-border-200 shadow-custom-sidebar-shadow-2xs'
                        ),
                    onClick: () => i.toggleCommandPaletteModal(!0),
                    children: [
                      (0, a.jsx)(to.Z, {
                        className: 'h-4 w-4 text-custom-sidebar-text-300',
                      }),
                      !b &&
                        !g &&
                        (0, a.jsx)('span', {
                          className: 'text-xs font-medium',
                          children: 'Open command menu',
                        }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }),
        tm = (0, eI.Z)('Crown', [
          [
            'path',
            {
              d: 'M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z',
              key: '1vdc57',
            },
          ],
          ['path', { d: 'M5 21h14', key: '11awu3' }],
        ]);
      var tu = s(14522);
      (0, K.Pi)(() => {
        let { currentUser: e } = (0, m.aF)(),
          t = (null == e ? void 0 : e.theme.theme) === 'dark';
        return (0, a.jsxs)('div', {
          className:
            'flex flex-col gap-10 pt-8 px-8 rounded-xl h-full vertical-scrollbar scrollbar-lg',
          children: [
            (0, a.jsxs)('div', {
              className: (0, X.cn)(
                'flex item-center justify-between rounded-xl min-h-[25rem]',
                {
                  'bg-gradient-to-l from-[#CFCFCF]  to-[#212121]':
                    (null == e ? void 0 : e.theme.theme) === 'dark',
                  'bg-gradient-to-l from-[#3b5ec6] to-[#f5f7fe]':
                    (null == e ? void 0 : e.theme.theme) === 'light',
                }
              ),
              children: [
                (0, a.jsxs)('div', {
                  className:
                    'relative px-14 flex flex-col gap-7 justify-center lg:w-1/2',
                  children: [
                    (0, a.jsxs)('div', {
                      className: 'flex flex-col gap-2 max-w-64',
                      children: [
                        (0, a.jsx)('h2', {
                          className: 'text-2xl font-semibold',
                          children: 'On-demand snapshots of all your cycles',
                        }),
                        (0, a.jsx)('p', {
                          className:
                            'text-base font-medium text-custom-text-300',
                          children:
                            'Monitor cycles across projects, track high-priority issues, and zoom in cycles that need attention.',
                        }),
                      ],
                    }),
                    (0, a.jsx)('div', {
                      className: 'flex items-center gap-3',
                      children: (0, a.jsxs)('a', {
                        className: ''.concat(
                          (0, c.A6)('primary', 'md'),
                          ' cursor-pointer'
                        ),
                        href: 'https://plane.so/pricing',
                        target: '_blank',
                        rel: 'noreferrer',
                        children: [
                          (0, a.jsx)(tm, { className: 'h-3.5 w-3.5' }),
                          'Upgrade',
                        ],
                      }),
                    }),
                    (0, a.jsx)('span', {
                      className: 'absolute left-0 top-0',
                      children: (0, a.jsx)(eL(), {
                        src: '/workspace-active-cycles/cta-l-1-'.concat(
                          t ? 'dark' : 'light',
                          '.webp'
                        ),
                        height: 125,
                        width: 125,
                        className: 'rounded-xl',
                        alt: 'l-1',
                      }),
                    }),
                  ],
                }),
                (0, a.jsxs)('div', {
                  className: 'relative w-1/2 hidden lg:block',
                  children: [
                    (0, a.jsx)('span', {
                      className: 'absolute right-0 bottom-0',
                      children: (0, a.jsx)(eL(), {
                        src: '/workspace-active-cycles/cta-r-1-'.concat(
                          t ? 'dark' : 'light',
                          '.webp'
                        ),
                        height: 420,
                        width: 500,
                        alt: 'r-1',
                      }),
                    }),
                    (0, a.jsx)('span', {
                      className: 'absolute right-1/2 -bottom-16 rounded-xl',
                      children: (0, a.jsx)(eL(), {
                        src: '/workspace-active-cycles/cta-r-2-'.concat(
                          t ? 'dark' : 'light',
                          '.webp'
                        ),
                        height: 210,
                        width: 280,
                        alt: 'r-2',
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)('div', {
              className:
                'grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 pb-8 h-full',
              children: tu.Rf.map(e =>
                (0, a.jsxs)(
                  'div',
                  {
                    className:
                      'flex flex-col gap-2 p-4 min-h-32 w-full bg-custom-background-80 rounded-md',
                    children: [
                      (0, a.jsxs)('div', {
                        className: 'flex items-center gap-2',
                        children: [
                          (0, a.jsx)('h3', {
                            className: 'font-medium',
                            children: e.title,
                          }),
                          (0, a.jsx)(e.icon, {
                            className: 'text-blue-500 h-4 w-4',
                          }),
                        ],
                      }),
                      (0, a.jsx)('span', {
                        className: 'text-sm text-custom-text-300',
                        children: e.description,
                      }),
                    ],
                  },
                  e.title
                )
              ),
            }),
          ],
        });
      });
      var tx = s(29350);
      let th = (0, r.Pi)(() => {
        let [e, t] = (0, l.useState)(1),
          [s, r] = (0, l.useState)(0),
          [i, o] = (0, l.useState)(0),
          { workspaceSlug: d } = (0, n.useRouter)().query,
          m = [],
          u = e => {
            r(e);
          },
          x = e => {
            o(e);
          };
        if (!d) return null;
        for (let t = 1; t <= e; t++)
          m.push(
            (0, a.jsx)(
              tx.a6,
              {
                cursor: ''.concat(3, ':').concat(t - 1, ':0'),
                perPage: 3,
                workspaceSlug: d.toString(),
                updateTotalPages: u,
                updateResultsCount: x,
              },
              t
            )
          );
        return (0, a.jsxs)('div', {
          className:
            'h-full w-full overflow-y-scroll bg-custom-background-90 vertical-scrollbar scrollbar-md',
          children: [
            m,
            e < s &&
              0 !== i &&
              (0, a.jsx)('div', {
                className:
                  'flex items-center justify-center gap-4 text-xs w-full py-5',
                children: (0, a.jsx)(c.zx, {
                  variant: 'outline-primary',
                  size: 'sm',
                  onClick: () => {
                    t(e + 1);
                  },
                  children: 'Load More',
                }),
              }),
            0 === i &&
              (0, a.jsx)(eX.ub, { type: eJ.C.WORKSPACE_ACTIVE_CYCLES }),
          ],
        });
      });
    },
    45867: function (e, t, s) {
      s.d(t, {
        qp: function () {
          return C;
        },
        Mx: function () {
          return S;
        },
        ve: function () {
          return y;
        },
        uZ: function () {
          return l;
        },
        sr: function () {
          return N;
        },
        F: function () {
          return g;
        },
        P2: function () {
          return w;
        },
        G3: function () {
          return _;
        },
        Rj: function () {
          return j;
        },
        JX: function () {
          return b;
        },
        v_: function () {
          return k;
        },
      });
      var a,
        l,
        r = s(96762),
        n = s(20546),
        i = s(13995),
        o = s(26536),
        c = s(39709),
        d = s(25449),
        m = {
          src: '/_next/static/media/completed-issues.94325d94.svg',
          height: 94,
          width: 94,
          blurWidth: 0,
          blurHeight: 0,
        },
        u = {
          src: '/_next/static/media/overdue-issues.88cbe7f9.svg',
          height: 94,
          width: 94,
          blurWidth: 0,
          blurHeight: 0,
        },
        x = {
          src: '/_next/static/media/upcoming-issues.cb8343f5.svg',
          height: 94,
          width: 94,
          blurWidth: 0,
          blurHeight: 0,
        },
        h = {
          src: '/_next/static/media/completed-issues.87ac1991.svg',
          height: 94,
          width: 94,
          blurWidth: 0,
          blurHeight: 0,
        },
        p = {
          src: '/_next/static/media/overdue-issues.6ea893d5.svg',
          height: 94,
          width: 94,
          blurWidth: 0,
          blurHeight: 0,
        },
        f = {
          src: '/_next/static/media/upcoming-issues.bf61625b.svg',
          height: 94,
          width: 94,
          blurWidth: 0,
          blurHeight: 0,
        },
        v = s(93116);
      let g = [
          (0, r.c$)(
            'gradientUrgent',
            [
              { offset: 0, color: '#A90408' },
              { offset: 100, color: '#DF4D51' },
            ],
            { x1: 1, y1: 0, x2: 0, y2: 0 }
          ),
          (0, r.c$)(
            'gradientHigh',
            [
              { offset: 0, color: '#FE6B00' },
              { offset: 100, color: '#FFAC88' },
            ],
            { x1: 1, y1: 0, x2: 0, y2: 0 }
          ),
          (0, r.c$)(
            'gradientMedium',
            [
              { offset: 0, color: '#F5AC00' },
              { offset: 100, color: '#FFD675' },
            ],
            { x1: 1, y1: 0, x2: 0, y2: 0 }
          ),
          (0, r.c$)(
            'gradientLow',
            [
              { offset: 0, color: '#1B46DE' },
              { offset: 100, color: '#4F9BF4' },
            ],
            { x1: 1, y1: 0, x2: 0, y2: 0 }
          ),
          (0, r.c$)(
            'gradientNone',
            [
              { offset: 0, color: '#A0A1A9' },
              { offset: 100, color: '#B9BBC6' },
            ],
            { x1: 1, y1: 0, x2: 0, y2: 0 }
          ),
        ],
        b = [
          (0, r.c$)('gradientBacklog', [
            { offset: 0, color: '#DEDEDE' },
            { offset: 100, color: '#BABABE' },
          ]),
          (0, r.c$)('gradientUnstarted', [
            { offset: 0, color: '#D4D4D4' },
            { offset: 100, color: '#878796' },
          ]),
          (0, r.c$)('gradientStarted', [
            { offset: 0, color: '#FFD300' },
            { offset: 100, color: '#FAE270' },
          ]),
          (0, r.c$)('gradientCompleted', [
            { offset: 0, color: '#0E8B1B' },
            { offset: 100, color: '#37CB46' },
          ]),
          (0, r.c$)('gradientCanceled', [
            { offset: 0, color: '#C90004' },
            { offset: 100, color: '#FF7679' },
          ]),
        ],
        j = {
          backlog: '#CDCED6',
          unstarted: '#80838D',
          started: '#FFC53D',
          completed: '#3E9B4F',
          cancelled: '#E5484D',
        };
      ((a = l || (l = {})).NONE = 'none'),
        (a.TODAY = 'today'),
        (a.THIS_WEEK = 'this_week'),
        (a.THIS_MONTH = 'this_month'),
        (a.THIS_YEAR = 'this_year'),
        (a.CUSTOM = 'custom');
      let y = [
          { key: 'none', label: 'All time' },
          { key: 'today', label: 'Due today' },
          { key: 'this_week', label: 'Due this week' },
          { key: 'this_month', label: 'Due this month' },
          { key: 'this_year', label: 'Due this year' },
          { key: 'custom', label: 'Custom' },
        ],
        w = [
          'bg-gray-500/20',
          'bg-green-500/20',
          'bg-red-500/20',
          'bg-orange-500/20',
          'bg-blue-500/20',
          'bg-yellow-500/20',
          'bg-pink-500/20',
          'bg-purple-500/20',
        ],
        N = [
          { key: 'upcoming', label: 'Upcoming' },
          { key: 'overdue', label: 'Overdue' },
          { key: 'completed', label: 'Marked completed' },
        ],
        k = [
          { key: 'pending', label: 'Pending' },
          { key: 'completed', label: 'Marked completed' },
        ],
        C = {
          pending: {
            title:
              'Issues assigned to you that are pending\nwill show up here.',
            darkImage: x,
            lightImage: f,
          },
          upcoming: {
            title: 'Upcoming issues assigned to\nyou will show up here.',
            darkImage: x,
            lightImage: f,
          },
          overdue: {
            title:
              'Issues assigned to you that are past\ntheir due date will show up here.',
            darkImage: u,
            lightImage: p,
          },
          completed: {
            title:
              'Issues assigned to you that you have\nmarked Completed will show up here.',
            darkImage: m,
            lightImage: h,
          },
        },
        S = {
          pending: {
            title: 'Issues created by you that are pending\nwill show up here.',
            darkImage: x,
            lightImage: f,
          },
          upcoming: {
            title: 'Upcoming issues you created\nwill show up here.',
            darkImage: x,
            lightImage: f,
          },
          overdue: {
            title:
              'Issues created by you that are past their\ndue date will show up here.',
            darkImage: u,
            lightImage: p,
          },
          completed: {
            title:
              'Issues created by you that you have\nmarked completed will show up here.',
            darkImage: m,
            lightImage: h,
          },
        },
        _ = [
          {
            key: 'home',
            label: 'Home',
            href: '',
            access: v.fp.GUEST,
            highlight: (e, t) => e === ''.concat(t),
            Icon: n.Z,
          },
          {
            key: 'analytics',
            label: 'Analytics',
            href: '/analytics',
            access: v.fp.MEMBER,
            highlight: (e, t) => e.includes(''.concat(t, '/analytics')),
            Icon: i.Z,
          },
          {
            key: 'projects',
            label: 'Projects',
            href: '/projects',
            access: v.fp.GUEST,
            highlight: (e, t) => e === ''.concat(t, '/projects'),
            Icon: o.Z,
          },
          {
            key: 'all-issues',
            label: 'All Issues',
            href: '/workspace-views/all-issues',
            access: v.fp.GUEST,
            highlight: (e, t) => e.includes(''.concat(t, '/workspace-views')),
            Icon: c.Z,
          },
          {
            key: 'active-cycles',
            label: 'Active Cycles',
            href: '/active-cycles',
            access: v.fp.GUEST,
            highlight: (e, t) => e === ''.concat(t, '/active-cycles'),
            Icon: d.sI,
          },
        ];
    },
  },
]);
