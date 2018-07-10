module.exports = {
  siteMetadata: {
    title: "Gatsby Typescript Starter",
    desc: "A new blog"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // Add typescript stack into webpack
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`
  ],
}
