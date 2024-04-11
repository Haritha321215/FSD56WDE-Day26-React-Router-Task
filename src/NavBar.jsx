import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Navbar, Nav} from "react-bootstrap";
export default function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  return (
    <Navbar expanded={expanded} expand="lg" bg="light" variant="light">
      <Navbar.Brand href="#home" onClick={() => navigate("/")}>Boot Camp</Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        onClick={() => setExpanded(!expanded)}
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#" onClick={() => navigate("/")}>
           All
          </Nav.Link>
          <Nav.Link href="#" onClick={() => navigate("/fsd")}>
            Full Stack Development
          </Nav.Link>
          <Nav.Link href="#" onClick={() => navigate("/ai")}>
            Artificial Intelligence
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
