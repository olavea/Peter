import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

const ImageOne = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTit14Query {
        site {
          siteMetadata {
            title
            description
          }
        }
        file(relativePath: { regex: "/14_english/" }) {
          childImageSharp {
            fluid(maxWidth: 10000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Img fluid={data.file.childImageSharp.fluid} />

        <div>{children}</div>
      </>
    )}
  />
)
export default ImageOne
