import React, { useState} from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { Container } from "react-bootstrap";
import "../App.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Invoice from "./Invoice";
import Rightsidebar from "./Rightsidebar";

function SideNavbar() {
  const [sidebar, setSidebar] = useState(window.innerWidth > 998);

  const showSidebar = () => {
    if (window.innerWidth <= 998) {
      setSidebar(!sidebar);
    }
  };
  return (
    <>
      <div className="navbar d-block d-lg-none">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>

      <Container fluid>
        <Row>
          <Col sm="12" md="12" lg="3" xl="2">
            <Row>
              <Col
                xs="8"
                sm="5"
                md="4"
                lg="3"
                xl="2"
                className={sidebar ? "nav-menu active" : "nav-menu"}
              >
                <nav>
                  <ul className="nav-menu-items" onClick={showSidebar}>
                    <li style={{listStyle:"none"}}>
                      <Link to="#" className="companyName">
                        DigiHelp <br /> IT Services LLP
                      </Link>
                    </li>
                    <li className="navbar-toggle ">
                      <Link to="#" className="menu-bars">
                        <AiIcons.AiOutlineClose className="d-block d-lg-none" />
                      </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                      return (
                        <li key={index} className={item.cName}>
                          <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </Col>
            </Row>
          </Col>
          <Col  className="mx-auto mt-2" sm="9" md="10" lg="7" xl="7">
            <Invoice />
          </Col>

          <Col className="mx-auto" sm="9" md="9" lg="2" xl="2">
            <Rightsidebar />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SideNavbar;
