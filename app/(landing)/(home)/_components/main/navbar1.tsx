"use server";
import HeaderButtons from "../sub/header-buttons";
import Header from "./header";

const Navbar = () => {
  return (
    <Header activeItem={0}>
      <HeaderButtons />
    </Header>
  );
};

export default Navbar;
