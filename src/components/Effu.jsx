import React, { useState, useEffect } from "react";

const Effu = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);

  useEffect(() => {
    // Set a timeout to delay the search term update
    const handler = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 500); // 500ms debounce delay

    // Cleanup function: clears the timeout if the component re-renders or unmounts
    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]); // The effect will run whenever searchTerm changes

  useEffect(() => {
    // Simulate a search API call based on the debounced term
    if (debouncedTerm) {
      console.log("Searching for:", debouncedTerm);
      // You could trigger an API call here
    }
  }, [debouncedTerm]); // Runs whenever the debounced term changes

  return (
    <div>
      <h2>Debounced Search Example</h2>
      <input
        type="text"
        placeholder="Search here..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <p>Search term: {searchTerm}</p>
      <p>Debounced term: {debouncedTerm}</p>
    </div>
  );
};

export default Effu;
