import React from 'react'
import PropTypes from 'prop-types'
import {HowitworksPageTemplate} from '../../templates/howitworks-page'

const HowitworksPagePreview = ({entry, widgetFor}) => (<HowitworksPageTemplate
    title={entry.getIn(['data', 'title'])}
    meta_title={entry.getIn(['data', 'meta_title'])}
    meta_description={entry.getIn(['data', 'meta_description'])}
    content={widgetFor('body')}/>)

HowitworksPagePreview.propTypes = {
    entry: PropTypes.shape({getIn: PropTypes.func}),
    widgetFor: PropTypes.func
}

export default HowitworksPagePreview
