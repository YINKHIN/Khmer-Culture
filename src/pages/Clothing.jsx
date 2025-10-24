import React, { useContext, useState } from "react";
import { LanguageContext, ThemeContext } from "../App";
import Sombot from "../image/Cloths/Sombot.jpg"
import Kroma from "../image/Cloths/kroma.webp"
import Sabai from "../image/Cloths/Sabai.jpg"
import Chong from "../image/Cloths/ចងក្បិន.jpg"
import Cuture from "../image/Cloths/Cultural.webp"

import KromaNew from "../image/Cloths/news.jpg"
import SbaiNew from "../image/Cloths/sbaiNew.jpg"
import SombotNew from "../image/Cloths/sombotnew.webp"
import {
  Eye,
  Info,
  Users,
  Calendar,
  Palette,
  Scissors,
  Heart,
  Star,
} from "lucide-react";

const Clothing = () => {
  const { t, language } = useContext(LanguageContext);
  const [selectedAttire, setSelectedAttire] = useState(null);
    const { darkMode } = useContext(ThemeContext);

  const traditionalAttire = [
    {
      id: "sampot",
      name: language === "km" ? "សំពត់" : "Sampot",
      category: language === "km" ? "សំពត់ប្រពៃណី" : "Traditional Skirt",
      image: `${Sombot}`,
      description:
        language === "km"
          ? "សំពត់ជាសំពត់ប្រពៃណីខ្មែរដែលប្រើប្រាស់ជាទូទៅបំផុត។ វាត្រូវបានច្នៃឡើងពីសូត្រឬក្រណាត់ផ្សេងៗ"
          : "Sampot is the most commonly used traditional Cambodian skirt, made from silk or various fabrics",
      significance:
        language === "km"
          ? "សំពត់តំណាងឱ្យសម្ផស្សនិងស្តីថ្លៃភាពរបស់ស្ត្រីខ្មែរ។ វាត្រូវបានប្រើប្រាស់ក្នុងពិធីបុណ្យនិងពេលធម្មតា"
          : "Sampot represents the elegance and dignity of Khmer women. It is used in ceremonies and daily life",
      history:
        language === "km"
          ? "មានប្រវត្តិចាប់ពីសម័យអង្គរ ត្រូវបានប្រើប្រាស់ដោយព្រះនាងនិងស្ត្រីជាទូទៅ"
          : "Dates back to the Angkor era, used by princesses and common women alike",
      colors: [
        { name: language === "km" ? "ពណ៌លឿង" : "Yellow", hex: "#FFD700" },
        { name: language === "km" ? "ពណ៌ក្រហម" : "Red", hex: "#DC143C" },
        { name: language === "km" ? "ពណ៌ខៀវ" : "Blue", hex: "#4169E1" },
        { name: language === "km" ? "ពណ៌បៃតង" : "Green", hex: "#228B22" },
      ],
      occasions: [
        language === "km" ? "ពិធីបុណ្យចូលឆ្នាំ" : "Khmer New Year",
        language === "km" ? "ពិធីអាពាហ៍ពិពាហ៍" : "Wedding ceremonies",
        language === "km" ? "ពិធីជាតិ" : "National ceremonies",
        language === "km" ? "ពេលធម្មតា" : "Daily wear",
      ],
    },
    {
      id: "krama",
      name: language === "km" ? "ក្រម៉ា" : "Krama",
      category:
        language === "km" ? "ក្រណាត់ប្រើប្រាស់ជាច្រើន" : "Multi-purpose Scarf",
      image: `${Kroma}`,
      description:
        language === "km"
          ? "ក្រម៉ាជាក្រណាត់ចាត់ជាច្រើនបំផុតនៅកម្ពុជា។ វាអាចប្រើបានជាច្រើនវិធី"
          : "Krama is the most versatile fabric in Cambodia. It can be used in many ways",
      significance:
        language === "km"
          ? "ក្រម៉ាតំណាងឱ្យភាពបត់បែននិងបញ្ញាភាពរបស់ប្រជាជនខ្មែរ"
          : "Krama represents the flexibility and ingenuity of the Khmer people",
      history:
        language === "km"
          ? "បានប្រើប្រាស់តាំងពីសម័យបុរាណ ជាផលិតផលដៃដុះដ៏សំខាន់"
          : "Has been used since ancient times as an important handicraft product",
      uses: [
        language === "km" ? "ពាក់ក្បាល" : "Head covering",
        language === "km" ? "ពាក់ក" : "Neck scarf",
        language === "km" ? "ខ្នោះកូន" : "Baby carrier",
        language === "km" ? "កន្សែងជូត" : "Towel",
        language === "km" ? "ខ្នោះវត្ថុ" : "Item carrier",
      ],
      patterns: [
        {
          name: language === "km" ? "រង្វង់" : "Checkered",
          style: "checkerboard",
        },
        { name: language === "km" ? "ខ្សែ" : "Striped", style: "striped" },
        { name: language === "km" ? "ផ្កា" : "Floral", style: "floral" },
      ],
    },
    {
      id: "sabai",
      name: language === "km" ? "ស្បៃខ្មែរ" : "Sbai Khmer",
      category: language === "km" ? "ស្បៃបុរាណ" : "Traditional Blouse",
      image:`${Sabai}`,
      description:
        language === "km"
          ? "ស្បៃជាស្បៃបុរាណប្រពៃណីសម្រាប់ស្ត្រីខ្មែរ។ វាមានរូបរាងស្រស់ស្អាតនិងពណ៌ភ្លឺ"
          : "Sbai is a traditional blouse for Khmer women. It has beautiful patterns and bright colors",
      significance:
        language === "km"
          ? "ស្បៃបង្ហាញពីសម្ផស្សនិងភាពទាន់សម័យរបស់ស្ត្រីខ្មែរ"
          : "Sabai shows the elegance and modernity of Khmer women",
      history:
        language === "km"
          ? "បានវិវត្តតាមពេលវេលា តែរក្សាបាននូវលក្ខណៈប្រពៃណី"
          : "Has evolved over time but maintained traditional characteristics",
      materials: [
        language === "km" ? "សូត្រកម្ពុជា" : "Cambodian silk",
        language === "km" ? "ក្រណាត់ប៉ាក់" : "Cotton fabric",
        language === "km" ? "ក្រណាត់ចាក់ផ្ទាត់" : "Brocade fabric",
      ],
    },
    {
      id: "chang-kben",
      name: language === "km" ? "ក្បិន" : "Kben",
      category:
        language === "km" ? "សំពត់សម្រាប់បុរស" : "Men's Traditional Pants",
      image: `${Chong}`,
      description:
        language === "km"
          ? "ចងក្បិនជាសំពត់ប្រពៃណីសម្រាប់បុរសខ្មែរ។ វាត្រូវបានប្រើប្រាស់ក្នុងពិធីជាតិ"
          : "Chang Kben is traditional attire for Khmer men, used in national ceremonies",
      significance:
        language === "km"
          ? "ចងក្បិនតំណាងឱ្យសេចក្តីថ្លៃថ្នូនិងភាពជាបុរសរបស់បុរសខ្មែរ"
          : "Chang Kben represents dignity and masculinity of Khmer men",
      history:
        language === "km"
          ? "មានប្រវត្តិយូរលង់តាមសម័យអង្គរ"
          : "Has a long history dating back to the Angkor era",
      occasions: [
        language === "km" ? "ពិធីរាជ្យ" : "Royal ceremonies",
        language === "km" ? "ពិធីបុណ្យជាតិ" : "National festivals",
        language === "km" ? "ពិធីបុណ្យសាសនា" : "Religious ceremonies",
      ],
    },
  ];

  const AttireModal = ({ attire, onClose }) => {
    if (!attire) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
        <div
          className={`max-w-4xl w-full max-h-screen overflow-y-auto rounded-2xl ${
            darkMode ? "bg-gray-800" : "bg-white"
          } shadow-2xl`}
        >
          <div className="relative">
            <img
              src={attire.image}
              alt={attire.name}
              className="w-full h-96 object-cover rounded-t-2xl"
            />
            <button
              onClick={onClose}
              className={`absolute top-4 right-4 p-2 rounded-full ${
                darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900"
              } shadow-lg text-xl`}
            >
              ✕
            </button>
          </div>

          <div className="p-8">
            <h2
              className={`text-3xl font-bold mb-2 khmer-text ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {attire.name}
            </h2>
            <p
              className={`text-lg mb-6 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {attire.category}
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3
                  className={`text-xl font-bold mb-4 khmer-text ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {language === "km" ? "ការពិពណ៌នា" : "Description"}
                </h3>
                <p
                  className={`mb-6 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {attire.description}
                </p>

                <h3
                  className={`text-xl font-bold mb-4 khmer-text ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {language === "km" ? "សារប្រពៃណី" : "Cultural Significance"}
                </h3>
                <p
                  className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}
                >
                  {attire.significance}
                </p>
              </div>

              <div>
                <h3
                  className={`text-xl font-bold mb-4 khmer-text ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {language === "km" ? "ប្រវត្តិ" : "History"}
                </h3>
                <p
                  className={`mb-6 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {attire.history}
                </p>

                {attire.colors && (
                  <div className="mb-6">
                    <h4
                      className={`font-bold mb-2 ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {language === "km" ? "ពណ៌ពេញនិយម" : "Popular Colors"}
                    </h4>
                    <div className="flex space-x-2">
                      {attire.colors.map((color, index) => (
                        <div
                          key={index}
                          className="w-8 h-8 rounded-full border-2 border-gray-300"
                          style={{ backgroundColor: color.hex }}
                          title={color.name}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {attire.occasions && (
                  <div>
                    <h4
                      className={`font-bold mb-2 ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {language === "km"
                        ? "ឱកាសប្រើប្រាស់"
                        : "Worn On Occasions"}
                    </h4>
                    <ul className="space-y-1">
                      {attire.occasions.map((occasion, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-angkor-gold" />
                          <span>{occasion}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

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
            {t.clothingTitle}
          </h1>
          <p
            className={`text-lg max-w-3xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {language === "km"
              ? "ស្វែងយល់អំពីសំពត់ប្រពៃណីខ្មែរដ៏ស្រស់ស្អាត និងសារប្រពៃណីរបស់ពួកវា"
              : "Discover the beautiful traditional Khmer clothing and their cultural significance"}
          </p>
        </div>

        {/* Traditional Attire Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {traditionalAttire.map((attire) => (
            <div
              key={attire.id}
              className={`group cursor-pointer rounded-2xl overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
              onClick={() => setSelectedAttire(attire)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={attire.image}
                  alt={attire.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg mb-1 khmer-text">
                    {attire.name}
                  </h3>
                  <p className="text-white/80 text-sm">{attire.category}</p>
                </div>
                <div className="absolute top-4 right-4">
                  <Eye className="w-6 h-6 text-white/80" />
                </div>
              </div>

              <div className="p-6">
                <p
                  className={`text-sm mb-4 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {attire.description.substring(0, 100)}...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-angkor-gold font-medium flex items-center space-x-1">
                    <Info className="w-4 h-4" />
                    <span>{t.learnMore}</span>
                  </span>
                  <Heart className="w-5 h-5 text-red-500" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cultural Significance Section */}
        <div className="mb-16">
          <h2
            className={`text-3xl font-bold text-center mb-12 khmer-text ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {language === "km"
              ? "សារៈសំខាន់វប្បធម៌នៃសំលៀកបំពាក់ប្រពៃណី"
              : "Cultural Significance of Traditional Attire"}
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={Cuture}
                alt="Traditional Khmer Clothing"
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
                  <Palette className="w-6 h-6 text-angkor-gold" />
                  <h3
                    className={`text-xl font-bold khmer-text ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {language === "km" ? "ពណ៌និងលំនាំ" : "Colors and Patterns"}
                  </h3>
                </div>
                <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                  {language === "km"
                    ? "ពណ៌និងលំនាំនៃសំពត់ប្រពៃណីមានន័យជ្រាលជ្រៅ។ ពណ៌លឿងតំណាងឱ្យព្រះពុទ្ធ ពណ៌ក្រហមតំណាងឱ្យភាពរឹងមាំ"
                    : "The colors and patterns of traditional attire have deep meanings. Yellow represents Buddhism, red represents strength"}
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
                    {language === "km"
                      ? "បច្ចេកទេសច្នៃ"
                      : "Crafting Techniques"}
                  </h3>
                </div>
                <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                  {language === "km"
                    ? "បច្ចេកទេសច្នៃសំពត់ត្រូវបានបង្ហូតពីម្តាយទៅកូន។ មានបច្ចេកទេសជាច្រើនដូចជាការបុក ការច្នៃសូត្រ និងការចាក់ផ្ទាត់"
                    : "Crafting techniques are passed down from mother to child. Techniques include weaving, silk crafting, and brocading"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modern Adaptations */}
        <div className="mb-16">
          <h2
            className={`text-3xl font-bold text-center mb-12 khmer-text ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {language === "km" ? "ការប្តូរតាមសម័យ" : "Modern Adaptations"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: language === "km" ? "សំពត់សម័យទំនើប" : "Modern Sampot",
                description:
                  language === "km"
                    ? "សំពត់ដែលបានប្តូរតាមសម័យទំនើប តែនៅតែរក្សាបាននូវលក្ខណៈប្រពៃណី"
                    : "Modern adaptations of sampot that maintain traditional characteristics",
                image:`${SombotNew}`,
              },
              {
                title: language === "km" ? "ស្បៃថ្មី" : "Contemporary Sbai",
                description:
                  language === "km"
                    ? "ស្បៃដែលបានច្នៃថ្មីដោយអ្នកច្នៃប្រឌិតខ្មែរ"
                    : "Sbai redesigned by contemporary Khmer fashion designers",
                image: `${SbaiNew}`,
              },
              {
                title: language === "km" ? "ក្រម៉ាសិល្បៈ" : "Artistic Krama",
                description:
                  language === "km"
                    ? "ក្រម៉ាដែលបានប្តូរជាសិល្បៈទាន់សម័យ"
                    : "Krama transformed into contemporary art pieces",
                image: `${KromaNew}`,
              },
            ].map((adaptation, index) => (
              <div
                key={index}
                className={`rounded-2xl overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105 ${
                  darkMode ? "bg-gray-800" : "bg-white"
                }`}
              >
                <img
                  src={adaptation.image}
                  alt={adaptation.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3
                    className={`text-lg font-bold mb-2 khmer-text ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {adaptation.title}
                  </h3>
                  <p
                    className={`text-sm ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {adaptation.description}
                  </p>
                </div>
              </div>
            ))}
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
              {language === "km" ? "ចង់ស្វែងយល់បន្ថែម?" : "Want to Learn More?"}
            </h3>
            <p
              className={`mb-6 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
            >
              {language === "km"
                ? "ស្វែងយល់អំពីសិល្បៈនិងដៃដុះខ្មែរក្នុងផ្នែកបន្ទាប់"
                : "Learn more about Khmer arts and crafts in the next section"}
            </p>
            <a
              href="/arts"
              className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-angkor-gold to-temple-stone text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Palette className="w-5 h-5" />
              <span className="khmer-text">{t.arts}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Attire Modal */}
      <AttireModal
        attire={selectedAttire}
        onClose={() => setSelectedAttire(null)}
      />
    </div>
  );
};

export default Clothing;
