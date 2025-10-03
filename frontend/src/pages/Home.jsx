import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

export default function Home() {
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [isLoggedIn, setLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    const checkLoggedInUser = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (token) {
          const config = {
            headers: {
              "Authorization": `Bearer ${token}`
            }
          };
          const response = await axios.get("http://127.0.0.1:8000/api/user/", config)
          setLoggedIn(true)
          setUsername(response.data.username)
        } else {
          // No token found, redirect to login
          navigate('/login')
        }
      } catch(error) {
        console.log("Authentication error:", error.response?.data)
        // Token invalid or expired, redirect to login
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        navigate('/login')
      } finally {
        setIsLoading(false)
      }
    };
    checkLoggedInUser()
  }, [navigate])

  const handleLogout = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const refreshToken = localStorage.getItem("refreshToken");

      if(accessToken && refreshToken) {
        const config = {
          headers: {
            "Authorization": `Bearer ${accessToken}`
          }
        };
        await axios.post("http://127.0.0.1:8000/api/logout/", {"refresh": refreshToken}, config)
      }
    } catch(error) {
      console.error("Logout error:", error.response?.data || error.message)
    } finally {
      // Always clear tokens and redirect
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      navigate('/login')
    }
  }

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-full">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  // Only render if user is logged in (otherwise they'll be redirected)
  if (!isLoggedIn) {
    return null
  }

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 min-h-full">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome, {username}!
            </h1>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200"
            >
              Logout
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Dashboard content can go here */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Chat History</h3>
              <p className="text-blue-700">View your previous conversations with the AI chatbot.</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-900 mb-2">New Chat</h3>
              <p className="text-green-700">Start a new conversation with the AI chatbot.</p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">Settings</h3>
              <p className="text-purple-700">Customize your chatbot experience and preferences.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}