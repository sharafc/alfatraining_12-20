import React from "react";

import css from "./Clock.module.css";
import useTime, { Times } from "../../hooks/useTime";

interface Props {
    maxSize?: number;
    className?: string;
}

export default function Clock({ maxSize = 200, className }: Props): JSX.Element {
    const times = useTime();

    const styles = {
        container: { width: maxSize, height: maxSize },
        wrap: { width: maxSize * 0.875, height: maxSize * 0.875 },
        hour: { width: maxSize * 0.015, height: maxSize * 0.25 },
        minute: { width: maxSize * 0.01, height: maxSize * 0.325 },
        second: { width: maxSize * 0.005, height: maxSize * 0.225 },
        dot: { width: maxSize * 0.03, height: maxSize * 0.03 },
    };

    return (
        <div className={`${css.container} ${className}`} style={styles.container}>
            <div className={css.clock}>
                <div className={css.wrap} style={styles.wrap}>
                    {(Object.keys(times) as Array<keyof Times>).map((time) => (
                        <span
                            key={time}
                            className={css[time]}
                            style={{ ...styles[time], transform: `rotate(${times[time]}deg)` }}
                        />
                    ))}
                    <span className="dot" style={styles.dot}></span>
                </div>
            </div>
        </div>
    );
}
