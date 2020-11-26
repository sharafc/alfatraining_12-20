import { useEffect } from "react";

export default function useDocumentTitle(newDocTitle: string): void {
    useEffect(() => {
        const defaultTitle = window.document.title;
        window.document.title = newDocTitle;
        return () => {
            window.document.title = defaultTitle;
        };
    }, [newDocTitle]);
}
