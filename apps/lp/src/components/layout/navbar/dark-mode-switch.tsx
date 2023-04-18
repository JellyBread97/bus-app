import React from "react"
import { WiMoonAltWaningCrescent4 } from "@react-icons/all-files/wi/WiMoonAltWaningCrescent4"
import { WiDaySunny } from "@react-icons/all-files/wi/WiDaySunny"
import { useManageDarkMode } from "./use-manage-dark-mode"

export const DarkModeSwitch = () => {
  const { isDarkMode, toggleDarkMode } = useManageDarkMode()

  const Icon = isDarkMode ? WiDaySunny : WiMoonAltWaningCrescent4

  return (
    <button onClick={toggleDarkMode} className="text-white px-2">
      <Icon className="w-6 h-6 text-current" />
    </button>
  )
}
