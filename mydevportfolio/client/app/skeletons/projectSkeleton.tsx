// SkeletonProjectItem.tsx
export default function  SkeletonProjectItem()
{
    return (
        <div className="py-[10px] flex flex-row max-slg:flex-col max-slg:h-auto max-slg:gap-y-[20px] space-x-[30px] relative h-[300px] shadow-[0px_0px_10px_black] px-[20px] rounded-md animate-pulse">
            {/* Image placeholder */}
            <div className="relative flex-shrink-0">
                <div className="h-[270px] w-[350px] max-sm:h-[200px] max-sm:w-full rounded-md bg-gray-700" />
            </div>

            {/* Content placeholder */}
            <div className="flex flex-col gap-y-[10px] flex-1 pt-[10px]">
                {/* Title */}
                <div className="h-[20px] w-[55%] rounded bg-gray-700" />

                {/* Description lines */}
                <div className="h-[14px] w-full rounded bg-gray-700" />
                <div className="h-[14px] w-[90%] rounded bg-gray-700" />
                <div className="h-[14px] w-[75%] rounded bg-gray-700" />

                {/* Tech stack pills */}
                <div className="flex flex-row flex-wrap gap-y-2.5 space-x-[10px] py-[10px]">
                    {[72, 88, 60, 80].map((w, i) => (
                    <div key={i} className="h-[30px] rounded-md bg-gray-700" style={{ width: w }} />
                    ))}
                </div>

                {/* URL row */}
                <div className="flex flex-row gap-x-[5px] items-center">
                    <div className="h-[17px] w-[17px] rounded bg-gray-700 flex-shrink-0" />
                    <div className="h-[13px] w-[200px] rounded bg-gray-700" />
                </div>
            </div>
        </div>
    )
}