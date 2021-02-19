import React from 'react'
import { SkipNavContent } from '@reach/skip-nav'
import SkipNavigation from '~components/utils/skip-navigation'
import Header from '~components/layout/header'
import SEO from '~components/utils/seo'
import Footer from '~components/layout/footer'
import Container from '~components/common/container'
import BlogFeatured from '~components/pages/homepage/blog-featured'
import BlogList from '~components/pages/homepage/blog-list'
import HomepageAbout from '~components/pages/homepage/about'
import HomepageDatsets from '~components/pages/homepage/datasets'

const Homepage = () => (
  <>
    <SEO title="The COVID Tracking Project" />
    <SkipNavigation />
    <Header siteTitle="The COVID Tracking Project" noMargin />
    <SkipNavContent />
    <h1 className="a11y-only">The COVID Tracking Project</h1>

    <main id="main">
      <HomepageAbout />
      <HomepageDatsets />

      <Container>
        <BlogFeatured />
        <BlogList />
      </Container>
    </main>
    <Footer noMargin hideAbout />
  </>
)

export default Homepage
