import React from "react";

const TrustedBy = () => {
  const companies = [
    {
      name: "شركة التقنية المتقدمة",
      industry: "تكنولوجيا",
      logo: "https://img.icons8.com/?size=100&id=lY8wBsPLBnsd&format=png&color=000000",
    },
    {
      name: "مجموعة التعليم الذكي",
      industry: "تعليم",
      logo: "https://img.icons8.com/?size=100&id=yWDrzc0ldyqH&format=png&color=000000",
    },
    {
      name: "مستشفى الصحة الحديثة",
      industry: "رعاية صحية",
      logo: "https://img.icons8.com/?size=100&id=M2I2DdwQf1gB&format=png&color=000000",
    },
    {
      name: "بنك المستقبل",
      industry: "خدمات مالية",
      logo: "https://img.icons8.com/?size=100&id=tfhR4Jc1PDQ7&format=png&color=000000",
    },
    {
      name: "شركة البناء المتحدة",
      industry: "إنشاءات",
      logo: "https://img.icons8.com/?size=100&id=qXWKCLIaabBp&format=png&color=000000",
    },
    {
      name: "مجموعة التسويق الرقمي",
      industry: "تسويق",
      logo: "https://img.icons8.com/?size=100&id=D0A1Afld5jac&format=png&color=000000",
    },
  ];

  const integrations = [
    "Google Sheets",
    "Slack",
    "Zapier",
    "Salesforce",
    "Microsoft Teams",
    "Trello",
    "HubSpot",
    "Shopify",
    "QuickBooks",
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-6">
        {/* Main Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              موثوق به من قبل آلاف الشركات
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            نفخر بثقة كبرى الشركات والمؤسسات في خدماتنا. تكامل سلس مع أدواتك
            المفضلة وتجربة مستخدم لا مثيل لها.
          </p>
        </div>

        {/* Company Logos Grid */}
        <div className="mb-20">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {companies.map((company, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center justify-center transition-all duration-500 transform hover:scale-110"
              >
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-50/50 backdrop-blur-sm w-full h-28 flex items-center justify-center transition-all duration-300 ease-out">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-h-14 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100 filter drop-shadow-md"
                  />
                </div>
                <p className="text-sm font-medium text-gray-800 mt-4 text-center leading-tight">
                  {company.name}
                </p>
                <p className="text-xs text-gray-500 mt-1 text-center">
                  {company.industry}
                </p>
                {/* Floating highlight effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Integrations Section */}
        <div className="text-center mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            تكامل مع تطبيقاتك المفضلة
          </h3>
          <p className="text-gray-600 mb-10 text-lg">
            أكثر من 50 تكامل جاهز للاستخدام
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {integrations.map((tool, i) => (
              <div
                key={i}
                className="bg-gradient-to-r from-white to-gray-50 px-5 py-3 rounded-full text-sm font-medium text-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 hover:border-gray-200 hover:bg-gradient-to-r hover:from-gray-50 hover:to-white hover:shadow-blue-100/50"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators - Enhanced Design */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-50/50">
            <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              10K+
            </div>
            <div className="text-gray-600 text-lg font-medium">
              شركات تستخدمنا
            </div>
            <div className="mt-4 h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-50/50">
            <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              98%
            </div>
            <div className="text-gray-600 text-lg font-medium">رضا العملاء</div>
            <div className="mt-4 h-1 w-16 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
          </div>

          <div className="text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-50/50">
            <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              24/7
            </div>
            <div className="text-gray-600 text-lg font-medium">
              دعم فني متواصل
            </div>
            <div className="mt-4 h-1 w-16 bg-gradient-to-r from-indigo-500 to-blue-500 mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="mt-12 flex justify-center">
          <div className="flex space-x-2">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
