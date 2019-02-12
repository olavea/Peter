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
      query SiteTit24Query {
        site {
          siteMetadata {
            title
            description
          }
        }
        file(relativePath: { regex: "/peter55/" }) {
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
                  to="/25_english"
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
            He was so tired that he flopped down upon the nice soft sand on the
            floor of the rabbit-hole and shut his eyes. His mother was busy
            cooking, she wondered what he had done with his clothes. It was the
            second little jacket and pair of shoes that Peter had lost in a
            fortnight!
          </p>
          <Link to="/23_english"> or go back one page </Link>
        </Layout>
      </>
    )}
  />
)

export default ImageOne
