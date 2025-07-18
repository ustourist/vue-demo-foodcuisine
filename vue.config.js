const { defineConfig } = require('@vue/cli-service')

// function publicPath() {
//   if (process.env.CI_PAGES_URL) {
//     return new URL(process.env.CI_PAGES_URL).pathname
//   } else {
//     return '/'
//   }
// }


module.exports = defineConfig({
  transpileDependencies: true,
  // publicPath: publicPath(),
  publicPath: process.env.NODE_ENV === 'production'
    ? 'vue-demo-foodcuisine/dist/'
    : '/'
})
