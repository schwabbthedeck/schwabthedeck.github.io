import React from "react"
// import { Row, Col } from "react-bootstrap"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ResumePage = () => (
  <Layout>
    <SEO title="Thanks" />
    <h1>Thanks!</h1>
    <p>Thank you for contacting me. I'll be in touch soon!</p>
    <p>Return to the <Link to="/">home page</Link></p>
  </Layout>
)

export default ResumePage
