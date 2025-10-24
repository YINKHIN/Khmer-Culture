import React, { useContext, useState } from "react";
import { LanguageContext, ThemeContext } from "../App";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Star,
  Music,
  // Dance,
  Flower,
} from "lucide-react";

const Festivals = () => {
  const { t, language } = useContext(LanguageContext);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const { darkMode } = useContext(ThemeContext);
  const months =
    language === "km"
      ? [
          "មករា",
          "កុម្ភៈ",
          "មីនា",
          "មេសា",
          "ឧសភា",
          "មិថុនា",
          "កក្កដា",
          "សីហា",
          "កញ្ញា",
          "តុលា",
          "វិច្ឆិកា",
          "ធ្នូ",
        ]
      : [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];

  const festivals = [
    {
      id: 1,
      name: t.khmerNewYear,
      date: language === "km" ? "១៤-១៦ មេសា" : "April 14-16",
      month: 3, // April (0-indexed)
      type: language === "km" ? "បុណ្យជាតិ" : "National Holiday",
      description: t.khmerNewYearDescription,
      image: "/api/placeholder/600/400",
      duration: language === "km" ? "៣ ថ្ងៃ" : "3 days",
      location: language === "km" ? "ទូទាំងប្រទេស" : "Nationwide",
      activities: [
        language === "km" ? "លេងល្បែងប្រជាប្រិយ" : "Traditional games",
        language === "km" ? "រាំរបាំប្រពៃណី" : "Traditional dancing",
        language === "km" ? "ផ្គុំផ្កាបាច់" : "Building sand pagodas",
        language === "km" ? "ស្រោចទឹកគ្នា" : "Water splashing",
      ],
      significance:
        language === "km"
          ? "បុណ្យចូលឆ្នាំខ្មែរជាពិធីបុណ្យប្រពៃណីដ៏សំខាន់បំផុតនៅកម្ពុជា"
          : "Khmer New Year is the most important traditional festival in Cambodia",
      traditions: [
        language === "km" ? "លាងមុខងាយ" : "Washing the face",
        language === "km" ? "ច្រត់ព្រះនង្គ័ល" : "Royal ploughing ceremony",
        language === "km" ? "ទៅលីវាសនា" : "Visiting pagodas",
        language === "km" ? "ជូនអំណោយដល់ជនចាស់" : "Giving gifts to elders",
      ],
    },
    {
      id: 2,
      name: t.waterFestival,
      date: language === "km" ? "ពេញបូណ៌មីនovember" : "Full moon of November",
      month: 10, // November
      type: language === "km" ? "បុណ្យទន្លេ" : "River Festival",
      description:
        language === "km"
          ? "បុណ្យទឹកជាពិធីបុណ្យដ៏ធំនៅភ្នំពេញ ដែលមានការប្រណាំងទូក"
          : "Water Festival is a major celebration in Phnom Penh featuring boat races",
      image: "/api/placeholder/600/400",
      duration: language === "km" ? "៣ ថ្ងៃ" : "3 days",
      location: language === "km" ? "ភ្នំពេញ" : "Phnom Penh",
      activities: [
        language === "km" ? "ប្រណាំងទូកនាគ" : "Dragon boat racing",
        language === "km" ? "លេងល្បែងទឹក" : "Water games",
        language === "km" ? "រាំរបាំអូរត្រេអ៊ូ" : "Apsara dancing",
        language === "km" ? "ទស្សនាការបាញ់កាំជ្រួច" : "Fireworks display",
      ],
      significance:
        language === "km"
          ? "បុណ្យទឹកជាការអបអរសាទរព្រះចន្ទពេញបូណ៌ និងការបញ្ចប់រដូវវស្សា"
          : "Water Festival celebrates the full moon and the end of the rainy season",
      traditions: [
        language === "km" ? "អុំទូក" : "Rowing boats",
        language === "km" ? "លេងល្បែងប្រជាប្រិយ" : "Playing traditional games",
        language === "km" ? "ទៅលីវាសនា" : "Visiting pagodas",
        language === "km" ? "ជួបជុំគ្រួសារ" : "Family gatherings",
      ],
    },
    {
      id: 3,
      name: t.pchumBen,
      date: language === "km" ? "១៥ កញ្ញា" : "September 15",
      month: 8, // September
      type: language === "km" ? "បុណ្យបិណ្ឌ" : "Ancestors' Day",
      description:
        language === "km"
          ? "បុណ្យព្រះនាងជាពិធីបុណ្យសាសនាដ៏សំខាន់សម្រាប់រំលឹកដូនតា"
          : "Pchum Ben is an important religious festival for remembering ancestors",
      image: "/api/placeholder/600/400",
      duration: language === "km" ? "១៥ ថ្ងៃ" : "15 days",
      location: language === "km" ? "ទូទាំងប្រទេស" : "Nationwide",
      activities: [
        language === "km" ? "ប្រគេនបាយដូនតា" : "Offering food to ancestors",
        language === "km" ? "ទៅលីវាសនា" : "Visiting pagodas",
        language === "km" ? "ស្តាប់ធម៌ទេសនា" : "Listening to sermons",
        language === "km" ? "ប្រគេនសំពះព្រះសង្ឃ" : "Offering to monks",
      ],
      significance:
        language === "km"
          ? "បុណ្យព្រះនាងជាពេលវេលាដើម្បីរំលឹកនិងបំពេញបំណាច់ដូនតា"
          : "Pchum Ben is a time to remember and honor ancestors",
      traditions: [
        language === "km" ? "បិណ្ឌបាត" : "Making offerings",
        language === "km" ? "ទៅលីវាសនា" : "Temple visits",
        language === "km" ? "ជូនអំណោយដល់ជនចាស់" : "Giving to elders",
        language === "km" ? "ធ្វើបុណ្យកុសល" : "Merit making",
      ],
    },
    {
      id: 4,
      name: language === "km" ? "បុណ្យអុំទូក" : "Bon Om Touk",
      date: language === "km" ? "ពេញបូណ៌មីនovember" : "Full moon of November",
      month: 10,
      type: language === "km" ? "បុណ្យទឹក" : "Water Festival",
      description:
        language === "km"
          ? "បុណ្យអុំទូកជាពិធីបុណ្យប្រពៃណីដែលមានការប្រណាំងទូក"
          : "Bon Om Touk is a traditional festival featuring boat races",
      image: "/api/placeholder/600/400",
      duration: language === "km" ? "៣ ថ្ងៃ" : "3 days",
      location: language === "km" ? "ទន្លេមេគង្គ" : "Mekong River",
      activities: [
        language === "km" ? "ប្រណាំងទូក" : "Boat racing",
        language === "km" ? "លេងល្បែងទឹក" : "Water games",
        language === "km" ? "រាំរបាំ" : "Traditional dancing",
        language === "km" ? "បាញ់កាំជ្រួច" : "Fireworks",
      ],
      significance:
        language === "km"
          ? "បុណ្យអុំទូកជាការអបអរការបញ្ចប់រដូវវស្សា"
          : "Bon Om Touk celebrates the end of the rainy season",
      traditions: [
        language === "km" ? "អុំទូក" : "Boat rowing",
        language === "km" ? "លេងល្បែង" : "Playing games",
        language === "km" ? "ទៅលីវាសនា" : "Temple visits",
        language === "km" ? "ជួបជុំគ្រួសារ" : "Family reunions",
      ],
    },
  ];

  const filteredFestivals = festivals.filter(
    (festival) => festival.month === selectedMonth
  );

  const FestivalCard = ({ festival }) => (
    <div
      className={`rounded-2xl overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105 ${
        darkMode ? "bg-gray-800" : "bg-white"
      }`}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={festival.image}
          alt={festival.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="bg-angkor-gold text-white px-3 py-1 rounded-full text-sm font-bold">
            {festival.type}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="text-xl font-bold mb-1 khmer-text">{festival.name}</h3>
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{festival.date}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{festival.duration}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <p
          className={`text-sm mb-4 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {festival.description}
        </p>

        <div className="mb-4">
          <div className="flex items-center space-x-2 mb-2">
            <MapPin className="w-4 h-4 text-angkor-gold" />
            <span className="text-sm font-medium">{festival.location}</span>
          </div>
        </div>

        <div className="mb-4">
          <h4
            className={`font-bold mb-2 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {language === "km" ? "សកម្មភាព" : "Activities"}
          </h4>
          <div className="flex flex-wrap gap-2">
            {festival.activities.map((activity, index) => (
              <span
                key={index}
                className="bg-angkor-gold/10 text-angkor-gold px-2 py-1 rounded-lg text-xs"
              >
                {activity}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t pt-4">
          <h4
            className={`font-bold mb-2 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {language === "km" ? "ប្រពៃណី" : "Traditions"}
          </h4>
          <ul className="space-y-1">
            {festival.traditions.map((tradition, index) => (
              <li key={index} className="flex items-center space-x-2 text-sm">
                <Star className="w-3 h-3 text-angkor-gold" />
                <span>{tradition}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
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
            {t.festivalsTitle}
          </h1>
          <p
            className={`text-lg max-w-3xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {language === "km"
              ? "ស្វែងយល់អំពីបុណ្យនិងការប្រារព្ធប្រពៃណីដ៏រីករាយរបស់កម្ពុជា"
              : "Discover the joyful festivals and celebrations of Cambodia"}
          </p>
        </div>

        {/* Month Selector */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {months.map((month, index) => (
              <button
                key={index}
                onClick={() => setSelectedMonth(index)}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  selectedMonth === index
                    ? "bg-gradient-to-r from-angkor-gold to-temple-stone text-white shadow-lg"
                    : darkMode
                    ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    : "bg-white text-gray-600 hover:bg-gray-50 shadow-md"
                }`}
              >
                {month}
              </button>
            ))}
          </div>
        </div>

        {/* Festivals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredFestivals.map((festival) => (
            <FestivalCard key={festival.id} festival={festival} />
          ))}
        </div>

        {filteredFestivals.length === 0 && (
          <div className="text-center py-16">
            <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3
              className={`text-xl font-bold mb-2 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {language === "km" ? "មិនមានបុណ្យ" : "No Festivals"}
            </h3>
            <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
              {language === "km"
                ? "មិនមានបុណ្យនៅខែនេះ"
                : "No festivals in this month"}
            </p>
          </div>
        )}

        {/* Festival Calendar */}
        <div className="mb-16">
          <h2
            className={`text-3xl font-bold text-center mb-12 khmer-text ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {language === "km" ? "ប្រតិទិនបុណ្យ" : "Festival Calendar"}
          </h2>

          <div
            className={`p-8 rounded-2xl ${
              darkMode ? "bg-gray-800" : "bg-white"
            } shadow-lg`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {festivals.map((festival) => (
                <div
                  key={festival.id}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    darkMode
                      ? "border-gray-700 hover:border-angkor-gold"
                      : "border-gray-200 hover:border-angkor-gold"
                  }`}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-angkor-gold mb-2">
                      {festival.date.split(" ")[0]}
                    </div>
                    <h3
                      className={`font-bold mb-2 khmer-text ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {festival.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">
                      {festival.type}
                    </p>
                    <div className="flex items-center justify-center space-x-2 text-xs text-gray-400">
                      <Clock className="w-3 h-3" />
                      <span>{festival.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
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
              {language === "km"
                ? "ចង់ចូលរួមក្នុងបុណ្យ?"
                : "Want to Join the Celebrations?"}
            </h3>
            <p
              className={`mb-6 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
            >
              {language === "km"
                ? "ស្វែងយល់អំពីទីតាំងទេសចរណ៍ដែលល្អបំផុតសម្រាប់បុណ្យទាំងនេះ"
                : "Learn about the best tourist destinations for these festivals"}
            </p>
            <a
              href="/tourism"
              className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-angkor-gold to-temple-stone text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <MapPin className="w-5 h-5" />
              <span className="khmer-text">{t.tourism}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Festivals;
