import React from "react"
import tw from "tailwind-styled-components"
import { Layout, Seo } from "../components"

const Title = tw.h1`text-5xl text-green-500 uppercase`
const Description = tw.h1`text-2xl text-gray-500`
const MainImage = tw.img`rounded-3xl shadow-lg`

const Section = tw.div`max-w-screen-2xl mx-auto relative`
const Separator = tw.div`w-10 h-1.5 bg-blue-500`

const Button = tw.button`bg-green-500 px-5 py-3 rounded-xl text-white font-bold uppercase`
const Gradient = tw.div`absolute inset-0 bg-gradient-radial-hero`

const TextSection = () => (
  <div className="space-y-6">
    <Title>{"The Private Bus Company"}</Title>
    <Separator />
    <Description>
      {
        "This is a private bus company that takes you from point A to point B within continental Europe."
      }
    </Description>
    <Button>{"Create Account"}</Button>
  </div>
)

const GradientBackground = () => (
  <div className="absolute left-0 right-0 top-0 h-[900px]">
    <Gradient />
  </div>
)

const IndexPage = () => (
  <Layout>
    <Seo title="Home" lang={""} meta={[]} />
    <GradientBackground />
    <Section>
      <div className="mt-16 flex justify-between items-center gap-x-8">
        <TextSection />
        <div>
          <MainImage src="https://source.unsplash.com/T5jzpRTVF1U" alt="Bus" />
        </div>
      </div>
    </Section>
  </Layout>
)

export default IndexPage
