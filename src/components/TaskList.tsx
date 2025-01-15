import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineBorder } from "react-icons/ai";
import { IoCheckbox } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleCompleted, toggleImportant } from "../../store/taskSlice";


export default function TaskList({tasks,setSideBar,setEditTaskId,}:{tasks:any[],setSideBar:any , setEditTaskId:any}){

    const completedTasks = tasks?.filter((task) => task.completed === true)

    const view = useSelector((state:any) => state.viewState.view)

    if (tasks.length == 0) {
        return <div className="text-[15px] font-Outfit text-gray-400 text-center py-28">No tasks available</div>;
    }

    if(view)
    return (
        <div className="w-full font-Outfit">
            {/* list */}
            <div className="w-full flex flex-col min-h-[300px]">
            {   
                tasks?.filter((task:any) => task.completed === false).map((task:any) => <ListCard key={task.id} task={task} setEditTaskId={setEditTaskId} setSideBar={setSideBar}/> )
            }
            </div>
           
           

            <h1>Completed</h1>
            {   completedTasks.length ?
                completedTasks?.map((task:any) => <div className="line-through tracking-tight"> <ListCard key={task.id} task={task} setEditTaskId={setEditTaskId} setSideBar={setSideBar}/></div> ) 
                : <div className="text-[15px] font-Outfit text-gray-400 text-center py-28">No Completed Tasks !</div>
            }

        </div>
    )
    else return (
        <div className="w-full font-Outfit">
        {/* grid */}
        <div className="w-full flex flex-wrap gap-2 min-h-[300px]">
        {   
                tasks?.filter((task:any) => task.completed === false).map((task:any) => <GridCard key={task.id} task={task} setEditTaskId={setEditTaskId} setSideBar={setSideBar}/> )
        }
        </div>
        
       

        <h1 className="py-6">Completed</h1>
        {   completedTasks.length ?
                completedTasks?.map((task:any) => <div className="line-through tracking-tight"> <GridCard key={task.id} task={task} setEditTaskId={setEditTaskId} setSideBar={setSideBar}/></div> ) 
                : <div className="text-[15px] font-Outfit text-gray-400 text-center py-28">No Completed Tasks !</div>
        }
        </div>
    )
}

function GridCard({task, setSideBar,setEditTaskId}:{task:any, setSideBar:any,setEditTaskId:any}){
    const dispatch = useDispatch()
    return(
        <div className=" flex h-[140px] px-4 md:w-[32%] w-full justify-between items-center py-5  border">
        <div className="flex gap-4 items-center">
        {
            task?.completed ? 
            <div className="text-primary text-[24px] cursor-pointer" onClick={()=> dispatch(toggleCompleted({id:task?.id}))}>
            <IoCheckbox/>
            </div> 
            :<div className="text-text-color text-[24px] cursor-pointer" onClick={()=> dispatch(toggleCompleted({id:task?.id}))}>
            <AiOutlineBorder/>
            </div>
        }
            <p className="font-Outfit text-[15px] leading-5 cursor-pointer"  onClick={() => {
                        setSideBar(true)
                        setEditTaskId(task.id)
                    }}
                    >{task.title}</p>
            </div>
        {
             task?.important ? 
             <div className="text-primary text-[24px] cursor-pointer" onClick={()=> dispatch(toggleImportant({id:task?.id}))}>
             <AiFillStar/>
             </div> 
             :<div className="text-text-color text-[24px] cursor-pointer" onClick={()=> dispatch(toggleImportant({id:task?.id}))}>
             <AiOutlineStar/>
             </div>
        }
        
        </div>

    )
}

function ListCard({task, setSideBar,setEditTaskId}:{task:any, setSideBar:any,setEditTaskId:any}){
    const dispatch = useDispatch()
    
    return(
         <div className="w-full flex justify-between items-center py-5 md:pr-7 border-t-2 ">
                <div className="flex gap-4 items-center">
                {
                task?.completed ? 
                <div className="text-primary text-[24px] cursor-pointer"  onClick={()=> dispatch(toggleCompleted({id:task?.id}))}>
                <IoCheckbox/>
                </div> 
                :<div className="text-text-color text-[24px] cursor-pointer" onClick={()=> dispatch(toggleCompleted({id:task?.id}))}>
                <AiOutlineBorder/>
                </div>
                }
                    <p className="font-Outfit text-[15px] leading-5 cursor-pointer" onClick={() => {
                        setSideBar(true)
                        setEditTaskId(task.id)
                    }}>{task.title}</p>
                </div>
                {
                    task?.important ? 
                    <div className="text-primary text-[24px] cursor-pointer" onClick={()=> dispatch(toggleImportant({id:task?.id}))}>
                    <AiFillStar/>
                    </div> 
                    :<div className="text-text-color text-[24px] cursor-pointer" onClick={()=> dispatch(toggleImportant({id:task?.id}))}>
                    <AiOutlineStar/>
                    </div>
                }
        </div>
    )
}



