import React from "react"

import Image from "../components/image"
import SEO from "../components/seo"

import "../components/style.css"

const IndexPage = () => (
  <main>
    <SEO />
    <div style={{ width: `100%`, maxWidth: `400px` }}>
      <Image />
    </div>
  </main>
)

export default IndexPage
