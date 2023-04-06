import { useMediaQuery } from "@material-ui/core"
// import Box from "@material-ui/core/Box"
// import Button from "@material-ui/core/Button"
// import Grid from "@material-ui/core/Grid"
// import ListItem from "@material-ui/core/ListItem"
// import Paper from "@material-ui/core/Paper"
// import { makeStyles } from "@material-ui/core/styles"
// import TextField from "@material-ui/core/TextField"
// import Typography from "@material-ui/core/Typography"
import React from "react"
import { AspectRatio } from "react-aspect-ratio"
import Carousel from "react-material-ui-carousel"
// import { connect } from "react-redux"
import { BackArrowIcon, ForwardArrowIcon } from "../../../../assets/icons"
// import { toggleIsFetching } from "../../../../Redux/car-reducer"
// import { setNoteRedux, setOrderSum } from "../../../../Redux/form-reducer"
import Directions from "../../../GoogleMap/Directions/Directions"
// import Dialog from "@material-ui/core/Dialog"
// import DialogActions from "@material-ui/core/DialogActions"
// import { useStyles } from "./PreviewStyles"
import styles from "./Preview.module.scss"
import { Modal } from "../../../Helpers/Modal/Modal"

const PreviewUIComponent = ({
  carId,
  cars,
  formData,
  next,
  back,
  setNoteRedux,
  setOrderSum,
  hourlyAndSeatsRedux,
  gateMeeting,
  selectedCar,
  note,
  setNote,
  distance,
  setDistance,
  sendNote,
  handleChange,
  carCard,
  setCarCard,
  carModal,
  setCarModal,
  open,
  setOpen,
  handleClickOpen,
  handleClickClose,
  handleClick,
  round,
  showCarAmount,
  show,
  setShow,
}) => {
  // const classes = useStyles()
  const isMobile = useMediaQuery("(max-width:500px)")
  console.log(formData.orderStartDateTime)
  return (
    <div
      // container
      // spacing={1}
      // className={classes.contentContainer}
      className={styles.previewWrapper}
    >
      <div
        // item
        className={styles.previewTitleContainer}
      >
        <span
          // variant="body2"
          // style={{
          //   fontFamily: "Roboto",
          //   fontWeight: 500,
          //   color: "white",
          //   fontSize: "22px",
          //   lineHeight: "36px",
          // }}
          className={styles.previewTitleSelf}
        >
          Preview
        </span>
      </div>

      <div
        // item
        // className={classes.directionsContainer}
        className={styles.directionsContainer}
      >
        <Directions
          destinations={formData.orderAddressDetails}
          setDistance={setDistance}
          // style={{ height: "250px" }}
        />
      </div>
      <div
        // container
        // justify="center"
        className={styles.reservationDetailsContainer}
      >
        {/* <div
            container
            direction="column"
            spacing={2}
            className={classes.contentContainer}
            style={{ zIndex: "4", marginTop: "-25px", paddingTop: "0px" }}
          > */}
        <div
          // item
          // style={{
          //   // height: "135px",
          //   paddingRight: !isMobile ? "14.5px" : "0px",
          //   marginTop: "10px",
          //   marginBottom: "5px",
          // }}
          className={styles.carContainer}
        >
          {/* <div
            // container
            // direction="row"
            // justify="space-between"
            // alignItems="center"
            > */}
          <div
            // item
            // style={{ width: "48.80%" }}
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
              {selectedCar.imageUrls.length !== 0 ? (
                selectedCar.imageUrls.map((url) => (
                  <span
                    key={url.id}
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
                      //   borderTopLeftRadius: "9px",
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
                        src={url.path}
                        // style={{
                        //   width: !isMobile ? "100%" : "100%",
                        //   height: !isMobile ? "118px" : "116px",
                        //   borderRadius: "9px",
                        //   cursor: "zoom-in",
                        // }}
                        alt="car"
                        onClick={() => handleClickOpen()}
                        className={styles.carImageSelf}
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
                    //   borderTopLeftRadius: "9px",
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
                      src={"https://fl-1.cdn.flockler.com/embed/not-found.png"}
                      // style={{
                      //   width: !isMobile ? "100%" : "100%",
                      //   height: !isMobile ? "118px" : "116px",
                      //   borderRadius: "9px",
                      // }}
                      alt="car"
                      className={styles.carImageSelf}
                    />
                  </AspectRatio>
                </>
              )}
            </Carousel>
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
                    color: "#10B7EC",
                  },
                }}
                indicatorContainerProps={{
                  style: {},
                }}
              >
                {selectedCar.imageUrls.map((url) => (
                  <AspectRatio
                    ratio="4/3"
                    style={{
                      width: !isMobile ? "550px" : "257px",
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
                      src={url.path}
                      style={{
                        borderRadius: "8px",
                        // width: "100%",
                        // height: "100%",
                      }}
                      alt="car"
                      key={`${url.id}${url.path}`}
                    />
                  </AspectRatio>
                ))}
              </Carousel>
            </Modal>
          </div>
          <div
            // item
            // style={{ width: "45.2%" }}
            className={styles.carDescriptionTextBlock}
          >
            <div
              // container
              // direction="column"
              // spacing={2}
              // className={classes.carInfoCont}
              className={styles.carDescriptionTextContainer}
            >
              <span
                // className={classes.textColor}
                // variant="body2"
                // style={{ fontSize: "18px" }}
                className={styles.carModel}
              >
                {selectedCar.make} {selectedCar.model}
              </span>

              {/* <Typography
                            variant='body2'
                            style={{ fontSize: '18px' }}
                          ></Typography> */}

              {/* <Grid
                    container
                    justify="row"
                    justify="space-between"
                    alignItems="center"
                  >
                    <Grid item>
                      <Typography
                        className={classes.textColor}
                        style={{
                          fontSize: "13px",
                          fontWeight: "400",
                        }}
                      >
                        Type
                      </Typography>
                    </Grid>
                    <Grid item style={{ flexGrow: 1 }}>
                      <Box
                        className={classes.boxBorder}
                        style={{
                          marginTop: "13px",
                          backgroundColor: "transparent",
                          marginLeft: "2px",
                          marginRight: "3px",
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography
                        className={classes.textColor}
                        style={{
                          fontSize: "13px",
                          fontWeight: "400",
                        }}
                      >
                        {selectedCar.type}
                      </Typography>
                    </Grid>
                  </Grid> */}

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
                  className={styles.detailedDescriptionPointedLineContainer}
                >
                  <div
                    // style={{
                    //   marginTop: "12px",
                    //   backgroundColor: "transparent",
                    //   marginLeft: "3px",
                    //   marginRight: "3px",
                    //   borderBottom: `2px dotted ${carTextColor}`,
                    // }}
                    className={styles.detailedDescriptionPointedLineSelf}
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
                    {selectedCar.type}
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
                  className={styles.detailedDescriptionPointedLineContainer}
                >
                  <div
                    // style={{
                    //   marginTop: "12px",
                    //   backgroundColor: "transparent",
                    //   marginLeft: "3px",
                    //   marginRight: "3px",
                    //   borderBottom: `2px dotted ${carTextColor}`,
                    // }}
                    className={styles.detailedDescriptionPointedLineSelf}
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
                    {selectedCar.capacity}
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
                  className={styles.detailedDescriptionPointedLineContainer}
                >
                  <div
                    // style={{
                    //   marginTop: "12px",
                    //   backgroundColor: "transparent",
                    //   marginLeft: "3px",
                    //   marginRight: "3px",
                    //   borderBottom: `2px dotted ${carTextColor}`,
                    // }}
                    className={styles.detailedDescriptionPointedLineSelf}
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
                    {selectedCar.color}
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
                  className={styles.detailedDescriptionPointedLineContainer}
                >
                  <div
                    // style={{
                    //   marginTop: "12px",
                    //   backgroundColor: "transparent",
                    //   marginLeft: "3px",
                    //   marginRight: "3px",
                    //   borderBottom: `2px dotted ${carTextColor}`,
                    // }}
                    className={styles.detailedDescriptionPointedLineSelf}
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
                    className={styles.detailedDescriptionValueAmountSelf}
                  >
                    {gateMeeting
                      ? `$${round(
                          selectedCar.price -
                            selectedCar.greetAndMeetPrice -
                            selectedCar.boosterSeatPrice -
                            selectedCar.safetySeatPrice,
                          2
                        )}`
                      : showCarAmount()}
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
                        className={classes.textColor}
                        style={{
                          fontSize: "13px",
                          fontWeight: "400",
                        }}
                      >
                        Capacity
                      </Typography>
                    </Grid>
                    <Grid item style={{ flexGrow: 1 }}>
                      <Box
                        className={classes.boxBorder}
                        style={{
                          marginTop: "13px",
                          backgroundColor: "transparent",
                          marginLeft: "2px",
                          marginRight: "3px",
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography
                        className={classes.textColor}
                        style={{
                          fontSize: "13px",
                          fontWeight: "400",
                        }}
                      >
                        {selectedCar.capacity}
                      </Typography>
                    </Grid>
                  </Grid> */}

              {/* <Grid container justify="row">
                    <Grid item>
                      <Typography
                        className={classes.textColor}
                        style={{
                          fontSize: "13px",
                          fontWeight: "400",
                        }}
                      >
                        Color
                      </Typography>
                    </Grid>
                    <Grid item style={{ flexGrow: 1 }}>
                      <Box
                        className={classes.boxBorder}
                        style={{
                          marginTop: "13px",
                          backgroundColor: "transparent",
                          marginLeft: "2px",
                          marginRight: "3px",
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography
                        className={classes.textColor}
                        style={{
                          fontSize: "13px",
                          fontWeight: "400",
                        }}
                      >
                        {selectedCar.color}
                      </Typography>
                    </Grid>
                  </Grid> */}

              {/* <Grid container justify="row">
                    <Grid item>
                      <Typography
                        className={classes.textColor}
                        style={{
                          fontSize: "13px",
                          fontWeight: "400",
                        }}
                      >
                        Amount
                      </Typography>
                    </Grid>
                    <Grid item style={{ flexGrow: 1 }}>
                      <Box
                        className={classes.boxBorder}
                        style={{
                          marginTop: "13px",
                          backgroundColor: "transparent",
                          marginLeft: "2px",
                          marginRight: "3px",
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography
                        className={classes.textColor}
                        style={{
                          fontSize: "16px",
                          fontWeight: "500",
                        }}
                      >
                        {gateMeeting
                          ? `$${round(
                              selectedCar.price -
                                selectedCar.greetAndMeetPrice -
                                selectedCar.boosterSeatPrice -
                                selectedCar.safetySeatPrice,
                              2
                            )}`
                          : showCarAmount()}
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
          </div>
          {/* </div> */}
        </div>
        <div
          // item
          className={styles.reservationDetailsItem}
        >
          <div
            // container
            // direction="row"
            // justify="space-between"
            // alignItems="center"
            className={styles.reservationDetailsItemContainer}
          >
            <div
              // item
              className={styles.reservationDetailsItemTitleContainer}
            >
              <span
                // className={classes.textColor}
                // style={{ fontSize: "16px" }}
                className={styles.reservationDetailsItemTitleSelf}
              >
                Date
              </span>
            </div>
            <div
              // item
              // style={{ flexGrow: 1 }}

              className={styles.reservationDetailsItemPointedLineContainer}
            >
              <div
                // className={classes.boxBorder}
                // style={{
                //   marginTop: "8px",
                //   backgroundColor: "transparent",
                //   marginLeft: "3px",
                //   marginRight: "3px",
                // }}
                className={styles.reservationDetailsItemPointedLineSelf}
              />
            </div>
            <div
              // item
              className={styles.reservationDetailsItemValueContainer}
            >
              <span
                // className={classes.textColor}
                // style={{
                //   fontSize: "16px",
                //   marginRight: "-3px",
                // }}
                className={styles.reservationDetailsItemValueSelf}
              >
                {formData.orderStartDateTime.match(
                  /(\d{1,4}([.\-/])\d{1,2}([.\-/])\d{1,4})/g
                )}
              </span>
            </div>
          </div>
        </div>

        <div
          // item
          className={styles.reservationDetailsItem}
        >
          <div
            // container
            // direction="row"
            // justify="space-between"
            // alignItems="center"
            className={styles.reservationDetailsItemContainer}
          >
            <div
              // item
              className={styles.reservationDetailsItemTitleContainer}
            >
              <span
                // className={classes.textColor}
                // style={{ fontSize: "16px" }}
                className={styles.reservationDetailsItemTitleSelf}
              >
                Time
              </span>
            </div>
            <div
              // item
              // style={{ flexGrow: 1 }}

              className={styles.reservationDetailsItemPointedLineContainer}
            >
              <div
                // className={classes.boxBorder}
                // style={{
                //   marginTop: "8px",
                //   backgroundColor: "transparent",
                //   marginLeft: "3px",
                //   marginRight: "3px",
                // }}
                className={styles.reservationDetailsItemPointedLineSelf}
              />
            </div>
            <div
              // item
              className={styles.reservationDetailsItemValueContainer}
            >
              <span
                // className={classes.textColor}
                // style={{
                //   fontSize: "16px",
                //   marginRight: "-3px",
                // }}
                className={styles.reservationDetailsItemValueSelf}
              >
                {new Date(formData.orderStartDateTime).toLocaleTimeString(
                  "en-US",
                  {
                    hour: "numeric",
                    minute: "numeric",
                  }
                )}
              </span>
            </div>
          </div>
        </div>

        {/* <Grid item>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography
                  className={classes.textColor}
                  style={{ fontSize: "16px" }}
                >
                  Time
                </Typography>
              </Grid>
              <Grid item style={{ flexGrow: 1 }}>
                <Box
                  className={classes.boxBorder}
                  style={{
                    marginTop: "8px",
                    backgroundColor: "transparent",
                    marginLeft: "3px",
                    marginRight: "3px",
                  }}
                />
              </Grid>
              <Grid item>
                <Typography
                  className={classes.textColor}
                  style={{ fontSize: "16px" }}
                >
                  {new Date(formData.orderStartDateTime).toLocaleTimeString(
                    "en-US",
                    {
                      hour: "numeric",
                      minute: "numeric",
                    }
                  )}
                </Typography>
              </Grid>
            </Grid>
          </Grid> */}

        <div
          // item
          className={styles.reservationDetailsItem}
        >
          <div
            // container
            // direction="row"
            // justify="space-between"
            // alignItems="center"
            className={styles.reservationDetailsItemContainer}
          >
            <div
              // item
              className={styles.reservationDetailsItemTitleContainer}
            >
              <span
                // className={classes.textColor}
                // style={{ fontSize: "16px" }}
                className={styles.reservationDetailsItemTitleSelf}
              >
                From
              </span>
            </div>
            <div
              // item
              // style={{ flexGrow: 1 }}

              className={styles.reservationDetailsItemPointedLineContainer}
            >
              <div
                // className={classes.boxBorder}
                // style={{
                //   marginTop: "8px",
                //   backgroundColor: "transparent",
                //   marginLeft: "3px",
                //   marginRight: "3px",
                // }}
                className={styles.reservationDetailsItemPointedLineSelf}
              />
            </div>
            <div
              // item
              className={styles.reservationDetailsItemValueContainer}
            >
              <span
                // className={classes.textColor}
                // style={{
                //   fontSize: "16px",
                //   marginRight: "-3px",
                // }}
                className={styles.reservationDetailsItemValueSelf}
              >
                {formData.orderAddressDetails[0].rideCheckPoint}
              </span>
            </div>
          </div>
        </div>

        {/* <Grid item>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="flex-start"
              wrap="nowrap"
            >
              <Grid item>
                <Typography
                  className={classes.textColor}
                  style={{ fontSize: "16px" }}
                >
                  From
                </Typography>
              </Grid>
              <Grid item style={{ flexGrow: 1 }}>
                <Box
                  className={classes.boxBorder}
                  style={{
                    // minWidth: "40px",
                    marginTop: "16px",
                    backgroundColor: "transparent",
                    marginLeft: "3px",
                    marginRight: "3px",
                  }}
                />
              </Grid>
              <Grid
                item
                style={{
                  display: "inline",
                  maxWidth: "60%",
                  textAlign: "right",
                }}
              >
                <Typography
                  className={classes.textColor}
                  style={{
                    display: "inline",
                    // wordWrap: "break-word",

                    fontSize: "16px",
                    width: "100%",
                    // textAlign: "right",
                  }}
                >
                  {formData.orderAddressDetails[0].rideCheckPoint}
                </Typography>
              </Grid>
            </Grid>
          </Grid> */}

        <div
          // item
          className={styles.reservationDetailsItem}
        >
          <div
            // container
            // direction="row"
            // justify="space-between"
            // alignItems="center"
            className={styles.reservationDetailsItemContainer}
          >
            <div
              // item
              className={styles.reservationDetailsItemTitleContainer}
            >
              <span
                // className={classes.textColor}
                // style={{ fontSize: "16px" }}
                className={styles.reservationDetailsItemTitleSelf}
              >
                To
              </span>
            </div>
            <div
              // item
              // style={{ flexGrow: 1 }}

              className={styles.reservationDetailsItemPointedLineContainer}
            >
              <div
                // className={classes.boxBorder}
                // style={{
                //   marginTop: "8px",
                //   backgroundColor: "transparent",
                //   marginLeft: "3px",
                //   marginRight: "3px",
                // }}
                className={styles.reservationDetailsItemPointedLineSelf}
              />
            </div>
            <div
              // item
              className={styles.reservationDetailsItemValueContainer}
            >
              <span
                // className={classes.textColor}
                // style={{
                //   fontSize: "16px",
                //   marginRight: "-3px",
                // }}
                className={styles.reservationDetailsItemValueSelf}
              >
                {
                  formData.orderAddressDetails[
                    formData.orderAddressDetails.length - 1
                  ].rideCheckPoint
                }
              </span>
            </div>
          </div>
        </div>

        {/* <Grid item>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
              wrap="nowrap"
            >
              <Grid item>
                <Typography
                  className={classes.textColor}
                  style={{ fontSize: "16px" }}
                >
                  To
                </Typography>
              </Grid>
              <Grid item style={{ flexGrow: 1 }}>
                <Box
                  className={classes.boxBorder}
                  style={{
                    // width: "100%",
                    marginTop: "8px",
                    backgroundColor: "transparent",
                    marginLeft: "3px",
                    marginRight: "3px",
                  }}
                />
              </Grid>
              <Grid
                item
                style={{
                  display: "inline",
                  maxWidth: "60%",
                  textAlign: "right",
                }}
              >
                <Typography
                  className={classes.textColor}
                  style={{
                    display: "inline",
                    // wordWrap: "break-word",

                    fontSize: "16px",
                    width: "100%",
                    // textAlign: "right",
                  }}
                >
                  {
                    formData.orderAddressDetails[
                      formData.orderAddressDetails.length - 1
                    ].rideCheckPoint
                  }
                </Typography>
              </Grid>
            </Grid>
          </Grid> */}

        <div
          // item
          className={styles.reservationDetailsItem}
        >
          <div
            // container
            // direction="row"
            // justify="space-between"
            // alignItems="center"
            className={styles.reservationDetailsItemContainer}
          >
            <div
              // item
              className={styles.reservationDetailsItemTitleContainer}
            >
              <span
                // className={classes.textColor}
                // style={{ fontSize: "16px" }}
                className={styles.reservationDetailsItemTitleSelf}
              >
                Vehicle
              </span>
            </div>
            <div
              // item
              // style={{ flexGrow: 1 }}

              className={styles.reservationDetailsItemPointedLineContainer}
            >
              <div
                // className={classes.boxBorder}
                // style={{
                //   marginTop: "8px",
                //   backgroundColor: "transparent",
                //   marginLeft: "3px",
                //   marginRight: "3px",
                // }}
                className={styles.reservationDetailsItemPointedLineSelf}
              />
            </div>
            <div
              // item
              className={styles.reservationDetailsItemValueContainer}
            >
              <span
                // className={classes.textColor}
                // style={{
                //   fontSize: "16px",
                //   marginRight: "-3px",
                // }}
                className={styles.reservationDetailsItemValueSelf}
              >
                {selectedCar.type}
              </span>
            </div>
          </div>
        </div>

        {/* <Grid item>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography
                  className={classes.textColor}
                  style={{ fontSize: "16px" }}
                >
                  Vehicle
                </Typography>
              </Grid>
              <Grid item style={{ flexGrow: 1 }}>
                <Box
                  className={classes.boxBorder}
                  style={{
                    marginTop: "8px",
                    backgroundColor: "transparent",
                    marginLeft: "3px",
                    marginRight: "3px",
                  }}
                />
              </Grid>
              <Grid item>
                <Typography
                  className={classes.textColor}
                  style={{ fontSize: "16px" }}
                >
                  {selectedCar.type}
                </Typography>
              </Grid>
            </Grid>
          </Grid> */}

        <div
          // item
          className={styles.reservationDetailsItem}
        >
          <div
            // container
            // direction="row"
            // justify="space-between"
            // alignItems="center"
            className={styles.reservationDetailsItemContainer}
          >
            <div
              // item
              className={styles.reservationDetailsItemTitleContainer}
            >
              <span
                // className={classes.textColor}
                // style={{ fontSize: "16px" }}
                className={styles.reservationDetailsItemTitleSelf}
              >
                Total distance
              </span>
            </div>
            <div
              // item
              // style={{ flexGrow: 1 }}

              className={styles.reservationDetailsItemPointedLineContainer}
            >
              <div
                // className={classes.boxBorder}
                // style={{
                //   marginTop: "8px",
                //   backgroundColor: "transparent",
                //   marginLeft: "3px",
                //   marginRight: "3px",
                // }}
                className={styles.reservationDetailsItemPointedLineSelf}
              />
            </div>
            <div
              // item
              className={styles.reservationDetailsItemValueContainer}
            >
              <span
                // className={classes.textColor}
                // style={{
                //   fontSize: "16px",
                //   marginRight: "-3px",
                // }}
                className={styles.reservationDetailsItemValueSelf}
              >
                {distance} miles
              </span>
            </div>
          </div>
        </div>

        {/* <Grid item>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography
                  className={classes.textColor}
                  style={{ fontSize: "16px" }}
                >
                  Total distance
                </Typography>
              </Grid>
              <Grid item style={{ flexGrow: 1 }}>
                <Box
                  className={classes.boxBorder}
                  style={{
                    marginTop: "8px",
                    backgroundColor: "transparent",
                    marginLeft: "3px",
                    marginRight: "3px",
                  }}
                />
              </Grid>
              <Grid item>
                <Typography
                  className={classes.textColor}
                  style={{ fontSize: "16px" }}
                >
                  {distance} miles
                </Typography>
              </Grid>
            </Grid>
          </Grid> */}

        <div
          // item
          className={styles.reservationDetailsItem}
        >
          <div
            // container
            // direction="row"
            // justify="space-between"
            // alignItems="center"
            className={styles.reservationDetailsItemContainer}
          >
            <div
              // item
              className={styles.reservationDetailsItemTitleContainer}
            >
              <span
                // className={classes.textColor}
                // style={{ fontSize: "16px" }}
                className={styles.reservationDetailsItemTitleSelf}
              >
                Number of Passengers
              </span>
            </div>
            <div
              // item
              // style={{ flexGrow: 1 }}

              className={styles.reservationDetailsItemPointedLineContainer}
            >
              <div
                // className={classes.boxBorder}
                // style={{
                //   marginTop: "8px",
                //   backgroundColor: "transparent",
                //   marginLeft: "3px",
                //   marginRight: "3px",
                // }}
                className={styles.reservationDetailsItemPointedLineSelf}
              />
            </div>
            <div
              // item
              className={styles.reservationDetailsItemValueContainer}
            >
              <span
                // className={classes.textColor}
                // style={{
                //   fontSize: "16px",
                //   marginRight: "-3px",
                // }}
                className={styles.reservationDetailsItemValueSelf}
              >
                {formData.passengersQuantity}
              </span>
            </div>
          </div>
        </div>

        {/* <Grid item>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography
                  className={classes.textColor}
                  style={{ fontSize: "16px" }}
                >
                  Number of Passengers
                </Typography>
              </Grid>
              <Grid item style={{ flexGrow: 1 }}>
                <Box
                  className={classes.boxBorder}
                  style={{
                    marginTop: "8px",
                    backgroundColor: "transparent",
                    marginLeft: "3px",
                    marginRight: "3px",
                  }}
                />
              </Grid>
              <Grid item>
                <Typography
                  className={classes.textColor}
                  style={{ fontSize: "16px" }}
                >
                  {formData.passengersQuantity}
                </Typography>
              </Grid>
            </Grid>
          </Grid> */}

        {hourlyAndSeatsRedux && (
          <div
            // item
            className={styles.reservationDetailsItem}
          >
            <div
              // container
              // direction="row"
              // justify="space-between"
              // alignItems="center"
              className={styles.reservationDetailsItemContainer}
            >
              <div
                // item
                className={styles.reservationDetailsItemTitleContainer}
              >
                <span
                  // className={classes.textColor}
                  // style={{ fontSize: "16px" }}
                  className={styles.reservationDetailsItemTitleSelf}
                >
                  Hours
                </span>
              </div>
              <div
                // item
                // style={{ flexGrow: 1 }}

                className={styles.reservationDetailsItemPointedLineContainer}
              >
                <div
                  // className={classes.boxBorder}
                  // style={{
                  //   marginTop: "8px",
                  //   backgroundColor: "transparent",
                  //   marginLeft: "3px",
                  //   marginRight: "3px",
                  // }}
                  className={styles.reservationDetailsItemPointedLineSelf}
                />
              </div>
              <div
                // item
                className={styles.reservationDetailsItemValueContainer}
              >
                <span
                  // className={classes.textColor}
                  // style={{
                  //   fontSize: "16px",
                  //   marginRight: "-3px",
                  // }}
                  className={styles.reservationDetailsItemValueSelf}
                >
                  {formData.hours}
                </span>
              </div>
            </div>
          </div>

          // <Grid item>
          //   <Grid
          //     container
          //     direction="row"
          //     justify="space-between"
          //     alignItems="center"
          //   >
          //     <Grid item>
          //       <Typography
          //         className={classes.textColor}
          //         style={{ fontSize: "16px" }}
          //       >
          //         Hours
          //       </Typography>
          //     </Grid>
          //     <Grid item style={{ flexGrow: 1 }}>
          //       <Box
          //         className={classes.boxBorder}
          //         style={{
          //           marginTop: "8px",
          //           backgroundColor: "transparent",
          //           marginLeft: "3px",
          //           marginRight: "3px",
          //         }}
          //       />
          //     </Grid>
          //     <Grid item>
          //       <Typography
          //         className={classes.textColor}
          //         style={{ fontSize: "16px" }}
          //       >
          //         {formData.hours}
          //       </Typography>
          //     </Grid>
          //   </Grid>
          // </Grid>
        )}
        {/* {selectedCar.boosterSeatPrice !== 0 &&
          selectedCar.boosterSeatPrice !== undefined ? (
            <div
              // item
              className={styles.reservationDetailsItem}
            >
              <div
                // container
                // direction="row"
                // justify="space-between"
                // alignItems="center"
                className={styles.reservationDetailsItemContainer}
              >
                <div
                  // item
                  className={styles.reservationDetailsItemTitleContainer}
                >
                  <span
                    // className={classes.textColor}
                    // style={{ fontSize: "16px" }}
                    className={styles.reservationDetailsItemTitleSelf}
                  >
                    Youth Booster Seat
                  </span>
                </div>
                <div
                  // item
                  // style={{ flexGrow: 1 }}

                  className={styles.reservationDetailsItemPointedLineContainer}
                >
                  <div
                    // className={classes.boxBorder}
                    // style={{
                    //   marginTop: "8px",
                    //   backgroundColor: "transparent",
                    //   marginLeft: "3px",
                    //   marginRight: "3px",
                    // }}
                    className={styles.reservationDetailsItemPointedLineSelf}
                  />
                </div>
                <div
                  // item
                  className={styles.reservationDetailsItemValueContainer}
                >
                  <span
                    // className={classes.textColor}
                    // style={{
                    //   fontSize: "16px",
                    //   marginRight: "-3px",
                    // }}
                    className={styles.reservationDetailsItemValueSelf}
                  >
                    {selectedCar.boosterSeatPrice !== 0 &&
                    selectedCar.boosterSeatPrice !== undefined
                      ? `$${selectedCar.boosterSeatPrice}`
                      : `$${0}`}
                  </span>
                </div>
              </div>
            </div>
          ) : ( */}
        <>
          {selectedCar.boosterSeatPrice == undefined ? null : (
            <div
              // item
              className={styles.reservationDetailsItem}
            >
              <div
                // container
                // direction="row"
                // justify="space-between"
                // alignItems="center"
                className={styles.reservationDetailsItemContainer}
              >
                <div
                  // item
                  className={styles.reservationDetailsItemTitleContainer}
                >
                  <span
                    // className={classes.textColor}
                    // style={{ fontSize: "16px" }}
                    className={styles.reservationDetailsItemTitleSelf}
                  >
                    Youth Booster Seat
                  </span>
                </div>
                <div
                  // item
                  // style={{ flexGrow: 1 }}

                  className={styles.reservationDetailsItemPointedLineContainer}
                >
                  <div
                    // className={classes.boxBorder}
                    // style={{
                    //   marginTop: "8px",
                    //   backgroundColor: "transparent",
                    //   marginLeft: "3px",
                    //   marginRight: "3px",
                    // }}
                    className={styles.reservationDetailsItemPointedLineSelf}
                  />
                </div>
                <div
                  // item
                  className={styles.reservationDetailsItemValueContainer}
                >
                  <span
                    // className={classes.textColor}
                    // style={{
                    //   fontSize: "16px",
                    //   marginRight: "-3px",
                    // }}
                    className={styles.reservationDetailsItemValueSelf}
                  >
                    {selectedCar.boosterSeatPrice !== 0 &&
                    selectedCar.boosterSeatPrice !== undefined
                      ? `$${selectedCar.boosterSeatPrice}`
                      : `$${0}`}
                  </span>
                </div>
              </div>
            </div>
          )}
        </>
        {/* )} */}

        <>
          {selectedCar.safetySeatPrice == undefined ? null : (
            // <Grid item>
            //   <Grid
            //     container
            //     direction="row"
            //     justify="space-between"
            //     alignItems="center"
            //   >
            //     <Grid item>
            //       <Typography
            //         className={classes.textColor}
            //         style={{ fontSize: "16px" }}
            //       >
            //         {"Infant & Child Safety Seat"}
            //       </Typography>
            //     </Grid>
            //     <Grid item style={{ flexGrow: 1 }}>
            //       <Box
            //         className={classes.boxBorder}
            //         style={{
            //           marginTop: "8px",
            //           backgroundColor: "transparent",
            //           marginLeft: "3px",
            //           marginRight: "3px",
            //         }}
            //       />
            //     </Grid>
            //     <Grid item>
            //       <Typography
            //         className={classes.textColor}
            //         style={{ fontSize: "16px" }}
            //       >
            //         {/* {`$${0}`} */}
            //         {selectedCar.safetySeatPrice !== 0 &&
            //         selectedCar.safetySeatPrice !== undefined
            //           ? `$${selectedCar.safetySeatPrice}`
            //           : `$${0}`}
            //       </Typography>
            //     </Grid>
            //   </Grid>
            // </Grid>

            <div
              // item
              className={styles.reservationDetailsItem}
            >
              <div
                // container
                // direction="row"
                // justify="space-between"
                // alignItems="center"
                className={styles.reservationDetailsItemContainer}
              >
                <div
                  // item
                  className={styles.reservationDetailsItemTitleContainer}
                >
                  <span
                    // className={classes.textColor}
                    // style={{ fontSize: "16px" }}
                    className={styles.reservationDetailsItemTitleSelf}
                  >
                    {"Infant & Child Safety Seat"}
                  </span>
                </div>
                <div
                  // item
                  // style={{ flexGrow: 1 }}

                  className={styles.reservationDetailsItemPointedLineContainer}
                >
                  <div
                    // className={classes.boxBorder}
                    // style={{
                    //   marginTop: "8px",
                    //   backgroundColor: "transparent",
                    //   marginLeft: "3px",
                    //   marginRight: "3px",
                    // }}
                    className={styles.reservationDetailsItemPointedLineSelf}
                  />
                </div>
                <div
                  // item
                  className={styles.reservationDetailsItemValueContainer}
                >
                  <span
                    // className={classes.textColor}
                    // style={{
                    //   fontSize: "16px",
                    //   marginRight: "-3px",
                    // }}
                    className={styles.reservationDetailsItemValueSelf}
                  >
                    {/* {`$${0}`} */}
                    {selectedCar.safetySeatPrice !== 0 &&
                    selectedCar.safetySeatPrice !== undefined
                      ? `$${selectedCar.safetySeatPrice}`
                      : `$${0}`}
                  </span>
                </div>
              </div>
            </div>
          )}
        </>

        {gateMeeting && (
          <>
            <div
              // item
              className={styles.reservationDetailsItem}
            >
              <div
                // container
                // direction="row"
                // justify="space-between"
                // alignItems="center"
                className={styles.reservationDetailsItemContainer}
              >
                <div
                  // item
                  className={styles.reservationDetailsItemTitleContainer}
                >
                  <span
                    // className={classes.textColor}
                    // style={{ fontSize: "16px" }}
                    className={styles.reservationDetailsItemTitleSelf}
                  >
                    {"Meet & Greet/Luggage Assist"}
                  </span>
                </div>
                <div
                  // item
                  // style={{ flexGrow: 1 }}

                  className={styles.reservationDetailsItemPointedLineContainer}
                >
                  <div
                    // className={classes.boxBorder}
                    // style={{
                    //   marginTop: "8px",
                    //   backgroundColor: "transparent",
                    //   marginLeft: "3px",
                    //   marginRight: "3px",
                    // }}
                    className={styles.reservationDetailsItemPointedLineSelf}
                  />
                </div>
                <div
                  // item
                  className={styles.reservationDetailsItemValueContainer}
                >
                  <span
                    // className={classes.textColor}
                    // style={{
                    //   fontSize: "16px",
                    //   marginRight: "-3px",
                    // }}
                    className={styles.reservationDetailsItemValueSelf}
                  >
                    {/* {`$${0}`} */}
                    {`$${selectedCar.greetAndMeetPrice}`}
                  </span>
                </div>
              </div>
            </div>

            {/* <Grid item>
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                >
                  <Grid item>
                    <Typography
                      className={classes.textColor}
                      style={{ fontSize: "16px" }}
                    >
                      {"Meet & Greet/Luggage Assist"}
                    </Typography>
                  </Grid>
                  <Grid item style={{ flexGrow: 1 }}>
                    <Box
                      className={classes.boxBorder}
                      style={{
                        marginTop: "8px",
                        backgroundColor: "transparent",
                        marginLeft: "3px",
                        marginRight: "3px",
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <Typography
                      className={classes.textColor}
                      style={{
                        fontSize: "16px",
                        fontWeight: "700",
                      }}
                    >
                      {`$${selectedCar.greetAndMeetPrice}`}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid> */}

            <div
              // item
              className={styles.reservationDetailsItem}
            >
              <div
                // container
                // direction="row"
                // justify="space-between"
                // alignItems="center"
                className={styles.reservationDetailsItemContainer}
              >
                <div
                  // item
                  className={styles.reservationDetailsItemTitleContainer}
                >
                  <span
                    // className={classes.textColor}
                    // style={{ fontSize: "16px" }}
                    className={styles.reservationDetailsItemTitleSelf}
                  >
                    Luggage count
                  </span>
                </div>
                <div
                  // item
                  // style={{ flexGrow: 1 }}

                  className={styles.reservationDetailsItemPointedLineContainer}
                >
                  <div
                    // className={classes.boxBorder}
                    // style={{
                    //   marginTop: "8px",
                    //   backgroundColor: "transparent",
                    //   marginLeft: "3px",
                    //   marginRight: "3px",
                    // }}
                    className={styles.reservationDetailsItemPointedLineSelf}
                  />
                </div>
                <div
                  // item
                  className={styles.reservationDetailsItemValueContainer}
                >
                  <span
                    // className={classes.textColor}
                    // style={{
                    //   fontSize: "16px",
                    //   marginRight: "-3px",
                    // }}
                    className={styles.reservationDetailsItemValueSelf}
                  >
                    {/* {`$${0}`} */}
                    {formData.luggageCount}
                  </span>
                </div>
              </div>
            </div>

            {/* <Grid item>
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                >
                  <Grid item>
                    <Typography
                      className={classes.textColor}
                      style={{ fontSize: "16px" }}
                    >
                      Luggage count
                    </Typography>
                  </Grid>
                  <Grid item style={{ flexGrow: 1 }}>
                    <Box
                      className={classes.boxBorder}
                      style={{
                        marginTop: "8px",
                        backgroundColor: "transparent",
                        marginLeft: "3px",
                        marginRight: "3px",
                        // borderBottom: "2px dotted white",
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <Typography
                      className={classes.textColor}
                      style={{
                        // color: "white",
                        fontSize: "16px",
                        fontWeight: "700",
                      }}
                    >
                      {formData.luggageCount}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid> */}
          </>
        )}

        <div
          // item
          className={styles.reservationDetailsItem}
        >
          <div
            // container
            // direction="row"
            // justify="space-between"
            // alignItems="center"
            className={styles.reservationDetailsItemContainer}
          >
            <div
              // item
              className={styles.reservationDetailsItemTitleContainer}
            >
              <span
                // className={classes.textColor}
                // style={{ fontSize: "16px" }}
                className={styles.reservationDetailsItemTitleSelf}
              >
                Total
              </span>
            </div>
            <div
              // item
              // style={{ flexGrow: 1 }}

              className={styles.reservationDetailsItemPointedLineContainer}
            >
              <div
                // className={classes.boxBorder}
                // style={{
                //   marginTop: "8px",
                //   backgroundColor: "transparent",
                //   marginLeft: "3px",
                //   marginRight: "3px",
                // }}
                className={styles.reservationDetailsItemPointedLineSelf}
              />
            </div>
            <div
              // item
              className={styles.reservationDetailsItemValueContainer}
            >
              <span
                // className={classes.textColor}
                // style={{
                //   fontSize: "16px",
                //   marginRight: "-3px",
                // }}
                className={styles.reservationDetailsItemValueSelf}
              >
                {/* {`$${0}`} */}
                {`$${round(selectedCar.price, 2)}`}
              </span>
            </div>
          </div>
        </div>

        <div
          // item
          className={styles.notesTextFieldContainer}
        >
          <textarea
            id="outlined-multiline-flexible"
            // label="Notes / Itinerary"
            placeholder="Notes / Itinerary"
            // multiline
            // fullWidth
            // rows={3}
            // value={note}
            // onChange={handleChange}
            // className={classes.notes}
            // // notesUnderline
            // InputProps={{
            //   classes: {
            //     underline: classes.notesUnderline,
            //   },
            //   // disableUnderline: true,
            // }}
            className={styles.notesTextFieldSelf}
          />
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
            {/* <Grid
                // item
                // xs={6}
                className={styles.back}
              > */}
            <button
              variant="contained"
              color="primary"
              fullWidth
              onClick={back}
              startIcon={<BackArrowIcon />}
              // className={classes.backButtonSelf}
              className={styles.buttonBackSelf}
            >
              Back
            </button>
            {/* </Grid> */}
            {/* <Grid item xs={6}> */}
            <button
              variant="contained"
              fullWidth
              onClick={() => {
                next()
                sendNote(note)
                setOrderSum(selectedCar.price)
              }}
              color="primary"
              endIcon={<ForwardArrowIcon />}
              // className={classes.nextButtonSelf}
              className={styles.buttonNextSelf}
            >
              Next
            </button>
            {/* </Grid> */}
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  )
}

export default PreviewUIComponent
