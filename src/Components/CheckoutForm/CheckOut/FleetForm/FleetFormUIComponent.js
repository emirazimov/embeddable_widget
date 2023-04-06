import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import ListItem from "@material-ui/core/ListItem"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import React from "react"
import Carousel from "react-material-ui-carousel"
import { connect } from "react-redux"
import { BackArrowIcon, ForwardArrowIcon } from "../../../../assets/icons"
import { Preloader } from "../../../Helpers/Preloader/Preloader"
import {
  setCarId,
  setIsAirportPickupIncluded,
} from "../../../../Redux/form-reducer"
import { AppBar, useMediaQuery } from "@material-ui/core"
import Box from "@material-ui/core/Box"
import { AspectRatio } from "react-aspect-ratio"
import "./FleetForm.css"
import { setGateMeetingRedux } from "../../../../Redux/gate-meeting-reducer"
import IncorrectAddressError from "../../IncorrectAdressError/IncorrectAddressError"
import { setResetWidgetInputs } from "../../../../Redux/reset-widget-inputs-reducer"
import { useStyles } from "./FleetFormStyles"
import styles from "./FleetForm.module.scss"
import { Modal } from "../../../Helpers/Modal/Modal"

const FleetForm = ({
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
  carCard,
  setCarCard,
  carModal,
  setCarModal,
  open,
  setOpen,
  handleClickOpen,
  handleClickClose,
  handleClick,
  result,
  cars2,
  round,
  show,
  setShow,
}) => {
  // const classes = useStyles()

  const isMobile = useMediaQuery("(max-width:500px)")
  const isiPad = useMediaQuery("(max-width:1024px)")

  const carTextColor = "white"
  const car = [cars[0], cars[1]]

  const ifThereisError = () => {
    if (error) {
      return (
        <IncorrectAddressError
          errorMessage={error}
          setActiveStep={setActiveStep}
        />
      )
    } else {
      if (!isFetching) {
        return (
          <div
            // container
            // justify="center"
            // style={
            //   {
            //     // height: isiPad ? "100%" : "89%",
            //     // paddingTop: isMobile ? "0px" : "0px",
            //   }
            // }
            className={styles.mainWrapperFleet}
          >
            <div
              // container
              // direction="column"
              // spacing={1}
              // className={classes.contentContainer}
              className={styles.contentContainer}
            >
              <div
                // item
                className={styles.pageTitleContainer}
              >
                {/* <AppBar
              position="sticky"
              color=" #101020"
              style={{ top: '100px', bottom: '0' }}
            > */}
                <span
                  // style={{
                  //   fontFamily: "Roboto",
                  //   fontWeight: 500,
                  //   color: "white",
                  //   fontSize: "22px",
                  //   lineHeight: "36px",
                  // }}
                  className={styles.pageTitle}
                >
                  Select vehicle
                </span>
                {/* </AppBar> */}
              </div>
              <div
                // item
                // className={classes.carContainer}
                // style={{ paddingBottom: "10px" }}
                className={styles.carListContainer}
              >
                {/* <div
                  // container
                  // direction="column"
                  // spacing={2}
                  // flexGrow={1}
                  className={styles.carContainer}
                > */}
                {console.log(typeof cars)}
                {cars.map((car, index) => (
                  <div
                    // className={classes.root}
                    onClick={(event) => {
                      handleClick(car?.id)
                    }}
                    // selected={car?.id === carCard}
                    // classes={{
                    //   root: classes.listRoot,
                    //   selected: car?.id && classes.active,
                    // }}
                    className={
                      car?.id === carCard
                        ? styles.carContainerSelected
                        : styles.carContainer
                    }
                    key={`${car?.id}${car?.name}`}
                    // style={{
                    //   opacity: "0.5",
                    //   "&:hover": { opacity: "1" },
                    // }}
                  >
                    {/* <div
                        // container
                        // direction="row"
                        // justify="space-between"
                        // alignItems="center"
                        className={styles.carSelf}
                      > */}
                    <div
                      // item
                      // style={{
                      //   marginLeft: "11px",
                      //   marginBottom: "-2px",
                      //   width: "48.70%",
                      // }}
                      className={styles.carImageBlock}
                    >
                      <Carousel
                        autoPlay={false}
                        animation="slide"
                        navButtonsProps={{
                          style: {
                            width: "10px",
                            height: "10px",
                            marginTop: "8px",
                          },
                        }}
                        indicatorIconButtonProps={{
                          style: {
                            "&:hover": {
                              "&$button": {
                                backgroundColor: "#10B7EC",
                                filter: "brightness(120%)",
                                opacity: "0.4",
                              },
                            },
                            //
                            width: "5px",
                            height: "5px",
                            // height: "0px",
                            // marginBottom: "-30px",
                            color: "grey",
                          },
                        }}
                        activeIndicatorIconButtonProps={{
                          style: {
                            color: "white",
                            width: "5px",
                            height: "5px",
                          },
                        }}
                        indicatorContainerProps={{
                          style: { bottom: "10px", position: "absolute" },
                        }}
                      >
                        {car?.imageUrls?.length !== 0 ? (
                          car?.imageUrls?.map((url) => (
                            <span
                              key={url?.id}
                              // variant="outlined"
                              // color="primary"
                            >
                              <div
                                // style={{
                                //   position: "absolute",
                                //   width: "75px",
                                //   height: "20px",
                                //   backgroundColor: "#AC8159",
                                //   color: "black",
                                //   fontSize: "13px",
                                //   paddingLeft: "12px",
                                //   borderTopLeftRadius: "8px",
                                //   paddingTop: "2px",
                                // }}
                                className={styles.orSimiliar}
                              >
                                or similar
                              </div>
                              <AspectRatio
                                // ratio="560/315"
                                style={{
                                  display: "block",
                                  width: !isMobile ? "100%" : "100%",
                                  height: !isMobile ? "112px" : "116px",

                                  cursor: "zoom-in",
                                }}
                              >
                                <img
                                  src={url?.path}
                                  // style={{
                                  //   width: "100%",
                                  //   height: "100%",
                                  //   // display: "block",
                                  //   // width: !isMobile ? "170px" : "100%",
                                  //   // height: !isMobile ? "127px" : "116px",
                                  //   borderRadius: "9px",
                                  //   // cursor: "zoom-in",
                                  // }}
                                  alt="car"
                                  className={styles.carImageSelf}
                                  onClick={(event) => {
                                    // event.stopPropagation()
                                    handleClickOpen(car?.id)
                                  }}
                                />
                              </AspectRatio>
                            </span>
                          ))
                        ) : (
                          <>
                            <span
                              // style={{
                              //   position: "absolute",
                              //   width: "75px",
                              //   height: "20px",
                              //   backgroundColor: "#AC8159",
                              //   color: "black",
                              //   fontSize: "13px",
                              //   paddingLeft: "12px",
                              //   borderTopLeftRadius: "8px",
                              //   paddingTop: "2px",
                              // }}
                              className={styles.orSimiliar}
                            >
                              or similar
                            </span>
                            <AspectRatio
                              // ratio="560/315"
                              style={{
                                display: "block",
                                width: !isMobile ? "100%" : "100%",
                                height: !isMobile ? "112px" : "116px",

                                cursor: "zoom-in",
                              }}
                            >
                              <img
                                src={
                                  "https://fl-1.cdn.flockler.com/embed/not-found.png"
                                }
                                // style={{
                                //   width: "100%",
                                //   height: "100%",
                                //   // display: "block",
                                //   // width: !isMobile ? "170px" : "100%",
                                //   // height: !isMobile ? "127px" : "116px",
                                //   borderRadius: "9px",
                                //   // cursor: "zoom-in",
                                // }}
                                className={styles.carImageSelf}
                                alt="car"
                              />
                            </AspectRatio>
                          </>
                        )}
                      </Carousel>

                      {/* {carModal && ( */}

                      {/* )} */}
                    </div>
                    <div
                      // item
                      // style={{ width: !isMobile ? "44.5%" : "43.70%" }}
                      className={styles.carDescriptionTextBlock}
                    >
                      <div
                        // container
                        // direction="row"
                        // spacing={2}
                        // className={
                        //   !isMobile
                        //     ? classes.carInfoCont
                        //     : classes.carInfoContForMobile
                        // }
                        className={styles.carDescriptionTextContainer}
                      >
                        <span
                          // variant="body2"
                          // style={{
                          //   fontSize: "15.5px",
                          //   color: carTextColor,
                          // }}
                          className={styles.carModel}
                        >
                          {car?.make} {car?.model}
                        </span>

                        {/* <Typography
                            variant='body2'
                            style={{ fontSize: '18px' }}
                          ></Typography> */}

                        <div
                          // container
                          // justify="row"
                          // justify="space-between"
                          // alignItems="center"
                          className={styles.detailedDescription}
                        >
                          <div
                            // item
                            className={styles.detailedDescriptionTitleContainer}
                          >
                            <span
                              // style={{
                              //   color: carTextColor,
                              //   fontSize: "13px",
                              //   fontWeight: "400",
                              // }}
                              className={styles.detailedDescriptionTitleSelf}
                            >
                              Type
                            </span>
                          </div>
                          <div
                            // item
                            // style={{ flexGrow: 1 }}
                            className={
                              styles.detailedDescriptionPointedLineContainer
                            }
                          >
                            <div
                              // style={{
                              //   marginTop: "12px",
                              //   backgroundColor: "transparent",
                              //   marginLeft: "3px",
                              //   marginRight: "3px",
                              //   borderBottom: `2px dotted ${carTextColor}`,
                              // }}
                              className={
                                styles.detailedDescriptionPointedLineSelf
                              }
                            />
                          </div>
                          <div
                            // item
                            className={styles.detailedDescriptionValueContainer}
                          >
                            <span
                              // style={{
                              //   color: carTextColor,
                              //   fontSize: "13px",
                              //   fontWeight: "400",
                              // }}
                              className={styles.detailedDescriptionValueSelf}
                            >
                              {car?.type}
                            </span>
                          </div>
                        </div>

                        <div
                          // container
                          // justify="row"
                          // justify="space-between"
                          // alignItems="center"
                          className={styles.detailedDescription}
                        >
                          <div
                            // item
                            className={styles.detailedDescriptionTitleContainer}
                          >
                            <span
                              // style={{
                              //   color: carTextColor,
                              //   fontSize: "13px",
                              //   fontWeight: "400",
                              // }}
                              className={styles.detailedDescriptionTitleSelf}
                            >
                              Capacity
                            </span>
                          </div>
                          <div
                            // item
                            // style={{ flexGrow: 1 }}
                            className={
                              styles.detailedDescriptionPointedLineContainer
                            }
                          >
                            <div
                              // style={{
                              //   marginTop: "12px",
                              //   backgroundColor: "transparent",
                              //   marginLeft: "3px",
                              //   marginRight: "3px",
                              //   borderBottom: `2px dotted ${carTextColor}`,
                              // }}
                              className={
                                styles.detailedDescriptionPointedLineSelf
                              }
                            />
                          </div>
                          <div
                            // item
                            className={styles.detailedDescriptionValueContainer}
                          >
                            <span
                              // style={{
                              //   color: carTextColor,
                              //   fontSize: "13px",
                              //   fontWeight: "400",
                              // }}
                              className={styles.detailedDescriptionValueSelf}
                            >
                              {car?.capacity}
                            </span>
                          </div>
                        </div>

                        <div
                          // container
                          // justify="row"
                          // justify="space-between"
                          // alignItems="center"
                          className={styles.detailedDescription}
                        >
                          <div
                            // item
                            className={styles.detailedDescriptionTitleContainer}
                          >
                            <span
                              // style={{
                              //   color: carTextColor,
                              //   fontSize: "13px",
                              //   fontWeight: "400",
                              // }}
                              className={styles.detailedDescriptionTitleSelf}
                            >
                              Color
                            </span>
                          </div>
                          <div
                            // item
                            // style={{ flexGrow: 1 }}
                            className={
                              styles.detailedDescriptionPointedLineContainer
                            }
                          >
                            <div
                              // style={{
                              //   marginTop: "12px",
                              //   backgroundColor: "transparent",
                              //   marginLeft: "3px",
                              //   marginRight: "3px",
                              //   borderBottom: `2px dotted ${carTextColor}`,
                              // }}
                              className={
                                styles.detailedDescriptionPointedLineSelf
                              }
                            />
                          </div>
                          <div
                            // item
                            className={styles.detailedDescriptionValueContainer}
                          >
                            <span
                              // style={{
                              //   color: carTextColor,
                              //   fontSize: "13px",
                              //   fontWeight: "400",
                              // }}
                              className={styles.detailedDescriptionValueSelf}
                            >
                              {car?.color}
                            </span>
                          </div>
                        </div>

                        <div
                          // container
                          // justify="row"
                          // justify="space-between"
                          // alignItems="center"
                          className={styles.detailedDescription}
                        >
                          <div
                            // item
                            className={styles.detailedDescriptionTitleContainer}
                          >
                            <span
                              // style={{
                              //   color: carTextColor,
                              //   fontSize: "13px",
                              //   fontWeight: "400",
                              // }}
                              className={styles.detailedDescriptionTitleSelf}
                            >
                              Amount
                            </span>
                          </div>
                          <div
                            // item
                            // style={{ flexGrow: 1 }}
                            className={
                              styles.detailedDescriptionPointedLineContainer
                            }
                          >
                            <div
                              // style={{
                              //   marginTop: "12px",
                              //   backgroundColor: "transparent",
                              //   marginLeft: "3px",
                              //   marginRight: "3px",
                              //   borderBottom: `2px dotted ${carTextColor}`,
                              // }}
                              className={
                                styles.detailedDescriptionPointedLineSelf
                              }
                            />
                          </div>
                          <div
                            // item
                            className={styles.detailedDescriptionValueContainer}
                          >
                            <span
                              // style={{
                              //   color: carTextColor,
                              //   fontSize: "13px",
                              //   fontWeight: "400",
                              // }}
                              className={
                                styles.detailedDescriptionValueAmountSelf
                              }
                            >
                              {gateMeeting
                                ? `$${round(car?.price, 2)}`
                                : `$${round(car?.price, 2)}`}
                            </span>
                          </div>
                        </div>

                        {/* <Grid
                              container
                              justify="row"
                              justify="space-between"
                              alignItems="center"
                            >
                              <Grid item>
                                <Typography
                                  style={{
                                    color: carTextColor,
                                    fontSize: "13px",
                                    fontWeight: "400",
                                  }}
                                >
                                  Capacity
                                </Typography>
                              </Grid>
                              <Grid item style={{ flexGrow: 1 }}>
                                <Box
                                  style={{
                                    marginTop: "12px",
                                    backgroundColor: "transparent",
                                    marginLeft: "3px",
                                    marginRight: "3px",
                                    borderBottom: `2px dotted ${carTextColor}`,
                                  }}
                                />
                              </Grid>
                              <Grid item>
                                <Typography
                                  style={{
                                    color: carTextColor,
                                    fontSize: "13px",
                                    fontWeight: "400",
                                  }}
                                >
                                  {car.capacity}
                                </Typography>
                              </Grid>
                            </Grid>

                            <Grid container justify="row">
                              <Grid item>
                                <Typography
                                  style={{
                                    color: carTextColor,
                                    fontSize: "12px",
                                    fontWeight: "400",
                                  }}
                                >
                                  Color
                                </Typography>
                              </Grid>
                              <Grid item style={{ flexGrow: 1 }}>
                                <Box
                                  style={{
                                    marginTop: "12px",
                                    backgroundColor: "transparent",
                                    marginLeft: "3px",
                                    marginRight: "3px",
                                    borderBottom: `2px dotted ${carTextColor}`,
                                  }}
                                />
                              </Grid>
                              <Grid item>
                                <Typography
                                  style={{
                                    color: carTextColor,
                                    fontSize: "13px",
                                    fontWeight: "400",
                                  }}
                                >
                                  {car.color}
                                </Typography>
                              </Grid>
                            </Grid> */}

                        {/* <Grid container justify="row" alignItems="center">
                              <Grid item>
                                <Typography
                                  style={{
                                    color: carTextColor,
                                    fontSize: "12px",
                                    fontWeight: "400",
                                  }}
                                >
                                  Amount
                                </Typography>
                              </Grid>
                              <Grid item style={{ flexGrow: 1 }}>
                                <Box
                                  style={{
                                    marginTop: "8px",
                                    backgroundColor: "transparent",
                                    marginLeft: "3px",
                                    marginRight: "3px",
                                    borderBottom: `2px dotted ${carTextColor}`,
                                  }}
                                />
                              </Grid>
                              <Grid item>
                                <Typography
                                  style={{
                                    color: carTextColor,
                                    fontSize: "16px",
                                    fontWeight: "500",
                                  }}
                                >
                                  {gateMeeting
                                    ? `$${round(car.price, 2)}`
                                    : `$${round(car.price, 2)}`}
                                </Typography>
                              </Grid>
                            </Grid> */}
                        {/* <Grid item xs={8}>
                            <Paper className={classes.priceBox}>
                              <Grid container justify="center">
                                <Typography variant="body2">
                                  ${car.price}
                                </Typography>
                              </Grid>
                            </Paper>
                          </Grid> */}
                      </div>
                      {/* </div> */}
                    </div>
                  </div>
                ))}
                <Modal onClose={() => handleClickClose()} show={show}>
                  <Carousel
                    autoPlay={false}
                    animation="slide"
                    swipe={true}
                    navButtonsAlwaysVisible={true}
                    navButtonsProps={{
                      style: {
                        width: "1em",
                        height: "1em",
                      },
                    }}
                    indicatorIconButtonProps={{
                      style: {
                        "&:hover": {
                          "& $button": {
                            backgroundColor: "#10B7EC",
                            filter: "brightness(120%)",
                            opacity: "0.4",
                          },
                        },
                      },
                    }}
                    activeIndicatorIconButtonProps={{
                      style: {
                        color: "grey",
                        width: "5px",
                        height: "5px",
                      },
                    }}
                    // inactiveIndicatorIconButtonProps={{
                    //   style: {
                    //     color: "pink",
                    //     width: "5px",
                    //     height: "5px",
                    //   },
                    // }}
                    indicatorContainerProps={{
                      style: { bottom: "10px", position: "absolute" },
                    }}
                  >
                    {result?.imageUrls?.map((url) => (
                      <AspectRatio
                        ratio="4/3"
                        style={{
                          width: !isMobile ? "550px" : "239px",
                          height: !isMobile ? "400px" : "170px",
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                          // display: "block",
                          // width: !isMobile ? "170px" : "100%",
                          // height: !isMobile ? "107px" : "116px",
                          // // borderRadius: "8px",
                          // cursor: "zoom-in",
                          // width: "100%",
                          // height: "100%",
                          // userDrag: "none",
                          // userSelect: "none",
                          // mozUserSelect: "none",
                          // webkitUserDrag: "none",
                          // webkitUserSelect: "none",
                          // msUserSelect: "none",
                          // maxWidth: "500px",
                        }}
                      >
                        <img
                          src={url?.path}
                          style={{
                            borderRadius: "8px",
                            maxWidth: "100%",
                            maxHeight: "100%",
                          }}
                          alt="car"
                          key={`${url?.id}${url?.path}`}
                        />
                      </AspectRatio>
                    ))}
                  </Carousel>
                </Modal>
                {Object.keys(cars).length === 0 && (
                  <div
                    style={{
                      color: "grey",
                      fontSize: "26px",
                      marginLeft: "7px",
                    }}
                  >
                    No cars
                  </div>
                )}
                {/* </div> */}
              </div>
            </div>
            <div
              // position="sticky"
              // color="primary"
              // className={classes.appBar}
              // style={{
              //   top: "auto",
              //   bottom: "3px",
              // }}
              className={styles.fleetButtonGroupForPositioning}
            >
              <div
                // container
                // direction="row"
                // alignItems="center"
                // justify="center"
                // spacing={1}
                className={styles.fleetButtonGroupBlockContainer}
                // style={{
                //   paddingBottom: "14px",
                //   paddingLeft: "16px",
                //   paddingRight: "0px",
                // }}
              >
                {/* <div
                // item
                // xs={6}
                className={styles.buttonBackContainer}
              > */}
                <button
                  // variant="contained"
                  // color="primary"
                  // fullWidth
                  onClick={() => {
                    back()
                    setGateMeetingRedux(false)
                    setResetWidgetInputs(false)
                    setIsAirportPickupIncluded(false)
                  }}
                  // startIcon={<BackArrowIcon />}
                  // className={classes.backButtonSelf}
                  // style={{
                  //   height: "50px",

                  //   textTransform: "none",
                  // }}
                  className={styles.buttonBackSelf}
                >
                  Back
                </button>
                {/* </div> */}

                {/* <div
                // item
                // xs={6}
                className={styles.buttonNextContainer}
              > */}
                <button
                  // variant="contained"
                  // fullWidth
                  onClick={() => {
                    next()
                    setCarId(carCard)
                  }}
                  // color="primary"
                  // endIcon={<ForwardArrowIcon />}
                  // className={classes.nextButtonSelf}
                  disabled={carCard ? false : true}
                  // style={{
                  //   height: "50px",
                  //   // paddingTop: "7px",
                  //   textTransform: "none",
                  // }}
                  className={styles.buttonNextSelf}
                >
                  Next
                </button>
                {/* </div> */}
              </div>
            </div>
          </div>
        )
      }
    }
  }
  // console.log(error)
  // console.log(hourlyRedux)
  return (
    <>
      {isFetching ? <Preloader /> : ifThereisError()}
      {/* {error ? (
          <Error setActiveStep={setActiveStep} />
        ) : (
          
        )} */}
    </>
  )
}

const FleetFormUIComponent = React.memo(FleetForm)

export default FleetFormUIComponent
