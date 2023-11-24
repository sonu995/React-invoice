import React from "react";
import { useState, useEffect } from "react";
import { useInvoiceContext } from "../InvoiceContext";
import "./Print.css";
import { useFormContext } from "../context/FormContext";
import { useToformContext } from "../context/ToformContext";
import {useImage} from "../context/ImageContext";
import { BsImageFill } from "react-icons/bs";


export const Print = React.forwardRef((props, ref) => {
  const { rows, discount, subtotal, tax, total } = useInvoiceContext();

  const { formData } = useFormContext();
  const {toformData} = useToformContext();
  const { image, setImage } = useImage();
  

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
    <div ref={ref} className="billbody">
      <div className="bill">
        {image && typeof image === "object" ? (
                  <img
                    style={{ width: "150px" }}
                    src={URL.createObjectURL(image)}
                    alt="profile"
                  />
                ) : (
                  <BsImageFill className="fs-1" />
                )}
        <div className="brand">{formData.companyName}</div>
        <div className="address">
          {formData.address} {formData.city} {formData.postalCode}
        </div>
        <div>INVOICE</div>
        <div className="bill-details">
          <div className="flex justify-between">
            <div> {formData.phoneNumber}</div>
            <div>{formattedDate}</div>
          </div>
          <div className="flex justify-between">
            <div> {formData.email} </div>
            <div>TIME: {formattedTime}</div>
          </div>
        </div>
        <table className="table">
          <tr className="header">
            <th>Item</th> <th> Unit Cost</th> <th>Qty</th>
            <th>Price</th>
          </tr>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.item}</td>
              <td>{row.unitCost}</td>
              <td>{row.quantity}</td>
              <td>{row.unitCost * row.quantity}</td>
            </tr>
          ))}

          <tr className="total">
            <td></td>
            <td>Subtotal</td>
            <td></td>
            <td>{subtotal}</td>
          </tr>

          <tr className=" last">
            <td></td>
            <td>Tax</td>
            <td></td>
            <td>{tax}</td>
          </tr>
          <tr className="last ">
            <td></td>
            <td>Discount</td>
            <td></td>
            <td>{discount}</td>
          </tr>
          <tr className="net-amount">
            <td></td>
            <td>Total</td>
            <td></td>
            <td>{total}</td>
          </tr>
        </table>
        Payment Method:Card
        <br />
        Transaction ID: 082098082783
        <br />
        Name: {toformData.firstName} {''} {toformData.lastName}[ {formData.address} {formData.city} ] <br />
        Thank You ! Please visit again
        <img style={{ width: "250px" }} src="../frame (3).svg" alt="" />
      </div>
    </div>
  );
});
