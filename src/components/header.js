import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"

import { FaBell } from "react-icons/fa"
import NavBar from "./nav-bar"

const HeaderWrapper = styled.header`
  background-color: #ffffff;
  border-bottom: 1px solid var(--border-color);
  padding: 15px 20px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 949;
  .top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left-side {
      margin-left: 240px; /* control the navbar width */
      display: flex;
      justify-content: space-between;
      align-items: center;
      h1 {
        margin: 0;
        display: inline-flex;
      }
      .nav-links {
        display: flex;
        border-left: 1px solid var(--border-color);
        margin-left: 15px;
        li {
          padding: 0;
          margin: 0 15px;
          a {
            color: #3e3f42;
            font-size: 15px;
            text-decoration: none;
            &.active-link {
              font-weight: 500;
              color: var(--purple);
            }
          }
        }
      }
    }
    .right-side {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .user-options {
        margin-left: 15px;
        button:first-child {
          margin-right: 25px;
          font-size: 18px;
          > svg {
            color: #9fa5b8;
            fill: #9fa5b8;
          }
        }
        .message-alert {
          background-color: var(--red);
          border-radius: 50%;
          border: 2px solid white;
          width: 10px;
          height: 10px;
          position: absolute;
          top: 10px;
          right: -2px;
        }
        .avatar {
          background: rgb(217, 217, 217) none repeat scroll 0% 0%;
          width: 40px;
          height: 40px;
          margin-right: 4px;
          display: flex;
          align-items: center;
          border-radius: 50%;
          justify-content: center;
          overflow: hidden;
          position: relative;
          .initials{
            font-size: 18px;
            font-weight: 700;
            line-height: 15px;
            text-transform: uppercase;
            color: rgb(0, 0, 0);
          }
        }
        .icon-wrapper {
          display: inline-flex;
        }
      }
    }
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <NavBar />
    <div className="top-bar">
      <div className="left-side">
        <h1>
          {" "}
          <Link
            to="/"
            style={{
              fontSize: "18px",
              color: "#3e3f42",
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
      <div className="right-side">
        <div className="user-options">
          <button className="button ghost flex-content">
            <i className="message-alert" />
            <FaBell />
          </button>
          <button className="button ghost flex-content">
            <div className="avatar">
              <span className="initials">AJ</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  </HeaderWrapper>
)


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
