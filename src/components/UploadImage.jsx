import React from 'react';
import { useRef  } from 'react';
import { BsImageFill } from "react-icons/bs";
import {useImage} from "../context/ImageContext"


const UploadImage = () => {
  const { image, setImage } = useImage();
  const inputRef = useRef(null);

  const handleImageClick = () => {
    inputRef.current.click();
  }

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  }
  return (
    <div>
    <div onClick={handleImageClick} style={{border:"2px #DEE2E6 dashed" ,padding:"5px 10px"}}>
        {image ? <img style={{width:"20%"}} src={URL.createObjectURL(image)} alt="profile" /> :<BsImageFill className='fs-2'/> }
       
        <input type="file" onChange={handleImageChange} ref={inputRef} style={{position:'relative', left:"-180px", display:"none"}}/>
        
    </div>
    </div>
  )
}

export default UploadImage