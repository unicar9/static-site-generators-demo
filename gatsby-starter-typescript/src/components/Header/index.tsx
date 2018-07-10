import * as React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'

import * as logo from '../../images/logo.svg'

const HeaderWrapper = styled.div`
    background: #3ec1d3;
    margin-bottom: 1.45rem;
    overflow: hidden
    position: relative;
    height: 60vh;
    h1 {
        img {
            height: 80px;
        }
    }
`;
const HeaderContainer = styled.div`
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;
    position: relative;
    z-index: 2;
`;

interface HeaderProps {
    data: {
      site: {
        siteMetadata: {
          title: string
          desc: string
        }
      }
      background: any
    }
}

export default class Header extends React.Component<HeaderProps, any> {
  public render() {
    return (
        <HeaderWrapper>
            <HeaderContainer>
                <h1 style={{ margin: 0 }}>
                    <Link
                    to="/"
                    // style={{
                    //     color: 'white',
                    //     textDecoration: 'none',
                    // }}
                    >
                    <img src={logo} />
                    </Link>
                </h1>
                <nav>
                    <ul>
                        <li>
                        <Link to="/">Home</Link>
                        </li>
                        <li>
                        <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>
            </HeaderContainer>
            <Img 
                style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '100%',
                    overflow: 'hidden'
                }} 
                sizes={this.props.data.background.sizes} 
            />
        </HeaderWrapper>
    );
  }
}
