import React from "react";

const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Decorative gradient elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-radial from-blue-300 to-transparent rounded-full opacity-30"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-radial from-purple-300 to-transparent rounded-full opacity-30"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          أنشئ استبيانات{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            احترافية
          </span>{" "}
          بسهولة ودقة
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
          منصة استبيان تمكنك من إنشاء نماذج واستبيانات تفاعلية بسهولة فائقة، مع
          تحليلات متقدمة ومشاركة سلسة. الحل المثالي للشركات والباحثين والمعلمين.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            إنشاء استبيان جديد
          </button>

          <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-blue-400 hover:text-blue-600 transition-all duration-300 hover:bg-blue-50">
            عرض الأمثلة
          </button>
        </div>

        {/* Feature highlights below button */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-500">
          <div className="flex items-center">
            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
            بدون برامج مطلوبة
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
            دعم عربي كامل
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
            نتائج فورية
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
