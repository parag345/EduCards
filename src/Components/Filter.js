import React from 'react'

 const Filter = (props) => {
  let filterData = props.filterData;
  let category = props.category;
  let setCategory = props.setCategory;

  function filterHandler(title){
    setCategory(title);
  }

  return (
    <div className='w-11/12 gap-y-4 space-x-4 py-4 mx-auto flex  justify-center flex-wrap'>
      {
        filterData.map((data) =>{
            return <button key={data.id} className={`text-lg px-2 py-1 rounded-md font-medium hover:bg-opacity-50 border-2 
             bg-bgDark text-white 
             ${category === data.title ? "border-white bg-opacity-60" : "border-transparent bg-opacity-40"}`} onClick={()=> filterHandler(data.title)}>{data.title}</button>
        })
      }
    </div>
  )
}

export default Filter;
