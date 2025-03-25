import { useState } from "react";
import { Personal } from "./components/Personal";
import Education from "./components/Education";
import Experience from "./components/Experience";
import View from "./components/View";



export default function App() {

  const [formData1, setFormData1] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const [formData2, setFormData2] = useState([
    {
        institute: '',
        study: '',
        timeline: '',
        score: '',
    }
  ]
  );

  const [formData3, setFormData3] = useState([
    {
      company: '',
      position: '',
      timeline: '',
      description: ''
    }

  ]
);

  return (
    <>
  <div className="flex justify-center">
    
    <div className="flex gap-20 sm:flex-wrap justify-center">
     
     <div className='flex flex-col mt-10 p-7 w-120'>
       <Personal formData={formData1} setFormData={setFormData1} />
       <Education formData={formData2} setFormData={setFormData2}/>
       <Experience formData={formData3} setFormData={setFormData3}/>
      </div>

     
      <div className="w-210 mt-20 border-2 border-amber-400 border-none m-6">
      <View Personal={formData1} Education={formData2} Experience={formData3}/>
      </div>
    </div>

  </div>

   
    </>
 
  );
}
