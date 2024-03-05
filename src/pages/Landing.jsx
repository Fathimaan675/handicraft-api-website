import React from 'react'
import { useNavigate } from 'react-router-dom'

function Landing() {
  const navigate = useNavigate()

  const handleNavigate=()=>{
      navigate('/product')
  }
  return (
    <>
  <div style={{ display: 'flex', justifyContent: 'center' }} className='landin '>
    <div style={{ textAlign: 'center' }} className="col-lg-4 col-md-6">
       <img style={{ margin: '0 auto' }} className='rr' src="https://krafti.qodeinteractive.com/wp-content/uploads/2019/07/h6-img-1.jpg" alt="" /> 
       <br /> <br />  <br />  <i class="fa-solid fa-leaf"></i>
       <br /> <h5 style={{color:'rgb(128, 93, 51)',fontSize:'20px'}}>FACE CARE PROGRAM</h5>
       <p style={{fontSize:'15px',color:' grey'}}>Creams & Lotions made by the best professionals<br /> in the  field and brought to you</p>
        </div>
    <div style={{ textAlign: 'center' }} className="col-lg-4 col-md-6">
      <img style={{ margin: '0 auto' }} className='rr' src="https://krafti.qodeinteractive.com/wp-content/uploads/2019/07/h6-img-3.jpg" alt="" /> 
      <br /> <br />  <br /> <i class="fa-brands fa-pagelines"></i>
      <br /> <h5 style={{color:'rgb(128, 93, 51)',fontSize:'20px'}}> BODY CARE PROGRAM</h5>
      <p style={{fontSize:'15px',color:' grey'}}>Creams & Lotions made by the best professionals<br /> in the  field and brought to you</p> 
      </div>
    <div style={{ textAlign: 'center' }} className="col-lg-4 col-md-6">
      <img style={{ margin: '0 auto' }} className='rr' src="https://krafti.qodeinteractive.com/wp-content/uploads/2019/07/h6-img-2.jpg" alt="" /> 
      <br /> <br />  <br />  <i class="fa-solid fa-leaf"></i>
      <br /><h5 style={{color:'rgb(128, 93, 51)',fontSize:'20px'}}>HANDMADE SOAPS</h5>
      <p style={{fontSize:'15px',color:' grey'}}>Creams & Lotions made by the best professionals<br /> in the  field and brought to you</p>
      </div>
</div>
    <br /><br /><br/>
    <div>
   <h2 style={{color:'rgb(128, 93, 51)'}}>view all Product &nbsp;
   <button className='btn btn-info' onClick={handleNavigate} style={{
      backgroundColor: '#FDF4E9', 
      border: 'none',
      color: '#333', 
      padding: '10px 20px', 
      fontSize: '16px', 
      borderRadius: '20px', 
      cursor: 'pointer',
      outline: 'none',
      transition: 'background-color 0.3s ease',  
    }}>
     view
    </button></h2> 
    </div>
    </>
  )
}

export default Landing