import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import App from "./App"
import store from "./Redux/redux-store"
import reportWebVitals from "./reportWebVitals"

var divForReact = document.createElement("div")

divForReact.setAttribute("id", "widget-by-bookinglane")
document.getElementsByTagName("body")[0].appendChild(divForReact)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("widget-by-bookinglane")
)

reportWebVitals()
