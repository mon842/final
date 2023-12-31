"use client"
import axios from 'axios'

const YourComponent = ({user}) => {


  const handleClick = () => {
    console.log(user._id);
    axios.get(`/api/users/delete/${user._id}`)
  };

  return (
    <button
      onClick={() => handleClick()} // Call the handleClick function within an arrow function
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      delete user
    </button>
  );
};

export default YourComponent;
