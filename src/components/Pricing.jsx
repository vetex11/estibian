import React from "react";

const Pricing = () => {
  const plans = [
    {
      name: "مجاني",
      description: "مثالي للبدء في إنشاء الاستبيانات",
      price: "0",
      period: "/شهر",
      features: [
        "100 استجابة شهريًا",
        "استبيانات أساسية",
        "تحليلات مبسطة",
        "دعم عربي",
        "مشاركة عبر رابط",
      ],
      cta: "ابدأ مجانًا",
      popular: false,
    },
    {
      name: "احترافي",
      description: "للشركات الصغيرة والمتوسطة",
      price: "49",
      period: "/شهر",
      features: [
        "غير محدود من الاستجابات",
        "منطق شرطي متقدم",
        "تخصيص كامل للمظهر",
        "تصدير Excel وPDF وCSV",
        "تكامل مع Google Sheets وSlack",
        "دعم فني سريع",
      ],
      cta: "اختر الاحترافي",
      popular: true,
    },
    {
      name: "مؤسسات",
      description: "حلول متقدمة للمؤسسات الكبيرة",
      price: "149",
      period: "/شهر",
      features: [
        "استجابات غير محدودة",
        "إدارة مستخدمين متعددة",
        "تكامل API وZapier وSalesforce",
        "تخصيص العلامة التجارية الكامل",
        "أمان متقدم وامتثال GDPR",
        "دعم مخصص 24/7",
        "تقارير مخصصة",
      ],
      cta: "اتصل بنا",
      popular: false,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl leading-20 font-bold text-center text-gray-900 mb-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          باقات تناسب جميع الاحتياجات
        </h2>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
          اختر الباقة المناسبة لك وابدأ في إنشاء استبيانات احترافية اليوم
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 text-center transition-all duration-500 transform hover:-translate-y-2 ${
                plan.popular
                  ? "shadow-2xl border-2 border-blue-500 bg-white scale-105"
                  : "bg-white shadow-lg hover:shadow-2xl"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    الأكثر شيوعًا
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>

              <div className="mb-8">
                <span className="text-5xl font-bold text-gray-900">
                  {plan.price}
                </span>
                <span className="text-gray-600 text-lg">{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-8 text-left rtl">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-gray-700">
                    <svg
                      className="w-6 h-6 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl"
                    : "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 shadow-md hover:shadow-lg border border-gray-200"
                }`}
              >
                {plan.cta}
              </button>

              {/* Price justification */}
              {plan.popular && (
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-500">
                    يوفر 20% مقارنة بالباقات الأساسية
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional note for enterprise */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 italic">
            لخطط المؤسسات، يرجى التواصل مع فريق المبيعات لتقديم حلول مخصصة تشمل
            التكاملات والدعم المخصص.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
