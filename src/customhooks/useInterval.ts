import { useEffect } from "react";

export default function useInterval(
    intervalFunc: () => void,
    duration = 1000
): void {
    useEffect(() => {
        const intervalId = window.setInterval(intervalFunc, duration);
        return () => {
            window.clearInterval(intervalId);
        };
    }, [intervalFunc, duration]);
}
