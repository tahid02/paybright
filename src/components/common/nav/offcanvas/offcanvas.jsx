import MyButton from 'components/common/button/my-button';
import { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { BiMenu } from 'react-icons/bi';
import { Link } from 'react-router-dom';
function RightOffCanvas() {
  const [show, setShow] = useState(false);
  // eslint-disable-next-line no-unused-vars

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="border-0 bg-transparent" onClick={handleShow}>
        <BiMenu />
      </button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        scroll={true}
        className=""
        // style={{ backgroundColor: '#374151' }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>title</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Link to="/">shop</Link>
          <br />
          <Link to="/how-it-works">how work</Link>
          <br />
          <Link to="/for-merchants">for merchants </Link>
          <br />
          <Link to="/careers">careers </Link>
          <br />
          <Link to="/company">company </Link>
          <br />
          <Link to="/press">press </Link>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default RightOffCanvas;
