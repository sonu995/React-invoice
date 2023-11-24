import React from 'react';
import { useRef } from "react";
import { useInvoiceContext } from '../InvoiceContext';
import Button from 'react-bootstrap/Button';
import { useReactToPrint } from "react-to-print";
import { Print } from './Print';
import { DowanlodInvoice } from './DowanlodInvoice';


const Rightsidebar = () => {
    const {
        taxRate,
        setTaxRate,
        discount,
        setDiscount,
      } = useInvoiceContext();
      // print
      const componentRef = useRef();
      const dowanlodRef = useRef()

      const handleReactToPrint = useReactToPrint({
        content: () => componentRef.current,
      
      });

      const handleReactTodowanlod = useReactToPrint({
        content: () => dowanlodRef.current,
      
      });

   
      const handlePrint = () => {
        handleReactToPrint();
      };
    
      const dowanload = () => {
        handleReactTodowanlod();
      };
  //  print
  
  return (
    <div >
     
         <Button className='w-100 my-3' variant="primary" onClick={handlePrint}>Print</Button>{' '}
         <Button className='w-100 my-3' variant="primary" onClick={dowanload}>Dowanload Invoice</Button>{' '}
           <div>
          <span className='fw-bold '>Tax rate(%)</span>
          <div className='mt-1'>
            <input
              type="number"
              value={taxRate}
              onChange={(e) => setTaxRate(e.target.value)}
              className='p-2 form-control'
              
            />
          </div>
        </div>
        <div className='mt-3'>
          <span className='fw-bold '>Discount</span>
          <div className='mt-1'>
            <input
              type="number"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              className='p-2 form-control'
            />
          </div>
        </div>
        <div style={{display:"none"}}>
        <Print ref={componentRef} />
        <DowanlodInvoice  ref={dowanlodRef} />
        </div>
       
    </div>
  
  )
}

export default Rightsidebar