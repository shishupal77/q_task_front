import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

function PostData() {
  const [data, setData] = useState({ name: '', gender: '', city: '', age: '' });
  const navigate = useNavigate() ; 

  const handleChange = event => {
    const { name, value } = event.target;
    setData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async(event) => {
    event.preventDefault();

    const body = {accesstoken:localStorage.getItem("token"),...data}
    console.log(body) ; 
    try {
        await axios.post('http://localhost:5000/api/user/create', body) ;
        window.alert("data posted :)") ; 
        navigate("/")
    } catch (error) {
        console.log(error)
        // window.alert(error.response.data.msg)
    }

    setData({ name: '', gender: '', city: '', age: '' });
  };

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="gender" className="block text-gray-700 font-bold mb-2">Gender</label>
          <input
            type="text"
            name="gender"
            value={data.gender}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="city" className="block text-gray-700 font-bold mb-2">City</label>
          <input
            type="text"
            name="city"
            value={data.city}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="age" className="block text-gray-700 font-bold mb-2">Age</label>
          <input
            type="number"
            name="age"
            value={data.age}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Post Data
        </button>
      </form>
    </div>
  );
}

export default PostData ;