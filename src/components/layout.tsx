import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <div>
    <Helmet
      title={'Modelica Cheatsheet'}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <html lang="en" />
      <link href="https://unpkg.com/normalize.css@^7.0.0" rel="stylesheet" />
      <link
        href="https://unpkg.com/@blueprintjs/core@^3.0.0/lib/css/blueprint.css"
        rel="stylesheet"
      />
      <link
        href="https://unpkg.com/@blueprintjs/icons@^3.0.0/lib/css/blueprint-icons.css"
        rel="stylesheet"
      />
    </Helmet>
    <Header siteTitle={'Modelica Cheatsheet'} />
    <div
      style={{
        margin: '0 auto',
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children}
    </div>
  </div>
)

export default Layout
