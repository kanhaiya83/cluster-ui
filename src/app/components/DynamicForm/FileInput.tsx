"use client"
import React, { LegacyRef, useEffect, useRef, useState } from 'react'
import type { InputParam } from "@/app/utils/data";

const FileInput = ({param,handleChange}:{param:InputParam,handleChange:any}) => {
    const [file, setFile] = useState(null);
    const inputRef = useRef<LegacyRef<HTMLInputElement>>()
    const { type, id, title, required, min, max,default_value } = param;
    useEffect(()=>{
        if(file){
            const reader = new FileReader();
            reader.onloadend = () => {
                if(!reader.result)return
                const base64Image = reader.result?.split(',')[1]; // Get base64 string without the data URL prefix
                console.log(base64Image)
                handleChange(id,base64Image)
              };
          
              reader.readAsDataURL(file);
        }
    },[file])
  return (
    <div>
    <div className="flex flex-wrap gap-5 justify-between content-center mt-5 w-full max-md:max-w-full">
      <div className="flex gap-0 justify-between whitespace-nowrap">
        <div className="flex gap-1.5 text-base leading-6 text-black">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5092735cf414a4b839f767b00583654df1092131bf9ab8559c686f1079d2ba4?"
            className="shrink-0 my-auto w-3.5 aspect-square"
          />
          <div>{title}</div>
        </div>
        <div className="my-auto text-sm leading-5 ms-2  text-zinc-500">
          file
        </div>
      </div>
      <div className="my-auto text-sm leading-5 text-zinc-500">
        required
      </div>
    </div>
    <div className="flex gap-4 justify-between px-2 mt-2 text-base leading-6 text-black whitespace-nowrap max-md:flex-wrap">
      <button
      type='button'
        onClick={(e) => console.log(inputRef.current.click())}
        className=" w-full justify-center p-2.5 bg-white border border-black border-solid"
      >
        {file ? `Selected file:${file?.name}` : "Choose Image"}
        </button>   
      <input
        id={id}
        min={min}
        max={max}
        type="file"
        ref={inputRef}
        onChange={(e) => setFile(e.target?.files[0])}
        className="hidden"
      />    
         </div>
  </div>
  )
}

export default FileInput