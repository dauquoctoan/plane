'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4963],
  {
    51731: function (e, s, t) {
      t.d(s, {
        Z: function () {
          return l;
        },
      });
      /**
       * @license lucide-react v0.378.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let l = (0, t(73471).Z)('CircleCheck', [
        ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
        ['path', { d: 'm9 12 2 2 4-4', key: 'dzmm74' }],
      ]);
    },
    55968: function (e, s, t) {
      t.d(s, {
        Z: function () {
          return l;
        },
      });
      /**
       * @license lucide-react v0.378.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let l = (0, t(73471).Z)('RefreshCcw', [
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
    92477: function (e, s) {
      s.Z = {
        src: '/_next/static/media/empty_bar_graph.d18ca340.svg',
        height: 28,
        width: 28,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    12862: function (e, s) {
      s.Z = {
        src: '/_next/static/media/github-black.a8ffa040.png',
        height: 512,
        width: 512,
        blurDataURL:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEUAAAAAAABMaXEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADTM5aqAAAADnRSTlMLIwD+uQTNiUHz5KJcLfhT0NsAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA1SURBVHicRca3AcAwDMAwqjf/f2/GYAIqt3uiSK7ZpuCJCOlYaYSW/fF8xBunvWCm0T7w1g8rZQE35wQCVQAAAABJRU5ErkJggg==',
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    27441: function (e, s, t) {
      t.d(s, {
        tw: function () {
          return G;
        },
        od: function () {
          return v;
        },
        jg: function () {
          return J;
        },
        DG: function () {
          return et;
        },
        an: function () {
          return H;
        },
        $U: function () {
          return ei;
        },
        x6: function () {
          return D;
        },
        un: function () {
          return E;
        },
        sT: function () {
          return O;
        },
        FE: function () {
          return X;
        },
        NE: function () {
          return Y;
        },
        S$: function () {
          return Z;
        },
        a5: function () {
          return em;
        },
        F2: function () {
          return eo;
        },
        hx: function () {
          return ed;
        },
        GJ: function () {
          return ee;
        },
        Hk: function () {
          return g;
        },
        u7: function () {
          return y;
        },
        Yb: function () {
          return N;
        },
        H5: function () {
          return w;
        },
      });
      var l = t(24246),
        i = t(25449),
        a = t(92775),
        n = t(45693),
        r = t(34220),
        o = t(52934),
        c = t(10712);
      let d = (e, s) => {
          if (!e || 'object' != typeof e || 0 === Object.keys(e).length)
            return { data: [], xAxisKeys: [] };
          let t = [],
            l = [],
            i = 'issue_count' === s.y_axis ? 'count' : 'estimate';
          return (
            Object.keys(e).forEach(a => {
              let r = {};
              if (s.segment)
                e[a].map(e => {
                  var s, t, a, n;
                  (r[null !== (s = e.segment) && void 0 !== s ? s : 'None'] =
                    null !== (t = e[i]) && void 0 !== t ? t : 0),
                    l.includes(
                      null !== (a = e.segment) && void 0 !== a ? a : 'None'
                    ) ||
                      l.push(
                        null !== (n = e.segment) && void 0 !== n ? n : 'None'
                      );
                }),
                  t.push({
                    name: n.Mk.includes(s.x_axis)
                      ? m(a)
                      : 'priority' === s.x_axis || 'state__group' === s.x_axis
                        ? (0, c.fm)(a)
                        : a,
                    ...r,
                  });
              else {
                var o, d, u;
                l = [i];
                let r = e[a][0];
                t.push({
                  name: n.Mk.includes(s.x_axis)
                    ? m(r.dimension)
                    : 'priority' === s.x_axis || 'state__group' === s.x_axis
                      ? (0, c.fm)(
                          null !== (o = r.dimension) && void 0 !== o
                            ? o
                            : 'None'
                        )
                      : null !== (d = r.dimension) && void 0 !== d
                        ? d
                        : 'None',
                  [i]: null !== (u = r[i]) && void 0 !== u ? u : 0,
                });
              }
            }),
            { data: t, xAxisKeys: l }
          );
        },
        u = (e, s, t, l) => {
          var i, a, n, r, d;
          let u = (0, c.C0)(e);
          if (!s) return u;
          if (
            ('state_id' === t[l] &&
              (u =
                null == s
                  ? void 0
                  : null ===
                        (i = s.extras.state_details.find(
                          s => s.state_id === e
                        )) || void 0 === i
                    ? void 0
                    : i.state__color),
            'labels__id' === t[l] &&
              (u =
                null !==
                  (r =
                    null == s
                      ? void 0
                      : null ===
                            (a = s.extras.label_details.find(
                              s => s.labels__id === e
                            )) || void 0 === a
                        ? void 0
                        : a.labels__color) && void 0 !== r
                  ? r
                  : void 0),
            'state__group' === t[l] &&
              (u =
                null !==
                  (d =
                    null === (n = o.q[e.toLowerCase()]) || void 0 === n
                      ? void 0
                      : n.color) && void 0 !== d
                  ? d
                  : void 0),
            'priority' === t[l])
          ) {
            let s = e.toLowerCase();
            u =
              'urgent' === s
                ? '#ef4444'
                : 'high' === s
                  ? '#f97316'
                  : 'medium' === s
                    ? '#eab308'
                    : 'low' === s
                      ? '#22c55e'
                      : '#ced4da';
          }
          return null != u ? u : (0, c.C0)(e);
        },
        x = (e, s, t, l) => {
          var i, a, r, o, d, u, x, p, h, v, j;
          let f = (0, c.S0)(e);
          return (
            s &&
              ('assignees__id' === t[l] &&
                (f =
                  null !==
                    (u =
                      null == s
                        ? void 0
                        : null ===
                              (i = s.extras.assignee_details.find(
                                s => s.assignees__id === e
                              )) || void 0 === i
                          ? void 0
                          : i.assignees__display_name) && void 0 !== u
                    ? u
                    : 'No assignee'),
              'issue_cycle__cycle_id' === t[l] &&
                (f =
                  null !==
                    (x =
                      null == s
                        ? void 0
                        : null ===
                              (a = s.extras.cycle_details.find(
                                s => s.issue_cycle__cycle_id === e
                              )) || void 0 === a
                          ? void 0
                          : a.issue_cycle__cycle__name) && void 0 !== x
                    ? x
                    : 'None'),
              'issue_module__module_id' === t[l] &&
                (f =
                  null !==
                    (p =
                      null == s
                        ? void 0
                        : null ===
                              (r = s.extras.module_details.find(
                                s => s.issue_module__module_id === e
                              )) || void 0 === r
                          ? void 0
                          : r.issue_module__module__name) && void 0 !== p
                    ? p
                    : 'None'),
              'labels__id' === t[l] &&
                (f =
                  null !==
                    (h =
                      null == s
                        ? void 0
                        : null ===
                              (o = s.extras.label_details.find(
                                s => s.labels__id === e
                              )) || void 0 === o
                          ? void 0
                          : o.labels__name) && void 0 !== h
                    ? h
                    : 'None'),
              'state_id' === t[l] &&
                (f =
                  null !==
                    (v =
                      null == s
                        ? void 0
                        : null ===
                              (d = s.extras.state_details.find(
                                s => s.state_id === e
                              )) || void 0 === d
                          ? void 0
                          : d.state__name) && void 0 !== v
                    ? v
                    : 'None'),
              n.Mk.includes(
                null !== (j = t.segment) && void 0 !== j ? j : ''
              ) && (f = m(e))),
            f
          );
        },
        m = e => {
          var s, t, l;
          if (!e || '' === e) return '';
          let i = parseInt(''.concat(e).split('-')[1], 10),
            a = ''.concat(e).split('-')[0];
          return null !==
            (l =
              (null !==
                (t =
                  null === (s = r.fW[i]) || void 0 === s
                    ? void 0
                    : s.shortTitle) && void 0 !== t
                ? t
                : 'None') + ' '.concat(a)) && void 0 !== l
            ? l
            : '';
        };
      var p = t(83717);
      let h = e => {
          let { datum: s, analytics: t, params: i } = e,
            a = '';
          if (i.segment) {
            if (n.Mk.includes(i.segment)) a = m(s.id);
            else if ('labels__id' === i.segment) {
              let e = t.extras.label_details.find(e => e.labels__id === s.id);
              a = e && e.labels__name ? e.labels__name : 'None';
            } else if ('state_id' === i.segment) {
              let e = t.extras.state_details.find(e => e.state_id === s.id);
              a = e && e.state__name ? e.state__name : 'None';
            } else if ('issue_cycle__cycle_id' === i.segment) {
              let e = t.extras.cycle_details.find(
                e => e.issue_cycle__cycle_id === s.id
              );
              a =
                e && e.issue_cycle__cycle__name
                  ? e.issue_cycle__cycle__name
                  : 'None';
            } else if ('issue_module__module_id' === i.segment) {
              let e = t.extras.module_details.find(
                e => e.issue_module__module_id === s.id
              );
              a =
                e && e.issue_module__module__name
                  ? e.issue_module__module__name
                  : 'None';
            } else a = s.id;
          } else
            a = n.Mk.includes(i.x_axis)
              ? s.indexValue
              : 'count' === s.id
                ? 'Issue count'
                : 'Estimate';
          return (0, l.jsxs)('div', {
            className:
              'flex items-center gap-2 rounded-md border border-custom-border-200 bg-custom-background-80 p-2 text-xs',
            children: [
              (0, l.jsx)('span', {
                className: 'h-3 w-3 rounded',
                style: { backgroundColor: s.color },
              }),
              (0, l.jsxs)('span', {
                className: 'font-medium text-custom-text-200 '.concat(
                  i.segment
                    ? 'priority' === i.segment || 'state__group' === i.segment
                      ? 'capitalize'
                      : ''
                    : 'priority' === i.x_axis || 'state__group' === i.x_axis
                      ? 'capitalize'
                      : ''
                ),
                children: [
                  'assignees__id' === i.segment
                    ? (e => {
                        let s = t.extras.assignee_details.find(
                          s => s.assignees__id === e
                        );
                        return (
                          (s && s.assignees__display_name) || 'No assignee'
                        );
                      })(a.toString())
                    : a,
                  ':',
                ],
              }),
              (0, l.jsx)('span', { children: s.value }),
            ],
          });
        },
        v = e => {
          let {
              analytics: s,
              barGraphData: t,
              params: n,
              yAxisKey: r,
              fullScreen: o,
            } = e,
            c = (0, p.Ky)(t.data.map(e => ''.concat(e.name)));
          return (0, l.jsx)(a.b8, {
            data: t.data,
            indexBy: 'name',
            keys: t.xAxisKeys,
            colors: e =>
              u(
                n.segment ? ''.concat(e.id) : ''.concat(e.indexValue),
                s,
                n,
                n.segment ? 'segment' : 'x_axis'
              ),
            customYAxisTickValues: s
              ? n.segment
                ? Object.keys(s.distribution).map(e => {
                    let t = 0;
                    return (
                      s.distribution[e].map(e => {
                        t += e[r];
                      }),
                      t
                    );
                  })
                : t.data.map(e => e[r])
              : [],
            tooltip: e => (0, l.jsx)(h, { datum: e, analytics: s, params: n }),
            height: o ? '400px' : '300px',
            margin: {
              right: 20,
              bottom: 'assignees__id' === n.x_axis ? 50 : 5 * c.length + 20,
            },
            axisBottom: {
              tickSize: 0,
              tickPadding: 10,
              tickRotation: t.data.length > 7 ? -45 : 0,
              renderTick:
                'assignees__id' === n.x_axis
                  ? e => {
                      var t;
                      let a =
                        null === (t = s.extras.assignee_details) || void 0 === t
                          ? void 0
                          : t.find(
                              s =>
                                (null == s ? void 0 : s.assignees__id) ===
                                (null == e ? void 0 : e.value)
                            );
                      return (null == a ? void 0 : a.assignees__avatar) &&
                        (null == a ? void 0 : a.assignees__avatar) !== ''
                        ? (0, l.jsx)(i.u, {
                            tooltipContent:
                              null == a ? void 0 : a.assignees__display_name,
                            children: (0, l.jsx)('g', {
                              transform: 'translate('
                                .concat(e.x, ',')
                                .concat(e.y, ')'),
                              children: (0, l.jsx)('image', {
                                x: -8,
                                y: 10,
                                width: 16,
                                height: 16,
                                xlinkHref:
                                  null == a ? void 0 : a.assignees__avatar,
                                style: { clipPath: 'circle(50%)' },
                              }),
                            }),
                          })
                        : (0, l.jsx)(i.u, {
                            tooltipContent:
                              null == a ? void 0 : a.assignees__display_name,
                            children: (0, l.jsxs)('g', {
                              transform: 'translate('
                                .concat(e.x, ',')
                                .concat(e.y, ')'),
                              children: [
                                (0, l.jsx)('circle', {
                                  cy: 18,
                                  r: 8,
                                  fill: '#374151',
                                }),
                                (0, l.jsx)('text', {
                                  x: 0,
                                  y: 21,
                                  textAnchor: 'middle',
                                  fontSize: 9,
                                  fill: '#ffffff',
                                  children:
                                    'assignees__id' === n.x_axis
                                      ? e.value && 'None' !== e.value
                                        ? x(
                                            e.value,
                                            s,
                                            n,
                                            'x_axis'
                                          )[0].toUpperCase()
                                        : '?'
                                      : e.value && 'None' !== e.value
                                        ? ''.concat(e.value).toUpperCase()[0]
                                        : '?',
                                }),
                              ],
                            }),
                          });
                    }
                  : e =>
                      (0, l.jsx)('g', {
                        transform: 'translate('
                          .concat(e.x, ',')
                          .concat(e.y + 10, ')'),
                        children: (0, l.jsx)('text', {
                          x: 0,
                          y: e.y,
                          textAnchor: ''.concat(
                            t.data.length > 7 ? 'end' : 'middle'
                          ),
                          fontSize: 10,
                          fill: 'rgb(var(--color-text-200))',
                          className: ''.concat(
                            t.data.length > 7 ? '-rotate-45' : ''
                          ),
                          children: x(e.value, s, n, 'x_axis'),
                        }),
                      }),
            },
            theme: { axis: {} },
          });
        };
      var j = t(43659),
        f = t(10634);
      let g = (0, j.Pi)(e => {
        let { value: s, onChange: t, projectIds: a } = e,
          { getProjectById: n } = (0, f.PY)(),
          r =
            null == a
              ? void 0
              : a.map(e => {
                  let s = n(e);
                  return {
                    value: null == s ? void 0 : s.id,
                    query: ''
                      .concat(null == s ? void 0 : s.name, ' ')
                      .concat(null == s ? void 0 : s.identifier),
                    content: (0, l.jsxs)('div', {
                      className: 'flex items-center gap-2 truncate',
                      children: [
                        (0, l.jsx)('span', {
                          className:
                            'text-[0.65rem] text-custom-text-200 flex-shrink-0',
                          children: null == s ? void 0 : s.identifier,
                        }),
                        (0, l.jsx)('span', {
                          className: 'flex-grow truncate',
                          children: null == s ? void 0 : s.name,
                        }),
                      ],
                    }),
                  };
                });
        return (0, l.jsx)(i.RO, {
          value: null != s ? s : [],
          onChange: e => t(e),
          options: r,
          label:
            s && s.length > 0
              ? null == a
                ? void 0
                : a
                    .filter(e => s.includes(e))
                    .map(e => {
                      var s;
                      return null === (s = n(e)) || void 0 === s
                        ? void 0
                        : s.name;
                    })
                    .join(', ')
              : 'All projects',
          multiple: !0,
        });
      });
      var b = t(86677);
      let y = e => {
          var s, t;
          let { value: a, onChange: n, params: r, analyticsOptions: o } = e,
            { cycleId: c, moduleId: d } = (0, b.useRouter)().query;
          return (0, l.jsxs)(i.AP, {
            value: a,
            label: (0, l.jsx)('span', {
              children:
                null !==
                  (t =
                    null === (s = o.find(e => e.value === a)) || void 0 === s
                      ? void 0
                      : s.label) && void 0 !== t
                  ? t
                  : (0, l.jsx)('span', {
                      className: 'text-custom-text-200',
                      children: 'No value',
                    }),
            }),
            onChange: n,
            maxHeight: 'lg',
            children: [
              (0, l.jsx)(i.AP.Option, { value: null, children: 'No value' }),
              o.map(e =>
                r.x_axis === e.value ||
                (c && 'issue_cycle__cycle_id' === e.value) ||
                (d && 'issue_module__module_id' === e.value)
                  ? null
                  : (0, l.jsx)(
                      i.AP.Option,
                      { value: e.value, children: e.label },
                      e.value
                    )
              ),
            ],
          });
        },
        N = e => {
          var s;
          let { value: t, onChange: a, params: n, analyticsOptions: r } = e,
            { cycleId: o, moduleId: c } = (0, b.useRouter)().query;
          return (0, l.jsx)(i.AP, {
            value: t,
            label: (0, l.jsx)('span', {
              children:
                null === (s = r.find(e => e.value === t)) || void 0 === s
                  ? void 0
                  : s.label,
            }),
            onChange: a,
            maxHeight: 'lg',
            children: r.map(e =>
              n.segment === e.value ||
              (o && 'issue_cycle__cycle_id' === e.value) ||
              (c && 'issue_module__module_id' === e.value)
                ? null
                : (0, l.jsx)(
                    i.AP.Option,
                    { value: e.value, children: e.label },
                    e.value
                  )
            ),
          });
        },
        w = e => {
          var s, t;
          let { value: a, onChange: r } = e;
          return (0, l.jsx)(i.AP, {
            value: a,
            label: (0, l.jsx)('span', {
              children:
                null !==
                  (t =
                    null === (s = n.Gs.find(e => e.value === a)) || void 0 === s
                      ? void 0
                      : s.label) && void 0 !== t
                  ? t
                  : 'None',
            }),
            onChange: r,
            maxHeight: 'lg',
            children: n.Gs.map(e =>
              (0, l.jsx)(
                i.AP.Option,
                { value: e.value, children: e.label },
                e.value
              )
            ),
          });
        };
      var _ = t(88039),
        k = t(30201),
        C = t(82750),
        I = t(6780),
        A = t(82283);
      class S extends A.t {
        async getAnalytics(e, s) {
          return this.get('/api/workspaces/'.concat(e, '/analytics/'), {
            params: {
              ...s,
              project: (null == s ? void 0 : s.project)
                ? s.project.toString()
                : null,
            },
          })
            .then(e => (null == e ? void 0 : e.data))
            .catch(e => {
              var s;
              throw null == e
                ? void 0
                : null === (s = e.response) || void 0 === s
                  ? void 0
                  : s.data;
            });
        }
        async getDefaultAnalytics(e, s) {
          return this.get('/api/workspaces/'.concat(e, '/default-analytics/'), {
            params: {
              ...s,
              project: (null == s ? void 0 : s.project)
                ? s.project.toString()
                : null,
            },
          })
            .then(e => (null == e ? void 0 : e.data))
            .catch(e => {
              var s;
              throw null == e
                ? void 0
                : null === (s = e.response) || void 0 === s
                  ? void 0
                  : s.data;
            });
        }
        async saveAnalytics(e, s) {
          return this.post('/api/workspaces/'.concat(e, '/analytic-view/'), s)
            .then(e => (null == e ? void 0 : e.data))
            .catch(e => {
              var s;
              throw null == e
                ? void 0
                : null === (s = e.response) || void 0 === s
                  ? void 0
                  : s.data;
            });
        }
        async exportAnalytics(e, s) {
          return this.post(
            '/api/workspaces/'.concat(e, '/export-analytics/'),
            s
          )
            .then(e => (null == e ? void 0 : e.data))
            .catch(e => {
              var s;
              throw null == e
                ? void 0
                : null === (s = e.response) || void 0 === s
                  ? void 0
                  : s.data;
            });
        }
        constructor() {
          super(I.C);
        }
      }
      let P = {
          x_axis: 'priority',
          y_axis: 'issue_count',
          segment: null,
          project: null,
        },
        F = new S(),
        D = (0, j.Pi)(e => {
          var s;
          let { additionalParams: t, fullScreen: i } = e,
            { workspaceSlug: a, projectId: n } = (0, b.useRouter)().query,
            {
              control: r,
              watch: o,
              setValue: c,
            } = (0, _.cI)({ defaultValues: P }),
            d = {
              x_axis: o('x_axis'),
              y_axis: o('y_axis'),
              segment: o('segment'),
              project: n ? [n.toString()] : o('project'),
              ...t,
            },
            { data: u, error: x } = (0, k.ZP)(
              a ? (0, C.sU)(a.toString(), d) : null,
              a ? () => F.getAnalytics(a.toString(), d) : null
            ),
            { theme: m } = (0, f.IX)(),
            p = !!n;
          return (0, l.jsxs)('div', {
            className: (0, I.cn)(
              'relative w-full h-full flex overflow-hidden',
              p ? 'flex-col-reverse' : ''
            ),
            children: [
              (0, l.jsxs)('div', {
                className: 'w-full flex h-full flex-col overflow-hidden',
                children: [
                  (0, l.jsx)(O, {
                    control: r,
                    setValue: c,
                    params: d,
                    fullScreen: i,
                    isProjectLevel: p,
                  }),
                  (0, l.jsx)(E, {
                    analytics: u,
                    error: x,
                    params: d,
                    fullScreen: i,
                  }),
                ],
              }),
              (0, l.jsx)('div', {
                className: (0, I.cn)(
                  'border-l border-custom-border-200 transition-all',
                  p
                    ? ''
                    : 'absolute right-0 top-0 bottom-0 md:relative flex-shrink-0 h-full max-w-[250px] sm:max-w-full'
                ),
                style: m.workspaceAnalyticsSidebarCollapsed
                  ? {
                      right: '-'.concat(
                        (null === (s = window) || void 0 === s
                          ? void 0
                          : s.innerWidth) || 0,
                        'px'
                      ),
                    }
                  : {},
                children: (0, l.jsx)(X, {
                  analytics: u,
                  params: d,
                  isProjectLevel: p,
                }),
              }),
            ],
          });
        }),
        E = e => {
          let { analytics: s, error: t, fullScreen: a, params: n } = e,
            { workspaceSlug: r } = (0, b.useRouter)().query,
            o = 'issue_count' === n.y_axis ? 'count' : 'estimate',
            c = d(null == s ? void 0 : s.distribution, n);
          return (0, l.jsx)(l.Fragment, {
            children: t
              ? (0, l.jsx)('div', {
                  className: 'grid h-full place-items-center p-5',
                  children: (0, l.jsxs)('div', {
                    className: 'space-y-4 text-custom-text-200',
                    children: [
                      (0, l.jsx)('p', {
                        className: 'text-sm',
                        children: 'There was some error in fetching the data.',
                      }),
                      (0, l.jsx)('div', {
                        className: 'flex items-center justify-center gap-2',
                        children: (0, l.jsx)(i.zx, {
                          variant: 'primary',
                          onClick: () => {
                            r && (0, k.JG)((0, C.sU)(r.toString(), n));
                          },
                          children: 'Refresh',
                        }),
                      }),
                    ],
                  }),
                })
              : s
                ? s.total > 0
                  ? (0, l.jsxs)('div', {
                      className:
                        'h-full overflow-y-auto vertical-scrollbar scrollbar-md',
                      children: [
                        (0, l.jsx)(v, {
                          analytics: s,
                          barGraphData: c,
                          params: n,
                          yAxisKey: o,
                          fullScreen: a,
                        }),
                        (0, l.jsx)(H, {
                          analytics: s,
                          barGraphData: c,
                          params: n,
                          yAxisKey: o,
                        }),
                      ],
                    })
                  : (0, l.jsx)('div', {
                      className: 'grid h-full place-items-center p-5',
                      children: (0, l.jsx)('div', {
                        className: 'space-y-4 text-custom-text-200',
                        children: (0, l.jsx)('p', {
                          className: 'text-sm',
                          children:
                            'No matching issues found. Try changing the parameters.',
                        }),
                      }),
                    })
                : (0, l.jsxs)(i.aN, {
                    className: 'space-y-6 p-5',
                    children: [
                      (0, l.jsx)(i.aN.Item, { height: '300px' }),
                      (0, l.jsxs)(i.aN, {
                        className: 'space-y-4',
                        children: [
                          (0, l.jsx)(i.aN.Item, { height: '30px' }),
                          (0, l.jsx)(i.aN.Item, { height: '30px' }),
                          (0, l.jsx)(i.aN.Item, { height: '30px' }),
                          (0, l.jsx)(i.aN.Item, { height: '30px' }),
                        ],
                      }),
                    ],
                  }),
          });
        },
        O = (0, j.Pi)(e => {
          let {
              control: s,
              setValue: t,
              params: i,
              fullScreen: a,
              isProjectLevel: r,
            } = e,
            { workspaceProjectIds: o, currentProjectDetails: c } = (0, f.PY)(),
            d = r
              ? n.XM.filter(
                  e =>
                    ('issue_cycle__cycle_id' !== e.value ||
                      (null != c && !!c.cycle_view)) &&
                    ('issue_module__module_id' !== e.value ||
                      (null != c && !!c.module_view))
                )
              : n.XM;
          return (0, l.jsxs)('div', {
            className: 'grid items-center gap-4 px-5 py-2.5 '
              .concat(r ? 'grid-cols-1 sm:grid-cols-3' : 'grid-cols-2', ' ')
              .concat(a ? 'md:py-5 lg:grid-cols-4' : ''),
            children: [
              !r &&
                (0, l.jsxs)('div', {
                  children: [
                    (0, l.jsx)('h6', {
                      className: 'text-xs text-custom-text-200',
                      children: 'Project',
                    }),
                    (0, l.jsx)(_.Qr, {
                      name: 'project',
                      control: s,
                      render: e => {
                        let {
                          field: { value: s, onChange: t },
                        } = e;
                        return (0, l.jsx)(g, {
                          value: null != s ? s : void 0,
                          onChange: t,
                          projectIds: null != o ? o : void 0,
                        });
                      },
                    }),
                  ],
                }),
              (0, l.jsxs)('div', {
                children: [
                  (0, l.jsx)('h6', {
                    className: 'text-xs text-custom-text-200',
                    children: 'Measure (y-axis)',
                  }),
                  (0, l.jsx)(_.Qr, {
                    name: 'y_axis',
                    control: s,
                    render: e => {
                      let {
                        field: { value: s, onChange: t },
                      } = e;
                      return (0, l.jsx)(w, { value: s, onChange: t });
                    },
                  }),
                ],
              }),
              (0, l.jsxs)('div', {
                children: [
                  (0, l.jsx)('h6', {
                    className: 'text-xs text-custom-text-200',
                    children: 'Dimension (x-axis)',
                  }),
                  (0, l.jsx)(_.Qr, {
                    name: 'x_axis',
                    control: s,
                    render: e => {
                      let {
                        field: { value: s, onChange: a },
                      } = e;
                      return (0, l.jsx)(N, {
                        value: s,
                        onChange: e => {
                          i.segment === e && t('segment', null), a(e);
                        },
                        params: i,
                        analyticsOptions: d,
                      });
                    },
                  }),
                ],
              }),
              (0, l.jsxs)('div', {
                children: [
                  (0, l.jsx)('h6', {
                    className: 'text-xs text-custom-text-200',
                    children: 'Group',
                  }),
                  (0, l.jsx)(_.Qr, {
                    name: 'segment',
                    control: s,
                    render: e => {
                      let {
                        field: { value: s, onChange: t },
                      } = e;
                      return (0, l.jsx)(y, {
                        value: s,
                        onChange: t,
                        params: i,
                        analyticsOptions: d,
                      });
                    },
                  }),
                ],
              }),
            ],
          });
        });
      var R = t(84757),
        M = t(88287),
        z = t(97151),
        B = t(91256);
      let Z = (0, j.Pi)(e => {
        let { projectIds: s } = e,
          { getProjectById: t } = (0, f.PY)();
        return (0, l.jsxs)('div', {
          className: 'relative flex flex-col gap-4 h-full',
          children: [
            (0, l.jsx)('h4', {
              className: 'font-medium',
              children: 'Selected Projects',
            }),
            (0, l.jsx)('div', {
              className:
                'relative space-y-6 overflow-hidden overflow-y-auto vertical-scrollbar scrollbar-md',
              children: s.map(e => {
                let s = t(e);
                if (s)
                  return (0, l.jsxs)(
                    'div',
                    {
                      className: 'w-full',
                      children: [
                        (0, l.jsxs)('div', {
                          className: 'flex items-center gap-1 text-sm',
                          children: [
                            (0, l.jsx)('div', {
                              className: 'h-6 w-6 grid place-items-center',
                              children: (0, l.jsx)(B.h0, {
                                logo: s.logo_props,
                              }),
                            }),
                            (0, l.jsxs)('h5', {
                              className: 'flex items-center gap-1',
                              children: [
                                (0, l.jsx)('p', {
                                  className: 'break-words',
                                  children: (0, c.aF)(s.name, 20),
                                }),
                                (0, l.jsxs)('span', {
                                  className:
                                    'ml-1 text-xs text-custom-text-200',
                                  children: ['(', s.identifier, ')'],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, l.jsxs)('div', {
                          className: 'mt-4 w-full space-y-3 px-2',
                          children: [
                            (0, l.jsxs)('div', {
                              className:
                                'flex items-center justify-between gap-2 text-xs',
                              children: [
                                (0, l.jsxs)('div', {
                                  className: 'flex items-center gap-2',
                                  children: [
                                    (0, l.jsx)(R.Z, {
                                      className: 'text-custom-text-200',
                                      size: 14,
                                      strokeWidth: 2,
                                    }),
                                    (0, l.jsx)('h6', {
                                      children: 'Total members',
                                    }),
                                  ],
                                }),
                                (0, l.jsx)('span', {
                                  className: 'text-custom-text-200',
                                  children: s.total_members,
                                }),
                              ],
                            }),
                            (0, l.jsxs)('div', {
                              className:
                                'flex items-center justify-between gap-2 text-xs',
                              children: [
                                (0, l.jsxs)('div', {
                                  className: 'flex items-center gap-2',
                                  children: [
                                    (0, l.jsx)(M.Z, {
                                      className: 'text-custom-text-200',
                                      size: 14,
                                      strokeWidth: 2,
                                    }),
                                    (0, l.jsx)('h6', {
                                      children: 'Total cycles',
                                    }),
                                  ],
                                }),
                                (0, l.jsx)('span', {
                                  className: 'text-custom-text-200',
                                  children: s.total_cycles,
                                }),
                              ],
                            }),
                            (0, l.jsxs)('div', {
                              className:
                                'flex items-center justify-between gap-2 text-xs',
                              children: [
                                (0, l.jsxs)('div', {
                                  className: 'flex items-center gap-2',
                                  children: [
                                    (0, l.jsx)(z.Z, {
                                      className: 'text-custom-text-200',
                                      size: 14,
                                      strokeWidth: 2,
                                    }),
                                    (0, l.jsx)('h6', {
                                      children: 'Total modules',
                                    }),
                                  ],
                                }),
                                (0, l.jsx)('span', {
                                  className: 'text-custom-text-200',
                                  children: s.total_modules,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    e
                  );
              }),
            }),
          ],
        });
      });
      var T = t(51374),
        L = t(74273);
      let Y = (0, j.Pi)(() => {
        var e, s;
        let {
            projectId: t,
            cycleId: i,
            moduleId: a,
          } = (0, b.useRouter)().query,
          { getProjectById: n } = (0, f.PY)(),
          { getCycleById: r } = (0, f.nv)(),
          { getModuleById: o } = (0, f.b7)(),
          { getUserDetails: c } = (0, f.Kb)(),
          d = i ? r(i.toString()) : void 0,
          u = a ? o(a.toString()) : void 0,
          x = t ? n(t.toString()) : void 0,
          m = d ? c(d.owned_by_id) : void 0,
          p = u && u.lead_id ? c(u.lead_id) : void 0;
        return (0, l.jsx)(l.Fragment, {
          children: t
            ? d
              ? (0, l.jsxs)('div', {
                  className: 'h-full overflow-y-auto',
                  children: [
                    (0, l.jsxs)('h4', {
                      className: 'break-words font-medium',
                      children: ['Analytics for ', d.name],
                    }),
                    (0, l.jsxs)('div', {
                      className: 'mt-4 space-y-4',
                      children: [
                        (0, l.jsxs)('div', {
                          className: 'flex items-center gap-2 text-xs',
                          children: [
                            (0, l.jsx)('h6', {
                              className: 'text-custom-text-200',
                              children: 'Lead',
                            }),
                            (0, l.jsx)('span', {
                              children: null == m ? void 0 : m.display_name,
                            }),
                          ],
                        }),
                        (0, l.jsxs)('div', {
                          className: 'flex items-center gap-2 text-xs',
                          children: [
                            (0, l.jsx)('h6', {
                              className: 'text-custom-text-200',
                              children: 'Start Date',
                            }),
                            (0, l.jsx)('span', {
                              children:
                                d.start_date && '' !== d.start_date
                                  ? (0, L.ot)(d.start_date)
                                  : 'No start date',
                            }),
                          ],
                        }),
                        (0, l.jsxs)('div', {
                          className: 'flex items-center gap-2 text-xs',
                          children: [
                            (0, l.jsx)('h6', {
                              className: 'text-custom-text-200',
                              children: 'Target Date',
                            }),
                            (0, l.jsx)('span', {
                              children:
                                d.end_date && '' !== d.end_date
                                  ? (0, L.ot)(d.end_date)
                                  : 'No end date',
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                })
              : u
                ? (0, l.jsxs)('div', {
                    className: 'h-full overflow-y-auto',
                    children: [
                      (0, l.jsxs)('h4', {
                        className: 'break-words font-medium',
                        children: ['Analytics for ', u.name],
                      }),
                      (0, l.jsxs)('div', {
                        className: 'mt-4 space-y-4',
                        children: [
                          (0, l.jsxs)('div', {
                            className: 'flex items-center gap-2 text-xs',
                            children: [
                              (0, l.jsx)('h6', {
                                className: 'text-custom-text-200',
                                children: 'Lead',
                              }),
                              p &&
                                (0, l.jsx)('span', {
                                  children: null == p ? void 0 : p.display_name,
                                }),
                            ],
                          }),
                          (0, l.jsxs)('div', {
                            className: 'flex items-center gap-2 text-xs',
                            children: [
                              (0, l.jsx)('h6', {
                                className: 'text-custom-text-200',
                                children: 'Start Date',
                              }),
                              (0, l.jsx)('span', {
                                children:
                                  u.start_date && '' !== u.start_date
                                    ? (0, L.ot)(u.start_date)
                                    : 'No start date',
                              }),
                            ],
                          }),
                          (0, l.jsxs)('div', {
                            className: 'flex items-center gap-2 text-xs',
                            children: [
                              (0, l.jsx)('h6', {
                                className: 'text-custom-text-200',
                                children: 'Target Date',
                              }),
                              (0, l.jsx)('span', {
                                children:
                                  u.target_date && '' !== u.target_date
                                    ? (0, L.ot)(u.target_date)
                                    : 'No end date',
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  })
                : (0, l.jsxs)('div', {
                    className: 'h-full overflow-y-auto',
                    children: [
                      (0, l.jsxs)('div', {
                        className: 'flex items-center gap-1',
                        children: [
                          x &&
                            (0, l.jsx)('span', {
                              className:
                                'h-6 w-6 grid place-items-center flex-shrink-0',
                              children: (0, l.jsx)(B.h0, {
                                logo: x.logo_props,
                              }),
                            }),
                          (0, l.jsx)('h4', {
                            className: 'break-words font-medium',
                            children: null == x ? void 0 : x.name,
                          }),
                        ],
                      }),
                      (0, l.jsx)('div', {
                        className: 'mt-4 space-y-4',
                        children: (0, l.jsxs)('div', {
                          className: 'flex items-center gap-2 text-xs',
                          children: [
                            (0, l.jsx)('h6', {
                              className: 'text-custom-text-200',
                              children: 'Network',
                            }),
                            (0, l.jsx)('span', {
                              children:
                                null !==
                                  (s =
                                    null ===
                                      (e = T.SQ.find(
                                        e =>
                                          e.key ===
                                          (null == x ? void 0 : x.network)
                                      )) || void 0 === e
                                      ? void 0
                                      : e.label) && void 0 !== s
                                  ? s
                                  : '',
                            }),
                          ],
                        }),
                      }),
                    ],
                  })
            : null,
        });
      });
      var q = t(27378),
        V = t(17480),
        U = t(19823);
      /**
       * @license lucide-react v0.378.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let W = (0, t(73471).Z)('Download', [
          [
            'path',
            { d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', key: 'ih7n3h' },
          ],
          ['polyline', { points: '7 10 12 15 17 10', key: '2ggqvy' }],
          ['line', { x1: '12', x2: '12', y1: '15', y2: '3', key: '1vk2je' }],
        ]),
        K = new S(),
        X = (0, j.Pi)(e => {
          var s, t;
          let { analytics: a, params: n, isProjectLevel: r = !1 } = e,
            {
              workspaceSlug: o,
              projectId: c,
              cycleId: d,
              moduleId: u,
            } = (0, b.useRouter)().query,
            { currentUser: x } = (0, f.aF)(),
            { workspaceProjectIds: m, getProjectById: p } = (0, f.PY)(),
            { getWorkspaceById: h } = (0, f.cF)(),
            { fetchCycleDetails: v, getCycleById: j } = (0, f.nv)(),
            { fetchModuleDetails: g, getModuleById: y } = (0, f.b7)(),
            N =
              c && null !== (s = p(c.toString())) && void 0 !== s ? s : void 0,
            w = () => {
              if (!x) return;
              let e = {
                workspaceSlug: null == o ? void 0 : o.toString(),
                params: {
                  x_axis: n.x_axis,
                  y_axis: n.y_axis,
                  group: n.segment,
                  project: n.project,
                },
              };
              if (N) {
                let s = N.workspace;
                (e.workspaceId = s.id),
                  (e.workspaceName = s.name),
                  (e.projectId = N.id),
                  (e.projectIdentifier = N.identifier),
                  (e.projectName = N.name);
              }
              if (_ || A) {
                let s = _ || A,
                  t = p((null == s ? void 0 : s.project_id) || ''),
                  l = h((null == s ? void 0 : s.workspace_id) || '');
                (e.workspaceId = null == s ? void 0 : s.workspace_id),
                  (e.workspaceName = null == l ? void 0 : l.name),
                  (e.projectId = null == s ? void 0 : s.project_id),
                  (e.projectIdentifier = null == t ? void 0 : t.identifier),
                  (e.projectName = null == t ? void 0 : t.name);
              }
              _ && ((e.cycleId = _.id), (e.cycleName = _.name)),
                A && ((e.moduleId = A.id), (e.moduleName = A.name));
            },
            _ = d ? j(d.toString()) : void 0,
            A = u ? y(u.toString()) : void 0;
          (0, q.useEffect)(() => {
            o && c && d && !_ && v(o.toString(), c.toString(), d.toString());
          }, [d, _, v, c, o]),
            (0, q.useEffect)(() => {
              o && c && u && !A && g(o.toString(), c.toString(), u.toString());
            }, [u, A, g, c, o]);
          let S = n.project && n.project.length > 0 ? n.project : m;
          return (0, l.jsxs)('div', {
            className: (0, I.cn)(
              'relative flex h-full w-full items-start justify-between gap-2 bg-custom-sidebar-background-100 px-5 py-4',
              r ? '' : 'flex-col'
            ),
            children: [
              (0, l.jsxs)('div', {
                className: 'flex flex-wrap items-center gap-2',
                children: [
                  (0, l.jsxs)('div', {
                    className:
                      'flex items-center gap-1 rounded-md bg-custom-background-80 px-3 py-1 text-xs text-custom-text-200',
                    children: [
                      (0, l.jsx)(i.uQ, { height: 14, width: 14 }),
                      a ? a.total : '...',
                      (0, l.jsx)('div', {
                        className: (0, I.cn)(r ? 'hidden md:block' : ''),
                        children: 'Issues',
                      }),
                    ],
                  }),
                  r &&
                    (0, l.jsxs)('div', {
                      className:
                        'flex items-center gap-1 rounded-md bg-custom-background-80 px-3 py-1 text-xs text-custom-text-200',
                      children: [
                        (0, l.jsx)(V.Z, { className: 'h-3.5 w-3.5' }),
                        (0, L.ot)(
                          null !==
                            (t = d
                              ? null == _
                                ? void 0
                                : _.created_at
                              : u
                                ? null == A
                                  ? void 0
                                  : A.created_at
                                : null == N
                                  ? void 0
                                  : N.created_at) && void 0 !== t
                            ? t
                            : ''
                        ),
                      ],
                    }),
                ],
              }),
              (0, l.jsx)('div', {
                className: (0, I.cn)(
                  'h-full w-full overflow-hidden',
                  r ? 'hidden' : 'block'
                ),
                children: (0, l.jsxs)(l.Fragment, {
                  children: [
                    !r && S && S.length > 0 && (0, l.jsx)(Z, { projectIds: S }),
                    (0, l.jsx)(Y, {}),
                  ],
                }),
              }),
              (0, l.jsxs)('div', {
                className: 'flex flex-wrap items-center justify-end gap-2',
                children: [
                  (0, l.jsx)(i.zx, {
                    variant: 'neutral-primary',
                    prependIcon: (0, l.jsx)(U.Z, {
                      className: 'h-3 w-3 md:h-3.5 md:w-3.5',
                    }),
                    onClick: () => {
                      o && (0, k.JG)((0, C.sU)(o.toString(), n));
                    },
                    children: (0, l.jsx)('div', {
                      className: (0, I.cn)(r ? 'hidden md:block' : ''),
                      children: 'Refresh',
                    }),
                  }),
                  (0, l.jsx)(i.zx, {
                    variant: 'primary',
                    prependIcon: (0, l.jsx)(W, { className: 'h-3.5 w-3.5' }),
                    onClick: () => {
                      if (!o) return;
                      let e = { x_axis: n.x_axis, y_axis: n.y_axis };
                      n.segment && (e.segment = n.segment),
                        n.project && (e.project = n.project),
                        K.exportAnalytics(o.toString(), e)
                          .then(e => {
                            (0, i.fz)({
                              type: i.do.SUCCESS,
                              title: 'Success!',
                              message: e.message,
                            }),
                              w();
                          })
                          .catch(() =>
                            (0, i.fz)({
                              type: i.do.ERROR,
                              title: 'Error!',
                              message:
                                'There was some error in exporting the analytics. Please try again.',
                            })
                          );
                    },
                    children: (0, l.jsx)('div', {
                      className: (0, I.cn)(r ? 'hidden md:block' : ''),
                      children: 'Export as CSV',
                    }),
                  }),
                ],
              }),
            ],
          });
        }),
        H = e => {
          var s, t;
          let { analytics: a, barGraphData: r, params: o, yAxisKey: c } = e;
          return (0, l.jsx)('div', {
            className: 'flow-root',
            children: (0, l.jsx)('div', {
              className: 'overflow-x-auto',
              children: (0, l.jsx)('div', {
                className: 'inline-block min-w-full align-middle',
                children: (0, l.jsxs)('table', {
                  className:
                    'min-w-full divide-y divide-custom-border-200 whitespace-nowrap border-y border-custom-border-200',
                  children: [
                    (0, l.jsx)('thead', {
                      className: 'bg-custom-background-80',
                      children: (0, l.jsxs)('tr', {
                        className:
                          'divide-x divide-custom-border-200 text-sm text-custom-text-100',
                        children: [
                          (0, l.jsx)('th', {
                            scope: 'col',
                            className: 'px-2.5 py-3 text-left font-medium',
                            children:
                              null ===
                                (s = n.XM.find(e => e.value === o.x_axis)) ||
                              void 0 === s
                                ? void 0
                                : s.label,
                          }),
                          o.segment
                            ? r.xAxisKeys.map(e =>
                                (0, l.jsx)(
                                  'th',
                                  {
                                    scope: 'col',
                                    className:
                                      'px-2.5 py-3 text-left font-medium '.concat(
                                        'priority' === o.segment ||
                                          'state__group' === o.segment
                                          ? 'capitalize'
                                          : ''
                                      ),
                                    children: (0, l.jsxs)('div', {
                                      className: 'flex items-center gap-2',
                                      children: [
                                        'priority' === o.segment
                                          ? (0, l.jsx)(i.bJ, { priority: e })
                                          : (0, l.jsx)('span', {
                                              className:
                                                'h-3 w-3 flex-shrink-0 rounded',
                                              style: {
                                                backgroundColor: u(
                                                  e,
                                                  a,
                                                  o,
                                                  'segment'
                                                ),
                                              },
                                            }),
                                        x(e, a, o, 'segment'),
                                      ],
                                    }),
                                  },
                                  'segment-'.concat(e)
                                )
                              )
                            : (0, l.jsx)('th', {
                                scope: 'col',
                                className:
                                  'px-2.5 py-3 text-left font-medium sm:pr-0',
                                children:
                                  null ===
                                    (t = n.Gs.find(
                                      e => e.value === o.y_axis
                                    )) || void 0 === t
                                    ? void 0
                                    : t.label,
                              }),
                        ],
                      }),
                    }),
                    (0, l.jsx)('tbody', {
                      className: 'divide-y divide-custom-border-200',
                      children: r.data.map((e, s) =>
                        (0, l.jsxs)(
                          'tr',
                          {
                            className:
                              'divide-x divide-custom-border-200 text-xs text-custom-text-200',
                            children: [
                              (0, l.jsxs)('td', {
                                className:
                                  'flex items-center gap-2 whitespace-nowrap px-2.5 py-2 font-medium '.concat(
                                    'priority' === o.x_axis ||
                                      'state__group' === o.x_axis
                                      ? 'capitalize'
                                      : ''
                                  ),
                                children: [
                                  'priority' === o.x_axis
                                    ? (0, l.jsx)(i.bJ, { priority: e.name })
                                    : (0, l.jsx)('span', {
                                        className: 'h-3 w-3 rounded',
                                        style: {
                                          backgroundColor: u(
                                            ''.concat(e.name),
                                            a,
                                            o,
                                            'x_axis'
                                          ),
                                        },
                                      }),
                                  x(''.concat(e.name), a, o, 'x_axis'),
                                ],
                              }),
                              o.segment
                                ? r.xAxisKeys.map((s, t) => {
                                    var i;
                                    return (0, l.jsx)(
                                      'td',
                                      {
                                        className:
                                          'whitespace-nowrap px-2.5 py-2 sm:pr-0',
                                        children:
                                          null !== (i = e[s]) && void 0 !== i
                                            ? i
                                            : 0,
                                      },
                                      'segment-value-'.concat(t)
                                    );
                                  })
                                : (0, l.jsx)('td', {
                                    className:
                                      'whitespace-nowrap px-2.5 py-2 sm:pr-0',
                                    children: e[c],
                                  }),
                            ],
                          },
                          'table-row-'.concat(s)
                        )
                      ),
                    }),
                  ],
                }),
              }),
            }),
          });
        },
        G = e => {
          let { defaultAnalytics: s } = e;
          return (0, l.jsxs)('div', {
            className:
              'space-y-3 rounded-[10px] border border-custom-border-200 p-3',
            children: [
              (0, l.jsx)('h5', {
                className: 'text-xs text-red-500',
                children: 'DEMAND',
              }),
              (0, l.jsxs)('div', {
                children: [
                  (0, l.jsx)('h4', {
                    className: 'text-base font-medium text-custom-text-100',
                    children: 'Total open tasks',
                  }),
                  (0, l.jsx)('h3', {
                    className: 'mt-1 text-xl font-semibold',
                    children: s.open_issues,
                  }),
                ],
              }),
              (0, l.jsx)('div', {
                className: 'space-y-6 pb-2',
                children:
                  null == s
                    ? void 0
                    : s.open_issues_classified.map(e => {
                        let t = (
                          (e.state_count / s.total_issues) *
                          100
                        ).toFixed(0);
                        return (0, l.jsxs)(
                          'div',
                          {
                            className: 'space-y-2',
                            children: [
                              (0, l.jsxs)('div', {
                                className:
                                  'flex items-center justify-between gap-2 text-xs',
                                children: [
                                  (0, l.jsxs)('div', {
                                    className: 'flex items-center gap-1',
                                    children: [
                                      (0, l.jsx)('span', {
                                        className: 'h-2 w-2 rounded-full',
                                        style: {
                                          backgroundColor:
                                            o.q[e.state_group].color,
                                        },
                                      }),
                                      (0, l.jsx)('h6', {
                                        className: 'capitalize',
                                        children: e.state_group,
                                      }),
                                      (0, l.jsx)('span', {
                                        className:
                                          'ml-1 rounded-3xl bg-custom-background-80 px-2 py-0.5 text-[0.65rem] text-custom-text-200',
                                        children: e.state_count,
                                      }),
                                    ],
                                  }),
                                  (0, l.jsxs)('p', {
                                    className: 'text-custom-text-200',
                                    children: [t, '%'],
                                  }),
                                ],
                              }),
                              (0, l.jsx)('div', {
                                className:
                                  'bar relative h-1 w-full rounded bg-custom-background-80',
                                children: (0, l.jsx)('div', {
                                  className:
                                    'absolute left-0 top-0 h-1 rounded duration-300',
                                  style: {
                                    width: ''.concat(t, '%'),
                                    backgroundColor: o.q[e.state_group].color,
                                  },
                                }),
                              }),
                            ],
                          },
                          e.state_group
                        );
                      }),
              }),
            ],
          });
        };
      var Q = {
        src: '/_next/static/media/empty_users.ae4582e6.svg',
        height: 42,
        width: 43,
        blurWidth: 0,
        blurHeight: 0,
      };
      let J = e => {
          let {
            users: s,
            title: t,
            emptyStateMessage: i,
            workspaceSlug: n,
          } = e;
          return (0, l.jsxs)('div', {
            className: 'rounded-[10px] border border-custom-border-200 p-3',
            children: [
              (0, l.jsx)('h6', {
                className: 'text-base font-medium',
                children: t,
              }),
              s.length > 0
                ? (0, l.jsx)('div', {
                    className: 'mt-3 space-y-3',
                    children: s.map(e => {
                      var s, t, i;
                      return (0, l.jsxs)(
                        'a',
                        {
                          href: '/'.concat(n, '/profile/').concat(e.id),
                          target: '_blank',
                          rel: 'noopener noreferrer',
                          className:
                            'flex items-start justify-between gap-4 text-xs',
                          children: [
                            (0, l.jsxs)('div', {
                              className: 'flex items-center gap-2',
                              children: [
                                e && e.avatar && '' !== e.avatar
                                  ? (0, l.jsx)('div', {
                                      className:
                                        'relative h-4 w-4 flex-shrink-0 rounded-full',
                                      children: (0, l.jsx)('img', {
                                        src: e.avatar,
                                        className:
                                          'absolute left-0 top-0 h-full w-full rounded-full object-cover',
                                        alt:
                                          null !==
                                            (t =
                                              null == e
                                                ? void 0
                                                : e.display_name) &&
                                          void 0 !== t
                                            ? t
                                            : 'None',
                                      }),
                                    })
                                  : (0, l.jsx)('div', {
                                      className:
                                        'grid h-4 w-4 flex-shrink-0 place-items-center rounded-full bg-gray-700 text-[11px] capitalize text-white',
                                      children:
                                        (null == e
                                          ? void 0
                                          : e.display_name) !== ''
                                          ? null == e
                                            ? void 0
                                            : null === (s = e.display_name) ||
                                                void 0 === s
                                              ? void 0
                                              : s[0]
                                          : '?',
                                    }),
                                (0, l.jsx)('span', {
                                  className: 'break-words text-custom-text-200',
                                  children:
                                    (null == e ? void 0 : e.display_name) !== ''
                                      ? ''.concat(
                                          null == e ? void 0 : e.display_name
                                        )
                                      : 'No assignee',
                                }),
                              ],
                            }),
                            (0, l.jsx)('span', {
                              className: 'flex-shrink-0',
                              children: e.count,
                            }),
                          ],
                        },
                        null !== (i = null == e ? void 0 : e.display_name) &&
                          void 0 !== i
                          ? i
                          : 'None'
                      );
                    }),
                  })
                : (0, l.jsx)('div', {
                    className: 'px-7 py-4',
                    children: (0, l.jsx)(a.es, {
                      title: 'No Data yet',
                      description: i,
                      image: Q,
                    }),
                  }),
            ],
          });
        },
        $ = new S(),
        ee = e => {
          var s, t, a, n;
          let { fullScreen: r = !0 } = e,
            {
              workspaceSlug: o,
              projectId: c,
              cycleId: d,
              moduleId: u,
            } = (0, b.useRouter)().query,
            x = c
              ? {
                  project: c ? [c.toString()] : null,
                  cycle: d ? d.toString() : null,
                  module: u ? u.toString() : null,
                }
              : void 0,
            {
              data: m,
              error: p,
              mutate: h,
            } = (0, k.ZP)(
              o ? (0, C.O3)(o.toString(), x) : null,
              o ? () => $.getDefaultAnalytics(o.toString(), x) : null
            );
          return (0, l.jsx)(l.Fragment, {
            children: p
              ? (0, l.jsx)('div', {
                  className: 'grid h-full place-items-center p-5',
                  children: (0, l.jsxs)('div', {
                    className: 'space-y-4 text-custom-text-200',
                    children: [
                      (0, l.jsx)('p', {
                        className: 'text-sm',
                        children: 'There was some error in fetching the data.',
                      }),
                      (0, l.jsx)('div', {
                        className: 'flex items-center justify-center gap-2',
                        children: (0, l.jsx)(i.zx, {
                          variant: 'primary',
                          onClick: () => h(),
                          children: 'Refresh',
                        }),
                      }),
                    ],
                  }),
                })
              : m
                ? (0, l.jsx)('div', {
                    className:
                      'h-full overflow-y-auto p-5 text-sm vertical-scrollbar scrollbar-lg',
                    children: (0, l.jsxs)('div', {
                      className: 'grid grid-cols-1 gap-5 '.concat(
                        r ? 'md:grid-cols-2' : ''
                      ),
                      children: [
                        (0, l.jsx)(G, { defaultAnalytics: m }),
                        (0, l.jsx)(et, { defaultAnalytics: m }),
                        (0, l.jsx)(J, {
                          users:
                            null === (s = m.most_issue_created_user) ||
                            void 0 === s
                              ? void 0
                              : s.map(e => ({
                                  avatar:
                                    null == e ? void 0 : e.created_by__avatar,
                                  firstName:
                                    null == e
                                      ? void 0
                                      : e.created_by__first_name,
                                  lastName:
                                    null == e
                                      ? void 0
                                      : e.created_by__last_name,
                                  display_name:
                                    null == e
                                      ? void 0
                                      : e.created_by__display_name,
                                  count: null == e ? void 0 : e.count,
                                  id: null == e ? void 0 : e.created_by__id,
                                })),
                          title: 'Most issues created',
                          emptyStateMessage:
                            'Co-workers and the number of issues created by them appears here.',
                          workspaceSlug:
                            null !== (a = null == o ? void 0 : o.toString()) &&
                            void 0 !== a
                              ? a
                              : '',
                        }),
                        (0, l.jsx)(J, {
                          users:
                            null === (t = m.most_issue_closed_user) ||
                            void 0 === t
                              ? void 0
                              : t.map(e => ({
                                  avatar:
                                    null == e ? void 0 : e.assignees__avatar,
                                  firstName:
                                    null == e
                                      ? void 0
                                      : e.assignees__first_name,
                                  lastName:
                                    null == e ? void 0 : e.assignees__last_name,
                                  display_name:
                                    null == e
                                      ? void 0
                                      : e.assignees__display_name,
                                  count: null == e ? void 0 : e.count,
                                  id: null == e ? void 0 : e.assignees__id,
                                })),
                          title: 'Most issues closed',
                          emptyStateMessage:
                            'Co-workers and the number of issues closed by them appears here.',
                          workspaceSlug:
                            null !== (n = null == o ? void 0 : o.toString()) &&
                            void 0 !== n
                              ? n
                              : '',
                        }),
                        (0, l.jsx)('div', {
                          className: r ? 'md:col-span-2' : '',
                          children: (0, l.jsx)(ei, { defaultAnalytics: m }),
                        }),
                      ],
                    }),
                  })
                : (0, l.jsxs)(i.aN, {
                    className: 'grid grid-cols-1 gap-5 p-5 lg:grid-cols-2',
                    children: [
                      (0, l.jsx)(i.aN.Item, { height: '250px' }),
                      (0, l.jsx)(i.aN.Item, { height: '250px' }),
                      (0, l.jsx)(i.aN.Item, { height: '250px' }),
                      (0, l.jsx)(i.aN.Item, { height: '250px' }),
                    ],
                  }),
          });
        };
      var es = t(92477);
      let et = e => {
        let { defaultAnalytics: s } = e;
        return (0, l.jsxs)('div', {
          className: 'rounded-[10px] border border-custom-border-200',
          children: [
            (0, l.jsx)('h5', {
              className: 'p-3 text-xs text-green-500',
              children: 'SCOPE',
            }),
            (0, l.jsx)('div', {
              className: 'divide-y divide-custom-border-200',
              children: (0, l.jsxs)('div', {
                children: [
                  (0, l.jsx)('h6', {
                    className: 'px-3 text-base font-medium',
                    children: 'Pending issues',
                  }),
                  s.pending_issue_user && s.pending_issue_user.length > 0
                    ? (0, l.jsx)(a.b8, {
                        data: s.pending_issue_user,
                        indexBy: 'assignees__id',
                        keys: ['count'],
                        height: '250px',
                        colors: () => '#f97316',
                        customYAxisTickValues: s.pending_issue_user.map(e =>
                          e.count > 0 ? e.count : 50
                        ),
                        tooltip: e => {
                          let t = s.pending_issue_user.find(
                            s => s.assignees__id === ''.concat(e.indexValue)
                          );
                          return (0, l.jsxs)('div', {
                            className:
                              'rounded-md border border-custom-border-200 bg-custom-background-80 p-2 text-xs',
                            children: [
                              (0, l.jsxs)('span', {
                                className: 'font-medium text-custom-text-200',
                                children: [
                                  t ? t.assignees__display_name : 'No assignee',
                                  ':',
                                  ' ',
                                ],
                              }),
                              e.value,
                            ],
                          });
                        },
                        axisBottom: {
                          renderTick: e => {
                            var t;
                            let i =
                              null !==
                                (t = s.pending_issue_user[e.tickIndex]) &&
                              void 0 !== t
                                ? t
                                : '';
                            return i &&
                              (null == i ? void 0 : i.assignees__avatar) &&
                              (null == i ? void 0 : i.assignees__avatar) !== ''
                              ? (0, l.jsx)('g', {
                                  transform: 'translate('
                                    .concat(e.x, ',')
                                    .concat(e.y, ')'),
                                  children: (0, l.jsx)('image', {
                                    x: -8,
                                    y: 10,
                                    width: 16,
                                    height: 16,
                                    xlinkHref:
                                      null == i ? void 0 : i.assignees__avatar,
                                    style: { clipPath: 'circle(50%)' },
                                  }),
                                })
                              : (0, l.jsxs)('g', {
                                  transform: 'translate('
                                    .concat(e.x, ',')
                                    .concat(e.y, ')'),
                                  children: [
                                    (0, l.jsx)('circle', {
                                      cy: 18,
                                      r: 8,
                                      fill: '#374151',
                                    }),
                                    (0, l.jsx)('text', {
                                      x: 0,
                                      y: 21,
                                      textAnchor: 'middle',
                                      fontSize: 9,
                                      fill: '#ffffff',
                                      children: e.value
                                        ? ''
                                            .concat(i.assignees__display_name)
                                            .toUpperCase()[0]
                                        : '?',
                                    }),
                                  ],
                                });
                          },
                        },
                        margin: { top: 20 },
                        theme: { axis: {} },
                      })
                    : (0, l.jsx)('div', {
                        className: 'px-7 py-4',
                        children: (0, l.jsx)(a.es, {
                          title: 'No Data yet',
                          description:
                            'Analysis of pending issues by co-workers appears here.',
                          image: es.Z,
                        }),
                      }),
                ],
              }),
            }),
          ],
        });
      };
      var el = {
        src: '/_next/static/media/empty_graph.d0a18aae.svg',
        height: 26,
        width: 37,
        blurWidth: 0,
        blurHeight: 0,
      };
      let ei = e => {
        let { defaultAnalytics: s } = e;
        return (0, l.jsxs)('div', {
          className: 'rounded-[10px] border border-custom-border-200 py-3',
          children: [
            (0, l.jsx)('h1', {
              className: 'px-3 text-base font-medium',
              children: 'Issues closed in a year',
            }),
            s.issue_completed_month_wise.length > 0
              ? (0, l.jsx)(a.xr, {
                  data: [
                    {
                      id: 'issues_closed',
                      color: 'rgb(var(--color-primary-100))',
                      data: Object.entries(r.fW).map(e => {
                        var t;
                        let [l, i] = e;
                        return {
                          x: i.shortTitle,
                          y:
                            (null ===
                              (t = s.issue_completed_month_wise.find(
                                e => e.month === parseInt(l, 10)
                              )) || void 0 === t
                              ? void 0
                              : t.count) || 0,
                        };
                      }),
                    },
                  ],
                  customYAxisTickValues: s.issue_completed_month_wise.map(
                    e => e.count
                  ),
                  height: '300px',
                  colors: e => e.color,
                  curve: 'monotoneX',
                  margin: { top: 20 },
                  enableSlices: 'x',
                  sliceTooltip: e =>
                    (0, l.jsxs)('div', {
                      className:
                        'rounded-md border border-custom-border-200 bg-custom-background-80 p-2 text-xs',
                      children: [
                        e.slice.points[0].data.yFormatted,
                        (0, l.jsx)('span', {
                          className: 'text-custom-text-200',
                          children: ' issues closed in ',
                        }),
                        e.slice.points[0].data.xFormatted,
                      ],
                    }),
                  theme: { background: 'rgb(var(--color-background-100))' },
                  enableArea: !0,
                })
              : (0, l.jsx)('div', {
                  className: 'px-7 py-4',
                  children: (0, l.jsx)(a.es, {
                    title: 'No Data yet',
                    description:
                      'Close issues to view analysis of the same in the form of a graph.',
                    image: el,
                  }),
                }),
          ],
        });
      };
      var ea = t(72258),
        en = t(96652),
        er = t(82558);
      let eo = (0, j.Pi)(e => {
        let { fullScreen: s, handleClose: t, setFullScreen: i, title: a } = e;
        return (0, l.jsxs)('div', {
          className:
            'flex items-center justify-between gap-4 bg-custom-background-100 px-5 py-4 text-sm',
          children: [
            (0, l.jsxs)('h3', {
              className: 'break-words',
              children: ['Analytics for ', a],
            }),
            (0, l.jsxs)('div', {
              className: 'flex items-center gap-2',
              children: [
                (0, l.jsx)('button', {
                  type: 'button',
                  className:
                    'grid place-items-center p-1 text-custom-text-200 hover:text-custom-text-100',
                  onClick: () => i(e => !e),
                  children: s
                    ? (0, l.jsx)(ea.Z, { size: 14, strokeWidth: 2 })
                    : (0, l.jsx)(en.Z, { size: 14, strokeWidth: 2 }),
                }),
                (0, l.jsx)('button', {
                  type: 'button',
                  className:
                    'grid place-items-center p-1 text-custom-text-200 hover:text-custom-text-100',
                  onClick: t,
                  children: (0, l.jsx)(er.Z, { size: 14, strokeWidth: 2 }),
                }),
              ],
            }),
          ],
        });
      });
      var ec = t(12625);
      let ed = (0, j.Pi)(e => {
        let { fullScreen: s, cycleDetails: t, moduleDetails: i } = e;
        return (0, l.jsxs)(ec.O.Group, {
          as: q.Fragment,
          children: [
            (0, l.jsx)(ec.O.List, {
              as: 'div',
              className:
                'flex space-x-2 border-b border-custom-border-200 px-0 md:px-5 py-0 md:py-3',
              children: n.Br.map(e =>
                (0, l.jsx)(
                  ec.O,
                  {
                    className: e => {
                      let { selected: s } = e;
                      return 'rounded-0 w-full md:w-max md:rounded-3xl border-b md:border border-custom-border-200 focus:outline-none px-0 md:px-4 py-2 text-xs hover:bg-custom-background-80 '.concat(
                        s
                          ? 'border-custom-primary-100 text-custom-primary-100 md:bg-custom-background-80 md:text-custom-text-200 md:border-custom-border-200'
                          : 'border-transparent'
                      );
                    },
                    onClick: () => {},
                    children: e.title,
                  },
                  e.key
                )
              ),
            }),
            (0, l.jsxs)(ec.O.Panels, {
              as: q.Fragment,
              children: [
                (0, l.jsx)(ec.O.Panel, {
                  as: q.Fragment,
                  children: (0, l.jsx)(ee, { fullScreen: s }),
                }),
                (0, l.jsx)(ec.O.Panel, {
                  as: q.Fragment,
                  children: (0, l.jsx)(D, {
                    additionalParams: {
                      cycle: null == t ? void 0 : t.id,
                      module: null == i ? void 0 : i.id,
                    },
                    fullScreen: s,
                  }),
                }),
              ],
            }),
          ],
        });
      });
      var eu = t(30335),
        ex = t(15455);
      let em = (0, j.Pi)(e => {
        var s, t, i;
        let {
            isOpen: a,
            onClose: n,
            cycleDetails: r,
            moduleDetails: o,
            projectDetails: c,
          } = e,
          [d, u] = (0, q.useState)(!1),
          x = () => {
            n();
          };
        return (0, l.jsx)(eu.u.Root, {
          appear: !0,
          show: a,
          as: q.Fragment,
          children: (0, l.jsx)(ex.V, {
            as: 'div',
            className: 'relative z-20',
            onClose: x,
            children: (0, l.jsx)(eu.u.Child, {
              as: q.Fragment,
              enter: 'transition-transform duration-300',
              enterFrom: 'translate-x-full',
              enterTo: 'translate-x-0',
              leave: 'transition-transform duration-200',
              leaveFrom: 'translate-x-0',
              leaveTo: 'translate-x-full',
              children: (0, l.jsx)('div', {
                className: 'fixed inset-0 z-20 h-full w-full overflow-y-auto',
                children: (0, l.jsx)(ex.V.Panel, {
                  children: (0, l.jsx)('div', {
                    className:
                      'fixed right-0 top-0 z-20 h-full bg-custom-background-100 shadow-custom-shadow-md '.concat(
                        d ? 'w-full p-2' : 'w-full sm:w-full md:w-1/2'
                      ),
                    children: (0, l.jsxs)('div', {
                      className:
                        'flex h-full flex-col overflow-hidden border-custom-border-200 bg-custom-background-100 text-left '.concat(
                          d ? 'rounded-lg border' : 'border-l'
                        ),
                      children: [
                        (0, l.jsx)(eo, {
                          fullScreen: d,
                          handleClose: x,
                          setFullScreen: u,
                          title:
                            null !==
                              (i =
                                null !==
                                  (t =
                                    null !==
                                      (s = null == r ? void 0 : r.name) &&
                                    void 0 !== s
                                      ? s
                                      : null == o
                                        ? void 0
                                        : o.name) && void 0 !== t
                                  ? t
                                  : null == c
                                    ? void 0
                                    : c.name) && void 0 !== i
                              ? i
                              : '',
                        }),
                        (0, l.jsx)(ed, {
                          fullScreen: d,
                          cycleDetails: r,
                          moduleDetails: o,
                          projectDetails: c,
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
    },
    14649: function (e, s, t) {
      t.d(s, {
        _X: function () {
          return C;
        },
        $X: function () {
          return Q;
        },
        VM: function () {
          return S;
        },
        gs: function () {
          return D;
        },
        ln: function () {
          return J;
        },
        bE: function () {
          return el;
        },
        Mx: function () {
          return ei;
        },
        C$: function () {
          return ec;
        },
        y: function () {
          return eu;
        },
        SW: function () {
          return ea;
        },
        Mo: function () {
          return R;
        },
        yx: function () {
          return ex;
        },
        fr: function () {
          return T;
        },
        mc: function () {
          return $;
        },
        pX: function () {
          return L;
        },
        W: function () {
          return Y;
        },
        Ab: function () {
          return G;
        },
        FZ: function () {
          return eh;
        },
        Zj: function () {
          return ev;
        },
        CK: function () {
          return U;
        },
        BL: function () {
          return es;
        },
      });
      var l = t(24246),
        i = t(27378),
        a = t(43659),
        n = t(79894),
        r = t.n(n),
        o = t(86677),
        c = t(47542),
        d = t(44973);
      /**
       * @license lucide-react v0.378.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let u = (0, t(73471).Z)('PanelRight', [
        [
          'rect',
          { width: '18', height: '18', x: '3', y: '3', rx: '2', key: 'afitv7' },
        ],
        ['path', { d: 'M15 3v18', key: '14nvp0' }],
      ]);
      var x = t(25449),
        m = t(27441),
        p = t(78593),
        h = t(68114),
        v = t(91256),
        j = t(93997),
        f = t(51374),
        g = t(6780),
        b = t(1422),
        y = t(10712),
        N = t(10634),
        w = t(15108),
        _ = t(18894);
      let k = e => {
          let { cycleId: s } = e,
            { workspaceSlug: t, projectId: i } = (0, o.useRouter)().query,
            { getCycleById: a } = (0, N.nv)(),
            n = a(s);
          return n
            ? (0, l.jsx)(
                x.fR.MenuItem,
                {
                  children: (0, l.jsxs)(r(), {
                    href: '/'
                      .concat(t, '/projects/')
                      .concat(i, '/cycles/')
                      .concat(n.id),
                    className: 'flex items-center gap-1.5',
                    children: [
                      (0, l.jsx)(x.sI, { className: 'h-3 w-3' }),
                      (0, y.aF)(n.name, 40),
                    ],
                  }),
                },
                n.id
              )
            : null;
        },
        C = (0, a.Pi)(() => {
          var e, s, t, a, n, y, C, I;
          let [A, S] = (0, i.useState)(!1),
            P = (0, o.useRouter)(),
            { workspaceSlug: F, projectId: D, cycleId: E } = P.query,
            {
              issuesFilter: { issueFilters: O, updateFilters: R },
            } = (0, N.gk)(j.rS.CYCLE),
            { currentProjectCycleIds: M, getCycleById: z } = (0, N.nv)(),
            {
              commandPalette: { toggleCreateIssueModal: B },
            } = (0, N.IX)(),
            { setTrackElement: Z } = (0, N.DN)(),
            {
              membership: { currentProjectRole: T },
            } = (0, N.aF)(),
            { currentProjectDetails: L } = (0, N.PY)(),
            { projectStates: Y } = (0, N.eD)(),
            { projectLabels: q } = (0, N.NP)(),
            {
              project: { projectMemberIds: V },
            } = (0, N.Kb)(),
            { isMobile: U } = (0, _.L)(),
            W =
              null == O
                ? void 0
                : null === (e = O.displayFilters) || void 0 === e
                  ? void 0
                  : e.layout,
            { setValue: K, storedValue: X } = (0, w.Z)(
              'cycle_sidebar_collapsed',
              'false'
            ),
            H = !!X && 'true' === X,
            G = () => {
              K(''.concat(!H));
            },
            Q = (0, i.useCallback)(
              e => {
                F && D && R(F, D, j.gc.DISPLAY_FILTERS, { layout: e }, E);
              },
              [F, D, E, R]
            ),
            J = (0, i.useCallback)(
              (e, s) => {
                var t, l, i, a;
                if (!F || !D) return;
                let n =
                  null !==
                    (l =
                      null == O
                        ? void 0
                        : null === (t = O.filters) || void 0 === t
                          ? void 0
                          : t[e]) && void 0 !== l
                    ? l
                    : [];
                Array.isArray(s)
                  ? s.forEach(e => {
                      n.includes(e) ? n.splice(n.indexOf(e), 1) : n.push(e);
                    })
                  : (
                        null == O
                          ? void 0
                          : null === (a = O.filters) || void 0 === a
                            ? void 0
                            : null === (i = a[e]) || void 0 === i
                              ? void 0
                              : i.includes(s)
                      )
                    ? n.splice(n.indexOf(s), 1)
                    : n.push(s),
                  R(F, D, j.gc.FILTERS, { [e]: n }, E);
              },
              [F, D, E, O, R]
            ),
            $ = (0, i.useCallback)(
              e => {
                F && D && R(F, D, j.gc.DISPLAY_FILTERS, e, E);
              },
              [F, D, E, R]
            ),
            ee = (0, i.useCallback)(
              e => {
                F && D && R(F, D, j.gc.DISPLAY_PROPERTIES, e, E);
              },
              [F, D, E, R]
            ),
            es = E ? z(E.toString()) : void 0,
            et =
              (null == es
                ? void 0
                : null === (s = es.status) || void 0 === s
                  ? void 0
                  : s.toLocaleLowerCase()) === 'completed',
            el = T && [f.MC.ADMIN, f.MC.MEMBER].includes(T),
            ei = es
              ? (null == O
                  ? void 0
                  : null === (t = O.displayFilters) || void 0 === t
                    ? void 0
                    : t.sub_issue) ||
                null == es ||
                !es.sub_issues
                ? es.total_issues
                : es.total_issues - (null == es ? void 0 : es.sub_issues)
              : void 0,
            ea =
              0 !==
              (0, b.w)(
                null !== (a = null == O ? void 0 : O.filters) && void 0 !== a
                  ? a
                  : {}
              );
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(m.a5, {
                isOpen: A,
                onClose: () => S(!1),
                cycleDetails: null != es ? es : void 0,
              }),
              (0, l.jsx)('div', {
                className:
                  'relative z-[15] w-full items-center gap-x-2 gap-y-4',
                children: (0, l.jsxs)('div', {
                  className:
                    'flex justify-between bg-custom-sidebar-background-100 p-4',
                  children: [
                    (0, l.jsx)('div', {
                      className: 'flex items-center gap-2',
                      children: (0, l.jsxs)(x.Oo, {
                        onBack: P.back,
                        children: [
                          (0, l.jsx)(x.Oo.BreadcrumbItem, {
                            type: 'text',
                            link: (0, l.jsxs)('span', {
                              children: [
                                (0, l.jsx)('span', {
                                  className: 'hidden md:block',
                                  children: (0, l.jsx)(p.At, {
                                    label:
                                      null !==
                                        (n = null == L ? void 0 : L.name) &&
                                      void 0 !== n
                                        ? n
                                        : 'Project',
                                    href: '/'
                                      .concat(F, '/projects/')
                                      .concat(
                                        null == L ? void 0 : L.id,
                                        '/issues'
                                      ),
                                    icon:
                                      L &&
                                      (0, l.jsx)('span', {
                                        className:
                                          'grid place-items-center flex-shrink-0 h-4 w-4',
                                        children: (0, l.jsx)(v.h0, {
                                          logo:
                                            null == L ? void 0 : L.logo_props,
                                          className: 'text-sm',
                                        }),
                                      }),
                                  }),
                                }),
                                (0, l.jsx)(r(), {
                                  href: '/'
                                    .concat(F, '/projects/')
                                    .concat(
                                      null == L ? void 0 : L.id,
                                      '/issues'
                                    ),
                                  className:
                                    'block md:hidden pl-2 text-custom-text-300',
                                  children: '...',
                                }),
                              ],
                            }),
                          }),
                          (0, l.jsx)(x.Oo.BreadcrumbItem, {
                            type: 'text',
                            link: (0, l.jsx)(p.At, {
                              label: 'Cycles',
                              href: '/'
                                .concat(F, '/projects/')
                                .concat(D, '/cycles'),
                              icon: (0, l.jsx)(x.sI, {
                                className: 'h-4 w-4 text-custom-text-300',
                              }),
                            }),
                          }),
                          (0, l.jsx)(x.Oo.BreadcrumbItem, {
                            type: 'component',
                            component: (0, l.jsx)(x.fR, {
                              label: (0, l.jsxs)(l.Fragment, {
                                children: [
                                  (0, l.jsx)(x.sI, { className: 'h-3 w-3' }),
                                  (0, l.jsxs)('div', {
                                    className:
                                      'flex items-center gap-2 w-auto max-w-[70px] sm:max-w-[200px] truncate',
                                    children: [
                                      (0, l.jsx)('p', {
                                        className: 'truncate',
                                        children:
                                          (null == es ? void 0 : es.name) &&
                                          es.name,
                                      }),
                                      ei && ei > 0
                                        ? (0, l.jsx)(x.u, {
                                            isMobile: U,
                                            tooltipContent: 'There are '
                                              .concat(ei, ' ')
                                              .concat(
                                                ei > 1 ? 'issues' : 'issue',
                                                ' in this cycle'
                                              ),
                                            position: 'bottom',
                                            children: (0, l.jsx)('span', {
                                              className:
                                                'cursor-default flex items-center text-center justify-center px-2 flex-shrink-0 bg-custom-primary-100/20 text-custom-primary-100 text-xs font-semibold rounded-xl',
                                              children: ei,
                                            }),
                                          })
                                        : null,
                                    ],
                                  }),
                                ],
                              }),
                              className: 'ml-1.5 flex-shrink-0 truncate',
                              placement: 'bottom-start',
                              children:
                                null == M
                                  ? void 0
                                  : M.map(e =>
                                      (0, l.jsx)(k, { cycleId: e }, e)
                                    ),
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, l.jsxs)('div', {
                      className: 'hidden md:flex items-center gap-2 ',
                      children: [
                        (0, l.jsx)(h.ZxZ, {
                          layouts: [
                            'list',
                            'kanban',
                            'calendar',
                            'spreadsheet',
                            'gantt_chart',
                          ],
                          onChange: e => Q(e),
                          selectedLayout: W,
                        }),
                        (0, l.jsx)(h.lqY, {
                          title: 'Filters',
                          placement: 'bottom-end',
                          isFiltersApplied: ea,
                          children: (0, l.jsx)(h.dGX, {
                            filters:
                              null !== (y = null == O ? void 0 : O.filters) &&
                              void 0 !== y
                                ? y
                                : {},
                            handleFiltersUpdate: J,
                            layoutDisplayFiltersOptions: W
                              ? j.BI.issues[W]
                              : void 0,
                            labels: q,
                            memberIds: null != V ? V : void 0,
                            states: Y,
                            cycleViewDisabled: !(null == L
                              ? void 0
                              : L.cycle_view),
                            moduleViewDisabled: !(null == L
                              ? void 0
                              : L.module_view),
                          }),
                        }),
                        (0, l.jsx)(h.lqY, {
                          title: 'Display',
                          placement: 'bottom-end',
                          children: (0, l.jsx)(h.hvF, {
                            layoutDisplayFiltersOptions: W
                              ? j.BI.issues[W]
                              : void 0,
                            displayFilters:
                              null !==
                                (C = null == O ? void 0 : O.displayFilters) &&
                              void 0 !== C
                                ? C
                                : {},
                            handleDisplayFiltersUpdate: $,
                            displayProperties:
                              null !==
                                (I =
                                  null == O ? void 0 : O.displayProperties) &&
                              void 0 !== I
                                ? I
                                : {},
                            handleDisplayPropertiesUpdate: ee,
                            ignoreGroupedFilters: ['cycle'],
                            cycleViewDisabled: !(null == L
                              ? void 0
                              : L.cycle_view),
                            moduleViewDisabled: !(null == L
                              ? void 0
                              : L.module_view),
                          }),
                        }),
                        el &&
                          (0, l.jsxs)(l.Fragment, {
                            children: [
                              (0, l.jsx)(x.zx, {
                                onClick: () => S(!0),
                                variant: 'neutral-primary',
                                size: 'sm',
                                children: 'Analytics',
                              }),
                              !et &&
                                (0, l.jsx)(x.zx, {
                                  onClick: () => {
                                    Z('Cycle issues page'), B(!0, j.rS.CYCLE);
                                  },
                                  size: 'sm',
                                  prependIcon: (0, l.jsx)(c.Z, {}),
                                  children: 'Add Issue',
                                }),
                            ],
                          }),
                        (0, l.jsx)('button', {
                          type: 'button',
                          className:
                            'grid h-7 w-7 place-items-center rounded p-1 outline-none hover:bg-custom-sidebar-background-80',
                          onClick: G,
                          children: (0, l.jsx)(d.Z, {
                            className: 'h-4 w-4 duration-300 '.concat(
                              H ? '-rotate-180' : ''
                            ),
                          }),
                        }),
                      ],
                    }),
                    (0, l.jsx)('button', {
                      type: 'button',
                      className:
                        'grid md:hidden h-7 w-7 place-items-center rounded p-1 outline-none hover:bg-custom-sidebar-background-80',
                      onClick: G,
                      children: (0, l.jsx)(u, {
                        className: (0, g.cn)(
                          'w-4 h-4',
                          H ? 'text-custom-text-200' : 'text-[#3E63DD]'
                        ),
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        });
      var I = t(86936),
        A = t(93116);
      let S = (0, a.Pi)(() => {
        var e, s, t, a;
        let [n, r] = (0, i.useState)(!1),
          { workspaceSlug: d, globalViewId: u } = (0, o.useRouter)().query,
          {
            issuesFilter: { filters: m, updateFilters: v },
          } = (0, N.gk)(j.rS.GLOBAL),
          {
            membership: { currentWorkspaceRole: f },
          } = (0, N.aF)(),
          { workspaceLabels: g } = (0, N.NP)(),
          {
            workspace: { workspaceMemberIds: y },
          } = (0, N.Kb)(),
          w = u ? m[u.toString()] : void 0,
          _ = (0, i.useCallback)(
            (e, s) => {
              var t, l, i, a;
              if (!d || !u) return;
              let n =
                null !==
                  (l =
                    null == w
                      ? void 0
                      : null === (t = w.filters) || void 0 === t
                        ? void 0
                        : t[e]) && void 0 !== l
                  ? l
                  : [];
              Array.isArray(s)
                ? s.forEach(e => {
                    n.includes(e) ? n.splice(n.indexOf(e), 1) : n.push(e);
                  })
                : (
                      null == w
                        ? void 0
                        : null === (a = w.filters) || void 0 === a
                          ? void 0
                          : null === (i = a[e]) || void 0 === i
                            ? void 0
                            : i.includes(s)
                    )
                  ? n.splice(n.indexOf(s), 1)
                  : n.push(s),
                v(d.toString(), void 0, j.gc.FILTERS, { [e]: n }, u.toString());
            },
            [d, w, v, u]
          ),
          k = (0, i.useCallback)(
            e => {
              d &&
                u &&
                v(d.toString(), void 0, j.gc.DISPLAY_FILTERS, e, u.toString());
            },
            [d, v, u]
          ),
          C = (0, i.useCallback)(
            e => {
              d &&
                u &&
                v(
                  d.toString(),
                  void 0,
                  j.gc.DISPLAY_PROPERTIES,
                  e,
                  u.toString()
                );
            },
            [d, v, u]
          ),
          S = !!f && f >= A.fp.MEMBER,
          P =
            0 !==
            (0, b.w)(
              null !== (e = null == w ? void 0 : w.filters) && void 0 !== e
                ? e
                : {}
            );
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(I.OR, { isOpen: n, onClose: () => r(!1) }),
            (0, l.jsxs)('div', {
              className:
                'relative z-[15] flex h-[3.75rem] w-full items-center justify-between gap-x-2 gap-y-4 bg-custom-sidebar-background-100 p-4',
              children: [
                (0, l.jsx)('div', {
                  className: 'relative flex gap-2',
                  children: (0, l.jsx)(x.Oo, {
                    children: (0, l.jsx)(x.Oo.BreadcrumbItem, {
                      type: 'text',
                      link: (0, l.jsx)(p.At, {
                        label: 'All Issues',
                        icon: (0, l.jsx)(x.uQ, {
                          className: 'h-4 w-4 text-custom-text-300',
                        }),
                      }),
                    }),
                  }),
                }),
                (0, l.jsxs)('div', {
                  className: 'flex items-center gap-2',
                  children: [
                    (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsx)(h.lqY, {
                          title: 'Filters',
                          placement: 'bottom-end',
                          isFiltersApplied: P,
                          children: (0, l.jsx)(h.dGX, {
                            layoutDisplayFiltersOptions:
                              j.BI.my_issues.spreadsheet,
                            filters:
                              null !== (s = null == w ? void 0 : w.filters) &&
                              void 0 !== s
                                ? s
                                : {},
                            handleFiltersUpdate: _,
                            labels: null != g ? g : void 0,
                            memberIds: null != y ? y : void 0,
                          }),
                        }),
                        (0, l.jsx)(h.lqY, {
                          title: 'Display',
                          placement: 'bottom-end',
                          children: (0, l.jsx)(h.hvF, {
                            layoutDisplayFiltersOptions:
                              j.BI.my_issues.spreadsheet,
                            displayFilters:
                              null !==
                                (t = null == w ? void 0 : w.displayFilters) &&
                              void 0 !== t
                                ? t
                                : {},
                            handleDisplayFiltersUpdate: k,
                            displayProperties:
                              null !==
                                (a =
                                  null == w ? void 0 : w.displayProperties) &&
                              void 0 !== a
                                ? a
                                : {},
                            handleDisplayPropertiesUpdate: C,
                          }),
                        }),
                      ],
                    }),
                    S &&
                      (0, l.jsx)(x.zx, {
                        variant: 'primary',
                        size: 'sm',
                        prependIcon: (0, l.jsx)(c.Z, {}),
                        onClick: () => r(!0),
                        children: 'New View',
                      }),
                  ],
                }),
              ],
            }),
          ],
        });
      });
      var P = t(76926);
      let F = e => {
          let { moduleId: s } = e,
            { workspaceSlug: t, projectId: i } = (0, o.useRouter)().query,
            { getModuleById: a } = (0, N.b7)(),
            n = a(s);
          return n
            ? (0, l.jsx)(
                x.fR.MenuItem,
                {
                  children: (0, l.jsxs)(r(), {
                    href: '/'
                      .concat(t, '/projects/')
                      .concat(i, '/modules/')
                      .concat(n.id),
                    className: 'flex items-center gap-1.5',
                    children: [
                      (0, l.jsx)(x.kB, { className: 'h-3 w-3' }),
                      (0, y.aF)(n.name, 40),
                    ],
                  }),
                },
                n.id
              )
            : null;
        },
        D = (0, a.Pi)(() => {
          var e, s, t, a, n, y, k;
          let [C, I] = (0, i.useState)(!1),
            A = (0, o.useRouter)(),
            { workspaceSlug: S, projectId: D, moduleId: E } = A.query,
            { isMobile: O } = (0, _.L)(),
            {
              issuesFilter: { issueFilters: R },
            } = (0, N.gk)(j.rS.MODULE),
            { updateFilters: M } = (0, P.C)(j.rS.MODULE),
            { projectModuleIds: z, getModuleById: B } = (0, N.b7)(),
            {
              commandPalette: { toggleCreateIssueModal: Z },
            } = (0, N.IX)(),
            { setTrackElement: T } = (0, N.DN)(),
            {
              membership: { currentProjectRole: L },
            } = (0, N.aF)(),
            { currentProjectDetails: Y } = (0, N.PY)(),
            { projectLabels: q } = (0, N.NP)(),
            { projectStates: V } = (0, N.eD)(),
            {
              project: { projectMemberIds: U },
            } = (0, N.Kb)(),
            { setValue: W, storedValue: K } = (0, w.Z)(
              'module_sidebar_collapsed',
              'false'
            ),
            X = !!K && 'true' === K,
            H =
              null == R
                ? void 0
                : null === (e = R.displayFilters) || void 0 === e
                  ? void 0
                  : e.layout,
            G = (0, i.useCallback)(
              e => {
                D && M(D.toString(), j.gc.DISPLAY_FILTERS, { layout: e });
              },
              [D, E, M]
            ),
            Q = (0, i.useCallback)(
              (e, s) => {
                var t, l, i, a;
                if (!D) return;
                let n =
                  null !==
                    (l =
                      null == R
                        ? void 0
                        : null === (t = R.filters) || void 0 === t
                          ? void 0
                          : t[e]) && void 0 !== l
                    ? l
                    : [];
                Array.isArray(s)
                  ? s.forEach(e => {
                      n.includes(e) ? n.splice(n.indexOf(e), 1) : n.push(e);
                    })
                  : (
                        null == R
                          ? void 0
                          : null === (a = R.filters) || void 0 === a
                            ? void 0
                            : null === (i = a[e]) || void 0 === i
                              ? void 0
                              : i.includes(s)
                      )
                    ? n.splice(n.indexOf(s), 1)
                    : n.push(s),
                  M(D.toString(), j.gc.FILTERS, { [e]: n });
              },
              [D, E, R, M]
            ),
            J = (0, i.useCallback)(
              e => {
                D && M(D.toString(), j.gc.DISPLAY_FILTERS, e);
              },
              [D, E, M]
            ),
            $ = (0, i.useCallback)(
              e => {
                D && M(D.toString(), j.gc.DISPLAY_PROPERTIES, e);
              },
              [D, E, M]
            ),
            ee = E ? B(E.toString()) : void 0,
            es = L && [f.MC.ADMIN, f.MC.MEMBER].includes(L),
            et = ee
              ? (null == R
                  ? void 0
                  : null === (s = R.displayFilters) || void 0 === s
                    ? void 0
                    : s.sub_issue) || !ee.sub_issues
                ? ee.total_issues
                : ee.total_issues - ee.sub_issues
              : void 0,
            el =
              0 !==
              (0, b.w)(
                null !== (t = null == R ? void 0 : R.filters) && void 0 !== t
                  ? t
                  : {}
              );
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(m.a5, {
                isOpen: C,
                onClose: () => I(!1),
                moduleDetails: null != ee ? ee : void 0,
              }),
              (0, l.jsx)('div', {
                className: 'relative z-[15] items-center gap-x-2 gap-y-4',
                children: (0, l.jsxs)('div', {
                  className:
                    'flex justify-between bg-custom-sidebar-background-100 p-4',
                  children: [
                    (0, l.jsx)('div', {
                      className: 'flex items-center gap-2',
                      children: (0, l.jsxs)(x.Oo, {
                        onBack: A.back,
                        children: [
                          (0, l.jsx)(x.Oo.BreadcrumbItem, {
                            type: 'text',
                            link: (0, l.jsxs)('span', {
                              children: [
                                (0, l.jsx)('span', {
                                  className: 'hidden md:block',
                                  children: (0, l.jsx)(p.At, {
                                    label:
                                      null !==
                                        (a = null == Y ? void 0 : Y.name) &&
                                      void 0 !== a
                                        ? a
                                        : 'Project',
                                    href: '/'
                                      .concat(S, '/projects/')
                                      .concat(
                                        null == Y ? void 0 : Y.id,
                                        '/issues'
                                      ),
                                    icon:
                                      Y &&
                                      (0, l.jsx)('span', {
                                        className:
                                          'grid place-items-center flex-shrink-0 h-4 w-4',
                                        children: (0, l.jsx)(v.h0, {
                                          logo:
                                            null == Y ? void 0 : Y.logo_props,
                                          className: 'text-sm',
                                        }),
                                      }),
                                  }),
                                }),
                                (0, l.jsx)(r(), {
                                  href: '/'
                                    .concat(S, '/projects/')
                                    .concat(
                                      null == Y ? void 0 : Y.id,
                                      '/issues'
                                    ),
                                  className:
                                    'block md:hidden pl-2 text-custom-text-300',
                                  children: '...',
                                }),
                              ],
                            }),
                          }),
                          (0, l.jsx)(x.Oo.BreadcrumbItem, {
                            type: 'text',
                            link: (0, l.jsx)(p.At, {
                              href: '/'
                                .concat(S, '/projects/')
                                .concat(D, '/modules'),
                              label: 'Modules',
                              icon: (0, l.jsx)(x.kB, {
                                className: 'h-4 w-4 text-custom-text-300',
                              }),
                            }),
                          }),
                          (0, l.jsx)(x.Oo.BreadcrumbItem, {
                            type: 'component',
                            component: (0, l.jsx)(x.fR, {
                              label: (0, l.jsxs)(l.Fragment, {
                                children: [
                                  (0, l.jsx)(x.kB, { className: 'h-3 w-3' }),
                                  (0, l.jsxs)('div', {
                                    className:
                                      'flex items-center gap-2 w-auto max-w-[70px] sm:max-w-[200px] truncate',
                                    children: [
                                      (0, l.jsx)('p', {
                                        className: 'truncate',
                                        children:
                                          (null == ee ? void 0 : ee.name) &&
                                          ee.name,
                                      }),
                                      et && et > 0
                                        ? (0, l.jsx)(x.u, {
                                            isMobile: O,
                                            tooltipContent: 'There are '
                                              .concat(et, ' ')
                                              .concat(
                                                et > 1 ? 'issues' : 'issue',
                                                ' in this module'
                                              ),
                                            position: 'bottom',
                                            children: (0, l.jsx)('span', {
                                              className:
                                                'cursor-default flex items-center text-center justify-center px-2 flex-shrink-0 bg-custom-primary-100/20 text-custom-primary-100 text-xs font-semibold rounded-xl',
                                              children: et,
                                            }),
                                          })
                                        : null,
                                    ],
                                  }),
                                ],
                              }),
                              className: 'ml-1.5 flex-shrink-0',
                              placement: 'bottom-start',
                              children:
                                null == z
                                  ? void 0
                                  : z.map(e =>
                                      (0, l.jsx)(F, { moduleId: e }, e)
                                    ),
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, l.jsxs)('div', {
                      className: 'flex items-center gap-2',
                      children: [
                        (0, l.jsxs)('div', {
                          className: 'hidden md:flex gap-2',
                          children: [
                            (0, l.jsx)(h.ZxZ, {
                              layouts: [
                                'list',
                                'kanban',
                                'calendar',
                                'spreadsheet',
                                'gantt_chart',
                              ],
                              onChange: e => G(e),
                              selectedLayout: H,
                            }),
                            (0, l.jsx)(h.lqY, {
                              title: 'Filters',
                              placement: 'bottom-end',
                              isFiltersApplied: el,
                              children: (0, l.jsx)(h.dGX, {
                                filters:
                                  null !==
                                    (n = null == R ? void 0 : R.filters) &&
                                  void 0 !== n
                                    ? n
                                    : {},
                                handleFiltersUpdate: Q,
                                layoutDisplayFiltersOptions: H
                                  ? j.BI.issues[H]
                                  : void 0,
                                labels: q,
                                memberIds: null != U ? U : void 0,
                                states: V,
                                cycleViewDisabled: !(null == Y
                                  ? void 0
                                  : Y.cycle_view),
                                moduleViewDisabled: !(null == Y
                                  ? void 0
                                  : Y.module_view),
                              }),
                            }),
                            (0, l.jsx)(h.lqY, {
                              title: 'Display',
                              placement: 'bottom-end',
                              children: (0, l.jsx)(h.hvF, {
                                layoutDisplayFiltersOptions: H
                                  ? j.BI.issues[H]
                                  : void 0,
                                displayFilters:
                                  null !==
                                    (y =
                                      null == R ? void 0 : R.displayFilters) &&
                                  void 0 !== y
                                    ? y
                                    : {},
                                handleDisplayFiltersUpdate: J,
                                displayProperties:
                                  null !==
                                    (k =
                                      null == R
                                        ? void 0
                                        : R.displayProperties) && void 0 !== k
                                    ? k
                                    : {},
                                handleDisplayPropertiesUpdate: $,
                                ignoreGroupedFilters: ['module'],
                                cycleViewDisabled: !(null == Y
                                  ? void 0
                                  : Y.cycle_view),
                                moduleViewDisabled: !(null == Y
                                  ? void 0
                                  : Y.module_view),
                              }),
                            }),
                          ],
                        }),
                        es &&
                          (0, l.jsxs)(l.Fragment, {
                            children: [
                              (0, l.jsx)(x.zx, {
                                className: 'hidden md:block',
                                onClick: () => I(!0),
                                variant: 'neutral-primary',
                                size: 'sm',
                                children: 'Analytics',
                              }),
                              (0, l.jsx)(x.zx, {
                                className: 'hidden sm:flex',
                                onClick: () => {
                                  T('Module issues page'), Z(!0, j.rS.MODULE);
                                },
                                size: 'sm',
                                prependIcon: (0, l.jsx)(c.Z, {}),
                                children: 'Add Issue',
                              }),
                            ],
                          }),
                        (0, l.jsxs)('button', {
                          type: 'button',
                          className:
                            'grid h-7 w-7 place-items-center rounded p-1 outline-none hover:bg-custom-sidebar-background-80',
                          onClick: () => {
                            W(''.concat(!X));
                          },
                          children: [
                            (0, l.jsx)(d.Z, {
                              className:
                                'h-4 w-4 duration-300 hidden md:block '.concat(
                                  X ? '-rotate-180' : ''
                                ),
                            }),
                            (0, l.jsx)(u, {
                              className: (0, g.cn)(
                                'w-4 h-4 block md:hidden',
                                X ? 'text-custom-text-200' : 'text-[#3E63DD]'
                              ),
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
      var E = t(55968),
        O = t(77087);
      let R = (0, a.Pi)(() => {
        var e;
        let [s, t] = (0, i.useState)(!1),
          { workspaceSlug: a, projectId: n } = (0, o.useRouter)().query,
          { currentProjectDetails: r } = (0, N.PY)(),
          { loader: d } = (0, N.wN)();
        return (0, l.jsxs)('div', {
          className:
            'relative z-10 flex h-[3.75rem] w-full flex-shrink-0 flex-row items-center justify-between gap-x-2 gap-y-4 bg-custom-sidebar-background-100 p-4',
          children: [
            (0, l.jsx)('div', {
              className:
                'flex w-full flex-grow items-center gap-2 overflow-ellipsis whitespace-nowrap',
              children: (0, l.jsxs)('div', {
                className: 'flex items-center gap-4',
                children: [
                  (0, l.jsxs)(x.Oo, {
                    children: [
                      (0, l.jsx)(x.Oo.BreadcrumbItem, {
                        type: 'text',
                        link: (0, l.jsx)(p.At, {
                          href: '/'.concat(a, '/projects'),
                          label:
                            null !== (e = null == r ? void 0 : r.name) &&
                            void 0 !== e
                              ? e
                              : 'Project',
                          icon:
                            r &&
                            (0, l.jsx)('span', {
                              className:
                                'grid place-items-center flex-shrink-0 h-4 w-4',
                              children: (0, l.jsx)(v.h0, {
                                logo: null == r ? void 0 : r.logo_props,
                                className: 'text-sm',
                              }),
                            }),
                        }),
                      }),
                      (0, l.jsx)(x.Oo.BreadcrumbItem, {
                        type: 'text',
                        link: (0, l.jsx)(p.At, {
                          label: 'Inbox Issues',
                          icon: (0, l.jsx)(x.uQ, {
                            className: 'h-4 w-4 text-custom-text-300',
                          }),
                        }),
                      }),
                    ],
                  }),
                  'pagination-loading' === d &&
                    (0, l.jsxs)('div', {
                      className:
                        'flex items-center gap-1.5 text-custom-text-300',
                      children: [
                        (0, l.jsx)(E.Z, {
                          className: 'h-3.5 w-3.5 animate-spin',
                        }),
                        (0, l.jsx)('p', {
                          className: 'text-sm',
                          children: 'Syncing...',
                        }),
                      ],
                    }),
                ],
              }),
            }),
            (null == r ? void 0 : r.inbox_view) &&
              a &&
              n &&
              (0, l.jsxs)('div', {
                className: 'flex items-center gap-2',
                children: [
                  (0, l.jsx)(O.Y8, {
                    workspaceSlug: a.toString(),
                    projectId: n.toString(),
                    modalState: s,
                    handleModalClose: () => t(!1),
                    issue: void 0,
                  }),
                  (0, l.jsx)(x.zx, {
                    variant: 'primary',
                    prependIcon: (0, l.jsx)(c.Z, {}),
                    size: 'sm',
                    onClick: () => t(!0),
                    children: 'Add Issue',
                  }),
                ],
              }),
          ],
        });
      });
      var M = t(26536),
        z = t(3807),
        B = t(37969),
        Z = t(81309);
      let T = (0, a.Pi)(() => {
          var e, s, t, a, n, r, d;
          let [u, g] = (0, i.useState)(!1),
            y = (0, o.useRouter)(),
            { workspaceSlug: w, projectId: k } = y.query,
            {
              project: { projectMemberIds: C },
            } = (0, N.Kb)(),
            {
              issuesFilter: { issueFilters: I, updateFilters: A },
            } = (0, Z.g)(j.rS.PROJECT),
            {
              commandPalette: { toggleCreateIssueModal: S },
            } = (0, N.IX)(),
            { setTrackElement: P } = (0, N.DN)(),
            {
              membership: { currentProjectRole: F },
            } = (0, N.aF)(),
            { currentProjectDetails: D } = (0, N.PY)(),
            { projectStates: E } = (0, N.eD)(),
            { projectLabels: O } = (0, N.NP)(),
            { isMobile: R } = (0, _.L)(),
            T =
              null == I
                ? void 0
                : null === (e = I.displayFilters) || void 0 === e
                  ? void 0
                  : e.layout,
            L = (0, i.useCallback)(
              (e, s) => {
                var t, l, i, a;
                if (!w || !k) return;
                let n =
                  null !==
                    (l =
                      null == I
                        ? void 0
                        : null === (t = I.filters) || void 0 === t
                          ? void 0
                          : t[e]) && void 0 !== l
                    ? l
                    : [];
                Array.isArray(s)
                  ? s.forEach(e => {
                      n.includes(e) ? n.splice(n.indexOf(e), 1) : n.push(e);
                    })
                  : (
                        null == I
                          ? void 0
                          : null === (a = I.filters) || void 0 === a
                            ? void 0
                            : null === (i = a[e]) || void 0 === i
                              ? void 0
                              : i.includes(s)
                      )
                    ? n.splice(n.indexOf(s), 1)
                    : n.push(s),
                  A(w, k, j.gc.FILTERS, { [e]: n });
              },
              [w, k, I, A]
            ),
            Y = (0, i.useCallback)(
              e => {
                w && k && A(w, k, j.gc.DISPLAY_FILTERS, { layout: e });
              },
              [w, k, A]
            ),
            q = (0, i.useCallback)(
              e => {
                w && k && A(w, k, j.gc.DISPLAY_FILTERS, e);
              },
              [w, k, A]
            ),
            V = (0, i.useCallback)(
              e => {
                w && k && A(w, k, j.gc.DISPLAY_PROPERTIES, e);
              },
              [w, k, A]
            ),
            U = 'https://plane.sh',
            W = F && [f.MC.ADMIN, f.MC.MEMBER].includes(F),
            K = D
              ? (null == I
                  ? void 0
                  : null === (s = I.displayFilters) || void 0 === s
                    ? void 0
                    : s.sub_issue) ||
                null == D ||
                !D.sub_issues
                ? null == D
                  ? void 0
                  : D.total_issues
                : (null == D ? void 0 : D.total_issues) -
                  (null == D ? void 0 : D.sub_issues)
              : void 0,
            X =
              0 !==
              (0, b.w)(
                null !== (t = null == I ? void 0 : I.filters) && void 0 !== t
                  ? t
                  : {}
              );
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(m.a5, {
                isOpen: u,
                onClose: () => g(!1),
                projectDetails: null != D ? D : void 0,
              }),
              (0, l.jsxs)('div', {
                className:
                  'relative z-[15] flex h-[3.75rem] w-full flex-shrink-0 flex-row items-center justify-between gap-x-2 gap-y-4 bg-custom-sidebar-background-100 p-4',
                children: [
                  (0, l.jsxs)('div', {
                    className:
                      'flex w-full flex-grow items-center gap-2 overflow-ellipsis whitespace-nowrap',
                    children: [
                      (0, l.jsxs)('div', {
                        className: 'flex items-center gap-2.5',
                        children: [
                          (0, l.jsxs)(x.Oo, {
                            onBack: () => y.back(),
                            children: [
                              (0, l.jsx)(x.Oo.BreadcrumbItem, {
                                type: 'text',
                                link: (0, l.jsx)(p.At, {
                                  href: '/'.concat(w, '/projects'),
                                  label:
                                    null !==
                                      (a = null == D ? void 0 : D.name) &&
                                    void 0 !== a
                                      ? a
                                      : 'Project',
                                  icon: D
                                    ? D &&
                                      (0, l.jsx)('span', {
                                        className:
                                          'grid place-items-center flex-shrink-0 h-4 w-4',
                                        children: (0, l.jsx)(v.h0, {
                                          logo:
                                            null == D ? void 0 : D.logo_props,
                                          className: 'text-sm',
                                        }),
                                      })
                                    : (0, l.jsx)('span', {
                                        className:
                                          'grid h-7 w-7 flex-shrink-0 place-items-center rounded uppercase',
                                        children: (0, l.jsx)(M.Z, {
                                          className: 'h-4 w-4',
                                        }),
                                      }),
                                }),
                              }),
                              (0, l.jsx)(x.Oo.BreadcrumbItem, {
                                type: 'text',
                                link: (0, l.jsx)(p.At, {
                                  label: 'Issues',
                                  icon: (0, l.jsx)(x.uQ, {
                                    className: 'h-4 w-4 text-custom-text-300',
                                  }),
                                }),
                              }),
                            ],
                          }),
                          K && K > 0
                            ? (0, l.jsx)(x.u, {
                                isMobile: R,
                                tooltipContent: 'There are '
                                  .concat(K, ' ')
                                  .concat(
                                    K > 1 ? 'issues' : 'issue',
                                    ' in this project'
                                  ),
                                position: 'bottom',
                                children: (0, l.jsx)('span', {
                                  className:
                                    'cursor-default flex items-center text-center justify-center px-2.5 py-0.5 flex-shrink-0 bg-custom-primary-100/20 text-custom-primary-100 text-xs font-semibold rounded-xl',
                                  children: K,
                                }),
                              })
                            : null,
                        ],
                      }),
                      (null == D ? void 0 : D.is_deployed) &&
                        U &&
                        (0, l.jsxs)('a', {
                          href: ''
                            .concat(U, '/')
                            .concat(w, '/')
                            .concat(null == D ? void 0 : D.id),
                          className:
                            'group flex items-center gap-1.5 rounded bg-custom-primary-100/10 px-2.5 py-1 text-xs font-medium text-custom-primary-100',
                          target: '_blank',
                          rel: 'noopener noreferrer',
                          children: [
                            (0, l.jsx)(z.Z, {
                              className: 'h-1.5 w-1.5 fill-custom-primary-100',
                              strokeWidth: 2,
                            }),
                            'Public',
                            (0, l.jsx)(B.Z, {
                              className: 'hidden h-3 w-3 group-hover:block',
                              strokeWidth: 2,
                            }),
                          ],
                        }),
                    ],
                  }),
                  (0, l.jsxs)('div', {
                    className: 'items-center gap-2 hidden md:flex',
                    children: [
                      (0, l.jsx)(h.ZxZ, {
                        layouts: [
                          'list',
                          'kanban',
                          'calendar',
                          'spreadsheet',
                          'gantt_chart',
                        ],
                        onChange: e => Y(e),
                        selectedLayout: T,
                      }),
                      (0, l.jsx)(h.lqY, {
                        title: 'Filters',
                        placement: 'bottom-end',
                        isFiltersApplied: X,
                        children: (0, l.jsx)(h.dGX, {
                          filters:
                            null !== (n = null == I ? void 0 : I.filters) &&
                            void 0 !== n
                              ? n
                              : {},
                          handleFiltersUpdate: L,
                          layoutDisplayFiltersOptions: T
                            ? j.BI.issues[T]
                            : void 0,
                          labels: O,
                          memberIds: null != C ? C : void 0,
                          states: E,
                          cycleViewDisabled: !(null == D
                            ? void 0
                            : D.cycle_view),
                          moduleViewDisabled: !(null == D
                            ? void 0
                            : D.module_view),
                        }),
                      }),
                      (0, l.jsx)(h.lqY, {
                        title: 'Display',
                        placement: 'bottom-end',
                        children: (0, l.jsx)(h.hvF, {
                          layoutDisplayFiltersOptions: T
                            ? j.BI.issues[T]
                            : void 0,
                          displayFilters:
                            null !==
                              (r = null == I ? void 0 : I.displayFilters) &&
                            void 0 !== r
                              ? r
                              : {},
                          handleDisplayFiltersUpdate: q,
                          displayProperties:
                            null !==
                              (d = null == I ? void 0 : I.displayProperties) &&
                            void 0 !== d
                              ? d
                              : {},
                          handleDisplayPropertiesUpdate: V,
                          cycleViewDisabled: !(null == D
                            ? void 0
                            : D.cycle_view),
                          moduleViewDisabled: !(null == D
                            ? void 0
                            : D.module_view),
                        }),
                      }),
                    ],
                  }),
                  W &&
                    (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsx)(x.zx, {
                          className: 'hidden md:block',
                          onClick: () => g(!0),
                          variant: 'neutral-primary',
                          size: 'sm',
                          children: 'Analytics',
                        }),
                        (0, l.jsxs)(x.zx, {
                          onClick: () => {
                            P('Project issues page'), S(!0, j.rS.PROJECT);
                          },
                          size: 'sm',
                          prependIcon: (0, l.jsx)(c.Z, {}),
                          children: [
                            (0, l.jsx)('div', {
                              className: 'hidden sm:block',
                              children: 'Add',
                            }),
                            ' Issue',
                          ],
                        }),
                      ],
                    }),
                ],
              }),
            ],
          });
        }),
        L = (0, a.Pi)(() => {
          var e, s, t, a, n, d;
          let {
              workspaceSlug: u,
              projectId: m,
              viewId: g,
            } = (0, o.useRouter)().query,
            {
              issuesFilter: { issueFilters: w, updateFilters: _ },
            } = (0, N.gk)(j.rS.PROJECT_VIEW),
            { setTrackElement: k } = (0, N.DN)(),
            {
              commandPalette: { toggleCreateIssueModal: C },
            } = (0, N.IX)(),
            {
              membership: { currentProjectRole: I },
            } = (0, N.aF)(),
            { currentProjectDetails: A } = (0, N.PY)(),
            { projectViewIds: S, getViewById: P } = (0, N.QJ)(),
            { projectStates: F } = (0, N.eD)(),
            { projectLabels: D } = (0, N.NP)(),
            {
              project: { projectMemberIds: E },
            } = (0, N.Kb)(),
            O =
              null == w
                ? void 0
                : null === (e = w.displayFilters) || void 0 === e
                  ? void 0
                  : e.layout,
            R = (0, i.useCallback)(
              e => {
                u &&
                  m &&
                  g &&
                  _(
                    u.toString(),
                    m.toString(),
                    j.gc.DISPLAY_FILTERS,
                    { layout: e },
                    g.toString()
                  );
              },
              [u, m, g, _]
            ),
            M = (0, i.useCallback)(
              (e, s) => {
                var t, l, i, a;
                if (!u || !m || !g) return;
                let n =
                  null !==
                    (l =
                      null == w
                        ? void 0
                        : null === (t = w.filters) || void 0 === t
                          ? void 0
                          : t[e]) && void 0 !== l
                    ? l
                    : [];
                Array.isArray(s)
                  ? s.forEach(e => {
                      n.includes(e) ? n.splice(n.indexOf(e), 1) : n.push(e);
                    })
                  : (
                        null == w
                          ? void 0
                          : null === (a = w.filters) || void 0 === a
                            ? void 0
                            : null === (i = a[e]) || void 0 === i
                              ? void 0
                              : i.includes(s)
                      )
                    ? n.splice(n.indexOf(s), 1)
                    : n.push(s),
                  _(
                    u.toString(),
                    m.toString(),
                    j.gc.FILTERS,
                    { [e]: n },
                    g.toString()
                  );
              },
              [u, m, g, w, _]
            ),
            z = (0, i.useCallback)(
              e => {
                u &&
                  m &&
                  g &&
                  _(
                    u.toString(),
                    m.toString(),
                    j.gc.DISPLAY_FILTERS,
                    e,
                    g.toString()
                  );
              },
              [u, m, g, _]
            ),
            B = (0, i.useCallback)(
              e => {
                u &&
                  m &&
                  g &&
                  _(
                    u.toString(),
                    m.toString(),
                    j.gc.DISPLAY_PROPERTIES,
                    e,
                    g.toString()
                  );
              },
              [u, m, g, _]
            ),
            Z = g ? P(g.toString()) : null,
            T = I && [f.MC.ADMIN, f.MC.MEMBER].includes(I),
            L =
              0 !==
              (0, b.w)(
                null !== (s = null == w ? void 0 : w.filters) && void 0 !== s
                  ? s
                  : {}
              );
          return (0, l.jsxs)('div', {
            className:
              'relative z-[15] flex h-[3.75rem] w-full items-center justify-between gap-x-2 gap-y-4 bg-custom-sidebar-background-100 p-4',
            children: [
              (0, l.jsx)('div', {
                className: 'flex items-center gap-2',
                children: (0, l.jsxs)(x.Oo, {
                  children: [
                    (0, l.jsx)(x.Oo.BreadcrumbItem, {
                      type: 'text',
                      link: (0, l.jsx)(p.At, {
                        href: '/'
                          .concat(u, '/projects/')
                          .concat(null == A ? void 0 : A.id, '/issues'),
                        label:
                          null !== (t = null == A ? void 0 : A.name) &&
                          void 0 !== t
                            ? t
                            : 'Project',
                        icon:
                          A &&
                          (0, l.jsx)('span', {
                            className:
                              'grid place-items-center flex-shrink-0 h-4 w-4',
                            children: (0, l.jsx)(v.h0, {
                              logo: null == A ? void 0 : A.logo_props,
                              className: 'text-sm',
                            }),
                          }),
                      }),
                    }),
                    (0, l.jsx)(x.Oo.BreadcrumbItem, {
                      type: 'text',
                      link: (0, l.jsx)(p.At, {
                        href: '/'
                          .concat(u, '/projects/')
                          .concat(null == A ? void 0 : A.id, '/views'),
                        label: 'Views',
                        icon: (0, l.jsx)(x.DK, {
                          className: 'h-4 w-4 text-custom-text-300',
                        }),
                      }),
                    }),
                    (0, l.jsx)(x.Oo.BreadcrumbItem, {
                      type: 'component',
                      component: (0, l.jsx)(x.fR, {
                        label: (0, l.jsxs)(l.Fragment, {
                          children: [
                            (0, l.jsx)(x.DK, { height: 12, width: 12 }),
                            (null == Z ? void 0 : Z.name) &&
                              (0, y.aF)(Z.name, 40),
                          ],
                        }),
                        className: 'ml-1.5',
                        placement: 'bottom-start',
                        children:
                          null == S
                            ? void 0
                            : S.map(e => {
                                let s = P(e);
                                if (s)
                                  return (0, l.jsx)(
                                    x.fR.MenuItem,
                                    {
                                      children: (0, l.jsxs)(r(), {
                                        href: '/'
                                          .concat(u, '/projects/')
                                          .concat(m, '/views/')
                                          .concat(e),
                                        className: 'flex items-center gap-1.5',
                                        children: [
                                          (0, l.jsx)(x.DK, {
                                            height: 12,
                                            width: 12,
                                          }),
                                          (0, y.aF)(s.name, 40),
                                        ],
                                      }),
                                    },
                                    e
                                  );
                              }),
                      }),
                    }),
                  ],
                }),
              }),
              (0, l.jsxs)('div', {
                className: 'flex items-center gap-2',
                children: [
                  (0, l.jsx)(h.ZxZ, {
                    layouts: [
                      'list',
                      'kanban',
                      'calendar',
                      'spreadsheet',
                      'gantt_chart',
                    ],
                    onChange: e => R(e),
                    selectedLayout: O,
                  }),
                  (0, l.jsx)(h.lqY, {
                    title: 'Filters',
                    placement: 'bottom-end',
                    disabled: !T,
                    isFiltersApplied: L,
                    children: (0, l.jsx)(h.dGX, {
                      filters:
                        null !== (a = null == w ? void 0 : w.filters) &&
                        void 0 !== a
                          ? a
                          : {},
                      handleFiltersUpdate: M,
                      layoutDisplayFiltersOptions: O ? j.BI.issues[O] : void 0,
                      labels: D,
                      memberIds: null != E ? E : void 0,
                      states: F,
                      cycleViewDisabled: !(null == A ? void 0 : A.cycle_view),
                      moduleViewDisabled: !(null == A ? void 0 : A.module_view),
                    }),
                  }),
                  (0, l.jsx)(h.lqY, {
                    title: 'Display',
                    placement: 'bottom-end',
                    children: (0, l.jsx)(h.hvF, {
                      layoutDisplayFiltersOptions: O ? j.BI.issues[O] : void 0,
                      displayFilters:
                        null !== (n = null == w ? void 0 : w.displayFilters) &&
                        void 0 !== n
                          ? n
                          : {},
                      handleDisplayFiltersUpdate: z,
                      displayProperties:
                        null !==
                          (d = null == w ? void 0 : w.displayProperties) &&
                        void 0 !== d
                          ? d
                          : {},
                      handleDisplayPropertiesUpdate: B,
                      cycleViewDisabled: !(null == A ? void 0 : A.cycle_view),
                      moduleViewDisabled: !(null == A ? void 0 : A.module_view),
                    }),
                  }),
                  T &&
                    (0, l.jsx)(x.zx, {
                      onClick: () => {
                        k('PROJECT_VIEW_PAGE_HEADER'), C(!0, j.rS.PROJECT_VIEW);
                      },
                      size: 'sm',
                      prependIcon: (0, l.jsx)(c.Z, {}),
                      children: 'Add Issue',
                    }),
                ],
              }),
            ],
          });
        }),
        Y = (0, a.Pi)(() => {
          var e;
          let { workspaceSlug: s } = (0, o.useRouter)().query,
            {
              commandPalette: { toggleCreateViewModal: t },
            } = (0, N.IX)(),
            {
              membership: { currentProjectRole: i },
            } = (0, N.aF)(),
            { currentProjectDetails: a } = (0, N.PY)(),
            n = i && [f.MC.ADMIN, f.MC.MEMBER].includes(i);
          return (0, l.jsx)(l.Fragment, {
            children: (0, l.jsxs)('div', {
              className:
                'relative z-10 flex h-[3.75rem] w-full flex-shrink-0 flex-row items-center justify-between gap-x-2 gap-y-4 bg-custom-sidebar-background-100 p-4',
              children: [
                (0, l.jsx)('div', {
                  className:
                    'flex w-full flex-grow items-center gap-2 overflow-ellipsis whitespace-nowrap',
                  children: (0, l.jsx)('div', {
                    children: (0, l.jsxs)(x.Oo, {
                      children: [
                        (0, l.jsx)(x.Oo.BreadcrumbItem, {
                          type: 'text',
                          link: (0, l.jsx)(p.At, {
                            href: '/'
                              .concat(s, '/projects/')
                              .concat(null == a ? void 0 : a.id, '/issues'),
                            label:
                              null !== (e = null == a ? void 0 : a.name) &&
                              void 0 !== e
                                ? e
                                : 'Project',
                            icon:
                              a &&
                              (0, l.jsx)('span', {
                                className:
                                  'grid place-items-center flex-shrink-0 h-4 w-4',
                                children: (0, l.jsx)(v.h0, {
                                  logo: null == a ? void 0 : a.logo_props,
                                  className: 'text-sm',
                                }),
                              }),
                          }),
                        }),
                        (0, l.jsx)(x.Oo.BreadcrumbItem, {
                          type: 'text',
                          link: (0, l.jsx)(p.At, {
                            label: 'Views',
                            icon: (0, l.jsx)(x.DK, {
                              className: 'h-4 w-4 text-custom-text-300',
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
                n &&
                  (0, l.jsx)('div', {
                    className: 'flex flex-shrink-0 items-center gap-2',
                    children: (0, l.jsx)('div', {
                      children: (0, l.jsx)(x.zx, {
                        variant: 'primary',
                        size: 'sm',
                        prependIcon: (0, l.jsx)(c.Z, {
                          className: 'h-3.5 w-3.5 stroke-2',
                        }),
                        onClick: () => t(!0),
                        children: 'Create View',
                      }),
                    }),
                  }),
              ],
            }),
          });
        });
      var q = t(50649),
        V = t(13995);
      let U = (0, q.Pi)(() => {
        let { analytics_tab: e } = (0, o.useRouter)().query,
          { theme: s } = (0, N.IX)();
        return (
          (0, i.useEffect)(() => {
            let e = () => {
              window &&
                window.innerWidth < 768 &&
                s.toggleWorkspaceAnalyticsSidebar(!0),
                window &&
                  s.workspaceAnalyticsSidebarCollapsed &&
                  window.innerWidth >= 768 &&
                  s.toggleWorkspaceAnalyticsSidebar(!1);
            };
            return (
              window.addEventListener('resize', e),
              e(),
              () => window.removeEventListener('resize', e)
            );
          }, [s]),
          (0, l.jsx)(l.Fragment, {
            children: (0, l.jsx)('div', {
              className:
                'relative z-10 flex h-[3.75rem] w-full flex-shrink-0 flex-row items-center justify-between gap-x-2 gap-y-4 bg-custom-sidebar-background-100 p-4',
              children: (0, l.jsx)('div', {
                className:
                  'flex w-full flex-grow items-center gap-2 overflow-ellipsis whitespace-nowrap',
                children: (0, l.jsxs)('div', {
                  className: 'flex items-center justify-between w-full',
                  children: [
                    (0, l.jsx)(x.Oo, {
                      children: (0, l.jsx)(x.Oo.BreadcrumbItem, {
                        type: 'text',
                        link: (0, l.jsx)(p.At, {
                          label: 'Analytics',
                          icon: (0, l.jsx)(V.Z, {
                            className: 'h-4 w-4 text-custom-text-300',
                          }),
                        }),
                      }),
                    }),
                    'custom' === e &&
                      (0, l.jsx)('button', {
                        className: 'block md:hidden',
                        onClick: () => {
                          s.toggleWorkspaceAnalyticsSidebar();
                        },
                        children: (0, l.jsx)(u, {
                          className: (0, g.cn)(
                            'w-4 h-4 block md:hidden',
                            s.workspaceAnalyticsSidebarCollapsed
                              ? 'text-custom-text-200'
                              : 'text-custom-primary-100'
                          ),
                        }),
                      }),
                  ],
                }),
              }),
            }),
          })
        );
      });
      t(24673);
      var W = t(81630),
        K = t(82558),
        X = t(64273),
        H = t(42683);
      let G = (0, a.Pi)(() => {
          let [e, s] = (0, i.useState)(!1),
            t = (0, i.useRef)(null),
            {
              commandPalette: a,
              router: { workspaceSlug: n },
            } = (0, N.IX)(),
            { setTrackElement: r } = (0, N.DN)(),
            {
              membership: { currentWorkspaceRole: o },
            } = (0, N.aF)(),
            {
              currentWorkspaceDisplayFilters: d,
              currentWorkspaceFilters: u,
              updateFilters: m,
              updateDisplayFilters: j,
              searchQuery: f,
              updateSearchQuery: y,
            } = (0, N.HK)(),
            {
              workspace: { workspaceMemberIds: w },
            } = (0, N.Kb)();
          (0, H.Z)(t, () => {
            e && '' === f.trim() && s(!1);
          });
          let _ = !!o && o >= A.fp.MEMBER,
            k = (0, i.useCallback)(
              (e, s) => {
                var t, l;
                if (!n) return;
                let i =
                  null !== (t = null == u ? void 0 : u[e]) && void 0 !== t
                    ? t
                    : [];
                Array.isArray(s)
                  ? ('created_at' === e &&
                      i.find(e => e.includes('custom')) &&
                      (i = []),
                    s.forEach(e => {
                      i.includes(e) ? i.splice(i.indexOf(e), 1) : i.push(e);
                    }))
                  : (
                        null == u
                          ? void 0
                          : null === (l = u[e]) || void 0 === l
                            ? void 0
                            : l.includes(s)
                      )
                    ? i.splice(i.indexOf(s), 1)
                    : 'created_at' === e
                      ? (i = [s])
                      : i.push(s),
                  m(n, { [e]: i });
              },
              [u, m, n]
            ),
            C = 0 !== (0, b.w)(null != u ? u : {});
          return (0, l.jsxs)('div', {
            className:
              'relative z-10 flex h-[3.75rem] w-full flex-shrink-0 flex-row items-center justify-between gap-x-2 gap-y-4 bg-custom-sidebar-background-100 p-4',
            children: [
              (0, l.jsx)('div', {
                className:
                  'flex flex-grow items-center gap-2 overflow-ellipsis whitespace-nowrap',
                children: (0, l.jsx)('div', {
                  children: (0, l.jsx)(x.Oo, {
                    children: (0, l.jsx)(x.Oo.BreadcrumbItem, {
                      type: 'text',
                      link: (0, l.jsx)(p.At, {
                        label: 'Projects',
                        icon: (0, l.jsx)(M.Z, {
                          className: 'h-4 w-4 text-custom-text-300',
                        }),
                      }),
                    }),
                  }),
                }),
              }),
              (0, l.jsxs)('div', {
                className: 'w-full flex items-center justify-end gap-3',
                children: [
                  (0, l.jsxs)('div', {
                    className: 'flex items-center',
                    children: [
                      !e &&
                        (0, l.jsx)('button', {
                          type: 'button',
                          className:
                            '-mr-1 p-2 hover:bg-custom-background-80 rounded text-custom-text-400 grid place-items-center',
                          onClick: () => {
                            var e;
                            s(!0),
                              null === (e = t.current) ||
                                void 0 === e ||
                                e.focus();
                          },
                          children: (0, l.jsx)(W.Z, {
                            className: 'h-3.5 w-3.5',
                          }),
                        }),
                      (0, l.jsxs)('div', {
                        className: (0, g.cn)(
                          'ml-auto flex items-center justify-start gap-1 rounded-md border border-transparent bg-custom-background-100 text-custom-text-400 w-0 transition-[width] ease-linear overflow-hidden opacity-0',
                          {
                            'w-30 md:w-64 px-2.5 py-1.5 border-custom-border-200 opacity-100':
                              e,
                          }
                        ),
                        children: [
                          (0, l.jsx)(W.Z, { className: 'h-3.5 w-3.5' }),
                          (0, l.jsx)('input', {
                            ref: t,
                            className:
                              'w-full max-w-[234px] border-none bg-transparent text-sm text-custom-text-100 placeholder:text-custom-text-400 focus:outline-none',
                            placeholder: 'Search',
                            value: f,
                            onChange: e => y(e.target.value),
                            onKeyDown: e => {
                              'Escape' === e.key &&
                                (f && '' !== f.trim() ? y('') : s(!1));
                            },
                          }),
                          e &&
                            (0, l.jsx)('button', {
                              type: 'button',
                              className: 'grid place-items-center',
                              onClick: () => {
                                y(''), s(!1);
                              },
                              children: (0, l.jsx)(K.Z, {
                                className: 'h-3 w-3',
                              }),
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, l.jsxs)('div', {
                    className: 'hidden md:flex gap-3',
                    children: [
                      (0, l.jsx)(v.FU, {
                        value: null == d ? void 0 : d.order_by,
                        onChange: e => {
                          n &&
                            e !== (null == d ? void 0 : d.order_by) &&
                            j(n, { order_by: e });
                        },
                      }),
                      (0, l.jsx)(h.lqY, {
                        icon: (0, l.jsx)(X.Z, { className: 'h-3 w-3' }),
                        title: 'Filters',
                        placement: 'bottom-end',
                        isFiltersApplied: C,
                        children: (0, l.jsx)(v.U5, {
                          displayFilters: null != d ? d : {},
                          filters: null != u ? u : {},
                          handleFiltersUpdate: k,
                          handleDisplayFiltersUpdate: e => {
                            n && j(n, e);
                          },
                          memberIds: null != w ? w : void 0,
                        }),
                      }),
                    ],
                  }),
                  _ &&
                    (0, l.jsxs)(x.zx, {
                      prependIcon: (0, l.jsx)(c.Z, {}),
                      size: 'sm',
                      onClick: () => {
                        r('Projects page'), a.toggleCreateProjectModal(!0);
                      },
                      className: 'items-center gap-1',
                      children: [
                        (0, l.jsx)('span', {
                          className: 'hidden sm:inline-block',
                          children: 'Add',
                        }),
                        ' Project',
                      ],
                    }),
                ],
              }),
            ],
          });
        }),
        Q = (0, a.Pi)(() => {
          var e;
          let s = (0, o.useRouter)(),
            { workspaceSlug: t } = s.query,
            {
              commandPalette: { toggleCreateCycleModal: i },
            } = (0, N.IX)(),
            { setTrackElement: a } = (0, N.DN)(),
            {
              membership: { currentProjectRole: n },
            } = (0, N.aF)(),
            { currentProjectDetails: r } = (0, N.PY)(),
            d = n && [f.MC.ADMIN, f.MC.MEMBER].includes(n);
          return (0, l.jsxs)('div', {
            className:
              'relative z-10 flex h-[3.75rem] w-full flex-shrink-0 flex-row items-center justify-between gap-x-2 gap-y-4 bg-custom-sidebar-background-100 p-4',
            children: [
              (0, l.jsx)('div', {
                className:
                  'flex w-full flex-grow items-center gap-2 overflow-ellipsis whitespace-nowrap',
                children: (0, l.jsx)('div', {
                  children: (0, l.jsxs)(x.Oo, {
                    onBack: s.back,
                    children: [
                      (0, l.jsx)(x.Oo.BreadcrumbItem, {
                        type: 'text',
                        link: (0, l.jsx)(p.At, {
                          label:
                            null !== (e = null == r ? void 0 : r.name) &&
                            void 0 !== e
                              ? e
                              : 'Project',
                          href: '/'
                            .concat(t, '/projects/')
                            .concat(null == r ? void 0 : r.id, '/issues'),
                          icon:
                            r &&
                            (0, l.jsx)('span', {
                              className:
                                'grid place-items-center flex-shrink-0 h-4 w-4',
                              children: (0, l.jsx)(v.h0, {
                                logo: null == r ? void 0 : r.logo_props,
                                className: 'text-sm',
                              }),
                            }),
                        }),
                      }),
                      (0, l.jsx)(x.Oo.BreadcrumbItem, {
                        type: 'text',
                        link: (0, l.jsx)(p.At, {
                          label: 'Cycles',
                          icon: (0, l.jsx)(x.sI, {
                            className: 'h-4 w-4 text-custom-text-300',
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              d &&
                (0, l.jsx)('div', {
                  className: 'flex items-center gap-3',
                  children: (0, l.jsxs)(x.zx, {
                    variant: 'primary',
                    size: 'sm',
                    prependIcon: (0, l.jsx)(c.Z, {}),
                    onClick: () => {
                      a('Cycles page'), i(!0);
                    },
                    children: [
                      (0, l.jsx)('div', {
                        className: 'hidden sm:block',
                        children: 'Add',
                      }),
                      ' Cycle',
                    ],
                  }),
                }),
            ],
          });
        }),
        J = (0, a.Pi)(() => {
          var e;
          let s = (0, o.useRouter)(),
            { workspaceSlug: t } = s.query,
            { commandPalette: i } = (0, N.IX)(),
            { setTrackElement: a } = (0, N.DN)(),
            {
              membership: { currentProjectRole: n },
            } = (0, N.aF)(),
            { currentProjectDetails: r } = (0, N.PY)(),
            d = n && [f.MC.ADMIN, f.MC.MEMBER].includes(n);
          return (0, l.jsxs)('div', {
            className:
              'relative z-10 flex h-[3.75rem] w-full flex-shrink-0 flex-row items-center justify-between gap-x-2 gap-y-4 bg-custom-sidebar-background-100 p-4',
            children: [
              (0, l.jsx)('div', {
                className:
                  'flex w-full flex-grow items-center gap-2 overflow-ellipsis whitespace-nowrap',
                children: (0, l.jsx)('div', {
                  children: (0, l.jsxs)(x.Oo, {
                    onBack: s.back,
                    children: [
                      (0, l.jsx)(x.Oo.BreadcrumbItem, {
                        type: 'text',
                        link: (0, l.jsx)(p.At, {
                          href: '/'
                            .concat(t, '/projects/')
                            .concat(null == r ? void 0 : r.id, '/issues'),
                          label:
                            null !== (e = null == r ? void 0 : r.name) &&
                            void 0 !== e
                              ? e
                              : 'Project',
                          icon:
                            r &&
                            (0, l.jsx)('span', {
                              className:
                                'grid place-items-center flex-shrink-0 h-4 w-4',
                              children: (0, l.jsx)(v.h0, {
                                logo: null == r ? void 0 : r.logo_props,
                                className: 'text-sm',
                              }),
                            }),
                        }),
                      }),
                      (0, l.jsx)(x.Oo.BreadcrumbItem, {
                        type: 'text',
                        link: (0, l.jsx)(p.At, {
                          label: 'Modules',
                          icon: (0, l.jsx)(x.kB, {
                            className: 'h-4 w-4 text-custom-text-300',
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              (0, l.jsx)('div', {
                className: 'flex items-center gap-2',
                children:
                  d &&
                  (0, l.jsxs)(x.zx, {
                    variant: 'primary',
                    size: 'sm',
                    prependIcon: (0, l.jsx)(c.Z, {}),
                    onClick: () => {
                      a('Modules page'), i.toggleCreateModuleModal(!0);
                    },
                    children: [
                      (0, l.jsx)('div', {
                        className: 'hidden sm:block',
                        children: 'Add',
                      }),
                      ' Module',
                    ],
                  }),
              }),
            ],
          });
        }),
        $ = (0, a.Pi)(e => {
          var s;
          let { title: t } = e,
            i = (0, o.useRouter)(),
            { workspaceSlug: a, projectId: n } = i.query,
            {
              membership: { currentProjectRole: r },
            } = (0, N.aF)(),
            { currentProjectDetails: c } = (0, N.PY)();
          return r && r <= f.MC.VIEWER
            ? null
            : (0, l.jsx)('div', {
                className:
                  'relative z-10 flex h-[3.75rem] w-full flex-shrink-0 flex-row items-center justify-between gap-x-2 gap-y-4 bg-custom-sidebar-background-100 p-4',
                children: (0, l.jsxs)('div', {
                  className:
                    'flex w-full flex-grow items-center gap-2 overflow-ellipsis whitespace-nowrap',
                  children: [
                    (0, l.jsx)('div', {
                      children: (0, l.jsx)('div', {
                        className: 'z-50',
                        children: (0, l.jsxs)(x.Oo, {
                          onBack: i.back,
                          children: [
                            (0, l.jsx)(x.Oo.BreadcrumbItem, {
                              type: 'text',
                              link: (0, l.jsx)(p.At, {
                                href: '/'
                                  .concat(a, '/projects/')
                                  .concat(null == c ? void 0 : c.id, '/issues'),
                                label:
                                  null !== (s = null == c ? void 0 : c.name) &&
                                  void 0 !== s
                                    ? s
                                    : 'Project',
                                icon:
                                  c &&
                                  (0, l.jsx)('span', {
                                    className:
                                      'grid place-items-center flex-shrink-0 h-4 w-4',
                                    children: (0, l.jsx)(v.h0, {
                                      logo: null == c ? void 0 : c.logo_props,
                                      className: 'text-sm',
                                    }),
                                  }),
                              }),
                            }),
                            (0, l.jsx)('div', {
                              className: 'hidden sm:hidden md:block lg:block',
                              children: (0, l.jsx)(x.Oo.BreadcrumbItem, {
                                type: 'text',
                                link: (0, l.jsx)(p.At, { label: t }),
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, l.jsx)(x.fR, {
                      className:
                        'flex-shrink-0 block sm:block md:hidden lg:hidden',
                      maxHeight: 'lg',
                      customButton: (0, l.jsx)('span', {
                        className:
                          'text-xs px-1.5 py-1 border rounded-md text-custom-text-200 border-custom-border-300',
                        children: t,
                      }),
                      placement: 'bottom-start',
                      closeOnSelect: !0,
                      children: f.Lz.map(e =>
                        (0, l.jsx)(
                          x.fR.MenuItem,
                          {
                            onClick: () =>
                              i.push(
                                '/'
                                  .concat(a, '/projects/')
                                  .concat(n)
                                  .concat(e.href)
                              ),
                            children: e.label,
                          },
                          e.key
                        )
                      ),
                    }),
                  ],
                }),
              });
        });
      var ee = t(38330);
      let es = (0, a.Pi)(e => {
        let { title: s } = e,
          { workspaceSlug: t } = (0, o.useRouter)().query;
        return (0, l.jsx)('div', {
          className:
            'relative z-10 flex h-[3.75rem] w-full flex-shrink-0 flex-row items-center justify-between gap-x-2 gap-y-4 bg-custom-sidebar-background-100 p-4',
          children: (0, l.jsx)('div', {
            className:
              'flex w-full flex-grow items-center gap-2 overflow-ellipsis whitespace-nowrap',
            children: (0, l.jsx)('div', {
              children: (0, l.jsxs)(x.Oo, {
                children: [
                  (0, l.jsx)(x.Oo.BreadcrumbItem, {
                    type: 'text',
                    link: (0, l.jsx)(p.At, {
                      href: '/'.concat(t, '/settings'),
                      label: 'Settings',
                      icon: (0, l.jsx)(ee.Z, {
                        className: 'h-4 w-4 text-custom-text-300',
                      }),
                    }),
                  }),
                  (0, l.jsx)(x.Oo.BreadcrumbItem, {
                    type: 'text',
                    link: (0, l.jsx)(p.At, { label: s }),
                  }),
                ],
              }),
            }),
          }),
        });
      });
      var et = t(95108);
      let el = (0, a.Pi)(e => {
          var s, t;
          let { showButton: i = !1 } = e,
            { workspaceSlug: a, pageId: n } = (0, o.useRouter)().query,
            { commandPalette: r } = (0, N.IX)(),
            { currentProjectDetails: d } = (0, N.PY)(),
            { name: u } = (0, N.qt)(
              null !== (s = null == n ? void 0 : n.toString()) && void 0 !== s
                ? s
                : ''
            );
          return (0, l.jsxs)('div', {
            className:
              'relative z-10 flex h-[3.75rem] w-full flex-shrink-0 flex-row items-center justify-between gap-x-2 gap-y-4 bg-custom-sidebar-background-100 p-4',
            children: [
              (0, l.jsx)('div', {
                className:
                  'flex w-full flex-grow items-center gap-2 overflow-ellipsis whitespace-nowrap',
                children: (0, l.jsx)('div', {
                  children: (0, l.jsxs)(x.Oo, {
                    children: [
                      (0, l.jsx)(x.Oo.BreadcrumbItem, {
                        type: 'text',
                        link: (0, l.jsxs)('span', {
                          children: [
                            (0, l.jsx)('span', {
                              className: 'hidden md:block',
                              children: (0, l.jsx)(p.At, {
                                href: '/'
                                  .concat(a, '/projects/')
                                  .concat(null == d ? void 0 : d.id, '/issues'),
                                label:
                                  null !== (t = null == d ? void 0 : d.name) &&
                                  void 0 !== t
                                    ? t
                                    : 'Project',
                                icon:
                                  d &&
                                  (0, l.jsx)('span', {
                                    className:
                                      'grid place-items-center flex-shrink-0 h-4 w-4',
                                    children: (0, l.jsx)(v.h0, {
                                      logo: null == d ? void 0 : d.logo_props,
                                      className: 'text-sm',
                                    }),
                                  }),
                              }),
                            }),
                            (0, l.jsx)('span', {
                              className: 'md:hidden',
                              children: (0, l.jsx)(p.At, {
                                href: '/'
                                  .concat(a, '/projects/')
                                  .concat(null == d ? void 0 : d.id, '/issues'),
                                label: '...',
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, l.jsx)(x.Oo.BreadcrumbItem, {
                        type: 'text',
                        link: (0, l.jsx)(p.At, {
                          href: '/'
                            .concat(a, '/projects/')
                            .concat(null == d ? void 0 : d.id, '/pages'),
                          label: 'Pages',
                          icon: (0, l.jsx)(et.Z, {
                            className: 'h-4 w-4 text-custom-text-300',
                          }),
                        }),
                      }),
                      (0, l.jsx)(x.Oo.BreadcrumbItem, {
                        type: 'text',
                        link: (0, l.jsx)(p.At, {
                          label: null != u ? u : 'Page',
                          icon: (0, l.jsx)(et.Z, {
                            className: 'h-4 w-4 text-custom-text-300',
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              i &&
                (0, l.jsx)('div', {
                  className: 'flex items-center gap-2',
                  children: (0, l.jsx)(x.zx, {
                    variant: 'primary',
                    prependIcon: (0, l.jsx)(c.Z, {}),
                    size: 'sm',
                    onClick: () => r.toggleCreatePageModal(!0),
                    children: 'Create Page',
                  }),
                }),
            ],
          });
        }),
        ei = (0, a.Pi)(() => {
          var e;
          let { workspaceSlug: s } = (0, o.useRouter)().query,
            {
              commandPalette: { toggleCreatePageModal: t },
            } = (0, N.IX)(),
            {
              membership: { currentProjectRole: i },
            } = (0, N.aF)(),
            { currentProjectDetails: a } = (0, N.PY)(),
            { setTrackElement: n } = (0, N.DN)(),
            r = i && [f.MC.ADMIN, f.MC.MEMBER].includes(i);
          return (0, l.jsxs)('div', {
            className:
              'relative z-10 flex h-[3.75rem] w-full flex-shrink-0 flex-row items-center justify-between gap-x-2 gap-y-4 bg-custom-sidebar-background-100 p-4',
            children: [
              (0, l.jsx)('div', {
                className:
                  'flex w-full flex-grow items-center gap-2 overflow-ellipsis whitespace-nowrap',
                children: (0, l.jsx)('div', {
                  children: (0, l.jsxs)(x.Oo, {
                    children: [
                      (0, l.jsx)(x.Oo.BreadcrumbItem, {
                        type: 'text',
                        link: (0, l.jsx)(p.At, {
                          href: '/'
                            .concat(s, '/projects/')
                            .concat(null == a ? void 0 : a.id, '/issues'),
                          label:
                            null !== (e = null == a ? void 0 : a.name) &&
                            void 0 !== e
                              ? e
                              : 'Project',
                          icon:
                            a &&
                            (0, l.jsx)('span', {
                              className:
                                'grid place-items-center flex-shrink-0 h-4 w-4',
                              children: (0, l.jsx)(v.h0, {
                                logo: null == a ? void 0 : a.logo_props,
                                className: 'text-sm',
                              }),
                            }),
                        }),
                      }),
                      (0, l.jsx)(x.Oo.BreadcrumbItem, {
                        type: 'text',
                        link: (0, l.jsx)(p.At, {
                          label: 'Pages',
                          icon: (0, l.jsx)(et.Z, {
                            className: 'h-4 w-4 text-custom-text-300',
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              r &&
                (0, l.jsx)('div', {
                  className: 'flex items-center gap-2',
                  children: (0, l.jsx)(x.zx, {
                    variant: 'primary',
                    prependIcon: (0, l.jsx)(c.Z, {}),
                    size: 'sm',
                    onClick: () => {
                      n('Project pages page'), t(!0);
                    },
                    children: 'Create Page',
                  }),
                }),
            ],
          });
        }),
        ea = (0, a.Pi)(() => {
          var e, s, t, a, n, r, c;
          let { workspaceSlug: d, projectId: u } = (0, o.useRouter)().query,
            {
              issuesFilter: { issueFilters: m, updateFilters: f },
            } = (0, N.gk)(j.rS.DRAFT),
            { currentProjectDetails: g } = (0, N.PY)(),
            { projectStates: y } = (0, N.eD)(),
            { projectLabels: w } = (0, N.NP)(),
            {
              project: { projectMemberIds: k },
            } = (0, N.Kb)(),
            { isMobile: C } = (0, _.L)(),
            I =
              null == m
                ? void 0
                : null === (e = m.displayFilters) || void 0 === e
                  ? void 0
                  : e.layout,
            A = (0, i.useCallback)(
              (e, s) => {
                var t, l, i, a;
                if (!d || !u) return;
                let n =
                  null !==
                    (l =
                      null == m
                        ? void 0
                        : null === (t = m.filters) || void 0 === t
                          ? void 0
                          : t[e]) && void 0 !== l
                    ? l
                    : [];
                Array.isArray(s)
                  ? s.forEach(e => {
                      n.includes(e) ? n.splice(n.indexOf(e), 1) : n.push(e);
                    })
                  : (
                        null == m
                          ? void 0
                          : null === (a = m.filters) || void 0 === a
                            ? void 0
                            : null === (i = a[e]) || void 0 === i
                              ? void 0
                              : i.includes(s)
                      )
                    ? n.splice(n.indexOf(s), 1)
                    : n.push(s),
                  f(d, u, j.gc.FILTERS, { [e]: n });
              },
              [d, u, m, f]
            ),
            S = (0, i.useCallback)(
              e => {
                d && u && f(d, u, j.gc.DISPLAY_FILTERS, { layout: e });
              },
              [d, u, f]
            ),
            P = (0, i.useCallback)(
              e => {
                d && u && f(d, u, j.gc.DISPLAY_FILTERS, e);
              },
              [d, u, f]
            ),
            F = (0, i.useCallback)(
              e => {
                d && u && f(d, u, j.gc.DISPLAY_PROPERTIES, e);
              },
              [d, u, f]
            ),
            D = g
              ? (null == m
                  ? void 0
                  : null === (s = m.displayFilters) || void 0 === s
                    ? void 0
                    : s.sub_issue) || !g.draft_sub_issues
                ? g.draft_issues
                : g.draft_issues - g.draft_sub_issues
              : void 0,
            E =
              0 !==
              (0, b.w)(
                null !== (t = null == m ? void 0 : m.filters) && void 0 !== t
                  ? t
                  : {}
              );
          return (0, l.jsx)('div', {
            className:
              'relative z-10 flex h-[3.75rem] w-full flex-shrink-0 flex-row items-center justify-between gap-x-2 gap-y-4 bg-custom-sidebar-background-100 p-4',
            children: (0, l.jsxs)('div', {
              className:
                'flex w-full flex-grow items-center gap-2 overflow-ellipsis whitespace-nowrap',
              children: [
                (0, l.jsxs)('div', {
                  className: 'flex items-center gap-2.5',
                  children: [
                    (0, l.jsxs)(x.Oo, {
                      children: [
                        (0, l.jsx)(x.Oo.BreadcrumbItem, {
                          type: 'text',
                          link: (0, l.jsx)(p.At, {
                            href: '/'.concat(d, '/projects'),
                            label:
                              null !== (a = null == g ? void 0 : g.name) &&
                              void 0 !== a
                                ? a
                                : 'Project',
                            icon:
                              g &&
                              (0, l.jsx)('span', {
                                className:
                                  'grid place-items-center flex-shrink-0 h-4 w-4',
                                children: (0, l.jsx)(v.h0, {
                                  logo: null == g ? void 0 : g.logo_props,
                                  className: 'text-sm',
                                }),
                              }),
                          }),
                        }),
                        (0, l.jsx)(x.Oo.BreadcrumbItem, {
                          type: 'text',
                          link: (0, l.jsx)(p.At, {
                            label: 'Draft Issues',
                            icon: (0, l.jsx)(x.uQ, {
                              className: 'h-4 w-4 text-custom-text-300',
                            }),
                          }),
                        }),
                      ],
                    }),
                    D && D > 0
                      ? (0, l.jsx)(x.u, {
                          isMobile: C,
                          tooltipContent: 'There are '
                            .concat(D, ' ')
                            .concat(
                              D > 1 ? 'issues' : 'issue',
                              " in project's draft"
                            ),
                          position: 'bottom',
                          children: (0, l.jsx)('span', {
                            className:
                              'cursor-default flex items-center text-center justify-center px-2.5 py-0.5 flex-shrink-0 bg-custom-primary-100/20 text-custom-primary-100 text-xs font-semibold rounded-xl',
                            children: D,
                          }),
                        })
                      : null,
                  ],
                }),
                (0, l.jsxs)('div', {
                  className: 'ml-auto flex items-center gap-2',
                  children: [
                    (0, l.jsx)(h.ZxZ, {
                      layouts: ['list', 'kanban'],
                      onChange: e => S(e),
                      selectedLayout: I,
                    }),
                    (0, l.jsx)(h.lqY, {
                      title: 'Filters',
                      placement: 'bottom-end',
                      isFiltersApplied: E,
                      children: (0, l.jsx)(h.dGX, {
                        filters:
                          null !== (n = null == m ? void 0 : m.filters) &&
                          void 0 !== n
                            ? n
                            : {},
                        handleFiltersUpdate: A,
                        layoutDisplayFiltersOptions: I
                          ? j.BI.issues[I]
                          : void 0,
                        labels: w,
                        memberIds: null != k ? k : void 0,
                        states: y,
                        cycleViewDisabled: !(null == g ? void 0 : g.cycle_view),
                        moduleViewDisabled: !(null == g
                          ? void 0
                          : g.module_view),
                      }),
                    }),
                    (0, l.jsx)(h.lqY, {
                      title: 'Display',
                      placement: 'bottom-end',
                      children: (0, l.jsx)(h.hvF, {
                        layoutDisplayFiltersOptions: I
                          ? j.BI.issues[I]
                          : void 0,
                        displayFilters:
                          null !==
                            (r = null == m ? void 0 : m.displayFilters) &&
                          void 0 !== r
                            ? r
                            : {},
                        handleDisplayFiltersUpdate: P,
                        displayProperties:
                          null !==
                            (c = null == m ? void 0 : m.displayProperties) &&
                          void 0 !== c
                            ? c
                            : {},
                        handleDisplayPropertiesUpdate: F,
                        cycleViewDisabled: !(null == g ? void 0 : g.cycle_view),
                        moduleViewDisabled: !(null == g
                          ? void 0
                          : g.module_view),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        });
      var en = t(30201),
        er = t(82750);
      let eo = new (t(4225).B2)(),
        ec = (0, a.Pi)(() => {
          var e;
          let {
              workspaceSlug: s,
              projectId: t,
              archivedIssueId: i,
            } = (0, o.useRouter)().query,
            { currentProjectDetails: a } = (0, N.PY)(),
            { data: n } = (0, en.ZP)(
              s && t && i ? (0, er.eA)(i) : null,
              s && t && i ? () => eo.retrieveArchivedIssue(s, t, i) : null
            );
          return (0, l.jsx)('div', {
            className:
              'relative z-10 flex h-14 w-full flex-shrink-0 flex-row items-center justify-between gap-x-2 gap-y-4 bg-custom-sidebar-background-100 p-4',
            children: (0, l.jsx)('div', {
              className:
                'flex w-full flex-grow items-center gap-2 overflow-ellipsis whitespace-nowrap',
              children: (0, l.jsx)('div', {
                children: (0, l.jsxs)(x.Oo, {
                  children: [
                    (0, l.jsx)(x.Oo.BreadcrumbItem, {
                      type: 'text',
                      link: (0, l.jsx)(p.At, {
                        href: '/'.concat(s, '/projects'),
                        label:
                          null !== (e = null == a ? void 0 : a.name) &&
                          void 0 !== e
                            ? e
                            : 'Project',
                        icon:
                          a &&
                          (0, l.jsx)('span', {
                            className:
                              'grid place-items-center flex-shrink-0 h-4 w-4',
                            children: (0, l.jsx)(v.h0, {
                              logo: null == a ? void 0 : a.logo_props,
                              className: 'text-sm',
                            }),
                          }),
                      }),
                    }),
                    (0, l.jsx)(x.Oo.BreadcrumbItem, {
                      type: 'text',
                      link: (0, l.jsx)(p.At, {
                        href: '/'
                          .concat(s, '/projects/')
                          .concat(t, '/archives/issues'),
                        label: 'Archives',
                        icon: (0, l.jsx)(x.rK, {
                          className: 'h-4 w-4 text-custom-text-300',
                        }),
                      }),
                    }),
                    (0, l.jsx)(x.Oo.BreadcrumbItem, {
                      type: 'text',
                      link: (0, l.jsx)(p.At, {
                        href: '/'
                          .concat(s, '/projects/')
                          .concat(t, '/archives/issues'),
                        label: 'Issues',
                        icon: (0, l.jsx)(x.uQ, {
                          className: 'h-4 w-4 text-custom-text-300',
                        }),
                      }),
                    }),
                    (0, l.jsx)(x.Oo.BreadcrumbItem, {
                      type: 'text',
                      link: (0, l.jsx)(p.At, {
                        label:
                          a && n
                            ? ''.concat(a.identifier, '-').concat(n.sequence_id)
                            : '',
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        });
      var ed = t(66410);
      let eu = (0, a.Pi)(() => {
          var e, s;
          let t = (0, o.useRouter)(),
            { workspaceSlug: i, projectId: a } = t.query,
            n = t.pathname.split('/').pop(),
            {
              issuesFilter: { issueFilters: r },
            } = (0, N.gk)(j.rS.ARCHIVED),
            { currentProjectDetails: c } = (0, N.PY)(),
            { isMobile: d } = (0, _.L)(),
            u = c
              ? (null == r
                  ? void 0
                  : null === (e = r.displayFilters) || void 0 === e
                    ? void 0
                    : e.sub_issue) || !c.archived_sub_issues
                ? c.archived_issues
                : c.archived_issues - c.archived_sub_issues
              : void 0,
            m = ed.Z[n];
          return (0, l.jsx)('div', {
            className:
              'relative z-10 flex h-14 w-full flex-shrink-0 flex-row items-center justify-between gap-x-2 gap-y-4 bg-custom-sidebar-background-100 p-4',
            children: (0, l.jsx)('div', {
              className:
                'flex w-full flex-grow items-center gap-2 overflow-ellipsis whitespace-nowrap',
              children: (0, l.jsxs)('div', {
                className: 'flex items-center gap-2.5',
                children: [
                  (0, l.jsxs)(x.Oo, {
                    onBack: t.back,
                    children: [
                      (0, l.jsx)(x.Oo.BreadcrumbItem, {
                        type: 'text',
                        link: (0, l.jsx)(p.At, {
                          href: '/'.concat(i, '/projects'),
                          label:
                            null !== (s = null == c ? void 0 : c.name) &&
                            void 0 !== s
                              ? s
                              : 'Project',
                          icon:
                            c &&
                            (0, l.jsx)('span', {
                              className:
                                'grid place-items-center flex-shrink-0 h-4 w-4',
                              children: (0, l.jsx)(v.h0, {
                                logo: null == c ? void 0 : c.logo_props,
                                className: 'text-sm',
                              }),
                            }),
                        }),
                      }),
                      (0, l.jsx)(x.Oo.BreadcrumbItem, {
                        type: 'text',
                        link: (0, l.jsx)(p.At, {
                          href: '/'
                            .concat(i, '/projects/')
                            .concat(a, '/archives/issues'),
                          label: 'Archives',
                          icon: (0, l.jsx)(x.rK, {
                            className: 'h-4 w-4 text-custom-text-300',
                          }),
                        }),
                      }),
                      m &&
                        (0, l.jsx)(x.Oo.BreadcrumbItem, {
                          type: 'text',
                          link: (0, l.jsx)(p.At, {
                            label: m.label,
                            icon: (0, l.jsx)(m.icon, {
                              className: 'h-4 w-4 text-custom-text-300',
                            }),
                          }),
                        }),
                    ],
                  }),
                  'issues' === n && u && u > 0
                    ? (0, l.jsx)(x.u, {
                        isMobile: d,
                        tooltipContent: 'There are '
                          .concat(u, ' ')
                          .concat(
                            u > 1 ? 'issues' : 'issue',
                            " in project's archived"
                          ),
                        position: 'bottom',
                        children: (0, l.jsx)('span', {
                          className:
                            'cursor-default flex items-center text-center justify-center px-2.5 py-0.5 flex-shrink-0 bg-custom-primary-100/20 text-custom-primary-100 text-xs font-semibold rounded-xl',
                          children: u,
                        }),
                      })
                    : null,
                ],
              }),
            }),
          });
        }),
        ex = (0, a.Pi)(() => {
          var e;
          let s = (0, o.useRouter)(),
            { workspaceSlug: t, projectId: i, issueId: a } = s.query,
            { currentProjectDetails: n } = (0, N.PY)(),
            { theme: r } = (0, N.IX)(),
            {
              issue: { getIssueById: c },
            } = (0, N.p1)(),
            d = a ? c(a.toString()) : void 0,
            m = r.issueDetailSidebarCollapsed;
          return (0, l.jsxs)('div', {
            className:
              'relative z-10 flex h-[3.75rem] w-full flex-shrink-0 flex-row items-center justify-between gap-x-2 gap-y-4 bg-custom-sidebar-background-100 p-4',
            children: [
              (0, l.jsx)('div', {
                className:
                  'flex w-full flex-grow items-center gap-2 overflow-ellipsis whitespace-nowrap',
                children: (0, l.jsx)('div', {
                  children: (0, l.jsxs)(x.Oo, {
                    onBack: s.back,
                    children: [
                      (0, l.jsx)(x.Oo.BreadcrumbItem, {
                        type: 'text',
                        link: (0, l.jsx)(p.At, {
                          href: '/'.concat(t, '/projects'),
                          label:
                            null !== (e = null == n ? void 0 : n.name) &&
                            void 0 !== e
                              ? e
                              : 'Project',
                          icon:
                            n &&
                            (0, l.jsx)('span', {
                              className:
                                'grid place-items-center flex-shrink-0 h-4 w-4',
                              children: (0, l.jsx)(v.h0, {
                                logo: null == n ? void 0 : n.logo_props,
                                className: 'text-sm',
                              }),
                            }),
                        }),
                      }),
                      (0, l.jsx)(x.Oo.BreadcrumbItem, {
                        type: 'text',
                        link: (0, l.jsx)(p.At, {
                          href: '/'
                            .concat(t, '/projects/')
                            .concat(i, '/issues'),
                          label: 'Issues',
                          icon: (0, l.jsx)(x.uQ, {
                            className: 'h-4 w-4 text-custom-text-300',
                          }),
                        }),
                      }),
                      (0, l.jsx)(x.Oo.BreadcrumbItem, {
                        type: 'text',
                        link: (0, l.jsx)(p.At, {
                          label:
                            n && d
                              ? ''
                                  .concat(n.identifier, '-')
                                  .concat(d.sequence_id)
                              : '',
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              (0, l.jsx)('button', {
                className: 'block md:hidden',
                onClick: () => r.toggleIssueDetailSidebar(),
                children: (0, l.jsx)(u, {
                  className: (0, g.cn)(
                    'w-4 h-4 ',
                    m ? ' text-custom-text-200' : 'text-custom-primary-100'
                  ),
                }),
              }),
            ],
          });
        });
      var em = t(65709),
        ep = t(38313);
      let eh = (0, a.Pi)(e => {
          let { type: s } = e,
            { workspaceSlug: t, userId: i } = (0, o.useRouter)().query,
            {
              membership: { currentWorkspaceRole: a },
            } = (0, N.aF)();
          if (!a) return null;
          let n = [20, 15, 10].includes(a) ? [...ep.S2, ...ep.f9] : ep.S2,
            { theme: c } = (0, N.IX)();
          return (0, l.jsx)('div', {
            className:
              'relative z-10 flex h-[3.75rem] w-full flex-shrink-0 flex-row items-center justify-between gap-x-2 gap-y-4 bg-custom-sidebar-background-100 p-4',
            children: (0, l.jsx)('div', {
              className:
                'flex w-full flex-grow items-center gap-2 overflow-ellipsis whitespace-nowrap',
              children: (0, l.jsxs)('div', {
                className: 'flex justify-between w-full',
                children: [
                  (0, l.jsx)(x.Oo, {
                    children: (0, l.jsx)(x.Oo.BreadcrumbItem, {
                      type: 'text',
                      link: (0, l.jsx)(p.At, {
                        href: '/profile',
                        label: 'Activity Overview',
                      }),
                    }),
                  }),
                  (0, l.jsxs)('div', {
                    className: 'flex gap-4 md:hidden',
                    children: [
                      (0, l.jsxs)(x.fR, {
                        maxHeight: 'md',
                        className:
                          'flex flex-grow justify-center text-custom-text-200 text-sm',
                        placement: 'bottom-start',
                        customButton: (0, l.jsxs)('div', {
                          className:
                            'flex gap-2 items-center px-2 py-1.5 border border-custom-border-400 rounded-md',
                          children: [
                            (0, l.jsx)('span', {
                              className:
                                'flex flex-grow justify-center text-custom-text-200 text-sm',
                              children: s,
                            }),
                            (0, l.jsx)(em.Z, {
                              className: 'w-4 h-4 text-custom-text-400',
                            }),
                          ],
                        }),
                        customButtonClassName:
                          'flex flex-grow justify-center text-custom-text-200 text-sm',
                        closeOnSelect: !0,
                        children: [
                          (0, l.jsx)(l.Fragment, {}),
                          n.map(e =>
                            (0, l.jsx)(
                              x.fR.MenuItem,
                              {
                                className: 'flex items-center gap-2',
                                children: (0, l.jsx)(
                                  r(),
                                  {
                                    href: '/'
                                      .concat(t, '/profile/')
                                      .concat(i, '/')
                                      .concat(e.route),
                                    className: 'text-custom-text-300 w-full',
                                    children: e.label,
                                  },
                                  e.route
                                ),
                              },
                              e.route
                            )
                          ),
                        ],
                      }),
                      (0, l.jsx)('button', {
                        className: 'transition-all block md:hidden',
                        onClick: () => {
                          c.toggleProfileSidebar();
                        },
                        children: (0, l.jsx)(u, {
                          className: (0, g.cn)(
                            'w-4 h-4 block md:hidden',
                            c.profileSidebarCollapsed
                              ? 'text-custom-text-200'
                              : 'text-[#3E63DD]'
                          ),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        }),
        ev = (0, a.Pi)(() =>
          (0, l.jsx)('div', {
            className:
              'relative z-10 flex h-[3.75rem] w-full flex-shrink-0 flex-row items-center justify-between gap-x-2 gap-y-4 bg-custom-sidebar-background-100 p-4',
            children: (0, l.jsx)('div', {
              className:
                'flex w-full flex-grow items-center gap-2 overflow-ellipsis whitespace-nowrap',
              children: (0, l.jsxs)('div', {
                className: 'flex items-center gap-2',
                children: [
                  (0, l.jsx)(x.Oo, {
                    children: (0, l.jsx)(x.Oo.BreadcrumbItem, {
                      type: 'text',
                      link: (0, l.jsx)(p.At, {
                        label: 'Active Cycles',
                        icon: (0, l.jsx)(x.sI, {
                          className: 'h-4 w-4 text-custom-text-300 rotate-180',
                        }),
                      }),
                    }),
                  }),
                  (0, l.jsx)('span', {
                    className:
                      'flex items-center justify-center px-3.5 py-0.5 text-xs leading-4 rounded-xl text-orange-500 bg-orange-500/20',
                    children: 'Beta',
                  }),
                ],
              }),
            }),
          })
        );
    },
    24673: function (e, s, t) {
      t.d(s, {
        w: function () {
          return h;
        },
      });
      var l = t(24246),
        i = t(38579),
        a = t.n(i),
        n = t(35704),
        r = t(20546),
        o = t(75839),
        c = t(12862),
        d = {
          src: '/_next/static/media/github-white.cf98513a.png',
          height: 512,
          width: 512,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEX///////////9MaXH////////////////////////////+/v7///////90CahnAAAADnRSTlP8CyMAuQTNiUGi7uBcLbA1pPcAAAAJcEhZcwAAECYAABAmAYO2TBUAAAA3SURBVHicRca5AcAwDAJAEFifvf+8KXPVQTH3TgiRC2wGnIxgGiido8If5+N5a7SLBBrqId36AColASWgjvAyAAAAAElFTkSuQmCC',
          blurWidth: 8,
          blurHeight: 8,
        },
        u = t(25449),
        x = t(78593),
        m = t(865),
        p = t(10634);
      let h = () => {
        let { captureEvent: e } = (0, p.DN)(),
          { resolvedTheme: s } = (0, n.F)();
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsxs)('div', {
            className:
              'relative z-[15] flex h-[3.75rem] w-full flex-shrink-0 flex-row items-center justify-between gap-x-2 gap-y-4 bg-custom-sidebar-background-100 p-4',
            children: [
              (0, l.jsx)('div', {
                className:
                  'flex items-center gap-2 overflow-ellipsis whitespace-nowrap',
                children: (0, l.jsx)('div', {
                  children: (0, l.jsx)(u.Oo, {
                    children: (0, l.jsx)(u.Oo.BreadcrumbItem, {
                      type: 'text',
                      link: (0, l.jsx)(x.At, {
                        label: 'Home',
                        icon: (0, l.jsx)(r.Z, {
                          className: 'h-4 w-4 text-custom-text-300',
                        }),
                      }),
                    }),
                  }),
                }),
              }),
              (0, l.jsxs)('div', {
                className: 'flex items-center gap-3 px-3',
                children: [
                  (0, l.jsxs)('a', {
                    onClick: () => e(m.$N, { element: 'navbar' }),
                    href: 'https://plane.so/changelog',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    className:
                      'flex flex-shrink-0 items-center gap-1.5 rounded bg-custom-background-80 px-3 py-1.5',
                    children: [
                      (0, l.jsx)(o.Z, {
                        size: 14,
                        strokeWidth: 2,
                        fill: 'rgb(var(--color-text-100))',
                      }),
                      (0, l.jsx)('span', {
                        className:
                          'hidden text-xs font-medium sm:hidden md:block',
                        children: "What's new?",
                      }),
                    ],
                  }),
                  (0, l.jsxs)('a', {
                    onClick: () => e(m.hY, { element: 'navbar' }),
                    className:
                      'flex flex-shrink-0 items-center gap-1.5 rounded bg-custom-background-80 px-3 py-1.5',
                    href: 'https://github.com/makeplane/plane',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    children: [
                      (0, l.jsx)(a(), {
                        src: 'dark' === s ? d : c.Z,
                        height: 16,
                        width: 16,
                        alt: 'GitHub Logo',
                      }),
                      (0, l.jsx)('span', {
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
    77087: function (e, s, t) {
      t.d(s, {
        EH: function () {
          return O;
        },
        W$: function () {
          return R;
        },
        iJ: function () {
          return et;
        },
        RW: function () {
          return eq;
        },
        IY: function () {
          return eG;
        },
        Yf: function () {
          return eQ;
        },
        xz: function () {
          return eO;
        },
        zq: function () {
          return eL;
        },
        nQ: function () {
          return eT;
        },
        im: function () {
          return eB;
        },
        qU: function () {
          return ez;
        },
        aW: function () {
          return eM;
        },
        DJ: function () {
          return eR;
        },
        Y8: function () {
          return j;
        },
        oC: function () {
          return H;
        },
        NB: function () {
          return ee;
        },
        pB: function () {
          return e4;
        },
        V$: function () {
          return h;
        },
        F1: function () {
          return V;
        },
        Ut: function () {
          return e5;
        },
        OH: function () {
          return X;
        },
        DO: function () {
          return Y;
        },
      });
      var l = t(24246),
        i = t(27378),
        a = t(50649),
        n = t(30201),
        r = t(27943),
        o = t(73471);
      /**
       * @license lucide-react v0.378.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let c = (0, o.Z)('PanelLeft', [
        [
          'rect',
          { width: '18', height: '18', x: '3', y: '3', rx: '2', key: 'afitv7' },
        ],
        ['path', { d: 'M9 3v18', key: 'fh3hqa' }],
      ]);
      var d = t(74371),
        u = t(92775),
        x = t(70540),
        m = t(6780),
        p = t(10634);
      let h = (0, a.Pi)(e => {
        let {
            workspaceSlug: s,
            projectId: t,
            inboxIssueId: a,
            inboxAccessible: o,
          } = e,
          [h, v] = (0, i.useState)(!0),
          { loader: j, error: f, fetchInboxIssues: g } = (0, p.wN)();
        return ((0, n.ZP)(
          o && s && t ? 'PROJECT_INBOX_ISSUES_'.concat(s, '_').concat(t) : null,
          async () => {
            o && s && t && (await g(s.toString(), t.toString()));
          },
          { revalidateOnFocus: !1, revalidateIfStale: !1 }
        ),
        'init-loading' === j)
          ? (0, l.jsx)('div', {
              className: 'relative flex w-full h-full flex-col',
              children: (0, l.jsx)(u.$9, {}),
            })
          : f && (null == f ? void 0 : f.status) === 'init-error'
            ? (0, l.jsxs)('div', {
                className:
                  'relative w-full h-full flex flex-col gap-3 justify-center items-center',
                children: [
                  (0, l.jsx)(r.Z, { size: 60, strokeWidth: 1.5 }),
                  (0, l.jsx)('div', {
                    className: 'text-custom-text-200',
                    children: null == f ? void 0 : f.message,
                  }),
                ],
              })
            : (0, l.jsxs)(l.Fragment, {
                children: [
                  !a &&
                    (0, l.jsx)('div', {
                      className:
                        'flex lg:hidden items-center px-4 w-full h-12 border-b border-custom-border-200',
                      children: (0, l.jsx)(c, {
                        onClick: () => v(!h),
                        className: (0, m.cn)(
                          'w-4 h-4 ',
                          h
                            ? 'text-custom-primary-100'
                            : ' text-custom-text-200'
                        ),
                      }),
                    }),
                  (0, l.jsxs)('div', {
                    className:
                      'w-full h-full flex overflow-hidden bg-custom-background-100',
                    children: [
                      (0, l.jsx)('div', {
                        className: (0, m.cn)(
                          'absolute z-10 top-[50px] lg:!top-0 lg:!relative bg-custom-background-100 flex-shrink-0 w-full lg:w-2/6 bottom-0 transition-all',
                          h
                            ? 'translate-x-0'
                            : '-translate-x-full lg:!translate-x-0'
                        ),
                        children: (0, l.jsx)(X, {
                          setIsMobileSidebar: v,
                          workspaceSlug: s.toString(),
                          projectId: t.toString(),
                        }),
                      }),
                      a
                        ? (0, l.jsx)(eq, {
                            setIsMobileSidebar: v,
                            isMobileSidebar: h,
                            workspaceSlug: s.toString(),
                            projectId: t.toString(),
                            inboxIssueId: a.toString(),
                          })
                        : (0, l.jsx)('div', {
                            className:
                              'w-full h-full relative flex justify-center items-center',
                            children: (0, l.jsx)(d.ub, {
                              type: x.C.INBOX_DETAIL_EMPTY_STATE,
                              layout: 'screen-simple',
                            }),
                          }),
                    ],
                  }),
                ],
              });
      });
      var v = t(23258);
      let j = e => {
        let {
          workspaceSlug: s,
          projectId: t,
          modalState: i,
          handleModalClose: a,
          issue: n,
          onSubmit: r,
        } = e;
        return (0, l.jsx)(v.QU, {
          isOpen: i,
          handleClose: a,
          position: v.fM.TOP,
          width: v.j4.XXXXL,
          children:
            n && (null == n ? void 0 : n.id)
              ? (0, l.jsx)(_, {
                  workspaceSlug: s,
                  projectId: t,
                  issueId: n.id,
                  issue: n,
                  handleModalClose: a,
                  onSubmit: r,
                })
              : (0, l.jsx)(w, {
                  workspaceSlug: s,
                  projectId: t,
                  handleModalClose: a,
                }),
        });
      };
      var f = t(86677),
        g = t(25449),
        b = t(865),
        y = t(74273);
      let N = {
          id: void 0,
          name: '',
          description_html: '',
          priority: 'none',
          state_id: '',
          label_ids: [],
          assignee_ids: [],
          start_date: (0, y.ss)(new Date()),
          target_date: '',
        },
        w = (0, a.Pi)(e => {
          var s;
          let { workspaceSlug: t, projectId: a, handleModalClose: n } = e,
            r = (0, f.useRouter)(),
            o = (0, i.useRef)(null),
            { captureIssueEvent: c } = (0, p.DN)(),
            { createInboxIssue: d } = (0, p.wN)(),
            { getWorkspaceBySlug: u } = (0, p.cF)(),
            x = null === (s = u(t)) || void 0 === s ? void 0 : s.id,
            [m, h] = (0, i.useState)(!1),
            [v, j] = (0, i.useState)(!1),
            [y, w] = (0, i.useState)(N),
            _ = (0, i.useCallback)(
              (e, s) => {
                w({ ...y, [e]: s });
              },
              [y]
            ),
            C = async e => {
              e.preventDefault();
              let s = {
                name: y.name || '',
                description_html: y.description_html || '<p></p>',
                priority: y.priority || 'none',
                state_id: y.state_id || '',
                label_ids: y.label_ids || [],
                assignee_ids: y.assignee_ids || [],
                target_date: y.target_date || null,
              };
              j(!0),
                await d(t, a, s)
                  .then(e => {
                    var s, l;
                    m
                      ? (null == o ||
                          null === (l = o.current) ||
                          void 0 === l ||
                          l.clearEditor(),
                        w(N))
                      : (r.push(
                          '/'
                            .concat(t, '/projects/')
                            .concat(a, '/inbox/?currentTab=open&inboxIssueId=')
                            .concat(
                              null == e
                                ? void 0
                                : null === (s = e.issue) || void 0 === s
                                  ? void 0
                                  : s.id
                            )
                        ),
                        n()),
                      c({
                        eventName: b.lc,
                        payload: {
                          ...y,
                          state: 'SUCCESS',
                          element: 'Inbox page',
                        },
                        path: r.pathname,
                      }),
                      (0, g.fz)({
                        type: g.do.SUCCESS,
                        title: 'Success!',
                        message: 'Issue created successfully.',
                      });
                  })
                  .catch(e => {
                    console.error(e),
                      c({
                        eventName: b.lc,
                        payload: {
                          ...y,
                          state: 'FAILED',
                          element: 'Inbox page',
                        },
                        path: r.pathname,
                      }),
                      (0, g.fz)({
                        type: g.do.ERROR,
                        title: 'Error!',
                        message: 'Some error occurred. Please try again.',
                      });
                  }),
                j(!1);
            },
            I = null != y && !!y.name && y.name.length > 255;
          return t && a && x
            ? (0, l.jsxs)('form', {
                onSubmit: C,
                children: [
                  (0, l.jsxs)('div', {
                    className: 'space-y-5 p-5',
                    children: [
                      (0, l.jsx)('h3', {
                        className: 'text-xl font-medium text-custom-text-200',
                        children: 'Create Inbox Issue',
                      }),
                      (0, l.jsxs)('div', {
                        className: 'space-y-3',
                        children: [
                          (0, l.jsx)(k, {
                            data: y,
                            handleData: _,
                            isTitleLengthMoreThan255Character: I,
                          }),
                          (0, l.jsx)(A, {
                            workspaceSlug: t,
                            projectId: a,
                            workspaceId: x,
                            data: y,
                            handleData: _,
                            editorRef: o,
                            containerClassName:
                              'border-[0.5px] border-custom-border-200 py-3 min-h-[150px]',
                          }),
                          (0, l.jsx)(E, {
                            projectId: a,
                            data: y,
                            handleData: _,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, l.jsxs)('div', {
                    className:
                      'px-5 py-4 flex items-center justify-between gap-2 border-t-[0.5px] border-custom-border-200',
                    children: [
                      (0, l.jsxs)('div', {
                        className:
                          'inline-flex items-center gap-1.5 cursor-pointer',
                        onClick: () => h(e => !e),
                        role: 'button',
                        children: [
                          (0, l.jsx)(g.Zh, {
                            value: m,
                            onChange: () => {},
                            size: 'sm',
                          }),
                          (0, l.jsx)('span', {
                            className: 'text-xs',
                            children: 'Create more',
                          }),
                        ],
                      }),
                      (0, l.jsxs)('div', {
                        className: 'flex items-center gap-3',
                        children: [
                          (0, l.jsx)(g.zx, {
                            variant: 'neutral-primary',
                            size: 'sm',
                            type: 'button',
                            onClick: n,
                            children: 'Discard',
                          }),
                          (0, l.jsx)(g.zx, {
                            variant: 'primary',
                            size: 'sm',
                            type: 'submit',
                            loading: v,
                            disabled: I,
                            children: v ? 'Creating' : 'Create Issue',
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              })
            : (0, l.jsx)(l.Fragment, {});
        }),
        _ = (0, a.Pi)(e => {
          var s;
          let {
              workspaceSlug: t,
              projectId: a,
              issueId: n,
              issue: r,
              handleModalClose: o,
              onSubmit: c,
            } = e,
            d = (0, f.useRouter)(),
            u = (0, i.useRef)(null),
            { captureIssueEvent: x } = (0, p.DN)(),
            { currentProjectDetails: m } = (0, p.PY)(),
            { updateProjectIssue: h } = (0, p.Cs)(n),
            { getWorkspaceBySlug: v } = (0, p.cF)(),
            j = null === (s = v(t)) || void 0 === s ? void 0 : s.id,
            [N, w] = (0, i.useState)(!1),
            [_, C] = (0, i.useState)(void 0),
            I = (0, i.useCallback)(
              (e, s) => {
                C({ ..._, [e]: s });
              },
              [_]
            );
          (0, i.useEffect)(() => {
            var e, s, t, l, i, a, n, o;
            (null == _ ? void 0 : _.id) != (null == r ? void 0 : r.id) &&
              C({
                id: (null == r ? void 0 : r.id) || void 0,
                name:
                  null !== (e = null == r ? void 0 : r.name) && void 0 !== e
                    ? e
                    : '',
                description_html:
                  null !== (s = null == r ? void 0 : r.description_html) &&
                  void 0 !== s
                    ? s
                    : '<p></p>',
                priority:
                  null !== (t = null == r ? void 0 : r.priority) && void 0 !== t
                    ? t
                    : 'none',
                state_id:
                  null !== (l = null == r ? void 0 : r.state_id) && void 0 !== l
                    ? l
                    : '',
                label_ids:
                  null !== (i = null == r ? void 0 : r.label_ids) &&
                  void 0 !== i
                    ? i
                    : [],
                assignee_ids:
                  null !== (a = null == r ? void 0 : r.assignee_ids) &&
                  void 0 !== a
                    ? a
                    : [],
                start_date:
                  null !== (n = (0, y.ss)(null == r ? void 0 : r.start_date)) &&
                  void 0 !== n
                    ? n
                    : '',
                target_date:
                  null !==
                    (o = (0, y.ss)(null == r ? void 0 : r.target_date)) &&
                  void 0 !== o
                    ? o
                    : '',
              });
          }, [r, _]);
          let S = async () => {
              let e = {
                name: (null == _ ? void 0 : _.name) || '',
                description_html:
                  (null == _ ? void 0 : _.description_html) || '<p></p>',
                priority: (null == _ ? void 0 : _.priority) || 'none',
                state_id: (null == _ ? void 0 : _.state_id) || '',
                label_ids: (null == _ ? void 0 : _.label_ids) || [],
                assignee_ids: (null == _ ? void 0 : _.assignee_ids) || [],
                start_date: (null == _ ? void 0 : _.start_date) || void 0,
                target_date: (null == _ ? void 0 : _.target_date) || void 0,
                cycle_id: (null == _ ? void 0 : _.cycle_id) || '',
                module_ids: (null == _ ? void 0 : _.module_ids) || [],
                estimate_point:
                  (null == _ ? void 0 : _.estimate_point) || void 0,
                parent_id: (null == _ ? void 0 : _.parent_id) || null,
              };
              w(!0),
                c && (await c()),
                await h(e)
                  .then(async () => {
                    var e;
                    x({
                      eventName: b.C6,
                      payload: {
                        ..._,
                        state: 'SUCCESS',
                        element: 'Inbox page',
                      },
                      path: d.pathname,
                    }),
                      (0, g.fz)({
                        type: g.do.SUCCESS,
                        title: 'Success!',
                        message: 'Issue created successfully.',
                      }),
                      null == u ||
                        null === (e = u.current) ||
                        void 0 === e ||
                        e.clearEditor(),
                      o();
                  })
                  .catch(e => {
                    console.error(e),
                      x({
                        eventName: b.C6,
                        payload: {
                          ..._,
                          state: 'FAILED',
                          element: 'Inbox page',
                        },
                        path: d.pathname,
                      }),
                      (0, g.fz)({
                        type: g.do.ERROR,
                        title: 'Error!',
                        message: 'Some error occurred. Please try again.',
                      });
                  }),
                w(!1);
            },
            P = null != _ && !!_.name && _.name.length > 255;
          return t && a && j && _
            ? (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsxs)('div', {
                    className: 'space-y-5 p-5',
                    children: [
                      (0, l.jsxs)('h3', {
                        className: 'text-xl font-medium text-custom-text-200',
                        children: [
                          'Move ',
                          null == m ? void 0 : m.identifier,
                          '-',
                          null == r ? void 0 : r.sequence_id,
                          ' to project issues',
                        ],
                      }),
                      (0, l.jsxs)('div', {
                        className: 'space-y-3',
                        children: [
                          (0, l.jsx)(k, {
                            data: _,
                            handleData: I,
                            isTitleLengthMoreThan255Character: P,
                          }),
                          (0, l.jsx)(A, {
                            workspaceSlug: t,
                            projectId: a,
                            workspaceId: j,
                            data: _,
                            handleData: I,
                            editorRef: u,
                            containerClassName:
                              'border-[0.5px] border-custom-border-200 py-3 min-h-[150px]',
                          }),
                          (0, l.jsx)(E, {
                            projectId: a,
                            data: _,
                            handleData: I,
                            isVisible: !0,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, l.jsxs)('div', {
                    className:
                      'px-5 py-4 flex items-center justify-end gap-2 border-t-[0.5px] border-custom-border-200',
                    children: [
                      (0, l.jsx)(g.zx, {
                        variant: 'neutral-primary',
                        size: 'sm',
                        type: 'button',
                        onClick: o,
                        children: 'Cancel',
                      }),
                      (0, l.jsx)(g.zx, {
                        variant: 'primary',
                        size: 'sm',
                        type: 'button',
                        loading: N,
                        disabled: P,
                        onClick: S,
                        children: N ? 'Adding' : 'Add to project',
                      }),
                    ],
                  }),
                ],
              })
            : (0, l.jsx)(l.Fragment, {});
        }),
        k = (0, a.Pi)(e => {
          let {
            data: s,
            handleData: t,
            isTitleLengthMoreThan255Character: i,
          } = e;
          return (0, l.jsxs)('div', {
            className: 'space-y-1',
            children: [
              (0, l.jsx)(g.II, {
                id: 'name',
                name: 'name',
                type: 'text',
                value: null == s ? void 0 : s.name,
                onChange: e => t('name', e.target.value),
                placeholder: 'Title',
                className: 'w-full text-base',
                required: !0,
              }),
              i &&
                (0, l.jsx)('span', {
                  className: 'text-xs text-red-500',
                  children: 'Title should be less than 255 characters',
                }),
            ],
          });
        });
      var C = t(20141),
        I = t(85409);
      let A = (0, a.Pi)(e => {
        let {
            containerClassName: s,
            workspaceSlug: t,
            projectId: i,
            workspaceId: a,
            data: n,
            handleData: r,
            editorRef: o,
          } = e,
          { loader: c } = (0, p.wN)();
        return 'issue-loading' === c
          ? (0, l.jsx)(g.aN, {
              className:
                'min-h-[6rem] rounded-md border border-custom-border-200',
              children: (0, l.jsx)(g.aN.Item, {
                width: '100%',
                height: '140px',
              }),
            })
          : (0, l.jsx)(C.L, {
              initialValue:
                (null == n ? void 0 : n.description_html) &&
                (null == n ? void 0 : n.description_html) !== ''
                  ? null == n
                    ? void 0
                    : n.description_html
                  : '<p></p>',
              ref: o,
              workspaceSlug: t,
              workspaceId: a,
              projectId: i,
              dragDropEnabled: !1,
              onChange: (e, s) => r('description_html', s),
              placeholder: I.cG,
              containerClassName: s,
            });
      });
      var S = t(34202),
        P = t(36738),
        F = t(68114),
        D = t(30800);
      let E = (0, a.Pi)(e => {
          var s, t;
          let { projectId: a, data: n, handleData: r, isVisible: o = !1 } = e,
            { areEstimatesEnabledForProject: c } = (0, p.ZT)(),
            [d, u] = (0, i.useState)(!1),
            [x, m] = (0, i.useState)(void 0),
            h = null == n ? void 0 : n.start_date,
            v = null == n ? void 0 : n.target_date,
            j = (0, y._3)(h);
          null == j || j.setDate(j.getDate());
          let f = (0, y._3)(v);
          return (
            null == f || f.setDate(f.getDate()),
            (0, l.jsxs)('div', {
              className: 'relative flex flex-wrap gap-2 items-center',
              children: [
                (0, l.jsx)('div', {
                  className: 'h-7',
                  children: (0, l.jsx)(P.sb, {
                    value: (null == n ? void 0 : n.state_id) || '',
                    onChange: e => r('state_id', e),
                    projectId: a,
                    buttonVariant: 'border-with-text',
                  }),
                }),
                (0, l.jsx)('div', {
                  className: 'h-7',
                  children: (0, l.jsx)(P.Iw, {
                    value: (null == n ? void 0 : n.priority) || 'none',
                    onChange: e => r('priority', e),
                    buttonVariant: 'border-with-text',
                  }),
                }),
                (0, l.jsx)('div', {
                  className: 'h-7',
                  children: (0, l.jsx)(P.Yp, {
                    projectId: a,
                    value: (null == n ? void 0 : n.assignee_ids) || [],
                    onChange: e => r('assignee_ids', e),
                    buttonVariant:
                      (null ===
                        (s = (null == n ? void 0 : n.assignee_ids) || []) ||
                      void 0 === s
                        ? void 0
                        : s.length) > 0
                        ? 'transparent-without-text'
                        : 'border-with-text',
                    buttonClassName:
                      (null ===
                        (t = (null == n ? void 0 : n.assignee_ids) || []) ||
                      void 0 === t
                        ? void 0
                        : t.length) > 0
                        ? 'hover:bg-transparent'
                        : '',
                    placeholder: 'Assignees',
                    multiple: !0,
                  }),
                }),
                (0, l.jsx)('div', {
                  className: 'h-7',
                  children: (0, l.jsx)(D.p, {
                    createLabelEnabled: !1,
                    setIsOpen: () => {},
                    value: (null == n ? void 0 : n.label_ids) || [],
                    onChange: e => r('label_ids', e),
                    projectId: a,
                  }),
                }),
                o &&
                  (0, l.jsx)('div', {
                    className: 'h-7',
                    children: (0, l.jsx)(P.qp, {
                      value: (null == n ? void 0 : n.start_date) || null,
                      onChange: e => (e ? r('start_date', (0, y.ss)(e)) : null),
                      buttonVariant: 'border-with-text',
                      minDate: null != j ? j : void 0,
                      placeholder: 'Start date',
                    }),
                  }),
                (0, l.jsx)('div', {
                  className: 'h-7',
                  children: (0, l.jsx)(P.qp, {
                    value: (null == n ? void 0 : n.target_date) || null,
                    onChange: e => (e ? r('target_date', (0, y.ss)(e)) : null),
                    buttonVariant: 'border-with-text',
                    minDate: null != j ? j : void 0,
                    placeholder: 'Due date',
                  }),
                }),
                o &&
                  (0, l.jsx)('div', {
                    className: 'h-7',
                    children: (0, l.jsx)(P._X, {
                      value: (null == n ? void 0 : n.cycle_id) || '',
                      onChange: e => r('cycle_id', e),
                      projectId: a,
                      placeholder: 'Cycle',
                      buttonVariant: 'border-with-text',
                    }),
                  }),
                o &&
                  (0, l.jsx)('div', {
                    className: 'h-7',
                    children: (0, l.jsx)(P.xL, {
                      value: (null == n ? void 0 : n.module_ids) || [],
                      onChange: e => r('module_ids', e),
                      projectId: a,
                      placeholder: 'Modules',
                      buttonVariant: 'border-with-text',
                      multiple: !0,
                      showCount: !0,
                    }),
                  }),
                o &&
                  c(a) &&
                  (0, l.jsx)('div', {
                    className: 'h-7',
                    children: (0, l.jsx)(P.ym, {
                      value: (null == n ? void 0 : n.estimate_point) || null,
                      onChange: e => r('estimate_point', e),
                      projectId: a,
                      buttonVariant: 'border-with-text',
                      placeholder: 'Estimate',
                    }),
                  }),
                o &&
                  (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsxs)('button', {
                        type: 'button',
                        className:
                          'flex cursor-pointer items-center justify-between gap-1 rounded border-[0.5px] border-custom-border-300 px-2 py-1.5 text-xs hover:bg-custom-background-80',
                        onClick: () => u(!0),
                        children: [
                          (0, l.jsx)(S.Z, {
                            className: 'h-3 w-3 flex-shrink-0',
                          }),
                          (0, l.jsx)('span', {
                            className: 'whitespace-nowrap',
                            children: x
                              ? ''
                                  .concat(x.project__identifier, '-')
                                  .concat(x.sequence_id)
                              : 'Add parent',
                          }),
                        ],
                      }),
                      (0, l.jsx)(F.dwI, {
                        isOpen: d,
                        handleClose: () => u(!1),
                        onChange: e => {
                          r('parent_id', null == e ? void 0 : e.id), m(e);
                        },
                        projectId: a,
                        issueId: void 0,
                      }),
                    ],
                  }),
              ],
            })
          );
        }),
        O = e => {
          let { isOpen: s, onClose: t, data: a, onSubmit: n } = e,
            [r, o] = (0, i.useState)(!1),
            { getProjectById: c } = (0, p.PY)(),
            d = a.project_id ? c(null == a ? void 0 : a.project_id) : void 0,
            u = async () => {
              o(!0), await n().finally(() => o(!1));
            };
          return (0, l.jsx)(v.qv, {
            handleClose: () => {
              o(!1), t();
            },
            handleSubmit: u,
            isDeleting: r,
            isOpen: s,
            title: 'Decline Issue',
            content: (0, l.jsxs)(l.Fragment, {
              children: [
                ' ',
                'Are you sure you want to decline issue',
                ' ',
                (0, l.jsxs)('span', {
                  className: 'break-words font-medium text-custom-text-100',
                  children: [
                    null == d ? void 0 : d.identifier,
                    '-',
                    null == a ? void 0 : a.sequence_id,
                  ],
                }),
                '',
                '? This action cannot be undone.',
              ],
            }),
            primaryButtonText: { loading: 'Declining', default: 'Decline' },
          });
        },
        R = (0, a.Pi)(e => {
          let { isOpen: s, onClose: t, onSubmit: a, data: n } = e,
            [r, o] = (0, i.useState)(!1),
            { getProjectById: c } = (0, p.PY)(),
            d = n.project_id ? c(null == n ? void 0 : n.project_id) : void 0,
            u = () => {
              o(!1), t();
            },
            x = async () => {
              o(!0), await a().finally(() => u());
            };
          return (0, l.jsx)(v.qv, {
            handleClose: u,
            handleSubmit: x,
            isDeleting: r,
            isOpen: s,
            title: 'Delete Issue',
            content: (0, l.jsxs)(l.Fragment, {
              children: [
                'Are you sure you want to delete issue',
                ' ',
                (0, l.jsxs)('span', {
                  className: 'break-words font-medium text-custom-text-100',
                  children: [
                    null == d ? void 0 : d.identifier,
                    '-',
                    null == n ? void 0 : n.sequence_id,
                  ],
                }),
                '',
                '? The issue will only be deleted from the inbox and this action cannot be undone.',
              ],
            }),
          });
        });
      var M = t(81630),
        z = t(30335),
        B = t(15455),
        Z = t(66778),
        T = t(82750);
      let L = new (t(4225).vq)(),
        Y = e => {
          var s;
          let { isOpen: t, onClose: a, onSubmit: r, value: o } = e,
            [c, u] = (0, i.useState)(''),
            {
              workspaceSlug: m,
              projectId: h,
              issueId: v,
            } = (0, f.useRouter)().query,
            { getProjectStates: j } = (0, p.eD)(),
            { getProjectById: b } = (0, p.PY)(),
            { data: y } = (0, n.ZP)(
              m && h ? (0, T.g_)(m, h) : null,
              m && h
                ? () =>
                    L.getIssues(m, h).then(e =>
                      Object.values(null != e ? e : {}).filter(e => e.id !== v)
                    )
                : null
            ),
            N = () => {
              a();
            },
            w =
              null !==
                (s =
                  '' === c
                    ? y
                    : null == y
                      ? void 0
                      : y.filter(e => e.name.includes(c))) && void 0 !== s
                ? s
                : [];
          return (0, l.jsx)(z.u.Root, {
            show: t,
            as: i.Fragment,
            afterLeave: () => u(''),
            appear: !0,
            children: (0, l.jsx)('div', {
              className: 'flex flex-wrap items-start',
              children: (0, l.jsx)('div', {
                className: 'space-y-1 sm:basis-1/2',
                children: (0, l.jsxs)(B.V, {
                  as: 'div',
                  className: 'relative z-20',
                  onClose: N,
                  children: [
                    (0, l.jsx)(z.u.Child, {
                      as: i.Fragment,
                      enter: 'ease-out duration-300',
                      enterFrom: 'opacity-0',
                      enterTo: 'opacity-100',
                      leave: 'ease-in duration-200',
                      leaveFrom: 'opacity-100',
                      leaveTo: 'opacity-0',
                      children: (0, l.jsx)('div', {
                        className:
                          'fixed inset-0 bg-custom-backdrop transition-opacity',
                      }),
                    }),
                    (0, l.jsx)('div', {
                      className:
                        'fixed inset-0 z-20 overflow-y-auto p-4 sm:p-6 md:p-20',
                      children: (0, l.jsx)(z.u.Child, {
                        as: i.Fragment,
                        enter: 'ease-out duration-300',
                        enterFrom: 'opacity-0 scale-95',
                        enterTo: 'opacity-100 scale-100',
                        leave: 'ease-in duration-200',
                        leaveFrom: 'opacity-100 scale-100',
                        leaveTo: 'opacity-0 scale-95',
                        children: (0, l.jsx)(B.V.Panel, {
                          className:
                            'relative mx-auto max-w-2xl transform rounded-lg bg-custom-background-100 shadow-custom-shadow-md transition-all',
                          children: (0, l.jsxs)(Z.h, {
                            value: o,
                            onChange: e => {
                              if (!e || 0 === e.length)
                                return (0, g.fz)({
                                  title: 'Error',
                                  type: g.do.ERROR,
                                });
                              r(e), N();
                            },
                            children: [
                              (0, l.jsxs)('div', {
                                className: 'relative m-1',
                                children: [
                                  (0, l.jsx)(M.Z, {
                                    className:
                                      'pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-custom-text-100 text-opacity-40',
                                    'aria-hidden': 'true',
                                  }),
                                  (0, l.jsx)('input', {
                                    type: 'text',
                                    className:
                                      'h-12 w-full border-0 bg-transparent pl-11 pr-4 text-custom-text-100 outline-none focus:ring-0 sm:text-sm',
                                    placeholder: 'Search...',
                                    onChange: e => u(e.target.value),
                                  }),
                                ],
                              }),
                              (0, l.jsx)(Z.h.Options, {
                                static: !0,
                                className:
                                  'max-h-80 scroll-py-2 divide-y divide-custom-border-200 overflow-y-auto',
                                children:
                                  w.length > 0
                                    ? (0, l.jsxs)('li', {
                                        className: 'p-2',
                                        children: [
                                          '' === c &&
                                            (0, l.jsx)('h2', {
                                              className:
                                                'mb-2 mt-4 px-3 text-xs font-semibold text-custom-text-100',
                                              children: 'Select issue',
                                            }),
                                          (0, l.jsx)('ul', {
                                            className:
                                              'text-sm text-custom-text-100',
                                            children: w.map(e => {
                                              var s, t, i;
                                              let a =
                                                (null ===
                                                  (t = j(
                                                    null == e
                                                      ? void 0
                                                      : e.project_id
                                                  )) || void 0 === t
                                                  ? void 0
                                                  : null ===
                                                        (s = t.find(
                                                          s =>
                                                            (null == s
                                                              ? void 0
                                                              : s.id) ==
                                                            (null == e
                                                              ? void 0
                                                              : e.state_id)
                                                        )) || void 0 === s
                                                    ? void 0
                                                    : s.color) || '';
                                              return (0, l.jsx)(
                                                Z.h.Option,
                                                {
                                                  as: 'div',
                                                  value: e.id,
                                                  className: e => {
                                                    let {
                                                      active: s,
                                                      selected: t,
                                                    } = e;
                                                    return 'flex w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 py-2 text-custom-text-200 '.concat(
                                                      s || t
                                                        ? 'bg-custom-background-80 text-custom-text-100'
                                                        : '',
                                                      ' '
                                                    );
                                                  },
                                                  children: (0, l.jsxs)('div', {
                                                    className:
                                                      'flex items-center gap-2',
                                                    children: [
                                                      (0, l.jsx)('span', {
                                                        className:
                                                          'block h-1.5 w-1.5 flex-shrink-0 rounded-full',
                                                        style: {
                                                          backgroundColor: a,
                                                        },
                                                      }),
                                                      (0, l.jsxs)('span', {
                                                        className:
                                                          'flex-shrink-0 text-xs text-custom-text-200',
                                                        children: [
                                                          null ===
                                                            (i = b(
                                                              null == e
                                                                ? void 0
                                                                : e.project_id
                                                            )) || void 0 === i
                                                            ? void 0
                                                            : i.identifier,
                                                          '-',
                                                          e.sequence_id,
                                                        ],
                                                      }),
                                                      (0, l.jsx)('span', {
                                                        className:
                                                          'text-custom-text-200',
                                                        children: e.name,
                                                      }),
                                                    ],
                                                  }),
                                                },
                                                e.id
                                              );
                                            }),
                                          }),
                                        ],
                                      })
                                    : (0, l.jsx)('div', {
                                        className:
                                          'flex flex-col items-center justify-center px-3 py-8 text-center',
                                        children: (0, l.jsx)(d.ub, {
                                          type:
                                            '' === c
                                              ? x.C.ISSUE_RELATION_EMPTY_STATE
                                              : x.C
                                                  .ISSUE_RELATION_SEARCH_EMPTY_STATE,
                                          layout: 'screen-simple',
                                        }),
                                      }),
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        };
      var q = t(62153);
      let V = e => {
        let { isOpen: s, handleClose: t, value: a, onConfirm: n } = e,
          [r, o] = (0, i.useState)(a || new Date());
        return (0, l.jsx)(z.u.Root, {
          show: s,
          as: i.Fragment,
          children: (0, l.jsxs)(B.V, {
            as: 'div',
            className: 'relative z-20',
            onClose: t,
            children: [
              (0, l.jsx)(z.u.Child, {
                as: i.Fragment,
                enter: 'ease-out duration-300',
                enterFrom: 'opacity-0',
                enterTo: 'opacity-100',
                leave: 'ease-in duration-200',
                leaveFrom: 'opacity-100',
                leaveTo: 'opacity-0',
                children: (0, l.jsx)('div', {
                  className:
                    'fixed inset-0 bg-custom-backdrop transition-opacity',
                }),
              }),
              (0, l.jsx)('div', {
                className:
                  'fixed inset-0 z-20 flex w-full justify-center overflow-y-auto',
                children: (0, l.jsx)('div', {
                  className:
                    'flex min-h-full items-center justify-center p-4 text-center sm:p-0',
                  children: (0, l.jsx)(z.u.Child, {
                    as: i.Fragment,
                    enter: 'ease-out duration-300',
                    enterFrom:
                      'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
                    enterTo: 'opacity-100 translate-y-0 sm:scale-100',
                    leave: 'ease-in duration-200',
                    leaveFrom: 'opacity-100 translate-y-0 sm:scale-100',
                    leaveTo:
                      'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
                    children: (0, l.jsx)(B.V.Panel, {
                      className:
                        'relative flex transform rounded-lg bg-custom-background-100 px-5 py-8 text-left shadow-custom-shadow-md transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6',
                      children: (0, l.jsxs)('div', {
                        className: 'flex h-full w-full flex-col gap-y-1',
                        children: [
                          (0, l.jsx)(q._W, {
                            selected: r ? new Date(r) : void 0,
                            defaultMonth: r ? new Date(r) : void 0,
                            onSelect: e => {
                              e && o(e);
                            },
                            mode: 'single',
                            className:
                              'rounded-md border border-custom-border-200 p-3',
                          }),
                          (0, l.jsx)(g.zx, {
                            variant: 'primary',
                            onClick: () => {
                              close(), n(r);
                            },
                            children: 'Snooze',
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
      var U = t(78707);
      let W = e => {
          let {
              containerRef: s,
              elementRef: t,
              callback: l,
              rootMargin: a = '0px',
            } = e,
            [n, r] = (0, i.useState)(!1);
          return (
            (0, i.useEffect)(() => {
              if (t.current) {
                let e = new IntersectionObserver(
                  e => {
                    let [s] = e;
                    s.isIntersecting && l(), r(s.isIntersecting);
                  },
                  { root: s.current, rootMargin: a }
                );
                return (
                  e.observe(t.current),
                  () => {
                    t.current && e.unobserve(t.current);
                  }
                );
              }
            }, [a, l, t.current, s.current]),
            n
          );
        },
        K = [
          { key: U.Bg.OPEN, label: 'Open' },
          { key: U.Bg.CLOSED, label: 'Closed' },
        ],
        X = (0, a.Pi)(e => {
          let { workspaceSlug: s, projectId: t, setIsMobileSidebar: a } = e,
            n = (0, i.useRef)(null),
            r = (0, i.useRef)(null),
            { currentProjectDetails: o } = (0, p.PY)(),
            {
              currentTab: c,
              handleCurrentTab: h,
              loader: v,
              inboxIssuesArray: j,
              inboxIssuePaginationInfo: b,
              fetchInboxPaginationIssues: y,
              getAppliedFiltersCount: N,
            } = (0, p.wN)(),
            w = (0, f.useRouter)();
          return (
            W({
              containerRef: n,
              elementRef: r,
              callback: (0, i.useCallback)(() => {
                s && t && y(s.toString(), t.toString());
              }, [s, t, y]),
              rootMargin: '20%',
            }),
            (0, l.jsx)('div', {
              className:
                'bg-custom-background-100 flex-shrink-0 w-full h-full border-r border-custom-border-300 ',
              children: (0, l.jsxs)('div', {
                className:
                  'relative w-full h-full flex flex-col overflow-hidden',
                children: [
                  (0, l.jsxs)('div', {
                    className:
                      'border-b border-custom-border-300 flex-shrink-0 w-full h-[50px] relative flex items-center gap-2  whitespace-nowrap px-3',
                    children: [
                      K.map(e =>
                        (0, l.jsxs)(
                          'div',
                          {
                            className: (0, m.cn)(
                              'text-sm relative flex items-center gap-1 h-[50px] px-3 cursor-pointer transition-all font-medium',
                              c === (null == e ? void 0 : e.key)
                                ? 'text-custom-primary-100'
                                : 'hover:text-custom-text-200'
                            ),
                            onClick: () => {
                              c != (null == e ? void 0 : e.key) &&
                                h(null == e ? void 0 : e.key),
                                w.push(
                                  '/'
                                    .concat(s, '/projects/')
                                    .concat(t, '/inbox?currentTab=')
                                    .concat(null == e ? void 0 : e.key)
                                );
                            },
                            children: [
                              (0, l.jsx)('div', {
                                children: null == e ? void 0 : e.label,
                              }),
                              (null == e ? void 0 : e.key) === 'open' &&
                                c === (null == e ? void 0 : e.key) &&
                                (0, l.jsx)('div', {
                                  className:
                                    'rounded-full p-1.5 py-0.5 bg-custom-primary-100/20 text-custom-primary-100 text-xs font-semibold',
                                  children:
                                    (null == b ? void 0 : b.total_results) || 0,
                                }),
                              (0, l.jsx)('div', {
                                className: (0, m.cn)(
                                  'border absolute bottom-0 right-0 left-0 rounded-t-md',
                                  c === (null == e ? void 0 : e.key)
                                    ? 'border-custom-primary-100'
                                    : 'border-transparent'
                                ),
                              }),
                            ],
                          },
                          null == e ? void 0 : e.key
                        )
                      ),
                      (0, l.jsx)('div', {
                        className: 'ml-auto',
                        children: (0, l.jsx)(et, {}),
                      }),
                    ],
                  }),
                  (0, l.jsx)(eO, {}),
                  void 0 == v ||
                  'filter-loading' !== v ||
                  (null == b ? void 0 : b.next_page_results)
                    ? (0, l.jsxs)('div', {
                        className:
                          'w-full h-full overflow-hidden overflow-y-auto vertical-scrollbar scrollbar-md',
                        ref: n,
                        children: [
                          j.length > 0
                            ? (0, l.jsx)(H, {
                                setIsMobileSidebar: a,
                                workspaceSlug: s,
                                projectId: t,
                                projectIdentifier:
                                  null == o ? void 0 : o.identifier,
                                inboxIssues: j,
                              })
                            : (0, l.jsx)('div', {
                                className:
                                  'flex items-center justify-center h-full w-full',
                                children: (0, l.jsx)(d.ub, {
                                  type:
                                    N > 0
                                      ? x.C.INBOX_SIDEBAR_FILTER_EMPTY_STATE
                                      : c === U.Bg.OPEN
                                        ? x.C.INBOX_SIDEBAR_OPEN_TAB
                                        : x.C.INBOX_SIDEBAR_CLOSED_TAB,
                                  layout: 'screen-simple',
                                }),
                              }),
                          (0, l.jsx)('div', {
                            ref: r,
                            children:
                              (null == b ? void 0 : b.next_page_results) &&
                              (0, l.jsxs)(g.aN, {
                                className: 'mx-auto w-full space-y-4 py-4 px-2',
                                children: [
                                  (0, l.jsx)(g.aN.Item, {
                                    height: '64px',
                                    width: 'w-100',
                                  }),
                                  (0, l.jsx)(g.aN.Item, {
                                    height: '64px',
                                    width: 'w-100',
                                  }),
                                ],
                              }),
                          }),
                        ],
                      })
                    : (0, l.jsx)(u.Vo, {}),
                ],
              }),
            })
          );
        }),
        H = (0, a.Pi)(e => {
          let {
            workspaceSlug: s,
            projectId: t,
            projectIdentifier: a,
            inboxIssues: n,
            setIsMobileSidebar: r,
          } = e;
          return (0, l.jsx)(l.Fragment, {
            children: n.map(e =>
              (0, l.jsx)(
                i.Fragment,
                {
                  children: (0, l.jsx)(ee, {
                    setIsMobileSidebar: r,
                    workspaceSlug: s,
                    projectId: t,
                    projectIdentifier: a,
                    inboxIssue: e,
                  }),
                },
                e.id
              )
            ),
          });
        });
      var G = t(79894),
        Q = t.n(G),
        J = t(84563),
        $ = t(18894);
      let ee = (0, a.Pi)(e => {
        var s, t, i, a;
        let {
            workspaceSlug: n,
            projectId: r,
            inboxIssue: o,
            projectIdentifier: c,
            setIsMobileSidebar: d,
          } = e,
          { inboxIssueId: u } = (0, f.useRouter)().query,
          { currentTab: x } = (0, p.wN)(),
          { projectLabels: h } = (0, p.NP)(),
          { isMobile: v } = (0, $.L)(),
          { getUserDetails: j } = (0, p.Kb)(),
          b = o.issue,
          N = (e, s) => {
            u === s && e.preventDefault(), d(!1);
          };
        if (!b) return (0, l.jsx)(l.Fragment, {});
        let w = (null == b ? void 0 : b.created_by)
          ? j(null == b ? void 0 : b.created_by)
          : void 0;
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsx)(
            Q(),
            {
              id: 'inbox-issue-list-item-'.concat(b.id),
              href: '/'
                .concat(n, '/projects/')
                .concat(r, '/inbox?currentTab=')
                .concat(x, '&inboxIssueId=')
                .concat(b.id),
              onClick: e => N(e, b.id),
              children: (0, l.jsxs)('div', {
                className: (0, m.cn)(
                  'flex flex-col gap-2 relative border border-t-transparent border-l-transparent border-r-transparent border-b-custom-border-200 p-4 hover:bg-custom-primary/5 cursor-pointer transition-all',
                  { 'border-custom-primary-100 border': u === b.id }
                ),
                children: [
                  (0, l.jsxs)('div', {
                    className: 'space-y-1',
                    children: [
                      (0, l.jsxs)('div', {
                        className:
                          'relative flex items-center justify-between gap-2',
                        children: [
                          (0, l.jsxs)('div', {
                            className:
                              'flex-shrink-0 text-xs font-medium text-custom-text-300',
                            children: [c, '-', b.sequence_id],
                          }),
                          -2 !== o.status &&
                            (0, l.jsx)(e5, { inboxIssue: o, iconSize: 12 }),
                        ],
                      }),
                      (0, l.jsx)('h3', {
                        className: 'truncate w-full text-sm',
                        children: b.name,
                      }),
                    ],
                  }),
                  (0, l.jsxs)('div', {
                    className: 'flex items-center justify-between',
                    children: [
                      (0, l.jsxs)('div', {
                        className: 'flex flex-wrap items-center gap-2',
                        children: [
                          (0, l.jsx)(g.u, {
                            tooltipHeading: 'Created on',
                            tooltipContent: ''.concat(
                              (0, y.ot)(
                                null !== (s = b.created_at) && void 0 !== s
                                  ? s
                                  : ''
                              )
                            ),
                            isMobile: v,
                            children: (0, l.jsx)('div', {
                              className: 'text-xs text-custom-text-200',
                              children: (0, y.ot)(
                                null !== (t = b.created_at) && void 0 !== t
                                  ? t
                                  : ''
                              ),
                            }),
                          }),
                          (0, l.jsx)('div', {
                            className:
                              'border-2 rounded-full border-custom-border-400',
                          }),
                          b.priority &&
                            (0, l.jsx)(g.u, {
                              tooltipHeading: 'Priority',
                              tooltipContent: ''.concat(
                                null !== (i = b.priority) && void 0 !== i
                                  ? i
                                  : 'None'
                              ),
                              children: (0, l.jsx)(g.bJ, {
                                priority: b.priority,
                                withContainer: !0,
                                className: 'w-3 h-3',
                              }),
                            }),
                          b.label_ids && b.label_ids.length > 3
                            ? (0, l.jsxs)('div', {
                                className:
                                  'relative !h-[17.5px] flex items-center gap-1 rounded border border-custom-border-300 px-1 text-xs',
                                children: [
                                  (0, l.jsx)('span', {
                                    className:
                                      'h-2 w-2 rounded-full bg-orange-400',
                                  }),
                                  (0, l.jsx)('span', {
                                    className: 'normal-case max-w-28 truncate',
                                    children: ''.concat(
                                      b.label_ids.length,
                                      ' labels'
                                    ),
                                  }),
                                ],
                              })
                            : (0, l.jsx)(l.Fragment, {
                                children: (null !== (a = b.label_ids) &&
                                void 0 !== a
                                  ? a
                                  : []
                                ).map(e => {
                                  let s =
                                    null == h
                                      ? void 0
                                      : h.find(s => s.id === e);
                                  return s
                                    ? (0, l.jsxs)(
                                        'div',
                                        {
                                          className:
                                            'relative !h-[17.5px] flex items-center gap-1 rounded border border-custom-border-300 px-1 text-xs',
                                          children: [
                                            (0, l.jsx)('span', {
                                              className: 'h-2 w-2 rounded-full',
                                              style: {
                                                backgroundColor: s.color,
                                              },
                                            }),
                                            (0, l.jsx)('span', {
                                              className:
                                                'normal-case max-w-28 truncate',
                                              children: s.name,
                                            }),
                                          ],
                                        },
                                        e
                                      )
                                    : null;
                                }),
                              }),
                        ],
                      }),
                      w &&
                        (0, l.jsx)(J.g, {
                          showTooltip: !1,
                          userIds: null == w ? void 0 : w.id,
                        }),
                    ],
                  }),
                ],
              }),
            },
            ''.concat(r, '_').concat(b.id)
          ),
        });
      });
      var es = t(64273);
      let et = () =>
        (0, l.jsxs)('div', {
          className: 'relative flex items-center gap-2',
          children: [
            (0, l.jsx)('div', {
              children: (0, l.jsx)(F.lqY, {
                icon: (0, l.jsx)(es.Z, { className: 'h-3 w-3' }),
                title: 'Filters',
                placement: 'bottom-end',
                children: (0, l.jsx)(ei, {}),
              }),
            }),
            (0, l.jsx)('div', { children: (0, l.jsx)(eE, {}) }),
          ],
        });
      var el = t(82558);
      let ei = (0, a.Pi)(() => {
        let {
            project: { projectMemberIds: e },
          } = (0, p.Kb)(),
          { projectLabels: s } = (0, p.NP)(),
          { projectStates: t } = (0, p.eD)(),
          [a, n] = (0, i.useState)('');
        return (0, l.jsxs)('div', {
          className: 'flex h-full w-full flex-col overflow-hidden',
          children: [
            (0, l.jsx)('div', {
              className: 'bg-custom-background-100 p-2.5 pb-0',
              children: (0, l.jsxs)('div', {
                className:
                  'flex items-center gap-1.5 rounded border-[0.5px] border-custom-border-200 bg-custom-background-90 px-1.5 py-1 text-xs',
                children: [
                  (0, l.jsx)(M.Z, {
                    className: 'text-custom-text-400',
                    size: 12,
                    strokeWidth: 2,
                  }),
                  (0, l.jsx)('input', {
                    type: 'text',
                    className:
                      'w-full bg-custom-background-90 outline-none placeholder:text-custom-text-400',
                    placeholder: 'Search',
                    value: a,
                    onChange: e => n(e.target.value),
                    autoFocus: !0,
                  }),
                  '' !== a &&
                    (0, l.jsx)('button', {
                      type: 'button',
                      className: 'grid place-items-center',
                      onClick: () => n(''),
                      children: (0, l.jsx)(el.Z, {
                        className: 'text-custom-text-300',
                        size: 12,
                        strokeWidth: 2,
                      }),
                    }),
                ],
              }),
            }),
            (0, l.jsxs)('div', {
              className:
                'h-full w-full divide-y divide-custom-border-200 overflow-y-auto px-2.5 vertical-scrollbar scrollbar-sm',
              children: [
                (0, l.jsx)('div', {
                  className: 'py-2',
                  children: (0, l.jsx)(ep, { searchQuery: a }),
                }),
                (0, l.jsx)('div', {
                  className: 'py-2',
                  children: (0, l.jsx)(eh, { states: t, searchQuery: a }),
                }),
                (0, l.jsx)('div', {
                  className: 'py-2',
                  children: (0, l.jsx)(ej, { searchQuery: a }),
                }),
                (0, l.jsx)('div', {
                  className: 'py-2',
                  children: (0, l.jsx)(eN, {
                    filterKey: 'assignees',
                    label: 'Assignees',
                    searchQuery: a,
                    memberIds: null != e ? e : [],
                  }),
                }),
                (0, l.jsx)('div', {
                  className: 'py-2',
                  children: (0, l.jsx)(eN, {
                    filterKey: 'created_by',
                    label: 'Created By',
                    searchQuery: a,
                    memberIds: null != e ? e : [],
                  }),
                }),
                (0, l.jsx)('div', {
                  className: 'py-2',
                  children: (0, l.jsx)(eg, {
                    searchQuery: a,
                    labels: null != s ? s : [],
                  }),
                }),
                (0, l.jsx)('div', {
                  className: 'py-2',
                  children: (0, l.jsx)(eA, {
                    filterKey: 'created_at',
                    label: 'Created date',
                    searchQuery: a,
                  }),
                }),
                (0, l.jsx)('div', {
                  className: 'py-2',
                  children: (0, l.jsx)(eA, {
                    filterKey: 'updated_at',
                    label: 'Last updated date',
                    searchQuery: a,
                  }),
                }),
              ],
            }),
          ],
        });
      });
      var ea = t(80986),
        en = t(25262),
        er = t(35854),
        eo = t(51731),
        ec = t(32681);
      let ed = [
          {
            key: 'pending',
            status: U.hA.PENDING,
            icon: ea.Z,
            title: 'Pending',
            description: () => 'Pending',
            textColor: function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              return e ? '' : 'text-[#AB6400]';
            },
            bgColor: function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              return e ? '' : 'bg-[#FFF7C2]';
            },
          },
          {
            key: 'declined',
            status: U.hA.DECLINED,
            icon: en.Z,
            title: 'Declined',
            description: () => 'Declined',
            textColor: function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              return e ? '' : 'text-[#CE2C31]';
            },
            bgColor: function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              return e ? '' : 'bg-[#FEEBEC]';
            },
          },
          {
            key: 'snoozed',
            status: U.hA.SNOOZED,
            icon: er.Z,
            title: 'Snoozed',
            description: function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : new Date();
              return ''.concat((0, y._U)(e), ' days to go');
            },
            textColor: function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              return e ? 'text-red-500' : 'text-custom-text-400';
            },
            bgColor: function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              return e ? 'bg-red-500/10' : 'bg-[#E0E1E6]';
            },
          },
          {
            key: 'accepted',
            status: U.hA.ACCEPTED,
            icon: eo.Z,
            title: 'Accepted',
            description: () => 'Accepted',
            textColor: function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              return e ? '' : 'text-[#3E9B4F]';
            },
            bgColor: function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              return e ? '' : 'bg-[#E9F6E9]';
            },
          },
          {
            key: 'duplicate',
            status: U.hA.DUPLICATE,
            icon: ec.Z,
            title: 'Duplicate',
            description: () => 'Duplicate',
            textColor: function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              return e ? '' : 'text-custom-text-200';
            },
            bgColor: function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              return e ? '' : 'bg-gray-500/10';
            },
          },
        ],
        eu = [
          { key: 'issue__created_at', label: 'Date created' },
          { key: 'issue__updated_at', label: 'Date updated' },
          { key: 'issue__sequence_id', label: 'ID' },
        ],
        ex = [
          { key: 'asc', label: 'Ascending' },
          { key: 'desc', label: 'Descending' },
        ];
      var em = t(14501);
      let ep = (0, a.Pi)(e => {
          var s;
          let { searchQuery: t } = e,
            {
              currentTab: a,
              inboxFilters: n,
              handleInboxIssueFilters: r,
            } = (0, em.w)(),
            [o, c] = (0, i.useState)(!0),
            d = (null == n ? void 0 : n.status) || [],
            u =
              null !== (s = null == d ? void 0 : d.length) && void 0 !== s
                ? s
                : 0,
            x = ed.filter(
              e =>
                (('open' === a && [-2, 0].includes(e.status)) ||
                  ('closed' === a && [-1, 1, 2].includes(e.status))) &&
                e.key.includes(t.toLowerCase())
            ),
            m = e =>
              (null == d ? void 0 : d.includes(e))
                ? d.filter(s => s !== e)
                : [...d, e],
            p = e => {
              let s = m(e);
              s.length >= 1 && r('status', s);
            };
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(F.YHs, {
                title: 'Issue Status '.concat(u > 0 ? ' ('.concat(u, ')') : ''),
                isPreviewEnabled: o,
                handleIsPreviewEnabled: () => c(!o),
              }),
              o &&
                (0, l.jsx)('div', {
                  children:
                    x.length > 0
                      ? x.map(e =>
                          (0, l.jsx)(
                            F.f2,
                            {
                              isChecked: null != d && !!d.includes(e.status),
                              onClick: () => p(e.status),
                              icon: (0, l.jsx)(e.icon, {
                                className: 'h-3.5 w-3.5 '.concat(
                                  null == e ? void 0 : e.textColor(!1)
                                ),
                              }),
                              title: e.title,
                            },
                            e.key
                          )
                        )
                      : (0, l.jsx)('p', {
                          className: 'text-xs italic text-custom-text-400',
                          children: 'No matches found',
                        }),
                }),
            ],
          });
        }),
        eh = (0, a.Pi)(e => {
          var s;
          let { states: t, searchQuery: a } = e,
            [n, r] = (0, i.useState)(5),
            [o, c] = (0, i.useState)(!0),
            { inboxFilters: d, handleInboxIssueFilters: u } = (0, p.wN)(),
            x = (null == d ? void 0 : d.state) || [],
            m =
              null !== (s = null == x ? void 0 : x.length) && void 0 !== s
                ? s
                : 0,
            h =
              null == t
                ? void 0
                : t.filter(e => e.name.toLowerCase().includes(a.toLowerCase())),
            v = e =>
              (null == x ? void 0 : x.includes(e))
                ? x.filter(s => s !== e)
                : [...x, e];
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(F.YHs, {
                title: 'State'.concat(m > 0 ? ' ('.concat(m, ')') : ''),
                isPreviewEnabled: o,
                handleIsPreviewEnabled: () => c(!o),
              }),
              o &&
                (0, l.jsx)('div', {
                  children: h
                    ? h.length > 0
                      ? (0, l.jsxs)(l.Fragment, {
                          children: [
                            h
                              .slice(0, n)
                              .map(e =>
                                (0, l.jsx)(
                                  F.f2,
                                  {
                                    isChecked:
                                      null != x &&
                                      !!x.includes(null == e ? void 0 : e.id),
                                    onClick: () => u('state', v(e.id)),
                                    icon: (0, l.jsx)(g.b_, {
                                      color: e.color,
                                      stateGroup: e.group,
                                      height: '12px',
                                      width: '12px',
                                    }),
                                    title: e.name,
                                  },
                                  null == e ? void 0 : e.id
                                )
                              ),
                            h.length > 5 &&
                              (0, l.jsx)('button', {
                                type: 'button',
                                className:
                                  'ml-8 text-xs font-medium text-custom-primary-100',
                                onClick: () => {
                                  h && (n === h.length ? r(5) : r(h.length));
                                },
                                children:
                                  n === h.length ? 'View less' : 'View all',
                              }),
                          ],
                        })
                      : (0, l.jsx)('p', {
                          className: 'text-xs italic text-custom-text-400',
                          children: 'No matches found',
                        })
                    : (0, l.jsxs)(g.aN, {
                        className: 'space-y-2',
                        children: [
                          (0, l.jsx)(g.aN.Item, { height: '20px' }),
                          (0, l.jsx)(g.aN.Item, { height: '20px' }),
                          (0, l.jsx)(g.aN.Item, { height: '20px' }),
                        ],
                      }),
                }),
            ],
          });
        });
      var ev = t(93997);
      let ej = (0, a.Pi)(e => {
          var s;
          let { searchQuery: t } = e,
            { inboxFilters: a, handleInboxIssueFilters: n } = (0, em.w)(),
            [r, o] = (0, i.useState)(!0),
            c = (null == a ? void 0 : a.priority) || [],
            d =
              null !== (s = null == c ? void 0 : c.length) && void 0 !== s
                ? s
                : 0,
            u = ev.Ku.filter(e => e.key.includes(t.toLowerCase())),
            x = e =>
              (null == c ? void 0 : c.includes(e))
                ? c.filter(s => s !== e)
                : [...c, e];
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(F.YHs, {
                title: 'Priority'.concat(d > 0 ? ' ('.concat(d, ')') : ''),
                isPreviewEnabled: r,
                handleIsPreviewEnabled: () => o(!r),
              }),
              r &&
                (0, l.jsx)('div', {
                  children:
                    u.length > 0
                      ? u.map(e =>
                          (0, l.jsx)(
                            F.f2,
                            {
                              isChecked: null != c && !!c.includes(e.key),
                              onClick: () => n('priority', x(e.key)),
                              icon: (0, l.jsx)(g.bJ, {
                                priority: e.key,
                                className: 'h-3.5 w-3.5',
                              }),
                              title: e.title,
                            },
                            e.key
                          )
                        )
                      : (0, l.jsx)('p', {
                          className: 'text-xs italic text-custom-text-400',
                          children: 'No matches found',
                        }),
                }),
            ],
          });
        }),
        ef = e => {
          let { color: s } = e;
          return (0, l.jsx)('span', {
            className: 'h-2.5 w-2.5 rounded-full',
            style: { backgroundColor: s },
          });
        },
        eg = (0, a.Pi)(e => {
          var s;
          let { labels: t, searchQuery: a } = e,
            [n, r] = (0, i.useState)(5),
            [o, c] = (0, i.useState)(!0),
            { inboxFilters: d, handleInboxIssueFilters: u } = (0, p.wN)(),
            x = (null == d ? void 0 : d.labels) || [],
            m =
              null !== (s = null == x ? void 0 : x.length) && void 0 !== s
                ? s
                : 0,
            h =
              null == t
                ? void 0
                : t.filter(e => e.name.toLowerCase().includes(a.toLowerCase())),
            v = e =>
              (null == x ? void 0 : x.includes(e))
                ? x.filter(s => s !== e)
                : [...x, e];
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(F.YHs, {
                title: 'Label'.concat(m > 0 ? ' ('.concat(m, ')') : ''),
                isPreviewEnabled: o,
                handleIsPreviewEnabled: () => c(!o),
              }),
              o &&
                (0, l.jsx)('div', {
                  children: h
                    ? h.length > 0
                      ? (0, l.jsxs)(l.Fragment, {
                          children: [
                            h
                              .slice(0, n)
                              .map(e =>
                                (0, l.jsx)(
                                  F.f2,
                                  {
                                    isChecked:
                                      null != x &&
                                      !!x.includes(null == e ? void 0 : e.id),
                                    onClick: () => u('labels', v(e.id)),
                                    icon: (0, l.jsx)(ef, { color: e.color }),
                                    title: e.name,
                                  },
                                  null == e ? void 0 : e.id
                                )
                              ),
                            h.length > 5 &&
                              (0, l.jsx)('button', {
                                type: 'button',
                                className:
                                  'ml-8 text-xs font-medium text-custom-primary-100',
                                onClick: () => {
                                  h && (n === h.length ? r(5) : r(h.length));
                                },
                                children:
                                  n === h.length ? 'View less' : 'View all',
                              }),
                          ],
                        })
                      : (0, l.jsx)('p', {
                          className: 'text-xs italic text-custom-text-400',
                          children: 'No matches found',
                        })
                    : (0, l.jsxs)(g.aN, {
                        className: 'space-y-2',
                        children: [
                          (0, l.jsx)(g.aN.Item, { height: '20px' }),
                          (0, l.jsx)(g.aN.Item, { height: '20px' }),
                          (0, l.jsx)(g.aN.Item, { height: '20px' }),
                        ],
                      }),
                }),
            ],
          });
        });
      var eb = t(95099),
        ey = t.n(eb);
      let eN = (0, a.Pi)(e => {
        var s;
        let {
            filterKey: t,
            label: a = 'Members',
            memberIds: n,
            searchQuery: r,
          } = e,
          { inboxFilters: o, handleInboxIssueFilters: c } = (0, p.wN)(),
          { getUserDetails: d } = (0, p.Kb)(),
          { currentUser: u } = (0, p.aF)(),
          [x, m] = (0, i.useState)(5),
          [h, v] = (0, i.useState)(!0),
          j = (null == o ? void 0 : o[t]) || [],
          f =
            null !== (s = null == j ? void 0 : j.length) && void 0 !== s
              ? s
              : 0,
          b = (0, i.useMemo)(() => {
            let e = (n || []).filter(e => {
              var s;
              return null === (s = d(e)) || void 0 === s
                ? void 0
                : s.display_name.toLowerCase().includes(r.toLowerCase());
            });
            return ey()(e, [
              e => !j.includes(e),
              e => e !== (null == u ? void 0 : u.id),
              e => {
                var s;
                return null === (s = d(e)) || void 0 === s
                  ? void 0
                  : s.display_name.toLowerCase();
              },
            ]);
          }, [r]),
          y = e =>
            (null == j ? void 0 : j.includes(e))
              ? j.filter(s => s !== e)
              : [...j, e];
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(F.YHs, {
              title: ''.concat(a, ' ').concat(f > 0 ? ' ('.concat(f, ')') : ''),
              isPreviewEnabled: h,
              handleIsPreviewEnabled: () => v(!h),
            }),
            h &&
              (0, l.jsx)('div', {
                children: b
                  ? b.length > 0
                    ? (0, l.jsxs)(l.Fragment, {
                        children: [
                          b.slice(0, x).map(e => {
                            let s = d(e);
                            return s
                              ? (0, l.jsx)(
                                  F.f2,
                                  {
                                    isChecked: null != j && !!j.includes(s.id),
                                    onClick: () => c(t, y(s.id)),
                                    icon: (0, l.jsx)(g.qE, {
                                      name: s.display_name,
                                      src: s.avatar,
                                      showTooltip: !1,
                                      size: 'md',
                                    }),
                                    title:
                                      (null == u ? void 0 : u.id) === s.id
                                        ? 'You'
                                        : null == s
                                          ? void 0
                                          : s.display_name,
                                  },
                                  'members-'.concat(s.id)
                                )
                              : null;
                          }),
                          b.length > 5 &&
                            (0, l.jsx)('button', {
                              type: 'button',
                              className:
                                'ml-8 text-xs font-medium text-custom-primary-100',
                              onClick: () => {
                                b && (x === b.length ? m(5) : m(b.length));
                              },
                              children:
                                x === b.length ? 'View less' : 'View all',
                            }),
                        ],
                      })
                    : (0, l.jsx)('p', {
                        className: 'text-xs italic text-custom-text-400',
                        children: 'No matches found',
                      })
                  : (0, l.jsxs)(g.aN, {
                      className: 'space-y-2',
                      children: [
                        (0, l.jsx)(g.aN.Item, { height: '20px' }),
                        (0, l.jsx)(g.aN.Item, { height: '20px' }),
                        (0, l.jsx)(g.aN.Item, { height: '20px' }),
                      ],
                    }),
              }),
          ],
        });
      });
      var ew = t(58533),
        e_ = t.n(ew),
        ek = t(83766),
        eC = t.n(ek);
      let eI = e => /^\d{4}-\d{2}-\d{2}$/.test(e),
        eA = (0, a.Pi)(e => {
          var s;
          let { filterKey: t, label: a, searchQuery: n } = e,
            { inboxFilters: r, handleInboxIssueFilters: o } = (0, p.wN)(),
            [c, d] = (0, i.useState)(!0),
            [u, x] = (0, i.useState)(!1),
            m = (null == r ? void 0 : r[t]) || [],
            h =
              null !== (s = null == m ? void 0 : m.length) && void 0 !== s
                ? s
                : 0,
            j = U.kw.filter(e =>
              e.name.toLowerCase().includes(n.toLowerCase())
            ),
            f = e =>
              (null == m ? void 0 : m.includes(e)) ? [] : eC()(e_()(e)),
            g = () =>
              ((null == m ? void 0 : m.filter(e => eI(e.split(';')[0]))) || [])
                .length > 0;
          return (0, l.jsxs)(l.Fragment, {
            children: [
              u &&
                (0, l.jsx)(v.iF, {
                  handleClose: () => x(!1),
                  isOpen: u,
                  onSelect: e => o(t, e),
                  title: 'Created date',
                }),
              (0, l.jsx)(F.YHs, {
                title: ''
                  .concat(a || 'Created date')
                  .concat(h > 0 ? ' ('.concat(h, ')') : ''),
                isPreviewEnabled: c,
                handleIsPreviewEnabled: () => d(!c),
              }),
              c &&
                (0, l.jsx)('div', {
                  children:
                    j.length > 0
                      ? (0, l.jsxs)(l.Fragment, {
                          children: [
                            j.map(e =>
                              (0, l.jsx)(
                                F.f2,
                                {
                                  isChecked: null != m && !!m.includes(e.value),
                                  onClick: () => o(t, f(e.value)),
                                  title: e.name,
                                  multiple: !1,
                                },
                                e.value
                              )
                            ),
                            (0, l.jsx)(F.f2, {
                              isChecked: g(),
                              onClick: () => {
                                g()
                                  ? o(
                                      t,
                                      (null == m
                                        ? void 0
                                        : m.filter(
                                            e => !eI(e.split(';')[0])
                                          )) || []
                                    )
                                  : x(!0);
                              },
                              title: 'Custom',
                              multiple: !1,
                            }),
                          ],
                        })
                      : (0, l.jsx)('p', {
                          className: 'text-xs italic text-custom-text-400',
                          children: 'No matches found',
                        }),
                }),
            ],
          });
        }),
        eS = (0, o.Z)('ArrowUpWideNarrow', [
          ['path', { d: 'm3 8 4-4 4 4', key: '11wl7u' }],
          ['path', { d: 'M7 4v16', key: '1glfcx' }],
          ['path', { d: 'M11 12h10', key: '1438ji' }],
          ['path', { d: 'M11 16h7', key: 'uosisv' }],
          ['path', { d: 'M11 20h4', key: '1krc32' }],
        ]);
      var eP = t(91603),
        eF = t(65709),
        eD = t(1759);
      let eE = (0, a.Pi)(() => {
          let { inboxSorting: e, handleInboxIssueSorting: s } = (0, p.wN)(),
            t =
              eu.find(s => {
                var t;
                return null == e
                  ? void 0
                  : null === (t = e.order_by) || void 0 === t
                    ? void 0
                    : t.includes(s.key);
              }) || void 0;
          return (0, l.jsxs)(g.fR, {
            customButton: (0, l.jsxs)('div', {
              className: (0, m.cn)(
                (0, g.A6)('neutral-primary', 'sm'),
                'px-2 text-custom-text-300'
              ),
              children: [
                (null == e ? void 0 : e.sort_by) === 'asc'
                  ? (0, l.jsx)(eS, { className: 'h-3 w-3' })
                  : (0, l.jsx)(eP.Z, { className: 'h-3 w-3' }),
                (null == t ? void 0 : t.label) || 'Order By',
                (0, l.jsx)(eF.Z, { className: 'h-3 w-3', strokeWidth: 2 }),
              ],
            }),
            placement: 'bottom-end',
            maxHeight: 'lg',
            closeOnSelect: !0,
            children: [
              eu.map(t => {
                var i;
                return (0, l.jsxs)(
                  g.fR.MenuItem,
                  {
                    className: 'flex items-center justify-between gap-2',
                    onClick: () => s('order_by', t.key),
                    children: [
                      t.label,
                      (null == e
                        ? void 0
                        : null === (i = e.order_by) || void 0 === i
                          ? void 0
                          : i.includes(t.key)) &&
                        (0, l.jsx)(eD.Z, { className: 'h-3 w-3' }),
                    ],
                  },
                  t.key
                );
              }),
              (0, l.jsx)('hr', { className: 'my-2 border-custom-border-200' }),
              ex.map(t => {
                var i;
                return (0, l.jsxs)(
                  g.fR.MenuItem,
                  {
                    className: 'flex items-center justify-between gap-2',
                    onClick: () => s('sort_by', t.key),
                    children: [
                      t.label,
                      (null == e
                        ? void 0
                        : null === (i = e.sort_by) || void 0 === i
                          ? void 0
                          : i.includes(t.key)) &&
                        (0, l.jsx)(eD.Z, { className: 'h-3 w-3' }),
                    ],
                  },
                  t.key
                );
              }),
            ],
          });
        }),
        eO = (0, a.Pi)(() => {
          let { getAppliedFiltersCount: e } = (0, p.wN)();
          return 0 === e
            ? (0, l.jsx)(l.Fragment, {})
            : (0, l.jsxs)('div', {
                className:
                  'p-3 py-2 relative flex flex-wrap items-center gap-1 border-b border-custom-border-300',
                children: [
                  (0, l.jsx)(eR, {}),
                  (0, l.jsx)(eM, {}),
                  (0, l.jsx)(ez, {}),
                  (0, l.jsx)(eB, {
                    filterKey: 'assignees',
                    label: 'Assignees',
                  }),
                  (0, l.jsx)(eB, {
                    filterKey: 'created_by',
                    label: 'Created By',
                  }),
                  (0, l.jsx)(eT, {}),
                  (0, l.jsx)(eL, {
                    filterKey: 'created_at',
                    label: 'Created date',
                  }),
                  (0, l.jsx)(eL, {
                    filterKey: 'updated_at',
                    label: 'Updated date',
                  }),
                ],
              });
        }),
        eR = (0, a.Pi)(() => {
          let { inboxFilters: e, handleInboxIssueFilters: s } = (0, p.wN)(),
            t = (null == e ? void 0 : e.status) || [],
            i = e => ed.find(s => s.status === e) || void 0,
            a = e =>
              (null == t ? void 0 : t.includes(e))
                ? t.filter(s => s !== e)
                : [...t, e];
          return 0 === t.length
            ? (0, l.jsx)(l.Fragment, {})
            : (0, l.jsxs)('div', {
                className:
                  'relative flex flex-wrap items-center gap-2 rounded-md border border-custom-border-200 px-2 py-1',
                children: [
                  (0, l.jsx)('div', {
                    className: 'text-xs text-custom-text-200',
                    children: 'Status',
                  }),
                  t.map(e => {
                    let t = i(e);
                    return t
                      ? (0, l.jsxs)(
                          'div',
                          {
                            className:
                              'relative flex items-center gap-1 rounded bg-custom-background-80 p-1 text-xs',
                            children: [
                              (0, l.jsx)('div', {
                                className:
                                  'w-3 h-3 flex-shrink-0 relative flex justify-center items-center overflow-hidden',
                                children: (0, l.jsx)(t.icon, {
                                  className: 'w-3 h-3 '.concat(
                                    null == t ? void 0 : t.textColor(!1)
                                  ),
                                }),
                              }),
                              (0, l.jsx)('div', {
                                className: 'text-xs truncate',
                                children: null == t ? void 0 : t.title,
                              }),
                              a(null == t ? void 0 : t.status).length >= 1 &&
                                (0, l.jsx)('div', {
                                  className:
                                    'w-3 h-3 flex-shrink-0 relative flex justify-center items-center overflow-hidden cursor-pointer text-custom-text-300 hover:text-custom-text-200 transition-all',
                                  onClick: () =>
                                    s(
                                      'status',
                                      a(null == t ? void 0 : t.status)
                                    ),
                                  children: (0, l.jsx)(el.Z, {
                                    className: 'w-3 h-3',
                                  }),
                                }),
                            ],
                          },
                          e
                        )
                      : (0, l.jsx)(l.Fragment, {});
                  }),
                ],
              });
        }),
        eM = (0, a.Pi)(() => {
          let { inboxFilters: e, handleInboxIssueFilters: s } = (0, p.wN)(),
            { getStateById: t } = (0, p.eD)(),
            i = (null == e ? void 0 : e.state) || [],
            a = e => t(e) || void 0,
            n = e =>
              (null == i ? void 0 : i.includes(e))
                ? i.filter(s => s !== e)
                : [...i, e];
          return 0 === i.length
            ? (0, l.jsx)(l.Fragment, {})
            : (0, l.jsxs)('div', {
                className:
                  'relative flex flex-wrap items-center gap-2 rounded-md border border-custom-border-200 px-2 py-1',
                children: [
                  (0, l.jsx)('div', {
                    className: 'text-xs text-custom-text-200',
                    children: 'State',
                  }),
                  i.map(e => {
                    let t = a(e);
                    return t
                      ? (0, l.jsxs)(
                          'div',
                          {
                            className:
                              'relative flex items-center gap-1 rounded bg-custom-background-80 p-1 text-xs',
                            children: [
                              (0, l.jsx)('div', {
                                className:
                                  'w-3 h-3 flex-shrink-0 relative flex justify-center items-center overflow-hidden',
                                children: (0, l.jsx)(g.b_, {
                                  color: t.color,
                                  stateGroup: t.group,
                                  height: '12px',
                                  width: '12px',
                                }),
                              }),
                              (0, l.jsx)('div', {
                                className: 'text-xs truncate',
                                children: null == t ? void 0 : t.name,
                              }),
                              (0, l.jsx)('div', {
                                className:
                                  'w-3 h-3 flex-shrink-0 relative flex justify-center items-center overflow-hidden cursor-pointer text-custom-text-300 hover:text-custom-text-200 transition-all',
                                onClick: () =>
                                  s('state', n(null == t ? void 0 : t.id)),
                                children: (0, l.jsx)(el.Z, {
                                  className: 'w-3 h-3',
                                }),
                              }),
                            ],
                          },
                          e
                        )
                      : (0, l.jsx)(l.Fragment, {});
                  }),
                  (0, l.jsx)('div', {
                    className:
                      'w-3 h-3 flex-shrink-0 relative flex justify-center items-center overflow-hidden cursor-pointer text-custom-text-300 hover:text-custom-text-200 transition-all',
                    onClick: () => s('state', void 0),
                    children: (0, l.jsx)(el.Z, { className: 'w-3 h-3' }),
                  }),
                ],
              });
        }),
        ez = (0, a.Pi)(() => {
          let { inboxFilters: e, handleInboxIssueFilters: s } = (0, p.wN)(),
            t = (null == e ? void 0 : e.priority) || [],
            i = e => ev.Ku.find(s => s.key === e) || void 0,
            a = e =>
              (null == t ? void 0 : t.includes(e))
                ? t.filter(s => s !== e)
                : [...t, e];
          return 0 === t.length
            ? (0, l.jsx)(l.Fragment, {})
            : (0, l.jsxs)('div', {
                className:
                  'relative flex flex-wrap items-center gap-2 rounded-md border border-custom-border-200 px-2 py-1',
                children: [
                  (0, l.jsx)('div', {
                    className: 'text-xs text-custom-text-200',
                    children: 'Priority',
                  }),
                  t.map(e => {
                    let t = i(e);
                    return t
                      ? (0, l.jsxs)(
                          'div',
                          {
                            className:
                              'relative flex items-center gap-1 rounded bg-custom-background-80 p-1 text-xs',
                            children: [
                              (0, l.jsx)('div', {
                                className:
                                  'w-3 h-3 flex-shrink-0 relative flex justify-center items-center overflow-hidden',
                                children: (0, l.jsx)(g.bJ, {
                                  priority: t.key,
                                  className: 'h-3 w-3',
                                }),
                              }),
                              (0, l.jsx)('div', {
                                className: 'text-xs truncate',
                                children: null == t ? void 0 : t.title,
                              }),
                              (0, l.jsx)('div', {
                                className:
                                  'w-3 h-3 flex-shrink-0 relative flex justify-center items-center overflow-hidden cursor-pointer text-custom-text-300 hover:text-custom-text-200 transition-all',
                                onClick: () =>
                                  s('priority', a(null == t ? void 0 : t.key)),
                                children: (0, l.jsx)(el.Z, {
                                  className: 'w-3 h-3',
                                }),
                              }),
                            ],
                          },
                          e
                        )
                      : (0, l.jsx)(l.Fragment, {});
                  }),
                  (0, l.jsx)('div', {
                    className:
                      'w-3 h-3 flex-shrink-0 relative flex justify-center items-center overflow-hidden cursor-pointer text-custom-text-300 hover:text-custom-text-200 transition-all',
                    onClick: () => s('priority', void 0),
                    children: (0, l.jsx)(el.Z, { className: 'w-3 h-3' }),
                  }),
                ],
              });
        }),
        eB = (0, a.Pi)(e => {
          let { filterKey: s, label: t } = e,
            { inboxFilters: i, handleInboxIssueFilters: a } = (0, p.wN)(),
            { getUserDetails: n } = (0, p.Kb)(),
            r = (null == i ? void 0 : i[s]) || [],
            o = e => n(e) || void 0,
            c = e =>
              (null == r ? void 0 : r.includes(e))
                ? r.filter(s => s !== e)
                : [...r, e];
          return 0 === r.length
            ? (0, l.jsx)(l.Fragment, {})
            : (0, l.jsxs)('div', {
                className:
                  'relative flex flex-wrap items-center gap-2 rounded-md border border-custom-border-200 px-2 py-1',
                children: [
                  (0, l.jsx)('div', {
                    className: 'text-xs text-custom-text-200',
                    children: t,
                  }),
                  r.map(e => {
                    let t = o(e);
                    return t
                      ? (0, l.jsxs)(
                          'div',
                          {
                            className:
                              'relative flex items-center gap-1 rounded bg-custom-background-80 p-1 text-xs',
                            children: [
                              (0, l.jsx)('div', {
                                className:
                                  'flex-shrink-0 relative flex justify-center items-center overflow-hidden',
                                children: (0, l.jsx)(g.qE, {
                                  name: t.display_name,
                                  src: t.avatar,
                                  showTooltip: !1,
                                  size: 'sm',
                                }),
                              }),
                              (0, l.jsx)('div', {
                                className: 'text-xs truncate',
                                children: null == t ? void 0 : t.display_name,
                              }),
                              (0, l.jsx)('div', {
                                className:
                                  'w-3 h-3 flex-shrink-0 relative flex justify-center items-center overflow-hidden cursor-pointer text-custom-text-300 hover:text-custom-text-200 transition-all',
                                onClick: () => a(s, c(e)),
                                children: (0, l.jsx)(el.Z, {
                                  className: 'w-3 h-3',
                                }),
                              }),
                            ],
                          },
                          e
                        )
                      : (0, l.jsx)(l.Fragment, {});
                  }),
                  (0, l.jsx)('div', {
                    className:
                      'w-3 h-3 flex-shrink-0 relative flex justify-center items-center overflow-hidden cursor-pointer text-custom-text-300 hover:text-custom-text-200 transition-all',
                    onClick: () => a(s, void 0),
                    children: (0, l.jsx)(el.Z, { className: 'w-3 h-3' }),
                  }),
                ],
              });
        }),
        eZ = e => {
          let { color: s } = e;
          return (0, l.jsx)('span', {
            className: 'h-2.5 w-2.5 rounded-full',
            style: { backgroundColor: s },
          });
        },
        eT = (0, a.Pi)(() => {
          let { inboxFilters: e, handleInboxIssueFilters: s } = (0, p.wN)(),
            { getLabelById: t } = (0, p.NP)(),
            i = (null == e ? void 0 : e.labels) || [],
            a = e => t(e) || void 0,
            n = e =>
              (null == i ? void 0 : i.includes(e))
                ? i.filter(s => s !== e)
                : [...i, e];
          return 0 === i.length
            ? (0, l.jsx)(l.Fragment, {})
            : (0, l.jsxs)('div', {
                className:
                  'relative flex flex-wrap items-center gap-2 rounded-md border border-custom-border-200 px-2 py-1',
                children: [
                  (0, l.jsx)('div', {
                    className: 'text-xs text-custom-text-200',
                    children: 'Label',
                  }),
                  i.map(e => {
                    let t = a(e);
                    return t
                      ? (0, l.jsxs)(
                          'div',
                          {
                            className:
                              'relative flex items-center gap-1 rounded bg-custom-background-80 p-1 text-xs',
                            children: [
                              (0, l.jsx)('div', {
                                className:
                                  'w-3 h-3 flex-shrink-0 relative flex justify-center items-center overflow-hidden',
                                children: (0, l.jsx)(eZ, { color: t.color }),
                              }),
                              (0, l.jsx)('div', {
                                className: 'text-xs truncate',
                                children: null == t ? void 0 : t.name,
                              }),
                              (0, l.jsx)('div', {
                                className:
                                  'w-3 h-3 flex-shrink-0 relative flex justify-center items-center overflow-hidden cursor-pointer text-custom-text-300 hover:text-custom-text-200 transition-all',
                                onClick: () => s('labels', n(e)),
                                children: (0, l.jsx)(el.Z, {
                                  className: 'w-3 h-3',
                                }),
                              }),
                            ],
                          },
                          e
                        )
                      : (0, l.jsx)(l.Fragment, {});
                  }),
                  (0, l.jsx)('div', {
                    className:
                      'w-3 h-3 flex-shrink-0 relative flex justify-center items-center overflow-hidden cursor-pointer text-custom-text-300 hover:text-custom-text-200 transition-all',
                    onClick: () => s('labels', void 0),
                    children: (0, l.jsx)(el.Z, { className: 'w-3 h-3' }),
                  }),
                ],
              });
        }),
        eL = (0, a.Pi)(e => {
          let { filterKey: s, label: t } = e,
            { inboxFilters: i, handleInboxIssueFilters: a } = (0, p.wN)(),
            n = (null == i ? void 0 : i[s]) || [],
            r = e => {
              let s = U.kw.find(s => s.value === e);
              if (s) return s;
              let t = e.split(';');
              return {
                name: ''
                  .concat(t[1].charAt(0).toUpperCase() + t[1].slice(1), ' ')
                  .concat((0, y.ot)(t[0])),
                value: e,
              };
            },
            o = e =>
              (null == n ? void 0 : n.includes(e))
                ? n.filter(s => s !== e)
                : [...n, e];
          return 0 === n.length
            ? (0, l.jsx)(l.Fragment, {})
            : (0, l.jsxs)('div', {
                className:
                  'relative flex flex-wrap items-center gap-2 rounded-md border border-custom-border-200 px-2 py-1',
                children: [
                  (0, l.jsx)('div', {
                    className: 'text-xs text-custom-text-200',
                    children: t,
                  }),
                  n.map(e => {
                    let t = r(e);
                    return t
                      ? (0, l.jsxs)(
                          'div',
                          {
                            className:
                              'relative flex items-center gap-1 rounded bg-custom-background-80 p-1 text-xs',
                            children: [
                              (0, l.jsx)('div', {
                                className: 'text-xs truncate',
                                children: null == t ? void 0 : t.name,
                              }),
                              (0, l.jsx)('div', {
                                className:
                                  'w-3 h-3 flex-shrink-0 relative flex justify-center items-center overflow-hidden cursor-pointer text-custom-text-300 hover:text-custom-text-200 transition-all',
                                onClick: () =>
                                  a(s, o(null == t ? void 0 : t.value)),
                                children: (0, l.jsx)(el.Z, {
                                  className: 'w-3 h-3',
                                }),
                              }),
                            ],
                          },
                          e
                        )
                      : (0, l.jsx)(l.Fragment, {});
                  }),
                  (0, l.jsx)('div', {
                    className:
                      'w-3 h-3 flex-shrink-0 relative flex justify-center items-center overflow-hidden cursor-pointer text-custom-text-300 hover:text-custom-text-200 transition-all',
                    onClick: () => a(s, void 0),
                    children: (0, l.jsx)(el.Z, { className: 'w-3 h-3' }),
                  }),
                ],
              });
        });
      var eY = t(51374);
      let eq = (0, a.Pi)(e => {
        let {
            workspaceSlug: s,
            projectId: t,
            inboxIssueId: a,
            isMobileSidebar: r,
            setIsMobileSidebar: o,
          } = e,
          [c, d] = (0, i.useState)('saved'),
          { fetchInboxIssueById: u, getIssueInboxByIssueId: x } = (0, p.wN)(),
          m = x(a),
          {
            membership: { currentProjectRole: h },
          } = (0, p.aF)();
        (0, n.ZP)(
          s && t && a
            ? 'PROJECT_INBOX_ISSUE_DETAIL_'
                .concat(s, '_')
                .concat(t, '_')
                .concat(a)
            : null,
          s && t && a ? () => u(s, t, a) : null,
          { revalidateOnFocus: !1, revalidateIfStale: !1 }
        );
        let v = !!h && h >= eY.MC.MEMBER;
        if (!m) return (0, l.jsx)(l.Fragment, {});
        let j = [-1, 1, 2].includes(m.status);
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsxs)('div', {
            className: 'w-full h-full overflow-hidden relative flex flex-col',
            children: [
              (0, l.jsx)('div', {
                className:
                  'flex-shrink-0 min-h-[50px] border-b border-custom-border-300',
                children: (0, l.jsx)(eG, {
                  setIsMobileSidebar: o,
                  isMobileSidebar: r,
                  workspaceSlug: s,
                  projectId: t,
                  inboxIssue: m,
                  isSubmitting: c,
                }),
              }),
              (0, l.jsx)('div', {
                className:
                  'h-full w-full space-y-5 divide-y-2 divide-custom-border-200 overflow-y-auto px-6 py-5 vertical-scrollbar scrollbar-md',
                children: (0, l.jsx)(e4, {
                  workspaceSlug: s,
                  projectId: t,
                  inboxIssue: m,
                  isEditable: v && !j,
                  isSubmitting: c,
                  setIsSubmitting: d,
                }),
              }),
            ],
          }),
        });
      });
      var eV = t(18927),
        eU = t(3515),
        eW = t(37969);
      /**
       * @license lucide-react v0.378.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let eK = (0, o.Z)('FileStack', [
        ['path', { d: 'M21 7h-3a2 2 0 0 1-2-2V2', key: '9rb54x' }],
        [
          'path',
          {
            d: 'M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z',
            key: '1059l0',
          },
        ],
        ['path', { d: 'M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15', key: '16874u' }],
        ['path', { d: 'M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11', key: 'k2ox98' }],
      ]);
      var eX = t(54129),
        eH = t(10712);
      let eG = (0, a.Pi)(e => {
          var s, t, a;
          let {
              workspaceSlug: n,
              projectId: r,
              inboxIssue: o,
              isSubmitting: c,
              isMobileSidebar: d,
              setIsMobileSidebar: u,
            } = e,
            [x, m] = (0, i.useState)(!1),
            [h, v] = (0, i.useState)(!1),
            [b, y] = (0, i.useState)(!1),
            [N, w] = (0, i.useState)(!1),
            [_, k] = (0, i.useState)(!1),
            {
              currentTab: C,
              deleteInboxIssue: I,
              inboxIssuesArray: A,
            } = (0, p.wN)(),
            {
              currentUser: S,
              membership: { currentProjectRole: P },
            } = (0, p.aF)(),
            D = (0, f.useRouter)(),
            { getProjectById: E } = (0, p.PY)(),
            M = null == o ? void 0 : o.issue,
            z = !!P && P >= eY.MC.MEMBER,
            B =
              z &&
              ((null == o ? void 0 : o.status) === 0 ||
                (null == o ? void 0 : o.status) === -2),
            Z =
              z &&
              ((null == o ? void 0 : o.status) === 0 ||
                (null == o ? void 0 : o.status) === -2),
            T =
              z &&
              ((null == o ? void 0 : o.status) === 0 ||
                (null == o ? void 0 : o.status) === -2),
            L =
              z ||
              (null == o ? void 0 : o.created_by) ===
                (null == S ? void 0 : S.id),
            q = (null == o ? void 0 : o.status)
              ? [-1, 1, 2].includes(o.status)
              : void 0,
            W =
              null == o
                ? void 0
                : null === (s = o.issue) || void 0 === s
                  ? void 0
                  : s.id,
            K = ''
              .concat(n, '/projects/')
              .concat(null == M ? void 0 : M.project_id, '/issues/')
              .concat(W),
            X = () => {
              let e = A.findIndex(e => e.issue.id === W);
              return A[e + 1]
                ? A[e + 1].issue.id
                : A[e - 1]
                  ? A[e - 1].issue.id
                  : void 0;
            },
            H = e => {
              e
                ? D.push(
                    '/'
                      .concat(n, '/projects/')
                      .concat(r, '/inbox?currentTab=')
                      .concat(C, '&inboxIssueId=')
                      .concat(e)
                  )
                : D.push(
                    '/'
                      .concat(n, '/projects/')
                      .concat(r, '/inbox?currentTab=')
                      .concat(C)
                  );
            },
            G = async () => {
              let e = X();
              await (null == o
                ? void 0
                : o.updateInboxIssueStatus(U.hA.ACCEPTED)),
                y(!1),
                H(e);
            },
            Q = async () => {
              let e = X();
              await (null == o
                ? void 0
                : o.updateInboxIssueStatus(U.hA.DECLINED)),
                w(!1),
                H(e);
            },
            J = async e => {
              let s = X();
              await (null == o ? void 0 : o.updateInboxIssueSnoozeTill(e)),
                m(!1),
                H(s);
            },
            $ = async e => {
              await (null == o ? void 0 : o.updateInboxIssueDuplicateTo(e));
            },
            ee = async () => {
              o &&
                W &&
                (await I(n, r, W).finally(() => {
                  D.push('/'.concat(n, '/projects/').concat(r, '/inbox'));
                }));
            },
            es = () =>
              (0, eH.fQ)(K).then(() =>
                (0, g.fz)({
                  type: g.do.SUCCESS,
                  title: 'Link copied',
                  message: 'Issue link copied to clipboard',
                })
              ),
            et =
              null !== (a = A.findIndex(e => e.issue.id === W)) && void 0 !== a
                ? a
                : 0,
            el = (0, i.useCallback)(
              e => {
                if (!A || !W) return;
                let s = document.activeElement;
                if (
                  s &&
                  (s.classList.contains('tiptap') || 'title-input' === s.id)
                )
                  return;
                let t =
                    'next' === e
                      ? (et + 1) % A.length
                      : (et - 1 + A.length) % A.length,
                  l = A[t].issue.id;
                l &&
                  D.push(
                    '/'
                      .concat(n, '/projects/')
                      .concat(r, '/inbox?inboxIssueId=')
                      .concat(l)
                  );
              },
              [W, et, A, r, D, n]
            ),
            ei = (0, i.useCallback)(
              e => {
                'ArrowUp' === e.key
                  ? el('prev')
                  : 'ArrowDown' === e.key && el('next');
              },
              [el]
            );
          return ((0, i.useEffect)(
            () => (
              document.addEventListener('keydown', ei),
              () => {
                document.removeEventListener('keydown', ei);
              }
            ),
            [ei]
          ),
          o)
            ? (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsx)(Y, {
                        isOpen: h,
                        onClose: () => v(!1),
                        value: null == o ? void 0 : o.duplicate_to,
                        onSubmit: $,
                      }),
                      (0, l.jsx)(j, {
                        workspaceSlug: n.toString(),
                        projectId: r.toString(),
                        modalState: b,
                        handleModalClose: () => y(!1),
                        issue: null == o ? void 0 : o.issue,
                        onSubmit: G,
                      }),
                      (0, l.jsx)(O, {
                        data: (null == o ? void 0 : o.issue) || {},
                        isOpen: N,
                        onClose: () => w(!1),
                        onSubmit: Q,
                      }),
                      (0, l.jsx)(R, {
                        data: null == o ? void 0 : o.issue,
                        isOpen: _,
                        onClose: () => k(!1),
                        onSubmit: ee,
                      }),
                      (0, l.jsx)(V, {
                        isOpen: x,
                        handleClose: () => m(!1),
                        value: null == o ? void 0 : o.snoozed_till,
                        onConfirm: J,
                      }),
                    ],
                  }),
                  (0, l.jsxs)('div', {
                    className:
                      'hidden relative lg:flex h-full w-full items-center justify-between gap-2 px-4',
                    children: [
                      (0, l.jsxs)('div', {
                        className: 'flex items-center gap-4',
                        children: [
                          (null == M ? void 0 : M.project_id) &&
                            M.sequence_id &&
                            (0, l.jsxs)('h3', {
                              className:
                                'text-base font-medium text-custom-text-300 flex-shrink-0',
                              children: [
                                null === (t = E(M.project_id)) || void 0 === t
                                  ? void 0
                                  : t.identifier,
                                '-',
                                M.sequence_id,
                              ],
                            }),
                          (0, l.jsx)(e5, { inboxIssue: o, iconSize: 12 }),
                          (0, l.jsx)('div', {
                            className: 'flex items-center justify-end w-full',
                            children: (0, l.jsx)(F.y2U, { isSubmitting: c }),
                          }),
                        ],
                      }),
                      (0, l.jsxs)('div', {
                        className: 'flex items-center gap-2',
                        children: [
                          (0, l.jsxs)('div', {
                            className: 'flex items-center gap-x-2',
                            children: [
                              (0, l.jsx)('button', {
                                type: 'button',
                                className:
                                  'rounded border border-custom-border-200 p-1.5',
                                onClick: () => el('prev'),
                                children: (0, l.jsx)(eV.Z, {
                                  size: 14,
                                  strokeWidth: 2,
                                }),
                              }),
                              (0, l.jsx)('button', {
                                type: 'button',
                                className:
                                  'rounded border border-custom-border-200 p-1.5',
                                onClick: () => el('next'),
                                children: (0, l.jsx)(eF.Z, {
                                  size: 14,
                                  strokeWidth: 2,
                                }),
                              }),
                            ],
                          }),
                          (0, l.jsxs)('div', {
                            className: 'flex flex-wrap items-center gap-2',
                            children: [
                              Z &&
                                (0, l.jsx)('div', {
                                  className: 'flex-shrink-0',
                                  children: (0, l.jsx)(g.zx, {
                                    variant: 'neutral-primary',
                                    size: 'sm',
                                    prependIcon: (0, l.jsx)(eo.Z, {
                                      className: 'w-3 h-3',
                                    }),
                                    className:
                                      'text-green-500 border-0.5 border-green-500 bg-green-500/20 focus:bg-green-500/20 focus:text-green-500 hover:bg-green-500/40 bg-opacity-20',
                                    onClick: () => y(!0),
                                    children: 'Accept',
                                  }),
                                }),
                              T &&
                                (0, l.jsx)('div', {
                                  className: 'flex-shrink-0',
                                  children: (0, l.jsx)(g.zx, {
                                    variant: 'neutral-primary',
                                    size: 'sm',
                                    prependIcon: (0, l.jsx)(en.Z, {
                                      className: 'w-3 h-3',
                                    }),
                                    className:
                                      'text-red-500 border-0.5 border-red-500 bg-red-500/20 focus:bg-red-500/20 focus:text-red-500 hover:bg-red-500/40 bg-opacity-20',
                                    onClick: () => w(!0),
                                    children: 'Decline',
                                  }),
                                }),
                              q
                                ? (0, l.jsxs)('div', {
                                    className: 'flex items-center gap-2',
                                    children: [
                                      (0, l.jsx)(g.zx, {
                                        variant: 'neutral-primary',
                                        prependIcon: (0, l.jsx)(eU.Z, {
                                          className: 'h-2.5 w-2.5',
                                        }),
                                        size: 'sm',
                                        onClick: es,
                                        children: 'Copy issue link',
                                      }),
                                      (0, l.jsx)(g.Ug, {
                                        href: '/'
                                          .concat(n, '/projects/')
                                          .concat(
                                            null == M ? void 0 : M.project_id,
                                            '/issues/'
                                          )
                                          .concat(W),
                                        onClick: () =>
                                          D.push(
                                            '/'
                                              .concat(n, '/projects/')
                                              .concat(
                                                null == M
                                                  ? void 0
                                                  : M.project_id,
                                                '/issues/'
                                              )
                                              .concat(W)
                                          ),
                                        children: (0, l.jsx)(g.zx, {
                                          variant: 'neutral-primary',
                                          prependIcon: (0, l.jsx)(eW.Z, {
                                            className: 'h-2.5 w-2.5',
                                          }),
                                          size: 'sm',
                                          children: 'Open issue',
                                        }),
                                      }),
                                    ],
                                  })
                                : (0, l.jsx)(l.Fragment, {
                                    children:
                                      z &&
                                      (0, l.jsxs)(g.fR, {
                                        verticalEllipsis: !0,
                                        placement: 'bottom-start',
                                        children: [
                                          Z &&
                                            (0, l.jsx)(g.fR.MenuItem, {
                                              onClick: () => m(!0),
                                              children: (0, l.jsxs)('div', {
                                                className:
                                                  'flex items-center gap-2',
                                                children: [
                                                  (0, l.jsx)(er.Z, {
                                                    size: 14,
                                                    strokeWidth: 2,
                                                  }),
                                                  'Snooze',
                                                ],
                                              }),
                                            }),
                                          B &&
                                            (0, l.jsx)(g.fR.MenuItem, {
                                              onClick: () => v(!0),
                                              children: (0, l.jsxs)('div', {
                                                className:
                                                  'flex items-center gap-2',
                                                children: [
                                                  (0, l.jsx)(eK, {
                                                    size: 14,
                                                    strokeWidth: 2,
                                                  }),
                                                  'Mark as duplicate',
                                                ],
                                              }),
                                            }),
                                          L &&
                                            (0, l.jsx)(g.fR.MenuItem, {
                                              onClick: () => k(!0),
                                              children: (0, l.jsxs)('div', {
                                                className:
                                                  'flex items-center gap-2',
                                                children: [
                                                  (0, l.jsx)(eX.Z, {
                                                    size: 14,
                                                    strokeWidth: 2,
                                                  }),
                                                  'Delete',
                                                ],
                                              }),
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
                  (0, l.jsx)('div', {
                    className: 'lg:hidden',
                    children: (0, l.jsx)(eQ, {
                      inboxIssue: o,
                      isSubmitting: c,
                      handleCopyIssueLink: es,
                      setAcceptIssueModal: y,
                      setDeclineIssueModal: w,
                      setIsSnoozeDateModalOpen: m,
                      setSelectDuplicateIssue: v,
                      setDeleteIssueModal: k,
                      canMarkAsAccepted: Z,
                      canMarkAsDeclined: T,
                      canMarkAsDuplicate: B,
                      canDelete: L,
                      isAcceptedOrDeclined: q,
                      handleInboxIssueNavigation: el,
                      workspaceSlug: n,
                      isMobileSidebar: d,
                      setIsMobileSidebar: u,
                    }),
                  }),
                ],
              })
            : null;
        }),
        eQ = (0, a.Pi)(e => {
          let {
              inboxIssue: s,
              isSubmitting: t,
              handleInboxIssueNavigation: i,
              canMarkAsAccepted: a,
              canMarkAsDeclined: n,
              canDelete: r,
              canMarkAsDuplicate: o,
              isAcceptedOrDeclined: d,
              workspaceSlug: u,
              setAcceptIssueModal: x,
              setDeclineIssueModal: p,
              setDeleteIssueModal: h,
              setIsSnoozeDateModalOpen: v,
              setSelectDuplicateIssue: j,
              handleCopyIssueLink: b,
              isMobileSidebar: y,
              setIsMobileSidebar: N,
            } = e,
            w = (0, f.useRouter)(),
            _ = null == s ? void 0 : s.issue,
            k = null == _ ? void 0 : _.id;
          return _ && s
            ? (0, l.jsxs)('div', {
                className:
                  'h-12 relative flex border-custom-border-200 w-full items-center gap-2 px-4',
                children: [
                  (0, l.jsx)(c, {
                    onClick: () => N(!y),
                    className: (0, m.cn)(
                      'w-4 h-4 flex-shrink-0 mr-2',
                      y ? 'text-custom-primary-100' : 'text-custom-text-200'
                    ),
                  }),
                  (0, l.jsxs)('div', {
                    className: 'flex items-center gap-2 w-full',
                    children: [
                      (0, l.jsxs)('div', {
                        className: 'flex items-center gap-x-2',
                        children: [
                          (0, l.jsx)('button', {
                            type: 'button',
                            className:
                              'rounded border border-custom-border-200 p-1.5',
                            onClick: () => i('prev'),
                            children: (0, l.jsx)(eV.Z, {
                              size: 14,
                              strokeWidth: 2,
                            }),
                          }),
                          (0, l.jsx)('button', {
                            type: 'button',
                            className:
                              'rounded border border-custom-border-200 p-1.5',
                            onClick: () => i('next'),
                            children: (0, l.jsx)(eF.Z, {
                              size: 14,
                              strokeWidth: 2,
                            }),
                          }),
                        ],
                      }),
                      (0, l.jsxs)('div', {
                        className: 'flex items-center gap-4',
                        children: [
                          (0, l.jsx)(e5, { inboxIssue: s, iconSize: 12 }),
                          (0, l.jsx)('div', {
                            className: 'flex items-center justify-end w-full',
                            children: (0, l.jsx)(F.y2U, { isSubmitting: t }),
                          }),
                        ],
                      }),
                      (0, l.jsx)('div', {
                        className: 'ml-auto',
                        children: (0, l.jsxs)(g.fR, {
                          verticalEllipsis: !0,
                          placement: 'bottom-start',
                          children: [
                            d &&
                              (0, l.jsx)(g.fR.MenuItem, {
                                onClick: b,
                                children: (0, l.jsxs)('div', {
                                  className: 'flex items-center gap-2',
                                  children: [
                                    (0, l.jsx)(eU.Z, {
                                      size: 14,
                                      strokeWidth: 2,
                                    }),
                                    'Copy issue link',
                                  ],
                                }),
                              }),
                            d &&
                              (0, l.jsx)(g.fR.MenuItem, {
                                onClick: () =>
                                  w.push(
                                    '/'
                                      .concat(u, '/projects/')
                                      .concat(
                                        null == _ ? void 0 : _.project_id,
                                        '/issues/'
                                      )
                                      .concat(k)
                                  ),
                                children: (0, l.jsxs)('div', {
                                  className: 'flex items-center gap-2',
                                  children: [
                                    (0, l.jsx)(eW.Z, {
                                      size: 14,
                                      strokeWidth: 2,
                                    }),
                                    'Open issue',
                                  ],
                                }),
                              }),
                            a &&
                              !d &&
                              (0, l.jsx)(g.fR.MenuItem, {
                                onClick: () => v(!0),
                                children: (0, l.jsxs)('div', {
                                  className: 'flex items-center gap-2',
                                  children: [
                                    (0, l.jsx)(er.Z, {
                                      size: 14,
                                      strokeWidth: 2,
                                    }),
                                    'Snooze',
                                  ],
                                }),
                              }),
                            o &&
                              !d &&
                              (0, l.jsx)(g.fR.MenuItem, {
                                onClick: () => j(!0),
                                children: (0, l.jsxs)('div', {
                                  className: 'flex items-center gap-2',
                                  children: [
                                    (0, l.jsx)(eK, {
                                      size: 14,
                                      strokeWidth: 2,
                                    }),
                                    'Mark as duplicate',
                                  ],
                                }),
                              }),
                            a &&
                              (0, l.jsx)(g.fR.MenuItem, {
                                onClick: () => x(!0),
                                children: (0, l.jsxs)('div', {
                                  className:
                                    'flex items-center gap-2 text-green-500',
                                  children: [
                                    (0, l.jsx)(eo.Z, {
                                      size: 14,
                                      strokeWidth: 2,
                                    }),
                                    'Accept',
                                  ],
                                }),
                              }),
                            n &&
                              (0, l.jsx)(g.fR.MenuItem, {
                                onClick: () => p(!0),
                                children: (0, l.jsxs)('div', {
                                  className:
                                    'flex items-center gap-2 text-red-500',
                                  children: [
                                    (0, l.jsx)(en.Z, {
                                      size: 14,
                                      strokeWidth: 2,
                                    }),
                                    'Decline',
                                  ],
                                }),
                              }),
                            r &&
                              !d &&
                              (0, l.jsx)(g.fR.MenuItem, {
                                onClick: () => h(!0),
                                children: (0, l.jsxs)('div', {
                                  className:
                                    'flex items-center gap-2 text-red-500',
                                  children: [
                                    (0, l.jsx)(eX.Z, {
                                      size: 14,
                                      strokeWidth: 2,
                                    }),
                                    'Delete',
                                  ],
                                }),
                              }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              })
            : null;
        });
      var eJ = t(49743),
        e$ = t(21219),
        e0 = t(77970),
        e2 = t(14820);
      let e1 = (0, a.Pi)(e => {
        var s, t, i, a, n, r;
        let {
            workspaceSlug: o,
            projectId: c,
            issue: d,
            issueOperations: u,
            isEditable: x,
            duplicateIssueDetails: m,
          } = e,
          h = (0, f.useRouter)(),
          { currentProjectDetails: v } = (0, p.PY)(),
          j = d.start_date ? (0, y._3)(d.start_date) : null;
        return (null == j || j.setDate(j.getDate()),
        d && (null == d ? void 0 : d.id))
          ? (0, l.jsx)('div', {
              className:
                'flex h-min w-full flex-col divide-y-2 divide-custom-border-200 overflow-hidden',
              children: (0, l.jsxs)('div', {
                className: 'h-min w-full overflow-y-auto px-3',
                children: [
                  (0, l.jsx)('h5', {
                    className: 'text-sm font-medium my-4',
                    children: 'Properties',
                  }),
                  (0, l.jsx)('div', {
                    className: 'divide-y-2 divide-custom-border-200 '.concat(
                      x ? '' : 'opacity-60'
                    ),
                    children: (0, l.jsxs)('div', {
                      className: 'flex flex-col gap-3',
                      children: [
                        (0, l.jsxs)('div', {
                          className: 'flex items-center gap-2 h-8',
                          children: [
                            (0, l.jsxs)('div', {
                              className:
                                'flex items-center gap-1 w-2/5 flex-shrink-0 text-sm text-custom-text-300',
                              children: [
                                (0, l.jsx)(g.go, {
                                  className: 'h-4 w-4 flex-shrink-0',
                                }),
                                (0, l.jsx)('span', { children: 'State' }),
                              ],
                            }),
                            (null == d ? void 0 : d.state_id) &&
                              (0, l.jsx)(P.sb, {
                                value: null == d ? void 0 : d.state_id,
                                onChange: e =>
                                  (null == d ? void 0 : d.id) &&
                                  u.update(o, c, null == d ? void 0 : d.id, {
                                    state_id: e,
                                  }),
                                projectId:
                                  null !==
                                    (a = null == c ? void 0 : c.toString()) &&
                                  void 0 !== a
                                    ? a
                                    : '',
                                disabled: !x,
                                buttonVariant: 'transparent-with-text',
                                className: 'w-3/5 flex-grow group',
                                buttonContainerClassName: 'w-full text-left',
                                buttonClassName: 'text-sm',
                                dropdownArrow: !0,
                                dropdownArrowClassName:
                                  'h-3.5 w-3.5 hidden group-hover:inline',
                              }),
                          ],
                        }),
                        (0, l.jsxs)('div', {
                          className: 'flex items-center gap-2 h-8',
                          children: [
                            (0, l.jsxs)('div', {
                              className:
                                'flex items-center gap-1 w-2/5 flex-shrink-0 text-sm text-custom-text-300',
                              children: [
                                (0, l.jsx)(g.Ti, {
                                  className: 'h-4 w-4 flex-shrink-0',
                                }),
                                (0, l.jsx)('span', { children: 'Assignees' }),
                              ],
                            }),
                            (0, l.jsx)(P.Yp, {
                              value:
                                null !==
                                  (n = null == d ? void 0 : d.assignee_ids) &&
                                void 0 !== n
                                  ? n
                                  : [],
                              onChange: e =>
                                (null == d ? void 0 : d.id) &&
                                u.update(o, c, null == d ? void 0 : d.id, {
                                  assignee_ids: e,
                                }),
                              disabled: !x,
                              projectId:
                                null !==
                                  (r = null == c ? void 0 : c.toString()) &&
                                void 0 !== r
                                  ? r
                                  : '',
                              placeholder: 'Add assignees',
                              multiple: !0,
                              buttonVariant:
                                (null ===
                                  (s =
                                    (null == d ? void 0 : d.assignee_ids) ||
                                    []) || void 0 === s
                                  ? void 0
                                  : s.length) > 0
                                  ? 'transparent-without-text'
                                  : 'transparent-with-text',
                              className: 'w-3/5 flex-grow group',
                              buttonContainerClassName: 'w-full text-left',
                              buttonClassName:
                                'text-sm justify-between '.concat(
                                  (null ===
                                    (t =
                                      (null == d ? void 0 : d.assignee_ids) ||
                                      []) || void 0 === t
                                    ? void 0
                                    : t.length) > 0
                                    ? ''
                                    : 'text-custom-text-400'
                                ),
                              hideIcon:
                                (null === (i = d.assignee_ids) || void 0 === i
                                  ? void 0
                                  : i.length) === 0,
                              dropdownArrow: !0,
                              dropdownArrowClassName:
                                'h-3.5 w-3.5 hidden group-hover:inline',
                            }),
                          ],
                        }),
                        (0, l.jsxs)('div', {
                          className: 'flex items-center gap-2 h-8',
                          children: [
                            (0, l.jsxs)('div', {
                              className:
                                'flex items-center gap-1 w-2/5 flex-shrink-0 text-sm text-custom-text-300',
                              children: [
                                (0, l.jsx)(eJ.Z, {
                                  className: 'h-4 w-4 flex-shrink-0',
                                }),
                                (0, l.jsx)('span', { children: 'Priority' }),
                              ],
                            }),
                            (0, l.jsx)(P.Iw, {
                              value:
                                (null == d ? void 0 : d.priority) || 'none',
                              onChange: e =>
                                (null == d ? void 0 : d.id) &&
                                u.update(o, c, null == d ? void 0 : d.id, {
                                  priority: e,
                                }),
                              disabled: !x,
                              buttonVariant: 'border-with-text',
                              className:
                                'w-3/5 flex-grow rounded px-2 hover:bg-custom-background-80',
                              buttonContainerClassName: 'w-full text-left',
                              buttonClassName: 'w-min h-auto whitespace-nowrap',
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, l.jsx)('div', {
                    className:
                      'divide-y-2 divide-custom-border-200 mt-3 '.concat(
                        x ? '' : 'opacity-60'
                      ),
                    children: (0, l.jsxs)('div', {
                      className: 'flex flex-col gap-3',
                      children: [
                        (0, l.jsxs)('div', {
                          className: 'flex items-center gap-2 h-8',
                          children: [
                            (0, l.jsxs)('div', {
                              className:
                                'flex items-center gap-1 w-2/5 flex-shrink-0 text-sm text-custom-text-300',
                              children: [
                                (0, l.jsx)(e$.Z, {
                                  className: 'h-4 w-4 flex-shrink-0',
                                }),
                                (0, l.jsx)('span', { children: 'Due date' }),
                              ],
                            }),
                            (0, l.jsx)(P.qp, {
                              placeholder: 'Add due date',
                              value: d.target_date || null,
                              onChange: e =>
                                (null == d ? void 0 : d.id) &&
                                u.update(o, c, null == d ? void 0 : d.id, {
                                  target_date: e ? (0, y.ss)(e) : null,
                                }),
                              minDate: null != j ? j : void 0,
                              disabled: !x,
                              buttonVariant: 'transparent-with-text',
                              className: 'w-3/5 flex-grow group',
                              buttonContainerClassName: 'w-full text-left',
                              buttonClassName: 'text-sm '.concat(
                                (null == d ? void 0 : d.target_date)
                                  ? ''
                                  : 'text-custom-text-400'
                              ),
                              hideIcon: !0,
                              clearIconClassName:
                                'h-3 w-3 hidden group-hover:inline',
                            }),
                          ],
                        }),
                        (0, l.jsxs)('div', {
                          className: 'flex items-center gap-2 min-h-8',
                          children: [
                            (0, l.jsxs)('div', {
                              className:
                                'flex items-center gap-1 w-2/5 flex-shrink-0 text-sm text-custom-text-300',
                              children: [
                                (0, l.jsx)(e0.Z, {
                                  className: 'h-4 w-4 flex-shrink-0',
                                }),
                                (0, l.jsx)('span', { children: 'Labels' }),
                              ],
                            }),
                            (0, l.jsx)('div', {
                              className: 'w-3/5 flex-grow min-h-8 h-full pt-1',
                              children:
                                (null == d ? void 0 : d.id) &&
                                (0, l.jsx)(F.WK7, {
                                  workspaceSlug: o,
                                  projectId: c,
                                  issueId: null == d ? void 0 : d.id,
                                  disabled: !x,
                                  isInboxIssue: !0,
                                  onLabelUpdate: e =>
                                    (null == d ? void 0 : d.id) &&
                                    u.update(o, c, null == d ? void 0 : d.id, {
                                      label_ids: e,
                                    }),
                                }),
                            }),
                          ],
                        }),
                        m &&
                          (0, l.jsxs)('div', {
                            className: 'flex min-h-8 gap-2',
                            children: [
                              (0, l.jsxs)('div', {
                                className:
                                  'flex w-2/5 flex-shrink-0 gap-1 pt-2 text-sm text-custom-text-300',
                                children: [
                                  (0, l.jsx)(e2.Z, {
                                    className: 'h-4 w-4 flex-shrink-0',
                                  }),
                                  (0, l.jsx)('span', {
                                    children: 'Duplicate of',
                                  }),
                                ],
                              }),
                              (0, l.jsx)(g.Ug, {
                                href: '/'
                                  .concat(o, '/projects/')
                                  .concat(c, '/issues/')
                                  .concat(null == m ? void 0 : m.id),
                                onClick: () => {
                                  h.push(
                                    '/'
                                      .concat(o, '/projects/')
                                      .concat(c, '/issues/')
                                      .concat(null == m ? void 0 : m.id)
                                  );
                                },
                                children: (0, l.jsx)(g.u, {
                                  tooltipContent: ''.concat(
                                    null == m ? void 0 : m.name
                                  ),
                                  children: (0, l.jsx)('span', {
                                    className:
                                      'flex items-center gap-1 cursor-pointer text-xs rounded px-1.5 py-1 pb-0.5 bg-custom-background-80 text-custom-text-200',
                                    children: ''
                                      .concat(
                                        null == v ? void 0 : v.identifier,
                                        '-'
                                      )
                                      .concat(
                                        null == m ? void 0 : m.sequence_id
                                      ),
                                  }),
                                }),
                              }),
                            ],
                          }),
                      ],
                    }),
                  }),
                ],
              }),
            })
          : (0, l.jsx)(l.Fragment, {});
      });
      var e3 = t(83114);
      let e4 = (0, a.Pi)(e => {
          var s, t;
          let a = (0, f.useRouter)(),
            {
              workspaceSlug: n,
              projectId: r,
              inboxIssue: o,
              isEditable: c,
              isSubmitting: d,
              setIsSubmitting: u,
            } = e,
            { currentUser: x } = (0, p.aF)(),
            { setShowAlert: m } = (0, e3.Z)('submitting' === d),
            { captureIssueEvent: h } = (0, p.DN)(),
            { loader: v } = (0, p.wN)();
          (0, i.useEffect)(() => {
            'submitted' === d
              ? (m(!1),
                setTimeout(async () => {
                  u('saved');
                }, 3e3))
              : 'submitting' === d && m(!0);
          }, [d, m, u]);
          let j = o.issue;
          if (!j) return (0, l.jsx)(l.Fragment, {});
          let b = (0, i.useMemo)(
            () => ({
              fetch: async (e, s, t) => {
                try {
                  return;
                } catch (e) {
                  (0, g.fz)({
                    title: 'Issue fetch failed',
                    type: g.do.ERROR,
                    message: 'Issue fetch failed',
                  });
                }
              },
              remove: async (e, s, t) => {
                try {
                  return;
                } catch (e) {
                  (0, g.fz)({
                    title: 'Issue remove failed',
                    type: g.do.ERROR,
                    message: 'Issue remove failed',
                  });
                }
              },
              update: async (e, s, t, l) => {
                try {
                  await o.updateIssue(l),
                    h({
                      eventName: 'Inbox issue updated',
                      payload: { ...l, state: 'SUCCESS', element: 'Inbox' },
                      updates: {
                        changed_property: Object.keys(l).join(','),
                        change_details: Object.values(l).join(','),
                      },
                      path: a.asPath,
                    });
                } catch (e) {
                  (0, g.fz)({
                    title: 'Issue update failed',
                    type: g.do.ERROR,
                    message: 'Issue update failed',
                  }),
                    h({
                      eventName: 'Inbox issue updated',
                      payload: { state: 'SUCCESS', element: 'Inbox' },
                      updates: {
                        changed_property: Object.keys(l).join(','),
                        change_details: Object.values(l).join(','),
                      },
                      path: a.asPath,
                    });
                }
              },
            }),
            [o]
          );
          return (null == j ? void 0 : j.project_id) &&
            (null == j ? void 0 : j.id)
            ? (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsxs)('div', {
                    className: 'rounded-lg space-y-4 pl-3',
                    children: [
                      (0, l.jsx)(F.N6_, {
                        workspaceSlug: n,
                        projectId: j.project_id,
                        issueId: j.id,
                        isSubmitting: d,
                        setIsSubmitting: e => u(e),
                        issueOperations: b,
                        disabled: !c,
                        value: j.name,
                        containerClassName: '-ml-3',
                      }),
                      'issue-loading' === v
                        ? (0, l.jsx)(g.aN, {
                            className:
                              'min-h-[6rem] rounded-md border border-custom-border-200',
                            children: (0, l.jsx)(g.aN.Item, {
                              width: '100%',
                              height: '140px',
                            }),
                          })
                        : (0, l.jsx)(F.ji, {
                            workspaceSlug: n,
                            projectId: j.project_id,
                            issueId: j.id,
                            swrIssueDescription:
                              null !== (s = j.description_html) && void 0 !== s
                                ? s
                                : '<p></p>',
                            initialValue:
                              null !== (t = j.description_html) && void 0 !== t
                                ? t
                                : '<p></p>',
                            disabled: !c,
                            issueOperations: b,
                            setIsSubmitting: e => u(e),
                            containerClassName: '-ml-3 !mb-6 border-none',
                          }),
                      x &&
                        (0, l.jsx)(F.Joz, {
                          workspaceSlug: n,
                          projectId: r,
                          issueId: j.id,
                          currentUser: x,
                        }),
                    ],
                  }),
                  (0, l.jsx)('div', {
                    className: 'pl-3',
                    children: (0, l.jsx)(F.qRX, {
                      workspaceSlug: n,
                      projectId: r,
                      issueId: j.id,
                      disabled: !c,
                    }),
                  }),
                  (0, l.jsx)(e1, {
                    workspaceSlug: n,
                    projectId: r,
                    issue: j,
                    issueOperations: b,
                    isEditable: c,
                    duplicateIssueDetails:
                      null == o ? void 0 : o.duplicate_issue_detail,
                  }),
                  (0, l.jsx)('div', {
                    className: 'pb-12 pl-3',
                    children: (0, l.jsx)(F.J3d, {
                      workspaceSlug: n,
                      projectId: r,
                      issueId: j.id,
                    }),
                  }),
                ],
              })
            : (0, l.jsx)(l.Fragment, {});
        }),
        e5 = (0, a.Pi)(e => {
          var s, t;
          let { inboxIssue: i, iconSize: a = 16, showDescription: n = !1 } = e,
            r = ed.find(e => e.status === i.status);
          if (!r) return (0, l.jsx)(l.Fragment, {});
          let o =
              0 === i.status &&
              new Date(null !== (s = i.snoozed_till) && void 0 !== s ? s : '') <
                new Date(),
            c = r.description(
              new Date(null !== (t = i.snoozed_till) && void 0 !== t ? t : '')
            );
          return (0, l.jsxs)('div', {
            className: (0, m.cn)(
              'relative flex flex-col gap-1 p-1.5 py-0.5 rounded '
                .concat(r.textColor(o), ' ')
                .concat(r.bgColor(o))
            ),
            children: [
              (0, l.jsxs)('div', {
                className: 'flex items-center gap-1',
                children: [
                  (0, l.jsx)(r.icon, { size: a, className: 'flex-shrink-0' }),
                  (0, l.jsx)('div', {
                    className: 'font-medium text-xs whitespace-nowrap',
                    children:
                      (null == i ? void 0 : i.status) === 0 &&
                      (null == i ? void 0 : i.snoozed_till)
                        ? r.description(null == i ? void 0 : i.snoozed_till)
                        : r.title,
                  }),
                ],
              }),
              n &&
                (0, l.jsx)('div', {
                  className: 'text-sm whitespace-nowrap',
                  children: c,
                }),
            ],
          });
        });
    },
    45693: function (e, s, t) {
      t.d(s, {
        Br: function () {
          return l;
        },
        Gs: function () {
          return a;
        },
        Mk: function () {
          return n;
        },
        XM: function () {
          return i;
        },
      });
      let l = [
          { key: 'scope_and_demand', title: 'Scope and Demand' },
          { key: 'custom', title: 'Custom Analytics' },
        ],
        i = [
          { value: 'state_id', label: 'State name' },
          { value: 'state__group', label: 'State group' },
          { value: 'priority', label: 'Priority' },
          { value: 'labels__id', label: 'Label' },
          { value: 'assignees__id', label: 'Assignee' },
          { value: 'estimate_point', label: 'Estimate point' },
          { value: 'issue_cycle__cycle_id', label: 'Cycle' },
          { value: 'issue_module__module_id', label: 'Module' },
          { value: 'completed_at', label: 'Completed date' },
          { value: 'target_date', label: 'Due date' },
          { value: 'start_date', label: 'Start date' },
          { value: 'created_at', label: 'Created date' },
        ],
        a = [
          { value: 'issue_count', label: 'Issue Count' },
          { value: 'estimate', label: 'Estimate' },
        ],
        n = ['completed_at', 'target_date', 'start_date', 'created_at'];
    },
    38313: function (e, s, t) {
      t.d(s, {
        em: function () {
          return a;
        },
        f9: function () {
          return r;
        },
        S2: function () {
          return n;
        },
      }),
        t(27378);
      var l = t(73471);
      /**
       * @license lucide-react v0.378.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let i = (0, l.Z)('CircleUser', [
          ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
          ['circle', { cx: '12', cy: '10', r: '3', key: 'ilqhr7' }],
          [
            'path',
            {
              d: 'M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662',
              key: '154egf',
            },
          ],
        ]),
        a = [
          {
            key: 'profile',
            label: 'Profile',
            href: '/profile',
            highlight: e => '/profile' === e,
            Icon: i,
          },
          {
            key: 'change-password',
            label: 'Change password',
            href: '/profile/change-password',
            highlight: e => '/profile/change-password' === e,
            Icon: (0, l.Z)('KeyRound', [
              [
                'path',
                {
                  d: 'M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z',
                  key: '167ctg',
                },
              ],
              [
                'circle',
                {
                  cx: '16.5',
                  cy: '7.5',
                  r: '.5',
                  fill: 'currentColor',
                  key: 'w0ekpg',
                },
              ],
            ]),
          },
          {
            key: 'activity',
            label: 'Activity',
            href: '/profile/activity',
            highlight: e => '/profile/activity' === e,
            Icon: (0, l.Z)('Activity', [
              [
                'path',
                {
                  d: 'M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2',
                  key: '169zse',
                },
              ],
            ]),
          },
          {
            key: 'preferences',
            label: 'Preferences',
            href: '/profile/preferences/theme',
            highlight: e => e.includes('/profile/preferences'),
            Icon: (0, l.Z)('Settings2', [
              ['path', { d: 'M20 7h-9', key: '3s1dr2' }],
              ['path', { d: 'M14 17H5', key: 'gfn3mx' }],
              ['circle', { cx: '17', cy: '17', r: '3', key: '18b49y' }],
              ['circle', { cx: '7', cy: '7', r: '3', key: 'dfmy0x' }],
            ]),
          },
        ],
        n = [
          {
            route: '',
            label: 'Summary',
            selected: '/[workspaceSlug]/profile/[userId]',
          },
        ],
        r = [
          {
            route: 'assigned',
            label: 'Assigned',
            selected: '/[workspaceSlug]/profile/[userId]/assigned',
          },
          {
            route: 'created',
            label: 'Created',
            selected: '/[workspaceSlug]/profile/[userId]/created',
          },
          {
            route: 'subscribed',
            label: 'Subscribed',
            selected: '/[workspaceSlug]/profile/[userId]/subscribed',
          },
          {
            route: 'activity',
            label: 'Activity',
            selected: '/[workspaceSlug]/profile/[userId]/activity',
          },
        ];
    },
    34067: function (e, s, t) {
      t.d(s, {
        L: function () {
          return p;
        },
      });
      var l = t(24246),
        i = t(43659),
        a = t(27320),
        n = t(21109),
        r = t(23194),
        o = t(27378),
        c = t(91256),
        d = t(86936),
        u = t(10634),
        x = t(42683);
      let m = (0, i.Pi)(() => {
          let { theme: e } = (0, u.IX)(),
            s = (0, o.useRef)(null);
          return (
            (0, x.Z)(s, () => {
              !1 === e.sidebarCollapsed &&
                window.innerWidth < 768 &&
                e.toggleSidebar();
            }),
            (0, l.jsx)('div', {
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
              children: (0, l.jsxs)('div', {
                ref: s,
                className: 'flex h-full w-full flex-1 flex-col',
                children: [
                  (0, l.jsx)(d.mG, {}),
                  (0, l.jsx)(d.rB, {}),
                  (0, l.jsx)(d.b8, {}),
                  (0, l.jsx)(c.Cl, {}),
                  (0, l.jsx)(d.N4, {}),
                ],
              }),
            })
          );
        }),
        p = (0, i.Pi)(e => {
          let {
            children: s,
            header: t,
            withProjectWrapper: i = !1,
            mobileHeader: o,
          } = e;
          return (0, l.jsx)(l.Fragment, {
            children: (0, l.jsxs)(r.bQ, {
              children: [
                (0, l.jsx)(a.f$, {}),
                (0, l.jsx)(r.Cr, {
                  children: (0, l.jsxs)('div', {
                    className: 'relative flex h-screen w-full overflow-hidden',
                    children: [
                      (0, l.jsx)(m, {}),
                      (0, l.jsxs)('main', {
                        className:
                          'relative flex h-full w-full flex-col overflow-hidden bg-custom-background-100',
                        children: [
                          (0, l.jsxs)('div', {
                            className: 'z-[15]',
                            children: [
                              (0, l.jsxs)('div', {
                                className:
                                  'flex items-center w-full border-b border-custom-border-200 z-10',
                                children: [
                                  (0, l.jsx)('div', {
                                    className:
                                      'pl-5 py-4  bg-custom-sidebar-background-100 block md:hidden',
                                    children: (0, l.jsx)(n.P, {}),
                                  }),
                                  (0, l.jsx)('div', {
                                    className: 'w-full',
                                    children: t,
                                  }),
                                ],
                              }),
                              o && o,
                            ],
                          }),
                          (0, l.jsx)('div', {
                            className: 'h-full w-full overflow-hidden',
                            children: (0, l.jsx)('div', {
                              className:
                                'relative h-full w-full overflow-x-hidden overflow-y-scroll',
                              children: i
                                ? (0, l.jsx)(r.nV, { children: s })
                                : (0, l.jsx)(l.Fragment, { children: s }),
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
  },
]);
