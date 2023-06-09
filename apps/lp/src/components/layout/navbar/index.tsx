import React from "react"
import tw from "tailwind-styled-components"
import { Text } from "components"
import { Link } from "gatsby"
import { FaBus } from "@react-icons/all-files/fa/FaBus"
import { InView } from "react-cool-inview"
import { DarkModeSwitch } from "./dark-mode-switch"

const Container = tw.div`fixed left-0 right-0 top-0 z-20 transition duration-[2000ms] delay-500`
const Box = tw.div`bg-black bg-opacity-50 w-full backdrop-filter backdrop-blur`
const WidthContainer = tw.div`max-w-screen-2xl mx-auto flex justify-between`
const NavItemsContainer = tw.div`flex items-center`
const NavItemContainer = tw.div`px-2 py-4`
const BusLogo = tw(FaBus)`text-white`

type NavItemType = {
  title: string
  link: string
}

const navItems: {
  [key: string]: NavItemType[]
} = {
  left: [
    {
      title: "About",
      link: "/#about",
    },
    {
      title: "VIP",
      link: "/#vip",
    },
    {
      title: "Reviews",
      link: "/#reviews",
    },
    {
      title: "FAQ",
      link: "/#faq",
    },
  ],
  right: [
    {
      title: "Account",
      link: "/account",
    },
    {
      title: "Log Out",
      link: "/logout",
    },
  ],
}

const NavItem = ({ item }: { item: NavItemType }) => (
  <Link to={item.link}>
    <NavItemContainer>
      <Text variant={"subtitle"} className="uppercase" color="white">
        {item.title}
      </Text>
    </NavItemContainer>
  </Link>
)

export const NavbarCore = ({ observe, inView }: any) => (
  <Container ref={observe} className={`${inView ? "" : "opacity-0"}`}>
    <Box>
      <WidthContainer>
        <NavItemsContainer>
          <div className="flex justify-center items-center">
            <Link to="/">
              <div className="px-2">
                <BusLogo className="w-6 h-6" />
              </div>
            </Link>{" "}
          </div>
          {navItems.left.map(item => (
            <NavItem key={item.title} item={item} />
          ))}
        </NavItemsContainer>
        <NavItemsContainer>
          <div className="flex justify-center items-center">
            <DarkModeSwitch />
          </div>
          {navItems.right.map(item => (
            <NavItem key={item.title} item={item} />
          ))}
        </NavItemsContainer>
      </WidthContainer>
    </Box>
  </Container>
)

export const Navbar = () => (
  <InView>
    <NavbarCore />
  </InView>
)
