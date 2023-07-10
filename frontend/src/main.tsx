/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

declare global {
  interface Window {
    TruffleContract: any
    ethereum:
      | {
          request: (args: { method: string; params?: any[] }) => Promise<any>
        }
      | undefined
  }
}
