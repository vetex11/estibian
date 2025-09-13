import React from "react";

const ResponsiveDesign = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl leading-20 font-bold text-center text-gray-900 mb-16 bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent">
          جمع البيانات من أي جهاز، في أي وقت
        </h2>
        <p className="text-xl text-gray-600 text-center max-w-4xl mx-auto mb-16 leading-relaxed">
          استبياناتك تعمل بسلاسة على جميع الأجهزة والمتصفحات. تجربة استخدام
          موحدة ومثالية للجميع، سواء كنت على هاتفك الذكي أو جهازك اللوحي أو
          كمبيوتر المكتب.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Mobile */}
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              الهواتف الذكية
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              تصميم متجاوب يتكيف مع الشاشات الصغيرة، مع أزرار كبيرة وسهلة
              التفاعل
            </p>
            <div className="bg-gray-50 rounded-xl p-4 mx-auto w-48 h-64 flex items-center justify-center shadow-sm">
              <div className="w-full h-full bg-white rounded-lg border-2 border-gray-200 flex flex-col items-center justify-center">
                <div className="w-1/2 h-2 bg-gray-200 rounded mb-4"></div>
                <div className="w-3/4 h-1 bg-gray-200 rounded mb-2"></div>
                <div className="w-1/2 h-1 bg-gray-200 rounded mb-6"></div>
                <div className="w-full h-10 bg-blue-100 rounded-full mb-2"></div>
                <div className="w-full h-10 bg-gray-100 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Tablet */}
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              الأجهزة اللوحية
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              عرض مثالي للشاشات المتوسطة مع تحسينات في التنقل والتفاعل
            </p>
            <div className="bg-gray-50 rounded-xl p-4 mx-auto w-64 h-48 flex items-center justify-center shadow-sm">
              <div className="w-full h-full bg-white rounded-lg border-2 border-gray-200 flex flex-col items-center justify-center">
                <div className="w-1/3 h-2 bg-gray-200 rounded mb-4"></div>
                <div className="w-1/2 h-1 bg-gray-200 rounded mb-2"></div>
                <div className="w-2/3 h-1 bg-gray-200 rounded mb-6"></div>
                <div className="w-full h-12 bg-blue-100 rounded-full mb-2"></div>
                <div className="w-full h-12 bg-gray-100 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Desktop */}
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
            <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              أجهزة الكمبيوتر
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              تجربة كاملة للشاشات الكبيرة مع ميزات متقدمة وواجهة غنية بالتفاصيل
            </p>
            <div className="bg-gray-50 rounded-xl p-4 mx-auto w-80 h-64 flex items-center justify-center shadow-sm">
              <div className="w-full h-full bg-white rounded-lg border-2 border-gray-200 flex flex-col items-center justify-center">
                <div className="w-1/4 h-2 bg-gray-200 rounded mb-6"></div>
                <div className="w-1/2 h-1 bg-gray-200 rounded mb-4"></div>
                <div className="w-3/4 h-1 bg-gray-200 rounded mb-4"></div>
                <div className="w-full h-12 bg-blue-100 rounded-full mb-4"></div>
                <div className="w-full h-12 bg-gray-100 rounded-full mb-4"></div>
                <div className="w-full h-12 bg-blue-100 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 italic">
            كل استبيان يُصمم ليكون متجاوبًا تمامًا، مع اختبارات شاملة على أكثر
            من 20 جهازًا مختلفًا
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResponsiveDesign;
