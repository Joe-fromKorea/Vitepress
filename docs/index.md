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
  - title: CFD
    link: ./Knowledge/subgroup/Engineering/CFD/CFD_Knowledge/RANS.md
    icon:
      src: https://jowikipedia.com/assets/CFD_airplane_cover.a5a4c58a.jpg #First upload in different page, and then pull it from that page. First step is to npm run docs build and preview it.
      style: width:auto; height:220px; margin-left:auto; margin-right:auto; #margin-bottom:30px;
    details: CFD notes
  - title: F-35 RC Project
    link: ./Projects/subgroup/F-35/Making F-35
    icon:
      src: https://jowikipedia.com/assets/F-35.65f7aacf.jpg #First upload in different page, and then pull it from that page. First step is to npm run docs build and preview it.
      style: width:auto; height:220px; margin-left:auto; margin-right:auto; #margin-bottom:30px;
    details: My friend and I made our own RC plane from scratch!
  - title: The Magic Flute
    link: ./Knowledge/subgroup/Music/Opera/The_Magic_Flute
    icon: 
      src: https://jowikipedia.com/assets/The_Magic_Flute_Cover.6350de21.jpg
      style: width:280px; height:auto; margin-left:auto; margin-right:auto;
    details: One of the greatest opera by W.A. Mozart
  - title: Exchange Student - NYU
    link: ./Experiences/College/Exchange_Student/Exchange_Student_Intro
    icon: 
      src: https://jowikipedia.com/assets/NYU_Thumbnail.3daad685.jpg
      style: width:280px; height:auto; margin-left:auto; margin-right:auto;  
    details: Studying as an Exchange Student at New York University
  - title: Feature D
    details: Will be updated
  - title: Feature E 
    details: Will be updated
  - title: Feature E 
    details: Will be updated
---

