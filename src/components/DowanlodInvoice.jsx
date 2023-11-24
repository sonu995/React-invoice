import React from "react";
import { useState, useEffect } from "react";
import { Container, Card, Row, Col, Table } from "react-bootstrap";
import { useInvoiceContext } from "../InvoiceContext";
import { useFormContext } from "../context/FormContext";
import { useToformContext } from "../context/ToformContext";
import { useImage } from "../context/ImageContext";
import { BsImageFill } from "react-icons/bs";

export const DowanlodInvoice = React.forwardRef((props, ref) => {
  const { rows, discount, subtotal, tax, total } = useInvoiceContext();

  const { formData } = useFormContext();
  const { toformData } = useToformContext();
  const { image} = useImage();
 
  // Get the current date
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}/${currentDate.toLocaleString(
    "default",
    { month: "short" }
  )}/${currentDate.getFullYear()}`;

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = `${currentTime.getHours()}:${String(
    currentTime.getMinutes()
  ).padStart(2, "0")}`;

  return (
    <div ref={ref}>
      <Container fluid>
        <Card className="mt-3">
          <Card.Header>
            {" "}
            Invoice <strong>{formattedDate}</strong>{" "}
            <span className="float-right">
              {" "}
              <strong>Time:{formattedTime}</strong> 
            </span>{" "}
          </Card.Header>
          <Card.Body>
            <Row className="mb-1 justify-content-between">
              <Col xl={4} lg={4} md={4} sm={4} className="mt-4">
                {image && typeof image === "object" ? (
                  <img
                    style={{ width: "70%" }}
                    src={URL.createObjectURL(image)}
                    alt="profile"
                  />
                ) : (
                  <BsImageFill className="fs-1" />
                )}
              </Col>

              <Col
                xl={3}
                lg={3}
                md={3}
                sm={3}
                className="d-flex justify-content-lg-end justify-content-md-center justify-content-xs-start mt-4"
              >
                <div className="row ">
                  <img
                    style={{ Width: "70%" }}
                    src="https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=bitcoin%3A1DonateWffyhwAjskoEwXt83pHZxhLTr8H%3Famount%3D0.15050000"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </Col>
            </Row>

            <Row className="mb-5">
              <Col xl={6} lg={6} md={6} sm={6} className="mt-4">
                <h6>From:</h6>
                <div>
                  <strong>{formData.companyName}</strong>{" "}
                </div>
                <div>
                  Name : {formData.firstName} {""} {formData.lastName}
                </div>
                <div>Address : {formData.address} </div>
                <div>Email : {formData.email}</div>
                <div>City :{formData.city} </div>
                <div>Pin Code :{formData.postalCode} </div>
                <div>Country :{formData.country} </div>
                <div>Phone : {formData.phoneNumber}</div>
                <div>Website : {formData.website}</div>
              </Col>
              <Col xl={3} lg={3} md={6} sm={6} className="mt-4 text-end">
                <h6>To:</h6>
                <div>
                  <strong>{toformData.companyName}</strong>{" "}
                </div>
                <div>
                  Name : {toformData.firstName} {""} {toformData.lastName}
                </div>
                <div>Address : {toformData.address} </div>
                <div>Email : {toformData.email}</div>
                <div>City :{toformData.city} </div>
                <div>Pin Code :{toformData.postalCode} </div>
                <div>Country :{toformData.country} </div>
                <div>Phone : {toformData.phoneNumber}</div>
                <div>Website : {toformData.website}</div>
              </Col>
            </Row>
            <div className="table-responsive-sm">
              <Table striped>
                <thead>
                  <tr>
                    <th className="center">#</th>
                    <th>Item</th>
                    <th className="right">Unit Cost</th>
                    <th className="center">Qty</th>
                    <th className="right">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, index) => (
                    <tr key={index}>
                      <td className="center">{index + 1}</td>
                      <td className="left strong">{row.item}</td>
                      <td className="right">{row.unitCost}</td>
                      <td className="center">{row.quantity}</td>
                      <td className="right">{row.unitCost * row.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
            <Row>
              <Col lg={6} sm={6}>
                {" "}
              </Col>
              <Col lg={6} sm={6} className="ml-auto">
                <Table className="table-clear">
                  <tbody>
                    <tr>
                      <td className="left">
                        <strong>Subtotal</strong>
                      </td>
                      <td className="right">{subtotal}</td>
                    </tr>
                    <tr>
                      <td className="left">
                        <strong>Discount</strong>
                      </td>
                      <td className="right">{discount}</td>
                    </tr>
                    <tr>
                      <td className="left">
                        <strong>Tax rate(%)</strong>
                      </td>
                      <td className="right">{tax}</td>
                    </tr>
                    <tr>
                      <td className="left">
                        <strong>Total</strong>
                      </td>
                      <td className="right">
                        <strong>{total}</strong>
                        <br />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
});
