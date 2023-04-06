import React, { useEffect } from "react"
import { connect } from "react-redux"
import { Preloader } from "../../Helpers/Preloader/Preloader"
// import Grid from "@material-ui/core/Grid"
import { Success } from "../../../assets/icons"
// import Typography from "@material-ui/core/Typography"
// import Button from "@material-ui/core/Button"
import ReservationFailed from "../ReservationFailed/ReservationFailed"
import {
  createReservation,
  logOut,
  setIsAirportPickupIncluded,
} from "../../../Redux/form-reducer"
import { setResetWidgetInputs } from "../../../Redux/reset-widget-inputs-reducer"
import { setGotAddressError } from "../../../Redux/company-profile-reducer"
import styles from "./Confirmation.module.scss"

// setResetWidgetInputs,
// setGotAddressError,
// setIsAirportPickupIncluded

const Confirmation = ({
  createReservation,
  companyName,
  email,
  setExpanded,
  isSuccess,
  isFetching,
  setActiveStep,
  formSummary,
  logOut,
  failMessage,
  setBackgroundScrollStop,
  setResetWidgetInputs,
  setGotAddressError,
  setIsAirportPickupIncluded,
}) => {
  useEffect(() => {
    createReservation(formSummary)
  }, [])
  const textColor = "white"

  return (
    <>
      {isFetching ? (
        <Preloader />
      ) : isSuccess ? (
        <div
          // container
          // direction="column"
          // spacing={2}
          // justify="center"
          // alignItems="center"
          // style={{ height: "80vh", backgroundColor: "black" }}
          className={styles.confirmationWrapper}
        >
          {/* <div></div> */}
          {/* <Grid item>
                            <Typography variant='body2'>Success</Typography>
                        </Grid> */}
          <div className={styles.confirmationTextContainer}>
            <Success />
            <p
              // variant="body2"
              // style={{ color: textColor }}
              // align="center"
              className={styles.confirmationTextSelf1}
            >
              Your reservation was successfully submitted. A confirmation email
              was sent to {email && email}.
            </p>
            <p
              // variant="body2"
              // style={{ color: textColor }}
              className={styles.confirmationTextSelf2}
            >
              Thanks, {companyName && companyName}
            </p>
          </div>
          <div className={styles.confirmationButtonContainer}>
            <button
              onClick={() => {
                setExpanded(false)
                setActiveStep(0)

                setBackgroundScrollStop(false)
                setResetWidgetInputs(true)
                setGotAddressError(false)
                setIsAirportPickupIncluded(false)
                // logOut()
              }}
              className={styles.confirmationButtonSelf}
            >
              Done
            </button>
          </div>
        </div>
      ) : (
        <ReservationFailed
          setActiveStep={setActiveStep}
          // failMessage={failMessage}
        />
      )}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    isSuccess: state.companyProfile.isSuccess,
    failMessage: state.companyProfile.failMessage,
    isFetching: state.cars.isFetching,
    formSummary: state.formData,
    email: state.formData.client.email,
    companyName: state.companyProfile.profile.companyName,
  }
}

export default connect(mapStateToProps, {
  createReservation,
  logOut,
  setResetWidgetInputs,
  setGotAddressError,
  setIsAirportPickupIncluded,
})(Confirmation)
