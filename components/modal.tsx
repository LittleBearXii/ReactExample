import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";

function ModalLogin(props: { title: string, show: boolean, children: JSX.Element, change: (event: boolean) => void}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  const handleClose = () => {
    props.change(!props.show)
    setShow(!props.show)
  };

  return (
    <>
      <Modal 
        show={ show } 
        onHide={ handleClose } 
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            { props.title }
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          { props.children }
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalLogin;