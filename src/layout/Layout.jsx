import React from "react";
import { Outlet,  useNavigation } from "react-router";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";
import { Bounce, ToastContainer } from "react-toastify";
import Loading from "../components/Loading/Loading";
import Scroll from "../components/Scroll/Scroll";

const Layout = () => {
  const { state } = useNavigation();

  return (
    <>
    <Scroll/>
      <header className="pt-8 pb-5">
        <nav>
          <Navbar />
        </nav>
      </header>

      <main className="max-w-7xl mx-auto min-h-[475px]">
        {state === "loading" ? <Loading /> : <Outlet />}
      </main>
      <footer className="mt-20">
        <Footer />
      </footer>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
};

export default Layout;
