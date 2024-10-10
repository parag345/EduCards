import { FcLike } from "react-icons/fc";
import { toast } from "react-toastify";
import { FcLikePlaceholder } from "react-icons/fc";
function Card(props){

     
    let data = props.courseData;
    let likeCourse = props.likeCourse;
    let setLikeCourse = props.setLikeCourse;
   

    function clickHandler(){
      if(likeCourse.includes(data.id)){
        //If it is already clicked
        setLikeCourse((prev) => prev.filter((cid)=> (cid !== data.id)));
        toast.warning("Like Removed");
        
      }
      else{
        //If array is empty
        if(likeCourse.length === 0){
          setLikeCourse([data.id]);
        }

        else{
          //in case of non-empty
          setLikeCourse((prev) => [...prev,data.id]);
        }

        toast.success("Like Added");
      }
    }
    return(
        <div className="w-[300px] bg-bgDark rounded bg-opacity-80">
           <div className="relative">
           <img src={data.image.url}></img>

           <button className="text-[1.75rem] w-[40px] h-[40px] rounded-full absolute right-2 bottom-[-12px] bg-white flex justify-center items-center
           " onClick={clickHandler}>{
            likeCourse.includes(data.id) ? (<FcLike/>) : (<FcLikePlaceholder/>)}
            
            </button>
           </div>
     
          <div className="flex flex-col w-11/12 px-2">
          <h1 className="font-semibold text-lg leading-6 text-white " >{data.title}</h1>
          <p className="text-white mt-[0.5rem]">{
            data.description.length === 100 ? data.description : data.description.substring(0, 100) + "..."
          }</p>
          </div>
         
        </div>
    )
  
}

export default Card;