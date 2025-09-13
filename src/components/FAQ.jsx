import React from "react";

const FAQ = () => {
  const faqs = [
    {
      q: "كيف أبدأ؟",
      a: "يمكنك إنشاء حساب مجاني في أقل من دقيقة. بمجرد تسجيل الدخول، يمكنك البدء في إنشاء استبيانك الأول باستخدام واجهتنا سهلة الاستخدام.",
    },
    {
      q: "هل يمكنني تصدير النتائج؟",
      a: "نعم، يمكنك تصدير نتائج الاستبيان بصيغ متعددة مثل Excel وPDF وCSV. كما نوفر واجهة برمجية API للوصول المباشر للبيانات.",
    },
    {
      q: "هل يمكنني تخصيص مظهر الاستبيان؟",
      a: "نعم، نوفر خيارات تخصيص متقدمة تشمل الألوان والخطوط والشعارات وتخطيط الصفحة لتتناسب مع هويتك البصرية.",
    },
    {
      q: "كم عدد الاستجابات المتاحة؟",
      a: "يعتمد ذلك على نوع الباقة. الحساب المجاني يتيح 100 استجابة شهرياً، بينما الباقات المدفوعة تقدم استجابات غير محدودة.",
    },
    {
      q: "هل تدعم المنطق الشرطي؟",
      a: "نعم، يمكنك إنشاء مسارات مخصصة بناءً على إجابات المستخدمين. هذه الميزة متوفرة في الباقات المدفوعة.",
    },
    {
      q: "هل بياناتي آمنة؟",
      a: "نعم، نستخدم تشفيراً متقدماً لحماية البيانات ونلتزم بمعايير أمان صارمة. جميع البيانات مخزنة في خوادم آمنة ومشفرة.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl leading-20 font-bold text-center text-gray-900 mb-16 bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent">
          كل ما تريد معرفته عن استبيان
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></span>
                  {faq.q}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
              <div className="border-t border-gray-100 px-6 py-4 bg-gradient-to-r from-gray-50 to-white">
                <div className="flex justify-end">
                  <div className="w-8 h-1 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-70"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
