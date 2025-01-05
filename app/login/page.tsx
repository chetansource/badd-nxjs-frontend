'use client'
import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { UserAuth } from '@/lib/context/auth_context';
import { AuthContextType } from '@/lib/context/auth_context';

const LoginPage = () => {

  const { user ,googleLogin } = UserAuth() as AuthContextType;
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await googleLogin();
    } catch (error) {
      console.log("HandleSubmit Error : ", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (user?.emailVerified) {
      router.push("/");
    }
  }, [router, user]);


  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-white font-sans bg-gradient-to-r from-gray-900 to-gray-600">
      <div className="relative w-full max-w-3xl mx-auto px-4 lg:px-12 ">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 flex items-center justify-center bg-gradient-to-r from-gray-600 to-gray-900 p-6">
              <span className="text-lg lg:text-xl text-white font-semibold italic text-center">
                &quot;Bengaluru: Where every pint tells a story.&quot;
              </span>
            </div>
            <div className="p-6 lg:px-12 lg:py-20 md:w-1/2 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                Welcome Back
              </h2>
              <span className="text-gray-600 text-center mb-6">
                Unlock the door to a world of brews and stories.
              </span>
              <Button
                className="w-full py-6 px-4 bg-white hover:bg-black text-black text-lg md:text-xl font-bold hover:text-white border-4 border-gray-300 rounded-2xl shadow-sm transition-colors duration-300 ease-in-out flex items-center justify-center"
                onClick={handleSubmit}
                disabled={isLoading}
              >
                <span>
                  {isLoading ? (
                    "Loading..."
                  ) : (
                    "Login with Google"
                  )}
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage