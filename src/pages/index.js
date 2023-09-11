import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    {/* <SEO title="Home" /> */}
    <div class="grid grid-cols-3 grid-flow-row gap-4 py-16 place-content-stretch items-center">
      <div class="place-content-center">
        <StaticImage class="rounded-full w-48"
            src="../images/ProfilePic.png"
            alt="Profile Picture"
        />
      </div>
      <div class="col-span-2 font-PressStart2PRegular">
        <p class="text-3xl">Jane Schwab</p>
      </div>
      <div class="col-span-3 py-16">
        <StaticImage class=""
            src="../images/wordart.png"
            alt="Under Construction"
        />
      </div>
    </div>
    
  </Layout>
)

export default IndexPage
