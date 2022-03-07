import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Sidebar, SmallSide } from "../../components";
import styled from "styled-components";

const SharedLayout = () => {
  return (
    <Wrapper>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-2 my-bg-primary">
            <Sidebar />
            <SmallSide />
          </div>
          <div className="col-12 col-md-12 col-lg-12 col-xl-10 oder">
            <Navbar />
            <div className="dashboard-page py-3">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .dashboard-page {
    padding: 0 2rem;
  }
`;
export default SharedLayout;
