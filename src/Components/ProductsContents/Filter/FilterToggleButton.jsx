"use client";
import React, { useState, useRef, useEffect } from "react";
import Filter from "./Filter";
import { BiFilterAlt } from "react-icons/bi";

function FilterToggleButton() {
  const [isOpen, setIsOpen] = useState(false);
  const filterRef = useRef(null);

  const toggleFilter = () => {
    setIsOpen((prev) => !prev);
  };

  // Close filter when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen && // Only handle if the filter is open
        filterRef.current && 
        !filterRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="">
      {/* Toggle button visible only on small screens */}
      <div className="flex justify-end">
        <div
          onClick={toggleFilter}
          className="border p-4 bg-black text-white cursor-pointer sm:block lg:hidden flex gap-x-2 w-32 justify-center"
        >
          <span>Filter</span>
          <BiFilterAlt className="text-2xl" />
        </div>
      </div>

      {/* Filter content */}
      <div
        ref={filterRef}
        className={`fixed top-0 right-0 h-full lg:w-80 w-64 bg-white shadow-lg z-[110] transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } sm:static sm:translate-x-0 lg:block`}
      >
        {/* The filter will always show on lg screens */}
        <Filter setIsOpen={setIsOpen}/>
      </div>
    </div>
  );
}

export default FilterToggleButton;
