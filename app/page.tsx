"use client";
import React, { useState } from "react";
import MainContent from "@/components/main_content";
import Navbar from "@/components/navbar";
import SearchBar from "@/components/searchbar";

const Home = () => {
  const [query, setQuery] = useState("");

  return (
    <main className="min-h-screen  bg-black">
      <Navbar />
      <div className="w-full pt-24 lg:pt-32 text-white font-metropolis text-lg md:text-5xl text-center">
        FIND THE PUB OR BAR NEAR YOU
      </div>
      <SearchBar setQuery={setQuery} />
      <MainContent query={query} />
    </main>
  );
};

export default Home;
