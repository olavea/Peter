import React from 'react'
import Layout from '../components/layout'
import zero from '../images/peter02.gif'
// import Listing from '../components/Listing'
import { Link } from 'gatsby'
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

const About = () => (
  <Layout>
    <div>
      <img
        style={{
          width: '333px',
        }}
        src={zero}
        alt="Peter Rabbit"
      />
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
      <Link to="/"> or go back one page </Link>
    </div>
  </Layout>
)

export default About
