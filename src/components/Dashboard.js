import React, { useState } from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, IconButton, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import EnhancedTable from './Demo';
import EnhancedTable1 from './Demo1';

import Switch from '@mui/material/Switch';


ChartJS.register(ArcElement, Tooltip, Legend);

function Dashboard() {

  const [toggleButton, setToggleButton] = useState(false)
 
  const [clicks, setClicks] = useState("")



  const data = {

    datasets: [{
      label: 'poll',
      data: [25, 35, 40],
      backgroundColor: ['rgb(4, 56, 56)', 'blue', 'orange'],

    }],
    labels: ['40% Male', '35% Female', "25% Unknown"]
  }


  const options = {
    borderWidth: 5,
    borderRadius: 2,
    hoverBorderWidth: 0,


    plugins: {
      legend: {
        position: "right",


      }
    }

  }


  
 

  const handleSwitchChange = (e) => {
    setToggleButton(e.target.checked)
  }

  const handleChange=(e) =>{
   setClicks(e.target.value)
  }
  console.log("data.......",data)




  return (
    <div className='container-fluid py-5'>
     
      <div className="row g-3" >
         <div className="col-md-6">
           <EnhancedTable />
        

          
        </div>       
        
      { toggleButton ?    <div className="col-md-6">
      
           
           
            <EnhancedTable1 />
          </div>
         
          :
          <div className="col-md-6">
            
            <TableContainer component={Paper} >

              <Table sx={{ minWidth: 600, margin: 1 }} aria-label="simple table" align="center" >

                <TableHead>
                  <TableRow>
                    <TableCell align="left" colSpan={1}>
                      Ad Insights
                    </TableCell>

                    <TableCell align="right" colSpan={2}>
                      <FormControl sx={{ minWidth: "80px" }}>
                        <InputLabel sx={{ fontSize: "14px" }}>Clicks</InputLabel>
                        <Select sx={{ fontSize: "13px" }}
                          value={clicks} onChange={handleChange}
                          label="Clicks" >
                          <MenuItem value="45">45</MenuItem>
                          <MenuItem value="35">35</MenuItem>
                          <MenuItem value="25">25</MenuItem>

                        </Select>
                      </FormControl>
                    </TableCell>


                    <TableCell align="right" colSpan={4}>
                      <IconButton><HelpOutlineIcon /></IconButton>
                    </TableCell>


                  </TableRow>

                </TableHead>
                <TableBody>
                <div style={{ display: "flex", alignItems: "center", gap: "30px"}} >
                    <div>
                      <Doughnut data={data} options={options} style={{ width: "323px", height: "auto" }}>

                      </Doughnut>
                    </div>

                   
                  </div>
  


                </TableBody>

              </Table>
              <div style={{display:"flex",justifyContent:"flex-end"}}>
              <Switch onChange={handleSwitchChange}   />
            </div>
             
            </TableContainer>
            
            
           
            </div> 
            }
           
          
      
      </div>
    </div>
  )
}

export default Dashboard;

