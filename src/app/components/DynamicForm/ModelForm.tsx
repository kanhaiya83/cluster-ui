"use client";
import { useState } from "react";
import InputField from "./InputFields";
import type { DataItem } from "@/app/utils/data";

const ModelForm = ({ model }: { model: DataItem }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (id: string, value: string | number | boolean) => {
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
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
        <button type="submit">Run</button>
      </form>
    </div>
  );
};

export default ModelForm;
