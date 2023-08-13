"use client";
import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import React from "react";
import { CustomButton } from ".";
import { updateSearchParams } from "@/utils";

const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {
  //const router = useRouter();

  // const handleNavigation = () => {
  //   // Calculate the new limit based on the page number and navigation type
  //   const newLimit = (pageNumber + 1) * 10;

  //   // Update the "limit" search parameter in the URL with the new value
  //   const newPathname = updateSearchParams("limit", `${newLimit}`);

  //   router.push(newPathname);
  // };

  return (
    <div className="w-full flex-center gap-10 mt-10">
      {!isNext && (
        <CustomButton
          btnType="button"
          title="Show More"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={() => setLimit((pageNumber + 1) * 10)}
        />
      )}
    </div>
  );
};

export default ShowMore;
