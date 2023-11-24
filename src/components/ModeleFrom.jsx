import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import Stack from "react-bootstrap/Stack";
import { BsBuildingFillUp } from "react-icons/bs";
import { useFormContext } from "../context/FormContext";


function ModeleFrom() {
  const { formData, handleChange } = useFormContext();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSaveChanges = (event) => {
    event.preventDefault();
    setShow(false)
  };
  

  return (
    <>
      <div>
        <div style={{ border: "2px #DEE2E6 dashed ",paddingBottom:"20px"}}>
          <h5 className="mx-2 mt-1">From</h5>
          <Stack direction="horizontal" gap={3} onClick={handleShow}>
            <div className="p-2">
              <BsBuildingFillUp fontSize="35px" />
            </div>
            <div className="p-2">
              <span className="fw-bold">Sender name</span>
              <br />
              <span>Sender contact details</span>
              <div style={{marginLeft:'18px'}}>
              <div >{formData.companyName}</div>
              <div>{formData.firstName} {''} {formData.lastName}</div>
              <div>{formData.address}  </div>
              <div>{formData.city} {''} {formData.postalCode}</div>
              <div> {formData.country}</div>
              <div> {formData.phoneNumber}</div>
              <div> {formData.email}</div>
              <div>{formData.website}</div>
              </div>
           
            </div>
          </Stack>
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>From</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSaveChanges}>
              <Table striped bordered hover>
              <tbody>
                  <tr>
                    <td>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Company / Sender name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Company / Sender name"
                          autoFocus
                          onChange={handleChange}
                          name="companyName"
                          
                        />
                      </Form.Group>
                    </td>
                    <td>
                      {" "}
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="
                        First name"
                          autoFocus
                          onChange={handleChange}
                          name="firstName"
                        />
                      </Form.Group>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Last Name"
                          autoFocus
                          onChange={handleChange}
                          name="lastName"
                        />
                      </Form.Group>
                    </td>
                    <td>
                      {" "}
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="
                          Address"
                          autoFocus
                          onChange={handleChange}
                          name="address"
                        />
                      </Form.Group>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Postal code</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Postal code"
                          autoFocus
                          onChange={handleChange}
                          name="postalCode"
                        />
                      </Form.Group>
                    </td>
                    <td>
                      {" "}
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>City</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="
                          City"
                          autoFocus
                          onChange={handleChange}
                          name="city"
                        />
                      </Form.Group>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Country</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Country"
                          autoFocus
                          onChange={handleChange}
                          name=" country"
                        />
                      </Form.Group>
                    </td>
                    <td>
                      {" "}
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="
                          Phone number"
                          autoFocus
                          onChange={handleChange}
                          name="phoneNumber"
                        />
                      </Form.Group>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Email"
                          autoFocus
                          onChange={handleChange}
                          name="email"
                        />
                      </Form.Group>
                    </td>
                    <td>
                      {" "}
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Web site</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="
                          Web site"
                          autoFocus
                          onChange={handleChange}
                          name="website"
                        />
                      </Form.Group>
                    </td>
                  </tr>
                </tbody>
              </Table>
           
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSaveChanges}>
              Save Changes
            </Button>
           
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default ModeleFrom;
