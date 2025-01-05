"use client";
import React from "react";
import SearchIcon from "./ui/search_icon";

interface SearchBarProps {
    setQuery: (query: string) => void;
}

const SearchBar = ({ setQuery }: SearchBarProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    return (
        <div className="container mx-auto flex  justify-center pt-14">
            <div className="border-[2px] border-solid border-white p-3 rounded-[15px]  flex flex-row justify-between border-opacity-50">
                <div className="flex flex-row w-full">
                    <label htmlFor="inputId">
                        <SearchIcon />
                    </label>
                    <input
                        onChange={handleChange}
                        type="text"
                        id="inputId"
                        placeholder="Search..."
                        className="bg-transparent text-white text-xl px-2 focus:outline-none"
                    />
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
