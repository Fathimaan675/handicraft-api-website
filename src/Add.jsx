import React from 'react'
import { useState } from 'react';
import { Alert, FloatingLabel,Form, } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { uploadproductAPI } from './services/allAPI';

function Add({setuploadProductResponse}) {
    const [show, setShow] = useState(false);
   const [uploadProduct,setUploadProduct]=useState({
    productname:"",imageURL:"",price:""
   })
    const handleShow = () => setShow(true);

    const handleClose = () => {
        setShow(false);
        setUploadProduct({...uploadProduct, productname:"",imageURL:"",price:""})   
        } 
        

      const handleupload= async()=>{
        const  {productname,imageURL,price}=uploadProduct
        if(productname&&imageURL&&price){
           const result=await uploadproductAPI(uploadProduct)
           if(result.status>=200&& result.status<300){
             alert(`${result.data.productname} is added sucessfully`)
             setuploadProductResponse(result.data)
             handleClose()
           }else{
            alert("api call failed... please try again")
           }
        }else{
            alert("please fill the form completely")
        }
      }
      
console.log(uploadProduct);
     
  return (
  <>
        <div style={{ margin: '100px' }}>
        <h2 style={{ color: 'rgb(128, 93, 51)' }}>
          Add Product &nbsp;
          <button
            style={{
              backgroundColor: '#FDF4E9',
              border: 'none',
              color: '#333',
              padding: '10px 20px',
              fontSize: '16px',
              borderRadius: '50%',
              cursor: 'pointer',
              outline: 'none',
              transition: 'background-color 0.3s ease',
            }}
            onClick={handleShow}
          >
            +
          </button>
        </h2>
      </div>


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Products</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Please Fill the following details!!!</p>
            <FloatingLabel
            controlId="floatingInputCaption"
            label="product name"
            className="mb-3"
          >
            <Form.Control  onChange={e=>setUploadProduct({...uploadProduct,productname:e.target.value})} type="text" placeholder="product Name" />
            
          </FloatingLabel>
          <FloatingLabel
       
       controlId="floatingInput"
       label="image url"
       className="mb-3"
     > <Form.Control onChange={e=>setUploadProduct({...uploadProduct,imageURL:e.target.value})}  type="text" placeholder="image url" />
     </FloatingLabel>
     <FloatingLabel
       
       controlId="floatingInput"
       label="price"
       className="mb-3"
     > <Form.Control onChange={e=>setUploadProduct({...uploadProduct,price:e.target.value})}  type="text" placeholder="price" />
     </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
          Cancel
          </Button>
          <Button onClick={handleupload} className='btn btn-info' variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
 


  </>
  )
}

export default Add