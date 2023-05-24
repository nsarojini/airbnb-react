import React from "react";
// Filter places 
const Filter = ({ icon, title }) => {
    return (
        <div className="flex items-center text-gray gap-2 py-1 px-3 sm:px-4 rounded-full shadow-lg shadow-gray-300 text-[10px] sm:text-[14px]">
            {icon}
            {title}
        </div>
    );
};

export default Filter;