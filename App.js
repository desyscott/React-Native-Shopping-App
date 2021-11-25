import React from "react";
import Navigation from "./components/routes/Navigation";

import { Provider } from "react-redux";
import store from "./components/Store";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
