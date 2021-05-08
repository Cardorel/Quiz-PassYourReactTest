import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import * as serviceWorker from "./serviceWorker";
import SpinnerInCenter from "./Components/Spiner/SpinnerInCenter";
import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <Suspense fallback={<SpinnerInCenter />}>
          <App />
        </Suspense>
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
