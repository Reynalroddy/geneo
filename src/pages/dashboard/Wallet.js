import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import usd from "../../assets/uss.png";
import uk from "../../assets/uk.png";
import eu from "../../assets/eu.png";
import { Graph } from "../../components";
const data = [
  { price: 50, month: "jan" },
  { price: 80, month: "feb" },
  { price: 250, month: "mar" },
  { price: 70, month: "apr" },
  { price: 750, month: "may" },
  { price: 500, month: "jun" },
  { price: 55, month: "jul" },
];
const Wallet = () => {
  return (
    <Wrapper>
      <div className=" my-rw">
        <h5>your wallets</h5>
        <button className="my-btn">+ Create New Wallet</button>
      </div>

      <div className="row">
        <div className="col-12 col-md-5 col-lg-5">
          <div className="cont">
            <div className="nav__search">
              <FaSearch />
              <input
                type="search"
                placeholder="search"
                className="form_input"
              />
            </div>

            <p>All </p>
          </div>

          <div className="sec-rw py-3">
            <span className="sec-1">Active(3)</span>
            <span>Inacctive(2)</span>
            <span>closed(0)</span>
          </div>

          <div className="sec-rw-2 py-4">
            <div className="prt p-1 py-3">
              <div className="flag">
                <div className="d-f">
                  <img src={eu} alt="flag" />
                  <div>
                    <p>EUR Wallet</p>
                    <p>EUR</p>
                  </div>
                </div>
              </div>

              <div className="det">
                <p>€2,000,000.50</p>
                <p className="text-small">Default</p>
              </div>
            </div>

            <div className="prt p-2 py-3">
              <div className="flag">
                <div className="d-f">
                  <img src={usd} alt="flag" />
                  <div>
                    <p>Personal account</p>
                    <p>USD</p>
                  </div>
                </div>
              </div>

              <div className="det">
                <p>$10,250.50</p>
              </div>
            </div>
            <div className="prt p-3 py-3">
              <div className="flag">
                <div className="d-f">
                  <img src={uk} alt="flag" />
                  <div>
                    <p>School savings</p>
                    <p>GBP</p>
                  </div>
                </div>
              </div>

              <div className="det">
                <p>£500.0</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-7 col-lg-7">
          <div className="cont-me pt-4">
            <div className="l-cont">
              <span>Active</span>
              <p>EUR wallet</p>
              <p className="colr">EUR</p>
            </div>
            <h5>€2,000,000.50</h5>
          </div>

          <div className="row py-4">
            <div className="col-6 col-md-3">
              <p>ledger balance</p>
              <p>blocked balance</p>
            </div>
            <div className="col-6 col-md-3">
              <p>2,000,000.50</p>
              <p>€0.00</p>
            </div>
            <div className="col-6 col-md-3">
              <p>Total Incoming</p>
              <p>Total outgoing</p>
            </div>

            <div className="col-6 col-md-3">
              <p>€2,000,000.50</p>
              <p>€5,000,000.50</p>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <button className="my-btn">payment</button>
            </div>
            <div className="col-4">
              <button className="my-btn">pay in</button>
            </div>
            <div className="col-4">
              <button className="my-btn">exchange</button>
            </div>
          </div>
          <div className="row py-2">
            <p>more options</p>
          </div>

          <div className="sec-rw py-3">
            <span className="sec-1">Activity</span>
            <span>Transaction</span>
            <span>Invoices</span>
          </div>
          <div className="">
            <Graph data={data} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .my-rw {
    display: flex;
    justify-content: space-between;
  }

  .nav__search {
    width: 18vw;
    background: var(--grey-50);
    /* background: red; */
    display: flex;
    align-items: center;
    gap: 1rem;
    border-radius: 1.2rem;
    padding: 0 1.1rem;
    color: var(--grey-400);

    svg {
      color: var(--grey-400);
    }

    input {
      background: transparent;
      border: 0px;
      outline: 0px;
    }
  }

  .cont {
    display: flex;
    gap: 1.3rem;
    align-items: center;
    p {
      /* justify-self: end; */
      margin: 0;
    }
  }

  .sec-rw {
    display: flex;
    gap: 1.3rem;
  }

  .sec-1 {
    border-bottom: 3px solid var(--primary-color);
  }

  .colr{
      color: var(--primary-color);
  };
  }
  .sec-rw-2 {
    display: flex;
    /* gap: 1.3rem; */
    flex-direction: column;
  }

  .prt {
    display: flex;
    justify-content: space-between;
    /* gap: 1.5rem; */
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      /* margin-left: 1.2rem; */
    }
    p {
      margin: 0;
    }
    .d-f {
      display: flex;
      gap: 1.2rem;
    }
  }
  .p-1 {
    background-color: #eef7f9;
  }

  .cont-me {
    display: flex;
    justify-content: space-between;
    p {
      margin-bottom: 0;
    }
  }
`;
export default Wallet;
