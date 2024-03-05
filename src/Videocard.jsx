import React, { useState } from 'react'
import { Card,Button } from 'react-bootstrap'
import { cartHistoryAPI } from './services/allAPI';

function Videocard({displayData}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(true);

  const handleShow = async () =>{

   setShow(true);

    const {productname,imageURL,price}=displayData
  
   const result= await cartHistoryAPI({productname,imageURL,price})
   if(result.status>=200&& result.status<300){
    alert(`${result.data.productname} is added sucessfully`)
  
    
  }else{
   alert("api call failed... please try again")
  }
   console.log(resultb);
 
  }
 
  
  return (
 <>
  <div style={{height:'400px'}}>
  <Card className='shadow' style={{ width: '15rem' }}>
      <Card.Img style={{cursor:'pointer'}} variant="top" height={'200px'} src={displayData?.imageURL} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between'> {displayData?.productname}</Card.Title>
        <Card.Text> price:
        {displayData?.price}
        </Card.Text>
        <Button  onClick={handleShow} className='btn' variant="info" >add cart</Button>
      </Card.Body>
    </Card>
    </div>
   </>
  )

}

export default Videocard