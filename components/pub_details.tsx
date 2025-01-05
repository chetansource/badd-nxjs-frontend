import React from "react";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Pub } from "./main_content";

interface PubDetailsProps {
  pub: Pub;
}

const PubDetails = ({ pub }: PubDetailsProps) => {
  // Whitelist for allowed domains
  const allowedDomains = ["www.google.com"];

  // Memoize the handleViewLocation function to avoid unnecessary re-renders
  const handleViewLocation = (latitude: string, longitude: string) => {
    const url = `https://www.google.com/maps?q=${encodeURIComponent(
      latitude
    )},${encodeURIComponent(longitude)}`;
    const domain = new URL(url).hostname;

    if (allowedDomains.includes(domain)) {
      window.open(url, "_blank");
    } else {
      console.warn("Blocked an attempt to open an untrusted URL:", url);
    }
  };

  return (
    <SheetContent className="overflow-y-auto md:overflow-y-hidden bg-black">
      <SheetHeader>
        <SheetTitle className="text-white font-bold py-8 text-2xl ">
          Unwind at {pub.Title}
        </SheetTitle>
        <SheetDescription>
          <span className="text-white block text-base font-bold py-4">
            <span className="text-[#FBB117] block md:inline pr-4 pb-2 md:pb-0 text-xl md:text-2xl">
              Description:
            </span>
            {pub.Descriptions ? (
              pub.Descriptions
            ) : (
              <span className="text-gray-400">No description available</span>
            )}
          </span>
          <span className="text-white text-base font-bold block py-4">
            <span className="text-[#FBB117] block md:inline  pr-4 pb-2 md:pb-0 text-xl md:text-2xl">
              Address:
            </span>
            {pub.Address}
          </span>
          <span className="text-white font-bold text-base block py-4">
            <span className="text-[#FBB117] block text-xl md:text-2xl">
              Reservations:
            </span>
            {pub.Reservations && pub.Reservations.length > 0 ? (
              pub.Reservations.map((site, index) => (
                <a
                  key={index}
                  href={site.Link}
                  className="text-[#f3f4f6] hover:text-[#FBB117] opacity-70 text-xl md:text-2xl"
                >
                  <br />
                  {site.Source}
                  <br />
                </a>
              ))
            ) : (
              <span className="text-gray-400">
                No Reservation sites are available
              </span>
            )}
          </span>
          <span className="text-white font-bold text-base block py-4 pb-6">
            <span className="text-[#FBB117] block pb-2 text-xl md:text-2xl">
              OpenHours:
            </span>
            {pub.OpenHours ? (
              <>
                <span>
                  Monday: {pub.OpenHours.Monday && pub.OpenHours.Monday[0]}
                </span>
                <br />
                <span>
                  Tuesday: {pub.OpenHours.Tuesday && pub.OpenHours.Tuesday[0]}
                </span>
                <br />
                <span>
                  Wednesday:{" "}
                  {pub.OpenHours.Wednesday && pub.OpenHours.Wednesday[0]}
                </span>
                <br />
                <span>
                  Thursday:{" "}
                  {pub.OpenHours.Thursday && pub.OpenHours.Thursday[0]}
                </span>
                <br />
                <span>
                  Friday: {pub.OpenHours.Friday && pub.OpenHours.Friday[0]}
                </span>
                <br />
                <span>
                  Saturday:{" "}
                  {pub.OpenHours.Saturday && pub.OpenHours.Saturday[0]}
                </span>
                <br />
                <span>
                  Sunday: {pub.OpenHours.Sunday && pub.OpenHours.Sunday[0]}
                </span>
              </>
            ) : (
              <span className="text-gray-400">
                No Reservation sites are available
              </span>
            )}
          </span>
          <button
            className="flex flex-col text-white hover:text-black font-bold border-2 border-white border-opacity-20 rounded-lg shadow-slate-100 shadow-md  hover:bg-white hover:shadow-none p-2 text-lg md:text-xl"
            type="button"
            onClick={() => handleViewLocation(pub.Latitude, pub.Longitude)}
          >
            view location
          </button>
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  );
};

export default PubDetails;
