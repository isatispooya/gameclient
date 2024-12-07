const Sponser = () => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto my-8">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {/* بخش طراحی */}
        <a href="https://gventgame.ir" target="_blank">

        <div className="flex-1 w-full flex flex-col   p-6 hover:bg-gray-50 rounded-xl transition-all duration-300 border border-gray-100">
          <span className="text-sm text-gray-500 mb-1">طراحی توسط</span>
          <h3 className="text-lg font-bold text-gray-700 mb-4">تیم خلاق جیونت</h3>
          <img 
            className="w-14 h-14 object-contain hover:scale-110 transition-transform duration-300" 
            src="/logo_gvent.png" 
            alt="جیونت" 
            />
        </div>
            </a>
        
        {/* خط جداکننده */}
        <div className="hidden md:block h-40 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>
        
        {/* بخش توسعه */}
        <a href="https://isatispooya.com" target="_blank">
        <div className="flex-1 w-full flex flex-col   p-6 hover:bg-gray-50 rounded-xl transition-all duration-300 border border-gray-100">
          <span className="text-sm text-gray-500 mb-1">توسعه توسط</span>
          <h3 className="text-lg font-bold text-gray-700 mb-4">ایساتیس پویا</h3>
          <img 
            className="w-14 h-14 object-contain hover:scale-110 transition-transform duration-300" 
            src="/fidip.png" 
            alt="ایساتیس پویا" 
          />
        </div>
        </a>
      </div>
    </div>
  );
};

export default Sponser;
