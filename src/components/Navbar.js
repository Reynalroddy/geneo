import { React, useState } from "react";
import styled from "styled-components";
import { FaAlignLeft, FaCaretDown, FaSearch } from "react-icons/fa";
import { toggleHeader } from "../redux/headerSlice";
import { RiPlantFill } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import admin from "../assets/admin.jpg";
import { useDispatch, useSelector } from "react-redux";
// import Logo from "./Logo";
const Navbar = () => {
  const [navState, setNavState] = useState(false);
  const changeClr = () => {
    if (window.scrollY >= 60) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  window.addEventListener("scroll", changeClr);
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.header);
  return (
    <Wrapper navState={navState}>
      <div className="nav__title">
        {isOpen ? (
          <FaAlignLeft onClick={() => dispatch(toggleHeader())} />
        ) : (
          <FaAlignLeft onClick={() => dispatch(toggleHeader())} />
        )}
        <h4>welcome,huss smith</h4>
      </div>

      <div className="nav__search">
        <FaSearch />
        <input type="search" placeholder="search" className="form_input" />
      </div>

      <div className="nav__end">
        <div className="planted">
          <RiPlantFill />
          <span className="text-small">0 planted</span>
        </div>

        <div className="notification">
          <AiOutlineBell />
        </div>

        <div className="user">
          <img src={admin} alt="nav-img" className="img" />
          <div className="det">
            <small className="color-emphasis">verified</small>
            <h6>huss smith</h6>
          </div>
          <FaCaretDown />
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.nav`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background: blue; */
  background: ${(props) => (props.navState ? "#ffffff" : "transparent")};
  padding: 0 2rem;
  position: sticky;
  top: 0;
  .nav__title {
    display: flex;
    align-items: center;
    gap: 1rem;
    svg {
      display: none;
      font-size: 1.7rem;
    }
  }
  h4 {
    margin-bottom: 0;
  }
  .nav__search {
    width: 26vw;
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

  .nav__end {
    display: flex;
    gap: 1.5rem;
    align-items: center;
    /* margin-right: 2.8rem; */
    cursor: pointer;
    .planted {
      svg {
        margin-right: 0.2rem;
        color: var(--green-dark);
        font-size: 1.2rem;
      }
    }

    .notification {
      font-size: 1.2rem;
    }
    .user {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      img {
        width: 35px;
        height: 35px;
        border-radius: 50%;
      }
      .det {
        small {
          margin-bottom: 0;
        }
        p {
          margin-bottom: 0;
          padding: 0;
        }
      }
      svg {
        font-size: 1.2rem;
      }
    }
  }
  @media screen and (max-width: 1200px) {
    .nav__title {
      h4 {
        display: none;
      }
      svg {
        display: block;
      }
    }
  }

  @media screen and (max-width: 600px) {
    .nav__search {
      display: none;
    }
    .nav__end {
      gap: 1rem;
    }
  }
`;
export default Navbar;
