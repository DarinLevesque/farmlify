import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Scrollbars } from 'react-custom-scrollbars';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import './styles.sass'
import config from '../../meta/config'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>{config.siteTitle}</title>
      <meta name='description' content={config.siteDescription} />
    </Helmet>

    <NavBar />
    <Scrollbars
      autoHide
      autoHideTimeout={1000}>
      <div>{children()}</div>
      <Footer />
    </Scrollbars>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
