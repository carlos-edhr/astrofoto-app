import React from "react";
import Footer from "../(home)/_components/footer";
import Navbar from "../(home)/_components/navbar";
import { GuestRegistrationForm } from "../(home)/_components/guest-registration-form";

export default function page() {
  return (
    <div>
      <Navbar />
      <GuestRegistrationForm />
      {/* <p className="m-32">FORM HERE</p> */}
      <Footer />
    </div>
  );
}
