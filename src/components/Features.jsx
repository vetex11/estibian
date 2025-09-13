import React from "react";

const Features = () => {
  const features = [
    {
      title: "تحليلات متقدمة",
      desc: "رؤى تفصيلية وتقارير إحصائية شاملة لنتائج الاستبيانات",
    },
    {
      title: "مشاركة سهلة",
      desc: "مشاركة الاستبيانات عبر روابط مباشرة أو البريد الإلكتروني",
    },
    {
      title: "تجربة متجاوبة",
      desc: "تصميم متوافق مع جميع الأجهزة لتجربة استخدام مثالية",
    },
    {
      title: "حماية البيانات",
      desc: "تشفير متقدم وحماية كاملة لخصوصية المستخدمين والبيانات",
    },
    {
      title: "رسوم بيانية",
      desc: "عرض النتائج برسوم بيانية تفاعلية وسهلة الفهم",
    },
    {
      title: "تصدير النتائج",
      desc: "تصدير النتائج بصيغ متعددة مثل Excel وPDF",
    },
    {
      title: "تخصيص كامل",
      desc: "تخصيص مظهر الاستبيانات لتتناسب مع هويتك البصرية",
    },
    {
      title: "دعم العربية",
      desc: "واجهة عربية كاملة مع دعم الكتابة من اليمين لليسار",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl leading-20 font-bold text-center text-gray-900 mb-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          كل ما تحتاجه لإنشاء استبيانات احترافية
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
            >
              {/* Gradient accent line */}
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-6">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>

              {/* Decorative element */}
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-30"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
