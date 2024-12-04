const Qa = ({ question, handler, answer, setAnswer }) => {
  const qeustions = [
    {
      question: `ش درف نیا هک دراد دوجو یده دنص زا یکی رد قو اه قودنص نیا مان اما هدرک یراذگ هیامرس، رب ام یا صخشم ب اما تسین ا ر د ساس اددای هچرتف وا تش فگ هک هدش هت نیا مان ودنص ق یکی مان مه ن زا م شوق رع دزی ناتسا فو ا .تس ان ودنص نیا م گ هیامرس ق یراذ ؟تسیچ`,
      answer: "سلام",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Frequently Asked Questions
      </h2>

      <div className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Question 1
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              placeholder="Enter your question here..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Answer
            </label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all min-h-[100px] resize-none"
              placeholder="Enter your answer here..."
            />
          </div>
          <div className="flex justify-end pt-2">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Submit Q1
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qa;
