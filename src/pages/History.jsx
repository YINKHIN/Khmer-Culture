import React, { useContext, useState } from "react";
import { LanguageContext, ThemeContext } from "../App";
import {
  Crown,
  Building,
  Users,
  Calendar,
  MapPin,
  Landmark,
  Scroll,
  Sword,
  Castle,
  Home,
} from "lucide-react";

const History = () => {
  const { t, language } = useContext(LanguageContext);
  const [selectedPeriod, setSelectedPeriod] = useState("ancient");
  const { darkMode } = useContext(ThemeContext);

  const historicalPeriods = {
    ancient: {
      title: t.ancientKingdoms,
      period: language === "km" ? "១០០-៨០២ គ.ស" : "100-802 AD",
      duration: language === "km" ? "៧០០ ឆ្នាំ" : "700 years",
      description:
        language === "km"
          ? "សម័យកាលដំបូងនៃអរិយធម៌ខ្មែរ រាប់បញ្ចូលអាណាចក្រភ្នំ និងចេនឡា"
          : "The earliest period of Khmer civilization, including Funan and Chenla kingdoms",
      color: "from-amber-500 to-orange-600",
      icon: Crown,
      events: [
        {
          year: language === "km" ? "១០០-៥៥០ គ.ស" : "100-550 AD",
          title: language === "km" ? "អាណាចក្រភ្នំ" : "Funan Kingdom",
          description:
            language === "km"
              ? "អាណាចក្រពាណិជ្ជកម្មដ៏រុងរឿង ទទួលឥទ្ធិពលពីវប្បធម៌ឥណ្ឌា"
              : "Prosperous trading kingdom with Indian cultural influence",
          icon: Building,
        },
        {
          year: language === "km" ? "៥៥០-៨០២ គ.ស" : "550-802 AD",
          title: language === "km" ? "អាណាចក្រចេនឡា" : "Chenla Kingdom",
          description:
            language === "km"
              ? "ចេនឡាបានបន្តពីភ្នំ ពង្រីកទឹកដីទៅភាគឦសាន"
              : "Chenla succeeded Funan and expanded territory to northeast",
          icon: Castle,
        },
      ],
    },
    empire: {
      title: t.khmerEmpire,
      period: language === "km" ? "៨០២-១៤៣១ គ.ស" : "802-1431 AD",
      duration: language === "km" ? "៦២៩ ឆ្នាំ" : "629 years",
      description:
        language === "km"
          ? "យុគអរិយធម៌អង្គរដ៏រុងរឿង ការសាងសង់ប្រាសាទថ្មរយៈពេលរាប់សតវត្ស"
          : "The glorious Angkor civilization era, centuries of temple construction",
      color: "from-red-600 to-red-700",
      icon: Landmark,
      events: [
        {
          year: language === "km" ? "៨០២-៨៣៤ គ.ស" : "802-834 AD",
          title: language === "km" ? "ជ័យវរ្ម័នទី២" : "Jayavarman II",
          description:
            language === "km"
              ? "ស្ថាបនិកចក្រភពខ្មែរ បង្កើតរាជធានីលើភ្នំគូលេន"
              : "Founder of Khmer Empire, established capital at Mount Kulen",
          icon: Crown,
        },
        {
          year: language === "km" ? "១១១៣-១១៥០ គ.ស" : "1113-1150 AD",
          title: language === "km" ? "សូរ្យវរ្ម័នទី២" : "Suryavarman II",
          description:
            language === "km"
              ? "សាងសង់ប្រាសាទអង្គរវត្តដ៏ល្បីល្បាញ សមិទ្ធិផលវិចិត្រសិល្បៈខ្មែរ"
              : "Built the magnificent Angkor Wat, pinnacle of Khmer art",
          icon: Building,
        },
        {
          year: language === "km" ? "១១៨១-១២១៨ គ.ស" : "1181-1218 AD",
          title: language === "km" ? "ជ័យវរ្ម័នទី៧" : "Jayavarman VII",
          description:
            language === "km"
              ? "សាងសង់ប្រាសាទបាយ័ន និងប្រាសាទតាព្រហ្ម ចក្រភពខ្មែរឈានដល់កំពូល"
              : "Built Bayon Temple and Ta Prohm, Khmer Empire at its peak",
          icon: Landmark,
        },
        {
          year: language === "km" ? "១៤៣១ គ.ស" : "1431 AD",
          title: language === "km" ? "ការបោះបង់អង្គរ" : "Abandonment of Angkor",
          description:
            language === "km"
              ? "រាជធានីផ្លាស់ទៅភាគខាងត្បូង ដោយសារសង្គ្រាម និងការប្រែប្រួលអាកាសធាតុ"
              : "Capital moved south due to warfare and climate changes",
          icon: Home,
        },
      ],
    },
    middle: {
      title: language === "km" ? "សម័យកណ្ដាល" : "Middle Period",
      period: language === "km" ? "១៤៣១-១៨៦៣ គ.ស" : "1431-1863 AD",
      duration: language === "km" ? "៤៣២ ឆ្នាំ" : "432 years",
      description:
        language === "km"
          ? "សម័យកាលបន្ទាប់ពីអង្គរ រាជធានីផ្លាស់ទៅលង្វែក ភ្នំពេញ និងឧដុង្គ"
          : "Post-Angkor period with capitals at Longvek, Phnom Penh and Oudong",
      color: "from-purple-600 to-pink-600",
      icon: Castle,
      events: [
        {
          year: language === "km" ? "១៤៣១-១៥២៥ គ.ស" : "1431-1525 AD",
          title: language === "km" ? "រាជធានីភ្នំពេញ" : "Phnom Penh Capital",
          description:
            language === "km"
              ? "រាជធានីផ្លាស់មកភ្នំពេញ កENTERរពារតាមដងទន្លេមេគង្គ"
              : "Capital moved to Phnom Penh, strategic Mekong River location",
          icon: MapPin,
        },
        {
          year: language === "km" ? "១៥២៥-១៥៩៤ គ.ស" : "1525-1594 AD",
          title: language === "km" ? "សម័យលង្វែក" : "Longvek Period",
          description:
            language === "km"
              ? "រាជធានីលង្វែក ជំនាន់ពាណិជ្ជកម្មអន្តរជាតិរីកចម្រើន"
              : "Longvek capital era, flourishing international trade period",
          icon: Building,
        },
        {
          year: language === "km" ? "១៦១៨-១៨៦៣ គ.ស" : "1618-1863 AD",
          title: language === "km" ? "សម័យឧដុង្គ" : "Oudong Period",
          description:
            language === "km"
              ? "រាជធានីឧដុង្គ ការតស៊ូជាមួយប្រទេសជិតខាង"
              : "Oudong capital, struggles with neighboring countries",
          icon: Castle,
        },
      ],
    },
    modern: {
      title: t.modernEra,
      period: language === "km" ? "១៨៦៣-បច្ចុប្បន្ន" : "1863-Present",
      duration: language === "km" ? "១៦១ ឆ្នាំ" : "161 years",
      description:
        language === "km"
          ? "សម័យកាលទំនើបចាប់ពីការកាន់កាប់បារាំង ឯករាជ្យ សង្គ្រាម និងការកសាងប្រទេសឡើងវិញ"
          : "Modern era from French colonization, independence, war, to national reconstruction",
      color: "from-blue-600 to-indigo-700",
      icon: Users,
      events: [
        {
          year: language === "km" ? "១៨៦៣-១៩៥៣" : "1863-1953",
          title: language === "km" ? "ការពារបារាំង" : "French Protectorate",
          description:
            language === "km"
              ? "កម្ពុជាក្រោមការគ្រប់គ្រងបារាំង ការណែនាំវប្បធម៌ថ្មី"
              : "Cambodia under French administration, introduction of new culture",
          icon: Scroll,
        },
        {
          year: language === "km" ? "១៩៥៣" : "1953",
          title: language === "km" ? "ឯករាជ្យភាព" : "Independence",
          description:
            language === "km"
              ? "កម្ពុជាទទួលបានឯករាជ្យពីបារាំងក្រោមព្រះបាទនរោត្តម សីហនុ"
              : "Cambodia gained independence from France under King Norodom Sihanouk",
          icon: Users,
        },
        {
          year: language === "km" ? "១៩៧០-១៩៧៥" : "1970-1975",
          title: language === "km" ? "សង្គ្រាមស៊ីវិល" : "Civil War",
          description:
            language === "km"
              ? "សង្គ្រាមផ្ទៃក្នុង និងភាពចលាចលនយោបាយ"
              : "Internal conflict and political instability",
          icon: Sword,
        },
        {
          year: language === "km" ? "១៩៧៥-១៩៧៩" : "1975-1979",
          title: language === "km" ? "របបខ្មែរក្រហម" : "Khmer Rouge Regime",
          description:
            language === "km"
              ? "របបផ្ដាច់ការដ៏សាហាវ ការបាត់បង់ជីវិតរាប់លាននាក់"
              : "Brutal regime resulting in millions of lives lost",
          icon: Sword,
        },
        {
          year: language === "km" ? "១៩៧៩-បច្ចុប្បន្ន" : "1979-Present",
          title: language === "km" ? "ការកសាងប្រទេសឡើងវិញ" : "National Reconstruction",
          description:
            language === "km"
              ? "ការស្ដារសន្តិភាព និងការអភិវឌ្ឍប្រទេសជាបន្តបន្ទាប់"
              : "Restoration of peace and continuous national development",
          icon: Building,
        },
      ],
    },
  };

  const currentPeriod = historicalPeriods[selectedPeriod];

  // Statistics for all periods
  const periodStats = [
    {
      name: language === "km" ? "សម័យកាលសរុប" : "Total Periods",
      value: "4",
      unit: language === "km" ? "សម័យកាល" : "Periods"
    },
    {
      name: language === "km" ? "រយៈពេលសរុប" : "Total Duration",
      value: "4200 គ.ស.",
      unit: language === "km" ? "ឆ្នាំ" : "Years"
    },
    {
      name: language === "km" ? "រាជធានី" : "Capitals",
      value: "8+",
      unit: language === "km" ? "ទីតាំង" : "Locations"
    }
  ];

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
            {t.historyTitle}
          </h1>
          <p
            className={`text-lg max-w-3xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {language === "km"
              ? "ប្រវត្តិសាស្ត្រកម្ពុជាលាតសន្ធឹងជាង ២០០០ ឆ្នាំ ចាប់ពីអាណាចក្របុរាណរហូតដល់សម័យទំនើប"
              : "Cambodian history spans over 2000 years, from ancient kingdoms to modern era"}
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {periodStats.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-6 rounded-2xl ${
                darkMode ? "bg-gray-800" : "bg-white"
              } shadow-lg`}
            >
              <div className={`text-3xl font-bold bg-gradient-to-r ${currentPeriod.color} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className={`font-medium khmer-text ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                {stat.name}
              </div>
              <div className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                {stat.unit}
              </div>
            </div>
          ))}
        </div>

        {/* Period Selector */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          {Object.entries(historicalPeriods).map(([key, period]) => (
            <button
              key={key}
              onClick={() => setSelectedPeriod(key)}
              className={`flex items-center space-x-3 px-6 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                selectedPeriod === key
                  ? "bg-gradient-to-r " + period.color + " text-white shadow-lg"
                  : darkMode
                  ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  : "bg-white text-gray-600 hover:bg-gray-50 shadow-md"
              }`}
            >
              <period.icon className="w-6 h-6" />
              <div className="text-left">
                <div className="font-bold khmer-text text-sm">{period.title}</div>
                <div className="text-xs opacity-80">{period.period}</div>
                <div className="text-xs opacity-60">{period.duration}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Current Period Display */}
        <div className="mb-16">
          <div
            className={`rounded-2xl p-8 mb-12 bg-gradient-to-br ${currentPeriod.color} text-white`}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <currentPeriod.icon className="w-12 h-12" />
                <div>
                  <h2 className="text-3xl font-bold khmer-text">
                    {currentPeriod.title}
                  </h2>
                  <p className="text-lg opacity-90">{currentPeriod.period}</p>
                  <p className="text-sm opacity-80">{currentPeriod.duration}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg opacity-90 khmer-text">
                  {currentPeriod.description}
                </p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {currentPeriod.events.map((event, index) => (
              <div
                key={index}
                className={`relative flex items-start space-x-6 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {/* Timeline Line */}
                {index < currentPeriod.events.length - 1 && (
                  <div
                    className={`absolute left-8 top-16 w-0.5 h-24 ${
                      darkMode ? "bg-gray-700" : "bg-gray-300"
                    }`}
                  />
                )}

                {/* Timeline Dot */}
                <div
                  className={`relative z-10 w-16 h-16 rounded-full bg-gradient-to-br ${currentPeriod.color} flex items-center justify-center text-white shadow-lg`}
                >
                  <event.icon className="w-8 h-8" />
                </div>

                {/* Event Content */}
                <div
                  className={`flex-1 p-6 rounded-xl ${
                    darkMode ? "bg-gray-800" : "bg-white"
                  } shadow-lg`}
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <span
                      className={`text-sm font-bold px-3 py-1 rounded-full bg-gradient-to-r ${currentPeriod.color} text-white`}
                    >
                      {event.year}
                    </span>
                  </div>
                  <h3
                    className={`text-xl font-bold mb-2 khmer-text ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {event.title}
                  </h3>
                  <p className="khmer-text">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rest of the component remains the same */}
        {/* Historical Figures, Call to Action, etc. */}
        
      </div>
    </div>
  );
};

export default History;