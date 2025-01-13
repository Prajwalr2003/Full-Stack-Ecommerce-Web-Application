import React from "react";
import Header from "../../components/sellerComponents/Header";
import FooterBar from "../../components/sellerComponents/FooterBar";
import Container from "../adminComponents/Container";
import { Outlet } from "react-router-dom";

const Admin = () => {
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

export default Admin;
