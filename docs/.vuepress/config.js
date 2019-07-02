module.exports = {
  title: 'Arable API Documentation',
  description: 'At A Scale That Won’t Weigh You Down',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    logo: '/logo.svg',
    // sidebarGroupOrder: [
    //   'authentication',
    //   'pagination'
    // ],
    nav: [
        { text: 'Guide', link: '/guide'},
        { text: 'FAQ', link: '/faq'},
        { text: 'API Doc', link: 'https://api-user.arable.cloud/api/v2/doc'},
        { text: 'Something else', items: [
            { text: 'Guide', link: '/guide'},
            { text: 'FAQ', link: '/faq'},
            { text: 'API Doc', link: 'https://api-user.arable.cloud/api/v2/doc'},
        ]},
    ],
    searchMaxSuggestions: 10,
    sidebar: 'auto',  // add sitebar to all pages
    // sidebar: [
    //   {
    //     title: 'authentication',
    //     collapsable: false,
    //     children: [
    //       '/howto1',
    //       '/howto2',
    //     ]
    //   },
    //   {
    //     title: 'pagination',
    //     collapsable: false,
    //     children: [
    //       '/howto1',
    //       '/howto2',
    //     ]
    //   },
    // ],
    lastUpdated: true,
    // if your docs are in a different repo from your main project:
    docsRepo: 'Arable/developer.arable.com',
    // if your docs are not at the root of the repo:
    docsDir: 'docs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'master',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Edit this page',
    serviceWorker: {
      updatePopup: true // Boolean | Object, default to undefined.
      // If set to true, the default text config will be:
      // updatePopup: {
      //    message: "New content is available.",
      //    buttonText: "Refresh"
      // }
    },
  }  
}
