import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { MdOutlineLowPriority } from "react-icons/md";
import { AiOutlineBorder } from "react-icons/ai";
import { IoRepeat } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { IoCheckbox } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";

import { CiBellOn } from "react-icons/ci";

import { X, Trash2 } from 'lucide-react';
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { editDescription, removeTask, toggleCompleted, toggleImportant } from "../../store/taskSlice";
import toast from "react-hot-toast";

const TaskDetail = ({setSideBar,editTaskId}:{setSideBar:any,editTaskId:any}) => {
  const tasks = useSelector((state:any)=>state.tasks.tasks)
  const[noteText,setNoteText] = useState("")

  const selectedTask : any = tasks.find((task: any) => task.id === editTaskId);
  const dispatch = useDispatch()
  return (
    <div className="flex flex-col h-screen bg-secondary font-Outfit dark:bg-bg-gray">
      {/* Main content */}
      <div className="h-full flex p-4 flex-col justify-between dark:text-white">
        {/* Task title and star */}
       <div>
       <div className="flex justify-between items-center border-b py-4 px-4 dark:text-white">
          <div className="flex items-center gap-3">
              {
                  selectedTask?.completed ? 
                  <div className="text-primary text-[24px] cursor-pointer dark:text-white " onClick={()=> dispatch(toggleCompleted({id:selectedTask?.id}))}>
                  <IoCheckbox/>
                  </div> 
                  :<div className="text-text-color text-[24px] cursor-pointer dark:text-white" onClick={()=> dispatch(toggleCompleted({id:selectedTask?.id}))}>
                  <AiOutlineBorder/>
                  </div>
              }
           
            <span className="text-text-color text-[15px] leading-5 dark:text-white">{selectedTask.title}</span>
          </div>
           {
              selectedTask?.important ? 
              <div className="text-primary text-[24px] cursor-pointer dark:text-white" onClick={()=> dispatch(toggleImportant({id:selectedTask?.id}))}>
              <AiFillStar/>
              </div> 
              :<div className="text-text-color text-[24px] cursor-pointer dark:text-white" onClick={()=> dispatch(toggleImportant({id:selectedTask?.id}))}>
              <AiOutlineStar/>
              </div>
           }
        </div>

        <div className="flex justify-between items-center border-b py-4 px-4">
          <div className="flex items-center gap-3">
            <div className="text-primary text-[24px] dark:text-white"><MdOutlineLowPriority/></div>
            <span className="text-text-color text-[15px] leading-5 dark:text-white">{selectedTask?.priority}</span>
          </div>
        
        </div>

        <div className="flex justify-between items-center border-b py-4 px-4" onClick={() => toast("Features Coming Shortly 🚀")}>
          <div className="flex items-center gap-3">
            <div className="text-primary text-[24px] dark:text-white"><GoPlus/></div>
            <span className="text-text-color text-[15px] leading-5 dark:text-white">Add Step</span>
          </div>
        
        </div>


        <div className="flex justify-between items-center border-b py-4 px-4" onClick={() => toast("Features Coming Shortly 🚀")}>
          <div className="flex items-center gap-3">
            <div className="text-primary text-[24px] dark:text-white"><CiBellOn/></div>
            <span className="text-text-color text-[15px] leading-5 dark:text-white">Set Remainder</span>
          </div>
        
        </div>


        <div className="flex justify-between items-center border-b py-4 px-4">
          <div className="flex items-center gap-3">
            <div className="text-primary text-[24px] dark:text-white"><CiCalendar/></div>
            <span className="text-text-color text-[15px] leading-5 dark:text-white">{selectedTask?.due}</span>
          </div>
        
        </div>


        <div className="flex justify-between items-center border-b py-4 px-4" onClick={() => toast("Features Coming Shortly 🚀")}>
          <div className="flex items-center gap-3">
            <div className="text-primary text-[24px] dark:text-white"><IoRepeat/></div>
            <span className="text-text-color text-[15px] leading-5 dark:text-white">Repeat</span>
          </div>
        
        </div>
        {/* Action buttons */}
      
        {/* Notes section */}
        <div className="flex justify-between items-center border-b py-4 px-4">
          <div className="flex items-center gap-3 font-Outfit" >
            {
              selectedTask?.description ? <div className="font-Outfit text-text-color text-[15px] leading-5 dark:text-white">{selectedTask?.description}</div> : 
              <textarea
                    
                    value={noteText}
                    onChange={(e) => setNoteText(e.target.value)}
                    placeholder="Add Note"
                    className="w-full p-2 outline-none text-text-color placeholder-gray-400 py-[10px] text-[15px] bg-inherit resize-none"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                         dispatch(editDescription({
                          id:editTaskId,
                          note: noteText
                         }))
                        
                      }
                    }}
          />
           
            }
          
          </div>
        
        </div>
        
       </div>
        <div className="border-t p-4 flex justify-between items-center dark:text-white">
        <button className="text-gray-400 hover:text-gray-600" onClick={() => setSideBar(false)}>
          <X size={20} />
        </button>
        <span className="text-gray-400 text-sm">Created On {selectedTask?.due}</span>
        <button className="text-gray-400 hover:text-gray-600" onClick={() => {
          dispatch(removeTask({
            id:editTaskId
          }))
          setSideBar(false)
          toast("Task Deleted!")
        }}>
          <Trash2 size={20} />
        </button>
      </div>
      </div>

    
    </div>
  );
};

export default TaskDetail;