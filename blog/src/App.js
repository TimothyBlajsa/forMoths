import logo from './logo.svg';
import Title from './Title';
import Body from './Body';
import Footer from './Footer';
import './App.css';
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
       Porchlight #1
       <p>Ƹ̵̡Ӝ̵̨̄Ʒ Ƹ̵̡Ӝ̵̨̄Ʒ Ƹ̵̡Ӝ̵̨̄Ʒ</p>
       <div className="container">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panella-content"
          id="panella-header"
          >
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Body></Body>
            </Typography>
          </AccordionDetails>
      </Accordion>
    </div>
      </header>
    
    </div>
  );
}

export default App;
