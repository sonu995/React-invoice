
import Table from "react-bootstrap/Table";
import { AiFillDelete } from "react-icons/ai";
import { Button } from "react-bootstrap";
import { useInvoiceContext } from "../InvoiceContext";
import "./InvoiceItem.css";

const InvoiceItem = () => {
  const {
    rows,
    handleAddRow,
    handleDeleteRow,
    handleInputChange,
    discount,
    subtotal,
    tax,
    total,
  } = useInvoiceContext();

  return (
    <>
      <div>
        <Table responsive>
          <thead>
            <tr>
              <th className="tableBg">Item</th>
              <th className="tableBg">UnitCost</th>
              <th className="tableBg">Quantity</th>
              <th className="tableBg">Price</th>
              <th className="tableBg">Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td style={{ width: "40%" }}>
                  <input
                    className=" p-2 form-control"
                    placeholder="Item"
                    type="text"
                    value={row.item}
                    onChange={(e) =>
                      handleInputChange(index, "item", e.target.value)
                    }
                  />
                </td>
                <td style={{ width: "25%" }}>
                  <input
                    className=" p-2 form-control"
                    placeholder="Unit Cost"
                    type="number"
                    value={row.unitCost}
                    onChange={(e) =>
                      handleInputChange(
                        index,
                        "unitCost",
                        parseFloat(e.target.value)
                      )
                    }
                  />
                </td>
                <td style={{ width: "25%" }}>
                  <input
                    className=" p-2 form-control"
                    type="number"
                    placeholder="Quantity"
                    value={row.quantity}
                    onChange={(e) =>
                      handleInputChange(
                        index,
                        "quantity",
                        parseInt(e.target.value)
                      )
                    }
                  />
                </td>
                <td style={{ width: "8%" }}>
                  {" "}
                  <span className="p-2">{row.unitCost * row.quantity}</span>
                </td>
                <td style={{ cursor: "pointer", width: "8%" }}>
                  <AiFillDelete
                    className=" p-2 icon-color"
                    fontSize={"40px"}
                    onClick={() => handleDeleteRow(index)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button className="w-100 aad-btn" size="md" onClick={handleAddRow}>
          + Add new invoice item
        </Button>
      </div>
      <div className=" mt-5 d-flex justify-content-end px-2">
        <div style={{ width: "50%" }}>
          <div className="d-flex justify-content-between">
            <div className="fs-6 fw-bold my-1 ">Subtotal</div>
            <div>{subtotal}</div>
          </div>

          <div className="d-flex justify-content-between">
            <div className="fs-6 fw-bold my-1 ">Tax</div>
            <div>{tax}</div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="fs-6 fw-bold my-1 ">Discount</div>
            <div>{discount}</div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="fs-6 fw-bold my-1 ">Total</div>
            <div>{total}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoiceItem;
