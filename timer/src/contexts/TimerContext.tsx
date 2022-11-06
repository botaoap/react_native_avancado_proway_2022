import React, { createContext, useContext, useState } from "react"

type TimerContextType = {
    timer: string;
    setTimer: React.Dispatch<React.SetStateAction<string>>;
    getHours: () => string;
    getMin: () => string;
    getSec: () => string;
}

const TimerContext = createContext<TimerContextType>(null!);

export function TimerProvider( { children }: { children: React.ReactNode }) {
    const [timer, setTimer] = useState("");

    function getHours() : string {
        switch (timer.length) {
            case 5:
                return "0" + timer[timer.length - 5]
            case 6:
                return timer.slice(0,2)
            default:
                return "00"
        }
    }

    function getMin() : string {
        
        switch (timer.length) {
            case 3:
                return "0" + timer[timer.length - 3]
            case 4:
                return timer.slice(0,2)
            case 5:
                return timer.slice(1,3)
            case 6:
                return timer.slice(2,4)
            default:
                return "00"
        }
    }

    function getSec() : string {

        switch (timer.length) {
            case 1:
                return "0" + timer
            case 2:
                return timer
            case 3:
                return timer.slice(1,3)
            case 4:
                return timer.slice(2,4)
            case 5:
                return timer.slice(3,5)
            case 6:
                return timer.slice(4,6)
            default:
                return "00"
        }
    }

    return (
        <TimerContext.Provider value={{ timer, setTimer, getHours, getMin, getSec }}>
            { children }
        </TimerContext.Provider>
    );
}

/* Hook para pegar contexto desta classe */
export const useTimer = () => useContext(TimerContext);