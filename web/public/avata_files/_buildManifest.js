(self.__BUILD_MANIFEST = (function (
  s,
  e,
  c,
  t,
  a,
  o,
  r,
  p,
  i,
  g,
  u,
  d,
  k,
  j,
  l,
  n,
  w,
  S,
  f,
  h
) {
  return {
    __rewrites: {
      afterFiles: [
        { has: n, source: '/ingest/static/:path*', destination: n },
        { has: n, source: '/ingest/:path*', destination: n },
      ],
      beforeFiles: [],
      fallback: [],
    },
    '/': [
      s,
      e,
      c,
      r,
      t,
      p,
      a,
      i,
      w,
      S,
      f,
      'static/chunks/pages/index-5c78a8525ed4e68e.js',
    ],
    '/404': [s, e, c, t, a, 'static/chunks/pages/404-6d60fdbfc40faccf.js'],
    '/_error': ['static/chunks/pages/_error-f583a81ab9ce2521.js'],
    '/accounts/forgot-password': [
      s,
      e,
      c,
      t,
      a,
      'static/chunks/pages/accounts/forgot-password-bccfdde00726c20f.js',
    ],
    '/accounts/reset-password': [
      s,
      e,
      c,
      t,
      a,
      'static/chunks/pages/accounts/reset-password-6962d37f7b88526c.js',
    ],
    '/accounts/sign-up': [
      s,
      e,
      c,
      t,
      a,
      w,
      'static/chunks/pages/accounts/sign-up-71c2e48e90349501.js',
    ],
    '/create-workspace': [
      s,
      e,
      c,
      r,
      t,
      p,
      a,
      o,
      i,
      d,
      'static/chunks/pages/create-workspace-5602bb98f5976fd7.js',
    ],
    '/god-mode': [
      s,
      e,
      c,
      t,
      a,
      o,
      'static/chunks/pages/god-mode-4db71d408bd36afa.js',
    ],
    '/god-mode/ai': [
      s,
      e,
      c,
      t,
      a,
      o,
      'static/chunks/pages/god-mode/ai-d6e47a794754a0ea.js',
    ],
    '/god-mode/authorization': [
      s,
      e,
      c,
      t,
      a,
      o,
      'static/chunks/pages/god-mode/authorization-58a576cdc137bfd5.js',
    ],
    '/god-mode/email': [
      s,
      e,
      c,
      t,
      a,
      o,
      'static/chunks/pages/god-mode/email-e19b9d51e89fad26.js',
    ],
    '/god-mode/image': [
      s,
      e,
      c,
      t,
      a,
      o,
      'static/chunks/pages/god-mode/image-5a1f4e0084573022.js',
    ],
    '/installations/[provider]': [
      'static/chunks/pages/installations/[provider]-0aea4faf59869b82.js',
    ],
    '/invitations': [
      s,
      e,
      c,
      t,
      a,
      o,
      'static/chunks/pages/invitations-7a82373f6bfd313c.js',
    ],
    '/onboarding': [
      s,
      e,
      c,
      t,
      a,
      o,
      S,
      'static/chunks/pages/onboarding-ce371c9b075d5dd9.js',
    ],
    '/profile': [
      s,
      e,
      c,
      r,
      t,
      p,
      g,
      a,
      o,
      i,
      u,
      j,
      w,
      'static/chunks/pages/profile-58faf2d5f140cb9b.js',
    ],
    '/profile/activity': [
      s,
      e,
      c,
      r,
      t,
      p,
      g,
      a,
      o,
      i,
      u,
      j,
      l,
      'static/chunks/pages/profile/activity-d00f359bfc8ff5f6.js',
    ],
    '/profile/change-password': [
      s,
      e,
      c,
      r,
      t,
      p,
      g,
      a,
      o,
      i,
      u,
      j,
      'static/chunks/pages/profile/change-password-74f5939ca8abde69.js',
    ],
    '/profile/preferences/email': [
      s,
      e,
      c,
      r,
      t,
      p,
      g,
      a,
      o,
      i,
      u,
      j,
      'static/chunks/pages/profile/preferences/email-9ad7fdb2c856dc08.js',
    ],
    '/profile/preferences/theme': [
      s,
      e,
      c,
      r,
      t,
      p,
      g,
      a,
      o,
      i,
      u,
      j,
      'static/chunks/pages/profile/preferences/theme-b3b186df1d690fbc.js',
    ],
    '/workspace-invitations': [
      'static/chunks/pages/workspace-invitations-e3199a0a90e71ccd.js',
    ],
    '/[workspaceSlug]': [
      s,
      e,
      c,
      r,
      t,
      p,
      g,
      a,
      o,
      i,
      u,
      d,
      w,
      S,
      f,
      'static/chunks/pages/[workspaceSlug]-3a1f7e877caf397f.js',
    ],
    '/[workspaceSlug]/active-cycles': [
      s,
      e,
      c,
      r,
      t,
      p,
      g,
      a,
      o,
      i,
      u,
      d,
      k,
      'static/chunks/pages/[workspaceSlug]/active-cycles-7001b68918140e43.js',
    ],
    '/[workspaceSlug]/analytics': [
      s,
      e,
      c,
      r,
      t,
      p,
      g,
      a,
      o,
      i,
      u,
      d,
      k,
      'static/chunks/pages/[workspaceSlug]/analytics-3a230297acaf3422.js',
    ],
    '/[workspaceSlug]/profile/[userId]': [
      s,
      e,
      c,
      r,
      t,
      p,
      g,
      a,
      o,
      i,
      u,
      d,
      k,
      l,
      'static/chunks/pages/[workspaceSlug]/profile/[userId]-c1c2e4e00d8c805a.js',
    ],
    '/[workspaceSlug]/profile/[userId]/activity': [
      s,
      e,
      c,
      r,
      t,
      p,
      g,
      a,
      o,
      i,
      u,
      d,
      k,
      l,
      'static/chunks/pages/[workspaceSlug]/profile/[userId]/activity-71b23fd3026d2f86.js',
    ],
    '/[workspaceSlug]/profile/[userId]/assigned': [
      s,
      e,
      c,
      r,
      t,
      p,
      g,
      a,
      o,
      i,
      u,
      d,
      k,
      l,
      'static/chunks/pages/[workspaceSlug]/profile/[userId]/assigned-81bc91cc17471d41.js',
    ],
    '/[workspaceSlug]/profile/[userId]/created': [
      s,
      e,
      c,
      r,
      t,
      p,
      g,
      a,
      o,
      i,
      u,
      d,
      k,
      l,
      'static/chunks/pages/[workspaceSlug]/profile/[userId]/created-fc9ede7c9841e825.js',
    ],
    '/[workspaceSlug]/profile/[userId]/subscribed': [
      s,
      e,
      c,
      r,
      t,
      p,
      g,
      a,
      o,
      i,
      u,
      d,
      k,
      l,
      'static/chunks/pages/[workspaceSlug]/profile/[userId]/subscribed-aa70026c63881257.js',
    ],
    '/[workspaceSlug]/projects': [
      s,
      e,
      c,
      r,
      t,
      p,
      g,
      a,
      o,
      i,
      u,
      d,
      k,
      'static/chunks/pages/[workspaceSlug]/projects-a20c3d7e42299d95.js',
    ],
    '/[workspaceSlug]/projects/[projectId]/archives/cycles': [
      s,
      e,
      c,
      r,
      t,
      p,
      g,
      a,
      o,
      i,
      u,
      d,
      k,
      'static/chunks/pages/[workspaceSlug]/projects/[projectId]/archives/cycles-70e81ed9ea42af12.js',
    ],
    '/[workspaceSlug]/projects/[projectId]/archives/issues': [
      s,
      e,
      c,
      r,
      t,
      p,
      g,
      a,
      o,
      i,
      u,
      d,
      k,
      'static/chunks/pages/[workspaceSlug]/projects/[projectId]/archives/issues-f3baf0257d6e73ee.js',
    ],
    '/[workspaceSlug]/projects/[projectId]/archives/issues/[archivedIssueId]': [
      s,
      e,
      c,
      r,
      t,
      p,
      g,
      a,
      o,
      i,
      u,
      d,
      k,
      'static/chunks/pages/[workspaceSlug]/projects/[projectId]/archives/issues/[archivedIssueId]-4d5ba7e1b865a271.js',
    ],
    '/[workspaceSlug]/projects/[projectId]/archives/modules': [
      s,
      e,
      c,
      r,
      t,
      p,
      g,
      a,
      o,
      i,
      u,
      d,
      k,
      'static/chunks/pages/[workspaceSlug]/projects/[projectId]/archives/modules-ded5548e7123e162.js',
    ],
    '/[workspaceSlug]/projects/[projectId]/cycles': [
      s,
      e,
      c,
      r,
      t,
      p,
      g,
      a,
      o,
      i,
      u,
      d,
      k,
      'static/chunks/pages/[workspaceSlug]/projects/[projectId]/cycles-f3c46300f3eab1dc.js',
    ],
    '/[workspaceSlug]/projects/[projectId]/cycles/[cycleId]': [
      s,
      e,
      c,
      r,
      t,
      p,
      g,
      a,
      o,
      i,
      u,
      d,
      k,
      'static/chunks/pages/[workspaceSlug]/projects/[projectId]/cycles/[cycleId]-6de824edc3cb870b.js',
    ],
    '/[workspaceSlug]/projects/[projectId]/draft-issues': [
      s,
      e,
      c,
      r,
      t,
      p,
      g,
      a,
      o,
      i,
      u,
      d,
      k,
      'static/chunks/pages/[workspaceSlug]/projects/[projectId]/draft-issues-67ba003ad24ee93f.js',
    ],
    '/[workspaceSlug]/projects/[projectId]/inbox': [
      s,
      e,
      c,
      r,
      t,
      p,
      g,
      a,
      o,
      i,
      u,
      d,
      k,
      'static/chunks/pages/[workspaceSlug]/projects/[projectId]/inbox-d23cdf7d17dca53b.js',
    ],
    '/[workspaceSlug]/projects/[projectId]/issues': [
      s,
      e,
      c,
      r,
      t,
      p,
      g,
      a,
      o,
      i,
      u,
      d,
      k,
      'static/chunks/pages/[workspaceSlug]/projects/[projectId]/issues-f0dcca3561d75935.js',
    ],
    '/[workspaceSlug]/projects/[projectId]/issues/[issueId]': [
      s,
      e,
      c,
      r,
      t,
      p,
      g,
      a,
      o,
      i,
      u,
      d,
      k,
      'static/chunks/pages/[workspaceSlug]/projects/[projectId]/issues/[issueId]-f3bd66676efa3ee9.js',
    ],
    '/[workspaceSlug]/projects/[projectId]/modules': [
      s,
      e,
      c,
      r,
      t,
      p,
      g,
      a,
      o,
      i,
      u,
      d,
      k,
      'static/chunks/pages/[workspaceSlug]/projects/[projectId]/modules-10842968d23f176a.js',
    ],
    '/[workspaceSlug]/projects/[projectId]/modules/[moduleId]': [
      s,
      e,
      c,
      r,
      t,
      p,
      g,
      a,
      o,
      i,
      u,
      d,
      k,
      'static/chunks/pages/[workspaceSlug]/projects/[projectId]/modules/[moduleId]-e159d54d0fc66632.js',
    ],
    '/[workspaceSlug]/projects/[projectId]/pages': [
      s,
      e,
      c,
      r,
      t,
      p,
      g,
      a,
      o,
      i,
      u,
      d,
      k,
      'static/chunks/pages/[workspaceSlug]/projects/[projectId]/pages-21826fb8d35df143.js',
    ],
    '/[workspaceSlug]/projects/[projectId]/pages/[pageId]': [
      s,
      e,
      c,
      r,
      t,
      p,
      g,
      a,
      o,
      i,
      u,
      d,
      k,
      'static/chunks/pages/[workspaceSlug]/projects/[projectId]/pages/[pageId]-d01bf7c25f9bc1cb.js',
    ],
    '/[workspaceSlug]/projects/[projectId]/settings': [
      s,
      e,
      c,
      r,
      t,
      p,
      g,
      a,
      o,
      i,
      u,
      d,
      k,
      j,
      'static/chunks/pages/[workspaceSlug]/projects/[projectId]/settings-6035910555590015.js',
    ],
    '/[workspaceSlug]/projects/[projectId]/settings/automations': [
      s,
      e,
      c,
      r,
      t,
      p,
      g,
      a,
      o,
      i,
      u,
      d,
      k,
      j,
      'static/chunks/pages/[workspaceSlug]/projects/[projectId]/settings/automations-ead9328aad3d0777.js',
    ],
    '/[workspaceSlug]/projects/[projectId]/settings/estimates': [
      s,
      e,
      c,
      r,
      t,
      p,
      g,
      a,
      o,
      i,
      u,
      d,
      k,
      j,
      'static/chunks/pages/[workspaceSlug]/projects/[projectId]/settings/estimates-a4608f91da8e4915.js',
    ],
    '/[workspaceSlug]/projects/[projectId]/settings/features': [
      s,
      e,
      c,
      r,
      t,
      p,
      g,
      a,
      o,
      i,
      u,
      d,
      k,
      j,
      'static/chunks/pages/[workspaceSlug]/projects/[projectId]/settings/features-55c976dda8666bf6.js',
    ],
    '/[workspaceSlug]/projects/[projectId]/settings/integrations': [
      s,
      e,
      c,
      r,
      t,
      p,
      g,
      a,
      o,
      i,
      u,
      d,
      k,
      j,
      'static/chunks/pages/[workspaceSlug]/projects/[projectId]/settings/integrations-359be1b4128a9a4f.js',
    ],
    '/[workspaceSlug]/projects/[projectId]/settings/labels': [
      s,
      e,
      c,
      r,
      t,
      p,
      g,
      a,
      o,
      i,
      u,
      d,
      k,
      j,
      'static/chunks/pages/[workspaceSlug]/projects/[projectId]/settings/labels-a7798bc2a184cd95.js',
    ],
    '/[workspaceSlug]/projects/[projectId]/settings/members': [
      s,
      e,
      c,
      r,
      t,
      p,
      g,
      a,
      o,
      i,
      u,
      d,
      k,
      j,
      'static/chunks/pages/[workspaceSlug]/projects/[projectId]/settings/members-7439cf8983529e84.js',
    ],
    '/[workspaceSlug]/projects/[projectId]/settings/states': [
      s,
      e,
      c,
      r,
      t,
      p,
      g,
      a,
      o,
      i,
      u,
      d,
      k,
      j,
      'static/chunks/pages/[workspaceSlug]/projects/[projectId]/settings/states-4d84a82cdd29d0b7.js',
    ],
    '/[workspaceSlug]/projects/[projectId]/views': [
      s,
      e,
      c,
      r,
      t,
      p,
      g,
      a,
      o,
      i,
      u,
      d,
      k,
      'static/chunks/pages/[workspaceSlug]/projects/[projectId]/views-cfdca76880c49e5a.js',
    ],
    '/[workspaceSlug]/projects/[projectId]/views/[viewId]': [
      s,
      e,
      c,
      r,
      t,
      p,
      g,
      a,
      o,
      i,
      u,
      d,
      k,
      'static/chunks/pages/[workspaceSlug]/projects/[projectId]/views/[viewId]-8c727b49e651a09a.js',
    ],
    '/[workspaceSlug]/settings': [
      s,
      e,
      c,
      r,
      t,
      p,
      g,
      a,
      o,
      i,
      u,
      d,
      k,
      j,
      'static/chunks/pages/[workspaceSlug]/settings-c4bb388cbdf8307a.js',
    ],
    '/[workspaceSlug]/settings/api-tokens': [
      s,
      e,
      c,
      r,
      t,
      p,
      g,
      a,
      o,
      i,
      u,
      d,
      k,
      j,
      'static/chunks/pages/[workspaceSlug]/settings/api-tokens-5fffd4f4c6a2cb8c.js',
    ],
    '/[workspaceSlug]/settings/billing': [
      s,
      e,
      c,
      r,
      t,
      p,
      g,
      a,
      o,
      i,
      u,
      d,
      k,
      j,
      'static/chunks/pages/[workspaceSlug]/settings/billing-652b2c127dc55689.js',
    ],
    '/[workspaceSlug]/settings/exports': [
      s,
      e,
      c,
      r,
      t,
      p,
      g,
      a,
      o,
      i,
      u,
      d,
      k,
      j,
      'static/chunks/pages/[workspaceSlug]/settings/exports-c5acc77cd311105a.js',
    ],
    '/[workspaceSlug]/settings/imports': [
      s,
      e,
      c,
      r,
      t,
      p,
      g,
      a,
      o,
      i,
      u,
      d,
      k,
      j,
      'static/chunks/pages/[workspaceSlug]/settings/imports-7ec2d663cd54f7d1.js',
    ],
    '/[workspaceSlug]/settings/integrations': [
      s,
      e,
      c,
      r,
      t,
      p,
      g,
      a,
      o,
      i,
      u,
      d,
      k,
      j,
      'static/chunks/pages/[workspaceSlug]/settings/integrations-a46bbad25716143a.js',
    ],
    '/[workspaceSlug]/settings/members': [
      s,
      e,
      c,
      r,
      t,
      p,
      g,
      a,
      o,
      i,
      u,
      d,
      k,
      j,
      'static/chunks/pages/[workspaceSlug]/settings/members-31412ee6d52f4a2f.js',
    ],
    '/[workspaceSlug]/settings/webhooks': [
      s,
      e,
      c,
      r,
      t,
      p,
      g,
      a,
      o,
      i,
      u,
      d,
      k,
      j,
      h,
      'static/chunks/pages/[workspaceSlug]/settings/webhooks-24942198444dc462.js',
    ],
    '/[workspaceSlug]/settings/webhooks/[webhookId]': [
      s,
      e,
      c,
      r,
      t,
      p,
      g,
      a,
      o,
      i,
      u,
      d,
      k,
      j,
      h,
      'static/chunks/pages/[workspaceSlug]/settings/webhooks/[webhookId]-1c5e00b8069842ba.js',
    ],
    '/[workspaceSlug]/workspace-views': [
      s,
      e,
      c,
      r,
      t,
      p,
      g,
      a,
      o,
      i,
      u,
      d,
      k,
      'static/chunks/pages/[workspaceSlug]/workspace-views-33ff66d0a85e55d6.js',
    ],
    '/[workspaceSlug]/workspace-views/[globalViewId]': [
      s,
      e,
      c,
      r,
      t,
      p,
      g,
      a,
      o,
      i,
      u,
      d,
      k,
      'static/chunks/pages/[workspaceSlug]/workspace-views/[globalViewId]-e51637f2fe65820f.js',
    ],
    sortedPages: [
      '/',
      '/404',
      '/_app',
      '/_error',
      '/accounts/forgot-password',
      '/accounts/reset-password',
      '/accounts/sign-up',
      '/create-workspace',
      '/god-mode',
      '/god-mode/ai',
      '/god-mode/authorization',
      '/god-mode/email',
      '/god-mode/image',
      '/installations/[provider]',
      '/invitations',
      '/onboarding',
      '/profile',
      '/profile/activity',
      '/profile/change-password',
      '/profile/preferences/email',
      '/profile/preferences/theme',
      '/workspace-invitations',
      '/[workspaceSlug]',
      '/[workspaceSlug]/active-cycles',
      '/[workspaceSlug]/analytics',
      '/[workspaceSlug]/profile/[userId]',
      '/[workspaceSlug]/profile/[userId]/activity',
      '/[workspaceSlug]/profile/[userId]/assigned',
      '/[workspaceSlug]/profile/[userId]/created',
      '/[workspaceSlug]/profile/[userId]/subscribed',
      '/[workspaceSlug]/projects',
      '/[workspaceSlug]/projects/[projectId]/archives/cycles',
      '/[workspaceSlug]/projects/[projectId]/archives/issues',
      '/[workspaceSlug]/projects/[projectId]/archives/issues/[archivedIssueId]',
      '/[workspaceSlug]/projects/[projectId]/archives/modules',
      '/[workspaceSlug]/projects/[projectId]/cycles',
      '/[workspaceSlug]/projects/[projectId]/cycles/[cycleId]',
      '/[workspaceSlug]/projects/[projectId]/draft-issues',
      '/[workspaceSlug]/projects/[projectId]/inbox',
      '/[workspaceSlug]/projects/[projectId]/issues',
      '/[workspaceSlug]/projects/[projectId]/issues/[issueId]',
      '/[workspaceSlug]/projects/[projectId]/modules',
      '/[workspaceSlug]/projects/[projectId]/modules/[moduleId]',
      '/[workspaceSlug]/projects/[projectId]/pages',
      '/[workspaceSlug]/projects/[projectId]/pages/[pageId]',
      '/[workspaceSlug]/projects/[projectId]/settings',
      '/[workspaceSlug]/projects/[projectId]/settings/automations',
      '/[workspaceSlug]/projects/[projectId]/settings/estimates',
      '/[workspaceSlug]/projects/[projectId]/settings/features',
      '/[workspaceSlug]/projects/[projectId]/settings/integrations',
      '/[workspaceSlug]/projects/[projectId]/settings/labels',
      '/[workspaceSlug]/projects/[projectId]/settings/members',
      '/[workspaceSlug]/projects/[projectId]/settings/states',
      '/[workspaceSlug]/projects/[projectId]/views',
      '/[workspaceSlug]/projects/[projectId]/views/[viewId]',
      '/[workspaceSlug]/settings',
      '/[workspaceSlug]/settings/api-tokens',
      '/[workspaceSlug]/settings/billing',
      '/[workspaceSlug]/settings/exports',
      '/[workspaceSlug]/settings/imports',
      '/[workspaceSlug]/settings/integrations',
      '/[workspaceSlug]/settings/members',
      '/[workspaceSlug]/settings/webhooks',
      '/[workspaceSlug]/settings/webhooks/[webhookId]',
      '/[workspaceSlug]/workspace-views',
      '/[workspaceSlug]/workspace-views/[globalViewId]',
    ],
  };
})(
  'static/chunks/88d491b7-d8d705e352fffd27.js',
  'static/chunks/b1c4d607-a6c1cf41aa938cea.js',
  'static/chunks/849baa33-fc4950f54d0ccf57.js',
  'static/chunks/4499-548b9af5cba22ec6.js',
  'static/chunks/1077-dbc4aa9f75284615.js',
  'static/chunks/384-8acad93abeeb3532.js',
  'static/chunks/3c425cc6-057c4207c83f5804.js',
  'static/chunks/860-667648a3bc6cee5f.js',
  'static/chunks/8114-a1089ab808be2791.js',
  'static/chunks/8797-b06fe1a0ef4de786.js',
  'static/chunks/3484-2bfce2649fa628f0.js',
  'static/chunks/6936-67b5e6d16cbf1239.js',
  'static/chunks/4963-d877921f8ecd3c45.js',
  'static/chunks/2335-a03d0082d1e3a727.js',
  'static/chunks/5786-32a901727560a9b9.js',
  void 0,
  'static/chunks/612-c43d0431c7a7db09.js',
  'static/chunks/2471-9c7c92b63284e697.js',
  'static/chunks/1591-bbdf9e769d4e182d.js',
  'static/chunks/9492-94b6a58f0f3f5edb.js'
)),
  self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
