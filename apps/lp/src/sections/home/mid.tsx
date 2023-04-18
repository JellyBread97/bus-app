import { SectionAndOffset, Text } from "components"
import React from "react"
import { InView } from "react-cool-inview"
import tw from "tailwind-styled-components"

interface ContainerProps extends React.HTMLProps<HTMLDivElement> {
  direction?: "left" | "right"
}

const Column = tw.div`w-1/2`
const ImageContainer = tw.div`rounded-3xl overflow-hidden h-[600px] shadow-xl transition ease-in-out duration-[2000ms] delay-1000`
const Image = tw.img`w-full h-full object-cover transition transform duration-[12s] ease-out`
const TopPartContainer = tw.div`transition duration-1000 delay-150`
const Container = tw.div<ContainerProps>`flex justify-between mt-20 gap-12 
${({ direction }) => (direction === "left" ? "flex-row" : "flex-row-reverse")}`

const TopPart = ({ section, observe, inView }: any) => (
  <TopPartContainer ref={observe} className={`${inView ? "" : "opacity-0"}`}>
    <Text variant={"h4"} className="text-center uppercase">
      {section.title}
    </Text>
    <Text variant={"bodyBig"} className="text-center w-1/2 mx-auto mt-4">
      {section.description}
    </Text>
  </TopPartContainer>
)

const FeatureItem = ({ feature }) => (
  <div className="flex space-x-4">
    <div>
      {<feature.icon className="w-8 h-8 dark:text-white text-gray-800" />}
    </div>
    <div>
      <Text variant={"button"}>{feature.title}</Text>
      <Text variant={"body"} className="mt-2">
        {feature.description}
      </Text>
    </div>
  </div>
)

const Content = ({ section, observe, inView }: any) => (
  <Container ref={observe} direction={section.direction}>
    <Column>
      <ImageContainer className={`${inView ? "" : "opacity-0"}`}>
        <Image
          className={`${inView ? "" : "scale-125 rotate-2 translate-y-4"}`}
          src={section.imageUrl}
          alt={section.imageAlt}
        />
      </ImageContainer>
    </Column>
    <Column>
      <Text
        className={`transition duration-1000 delay-500 ${
          inView ? "" : "opacity-0"
        }`}
        variant={"h5"}
      >
        {section.featuresTitle}
      </Text>
      <div className="mt-12 space-y-8">
        {section.features.map(
          (feature: { title: React.Key | null | undefined }, index: number) => (
            <div
              key={feature.title}
              className={`transition transform duration-1000 ${
                inView ? "" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: 500 + index * 250 + "ms" }}
            >
              <FeatureItem feature={feature} />
            </div>
          )
        )}
      </div>
    </Column>
  </Container>
)

export const MidSection = ({ section }) => (
  <SectionAndOffset>
    <InView unobserveOnEnter>
      <TopPart section={section} />
    </InView>
    <InView unobserveOnEnter>
      <Content section={section} />
    </InView>
  </SectionAndOffset>
)
