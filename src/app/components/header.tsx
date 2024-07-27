import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col justify-center self-stretch p-6 text-base shadow-sm backdrop-blur-sm bg-white bg-opacity-90 max-md:px-5">
      <div className="flex gap-5 justify-between py-0.5 pl-1.5 w-full max-md:flex-wrap max-md:max-w-full">
      <Link
        href={"/"}
        className="bg-gray-500 p-2 rounded-lg"
      >
        <img
          loading="lazy"
          src="https://www.clusterprotocol.ai/assets/clusterProtocol.webp"
          className="shrink-0 my-auto w-32 "
        />
      </Link>

        <div className="flex flex-wrap gap-5 pl-3">
          <div className="flex flex-auto gap-5 justify-between my-auto whitespace-nowrap leading-[153.6%] text-zinc-500 max-md:flex-wrap">
            {/* <Link href={"/"}>Explore</Link> */}
            {/* <div className="leading-[150%]">Pricing</div>
            <div className="leading-[155%]">Docs</div>
            <div className="leading-[151%]">Blog</div>
            <div>Newsletter</div>
            <div>Changelog</div> */}
          </div>
          {/* <div className="flex gap-3">
            <div className="my-auto leading-[150%] text-zinc-500">Sign in</div>
            <div className="justify-center px-3 leading-10 text-white bg-black">
              Get started
            </div>
          </div> */}
        </div>
        </div>
    </div>
  );
};

export default Header;
