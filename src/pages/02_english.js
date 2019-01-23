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
      query SiteTit2Query {
        site {
          siteMetadata {
            title
            description
          }
        }
        file(relativePath: { regex: "/peter11/" }) {
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
            'Now my dears,' said old Mrs. Rabbit one morning, 'you may go into
            the fields or down the lane, but don't go into Mr. McGregor's
            garden: your Father had an accident there; he was put in a pie by
            Mrs. McGregor.'
          </p>

          <NavWrapper>
            <NavContainer>
              <h1 style={{ margin: 0 }}>
                <Link
                  to="/03_english"
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
          <Link to="/01_english"> or go back one page </Link>
        </Layout>
      </>
    )}
  />
)
export default ImageOne
