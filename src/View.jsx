import React, { useEffect, useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import Videocard from './Videocard'
import { getAllProductAPI } from './services/allAPI'


function View(uploadProductResponse) {
  const [allViewproduct,setallViewproduct]=useState([])
  const getAllproducts =async()=>{
    const result= await getAllProductAPI()
    console.log(result);
    if(result?.status==200){
      setallViewproduct(result?.data);
    }
 
  }
  useEffect(()=>{
getAllproducts()
  },[uploadProductResponse])
  console.log(allViewproduct);
  return (
   <>
     <div className='justify-content-between row' style={{backgroundColor:'white'}}>
    <h3>All products</h3><br/>
    <div className="w-100" ></div> {/* Add a clearfix to ensure proper alignment */}
    <Row style={{backgroundColor:'white'}}>
        {allViewproduct?.length > 0 ? allViewproduct?.map((Product, index) => (
            <Col key={index} sm={12} md={6} lg={4}> 
                <Videocard displayData={Product}/>
            </Col>
        )) : (
            <div className='text-danger fw-bolder'>No videos are uploaded yet!!!</div>
        )}
    </Row>


</div>
<div>view cart</div>
   </>
  )
}

export default View