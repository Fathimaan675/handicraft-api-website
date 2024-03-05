import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./serverurl"
export const uploadproductAPI=async (product)=>{
    return await commonAPI("POST",`${SERVER_URL}/Products `,product)
 }
 export const getAllProductAPI=async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/Products `,"")
 }

 export const cartHistoryAPI = async (productDetails)=>{
  
   return await commonAPI("POST",`${SERVER_URL}/Cart`,productDetails)
 }
 export const getcartHistoryAPI = async () =>{
   return await commonAPI("GET",`${SERVER_URL}/Cart`,"")
 }
 export const removecartHistoryAPI = async (Id) =>{
   return await commonAPI("DELETE",`${SERVER_URL}/Cart/${Id}`,{})
 } 