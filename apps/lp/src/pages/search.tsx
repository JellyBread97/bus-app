import React from "react"
import { Layout, Seo } from "components"
import { SearchSection } from "sections"

const SearchPage = () => (
  <Layout>
    <Seo title="Search" lang={""} meta={[]} />
    <SearchSection />
  </Layout>
)

export default SearchPage
