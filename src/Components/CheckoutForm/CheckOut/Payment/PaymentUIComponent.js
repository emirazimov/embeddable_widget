import React, { useState, useEffect } from "react"
// import { connect } from "react-redux"
import { FormProvider, useForm } from "react-hook-form"
import {
  // CustomFormInput,
  // CustomFormInputForPayment,
  CustomMaskInput,
} from "../CustomFormInput/CustomFormInput"
// import { makeStyles } from "@material-ui/core/styles"
// import { BackArrowIcon } from "../../../../assets/icons"
// import { yupResolver } from "@hookform/resolvers/yup"
// import * as yup from "yup"
// import Grid from "@material-ui/core/Grid"
// import Typography from "@material-ui/core/Typography"
// import Autocomplete from "@material-ui/lab/Autocomplete"
// import Button from "@material-ui/core/Button"
// import Checkbox from "@material-ui/core/Checkbox"
// // import Switch from "@material-ui/core/Switch"
// import { Link } from "@material-ui/core"
// import { placesApi } from "../../../../api/api"
// import TextField from "@material-ui/core/TextField"
// import {
//   createReservation,
//   setPaymentForm,
// } from "../../../../Redux/form-reducer"
import PrivacyPolicy from "../../../TermsOfUse/PrivacyPolicy/PrivacyPolicy"
import TermsOfUse from "../../../TermsOfUse/TermOfUse/TermOfUse"
// import { withStyles } from "@material-ui/styles"
// import { Number, Cvc, Expiration } from "react-credit-card-primitives"

import Cleave from "cleave.js/react"
import "./PaymentStyles.css"
// import { AntSwitch } from "../AdressForm/AdressFormStyles"
// import { useStyles } from "./PaymentStyles"
// import { styles } from "@material-ui/pickers/views/Calendar/Calendar"
import styles from "./Payment.module.scss"
import { Switch } from "../../../Helpers/Switch/Switch"
// import ReactInputMask from "react-input-mask"

// const SignupSchema = yup.object().shape({
//   // greetClientInfo: yup.object().shape({
//   //     firstName: yup.string().required('Required'),
//   //     phoneNumber: yup.number('Not a number').required('Required'),
//   //     lastName: yup.string().required('Required'),
//   //     email: yup.string().email('invalid email').required('Required'),
//   // }),
//   client: yup.object().shape({
//     firstName: yup.string().required("Required"),
//     lastName: yup.string().required("Required"),
//     address: yup.string().required("Required"),
//     zip: yup.number().required("Required").typeError("Not a number"),
//     email: yup.string().email("invalid email").required("Required"),
//     phoneNumber: yup.number().typeError("Not a number").required("Required"),
//   }),
//   paymentInfo: yup.object().shape({
//     // cardNumber: yup.string().required("Required"),
//     month: yup.string().required("Required"),
//     cvc: yup.number().required("Required").typeError("Not a number"),
//   }),
// })

