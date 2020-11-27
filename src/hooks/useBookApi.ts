import { Method } from "axios";
import { useState, useEffect } from "react";
import bookApi from "../shared/BookApi";

type Setter<T> = (data: T) => void;

export function useBookApi<T>(method: Method, path: string): [T | undefined, Setter<T>] {
    const [data, setData] = useState<T>();

    useEffect(() => {
        bookApi(method, path, (responseData: T) => setData(responseData));
    }, [method, path]);

    return [data, setData];
}
