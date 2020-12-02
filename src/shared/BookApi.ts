import axios, { Method } from "axios";

export default function bookApi<T>(method: Method, path: string, callback: (data: T) => void): void {
    const URL = "https://api3.angular-buch.com/";

    axios({
        method: method,
        url: URL + path,
    })
    .then((response) => {
        callback(response.data);
    })
    .catch((error) => {
        console.error(error);
    });
}
