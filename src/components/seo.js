import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

import ogImage from "./ccm_og_image.jpg"

function SEO({ description, lang, meta, keywords, title, page, image }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        const metaImage = ogImage || image
        return (
          <div>
            <Helmet
              htmlAttributes={{
                lang,
              }}
              title={data.site.siteMetadata.title}
              titleTemplate={`%s | ${data.site.siteMetadata.description}`}
              meta={[
                {
                  name: `description`,
                  content: metaDescription,
                },
                {
                  property: `og:title`,
                  content: `${data.site.siteMetadata.title} - ${page}`,
                },
                {
                  property: `og:description`,
                  content: metaDescription,
                },
                {
                  property: `og:type`,
                  content: `website`,
                },
                {
                  property: `og:url`,
                  content: `https://www.thepastryacademy.com`,
                },
                {
                  property: `og:image`,
                  content: metaImage,
                },
                {
                  name: `twitter:card`,
                  content: `summary`,
                },
                {
                  name: `twitter:creator`,
                  content: data.site.siteMetadata.author,
                },
                {
                  name: `twitter:title`,
                  content: data.site.siteMetadata.title,
                },
                {
                  name: `twitter:description`,
                  content: metaDescription,
                },
              ]
                .concat(
                  keywords.length > 0
                    ? {
                        name: `keywords`,
                        content: keywords.join(`, `),
                      }
                    : []
                )
                .concat(meta)}
            />
          </div>
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
