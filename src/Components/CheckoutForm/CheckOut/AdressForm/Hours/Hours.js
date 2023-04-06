import { makeStyles } from "@material-ui/core"
// import Grid from "@material-ui/core/Grid"
// import Typography from "@material-ui/core/Typography"
import React from "react"
import { useFormContext } from "react-hook-form"
// import { HourlyIcon, MinusIcon, PlusIcon } from "../../../../../assets/icons"
import styles from "./Hours.module.scss"
import "../../index.css"

const useStyles = makeStyles((theme) => ({
  mainPlusMinusContainer: {
    height: "34px",

    borderBottom: "2px solid #AC8159",
    transition: "200ms",
    "&:hover": { borderBottom: "2px solid white", transition: "200ms" },
  },
}))

const Hours = ({
  hoursState,
  setHourly,
  hoursAddressForm,
  setHoursAddressForm,
}) => {
  const classes = useStyles()

  const { register } = useFormContext()

  //   const [hoursAddressForm, setHoursAddressForm] = useState(0)

  const onDecrease = () => {
    if (hoursAddressForm === 1) {
      return
    }
    setHoursAddressForm((hoursAddressForm) => hoursAddressForm - 1)
  }
  const onIncrease = () => {
    setHoursAddressForm((hoursAddressForm) => hoursAddressForm + 1)
  }

  //   React.useEffect(() => {
  //     if (hoursState !== 0) {
  //       setHourly(true)
  //       setHoursAddressForm(parseInt(hoursState))
  //     }
  //   }, [hoursState])

  return (
    <div
      // container
      // direction="row"
      // justify="space-between"
      // alignItems="center"
      // style={{ marginTop: "-4px" }}
      className={styles.hoursCounterWrapper}
    >
      <div className={styles.hoursCounterIconAndTitleContainer}>
        {/* <div container direction="row" alignItems="center"> */}
        {/* <HourlyIcon /> */}
        <span className={styles.hoursCounterIcon}></span>
        <h3
          // style={{ color: "white", fontSize: "14px", marginTop: "4px" }}
          className={styles.hoursCounterTitle}
        >
          Hours
        </h3>
        {/* </div> */}
      </div>
      <div className={styles.hoursCounterPlusMinusContainer}>
        {/* <div
          // container
          // direction="row"
          // justify="space-around"
          // alignItems="center"
          // className={classes.mainPlusMinusContainer}
          className={styles.hoursCounterPlusMinus}
          // style={{
          //   // background: "#282828",
          //   // height: "35px",
          //   // borderRadius: "5px",
          //   height: "34px",
          //   // paddingTop: "-4px",
          // }}
        > */}
        <div className={styles.hoursCounterMinusContainer}>
          <button
            onClick={onDecrease}
            className={styles.hoursCounterMinus}

            // style={{ marginRight: "5px" }}
          ></button>
        </div>
        <div
          // item
          // style={{
          //   textAlign: "center",
          //   // borderBottom: "2px solid #AC8159",
          //   // marginTop: "6px",
          //   // paddingBottom: "2px",
          //   // borderBottom: "2px solid #AC8159",
          //   // height: "105%",
          // }}
          className={styles.hoursCounterInputContainer}
        >
          <input
            ref={register}
            name="hours"
            // className="passenger"
            onChange={(e) => {
              setHoursAddressForm(e.target.value)
            }}
            value={hoursAddressForm}
            size="1"
            // style={{
            //   // pointerEvents: "none",
            //   minWidth: "34px",
            //   maxWidth: "34px",
            //   // marginLeft: "2px",
            //   // marginRight: "2.5px",
            //   // marginBottom: "4px",
            //   backgroundColor: "transparent",
            //   border: "none",
            //   color: "white",
            //   textAlign: "center",
            //   fontFamily: "Roboto",
            //   textTransform: "none",
            //   fontWeight: "400",
            //   fontSize: "14px",
            //   height: "100%",
            // }}
            type="number"
            className={styles.hoursCounterInput}
          />
        </div>
        <div className={styles.hoursCounterPlusContainer}>
          <button
            className={styles.hoursCounterPlus}
            onClick={onIncrease}
            // style={{ marginLeft: "4px" }}
          ></button>
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default Hours
