"use client"
import React, { useEffect, useState, Suspense } from 'react';
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import obituaryService from "@/services/obituary-service";
import { useBreakpoint } from '@/app/hooks/useBreakpoint';

export function CompanyPageFunerals({ city, userId }) {
    const [search, setSearch] = useState("");

    const handleSearch = () => {

    }
    return (
        <>
        <div className="w-full flex h-12 items-center justify-center desktop:pt-[53.65px] desktop:pb-[30px] desktop:pl-[2px] tablet:pr-[21px]">
            <div className="text-[#1E2125] text-[40px] font-variation-customOpt40 font-normal mobile:text-[24px] mobile:font-variation-customOpt28">
              Pogrebi v prihodnjih dneh
            </div>
          </div>
            <CarouselWrapper search={search} city={city} userId={userId} />
        </>
    )
}




// Helper functions
const formatDateForDisplay = (dateObj) => {
    const day = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();
    return `${day}.${month}.${year}`;
};

const formatDateForAPI = (dateObj) => {
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const year = dateObj.getFullYear();
    return `${year}-${month}-${day}`;
};

const getDayName = (dateObj) => {
    const days = ['Ned', 'Pon', 'Tor', 'Sre', 'Čet', 'Pet', 'Sob'];
    return days[dateObj.getDay()];
};

const Carousel = ({ search, city, userId }) => {
    const [funerals, setFunerals] = useState([]);
    const [currentDate, setCurrentDate] = useState(new Date());

    const breakpoint = useBreakpoint();

    const fetchFunerals = async () => {
        try {
            const formattedDate = formatDateForAPI(currentDate);

            const queryParams = {
                city, userId, startDate: formattedDate,
                endDate: formattedDate
            };
            if (search) queryParams.search = search;
            console.log('queryParams', queryParams);

            const response = await obituaryService.getCompanyPageFunerals(queryParams);

            if (response.error) {
                toast.error(
                    response.error || "Something went wrong. Please try again!"
                );
                return;
            }
            console.log(response.obituaries, "----------------");
            setFunerals(response?.obituaries || [])
            // splitFunerals(response.obituaries, startDate, endDate);
        } catch (err) {
            console.error('Error fetching funerals:', err);
            setObituaries([]);
        }
    };
    useEffect(() => {
        console.log(currentDate);

        // if (city && userId) {
        fetchFunerals();
        // }
    }, [city, userId, currentDate, search])


    const goToPrevious = () => {
        const newDate = new Date(currentDate);
        newDate.setDate(newDate.getDate() - 1);
        setCurrentDate(newDate);
    };

    const goToNext = () => {
        const newDate = new Date(currentDate);
        newDate.setDate(newDate.getDate() + 1);
        setCurrentDate(newDate);
    };

    // Check if current date is today (for next button limitation if needed)
    const isToday = () => {
        const today = new Date();
        return currentDate.toDateString() === today.toDateString();
    };

    return (
        <div className="max-w-[1920px] w-full tablet:w-full px-8 mobile:w-full mx-auto flex items-center justify-center flex-col bg-transparent">
            {/* Simple Date Navigation */}
            <div className="flex items-center justify-between py-12 w-full max-w-[900px]">
                <div className="text-left">
                    <h2 className="text-[#0A85C2] font-normal text-[24px] tablet:text-[32px] desktop:text-[32px] leading-tight">
                        {getDayName(currentDate)}, {formatDateForDisplay(currentDate)}
                    </h2>
                </div>

                <div className="flex items-center gap-4">
                    <button
                        onClick={goToPrevious}
                        className="p-3 hover:scale-110 transition-transform cursor-pointer"
                    >
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 18L9 12L15 6" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    <button
                        onClick={goToNext}
                        disabled={isToday}
                        className="p-3 hover:scale-110 transition-transform cursor-pointer"
                    >
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 18L15 12L9 6" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Dynamic Funeral Table */}
            <div className="flex flex-col max-w-[900px] w-full tablet:w-full mobile:w-full justify-center mx-auto border-t border-b border-[#D4D4D4]">
                {funerals.length === 0 ? (
                    <div className="text-center py-6 text-[#3C3E41]">
                        Ni vnešenih pogrebov tega dne.

                    </div>
                ) : (
                    funerals.map((item, index) => (
                        <div
                            key={item.id || index}
                            className="flex flex-row items-center border-b border-[#D4D4D4] w-full h-[64px] last:border-b-0"
                        >
                            <h1 className="text-[#0A85C2] font-normal text-sm mobile:text-lg tablet:text-lg desktop:text-xl w-[50px] mobile:w-[60px] tablet:w-[75px] desktop:w-[97px] text-center flex-shrink-0">
                                {item.funeralTimestamp
                                    ? new Date(item.funeralTimestamp).toLocaleTimeString([], {
                                        hour: '2-digit',
                                        minute: '2-digit',
                                        hour12: false
                                    })
                                    : '--:--'}
                            </h1>
                            <h3 className="text-[#3C3E41] font-semibold text-[12px] mobile:text-[14px] tablet:text-[16px] desktop:text-[18px] flex-1 min-w-0 pl-[8px] mobile:pl-[12px] tablet:pl-[16px] desktop:pl-[22px] truncate">
                                {item.name} {item.sirName}
                            </h3>
                            <h4 className="text-[#3C3E41] font-normal text-[10px] mobile:text-[12px] tablet:text-[14px] desktop:text-[16px] flex-1 min-w-0 pl-[4px] mobile:pl-[6px] tablet:pl-[8px] desktop:pl-[9px] truncate">
                                {item.location || item.city || ''}
                            </h4>
                            <button className="flex-shrink-0 p-1 mobile:p-2">
                                <img src="/arrow-next.png" className="w-3 h-3 mobile:w-4 mobile:h-4 tablet:w-5 tablet:h-5 desktop:w-6 desktop:h-6" />
                            </button>
                        </div>
                    ))
                )}
            </div>

            <div className="w-full mt-[72px]  flex justify-center tablet:mt-20 desktop:mt-20 px-4 mb-[100px]">
                <p className="text-[#3C3E41] hidden tablet:block desktop:block">
                    Če pogreb še ni vnešen, je pa termin že znan,
                    zaprosite svojo cvetličarno (ali pogrebno podjetje), da ga vnese.
                </p>

                <p className="text-[#3C3E41] tablet:hidden desktop:hidden text-sm">
                    Če pogreb še ni vnešen, je pa termin že znan,
                    zaprosite svojo cvetličarno (ali pogrebno p.), da ga vnese.
                </p>
            </div>
        </div>
    );
};

// Loading component for Suspense fallback
const CarouselLoading = () => (
    <div className="relative w-full h-[200px] flex items-center justify-center">
        <p className="text-gray-500">Nalaganje pogrebov...</p>
    </div>
);

// Wrapper component with Suspense boundary
const CarouselWrapper = ({ search, city, userId }) => {
    return (
        <Suspense fallback={<CarouselLoading />}>
            <Carousel search={search} city={city} userId={userId} />
        </Suspense>
    );
};

