(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [612],
  {
    12862: function (e, t) {
      'use strict';
      t.Z = {
        src: '/_next/static/media/github-black.a8ffa040.png',
        height: 512,
        width: 512,
        blurDataURL:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEUAAAAAAABMaXEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADTM5aqAAAADnRSTlMLIwD+uQTNiUHz5KJcLfhT0NsAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA1SURBVHicRca3AcAwDMAwqjf/f2/GYAIqt3uiSK7ZpuCJCOlYaYSW/fF8xBunvWCm0T7w1g8rZQE35wQCVQAAAABJRU5ErkJggg==',
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    612: function (e, t, r) {
      'use strict';
      r.d(t, {
        BA: function () {
          return ew;
        },
        lS: function () {
          return s;
        },
        q$: function () {
          return D;
        },
        so: function () {
          return b;
        },
        NY: function () {
          return v;
        },
        Xz: function () {
          return A;
        },
        nU: function () {
          return R;
        },
        fL: function () {
          return M;
        },
        _b: function () {
          return Z;
        },
        mA: function () {
          return G;
        },
        Ec: function () {
          return $;
        },
        cx: function () {
          return et;
        },
        zh: function () {
          return en;
        },
        hX: function () {
          return eo;
        },
        HP: function () {
          return ed;
        },
        lr: function () {
          return ex;
        },
        K5: function () {
          return ef;
        },
      });
      var a,
        n,
        s,
        i,
        o = r(24246),
        l = r(27378),
        d = r(79894),
        c = r.n(d),
        u = r(38579),
        m = r.n(u),
        x = r(86677),
        h = r(35704),
        g = r(12862),
        p = {
          src: '/_next/static/media/github-dark.856185ef.svg',
          height: 18,
          width: 19,
          blurWidth: 0,
          blurHeight: 0,
        };
      let b = e => {
        let { handleSignIn: t, clientId: r, type: a } = e,
          [n, s] = (0, l.useState)(void 0),
          [i, d] = (0, l.useState)(null),
          {
            query: { code: u },
          } = (0, x.useRouter)(),
          { resolvedTheme: b } = (0, h.F)();
        return (
          (0, l.useEffect)(() => {
            u && !i && (d(u.toString()), t(u.toString()));
          }, [u, i, t]),
          (0, l.useEffect)(() => {
            let e = window.location.origin ? window.location.origin : '';
            s(''.concat(e, '/'));
          }, []),
          (0, o.jsx)('div', {
            className: 'w-full',
            children: (0, o.jsx)(c(), {
              href: 'https://github.com/login/oauth/authorize?client_id='
                .concat(r, '&redirect_uri=')
                .concat(n, '&scope=read:user,user:email'),
              children: (0, o.jsxs)('button', {
                className:
                  'flex h-[42px] w-full items-center justify-center gap-2 rounded border px-2 text-sm font-medium text-custom-text-100 duration-300 hover:bg-onboarding-background-300 '.concat(
                    'dark' === b
                      ? 'border-[#43484F] bg-[#2F3135]'
                      : 'border-[#D9E4FF]'
                  ),
                children: [
                  (0, o.jsx)(m(), {
                    src: 'dark' === b ? p : g.Z,
                    height: 20,
                    width: 20,
                    alt: 'GitHub Logo',
                  }),
                  (0, o.jsxs)('span', {
                    className: 'text-onboarding-text-200',
                    children: [
                      'sign_in' === a ? 'Sign-in' : 'Sign-up',
                      ' with GitHub',
                    ],
                  }),
                ],
              }),
            }),
          })
        );
      };
      var w = r(43218),
        f = r.n(w);
      let v = e => {
        let { handleSignIn: t, clientId: r, type: a } = e,
          n = (0, l.useRef)(null),
          [s, i] = (0, l.useState)(!1),
          d = (0, l.useCallback)(() => {
            var e, o, l, d, c, u;
            if (n.current && !s) {
              null === (o = window) ||
                void 0 === o ||
                null === (e = o.google) ||
                void 0 === e ||
                e.accounts.id.initialize({ client_id: r, callback: t });
              try {
                null === (u = window) ||
                  void 0 === u ||
                  null === (c = u.google) ||
                  void 0 === c ||
                  c.accounts.id.renderButton(n.current, {
                    type: 'standard',
                    theme: 'outline',
                    size: 'large',
                    logo_alignment: 'center',
                    text: 'sign_in' === a ? 'signin_with' : 'signup_with',
                  });
              } catch (e) {
                console.log(e);
              }
              null === (d = window) ||
                void 0 === d ||
                null === (l = d.google) ||
                void 0 === l ||
                l.accounts.id.prompt(),
                i(!0);
            }
          }, [t, s, r, a]);
        return (
          (0, l.useEffect)(() => {
            var e, t, r;
            return (
              (null === (r = window) || void 0 === r
                ? void 0
                : null === (t = r.google) || void 0 === t
                  ? void 0
                  : null === (e = t.accounts) || void 0 === e
                    ? void 0
                    : e.id) && d(),
              () => {
                var e, t;
                null === (t = window) ||
                  void 0 === t ||
                  null === (e = t.google) ||
                  void 0 === e ||
                  e.accounts.id.cancel();
              }
            );
          }, [d]),
          (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(f(), {
                src: 'https://accounts.google.com/gsi/client',
                async: !0,
                defer: !0,
                onLoad: d,
              }),
              (0, o.jsx)('div', {
                className: '!w-full overflow-hidden rounded',
                id: 'googleSignInButton',
                ref: n,
              }),
            ],
          })
        );
      };
      var y = r(43659),
        j = r(25449),
        S = r(10634),
        N = r(6544);
      let E = new N.e(),
        A = (0, y.Pi)(e => {
          let { handleSignInRedirection: t, type: r } = e,
            {
              config: { envConfig: a },
            } = (0, S.IX)(),
            n =
              (null == a ? void 0 : a.google_client_id) &&
              (null == a ? void 0 : a.github_client_id),
            s = async e => {
              let { clientId: r, credential: a } = e;
              try {
                if (r && a)
                  (await E.socialAuth({
                    medium: 'google',
                    credential: a,
                    clientId: r,
                  })) && t();
                else throw Error("Can't find credentials");
              } catch (e) {
                (0, j.fz)({
                  type: j.do.ERROR,
                  title: 'Error signing in!',
                  message:
                    (null == e ? void 0 : e.error) ||
                    'Something went wrong. Please try again later or contact the support team.',
                });
              }
            },
            i = async e => {
              try {
                if (a && a.github_client_id && e) {
                  let r = {
                    medium: 'github',
                    credential: e,
                    clientId: a.github_client_id,
                  };
                  (await E.socialAuth(r)) && t();
                } else throw Error("Can't find credentials");
              } catch (e) {
                (0, j.fz)({
                  type: j.do.ERROR,
                  title: 'Error signing in!',
                  message:
                    (null == e ? void 0 : e.error) ||
                    'Something went wrong. Please try again later or contact the support team.',
                });
              }
            };
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsxs)('div', {
                className: 'mx-auto mt-4 flex items-center sm:w-96',
                children: [
                  (0, o.jsx)('hr', {
                    className: 'w-full border-onboarding-border-100',
                  }),
                  (0, o.jsx)('p', {
                    className:
                      'mx-3 flex-shrink-0 text-center text-sm text-onboarding-text-400',
                    children: 'Or continue with',
                  }),
                  (0, o.jsx)('hr', {
                    className: 'w-full border-onboarding-border-100',
                  }),
                ],
              }),
              (0, o.jsxs)('div', {
                className:
                  'mx-auto mt-7 grid gap-4 overflow-hidden sm:w-96 '.concat(
                    n ? 'grid-cols-2' : ''
                  ),
                children: [
                  (null == a ? void 0 : a.google_client_id) &&
                    (0, o.jsx)('div', {
                      className: 'flex h-[42px] items-center !overflow-hidden',
                      children: (0, o.jsx)(v, {
                        clientId: null == a ? void 0 : a.google_client_id,
                        handleSignIn: s,
                        type: r,
                      }),
                    }),
                  (null == a ? void 0 : a.github_client_id) &&
                    (0, o.jsx)(b, {
                      clientId: null == a ? void 0 : a.github_client_id,
                      handleSignIn: i,
                      type: r,
                    }),
                ],
              }),
            ],
          });
        });
      var C = r(88039),
        k = r(25262),
        _ = r(10712);
      let I = new N.e(),
        R = (0, y.Pi)(e => {
          let { onSubmit: t, updateEmail: r } = e,
            {
              control: a,
              formState: { errors: n, isSubmitting: s, isValid: i },
              handleSubmit: l,
            } = (0, C.cI)({
              defaultValues: { email: '' },
              mode: 'onChange',
              reValidateMode: 'onChange',
            }),
            d = async e => {
              let a = { email: e.email };
              r(e.email),
                await I.emailCheck(a)
                  .then(e => t(e.is_password_autoset))
                  .catch(e => {
                    var t;
                    return (0, j.fz)({
                      type: j.do.ERROR,
                      title: 'Error!',
                      message:
                        null !== (t = null == e ? void 0 : e.error) &&
                        void 0 !== t
                          ? t
                          : 'Something went wrong. Please try again.',
                    });
                  });
            };
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsxs)('h1', {
                className:
                  'sm:text-2.5xl text-center text-2xl font-medium text-onboarding-text-100',
                children: ['Welcome back, let', "'", 's get you on board'],
              }),
              (0, o.jsx)('p', {
                className:
                  'mt-2.5 text-center text-sm text-onboarding-text-200',
                children: 'Get back to your issues, projects and workspaces.',
              }),
              (0, o.jsxs)('form', {
                onSubmit: l(d),
                className: 'mx-auto mt-8 space-y-4 sm:w-96',
                children: [
                  (0, o.jsx)('div', {
                    className: 'space-y-1',
                    children: (0, o.jsx)(C.Qr, {
                      control: a,
                      name: 'email',
                      rules: {
                        required: 'Email is required',
                        validate: e => (0, _.zL)(e) || 'Email is invalid',
                      },
                      render: e => {
                        let {
                          field: { value: t, onChange: r },
                        } = e;
                        return (0, o.jsxs)('div', {
                          className:
                            'relative flex items-center rounded-md bg-onboarding-background-200',
                          children: [
                            (0, o.jsx)(j.II, {
                              id: 'email',
                              name: 'email',
                              type: 'email',
                              value: t,
                              onChange: r,
                              hasError: !!n.email,
                              placeholder: 'name@company.com',
                              className:
                                'h-[46px] w-full border border-onboarding-border-100 pr-12 placeholder:text-onboarding-text-400',
                              autoFocus: !0,
                            }),
                            t.length > 0 &&
                              (0, o.jsx)(k.Z, {
                                className:
                                  'absolute right-3 h-5 w-5 stroke-custom-text-400 hover:cursor-pointer',
                                onClick: () => r(''),
                              }),
                          ],
                        });
                      },
                    }),
                  }),
                  (0, o.jsx)(j.zx, {
                    type: 'submit',
                    variant: 'primary',
                    className: 'w-full',
                    size: 'xl',
                    disabled: !i,
                    loading: s,
                    children: 'Continue',
                  }),
                ],
              }),
            ],
          });
        });
      var O = r(69570),
        P = r(82558),
        z = r(30640);
      let D = () => {
        let [e, t] = (0, l.useState)(null),
          [r, a] = (0, l.useState)(null),
          { styles: n, attributes: s } = (0, O.D)(e, r, {
            placement: 'right-start',
            modifiers: [{ name: 'preventOverflow', options: { padding: 12 } }],
          });
        return (0, o.jsxs)(z.J, {
          className: 'relative',
          children: [
            (0, o.jsx)(z.J.Button, {
              as: l.Fragment,
              children: (0, o.jsx)('button', {
                type: 'button',
                ref: t,
                className:
                  'text-xs font-medium text-custom-primary-100 outline-none',
                children: 'Forgot your password?',
              }),
            }),
            (0, o.jsx)(z.J.Panel, {
              className: 'fixed z-10',
              children: e => {
                let { close: t } = e;
                return (0, o.jsxs)('div', {
                  className:
                    'border border-onboarding-border-300 bg-onboarding-background-100 rounded z-10 py-1 px-2 w-64 break-words flex items-start gap-3 text-left ml-3',
                  ref: a,
                  style: n.popper,
                  ...s.popper,
                  children: [
                    (0, o.jsx)('span', {
                      className: 'flex-shrink-0',
                      children: '\uD83E\uDD25',
                    }),
                    (0, o.jsxs)('p', {
                      className: 'text-xs',
                      children: [
                        'We see that your god hasn',
                        "'",
                        't enabled SMTP, we will not be able to send a password reset link',
                      ],
                    }),
                    (0, o.jsx)('button', {
                      type: 'button',
                      className: 'flex-shrink-0',
                      onClick: () => t(),
                      children: (0, o.jsx)(P.Z, {
                        className: 'h-3 w-3 text-onboarding-text-200',
                      }),
                    }),
                  ],
                });
              },
            }),
          ],
        });
      };
      var U = r(51258),
        F = r(9878),
        q = r(865);
      let L = { email: '', password: '' },
        T = new N.e(),
        M = e => {
          let { email: t, handleSignInRedirection: r } = e,
            [a, n] = (0, l.useState)(!1),
            [s, i] = (0, l.useState)(!1),
            { captureEvent: d } = (0, S.DN)(),
            {
              control: c,
              formState: { errors: u, isSubmitting: m, isValid: x },
              handleSubmit: h,
            } = (0, C.cI)({
              defaultValues: { ...L, email: t },
              mode: 'onChange',
              reValidateMode: 'onChange',
            }),
            g = async e => {
              let t = { password: e.password };
              await T.setPassword(t)
                .then(async () => {
                  (0, j.fz)({
                    type: j.do.SUCCESS,
                    title: 'Success!',
                    message: 'Password created successfully.',
                  }),
                    d(q.y7, { state: 'SUCCESS', first_time: !1 }),
                    await r();
                })
                .catch(e => {
                  var t;
                  d(q.y7, { state: 'FAILED', first_time: !1 }),
                    (0, j.fz)({
                      type: j.do.ERROR,
                      title: 'Error!',
                      message:
                        null !== (t = null == e ? void 0 : e.error) &&
                        void 0 !== t
                          ? t
                          : 'Something went wrong. Please try again.',
                    });
                });
            },
            p = async () => {
              n(!0),
                await r().finally(() => {
                  d(q.h3, { state: 'SUCCESS', first_time: !1 }), n(!1);
                });
            };
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)('h1', {
                className:
                  'sm:text-2.5xl text-center text-2xl font-medium text-onboarding-text-100',
                children: 'Set your password',
              }),
              (0, o.jsxs)('p', {
                className:
                  'mt-2.5 text-center text-sm text-onboarding-text-200',
                children: [
                  'If you',
                  "'",
                  'd like to do away with codes, set a password here.',
                ],
              }),
              (0, o.jsxs)('form', {
                onSubmit: h(g),
                className: 'mx-auto mt-5 space-y-4 sm:w-96',
                children: [
                  (0, o.jsx)(C.Qr, {
                    control: c,
                    name: 'email',
                    rules: {
                      required: 'Email is required',
                      validate: e => (0, _.zL)(e) || 'Email is invalid',
                    },
                    render: e => {
                      let {
                        field: { value: t, onChange: r, ref: a },
                      } = e;
                      return (0, o.jsx)(j.II, {
                        id: 'email',
                        name: 'email',
                        type: 'email',
                        value: t,
                        onChange: r,
                        ref: a,
                        hasError: !!u.email,
                        placeholder: 'name@company.com',
                        className:
                          'h-[46px] w-full border border-onboarding-border-100 !bg-onboarding-background-200 pr-12 text-onboarding-text-400',
                        disabled: !0,
                      });
                    },
                  }),
                  (0, o.jsxs)('div', {
                    children: [
                      (0, o.jsx)(C.Qr, {
                        control: c,
                        name: 'password',
                        rules: { required: 'Password is required' },
                        render: e => {
                          let {
                            field: { value: t, onChange: r, ref: a },
                          } = e;
                          return (0, o.jsxs)('div', {
                            className:
                              'relative flex items-center rounded-md bg-onboarding-background-200',
                            children: [
                              (0, o.jsx)(j.II, {
                                type: s ? 'text' : 'password',
                                value: t,
                                onChange: r,
                                ref: a,
                                hasError: !!u.password,
                                placeholder: 'Enter password',
                                className:
                                  'h-[46px] w-full border border-onboarding-border-100 !bg-onboarding-background-200 pr-12 placeholder:text-onboarding-text-400',
                                minLength: 8,
                                autoFocus: !0,
                              }),
                              s
                                ? (0, o.jsx)(U.Z, {
                                    className:
                                      'absolute right-3 h-5 w-5 stroke-custom-text-400 hover:cursor-pointer',
                                    onClick: () => i(!1),
                                  })
                                : (0, o.jsx)(F.Z, {
                                    className:
                                      'absolute right-3 h-5 w-5 stroke-custom-text-400 hover:cursor-pointer',
                                    onClick: () => i(!0),
                                  }),
                            ],
                          });
                        },
                      }),
                      (0, o.jsxs)('p', {
                        className: 'mt-2 pb-3 text-xs text-onboarding-text-200',
                        children: [
                          'Whatever you choose now will be your account',
                          "'",
                          's password until you change it.',
                        ],
                      }),
                    ],
                  }),
                  (0, o.jsxs)('div', {
                    className: 'space-y-2.5',
                    children: [
                      (0, o.jsx)(j.zx, {
                        type: 'submit',
                        variant: 'primary',
                        className: 'w-full',
                        size: 'xl',
                        disabled: !x,
                        loading: m,
                        children: 'Set password',
                      }),
                      (0, o.jsx)(j.zx, {
                        type: 'button',
                        variant: 'outline-primary',
                        className: 'w-full',
                        size: 'xl',
                        onClick: p,
                        loading: a,
                        children: 'Skip to workspace',
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        W = { email: '', password: '' },
        Q = new N.e(),
        Z = (0, y.Pi)(e => {
          let {
              email: t,
              handleStepChange: r,
              handleEmailClear: a,
              onSubmit: n,
            } = e,
            [i, d] = (0, l.useState)(!1),
            [u, m] = (0, l.useState)(!1),
            {
              config: { envConfig: x },
            } = (0, S.IX)(),
            { captureEvent: h } = (0, S.DN)(),
            g = null == x ? void 0 : x.is_smtp_configured,
            {
              control: p,
              formState: { errors: b, isSubmitting: w, isValid: f },
              getValues: v,
              handleSubmit: y,
              setError: N,
            } = (0, C.cI)({
              defaultValues: { ...W, email: t },
              mode: 'onChange',
              reValidateMode: 'onChange',
            }),
            E = async e => {
              let t = { email: e.email, password: e.password };
              await Q.passwordSignIn(t)
                .then(async () => {
                  h(q.dh, { state: 'SUCCESS', first_time: !1 }), await n();
                })
                .catch(e => {
                  var t;
                  return (0, j.fz)({
                    type: j.do.ERROR,
                    title: 'Error!',
                    message:
                      null !== (t = null == e ? void 0 : e.error) &&
                      void 0 !== t
                        ? t
                        : 'Something went wrong. Please try again.',
                  });
                });
            },
            A = async () => {
              let e = v('email');
              if (!(0, _.zL)(e)) {
                N('email', { message: 'Email is invalid' });
                return;
              }
              d(!0),
                await Q.generateUniqueCode({ email: e })
                  .then(() => r(s.USE_UNIQUE_CODE_FROM_PASSWORD))
                  .catch(e => {
                    var t;
                    return (0, j.fz)({
                      type: j.do.ERROR,
                      title: 'Error!',
                      message:
                        null !== (t = null == e ? void 0 : e.error) &&
                        void 0 !== t
                          ? t
                          : 'Something went wrong. Please try again.',
                    });
                  })
                  .finally(() => d(!1));
            };
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsxs)('h1', {
                className:
                  'sm:text-2.5xl text-center text-2xl font-medium text-onboarding-text-100',
                children: ['Welcome back, let', "'", 's get you on board'],
              }),
              (0, o.jsx)('p', {
                className:
                  'mt-2.5 text-center text-sm text-onboarding-text-200',
                children: 'Get back to your issues, projects and workspaces.',
              }),
              (0, o.jsxs)('form', {
                onSubmit: y(E),
                className: 'mx-auto mt-5 space-y-4 sm:w-96',
                children: [
                  (0, o.jsx)('div', {
                    children: (0, o.jsx)(C.Qr, {
                      control: p,
                      name: 'email',
                      rules: {
                        required: 'Email is required',
                        validate: e => (0, _.zL)(e) || 'Email is invalid',
                      },
                      render: e => {
                        let {
                          field: { value: t, onChange: r },
                        } = e;
                        return (0, o.jsxs)('div', {
                          className:
                            'relative flex items-center rounded-md bg-onboarding-background-200',
                          children: [
                            (0, o.jsx)(j.II, {
                              id: 'email',
                              name: 'email',
                              type: 'email',
                              value: t,
                              onChange: r,
                              hasError: !!b.email,
                              placeholder: 'name@company.com',
                              className:
                                'h-[46px] w-full border border-onboarding-border-100 pr-12 placeholder:text-onboarding-text-400',
                              disabled: g,
                            }),
                            t.length > 0 &&
                              (0, o.jsx)(k.Z, {
                                className:
                                  'absolute right-3 h-5 w-5 stroke-custom-text-400 hover:cursor-pointer',
                                onClick: () => {
                                  g ? a() : r('');
                                },
                              }),
                          ],
                        });
                      },
                    }),
                  }),
                  (0, o.jsxs)('div', {
                    children: [
                      (0, o.jsx)(C.Qr, {
                        control: p,
                        name: 'password',
                        rules: { required: 'Password is required' },
                        render: e => {
                          let {
                            field: { value: t, onChange: r },
                          } = e;
                          return (0, o.jsxs)('div', {
                            className:
                              'relative flex items-center rounded-md bg-onboarding-background-200',
                            children: [
                              (0, o.jsx)(j.II, {
                                type: u ? 'text' : 'password',
                                value: t,
                                onChange: r,
                                hasError: !!b.password,
                                placeholder: 'Enter password',
                                className:
                                  'h-[46px] w-full border border-onboarding-border-100 !bg-onboarding-background-200 pr-12 placeholder:text-onboarding-text-400',
                                autoFocus: !0,
                              }),
                              u
                                ? (0, o.jsx)(U.Z, {
                                    className:
                                      'absolute right-3 h-5 w-5 stroke-custom-text-400 hover:cursor-pointer',
                                    onClick: () => m(!1),
                                  })
                                : (0, o.jsx)(F.Z, {
                                    className:
                                      'absolute right-3 h-5 w-5 stroke-custom-text-400 hover:cursor-pointer',
                                    onClick: () => m(!0),
                                  }),
                            ],
                          });
                        },
                      }),
                      (0, o.jsx)('div', {
                        className: 'mt-2 w-full pb-3 text-right',
                        children: g
                          ? (0, o.jsx)(c(), {
                              onClick: () => h(q.lP),
                              href: '/accounts/forgot-password?email='.concat(
                                t
                              ),
                              className:
                                'text-xs font-medium text-custom-primary-100',
                              children: 'Forgot your password?',
                            })
                          : (0, o.jsx)(D, {}),
                      }),
                    ],
                  }),
                  (0, o.jsxs)('div', {
                    className: 'space-y-2.5',
                    children: [
                      (0, o.jsx)(j.zx, {
                        type: 'submit',
                        variant: 'primary',
                        className: 'w-full',
                        size: 'xl',
                        disabled: !f,
                        loading: w,
                        children: (null == x ? void 0 : x.is_smtp_configured)
                          ? 'Continue'
                          : 'Go to workspace',
                      }),
                      x &&
                        x.is_smtp_configured &&
                        (0, o.jsx)(j.zx, {
                          type: 'button',
                          onClick: A,
                          variant: 'outline-primary',
                          className: 'w-full',
                          size: 'xl',
                          loading: i,
                          children: i
                            ? 'Sending code'
                            : 'Sign in with unique code',
                        }),
                    ],
                  }),
                ],
              }),
            ],
          });
        });
      var V = r(78593),
        B = r(89774);
      ((a = s || (s = {})).EMAIL = 'EMAIL'),
        (a.PASSWORD = 'PASSWORD'),
        (a.UNIQUE_CODE = 'UNIQUE_CODE'),
        (a.OPTIONAL_SET_PASSWORD = 'OPTIONAL_SET_PASSWORD'),
        (a.USE_UNIQUE_CODE_FROM_PASSWORD = 'USE_UNIQUE_CODE_FROM_PASSWORD');
      let G = (0, y.Pi)(() => {
        let [e, t] = (0, l.useState)(null),
          [r, a] = (0, l.useState)(''),
          { handleRedirection: n } = (0, B.Z)(),
          {
            config: { envConfig: s },
          } = (0, S.IX)(),
          { captureEvent: i } = (0, S.DN)(),
          d = null == s ? void 0 : s.is_smtp_configured,
          u = async e => {
            e ? t('OPTIONAL_SET_PASSWORD') : await n();
          },
          m = async () => {
            await n();
          },
          x = s && (s.google_client_id || s.github_client_id);
        return (
          (0, l.useEffect)(() => {
            d ? t('EMAIL') : t('PASSWORD');
          }, [d]),
          (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)('div', {
                className: 'mx-auto flex flex-col',
                children: (0, o.jsxs)(o.Fragment, {
                  children: [
                    'EMAIL' === e &&
                      (0, o.jsx)(R, {
                        onSubmit: e => {
                          d && e ? t('UNIQUE_CODE') : t('PASSWORD');
                        },
                        updateEmail: e => a(e),
                      }),
                    'UNIQUE_CODE' === e &&
                      (0, o.jsx)($, {
                        email: r,
                        handleEmailClear: () => {
                          a(''), t('EMAIL');
                        },
                        onSubmit: u,
                        submitButtonText: 'Continue',
                      }),
                    'PASSWORD' === e &&
                      (0, o.jsx)(Z, {
                        email: r,
                        handleEmailClear: () => {
                          a(''), t('EMAIL');
                        },
                        onSubmit: m,
                        handleStepChange: e => t(e),
                      }),
                    'USE_UNIQUE_CODE_FROM_PASSWORD' === e &&
                      (0, o.jsx)($, {
                        email: r,
                        handleEmailClear: () => {
                          a(''), t('EMAIL');
                        },
                        onSubmit: u,
                        submitButtonText: 'Go to workspace',
                      }),
                    'OPTIONAL_SET_PASSWORD' === e &&
                      (0, o.jsx)(M, { email: r, handleSignInRedirection: n }),
                  ],
                }),
              }),
              x &&
                ('EMAIL' === e || (!d && 'PASSWORD' === e)) &&
                (0, o.jsxs)(o.Fragment, {
                  children: [
                    (0, o.jsx)(A, {
                      handleSignInRedirection: n,
                      type: 'sign_in',
                    }),
                    (0, o.jsxs)('p', {
                      className:
                        'text-xs text-onboarding-text-300 text-center mt-6',
                      children: [
                        'Don',
                        "'",
                        't have an account?',
                        ' ',
                        (0, o.jsx)(c(), {
                          href: '/accounts/sign-up',
                          onClick: () => i(q.Wy, {}),
                          className:
                            'text-custom-primary-100 font-medium underline',
                          children: 'Sign up',
                        }),
                      ],
                    }),
                    (0, o.jsx)(ef, {}),
                  ],
                }),
              (0, o.jsx)(V.R3, {}),
            ],
          })
        );
      });
      var J = r(74493),
        Y = r(77235);
      let H = { email: '', token: '' },
        K = new N.e(),
        X = new Y.K(),
        $ = e => {
          let {
              email: t,
              onSubmit: r,
              handleEmailClear: a,
              submitButtonText: n,
            } = e,
            [s, i] = (0, l.useState)(!1),
            { captureEvent: d } = (0, S.DN)(),
            { timer: c, setTimer: u } = (0, J.Z)(30),
            {
              control: m,
              formState: { errors: x, isSubmitting: h, isValid: g },
              getValues: p,
              handleSubmit: b,
              reset: w,
            } = (0, C.cI)({
              defaultValues: { ...H, email: t },
              mode: 'onChange',
              reValidateMode: 'onChange',
            }),
            f = async e => {
              let t = {
                email: e.email,
                key: 'magic_'.concat(e.email),
                token: e.token,
              };
              await K.magicSignIn(t)
                .then(async () => {
                  d(q.SY, { state: 'SUCCESS' });
                  let e = await X.currentUser();
                  await r(e.is_password_autoset);
                })
                .catch(e => {
                  var t;
                  d(q.SY, { state: 'FAILED' }),
                    (0, j.fz)({
                      type: j.do.ERROR,
                      title: 'Error!',
                      message:
                        null !== (t = null == e ? void 0 : e.error) &&
                        void 0 !== t
                          ? t
                          : 'Something went wrong. Please try again.',
                    });
                });
            },
            v = async e => {
              let t = { email: e.email };
              await K.generateUniqueCode(t)
                .then(() => {
                  u(30),
                    (0, j.fz)({
                      type: j.do.SUCCESS,
                      title: 'Success!',
                      message: 'A new unique code has been sent to your email.',
                    }),
                    w({ email: e.email, token: '' });
                })
                .catch(e => {
                  var t;
                  return (0, j.fz)({
                    type: j.do.ERROR,
                    title: 'Error!',
                    message:
                      null !== (t = null == e ? void 0 : e.error) &&
                      void 0 !== t
                        ? t
                        : 'Something went wrong. Please try again.',
                  });
                });
            },
            y = async () => {
              i(!0),
                await v(p())
                  .then(() => u(30))
                  .finally(() => i(!1));
            },
            N = s || c > 0;
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)('h1', {
                className:
                  'sm:text-2.5xl text-center text-2xl font-medium text-onboarding-text-100',
                children: 'Moving to the runway',
              }),
              (0, o.jsxs)('p', {
                className:
                  'mt-2.5 text-center text-sm text-onboarding-text-200',
                children: [
                  'Paste the code you got at',
                  (0, o.jsx)('br', {}),
                  (0, o.jsx)('span', {
                    className: 'font-semibold text-custom-primary-100',
                    children: t,
                  }),
                  ' below.',
                ],
              }),
              (0, o.jsxs)('form', {
                onSubmit: b(f),
                className: 'mx-auto mt-5 space-y-4 sm:w-96',
                children: [
                  (0, o.jsx)('div', {
                    children: (0, o.jsx)(C.Qr, {
                      control: m,
                      name: 'email',
                      rules: {
                        required: 'Email is required',
                        validate: e => (0, _.zL)(e) || 'Email is invalid',
                      },
                      render: e => {
                        let {
                          field: { value: t, onChange: r, ref: n },
                        } = e;
                        return (0, o.jsxs)('div', {
                          className:
                            'relative flex items-center rounded-md bg-onboarding-background-200',
                          children: [
                            (0, o.jsx)(j.II, {
                              id: 'email',
                              name: 'email',
                              type: 'email',
                              value: t,
                              onChange: r,
                              ref: n,
                              hasError: !!x.email,
                              placeholder: 'name@company.com',
                              className:
                                'h-[46px] w-full border border-onboarding-border-100 pr-12 placeholder:text-onboarding-text-400',
                              disabled: !0,
                            }),
                            t.length > 0 &&
                              (0, o.jsx)(k.Z, {
                                className:
                                  'absolute right-3 h-5 w-5 stroke-custom-text-400 hover:cursor-pointer',
                                onClick: a,
                              }),
                          ],
                        });
                      },
                    }),
                  }),
                  (0, o.jsxs)('div', {
                    children: [
                      (0, o.jsx)(C.Qr, {
                        control: m,
                        name: 'token',
                        rules: { required: 'Code is required' },
                        render: e => {
                          let {
                            field: { value: t, onChange: r },
                          } = e;
                          return (0, o.jsx)(j.II, {
                            value: t,
                            onChange: r,
                            hasError: !!x.token,
                            placeholder: 'gets-sets-flys',
                            className:
                              'h-[46px] w-full border border-onboarding-border-100 !bg-onboarding-background-200 pr-12 placeholder:text-onboarding-text-400',
                            autoFocus: !0,
                          });
                        },
                      }),
                      (0, o.jsx)('div', {
                        className: 'w-full text-right',
                        children: (0, o.jsx)('button', {
                          type: 'button',
                          onClick: y,
                          className: 'text-xs '.concat(
                            N
                              ? 'text-onboarding-text-300'
                              : 'text-onboarding-text-200 hover:text-custom-primary-100'
                          ),
                          disabled: N,
                          children:
                            c > 0
                              ? 'Request new code in '.concat(c, 's')
                              : s
                                ? 'Requesting new code'
                                : 'Request new code',
                        }),
                      }),
                    ],
                  }),
                  (0, o.jsx)(j.zx, {
                    type: 'submit',
                    variant: 'primary',
                    className: 'w-full',
                    size: 'xl',
                    disabled: !g,
                    loading: h,
                    children: n,
                  }),
                ],
              }),
            ],
          });
        },
        ee = new N.e(),
        et = (0, y.Pi)(e => {
          let { onSubmit: t, updateEmail: r } = e,
            {
              control: a,
              formState: { errors: n, isSubmitting: s, isValid: i },
              handleSubmit: l,
            } = (0, C.cI)({
              defaultValues: { email: '' },
              mode: 'onChange',
              reValidateMode: 'onChange',
            }),
            d = async e => {
              let a = { email: e.email };
              r(e.email),
                await ee
                  .emailCheck(a)
                  .then(() => t())
                  .catch(e => {
                    var t;
                    return (0, j.fz)({
                      type: j.do.SUCCESS,
                      title: 'Error!',
                      message:
                        null !== (t = null == e ? void 0 : e.error) &&
                        void 0 !== t
                          ? t
                          : 'Something went wrong. Please try again.',
                    });
                  });
            };
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)('h1', {
                className:
                  'sm:text-2.5xl text-center text-2xl font-medium text-onboarding-text-100',
                children: 'Get on your flight deck',
              }),
              (0, o.jsx)('p', {
                className:
                  'mt-2.5 text-center text-sm text-onboarding-text-200',
                children: 'Create or join a workspace. Start with your e-mail.',
              }),
              (0, o.jsxs)('form', {
                onSubmit: l(d),
                className: 'mx-auto mt-8 space-y-4 sm:w-96',
                children: [
                  (0, o.jsx)('div', {
                    className: 'space-y-1',
                    children: (0, o.jsx)(C.Qr, {
                      control: a,
                      name: 'email',
                      rules: {
                        required: 'Email is required',
                        validate: e => (0, _.zL)(e) || 'Email is invalid',
                      },
                      render: e => {
                        let {
                          field: { value: t, onChange: r },
                        } = e;
                        return (0, o.jsxs)('div', {
                          className:
                            'relative flex items-center rounded-md bg-onboarding-background-200',
                          children: [
                            (0, o.jsx)(j.II, {
                              id: 'email',
                              name: 'email',
                              type: 'email',
                              value: t,
                              onChange: r,
                              hasError: !!n.email,
                              placeholder: 'name@company.com',
                              className:
                                'h-[46px] w-full border border-onboarding-border-100 pr-12 placeholder:text-onboarding-text-400',
                              autoFocus: !0,
                            }),
                            t.length > 0 &&
                              (0, o.jsx)(k.Z, {
                                className:
                                  'absolute right-3 h-5 w-5 stroke-custom-text-400 hover:cursor-pointer',
                                onClick: () => r(''),
                              }),
                          ],
                        });
                      },
                    }),
                  }),
                  (0, o.jsx)(j.zx, {
                    type: 'submit',
                    variant: 'primary',
                    className: 'w-full',
                    size: 'xl',
                    disabled: !i,
                    loading: s,
                    children: 'Verify',
                  }),
                ],
              }),
            ],
          });
        }),
        er = { email: '', password: '' },
        ea = new N.e(),
        en = e => {
          let { email: t, handleSignInRedirection: r } = e,
            [a, n] = (0, l.useState)(!1),
            [s, i] = (0, l.useState)(!1),
            { captureEvent: d } = (0, S.DN)(),
            {
              control: c,
              formState: { errors: u, isSubmitting: m, isValid: x },
              handleSubmit: h,
            } = (0, C.cI)({
              defaultValues: { ...er, email: t },
              mode: 'onChange',
              reValidateMode: 'onChange',
            }),
            g = async e => {
              let t = { password: e.password };
              await ea
                .setPassword(t)
                .then(async () => {
                  (0, j.fz)({
                    type: j.do.SUCCESS,
                    title: 'Success!',
                    message: 'Password created successfully.',
                  }),
                    d(q.rx, { state: 'SUCCESS', first_time: !0 }),
                    await r();
                })
                .catch(e => {
                  var t;
                  d(q.rx, { state: 'FAILED', first_time: !0 }),
                    (0, j.fz)({
                      type: j.do.ERROR,
                      title: 'Error!',
                      message:
                        null !== (t = null == e ? void 0 : e.error) &&
                        void 0 !== t
                          ? t
                          : 'Something went wrong. Please try again.',
                    });
                });
            },
            p = async () => {
              n(!0),
                await r().finally(() => {
                  d(q.h3, { state: 'SUCCESS', first_time: !0 }), n(!1);
                });
            };
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)('h1', {
                className:
                  'sm:text-2.5xl text-center text-2xl font-medium text-onboarding-text-100',
                children: 'Moving to the runway',
              }),
              (0, o.jsxs)('p', {
                className:
                  'mt-2.5 text-center text-sm text-onboarding-text-200',
                children: [
                  'Let',
                  "'",
                  's set a password so',
                  (0, o.jsx)('br', {}),
                  'you can do away with codes.',
                ],
              }),
              (0, o.jsxs)('form', {
                onSubmit: h(g),
                className: 'mx-auto mt-5 space-y-4 sm:w-96',
                children: [
                  (0, o.jsx)(C.Qr, {
                    control: c,
                    name: 'email',
                    rules: {
                      required: 'Email is required',
                      validate: e => (0, _.zL)(e) || 'Email is invalid',
                    },
                    render: e => {
                      let {
                        field: { value: t, onChange: r, ref: a },
                      } = e;
                      return (0, o.jsx)(j.II, {
                        id: 'email',
                        name: 'email',
                        type: 'email',
                        value: t,
                        onChange: r,
                        ref: a,
                        hasError: !!u.email,
                        placeholder: 'name@company.com',
                        className:
                          'h-[46px] w-full border border-onboarding-border-100 !bg-onboarding-background-200 pr-12 text-onboarding-text-400',
                        disabled: !0,
                      });
                    },
                  }),
                  (0, o.jsxs)('div', {
                    children: [
                      (0, o.jsx)(C.Qr, {
                        control: c,
                        name: 'password',
                        rules: { required: 'Password is required' },
                        render: e => {
                          let {
                            field: { value: t, onChange: r },
                          } = e;
                          return (0, o.jsxs)('div', {
                            className:
                              'relative flex items-center rounded-md bg-onboarding-background-200',
                            children: [
                              (0, o.jsx)(j.II, {
                                type: s ? 'text' : 'password',
                                value: t,
                                onChange: r,
                                hasError: !!u.password,
                                placeholder: 'Enter password',
                                className:
                                  'h-[46px] w-full border border-onboarding-border-100 !bg-onboarding-background-200 pr-12 placeholder:text-onboarding-text-400',
                                minLength: 8,
                                autoFocus: !0,
                              }),
                              s
                                ? (0, o.jsx)(U.Z, {
                                    className:
                                      'absolute right-3 h-5 w-5 stroke-custom-text-400 hover:cursor-pointer',
                                    onClick: () => i(!1),
                                  })
                                : (0, o.jsx)(F.Z, {
                                    className:
                                      'absolute right-3 h-5 w-5 stroke-custom-text-400 hover:cursor-pointer',
                                    onClick: () => i(!0),
                                  }),
                            ],
                          });
                        },
                      }),
                      (0, o.jsxs)('p', {
                        className: 'mt-2 pb-3 text-xs text-onboarding-text-200',
                        children: [
                          'This password will continue to be your account',
                          "'",
                          's password.',
                        ],
                      }),
                    ],
                  }),
                  (0, o.jsxs)('div', {
                    className: 'space-y-2.5',
                    children: [
                      (0, o.jsx)(j.zx, {
                        type: 'submit',
                        variant: 'primary',
                        className: 'w-full',
                        size: 'xl',
                        disabled: !x,
                        loading: m,
                        children: 'Set password',
                      }),
                      (0, o.jsx)(j.zx, {
                        type: 'button',
                        variant: 'outline-primary',
                        className: 'w-full',
                        size: 'xl',
                        onClick: p,
                        loading: a,
                        children: 'Skip to setup',
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        es = { email: '', password: '' },
        ei = new N.e(),
        eo = (0, y.Pi)(e => {
          let { onSubmit: t } = e,
            [r, a] = (0, l.useState)(!1),
            {
              control: n,
              formState: { errors: s, isSubmitting: i, isValid: d },
              handleSubmit: u,
            } = (0, C.cI)({
              defaultValues: { ...es },
              mode: 'onChange',
              reValidateMode: 'onChange',
            }),
            m = async e => {
              let r = { email: e.email, password: e.password };
              await ei
                .passwordSignIn(r)
                .then(async () => await t())
                .catch(e => {
                  var t;
                  return (0, j.fz)({
                    type: j.do.ERROR,
                    title: 'Error!',
                    message:
                      null !== (t = null == e ? void 0 : e.error) &&
                      void 0 !== t
                        ? t
                        : 'Something went wrong. Please try again.',
                  });
                });
            };
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)('h1', {
                className:
                  'sm:text-2.5xl text-center text-2xl font-medium text-onboarding-text-100',
                children: 'Get on your flight deck',
              }),
              (0, o.jsx)('p', {
                className:
                  'mt-2.5 text-center text-sm text-onboarding-text-200',
                children: 'Create or join a workspace. Start with your e-mail.',
              }),
              (0, o.jsxs)('form', {
                onSubmit: u(m),
                className: 'mx-auto mt-5 space-y-4 sm:w-96',
                children: [
                  (0, o.jsx)('div', {
                    children: (0, o.jsx)(C.Qr, {
                      control: n,
                      name: 'email',
                      rules: {
                        required: 'Email is required',
                        validate: e => (0, _.zL)(e) || 'Email is invalid',
                      },
                      render: e => {
                        let {
                          field: { value: t, onChange: r },
                        } = e;
                        return (0, o.jsxs)('div', {
                          className:
                            'relative flex items-center rounded-md bg-onboarding-background-200',
                          children: [
                            (0, o.jsx)(j.II, {
                              id: 'email',
                              name: 'email',
                              type: 'email',
                              value: t,
                              onChange: r,
                              hasError: !!s.email,
                              placeholder: 'name@company.com',
                              className:
                                'h-[46px] w-full border border-onboarding-border-100 pr-12 placeholder:text-onboarding-text-400',
                            }),
                            t.length > 0 &&
                              (0, o.jsx)(k.Z, {
                                className:
                                  'absolute right-3 h-5 w-5 stroke-custom-text-400 hover:cursor-pointer',
                                onClick: () => r(''),
                              }),
                          ],
                        });
                      },
                    }),
                  }),
                  (0, o.jsxs)('div', {
                    children: [
                      (0, o.jsx)(C.Qr, {
                        control: n,
                        name: 'password',
                        rules: { required: 'Password is required' },
                        render: e => {
                          let {
                            field: { value: t, onChange: n },
                          } = e;
                          return (0, o.jsxs)('div', {
                            className:
                              'relative flex items-center rounded-md bg-onboarding-background-200',
                            children: [
                              (0, o.jsx)(j.II, {
                                type: r ? 'text' : 'password',
                                value: t,
                                onChange: n,
                                hasError: !!s.password,
                                placeholder: 'Enter password',
                                className:
                                  'h-[46px] w-full border border-onboarding-border-100 !bg-onboarding-background-200 pr-12 placeholder:text-onboarding-text-400',
                                autoFocus: !0,
                              }),
                              r
                                ? (0, o.jsx)(U.Z, {
                                    className:
                                      'absolute right-3 h-5 w-5 stroke-custom-text-400 hover:cursor-pointer',
                                    onClick: () => a(!1),
                                  })
                                : (0, o.jsx)(F.Z, {
                                    className:
                                      'absolute right-3 h-5 w-5 stroke-custom-text-400 hover:cursor-pointer',
                                    onClick: () => a(!0),
                                  }),
                            ],
                          });
                        },
                      }),
                      (0, o.jsxs)('p', {
                        className: 'mt-2 pb-3 text-xs text-onboarding-text-200',
                        children: [
                          'This password will continue to be your account',
                          "'",
                          's password.',
                        ],
                      }),
                    ],
                  }),
                  (0, o.jsx)(j.zx, {
                    type: 'submit',
                    variant: 'primary',
                    className: 'w-full',
                    size: 'xl',
                    disabled: !d,
                    loading: i,
                    children: 'Create account',
                  }),
                  (0, o.jsxs)('p', {
                    className: 'text-xs text-onboarding-text-200',
                    children: [
                      'When you click the button above, you agree with our',
                      ' ',
                      (0, o.jsx)(c(), {
                        href: 'https://plane.so/terms-and-conditions',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        children: (0, o.jsx)('span', {
                          className: 'font-semibold underline',
                          children: 'terms and conditions of service.',
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        });
      ((n = i || (i = {})).EMAIL = 'EMAIL'),
        (n.UNIQUE_CODE = 'UNIQUE_CODE'),
        (n.PASSWORD = 'PASSWORD'),
        (n.OPTIONAL_SET_PASSWORD = 'OPTIONAL_SET_PASSWORD');
      let el = ['EMAIL'],
        ed = (0, y.Pi)(() => {
          let [e, t] = (0, l.useState)(null),
            [r, a] = (0, l.useState)(''),
            { handleRedirection: n } = (0, B.Z)(),
            {
              config: { envConfig: s },
            } = (0, S.IX)(),
            { captureEvent: i } = (0, S.DN)(),
            d = async e => {
              e ? t('OPTIONAL_SET_PASSWORD') : await n();
            },
            u = async () => {
              await n();
            },
            m = s && (s.google_client_id || s.github_client_id);
          return (
            (0, l.useEffect)(() => {
              (null == s ? void 0 : s.is_smtp_configured)
                ? t('EMAIL')
                : t('PASSWORD');
            }, [null == s ? void 0 : s.is_smtp_configured]),
            (0, o.jsxs)(o.Fragment, {
              children: [
                (0, o.jsx)('div', {
                  className: 'mx-auto flex flex-col',
                  children: (0, o.jsxs)(o.Fragment, {
                    children: [
                      'EMAIL' === e &&
                        (0, o.jsx)(et, {
                          onSubmit: () => t('UNIQUE_CODE'),
                          updateEmail: e => a(e),
                        }),
                      'UNIQUE_CODE' === e &&
                        (0, o.jsx)(ex, {
                          email: r,
                          handleEmailClear: () => {
                            a(''), t('EMAIL');
                          },
                          onSubmit: d,
                        }),
                      'PASSWORD' === e && (0, o.jsx)(eo, { onSubmit: u }),
                      'OPTIONAL_SET_PASSWORD' === e &&
                        (0, o.jsx)(en, {
                          email: r,
                          handleSignInRedirection: n,
                          handleStepChange: e => t(e),
                        }),
                    ],
                  }),
                }),
                m &&
                  e &&
                  el.includes(e) &&
                  (0, o.jsxs)(o.Fragment, {
                    children: [
                      (0, o.jsx)(A, {
                        handleSignInRedirection: n,
                        type: 'sign_up',
                      }),
                      (0, o.jsxs)('p', {
                        className:
                          'text-xs text-onboarding-text-300 text-center mt-6',
                        children: [
                          'Already using Plane?',
                          ' ',
                          (0, o.jsx)(c(), {
                            href: '/',
                            onClick: () => i(q.Qo, {}),
                            className:
                              'text-custom-primary-100 font-medium underline',
                            children: 'Sign in',
                          }),
                        ],
                      }),
                      (0, o.jsx)(ef, { isSignUp: !0 }),
                    ],
                  }),
              ],
            })
          );
        }),
        ec = { email: '', token: '' },
        eu = new N.e(),
        em = new Y.K(),
        ex = e => {
          let { email: t, handleEmailClear: r, onSubmit: a } = e,
            [n, s] = (0, l.useState)(!1),
            { captureEvent: i } = (0, S.DN)(),
            { timer: d, setTimer: u } = (0, J.Z)(30),
            {
              control: m,
              formState: { errors: x, isSubmitting: h, isValid: g },
              getValues: p,
              handleSubmit: b,
              reset: w,
            } = (0, C.cI)({
              defaultValues: { ...ec, email: t },
              mode: 'onChange',
              reValidateMode: 'onChange',
            }),
            f = async e => {
              let t = {
                email: e.email,
                key: 'magic_'.concat(e.email),
                token: e.token,
              };
              await eu
                .magicSignIn(t)
                .then(async () => {
                  i(q.SY, { state: 'SUCCESS' });
                  let e = await em.currentUser();
                  await a(e.is_password_autoset);
                })
                .catch(e => {
                  var t;
                  i(q.SY, { state: 'FAILED' }),
                    (0, j.fz)({
                      type: j.do.ERROR,
                      title: 'Error!',
                      message:
                        null !== (t = null == e ? void 0 : e.error) &&
                        void 0 !== t
                          ? t
                          : 'Something went wrong. Please try again.',
                    });
                });
            },
            v = async e => {
              let t = { email: e.email };
              await eu
                .generateUniqueCode(t)
                .then(() => {
                  u(30),
                    (0, j.fz)({
                      type: j.do.SUCCESS,
                      title: 'Success!',
                      message: 'A new unique code has been sent to your email.',
                    }),
                    w({ email: e.email, token: '' });
                })
                .catch(e => {
                  var t;
                  return (0, j.fz)({
                    type: j.do.ERROR,
                    title: 'Error!',
                    message:
                      null !== (t = null == e ? void 0 : e.error) &&
                      void 0 !== t
                        ? t
                        : 'Something went wrong. Please try again.',
                  });
                });
            },
            y = async () => {
              s(!0),
                await v(p())
                  .then(() => u(30))
                  .finally(() => s(!1));
            },
            N = n || d > 0;
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)('h1', {
                className:
                  'sm:text-2.5xl text-center text-2xl font-medium text-onboarding-text-100',
                children: 'Moving to the runway',
              }),
              (0, o.jsxs)('p', {
                className:
                  'mt-2.5 text-center text-sm text-onboarding-text-200',
                children: [
                  'Paste the code you got at',
                  (0, o.jsx)('br', {}),
                  (0, o.jsx)('span', {
                    className: 'font-semibold text-custom-primary-100',
                    children: t,
                  }),
                  ' below.',
                ],
              }),
              (0, o.jsxs)('form', {
                onSubmit: b(f),
                className: 'mx-auto mt-5 space-y-4 sm:w-96',
                children: [
                  (0, o.jsx)('div', {
                    children: (0, o.jsx)(C.Qr, {
                      control: m,
                      name: 'email',
                      rules: {
                        required: 'Email is required',
                        validate: e => (0, _.zL)(e) || 'Email is invalid',
                      },
                      render: e => {
                        let {
                          field: { value: t, onChange: a, ref: n },
                        } = e;
                        return (0, o.jsxs)('div', {
                          className:
                            'relative flex items-center rounded-md bg-onboarding-background-200',
                          children: [
                            (0, o.jsx)(j.II, {
                              id: 'email',
                              name: 'email',
                              type: 'email',
                              value: t,
                              onChange: a,
                              ref: n,
                              hasError: !!x.email,
                              placeholder: 'name@company.com',
                              className:
                                'h-[46px] w-full border border-onboarding-border-100 pr-12 placeholder:text-onboarding-text-400',
                              disabled: !0,
                            }),
                            t.length > 0 &&
                              (0, o.jsx)(k.Z, {
                                className:
                                  'absolute right-3 h-5 w-5 stroke-custom-text-400 hover:cursor-pointer',
                                onClick: r,
                              }),
                          ],
                        });
                      },
                    }),
                  }),
                  (0, o.jsxs)('div', {
                    children: [
                      (0, o.jsx)(C.Qr, {
                        control: m,
                        name: 'token',
                        rules: { required: 'Code is required' },
                        render: e => {
                          let {
                            field: { value: t, onChange: r },
                          } = e;
                          return (0, o.jsx)(j.II, {
                            value: t,
                            onChange: r,
                            hasError: !!x.token,
                            placeholder: 'gets-sets-flys',
                            className:
                              'h-[46px] w-full border border-onboarding-border-100 !bg-onboarding-background-200 pr-12 placeholder:text-onboarding-text-400',
                            autoFocus: !0,
                          });
                        },
                      }),
                      (0, o.jsx)('div', {
                        className: 'w-full text-right',
                        children: (0, o.jsx)('button', {
                          type: 'button',
                          onClick: y,
                          className: 'text-xs '.concat(
                            N
                              ? 'text-onboarding-text-300'
                              : 'text-onboarding-text-200 hover:text-custom-primary-100'
                          ),
                          disabled: N,
                          children:
                            d > 0
                              ? 'Request new code in '.concat(d, 's')
                              : n
                                ? 'Requesting new code'
                                : 'Request new code',
                        }),
                      }),
                    ],
                  }),
                  (0, o.jsx)(j.zx, {
                    type: 'submit',
                    variant: 'primary',
                    className: 'w-full',
                    size: 'xl',
                    disabled: !g,
                    loading: h,
                    children: 'Create account',
                  }),
                  (0, o.jsxs)('p', {
                    className: 'text-xs text-onboarding-text-200',
                    children: [
                      'When you click the button above, you agree with our',
                      ' ',
                      (0, o.jsx)(c(), {
                        href: 'https://plane.so/terms-and-conditions',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        children: (0, o.jsx)('span', {
                          className: 'font-semibold underline',
                          children: 'terms and conditions of service.',
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
      var eh = r(30201),
        eg = r(54129),
        ep = r(30335),
        eb = r(15455);
      let ew = e => {
          let { isOpen: t, onClose: r } = e,
            [a, n] = (0, l.useState)(!1),
            { deactivateAccount: s } = (0, S.aF)(),
            i = (0, x.useRouter)(),
            { setTheme: d } = (0, h.F)(),
            c = () => {
              n(!1), r();
            },
            u = async () => {
              n(!0),
                await s()
                  .then(() => {
                    (0, j.fz)({
                      type: j.do.SUCCESS,
                      title: 'Success!',
                      message: 'Account deactivated successfully.',
                    }),
                      (0, eh.JG)('CURRENT_USER_DETAILS', null),
                      d('system'),
                      i.push('/'),
                      c();
                  })
                  .catch(e =>
                    (0, j.fz)({
                      type: j.do.ERROR,
                      title: 'Error!',
                      message: null == e ? void 0 : e.error,
                    })
                  )
                  .finally(() => n(!1));
            };
          return (0, o.jsx)(ep.u.Root, {
            show: t,
            as: l.Fragment,
            children: (0, o.jsxs)(eb.V, {
              as: 'div',
              className: 'relative z-20',
              onClose: c,
              children: [
                (0, o.jsx)(ep.u.Child, {
                  as: l.Fragment,
                  enter: 'ease-out duration-300',
                  enterFrom: 'opacity-0',
                  enterTo: 'opacity-100',
                  leave: 'ease-in duration-200',
                  leaveFrom: 'opacity-100',
                  leaveTo: 'opacity-0',
                  children: (0, o.jsx)('div', {
                    className:
                      'fixed inset-0 bg-custom-backdrop transition-opacity',
                  }),
                }),
                (0, o.jsx)('div', {
                  className: 'fixed inset-0 z-20 overflow-y-auto',
                  children: (0, o.jsx)('div', {
                    className:
                      'flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0',
                    children: (0, o.jsx)(ep.u.Child, {
                      as: l.Fragment,
                      enter: 'ease-out duration-300',
                      enterFrom:
                        'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
                      enterTo: 'opacity-100 translate-y-0 sm:scale-100',
                      leave: 'ease-in duration-200',
                      leaveFrom: 'opacity-100 translate-y-0 sm:scale-100',
                      leaveTo:
                        'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
                      children: (0, o.jsxs)(eb.V.Panel, {
                        className:
                          'relative transform overflow-hidden rounded-lg bg-custom-background-100 text-left shadow-custom-shadow-md transition-all sm:my-8 sm:w-[40rem]',
                        children: [
                          (0, o.jsx)('div', {
                            className: 'px-4 pb-4 pt-5 sm:p-6 sm:pb-4',
                            children: (0, o.jsx)('div', {
                              className: '',
                              children: (0, o.jsxs)('div', {
                                className: 'flex items-start gap-x-4',
                                children: [
                                  (0, o.jsx)('div', {
                                    className:
                                      'mt-3 grid place-items-center rounded-full bg-red-500/20 p-2 sm:mt-3 sm:p-2 md:mt-0 md:p-4 lg:mt-0 lg:p-4 ',
                                    children: (0, o.jsx)(eg.Z, {
                                      className:
                                        'h-4 w-4 text-red-600 sm:h-4 sm:w-4 md:h-6 md:w-6 lg:h-6 lg:w-6',
                                      'aria-hidden': 'true',
                                    }),
                                  }),
                                  (0, o.jsxs)('div', {
                                    children: [
                                      (0, o.jsx)(eb.V.Title, {
                                        as: 'h3',
                                        className:
                                          'my-4 text-2xl font-medium leading-6 text-custom-text-100',
                                        children: 'Deactivate your account?',
                                      }),
                                      (0, o.jsxs)('p', {
                                        className:
                                          'mt-6 list-disc pr-4 text-base font-normal text-custom-text-200',
                                        children: [
                                          'Once deactivated, you can',
                                          "'",
                                          't be assigned issues and be billed for your workspace.To reactivate your account, you will need an invite to a workspace at this email address.',
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, o.jsxs)('div', {
                            className:
                              'mb-2 flex items-center justify-end gap-2 p-4 sm:px-6',
                            children: [
                              (0, o.jsx)(j.zx, {
                                variant: 'neutral-primary',
                                onClick: r,
                                children: 'Cancel',
                              }),
                              (0, o.jsx)(j.zx, {
                                variant: 'danger',
                                onClick: u,
                                children: a ? 'Deactivating...' : 'Confirm',
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
        },
        ef = e => {
          let { isSignUp: t = !1 } = e;
          return (0, o.jsx)('span', {
            className: 'flex items-center justify-center py-6',
            children: (0, o.jsxs)('p', {
              className:
                'text-center text-sm text-onboarding-text-200 whitespace-pre-line',
              children: [
                t ? 'By creating an account' : 'By signing in',
                ', you agree to our',
                ' \n',
                (0, o.jsx)(c(), {
                  href: 'https://plane.so/legals/terms-and-conditions',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  children: (0, o.jsx)('span', {
                    className:
                      'text-sm font-medium underline hover:cursor-pointer',
                    children: 'Terms of Service',
                  }),
                }),
                ' ',
                'and',
                ' ',
                (0, o.jsx)(c(), {
                  href: 'https://plane.so/legals/privacy-policy',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  children: (0, o.jsx)('span', {
                    className:
                      'text-sm font-medium underline hover:cursor-pointer',
                    children: 'Privacy Policy',
                  }),
                }),
                '.',
              ],
            }),
          });
        };
    },
    89774: function (e, t, r) {
      'use strict';
      var a = r(27378),
        n = r(86677),
        s = r(10634);
      t.Z = () => {
        let [e, t] = (0, a.useState)(!0),
          [r, i] = (0, a.useState)(null),
          o = (0, n.useRouter)(),
          { next_path: l } = o.query,
          { fetchCurrentUser: d, fetchCurrentUserSettings: c } = (0, s.aF)(),
          { fetchWorkspaces: u } = (0, s.cF)(),
          m = e => !/^(https?|ftp):\/\//i.test(e),
          x = (0, a.useCallback)(
            async e => {
              try {
                var t, r;
                if (!e.is_onboarded) {
                  o.push('/onboarding');
                  return;
                }
                if (l) {
                  if (m(l.toString())) {
                    o.push(l.toString());
                    return;
                  }
                  o.push('/');
                  return;
                }
                let a = await c(),
                  n = await u(),
                  s =
                    (null == a
                      ? void 0
                      : null === (t = a.workspace) || void 0 === t
                        ? void 0
                        : t.last_workspace_slug) ||
                    (null == a
                      ? void 0
                      : null === (r = a.workspace) || void 0 === r
                        ? void 0
                        : r.fallback_workspace_slug);
                s && n && n.filter(e => e.slug === s).length > 0
                  ? o.push('/'.concat(s))
                  : o.push('/profile');
              } catch (e) {
                console.error('Error in handleSignInRedirection:', e), i(e);
              }
            },
            [c, u, o, l]
          );
        return {
          error: r,
          isRedirecting: e,
          handleRedirection: (0, a.useCallback)(async () => {
            t(!0),
              await d()
                .then(async e => {
                  await x(e)
                    .catch(e => i(e))
                    .finally(() => t(!1));
                })
                .catch(e => {
                  i(e), t(!1);
                });
          }, [d, x]),
        };
      };
    },
    74493: function (e, t, r) {
      'use strict';
      var a = r(27378);
      t.Z = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30,
          [t, r] = (0, a.useState)(e);
        return (
          (0, a.useEffect)(() => {
            let e = setInterval(() => {
              r(e => e - 1);
            }, 1e3);
            return () => clearInterval(e);
          }, []),
          { timer: t, setTimer: r }
        );
      };
    },
    43218: function (e, t, r) {
      e.exports = r(99793);
    },
  },
]);
