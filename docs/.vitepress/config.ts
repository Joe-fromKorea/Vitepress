import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Jokipedia2",
  description: "Knowledges",
  themeConfig: {
    outlineTitle: 'In this page',
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/About/About' },
      { text: 'Knowledges', link: '/Knowledges/Knowledges' },
      { text: 'Projects', link: '/Projects/Projects' },
      { text: 'Experiences', link: '/Experiences/Experiences' }
    ],

    sidebar: {
      // This sidebar gets displayed when a user
      // is on `guide` directory.
      '/Projects/': [
        {
          text: 'RC Plane',
          collapsed: true,
          items: [
            { text: 'Making F-35 RC Plane',
            collapsed: true, 
            items: [
              {
              text: 'first', link: '/'
            }
          ],
            link: '/Projects/subgroup/Making F-35 RC Plane' },
            { text: 'Making V-22 Osprey RC Plane', link: '/Projects/subgroup/Making V-22 Osprey RC Plane' },
            { text: 'Two', link: '/guide/two' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `config` directory.
      '/config/': [
        {
          text: 'Config',
          items: [
            { text: 'Index', link: '/config/' },
            { text: 'Three', link: '/config/three' },
            { text: 'Four', link: '/config/four' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },

})
