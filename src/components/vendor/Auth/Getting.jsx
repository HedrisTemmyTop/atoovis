import React, {useState} from 'react'
import GeneralLayout from '../../GettingStarted/Layout/GeneralLayout'
import Welcome from './Welcome'
import Create from './Create';
import BusinessDetail from './BusinessDetails';
import SellerDetail from './SellerDetails';
import PaymentDetail from './PaymentDetails';
import StoreDetail from './Store';
import Verification from './Verification';
import Summary from './Summary'
import Identity from './Identity'
import Congrat from './Congrat';

const Getting = () => {
    const [value,setValue] = useState(1)
    return(
        <GeneralLayout values={value} >
            {value === 1 && <Welcome setValue={setValue}/>}
            {value === 2 && <Create setValue={setValue}/>}
            {value === 3 && <BusinessDetail setValue={setValue}/>}
            {value === 4 && <SellerDetail setValue={setValue}/>}
            {value === 5 && <PaymentDetail setValue={setValue}/>}
            {value === 6 && <StoreDetail setValue={setValue}/>}
            {value === 7 && <Verification setValue={setValue}/>}
            {value === 8 && <Summary setValue={setValue}/>}
            {value === 9 && <Identity setValue={setValue}/>}
            {value === 10 && <Congrat setValue={setValue}/>}
        </GeneralLayout>
    )
};



export default Getting