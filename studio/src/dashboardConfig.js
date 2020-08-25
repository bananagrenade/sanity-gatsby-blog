export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f446d62557cad3ed2e554bd',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-8aurxiqa',
                  apiId: 'be5a839c-8c68-4551-9d85-230d973f2fda'
                },
                {
                  buildHookId: '5f446d62baf113fc3a43c1f5',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-x436gsub',
                  apiId: '54b73be6-5013-4f09-a327-d069836e2cf0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bananagrenade/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-x436gsub.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
