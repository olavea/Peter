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
      query SiteTit19Query {
        site {
          siteMetadata {
            title
            description
          }
        }
        file(relativePath: { regex: "/peter44/" }) {
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
            He found a door in a wall, but it was locked, and there was no room
            for a fat little rabbit to squeeze underneath.
          </p>
          <p>
            An old mouse was running in and out over the stone doorstep,
            carrying peas and beans to her family in the wood. Peter asked her
            the way to the gate, but she had such a large pea in her mouth that
            she could not answer. She only shook her head at him. Peter began to
            cry.
          </p>
          <NavWrapper>
            <NavContainer>
              <h1 style={{ margin: 0 }}>
                <Link
                  to="/20_english"
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
          <Link to="/18_english"> or go back one page </Link>
        </Layout>
      </>
    )}
  />
)
export default ImageOne
