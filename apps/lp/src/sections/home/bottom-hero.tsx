import React from "react"
import { Button, SectionAndOffset, Text } from "components"
import { LogoTitle } from "./hero"
import { InView } from "react-cool-inview"

export const BottomHeroSectionCore = ({ observe, inView }: any) => (
  <SectionAndOffset ref={observe}>
    <div className="flex flex-col items-center">
      <LogoTitle inView={inView} />
    </div>
    <div
      className={`flex flex-col items-center w-1/3 text-center mx-auto mt-8 transition duration-700 delay-[1400ms] ${
        inView ? "" : "opacity-0"
      }`}
    >
      <Text color={"gray-light"}>
        {
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptatibus asperiores saepe blanditiis iusto! Ipsa dolorum suscipit minima nemo."
        }
      </Text>
      <div className="mt-8">
        <Button>{"Book Now"}</Button>
      </div>
    </div>
  </SectionAndOffset>
)

export const BottomHeroSection = () => (
  <InView>
    <BottomHeroSectionCore />
  </InView>
)
