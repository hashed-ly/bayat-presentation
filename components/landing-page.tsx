'use client';

import { useState, useEffect } from 'react';
import {
  Plane,
  Users,
  Package,
  Smartphone,
  Globe,
  ArrowRight,
  Menu,
  X,
  Play,
  Shield,
  Clock,
  DollarSign,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function BayatLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isArabic, setIsArabic] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 font-alexandria">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <Image
                src="/images/bayat-logo-black.png"
                alt="Bayat Logo"
                width={100}
                height={100}
              />
              <span className="text-2xl font-bold text-[#B9442A] arabic-text">
                {isArabic ? 'بايات' : 'Bayat'}
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-gray-700 hover:text-[#B9442A] transition-colors"
              >
                {isArabic ? 'الميزات' : 'Features'}
              </a>
              <a
                href="#how-it-works"
                className="text-gray-700 hover:text-[#B9442A] transition-colors"
              >
                {isArabic ? 'كيف يعمل' : 'How it Works'}
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-[#B9442A] transition-colors"
              >
                {isArabic ? 'حولنا' : 'About'}
              </a>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsArabic(!isArabic)}
                className="border-[#B9442A] text-[#B9442A] hover:bg-[#B9442A] hover:text-white"
              >
                {isArabic ? 'EN' : 'عربي'}
              </Button>
              <Button className="bg-[#B9442A] hover:bg-[#AD5743] text-white">
                {isArabic ? 'انضم الآن' : 'Join Now'}
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#features"
                className="block px-3 py-2 text-gray-700 hover:text-[#B9442A]"
              >
                {isArabic ? 'الميزات' : 'Features'}
              </a>
              <a
                href="#how-it-works"
                className="block px-3 py-2 text-gray-700 hover:text-[#B9442A]"
              >
                {isArabic ? 'كيف يعمل' : 'How it Works'}
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-gray-700 hover:text-[#B9442A]"
              >
                {isArabic ? 'حولنا' : 'About'}
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#FDC64B]/20 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-[#B9442A]/20 rounded-full animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#FDDA7D]/30 rounded-full animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-800 leading-tight animate-slide-up">
                  {isArabic ? (
                    <>
                      <span className="text-[#B9442A]">بايات</span>
                      <br />
                      <span className="text-3xl lg:text-5xl">يربط المدن</span>
                    </>
                  ) : (
                    <>
                      <span className="text-[#B9442A]">Bayat</span>
                      <br />
                      <span className="text-3xl lg:text-5xl">
                        Connects Cities
                      </span>
                    </>
                  )}
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed animate-slide-up-delayed">
                  {isArabic
                    ? 'شبكة ذكية تجمع بين المسافرين والمحتاجين لتوصيل سريع وآمن بين المدن الليبية'
                    : 'Smart network connecting travelers and customers for fast, secure delivery between Libyan cities'}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up-delayed">
                <Button
                  size="lg"
                  className="bg-[#B9442A] hover:bg-[#AD5743] text-white px-8 py-4 text-lg"
                >
                  <Smartphone className="w-5 h-5 mr-2" />
                  {isArabic ? 'حمل التطبيق' : 'Download App'}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[#B9442A] text-[#B9442A] hover:bg-[#B9442A] hover:text-white px-8 py-4 text-lg"
                >
                  <Play className="w-5 h-5 mr-2" />
                  {isArabic ? 'شاهد الفيديو' : 'Watch Demo'}
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 animate-slide-up-delayed">
                <div className="text-center">
                  <div
                    className="text-3xl font-bold text-[#B9442A] counter"
                    data-target="10000"
                  >
                    0
                  </div>
                  <div className="text-sm text-gray-600">
                    {isArabic ? 'مستخدم' : 'Users'}
                  </div>
                </div>
                <div className="text-center">
                  <div
                    className="text-3xl font-bold text-[#FDC64B] counter"
                    data-target="5"
                  >
                    0
                  </div>
                  <div className="text-sm text-gray-600">
                    {isArabic ? 'مدن' : 'Cities'}
                  </div>
                </div>
                <div className="text-center">
                  <div
                    className="text-3xl font-bold text-[#AD5743] counter"
                    data-target="1000"
                  >
                    0
                  </div>
                  <div className="text-sm text-gray-600">
                    {isArabic ? 'طلب' : 'Requests'}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/images/home.png"
                  alt="Bayat App Interface"
                  width={400}
                  height={800}
                  className="mx-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-[#FDC64B] p-3 rounded-full shadow-lg animate-bounce">
                <Package className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#B9442A] p-3 rounded-full shadow-lg animate-bounce delay-1000">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {isArabic ? 'لماذا بايات؟' : 'Why Bayat?'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {isArabic
                ? 'حلول مبتكرة لتحديات التوصيل في ليبيا'
                : "Innovative solutions for Libya's delivery challenges"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Clock className="w-12 h-12" />,
                title: isArabic ? 'توصيل سريع' : 'Fast Delivery',
                desc: isArabic
                  ? 'أسرع من الطرق التقليدية'
                  : 'Faster than traditional methods',
                color: 'text-[#B9442A]',
              },
              {
                icon: <DollarSign className="w-12 h-12" />,
                title: isArabic ? 'أسعار معقولة' : 'Affordable Prices',
                desc: isArabic
                  ? 'وفر حتى 50% من التكلفة'
                  : 'Save up to 50% on costs',
                color: 'text-[#FDC64B]',
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: isArabic ? 'آمن وموثوق' : 'Safe & Reliable',
                desc: isArabic
                  ? 'مسافرون معتمدون ومقيمون'
                  : 'Verified and rated travelers',
                color: 'text-[#AD5743]',
              },
              {
                icon: <Globe className="w-12 h-12" />,
                title: isArabic ? 'تغطية واسعة' : 'Wide Coverage',
                desc: isArabic
                  ? 'جميع المدن الليبية الرئيسية'
                  : 'All major Libyan cities',
                color: 'text-[#FDDA7D]',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
              >
                <div
                  className={`${feature.color} mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="py-20 bg-gradient-to-br from-[#B9442A]/5 to-[#FDC64B]/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {isArabic ? 'كيف يعمل بايات؟' : 'How Does Bayat Work?'}
            </h2>
            <p className="text-xl text-gray-600">
              {isArabic
                ? 'عملية بسيطة من أربع خطوات'
                : 'Simple four-step process'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: isArabic ? 'انشر طلبك' : 'Post Request',
                desc: isArabic
                  ? 'اطلب المنتج الذي تحتاجه من أي مدينة'
                  : 'Request the item you need from any city',
                icon: <Package className="w-8 h-8" />,
              },
              {
                step: '2',
                title: isArabic ? 'المسافر يقبل' : 'Traveler Accepts',
                desc: isArabic
                  ? 'مسافر موثوق يقبل طلبك'
                  : 'A trusted traveler accepts your request',
                icon: <Users className="w-8 h-8" />,
              },
              {
                step: '3',
                title: isArabic ? 'الشراء والدفع' : 'Purchase & Pay',
                desc: isArabic
                  ? 'المسافر يشتري المنتج وأنت تدفع بأمان'
                  : 'Traveler buys item, you pay securely',
                icon: <Smartphone className="w-8 h-8" />,
              },
              {
                step: '4',
                title: isArabic ? 'التوصيل' : 'Delivery',
                desc: isArabic
                  ? 'استلم طلبك عند وصول المسافر'
                  : "Receive your item upon traveler's arrival",
                icon: <Plane className="w-8 h-8" />,
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-2xl shadow-lg text-center space-y-4 hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-[#B9442A] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <div className="text-[#FDC64B] flex justify-center mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
                {index < 3 && (
                  <ArrowRight className="absolute top-1/2 -right-4 w-8 h-8 text-[#B9442A] hidden lg:block transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Screenshots Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {isArabic ? 'واجهة التطبيق' : 'App Interface'}
            </h2>
            <p className="text-xl text-gray-600">
              {isArabic
                ? 'تصميم بسيط وسهل الاستخدام'
                : 'Simple and user-friendly design'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <Image
                src="/images/signin.png"
                alt="Sign In Screen"
                width={300}
                height={600}
                className="mx-auto rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <h3 className="text-xl font-bold text-gray-800">
                {isArabic ? 'تسجيل الدخول' : 'Sign In'}
              </h3>
              <p className="text-gray-600">
                {isArabic
                  ? 'واجهة عربية كاملة وآمنة'
                  : 'Full Arabic interface, secure'}
              </p>
            </div>

            <div className="text-center space-y-4">
              <Image
                src="/images/home.png"
                alt="Home Screen"
                width={300}
                height={600}
                className="mx-auto rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <h3 className="text-xl font-bold text-gray-800">
                {isArabic ? 'الصفحة الرئيسية' : 'Home Screen'}
              </h3>
              <p className="text-gray-600">
                {isArabic ? 'تصفح الطلبات بسهولة' : 'Browse requests easily'}
              </p>
            </div>

            <div className="text-center space-y-4">
              <Image
                src="/images/order-details.png"
                alt="Order Details"
                width={300}
                height={600}
                className="mx-auto rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <h3 className="text-xl font-bold text-gray-800">
                {isArabic ? 'تفاصيل الطلب' : 'Order Details'}
              </h3>
              <p className="text-gray-600">
                {isArabic
                  ? 'معلومات شاملة ومفصلة'
                  : 'Comprehensive information'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#B9442A] to-[#AD5743] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            {isArabic
              ? 'انضم إلى شبكة بايات اليوم'
              : 'Join the Bayat Network Today'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {isArabic
              ? 'كن جزءاً من ثورة التوصيل في ليبيا واستمتع بخدمة سريعة وموثوقة'
              : "Be part of Libya's delivery revolution and enjoy fast, reliable service"}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-[#B9442A] hover:bg-gray-100 px-8 py-4 text-lg"
            >
              <Smartphone className="w-5 h-5 mr-2" />
              {isArabic ? 'حمل من App Store' : 'Download on App Store'}
            </Button>
            <Button
              size="lg"
              className="bg-white text-[#B9442A] hover:bg-gray-100 px-8 py-4 text-lg"
            >
              <Smartphone className="w-5 h-5 mr-2" />
              {isArabic ? 'حمل من Google Play' : 'Get it on Google Play'}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-[#B9442A] to-[#AD5743] p-2 rounded-xl">
                  <Plane className="w-6 h-6 text-white transform -rotate-12" />
                </div>
                <span className="text-2xl font-bold arabic-text">بايات</span>
              </div>
              <p className="text-gray-400">
                {isArabic
                  ? 'ربط المدن من خلال التوصيل بواسطة المسافرين'
                  : 'Connecting cities through traveler-powered delivery'}
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">
                {isArabic ? 'الشركة' : 'Company'}
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {isArabic ? 'حولنا' : 'About Us'}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {isArabic ? 'فريق العمل' : 'Team'}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {isArabic ? 'الوظائف' : 'Careers'}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">
                {isArabic ? 'الدعم' : 'Support'}
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {isArabic ? 'مركز المساعدة' : 'Help Center'}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {isArabic ? 'اتصل بنا' : 'Contact Us'}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {isArabic ? 'الأسئلة الشائعة' : 'FAQ'}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">
                {isArabic ? 'قانوني' : 'Legal'}
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {isArabic ? 'الخصوصية' : 'Privacy'}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {isArabic ? 'الشروط' : 'Terms'}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {isArabic ? 'ملفات تعريف الارتباط' : 'Cookies'}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024{' '}
              {isArabic
                ? 'بايات. جميع الحقوق محفوظة.'
                : 'Bayat. All rights reserved.'}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
