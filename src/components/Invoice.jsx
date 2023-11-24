import React from "react";
import { useState } from "react";
import UploadImage from "./UploadImage";
import { Container, Row, Col, } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Stack from "react-bootstrap/Stack";
import styled from "styled-components";
import ModelTo from "./ModelTo";
import ModeleFrom from "./ModeleFrom";
import InvoiceItem from "./InvoiceItem";

const Invoice = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [dueDate, setdueDate] = useState(new Date());
  const CustomDatePicker = styled(DatePicker)`
    border: 2px #dee2e6 dashed;
    width: 94%;
    padding:7px 5px;
  `;
  return (
    <Container style={{backgroundColor:"#ffff"}}>
      <Row className="pt-3 gap-3  justify-content-center">
        <Col md={5} lg={5} sm={5}>
          <UploadImage />
        </Col>
        <Col md="3" lg="3">
          <Form.Select
            aria-label="Default select example"
            style={{ border: "2px #DEE2E6 dashed", padding: "10px" }}
          >
            <option>Invoice</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
        <Col md="3" lg="3">
          <input
            style={{ border: "2px #DEE2E6 dashed ",width:"100%" }}
            className="py-2 "
            type="number"
            placeholder="0001"
          />
        </Col>
      </Row>
      <Stack gap={1} className="mt-3">
        <div className="p-2 ms-auto">
          <span className="fw-bold  fs-6 m-2">Issue date</span>
          <CustomDatePicker
            selected={dueDate}
            onChange={(date) => setdueDate(date)}
          />
        </div>
        <div className="p-2 ms-auto">
          <span className="fw-bold  fs-6 m-2">Due date</span>
          <CustomDatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
      </Stack>
      <Row className="mt-3 gap-3 gap-md-0">
        <Col md="6">
          <ModeleFrom/>
        </Col>
        <Col md="6">
        <ModelTo/>
        </Col>
      </Row>
      <Row>
        <Col md="12" className="mt-5">
          <InvoiceItem/>     
        </Col>
      </Row>
    </Container>
  );
};

export default Invoice;
