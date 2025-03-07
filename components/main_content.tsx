'use client'
import React, { useState, useEffect } from 'react'
import { getPubsInfo } from "../app/routes/fetch_requests";
import { useRouter } from "next/navigation";
import { UserAuth } from "@/lib/context/auth_context";
import PubCard from "./pub_card";
import SkeletonCard from "./skeleton_card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export interface OpenHours {
  Monday: string[];
  Tuesday: string[];
  Wednesday: string[];
  Thursday: string[];
  Friday: string[];
  Saturday: string[];
  Sunday: string[];
}

export interface Pub {
  ID: number;
  Title: string;
  Descriptions: string;
  Address: string;
  ReviewRating: string;
  Latitude: string;
  Longitude: string;
  Images: { Title: string; Image: string }[];
  Reservations: { Link: string; Source: string }[];
  OpenHours: OpenHours;
}

interface MainContentProps {
  query: string;
}

const MainContent = ({ query }: MainContentProps) => {

  const [pubInfo, setPubInfo] = useState<Pub[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(15);
  const { user,getToken } = UserAuth();
  const router = useRouter();



  const filteredPubs = () => {
    return query.trim()
      ? pubInfo.filter((pub) =>
        pub.Title.toLowerCase().includes(query.toLowerCase().trim())
      )
      : pubInfo;
  }


  useEffect(() => {

    const fetchData = async (page: number) => {
      try {
        if (user ) {
          const token = await getToken(); // Get the Firebase token
          if (token) {
            const data = await getPubsInfo(page, token);
            if (data) {
              setPubInfo(data);
            }
          } else {
            console.error("Token is null or invalid.");
          }
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    if (!user?.emailVerified) {
      // router.prefetch("/login");
      router.push("/login");
    } else {
      fetchData(currentPage);
    }
  }, [user, currentPage, router, getToken]);

  return (
    <>
      <div className=" mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-20 gap-10 md:gap-8 lg:gap-16 font-metropolis py-8 px-4 md:px-6 lg:mx-auto z-1">
      {Array.from({ length: 9 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        {/* {filteredPubs() && filteredPubs().length > 0
          ? filteredPubs().map((pub:Pub) => <PubCard key={pub.ID} pub={pub} />)
          : Array.from({ length: 9 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))} */}
      </div>

      <PaginationSection
        totalItems={252}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  )
}

export default MainContent



export function PaginationSection({
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}: {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <Pagination className="hidden md:block md:w-1/2 ">
      <PaginationContent className="w-full flex justify-center">
        <PaginationItem>
          <PaginationPrevious onClick={() => handlePrevPage()} />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext onClick={() => handleNextPage()} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
