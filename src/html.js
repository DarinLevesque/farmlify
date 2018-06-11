import React, { Component } from 'react'
import favicon from './img/favicon.ico'

let inlinedStyles = ''
if (process.env.NODE_ENV === 'production') {
  try {
    /* eslint import/no-webpack-loader-syntax: off */
    inlinedStyles = require('!raw-loader!../public/styles.css')
  } catch (e) {
    /* eslint no-console: "off" */
    console.log(e)
  }
}

export default class HTML extends Component {
  render() {
    let css
    if (process.env.NODE_ENV === 'production') {
      css = (
        <style
          id='gatsby-inlined-css'
          dangerouslySetInnerHTML={{ __html: inlinedStyles }}
        />
      )
    }
    return (
      <html lang='en' className='has-navbar-fixed-top'>
        <head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=no' />
          {this.props.headComponents}
          <link rel='shortcut icon' href={favicon} />
          {css}
        </head>
        <body>
          <div
            id='___gatsby'
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <script src={__PATH_PREFIX__ + '/js/toggle.js'} />

          <script type="text/javascript">
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
          var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/5b1df5573604f81d726beab2/default';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
          </script>
        </body>
      </html>
    )
  }
}
