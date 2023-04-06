// import Grid from "@material-ui/core/Grid"
// import InputAdornment from "@material-ui/core/InputAdornment"
// import MenuItem from "@material-ui/core/MenuItem"
// import { makeStyles } from "@material-ui/core/styles"
// import { useForm, useFormContext } from "react-hook-form"
// import TextField from "@material-ui/core/TextField"
import { GoogleApiWrapper, Map, Marker } from "google-maps-react"
import React, { forwardRef, useState } from "react"
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete"
import {
  AddLocIcon,
  DeleteLocIcon,
  // EndLocationIcon,
  // StartLocationIcon,
} from "../../../assets/icons"
// import rideCheckPointErrors from "../../CheckoutForm/CheckOut/AdressForm/AdressFormUIComponent"
import MapStyles from "../mapStyles"
import { connect } from "react-redux"
import { useStyles } from "./GoogleMapStyles"
import styles from "./GoogleMap.module.scss"
import {
  CSSTransition,
  // SwitchTransition,
  // Transition,
  TransitionGroup,
} from "react-transition-group"
import "./animationForGoogleMap.css"

const GoogleMap = React.memo(
  forwardRef(
    ({
      setDestinations,
      destinations,
      orderAddressDetails,
      ref,
      errors,
      redBorderOnSubmit,
      redBorderOnSubmit2,
      resetInputs,
      formData,
      flagForGotAddressError,
      ...props
    }) => {
      // const classes = useStyles(redBorderOnSubmit)

      const [condition, setCondition] = useState([])

      const handleChanger = (e) => {
        setCondition(e.event.target)
        console.log(condition)
      }
      const [markers, setMarkers] = useState([])
      const [mapCenter, setMapCenter] = useState({
        lat: 33.1507,
        lng: -96.8236,
      })

      const setUseHookState = (value, id) => {
        let newArr = [...destinations]
        newArr[id].rideCheckPoint = value
        setDestinations(newArr)
      }

      const handleChange = (value, id) => {
        setUseHookState(value, id)
      }

      let selectedArray = null

      const handleSelect = async (value, id) => {
        setUseHookState(value, id)
        const results = await geocodeByAddress(value)
        const latLng = await getLatLng(results[0])
        const placeId = results[0].place_id
        let placeType = 0
        if (results[0].types.some((types) => types === "airport")) {
          placeType = 2
        }
        selectedArray = [...destinations]
        selectedArray[id] = {
          ...selectedArray[id],
          latitude: latLng.lat,
          longitude: latLng.lng,
          placeId: placeId,
          placeType: placeType,
        }

        setDestinations(selectedArray)

        setMapCenter({ lat: latLng.lat, lng: latLng.lng })
        if (markers.length >= 1) {
          markers.splice(0, 2)
          setMarkers([...markers, { lat: latLng.lat, lng: latLng.lng }])
        } else {
          setMarkers([...markers, { lat: latLng.lat, lng: latLng.lng }])
        }
      }

      const addEndPoint = () => {
        let newArr = [
          ...destinations,
          {
            rideCheckPoint: "",
            latitude: 0,
            longitude: 0,
            placeType: 0,
            placeId: "",
          },
        ]
        setDestinations(newArr)
      }

      const airportCenter4 = [
        "Daniel K. Inouye International Airport (HNL), Rodgers Blvd, Honolulu, HI, USA",
        "Honolulu Airport (HNL), Rodgers Blvd, Honolulu, HI, USA",
      ]
      var nothing = null
      const removeEndPoint = (index) => {
        let newArr = [...destinations]
        newArr.splice(index, 1)
        setDestinations(newArr)
      }
      // const searchOptions = {
      //   location: new google.maps.LatLng(-34, 151),
      //   radius: 2000,
      //   types: ["address"],
      // }
      var copiedSuggestions = null
      var copiedLoading = null
      React.useEffect(() => {}, [orderAddressDetails])
      React.useEffect(() => {
        // console.log(destinations[0]?.rideCheckPoint.includes("Airport"))
        if (Boolean(formData.orderAddressDetails[0]?.rideCheckPoint)) {
          setDestinations(formData.orderAddressDetails)
        }
        if (resetInputs) {
          setDestinations(destinations)
        }
      }, [])

      const setDestinationsIcons = (id, destinations) => {
        if (id === 0) {
          return styles.destinationsInputWithFROMIcon
        } else if (id === destinations.length - 1) {
          return styles.destinationsInputWithTOIcon
        }
        if (id > 0 && id < destinations.length - 1) {
          return styles.destinationsInputWithNumberIcon
        }
      }

      return (
        <>
          <div
            // container
            // direction="column"
            // className={classes.mapMainContainer}
            className={styles.mapWithInputsWrapper}
          >
            <div
              // item
              className={styles.mapContainer}
            >
              <div className={styles.mapContainerForHideMapsTagsPositioning}>
                <Map
                  google={props.google}
                  disableDefaultUI={true}
                  initialCenter={{
                    lat: mapCenter.lat,
                    lng: mapCenter.lng,
                  }}
                  center={{
                    lat: mapCenter.lat,
                    lng: mapCenter.lng,
                  }}
                  styles={MapStyles}
                  zoom={12}
                >
                  {markers.map((marker, id) => (
                    <Marker
                      key={`${id}${marker.lat}`}
                      lat={marker.lat}
                      lng={marker.lng}
                    />
                  ))}
                </Map>
              </div>
            </div>
            <div
              className={styles.mapInputsContainerForHideMapsTagsPositioning}
            >
              <div
                // item
                // className={
                //   flagForGotAddressError
                //     ? classes.destinationContainerred
                //     : classes.destinationContainer
                // }
                className={styles.mapInputsContainer}
              >
                <TransitionGroup>
                  {destinations.map((destination, id) => {
                    console.log(destinations)
                    if (!airportCenter4.includes(destination?.rideCheckPoint)) {
                      nothing = destinations[id]?.rideCheckPoint
                    }

                    return (
                      <CSSTransition
                        key={id}
                        classNames={{
                          enter: "enter",
                          enterActive: "enterActive",
                          exit: "exit",
                          exitActive: "exitActive",
                          // leave: "leave",
                          // leaveActive: "leaveActive",
                          // appear: "appear",
                          // appearActive: "appearActive",
                        }}
                        timeout={300}
                      >
                        <PlacesAutocomplete
                          value={
                            formData.orderAddressDetails[id]?.rideCheckPoint &&
                            !resetInputs
                              ? formData.orderAddressDetails[id]?.rideCheckPoint
                              : nothing
                          }
                          onChange={(value) => handleChange(value, id)}
                          onSelect={(value) => {
                            handleSelect(value, id)
                          }}
                          key={`${destination.id}${id}`}
                          // searchOptions={searchOptions}
                        >
                          {({
                            getInputProps,
                            suggestions,
                            getSuggestionItemProps,
                            loading,
                          }) => {
                            copiedSuggestions = [...suggestions].filter(
                              (item) => {
                                return !airportCenter4.includes(
                                  item.description
                                )
                              }
                            )

                            return (
                              <>
                                <div
                                  className={styles.destinationsInputContainer}
                                >
                                  {/* <div
                                className={
                                  redBorderOnSubmit || redBorderOnSubmit2
                                    ? classes.noBorderRed
                                    : classes.noBorderDefault
                                }
                                className={classes.normalInputClass}
                              > */}
                                  {id > 0 && id < destinations.length - 1 && (
                                    <span
                                      className={
                                        styles.numberOfDestinationPoint
                                      }
                                    >
                                      {id}
                                    </span>
                                  )}

                                  <input
                                    // position="start"
                                    // style={{
                                    //   height: "40px",
                                    //   // border: "none",
                                    //   // marginTop: "-4px",
                                    //   boxShadow: "4px 5px 30px rgba(0, 0, 0, 0.1)",
                                    // }}
                                    // variant="standard"
                                    name="rideCheckPoint"
                                    defaultValue={
                                      destinations[id]?.rideCheckPoint
                                    }
                                    // fullWidth
                                    // className={classes.normalInputClass}
                                    inputRef={ref}
                                    // className={styles.destinationsInputContainer}
                                    // InputProps={{
                                    //   startAdornment: (
                                    //     <InputAdornment
                                    //       style={{
                                    //         marginRight: "10px",
                                    //         marginLeft: "15px",
                                    //       }}
                                    //     >
                                    //       {id === 0 && <StartLocationIcon />}
                                    //       {id === destinations.length - 1 && (
                                    //         <EndLocationIcon />
                                    //       )}
                                    //       {id > 0 &&
                                    //         id < destinations.length - 1 && (
                                    //           <span
                                    //             style={{
                                    //               borderRadius: "50%",
                                    //               width: "24px",
                                    //               height: "25px",
                                    //               backgroundColor: "transparent",
                                    //               border: "2px solid #FFFFFF",
                                    //               textAlign: "center",
                                    //               fontFamily: "Roboto",
                                    //               fontWeight: "700",
                                    //               fontSize: "0.9rem",
                                    //               paddingTop: "2px",
                                    //               marginLeft: "-5px",
                                    //               marginRight: "-5px",
                                    //             }}
                                    //           >
                                    //             {id}
                                    //           </span>
                                    //         )}
                                    //     </InputAdornment>
                                    //   ),
                                    // endAdornment: (
                                    //   <InputAdornment
                                    //     style={{
                                    //       cursor: "pointer",
                                    //       // marginRight: "10px",
                                    //     }}
                                    //     position="end"
                                    //   >
                                    //     {id === destinations.length - 1 && (
                                    //       <span
                                    //         onClick={addEndPoint}
                                    //         style={{
                                    //           marginTop: "5px",
                                    //         }}
                                    //       >
                                    //         <AddLocIcon />
                                    //       </span>
                                    //     )}
                                    //     {id > 0 && id < destinations.length - 1 && (
                                    //       <span
                                    //         onClick={() => removeEndPoint(id)}
                                    //         style={{ marginBottom: "6px" }}
                                    //       >
                                    //         <DeleteLocIcon />
                                    //       </span>
                                    //     )}
                                    //   </InputAdornment>
                                    // ),
                                    // classes: {
                                    //   root: classes.inputRoot,
                                    //   underline:
                                    //     redBorderOnSubmit || redBorderOnSubmit2
                                    //       ? classes.noBorderRed
                                    //       : classes.noBorderDefault,
                                    //   input: classes.input,
                                    // },
                                    // }}
                                    placeholder={id === 0 ? "From" : "To"}
                                    className={setDestinationsIcons(
                                      id,
                                      destinations
                                    )}
                                    {...getInputProps()}
                                  />

                                  {id === destinations.length - 1 && (
                                    <span
                                      onClick={addEndPoint}
                                      className={styles.addLocationIcon}
                                    >
                                      <AddLocIcon />
                                    </span>
                                  )}
                                  {id > 0 && id < destinations.length - 1 && (
                                    <span
                                      onClick={() => removeEndPoint(id)}
                                      className={styles.deleteLocationIcon}
                                    >
                                      <DeleteLocIcon />
                                    </span>
                                  )}
                                  {/* </div> */}

                                  <div className={styles.dropDown}>
                                    {loading && (
                                      <div
                                        // style={{
                                        //   alignItems: "center",
                                        //   color: "green",
                                        // }}
                                        className={styles.dropDownLoadingText}
                                      >
                                        Loading...
                                      </div>
                                    )}
                                    {copiedSuggestions.map((suggestion, id) => {
                                      // console.log(copiedSuggestions)

                                      // inline style for demonstration purpose
                                      // const style = suggestion.active
                                      //   ? {
                                      //       backgroundColor: "#bababa",
                                      //       cursor: "pointer",
                                      //       textTransform: "none",
                                      //       justifyContent: "center",

                                      //       width: "340px",
                                      //     }
                                      //   : {
                                      //       backgroundColor: "white",
                                      //       cursor: "pointer",
                                      //       textTransform: "none",
                                      //       width: "340px",

                                      //       justifyContent: "center",
                                      //     }

                                      return (
                                        <div
                                          key={`${id}${suggestion.description}`}
                                          {...getSuggestionItemProps(
                                            suggestion
                                          )}
                                          className={styles.itemInsideDropDown}
                                        >
                                          {/* <MenuItem
                                        onMouseEnter={(e) => (
                                          (e.target.style.backgroundColor =
                                            "black"),
                                          (e.target.style.color = "white")
                                        )}
                                        onMouseLeave={(e) => (
                                          (e.target.style.backgroundColor =
                                            "#ededed"),
                                          (e.target.style.color = "black")
                                        )}
                                        style={{
                                          backgroundColor: "#ededed",
                                          whiteSpace: "pre-line",
                                          fontSize: "14px",
                                          color: "black",
                                        }}
                                      > */}
                                          {suggestion.description}
                                          {/* </MenuItem> */}
                                        </div>
                                      )
                                    })}
                                  </div>
                                </div>
                              </>
                            )
                          }}
                        </PlacesAutocomplete>
                      </CSSTransition>
                    )
                  })}
                </TransitionGroup>
              </div>
            </div>
          </div>
        </>
      )
    }
  )
)

const mapStateToProps = (state) => {
  return {
    // profile: state.companyProfile.profile,
    formData: state.formData,
    resetInputs: state.resetWidgetInputs.resetInputs,
    flagForGotAddressError: state.companyProfile.gotAddressError,
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCmKhi_5V_pulQtm6DFJ8teDZpR9I5hJoM",
  libraries: ["places", "drawing", "geometry"],
})(connect(mapStateToProps, {})(GoogleMap))
