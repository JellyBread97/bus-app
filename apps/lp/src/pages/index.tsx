import React from "react"
import { Layout, Seo } from "components"
import { HeroSection, MidSection } from "sections"
import { GiSlashedShield } from "@react-icons/all-files/gi/GiSlashedShield"
import { GiAlarmClock } from "@react-icons/all-files/gi/GiAlarmClock"
import { GiMoneyStack } from "@react-icons/all-files/gi/GiMoneyStack"
import { BiNetworkChart } from "@react-icons/all-files/bi/BiNetworkChart"
import { FaLeaf } from "@react-icons/all-files/fa/FaLeaf"

const sections = {
  features: {
    title: "A Better Way To Travel",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!",
    featuresTitle: "Features",
    imageUrl: "https://source.unsplash.com/eGA5dZG4sCw",
    imageAlt: "Bus",
    direction: "left",
    features: [
      {
        title: "Safety",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!",
        icon: GiSlashedShield,
      },
      {
        title: "Reliability",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!",
        icon: GiAlarmClock,
      },
      {
        title: "Affordable",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!",
        icon: GiMoneyStack,
      },
      {
        title: "Environmentally Friendly",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!",
        icon: FaLeaf,
      },
      {
        title: "Biggest Network in Europe",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!",
        icon: BiNetworkChart,
      },
    ],
  },
  features2: {
    title: "A Better Way To Travel",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!",
    featuresTitle: "Features",
    imageUrl: "https://source.unsplash.com/eGA5dZG4sCw",
    imageAlt: "Bus",
    features: [
      {
        title: "Safety",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!",
        icon: GiSlashedShield,
      },
      {
        title: "Reliability",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!",
        icon: GiAlarmClock,
      },
      {
        title: "Affordable",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!",
        icon: GiMoneyStack,
      },
      {
        title: "Environmentally Friendly",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!",
        icon: FaLeaf,
      },
      {
        title: "Biggest Network in Europe",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!",
        icon: BiNetworkChart,
      },
    ],
  },
}

const IndexPage = () => (
  <Layout>
    <Seo title="Home" lang={""} meta={[]} />
    <HeroSection />
    <MidSection section={sections.features} />
    <MidSection section={sections.features2} />
  </Layout>
)

export default IndexPage
