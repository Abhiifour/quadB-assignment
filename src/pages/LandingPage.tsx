import  { useState } from 'react';
import {  ArrowRight, X, Mail, Lock, User } from 'lucide-react';
import { SiTask } from "react-icons/si";
import logo from "../assets/logomark.png"
import { useDispatch } from 'react-redux';
import {loginUser, updateUserState} from "../../store/userSlice"




export default function LandingPage() {
  const [authModal, setAuthModal] = useState({ isOpen: false, mode: 'login' });

  return (
    <div className="min-h-screen  dark:bg-gray-900 relative overflow-hidden bg-secondary font-Outfit ">
    
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200/50 dark:border-gray-700/50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className='w-[30px] h-[30px]'>
              <img src={logo} alt="" className='w-full h-full' />
            </div>
            <span className="text-2xl font-bold text-primary tracking-tight">DoIt</span>
          </div>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setAuthModal({ isOpen: true, mode: 'login' })}
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white font-medium"
            >
              Sign In
            </button>
            <button 
              onClick={() => setAuthModal({ isOpen: true, mode: 'signup' })}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-xl font-medium transition-all duration-200 hover:scale-[1.02] shadow-lg hover:shadow-xl hover:shadow-green-500/25"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with gradient background */}
      <div className="max-w-6xl mx-auto px-6 pt-40 pb-20 relative mt-10">
        <div className="text-center mb-20 relative">
          {/* Added gradient background element */}
          <div className="absolute inset-0 -top-32 -bottom-32 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-green-100/30 via-transparent to-transparent dark:from-green-900/30 rounded-full blur-3xl transform scale-150" />
            <div className="absolute inset-0 bg-gradient-to-tr from-green-100/20 via-transparent to-transparent dark:from-green-900/20 rounded-full blur-3xl rotate-12 transform scale-150" />
          </div>

          <div className="relative">
           <div className='flex flex-col '>
           <div className="inline-block mb-6">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900/50 rounded-2xl flex items-center justify-center mx-auto animate-float  text-[32px] text-primary">
               <SiTask/>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8  text-primary inline-block  bg-clip-text tracking-tighter">
              Stay Organized, Effortlessly
            </h1>
           </div>
            <p className="text-gray-600 dark:text-gray-300 text-xl md:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed tracking-tight">
              Transform your daily tasks into achievements. Simple, beautiful, and designed for you.
            </p>
            <div className="flex gap-6 justify-center">
              <button 
                onClick={() => setAuthModal({ isOpen: true, mode: 'signup' })}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-medium flex items-center gap-2 transform transition-all duration-200 hover:scale-[1.02] shadow-lg hover:shadow-xl hover:shadow-green-500/25"
              >
                Start Free <ArrowRight size={20} />
              </button>
             
            </div>
          </div>
        </div>

     
      <AuthModal 
        isOpen={authModal.isOpen}
        mode={authModal.mode}
        onClose={() => setAuthModal({ ...authModal, isOpen: false })}
      />
    </div>
    </div>
  );
}


const AuthModal = ({ isOpen, onClose, mode }:{isOpen:any, onClose:any, mode:any}) => {
  const dispatch = useDispatch()

  const [username , setUsername] = useState("")
  const[email , setEmail] = useState("")
  const[password, setPassword] = useState("")
  
  function handleSubmit(){
    if(mode === "login"){
      dispatch(loginUser({
        email:email,
        password:password
       
      }))
    }
    else{
      dispatch(updateUserState({
        name:username,
        email,
        password
      }))
    }
  }
  


  if (!isOpen) return <div></div>;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 animate-fadeIn z-50 font-Outfit">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 w-full max-w-md relative border border-gray-100 dark:border-gray-700 shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute right-6 top-6 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
        >
          <X size={20} />
        </button>
        
        <div className="mb-6 text-center">
     
          <h2 className="text-2xl font-bold mb-2 dark:text-white">
            {mode === 'login' ? 'Welcome Back!' : 'Join Us Today'}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            {mode === 'login' ? 'Great to see you again' : 'Start your productivity journey'}
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {mode === 'signup' && (
            <div className="group">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-green-500" size={20} />
                <input
                  type="text"
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-all"
                  placeholder="admin"
                  onChange={(e)=>setUsername(e.target.value)}
                  value={username}
                />
              </div>
            </div>
          )}
          
          <div className="group">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-green-500" size={20} />
              <input
                type="email"
                value={email}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-all"
                placeholder="admin@example.com"
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="group">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-green-500" size={20} />
              <input
                type="password"
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-all"
                placeholder="••••••••"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:to-green-700 text-white py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl hover:shadow-green-500/25"
            onClick={handleSubmit}
          >
            {mode === 'login' ? 'Sign In' : 'Get Started'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          {mode === 'login' ? (
            <>
              New here?
              <button className="text-primary hover:text-green-700 font-medium"> Create account</button>
            </>
          ) : (
            <>
              Already have an account?
              <button className="text-primary hover:text-green-700 font-medium"> Sign in</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
