import { useState, useEffect } from "react";
import axios, { AxiosResponse, Method } from "axios";

/*
 * Abstracts away both needs for api calls,
 * on rendering and on events / conditions
 *
 * useBookApi, hook
 * bookApi, normal function
 *
 */

/*
 * Useful for http data as a dependency in rendering
 *
 * @param method [Method], http method
 * @param path [string], relative path to baseUrl
 * @return, Response Data
 */
export function usePostApi<T>(method: Method, path: string): T | undefined {
    const [data, setData] = useState<T>();

    useEffect(() => {
        postApi(method, path, (_data: T) => setData(_data));
    }, [method, path]);

    return data;
}

/*
 * Useful for calls on events or in conditions
 *
 * @param method [Method], http method
 * @param path [string], relative path to baseUrl
 * @param data [function], callback, gets `response.data` as an argument
 * @param data [object], body data
 */
export function postApi<T>(method: Method, path: string, callback: (data: T) => void, data = {}): void {
    const baseUrl = "https://jsonplaceholder.typicode.com";

    axios({
        method: method,
        url: `${baseUrl}/${path}`,
        data,
    }).then((response: AxiosResponse<T>) => callback(response.data));
}
