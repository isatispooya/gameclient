import toast, { Toaster } from "react-hot-toast";
import usePostPic from "../hooks/usePostPic";
import { useNavigate } from "react-router-dom";

const UploadPic = () => {
  const { mutate: postPic } = usePostPic("11");
  const navigate = useNavigate();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      postPic({ file });
      toast.success("تصویر با موفقیت آپلود شد");
      navigate("/missions");
    }
  };

  return (
    <>
      <Toaster />

      <div className="flex flex-col items-center justify-center w-full">
        <p className="text-center mb-7 mt-10 text-gray-500">
          با سپاس از همراهی و کمک شما به تیم کارآگاه ما در این رویداد برای کسب
          امتیاز بالاتر در ایستگاه عکاسی روبه رو درب سالن یک عکس یا محتوا با
          مضمون روز حسابدار منتشر واسکرین شات آن را آپلود کنید
        </p>
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-blue-300 border-dashed rounded-lg cursor-pointer bg-white dark:bg-white hover:bg-blue-50 dark:border-blue-400 dark:hover:border-blue-500 dark:hover:bg-blue-50"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-blue-500 dark:text-blue-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-blue-500 dark:text-blue-600">
              <span className="font-semibold">برای آپلود کلیک کنید</span>
            </p>
            <p className="text-xs text-blue-500 dark:text-blue-600">
              SVG, PNG, JPG یا GIF (MAX. 800x400px)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={handleFileChange}
            accept="image/*"
          />
        </label>
      </div>
    </>
  );
};

export default UploadPic;
