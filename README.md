# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon
reenshot, feel free to remove this entire section.**

### Links

- Solution URL: https://github.com/Anindya-Ghosh-ANNI/Furniture-preview-with-Share-button
- Live Site URL: https://anindya-ghosh-anni.github.io/Furniture-preview-with-Share-button/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Tailwind


### What I learned
<div class="col-start-3 col-end-4 row-start-1 row-end-3 flex items-center justify-center">
            
  <button onclick="toggleshare()" class="bg-blue-100 rounded-full flex justify-center items-center h-8 w-8 hover:border active:bg-blue-700 active:border-0 group relative">

    <img src="images/icon-share.svg" class="size-4 group-active:invert group-active:brightness-0" alt="">

    <div id="sm_share_box" class="hidden">
      <div class="absolute bottom-14 -left-23 bg-gray-600 flex w-50 justify-between items-center py-2 px-5 rounded-lg">
        <span class="tracking-widest text-gray-400 text-sm mr-2">SHARE</span>
        <img src="images/icon-facebook.svg" class="sm:size-4" alt="">
        <img src="images/icon-twitter.svg" class="sm:size-4" alt="">
        <img src="images/icon-pinterest.svg" class="sm:size-4" alt="">

        <div class="absolute -bottom-2 left-1/2 w-4 h-4 bg-gray-600 rotate-45"></div>
      </div>
    </div>
  </button>

</div>

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.


### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.


## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

