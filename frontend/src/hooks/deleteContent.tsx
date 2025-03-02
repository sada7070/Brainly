import axios from "axios";

export function useDeleteContent(setContents: any) {
    function deleteContent(contentId: string) {
        axios.delete(`http://localhost:3000/api/v1/dashboard/content/${contentId}`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then(() => {
            setContents((prevContents: any) => prevContents.filter((content: any) => content._id !== contentId));
        }).catch((error) => {
            console.error("Error deleting content:", error);
        });
    }

    return { deleteContent };
}