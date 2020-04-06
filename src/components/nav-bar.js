import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'

import { 
  FaBox, 
  FaTasks, 
  FaClipboardList, 
  FaClock, 
  FaQuestionCircle,
  FaCloudsmith,
  FaRegCalendar
} from "react-icons/fa"

const Wrapper = styled.nav`
  top: 0px;
  left: 0px;
  bottom: 0px;
  z-index: 950;
  position: fixed;
  width: 240px;

  background-color: rgb(255, 255, 255);
  max-height: 100%;

  display: flex;
  justify-content: center;

  &:before{
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    width: 1px;
    background-color: rgb(230, 230, 230);
    z-index: 10;
  }

  .main-nav {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .nav-title{
      font-size: 12px;
      font-weight: lighter;
      padding: 20px 20px;
    }
    .nav-brand{
      padding: 20px;
      height: 70px;
      width: 100%;
      border-bottom: 1px solid rgb(230, 230, 230);
      .main-logo-link{
        display: flex;
        align-items: center;
        text-decoration: none;
        font-weight: bold;
        color: var(--yankees-blue);
        &__icon{
            margin-right: 10px;
            height: 30px;
            width: 30px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            svg{
              font-size: 100%;
            }
          }
      }
    }
    .nav-items{
      flex: 1 0 auto;
      width: 100%;
      &__item {
        margin: 0;
        flex: 1 0 auto;
        .nav-links {
          padding: 0 20px;
          font-size: 14px;
          font-weight: 500;
          min-height: 60px;
          display: flex;
          align-items: center;
          text-decoration: none;
          margin: 0;
          color: var(--dark-grey);
          
          position: relative;

          span{
            display: block;
          }
          .nav-icon{
            margin-right: 10px;
            height: 30px;
            width: 30px;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            transition: color 0.3s ease-in-out;

            svg{
              font-size: 100%;
            }
          }
          .nav-box{
            padding: .3em .5em .4em;
            font-size: 82%;
            font-weight: bold;
            line-height: 1;
            text-align: center;
            white-space: nowrap;
            vertical-align: baseline;
            border-radius: .2rem;

            margin-top: 3px;
            position: absolute;
            right: 20px;

            color: #fff;
            background-color: var(--purple);
          }
        }
        .active-link{
          color: var(--purple);
          background-color: var(--purple-rgba);
          position: relative;
          &:before{
            content: "";
            background-color: var(--purple);
            width: 3px;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
          }
        }
      }
    }
    .nav-footer{
      height: 70px;
      padding: 0 20px;
      border-top: 1px solid rgb(230, 230, 230);
      display: flex;
      align-items: center;
    }
  }
`

const NavBar = () => {
  return (
    <Wrapper>
      <div className="main-nav">
        <div className="nav-brand">
          <Link to="/" className="main-logo-link">
            <span className="main-logo-link__icon">
              <FaCloudsmith />
            </span>
            <span className="nav-path">CONNECT</span>
          </Link>
        </div>
        <span className="nav-title">NAVEGACIÓN</span>
        <ul className="nav-items">
          <li className="nav-items__item">
            <Link to="/" className="nav-links" activeClassName="active-link">
              <span className="nav-icon">
                <FaBox />
              </span>
              <span className="nav-path">Monitoreos</span>
              <span className="nav-box">3</span>
            </Link>
          </li>
          <li className="nav-items__item">
            <Link to="/" className="nav-links">
              <span className="nav-icon">
                <FaRegCalendar />
              </span>
              <span className="nav-path">Calendario</span>  
            </Link>
          </li>
          <li className="nav-items__item">
            <Link to="/" className="nav-links">
              <span className="nav-icon">
                <FaTasks />
              </span>
              <span className="nav-path">Análisis</span>  
            </Link>
          </li>
          <li className="nav-items__item">
            <Link to="/" className="nav-links">
              <span className="nav-icon">
                <FaClipboardList />
              </span>
              <span className="nav-path">Reportes</span>
            </Link>
          </li>
          <li className="nav-items__item">
            <Link to="/" className="nav-links">
              <span className="nav-icon">
                <FaClock />
              </span>
              <span className="nav-path">Pendientes</span>
            </Link>
          </li>
          <li className="nav-items__item">
            <Link to="/" className="nav-links">
              <span className="nav-icon">
                <FaQuestionCircle />
              </span>
              <span className="nav-path">Ayuda</span>
            </Link>
          </li>
        </ul>
        <div className="nav-footer">
          footer
        </div>
      </div>
    </Wrapper>
  )
}

export default NavBar