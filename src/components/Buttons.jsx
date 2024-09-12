import React, { useState } from 'react';

const Buttons = () => {
  let arr = [
    { id: 1, Title: "Superman", Length: "3 Hours", category: "DC" },
    { id: 2, Title: "Robocop", Length: "2 Hours", category: "DC" },
    { id: 3, Title: "Spiderman", Length: "3.5 Hours", category: "Marvel" },
    { id: 4, Title: "IronMan", Length: "4 Hours", category: "Marvel" }
  ];

  // State to hold filtered data
  const [filteredData, setFilteredData] = useState([]);

  const fild = (cat) => {
    // Filtering the array based on category
    const filteredArray = arr.filter((data) => data.category === cat);

    // Updating the state with the filtered data
    setFilteredData(filteredArray);

    // Logging details to the console
    filteredArray.forEach((data) => {
      console.log(`Title is: ${data.Title}`);
      console.log(`Length is: ${data.Length}`);
    });
  };

  return (
    <div>
      <button onClick={() => fild("DC")}>Click 1</button>
      <button onClick={() => fild("Marvel")}>Click 2</button>

      {/* Displaying filtered data */}
      <div>
        {filteredData.map((data) => (
          <div key={data.id}>
            <p>Title: {data.Title}</p>
            <p>Length: {data.Length}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Buttons;
