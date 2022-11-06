import React, { Fragment, useState, useEffect } from "react";
import { Navbar, Container, Column, Button, Dropdown } from "rbx";
import logoImage from "../../assets/images/logo-white.png";
import "../../styles/header.scss";
import UsersServices from "../../services/users";
import { Navigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

function HeaderLogged(props) {
  const [redirectToHome, setRedirectToHome] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const logOut = async () => {
    await UsersServices.logout();
    setRedirectToHome(true);
  };

  if (redirectToHome == true) return <Navigate to="/" />;

  return (
    <Navbar color="custom-purple" className="navbar-logged">
      <Navbar.Brand>
        <Column.Group>
          <Column size="11" offset="1">
            <Link to="/notes">
              <img src={logoImage} />
            </Link>
          </Column>
        </Column.Group>
        <Navbar.Burger
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar-menu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </Navbar.Burger>
      </Navbar.Brand>

      <Navbar.Menu>
        <Navbar.Segment
          as="div"
          className="navbar-item navbar-start"
          align="start"
        >
          <Navbar.Item as="div">
            <Button
              className="open-button"
              color="white"
              outlined
              onClick={() => props.setIsOpen(!props.isOpen)}
            >
              <FontAwesomeIcon icon={faList} />
            </Button>
          </Navbar.Item>
        </Navbar.Segment>

        <Navbar.Segment
          as="div"
          className="navbar-item navbar-end"
          align="right"
        >
          <Navbar.Item as="div">
            <Dropdown>
              <Dropdown.Trigger>
                <Button className="button" color="white" outlined>
                  <span> {user.name} ▼</span>
                </Button>
              </Dropdown.Trigger>
              <Dropdown.Menu>
                <Dropdown.Content>
                  <Dropdown.Item as="div">
                    <Link to="/users/edit">Edição do Usuário</Link>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item as="div">
                    <a href="#" onClick={(e) => logOut()}>
                      LogOut
                    </a>
                  </Dropdown.Item>
                </Dropdown.Content>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Item>
        </Navbar.Segment>
      </Navbar.Menu>
    </Navbar>
  );
}

export default HeaderLogged;
