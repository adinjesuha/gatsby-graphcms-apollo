import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"

import Avatar from "../images/avatar.jpg"
import { FaBell } from "react-icons/fa"
import { FiChevronDown } from "react-icons/fi"

const HeaderWrapper = styled.header`
  position: fixed;
  width: 100%;
  background: white;
  border-bottom: 1px solid var(--border-color);
  z-index: 2;
  nav {
    margin: 0 auto;
    max-width: 1200px;
    padding: 0.85rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left-side {
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
          margin-right: 15px;
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
          width: 30px;
          height: 30px;
          border-radius: 50%;
          margin-right: 4px;
          overflow: hidden;
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
    <nav>
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
        <ul className="nav-links">
          <li>
            <Link to="/" activeClassName="active-link">
              Monitoreos
            </Link>
          </li>
          <li>
            <Link to="/">Análisis</Link>
          </li>
          <li>
            <Link to="/">Reportes</Link>
          </li>
        </ul>
      </div>
      <div className="right-side">
        <div className="user-options">
          <button className=" button ghost flex-content">
            <i className="message-alert" />
            <FaBell />
          </button>
          <button className="button ghost flex-content">
            <span className="avatar">
              <img src={Avatar} alt="avatar" />
            </span>
            <span className="icon-wrapper">
              <FiChevronDown />
            </span>
          </button>
        </div>
      </div>
    </nav>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
