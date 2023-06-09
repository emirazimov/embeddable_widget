import React, { useEffect } from "react"
import { connect } from "react-redux"
import {
  getCompanyProfile,
  setGotAddressError,
} from "../../Redux/company-profile-reducer"
// import Grid from "@material-ui/core/Grid"
// import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
// import { CloseWidgetIcon } from "../../assets/icons"
// import Divider from "@material-ui/core/Divider"
// import { isMobile } from "react-device-detect"
// import { Preloader } from "../Helpers/Preloader/Preloader"
// import AppBar from "@material-ui/core/AppBar"
import { useMediaQuery } from "@material-ui/core"
import {
  setResetWidgetInputs,
  setResetWidgetInputsActionCreator,
} from "../../Redux/reset-widget-inputs-reducer"
import { setIsAirportPickupIncluded } from "../../Redux/form-reducer"
import { setGateMeetingRedux } from "../../Redux/gate-meeting-reducer"
import styles from "./CompanyProfile.module.scss"

const useStyles = makeStyles((theme) => ({
  companyContainer: {
    padding: theme.spacing(1.5),
    // position: 'fixed',
    background: "black",
  },
  companyLogo: {
    borderRadius: "100px",
    border: "1px solid white",
    width: "55px",
    height: "55px",
    marginLeft: "5px",
    userDrag: "none",
    userSelect: "none",
    mozUserSelect: "none",
    webkitUserDrag: "none",
    webkitUserSelect: "none",
    msUserSelect: "none",
  },
  companyName: {
    fontFamily: "Roboto",
    fontWeight: "700",
    color: "white",
    fontSize: "17px",
    [theme.breakpoints.up(768)]: {
      fontSize: "20.5px",
    },
    textTransform: "none",
  },
  closeIcon: {
    textAlign: "center",
    verticalAlign: "sub",
    width: "28px",
    height: "22px",
    paddingTop: "7px",
    "&:hover": {
      textAlign: "center",
      width: "28px",
      height: "22px",
      paddingTop: "7px",
      borderRadius: "20px",
      background: "#4F4F4F",
      marginRight: "10px",
      transition: "0.2s",
      "& $path": {
        fill: "white",
      },
    },
  },
}))

const CompanyProfile = ({
  initializing,
  profile,
  getCompanyProfile,
  handleCloseDialog,
  setExpanded,
  setActiveStep,
  setBackgroundScrollStop,
  resetInputs,
  setResetWidgetInputs,
  setGotAddressError,
  setIsAirportPickupIncluded,
  setGateMeetingRedux,
}) => {
  const classes = useStyles()

  const jwtToken = localStorage.getItem("Authorization")
  const smallDevices = useMediaQuery("(max-width:768px)")

  const resetWidgetInputs = (dispatch) => {
    dispatch(setResetWidgetInputsActionCreator(true))
  }
  useEffect(() => {
    if (jwtToken) {
      getCompanyProfile()
    }
  }, [getCompanyProfile, jwtToken])
  // useEffect(() => {
  //   setResetWidgetInputs()
  // }, [])

  return (
    <>
      {/* {isMobile ? <> <Grid container direction="row"
                justify="space-between"
                alignItems="center"
                className={classes.companyContainer}>
                <Grid item>
                    <img src={profile.companyLogoPath} className={classes.companyLogo} alt='companyLogo' />
                </Grid>
                <Grid item xs={5}>
                    <Typography className={classes.companyName}>{profile.companyName}</Typography>
                </Grid>
                <Grid item>
                    <span style={{ cursor: 'pointer' }} onClick={() => { handleCloseDialog(false); setActiveStep(0) }}>
                        <CloseWidgetIcon />
                    </span>
                </Grid>
            </Grid>
                <Divider orientation='horizontal' variant='fullWidth' />
            </> : */}
      {initializing ? (
        <>
          <div
            // container
            // direction="row"
            // justify="space-between"
            // alignItems="center"
            // wrap="nowrap"
            // className={classes.companyContainer}
            className={styles.companyProfileWrapper}
          >
            <div className={styles.companyProfileImageContainer}>
              <img
                src={profile.companyLogoPath}
                // className={classes.companyLogo}
                alt="companyLogo"
                className={styles.companyProfileImageSelf}
              />
            </div>
            <div
              // item
              // xs={7}
              // md={7}
              // lg={8}
              // xl={8}
              className={styles.companyProfileNameContainer}
            >
              <span className={styles.companyProfileNameSelf}>
                {profile.companyName}
              </span>
            </div>
            {/* {smallDevices && ( */}
            <div className={styles.companyProfileCloseIconContainer}>
              <div
                // style={{ cursor: "pointer", marginRight: "6px" }}
                className={styles.companyProfileCloseIconSelf}
                onClick={() => {
                  setExpanded()
                  setActiveStep(0)
                  setBackgroundScrollStop(false)
                  setResetWidgetInputs(true)
                  setGotAddressError(false)
                  setIsAirportPickupIncluded(false)
                  setGateMeetingRedux(false)
                }}
              >
                <span
                  className={styles.companyProfileCloseIconSelfCustomCreation}
                ></span>
                {/* <CloseWidgetIcon /> */}
              </div>
            </div>
            {/* )} */}
          </div>
        </>
      ) : null}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    profile: state.companyProfile.profile,
    resetInputs: state.resetWidgetInputs.resetInputs,
  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, {
  getCompanyProfile,
  setResetWidgetInputs,
  setGotAddressError,
  setIsAirportPickupIncluded,
  setGateMeetingRedux,
})(CompanyProfile)
