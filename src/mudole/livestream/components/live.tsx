import liveVideo from "./live.mp4"

const Live = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Main video container */}
      <div className="relative aspect-video bg-black rounded-lg overflow-hidden mb-4">
        <div className="absolute top-3 left-3 bg-red-600 px-2 py-1 rounded text-sm text-white flex items-center">
          <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
          LIVE
        </div>
        <video
          className="w-full h-full object-cover"
          src={liveVideo}
          autoPlay
          muted
          loop
          controls
        />
      </div>

    
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold">پخش زنده</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Live;
