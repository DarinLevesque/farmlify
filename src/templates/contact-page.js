import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Contact from '../components/Contact'

export const ContactPageTemplate = ({
  title,
  subtitle,
  meta_title,
  meta_description,
  contacts,
}) => {
  return (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name='description' content={meta_description} />
      </Helmet>
      <section className='hero is-primary is-bold'>
        <div className='hero-body'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='section'>
                  <h1 className='title'>
                    {title}
                  </h1>
                  <h2 className='subtitle'>
                    {subtitle}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
      <form netlify>
      <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">From</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control is-expanded has-icons-left">
                <input className="input" type="text" placeholder="Name" />
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control is-expanded has-icons-left has-icons-right">
                <input className="input is-success" type="email" placeholder="Email" value="alex@smith.com" />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-check"></i>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label"></div>
          <div className="field-body">
            <div className="field is-expanded">
              <div className="field has-addons">
                <p className="control">
                  <a className="button is-static">
                    +1
                  </a>
                </p>
                <p className="control is-expanded">
                  <input className="input" type="tel" placeholder="Your phone number" />
                </p>
              </div>
              <p className="help">Do not enter the first zero</p>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Department</label>
          </div>
          <div className="field-body">
            <div className="field is-narrow">
              <div className="control">
                <div className="select is-fullwidth">
                  <select>
                    <option>Business development</option>
                    <option>Marketing</option>
                    <option>Sales</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label">
            <label className="label">Already a member?</label>
          </div>
          <div className="field-body">
            <div className="field is-narrow">
              <div className="control">
                <label className="radio">
                  <input type="radio" name="member" />
                  Yes
                </label>
                <label className="radio">
                  <input type="radio" name="member" />
                  No
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Subject</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <input className="input is-danger" type="text" placeholder="e.g. Partnership opportunity" />
              </div>
              <p className="help is-danger">
                This field is required
              </p>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Question</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <textarea className="textarea" placeholder="Explain how we can help you" />
              </div>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label">
            
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <button className="button is-primary">
                  Send message
                </button>
              </div>
            </div>
          </div>
        </div>
        </form>
      </section>
      <section className='section'>
        <div className='container'>
          {contacts.map((contact, id) =>
            <Contact key={id} email={contact.email} description={contact.description} />
          )}
        </div>
      </section>
    </div>
  )
}

ContactPageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  contacts: PropTypes.array,

}

const ContactPage = ({data}) => {
  const {frontmatter} = data.markdownRemark
  return (
    <ContactPageTemplate
      title={frontmatter.title}
      subtitle={frontmatter.subtitle}
      meta_title={frontmatter.meta_title}
      meta_description={frontmatter.meta_description}
      contacts={frontmatter.contacts}
    />
  )
}

ContactPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        meta_title
        meta_description
        heading
        contacts {
          email
          description
        }
      }
    }
  }
`
