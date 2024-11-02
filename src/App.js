import * as React from "react";
import AppNavigator from "./navigator/AppNavigator";
import { Provider } from "react-redux";
import store from "./store/store";
import "src/App.css";
import Header from "src/common/Header";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <AppNavigator />
      </Provider>
    </>
  );
}

export default App;
