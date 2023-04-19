import React from "react"
import { Text } from "components"

export const Check = ({ id, label, ...props }) => {
  return (
    <div className="flex justify-between">
      <input
        className="p-2 mt-1 text-green-500 bg-transparent transition cursor-pointer focus:ring-0 rounded-full focus:ring-offset-0 focus:ring-green-500 dark:checked:shadow-green-light2"
        type="checkbox"
        id={id}
        {...props}
      />
      <label className="flex-1 pl-3 cursor-pointer select-none" htmlFor={id}>
        <Text>{label}</Text>
      </label>
    </div>
  )
}
