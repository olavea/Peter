import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

const ImageOne = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTit15Query {
        site {
          siteMetadata {
            title
            description
          }
        }
        file(relativePath: { regex: "/15_english/" }) {
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