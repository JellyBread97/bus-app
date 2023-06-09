import React from "react"
import {
  DateInput,
  GuestSelect,
  LocationSelect,
  useReactBookingForm,
} from "react-booking-form"
import moment from "moment"
import "flatpickr/dist/themes/dark.css"
import { IoMdSwap } from "@react-icons/all-files/io/IoMdSwap"
import {
  Container,
  GuestOkButton,
  InputContainer,
  Label,
  Menu,
  MenuContainer,
  OptionContainer,
} from "./components"
import { GuestOptionComponent, InputComponent } from "./complex-components"
import { formSchema } from "./form-schema"
import { Button } from "components"
import { navigate } from "gatsby"

export const BookingForm = () => {
  const form = useReactBookingForm({ formSchema })

  const onBookButtonClick = () => {
    const config = {
      convertDate: (dateValue: Date) => moment(dateValue).format("DD-MM-YYYY"),
    }
    navigate("/search?" + form.serializeToURLParams(config))
  }

  return (
    <Container>
      <InputContainer>
        <Label>{"From"}</Label>
        <LocationSelect
          form={form}
          menu={Menu}
          menuContainer={MenuContainer}
          option={OptionContainer}
          inputComponent={InputComponent}
          name="from"
          emptyOption="Nothing was found :("
          placeholder="Where from?"
        />
      </InputContainer>
      <InputContainer style={{ width: "auto" }}>
        <Button
          title="Swap Locations"
          variant="round"
          className="mt-6"
          aria-label="Swap Locations"
          onClick={() => form.swapLocations()}
        >
          <IoMdSwap className="w-4 h-4" />
        </Button>
      </InputContainer>
      <InputContainer>
        <Label>{"To"}</Label>
        <LocationSelect
          form={form}
          menu={Menu}
          menuContainer={MenuContainer}
          option={OptionContainer}
          inputComponent={InputComponent}
          name="to"
          emptyOption="Nothing was found :("
          placeholder="Where to?"
        />
      </InputContainer>
      <InputContainer>
        <Label>{"Departure"}</Label>
        <DateInput
          inputComponent={InputComponent}
          className="w-full"
          placeholder="Add date"
          form={form}
          name="departureDate"
        />
      </InputContainer>
      <InputContainer>
        <Label>{"Guests"}</Label>
        <GuestSelect
          form={form}
          menuContainer={MenuContainer}
          menu={Menu}
          inputComponent={InputComponent}
          option={GuestOptionComponent}
          okButton={GuestOkButton}
          okText="Ok!"
          placeholder="Add guests"
          name={"guests"}
        />
      </InputContainer>
      <InputContainer>
        <Button className="w-full py-5" onClick={onBookButtonClick}>
          {"Search"}
        </Button>
      </InputContainer>
    </Container>
  )
}
