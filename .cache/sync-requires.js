const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/dhjkmedia/Desktop/Gatsby-Blog/src/templates/blog-post.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/dhjkmedia/Desktop/Gatsby-Blog/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/dhjkmedia/Desktop/Gatsby-Blog/src/pages/index.js"))),
  "component---src-pages-my-files-js": hot(preferDefault(require("/Users/dhjkmedia/Desktop/Gatsby-Blog/src/pages/my-files.js")))
}
