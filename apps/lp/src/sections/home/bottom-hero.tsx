import React from "react"
import { Button, SectionAndOffset, Text } from "components"
import { LogoTitle } from "./hero"

export const BottomHeroSection = () => (
  <SectionAndOffset>
    <div className="flex flex-col items-center">
      <LogoTitle />
    </div>
    <div className="flex flex-col items-center w-1/3 text-center mx-auto mt-8">
      <Text>
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
