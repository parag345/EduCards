import React, { useEffect,useState } from "react";
import Navbar from './Components/Navbar'
import Cards from './Components/Cards'
import Filter from './Components/Filter'
import {filterData,apiUrl} from './data'
import {toast} from "react-toastify"
import Spinner from "./Components/Spinner"


const App = () => {

   const[course,setCourse] = useState(null);
   const[loading,setLoading] = useState(true);
   const[category,setCategory] = useState(filterData[0].title);

   async function fetchdata(){
    setLoading(true);
    try{
      const response = await fetch(apiUrl);
      const result = await response.json();
      
      // console.log(result.data);
      setCourse(result.data);
    }
    catch(error){
      toast.error("Something went wrong");
      setCourse([]);
    }
    setLoading(false);

  }

  useEffect(()=>{
    fetchdata()
  },[]);
   
 
 
  return <div className="h-[100vh] bg-bgDark2">
    <Navbar/>
    <div className="bg-bgDark2">
     
    <Filter filterData={filterData} category={category} setCategory={setCategory}/>
    <div className="w-11/12 mx-auto max-w-[1200px] min-h-[50vh]">
      {
        loading ? (<Spinner/>) : (<Cards course={course} category={category} setCategory={setCategory}/>)
      }
    </div>

    </div>
  
  </div>;
};

export default App;
