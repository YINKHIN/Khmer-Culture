import React, { useContext, useState } from "react";
import { LanguageContext, ThemeContext } from "../App";
import logo from "../image/founder.jpg"
import Chomlak from "../image/Arts/សោមនាក.jpg"
import Chnai from "../image/Arts/chnai.jpg"
import Komno from "../image/Arts/komno.jpg"
import Kroma from "../image/Arts/kroma.jpg"
import Sotkhmer from "../image/Arts/sotkhmer.jpg"
import Apsara from "../image/Arts/apsara-dance.jpg"
import Arm from "../image/Arts/ដៃដុះខ្មែរ.jpg"
import {
  Palette,
  Brush,
  Scissors,
  Heart,
  Star,
  User,
  Camera,
  Clock,
} from "lucide-react";

const Arts = () => {
  const { t, language } = useContext(LanguageContext);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { darkMode } = useContext(ThemeContext);

  const categories = [
    { id: "all", label: language === "km" ? "ទាំងអស់" : "All" },
    { id: "visual", label: language === "km" ? "សិល្បៈទស្សនីយភាព" : "Visual Arts" },
    { id: "handicrafts", label: language === "km" ? "ធ្វើដោយដៃ" : "Handicrafts" },
    {
      id: "performing",
      label: language === "km" ? "សិល្បៈសម្តែង" : "Performing Arts",
    },
  ];

  const artworks = [
    {
      id: 1,
      name: language === "km" ? "រូបសំណាក់" : "Angkor Sculptures",
      category: "visual",
      artist: "សម័យអង្គរ",
      period: language === "km" ? "សម័យអង្គរ" : "Angkor Period",
      image:`${Chomlak}`,
      description:
        language === "km"
          ? "រូបសំណាកដ៏ល្អឯកនៅប្រាសាទអង្គរ បង្ហាញពីសិល្បៈខ្មែរដ៏អស្ចារ្យ"
          : "Exquisite sculptures at Angkor temples showcasing magnificent Khmer art",
      technique: language === "km" ? "ការច្នៃថ្ម" : "Stone carving",
      materials: [language === "km" ? "ថ្មបាសាល់" : "Sandstone"],
      significance:
        language === "km"
          ? "តំណាងឱ្យសិល្បៈខ្មែរក្នុងសម័យអង្គរ"
          : "Represents Khmer art during the Angkor period",
    },
    {
      id: 2,
      name: language === "km" ? "សូត្រខ្មែរ" : "Khmer Silk",
      category: "handicrafts",
      artist: "Artisan Community",
      period: language === "km" ? "បុរាណ-សម័យទំនើប" : "Ancient-Modern",
      image: `${Sotkhmer}`,
      description:
        language === "km"
          ? "សូត្រខ្មែរដែលច្នៃដោយដៃ មានលំនាំនិងពណ៌ស្រស់ស្អាត"
          : "Hand-woven Khmer silk with beautiful patterns and colors",
      technique: language === "km" ? "ការបុកសូត្រ" : "Traditional weaving",
      materials: [language === "km" ? "សូត្រធម្មជាតិ" : "Natural silk"],
      significance:
        language === "km"
          ? "ជាផលិតផលដៃដុះដ៏ល្បីរបស់កម្ពុជា"
          : "Famous handicraft product of Cambodia",
    },
    {
      id: 3,
      name: language === "km" ? "របាំអប្សារា" : "Apsara Dance",
      category: "performing",
      artist: "Royal Ballet",
      period: language === "km" ? "សម័យអង្គរ" : "Angkor Period",
      image:`${Apsara}`,
      description:
        language === "km"
          ? "របាំអប្សារាជារបាំប្រពៃណីដ៏ល្បីរបស់កម្ពុជា"
          : "Apsara dance is a famous traditional dance of Cambodia",
      technique: language === "km" ? "ចលនាដៃនិងជើង" : "Hand and foot movements",
      materials: [language === "km" ? "សំពត់ប្រពៃណី" : "Traditional costumes"],
      significance:
        language === "km"
          ? "តំណាងឱ្យវប្បធម៌ខ្មែរនិងសិល្បៈរាំ"
          : "Represents Khmer culture and dance art",
    },
    {
      id: 4,
      name: language === "km" ? "ក្រម៉ាខ្មែរ" : "Krama Khmer",
      category: "handicrafts",
      artist: "Rural Artisans",
      period: language === "km" ? "បុរាណ-សម័យទំនើប" : "Ancient-Modern",
      image:`${Kroma}`,
      description:
        language === "km"
          ? "ក្រម៉ាដែលច្នៃដោយដៃ មានលំនាំនិងពណ៌ជាច្រើន"
          : "Hand-woven krama with various patterns and colors",
      technique: language === "km" ? "ការបុកក្រណាត់" : "Traditional weaving",
      materials: [language === "km" ? "ក្រណាត់កប៉ាក់" : "Cotton fabric"],
      significance:
        language === "km"
          ? "ជាផលិតផលដៃដុះដ៏សំខាន់របស់ជនបទ"
          : "Important handicraft product of rural areas",
    },
    {
      id: 5,
      name: language === "km" ? "គំនូរប្រពៃណី" : "Traditional Painting",
      category: "visual",
      artist: "Local Artists",
      period: language === "km" ? "សម័យទំនើប" : "Modern",
      image:`${Komno}` ,
      description:
        language === "km"
          ? "គំនូរប្រពៃណីដែលបង្ហាញពីជីវិតនិងវប្បធម៌ខ្មែរ"
          : "Traditional paintings depicting Khmer life and culture",
      technique: language === "km" ? "ការគូរដោយដៃ" : "Hand painting",
      materials: [
        language === "km" ? "ពណ៌ធម្មជាតិ" : "Natural colors",
        language === "km" ? "ក្រដាស" : "Paper",
      ],
      significance:
        language === "km"
          ? "តំណាងឱ្យជីវិតនិងវប្បធម៌ប្រពៃណី"
          : "Represents traditional life and culture",
    },
    {
      id: 6,
      name: language === "km" ? "កែច្នៃឈើ" : "Wood Carving",
      category: "handicrafts",
      artist: "Master Craftsmen",
      period: language === "km" ? "បុរាណ-សម័យទំនើប" : "Ancient-Modern",
      image:`${Chnai}`,
      description:
        language === "km"
          ? "ច្នៃឈើដ៏ល្អឯកដែលបង្ហាញពីបច្ចេកទេសខ្មែរ"
          : "Exquisite wood carvings showcasing Khmer techniques",
      technique: language === "km" ? "ការច្នៃឈើ" : "Wood carving",
      materials: [language === "km" ? "ឈើធម្មជាតិ" : "Natural wood"],
      significance:
        language === "km"
          ? "ជាសិល្បៈដៃដុះដ៏ល្បីរបស់កម្ពុជា"
          : "Famous handicraft art of Cambodia",
    },
     {
      id: 7,
      name: language === "km" ? "ដៃដុះខ្មែរ" : "Traditional Painting",
      category: "visual",
      artist: "Local Artists",
      period: language === "km" ? "សម័យទំនើប" : "Modern",
      image:`${Arm}` ,
      description:
        language === "km"
          ? "រាល់ក្បាច់ដៃនីមួយៗក្នុងរបាំខ្មែរសុទ្ធតែមានបង្កប់អត្ថន័យដែលយកលំនាំតាមធម្មជាតិ។ ពីលើចុះក្រោម ពីឆ្វេងទៅស្ដាំ គឺដាំ ដុះ ត្រួយ ស្លឹក ចេញផ្កា ផ្លែ ផ្លែទុំ និងផ្លែជ្រុះ។"
          : "All the hand gestures used in Cambodian traditional dance have a meaning inspired by nature - from top left, going clockwise they are: Planting, Growing, Young Leaf, Leaf, Flowering, Fruit, Ripe Fruit, and Falling Fruit.",
      technique: language === "km" ? "ការគូរដោយដៃ" : "Hand painting",
      materials: [
        language === "km" ? "ពណ៌ធម្មជាតិ" : "Natural colors",
        language === "km" ? "ក្រដាស" : "Paper",
      ],
      significance:
        language === "km"
          ? "តំណាងឱ្យជីវិតនិងវប្បធម៌ប្រពៃណី"
          : "Represents traditional life and culture",
    },
  ];

  const artisans = [
    {
      name: language === "km" ? "អ្នកស្រី សុខ សាវង្ស" : "Ms. Sok Savang",
      specialty: language === "km" ? "សូត្រខ្មែរ" : "Khmer Silk",
      location: language === "km" ? "សៀមរាប" : "Siem Reap",
      experience: language === "km" ? "២០ ឆ្នាំ" : "20 years",
      image:
        `${logo}`,   
      story:
        language === "km"
          ? "អ្នកស្រីបានរៀនការបុកសូត្រពីម្តាយរបស់អ្នកស្រី ហើយបានបន្តច្នៃសូត្រដ៏ស្រស់ស្អាត"
          : "She learned silk weaving from her mother and continues to create beautiful silk products",
    },
    {
      name: language === "km" ? "លោក ជួន សុខា" : "Mr. Chuon Sokha",
      specialty: language === "km" ? "ច្នៃឈើ" : "Wood Carving",
      location: language === "km" ? "បាត់ដំបង" : "Battambang",
      experience: language === "km" ? "៣០ ឆ្នាំ" : "30 years",
      image:
        `${logo}`,   
      story:
        language === "km"
          ? "លោកជាអ្នកច្នៃឈើដែលមានបច្ចេកទេសខ្ពស់ ហើយបានបង្រៀនសិស្សជាច្រើន"
          : "He is a master wood carver with high skills and has taught many students",
    },
    {
      name: language === "km" ? "អ្នកស្រី ស៊ុន ស្រីយ៉ា" : "Ms. Sun Sreya",
      specialty: language === "km" ? "ក្រម៉ា" : "Krama Weaving",
      location: language === "km" ? "កំពង់ធំ" : "Kampong Thom",
      experience: language === "km" ? "១៥ ឆ្នាំ" : "15 years",
      image:
        `${logo}`,   
      story:
        language === "km"
          ? "អ្នកស្រីបានបង្កើតក្រុមច្នៃក្រម៉ា ដើម្បីជួយស្ត្រីនៅជនបទ"
          : "She created a krama weaving group to help women in rural areas",
    },
  ];

  const filteredArtworks = artworks.filter(
    (artwork) =>
      selectedCategory === "all" || artwork.category === selectedCategory
  );

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1
            className={`text-4xl md:text-5xl font-bold mb-6 khmer-text ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {t.artsTitle}
          </h1>
          <p
            className={`text-lg max-w-3xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {language === "km"
              ? "ស្វែងយល់អំពីសិល្បៈនិងដៃដុះខ្មែរដ៏ល្អឯក"
              : "Discover the exquisite Khmer arts and crafts"}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg transition-all duration-200 ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-angkor-gold to-temple-stone text-white shadow-lg"
                  : darkMode
                  ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  : "bg-white text-gray-600 hover:bg-gray-50 shadow-md"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Artworks Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredArtworks.map((artwork) => (
            <div
              key={artwork.id}
              className={`group rounded-2xl overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={artwork.image}
                  alt={artwork.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="bg-angkor-gold text-white px-3 py-1 rounded-full text-sm font-bold">
                    {artwork.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold mb-1 khmer-text">
                    {artwork.name}
                  </h3>
                  <p className="text-sm opacity-90">{artwork.artist}</p>
                </div>
              </div>

              <div className="p-6">
                <p
                  className={`text-sm mb-4 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {artwork.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <Palette className="w-4 h-4 text-angkor-gold" />
                    <span>{artwork.technique}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="w-4 h-4 text-angkor-gold" />
                    <span>{artwork.period}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-angkor-gold fill-current" />
                    <span className="text-sm font-medium">
                      {artwork.significance}
                    </span>
                  </div>
                  <Heart className="w-5 h-5 text-red-500" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Artisans Section */}
        <div className="mb-16">
          <h2
            className={`text-3xl font-bold text-center mb-12 khmer-text ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {language === "km" ? "អ្នកច្នៃប្រឌិត" : "Meet Our Artisans"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

        {/* Cultural Preservation */}
        <div className="mb-16">
          <h2
            className={`text-3xl font-bold text-center mb-12 khmer-text ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {language === "km" ? "ការថែរក្សាវប្បធម៌" : "Cultural Preservation"}
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop"
                alt="Cultural Preservation"
                className="rounded-2xl shadow-lg"
              />
            </div>

            <div className="space-y-6">
              <div
                className={`p-6 rounded-xl ${
                  darkMode ? "bg-gray-800" : "bg-white"
                } shadow-lg`}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <Brush className="w-6 h-6 text-angkor-gold" />
                  <h3
                    className={`text-xl font-bold khmer-text ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {language === "km" ? "បណ្តុះបណ្តាល" : "Training Programs"}
                  </h3>
                </div>
                <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                  {language === "km"
                    ? "កម្មវិធីបណ្តុះបណ្តាលសិល្បៈដៃដុះសម្រាប់យុវជន"
                    : "Training programs for young people in traditional handicrafts"}
                </p>
              </div>

              <div
                className={`p-6 rounded-xl ${
                  darkMode ? "bg-gray-800" : "bg-white"
                } shadow-lg`}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <Scissors className="w-6 h-6 text-angkor-gold" />
                  <h3
                    className={`text-xl font-bold khmer-text ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {language === "km" ? "ការគាំទ្រ" : "Support Initiatives"}
                  </h3>
                </div>
                <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                  {language === "km"
                    ? "ការគាំទ្រអ្នកច្នៃប្រឌិតនិងផ្សព្វផ្សាញផលិតផល"
                    : "Supporting artisans and promoting their products"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div
            className={`inline-block p-8 rounded-2xl ${
              darkMode ? "bg-gray-800" : "bg-white"
            } shadow-lg`}
          >
            <h3
              className={`text-2xl font-bold mb-4 khmer-text ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {language === "km" ? "ចង់រៀនភាសាខ្មែរ?" : "Want to Learn Khmer?"}
            </h3>
            <p
              className={`mb-6 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
            >
              {language === "km"
                ? "ស្វែងយល់អំពីភាសាខ្មែរនិងវប្បធម៌ក្នុងផ្នែកបន្ទាប់"
                : "Learn about Khmer language and culture in the next section"}
            </p>
            <a
              href="/language"
              className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-angkor-gold to-temple-stone text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Palette className="w-5 h-5" />
              <span className="khmer-text">{t.language}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arts;
