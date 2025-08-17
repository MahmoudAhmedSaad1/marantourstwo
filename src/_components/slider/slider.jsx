
import axios from 'axios'
import React, { useEffect } from 'react'

export default function slider_home() {

function get_image(){
    axios.get(`https://api.dubaidaytrips.com/v1/sliders?tenant_id=58&language_id=51&status=active`)
    .then((res)=>{
        console.log(res)
    })
    .catch((res)=>{
        console.log(res)
    })
}
useEffect(()=>{
    get_image()
},[])

  return <>
  
  
  
  </>
}
