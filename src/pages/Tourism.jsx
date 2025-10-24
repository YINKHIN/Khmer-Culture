/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { LanguageContext, ThemeContext } from "../App";
import {
  MapPin,
  Star,
  Clock,
  DollarSign,
  Camera,
  Navigation,
  Filter,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import AngkorWat from "../image/tourism/AngkorWat.webp";
import PhnomPenh from "../image/tourism/PhnomPenh.webp";
import SiemReap from "../image/tourism/SiemReap.jpg";
import Sihanoiklle from "../image/tourism/Sihanoukville.jpg";
import Krovanh from "../image/tourism/krovanh.jpg";
import TonleSap from "../image/tourism/TonleSap.jpg";


const Tourism = () => {
  const { t, language } = useContext(LanguageContext);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDestination, setSelectedDestination] = useState(null);
    const { darkMode } = useContext(ThemeContext);
    const navigate = useNavigate();

  const categories = [
    { id: "all", label: language === "km" ? "ទាំងអស់" : "All" },
    { id: "temples", label: language === "km" ? "ប្រាសាទ" : "Temples" },
    { id: "nature", label: language === "km" ? "ធម្មជាតិ" : "Nature" },
    { id: "beaches", label: language === "km" ? "ឆ្នេរសមុទ្រ" : "Beaches" },
    { id: "culture", label: language === "km" ? "វប្បធម៌" : "Culture" },
  ];

  const destinations = [
    {
      id: 1,
      name: t.angkorWat,
      category: "temples",
      location: "Siem Reap",
      rating: 5,
      price: language === "km" ? "៣៧ ដុល្លារ" : "$37",
      image: AngkorWat,
      description: t.angkorDescription,
      highlights: [
        language === "km" ? "ប្រាសាទអង្គរវត្ត" : "Angkor Wat Temple",
        language === "km" ? "ប្រាសាទបាយ័ន" : "Bayon Temple",
        language === "km" ? "ប្រាសាទតាព្រហ្ម" : "Ta Prohm Temple",
        language === "km" ? "ព្រះអាទិត្យរៀប" : "Sunrise viewing",
      ],
      bestTime: language === "km" ? "វេលាព្រឹក" : "Early morning",
      duration: language === "km" ? "១-២ ថ្ងៃ" : "1-2 days",
      coordinates: { lat: 13.4125, lng: 103.867 },
    },
    {
      id: 2,
      name: language === "km" ? "ព្រះធានីភ្នំពេញ" : "Phnom Penh Capital",
      category: "culture",
      location: "Phnom Penh",
      rating: 4,
      price: language === "km" ? "ឥតគិតថ្លៃ" : "Free",
      image: PhnomPenh,
      description:
        language === "km"
          ? "រាជធានីភ្នំពេញជាទីក្រុងដ៏ធំនៅកម្ពុជា មានប្រវត្តិសាស្ត្រវែងឆ្ងាយ"
          : "Phnom Penh is the largest city in Cambodia with a rich history",
      highlights: [
        language === "km" ? "ព្រះបរមរាជវាំង" : "Royal Palace",
        language === "km" ? "វត្តព្រះកែវ" : "Silver Pagoda",
        language === "km" ? "វិថីធម្មជាតិ" : "Riverside",
        language === "km" ? "ផ្សារធំថ្មី" : "Central Market",
      ],
      bestTime: language === "km" ? "ពេលល្ងាច" : "Evening",
      duration: language === "km" ? "២-៣ ថ្ងៃ" : "2-3 days",
      coordinates: { lat: 11.5449, lng: 104.8922 },
    },
    {
      id: 3,
      name: language === "km" ? "សៀមរាប" : "Siem Reap",
      category: "culture",
      location: "Siem Reap Province",
      rating: 5,
      price: language === "km" ? "ចាប់ពី $៥០" : "From $50",
      image: SiemReap,
      description:
        language === "km"
          ? "សៀមរាបជាទីក្រុងទេសចរណ៍ដ៏ល្បីនៅកម្ពុជា ជាទីតាំងនៃប្រាសាទអង្គរ"
          : "Siem Reap is a famous tourist city in Cambodia, home to Angkor temples",
      highlights: [
        language === "km" ? "ប្រាសាទអង្គរ" : "Angkor Archaeological Park",
        language === "km" ? "ផ្សាររាត្រី" : "Night Market",
        language === "km" ? "រាំរបាំអប្សារា" : "Apsara Dance Show",
        language === "km" ? "ទស្សនាភូមិវប្បធម៌" : "Cultural Village",
      ],
      bestTime: language === "km" ? "វេលាព្រឹកនិងល្ងាច" : "Morning and evening",
      duration: language === "km" ? "៣-៤ ថ្ងៃ" : "3-4 days",
      coordinates: { lat: 13.3618, lng: 103.8606 },
    },
    {
      id: 4,
      name: language === "km" ? "ឆ្នេរខេត្តព្រះសីហនុ" : "Sihanoukville Beaches",
      category: "beaches",
      location: "Sihanoukville",
      rating: 4,
      price: language === "km" ? "ឥតគិតថ្លៃ" : "Free",
      image: Sihanoiklle,
      description:
        language === "km"
          ? "ឆ្នេរសៀមរាបមានឆ្នេរសមុទ្រដ៏ស្រស់ស្អាតជាច្រើន"
          : "Sihanoukville has many beautiful beaches and islands",
      highlights: [
        language === "km" ? "ឆ្នេរអូរឈើទាល" : "Ochheuteal Beach",
        language === "km" ? "ឆ្នេរស្រីលanka" : "Serendipity Beach",
        language === "km" ? "កោះរ៉ុង" : "Koh Rong Island",
        language === "km" ? "កោះរ៉ុងសន្លឹម" : "Koh Rong Sanloem",
      ],
      bestTime: language === "km" ? "រដូវប្រាំង" : "Dry season",
      duration: language === "km" ? "២-៤ ថ្ងៃ" : "2-4 days",
      coordinates: { lat: 10.6093, lng: 103.5296 },
    },
    {
      id: 5,
      name: language === "km" ? "ជួរភ្នំក្រវាញ" : "Cardamom Mountains",
      category: "nature",
      location: "Southwest Cambodia",
      rating: 4,
      price: language === "km" ? "ចាប់ពី $២០" : "From $20",
      image: Krovanh,
      description:
        language === "km"
          ? "ជួរភ្នំក្រវាញជាតំបន់ធម្មជាតិដ៏ធំនៅកម្ពុជា"
          : "Cardamom Mountains are a large natural area in Cambodia",
      highlights: [
        language === "km" ? "ដើរភ្នំ" : "Hiking",
        language === "km" ? "មើលសត្វព្រៃ" : "Wildlife watching",
        language === "km" ? "ទឹកធ្លាក់" : "Waterfalls",
        language === "km" ? "ជីវភាពជនជាតិដើម" : "Indigenous culture",
      ],
      bestTime: language === "km" ? "វេលាព្រឹក" : "Early morning",
      duration: language === "km" ? "២-៣ ថ្ងៃ" : "2-3 days",
      coordinates: { lat: 12.0, lng: 103.0 },
    },
    {
      id: 6,
      name: language === "km" ? "បឹងទន្លេសាប" : "Tonle Sap Lake",
      category: "nature",
      location: "Central Cambodia",
      rating: 4,
      price: language === "km" ? "ចាប់ពី $១៥" : "From $15",
      image: TonleSap,
      description:
        language === "km"
          ? "បឹងទន្លេសាបជាបឹងដ៏ធំនៅអាស៊ីអាគ្នេយ៍"
          : "Tonle Sap is the largest lake in Southeast Asia",
      highlights: [
        language === "km" ? "ទស្សនាផ្ទះលើទឹក" : "Floating villages",
        language === "km" ? "បក្សីទេសចរណ៍" : "Bird watching",
        language === "km" ? "ត្រីព្រៃ" : "Freshwater fish",
        language === "km" ? "ជីវិតជនបទ" : "Rural life",
      ],
      bestTime: language === "km" ? "វេលាព្រឹក" : "Morning",
      duration: language === "km" ? "១ ថ្ងៃ" : "1 day",
      coordinates: { lat: 12.8797, lng: 104.5283 },
    },
  ];

  const filteredDestinations = destinations.filter(
    (dest) => selectedCategory === "all" || dest.category === selectedCategory
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
            {t.tourismTitle}
          </h1>
          <p
            className={`text-lg max-w-3xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {language === "km"
              ? "ស្វែងយល់អំពីកន្លែងទេសចរណ៍ល្បីៗនៃកម្ពុជា"
              : "Discover the famous tourist destinations of Cambodia"}
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

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredDestinations.map((destination) => (
            <div
              key={destination.id}
              className={`group rounded-2xl overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
              // onClick={() => setSelectedDestination(destination)}
              onClick={() => navigate(`/tourism/${destination.id}`)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4">
                  <div className="flex items-center space-x-1 bg-black/50 text-white px-2 py-1 rounded-lg text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>{destination.rating}</span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold mb-1 khmer-text">
                    {destination.name}
                  </h3>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{destination.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="w-4 h-4" />
                      <span>{destination.price}</span>
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
                  {destination.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="w-4 h-4 text-angkor-gold" />
                    <span>{destination.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Camera className="w-4 h-4 text-angkor-gold" />
                    <span>{destination.bestTime}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {destination.highlights
                    .slice(0, 3)
                    .map((highlight, index) => (
                      <span
                        key={index}
                        className="bg-angkor-gold/10 text-angkor-gold px-2 py-1 rounded-lg text-xs"
                      >
                        {highlight}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Travel Tips */}
        <div className="mb-16">
          <h2
            className={`text-3xl font-bold text-center mb-12 khmer-text ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {language === "km" ? "គន្លឺះក្នុងការធ្វើដំណើរ" : "Travel Tips"}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: language === "km" ? "រដូវល្អបំផុត" : "Best Season",
                content:
                  language === "km"
                    ? "រដូវប្រាំងពីខែវិច្ឆិកាដល់មេសាជាពេលវេលាល្អបំផុត"
                    : "Dry season from November to April is the best time to visit",
                icon: Clock,
              },
              {
                title: language === "km" ? "ការធ្វើដំណើរ" : "Transportation",
                content:
                  language === "km"
                    ? "ប្រើប្រាស់ទូរករទេសចរណ៍ ឬរថយន្តតាក់ស៊ីសម្រាប់ការធ្វើដំណើរ"
                    : "Use tourist buses or tuk-tuks for transportation",
                icon: Navigation,
              },
              {
                title: language === "km" ? "ថ្លៃដើម" : "Budget",
                content:
                  language === "km"
                    ? "កម្ពុជាជាទីក្រុងដែលមានតម្លៃថោកសម្រាប់អ្នកធ្វើដំណើរ"
                    : "Cambodia is an affordable destination for travelers",
                icon: DollarSign,
              },
            ].map((tip, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl ${
                  darkMode ? "bg-gray-800" : "bg-white"
                } shadow-lg text-center`}
              >
                <tip.icon className="w-12 h-12 text-angkor-gold mx-auto mb-4" />
                <h3
                  className={`text-lg font-bold mb-2 khmer-text ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {tip.title}
                </h3>
                <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                  {tip.content}
                </p>
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
              {language === "km"
                ? "ចាប់ផ្តើមដំណើរកំសាន្តរបស់អ្នក"
                : "Start Your Journey"}
            </h3>
            <p
              className={`mb-6 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
            >
              {language === "km"
                ? "រៀបចំដំណើរកំសាន្តរបស់អ្នកឥឡូវនេះ"
                : "Plan your trip to Cambodia now"}
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-angkor-gold to-temple-stone text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Navigation className="w-5 h-5" />
              <span className="khmer-text">{t.contact}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tourism;
