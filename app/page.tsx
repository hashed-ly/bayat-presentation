'use client';

import { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Plane,
  Users,
  Package,
  Smartphone,
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const slides = [
  { id: 'intro', title: 'Bayat - Introduction' },
  { id: 'problem', title: 'The Problem' },
  { id: 'solution', title: 'Our Solution' },
  { id: 'how-it-works', title: 'How It Works' },
  { id: 'user-story', title: 'User Story: Mahmoud' },
  { id: 'app-interface-1', title: 'App Interface - Home' },
  { id: 'app-interface-2', title: 'App Interface - Details' },
  { id: 'app-interface-3', title: 'App Interface - Auth' },
  { id: 'landing-preview', title: 'Landing Page Preview' },
  { id: 'vision', title: 'Vision & Impact' },
  { id: 'cta', title: 'Join Bayat' },
];

export default function BayatPresentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isArabic, setIsArabic] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const renderSlide = () => {
    switch (slides[currentSlide].id) {
      case 'intro':
        return <IntroSlide isArabic={isArabic} />;
      case 'problem':
        return <ProblemSlide isArabic={isArabic} />;
      case 'solution':
        return <SolutionSlide isArabic={isArabic} />;
      case 'how-it-works':
        return <HowItWorksSlide isArabic={isArabic} />;
      case 'user-story':
        return <UserStorySlide isArabic={isArabic} />;
      case 'app-interface-1':
        return <AppInterfaceSlide1 isArabic={isArabic} />;
      case 'app-interface-2':
        return <AppInterfaceSlide2 isArabic={isArabic} />;
      case 'app-interface-3':
        return <AppInterfaceSlide3 isArabic={isArabic} />;
      case 'landing-preview':
        return <LandingPreviewSlide isArabic={isArabic} />;
      case 'vision':
        return <VisionSlide isArabic={isArabic} />;
      case 'cta':
        return <CTASlide isArabic={isArabic} />;
      default:
        return <IntroSlide isArabic={isArabic} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 relative overflow-hidden font-alexandria">
      {/* Navigation */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.open('/landing', '_blank')}
          className="bg-white/90 backdrop-blur-sm"
        >
          {isArabic ? 'الموقع' : 'Website'}
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsArabic(!isArabic)}
          className="bg-white/90 backdrop-blur-sm"
        >
          {isArabic ? 'EN' : 'عربي'}
        </Button>
      </div>

      {/* Slide Content */}
      <div className="h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-6xl mx-auto">{renderSlide()}</div>
      </div>

      {/* Navigation Controls */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="bg-white/90 backdrop-blur-sm hover:bg-white"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-[#B9442A] scale-125'
                  : 'bg-white/60 hover:bg-white/80'
              }`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="bg-white/90 backdrop-blur-sm hover:bg-white"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Slide Counter */}
      <div className="fixed bottom-8 right-8 text-sm text-gray-600 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
}

// Update the IntroSlide function to include a proper logo and more dynamic elements:

function IntroSlide({ isArabic }: { isArabic: boolean }) {
  return (
    <div className="text-center space-y-12 animate-fade-in relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#FDC64B]/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-[#B9442A]/20 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#FDDA7D]/30 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 space-y-8">
        {/* Logo Section */}
        <div className="space-y-6">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="bg-gradient-to-br from-[#B9442A] to-[#AD5743] p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="relative">
                  <Plane className="w-20 h-20 text-white transform -rotate-12" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#FDC64B] rounded-full animate-ping"></div>
                </div>
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg">
                <span className="text-2xl font-bold text-[#B9442A] arabic-text">
                  بايات
                </span>
              </div>
            </div>
          </div>

          <h1 className="text-7xl font-bold text-gray-800 mb-6 animate-slide-up">
            {isArabic ? 'بايات' : 'Bayat'}
          </h1>

          <div className="space-y-4">
            <p className="text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-slide-up-delayed">
              {isArabic
                ? 'ربط المدن من خلال التوصيل بواسطة المسافرين'
                : 'Connecting cities through traveler-powered delivery'}
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              {isArabic
                ? 'شبكة ذكية تجمع بين المسافرين والمحتاجين لتوصيل سريع وآمن'
                : 'Smart network connecting travelers and customers for fast, secure delivery'}
            </p>
          </div>
        </div>

        {/* Interactive Elements */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="text-[#B9442A] mb-4 flex justify-center">
              <Users className="w-12 h-12" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">
              {isArabic ? 'مجتمع المسافرين' : 'Traveler Community'}
            </h3>
            <p className="text-sm text-gray-600">
              {isArabic
                ? 'شبكة موثوقة من المسافرين'
                : 'Trusted network of travelers'}
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 delay-100">
            <div className="text-[#FDC64B] mb-4 flex justify-center">
              <Package className="w-12 h-12" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">
              {isArabic ? 'توصيل سريع' : 'Fast Delivery'}
            </h3>
            <p className="text-sm text-gray-600">
              {isArabic
                ? 'وصول أسرع من الطرق التقليدية'
                : 'Faster than traditional methods'}
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 delay-200">
            <div className="text-[#AD5743] mb-4 flex justify-center">
              <Globe className="w-12 h-12" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">
              {isArabic ? 'تغطية واسعة' : 'Wide Coverage'}
            </h3>
            <p className="text-sm text-gray-600">
              {isArabic
                ? 'ربط المدن الليبية الرئيسية'
                : 'Connecting major Libyan cities'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProblemSlide({ isArabic }: { isArabic: boolean }) {
  const problems = [
    {
      icon: <Package className="w-12 h-12" />,
      title: isArabic ? 'عدم توفر المنتجات محلياً' : "Can't find items locally",
      desc: isArabic
        ? 'المنتجات المطلوبة غير متوفرة في المدينة'
        : 'Needed products unavailable in your city',
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: isArabic
        ? 'التوصيل التقليدي مكلف'
        : 'Traditional delivery is expensive',
      desc: isArabic
        ? 'تكاليف الشحن والتوصيل عالية جداً'
        : 'High shipping and delivery costs',
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: isArabic ? 'التوصيل بطيء' : 'Slow delivery times',
      desc: isArabic
        ? 'انتظار طويل للحصول على المنتجات'
        : 'Long waiting times for products',
    },
  ];

  return (
    <div className="space-y-12 animate-fade-in">
      <div className="text-center">
        <h2 className="text-5xl font-bold text-gray-800 mb-6">
          {isArabic ? 'المشكلة' : 'The Problem'}
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {isArabic
            ? 'التحديات التي يواجهها الناس في الحصول على المنتجات بين المدن الليبية'
            : 'Challenges people face getting products between Libyan cities'}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {problems.map((problem, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-lg text-center space-y-4 hover:shadow-xl transition-shadow"
          >
            <div className="text-[#B9442A] flex justify-center">
              {problem.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              {problem.title}
            </h3>
            <p className="text-gray-600">{problem.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SolutionSlide({ isArabic }: { isArabic: boolean }) {
  const benefits = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      text: isArabic
        ? 'أسرع من التوصيل التقليدي'
        : 'Faster than traditional delivery',
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      text: isArabic ? 'أرخص في التكلفة' : 'More affordable',
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      text: isArabic ? 'يعتمد على المجتمع' : 'Community-based',
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      text: isArabic ? 'يدعم المسافرين' : 'Supports travelers',
    },
  ];

  return (
    <div className="space-y-12 animate-fade-in">
      <div className="text-center">
        <h2 className="text-5xl font-bold text-gray-800 mb-6">
          {isArabic ? 'الحل' : 'The Solution'}
        </h2>
        <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          {isArabic
            ? 'بايات يربط بين المدن الليبية الرئيسية من خلال شبكة من المسافرين الجويين الذين يمكنهم توصيل الأغراض الشخصية'
            : 'Bayat connects major Libyan cities through a network of air travelers who can deliver personal items'}
        </p>
      </div>

      <div className="bg-white p-12 rounded-3xl shadow-xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-[#B9442A]">
              {isArabic
                ? 'نموذج التوصيل بواسطة المسافرين'
                : 'Traveler-Powered Delivery Model'}
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="text-green-600">{benefit.icon}</div>
                  <span className="text-lg text-gray-700">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-gradient-to-br from-[#FDC64B] to-[#FDDA7D] p-12 rounded-full">
              <Plane className="w-32 h-32 text-[#B9442A]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HowItWorksSlide({ isArabic }: { isArabic: boolean }) {
  const steps = [
    {
      number: '1',
      title: isArabic ? 'انشر طلبك' : 'Post Request',
      desc: isArabic ? 'اطلب المنتج الذي تحتاجه' : 'Request the item you need',
      icon: <Package className="w-12 h-12" />,
    },
    {
      number: '2',
      title: isArabic ? 'المسافر يقبل' : 'Traveler Accepts',
      desc: isArabic ? 'مسافر يقبل طلبك' : 'A traveler accepts your request',
      icon: <Users className="w-12 h-12" />,
    },
    {
      number: '3',
      title: isArabic ? 'الشراء' : 'Purchase',
      desc: isArabic ? 'المسافر يشتري المنتج' : 'Traveler buys the item',
      icon: <Smartphone className="w-12 h-12" />,
    },
    {
      number: '4',
      title: isArabic ? 'التوصيل' : 'Delivery',
      desc: isArabic ? 'التوصيل عند الوصول' : 'Delivery upon arrival',
      icon: <Plane className="w-12 h-12" />,
    },
  ];

  return (
    <div className="space-y-12 animate-fade-in">
      <div className="text-center">
        <h2 className="text-5xl font-bold text-gray-800 mb-6">
          {isArabic ? 'كيف يعمل' : 'How It Works'}
        </h2>
        <p className="text-xl text-gray-600">
          {isArabic ? 'عملية بسيطة من أربع خطوات' : 'Simple four-step process'}
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="text-center space-y-6">
            <div className="relative">
              <div className="bg-[#B9442A] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="absolute top-8 -right-12 w-8 h-8 text-gray-400 hidden md:block" />
              )}
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg space-y-4">
              <div className="text-[#FDC64B] flex justify-center">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function UserStorySlide({ isArabic }: { isArabic: boolean }) {
  return (
    <div className="space-y-12 animate-fade-in">
      <div className="text-center">
        <h2 className="text-5xl font-bold text-gray-800 mb-6">
          {isArabic ? 'قصة المستخدم: محمود' : 'User Story: Mahmoud'}
        </h2>
      </div>

      <div className="bg-white p-12 rounded-3xl shadow-xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#B9442A]">
                {isArabic ? 'طالب من بنغازي' : 'Student from Benghazi'}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {isArabic
                  ? 'محمود طالب جامعي في بنغازي يحتاج إلى لابتوب عالي الأداء للبرمجة، لكن الخيارات المتاحة محلياً محدودة ومكلفة.'
                  : 'Mahmoud is a university student in Benghazi who needs a high-performance laptop for programming, but local options are limited and expensive.'}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#FDC64B] p-2 rounded-full">
                  <Smartphone className="w-6 h-6 text-[#B9442A]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {isArabic ? 'يجد بايات' : 'Discovers Bayat'}
                  </h4>
                  <p className="text-gray-600">
                    {isArabic
                      ? 'ينشر طلباً للحصول على لابتوب من طرابلس'
                      : 'Posts a request for a laptop from Tripoli'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#FDC64B] p-2 rounded-full">
                  <Users className="w-6 h-6 text-[#B9442A]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {isArabic ? 'يتواصل مع مسافر' : 'Connects with traveler'}
                  </h4>
                  <p className="text-gray-600">
                    {isArabic
                      ? 'مسافر من طرابلس يقبل الطلب'
                      : 'A traveler from Tripoli accepts the request'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#FDC64B] p-2 rounded-full">
                  <CheckCircle className="w-6 h-6 text-[#B9442A]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {isArabic ? 'يحصل على اللابتوب' : 'Gets the laptop'}
                  </h4>
                  <p className="text-gray-600">
                    {isArabic
                      ? 'توصيل سريع وبسعر معقول'
                      : 'Fast delivery at reasonable price'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-gradient-to-br from-[#B9442A] to-[#AD5743] p-8 rounded-2xl text-white text-center space-y-4">
              <div className="text-6xl">💻</div>
              <h4 className="text-xl font-bold">
                {isArabic ? 'نجح محمود!' : 'Mahmoud succeeded!'}
              </h4>
              <p className="text-sm opacity-90">
                {isArabic ? 'وفر 40% من التكلفة' : 'Saved 40% on cost'}
              </p>
              <div className="flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AppInterfaceSlide1({ isArabic }: { isArabic: boolean }) {
  return (
    <div className="space-y-12 animate-fade-in">
      <div className="text-center">
        <h2 className="text-5xl font-bold text-gray-800 mb-6">
          {isArabic ? 'واجهة التطبيق - الرئيسية' : 'App Interface - Home'}
        </h2>
        <p className="text-xl text-gray-600">
          {isArabic
            ? 'تصفح الطلبات المتاحة بين المدن'
            : 'Browse available requests between cities'}
        </p>
      </div>

      <div className="flex justify-center">
        <div className="relative">
          <Image
            src="/images/home.png"
            alt="Bayat Home Interface"
            width={400}
            height={800}
            className="rounded-3xl shadow-2xl"
          />
          <div className="absolute -right-8 top-1/4 bg-white p-4 rounded-lg shadow-lg max-w-xs">
            <h4 className="font-semibold text-[#B9442A] mb-2">
              {isArabic ? 'الميزات الرئيسية:' : 'Key Features:'}
            </h4>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>• {isArabic ? 'تبويب المدن' : 'City tabs'}</li>
              <li>• {isArabic ? 'عرض الطلبات' : 'Request listings'}</li>
              <li>• {isArabic ? 'تقييم المسافرين' : 'Traveler ratings'}</li>
              <li>• {isArabic ? 'الأسعار الواضحة' : 'Clear pricing'}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function AppInterfaceSlide2({ isArabic }: { isArabic: boolean }) {
  return (
    <div className="space-y-12 animate-fade-in">
      <div className="text-center">
        <h2 className="text-5xl font-bold text-gray-800 mb-6">
          {isArabic
            ? 'واجهة التطبيق - تفاصيل الطلب'
            : 'App Interface - Order Details'}
        </h2>
        <p className="text-xl text-gray-600">
          {isArabic
            ? 'عرض تفصيلي للطلبات مع معلومات المسافر'
            : 'Detailed view with traveler information'}
        </p>
      </div>

      <div className="flex justify-center">
        <div className="relative">
          <Image
            src="/images/order-details.png"
            alt="Bayat Order Details Interface"
            width={400}
            height={800}
            className="rounded-3xl shadow-2xl"
          />
          <div className="absolute -left-8 top-1/3 bg-white p-4 rounded-lg shadow-lg max-w-xs">
            <h4 className="font-semibold text-[#B9442A] mb-2">
              {isArabic ? 'تفاصيل شاملة:' : 'Comprehensive Details:'}
            </h4>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>• {isArabic ? 'صور المنتج' : 'Product images'}</li>
              <li>• {isArabic ? 'وصف مفصل' : 'Detailed description'}</li>
              <li>• {isArabic ? 'معلومات المسافر' : 'Traveler info'}</li>
              <li>• {isArabic ? 'تاريخ التوصيل' : 'Delivery date'}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function AppInterfaceSlide3({ isArabic }: { isArabic: boolean }) {
  return (
    <div className="space-y-12 animate-fade-in">
      <div className="text-center">
        <h2 className="text-5xl font-bold text-gray-800 mb-6">
          {isArabic
            ? 'واجهة التطبيق - تسجيل الدخول'
            : 'App Interface - Authentication'}
        </h2>
        <p className="text-xl text-gray-600">
          {isArabic
            ? 'تسجيل دخول آمن وسهل الاستخدام'
            : 'Secure and user-friendly authentication'}
        </p>
      </div>

      <div className="flex justify-center">
        <div className="relative">
          <Image
            src="/images/signin.png"
            alt="Bayat Authentication Interface"
            width={400}
            height={800}
            className="rounded-3xl shadow-2xl"
          />
          <div className="absolute -right-8 top-1/2 bg-white p-4 rounded-lg shadow-lg max-w-xs">
            <h4 className="font-semibold text-[#B9442A] mb-2">
              {isArabic ? 'تجربة مستخدم متميزة:' : 'Excellent UX:'}
            </h4>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>
                • {isArabic ? 'واجهة عربية كاملة' : 'Full Arabic interface'}
              </li>
              <li>• {isArabic ? 'تصميم نظيف' : 'Clean design'}</li>
              <li>• {isArabic ? 'سهولة التنقل' : 'Easy navigation'}</li>
              <li>• {isArabic ? 'أمان عالي' : 'High security'}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function LandingPreviewSlide({ isArabic }: { isArabic: boolean }) {
  return (
    <div className="space-y-12 animate-fade-in">
      <div className="text-center">
        <h2 className="text-5xl font-bold text-gray-800 mb-6">
          {isArabic ? 'معاينة الصفحة الرئيسية' : 'Landing Page Preview'}
        </h2>
        <p className="text-xl text-gray-600">
          {isArabic
            ? 'تصميم حديث يعكس رؤية بايات'
            : "Modern design reflecting Bayat's vision"}
        </p>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-xl">
        <Image
          src="/images/landing-page.png"
          alt="Bayat Landing Page"
          width={1200}
          height={800}
          className="rounded-2xl shadow-lg w-full"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-6 text-center">
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <Globe className="w-12 h-12 text-[#B9442A] mx-auto mb-4" />
          <h3 className="font-semibold text-gray-800 mb-2">
            {isArabic ? 'تصميم متجاوب' : 'Responsive Design'}
          </h3>
          <p className="text-sm text-gray-600">
            {isArabic ? 'يعمل على جميع الأجهزة' : 'Works on all devices'}
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <Users className="w-12 h-12 text-[#FDC64B] mx-auto mb-4" />
          <h3 className="font-semibold text-gray-800 mb-2">
            {isArabic ? 'محتوى شامل' : 'Comprehensive Content'}
          </h3>
          <p className="text-sm text-gray-600">
            {isArabic ? 'شرح مفصل للخدمة' : 'Detailed service explanation'}
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <Smartphone className="w-12 h-12 text-[#AD5743] mx-auto mb-4" />
          <h3 className="font-semibold text-gray-800 mb-2">
            {isArabic ? 'دعوة للعمل' : 'Call to Action'}
          </h3>
          <p className="text-sm text-gray-600">
            {isArabic
              ? 'تحفيز المستخدمين للانضمام'
              : 'Encourages user engagement'}
          </p>
        </div>
      </div>
    </div>
  );
}

function VisionSlide({ isArabic }: { isArabic: boolean }) {
  const visionPoints = [
    {
      icon: <Globe className="w-16 h-16" />,
      title: isArabic ? 'التوسع لمدن أكثر' : 'Expand to more cities',
      desc: isArabic
        ? 'ربط جميع المدن الليبية الرئيسية'
        : 'Connect all major Libyan cities',
    },
    {
      icon: <Users className="w-16 h-16" />,
      title: isArabic ? 'تمكين الشباب' : 'Enable youth gig work',
      desc: isArabic
        ? 'فرص عمل للشباب المسافرين'
        : 'Work opportunities for traveling youth',
    },
    {
      icon: <CheckCircle className="w-16 h-16" />,
      title: isArabic ? 'لوجستيات مستدامة' : 'Sustainable logistics',
      desc: isArabic
        ? 'نظام توصيل يعتمد على المجتمع'
        : 'Community-driven delivery system',
    },
  ];

  return (
    <div className="space-y-12 animate-fade-in">
      <div className="text-center">
        <h2 className="text-5xl font-bold text-gray-800 mb-6">
          {isArabic ? 'الرؤية والأثر' : 'Vision & Impact'}
        </h2>
        <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          {isArabic
            ? 'بناء مستقبل أفضل للتجارة والتوصيل في ليبيا'
            : 'Building a better future for commerce and delivery in Libya'}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {visionPoints.map((point, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-3xl shadow-xl text-center space-y-6 hover:shadow-2xl transition-shadow"
          >
            <div className="text-[#B9442A] flex justify-center">
              {point.icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{point.title}</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              {point.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-[#B9442A] to-[#AD5743] p-12 rounded-3xl text-white text-center">
        <h3 className="text-3xl font-bold mb-4">
          {isArabic ? 'الأثر المتوقع' : 'Expected Impact'}
        </h3>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <div>
            <div className="text-4xl font-bold text-[#FDC64B]">10,000+</div>
            <p className="text-lg opacity-90">
              {isArabic ? 'مستخدم في السنة الأولى' : 'Users in first year'}
            </p>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#FDC64B]">5</div>
            <p className="text-lg opacity-90">
              {isArabic ? 'مدن رئيسية' : 'Major cities'}
            </p>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#FDC64B]">50%</div>
            <p className="text-lg opacity-90">
              {isArabic ? 'توفير في التكلفة' : 'Cost savings'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CTASlide({ isArabic }: { isArabic: boolean }) {
  return (
    <div className="text-center space-y-12 animate-fade-in">
      <div className="space-y-6">
        <h2 className="text-6xl font-bold text-gray-800">
          {isArabic ? 'انضم إلى شبكة بايات' : 'Join the Bayat Network'}
        </h2>
        <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {isArabic
            ? 'كن جزءاً من ثورة التوصيل في ليبيا'
            : "Be part of Libya's delivery revolution"}
        </p>
      </div>

      <div className="bg-white p-12 rounded-3xl shadow-xl max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-[#B9442A]">
                {isArabic ? 'التطبيق قريباً' : 'App Coming Soon'}
              </h3>
              <p className="text-lg text-gray-700">
                {isArabic
                  ? 'متوفر قريباً على iOS و Android'
                  : 'Available soon on iOS & Android'}
              </p>
            </div>

            <div className="flex gap-4 justify-center md:justify-start">
              <div className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2">
                <Smartphone className="w-6 h-6" />
                <span>App Store</span>
              </div>
              <div className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2">
                <Smartphone className="w-6 h-6" />
                <span>Google Play</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-gradient-to-br from-[#FDC64B] to-[#FDDA7D] p-16 rounded-full">
              <Plane className="w-32 h-32 text-[#B9442A]" />
            </div>
          </div>
        </div>
      </div>

      <div className="text-lg text-gray-600">
        {isArabic ? 'شكراً لكم' : 'Thank you'}
      </div>
    </div>
  );
}
