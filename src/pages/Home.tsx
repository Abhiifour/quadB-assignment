import profile from "../assets/profile.jpg"
import { PiNotepad } from "react-icons/pi";
import { CiCalendar } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { CiMap } from "react-icons/ci";
import { MdOutlineAssignmentInd } from "react-icons/md";
import { BsPlusLg } from "react-icons/bs";
import { FaCaretDown } from "react-icons/fa6";
import { Bell, RefreshCcw, Calendar } from 'lucide-react';
import { MdOutlineLowPriority } from "react-icons/md";
import MenuItem from '@mui/material/MenuItem';
import {Chart, ArcElement, Tooltip, Legend, Title} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import TaskList from "../components/TaskList";
import TaskDetail from "../components/TaskDetail";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addTask, removeTask} from "../../store/taskSlice"
import Select from '@mui/material/Select';

Chart.register(ArcElement, Tooltip, Legend, Title);
Chart.defaults.plugins.tooltip.backgroundColor = 'rgb(0, 0, 156)';
Chart.defaults.plugins.legend.position = 'bottom';
Chart.defaults.plugins.legend.title.display = false;
Chart.defaults.plugins.legend.maxWidth = 1;


const options = {
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          usePointStyle: true,
          pointStyle: 'circle'
          
        }
      },
      tooltip: {
        backgroundColor: 'rgb(0, 0, 156)'
      }
    }
  };

