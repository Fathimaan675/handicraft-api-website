import React, { useState } from 'react'
import { Card,Button } from 'react-bootstrap'
import { getcartHistoryAPI,removecartHistoryAPI } from './services/allAPI';

function Cartcard({displayData,setDeleteVideoResponse}) {
    const [cart,setcart]=useState([])
    const getAllcart=async()=>{
        const result= await getcartHistoryAPI()
        if(result.status>=200&& result.status<300){
       setcart(result.data)  
          
          }
        }
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(true);

  const handleShow = async () =>{

   setShow(true);

    const {productname,imageURL,price}=displayData
  
   const result= await getcartHistoryAPI({productname,imageURL,price})
   if(result.status>=200&& result.status<300){
    alert(`${result.data.productname} is added sucessfully`)
  
    
  }else{
   alert("api call failed... please try again")
  }
   console.log(result);
 
  }
  const deleteHistory = async (vId)=>{
    // Api call
   const result= await removecartHistoryAPI(vId)
    setDeleteVideoResponse(result.data)

    getAllcart()
  }
 
  
  return (
 <>
   <Card className='shadow' style={{ width: '15rem' }}>
      <Card.Img style={{cursor:'pointer'}} variant="top" height={'200px'} src={displayData?.imageURL} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between'> {displayData?.productname}</Card.Title>
        <Card.Text> price:
        {displayData?.price}
        </Card.Text>
        <button onClick={()=>deleteHistory(displayData.id)} className='btn'><i className="fa-solid fa-trash text-danger"></i></button>

      </Card.Body>
    </Card>
   </>
  )

}

export default Cartcard