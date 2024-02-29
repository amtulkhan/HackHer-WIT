import logo from "./logo.svg";
import "./App.css";
import Grid from "@mui/material/Grid";
import DataTable from "./Components/DataTable/dataTable";
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import MiddleContainer from './Components/MiddleContainer';
import CreateRequestContainer from './Components/CreateRequestContainer';
import { useState } from "react";

// function App() {
//   return (
//     <div className="App">
//       <Grid container xs={12}>
//         <Grid container alignItems="flex-end" xs={8}>
//           <DataTable />
//         </Grid>
//       </Grid>
//     </div>
//   );
// }

function App() {
  
const [activeComponent, setActiveComponent] = useState('MiddleContainer');

  return (
    <div className="App">
      <Navbar />
      <div class="AppBody">
        <Sidebar activeCompCallback={setActiveComponent}/>
        </div>
        <div class="ContentDiv">
        {activeComponent==='MiddleContainer' && (
 <MiddleContainer userName="ARPITA BAROT" />
        )}
        {activeComponent==='CreateRequestContainer' && (
       <CreateRequestContainer userName="ARPITA BAROT" activeCompCallback={setActiveComponent} />
       )}
       {activeComponent==='dataTable' && ( 
        <Grid container xs={12}>
        <Grid container alignItems="flex-end" xs={8}>
          <DataTable />
        </Grid>
      </Grid>
       )}
        
{/* Other dynamic content of  application */}

        </div>
        
      </div>
      
    
  );

       }

export default App;
