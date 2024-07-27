"use client";
import { data } from "@/app/utils/data";
import { formatNumber } from "@/app/utils/helper";
import Link from "next/link";
import ModelForm from "@/app/components/DynamicForm/ModelForm";
import { useState, useEffect, use, ReactNode } from "react";
import AudioWave from "@/app/components/AudioWave";
import Image from "next/image";
import JsonFormatter from "react-json-formatter";
import MetricsContainer from "@/app/components/MetricsContainer";
import Loader from "@/app/components/Loader";

interface OutputData {
  completed_at: string;
  created_at: string;
  error: string | null;
  input: {
    top_p: number;
    prompt: string;
    temperature: number;
  };
  metrics: {
    total_time: number;
    input_token_count?: number;
    tokens_per_second?: number;
    output_token_count?: number;
    predict_time?: number;
    time_to_first_token?: number;
  };
  output: string[];
  started_at: string;
  status: string;
}

const defaultData = {
  completed_at: "2024-05-03T13:45:15.445073Z",
  created_at: "2024-05-03T13:45:13.788000Z",
  error: null,
  input: {
    top_p: 0.95,
    prompt:
      "Johnny has 8 billion parameters. His friend Tommy has 70 billion parameters. What does this mean when it comes to speed?",
    temperature: 0.7,
  },
  metrics: {
    total_time: 1.657073,
    input_token_count: 39,
    tokens_per_second: 92.80206135476371,
    output_token_count: 149,
    predict_time: 1.652461,
    time_to_first_token: 0.060728942999999994,
  },
  output: [
    // "https://pbxt.replicate.delivery/YXbcLudoHBIYHV6L0HbcTx5iRzLFMwygLr3vhGpZI35caXbE/out-0.png",
    `The number of parameters in a neural network can impact its speed, but it's not the only factor.

    In general, a larger number of parameters can lead to:
    
    1. Increased computational complexity: More parameters mean more calculations are required to process the data.
    2. Increased memory requirements: Larger models require more memory to store their parameters, which can impact system performance.
    
    However, it's worth noting that the relationship between the number of parameters and speed is not always linear. Other factors, such as:
    
    * Model architecture
    * Optimizer choice
    * Hyperparameter tuning
    
    can also impact the speed of a neural network.
    
    In the case of Johnny and Tommy, it's difficult to say which one's model will be faster without more information about the models themselves.`,
  ],
  started_at: "2024-05-03T13:45:13.792612Z",
  status: "succeeded",
};
const page = ({ params }: { params: { owner: string; model: string } }) => {
  const model = data.find((obj) => {
    return obj.owner === params.owner && obj.title === params.model;
  });

  const [resData, setResData] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<"preview" | "json">("preview");
  const [outputData, setOutputData] = useState<OutputData>(defaultData);
  useEffect(() => {
    // const fetchData = async () => {
    //   setLoading(true);
    //   const res = await fetch(`/api/${model?.title}`);
    //   const data = await res.json();
    //   setResData(data.data);
    //   console.log(data.data);
    //   setLoading(false);
    // };
    // fetchData();
  }, [model]);
  const parsedOutput = outputData.output[0];
  return (
    <div className="px-24 mt-10">
      <div className="flex-1 flex gap-5 self-stretch pb-6 max-md:flex-wrap">
        <div className="flex flex-col  px-5">
          <div className="flex gap-3 pr-20 max-md:flex-wrap max-md:pr-5">
            {/* <span className=" italic text-lg">f</span> */}
            <div className="flex gap-1.5 px-0.5">
              <span className="text-3xl leading-10 underline text-zinc-500">
                {model?.owner}
              </span>
              <div className="my-auto text-3xl leading-10 text-black">
                <span className="text-zinc-500">/</span>
                <span className="text-black"> {model?.title} </span>
              </div>
              {/* <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d419ff996c3308216dc52c39385496cbc6174731cbad452d90c95d2fd8e14bb?"
                className="shrink-0 self-start w-4 aspect-square"
              /> */}
            </div>
          </div>
          <div className="mt-1 text-base leading-6 text-black max-md:max-w-full">
            Create videos from illustrated input images
          </div>
          <div className="flex flex-wrap gap-3 content-center pr-20 mt-3 text-sm leading-5 text-black max-md:pr-5">
            <div className="flex gap-1.5 px-2.5 py-1 text-green-700 whitespace-nowrap bg-green-50 rounded-full shadow-sm">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c4c8b972e5495e1187014b1588714b67035cbb5f59c57c3f4e08a4fba13e6c3?"
                className="shrink-0 my-auto w-3.5 aspect-square"
              />
              <div>{model?.cold_boot_status}</div>
            </div>
            <div className="flex gap-1.5 px-2.5 py-1 whitespace-nowrap rounded-full shadow-sm bg-stone-50 text-neutral-800">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa5c0a9fdd5494ede8dbc97a6ea867ae9777ae98654e96c36333db84f9e8ffca?"
                className="shrink-0 my-auto aspect-square w-[15px]"
              />
              <div>{model?.private ? "Private" : "Public"}</div>
            </div>
            {/* <div className="flex gap-1.5 justify-center px-2.5 py-1 rounded-full shadow-sm bg-stone-50 leading-[145%] text-neutral-800">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c8823030f40a601e342d0080fdefd424a3c3797e909175a0c1573a4924e7941?"
                className="shrink-0 self-start w-4 aspect-[1.06]"
              />
              <div>{formatNumber(model?.total_runs || 0)} runs</div>
            </div> */}
            <div className="flex gap-1.5 py-0.5 my-auto whitespace-nowrap leading-[146%]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c103518ccc9c1627cebb6292a3fdb64fed590ac9ba28dd7c780710bee155e9aa?"
                className="shrink-0 self-start aspect-square w-[18px]"
              />
              <Link
                href={model?.github_link || "#"}
                target="_blank"
                className="underline"
              >
                GitHub
              </Link>
            </div>
            <div className="flex gap-1.5 py-0.5 my-auto whitespace-nowrap leading-[145%]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/67347950e19baf0422c220a64958350b050999daf26f4ffa518e520577fc1fb3?"
                className="shrink-0 self-start aspect-[0.94] w-[17px]"
              />
              <Link
                href={model?.license_link || "#"}
                target="_blank"
                className="underline"
              >
                License
              </Link>
            </div>
            {/* <div className="flex gap-1.5 py-0.5 my-auto whitespace-nowrap leading-[146%]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd461a2daa499a83bee9b24c712a9f8aec3c2a30a8a7b739c847c1fee52ab26a?"
                className="shrink-0 self-start aspect-square w-[18px]"
              />
              <div className="underline">License</div>
            </div> */}
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="flex-1 shrink-0">
          {model ? (
            <ModelForm model={model} setLoading={setLoading} setOutputData={setOutputData}/>
          ) : (
            <div>Model not found</div>
          )}
        </div>
        <div className="flex-1 shrink-0 max-w-[50%] pb-20">
          <div className="flex flex-col  text-sm">
            <div className="self-stretch w-full text-2xl leading-8 text-black max-md:max-w-full">
              Output
            </div>
            <div className="flex gap-5  py-px pr-20 mt-2 text-center border-b border-solid border-zinc-300 w-full">
              <button
                className={`pt-2.5 pb-3 ${
                  activeTab == "preview"
                    ? "border-b-2 border-solid border-neutral-800"
                    : "text-stone-500 "
                }`}
                onClick={() => {
                  setActiveTab("preview");
                }}
              >
                Preview
              </button>
              <button
                className={`justify-center py-3 leading-[145%] ${
                  activeTab == "json"
                    ? "border-b-2 border-solid border-neutral-800"
                    : "text-stone-500 "
                }`}
                onClick={() => {
                  setActiveTab("json");
                }}
              >
                JSON
              </button>
            </div>

            {loading ? (
              <Loader />
            ) : (
              <OutputViewerContainer
                activeTab={activeTab}
                outputData={outputData}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
const OutputViewerContainer = ({
  activeTab,
  outputData,
}: {
  activeTab: "json" | "preview";
  outputData: OutputData;
}) => {
  return (
    <>
      {activeTab == "preview" ? (
        <ParsedOutput output={outputData.output} />
      ) : (
        <div className="my-4">
          <OutputWrapper>
            <JsonFormatter json={JSON.stringify(outputData)} tabWith={4} />
          </OutputWrapper>
        </div>
      )}
      <MetricsContainer data={outputData.metrics} />
    </>
  );
};
const OutputWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full bg-[#f0f0f0] p-3 max-h-[500px] overflow-y-auto text-base">
      {children}
    </div>
  );
};
const ParsedOutput = ({ output }: { output: string[] }) => {
  const outputEl = output[0];
  if (outputEl.endsWith(".png")) {
    return (
      <div className="w-full my-4">
        <img src={outputEl} alt="" className="w-full" />
      </div>
    );
  }
  if (outputEl.endsWith(".wav")) {
    return (
      <div className="w-full my-4">
        <AudioWave link={outputEl} />
      </div>
    );
  }
  return (
    <div className="my-4">
      <OutputWrapper>
        <p>{outputEl}</p>
      </OutputWrapper>
    </div>
  );
};
export default page;
