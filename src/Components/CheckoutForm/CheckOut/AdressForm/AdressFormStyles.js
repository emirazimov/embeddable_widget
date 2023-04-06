// import { makeStyles } from "@material-ui/styles"
// import { withStyles } from "@material-ui/styles"
// import Switch from "@material-ui/core/Switch"

// const useStyles = makeStyles((theme) => ({
//   // contentContainer: {
//   //   padding: theme.spacing(2),
//   //   paddingTop: "0px",
//   //   paddingBottom: "0px",
//   //   background: "black",
//   // },

//   // carItem: {
//   //   backgroundColor: "black",
//   //   marginTop: theme.spacing(1),
//   //   padding: 0,
//   //   width: "100%",
//   //   height: "80%",
//   //   boxShadow: "4px 5px 30px rgba(0, 0, 0, 0.1)",
//   //   cursor: "pointer",
//   //   border: "none",
//   //   borderRadius: "10px",
//   //   "&:hover": {
//   //     // backgroundColor: "#AC8159",
//   //     color: "white",
//   //     transition: "300ms",
//   //   },
//   // },
//   carFont: {
//     textTransform: "uppercase",
//     fontSize: "11px",
//     // marginLeft: "-5px",
//     color: "white",
//   },
//   carImageContainer: {
//     width: "63px",
//     textAlign: "center",
//   },
//   carImage: {
//     width: "100%",
//     height: "35px",
//     objectFit: "cover",
//     // padding: "5px",
//     // paddingLeft: "4px",
//     userDrag: "none",
//     userSelect: "none",
//     mozUserSelect: "none",
//     webkitUserDrag: "none",
//     webkitUserSelect: "none",
//     msUserSelect: "none",
//   },
//   carImageStylesForBiggerTypeOfImage: {
//     width: "90%",
//     height: "35px",
//     objectFit: "contain",
//     // padding: "2px",

//     // paddingBottom: "5px",
//     // paddingTop: "10px",
//     userDrag: "none",
//     userSelect: "none",
//     mozUserSelect: "none",
//     webkitUserDrag: "none",
//     webkitUserSelect: "none",
//     msUserSelect: "none",
//   },
//   carItemContainer: {
//     // paddingTop: theme.spacing(1.2),
//     // paddingBottom: theme.spacing(1.2),

//     "&:hover": {
//       color: "white",
//     },
//   },
//   preferences: {
//     color: "white",
//     marginLeft: "10px",
//     fontSize: "14px",
//     marginTop: "-5px",
//   },
//   submitButton: {
//     paddingTop: "10px",
//     paddingBottom: "10px",
//   },
//   active: {
//     // color: '#392BAA',
//     background: "#1B1837",
//   },
//   input: {
//     "&::placeholder": {
//       color: "white",
//       opacity: "1",
//       fontSize: "12px",
//     },
//     "&:-webkit-autofill": {
//       height: "0px",
//       border: "none",
//       borderRadius: "0px",
//       WebkitBoxShadow: "0 0 0 1000px white inset",
//       WebkitTextFillColor: "white",
//     },
//   },
//   listRoot: {
//     "&:hover": {
//       background: "#AC8159",
//       "& $carFont": {
//         color: "black",
//       },
//     },
//     "&.MuiListItem-root.Mui-selected, &.MuiListItem-root.Mui-selected:hover": {
//       background: "#AC8159",
//       "& $carFont": {
//         color: "black",
//       },
//     },
//   },
//   carouselRoot: {
//     background: "black",
//     boxShadow: "4px 5px 30px rgba(0, 0, 0, 0.1)",
//     minWidth: "30px",
//     height: "72px",
//     marginTop: "8px",
//     cursor: "pointer",
//     borderRadius: "5px",
//     border: "1px solid #AC8159",
//     "&:hover": {
//       backgroundColor: "#AC8159",
//       "& path": {
//         fill: "white",
//       },
//     },
//     // "& span": {
//     //   "&:hover": {
//     //     backgroundColor: "white",
//     //   },
//     // },
//   },
//   noBorderDefault: {
//     // border: "1px solid black",
//     borderRadius: "0px",
//     // "&:hover": {
//     //   border: "1px solid white",
//     // },
//     borderBottom: "2px solid #AC8159",
//     transition: "200ms",
//     "&:hover": {
//       transition: "200ms",
//       borderBottom: "2px solid white",
//     },
//   },
//   noBorderRed: {
//     borderRadius: "0px",
//     borderBottom: "1px solid #db5858",
//     "&:hover": {
//       transition: "200ms",
//       borderBottom: "1px solid white",
//     },
//   },
//   redBorderForAirlines: {
//     border: "1px solid #db5858",
//   },
//   redBorderForAirlinesDefault: {
//     borderTop: "2px solid transparent",
//   },
//   inputDateTime: {
//     width: "100%",
//     height: "40px",
//     fontSize: "14px",
//     background: "black",
//     borderRadius: "0px",

