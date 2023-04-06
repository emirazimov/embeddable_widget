import { connect } from "react-redux"
import {
  setCarId,
  setIsAirportPickupIncluded,
} from "../../../../Redux/form-reducer"
import { setGateMeetingRedux } from "../../../../Redux/gate-meeting-reducer"
import { setResetWidgetInputs } from "../../../../Redux/reset-widget-inputs-reducer"
import FleetFormUIComponent from "./FleetFormUIComponent"
import React from "react"

const FleetFormContainerComponent = ({
  cars,
  isFetching,
  back,
  next,
  setCarId,
  gateMeeting,
  setGateMeetingRedux,
  hourlyAndSeatsRedux,
  error,
  setActiveStep,
  setResetWidgetInputs,
  setIsAirportPickupIncluded,
}) => {
  const [carCard, setCarCard] = React.useState(0)
  const [carModal, setCarModal] = React.useState(null)
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = (id) => {
    setCarModal(id)
    setShow(true)
  }

  const handleClickClose = () => {
    setCarModal(null)
    setShow(false)
  }

  const handleClick = (id) => {
    setCarCard(id)
  }

  let result = null
  if (carModal) {
    result = cars.find((cars) => carModal === cars.id)
  }
  const [show, setShow] = React.useState(false)
  // React.useEffect(() => {
  //   setCarCard(carCard)
  // }, [carCard])
  // const cars2 = { ...cars }
  const round = (n, dp) => {
    const h = +"1".padEnd(dp + 1, "0") // 10 or 100 or 1000 or etc
    return Math.round(n * h) / h
  }

  return (
    <FleetFormUIComponent
      cars={cars}
      isFetching={isFetching}
      back={back}
      next={next}
      setCarId={setCarId}
      gateMeeting={gateMeeting}
      setGateMeetingRedux={setGateMeetingRedux}
      hourlyAndSeatsRedux={hourlyAndSeatsRedux}
      error={error}
      setActiveStep={setActiveStep}
      setResetWidgetInputs={setResetWidgetInputs}
      setIsAirportPickupIncluded={setIsAirportPickupIncluded}
      carCard={carCard}
      setCarCard={setCarCard}
      carModal={carModal}
      setCarModal={setCarModal}
      open={open}
      setOpen={setOpen}
      handleClickOpen={handleClickOpen}
      handleClickClose={handleClickClose}
      handleClick={handleClick}
      result={result}
      round={round}
      show={show}
      setShow={setShow}
    />
  )
}

const mapStateToProps = (state) => {
  return {
    cars: state.cars.cars,
    isFetching: state.cars.isFetching,
    error: state.cars.error,
    gateMeeting: state.gateMeeting.isGateMeeting,
    hourlyAndSeatsRedux: state.hourlyAndSeatsRedux.hourlyRedux,
  }
}

export default connect(mapStateToProps, {
  setCarId,
  setGateMeetingRedux,
  setResetWidgetInputs,
  setIsAirportPickupIncluded,
})(FleetFormContainerComponent)
