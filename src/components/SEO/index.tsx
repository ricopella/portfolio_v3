import React, { FC } from 'react'
import Helmet from 'react-helmet'
import useSiteMetaData from '../../hooks/useSiteMetaData'
import { SEOProps } from '../../types'

const SEO: FC<SEOProps> = ({ title: defaultTitle }) => {
  const { titleTemplate, title, description, author, lang } = useSiteMetaData()

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`${titleTemplate} | ${
        defaultTitle ? defaultTitle : title
      }`}
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
          content: author?.name,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ]}
    />
  )
}

export default SEO