//     "&-webkit-autofill": {
//       "&-webkit-box-shadow": "0 0 0 1000px red inset",
//     },

//     "&:hover": {
//       transition: "400ms",
//     },
//     color: "white",
//     "&.MuiIconButton-root": {
//       color: "white",
//     },

//     // ":-webkit-autofill": {
//     //   WebkitBoxShadow: "0 0 0 1000px white inset",
//     //   backgroundColor: "red !important",
//     // },
//   },
//   carTypeWithRed: {
//     border: "1px solid #db5858",
//   },
//   carContainerRed: {
//     // paddingTop: "20px",
//     marginTop: "10px",
//     marginBottom: "10px",
//     paddingBottom: "6px",
//     border: "1px solid #db5858",
//   },
//   carContainerDefault: {
//     border: "none",
//   },
//   carTypeDefault: {
//     border: "none",
//   },
//   inputTimehover: {
//     border: "1px solid white",
//   },
//   inputTimehover2: {
//     border: "1px solid white",
//   },
//   redBorderForPassengers: {
//     paddingTop: "4px",
//     border: "1px solid #db5858",
//   },
//   redBorderForPassengersNone: {
//     border: "none",
//   },
//   noBorder: {
//     // border: "none",
//     "&:before": {
//       borderBottom: "2px solid #AC8159",
//     },
//   },
//   buttonSelf: {
//     background: "#AC8159",
//     border: "none",
//     "& $p": {
//       color: "black",
//     },
//     "&:hover": {
//       background: "black",
//       border: "1px solid #AC8159",
//       "& $p": {
//         color: "#AC8159",
//       },
//       // "& $typographyForButton": {
//       //   color: "black",
//       // },
//     },
//   },
//   popupIndicator: {
//     color: "white",
//   },
//   typographyForButton: {
//     fontSize: "14px",
//     color: "white",
//   },
//   option: {
//     fontSize: "15px",
//     backgroundColor: "black",
//     color: "white",
//     "&:hover": {
//       backgroundColor: "#d4d4d4",
//       color: "black",
//     },
//   },
//   airLinesInput: {
//     borderBottom: "2px solid #AC8159",
//     transition: "200ms",
//     "&:hover": {
//       borderBottom: "2px solid white",
//       transition: "200ms",
//     },
//   },
//   flightNumberInput: {
//     // "&:-webkit-autofill": {
//     //   "-webkit-box-shadow": "0 0 0 100px #000 inset",
//     //   "-webkit-text-fill-color": "#fff",
//     // },
//     // background: "white",
//     // border: "1px solid black",
//     // "&:hover": {
//     //   border: "1px solid white",
//     // },
//   },
//   selectedOption: {
//     backgroundColor: "#ededed",
//     "&$selected": {
//       backgroundColor: "#ededed",
//     },
//   },
//   rootToggleButton: {
//     color: "white",
//     borderRadius: "4px",
//     border: "1px solid #AC8159",
//     "&.MuiToggleButton-root.Mui-selected": {
//       background: "#AC8159",
//       color: "black",
//     },
//     "&:hover": {
//       background: "#AC8159",
//       color: "black",
//     },
//   },
//   maskElement: {
//     background: "transparent",
//   },
//   swichesTextColor: {
//     color: "white",
//   },
// }))

// const AntSwitch = withStyles((theme) => ({
//   root: {
//     width: 38,
//     height: 23,
//     padding: 0,
//     paddingBottom: 2,
//     display: "flex",
//   },
//   switchBase: {
//     "&:hover": {
//       paddingRight: "2.7px",
//       paddingBottom: "3px",
//       color: "#AC8159",
//     },
//     padding: 2,
//     paddingTop: "2.2px",
//     color: "#523C29",

//     "&$checked": {
//       transform: "translateX(16px)",
//       color: "#AC8159",

//       "& + $track": {
//         opacity: 1,
//         backgroundColor: "black",
//         borderColor: "#AC8159",
//       },
//     },
//   },
//   thumb: {
//     width: 14,
//     height: 14,
//     boxShadow: "none",
//     marginTop: "1.5px",
//     marginLeft: "2px",
//   },
//   track: {
//     border: `1px solid #AC8159`,
//     borderRadius: 19,
//     opacity: 1,
//     backgroundColor: "black",
//   },
//   checked: {},
// }))(Switch)

// export { useStyles, AntSwitch }
