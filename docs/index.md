---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Wikipedia by Jo"
  text: "Welcome to the website of knowledge"
  tagline: Where all the knowledge are uploaded
  actions:
    - theme: brand
      text: About
      link: /About/About
    - theme: alt
      text: About me
      link: /About/Aboutme

features: 
  - title: F-35 RC Project
    link: ./Projects/subgroup/F-35/Making F-35
    icon:
      src: https://jowikipedia.com/assets/F-35.65f7aacf.jpg #First upload in different page, and then pull it from that page. First step is to npm run docs build and preview it.
      style: width:auto; height:250px; margin-left:auto; margin-right:auto;
    details: My friend and I made our own RC plane from scratch!
  - title: The Magic Flute
    link: ./Knowledge/subgroup/Music/Opera/The_Magic_Flute
    icon: 
      src: https://jowikipedia.com/assets/The_Magic_Flute_Cover.6350de21.jpg
      style: width:280px; height:280px; margin-left:auto; margin-right:auto;
    details: One of the greatest opera by W.A. Mozart
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

