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
      query SiteTit20Query {
        site {
          siteMetadata {
            title
            description
          }
        }
        file(relativePath: { regex: "/peter47/" }) {
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
                  to="/21_english"
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
            Then he tried to find his way straight across the garden, but he
            became more and more puzzled. Presently, he came to a pond where Mr.
            McGregor filled his water-cans. A white cat was staring at some
            gold-fish, she sat very, very still, but now and then the tip of her
            tail twitched as if it were alive. Peter thought it best to go away
            without speaking to her, he had heard about cats from his cousin,
            little Benjamin Bunny.
          </p>
          <Link to="/19_english"> or go back one page </Link>
        </Layout>
      </>
    )}
  />
)
export default ImageOne
