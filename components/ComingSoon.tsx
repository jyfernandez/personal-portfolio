import React from "react";
import Image from "next/image";
import Logo from "../public/images/logo-black.png";

export const ComingSoon = () => {
  return (
    <>
      <Image src={Logo} alt="logo" width="400" height="400"></Image>
      <h1>Coming Soon</h1>
    </>
  );
};
