import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Jokipedia",
  description: "Knowledge",
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
      { text: 'Experiences', link: '/Experiences/Experiences' },
      { text: 'Donation', link: 'https://www.patreon.com/WikipediaJo/creators' }
    ],

    sidebar: {
      // This sidebar gets displayed when a user
      // is on `guide` directory.
      '/About/': [
        //About
        {
          text: 'About', link: '/About/About',
        },
        //About me
        {
          text: 'About me',
          collapsed: true,
          items: [
            { text: 'F-35 RC Plane',
            collapsed: true, 
            items: [
              {text: 'Planning', link: '/Projects/subgroup/F-35/Planning F-35'},
              {text: 'How it works', link: '/Projects/subgroup/F-35/How It Works'},
              {text: 'Making', link: '/Projects/subgroup/F-35/Making F-35'},
              {text: 'What We&#39;ve Learned', link: '/Projects/subgroup/F-35/What We Learned'}
            
          ],
            link: '/Projects/subgroup/F-35/Planning F-35' },
            { text: 'Making V-22 Osprey RC Plane', link: '/Projects/subgroup/Making V-22 Osprey RC Plane' },
            { text: 'Two', link: '/guide/two' }
          ]
        },
        //Contact
        {
          text: 'Contact',
          collapsed: true,
          items: [
            { text: 'F-35 RC Plane',
            collapsed: true, 
            items: [
              {text: 'Planning', link: '/Projects/subgroup/F-35/Planning F-35'},
              {text: 'How it works', link: '/Projects/subgroup/F-35/How It Works'},
              {text: 'Making', link: '/Projects/subgroup/F-35/Making F-35'},
              {text: 'What We&#39;ve Learned', link: '/Projects/subgroup/F-35/What We Learned'}
            
          ],
            link: '/Projects/subgroup/F-35/Planning F-35' },
            { text: 'Making V-22 Osprey RC Plane', link: '/Projects/subgroup/Making V-22 Osprey RC Plane' },
            { text: 'Two', link: '/guide/two' }
          ]
        }
      ],
      '/Projects/': [
        {
          text: 'RC Plane',
          collapsed: true,
          items: [
            { text: 'F-35 RC Plane',
            collapsed: true, 
            items: [
              {text: 'Planning', link: '/Projects/subgroup/F-35/Planning F-35'},
              {text: 'How it works', link: '/Projects/subgroup/F-35/How It Works'},
              {text: 'Making', link: '/Projects/subgroup/F-35/Making F-35'},
              {text: 'What We&#39;ve Learned', link: '/Projects/subgroup/F-35/What We Learned'}
            
          ],
            link: '/Projects/subgroup/F-35/Planning F-35' },
            { text: 'Making V-22 Osprey RC Plane', link: '/Projects/subgroup/Making V-22 Osprey RC Plane' },
            { text: 'Two', link: '/guide/two' }
          ]
        }
      ],

      '/Knowledges/': [
        //Academic 
        {
          text: 'Academic',
          collapsed: true,
          items: [
            { text: 'F-35 RC Plane',
            collapsed: true, 
            items: [
              {text: 'Planning', link: '/Projects/subgroup/F-35/Planning F-35'},
              {text: 'How it works', link: '/Projects/subgroup/F-35/How It Works'},
              {text: 'Making', link: '/Projects/subgroup/F-35/Making F-35'},
              {text: 'What We&#39;ve Learned', link: '/Projects/subgroup/F-35/What We Learned'}
            
          ],
            link: '/Projects/subgroup/F-35/Planning F-35' },
            { text: 'Making V-22 Osprey RC Plane', link: '/Projects/subgroup/Making V-22 Osprey RC Plane' },
            { text: 'Two', link: '/guide/two' }
          ]
        },
        //Music
        {
          text: 'Music',
          collapsed: true,
          items: [
            { text: 'F-35 RC Plane',
            collapsed: true, 
            items: [
              {text: 'Planning', link: '/Projects/subgroup/F-35/Planning F-35'},
              {text: 'How it works', link: '/Projects/subgroup/F-35/How It Works'},
              {text: 'Making', link: '/Projects/subgroup/F-35/Making F-35'},
              {text: 'What We&#39;ve Learned', link: '/Projects/subgroup/F-35/What We Learned'}
            
          ],
            link: '/Projects/subgroup/F-35/Planning F-35' },
            { text: 'Making V-22 Osprey RC Plane', link: '/Projects/subgroup/Making V-22 Osprey RC Plane' },
            { text: 'Two', link: '/guide/two' }
          ]
        },
        //Basketball
        {
          text: 'Basketball',
          collapsed: true,
          items: [
            { text: 'F-35 RC Plane',
            collapsed: true, 
            items: [
              {text: 'Planning', link: '/Projects/subgroup/F-35/Planning F-35'},
              {text: 'How it works', link: '/Projects/subgroup/F-35/How It Works'},
              {text: 'Making', link: '/Projects/subgroup/F-35/Making F-35'},
              {text: 'What We&#39;ve Learned', link: '/Projects/subgroup/F-35/What We Learned'}
            
          ],
            link: '/Projects/subgroup/F-35/Planning F-35' },
            { text: 'Making V-22 Osprey RC Plane', link: '/Projects/subgroup/Making V-22 Osprey RC Plane' },
            { text: 'Two', link: '/guide/two' }
          ]
        },
        //Engineering
        {
          text: 'Engineering',
          collapsed: true,
          items: [
            { text: 'F-35 RC Plane',
            collapsed: true, 
            items: [
              {text: 'Planning', link: '/Projects/subgroup/F-35/Planning F-35'},
              {text: 'How it works', link: '/Projects/subgroup/F-35/How It Works'},
              {text: 'Making', link: '/Projects/subgroup/F-35/Making F-35'},
              {text: 'What We&#39;ve Learned', link: '/Projects/subgroup/F-35/What We Learned'}
            
          ],
            link: '/Projects/subgroup/F-35/Planning F-35' },
            { text: 'Making V-22 Osprey RC Plane', link: '/Projects/subgroup/Making V-22 Osprey RC Plane' },
            { text: 'Two', link: '/guide/two' }
          ]
        }
      ],

      '/Experiences/': [
        //Pre-K
        {
          text: 'Pre-K',
          collapsed: true,
          items: [
            { text: 'F-35 RC Plane',
            collapsed: true, 
            items: [
              {text: 'Planning', link: '/Projects/subgroup/F-35/Planning F-35'},
              {text: 'How it works', link: '/Projects/subgroup/F-35/How It Works'},
              {text: 'Making', link: '/Projects/subgroup/F-35/Making F-35'},
              {text: 'What We&#39;ve Learned', link: '/Projects/subgroup/F-35/What We Learned'}
            
          ],
            link: '/Projects/subgroup/F-35/Planning F-35' },
            { text: 'Making V-22 Osprey RC Plane', link: '/Projects/subgroup/Making V-22 Osprey RC Plane' },
            { text: 'Two', link: '/guide/two' }
          ]
        },
        //Kindergarten
        {
          text: 'Kindergarten',
          collapsed: true,
          items: [
            { text: 'F-35 RC Plane',
            collapsed: true, 
            items: [
              {text: 'Planning', link: '/Projects/subgroup/F-35/Planning F-35'},
              {text: 'How it works', link: '/Projects/subgroup/F-35/How It Works'},
              {text: 'Making', link: '/Projects/subgroup/F-35/Making F-35'},
              {text: 'What We&#39;ve Learned', link: '/Projects/subgroup/F-35/What We Learned'}
            
          ],
            link: '/Projects/subgroup/F-35/Planning F-35' },
            { text: 'Making V-22 Osprey RC Plane', link: '/Projects/subgroup/Making V-22 Osprey RC Plane' },
            { text: 'Two', link: '/guide/two' }
          ]
        },
        //Elementry
        {
          text: 'Elementry',
          collapsed: true,
          items: [
            { text: 'F-35 RC Plane',
            collapsed: true, 
            items: [
              {text: 'Planning', link: '/Projects/subgroup/F-35/Planning F-35'},
              {text: 'How it works', link: '/Projects/subgroup/F-35/How It Works'},
              {text: 'Making', link: '/Projects/subgroup/F-35/Making F-35'},
              {text: 'What We&#39;ve Learned', link: '/Projects/subgroup/F-35/What We Learned'}
            
          ],
            link: '/Projects/subgroup/F-35/Planning F-35' },
            { text: 'Making V-22 Osprey RC Plane', link: '/Projects/subgroup/Making V-22 Osprey RC Plane' },
            { text: 'Two', link: '/guide/two' }
          ]
        },
        //Middle
        {
          text: 'Middle',
          collapsed: true,
          items: [
            { text: 'F-35 RC Plane',
            collapsed: true, 
            items: [
              {text: 'Planning', link: '/Projects/subgroup/F-35/Planning F-35'},
              {text: 'How it works', link: '/Projects/subgroup/F-35/How It Works'},
              {text: 'Making', link: '/Projects/subgroup/F-35/Making F-35'},
              {text: 'What We&#39;ve Learned', link: '/Projects/subgroup/F-35/What We Learned'}
            
          ],
            link: '/Projects/subgroup/F-35/Planning F-35' },
            { text: 'Making V-22 Osprey RC Plane', link: '/Projects/subgroup/Making V-22 Osprey RC Plane' },
            { text: 'Two', link: '/guide/two' }
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/seongwoo-jo-a01b15223/' },
      { icon: 'instagram', link: 'https://www.instagram.com/seongwoo0517/' },
      { icon: 'youtube', link: 'https://www.youtube.com/channel/UCrt6CKGAe5jvGL2j5uuWqHg' }
    ]
  },

})
