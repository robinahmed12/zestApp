import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <>
      <header>
        <nav className="max-w-7xl mx-auto">
          <Navbar />
        </nav>
      </header>
      <main className="max-w-7xl mx-auto">
        <Outlet />
      </main>
      <footer className="mt-20">
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
