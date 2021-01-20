export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6007e0531341479477b30d23',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-studio-5nhkfcwg',
                  apiId: 'a695018d-be0c-4725-9a24-1fbe79513df6'
                },
                {
                  buildHookId: '6007e054e3fa928d7c2e903b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-web-i1a4pp7p',
                  apiId: '5dcbfd04-5fcc-4dad-b4b6-610352d137e9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kostyakostya61/sanity-nextjs',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-web-i1a4pp7p.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
