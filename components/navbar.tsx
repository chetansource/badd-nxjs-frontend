import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { UserAuth } from "@/lib/context/auth_context";

const Navbar = () => {
  const { user, signOut } = UserAuth();
  const router = useRouter();

  const handleLogOut = async () => {
    try {
      await signOut();
      router.push("/login");
    } catch (error) {
      console.log("Error While Signout",error);
    }
  };

  return (
    <div className="fixed top-0 w-full h-14 lg:h-20 bg-black border-b  border-white px-2 md:px-12 py-2 text-white flex  items-center justify-center border-opacity-30 z-50">
      <div className="flex-grow font-metropolis text-sm md:text-2xl">
        {user && user.displayName} @ BADD
      </div>
      <div className="flex flex-row items-center justify-end font-metropolis  gap-4">
        <Link
          href="/about"
          className=" text-sm md:text-2xl invisible md:visible"
        >
          About
        </Link>
        <Button
          className="text-sm md:text-2xl hover:bg-white hover:text-black"
          onClick={handleLogOut}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
