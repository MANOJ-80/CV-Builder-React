import React from 'react';

const Card = ({ data }) => {
  return (
    <div className="text-sm mt-2 border border-gray-400 w-180 h-auto p-4 rounded-2xl shadow-xl border-none">
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        
        {/* First Row */}
        {data.institute ? (
          <div className="row-start-1 col-start-1">
            <h2 className="text-md text-center font-semibold">{data.institute}</h2>
          </div>
        ) : (
          <div className="row-start-1 col-start-1">
            <h2 className="text-md text-center font-semibold">{data.company}</h2>
          </div>
        )}

        {/* Second Row */}
        {data.study ? (
          <div className="text-center row-start-2 col-start-1">
            <h2 className="text-md font-semibold">{data.study}</h2>
          </div>
        ) : (
          <div className="text-center row-start-2 col-start-1">
            <h2 className="text-md font-semibold">{data.position}</h2>
          </div>
        )}

        <div className="text-center">
          <h2 className="text-md font-semibold">{data.timeline}</h2>
        </div>

        {/* Third Row */}
        {data.score ? (
          <div className="text-center">
            <h2 className="text-md font-semibold">{data.score}</h2>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-md font-semibold">{data.description}</h2>
          </div>
        )}

      </div>

      <hr className="w-48 h-1 mx-auto bg-gray-100 border-0 rounded-sm mt-4 dark:bg-gray-700" />
    </div>
  );
};

export default Card;
