import axios, { AxiosResponse } from "axios";
import { factoryRawToBook, isBookRaw, isBookRawArray } from "../types/BookBase";

/*
 * Axios Interceptor
 * Factory BookRaw to Book
 */
axios.interceptors.response.use(
    (response: AxiosResponse) => {
        if (isBookRaw(response.data)) {
            response.data = factoryRawToBook(response.data);
        } else if (isBookRawArray(response.data)) {
            response.data = response.data.map((book) => factoryRawToBook(book));
        }
        return response;
    },
    (error) => Promise.reject(error)
);
