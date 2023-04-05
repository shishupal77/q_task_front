import React from 'react'
import Header from '../components/Header'
import axios from 'axios';

const HomeScreen = () => {
    const [data, setData] = React.useState([]);

        
  const handleDelete = async id => {
    try {
        
        await axios.delete(`http://localhost:5000/api/user/delete/${id}`,{
            headers:{
                "Authorization":localStorage.getItem("token")
            }
        })
    } catch (error) {
        window.alert(error)
    }
  };


    React.useEffect(() => {
        async function getDetails(){
        try {
            
            const res = await axios.get('http://localhost:5000/api/user/read',{
                headers:{
                    "Authorization":localStorage.getItem("token")
                }
            })
            setData(res.data.data) ; 
        } catch (error) {
            window.alert(error)
        }
        }
        getDetails() ; 
    }, [handleDelete]);


  return (
    <>
        <Header />
        <table className="table-auto mx-auto w-full">
      <thead>
        <tr className="bg-gray-200">
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Age</th>
          <th className="px-4 py-2">City</th>
          <th className="px-4 py-2">Gender</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data?.map(item => (
          <tr key={item.id} className="border-b border-gray-200">
            <td className="px-4 py-2">{item.name}</td>
            <td className="px-4 py-2">{item.age}</td>
            <td className="px-4 py-2">{item.city}</td>
            <td className="px-4 py-2">{item.gender}</td>
            <td className="px-4 py-2">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded"
              >
                Edit
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleDelete(item._id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  )
}

export default HomeScreen