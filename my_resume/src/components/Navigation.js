import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { BsAwardFill, BsBank, BsBook, BsEnvelope, BsHouse, BsLaptop, BsPcDisplayHorizontal } from "react-icons/bs";

const Navigation = ({ PageName }) => {
  const NavLinkActive = "nav-link active";
  const NavLinkInactive = "nav-link";
  const IconClassName = "m-2";

  let CertificationClass = NavLinkInactive;
  let ContactClass = NavLinkInactive;
  let EducationClass = NavLinkInactive;
  let EmploymentClass = NavLinkInactive;
  let ExperienceClass = NavLinkInactive;
  let HomeClass = NavLinkInactive;
  let SkillClass = NavLinkInactive;

  switch (PageName) {
    case "Certification":
      CertificationClass = NavLinkActive;
      break;
    case "Contact":
      ContactClass = NavLinkActive;
      break;
    case "Education":
      EducationClass = NavLinkActive;
      break;
    case "Employment":
      EmploymentClass = NavLinkActive;
      break;
    case "Experience":
      ExperienceClass = NavLinkActive;
      break;
    case "Home":
      HomeClass = NavLinkActive;
      break;
    case "Skill":
      SkillClass = NavLinkActive;
      break;
    default:
      HomeClass = NavLinkActive;
  }

  return (
    <Navbar bg="dark" variant="dark" className="margin-top mb-4" expand="false">
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav>
            <NavItem className="pr-4">
              <Link className={HomeClass} to="/Home">
                <BsHouse className={IconClassName} />
                Home
              </Link>
            </NavItem>
            <NavItem className="pr-4">
              <Link className={SkillClass} to="/Skill">
                <BsLaptop className={IconClassName} />
                Skill
              </Link>
            </NavItem>
            <NavItem className="pr-4">
              <Link className={EmploymentClass} to="/Employment">
                <BsBank className={IconClassName} />
                Employment
              </Link>
            </NavItem>
            <NavItem className="pr-4">
              <Link className={ExperienceClass} to="/Experience">
                <BsPcDisplayHorizontal className={IconClassName} />
                Experience
              </Link>
            </NavItem>
            <NavItem className="pr-4">
              <Link className={CertificationClass} to="/Certification">
                <BsAwardFill className={IconClassName} />
                Certification
              </Link>
            </NavItem>
            <NavItem className="pr-4">
              <Link className={EducationClass} to="/Education">
                <BsBook className={IconClassName} />
                Education
              </Link>
            </NavItem>
            <NavItem className="pr-4">
              <Link className={ContactClass} to="/Contact">
                <BsEnvelope className={IconClassName} />
                Contact
              </Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
