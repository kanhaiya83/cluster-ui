"use client";
import { data } from "@/app/utils/data";
import { formatNumber } from "@/app/utils/helper";
import Link from "next/link";
import ModelForm from "@/app/components/DynamicForm/ModelForm";
import { useState, useEffect, use } from "react";
import AudioWave from "@/app/components/AudioWave";

const page = ({ params }: { params: { owner: string; model: string } }) => {
  const model = data.find((obj) => {
    return obj.owner === params.owner && obj.title === params.model;
  });

  const [activeTab, setActiveTab] = useState("preview");

  const [resData, setResData] = useState<any>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch(`/api/${model?.title}`);
      const data = await res.json();
      setResData(data.data);
      console.log(data.data);
      setLoading(false);
    };

    fetchData();
  }, [model]);

  return (
    <div className="px-24 mt-10">
      <div className="flex gap-5 self-stretch pb-6 max-md:flex-wrap">
        <div className="flex flex-col flex-1 px-5 max-md:max-w-full">
          <div className="flex gap-3 pr-20 max-md:flex-wrap max-md:pr-5">
            <span className=" italic text-lg">f</span>
            <div className="flex gap-1.5 px-0.5">
              <div className="text-3xl leading-10 underline text-zinc-500">
                {model?.owner}
              </div>
              <div className="my-auto text-3xl leading-10 text-black">
                <span className="text-zinc-500">/</span>
                <span className="text-black"> {model?.title} </span>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d419ff996c3308216dc52c39385496cbc6174731cbad452d90c95d2fd8e14bb?"
                className="shrink-0 self-start w-4 aspect-square"
              />
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
            <div className="flex gap-1.5 justify-center px-2.5 py-1 rounded-full shadow-sm bg-stone-50 leading-[145%] text-neutral-800">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c8823030f40a601e342d0080fdefd424a3c3797e909175a0c1573a4924e7941?"
                className="shrink-0 self-start w-4 aspect-[1.06]"
              />
              <div>{formatNumber(model?.total_runs || 0)} runs</div>
            </div>
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
        <div className="flex gap-2 justify-center px-3.5 py-2.5 my-auto text-base font-semibold leading-6 text-white border border-orange-700 border-solid bg-[linear-gradient(90deg,#EA2804_0%,#E54FE2_50%,#ED686C_100%)]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c59a5149c73a1fe0cd1553b9d5bbece64107a5b9a157d9c14435f45fa97ebb7?"
            className="shrink-0 self-start w-4 aspect-square"
          />
          <div>Run with an API</div>
        </div>
      </div>

      <div className="flex w-full">
        <div className="w-[50%]">
          {model ? <ModelForm model={model} /> : <div>Model not found</div>}
        </div>
        <div>
          <div className="flex flex-col items-start self-stretch text-sm max-w-[847px]">
            <div className="self-stretch w-full text-2xl leading-8 text-black max-md:max-w-full">
              Output
            </div>
            <div className="flex gap-5 self-stretch py-px pr-20 mt-2 text-center whitespace-nowrap border-b border-solid border-zinc-300 max-md:flex-wrap max-md:pr-5">
              <div className="flex flex-col justify-center leading-[147%] text-neutral-800">
                <div className="pt-2.5 pb-3 border-b-2 border-solid border-neutral-800">
                  Preview
                </div>
                {/* <div className="w-full">
                  {loading ? (
                    "Loading..."
                  ) : (
                    <video autoPlay loop src={resData?.output[0]}></video>
                    <AudioWave link={resData?.output} />
                  )}
                </div> */}
              </div>
              <div className="justify-center py-3 leading-[145%] text-stone-500">
                JSON
              </div>
            </div>
            {loading ? (
              "Loading..."
            ) : (
              // <video autoPlay loop src={resData?.output[0]}></video>
              <AudioWave link={resData?.output} />
            )}

            <div className="mt-4 leading-[145%] text-zinc-500">
              Generated in
            </div>
            <div className="mt-1 text-base leading-6 text-neutral-800">
              2.8 seconds
            </div>
            <div className="flex flex-wrap gap-2 content-start self-stretch pr-20 mt-4 text-base leading-6 text-neutral-800 max-md:pr-5">
              <div className="flex gap-2 justify-center px-3.5 py-2.5 bg-white border border-solid border-neutral-800 leading-[153.6%]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e59e2a7e62258e6cc57a89f4a9eb5a970041540a3adf36dce0a307532604348a?"
                  className="shrink-0 my-auto w-4 aspect-square"
                />
                <div>Tweak it</div>
              </div>
              <div className="flex gap-2 justify-center px-3.5 py-2.5 whitespace-nowrap bg-white border border-solid border-neutral-800">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac3ac9363aab1c1577700550bbf6c0f3bdaf754b157c640129a32c6bb2ced41d?"
                  className="shrink-0 my-auto w-4 aspect-square"
                />
                <div>Share</div>
              </div>
              <div className="flex gap-2 justify-center px-3.5 py-2.5 text-center whitespace-nowrap bg-white border border-solid border-neutral-800 leading-[155%]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c111c7b67ac6e740881e47fe7fc166bbc98df303858d9ea82993ce446665481?"
                  className="shrink-0 my-auto w-4 aspect-square"
                />
                <div>Download</div>
              </div>
              <div className="flex gap-2 justify-center px-3.5 py-2.5 whitespace-nowrap bg-white border border-solid border-neutral-800">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b45400ed5e29404dd885cb694358e86176d7c426b8f8ba6ca4ce6b0c8eb242d?"
                  className="shrink-0 my-auto w-4 aspect-square"
                />
                <div>Report</div>
              </div>
            </div>
            <div className="flex gap-1.5 px-2 py-1 mt-4 text-center leading-[146%] text-zinc-500">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd7cebe65ae14739a9c4ba482b09a7530fad59dec3a39310914ee1e167cdc6b4?"
                className="shrink-0 my-auto w-4 aspect-square"
              />
              <div>Show logs</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
