// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-post-js": () => import("/Users/dhjkmedia/Desktop/Gatsby-Blog/src/templates/blog-post.js" /* webpackChunkName: "component---src-templates-blog-post-js" */),
  "component---src-pages-about-js": () => import("/Users/dhjkmedia/Desktop/Gatsby-Blog/src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-index-js": () => import("/Users/dhjkmedia/Desktop/Gatsby-Blog/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-my-files-js": () => import("/Users/dhjkmedia/Desktop/Gatsby-Blog/src/pages/my-files.js" /* webpackChunkName: "component---src-pages-my-files-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/dhjkmedia/Desktop/Gatsby-Blog/.cache/data.json")

