import { defineConfig } from 'vitepress'

import mathjax3 from 'markdown-it-mathjax3';

const customElements = ['mjx-container'];

// https://vitepress.dev/reference/site-config
export default /*defineConfig*/({
  title: "Jokipedia",
  description: "Knowledge",
  ignoreDeadLinks: true,
  themeConfig: {
    outlineTitle: 'In this page',
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/About/About' },
      { text: 'Knowledge', link: '/Knowledge/Knowledge' },
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
          text: 'About', collapsed: true, link: '/About/About', 
          items:[
            {text: 'Purpose', link: '/About/subgroup/Purpose'},
            {text: 'Configuration', link: '/About/subgroup/Configuration'}
          ]
        },
        //About me
        {
          text: 'About me', link: '/About/Aboutme',
          items:[{
            items:[]
          }]     
        },
        //Contact
        {
          text: 'Contact', link: '/About/Contact',
          items: [{
            items:[]
          }]
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

      '/Knowledge/': [
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
            { text: 'Opera', /*link: '/Projects/subgroup/F-35/Planning F-35'*/
            collapsed: true, 
            items: [
              {text: 'The Magic Flute', link: '/Knowledge/subgroup/Music/Opera/The_Magic_Flute'},
              {text: 'La Boheme', link: '/Knowledge/subgroup/Music/Opera/La_Boheme'},            
          ],
            },
            /*{ text: 'Making V-22 Osprey RC Plane', link: '/Projects/subgroup/Making V-22 Osprey RC Plane' },
            { text: 'Two', link: '/guide/two' }*/
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
            { text: 'Math',
            collapsed: true, 
            items: [
              {text: 'Kalman Filter', link: '/Knowledge/supgroup/Engineering/Kalman_Filter'},
              /*{text: 'How it works', link: '/Projects/subgroup/F-35/How It Works'},*/
                   ],
            link: '/Projects/subgroup/F-35/Planning F-35' },
            { text: 'CFD',
            collapsed: true, 
            items: [
              {text: 'Future of CFD', link: '/Knowledge/subgroup/Engineering/CFD/Future_of_CFD'},
              {text: 'How_to_be_CFD_Engineer', link: '/Knowledge/subgroup/Engineering/CFD/How_to_be_CFD_Engineer'},
                   ],
            link: '/Projects/subgroup/F-35/Planning F-35' },
                 ]
        },
        //Neuroscience
        {
          text: 'Neuroscience',
          collapsed: true,
          items: [
            { text: 'About Neuroscience', link: '/Knowledge/subgroup/Neuroscience/About_neuroscience.md'},
            { text: 'Fact', link: '/Knowledge/subgroup/Neuroscience/Fact.md'},
            { text: 'Applying', link: '/Knowledge/subgroup/Neuroscience/Implementation.md' },
            { text: 'Question', link: '/Knowledge/subgroup/Neuroscience/Question.md' }
          ]
        },
        //Great People
        {
          text: 'Great People',
          collapsed: true,
          items: [
            { text: 'Scientists', 
              collapsed: true, 
              items: [
                      {text: 'Albert Einstein',
                       collapsed: true,
                       link: '/Knowledge/subgroup/Great_People/Scientist/Albert_Einstein.md'}
                      ],
              link: '/Knowledge/subgroup/Great_People/Scientist/Albert_Einstein.md'},
            { text: 'Engineers', link: '/Knowledge/subgroup/Neuroscience/Fact.md'},
            { text: 'Musician', 
              collapsed: true, 
              items: [
                    {text: 'Luciano Pavarotti',
                     collapsed: true,
                     link: '/Knowledge/subgroup/Great_People/Musician/Luciano_Pavarotti/Luciano_Pavarotti.md'},
                     {text: 'Fritz Wunderlich',
                     collapsed: true,
                     link: '/Knowledge/subgroup/Great_People/Musician/Fritz_Wunderlich/Fritz_Wunderlich.md'}
                    ]
             }
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

      // '/Secret/': [
      //   //Regrets
      //   {
      //     text: 'Regrets',
      //     collapsed: true,
      //     items: [
      //       { text: 'Regrets 1 & 2',
      //       collapsed: true, 
      //       items: [
      //         {text: 'Regrets1', link: '/Secret/Regrets/Regrets1.md'},
      //         {text: 'Regrets2', link: '/Secret/Regrets/Regrets2.md'}
            
      //     ],
      //       link: '/Secret/Secretfile.md' },
      //       { text: 'Testing secret page', link: '/Secret/Secretfile.md' }
      //     ]
      //   }
      // ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/seongwoo-jo-a01b15223/' },
      { icon: 'instagram', link: 'https://www.instagram.com/seongwoo0517/' },
      { icon: 'youtube', link: 'https://www.youtube.com/channel/UCrt6CKGAe5jvGL2j5uuWqHg' }
    ]
  },

  markdown: {
    config: (md) => {
      md.use(mathjax3);
    },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag),
      },
    },
  },

})

