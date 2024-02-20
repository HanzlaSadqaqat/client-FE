import { ProSidebarProvider } from "react-pro-sidebar";
import React from "react";
import Routes from "./Routes";
import store from "./redux/store";
import { Provider } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NextUIProvider } from "@nextui-org/react";

function App() {
  // localStorage.setItem("CWD", "R:\freelancingsummary");
  return (
    <Provider store={store}>
      <ProSidebarProvider>
        <NextUIProvider>
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <Routes />
        </NextUIProvider>
      </ProSidebarProvider>
    </Provider>
  );
}

export default App;
