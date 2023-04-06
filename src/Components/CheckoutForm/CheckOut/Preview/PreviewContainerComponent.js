import React from "react"
import { connect } from "react-redux"
import { setNoteRedux, setOrderSum } from "../../../../Redux/form-reducer"
import PreviewUIComponent from "./PreviewUIComponent"

const PreviewContainerComponent = ({
  carId,
  cars,
  formData,
  next,
  back,
  setNoteRedux,
  setOrderSum,
  hourlyAndSeatsRedux,
  gateMeeting,
}) => {
  const selectedCar = cars.find((car) => car.id === carId)

  const [note, setNote] = React.useState("")
  const [distance, setDistance] = React.useState(0)

  const sendNote = (note) => {
    setNoteRedux(note)
  }

  const handleChange = (event) => {
    setNote(event.target.value)
  }
  const [carCard, setCarCard] = React.useState(0)
  const [carModal, setCarModal] = React.useState(null)
  const [open, setOpen] = React.useState(false)

  const [show, setShow] = React.useState(false)

  const handleClickOpen = (id) => {
    setCarModal(true)
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

  React.useEffect(() => {
    setNote(formData.orderNotes)
  }, [formData.orderNotes])

  const round = (n, dp) => {
    const h = +"1".padEnd(dp + 1, "0") // 10 or 100 or 1000 or etc
    return Math.round(n * h) / h
  }

  const showCarAmount = () => {
    if (selectedCar.boosterSeatPrice || selectedCar.safetySeatPrice) {
      return `$${round(
        selectedCar.price -
          selectedCar.boosterSeatPrice -
          selectedCar.safetySeatPrice,
        2
      )}`
    } else {
      return `$${round(selectedCar.price, 2)} `
    }
  }

  return (
    <PreviewUIComponent
      carId={carId}
      cars={cars}
      formData={formData}
      next={next}
      back={back}
      setNoteRedux={setNoteRedux}
      setOrderSum={setOrderSum}
      hourlyAndSeatsRedux={hourlyAndSeatsRedux}
      gateMeeting={gateMeeting}
      selectedCar={selectedCar}
      note={note}
      setNote={setNote}
      distance={distance}
      setDistance={setDistance}
      sendNote={sendNote}
      handleChange={handleChange}
      carCard={carCard}
      setCarCard={setCarCard}
      carModal={carModal}
      setCarModal={setCarModal}
      open={open}
      setOpen={setOpen}
      handleClickOpen={handleClickOpen}
      handleClickClose={handleClickClose}
      handleClick={handleClick}
      round={round}
      showCarAmount={showCarAmount}
      show={show}
      setShow={setShow}
    />
  )
}

const mapStateToProps = (state) => {
  return {
    cars: state.cars.cars,
    formData: state.formData,
    carId: state.formData.carInfo.id,
    hourlyAndSeatsRedux: state.hourlyAndSeatsRedux.hourlyRedux,
    gateMeeting: state.gateMeeting.isGateMeeting,
  }
}

export default connect(mapStateToProps, {
  setNoteRedux,
  setOrderSum,
})(PreviewContainerComponent)
