import React, {useState}from 'react';
import {Modal,ModalHeader} from "reactstrap";
import { TextField,InputLabel,MenuItem,Select,Typography,Button,IconButton} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {Link, useNavigate} from "react-router-dom";
 

function CreateMediaAd() {
  const navigate = useNavigate();
  const [modal , setModal] = useState(false);
  const [buttonLabel,setButtonLabel] = useState("");
  
  const[form, setForm] = useState({
    heading1:"",
    heading2:"",
    description:"",
    landscape:"",
    portrait:"",
    square:"",
    video:"",
    business:"",
    buttonLabel:"",
    website:"",
    
    });

    const handleChange = (e)=>{
      setForm((prevState)=>({
        ...prevState,
        [e.target.name]: e.target.value,
      }))

    }

  const handleSubmit = (e) => {
    e.preventDefault();
    };
   
  

    const handleModal=()=>{
      setModal(true)
      setTimeout(() => {
        navigate("/ads");
        setModal(false);
      }, 6000);
    }

    const handleInputChange=(e)=>{
      setButtonLabel(e.target.value)
    }

  return (

   <div className="container-fluid py-5" >
  
<form className="row g-4 py-3 mx-2" style={{border:"1px solid lightgrey"}} onSubmit={handleSubmit} >

  <Typography>Create Text & Media</Typography>

  <div className="col-md-6">
     <InputLabel >Heading 01</InputLabel>
    <TextField fullWidth name="heading1" value={form.heading1}
    onChange={handleChange}
    placeholder="Add a heading that would make users intrested" required/>

       <div className='my-3'>
        <InputLabel >Heading 02</InputLabel>
    <TextField fullWidth  name="heading2" value={form.heading2}
    onChange={handleChange}
    placeholder="Add a heading that would make users intrested"/>
       </div>
      
  </div>
  <div className="col-md-6">
    <InputLabel>Description 01</InputLabel>
  <TextField fullWidth  name="description" value={form.description}
  onChange={handleChange}
    placeholder="Add primary text to help users understand more about your products,services or offers"  rows={5} multiline />
  </div>

  <div className="col-md-4">
     <InputLabel >Landscape Marketing Image(1.9:1)</InputLabel>
    <TextField fullWidth name="landscape" value={form.landscape}
    onChange={handleChange}
    placeholder="Add the URL of the Image you want to use for the ad"/>
</div>
       <div className="col-md-4">
        <InputLabel >Portrait Marketing Image(4:5)</InputLabel>
    <TextField fullWidth  name="portrait" value={form.portrait}
    onChange={handleChange}
    placeholder="Add the URL of the Image you want to use for the ad"/>
       </div>
      
  
  <div className="col-md-4">
    <InputLabel>Square Marketing Image(1:1)</InputLabel>
  <TextField fullWidth  name="square" value={form.square}
  onChange={handleChange}
    placeholder="Add the URL of the Image you want to use for the ad" />
  </div>

  <div className="col-12">
     <InputLabel>Video URL</InputLabel>
  <TextField fullWidth 
    placeholder="Add the URL of the Image you want to use for the ad" />
  </div>

  <div className="col-md-6">
     <InputLabel >Business Name</InputLabel>
    <TextField fullWidth   name="business" value={form.business}
    onChange={handleChange}
    placeholder="Add the URL of the Image you want to use for the ad"/>
      
  </div>
  <div className="col-md-6">
  <InputLabel >Button Label</InputLabel>
    <Select fullWidth  
      value={buttonLabel}
      onChange={handleInputChange}
    placeholder="Select a label that best suits your ad"
    
    >
      <MenuItem value="10">10</MenuItem>
      <MenuItem value="20">20</MenuItem>
    </Select>
  </div>

  <div className="col-12">
  <InputLabel >Website URL</InputLabel>
    <TextField fullWidth   name="website" value={form.website}
    onChange={handleChange}
    placeholder="Add the URL of the Landing page ypu want to redirect users to"/>
  </div>
  
  <div className="d-grid gap-4 d-md-flex justify-content-md-end">
  <Link to ="/ads">
  <Button variant="outlined" size='large'>Back</Button>
  </Link>
  <Button variant="contained" size='large' onClick={handleModal}>Submit</Button>
</div>
<Modal size="small" isOpen={modal} toggle={()=>setModal(!modal)}  >
  <ModalHeader toggle={()=> setModal(!modal)}
    >
      <IconButton >
      <CheckCircleIcon  color='primary' />
      </IconButton>
    Submited 
  </ModalHeader>

</Modal>
</form>

</div>
  )
}

export default CreateMediaAd
