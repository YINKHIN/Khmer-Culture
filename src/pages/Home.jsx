import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LanguageContext, ThemeContext } from "../App";
import Slider1 from "../image/slide1.jpeg"
import Slider2 from "../image/slider2.jpeg"
import Slider3 from "../image/slide4.png"
import Slider4 from "../image/Khmer_folk_dance.JPG"
import logo from "../image/founder.jpg"
import {
  ArrowRight,
  Users,
  Utensils,
  Landmark,
  Calendar,
  Camera,
  Music,
  BookOpen,
  Languages,
  Palette,
} from "lucide-react";

const Home = () => {
  const { t, language } = useContext(LanguageContext);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { darkMode } = useContext(ThemeContext);

  // ✅ Khmer cultural heritage images
  const heroImages = [
    "/images/angkor-wat-sunrise.jpg",
    "/images/khmer-dancers.jpg",
    "/images/cambodian-countryside.jpg",
  ];

  // Fallback images featuring Khmer culture
  const fallbackImages = [
     `${Slider1}`, // Angkor Wat
     `${Slider2}`, // Angkor Wat
     `${Slider3}`, // Angkor Wat
     `${Slider4}`, // Angkor Wat
     
  ];

  const artisans = [
    {
      name: language === "km" ? "ស្ថាបនិក យីន ឃីន" : " Founder Mr. Yin Khin",
      // specialty: language === "km" ? "Larvel (" : "Khmer Silk",
      location: language === "km" ? "កំពង់ធំ" : "Kampong Thom",
      experience: language === "km" ? "បទពិសោធន៍" : "Experience",
      image:
        `${logo}`,   
      story:
        language === "km"
          ? "ជាអ្នកជំនាញទៅលើ វិស្វកម្មកម្មវិធី ផ្នែកខាងមុខ ផ្នែកខាងក្រោយ"
          : "Expert in front-end and back-end software engineering",
    },
  ];
  const culturalHighlights = [
    {
      title: t.history,
      description:
        language === "km"
          ? "ស្វែងយល់អំពីប្រវត្តិសាស្ត្រអាណាចក្រខ្មែរ និងអារ្យធម៌អង្គរ"
          : "Explore the history of the Khmer Empire and Angkor civilization",
      icon: Landmark,
      path: "/history",
      color: "from-red-500 to-orange-500",
    },
    {
      title: t.cuisine,
      description:
        language === "km"
          ? "ភ្លេងរសជាតិម្ហូបខ្មែរ ដូចជា អាម៉ុក, បង្អែមល្ហើ និង គ្រឿងសាច់ឆ្អាប"
          : "Savor Khmer flavors like Amok, Num Banh Chok, and traditional desserts",
      icon: Utensils,
      path: "/cuisine",
      color: "from-green-500 to-teal-500",
    },
    {
      title: t.festivals,
      description:
        language === "km"
          ? "ពិធីបុណ្យខ្មែរប្រពៃណី ចូលឆ្នាំខ្មែរ បុណ្យភ្ជុំបិណ្ឌ និងបុណ្យអុំទូក"
          : "Celebrate Khmer festivals: New Year, Pchum Ben, and Water Festival",
      icon: Calendar,
      path: "/festivals",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: t.arts,
      description:
        language === "km"
          ? "សិល្បៈខ្មែរប្រពៃណី របាំព្រះរាជទ្រព្យ តន្ត្រីពិណពាទ្យ និងផ្ទាំងចម្លាក់ថ្ម"
          : "Traditional Khmer arts: Royal Ballet, Pinpeat music, and stone carvings",
      icon: Palette,
      path: "/arts",
      color: "from-blue-500 to-indigo-500",
    },
  ];

  const featuredContent = [
    {
      title: language === "km" ? "អង្គរវត្ត" : "Angkor Wat",
      description:
        language === "km"
          ? "ប្រាសាទអង្គរវត្ត សំណង់ប្រវត្តិសាស្ត្រដ៏អស្ចារ្យបំផុតរបស់មនុស្សជាតិ"
          : "Angkor Wat, the largest religious monument and Khmer architectural masterpiece",
      image: "/images/angkor-wat.jpg",
      fallback:
        `${Slider1}`,
      path: "/history",
    },
    {
      title: language === "km" ? "របាំអប្សរា" : "Apsara Dance",
      description:
        language === "km"
          ? "សិល្បៈរបាំអប្សរា តន្ត្រី និងរបាំព្រះរាជទ្រព្យខ្មែរ"
          : "The graceful Apsara dance, classical Khmer music and Royal Ballet",
      image: "/images/apsara-dance.jpg",
      fallback:
         `${Slider2}`,
      path: "/arts",
    },
    {
      title: language === "km" ? "របាំប្រជាប្រិយខ្មែរ" : "Khmer folk dance",
      description:
        language === "km"
          ? "របាំ​ប្រជាប្រិយ​ខ្មែរ​ជា​ធម្មតា​មាន​ល្បឿន​លឿន​ជាង​របាំ​បុរាណ។ ចលនា និងកាយវិការមិនមានលក្ខណៈដូចរបាំបុរាណទេ។"
          : "Cambodian folk dances are usually more fast-paced than classical dances. The movements and gestures are not as stylized as classical dance",
      image: "/images/khmer-traditions.jpg",
      fallback:
        `${Slider4}`,
      path: "/blog",
    },
    {
      title: language === "km" ? "ប្រពៃណីខ្មែរ" : "Khmer Traditions",
      description:
        language === "km"
          ? "ទំនៀមទម្លាប់ ការគោរពប្រពៃណី និងវប្បធម៌ខ្មែរដើម"
          : "Khmer customs, traditional ceremonies and indigenous cultural practices",
      image: "/images/khmer-traditions.jpg",
      fallback:
        `${Slider3}`,
      path: "/clothing",
    },
  ];

  // Handle image loading errors
  const handleImageError = (e, fallbackUrl) => {
    e.target.src = fallbackUrl;
  };

  // Auto-slide hero section
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bottom-4">
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image}
                alt={language === "km" ? "វប្បធម៌ខ្មែរ" : "Khmer Culture"}
                className="w-full h-full object-cover"
                onError={(e) => handleImageError(e, fallbackImages[index])}
              />
              <div className="absolute inset-0 bg-black/60" />
            </div>
          ))}
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in khmer-text">
            {language === "km" ? "វប្បធម៌ខ្មែរ" : "Khmer Culture"}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-slide-up khmer-text">
            {language === "km"
              ? "ស្វែងរកភាពអស្ចារ្យនៃអារ្យធម៌ខ្មែរ និងមរតកប្រវត្តិសាស្ត្រ"
              : "Discover the wonders of Khmer civilization and historical heritage"}
          </p>
          <Link
            to="/history"
            className="inline-flex items-center space-x-2 bg-angkor-gold hover:bg-yellow-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 animate-slide-up"
          >
            <span className="khmer-text">
              {language === "km" ? "ស្វែងរកឥឡូវ" : "Explore Now"}
            </span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Cultural Highlights */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className={`text-3xl md:text-4xl font-bold mb-4 khmer-text ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {language === "km"
                ? "ចំណុចពិសេសនៃវប្បធម៌ខ្មែរ"
                : "Khmer Cultural Highlights"}
            </h2>
            <p
              className={`text-lg ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {language === "km"
                ? "ស្វែងយល់ពីភាពសម្បូរបែបនៃមរតកវប្បធម៌ខ្មែរ"
                : "Explore the richness of Khmer cultural heritage"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {culturalHighlights.map((highlight, index) => (
              <Link
                key={index}
                to={highlight.path}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${highlight.color} p-6 text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`}
              >
                <div className="relative z-10">
                  <highlight.icon className="w-12 h-12 mb-4 opacity-80" />
                  <h3 className="text-xl font-bold mb-2 khmer-text">
                    {highlight.title}
                  </h3>
                  <p className="text-sm opacity-90 mb-4 khmer-text">
                    {highlight.description}
                  </p>
                  <div className="flex items-center text-sm font-medium">
                    <span>
                      {language === "km" ? "រៀនបន្ថែម" : "Learn More"}
                    </span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className={`text-3xl md:text-4xl font-bold mb-4 khmer-text ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {language === "km"
                ? "មាតិកាពិសេសខ្មែរ"
                : "Khmer Featured Content"}
            </h2>
            <p
              className={`text-lg ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {language === "km"
                ? "ស្វែងយល់អំពីអ្វីដែលធ្វើអោយវប្បធម៌ខ្មែរមានលក្ខណៈពិសេស"
                : "Discover what makes Khmer culture unique and magnificent"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {featuredContent.map((content, index) => (
              <div
                key={index}
                className={`group rounded-2xl overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                  darkMode ? "bg-gray-800" : "bg-white"
                }`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={content.image}
                    alt={content.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => handleImageError(e, content.fallback)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="p-6">
                  <h3
                    className={`text-xl font-bold mb-3 khmer-text ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {content.title}
                  </h3>
                  <p
                    className={`text-sm mb-4 ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {content.description}
                  </p>
                  <Link
                    to={content.path}
                    className="inline-flex items-center space-x-2 text-angkor-gold hover:text-yellow-600 font-medium transition-colors duration-200"
                  >
                    <span>{language === "km" ? "អានបន្ថែម" : "Read More"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-angkor-gold to-temple-stone">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 khmer-text">
            {language === "km"
              ? "ចាប់ផ្ដើមដំណើរវប្បធម៌ខ្មែររបស់អ្នក"
              : "Start Your Khmer Cultural Journey"}
          </h2>
          <p className="text-xl text-white/90 mb-8 khmer-text">
            {language === "km"
              ? "ចូលរួមជាមួយយើងក្នុងការថែរក្សា និងផ្សព្វផ្សាយមរតកវប្បធម៌ខ្មែរ"
              : "Join us in preserving and promoting Khmer cultural heritage"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/history"
              className="inline-flex items-center justify-center space-x-2 bg-white text-angkor-gold font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <BookOpen className="w-5 h-5" />
              <span className="khmer-text">
                {language === "km" ? "ប្រវត្តិសាស្ត្រ" : "History"}
              </span>
            </Link>
            <Link
              to="/culture"
              className="inline-flex items-center justify-center space-x-2 bg-white/20 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-white/30"
            >
              <Users className="w-5 h-5" />
              <span className="khmer-text">
                {language === "km" ? "វប្បធម៌" : "Culture"}
              </span>
            </Link>
          </div>
        </div>

        
      </section>
        <div className=" flex  justify-center  m-6  ">
            {artisans.map((artisan, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-2xl ${
                  darkMode ? "bg-gray-800" : "bg-white"
                } shadow-lg transition-all duration-300 transform hover:scale-105`}
              >
                <img
                  src={artisan.image}
                  alt={artisan.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3
                  className={`text-lg font-bold mb-2 khmer-text ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {artisan.name}
                </h3>
                <p
                  className={`text-sm mb-2 ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {artisan.specialty}
                </p>
                <p
                  className={`text-xs mb-3 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {artisan.location} • {artisan.experience}{" "}
                  {language === "km" ? "បទពិសោធន៍" : "experience"}
                </p>
                <p
                  className={`text-sm khmer-text ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {artisan.story}
                </p>
              </div>
            ))}
          </div>
    </div>
  );
};

export default Home;
