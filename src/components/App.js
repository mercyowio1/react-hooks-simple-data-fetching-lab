// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [dogImage, setDogImage] = useState(null); // State to hold the dog image URL
  const [loading, setLoading] = useState(true); // State to manage the loading status

  // useEffect hook to fetch data from the API
  useEffect(() => {
    // Function to fetch the random dog image
    const fetchDogImage = async () => {
      try {
        // Start by setting loading to true
        setLoading(true);

        // Fetch the data from the API
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();

        // Set the dog image URL to the state after fetching
        setDogImage(data.message);

        // Set loading to false after data is fetched
        setLoading(false);
      } catch (error) {
        console.error("Error fetching dog image:", error);
        setLoading(false); // Stop loading even if an error occurs
      }
    };

    // Call the function to fetch dog image when the component mounts
    fetchDogImage();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <div>
      {loading ? (
        // Show loading text while data is being fetched
        <p>Loading...</p>
      ) : (
        // Once the data is fetched, display the image
        <img src={dogImage} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;
