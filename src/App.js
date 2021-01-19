// Import useState and useEffect hooks from React
import React, { useState, useEffect } from 'react'

// Import the API category from AWS Amplify
import { API } from 'aws-amplify'
import Form from './components/Form/index'
import './App.css';

function App() {
  const [pets, updatePets] = useState([])

  // Define function to all API
  async function fetchPetsData() {
    const data = await API.get('petapi', '/pets')
    updatePets(data.pets)
  }

  // Call fetchCoins function when component loads
  useEffect(() => {
    fetchPetsData()
  }, [])

  return (
    <div className="App">
      {
        pets.map((pet, index) => (
          <div key={index}>
            <h2>{pet.name} - {pet.weight}lbs</h2>
            <h5>favorite treat: {pet.favorite_treat}</h5>
          </div>
        ))
      }
      {/* <Form/> */}
    </div>
    
  );
}

export default App
