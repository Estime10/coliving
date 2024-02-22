'use client';
import { LOCATIONS } from '@/constants';

const Select = () => {
  return (
    <div className="relative">
      <select
        name="location"
        id="location"
        className="w-full p-2 mt-5 border-2 border-gray-300 rounded-md 
                regular-16 bold-16 text-gray-400 focus:outline-none
                focus:border-gray-500 
                xl:p-3 xl:mt-8  xl:bold-24 cursor-pointer"
      >
        {LOCATIONS.map((location) => (
          <option
            className="cursor-pointer
                        regular-16 bold-16 text-gray-400 focus:outline-none
                        focus:border-gray-500 
                        xl:p-3 xl:mt-8  xl:bold-24"
            key={location.key}
            value={location.value}
          >
            {location.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
