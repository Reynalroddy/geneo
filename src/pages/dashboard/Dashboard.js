import React from "react";
import styled from "styled-components";
import usd from "../../assets/uss.png";
import uk from "../../assets/uk.png";
import eu from "../../assets/eu.png";
import {
  BiWalletAlt,
  BiDollar,
  BiMobileAlt,
  BiBarChartAlt,
} from "react-icons/bi";
import { Graph } from "../../components";
import { MdCreditCard, MdSwapVert, MdPayments } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { BsArrowDownLeft, BsArrowUpLeft } from "react-icons/bs";
const data = [
  { price: 50, month: "jan" },
  { price: 80, month: "feb" },
  { price: 250, month: "mar" },
  { price: 70, month: "apr" },
  { price: 750, month: "may" },
  { price: 500, month: "jun" },
  { price: 55, month: "jul" },
];
const Dashboard = () => {
  return (
    <Wrapper>
      <div className="row">
        <div className="rw">
          <h5>wallet(5)</h5>
          <p className="text-small">view wallets</p>
        </div>

        <div className="col-12 col-md-4 col-lg-4">
          <div className="tit-cont tit-1">
            <div className="tit">
              <div className="sec-1">
                <p className="text-small">Personal account</p>
                <p className="text-small">USD</p>
              </div>
              <img src={usd} alt="us" className="flag-img" />
            </div>
            <div className="pri pt-5">
              <h4>$10,250.00</h4>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4 col-lg-4">
          <div className="tit-cont tit-2">
            <div className="tit">
              <div className="sec-1">
                <p className="text-small">EUR Wallet</p>
                <p className="text-small">EUR</p>
              </div>
              <img src={eu} alt="us" className="flag-img" />
            </div>
            <div className="pri pt-5">
              <h4>€4,000.53</h4>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4 col-lg-4">
          <div className="tit-cont tit-3">
            <div className="tit">
              <div className="sec-1">
                <p className="text-small">School fees</p>
                <p className="text-small">GBP</p>
              </div>
              <img src={uk} alt="us" className="flag-img" />
            </div>
            <div className="pri pt-5">
              <h4>£50.00</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="row py-2">
        <h5>quick links</h5>
        <p>Your frequently used actions for easy access.</p>
      </div>

      <div className="my-rw">
        <div className="my-rw-cont py-1">
          <div className="cont-icon ic-1">
            <BiWalletAlt />
          </div>
          <p>Add new wallet</p>
        </div>

        <div className="my-rw-cont py-1">
          <div className="cont-icon ic-2">
            <MdCreditCard />
          </div>
          <p>Add new card</p>
        </div>

        <div className="my-rw-cont py-1">
          <div className="cont-icon ic-3">
            <BiDollar />
          </div>
          <p>Balance Exchange</p>
        </div>

        <div className="my-rw-cont py-1">
          <div className="cont-icon ic-4">
            <MdSwapVert />
          </div>
          <p>Transfer to account</p>
        </div>

        <div className="my-rw-cont py-1">
          <div className="cont-icon ic-5">
            <BiWalletAlt />
          </div>
          <p>Generate Voucher</p>
        </div>

        <div className="my-rw-cont py-1">
          <div className="cont-icon ic-6">
            <BiMobileAlt />
          </div>
          <p>Mobile Money</p>
        </div>

        <div className="my-rw-cont py-1">
          <div className="cont-icon ic-7">
            <MdPayments />
          </div>
          <p>Payment Link</p>
        </div>
      </div>

      <div className="row">
        <div className="rw py-5">
          <div>
            <span className="">Activity</span>
            <span className="mnths">
              Month <FaCaretDown></FaCaretDown>
            </span>
          </div>

          <p className="text-small mb-0">View Transaction History</p>
        </div>
      </div>

      <div className="new-rw">
        <div className="single-rw">
          {/* icon */}
          <BiBarChartAlt className="greenz" />
          {/* title */}
          <div>
            <p>Total transactions</p>
            <h5>$86,600.00</h5>
          </div>
        </div>

        <div className="single-rw">
          {/* icon */}
          <BsArrowDownLeft className="greenz" />
          {/* title */}
          <div>
            <p>Pay-in</p>
            <h5>$4,600.00</h5>
          </div>
        </div>

        <div className="single-rw">
          {/* icon */}
          <BsArrowUpLeft className="redz" />
          {/* title */}
          <div>
            <p>Pay-out</p>
            <h5>$72,600.00</h5>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-12 col-lg-12">
          <Graph data={data} />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .rw {
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      color: var(--primary-color);
    }
  }
  .tit-cont {
    padding: 1.2rem 1.3rem;
    border-radius: 1rem;
    margin-bottom: 1.2rem;
  }
  .tit-1 {
    background: #fff6e6;
  }

  .tit-2 {
    background-color: #fbf1f0;
  }

  .tit-3 {
    background-color: #ddecef;
  }

  .tit {
    display: flex;
    justify-content: space-between;
    .sec-1 {
      p {
        margin: 0;
      }
    }
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }

  .my-rw {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 2.3rem;
  }

  .my-rw-cont {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--grey-50);
    border-radius: 1rem;
    flex-direction: column;
    width: 5rem;
    /* padding: 0. 0.6rem; */
    text-align: center;
    p {
      margin: 0;
    }
    .cont-icon {
      width: 40px;
      height: 40px;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      color: white;
    }
    .ic-1 {
      background-color: #f97316;
    }
    .ic-2 {
      background-color: #005061;
    }
    .ic-3 {
      background-color: #f59e0b;
    }
    .ic-4 {
      background-color: #5eead4;
    }
    .ic-5 {
      background-color: #9333ea;
    }
    .ic-6 {
      background-color: #ffcb00;
    }
    .ic-7 {
      background-color: #f43f5e;
    }
  }

  .mnths {
    margin-left: 1rem;
    color: var(--primary-color);
  }

  .new-rw {
    display: flex;
    justify-content: end;
    gap: 1.4rem;
  }
  .single-rw {
    display: flex;
    align-items: start;
    /* align-items: center; */
    p {
      margin: 0;
    }
    svg {
      margin: 1rem 1.3rem;
      font-size: 1rem;
    }
    .redz {
      color: red;
    }
    .greenz {
      color: green;
    }
  }

  @media screen and (max-width: 850px) {
    .my-rw {
      grid-template-columns: repeat(6, 1fr);
      gap: 2rem;
    }
  }
  @media screen and (max-width: 720px) {
    .my-rw {
      grid-template-columns: repeat(5, 1fr);
      gap: 2rem;
    }
  }

  @media screen and (max-width: 580px) {
    .my-rw {
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
    }
    .new-rw {
      display: flex;
      justify-content: center;
      gap: 0.4rem;
    }
    .single-rw {
      svg {
        margin: 1rem 0.4rem;
        font-size: 0.6rem;
      }
      h5 {
        font-size: 1.2rem;
      }
    }
  }

  @media screen and (max-width: 500px) {
    .my-rw {
      grid-template-columns: repeat(3, 1fr);
      gap: 1.4rem;
    }
  }
`;
export default Dashboard;
