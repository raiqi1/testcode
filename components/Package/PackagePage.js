/* eslint-disable @next/next/no-img-element */
import React from "react";
import { IoPeople } from "react-icons/io5";
import { RiCircleFill } from "react-icons/ri";
import { Rating } from "../Rating";
import DateSelect from "./DateSelect";
import ActivityList from "./ActivityList";
import Link from "next/link";
import { CiShop } from "react-icons/ci";

export default function PackagePage({ activity }) {
  const { data } = activity;
  const formatRupiah = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const {
    name,
    thumbnailUrl,
    highlight,
    ratingAvg,
    numberOfVisits,
    price,
    reviewCount,
    openTime,
    duration,
    minPerson,
    guaranteed,
    weeklySchedule,
    activityList,
    facilities,
    activityVendorID,
    vendorName,
  } = data ? data : "";

  const jam = Math.floor(duration / 60);
  const guarantee1 = guaranteed ? guaranteed.Guarantee1 : "";
  const guarantee2 = guaranteed ? guaranteed.Guarantee2 : "";
  const refundable = guaranteed ? guaranteed.Refundable : "";
  const safe = guaranteed ? guaranteed.Safety : "";

  return (
    <div className="">
      <div className="flex p-2 pb-3 gap-2 text-gray-300 text-xs">
        <h1>Home</h1>
        <span>{">"}</span>
        <h2>Package</h2>
        <span>{">"}</span>
        <h4 className="text-black">{name}</h4>
      </div>
      <div className=" w-full flex">
        <div className="w-full flex flex-col mr-7">
          {thumbnailUrl && (
            <div>
              <img
                src={thumbnailUrl}
                alt="Thumbnail"
                className="w-[700px] h-[450px] cursor-pointer rounded-mds"
              />
            </div>
          )}
          {/* <GaleryPackage image={image} /> */}
          <div className="mt-3">
            <h1 className="font-bold text-xl border-b border-black w-28 pb-1">
              Activity List
            </h1>
            <div className="flex gap-3">
              {activityList?.map((list, index) => (
                <div className="flex mt-2 mb-5" key={index}>
                  <ActivityList list={list} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full max-[1009px]:w-[] font-['Poppins'] max-md:hidden ">
          <div className="">
            <h1 className=" w-full font-bold lg:text-4xl mb-1 md:text-2xl">
              {name}
            </h1>
            <div className="flex gap-5">
              <h2 className="flex gap-1">
                <span className="flex flex-col justify-center">
                  <Rating value={ratingAvg} />
                </span>
                <span className="flex flex-col justify-center text-sm">
                  {ratingAvg}
                </span>
                <span className="flex flex-col justify-center text-sm">
                  ({reviewCount} reviews)
                </span>
              </h2>
              <div className="flex">
                <div className="flex flex-col justify-center">
                  <IoPeople />
                </div>
                <div className="flex flex-col justify-center">
                  {numberOfVisits}
                </div>
              </div>
            </div>
            <div className="">
              <p className="font-bold text-2xl mt-1 md:text-xl">
                {formatRupiah(price)}
              </p>
            </div>
            <div className="pb-4 border-b mt-2">
              <Link href={`/activity-vendor/${activityVendorID}`}>
                <div className="flex gap-1  rounded-md w-[200px]  mt-3 h-7 hover:bg-gray-300 ">
                  <span className="font-bold flex flex-col justify-center text-2xl mt-[1px]">
                    <CiShop className="font-bold" />
                  </span>
                  <p className="mt-1 text-sm font-bold text-black dark:text-white">
                    {vendorName}
                  </p>
                </div>
              </Link>
            </div>
            <div>
              <DateSelect weeklySchedule={weeklySchedule} />
            </div>
            <div className="border-b pb-6">
              <h2 className="font-bold text-xl mt-3">Activity Detail</h2>
              <div className="flex gap-3 mt-2">
                <span className="text-[8px] flex flex-col  justify-center mt-[2px]">
                  <RiCircleFill />
                </span>
                <h1 className="flex justify-center ">Duration: {jam} Hours </h1>
              </div>
              <div className="flex gap-3 ">
                <span className="text-[8px] flex flex-col  justify-center mt-[2px]">
                  <RiCircleFill />
                </span>
                <h1 className="flex justify-center ">Open Time: {openTime} </h1>
              </div>
              <div className="flex gap-3 ">
                <span className="text-[8px] flex flex-col  justify-center mt-[2px]">
                  <RiCircleFill />
                </span>
                <h1 className="flex justify-center ">
                  Minimum Person: {minPerson} person
                </h1>
              </div>
            </div>
            <div className="border-b pb-6">
              <h2 className="font-bold text-xl mt-3">Highlight We Offer</h2>
              <p className="mt-2">{highlight}</p>
            </div>
            <div className="border-b pb-6">
              <h1 className="text-xl font-bold mt-3">Facilities</h1>
              <div>
                {facilities?.map((facility, index) => (
                  <div key={index} className="flex gap-3 mt-2">
                    <span className="text-[8px] flex flex-col  justify-center mt-[2px]">
                      <RiCircleFill />
                    </span>
                    <h1 className="flex justify-center ">{facility}</h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-xl mt-3">We Guaranteed</h1>
            {guarantee1 ? (
              <div className="flex gap-2 mt-1">
                <span className=" ">
                  <img
                    src="../../../images/easy.png"
                    className="w-[22px]"
                    alt=""
                  />
                </span>
                <h1 className="text-center font-semibold">Easy Refund</h1>
              </div>
            ) : null}
            <h1 className="flex justify-center">{guarantee1}</h1>
            {guarantee2 ? (
              <div className="flex gap-2 mt-1">
                <span className=" ">
                  <img
                    src="../../../images/kalender.png"
                    className="w-[21px]"
                    alt=""
                  />
                </span>
                <h1 className="text-center font-semibold">Reschedule</h1>
              </div>
            ) : null}
            <h1 className="flex justify-center">{guarantee2}</h1>
            {refundable ? (
              <div className="flex gap-2 mt-1">
                <span className=" ">
                  <img
                    src="../../../images/easy.png"
                    className="w-[22px]"
                    alt=""
                  />
                </span>
                <h1 className="text-center font-semibold">Easy Refund</h1>
              </div>
            ) : null}
            <h1 className="flex justify-center">{refundable}</h1>
            {safe ? (
              <div className="flex gap-2 mt-1">
                <span className=" ">
                  <img
                    src="../../../images/kalender.png"
                    className="w-[21px]"
                    alt=""
                  />
                </span>
                <h1 className="text-center font-semibold">Reschedule</h1>
              </div>
            ) : null}
            <h1 className="flex justify-center">{safe}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
