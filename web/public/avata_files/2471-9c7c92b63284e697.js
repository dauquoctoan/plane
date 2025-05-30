'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2471],
  {
    51731: function (e, t, s) {
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
       */ let a = (0, s(73471).Z)('CircleCheck', [
        ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
        ['path', { d: 'm9 12 2 2 4-4', key: 'dzmm74' }],
      ]);
    },
    82471: function (e, t, s) {
      s.d(t, {
        al: function () {
          return el;
        },
        uM: function () {
          return L;
        },
        Ez: function () {
          return Z;
        },
        ju: function () {
          return ej;
        },
        cQ: function () {
          return C;
        },
        ou: function () {
          return ek;
        },
        rk: function () {
          return h;
        },
        Y1: function () {
          return b;
        },
        xt: function () {
          return X;
        },
        j$: function () {
          return Y;
        },
      });
      var a = s(24246),
        r = s(27378),
        l = s(43659),
        n = s(38579),
        i = s.n(n),
        o = s(82558),
        c = s(25449),
        d = s(865),
        m = s(10634),
        u = {
          src: '/_next/static/media/white-horizontal.905c4adc.svg',
          height: 40,
          width: 178,
          blurWidth: 0,
          blurHeight: 0,
        };
      let x = [
          {
            key: 'issues',
            title: 'Plan with issues',
            description:
              'The issue is the building block of the Plane. Most concepts in Plane are either associated with issues and their properties.',
            image: {
              src: '/_next/static/media/issues.1c9c692b.webp',
              height: 736,
              width: 1288,
              blurDataURL:
                'data:image/webp;base64,UklGRoAAAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSCkAAAAAAAAQGRkZGRcAAKP/////8dvi9f/////x9/////////Hg5+fn5+fn2gBWUDggMAAAAJABAJ0BKggABQACQDglpAAC5pvbkAD+9nft/f5xvrD22HNfrhfCk86UjKvwAAAAAA==',
              blurWidth: 8,
              blurHeight: 5,
            },
            nextStep: 'cycles',
          },
          {
            key: 'cycles',
            title: 'Move with cycles',
            description:
              'Cycles help you and your team to progress faster, similar to the sprints commonly used in agile development.',
            image: {
              src: '/_next/static/media/cycles.cba07082.webp',
              height: 736,
              width: 1288,
              blurDataURL:
                'data:image/webp;base64,UklGRoIAAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSCkAAAAAGRkZEQAAAAD///+sAAAAAP///+zDw6gA////////3ADn5+fn5+fHAABWUDggMgAAAHABAJ0BKggABQACQDglpAACSr24AP7z/R7T/SWabzBaj91xLwbZ68tP2Xm0PSsKAAAA',
              blurWidth: 8,
              blurHeight: 5,
            },
            prevStep: 'issues',
            nextStep: 'modules',
          },
          {
            key: 'modules',
            title: 'Break into modules',
            description:
              'Modules break your big thing into Projects or Features, to help you organize better.',
            image: {
              src: '/_next/static/media/modules.57499b96.webp',
              height: 736,
              width: 1288,
              blurDataURL:
                'data:image/webp;base64,UklGRoIAAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSCkAAAAAAAAXJycnJyUkJaj/////8ff////////x9/////////Hg5+fn5+fn2gBWUDggMgAAALABAJ0BKggABQACQDglpAAC5uXgbQAA/vB+/wKssh/xBW6wijPy/BAmrR+2UfHfrwIA',
              blurWidth: 8,
              blurHeight: 5,
            },
            prevStep: 'cycles',
            nextStep: 'views',
          },
          {
            key: 'views',
            title: 'Views',
            description:
              'Create custom filters to display only the issues that matter to you. Save and share your filters in just a few clicks.',
            image: {
              src: '/_next/static/media/views.c1cc011a.webp',
              height: 736,
              width: 1288,
              blurDataURL:
                'data:image/webp;base64,UklGRogAAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSCkAAAAAJycnJxUAAAD/////sU9PAf////////8E/////////wTn5+fn5+fnBABWUDggOAAAALABAJ0BKggABQACQDglpAACnCiwTQAA/vY0f5X/Eh/v9vvRlqen9FdINlPR+7CT28FgaRhwEAAA',
              blurWidth: 8,
              blurHeight: 5,
            },
            prevStep: 'modules',
            nextStep: 'pages',
          },
          {
            key: 'pages',
            title: 'Document with pages',
            description:
              "Use Pages to quickly jot down issues when you're in a meeting or starting a day.",
            image: {
              src: '/_next/static/media/pages.4b0b5813.webp',
              height: 736,
              width: 1288,
              blurDataURL:
                'data:image/webp;base64,UklGRoAAAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSCkAAAAAAAAkPDw8PDhZWb//////8f/////////x//////////Hn5+fn5+fn2gBWUDggMAAAALABAJ0BKggABQACQDglpAAC5uXizgAA/vUk/zFFPOvzpUeSjPzZvm+2HVuPzwgAAA==',
              blurWidth: 8,
              blurHeight: 5,
            },
            prevStep: 'views',
          },
        ],
        h = (0, l.Pi)(e => {
          let { onComplete: t } = e,
            [s, l] = (0, r.useState)('welcome'),
            { commandPalette: n } = (0, m.IX)(),
            { setTrackElement: h, captureEvent: g } = (0, m.DN)(),
            { currentUser: p } = (0, m.aF)(),
            f = x.findIndex(e => e.key === s),
            A = x[f];
          return (0, a.jsx)(a.Fragment, {
            children:
              'welcome' === s
                ? (0, a.jsx)('div', {
                    className:
                      'h-3/4 w-4/5 overflow-hidden rounded-[10px] bg-custom-background-100 md:w-1/2 lg:w-2/5',
                    children: (0, a.jsxs)('div', {
                      className: 'h-full overflow-hidden',
                      children: [
                        (0, a.jsx)('div', {
                          className:
                            'grid h-3/5 place-items-center bg-custom-primary-100',
                          children: (0, a.jsx)(i(), {
                            src: u,
                            alt: 'Plane White Logo',
                          }),
                        }),
                        (0, a.jsxs)('div', {
                          className: 'flex h-2/5 flex-col overflow-y-auto p-6',
                          children: [
                            (0, a.jsxs)('h3', {
                              className: 'font-semibold sm:text-xl',
                              children: [
                                'Welcome to Plane, ',
                                null == p ? void 0 : p.first_name,
                                ' ',
                                null == p ? void 0 : p.last_name,
                              ],
                            }),
                            (0, a.jsxs)('p', {
                              className: 'mt-3 text-sm text-custom-text-200',
                              children: [
                                'We',
                                "'",
                                're glad that you decided to try out Plane. You can now manage your projects with ease. Get started by creating a project.',
                              ],
                            }),
                            (0, a.jsx)('div', {
                              className: 'flex h-full items-end',
                              children: (0, a.jsxs)('div', {
                                className: 'mt-8 flex items-center gap-6',
                                children: [
                                  (0, a.jsx)(c.zx, {
                                    variant: 'primary',
                                    onClick: () => {
                                      g(d.qF), l('issues');
                                    },
                                    children: 'Take a Product Tour',
                                  }),
                                  (0, a.jsx)('button', {
                                    type: 'button',
                                    className:
                                      'bg-transparent text-xs font-medium text-custom-primary-100 outline-custom-text-100',
                                    onClick: () => {
                                      g(d.sN), t();
                                    },
                                    children:
                                      'No thanks, I will explore it myself',
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  })
                : (0, a.jsxs)('div', {
                    className:
                      'relative grid h-3/5 w-4/5 grid-cols-10 overflow-hidden rounded-[10px] bg-custom-background-100 sm:h-3/4 md:w-1/2 lg:w-3/5',
                    children: [
                      (0, a.jsx)('button', {
                        type: 'button',
                        className:
                          'fixed right-[9%] top-[19%] z-10 -translate-y-1/2 translate-x-1/2 cursor-pointer rounded-full border border-custom-text-100 p-1 sm:top-[11.5%] md:right-[24%] lg:right-[19%]',
                        onClick: t,
                        children: (0, a.jsx)(o.Z, {
                          className: 'h-3 w-3 text-custom-text-100',
                        }),
                      }),
                      (0, a.jsx)(b, { step: s, setStep: l }),
                      (0, a.jsxs)('div', {
                        className:
                          'col-span-10 h-full overflow-hidden lg:col-span-7',
                        children: [
                          (0, a.jsx)('div', {
                            className:
                              'flex h-1/2 items-end overflow-hidden bg-custom-primary-100 sm:h-3/5 '.concat(
                                f % 2 == 0 ? 'justify-end' : 'justify-start'
                              ),
                            children: (0, a.jsx)(i(), {
                              src: null == A ? void 0 : A.image,
                              alt: null == A ? void 0 : A.title,
                            }),
                          }),
                          (0, a.jsxs)('div', {
                            className:
                              'flex h-1/2 flex-col overflow-y-auto p-4 sm:h-2/5',
                            children: [
                              (0, a.jsx)('h3', {
                                className: 'font-semibold sm:text-xl',
                                children: null == A ? void 0 : A.title,
                              }),
                              (0, a.jsx)('p', {
                                className: 'mt-3 text-sm text-custom-text-200',
                                children: null == A ? void 0 : A.description,
                              }),
                              (0, a.jsxs)('div', {
                                className:
                                  'mt-3 flex h-full items-end justify-between gap-4',
                                children: [
                                  (0, a.jsxs)('div', {
                                    className: 'flex items-center gap-4',
                                    children: [
                                      (null == A ? void 0 : A.prevStep) &&
                                        (0, a.jsx)(c.zx, {
                                          variant: 'neutral-primary',
                                          onClick: () => {
                                            var e;
                                            return l(
                                              null !== (e = A.prevStep) &&
                                                void 0 !== e
                                                ? e
                                                : 'welcome'
                                            );
                                          },
                                          children: 'Back',
                                        }),
                                      (null == A ? void 0 : A.nextStep) &&
                                        (0, a.jsx)(c.zx, {
                                          variant: 'primary',
                                          onClick: () => {
                                            var e;
                                            return l(
                                              null !== (e = A.nextStep) &&
                                                void 0 !== e
                                                ? e
                                                : 'issues'
                                            );
                                          },
                                          children: 'Next',
                                        }),
                                    ],
                                  }),
                                  f === x.length - 1 &&
                                    (0, a.jsx)(c.zx, {
                                      variant: 'primary',
                                      onClick: () => {
                                        h('Product tour'),
                                          t(),
                                          n.toggleCreateProjectModal(!0);
                                      },
                                      children: 'Create my first project',
                                    }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
          });
        });
      var g = s(95108);
      let p = [
          { key: 'issues', Icon: c.uQ },
          { key: 'cycles', Icon: c.sI },
          { key: 'modules', Icon: c.kB },
          { key: 'views', Icon: c.DK },
          { key: 'pages', Icon: g.Z },
        ],
        b = e => {
          let { step: t, setStep: s } = e;
          return (0, a.jsxs)('div', {
            className: 'col-span-3 hidden bg-custom-background-90 p-8 lg:block',
            children: [
              (0, a.jsxs)('h3', {
                className: 'text-lg font-medium',
                children: [
                  'Let',
                  "'",
                  's get started!',
                  (0, a.jsx)('br', {}),
                  'Get more out of Plane.',
                ],
              }),
              (0, a.jsx)('div', {
                className: 'mt-8 space-y-5',
                children: p.map(e =>
                  (0, a.jsxs)(
                    'h5',
                    {
                      className:
                        'flex cursor-pointer items-center gap-2 border-l-[3px] py-0.5 pl-3 pr-2 text-sm font-medium capitalize '.concat(
                          t === e.key
                            ? 'border-custom-primary-100 text-custom-primary-100'
                            : 'border-transparent text-custom-text-200'
                        ),
                      onClick: () => s(e.key),
                      role: 'button',
                      children: [
                        (0, a.jsx)(e.Icon, {
                          className: 'h-4 w-4',
                          'aria-hidden': 'true',
                        }),
                        e.key,
                      ],
                    },
                    e.key
                  )
                ),
              }),
            ],
          });
        };
      var f = s(35704),
        A = s(88039),
        v = s(65709),
        j = s(1759),
        w = s(25262),
        y = s(47542),
        N = s(90937),
        k = s(30335);
      let C = e => {
        let { step: t } = e;
        return (0, a.jsxs)('div', {
          className: 'flex items-center justify-center',
          children: [
            (0, a.jsx)('div', {
              className: 'z-10 h-3 w-3 rounded-full bg-custom-primary-100',
            }),
            (0, a.jsx)('div', {
              className: '-ml-1 h-1 w-14 '.concat(
                t >= 2
                  ? 'bg-custom-primary-100'
                  : 'bg-onboarding-background-100'
              ),
            }),
            (0, a.jsx)('div', {
              className: ' z-10 -ml-1 rounded-full '.concat(
                t >= 2
                  ? 'h-3 w-3 bg-custom-primary-100'
                  : ' h-2 w-2 bg-onboarding-background-100'
              ),
            }),
            (0, a.jsx)('div', {
              className: '-ml-1 h-1 w-14 '.concat(
                t >= 3
                  ? 'bg-custom-primary-100'
                  : 'bg-onboarding-background-100'
              ),
            }),
            (0, a.jsx)('div', {
              className: 'z-10 -ml-1 rounded-full '.concat(
                t >= 3
                  ? 'h-3 w-3 bg-custom-primary-100'
                  : 'h-2 w-2 bg-onboarding-background-100'
              ),
            }),
          ],
        });
      };
      var S = s(93116),
        E = s(36211),
        R = s(42683),
        I = (e, t, s, a) => {
          let l = (0, r.useCallback)(() => {
            let e = s.current,
              t = a.current;
            if (!t || !e) return;
            let r = e.getBoundingClientRect(),
              l = t.getBoundingClientRect(),
              {
                innerHeight: n,
                innerWidth: i,
                scrollX: o,
                scrollY: c,
              } = window,
              d = r.bottom + c;
            d + l.height > n && (d = n - l.height);
            let m = r.left + o + (r.width - l.width) / 2;
            m + l.width > i && (m = i - l.width),
              (t.style.top = ''.concat(Math.max(d, 5), 'px')),
              (t.style.left = ''.concat(Math.max(m, 5), 'px'));
          }, [s, a]);
          (0, r.useEffect)(() => {
            e && l();
          }, [l, e]),
            (0, R.Z)(a, () => {
              e && t();
            });
          let n = (0, r.useCallback)(() => {
            e && l();
          }, [l, e]);
          (0, r.useEffect)(
            () => (
              window.addEventListener('resize', n),
              () => {
                window.removeEventListener('resize', n);
              }
            ),
            [e, n]
          );
        },
        B = s(16933),
        _ = {
          src: '/_next/static/media/user-dark.4a96329c.svg',
          height: 29,
          width: 30,
          blurWidth: 0,
          blurHeight: 0,
        },
        D = {
          src: '/_next/static/media/user-light.f92e0884.svg',
          height: 29,
          width: 30,
          blurWidth: 0,
          blurHeight: 0,
        },
        U = {
          src: '/_next/static/media/user-1.2b87669a.png',
          height: 45,
          width: 45,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAbFBMVEXCr7Kzi4LEwMY7qtDFvcDo4eHEurtMaXG6qKjJxs6+jYKYb2OunKDV1+ShjpHT2enkqp/WoZWDhoqXdXWOWEdZR0XIq6pFfplaiprMo6A3qMuliHnNxMrWztSudWPX1N22l4/vvrGgV0lyS0FLDroyAAAAHHRSTlMV/vvXjhbYAP7R/veJhtPLhdKQlP38zPz9/f311XnEegAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEVJREFUeJwFwQUCwCAMBLBDW2DuUpj9/49LQLChqRwB4WJ1B8BmrfYkNbxoFSdu4YW/N/ICm9O8nk8H+LIdpXcgNxozgH5wxQNjJxZUGQAAAABJRU5ErkJggg==',
          blurWidth: 8,
          blurHeight: 8,
        },
        z = {
          src: '/_next/static/media/user-2.423073ae.png',
          height: 45,
          width: 45,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAZlBMVEXv7+7j4+DqzLTMxsHr6unt7u3BwcHo5eVMaXHbr5Hn5+sFCAahkodiT0Lozrri3trmvZ6HhoTexrQpKSV9e3fy8vCHhYHrwp3Vw7fn4Nlramf////4+vrv8vHu5uG1trLPoYLPooWwbp4MAAAAG3RSTlPOiv7+jNgSFQD+Gv39/df114mU09SP+P399fhJhgHTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAARElEQVR4nAXBBQLAIAwEsMNbZO6Fyf8/uQQU1DKPgeDxpGTgYeUqZRMF1zJzroBrx/uZCqxyMvdiEZ3e9Y0AitPQ2UA/dl4DUIYX3MgAAAAASUVORK5CYII=',
          blurWidth: 8,
          blurHeight: 8,
        };
      let Q = new B.A(),
        F = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        W = [
          'charlie.taylor@frstflt.com',
          'octave.chanute@frstflt.com',
          'george.spratt@frstflt.com',
          'frank.coffyn@frstflt.com',
          'amos.root@frstflt.com',
          'edward.deeds@frstflt.com',
          'charles.m.manly@frstflt.com',
          'glenn.curtiss@frstflt.com',
          'thomas.selfridge@frstflt.com',
          'albert.zahm@frstflt.com',
        ],
        P = e => {
          let {
              control: t,
              index: s,
              fields: l,
              remove: n,
              errors: i,
              isInvitationDisabled: o,
              setIsInvitationDisabled: d,
              setValue: m,
              getValues: u,
              watch: x,
            } = e,
            h = (0, r.useRef)(null),
            g = (0, r.useRef)(null),
            [p, b] = (0, r.useState)(!1);
          I(p, () => b(!1), h, g);
          let f = x('emails.'.concat(s, '.email')),
            y = e => {
              '' === e.target.value
                ? (l
                    .map((e, t) => F.test(u('emails.'.concat(t, '.email'))))
                    .includes(!0)
                    ? d(!1)
                    : d(!0),
                  u('emails.'.concat(s, '.role_active')) &&
                    m('emails.'.concat(s, '.role_active'), !1))
                : (u('emails.'.concat(s, '.role_active')) ||
                    m('emails.'.concat(s, '.role_active'), !0),
                  o && F.test(e.target.value)
                    ? d(!1)
                    : o || F.test(e.target.value) || d(!0));
            };
          return (0, a.jsxs)('div', {
            children: [
              (0, a.jsxs)('div', {
                className: 'group relative grid grid-cols-11 gap-4',
                children: [
                  (0, a.jsx)('div', {
                    className:
                      'col-span-7 rounded-md bg-onboarding-background-200',
                    children: (0, a.jsx)(A.Qr, {
                      control: t,
                      name: 'emails.'.concat(s, '.email'),
                      rules: {
                        pattern: { value: F, message: 'Invalid Email ID' },
                      },
                      render: e => {
                        var t, r;
                        let {
                          field: { value: l, onChange: n, ref: o },
                        } = e;
                        return (0, a.jsx)(c.II, {
                          id: 'emails.'.concat(s, '.email'),
                          name: 'emails.'.concat(s, '.email'),
                          type: 'text',
                          value: l,
                          onChange: e => {
                            y(e), n(e);
                          },
                          ref: o,
                          hasError: !!(null === (r = i.emails) || void 0 === r
                            ? void 0
                            : null === (t = r[s]) || void 0 === t
                              ? void 0
                              : t.email),
                          placeholder: W[s % W.length],
                          className:
                            'h-12 w-full border-onboarding-border-100 text-xs placeholder:text-onboarding-text-400 sm:text-sm',
                        });
                      },
                    }),
                  }),
                  (0, a.jsx)('div', {
                    className:
                      'col-span-3 flex items-center rounded-md border border-onboarding-border-100 bg-onboarding-background-200',
                    children: (0, a.jsx)(A.Qr, {
                      control: t,
                      name: 'emails.'.concat(s, '.role'),
                      rules: { required: !0 },
                      render: e => {
                        let {
                          field: { value: t, onChange: l },
                        } = e;
                        return (0, a.jsxs)(N.R, {
                          as: 'div',
                          value: t,
                          onChange: e => {
                            l(e),
                              b(!1),
                              m('emails.'.concat(s, '.role_active'), !0);
                          },
                          className: 'w-full flex-shrink-0 text-left',
                          children: [
                            (0, a.jsxs)(N.R.Button, {
                              type: 'button',
                              ref: h,
                              onClick: () => b(e => !e),
                              className:
                                'flex h-11 w-full items-center justify-between gap-1 rounded-md px-2.5 py-2 text-xs duration-300',
                              children: [
                                (0, a.jsx)('span', {
                                  className: 'text-xs '.concat(
                                    u('emails.'.concat(s, '.role_active'))
                                      ? 'text-onboarding-text-100'
                                      : 'text-onboarding-text-400',
                                    ' sm:text-sm'
                                  ),
                                  children: S.HB[t],
                                }),
                                (0, a.jsx)(v.Z, {
                                  className: 'h-4 w-4 '.concat(
                                    u('emails.'.concat(s, '.role_active'))
                                      ? 'stroke-onboarding-text-100'
                                      : 'stroke-onboarding-text-400'
                                  ),
                                }),
                              ],
                            }),
                            (0, a.jsx)(k.u, {
                              show: p,
                              as: r.Fragment,
                              enter: 'transition ease-out duration-100',
                              enterFrom: 'transform opacity-0 scale-95',
                              enterTo: 'transform opacity-100 scale-100',
                              leave: 'transition ease-in duration-75',
                              leaveFrom: 'transform opacity-100 scale-100',
                              leaveTo: 'transform opacity-0 scale-95',
                              children: (0, a.jsx)(N.R.Options, {
                                ref: g,
                                className:
                                  'fixed z-10 mt-1 max-h-48 w-36 overflow-y-auto rounded-md border border-onboarding-border-100 bg-onboarding-background-200 text-xs shadow-lg focus:outline-none',
                                children: (0, a.jsx)('div', {
                                  className: 'space-y-1 p-2',
                                  children: Object.entries(S.HB).map(e => {
                                    let [t, s] = e;
                                    return (0, a.jsx)(
                                      N.R.Option,
                                      {
                                        value: parseInt(t),
                                        className: e => {
                                          let { active: t, selected: s } = e;
                                          return 'cursor-pointer select-none truncate rounded px-1 py-1.5 '
                                            .concat(
                                              t || s
                                                ? 'bg-onboarding-background-400/40'
                                                : '',
                                              ' '
                                            )
                                            .concat(
                                              s
                                                ? 'text-onboarding-text-100'
                                                : 'text-custom-text-200'
                                            );
                                        },
                                        children: e => {
                                          let { selected: t } = e;
                                          return (0, a.jsxs)('div', {
                                            className:
                                              'flex items-center justify-between gap-2',
                                            children: [
                                              (0, a.jsx)('div', {
                                                className:
                                                  'flex items-center gap-2',
                                                children: s,
                                              }),
                                              t &&
                                                (0, a.jsx)(j.Z, {
                                                  className:
                                                    'h-4 w-4 flex-shrink-0',
                                                }),
                                            ],
                                          });
                                        },
                                      },
                                      t
                                    );
                                  }),
                                }),
                              }),
                            }),
                          ],
                        });
                      },
                    }),
                  }),
                  l.length > 1 &&
                    (0, a.jsx)('button', {
                      type: 'button',
                      className:
                        'ml-3 hidden place-items-center self-center rounded group-hover:grid',
                      onClick: () => n(s),
                      children: (0, a.jsx)(w.Z, {
                        className: 'h-3.5 w-3.5 text-custom-text-400',
                      }),
                    }),
                ],
              }),
              f &&
                !F.test(f) &&
                (0, a.jsxs)('div', {
                  className: '',
                  children: [
                    (0, a.jsx)('span', {
                      className: 'text-sm',
                      children: '\uD83E\uDD25',
                    }),
                    ' ',
                    (0, a.jsxs)('span', {
                      className: 'mt-1 text-xs text-red-500',
                      children: [
                        'That doesn',
                        "'",
                        't look like an email address.',
                      ],
                    }),
                  ],
                }),
            ],
          });
        },
        L = e => {
          let { finishOnboarding: t, stepChange: s, workspace: l } = e,
            [n, o] = (0, r.useState)(!0),
            { resolvedTheme: u } = (0, f.F)(),
            { captureEvent: x } = (0, m.DN)(),
            {
              control: h,
              watch: g,
              getValues: p,
              setValue: b,
              handleSubmit: v,
              formState: { isSubmitting: j, errors: w, isValid: N },
            } = (0, A.cI)(),
            {
              fields: k,
              append: S,
              remove: R,
            } = (0, A.Dq)({ control: h, name: 'emails' }),
            I = async () => {
              await s({ workspace_invite: !0 }), await t();
            },
            B = async e => {
              if (!l) return;
              let t = { ...e };
              (t = { emails: t.emails.filter(e => '' !== e.email) }),
                await Q.inviteWorkspace(l.slug, {
                  emails: t.emails.map(e => ({ email: e.email, role: e.role })),
                })
                  .then(async () => {
                    x(d.x2, {
                      emails: [
                        ...t.emails.map(e => ({
                          email: e.email,
                          role: (0, E.R)(e.role),
                        })),
                      ],
                      project_id: void 0,
                      state: 'SUCCESS',
                      element: 'Onboarding',
                    }),
                      (0, c.fz)({
                        type: c.do.SUCCESS,
                        title: 'Success!',
                        message: 'Invitations sent successfully.',
                      }),
                      await I();
                  })
                  .catch(e => {
                    x(d.x2, {
                      project_id: void 0,
                      state: 'FAILED',
                      element: 'Onboarding',
                    }),
                      (0, c.fz)({
                        type: c.do.ERROR,
                        title: 'Error!',
                        message: null == e ? void 0 : e.error,
                      });
                  });
            };
          return (
            (0, r.useEffect)(() => {
              0 === k.length &&
                S(
                  [
                    { email: '', role: 15, role_active: !1 },
                    { email: '', role: 15, role_active: !1 },
                    { email: '', role: 15, role_active: !1 },
                  ],
                  { focusIndex: 0 }
                );
            }, [k, S]),
            (0, a.jsxs)('div', {
              className: 'flex w-full py-14 ',
              children: [
                (0, a.jsxs)('div', {
                  className:
                    'fixed ml-16 hidden h-fit w-1/5 rounded border-x border-t border-onboarding-border-300 border-opacity-10 bg-onboarding-gradient-300 p-4 pb-40 lg:block',
                  children: [
                    (0, a.jsx)('p', {
                      className:
                        'text-base font-semibold text-onboarding-text-400',
                      children: 'Members',
                    }),
                    Array.from({ length: 4 }).map((e, t) =>
                      (0, a.jsxs)(
                        'div',
                        {
                          className: 'mt-6 flex items-center gap-2',
                          children: [
                            (0, a.jsx)('div', {
                              className:
                                'flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full',
                              children: (0, a.jsx)(i(), {
                                src: 'dark' === u ? _ : D,
                                alt: 'user',
                                className: 'object-cover',
                              }),
                            }),
                            (0, a.jsxs)('div', {
                              className: 'w-full',
                              children: [
                                (0, a.jsx)('div', {
                                  className:
                                    'my-2 h-2.5 w-1/2 rounded-md  bg-onboarding-background-400',
                                }),
                                (0, a.jsx)('div', {
                                  className:
                                    'h-2 w-1/3 rounded-md bg-onboarding-background-100',
                                }),
                              ],
                            }),
                          ],
                        },
                        t
                      )
                    ),
                    (0, a.jsxs)('div', {
                      className: 'relative mt-20',
                      children: [
                        (0, a.jsxs)('div', {
                          className:
                            'absolute right-24 mt-1 flex w-full gap-x-2 rounded-full border border-onboarding-border-100 bg-onboarding-background-200 p-2 shadow-onboarding-shadow-sm',
                          children: [
                            (0, a.jsx)('div', {
                              className:
                                'h-10 w-10 flex-shrink-0 rounded-full bg-custom-primary-10',
                              children: (0, a.jsx)(i(), {
                                src: z,
                                alt: 'user',
                              }),
                            }),
                            (0, a.jsxs)('div', {
                              children: [
                                (0, a.jsx)('p', {
                                  className: 'text-sm font-medium',
                                  children: 'Murphy cooper',
                                }),
                                (0, a.jsx)('p', {
                                  className: 'text-sm text-onboarding-text-400',
                                  children: 'murphy@plane.so',
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsxs)('div', {
                          className:
                            'absolute right-12 mt-16 flex w-full gap-x-2 rounded-full border border-onboarding-border-100 bg-onboarding-background-200 p-2 shadow-onboarding-shadow-sm',
                          children: [
                            (0, a.jsx)('div', {
                              className:
                                'h-10 w-10 flex-shrink-0 rounded-full bg-custom-primary-10',
                              children: (0, a.jsx)(i(), {
                                src: U,
                                alt: 'user',
                              }),
                            }),
                            (0, a.jsxs)('div', {
                              children: [
                                (0, a.jsx)('p', {
                                  className: 'text-sm font-medium',
                                  children: 'Else Thompson',
                                }),
                                (0, a.jsx)('p', {
                                  className: 'text-sm text-onboarding-text-400',
                                  children: 'Elsa@plane.so',
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)('div', {
                  className: 'ml-auto w-full lg:w-2/3 ',
                  children: (0, a.jsxs)('form', {
                    className:
                      'mx-auto ml-auto w-full space-y-7 px-7 sm:space-y-10 lg:w-5/6 lg:px-0',
                    onSubmit: v(B),
                    onKeyDown: e => {
                      'Enter' === e.code && e.preventDefault();
                    },
                    children: [
                      (0, a.jsxs)('div', {
                        className: 'flex items-center justify-between',
                        children: [
                          (0, a.jsx)('h2', {
                            className: 'text-xl font-semibold sm:text-2xl',
                            children: 'Invite your team to work with you',
                          }),
                          (0, a.jsx)(C, { step: 3 }),
                        ],
                      }),
                      (0, a.jsxs)('div', {
                        className: 'w-full text-sm xl:w-5/6',
                        children: [
                          (0, a.jsx)('div', {
                            className: 'mb-3 space-y-3 sm:space-y-4',
                            children: k.map((e, t) =>
                              (0, a.jsx)(
                                P,
                                {
                                  watch: g,
                                  getValues: p,
                                  setValue: b,
                                  isInvitationDisabled: n,
                                  setIsInvitationDisabled: e => o(e),
                                  control: h,
                                  errors: w,
                                  field: e,
                                  fields: k,
                                  index: t,
                                  remove: R,
                                },
                                e.id
                              )
                            ),
                          }),
                          (0, a.jsxs)('button', {
                            type: 'button',
                            className:
                              'flex items-center gap-2 bg-transparent py-2 pr-3 text-sm font-semibold text-custom-primary-100 outline-custom-primary-100',
                            onClick: () => {
                              S({ email: '', role: 15, role_active: !1 });
                            },
                            children: [
                              (0, a.jsx)(y.Z, { className: 'h-3 w-3' }),
                              'Add another',
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsxs)('div', {
                        className: 'flex items-center gap-4',
                        children: [
                          (0, a.jsx)(c.zx, {
                            variant: 'primary',
                            type: 'submit',
                            disabled: n || !N,
                            loading: j,
                            size: 'md',
                            children: j ? 'Inviting...' : 'Invite members',
                          }),
                          (0, a.jsx)('span', {
                            className:
                              'text-sm text-onboarding-text-400 hover:cursor-pointer',
                            onClick: I,
                            children: 'Do this later',
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            })
          );
        },
        Z = (0, l.Pi)(e => {
          let { stepChange: t, setTryDiffAccount: s } = e,
            { currentUser: r } = (0, m.aF)(),
            {
              handleSubmit: l,
              control: n,
              setValue: i,
              watch: o,
              formState: { errors: c, isSubmitting: d },
            } = (0, A.cI)({
              defaultValues: { name: '', slug: '' },
              mode: 'onChange',
            }),
            u = async () => {
              r && (await t({ workspace_join: !0, workspace_create: !0 }));
            };
          return (0, a.jsxs)('div', {
            className: 'flex w-full',
            children: [
              (0, a.jsx)('div', {
                className: 'fixed hidden h-full w-1/5 max-w-[320px] lg:block',
                children: (0, a.jsx)(A.Qr, {
                  control: n,
                  name: 'name',
                  render: e => {
                    let {
                      field: { value: t },
                    } = e;
                    return (0, a.jsx)(ej, {
                      watch: o,
                      setValue: i,
                      control: n,
                      showProject: !1,
                      workspaceName: t.length > 0 ? t : 'New Workspace',
                    });
                  },
                }),
              }),
              (0, a.jsx)('div', {
                className: 'ml-auto w-full lg:w-2/3 ',
                children: (0, a.jsxs)('div', {
                  className: 'mx-auto my-16 w-full px-7 lg:w-4/5 lg:px-0',
                  children: [
                    (0, a.jsxs)('div', {
                      className: 'flex items-center justify-between',
                      children: [
                        (0, a.jsx)('p', {
                          className:
                            'text-xl font-semibold text-onboarding-text-200 sm:text-2xl',
                          children: 'What will your workspace be?',
                        }),
                        (0, a.jsx)(C, { step: 1 }),
                      ],
                    }),
                    (0, a.jsx)(Y, {
                      stepChange: t,
                      user: null != r ? r : void 0,
                      control: n,
                      handleSubmit: l,
                      setValue: i,
                      errors: c,
                      isSubmitting: d,
                    }),
                    (0, a.jsxs)('div', {
                      className: 'my-8 flex items-center md:w-1/2',
                      children: [
                        (0, a.jsx)('hr', {
                          className: 'w-full border-onboarding-border-100',
                        }),
                        (0, a.jsx)('p', {
                          className:
                            'mx-3 flex-shrink-0 text-center text-sm text-custom-text-400',
                          children: 'Or',
                        }),
                        (0, a.jsx)('hr', {
                          className: 'w-full border-onboarding-border-100',
                        }),
                      ],
                    }),
                    (0, a.jsx)('div', {
                      className: 'w-full',
                      children: (0, a.jsx)(el, {
                        setTryDiffAccount: s,
                        handleNextStep: u,
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        }),
        M = (0, s(73471).Z)('Camera', [
          [
            'path',
            {
              d: 'M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z',
              key: '1tc9qg',
            },
          ],
          ['circle', { cx: '12', cy: '13', r: '3', key: '1vg3eu' }],
        ]);
      var H = s(93164),
        T = s(23258),
        J = s(44029),
        V = {
          src: '/_next/static/media/onboarding-issues.404a95f3.webp',
          height: 538,
          width: 958,
          blurDataURL:
            'data:image/webp;base64,UklGRnYAAABXRUJQVlA4WAoAAAAQAAAABwAAAwAAQUxQSCEAAAAAAAADmJiYmI4ITVD/////7Rv////////tGOXl5eXl5dUAVlA4IC4AAACwAQCdASoIAAQAAkA4JaQAAudid+aAAP6cNxnP6wv/1c7wpBDxyGBLW8fjUgAA',
          blurWidth: 8,
          blurHeight: 4,
        };
      let q = { first_name: '', avatar: '', use_case: void 0 },
        G = [
          'Build Products',
          'Manage Feedbacks',
          'Service delivery',
          'Field force management',
          'Code Repository Integration',
          'Bug Tracking',
          'Test Case Management',
          'Resource allocation',
        ],
        O = new J.I(),
        X = (0, l.Pi)(e => {
          var t, s;
          let { user: l, setUserName: n } = e,
            [o, u] = (0, r.useState)(!1),
            [x, h] = (0, r.useState)(!1),
            { updateCurrentUser: g } = (0, m.aF)(),
            { workspaces: p } = (0, m.cF)(),
            { captureEvent: b } = (0, m.DN)(),
            f = p
              ? null === (s = Object.values(p)) || void 0 === s
                ? void 0
                : null === (t = s[0]) || void 0 === t
                  ? void 0
                  : t.name
              : 'New Workspace',
            {
              getValues: v,
              handleSubmit: j,
              control: w,
              watch: y,
              setValue: N,
              formState: { errors: k, isSubmitting: S, isValid: E },
            } = (0, A.cI)({ defaultValues: q, mode: 'onChange' }),
            R = async e => {
              if (!l) return;
              let t = {
                ...e,
                first_name: e.first_name.split(' ')[0],
                last_name: e.first_name.split(' ')[1],
                use_case: e.use_case,
                onboarding_step: { ...l.onboarding_step, profile_complete: !0 },
              };
              await g(t)
                .then(() => {
                  b(d.DX, {
                    use_case: e.use_case,
                    state: 'SUCCESS',
                    element: 'Onboarding',
                  });
                })
                .catch(() => {
                  b(d.DX, {
                    use_case: e.use_case,
                    state: 'FAILED',
                    element: 'Onboarding',
                  });
                });
            },
            I = e => {
              e &&
                (u(!0),
                O.deleteUserFile(e).finally(() => {
                  N('avatar', ''), u(!1);
                }));
            };
          return (0, a.jsxs)('div', {
            className:
              'flex h-full w-full space-y-7 overflow-y-auto sm:space-y-10 ',
            children: [
              (0, a.jsx)('div', {
                className: 'fixed hidden h-full w-1/5 max-w-[320px] lg:block',
                children: (0, a.jsx)(A.Qr, {
                  control: w,
                  name: 'first_name',
                  render: e => {
                    let {
                      field: { value: t },
                    } = e;
                    return (0, a.jsx)(ej, {
                      userFullName: 0 === t.length ? void 0 : t,
                      showProject: !0,
                      workspaceName: f,
                    });
                  },
                }),
              }),
              (0, a.jsx)(A.Qr, {
                control: w,
                name: 'avatar',
                render: e => {
                  let {
                    field: { onChange: t, value: s },
                  } = e;
                  return (0, a.jsx)(T.Sz, {
                    isOpen: x,
                    onClose: () => h(!1),
                    isRemoving: o,
                    handleDelete: () => I(v('avatar')),
                    onSuccess: e => {
                      t(e), h(!1);
                    },
                    value: s && '' !== s.trim() ? s : null,
                  });
                },
              }),
              (0, a.jsxs)('div', {
                className:
                  'ml-auto flex w-full flex-col justify-between lg:w-2/3 ',
                children: [
                  (0, a.jsx)('div', {
                    className:
                      'mx-auto flex flex-col px-7 pt-3 md:px-0 lg:w-4/5',
                    children: (0, a.jsxs)('form', {
                      onSubmit: j(R),
                      className: 'ml-auto  md:w-11/12',
                      children: [
                        (0, a.jsxs)('div', {
                          className: 'flex items-center justify-between',
                          children: [
                            (0, a.jsx)('p', {
                              className: 'text-xl font-semibold sm:text-2xl',
                              children: 'What do we call you? ',
                            }),
                            (0, a.jsx)(C, { step: 2 }),
                          ],
                        }),
                        (0, a.jsxs)('div', {
                          className: 'mt-6 flex w-full ',
                          children: [
                            (0, a.jsx)('button', {
                              type: 'button',
                              onClick: () => h(!0),
                              children:
                                y('avatar') && '' !== y('avatar')
                                  ? (0, a.jsx)('div', {
                                      className:
                                        'relative mr-3 h-16 w-16 overflow-hidden',
                                      children: (0, a.jsx)('img', {
                                        src: y('avatar'),
                                        className:
                                          'absolute left-0 top-0 h-full w-full rounded-full object-cover',
                                        onClick: () => h(!0),
                                        alt:
                                          null == l ? void 0 : l.display_name,
                                      }),
                                    })
                                  : (0, a.jsxs)('div', {
                                      className:
                                        'relative mr-3 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-onboarding-background-300 hover:cursor-pointer',
                                      children: [
                                        (0, a.jsx)('div', {
                                          className:
                                            'absolute -right-1 bottom-1 flex h-6 w-6 items-center justify-center rounded-full border border-onboarding-border-100 bg-onboarding-background-100',
                                          children: (0, a.jsx)(M, {
                                            className:
                                              'h-4 w-4 stroke-onboarding-background-400',
                                          }),
                                        }),
                                        (0, a.jsx)(H.Z, {
                                          className:
                                            'h-10 w-10 fill-onboarding-background-400 stroke-onboarding-background-300',
                                        }),
                                      ],
                                    }),
                            }),
                            (0, a.jsxs)('div', {
                              className: 'flex flex-col gap-1',
                              children: [
                                (0, a.jsx)('div', {
                                  className:
                                    'my-2 mr-10 flex w-full rounded-md bg-onboarding-background-200 text-sm',
                                  children: (0, a.jsx)(A.Qr, {
                                    control: w,
                                    name: 'first_name',
                                    rules: {
                                      required: 'Name is required',
                                      maxLength: {
                                        value: 24,
                                        message:
                                          'Name must be within 24 characters.',
                                      },
                                    },
                                    render: e => {
                                      let {
                                        field: {
                                          value: t,
                                          onChange: s,
                                          ref: r,
                                        },
                                      } = e;
                                      return (0, a.jsx)(c.II, {
                                        id: 'first_name',
                                        name: 'first_name',
                                        type: 'text',
                                        value: t,
                                        autoFocus: !0,
                                        onChange: e => {
                                          n(e.target.value), s(e);
                                        },
                                        ref: r,
                                        hasError: !!k.first_name,
                                        placeholder: 'Enter your full name...',
                                        className:
                                          'w-full border-onboarding-border-100 focus:border-custom-primary-100',
                                      });
                                    },
                                  }),
                                }),
                                k.first_name &&
                                  (0, a.jsx)('span', {
                                    className: 'text-sm text-red-500',
                                    children: k.first_name.message,
                                  }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsxs)('div', {
                          className: 'mb-10 mt-14',
                          children: [
                            (0, a.jsx)(A.Qr, {
                              control: w,
                              name: 'first_name',
                              render: e => {
                                let {
                                  field: { value: t },
                                } = e;
                                return (0, a.jsxs)('p', {
                                  className:
                                    'p-0 text-xl font-medium text-onboarding-text-200 sm:text-2xl',
                                  children: [
                                    'And how will you use Plane',
                                    t.length > 0 ? ', ' : '',
                                    t,
                                    '?',
                                  ],
                                });
                              },
                            }),
                            (0, a.jsx)('p', {
                              className:
                                'my-3 text-sm font-medium text-onboarding-text-300',
                              children: 'Choose just one',
                            }),
                            (0, a.jsx)(A.Qr, {
                              control: w,
                              name: 'use_case',
                              render: e => {
                                let {
                                  field: { value: t, onChange: s },
                                } = e;
                                return (0, a.jsx)('div', {
                                  className:
                                    'flex flex-wrap overflow-auto break-all',
                                  children: G.map(e =>
                                    (0, a.jsx)(
                                      'div',
                                      {
                                        className:
                                          'mb-3 flex-shrink-0 border hover:cursor-pointer hover:bg-onboarding-background-300/30 '.concat(
                                            t === e
                                              ? 'border-custom-primary-100'
                                              : 'border-onboarding-border-100',
                                            ' mr-3 rounded-sm p-3 text-sm font-medium'
                                          ),
                                        onClick: () => s(e),
                                        children: e,
                                      },
                                      e
                                    )
                                  ),
                                });
                              },
                            }),
                          ],
                        }),
                        (0, a.jsx)(c.zx, {
                          variant: 'primary',
                          type: 'submit',
                          size: 'md',
                          disabled: !E,
                          loading: S,
                          children: S ? 'Updating...' : 'Continue',
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsx)('div', {
                    className:
                      'relative bottom-0 ml-auto flex  justify-end md:w-11/12',
                    children: (0, a.jsx)(i(), {
                      src: V,
                      className: 'h-[w-2/3] w-2/3 object-cover',
                      alt: 'issue-image',
                    }),
                  }),
                ],
              }),
            ],
          });
        }),
        K = new B.A(),
        Y = e => {
          let {
              stepChange: t,
              user: s,
              control: l,
              handleSubmit: n,
              setValue: i,
              errors: o,
              isSubmitting: u,
            } = e,
            [x, h] = (0, r.useState)(!1),
            [g, p] = (0, r.useState)(!1),
            { updateCurrentUser: b } = (0, m.aF)(),
            {
              createWorkspace: f,
              fetchWorkspaces: v,
              workspaces: j,
            } = (0, m.cF)(),
            { captureWorkspaceEvent: w } = (0, m.DN)(),
            y = async e => {
              u ||
                (await K.workspaceSlugCheck(e.slug)
                  .then(async t => {
                    !0 !== t.status || S.i1.includes(e.slug)
                      ? h(!0)
                      : (h(!1),
                        await f(e)
                          .then(async e => {
                            (0, c.fz)({
                              type: c.do.SUCCESS,
                              title: 'Success!',
                              message: 'Workspace created successfully.',
                            }),
                              w({
                                eventName: d.iL,
                                payload: {
                                  ...e,
                                  state: 'SUCCESS',
                                  first_time: !0,
                                  element: 'Onboarding',
                                },
                              }),
                              await v(),
                              await N();
                          })
                          .catch(() => {
                            w({
                              eventName: d.iL,
                              payload: {
                                state: 'FAILED',
                                first_time: !0,
                                element: 'Onboarding',
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
                  .catch(() =>
                    (0, c.fz)({
                      type: c.do.ERROR,
                      title: 'Error!',
                      message:
                        'Some error occurred while creating workspace. Please try again.',
                    })
                  ));
            },
            N = async () => {
              var e;
              if (!s || !j) return;
              let a =
                null === (e = Object.values(null != j ? j : {})) || void 0 === e
                  ? void 0
                  : e[0];
              await t({ workspace_create: !0, workspace_join: !0 }),
                await b({ last_workspace_id: null == a ? void 0 : a.id });
            };
          return (0, a.jsxs)('form', {
            className: 'mt-5 md:w-2/3',
            onSubmit: n(y),
            children: [
              (0, a.jsxs)('div', {
                className: 'mb-5',
                children: [
                  (0, a.jsx)('p', {
                    className: 'mb-1 text-base text-custom-text-400',
                    children: 'Name it.',
                  }),
                  (0, a.jsx)(A.Qr, {
                    control: l,
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
                        field: { value: t, ref: s, onChange: r },
                      } = e;
                      return (0, a.jsx)('div', {
                        className:
                          'relative flex items-center rounded-md bg-onboarding-background-200',
                        children: (0, a.jsx)(c.II, {
                          id: 'name',
                          name: 'name',
                          type: 'text',
                          value: t,
                          onChange: e => {
                            r(e.target.value),
                              i('name', e.target.value),
                              i(
                                'slug',
                                e.target.value
                                  .toLocaleLowerCase()
                                  .trim()
                                  .replace(/ /g, '-')
                              );
                          },
                          placeholder: 'Enter workspace name...',
                          ref: s,
                          hasError: !!o.name,
                          className:
                            'h-[46px] w-full border-onboarding-border-100 text-base placeholder:text-base placeholder:text-custom-text-400/50',
                        }),
                      });
                    },
                  }),
                  o.name &&
                    (0, a.jsx)('span', {
                      className: 'text-sm text-red-500',
                      children: o.name.message,
                    }),
                  (0, a.jsx)('p', {
                    className: 'mb-1 mt-4 text-base text-custom-text-400',
                    children: 'You can edit the slug.',
                  }),
                  (0, a.jsx)(A.Qr, {
                    control: l,
                    name: 'slug',
                    render: e => {
                      let {
                        field: { value: t, ref: s, onChange: r },
                      } = e;
                      return (0, a.jsxs)('div', {
                        className:
                          'relative flex items-center rounded-md border bg-onboarding-background-200 px-3 '.concat(
                            g
                              ? 'border-red-500'
                              : 'border-onboarding-border-100',
                            ' '
                          ),
                        children: [
                          (0, a.jsxs)('span', {
                            className: 'whitespace-nowrap text-sm',
                            children: [window && window.location.host, '/'],
                          }),
                          (0, a.jsx)(c.II, {
                            id: 'slug',
                            name: 'slug',
                            type: 'text',
                            value: t
                              .toLocaleLowerCase()
                              .trim()
                              .replace(/ /g, '-'),
                            onChange: e => {
                              /^[a-zA-Z0-9_-]+$/.test(e.target.value)
                                ? p(!1)
                                : p(!0),
                                r(e.target.value.toLowerCase());
                            },
                            ref: s,
                            hasError: !!o.slug,
                            className: 'h-[46px] w-full border-none !px-0',
                          }),
                        ],
                      });
                    },
                  }),
                  x &&
                    (0, a.jsx)('span', {
                      className: '-mt-3 text-sm text-red-500',
                      children: 'Workspace URL is already taken!',
                    }),
                  g &&
                    (0, a.jsx)('span', {
                      className: 'text-sm text-red-500',
                      children:
                        'URL can only contain ( - ), ( _ ) & alphanumeric characters.',
                    }),
                ],
              }),
              (0, a.jsx)(c.zx, {
                variant: 'primary',
                type: 'submit',
                size: 'md',
                children: u ? 'Creating...' : 'Make it live',
              }),
            ],
          });
        };
      var $ = s(30201),
        ee = s(51731),
        et = s(81630),
        es = s(82750),
        ea = s(10712);
      s(29927);
      let er = new B.A(),
        el = e => {
          let { handleNextStep: t, setTryDiffAccount: s } = e,
            [l, n] = (0, r.useState)(!1),
            [i, o] = (0, r.useState)([]),
            { captureEvent: u } = (0, m.DN)(),
            { currentUser: x, updateCurrentUser: h } = (0, m.aF)(),
            { workspaces: g, fetchWorkspaces: p } = (0, m.cF)(),
            b = Object.values(g),
            { data: f, mutate: A } = (0, $.ZP)(es.v5, () =>
              er.userWorkspaceInvitations()
            ),
            v = (e, t) => {
              'accepted' === t
                ? o(t => [...t, e.id])
                : 'withdraw' === t && o(t => t.filter(t => t !== e.id));
            },
            j = async () => {
              var e;
              b &&
                (await h({
                  last_workspace_id:
                    null === (e = b[0]) || void 0 === e ? void 0 : e.id,
                }));
            },
            w = async () => {
              let e = null == f ? void 0 : f.find(e => e.id === i[0]);
              (!(i.length <= 0) || (null == e ? void 0 : e.role)) &&
                (n(!0),
                await er
                  .joinWorkspaces({ invitations: i })
                  .then(async () => {
                    u(d.$e, {
                      member_id: null == e ? void 0 : e.id,
                      role: (0, E.R)(null == e ? void 0 : e.role),
                      project_id: void 0,
                      accepted_from: 'App',
                      state: 'SUCCESS',
                      element: 'Workspace invitations page',
                    }),
                      await p(),
                      await (0, $.JG)(es.Lq),
                      await j(),
                      await t(),
                      await A();
                  })
                  .catch(t => {
                    console.error(t),
                      u(d.$e, {
                        member_id: null == e ? void 0 : e.id,
                        role: (0, E.R)(null == e ? void 0 : e.role),
                        project_id: void 0,
                        accepted_from: 'App',
                        state: 'FAILED',
                        element: 'Workspace invitations page',
                      });
                  })
                  .finally(() => n(!1)));
            };
          return f && f.length > 0
            ? (0, a.jsxs)('div', {
                children: [
                  (0, a.jsxs)('div', {
                    className: 'space-y-4 md:w-2/3 ',
                    children: [
                      (0, a.jsx)('p', {
                        className: 'pb-2 text-xl font-semibold sm:text-2xl',
                        children: 'Choose a workspace to join ',
                      }),
                      (0, a.jsx)('div', {
                        children:
                          f &&
                          f.length > 0 &&
                          f.map(e => {
                            let t = i.includes(e.id),
                              s = g[e.workspace.id];
                            return (0, a.jsxs)(
                              'div',
                              {
                                className:
                                  'flex cursor-pointer items-center gap-2 rounded border p-3.5 '.concat(
                                    t
                                      ? 'border-custom-primary-100'
                                      : 'border-onboarding-border-200 hover:bg-onboarding-background-300/30'
                                  ),
                                onClick: () =>
                                  v(e, t ? 'withdraw' : 'accepted'),
                                children: [
                                  (0, a.jsx)('div', {
                                    className: 'flex-shrink-0',
                                    children: (0, a.jsx)('div', {
                                      className:
                                        'grid h-9 w-9 place-items-center rounded',
                                      children:
                                        (null == s ? void 0 : s.logo) &&
                                        '' !== s.logo
                                          ? (0, a.jsx)('img', {
                                              src: s.logo,
                                              height: '100%',
                                              width: '100%',
                                              className: 'rounded',
                                              alt: s.name,
                                            })
                                          : (0, a.jsx)('span', {
                                              className:
                                                'grid h-9 w-9 place-items-center rounded bg-gray-700 px-3 py-1.5 uppercase text-white',
                                              children:
                                                null == s ? void 0 : s.name[0],
                                            }),
                                    }),
                                  }),
                                  (0, a.jsxs)('div', {
                                    className: 'min-w-0 flex-1',
                                    children: [
                                      (0, a.jsx)('div', {
                                        className: 'text-sm font-medium',
                                        children: (0, ea.aF)(
                                          null == s ? void 0 : s.name,
                                          30
                                        ),
                                      }),
                                      (0, a.jsx)('p', {
                                        className:
                                          'text-xs text-custom-text-200',
                                        children: S.HB[e.role],
                                      }),
                                    ],
                                  }),
                                  (0, a.jsx)('span', {
                                    className: 'flex-shrink-0 '.concat(
                                      t
                                        ? 'text-custom-primary-100'
                                        : 'text-custom-text-200'
                                    ),
                                    children: (0, a.jsx)(ee.Z, {
                                      className: 'h-5 w-5',
                                    }),
                                  }),
                                ],
                              },
                              e.id
                            );
                          }),
                      }),
                      (0, a.jsx)(c.zx, {
                        variant: 'primary',
                        onClick: w,
                        children: l ? 'Joining...' : 'Join your team',
                      }),
                    ],
                  }),
                  (0, a.jsxs)('div', {
                    className:
                      'mt-8 flex items-center justify-between rounded-sm bg-onboarding-background-300/30 px-4 py-3',
                    children: [
                      (0, a.jsxs)('div', {
                        className: 'flex items-center',
                        children: [
                          (0, a.jsx)(et.Z, { className: 'mr-2 h-4  w-4' }),
                          (0, a.jsx)('span', {
                            className: 'text-sm text-custom-text-200',
                            children: "Don't see your workspace?",
                          }),
                        ],
                      }),
                      (0, a.jsxs)('div', {
                        children: [
                          (0, a.jsx)('div', {
                            className:
                              'rounded-md border border-custom-border-200 bg-onboarding-background-200 py-3 text-center text-sm font-medium text-custom-text-200 hover:cursor-pointer',
                            onClick: s,
                            children: 'Try a different email address',
                          }),
                          (0, a.jsx)('p', {
                            className: 'mt-2 text-xs text-custom-text-300',
                            children:
                              'Your right e-mail address could be from a Google or GitHub login.',
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              })
            : (0, a.jsx)(en, { email: x.email, setTryDiffAccount: s });
        },
        en = e => {
          let { email: t, setTryDiffAccount: s } = e;
          return (0, a.jsxs)('div', {
            className:
              'my-16 items-center justify-center rounded border border-onboarding-border-200 bg-onboarding-background-300/30 px-10 py-5 md:w-4/5 ',
            children: [
              (0, a.jsx)('p', {
                className:
                  'text-center text-lg font-semibold text-onboarding-text-300',
                children: 'Is your team already on Plane?',
              }),
              (0, a.jsxs)('p', {
                className: 'mt-6 text-center text-sm text-onboarding-text-300',
                children: [
                  'We couldn’t find any existing workspaces for the email address ',
                  t,
                ],
              }),
              (0, a.jsx)('div', {
                className:
                  'mt-6 rounded-md border border-custom-border-200 bg-onboarding-background-200 py-3 text-center text-sm font-medium text-custom-text-200 hover:cursor-pointer',
                onClick: s,
                children: 'Try a different email address',
              }),
              (0, a.jsx)('p', {
                className: 'mt-2 text-center text-xs text-custom-text-300',
                children:
                  'Your right e-mail address could be from a Google or GitHub login.',
              }),
            ],
          });
        };
      var ei = s(20546),
        eo = s(13995),
        ec = s(26536),
        ed = s(39709),
        em = s(44893),
        eu = s(32036),
        ex = s(88287),
        eh = s(38330),
        eg = s(46679),
        ep = {
          src: '/_next/static/media/project-emoji.164d1f6b.svg',
          height: 16,
          width: 16,
          blurWidth: 0,
          blurHeight: 0,
        };
      let eb = [
          { Icon: ei.Z, name: 'Home' },
          { Icon: eo.Z, name: 'Analytics' },
          { Icon: ec.Z, name: 'Projects' },
          { Icon: ed.Z, name: 'All Issues' },
          { Icon: em.Z, name: 'Notifications' },
        ],
        ef = [
          { name: 'Issues', Icon: eu.Z },
          { name: 'Cycles', Icon: ex.Z },
          { name: 'Modules', Icon: c.kB },
          { name: 'Views', Icon: c.DK },
          { name: 'Pages', Icon: g.Z },
          { name: 'Settings', Icon: eh.Z },
        ],
        eA = 0,
        ev = '',
        ej = e => {
          var t;
          let {
              workspaceName: s,
              showProject: l,
              control: n,
              setValue: o,
              watch: d,
              userFullName: u,
            } = e,
            { currentUser: x } = (0, m.aF)(),
            { workspaces: h } = (0, m.cF)(),
            g =
              null === (t = Object.values(null != h ? h : {})) || void 0 === t
                ? void 0
                : t[0],
            { resolvedTheme: p } = (0, f.F)(),
            b = e => {
              if (ev !== e) {
                if (((ev = e), eA > 0)) (eA += 2), (eA = Math.min(eA, 2));
                else {
                  eA = Math.min((eA = 2), 2);
                  let e = setInterval(() => {
                    eA < 0 && (o('name', ev), clearInterval(e)), eA--;
                  }, 1e3);
                }
              }
            };
          return (
            (0, r.useEffect)(() => {
              d && d('name');
            }),
            (0, a.jsxs)('div', {
              className:
                'relative h-full border-r border-onboarding-border-100 ',
              children: [
                (0, a.jsx)('div', {
                  children:
                    n && o
                      ? (0, a.jsx)(A.Qr, {
                          control: n,
                          name: 'name',
                          render: e => {
                            let {
                              field: { value: t },
                            } = e;
                            return (
                              t.length > 0 ? b(t) : (ev = ''),
                              eA > 0
                                ? (0, a.jsx)('div', {
                                    className:
                                      'top-3 ml-6 mt-4 flex w-full max-w-screen-sm items-center border-[6px] bg-onboarding-background-200 transition-all '.concat(
                                        'dark' == p
                                          ? 'border-onboarding-background-100'
                                          : 'border-custom-primary-20',
                                        ' rounded-xl'
                                      ),
                                    children: (0, a.jsx)('div', {
                                      className:
                                        'w-full rounded-lg border border-onboarding-background-400 py-6 pl-4',
                                      children: (0, a.jsxs)('div', {
                                        className: ''.concat(
                                          'light' == p
                                            ? 'bg-[#F5F5F5]'
                                            : 'bg-[#363A40]',
                                          '  flex w-full items-center p-1'
                                        ),
                                        children: [
                                          (0, a.jsx)('div', {
                                            className: 'flex flex-shrink-0',
                                            children: (0, a.jsx)(c.qE, {
                                              name:
                                                t.length > 0
                                                  ? t
                                                  : 'New Workspace',
                                              src: '',
                                              size: 30,
                                              shape: 'square',
                                              fallbackBackgroundColor: 'black',
                                              className:
                                                '!text-base capitalize',
                                            }),
                                          }),
                                          (0, a.jsx)('span', {
                                            className:
                                              'ml-2 truncate text-xl font-medium text-onboarding-text-100',
                                            children: t,
                                          }),
                                        ],
                                      }),
                                    }),
                                  })
                                : (0, a.jsxs)('div', {
                                    className:
                                      'flex w-full items-center gap-y-2 truncate border border-transparent px-4 pt-6 transition-all',
                                    children: [
                                      (0, a.jsx)('div', {
                                        className: 'flex flex-shrink-0',
                                        children: (0, a.jsx)(c.qE, {
                                          name:
                                            t.length > 0
                                              ? t
                                              : g
                                                ? g.name
                                                : 'New Workspace',
                                          src: '',
                                          size: 24,
                                          shape: 'square',
                                          fallbackBackgroundColor: 'black',
                                          className: '!text-base capitalize',
                                        }),
                                      }),
                                      (0, a.jsxs)('div', {
                                        className:
                                          'mx-2 flex w-full flex-shrink items-center justify-between truncate',
                                        children: [
                                          (0, a.jsx)('h4', {
                                            className:
                                              'truncate text-base font-medium text-custom-text-100',
                                            children: s,
                                          }),
                                          (0, a.jsx)(v.Z, {
                                            className:
                                              'mx-1 h-4 w-4 flex-shrink-0 text-custom-sidebar-text-400 duration-300',
                                          }),
                                        ],
                                      }),
                                      (0, a.jsx)('div', {
                                        className: 'flex flex-shrink-0',
                                        children: (0, a.jsx)(c.qE, {
                                          name: null == x ? void 0 : x.email,
                                          src: null == x ? void 0 : x.avatar,
                                          size: 24,
                                          shape: 'square',
                                          fallbackBackgroundColor: '#FCBE1D',
                                          className: '!text-base capitalize',
                                        }),
                                      }),
                                    ],
                                  })
                            );
                          },
                        })
                      : (0, a.jsxs)('div', {
                          className:
                            'flex w-full items-center gap-y-2 truncate px-4 pt-6 transition-all',
                          children: [
                            (0, a.jsx)('div', {
                              className: 'flex flex-shrink-0',
                              children: (0, a.jsx)(c.qE, {
                                name: g ? g.name : 'New Workspace',
                                src: '',
                                size: 24,
                                shape: 'square',
                                fallbackBackgroundColor: 'black',
                                className: '!text-base capitalize',
                              }),
                            }),
                            (0, a.jsxs)('div', {
                              className:
                                'mx-2 flex w-full flex-shrink items-center justify-between truncate',
                              children: [
                                (0, a.jsx)('h4', {
                                  className:
                                    'truncate text-base font-medium text-custom-text-100',
                                  children: s,
                                }),
                                (0, a.jsx)(v.Z, {
                                  className:
                                    'mx-1 h-4 w-4 flex-shrink-0 text-custom-sidebar-text-400 duration-300',
                                }),
                              ],
                            }),
                            (0, a.jsx)('div', {
                              className: 'flex flex-shrink-0',
                              children: (0, a.jsx)(c.qE, {
                                name:
                                  null != u ? u : null == x ? void 0 : x.email,
                                src: null == x ? void 0 : x.avatar,
                                size: 24,
                                shape: 'square',
                                fallbackBackgroundColor: '#FCBE1D',
                                className: '!text-base capitalize',
                              }),
                            }),
                          ],
                        }),
                }),
                (0, a.jsxs)('div', {
                  className: 'space-y-1 p-4',
                  children: [
                    (0, a.jsxs)('div', {
                      className:
                        'mb-3 mt-4 flex w-full items-center justify-between gap-2 px-1 ',
                      children: [
                        (0, a.jsx)('div', {
                          className:
                            'group relative flex w-full items-center justify-between gap-1 rounded border border-onboarding-border-100 px-3 shadow-custom-shadow-2xs',
                          children: (0, a.jsxs)('div', {
                            className:
                              'relative flex flex-shrink-0 flex-grow items-center gap-2 rounded py-1.5 outline-none',
                            children: [
                              (0, a.jsx)(eg.Z, {
                                className:
                                  'h-4 w-4 text-custom-sidebar-text-300',
                              }),
                              (0, a.jsx)('span', {
                                className: 'text-sm font-medium',
                                children: 'New Issue',
                              }),
                            ],
                          }),
                        }),
                        (0, a.jsx)('div', {
                          className:
                            'flex flex-shrink-0 items-center justify-center rounded border border-onboarding-border-100\n            p-2 shadow-custom-shadow-2xs outline-none\n            ',
                          children: (0, a.jsx)(et.Z, {
                            className: 'h-4 w-4 text-onboarding-text-200',
                          }),
                        }),
                      ],
                    }),
                    eb.map(e =>
                      (0, a.jsx)(
                        'a',
                        {
                          className: 'block w-full',
                          children: (0, a.jsxs)('div', {
                            className:
                              'group flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-base font-medium text-onboarding-text-200 \n                outline-none  focus:bg-custom-sidebar-background-80\n                ',
                            children: [
                              (0, a.jsx)(e.Icon, { className: 'h-4 w-4' }),
                              e.name,
                            ],
                          }),
                        },
                        e.name
                      )
                    ),
                  ],
                }),
                l &&
                  (0, a.jsxs)('div', {
                    className: 'px-4 pt-4',
                    children: [
                      (0, a.jsx)('p', {
                        className:
                          'pb-4 text-base font-semibold text-custom-text-300',
                        children: 'Projects',
                      }),
                      (0, a.jsxs)('div', {
                        className: 'px-3',
                        children: [
                          ' ',
                          (0, a.jsxs)('div', {
                            className:
                              'mb-3 flex w-4/5 items-center justify-between text-base font-medium text-custom-text-200',
                            children: [
                              (0, a.jsxs)('div', {
                                className: 'flex items-center gap-x-2',
                                children: [
                                  (0, a.jsx)(i(), {
                                    src: ep,
                                    alt: 'Plane Logo',
                                    className: 'h-4 w-4',
                                  }),
                                  (0, a.jsx)('span', { children: ' Plane' }),
                                ],
                              }),
                              (0, a.jsx)(v.Z, { className: 'h-4 w-4' }),
                            ],
                          }),
                          ef.map(e =>
                            (0, a.jsx)(
                              'a',
                              {
                                className: 'ml-6 block w-full',
                                children: (0, a.jsxs)('div', {
                                  className:
                                    'group flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-base font-medium text-custom-sidebar-text-200 \n                    outline-none  focus:bg-custom-sidebar-background-80\n                ',
                                  children: [
                                    (0, a.jsx)(e.Icon, {
                                      className: 'h-4 w-4',
                                    }),
                                    e.name,
                                  ],
                                }),
                              },
                              e.name
                            )
                          ),
                        ],
                      }),
                    ],
                  }),
              ],
            })
          );
        };
      var ew = s(86677),
        ey = s(54129),
        eN = s(15455);
      let ek = e => {
        let { isOpen: t, onClose: s } = e,
          [l, n] = (0, r.useState)(!1),
          [i, o] = (0, r.useState)(!1),
          d = (0, ew.useRouter)(),
          { deactivateAccount: u, signOut: x } = (0, m.aF)(),
          { resolvedTheme: h, setTheme: g } = (0, f.F)(),
          p = () => {
            n(!1), o(!1), s();
          },
          b = async () => {
            n(!0),
              await x()
                .then(() => {
                  (0, $.JG)('CURRENT_USER_DETAILS', null),
                    g('system'),
                    d.push('/'),
                    p();
                })
                .catch(() =>
                  (0, c.fz)({
                    type: c.do.ERROR,
                    title: 'Error!',
                    message: 'Failed to sign out. Please try again.',
                  })
                )
                .finally(() => n(!1));
          },
          A = async () => {
            o(!0),
              await u()
                .then(() => {
                  (0, c.fz)({
                    type: c.do.SUCCESS,
                    title: 'Success!',
                    message: 'Account deleted successfully.',
                  }),
                    (0, $.JG)('CURRENT_USER_DETAILS', null),
                    g('system'),
                    d.push('/'),
                    p();
                })
                .catch(e =>
                  (0, c.fz)({
                    type: c.do.ERROR,
                    title: 'Error!',
                    message: null == e ? void 0 : e.error,
                  })
                )
                .finally(() => o(!1));
          };
        return (0, a.jsx)(k.u.Root, {
          show: t,
          as: r.Fragment,
          children: (0, a.jsxs)(eN.V, {
            as: 'div',
            className: 'relative z-20',
            onClose: p,
            children: [
              (0, a.jsx)(k.u.Child, {
                as: r.Fragment,
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
                  children: (0, a.jsx)(k.u.Child, {
                    as: r.Fragment,
                    enter: 'ease-out duration-300',
                    enterFrom:
                      'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
                    enterTo: 'opacity-100 translate-y-0 sm:scale-100',
                    leave: 'ease-in duration-200',
                    leaveFrom: 'opacity-100 translate-y-0 sm:scale-100',
                    leaveTo:
                      'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
                    children: (0, a.jsxs)(eN.V.Panel, {
                      className:
                        'relative transform overflow-hidden rounded-lg bg-onboarding-background-200 text-left shadow-custom-shadow-md transition-all sm:my-8 sm:w-[40rem]',
                      children: [
                        (0, a.jsx)('div', {
                          className: 'px-4 pb-4 pt-5 sm:p-6 sm:pb-4',
                          children: (0, a.jsxs)('div', {
                            children: [
                              (0, a.jsxs)('div', {
                                className: 'flex items-center gap-x-4',
                                children: [
                                  (0, a.jsx)('div', {
                                    className:
                                      'grid place-items-center rounded-full '.concat(
                                        'dark' === h
                                          ? 'bg-[#2F3135]'
                                          : 'bg-red-500/20',
                                        ' p-4'
                                      ),
                                    children: (0, a.jsx)(ey.Z, {
                                      className: 'h-6 w-6 text-red-600',
                                      'aria-hidden': 'true',
                                    }),
                                  }),
                                  (0, a.jsx)(eN.V.Title, {
                                    as: 'h3',
                                    className:
                                      'text-2xl font-medium leading-6 text-onboarding-text-100',
                                    children: 'Not the right workspace?',
                                  }),
                                ],
                              }),
                              (0, a.jsx)('div', {
                                className: 'mt-6 px-4',
                                children: (0, a.jsxs)('ul', {
                                  className:
                                    'list-disc text-base font-normal text-onboarding-text-300',
                                  children: [
                                    (0, a.jsxs)('li', {
                                      children: [
                                        'Delete this account if you have another and won',
                                        "'",
                                        't use this account.',
                                      ],
                                    }),
                                    (0, a.jsxs)('li', {
                                      children: [
                                        'Switch to another account if you',
                                        "'",
                                        'd like to come back to this account another time.',
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, a.jsxs)('div', {
                          className:
                            'mb-2 flex items-center justify-end gap-3 p-4 sm:px-6',
                          children: [
                            (0, a.jsx)('button', {
                              onClick: b,
                              disabled: l,
                              className: ''.concat(
                                'dark' === h ? 'bg-[#2F3135]' : '',
                                ' rounded-sm px-4 py-1.5 text-sm'
                              ),
                              children: l ? 'Switching...' : 'Switch account',
                            }),
                            (0, a.jsx)('button', {
                              disabled: i,
                              onClick: A,
                              className: ''.concat(
                                'dark' === h ? 'bg-[#2F3135]' : '',
                                ' rounded-sm border border-red-500 px-4 py-1.5 text-sm text-red-500'
                              ),
                              children: i ? 'Deleting...' : 'Delete account',
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
    },
    36211: function (e, t, s) {
      s.d(t, {
        R: function () {
          return r;
        },
      });
      var a = s(93116);
      let r = e => {
        switch (e) {
          case a.fp.GUEST:
            return 'GUEST';
          case a.fp.VIEWER:
            return 'VIEWER';
          case a.fp.MEMBER:
            return 'MEMBER';
          case a.fp.ADMIN:
            return 'ADMIN';
        }
      };
    },
  },
]);
