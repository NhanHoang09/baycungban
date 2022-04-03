import React from "react";
import { BsArrowLeftRight } from "react-icons/bs";
import {AiOutlineArrowRight} from "react-icons/ai"

function Home() {
  return (
    <>
      <div className="flex flex-col px-4 py-8">
        <div className="text-7xl "> Hello!</div>
        <div className="text-7xl "> Where are</div>
        <div className="text-7xl ">
          you <span className="text-7xl text-purpleColor">flying</span> to ...
        </div>
      </div>
      <div className="px-4 py-8 bg-white rounded-xl shadow-2xl">
        <div className="container flex">
          <div className="flex flex-col lg:flex-row">One way/Round-trip</div>
          <div className="flex flex-col lg:flex-row mx-2">Multi-city</div>
          <div className="flex flex-col lg:flex-row"><span className="font-medium text-purpleColor">02</span> Adult, <span className="font-medium text-purpleColor">01</span> children</div>
          <div className="flex flex-col lg:flex-row mx-2">Business Class</div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-wrap justify-around items-center my-4">
            <div className="m-2">
              <div className="component flex max-w-sm">
                <div className="bg-gray-100 shadow-sm rounded-lg">
                  <div className="px-8 py-6 relative">
                    <div className="mt-6">
                      <div className="uppercase font-bold text-gray-600">
                        From
                      </div>
                      <div className="mt-2 text-indigo-500 font-black text-2xl leading-none">
                        Da Nang
                      </div>
                    </div>
                    <div className="mt-6 text-gray-500 text-sm">
                      Quang Nam, Viet Nam
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <BsArrowLeftRight />
            <div className="m-2">
              <div className="component flex max-w-sm">
                <div className="bg-gray-100 shadow-sm rounded-lg">
                  <div className="px-8 py-6 relative">
                    <div className="mt-6">
                      <div className="uppercase font-bold text-gray-600">
                        To
                      </div>
                      <div className="mt-2 text-indigo-500 font-black text-2xl leading-none">
                        Ho Chi Minh
                      </div>
                    </div>
                    <div className="mt-6 text-gray-500 text-sm">Viet Nam</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="m-2">
              <div className="component flex max-w-sm">
                <div className="bg-gray-100 shadow-sm rounded-lg">
                  <div className="px-8 py-6 relative">
                    <div className="mt-6">
                      <div className="uppercase font-bold text-gray-600">
                        Departure
                      </div>
                      <div className="mt-2 text-indigo-500 font-black text-2xl leading-none">
                        Fri, 22 Mar, 2022
                      </div>
                    </div>
                    <div className="flex">
                      <div className="mt-6 mr-2 text-gray-500 text-sm">Prev</div>
                      <div className="mt-6 text-gray-500 text-sm">Next</div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 shadow-sm rounded-lg">
                  <div className="px-8 py-6 relative">
                    <div className="mt-6">
                      <div className="uppercase font-bold text-gray-600">
                        Return
                      </div>
                      <div className="mt-2 text-indigo-500 font-black text-2xl leading-none">
                        Fri, 22 Mar, 2022
                      </div>
                    </div>
                    <div className="flex">
                      <div className="mt-6 mr-2 text-gray-500 text-sm">Prev</div>
                      <div className="mt-6 text-gray-500 text-sm">Next</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="flex justify-center items-center bg-purple-700 hover:bg-purple-800 text-white py-4 px-4 mr-6 rounded-xl border border-solid border-purple-700 hover:border-purple-800 absolute right-12">
          Search Flights <AiOutlineArrowRight className="ml-8"/>
        </button>
      </div>
    </>
  );
}

export default Home;
