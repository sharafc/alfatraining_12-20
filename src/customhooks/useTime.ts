import { useState } from "react";
import useInterval from "./useInterval";

export type Times = {
    hour: number;
    minute: number;
    second: number;
};

export default function useTime(): Times {
    const dateToTimes = (): Times => {
        const date = new Date();
        return {
            hour: (((date.getHours() + 11) % 12) + 1) * 30,
            minute: date.getMinutes() * 6,
            second: date.getSeconds() * 6,
        };
    };

    const [time, setTime] = useState<Times>(dateToTimes);

    useInterval(() => {
        setTime(dateToTimes());
    });

    return time;
}
