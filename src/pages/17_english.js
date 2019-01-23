import React from 'react'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import { StaticQuery, graphql, Link } from 'gatsby'

import styled from 'styled-components'

import logo from '../images/peter-icon2.png'

const NavWrapper = styled.div`
  background: #ffa500;

  margin-bottom: 0.33rem;
  img {
    margin-bottom: 0;
  }
`

const NavContainer = styled.div`
  margin: 0 auto;

  max-width: 960px;
  padding: 0.33rem;
`

const ImageOne = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTit17Query {
        site {
          siteMetadata {
            title
            description
          }
        }
        file(relativePath: { regex: "/peter40/" }) {
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
        <Layout>
          <Img fluid={data.file.childImageSharp.fluid} />

          <div>{children}</div>
          <p>
            And tried to put his foot upon Peter, who jumped out of a window,
            upsetting three plants. The window was too small for Mr. McGregor,
            and he was tired of running after Peter. He went back to his work.
          </p>

          <NavWrapper>
            <NavContainer>
              <h1 style={{ margin: 0 }}>
                <Link
                  to="/18_english"
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                  }}
                >
                  <img
                    style={{
                      width: '333px',
                    }}
                    src={logo}
                    alt="Geff Logo"
                  />
                </Link>
              </h1>
            </NavContainer>
          </NavWrapper>
          <Link to="/16_english"> or go back one page </Link>
        </Layout>
      </>
    )}
  />
)
export default ImageOne
