import React from 'react'

import { GrPrevious, GrNext  } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
function Navigation() {
    const navigate=useNavigate();
    const handlePrevious=()=>{
navigate(-1);
    }
    const handleNext=()=>{
        navigate(1)
    }
  return (
    <div className='navigation'>
      <div onClick={handlePrevious}><GrPrevious /></div>
      <div  onClick={handleNext}><GrNext /></div>
    </div>
  )
}

export default Navigation
