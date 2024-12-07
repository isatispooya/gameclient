import { FC } from 'react';
import { motion } from 'framer-motion';
import useGiftGet from '../hooks/useGiftGet';


const TimeEnd: FC = () => {
    const { data, isLoading, error } = useGiftGet();
    
    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-gray-100 p-4">
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
                />
                <p className="mt-4 text-gray-600">در حال دریافت اطلاعات...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-gray-100 p-4">
                <div className="bg-red-100 p-4 rounded-lg text-red-600">
                    خطا در دریافت اطلاعات. لطفا دوباره تلاش کنید.
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-gray-100 p-4">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center border border-blue-100"
            >
                <motion.div 
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mb-6"
                >
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">
                        🎯 زمان مسابقه به پایان رسید
                    </h2>
                    <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "4rem" }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"
                    />
                </motion.div>
                
                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mb-8"
                >
                    <p className="text-gray-600 mb-6 text-lg">
                        ممنون از شرکت شما در این مسابقه
                    </p>
                    <motion.div 
                        className="bg-blue-50 p-6 rounded-xl shadow-inner space-y-4"
                    >
                        <h3 className="font-bold text-lg text-gray-800 mb-4">جوایز قابل انتخاب شما:</h3>
                        <div className="space-y-3">
                            {data?.available_gifts.map((gift, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 + (index * 0.1) }}
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-white p-3 rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-all"
                                >
                                    🎁 {gift}
                                </motion.div>
                            ))}
                        </div>
                        <p className="text-sm text-gray-500 mt-4">
                            شما می‌توانید یکی از جوایز بالا را انتخاب کنید.
                            <br />
                            مهلت استفاده تا پایان سال جاری می‌باشد.
                        </p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default TimeEnd;
