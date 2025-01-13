import React from "react";
import Header from "../../components/sellerComponents/Header";
import FooterBar from "../../components/sellerComponents/FooterBar";
import Container from "../../components/sellerComponents/Container";
import { Outlet } from "react-router-dom";

const Seller = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet></Outlet>
      </Container>
      <FooterBar />
    </>
  );
};

export default Seller;
