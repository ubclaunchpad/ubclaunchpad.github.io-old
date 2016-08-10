# UBC Launch Pad Site

Welcome to the source code for the Launch Pad site! The site is designed to look nice, but also to be clearly organized so that members can easily hack on it and make improvements.

## Installation

Install Jekyll
```sh
gem install jekyll
```

Clone the repository
```sh
git clone https://github.com/ubclaunchpad/ubclaunchpad.github.io.git
cd ubclaunchpad.github.io
```

Compile the site and start a local server
```sh
jekyll serve
```

The site will now be running on port 4000. You can specify a different port with the `--port` flag.

## Development

### Jekyll
We use [Jekyll](https://jekyllrb.com) for compiling our repository to a well-formed static site that is easily deployable on Github Pages. Before making substantial changes to the site, read the [Jekyll docs](https://jekyllrb.com/docs/home/).

### CSS
All stylesheets goes in the `_sass` directory. All stylesheets are written in [SCSS](http://sass-lang.com) and transpiled to CSS for distribution. Jekyll will automatically watch all `scss` files for changes and reload the site whenever a file is saved.

### JavaScript
All JavaScript belongs in the `js` directory. We strictly use ES5 and no transpilation at the moment, so no funny business! As a general rule, if you can do something either in CSS or in JavaScript, do it in CSS.

## Contributing

Before contributing, please test the site on at least the current versions of Chrome and Firefox to ensure everything looks OK. Push your changes to a separate branch on this repository and submit a pull request on GitHub. Assigning the PR to a web tech lead probably won't hurt either.

## Structure

### Home Page

#### Header
HTML: `<div id="navbar">...</div>`  
CSS: `_header-home.scss`  
JavaScript: `nav.js`  

#### Banner
HTML: `<div id="banner">...</div>`  
CSS: `_banner.scss`  

#### About
HTML: `<div id="about">...</div>`  
CSS: `_about.scss`  

#### Team
HTML: `<div id="team">...</div>`  
CSS: `_team.scss`  
JavaScript: `accordion.js`  

#### Sponsors
HTML: `<div id="sponsors">...</div>`  
CSS: `_sponsors.scss`  
JavaScript: `sponsors.js`  

#### Footer
HTML: `<footer>...</footer>`  
CSS: `_contact.scss`, `_footer.scss`  

### Blog

#### Header
HTML: `<div id="navbar">...</div>`  
CSS: `_header-blog.scss`  

#### Home
HTML: `<div id="blog-home">...</div>`  
CSS: `_blog.scss`  

#### Post
HTML: `<article class="post">...</article>`  
CSS: `_post.scss`  

#### Footer
HTML: `<footer>...</footer>`  
CSS: `_contact.scss`, `_footer.scss`  
