import { useNavigate } from "react-router-dom";
import { useMissions } from "../../missions/hooks";
import toast, { Toaster } from "react-hot-toast";
import { IoArrowBack, IoRefresh } from "react-icons/io5";
import { AxiosError } from "axios";

const Broker = () => {
  const { mutate, data } = useMissions("2");
  const navigate = useNavigate();

  const handleClick = () => {
    mutate(undefined, {
      onSuccess: () => {
        toast.success("بروزرسانی با موفقیت انجام شد");
      },
      onError: (error: Error) => {
        const axiosError = error as AxiosError<{ error: string }>;
       
        toast.error(axiosError?.response?.data?.error || "خطایی رخ داده است");
      },
    });
  };
  console.log(data);

  const handleBack = () => {
    navigate("/");
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-col space-y-4 justify-center">
        <button
          onClick={handleClick}
          className="bg-blue-500 flex items-center justify-center gap-2 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg shadow-md transition duration-200 ease-in-out transform hover:scale-105"
        >
          <span>بروزرسانی</span>
          <IoRefresh />
        </button>
        <button
          onClick={handleBack}
          className="bg-blue-500 flex items-center justify-center gap-2 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg shadow-md transition duration-200 ease-in-out transform hover:scale-105"
        >
          <span>بازگشت</span>
          <IoArrowBack />
        </button>
      </div>
    </>
  );
};

export default Broker;
