import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutUs = () => (
  <Layout>
    <Seo title="About Us" />
    <h1>About Us</h1>
    <p>Holly molly</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutUs