# UBC Launch Pad Site

Welcome to the source code for the Launch Pad site! The site is designed to look nice, but also to be clearly organized so that members can easily hack on it and make improvements.

## Installation

Clone the repository
```
git clone https://github.com/ubclaunchpad/ubclaunchpad.github.io.git
cd ubclaunchpad.github.io
```

Start a local server
```
python -m SimpleHTTPServer 8888
```

The site will now be running on port 8888.

## Development

### CSS
All CSS goes unsurprisingly in the `css` directory. All stylesheets are written in [SCSS](http://sass-lang.com) and transpiled to CSS for distribution.

To watch stylesheets for changes.
```
cd css && compass watch
```

If you don't happen to have Compass installed.
```
gem install compass
```

### JavaScript
All JavaScript also unsurprisingly belongs in the `js` directory. We strictly use ES5 and no transpilation at the moment, so no funny business! As a general rule, if you can do something either in CSS or in JavaScript, do it in CSS.

## Contributing

Before contributing, please test the site on at least the current versions of Chrome and Firefox to ensure everything still looks OK. Push your changes to a separate branch on this repository and submit a pull request on GitHub. Assigning the PR to a web tech lead probably won't hurt either.

## Structure

### Navigation
HTML: `<div id="navbar">…</div>`
CSS: `_nav.scss`
JavaScript: `_nav.js`

### Banner
HTML: `<div id="banner">…</div>`
CSS: `_banner.scss`

### About
HTML: `<div id="about">…</div>`
CSS: `_about.scss`

### Team
HTML: `<div id="team">…</div>`
CSS: `_team.scss`

### Sponsors
HTML: `<div id="sponsors">…</div>`
CSS: `_sponsors.scss`

### Contact
HTML: `<div id="contact">…</div>`
CSS: `_contact.scss`