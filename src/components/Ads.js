import React, { useState } from 'react';
import Media from "../images/media.png";
import Textad from "../images/text.png"
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

function Ads() {

  const navigate = useNavigate();
  const [addType, setAddType] = useState("");

  const goToNextPage=()=>{
    if(addType == "textAd"){
      navigate("/createtextad");
    }else{
      navigate("/createmediaad");
    }
  }

  const handleAddSelect=(e)=>{
    setAddType(e.target.value)
  }

  return (
    <div className=" container-fluid py-5" style={{border:"1px solid lightgrey"}}>
      <div style={{display:"flex",justifyContent:"center",justifyItems:"center",paddingTop:"5rem",gap:"60px",flexDirection:"row",flexWrap:"wrap"}} >

        <div className='px-4 py-4' style={{boxShadow:"1px 2px 8px lightgrey"}} > 
      <input type="radio" name='selectType' value={"textAd"} onChange={handleAddSelect} style={{ position: "relative",left:"15px",bottom:"178px"}} />
      < img src={Textad} alt='textad'  /> 
      <div style={{ left: "99px",top: "-21px",position: "relative"}} >
      <p>Create</p>
      <h3 style={{left: "-25px",position: "relative",top: "-13px" }}>Text Ad</h3>
        
      </div>
      </div>

       <div className='px-4 py-4' style={{boxShadow:"1px 2px 8px lightgrey"}}>
      <input type="radio" name='selectType' value={"mediaAd"} onChange={handleAddSelect} style={{ position: "relative",left:"15px",bottom:"178px"}}/>
      <img src={Media} alt='media' />
      <div style={{ left: "99px",top: "-21px",position: "relative"}}>
      <p>Create</p>
      <h3 style={{left: "-25px",position: "relative",top: "-13px" }}>Media Ad</h3>
      </div>
      </div>
     
      </div>
      <div className="d-grid d-md-flex justify-content-md-end">
       <Button variant="contained" size='large' onClick={goToNextPage}>Next</Button> 
     </div>
     
      </div>
      
  )
}

export default Ads

