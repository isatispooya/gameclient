import { api } from "../../../api/api";

const UploadPicPost = async (file: File) => {
    const response = await api.post("/uploadpic/", {
        file: file
    });
    return response.data;
}
 
export default UploadPicPost;
