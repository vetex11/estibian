import React from "react";

const AIAssistant = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl leading-20 font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          دع الذكاء الاصطناعي يصمم استبياناتك
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          ما عليك سوى وصف الغرض من استبيانك، وسيقوم الذكاء الاصطناعي بإنشاء
          نموذج احترافي متكامل مع الأسئلة المناسبة في ثوانٍ معدودة.
        </p>

        <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
          {/* Gradient background decoration */}
          <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-radial from-blue-200 to-transparent rounded-full opacity-50"></div>
          <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-gradient-radial from-purple-200 to-transparent rounded-full opacity-50"></div>

          <div className="relative flex items-center justify-center space-x-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.993l2.121-2.121M12 12v1m-6.364-1.636l.707.707M4 12h1m14 0h1"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              مساعد التصميم الذكي
            </h3>
          </div>

          <p className="text-gray-700 mb-8 text-lg leading-relaxed">
            يمكنه فهم احتياجاتك وإنشاء النموذج المثالي بذكاء ودقة، مع تحسين
            تجربة المستخدم وتحقيق أفضل النتائج
          </p>

          <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-2xl border border-gray-200 shadow-inner">
            <p className="font-medium text-gray-800 text-right mb-4 text-lg leading-relaxed">
              أريد إنشاء استبيان لقياس رضا العملاء عن خدمة العملاء في متجري
              الإلكتروني
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-4 text-left space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                تحديد الأسئلة الرئيسية
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                اختيار أنواع الإجابات المناسبة
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                تنظيم تسلسل الأسئلة
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                إضافة خيارات التخصيص
              </li>
            </ul>
          </div>

          <button className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            جرب المساعد الذكي الآن
          </button>
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;
