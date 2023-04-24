module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: '6c91451f5600493ca444bb2237104691',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Minghao Liang',
  domain: 'minghao-liang.top',
  author: 'Minghao Liang',

  // open graph metadata (optional)
  description: 'Minghao Liang\'s Homepage',

  // social usernames (optional)
  twitter: null,
  github: 'Minghao-Liang',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: 'Minghao-Liang/awesome-nextjs-notion-blog',
  utterancesGitHubLabel: '博客评论',

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // set null to remove from year
  copyRightFromYear: 2023,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/post-list': 'db15511153af417289d98581e63fae09?v=d1824ac2063f4c3d82eadc844f5cd00a',
  // },
  showPageAsideSocials: false,
  footCounterList: [
    '6c91451f5600493ca444bb2237104691'
  ]
}
