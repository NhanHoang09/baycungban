import React, { useEffect, useState } from "react";
import { BsSearch, BsArrowLeftRight } from "react-icons/bs";
import { fetchData } from "../../api/index";
import FlightDetail from "../../components/common/FlightDetail";
import FareInfo from "../../components/common/FareInfo";
import { IDataType } from "../../types";

function List() {
  const [data, setData] = useState<IDataType[]>([]);
  const [showInfo, setShowInfo] = useState<{ [key: string]: boolean }>({
    detail: false,
    fare: false,
  });

  const fetchDataFromApi = async () => {
    const response = await fetchData();
    setData(response.data.Flights);
  };

  console.log(data);

  useEffect(() => {
    fetchDataFromApi();
  }, []);

  return (
    <div>
      <div className="">
        <div className="bg-background flex justify-around items-center m-3 h-20">
          <div className="flex flex-col">
            <span className="text-purpleColor font-semibold text-base">
              Da Nang(DAD)
            </span>
            <span>Fri, 22 Mar, 2022</span>
          </div>
          <BsArrowLeftRight />
          <div className="flex flex-col">
            <span className="text-purpleColor font-semibold text-base">
              Ho Chi Minh(SGN)
            </span>
            <span>Fri, 22 Mar, 2022</span>
          </div>
          <div className="divide-x flex">
            <div className="mr-2 font-medium">Round-trip</div>
            <div className="mx-2 font-medium">
              <span className="font-medium text-purpleColor">02</span> Adult,{" "}
              <span className="font-medium text-purpleColor">01</span> children
            </div>
            <div className="mf-2 font-medium">Business Class</div>
          </div>
          <div>
            <button className="flex bg-orangeColor hover:opacity-75 text-white py-1 px-3 rounded-xl border border-solid border-orangeColor">
              Change Flights <BsSearch className="ml-1 mt-1" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-background rounded-xl col-span-2 flex justify-end h-10">
            <span>Filter</span>
            <select className="rounded-xl h-34 w-120 bg-white mx-2 p-2">
              <option>Transit</option>
            </select>
            <select className="rounded-xl h-34 w-120 bg-white mx-2 p-2">
              <option>Time</option>
            </select>
            <select className="rounded-xl h-34 w-120 bg-white mx-2 p-2">
              <option>Airline</option>
            </select>
            <select className="rounded-xl h-34 w-120 bg-white mx-2 p-2">
              <option>Low Price</option>
            </select>
          </div>
          <div className=" row-span-2 grid-flow-col col-span-2">
            {data.map((item) => (
              <div className="bg-white rounded-xl m-2">
                <div className="flex items-center justify-around mt-2">
                  <span>BAMBOO AIRWAYS</span>
                  <div className="flex m-3.5">
                    <div className="flex flex-col mr-5">
                      <span>21:40</span>
                      <span className="bg-background rounded-100 p-1">DAD</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="m-auto">1h 30m</span>
                      <div className="flex justify-center items-center">
                        <div className="rounded-full border border-purpleColor w-2 h-2"></div>
                        <div className="border-b border-indigo-500 w-28"></div>
                        <div className="rounded-full bg-purpleColor w-2 h-2"></div>
                      </div>
                      <span className="m-auto">Direct</span>
                    </div>
                    <div className="flex flex-col ml-5">
                      <span>23:10</span>
                      <span className="bg-background rounded-100 p-1">DAD</span>
                    </div>
                  </div>
                  <div>
                    <div>
                      Baggage{" "}
                      <span className="text-purpleColor font-medium">20kg</span>
                    </div>
                    <div>
                      in-flight{" "}
                      <span className="text-purpleColor font-medium">Meal</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-800 line-through">
                      1,326,000 vnd
                    </div>
                    <div className="text-orangeColor font-semibold">
                      1,322,000 vnd
                    </div>
                  </div>
                  <div>
                    <button className="bg-orangeColor hover:opacity-75 text-white py-1 px-3 rounded-xl border border-solid border-orangeColor">
                      Choose
                    </button>
                  </div>
                </div>
                <div className="m-4">
                  <button
                    className={
                      showInfo.detail
                        ? "text-purpleColor border-b-2 border-purpleColor mr-2 "
                        : "mr-2"
                    }
                    onClick={() => setShowInfo({ detail: !showInfo.detail })}
                  >
                    FLIGHT DETAIL
                  </button>
                  <button
                    className={
                      showInfo.fare
                        ? "text-purpleColor border-b-2 border-purpleColor"
                        : ""
                    }
                    onClick={() => setShowInfo({ fare: !showInfo.fare })}
                  >
                    FARE INFO
                  </button>
                </div>
                {showInfo.detail && <FlightDetail />}
                {showInfo.fare && <FareInfo />}
              </div>
            ))}
          </div>
          <div className="bg-white rounded-xl row-span-6 divide-y">
            <div className="m-3.5 font-medium">YOUR FLIGHTS</div>
            <div>
              <div className="m-3.5">
                <img />
                <div className="flex flex-col">
                  <span>Fri, 11 Feb,2022</span>
                  <span className="font-medium">Da Nang - Ho Chi Minh</span>
                </div>
              </div>
              <div className="mx-3.5">
                <img />
                <div className="flex flex-col">
                  <span className="font-medium">BAMBOO AIRWAYS</span>
                  <span>Detail</span>
                </div>
              </div>
              <div className="flex m-3.5">
                <div className="flex flex-col mr-5">
                  <span>21:40</span>
                  <span>DAD</span>
                </div>
                <div className="flex flex-col">
                  <span className="m-auto">1h 30m</span>
                  <div className="flex justify-center items-center">
                    <div className="rounded-full border border-purpleColor w-2 h-2"></div>
                    <div className="border-b border-indigo-500 w-28"></div>
                    <div className="rounded-full bg-purpleColor w-2 h-2"></div>
                  </div>
                  <span className="m-auto">Direct</span>
                </div>
                <div className="flex flex-col ml-5">
                  <span>23:10</span>
                  <span>DAD</span>
                </div>
              </div>
              <button className="bg-purple-700 hover:bg-purple-800 text-white py-2.5 px-12 mx-3.5 mb-3.5 rounded-xl border border-solid border-purple-700 hover:border-purple-800">
                Change departure flight
              </button>
            </div>
            <div>
              <div className="m-3.5">
                <img />
                <div className="flex flex-col">
                  <span>Sun,13 Feb, 2022</span>
                  <span className="font-medium">Ho Chi Minh - Da nang</span>
                </div>
              </div>
              <div className="flex flex-col m-3.5">
                <span>Subtotal</span>
                <span className="font-medium text-orangeColor">
                  1,322,000 vnd
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
