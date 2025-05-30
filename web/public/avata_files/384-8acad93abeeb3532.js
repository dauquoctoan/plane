'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [384],
  {
    41719: function (e, t) {
      t.Z = {
        src: '/_next/static/media/project.3d842d6d.svg',
        height: 138,
        width: 248,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    69312: function (e, t, n) {
      n.d(t, {
        RU: function () {
          return h;
        },
        NU: function () {
          return j;
        },
      });
      var r = n(24246),
        l = n(27378),
        a = n(38579),
        s = n.n(a),
        i = n(86677),
        c = n(26452),
        o = n(25449),
        d = n(10634),
        u = {
          src: '/_next/static/media/project-not-authorized.6ff44214.svg',
          height: 174,
          width: 283,
          blurWidth: 0,
          blurHeight: 0,
        };
      let h = () => {
        let [e, t] = (0, l.useState)(!1),
          {
            membership: { joinProject: n },
          } = (0, d.aF)(),
          { fetchProjects: a } = (0, d.PY)(),
          { workspaceSlug: h, projectId: x } = (0, i.useRouter)().query;
        return (0, r.jsxs)('div', {
          className:
            'flex h-full w-full flex-col items-center justify-center gap-y-5 bg-custom-background-100 text-center',
          children: [
            (0, r.jsx)('div', {
              className: 'h-44 w-72',
              children: (0, r.jsx)(s(), {
                src: u,
                height: '176',
                width: '288',
                alt: 'JoinProject',
              }),
            }),
            (0, r.jsx)('h1', {
              className: 'text-xl font-medium text-custom-text-100',
              children: 'You are not a member of this project',
            }),
            (0, r.jsx)('div', {
              className: 'w-full max-w-md text-base text-custom-text-200',
              children: (0, r.jsx)('p', {
                className: 'mx-auto w-full text-sm md:w-3/4',
                children:
                  'You are not a member of this project, but you can join this project by clicking the button below.',
              }),
            }),
            (0, r.jsx)('div', {
              children: (0, r.jsx)(o.zx, {
                variant: 'primary',
                prependIcon: (0, r.jsx)(c.Z, { color: 'white' }),
                loading: e,
                onClick: () => {
                  h &&
                    x &&
                    (t(!0),
                    n(h.toString(), [x.toString()])
                      .then(() => a(h.toString()))
                      .finally(() => t(!1)));
                },
                children: e ? 'Joining...' : 'Click to join',
              }),
            }),
          ],
        });
      };
      var x = n(79894),
        m = n.n(x),
        g = n(31266),
        f = n(43659),
        v = {
          src: '/_next/static/media/workspace-not-authorized.93b86883.svg',
          height: 174,
          width: 283,
          blurWidth: 0,
          blurHeight: 0,
        };
      let j = (0, f.Pi)(e => {
        let { actionButton: t, type: n } = e,
          { currentUser: l } = (0, d.aF)(),
          { query: a } = (0, i.useRouter)(),
          { next_path: c } = a;
        return (0, r.jsx)(g.Z, {
          children: (0, r.jsxs)('div', {
            className:
              'flex h-full w-full flex-col items-center justify-center gap-y-5 bg-custom-background-100 text-center',
            children: [
              (0, r.jsx)('div', {
                className: 'h-44 w-72',
                children: (0, r.jsx)(s(), {
                  src: 'project' === n ? u : v,
                  height: '176',
                  width: '288',
                  alt: 'ProjectSettingImg',
                }),
              }),
              (0, r.jsx)('h1', {
                className: 'text-xl font-medium text-custom-text-100',
                children: 'Oops! You are not authorized to view this page',
              }),
              (0, r.jsx)('div', {
                className: 'w-full max-w-md text-base text-custom-text-200',
                children: l
                  ? (0, r.jsxs)('p', {
                      children: [
                        'You have signed in as ',
                        l.email,
                        '. ',
                        (0, r.jsx)('br', {}),
                        (0, r.jsx)(m(), {
                          href: '/?next_path='.concat(c),
                          children: (0, r.jsx)('span', {
                            className: 'font-medium text-custom-text-100',
                            children: 'Sign in',
                          }),
                        }),
                        ' ',
                        'with different account that has access to this page.',
                      ],
                    })
                  : (0, r.jsxs)('p', {
                      children: [
                        'You need to',
                        ' ',
                        (0, r.jsx)(m(), {
                          href: '/?next_path='.concat(c),
                          children: (0, r.jsx)('span', {
                            className: 'font-medium text-custom-text-100',
                            children: 'Sign in',
                          }),
                        }),
                        ' ',
                        'with an account that has access to this page.',
                      ],
                    }),
              }),
              t,
            ],
          }),
        });
      });
    },
    23194: function (e, t, n) {
      n.d(t, {
        _z: function () {
          return P;
        },
        nV: function () {
          return N;
        },
        bQ: function () {
          return d;
        },
        Cr: function () {
          return b;
        },
      });
      var r = n(24246),
        l = n(43659),
        a = n(86677),
        s = n(30201),
        i = n(32699),
        c = n(25449),
        o = n(10634);
      let d = (0, l.Pi)(e => {
        let { children: t } = e,
          {
            currentUser: n,
            currentUserError: l,
            fetchCurrentUser: d,
            fetchCurrentUserInstanceAdminStatus: u,
            fetchCurrentUserSettings: h,
          } = (0, o.aF)(),
          { fetchWorkspaces: x } = (0, o.cF)(),
          m = (0, a.useRouter)();
        (0, s.ZP)('CURRENT_USER_DETAILS', () => d(), {
          shouldRetryOnError: !1,
        }),
          (0, i.Z)('CURRENT_USER_INSTANCE_ADMIN_STATUS', () => u(), {
            shouldRetryOnError: !1,
          });
        let { isLoading: g } = (0, s.ZP)('CURRENT_USER_SETTINGS', () => h(), {
            shouldRetryOnError: !1,
          }),
          { isLoading: f } = (0, s.ZP)('USER_WORKSPACES_LIST', () => x(), {
            shouldRetryOnError: !1,
          });
        if ((!n && !l) || g || f)
          return (0, r.jsx)('div', {
            className:
              'grid h-screen place-items-center bg-custom-background-100 p-4',
            children: (0, r.jsx)('div', {
              className: 'flex flex-col items-center gap-3 text-center',
              children: (0, r.jsx)(c.$j, {}),
            }),
          });
        if (l) {
          let e = m.asPath;
          return m.push('/?next_path='.concat(e)), null;
        }
        return (0, r.jsx)(r.Fragment, { children: t });
      });
      var u = n(38579),
        h = n.n(u),
        x = n(79894),
        m = n.n(x),
        g = n(35704),
        f = n(70609),
        v = n(18894),
        j = n(84828),
        p = n(30782),
        S = {
          src: '/_next/static/media/workspace-not-available.b089447d.png',
          height: 651,
          width: 617,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAATlBMVEWUpsv7/Pvw8PFRbcff3+T8/Pzx8fLn6Ov6+/vv7er///9pf8PQ1Nxwh9Hh4uXe4OTl5+vj4+f5+fnj4+f39/f4+Phwh9Nvi+ZogNCHoO6Nbo85AAAAGXRSTlMBV9majC3QnIF6FRF2tmmpt7fAxULjTf1dpDdVDwAAAAlwSFlzAAAhOAAAITgBRZYxYAAAAD9JREFUeJwFwYUBwCAQALFDHy1e2X/RJrDnOVOB89p7rTdhjd7HCgSR1kQCytoYo1W4q9RaLgfpfr43AWRjMvxbwAJmIwhvaAAAAABJRU5ErkJggg==',
          blurWidth: 8,
          blurHeight: 8,
        };
      let b = (0, l.Pi)(e => {
        let { children: t } = e,
          n = (0, a.useRouter)(),
          { workspaceSlug: l } = n.query,
          { resolvedTheme: i, setTheme: d } = (0, g.F)(),
          { membership: u, signOut: x, currentUser: b } = (0, o.aF)(),
          { fetchProjects: _ } = (0, o.PY)(),
          {
            workspace: { fetchWorkspaceMembers: w },
          } = (0, o.Kb)(),
          { workspaces: A } = (0, o.cF)(),
          { isMobile: N } = (0, v.L)(),
          R = 'dark' === i ? p.Z : j.Z,
          P = A ? Object.values(A) : void 0,
          E = (P && P.find(e => (null == e ? void 0 : e.slug) === l)) || void 0;
        (0, s.ZP)(
          l && E ? 'WORKSPACE_MEMBERS_ME_'.concat(l) : null,
          l && E ? () => u.fetchUserWorkspaceInfo(l.toString()) : null,
          { revalidateIfStale: !1, revalidateOnFocus: !1 }
        ),
          (0, s.ZP)(
            l && E ? 'WORKSPACE_PROJECTS_'.concat(l) : null,
            l && E ? () => _(l.toString()) : null,
            { revalidateIfStale: !1, revalidateOnFocus: !1 }
          ),
          (0, s.ZP)(
            l && E ? 'WORKSPACE_MEMBERS_'.concat(l) : null,
            l && E ? () => w(l.toString()) : null,
            { revalidateIfStale: !1, revalidateOnFocus: !1 }
          ),
          (0, s.ZP)(
            l && E ? 'WORKSPACE_PROJECTS_ROLE_'.concat(l) : null,
            l && E
              ? () => u.fetchUserWorkspaceProjectsRole(l.toString())
              : null,
            { revalidateIfStale: !1, revalidateOnFocus: !1 }
          );
        let k = async () => {
          await x()
            .then(() => {
              (0, s.JG)('CURRENT_USER_DETAILS', null), d('system'), n.push('/');
            })
            .catch(() =>
              (0, c.fz)({
                type: c.do.ERROR,
                title: 'Error!',
                message: 'Failed to sign out. Please try again.',
              })
            );
        };
        return void 0 === P
          ? (0, r.jsx)('div', {
              className:
                'grid h-screen place-items-center bg-custom-background-100 p-4',
              children: (0, r.jsx)('div', {
                className: 'flex flex-col items-center gap-3 text-center',
                children: (0, r.jsx)(c.$j, {}),
              }),
            })
          : void 0 !== E ||
              u.currentWorkspaceMemberInfo ||
              void 0 !== u.hasPermissionToCurrentWorkspace
            ? void 0 !== u.hasPermissionToCurrentWorkspace &&
              !1 === u.hasPermissionToCurrentWorkspace
              ? (0, r.jsx)('div', {
                  className:
                    'h-screen w-full overflow-hidden bg-custom-background-100',
                  children: (0, r.jsx)('div', {
                    className: 'grid h-full place-items-center p-4',
                    children: (0, r.jsxs)('div', {
                      className: 'space-y-8 text-center',
                      children: [
                        (0, r.jsxs)('div', {
                          className: 'space-y-2',
                          children: [
                            (0, r.jsx)('h3', {
                              className: 'text-lg font-semibold',
                              children: 'Not Authorized!',
                            }),
                            (0, r.jsxs)('p', {
                              className:
                                'mx-auto w-1/2 text-sm text-custom-text-200',
                              children: [
                                'You',
                                "'",
                                're not a member of this workspace. Please contact the workspace admin to get an invitation or check your pending invitations.',
                              ],
                            }),
                          ],
                        }),
                        (0, r.jsxs)('div', {
                          className: 'flex items-center justify-center gap-2',
                          children: [
                            (0, r.jsx)(m(), {
                              href: '/invitations',
                              children: (0, r.jsx)('span', {
                                children: (0, r.jsx)(c.zx, {
                                  variant: 'neutral-primary',
                                  size: 'sm',
                                  children: 'Check pending invites',
                                }),
                              }),
                            }),
                            (0, r.jsx)(m(), {
                              href: '/create-workspace',
                              children: (0, r.jsx)('span', {
                                children: (0, r.jsx)(c.zx, {
                                  variant: 'primary',
                                  size: 'sm',
                                  children: 'Create new workspace',
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                })
              : (0, r.jsx)(r.Fragment, { children: t })
            : (0, r.jsx)('div', {
                className:
                  'relative w-full h-full flex flex-col justify-center items-center bg-custom-background-90',
                children: (0, r.jsxs)('div', {
                  className:
                    'relative container px-5 md:px-0 w-full h-full mx-auto py-14 overflow-hidden overflow-y-auto flex flex-col',
                  children: [
                    (0, r.jsxs)('div', {
                      className:
                        'flex-shrink-0 relative flex justify-between items-center gap-4',
                      children: [
                        (0, r.jsx)('div', {
                          className:
                            'flex-shrink-0 py-4 z-10 bg-custom-background-90',
                          children: (0, r.jsx)(h(), {
                            src: R,
                            className: 'h-[26px] w-full',
                            alt: 'Plane logo',
                          }),
                        }),
                        (0, r.jsxs)('div', {
                          className: 'relative flex items-center gap-2',
                          children: [
                            (0, r.jsx)('div', {
                              className: 'text-sm font-medium',
                              children: null == b ? void 0 : b.email,
                            }),
                            (0, r.jsx)('div', {
                              className:
                                'relative flex-shrink-0 w-6 h-6 rounded overflow-hidden flex justify-center items-center cursor-pointer hover:bg-custom-background-80',
                              onClick: k,
                              children: (0, r.jsx)(c.u, {
                                tooltipContent: 'Sign out',
                                position: 'top',
                                className: 'ml-2',
                                isMobile: N,
                                children: (0, r.jsx)(f.Z, { size: 14 }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsxs)('div', {
                      className:
                        'space-y-3 w-full h-full flex-grow relative flex flex-col justify-center items-center',
                      children: [
                        (0, r.jsx)('div', {
                          className: 'flex-shrink-0 relative',
                          children: (0, r.jsx)(h(), {
                            src: S,
                            className: 'h-[220px] object-contain object-center',
                            alt: 'Plane logo',
                          }),
                        }),
                        (0, r.jsx)('h3', {
                          className: 'text-lg font-semibold text-center',
                          children: 'Workspace not found',
                        }),
                        (0, r.jsx)('p', {
                          className: 'text-sm text-custom-text-200 text-center',
                          children:
                            'No workspace found with the URL. It may not exist or you lack authorization to view it.',
                        }),
                        (0, r.jsxs)('div', {
                          className:
                            'flex justify-center items-center gap-2 pt-4',
                          children: [
                            P &&
                              P.length > 1 &&
                              (0, r.jsx)(m(), {
                                href: '/',
                                children: (0, r.jsx)(c.zx, {
                                  children: 'Go Home',
                                }),
                              }),
                            (0, r.jsx)(m(), {
                              href: '/profile',
                              children: (0, r.jsx)(c.zx, {
                                variant: 'neutral-primary',
                                children: 'Visit Profile',
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsx)('div', {
                      className:
                        'absolute top-0 bottom-0 left-4 w-0 md:w-0.5 bg-custom-background-80',
                    }),
                  ],
                }),
              });
      });
      var _ = n(69312),
        w = n(78593),
        A = n(41719);
      let N = (0, l.Pi)(e => {
        let { children: t } = e,
          {
            commandPalette: { toggleCreateProjectModal: n },
          } = (0, o.IX)(),
          { setTrackElement: l } = (0, o.DN)(),
          {
            membership: {
              fetchUserProjectInfo: i,
              projectMemberInfo: d,
              hasPermissionToProject: u,
            },
          } = (0, o.aF)(),
          { getProjectById: h, fetchProjectDetails: x } = (0, o.PY)(),
          { fetchAllCycles: m } = (0, o.nv)(),
          { fetchModules: g } = (0, o.b7)(),
          { fetchViews: f } = (0, o.QJ)(),
          {
            project: { fetchProjectMembers: v },
          } = (0, o.Kb)(),
          { fetchProjectStates: j } = (0, o.eD)(),
          { fetchProjectLabels: p } = (0, o.NP)(),
          { fetchProjectEstimates: S } = (0, o.ZT)(),
          { workspaceSlug: b, projectId: N } = (0, a.useRouter)().query;
        (0, s.ZP)(
          b && N
            ? 'PROJECT_DETAILS_'.concat(b.toString(), '_').concat(N.toString())
            : null,
          b && N ? () => x(b.toString(), N.toString()) : null
        ),
          (0, s.ZP)(
            b && N ? 'PROJECT_MEMBERS_ME_'.concat(b, '_').concat(N) : null,
            b && N ? () => i(b.toString(), N.toString()) : null
          ),
          (0, s.ZP)(
            b && N ? 'PROJECT_LABELS_'.concat(b, '_').concat(N) : null,
            b && N ? () => p(b.toString(), N.toString()) : null,
            { revalidateIfStale: !1, revalidateOnFocus: !1 }
          ),
          (0, s.ZP)(
            b && N ? 'PROJECT_MEMBERS_'.concat(b, '_').concat(N) : null,
            b && N ? () => v(b.toString(), N.toString()) : null,
            { revalidateIfStale: !1, revalidateOnFocus: !1 }
          ),
          (0, s.ZP)(
            b && N ? 'PROJECT_STATES_'.concat(b, '_').concat(N) : null,
            b && N ? () => j(b.toString(), N.toString()) : null,
            { revalidateIfStale: !1, revalidateOnFocus: !1 }
          ),
          (0, s.ZP)(
            b && N ? 'PROJECT_ESTIMATES_'.concat(b, '_').concat(N) : null,
            b && N ? () => S(b.toString(), N.toString()) : null,
            { revalidateIfStale: !1, revalidateOnFocus: !1 }
          ),
          (0, s.ZP)(
            b && N ? 'PROJECT_ALL_CYCLES_'.concat(b, '_').concat(N) : null,
            b && N ? () => m(b.toString(), N.toString()) : null,
            { revalidateIfStale: !1, revalidateOnFocus: !1 }
          ),
          (0, s.ZP)(
            b && N ? 'PROJECT_MODULES_'.concat(b, '_').concat(N) : null,
            b && N ? () => g(b.toString(), N.toString()) : null,
            { revalidateIfStale: !1, revalidateOnFocus: !1 }
          ),
          (0, s.ZP)(
            b && N ? 'PROJECT_VIEWS_'.concat(b, '_').concat(N) : null,
            b && N ? () => f(b.toString(), N.toString()) : null,
            { revalidateIfStale: !1, revalidateOnFocus: !1 }
          );
        let R = N ? h(N.toString()) : null;
        return !d && N && null === u[N.toString()]
          ? (0, r.jsx)('div', {
              className:
                'grid h-screen place-items-center bg-custom-background-100 p-4',
              children: (0, r.jsx)('div', {
                className: 'flex flex-col items-center gap-3 text-center',
                children: (0, r.jsx)(c.$j, {}),
              }),
            })
          : R && N && !1 === u[N.toString()]
            ? (0, r.jsx)(_.RU, {})
            : !R && N && !1 === u[N.toString()]
              ? (0, r.jsx)('div', {
                  className:
                    'container grid h-screen place-items-center bg-custom-background-100',
                  children: (0, r.jsx)(w.ub, {
                    title: 'No such project exists',
                    description: 'Try creating a new project',
                    image: A.Z,
                    primaryButton: {
                      text: 'Create Project',
                      onClick: () => {
                        l('Projects page empty state'), n(!0);
                      },
                    },
                  }),
                })
              : (0, r.jsx)(r.Fragment, { children: t });
      });
      var R = n(41263);
      let P = (0, l.Pi)(e => {
        var t, n;
        let { children: l } = e,
          {
            router: { workspaceSlug: a },
          } = (0, o.IX)(),
          { isUserInstanceAdmin: s, currentUserSettings: i } = (0, o.aF)(),
          c =
            a ||
            (null == i
              ? void 0
              : null === (t = i.workspace) || void 0 === t
                ? void 0
                : t.last_workspace_slug) ||
            (null == i
              ? void 0
              : null === (n = i.workspace) || void 0 === n
                ? void 0
                : n.fallback_workspace_slug) ||
            '';
        return void 0 !== s && !1 === s
          ? (0, r.jsx)(R.ND, { redirectWorkspaceSlug: c })
          : (0, r.jsx)(r.Fragment, { children: l });
      });
    },
  },
]);
