import * as React from 'react'
import Link from 'gatsby-link'

export interface HeaderProps {
}

export default class Header extends React.Component<HeaderProps, any> {
  public render() {
    return (
        <div
        style={{
          background: 'rebeccapurple',
          marginBottom: '1.45rem',
        }}
      >
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '1.45rem 1.0875rem',
          }}
        >
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              Gatsby
            </Link>
          </h1>
        </div>
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
      </div>
    );
  }
}
