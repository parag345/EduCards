import React from 'react'
import Card from './Card'
import {useState} from 'react'

const Cards = (props) => {

  let courses = props.course;
  let [likeCourse,setLikeCourse] = useState([]);

  let category = props.category;


  
  const getCourse =()=>{
     if(category === "All"){
      const allResources = [];
      Object.values(courses).forEach(courseCategory=>{
        courseCategory.forEach(crse=>{
          allResources.push(crse);
        })
      })
  
      return allResources;
     }

     else{
      return courses[category];
     }
   
  }
  return (

  
    <div className='gap-4 mb-4 flex flex-wrap justify-center'>{
      getCourse().map((courseData)=>{
        return <Card courseData={courseData} key={courseData.id} likeCourse={likeCourse} setLikeCourse={setLikeCourse}/>
      })
    }
     
    </div>
  )
}

export default Cards;
