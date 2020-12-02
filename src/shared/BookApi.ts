import axios, { Method, AxiosResponse } from "axios";

type Setter<T> = (data: T) => void;

/*
 * Useful for calls on events or in conditions
 *
 * @param method [Method], http method
 * @param path [string], relative path to baseUrl
 * @param data [function], callback, gets `response.data` as an argument
 * @param data [object], body data
 */
export default function bookApi<T>(method: Method, path: string, callback: Setter<T>, data = {}): void {
    const baseUrl = "https://api3.angular-buch.com/secure";

    axios({
        method: method,
        url: `${baseUrl}/${path}`,
        headers: { Authorization: "Bearer 1234567890" },
        data,
    })
    .then((response: AxiosResponse<T>) => {
        callback(response.data);
    })
    .catch((error) => {
        console.error(error);
    });
}
