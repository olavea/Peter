import React from 'react'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import { StaticQuery, graphql, Link } from 'gatsby'

import styled from 'styled-components'

import logo from '../images/uniparrot4.png'

const NavWrapper = styled.div`
  background: #ffffff;

  margin-bottom: 0.13rem;
  img {
    margin-bottom: 0;
  }
`

const NavContainer = styled.div`
  margin: 0 auto;

  max-width: 960px;
  padding: 0.13rem;
`

const ImageOne = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTit7Query {
        site {
          siteMetadata {
            title
            description
          }
        }
        file(relativePath: { regex: "/peter20/" }) {
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
          <NavWrapper>
            <NavContainer>
              <h1 style={{ margin: 0 }}>
                <Link
                  to="/08_english"
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                  }}
                >
                  <img
                    style={{
                      width: '133px',
                    }}
                    src={logo}
                    alt="Geff Logo"
                  />
                </Link>
              </h1>
            </NavContainer>
          </NavWrapper>
          <Img fluid={data.file.childImageSharp.fluid} />

          <div>{children}</div>
          <p>
            First he ate some lettuces and some French beans, and then he ate
            some radishes.
          </p>

          <Link to="/06_english"> or go back one page </Link>
        </Layout>
      </>
    )}
  />
)
export default ImageOne
