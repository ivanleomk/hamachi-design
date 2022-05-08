import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import GenericLayout from "../layout/GenericLayout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <GenericLayout>
        <Component {...pageProps} />
      </GenericLayout>
    </>
  );
}

export default MyApp;