const PaymentUIComponent = ({
  next,
  back,
  total,
  formSummary,
  setPaymentForm,
  SignupSchema,
  states,
  setStates,
  cities,
  setCities,
  statesId,
  setStatesId,
  citiesId,
  setCitiesId,
  checked,
  setChecked,
  register,
  handleSubmit,
  formState,
  errors,
  methods,
  riderDetails,
  setRiderDetails,
  statesIdError,
  setStatesIdError,
  citiesIdError,
  setCitiesIdError,
  cardForPaymentSubmit,
  setCardForPaymentSubmit,
  cardForPaymentSubmitError,
  setCardForPaymentSubmitError,
  restrictAmex,
  setRestrictAmex,
  onSubmit,
  cardType,
  setCardType,
  creditCardNum,
  setCreditCardNum,
  handleNum,
  handleType,
  extractStateId,
  extractCityId,
}) => {
  // const classes = useStyles()

  const inputStyle = {
    WebkitBoxShadow: "0 0 0 1000px transparent inset",
    height: "0px",
    // width: "100%",
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  // }

  return (
    <FormProvider {...methods}>
      <form
        // onBlur={(e) => {
        //   handleSubmit(e)
        // }}
        onSubmit={handleSubmit(onSubmit)}
        className={styles.formWrapper}
      >
        <div
          // container
          // justify="center"
          // className={classes.contentContainer}
          className={styles.paymentWrapper}
        >
          <div
            // container
            // direction="column"
            // spacing={2}
            className={styles.paymentContainer}
          >
            <div
              // item
              className={styles.paymentTitleContainer}
            >
              <span
                // variant="body2"
                // style={{
                //   fontFamily: "Roboto",
                //   fontWeight: 500,
                //   // color: "white",
                //   fontSize: "22px",
                //   lineHeight: "36px",
                // }}
                // className={classes.paymentTexts}
                className={styles.paymentTitleSelf}
              >
                Payment
              </span>
            </div>
            <div
              // item
              className={styles.isPassengerCardholderContainer}
            >
              {/* <div
                // container
                // direction="row"
                // justify="space-between"
                // alignItems="center"
                className={styles.isPassengerCardholderContainer}
              > */}
              <div
                // item
                className={styles.isPassengerCardholderTitleContainer}
              >
                <span
                  // variant="body1"
                  // style={{
                  //   //   marginTop: "7px",
                  //   color: riderDetails ? "white" : "#757575",
                  //   fontSize: "15px",
                  // }}
                  // className={classes.paymentTexts}
                  className={
                    riderDetails
                      ? styles.isPassengerCardholderTitleWhiteSelf
                      : styles.isPassengerCardholderTitleGreySelf
                  }
                  // style={{}}
                >
                  Is passenger a cardholder?
                </span>
              </div>
              <div
                // item
                className={styles.isPassengerCardholderSwitchContainer}
              >
                {/* <AntSwitch
                  // checked={riderDetails}
                  // onClick={() => setRiderDetails(!riderDetails)}
                  color="primary"
                /> */}

                {/* <div className={styles.switchContainer}>
                  <input
                    type="checkbox"
                    name="switch"
                    className={styles.switchSelf}
                    id="switch"
                    checked={riderDetails}
                    onClick={() => setRiderDetails(!riderDetails)}
                  />
                  <label for="switch"></label>
                </div> */}

                <Switch
                  checked={riderDetails}
                  onClick={() => setRiderDetails(!riderDetails)}
                  numberToIdentify={4}
                />
              </div>
              {/* </div> */}
            </div>
            {!riderDetails && (
              <div
                // item
                // style={{ paddingBottom: "20px" }}
                className={styles.passengerDetailWrapper}
              >
                <div
                  // item
                  // style={{ paddingBottom: "13px" }}
                  className={styles.passengerDetailTitleContainer}
                >
                  <span
                    // style={{ fontSize: "15px" }}
                    // className={classes.paymentTexts}
                    className={styles.passengerDetailTitleSelf}
                  >
                    Passenger Detail
                  </span>
                </div>
                <div
                  // item
                  className={styles.cardholderInformationInputsWrapper}
                >
                  {/* <Grid
                    container
                    direction="row"
                    justify="space-between"
                    spacing={2}
                    style={{ marginBottom: "8px" }}
                  > */}
                  <div
                    // item
                    // xs={6}
                    className={
                      styles.cardholderInformationInputSelfContainerJustForFirstAndLastName
                    }
                  >
                    <input
                      // variant="standard"
                      name="greetClientInfo.firstName"
                      autoComplete="off"
                      placeholder="First Name"
                      // className={classes.inputPlaceholderFontSize}
                      defaultValue={formSummary.greetClientInfo.firstName}
                      // style={{
                      //   width: "100%",
                      //   background: "transparent",
                      // }}
                      className={styles.cardholderInformationInputSelfFirstName}
                      ref={register}
                    />
                  </div>
                  <div
                    // item
                    // xs={6}
                    className={styles.cardholderInformationInputSelfContainer2}
                  >
                    <input
                      // variant="standard"
                      name="greetClientInfo.lastName"
                      autoComplete="off"
                      // className={classes.inputPlaceholderFontSize}
                      defaultValue={formSummary.greetClientInfo.lastName}
                      placeholder="Last Name"
                      // style={{ width: "100%", background: "transparent" }}
                      className={styles.cardholderInformationInputSelfLastName}
                      ref={register}
                    />
                  </div>
                  {/* </Grid> */}
                </div>
                <div
                  // item
                  className={styles.cardholderInformationInputsWrapper}
                >
                  {/* <Grid
                    container
                    direction="row"
                    justify="space-between"
                    spacing={2}
                  > */}
                  <div
                    // item
                    // xs={6}
                    className={styles.cardholderInformationInputSelfContainer1}
                  >
                    <input
                      name="greetClientInfo.email"
                      // variant="standard"
                      autoComplete="off"
                      placeholder="Email"
                      // className={classes.inputPlaceholderFontSize}
                      defaultValue={formSummary.greetClientInfo.email}
                      // style={{ width: "100%", background: "transparent" }}
                      className={styles.cardholderInformationInputSelf}
                      ref={register}
                    />
                  </div>
                  <div
                    // item
                    // xs={6}
                    className={styles.cardholderInformationInputSelfContainer2}
                  >
                    <input
                      // variant="standard"
                      name="greetClientInfo.phoneNumber"
                      autoComplete="off"
                      defaultValue={formSummary.greetClientInfo.phoneNumber}
                      placeholder="Phone Number"
                      // className={classes.inputPlaceholderFontSize}
                      // style={{ width: "100%", background: "transparent" }}
                      className={styles.cardholderInformationInputSelf}
                      ref={register}
                    />
                  </div>
                  {/* </Grid> */}
                </div>
              </div>
            )}
            <div
              // item
              className={styles.cardholderInformationWrapper}
            >
              <div
                // item
                // style={{ paddingBottom: "13px" }}
                className={styles.cardholderInformationTitleContainer}
              >
                <span
                  // style={{ fontSize: "15px" }}
                  // className={classes.paymentTexts}
                  className={styles.cardholderInformationTitleSelf}
                >
                  Cardholder Information
                </span>
              </div>
              <div
                // container
                // direction="row"
                // justify="space-between"
                // spacing={2}
                className={styles.cardholderInformationInputsWrapper}
              >
                <div
                  className={styles.cardholderInformationInputSelfContainer}
                  style={{ width: "50%" }}
                >
                  <div
                    // item
                    // xs={6}

                    className={
                      styles.cardholderInformationInputSelfContainerJustForFirstAndLastName
                    }
                    style={{ width: "100%" }}
                  >
                    <input
                      // variant="standard"
                      name="client.firstName"
                      autoComplete="off"
                      // className={classes.inputPlaceholderFontSize}
                      defaultValue={formSummary.client.firstName}
                      // style={{
                      //   fontSize: "14px",
                      //   width: "100%",
                      //   background: "transparent",
                      // }}
                      placeholder="First Name"
                      error={errors.client?.firstName ? true : false}
                      className={styles.cardholderInformationInputSelfFirstName}
                      ref={register}
                      style={{ width: "100%" }}
                    />
                  </div>
                  {errors.client?.firstName && (
                    <p className={styles.errorInputs}>
                      {errors.client?.firstName.message}
                    </p>
                  )}
                </div>
                <div
                  // item
                  // xs={6}
                  className={styles.cardholderInformationInputSelfContainer}
                  style={{ width: "50%" }}
                >
                  <input
                    // variant="standard"
                    name="client.lastName"
                    autoComplete="off"
                    placeholder="Last Name"
                    // className={classes.inputPlaceholderFontSize}
                    defaultValue={formSummary.client.lastName}
                    // style={{ width: "100%", background: "transparent" }}
                    error={errors.client?.lastName ? true : false}
                    className={styles.cardholderInformationInputSelfLastName}
                    ref={register}
                    style={{ width: "100%" }}
                  />
                  {errors.client?.lastName && (
                    <p className={styles.errorInputs}>
                      {errors.client?.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              <div
                // item
                className={styles.cardholderInformationInputsWrapper}
              >
                {/* <Grid
                  container
                  direction="row"
                  justify="space-between"
                  spacing={2}
                > */}
                <div
                  // item
                  // xs={6}
                  className={styles.cardholderInformationInputSelfContainer1}
                >
                  <input
                    name="client.email"
                    // variant="standard"
                    autoComplete="off"
                    // className={classes.inputPlaceholderFontSize}
                    placeholder="Email"
                    // style={{ width: "100%", background: "transparent" }}
                    defaultValue={formSummary.client.email}
                    error={errors.client?.email ? true : false}
                    className={styles.cardholderInformationInputSelf}
                    ref={register}
                  />
                  {errors.client?.email && (
                    <p className={styles.errorInputs}>
                      {errors.client?.email.message}
                    </p>
                  )}
                </div>
                <div
                  // item
                  // xs={6}
                  className={styles.cardholderInformationInputSelfContainer2}
                >
                  <input
                    // variant="standard"
                    name="client.phoneNumber"
                    autoComplete="off"
                    // className={classes.inputPlaceholderFontSize}
                    defaultValue={formSummary.client.phoneNumber}
                    placeholder="Phone Number"
                    // style={{ width: "100%", background: "transparent" }}
                    error={errors.client?.phoneNumber ? true : false}
                    className={styles.cardholderInformationInputSelf}
                    ref={register}
                  />
                  {errors.client?.phoneNumber && (
                    <p className={styles.errorInputs}>
                      {errors.client?.phoneNumber.message}
                    </p>
                  )}
                </div>
                {/* </Grid> */}
              </div>
              <div
                // item
                className={styles.cardholderInformationInputsWrapper}
              >
                <div
                  // item
                  className={
                    styles.cardholderInformationInputsContainerForPositionErrorMessage
                  }
                >
                  <input
                    name="client.address"
                    // variant="standard"
                    autoComplete="off"
                    // className={classes.inputPlaceholderFontSize}
                    // style={{ height: "100%", background: "transparent" }}
                    placeholder="Address"
                    defaultValue={formSummary.client.address}
                    // fullWidth
                    ref={register}
                    error={errors.client?.address ? true : false}
                    className={
                      styles.cardholderInformationInputWithFullWidthSelf
                    }
                  />
                  {errors.client?.address && (
                    <p className={styles.errorInputs}>
                      {errors.client?.address.message}
                    </p>
                  )}
                </div>
              </div>

              <div
                // item
                className={styles.cardholderInformationInputsWrapper}
              >
                <div
                  // item
                  className={
                    styles.cardholderInformationInputsContainerForPositionErrorMessage
                  }
                >
                  <input
                    // {...params}
                    // fullWidth
                    // className={classes.inputPlaceholderFontSize}
                    placeholder="State"
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
                    ref={register}
                    onChange={(event, newValue) => {
                      // console.log(event)
                      event.target.value
                        ? extractStateId(event.target.value)
                        : setStatesId(null)
                      // newValue ? setStatesId(newValue.id) : setStatesId(null)
                    }}
                    list="states-list"
                    className={
                      styles.cardholderInformationInputWithFullWidthSelf
                    }
                  />

                  <datalist id="states-list">
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
                    {states.map((state) => (
                      <option value={state.name} id={state.id} />
                    ))}
                  </datalist>

                  {statesIdError && (
                    <p className={styles.errorInputs}>Required</p>
                  )}
                </div>
              </div>
              <div
                // item
                className={styles.cardholderInformationInputsWrapper}
                // style={{ width: '100%' }}
              >
                {/* <Grid
                  container
                  direction="row"
                  justify="space-between"
                  spacing={2}
                > */}
                <div
                  // item
                  // xs={6}
                  className={styles.cardholderInformationInputSelfContainer1}
                  // style={{ width: '50%' }}
                >
                  {/* <div style={{ width: '100%' }}> */}
                  {/* <Autocomplete
                    id="combo-box-demo"
                    options={cities}
                    key={statesId}
                    autoComplete="off"
                    defaultValue={null}
                    autoHighlight
                    disablePortal
                    getOptionLabel={(option) => option.name}
                    className={classes.mainAutocompleteClass}
                    classes={{
                      popupIndicator: classes.popupIndicator,
                      option: classes.option,
                      paper: classes.selectedOption,
                    }}
                    renderOption={(option) => (
                      <div style={{ fontSize: "13px" }}>
                        <span style={{ fontSize: "14px" }}>{option.code}</span>
                        {option.name} ({option.code})
                      </div>
                    )}
                    renderInput={(params) => (
                      <input
                        {...params}
                        // fullWidth
                        className={classes.inputPlaceholderFontSize}
                        placeholder="Cities"
                        // variant="standard"
                        // style={{ background: "transparent" }}
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
                        className={styles.cardholderInformationInputSelf}
                      />
                    )}
                    onChange={(event, newValue) => {
                      newValue ? setCitiesId(newValue.id) : setCitiesId(null)
                    }}
                    name="cityId"
                  /> */}

                  <input
                    // {...params}
                    // fullWidth
                    // className={classes.inputPlaceholderFontSize}
                    placeholder="Cities"
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
                    list="cities-list"
                    // className={
                    //   styles.cardholderInformationInputWithFullWidthSelf
                    // }
                    ref={register}
                    onChange={(event, newValue) => {
                      console.log(cities)
                      event.target.value
                        ? extractCityId(event.target.value)
                        : setCitiesId(null)
                    }}
                    className={styles.cardholderInformationInputSelf}
                    style={{
                      width: "100%",
                      paddingRight: "25px",
                      boxSizing: "border-box",
                    }}
                  />

                  <datalist id="cities-list">
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
                    {cities.map((city) => (
                      <option
                        // onChange={(event, newValue) => {
                        //   newValue
                        //     ? setCitiesId(newValue.id)
                        //     : setCitiesId(null)
                        // }}
                        value={city.name}
                      />
                    ))}
                  </datalist>

                  {citiesIdError && (
                    <p className={styles.errorInputs}>Required</p>
                  )}
                  {/* </div> */}
                </div>
                <div
                  // item
                  // xs={6}
                  className={styles.cardholderInformationInputSelfContainer2}
                >
                  <input
                    // variant="standard"
                    name="client.zip"
                    autoComplete="off"
                    // className={classes.inputPlaceholderFontSize}
                    placeholder="ZIP"
                    // style={{ width: "100%", background: "transparent" }}
                    ref={register}
                    defaultValue={formSummary.client.zip}
                    error={errors.client?.address ? true : false}
                    className={styles.cardholderInformationInputSelf}
                  />
                  {errors.client?.zip && (
                    <p className={styles.errorInputs}>
                      {errors.client?.zip.message}
                    </p>
                  )}
                </div>
                {/* </Grid> */}
              </div>
            </div>
            <div className={styles.cardInformationWrapper}>
              <div className={styles.cardInformationTitleContainer}>
                <span
                  // style={{ fontSize: "15px" }}
                  // className={classes.paymentTexts}
                  className={styles.cardInformationTitleSelf}
                >
                  Card information
                </span>
              </div>
              <div
                // item
                className={styles.cardholderInformationInputsWrapper}
              >
                {/* <CustomMaskInput
                name="paymentInfo.cardNumber"
                mask="9999-9999-9999-9999"
                autoComplete="off"
                defaultValue={formSummary.paymentInfo.cardNumber}
              >
                {() => (
                  <TextField
                    variant="standard"
                    className={classes.inputPlaceholderFontSize}
                    placeholder="Card number/0000 0000 0000 0000"
                    autoComplete="off"
                    style={{ background: "transparent" }}
                    fullWidth
                    error={errors.paymentInfo?.cardNumber ? true : false}
                    // inputProps={{ style: inputStyle }}
                    InputProps={{
                      // ...params.InputProps,
                      // style: { inputStyle },
                      classes: {
                        root: classes.inputRootAutocompleteCardNumber,
                        underline: classes.noBorder,
                        input: classes.input,
                      },
                      // disableUnderline: true,
                    }}
                  />
                )}
              </CustomMaskInput> */}
                <div
                  // item
                  className={
                    styles.cardholderInformationInputsContainerForPositionErrorMessage
                  }
                >
                  <Cleave
                    delimiter="-"
                    options={{
                      creditCard: true,
                      onCreditCardTypeChanged: handleType,
                    }}
                    name="paymentInfo.cardNumber"
                    error={errors.paymentInfo?.cardNumber ? true : false}
                    onChange={handleNum}
                    placeholder="Card number"
                    className="credit-card-input-by-bookinglane"
                    className={
                      styles.cardholderInformationInputWithFullWidthSelf
                    }
                  />

                  {cardForPaymentSubmitError && (
                    <p className={styles.errorInputs}>Required</p>
                  )}
                </div>
              </div>
              <div
                // item
                className={styles.cardholderInformationInputsWrapper}
              >
                {/* <Grid
                  container
                  direction="row"
                  justify="space-between"
                  spacing={2}
                > */}
                <div
                  // item
                  // xs={6}
                  className={styles.cardholderInformationInputSelfContainer1}
                >
                  <CustomMaskInput
                    name="paymentInfo.month"
                    ref={register}
                    mask="99/99"
                    autoComplete="off"
                    defaultValue={`${formSummary.paymentInfo.month}/${formSummary.paymentInfo.year}`}
                  >
                    {() => (
                      <input
                        // variant="standard"
                        // className={classes.inputPlaceholderFontSize}
                        placeholder="mm/yy"
                        autoComplete="off"
                        // fullWidth
                        error={errors.paymentInfo?.month ? true : false}
                        // ref={register}
                        // style={{ background: "transparent" }}
                        // inputProps={{ style: inputStyle }}
                        // InputProps={{
                        //   // ...params.InputProps,
                        //   classes: {
                        //     root: classes.inputRootAutocompleteCardNumber,
                        //     underline: classes.noBorder,
                        //     input: classes.input,
                        //   },
                        //   // disableUnderline: true,
                        // }}
                        className={styles.cardholderInformationInputSelf}
                      />
                    )}
                  </CustomMaskInput>
                  {errors.paymentInfo?.month && (
                    <p className={styles.errorInputs}>
                      {errors.paymentInfo?.month.message}
                    </p>
                  )}
                </div>
                <div
                  // item
                  // xs={6}
                  className={styles.cardholderInformationInputSelfContainer2}
                >
                  <CustomMaskInput
                    name="paymentInfo.cvc"
                    ref={register}
                    // type="date"
                    mask={cardType == "amex" ? "9999" : "999"}
                    autoComplete="off"
                    defaultValue={formSummary.paymentInfo.cvc}
                  >
                    {() => (
                      <input
                        // variant="standard"
                        // className={classes.inputPlaceholderFontSize}
                        placeholder="CVV/CVC"
                        autoComplete="off"
                        // fullWidth
                        error={errors.paymentInfo?.cvc ? true : false}
                        // ref={register}
                        // style={{ background: "transparent" }}
                        // // inputProps={{ style: inputStyle }}
                        // InputProps={{
                        //   // ...params.InputProps,
                        //   classes: {
                        //     root: classes.inputRootAutocompleteCardNumber,
                        //     underline: classes.noBorder,
                        //     input: classes.input,
                        //   },
                        //   // disableUnderline: true,
                        // }}
                        className={styles.cardholderInformationInputSelf}
                      />
                    )}
                  </CustomMaskInput>
                  {errors.paymentInfo?.cvc && (
                    <p className={styles.errorInputs}>
                      {errors.paymentInfo?.cvc.message}
                    </p>
                  )}
                </div>
                {/* </Grid> */}
              </div>
            </div>
            <div
              // item
              className={styles.checkboxWrapper}
            >
              <label className={styles.checkmarkContainer}>
                <input type="checkbox" onClick={() => setChecked(!checked)} />
                <span className={styles.checkmarkSelf}></span>
              </label>
              {/* <a underline="always" style={{ color: "#BABABA" }}> */}
              <TermsOfUse />
              {/* </a> */}
              {/* <a underline="always" style={{ color: "#BABABA" }}> */}
              <PrivacyPolicy />
              {/* </a> */}
            </div>
            <div
              // item
              className={styles.buttonGroupBlock}
            >
              <div
                // container
                // direction="row"
                // alignItems="center"
                // justify="center"
                // spacing={1}
                // className={classes.buttonGroup}
                className={styles.buttonGroupBlockContainer}
              >
                {/* <Grid item xs={6}> */}
                <button
                  variant="contained"
                  color="primary"
                  // fullWidth
                  onClick={back}
                  // startIcon={<BackArrowIcon />}
                  // className={classes.backButtonSelf}
                  className={styles.buttonBackSelf}
                >
                  Back
                </button>
                {/* </Grid> */}
                {/* <Grid item xs={6}> */}
                <button
                  // variant="contained"
                  // fullWidth
                  type="submit"
                  // color="primary"
                  // className={classes.payButtonSelf}
                  disabled={!checked}
                  className={styles.buttonNextSelf}
                >
                  Pay ${total}
                </button>
                {/* </Grid> */}
              </div>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  )
}

export default PaymentUIComponent
