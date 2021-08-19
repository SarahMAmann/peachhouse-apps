import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import Accordion from '../components/Accordion'
import Popup from '../components/Popup'

// Export Template for use in CMS preview
export const HomePageTemplate = ({ title, subtitle, featuredImage, body, accordion, popup }) => (
  <main className="Home">
    {/* <PageHeader
      large
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />

    <section className="section">
      <div className="container" style={{paddingTop: 20}}>
        <Content source={body} />
        <div style={{paddingTop: 100, paddingBottom: 50}}>
          <Accordion items={accordion} />
        </div>
        <div style={{paddingBottom: 100}}>
          <Popup>
          <Content source={popup} />
          </Popup>
        </div>
      </div>
    </section> */}
  </main>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />
    <div style={{height: '85vh', backgroundColor: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <p className="main-title">PEACH HOUSE</p>
    </div>
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
        accordion {
          title
          description
        }
        popup
      }
    }
  }
`
