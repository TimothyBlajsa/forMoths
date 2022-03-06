//import logo from './logo.svg';
import Title from './Components/Title';
import FactDetails from './Components/FactDetails';
import Footer from './Footer';
import './App.css';
import ScienceDetails from './Components/ScienceDetails';
import SymbolismDetails from './Components/SymbolismDetails';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Title></Title>
       <p>Ƹ̵̡Ӝ̵̨̄Ʒ Ƹ̵̡Ӝ̵̨̄Ʒ Ƹ̵̡Ӝ̵̨̄Ʒ</p>
       
       <div className="container">

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panella-content"
          id="panella-header"
          >
            <Typography>Science</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ScienceDetails></ScienceDetails>
            </Typography>
          </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panella-content"
          id="panella-header"
          >
            <Typography>Fun Facts</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <FactDetails></FactDetails>
            </Typography>
          </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panella-content"
          id="panella-header"
          >
            <Typography>Symbolism</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <SymbolismDetails></SymbolismDetails>
            </Typography>
          </AccordionDetails>
      </Accordion>
    </div>
      </header>
    </div>
  );
}

export default App;
