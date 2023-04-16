import * as React from "react"

import { Layout, Seo } from "components"

const NotFoundPage = () => (
  <Layout>
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" lang={""} meta={[]} />

export default NotFoundPage
