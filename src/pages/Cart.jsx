import React, { useEffect, useState } from 'react'
import { getcartHistoryAPI } from '../services/allAPI'
import { Row,Col } from 'react-bootstrap'
import { Card,Button } from 'react-bootstrap'
import Cartcard from '../Cartcard'

function Cart(displayData) {
    const [cart,setcart]=useState([])
    const [deleteVideoResponse,setDeleteVideoResponse] = useState("")
    const getAllcart=async()=>{
        const result= await getcartHistoryAPI()
        if(result.status>=200&& result.status<300){
       setcart(result.data)  
          
          }
    }
    useEffect(()=>{
     getAllcart()
    },[deleteVideoResponse])
    
  return (
    <div className='justify-content-between row' style={{backgroundColor:'white'}}>
    <h3>here is your cart..</h3><br/>
    <div className="w-100" ></div> {/* Add a clearfix to ensure proper alignment */}
    <Row style={{backgroundColor:'white'}}>
        {cart?.length > 0 ? cart?.map((productDetails, index) => (
            <Col key={index} sm={12} md={6} lg={4}> 
             <Cartcard   displayData={productDetails} setDeleteVideoResponse={setDeleteVideoResponse}/>
            </Col>
        )) : (
            <div className='text-danger fw-bolder'>No Cart items yet!!!</div>
        )}
    </Row>
    
</div>
  )
}

export default Cart