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
      query SiteTitQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
        file(relativePath: { regex: "/peter08/" }) {
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
            Once upon a time there were four little Rabbits, and their names
            were— Flopsy, Mopsy, Cotton-tail, and Peter.
          </p>
          <p>
            They lived with their Mother in a sand-bank, underneath the root of
            a very big fir-tree.
          </p>
          <NavWrapper>
            <NavContainer>
              <h1 style={{ margin: 0 }}>
                <Link
                  to="/02_english"
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
          <Link to="/00_english"> go back one page </Link>
        </Layout>
      </>
    )}
  />
)

export default ImageOne

// shadow: #ff9000;
// const About = () => (
//   <Layout>
//     <div>
//       <img
//         style={{
//           width: '1333px',
//         }}
//         src={one}
//         alt="Geff one"
//       />

//       <p>bla bla</p>
//     </div>
//   </Layout>
// )

// export default About

// delete from line 27
// <Helmet
//           title={data.site.siteMetadata.title}
//           meta={[
//             {
//               name: 'description',
//               content: data.site.siteMetadata.description,
//             },
//             { name: 'keywords', content: 'sample, something' },
//           ]}
//         >
//           <html lang="en" />
//         </Helmet>
//         <Header siteTitle={data.site.siteMetadata.title} />

//         delete from line xxcx
