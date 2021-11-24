module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "meublog",
  },
  plugins: ["gatsby-plugin-styled-components"],
  plugins: [`gatsby-plugin-react-helmet`],
  plugins: [   
    {
      resolve: "gatsby-source-graphql",
      options: {
                typeName: "alldata",
                fieldName: "alldata",
                url: "https://api-us-east-1.graphcms.com/v2/ckwdjj7af029001z2fbyj65at/master",
      },
    },
  ]
  }