export default function Home(){


    const [taskText , setTaskText] = useState("")
    const [taskPriority , setTaskPriority] = useState("Low")
    const [dueTime , setDueTime] = useState("")
    const [sideBar , setSideBar] = useState(false);
    const [editTaskId, setEditTaskId] = useState('')
    const [ , setFilter] = useState("all tasks")
    const menuState = useSelector((state:any) => state.menuState.menu)
    const dispatch = useDispatch()  
    const taskData = useSelector((state : any) => state.tasks.tasks)
    const completedTasks = taskData.filter((task : any) => task.completed === true).length;
    const pendingTasks = taskData.length - completedTasks;
    const completedPercentage = (completedTasks / taskData.length) * 100;
    const pendingPercentage = (pendingTasks / taskData.length) * 100;
    

    
    function handleSubmit(e:any){
        e.preventDefault()
        console.log(taskPriority)
        console.log(dueTime)

        console.log(taskText)

        if(taskText && dueTime ){

            dispatch(addTask({
                title:taskText,
                description : "",
                due: dueTime,
                category: "normal",
                important:false,
                priority: taskPriority,
            }))
            setTaskPriority("")
            setDueTime("")
            setTaskText("")
        }

        console.log("action dispatched")
    }


    useEffect(()=>{
        dispatch(removeTask({id:'1'}))
    },[])
    

    const data = {
        labels: [
          'Completed',
          'Pending'
        ],
        datasets: [{
          data: [completedPercentage,pendingPercentage],
          backgroundColor: [
            '#3F9142',
            '#142E15'
          ],
          borderWidth: 0,
          radius: '100%'   
        }],
        Legend:{
          
        }
      
      };
      

    return (
        <div className="w-full h-screen md:flex md:gap-3 ">
            {/* left */}

            {
                menuState ? <div className="md:w-[350px] w-full flex-col justify-center items-center pt-[100px]">
                <div className="bg-secondary w-full h-[800px] flex flex-col gap-2 items-center relative pt-[70px]">
   
                <div className="w-[118px] h-[118px] rounded-full overflow-hidden absolute -top-16 ">
                  <img src={profile} alt="" className="w-full h-full object-fill" />
                 </div>
                 <h1 className="text-[15px] text-text-color font-medium font-Outfit leading-5">Hey , Admin</h1>
   
                 <div className="bg-bg-white text-[15px] font-Outfit font-medium w-[85%] h-[248px] flex flex-col justify-center" >
                   <div className="flex gap-[16px] py-2 px-4">
                       <div className="text-[24px]" onClick={() => setFilter("all tasks")}>
                       <PiNotepad/>
                       </div>
                       <p>All Tasks</p>
                   </div>
                   <div className="flex gap-[16px] py-2 px-4">
                       <div className="text-[24px] font-thin">
                       <CiCalendar/>
                       </div>
                       <p>Today</p>
                   </div>
                   <div className="flex gap-[16px] py-2 px-4">
                       <div className="text-[24px] cursor-pointer" >
                       <CiStar/>
                       </div>
                       <p>Important</p>
                   </div>
                   <div className="flex gap-[16px] py-2 px-4">
                       <div className="text-[24px]">
                       <CiMap/>
                       </div>
                       <p>Planned</p>
                   </div>
                   
   
                   <div className="flex gap-[16px] py-2 px-4">
                       <div className="text-[24px]">
                       <MdOutlineAssignmentInd/>
                       </div>
                       <p>Assigned to me</p>
                   </div>
                 </div>
   
                 <div className="bg-bg-white text-[15px] font-Outfit font-medium w-[85%] h-[80px] gap-2 flex items-center text-text-color px-4" >
                   <div className="text-[24px]"><BsPlusLg/></div>
                   <p>Add List</p>
                 </div>
   
                 <div className="bg-bg-white text-[15px] font-Outfit font-medium w-[85%] h-[300px] gap-2 flex flex-col text-text-color px-4" >
                   <p>Today's Tasks</p>
                   <p className="text-[21px] ">{taskData?.length}</p>
                   <div className="w-[200px] h-[200px]">
                   <Doughnut data={data} options={options} className="w-full h-full "/>
                   </div>
                 </div>
   
                </div>
   
               </div> : ""
            }
            
            
            {/* right */}
            <div className="w-full md:pl-6 flex gap-2 flex-col md:flex-row">
                <div  className={`${sideBar ? 'md:min-w-[70%]' : 'w-full'}  md:block transition-all duration-300`} >
                <div className="flex gap-1 items-center text-primary w-full py-3 border-b">
                    <p className="text-[15px]  font-medium font-Outfit">To Do</p>
                    <div className="text-[15px] font-primary">
                        <FaCaretDown/>
                    </div>
                </div>
                {/* add task */}
                <div className="h-[175px] w-full bg-secondary flex flex-col pt-[30px]">
                <form onSubmit={handleSubmit} className="flex  gap-4 flex-col items-start font-Outfit">
                    <div className="md:w-[500px] px-[20px] w-[90%]">
                    <input
                    
                        value={taskText}
                        onChange={(e) => setTaskText(e.target.value)}
                        placeholder="Add A Task"
                        className="w-full p-2 outline-none text-text-color placeholder-gray-400 py-[10px] text-[15px] bg-inherit resize-none"
                        onKeyPress={(e) => { if (e.key === 'Enter') handleSubmit}}
                    />

                    
                    </div>
                    
                    <div className="flex items-center gap-4 w-full justify-between text-gray-400 px-[20px]">
                    
                    <div className="flex gap-3 text-text-color">
                    <button type="button" className="hover:text-gray-600">
                        <Bell size={18} />
                    </button>
                    <button type="button" className="hover:text-gray-600">
                        <RefreshCcw size={18} />
                    </button>
                    <button type="button" className="relative hover:text-gray-600 cursor-default" >
                        <input type="date" className="absolute inset-0 opacity-0 w-full cursor-pointer" onChange={(e)=>setDueTime(e.target.value)}/>
                        <Calendar size={18} />
                    </button>
                    <div className="text-[20px]  cursor-pointer">
                       
                        <Select
                            value={taskPriority}
                            onChange={(e) => setTaskPriority(e.target.value)}
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                opacity: 0,
                                width: '100%',
                                height: '100%',
                                '& .MuiSelect-select': {
                                  padding: 0,
                                },
                                '& .MuiInput-input': {
                                  display: 'none'
                                }
                              }}
                        >
                            <MenuItem value={"Low"}>Low</MenuItem>
                            <MenuItem value={"Medium"}>Medium</MenuItem>
                            <MenuItem value={"High"}>High</MenuItem>
                        </Select>
                        <MdOutlineLowPriority/>
                      
                    </div>
                  
                    </div>
                    <button
                        type="submit"
                        className="bg-[#ade6ae] px-3 text-primary py-2 font-Outfit rounded-lg text-[15px] font-medium hover:bg-green-200"
                          
                     >
                        ADD TASK
                    </button>
                    </div>
                </form>
                </div>

                {/* tasks */}
                <div className="w-full bg-bg-white mt-5">
                <TaskList tasks={taskData} setSideBar={setSideBar} setEditTaskId={setEditTaskId}/>
                </div>
                </div>
              
                {
                    sideBar ?   <div className="md:w-[29%] relative md:block w-full"><TaskDetail setSideBar={setSideBar} editTaskId={editTaskId}/></div> : ""
                }
                    
                
               
            </div>
        </div>
    )
}