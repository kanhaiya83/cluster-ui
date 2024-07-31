import type { InputParam } from "@/app/utils/data";
import FileInput from "./FileInput";

const InputField = ({
  param,
  handleChange,
  formData,
}: {
  param: InputParam;
  handleChange: (id: string, value: string | number | boolean) => void;
  formData: any;
}) => {
  const { type, id, title, required, min, max,default_value } = param;

  if (type === "string") {
    return (
      <div>
        <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-0 justify-between whitespace-nowrap">
            <div className="flex gap-1.5 text-base leading-6 text-black">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a51c3907cba0af878cc73bb081527f0a03b92b50df363e74d39c1737929faac?"
                className="shrink-0 my-auto w-3.5 aspect-square"
              />
              <div>{title}</div>
            </div>
            <div className="my-auto text-sm leading-5 ms-2 text-zinc-500">
              {type}
            </div>
          </div>
          <div className="flex gap-0 my-auto text-xs leading-4 text-zinc-500">
            <div className="justify-center px-1.5 py-0.5 whitespace-nowrap  border border-solid bg-zinc-50">
              Shift
            </div>
            <div> + </div>
            <div className="justify-center px-1.5 py-0.5 whitespace-nowrap  border border-solid bg-zinc-50">
              Return
            </div>
            <div>to add a new line</div>
          </div>
        </div>
        <textarea
        rows={4}
          id={id}
          className="mt-2 w-full p-2.5 bg-white border border-black border-solid min-h-[42px] max-md:max-w-full"
          required={required}
            defaultValue={default_value}
            onChange={(e) => handleChange(id, e.target.value)}
        />
      </div>
    );
  } else if (type === "integer") {
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
              number
            </div>
          </div>
          <div className="my-auto text-sm leading-5 text-zinc-500">
            (minimum: {min}, maximum: {max})
          </div>
        </div>
        <div className="flex gap-4 justify-between px-2 mt-2 text-base leading-6 text-black whitespace-nowrap max-md:flex-wrap">
          <input
            id={id}
            min={min}
            max={max}
            type="number"
            value={formData[id] || default_value}
            onChange={(e) => handleChange(id, parseFloat(e.target.value))}
            className=" w-full justify-center p-2.5 bg-white border border-black border-solid"
          />        </div>
      </div>
    );
  } else if (type === "number") {
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
              number
            </div>
          </div>
          <div className="my-auto text-sm leading-5 text-zinc-500">
            (minimum: {min}, maximum: {max})
          </div>
        </div>
        <div className="flex gap-4 justify-between px-2 mt-2 text-base leading-6 text-black whitespace-nowrap max-md:flex-wrap">
          <input
            id={id}
            min={min}
            max={max}
            type="number"
            step={0.01}
            value={formData[id] || default_value}
            onChange={(e) => handleChange(id, parseFloat(e.target.value))}
            className="justify-center p-2.5 bg-white border border-black border-solid"
          />

          <input
            className="w-full"
            type="range"
            id={id}
            min={min}
            max={max}
            step={0.01}
            defaultValue={default_value}
            onChange={(e) => handleChange(id, parseFloat(e.target.value))}
          />
        </div>
      </div>
    );
  }else if (type === "file") {
    return (
     <FileInput param={param} handleChange={handleChange}/>
    );
  } 
  return null;
};

export default InputField;
