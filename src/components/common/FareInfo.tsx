import React from "react";

function FareInfo() {
  return (
    <div className="flex justify-around">
      <div>
        <span>CONDITIONS</span>
        <div className="flex flex-col mt-4 mb-2">
          <div>BAMBOO AIRWAYS</div>
          <div className="flex items-center">
            <span>QH-183</span>
            <div className="rounded-full bg-black w-1 h-1 m-2"></div>
            <span>Economy</span>
          </div>
        </div>
        <div className="flex mx-2 justify-center items-center">
          <div className="flex flex-col">
            <span>Da Nang</span>
            <span className="text-purpleColor font-light">Economy</span>
          </div>
          <div className="flex justify-center items-center mx-2">
            <div className="rounded-full border border-purpleColor w-2 h-2"></div>
            <div className="border-b border-indigo-500 w-16"></div>
            <div className="rounded-full bg-purpleColor w-2 h-2"></div>
          </div>
          <div>Ho Chi Minh</div>
        </div>
        <span className="m-6">Non - Refundable</span>
      </div>
      <div className="divide-y">
        <div>
          <span>PRICE DETAILS</span>
          <div className="flex justify-between mt-4">
            <span className="mr-14">Adult Basic Fare (x1)</span>
            <span>1,326,000 vnd</span>
          </div>
          <div className="flex justify-between">
            <span>Tax</span>
            <span>included</span>
          </div>
          <div className="flex justify-between">
            <span>Regular Total Price</span>
            <span className="font-medium">1,326,000</span>
          </div>
          <div className="flex justify-between">
            <span className="text-orangeColor">Save</span>
            <span> -4,000 </span>
          </div>
        </div>
        <div className="flex justify-between">
          <span>You pay</span>
          <span className="text-orangeColor font-medium">1,322,000 vnd</span>
        </div>
      </div>
    </div>
  );
}

export default FareInfo;
