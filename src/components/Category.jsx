import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';




function Category() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div className='d-grid'>

       <Button variant="success" onClick={handleShow}>
       Add Category
        
      </Button>
      
      
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        <FloatingLabel controlId="floatingId" label="Category ID" className="mb-3">
        <Form.Control type="number" placeholder="1" />
      </FloatingLabel>

      <FloatingLabel controlId="Ctitle" label="Category Title" className="mb-3">
        <Form.Control type="text" placeholder="title" />
      </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>

</div>
    
    </>
  )
}

export default Category