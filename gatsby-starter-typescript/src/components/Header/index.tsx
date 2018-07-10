import * as React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import * as logo from '../../images/logo.svg'

const HeaderWrapper = styled.div`
    background: #3ec1d3;
    margin-bottom: 1.45rem;
    h1 {
        img {
            height: 80px;
        }
    }
`
const HeaderContainer = styled.div`
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;
`

export interface HeaderProps {
}

export default class Header extends React.Component<HeaderProps, any> {
  public render() {
    return (
        <HeaderWrapper>
            <HeaderContainer>
                <h1 style={{ margin: 0 }}>
                    <Link
                    to="/"
                    style={{
                        color: 'white',
                        textDecoration: 'none',
                    }}
                    >
                    <img src={logo} />
                    </Link>
                </h1>
            </HeaderContainer>
            <nav>
            <ul>
                <li>
                <Link to="/home">Home</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
            </ul>
            </nav>
        </HeaderWrapper>
    );
  }
}
