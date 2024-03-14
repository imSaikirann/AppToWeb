import React, { useState, useEffect } from 'react';
import db from './firebase'; // Import the initialized Firebase app instance
import { collection, addDoc, getDocs } from 'firebase/firestore';

export default function Inp() {
  const [name, setName] = useState('');
  const [namesList, setNamesList] = useState([]);

  useEffect(() => {
    // Fetch data from Firestore when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'names'));
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setNamesList(data);
    } catch (error) {
      console.error('Error fetching data from Firestore: ', error);
    }
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name.trim() !== '') {
      try {
        // Add the name to Firebase
        const docRef = await addDoc(collection(db, 'names'), {
          name: name
        });
        console.log('Name added to Firebase successfully with ID: ', docRef.id);
        // Clear the input field after submission
        setName('');
        // Fetch updated data from Firestore
        fetchData();
      } catch (error) {
        console.error('Error adding name to Firebase: ', error);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleChange} placeholder="Enter your name" />
        <button type="submit">Submit</button>
      </form>
      <div>
        <h2>Names List:</h2>
        <ul>
          {namesList.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
