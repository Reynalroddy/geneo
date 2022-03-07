import { React } from "react";
import styled from "styled-components";

import { AiOutlineEye, AiFillCreditCard, AiFillStar } from "react-icons/ai";
import { HiSpeakerphone } from "react-icons/hi";
import NavLinks from "./NavLinks";
import { useSelector, useDispatch } from "react-redux";
import logo from "../assets/logo.png";
import { FaAngleLeft } from "react-icons/fa";
import { toggleHeader } from "../redux/headerSlice";
const SmallSide = () => {
  const { isOpen } = useSelector((state) => state.header);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div className={isOpen ? "cont show" : "cont"}>
        <div className="side__header">
          <FaAngleLeft onClick={() => dispatch(toggleHeader())} />
          <img src={logo} alt="logo" className="img" />
        </div>

        <div className="card-aside-1">
          <div className="wallet-bal">
            <div className="icon">
              <AiFillCreditCard />
            </div>
            <div className="wall-title">
              <p>Wallet Balance</p>

              <p className="t-small">$15,001.00</p>
            </div>
            <AiOutlineEye />
          </div>

          <div className="awarded-point">
            <div className="icon">
              <AiFillStar />
            </div>
            <div className="award-title">
              <p>Awarded Points</p>

              <p className="t-small">35</p>
            </div>
          </div>

          <div className="payment">
            <button className="my-btn pay-1">pay-in</button>

            <button className="my-btn pay-2">pay-out</button>
          </div>
        </div>

        <NavLinks />
        <div className="card-aside-2">
          <div className="rw">
            <div className="refer-icon">
              <HiSpeakerphone />
            </div>
            <div className="refer-title">
              <p>Refer and earn</p>
              <p className="text-small">Use the below link to invite friends</p>
            </div>
          </div>
          <div className="btnn-cont text-center">
            <button className="my-btn">invite friends</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 5;
  transition: var(--transition);
  /* width: 100%; */
  background-color: var(--primary-color);
  /* margin-left: 0; */
  left: 0;
  display: none;
  overflow-y: scroll;
  .cont {
    width: 20rem;
    padding: 0 1.5rem;
    margin-left: -25rem;
    transition: var(--transition);
  }
  .show {
    margin-left: 0;
  }
  .side__header {
    height: var(--nav-height);
    align-items: center;
    display: flex;
    justify-content: space-between;
    img {
      width: 10rem;
      /* margin: 0 auto; */
    }
    svg {
      color: white;
      font-size: 1.6rem;
    }
  }

  .card-aside-1 {
    background: #2b899d;
    color: var(--white);
    border-radius: 1.3rem;
    margin: 1.2rem 0;
    .wallet-bal {
      display: flex;
      justify-content: space-between;
      padding: 0.6rem 0.8rem;
      align-items: center;
      &::after {
        content: "";
        position: absolute;
        margin-bottom: -4.3rem;
        /* border-bottom: 1px solid var(--grey-50); */
        width: 80%;
        height: 0.08rem;

        background-color: white;
      }

      .icon {
        background-color: var(--white);
        height: 50px;
        width: 50px;
        border-radius: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
          color: #22c55e;
          font-size: 1.4rem;
        }
      }
      .wall-title {
        p {
          margin-bottom: 0;
        }
        .very-small {
          padding: 0;
          margin: 0;
        }
      }
    }

    .awarded-point {
      display: flex;
      padding: 0.6rem 0.8rem;
      align-items: center;
      gap: 1.2rem;
      &::after {
        content: "";
        position: absolute;
        margin-bottom: -4.3rem;
        /* border-bottom: 1px solid var(--grey-50); */
        width: 80%;
        height: 0.08rem;

        background-color: white;
      }
      .icon {
        background-color: var(--white);
        height: 50px;
        width: 50px;
        border-radius: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
          color: #f59e0b;
          font-size: 1.4rem;
        }
      }
      .award-title {
        p {
          margin-bottom: 0;
        }
        .very-small {
          padding: 0;
          margin: 0;
        }
      }
    }

    .payment {
      padding: 0.9rem 0.8rem;
      display: flex;
      gap: 1.3rem;
      .pay-1 {
        background: #fda4af;
        color: white;
      }
      .pay-2 {
        background-color: white;
        color: var(--primary-500);
      }
    }
  }
  .nav-links {
    padding-top: 1.3rem;
    display: flex;
    flex-direction: column;
  }
  .nav-link {
    display: flex;
    align-items: center;
    color: var(--white);
    padding: 0.7rem 0;
    padding-left: 2.5rem;
    text-transform: capitalize;
    transition: var(--transition);
    margin-bottom: 0.4rem;
  }
  .nav-link:hover {
    background: var(--grey-50);
    padding-left: 3rem;
    color: var(--grey-900);
    border-radius: 0.5rem;
  }
  .nav-link:hover .icon {
    color: var(--primary-500);
  }
  .icon {
    font-size: 1.5rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
    transition: var(--transition);
  }
  .active {
    color: #017189;
    background: var(--white);
    border-radius: 0.5rem;
  }
  .active .icon {
    color: #017189;
  }
  .card-aside-2 {
    background-color: #fff5e9;
    border-radius: 1.3rem;
    padding: 0.8rem 0.6rem;
    margin: 2.5rem 0;
    .rw {
      display: flex;
      align-items: start;
      gap: 1.2rem;
      svg {
        font-size: 1.6rem;
        color: red;
      }
      p {
        margin: 0;
        padding: 0;
      }
    }
    button {
      /* margin: 0 auto; */
    }
  }
  @media screen and (max-width: 1200px) {
    display: block;
  }
`;
export default SmallSide;
