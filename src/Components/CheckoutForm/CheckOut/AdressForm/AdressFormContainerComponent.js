import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { placesApi } from "../../../../api/api"
import { getCarsByType, getCompanyCars } from "../../../../Redux/car-reducer"
import Carousel, { consts } from "react-elastic-carousel"
// import {
//   LeftArrowForAdressForm,
//   RightArrowForAdressForm,
// } from "../../../../assets/icons"
// import Button from "@material-ui/core/Button"
import { useStyles } from "./AdressFormStyles"
// import { useMediaQuery } from "@material-ui/core"
import { connect } from "react-redux"
import {
  setBoosterSeatCount,
  setDateForDefaultValue,
  setFormData,
  setPassengersQuantityForBackStep,
  setSafetySeatCount,
  setTimeForDefaultValue,
  setTimeForDefaultValueAlignment,
  setTimeForDefaultValueAMPM,
} from "../../../../Redux/form-reducer"

import { setHourlyRedux } from "../../../../Redux/hourly-reducer"
import { setGateMeetingRedux } from "../../../../Redux/gate-meeting-reducer"
// import { AdressFormHelpers } from "./adressFormHelpers"
import AdressFormUIComponent from "./AdressFormUIComponent"
import styles from "./AdressFormStyles/AdressForm.module.scss"
import * as yup from "yup"

