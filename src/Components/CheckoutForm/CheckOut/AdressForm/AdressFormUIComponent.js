// import DateFnsUtils from "@date-io/date-fns"
import { ListItem, TextField, useMediaQuery } from "@material-ui/core"
// import Button from "@material-ui/core/Button"
// import Grid from "@material-ui/core/Grid"
// import InputAdornment from "@material-ui/core/InputAdornment"

// import Switch from "@material-ui/core/Switch"
// import Typography from "@material-ui/core/Typography"

// import * as yup from "yup"
// import Autocomplete from "@material-ui/lab/Autocomplete"
// import { MuiPickersUtilsProvider } from "@material-ui/pickers"
import React, { useState } from "react"
import { Controller, FormProvider, useForm } from "react-hook-form"
// import { connect } from "react-redux"
// import { placesApi } from "../../../../api/api"
// import {
//   ClockIcon,
//   DateIcon,
//   HourlyIcon,
//   LeftArrowForAdressForm,
//   MeetAndGreetIconBlack,
//   PlaneIcon,
//   RightArrowForAdressForm,
//   SafetySeatIcon,
//   Ticket,
// } from "../../../../assets/icons"
// import { getCarsByType } from "../../../../Redux/car-reducer"
import GoogleMap from "../../../GoogleMap/GoogleMapContainer/GoogleMap"
// import { getCompanyCars } from "../../../../Redux/car-reducer"
// import {
//   CustomFormInput,
//   DateInputControl,
// } from "../CustomFormInput/CustomFormInput"
import Hours from "./Hours/Hours"
import PassengerQuantity from "./PassengerQuantity/PassengerQuantity"
// import { withStyles } from "@material-ui/styles"

import Carousel, { consts } from "react-elastic-carousel"

import "../index.css"
// import { setHourlyRedux } from "../../../../Redux/hourly-reducer"
// import { setGateMeetingRedux } from "../../../../Redux/gate-meeting-reducer"
// import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab"
import SafetySeat from "./SafetySeat/SafetySeat"
import ReactInputMask from "react-input-mask"
import Luggage from "./Luggage/Luggage"
import { AntSwitch, useStyles } from "./AdressFormStyles"
import styles from "./AdressFormStyles/AdressForm.module.scss"
// import { StylesProvider } from "@material-ui/core/styles"
import "./AdressFormStyles/AdressFormDatePickerSeparatedStyles.scss"
import { Switch } from "../../../Helpers/Switch/Switch"
import "./AdressFormStyles/AdressFormCarousel.scss"
import CalendarPicker from "@mui/lab/CalendarPicker"
import AdapterDateFns from "@mui/lab/AdapterDateFns"
import LocalizationProvider from "@mui/lab/LocalizationProvider"
import { Modal } from "../../../Helpers/Modal/Modal"

{
  /*компонента перед экспортом обернута в react.memo*/
}

