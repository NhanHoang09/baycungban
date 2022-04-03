import React from "react";

function FlightDetail() {
  return (
    <div className="flex justify-around">
      <div className="flex ">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <span>21:40</span>
            <span>11 Feb</span>
          </div>
          <div className="my-14">1h 30m</div>
          <div className="flex flex-col">
            <span>21:40</span>
            <span>11 Feb</span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center ml-6">
          <div className="rounded-full border border-purpleColor w-2 h-2"></div>
          <div className="border-r border-indigo-500 h-40"></div>
          <div className="rounded-full bg-purpleColor w-2 h-2"></div>
        </div>
        <div className="ml-8">
          <div className="flex flex-col justify-around">
            <span>Da Nang(DAD)</span>
            <span>Da Nang Airport</span>
          </div>
          <div className="flex flex-col mt-32">
            <span>Ho Chi Minh(SGN)</span>
            <span>TanSonNhat Inhl</span>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col">
          <div>BAMBOO AIRWAYS</div>
          <div>QH-183 * Economy</div>
        </div>
        <div className="flex justify-between rounded-xl bg-background p-4">
          <div className="flex flex-col mr-10">
            <div>Baggage <span className="text-purpleColor font-medium">20kg</span></div>
            <div>In-flight <span className="text-purpleColor font-medium">Meal</span></div>
            <div>In-flight <span className="text-purpleColor font-medium">Entertainment</span></div>
          </div>
          <div className="flex flex-col">
            <div>Aircraft Airbus <span className="text-purpleColor font-medium">A321</span></div>
            <div>Seat layout <span className="text-purpleColor font-medium">3-3</span></div>
            <div>Seat pitch <span className="text-purpleColor font-medium">29 inches (standard)</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlightDetail;
