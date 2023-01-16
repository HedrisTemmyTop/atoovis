import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {BsChevronDown} from 'react-icons/bs';
import {HiOutlineTruck} from 'react-icons/hi'
import {GrFormAdd} from 'react-icons/gr'
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FaqAccordion =()=> {
  return (
    <div>

      <Accordion>
        <AccordionSummary
          expandIcon={<GrFormAdd />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          style={{ boxShadow: "none" }}
        >
          <Typography style={{display: 'flex', alignItems: 'center'}}>
            <HiOutlineTruck style={{marginLeft: 10, fontSize:30, color: '#1B5958'}}/>
            <p style={{marginLeft: 10, fontSize:30, fontWeight: 600, fontfamily: 'lato', color: '#071717'}}>Orders</p>
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Accordion>
            <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{marginLeft: 10, fontSize:21, fontWeight: 700, fontfamily: 'lato', color: '#071717'}}>What is a store name?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{marginLeft: 10, fontSize:18, fontWeight: 400, fontfamily: 'lato', color: '#071717'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mi,
             ut blandit nulla elementum pellentesque amet. Mauris, interdum neque enim rhoncus sed eget habitant cras enim. 
            </Typography>
            </AccordionDetails>
        </Accordion>
        </AccordionDetails>
        <AccordionDetails>
            <Accordion>
            <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{marginLeft: 10, fontSize:21, fontWeight: 700, fontfamily: 'lato', color: '#071717'}}>Can I update a store name later?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{marginLeft: 10, fontSize:18, fontWeight: 400, fontfamily: 'lato', color: '#071717'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mi,
             ut blandit nulla elementum pellentesque amet. Mauris, interdum neque enim rhoncus sed eget habitant cras enim. 
            </Typography>
            </AccordionDetails>
        </Accordion>
        </AccordionDetails>
        <AccordionDetails>
            <Accordion>
            <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{marginLeft: 10, fontSize:21, fontWeight: 700, fontfamily: 'lato', color: '#071717'}}>What does UPC mean?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{marginLeft: 10, fontSize:18, fontWeight: 400, fontfamily: 'lato', color: '#071717'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mi,
             ut blandit nulla elementum pellentesque amet. Mauris, interdum neque enim rhoncus sed eget habitant cras enim. 
            </Typography>
            </AccordionDetails>
        </Accordion>
        </AccordionDetails>
        <AccordionDetails>
            <Accordion>
            <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            style={{ boxShadow: "none" }}

            >
            <Typography style={{marginLeft: 10, fontSize:21, fontWeight: 700, fontfamily: 'lato', color: '#071717'}}>Why should I provide my trademark Information?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{marginLeft: 10, fontSize:18, fontWeight: 400, fontfamily: 'lato', color: '#071717'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mi,
             ut blandit nulla elementum pellentesque amet. Mauris, interdum neque enim rhoncus sed eget habitant cras enim. 
            </Typography>
            </AccordionDetails>
        </Accordion>
        </AccordionDetails>
        <AccordionDetails>
            <Accordion>
            <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{marginLeft: 10, fontSize:21, fontWeight: 700, fontfamily: 'lato', color: '#071717'}}>What if I’m not the manufacturer?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{marginLeft: 10, fontSize:18, fontWeight: 400, fontfamily: 'lato', color: '#071717'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mi,
             ut blandit nulla elementum pellentesque amet. Mauris, interdum neque enim rhoncus sed eget habitant cras enim. 
            </Typography>
            </AccordionDetails>
        </Accordion>
        </AccordionDetails>
        <AccordionDetails>
            <Accordion>
            <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{marginLeft: 10, fontSize:21, fontWeight: 700, fontfamily: 'lato', color: '#071717'}}>How can I use my remaining Account credits?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{marginLeft: 10, fontSize:18, fontWeight: 400, fontfamily: 'lato', color: '#071717'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mi,
             ut blandit nulla elementum pellentesque amet. Mauris, interdum neque enim rhoncus sed eget habitant cras enim. 
            </Typography>
            </AccordionDetails>
        </Accordion>
        </AccordionDetails>
        <AccordionDetails>
            <Accordion>
            <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{marginLeft: 10, fontSize:21, fontWeight: 700, fontfamily: 'lato', color: '#071717'}}>What if I don’t have a store name?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{marginLeft: 10, fontSize:18, fontWeight: 400, fontfamily: 'lato', color: '#071717'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mi,
             ut blandit nulla elementum pellentesque amet. Mauris, interdum neque enim rhoncus sed eget habitant cras enim. 
            </Typography>
            </AccordionDetails>
        </Accordion>
        </AccordionDetails>
        
           
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<GrFormAdd />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          style={{ boxShadow: "none" }}
        >
          <Typography style={{display: 'flex', alignItems: 'center'}}>
            <HiOutlineTruck style={{marginLeft: 10, fontSize:30, color: '#1B5958'}}/>
            <p style={{marginLeft: 10, fontSize:30, fontWeight: 600, fontfamily: 'lato', color: '#071717'}}>Return Steps</p>
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Accordion>
            <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{marginLeft: 10, fontSize:21, fontWeight: 700, fontfamily: 'lato', color: '#071717'}}>What is a store name?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{marginLeft: 10, fontSize:18, fontWeight: 400, fontfamily: 'lato', color: '#071717'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mi,
             ut blandit nulla elementum pellentesque amet. Mauris, interdum neque enim rhoncus sed eget habitant cras enim. 
            </Typography>
            </AccordionDetails>
        </Accordion>
        </AccordionDetails>
        <AccordionDetails>
            <Accordion>
            <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{marginLeft: 10, fontSize:21, fontWeight: 700, fontfamily: 'lato', color: '#071717'}}>Can I update a store name later?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{marginLeft: 10, fontSize:18, fontWeight: 400, fontfamily: 'lato', color: '#071717'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mi,
             ut blandit nulla elementum pellentesque amet. Mauris, interdum neque enim rhoncus sed eget habitant cras enim. 
            </Typography>
            </AccordionDetails>
        </Accordion>
        </AccordionDetails>
        <AccordionDetails>
            <Accordion>
            <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{marginLeft: 10, fontSize:21, fontWeight: 700, fontfamily: 'lato', color: '#071717'}}>What does UPC mean?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{marginLeft: 10, fontSize:18, fontWeight: 400, fontfamily: 'lato', color: '#071717'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mi,
             ut blandit nulla elementum pellentesque amet. Mauris, interdum neque enim rhoncus sed eget habitant cras enim. 
            </Typography>
            </AccordionDetails>
        </Accordion>
        </AccordionDetails>
        <AccordionDetails>
            <Accordion>
            <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{marginLeft: 10, fontSize:21, fontWeight: 700, fontfamily: 'lato', color: '#071717'}}>Why should I provide my trademark Information?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{marginLeft: 10, fontSize:18, fontWeight: 400, fontfamily: 'lato', color: '#071717'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mi,
             ut blandit nulla elementum pellentesque amet. Mauris, interdum neque enim rhoncus sed eget habitant cras enim. 
            </Typography>
            </AccordionDetails>
        </Accordion>
        </AccordionDetails>
        <AccordionDetails>
            <Accordion>
            <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{marginLeft: 10, fontSize:21, fontWeight: 700, fontfamily: 'lato', color: '#071717'}}>What if I’m not the manufacturer?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{marginLeft: 10, fontSize:18, fontWeight: 400, fontfamily: 'lato', color: '#071717'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mi,
             ut blandit nulla elementum pellentesque amet. Mauris, interdum neque enim rhoncus sed eget habitant cras enim. 
            </Typography>
            </AccordionDetails>
        </Accordion>
        </AccordionDetails>
        <AccordionDetails>
            <Accordion>
            <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{marginLeft: 10, fontSize:21, fontWeight: 700, fontfamily: 'lato', color: '#071717'}}>How can I use my remaining Account credits?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{marginLeft: 10, fontSize:18, fontWeight: 400, fontfamily: 'lato', color: '#071717'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mi,
             ut blandit nulla elementum pellentesque amet. Mauris, interdum neque enim rhoncus sed eget habitant cras enim. 
            </Typography>
            </AccordionDetails>
        </Accordion>
        </AccordionDetails>
        <AccordionDetails>
            <Accordion>
            <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{marginLeft: 10, fontSize:21, fontWeight: 700, fontfamily: 'lato', color: '#071717'}}>What if I don’t have a store name?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{marginLeft: 10, fontSize:18, fontWeight: 400, fontfamily: 'lato', color: '#071717'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mi,
             ut blandit nulla elementum pellentesque amet. Mauris, interdum neque enim rhoncus sed eget habitant cras enim. 
            </Typography>
            </AccordionDetails>
        </Accordion>
        </AccordionDetails>
        
           
      </Accordion>
   

      <Accordion>
        <AccordionSummary
          expandIcon={<GrFormAdd />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          style={{ boxShadow: "none" }}
        >
          <Typography style={{display: 'flex', alignItems: 'center'}}>
            <HiOutlineTruck style={{marginLeft: 10, fontSize:30, color: '#1B5958'}}/>
            <p style={{marginLeft: 10, fontSize:30, fontWeight: 600, fontfamily: 'lato', color: '#071717'}}>Time</p>
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Accordion>
            <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{marginLeft: 10, fontSize:21, fontWeight: 700, fontfamily: 'lato', color: '#071717'}}>What is a store name?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{marginLeft: 10, fontSize:18, fontWeight: 400, fontfamily: 'lato', color: '#071717'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mi,
             ut blandit nulla elementum pellentesque amet. Mauris, interdum neque enim rhoncus sed eget habitant cras enim. 
            </Typography>
            </AccordionDetails>
        </Accordion>
        </AccordionDetails>
        <AccordionDetails>
            <Accordion>
            <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{marginLeft: 10, fontSize:21, fontWeight: 700, fontfamily: 'lato', color: '#071717'}}>Can I update a store name later?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{marginLeft: 10, fontSize:18, fontWeight: 400, fontfamily: 'lato', color: '#071717'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mi,
             ut blandit nulla elementum pellentesque amet. Mauris, interdum neque enim rhoncus sed eget habitant cras enim. 
            </Typography>
            </AccordionDetails>
        </Accordion>
        </AccordionDetails>
        <AccordionDetails>
            <Accordion>
            <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{marginLeft: 10, fontSize:21, fontWeight: 700, fontfamily: 'lato', color: '#071717'}}>What does UPC mean?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{marginLeft: 10, fontSize:18, fontWeight: 400, fontfamily: 'lato', color: '#071717'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mi,
             ut blandit nulla elementum pellentesque amet. Mauris, interdum neque enim rhoncus sed eget habitant cras enim. 
            </Typography>
            </AccordionDetails>
        </Accordion>
        </AccordionDetails>
        <AccordionDetails>
            <Accordion>
            <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{marginLeft: 10, fontSize:21, fontWeight: 700, fontfamily: 'lato', color: '#071717'}}>Why should I provide my trademark Information?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{marginLeft: 10, fontSize:18, fontWeight: 400, fontfamily: 'lato', color: '#071717'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mi,
             ut blandit nulla elementum pellentesque amet. Mauris, interdum neque enim rhoncus sed eget habitant cras enim. 
            </Typography>
            </AccordionDetails>
        </Accordion>
        </AccordionDetails>
        <AccordionDetails>
            <Accordion>
            <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{marginLeft: 10, fontSize:21, fontWeight: 700, fontfamily: 'lato', color: '#071717'}}>What if I’m not the manufacturer?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{marginLeft: 10, fontSize:18, fontWeight: 400, fontfamily: 'lato', color: '#071717'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mi,
             ut blandit nulla elementum pellentesque amet. Mauris, interdum neque enim rhoncus sed eget habitant cras enim. 
            </Typography>
            </AccordionDetails>
        </Accordion>
        </AccordionDetails>
        <AccordionDetails>
            <Accordion>
            <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{marginLeft: 10, fontSize:21, fontWeight: 700, fontfamily: 'lato', color: '#071717'}}>How can I use my remaining Account credits?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{marginLeft: 10, fontSize:18, fontWeight: 400, fontfamily: 'lato', color: '#071717'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mi,
             ut blandit nulla elementum pellentesque amet. Mauris, interdum neque enim rhoncus sed eget habitant cras enim. 
            </Typography>
            </AccordionDetails>
        </Accordion>
        </AccordionDetails>
        <AccordionDetails>
            <Accordion>
            <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{marginLeft: 10, fontSize:21, fontWeight: 700, fontfamily: 'lato', color: '#071717'}}>What if I don’t have a store name?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{marginLeft: 10, fontSize:18, fontWeight: 400, fontfamily: 'lato', color: '#071717'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mi,
             ut blandit nulla elementum pellentesque amet. Mauris, interdum neque enim rhoncus sed eget habitant cras enim. 
            </Typography>
            </AccordionDetails>
        </Accordion>
        </AccordionDetails>
        
           
      </Accordion>
   

      <Accordion>
        <AccordionSummary
          expandIcon={<GrFormAdd />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{display: 'flex', alignItems: 'center'}}>
            <HiOutlineTruck style={{marginLeft: 10, fontSize:30, color: '#1B5958'}}/>
            <p style={{marginLeft: 10, fontSize:30, fontWeight: 600, fontfamily: 'lato', color: '#071717'}}>Track Refunds</p>
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Accordion>
            <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{marginLeft: 10, fontSize:21, fontWeight: 700, fontfamily: 'lato', color: '#071717'}}>What is a store name?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{marginLeft: 10, fontSize:18, fontWeight: 400, fontfamily: 'lato', color: '#071717'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mi,
             ut blandit nulla elementum pellentesque amet. Mauris, interdum neque enim rhoncus sed eget habitant cras enim. 
            </Typography>
            </AccordionDetails>
        </Accordion>
        </AccordionDetails>
        <AccordionDetails>
            <Accordion>
            <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{marginLeft: 10, fontSize:21, fontWeight: 700, fontfamily: 'lato', color: '#071717'}}>Can I update a store name later?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{marginLeft: 10, fontSize:18, fontWeight: 400, fontfamily: 'lato', color: '#071717'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mi,
             ut blandit nulla elementum pellentesque amet. Mauris, interdum neque enim rhoncus sed eget habitant cras enim. 
            </Typography>
            </AccordionDetails>
        </Accordion>
        </AccordionDetails>
        <AccordionDetails>
            <Accordion>
            <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{marginLeft: 10, fontSize:21, fontWeight: 700, fontfamily: 'lato', color: '#071717'}}>What does UPC mean?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{marginLeft: 10, fontSize:18, fontWeight: 400, fontfamily: 'lato', color: '#071717'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mi,
             ut blandit nulla elementum pellentesque amet. Mauris, interdum neque enim rhoncus sed eget habitant cras enim. 
            </Typography>
            </AccordionDetails>
        </Accordion>
        </AccordionDetails>
        <AccordionDetails>
            <Accordion>
            <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{marginLeft: 10, fontSize:21, fontWeight: 700, fontfamily: 'lato', color: '#071717'}}>Why should I provide my trademark Information?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{marginLeft: 10, fontSize:18, fontWeight: 400, fontfamily: 'lato', color: '#071717'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mi,
             ut blandit nulla elementum pellentesque amet. Mauris, interdum neque enim rhoncus sed eget habitant cras enim. 
            </Typography>
            </AccordionDetails>
        </Accordion>
        </AccordionDetails>
        <AccordionDetails>
            <Accordion>
            <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{marginLeft: 10, fontSize:21, fontWeight: 700, fontfamily: 'lato', color: '#071717'}}>What if I’m not the manufacturer?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{marginLeft: 10, fontSize:18, fontWeight: 400, fontfamily: 'lato', color: '#071717'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mi,
             ut blandit nulla elementum pellentesque amet. Mauris, interdum neque enim rhoncus sed eget habitant cras enim. 
            </Typography>
            </AccordionDetails>
        </Accordion>
        </AccordionDetails>
        <AccordionDetails>
            <Accordion>
            <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{marginLeft: 10, fontSize:21, fontWeight: 700, fontfamily: 'lato', color: '#071717'}}>How can I use my remaining Account credits?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{marginLeft: 10, fontSize:18, fontWeight: 400, fontfamily: 'lato', color: '#071717'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mi,
             ut blandit nulla elementum pellentesque amet. Mauris, interdum neque enim rhoncus sed eget habitant cras enim. 
            </Typography>
            </AccordionDetails>
        </Accordion>
        </AccordionDetails>
        <AccordionDetails>
            <Accordion>
            <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{marginLeft: 10, fontSize:21, fontWeight: 700, fontfamily: 'lato', color: '#071717'}}>What if I don’t have a store name?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{marginLeft: 10, fontSize:18, fontWeight: 400, fontfamily: 'lato', color: '#071717'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mi,
             ut blandit nulla elementum pellentesque amet. Mauris, interdum neque enim rhoncus sed eget habitant cras enim. 
            </Typography>
            </AccordionDetails>
        </Accordion>
        </AccordionDetails>
        
           
      </Accordion>
   

      <Accordion>
        <AccordionSummary
          expandIcon={<GrFormAdd />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{display: 'flex', alignItems: 'center'}}>
            <HiOutlineTruck style={{marginLeft: 10, fontSize:30, color: '#1B5958'}}/>
            <p style={{marginLeft: 10, fontSize:30, fontWeight: 600, fontfamily: 'lato', color: '#071717'}}>Warranty</p>
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Accordion>
            <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{marginLeft: 10, fontSize:21, fontWeight: 700, fontfamily: 'lato', color: '#071717'}}>What is a store name?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{marginLeft: 10, fontSize:18, fontWeight: 400, fontfamily: 'lato', color: '#071717'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mi,
             ut blandit nulla elementum pellentesque amet. Mauris, interdum neque enim rhoncus sed eget habitant cras enim. 
            </Typography>
            </AccordionDetails>
        </Accordion>
        </AccordionDetails>
        <AccordionDetails>
            <Accordion>
            <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{marginLeft: 10, fontSize:21, fontWeight: 700, fontfamily: 'lato', color: '#071717'}}>Can I update a store name later?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{marginLeft: 10, fontSize:18, fontWeight: 400, fontfamily: 'lato', color: '#071717'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mi,
             ut blandit nulla elementum pellentesque amet. Mauris, interdum neque enim rhoncus sed eget habitant cras enim. 
            </Typography>
            </AccordionDetails>
        </Accordion>
        </AccordionDetails>
        <AccordionDetails>
            <Accordion>
            <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{marginLeft: 10, fontSize:21, fontWeight: 700, fontfamily: 'lato', color: '#071717'}}>What does UPC mean?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{marginLeft: 10, fontSize:18, fontWeight: 400, fontfamily: 'lato', color: '#071717'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mi,
             ut blandit nulla elementum pellentesque amet. Mauris, interdum neque enim rhoncus sed eget habitant cras enim. 
            </Typography>
            </AccordionDetails>
        </Accordion>
        </AccordionDetails>
        <AccordionDetails>
            <Accordion>
            <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{marginLeft: 10, fontSize:21, fontWeight: 700, fontfamily: 'lato', color: '#071717'}}>Why should I provide my trademark Information?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{marginLeft: 10, fontSize:18, fontWeight: 400, fontfamily: 'lato', color: '#071717'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mi,
             ut blandit nulla elementum pellentesque amet. Mauris, interdum neque enim rhoncus sed eget habitant cras enim. 
            </Typography>
            </AccordionDetails>
        </Accordion>
        </AccordionDetails>
        <AccordionDetails>
            <Accordion>
            <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{marginLeft: 10, fontSize:21, fontWeight: 700, fontfamily: 'lato', color: '#071717'}}>What if I’m not the manufacturer?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{marginLeft: 10, fontSize:18, fontWeight: 400, fontfamily: 'lato', color: '#071717'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mi,
             ut blandit nulla elementum pellentesque amet. Mauris, interdum neque enim rhoncus sed eget habitant cras enim. 
            </Typography>
            </AccordionDetails>
        </Accordion>
        </AccordionDetails>
        <AccordionDetails>
            <Accordion>
            <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{marginLeft: 10, fontSize:21, fontWeight: 700, fontfamily: 'lato', color: '#071717'}}>How can I use my remaining Account credits?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{marginLeft: 10, fontSize:18, fontWeight: 400, fontfamily: 'lato', color: '#071717'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mi,
             ut blandit nulla elementum pellentesque amet. Mauris, interdum neque enim rhoncus sed eget habitant cras enim. 
            </Typography>
            </AccordionDetails>
        </Accordion>
        </AccordionDetails>
        <AccordionDetails>
            <Accordion>
            <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{marginLeft: 10, fontSize:21, fontWeight: 700, fontfamily: 'lato', color: '#071717'}}>What if I don’t have a store name?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{marginLeft: 10, fontSize:18, fontWeight: 400, fontfamily: 'lato', color: '#071717'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mi,
             ut blandit nulla elementum pellentesque amet. Mauris, interdum neque enim rhoncus sed eget habitant cras enim. 
            </Typography>
            </AccordionDetails>
        </Accordion>
        </AccordionDetails>
        
           
      </Accordion>
   

      <Accordion>
        <AccordionSummary
          expandIcon={<GrFormAdd />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{display: 'flex', alignItems: 'center'}}>
            <HiOutlineTruck style={{marginLeft: 10, fontSize:30, color: '#1B5958'}}/>
            <p style={{marginLeft: 10, fontSize:30, fontWeight: 600, fontfamily: 'lato', color: '#071717'}}>Shipping Charges</p>
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Accordion>
            <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{marginLeft: 10, fontSize:21, fontWeight: 700, fontfamily: 'lato', color: '#071717'}}>What is a store name?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{marginLeft: 10, fontSize:18, fontWeight: 400, fontfamily: 'lato', color: '#071717'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mi,
             ut blandit nulla elementum pellentesque amet. Mauris, interdum neque enim rhoncus sed eget habitant cras enim. 
            </Typography>
            </AccordionDetails>
        </Accordion>
        </AccordionDetails>
        <AccordionDetails>
            <Accordion>
            <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{marginLeft: 10, fontSize:21, fontWeight: 700, fontfamily: 'lato', color: '#071717'}}>Can I update a store name later?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{marginLeft: 10, fontSize:18, fontWeight: 400, fontfamily: 'lato', color: '#071717'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mi,
             ut blandit nulla elementum pellentesque amet. Mauris, interdum neque enim rhoncus sed eget habitant cras enim. 
            </Typography>
            </AccordionDetails>
        </Accordion>
        </AccordionDetails>
        <AccordionDetails>
            <Accordion>
            <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{marginLeft: 10, fontSize:21, fontWeight: 700, fontfamily: 'lato', color: '#071717'}}>What does UPC mean?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{marginLeft: 10, fontSize:18, fontWeight: 400, fontfamily: 'lato', color: '#071717'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mi,
             ut blandit nulla elementum pellentesque amet. Mauris, interdum neque enim rhoncus sed eget habitant cras enim. 
            </Typography>
            </AccordionDetails>
        </Accordion>
        </AccordionDetails>
        <AccordionDetails>
            <Accordion>
            <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{marginLeft: 10, fontSize:21, fontWeight: 700, fontfamily: 'lato', color: '#071717'}}>Why should I provide my trademark Information?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{marginLeft: 10, fontSize:18, fontWeight: 400, fontfamily: 'lato', color: '#071717'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mi,
             ut blandit nulla elementum pellentesque amet. Mauris, interdum neque enim rhoncus sed eget habitant cras enim. 
            </Typography>
            </AccordionDetails>
        </Accordion>
        </AccordionDetails>
        <AccordionDetails>
            <Accordion>
            <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{marginLeft: 10, fontSize:21, fontWeight: 700, fontfamily: 'lato', color: '#071717'}}>What if I’m not the manufacturer?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{marginLeft: 10, fontSize:18, fontWeight: 400, fontfamily: 'lato', color: '#071717'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mi,
             ut blandit nulla elementum pellentesque amet. Mauris, interdum neque enim rhoncus sed eget habitant cras enim. 
            </Typography>
            </AccordionDetails>
        </Accordion>
        </AccordionDetails>
        <AccordionDetails>
            <Accordion>
            <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{marginLeft: 10, fontSize:21, fontWeight: 700, fontfamily: 'lato', color: '#071717'}}>How can I use my remaining Account credits?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{marginLeft: 10, fontSize:18, fontWeight: 400, fontfamily: 'lato', color: '#071717'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mi,
             ut blandit nulla elementum pellentesque amet. Mauris, interdum neque enim rhoncus sed eget habitant cras enim. 
            </Typography>
            </AccordionDetails>
        </Accordion>
        </AccordionDetails>
        <AccordionDetails>
            <Accordion>
            <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{marginLeft: 10, fontSize:21, fontWeight: 700, fontfamily: 'lato', color: '#071717'}}>What if I don’t have a store name?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{marginLeft: 10, fontSize:18, fontWeight: 400, fontfamily: 'lato', color: '#071717'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mi,
             ut blandit nulla elementum pellentesque amet. Mauris, interdum neque enim rhoncus sed eget habitant cras enim. 
            </Typography>
            </AccordionDetails>
        </Accordion>
        </AccordionDetails>
        
           
      </Accordion>
   

      <Accordion>
        <AccordionSummary
          expandIcon={<GrFormAdd />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{display: 'flex', alignItems: 'center'}}>
            <HiOutlineTruck style={{marginLeft: 10, fontSize:30, color: '#1B5958'}}/>
            <p style={{marginLeft: 10, fontSize:30, fontWeight: 600, fontfamily: 'lato', color: '#071717'}}>Exchange</p>
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Accordion>
            <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{marginLeft: 10, fontSize:21, fontWeight: 700, fontfamily: 'lato', color: '#071717'}}>What is a store name?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{marginLeft: 10, fontSize:18, fontWeight: 400, fontfamily: 'lato', color: '#071717'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mi,
             ut blandit nulla elementum pellentesque amet. Mauris, interdum neque enim rhoncus sed eget habitant cras enim. 
            </Typography>
            </AccordionDetails>
        </Accordion>
        </AccordionDetails>
        <AccordionDetails>
            <Accordion>
            <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{marginLeft: 10, fontSize:21, fontWeight: 700, fontfamily: 'lato', color: '#071717'}}>Can I update a store name later?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{marginLeft: 10, fontSize:18, fontWeight: 400, fontfamily: 'lato', color: '#071717'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mi,
             ut blandit nulla elementum pellentesque amet. Mauris, interdum neque enim rhoncus sed eget habitant cras enim. 
            </Typography>
            </AccordionDetails>
        </Accordion>
        </AccordionDetails>
        <AccordionDetails>
            <Accordion>
            <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{marginLeft: 10, fontSize:21, fontWeight: 700, fontfamily: 'lato', color: '#071717'}}>What does UPC mean?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{marginLeft: 10, fontSize:18, fontWeight: 400, fontfamily: 'lato', color: '#071717'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mi,
             ut blandit nulla elementum pellentesque amet. Mauris, interdum neque enim rhoncus sed eget habitant cras enim. 
            </Typography>
            </AccordionDetails>
        </Accordion>
        </AccordionDetails>
        <AccordionDetails>
            <Accordion>
            <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{marginLeft: 10, fontSize:21, fontWeight: 700, fontfamily: 'lato', color: '#071717'}}>Why should I provide my trademark Information?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{marginLeft: 10, fontSize:18, fontWeight: 400, fontfamily: 'lato', color: '#071717'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mi,
             ut blandit nulla elementum pellentesque amet. Mauris, interdum neque enim rhoncus sed eget habitant cras enim. 
            </Typography>
            </AccordionDetails>
        </Accordion>
        </AccordionDetails>
        <AccordionDetails>
            <Accordion>
            <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{marginLeft: 10, fontSize:21, fontWeight: 700, fontfamily: 'lato', color: '#071717'}}>What if I’m not the manufacturer?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{marginLeft: 10, fontSize:18, fontWeight: 400, fontfamily: 'lato', color: '#071717'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mi,
             ut blandit nulla elementum pellentesque amet. Mauris, interdum neque enim rhoncus sed eget habitant cras enim. 
            </Typography>
            </AccordionDetails>
        </Accordion>
        </AccordionDetails>
        <AccordionDetails>
            <Accordion>
            <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{marginLeft: 10, fontSize:21, fontWeight: 700, fontfamily: 'lato', color: '#071717'}}>How can I use my remaining Account credits?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{marginLeft: 10, fontSize:18, fontWeight: 400, fontfamily: 'lato', color: '#071717'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mi,
             ut blandit nulla elementum pellentesque amet. Mauris, interdum neque enim rhoncus sed eget habitant cras enim. 
            </Typography>
            </AccordionDetails>
        </Accordion>
        </AccordionDetails>
        <AccordionDetails>
            <Accordion>
            <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{marginLeft: 10, fontSize:21, fontWeight: 700, fontfamily: 'lato', color: '#071717'}}>What if I don’t have a store name?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{marginLeft: 10, fontSize:18, fontWeight: 400, fontfamily: 'lato', color: '#071717'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mi,
             ut blandit nulla elementum pellentesque amet. Mauris, interdum neque enim rhoncus sed eget habitant cras enim. 
            </Typography>
            </AccordionDetails>
        </Accordion>
        </AccordionDetails>
        
           
      </Accordion>
   

      <Accordion>
        <AccordionSummary
          expandIcon={<GrFormAdd />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          style={{ boxShadow: "none" }}
          elevation={0}
        >
          <Typography style={{display: 'flex', alignItems: 'center'}}>
            <HiOutlineTruck style={{marginLeft: 10, fontSize:30, color: '#1B5958'}}/>
            <p style={{marginLeft: 10, fontSize:30, fontWeight: 600, fontfamily: 'lato', color: '#071717'}}>Service Centers</p>
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Accordion>
            <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{marginLeft: 10, fontSize:21, fontWeight: 700, fontfamily: 'lato', color: '#071717'}}>What is a store name?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{marginLeft: 10, fontSize:18, fontWeight: 400, fontfamily: 'lato', color: '#071717'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mi,
             ut blandit nulla elementum pellentesque amet. Mauris, interdum neque enim rhoncus sed eget habitant cras enim. 
            </Typography>
            </AccordionDetails>
        </Accordion>
        </AccordionDetails>
        <AccordionDetails>
            <Accordion>
            <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{marginLeft: 10, fontSize:21, fontWeight: 700, fontfamily: 'lato', color: '#071717'}}>Can I update a store name later?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{marginLeft: 10, fontSize:18, fontWeight: 400, fontfamily: 'lato', color: '#071717'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mi,
             ut blandit nulla elementum pellentesque amet. Mauris, interdum neque enim rhoncus sed eget habitant cras enim. 
            </Typography>
            </AccordionDetails>
        </Accordion>
        </AccordionDetails>
        <AccordionDetails>
            <Accordion>
            <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{marginLeft: 10, fontSize:21, fontWeight: 700, fontfamily: 'lato', color: '#071717'}}>What does UPC mean?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{marginLeft: 10, fontSize:18, fontWeight: 400, fontfamily: 'lato', color: '#071717'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mi,
             ut blandit nulla elementum pellentesque amet. Mauris, interdum neque enim rhoncus sed eget habitant cras enim. 
            </Typography>
            </AccordionDetails>
        </Accordion>
        </AccordionDetails>
        <AccordionDetails>
            <Accordion>
            <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{marginLeft: 10, fontSize:21, fontWeight: 700, fontfamily: 'lato', color: '#071717'}}>Why should I provide my trademark Information?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{marginLeft: 10, fontSize:18, fontWeight: 400, fontfamily: 'lato', color: '#071717'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mi,
             ut blandit nulla elementum pellentesque amet. Mauris, interdum neque enim rhoncus sed eget habitant cras enim. 
            </Typography>
            </AccordionDetails>
        </Accordion>
        </AccordionDetails>
        <AccordionDetails>
            <Accordion>
            <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{marginLeft: 10, fontSize:21, fontWeight: 700, fontfamily: 'lato', color: '#071717'}}>What if I’m not the manufacturer?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{marginLeft: 10, fontSize:18, fontWeight: 400, fontfamily: 'lato', color: '#071717'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mi,
             ut blandit nulla elementum pellentesque amet. Mauris, interdum neque enim rhoncus sed eget habitant cras enim. 
            </Typography>
            </AccordionDetails>
        </Accordion>
        </AccordionDetails>
        <AccordionDetails>
            <Accordion>
            <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{marginLeft: 10, fontSize:21, fontWeight: 700, fontfamily: 'lato', color: '#071717'}}>How can I use my remaining Account credits?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{marginLeft: 10, fontSize:18, fontWeight: 400, fontfamily: 'lato', color: '#071717'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mi,
             ut blandit nulla elementum pellentesque amet. Mauris, interdum neque enim rhoncus sed eget habitant cras enim. 
            </Typography>
            </AccordionDetails>
        </Accordion>
        </AccordionDetails>
        <AccordionDetails>
            <Accordion>
            <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{marginLeft: 10, fontSize:21, fontWeight: 700, fontfamily: 'lato', color: '#071717'}}>What if I don’t have a store name?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{marginLeft: 10, fontSize:18, fontWeight: 400, fontfamily: 'lato', color: '#071717'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mi,
             ut blandit nulla elementum pellentesque amet. Mauris, interdum neque enim rhoncus sed eget habitant cras enim. 
            </Typography>
            </AccordionDetails>
        </Accordion>
        </AccordionDetails>
        
           
      </Accordion>
   
   
    </div>
  );
}

export default FaqAccordion