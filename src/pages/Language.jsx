/* eslint-disable no-unused-vars */
import React, { useContext, useState, useRef } from "react";
import { LanguageContext, ThemeContext } from "../App";
import { Volume2, BookOpen, Headphones, Mic, Play, Pause } from "lucide-react";

const Language = () => {
  const { t, language } = useContext(LanguageContext);
  const [selectedPhrase, setSelectedPhrase] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
    const { darkMode } = useContext(ThemeContext);
  const audioRef = useRef(null);

  const basicPhrases = [
    {
      khmer: "សួស្តី",
      english: "Hello",
      pronunciation: "Soo-sdey",
      category: language === "km" ? "សារពាំនាំ" : "Greetings",
      audio: "/audio/hello.mp3",
    },
    {
      khmer: "អរគុណ",
      english: "Thank you",
      pronunciation: "Or-kun",
      category: language === "km" ? "ការថ្លែងអំណរគុណ" : "Gratitude",
      audio: "/audio/thank-you.mp3",
    },
    {
      khmer: "សុំទោស",
      english: "Sorry",
      pronunciation: "Som-toss",
      category: language === "km" ? "ការសុំទោស" : "Apologies",
      audio: "/audio/sorry.mp3",
    },
    {
      khmer: "បាទ/ចាស",
      english: "Yes (formal)",
      pronunciation: "Baht/Jah",
      category: language === "km" ? "ការឆ្លើយ" : "Responses",
      audio: "/audio/yes.mp3",
    },
    {
      khmer: "ទេ",
      english: "No",
      pronunciation: "Dteh",
      category: language === "km" ? "ការឆ្លើយ" : "Responses",
      audio: "/audio/no.mp3",
    },
    {
      khmer: "តើអ្នកសុខសប្បាយទេ?",
      english: "How are you?",
      pronunciation: "Tae-neak-sok-sabay-dteh?",
      category: language === "km" ? "សារពាំនាំ" : "Greetings",
      audio: "/audio/how-are-you.mp3",
    },
    {
      khmer: "ខ្ញុំសុខសប្បាយ",
      english: "I am fine",
      pronunciation: "Knhom-sok-sabay",
      category: language === "km" ? "ការឆ្លើយ" : "Responses",
      audio: "/audio/i-am-fine.mp3",
    },
    {
      khmer: "ជួបអ្នកពេលក្រោយ",
      english: "See you later",
      pronunciation: "Chuop-neak-pel-krao-y",
      category: language === "km" ? "ការលាគ្នា" : "Farewells",
      audio: "/audio/see-you-later.mp3",
    },
    {
      khmer: "តើអ្នកឈ្មោះអ្វី?",
      english: "What is your name?",
      pronunciation: "Tae-neak-chmoh-avei?",
      category: language === "km" ? "ការសួរឈ្មោះ" : "Introductions",
      audio: "/audio/what-is-your-name.mp3",
    },
    {
      khmer: "ខ្ញុំឈ្មោះ...",
      english: "My name is...",
      pronunciation: "Knhom-chmoh...",
      category: language === "km" ? "ការណែនាំខ្លួន" : "Self-introduction",
      audio: "/audio/my-name-is.mp3",
    },
    {
      khmer: "តើនេះថ្លៃប៉ុន្មាន?",
      english: "How much is this?",
      pronunciation: "Tae-nih-tlai-bonman?",
      category: language === "km" ? "ការទិញទំនិញ" : "Shopping",
      audio: "/audio/how-much.mp3",
    },
    {
      khmer: "ខ្ញុំមិនយល់ទេ",
      english: "I don't understand",
      pronunciation: "Knhom-min-yul-dteh",
      category: language === "km" ? "ការសុំជំនួយ" : "Asking for help",
      audio: "/audio/i-dont-understand.mp3",
    },
  ];

  const learningResources = [
    {
      title: language === "km" ? "កម្មវិធីរៀនភាសាខ្មែរ" : "Khmer Learning Apps",
      description:
        language === "km"
          ? "កម្មវិធីដែលអាចជួយអ្នករៀនភាសាខ្មែរនៅផ្ទះ"
          : "Apps that can help you learn Khmer at home",
      icon: BookOpen,
      resources: [
        "Duolingo Khmer",
        "Ling Khmer",
        "Khmer Language App",
        "Learn Khmer Free",
      ],
    },
    {
      title: language === "km" ? "សំឡេងបញ្ចេញ" : "Pronunciation Guides",
      description:
        language === "km"
          ? "ឯកសារសំឡេងដើម្បីជួយក្នុងការបញ្ចេញសំឡេងត្រឹមត្រូវ"
          : "Audio resources to help with correct pronunciation",
      icon: Headphones,
      resources: [
        "YouTube Khmer Lessons",
        "Khmer Pronunciation Guide",
        "Audio Dictionary",
        "Native Speaker Videos",
      ],
    },
    {
      title: language === "km" ? "វគ្គសិក្សា" : "Online Courses",
      description:
        language === "km"
          ? "វគ្គសិក្សាអនឡាញសម្រាប់ការរៀនភាសាខ្មែរ"
          : "Online courses for learning Khmer language",
      icon: Mic,
      resources: [
        "Coursera Khmer",
        "Udemy Khmer Course",
        "Khmer Language School",
        "Private Tutors Online",
      ],
    },
  ];

  const playAudio = (audioFile) => {
    if (audioRef.current) {
      audioRef.current.src = audioFile;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleAudioEnd = () => {
    setIsPlaying(false);
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
            {t.languageTitle}
          </h1>
          <p
            className={`text-lg max-w-3xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {language === "km"
              ? "ស្វែងយល់អំពីភាសាខ្មែរ និងរៀនពាក្យពេញនិយម"
              : "Learn about Khmer language and popular phrases"}
          </p>
        </div>

        {/* Basic Phrases */}
        <div className="mb-16">
          <h2
            className={`text-3xl font-bold text-center mb-12 khmer-text ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {t.basicPhrases}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {basicPhrases.map((phrase, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  darkMode
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-white hover:bg-gray-50"
                } shadow-lg`}
                onClick={() => setSelectedPhrase(phrase)}
              >
                <div className="text-center">
                  <h3
                    className={`text-2xl font-bold mb-2 khmer-text ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {phrase.khmer}
                  </h3>
                  <p
                    className={`text-lg mb-2 ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {phrase.english}
                  </p>
                  <p
                    className={`text-sm mb-4 ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    [{phrase.pronunciation}]
                  </p>
                  <div className="flex items-center justify-center space-x-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        playAudio(phrase.audio);
                      }}
                      className="p-2 rounded-full bg-angkor-gold text-white hover:bg-yellow-600 transition-colors duration-200"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                    <span className="text-xs text-angkor-gold font-medium">
                      {phrase.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Resources */}
        <div className="mb-16">
          <h2
            className={`text-3xl font-bold text-center mb-12 khmer-text ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {t.learnKhmer}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {learningResources.map((resource, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl ${
                  darkMode ? "bg-gray-800" : "bg-white"
                } shadow-lg`}
              >
                <div className="text-center">
                  <resource.icon className="w-16 h-16 text-angkor-gold mx-auto mb-6" />
                  <h3
                    className={`text-xl font-bold mb-4 khmer-text ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {resource.title}
                  </h3>
                  <p
                    className={`mb-6 ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {resource.description}
                  </p>
                  <div className="space-y-2">
                    {resource.resources.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className={`px-3 py-2 rounded-lg text-sm ${
                          darkMode
                            ? "bg-gray-700 text-gray-300"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Khmer Alphabet */}
        <div className="mb-16">
          <h2
            className={`text-3xl font-bold text-center mb-12 khmer-text ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {language === "km" ? "អក្សរខ្មែរ" : "Khmer Alphabet"}
          </h2>

          <div
            className={`p-8 rounded-2xl ${
              darkMode ? "bg-gray-800" : "bg-white"
            } shadow-lg`}
          >
            <div className="grid grid-cols-5 md:grid-cols-10 gap-4">
              {[
                "ក",
                "ខ",
                "គ",
                "ឃ",
                "ង",
                "ច",
                "ឆ",
                "ជ",
                "ឈ",
                "ញ",
                "ដ",
                "ឋ",
                "ឌ",
                "ឍ",
                "ណ",
                "ត",
                "ថ",
                "ទ",
                "ធ",
                "ន",
                "ប",
                "ព",
                "ភ",
                "ម",
                "យ",
              ].map((consonant, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg text-center cursor-pointer transition-all duration-200 ${
                    darkMode
                      ? "bg-gray-700 hover:bg-angkor-gold"
                      : "bg-gray-100 hover:bg-angkor-gold"
                  } hover:text-white`}
                >
                  <div className="text-2xl font-bold mb-1">{consonant}</div>
                  <div className="text-xs">
                    {String.fromCharCode(65 + index)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cultural Context */}
        <div className="mb-16">
          <h2
            className={`text-3xl font-bold text-center mb-12 khmer-text ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {language === "km" ? "បរិបទវប្បធម៌" : "Cultural Context"}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div
              className={`p-8 rounded-2xl ${
                darkMode ? "bg-gray-800" : "bg-white"
              } shadow-lg`}
            >
              <h3
                className={`text-xl font-bold mb-4 khmer-text ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {language === "km" ? "ការគោរព" : "Respectful Speech"}
              </h3>
              <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                {language === "km"
                  ? 'នៅក្នុងវប្បធម៌ខ្មែរ ការប្រើប្រាស់ពាក្យគោរពគឺជារឿងសំខាន់។ ត្រូវប្រើប្រាស់ពាក្យ "លោក" ឬ "អ្នកស្រី" សម្រាប់អ្នកដែលមានអាយុច្រើនជាង'
                  : 'In Khmer culture, using respectful language is important. Use "Lok" (Mr.) or "Lok Srey" (Mrs.) for older people.'}
              </p>
            </div>

            <div
              className={`p-8 rounded-2xl ${
                darkMode ? "bg-gray-800" : "bg-white"
              } shadow-lg`}
            >
              <h3
                className={`text-xl font-bold mb-4 khmer-text ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {language === "km" ? "ទំនៀមទម្លាប់" : "Social Customs"}
              </h3>
              <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                {language === "km"
                  ? "ការសំពះជាវិធីគោរពពេលជួបគ្នា។ ត្រូវប្រើដៃទាំងពីរនៅពេលទទួលអ្វីម្នាក់"
                  : "The sampeah (prayer-like gesture) is a respectful greeting. Use both hands when receiving something."}
              </p>
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
              {language === "km" ? "ចង់អានបន្ថែម?" : "Want to Read More?"}
            </h3>
            <p
              className={`mb-6 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
            >
              {language === "km"
                ? "ស្វែងយល់បន្ថែមអំពីវប្បធម៌កម្ពុជាក្នុងប្លុករបស់យើង"
                : "Learn more about Cambodian culture in our blog"}
            </p>
            <a
              href="/blog"
              className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-angkor-gold to-temple-stone text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <BookOpen className="w-5 h-5" />
              <span className="khmer-text">{t.blog}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Audio element */}
      <audio ref={audioRef} onEnded={handleAudioEnd} className="hidden" />

      {/* Phrase Detail Modal */}
      {selectedPhrase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div
            className={`max-w-md w-full rounded-2xl p-8 ${
              darkMode ? "bg-gray-800" : "bg-white"
            } shadow-2xl`}
          >
            <div className="text-center">
              <h3
                className={`text-3xl font-bold mb-4 khmer-text ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {selectedPhrase.khmer}
              </h3>
              <p
                className={`text-xl mb-2 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {selectedPhrase.english}
              </p>
              <p
                className={`text-lg mb-6 ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                [{selectedPhrase.pronunciation}]
              </p>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => playAudio(selectedPhrase.audio)}
                  className="p-3 rounded-full bg-angkor-gold text-white hover:bg-yellow-600 transition-colors duration-200"
                >
                  <Volume2 className="w-6 h-6" />
                </button>
                <button
                  onClick={() => setSelectedPhrase(null)}
                  className={`px-6 py-3 rounded-lg ${
                    darkMode
                      ? "bg-gray-700 text-white"
                      : "bg-gray-200 text-gray-900"
                  }`}
                >
                  {language === "km" ? "បិទ" : "Close"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Language;
