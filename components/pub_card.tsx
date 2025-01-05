import React from "react";
import PubDetails from "./pub_details";
// import PubImageCarousel from "./pub_image_carousel";
import {
    Sheet,
    SheetTrigger,
} from "@/components/ui/sheet";
import { StarIcon } from "@radix-ui/react-icons";
import { Pub } from "./main_content";


interface PubCardProps {
    pub: Pub
}

const PubCard = ({ pub }: PubCardProps) => {
    return (
        <Sheet key={pub.ID}>
            <SheetTrigger asChild>
                <div className="h-32 md:h-40 group flex flex-col text-white border-2 border-white border-opacity-20 rounded-lg shadow-slate-100 shadow-md hover:shadow-none hover:cursor-pointer hover:bg-gradient-to-r hover:from-gray-900 hover:to-gray-600 mx-2 md:mx-0  relative overflow-hidden ">
                    {/* Carousel or Default Text */}
                    {/* <PubImageCarousel images={pub.Images} /> */}
                        <div className="relative px-2 md:p-6">
                            <h2 className="text-xl md:text-2xl py-4">{pub.Title}</h2>
                            <div className="flex gap-2 pb-2 md:pb-0">
                                <div className="flex flex-col justify-center">
                                    <StarIcon />
                                </div>
                                <h5 className="text-lg md:text-xl">{pub.ReviewRating}</h5>
                            </div>
                        </div>
                </div>
            </SheetTrigger>
            <PubDetails pub={pub} />
        </Sheet>
    );
};

export default PubCard;
