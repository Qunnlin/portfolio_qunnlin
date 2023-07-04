// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
  modules: [
    '@nuxt/content'
  ],
  content: {
    // https://content.nuxtjs.org/api/configuration
    highlight: {
      theme: 'github-dark',
      // Define languages you expect to use
      preload: ['rust','javascript','python']
    },
    markdown: {
      // Configuring external link processing
      // https://github.com/rehypejs/rehype-external-links
      rehypePlugins: [
        [
          'rehype-external-links',
          {
            target: '_blank',
            rel: 'noopener noreferer'
          }
        ]
      ]
    }
  },
  devtools: { enabled: true },
  css: [
    'primevue/resources/themes/saga-blue/theme.css', // theme
    'primevue/resources/primevue.css', // core css
    'primeicons/primeicons.css', // icons
    'primeflex/primeflex.css' // grid
  ],
  build: {
    transpile: ['primevue']
  },
  ssr: false,
})
