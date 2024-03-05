import React, { useState } from 'react'
import Add from '../Add';
import View from '../View';


function Products({}) {
 const [uploadProductResponse,setuploadProductResponse]=useState("")
 
  return (
    <>
  <div className='container mt-5 d-flex justify-content-between '>
    <Add setuploadProductResponse={setuploadProductResponse}/>
   
  </div>

  <View uploadProductResponse={uploadProductResponse}/>
    </>
  );
}

export default Products;