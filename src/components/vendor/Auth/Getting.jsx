import React, { useState } from "react";
import GeneralLayout from "../../GettingStarted/Layout/GeneralLayout";
import Welcome from "./Welcome";
import Create from "./Create";
import BusinessDetail from "./BusinessDetails";
import SellerDetail from "./SellerDetails";
import PaymentDetail from "./PaymentDetails";
import StoreDetail from "./Store";
import Verification from "./Verification";
import Summary from "./Summary";
import Identity from "./Identity";
import Congrat from "./Congrat";
import useForm from "../../../hooks/useForm";
import useFilesForm from "../../../hooks/useFilesForm";

const Getting = () => {
  const [value, setValue] = useState(1);
  const {fileData, handleFileUpload} = useFilesForm({
    cac_document:"",
    business_owner_id:"",
    bank_statement:"",
    additonal_document:"",
  })
  
  const { formData, handleInputChange } = useForm({
    business_name: "",
    business_type: "",
    confirm_bussiness: false,
    cac_number: "",
    state: "",
    lga: "",
    business_address: "",
    business_email: "",
    seller_country: "",
    seller_address: "",
    offical_email_address: "",
    mobile_number: "",
    manufacural_or_brandOwnner: "",
    accountNumber: "",
    accountName: "",
    bank: "",
    card_number: "",
    expireDate: "",
    payout_frequency: "",
    cvv: "",
    storeName: "",
    ups: "",
    owner: "",
    registered_trademark: "",
  });



  return (
    <GeneralLayout values={value}>
      {value === 1 && <Welcome setValue={setValue} />}
      {value === 2 && <Create setValue={setValue} />}
      {value === 3 && (
        <BusinessDetail
          inputs={formData}
          onchange={handleInputChange}
          setValue={setValue}
        />
      )}
      {value === 4 && (
        <SellerDetail
          inputs={formData}
          setValue={setValue}
          onchange={handleInputChange}
        />
      )}
      {value === 5 && (
        <PaymentDetail
          setValue={setValue}
          inputs={formData}
          onchange={handleInputChange}
        />
      )}
      {value === 6 && (
        <StoreDetail
          setValue={setValue}
          inputs={formData}
          onchange={handleInputChange}
        />
      )}
      {value === 7 && (
        <Verification
          setValue={setValue}
          inputs={fileData}
          onchange={handleFileUpload}
        />
      )}
      {value === 8 && (
        <Summary
        fileData={fileData}
          data={formData}
          setValue={setValue}
        />
      )}
      {value === 9 && <Identity setValue={setValue} />}
      {value === 10 && <Congrat setValue={setValue} />}
    </GeneralLayout>
  );
};

export default Getting;
