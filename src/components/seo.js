import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

function SEO({ description, lang, keywords, title, author }) {
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
        {
          name: `apple-mobile-web-app-title`,
          content: `Mr.Bartender`
        },
        {
          name: `application-name`,
          content: `Mr.Bartender`
        },
        {
          name: `msapplication-TileColor`,
          content: `#da532c`
        },
        {
          name: `theme-color`,
          content: `#ffffff`
        }
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
      }
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  title: `Mr.Bartender`,
  description: `The next generation of drinking`,
  keywords: [`MrBartender`, `mr`, `bartender`, `recipes`, `drinks`, `automated`],
  author: `@mrbartender`,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  author: PropTypes.string
}

export default SEO
