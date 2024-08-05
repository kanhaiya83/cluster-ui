"use client";
import { Dispatch, SetStateAction, useState } from "react";
import InputField from "./InputFields";
import type { DataItem } from "@/app/utils/data";
import axios from "axios"
const ModelForm = ({ model,setLoading ,setOutputData}: { model: DataItem,setLoading:Dispatch<SetStateAction<boolean>> ,setOutputData:any}) => {
  const defaultFormData:any ={}
  model.inputParams.forEach(ip=>{
      if(ip.default_value){
        defaultFormData[ip.id] = ip.default_value
      }
  })
  const [formData, setFormData] = useState(defaultFormData);

  const handleChange = (id: string, value: string | number | boolean) => {
    setFormData((prevData:any) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try{console.log(formData);
    setLoading(true)
    const res = await axios.post(model.inference_url,formData)
    console.log(res.data)
    setOutputData(res.data)
    setLoading(false)}
    catch(e){
      console.log(e)
      alert("Some error occurred")
      setLoading(false)
    }

  };

  return (
    <div>
      <form
        className="flex flex-col px-5 gap-8 mt-10 pb-2.5 max-w-[848px]"
        onSubmit={handleSubmit}
      >
        {model.inputParams.map((param) => (
          <InputField
            key={param.id}
            param={param}
            handleChange={handleChange}
            formData={formData}
          />
        ))}
        <div className="flex gap-2 items-center bottom-0">
        {/* <button type="button" className="border border-black py-2 px-5">Reset</button> */}
        <button type="submit" className="bg-black text-white py-2 px-5">Run</button>
        </div>
      </form>
    </div>
  );
};

export default ModelForm;
