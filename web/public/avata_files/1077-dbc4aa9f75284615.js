'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1077],
  {
    93384: function (e, t) {
      t.Z = {
        src: '/_next/static/media/github.30940da3.png',
        height: 70,
        width: 70,
        blurDataURL:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAPFBMVEUGBgYsLCzu7u5UVFQhISEAAAAREREBAQEdHR02NjaFhYXU1NT///9ra2vMzMy5ublGRkZwcHCurq7n5+cHNHmdAAAACnRSTlP+/////P//tf7+5YnTEwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAD5JREFUeJwdxkkSgDAIBMABHIhAEpf//9Uq+9QIQgQMUFZ3CYGV885yXOok1GB/XsOodH/0AG0P6UkET3dhfDobAajIHSiGAAAAAElFTkSuQmCC',
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    50188: function (e, t) {
      t.Z = {
        src: '/_next/static/media/jira.0e07c315.svg',
        height: 140,
        width: 132,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    23258: function (e, t, r) {
      r.d(t, {
        AH: function () {
          return eZ;
        },
        t2: function () {
          return eW;
        },
        qv: function () {
          return S;
        },
        LV: function () {
          return B;
        },
        uC: function () {
          return eQ;
        },
        iF: function () {
          return b;
        },
        fM: function () {
          return o;
        },
        j4: function () {
          return i;
        },
        H2: function () {
          return Z;
        },
        MD: function () {
          return eK;
        },
        TM: function () {
          return Q;
        },
        pq: function () {
          return e8;
        },
        zE: function () {
          return eB;
        },
        Gq: function () {
          return U;
        },
        I3: function () {
          return et;
        },
        GG: function () {
          return eg;
        },
        QU: function () {
          return er;
        },
        yG: function () {
          return e9;
        },
        R: function () {
          return ej;
        },
        F_: function () {
          return eN;
        },
        R5: function () {
          return e1;
        },
        Sz: function () {
          return el;
        },
        K$: function () {
          return ed;
        },
      });
      var n,
        s,
        o,
        i,
        a = r(24246),
        l = r(27378),
        c = r(62153),
        d = r(88039),
        u = r(82558),
        p = r(30335),
        h = r(15455),
        m = r(25449),
        f = r(74273),
        g = r(17480);
      let x = [
          {
            name: 'before',
            value: 'before',
            icon: (0, a.jsx)(m.pO, { className: 'h-4 w-4' }),
          },
          {
            name: 'after',
            value: 'after',
            icon: (0, a.jsx)(m.b$, { className: 'h-4 w-4' }),
          },
          {
            name: 'range',
            value: 'range',
            icon: (0, a.jsx)(g.Z, { className: 'h-4 w-4' }),
          },
        ],
        y = e => {
          var t, r;
          let { title: n, value: s, onChange: o } = e;
          return (0, a.jsx)(m.AP, {
            value: s,
            label: (0, a.jsxs)('div', {
              className: 'flex items-center gap-2 text-xs',
              children: [
                null === (t = x.find(e => e.value === s)) || void 0 === t
                  ? void 0
                  : t.icon,
                (0, a.jsxs)('span', {
                  children: [
                    n,
                    ' ',
                    null === (r = x.find(e => e.value === s)) || void 0 === r
                      ? void 0
                      : r.name,
                  ],
                }),
              ],
            }),
            onChange: o,
            children: x.map((e, t) =>
              (0, a.jsx)(
                m.AP.Option,
                {
                  value: e.value,
                  children: (0, a.jsxs)('div', {
                    className: 'flex items-center gap-2',
                    children: [
                      (0, a.jsx)('span', { children: e.icon }),
                      n,
                      ' ',
                      e.name,
                    ],
                  }),
                },
                t
              )
            ),
          });
        },
        v = {
          filterType: 'range',
          date1: new Date(),
          date2: new Date(
            new Date().getFullYear(),
            new Date().getMonth() + 1,
            new Date().getDate()
          ),
        },
        b = e => {
          let { title: t, handleClose: r, isOpen: n, onSelect: s } = e,
            {
              handleSubmit: o,
              watch: i,
              control: g,
            } = (0, d.cI)({ defaultValues: v }),
            x = (0, f._3)(i('date1')),
            b = (0, f._3)(i('date1')),
            w = 'range' === i('filterType') && !!x && !!b && x > b;
          return (0, a.jsx)(p.u.Root, {
            show: n,
            as: l.Fragment,
            children: (0, a.jsxs)(h.V, {
              as: 'div',
              className: 'relative z-20',
              onClose: r,
              children: [
                (0, a.jsx)(p.u.Child, {
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
                  className:
                    'fixed inset-0 z-20 flex w-full justify-center overflow-y-auto',
                  children: (0, a.jsx)('div', {
                    className:
                      'flex min-h-full items-center justify-center p-4 text-center sm:p-0',
                    children: (0, a.jsx)(p.u.Child, {
                      as: l.Fragment,
                      enter: 'ease-out duration-300',
                      enterFrom:
                        'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
                      enterTo: 'opacity-100 translate-y-0 sm:scale-100',
                      leave: 'ease-in duration-200',
                      leaveFrom: 'opacity-100 translate-y-0 sm:scale-100',
                      leaveTo:
                        'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
                      children: (0, a.jsx)(h.V.Panel, {
                        className:
                          'relative flex transform rounded-lg bg-custom-background-100 px-5 py-8 text-left shadow-custom-shadow-md transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6',
                        children: (0, a.jsxs)('form', {
                          className: 'space-y-4',
                          children: [
                            (0, a.jsxs)('div', {
                              className: 'flex w-full justify-between',
                              children: [
                                (0, a.jsx)(d.Qr, {
                                  control: g,
                                  name: 'filterType',
                                  render: e => {
                                    let {
                                      field: { value: r, onChange: n },
                                    } = e;
                                    return (0, a.jsx)(y, {
                                      title: t,
                                      value: r,
                                      onChange: n,
                                    });
                                  },
                                }),
                                (0, a.jsx)(u.Z, {
                                  className: 'h-4 w-4 cursor-pointer',
                                  onClick: r,
                                }),
                              ],
                            }),
                            (0, a.jsxs)('div', {
                              className: 'flex w-full justify-between gap-4',
                              children: [
                                (0, a.jsx)(d.Qr, {
                                  control: g,
                                  name: 'date1',
                                  render: e => {
                                    let {
                                        field: { value: t, onChange: r },
                                      } = e,
                                      n = (0, f._3)(t),
                                      s = (0, f._3)(i('date2'));
                                    return (0, a.jsx)(c._W, {
                                      selected: n,
                                      defaultMonth: n,
                                      onSelect: e => {
                                        e && r(e);
                                      },
                                      mode: 'single',
                                      disabled: s ? [{ after: s }] : void 0,
                                      className:
                                        'border border-custom-border-200 p-3 rounded-md',
                                    });
                                  },
                                }),
                                'range' === i('filterType') &&
                                  (0, a.jsx)(d.Qr, {
                                    control: g,
                                    name: 'date2',
                                    render: e => {
                                      let {
                                          field: { value: t, onChange: r },
                                        } = e,
                                        n = (0, f._3)(t),
                                        s = (0, f._3)(i('date1'));
                                      return (0, a.jsx)(c._W, {
                                        selected: n,
                                        defaultMonth: n,
                                        onSelect: e => {
                                          e && r(e);
                                        },
                                        mode: 'single',
                                        disabled: s ? [{ before: s }] : void 0,
                                        className:
                                          'border border-custom-border-200 p-3 rounded-md',
                                      });
                                    },
                                  }),
                              ],
                            }),
                            'range' === i('filterType') &&
                              (0, a.jsxs)('h6', {
                                className: 'flex items-center gap-1 text-xs',
                                children: [
                                  (0, a.jsx)('span', {
                                    className: 'text-custom-text-200',
                                    children: 'After:',
                                  }),
                                  (0, a.jsx)('span', {
                                    children: (0, f.ot)(i('date1')),
                                  }),
                                  (0, a.jsx)('span', {
                                    className: 'ml-1 text-custom-text-200',
                                    children: 'Before:',
                                  }),
                                  !w &&
                                    (0, a.jsx)('span', {
                                      children: (0, f.ot)(i('date2')),
                                    }),
                                ],
                              }),
                            (0, a.jsxs)('div', {
                              className: 'flex justify-end gap-4',
                              children: [
                                (0, a.jsx)(m.zx, {
                                  variant: 'neutral-primary',
                                  size: 'sm',
                                  onClick: r,
                                  children: 'Cancel',
                                }),
                                (0, a.jsx)(m.zx, {
                                  variant: 'primary',
                                  size: 'sm',
                                  type: 'button',
                                  onClick: o(e => {
                                    let {
                                      filterType: t,
                                      date1: n,
                                      date2: o,
                                    } = e;
                                    'range' === t
                                      ? s([
                                          ''.concat((0, f.ss)(n), ';after'),
                                          ''.concat((0, f.ss)(o), ';before'),
                                        ])
                                      : s([
                                          ''
                                            .concat((0, f.ss)(n), ';')
                                            .concat(t),
                                        ]),
                                      r();
                                  }),
                                  disabled: w,
                                  children: 'Apply',
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
        };
      var w = r(80986),
        k = r(6780);
      let j = { danger: w.Z },
        N = { danger: 'danger' },
        C = { danger: 'bg-red-500/20 text-red-500' },
        S = e => {
          let {
              content: t,
              handleClose: r,
              handleSubmit: n,
              hideIcon: s = !1,
              isDeleting: l,
              isOpen: c,
              position: d = o.CENTER,
              primaryButtonText: u = { loading: 'Deleting', default: 'Delete' },
              secondaryButtonText: p = 'Cancel',
              title: h,
              variant: f = 'danger',
              width: g = i.XL,
            } = e,
            x = j[f];
          return (0, a.jsxs)(er, {
            isOpen: c,
            handleClose: r,
            position: d,
            width: g,
            children: [
              (0, a.jsxs)('div', {
                className:
                  'p-5 flex flex-col sm:flex-row items-center sm:items-start gap-4',
                children: [
                  !s &&
                    (0, a.jsx)('span', {
                      className: (0, k.cn)(
                        'flex-shrink-0 grid place-items-center rounded-full size-12 sm:size-10',
                        C[f]
                      ),
                      children: (0, a.jsx)(x, {
                        className: 'size-5',
                        'aria-hidden': 'true',
                      }),
                    }),
                  (0, a.jsxs)('div', {
                    className: 'text-center sm:text-left',
                    children: [
                      (0, a.jsx)('h3', {
                        className: 'text-lg font-medium',
                        children: h,
                      }),
                      (0, a.jsx)('p', {
                        className: 'mt-1 text-sm text-custom-text-200',
                        children: t,
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)('div', {
                className:
                  'px-5 py-4 flex flex-col-reverse sm:flex-row sm:justify-end gap-2 border-t-[0.5px] border-custom-border-200',
                children: [
                  (0, a.jsx)(m.zx, {
                    variant: 'neutral-primary',
                    size: 'sm',
                    onClick: r,
                    children: p,
                  }),
                  (0, a.jsx)(m.zx, {
                    variant: N[f],
                    size: 'sm',
                    tabIndex: 1,
                    onClick: n,
                    loading: l,
                    children: l ? u.loading : u.default,
                  }),
                ],
              }),
            ],
          });
        };
      var E = r(43659),
        T = r(86677),
        A = r(30201),
        O = r(81630),
        R = r(66778),
        M = r(74371),
        I = r(70540),
        z = r(82750),
        _ = r(93997),
        L = r(10634),
        P = r(4225);
      let F = (0, E.Pi)(e => {
          var t;
          let { issue: r, delete_issue_ids: n, identifier: s } = e,
            { getStateById: o } = (0, L.eD)(),
            i = null === (t = o(r.state_id)) || void 0 === t ? void 0 : t.color;
          return (0, a.jsx)(
            R.h.Option,
            {
              as: 'div',
              value: r.id,
              className: e => {
                let { active: t } = e;
                return 'flex cursor-pointer select-none items-center justify-between rounded-md px-3 py-2 '.concat(
                  t ? 'bg-custom-background-80 text-custom-text-100' : ''
                );
              },
              children: (0, a.jsxs)('div', {
                className: 'flex items-center gap-2',
                children: [
                  (0, a.jsx)('input', {
                    type: 'checkbox',
                    checked: n,
                    readOnly: !0,
                  }),
                  (0, a.jsx)('span', {
                    className: 'block h-1.5 w-1.5 flex-shrink-0 rounded-full',
                    style: { backgroundColor: i },
                  }),
                  (0, a.jsxs)('span', {
                    className: 'flex-shrink-0 text-xs',
                    children: [s, '-', r.sequence_id],
                  }),
                  (0, a.jsx)('span', { children: r.name }),
                ],
              }),
            },
            r.id
          );
        }),
        D = new P.vq(),
        B = (0, E.Pi)(e => {
          var t, r;
          let { isOpen: n, onClose: s } = e,
            { workspaceSlug: o, projectId: i } = (0, T.useRouter)().query,
            { getProjectById: c } = (0, L.PY)(),
            {
              issues: { removeBulkIssues: u },
            } = (0, L.gk)(_.rS.PROJECT),
            [f, g] = (0, l.useState)(''),
            { data: x } = (0, A.ZP)(
              o && i && n ? (0, z.g_)(o, i) : null,
              o && i && n ? () => D.getIssues(o, i) : null
            ),
            {
              handleSubmit: y,
              watch: v,
              reset: b,
              setValue: w,
              formState: { isSubmitting: k },
            } = (0, d.cI)({ defaultValues: { delete_issue_ids: [] } }),
            j = () => {
              g(''), b(), s();
            },
            N = async e => {
              if (o && i) {
                if (!e.delete_issue_ids || 0 === e.delete_issue_ids.length) {
                  (0, m.fz)({
                    type: m.do.ERROR,
                    title: 'Error!',
                    message: 'Please select at least one issue.',
                  });
                  return;
                }
                Array.isArray(e.delete_issue_ids) ||
                  (e.delete_issue_ids = [e.delete_issue_ids]),
                  await u(o, i, e.delete_issue_ids)
                    .then(() => {
                      (0, m.fz)({
                        type: m.do.SUCCESS,
                        title: 'Success!',
                        message: 'Issues deleted successfully!',
                      }),
                        j();
                    })
                    .catch(() =>
                      (0, m.fz)({
                        type: m.do.ERROR,
                        title: 'Error!',
                        message: 'Something went wrong. Please try again.',
                      })
                    );
              }
            },
            C = c(i),
            S =
              '' === f
                ? Object.values(null != x ? x : {})
                : null !==
                      (r =
                        null === (t = Object.values(null != x ? x : {})) ||
                        void 0 === t
                          ? void 0
                          : t.filter(
                              e =>
                                e.name
                                  .toLowerCase()
                                  .includes(f.toLowerCase()) ||
                                ''
                                  .concat(
                                    null == C ? void 0 : C.identifier,
                                    '-'
                                  )
                                  .concat(e.sequence_id)
                                  .toLowerCase()
                                  .includes(f.toLowerCase())
                            )) && void 0 !== r
                  ? r
                  : [];
          return (0, a.jsx)(p.u.Root, {
            show: n,
            as: l.Fragment,
            afterLeave: () => g(''),
            appear: !0,
            children: (0, a.jsx)(h.V, {
              as: 'div',
              className: 'relative z-20',
              onClose: j,
              children: (0, a.jsx)('div', {
                className:
                  'fixed inset-0 z-20 overflow-y-auto bg-custom-backdrop p-4 transition-opacity sm:p-6 md:p-20',
                children: (0, a.jsx)(p.u.Child, {
                  as: l.Fragment,
                  enter: 'ease-out duration-300',
                  enterFrom: 'opacity-0 scale-95',
                  enterTo: 'opacity-100 scale-100',
                  leave: 'ease-in duration-200',
                  leaveFrom: 'opacity-100 scale-100',
                  leaveTo: 'opacity-0 scale-95',
                  children: (0, a.jsx)(h.V.Panel, {
                    className:
                      'relative flex w-full items-center justify-center ',
                    children: (0, a.jsx)('div', {
                      className:
                        'w-full max-w-2xl transform divide-y divide-custom-border-200 divide-opacity-10 rounded-lg bg-custom-background-100 shadow-custom-shadow-md transition-all',
                      children: (0, a.jsxs)('form', {
                        children: [
                          (0, a.jsxs)(R.h, {
                            onChange: e => {
                              let t = v('delete_issue_ids');
                              t.includes(e)
                                ? w(
                                    'delete_issue_ids',
                                    t.filter(t => t !== e)
                                  )
                                : w('delete_issue_ids', [...t, e]);
                            },
                            children: [
                              (0, a.jsxs)('div', {
                                className: 'relative m-1',
                                children: [
                                  (0, a.jsx)(O.Z, {
                                    className:
                                      'pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-custom-text-100 text-opacity-40',
                                    'aria-hidden': 'true',
                                  }),
                                  (0, a.jsx)('input', {
                                    type: 'text',
                                    className:
                                      'h-12 w-full border-0 bg-transparent pl-11 pr-4 text-custom-text-100 outline-none focus:ring-0 sm:text-sm',
                                    placeholder: 'Search...',
                                    onChange: e => g(e.target.value),
                                  }),
                                ],
                              }),
                              (0, a.jsx)(R.h.Options, {
                                static: !0,
                                className:
                                  'max-h-80 scroll-py-2 divide-y divide-custom-border-200 overflow-y-auto',
                                children:
                                  S.length > 0
                                    ? (0, a.jsxs)('li', {
                                        className: 'p-2',
                                        children: [
                                          '' === f &&
                                            (0, a.jsx)('h2', {
                                              className:
                                                'mb-2 mt-4 px-3 text-xs font-semibold text-custom-text-100',
                                              children:
                                                'Select issues to delete',
                                            }),
                                          (0, a.jsx)('ul', {
                                            className:
                                              'text-sm text-custom-text-200',
                                            children: S.map(e =>
                                              (0, a.jsx)(
                                                F,
                                                {
                                                  issue: e,
                                                  identifier:
                                                    null == C
                                                      ? void 0
                                                      : C.identifier,
                                                  delete_issue_ids: v(
                                                    'delete_issue_ids'
                                                  ).includes(e.id),
                                                },
                                                e.id
                                              )
                                            ),
                                          }),
                                        ],
                                      })
                                    : (0, a.jsx)('div', {
                                        className:
                                          'flex flex-col items-center justify-center px-3 py-8 text-center',
                                        children: (0, a.jsx)(M.ub, {
                                          type:
                                            '' === f
                                              ? I.C.ISSUE_RELATION_EMPTY_STATE
                                              : I.C
                                                  .ISSUE_RELATION_SEARCH_EMPTY_STATE,
                                          layout: 'screen-simple',
                                        }),
                                      }),
                              }),
                            ],
                          }),
                          S.length > 0 &&
                            (0, a.jsxs)('div', {
                              className:
                                'flex items-center justify-end gap-2 p-3',
                              children: [
                                (0, a.jsx)(m.zx, {
                                  variant: 'neutral-primary',
                                  size: 'sm',
                                  onClick: j,
                                  children: 'Cancel',
                                }),
                                (0, a.jsx)(m.zx, {
                                  variant: 'danger',
                                  size: 'sm',
                                  onClick: y(N),
                                  loading: k,
                                  children: k
                                    ? 'Deleting...'
                                    : 'Delete selected issues',
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
          });
        });
      var H = r(59100),
        J = r(65758),
        $ = r(18894),
        q = r(12447);
      let U = e => {
          let {
              issues: t,
              searchTerm: r,
              debouncedSearchTerm: n,
              isSearching: s,
            } = e,
            o = e =>
              (0, a.jsx)('div', {
                className:
                  'flex flex-col items-center justify-center px-3 py-8 text-center',
                children: (0, a.jsx)(M.ub, {
                  type: e,
                  layout: 'screen-simple',
                }),
              });
          return 0 !== t.length || '' === r || '' === n || s
            ? 0 === t.length
              ? o(I.C.ISSUE_RELATION_EMPTY_STATE)
              : null
            : o(I.C.ISSUE_RELATION_SEARCH_EMPTY_STATE);
        },
        V = new q.Y4(),
        Z = e => {
          let {
              workspaceSlug: t,
              projectId: r,
              isOpen: n,
              handleClose: s,
              searchParams: o,
              handleOnSubmit: i,
              workspaceLevelToggle: c = !1,
            } = e,
            [d, f] = (0, l.useState)(!1),
            [g, x] = (0, l.useState)(''),
            [y, v] = (0, l.useState)([]),
            [b, w] = (0, l.useState)([]),
            [k, j] = (0, l.useState)(!1),
            [N, C] = (0, l.useState)(!1),
            [S, E] = (0, l.useState)(!1),
            { isMobile: T } = (0, $.L)(),
            A = (0, J.Z)(g, 500),
            M = () => {
              s(), x(''), w([]), E(!1);
            },
            I = async () => {
              if (0 === b.length) {
                (0, m.fz)({
                  type: m.do.ERROR,
                  title: 'Error!',
                  message: 'Please select at least one issue.',
                });
                return;
              }
              C(!0), await i(b).finally(() => C(!1)), M();
            };
          return (
            (0, l.useEffect)(() => {
              n &&
                t &&
                r &&
                (f(!0),
                V.projectIssuesSearch(t, r, {
                  search: A,
                  ...o,
                  workspace_search: S,
                })
                  .then(e => v(e))
                  .finally(() => {
                    j(!1), f(!1);
                  }));
            }, [A, n, S, r, t]),
            (0, a.jsx)(a.Fragment, {
              children: (0, a.jsx)(p.u.Root, {
                show: n,
                as: l.Fragment,
                afterLeave: () => x(''),
                appear: !0,
                children: (0, a.jsxs)(h.V, {
                  as: 'div',
                  className: 'relative z-20',
                  onClose: M,
                  children: [
                    (0, a.jsx)(p.u.Child, {
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
                      className:
                        'fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20',
                      children: (0, a.jsx)(p.u.Child, {
                        as: l.Fragment,
                        enter: 'ease-out duration-300',
                        enterFrom: 'opacity-0 scale-95',
                        enterTo: 'opacity-100 scale-100',
                        leave: 'ease-in duration-200',
                        leaveFrom: 'opacity-100 scale-100',
                        leaveTo: 'opacity-0 scale-95',
                        children: (0, a.jsxs)(h.V.Panel, {
                          className:
                            'relative mx-auto max-w-2xl transform rounded-lg bg-custom-background-100 shadow-custom-shadow-md transition-all',
                          children: [
                            (0, a.jsxs)(R.h, {
                              as: 'div',
                              onChange: e => {
                                b.some(t => t.id === e.id)
                                  ? w(t => t.filter(t => t.id !== e.id))
                                  : w(t => [...t, e]);
                              },
                              children: [
                                (0, a.jsxs)('div', {
                                  className: 'relative m-1',
                                  children: [
                                    (0, a.jsx)(O.Z, {
                                      className:
                                        'pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-custom-text-100 text-opacity-40',
                                      'aria-hidden': 'true',
                                    }),
                                    (0, a.jsx)(R.h.Input, {
                                      className:
                                        'h-12 w-full border-0 bg-transparent pl-11 pr-4 text-sm text-custom-text-100 outline-none placeholder:text-custom-text-400 focus:ring-0',
                                      placeholder: 'Type to search...',
                                      value: g,
                                      onChange: e => x(e.target.value),
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)('div', {
                                  className:
                                    'flex flex-col-reverse gap-4 p-2 text-[0.825rem] text-custom-text-200 sm:flex-row sm:items-center sm:justify-between',
                                  children: [
                                    b.length > 0
                                      ? (0, a.jsx)('div', {
                                          className:
                                            'mt-1 flex flex-wrap items-center gap-2',
                                          children: b.map(e =>
                                            (0, a.jsxs)(
                                              'div',
                                              {
                                                className:
                                                  'flex items-center gap-1 whitespace-nowrap rounded-md border border-custom-border-200 bg-custom-background-80 py-1 pl-2 text-xs text-custom-text-100',
                                                children: [
                                                  e.project__identifier,
                                                  '-',
                                                  e.sequence_id,
                                                  (0, a.jsx)('button', {
                                                    type: 'button',
                                                    className: 'group p-1',
                                                    onClick: () =>
                                                      w(t =>
                                                        t.filter(
                                                          t => t.id !== e.id
                                                        )
                                                      ),
                                                    children: (0, a.jsx)(u.Z, {
                                                      className:
                                                        'h-3 w-3 text-custom-text-200 group-hover:text-custom-text-100',
                                                    }),
                                                  }),
                                                ],
                                              },
                                              e.id
                                            )
                                          ),
                                        })
                                      : (0, a.jsx)('div', {
                                          className:
                                            'w-min whitespace-nowrap rounded-md border border-custom-border-200 bg-custom-background-80 p-2 text-xs',
                                          children: 'No issues selected',
                                        }),
                                    c &&
                                      (0, a.jsx)(m.u, {
                                        tooltipContent:
                                          'Toggle workspace level search',
                                        isMobile: T,
                                        children: (0, a.jsxs)('div', {
                                          className:
                                            'flex flex-shrink-0 cursor-pointer items-center gap-1 text-xs '.concat(
                                              S
                                                ? 'text-custom-text-100'
                                                : 'text-custom-text-200'
                                            ),
                                          children: [
                                            (0, a.jsx)(m.Zh, {
                                              value: S,
                                              onChange: () => E(e => !e),
                                            }),
                                            (0, a.jsx)('button', {
                                              type: 'button',
                                              onClick: () => E(e => !e),
                                              className: 'flex-shrink-0',
                                              children: 'Workspace Level',
                                            }),
                                          ],
                                        }),
                                      }),
                                  ],
                                }),
                                (0, a.jsxs)(R.h.Options, {
                                  static: !0,
                                  className:
                                    'vertical-scrollbar scrollbar-md max-h-80 scroll-py-2 overflow-y-auto',
                                  children: [
                                    '' !== g &&
                                      (0, a.jsxs)('h5', {
                                        className:
                                          'mx-2 text-[0.825rem] text-custom-text-200',
                                        children: [
                                          'Search results for',
                                          ' ',
                                          (0, a.jsxs)('span', {
                                            className: 'text-custom-text-100',
                                            children: ['"', g, '"'],
                                          }),
                                          ' ',
                                          'in project:',
                                        ],
                                      }),
                                    k || d
                                      ? (0, a.jsxs)(m.aN, {
                                          className: 'space-y-3 p-3',
                                          children: [
                                            (0, a.jsx)(m.aN.Item, {
                                              height: '40px',
                                            }),
                                            (0, a.jsx)(m.aN.Item, {
                                              height: '40px',
                                            }),
                                            (0, a.jsx)(m.aN.Item, {
                                              height: '40px',
                                            }),
                                            (0, a.jsx)(m.aN.Item, {
                                              height: '40px',
                                            }),
                                          ],
                                        })
                                      : (0, a.jsx)(a.Fragment, {
                                          children:
                                            0 === y.length
                                              ? (0, a.jsx)(U, {
                                                  debouncedSearchTerm: A,
                                                  isSearching: k,
                                                  issues: y,
                                                  searchTerm: g,
                                                })
                                              : (0, a.jsx)('ul', {
                                                  className:
                                                    'text-sm text-custom-text-100 '.concat(
                                                      y.length > 0 ? 'p-2' : ''
                                                    ),
                                                  children: y.map(e => {
                                                    let r = b.some(
                                                      t => t.id === e.id
                                                    );
                                                    return (0, a.jsxs)(
                                                      R.h.Option,
                                                      {
                                                        as: 'label',
                                                        htmlFor:
                                                          'issue-'.concat(e.id),
                                                        value: e,
                                                        className: e => {
                                                          let { active: t } = e;
                                                          return 'group flex w-full cursor-pointer select-none items-center justify-between gap-2 rounded-md px-3 py-2 text-custom-text-200 '
                                                            .concat(
                                                              t
                                                                ? 'bg-custom-background-80 text-custom-text-100'
                                                                : '',
                                                              ' '
                                                            )
                                                            .concat(
                                                              r
                                                                ? 'text-custom-text-100'
                                                                : ''
                                                            );
                                                        },
                                                        children: [
                                                          (0, a.jsxs)('div', {
                                                            className:
                                                              'flex items-center gap-2',
                                                            children: [
                                                              (0, a.jsx)(
                                                                'input',
                                                                {
                                                                  type: 'checkbox',
                                                                  checked: r,
                                                                  readOnly: !0,
                                                                }
                                                              ),
                                                              (0, a.jsx)(
                                                                'span',
                                                                {
                                                                  className:
                                                                    'block h-1.5 w-1.5 flex-shrink-0 rounded-full',
                                                                  style: {
                                                                    backgroundColor:
                                                                      e.state__color,
                                                                  },
                                                                }
                                                              ),
                                                              (0, a.jsxs)(
                                                                'span',
                                                                {
                                                                  className:
                                                                    'flex-shrink-0 text-xs',
                                                                  children: [
                                                                    e.project__identifier,
                                                                    '-',
                                                                    e.sequence_id,
                                                                  ],
                                                                }
                                                              ),
                                                              e.name,
                                                            ],
                                                          }),
                                                          (0, a.jsx)('a', {
                                                            href: '/'
                                                              .concat(
                                                                t,
                                                                '/projects/'
                                                              )
                                                              .concat(
                                                                e.project_id,
                                                                '/issues/'
                                                              )
                                                              .concat(e.id),
                                                            target: '_blank',
                                                            className:
                                                              'z-1 relative hidden text-custom-text-200 hover:text-custom-text-100 group-hover:block',
                                                            rel: 'noopener noreferrer',
                                                            onClick: e =>
                                                              e.stopPropagation(),
                                                            children: (0,
                                                            a.jsx)(H.Z, {
                                                              className:
                                                                'h-4 w-4',
                                                            }),
                                                          }),
                                                        ],
                                                      },
                                                      e.id
                                                    );
                                                  }),
                                                }),
                                        }),
                                  ],
                                }),
                              ],
                            }),
                            (0, a.jsxs)('div', {
                              className:
                                'flex items-center justify-end gap-2 p-3',
                              children: [
                                (0, a.jsx)(m.zx, {
                                  variant: 'neutral-primary',
                                  size: 'sm',
                                  onClick: M,
                                  children: 'Cancel',
                                }),
                                b.length > 0 &&
                                  (0, a.jsx)(m.zx, {
                                    variant: 'primary',
                                    size: 'sm',
                                    onClick: I,
                                    loading: N,
                                    children: N
                                      ? 'Adding...'
                                      : 'Add selected issues',
                                  }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            })
          );
        };
      var W = r(69570),
        Y = r(93965),
        K = r(30640),
        G = r(67972);
      let X = new (r(82992).Y)(),
        Q = e => {
          let {
              isOpen: t,
              projectId: r,
              handleClose: n,
              onResponse: s,
              onError: o,
              placement: i,
              prompt: c,
              button: u,
              className: h = '',
            } = e,
            [f, g] = (0, l.useState)(''),
            [x, y] = (0, l.useState)(!1),
            [v, b] = (0, l.useState)(null),
            [w, k] = (0, l.useState)(null),
            j = (0, l.useRef)(null),
            N = (0, l.useRef)(null),
            { workspaceSlug: C } = (0, T.useRouter)().query,
            { styles: S, attributes: E } = (0, W.D)(v, w, {
              placement: null != i ? i : 'auto',
            }),
            {
              handleSubmit: A,
              control: O,
              reset: R,
              setFocus: M,
              formState: { isSubmitting: I },
            } = (0, d.cI)({ defaultValues: { prompt: c || '', task: '' } }),
            z = () => {
              n(), g(''), y(!1), R();
            },
            _ = e => {
              var t;
              let r =
                  null == e
                    ? void 0
                    : null === (t = e.data) || void 0 === t
                      ? void 0
                      : t.error,
                n =
                  (null == e ? void 0 : e.status) === 429
                    ? r ||
                      'You have reached the maximum number of requests of 50 requests per month per user.'
                    : r || 'Some error occurred. Please try again.';
              (0, m.fz)({ type: m.do.ERROR, title: 'Error!', message: n }),
                o && o(e);
            },
            L = async e => {
              try {
                let t = await X.createGptTask(C, r, {
                  prompt: c || '',
                  task: e.task,
                });
                g(t.response_html), M('task'), y('' === t.response);
              } catch (e) {
                _(e);
              }
            },
            P = () => {
              (0, m.fz)({
                type: m.do.ERROR,
                title: 'Error!',
                message: 'Please enter some task to get AI assistance.',
              });
            },
            F = async e => {
              if (C && r) {
                if ('' === e.task) {
                  P();
                  return;
                }
                await L(e);
              }
            };
          (0, l.useEffect)(() => {
            t && M('task');
          }, [t, M]),
            (0, l.useEffect)(() => {
              var e;
              null === (e = j.current) ||
                void 0 === e ||
                e.setEditorValue(c || '');
            }, [j, c]),
            (0, l.useEffect)(() => {
              var e;
              null === (e = N.current) ||
                void 0 === e ||
                e.setEditorValue('<p>'.concat(f, '</p>'));
            }, [f, N]),
            (0, l.useEffect)(() => {
              let e = e => {
                  'Enter' !== e.key ||
                    e.shiftKey ||
                    (e.preventDefault(), A(F)());
                },
                r = e => {
                  'Escape' === e.key && z();
                };
              return (
                t &&
                  (window.addEventListener('keydown', e),
                  window.addEventListener('keydown', r)),
                () => {
                  window.removeEventListener('keydown', e),
                    window.removeEventListener('keydown', r);
                }
              );
            }, [t, A, z]);
          let D =
              '' !== f &&
              (0, a.jsx)(m.zx, {
                variant: 'primary',
                onClick: () => {
                  s(f), z();
                },
                children: 'Use this response',
              }),
            B = I
              ? 'Generating response...'
              : '' === f
                ? 'Generate response'
                : 'Generate again';
          return (0, a.jsxs)(K.J, {
            as: 'div',
            className: 'relative w-min text-left',
            children: [
              (0, a.jsx)(K.J.Button, {
                as: l.Fragment,
                children: (0, a.jsx)('button', { ref: b, children: u }),
              }),
              (0, a.jsx)(p.u, {
                show: t,
                as: l.Fragment,
                enter: 'transition ease-out duration-100',
                enterFrom: 'transform opacity-0 scale-95',
                enterTo: 'transform opacity-100 scale-100',
                leave: 'transition ease-in duration-75',
                leaveFrom: 'transform opacity-100 scale-100',
                leaveTo: 'transform opacity-0 scale-95',
                children: (0, a.jsxs)(K.J.Panel, {
                  as: 'div',
                  className:
                    'fixed z-10 flex w-full min-w-[50rem] max-w-full flex-col space-y-4 overflow-hidden rounded-[10px] border border-custom-border-200 bg-custom-background-100 p-4 shadow '.concat(
                      h
                    ),
                  ref: k,
                  style: S.popper,
                  ...E.popper,
                  children: [
                    (0, a.jsxs)('div', {
                      className:
                        'vertical-scroll-enable max-h-72 space-y-4 overflow-y-auto',
                      children: [
                        c &&
                          (0, a.jsxs)('div', {
                            className: 'text-sm',
                            children: [
                              'Content:',
                              (0, a.jsx)(G.h, {
                                initialValue: c,
                                containerClassName: '-m-3',
                                ref: j,
                              }),
                            ],
                          }),
                        '' !== f &&
                          (0, a.jsxs)('div', {
                            className:
                              'page-block-section max-h-[8rem] text-sm',
                            children: [
                              'Response:',
                              (0, a.jsx)(G.h, {
                                initialValue: '<p>'.concat(f, '</p>'),
                                containerClassName: f ? '-mx-3 -my-3' : '',
                                ref: N,
                              }),
                            ],
                          }),
                        x &&
                          (0, a.jsx)('div', {
                            className: 'text-sm text-red-500',
                            children:
                              'No response could be generated. This may be due to insufficient content or task information. Please try again.',
                          }),
                      ],
                    }),
                    (0, a.jsx)(d.Qr, {
                      control: O,
                      name: 'task',
                      render: e => {
                        let {
                          field: { value: t, onChange: r, ref: n },
                        } = e;
                        return (0, a.jsx)(m.II, {
                          id: 'task',
                          name: 'task',
                          type: 'text',
                          value: t,
                          onChange: r,
                          ref: n,
                          placeholder: ''.concat(
                            c && '' !== c
                              ? 'Tell AI what action to perform on this content...'
                              : 'Ask AI anything...'
                          ),
                          className: 'w-full',
                          autoFocus: !0,
                        });
                      },
                    }),
                    (0, a.jsxs)('div', {
                      className: 'flex gap-2 justify-between',
                      children: [
                        D
                          ? (0, a.jsx)(a.Fragment, { children: D })
                          : (0, a.jsx)(a.Fragment, {
                              children: (0, a.jsxs)('div', {
                                className:
                                  'flex items-start justify-center gap-2 text-sm text-custom-primary',
                                children: [
                                  (0, a.jsx)(Y.Z, { className: 'h-4 w-4' }),
                                  (0, a.jsx)('p', {
                                    children:
                                      'By using this feature, you consent to sharing the message with a 3rd party service. ',
                                  }),
                                ],
                              }),
                            }),
                        (0, a.jsxs)('div', {
                          className: 'flex items-center gap-2',
                          children: [
                            (0, a.jsx)(m.zx, {
                              variant: 'neutral-primary',
                              size: 'sm',
                              onClick: z,
                              children: 'Close',
                            }),
                            (0, a.jsx)(m.zx, {
                              variant: 'primary',
                              size: 'sm',
                              onClick: A(F),
                              loading: I,
                              children: B,
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
        ee = { title: '', url: '' },
        et = e => {
          let {
              isOpen: t,
              handleClose: r,
              createIssueLink: n,
              updateIssueLink: s,
              status: o,
              data: i,
            } = e,
            {
              formState: { errors: c, isSubmitting: u },
              handleSubmit: f,
              control: g,
              reset: x,
            } = (0, d.cI)({ defaultValues: ee }),
            y = () => {
              r();
              let e = setTimeout(() => {
                x(ee), clearTimeout(e);
              }, 500);
            },
            v = async e => {
              i
                ? await s({ title: e.title, url: e.url }, i.id)
                : await n({ title: e.title, url: e.url }),
                y();
            },
            b = async e => {
              await v(e), x({ ...ee });
            };
          return (
            (0, l.useEffect)(() => {
              x({ ...ee, ...i });
            }, [i, x]),
            (0, a.jsx)(p.u.Root, {
              show: t,
              as: l.Fragment,
              children: (0, a.jsxs)(h.V, {
                as: 'div',
                className: 'relative z-20',
                onClose: y,
                children: [
                  (0, a.jsx)(p.u.Child, {
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
                    className: 'fixed inset-0 z-10 overflow-y-auto',
                    children: (0, a.jsx)('div', {
                      className:
                        'flex min-h-full items-center justify-center p-4 text-center sm:p-0',
                      children: (0, a.jsx)(p.u.Child, {
                        as: l.Fragment,
                        enter: 'ease-out duration-300',
                        enterFrom:
                          'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
                        enterTo: 'opacity-100 translate-y-0 sm:scale-100',
                        leave: 'ease-in duration-200',
                        leaveFrom: 'opacity-100 translate-y-0 sm:scale-100',
                        leaveTo:
                          'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
                        children: (0, a.jsx)(h.V.Panel, {
                          className:
                            'relative transform overflow-hidden rounded-lg bg-custom-background-100 px-5 py-8 text-left shadow-custom-shadow-md transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6',
                          children: (0, a.jsxs)('form', {
                            onSubmit: f(b),
                            children: [
                              (0, a.jsx)('div', {
                                children: (0, a.jsxs)('div', {
                                  className: 'space-y-5',
                                  children: [
                                    (0, a.jsx)(h.V.Title, {
                                      as: 'h3',
                                      className:
                                        'text-lg font-medium leading-6 text-custom-text-100',
                                      children: o ? 'Update Link' : 'Add Link',
                                    }),
                                    (0, a.jsxs)('div', {
                                      className: 'mt-2 space-y-3',
                                      children: [
                                        (0, a.jsxs)('div', {
                                          children: [
                                            (0, a.jsx)('label', {
                                              htmlFor: 'url',
                                              className:
                                                'mb-2 text-custom-text-200',
                                              children: 'URL',
                                            }),
                                            (0, a.jsx)(d.Qr, {
                                              control: g,
                                              name: 'url',
                                              rules: {
                                                required: 'URL is required',
                                              },
                                              render: e => {
                                                let {
                                                  field: {
                                                    value: t,
                                                    onChange: r,
                                                    ref: n,
                                                  },
                                                } = e;
                                                return (0, a.jsx)(m.II, {
                                                  id: 'url',
                                                  name: 'url',
                                                  type: 'url',
                                                  value: t,
                                                  onChange: r,
                                                  ref: n,
                                                  hasError: !!c.url,
                                                  placeholder: 'https://...',
                                                  pattern: '^(https?://).*',
                                                  className: 'w-full',
                                                });
                                              },
                                            }),
                                          ],
                                        }),
                                        (0, a.jsxs)('div', {
                                          children: [
                                            (0, a.jsx)('label', {
                                              htmlFor: 'title',
                                              className:
                                                'mb-2 text-custom-text-200',
                                              children: 'Title (optional)',
                                            }),
                                            (0, a.jsx)(d.Qr, {
                                              control: g,
                                              name: 'title',
                                              render: e => {
                                                let {
                                                  field: {
                                                    value: t,
                                                    onChange: r,
                                                    ref: n,
                                                  },
                                                } = e;
                                                return (0, a.jsx)(m.II, {
                                                  id: 'title',
                                                  name: 'title',
                                                  type: 'text',
                                                  value: t,
                                                  onChange: r,
                                                  ref: n,
                                                  hasError: !!c.title,
                                                  placeholder: 'Enter title',
                                                  className: 'w-full',
                                                });
                                              },
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              (0, a.jsxs)('div', {
                                className: 'mt-5 flex justify-end gap-2',
                                children: [
                                  (0, a.jsx)(m.zx, {
                                    variant: 'neutral-primary',
                                    size: 'sm',
                                    onClick: y,
                                    children: 'Cancel',
                                  }),
                                  (0, a.jsx)(m.zx, {
                                    variant: 'primary',
                                    size: 'sm',
                                    type: 'submit',
                                    loading: u,
                                    children: o
                                      ? u
                                        ? 'Updating Link...'
                                        : 'Update Link'
                                      : u
                                        ? 'Adding Link...'
                                        : 'Add Link',
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
        };
      ((n = o || (o = {})).TOP =
        'flex items-center justify-center text-center mx-4 my-10 md:my-20'),
        (n.CENTER =
          'flex items-end sm:items-center justify-center p-4 min-h-full'),
        ((s = i || (i = {})).XL = 'sm:max-w-xl'),
        (s.XXL = 'sm:max-w-2xl'),
        (s.XXXL = 'sm:max-w-3xl'),
        (s.XXXXL = 'sm:max-w-4xl');
      let er = e => {
        let {
          children: t,
          handleClose: r,
          isOpen: n,
          position:
            s = 'flex items-end sm:items-center justify-center p-4 min-h-full',
          width: o = 'sm:max-w-2xl',
        } = e;
        return (0, a.jsx)(p.u.Root, {
          show: n,
          as: l.Fragment,
          children: (0, a.jsxs)(h.V, {
            as: 'div',
            className: 'relative z-20',
            onClose: r,
            children: [
              (0, a.jsx)(p.u.Child, {
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
                  className: s,
                  children: (0, a.jsx)(p.u.Child, {
                    as: l.Fragment,
                    enter: 'ease-out duration-300',
                    enterFrom:
                      'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
                    enterTo: 'opacity-100 translate-y-0 sm:scale-100',
                    leave: 'ease-in duration-200',
                    leaveFrom: 'opacity-100 translate-y-0 sm:scale-100',
                    leaveTo:
                      'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
                    children: (0, a.jsx)(h.V.Panel, {
                      className: (0, k.cn)(
                        'relative transform rounded-lg bg-custom-background-100 text-left shadow-custom-shadow-md transition-all w-full',
                        o
                      ),
                      children: t,
                    }),
                  }),
                }),
              }),
            ],
          }),
        });
      };
      var en = r(44833),
        es = r(75437),
        eo = r(60583),
        ei = r(44029);
      let ea = new ei.I(),
        el = (0, E.Pi)(e => {
          var t;
          let {
              value: r,
              onSuccess: n,
              isOpen: s,
              onClose: o,
              isRemoving: i,
              handleDelete: c,
            } = e,
            [d, u] = (0, l.useState)(null),
            [f, g] = (0, l.useState)(!1),
            {
              config: { envConfig: x },
            } = (0, L.IX)(),
            {
              getRootProps: y,
              getInputProps: v,
              isDragActive: b,
              fileRejections: w,
            } = (0, en.uI)({
              onDrop: e => u(e[0]),
              accept: { 'image/*': ['.png', '.jpg', '.jpeg', '.svg', '.webp'] },
              maxSize:
                null !== (t = null == x ? void 0 : x.file_size_limit) &&
                void 0 !== t
                  ? t
                  : eo.T,
              multiple: !1,
            }),
            k = () => {
              u(null), g(!1), o();
            },
            j = async () => {
              if (!d) return;
              g(!0);
              let e = new FormData();
              e.append('asset', d),
                e.append('attributes', JSON.stringify({})),
                ea
                  .uploadUserFile(e)
                  .then(e => {
                    n(e.asset), u(null), r && ea.deleteUserFile(r);
                  })
                  .catch(e => {
                    var t;
                    return (0, m.fz)({
                      type: m.do.ERROR,
                      title: 'Error!',
                      message:
                        null !== (t = null == e ? void 0 : e.error) &&
                        void 0 !== t
                          ? t
                          : 'Something went wrong. Please try again.',
                    });
                  })
                  .finally(() => g(!1));
            };
          return (0, a.jsx)(p.u.Root, {
            show: s,
            as: l.Fragment,
            children: (0, a.jsxs)(h.V, {
              as: 'div',
              className: 'relative z-30',
              onClose: k,
              children: [
                (0, a.jsx)(p.u.Child, {
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
                  className: 'fixed inset-0 z-30 overflow-y-auto',
                  children: (0, a.jsx)('div', {
                    className:
                      'flex min-h-full items-center justify-center p-4 text-center sm:p-0',
                    children: (0, a.jsx)(p.u.Child, {
                      as: l.Fragment,
                      enter: 'ease-out duration-300',
                      enterFrom:
                        'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
                      enterTo: 'opacity-100 translate-y-0 sm:scale-100',
                      leave: 'ease-in duration-200',
                      leaveFrom: 'opacity-100 translate-y-0 sm:scale-100',
                      leaveTo:
                        'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
                      children: (0, a.jsxs)(h.V.Panel, {
                        className:
                          'relative transform overflow-hidden rounded-lg bg-custom-background-100 px-5 py-8 text-left shadow-custom-shadow-md transition-all sm:w-full sm:max-w-xl sm:p-6',
                        children: [
                          (0, a.jsxs)('div', {
                            className: 'space-y-5',
                            children: [
                              (0, a.jsx)(h.V.Title, {
                                as: 'h3',
                                className:
                                  'text-lg font-medium leading-6 text-custom-text-100',
                                children: 'Upload Image',
                              }),
                              (0, a.jsxs)('div', {
                                className: 'space-y-3',
                                children: [
                                  (0, a.jsx)('div', {
                                    className:
                                      'flex items-center justify-center gap-3',
                                    children: (0, a.jsxs)('div', {
                                      ...y(),
                                      className:
                                        'relative grid h-80 w-80 cursor-pointer place-items-center rounded-lg p-12 text-center focus:outline-none focus:ring-2 focus:ring-custom-primary focus:ring-offset-2 '.concat(
                                          (null === d && b) || !r
                                            ? 'border-2 border-dashed border-custom-border-200 hover:bg-custom-background-90'
                                            : ''
                                        ),
                                      children: [
                                        null !== d || (r && '' !== r)
                                          ? (0, a.jsxs)(a.Fragment, {
                                              children: [
                                                (0, a.jsx)('button', {
                                                  type: 'button',
                                                  className:
                                                    'absolute right-0 top-0 z-40 -translate-y-1/2 translate-x-1/2 rounded bg-custom-background-90 px-2 py-0.5 text-xs font-medium text-custom-text-200',
                                                  children: 'Edit',
                                                }),
                                                (0, a.jsx)('img', {
                                                  src: d
                                                    ? URL.createObjectURL(d)
                                                    : r || '',
                                                  alt: 'image',
                                                  className:
                                                    'absolute left-0 top-0 h-full w-full rounded-md object-cover',
                                                }),
                                              ],
                                            })
                                          : (0, a.jsxs)('div', {
                                              children: [
                                                (0, a.jsx)(es.Z, {
                                                  className:
                                                    'mx-auto h-16 w-16 text-custom-text-200',
                                                }),
                                                (0, a.jsx)('span', {
                                                  className:
                                                    'mt-2 block text-sm font-medium text-custom-text-200',
                                                  children: b
                                                    ? 'Drop image here to upload'
                                                    : 'Drag & drop image here',
                                                }),
                                              ],
                                            }),
                                        (0, a.jsx)('input', {
                                          ...v(),
                                          type: 'text',
                                        }),
                                      ],
                                    }),
                                  }),
                                  w.length > 0 &&
                                    (0, a.jsx)('p', {
                                      className: 'text-sm text-red-500',
                                      children:
                                        'file-too-large' === w[0].errors[0].code
                                          ? 'The image size cannot exceed 5 MB.'
                                          : 'Please upload a file in a valid format.',
                                    }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsx)('p', {
                            className: 'my-4 text-sm text-custom-text-200',
                            children:
                              'File formats supported- .jpeg, .jpg, .png, .webp, .svg',
                          }),
                          (0, a.jsxs)('div', {
                            className: 'flex items-center justify-between',
                            children: [
                              c &&
                                (0, a.jsx)(m.zx, {
                                  variant: 'danger',
                                  size: 'sm',
                                  onClick: c,
                                  disabled: !r,
                                  children: i ? 'Removing...' : 'Remove',
                                }),
                              (0, a.jsxs)('div', {
                                className: 'flex items-center gap-2',
                                children: [
                                  (0, a.jsx)(m.zx, {
                                    variant: 'neutral-primary',
                                    size: 'sm',
                                    onClick: k,
                                    children: 'Cancel',
                                  }),
                                  (0, a.jsx)(m.zx, {
                                    variant: 'primary',
                                    size: 'sm',
                                    onClick: j,
                                    disabled: !d,
                                    loading: f,
                                    children: f
                                      ? 'Uploading...'
                                      : 'Upload & Save',
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
        }),
        ec = new ei.I(),
        ed = (0, E.Pi)(e => {
          var t;
          let {
              value: r,
              onSuccess: n,
              isOpen: s,
              onClose: o,
              isRemoving: i,
              handleRemove: c,
            } = e,
            [d, u] = (0, l.useState)(null),
            [f, g] = (0, l.useState)(!1),
            x = (0, T.useRouter)(),
            { workspaceSlug: y } = x.query,
            {
              config: { envConfig: v },
            } = (0, L.IX)(),
            { currentWorkspace: b } = (0, L.cF)(),
            {
              getRootProps: w,
              getInputProps: k,
              isDragActive: j,
              fileRejections: N,
            } = (0, en.uI)({
              onDrop: e => u(e[0]),
              accept: { 'image/*': ['.png', '.jpg', '.jpeg', '.svg', '.webp'] },
              maxSize:
                null !== (t = null == v ? void 0 : v.file_size_limit) &&
                void 0 !== t
                  ? t
                  : eo.T,
              multiple: !1,
            }),
            C = () => {
              u(null), g(!1), o();
            },
            S = async () => {
              if (!d || (!y && '/onboarding' !== x.pathname)) return;
              g(!0);
              let e = new FormData();
              e.append('asset', d),
                e.append('attributes', JSON.stringify({})),
                y &&
                  ec
                    .uploadFile(y.toString(), e)
                    .then(e => {
                      n(e.asset), u(null), r && b && ec.deleteFile(b.id, r);
                    })
                    .catch(e => {
                      var t;
                      return (0, m.fz)({
                        type: m.do.ERROR,
                        title: 'Error!',
                        message:
                          null !== (t = null == e ? void 0 : e.error) &&
                          void 0 !== t
                            ? t
                            : 'Something went wrong. Please try again.',
                      });
                    })
                    .finally(() => g(!1));
            };
          return (0, a.jsx)(p.u.Root, {
            show: s,
            as: l.Fragment,
            children: (0, a.jsxs)(h.V, {
              as: 'div',
              className: 'relative z-30',
              onClose: C,
              children: [
                (0, a.jsx)(p.u.Child, {
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
                  className: 'fixed inset-0 z-30 overflow-y-auto',
                  children: (0, a.jsx)('div', {
                    className:
                      'flex min-h-full items-center justify-center p-4 text-center sm:p-0',
                    children: (0, a.jsx)(p.u.Child, {
                      as: l.Fragment,
                      enter: 'ease-out duration-300',
                      enterFrom:
                        'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
                      enterTo: 'opacity-100 translate-y-0 sm:scale-100',
                      leave: 'ease-in duration-200',
                      leaveFrom: 'opacity-100 translate-y-0 sm:scale-100',
                      leaveTo:
                        'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
                      children: (0, a.jsxs)(h.V.Panel, {
                        className:
                          'relative transform overflow-hidden rounded-lg bg-custom-background-100 px-5 py-8 text-left shadow-custom-shadow-md transition-all sm:w-full sm:max-w-xl sm:p-6',
                        children: [
                          (0, a.jsxs)('div', {
                            className: 'space-y-5',
                            children: [
                              (0, a.jsx)(h.V.Title, {
                                as: 'h3',
                                className:
                                  'text-lg font-medium leading-6 text-custom-text-100',
                                children: 'Upload Image',
                              }),
                              (0, a.jsxs)('div', {
                                className: 'space-y-3',
                                children: [
                                  (0, a.jsx)('div', {
                                    className:
                                      'flex items-center justify-center gap-3',
                                    children: (0, a.jsxs)('div', {
                                      ...w(),
                                      className:
                                        'relative grid h-80 w-80 cursor-pointer place-items-center rounded-lg p-12 text-center focus:outline-none focus:ring-2 focus:ring-custom-primary focus:ring-offset-2 '.concat(
                                          (null === d && j) || !r
                                            ? 'border-2 border-dashed border-custom-border-200 hover:bg-custom-background-90'
                                            : ''
                                        ),
                                      children: [
                                        null !== d || (r && '' !== r)
                                          ? (0, a.jsxs)(a.Fragment, {
                                              children: [
                                                (0, a.jsx)('button', {
                                                  type: 'button',
                                                  className:
                                                    'absolute right-0 top-0 z-40 -translate-y-1/2 translate-x-1/2 rounded bg-custom-background-90 px-2 py-0.5 text-xs font-medium text-custom-text-200',
                                                  children: 'Edit',
                                                }),
                                                (0, a.jsx)('img', {
                                                  src: d
                                                    ? URL.createObjectURL(d)
                                                    : r || '',
                                                  alt: 'image',
                                                  className:
                                                    'absolute left-0 top-0 h-full w-full rounded-md object-cover',
                                                }),
                                              ],
                                            })
                                          : (0, a.jsxs)('div', {
                                              children: [
                                                (0, a.jsx)(es.Z, {
                                                  className:
                                                    'mx-auto h-16 w-16 text-custom-text-200',
                                                }),
                                                (0, a.jsx)('span', {
                                                  className:
                                                    'mt-2 block text-sm font-medium text-custom-text-200',
                                                  children: j
                                                    ? 'Drop image here to upload'
                                                    : 'Drag & drop image here',
                                                }),
                                              ],
                                            }),
                                        (0, a.jsx)('input', {
                                          ...k(),
                                          type: 'text',
                                        }),
                                      ],
                                    }),
                                  }),
                                  N.length > 0 &&
                                    (0, a.jsx)('p', {
                                      className: 'text-sm text-red-500',
                                      children:
                                        'file-too-large' === N[0].errors[0].code
                                          ? 'The image size cannot exceed 5 MB.'
                                          : 'Please upload a file in a valid format.',
                                    }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsx)('p', {
                            className: 'my-4 text-sm text-custom-text-200',
                            children:
                              'File formats supported- .jpeg, .jpg, .png, .webp, .svg',
                          }),
                          (0, a.jsxs)('div', {
                            className: 'flex items-center justify-between',
                            children: [
                              c &&
                                (0, a.jsx)(m.zx, {
                                  variant: 'danger',
                                  size: 'sm',
                                  onClick: c,
                                  disabled: !r,
                                  children: i ? 'Removing...' : 'Remove',
                                }),
                              (0, a.jsxs)('div', {
                                className: 'flex items-center gap-2',
                                children: [
                                  (0, a.jsx)(m.zx, {
                                    variant: 'neutral-primary',
                                    size: 'sm',
                                    onClick: C,
                                    children: 'Cancel',
                                  }),
                                  (0, a.jsx)(m.zx, {
                                    variant: 'primary',
                                    size: 'sm',
                                    onClick: S,
                                    disabled: !d,
                                    loading: f,
                                    children: f
                                      ? 'Uploading...'
                                      : 'Upload & Save',
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
        });
      var eu = r(50649),
        ep = r(3515),
        eh = r(62468),
        em = r(37969),
        ef = r(54129);
      let eg = (0, eu.Pi)(e => {
        let {
            moduleId: t,
            handleDeleteLink: r,
            handleEditLink: n,
            userAuth: s,
            disabled: o,
          } = e,
          { getUserDetails: i } = (0, L.Kb)(),
          { isMobile: l } = (0, $.L)(),
          { getModuleById: c } = (0, L.b7)(),
          d = c(t),
          u = (null == d ? void 0 : d.link_module) || void 0,
          p = s.isGuest || s.isViewer || o,
          h = e => {
            navigator.clipboard.writeText(e),
              (0, m.fz)({
                type: m.do.SUCCESS,
                title: 'Copied to clipboard',
                message:
                  'The URL has been successfully copied to your clipboard',
              });
          };
        return u
          ? (0, a.jsx)(a.Fragment, {
              children: u.map(e => {
                let t = i(e.created_by);
                return (0, a.jsxs)(
                  'div',
                  {
                    className:
                      'relative flex flex-col rounded-md bg-custom-background-90 p-2.5',
                    children: [
                      (0, a.jsxs)('div', {
                        className:
                          'flex w-full items-start justify-between gap-2',
                        children: [
                          (0, a.jsxs)('div', {
                            className: 'flex items-start gap-2 truncate',
                            children: [
                              (0, a.jsx)('span', {
                                className: 'py-1',
                                children: (0, a.jsx)(ep.Z, {
                                  className: 'h-3 w-3 flex-shrink-0',
                                }),
                              }),
                              (0, a.jsx)(m.u, {
                                tooltipContent:
                                  e.title && '' !== e.title ? e.title : e.url,
                                isMobile: l,
                                children: (0, a.jsx)('span', {
                                  className: 'cursor-pointer truncate text-xs',
                                  onClick: () =>
                                    h(
                                      e.title && '' !== e.title
                                        ? e.title
                                        : e.url
                                    ),
                                  children:
                                    e.title && '' !== e.title ? e.title : e.url,
                                }),
                              }),
                            ],
                          }),
                          !p &&
                            (0, a.jsxs)('div', {
                              className:
                                'z-[1] flex flex-shrink-0 items-center gap-2',
                              children: [
                                (0, a.jsx)('button', {
                                  type: 'button',
                                  className:
                                    'flex items-center justify-center p-1 hover:bg-custom-background-80',
                                  onClick: t => {
                                    t.preventDefault(),
                                      t.stopPropagation(),
                                      n(e);
                                  },
                                  children: (0, a.jsx)(eh.Z, {
                                    className:
                                      'h-3 w-3 stroke-[1.5] text-custom-text-200',
                                  }),
                                }),
                                (0, a.jsx)('a', {
                                  href: e.url,
                                  target: '_blank',
                                  rel: 'noopener noreferrer',
                                  className:
                                    'flex items-center justify-center p-1 hover:bg-custom-background-80',
                                  children: (0, a.jsx)(em.Z, {
                                    className:
                                      'h-3 w-3 stroke-[1.5] text-custom-text-200',
                                  }),
                                }),
                                (0, a.jsx)('button', {
                                  type: 'button',
                                  className:
                                    'flex items-center justify-center p-1 hover:bg-custom-background-80',
                                  onClick: t => {
                                    t.preventDefault(),
                                      t.stopPropagation(),
                                      r(e.id);
                                  },
                                  children: (0, a.jsx)(ef.Z, {
                                    className: 'h-3 w-3',
                                  }),
                                }),
                              ],
                            }),
                        ],
                      }),
                      (0, a.jsx)('div', {
                        className: 'px-5',
                        children: (0, a.jsxs)('p', {
                          className:
                            'mt-0.5 stroke-[1.5] text-xs text-custom-text-300',
                          children: [
                            'Added ',
                            (0, f.KI)(e.created_at),
                            (0, a.jsx)('br', {}),
                            t &&
                              (0, a.jsxs)(a.Fragment, {
                                children: [
                                  'by',
                                  ' ',
                                  (null == t ? void 0 : t.is_bot)
                                    ? (null == t ? void 0 : t.first_name) +
                                      ' Bot'
                                    : null == t
                                      ? void 0
                                      : t.display_name,
                                ],
                              }),
                          ],
                        }),
                      }),
                    ],
                  },
                  e.id
                );
              }),
            })
          : (0, a.jsx)(a.Fragment, {});
      });
      var ex = r(38579),
        ey = r.n(ex),
        ev = r(12625),
        eb = r(15108),
        ew = {
          src: '/_next/static/media/empty_label.877ba5e2.svg',
          height: 40,
          width: 40,
          blurWidth: 0,
          blurHeight: 0,
        },
        ek = {
          src: '/_next/static/media/empty_members.4a1722f8.svg',
          height: 48,
          width: 48,
          blurWidth: 0,
          blurHeight: 0,
        };
      let ej = e => {
          let {
              distribution: t,
              groupedIssues: r,
              totalIssues: n,
              module: s,
              roundedTab: o,
              noBackground: i,
              isPeekView: l = !1,
              isCompleted: c = !1,
              filters: d,
              handleFiltersUpdate: u,
            } = e,
            { storedValue: p, setValue: h } = (0, eb.Z)('tab', 'Assignees');
          return (0, a.jsxs)(ev.O.Group, {
            defaultIndex: (e => {
              switch (e) {
                case 'Assignees':
                default:
                  return 0;
                case 'Labels':
                  return 1;
                case 'States':
                  return 2;
              }
            })(p),
            onChange: e => {
              switch (e) {
                case 0:
                default:
                  return h('Assignees');
                case 1:
                  return h('Labels');
                case 2:
                  return h('States');
              }
            },
            children: [
              (0, a.jsxs)(ev.O.List, {
                as: 'div',
                className:
                  'flex w-full items-center justify-between gap-2 rounded-md '
                    .concat(
                      i ? '' : 'bg-custom-background-90',
                      ' p-0.5\n        '
                    )
                    .concat(s ? 'text-xs' : 'text-sm'),
                children: [
                  (0, a.jsx)(ev.O, {
                    className: e => {
                      let { selected: t } = e;
                      return 'w-full  '
                        .concat(
                          o
                            ? 'rounded-3xl border border-custom-border-200'
                            : 'rounded',
                          ' px-3 py-1 text-custom-text-100 '
                        )
                        .concat(
                          t
                            ? 'bg-custom-background-100 text-custom-text-300 shadow-custom-shadow-2xs'
                            : 'text-custom-text-400 hover:text-custom-text-300'
                        );
                    },
                    children: 'Assignees',
                  }),
                  (0, a.jsx)(ev.O, {
                    className: e => {
                      let { selected: t } = e;
                      return 'w-full '
                        .concat(
                          o
                            ? 'rounded-3xl border border-custom-border-200'
                            : 'rounded',
                          ' px-3 py-1 text-custom-text-100 '
                        )
                        .concat(
                          t
                            ? 'bg-custom-background-100 text-custom-text-300 shadow-custom-shadow-2xs'
                            : 'text-custom-text-400 hover:text-custom-text-300'
                        );
                    },
                    children: 'Labels',
                  }),
                  (0, a.jsx)(ev.O, {
                    className: e => {
                      let { selected: t } = e;
                      return 'w-full '
                        .concat(
                          o
                            ? 'rounded-3xl border border-custom-border-200'
                            : 'rounded',
                          ' px-3 py-1  text-custom-text-100 '
                        )
                        .concat(
                          t
                            ? 'bg-custom-background-100 text-custom-text-300 shadow-custom-shadow-2xs'
                            : 'text-custom-text-400 hover:text-custom-text-300'
                        );
                    },
                    children: 'States',
                  }),
                ],
              }),
              (0, a.jsxs)(ev.O.Panels, {
                className:
                  'flex w-full items-center justify-between text-custom-text-200',
                children: [
                  (0, a.jsx)(ev.O.Panel, {
                    as: 'div',
                    className:
                      'flex w-full flex-col gap-1.5 overflow-y-auto pt-3.5 vertical-scrollbar scrollbar-sm',
                    children:
                      t && (null == t ? void 0 : t.assignees.length) > 0
                        ? t.assignees.map((e, t) => {
                            var r, n, s, o, i, p;
                            return e.assignee_id
                              ? (0, a.jsx)(
                                  eN,
                                  {
                                    title: (0, a.jsxs)('div', {
                                      className: 'flex items-center gap-2',
                                      children: [
                                        (0, a.jsx)(m.qE, {
                                          name:
                                            null !==
                                              (s =
                                                null == e
                                                  ? void 0
                                                  : e.display_name) &&
                                            void 0 !== s
                                              ? s
                                              : void 0,
                                          src:
                                            null !==
                                              (o =
                                                null == e
                                                  ? void 0
                                                  : e.avatar) && void 0 !== o
                                              ? o
                                              : void 0,
                                        }),
                                        (0, a.jsx)('span', {
                                          children:
                                            null !==
                                              (i =
                                                null == e
                                                  ? void 0
                                                  : e.display_name) &&
                                            void 0 !== i
                                              ? i
                                              : '',
                                        }),
                                      ],
                                    }),
                                    completed: e.completed_issues,
                                    total: e.total_issues,
                                    ...(!l &&
                                      !c && {
                                        onClick: () => {
                                          var t;
                                          return u(
                                            'assignees',
                                            null !== (t = e.assignee_id) &&
                                              void 0 !== t
                                              ? t
                                              : ''
                                          );
                                        },
                                        selected:
                                          null == d
                                            ? void 0
                                            : null === (n = d.filters) ||
                                                void 0 === n
                                              ? void 0
                                              : null === (r = n.assignees) ||
                                                  void 0 === r
                                                ? void 0
                                                : r.includes(
                                                    null !==
                                                      (p = e.assignee_id) &&
                                                      void 0 !== p
                                                      ? p
                                                      : ''
                                                  ),
                                      }),
                                  },
                                  e.assignee_id
                                )
                              : (0, a.jsx)(
                                  eN,
                                  {
                                    title: (0, a.jsxs)('div', {
                                      className: 'flex items-center gap-2',
                                      children: [
                                        (0, a.jsx)('div', {
                                          className:
                                            'h-4 w-4 rounded-full border-2 border-custom-border-200 bg-custom-background-80',
                                          children: (0, a.jsx)('img', {
                                            src: '/user.png',
                                            height: '100%',
                                            width: '100%',
                                            className: 'rounded-full',
                                            alt: 'User',
                                          }),
                                        }),
                                        (0, a.jsx)('span', {
                                          children: 'No assignee',
                                        }),
                                      ],
                                    }),
                                    completed: e.completed_issues,
                                    total: e.total_issues,
                                  },
                                  'unassigned-'.concat(t)
                                );
                          })
                        : (0, a.jsxs)('div', {
                            className:
                              'flex h-full flex-col items-center justify-center gap-2',
                            children: [
                              (0, a.jsx)('div', {
                                className:
                                  'flex h-20 w-20 items-center justify-center rounded-full bg-custom-background-80',
                                children: (0, a.jsx)(ey(), {
                                  src: ek,
                                  className: 'h-12 w-12',
                                  alt: 'empty members',
                                }),
                              }),
                              (0, a.jsx)('h6', {
                                className: 'text-base text-custom-text-300',
                                children: 'No assignees yet',
                              }),
                            ],
                          }),
                  }),
                  (0, a.jsx)(ev.O.Panel, {
                    as: 'div',
                    className:
                      'flex w-full flex-col gap-1.5 overflow-y-auto pt-3.5 vertical-scrollbar scrollbar-sm',
                    children:
                      t && (null == t ? void 0 : t.labels.length) > 0
                        ? t.labels.map((e, t) => {
                            var r, n, s, o, i, p, h;
                            return e.label_id
                              ? (0, a.jsx)(
                                  eN,
                                  {
                                    title: (0, a.jsxs)('div', {
                                      className: 'flex items-center gap-2',
                                      children: [
                                        (0, a.jsx)('span', {
                                          className:
                                            'block h-3 w-3 rounded-full',
                                          style: {
                                            backgroundColor:
                                              null !== (s = e.color) &&
                                              void 0 !== s
                                                ? s
                                                : 'transparent',
                                          },
                                        }),
                                        (0, a.jsx)('span', {
                                          className: 'text-xs',
                                          children:
                                            null !== (o = e.label_name) &&
                                            void 0 !== o
                                              ? o
                                              : 'No labels',
                                        }),
                                      ],
                                    }),
                                    completed: e.completed_issues,
                                    total: e.total_issues,
                                    ...(!l &&
                                      !c && {
                                        onClick: () => {
                                          var t;
                                          return u(
                                            'labels',
                                            null !== (t = e.label_id) &&
                                              void 0 !== t
                                              ? t
                                              : ''
                                          );
                                        },
                                        selected:
                                          null == d
                                            ? void 0
                                            : null === (n = d.filters) ||
                                                void 0 === n
                                              ? void 0
                                              : null === (r = n.labels) ||
                                                  void 0 === r
                                                ? void 0
                                                : r.includes(
                                                    null !== (i = e.label_id) &&
                                                      void 0 !== i
                                                      ? i
                                                      : 'no-label-'.concat(t)
                                                  ),
                                      }),
                                  },
                                  e.label_id
                                )
                              : (0, a.jsx)(
                                  eN,
                                  {
                                    title: (0, a.jsxs)('div', {
                                      className: 'flex items-center gap-2',
                                      children: [
                                        (0, a.jsx)('span', {
                                          className:
                                            'block h-3 w-3 rounded-full',
                                          style: {
                                            backgroundColor:
                                              null !== (p = e.color) &&
                                              void 0 !== p
                                                ? p
                                                : 'transparent',
                                          },
                                        }),
                                        (0, a.jsx)('span', {
                                          className: 'text-xs',
                                          children:
                                            null !== (h = e.label_name) &&
                                            void 0 !== h
                                              ? h
                                              : 'No labels',
                                        }),
                                      ],
                                    }),
                                    completed: e.completed_issues,
                                    total: e.total_issues,
                                  },
                                  'no-label-'.concat(t)
                                );
                          })
                        : (0, a.jsxs)('div', {
                            className:
                              'flex h-full flex-col items-center justify-center gap-2',
                            children: [
                              (0, a.jsx)('div', {
                                className:
                                  'flex h-20 w-20 items-center justify-center rounded-full bg-custom-background-80',
                                children: (0, a.jsx)(ey(), {
                                  src: ew,
                                  className: 'h-12 w-12',
                                  alt: 'empty label',
                                }),
                              }),
                              (0, a.jsx)('h6', {
                                className: 'text-base text-custom-text-300',
                                children: 'No labels yet',
                              }),
                            ],
                          }),
                  }),
                  (0, a.jsx)(ev.O.Panel, {
                    as: 'div',
                    className:
                      'flex w-full flex-col gap-1.5 overflow-y-auto pt-3.5 vertical-scrollbar scrollbar-sm',
                    children: Object.keys(r).map((e, t) =>
                      (0, a.jsx)(
                        eN,
                        {
                          title: (0, a.jsxs)('div', {
                            className: 'flex items-center gap-2',
                            children: [
                              (0, a.jsx)(m.b_, { stateGroup: e }),
                              (0, a.jsx)('span', {
                                className: 'text-xs capitalize',
                                children: e,
                              }),
                            ],
                          }),
                          completed: r[e],
                          total: n,
                        },
                        t
                      )
                    ),
                  }),
                ],
              }),
            ],
          });
        },
        eN = e => {
          let {
            title: t,
            completed: r,
            total: n,
            onClick: s,
            selected: o = !1,
          } = e;
          return (0, a.jsxs)('div', {
            className:
              'flex w-full items-center justify-between gap-4 rounded-sm p-1 text-xs '
                .concat(
                  s ? 'cursor-pointer hover:bg-custom-background-90' : '',
                  ' '
                )
                .concat(o ? 'bg-custom-background-90' : ''),
            onClick: s,
            children: [
              (0, a.jsx)('div', { className: 'w-1/2', children: t }),
              (0, a.jsxs)('div', {
                className: 'flex w-1/2 items-center justify-end gap-1 px-2',
                children: [
                  (0, a.jsx)('div', {
                    className: 'flex h-5 items-center justify-center gap-1',
                    children: (0, a.jsxs)('span', {
                      className: 'w-8 text-right',
                      children: [
                        isNaN(Math.round((r / n) * 100))
                          ? '0'
                          : Math.round((r / n) * 100),
                        '%',
                      ],
                    }),
                  }),
                  (0, a.jsxs)('span', { children: ['of ', n] }),
                ],
              }),
            ],
          });
        };
      var eC = r(75289),
        eS = r(61529),
        eE = r(95232),
        eT = r(71561),
        eA = r(73470),
        eO = r(77970),
        eR = r(17789),
        eM = r(88287),
        eI = r(84757),
        ez = r(21973),
        e_ = r(14820),
        eL = r(97151),
        eP = r(17901),
        eF = r(27943),
        eD = r(10712);
      let eB = e => {
          var t, r;
          let { activity: n } = e,
            { workspaceSlug: s } = (0, T.useRouter)().query,
            { isMobile: o } = (0, $.L)();
          return (0, a.jsx)(m.u, {
            tooltipContent: (null == n ? void 0 : n.issue_detail)
              ? n.issue_detail.name
              : 'This issue has been deleted',
            isMobile: o,
            children: (null == n ? void 0 : n.issue_detail)
              ? (0, a.jsxs)('a', {
                  'aria-disabled': null === n.issue,
                  href: ''.concat(
                    '/'
                      .concat(
                        null != s
                          ? s
                          : null === (t = n.workspace_detail) || void 0 === t
                            ? void 0
                            : t.slug,
                        '/projects/'
                      )
                      .concat(n.project, '/issues/')
                      .concat(n.issue)
                  ),
                  target: null === n.issue ? '_self' : '_blank',
                  rel: null === n.issue ? '' : 'noopener noreferrer',
                  className:
                    'inline items-center gap-1 font-medium text-custom-text-100 hover:underline',
                  children: [
                    (0, a.jsx)('span', {
                      className: 'whitespace-nowrap',
                      children: ''
                        .concat(n.project_detail.identifier, '-')
                        .concat(n.issue_detail.sequence_id),
                    }),
                    ' ',
                    (0, a.jsx)('span', {
                      className: 'font-normal break-all',
                      children:
                        null === (r = n.issue_detail) || void 0 === r
                          ? void 0
                          : r.name,
                    }),
                  ],
                })
              : (0, a.jsxs)('span', {
                  className:
                    'inline-flex items-center gap-1 font-medium text-custom-text-100 whitespace-nowrap',
                  children: [' an Issue', ' '],
                }),
          });
        },
        eH = e => {
          var t, r;
          let { activity: n } = e,
            { workspaceSlug: s } = (0, T.useRouter)().query;
          return (0, a.jsx)('a', {
            href: '/'
              .concat(
                null != s
                  ? s
                  : null === (t = n.workspace_detail) || void 0 === t
                    ? void 0
                    : t.slug,
                '/profile/'
              )
              .concat(
                null !== (r = n.new_identifier) && void 0 !== r
                  ? r
                  : n.old_identifier
              ),
            target: '_blank',
            rel: 'noopener noreferrer',
            className:
              'inline-flex items-center font-medium text-custom-text-100 hover:underline',
            children:
              n.new_value && '' !== n.new_value ? n.new_value : n.old_value,
          });
        },
        eJ = (0, E.Pi)(e => {
          var t, r;
          let { labelId: n, workspaceSlug: s } = e,
            { workspaceLabels: o, fetchWorkspaceLabels: i } = (0, L.NP)();
          return (
            (0, l.useEffect)(() => {
              o || i(s);
            }, [i, o, s]),
            (0, a.jsx)('span', {
              className: 'h-1.5 w-1.5 flex-shrink-0 rounded-full',
              style: {
                backgroundColor:
                  null !==
                    (r =
                      null == o
                        ? void 0
                        : null === (t = o.find(e => e.id === n)) || void 0 === t
                          ? void 0
                          : t.color) && void 0 !== r
                    ? r
                    : '#000000',
              },
              'aria-hidden': 'true',
            })
          );
        }),
        e$ = (0, E.Pi)(e => {
          let { point: t } = e,
            {
              areEstimatesEnabledForCurrentProject: r,
              getEstimatePointValue: n,
            } = (0, L.ZT)(),
            s = Number(t) + 1,
            o = n(Number(t), null);
          return (0, a.jsx)('span', {
            className: 'font-medium text-custom-text-100 whitespace-nowrap',
            children: r
              ? o
              : ''.concat(s, ' ').concat(s > 1 ? 'points' : 'point'),
          });
        }),
        eq = {
          declined: {
            showIssue: 'declined issue',
            noIssue: 'declined this issue from inbox.',
          },
          snoozed: {
            showIssue: 'snoozed issue',
            noIssue: 'snoozed this issue.',
          },
          accepted: {
            showIssue: 'accepted issue',
            noIssue: 'accepted this issue from inbox.',
          },
          markedDuplicate: {
            showIssue: 'declined issue',
            noIssue:
              'declined this issue from inbox by marking a duplicate issue.',
          },
        },
        eU = (e, t) => {
          switch (e.verb) {
            case '-1':
              return t ? eq.declined.showIssue : eq.declined.noIssue;
            case '0':
              return t ? eq.snoozed.showIssue : eq.snoozed.noIssue;
            case '1':
              return t ? eq.accepted.showIssue : eq.accepted.noIssue;
            case '2':
              return t
                ? eq.markedDuplicate.showIssue
                : eq.markedDuplicate.noIssue;
            default:
              return 'updated inbox issue status.';
          }
        },
        eV = {
          assignees: {
            message: (e, t) =>
              '' === e.old_value
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      'added a new assignee ',
                      (0, a.jsx)(eH, { activity: e }),
                      t &&
                        (0, a.jsxs)(a.Fragment, {
                          children: [
                            ' ',
                            'to ',
                            (0, a.jsx)(eB, { activity: e }),
                          ],
                        }),
                    ],
                  })
                : (0, a.jsxs)(a.Fragment, {
                    children: [
                      'removed the assignee ',
                      (0, a.jsx)(eH, { activity: e }),
                      t &&
                        (0, a.jsxs)(a.Fragment, {
                          children: [
                            ' ',
                            'from ',
                            (0, a.jsx)(eB, { activity: e }),
                          ],
                        }),
                    ],
                  }),
            icon: (0, a.jsx)(eC.Z, {
              size: 12,
              color: '#6b7280',
              'aria-hidden': 'true',
            }),
          },
          archived_at: {
            message: e =>
              'restore' === e.new_value
                ? (0, a.jsxs)(a.Fragment, {
                    children: ['restored ', (0, a.jsx)(eB, { activity: e })],
                  })
                : (0, a.jsxs)(a.Fragment, {
                    children: ['archived ', (0, a.jsx)(eB, { activity: e })],
                  }),
            icon: (0, a.jsx)(eS.Z, {
              size: 12,
              color: '#6b7280',
              'aria-hidden': 'true',
            }),
          },
          attachment: {
            message: (e, t) =>
              'created' === e.verb
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      'uploaded a new',
                      ' ',
                      (0, a.jsx)('a', {
                        href: ''.concat(e.new_value),
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        className:
                          'inline-flex items-center gap-1 font-medium text-custom-text-100 hover:underline',
                        children: 'attachment',
                      }),
                      t &&
                        (0, a.jsxs)(a.Fragment, {
                          children: [
                            ' ',
                            'to ',
                            (0, a.jsx)(eB, { activity: e }),
                          ],
                        }),
                    ],
                  })
                : (0, a.jsxs)(a.Fragment, {
                    children: [
                      'removed an attachment',
                      t &&
                        (0, a.jsxs)(a.Fragment, {
                          children: [
                            ' ',
                            'from ',
                            (0, a.jsx)(eB, { activity: e }),
                          ],
                        }),
                    ],
                  }),
            icon: (0, a.jsx)(eE.Z, {
              size: 12,
              color: '#6b7280',
              'aria-hidden': 'true',
            }),
          },
          description: {
            message: (e, t) =>
              (0, a.jsxs)(a.Fragment, {
                children: [
                  'updated the description',
                  t &&
                    (0, a.jsxs)(a.Fragment, {
                      children: [' ', 'of ', (0, a.jsx)(eB, { activity: e })],
                    }),
                ],
              }),
            icon: (0, a.jsx)(eT.Z, {
              size: 12,
              color: '#6b7280',
              'aria-hidden': 'true',
            }),
          },
          estimate_point: {
            message: (e, t) =>
              e.new_value
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      'set the estimate point to ',
                      (0, a.jsx)(e$, { point: e.new_value }),
                      t &&
                        (0, a.jsxs)(a.Fragment, {
                          children: [
                            ' ',
                            'for ',
                            (0, a.jsx)(eB, { activity: e }),
                          ],
                        }),
                    ],
                  })
                : (0, a.jsxs)(a.Fragment, {
                    children: [
                      'removed the estimate point',
                      t &&
                        (0, a.jsxs)(a.Fragment, {
                          children: [
                            ' ',
                            'from ',
                            (0, a.jsx)(eB, { activity: e }),
                          ],
                        }),
                    ],
                  }),
            icon: (0, a.jsx)(eA.Z, {
              size: 12,
              color: '#6b7280',
              'aria-hidden': 'true',
            }),
          },
          issue: {
            message: e =>
              'created' === e.verb
                ? (0, a.jsxs)(a.Fragment, {
                    children: ['created ', (0, a.jsx)(eB, { activity: e })],
                  })
                : (0, a.jsxs)(a.Fragment, {
                    children: ['deleted ', (0, a.jsx)(eB, { activity: e })],
                  }),
            icon: (0, a.jsx)(m.uQ, {
              width: 12,
              height: 12,
              color: '#6b7280',
              'aria-hidden': 'true',
            }),
          },
          labels: {
            message: (e, t, r) => {
              var n, s;
              return '' === e.old_value
                ? (0, a.jsxs)('span', {
                    className: 'overflow-hidden',
                    children: [
                      'added a new label',
                      ' ',
                      (0, a.jsxs)('span', {
                        className:
                          'inline-flex items-center gap-2 rounded-full border border-custom-border-300 px-2 py-0.5 text-xs',
                        children: [
                          (0, a.jsx)(eJ, {
                            labelId:
                              null !== (n = e.new_identifier) && void 0 !== n
                                ? n
                                : '',
                            workspaceSlug: r,
                          }),
                          (0, a.jsx)('span', {
                            className:
                              'flex-shrink font-medium text-custom-text-100 break-all line-clamp-1',
                            children: e.new_value,
                          }),
                        ],
                      }),
                      t &&
                        (0, a.jsxs)('span', {
                          className: '',
                          children: [
                            ' ',
                            'to ',
                            (0, a.jsx)(eB, { activity: e }),
                          ],
                        }),
                    ],
                  })
                : (0, a.jsxs)(a.Fragment, {
                    children: [
                      'removed the label',
                      ' ',
                      (0, a.jsxs)('span', {
                        className:
                          'inline-flex items-center gap-2 rounded-full border border-custom-border-300 px-2 py-0.5 text-xs',
                        children: [
                          (0, a.jsx)(eJ, {
                            labelId:
                              null !== (s = e.old_identifier) && void 0 !== s
                                ? s
                                : '',
                            workspaceSlug: r,
                          }),
                          (0, a.jsx)('span', {
                            className:
                              'flex-shrink font-medium text-custom-text-100 break-all line-clamp-1',
                            children: e.old_value,
                          }),
                        ],
                      }),
                      t &&
                        (0, a.jsxs)('span', {
                          children: [
                            ' ',
                            'from ',
                            (0, a.jsx)(eB, { activity: e }),
                          ],
                        }),
                    ],
                  });
            },
            icon: (0, a.jsx)(eO.Z, {
              size: 12,
              color: '#6b7280',
              'aria-hidden': 'true',
            }),
          },
          link: {
            message: (e, t) =>
              'created' === e.verb
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      'added this',
                      ' ',
                      (0, a.jsx)('a', {
                        href: ''.concat(e.new_value),
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        className:
                          'inline-flex items-center gap-1 font-medium text-custom-text-100 hover:underline',
                        children: 'link',
                      }),
                      t &&
                        (0, a.jsxs)(a.Fragment, {
                          children: [
                            ' ',
                            'to ',
                            (0, a.jsx)(eB, { activity: e }),
                          ],
                        }),
                    ],
                  })
                : 'updated' === e.verb
                  ? (0, a.jsxs)(a.Fragment, {
                      children: [
                        'updated the',
                        ' ',
                        (0, a.jsx)('a', {
                          href: ''.concat(e.old_value),
                          target: '_blank',
                          rel: 'noopener noreferrer',
                          className:
                            'inline-flex items-center gap-1 font-medium text-custom-text-100 hover:underline',
                          children: 'link',
                        }),
                        t &&
                          (0, a.jsxs)(a.Fragment, {
                            children: [
                              ' ',
                              'from ',
                              (0, a.jsx)(eB, { activity: e }),
                            ],
                          }),
                      ],
                    })
                  : (0, a.jsxs)(a.Fragment, {
                      children: [
                        'removed this',
                        ' ',
                        (0, a.jsx)('a', {
                          href: ''.concat(e.old_value),
                          target: '_blank',
                          rel: 'noopener noreferrer',
                          className:
                            'inline-flex items-center gap-1 font-medium text-custom-text-100 hover:underline',
                          children: 'link',
                        }),
                        t &&
                          (0, a.jsxs)(a.Fragment, {
                            children: [
                              ' ',
                              'from ',
                              (0, a.jsx)(eB, { activity: e }),
                            ],
                          }),
                      ],
                    }),
            icon: (0, a.jsx)(eR.Z, {
              size: 12,
              color: '#6b7280',
              'aria-hidden': 'true',
            }),
          },
          cycles: {
            message: (e, t, r) =>
              'created' === e.verb
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsxs)('span', {
                        className: 'flex-shrink-0',
                        children: [
                          'added ',
                          t ? (0, a.jsx)(eB, { activity: e }) : 'this issue',
                          ' ',
                          (0, a.jsx)('span', {
                            className: 'whitespace-nowrap',
                            children: 'to the cycle',
                          }),
                          ' ',
                        ],
                      }),
                      (0, a.jsx)('a', {
                        href: '/'
                          .concat(r, '/projects/')
                          .concat(e.project, '/cycles/')
                          .concat(e.new_identifier),
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        className:
                          'inline items-center gap-1 font-medium text-custom-text-100 hover:underline',
                        children: (0, a.jsx)('span', {
                          className: 'break-all',
                          children: e.new_value,
                        }),
                      }),
                    ],
                  })
                : 'updated' === e.verb
                  ? (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)('span', {
                          className: 'flex-shrink-0 whitespace-nowrap',
                          children: 'set the cycle to ',
                        }),
                        (0, a.jsx)('a', {
                          href: '/'
                            .concat(r, '/projects/')
                            .concat(e.project, '/cycles/')
                            .concat(e.new_identifier),
                          target: '_blank',
                          rel: 'noopener noreferrer',
                          className:
                            'inline items-center gap-1 font-medium text-custom-text-100 hover:underline',
                          children: (0, a.jsx)('span', {
                            className: 'break-all',
                            children: e.new_value,
                          }),
                        }),
                      ],
                    })
                  : (0, a.jsxs)(a.Fragment, {
                      children: [
                        'removed ',
                        (0, a.jsx)(eB, { activity: e }),
                        ' from the cycle',
                        ' ',
                        (0, a.jsx)('a', {
                          href: '/'
                            .concat(r, '/projects/')
                            .concat(e.project, '/cycles/')
                            .concat(e.old_identifier),
                          target: '_blank',
                          rel: 'noopener noreferrer',
                          className:
                            'inline items-center gap-1 font-medium text-custom-text-100 hover:underline',
                          children: (0, a.jsx)('span', {
                            className: 'break-all',
                            children: e.old_value,
                          }),
                        }),
                      ],
                    }),
            icon: (0, a.jsx)(eM.Z, {
              size: 12,
              color: '#6b7280',
              'aria-hidden': 'true',
            }),
          },
          modules: {
            message: (e, t, r) =>
              'created' === e.verb
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      'added ',
                      t ? (0, a.jsx)(eB, { activity: e }) : 'this issue',
                      ' to the module',
                      ' ',
                      (0, a.jsx)('a', {
                        href: '/'
                          .concat(r, '/projects/')
                          .concat(e.project, '/modules/')
                          .concat(e.new_identifier),
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        className:
                          'inline items-center gap-1 font-medium text-custom-text-100 hover:underline',
                        children: (0, a.jsx)('span', {
                          className: 'break-all',
                          children: e.new_value,
                        }),
                      }),
                    ],
                  })
                : 'updated' === e.verb
                  ? (0, a.jsxs)(a.Fragment, {
                      children: [
                        'set the module to',
                        ' ',
                        (0, a.jsx)('a', {
                          href: '/'
                            .concat(r, '/projects/')
                            .concat(e.project, '/modules/')
                            .concat(e.new_identifier),
                          target: '_blank',
                          rel: 'noopener noreferrer',
                          className:
                            'inline items-center gap-1 font-medium text-custom-text-100 hover:underline',
                          children: (0, a.jsx)('span', {
                            className: 'break-all',
                            children: e.new_value,
                          }),
                        }),
                      ],
                    })
                  : (0, a.jsxs)(a.Fragment, {
                      children: [
                        'removed ',
                        (0, a.jsx)(eB, { activity: e }),
                        ' from the module',
                        ' ',
                        (0, a.jsx)('a', {
                          href: '/'
                            .concat(r, '/projects/')
                            .concat(e.project, '/modules/')
                            .concat(e.old_identifier),
                          target: '_blank',
                          rel: 'noopener noreferrer',
                          className:
                            'inline items-center gap-1 font-medium text-custom-text-100 hover:underline',
                          children: (0, a.jsx)('span', {
                            className: 'break-all',
                            children: e.old_value,
                          }),
                        }),
                      ],
                    }),
            icon: (0, a.jsx)(m.kB, {
              className: 'h-3 w-3 !text-[#6b7280]',
              'aria-hidden': 'true',
            }),
          },
          name: {
            message: (e, t) =>
              (0, a.jsxs)(a.Fragment, {
                children: [
                  'set the name to ',
                  (0, a.jsx)('span', {
                    className: 'break-all',
                    children: e.new_value,
                  }),
                  t &&
                    (0, a.jsxs)(a.Fragment, {
                      children: [' ', 'of ', (0, a.jsx)(eB, { activity: e })],
                    }),
                ],
              }),
            icon: (0, a.jsx)(eT.Z, {
              size: 12,
              color: '#6b7280',
              'aria-hidden': 'true',
            }),
          },
          parent: {
            message: (e, t) =>
              e.new_value
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      'set the parent to',
                      ' ',
                      (0, a.jsx)('span', {
                        className:
                          'font-medium text-custom-text-100 whitespace-nowrap',
                        children: e.new_value,
                      }),
                      t &&
                        (0, a.jsxs)(a.Fragment, {
                          children: [
                            ' ',
                            'for ',
                            (0, a.jsx)(eB, { activity: e }),
                          ],
                        }),
                    ],
                  })
                : (0, a.jsxs)(a.Fragment, {
                    children: [
                      'removed the parent',
                      ' ',
                      (0, a.jsx)('span', {
                        className:
                          'font-medium text-custom-text-100 whitespace-nowrap',
                        children: e.old_value,
                      }),
                      t &&
                        (0, a.jsxs)(a.Fragment, {
                          children: [
                            ' ',
                            'from ',
                            (0, a.jsx)(eB, { activity: e }),
                          ],
                        }),
                    ],
                  }),
            icon: (0, a.jsx)(eI.Z, {
              className: 'h-3 w-3 !text-[#6b7280]',
              'aria-hidden': 'true',
            }),
          },
          priority: {
            message: (e, t) =>
              (0, a.jsxs)(a.Fragment, {
                children: [
                  'set the priority to',
                  ' ',
                  (0, a.jsx)('span', {
                    className: 'font-medium text-custom-text-100',
                    children: e.new_value ? (0, eD.fm)(e.new_value) : 'None',
                  }),
                  t &&
                    (0, a.jsxs)(a.Fragment, {
                      children: [' ', 'for ', (0, a.jsx)(eB, { activity: e })],
                    }),
                ],
              }),
            icon: (0, a.jsx)(ez.Z, {
              size: 12,
              color: '#6b7280',
              'aria-hidden': 'true',
            }),
          },
          relates_to: {
            message: (e, t) =>
              '' === e.old_value
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      'marked that ',
                      t ? (0, a.jsx)(eB, { activity: e }) : 'this issue',
                      ' relates to',
                      ' ',
                      (0, a.jsx)('span', {
                        className:
                          'font-medium text-custom-text-100 whitespace-nowrap',
                        children: e.new_value,
                      }),
                      '.',
                    ],
                  })
                : (0, a.jsxs)(a.Fragment, {
                    children: [
                      'removed the relation from',
                      ' ',
                      (0, a.jsx)('span', {
                        className:
                          'font-medium text-custom-text-100 whitespace-nowrap',
                        children: e.old_value,
                      }),
                      '.',
                    ],
                  }),
            icon: (0, a.jsx)(m.vx, {
              height: '12',
              width: '12',
              color: '#6b7280',
            }),
          },
          blocking: {
            message: (e, t) =>
              '' === e.old_value
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      'marked ',
                      t ? (0, a.jsx)(eB, { activity: e }) : 'this issue',
                      ' is blocking issue',
                      ' ',
                      (0, a.jsx)('span', {
                        className:
                          'font-medium text-custom-text-100 whitespace-nowrap',
                        children: e.new_value,
                      }),
                      '.',
                    ],
                  })
                : (0, a.jsxs)(a.Fragment, {
                    children: [
                      'removed the blocking issue',
                      ' ',
                      (0, a.jsx)('span', {
                        className:
                          'font-medium text-custom-text-100 whitespace-nowrap',
                        children: e.old_value,
                      }),
                      '.',
                    ],
                  }),
            icon: (0, a.jsx)(m._8, {
              height: '12',
              width: '12',
              color: '#6b7280',
            }),
          },
          blocked_by: {
            message: (e, t) =>
              '' === e.old_value
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      'marked ',
                      t ? (0, a.jsx)(eB, { activity: e }) : 'this issue',
                      ' is being blocked by',
                      ' ',
                      (0, a.jsx)('span', {
                        className:
                          'font-medium text-custom-text-100 whitespace-nowrap',
                        children: e.new_value,
                      }),
                      '.',
                    ],
                  })
                : (0, a.jsxs)(a.Fragment, {
                    children: [
                      'removed ',
                      t ? (0, a.jsx)(eB, { activity: e }) : 'this issue',
                      ' being blocked by issue',
                      ' ',
                      (0, a.jsx)('span', {
                        className:
                          'font-medium text-custom-text-100 whitespace-nowrap',
                        children: e.old_value,
                      }),
                      '.',
                    ],
                  }),
            icon: (0, a.jsx)(m.$N, {
              height: '12',
              width: '12',
              color: '#6b7280',
            }),
          },
          duplicate: {
            message: (e, t) =>
              '' === e.old_value
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      'marked ',
                      t ? (0, a.jsx)(eB, { activity: e }) : 'this issue',
                      ' as duplicate of',
                      ' ',
                      (0, a.jsx)('span', {
                        className:
                          'font-medium text-custom-text-100 whitespace-nowrap',
                        children: e.new_value,
                      }),
                      '.',
                    ],
                  })
                : (0, a.jsxs)(a.Fragment, {
                    children: [
                      'removed ',
                      t ? (0, a.jsx)(eB, { activity: e }) : 'this issue',
                      ' as a duplicate of',
                      ' ',
                      (0, a.jsx)('span', {
                        className:
                          'font-medium text-custom-text-100 whitespace-nowrap',
                        children: e.old_value,
                      }),
                      '.',
                    ],
                  }),
            icon: (0, a.jsx)(e_.Z, { size: 12, color: '#6b7280' }),
          },
          state: {
            message: (e, t) =>
              (0, a.jsxs)(a.Fragment, {
                children: [
                  'set the state to ',
                  (0, a.jsx)('span', {
                    className: 'font-medium text-custom-text-100 break-all',
                    children: e.new_value,
                  }),
                  t &&
                    (0, a.jsxs)(a.Fragment, {
                      children: [' ', 'for ', (0, a.jsx)(eB, { activity: e })],
                    }),
                ],
              }),
            icon: (0, a.jsx)(eL.Z, {
              size: 12,
              color: '#6b7280',
              'aria-hidden': 'true',
            }),
          },
          start_date: {
            message: (e, t) =>
              e.new_value
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      'set the start date to',
                      ' ',
                      (0, a.jsx)('span', {
                        className:
                          'font-medium text-custom-text-100 whitespace-nowrap',
                        children: (0, f.ot)(e.new_value),
                      }),
                      t &&
                        (0, a.jsxs)(a.Fragment, {
                          children: [
                            ' ',
                            'for ',
                            (0, a.jsx)(eB, { activity: e }),
                          ],
                        }),
                    ],
                  })
                : (0, a.jsxs)(a.Fragment, {
                    children: [
                      'removed the start date',
                      t &&
                        (0, a.jsxs)(a.Fragment, {
                          children: [
                            ' ',
                            'from ',
                            (0, a.jsx)(eB, { activity: e }),
                          ],
                        }),
                    ],
                  }),
            icon: (0, a.jsx)(eP.Z, {
              size: 12,
              color: '#6b7280',
              'aria-hidden': 'true',
            }),
          },
          target_date: {
            message: (e, t) =>
              e.new_value
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      'set the due date to',
                      ' ',
                      (0, a.jsx)('span', {
                        className:
                          'font-medium text-custom-text-100 whitespace-nowrap',
                        children: (0, f.ot)(e.new_value),
                      }),
                      t &&
                        (0, a.jsx)(a.Fragment, {
                          children: (0, a.jsx)(eB, { activity: e }),
                        }),
                    ],
                  })
                : (0, a.jsxs)(a.Fragment, {
                    children: [
                      'removed the due date',
                      t &&
                        (0, a.jsxs)(a.Fragment, {
                          children: [
                            ' ',
                            'from ',
                            (0, a.jsx)(eB, { activity: e }),
                          ],
                        }),
                    ],
                  }),
            icon: (0, a.jsx)(eP.Z, {
              size: 12,
              color: '#6b7280',
              'aria-hidden': 'true',
            }),
          },
          inbox: {
            message: (e, t) =>
              (0, a.jsxs)(a.Fragment, {
                children: [
                  eU(e, t),
                  t &&
                    (0, a.jsxs)(a.Fragment, {
                      children: [' ', (0, a.jsx)(eB, { activity: e })],
                    }),
                  '2' === e.verb && ' from inbox by marking a duplicate issue.',
                ],
              }),
            icon: (0, a.jsx)(eF.Z, {
              size: 12,
              color: '#6b7280',
              'aria-hidden': 'true',
            }),
          },
        },
        eZ = e => {
          var t;
          let { activity: r } = e;
          return (0, a.jsx)(a.Fragment, {
            children:
              null === (t = eV[r.field]) || void 0 === t ? void 0 : t.icon,
          });
        },
        eW = e => {
          var t, r, n;
          let { activity: s, showIssue: o = !1 } = e,
            { workspaceSlug: i } = (0, T.useRouter)().query;
          return (0, a.jsx)(a.Fragment, {
            children:
              null === (r = eV[s.field]) || void 0 === r
                ? void 0
                : r.message(
                    s,
                    o,
                    i
                      ? i.toString()
                      : null !==
                            (n =
                              null === (t = s.workspace_detail) || void 0 === t
                                ? void 0
                                : t.slug) && void 0 !== n
                        ? n
                        : ''
                  ),
          });
        };
      var eY = r(98399);
      let eK = e => {
        let {
          buttonClassName: t,
          iconClassName: r,
          onClick: n,
          selected: s,
        } = e;
        return (0, a.jsx)('button', {
          type: 'button',
          className: (0, k.cn)('h-4 w-4 grid place-items-center', t),
          onClick: n,
          children: (0, a.jsx)(eY.Z, {
            className: (0, k.cn)(
              'h-4 w-4 text-custom-text-300 transition-all',
              { 'fill-yellow-500 stroke-yellow-500': s },
              r
            ),
          }),
        });
      };
      r(36547);
      var eG = r(35704);
      let eX = {
          required: 'Background color is required',
          minLength: {
            value: 7,
            message: 'Enter a valid hex code of 6 characters',
          },
          maxLength: {
            value: 7,
            message: 'Enter a valid hex code of 6 characters',
          },
          pattern: {
            value: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
            message: 'Enter a valid hex code of 6 characters',
          },
        },
        eQ = (0, E.Pi)(() => {
          let { currentUser: e, updateCurrentUser: t } = (0, L.aF)(),
            r = null == e ? void 0 : e.theme,
            { setTheme: n } = (0, eG.F)(),
            {
              control: s,
              formState: { errors: o, isSubmitting: i },
              handleSubmit: l,
              watch: c,
            } = (0, d.cI)({
              defaultValues: {
                background:
                  (null == r ? void 0 : r.background) !== ''
                    ? null == r
                      ? void 0
                      : r.background
                    : '#0d101b',
                text:
                  (null == r ? void 0 : r.text) !== ''
                    ? null == r
                      ? void 0
                      : r.text
                    : '#c5c5c5',
                primary:
                  (null == r ? void 0 : r.primary) !== ''
                    ? null == r
                      ? void 0
                      : r.primary
                    : '#3f76ff',
                sidebarBackground:
                  (null == r ? void 0 : r.sidebarBackground) !== ''
                    ? null == r
                      ? void 0
                      : r.sidebarBackground
                    : '#0d101b',
                sidebarText:
                  (null == r ? void 0 : r.sidebarText) !== ''
                    ? null == r
                      ? void 0
                      : r.sidebarText
                    : '#c5c5c5',
                darkPalette: (null == r ? void 0 : r.darkPalette) || !1,
                palette:
                  (null == r ? void 0 : r.palette) !== ''
                    ? null == r
                      ? void 0
                      : r.palette
                    : '',
              },
            }),
            u = async e => {
              let r = {
                background: e.background,
                text: e.text,
                primary: e.primary,
                sidebarBackground: e.sidebarBackground,
                sidebarText: e.sidebarText,
                darkPalette: !1,
                palette: ''
                  .concat(e.background, ',')
                  .concat(e.text, ',')
                  .concat(e.primary, ',')
                  .concat(e.sidebarBackground, ',')
                  .concat(e.sidebarText),
                theme: 'custom',
              };
              return n('custom'), t({ theme: r });
            },
            p = (e, t) => {
              let r = e;
              e && '#' !== e[0] && (r = '#'.concat(e)), t(r);
            };
          return (0, a.jsxs)('form', {
            onSubmit: l(u),
            children: [
              (0, a.jsxs)('div', {
                className: 'space-y-5',
                children: [
                  (0, a.jsx)('h3', {
                    className: 'text-lg font-semibold text-custom-text-100',
                    children: 'Customize your theme',
                  }),
                  (0, a.jsx)('div', {
                    className: 'space-y-4',
                    children: (0, a.jsxs)('div', {
                      className:
                        'grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 md:grid-cols-3',
                      children: [
                        (0, a.jsxs)('div', {
                          className: 'flex flex-col items-start gap-2',
                          children: [
                            (0, a.jsx)('h3', {
                              className:
                                'text-left text-sm font-medium text-custom-text-200',
                              children: 'Background color',
                            }),
                            (0, a.jsxs)('div', {
                              className: 'w-full',
                              children: [
                                (0, a.jsx)(d.Qr, {
                                  control: s,
                                  name: 'background',
                                  rules: eX,
                                  render: e => {
                                    let {
                                      field: { value: t, onChange: r },
                                    } = e;
                                    return (0, a.jsx)(m.So, {
                                      name: 'background',
                                      value: t,
                                      onChange: e => p(e, r),
                                      placeholder: '#0d101b',
                                      className: 'w-full',
                                      style: {
                                        backgroundColor: c('background'),
                                        color: c('text'),
                                      },
                                      hasError: !!(null == o
                                        ? void 0
                                        : o.background),
                                    });
                                  },
                                }),
                                o.background &&
                                  (0, a.jsx)('p', {
                                    className: 'mt-1 text-xs text-red-500',
                                    children: o.background.message,
                                  }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsxs)('div', {
                          className: 'flex flex-col items-start gap-2',
                          children: [
                            (0, a.jsx)('h3', {
                              className:
                                'text-left text-sm font-medium text-custom-text-200',
                              children: 'Text color',
                            }),
                            (0, a.jsxs)('div', {
                              className: 'w-full',
                              children: [
                                (0, a.jsx)(d.Qr, {
                                  control: s,
                                  name: 'text',
                                  rules: eX,
                                  render: e => {
                                    let {
                                      field: { value: t, onChange: r },
                                    } = e;
                                    return (0, a.jsx)(m.So, {
                                      name: 'text',
                                      value: t,
                                      onChange: e => p(e, r),
                                      placeholder: '#c5c5c5',
                                      className: 'w-full',
                                      style: {
                                        backgroundColor: c('text'),
                                        color: c('background'),
                                      },
                                      hasError: !!(null == o ? void 0 : o.text),
                                    });
                                  },
                                }),
                                o.text &&
                                  (0, a.jsx)('p', {
                                    className: 'mt-1 text-xs text-red-500',
                                    children: o.text.message,
                                  }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsxs)('div', {
                          className: 'flex flex-col items-start gap-2',
                          children: [
                            (0, a.jsx)('h3', {
                              className:
                                'text-left text-sm font-medium text-custom-text-200',
                              children: 'Primary(Theme) color',
                            }),
                            (0, a.jsxs)('div', {
                              className: 'w-full',
                              children: [
                                (0, a.jsx)(d.Qr, {
                                  control: s,
                                  name: 'primary',
                                  rules: eX,
                                  render: e => {
                                    let {
                                      field: { value: t, onChange: r },
                                    } = e;
                                    return (0, a.jsx)(m.So, {
                                      name: 'primary',
                                      value: t,
                                      onChange: e => p(e, r),
                                      placeholder: '#3f76ff',
                                      className: 'w-full',
                                      style: {
                                        backgroundColor: c('primary'),
                                        color: c('text'),
                                      },
                                      hasError: !!(null == o
                                        ? void 0
                                        : o.primary),
                                    });
                                  },
                                }),
                                o.primary &&
                                  (0, a.jsx)('p', {
                                    className: 'mt-1 text-xs text-red-500',
                                    children: o.primary.message,
                                  }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsxs)('div', {
                          className: 'flex flex-col items-start gap-2',
                          children: [
                            (0, a.jsx)('h3', {
                              className:
                                'text-left text-sm font-medium text-custom-text-200',
                              children: 'Sidebar background color',
                            }),
                            (0, a.jsxs)('div', {
                              className: 'w-full',
                              children: [
                                (0, a.jsx)(d.Qr, {
                                  control: s,
                                  name: 'sidebarBackground',
                                  rules: eX,
                                  render: e => {
                                    let {
                                      field: { value: t, onChange: r },
                                    } = e;
                                    return (0, a.jsx)(m.So, {
                                      name: 'sidebarBackground',
                                      value: t,
                                      onChange: e => p(e, r),
                                      placeholder: '#0d101b',
                                      className: 'w-full',
                                      style: {
                                        backgroundColor: c('sidebarBackground'),
                                        color: c('sidebarText'),
                                      },
                                      hasError: !!(null == o
                                        ? void 0
                                        : o.sidebarBackground),
                                    });
                                  },
                                }),
                                o.sidebarBackground &&
                                  (0, a.jsx)('p', {
                                    className: 'mt-1 text-xs text-red-500',
                                    children: o.sidebarBackground.message,
                                  }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsxs)('div', {
                          className: 'flex flex-col items-start gap-2',
                          children: [
                            (0, a.jsx)('h3', {
                              className:
                                'text-left text-sm font-medium text-custom-text-200',
                              children: 'Sidebar text color',
                            }),
                            (0, a.jsxs)('div', {
                              className: 'w-full',
                              children: [
                                (0, a.jsx)(d.Qr, {
                                  control: s,
                                  name: 'sidebarText',
                                  rules: eX,
                                  render: e => {
                                    let {
                                      field: { value: t, onChange: r },
                                    } = e;
                                    return (0, a.jsx)(m.So, {
                                      name: 'sidebarText',
                                      value: t,
                                      onChange: e => p(e, r),
                                      placeholder: '#c5c5c5',
                                      className: 'w-full',
                                      style: {
                                        backgroundColor: c('sidebarText'),
                                        color: c('sidebarBackground'),
                                      },
                                      hasError: !!(null == o
                                        ? void 0
                                        : o.sidebarText),
                                    });
                                  },
                                }),
                                o.sidebarText &&
                                  (0, a.jsx)('p', {
                                    className: 'mt-1 text-xs text-red-500',
                                    children: o.sidebarText.message,
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
              (0, a.jsx)('div', {
                className: 'mt-5 flex justify-end gap-2',
                children: (0, a.jsx)(m.zx, {
                  variant: 'primary',
                  type: 'submit',
                  loading: i,
                  children: i ? 'Creating Theme...' : 'Set Theme',
                }),
              }),
            ],
          });
        });
      var e0 = r(21645);
      let e1 = e => {
        let { value: t, onChange: r } = e;
        return (0, a.jsx)(m.AP, {
          value: t,
          label: t
            ? (0, a.jsxs)('div', {
                className: 'flex items-center gap-2',
                children: [
                  (0, a.jsxs)('div', {
                    className:
                      'border-1 relative flex h-4 w-4 rotate-45 transform items-center justify-center rounded-full border',
                    style: { borderColor: t.icon.border },
                    children: [
                      (0, a.jsx)('div', {
                        className: 'h-full w-1/2 rounded-l-full',
                        style: { background: t.icon.color1 },
                      }),
                      (0, a.jsx)('div', {
                        className: 'h-full w-1/2 rounded-r-full border-l',
                        style: {
                          borderLeftColor: t.icon.border,
                          background: t.icon.color2,
                        },
                      }),
                    ],
                  }),
                  t.label,
                ],
              })
            : 'Select your theme',
          onChange: r,
          input: !0,
          children: e0.K.map(e =>
            (0, a.jsx)(
              m.AP.Option,
              {
                value: e,
                children: (0, a.jsxs)('div', {
                  className: 'flex items-center gap-2',
                  children: [
                    (0, a.jsxs)('div', {
                      className:
                        'border-1 relative flex h-4 w-4 rotate-45 transform items-center justify-center rounded-full border',
                      style: { borderColor: e.icon.border },
                      children: [
                        (0, a.jsx)('div', {
                          className: 'h-full w-1/2 rounded-l-full',
                          style: { background: e.icon.color1 },
                        }),
                        (0, a.jsx)('div', {
                          className: 'h-full w-1/2 rounded-r-full border-l',
                          style: {
                            borderLeftColor: e.icon.border,
                            background: e.icon.color2,
                          },
                        }),
                      ],
                    }),
                    e.label,
                  ],
                }),
              },
              e.value
            )
          ),
        });
      };
      var e2 = r(93270),
        e3 = r(42683);
      let e5 = [
          { key: 'unsplash', title: 'Unsplash' },
          { key: 'images', title: 'Images' },
          { key: 'upload', title: 'Upload' },
        ],
        e4 = new ei.I(),
        e8 = (0, E.Pi)(e => {
          var t;
          let {
              label: r,
              value: n,
              control: s,
              onChange: o,
              disabled: i = !1,
              tabIndex: c,
              isProfileCover: u = !1,
            } = e,
            [p, h] = (0, l.useState)(null),
            [f, g] = (0, l.useState)(!1),
            [x, y] = (0, l.useState)(!1),
            [v, b] = (0, l.useState)(''),
            [w, k] = (0, l.useState)({ search: '' }),
            j = (0, l.useRef)(null),
            { workspaceSlug: N } = (0, T.useRouter)().query,
            {
              config: { envConfig: C },
            } = (0, L.IX)(),
            { currentWorkspace: S } = (0, L.cF)(),
            { data: E, error: O } = (0, A.ZP)(
              'UNSPLASH_IMAGES_'.concat(v),
              () => e4.getUnsplashImages(v),
              { revalidateOnFocus: !1, revalidateOnReconnect: !1 }
            ),
            { data: R } = (0, A.ZP)(
              'PROJECT_COVER_IMAGES',
              () => e4.getProjectCoverImages(),
              { revalidateOnFocus: !1, revalidateOnReconnect: !1 }
            ),
            M = (0, l.useRef)(null),
            I = (0, l.useCallback)(e => {
              h(e[0]);
            }, []),
            {
              getRootProps: z,
              getInputProps: _,
              isDragActive: P,
              fileRejections: F,
            } = (0, en.uI)({
              onDrop: I,
              accept: { 'image/*': ['.png', '.jpg', '.jpeg', '.svg', '.webp'] },
              maxSize:
                null !== (t = null == C ? void 0 : C.file_size_limit) &&
                void 0 !== t
                  ? t
                  : eo.T,
            }),
            D = async () => {
              if ((g(!0), !p)) return;
              let e = new FormData();
              e.append('asset', p), e.append('attributes', JSON.stringify({}));
              let t =
                  (null == n ? void 0 : n.split('/')[2]) ===
                  'images.unsplash.com',
                r = e => {
                  o(e.asset), g(!1), h(null), y(!1);
                };
              if (u)
                e4.uploadUserFile(e)
                  .then(e => {
                    r(e), !t && n && S && e4.deleteUserFile(n);
                  })
                  .catch(e => {
                    console.error(e);
                  });
              else {
                if (!N) return;
                e4.uploadFile(N.toString(), e)
                  .then(e => {
                    r(e), !t && n && S && e4.deleteFile(S.id, n);
                  })
                  .catch(e => {
                    console.error(e);
                  });
              }
            };
          (0, l.useEffect)(() => {
            var e;
            E &&
              null === n &&
              o(null === (e = E[0]) || void 0 === e ? void 0 : e.urls.regular);
          }, [n, o, E]);
          let B = () => {
              x && y(!1);
            },
            H = () => {
              y(e => !e);
            },
            J = (0, e2.j)(H, B);
          return (
            (0, e3.Z)(j, B),
            (0, a.jsxs)(K.J, {
              className: 'relative z-20',
              ref: j,
              tabIndex: c,
              onKeyDown: J,
              children: [
                (0, a.jsx)(K.J.Button, {
                  className:
                    'rounded border border-custom-border-300 bg-custom-background-100 px-2 py-1 text-xs text-custom-text-200 hover:text-custom-text-100',
                  onClick: e => {
                    e.stopPropagation(), e.preventDefault(), H();
                  },
                  disabled: i,
                  children: r,
                }),
                x &&
                  (0, a.jsx)(K.J.Panel, {
                    className:
                      'absolute right-0 z-20 mt-2 rounded-md border border-custom-border-200 bg-custom-background-100 shadow-custom-shadow-sm',
                    static: !0,
                    children: (0, a.jsx)('div', {
                      ref: M,
                      className:
                        'flex h-96 w-80 flex-col overflow-auto rounded border border-custom-border-300 bg-custom-background-100 p-3 shadow-2xl md:h-[28rem] md:w-[36rem]',
                      children: (0, a.jsxs)(ev.O.Group, {
                        children: [
                          (0, a.jsx)(ev.O.List, {
                            as: 'span',
                            className:
                              'inline-block rounded bg-custom-background-80 p-1',
                            children: e5.map(e =>
                              (!E && O && 'unsplash' === e.key) ||
                              (R && 0 === R.length && 'images' === e.key)
                                ? null
                                : (0, a.jsx)(
                                    ev.O,
                                    {
                                      className: e => {
                                        let { selected: t } = e;
                                        return 'rounded px-4 py-1 text-center text-sm outline-none transition-colors '.concat(
                                          t
                                            ? 'bg-custom-primary text-white'
                                            : 'text-custom-text-100'
                                        );
                                      },
                                      children: e.title,
                                    },
                                    e.key
                                  )
                            ),
                          }),
                          (0, a.jsxs)(ev.O.Panels, {
                            className:
                              'h-full w-full flex-1 overflow-y-auto overflow-x-hidden vertical-scrollbar scrollbar-md',
                            children: [
                              (E || !O) &&
                                (0, a.jsxs)(ev.O.Panel, {
                                  className: 'mt-4 h-full w-full space-y-4',
                                  children: [
                                    (0, a.jsxs)('div', {
                                      className: 'flex gap-x-2',
                                      children: [
                                        (0, a.jsx)(d.Qr, {
                                          control: s,
                                          name: 'search',
                                          render: e => {
                                            let {
                                              field: { value: t, ref: r },
                                            } = e;
                                            return (0, a.jsx)(m.II, {
                                              id: 'search',
                                              name: 'search',
                                              type: 'text',
                                              value: t,
                                              onChange: e =>
                                                k({
                                                  ...w,
                                                  search: e.target.value,
                                                }),
                                              ref: r,
                                              placeholder: 'Search for images',
                                              className: 'w-full text-sm',
                                            });
                                          },
                                        }),
                                        (0, a.jsx)(m.zx, {
                                          variant: 'primary',
                                          onClick: () => b(w.search),
                                          size: 'sm',
                                          children: 'Search',
                                        }),
                                      ],
                                    }),
                                    E
                                      ? E.length > 0
                                        ? (0, a.jsx)('div', {
                                            className: 'grid grid-cols-4 gap-4',
                                            children: E.map(e =>
                                              (0, a.jsx)(
                                                'div',
                                                {
                                                  className:
                                                    'relative col-span-2 aspect-video md:col-span-1',
                                                  onClick: () => {
                                                    y(!1), o(e.urls.regular);
                                                  },
                                                  children: (0, a.jsx)('img', {
                                                    src: e.urls.small,
                                                    alt: e.alt_description,
                                                    className:
                                                      'absolute left-0 top-0 h-full w-full cursor-pointer rounded object-cover',
                                                  }),
                                                },
                                                e.id
                                              )
                                            ),
                                          })
                                        : (0, a.jsx)('p', {
                                            className:
                                              'pt-7 text-center text-xs text-custom-text-300',
                                            children: 'No images found.',
                                          })
                                      : (0, a.jsxs)(m.aN, {
                                          className: 'grid grid-cols-4 gap-4',
                                          children: [
                                            (0, a.jsx)(m.aN.Item, {
                                              height: '80px',
                                              width: '100%',
                                            }),
                                            (0, a.jsx)(m.aN.Item, {
                                              height: '80px',
                                              width: '100%',
                                            }),
                                            (0, a.jsx)(m.aN.Item, {
                                              height: '80px',
                                              width: '100%',
                                            }),
                                            (0, a.jsx)(m.aN.Item, {
                                              height: '80px',
                                              width: '100%',
                                            }),
                                            (0, a.jsx)(m.aN.Item, {
                                              height: '80px',
                                              width: '100%',
                                            }),
                                            (0, a.jsx)(m.aN.Item, {
                                              height: '80px',
                                              width: '100%',
                                            }),
                                            (0, a.jsx)(m.aN.Item, {
                                              height: '80px',
                                              width: '100%',
                                            }),
                                            (0, a.jsx)(m.aN.Item, {
                                              height: '80px',
                                              width: '100%',
                                            }),
                                          ],
                                        }),
                                  ],
                                }),
                              (!R || 0 !== R.length) &&
                                (0, a.jsx)(ev.O.Panel, {
                                  className: 'mt-4 h-full w-full space-y-4',
                                  children: R
                                    ? R.length > 0
                                      ? (0, a.jsx)('div', {
                                          className: 'grid grid-cols-4 gap-4',
                                          children: R.map((e, t) =>
                                            (0, a.jsx)(
                                              'div',
                                              {
                                                className:
                                                  'relative col-span-2 aspect-video md:col-span-1',
                                                onClick: () => {
                                                  y(!1), o(e);
                                                },
                                                children: (0, a.jsx)('img', {
                                                  src: e,
                                                  alt: 'Default project cover image- '.concat(
                                                    t
                                                  ),
                                                  className:
                                                    'absolute left-0 top-0 h-full w-full cursor-pointer rounded object-cover',
                                                }),
                                              },
                                              e
                                            )
                                          ),
                                        })
                                      : (0, a.jsx)('p', {
                                          className:
                                            'pt-7 text-center text-xs text-custom-text-300',
                                          children: 'No images found.',
                                        })
                                    : (0, a.jsxs)(m.aN, {
                                        className:
                                          'grid grid-cols-4 gap-4 pt-4',
                                        children: [
                                          (0, a.jsx)(m.aN.Item, {
                                            height: '80px',
                                            width: '100%',
                                          }),
                                          (0, a.jsx)(m.aN.Item, {
                                            height: '80px',
                                            width: '100%',
                                          }),
                                          (0, a.jsx)(m.aN.Item, {
                                            height: '80px',
                                            width: '100%',
                                          }),
                                          (0, a.jsx)(m.aN.Item, {
                                            height: '80px',
                                            width: '100%',
                                          }),
                                          (0, a.jsx)(m.aN.Item, {
                                            height: '80px',
                                            width: '100%',
                                          }),
                                          (0, a.jsx)(m.aN.Item, {
                                            height: '80px',
                                            width: '100%',
                                          }),
                                          (0, a.jsx)(m.aN.Item, {
                                            height: '80px',
                                            width: '100%',
                                          }),
                                          (0, a.jsx)(m.aN.Item, {
                                            height: '80px',
                                            width: '100%',
                                          }),
                                        ],
                                      }),
                                }),
                              (0, a.jsx)(ev.O.Panel, {
                                className: 'mt-4 h-full w-full',
                                children: (0, a.jsxs)('div', {
                                  className:
                                    'flex h-full w-full flex-col gap-y-2',
                                  children: [
                                    (0, a.jsx)('div', {
                                      className:
                                        'flex w-full flex-1 items-center gap-3',
                                      children: (0, a.jsxs)('div', {
                                        ...z(),
                                        className:
                                          'relative grid h-full w-full cursor-pointer place-items-center rounded-lg p-12 text-center focus:outline-none focus:ring-2 focus:ring-custom-primary focus:ring-offset-2 '.concat(
                                            (null === p && P) || !n
                                              ? 'border-2 border-dashed border-custom-border-200 hover:bg-custom-background-90'
                                              : ''
                                          ),
                                        children: [
                                          (0, a.jsx)('button', {
                                            type: 'button',
                                            className:
                                              'absolute right-0 top-0 z-40 -translate-y-1/2 rounded bg-custom-background-90 px-2 py-0.5 text-xs font-medium text-custom-text-200',
                                            children: 'Edit',
                                          }),
                                          null !== p || (n && '' !== n)
                                            ? (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(ey(), {
                                                  layout: 'fill',
                                                  objectFit: 'cover',
                                                  src: p
                                                    ? URL.createObjectURL(p)
                                                    : n || '',
                                                  alt: 'image',
                                                  className: 'rounded-lg',
                                                }),
                                              })
                                            : (0, a.jsx)('div', {
                                                children: (0, a.jsx)('span', {
                                                  className:
                                                    'mt-2 block text-sm font-medium text-custom-text-200',
                                                  children: P
                                                    ? 'Drop image here to upload'
                                                    : 'Drag & drop image here',
                                                }),
                                              }),
                                          (0, a.jsx)('input', {
                                            ..._(),
                                            type: 'text',
                                          }),
                                        ],
                                      }),
                                    }),
                                    F.length > 0 &&
                                      (0, a.jsx)('p', {
                                        className: 'text-sm text-red-500',
                                        children:
                                          'file-too-large' ===
                                          F[0].errors[0].code
                                            ? 'The image size cannot exceed 5 MB.'
                                            : 'Please upload a file in a valid format.',
                                      }),
                                    (0, a.jsx)('p', {
                                      className: 'text-sm text-custom-text-200',
                                      children:
                                        'File formats supported- .jpeg, .jpg, .png, .webp, .svg',
                                    }),
                                    (0, a.jsxs)('div', {
                                      className:
                                        'flex h-12 items-start justify-end gap-2',
                                      children: [
                                        (0, a.jsx)(m.zx, {
                                          variant: 'neutral-primary',
                                          onClick: () => {
                                            y(!1), h(null);
                                          },
                                          children: 'Cancel',
                                        }),
                                        (0, a.jsx)(m.zx, {
                                          variant: 'primary',
                                          className: 'w-full',
                                          onClick: D,
                                          disabled: !p,
                                          loading: f,
                                          children: f
                                            ? 'Uploading...'
                                            : 'Upload & Save',
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
              ],
            })
          );
        });
      var e6 = r(88038),
        e7 = r.n(e6);
      let e9 = e => {
        let { title: t } = e;
        return t
          ? (0, a.jsx)(e7(), { children: (0, a.jsx)('title', { children: t }) })
          : null;
      };
    },
    67972: function (e, t, r) {
      r.d(t, {
        h: function () {
          return l;
        },
      });
      var n = r(24246),
        s = r(27378),
        o = r(27718),
        i = r(6780),
        a = r(10634);
      let l = s.forwardRef((e, t) => {
        let { ...r } = e,
          { mentionHighlights: s } = (0, a.W4)({});
        return (0, n.jsx)(o.fg, {
          ref: t,
          mentionHandler: { highlights: s },
          ...r,
          containerClassName: (0, i.cn)(r.containerClassName, 'relative pl-3'),
        });
      });
      l.displayName = 'RichTextReadOnlyEditor';
    },
    74371: function (e, t, r) {
      r.d(t, {
        ub: function () {
          return y;
        },
      });
      var n = r(24246),
        s = r(27378),
        o = r(50649),
        i = r(38579),
        a = r.n(i),
        l = r(79894),
        c = r.n(l),
        d = r(35704),
        u = r(25449),
        p = r(70540),
        h = r(6780),
        m = r(10634),
        f = r(69570),
        g = r(30640);
      let x = e => {
          let {
              label: t,
              icon: r,
              title: o,
              description: i,
              onClick: a,
              disabled: l = !1,
            } = e,
            [c, d] = (0, s.useState)(!1),
            [p, h] = (0, s.useState)(null),
            [m, x] = (0, s.useState)(),
            { styles: y, attributes: v } = (0, f.D)(p, m, {
              placement: 'right-end',
              modifiers: [{ name: 'offset', options: { offset: [0, 10] } }],
            });
          return (0, n.jsxs)(g.J, {
            children: [
              (0, n.jsx)(g.J.Button, {
                ref: h,
                onClick: a,
                disabled: l,
                children: (0, n.jsxs)('div', {
                  className: 'flex items-center gap-2.5 '.concat(
                    (0, u.A6)('primary', 'lg', l)
                  ),
                  children: [
                    r,
                    (0, n.jsx)('span', { className: 'leading-4', children: t }),
                    (0, n.jsxs)('span', {
                      className: 'relative h-2 w-2',
                      children: [
                        (0, n.jsx)('div', {
                          onMouseEnter: () => {
                            d(!0);
                          },
                          onMouseLeave: () => {
                            d(!1);
                          },
                          className:
                            'absolute bg-blue-300 right-0 z-10 h-2.5 w-2.5 animate-ping rounded-full',
                        }),
                        (0, n.jsx)('div', {
                          className:
                            'absolute bg-blue-400/40 right-0 h-1.5 w-1.5 mt-0.5 mr-0.5 rounded-full',
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              c &&
                (0, n.jsxs)(g.J.Panel, {
                  as: 'div',
                  className:
                    'flex flex-col rounded border border-custom-border-200 bg-custom-background-100 p-5 relative min-w-80',
                  ref: x,
                  style: y.popper,
                  ...v.popper,
                  static: !0,
                  children: [
                    (0, n.jsx)('div', {
                      className:
                        'absolute w-2 h-2 bg-custom-background-100 border rounded-lb-sm  border-custom-border-200 border-r-0 border-t-0 transform rotate-45 bottom-2 -left-[5px]',
                    }),
                    (0, n.jsx)('h3', {
                      className: 'text-lg font-semibold w-full',
                      children: o,
                    }),
                    (0, n.jsx)('h4', {
                      className: 'mt-1 text-sm',
                      children: i,
                    }),
                  ],
                }),
            ],
          });
        },
        y = (0, o.Pi)(e => {
          let {
              type: t,
              size: r = 'lg',
              layout: s = 'screen-detailed',
              additionalPath: o = '',
              primaryButtonOnClick: i,
              primaryButtonLink: l,
              secondaryButtonOnClick: f,
            } = e,
            {
              membership: { currentWorkspaceRole: g, currentProjectRole: y },
            } = (0, m.aF)(),
            { resolvedTheme: v } = (0, d.F)();
          if (!p.g[t]) return null;
          let {
              key: b,
              title: w,
              description: k,
              path: j,
              primaryButton: N,
              secondaryButton: C,
              accessType: S,
              access: E,
            } = p.g[t],
            T = ''
              .concat(o && '' !== o ? ''.concat(j).concat(o) : j, '-')
              .concat('light' === v ? 'light' : 'dark', '.webp'),
            A = 'workspace' === S ? g : y,
            O = A && E && A >= E;
          return (0, n.jsxs)(n.Fragment, {
            children: [
              'screen-detailed' === s &&
                (0, n.jsx)('div', {
                  className:
                    'flex items-center justify-center min-h-full min-w-full overflow-y-auto py-10 md:px-20 px-5',
                  children: (0, n.jsxs)('div', {
                    className: (0, h.cn)('flex flex-col gap-5', {
                      'md:min-w-[24rem] max-w-[45rem]': 'sm' === r,
                      'md:min-w-[30rem] max-w-[60rem]': 'lg' === r,
                    }),
                    children: [
                      (0, n.jsx)('div', {
                        className: 'flex flex-col gap-1.5 flex-shrink',
                        children: k
                          ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                (0, n.jsx)('h3', {
                                  className: 'text-xl font-semibold',
                                  children: w,
                                }),
                                (0, n.jsx)('p', {
                                  className: 'text-sm',
                                  children: k,
                                }),
                              ],
                            })
                          : (0, n.jsx)('h3', {
                              className: 'text-xl font-medium',
                              children: w,
                            }),
                      }),
                      j &&
                        (0, n.jsx)(a(), {
                          src: T,
                          alt: b || 'button image',
                          width: 384,
                          height: 250,
                          layout: 'responsive',
                          lazyBoundary: '100%',
                        }),
                      (N || C) &&
                        (0, n.jsx)(n.Fragment, {
                          children: (0, n.jsxs)('div', {
                            className:
                              'relative flex items-center justify-center gap-2 flex-shrink-0 w-full',
                            children: [
                              (() => {
                                if (!N) return null;
                                let e = {
                                  size: r,
                                  variant: 'primary',
                                  prependIcon: N.icon,
                                  onClick: i || void 0,
                                  disabled: !O,
                                };
                                if (N.comicBox) {
                                  var t, s;
                                  return (0, n.jsx)(x, {
                                    label: N.text,
                                    icon: N.icon,
                                    title:
                                      null === (t = N.comicBox) || void 0 === t
                                        ? void 0
                                        : t.title,
                                    description:
                                      null === (s = N.comicBox) || void 0 === s
                                        ? void 0
                                        : s.description,
                                    onClick: i,
                                    disabled: !O,
                                  });
                                }
                                return l
                                  ? (0, n.jsx)(c(), {
                                      href: l,
                                      children: (0, n.jsx)(u.zx, {
                                        ...e,
                                        children: N.text,
                                      }),
                                    })
                                  : (0, n.jsx)(u.zx, {
                                      ...e,
                                      children: N.text,
                                    });
                              })(),
                              C
                                ? (0, n.jsx)(u.zx, {
                                    size: r,
                                    variant: 'neutral-primary',
                                    prependIcon: C.icon,
                                    onClick: f,
                                    disabled: !O,
                                    children: C.text,
                                  })
                                : null,
                            ],
                          }),
                        }),
                    ],
                  }),
                }),
              'screen-simple' === s &&
                (0, n.jsxs)('div', {
                  className: 'text-center flex flex-col gap-2.5 items-center',
                  children: [
                    (0, n.jsx)('div', {
                      className: ''.concat(
                        'sm' === r ? 'h-24 w-24' : 'h-28 w-28'
                      ),
                      children: (0, n.jsx)(a(), {
                        src: T,
                        alt: b || 'button image',
                        width: 'sm' === r ? 78 : 96,
                        height: 'sm' === r ? 78 : 96,
                        layout: 'responsive',
                        lazyBoundary: '100%',
                      }),
                    }),
                    k
                      ? (0, n.jsxs)(n.Fragment, {
                          children: [
                            (0, n.jsx)('h3', {
                              className:
                                'text-lg font-medium text-custom-text-300 whitespace-pre-line',
                              children: w,
                            }),
                            (0, n.jsx)('p', {
                              className:
                                'text-base font-medium text-custom-text-400 whitespace-pre-line',
                              children: k,
                            }),
                          ],
                        })
                      : (0, n.jsx)('h3', {
                          className:
                            'text-sm font-medium text-custom-text-400 whitespace-pre-line',
                          children: w,
                        }),
                  ],
                }),
            ],
          });
        });
    },
    60583: function (e, t, r) {
      r.d(t, {
        T: function () {
          return n;
        },
      });
      let n = 5242880;
    },
    70540: function (e, t, r) {
      r.d(t, {
        C: function () {
          return s;
        },
        g: function () {
          return a;
        },
      });
      var n,
        s,
        o = r(51374),
        i = r(93116);
      ((n = s || (s = {})).WORKSPACE_DASHBOARD = 'workspace-dashboard'),
        (n.WORKSPACE_ANALYTICS = 'workspace-analytics'),
        (n.WORKSPACE_PROJECTS = 'workspace-projects'),
        (n.WORKSPACE_ALL_ISSUES = 'workspace-all-issues'),
        (n.WORKSPACE_ASSIGNED = 'workspace-assigned'),
        (n.WORKSPACE_CREATED = 'workspace-created'),
        (n.WORKSPACE_SUBSCRIBED = 'workspace-subscribed'),
        (n.WORKSPACE_CUSTOM_VIEW = 'workspace-custom-view'),
        (n.WORKSPACE_NO_PROJECTS = 'workspace-no-projects'),
        (n.WORKSPACE_SETTINGS_API_TOKENS = 'workspace-settings-api-tokens'),
        (n.WORKSPACE_SETTINGS_WEBHOOKS = 'workspace-settings-webhooks'),
        (n.WORKSPACE_SETTINGS_EXPORT = 'workspace-settings-export'),
        (n.WORKSPACE_SETTINGS_IMPORT = 'workspace-settings-import'),
        (n.PROFILE_ASSIGNED = 'profile-assigned'),
        (n.PROFILE_CREATED = 'profile-created'),
        (n.PROFILE_SUBSCRIBED = 'profile-subscribed'),
        (n.PROJECT_SETTINGS_LABELS = 'project-settings-labels'),
        (n.PROJECT_SETTINGS_INTEGRATIONS = 'project-settings-integrations'),
        (n.PROJECT_SETTINGS_ESTIMATE = 'project-settings-estimate'),
        (n.PROJECT_CYCLES = 'project-cycles'),
        (n.PROJECT_CYCLE_NO_ISSUES = 'project-cycle-no-issues'),
        (n.PROJECT_CYCLE_ACTIVE = 'project-cycle-active'),
        (n.PROJECT_CYCLE_ALL = 'project-cycle-all'),
        (n.PROJECT_CYCLE_COMPLETED_NO_ISSUES =
          'project-cycle-completed-no-issues'),
        (n.PROJECT_ARCHIVED_NO_CYCLES = 'project-archived-no-cycles'),
        (n.PROJECT_EMPTY_FILTER = 'project-empty-filter'),
        (n.PROJECT_ARCHIVED_EMPTY_FILTER = 'project-archived-empty-filter'),
        (n.PROJECT_DRAFT_EMPTY_FILTER = 'project-draft-empty-filter'),
        (n.PROJECT_NO_ISSUES = 'project-no-issues'),
        (n.PROJECT_ARCHIVED_NO_ISSUES = 'project-archived-no-issues'),
        (n.PROJECT_DRAFT_NO_ISSUES = 'project-draft-no-issues'),
        (n.VIEWS_EMPTY_SEARCH = 'views-empty-search'),
        (n.PROJECTS_EMPTY_SEARCH = 'projects-empty-search'),
        (n.MEMBERS_EMPTY_SEARCH = 'members-empty-search'),
        (n.PROJECT_MODULE_ISSUES = 'project-module-issues'),
        (n.PROJECT_MODULE = 'project-module'),
        (n.PROJECT_ARCHIVED_NO_MODULES = 'project-archived-no-modules'),
        (n.PROJECT_VIEW = 'project-view'),
        (n.PROJECT_PAGE = 'project-page'),
        (n.PROJECT_PAGE_PRIVATE = 'project-page-private'),
        (n.PROJECT_PAGE_PUBLIC = 'project-page-public'),
        (n.PROJECT_PAGE_ARCHIVED = 'project-page-archived'),
        (n.COMMAND_K_SEARCH_EMPTY_STATE = 'command-k-search-empty-state'),
        (n.ISSUE_RELATION_SEARCH_EMPTY_STATE =
          'issue-relation-search-empty-state'),
        (n.ISSUE_RELATION_EMPTY_STATE = 'issue-relation-empty-state'),
        (n.ISSUE_COMMENT_EMPTY_STATE = 'issue-comment-empty-state'),
        (n.NOTIFICATION_MY_ISSUE_EMPTY_STATE =
          'notification-my-issues-empty-state'),
        (n.NOTIFICATION_CREATED_EMPTY_STATE =
          'notification-created-empty-state'),
        (n.NOTIFICATION_SUBSCRIBED_EMPTY_STATE =
          'notification-subscribed-empty-state'),
        (n.NOTIFICATION_ARCHIVED_EMPTY_STATE =
          'notification-archived-empty-state'),
        (n.NOTIFICATION_SNOOZED_EMPTY_STATE =
          'notification-snoozed-empty-state'),
        (n.NOTIFICATION_UNREAD_EMPTY_STATE = 'notification-unread-empty-state'),
        (n.ACTIVE_CYCLE_PROGRESS_EMPTY_STATE =
          'active-cycle-progress-empty-state'),
        (n.ACTIVE_CYCLE_CHART_EMPTY_STATE = 'active-cycle-chart-empty-state'),
        (n.ACTIVE_CYCLE_PRIORITY_ISSUE_EMPTY_STATE =
          'active-cycle-priority-issue-empty-state'),
        (n.ACTIVE_CYCLE_ASSIGNEE_EMPTY_STATE =
          'active-cycle-assignee-empty-state'),
        (n.ACTIVE_CYCLE_LABEL_EMPTY_STATE = 'active-cycle-label-empty-state'),
        (n.WORKSPACE_ACTIVE_CYCLES = 'workspace-active-cycles'),
        (n.DISABLED_PROJECT_INBOX = 'disabled-project-inbox'),
        (n.DISABLED_PROJECT_CYCLE = 'disabled-project-cycle'),
        (n.DISABLED_PROJECT_MODULE = 'disabled-project-module'),
        (n.DISABLED_PROJECT_VIEW = 'disabled-project-view'),
        (n.DISABLED_PROJECT_PAGE = 'disabled-project-page'),
        (n.INBOX_SIDEBAR_OPEN_TAB = 'inbox-sidebar-open-tab'),
        (n.INBOX_SIDEBAR_CLOSED_TAB = 'inbox-sidebar-closed-tab'),
        (n.INBOX_SIDEBAR_FILTER_EMPTY_STATE =
          'inbox-sidebar-filter-empty-state'),
        (n.INBOX_DETAIL_EMPTY_STATE = 'inbox-detail-empty-state');
      let a = {
        'workspace-dashboard': {
          key: 'workspace-dashboard',
          title: 'Overview of your projects, activity, and metrics',
          description:
            ' Welcome to Plane, we are excited to have you here. Create your first project and track your issues, and this page will transform into a space that helps you progress. Admins will also see items which help their team progress.',
          path: '/empty-state/onboarding/dashboard',
          primaryButton: {
            text: 'Build your first project',
            comicBox: {
              title: 'Everything starts with a project in Plane',
              description:
                'A project could be a product’s roadmap, a marketing campaign, or launching a new car.',
            },
          },
          accessType: 'workspace',
          access: i.fp.MEMBER,
        },
        'workspace-analytics': {
          key: 'workspace-analytics',
          title:
            'Track progress, workloads, and allocations. Spot trends, remove blockers, and move work faster',
          description:
            'See scope versus demand, estimates, and scope creep. Get performance by team members and teams, and make sure your project runs on time.',
          path: '/empty-state/onboarding/analytics',
          primaryButton: {
            text: 'Create Cycles and Modules first',
            comicBox: {
              title: 'Analytics works best with Cycles + Modules',
              description:
                'First, timebox your issues into Cycles and, if you can, group issues that span more than a cycle into Modules. Check out both on the left nav.',
            },
          },
          accessType: 'workspace',
          access: i.fp.MEMBER,
        },
        'workspace-projects': {
          key: 'workspace-projects',
          title: 'No active projects',
          description:
            'Think of each project as the parent for goal-oriented work. Projects are where Jobs, Cycles, and Modules live and, along with your colleagues, help you achieve that goal. Create a new project or filter for archived projects.',
          path: '/empty-state/onboarding/projects',
          primaryButton: {
            text: 'Start your first project',
            comicBox: {
              title: 'Everything starts with a project in Plane',
              description:
                'A project could be a product’s roadmap, a marketing campaign, or launching a new car.',
            },
          },
          accessType: 'workspace',
          access: i.fp.MEMBER,
        },
        'workspace-all-issues': {
          key: 'workspace-all-issues',
          title: 'No issues in the project',
          description:
            "First project done! Now, slice your work into trackable pieces with issues. Let's go!",
          path: '/empty-state/all-issues/all-issues',
          primaryButton: { text: 'Create new issue' },
          accessType: 'workspace',
          access: i.fp.MEMBER,
        },
        'workspace-assigned': {
          key: 'workspace-assigned',
          title: 'No issues yet',
          description: 'Issues assigned to you can be tracked from here.',
          path: '/empty-state/all-issues/assigned',
          primaryButton: { text: 'Create new issue' },
          accessType: 'workspace',
          access: i.fp.MEMBER,
        },
        'workspace-created': {
          key: 'workspace-created',
          title: 'No issues yet',
          description:
            'All issues created by you come here, track them here directly.',
          path: '/empty-state/all-issues/created',
          primaryButton: { text: 'Create new issue' },
          accessType: 'workspace',
          access: i.fp.MEMBER,
        },
        'workspace-subscribed': {
          key: 'workspace-subscribed',
          title: 'No issues yet',
          description:
            'Subscribe to issues you are interested in, track all of them here.',
          path: '/empty-state/all-issues/subscribed',
        },
        'workspace-custom-view': {
          key: 'workspace-custom-view',
          title: 'No issues yet',
          description:
            'Issues that applies to the filters, track all of them here.',
          path: '/empty-state/all-issues/custom-view',
        },
        'workspace-no-projects': {
          key: 'workspace-no-projects',
          title: 'No project',
          description:
            'To create issues or manage your work, you need to create a project or be a part of one.',
          path: '/empty-state/onboarding/projects',
          primaryButton: {
            text: 'Start your first project',
            comicBox: {
              title: 'Everything starts with a project in Plane',
              description:
                'A project could be a product’s roadmap, a marketing campaign, or launching a new car.',
            },
          },
          accessType: 'workspace',
          access: i.fp.MEMBER,
        },
        'workspace-settings-api-tokens': {
          key: 'workspace-settings-api-tokens',
          title: 'No API tokens created',
          description:
            'Plane APIs can be used to integrate your data in Plane with any external system. Create a token to get started.',
          path: '/empty-state/workspace-settings/api-tokens',
        },
        'workspace-settings-webhooks': {
          key: 'workspace-settings-webhooks',
          title: 'No webhooks added',
          description:
            'Create webhooks to receive real-time updates and automate actions.',
          path: '/empty-state/workspace-settings/webhooks',
        },
        'workspace-settings-export': {
          key: 'workspace-settings-export',
          title: 'No previous exports yet',
          description:
            'Anytime you export, you will also have a copy here for reference.',
          path: '/empty-state/workspace-settings/exports',
        },
        'workspace-settings-import': {
          key: 'workspace-settings-import',
          title: 'No previous imports yet',
          description: 'Find all your previous imports here and download them.',
          path: '/empty-state/workspace-settings/imports',
        },
        'profile-assigned': {
          key: 'profile-assigned',
          title: 'No issues are assigned to you',
          description: 'Issues assigned to you can be tracked from here.',
          path: '/empty-state/profile/assigned',
        },
        'profile-created': {
          key: 'profile-created',
          title: 'No issues yet',
          description:
            'All issues created by you come here, track them here directly.',
          path: '/empty-state/profile/created',
        },
        'profile-subscribed': {
          key: 'profile-subscribed',
          title: 'No issues yet',
          description:
            'Subscribe to issues you are interested in, track all of them here.',
          path: '/empty-state/profile/subscribed',
        },
        'project-settings-labels': {
          key: 'project-settings-labels',
          title: 'No labels yet',
          description:
            'Create labels to help organize and filter issues in you project.',
          path: '/empty-state/project-settings/labels',
        },
        'project-settings-integrations': {
          key: 'project-settings-integrations',
          title: 'No integrations configured',
          description:
            'Configure GitHub and other integrations to sync your project issues.',
          path: '/empty-state/project-settings/integrations',
        },
        'project-settings-estimate': {
          key: 'project-settings-estimate',
          title: 'No estimates added',
          description:
            'Create a set of estimates to communicate the amount of work per issue.',
          path: '/empty-state/project-settings/estimates',
        },
        'project-cycles': {
          key: 'project-cycles',
          title: 'Group and timebox your work in Cycles.',
          description:
            'Break work down by timeboxed chunks, work backwards from your project deadline to set dates, and make tangible progress as a team.',
          path: '/empty-state/onboarding/cycles',
          primaryButton: {
            text: 'Set your first cycle',
            comicBox: {
              title: 'Cycles are repetitive time-boxes.',
              description:
                'A sprint, an iteration, and or any other term you use for weekly or fortnightly tracking of work is a cycle.',
            },
          },
          accessType: 'workspace',
          access: i.fp.MEMBER,
        },
        'project-cycle-no-issues': {
          key: 'project-cycle-no-issues',
          title: 'No issues added to the cycle',
          description:
            'Add or create issues you wish to timebox and deliver within this cycle',
          path: '/empty-state/cycle-issues/',
          primaryButton: { text: 'Create new issue ' },
          secondaryButton: { text: 'Add an existing issue' },
          accessType: 'project',
          access: o.MC.MEMBER,
        },
        'project-cycle-active': {
          key: 'project-cycle-active',
          title: 'No active cycle',
          description:
            "An active cycle includes any period that encompasses today's date within its range. Find the progress and details of the active cycle here.",
          path: '/empty-state/cycle/active',
        },
        'project-cycle-completed-no-issues': {
          key: 'project-cycle-completed-no-issues',
          title: 'No issues in the cycle',
          description:
            'No issues in the cycle. Issues are either transferred or hidden. To see hidden issues if any, update your display properties accordingly.',
          path: '/empty-state/cycle/completed-no-issues',
        },
        'project-archived-no-cycles': {
          key: 'project-archived-no-cycles',
          title: 'No archived cycles yet',
          description:
            'To tidy up your project, archive completed cycles. Find them here once archived.',
          path: '/empty-state/archived/empty-cycles',
        },
        'project-cycle-all': {
          key: 'project-cycle-all',
          title: 'No cycles',
          description:
            "An active cycle includes any period that encompasses today's date within its range. Find the progress and details of the active cycle here.",
          path: '/empty-state/cycle/active',
        },
        'project-empty-filter': {
          key: 'project-empty-filter',
          title: 'No issues found matching the filters applied',
          path: '/empty-state/empty-filters/',
          secondaryButton: { text: 'Clear all filters' },
          accessType: 'project',
          access: o.MC.MEMBER,
        },
        'project-archived-empty-filter': {
          key: 'project-archived-empty-filter',
          title: 'No issues found matching the filters applied',
          path: '/empty-state/empty-filters/',
          secondaryButton: { text: 'Clear all filters' },
          accessType: 'project',
          access: o.MC.MEMBER,
        },
        'project-draft-empty-filter': {
          key: 'project-draft-empty-filter',
          title: 'No issues found matching the filters applied',
          path: '/empty-state/empty-filters/',
          secondaryButton: { text: 'Clear all filters' },
          accessType: 'project',
          access: o.MC.MEMBER,
        },
        'project-no-issues': {
          key: 'project-no-issues',
          title: 'Create an issue and assign it to someone, even yourself',
          description:
            'Think of issues as jobs, tasks, work, or JTBD. Which we like. An issue and its sub-issues are usually time-based actionables assigned to members of your team. Your team creates, assigns, and completes issues to move your project towards its goal.',
          path: '/empty-state/onboarding/issues',
          primaryButton: {
            text: 'Create your first issue',
            comicBox: {
              title: 'Issues are building blocks in Plane.',
              description:
                'Redesign the Plane UI, Rebrand the company, or Launch the new fuel injection system are examples of issues that likely have sub-issues.',
            },
          },
          accessType: 'project',
          access: o.MC.MEMBER,
        },
        'project-archived-no-issues': {
          key: 'project-archived-no-issues',
          title: 'No archived issues yet',
          description:
            'Manually or through automation, you can archive issues that are completed or cancelled. Find them here once archived.',
          path: '/empty-state/archived/empty-issues',
          primaryButton: { text: 'Set automation' },
          accessType: 'project',
          access: o.MC.MEMBER,
        },
        'project-draft-no-issues': {
          key: 'project-draft-no-issues',
          title: 'No draft issues yet',
          description:
            'Quickly stepping away but want to keep your place? No worries – save a draft now. Your issues will be right here waiting for you.',
          path: '/empty-state/draft/draft-issues-empty',
        },
        'views-empty-search': {
          key: 'views-empty-search',
          title: 'No matching views',
          description:
            'No views match the search criteria. Create a new view instead.',
          path: '/empty-state/search/search',
        },
        'projects-empty-search': {
          key: 'projects-empty-search',
          title: 'No matching projects',
          description:
            'No projects detected with the matching criteria. Create a new project instead.',
          path: '/empty-state/search/project',
        },
        'members-empty-search': {
          key: 'members-empty-search',
          title: 'No matching members',
          description:
            'Add them to the project if they are already a part of the workspace',
          path: '/empty-state/search/member',
        },
        'project-module-issues': {
          key: 'project-module-issues',
          title: 'No issues in the module',
          description:
            'Create or add issues which you want to accomplish as part of this module',
          path: '/empty-state/module-issues/',
          primaryButton: { text: 'Create new issue ' },
          secondaryButton: { text: 'Add an existing issue' },
          accessType: 'project',
          access: o.MC.MEMBER,
        },
        'project-module': {
          key: 'project-module',
          title:
            'Map your project milestones to Modules and track aggregated work easily.',
          description:
            'A group of issues that belong to a logical, hierarchical parent form a module. Think of them as a way to track work by project milestones. They have their own periods and deadlines as well as analytics to help you see how close or far you are from a milestone.',
          path: '/empty-state/onboarding/modules',
          primaryButton: {
            text: 'Build your first module',
            comicBox: {
              title: 'Modules help group work by hierarchy.',
              description:
                'A cart module, a chassis module, and a warehouse module are all good example of this grouping.',
            },
          },
          accessType: 'project',
          access: o.MC.MEMBER,
        },
        'project-archived-no-modules': {
          key: 'project-archived-no-modules',
          title: 'No archived Modules yet',
          description:
            'To tidy up your project, archive completed or cancelled modules. Find them here once archived.',
          path: '/empty-state/archived/empty-modules',
        },
        'project-view': {
          key: 'project-view',
          title:
            'Save filtered views for your project. Create as many as you need',
          description:
            'Views are a set of saved filters that you use frequently or want easy access to. All your colleagues in a project can see everyone’s views and choose whichever suits their needs best.',
          path: '/empty-state/onboarding/views',
          primaryButton: {
            text: 'Create your first view',
            comicBox: {
              title: 'Views work atop Issue properties.',
              description:
                'You can create a view from here with as many properties as filters as you see fit.',
            },
          },
          accessType: 'project',
          access: o.MC.MEMBER,
        },
        'project-page': {
          key: 'project-page',
          title:
            'Write a note, a doc, or a full knowledge base. Get Galileo, Plane’s AI assistant, to help you get started',
          description:
            'Pages are thoughts potting space in Plane. Take down meeting notes, format them easily, embed issues, lay them out using a library of components, and keep them all in your project’s context. To make short work of any doc, invoke Galileo, Plane’s AI, with a shortcut or the click of a button.',
          path: '/empty-state/onboarding/pages',
          primaryButton: {
            text: 'Create your first page',
            comicBox: {
              title: 'A page can be a doc or a doc of docs.',
              description:
                'We wrote Nikhil and Meera’s love story. You could write your project’s mission, goals, and eventual vision.',
            },
          },
          accessType: 'project',
          access: o.MC.MEMBER,
        },
        'project-page-private': {
          key: 'project-page-private',
          title: 'No private pages yet',
          description:
            "Keep your private thoughts here. When you're ready to share, the team's just a click away.",
          path: '/empty-state/pages/private',
          primaryButton: { text: 'Create your first page' },
          accessType: 'project',
          access: o.MC.MEMBER,
        },
        'project-page-public': {
          key: 'project-page-public',
          title: 'No public pages yet',
          description:
            'See pages shared with everyone in your project right here.',
          path: '/empty-state/pages/public',
          primaryButton: { text: 'Create your first page' },
          accessType: 'project',
          access: o.MC.MEMBER,
        },
        'project-page-archived': {
          key: 'project-page-archived',
          title: 'No archived pages yet',
          description:
            'Archive pages not on your radar. Access them here when needed.',
          path: '/empty-state/pages/archived',
        },
        'command-k-search-empty-state': {
          key: 'command-k-search-empty-state',
          title: 'No results found',
          path: '/empty-state/search/search',
        },
        'issue-relation-search-empty-state': {
          key: 'issue-relation-search-empty-state',
          title: 'No maching issues found',
          path: '/empty-state/search/search',
        },
        'issue-relation-empty-state': {
          key: 'issue-relation-empty-state',
          title: 'No issues found',
          path: '/empty-state/search/issues',
        },
        'issue-comment-empty-state': {
          key: 'issue-comment-empty-state',
          title: 'No comments yet',
          description:
            'Comments can be used as a discussion and \n follow-up space for the issues',
          path: '/empty-state/search/comments',
        },
        'notification-my-issues-empty-state': {
          key: 'notification-my-issues-empty-state',
          title: 'No issues assigned',
          description: 'Updates for issues assigned to you can be \n seen here',
          path: '/empty-state/search/notification',
        },
        'notification-created-empty-state': {
          key: 'notification-created-empty-state',
          title: 'No updates to issues',
          description: 'Updates to issues created by you can be \n seen here',
          path: '/empty-state/search/notification',
        },
        'notification-subscribed-empty-state': {
          key: 'notification-subscribed-empty-state',
          title: 'No updates to issues',
          description:
            'Updates to any issue you are \n subscribed to can be seen here',
          path: '/empty-state/search/notification',
        },
        'notification-unread-empty-state': {
          key: 'notification-unread-empty-state',
          title: 'No unread notifications',
          description:
            'Congratulations, you are up-to-date \n with everything happening in the issues \n you care about',
          path: '/empty-state/search/notification',
        },
        'notification-snoozed-empty-state': {
          key: 'notification-snoozed-empty-state',
          title: 'No snoozed notifications yet',
          description:
            'Any notification you snooze for later will \n be available here to act upon',
          path: '/empty-state/search/snooze',
        },
        'notification-archived-empty-state': {
          key: 'notification-archived-empty-state',
          title: 'No archived notifications yet',
          description:
            'Any notification you archive will be \n available here to help you focus',
          path: '/empty-state/search/archive',
        },
        'active-cycle-progress-empty-state': {
          key: 'active-cycle-progress-empty-state',
          title: "Add issues to the cycle to view it's \n progress",
          path: '/empty-state/active-cycle/progress',
        },
        'active-cycle-chart-empty-state': {
          key: 'active-cycle-chart-empty-state',
          title: 'Add issues to the cycle to view the \n burndown chart.',
          path: '/empty-state/active-cycle/chart',
        },
        'active-cycle-priority-issue-empty-state': {
          key: 'active-cycle-priority-issue-empty-state',
          title:
            'Observe high priority issues tackled in \n the cycle at a glance.',
          path: '/empty-state/active-cycle/priority',
        },
        'active-cycle-assignee-empty-state': {
          key: 'active-cycle-assignee-empty-state',
          title:
            'Add assignees to issues to see a \n breakdown of work by assignees.',
          path: '/empty-state/active-cycle/assignee',
        },
        'active-cycle-label-empty-state': {
          key: 'active-cycle-label-empty-state',
          title:
            'Add labels to issues to see the \n breakdown of work by labels.',
          path: '/empty-state/active-cycle/label',
        },
        'workspace-active-cycles': {
          key: 'workspace-active-cycles',
          title: 'No active cycles',
          description:
            "Cycles of your projects that includes any period that encompasses today's date within its range. Find the progress and details of all your active cycle here.",
          path: '/empty-state/onboarding/workspace-active-cycles',
        },
        'disabled-project-inbox': {
          key: 'disabled-project-inbox',
          title: 'Inbox is not enabled for the project.',
          description:
            'Inbox helps you manage incoming requests to your project and add them as issues in your workflow. Enable inbox \n from project settings to manage requests.',
          accessType: 'project',
          access: o.MC.ADMIN,
          path: '/empty-state/disabled-feature/inbox',
          primaryButton: { text: 'Manage features' },
        },
        'disabled-project-cycle': {
          key: 'disabled-project-cycle',
          title: 'Cycles is not enabled for this project.',
          description:
            'Break work down by timeboxed chunks, work backwards from your project deadline to set dates, and make tangible progress as a team. Enable the cycles feature for your project to start using them.',
          accessType: 'project',
          access: o.MC.ADMIN,
          path: '/empty-state/disabled-feature/cycles',
          primaryButton: { text: 'Manage features' },
        },
        'disabled-project-module': {
          key: 'disabled-project-module',
          title: 'Modules are not enabled for the project.',
          description:
            'A group of issues that belong to a logical, hierarchical parent form a module. Think of them as a way to track work by project milestones. Enable modules from project settings.',
          accessType: 'project',
          access: o.MC.ADMIN,
          path: '/empty-state/disabled-feature/modules',
          primaryButton: { text: 'Manage features' },
        },
        'disabled-project-page': {
          key: 'disabled-project-page',
          title: 'Pages are not enabled for the project.',
          description:
            'Pages are thought spotting space in Plane. Take down meeting notes, format them easily, embed issues, lay them out using a library of components, and keep them all in your project’s context. Enable the pages feature to start creating them in your project.',
          accessType: 'project',
          access: o.MC.ADMIN,
          path: '/empty-state/disabled-feature/pages',
          primaryButton: { text: 'Manage features' },
        },
        'disabled-project-view': {
          key: 'disabled-project-view',
          title: 'Views is not enabled for this project.',
          description:
            'Views are a set of saved filters that you use frequently or want easy access to. All your colleagues in a project can see everyone’s views and choose whichever suits their needs best. Enable views in the project settings to start using them.',
          accessType: 'project',
          access: o.MC.ADMIN,
          path: '/empty-state/disabled-feature/views',
          primaryButton: { text: 'Manage features' },
        },
        'inbox-sidebar-open-tab': {
          key: 'inbox-sidebar-open-tab',
          title: 'No open issues',
          description: 'Find open issues here. Create new issue.',
          path: '/empty-state/inbox/inbox-issue',
        },
        'inbox-sidebar-closed-tab': {
          key: 'inbox-sidebar-closed-tab',
          title: 'No closed issues',
          description:
            'All the issues whether accepted or \n declined can be found here.',
          path: '/empty-state/inbox/inbox-issue',
        },
        'inbox-sidebar-filter-empty-state': {
          key: 'inbox-sidebar-filter-empty-state',
          title: 'No  matching issues',
          description:
            'No issue matches filter applied in inbox. \n Create a new issue.',
          path: '/empty-state/inbox/filter-issue',
        },
        'inbox-detail-empty-state': {
          key: 'inbox-detail-empty-state',
          title: 'Select an issue to view its details.',
          path: '/empty-state/inbox/issue-detail',
        },
      };
    },
    93116: function (e, t, r) {
      r.d(t, {
        F5: function () {
          return h;
        },
        fp: function () {
          return s;
        },
        j1: function () {
          return p;
        },
        nC: function () {
          return u;
        },
        h1: function () {
          return c;
        },
        i1: function () {
          return m;
        },
        HB: function () {
          return l;
        },
        pR: function () {
          return d;
        },
        Pi: function () {
          return f;
        },
      });
      var n,
        s,
        o = r(9405),
        i = r(93384),
        a = r(50188);
      ((n = s || (s = {}))[(n.GUEST = 5)] = 'GUEST'),
        (n[(n.VIEWER = 10)] = 'VIEWER'),
        (n[(n.MEMBER = 15)] = 'MEMBER'),
        (n[(n.ADMIN = 20)] = 'ADMIN');
      let l = { 5: 'Guest', 10: 'Viewer', 15: 'Member', 20: 'Admin' },
        c = ['Just myself', '2-10', '11-50', '51-200', '201-500', '500+'],
        d = [
          {
            value: 'Product / Project Manager',
            label: 'Product / Project Manager',
          },
          {
            value: 'Development / Engineering',
            label: 'Development / Engineering',
          },
          { value: 'Founder / Executive', label: 'Founder / Executive' },
          {
            value: 'Freelancer / Consultant',
            label: 'Freelancer / Consultant',
          },
          { value: 'Marketing / Growth', label: 'Marketing / Growth' },
          {
            value: 'Sales / Business Development',
            label: 'Sales / Business Development',
          },
          { value: 'Support / Operations', label: 'Support / Operations' },
          { value: 'Student / Professor', label: 'Student / Professor' },
          { value: 'Human Resources', label: 'Human Resources' },
          { value: 'Other', label: 'Other' },
        ],
        u = [
          {
            provider: 'github',
            type: 'import',
            title: 'GitHub',
            description:
              'Import issues from GitHub repositories and sync them.',
            logo: i.Z,
          },
          {
            provider: 'jira',
            type: 'import',
            title: 'Jira',
            description:
              'Import issues and epics from Jira projects and epics.',
            logo: a.Z,
          },
        ],
        p = [
          {
            provider: 'csv',
            type: 'export',
            title: 'CSV',
            description: 'Export issues to a CSV file.',
            logo: {
              src: '/_next/static/media/csv.a15f659b.svg',
              height: 24,
              width: 24,
              blurWidth: 0,
              blurHeight: 0,
            },
          },
          {
            provider: 'xlsx',
            type: 'export',
            title: 'Excel',
            description: 'Export issues to a Excel file.',
            logo: {
              src: '/_next/static/media/excel.13f633aa.svg',
              height: 24,
              width: 24,
              blurWidth: 0,
              blurHeight: 0,
            },
          },
          {
            provider: 'json',
            type: 'export',
            title: 'JSON',
            description: 'Export issues to a JSON file.',
            logo: {
              src: '/_next/static/media/json.e16cba00.svg',
              height: 24,
              width: 24,
              blurWidth: 0,
              blurHeight: 0,
            },
          },
        ],
        h = [
          { key: 'all-issues', label: 'All issues' },
          { key: 'assigned', label: 'Assigned' },
          { key: 'created', label: 'Created' },
          { key: 'subscribed', label: 'Subscribed' },
        ],
        m = [
          '404',
          'accounts',
          'api',
          'create-workspace',
          'error',
          'god-mode',
          'installations',
          'invitations',
          'onboarding',
          'profile',
          'spaces',
          'workspace-invitations',
        ],
        f = [
          {
            key: 'general',
            label: 'General',
            href: '/settings',
            access: 5,
            highlight: (e, t) => e === ''.concat(t, '/settings'),
            Icon: o.qY,
          },
          {
            key: 'members',
            label: 'Members',
            href: '/settings/members',
            access: 5,
            highlight: (e, t) => e === ''.concat(t, '/settings/members'),
            Icon: o.qY,
          },
          {
            key: 'billing-and-plans',
            label: 'Billing and plans',
            href: '/settings/billing',
            access: 20,
            highlight: (e, t) => e === ''.concat(t, '/settings/billing'),
            Icon: o.qY,
          },
          {
            key: 'integrations',
            label: 'Integrations',
            href: '/settings/integrations',
            access: 20,
            highlight: (e, t) => e === ''.concat(t, '/settings/integrations'),
            Icon: o.qY,
          },
          {
            key: 'import',
            label: 'Imports',
            href: '/settings/imports',
            access: 20,
            highlight: (e, t) => e === ''.concat(t, '/settings/imports'),
            Icon: o.qY,
          },
          {
            key: 'export',
            label: 'Exports',
            href: '/settings/exports',
            access: 15,
            highlight: (e, t) => e === ''.concat(t, '/settings/exports'),
            Icon: o.qY,
          },
          {
            key: 'webhooks',
            label: 'Webhooks',
            href: '/settings/webhooks',
            access: 20,
            highlight: (e, t) => e === ''.concat(t, '/settings/webhooks'),
            Icon: o.qY,
          },
          {
            key: 'api-tokens',
            label: 'API tokens',
            href: '/settings/api-tokens',
            access: 20,
            highlight: (e, t) => e === ''.concat(t, '/settings/api-tokens'),
            Icon: o.qY,
          },
        ];
    },
    65758: function (e, t, r) {
      var n = r(27378);
      t.Z = (e, t) => {
        let [r, s] = (0, n.useState)(e);
        return (
          (0, n.useEffect)(() => {
            let r = setTimeout(() => {
              s(e);
            }, t);
            return () => {
              clearTimeout(r);
            };
          }, [e, t]),
          r
        );
      };
    },
    93270: function (e, t, r) {
      r.d(t, {
        j: function () {
          return s;
        },
      });
      var n = r(27378);
      let s = function (e, t) {
        let r =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          s = (0, n.useCallback)(
            e => {
              r && (e.stopPropagation(), e.preventDefault());
            },
            [r]
          );
        return (0, n.useCallback)(
          r => {
            'Enter' === r.key
              ? (s(r), e())
              : 'Escape' === r.key
                ? (s(r), t())
                : 'Tab' === r.key && t();
          },
          [e, t, s]
        );
      };
    },
    15108: function (e, t, r) {
      var n = r(27378);
      let s = (e, t) => {
        try {
          let r = window.localStorage.getItem(e);
          return r ? JSON.parse(r) : t;
        } catch (r) {
          return window.localStorage.removeItem(e), t;
        }
      };
      t.Z = (e, t) => {
        let [r, o] = (0, n.useState)(() => s(e, t)),
          i = (0, n.useCallback)(
            t => {
              window.localStorage.setItem(e, JSON.stringify(t)),
                o(t),
                window.dispatchEvent(new Event('local-storage:'.concat(e)));
            },
            [e]
          ),
          a = (0, n.useCallback)(() => {
            window.localStorage.removeItem(e),
              o(null),
              window.dispatchEvent(new Event('local-storage:'.concat(e)));
          }, [e]),
          l = (0, n.useCallback)(() => {
            o(s(e, t));
          }, [e, t]);
        return (
          (0, n.useEffect)(
            () => (
              window.addEventListener('local-storage:'.concat(e), l),
              () => {
                window.removeEventListener('local-storage:'.concat(e), l);
              }
            ),
            [e, l]
          ),
          { storedValue: r, setValue: i, clearValue: a }
        );
      };
    },
    42683: function (e, t, r) {
      var n = r(27378);
      t.Z = (e, t) => {
        let r = r => {
          e.current && !e.current.contains(r.target) && t();
        };
        (0, n.useEffect)(
          () => (
            document.addEventListener('mousedown', r),
            () => {
              document.removeEventListener('mousedown', r);
            }
          )
        );
      };
    },
    31266: function (e, t, r) {
      var n = r(24246);
      t.Z = e => {
        let { children: t, gradient: r = !1 } = e;
        return (0, n.jsx)('div', {
          className: 'h-screen w-full overflow-hidden '.concat(
            r ? '' : 'bg-custom-background-100'
          ),
          children: t,
        });
      };
    },
    82992: function (e, t, r) {
      r.d(t, {
        Y: function () {
          return o;
        },
      });
      var n = r(6780),
        s = r(82283);
      class o extends s.t {
        async createGptTask(e, t, r) {
          return this.post(
            '/api/workspaces/'
              .concat(e, '/projects/')
              .concat(t, '/ai-assistant/'),
            r
          )
            .then(e => (null == e ? void 0 : e.data))
            .catch(e => {
              throw null == e ? void 0 : e.response;
            });
        }
        constructor() {
          super(n.C);
        }
      }
    },
    44029: function (e, t, r) {
      r.d(t, {
        I: function () {
          return i;
        },
      });
      var n = r(88830),
        s = r(6780),
        o = r(82283);
      class i extends o.t {
        async uploadFile(e, t) {
          return (
            (this.cancelSource = n.Z.CancelToken.source()),
            this.post('/api/workspaces/'.concat(e, '/file-assets/'), t, {
              headers: {
                ...this.getHeaders(),
                'Content-Type': 'multipart/form-data',
              },
              cancelToken: this.cancelSource.token,
            })
              .then(e => (null == e ? void 0 : e.data))
              .catch(e => {
                if (n.Z.isCancel(e)) console.log(e.message);
                else {
                  var t;
                  throw (
                    (console.log(e),
                    null == e
                      ? void 0
                      : null === (t = e.response) || void 0 === t
                        ? void 0
                        : t.data)
                  );
                }
              })
          );
        }
        cancelUpload() {
          this.cancelSource.cancel('Upload cancelled');
        }
        getUploadFileFunction(e, t) {
          return async r => {
            try {
              let n = new FormData();
              return (
                n.append('asset', r),
                n.append('attributes', JSON.stringify({})),
                null == t || t('submitting'),
                (await this.uploadFile(e, n)).asset
              );
            } catch (e) {
              console.error(e);
            }
          };
        }
        getDeleteImageFunction(e) {
          return async t => {
            try {
              let r = ''
                .concat(e, '/')
                .concat(this.extractAssetIdFromUrl(t, e));
              return await this.deleteImage(r);
            } catch (e) {
              console.error(e);
            }
          };
        }
        getRestoreImageFunction(e) {
          return async t => {
            try {
              let r = ''
                .concat(e, '/')
                .concat(this.extractAssetIdFromUrl(t, e));
              return await this.restoreImage(r);
            } catch (e) {
              console.error(e);
            }
          };
        }
        extractAssetIdFromUrl(e, t) {
          let r = e.indexOf(t) + t.length + 1;
          if (-1 === r) throw Error('Workspace ID not found in source string');
          return e.substring(r);
        }
        async deleteImage(e) {
          return this.delete('/api/workspaces/file-assets/'.concat(e, '/'))
            .then(e => (null == e ? void 0 : e.status))
            .catch(e => {
              var t;
              throw null == e
                ? void 0
                : null === (t = e.response) || void 0 === t
                  ? void 0
                  : t.data;
            });
        }
        async restoreImage(e) {
          return this.post(
            '/api/workspaces/file-assets/'.concat(e, '/restore/'),
            { headers: this.getHeaders(), 'Content-Type': 'application/json' }
          )
            .then(e => (null == e ? void 0 : e.status))
            .catch(e => {
              var t;
              throw null == e
                ? void 0
                : null === (t = e.response) || void 0 === t
                  ? void 0
                  : t.data;
            });
        }
        async deleteFile(e, t) {
          let r = t.lastIndexOf('/'),
            n = t.substring(r + 1);
          return this.delete(
            '/api/workspaces/file-assets/'.concat(e, '/').concat(n, '/')
          )
            .then(e => (null == e ? void 0 : e.data))
            .catch(e => {
              var t;
              throw null == e
                ? void 0
                : null === (t = e.response) || void 0 === t
                  ? void 0
                  : t.data;
            });
        }
        async uploadUserFile(e) {
          return this.post('/api/users/file-assets/', e, {
            headers: {
              ...this.getHeaders(),
              'Content-Type': 'multipart/form-data',
            },
          })
            .then(e => (null == e ? void 0 : e.data))
            .catch(e => {
              var t;
              throw null == e
                ? void 0
                : null === (t = e.response) || void 0 === t
                  ? void 0
                  : t.data;
            });
        }
        async deleteUserFile(e) {
          let t = e.lastIndexOf('/'),
            r = e.substring(t + 1);
          return this.delete('/api/users/file-assets/'.concat(r))
            .then(e => (null == e ? void 0 : e.data))
            .catch(e => {
              var t;
              throw null == e
                ? void 0
                : null === (t = e.response) || void 0 === t
                  ? void 0
                  : t.data;
            });
        }
        async getUnsplashImages(e) {
          return this.get('/api/unsplash/', { params: { query: e } })
            .then(e => {
              var t, r;
              return null !==
                (r =
                  null == e
                    ? void 0
                    : null === (t = e.data) || void 0 === t
                      ? void 0
                      : t.results) && void 0 !== r
                ? r
                : null == e
                  ? void 0
                  : e.data;
            })
            .catch(e => {
              var t;
              throw null == e
                ? void 0
                : null === (t = e.response) || void 0 === t
                  ? void 0
                  : t.data;
            });
        }
        async getProjectCoverImages() {
          return this.get('/api/project-covers/')
            .then(e => (null == e ? void 0 : e.data))
            .catch(e => {
              var t;
              throw null == e
                ? void 0
                : null === (t = e.response) || void 0 === t
                  ? void 0
                  : t.data;
            });
        }
        constructor() {
          super(s.C),
            (this.uploadFile = this.uploadFile.bind(this)),
            (this.deleteImage = this.deleteImage.bind(this)),
            (this.restoreImage = this.restoreImage.bind(this)),
            (this.cancelUpload = this.cancelUpload.bind(this));
        }
      }
    },
    18469: function (e, t, r) {
      r.d(t, {
        $p: function () {
          return r1;
        },
        D7: function () {
          return rJ;
        },
        DC: function () {
          return nn;
        },
        H7: function () {
          return ns;
        },
        HH: function () {
          return ex;
        },
        IP: function () {
          return np;
        },
        JL: function () {
          return rQ;
        },
        Jp: function () {
          return r5;
        },
        Jy: function () {
          return r7;
        },
        KD: function () {
          return r$;
        },
        L6: function () {
          return r8;
        },
        Nf: function () {
          return eL;
        },
        Oy: function () {
          return r4;
        },
        VZ: function () {
          return nt;
        },
        _6: function () {
          return r3;
        },
        _X: function () {
          return r0;
        },
        _v: function () {
          return nl;
        },
        cn: function () {
          return em;
        },
        dH: function () {
          return no;
        },
        eI: function () {
          return ep;
        },
        ef: function () {
          return na;
        },
        ey: function () {
          return nh;
        },
        hh: function () {
          return ni;
        },
        jB: function () {
          return r6;
        },
        jE: function () {
          return ny;
        },
        mo: function () {
          return eh;
        },
        oz: function () {
          return nk;
        },
        qU: function () {
          return ne;
        },
        sp: function () {
          return nd;
        },
        vh: function () {
          return nu;
        },
        wB: function () {
          return nr;
        },
        xn: function () {
          return rq;
        },
        yx: function () {
          return nc;
        },
        zg: function () {
          return eF;
        },
        zj: function () {
          return r9;
        },
      });
      var n = r(24026),
        s = r(78943),
        o = r(52501),
        i = r(82789),
        a = r(54848),
        l = r(15463),
        c = r(66135),
        d = r(22773),
        u = r(24246),
        p = r(59190),
        h = r(27378),
        m = r(72952),
        f = r(35437),
        g = r(15714),
        x = r(51655),
        y = r(67890),
        v = r(86422),
        b = r(20249),
        w = r(84431),
        k = r(4598),
        j = r(43673),
        N = r(86677),
        C = r(34309),
        S = r(25449),
        E = r(77046),
        T = r(39992),
        A = r(49859),
        O = r(1759),
        R = r(32681),
        M = r(96920),
        I = r(8465),
        z = r(50750),
        _ = r(44470),
        L = r(16293),
        P = r(63399),
        F = r(74129),
        D = r(55883),
        B = r(47519),
        H = r(65973),
        J = r(29300),
        $ = r(70898),
        q = r(51885),
        U = r(32147),
        V = r(22677),
        Z = r(32051),
        W = r(58645),
        Y = r(16867),
        K = r(46311),
        G = r(38006),
        X = r(98780),
        Q = r(20962),
        ee = r(20339),
        et = Object.defineProperty,
        er = Object.defineProperties,
        en = Object.getOwnPropertyDescriptors,
        es = Object.getOwnPropertySymbols,
        eo = Object.prototype.hasOwnProperty,
        ei = Object.prototype.propertyIsEnumerable,
        ea = (e, t, r) =>
          t in e
            ? et(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        el = (e, t) => {
          for (var r in t || (t = {})) eo.call(t, r) && ea(e, r, t[r]);
          if (es) for (var r of es(t)) ei.call(t, r) && ea(e, r, t[r]);
          return e;
        },
        ec = (e, t) => er(e, en(t)),
        ed = (e, t, r) =>
          new Promise((n, s) => {
            var o = e => {
                try {
                  a(r.next(e));
                } catch (e) {
                  s(e);
                }
              },
              i = e => {
                try {
                  a(r.throw(e));
                } catch (e) {
                  s(e);
                }
              },
              a = e =>
                e.done ? n(e.value) : Promise.resolve(e.value).then(o, i);
            a((r = r.apply(e, t)).next());
          });
      function eu(e, { insertAt: t } = {}) {
        if (!e || 'undefined' == typeof document) return;
        let r = document.head || document.getElementsByTagName('head')[0],
          n = document.createElement('style');
        (n.type = 'text/css'),
          'top' === t && r.firstChild
            ? r.insertBefore(n, r.firstChild)
            : r.appendChild(n),
          n.styleSheet
            ? (n.styleSheet.cssText = e)
            : n.appendChild(document.createTextNode(e));
      }
      function ep(e) {
        return e instanceof n.Xc;
      }
      eu(`.ProseMirror{--font-size-h1: 1.5rem;--font-size-h2: 1.3125rem;--font-size-h3: 1.125rem;--font-size-h4: .9375rem;--font-size-h5: .8125rem;--font-size-h6: .75rem;--font-size-regular: .9375rem;--font-size-list: var(--font-size-regular)}.ProseMirror p.is-editor-empty:first-child:before{content:attr(data-placeholder);float:left;color:rgb(var(--color-text-400));pointer-events:none;height:0}.ProseMirror blockquote{font-style:normal;font-weight:400;border-left:3px solid rgb(var(--color-border-300))}.ProseMirror blockquote p:before,.ProseMirror blockquote p:after{display:none}.ProseMirror code:before,.ProseMirror code:after{display:none}.ProseMirror .is-empty:before{content:attr(data-placeholder);float:left;color:rgb(var(--color-text-400));pointer-events:none;height:0}.ProseMirror img{transition:filter .1s ease-in-out;margin-top:8px;margin-bottom:0;&:hover{cursor:pointer;filter:brightness(90%)}&.ProseMirror-selectednode{outline:3px solid rgba(var(--color-primary-100));filter:brightness(90%)}}.ProseMirror-gapcursor:after{border-top:1px solid rgb(var(--color-text-100))!important}ul[data-type=taskList] li{font-size:var(--font-size-list);line-height:1.5}ul[data-type=taskList] li>label{position:absolute;left:-5px;margin:.1rem .15rem 0 0;-webkit-user-select:none;-moz-user-select:none;user-select:none}ul[data-type=taskList] li>div{margin-left:1.15rem}ul[data-type=taskList] li>label input[type=checkbox]{border:1px solid rgba(var(--color-border-300))!important;outline:none;border-radius:2px;transform:scale(1.05)}ul[data-type=taskList] li>label input[type=checkbox]:hover{background-color:rgba(var(--color-background-80))!important}ul[data-type=taskList] li>label input[type=checkbox]:checked{background-color:rgba(var(--color-primary-100))!important;border-color:rgba(var(--color-primary-100))!important;color:#fff!important}ul[data-type=taskList] li>label input[type=checkbox]:checked:hover{background-color:rgba(var(--color-primary-300))!important;border-color:rgba(var(--color-primary-300))!important}@media screen and (max-width: 768px){ul[data-type=taskList] li>label{margin-right:.5rem}}ul[data-type=taskList] li>label input[type=checkbox]{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgb(var(--color-background-100));margin:0;cursor:pointer;width:.8rem;height:.8rem;position:relative;border:1.5px solid rgb(var(--color-text-100));margin-right:.2rem;margin-top:.15rem;&:hover{background-color:rgb(var(--color-background-80))}&:active{background-color:rgb(var(--color-background-90))}&:before{content:"";position:absolute;top:50%;left:50%;width:.5em;height:.5em;transform:scale(0);transform-origin:center;transition:.12s transform ease-in-out;box-shadow:inset 1em 1em;-webkit-clip-path:polygon(14% 44%,0 65%,50% 100%,100% 16%,80% 0%,43% 62%);clip-path:polygon(14% 44%,0 65%,50% 100%,100% 16%,80% 0%,43% 62%)}&:checked:before{transform:scale(1) translate(-50%,-50%)}}ul[data-type=taskList] li[data-checked=true]>div>p{color:rgb(var(--color-text-400));text-decoration:line-through;text-decoration-thickness:2px}.tippy-box{max-width:400px!important}.ProseMirror{position:relative;word-wrap:break-word;white-space:pre-wrap;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-user-select:text;-moz-user-select:text;user-select:text;outline:none;cursor:text;line-height:1.2;font-family:inherit;font-size:var(--font-size-regular);color:inherit;box-sizing:border-box;appearance:textfield;-webkit-appearance:textfield;-moz-appearance:textfield}.fade-in{opacity:1;transition:opacity .3s ease-in}.fade-out{opacity:0;transition:opacity .2s ease-out}.img-placeholder{position:relative;width:35%;margin-top:0!important;margin-bottom:0!important;&:before{content:"";box-sizing:border-box;position:absolute;top:50%;left:45%;width:20px;height:20px;border-radius:50%;border:3px solid rgba(var(--color-text-200));border-top-color:rgba(var(--color-text-800));animation:spinning .6s linear infinite}}@keyframes spinning{to{transform:rotate(360deg)}}.resize-cursor{cursor:ew-resize;cursor:col-resize}.ProseMirror table * .is-empty:before{opacity:0}.ProseMirror pre{font-family:JetBrainsMono,monospace;-moz-tab-size:2;-o-tab-size:2;tab-size:2}.ProseMirror pre code{background:none;color:inherit;font-size:.8rem;padding:0}div[data-type=horizontalRule]{line-height:0;padding:.25rem 0;margin-top:0;margin-bottom:0;>div{border-bottom:2px solid rgb(var(--color-border-200))}}.moveable-control-box{z-index:10!important}@keyframes blink{49%{border-color:unset}50%{border-color:transparent}99%{border-color:transparent}}.no-cursor{caret-color:transparent}div:focus .fake-cursor,span:focus .fake-cursor{margin-right:-1px;border-left-width:1.5px;border-left-style:solid;animation:blink 1s;animation-iteration-count:infinite;position:relative;z-index:1}.prose ol:where(.prose>:first-child):not(:where([class~=not-prose],[class~=not-prose] *)),.prose ul:not([data-type=taskList]):where(.prose>:first-child):not(:where([class~=not-prose],[class~=not-prose] *)),.prose ul[data-type=taskList]:where(.prose>:first-child){margin-top:.25rem!important;margin-bottom:1px!important}.prose ol:not(:where(.prose>:first-child):not(:where([class~=not-prose],[class~=not-prose] *))),.prose ul:not([data-type=taskList]):not(:where(.prose>:first-child):not(:where([class~=not-prose],[class~=not-prose] *))),.prose ul[data-type=taskList]:not(:where(.prose>:first-child)){margin-top:calc(.25rem + 3px)!important;margin-bottom:1px!important}ol ol,ol ul:not([data-type=taskList]),ul:not([data-type=taskList]) ul:not([data-type=taskList]),ul:not([data-type=taskList]) ol{margin-top:.45rem!important}ul[data-type=taskList] ul[data-type=taskList]{margin-top:.6rem}.prose :where(h1):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:2rem;margin-bottom:4px;font-size:var(--font-size-h1);font-weight:600;line-height:1.3}.prose :where(h2):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.4rem;margin-bottom:1px;font-size:var(--font-size-h2);font-weight:600;line-height:1.3}.prose :where(h3):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1rem;margin-bottom:1px;font-size:var(--font-size-h3);font-weight:600;line-height:1.3}.prose :where(h4):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1rem;margin-bottom:1px;font-size:var(--font-size-h4);font-weight:600;line-height:1.5}.prose :where(h5):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1rem;margin-bottom:1px;font-size:var(--font-size-h5);font-weight:600;line-height:1.5}.prose :where(h6):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1rem;margin-bottom:1px;font-size:var(--font-size-h6);font-weight:600;line-height:1.5}.prose :where(p):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:.25rem;margin-bottom:1px;padding:3px 0;font-size:var(--font-size-regular);line-height:1.5}.prose :where(ol):not(:where([class~=not-prose],[class~=not-prose] *)) li p,.prose :where(ul):not(:where([class~=not-prose],[class~=not-prose] *)) li p{font-size:var(--font-size-list);line-height:1.5}.prose :where(.prose>:first-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:0}.ProseMirror .issue-embed img{margin:0!important}
`),
        eu(`.table-wrapper{overflow-x:auto;width:-moz-fit-content;width:fit-content;max-width:100%}.table-wrapper table{border-collapse:collapse;table-layout:fixed;margin:.5rem 0 1rem;border:1px solid rgba(var(--color-border-200));width:100%}.table-wrapper table p{font-size:14px}.table-wrapper table td,.table-wrapper table th{min-width:1em;border:1px solid rgba(var(--color-border-200));padding:10px 15px;vertical-align:top;box-sizing:border-box;position:relative;transition:background-color .3s ease;>*{margin-bottom:0}}.table-wrapper table th{font-weight:500;text-align:left;background-color:rgba(var(--color-background-90))}.table-wrapper table .selectedCell{outline:.5px solid rgba(var(--color-primary-100))}.table-wrapper table .column-resize-handle{position:absolute;right:-2px;top:0;width:2px;height:100%;z-index:5;background-color:rgba(var(--color-primary-100));pointer-events:none}.table-wrapper .table-controls{position:absolute}.table-wrapper .table-controls .columns-control,.table-wrapper .table-controls .rows-control{transition:opacity ease-in .1s;position:absolute;z-index:5;display:flex;justify-content:center;align-items:center}.table-wrapper .table-controls .columns-control{height:20px;transform:translateY(-50%)}.table-wrapper .table-controls .columns-control .columns-control-div{color:#fff;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath fill='%238F95B2' d='M4.5 10.5c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5S6 12.825 6 12s-.675-1.5-1.5-1.5zm15 0c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5S21 12.825 21 12s-.675-1.5-1.5-1.5zm-7.5 0c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5 1.5-.675 1.5-1.5-.675-1.5-1.5-1.5z'/%3E%3C/svg%3E");width:30px;height:15px}.table-wrapper .table-controls .rows-control{width:20px;transform:translate(-50%)}.table-wrapper .table-controls .rows-control .rows-control-div{color:#fff;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath fill='%238F95B2' d='M12 3c-.825 0-1.5.675-1.5 1.5S11.175 6 12 6s1.5-.675 1.5-1.5S12.825 3 12 3zm0 15c-.825 0-1.5.675-1.5 1.5S11.175 21 12 21s1.5-.675 1.5-1.5S12.825 18 12 18zm0-7.5c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5 1.5-.675 1.5-1.5-.675-1.5-1.5-1.5z'/%3E%3C/svg%3E");height:30px;width:15px}.table-wrapper .table-controls .rows-control-div,.table-wrapper .table-controls .columns-control-div{background-color:rgba(var(--color-background-80));border:.5px solid rgba(var(--color-border-200));border-radius:4px;background-size:1.25rem;background-repeat:no-repeat;background-position:center;transition:transform ease-out .1s,background-color ease-out .1s;outline:none;box-shadow:rgba(var(--color-shadow-2xs));cursor:pointer}.resize-cursor .table-wrapper .table-controls .rows-control,.table-wrapper.controls--disabled .table-controls .rows-control,.resize-cursor .table-wrapper .table-controls .columns-control,.table-wrapper.controls--disabled .table-controls .columns-control{opacity:0;pointer-events:none}
`),
        eu(`pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}.hljs{color:#c9d1d9;background:#0d1117}.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_{color:#ff7b72}.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_{color:#d2a8ff}.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-variable{color:#79c0ff}.hljs-meta .hljs-string,.hljs-regexp,.hljs-string{color:#a5d6ff}.hljs-built_in,.hljs-symbol{color:#ffa657}.hljs-code,.hljs-comment,.hljs-formula{color:#8b949e}.hljs-name,.hljs-quote,.hljs-selector-pseudo,.hljs-selector-tag{color:#7ee787}.hljs-subst{color:#c9d1d9}.hljs-section{color:#1f6feb;font-weight:700}.hljs-bullet{color:#f2cc60}.hljs-emphasis{color:#c9d1d9;font-style:italic}.hljs-strong{color:#c9d1d9;font-weight:700}.hljs-addition{color:#aff5b4;background-color:#033a16}.hljs-deletion{color:#ffdcd7;background-color:#67060c}
`);
      var eh = ({ noBorder: e, borderOnFocus: t, containerClassName: r }) =>
        em(
          'w-full max-w-full sm:rounded-lg focus:outline-none focus:border-0',
          {
            'border border-custom-border-200': !e,
            'focus:border border-custom-border-300': t,
          },
          r
        );
      function em(...e) {
        return (0, o.m)((0, s.W)(e));
      }
      function ef(e, t) {
        let r = e.$anchor.depth;
        for (; r > 0; ) {
          let n = e.$anchor.node(r);
          if (n.type.name === t)
            return { node: n, pos: e.$anchor.start(r) - 1 };
          r--;
        }
        return null;
      }
      var eg = e => {
          for (; null !== e && 'TABLE' !== e.nodeName; ) e = e.parentNode;
          return e;
        },
        ex = e => {
          let t;
          try {
            t = new URL(e);
          } catch (e) {
            return !1;
          }
          return 'http:' === t.protocol || 'https:' === t.protocol;
        },
        ey = new i.H$('tableControls'),
        ev = class {
          constructor(e = {}) {
            this.values = el({ hoveredTable: null, hoveredCell: null }, e);
          }
          apply(e) {
            let t = e.getMeta(ey);
            return (
              (null == t ? void 0 : t.setHoveredTable) !== void 0 &&
                (this.values.hoveredTable = t.setHoveredTable),
              (null == t ? void 0 : t.setHoveredCell) !== void 0 &&
                (this.values.hoveredCell = t.setHoveredCell),
              this
            );
          }
        },
        eb = {
          colorPicker:
            '<svg xmlns="http://www.w3.org/2000/svg" length="24" viewBox="0 0 24 24" style="transform: ;msFilter:;"><path fill="rgb(var(--color-text-300))" d="M20 14c-.092.064-2 2.083-2 3.5 0 1.494.949 2.448 2 2.5.906.044 2-.891 2-2.5 0-1.5-1.908-3.436-2-3.5zM9.586 20c.378.378.88.586 1.414.586s1.036-.208 1.414-.586l7-7-.707-.707L11 4.586 8.707 2.293 7.293 3.707 9.586 6 4 11.586c-.378.378-.586.88-.586 1.414s.208 1.036.586 1.414L9.586 20zM11 7.414 16.586 13H5.414L11 7.414z"></path></svg>',
          deleteColumn:
            '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>',
          deleteRow:
            '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>',
          insertLeftTableIcon: `<svg
    xmlns="http://www.w3.org/2000/svg"
    length={12}
    viewBox="0 -960 960 960"
      >
    <path
      d="M224.617-140.001q-30.307 0-51.307-21-21-21-21-51.308v-535.382q0-30.308 21-51.308t51.307-21H360q30.307 0 51.307 21 21 21 21 51.308v535.382q0 30.308-21 51.308t-51.307 21H224.617Zm375.383 0q-30.307 0-51.307-21-21-21-21-51.308v-535.382q0-30.308 21-51.308t51.307-21h135.383q30.307 0 51.307 21 21 21 21 51.308v535.382q0 30.308-21 51.308t-51.307 21H600Zm147.691-607.69q0-4.616-3.846-8.463-3.846-3.846-8.462-3.846H600q-4.616 0-8.462 3.846-3.847 3.847-3.847 8.463v535.382q0 4.616 3.847 8.463Q595.384-200 600-200h135.383q4.616 0 8.462-3.846 3.846-3.847 3.846-8.463v-535.382ZM587.691-200h160-160Z"
      fill="rgb(var(--color-text-300))"
    />
  </svg>
`,
          insertRightTableIcon: `<svg
    xmlns="http://www.w3.org/2000/svg"
    length={12}
    viewBox="0 -960 960 960"
  >
    <path
      d="M600-140.001q-30.307 0-51.307-21-21-21-21-51.308v-535.382q0-30.308 21-51.308t51.307-21h135.383q30.307 0 51.307 21 21 21 21 51.308v535.382q0 30.308-21 51.308t-51.307 21H600Zm-375.383 0q-30.307 0-51.307-21-21-21-21-51.308v-535.382q0-30.308 21-51.308t51.307-21H360q30.307 0 51.307 21 21 21 21 51.308v535.382q0 30.308-21 51.308t-51.307 21H224.617Zm-12.308-607.69v535.382q0 4.616 3.846 8.463 3.846 3.846 8.462 3.846H360q4.616 0 8.462-3.846 3.847-3.847 3.847-8.463v-535.382q0-4.616-3.847-8.463Q364.616-760 360-760H224.617q-4.616 0-8.462 3.846-3.846 3.847-3.846 8.463Zm160 547.691h-160 160Z"
      fill="rgb(var(--color-text-300))"
    />
  </svg>
`,
          insertTopTableIcon: `<svg
    xmlns="http://www.w3.org/2000/svg"
    length={24}
    viewBox="0 -960 960 960"
  >
    <path
      d="M212.309-527.693q-30.308 0-51.308-21t-21-51.307v-135.383q0-30.307 21-51.307 21-21 51.308-21h535.382q30.308 0 51.308 21t21 51.307V-600q0 30.307-21 51.307-21 21-51.308 21H212.309Zm0 375.383q-30.308 0-51.308-21t-21-51.307V-360q0-30.307 21-51.307 21-21 51.308-21h535.382q30.308 0 51.308 21t21 51.307v135.383q0 30.307-21 51.307-21 21-51.308 21H212.309Zm0-59.999h535.382q4.616 0 8.463-3.846 3.846-3.846 3.846-8.462V-360q0-4.616-3.846-8.462-3.847-3.847-8.463-3.847H212.309q-4.616 0-8.463 3.847Q200-364.616 200-360v135.383q0 4.616 3.846 8.462 3.847 3.846 8.463 3.846Zm-12.309-160v160-160Z"
      fill="rgb(var(--color-text-300))"
    />
  </svg>
`,
          toggleColumnHeader:
            '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgb(var(--color-text-300))" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-toggle-right"><rect width="20" height="12" x="2" y="6" rx="6" ry="6"/><circle cx="16" cy="12" r="2"/></svg>',
          toggleRowHeader:
            '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgb(var(--color-text-300))" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-toggle-right"><rect width="20" height="12" x="2" y="6" rx="6" ry="6"/><circle cx="16" cy="12" r="2"/></svg>',
          insertBottomTableIcon: `<svg
    xmlns="http://www.w3.org/2000/svg"
    length={24}
    viewBox="0 -960 960 960"
  >
    <path
      d="M212.309-152.31q-30.308 0-51.308-21t-21-51.307V-360q0-30.307 21-51.307 21-21 51.308-21h535.382q30.308 0 51.308 21t21 51.307v135.383q0 30.307-21 51.307-21 21-51.308 21H212.309Zm0-375.383q-30.308 0-51.308-21t-21-51.307v-135.383q0-30.307 21-51.307 21-21 51.308-21h535.382q30.308 0 51.308 21t21 51.307V-600q0 30.307-21 51.307-21 21-51.308 21H212.309Zm535.382-219.998H212.309q-4.616 0-8.463 3.846-3.846 3.846-3.846 8.462V-600q0 4.616 3.846 8.462 3.847 3.847 8.463 3.847h535.382q4.616 0 8.463-3.847Q760-595.384 760-600v-135.383q0-4.616-3.846-8.462-3.847-3.846-8.463-3.846ZM200-587.691v-160 160Z"
      fill="rgb(var(--color-text-300))"
    />
  </svg>
`,
        },
        ew = {
          allowHTML: !0,
          arrow: !1,
          trigger: 'click',
          animation: 'scale-subtle',
          theme: 'light-border no-padding',
          interactive: !0,
          hideOnClick: !0,
          placement: 'right',
        },
        ek = [
          {
            label: 'Toggle column header',
            icon: eb.toggleColumnHeader,
            action: ({ editor: e }) =>
              e.chain().focus().toggleHeaderColumn().run(),
          },
          {
            label: 'Add column before',
            icon: eb.insertLeftTableIcon,
            action: ({ editor: e }) =>
              e.chain().focus().addColumnBefore().run(),
          },
          {
            label: 'Add column after',
            icon: eb.insertRightTableIcon,
            action: ({ editor: e }) => e.chain().focus().addColumnAfter().run(),
          },
          { label: 'Pick color', icon: '', action: e => {} },
          {
            label: 'Delete column',
            icon: eb.deleteColumn,
            action: ({ editor: e }) => e.chain().focus().deleteColumn().run(),
          },
        ],
        ej = [
          {
            label: 'Toggle row header',
            icon: eb.toggleRowHeader,
            action: ({ editor: e }) =>
              e.chain().focus().toggleHeaderRow().run(),
          },
          {
            label: 'Add row above',
            icon: eb.insertTopTableIcon,
            action: ({ editor: e }) => e.chain().focus().addRowBefore().run(),
          },
          {
            label: 'Add row below',
            icon: eb.insertBottomTableIcon,
            action: ({ editor: e }) => e.chain().focus().addRowAfter().run(),
          },
          { label: 'Pick color', icon: '', action: e => {} },
          {
            label: 'Delete row',
            icon: eb.deleteRow,
            action: ({ editor: e }) => e.chain().focus().deleteRow().run(),
          },
        ];
      function eN({
        triggerButton: e,
        items: t,
        tippyOptions: r,
        onSelectColor: n,
        onClickItem: s,
        colors: o,
      }) {
        let i = (0, d.ZP)(
          e,
          el(
            {
              content: (0, c.h)(
                'div',
                {
                  className:
                    'rounded-md border-[0.5px] border-custom-border-300 bg-custom-background-100 px-2 py-2.5 text-xs shadow-custom-shadow-rg min-w-[12rem] whitespace-nowrap',
                },
                t.map(e =>
                  'Pick color' === e.label
                    ? (0, c.h)('div', { className: 'flex flex-col' }, [
                        (0, c.h)('hr', {
                          className: 'my-2 border-custom-border-200',
                        }),
                        (0, c.h)(
                          'div',
                          { className: 'text-custom-text-200 text-sm' },
                          e.label
                        ),
                        (0, c.h)(
                          'div',
                          {
                            className:
                              'grid grid-cols-6 gap-x-1 gap-y-2.5 mt-2',
                          },
                          Object.entries(o).map(([e, t]) => {
                            var r;
                            return (0, c.h)('div', {
                              className:
                                'grid place-items-center size-6 rounded cursor-pointer',
                              style: `background-color: ${t.backgroundColor};color: ${t.textColor || 'inherit'};`,
                              innerHTML:
                                null != (r = t.icon)
                                  ? r
                                  : `<span class="text-md" style:"color: ${t.backgroundColor}>A</span>`,
                              onClick: () => n(t),
                            });
                          })
                        ),
                        (0, c.h)('hr', {
                          className: 'my-2 border-custom-border-200',
                        }),
                      ])
                    : (0, c.h)(
                        'div',
                        {
                          className:
                            'flex items-center gap-2 px-1 py-1.5 bg-custom-background-100 hover:bg-custom-background-80 text-sm text-custom-text-200 rounded cursor-pointer',
                          itemType: 'div',
                          onClick: () => s(e),
                        },
                        [
                          (0, c.h)('span', {
                            className: 'h-3 w-3 flex-shrink-0',
                            innerHTML: e.icon,
                          }),
                          (0, c.h)('div', { className: 'label' }, e.label),
                        ]
                      )
                )
              ),
            },
            r
          )
        );
        return Array.isArray(i) ? i[0] : i;
      }
      var eC = class {
        constructor(e, t, r, s, o) {
          if (
            ((this.hoveredCell = null),
            (this.node = e),
            (this.cellMinWidth = t),
            (this.decorations = r),
            (this.editor = s),
            (this.getPos = o),
            (this.hoveredCell = null),
            (this.map = n.rU.get(e)),
            s.isEditable)
          ) {
            (this.rowsControl = (0, c.h)(
              'div',
              { className: 'rows-control' },
              (0, c.h)('div', {
                itemType: 'button',
                className: 'rows-control-div',
                onClick: () => this.selectRow(),
              })
            )),
              (this.columnsControl = (0, c.h)(
                'div',
                { className: 'columns-control' },
                (0, c.h)('div', {
                  itemType: 'button',
                  className: 'columns-control-div',
                  onClick: () => this.selectColumn(),
                })
              )),
              (this.controls = (0, c.h)(
                'div',
                { className: 'table-controls', contentEditable: 'false' },
                this.rowsControl,
                this.columnsControl
              ));
            let e = {
              Blue: { backgroundColor: '#D9E4FF', textColor: '#171717' },
              Orange: { backgroundColor: '#FFEDD5', textColor: '#171717' },
              Grey: { backgroundColor: '#F1F1F1', textColor: '#171717' },
              Yellow: { backgroundColor: '#FEF3C7', textColor: '#171717' },
              Green: { backgroundColor: '#DCFCE7', textColor: '#171717' },
              Red: { backgroundColor: '#FFDDDD', textColor: '#171717' },
              Pink: { backgroundColor: '#FFE8FA', textColor: '#171717' },
              Purple: { backgroundColor: '#E8DAFB', textColor: '#171717' },
              None: {
                backgroundColor: 'none',
                textColor: 'none',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ban"><circle cx="12" cy="12" r="10"/><path d="m4.9 4.9 14.2 14.2"/></svg>',
              },
            };
            (this.columnsToolbox = eN({
              triggerButton: this.columnsControl.querySelector(
                '.columns-control-div'
              ),
              items: ek,
              colors: e,
              onSelectColor: e =>
                this.editor
                  .chain()
                  .focus()
                  .updateAttributes('tableCell', {
                    background: e.backgroundColor,
                    textColor: e.textColor,
                  })
                  .run(),
              tippyOptions: ec(el({}, ew), { appendTo: this.controls }),
              onClickItem: e => {
                var t, r;
                e.action({
                  editor: this.editor,
                  triggerButton:
                    null == (t = this.columnsControl)
                      ? void 0
                      : t.firstElementChild,
                  controlsContainer: this.controls,
                }),
                  null == (r = this.columnsToolbox) || r.hide();
              },
            })),
              (this.rowsToolbox = eN({
                triggerButton: this.rowsControl.firstElementChild,
                items: ej,
                colors: e,
                tippyOptions: ec(el({}, ew), { appendTo: this.controls }),
                onSelectColor: e =>
                  (function (e, t) {
                    let { state: r, dispatch: s } = e.view,
                      { selection: o } = r;
                    if (!(o instanceof n.Xc)) return !1;
                    let i = o.$headCell || o.$anchorCell,
                      a = i.depth;
                    for (; a > 0 && 'tableRow' !== i.node(a).type.name; ) a--;
                    if ('tableRow' !== i.node(a).type.name) return !1;
                    let l = i.start(a);
                    return (
                      s(
                        r.tr.setNodeMarkup(
                          l - 1,
                          null,
                          ec(el({}, i.node(a).attrs), {
                            background: t.backgroundColor,
                            textColor: t.textColor,
                          })
                        )
                      ),
                      !0
                    );
                  })(s, e),
                onClickItem: e => {
                  var t, r;
                  e.action({
                    editor: this.editor,
                    triggerButton:
                      null == (t = this.rowsControl)
                        ? void 0
                        : t.firstElementChild,
                    controlsContainer: this.controls,
                  }),
                    null == (r = this.rowsToolbox) || r.hide();
                },
              }));
          }
          (this.colgroup = (0, c.h)(
            'colgroup',
            null,
            Array.from({ length: this.map.width }, () => 1).map(() =>
              (0, c.h)('col')
            )
          )),
            (this.tbody = (0, c.h)('tbody')),
            (this.table = (0, c.h)('table', null, this.colgroup, this.tbody)),
            (this.root = (0, c.h)(
              'div',
              {
                className:
                  'table-wrapper horizontal-scrollbar scrollbar-md controls--disabled',
              },
              this.controls,
              this.table
            )),
            this.render();
        }
        get dom() {
          return this.root;
        }
        get contentDOM() {
          return this.tbody;
        }
        update(e, t) {
          return (
            e.type === this.node.type &&
            ((this.node = e),
            (this.decorations = [...t]),
            (this.map = n.rU.get(this.node)),
            this.editor.isEditable && this.updateControls(),
            this.render(),
            !0)
          );
        }
        render() {
          if (this.colgroup.children.length !== this.map.width) {
            let e = Array.from({ length: this.map.width }, () => 1).map(() =>
              (0, c.h)('col')
            );
            this.colgroup.replaceChildren(...e);
          }
          (0, n.iJ)(this.node, this.colgroup, this.table, this.cellMinWidth);
        }
        ignoreMutation() {
          return !0;
        }
        updateControls() {
          var e;
          let { hoveredTable: t, hoveredCell: r } = Object.values(
            this.decorations
          ).reduce(
            (e, t) => (
              void 0 !== t.spec.hoveredCell &&
                (e.hoveredCell = t.spec.hoveredCell),
              void 0 !== t.spec.hoveredTable &&
                (e.hoveredTable = t.spec.hoveredTable),
              e
            ),
            {}
          );
          if (void 0 === t || void 0 === r)
            return this.root.classList.add('controls--disabled');
          this.root.classList.remove('controls--disabled'),
            (this.hoveredCell = r);
          let n = this.editor.view.nodeDOM(r.pos);
          if (!this.table || !n) return;
          let s = null == (e = this.table) ? void 0 : e.getBoundingClientRect(),
            o = null == n ? void 0 : n.getBoundingClientRect();
          this.columnsControl &&
            ((this.columnsControl.style.left = `${o.left - s.left - this.table.parentElement.scrollLeft}px`),
            (this.columnsControl.style.width = `${o.width}px`)),
            this.rowsControl &&
              ((this.rowsControl.style.top = `${o.top - s.top}px`),
              (this.rowsControl.style.height = `${o.height}px`));
        }
        selectColumn() {
          if (!this.hoveredCell) return;
          let e = this.map.colCount(this.hoveredCell.pos - (this.getPos() + 1)),
            t = this.hoveredCell.pos,
            r =
              this.map.map[e + this.map.width * (this.map.height - 1)] +
              (this.getPos() + 1),
            s = n.Xc.create(this.editor.view.state.doc, t, r);
          this.editor.view.dispatch(this.editor.state.tr.setSelection(s));
        }
        selectRow() {
          if (!this.hoveredCell) return;
          let e = this.hoveredCell.pos,
            t = this.map.map.indexOf(e - (this.getPos() + 1)),
            r = this.map.map[t + (this.map.width - 1)] + (this.getPos() + 1),
            s = n.Xc.create(this.editor.state.doc, e, r);
          this.editor.view.dispatch(this.editor.view.state.tr.setSelection(s));
        }
      };
      function eS(e, t) {
        return t ? e.createChecked(null, t) : e.createAndFill();
      }
      var eE = ({ editor: e }) => {
          let { selection: t } = e.state;
          if (!ep(t)) return !1;
          let r = 0,
            n = (0, a.findParentNodeClosestToPos)(
              t.ranges[0].$from,
              e => 'table' === e.type.name
            );
          return (
            null == n ||
              n.node.descendants(e => {
                if ('table' === e.type.name) return !1;
                ['tableCell', 'tableHeader'].includes(e.type.name) && (r += 1);
              }),
            r === t.ranges.length && (e.commands.deleteTable(), !0)
          );
        },
        eT = ({ editor: e }) => {
          if (!e.isActive('table')) return !1;
          try {
            let { selection: t } = e.state,
              r = ef(t, 'table');
            if (!r) return !1;
            let n = r.pos,
              s = r.node,
              o = s.childCount,
              i = s.child(o - 1);
            if (!t.$anchor.path.includes(i)) return !1;
            let a = n + s.nodeSize,
              l = e.state.doc.nodeAt(a);
            if (l && 'paragraph' === l.type.name) {
              let t = a + l.nodeSize - 1;
              e.chain().setTextSelection(t).run();
            } else {
              if (l) return !1;
              e.chain().insertContentAt(a, { type: 'paragraph' }).run(),
                e
                  .chain()
                  .setTextSelection(a + 1)
                  .run();
            }
            return !0;
          } catch (e) {
            return console.error('failed to insert line above table', e), !1;
          }
        },
        eA = ({ editor: e }) => {
          if (!e.isActive('table')) return !1;
          try {
            let { selection: t } = e.state,
              r = ef(t, 'table');
            if (!r) return !1;
            let n = r.pos,
              s = r.node.child(0);
            if (!t.$anchor.path.includes(s)) return !1;
            if (0 === n)
              e.chain().insertContentAt(n, { type: 'paragraph' }).run(),
                e
                  .chain()
                  .setTextSelection(n + 1)
                  .run();
            else {
              let t = n - 1;
              if (t <= 0) return !1;
              let r = e.state.doc.nodeAt(t - 1);
              if (!r || 'paragraph' !== r.type.name) return !1;
              {
                let t = n - r.nodeSize;
                e.chain().setTextSelection(t).run();
              }
            }
            return !0;
          } catch (e) {
            return console.error('failed to insert line above table', e), !1;
          }
        },
        eO = a.Node.create({
          name: 'table',
          addOptions: () => ({
            HTMLAttributes: {},
            resizable: !0,
            handleWidth: 5,
            cellMinWidth: 100,
            lastColumnResizable: !0,
            allowTableNodeSelection: !0,
          }),
          content: 'tableRow+',
          tableRole: 'table',
          isolating: !0,
          group: 'block',
          allowGapCursor: !1,
          parseHTML: () => [{ tag: 'table' }],
          renderHTML({ HTMLAttributes: e }) {
            return [
              'table',
              (0, a.mergeAttributes)(this.options.HTMLAttributes, e),
              ['tbody', 0],
            ];
          },
          addCommands: () => ({
            insertTable:
              ({ rows: e = 3, cols: t = 3, withHeaderRow: r = !1 } = {}) =>
              ({ tr: n, dispatch: s, editor: o }) => {
                let a = (function (e, t, r, n, s) {
                  let o = (function (e) {
                      if (e.cached.tableNodeTypes)
                        return e.cached.tableNodeTypes;
                      let t = {};
                      return (
                        Object.keys(e.nodes).forEach(r => {
                          let n = e.nodes[r];
                          n.spec.tableRole && (t[n.spec.tableRole] = n);
                        }),
                        (e.cached.tableNodeTypes = t),
                        t
                      );
                    })(e),
                    i = [],
                    a = [];
                  for (let e = 0; e < r; e += 1) {
                    let e = eS(o.cell, s);
                    if ((e && a.push(e), n)) {
                      let e = eS(o.header_cell, s);
                      e && i.push(e);
                    }
                  }
                  let l = [];
                  for (let e = 0; e < t; e += 1)
                    l.push(o.row.createChecked(null, n && 0 === e ? i : a));
                  return o.table.createChecked(null, l);
                })(o.schema, e, t, r);
                if (s) {
                  let e = n.selection.anchor + 1;
                  n.replaceSelectionWith(a)
                    .scrollIntoView()
                    .setSelection(i.Bs.near(n.doc.resolve(e)));
                }
                return !0;
              },
            addColumnBefore:
              () =>
              ({ state: e, dispatch: t }) =>
                (0, n.I_)(e, t),
            addColumnAfter:
              () =>
              ({ state: e, dispatch: t }) =>
                (0, n.e2)(e, t),
            deleteColumn:
              () =>
              ({ state: e, dispatch: t }) =>
                (0, n.eA)(e, t),
            addRowBefore:
              () =>
              ({ state: e, dispatch: t }) =>
                (0, n.z2)(e, t),
            addRowAfter:
              () =>
              ({ state: e, dispatch: t }) =>
                (0, n.dl)(e, t),
            deleteRow:
              () =>
              ({ state: e, dispatch: t }) =>
                (0, n.qK)(e, t),
            deleteTable:
              () =>
              ({ state: e, dispatch: t }) =>
                (0, n.WQ)(e, t),
            mergeCells:
              () =>
              ({ state: e, dispatch: t }) =>
                (0, n.JX)(e, t),
            splitCell:
              () =>
              ({ state: e, dispatch: t }) =>
                (0, n.Cr)(e, t),
            toggleHeaderColumn:
              () =>
              ({ state: e, dispatch: t }) =>
                (0, n.dO)('column')(e, t),
            toggleHeaderRow:
              () =>
              ({ state: e, dispatch: t }) =>
                (0, n.dO)('row')(e, t),
            toggleHeaderCell:
              () =>
              ({ state: e, dispatch: t }) =>
                (0, n.II)(e, t),
            mergeOrSplit:
              () =>
              ({ state: e, dispatch: t }) =>
                !!(0, n.JX)(e, t) || (0, n.Cr)(e, t),
            setCellAttribute:
              (e, t) =>
              ({ state: r, dispatch: s }) =>
                (0, n.wb)(e, t)(r, s),
            goToNextCell:
              () =>
              ({ state: e, dispatch: t }) =>
                (0, n.nA)(1)(e, t),
            goToPreviousCell:
              () =>
              ({ state: e, dispatch: t }) =>
                (0, n.nA)(-1)(e, t),
            fixTables:
              () =>
              ({ state: e, dispatch: t }) => (t && (0, n.tp)(e), !0),
            setCellSelection:
              e =>
              ({ tr: t, dispatch: r }) => {
                if (r) {
                  let r = n.Xc.create(t.doc, e.anchorCell, e.headCell);
                  t.setSelection(r);
                }
                return !0;
              },
          }),
          addKeyboardShortcuts() {
            return {
              Tab: () =>
                !!this.editor.commands.goToNextCell() ||
                (!!this.editor.can().addRowAfter() &&
                  this.editor.chain().addRowAfter().goToNextCell().run()),
              'Shift-Tab': () => this.editor.commands.goToPreviousCell(),
              Backspace: eE,
              'Mod-Backspace': eE,
              Delete: eE,
              'Mod-Delete': eE,
              ArrowDown: eT,
              ArrowUp: eA,
            };
          },
          addNodeView() {
            return ({ editor: e, getPos: t, node: r, decorations: n }) => {
              let { cellMinWidth: s } = this.options;
              return new eC(r, s, n, e, t);
            };
          },
          addProseMirrorPlugins() {
            let e = this.options.resizable && this.editor.isEditable,
              t = [
                (0, n.G3)({
                  allowTableNodeSelection: this.options.allowTableNodeSelection,
                }),
                new i.Sy({
                  key: ey,
                  state: { init: () => new ev(), apply: (e, t) => t.apply(e) },
                  props: {
                    handleDOMEvents: {
                      mousemove: (e, t) => {
                        var r;
                        let n = ey.getState(e.state);
                        if (
                          !t.target.closest('.table-wrapper') &&
                          n.values.hoveredTable
                        )
                          return e.dispatch(
                            e.state.tr.setMeta(ey, {
                              setHoveredTable: null,
                              setHoveredCell: null,
                            })
                          );
                        let s = e.posAtCoords({
                          left: t.clientX,
                          top: t.clientY,
                        });
                        if (!s || s.pos < 0 || s.pos > e.state.doc.content.size)
                          return;
                        let o = (0, a.findParentNode)(
                            e => 'table' === e.type.name
                          )(i.Bs.create(e.state.doc, s.pos)),
                          l = (0, a.findParentNode)(
                            e =>
                              'tableCell' === e.type.name ||
                              'tableHeader' === e.type.name
                          )(i.Bs.create(e.state.doc, s.pos));
                        if (
                          !(!o || !l) &&
                          (null == (r = n.values.hoveredCell)
                            ? void 0
                            : r.pos) !== l.pos
                        )
                          return e.dispatch(
                            e.state.tr.setMeta(ey, {
                              setHoveredTable: o,
                              setHoveredCell: l,
                            })
                          );
                      },
                    },
                    decorations: e => {
                      let t = ey.getState(e);
                      if (!t) return null;
                      let { hoveredTable: r, hoveredCell: n } = t.values,
                        s = e.doc.content.size;
                      if (r && n && r.pos < s && n.pos < s) {
                        let t = [
                          l.p.node(
                            r.pos,
                            r.pos + r.node.nodeSize,
                            {},
                            { hoveredTable: r, hoveredCell: n }
                          ),
                        ];
                        return l.EH.create(e.doc, t);
                      }
                      return null;
                    },
                  },
                }),
              ];
            return (
              e &&
                t.unshift(
                  (0, n.VH)({
                    handleWidth: this.options.handleWidth,
                    cellMinWidth: this.options.cellMinWidth,
                    lastColumnResizable: this.options.lastColumnResizable,
                  })
                ),
              t
            );
          },
          extendNodeSchema(e) {
            let t = { name: e.name, options: e.options, storage: e.storage };
            return {
              tableRole: (0, a.callOrReturn)(
                (0, a.getExtensionField)(e, 'tableRole', t)
              ),
            };
          },
        }),
        eR = new i.H$('upload-image'),
        eM = (e, t) => {
          let r = null;
          return new i.Sy({
            key: eR,
            view: e => (
              (r = e),
              {
                destroy() {
                  r = null;
                },
              }
            ),
            state: {
              init: () => l.EH.empty,
              apply(n, s) {
                s = s.map(n.mapping, n.doc);
                let o = n.getMeta(eR);
                if (o && o.add) {
                  let { id: i, pos: a, src: c } = o.add,
                    d = document.createElement('div');
                  d.setAttribute('class', 'img-placeholder');
                  let u = document.createElement('img');
                  u.setAttribute(
                    'class',
                    'opacity-60 rounded-lg border border-custom-border-300'
                  ),
                    (u.src = c),
                    d.appendChild(u);
                  let p = document.createElement('button');
                  (p.type = 'button'),
                    (p.style.position = 'absolute'),
                    (p.style.right = '3px'),
                    (p.style.top = '3px'),
                    p.setAttribute('class', 'opacity-90 rounded-lg'),
                    (p.onclick = () => {
                      r && (null == t || t(), eI(e, r, i));
                    });
                  let h = new DOMParser().parseFromString(
                    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-circle"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>',
                    'image/svg+xml'
                  ).documentElement;
                  p.appendChild(h), d.appendChild(p);
                  let m = l.p.widget(a, d, { id: i });
                  s = s.add(n.doc, [m]);
                } else
                  o &&
                    o.remove &&
                    (s = s.remove(
                      s.find(void 0, void 0, e => e.id == o.remove.id)
                    ));
                return s;
              },
            },
            props: {
              decorations(e) {
                return this.getState(e);
              },
            },
          });
        },
        eI = (e, t, r) => {
          let n = t.state.tr.setMeta(eR, { remove: { id: r } });
          t.dispatch(n), (e.storage.image.uploadInProgress = !1);
        };
      function ez(e, t, r, n, s) {
        return ed(this, null, function* () {
          if (((e.storage.image.uploadInProgress = !0), !t)) {
            alert('No file selected. Please select a file to upload.'),
              (e.storage.image.uploadInProgress = !1);
            return;
          }
          if (!t.type.includes('image/')) {
            alert('Invalid file type. Please select an image file.'),
              (e.storage.image.uploadInProgress = !1);
            return;
          }
          if (t.size > 5242880) {
            alert(
              'File size too large. Please select a file smaller than 5MB.'
            ),
              (e.storage.image.uploadInProgress = !1);
            return;
          }
          let o = {},
            i = r.state.tr;
          i.selection.empty || i.deleteSelection();
          let a = new FileReader();
          a.readAsDataURL(t),
            (a.onload = () => {
              i.setMeta(eR, { add: { id: o, pos: n, src: a.result } }),
                r.dispatch(i);
            }),
            (a.onerror = t => {
              console.error('FileReader error: ', t), eI(e, r, o);
            });
          try {
            var l;
            let i,
              c = yield e_(t, s),
              { schema: d } = r.state;
            if (
              ((l = r.state),
              (n = (i = eR.getState(l).find(void 0, void 0, e => e.id == o))
                .length
                ? i[0].from
                : null),
              null == n)
            ) {
              e.storage.image.uploadInProgress = !1;
              return;
            }
            let u = 'object' == typeof c ? a.result : c,
              p = d.nodes.image.create({ src: u }),
              h = r.state.tr
                .insert(n - 1, p)
                .setMeta(eR, { remove: { id: o } });
            r.dispatch(h),
              r.hasFocus() && r.focus(),
              (e.storage.image.uploadInProgress = !1);
          } catch (t) {
            eI(e, r, o);
          }
        });
      }
      var e_ = (e, t) => {
          try {
            return new Promise((r, n) =>
              ed(void 0, null, function* () {
                try {
                  let n = yield t(e),
                    s = new Image();
                  (s.src = n),
                    (s.onload = () => {
                      r(n);
                    });
                } catch (e) {
                  e instanceof Error && console.log(e.message), n(e);
                }
              })
            );
          } catch (e) {
            return Promise.reject(e);
          }
        },
        eL = e => {
          let {
            editor: t,
            editorContainerClassName: r,
            hideDragHandle: n,
            children: s,
          } = e;
          return (0, u.jsx)('div', {
            id: 'editor-container',
            onClick: () => {
              if (t && t.isEditable)
                try {
                  if (t.isFocused) return;
                  let { selection: e } = t.state,
                    r = e.$from.node();
                  if (
                    (null == t ||
                      t.chain().focus('end', { scrollIntoView: !1 }).run(),
                    0 === r.content.size &&
                      !(
                        t.isActive('orderedList') ||
                        t.isActive('bulletList') ||
                        t.isActive('taskItem') ||
                        t.isActive('table') ||
                        t.isActive('blockquote') ||
                        t.isActive('codeBlock')
                      ))
                  )
                    return;
                  let n = null == t ? void 0 : t.state.doc.content.size;
                  null == t ||
                    t.chain().insertContentAt(n, { type: 'paragraph' }).run(),
                    t
                      .chain()
                      .setTextSelection(n + 1)
                      .run();
                } catch (e) {
                  console.error(
                    'An error occurred while handling container click to insert new empty node at bottom:',
                    e
                  );
                }
            },
            onMouseLeave: n,
            className: em(
              'cursor-text relative',
              {
                'active-editor':
                  (null == t ? void 0 : t.isFocused) &&
                  (null == t ? void 0 : t.isEditable),
              },
              r
            ),
            children: s,
          });
        },
        eP = ({ editor: e }) => {
          let t = () => {
              let t = document.querySelector('.ProseMirror-selectednode');
              if (t) {
                let r = e.state.selection,
                  n = t.style.width
                    ? Number(t.style.width.replace('px', ''))
                    : t.getAttribute('width'),
                  s = t.style.height
                    ? Number(t.style.height.replace('px', ''))
                    : t.getAttribute('height');
                e.commands.setImage({ src: t.src, width: n, height: s }),
                  e.commands.setNodeSelection(r.from);
              }
            },
            [r, n] = (0, h.useState)(1);
          return (0, u.jsx)(u.Fragment, {
            children: (0, u.jsx)(m.ZP, {
              target: document.querySelector('.ProseMirror-selectednode'),
              container: null,
              origin: !1,
              edge: !1,
              throttleDrag: 0,
              keepRatio: !0,
              resizable: !0,
              throttleResize: 0,
              onResizeStart: () => {
                let e = document.querySelector('.ProseMirror-selectednode');
                e && n(Number(e.width) / Number(e.height));
              },
              onResize: ({ target: e, width: t, height: n, delta: s }) => {
                if (s[0] || s[1]) {
                  let o, i;
                  s[0]
                    ? (i = (o = Math.max(t, 100)) / r)
                    : s[1] && (o = (i = Math.max(n, 100)) * r),
                    (e.style.width = `${o}px`),
                    (e.style.height = `${i}px`);
                }
              },
              onResizeEnd: () => {
                t();
              },
              scalable: !0,
              renderDirections: ['se'],
              onScale: ({ target: e, transform: t }) => {
                e.style.transform = t;
              },
            }),
          });
        },
        eF = e => {
          let { editor: t, tabIndex: r, children: n } = e;
          return (0, u.jsxs)('div', {
            tabIndex: r,
            onFocus: () =>
              null == t
                ? void 0
                : t
                    .chain()
                    .focus(void 0, { scrollIntoView: !1 })
                    .run(),
            children: [
              (0, u.jsx)(p.kg, { editor: t }),
              (null == t ? void 0 : t.isActive('image')) &&
                (null == t ? void 0 : t.isEditable) &&
                (0, u.jsx)(eP, { editor: t }),
              n,
            ],
          });
        },
        eD = a.Node.create({
          name: 'tableCell',
          addOptions: () => ({ HTMLAttributes: {} }),
          content: 'block+',
          addAttributes: () => ({
            colspan: { default: 1 },
            rowspan: { default: 1 },
            colwidth: {
              default: null,
              parseHTML: e => {
                let t = e.getAttribute('colwidth');
                return t ? [parseInt(t, 10)] : null;
              },
            },
            background: { default: null },
            textColor: { default: null },
          }),
          tableRole: 'cell',
          isolating: !0,
          parseHTML: () => [{ tag: 'td' }],
          renderHTML({ node: e, HTMLAttributes: t }) {
            return [
              'td',
              (0, a.mergeAttributes)(this.options.HTMLAttributes, t, {
                style: `background-color: ${e.attrs.background}; color: ${e.attrs.textColor}`,
              }),
              0,
            ];
          },
        }),
        eB = a.Node.create({
          name: 'tableHeader',
          addOptions: () => ({ HTMLAttributes: {} }),
          content: 'paragraph+',
          addAttributes: () => ({
            colspan: { default: 1 },
            rowspan: { default: 1 },
            colwidth: {
              default: null,
              parseHTML: e => {
                let t = e.getAttribute('colwidth');
                return t ? [parseInt(t, 10)] : null;
              },
            },
            background: { default: 'none' },
          }),
          tableRole: 'header_cell',
          isolating: !0,
          parseHTML: () => [{ tag: 'th' }],
          renderHTML({ node: e, HTMLAttributes: t }) {
            return [
              'th',
              (0, a.mergeAttributes)(this.options.HTMLAttributes, t, {
                style: `background-color: ${e.attrs.background}`,
              }),
              0,
            ];
          },
        }),
        eH = a.Node.create({
          name: 'tableRow',
          addOptions: () => ({ HTMLAttributes: {} }),
          addAttributes: () => ({
            background: { default: null },
            textColor: { default: null },
          }),
          content: '(tableCell | tableHeader)*',
          tableRole: 'row',
          parseHTML: () => [{ tag: 'tr' }],
          renderHTML({ HTMLAttributes: e }) {
            let t = e.background
              ? `background-color: ${e.background}; color: ${e.textColor}`
              : '';
            return [
              'tr',
              (0, a.mergeAttributes)(this.options.HTMLAttributes, e, {
                style: t,
              }),
              0,
            ];
          },
        });
      new i.H$('delete-image');
      var eJ = ({ editor: e }) => {
          try {
            let { selection: t, doc: r } = e.state,
              { $from: n, $to: s } = t,
              o = null,
              i = null;
            if (
              (r.nodesBetween(
                n.pos,
                s.pos,
                (e, t) => 'image' !== e.type.name || ((o = e), (i = t), !1)
              ),
              null === o || null === i)
            )
              return !1;
            let a = i + o.nodeSize,
              l = r.nodeAt(a);
            if (l && 'paragraph' === l.type.name) {
              let t = a + l.nodeSize - 1;
              e.chain().setTextSelection(t).run();
            } else {
              if (l) return !1;
              e.chain().insertContentAt(a, { type: 'paragraph' }).run(),
                e
                  .chain()
                  .setTextSelection(a + 1)
                  .run();
            }
            return !0;
          } catch (e) {
            return (
              console.error(
                'An error occurred while inserting a line below the image:',
                e
              ),
              !1
            );
          }
        },
        e$ = ({ editor: e }) => {
          try {
            let { selection: t, doc: r } = e.state,
              { $from: n, $to: s } = t,
              o = null,
              i = null;
            if (
              (r.nodesBetween(
                n.pos,
                s.pos,
                (e, t) => 'image' !== e.type.name || ((o = e), (i = t), !1)
              ),
              null === o || null === i)
            )
              return !1;
            let a = i,
              l = e.state.doc.content.size;
            if (a < 0 || a > l) return !1;
            if (0 === a)
              e.chain().insertContentAt(a, { type: 'paragraph' }).run(),
                e.chain().setTextSelection(a).run();
            else {
              let t = r.nodeAt(a);
              if (!t || 'paragraph' !== t.type.name) return !1;
              e.chain().setTextSelection(a).run();
            }
            return !0;
          } catch (e) {
            return (
              console.error(
                'An error occurred while inserting a line above the image:',
                e
              ),
              !1
            );
          }
        },
        eq = new i.H$('delete-image'),
        eU = 'image',
        eV = (e, t, r) =>
          k.ZP.extend({
            addKeyboardShortcuts: () => ({ ArrowDown: eJ, ArrowUp: e$ }),
            addProseMirrorPlugins() {
              return [
                eM(this.editor, r),
                new i.Sy({
                  key: eq,
                  appendTransaction: (t, r, n) => {
                    let s = new Set();
                    return (
                      n.doc.descendants(e => {
                        e.type.name === eU && s.add(e.attrs.src);
                      }),
                      t.forEach(t => {
                        if (!t.docChanged) return;
                        let n = [];
                        r.doc.descendants((e, t) => {
                          e.type.name === eU &&
                            (s.has(e.attrs.src) || n.push(e));
                        }),
                          n.forEach(t =>
                            ed(this, null, function* () {
                              let r = t.attrs.src;
                              this.storage.images.set(r, !0),
                                yield (function (e, t) {
                                  return ed(this, null, function* () {
                                    try {
                                      let r = new URL(e).pathname.substring(1);
                                      yield t(r);
                                    } catch (e) {
                                      console.error(
                                        'Error deleting image: ',
                                        e
                                      );
                                    }
                                  });
                                })(r, e);
                            })
                          );
                      }),
                      null
                    );
                  },
                }),
                new i.Sy({
                  key: new i.H$('imageRestoration'),
                  appendTransaction: (e, r, n) => {
                    let s = new Set();
                    return (
                      r.doc.descendants(e => {
                        e.type.name === eU && s.add(e.attrs.src);
                      }),
                      e.forEach(e => {
                        if (!e.docChanged) return;
                        let r = [];
                        n.doc.descendants((e, t) => {
                          e.type.name === eU &&
                            (t < 0 ||
                              t > n.doc.content.size ||
                              s.has(e.attrs.src) ||
                              r.push(e));
                        }),
                          r.forEach(e =>
                            ed(this, null, function* () {
                              let r = this.storage.images.get(e.attrs.src);
                              void 0 === r
                                ? this.storage.images.set(e.attrs.src, !1)
                                : !0 === r &&
                                  (yield (function (e, t) {
                                    return ed(this, null, function* () {
                                      try {
                                        let r = new URL(e).pathname.substring(
                                          1
                                        );
                                        yield t(r);
                                      } catch (e) {
                                        console.error(
                                          'Error restoring image: ',
                                          e
                                        );
                                      }
                                    });
                                  })(e.attrs.src, t));
                            })
                          );
                      }),
                      null
                    );
                  },
                }),
              ];
            },
            onCreate() {
              let e = new Set();
              this.editor.state.doc.descendants(t => {
                t.type.name === eU && e.add(t.attrs.src);
              }),
                e.forEach(e =>
                  ed(this, null, function* () {
                    try {
                      let r = new URL(e).pathname.substring(1);
                      yield t(r);
                    } catch (e) {
                      console.error('Error restoring image: ', e);
                    }
                  })
                );
            },
            addStorage: () => ({ images: new Map(), uploadInProgress: !1 }),
            addAttributes() {
              var e;
              return ec(
                el({}, null == (e = this.parent) ? void 0 : e.call(this)),
                { width: { default: '35%' }, height: { default: null } }
              );
            },
          }),
        eZ = e => {
          let t = (0, N.useRouter)(),
            [r, n] = (0, h.useState)();
          return (
            (0, h.useEffect)(() => {
              e.extension.options.mentionHighlights &&
                ed(void 0, null, function* () {
                  n(yield e.extension.options.mentionHighlights());
                });
            }, [e.extension.options]),
            (0, u.jsx)(p.T5, {
              className: 'mention-component inline w-fit',
              children: (0, u.jsxs)('span', {
                className: em(
                  'mention rounded bg-custom-primary-100/20 px-1 py-0.5 font-medium text-custom-primary-100',
                  {
                    'bg-yellow-500/20 text-yellow-500':
                      !!r && r.includes(e.node.attrs.entity_identifier),
                    'cursor-pointer': !e.extension.options.readonly,
                  }
                ),
                onClick: () => {
                  e.extension.options.readonly ||
                    t.push(e.node.attrs.redirect_uri);
                },
                children: ['@', e.node.attrs.label],
              }),
            })
          );
        },
        eW = j.pf.extend({
          addStorage: () => ({ mentionsOpen: !1 }),
          addAttributes: () => ({
            id: { default: null },
            label: { default: null },
            target: { default: null },
            self: { default: !1 },
            redirect_uri: { default: '/' },
            entity_identifier: { default: null },
            entity_name: { default: null },
          }),
          addNodeView: () => (0, p.fW)(eZ),
          parseHTML: () => [{ tag: 'mention-component' }],
          renderHTML: ({ HTMLAttributes: e }) => [
            'mention-component',
            (0, a.mergeAttributes)(e),
          ],
        }),
        eY = new Uint8Array(256),
        eK = eY.length,
        eG = [];
      for (let e = 0; e < 256; ++e) eG.push((e + 256).toString(16).slice(1));
      var eX = { randomUUID: C.randomUUID },
        eQ = function (e, t, r) {
          if (eX.randomUUID && !t && !e) return eX.randomUUID();
          let n =
            (e = e || {}).random ||
            (
              e.rng ||
              function () {
                return (
                  eK > eY.length - 16 && (C.randomFillSync(eY), (eK = 0)),
                  eY.slice(eK, (eK += 16))
                );
              }
            )();
          if (((n[6] = (15 & n[6]) | 64), (n[8] = (63 & n[8]) | 128), t)) {
            r = r || 0;
            for (let e = 0; e < 16; ++e) t[r + e] = n[e];
            return t;
          }
          return (function (e, t = 0) {
            return (
              eG[e[t + 0]] +
              eG[e[t + 1]] +
              eG[e[t + 2]] +
              eG[e[t + 3]] +
              '-' +
              eG[e[t + 4]] +
              eG[e[t + 5]] +
              '-' +
              eG[e[t + 6]] +
              eG[e[t + 7]] +
              '-' +
              eG[e[t + 8]] +
              eG[e[t + 9]] +
              '-' +
              eG[e[t + 10]] +
              eG[e[t + 11]] +
              eG[e[t + 12]] +
              eG[e[t + 13]] +
              eG[e[t + 14]] +
              eG[e[t + 15]]
            );
          })(n);
        },
        e0 = (0, h.forwardRef)((e, t) => {
          let { query: r, mentionSuggestions: n } = e,
            [s, o] = (0, h.useState)([]),
            [i, a] = (0, h.useState)(0),
            [l, c] = (0, h.useState)(!1);
          (0, h.useEffect)(() => {
            ed(void 0, null, function* () {
              c(!0);
              try {
                let e = (yield n())
                  .map(e => {
                    let t = eQ();
                    return ec(el({}, e), { id: t });
                  })
                  .filter(e =>
                    e.title.toLowerCase().startsWith(r.toLowerCase())
                  );
                o(e);
              } catch (e) {
                console.error('Failed to fetch suggestions:', e);
              } finally {
                c(!1);
              }
            });
          }, [r, n]);
          let d = t => {
              try {
                let r = s[t];
                r &&
                  e.command({
                    id: r.id,
                    label: r.title,
                    entity_identifier: r.entity_identifier,
                    entity_name: r.entity_name,
                    target: 'users',
                    redirect_uri: r.redirect_uri,
                  });
              } catch (e) {
                console.error('Error selecting item:', e);
              }
            },
            p = (0, h.useRef)(null);
          (0, h.useLayoutEffect)(() => {
            let e = null == p ? void 0 : p.current,
              t = null == e ? void 0 : e.children[i];
            t && e && m(e, t);
          }, [i]);
          let m = (e, t) => {
              let r = e.offsetHeight,
                n = t ? t.offsetHeight : 0,
                s = t.offsetTop,
                o = s + n;
              s < e.scrollTop
                ? (e.scrollTop -= e.scrollTop - s + 5)
                : o > r + e.scrollTop &&
                  (e.scrollTop += o - r - e.scrollTop + 5);
            },
            f = () => {
              a((i + s.length - 1) % s.length);
            },
            g = () => {
              a((i + 1) % s.length);
            },
            x = () => {
              d(i);
            };
          return (
            (0, h.useEffect)(() => {
              a(0);
            }, [s]),
            (0, h.useImperativeHandle)(t, () => ({
              onKeyDown: ({ event: e }) =>
                'ArrowUp' === e.key
                  ? (f(), !0)
                  : 'ArrowDown' === e.key
                    ? (g(), !0)
                    : 'Enter' === e.key && (x(), !0),
            })),
            (0, u.jsx)('div', {
              ref: p,
              className:
                'mentions max-h-48 min-w-[12rem] rounded-md bg-custom-background-100 border-[0.5px] border-custom-border-300 px-2 py-2.5 text-xs shadow-custom-shadow-rg overflow-y-scroll',
              children: l
                ? (0, u.jsx)('div', {
                    className: 'text-center text-custom-text-400',
                    children: 'Loading...',
                  })
                : s.length
                  ? s.map((e, t) =>
                      (0, u.jsxs)(
                        'div',
                        {
                          className: em(
                            'flex cursor-pointer items-center gap-2 rounded px-1 py-1.5 hover:bg-custom-background-80 text-custom-text-200',
                            { 'bg-custom-background-80': t === i }
                          ),
                          onClick: () => d(t),
                          children: [
                            (0, u.jsx)(S.qE, {
                              name: null == e ? void 0 : e.title,
                              src: null == e ? void 0 : e.avatar,
                            }),
                            (0, u.jsx)('span', {
                              className: 'flex-grow truncate',
                              children: e.title,
                            }),
                          ],
                        },
                        e.id
                      )
                    )
                  : (0, u.jsx)('div', {
                      className: 'text-center text-custom-text-400',
                      children: 'No results',
                    }),
            })
          );
        });
      e0.displayName = 'MentionList';
      var e1 = ({ mentionHighlights: e, mentionSuggestions: t, readonly: r }) =>
        eW.configure({
          HTMLAttributes: { class: 'mention' },
          readonly: r,
          mentionHighlights: e,
          suggestion: {
            render: () => {
              if (!t) return;
              let e = null,
                r = null;
              return {
                onStart: n => {
                  n.clientRect &&
                    ((e = new p.M_(e0, {
                      props: ec(el({}, n), { mentionSuggestions: t }),
                      editor: n.editor,
                    })),
                    (n.editor.storage.mentionsOpen = !0),
                    (r = (0, d.ZP)('body', {
                      getReferenceClientRect: n.clientRect,
                      appendTo: () => {
                        var e;
                        return null !=
                          (e = document.querySelector('.active-editor'))
                          ? e
                          : document.querySelector('#editor-container');
                      },
                      content: e.element,
                      showOnCreate: !0,
                      interactive: !0,
                      trigger: 'manual',
                      placement: 'bottom-start',
                    })));
                },
                onUpdate: t => {
                  null == e || e.updateProps(t),
                    t.clientRect &&
                      r &&
                      r[0].setProps({ getReferenceClientRect: t.clientRect });
                },
                onKeyDown: t => {
                  var n;
                  return 'Escape' === t.event.key
                    ? (null == r || r[0].hide(), !0)
                    : !!['ArrowUp', 'ArrowDown', 'Enter'].includes(
                        t.event.key
                      ) &&
                        (null == (n = null == e ? void 0 : e.ref) ||
                          n.onKeyDown(t),
                        null == event || event.stopPropagation(),
                        !0);
                },
                onExit: t => {
                  (t.editor.storage.mentionsOpen = !1),
                    null == r || r[0].destroy(),
                    null == e || e.destroy();
                },
              };
            },
          },
        });
      (0, E.B)(T.y).register('ts', A.Z);
      var e2 = ({ node: e }) => {
          let [t, r] = (0, h.useState)(!1);
          return (0, u.jsxs)(p.T5, {
            className: 'code-block relative group/code',
            children: [
              (0, u.jsx)(S.u, {
                tooltipContent: 'Copy code',
                children: (0, u.jsx)('button', {
                  type: 'button',
                  className: em(
                    'group/button hidden group-hover/code:flex items-center justify-center absolute top-2 right-2 z-10 size-8 rounded-md bg-custom-background-80 border border-custom-border-200 transition duration-150 ease-in-out',
                    {
                      'bg-green-500/10 hover:bg-green-500/10 active:bg-green-500/10':
                        t,
                    }
                  ),
                  onClick: t =>
                    ed(void 0, null, function* () {
                      try {
                        yield navigator.clipboard.writeText(e.textContent),
                          r(!0),
                          setTimeout(() => r(!1), 1e3);
                      } catch (e) {
                        r(!1);
                      }
                      t.preventDefault(), t.stopPropagation();
                    }),
                  children: t
                    ? (0, u.jsx)(O.Z, {
                        className: 'h-3 w-3 text-green-500',
                        strokeWidth: 3,
                      })
                    : (0, u.jsx)(R.Z, {
                        className:
                          'h-3 w-3 text-custom-text-300 group-hover/button:text-custom-text-100',
                      }),
                }),
              }),
              (0, u.jsx)('pre', {
                className:
                  'bg-custom-background-90 text-custom-text-100 rounded-lg p-8 pl-9 pr-4',
                children: (0, u.jsx)(p.ms, {
                  as: 'code',
                  className: 'whitespace-[pre-wrap]',
                }),
              }),
            ],
          });
        },
        e3 = /^```([a-z]+)?[\s\n]$/,
        e5 = /^~~~([a-z]+)?[\s\n]$/;
      function e4(e) {
        return e.value || e.children || [];
      }
      function e8({ doc: e, name: t, lowlight: r, defaultLanguage: n }) {
        let s = [];
        return (
          (0, a.findChildren)(e, e => e.type.name === t).forEach(e => {
            let t = e.pos + 1,
              o = e.node.attrs.language || n,
              i = r.listLanguages();
            (function e(t, r = []) {
              return t
                .map(t => {
                  let n = [
                    ...r,
                    ...(t.properties ? t.properties.className : []),
                  ];
                  return t.children
                    ? e(t.children, n)
                    : { text: t.value, classes: n };
                })
                .flat();
            })(
              o && (i.includes(o) || M.Z.getLanguage(o))
                ? e4(r.highlight(o, e.node.textContent))
                : e4(r.highlightAuto(e.node.textContent))
            ).forEach(e => {
              let r = t + e.text.length;
              if (e.classes.length) {
                let n = l.p.inline(t, r, { class: e.classes.join(' ') });
                s.push(n);
              }
              t = r;
            });
          }),
          l.EH.create(e, s)
        );
      }
      var e6 = a.Node.create({
          name: 'codeBlock',
          addOptions: () => ({
            languageClassPrefix: 'language-',
            exitOnTripleEnter: !0,
            exitOnArrowDown: !0,
            HTMLAttributes: {},
          }),
          content: 'text*',
          marks: '',
          group: 'block',
          code: !0,
          defining: !0,
          addAttributes() {
            return {
              language: {
                default: null,
                parseHTML: e => {
                  var t;
                  let { languageClassPrefix: r } = this.options;
                  return (
                    [
                      ...((null == (t = e.firstElementChild)
                        ? void 0
                        : t.classList) || []),
                    ]
                      .filter(e => e.startsWith(r))
                      .map(e => e.replace(r, ''))[0] || null
                  );
                },
                rendered: !1,
              },
            };
          },
          parseHTML: () => [{ tag: 'pre', preserveWhitespace: 'full' }],
          renderHTML({ node: e, HTMLAttributes: t }) {
            return [
              'pre',
              (0, a.mergeAttributes)(this.options.HTMLAttributes, t),
              [
                'code',
                {
                  class: e.attrs.language
                    ? this.options.languageClassPrefix + e.attrs.language
                    : null,
                },
                0,
              ],
            ];
          },
          addCommands() {
            return {
              setCodeBlock:
                e =>
                ({ commands: t }) =>
                  t.setNode(this.name, e),
              toggleCodeBlock:
                e =>
                ({ commands: t }) =>
                  t.toggleNode(this.name, 'paragraph', e),
            };
          },
          addKeyboardShortcuts() {
            return {
              'Mod-Alt-c': () => this.editor.commands.toggleCodeBlock(),
              Backspace: () => {
                try {
                  let { empty: e, $anchor: t } = this.editor.state.selection,
                    r = 1 === t.pos;
                  return (
                    !!e &&
                    t.parent.type.name === this.name &&
                    (!!r || !t.parent.textContent.length) &&
                    this.editor.commands.clearNodes()
                  );
                } catch (e) {
                  return (
                    console.error('Error handling Backspace in code block:', e),
                    !1
                  );
                }
              },
              Enter: ({ editor: e }) => {
                try {
                  if (!this.options.exitOnTripleEnter) return !1;
                  let { state: t } = e,
                    { selection: r } = t,
                    { $from: n, empty: s } = r;
                  if (!s || n.parent.type !== this.type) return !1;
                  let o = n.parentOffset === n.parent.nodeSize - 2,
                    i = n.parent.textContent.endsWith(`

`);
                  return (
                    !!o &&
                    !!i &&
                    e
                      .chain()
                      .command(({ tr: e }) => (e.delete(n.pos - 2, n.pos), !0))
                      .exitCode()
                      .run()
                  );
                } catch (e) {
                  return (
                    console.error('Error handling Enter in code block:', e), !1
                  );
                }
              },
              ArrowDown: ({ editor: e }) => {
                try {
                  if (!this.options.exitOnArrowDown) return !1;
                  let { state: t } = e,
                    { selection: r, doc: n } = t,
                    { $from: s, empty: o } = r;
                  if (
                    !o ||
                    s.parent.type !== this.type ||
                    s.parentOffset !== s.parent.nodeSize - 2
                  )
                    return !1;
                  let i = s.after();
                  return (
                    !(void 0 === i || n.nodeAt(i)) && e.commands.exitCode()
                  );
                } catch (e) {
                  return (
                    console.error('Error handling ArrowDown in code block:', e),
                    !1
                  );
                }
              },
            };
          },
          addInputRules() {
            return [
              (0, a.textblockTypeInputRule)({
                find: e3,
                type: this.type,
                getAttributes: e => ({ language: e[1] }),
              }),
              (0, a.textblockTypeInputRule)({
                find: e5,
                type: this.type,
                getAttributes: e => ({ language: e[1] }),
              }),
            ];
          },
          addProseMirrorPlugins() {
            return [
              new i.Sy({
                key: new i.H$('codeBlockVSCodeHandlerCustom'),
                props: {
                  handlePaste: (e, t) => {
                    try {
                      if (
                        !t.clipboardData ||
                        this.editor.isActive(this.type.name)
                      )
                        return !1;
                      if (this.editor.isActive('code')) {
                        t.preventDefault();
                        let r = t.clipboardData.getData('text/plain');
                        if (!r)
                          return console.error('Pasted text is empty.'), !1;
                        let { tr: n } = e.state,
                          { $from: s, $to: o } = n.selection;
                        if (s.pos > o.pos)
                          return console.error('Invalid selection range.'), !1;
                        let i = n.doc.content.size;
                        if (s.pos < 0 || o.pos > i)
                          return (
                            console.error(
                              'Selection range is out of document bounds.'
                            ),
                            !1
                          );
                        let a = e.state.schema.marks.code.create();
                        return (
                          n.replaceWith(
                            s.pos,
                            o.pos,
                            e.state.schema.text(r, [a])
                          ),
                          e.dispatch(n),
                          !0
                        );
                      }
                      t.preventDefault();
                      let r = t.clipboardData.getData('text/plain'),
                        n = t.clipboardData.getData('vscode-editor-data'),
                        s = n ? JSON.parse(n) : void 0,
                        o = null == s ? void 0 : s.mode;
                      if (!s || !o) return !1;
                      {
                        let { tr: t } = e.state,
                          { $from: n } = t.selection,
                          s;
                        if (
                          (s = n.parent.textContent.trim()
                            ? n.end(n.depth) + 1
                            : n.pos - 1) < 0 ||
                          s > t.doc.content.size
                        )
                          return console.error('Invalid insert position.'), !1;
                        let i = e.state.schema.text(
                            r.replace(
                              /\r\n?/g,
                              `
`
                            )
                          ),
                          a = this.type.create({ language: o }, i);
                        return (
                          s <= t.doc.content.size &&
                          (t.insert(s, a), e.dispatch(t), !0)
                        );
                      }
                    } catch (e) {
                      return (
                        console.error(
                          'Error handling paste in CodeBlock extension:',
                          e
                        ),
                        !1
                      );
                    }
                  },
                },
              }),
            ];
          },
        }).extend({
          addOptions() {
            var e;
            return ec(
              el({}, null == (e = this.parent) ? void 0 : e.call(this)),
              { lowlight: {}, defaultLanguage: null }
            );
          },
          addProseMirrorPlugins() {
            var e;
            return [
              ...((null == (e = this.parent) ? void 0 : e.call(this)) || []),
              (function ({ name: e, lowlight: t, defaultLanguage: r }) {
                if (
                  !['highlight', 'highlightAuto', 'listLanguages'].every(
                    e => 'function' == typeof t[e]
                  )
                )
                  throw Error(
                    'You should provide an instance of lowlight to use the code-block-lowlight extension'
                  );
                let n = new i.Sy({
                  key: new i.H$('lowlight'),
                  state: {
                    init: (n, { doc: s }) =>
                      e8({ doc: s, name: e, lowlight: t, defaultLanguage: r }),
                    apply: (n, s, o, i) => {
                      let l = o.selection.$head.parent.type.name,
                        c = i.selection.$head.parent.type.name,
                        d = (0, a.findChildren)(o.doc, t => t.type.name === e),
                        u = (0, a.findChildren)(i.doc, t => t.type.name === e);
                      return n.docChanged &&
                        ([l, c].includes(e) ||
                          u.length !== d.length ||
                          n.steps.some(
                            e =>
                              void 0 !== e.from &&
                              void 0 !== e.to &&
                              d.some(
                                t =>
                                  t.pos >= e.from &&
                                  t.pos + t.node.nodeSize <= e.to
                              )
                          ))
                        ? e8({
                            doc: n.doc,
                            name: e,
                            lowlight: t,
                            defaultLanguage: r,
                          })
                        : s.map(n.mapping, n.doc);
                    },
                  },
                  props: { decorations: e => n.getState(e) },
                });
                return n;
              })({
                name: this.name,
                lowlight: this.options.lowlight,
                defaultLanguage: this.options.defaultLanguage,
              }),
            ];
          },
        }),
        e7 = (0, E.B)(T.y);
      e7.register('ts', A.Z);
      var e9 = e6
          .extend({
            addNodeView: () => (0, p.fW)(e2),
            addKeyboardShortcuts() {
              return {
                Tab: ({ editor: e }) => {
                  try {
                    let { state: t } = e,
                      { selection: r } = t,
                      { $from: n, empty: s } = r;
                    if (!s || n.parent.type !== this.type) return !1;
                    let o = t.tr.insertText('	', n.pos, n.pos);
                    return e.view.dispatch(o), !0;
                  } catch (e) {
                    return (
                      console.error(
                        'Error handling Tab in CustomCodeBlockExtension:',
                        e
                      ),
                      !1
                    );
                  }
                },
                ArrowUp: ({ editor: e }) => {
                  try {
                    let { state: t } = e,
                      { selection: r } = t,
                      { $from: n, empty: s } = r;
                    return (
                      !!s &&
                      n.parent.type === this.type &&
                      0 === n.parentOffset &&
                      1 === n.depth &&
                      0 === n.index(n.depth - 1) &&
                      e.commands.command(({ tr: t }) => {
                        let r = e.schema.nodes.paragraph.create();
                        return (
                          t.insert(0, r),
                          t.setSelection(i.Y1.near(t.doc.resolve(1))),
                          !0
                        );
                      })
                    );
                  } catch (e) {
                    return (
                      console.error(
                        'Error handling ArrowUp in CustomCodeBlockExtension:',
                        e
                      ),
                      !1
                    );
                  }
                },
                ArrowDown: ({ editor: e }) => {
                  try {
                    if (!this.options.exitOnArrowDown) return !1;
                    let { state: t } = e,
                      { selection: r, doc: n } = t,
                      { $from: s, empty: o } = r;
                    if (
                      !o ||
                      s.parent.type !== this.type ||
                      s.parentOffset !== s.parent.nodeSize - 2
                    )
                      return !1;
                    let a = s.after();
                    return (
                      void 0 !== a &&
                      (n.nodeAt(a)
                        ? e.commands.command(
                            ({ tr: e }) => (
                              e.setSelection(i.Y1.near(n.resolve(a))), !0
                            )
                          )
                        : e.commands.exitCode())
                    );
                  } catch (e) {
                    return (
                      console.error(
                        'Error handling ArrowDown in CustomCodeBlockExtension:',
                        e
                      ),
                      !1
                    );
                  }
                },
              };
            },
          })
          .configure({
            lowlight: e7,
            defaultLanguage: 'plaintext',
            exitOnTripleEnter: !1,
          }),
        te = (e, t) => {
          let { $from: r } = t.selection,
            n = (0, a.getNodeType)(e, t.schema),
            s = r.depth,
            o = r.pos,
            i = null;
          for (; s > 0 && null === i; )
            r.node(s).type === n ? (i = s) : ((s -= 1), (o -= 1));
          return null === i ? null : { $pos: t.doc.resolve(o), depth: i };
        },
        tt = (e, t) => {
          let r = tr(e, t),
            n = te(e, t);
          return !!n && !!r && r > n.depth;
        },
        tr = (e, t) => {
          let r = te(e, t);
          if (!r) return !1;
          let [, n] = (0, a.getNodeAtPosition)(t, e, r.$pos.pos + 4);
          return n;
        },
        tn = (e, t) => {
          let r = te(e, t);
          if (!r) return !1;
          let n = 0,
            s = r.$pos,
            o = t.doc.resolve(Math.max(s.pos - 1, 0));
          for (let e = o.depth; e > 0; e--) {
            let t = o.node(e);
            ('bulletList' === t.type.name || 'orderedList' === t.type.name) &&
              n++;
          }
          return (n > 0 ? n - 1 : 0) * 2;
        },
        ts = (e, t, r) => {
          if (e.commands.undoInputRule()) return !0;
          let { from: n, to: s } = e.state.selection;
          if (n !== s) return !1;
          if (!(0, a.isNodeActive)(e.state, t) && ti(e.state, t, r)) {
            let { $anchor: r } = e.state.selection,
              n = e.state.doc.resolve(r.before() - 1),
              s = [];
            n.node().descendants((e, r) => {
              e.type.name === t && s.push({ node: e, pos: r });
            });
            let o = s.at(-1);
            if (!o) return !1;
            let i = e.state.doc.resolve(n.start() + o.pos + 1),
              a = r.start() - 1,
              l = r.end() + 1;
            return (
              !(a < 0) &&
              !(l > e.state.doc.content.size) &&
              e.chain().cut({ from: a, to: l }, i.end()).joinForward().run()
            );
          }
          if (
            !(0, a.isNodeActive)(e.state, t) ||
            !(0, a.isAtStartOfNode)(e.state)
          )
            return !1;
          let o = tu(e.state),
            i = ta(t, e.state),
            l = te(t, e.state),
            c = tl(t, e.state);
          if (!l) return !1;
          let d = l.$pos.node(l.depth),
            u = td(t, e.state, d);
          return (
            (!u || !i || !o) &&
            (u && i
              ? (e.chain().liftListItem(t).run(), e.commands.joinItemBackward())
              : (!i || !c) &&
                !i &&
                !u &&
                (!!tp(t, e.state) || !!u) &&
                e.chain().liftListItem(t).run())
          );
        },
        to = (e, t) =>
          !!(
            (0, a.isNodeActive)(e.state, t) && (0, a.isAtEndOfNode)(e.state, t)
          ) &&
          (tt(t, e.state)
            ? e
                .chain()
                .focus(e.state.selection.from + 4)
                .lift(t)
                .joinBackward()
                .run()
            : tc(t, e.state)
              ? e.chain().joinForward().joinBackward().run()
              : e.commands.joinItemForward()),
        ti = (e, t, r) => {
          let { $anchor: n } = e.selection,
            s = Math.max(0, n.pos - 2),
            o = e.doc.resolve(s).node();
          return !(!o || !r.includes(o.type.name));
        },
        ta = (e, t) => {
          let r = tn(e, t),
            n = te(e, t);
          return !!n && !!r && r < n.depth;
        },
        tl = (e, t) => {
          let r = tr(e, t),
            n = te(e, t);
          return !!n && !!r && r === n.depth;
        },
        tc = (e, t) => {
          let r = tr(e, t),
            n = te(e, t);
          return !!n && !!r && r < n.depth;
        },
        td = (e, t, r) => {
          if (!r) return !1;
          let n = (0, a.getNodeType)(e, t.schema),
            s = !1;
          return (
            r.descendants(e => {
              e.type === n && (s = !0);
            }),
            s
          );
        },
        tu = e => {
          let { $from: t } = e.selection,
            r = t.node(-1);
          if (
            'paragraph' === t.parent.type.name &&
            'listItem' === r.type.name
          ) {
            let e = 0;
            return (
              r.forEach(t => {
                'paragraph' === t.type.name && e++;
              }),
              e > 1
            );
          }
          return !1;
        },
        tp = (e, t) => {
          var r;
          let { $anchor: n } = t.selection,
            s = t.doc.resolve(n.pos - 2);
          return !(
            0 === s.index() ||
            (null == (r = s.nodeBefore) ? void 0 : r.type.name) !== e
          );
        },
        th = ({ tabIndex: e }) =>
          a.Extension.create({
            name: 'listKeymap',
            addOptions: () => ({
              listTypes: [
                {
                  itemName: 'listItem',
                  wrapperNames: ['bulletList', 'orderedList'],
                },
                { itemName: 'taskItem', wrapperNames: ['taskList'] },
              ],
            }),
            addKeyboardShortcuts() {
              return {
                Tab: () =>
                  this.editor.isActive('listItem') ||
                  this.editor.isActive('taskItem')
                    ? (this.editor.commands.sinkListItem('listItem') ||
                        this.editor.commands.sinkListItem('taskItem'),
                      !0)
                    : null == e,
                'Shift-Tab': () => (
                  this.editor.commands.liftListItem('listItem') ||
                    this.editor.commands.liftListItem('taskItem'),
                  !0
                ),
                Delete: ({ editor: e }) => {
                  try {
                    let t = !1;
                    return (
                      this.options.listTypes.forEach(({ itemName: r }) => {
                        void 0 !== e.state.schema.nodes[r] &&
                          to(e, r) &&
                          (t = !0);
                      }),
                      t
                    );
                  } catch (e) {
                    return console.log('error in handling Backspac:', e), !1;
                  }
                },
                'Mod-Delete': ({ editor: e }) => {
                  let t = !1;
                  return (
                    this.options.listTypes.forEach(({ itemName: r }) => {
                      void 0 !== e.state.schema.nodes[r] &&
                        to(e, r) &&
                        (t = !0);
                    }),
                    t
                  );
                },
                Backspace: ({ editor: e }) => {
                  try {
                    let t = !1;
                    return (
                      this.options.listTypes.forEach(
                        ({ itemName: r, wrapperNames: n }) => {
                          void 0 !== e.state.schema.nodes[r] &&
                            ts(e, r, n) &&
                            (t = !0);
                        }
                      ),
                      t
                    );
                  } catch (e) {
                    return console.log('error in handling Backspac:', e), !1;
                  }
                },
                'Mod-Backspace': ({ editor: e }) => {
                  let t = !1;
                  return (
                    this.options.listTypes.forEach(
                      ({ itemName: r, wrapperNames: n }) => {
                        void 0 !== e.state.schema.nodes[r] &&
                          ts(e, r, n) &&
                          (t = !0);
                      }
                    ),
                    t
                  );
                },
              };
            },
          });
      function tm(e, t, r) {
        if (!e.isGeneric) return !1;
        let n = [];
        for (let t = 0; t < e.mapping.maps.length; t++) {
          let r = e.mapping.maps[t];
          for (let e = 0; e < n.length; e++) n[e] = r.map(n[e]);
          r.forEach((e, t, r, s) => n.push(r, s));
        }
        let s = [];
        for (let t = 0; t < n.length; t += 2) {
          let o = n[t],
            i = n[t + 1],
            a = e.doc.resolve(o),
            l = a.sharedDepth(i),
            c = a.node(l);
          for (let e = a.indexAfter(l), t = a.after(l + 1); t <= i; ++e) {
            let n = c.maybeChild(e);
            if (!n) break;
            if (e && -1 == s.indexOf(t)) {
              let o = c.child(e - 1);
              o.type == n.type && o.type === r && s.push(t);
            }
            t += n.nodeSize;
          }
        }
        let o = !1;
        s.sort((e, t) => e - t);
        for (let r = s.length - 1; r >= 0; r--)
          (0, I.Mn)(e.doc, s[r]) && (t.join(s[r]), (o = !0));
        return o;
      }
      var tf = a.Extension.create({
          name: 'CustomKeymap',
          addCommands: () => ({
            selectTextWithinNodeBoundaries:
              () =>
              ({ editor: e, commands: t }) => {
                let { state: r } = e,
                  { tr: n } = r,
                  s = n.selection.$from.start(),
                  o = n.selection.$to.end();
                return t.setTextSelection({ from: s, to: o });
              },
          }),
          addProseMirrorPlugins: () => [
            new i.Sy({
              key: new i.H$('ordered-list-merging'),
              appendTransaction(e, t, r) {
                let n = r.tr,
                  s = !1;
                for (let t of e) s = tm(t, n, r.schema.nodes.orderedList) || s;
                if (s) return n;
              },
            }),
            new i.Sy({
              key: new i.H$('unordered-list-merging'),
              appendTransaction(e, t, r) {
                let n = r.tr,
                  s = !1;
                for (let t of e) s = tm(t, n, r.schema.nodes.bulletList) || s;
                if (s) return n;
              },
            }),
          ],
          addKeyboardShortcuts: () => ({
            'Mod-a': ({ editor: e }) => {
              let { state: t } = e,
                { tr: r } = t,
                n = r.selection.from,
                s = r.selection.to,
                o = r.selection.$from.start(),
                i = r.selection.$to.end();
              return (
                (n > o || s < i) &&
                (e.chain().selectTextWithinNodeBoundaries().run(), !0)
              );
            },
          }),
        }),
        tg = z.ZP.extend({
          addKeyboardShortcuts() {
            return {
              Enter: () => {
                try {
                  let {
                      $from: e,
                      $to: t,
                      $head: r,
                    } = this.editor.state.selection,
                    n = r.node(-1);
                  return (
                    !!n &&
                    'blockquote' === n.type.name &&
                    e.pos === t.pos &&
                    (this.editor.chain().splitBlock().lift(this.name).run(), !0)
                  );
                } catch (e) {
                  return (
                    console.error('Error handling Enter in blockquote:', e), !1
                  );
                }
              },
            };
          },
        }),
        tx = a.Mark.create({
          name: 'link',
          priority: 1e3,
          keepOnSplit: !1,
          onCreate() {
            this.options.protocols.forEach(e => {
              if ('string' == typeof e) {
                (0, _.zR)(e);
                return;
              }
              (0, _.zR)(e.scheme, e.optionalSlashes);
            });
          },
          onDestroy() {
            (0, _.mc)();
          },
          inclusive() {
            return this.options.inclusive;
          },
          addOptions: () => ({
            openOnClick: !0,
            linkOnPaste: !0,
            autolink: !0,
            inclusive: !1,
            protocols: [],
            HTMLAttributes: {
              target: '_blank',
              rel: 'noopener noreferrer nofollow',
              class: null,
            },
            validate: void 0,
          }),
          addAttributes() {
            return {
              href: { default: null },
              target: { default: this.options.HTMLAttributes.target },
              rel: { default: this.options.HTMLAttributes.rel },
              class: { default: this.options.HTMLAttributes.class },
            };
          },
          parseHTML: () => [
            {
              tag: 'a[href]',
              getAttrs: e => {
                var t;
                if ('string' == typeof e || !(e instanceof HTMLElement))
                  return null;
                let r =
                  (null == (t = e.getAttribute('href'))
                    ? void 0
                    : t.toLowerCase()) || '';
                return (
                  !(
                    r.startsWith('javascript:') ||
                    r.startsWith('data:') ||
                    r.startsWith('vbscript:')
                  ) && {}
                );
              },
            },
          ],
          renderHTML({ HTMLAttributes: e }) {
            var t;
            let r = (null == (t = e.href) ? void 0 : t.toLowerCase()) || '';
            return r.startsWith('javascript:') ||
              r.startsWith('data:') ||
              r.startsWith('vbscript:')
              ? [
                  'a',
                  (0, a.mergeAttributes)(
                    this.options.HTMLAttributes,
                    ec(el({}, e), { href: '' })
                  ),
                  0,
                ]
              : [
                  'a',
                  (0, a.mergeAttributes)(this.options.HTMLAttributes, e),
                  0,
                ];
          },
          addCommands() {
            return {
              setLink:
                e =>
                ({ chain: t }) =>
                  t()
                    .setMark(this.name, e)
                    .setMeta('preventAutolink', !0)
                    .run(),
              toggleLink:
                e =>
                ({ chain: t }) =>
                  t()
                    .toggleMark(this.name, e, { extendEmptyMarkRange: !0 })
                    .setMeta('preventAutolink', !0)
                    .run(),
              unsetLink:
                () =>
                ({ chain: e }) =>
                  e()
                    .unsetMark(this.name, { extendEmptyMarkRange: !0 })
                    .setMeta('preventAutolink', !0)
                    .run(),
            };
          },
          addPasteRules() {
            return [
              (0, a.markPasteRule)({
                find: e => {
                  let t = [];
                  if (e) {
                    let r = (0, _.sE)(e).filter(e => e.isLink);
                    r.length &&
                      r.forEach(e =>
                        t.push({
                          text: e.value,
                          data: { href: e.href },
                          index: e.start,
                        })
                      );
                  }
                  return t;
                },
                type: this.type,
                getAttributes: e => {
                  var t;
                  return { href: null == (t = e.data) ? void 0 : t.href };
                },
              }),
            ];
          },
          addProseMirrorPlugins() {
            var e, t, r;
            let n = [];
            return (
              this.options.autolink &&
                n.push(
                  ((e = { type: this.type, validate: this.options.validate }),
                  new i.Sy({
                    key: new i.H$('autolink'),
                    appendTransaction: (t, r, n) => {
                      let s = t.some(e => e.docChanged) && !r.doc.eq(n.doc),
                        o = t.some(e => e.getMeta('preventAutolink'));
                      if (!s || o) return;
                      let { tr: i } = n,
                        l = (0, a.combineTransactionSteps)(r.doc, [...t]);
                      if (
                        ((0, a.getChangedRanges)(l).forEach(
                          ({ newRange: t }) => {
                            let r = (0, a.findChildrenInRange)(
                                n.doc,
                                t,
                                e => e.isTextblock
                              ),
                              s,
                              o;
                            if (
                              (r.length > 1
                                ? ((s = r[0]),
                                  (o = n.doc.textBetween(
                                    s.pos,
                                    s.pos + s.node.nodeSize,
                                    void 0,
                                    ' '
                                  )))
                                : r.length &&
                                  n.doc
                                    .textBetween(t.from, t.to, ' ', ' ')
                                    .endsWith(' ') &&
                                  ((s = r[0]),
                                  (o = n.doc.textBetween(
                                    s.pos,
                                    t.to,
                                    void 0,
                                    ' '
                                  ))),
                              s && o)
                            ) {
                              let t = o.split(' ').filter(e => '' !== e);
                              if (t.length <= 0) return !1;
                              let r = t[t.length - 1],
                                l = s.pos + o.lastIndexOf(r);
                              if (!r) return !1;
                              (0, _.sE)(r)
                                .filter(e => e.isLink)
                                .map(e =>
                                  ec(el({}, e), {
                                    from: l + e.start + 1,
                                    to: l + e.end + 1,
                                  })
                                )
                                .filter(
                                  e =>
                                    !n.schema.marks.code ||
                                    !n.doc.rangeHasMark(
                                      e.from,
                                      e.to,
                                      n.schema.marks.code
                                    )
                                )
                                .filter(t => !e.validate || e.validate(t.value))
                                .forEach(t => {
                                  (0, a.getMarksBetween)(
                                    t.from,
                                    t.to,
                                    n.doc
                                  ).some(t => t.mark.type === e.type) ||
                                    i.addMark(
                                      t.from,
                                      t.to,
                                      e.type.create({ href: t.href })
                                    );
                                });
                            }
                          }
                        ),
                        i.steps.length)
                      )
                        return i;
                    },
                  }))
                ),
              this.options.openOnClick &&
                n.push(
                  ((t = { type: this.type }),
                  new i.Sy({
                    key: new i.H$('handleClickLink'),
                    props: {
                      handleClick: (e, r, n) => {
                        var s, o;
                        if (0 !== n.button) return !1;
                        let i = n.target,
                          l = [];
                        for (; 'DIV' !== i.nodeName; )
                          l.push(i), (i = i.parentNode);
                        if (!l.find(e => 'A' === e.nodeName)) return !1;
                        let c = (0, a.getAttributes)(e.state, t.type.name),
                          d = n.target,
                          u =
                            null != (s = null == d ? void 0 : d.href)
                              ? s
                              : c.href,
                          p =
                            null != (o = null == d ? void 0 : d.target)
                              ? o
                              : c.target;
                        return !!d && !!u && (window.open(u, p), !0);
                      },
                    },
                  }))
                ),
              this.options.linkOnPaste &&
                n.push(
                  ((r = { editor: this.editor, type: this.type }),
                  new i.Sy({
                    key: new i.H$('handlePasteLink'),
                    props: {
                      handlePaste: (e, t, n) => {
                        let { state: s } = e,
                          { selection: o } = s,
                          { empty: i } = o;
                        if (i) return !1;
                        let a = '';
                        n.content.forEach(e => {
                          a += e.textContent;
                        });
                        let l = (0, _.sE)(a).find(
                          e => e.isLink && e.value === a
                        );
                        return (
                          !!a &&
                          !!l &&
                          (r.editor.commands.setMark(r.type, { href: l.href }),
                          !0)
                        );
                      },
                    },
                  }))
                ),
              n
            );
          },
        }),
        ty = /(?:^|\s)((?:`)((?:[^`]+))(?:`))$/,
        tv = /(?:^|\s)((?:`)((?:[^`]+))(?:`))/g,
        tb = a.Mark.create({
          name: 'code',
          addOptions: () => ({
            HTMLAttributes: {
              class:
                'rounded bg-custom-background-80 px-1 py-[2px] font-mono font-medium text-orange-500 border-[0.5px] border-custom-border-200 text-sm',
              spellcheck: 'false',
            },
          }),
          excludes: '_',
          code: !0,
          exitable: !0,
          parseHTML: () => [{ tag: 'code' }],
          renderHTML({ HTMLAttributes: e }) {
            return [
              'code',
              (0, a.mergeAttributes)(this.options.HTMLAttributes, e),
              0,
            ];
          },
          addCommands() {
            return {
              setCode:
                () =>
                ({ commands: e }) =>
                  e.setMark(this.name),
              toggleCode:
                () =>
                ({ commands: e }) =>
                  e.toggleMark(this.name),
              unsetCode:
                () =>
                ({ commands: e }) =>
                  e.unsetMark(this.name),
            };
          },
          addKeyboardShortcuts() {
            return { 'Mod-e': () => this.editor.commands.toggleCode() };
          },
          addInputRules() {
            return [(0, a.markInputRule)({ find: ty, type: this.type })];
          },
          addPasteRules() {
            return [(0, a.markPasteRule)({ find: tv, type: this.type })];
          },
        }),
        tw = e =>
          (0, a.textInputRule)({ find: /--$/, replace: null != e ? e : '—' }),
        tk = e =>
          (0, a.textInputRule)({ find: /=>$/, replace: null != e ? e : '⇒' }),
        tj = e =>
          (0, a.textInputRule)({ find: /<-$/, replace: null != e ? e : '←' }),
        tN = e =>
          (0, a.textInputRule)({ find: /->$/, replace: null != e ? e : '→' }),
        tC = e =>
          (0, a.textInputRule)({
            find: /\.\.\.$/,
            replace: null != e ? e : '…',
          }),
        tS = e =>
          (0, a.textInputRule)({
            find: /\(c\)$/,
            replace: null != e ? e : '\xa9',
          }),
        tE = e =>
          (0, a.textInputRule)({
            find: /\(tm\)$/,
            replace: null != e ? e : '™',
          }),
        tT = e =>
          (0, a.textInputRule)({
            find: /\(sm\)$/,
            replace: null != e ? e : '℠',
          }),
        tA = e =>
          (0, a.textInputRule)({
            find: /\(r\)$/,
            replace: null != e ? e : '\xae',
          }),
        tO = e =>
          (0, a.textInputRule)({
            find: /(?:^|\s)(1\/2)\s$/,
            replace: null != e ? e : '\xbd',
          }),
        tR = e =>
          (0, a.textInputRule)({
            find: /\+\/-$/,
            replace: null != e ? e : '\xb1',
          }),
        tM = e =>
          (0, a.textInputRule)({ find: /!=$/, replace: null != e ? e : '≠' }),
        tI = e =>
          (0, a.textInputRule)({
            find: /<<$/,
            replace: null != e ? e : '\xab',
          }),
        tz = e =>
          (0, a.textInputRule)({
            find: />>$/,
            replace: null != e ? e : '\xbb',
          }),
        t_ = e =>
          (0, a.textInputRule)({
            find: /\d+\s?([*x])\s?\d+$/,
            replace: null != e ? e : '\xd7',
          }),
        tL = e =>
          (0, a.textInputRule)({
            find: /\^2$/,
            replace: null != e ? e : '\xb2',
          }),
        tP = e =>
          (0, a.textInputRule)({
            find: /\^3$/,
            replace: null != e ? e : '\xb3',
          }),
        tF = e =>
          (0, a.textInputRule)({
            find: /(?:^|\s)(1\/4)\s$/,
            replace: null != e ? e : '\xbc',
          }),
        tD = e =>
          (0, a.textInputRule)({
            find: /(?:^|\s)(3\/4)\s$/,
            replace: null != e ? e : '\xbe',
          }),
        tB = a.Extension.create({
          name: 'typography',
          addInputRules() {
            let e = [];
            return (
              !1 !== this.options.emDash && e.push(tw(this.options.emDash)),
              !1 !== this.options.impliesArrowRight &&
                e.push(tk(this.options.impliesArrowRight)),
              !1 !== this.options.ellipsis && e.push(tC(this.options.ellipsis)),
              !1 !== this.options.leftArrow &&
                e.push(tj(this.options.leftArrow)),
              !1 !== this.options.rightArrow &&
                e.push(tN(this.options.rightArrow)),
              !1 !== this.options.copyright &&
                e.push(tS(this.options.copyright)),
              !1 !== this.options.trademark &&
                e.push(tE(this.options.trademark)),
              !1 !== this.options.servicemark &&
                e.push(tT(this.options.servicemark)),
              !1 !== this.options.registeredTrademark &&
                e.push(tA(this.options.registeredTrademark)),
              !1 !== this.options.oneHalf && e.push(tO(this.options.oneHalf)),
              !1 !== this.options.plusMinus &&
                e.push(tR(this.options.plusMinus)),
              !1 !== this.options.notEqual && e.push(tM(this.options.notEqual)),
              !1 !== this.options.laquo && e.push(tI(this.options.laquo)),
              !1 !== this.options.raquo && e.push(tz(this.options.raquo)),
              !1 !== this.options.multiplication &&
                e.push(t_(this.options.multiplication)),
              !1 !== this.options.superscriptTwo &&
                e.push(tL(this.options.superscriptTwo)),
              !1 !== this.options.superscriptThree &&
                e.push(tP(this.options.superscriptThree)),
              !1 !== this.options.oneQuarter &&
                e.push(tF(this.options.oneQuarter)),
              !1 !== this.options.threeQuarters &&
                e.push(tD(this.options.threeQuarters)),
              e
            );
          },
        }),
        tH = a.Node.create({
          name: 'horizontalRule',
          addOptions: () => ({ HTMLAttributes: {} }),
          group: 'block',
          parseHTML() {
            return [{ tag: `div[data-type="${this.name}"]` }, { tag: 'hr' }];
          },
          renderHTML({ HTMLAttributes: e }) {
            return [
              'div',
              (0, a.mergeAttributes)(this.options.HTMLAttributes, e, {
                'data-type': this.name,
              }),
              ['div', {}],
            ];
          },
          addCommands() {
            return {
              setHorizontalRule:
                () =>
                ({ chain: e, state: t }) => {
                  let { selection: r } = t,
                    { $from: n, $to: s } = r,
                    o = e();
                  return (
                    0 === n.parentOffset
                      ? o.insertContentAt(
                          { from: Math.max(n.pos - 1, 0), to: s.pos },
                          { type: this.name }
                        )
                      : (0, a.isNodeSelection)(r)
                        ? o.insertContentAt(s.pos, { type: this.name })
                        : o.insertContent({ type: this.name }),
                    o
                      .command(({ tr: e, dispatch: t }) => {
                        var r;
                        if (t) {
                          let { $to: t } = e.selection,
                            n = t.end();
                          if (t.nodeAfter)
                            t.nodeAfter.isTextblock
                              ? e.setSelection(i.Bs.create(e.doc, t.pos + 1))
                              : t.nodeAfter.isBlock
                                ? e.setSelection(i.qv.create(e.doc, t.pos))
                                : e.setSelection(i.Bs.create(e.doc, t.pos));
                          else {
                            let s =
                              null ==
                              (r = t.parent.type.contentMatch.defaultType)
                                ? void 0
                                : r.create();
                            s &&
                              (e.insert(n, s),
                              e.setSelection(i.Bs.create(e.doc, n + 1)));
                          }
                          e.scrollIntoView();
                        }
                        return !0;
                      })
                      .run()
                  );
                },
            };
          },
          addInputRules() {
            return [
              (0, a.nodeInputRule)({
                find: /^(?:---|—-|___\s|\*\*\*\s)$/,
                type: this.type,
              }),
            ];
          },
        }),
        tJ = a.Extension.create({
          name: 'codemarkPlugin',
          addProseMirrorPlugins() {
            return (0, L.Z)({ markType: this.editor.schema.marks.code });
          },
        }),
        t$ = class e {
          constructor(e, t) {
            if (((this.content = e), (this.size = t || 0), null == t))
              for (let t = 0; t < e.length; t++) this.size += e[t].nodeSize;
          }
          nodesBetween(e, t, r, n = 0, s) {
            for (let o = 0, i = 0; i < t; o++) {
              let a = this.content[o],
                l = i + a.nodeSize;
              if (l > e && !1 !== r(a, n + i, s || null, o) && a.content.size) {
                let s = i + 1;
                a.nodesBetween(
                  Math.max(0, e - s),
                  Math.min(a.content.size, t - s),
                  r,
                  n + s
                );
              }
              i = l;
            }
          }
          descendants(e) {
            this.nodesBetween(0, this.size, e);
          }
          textBetween(e, t, r, n) {
            let s = '',
              o = !0;
            return (
              this.nodesBetween(
                e,
                t,
                (i, a) => {
                  let l = i.isText
                    ? i.text.slice(Math.max(e, a) - a, t - a)
                    : i.isLeaf
                      ? n
                        ? 'function' == typeof n
                          ? n(i)
                          : n
                        : i.type.spec.leafText
                          ? i.type.spec.leafText(i)
                          : ''
                      : '';
                  i.isBlock &&
                    ((i.isLeaf && l) || i.isTextblock) &&
                    r &&
                    (o ? (o = !1) : (s += r)),
                    (s += l);
                },
                0
              ),
              s
            );
          }
          append(t) {
            if (!t.size) return this;
            if (!this.size) return t;
            let r = this.lastChild,
              n = t.firstChild,
              s = this.content.slice(),
              o = 0;
            for (
              r.isText &&
              r.sameMarkup(n) &&
              ((s[s.length - 1] = r.withText(r.text + n.text)), (o = 1));
              o < t.content.length;
              o++
            )
              s.push(t.content[o]);
            return new e(s, this.size + t.size);
          }
          cut(t, r = this.size) {
            if (0 == t && r == this.size) return this;
            let n = [],
              s = 0;
            if (r > t)
              for (let e = 0, o = 0; o < r; e++) {
                let i = this.content[e],
                  a = o + i.nodeSize;
                a > t &&
                  ((o < t || a > r) &&
                    (i = i.isText
                      ? i.cut(
                          Math.max(0, t - o),
                          Math.min(i.text.length, r - o)
                        )
                      : i.cut(
                          Math.max(0, t - o - 1),
                          Math.min(i.content.size, r - o - 1)
                        )),
                  n.push(i),
                  (s += i.nodeSize)),
                  (o = a);
              }
            return new e(n, s);
          }
          cutByIndex(t, r) {
            return t == r
              ? e.empty
              : 0 == t && r == this.content.length
                ? this
                : new e(this.content.slice(t, r));
          }
          replaceChild(t, r) {
            let n = this.content[t];
            if (n == r) return this;
            let s = this.content.slice(),
              o = this.size + r.nodeSize - n.nodeSize;
            return (s[t] = r), new e(s, o);
          }
          addToStart(t) {
            return new e([t].concat(this.content), this.size + t.nodeSize);
          }
          addToEnd(t) {
            return new e(this.content.concat(t), this.size + t.nodeSize);
          }
          eq(e) {
            if (this.content.length != e.content.length) return !1;
            for (let t = 0; t < this.content.length; t++)
              if (!this.content[t].eq(e.content[t])) return !1;
            return !0;
          }
          get firstChild() {
            return this.content.length ? this.content[0] : null;
          }
          get lastChild() {
            return this.content.length
              ? this.content[this.content.length - 1]
              : null;
          }
          get childCount() {
            return this.content.length;
          }
          child(e) {
            let t = this.content[e];
            if (!t)
              throw RangeError('Index ' + e + ' out of range for ' + this);
            return t;
          }
          maybeChild(e) {
            return this.content[e] || null;
          }
          forEach(e) {
            for (let t = 0, r = 0; t < this.content.length; t++) {
              let n = this.content[t];
              e(n, r, t), (r += n.nodeSize);
            }
          }
          findDiffStart(e, t = 0) {
            return (function e(t, r, n) {
              for (let s = 0; ; s++) {
                if (s == t.childCount || s == r.childCount)
                  return t.childCount == r.childCount ? null : n;
                let o = t.child(s),
                  i = r.child(s);
                if (o == i) {
                  n += o.nodeSize;
                  continue;
                }
                if (!o.sameMarkup(i)) return n;
                if (o.isText && o.text != i.text) {
                  for (let e = 0; o.text[e] == i.text[e]; e++) n++;
                  return n;
                }
                if (o.content.size || i.content.size) {
                  let t = e(o.content, i.content, n + 1);
                  if (null != t) return t;
                }
                n += o.nodeSize;
              }
            })(this, e, t);
          }
          findDiffEnd(e, t = this.size, r = e.size) {
            return (function e(t, r, n, s) {
              for (let o = t.childCount, i = r.childCount; ; ) {
                if (0 == o || 0 == i) return o == i ? null : { a: n, b: s };
                let a = t.child(--o),
                  l = r.child(--i),
                  c = a.nodeSize;
                if (a == l) {
                  (n -= c), (s -= c);
                  continue;
                }
                if (!a.sameMarkup(l)) return { a: n, b: s };
                if (a.isText && a.text != l.text) {
                  let e = 0,
                    t = Math.min(a.text.length, l.text.length);
                  for (
                    ;
                    e < t &&
                    a.text[a.text.length - e - 1] ==
                      l.text[l.text.length - e - 1];

                  )
                    e++, n--, s--;
                  return { a: n, b: s };
                }
                if (a.content.size || l.content.size) {
                  let t = e(a.content, l.content, n - 1, s - 1);
                  if (t) return t;
                }
                (n -= c), (s -= c);
              }
            })(this, e, t, r);
          }
          findIndex(e, t = -1) {
            if (0 == e) return tU(0, e);
            if (e == this.size) return tU(this.content.length, e);
            if (e > this.size || e < 0)
              throw RangeError(`Position ${e} outside of fragment (${this})`);
            for (let r = 0, n = 0; ; r++) {
              let s = n + this.child(r).nodeSize;
              if (s >= e) return s == e || t > 0 ? tU(r + 1, s) : tU(r, n);
              n = s;
            }
          }
          toString() {
            return '<' + this.toStringInner() + '>';
          }
          toStringInner() {
            return this.content.join(', ');
          }
          toJSON() {
            return this.content.length
              ? this.content.map(e => e.toJSON())
              : null;
          }
          static fromJSON(t, r) {
            if (!r) return e.empty;
            if (!Array.isArray(r))
              throw RangeError('Invalid input for Fragment.fromJSON');
            return new e(r.map(t.nodeFromJSON));
          }
          static fromArray(t) {
            if (!t.length) return e.empty;
            let r,
              n = 0;
            for (let e = 0; e < t.length; e++) {
              let s = t[e];
              (n += s.nodeSize),
                e && s.isText && t[e - 1].sameMarkup(s)
                  ? (r || (r = t.slice(0, e)),
                    (r[r.length - 1] = s.withText(
                      r[r.length - 1].text + s.text
                    )))
                  : r && r.push(s);
            }
            return new e(r || t, n);
          }
          static from(t) {
            if (!t) return e.empty;
            if (t instanceof e) return t;
            if (Array.isArray(t)) return this.fromArray(t);
            if (t.attrs) return new e([t], t.nodeSize);
            throw RangeError(
              'Can not convert ' +
                t +
                ' to a Fragment' +
                (t.nodesBetween
                  ? ' (looks like multiple versions of prosemirror-model were loaded)'
                  : '')
            );
          }
        };
      t$.empty = new t$([], 0);
      var tq = { index: 0, offset: 0 };
      function tU(e, t) {
        return (tq.index = e), (tq.offset = t), tq;
      }
      function tV(e, t) {
        if (e === t) return !0;
        if (!(e && 'object' == typeof e) || !(t && 'object' == typeof t))
          return !1;
        let r = Array.isArray(e);
        if (Array.isArray(t) != r) return !1;
        if (r) {
          if (e.length != t.length) return !1;
          for (let r = 0; r < e.length; r++) if (!tV(e[r], t[r])) return !1;
        } else {
          for (let r in e) if (!(r in t) || !tV(e[r], t[r])) return !1;
          for (let r in t) if (!(r in e)) return !1;
        }
        return !0;
      }
      var tZ = class e {
        constructor(e, t) {
          (this.type = e), (this.attrs = t);
        }
        addToSet(e) {
          let t,
            r = !1;
          for (let n = 0; n < e.length; n++) {
            let s = e[n];
            if (this.eq(s)) return e;
            if (this.type.excludes(s.type)) t || (t = e.slice(0, n));
            else {
              if (s.type.excludes(this.type)) return e;
              !r &&
                s.type.rank > this.type.rank &&
                (t || (t = e.slice(0, n)), t.push(this), (r = !0)),
                t && t.push(s);
            }
          }
          return t || (t = e.slice()), r || t.push(this), t;
        }
        removeFromSet(e) {
          for (let t = 0; t < e.length; t++)
            if (this.eq(e[t])) return e.slice(0, t).concat(e.slice(t + 1));
          return e;
        }
        isInSet(e) {
          for (let t = 0; t < e.length; t++) if (this.eq(e[t])) return !0;
          return !1;
        }
        eq(e) {
          return this == e || (this.type == e.type && tV(this.attrs, e.attrs));
        }
        toJSON() {
          let e = { type: this.type.name };
          for (let t in this.attrs) {
            e.attrs = this.attrs;
            break;
          }
          return e;
        }
        static fromJSON(e, t) {
          if (!t) throw RangeError('Invalid input for Mark.fromJSON');
          let r = e.marks[t.type];
          if (!r)
            throw RangeError(`There is no mark type ${t.type} in this schema`);
          return r.create(t.attrs);
        }
        static sameSet(e, t) {
          if (e == t) return !0;
          if (e.length != t.length) return !1;
          for (let r = 0; r < e.length; r++) if (!e[r].eq(t[r])) return !1;
          return !0;
        }
        static setFrom(t) {
          if (!t || (Array.isArray(t) && 0 == t.length)) return e.none;
          if (t instanceof e) return [t];
          let r = t.slice();
          return r.sort((e, t) => e.type.rank - t.type.rank), r;
        }
      };
      tZ.none = [];
      var tW = class extends Error {},
        tY = class e {
          constructor(e, t, r) {
            (this.content = e), (this.openStart = t), (this.openEnd = r);
          }
          get size() {
            return this.content.size - this.openStart - this.openEnd;
          }
          insertAt(t, r) {
            let n = (function e(t, r, n, s) {
              let { index: o, offset: i } = t.findIndex(r),
                a = t.maybeChild(o);
              if (i == r || a.isText)
                return s && !s.canReplace(o, o, n)
                  ? null
                  : t.cut(0, r).append(n).append(t.cut(r));
              let l = e(a.content, r - i - 1, n);
              return l && t.replaceChild(o, a.copy(l));
            })(this.content, t + this.openStart, r);
            return n && new e(n, this.openStart, this.openEnd);
          }
          removeBetween(t, r) {
            return new e(
              (function e(t, r, n) {
                let { index: s, offset: o } = t.findIndex(r),
                  i = t.maybeChild(s),
                  { index: a, offset: l } = t.findIndex(n);
                if (o == r || i.isText) {
                  if (l != n && !t.child(a).isText)
                    throw RangeError('Removing non-flat range');
                  return t.cut(0, r).append(t.cut(n));
                }
                if (s != a) throw RangeError('Removing non-flat range');
                return t.replaceChild(
                  s,
                  i.copy(e(i.content, r - o - 1, n - o - 1))
                );
              })(this.content, t + this.openStart, r + this.openStart),
              this.openStart,
              this.openEnd
            );
          }
          eq(e) {
            return (
              this.content.eq(e.content) &&
              this.openStart == e.openStart &&
              this.openEnd == e.openEnd
            );
          }
          toString() {
            return (
              this.content + '(' + this.openStart + ',' + this.openEnd + ')'
            );
          }
          toJSON() {
            if (!this.content.size) return null;
            let e = { content: this.content.toJSON() };
            return (
              this.openStart > 0 && (e.openStart = this.openStart),
              this.openEnd > 0 && (e.openEnd = this.openEnd),
              e
            );
          }
          static fromJSON(t, r) {
            if (!r) return e.empty;
            let n = r.openStart || 0,
              s = r.openEnd || 0;
            if ('number' != typeof n || 'number' != typeof s)
              throw RangeError('Invalid input for Slice.fromJSON');
            return new e(t$.fromJSON(t, r.content), n, s);
          }
          static maxOpen(t, r = !0) {
            let n = 0,
              s = 0;
            for (
              let e = t.firstChild;
              e && !e.isLeaf && (r || !e.type.spec.isolating);
              e = e.firstChild
            )
              n++;
            for (
              let e = t.lastChild;
              e && !e.isLeaf && (r || !e.type.spec.isolating);
              e = e.lastChild
            )
              s++;
            return new e(t, n, s);
          }
        };
      function tK(e, t) {
        if (!t.type.compatibleContent(e.type))
          throw new tW('Cannot join ' + t.type.name + ' onto ' + e.type.name);
      }
      function tG(e, t, r) {
        let n = e.node(r);
        return tK(n, t.node(r)), n;
      }
      function tX(e, t) {
        let r = t.length - 1;
        r >= 0 && e.isText && e.sameMarkup(t[r])
          ? (t[r] = e.withText(t[r].text + e.text))
          : t.push(e);
      }
      function tQ(e, t, r, n) {
        let s = (t || e).node(r),
          o = 0,
          i = t ? t.index(r) : s.childCount;
        e &&
          ((o = e.index(r)),
          e.depth > r ? o++ : e.textOffset && (tX(e.nodeAfter, n), o++));
        for (let e = o; e < i; e++) tX(s.child(e), n);
        t && t.depth == r && t.textOffset && tX(t.nodeBefore, n);
      }
      function t0(e, t) {
        return e.type.checkContent(t), e.copy(t);
      }
      function t1(e, t, r) {
        let n = [];
        return (
          tQ(null, e, r, n),
          e.depth > r && tX(t0(tG(e, t, r + 1), t1(e, t, r + 1)), n),
          tQ(t, null, r, n),
          new t$(n)
        );
      }
      tY.empty = new tY(t$.empty, 0, 0);
      var t2 = class e {
          constructor(e, t, r) {
            (this.pos = e),
              (this.path = t),
              (this.parentOffset = r),
              (this.depth = t.length / 3 - 1);
          }
          resolveDepth(e) {
            return null == e ? this.depth : e < 0 ? this.depth + e : e;
          }
          get parent() {
            return this.node(this.depth);
          }
          get doc() {
            return this.node(0);
          }
          node(e) {
            return this.path[3 * this.resolveDepth(e)];
          }
          index(e) {
            return this.path[3 * this.resolveDepth(e) + 1];
          }
          indexAfter(e) {
            return (
              (e = this.resolveDepth(e)),
              this.index(e) + (e != this.depth || this.textOffset ? 1 : 0)
            );
          }
          start(e) {
            return 0 == (e = this.resolveDepth(e))
              ? 0
              : this.path[3 * e - 1] + 1;
          }
          end(e) {
            return (
              (e = this.resolveDepth(e)),
              this.start(e) + this.node(e).content.size
            );
          }
          before(e) {
            if (!(e = this.resolveDepth(e)))
              throw RangeError(
                'There is no position before the top-level node'
              );
            return e == this.depth + 1 ? this.pos : this.path[3 * e - 1];
          }
          after(e) {
            if (!(e = this.resolveDepth(e)))
              throw RangeError('There is no position after the top-level node');
            return e == this.depth + 1
              ? this.pos
              : this.path[3 * e - 1] + this.path[3 * e].nodeSize;
          }
          get textOffset() {
            return this.pos - this.path[this.path.length - 1];
          }
          get nodeAfter() {
            let e = this.parent,
              t = this.index(this.depth);
            if (t == e.childCount) return null;
            let r = this.pos - this.path[this.path.length - 1],
              n = e.child(t);
            return r ? e.child(t).cut(r) : n;
          }
          get nodeBefore() {
            let e = this.index(this.depth),
              t = this.pos - this.path[this.path.length - 1];
            return t
              ? this.parent.child(e).cut(0, t)
              : 0 == e
                ? null
                : this.parent.child(e - 1);
          }
          posAtIndex(e, t) {
            t = this.resolveDepth(t);
            let r = this.path[3 * t],
              n = 0 == t ? 0 : this.path[3 * t - 1] + 1;
            for (let t = 0; t < e; t++) n += r.child(t).nodeSize;
            return n;
          }
          marks() {
            let e = this.parent,
              t = this.index();
            if (0 == e.content.size) return tZ.none;
            if (this.textOffset) return e.child(t).marks;
            let r = e.maybeChild(t - 1),
              n = e.maybeChild(t);
            if (!r) {
              let e = r;
              (r = n), (n = e);
            }
            let s = r.marks;
            for (var o = 0; o < s.length; o++)
              !1 !== s[o].type.spec.inclusive ||
                (n && s[o].isInSet(n.marks)) ||
                (s = s[o--].removeFromSet(s));
            return s;
          }
          marksAcross(e) {
            let t = this.parent.maybeChild(this.index());
            if (!t || !t.isInline) return null;
            let r = t.marks,
              n = e.parent.maybeChild(e.index());
            for (var s = 0; s < r.length; s++)
              !1 !== r[s].type.spec.inclusive ||
                (n && r[s].isInSet(n.marks)) ||
                (r = r[s--].removeFromSet(r));
            return r;
          }
          sharedDepth(e) {
            for (let t = this.depth; t > 0; t--)
              if (this.start(t) <= e && this.end(t) >= e) return t;
            return 0;
          }
          blockRange(e = this, t) {
            if (e.pos < this.pos) return e.blockRange(this);
            for (
              let r =
                this.depth -
                (this.parent.inlineContent || this.pos == e.pos ? 1 : 0);
              r >= 0;
              r--
            )
              if (e.pos <= this.end(r) && (!t || t(this.node(r))))
                return new t8(this, e, r);
            return null;
          }
          sameParent(e) {
            return this.pos - this.parentOffset == e.pos - e.parentOffset;
          }
          max(e) {
            return e.pos > this.pos ? e : this;
          }
          min(e) {
            return e.pos < this.pos ? e : this;
          }
          toString() {
            let e = '';
            for (let t = 1; t <= this.depth; t++)
              e +=
                (e ? '/' : '') +
                this.node(t).type.name +
                '_' +
                this.index(t - 1);
            return e + ':' + this.parentOffset;
          }
          static resolve(t, r) {
            if (!(r >= 0 && r <= t.content.size))
              throw RangeError('Position ' + r + ' out of range');
            let n = [],
              s = 0,
              o = r;
            for (let e = t; ; ) {
              let { index: t, offset: r } = e.content.findIndex(o),
                i = o - r;
              if ((n.push(e, t, s + r), !i || (e = e.child(t)).isText)) break;
              (o = i - 1), (s += r + 1);
            }
            return new e(r, n, o);
          }
          static resolveCached(t, r) {
            for (let e = 0; e < t3.length; e++) {
              let n = t3[e];
              if (n.pos == r && n.doc == t) return n;
            }
            let n = (t3[t5] = e.resolve(t, r));
            return (t5 = (t5 + 1) % t4), n;
          }
        },
        t3 = [],
        t5 = 0,
        t4 = 12,
        t8 = class {
          constructor(e, t, r) {
            (this.$from = e), (this.$to = t), (this.depth = r);
          }
          get start() {
            return this.$from.before(this.depth + 1);
          }
          get end() {
            return this.$to.after(this.depth + 1);
          }
          get parent() {
            return this.$from.node(this.depth);
          }
          get startIndex() {
            return this.$from.index(this.depth);
          }
          get endIndex() {
            return this.$to.indexAfter(this.depth);
          }
        },
        t6 = Object.create(null);
      (class e {
        constructor(e, t, r, n = tZ.none) {
          (this.type = e),
            (this.attrs = t),
            (this.marks = n),
            (this.content = r || t$.empty);
        }
        get nodeSize() {
          return this.isLeaf ? 1 : 2 + this.content.size;
        }
        get childCount() {
          return this.content.childCount;
        }
        child(e) {
          return this.content.child(e);
        }
        maybeChild(e) {
          return this.content.maybeChild(e);
        }
        forEach(e) {
          this.content.forEach(e);
        }
        nodesBetween(e, t, r, n = 0) {
          this.content.nodesBetween(e, t, r, n, this);
        }
        descendants(e) {
          this.nodesBetween(0, this.content.size, e);
        }
        get textContent() {
          return this.isLeaf && this.type.spec.leafText
            ? this.type.spec.leafText(this)
            : this.textBetween(0, this.content.size, '');
        }
        textBetween(e, t, r, n) {
          return this.content.textBetween(e, t, r, n);
        }
        get firstChild() {
          return this.content.firstChild;
        }
        get lastChild() {
          return this.content.lastChild;
        }
        eq(e) {
          return (
            this == e || (this.sameMarkup(e) && this.content.eq(e.content))
          );
        }
        sameMarkup(e) {
          return this.hasMarkup(e.type, e.attrs, e.marks);
        }
        hasMarkup(e, t, r) {
          return (
            this.type == e &&
            tV(this.attrs, t || e.defaultAttrs || t6) &&
            tZ.sameSet(this.marks, r || tZ.none)
          );
        }
        copy(t = null) {
          return t == this.content
            ? this
            : new e(this.type, this.attrs, t, this.marks);
        }
        mark(t) {
          return t == this.marks
            ? this
            : new e(this.type, this.attrs, this.content, t);
        }
        cut(e, t = this.content.size) {
          return 0 == e && t == this.content.size
            ? this
            : this.copy(this.content.cut(e, t));
        }
        slice(e, t = this.content.size, r = !1) {
          if (e == t) return tY.empty;
          let n = this.resolve(e),
            s = this.resolve(t),
            o = r ? 0 : n.sharedDepth(t),
            i = n.start(o);
          return new tY(
            n.node(o).content.cut(n.pos - i, s.pos - i),
            n.depth - o,
            s.depth - o
          );
        }
        replace(e, t, r) {
          return (function (e, t, r) {
            if (r.openStart > e.depth)
              throw new tW('Inserted content deeper than insertion position');
            if (e.depth - r.openStart != t.depth - r.openEnd)
              throw new tW('Inconsistent open depths');
            return (function e(t, r, n, s) {
              let o = t.index(s),
                i = t.node(s);
              if (o == r.index(s) && s < t.depth - n.openStart) {
                let a = e(t, r, n, s + 1);
                return i.copy(i.content.replaceChild(o, a));
              }
              if (!n.content.size) return t0(i, t1(t, r, s));
              if (n.openStart || n.openEnd || t.depth != s || r.depth != s) {
                let { start: e, end: o } = (function (e, t) {
                  let r = t.depth - e.openStart,
                    n = t.node(r).copy(e.content);
                  for (let e = r - 1; e >= 0; e--)
                    n = t.node(e).copy(t$.from(n));
                  return {
                    start: n.resolveNoCache(e.openStart + r),
                    end: n.resolveNoCache(n.content.size - e.openEnd - r),
                  };
                })(n, t);
                return t0(
                  i,
                  (function e(t, r, n, s, o) {
                    let i = t.depth > o && tG(t, r, o + 1),
                      a = s.depth > o && tG(n, s, o + 1),
                      l = [];
                    return (
                      tQ(null, t, o, l),
                      i && a && r.index(o) == n.index(o)
                        ? (tK(i, a), tX(t0(i, e(t, r, n, s, o + 1)), l))
                        : (i && tX(t0(i, t1(t, r, o + 1)), l),
                          tQ(r, n, o, l),
                          a && tX(t0(a, t1(n, s, o + 1)), l)),
                      tQ(s, null, o, l),
                      new t$(l)
                    );
                  })(t, e, o, r, s)
                );
              }
              {
                let e = t.parent,
                  s = e.content;
                return t0(
                  e,
                  s
                    .cut(0, t.parentOffset)
                    .append(n.content)
                    .append(s.cut(r.parentOffset))
                );
              }
            })(e, t, r, 0);
          })(this.resolve(e), this.resolve(t), r);
        }
        nodeAt(e) {
          for (let t = this; ; ) {
            let { index: r, offset: n } = t.content.findIndex(e);
            if (!(t = t.maybeChild(r))) return null;
            if (n == e || t.isText) return t;
            e -= n + 1;
          }
        }
        childAfter(e) {
          let { index: t, offset: r } = this.content.findIndex(e);
          return { node: this.content.maybeChild(t), index: t, offset: r };
        }
        childBefore(e) {
          if (0 == e) return { node: null, index: 0, offset: 0 };
          let { index: t, offset: r } = this.content.findIndex(e);
          if (r < e)
            return { node: this.content.child(t), index: t, offset: r };
          let n = this.content.child(t - 1);
          return { node: n, index: t - 1, offset: r - n.nodeSize };
        }
        resolve(e) {
          return t2.resolveCached(this, e);
        }
        resolveNoCache(e) {
          return t2.resolve(this, e);
        }
        rangeHasMark(e, t, r) {
          let n = !1;
          return (
            t > e &&
              this.nodesBetween(
                e,
                t,
                e => (r.isInSet(e.marks) && (n = !0), !n)
              ),
            n
          );
        }
        get isBlock() {
          return this.type.isBlock;
        }
        get isTextblock() {
          return this.type.isTextblock;
        }
        get inlineContent() {
          return this.type.inlineContent;
        }
        get isInline() {
          return this.type.isInline;
        }
        get isText() {
          return this.type.isText;
        }
        get isLeaf() {
          return this.type.isLeaf;
        }
        get isAtom() {
          return this.type.isAtom;
        }
        toString() {
          if (this.type.spec.toDebugString)
            return this.type.spec.toDebugString(this);
          let e = this.type.name;
          return (
            this.content.size &&
              (e += '(' + this.content.toStringInner() + ')'),
            (function (e, t) {
              for (let r = e.length - 1; r >= 0; r--)
                t = e[r].type.name + '(' + t + ')';
              return t;
            })(this.marks, e)
          );
        }
        contentMatchAt(e) {
          let t = this.type.contentMatch.matchFragment(this.content, 0, e);
          if (!t)
            throw Error('Called contentMatchAt on a node with invalid content');
          return t;
        }
        canReplace(e, t, r = t$.empty, n = 0, s = r.childCount) {
          let o = this.contentMatchAt(e).matchFragment(r, n, s),
            i = o && o.matchFragment(this.content, t);
          if (!i || !i.validEnd) return !1;
          for (let e = n; e < s; e++)
            if (!this.type.allowsMarks(r.child(e).marks)) return !1;
          return !0;
        }
        canReplaceWith(e, t, r, n) {
          if (n && !this.type.allowsMarks(n)) return !1;
          let s = this.contentMatchAt(e).matchType(r),
            o = s && s.matchFragment(this.content, t);
          return !!o && o.validEnd;
        }
        canAppend(e) {
          return e.content.size
            ? this.canReplace(this.childCount, this.childCount, e.content)
            : this.type.compatibleContent(e.type);
        }
        check() {
          this.type.checkContent(this.content);
          let e = tZ.none;
          for (let t = 0; t < this.marks.length; t++)
            e = this.marks[t].addToSet(e);
          if (!tZ.sameSet(e, this.marks))
            throw RangeError(
              `Invalid collection of marks for node ${this.type.name}: ${this.marks.map(e => e.type.name)}`
            );
          this.content.forEach(e => e.check());
        }
        toJSON() {
          let e = { type: this.type.name };
          for (let t in this.attrs) {
            e.attrs = this.attrs;
            break;
          }
          return (
            this.content.size && (e.content = this.content.toJSON()),
            this.marks.length && (e.marks = this.marks.map(e => e.toJSON())),
            e
          );
        }
        static fromJSON(e, t) {
          if (!t) throw RangeError('Invalid input for Node.fromJSON');
          let r = null;
          if (t.marks) {
            if (!Array.isArray(t.marks))
              throw RangeError('Invalid mark data for Node.fromJSON');
            r = t.marks.map(e.markFromJSON);
          }
          if ('text' == t.type) {
            if ('string' != typeof t.text)
              throw RangeError('Invalid text node in JSON');
            return e.text(t.text, r);
          }
          let n = t$.fromJSON(e, t.content);
          return e.nodeType(t.type).create(t.attrs, n, r);
        }
      }).prototype.text = void 0;
      var t7 = class e {
        constructor(e) {
          (this.validEnd = e), (this.next = []), (this.wrapCache = []);
        }
        static parse(t, r) {
          var n;
          let s,
            o = new t9(t, r);
          if (null == o.next) return e.empty;
          let i = (function e(t) {
            let r = [];
            do
              r.push(
                (function (t) {
                  let r = [];
                  do
                    r.push(
                      (function (t) {
                        let r = (function (t) {
                          if (t.eat('(')) {
                            let r = e(t);
                            return (
                              t.eat(')') || t.err('Missing closing paren'), r
                            );
                          }
                          if (/\W/.test(t.next))
                            t.err("Unexpected token '" + t.next + "'");
                          else {
                            let e = (function (e, t) {
                              let r = e.nodeTypes,
                                n = r[t];
                              if (n) return [n];
                              let s = [];
                              for (let e in r) {
                                let n = r[e];
                                n.groups.indexOf(t) > -1 && s.push(n);
                              }
                              return (
                                0 == s.length &&
                                  e.err(
                                    "No node type or group '" + t + "' found"
                                  ),
                                s
                              );
                            })(t, t.next).map(
                              e => (
                                null == t.inline
                                  ? (t.inline = e.isInline)
                                  : t.inline != e.isInline &&
                                    t.err('Mixing inline and block content'),
                                { type: 'name', value: e }
                              )
                            );
                            return (
                              t.pos++,
                              1 == e.length
                                ? e[0]
                                : { type: 'choice', exprs: e }
                            );
                          }
                        })(t);
                        for (;;)
                          if (t.eat('+')) r = { type: 'plus', expr: r };
                          else if (t.eat('*')) r = { type: 'star', expr: r };
                          else if (t.eat('?')) r = { type: 'opt', expr: r };
                          else if (t.eat('{'))
                            r = (function (e, t) {
                              let r = re(e),
                                n = r;
                              return (
                                e.eat(',') && (n = '}' != e.next ? re(e) : -1),
                                e.eat('}') || e.err('Unclosed braced range'),
                                { type: 'range', min: r, max: n, expr: t }
                              );
                            })(t, r);
                          else break;
                        return r;
                      })(t)
                    );
                  while (t.next && ')' != t.next && '|' != t.next);
                  return 1 == r.length ? r[0] : { type: 'seq', exprs: r };
                })(t)
              );
            while (t.eat('|'));
            return 1 == r.length ? r[0] : { type: 'choice', exprs: r };
          })(o);
          o.next && o.err('Unexpected trailing text');
          let a =
            ((n = (function (e) {
              let t = [[]];
              return (
                s(
                  (function e(t, o) {
                    if ('choice' == t.type)
                      return t.exprs.reduce((t, r) => t.concat(e(r, o)), []);
                    if ('seq' == t.type)
                      for (let n = 0; ; n++) {
                        let i = e(t.exprs[n], o);
                        if (n == t.exprs.length - 1) return i;
                        s(i, (o = r()));
                      }
                    else if ('star' == t.type) {
                      let i = r();
                      return n(o, i), s(e(t.expr, i), i), [n(i)];
                    } else if ('plus' == t.type) {
                      let i = r();
                      return s(e(t.expr, o), i), s(e(t.expr, i), i), [n(i)];
                    } else {
                      if ('opt' == t.type) return [n(o)].concat(e(t.expr, o));
                      if ('range' == t.type) {
                        let i = o;
                        for (let n = 0; n < t.min; n++) {
                          let n = r();
                          s(e(t.expr, i), n), (i = n);
                        }
                        if (-1 == t.max) s(e(t.expr, i), i);
                        else
                          for (let o = t.min; o < t.max; o++) {
                            let o = r();
                            n(i, o), s(e(t.expr, i), o), (i = o);
                          }
                        return [n(i)];
                      }
                      if ('name' == t.type) return [n(o, void 0, t.value)];
                      throw Error('Unknown expr type');
                    }
                  })(e, 0),
                  r()
                ),
                t
              );
              function r() {
                return t.push([]) - 1;
              }
              function n(e, r, n) {
                let s = { term: n, to: r };
                return t[e].push(s), s;
              }
              function s(e, t) {
                e.forEach(e => (e.to = t));
              }
            })(i)),
            (s = Object.create(null)),
            (function e(t) {
              let r = [];
              t.forEach(e => {
                n[e].forEach(({ term: e, to: t }) => {
                  let s;
                  if (e) {
                    for (let t = 0; t < r.length; t++)
                      r[t][0] == e && (s = r[t][1]);
                    rr(n, t).forEach(t => {
                      s || r.push([e, (s = [])]),
                        -1 == s.indexOf(t) && s.push(t);
                    });
                  }
                });
              });
              let o = (s[t.join(',')] = new t7(t.indexOf(n.length - 1) > -1));
              for (let t = 0; t < r.length; t++) {
                let n = r[t][1].sort(rt);
                o.next.push({ type: r[t][0], next: s[n.join(',')] || e(n) });
              }
              return o;
            })(rr(n, 0)));
          return (
            (function (e, t) {
              for (let r = 0, n = [e]; r < n.length; r++) {
                let e = n[r],
                  s = !e.validEnd,
                  o = [];
                for (let t = 0; t < e.next.length; t++) {
                  let { type: r, next: i } = e.next[t];
                  o.push(r.name),
                    s && !(r.isText || r.hasRequiredAttrs()) && (s = !1),
                    -1 == n.indexOf(i) && n.push(i);
                }
                s &&
                  t.err(
                    'Only non-generatable nodes (' +
                      o.join(', ') +
                      ') in a required position (see https://prosemirror.net/docs/guide/#generatable)'
                  );
              }
            })(a, o),
            a
          );
        }
        matchType(e) {
          for (let t = 0; t < this.next.length; t++)
            if (this.next[t].type == e) return this.next[t].next;
          return null;
        }
        matchFragment(e, t = 0, r = e.childCount) {
          let n = this;
          for (let s = t; n && s < r; s++) n = n.matchType(e.child(s).type);
          return n;
        }
        get inlineContent() {
          return 0 != this.next.length && this.next[0].type.isInline;
        }
        get defaultType() {
          for (let e = 0; e < this.next.length; e++) {
            let { type: t } = this.next[e];
            if (!(t.isText || t.hasRequiredAttrs())) return t;
          }
          return null;
        }
        compatible(e) {
          for (let t = 0; t < this.next.length; t++)
            for (let r = 0; r < e.next.length; r++)
              if (this.next[t].type == e.next[r].type) return !0;
          return !1;
        }
        fillBefore(e, t = !1, r = 0) {
          let n = [this];
          return (function s(o, i) {
            let a = o.matchFragment(e, r);
            if (a && (!t || a.validEnd))
              return t$.from(i.map(e => e.createAndFill()));
            for (let e = 0; e < o.next.length; e++) {
              let { type: t, next: r } = o.next[e];
              if (!(t.isText || t.hasRequiredAttrs()) && -1 == n.indexOf(r)) {
                n.push(r);
                let e = s(r, i.concat(t));
                if (e) return e;
              }
            }
            return null;
          })(this, []);
        }
        findWrapping(e) {
          for (let t = 0; t < this.wrapCache.length; t += 2)
            if (this.wrapCache[t] == e) return this.wrapCache[t + 1];
          let t = this.computeWrapping(e);
          return this.wrapCache.push(e, t), t;
        }
        computeWrapping(e) {
          let t = Object.create(null),
            r = [{ match: this, type: null, via: null }];
          for (; r.length; ) {
            let n = r.shift(),
              s = n.match;
            if (s.matchType(e)) {
              let e = [];
              for (let t = n; t.type; t = t.via) e.push(t.type);
              return e.reverse();
            }
            for (let e = 0; e < s.next.length; e++) {
              let { type: o, next: i } = s.next[e];
              o.isLeaf ||
                o.hasRequiredAttrs() ||
                o.name in t ||
                (n.type && !i.validEnd) ||
                (r.push({ match: o.contentMatch, type: o, via: n }),
                (t[o.name] = !0));
            }
          }
          return null;
        }
        get edgeCount() {
          return this.next.length;
        }
        edge(e) {
          if (e >= this.next.length)
            throw RangeError(`There's no ${e}th edge in this content match`);
          return this.next[e];
        }
        toString() {
          let e = [];
          return (
            (function t(r) {
              e.push(r);
              for (let n = 0; n < r.next.length; n++)
                -1 == e.indexOf(r.next[n].next) && t(r.next[n].next);
            })(this),
            e.map((t, r) => {
              let n = r + (t.validEnd ? '*' : ' ') + ' ';
              for (let r = 0; r < t.next.length; r++)
                n +=
                  (r ? ', ' : '') +
                  t.next[r].type.name +
                  '->' +
                  e.indexOf(t.next[r].next);
              return n;
            }).join(`
`)
          );
        }
      };
      t7.empty = new t7(!0);
      var t9 = class {
        constructor(e, t) {
          (this.string = e),
            (this.nodeTypes = t),
            (this.inline = null),
            (this.pos = 0),
            (this.tokens = e.split(/\s*(?=\b|\W|$)/)),
            '' == this.tokens[this.tokens.length - 1] && this.tokens.pop(),
            '' == this.tokens[0] && this.tokens.shift();
        }
        get next() {
          return this.tokens[this.pos];
        }
        eat(e) {
          return this.next == e && (this.pos++ || !0);
        }
        err(e) {
          throw SyntaxError(
            e + " (in content expression '" + this.string + "')"
          );
        }
      };
      function re(e) {
        /\D/.test(e.next) && e.err("Expected number, got '" + e.next + "'");
        let t = Number(e.next);
        return e.pos++, t;
      }
      function rt(e, t) {
        return t - e;
      }
      function rr(e, t) {
        let r = [];
        return (
          (function t(n) {
            let s = e[n];
            if (1 == s.length && !s[0].term) return t(s[0].to);
            r.push(n);
            for (let e = 0; e < s.length; e++) {
              let { term: n, to: o } = s[e];
              n || -1 != r.indexOf(o) || t(o);
            }
          })(t),
          r.sort(rt)
        );
      }
      var rn = class {
          constructor(e, t, r) {
            (this.pos = e), (this.delInfo = t), (this.recover = r);
          }
          get deleted() {
            return (8 & this.delInfo) > 0;
          }
          get deletedBefore() {
            return (5 & this.delInfo) > 0;
          }
          get deletedAfter() {
            return (6 & this.delInfo) > 0;
          }
          get deletedAcross() {
            return (4 & this.delInfo) > 0;
          }
        },
        rs = class e {
          constructor(t, r = !1) {
            if (((this.ranges = t), (this.inverted = r), !t.length && e.empty))
              return e.empty;
          }
          recover(e) {
            let t = 0,
              r = 65535 & e;
            if (!this.inverted)
              for (let e = 0; e < r; e++)
                t += this.ranges[3 * e + 2] - this.ranges[3 * e + 1];
            return this.ranges[3 * r] + t + (e - (65535 & e)) / 65536;
          }
          mapResult(e, t = 1) {
            return this._map(e, t, !1);
          }
          map(e, t = 1) {
            return this._map(e, t, !0);
          }
          _map(e, t, r) {
            let n = 0,
              s = this.inverted ? 2 : 1,
              o = this.inverted ? 1 : 2;
            for (let i = 0; i < this.ranges.length; i += 3) {
              let a = this.ranges[i] - (this.inverted ? n : 0);
              if (a > e) break;
              let l = this.ranges[i + s],
                c = this.ranges[i + o],
                d = a + l;
              if (e <= d) {
                let s = l ? (e == a ? -1 : e == d ? 1 : t) : t,
                  o = a + n + (s < 0 ? 0 : c);
                if (r) return o;
                let u = e == (t < 0 ? a : d) ? null : i / 3 + (e - a) * 65536,
                  p = e == a ? 2 : e == d ? 1 : 4;
                return (t < 0 ? e != a : e != d) && (p |= 8), new rn(o, p, u);
              }
              n += c - l;
            }
            return r ? e + n : new rn(e + n, 0, null);
          }
          touches(e, t) {
            let r = 0,
              n = 65535 & t,
              s = this.inverted ? 2 : 1,
              o = this.inverted ? 1 : 2;
            for (let t = 0; t < this.ranges.length; t += 3) {
              let i = this.ranges[t] - (this.inverted ? r : 0);
              if (i > e) break;
              let a = this.ranges[t + s];
              if (e <= i + a && t == 3 * n) return !0;
              r += this.ranges[t + o] - a;
            }
            return !1;
          }
          forEach(e) {
            let t = this.inverted ? 2 : 1,
              r = this.inverted ? 1 : 2;
            for (let n = 0, s = 0; n < this.ranges.length; n += 3) {
              let o = this.ranges[n],
                i = o - (this.inverted ? s : 0),
                a = o + (this.inverted ? 0 : s),
                l = this.ranges[n + t],
                c = this.ranges[n + r];
              e(i, i + l, a, a + c), (s += c - l);
            }
          }
          invert() {
            return new e(this.ranges, !this.inverted);
          }
          toString() {
            return (this.inverted ? '-' : '') + JSON.stringify(this.ranges);
          }
          static offset(t) {
            return 0 == t ? e.empty : new e(t < 0 ? [0, -t, 0] : [0, 0, t]);
          }
        };
      rs.empty = new rs([]);
      var ro = Object.create(null),
        ri = class {
          getMap() {
            return rs.empty;
          }
          merge(e) {
            return null;
          }
          static fromJSON(e, t) {
            if (!t || !t.stepType)
              throw RangeError('Invalid input for Step.fromJSON');
            let r = ro[t.stepType];
            if (!r) throw RangeError(`No step type ${t.stepType} defined`);
            return r.fromJSON(e, t);
          }
          static jsonID(e, t) {
            if (e in ro) throw RangeError('Duplicate use of step JSON ID ' + e);
            return (ro[e] = t), (t.prototype.jsonID = e), t;
          }
        },
        ra = class e {
          constructor(e, t) {
            (this.doc = e), (this.failed = t);
          }
          static ok(t) {
            return new e(t, null);
          }
          static fail(t) {
            return new e(null, t);
          }
          static fromReplace(t, r, n, s) {
            try {
              return e.ok(t.replace(r, n, s));
            } catch (t) {
              if (t instanceof tW) return e.fail(t.message);
              throw t;
            }
          }
        };
      function rl(e, t, r) {
        let n = [];
        for (let s = 0; s < e.childCount; s++) {
          let o = e.child(s);
          o.content.size && (o = o.copy(rl(o.content, t, o))),
            o.isInline && (o = t(o, r, s)),
            n.push(o);
        }
        return t$.fromArray(n);
      }
      var rc = class e extends ri {
        constructor(e, t, r) {
          super(), (this.from = e), (this.to = t), (this.mark = r);
        }
        apply(e) {
          let t = e.slice(this.from, this.to),
            r = e.resolve(this.from),
            n = r.node(r.sharedDepth(this.to)),
            s = new tY(
              rl(
                t.content,
                (e, t) =>
                  e.isAtom && t.type.allowsMarkType(this.mark.type)
                    ? e.mark(this.mark.addToSet(e.marks))
                    : e,
                n
              ),
              t.openStart,
              t.openEnd
            );
          return ra.fromReplace(e, this.from, this.to, s);
        }
        invert() {
          return new rd(this.from, this.to, this.mark);
        }
        map(t) {
          let r = t.mapResult(this.from, 1),
            n = t.mapResult(this.to, -1);
          return (r.deleted && n.deleted) || r.pos >= n.pos
            ? null
            : new e(r.pos, n.pos, this.mark);
        }
        merge(t) {
          return t instanceof e &&
            t.mark.eq(this.mark) &&
            this.from <= t.to &&
            this.to >= t.from
            ? new e(
                Math.min(this.from, t.from),
                Math.max(this.to, t.to),
                this.mark
              )
            : null;
        }
        toJSON() {
          return {
            stepType: 'addMark',
            mark: this.mark.toJSON(),
            from: this.from,
            to: this.to,
          };
        }
        static fromJSON(t, r) {
          if ('number' != typeof r.from || 'number' != typeof r.to)
            throw RangeError('Invalid input for AddMarkStep.fromJSON');
          return new e(r.from, r.to, t.markFromJSON(r.mark));
        }
      };
      ri.jsonID('addMark', rc);
      var rd = class e extends ri {
        constructor(e, t, r) {
          super(), (this.from = e), (this.to = t), (this.mark = r);
        }
        apply(e) {
          let t = e.slice(this.from, this.to),
            r = new tY(
              rl(t.content, e => e.mark(this.mark.removeFromSet(e.marks)), e),
              t.openStart,
              t.openEnd
            );
          return ra.fromReplace(e, this.from, this.to, r);
        }
        invert() {
          return new rc(this.from, this.to, this.mark);
        }
        map(t) {
          let r = t.mapResult(this.from, 1),
            n = t.mapResult(this.to, -1);
          return (r.deleted && n.deleted) || r.pos >= n.pos
            ? null
            : new e(r.pos, n.pos, this.mark);
        }
        merge(t) {
          return t instanceof e &&
            t.mark.eq(this.mark) &&
            this.from <= t.to &&
            this.to >= t.from
            ? new e(
                Math.min(this.from, t.from),
                Math.max(this.to, t.to),
                this.mark
              )
            : null;
        }
        toJSON() {
          return {
            stepType: 'removeMark',
            mark: this.mark.toJSON(),
            from: this.from,
            to: this.to,
          };
        }
        static fromJSON(t, r) {
          if ('number' != typeof r.from || 'number' != typeof r.to)
            throw RangeError('Invalid input for RemoveMarkStep.fromJSON');
          return new e(r.from, r.to, t.markFromJSON(r.mark));
        }
      };
      ri.jsonID('removeMark', rd);
      var ru = class e extends ri {
        constructor(e, t) {
          super(), (this.pos = e), (this.mark = t);
        }
        apply(e) {
          let t = e.nodeAt(this.pos);
          if (!t) return ra.fail("No node at mark step's position");
          let r = t.type.create(t.attrs, null, this.mark.addToSet(t.marks));
          return ra.fromReplace(
            e,
            this.pos,
            this.pos + 1,
            new tY(t$.from(r), 0, t.isLeaf ? 0 : 1)
          );
        }
        invert(t) {
          let r = t.nodeAt(this.pos);
          if (r) {
            let t = this.mark.addToSet(r.marks);
            if (t.length == r.marks.length) {
              for (let n = 0; n < r.marks.length; n++)
                if (!r.marks[n].isInSet(t)) return new e(this.pos, r.marks[n]);
              return new e(this.pos, this.mark);
            }
          }
          return new rp(this.pos, this.mark);
        }
        map(t) {
          let r = t.mapResult(this.pos, 1);
          return r.deletedAfter ? null : new e(r.pos, this.mark);
        }
        toJSON() {
          return {
            stepType: 'addNodeMark',
            pos: this.pos,
            mark: this.mark.toJSON(),
          };
        }
        static fromJSON(t, r) {
          if ('number' != typeof r.pos)
            throw RangeError('Invalid input for AddNodeMarkStep.fromJSON');
          return new e(r.pos, t.markFromJSON(r.mark));
        }
      };
      ri.jsonID('addNodeMark', ru);
      var rp = class e extends ri {
        constructor(e, t) {
          super(), (this.pos = e), (this.mark = t);
        }
        apply(e) {
          let t = e.nodeAt(this.pos);
          if (!t) return ra.fail("No node at mark step's position");
          let r = t.type.create(
            t.attrs,
            null,
            this.mark.removeFromSet(t.marks)
          );
          return ra.fromReplace(
            e,
            this.pos,
            this.pos + 1,
            new tY(t$.from(r), 0, t.isLeaf ? 0 : 1)
          );
        }
        invert(e) {
          let t = e.nodeAt(this.pos);
          return t && this.mark.isInSet(t.marks)
            ? new ru(this.pos, this.mark)
            : this;
        }
        map(t) {
          let r = t.mapResult(this.pos, 1);
          return r.deletedAfter ? null : new e(r.pos, this.mark);
        }
        toJSON() {
          return {
            stepType: 'removeNodeMark',
            pos: this.pos,
            mark: this.mark.toJSON(),
          };
        }
        static fromJSON(t, r) {
          if ('number' != typeof r.pos)
            throw RangeError('Invalid input for RemoveNodeMarkStep.fromJSON');
          return new e(r.pos, t.markFromJSON(r.mark));
        }
      };
      ri.jsonID('removeNodeMark', rp);
      var rh = class e extends ri {
        constructor(e, t, r, n = !1) {
          super(),
            (this.from = e),
            (this.to = t),
            (this.slice = r),
            (this.structure = n);
        }
        apply(e) {
          return this.structure && rf(e, this.from, this.to)
            ? ra.fail('Structure replace would overwrite content')
            : ra.fromReplace(e, this.from, this.to, this.slice);
        }
        getMap() {
          return new rs([this.from, this.to - this.from, this.slice.size]);
        }
        invert(t) {
          return new e(
            this.from,
            this.from + this.slice.size,
            t.slice(this.from, this.to)
          );
        }
        map(t) {
          let r = t.mapResult(this.from, 1),
            n = t.mapResult(this.to, -1);
          return r.deletedAcross && n.deletedAcross
            ? null
            : new e(r.pos, Math.max(r.pos, n.pos), this.slice);
        }
        merge(t) {
          if (!(t instanceof e) || t.structure || this.structure) return null;
          if (
            this.from + this.slice.size != t.from ||
            this.slice.openEnd ||
            t.slice.openStart
          ) {
            if (t.to != this.from || this.slice.openStart || t.slice.openEnd)
              return null;
            {
              let r =
                this.slice.size + t.slice.size == 0
                  ? tY.empty
                  : new tY(
                      t.slice.content.append(this.slice.content),
                      t.slice.openStart,
                      this.slice.openEnd
                    );
              return new e(t.from, this.to, r, this.structure);
            }
          }
          {
            let r =
              this.slice.size + t.slice.size == 0
                ? tY.empty
                : new tY(
                    this.slice.content.append(t.slice.content),
                    this.slice.openStart,
                    t.slice.openEnd
                  );
            return new e(
              this.from,
              this.to + (t.to - t.from),
              r,
              this.structure
            );
          }
        }
        toJSON() {
          let e = { stepType: 'replace', from: this.from, to: this.to };
          return (
            this.slice.size && (e.slice = this.slice.toJSON()),
            this.structure && (e.structure = !0),
            e
          );
        }
        static fromJSON(t, r) {
          if ('number' != typeof r.from || 'number' != typeof r.to)
            throw RangeError('Invalid input for ReplaceStep.fromJSON');
          return new e(r.from, r.to, tY.fromJSON(t, r.slice), !!r.structure);
        }
      };
      ri.jsonID('replace', rh);
      var rm = class e extends ri {
        constructor(e, t, r, n, s, o, i = !1) {
          super(),
            (this.from = e),
            (this.to = t),
            (this.gapFrom = r),
            (this.gapTo = n),
            (this.slice = s),
            (this.insert = o),
            (this.structure = i);
        }
        apply(e) {
          if (
            this.structure &&
            (rf(e, this.from, this.gapFrom) || rf(e, this.gapTo, this.to))
          )
            return ra.fail('Structure gap-replace would overwrite content');
          let t = e.slice(this.gapFrom, this.gapTo);
          if (t.openStart || t.openEnd)
            return ra.fail('Gap is not a flat range');
          let r = this.slice.insertAt(this.insert, t.content);
          return r
            ? ra.fromReplace(e, this.from, this.to, r)
            : ra.fail('Content does not fit in gap');
        }
        getMap() {
          return new rs([
            this.from,
            this.gapFrom - this.from,
            this.insert,
            this.gapTo,
            this.to - this.gapTo,
            this.slice.size - this.insert,
          ]);
        }
        invert(t) {
          let r = this.gapTo - this.gapFrom;
          return new e(
            this.from,
            this.from + this.slice.size + r,
            this.from + this.insert,
            this.from + this.insert + r,
            t
              .slice(this.from, this.to)
              .removeBetween(this.gapFrom - this.from, this.gapTo - this.from),
            this.gapFrom - this.from,
            this.structure
          );
        }
        map(t) {
          let r = t.mapResult(this.from, 1),
            n = t.mapResult(this.to, -1),
            s = t.map(this.gapFrom, -1),
            o = t.map(this.gapTo, 1);
          return (r.deletedAcross && n.deletedAcross) || s < r.pos || o > n.pos
            ? null
            : new e(
                r.pos,
                n.pos,
                s,
                o,
                this.slice,
                this.insert,
                this.structure
              );
        }
        toJSON() {
          let e = {
            stepType: 'replaceAround',
            from: this.from,
            to: this.to,
            gapFrom: this.gapFrom,
            gapTo: this.gapTo,
            insert: this.insert,
          };
          return (
            this.slice.size && (e.slice = this.slice.toJSON()),
            this.structure && (e.structure = !0),
            e
          );
        }
        static fromJSON(t, r) {
          if (
            'number' != typeof r.from ||
            'number' != typeof r.to ||
            'number' != typeof r.gapFrom ||
            'number' != typeof r.gapTo ||
            'number' != typeof r.insert
          )
            throw RangeError('Invalid input for ReplaceAroundStep.fromJSON');
          return new e(
            r.from,
            r.to,
            r.gapFrom,
            r.gapTo,
            tY.fromJSON(t, r.slice),
            r.insert,
            !!r.structure
          );
        }
      };
      function rf(e, t, r) {
        let n = e.resolve(t),
          s = r - t,
          o = n.depth;
        for (; s > 0 && o > 0 && n.indexAfter(o) == n.node(o).childCount; )
          o--, s--;
        if (s > 0) {
          let e = n.node(o).maybeChild(n.indexAfter(o));
          for (; s > 0; ) {
            if (!e || e.isLeaf) return !0;
            (e = e.firstChild), s--;
          }
        }
        return !1;
      }
      ri.jsonID('replaceAround', rm);
      var rg = class e extends ri {
        constructor(e, t, r) {
          super(), (this.pos = e), (this.attr = t), (this.value = r);
        }
        apply(e) {
          let t = e.nodeAt(this.pos);
          if (!t) return ra.fail("No node at attribute step's position");
          let r = Object.create(null);
          for (let e in t.attrs) r[e] = t.attrs[e];
          r[this.attr] = this.value;
          let n = t.type.create(r, null, t.marks);
          return ra.fromReplace(
            e,
            this.pos,
            this.pos + 1,
            new tY(t$.from(n), 0, t.isLeaf ? 0 : 1)
          );
        }
        getMap() {
          return rs.empty;
        }
        invert(t) {
          return new e(
            this.pos,
            this.attr,
            t.nodeAt(this.pos).attrs[this.attr]
          );
        }
        map(t) {
          let r = t.mapResult(this.pos, 1);
          return r.deletedAfter ? null : new e(r.pos, this.attr, this.value);
        }
        toJSON() {
          return {
            stepType: 'attr',
            pos: this.pos,
            attr: this.attr,
            value: this.value,
          };
        }
        static fromJSON(t, r) {
          if ('number' != typeof r.pos || 'string' != typeof r.attr)
            throw RangeError('Invalid input for AttrStep.fromJSON');
          return new e(r.pos, r.attr, r.value);
        }
      };
      ri.jsonID('attr', rg);
      var rx = class e extends ri {
        constructor(e, t) {
          super(), (this.attr = e), (this.value = t);
        }
        apply(e) {
          let t = Object.create(null);
          for (let r in e.attrs) t[r] = e.attrs[r];
          t[this.attr] = this.value;
          let r = e.type.create(t, e.content, e.marks);
          return ra.ok(r);
        }
        getMap() {
          return rs.empty;
        }
        invert(t) {
          return new e(this.attr, t.attrs[this.attr]);
        }
        map(e) {
          return this;
        }
        toJSON() {
          return { stepType: 'docAttr', attr: this.attr, value: this.value };
        }
        static fromJSON(t, r) {
          if ('string' != typeof r.attr)
            throw RangeError('Invalid input for DocAttrStep.fromJSON');
          return new e(r.attr, r.value);
        }
      };
      ri.jsonID('docAttr', rx);
      var ry = class extends Error {};
      ((ry = function e(t) {
        let r = Error.call(this, t);
        return (r.__proto__ = e.prototype), r;
      }).prototype = Object.create(Error.prototype)),
        (ry.prototype.constructor = ry),
        (ry.prototype.name = 'TransformError');
      var rv = Object.create(null),
        rb = class {
          constructor(e, t, r) {
            (this.$anchor = e),
              (this.$head = t),
              (this.ranges = r || [new rw(e.min(t), e.max(t))]);
          }
          get anchor() {
            return this.$anchor.pos;
          }
          get head() {
            return this.$head.pos;
          }
          get from() {
            return this.$from.pos;
          }
          get to() {
            return this.$to.pos;
          }
          get $from() {
            return this.ranges[0].$from;
          }
          get $to() {
            return this.ranges[0].$to;
          }
          get empty() {
            let e = this.ranges;
            for (let t = 0; t < e.length; t++)
              if (e[t].$from.pos != e[t].$to.pos) return !1;
            return !0;
          }
          content() {
            return this.$from.doc.slice(this.from, this.to, !0);
          }
          replace(e, t = tY.empty) {
            let r = t.content.lastChild,
              n = null;
            for (let e = 0; e < t.openEnd; e++) (n = r), (r = r.lastChild);
            let s = e.steps.length,
              o = this.ranges;
            for (let i = 0; i < o.length; i++) {
              let { $from: a, $to: l } = o[i],
                c = e.mapping.slice(s);
              e.replaceRange(c.map(a.pos), c.map(l.pos), i ? tY.empty : t),
                0 == i &&
                  rR(e, s, (r ? r.isInline : n && n.isTextblock) ? -1 : 1);
            }
          }
          replaceWith(e, t) {
            let r = e.steps.length,
              n = this.ranges;
            for (let s = 0; s < n.length; s++) {
              let { $from: o, $to: i } = n[s],
                a = e.mapping.slice(r),
                l = a.map(o.pos),
                c = a.map(i.pos);
              s
                ? e.deleteRange(l, c)
                : (e.replaceRangeWith(l, c, t), rR(e, r, t.isInline ? -1 : 1));
            }
          }
          static findFrom(e, t, r = !1) {
            let n = e.parent.inlineContent
              ? new rN(e)
              : rO(e.node(0), e.parent, e.pos, e.index(), t, r);
            if (n) return n;
            for (let n = e.depth - 1; n >= 0; n--) {
              let s =
                t < 0
                  ? rO(e.node(0), e.node(n), e.before(n + 1), e.index(n), t, r)
                  : rO(
                      e.node(0),
                      e.node(n),
                      e.after(n + 1),
                      e.index(n) + 1,
                      t,
                      r
                    );
              if (s) return s;
            }
            return null;
          }
          static near(e, t = 1) {
            return (
              this.findFrom(e, t) || this.findFrom(e, -t) || new rT(e.node(0))
            );
          }
          static atStart(e) {
            return rO(e, e, 0, 0, 1) || new rT(e);
          }
          static atEnd(e) {
            return rO(e, e, e.content.size, e.childCount, -1) || new rT(e);
          }
          static fromJSON(e, t) {
            if (!t || !t.type)
              throw RangeError('Invalid input for Selection.fromJSON');
            let r = rv[t.type];
            if (!r) throw RangeError(`No selection type ${t.type} defined`);
            return r.fromJSON(e, t);
          }
          static jsonID(e, t) {
            if (e in rv)
              throw RangeError('Duplicate use of selection JSON ID ' + e);
            return (rv[e] = t), (t.prototype.jsonID = e), t;
          }
          getBookmark() {
            return rN.between(this.$anchor, this.$head).getBookmark();
          }
        };
      rb.prototype.visible = !0;
      var rw = class {
          constructor(e, t) {
            (this.$from = e), (this.$to = t);
          }
        },
        rk = !1;
      function rj(e) {
        rk ||
          e.parent.inlineContent ||
          ((rk = !0),
          console.warn(
            'TextSelection endpoint not pointing into a node with inline content (' +
              e.parent.type.name +
              ')'
          ));
      }
      var rN = class e extends rb {
        constructor(e, t = e) {
          rj(e), rj(t), super(e, t);
        }
        get $cursor() {
          return this.$anchor.pos == this.$head.pos ? this.$head : null;
        }
        map(t, r) {
          let n = t.resolve(r.map(this.head));
          if (!n.parent.inlineContent) return rb.near(n);
          let s = t.resolve(r.map(this.anchor));
          return new e(s.parent.inlineContent ? s : n, n);
        }
        replace(e, t = tY.empty) {
          if ((super.replace(e, t), t == tY.empty)) {
            let t = this.$from.marksAcross(this.$to);
            t && e.ensureMarks(t);
          }
        }
        eq(t) {
          return (
            t instanceof e && t.anchor == this.anchor && t.head == this.head
          );
        }
        getBookmark() {
          return new rC(this.anchor, this.head);
        }
        toJSON() {
          return { type: 'text', anchor: this.anchor, head: this.head };
        }
        static fromJSON(t, r) {
          if ('number' != typeof r.anchor || 'number' != typeof r.head)
            throw RangeError('Invalid input for TextSelection.fromJSON');
          return new e(t.resolve(r.anchor), t.resolve(r.head));
        }
        static create(e, t, r = t) {
          let n = e.resolve(t);
          return new this(n, r == t ? n : e.resolve(r));
        }
        static between(t, r, n) {
          let s = t.pos - r.pos;
          if (((!n || s) && (n = s >= 0 ? 1 : -1), !r.parent.inlineContent)) {
            let e = rb.findFrom(r, n, !0) || rb.findFrom(r, -n, !0);
            if (!e) return rb.near(r, n);
            r = e.$head;
          }
          return (
            t.parent.inlineContent ||
              (0 == s
                ? (t = r)
                : (t = (rb.findFrom(t, -n, !0) || rb.findFrom(t, n, !0))
                    .$anchor).pos <
                    r.pos !=
                    s < 0 && (t = r)),
            new e(t, r)
          );
        }
      };
      rb.jsonID('text', rN);
      var rC = class e {
          constructor(e, t) {
            (this.anchor = e), (this.head = t);
          }
          map(t) {
            return new e(t.map(this.anchor), t.map(this.head));
          }
          resolve(e) {
            return rN.between(e.resolve(this.anchor), e.resolve(this.head));
          }
        },
        rS = class e extends rb {
          constructor(e) {
            let t = e.nodeAfter;
            super(e, e.node(0).resolve(e.pos + t.nodeSize)), (this.node = t);
          }
          map(t, r) {
            let { deleted: n, pos: s } = r.mapResult(this.anchor),
              o = t.resolve(s);
            return n ? rb.near(o) : new e(o);
          }
          content() {
            return new tY(t$.from(this.node), 0, 0);
          }
          eq(t) {
            return t instanceof e && t.anchor == this.anchor;
          }
          toJSON() {
            return { type: 'node', anchor: this.anchor };
          }
          getBookmark() {
            return new rE(this.anchor);
          }
          static fromJSON(t, r) {
            if ('number' != typeof r.anchor)
              throw RangeError('Invalid input for NodeSelection.fromJSON');
            return new e(t.resolve(r.anchor));
          }
          static create(t, r) {
            return new e(t.resolve(r));
          }
          static isSelectable(e) {
            return !e.isText && !1 !== e.type.spec.selectable;
          }
        };
      (rS.prototype.visible = !1), rb.jsonID('node', rS);
      var rE = class e {
          constructor(e) {
            this.anchor = e;
          }
          map(t) {
            let { deleted: r, pos: n } = t.mapResult(this.anchor);
            return r ? new rC(n, n) : new e(n);
          }
          resolve(e) {
            let t = e.resolve(this.anchor),
              r = t.nodeAfter;
            return r && rS.isSelectable(r) ? new rS(t) : rb.near(t);
          }
        },
        rT = class e extends rb {
          constructor(e) {
            super(e.resolve(0), e.resolve(e.content.size));
          }
          replace(e, t = tY.empty) {
            if (t == tY.empty) {
              e.delete(0, e.doc.content.size);
              let t = rb.atStart(e.doc);
              t.eq(e.selection) || e.setSelection(t);
            } else super.replace(e, t);
          }
          toJSON() {
            return { type: 'all' };
          }
          static fromJSON(t) {
            return new e(t);
          }
          map(t) {
            return new e(t);
          }
          eq(t) {
            return t instanceof e;
          }
          getBookmark() {
            return rA;
          }
        };
      rb.jsonID('all', rT);
      var rA = {
        map() {
          return this;
        },
        resolve: e => new rT(e),
      };
      function rO(e, t, r, n, s, o = !1) {
        if (t.inlineContent) return rN.create(e, r);
        for (
          let i = n - (s > 0 ? 0 : 1);
          s > 0 ? i < t.childCount : i >= 0;
          i += s
        ) {
          let n = t.child(i);
          if (n.isAtom) {
            if (!o && rS.isSelectable(n))
              return rS.create(e, r - (s < 0 ? n.nodeSize : 0));
          } else {
            let t = rO(e, n, r + s, s < 0 ? n.childCount : 0, s, o);
            if (t) return t;
          }
          r += n.nodeSize * s;
        }
        return null;
      }
      function rR(e, t, r) {
        let n,
          s = e.steps.length - 1;
        if (s < t) return;
        let o = e.steps[s];
        (o instanceof rh || o instanceof rm) &&
          (e.mapping.maps[s].forEach((e, t, r, s) => {
            null == n && (n = s);
          }),
          e.setSelection(rb.near(e.doc.resolve(n), r)));
      }
      function rM(e, t) {
        return t && e ? e.bind(t) : e;
      }
      var rI = class {
        constructor(e, t, r) {
          (this.name = e),
            (this.init = rM(t.init, r)),
            (this.apply = rM(t.apply, r));
        }
      };
      new rI('doc', {
        init: e => e.doc || e.schema.topNodeType.createAndFill(),
        apply: e => e.doc,
      }),
        new rI('selection', {
          init: (e, t) => e.selection || rb.atStart(t.doc),
          apply: e => e.selection,
        }),
        new rI('storedMarks', {
          init: e => e.storedMarks || null,
          apply: (e, t, r, n) => (n.selection.$cursor ? e.storedMarks : null),
        }),
        new rI('scrollToSelection', {
          init: () => 0,
          apply: (e, t) => (e.scrolledIntoView ? t + 1 : t),
        });
      var rz = class {
          constructor(e) {
            (this.spec = e),
              (this.props = {}),
              e.props &&
                (function e(t, r, n) {
                  for (let s in t) {
                    let o = t[s];
                    o instanceof Function
                      ? (o = o.bind(r))
                      : 'handleDOMEvents' == s && (o = e(o, r, {})),
                      (n[s] = o);
                  }
                  return n;
                })(e.props, this, this.props),
              (this.key = e.key ? e.key.key : rL('plugin'));
          }
          getState(e) {
            return e[this.key];
          }
        },
        r_ = Object.create(null);
      function rL(e) {
        return e in r_ ? e + '$' + ++r_[e] : ((r_[e] = 0), e + '$');
      }
      var rP = class {
          constructor(e = 'key') {
            this.key = rL(e);
          }
          get(e) {
            return e.config.pluginsByKey[this.key];
          }
          getState(e) {
            return e[this.key];
          }
        },
        rF = e =>
          a.Extension.create({
            name: 'dropHandler',
            priority: 1e3,
            addProseMirrorPlugins() {
              return [
                new rz({
                  key: new rP('drop-handler-plugin'),
                  props: {
                    handlePaste: (t, r) => {
                      if (
                        r.clipboardData &&
                        r.clipboardData.files &&
                        r.clipboardData.files[0]
                      ) {
                        r.preventDefault();
                        let n = r.clipboardData.files[0],
                          s = t.state.selection.from;
                        return ez(this.editor, n, t, s, e), !0;
                      }
                      return !1;
                    },
                    handleDrop: (t, r, n, s) => {
                      if (
                        !s &&
                        r.dataTransfer &&
                        r.dataTransfer.files &&
                        r.dataTransfer.files[0]
                      ) {
                        r.preventDefault();
                        let n = r.dataTransfer.files[0],
                          s = t.posAtCoords({
                            left: r.clientX,
                            top: r.clientY,
                          });
                        return s && ez(this.editor, n, t, s.pos - 1, e), !0;
                      }
                      return !1;
                    },
                  },
                }),
              ];
            },
          }),
        rD = ({
          mentionConfig: e,
          fileConfig: {
            deleteFile: t,
            restoreFile: r,
            cancelUploadImage: n,
            uploadFile: s,
          },
          placeholder: o,
          tabIndex: i,
        }) => [
          b.Z.configure({
            bulletList: {
              HTMLAttributes: { class: 'list-disc pl-7 space-y-2' },
            },
            orderedList: {
              HTMLAttributes: { class: 'list-decimal pl-7 space-y-2' },
            },
            listItem: { HTMLAttributes: { class: 'not-prose space-y-2' } },
            code: !1,
            codeBlock: !1,
            horizontalRule: !1,
            blockquote: !1,
            dropcursor: { color: 'rgba(var(--color-text-100))', width: 1 },
          }),
          tg,
          rF(s),
          tH.configure({
            HTMLAttributes: { class: 'my-4 border-custom-border-400' },
          }),
          tf,
          th({ tabIndex: i }),
          tx.configure({
            openOnClick: !0,
            autolink: !0,
            linkOnPaste: !0,
            protocols: ['http', 'https'],
            validate: e => ex(e),
            HTMLAttributes: {
              class:
                'text-custom-primary-300 underline underline-offset-[3px] hover:text-custom-primary-500 transition-colors cursor-pointer',
            },
          }),
          tB,
          eV(t, r, n).configure({ HTMLAttributes: { class: 'rounded-md' } }),
          y.Z,
          x.Z,
          g.Z.configure({
            HTMLAttributes: { class: 'not-prose pl-2 space-y-2' },
          }),
          f.ZP.configure({ HTMLAttributes: { class: 'relative' }, nested: !0 }),
          e9.configure({ HTMLAttributes: { class: '' } }),
          tJ,
          tb,
          w.U.configure({ html: !0, transformPastedText: !0 }),
          eO,
          eB,
          eD,
          eH,
          e1({
            mentionSuggestions: e.mentionSuggestions,
            mentionHighlights: e.mentionHighlights,
            readonly: !1,
          }),
          v.Z.configure({
            placeholder: ({ editor: e, node: t }) =>
              'heading' === t.type.name
                ? `Heading ${t.attrs.level}`
                : e.isActive('table') ||
                    e.isActive('codeBlock') ||
                    e.isActive('image')
                  ? ''
                  : o
                    ? 'string' == typeof o
                      ? o
                      : o(e.isFocused, e.getHTML())
                    : "Press '/' for commands...",
            includeChildren: !0,
          }),
        ],
        rB = (e, t, r) => {
          if (!e.current || e.current.isDestroyed) {
            console.error(
              'Editor reference is not available or has been destroyed.'
            );
            return;
          }
          if (!r) {
            console.error('Saved selection is invalid.');
            return;
          }
          let n = e.current.state.doc.content.size,
            s = Math.max(0, Math.min(r.anchor, n));
          try {
            e.current.chain().focus().insertContentAt(s, t).run();
          } catch (e) {
            console.error(
              'An error occurred while inserting content at saved selection:',
              e
            );
          }
        },
        rH = (e, t) => {
          t
            ? e.chain().focus().deleteRange(t).clearNodes().run()
            : e.chain().focus().clearNodes().run();
        },
        rJ = (e, t) => {
          t
            ? e
                .chain()
                .focus()
                .deleteRange(t)
                .setNode('heading', { level: 1 })
                .run()
            : e.chain().focus().toggleHeading({ level: 1 }).run();
        },
        r$ = (e, t) => {
          t
            ? e
                .chain()
                .focus()
                .deleteRange(t)
                .setNode('heading', { level: 2 })
                .run()
            : e.chain().focus().toggleHeading({ level: 2 }).run();
        },
        rq = (e, t) => {
          t
            ? e
                .chain()
                .focus()
                .deleteRange(t)
                .setNode('heading', { level: 3 })
                .run()
            : e.chain().focus().toggleHeading({ level: 3 }).run();
        },
        rU = (e, t) => {
          t
            ? e
                .chain()
                .focus()
                .deleteRange(t)
                .setNode('heading', { level: 4 })
                .run()
            : e.chain().focus().toggleHeading({ level: 4 }).run();
        },
        rV = (e, t) => {
          t
            ? e
                .chain()
                .focus()
                .deleteRange(t)
                .setNode('heading', { level: 5 })
                .run()
            : e.chain().focus().toggleHeading({ level: 5 }).run();
        },
        rZ = (e, t) => {
          t
            ? e
                .chain()
                .focus()
                .deleteRange(t)
                .setNode('heading', { level: 6 })
                .run()
            : e.chain().focus().toggleHeading({ level: 6 }).run();
        },
        rW = (e, t) => {
          t
            ? e.chain().focus().deleteRange(t).toggleBold().run()
            : e.chain().focus().toggleBold().run();
        },
        rY = (e, t) => {
          t
            ? e.chain().focus().deleteRange(t).toggleItalic().run()
            : e.chain().focus().toggleItalic().run();
        },
        rK = (e, t) => {
          t
            ? e.chain().focus().deleteRange(t).toggleUnderline().run()
            : e.chain().focus().toggleUnderline().run();
        },
        rG = e => {
          try {
            let { schema: t } = e.state,
              { paragraph: r } = t.nodes,
              n = !1,
              s = (s, o, i) => {
                let a = e.state.doc.content.size;
                if (s < 0 || o > a || s > o) {
                  console.error(
                    'Invalid range for replacement: ',
                    s,
                    o,
                    'in a document of size',
                    a
                  );
                  return;
                }
                let l = i.split(/\r?\n/),
                  c = e.state.tr,
                  d = s;
                c.delete(s, o),
                  l.forEach(e => {
                    let n = r.create({}, t.text(e));
                    c.insert(d, n), (d += n.nodeSize);
                  }),
                  e.view.dispatch(c),
                  (n = !0);
              };
            e.state.doc.nodesBetween(
              e.state.selection.from,
              e.state.selection.to,
              (e, r) => {
                if (e.type === t.nodes.codeBlock) {
                  let t = r + e.nodeSize,
                    n = e.textContent;
                  return s(r, t, n), !1;
                }
              }
            ),
              n || console.log('No code block to replace.');
          } catch (e) {
            console.error(
              'An error occurred while replacing code block content:',
              e
            );
          }
        },
        rX = (e, t) => {
          try {
            if (e.isActive('codeBlock')) {
              rG(e);
              return;
            }
            let { from: r, to: n } = t || e.state.selection,
              s = e.state.doc.textBetween(
                r,
                n,
                `
`
              ),
              o = s.includes(`
`);
            e.state.selection.empty
              ? e.chain().focus().toggleCodeBlock().run()
              : o
                ? e
                    .chain()
                    .focus()
                    .deleteRange({ from: r, to: n })
                    .insertContentAt(
                      r,
                      `\`\`\`
${s}
\`\`\``
                    )
                    .run()
                : e.chain().focus().toggleCode().run();
          } catch (e) {
            console.error('An error occurred while toggling code block:', e);
          }
        },
        rQ = (e, t) => {
          t
            ? e.chain().focus().deleteRange(t).toggleOrderedList().run()
            : e.chain().focus().toggleOrderedList().run();
        },
        r0 = (e, t) => {
          t
            ? e.chain().focus().deleteRange(t).toggleBulletList().run()
            : e.chain().focus().toggleBulletList().run();
        },
        r1 = (e, t) => {
          t
            ? e.chain().focus().deleteRange(t).toggleTaskList().run()
            : e.chain().focus().toggleTaskList().run();
        },
        r2 = (e, t) => {
          t
            ? e.chain().focus().deleteRange(t).toggleStrike().run()
            : e.chain().focus().toggleStrike().run();
        },
        r3 = (e, t) => {
          t
            ? e.chain().focus().deleteRange(t).toggleBlockquote().run()
            : e.chain().focus().toggleBlockquote().run();
        },
        r5 = (e, t) => {
          if ('undefined' != typeof window) {
            let e = window.getSelection();
            if (e && 0 !== e.rangeCount && eg(e.getRangeAt(0).startContainer))
              return;
          }
          t
            ? e
                .chain()
                .focus()
                .deleteRange(t)
                .clearNodes()
                .insertTable({ rows: 3, cols: 3 })
                .run()
            : e
                .chain()
                .focus()
                .clearNodes()
                .insertTable({ rows: 3, cols: 3 })
                .run();
        },
        r4 = e => {
          e.chain().focus().unsetLink().run();
        },
        r8 = (e, t) => {
          e.chain().focus().setLink({ href: t }).run();
        },
        r6 = (e, t, r, n) => {
          n && e.chain().focus().deleteRange(n).run();
          let s = document.createElement('input');
          (s.type = 'file'),
            (s.accept = 'image/*'),
            (s.onchange = () =>
              ed(void 0, null, function* () {
                var n, o;
                if (null != (n = s.files) && n.length) {
                  let n = s.files[0],
                    i =
                      null != (o = null == r ? void 0 : r.anchor)
                        ? o
                        : e.view.state.selection.from;
                  ez(e, n, e.view, i, t);
                }
              })),
            s.click();
        },
        r7 = e => ({
          key: 'text',
          name: 'Text',
          isActive: () => e.isActive('paragraph'),
          command: () => rH(e),
          icon: P.Z,
        }),
        r9 = e => ({
          key: 'h1',
          name: 'Heading 1',
          isActive: () => e.isActive('heading', { level: 1 }),
          command: () => rJ(e),
          icon: F.Z,
        }),
        ne = e => ({
          key: 'h2',
          name: 'Heading 2',
          isActive: () => e.isActive('heading', { level: 2 }),
          command: () => r$(e),
          icon: D.Z,
        }),
        nt = e => ({
          key: 'h3',
          name: 'Heading 3',
          isActive: () => e.isActive('heading', { level: 3 }),
          command: () => rq(e),
          icon: B.Z,
        }),
        nr = e => ({
          key: 'h4',
          name: 'Heading 4',
          isActive: () => e.isActive('heading', { level: 4 }),
          command: () => rU(e),
          icon: H.Z,
        }),
        nn = e => ({
          key: 'h5',
          name: 'Heading 5',
          isActive: () => e.isActive('heading', { level: 5 }),
          command: () => rV(e),
          icon: J.Z,
        }),
        ns = e => ({
          key: 'h6',
          name: 'Heading 6',
          isActive: () => e.isActive('heading', { level: 6 }),
          command: () => rZ(e),
          icon: $.Z,
        }),
        no = e => ({
          key: 'bold',
          name: 'Bold',
          isActive: () => (null == e ? void 0 : e.isActive('bold')),
          command: () => rW(e),
          icon: q.Z,
        }),
        ni = e => ({
          key: 'italic',
          name: 'Italic',
          isActive: () => (null == e ? void 0 : e.isActive('italic')),
          command: () => rY(e),
          icon: U.Z,
        }),
        na = e => ({
          key: 'underline',
          name: 'Underline',
          isActive: () => (null == e ? void 0 : e.isActive('underline')),
          command: () => rK(e),
          icon: V.Z,
        }),
        nl = e => ({
          key: 'strikethrough',
          name: 'Strikethrough',
          isActive: () => (null == e ? void 0 : e.isActive('strike')),
          command: () => r2(e),
          icon: Z.Z,
        }),
        nc = e => ({
          key: 'bulleted-list',
          name: 'Bulleted list',
          isActive: () => (null == e ? void 0 : e.isActive('bulletList')),
          command: () => r0(e),
          icon: W.Z,
        }),
        nd = e => ({
          key: 'numbered-list',
          name: 'Numbered list',
          isActive: () => (null == e ? void 0 : e.isActive('orderedList')),
          command: () => rQ(e),
          icon: Y.Z,
        }),
        nu = e => ({
          key: 'to-do-list',
          name: 'To-do list',
          isActive: () => e.isActive('taskItem'),
          command: () => r1(e),
          icon: K.Z,
        }),
        np = e => ({
          key: 'quote',
          name: 'Quote',
          isActive: () => (null == e ? void 0 : e.isActive('blockquote')),
          command: () => r3(e),
          icon: G.Z,
        }),
        nh = e => ({
          key: 'code',
          name: 'Code',
          isActive: () =>
            (null == e ? void 0 : e.isActive('code')) ||
            (null == e ? void 0 : e.isActive('codeBlock')),
          command: () => rX(e),
          icon: X.Z,
        }),
        nm = e => ({
          key: 'table',
          name: 'Table',
          isActive: () => (null == e ? void 0 : e.isActive('table')),
          command: () => r5(e),
          icon: Q.Z,
        }),
        nf = (e, t) => ({
          key: 'image',
          name: 'Image',
          isActive: () => (null == e ? void 0 : e.isActive('image')),
          command: r => r6(e, t, r),
          icon: ee.Z,
        });
      function ng(e, t) {
        return e
          ? [
              r7(e),
              r9(e),
              ne(e),
              nt(e),
              nr(e),
              nn(e),
              ns(e),
              no(e),
              ni(e),
              na(e),
              nl(e),
              nc(e),
              nu(e),
              nh(e),
              nd(e),
              np(e),
              nm(e),
              nf(e, t),
            ]
          : [];
      }
      function nx(e, t) {
        if (e) {
          var r, n;
          let s, o;
          let i =
            ((r = t.sequence),
            (n = t.level),
            (s = 0),
            (o = 0),
            e.state.doc.descendants((e, t) => {
              if ('heading' === e.type.name && e.attrs.level === n && ++s === r)
                return (o = t), !1;
            }),
            o);
          !(function (e, t) {
            if (e.state.doc.nodeAt(t)) {
              let r = e.view.nodeDOM(t);
              r instanceof HTMLElement &&
                r.scrollIntoView({ behavior: 'smooth' });
            }
          })(e, i);
        }
      }
      var ny = ({
          uploadFile: e,
          id: t = '',
          deleteFile: r,
          cancelUploadImage: n,
          editorProps: s = {},
          initialValue: o,
          editorClassName: i,
          value: a,
          extensions: l = [],
          onChange: c,
          forwardedRef: d,
          tabIndex: u,
          restoreFile: m,
          handleEditorReady: f,
          mentionHandler: g,
          placeholder: x,
        }) => {
          var y, v;
          let b = (0, p.jE)({
              editorProps: el(
                el(
                  {},
                  {
                    attributes: {
                      class: em(
                        'prose prose-brand max-w-full prose-headings:font-display font-default focus:outline-none',
                        i
                      ),
                    },
                    handleDOMEvents: {
                      keydown: (e, t) => {
                        if (
                          ['ArrowUp', 'ArrowDown', 'Enter'].includes(t.key) &&
                          document.querySelector('#slash-command')
                        )
                          return !0;
                      },
                    },
                    transformPastedHTML: e => e.replace(/<img.*?>/g, ''),
                  }
                ),
                s
              ),
              extensions: [
                ...rD({
                  mentionConfig: {
                    mentionSuggestions:
                      null != (y = g.suggestions)
                        ? y
                        : () => Promise.resolve([]),
                    mentionHighlights: null != (v = g.highlights) ? v : [],
                  },
                  fileConfig: {
                    deleteFile: r,
                    restoreFile: m,
                    cancelUploadImage: n,
                    uploadFile: e,
                  },
                  placeholder: x,
                  tabIndex: u,
                }),
                ...l,
              ],
              content: 'string' == typeof o && '' !== o.trim() ? o : '<p></p>',
              onCreate: () =>
                ed(void 0, null, function* () {
                  null == f || f(!0);
                }),
              onTransaction: e =>
                ed(void 0, [e], function* ({ editor: e }) {
                  j(e.state.selection);
                }),
              onUpdate: e =>
                ed(void 0, [e], function* ({ editor: e }) {
                  null == c || c(e.getJSON(), e.getHTML());
                }),
              onDestroy: () =>
                ed(void 0, null, function* () {
                  null == f || f(!1);
                }),
            }),
            w = (0, h.useRef)(null),
            [k, j] = (0, h.useState)(null),
            N = (0, h.useRef)(k);
          return (
            (0, h.useEffect)(() => {
              N.current = k;
            }, [k]),
            (0, h.useEffect)(() => {
              if (
                null != a &&
                b &&
                !b.isDestroyed &&
                !b.storage.image.uploadInProgress
              )
                try {
                  b.commands.setContent(a);
                  let e = N.current;
                  if (e) {
                    let t = b.state.doc.content.size,
                      r = Math.min(e.from, t - 1);
                    b.commands.setTextSelection(r);
                  }
                } catch (e) {
                  console.error(
                    'Error syncing editor content with external value:',
                    e
                  );
                }
            }, [b, a, t]),
            (0, h.useImperativeHandle)(
              d,
              () => ({
                clearEditor: () => {
                  var e;
                  null == (e = w.current) || e.commands.clearContent();
                },
                setEditorValue: e => {
                  var t;
                  null == (t = w.current) || t.commands.setContent(e);
                },
                setEditorValueAtCursorPosition: e => {
                  k && rB(w, e, k);
                },
                executeMenuItemCommand: t => {
                  let r = ng(w.current, e).find(e => e.key === t);
                  r
                    ? 'image' === r.key
                      ? r.command(k)
                      : r.command()
                    : console.warn(`No command found for item: ${t}`);
                },
                isMenuItemActive: t => {
                  let r = ng(w.current, e).find(e => e.key === t);
                  return !!r && r.isActive();
                },
                onStateChange: e => {
                  var t;
                  return (
                    null == (t = w.current) ||
                      t.on('transaction', () => {
                        e();
                      }),
                    () => {
                      var e;
                      null == (e = w.current) || e.off('transaction');
                    }
                  );
                },
                getMarkDown: () => {
                  var e;
                  return null == (e = w.current)
                    ? void 0
                    : e.storage.markdown.getMarkdown();
                },
                scrollSummary: e => {
                  w.current && nx(w.current, e);
                },
                setFocusAtPosition: e => {
                  if (!w.current || w.current.isDestroyed) {
                    console.error(
                      'Editor reference is not available or has been destroyed.'
                    );
                    return;
                  }
                  try {
                    let t = w.current.state.doc.content.size;
                    w.current
                      .chain()
                      .insertContentAt(Math.max(0, Math.min(e, t)), [
                        { type: 'paragraph' },
                      ])
                      .focus()
                      .run();
                  } catch (e) {
                    console.error(
                      'An error occurred while setting focus at position:',
                      e
                    );
                  }
                },
              }),
              [w, k, e]
            ),
            b ? ((w.current = b), b) : null
          );
        },
        nv = k.ZP.extend({
          addAttributes() {
            var e;
            return ec(
              el({}, null == (e = this.parent) ? void 0 : e.call(this)),
              { width: { default: '35%' }, height: { default: null } }
            );
          },
        }),
        nb = e => [
          b.Z.configure({
            bulletList: {
              HTMLAttributes: { class: 'list-disc pl-7 space-y-2' },
            },
            orderedList: {
              HTMLAttributes: { class: 'list-decimal pl-7 space-y-2' },
            },
            listItem: { HTMLAttributes: { class: 'not-prose space-y-2' } },
            code: !1,
            codeBlock: !1,
            horizontalRule: !1,
            blockquote: !1,
            dropcursor: !1,
            gapcursor: !1,
          }),
          tg,
          tH.configure({
            HTMLAttributes: { class: 'my-4 border-custom-border-400' },
          }),
          tx.configure({
            openOnClick: !0,
            autolink: !0,
            linkOnPaste: !0,
            protocols: ['http', 'https'],
            validate: e => ex(e),
            HTMLAttributes: {
              class:
                'text-custom-primary-300 underline underline-offset-[3px] hover:text-custom-primary-500 transition-colors cursor-pointer',
            },
          }),
          tB,
          nv.configure({ HTMLAttributes: { class: 'rounded-md' } }),
          y.Z,
          x.Z,
          g.Z.configure({
            HTMLAttributes: { class: 'not-prose pl-2 space-y-2' },
          }),
          f.ZP.configure({
            HTMLAttributes: { class: 'relative pointer-events-none' },
            nested: !0,
          }),
          e9.configure({ HTMLAttributes: { class: '' } }),
          tb,
          w.U.configure({ html: !0, transformCopiedText: !0 }),
          eO,
          eB,
          eD,
          eH,
          e1({ mentionHighlights: e.mentionHighlights, readonly: !0 }),
        ],
        nw = e => ({
          attributes: {
            class: em(
              'prose prose-brand max-w-full prose-headings:font-display font-default focus:outline-none',
              e
            ),
          },
        }),
        nk = ({
          initialValue: e,
          editorClassName: t,
          forwardedRef: r,
          extensions: n = [],
          editorProps: s = {},
          handleEditorReady: o,
          mentionHandler: i,
        }) => {
          let a = (0, p.jE)({
            editable: !1,
            content: 'string' == typeof e && '' !== e.trim() ? e : '<p></p>',
            editorProps: el(el({}, nw(t)), s),
            onCreate: () =>
              ed(void 0, null, function* () {
                null == o || o(!0);
              }),
            extensions: [...nb({ mentionHighlights: i.highlights }), ...n],
            onDestroy: () => {
              null == o || o(!1);
            },
          });
          (0, h.useEffect)(() => {
            null != e &&
              a &&
              !a.isDestroyed &&
              (null == a || a.commands.setContent(e));
          }, [a, e]);
          let l = (0, h.useRef)(null);
          return (
            (0, h.useImperativeHandle)(r, () => ({
              clearEditor: () => {
                var e;
                null == (e = l.current) || e.commands.clearContent();
              },
              setEditorValue: e => {
                var t;
                null == (t = l.current) || t.commands.setContent(e);
              },
              getMarkDown: () => {
                var e;
                return null == (e = l.current)
                  ? void 0
                  : e.storage.markdown.getMarkdown();
              },
              scrollSummary: e => {
                l.current && nx(l.current, e);
              },
            })),
            a ? ((l.current = a), a) : null
          );
        };
    },
    75004: function (e, t, r) {
      r.d(t, {
        l: function () {
          return z;
        },
        v: function () {
          return B;
        },
      });
      var n = r(54848),
        s = r(82789),
        o = r(2396),
        i = r(15463),
        a = r(27378),
        l = r(53347),
        c = r(59190),
        d = r(22773),
        u = r(63399),
        p = r(74129),
        h = r(55883),
        m = r(47519),
        f = r(30747),
        g = r(58645),
        x = r(16867),
        y = r(20962),
        v = r(38006),
        b = r(37542),
        w = r(20339),
        k = r(54825),
        j = r(18469),
        N = r(24246),
        C = Object.defineProperty,
        S = Object.getOwnPropertySymbols,
        E = Object.prototype.hasOwnProperty,
        T = Object.prototype.propertyIsEnumerable,
        A = (e, t, r) =>
          t in e
            ? C(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        O = (e, t) => {
          for (var r in t || (t = {})) E.call(t, r) && A(e, r, t[r]);
          if (S) for (var r of S(t)) T.call(t, r) && A(e, r, t[r]);
          return e;
        };
      function R(e) {
        return document.elementsFromPoint(e.x, e.y).find(e => {
          var t, r;
          return (
            (null == (r = null == (t = e.parentElement) ? void 0 : t.matches)
              ? void 0
              : r.call(t, '.ProseMirror')) ||
            e.matches(
              'li, p:not(:first-child), .code-block, blockquote, h1, h2, h3, table, [data-type=horizontalRule]'
            )
          );
        });
      }
      function M(e, t, r) {
        var n;
        let s = e.getBoundingClientRect();
        return null ==
          (n = t.posAtCoords({
            left: s.left + 50 + r.dragHandleWidth,
            top: s.top + 1,
          }))
          ? void 0
          : n.inside;
      }
      function I(e, t) {
        let r = t.state.doc.content.size,
          n = Math.max(0, Math.min(e, r)),
          s = t.state.doc.resolve(n);
        return s.depth > 1 ? Math.max(0, Math.min(s.before(s.depth), r)) : n;
      }
      !(function (e, { insertAt: t } = {}) {
        if (!e || 'undefined' == typeof document) return;
        let r = document.head || document.getElementsByTagName('head')[0],
          n = document.createElement('style');
        (n.type = 'text/css'),
          'top' === t && r.firstChild
            ? r.insertBefore(n, r.firstChild)
            : r.appendChild(n),
          n.styleSheet
            ? (n.styleSheet.cssText = e)
            : n.appendChild(document.createTextNode(e));
      })(`.drag-handle{position:fixed;opacity:1;transition:opacity ease-in .2s;height:20px;width:15px;display:grid;place-items:center;z-index:5;cursor:grab;border-radius:2px;transition:background-color .2s;&:hover{background-color:rgba(var(--color-background-80))}&:active{background-color:rgba(var(--color-background-80));cursor:grabbing}&.hidden{opacity:0;pointer-events:none}}@media screen and (max-width: 600px){.drag-handle{display:none;pointer-events:none}}.drag-handle-container{height:15px;width:15px;display:grid;place-items:center}.drag-handle-dots{height:100%;width:12px;display:grid;grid-template-columns:repeat(2,1fr);place-items:center}.drag-handle-dot{height:2.5px;width:2.5px;background-color:rgba(var(--color-text-300));border-radius:50%}.ProseMirror:not(.dragging) .ProseMirror-selectednode{position:relative;cursor:grab;outline:none!important;box-shadow:none;--horizontal-offset: 5px;&:has(.issue-embed){--horizontal-offset: 0px}&:after{content:"";position:absolute;top:0;left:calc(-1 * var(--horizontal-offset));height:100%;width:calc(100% + (var(--horizontal-offset) * 2));background-color:rgba(var(--color-primary-100),.2);border-radius:4px;pointer-events:none}}.ProseMirror img{transition:filter .1s ease-in-out;cursor:pointer;&:hover{filter:brightness(90%)}&.ProseMirror-selectednode{filter:brightness(90%)}}:not(.dragging) .ProseMirror-selectednode.table-wrapper{padding:4px 2px;background-color:rgba(var(--color-primary-300),.1)!important;box-shadow:rgba(var(--color-primary-100)) 0 0 0 2px inset!important}
`);
      var z = e =>
          n.Extension.create({
            name: 'dragAndDrop',
            addProseMirrorPlugins: () => [
              (function (e) {
                var t;
                let r = '';
                function n(t, r) {
                  r.focus();
                  let n = R({
                    x: t.clientX + 50 + e.dragHandleWidth,
                    y: t.clientY,
                  });
                  if (!(n instanceof Element)) return;
                  if (n.matches('blockquote')) {
                    var o;
                    let e;
                    let t =
                      ((e = n.getBoundingClientRect()),
                      null ==
                      (o = r.posAtCoords({ left: e.left + 1, top: e.top + 1 }))
                        ? void 0
                        : o.inside);
                    if (null == t) return;
                    let i = r.state.doc.content.size;
                    if ((t = Math.max(0, Math.min(t, i))) >= 0 && t <= i) {
                      let e = s.qv.create(r.state.doc, t);
                      r.dispatch(r.state.tr.setSelection(e));
                    }
                    return;
                  }
                  let i = M(n, r, e);
                  if (null == i) return;
                  i = I(i, r);
                  let a = s.qv.create(r.state.doc, i);
                  r.dispatch(r.state.tr.setSelection(a));
                }
                let a = null;
                function l() {
                  a && a.classList.add('hidden');
                }
                return (
                  null == (t = e.setHideDragHandle) || t.call(e, l),
                  new s.Sy({
                    key: new s.H$('dragHandle'),
                    view: t => {
                      var o, c;
                      return (
                        (a = (function () {
                          let e = document.createElement('div');
                          (e.draggable = !0),
                            (e.dataset.dragHandle = ''),
                            e.classList.add('drag-handle');
                          let t = document.createElement('div');
                          t.classList.add('drag-handle-container'),
                            e.appendChild(t);
                          let r = document.createElement('div');
                          r.classList.add('drag-handle-dots');
                          for (let e = 0; e < 6; e++) {
                            let e = document.createElement('span');
                            e.classList.add('drag-handle-dot'),
                              r.appendChild(e);
                          }
                          return t.appendChild(r), e;
                        })()).addEventListener('dragstart', n => {
                          (function (t, n) {
                            if ((n.focus(), !t.dataTransfer)) return;
                            let o = R({
                              x: t.clientX + 50 + e.dragHandleWidth,
                              y: t.clientY,
                            });
                            if (!(o instanceof Element)) return;
                            let a = M(o, n, e);
                            if (null == a || a < 0) return;
                            a = I(a, n);
                            let { from: l, to: c } = n.state.selection,
                              d = l - c,
                              u = I(l, n),
                              p = !1,
                              h = n.state.doc.resolve(u);
                            if ('doc' === h.node().type.name) p = !0;
                            else {
                              let e = s.qv.create(n.state.doc, h.before());
                              p = !(a + 1 >= e.$from.pos && a <= e.$to.pos);
                            }
                            if (
                              p ||
                              0 === d ||
                              n.state.selection instanceof s.qv
                            ) {
                              let e = s.qv.create(n.state.doc, a);
                              n.dispatch(n.state.tr.setSelection(e));
                            } else {
                              let e = s.qv.create(n.state.doc, c - 1),
                                t = s.Bs.create(n.state.doc, a, e.$to.pos);
                              n.dispatch(n.state.tr.setSelection(t));
                            }
                            n.state.selection instanceof s.qv &&
                              'listItem' === n.state.selection.node.type.name &&
                              (r = o.parentElement.tagName);
                            let m = n.state.selection.content(),
                              { dom: f, text: g } = (0, i.aV)(n, m);
                            t.dataTransfer.clearData(),
                              t.dataTransfer.setData('text/html', f.innerHTML),
                              t.dataTransfer.setData('text/plain', g),
                              (t.dataTransfer.effectAllowed = 'copyMove'),
                              t.dataTransfer.setDragImage(o, 0, 0),
                              (n.dragging = { slice: m, move: t.ctrlKey });
                          })(n, t);
                        }),
                        a.addEventListener('click', e => {
                          n(e, t);
                        }),
                        a.addEventListener('contextmenu', e => {
                          n(e, t);
                        }),
                        a.addEventListener('drag', t => {
                          l();
                          let r = document.querySelector('.frame-renderer');
                          r &&
                            (t.clientY < e.scrollThreshold.up
                              ? r.scrollBy({ top: -70, behavior: 'smooth' })
                              : window.innerHeight - t.clientY <
                                  e.scrollThreshold.down &&
                                r.scrollBy({ top: 70, behavior: 'smooth' }));
                        }),
                        l(),
                        null ==
                          (c =
                            null == (o = null == t ? void 0 : t.dom)
                              ? void 0
                              : o.parentElement) || c.appendChild(a),
                        {
                          destroy: () => {
                            var e;
                            null == (e = null == a ? void 0 : a.remove) ||
                              e.call(a),
                              (a = null);
                          },
                        }
                      );
                    },
                    props: {
                      handleDOMEvents: {
                        mousemove: (t, r) => {
                          let n;
                          if (!t.editable) return;
                          let s = R({
                            x: r.clientX + 50 + e.dragHandleWidth,
                            y: r.clientY,
                          });
                          if (!(s instanceof Element) || s.matches('ul, ol')) {
                            l();
                            return;
                          }
                          let o = window.getComputedStyle(s),
                            i = parseInt(o.lineHeight, 10),
                            c = parseInt(o.paddingTop, 10),
                            d = {
                              top: (n = s.getBoundingClientRect()).top,
                              left: n.left,
                              width: n.width,
                            };
                          (d.top += (i - 20) / 2),
                            (d.top += c),
                            s.matches(
                              'ul:not([data-type=taskList]) li, ol li'
                            ) && ((d.top += 4), (d.left -= 18)),
                            (d.width = e.dragHandleWidth),
                            a &&
                              ((a.style.left = `${d.left - d.width}px`),
                              (a.style.top = `${d.top}px`),
                              a && a.classList.remove('hidden'));
                        },
                        keydown: () => {
                          l();
                        },
                        mousewheel: () => {
                          l();
                        },
                        dragenter: e => {
                          e.dom.classList.add('dragging'), l();
                        },
                        drop: (e, t) => {
                          var n, i, a;
                          e.dom.classList.remove('dragging'), l();
                          let c = null,
                            d = e.posAtCoords({
                              left: t.clientX,
                              top: t.clientY,
                            });
                          if (
                            !d ||
                            (e.state.selection instanceof s.qv &&
                              (c = e.state.selection.node),
                            !c)
                          )
                            return;
                          let u = e.state.doc.resolve(d.pos),
                            p = !1;
                          for (let e = u.depth; e > 0; e--)
                            if ('listItem' === u.node(e).type.name) {
                              p = !0;
                              break;
                            }
                          if (
                            e.state.selection instanceof s.qv &&
                            'listItem' === e.state.selection.node.type.name &&
                            !p &&
                            'OL' == r
                          ) {
                            let r = c.textContent;
                            if (!r) return;
                            let s =
                                null == (n = e.state.schema.nodes.paragraph)
                                  ? void 0
                                  : n.createAndFill({}, e.state.schema.text(r)),
                              l =
                                null == (i = e.state.schema.nodes.listItem)
                                  ? void 0
                                  : i.createAndFill({}, s),
                              d =
                                null == (a = e.state.schema.nodes.orderedList)
                                  ? void 0
                                  : a.createAndFill(null, l),
                              u = new o.p2(o.HY.from(d), 0, 0);
                            e.dragging = { slice: u, move: t.ctrlKey };
                          }
                        },
                        dragend: e => {
                          e.dom.classList.remove('dragging');
                        },
                      },
                    },
                  })
                );
              })({
                dragHandleWidth: 24,
                scrollThreshold: { up: 300, down: 100 },
                setHideDragHandle: e,
              }),
            ],
          }),
        _ = n.Extension.create({
          name: 'slash-command',
          addOptions: () => ({
            suggestion: {
              char: '/',
              command: ({ editor: e, range: t, props: r }) => {
                r.command({ editor: e, range: t });
              },
              allow({ editor: e }) {
                let { selection: t } = e.state;
                return !(
                  'codeBlock' === t.$from.node(t.$from.depth).type.name ||
                  e.isActive('table')
                );
              },
              allowSpaces: !0,
            },
          }),
          addProseMirrorPlugins() {
            return [
              (0, l.ZP)(O({ editor: this.editor }, this.options.suggestion)),
            ];
          },
        }),
        L =
          (e, t) =>
          ({ query: r }) => {
            let n = [
              {
                key: 'text',
                title: 'Text',
                description: 'Just start typing with plain text.',
                searchTerms: ['p', 'paragraph'],
                icon: (0, N.jsx)(u.Z, { className: 'h-3.5 w-3.5' }),
                command: ({ editor: e, range: t }) => {
                  t && e.chain().focus().deleteRange(t).clearNodes().run(),
                    e.chain().focus().clearNodes().run();
                },
              },
              {
                key: 'heading_1',
                title: 'Heading 1',
                description: 'Big section heading.',
                searchTerms: ['title', 'big', 'large'],
                icon: (0, N.jsx)(p.Z, { className: 'h-3.5 w-3.5' }),
                command: ({ editor: e, range: t }) => {
                  (0, j.D7)(e, t);
                },
              },
              {
                key: 'heading_2',
                title: 'Heading 2',
                description: 'Medium section heading.',
                searchTerms: ['subtitle', 'medium'],
                icon: (0, N.jsx)(h.Z, { className: 'h-3.5 w-3.5' }),
                command: ({ editor: e, range: t }) => {
                  (0, j.KD)(e, t);
                },
              },
              {
                key: 'heading_3',
                title: 'Heading 3',
                description: 'Small section heading.',
                searchTerms: ['subtitle', 'small'],
                icon: (0, N.jsx)(m.Z, { className: 'h-3.5 w-3.5' }),
                command: ({ editor: e, range: t }) => {
                  (0, j.xn)(e, t);
                },
              },
              {
                key: 'todo_list',
                title: 'To do',
                description: 'Track tasks with a to-do list.',
                searchTerms: ['todo', 'task', 'list', 'check', 'checkbox'],
                icon: (0, N.jsx)(f.Z, { className: 'h-3.5 w-3.5' }),
                command: ({ editor: e, range: t }) => {
                  (0, j.$p)(e, t);
                },
              },
              {
                key: 'bullet_list',
                title: 'Bullet list',
                description: 'Create a simple bullet list.',
                searchTerms: ['unordered', 'point'],
                icon: (0, N.jsx)(g.Z, { className: 'h-3.5 w-3.5' }),
                command: ({ editor: e, range: t }) => {
                  (0, j._X)(e, t);
                },
              },
              {
                key: 'numbered_list',
                title: 'Numbered list',
                description: 'Create a list with numbering.',
                searchTerms: ['ordered'],
                icon: (0, N.jsx)(x.Z, { className: 'h-3.5 w-3.5' }),
                command: ({ editor: e, range: t }) => {
                  (0, j.JL)(e, t);
                },
              },
              {
                key: 'table',
                title: 'Table',
                description: 'Create a table',
                searchTerms: ['table', 'cell', 'db', 'data', 'tabular'],
                icon: (0, N.jsx)(y.Z, { className: 'h-3.5 w-3.5' }),
                command: ({ editor: e, range: t }) => {
                  (0, j.Jp)(e, t);
                },
              },
              {
                key: 'quote_block',
                title: 'Quote',
                description: 'Capture a quote.',
                searchTerms: ['blockquote'],
                icon: (0, N.jsx)(v.Z, { className: 'h-3.5 w-3.5' }),
                command: ({ editor: e, range: t }) => (0, j._6)(e, t),
              },
              {
                key: 'code_block',
                title: 'Code',
                description: 'Capture a code snippet.',
                searchTerms: ['codeblock'],
                icon: (0, N.jsx)(b.Z, { className: 'h-3.5 w-3.5' }),
                command: ({ editor: e, range: t }) =>
                  e.chain().focus().deleteRange(t).toggleCodeBlock().run(),
              },
              {
                key: 'image',
                title: 'Image',
                description: 'Upload an image from your computer.',
                searchTerms: ['img', 'photo', 'picture', 'media'],
                icon: (0, N.jsx)(w.Z, { className: 'h-3.5 w-3.5' }),
                command: ({ editor: t, range: r }) => {
                  (0, j.jB)(t, e, null, r);
                },
              },
              {
                key: 'divider',
                title: 'Divider',
                description: 'Visually divide blocks.',
                searchTerms: [
                  'line',
                  'divider',
                  'horizontal',
                  'rule',
                  'separate',
                ],
                icon: (0, N.jsx)(k.Z, { className: 'h-3.5 w-3.5' }),
                command: ({ editor: e, range: t }) => {
                  e.chain().focus().deleteRange(t).setHorizontalRule().run();
                },
              },
            ];
            return (
              t &&
                t.map(e => {
                  n.push(e);
                }),
              (n = n.filter(e => {
                if ('string' == typeof r && r.length > 0) {
                  let t = r.toLowerCase();
                  return (
                    e.title.toLowerCase().includes(t) ||
                    e.description.toLowerCase().includes(t) ||
                    (e.searchTerms && e.searchTerms.some(e => e.includes(t)))
                  );
                }
                return !0;
              }))
            );
          },
        P = (e, t) => {
          let r = e.offsetHeight,
            n = t ? t.offsetHeight : 0,
            s = t.offsetTop,
            o = s + n;
          s < e.scrollTop
            ? (e.scrollTop -= e.scrollTop - s + 5)
            : o > r + e.scrollTop && (e.scrollTop += o - r - e.scrollTop + 5);
        },
        F = ({ items: e, command: t }) => {
          let [r, n] = (0, a.useState)(0),
            s = (0, a.useRef)(null),
            o = (0, a.useCallback)(
              r => {
                let n = e[r];
                n && t(n);
              },
              [t, e]
            );
          return (
            (0, a.useEffect)(() => {
              let t = ['ArrowUp', 'ArrowDown', 'Enter'],
                s = s => {
                  if (t.includes(s.key))
                    return (
                      s.preventDefault(),
                      'ArrowUp' === s.key
                        ? (n((r + e.length - 1) % e.length), !0)
                        : 'ArrowDown' === s.key
                          ? (n((r + 1) % e.length), !0)
                          : 'Enter' === s.key && (o(r), !0)
                    );
                };
              return (
                document.addEventListener('keydown', s),
                () => {
                  document.removeEventListener('keydown', s);
                }
              );
            }, [e, r, n, o]),
            (0, a.useEffect)(() => {
              n(0);
            }, [e]),
            (0, a.useLayoutEffect)(() => {
              let e = null == s ? void 0 : s.current,
                t = null == e ? void 0 : e.children[r];
              t && e && P(e, t);
            }, [r]),
            e.length <= 0
              ? null
              : (0, N.jsx)('div', {
                  id: 'slash-command',
                  ref: s,
                  className:
                    'z-10 max-h-80 min-w-[12rem] overflow-y-auto rounded-md border-[0.5px] border-custom-border-300 bg-custom-background-100 px-2 py-2.5 shadow-custom-shadow-rg',
                  children: e.map((e, t) =>
                    (0, N.jsxs)(
                      'button',
                      {
                        className: (0, j.cn)(
                          'flex items-center gap-2 w-full rounded px-1 py-1.5 text-sm text-left truncate text-custom-text-200 hover:bg-custom-background-80',
                          { 'bg-custom-background-80': t === r }
                        ),
                        onClick: () => o(t),
                        children: [
                          (0, N.jsx)('span', {
                            className: 'grid place-items-center flex-shrink-0',
                            children: e.icon,
                          }),
                          (0, N.jsx)('p', {
                            className: 'flex-grow truncate',
                            children: e.title,
                          }),
                        ],
                      },
                      e.key
                    )
                  ),
                })
          );
        },
        D = () => {
          let e = null,
            t = null;
          return {
            onStart: r => {
              var n;
              e = new c.M_(F, { props: r, editor: r.editor });
              let s =
                null != (n = document.querySelector('.active-editor'))
                  ? n
                  : document.querySelector('#editor-container');
              t = (0, d.ZP)('body', {
                getReferenceClientRect: r.clientRect,
                appendTo: s,
                content: e.element,
                showOnCreate: !0,
                interactive: !0,
                trigger: 'manual',
                placement: 'bottom-start',
              });
            },
            onUpdate: r => {
              null == e || e.updateProps(r),
                t && t[0].setProps({ getReferenceClientRect: r.clientRect });
            },
            onKeyDown: r => {
              var n;
              return 'Escape' === r.event.key
                ? (null == t || t[0].hide(), !0)
                : !!(
                    null != (n = null == e ? void 0 : e.ref) && n.onKeyDown(r)
                  );
            },
            onExit: () => {
              null == t || t[0].destroy(), null == e || e.destroy();
            },
          };
        },
        B = (e, t) =>
          _.configure({ suggestion: { items: L(e, t), render: D } });
    },
    27718: function (e, t, r) {
      r.d(t, {
        Jo: function () {
          return rR;
        },
        fg: function () {
          return rI;
        },
      });
      var n,
        s,
        o,
        i,
        a,
        l,
        c = r(18469),
        d = r(27378),
        u = r(75004),
        p = r(54848),
        h = r(31542),
        m = r(65709),
        f = r(1759),
        g = r(24246),
        x = r(97779),
        y = Object.defineProperty,
        v = Object.defineProperties,
        b = Object.getOwnPropertyDescriptor,
        w = Object.getOwnPropertyDescriptors,
        k = Object.getOwnPropertyNames,
        j = Object.getOwnPropertySymbols,
        N = Object.prototype.hasOwnProperty,
        C = Object.prototype.propertyIsEnumerable,
        S = (e, t, r) =>
          t in e
            ? y(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        E = (e, t) => {
          for (var r in t || (t = {})) N.call(t, r) && S(e, r, t[r]);
          if (j) for (var r of j(t)) C.call(t, r) && S(e, r, t[r]);
          return e;
        },
        T = (e, t) => v(e, w(t)),
        A = (e, t) => {
          var r = {};
          for (var n in e) N.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
          if (null != e && j)
            for (var n of j(e))
              0 > t.indexOf(n) && C.call(e, n) && (r[n] = e[n]);
          return r;
        },
        O = (e, t, r, n) => {
          if ((t && 'object' == typeof t) || 'function' == typeof t)
            for (let s of k(t))
              N.call(e, s) ||
                s === r ||
                y(e, s, {
                  get: () => t[s],
                  enumerable: !(n = b(t, s)) || n.enumerable,
                });
          return e;
        },
        R = ({ uploadFile: e, dragDropEnabled: t, setHideDragHandle: r }) => [
          (0, u.v)(e),
          !0 === t && (0, u.l)(r),
        ],
        M = {};
      ((e, t) => {
        for (var r in t) y(e, r, { get: t[r], enumerable: !0 });
      })(M, {
        BubbleMenu: () => ry,
        Editor: () => rp,
        EditorConsumer: () => rf,
        EditorContent: () => ru,
        EditorContext: () => rm,
        EditorProvider: () => rx,
        FloatingMenu: () => rv,
        NodeViewContent: () => rk,
        NodeViewWrapper: () => rj,
        PureEditorContent: () => rd,
        ReactNodeViewRenderer: () => rS,
        ReactRenderer: () => rN,
        useCurrentEditor: () => rg,
        useEditor: () => rh,
      });
      var I = class e {
        constructor(e, t) {
          if (((this.content = e), (this.size = t || 0), null == t))
            for (let t = 0; t < e.length; t++) this.size += e[t].nodeSize;
        }
        nodesBetween(e, t, r, n = 0, s) {
          for (let o = 0, i = 0; i < t; o++) {
            let a = this.content[o],
              l = i + a.nodeSize;
            if (l > e && !1 !== r(a, n + i, s || null, o) && a.content.size) {
              let s = i + 1;
              a.nodesBetween(
                Math.max(0, e - s),
                Math.min(a.content.size, t - s),
                r,
                n + s
              );
            }
            i = l;
          }
        }
        descendants(e) {
          this.nodesBetween(0, this.size, e);
        }
        textBetween(e, t, r, n) {
          let s = '',
            o = !0;
          return (
            this.nodesBetween(
              e,
              t,
              (i, a) => {
                let l = i.isText
                  ? i.text.slice(Math.max(e, a) - a, t - a)
                  : i.isLeaf
                    ? n
                      ? 'function' == typeof n
                        ? n(i)
                        : n
                      : i.type.spec.leafText
                        ? i.type.spec.leafText(i)
                        : ''
                    : '';
                i.isBlock &&
                  ((i.isLeaf && l) || i.isTextblock) &&
                  r &&
                  (o ? (o = !1) : (s += r)),
                  (s += l);
              },
              0
            ),
            s
          );
        }
        append(t) {
          if (!t.size) return this;
          if (!this.size) return t;
          let r = this.lastChild,
            n = t.firstChild,
            s = this.content.slice(),
            o = 0;
          for (
            r.isText &&
            r.sameMarkup(n) &&
            ((s[s.length - 1] = r.withText(r.text + n.text)), (o = 1));
            o < t.content.length;
            o++
          )
            s.push(t.content[o]);
          return new e(s, this.size + t.size);
        }
        cut(t, r = this.size) {
          if (0 == t && r == this.size) return this;
          let n = [],
            s = 0;
          if (r > t)
            for (let e = 0, o = 0; o < r; e++) {
              let i = this.content[e],
                a = o + i.nodeSize;
              a > t &&
                ((o < t || a > r) &&
                  (i = i.isText
                    ? i.cut(Math.max(0, t - o), Math.min(i.text.length, r - o))
                    : i.cut(
                        Math.max(0, t - o - 1),
                        Math.min(i.content.size, r - o - 1)
                      )),
                n.push(i),
                (s += i.nodeSize)),
                (o = a);
            }
          return new e(n, s);
        }
        cutByIndex(t, r) {
          return t == r
            ? e.empty
            : 0 == t && r == this.content.length
              ? this
              : new e(this.content.slice(t, r));
        }
        replaceChild(t, r) {
          let n = this.content[t];
          if (n == r) return this;
          let s = this.content.slice(),
            o = this.size + r.nodeSize - n.nodeSize;
          return (s[t] = r), new e(s, o);
        }
        addToStart(t) {
          return new e([t].concat(this.content), this.size + t.nodeSize);
        }
        addToEnd(t) {
          return new e(this.content.concat(t), this.size + t.nodeSize);
        }
        eq(e) {
          if (this.content.length != e.content.length) return !1;
          for (let t = 0; t < this.content.length; t++)
            if (!this.content[t].eq(e.content[t])) return !1;
          return !0;
        }
        get firstChild() {
          return this.content.length ? this.content[0] : null;
        }
        get lastChild() {
          return this.content.length
            ? this.content[this.content.length - 1]
            : null;
        }
        get childCount() {
          return this.content.length;
        }
        child(e) {
          let t = this.content[e];
          if (!t) throw RangeError('Index ' + e + ' out of range for ' + this);
          return t;
        }
        maybeChild(e) {
          return this.content[e] || null;
        }
        forEach(e) {
          for (let t = 0, r = 0; t < this.content.length; t++) {
            let n = this.content[t];
            e(n, r, t), (r += n.nodeSize);
          }
        }
        findDiffStart(e, t = 0) {
          return (function e(t, r, n) {
            for (let s = 0; ; s++) {
              if (s == t.childCount || s == r.childCount)
                return t.childCount == r.childCount ? null : n;
              let o = t.child(s),
                i = r.child(s);
              if (o == i) {
                n += o.nodeSize;
                continue;
              }
              if (!o.sameMarkup(i)) return n;
              if (o.isText && o.text != i.text) {
                for (let e = 0; o.text[e] == i.text[e]; e++) n++;
                return n;
              }
              if (o.content.size || i.content.size) {
                let t = e(o.content, i.content, n + 1);
                if (null != t) return t;
              }
              n += o.nodeSize;
            }
          })(this, e, t);
        }
        findDiffEnd(e, t = this.size, r = e.size) {
          return (function e(t, r, n, s) {
            for (let o = t.childCount, i = r.childCount; ; ) {
              if (0 == o || 0 == i) return o == i ? null : { a: n, b: s };
              let a = t.child(--o),
                l = r.child(--i),
                c = a.nodeSize;
              if (a == l) {
                (n -= c), (s -= c);
                continue;
              }
              if (!a.sameMarkup(l)) return { a: n, b: s };
              if (a.isText && a.text != l.text) {
                let e = 0,
                  t = Math.min(a.text.length, l.text.length);
                for (
                  ;
                  e < t &&
                  a.text[a.text.length - e - 1] ==
                    l.text[l.text.length - e - 1];

                )
                  e++, n--, s--;
                return { a: n, b: s };
              }
              if (a.content.size || l.content.size) {
                let t = e(a.content, l.content, n - 1, s - 1);
                if (t) return t;
              }
              (n -= c), (s -= c);
            }
          })(this, e, t, r);
        }
        findIndex(e, t = -1) {
          if (0 == e) return _(0, e);
          if (e == this.size) return _(this.content.length, e);
          if (e > this.size || e < 0)
            throw RangeError(`Position ${e} outside of fragment (${this})`);
          for (let r = 0, n = 0; ; r++) {
            let s = n + this.child(r).nodeSize;
            if (s >= e) return s == e || t > 0 ? _(r + 1, s) : _(r, n);
            n = s;
          }
        }
        toString() {
          return '<' + this.toStringInner() + '>';
        }
        toStringInner() {
          return this.content.join(', ');
        }
        toJSON() {
          return this.content.length ? this.content.map(e => e.toJSON()) : null;
        }
        static fromJSON(t, r) {
          if (!r) return e.empty;
          if (!Array.isArray(r))
            throw RangeError('Invalid input for Fragment.fromJSON');
          return new e(r.map(t.nodeFromJSON));
        }
        static fromArray(t) {
          if (!t.length) return e.empty;
          let r,
            n = 0;
          for (let e = 0; e < t.length; e++) {
            let s = t[e];
            (n += s.nodeSize),
              e && s.isText && t[e - 1].sameMarkup(s)
                ? (r || (r = t.slice(0, e)),
                  (r[r.length - 1] = s.withText(r[r.length - 1].text + s.text)))
                : r && r.push(s);
          }
          return new e(r || t, n);
        }
        static from(t) {
          if (!t) return e.empty;
          if (t instanceof e) return t;
          if (Array.isArray(t)) return this.fromArray(t);
          if (t.attrs) return new e([t], t.nodeSize);
          throw RangeError(
            'Can not convert ' +
              t +
              ' to a Fragment' +
              (t.nodesBetween
                ? ' (looks like multiple versions of prosemirror-model were loaded)'
                : '')
          );
        }
      };
      I.empty = new I([], 0);
      var z = { index: 0, offset: 0 };
      function _(e, t) {
        return (z.index = e), (z.offset = t), z;
      }
      function L(e, t) {
        if (e === t) return !0;
        if (!(e && 'object' == typeof e) || !(t && 'object' == typeof t))
          return !1;
        let r = Array.isArray(e);
        if (Array.isArray(t) != r) return !1;
        if (r) {
          if (e.length != t.length) return !1;
          for (let r = 0; r < e.length; r++) if (!L(e[r], t[r])) return !1;
        } else {
          for (let r in e) if (!(r in t) || !L(e[r], t[r])) return !1;
          for (let r in t) if (!(r in e)) return !1;
        }
        return !0;
      }
      var P = class e {
        constructor(e, t) {
          (this.type = e), (this.attrs = t);
        }
        addToSet(e) {
          let t,
            r = !1;
          for (let n = 0; n < e.length; n++) {
            let s = e[n];
            if (this.eq(s)) return e;
            if (this.type.excludes(s.type)) t || (t = e.slice(0, n));
            else {
              if (s.type.excludes(this.type)) return e;
              !r &&
                s.type.rank > this.type.rank &&
                (t || (t = e.slice(0, n)), t.push(this), (r = !0)),
                t && t.push(s);
            }
          }
          return t || (t = e.slice()), r || t.push(this), t;
        }
        removeFromSet(e) {
          for (let t = 0; t < e.length; t++)
            if (this.eq(e[t])) return e.slice(0, t).concat(e.slice(t + 1));
          return e;
        }
        isInSet(e) {
          for (let t = 0; t < e.length; t++) if (this.eq(e[t])) return !0;
          return !1;
        }
        eq(e) {
          return this == e || (this.type == e.type && L(this.attrs, e.attrs));
        }
        toJSON() {
          let e = { type: this.type.name };
          for (let t in this.attrs) {
            e.attrs = this.attrs;
            break;
          }
          return e;
        }
        static fromJSON(e, t) {
          if (!t) throw RangeError('Invalid input for Mark.fromJSON');
          let r = e.marks[t.type];
          if (!r)
            throw RangeError(`There is no mark type ${t.type} in this schema`);
          return r.create(t.attrs);
        }
        static sameSet(e, t) {
          if (e == t) return !0;
          if (e.length != t.length) return !1;
          for (let r = 0; r < e.length; r++) if (!e[r].eq(t[r])) return !1;
          return !0;
        }
        static setFrom(t) {
          if (!t || (Array.isArray(t) && 0 == t.length)) return e.none;
          if (t instanceof e) return [t];
          let r = t.slice();
          return r.sort((e, t) => e.type.rank - t.type.rank), r;
        }
      };
      P.none = [];
      var F = class extends Error {},
        D = class e {
          constructor(e, t, r) {
            (this.content = e), (this.openStart = t), (this.openEnd = r);
          }
          get size() {
            return this.content.size - this.openStart - this.openEnd;
          }
          insertAt(t, r) {
            let n = (function e(t, r, n, s) {
              let { index: o, offset: i } = t.findIndex(r),
                a = t.maybeChild(o);
              if (i == r || a.isText)
                return s && !s.canReplace(o, o, n)
                  ? null
                  : t.cut(0, r).append(n).append(t.cut(r));
              let l = e(a.content, r - i - 1, n);
              return l && t.replaceChild(o, a.copy(l));
            })(this.content, t + this.openStart, r);
            return n && new e(n, this.openStart, this.openEnd);
          }
          removeBetween(t, r) {
            return new e(
              (function e(t, r, n) {
                let { index: s, offset: o } = t.findIndex(r),
                  i = t.maybeChild(s),
                  { index: a, offset: l } = t.findIndex(n);
                if (o == r || i.isText) {
                  if (l != n && !t.child(a).isText)
                    throw RangeError('Removing non-flat range');
                  return t.cut(0, r).append(t.cut(n));
                }
                if (s != a) throw RangeError('Removing non-flat range');
                return t.replaceChild(
                  s,
                  i.copy(e(i.content, r - o - 1, n - o - 1))
                );
              })(this.content, t + this.openStart, r + this.openStart),
              this.openStart,
              this.openEnd
            );
          }
          eq(e) {
            return (
              this.content.eq(e.content) &&
              this.openStart == e.openStart &&
              this.openEnd == e.openEnd
            );
          }
          toString() {
            return (
              this.content + '(' + this.openStart + ',' + this.openEnd + ')'
            );
          }
          toJSON() {
            if (!this.content.size) return null;
            let e = { content: this.content.toJSON() };
            return (
              this.openStart > 0 && (e.openStart = this.openStart),
              this.openEnd > 0 && (e.openEnd = this.openEnd),
              e
            );
          }
          static fromJSON(t, r) {
            if (!r) return e.empty;
            let n = r.openStart || 0,
              s = r.openEnd || 0;
            if ('number' != typeof n || 'number' != typeof s)
              throw RangeError('Invalid input for Slice.fromJSON');
            return new e(I.fromJSON(t, r.content), n, s);
          }
          static maxOpen(t, r = !0) {
            let n = 0,
              s = 0;
            for (
              let e = t.firstChild;
              e && !e.isLeaf && (r || !e.type.spec.isolating);
              e = e.firstChild
            )
              n++;
            for (
              let e = t.lastChild;
              e && !e.isLeaf && (r || !e.type.spec.isolating);
              e = e.lastChild
            )
              s++;
            return new e(t, n, s);
          }
        };
      function B(e, t) {
        if (!t.type.compatibleContent(e.type))
          throw new F('Cannot join ' + t.type.name + ' onto ' + e.type.name);
      }
      function H(e, t, r) {
        let n = e.node(r);
        return B(n, t.node(r)), n;
      }
      function J(e, t) {
        let r = t.length - 1;
        r >= 0 && e.isText && e.sameMarkup(t[r])
          ? (t[r] = e.withText(t[r].text + e.text))
          : t.push(e);
      }
      function $(e, t, r, n) {
        let s = (t || e).node(r),
          o = 0,
          i = t ? t.index(r) : s.childCount;
        e &&
          ((o = e.index(r)),
          e.depth > r ? o++ : e.textOffset && (J(e.nodeAfter, n), o++));
        for (let e = o; e < i; e++) J(s.child(e), n);
        t && t.depth == r && t.textOffset && J(t.nodeBefore, n);
      }
      function q(e, t) {
        return e.type.checkContent(t), e.copy(t);
      }
      function U(e, t, r) {
        let n = [];
        return (
          $(null, e, r, n),
          e.depth > r && J(q(H(e, t, r + 1), U(e, t, r + 1)), n),
          $(t, null, r, n),
          new I(n)
        );
      }
      D.empty = new D(I.empty, 0, 0);
      var V = class e {
          constructor(e, t, r) {
            (this.pos = e),
              (this.path = t),
              (this.parentOffset = r),
              (this.depth = t.length / 3 - 1);
          }
          resolveDepth(e) {
            return null == e ? this.depth : e < 0 ? this.depth + e : e;
          }
          get parent() {
            return this.node(this.depth);
          }
          get doc() {
            return this.node(0);
          }
          node(e) {
            return this.path[3 * this.resolveDepth(e)];
          }
          index(e) {
            return this.path[3 * this.resolveDepth(e) + 1];
          }
          indexAfter(e) {
            return (
              (e = this.resolveDepth(e)),
              this.index(e) + (e != this.depth || this.textOffset ? 1 : 0)
            );
          }
          start(e) {
            return 0 == (e = this.resolveDepth(e))
              ? 0
              : this.path[3 * e - 1] + 1;
          }
          end(e) {
            return (
              (e = this.resolveDepth(e)),
              this.start(e) + this.node(e).content.size
            );
          }
          before(e) {
            if (!(e = this.resolveDepth(e)))
              throw RangeError(
                'There is no position before the top-level node'
              );
            return e == this.depth + 1 ? this.pos : this.path[3 * e - 1];
          }
          after(e) {
            if (!(e = this.resolveDepth(e)))
              throw RangeError('There is no position after the top-level node');
            return e == this.depth + 1
              ? this.pos
              : this.path[3 * e - 1] + this.path[3 * e].nodeSize;
          }
          get textOffset() {
            return this.pos - this.path[this.path.length - 1];
          }
          get nodeAfter() {
            let e = this.parent,
              t = this.index(this.depth);
            if (t == e.childCount) return null;
            let r = this.pos - this.path[this.path.length - 1],
              n = e.child(t);
            return r ? e.child(t).cut(r) : n;
          }
          get nodeBefore() {
            let e = this.index(this.depth),
              t = this.pos - this.path[this.path.length - 1];
            return t
              ? this.parent.child(e).cut(0, t)
              : 0 == e
                ? null
                : this.parent.child(e - 1);
          }
          posAtIndex(e, t) {
            t = this.resolveDepth(t);
            let r = this.path[3 * t],
              n = 0 == t ? 0 : this.path[3 * t - 1] + 1;
            for (let t = 0; t < e; t++) n += r.child(t).nodeSize;
            return n;
          }
          marks() {
            let e = this.parent,
              t = this.index();
            if (0 == e.content.size) return P.none;
            if (this.textOffset) return e.child(t).marks;
            let r = e.maybeChild(t - 1),
              n = e.maybeChild(t);
            if (!r) {
              let e = r;
              (r = n), (n = e);
            }
            let s = r.marks;
            for (var o = 0; o < s.length; o++)
              !1 !== s[o].type.spec.inclusive ||
                (n && s[o].isInSet(n.marks)) ||
                (s = s[o--].removeFromSet(s));
            return s;
          }
          marksAcross(e) {
            let t = this.parent.maybeChild(this.index());
            if (!t || !t.isInline) return null;
            let r = t.marks,
              n = e.parent.maybeChild(e.index());
            for (var s = 0; s < r.length; s++)
              !1 !== r[s].type.spec.inclusive ||
                (n && r[s].isInSet(n.marks)) ||
                (r = r[s--].removeFromSet(r));
            return r;
          }
          sharedDepth(e) {
            for (let t = this.depth; t > 0; t--)
              if (this.start(t) <= e && this.end(t) >= e) return t;
            return 0;
          }
          blockRange(e = this, t) {
            if (e.pos < this.pos) return e.blockRange(this);
            for (
              let r =
                this.depth -
                (this.parent.inlineContent || this.pos == e.pos ? 1 : 0);
              r >= 0;
              r--
            )
              if (e.pos <= this.end(r) && (!t || t(this.node(r))))
                return new K(this, e, r);
            return null;
          }
          sameParent(e) {
            return this.pos - this.parentOffset == e.pos - e.parentOffset;
          }
          max(e) {
            return e.pos > this.pos ? e : this;
          }
          min(e) {
            return e.pos < this.pos ? e : this;
          }
          toString() {
            let e = '';
            for (let t = 1; t <= this.depth; t++)
              e +=
                (e ? '/' : '') +
                this.node(t).type.name +
                '_' +
                this.index(t - 1);
            return e + ':' + this.parentOffset;
          }
          static resolve(t, r) {
            if (!(r >= 0 && r <= t.content.size))
              throw RangeError('Position ' + r + ' out of range');
            let n = [],
              s = 0,
              o = r;
            for (let e = t; ; ) {
              let { index: t, offset: r } = e.content.findIndex(o),
                i = o - r;
              if ((n.push(e, t, s + r), !i || (e = e.child(t)).isText)) break;
              (o = i - 1), (s += r + 1);
            }
            return new e(r, n, o);
          }
          static resolveCached(t, r) {
            for (let e = 0; e < Z.length; e++) {
              let n = Z[e];
              if (n.pos == r && n.doc == t) return n;
            }
            let n = (Z[W] = e.resolve(t, r));
            return (W = (W + 1) % Y), n;
          }
        },
        Z = [],
        W = 0,
        Y = 12,
        K = class {
          constructor(e, t, r) {
            (this.$from = e), (this.$to = t), (this.depth = r);
          }
          get start() {
            return this.$from.before(this.depth + 1);
          }
          get end() {
            return this.$to.after(this.depth + 1);
          }
          get parent() {
            return this.$from.node(this.depth);
          }
          get startIndex() {
            return this.$from.index(this.depth);
          }
          get endIndex() {
            return this.$to.indexAfter(this.depth);
          }
        },
        G = Object.create(null);
      (class e {
        constructor(e, t, r, n = P.none) {
          (this.type = e),
            (this.attrs = t),
            (this.marks = n),
            (this.content = r || I.empty);
        }
        get nodeSize() {
          return this.isLeaf ? 1 : 2 + this.content.size;
        }
        get childCount() {
          return this.content.childCount;
        }
        child(e) {
          return this.content.child(e);
        }
        maybeChild(e) {
          return this.content.maybeChild(e);
        }
        forEach(e) {
          this.content.forEach(e);
        }
        nodesBetween(e, t, r, n = 0) {
          this.content.nodesBetween(e, t, r, n, this);
        }
        descendants(e) {
          this.nodesBetween(0, this.content.size, e);
        }
        get textContent() {
          return this.isLeaf && this.type.spec.leafText
            ? this.type.spec.leafText(this)
            : this.textBetween(0, this.content.size, '');
        }
        textBetween(e, t, r, n) {
          return this.content.textBetween(e, t, r, n);
        }
        get firstChild() {
          return this.content.firstChild;
        }
        get lastChild() {
          return this.content.lastChild;
        }
        eq(e) {
          return (
            this == e || (this.sameMarkup(e) && this.content.eq(e.content))
          );
        }
        sameMarkup(e) {
          return this.hasMarkup(e.type, e.attrs, e.marks);
        }
        hasMarkup(e, t, r) {
          return (
            this.type == e &&
            L(this.attrs, t || e.defaultAttrs || G) &&
            P.sameSet(this.marks, r || P.none)
          );
        }
        copy(t = null) {
          return t == this.content
            ? this
            : new e(this.type, this.attrs, t, this.marks);
        }
        mark(t) {
          return t == this.marks
            ? this
            : new e(this.type, this.attrs, this.content, t);
        }
        cut(e, t = this.content.size) {
          return 0 == e && t == this.content.size
            ? this
            : this.copy(this.content.cut(e, t));
        }
        slice(e, t = this.content.size, r = !1) {
          if (e == t) return D.empty;
          let n = this.resolve(e),
            s = this.resolve(t),
            o = r ? 0 : n.sharedDepth(t),
            i = n.start(o);
          return new D(
            n.node(o).content.cut(n.pos - i, s.pos - i),
            n.depth - o,
            s.depth - o
          );
        }
        replace(e, t, r) {
          return (function (e, t, r) {
            if (r.openStart > e.depth)
              throw new F('Inserted content deeper than insertion position');
            if (e.depth - r.openStart != t.depth - r.openEnd)
              throw new F('Inconsistent open depths');
            return (function e(t, r, n, s) {
              let o = t.index(s),
                i = t.node(s);
              if (o == r.index(s) && s < t.depth - n.openStart) {
                let a = e(t, r, n, s + 1);
                return i.copy(i.content.replaceChild(o, a));
              }
              if (!n.content.size) return q(i, U(t, r, s));
              if (n.openStart || n.openEnd || t.depth != s || r.depth != s) {
                let { start: e, end: o } = (function (e, t) {
                  let r = t.depth - e.openStart,
                    n = t.node(r).copy(e.content);
                  for (let e = r - 1; e >= 0; e--)
                    n = t.node(e).copy(I.from(n));
                  return {
                    start: n.resolveNoCache(e.openStart + r),
                    end: n.resolveNoCache(n.content.size - e.openEnd - r),
                  };
                })(n, t);
                return q(
                  i,
                  (function e(t, r, n, s, o) {
                    let i = t.depth > o && H(t, r, o + 1),
                      a = s.depth > o && H(n, s, o + 1),
                      l = [];
                    return (
                      $(null, t, o, l),
                      i && a && r.index(o) == n.index(o)
                        ? (B(i, a), J(q(i, e(t, r, n, s, o + 1)), l))
                        : (i && J(q(i, U(t, r, o + 1)), l),
                          $(r, n, o, l),
                          a && J(q(a, U(n, s, o + 1)), l)),
                      $(s, null, o, l),
                      new I(l)
                    );
                  })(t, e, o, r, s)
                );
              }
              {
                let e = t.parent,
                  s = e.content;
                return q(
                  e,
                  s
                    .cut(0, t.parentOffset)
                    .append(n.content)
                    .append(s.cut(r.parentOffset))
                );
              }
            })(e, t, r, 0);
          })(this.resolve(e), this.resolve(t), r);
        }
        nodeAt(e) {
          for (let t = this; ; ) {
            let { index: r, offset: n } = t.content.findIndex(e);
            if (!(t = t.maybeChild(r))) return null;
            if (n == e || t.isText) return t;
            e -= n + 1;
          }
        }
        childAfter(e) {
          let { index: t, offset: r } = this.content.findIndex(e);
          return { node: this.content.maybeChild(t), index: t, offset: r };
        }
        childBefore(e) {
          if (0 == e) return { node: null, index: 0, offset: 0 };
          let { index: t, offset: r } = this.content.findIndex(e);
          if (r < e)
            return { node: this.content.child(t), index: t, offset: r };
          let n = this.content.child(t - 1);
          return { node: n, index: t - 1, offset: r - n.nodeSize };
        }
        resolve(e) {
          return V.resolveCached(this, e);
        }
        resolveNoCache(e) {
          return V.resolve(this, e);
        }
        rangeHasMark(e, t, r) {
          let n = !1;
          return (
            t > e &&
              this.nodesBetween(
                e,
                t,
                e => (r.isInSet(e.marks) && (n = !0), !n)
              ),
            n
          );
        }
        get isBlock() {
          return this.type.isBlock;
        }
        get isTextblock() {
          return this.type.isTextblock;
        }
        get inlineContent() {
          return this.type.inlineContent;
        }
        get isInline() {
          return this.type.isInline;
        }
        get isText() {
          return this.type.isText;
        }
        get isLeaf() {
          return this.type.isLeaf;
        }
        get isAtom() {
          return this.type.isAtom;
        }
        toString() {
          if (this.type.spec.toDebugString)
            return this.type.spec.toDebugString(this);
          let e = this.type.name;
          return (
            this.content.size &&
              (e += '(' + this.content.toStringInner() + ')'),
            (function (e, t) {
              for (let r = e.length - 1; r >= 0; r--)
                t = e[r].type.name + '(' + t + ')';
              return t;
            })(this.marks, e)
          );
        }
        contentMatchAt(e) {
          let t = this.type.contentMatch.matchFragment(this.content, 0, e);
          if (!t)
            throw Error('Called contentMatchAt on a node with invalid content');
          return t;
        }
        canReplace(e, t, r = I.empty, n = 0, s = r.childCount) {
          let o = this.contentMatchAt(e).matchFragment(r, n, s),
            i = o && o.matchFragment(this.content, t);
          if (!i || !i.validEnd) return !1;
          for (let e = n; e < s; e++)
            if (!this.type.allowsMarks(r.child(e).marks)) return !1;
          return !0;
        }
        canReplaceWith(e, t, r, n) {
          if (n && !this.type.allowsMarks(n)) return !1;
          let s = this.contentMatchAt(e).matchType(r),
            o = s && s.matchFragment(this.content, t);
          return !!o && o.validEnd;
        }
        canAppend(e) {
          return e.content.size
            ? this.canReplace(this.childCount, this.childCount, e.content)
            : this.type.compatibleContent(e.type);
        }
        check() {
          this.type.checkContent(this.content);
          let e = P.none;
          for (let t = 0; t < this.marks.length; t++)
            e = this.marks[t].addToSet(e);
          if (!P.sameSet(e, this.marks))
            throw RangeError(
              `Invalid collection of marks for node ${this.type.name}: ${this.marks.map(e => e.type.name)}`
            );
          this.content.forEach(e => e.check());
        }
        toJSON() {
          let e = { type: this.type.name };
          for (let t in this.attrs) {
            e.attrs = this.attrs;
            break;
          }
          return (
            this.content.size && (e.content = this.content.toJSON()),
            this.marks.length && (e.marks = this.marks.map(e => e.toJSON())),
            e
          );
        }
        static fromJSON(e, t) {
          if (!t) throw RangeError('Invalid input for Node.fromJSON');
          let r = null;
          if (t.marks) {
            if (!Array.isArray(t.marks))
              throw RangeError('Invalid mark data for Node.fromJSON');
            r = t.marks.map(e.markFromJSON);
          }
          if ('text' == t.type) {
            if ('string' != typeof t.text)
              throw RangeError('Invalid text node in JSON');
            return e.text(t.text, r);
          }
          let n = I.fromJSON(e, t.content);
          return e.nodeType(t.type).create(t.attrs, n, r);
        }
      }).prototype.text = void 0;
      var X = class e {
        constructor(e) {
          (this.validEnd = e), (this.next = []), (this.wrapCache = []);
        }
        static parse(t, r) {
          var n;
          let s,
            o = new Q(t, r);
          if (null == o.next) return e.empty;
          let i = (function e(t) {
            let r = [];
            do
              r.push(
                (function (t) {
                  let r = [];
                  do
                    r.push(
                      (function (t) {
                        let r = (function (t) {
                          if (t.eat('(')) {
                            let r = e(t);
                            return (
                              t.eat(')') || t.err('Missing closing paren'), r
                            );
                          }
                          if (/\W/.test(t.next))
                            t.err("Unexpected token '" + t.next + "'");
                          else {
                            let e = (function (e, t) {
                              let r = e.nodeTypes,
                                n = r[t];
                              if (n) return [n];
                              let s = [];
                              for (let e in r) {
                                let n = r[e];
                                n.groups.indexOf(t) > -1 && s.push(n);
                              }
                              return (
                                0 == s.length &&
                                  e.err(
                                    "No node type or group '" + t + "' found"
                                  ),
                                s
                              );
                            })(t, t.next).map(
                              e => (
                                null == t.inline
                                  ? (t.inline = e.isInline)
                                  : t.inline != e.isInline &&
                                    t.err('Mixing inline and block content'),
                                { type: 'name', value: e }
                              )
                            );
                            return (
                              t.pos++,
                              1 == e.length
                                ? e[0]
                                : { type: 'choice', exprs: e }
                            );
                          }
                        })(t);
                        for (;;)
                          if (t.eat('+')) r = { type: 'plus', expr: r };
                          else if (t.eat('*')) r = { type: 'star', expr: r };
                          else if (t.eat('?')) r = { type: 'opt', expr: r };
                          else if (t.eat('{'))
                            r = (function (e, t) {
                              let r = ee(e),
                                n = r;
                              return (
                                e.eat(',') && (n = '}' != e.next ? ee(e) : -1),
                                e.eat('}') || e.err('Unclosed braced range'),
                                { type: 'range', min: r, max: n, expr: t }
                              );
                            })(t, r);
                          else break;
                        return r;
                      })(t)
                    );
                  while (t.next && ')' != t.next && '|' != t.next);
                  return 1 == r.length ? r[0] : { type: 'seq', exprs: r };
                })(t)
              );
            while (t.eat('|'));
            return 1 == r.length ? r[0] : { type: 'choice', exprs: r };
          })(o);
          o.next && o.err('Unexpected trailing text');
          let a =
            ((n = (function (e) {
              let t = [[]];
              return (
                s(
                  (function e(t, o) {
                    if ('choice' == t.type)
                      return t.exprs.reduce((t, r) => t.concat(e(r, o)), []);
                    if ('seq' == t.type)
                      for (let n = 0; ; n++) {
                        let i = e(t.exprs[n], o);
                        if (n == t.exprs.length - 1) return i;
                        s(i, (o = r()));
                      }
                    else if ('star' == t.type) {
                      let i = r();
                      return n(o, i), s(e(t.expr, i), i), [n(i)];
                    } else if ('plus' == t.type) {
                      let i = r();
                      return s(e(t.expr, o), i), s(e(t.expr, i), i), [n(i)];
                    } else {
                      if ('opt' == t.type) return [n(o)].concat(e(t.expr, o));
                      if ('range' == t.type) {
                        let i = o;
                        for (let n = 0; n < t.min; n++) {
                          let n = r();
                          s(e(t.expr, i), n), (i = n);
                        }
                        if (-1 == t.max) s(e(t.expr, i), i);
                        else
                          for (let o = t.min; o < t.max; o++) {
                            let o = r();
                            n(i, o), s(e(t.expr, i), o), (i = o);
                          }
                        return [n(i)];
                      }
                      if ('name' == t.type) return [n(o, void 0, t.value)];
                      throw Error('Unknown expr type');
                    }
                  })(e, 0),
                  r()
                ),
                t
              );
              function r() {
                return t.push([]) - 1;
              }
              function n(e, r, n) {
                let s = { term: n, to: r };
                return t[e].push(s), s;
              }
              function s(e, t) {
                e.forEach(e => (e.to = t));
              }
            })(i)),
            (s = Object.create(null)),
            (function e(t) {
              let r = [];
              t.forEach(e => {
                n[e].forEach(({ term: e, to: t }) => {
                  let s;
                  if (e) {
                    for (let t = 0; t < r.length; t++)
                      r[t][0] == e && (s = r[t][1]);
                    er(n, t).forEach(t => {
                      s || r.push([e, (s = [])]),
                        -1 == s.indexOf(t) && s.push(t);
                    });
                  }
                });
              });
              let o = (s[t.join(',')] = new X(t.indexOf(n.length - 1) > -1));
              for (let t = 0; t < r.length; t++) {
                let n = r[t][1].sort(et);
                o.next.push({ type: r[t][0], next: s[n.join(',')] || e(n) });
              }
              return o;
            })(er(n, 0)));
          return (
            (function (e, t) {
              for (let r = 0, n = [e]; r < n.length; r++) {
                let e = n[r],
                  s = !e.validEnd,
                  o = [];
                for (let t = 0; t < e.next.length; t++) {
                  let { type: r, next: i } = e.next[t];
                  o.push(r.name),
                    s && !(r.isText || r.hasRequiredAttrs()) && (s = !1),
                    -1 == n.indexOf(i) && n.push(i);
                }
                s &&
                  t.err(
                    'Only non-generatable nodes (' +
                      o.join(', ') +
                      ') in a required position (see https://prosemirror.net/docs/guide/#generatable)'
                  );
              }
            })(a, o),
            a
          );
        }
        matchType(e) {
          for (let t = 0; t < this.next.length; t++)
            if (this.next[t].type == e) return this.next[t].next;
          return null;
        }
        matchFragment(e, t = 0, r = e.childCount) {
          let n = this;
          for (let s = t; n && s < r; s++) n = n.matchType(e.child(s).type);
          return n;
        }
        get inlineContent() {
          return 0 != this.next.length && this.next[0].type.isInline;
        }
        get defaultType() {
          for (let e = 0; e < this.next.length; e++) {
            let { type: t } = this.next[e];
            if (!(t.isText || t.hasRequiredAttrs())) return t;
          }
          return null;
        }
        compatible(e) {
          for (let t = 0; t < this.next.length; t++)
            for (let r = 0; r < e.next.length; r++)
              if (this.next[t].type == e.next[r].type) return !0;
          return !1;
        }
        fillBefore(e, t = !1, r = 0) {
          let n = [this];
          return (function s(o, i) {
            let a = o.matchFragment(e, r);
            if (a && (!t || a.validEnd))
              return I.from(i.map(e => e.createAndFill()));
            for (let e = 0; e < o.next.length; e++) {
              let { type: t, next: r } = o.next[e];
              if (!(t.isText || t.hasRequiredAttrs()) && -1 == n.indexOf(r)) {
                n.push(r);
                let e = s(r, i.concat(t));
                if (e) return e;
              }
            }
            return null;
          })(this, []);
        }
        findWrapping(e) {
          for (let t = 0; t < this.wrapCache.length; t += 2)
            if (this.wrapCache[t] == e) return this.wrapCache[t + 1];
          let t = this.computeWrapping(e);
          return this.wrapCache.push(e, t), t;
        }
        computeWrapping(e) {
          let t = Object.create(null),
            r = [{ match: this, type: null, via: null }];
          for (; r.length; ) {
            let n = r.shift(),
              s = n.match;
            if (s.matchType(e)) {
              let e = [];
              for (let t = n; t.type; t = t.via) e.push(t.type);
              return e.reverse();
            }
            for (let e = 0; e < s.next.length; e++) {
              let { type: o, next: i } = s.next[e];
              o.isLeaf ||
                o.hasRequiredAttrs() ||
                o.name in t ||
                (n.type && !i.validEnd) ||
                (r.push({ match: o.contentMatch, type: o, via: n }),
                (t[o.name] = !0));
            }
          }
          return null;
        }
        get edgeCount() {
          return this.next.length;
        }
        edge(e) {
          if (e >= this.next.length)
            throw RangeError(`There's no ${e}th edge in this content match`);
          return this.next[e];
        }
        toString() {
          let e = [];
          return (
            (function t(r) {
              e.push(r);
              for (let n = 0; n < r.next.length; n++)
                -1 == e.indexOf(r.next[n].next) && t(r.next[n].next);
            })(this),
            e.map((t, r) => {
              let n = r + (t.validEnd ? '*' : ' ') + ' ';
              for (let r = 0; r < t.next.length; r++)
                n +=
                  (r ? ', ' : '') +
                  t.next[r].type.name +
                  '->' +
                  e.indexOf(t.next[r].next);
              return n;
            }).join(`
`)
          );
        }
      };
      X.empty = new X(!0);
      var Q = class {
        constructor(e, t) {
          (this.string = e),
            (this.nodeTypes = t),
            (this.inline = null),
            (this.pos = 0),
            (this.tokens = e.split(/\s*(?=\b|\W|$)/)),
            '' == this.tokens[this.tokens.length - 1] && this.tokens.pop(),
            '' == this.tokens[0] && this.tokens.shift();
        }
        get next() {
          return this.tokens[this.pos];
        }
        eat(e) {
          return this.next == e && (this.pos++ || !0);
        }
        err(e) {
          throw SyntaxError(
            e + " (in content expression '" + this.string + "')"
          );
        }
      };
      function ee(e) {
        /\D/.test(e.next) && e.err("Expected number, got '" + e.next + "'");
        let t = Number(e.next);
        return e.pos++, t;
      }
      function et(e, t) {
        return t - e;
      }
      function er(e, t) {
        let r = [];
        return (
          (function t(n) {
            let s = e[n];
            if (1 == s.length && !s[0].term) return t(s[0].to);
            r.push(n);
            for (let e = 0; e < s.length; e++) {
              let { term: n, to: o } = s[e];
              n || -1 != r.indexOf(o) || t(o);
            }
          })(t),
          r.sort(et)
        );
      }
      var en = class {
          constructor(e, t, r) {
            (this.pos = e), (this.delInfo = t), (this.recover = r);
          }
          get deleted() {
            return (8 & this.delInfo) > 0;
          }
          get deletedBefore() {
            return (5 & this.delInfo) > 0;
          }
          get deletedAfter() {
            return (6 & this.delInfo) > 0;
          }
          get deletedAcross() {
            return (4 & this.delInfo) > 0;
          }
        },
        es = class e {
          constructor(t, r = !1) {
            if (((this.ranges = t), (this.inverted = r), !t.length && e.empty))
              return e.empty;
          }
          recover(e) {
            let t = 0,
              r = 65535 & e;
            if (!this.inverted)
              for (let e = 0; e < r; e++)
                t += this.ranges[3 * e + 2] - this.ranges[3 * e + 1];
            return this.ranges[3 * r] + t + (e - (65535 & e)) / 65536;
          }
          mapResult(e, t = 1) {
            return this._map(e, t, !1);
          }
          map(e, t = 1) {
            return this._map(e, t, !0);
          }
          _map(e, t, r) {
            let n = 0,
              s = this.inverted ? 2 : 1,
              o = this.inverted ? 1 : 2;
            for (let i = 0; i < this.ranges.length; i += 3) {
              let a = this.ranges[i] - (this.inverted ? n : 0);
              if (a > e) break;
              let l = this.ranges[i + s],
                c = this.ranges[i + o],
                d = a + l;
              if (e <= d) {
                let s = l ? (e == a ? -1 : e == d ? 1 : t) : t,
                  o = a + n + (s < 0 ? 0 : c);
                if (r) return o;
                let u = e == (t < 0 ? a : d) ? null : i / 3 + (e - a) * 65536,
                  p = e == a ? 2 : e == d ? 1 : 4;
                return (t < 0 ? e != a : e != d) && (p |= 8), new en(o, p, u);
              }
              n += c - l;
            }
            return r ? e + n : new en(e + n, 0, null);
          }
          touches(e, t) {
            let r = 0,
              n = 65535 & t,
              s = this.inverted ? 2 : 1,
              o = this.inverted ? 1 : 2;
            for (let t = 0; t < this.ranges.length; t += 3) {
              let i = this.ranges[t] - (this.inverted ? r : 0);
              if (i > e) break;
              let a = this.ranges[t + s];
              if (e <= i + a && t == 3 * n) return !0;
              r += this.ranges[t + o] - a;
            }
            return !1;
          }
          forEach(e) {
            let t = this.inverted ? 2 : 1,
              r = this.inverted ? 1 : 2;
            for (let n = 0, s = 0; n < this.ranges.length; n += 3) {
              let o = this.ranges[n],
                i = o - (this.inverted ? s : 0),
                a = o + (this.inverted ? 0 : s),
                l = this.ranges[n + t],
                c = this.ranges[n + r];
              e(i, i + l, a, a + c), (s += c - l);
            }
          }
          invert() {
            return new e(this.ranges, !this.inverted);
          }
          toString() {
            return (this.inverted ? '-' : '') + JSON.stringify(this.ranges);
          }
          static offset(t) {
            return 0 == t ? e.empty : new e(t < 0 ? [0, -t, 0] : [0, 0, t]);
          }
        };
      es.empty = new es([]);
      var eo = Object.create(null),
        ei = class {
          getMap() {
            return es.empty;
          }
          merge(e) {
            return null;
          }
          static fromJSON(e, t) {
            if (!t || !t.stepType)
              throw RangeError('Invalid input for Step.fromJSON');
            let r = eo[t.stepType];
            if (!r) throw RangeError(`No step type ${t.stepType} defined`);
            return r.fromJSON(e, t);
          }
          static jsonID(e, t) {
            if (e in eo) throw RangeError('Duplicate use of step JSON ID ' + e);
            return (eo[e] = t), (t.prototype.jsonID = e), t;
          }
        },
        ea = class e {
          constructor(e, t) {
            (this.doc = e), (this.failed = t);
          }
          static ok(t) {
            return new e(t, null);
          }
          static fail(t) {
            return new e(null, t);
          }
          static fromReplace(t, r, n, s) {
            try {
              return e.ok(t.replace(r, n, s));
            } catch (t) {
              if (t instanceof F) return e.fail(t.message);
              throw t;
            }
          }
        };
      function el(e, t, r) {
        let n = [];
        for (let s = 0; s < e.childCount; s++) {
          let o = e.child(s);
          o.content.size && (o = o.copy(el(o.content, t, o))),
            o.isInline && (o = t(o, r, s)),
            n.push(o);
        }
        return I.fromArray(n);
      }
      var ec = class e extends ei {
        constructor(e, t, r) {
          super(), (this.from = e), (this.to = t), (this.mark = r);
        }
        apply(e) {
          let t = e.slice(this.from, this.to),
            r = e.resolve(this.from),
            n = r.node(r.sharedDepth(this.to)),
            s = new D(
              el(
                t.content,
                (e, t) =>
                  e.isAtom && t.type.allowsMarkType(this.mark.type)
                    ? e.mark(this.mark.addToSet(e.marks))
                    : e,
                n
              ),
              t.openStart,
              t.openEnd
            );
          return ea.fromReplace(e, this.from, this.to, s);
        }
        invert() {
          return new ed(this.from, this.to, this.mark);
        }
        map(t) {
          let r = t.mapResult(this.from, 1),
            n = t.mapResult(this.to, -1);
          return (r.deleted && n.deleted) || r.pos >= n.pos
            ? null
            : new e(r.pos, n.pos, this.mark);
        }
        merge(t) {
          return t instanceof e &&
            t.mark.eq(this.mark) &&
            this.from <= t.to &&
            this.to >= t.from
            ? new e(
                Math.min(this.from, t.from),
                Math.max(this.to, t.to),
                this.mark
              )
            : null;
        }
        toJSON() {
          return {
            stepType: 'addMark',
            mark: this.mark.toJSON(),
            from: this.from,
            to: this.to,
          };
        }
        static fromJSON(t, r) {
          if ('number' != typeof r.from || 'number' != typeof r.to)
            throw RangeError('Invalid input for AddMarkStep.fromJSON');
          return new e(r.from, r.to, t.markFromJSON(r.mark));
        }
      };
      ei.jsonID('addMark', ec);
      var ed = class e extends ei {
        constructor(e, t, r) {
          super(), (this.from = e), (this.to = t), (this.mark = r);
        }
        apply(e) {
          let t = e.slice(this.from, this.to),
            r = new D(
              el(t.content, e => e.mark(this.mark.removeFromSet(e.marks)), e),
              t.openStart,
              t.openEnd
            );
          return ea.fromReplace(e, this.from, this.to, r);
        }
        invert() {
          return new ec(this.from, this.to, this.mark);
        }
        map(t) {
          let r = t.mapResult(this.from, 1),
            n = t.mapResult(this.to, -1);
          return (r.deleted && n.deleted) || r.pos >= n.pos
            ? null
            : new e(r.pos, n.pos, this.mark);
        }
        merge(t) {
          return t instanceof e &&
            t.mark.eq(this.mark) &&
            this.from <= t.to &&
            this.to >= t.from
            ? new e(
                Math.min(this.from, t.from),
                Math.max(this.to, t.to),
                this.mark
              )
            : null;
        }
        toJSON() {
          return {
            stepType: 'removeMark',
            mark: this.mark.toJSON(),
            from: this.from,
            to: this.to,
          };
        }
        static fromJSON(t, r) {
          if ('number' != typeof r.from || 'number' != typeof r.to)
            throw RangeError('Invalid input for RemoveMarkStep.fromJSON');
          return new e(r.from, r.to, t.markFromJSON(r.mark));
        }
      };
      ei.jsonID('removeMark', ed);
      var eu = class e extends ei {
        constructor(e, t) {
          super(), (this.pos = e), (this.mark = t);
        }
        apply(e) {
          let t = e.nodeAt(this.pos);
          if (!t) return ea.fail("No node at mark step's position");
          let r = t.type.create(t.attrs, null, this.mark.addToSet(t.marks));
          return ea.fromReplace(
            e,
            this.pos,
            this.pos + 1,
            new D(I.from(r), 0, t.isLeaf ? 0 : 1)
          );
        }
        invert(t) {
          let r = t.nodeAt(this.pos);
          if (r) {
            let t = this.mark.addToSet(r.marks);
            if (t.length == r.marks.length) {
              for (let n = 0; n < r.marks.length; n++)
                if (!r.marks[n].isInSet(t)) return new e(this.pos, r.marks[n]);
              return new e(this.pos, this.mark);
            }
          }
          return new ep(this.pos, this.mark);
        }
        map(t) {
          let r = t.mapResult(this.pos, 1);
          return r.deletedAfter ? null : new e(r.pos, this.mark);
        }
        toJSON() {
          return {
            stepType: 'addNodeMark',
            pos: this.pos,
            mark: this.mark.toJSON(),
          };
        }
        static fromJSON(t, r) {
          if ('number' != typeof r.pos)
            throw RangeError('Invalid input for AddNodeMarkStep.fromJSON');
          return new e(r.pos, t.markFromJSON(r.mark));
        }
      };
      ei.jsonID('addNodeMark', eu);
      var ep = class e extends ei {
        constructor(e, t) {
          super(), (this.pos = e), (this.mark = t);
        }
        apply(e) {
          let t = e.nodeAt(this.pos);
          if (!t) return ea.fail("No node at mark step's position");
          let r = t.type.create(
            t.attrs,
            null,
            this.mark.removeFromSet(t.marks)
          );
          return ea.fromReplace(
            e,
            this.pos,
            this.pos + 1,
            new D(I.from(r), 0, t.isLeaf ? 0 : 1)
          );
        }
        invert(e) {
          let t = e.nodeAt(this.pos);
          return t && this.mark.isInSet(t.marks)
            ? new eu(this.pos, this.mark)
            : this;
        }
        map(t) {
          let r = t.mapResult(this.pos, 1);
          return r.deletedAfter ? null : new e(r.pos, this.mark);
        }
        toJSON() {
          return {
            stepType: 'removeNodeMark',
            pos: this.pos,
            mark: this.mark.toJSON(),
          };
        }
        static fromJSON(t, r) {
          if ('number' != typeof r.pos)
            throw RangeError('Invalid input for RemoveNodeMarkStep.fromJSON');
          return new e(r.pos, t.markFromJSON(r.mark));
        }
      };
      ei.jsonID('removeNodeMark', ep);
      var eh = class e extends ei {
        constructor(e, t, r, n = !1) {
          super(),
            (this.from = e),
            (this.to = t),
            (this.slice = r),
            (this.structure = n);
        }
        apply(e) {
          return this.structure && ef(e, this.from, this.to)
            ? ea.fail('Structure replace would overwrite content')
            : ea.fromReplace(e, this.from, this.to, this.slice);
        }
        getMap() {
          return new es([this.from, this.to - this.from, this.slice.size]);
        }
        invert(t) {
          return new e(
            this.from,
            this.from + this.slice.size,
            t.slice(this.from, this.to)
          );
        }
        map(t) {
          let r = t.mapResult(this.from, 1),
            n = t.mapResult(this.to, -1);
          return r.deletedAcross && n.deletedAcross
            ? null
            : new e(r.pos, Math.max(r.pos, n.pos), this.slice);
        }
        merge(t) {
          if (!(t instanceof e) || t.structure || this.structure) return null;
          if (
            this.from + this.slice.size != t.from ||
            this.slice.openEnd ||
            t.slice.openStart
          ) {
            if (t.to != this.from || this.slice.openStart || t.slice.openEnd)
              return null;
            {
              let r =
                this.slice.size + t.slice.size == 0
                  ? D.empty
                  : new D(
                      t.slice.content.append(this.slice.content),
                      t.slice.openStart,
                      this.slice.openEnd
                    );
              return new e(t.from, this.to, r, this.structure);
            }
          }
          {
            let r =
              this.slice.size + t.slice.size == 0
                ? D.empty
                : new D(
                    this.slice.content.append(t.slice.content),
                    this.slice.openStart,
                    t.slice.openEnd
                  );
            return new e(
              this.from,
              this.to + (t.to - t.from),
              r,
              this.structure
            );
          }
        }
        toJSON() {
          let e = { stepType: 'replace', from: this.from, to: this.to };
          return (
            this.slice.size && (e.slice = this.slice.toJSON()),
            this.structure && (e.structure = !0),
            e
          );
        }
        static fromJSON(t, r) {
          if ('number' != typeof r.from || 'number' != typeof r.to)
            throw RangeError('Invalid input for ReplaceStep.fromJSON');
          return new e(r.from, r.to, D.fromJSON(t, r.slice), !!r.structure);
        }
      };
      ei.jsonID('replace', eh);
      var em = class e extends ei {
        constructor(e, t, r, n, s, o, i = !1) {
          super(),
            (this.from = e),
            (this.to = t),
            (this.gapFrom = r),
            (this.gapTo = n),
            (this.slice = s),
            (this.insert = o),
            (this.structure = i);
        }
        apply(e) {
          if (
            this.structure &&
            (ef(e, this.from, this.gapFrom) || ef(e, this.gapTo, this.to))
          )
            return ea.fail('Structure gap-replace would overwrite content');
          let t = e.slice(this.gapFrom, this.gapTo);
          if (t.openStart || t.openEnd)
            return ea.fail('Gap is not a flat range');
          let r = this.slice.insertAt(this.insert, t.content);
          return r
            ? ea.fromReplace(e, this.from, this.to, r)
            : ea.fail('Content does not fit in gap');
        }
        getMap() {
          return new es([
            this.from,
            this.gapFrom - this.from,
            this.insert,
            this.gapTo,
            this.to - this.gapTo,
            this.slice.size - this.insert,
          ]);
        }
        invert(t) {
          let r = this.gapTo - this.gapFrom;
          return new e(
            this.from,
            this.from + this.slice.size + r,
            this.from + this.insert,
            this.from + this.insert + r,
            t
              .slice(this.from, this.to)
              .removeBetween(this.gapFrom - this.from, this.gapTo - this.from),
            this.gapFrom - this.from,
            this.structure
          );
        }
        map(t) {
          let r = t.mapResult(this.from, 1),
            n = t.mapResult(this.to, -1),
            s = t.map(this.gapFrom, -1),
            o = t.map(this.gapTo, 1);
          return (r.deletedAcross && n.deletedAcross) || s < r.pos || o > n.pos
            ? null
            : new e(
                r.pos,
                n.pos,
                s,
                o,
                this.slice,
                this.insert,
                this.structure
              );
        }
        toJSON() {
          let e = {
            stepType: 'replaceAround',
            from: this.from,
            to: this.to,
            gapFrom: this.gapFrom,
            gapTo: this.gapTo,
            insert: this.insert,
          };
          return (
            this.slice.size && (e.slice = this.slice.toJSON()),
            this.structure && (e.structure = !0),
            e
          );
        }
        static fromJSON(t, r) {
          if (
            'number' != typeof r.from ||
            'number' != typeof r.to ||
            'number' != typeof r.gapFrom ||
            'number' != typeof r.gapTo ||
            'number' != typeof r.insert
          )
            throw RangeError('Invalid input for ReplaceAroundStep.fromJSON');
          return new e(
            r.from,
            r.to,
            r.gapFrom,
            r.gapTo,
            D.fromJSON(t, r.slice),
            r.insert,
            !!r.structure
          );
        }
      };
      function ef(e, t, r) {
        let n = e.resolve(t),
          s = r - t,
          o = n.depth;
        for (; s > 0 && o > 0 && n.indexAfter(o) == n.node(o).childCount; )
          o--, s--;
        if (s > 0) {
          let e = n.node(o).maybeChild(n.indexAfter(o));
          for (; s > 0; ) {
            if (!e || e.isLeaf) return !0;
            (e = e.firstChild), s--;
          }
        }
        return !1;
      }
      ei.jsonID('replaceAround', em);
      var eg = class e extends ei {
        constructor(e, t, r) {
          super(), (this.pos = e), (this.attr = t), (this.value = r);
        }
        apply(e) {
          let t = e.nodeAt(this.pos);
          if (!t) return ea.fail("No node at attribute step's position");
          let r = Object.create(null);
          for (let e in t.attrs) r[e] = t.attrs[e];
          r[this.attr] = this.value;
          let n = t.type.create(r, null, t.marks);
          return ea.fromReplace(
            e,
            this.pos,
            this.pos + 1,
            new D(I.from(n), 0, t.isLeaf ? 0 : 1)
          );
        }
        getMap() {
          return es.empty;
        }
        invert(t) {
          return new e(
            this.pos,
            this.attr,
            t.nodeAt(this.pos).attrs[this.attr]
          );
        }
        map(t) {
          let r = t.mapResult(this.pos, 1);
          return r.deletedAfter ? null : new e(r.pos, this.attr, this.value);
        }
        toJSON() {
          return {
            stepType: 'attr',
            pos: this.pos,
            attr: this.attr,
            value: this.value,
          };
        }
        static fromJSON(t, r) {
          if ('number' != typeof r.pos || 'string' != typeof r.attr)
            throw RangeError('Invalid input for AttrStep.fromJSON');
          return new e(r.pos, r.attr, r.value);
        }
      };
      ei.jsonID('attr', eg);
      var ex = class e extends ei {
        constructor(e, t) {
          super(), (this.attr = e), (this.value = t);
        }
        apply(e) {
          let t = Object.create(null);
          for (let r in e.attrs) t[r] = e.attrs[r];
          t[this.attr] = this.value;
          let r = e.type.create(t, e.content, e.marks);
          return ea.ok(r);
        }
        getMap() {
          return es.empty;
        }
        invert(t) {
          return new e(this.attr, t.attrs[this.attr]);
        }
        map(e) {
          return this;
        }
        toJSON() {
          return { stepType: 'docAttr', attr: this.attr, value: this.value };
        }
        static fromJSON(t, r) {
          if ('string' != typeof r.attr)
            throw RangeError('Invalid input for DocAttrStep.fromJSON');
          return new e(r.attr, r.value);
        }
      };
      ei.jsonID('docAttr', ex);
      var ey = class extends Error {};
      ((ey = function e(t) {
        let r = Error.call(this, t);
        return (r.__proto__ = e.prototype), r;
      }).prototype = Object.create(Error.prototype)),
        (ey.prototype.constructor = ey),
        (ey.prototype.name = 'TransformError');
      var ev = Object.create(null),
        eb = class {
          constructor(e, t, r) {
            (this.$anchor = e),
              (this.$head = t),
              (this.ranges = r || [new ew(e.min(t), e.max(t))]);
          }
          get anchor() {
            return this.$anchor.pos;
          }
          get head() {
            return this.$head.pos;
          }
          get from() {
            return this.$from.pos;
          }
          get to() {
            return this.$to.pos;
          }
          get $from() {
            return this.ranges[0].$from;
          }
          get $to() {
            return this.ranges[0].$to;
          }
          get empty() {
            let e = this.ranges;
            for (let t = 0; t < e.length; t++)
              if (e[t].$from.pos != e[t].$to.pos) return !1;
            return !0;
          }
          content() {
            return this.$from.doc.slice(this.from, this.to, !0);
          }
          replace(e, t = D.empty) {
            let r = t.content.lastChild,
              n = null;
            for (let e = 0; e < t.openEnd; e++) (n = r), (r = r.lastChild);
            let s = e.steps.length,
              o = this.ranges;
            for (let i = 0; i < o.length; i++) {
              let { $from: a, $to: l } = o[i],
                c = e.mapping.slice(s);
              e.replaceRange(c.map(a.pos), c.map(l.pos), i ? D.empty : t),
                0 == i &&
                  eR(e, s, (r ? r.isInline : n && n.isTextblock) ? -1 : 1);
            }
          }
          replaceWith(e, t) {
            let r = e.steps.length,
              n = this.ranges;
            for (let s = 0; s < n.length; s++) {
              let { $from: o, $to: i } = n[s],
                a = e.mapping.slice(r),
                l = a.map(o.pos),
                c = a.map(i.pos);
              s
                ? e.deleteRange(l, c)
                : (e.replaceRangeWith(l, c, t), eR(e, r, t.isInline ? -1 : 1));
            }
          }
          static findFrom(e, t, r = !1) {
            let n = e.parent.inlineContent
              ? new eN(e)
              : eO(e.node(0), e.parent, e.pos, e.index(), t, r);
            if (n) return n;
            for (let n = e.depth - 1; n >= 0; n--) {
              let s =
                t < 0
                  ? eO(e.node(0), e.node(n), e.before(n + 1), e.index(n), t, r)
                  : eO(
                      e.node(0),
                      e.node(n),
                      e.after(n + 1),
                      e.index(n) + 1,
                      t,
                      r
                    );
              if (s) return s;
            }
            return null;
          }
          static near(e, t = 1) {
            return (
              this.findFrom(e, t) || this.findFrom(e, -t) || new eT(e.node(0))
            );
          }
          static atStart(e) {
            return eO(e, e, 0, 0, 1) || new eT(e);
          }
          static atEnd(e) {
            return eO(e, e, e.content.size, e.childCount, -1) || new eT(e);
          }
          static fromJSON(e, t) {
            if (!t || !t.type)
              throw RangeError('Invalid input for Selection.fromJSON');
            let r = ev[t.type];
            if (!r) throw RangeError(`No selection type ${t.type} defined`);
            return r.fromJSON(e, t);
          }
          static jsonID(e, t) {
            if (e in ev)
              throw RangeError('Duplicate use of selection JSON ID ' + e);
            return (ev[e] = t), (t.prototype.jsonID = e), t;
          }
          getBookmark() {
            return eN.between(this.$anchor, this.$head).getBookmark();
          }
        };
      eb.prototype.visible = !0;
      var ew = class {
          constructor(e, t) {
            (this.$from = e), (this.$to = t);
          }
        },
        ek = !1;
      function ej(e) {
        ek ||
          e.parent.inlineContent ||
          ((ek = !0),
          console.warn(
            'TextSelection endpoint not pointing into a node with inline content (' +
              e.parent.type.name +
              ')'
          ));
      }
      var eN = class e extends eb {
        constructor(e, t = e) {
          ej(e), ej(t), super(e, t);
        }
        get $cursor() {
          return this.$anchor.pos == this.$head.pos ? this.$head : null;
        }
        map(t, r) {
          let n = t.resolve(r.map(this.head));
          if (!n.parent.inlineContent) return eb.near(n);
          let s = t.resolve(r.map(this.anchor));
          return new e(s.parent.inlineContent ? s : n, n);
        }
        replace(e, t = D.empty) {
          if ((super.replace(e, t), t == D.empty)) {
            let t = this.$from.marksAcross(this.$to);
            t && e.ensureMarks(t);
          }
        }
        eq(t) {
          return (
            t instanceof e && t.anchor == this.anchor && t.head == this.head
          );
        }
        getBookmark() {
          return new eC(this.anchor, this.head);
        }
        toJSON() {
          return { type: 'text', anchor: this.anchor, head: this.head };
        }
        static fromJSON(t, r) {
          if ('number' != typeof r.anchor || 'number' != typeof r.head)
            throw RangeError('Invalid input for TextSelection.fromJSON');
          return new e(t.resolve(r.anchor), t.resolve(r.head));
        }
        static create(e, t, r = t) {
          let n = e.resolve(t);
          return new this(n, r == t ? n : e.resolve(r));
        }
        static between(t, r, n) {
          let s = t.pos - r.pos;
          if (((!n || s) && (n = s >= 0 ? 1 : -1), !r.parent.inlineContent)) {
            let e = eb.findFrom(r, n, !0) || eb.findFrom(r, -n, !0);
            if (!e) return eb.near(r, n);
            r = e.$head;
          }
          return (
            t.parent.inlineContent ||
              (0 == s
                ? (t = r)
                : (t = (eb.findFrom(t, -n, !0) || eb.findFrom(t, n, !0))
                    .$anchor).pos <
                    r.pos !=
                    s < 0 && (t = r)),
            new e(t, r)
          );
        }
      };
      eb.jsonID('text', eN);
      var eC = class e {
          constructor(e, t) {
            (this.anchor = e), (this.head = t);
          }
          map(t) {
            return new e(t.map(this.anchor), t.map(this.head));
          }
          resolve(e) {
            return eN.between(e.resolve(this.anchor), e.resolve(this.head));
          }
        },
        eS = class e extends eb {
          constructor(e) {
            let t = e.nodeAfter;
            super(e, e.node(0).resolve(e.pos + t.nodeSize)), (this.node = t);
          }
          map(t, r) {
            let { deleted: n, pos: s } = r.mapResult(this.anchor),
              o = t.resolve(s);
            return n ? eb.near(o) : new e(o);
          }
          content() {
            return new D(I.from(this.node), 0, 0);
          }
          eq(t) {
            return t instanceof e && t.anchor == this.anchor;
          }
          toJSON() {
            return { type: 'node', anchor: this.anchor };
          }
          getBookmark() {
            return new eE(this.anchor);
          }
          static fromJSON(t, r) {
            if ('number' != typeof r.anchor)
              throw RangeError('Invalid input for NodeSelection.fromJSON');
            return new e(t.resolve(r.anchor));
          }
          static create(t, r) {
            return new e(t.resolve(r));
          }
          static isSelectable(e) {
            return !e.isText && !1 !== e.type.spec.selectable;
          }
        };
      (eS.prototype.visible = !1), eb.jsonID('node', eS);
      var eE = class e {
          constructor(e) {
            this.anchor = e;
          }
          map(t) {
            let { deleted: r, pos: n } = t.mapResult(this.anchor);
            return r ? new eC(n, n) : new e(n);
          }
          resolve(e) {
            let t = e.resolve(this.anchor),
              r = t.nodeAfter;
            return r && eS.isSelectable(r) ? new eS(t) : eb.near(t);
          }
        },
        eT = class e extends eb {
          constructor(e) {
            super(e.resolve(0), e.resolve(e.content.size));
          }
          replace(e, t = D.empty) {
            if (t == D.empty) {
              e.delete(0, e.doc.content.size);
              let t = eb.atStart(e.doc);
              t.eq(e.selection) || e.setSelection(t);
            } else super.replace(e, t);
          }
          toJSON() {
            return { type: 'all' };
          }
          static fromJSON(t) {
            return new e(t);
          }
          map(t) {
            return new e(t);
          }
          eq(t) {
            return t instanceof e;
          }
          getBookmark() {
            return eA;
          }
        };
      eb.jsonID('all', eT);
      var eA = {
        map() {
          return this;
        },
        resolve: e => new eT(e),
      };
      function eO(e, t, r, n, s, o = !1) {
        if (t.inlineContent) return eN.create(e, r);
        for (
          let i = n - (s > 0 ? 0 : 1);
          s > 0 ? i < t.childCount : i >= 0;
          i += s
        ) {
          let n = t.child(i);
          if (n.isAtom) {
            if (!o && eS.isSelectable(n))
              return eS.create(e, r - (s < 0 ? n.nodeSize : 0));
          } else {
            let t = eO(e, n, r + s, s < 0 ? n.childCount : 0, s, o);
            if (t) return t;
          }
          r += n.nodeSize * s;
        }
        return null;
      }
      function eR(e, t, r) {
        let n,
          s = e.steps.length - 1;
        if (s < t) return;
        let o = e.steps[s];
        (o instanceof eh || o instanceof em) &&
          (e.mapping.maps[s].forEach((e, t, r, s) => {
            null == n && (n = s);
          }),
          e.setSelection(eb.near(e.doc.resolve(n), r)));
      }
      function eM(e, t) {
        return t && e ? e.bind(t) : e;
      }
      var eI = class {
        constructor(e, t, r) {
          (this.name = e),
            (this.init = eM(t.init, r)),
            (this.apply = eM(t.apply, r));
        }
      };
      new eI('doc', {
        init: e => e.doc || e.schema.topNodeType.createAndFill(),
        apply: e => e.doc,
      }),
        new eI('selection', {
          init: (e, t) => e.selection || eb.atStart(t.doc),
          apply: e => e.selection,
        }),
        new eI('storedMarks', {
          init: e => e.storedMarks || null,
          apply: (e, t, r, n) => (n.selection.$cursor ? e.storedMarks : null),
        }),
        new eI('scrollToSelection', {
          init: () => 0,
          apply: (e, t) => (e.scrolledIntoView ? t + 1 : t),
        });
      var ez = class {
          constructor(e) {
            (this.spec = e),
              (this.props = {}),
              e.props &&
                (function e(t, r, n) {
                  for (let s in t) {
                    let o = t[s];
                    o instanceof Function
                      ? (o = o.bind(r))
                      : 'handleDOMEvents' == s && (o = e(o, r, {})),
                      (n[s] = o);
                  }
                  return n;
                })(e.props, this, this.props),
              (this.key = e.key ? e.key.key : eL('plugin'));
          }
          getState(e) {
            return e[this.key];
          }
        },
        e_ = Object.create(null);
      function eL(e) {
        return e in e_ ? e + '$' + ++e_[e] : ((e_[e] = 0), e + '$');
      }
      var eP = class {
          constructor(e = 'key') {
            this.key = eL(e);
          }
          get(e) {
            return e.config.pluginsByKey[this.key];
          }
          getState(e) {
            return e[this.key];
          }
        },
        eF = 'bottom',
        eD = 'right',
        eB = 'left',
        eH = 'auto',
        eJ = ['top', eF, eD, eB],
        e$ = 'start',
        eq = 'viewport',
        eU = 'popper',
        eV = eJ.reduce(function (e, t) {
          return e.concat([t + '-' + e$, t + '-end']);
        }, []),
        eZ = [].concat(eJ, [eH]).reduce(function (e, t) {
          return e.concat([t, t + '-' + e$, t + '-end']);
        }, []),
        eW = [
          'beforeRead',
          'read',
          'afterRead',
          'beforeMain',
          'main',
          'afterMain',
          'beforeWrite',
          'write',
          'afterWrite',
        ];
      function eY(e) {
        return e ? (e.nodeName || '').toLowerCase() : null;
      }
      function eK(e) {
        if (null == e) return window;
        if ('[object Window]' !== e.toString()) {
          var t = e.ownerDocument;
          return (t && t.defaultView) || window;
        }
        return e;
      }
      function eG(e) {
        var t = eK(e).Element;
        return e instanceof t || e instanceof Element;
      }
      function eX(e) {
        var t = eK(e).HTMLElement;
        return e instanceof t || e instanceof HTMLElement;
      }
      function eQ(e) {
        if ('undefined' == typeof ShadowRoot) return !1;
        var t = eK(e).ShadowRoot;
        return e instanceof t || e instanceof ShadowRoot;
      }
      var e0 = {
        name: 'applyStyles',
        enabled: !0,
        phase: 'write',
        fn: function (e) {
          var t = e.state;
          Object.keys(t.elements).forEach(function (e) {
            var r = t.styles[e] || {},
              n = t.attributes[e] || {},
              s = t.elements[e];
            eX(s) &&
              eY(s) &&
              (Object.assign(s.style, r),
              Object.keys(n).forEach(function (e) {
                var t = n[e];
                !1 === t
                  ? s.removeAttribute(e)
                  : s.setAttribute(e, !0 === t ? '' : t);
              }));
          });
        },
        effect: function (e) {
          var t = e.state,
            r = {
              popper: {
                position: t.options.strategy,
                left: '0',
                top: '0',
                margin: '0',
              },
              arrow: { position: 'absolute' },
              reference: {},
            };
          return (
            Object.assign(t.elements.popper.style, r.popper),
            (t.styles = r),
            t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow),
            function () {
              Object.keys(t.elements).forEach(function (e) {
                var n = t.elements[e],
                  s = t.attributes[e] || {},
                  o = Object.keys(
                    t.styles.hasOwnProperty(e) ? t.styles[e] : r[e]
                  ).reduce(function (e, t) {
                    return (e[t] = ''), e;
                  }, {});
                eX(n) &&
                  eY(n) &&
                  (Object.assign(n.style, o),
                  Object.keys(s).forEach(function (e) {
                    n.removeAttribute(e);
                  }));
              });
            }
          );
        },
        requires: ['computeStyles'],
      };
      function e1(e) {
        return e.split('-')[0];
      }
      var e2 = Math.max,
        e3 = Math.min,
        e5 = Math.round;
      function e4() {
        var e = navigator.userAgentData;
        return null != e && e.brands && Array.isArray(e.brands)
          ? e.brands
              .map(function (e) {
                return e.brand + '/' + e.version;
              })
              .join(' ')
          : navigator.userAgent;
      }
      function e8() {
        return !/^((?!chrome|android).)*safari/i.test(e4());
      }
      function e6(e, t, r) {
        void 0 === t && (t = !1), void 0 === r && (r = !1);
        var n = e.getBoundingClientRect(),
          s = 1,
          o = 1;
        t &&
          eX(e) &&
          ((s = (e.offsetWidth > 0 && e5(n.width) / e.offsetWidth) || 1),
          (o = (e.offsetHeight > 0 && e5(n.height) / e.offsetHeight) || 1));
        var i = (eG(e) ? eK(e) : window).visualViewport,
          a = !e8() && r,
          l = (n.left + (a && i ? i.offsetLeft : 0)) / s,
          c = (n.top + (a && i ? i.offsetTop : 0)) / o,
          d = n.width / s,
          u = n.height / o;
        return {
          width: d,
          height: u,
          top: c,
          right: l + d,
          bottom: c + u,
          left: l,
          x: l,
          y: c,
        };
      }
      function e7(e) {
        var t = e6(e),
          r = e.offsetWidth,
          n = e.offsetHeight;
        return (
          1 >= Math.abs(t.width - r) && (r = t.width),
          1 >= Math.abs(t.height - n) && (n = t.height),
          { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
        );
      }
      function e9(e, t) {
        var r = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (r && eQ(r)) {
          var n = t;
          do {
            if (n && e.isSameNode(n)) return !0;
            n = n.parentNode || n.host;
          } while (n);
        }
        return !1;
      }
      function te(e) {
        return eK(e).getComputedStyle(e);
      }
      function tt(e) {
        return ((eG(e) ? e.ownerDocument : e.document) || window.document)
          .documentElement;
      }
      function tr(e) {
        return 'html' === eY(e)
          ? e
          : e.assignedSlot || e.parentNode || (eQ(e) ? e.host : null) || tt(e);
      }
      function tn(e) {
        return eX(e) && 'fixed' !== te(e).position ? e.offsetParent : null;
      }
      function ts(e) {
        for (
          var t = eK(e), r = tn(e);
          r &&
          ['table', 'td', 'th'].indexOf(eY(r)) >= 0 &&
          'static' === te(r).position;

        )
          r = tn(r);
        return r &&
          ('html' === eY(r) ||
            ('body' === eY(r) && 'static' === te(r).position))
          ? t
          : r ||
              (function (e) {
                var t = /firefox/i.test(e4());
                if (
                  /Trident/i.test(e4()) &&
                  eX(e) &&
                  'fixed' === te(e).position
                )
                  return null;
                var r = tr(e);
                for (
                  eQ(r) && (r = r.host);
                  eX(r) && 0 > ['html', 'body'].indexOf(eY(r));

                ) {
                  var n = te(r);
                  if (
                    'none' !== n.transform ||
                    'none' !== n.perspective ||
                    'paint' === n.contain ||
                    -1 !== ['transform', 'perspective'].indexOf(n.willChange) ||
                    (t && 'filter' === n.willChange) ||
                    (t && n.filter && 'none' !== n.filter)
                  )
                    return r;
                  r = r.parentNode;
                }
                return null;
              })(e) ||
              t;
      }
      function to(e) {
        return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y';
      }
      function ti(e, t, r) {
        return e2(e, e3(t, r));
      }
      function ta() {
        return { top: 0, right: 0, bottom: 0, left: 0 };
      }
      function tl(e) {
        return Object.assign({}, ta(), e);
      }
      function tc(e, t) {
        return t.reduce(function (t, r) {
          return (t[r] = e), t;
        }, {});
      }
      function td(e) {
        return e.split('-')[1];
      }
      var tu = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' };
      function tp(e) {
        var t,
          r,
          n,
          s,
          o,
          i,
          a,
          l = e.popper,
          c = e.popperRect,
          d = e.placement,
          u = e.variation,
          p = e.offsets,
          h = e.position,
          m = e.gpuAcceleration,
          f = e.adaptive,
          g = e.roundOffsets,
          x = e.isFixed,
          y = p.x,
          v = void 0 === y ? 0 : y,
          b = p.y,
          w = void 0 === b ? 0 : b,
          k = 'function' == typeof g ? g({ x: v, y: w }) : { x: v, y: w };
        (v = k.x), (w = k.y);
        var j = p.hasOwnProperty('x'),
          N = p.hasOwnProperty('y'),
          C = eB,
          S = 'top',
          E = window;
        if (f) {
          var T = ts(l),
            A = 'clientHeight',
            O = 'clientWidth';
          T === eK(l) &&
            'static' !== te((T = tt(l))).position &&
            'absolute' === h &&
            ((A = 'scrollHeight'), (O = 'scrollWidth')),
            ('top' === d || ((d === eB || d === eD) && 'end' === u)) &&
              ((S = eF),
              (w -=
                (x && T === E && E.visualViewport
                  ? E.visualViewport.height
                  : T[A]) - c.height),
              (w *= m ? 1 : -1)),
            (d === eB || (('top' === d || d === eF) && 'end' === u)) &&
              ((C = eD),
              (v -=
                (x && T === E && E.visualViewport
                  ? E.visualViewport.width
                  : T[O]) - c.width),
              (v *= m ? 1 : -1));
        }
        var R = Object.assign({ position: h }, f && tu),
          M =
            !0 === g
              ? ((t = { x: v, y: w }),
                (r = eK(l)),
                (n = t.x),
                (s = t.y),
                {
                  x: e5(n * (o = r.devicePixelRatio || 1)) / o || 0,
                  y: e5(s * o) / o || 0,
                })
              : { x: v, y: w };
        return ((v = M.x), (w = M.y), m)
          ? Object.assign(
              {},
              R,
              (((i = {})[S] = N ? '0' : ''),
              (i[C] = j ? '0' : ''),
              (i.transform =
                1 >= (E.devicePixelRatio || 1)
                  ? 'translate(' + v + 'px, ' + w + 'px)'
                  : 'translate3d(' + v + 'px, ' + w + 'px, 0)'),
              i)
            )
          : Object.assign(
              {},
              R,
              (((a = {})[S] = N ? w + 'px' : ''),
              (a[C] = j ? v + 'px' : ''),
              (a.transform = ''),
              a)
            );
      }
      var th = { passive: !0 },
        tm = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
      function tf(e) {
        return e.replace(/left|right|bottom|top/g, function (e) {
          return tm[e];
        });
      }
      var tg = { start: 'end', end: 'start' };
      function tx(e) {
        return e.replace(/start|end/g, function (e) {
          return tg[e];
        });
      }
      function ty(e) {
        var t = eK(e);
        return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
      }
      function tv(e) {
        return e6(tt(e)).left + ty(e).scrollLeft;
      }
      function tb(e) {
        var t = te(e),
          r = t.overflow,
          n = t.overflowX,
          s = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(r + s + n);
      }
      function tw(e, t) {
        void 0 === t && (t = []);
        var r,
          n = (function e(t) {
            return ['html', 'body', '#document'].indexOf(eY(t)) >= 0
              ? t.ownerDocument.body
              : eX(t) && tb(t)
                ? t
                : e(tr(t));
          })(e),
          s = n === (null == (r = e.ownerDocument) ? void 0 : r.body),
          o = eK(n),
          i = s ? [o].concat(o.visualViewport || [], tb(n) ? n : []) : n,
          a = t.concat(i);
        return s ? a : a.concat(tw(tr(i)));
      }
      function tk(e) {
        return Object.assign({}, e, {
          left: e.x,
          top: e.y,
          right: e.x + e.width,
          bottom: e.y + e.height,
        });
      }
      function tj(e, t, r) {
        var n, s, o, i, a, l, c, d, u, p;
        return t === eq
          ? tk(
              (function (e, t) {
                var r = eK(e),
                  n = tt(e),
                  s = r.visualViewport,
                  o = n.clientWidth,
                  i = n.clientHeight,
                  a = 0,
                  l = 0;
                if (s) {
                  (o = s.width), (i = s.height);
                  var c = e8();
                  (c || (!c && 'fixed' === t)) &&
                    ((a = s.offsetLeft), (l = s.offsetTop));
                }
                return { width: o, height: i, x: a + tv(e), y: l };
              })(e, r)
            )
          : eG(t)
            ? (((n = e6(t, !1, 'fixed' === r)).top = n.top + t.clientTop),
              (n.left = n.left + t.clientLeft),
              (n.bottom = n.top + t.clientHeight),
              (n.right = n.left + t.clientWidth),
              (n.width = t.clientWidth),
              (n.height = t.clientHeight),
              (n.x = n.left),
              (n.y = n.top),
              n)
            : tk(
                ((s = tt(e)),
                (i = tt(s)),
                (a = ty(s)),
                (l = null == (o = s.ownerDocument) ? void 0 : o.body),
                (c = e2(
                  i.scrollWidth,
                  i.clientWidth,
                  l ? l.scrollWidth : 0,
                  l ? l.clientWidth : 0
                )),
                (d = e2(
                  i.scrollHeight,
                  i.clientHeight,
                  l ? l.scrollHeight : 0,
                  l ? l.clientHeight : 0
                )),
                (u = -a.scrollLeft + tv(s)),
                (p = -a.scrollTop),
                'rtl' === te(l || i).direction &&
                  (u += e2(i.clientWidth, l ? l.clientWidth : 0) - c),
                { width: c, height: d, x: u, y: p })
              );
      }
      function tN(e) {
        var t,
          r = e.reference,
          n = e.element,
          s = e.placement,
          o = s ? e1(s) : null,
          i = s ? td(s) : null,
          a = r.x + r.width / 2 - n.width / 2,
          l = r.y + r.height / 2 - n.height / 2;
        switch (o) {
          case 'top':
            t = { x: a, y: r.y - n.height };
            break;
          case eF:
            t = { x: a, y: r.y + r.height };
            break;
          case eD:
            t = { x: r.x + r.width, y: l };
            break;
          case eB:
            t = { x: r.x - n.width, y: l };
            break;
          default:
            t = { x: r.x, y: r.y };
        }
        var c = o ? to(o) : null;
        if (null != c) {
          var d = 'y' === c ? 'height' : 'width';
          switch (i) {
            case e$:
              t[c] = t[c] - (r[d] / 2 - n[d] / 2);
              break;
            case 'end':
              t[c] = t[c] + (r[d] / 2 - n[d] / 2);
          }
        }
        return t;
      }
      function tC(e, t) {
        void 0 === t && (t = {});
        var r,
          n,
          s,
          o,
          i,
          a,
          l,
          c = t,
          d = c.placement,
          u = void 0 === d ? e.placement : d,
          p = c.strategy,
          h = void 0 === p ? e.strategy : p,
          m = c.boundary,
          f = c.rootBoundary,
          g = c.elementContext,
          x = void 0 === g ? eU : g,
          y = c.altBoundary,
          v = c.padding,
          b = void 0 === v ? 0 : v,
          w = tl('number' != typeof b ? b : tc(b, eJ)),
          k = e.rects.popper,
          j = e.elements[void 0 !== y && y ? (x === eU ? 'reference' : eU) : x],
          N =
            ((r = eG(j) ? j : j.contextElement || tt(e.elements.popper)),
            (a = (i = [].concat(
              'clippingParents' === (n = void 0 === m ? 'clippingParents' : m)
                ? ((s = tw(tr(r))),
                  eG(
                    (o =
                      ['absolute', 'fixed'].indexOf(te(r).position) >= 0 &&
                      eX(r)
                        ? ts(r)
                        : r)
                  )
                    ? s.filter(function (e) {
                        return eG(e) && e9(e, o) && 'body' !== eY(e);
                      })
                    : [])
                : [].concat(n),
              [void 0 === f ? eq : f]
            ))[0]),
            ((l = i.reduce(
              function (e, t) {
                var n = tj(r, t, h);
                return (
                  (e.top = e2(n.top, e.top)),
                  (e.right = e3(n.right, e.right)),
                  (e.bottom = e3(n.bottom, e.bottom)),
                  (e.left = e2(n.left, e.left)),
                  e
                );
              },
              tj(r, a, h)
            )).width = l.right - l.left),
            (l.height = l.bottom - l.top),
            (l.x = l.left),
            (l.y = l.top),
            l),
          C = e6(e.elements.reference),
          S = tN({
            reference: C,
            element: k,
            strategy: 'absolute',
            placement: u,
          }),
          E = tk(Object.assign({}, k, S)),
          T = x === eU ? E : C,
          A = {
            top: N.top - T.top + w.top,
            bottom: T.bottom - N.bottom + w.bottom,
            left: N.left - T.left + w.left,
            right: T.right - N.right + w.right,
          },
          O = e.modifiersData.offset;
        if (x === eU && O) {
          var R = O[u];
          Object.keys(A).forEach(function (e) {
            var t = [eD, eF].indexOf(e) >= 0 ? 1 : -1,
              r = ['top', eF].indexOf(e) >= 0 ? 'y' : 'x';
            A[e] += R[r] * t;
          });
        }
        return A;
      }
      function tS(e, t, r) {
        return (
          void 0 === r && (r = { x: 0, y: 0 }),
          {
            top: e.top - t.height - r.y,
            right: e.right - t.width + r.x,
            bottom: e.bottom - t.height + r.y,
            left: e.left - t.width - r.x,
          }
        );
      }
      function tE(e) {
        return ['top', eD, eF, eB].some(function (t) {
          return e[t] >= 0;
        });
      }
      var tT = { placement: 'bottom', modifiers: [], strategy: 'absolute' };
      function tA() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return !t.some(function (e) {
          return !(e && 'function' == typeof e.getBoundingClientRect);
        });
      }
      var tO =
          ((o =
            void 0 ===
            (s = (n = {
              defaultModifiers: [
                {
                  name: 'eventListeners',
                  enabled: !0,
                  phase: 'write',
                  fn: function () {},
                  effect: function (e) {
                    var t = e.state,
                      r = e.instance,
                      n = e.options,
                      s = n.scroll,
                      o = void 0 === s || s,
                      i = n.resize,
                      a = void 0 === i || i,
                      l = eK(t.elements.popper),
                      c = [].concat(
                        t.scrollParents.reference,
                        t.scrollParents.popper
                      );
                    return (
                      o &&
                        c.forEach(function (e) {
                          e.addEventListener('scroll', r.update, th);
                        }),
                      a && l.addEventListener('resize', r.update, th),
                      function () {
                        o &&
                          c.forEach(function (e) {
                            e.removeEventListener('scroll', r.update, th);
                          }),
                          a && l.removeEventListener('resize', r.update, th);
                      }
                    );
                  },
                  data: {},
                },
                {
                  name: 'popperOffsets',
                  enabled: !0,
                  phase: 'read',
                  fn: function (e) {
                    var t = e.state,
                      r = e.name;
                    t.modifiersData[r] = tN({
                      reference: t.rects.reference,
                      element: t.rects.popper,
                      strategy: 'absolute',
                      placement: t.placement,
                    });
                  },
                  data: {},
                },
                {
                  name: 'computeStyles',
                  enabled: !0,
                  phase: 'beforeWrite',
                  fn: function (e) {
                    var t = e.state,
                      r = e.options,
                      n = r.gpuAcceleration,
                      s = r.adaptive,
                      o = r.roundOffsets,
                      i = void 0 === o || o,
                      a = {
                        placement: e1(t.placement),
                        variation: td(t.placement),
                        popper: t.elements.popper,
                        popperRect: t.rects.popper,
                        gpuAcceleration: void 0 === n || n,
                        isFixed: 'fixed' === t.options.strategy,
                      };
                    null != t.modifiersData.popperOffsets &&
                      (t.styles.popper = Object.assign(
                        {},
                        t.styles.popper,
                        tp(
                          Object.assign({}, a, {
                            offsets: t.modifiersData.popperOffsets,
                            position: t.options.strategy,
                            adaptive: void 0 === s || s,
                            roundOffsets: i,
                          })
                        )
                      )),
                      null != t.modifiersData.arrow &&
                        (t.styles.arrow = Object.assign(
                          {},
                          t.styles.arrow,
                          tp(
                            Object.assign({}, a, {
                              offsets: t.modifiersData.arrow,
                              position: 'absolute',
                              adaptive: !1,
                              roundOffsets: i,
                            })
                          )
                        )),
                      (t.attributes.popper = Object.assign(
                        {},
                        t.attributes.popper,
                        { 'data-popper-placement': t.placement }
                      ));
                  },
                  data: {},
                },
                e0,
                {
                  name: 'offset',
                  enabled: !0,
                  phase: 'main',
                  requires: ['popperOffsets'],
                  fn: function (e) {
                    var t = e.state,
                      r = e.options,
                      n = e.name,
                      s = r.offset,
                      o = void 0 === s ? [0, 0] : s,
                      i = eZ.reduce(function (e, r) {
                        var n, s, i, a, l, c;
                        return (
                          (e[r] =
                            ((n = t.rects),
                            (i =
                              [eB, 'top'].indexOf((s = e1(r))) >= 0 ? -1 : 1),
                            (l = (a =
                              'function' == typeof o
                                ? o(Object.assign({}, n, { placement: r }))
                                : o)[0]),
                            (c = a[1]),
                            (l = l || 0),
                            (c = (c || 0) * i),
                            [eB, eD].indexOf(s) >= 0
                              ? { x: c, y: l }
                              : { x: l, y: c })),
                          e
                        );
                      }, {}),
                      a = i[t.placement],
                      l = a.x,
                      c = a.y;
                    null != t.modifiersData.popperOffsets &&
                      ((t.modifiersData.popperOffsets.x += l),
                      (t.modifiersData.popperOffsets.y += c)),
                      (t.modifiersData[n] = i);
                  },
                },
                {
                  name: 'flip',
                  enabled: !0,
                  phase: 'main',
                  fn: function (e) {
                    var t = e.state,
                      r = e.options,
                      n = e.name;
                    if (!t.modifiersData[n]._skip) {
                      for (
                        var s = r.mainAxis,
                          o = void 0 === s || s,
                          i = r.altAxis,
                          a = void 0 === i || i,
                          l = r.fallbackPlacements,
                          c = r.padding,
                          d = r.boundary,
                          u = r.rootBoundary,
                          p = r.altBoundary,
                          h = r.flipVariations,
                          m = void 0 === h || h,
                          f = r.allowedAutoPlacements,
                          g = t.options.placement,
                          x = e1(g),
                          y = x === g,
                          v =
                            l ||
                            (y || !m
                              ? [tf(g)]
                              : (function (e) {
                                  if (e1(e) === eH) return [];
                                  var t = tf(e);
                                  return [tx(e), t, tx(t)];
                                })(g)),
                          b = [g].concat(v).reduce(function (e, r) {
                            var n, s, o, i, a, l, p, h, g, x, y, v;
                            return e.concat(
                              e1(r) === eH
                                ? ((s = (n = {
                                    placement: r,
                                    boundary: d,
                                    rootBoundary: u,
                                    padding: c,
                                    flipVariations: m,
                                    allowedAutoPlacements: f,
                                  }).placement),
                                  (o = n.boundary),
                                  (i = n.rootBoundary),
                                  (a = n.padding),
                                  (l = n.flipVariations),
                                  (h =
                                    void 0 === (p = n.allowedAutoPlacements)
                                      ? eZ
                                      : p),
                                  0 ===
                                    (y = (x = (g = td(s))
                                      ? l
                                        ? eV
                                        : eV.filter(function (e) {
                                            return td(e) === g;
                                          })
                                      : eJ).filter(function (e) {
                                      return h.indexOf(e) >= 0;
                                    })).length && (y = x),
                                  Object.keys(
                                    (v = y.reduce(function (e, r) {
                                      return (
                                        (e[r] = tC(t, {
                                          placement: r,
                                          boundary: o,
                                          rootBoundary: i,
                                          padding: a,
                                        })[e1(r)]),
                                        e
                                      );
                                    }, {}))
                                  ).sort(function (e, t) {
                                    return v[e] - v[t];
                                  }))
                                : r
                            );
                          }, []),
                          w = t.rects.reference,
                          k = t.rects.popper,
                          j = new Map(),
                          N = !0,
                          C = b[0],
                          S = 0;
                        S < b.length;
                        S++
                      ) {
                        var E = b[S],
                          T = e1(E),
                          A = td(E) === e$,
                          O = ['top', eF].indexOf(T) >= 0,
                          R = O ? 'width' : 'height',
                          M = tC(t, {
                            placement: E,
                            boundary: d,
                            rootBoundary: u,
                            altBoundary: p,
                            padding: c,
                          }),
                          I = O ? (A ? eD : eB) : A ? eF : 'top';
                        w[R] > k[R] && (I = tf(I));
                        var z = tf(I),
                          _ = [];
                        if (
                          (o && _.push(M[T] <= 0),
                          a && _.push(M[I] <= 0, M[z] <= 0),
                          _.every(function (e) {
                            return e;
                          }))
                        ) {
                          (C = E), (N = !1);
                          break;
                        }
                        j.set(E, _);
                      }
                      if (N)
                        for (
                          var L = m ? 3 : 1,
                            P = function (e) {
                              var t = b.find(function (t) {
                                var r = j.get(t);
                                if (r)
                                  return r.slice(0, e).every(function (e) {
                                    return e;
                                  });
                              });
                              if (t) return (C = t), 'break';
                            },
                            F = L;
                          F > 0 && 'break' !== P(F);
                          F--
                        );
                      t.placement !== C &&
                        ((t.modifiersData[n]._skip = !0),
                        (t.placement = C),
                        (t.reset = !0));
                    }
                  },
                  requiresIfExists: ['offset'],
                  data: { _skip: !1 },
                },
                {
                  name: 'preventOverflow',
                  enabled: !0,
                  phase: 'main',
                  fn: function (e) {
                    var t = e.state,
                      r = e.options,
                      n = e.name,
                      s = r.mainAxis,
                      o = r.altAxis,
                      i = r.boundary,
                      a = r.rootBoundary,
                      l = r.altBoundary,
                      c = r.padding,
                      d = r.tether,
                      u = void 0 === d || d,
                      p = r.tetherOffset,
                      h = void 0 === p ? 0 : p,
                      m = tC(t, {
                        boundary: i,
                        rootBoundary: a,
                        padding: c,
                        altBoundary: l,
                      }),
                      f = e1(t.placement),
                      g = td(t.placement),
                      x = !g,
                      y = to(f),
                      v = 'x' === y ? 'y' : 'x',
                      b = t.modifiersData.popperOffsets,
                      w = t.rects.reference,
                      k = t.rects.popper,
                      j =
                        'function' == typeof h
                          ? h(
                              Object.assign({}, t.rects, {
                                placement: t.placement,
                              })
                            )
                          : h,
                      N =
                        'number' == typeof j
                          ? { mainAxis: j, altAxis: j }
                          : Object.assign({ mainAxis: 0, altAxis: 0 }, j),
                      C = t.modifiersData.offset
                        ? t.modifiersData.offset[t.placement]
                        : null,
                      S = { x: 0, y: 0 };
                    if (b) {
                      if (void 0 === s || s) {
                        var E,
                          T = 'y' === y ? 'top' : eB,
                          A = 'y' === y ? eF : eD,
                          O = 'y' === y ? 'height' : 'width',
                          R = b[y],
                          M = R + m[T],
                          I = R - m[A],
                          z = u ? -k[O] / 2 : 0,
                          _ = g === e$ ? w[O] : k[O],
                          L = g === e$ ? -k[O] : -w[O],
                          P = t.elements.arrow,
                          F = u && P ? e7(P) : { width: 0, height: 0 },
                          D = t.modifiersData['arrow#persistent']
                            ? t.modifiersData['arrow#persistent'].padding
                            : ta(),
                          B = D[T],
                          H = D[A],
                          J = ti(0, w[O], F[O]),
                          $ = x
                            ? w[O] / 2 - z - J - B - N.mainAxis
                            : _ - J - B - N.mainAxis,
                          q = x
                            ? -w[O] / 2 + z + J + H + N.mainAxis
                            : L + J + H + N.mainAxis,
                          U = t.elements.arrow && ts(t.elements.arrow),
                          V = U
                            ? 'y' === y
                              ? U.clientTop || 0
                              : U.clientLeft || 0
                            : 0,
                          Z = null != (E = null == C ? void 0 : C[y]) ? E : 0,
                          W = ti(
                            u ? e3(M, R + $ - Z - V) : M,
                            R,
                            u ? e2(I, R + q - Z) : I
                          );
                        (b[y] = W), (S[y] = W - R);
                      }
                      if (void 0 !== o && o) {
                        var Y,
                          K,
                          G = 'x' === y ? 'top' : eB,
                          X = 'x' === y ? eF : eD,
                          Q = b[v],
                          ee = 'y' === v ? 'height' : 'width',
                          et = Q + m[G],
                          er = Q - m[X],
                          en = -1 !== ['top', eB].indexOf(f),
                          es = null != (K = null == C ? void 0 : C[v]) ? K : 0,
                          eo = en ? et : Q - w[ee] - k[ee] - es + N.altAxis,
                          ei = en ? Q + w[ee] + k[ee] - es - N.altAxis : er,
                          ea =
                            u && en
                              ? (Y = ti(eo, Q, ei)) > ei
                                ? ei
                                : Y
                              : ti(u ? eo : et, Q, u ? ei : er);
                        (b[v] = ea), (S[v] = ea - Q);
                      }
                      t.modifiersData[n] = S;
                    }
                  },
                  requiresIfExists: ['offset'],
                },
                {
                  name: 'arrow',
                  enabled: !0,
                  phase: 'main',
                  fn: function (e) {
                    var t,
                      r = e.state,
                      n = e.name,
                      s = e.options,
                      o = r.elements.arrow,
                      i = r.modifiersData.popperOffsets,
                      a = e1(r.placement),
                      l = to(a),
                      c = [eB, eD].indexOf(a) >= 0 ? 'height' : 'width';
                    if (!(!o || !i)) {
                      var d,
                        u = tl(
                          'number' !=
                            typeof (d =
                              'function' == typeof (d = s.padding)
                                ? d(
                                    Object.assign({}, r.rects, {
                                      placement: r.placement,
                                    })
                                  )
                                : d)
                            ? d
                            : tc(d, eJ)
                        ),
                        p = e7(o),
                        h = 'y' === l ? 'top' : eB,
                        m = 'y' === l ? eF : eD,
                        f =
                          r.rects.reference[c] +
                          r.rects.reference[l] -
                          i[l] -
                          r.rects.popper[c],
                        g = i[l] - r.rects.reference[l],
                        x = ts(o),
                        y = x
                          ? 'y' === l
                            ? x.clientHeight || 0
                            : x.clientWidth || 0
                          : 0,
                        v = u[h],
                        b = y - p[c] - u[m],
                        w = y / 2 - p[c] / 2 + (f / 2 - g / 2),
                        k = ti(v, w, b);
                      r.modifiersData[n] =
                        (((t = {})[l] = k), (t.centerOffset = k - w), t);
                    }
                  },
                  effect: function (e) {
                    var t = e.state,
                      r = e.options.element,
                      n = void 0 === r ? '[data-popper-arrow]' : r;
                    null == n ||
                      (('string' != typeof n ||
                        (n = t.elements.popper.querySelector(n))) &&
                        e9(t.elements.popper, n) &&
                        (t.elements.arrow = n));
                  },
                  requires: ['popperOffsets'],
                  requiresIfExists: ['preventOverflow'],
                },
                {
                  name: 'hide',
                  enabled: !0,
                  phase: 'main',
                  requiresIfExists: ['preventOverflow'],
                  fn: function (e) {
                    var t = e.state,
                      r = e.name,
                      n = t.rects.reference,
                      s = t.rects.popper,
                      o = t.modifiersData.preventOverflow,
                      i = tC(t, { elementContext: 'reference' }),
                      a = tC(t, { altBoundary: !0 }),
                      l = tS(i, n),
                      c = tS(a, s, o),
                      d = tE(l),
                      u = tE(c);
                    (t.modifiersData[r] = {
                      referenceClippingOffsets: l,
                      popperEscapeOffsets: c,
                      isReferenceHidden: d,
                      hasPopperEscaped: u,
                    }),
                      (t.attributes.popper = Object.assign(
                        {},
                        t.attributes.popper,
                        {
                          'data-popper-reference-hidden': d,
                          'data-popper-escaped': u,
                        }
                      ));
                  },
                },
              ],
            }).defaultModifiers)
              ? []
              : s),
          (a = void 0 === (i = n.defaultOptions) ? tT : i),
          function (e, t, r) {
            void 0 === r && (r = a);
            var n,
              s = {
                placement: 'bottom',
                orderedModifiers: [],
                options: Object.assign({}, tT, a),
                modifiersData: {},
                elements: { reference: e, popper: t },
                attributes: {},
                styles: {},
              },
              i = [],
              l = !1,
              c = {
                state: s,
                setOptions: function (r) {
                  var n,
                    l,
                    u,
                    p,
                    h,
                    m = 'function' == typeof r ? r(s.options) : r;
                  d(),
                    (s.options = Object.assign({}, a, s.options, m)),
                    (s.scrollParents = {
                      reference: eG(e)
                        ? tw(e)
                        : e.contextElement
                          ? tw(e.contextElement)
                          : [],
                      popper: tw(t),
                    });
                  var f =
                    ((l = Object.keys(
                      (n = [].concat(o, s.options.modifiers).reduce(function (
                        e,
                        t
                      ) {
                        var r = e[t.name];
                        return (
                          (e[t.name] = r
                            ? Object.assign({}, r, t, {
                                options: Object.assign(
                                  {},
                                  r.options,
                                  t.options
                                ),
                                data: Object.assign({}, r.data, t.data),
                              })
                            : t),
                          e
                        );
                      }, {}))
                    ).map(function (e) {
                      return n[e];
                    })),
                    (u = new Map()),
                    (p = new Set()),
                    (h = []),
                    l.forEach(function (e) {
                      u.set(e.name, e);
                    }),
                    l.forEach(function (e) {
                      p.has(e.name) ||
                        (function e(t) {
                          p.add(t.name),
                            []
                              .concat(
                                t.requires || [],
                                t.requiresIfExists || []
                              )
                              .forEach(function (t) {
                                if (!p.has(t)) {
                                  var r = u.get(t);
                                  r && e(r);
                                }
                              }),
                            h.push(t);
                        })(e);
                    }),
                    eW.reduce(function (e, t) {
                      return e.concat(
                        h.filter(function (e) {
                          return e.phase === t;
                        })
                      );
                    }, []));
                  return (
                    (s.orderedModifiers = f.filter(function (e) {
                      return e.enabled;
                    })),
                    s.orderedModifiers.forEach(function (e) {
                      var t = e.name,
                        r = e.options,
                        n = e.effect;
                      if ('function' == typeof n) {
                        var o = n({
                          state: s,
                          name: t,
                          instance: c,
                          options: void 0 === r ? {} : r,
                        });
                        i.push(o || function () {});
                      }
                    }),
                    c.update()
                  );
                },
                forceUpdate: function () {
                  if (!l) {
                    var e = s.elements,
                      t = e.reference,
                      r = e.popper;
                    if (tA(t, r)) {
                      (s.rects = {
                        reference:
                          ((n = ts(r)),
                          (o = 'fixed' === s.options.strategy),
                          (u = eX(n)),
                          (p =
                            eX(n) &&
                            ((a =
                              e5((i = n.getBoundingClientRect()).width) /
                                n.offsetWidth || 1),
                            (d = e5(i.height) / n.offsetHeight || 1),
                            1 !== a || 1 !== d)),
                          (h = tt(n)),
                          (m = e6(t, p, o)),
                          (f = { scrollLeft: 0, scrollTop: 0 }),
                          (g = { x: 0, y: 0 }),
                          (u || (!u && !o)) &&
                            (('body' !== eY(n) || tb(h)) &&
                              (f =
                                n !== eK(n) && eX(n)
                                  ? {
                                      scrollLeft: n.scrollLeft,
                                      scrollTop: n.scrollTop,
                                    }
                                  : ty(n)),
                            eX(n)
                              ? ((g = e6(n, !0)),
                                (g.x += n.clientLeft),
                                (g.y += n.clientTop))
                              : h && (g.x = tv(h))),
                          {
                            x: m.left + f.scrollLeft - g.x,
                            y: m.top + f.scrollTop - g.y,
                            width: m.width,
                            height: m.height,
                          }),
                        popper: e7(r),
                      }),
                        (s.reset = !1),
                        (s.placement = s.options.placement),
                        s.orderedModifiers.forEach(function (e) {
                          return (s.modifiersData[e.name] = Object.assign(
                            {},
                            e.data
                          ));
                        });
                      for (
                        var n, o, i, a, d, u, p, h, m, f, g, x = 0;
                        x < s.orderedModifiers.length;
                        x++
                      ) {
                        if (!0 === s.reset) {
                          (s.reset = !1), (x = -1);
                          continue;
                        }
                        var y = s.orderedModifiers[x],
                          v = y.fn,
                          b = y.options,
                          w = void 0 === b ? {} : b,
                          k = y.name;
                        'function' == typeof v &&
                          (s =
                            v({ state: s, options: w, name: k, instance: c }) ||
                            s);
                      }
                    }
                  }
                },
                update: function () {
                  return (
                    n ||
                      (n = new Promise(function (e) {
                        Promise.resolve().then(function () {
                          (n = void 0),
                            e(
                              new Promise(function (e) {
                                c.forceUpdate(), e(s);
                              })
                            );
                        });
                      })),
                    n
                  );
                },
                destroy: function () {
                  d(), (l = !0);
                },
              };
            if (!tA(e, t)) return c;
            function d() {
              i.forEach(function (e) {
                return e();
              }),
                (i = []);
            }
            return (
              c.setOptions(r).then(function (e) {
                !l && r.onFirstUpdate && r.onFirstUpdate(e);
              }),
              c
            );
          }),
        tR = 'tippy-content',
        tM = 'tippy-arrow',
        tI = 'tippy-svg-arrow',
        tz = { passive: !0, capture: !0 },
        t_ = function () {
          return document.body;
        };
      function tL(e, t, r) {
        if (Array.isArray(e)) {
          var n = e[t];
          return null == n ? (Array.isArray(r) ? r[t] : r) : n;
        }
        return e;
      }
      function tP(e, t) {
        var r = {}.toString.call(e);
        return 0 === r.indexOf('[object') && r.indexOf(t + ']') > -1;
      }
      function tF(e, t) {
        return 'function' == typeof e ? e.apply(void 0, t) : e;
      }
      function tD(e, t) {
        var r;
        return 0 === t
          ? e
          : function (n) {
              clearTimeout(r),
                (r = setTimeout(function () {
                  e(n);
                }, t));
            };
      }
      function tB(e) {
        return [].concat(e);
      }
      function tH(e, t) {
        -1 === e.indexOf(t) && e.push(t);
      }
      function tJ(e) {
        return [].slice.call(e);
      }
      function t$(e) {
        return Object.keys(e).reduce(function (t, r) {
          return void 0 !== e[r] && (t[r] = e[r]), t;
        }, {});
      }
      function tq() {
        return document.createElement('div');
      }
      function tU(e) {
        return ['Element', 'Fragment'].some(function (t) {
          return tP(e, t);
        });
      }
      function tV(e, t) {
        e.forEach(function (e) {
          e && (e.style.transitionDuration = t + 'ms');
        });
      }
      function tZ(e, t) {
        e.forEach(function (e) {
          e && e.setAttribute('data-state', t);
        });
      }
      function tW(e, t, r) {
        var n = t + 'EventListener';
        ['transitionend', 'webkitTransitionEnd'].forEach(function (t) {
          e[n](t, r);
        });
      }
      function tY(e, t) {
        for (var r, n = t; n; ) {
          if (e.contains(n)) return !0;
          n =
            null == n.getRootNode || null == (r = n.getRootNode())
              ? void 0
              : r.host;
        }
        return !1;
      }
      var tK = { isTouch: !1 },
        tG = 0;
      function tX() {
        tK.isTouch ||
          ((tK.isTouch = !0),
          window.performance && document.addEventListener('mousemove', tQ));
      }
      function tQ() {
        var e = performance.now();
        e - tG < 20 &&
          ((tK.isTouch = !1), document.removeEventListener('mousemove', tQ)),
          (tG = e);
      }
      function t0() {
        var e = document.activeElement;
        if (e && e._tippy && e._tippy.reference === e) {
          var t = e._tippy;
          e.blur && !t.state.isVisible && e.blur();
        }
      }
      var t1 =
          !!('undefined' != typeof window && 'undefined' != typeof document) &&
          !!window.msCrypto,
        t2 = Object.assign(
          {
            appendTo: t_,
            aria: { content: 'auto', expanded: 'auto' },
            delay: 0,
            duration: [300, 250],
            getReferenceClientRect: null,
            hideOnClick: !0,
            ignoreAttributes: !1,
            interactive: !1,
            interactiveBorder: 2,
            interactiveDebounce: 0,
            moveTransition: '',
            offset: [0, 10],
            onAfterUpdate: function () {},
            onBeforeUpdate: function () {},
            onCreate: function () {},
            onDestroy: function () {},
            onHidden: function () {},
            onHide: function () {},
            onMount: function () {},
            onShow: function () {},
            onShown: function () {},
            onTrigger: function () {},
            onUntrigger: function () {},
            onClickOutside: function () {},
            placement: 'top',
            plugins: [],
            popperOptions: {},
            render: null,
            showOnCreate: !1,
            touch: !0,
            trigger: 'mouseenter focus',
            triggerTarget: null,
          },
          {
            animateFill: !1,
            followCursor: !1,
            inlinePositioning: !1,
            sticky: !1,
          },
          {
            allowHTML: !1,
            animation: 'fade',
            arrow: !0,
            content: '',
            inertia: !1,
            maxWidth: 350,
            role: 'tooltip',
            theme: '',
            zIndex: 9999,
          }
        ),
        t3 = Object.keys(t2);
      function t5(e) {
        var t = (e.plugins || []).reduce(function (t, r) {
          var n,
            s = r.name,
            o = r.defaultValue;
          return (
            s && (t[s] = void 0 !== e[s] ? e[s] : null != (n = t2[s]) ? n : o),
            t
          );
        }, {});
        return Object.assign({}, e, t);
      }
      function t4(e, t) {
        var r,
          n = Object.assign(
            {},
            t,
            { content: tF(t.content, [e]) },
            t.ignoreAttributes
              ? {}
              : ((r = t.plugins)
                  ? Object.keys(t5(Object.assign({}, t2, { plugins: r })))
                  : t3
                ).reduce(function (t, r) {
                  var n = (e.getAttribute('data-tippy-' + r) || '').trim();
                  if (!n) return t;
                  if ('content' === r) t[r] = n;
                  else
                    try {
                      t[r] = JSON.parse(n);
                    } catch (e) {
                      t[r] = n;
                    }
                  return t;
                }, {})
          );
        return (
          (n.aria = Object.assign({}, t2.aria, n.aria)),
          (n.aria = {
            expanded:
              'auto' === n.aria.expanded ? t.interactive : n.aria.expanded,
            content:
              'auto' === n.aria.content
                ? t.interactive
                  ? null
                  : 'describedby'
                : n.aria.content,
          }),
          n
        );
      }
      function t8(e, t) {
        e.innerHTML = t;
      }
      function t6(e) {
        var t = tq();
        return (
          !0 === e
            ? (t.className = tM)
            : ((t.className = tI), tU(e) ? t.appendChild(e) : t8(t, e)),
          t
        );
      }
      function t7(e, t) {
        tU(t.content)
          ? (t8(e, ''), e.appendChild(t.content))
          : 'function' != typeof t.content &&
            (t.allowHTML ? t8(e, t.content) : (e.textContent = t.content));
      }
      function t9(e) {
        var t = e.firstElementChild,
          r = tJ(t.children);
        return {
          box: t,
          content: r.find(function (e) {
            return e.classList.contains(tR);
          }),
          arrow: r.find(function (e) {
            return e.classList.contains(tM) || e.classList.contains(tI);
          }),
          backdrop: r.find(function (e) {
            return e.classList.contains('tippy-backdrop');
          }),
        };
      }
      function re(e) {
        var t = tq(),
          r = tq();
        (r.className = 'tippy-box'),
          r.setAttribute('data-state', 'hidden'),
          r.setAttribute('tabindex', '-1');
        var n = tq();
        function s(r, n) {
          var s = t9(t),
            o = s.box,
            i = s.content,
            a = s.arrow;
          n.theme
            ? o.setAttribute('data-theme', n.theme)
            : o.removeAttribute('data-theme'),
            'string' == typeof n.animation
              ? o.setAttribute('data-animation', n.animation)
              : o.removeAttribute('data-animation'),
            n.inertia
              ? o.setAttribute('data-inertia', '')
              : o.removeAttribute('data-inertia'),
            (o.style.maxWidth =
              'number' == typeof n.maxWidth ? n.maxWidth + 'px' : n.maxWidth),
            n.role ? o.setAttribute('role', n.role) : o.removeAttribute('role'),
            (r.content !== n.content || r.allowHTML !== n.allowHTML) &&
              t7(i, e.props),
            n.arrow
              ? a
                ? r.arrow !== n.arrow &&
                  (o.removeChild(a), o.appendChild(t6(n.arrow)))
                : o.appendChild(t6(n.arrow))
              : a && o.removeChild(a);
        }
        return (
          (n.className = tR),
          n.setAttribute('data-state', 'hidden'),
          t7(n, e.props),
          t.appendChild(r),
          r.appendChild(n),
          s(e.props, e.props),
          { popper: t, onUpdate: s }
        );
      }
      re.$$tippy = !0;
      var rt = 1,
        rr = [],
        rn = [];
      function rs(e, t) {
        void 0 === t && (t = {});
        var r = t2.plugins.concat(t.plugins || []);
        document.addEventListener('touchstart', tX, tz),
          window.addEventListener('blur', t0);
        var n = Object.assign({}, t, { plugins: r }),
          s = (
            tU(e)
              ? [e]
              : tP(e, 'NodeList')
                ? tJ(e)
                : Array.isArray(e)
                  ? e
                  : tJ(document.querySelectorAll(e))
          ).reduce(function (e, t) {
            var r =
              t &&
              (function (e, t) {
                var r,
                  n,
                  s,
                  o,
                  i,
                  a,
                  l,
                  c,
                  d = t4(e, Object.assign({}, t2, t5(t$(t)))),
                  u = !1,
                  p = !1,
                  h = !1,
                  m = !1,
                  f = [],
                  g = tD(U, d.interactiveDebounce),
                  x = rt++,
                  y = (r = d.plugins).filter(function (e, t) {
                    return r.indexOf(e) === t;
                  }),
                  v = {
                    id: x,
                    reference: e,
                    popper: tq(),
                    popperInstance: null,
                    props: d,
                    state: {
                      isEnabled: !0,
                      isVisible: !1,
                      isDestroyed: !1,
                      isMounted: !1,
                      isShown: !1,
                    },
                    plugins: y,
                    clearDelayTimeouts: function () {
                      clearTimeout(n), clearTimeout(s), cancelAnimationFrame(o);
                    },
                    setProps: function (t) {
                      if (!v.state.isDestroyed) {
                        R('onBeforeUpdate', [v, t]), $();
                        var r = v.props,
                          n = t4(
                            e,
                            Object.assign({}, r, t$(t), {
                              ignoreAttributes: !0,
                            })
                          );
                        (v.props = n),
                          J(),
                          r.interactiveDebounce !== n.interactiveDebounce &&
                            (z(), (g = tD(U, n.interactiveDebounce))),
                          r.triggerTarget && !n.triggerTarget
                            ? tB(r.triggerTarget).forEach(function (e) {
                                e.removeAttribute('aria-expanded');
                              })
                            : n.triggerTarget &&
                              e.removeAttribute('aria-expanded'),
                          I(),
                          O(),
                          k && k(r, n),
                          v.popperInstance &&
                            (Y(),
                            G().forEach(function (e) {
                              requestAnimationFrame(
                                e._tippy.popperInstance.forceUpdate
                              );
                            })),
                          R('onAfterUpdate', [v, t]);
                      }
                    },
                    setContent: function (e) {
                      v.setProps({ content: e });
                    },
                    show: function () {
                      var t = v.state.isVisible,
                        r = v.state.isDestroyed,
                        n = !v.state.isEnabled,
                        s = tK.isTouch && !v.props.touch,
                        o = tL(v.props.duration, 0, t2.duration);
                      if (
                        !(t || r || n || s) &&
                        !(c || e).hasAttribute('disabled') &&
                        (R('onShow', [v], !1), !1 !== v.props.onShow(v))
                      ) {
                        if (
                          ((v.state.isVisible = !0),
                          E() && (w.style.visibility = 'visible'),
                          O(),
                          F(),
                          v.state.isMounted || (w.style.transition = 'none'),
                          E())
                        ) {
                          var i,
                            a,
                            d,
                            u = t9(w);
                          tV([u.box, u.content], 0);
                        }
                        (l = function () {
                          var e;
                          if (!(!v.state.isVisible || m)) {
                            if (
                              ((m = !0),
                              w.offsetHeight,
                              (w.style.transition = v.props.moveTransition),
                              E() && v.props.animation)
                            ) {
                              var t = t9(w),
                                r = t.box,
                                n = t.content;
                              tV([r, n], o), tZ([r, n], 'visible');
                            }
                            M(),
                              I(),
                              tH(rn, v),
                              null == (e = v.popperInstance) || e.forceUpdate(),
                              R('onMount', [v]),
                              v.props.animation &&
                                E() &&
                                B(o, function () {
                                  (v.state.isShown = !0), R('onShown', [v]);
                                });
                          }
                        }),
                          (a = v.props.appendTo),
                          (d = c || e),
                          (i =
                            (v.props.interactive && a === t_) || 'parent' === a
                              ? d.parentNode
                              : tF(a, [d])).contains(w) || i.appendChild(w),
                          (v.state.isMounted = !0),
                          Y();
                      }
                    },
                    hide: function () {
                      var e = !v.state.isVisible,
                        t = v.state.isDestroyed,
                        r = !v.state.isEnabled,
                        n = tL(v.props.duration, 1, t2.duration);
                      if (
                        !(e || t || r) &&
                        (R('onHide', [v], !1), !1 !== v.props.onHide(v))
                      ) {
                        if (
                          ((v.state.isVisible = !1),
                          (v.state.isShown = !1),
                          (m = !1),
                          (u = !1),
                          E() && (w.style.visibility = 'hidden'),
                          z(),
                          D(),
                          O(!0),
                          E())
                        ) {
                          var s,
                            o = t9(w),
                            i = o.box,
                            a = o.content;
                          v.props.animation &&
                            (tV([i, a], n), tZ([i, a], 'hidden'));
                        }
                        M(),
                          I(),
                          v.props.animation
                            ? E() &&
                              ((s = v.unmount),
                              B(n, function () {
                                !v.state.isVisible &&
                                  w.parentNode &&
                                  w.parentNode.contains(w) &&
                                  s();
                              }))
                            : v.unmount();
                      }
                    },
                    hideWithInteractivity: function (e) {
                      T().addEventListener('mousemove', g), tH(rr, g), g(e);
                    },
                    enable: function () {
                      v.state.isEnabled = !0;
                    },
                    disable: function () {
                      v.hide(), (v.state.isEnabled = !1);
                    },
                    unmount: function () {
                      v.state.isVisible && v.hide(),
                        v.state.isMounted &&
                          (K(),
                          G().forEach(function (e) {
                            e._tippy.unmount();
                          }),
                          w.parentNode && w.parentNode.removeChild(w),
                          (rn = rn.filter(function (e) {
                            return e !== v;
                          })),
                          (v.state.isMounted = !1),
                          R('onHidden', [v]));
                    },
                    destroy: function () {
                      v.state.isDestroyed ||
                        (v.clearDelayTimeouts(),
                        v.unmount(),
                        $(),
                        delete e._tippy,
                        (v.state.isDestroyed = !0),
                        R('onDestroy', [v]));
                    },
                  };
                if (!d.render) return v;
                var b = d.render(v),
                  w = b.popper,
                  k = b.onUpdate;
                w.setAttribute('data-tippy-root', ''),
                  (w.id = 'tippy-' + v.id),
                  (v.popper = w),
                  (e._tippy = v),
                  (w._tippy = v);
                var j = y.map(function (e) {
                    return e.fn(v);
                  }),
                  N = e.hasAttribute('aria-expanded');
                return (
                  J(),
                  I(),
                  O(),
                  R('onCreate', [v]),
                  d.showOnCreate && X(),
                  w.addEventListener('mouseenter', function () {
                    v.props.interactive &&
                      v.state.isVisible &&
                      v.clearDelayTimeouts();
                  }),
                  w.addEventListener('mouseleave', function () {
                    v.props.interactive &&
                      v.props.trigger.indexOf('mouseenter') >= 0 &&
                      T().addEventListener('mousemove', g);
                  }),
                  v
                );
                function C() {
                  var e = v.props.touch;
                  return Array.isArray(e) ? e : [e, 0];
                }
                function S() {
                  return 'hold' === C()[0];
                }
                function E() {
                  var e;
                  return !!(null != (e = v.props.render) && e.$$tippy);
                }
                function T() {
                  var t,
                    r,
                    n = (c || e).parentNode;
                  return n &&
                    null != (r = tB(n)[0]) &&
                    null != (t = r.ownerDocument) &&
                    t.body
                    ? r.ownerDocument
                    : document;
                }
                function A(e) {
                  return (v.state.isMounted && !v.state.isVisible) ||
                    tK.isTouch ||
                    (i && 'focus' === i.type)
                    ? 0
                    : tL(v.props.delay, e ? 0 : 1, t2.delay);
                }
                function O(e) {
                  void 0 === e && (e = !1),
                    (w.style.pointerEvents =
                      v.props.interactive && !e ? '' : 'none'),
                    (w.style.zIndex = '' + v.props.zIndex);
                }
                function R(e, t, r) {
                  if (
                    (void 0 === r && (r = !0),
                    j.forEach(function (r) {
                      r[e] && r[e].apply(r, t);
                    }),
                    r)
                  ) {
                    var n;
                    (n = v.props)[e].apply(n, t);
                  }
                }
                function M() {
                  var t = v.props.aria;
                  if (t.content) {
                    var r = 'aria-' + t.content,
                      n = w.id;
                    tB(v.props.triggerTarget || e).forEach(function (e) {
                      var t = e.getAttribute(r);
                      if (v.state.isVisible)
                        e.setAttribute(r, t ? t + ' ' + n : n);
                      else {
                        var s = t && t.replace(n, '').trim();
                        s ? e.setAttribute(r, s) : e.removeAttribute(r);
                      }
                    });
                  }
                }
                function I() {
                  N ||
                    !v.props.aria.expanded ||
                    tB(v.props.triggerTarget || e).forEach(function (t) {
                      v.props.interactive
                        ? t.setAttribute(
                            'aria-expanded',
                            v.state.isVisible && t === (c || e)
                              ? 'true'
                              : 'false'
                          )
                        : t.removeAttribute('aria-expanded');
                    });
                }
                function z() {
                  T().removeEventListener('mousemove', g),
                    (rr = rr.filter(function (e) {
                      return e !== g;
                    }));
                }
                function _(t) {
                  if (!(tK.isTouch && (h || 'mousedown' === t.type))) {
                    var r = (t.composedPath && t.composedPath()[0]) || t.target;
                    if (!(v.props.interactive && tY(w, r))) {
                      if (
                        tB(v.props.triggerTarget || e).some(function (e) {
                          return tY(e, r);
                        })
                      ) {
                        if (
                          tK.isTouch ||
                          (v.state.isVisible &&
                            v.props.trigger.indexOf('click') >= 0)
                        )
                          return;
                      } else R('onClickOutside', [v, t]);
                      !0 === v.props.hideOnClick &&
                        (v.clearDelayTimeouts(),
                        v.hide(),
                        (p = !0),
                        setTimeout(function () {
                          p = !1;
                        }),
                        v.state.isMounted || D());
                    }
                  }
                }
                function L() {
                  h = !0;
                }
                function P() {
                  h = !1;
                }
                function F() {
                  var e = T();
                  e.addEventListener('mousedown', _, !0),
                    e.addEventListener('touchend', _, tz),
                    e.addEventListener('touchstart', P, tz),
                    e.addEventListener('touchmove', L, tz);
                }
                function D() {
                  var e = T();
                  e.removeEventListener('mousedown', _, !0),
                    e.removeEventListener('touchend', _, tz),
                    e.removeEventListener('touchstart', P, tz),
                    e.removeEventListener('touchmove', L, tz);
                }
                function B(e, t) {
                  var r = t9(w).box;
                  function n(e) {
                    e.target === r && (tW(r, 'remove', n), t());
                  }
                  if (0 === e) return t();
                  tW(r, 'remove', a), tW(r, 'add', n), (a = n);
                }
                function H(t, r, n) {
                  void 0 === n && (n = !1),
                    tB(v.props.triggerTarget || e).forEach(function (e) {
                      e.addEventListener(t, r, n),
                        f.push({
                          node: e,
                          eventType: t,
                          handler: r,
                          options: n,
                        });
                    });
                }
                function J() {
                  S() &&
                    (H('touchstart', q, { passive: !0 }),
                    H('touchend', V, { passive: !0 })),
                    v.props.trigger
                      .split(/\s+/)
                      .filter(Boolean)
                      .forEach(function (e) {
                        if ('manual' !== e)
                          switch ((H(e, q), e)) {
                            case 'mouseenter':
                              H('mouseleave', V);
                              break;
                            case 'focus':
                              H(t1 ? 'focusout' : 'blur', Z);
                              break;
                            case 'focusin':
                              H('focusout', Z);
                          }
                      });
                }
                function $() {
                  f.forEach(function (e) {
                    var t = e.node,
                      r = e.eventType,
                      n = e.handler,
                      s = e.options;
                    t.removeEventListener(r, n, s);
                  }),
                    (f = []);
                }
                function q(e) {
                  var t,
                    r = !1;
                  if (!(!v.state.isEnabled || W(e) || p)) {
                    var n = (null == (t = i) ? void 0 : t.type) === 'focus';
                    (i = e),
                      (c = e.currentTarget),
                      I(),
                      !v.state.isVisible &&
                        tP(e, 'MouseEvent') &&
                        rr.forEach(function (t) {
                          return t(e);
                        }),
                      'click' === e.type &&
                      (0 > v.props.trigger.indexOf('mouseenter') || u) &&
                      !1 !== v.props.hideOnClick &&
                      v.state.isVisible
                        ? (r = !0)
                        : X(e),
                      'click' === e.type && (u = !r),
                      r && !n && Q(e);
                  }
                }
                function U(t) {
                  var r,
                    n,
                    s,
                    o = t.target,
                    i = (c || e).contains(o) || w.contains(o);
                  !('mousemove' === t.type && i) &&
                    ((r = G()
                      .concat(w)
                      .map(function (e) {
                        var t,
                          r =
                            null == (t = e._tippy.popperInstance)
                              ? void 0
                              : t.state;
                        return r
                          ? {
                              popperRect: e.getBoundingClientRect(),
                              popperState: r,
                              props: d,
                            }
                          : null;
                      })
                      .filter(Boolean)),
                    (n = t.clientX),
                    (s = t.clientY),
                    r.every(function (e) {
                      var t = e.popperRect,
                        r = e.popperState,
                        o = e.props.interactiveBorder,
                        i = r.placement.split('-')[0],
                        a = r.modifiersData.offset;
                      if (!a) return !0;
                      var l = 'bottom' === i ? a.top.y : 0,
                        c = 'top' === i ? a.bottom.y : 0,
                        d = 'right' === i ? a.left.x : 0,
                        u = 'left' === i ? a.right.x : 0,
                        p = t.top - s + l > o,
                        h = s - t.bottom - c > o,
                        m = t.left - n + d > o,
                        f = n - t.right - u > o;
                      return p || h || m || f;
                    }) && (z(), Q(t)));
                }
                function V(e) {
                  if (!(W(e) || (v.props.trigger.indexOf('click') >= 0 && u))) {
                    if (v.props.interactive) {
                      v.hideWithInteractivity(e);
                      return;
                    }
                    Q(e);
                  }
                }
                function Z(t) {
                  (0 > v.props.trigger.indexOf('focusin') &&
                    t.target !== (c || e)) ||
                    (v.props.interactive &&
                      t.relatedTarget &&
                      w.contains(t.relatedTarget)) ||
                    Q(t);
                }
                function W(e) {
                  return !!tK.isTouch && S() !== e.type.indexOf('touch') >= 0;
                }
                function Y() {
                  K();
                  var t = v.props,
                    r = t.popperOptions,
                    n = t.placement,
                    s = t.offset,
                    o = t.getReferenceClientRect,
                    i = t.moveTransition,
                    a = E() ? t9(w).arrow : null,
                    d = o
                      ? {
                          getBoundingClientRect: o,
                          contextElement: o.contextElement || c || e,
                        }
                      : e,
                    u = [
                      { name: 'offset', options: { offset: s } },
                      {
                        name: 'preventOverflow',
                        options: {
                          padding: { top: 2, bottom: 2, left: 5, right: 5 },
                        },
                      },
                      { name: 'flip', options: { padding: 5 } },
                      { name: 'computeStyles', options: { adaptive: !i } },
                      {
                        name: '$$tippy',
                        enabled: !0,
                        phase: 'beforeWrite',
                        requires: ['computeStyles'],
                        fn: function (e) {
                          var t = e.state;
                          if (E()) {
                            var r = t9(w).box;
                            [
                              'placement',
                              'reference-hidden',
                              'escaped',
                            ].forEach(function (e) {
                              'placement' === e
                                ? r.setAttribute('data-placement', t.placement)
                                : t.attributes.popper['data-popper-' + e]
                                  ? r.setAttribute('data-' + e, '')
                                  : r.removeAttribute('data-' + e);
                            }),
                              (t.attributes.popper = {});
                          }
                        },
                      },
                    ];
                  E() &&
                    a &&
                    u.push({
                      name: 'arrow',
                      options: { element: a, padding: 3 },
                    }),
                    u.push.apply(u, (null == r ? void 0 : r.modifiers) || []),
                    (v.popperInstance = tO(
                      d,
                      w,
                      Object.assign({}, r, {
                        placement: n,
                        onFirstUpdate: l,
                        modifiers: u,
                      })
                    ));
                }
                function K() {
                  v.popperInstance &&
                    (v.popperInstance.destroy(), (v.popperInstance = null));
                }
                function G() {
                  return tJ(w.querySelectorAll('[data-tippy-root]'));
                }
                function X(e) {
                  v.clearDelayTimeouts(), e && R('onTrigger', [v, e]), F();
                  var t = A(!0),
                    r = C(),
                    s = r[0],
                    o = r[1];
                  tK.isTouch && 'hold' === s && o && (t = o),
                    t
                      ? (n = setTimeout(function () {
                          v.show();
                        }, t))
                      : v.show();
                }
                function Q(e) {
                  if (
                    (v.clearDelayTimeouts(),
                    R('onUntrigger', [v, e]),
                    !v.state.isVisible)
                  ) {
                    D();
                    return;
                  }
                  if (
                    !(
                      v.props.trigger.indexOf('mouseenter') >= 0 &&
                      v.props.trigger.indexOf('click') >= 0 &&
                      ['mouseleave', 'mousemove'].indexOf(e.type) >= 0 &&
                      u
                    )
                  ) {
                    var t = A(!1);
                    t
                      ? (s = setTimeout(function () {
                          v.state.isVisible && v.hide();
                        }, t))
                      : (o = requestAnimationFrame(function () {
                          v.hide();
                        }));
                  }
                }
              })(t, n);
            return r && e.push(r), e;
          }, []);
        return tU(e) ? s[0] : s;
      }
      (rs.defaultProps = t2),
        (rs.setDefaultProps = function (e) {
          Object.keys(e).forEach(function (t) {
            t2[t] = e[t];
          });
        }),
        (rs.currentInput = tK),
        Object.assign({}, e0, {
          effect: function (e) {
            var t = e.state,
              r = {
                popper: {
                  position: t.options.strategy,
                  left: '0',
                  top: '0',
                  margin: '0',
                },
                arrow: { position: 'absolute' },
                reference: {},
              };
            Object.assign(t.elements.popper.style, r.popper),
              (t.styles = r),
              t.elements.arrow &&
                Object.assign(t.elements.arrow.style, r.arrow);
          },
        }),
        rs.setDefaultProps({ render: re });
      var ro = class {
          constructor({
            editor: e,
            element: t,
            view: r,
            tippyOptions: n = {},
            updateDelay: s = 250,
            shouldShow: o,
          }) {
            (this.preventHide = !1),
              (this.shouldShow = ({ view: e, state: t, from: r, to: n }) => {
                let { doc: s, selection: o } = t,
                  { empty: i } = o,
                  a =
                    !s.textBetween(r, n).length &&
                    (0, p.isTextSelection)(t.selection),
                  l = this.element.contains(document.activeElement);
                return !(
                  !(e.hasFocus() || l) ||
                  i ||
                  a ||
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
                let r = !(null != t && t.selection.eq(e.state.selection)),
                  n = !(null != t && t.doc.eq(e.state.doc));
                (r || n) &&
                  (this.updateDebounceTimer &&
                    clearTimeout(this.updateDebounceTimer),
                  (this.updateDebounceTimer = window.setTimeout(() => {
                    this.updateHandler(e, r, n, t);
                  }, this.updateDelay)));
              }),
              (this.updateHandler = (e, t, r, n) => {
                var s, o, i;
                let { state: a, composing: l } = e,
                  { selection: c } = a;
                if (l || (!t && !r)) return;
                this.createTooltip();
                let { ranges: d } = c,
                  u = Math.min(...d.map(e => e.$from.pos)),
                  h = Math.max(...d.map(e => e.$to.pos));
                if (
                  !(null === (s = this.shouldShow) || void 0 === s
                    ? void 0
                    : s.call(this, {
                        editor: this.editor,
                        view: e,
                        state: a,
                        oldState: n,
                        from: u,
                        to: h,
                      }))
                ) {
                  this.hide();
                  return;
                }
                null === (o = this.tippy) ||
                  void 0 === o ||
                  o.setProps({
                    getReferenceClientRect:
                      (null === (i = this.tippyOptions) || void 0 === i
                        ? void 0
                        : i.getReferenceClientRect) ||
                      (() => {
                        if ((0, p.isNodeSelection)(a.selection)) {
                          let t = e.nodeDOM(u),
                            r = t.dataset.nodeViewWrapper
                              ? t
                              : t.querySelector('[data-node-view-wrapper]');
                          if ((r && (t = r.firstChild), t))
                            return t.getBoundingClientRect();
                        }
                        return (0, p.posToDOMRect)(e, u, h);
                      }),
                  }),
                  this.show();
              }),
              (this.editor = e),
              (this.element = t),
              (this.view = r),
              (this.updateDelay = s),
              o && (this.shouldShow = o),
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
              ((this.tippy = rs(
                e,
                E(
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
            let { state: r } = e,
              n = r.selection.$from.pos !== r.selection.$to.pos;
            if (this.updateDelay > 0 && n) {
              this.handleDebouncedUpdate(e, t);
              return;
            }
            let s = !(null != t && t.selection.eq(e.state.selection)),
              o = !(null != t && t.doc.eq(e.state.doc));
            this.updateHandler(e, s, o, t);
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
        ri = e =>
          new ez({
            key:
              'string' == typeof e.pluginKey
                ? new eP(e.pluginKey)
                : e.pluginKey,
            view: t => new ro(E({ view: t }, e)),
          });
      p.Extension.create({
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
                ri({
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
        O(M, p, 'default'),
        l && O(l, p, 'default');
      var ra = class {
          constructor({
            editor: e,
            element: t,
            view: r,
            tippyOptions: n = {},
            shouldShow: s,
          }) {
            (this.preventHide = !1),
              (this.shouldShow = ({ view: e, state: t }) => {
                let { selection: r } = t,
                  { $anchor: n, empty: s } = r,
                  o = 1 === n.depth,
                  i =
                    n.parent.isTextblock &&
                    !n.parent.type.spec.code &&
                    !n.parent.textContent;
                return !(
                  !e.hasFocus() ||
                  !s ||
                  !o ||
                  !i ||
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
              (this.view = r),
              s && (this.shouldShow = s),
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
              ((this.tippy = rs(
                e,
                E(
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
            var r, n, s;
            let { state: o } = e,
              { doc: i, selection: a } = o,
              { from: l, to: c } = a;
            if (!(t && t.doc.eq(i) && t.selection.eq(a))) {
              if (
                (this.createTooltip(),
                !(null === (r = this.shouldShow) || void 0 === r
                  ? void 0
                  : r.call(this, {
                      editor: this.editor,
                      view: e,
                      state: o,
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
                    (null === (s = this.tippyOptions) || void 0 === s
                      ? void 0
                      : s.getReferenceClientRect) ||
                    (() => (0, p.posToDOMRect)(e, l, c)),
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
        rl = e =>
          new ez({
            key:
              'string' == typeof e.pluginKey
                ? new eP(e.pluginKey)
                : e.pluginKey,
            view: t => new ra(E({ view: t }, e)),
          });
      p.Extension.create({
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
                rl({
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
      var rc = ({ renderers: e }) =>
          d.createElement(
            d.Fragment,
            null,
            Object.entries(e).map(([e, t]) =>
              h.createPortal(t.reactElement, t.element, e)
            )
          ),
        rd = class extends d.Component {
          constructor(e) {
            super(e),
              (this.editorContentRef = d.createRef()),
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
            this.initialized ? (0, h.flushSync)(e) : e();
          }
          setRenderer(e, t) {
            this.maybeFlushSync(() => {
              this.setState(({ renderers: r }) => ({
                renderers: T(E({}, r), { [e]: t }),
              }));
            });
          }
          removeRenderer(e) {
            this.maybeFlushSync(() => {
              this.setState(({ renderers: t }) => {
                let r = E({}, t);
                return delete r[e], { renderers: r };
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
              r = A(e, ['editor']);
            return d.createElement(
              d.Fragment,
              null,
              d.createElement('div', E({ ref: this.editorContentRef }, r)),
              d.createElement(rc, { renderers: this.state.renderers })
            );
          }
        },
        ru = d.memo(e => {
          let t = d.useMemo(
            () => Math.floor(4294967295 * Math.random()).toString(),
            [e.editor]
          );
          return d.createElement(rd, E({ key: t }, e));
        }),
        rp = class extends p.Editor {
          constructor() {
            super(...arguments), (this.contentComponent = null);
          }
        },
        rh = (e = {}, t = []) => {
          let [r, n] = (0, d.useState)(null),
            s = (function () {
              let [, e] = (0, d.useState)(0);
              return () => e(e => e + 1);
            })(),
            {
              onBeforeCreate: o,
              onBlur: i,
              onCreate: a,
              onDestroy: l,
              onFocus: c,
              onSelectionUpdate: u,
              onTransaction: p,
              onUpdate: h,
            } = e,
            m = (0, d.useRef)(o),
            f = (0, d.useRef)(i),
            g = (0, d.useRef)(a),
            x = (0, d.useRef)(l),
            y = (0, d.useRef)(c),
            v = (0, d.useRef)(u),
            b = (0, d.useRef)(p),
            w = (0, d.useRef)(h);
          return (
            (0, d.useEffect)(() => {
              r &&
                (o &&
                  (r.off('beforeCreate', m.current),
                  r.on('beforeCreate', o),
                  (m.current = o)),
                i &&
                  (r.off('blur', f.current), r.on('blur', i), (f.current = i)),
                a &&
                  (r.off('create', g.current),
                  r.on('create', a),
                  (g.current = a)),
                l &&
                  (r.off('destroy', x.current),
                  r.on('destroy', l),
                  (x.current = l)),
                c &&
                  (r.off('focus', y.current),
                  r.on('focus', c),
                  (y.current = c)),
                u &&
                  (r.off('selectionUpdate', v.current),
                  r.on('selectionUpdate', u),
                  (v.current = u)),
                p &&
                  (r.off('transaction', b.current),
                  r.on('transaction', p),
                  (b.current = p)),
                h &&
                  (r.off('update', w.current),
                  r.on('update', h),
                  (w.current = h)));
            }, [o, i, a, l, c, u, p, h, r]),
            (0, d.useEffect)(() => {
              let t = !0,
                r = new rp(e);
              return (
                n(r),
                r.on('transaction', () => {
                  requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                      t && s();
                    });
                  });
                }),
                () => {
                  t = !1;
                }
              );
            }, t),
            (0, d.useEffect)(
              () => () => {
                null == r || r.destroy();
              },
              [r]
            ),
            r
          );
        },
        rm = (0, d.createContext)({ editor: null }),
        rf = rm.Consumer,
        rg = () => (0, d.useContext)(rm),
        rx = e => {
          var { children: t, slotAfter: r, slotBefore: n } = e;
          let s = rh(A(e, ['children', 'slotAfter', 'slotBefore']));
          return s
            ? d.createElement(
                rm.Provider,
                { value: { editor: s } },
                n,
                d.createElement(rf, null, ({ editor: e }) =>
                  d.createElement(ru, { editor: e })
                ),
                t,
                r
              )
            : null;
        },
        ry = e => {
          let [t, r] = (0, d.useState)(null),
            { editor: n } = rg();
          return (
            (0, d.useEffect)(() => {
              var r;
              if (
                !t ||
                (!(null === (r = e.editor) || void 0 === r) && r.isDestroyed) ||
                (null != n && n.isDestroyed)
              )
                return;
              let {
                  pluginKey: s = 'bubbleMenu',
                  editor: o,
                  tippyOptions: i = {},
                  updateDelay: a,
                  shouldShow: l = null,
                } = e,
                c = o || n;
              if (!c) {
                console.warn(
                  'BubbleMenu component is not rendered inside of an editor component or does not have editor prop.'
                );
                return;
              }
              let d = ri({
                updateDelay: a,
                editor: c,
                element: t,
                pluginKey: s,
                shouldShow: l,
                tippyOptions: i,
              });
              return c.registerPlugin(d), () => c.unregisterPlugin(s);
            }, [e.editor, n, t]),
            d.createElement(
              'div',
              {
                ref: r,
                className: e.className,
                style: { visibility: 'hidden' },
              },
              e.children
            )
          );
        },
        rv = e => {
          let [t, r] = (0, d.useState)(null),
            { editor: n } = rg();
          return (
            (0, d.useEffect)(() => {
              var r;
              if (
                !t ||
                (!(null === (r = e.editor) || void 0 === r) && r.isDestroyed) ||
                (null != n && n.isDestroyed)
              )
                return;
              let {
                  pluginKey: s = 'floatingMenu',
                  editor: o,
                  tippyOptions: i = {},
                  shouldShow: a = null,
                } = e,
                l = o || n;
              if (!l) {
                console.warn(
                  'FloatingMenu component is not rendered inside of an editor component or does not have editor prop.'
                );
                return;
              }
              let c = rl({
                pluginKey: s,
                editor: l,
                element: t,
                tippyOptions: i,
                shouldShow: a,
              });
              return l.registerPlugin(c), () => l.unregisterPlugin(s);
            }, [e.editor, n, t]),
            d.createElement(
              'div',
              {
                ref: r,
                className: e.className,
                style: { visibility: 'hidden' },
              },
              e.children
            )
          );
        },
        rb = (0, d.createContext)({ onDragStart: void 0 }),
        rw = () => (0, d.useContext)(rb),
        rk = e => {
          let t = e.as || 'div',
            { nodeViewContentRef: r } = rw();
          return d.createElement(
            t,
            T(E({}, e), {
              ref: r,
              'data-node-view-content': '',
              style: E({ whiteSpace: 'pre-wrap' }, e.style),
            })
          );
        },
        rj = d.forwardRef((e, t) => {
          let { onDragStart: r } = rw(),
            n = e.as || 'div';
          return d.createElement(
            n,
            T(E({}, e), {
              ref: t,
              'data-node-view-wrapper': '',
              onDragStart: r,
              style: E({ whiteSpace: 'normal' }, e.style),
            })
          );
        }),
        rN = class {
          constructor(
            e,
            {
              editor: t,
              props: r = {},
              as: n = 'div',
              className: s = '',
              attrs: o,
            }
          ) {
            (this.ref = null),
              (this.id = Math.floor(4294967295 * Math.random()).toString()),
              (this.component = e),
              (this.editor = t),
              (this.props = r),
              (this.element = document.createElement(n)),
              this.element.classList.add('react-renderer'),
              s && this.element.classList.add(...s.split(' ')),
              o &&
                Object.keys(o).forEach(e => {
                  this.element.setAttribute(e, o[e]);
                }),
              this.render();
          }
          render() {
            var e, t, r;
            let n = this.component,
              s = this.props;
            (('function' == typeof n &&
              n.prototype &&
              n.prototype.isReactComponent) ||
              ('object' == typeof n &&
                (null === (r = n.$$typeof) || void 0 === r
                  ? void 0
                  : r.toString()) === 'Symbol(react.forward_ref)')) &&
              (s.ref = e => {
                this.ref = e;
              }),
              (this.reactElement = d.createElement(n, E({}, s))),
              null ===
                (t =
                  null === (e = this.editor) || void 0 === e
                    ? void 0
                    : e.contentComponent) ||
                void 0 === t ||
                t.setRenderer(this.id, this);
          }
          updateProps(e = {}) {
            (this.props = E(E({}, this.props), e)), this.render();
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
        rC = class extends p.NodeView {
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
            let r = e => {
              let t = this.component,
                r = this.onDragStart.bind(this);
              return d.createElement(
                d.Fragment,
                null,
                d.createElement(
                  rb.Provider,
                  {
                    value: {
                      onDragStart: r,
                      nodeViewContentRef: e => {
                        e &&
                          this.contentDOMElement &&
                          e.firstChild !== this.contentDOMElement &&
                          e.appendChild(this.contentDOMElement);
                      },
                    },
                  },
                  d.createElement(t, E({}, e))
                )
              );
            };
            (r.displayName = 'ReactNodeView'),
              (this.contentDOMElement = this.node.isLeaf
                ? null
                : document.createElement(this.node.isInline ? 'span' : 'div')),
              this.contentDOMElement &&
                (this.contentDOMElement.style.whiteSpace = 'inherit');
            let n = this.node.isInline ? 'span' : 'div';
            this.options.as && (n = this.options.as);
            let { className: s = '' } = this.options;
            (this.handleSelectionUpdate =
              this.handleSelectionUpdate.bind(this)),
              this.editor.on('selectionUpdate', this.handleSelectionUpdate),
              (this.renderer = new rN(r, {
                editor: this.editor,
                props: e,
                as: n,
                className: `node-${this.node.type.name} ${s}`.trim(),
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
            let r = e => {
              this.renderer.updateProps(e);
            };
            if (e.type !== this.node.type) return !1;
            if ('function' == typeof this.options.update) {
              let n = this.node,
                s = this.decorations;
              return (
                (this.node = e),
                (this.decorations = t),
                this.options.update({
                  oldNode: n,
                  oldDecorations: s,
                  newNode: e,
                  newDecorations: t,
                  updateProps: () => r({ node: e, decorations: t }),
                })
              );
            }
            return (
              (e === this.node && this.decorations === t) ||
                ((this.node = e),
                (this.decorations = t),
                r({ node: e, decorations: t })),
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
      function rS(e, t) {
        return r => (r.editor.contentComponent ? new rC(e, r, t) : {});
      }
      var rE = ({ editor: e, isOpen: t, setIsOpen: r }) => {
          var n;
          let s = [
              (0, c.Jy)(e),
              (0, c.zj)(e),
              (0, c.qU)(e),
              (0, c.VZ)(e),
              (0, c.wB)(e),
              (0, c.DC)(e),
              (0, c.H7)(e),
              (0, c.yx)(e),
              (0, c.sp)(e),
              (0, c.vh)(e),
              (0, c.IP)(e),
              (0, c.ey)(e),
            ],
            o =
              null != (n = s.filter(e => e.isActive()).pop())
                ? n
                : { name: 'Multiple' };
          return (0, g.jsxs)('div', {
            className: 'relative h-full',
            children: [
              (0, g.jsxs)('button', {
                type: 'button',
                onClick: e => {
                  r(!t), e.stopPropagation();
                },
                className:
                  'flex h-full items-center gap-1 whitespace-nowrap p-2 text-sm font-medium text-custom-text-300 hover:bg-custom-primary-100/5 active:bg-custom-primary-100/5',
                children: [
                  (0, g.jsx)('span', { children: null == o ? void 0 : o.name }),
                  (0, g.jsx)(m.Z, { className: 'h-4 w-4' }),
                ],
              }),
              t &&
                (0, g.jsx)('section', {
                  className:
                    'fixed top-full z-[99999] mt-1 flex w-48 flex-col overflow-hidden rounded-md border-[0.5px] border-custom-border-300 bg-custom-background-100 px-2 py-2.5 shadow-custom-shadow-rg animate-in fade-in slide-in-from-top-1',
                  children: s.map(e =>
                    (0, g.jsxs)(
                      'button',
                      {
                        type: 'button',
                        onClick: t => {
                          e.command(), r(!1), t.stopPropagation();
                        },
                        className: (0, c.cn)(
                          'flex items-center justify-between rounded px-1 py-1.5 text-sm text-custom-text-200 hover:bg-custom-background-80',
                          { 'bg-custom-background-80': o.name === e.name }
                        ),
                        children: [
                          (0, g.jsxs)('div', {
                            className: 'flex items-center space-x-2',
                            children: [
                              (0, g.jsx)(e.icon, {
                                className: 'size-3 flex-shrink-0',
                              }),
                              (0, g.jsx)('span', { children: e.name }),
                            ],
                          }),
                          o.name === e.name &&
                            (0, g.jsx)(f.Z, {
                              className:
                                'size-3 text-custom-text-300 flex-shrink-0',
                            }),
                        ],
                      },
                      e.name
                    )
                  ),
                }),
            ],
          });
        },
        rT = ({ editor: e, isOpen: t, setIsOpen: r }) => {
          let n = (0, d.useRef)(null),
            s = (0, d.useCallback)(() => {
              let t = n.current,
                s = null == t ? void 0 : t.value;
              s && (0, c.HH)(s) && ((0, c.L6)(e, s), r(!1));
            }, [e, n, r]);
          return (
            (0, d.useEffect)(() => {
              var e;
              n.current && (null == (e = n.current) || e.focus());
            }),
            (0, g.jsxs)('div', {
              className: 'relative',
              children: [
                (0, g.jsxs)('button', {
                  type: 'button',
                  className: (0, c.cn)(
                    'flex h-full items-center space-x-2 px-3 py-1.5 text-sm font-medium text-custom-text-300 hover:bg-custom-background-100 active:bg-custom-background-100',
                    { 'bg-custom-background-100': t }
                  ),
                  onClick: e => {
                    r(!t), e.stopPropagation();
                  },
                  children: [
                    (0, g.jsx)('p', { className: 'text-base', children: '↗' }),
                    (0, g.jsx)('p', {
                      className: (0, c.cn)('underline underline-offset-4', {
                        'text-custom-text-100': e.isActive('link'),
                      }),
                      children: 'Link',
                    }),
                  ],
                }),
                t &&
                  (0, g.jsxs)('div', {
                    className:
                      'dow-xl fixed top-full z-[99999] mt-1 flex w-60 overflow-hidden rounded border border-custom-border-300 bg-custom-background-100 animate-in fade-in slide-in-from-top-1',
                    onKeyDown: e => {
                      'Enter' === e.key && (e.preventDefault(), s());
                    },
                    children: [
                      (0, g.jsx)('input', {
                        ref: n,
                        type: 'url',
                        placeholder: 'Paste a link',
                        onClick: e => {
                          e.stopPropagation();
                        },
                        className:
                          'flex-1 border-r border-custom-border-300 bg-custom-background-100 p-1 text-sm outline-none placeholder:text-custom-text-400',
                        defaultValue: e.getAttributes('link').href || '',
                      }),
                      e.getAttributes('link').href
                        ? (0, g.jsx)('button', {
                            type: 'button',
                            className:
                              'flex items-center rounded-sm p-1 text-red-600 transition-all hover:bg-red-100 dark:hover:bg-red-800',
                            onClick: t => {
                              (0, c.Oy)(e), r(!1), t.stopPropagation();
                            },
                            children: (0, g.jsx)(x.Z, { className: 'h-4 w-4' }),
                          })
                        : (0, g.jsx)('button', {
                            className:
                              'flex items-center rounded-sm p-1 text-custom-text-300 transition-all hover:bg-custom-background-90',
                            type: 'button',
                            onClick: e => {
                              s(), e.stopPropagation();
                            },
                            children: (0, g.jsx)(f.Z, { className: 'h-4 w-4' }),
                          }),
                    ],
                  }),
              ],
            })
          );
        },
        rA = e => {
          let t = [
              ...(e.editor.isActive('code')
                ? []
                : [
                    (0, c.dH)(e.editor),
                    (0, c.hh)(e.editor),
                    (0, c.ef)(e.editor),
                    (0, c._v)(e.editor),
                  ]),
              (0, c.ey)(e.editor),
            ],
            r = T(E({}, e), {
              shouldShow: ({ state: e, editor: t }) => {
                let { selection: r } = e,
                  { empty: n } = r;
                return !(
                  n ||
                  !t.isEditable ||
                  t.isActive('image') ||
                  (0, M.isNodeSelection)(r) ||
                  (0, c.eI)(r) ||
                  a
                );
              },
              tippyOptions: {
                moveTransition: 'transform 0.15s ease-out',
                onHidden: () => {
                  s(!1), i(!1);
                },
              },
            }),
            [n, s] = (0, d.useState)(!1),
            [o, i] = (0, d.useState)(!1),
            [a, l] = (0, d.useState)(!1);
          return (
            (0, d.useEffect)(() => {
              function t() {
                function t() {
                  e.editor.state.selection.empty ||
                    (l(!0), document.removeEventListener('mousemove', t));
                }
                document.addEventListener('mousemove', t),
                  document.addEventListener('mouseup', function e() {
                    l(!1),
                      document.removeEventListener('mousemove', t),
                      document.removeEventListener('mouseup', e);
                  });
              }
              return (
                document.addEventListener('mousedown', t),
                () => {
                  document.removeEventListener('mousedown', t);
                }
              );
            }, []),
            (0, g.jsx)(
              ry,
              T(E({}, r), {
                className:
                  'flex w-fit divide-x divide-custom-border-300 rounded border border-custom-border-300 bg-custom-background-100 shadow-xl',
                children: a
                  ? null
                  : (0, g.jsxs)(g.Fragment, {
                      children: [
                        !e.editor.isActive('table') &&
                          (0, g.jsx)(rE, {
                            editor: e.editor,
                            isOpen: n,
                            setIsOpen: () => {
                              s(!n), i(!1);
                            },
                          }),
                        !e.editor.isActive('code') &&
                          (0, g.jsx)(rT, {
                            editor: e.editor,
                            isOpen: o,
                            setIsOpen: () => {
                              i(!o), s(!1);
                            },
                          }),
                        (0, g.jsx)('div', {
                          className: 'flex',
                          children: t.map(e =>
                            (0, g.jsx)(
                              'button',
                              {
                                type: 'button',
                                onClick: t => {
                                  e.command(), t.stopPropagation();
                                },
                                className: (0, c.cn)(
                                  'p-2 text-custom-text-300 transition-colors hover:bg-custom-primary-100/5 active:bg-custom-primary-100/5',
                                  {
                                    'bg-custom-primary-100/5 text-custom-text-100':
                                      e.isActive(),
                                  }
                                ),
                                children: (0, g.jsx)(e.icon, {
                                  className: (0, c.cn)('h-4 w-4', {
                                    'text-custom-text-100': e.isActive(),
                                  }),
                                }),
                              },
                              e.name
                            )
                          ),
                        }),
                      ],
                    }),
              })
            )
          );
        },
        rO = e => {
          let {
              onChange: t,
              dragDropEnabled: r,
              initialValue: n,
              value: s,
              fileHandler: o,
              containerClassName: i,
              editorClassName: a = '',
              forwardedRef: l,
              id: u = '',
              placeholder: p,
              tabIndex: h,
              mentionHandler: m,
            } = e,
            [f, x] = d.useState(() => {}),
            y = (0, c.jE)({
              id: u,
              editorClassName: a,
              restoreFile: o.restore,
              uploadFile: o.upload,
              deleteFile: o.delete,
              cancelUploadImage: o.cancel,
              onChange: t,
              initialValue: n,
              value: s,
              forwardedRef: l,
              extensions: R({
                uploadFile: o.upload,
                dragDropEnabled: r,
                setHideDragHandle: e => {
                  x(() => e);
                },
              }),
              tabIndex: h,
              mentionHandler: m,
              placeholder: p,
            }),
            v = (0, c.mo)({
              noBorder: !0,
              borderOnFocus: !1,
              containerClassName: i,
            });
          return y
            ? (0, g.jsxs)(c.Nf, {
                hideDragHandle: f,
                editor: y,
                editorContainerClassName: v,
                children: [
                  y && (0, g.jsx)(rA, { editor: y }),
                  (0, g.jsx)('div', {
                    className: 'flex flex-col',
                    children: (0, g.jsx)(c.zg, { tabIndex: h, editor: y }),
                  }),
                ],
              })
            : null;
        },
        rR = d.forwardRef((e, t) =>
          (0, g.jsx)(rO, T(E({}, e), { forwardedRef: t }))
        );
      rR.displayName = 'RichTextEditorWithRef';
      var rM = e => {
          let {
              containerClassName: t,
              editorClassName: r = '',
              initialValue: n,
              forwardedRef: s,
              mentionHandler: o,
            } = e,
            i = (0, c.oz)({
              initialValue: n,
              editorClassName: r,
              forwardedRef: s,
              mentionHandler: o,
            }),
            a = (0, c.mo)({ containerClassName: t });
          return i
            ? (0, g.jsx)(c.Nf, {
                editor: i,
                editorContainerClassName: a,
                children: (0, g.jsx)('div', {
                  className: 'flex flex-col',
                  children: (0, g.jsx)(c.zg, { editor: i }),
                }),
              })
            : null;
        },
        rI = d.forwardRef((e, t) =>
          (0, g.jsx)(rM, T(E({}, e), { forwardedRef: t }))
        );
      rI.displayName = 'RichReadOnlyEditorWithRef';
    },
  },
]);
