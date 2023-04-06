import React from "react"

// import Payment from "./Payment/PaymentUIComponent"
// import FleetForm from "./FleetForm/FleetFormUIComponent"
// import Preview from "./Preview/PreviewUIComponent"
import Confirmation from "../Confirmation/Confirmation"

import AdressFormContainerComponent from "./AdressForm/AdressFormContainerComponent"
// import FleetFormUIComponent from "./FleetForm/FleetFormUIComponent"
import FleetFormContainerComponent from "./FleetForm/FleetFormContainerComponent"
import PreviewContainerComponent from "./Preview/PreviewContainerComponent"
import PaymentContainerComponent from "./Payment/PaymentContainerComponent"

const CheckOut = ({
  initializing,
  companyName,
  email,
  setActiveStep,
  setExpanded,
  activeStep,
  nextStep,
  backStep,
  isSuccess,
  isFetching,
  backgroundScrollStopForTimePicker,
  setBackgroundScrollStopForTimePicker,
  setBackgroundScrollStop,
}) => {
  const Form = () => {
    switch (activeStep) {
      case 0:
        return (
          <AdressFormContainerComponent
            next={nextStep}
            initializing={initializing}
            backgroundScrollStopForTimePicker={
              backgroundScrollStopForTimePicker
            }
            setBackgroundScrollStopForTimePicker={
              setBackgroundScrollStopForTimePicker
            }
          />
        )
      case 1:
        return (
          <FleetFormContainerComponent
            next={nextStep}
            back={backStep}
            setActiveStep={setActiveStep}
          />
        )
      case 2:
        return <PreviewContainerComponent next={nextStep} back={backStep} />
      case 3:
        return (
          <PaymentContainerComponent
            back={backStep}
            next={nextStep}
            isSuccess={isSuccess}
          />
        )
      default:
        break
    }
  }

  return (
    <>
      {activeStep === 4 ? (
        <Confirmation
          back={backStep}
          setExpanded={setExpanded}
          setActiveStep={setActiveStep}
          setBackgroundScrollStop={setBackgroundScrollStop}
        />
      ) : (
        <Form />
      )}
    </>
  )
}

export default CheckOut
