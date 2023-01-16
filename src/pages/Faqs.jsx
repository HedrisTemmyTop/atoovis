import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import {AiOutlineSearch} from 'react-icons/ai'
import Stack from "@mui/material/Stack";
import "../styles/Buyer/Terms.css";
import faq from '../assets/images/Header/Rectangle 9090.png'
import FaqAccordion from "../components/FaqAccordion";

const Faqs =()=>{
    const breadcrumbs = [
        <Link to="/" key="2" color="#061F1E">
          Home
        </Link>,
        <Link to="/" key="2" color="#061F1E">
        Help
      </Link>,
        <Typography
          key="3"
          color="#061F1E"
          style={{ fontSize: 14, fontWeight: 700 }}
        >
          FAQs
        </Typography>,
      ];
    return(
        <div>
            <Header/>
            <Navigation/>
            <div className="bread">
        <Stack spacing={1}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </div>

      <div className="faq-img">
        <img src={faq} alt="" />
      </div>

      <div className="faq">
        <div style={{marginTop: 20}}>
            <h1>Frequently Asked Questions</h1>
            <div className="write">
                <AiOutlineSearch/>
                <input type="text" placeholder="Write your question here...."/>
            </div>
        </div>

      </div>

      <div className="faq">
        <div className="acr">
        <FaqAccordion/>
        </div>
      </div>
        </div>

    

    )
}

export default Faqs