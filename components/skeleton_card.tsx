import { Skeleton } from "./ui/skeleton";

export default function SkeletonCard() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 mx-auto sm:p-6 md:p-14">
            <div className=" flex flex-col gap-2 ">
                <Skeleton className="h-[100px] md:h-[150px] w-[280px] md:w-[400px] rounded-xl bg-gray-800 grow" />
                {/* <Skeleton className="h-20 md:h-24 w-[300px] md:w-[350px]  bg-gray-800" /> */}
            </div>
        </div>
    );
}