const AdressFormwithoutReactMemo = ({
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
  airlines,
  alignment,
  bookingType,
  boosterSeat,
  carSelectionID,
  childSafetySeat,
  destinations,
  flightNumber,
  formatChars,
  handleChangeAMPM,
  handleClick,
  handleInput,
  handleSubmit,
  hourly,
  hoursAddressForm,
  isAirline,
  luggage,
  methods,
  myArrow,
  onSubmit,
  passengers,
  redBorderOnAirlines,
  redBorderOnSubmit,
  redBorderOnSubmit2,
  redBorderOnSubmitForCarType,
  redBorderOnSubmitForDate,
  redBorderOnSubmitForPassengers,
  redBorderOnSubmitForTime,
  redBorderOnSubmitForTime2,
  redBorderOnSubmitForTime3,
  redBorderOnSubmitForTime4,
  redBorderOnSubmitForTime5,
  redBorderOnSubmitForTime6,
  safetySeat,
  setAirlineId,
  setBoosterSeat,
  setChildSafetySeat,
  setDestinations,
  setFlightNumber,
  setHourly,
  setHoursAddressForm,
  setIsAirportPickupIncludedLocalState,
  setIsGateMeeting,
  setLuggage,
  setPassengers,
  setSafetySeat,
  // setValue,
  date,
  setDate,
  show,
  setShow,
  AMPM,
  register,
  control,
}) => {
  // const classes = useStyles()
  const isMobile = useMediaQuery("(max-width:530px)")

  const MeetAndGreetSwitchBlock = (
    <>
      <div className={styles.meetAndGreetWrapper}>
        <div
          // container
          // direction="row"
          // alignItems="center"
          // justify="space-between"
          className={styles.meetAndGreetContainer}
        >
          <div
            // container
            // direction="row"
            // alignItems="center"
            // style={{ paddingLeft: "8px" }}
            className={styles.meetAndGreetIconAndNameContainer}
          >
            <span className={styles.meetAndGreetIconSelf}></span>
            <span
              // className={classes.swichesTextColor}
              // style={{
              //   fontSize: "15px",
              //   marginLeft: "7px",
              // }}
              className={styles.meetAndGreetIconAndNameTitle}
            >
              {"Meet & Greet/Luggage Assist"}
            </span>
          </div>

          <div className={styles.meetAndGreetSwitch}>
            {/* <AntSwitch
                            onClick={() => {
                              if (gateMeeting == false) {
                                // setIsGateMeeting(true)
                                setGateMeetingRedux(true)
                                setIsGateMeeting(true)
                                setIsAirportPickupIncludedLocalState(true)
                                console.log("true")
                              } else {
                                // setIsGateMeeting(false)
                                setGateMeetingRedux(false)
                                setIsGateMeeting(false)
                                setIsAirportPickupIncludedLocalState(false)
                                console.log("false")
                              }
                              // setIsGateMeeting(!isGateMeeting)
                              // setTimeout(() => {
                              //   console.log(isGateMeeting)
                              //   if (isGateMeeting == true) {
                              //     setGateMeetingRedux(true)
                              //   } else {
                              //     setGateMeetingRedux(false)
                              //   }
                              // }, 1500)
                            }}
                            color="primary"
                          /> */}
            <Switch
              checked={gateMeeting}
              onClick={() => {
                if (gateMeeting == false) {
                  // setIsGateMeeting(true)
                  setGateMeetingRedux(true)
                  setIsGateMeeting(true)
                  setIsAirportPickupIncludedLocalState(true)
                  console.log("true")
                } else {
                  // setIsGateMeeting(false)
                  setGateMeetingRedux(false)
                  setIsGateMeeting(false)
                  setIsAirportPickupIncludedLocalState(false)
                  console.log("false")
                }
                // setIsGateMeeting(!isGateMeeting)
                // setTimeout(() => {
                //   console.log(isGateMeeting)
                //   if (isGateMeeting == true) {
                //     setGateMeetingRedux(true)
                //   } else {
                //     setGateMeetingRedux(false)
                //   }
                // }, 1500)
              }}
              numberToIdentify={1}
            />
          </div>
        </div>
      </div>
      <Luggage luggage={luggage} setLuggage={setLuggage} />
    </>
  )

  return (
    <div className={styles.mainWrapper}>
      <FormProvider {...methods} style={{ width: "100%" }}>
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
          <div className={styles.mapAndDirectionsWrapper}>
            <GoogleMap
              setDestinations={setDestinations}
              destinations={destinations}
              orderAddressDetails={formData.orderAddressDetails}
              // setValue={setValue}
              redBorderOnSubmit={redBorderOnSubmit}
              redBorderOnSubmit2={redBorderOnSubmit2}
            />
          </div>
          <div className={styles.underMapOptionsWrapper}>
            <div className={styles.underMapOptionsContainer}>
              {(isAirline || formData.isAirportPickupIncluded) &&
                (formData.bookingType === 3 || bookingType === 3) && (
                  <div
                    // className={
                    //   redBorderOnAirlines
                    //     ? classes.redBorderForAirlines
                    //     : classes.redBorderForAirlinesDefault
                    // }
                    className={styles.underMapOptionsContainerForAirlines}
                  >
                    <div className={styles.airlinesItem}>
                      {/* <Autocomplete
                        id="combo-box-demo"
                        options={airlines}
                        defaultValue={null}
                        autoHighlight
                        disablePortal
                        getOptionLabel={(option) => option.name}
                        classes={{
                          popupIndicator: classes.popupIndicator,
                          option: classes.option,
                          paper: classes.selectedOption,
                        }}
                        renderOption={(option) => (
                          <>
                            <span>{option.code}</span>
                            {option.name} ({option.code})
                          </>
                        )}
                        renderInput={(params) => {
                          params.InputProps.startAdornment = (
                            <InputAdornment
                              position="end"
                              style={{ marginLeft: "11px", marginRight: "8px" }}
                            >
                              <PlaneIcon />
                            </InputAdornment>
                          )
                          return (
                            <input
                              {...params}
                              // fullWidth
                              placeholder="Airlines"
                              className={styles.airLinesInput}
                              // className={classes.airLinesInput}
                              // variant="standard"
                              // style={{
                              //   height: "40px",
                              //   width: "99.5%",
                              //   backgroundColor: "white",
                              //   boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.1)",
                              //   // paddingLeft: "10px",
                              //   // paddingRight: "10px",
                              //   borderRadius: "0px",
                              // }}
                              // InputProps={{
                              //   ...params.InputProps,
                              //   classes: {
                              //     root: classes.inputDateTime,
                              //     input: classes.input, // class name, e.g. `classes-nesting-root-x`
                              //     notchedOutline: classes.noBorder,
                              //   },
                              //   disableUnderline: true,
                              // }}
                            />
                          )
                        }}
                        onChange={(event, newValue) => {
                          newValue
                            ? setAirlineId(newValue.id)
                            : setAirlineId(null)
                        }}
                        name="airlines"
                      /> */}

                      <input
                        // {...params}
                        // fullWidth
                        // className={classes.inputPlaceholderFontSize}
                        placeholder="Airlines"
                        // variant="standard"
                        // style={{ background: "transparent" }}
                        autoComplete="off"
                        // InputProps={{
                        //   ...params.InputProps,
                        //   style: { inputStyle },
                        //   classes: {
                        //     root: classes.inputRootAutocomplete,
                        //     underline: classes.noBorder,
                        //     input: classes.input,
                        //   },
                        //   // disableUnderline: true,
                        // }}
                        list="airlines-list"
                        // className={
                        //   styles.cardholderInformationInputWithFullWidthSelf
                        // }
                        // onChange={(event, newValue) => {
                        //   console.log(cities)
                        //   newValue
                        //     ? setCitiesId(newValue.id)
                        //     : setCitiesId(null)
                        // }}
                        onChange={(event, newValue) => {
                          newValue
                            ? setAirlineId(newValue.id)
                            : setAirlineId(null)
                        }}
                        className={styles.airLinesInput}
                      />

                      <datalist id="airlines-list">
                        {/* id="combo-box-demo"
                  options={states}
                  defaultValue={null}
                  autoComplete="off"
                  autoHighlight
                  disablePortal
                  className={classes.mainAutocompleteClass}
                  InputProps={{
                    classes: {
                      root: classes.inputRootAutocomplete2,
                    },
                  }}
                  classes={{
                    popupIndicator: classes.popupIndicator,
                    option: classes.option,
                    paper: classes.selectedOption,
                  }}
                  getOptionLabel={(option) => option.name}
                  renderOption={(option) => (
                    <div style={{ fontSize: "14px" }}>
                      <span style={{ fontSize: "14px" }}>{option.code}</span>
                      {option.name} ({option.code})
                    </div>
                  )}
                  renderInput={(params) => (
                    
                  )}
                  
                  name="stateId" */}
                        {airlines.map((airline) => (
                          <option
                            // onChange={(event, newValue) => {
                            //   newValue
                            //     ? setCitiesId(newValue.id)
                            //     : setCitiesId(null)
                            // }}
                            value={airline.name}
                          />
                        ))}
                      </datalist>
                    </div>
                    <div className={styles.flightNumberContainer}>
                      <div className={styles.flightNumberItem}>
                        <input
                          name="flightNumber"
                          // variant="standard"
                          placeholder="Flight number"
                          // className={classes.flightNumberInput}
                          className={styles.flightNumberInput}
                          autoComplete="off"
                          // style={{
                          //   height: "100%",
                          //   // border: "none",

                          //   backgroundColor: "black",
                          //   // boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.1)",
                          //   // paddingLeft: "10px",
                          //   // paddingRight: "10px",
                          //   width: "99.5%",
                          //   marginBottom: "0px",
                          //   marginTop: "0px",
                          //   borderRadius: "0px",
                          // }}
                          defaultValue={null}
                          value={flightNumber}
                          onChange={(e) => setFlightNumber(e.target.value)}
                          // inputProps={{ style: inputStyle }}
                          // InputProps={{
                          //   classes: {
                          //     root: classes.inputDateTime,
                          //     input: classes.input, // class name, e.g. `classes-nesting-root-x`
                          //     underline: classes.noBorder,
                          //   },
                          //   startAdornment: (
                          //     <InputAdornment
                          //       position="start"
                          //       style={{
                          //         marginRight: "10px",
                          //         marginLeft: "14px",
                          //       }}
                          //     >
                          //       <Ticket />
                          //     </InputAdornment>
                          //   ),
                          // }}
                        />
                      </div>
                    </div>
                  </div>
                )}
              <div className={styles.dateTimeBlock}>
                {/* <MuiPickersUtilsProvider utils={DateFnsUtils}> */}
                <div className={styles.dateTimeBlockContainer}>
                  <div
                    // className={
                    //   redBorderOnSubmitForDate
                    //     ? classes.noBorderRed
                    //     : classes.noBorderDefault
                    // }
                    className={styles.datePicker}
                  >
                    {/* <ThemeProvider theme={materialTheme}> */}
                    {/* <StylesProvider injectFirst>
                        <DateInputControl
                          name="orderStartDate"
                          // inputVariant="primary"
                          // label="Pick up Date"
                          // inputVariant="outlined"
                          // style={{
                          //   backgroundColor: "black",
                          //   paddingLeft: "15px",
                          //   boxShadow: "4px 5px 30px rgba(0, 0, 0, 0.1)",
                          //   borderRadius: "0px",
                          //   height: "38px",

                          //   // width: "auto",
                          //   // "&.MuiDialog-paper .MuiPickersModal-dialogRoot .MuiDialog-paperScrollPaper .MuiDialog-paperWidthSm .MuiPaper-elevation24 .MuiPaper-rounded":
                          //   //   {
                          //   //     zIndex: "1000000000000000000",
                          //   //   },
                          // }}
                          placeholder="Pick up Date"
                          defaultValue={
                            formData.dateForDefaultValue && !resetInputs
                              ? formData.dateForDefaultValue
                              : null
                          }
                          disablePast
                          className={styles.datePickerSelf}
                          // fullWidth
                          // onChange={(event, x) => {
                          //   handleDateChange(event)
                          //   console.log(x)
                          // }}
                          // classes={{
                          //   root: "datePickerSelfRoot", // class name, e.g. `classes-nesting-root-x`
                          //   label: "datePickerSelf", // class name, e.g. `classes-nesting-label-x`
                          // }}
                          autoOk={true}
                          InputProps={{
                            classes: {
                              root: styles.datePickerSelfRoot,
                              input: styles.datePickerSelfInput, // class name, e.g. `classes-nesting-root-x`
                              // notchedOutline: redBorderOnSubmitForDate
                              //   ? classes.noBorderRed
                              //   : classes.noBorderDefault,
                            },
                            // disableUnderline: true,
                            // startAdornment: (
                            //   <InputAdornment
                            //     position="start"
                            //     style={{
                            //       marginRight: "10px",
                            //       marginLeft: "-3px",
                            //     }}
                            //   >
                            //     <DateIcon />
                            //   </InputAdornment>
                            // ),
                          }}
                        />
                      </StylesProvider> */}
                    <input
                      onClick={() => setShow(true)}
                      className={
                        redBorderOnSubmitForDate
                          ? styles.datePickerOpenButtonWithRedBorder
                          : styles.datePickerOpenButton
                      }
                      // value={
                      //   date
                      //     ? new Date(date).toLocaleDateString("en-US")
                      //     : "Pick up Date"
                      // }
                      placeholder="Pick up Date"
                      value={
                        formData.dateForDefaultValue && !resetInputs
                          ? formData.dateForDefaultValue
                          : date?.toLocaleDateString("en-US")
                      }
                    >
                      {/* <div className={styles.datePickerOpenButtonIcon}></div>
                      <span className={styles.datePickerOpenButtonText}>
                        
                      </span> */}
                    </input>
                    {/* {show && ( */}
                    <Modal onClose={() => setShow(false)} show={show}>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <div
                        // onClick={() => {
                        //   setShow(false)
                        // }}
                        >
                          {/* <Controller
                            name="orderStartDate"
                            control={control}
                            defaultValue={
                              formData.dateForDefaultValue && !resetInputs
                                ? formData.dateForDefaultValue
                                : null
                            }
                            render={() => ( */}
                          <CalendarPicker
                            date={date}
                            onChange={(newDate) => {
                              console.log(newDate)
                              if (newDate instanceof Date) {
                                setShow(false)
                              }
                              // setDateForDefaultValue(
                              //   newDate.toLocaleDateString("en-US")
                              // )
                              setDate(newDate)
                            }}
                            // {...rest}
                          />
                          {/* )}
                          /> */}
                        </div>
                      </LocalizationProvider>
                    </Modal>
                    {/* )} */}

                    {/* </ThemeProvider> */}
                  </div>
                  <div
                    // InputProps={{
                    //   classes: {
                    //     root: classes.inputTimehover,
                    //     input: classes.inputTimehover2, // class name, e.g. `classes-nesting-root-x`
                    //   },
                    // }}
                    className={styles.timePicker}
                  >
                    <ReactInputMask
                      name="orderStartTime"
                      mask="71:98"
                      autoComplete="off"
                      maskChar="_"
                      // alwaysShowMask={false}
                      formatChars={formatChars}
                      // mask={mask}
                      onChange={(e) => handleInput(e)}
                      // onChange={(e) => console.log("EMIR")}
                      // value={time}

                      // className={styles.timePickerMask}
                      value={!resetInputs ? formData.timeForDefaultValue : null}
                    >
                      {(inputProps) => {
                        return (
                          <div className={styles.timePickerContainer}>
                            <input
                              {...inputProps}
                              // variant="outlined"
                              placeholder="hh:mm"
                              autoComplete="off"
                              className={
                                redBorderOnSubmitForTime ||
                                redBorderOnSubmitForTime2 ||
                                redBorderOnSubmitForTime3 ||
                                redBorderOnSubmitForTime4 ||
                                redBorderOnSubmitForTime5 ||
                                redBorderOnSubmitForTime6
                                  ? styles.timePickerInputWithRedBorder
                                  : styles.timePickerInput
                              }
                              // fullWidth
                              // style={{
                              //   // borderRadius: "5px",
                              //   // "& .MuiTextField-root": {
                              //   //   backgroundColor: "red",
                              //   // },
                              //   // borderRaius: "8px",

                              //   backgroundColor: "none",
                              // }}
                              // InputProps={{
                              //   // classes: {
                              //   //   root: classes.inputDateTime,
                              //   //   input: classes.input, // class name, e.g. `classes-nesting-root-x`
                              //   //   notchedOutline:
                              //   //     redBorderOnSubmitForTime ||
                              //   //     redBorderOnSubmitForTime2 ||
                              //   //     redBorderOnSubmitForTime3 ||
                              //   //     redBorderOnSubmitForTime4 ||
                              //   //     redBorderOnSubmitForTime5 ||
                              //   //     redBorderOnSubmitForTime6
                              //   //       ? classes.noBorderRed
                              //   //       : classes.noBorderDefault,
                              //   // },
                              //   startAdornment: (
                              //     <InputAdornment
                              //       position="start"
                              //       style={{
                              //         marginRight: "8px",
                              //         marginLeft: "-3px",
                              //       }}
                              //     >
                              //       <ClockIcon />
                              //     </InputAdornment>
                              //   ),
                              //   endAdornment: (
                              //     <>
                              //       <ToggleButtonGroup
                              //         color="primary"
                              //         value={
                              //           formData.timeForDefaultValueAMPM
                              //             ?.alignment ||
                              //           formData.timeForDefaultValueAMPM?.ampm
                              //             ? formData.timeForDefaultValueAMPM
                              //                 ?.ampm
                              //             : alignment
                              //         }
                              //         exclusive
                              //         onChange={handleChangeAMPM}
                              //         style={{
                              //           display: "flex",
                              //           flexDirection: "row",
                              //           alignItems: "center",
                              //           marginRight: "-8px",
                              //         }}
                              //       >
                              //         <ToggleButton
                              //           value="AM"
                              //           className={classes.rootToggleButton}
                              //           style={{
                              //             width: "26px",
                              //             height: "20px",
                              //             fontSize: "13px",
                              //             paddingTop: "0px",
                              //             paddingBottom: "0px",
                              //           }}
                              //           onClick={(e) => {}}
                              //         >
                              //           AM
                              //         </ToggleButton>
                              //         <ToggleButton
                              //           value="PM"
                              //           className={classes.rootToggleButton}
                              //           style={{
                              //             width: "26px",
                              //             height: "20px",
                              //             marginLeft: "0px",
                              //             fontSize: "13px",
                              //             paddingTop: "0px",
                              //             paddingBottom: "0px",
                              //           }}
                              //         >
                              //           PM
                              //         </ToggleButton>
                              //       </ToggleButtonGroup>
                              //     </>
                              //   ),
                              // }}
                            />
                            <div
                              // color="primary"
                              // value={
                              //   formData.timeForDefaultValueAMPM?.alignment ||
                              //   formData.timeForDefaultValueAMPM?.ampm
                              //     ? formData.timeForDefaultValueAMPM?.ampm
                              //     : alignment
                              // }
                              // exclusive
                              // onChange={handleChangeAMPM}
                              // style={{
                              //   display: "flex",
                              //   flexDirection: "row",
                              //   alignItems: "center",
                              //   marginRight: "-8px",
                              // }}
                              className={styles.toggleButtonsContainer}
                            >
                              <div
                                // value="AM"
                                className={
                                  AMPM == "AM"
                                    ? styles.toggleButtonAMSelected
                                    : styles.toggleButtonAMNotSelected
                                }
                                // style={{
                                //   width: "26px",
                                //   height: "20px",
                                //   fontSize: "13px",
                                //   paddingTop: "0px",
                                //   paddingBottom: "0px",
                                // }}
                                // onClick={(e) => {}}
                                onClick={handleChangeAMPM}
                              >
                                AM
                              </div>
                              <div
                                // value="PM"
                                className={
                                  AMPM == "PM"
                                    ? styles.toggleButtonPMSelected
                                    : styles.toggleButtonPMNotSelected
                                }
                                // style={{
                                //   width: "26px",
                                //   height: "20px",
                                //   marginLeft: "0px",
                                //   fontSize: "13px",
                                //   paddingTop: "0px",
                                //   paddingBottom: "0px",
                                // }}
                                onClick={handleChangeAMPM}
                              >
                                PM
                              </div>
                            </div>
                          </div>
                        )
                      }}
                    </ReactInputMask>
                  </div>
                </div>
                {/* </MuiPickersUtilsProvider> */}
              </div>
              <div
                style={{ width: "100%" }}
                className={styles.passengersQuantityBlock}
              >
                <div
                  // className={
                  //   redBorderOnSubmitForPassengers
                  //     ? classes.redBorderForPassengers
                  //     : classes.redBorderForPassengersNone
                  // }
                  className={styles.passengersQuantityBlockContainer}
                >
                  <PassengerQuantity
                    passengersqState={formData.passengersQuantity}
                    setPassengers={setPassengers}
                    passengers={passengers}
                    setPassengersQuantityForBackStep={
                      setPassengersQuantityForBackStep
                    }
                    passengersQuantityForBackStep={
                      formData.passengersQuantityForBackStep
                    }
                  />
                </div>
              </div>
              {(isAirline || formData.isAirportPickupIncluded) &&
                (formData.bookingType === 3 || bookingType === 3) &&
                MeetAndGreetSwitchBlock}
              {destinations[1]?.rideCheckPoint.match(/(^|\W)Airport($|\W)/) &&
                MeetAndGreetSwitchBlock}
              {(isBoosterSeatExistOnBackend || isSafetySeatExistOnBackend) && (
                <div
                  // item
                  // style={{ width: "100%", marginTop: "6px" }}
                  className={styles.safetySeatWrapper}
                >
                  <div
                    // container
                    // direction="row"
                    // justify="space-between"
                    // alignItems="center"
                    className={styles.safetySeatContainer}
                  >
                    <div
                      // item
                      className={styles.safetySeatIconAndNameContainer}
                    >
                      <span className={styles.safetySeatIconSelf}></span>
                      <span
                        // className={classes.swichesTextColor}
                        // style={{
                        //   fontSize: "14px",
                        //   marginLeft: "9px",
                        // }}
                        className={styles.safetySeatIconAndNameTitle}
                      >
                        Safety Seat
                      </span>
                    </div>
                    {/* <AntSwitch
                      color="primary"
                      // disabled={disableHourly}
                      checked={safetySeat}
                      onClick={() => {
                        setSafetySeat(!safetySeat)
                      }}
                    /> */}
                    <Switch
                      checked={safetySeat}
                      onClick={() => {
                        setSafetySeat(!safetySeat)
                      }}
                      numberToIdentify={2}
                    />
                  </div>
                </div>
              )}
              <div
                // item
                // style={{ width: "100%" }}

                className={styles.SafetySeatCounterWrapper}
              >
                {safetySeat === true && (
                  <div className={styles.SafetySeatCounterContainer}>
                    <SafetySeat
                      setBoosterSeat={setBoosterSeat}
                      setChildSafetySeat={setChildSafetySeat}
                      boosterSeat={boosterSeat}
                      childSafetySeat={childSafetySeat}
                      isBoosterSeatExistOnBackend={isBoosterSeatExistOnBackend}
                      isSafetySeatExistOnBackend={isSafetySeatExistOnBackend}
                      // hoursState={formData.hours}
                      // hourly={hourly}
                      // hoursAddressForm={hoursAddressForm}
                      // setHoursAddressForm={setHoursAddressForm}
                    />
                  </div>
                )}
              </div>
              <div
                // item
                // style={{ width: "100%" }}

                className={styles.hourlyWrapper}
              >
                <div
                  // container
                  // direction="row"
                  // justify="space-between"
                  // alignItems="center"
                  className={styles.hourlyRowContainer}
                >
                  <div
                    // container
                    // direction="row"
                    // alignItems="center"
                    // style={{ paddingLeft: "-12px" }}
                    className={styles.hourlyIconAndNameContainer}
                  >
                    <span className={styles.hourlyIconSelf}></span>
                    <span
                      // className={classes.swichesTextColor}
                      // style={{ fontSize: "14px" }}
                      className={styles.hourlyIconAndNameTitle}
                    >
                      Hourly
                    </span>
                  </div>
                  {/* <AntSwitch
                    color="primary"
                    // disabled={disableHourly}
                    checked={hourly}
                    onClick={() => {
                      // if (hourly == false) {
                      //   // // setIsGateMeeting(true)
                      //   // setGateMeetingRedux(true)
                      //   setHourly(true)
                      //   // hourly = true
                      //   console.log("true")
                      //   console.log(hourly)
                      // } else {
                      //   // setIsGateMeeting(false)
                      //   // setGateMeetingRedux(false)
                      //   setHourly(true)
                      //   // hourly = false
                      //   console.log("false")
                      //   console.log(hourly)
                      // }
                      if (!hourlyAndSeatsRedux) {
                        // setIsGateMeeting(true)
                        setHourlyRedux(true)
                        // console.log("true")
                      } else {
                        // setIsGateMeeting(false)
                        setHourlyRedux(false)
                        // console.log("false")
                      }
                      setHourly(!hourly)

                      // setHourlyRedux()
                      // hourly ? setBookingType(2) : setBookingType(1)
                    }}
                  /> */}
                  <Switch
                    checked={hourly}
                    onClick={() => {
                      // if (hourly == false) {
                      //   // // setIsGateMeeting(true)
                      //   // setGateMeetingRedux(true)
                      //   setHourly(true)
                      //   // hourly = true
                      //   console.log("true")
                      //   console.log(hourly)
                      // } else {
                      //   // setIsGateMeeting(false)
                      //   // setGateMeetingRedux(false)
                      //   setHourly(true)
                      //   // hourly = false
                      //   console.log("false")
                      //   console.log(hourly)
                      // }
                      if (!hourlyAndSeatsRedux) {
                        // setIsGateMeeting(true)
                        setHourlyRedux(true)
                        // console.log("true")
                      } else {
                        // setIsGateMeeting(false)
                        setHourlyRedux(false)
                        // console.log("false")
                      }
                      setHourly(!hourly)

                      // setHourlyRedux()
                      // hourly ? setBookingType(2) : setBookingType(1)
                    }}
                    numberToIdentify={3}
                  />
                </div>
              </div>
              <div
                // item
                // style={{ width: "100%" }}
                className={styles.hourlyCounter}
              >
                {hourly === true && (
                  <Hours
                    hoursState={formData.hours}
                    hourly={hourly}
                    hoursAddressForm={hoursAddressForm}
                    setHoursAddressForm={setHoursAddressForm}
                  />
                )}
              </div>
              <div
                // item
                className={styles.preferencesWrapper}
              >
                <div
                  // item
                  className={styles.preferencesTitleContainer}
                >
                  <span className={styles.preferencesTitle}>Preferences</span>
                </div>
                <div
                  // item
                  className={styles.preferencesCarsContainer}
                >
                  <Carousel
                    renderArrow={myArrow}
                    itemsToShow={3}
                    pagination={false}
                    transitionMs={300}
                    // className={styles.carouselContainer}
                    // style={{ height: "78px" }}
                  >
                    {carTypes.map((car, indexOfEachCar) => (
                      <div
                        // container
                        // direction="column"
                        // // justify="center"
                        // alignItems="center"
                        className={
                          car.id === carSelectionID
                            ? styles.carItemContainerSelected
                            : styles.carItemContainer
                        }
                        onClick={() => handleClick(car.id)}
                        selected={car.id === carSelectionID}
                        name="carsValidation"
                      >
                        <div
                          // item
                          className={styles.carItemTitleContainer}
                        >
                          <span
                            // className={classes.carFont}
                            // noWrap
                            // variant="body2"
                            className={styles.carItemTitle}
                          >
                            {car.name}
                          </span>
                        </div>
                        <div item className={styles.carImageContainer}>
                          <img
                            alt="carImage"
                            src={car.imageUrl}
                            className={
                              indexOfEachCar == 2
                                ? styles.carImageStylesForBiggerTypeOfImage
                                : styles.carImage
                            }
                            item
                            className={styles.carImage}
                          />
                          {console.log(indexOfEachCar == 2)}
                        </div>
                      </div>
                    ))}
                  </Carousel>
                </div>
                {/* <div
                // item
                // className={classes.submitButton}
                > */}
                <div
                  // container
                  // direction="row"
                  // alignItems="center"
                  // justify="center"
                  // spacing={1}
                  className={styles.buttonGroupBlockContainer}
                  // style={{
                  //   paddingBottom: "14px",
                  //   paddingLeft: "16px",
                  //   paddingRight: "0px",
                  // }}
                >
                  <button
                    // variant="contained"
                    // fullWidth
                    // onClick={() => {
                    //   next()
                    //   setCarId(carCard)
                    // }}
                    // color="primary"
                    // endIcon={<ForwardArrowIcon />}
                    // className={classes.nextButtonSelf}
                    // disabled={carCard ? false : true}
                    // // style={{
                    // //   height: "50px",
                    // //   // paddingTop: "7px",
                    // //   textTransform: "none",
                    // // }}
                    type="submit"
                    className={styles.buttonNextSelf}
                  >
                    Next
                  </button>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}

const AdressFormUIComponent = React.memo(AdressFormwithoutReactMemo)

export default AdressFormUIComponent
