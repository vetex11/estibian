import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "أحمد محمد",
      role: "مدير التسويق - شركة التقنية المتقدمة",
      quote:
        "منصة استبيان غيرت طريقة جمع البيانات في شركتنا. الآن نستطيع إنشاء استبيانات احترافية في دقائق معدودة.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&q=80",
    },
    {
      name: "سارة أحمد",
      role: "باحثة أكاديمية - جامعة الملك سعود",
      quote:
        "أداة رائعة للبحث الأكاديمي. التحليلات المتقدمة وسهولة جمع البيانات وفرت علي الكثير من الوقت والجهد.",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&q=80",
    },
    {
      name: "خالد العمري",
      role: "مدير الموارد البشرية - مجموعة الخليج",
      quote:
        "نستخدم استبيان لقياس رضا الموظفين بشكل دوري. النتائج والتحليلات ساعدتنا في تحسين بيئة العمل بشكل كبير.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&q=80",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl leading-20 font-bold text-center text-gray-900 mb-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          ماذا يقول عملاؤنا عنا
        </h2>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16 leading-relaxed">
          نفخر بثقة عملائنا وقصص نجاحهم في استخدام منصتنا
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 20v-20h10v20h-10zm-12 0v-20h10v20h-10zm10-18c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm-12 0c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z" />
                </svg>
              </div>

              <blockquote className="text-gray-700 italic mb-6 leading-relaxed text-lg">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-gray-100 shadow-md"
                />
                <div className="text-center rtl">
                  <h3 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>

              {/* Stars rating */}
              <div className="flex justify-center mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.922-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional trust indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-center">
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-900">10K+</p>
            <p className="text-gray-600">مستخدم نشط</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-900">98%</p>
            <p className="text-gray-600">رضا العملاء</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-900">24/7</p>
            <p className="text-gray-600">دعم فني</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
