
import { Component, useState } from "react"
import { Container, Button, Modal } from 'react-bootstrap/'



const MyVerticallyCenteredModal = () => {
    const [show2, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Container >
            <Button className="grab" onClick={handleShow}  >
                Botón demo
            </Button>

            <Modal show={show2} onHide={handleClose} size="lg" centered animation>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                     </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}
export default MyVerticallyCenteredModal;