const AdressFormContainerComponent = ({
  next,
  carTypes,
  pageSize,
  getCompanyCars,
  setFormData,
  formData,
  setHourlyRedux,
  setGateMeetingRedux,
  gateMeeting,
  hourlyAndSeatsRedux,
  setSafetySeatCount,
  setBoosterSeatCount,
  backgroundScrollStopForTimePicker,
  setBackgroundScrollStopForTimePicker,
  resetInputs,
  setDateForDefaultValue,
  setTimeForDefaultValue,
  setTimeForDefaultValueAMPM,
  setTimeForDefaultValueAlignment,
  setPassengersQuantityForBackStep,
  isBoosterSeatExistOnBackend,
  isSafetySeatExistOnBackend,
}) => {
  // const classes = useStyles()

  const [destinations, setDestinations] = useState([
    {
      rideCheckPoint: "",
      latitude: 0,
      longitude: 0,
      placeType: 0,
      placeId: "",
    },
    {
      rideCheckPoint: "",
      latitude: 0,
      longitude: 0,
      placeType: 0,
      placeId: "",
    },
  ])

  const [carSelectionID, setCarSelectionID] = useState(0)
  const [bookingType, setBookingType] = useState(1)
  const [passengers, setPassengers] = useState(0)
  const [hoursAddressForm, setHoursAddressForm] = useState(1)
  const [disableHourly, setDisableHourly] = useState(false)
  const [hourly, setHourly] = useState(false)

  const [isGateMeeting, setIsGateMeeting] = useState(false)
  const [isAirline, setIsAirline] = useState(false)
  const [airlineId, setAirlineId] = useState(0)
  const [airlines, setAirlines] = useState([])
  const [timePickerOpened, setTimePickerOpened] = useState(false)

  const [selectedDate, handleDateChange] = useState(null)
  const [selectedTime, handleTimeChange] = useState(null)

  const [redBorderOnSubmit, setRedBorderOnSubmit] = useState(false)
  const [redBorderOnSubmit2, setRedBorderOnSubmit2] = useState(false)
  const [redBorderOnSubmitForDate, setRedBorderOnSubmitForDate] =
    useState(false)
  const [redBorderOnSubmitForTime, setRedBorderOnSubmitForTime] =
    useState(false)
  const [redBorderOnSubmitForTime2, setRedBorderOnSubmitForTime2] =
    useState(false)
  const [redBorderOnSubmitForTime3, setRedBorderOnSubmitForTime3] =
    useState(false)
  const [redBorderOnSubmitForTime4, setRedBorderOnSubmitForTime4] =
    useState(false)
  const [redBorderOnSubmitForTime5, setRedBorderOnSubmitForTime5] =
    useState(false)
  const [redBorderOnSubmitForTime6, setRedBorderOnSubmitForTime6] =
    useState(false)
  const [redBorderOnSubmitForCarType, setRedBorderOnSubmitForCarType] =
    useState(false)
  const [redBorderOnSubmitForPassengers, setRedBorderOnSubmitForPassengers] =
    useState(false)
  const [redBorderOnAirlines, setRedBorderOnAirlines] = useState(false)
  const [
    isAirportPickupIncludedLocalState,
    setIsAirportPickupIncludedLocalState,
  ] = useState(false)

  const [time, setTime] = useState("")
  const startsWithTwo = time[0] === "2"

  const [timeMask, setTimeMask] = useState(false)

  const [date, setDate] = React.useState(null)

  const [show, setShow] = useState(false)

  // const { errors, register, handleSubmit, setValue, ...methods } = useForm({
  //   // mode: "onBlur",
  //   // resolver: yupResolver(schema),
  // })
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    ...methods
  } = useForm({})

  const schema = yup.object().shape({
    destinations: yup.object().shape({
      rideCheckPoint: yup.object().required(),
    }),
    // carsValidation: yup.number().required(),
  })

  const handleClick = (id) => {
    setCarSelectionID(id)
  }

  const handleDateChangeFunc = (time) => {
    handleDateChange(time)
  }

  var firstTimeHalf = time
    .substr(0, time.indexOf(":"))
    .match(/\d+/)
    ?.join()
    ?.split("")
  var secondTimeHalf = time
    .substr(time.indexOf(":"))
    .match(/\d+/)
    ?.join()
    ?.split("")
  var secondTimeHalf2 = time.substr(time.indexOf(":")).match(/\d+/)

  var firstTimeHalfRedux = formData?.timeForDefaultValue
    ?.substr(0, formData?.timeForDefaultValue?.indexOf(":"))
    ?.match(/\d+/)
    ?.join()
    ?.split("")
  var secondTimeHalfRedux = formData?.timeForDefaultValue
    ?.substr(formData?.timeForDefaultValue?.indexOf(":"))
    ?.match(/\d+/)
    ?.join()
    ?.split("")
  var secondTimeHalfRedux2 = formData?.timeForDefaultValue
    ?.substr(formData?.timeForDefaultValue?.indexOf(":"))
    ?.match(/\d+/)

  const onSubmit2 = (data) => {
    console.log(data)

    if (
      destinations[0].rideCheckPoint &&
      destinations[1].rideCheckPoint &&
      (date || formData.dateForDefaultValue) &&
      (time || formData.timeForDefaultValue) &&
      (firstTimeHalf?.[0] >= "0" || formData.timeForDefaultValue) &&
      (firstTimeHalf?.[1] >= "0" || formData.timeForDefaultValue) &&
      (secondTimeHalf?.[0] >= "0" || formData.timeForDefaultValue) &&
      (secondTimeHalf?.[1] >= "0" || formData.timeForDefaultValue) &&
      // false &&
      carSelectionID &&
      (passengers || formData.passengersQuantityForBackStep) &&
      (AMPM || formData?.timeForDefaultValueAMPM?.ampm)
    ) {
      if (isAirline) {
        if (!airlineId) {
          setRedBorderOnAirlines(true)
        } else {
          setRedBorderOnAirlines(false)
          return true
        }
      } else {
        return true
      }
    } else {
      if (!destinations[0].rideCheckPoint) {
        setRedBorderOnSubmit(true)
      } else {
        setRedBorderOnSubmit(false)
      }
      if (!destinations[1].rideCheckPoint) {
        setRedBorderOnSubmit2(true)
      } else {
        setRedBorderOnSubmit2(false)
      }
      if (
        !new Date(data.orderStartDate).toLocaleDateString("en-GB") ||
        !formData.dateForDefaultValue
      ) {
        setRedBorderOnSubmitForDate(true)
      } else {
        setRedBorderOnSubmitForDate(false)
      }
      // if (!time) {
      //   setRedBorderOnSubmitForTime(true)
      // } else {
      //   setRedBorderOnSubmitForTime(false)
      // }
      if (
        (firstTimeHalf?.[0] <= "0" && firstTimeHalfRedux?.[0] <= "0") ||
        (firstTimeHalf?.[0] <= "" && firstTimeHalfRedux?.[0] <= "0") ||
        (firstTimeHalf?.[0] == undefined &&
          firstTimeHalfRedux?.[0] <= undefined)
      ) {
        setRedBorderOnSubmitForTime2(true)
      } else {
        setRedBorderOnSubmitForTime2(false)
      }
      if (
        (firstTimeHalf?.[1] <= "0" && firstTimeHalfRedux?.[1] <= "0") ||
        (firstTimeHalf?.[1] <= "" && firstTimeHalfRedux?.[1] <= "") ||
        (firstTimeHalf?.[1] == undefined &&
          firstTimeHalfRedux?.[1] <= undefined)
      ) {
        setRedBorderOnSubmitForTime6(true)
      } else {
        setRedBorderOnSubmitForTime6(false)
      }
      if (
        (secondTimeHalf2 <= "0" && secondTimeHalfRedux2 <= "0") ||
        (secondTimeHalf2 <= "" && secondTimeHalfRedux2 <= "")
      ) {
        setRedBorderOnSubmitForTime3(true)
      } else {
        setRedBorderOnSubmitForTime3(false)
      }

      if (
        (secondTimeHalf?.[0] <= "0" && secondTimeHalfRedux?.[0] <= "0") ||
        (secondTimeHalf?.[0] <= "" && secondTimeHalfRedux?.[0] <= "")
      ) {
        setRedBorderOnSubmitForTime4(true)
      } else {
        setRedBorderOnSubmitForTime4(false)
      }
      if (
        (secondTimeHalf?.[1] <= "0" && secondTimeHalfRedux?.[1] <= "0") ||
        (secondTimeHalf?.[1] <= "" && secondTimeHalfRedux?.[1] <= "") ||
        (secondTimeHalf?.[1] == undefined &&
          secondTimeHalfRedux?.[1] <= undefined)
      ) {
        setRedBorderOnSubmitForTime5(true)
      } else {
        setRedBorderOnSubmitForTime5(false)
      }
      if (!AMPM && !formData?.timeForDefaultValueAMPM?.ampm) {
        setRedBorderOnSubmitForTime(true)
      } else {
        setRedBorderOnSubmitForTime(false)
      }
      if (carSelectionID) {
        setRedBorderOnSubmitForCarType(false)
      } else {
        setRedBorderOnSubmitForCarType(true)
      }
      if (formData.passengersQuantityForBackStep) {
        setRedBorderOnSubmitForPassengers(false)
      } else {
        setRedBorderOnSubmitForPassengers(true)
      }
    }
  }

  // onSubmit2 = onSubmit2

  const [openTimePicker, setOpenTimePicker] = useState(false)
  let firstAirline =
    destinations[0]?.rideCheckPoint.match(/(^|\W)Airport($|\W)/)
  // if (destinations[0]?.rideCheckPoint.match(/(^|\W)Airport($|\W)/)) {
  //   console.log("true")
  // } else {
  //   console.log("false")
  // }

  const fetchAirlines = async () => {
    const data = await placesApi.getAirlines()
    const res = data.map((airline) => {
      return {
        id: `${airline.id}`,
        name: `${airline.code} ` + `${airline.name}`,
      }
    })
    setAirlines(res)
  }

  const [flightNumber, setFlightNumber] = useState(null)

  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer = type === consts.PREV ? "<" : ">"
    // console.log(isEdge)
    return (
      <button
        onClick={() => {
          onClick()
          console.log(type)
        }}
        disabled={isEdge}
        className={
          isEdge ? styles.carouselButtonsDisabled : styles.carouselButtonsActive
        }
        //  styles.carouselButtonsActive
      >
        {pointer}
      </button>
    )
  }
  const [safetySeat, setSafetySeat] = useState(false)

  const [boosterSeat, setBoosterSeat] = useState(0)
  const [childSafetySeat, setChildSafetySeat] = useState(0)

  const [alignment, setAlignment] = React.useState("web")
  const [AMPM, setAMPM] = React.useState("")

  const handleChangeAMPM = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment)
      setTimeForDefaultValueAMPM(event.target.textContent)
    }
    setAMPM(event.target.textContent)
    setTimeForDefaultValueAMPM(event.target.textContent)
    console.log(event.target.textContent)
  }

  const [triggerToTimePicker, setTriggerToTimePicker] = useState(false)
  var eventCount = 0
  const inputStyle = {
    WebkitBoxShadow: "0 0 0 1000px #282828 inset",
    height: "0px",
  }
  // console.log(hourlyRedux)

  const mask = [
    /[0-2]/,
    startsWithTwo ? /[0-3]/ : /[0-9]/,
    ":",
    /[0-5]/,
    /[0-9]/,
  ]

  let formatChars = {
    7: "[0-1]",
    8: "[0-9]",
    9: "[0-5]",
    1: !timeMask ? "[0-9]" : "[0-2]",
    a: "[A-Za-z]",
    "*": "[A-Za-z0-9]",
  }
  let formatChars2 = {
    7: "[0-1]",
    8: "[0-2]",
    9: "[0-5]",
    1: "[0-2]",
    a: "[A-Za-z]",
    "*": "[A-Za-z0-9]",
  }

  const handleInput = (event) => {
    if (event.target.value == "0_:__") {
      setTimeMask(false)
    }
    if (event.target.value == "1_:__") {
      setTimeMask(true)
    }
    console.log("This is: " + setTimeForDefaultValue)
    setTimeForDefaultValue(event.target.value)
    setTime(event.target.value)
    // const emir = "00:10"
    // console.log(event.target.value)
    // console.log(time)
    // console.log(regexp.test(emir))
    console.log(
      event.target.value.match(/\d+/),
      event.target.value.substr(event.target.value.indexOf(":")).match(/\d+/)
    )
  }

  const [luggage, setLuggage] = useState(0)

  const onSubmit = (data) => {
    console.log(data)
    // console.log(data.orderStartDate, data.orderStartTime)

    // if (
    //   destinations[0].rideCheckPoint &&
    //   destinations[1].rideCheckPoint &&
    //   data.orderStartDate &&
    //   data.orderStartTime &&
    //   carSelectionID &&
    //   passengers
    // ) {
    if (onSubmit2(data)) {
      getCompanyCars({
        hours: hourly ? hoursAddressForm : 0,
        isGateMeeting: isGateMeeting,
        airlines: { id: airlineId },
        orderAddressDetails: [...destinations],
        flightNumber: data.flightNumber,
        page: pageSize,
        typeId: carSelectionID,
        bookingType: bookingType,
        passengersQuantity: formData.passengersQuantityForBackStep,
        isAirportPickupIncluded: isAirportPickupIncludedLocalState,
        boosterSeatCount: boosterSeat,
        safetySeatCount: childSafetySeat,
        luggageCount: luggage,
      })
      setSafetySeatCount(childSafetySeat)
      setBoosterSeatCount(boosterSeat)
      setDateForDefaultValue(date?.toLocaleDateString("en-US"))

      const forRes = date?.toLocaleDateString("en-US")
      const forRes2 = time + ` ${AMPM}`

      // ._d.toLocaleTimeString("en-US", {
      //   hour: "numeric",
      //   minute: "numeric",
      // })

      // + ` ${AMPM}`
      const resData = {
        orderStartDate: `${forRes}`,
        orderStartTime: `${forRes2}`,
      }
      const resData2 = {
        orderStartDateTime: `${forRes} ` + `${forRes2}`,
      }

      if (date) {
        setFormData(resData2)
      }

      console.log(
        destinations[0].rideCheckPoint,
        destinations[1].rideCheckPoint,
        data?.orderStartDate,
        data?.orderStartTime + ` ${AMPM}`,
        {
          hours: hourly ? hoursAddressForm : 0,
          isGateMeeting: isGateMeeting,
          airlines: { id: airlineId },
          orderAddressDetails: [...destinations],
          flightNumber: data.flightNumber,
          page: pageSize,
          typeId: carSelectionID,
          bookingType: bookingType,
          passengersQuantity: passengers,
          boosterSeatCount: boosterSeat,
        }
      )
      next()
    }
  }

  React.useEffect(() => {
    if (firstAirline) {
      setIsAirline(true)
      setBookingType(3)
      fetchAirlines()
      // setDisableHourly(true)
    } else {
      setIsAirline(false)
      setDisableHourly(false)
    }
  }, [firstAirline])
  React.useEffect(() => {
    if (hourly) {
      if (firstAirline) {
        setBookingType(3)
      } else {
        setBookingType(2)
      }

      // setDisableHourly(true)
    } else {
      if (firstAirline) {
        setBookingType(3)
      } else {
        setBookingType(1)
      }
    }
  })

  return (
    <AdressFormUIComponent
      carTypes={carTypes}
      formData={formData}
      setHourlyRedux={setHourlyRedux}
      setGateMeetingRedux={setGateMeetingRedux}
      gateMeeting={gateMeeting}
      hourlyAndSeatsRedux={hourlyAndSeatsRedux}
      resetInputs={resetInputs}
      setPassengersQuantityForBackStep={setPassengersQuantityForBackStep}
      isBoosterSeatExistOnBackend={isBoosterSeatExistOnBackend}
      isSafetySeatExistOnBackend={isSafetySeatExistOnBackend}
      airlines={airlines}
      alignment={alignment}
      bookingType={bookingType}
      boosterSeat={boosterSeat}
      carSelectionID={carSelectionID}
      childSafetySeat={childSafetySeat}
      destinations={destinations}
      flightNumber={flightNumber}
      formatChars={formatChars}
      handleChangeAMPM={handleChangeAMPM}
      handleClick={handleClick}
      handleInput={handleInput}
      handleSubmit={handleSubmit}
      hourly={hourly}
      hoursAddressForm={hoursAddressForm}
      isAirline={isAirline}
      luggage={luggage}
      methods={methods}
      register={register}
      myArrow={myArrow}
      onSubmit={onSubmit}
      passengers={passengers}
      redBorderOnAirlines={redBorderOnAirlines}
      redBorderOnSubmit={redBorderOnSubmit}
      redBorderOnSubmit2={redBorderOnSubmit2}
      redBorderOnSubmitForCarType={redBorderOnSubmitForCarType}
      redBorderOnSubmitForDate={redBorderOnSubmitForDate}
      redBorderOnSubmitForPassengers={redBorderOnSubmitForPassengers}
      redBorderOnSubmitForTime={redBorderOnSubmitForTime}
      redBorderOnSubmitForTime2={redBorderOnSubmitForTime2}
      redBorderOnSubmitForTime3={redBorderOnSubmitForTime3}
      redBorderOnSubmitForTime4={redBorderOnSubmitForTime4}
      redBorderOnSubmitForTime5={redBorderOnSubmitForTime5}
      redBorderOnSubmitForTime6={redBorderOnSubmitForTime6}
      safetySeat={safetySeat}
      setAirlineId={setAirlineId}
      setBoosterSeat={setBoosterSeat}
      setChildSafetySeat={setChildSafetySeat}
      setDestinations={setDestinations}
      setFlightNumber={setFlightNumber}
      setHourly={setHourly}
      setHoursAddressForm={setHoursAddressForm}
      setIsAirportPickupIncludedLocalState={
        setIsAirportPickupIncludedLocalState
      }
      setIsGateMeeting={setIsGateMeeting}
      setLuggage={setLuggage}
      setPassengers={setPassengers}
      setSafetySeat={setSafetySeat}
      // setValue={setValue}
      date={date}
      setDate={setDate}
      show={show}
      setShow={setShow}
      AMPM={AMPM}
      setDateForDefaultValue={setDateForDefaultValue}
      control={control}
    />
  )
}

const mapStateToProps = (state) => {
  return {
    carTypes: state.companyProfile.profile.carTypes,
    pageSize: state.cars.pageSize,
    formData: state.formData,
    resetInputs: state.resetWidgetInputs.resetInputs,
    gateMeeting: state.gateMeeting.isGateMeeting,
    hourlyAndSeatsRedux: state.hourlyAndSeatsRedux.hourlyRedux,
    isBoosterSeatExistOnBackend:
      state.companyProfile.isBoosterSeatExistOnBackend,
    isSafetySeatExistOnBackend: state.companyProfile.isSafetySeatExistOnBackend,
  }
}

export default connect(mapStateToProps, {
  getCarsByType,
  getCompanyCars,
  setFormData,
  setHourlyRedux,
  setGateMeetingRedux,
  setSafetySeatCount,
  setBoosterSeatCount,
  setDateForDefaultValue,
  setTimeForDefaultValue,
  setTimeForDefaultValueAMPM,
  setTimeForDefaultValueAlignment,
  setPassengersQuantityForBackStep,
})(AdressFormContainerComponent)
