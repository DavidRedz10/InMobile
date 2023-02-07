import { InputWithText } from "../components/setupcomponents";
import { useState } from "react";

import Head from "next/head";
import { Card, ChakraProvider } from "@chakra-ui/react";

export default function FormValidation() {

   const [candidat, setCandidat] = useState({ lastName: '', firstName: '', email: '', phone_number: '' })
   const [startValidation, setValidation] = useState(false)

   const onClick = () => {

       setValidation(true)
       if (candidat.lastName === '' || candidat.firstName === '' || candidat.email === '' || !isEmail(candidat.email)) return

       alert('validation OK')
   }

   return (
        <ChakraProvider>
        <Card alignItems="center" margin={50} variant="unstyled">
        
       <div className="flex mt-6  justify-center w-full" >
           <div className="flex w-full p-3 mt-4  border-2 flex-col border-gray-300 rounded-md mb-4 md:w-3/4">
               <span className="font-bold text-2xl mb-4">Apply here</span>
               <InputWithText title={"Last Name"} required={true} onChange={() => { setCandidat({ ...candidat, lastName: event.target.value }) }} validate={startValidation ? candidat.lastName === '' : false} />
               <InputWithText title={"First Name"} required={true} onChange={() => { setCandidat({ ...candidat, firstName: event.target.value }) }} validate={startValidation ? candidat.firstName === '' : false} />
               <InputWithText title={"Email address"} required={true} onChange={() => { setCandidat({ ...candidat, email: event.target.value }) }} validate={startValidation ? candidat.email === '' || !isEmail(candidat.email) : false} />

               <InputWithText title={"Phone number"} required={true} onChange={() => { setCandidat({ ...candidat, phone_number: event.target.value }) }} validate={startValidation ? candidat.phone_number === '' : false} />
               <InputWithText title={"Location"} />
               <div className="m-2">
                   <button className="bg-black hover:bg-slate-800 text-white text-sm font-medium p-2 rounded " type="button" onClick={onClick} >
                       <>Submit</>
                   </button>
               </div>
           </div>
       </div>
      </Card>
      </ChakraProvider>
   )
}