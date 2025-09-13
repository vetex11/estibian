import React from "react";

const ConditionalLogic = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl leading-20 font-bold text-center text-gray-900 mb-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          استبيانات ذكية تتكيف مع الإجابات
        </h2>
        <p className="text-xl text-gray-600 text-center max-w-4xl mx-auto mb-12 leading-relaxed">
          صمّم مسارات مخصصة لكل مستجيب باستخدام المنطق الشرطي المتقدم. اعرض
          أسئلة مختلفة بناءً على الإجابات السابقة.
        </p>

        <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
          {/* Gradient background decoration */}
          <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-radial from-blue-200 to-transparent rounded-full opacity-50"></div>
          <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-gradient-radial from-purple-200 to-transparent rounded-full opacity-50"></div>

          <div className="border-b border-gray-100 pb-6 mb-8 rtl">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              هل أنت من عملائنا الحاليين؟
            </h3>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              ما مدى رضاك عن خدماتنا؟
            </h3>
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-2xl border-l-4 border-blue-400 shadow-sm">
              <p className="text-blue-800 font-medium flex items-center mb-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                مسار العملاء الحاليين
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mt-3">
                <li>كيف يمكننا تحسين خدمتنا؟</li>
                <li>ما أكثر ما أعجبك؟</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              هل توصي بخدماتنا للآخرين؟
            </h3>
            <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-2xl border-l-4 border-green-400 shadow-sm">
              <p className="text-green-800 font-medium flex items-center mb-2">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                السؤال النهائي
              </p>
              <p className="text-gray-700 leading-relaxed">
                على مقياس من 1 إلى 10، كم من المرجح أن توصي بخدماتنا لصديق أو
                زميل؟
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConditionalLogic;
