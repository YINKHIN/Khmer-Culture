/* eslint-disable react-refresh/only-export-components */
import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import History from './pages/History';
import Cuisine from './pages/Cuisine';
import Clothing from './pages/Clothing';
import Festivals from './pages/Festivals';
import Tourism from './pages/Tourism';
import Arts from './pages/Arts';
import Language from './pages/Language';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import DetailedBlog from './pages/DetailedBlog';
import DetailedTourism from './pages/DetailedTourism';

// Create contexts for theme and language
export const ThemeContext = createContext();
export const LanguageContext = createContext();

// Translation data
export const translations = {
  km: {
    // Navigation
    home: "ទំព័រដើម",
    history: "ប្រវត្តិសាស្ត្រ",
    cuisine: "ម្ហូបប្រពៃណី",
    clothing: "សំពត់ប្រពៃណី",
    festivals: "បុណ្យនិងការប្រារព្ធ",
    tourism: "ទេសចរណ៍",
    arts: "សិល្បៈនិងដៃដុះ",
    language: "ភាសានិងការសិក្សា",
    blog: "ប្លុកវប្បធម៌",
    contact: "ទំនាក់ទំនង",
    
    // Common
    darkMode: "របៀបយប់",
    lightMode: "របៀបថ្ងៃ",
    languageSwitch: "ភាសា",
    khmer: "ខ្មែរ",
    english: "អង់គ្លេស",
    search: "ស្វែងរក",
    readMore: "អានបន្ថែម",
    learnMore: "ស្វែងយល់បន្ថែម",
    
    // Hero section
    heroTitle: "ស្វែងរកវប្បធម៌កម្ពុជា",
    heroSubtitle: "ចាប់ផ្តើមដំណើរកំសាន្តក្នុងពិភពនៃបេតិកភណ្ឌវប្បធម៌ដ៏សម្បូរបែបរបស់កម្ពុជា",
    exploreNow: "ចាប់ផ្តើមស្វែងរក",
    
    // Footer
    copyright: "© ២០២៥ វប្បធម៌កម្ពុជា។ រក្សាសិទ្ធិគ្រប់យ៉ាង។",
    
    // Cultural descriptions
    cambodiaCulture: "កម្ពុជាជាប្រទេសដែលមានប្រវត្តិសាស្ត្រវែងឆ្ងាយ និងវប្បធម៌ដ៏សម្បូរបែប។ ពីស្ថាបត្យកម្មអង្គរដ៏អស្ចារ្យ រហូតដល់ម្ហូបប្រពៃណីដ៏ឈ្ងុយឆ្ងាញ់ កម្ពុជាមានអ្វីៗជាច្រើនដែលត្រូវបានស្វែងរក។",
    
    // History page
    historyTitle: "ប្រវត្តិសាស្ត្រកម្ពុជា",
    ancientKingdoms: "អាណាចក្របុរាណ",
    khmerEmpire: "ចក្រភពខ្មែរ",
    modernEra: "សម័យទំនើប",
    
    // Cuisine page
    cuisineTitle: "ម្ហូបប្រពៃណីខ្មែរ",
    popularDishes: "មុខម្ហូបល្បីៗ",
    traditionalRecipes: "របៀបធ្វើម្ហូបប្រពៃណី",
    appetizers: "ម្ហូបរសជាតិ",
    mainCourses: "ម្ហូបដើម",
    desserts: "បង្អែម",
    drinks: "ភេសជ្ជៈ",
    
    // Clothing page
    clothingTitle: "សំពត់ប្រពៃណីខ្មែរ",
    traditionalAttire: "ឯកសណ្ឋានប្រពៃណី",
    sampot: "សំពត់",
    krama: "ក្រម៉ា",
    culturalSignificance: "សារប្រពៃណី",
    
    // Festivals page
    festivalsTitle: "បុណ្យនិងការប្រារព្ធប្រពៃណី",
    khmerNewYear: "បុណ្យចូលឆ្នាំថ្មីប្រពៃណីខ្មែរ",
    waterFestival: "បុណ្យទឹក",
    pchumBen: "បុណ្យព្រះនាង",
    
    // Tourism page
    tourismTitle: "កន្លែងទេសចរណ៍ល្បីៗ",
    angkorWat: "ប្រាសាទអង្គរវត្ត",
    phnomPenh: "រាជធានីភ្នំពេញ",
    siemReap: "សៀមរាប",
    
    // Arts page
    artsTitle: "សិល្បៈនិងដៃដុះខ្មែរ",
    traditionalArts: "សិល្បៈប្រពៃណី",
    handicrafts: "ផលិតផលដៃដុះ",
    artisans: "អ្នកច្នៃប្រឌិត",
    
    // Language page
    languageTitle: "ភាសាខ្មែរ",
    basicPhrases: "ពាក្យពេញនិយម",
    pronunciation: "ការបញ្ចេញសំឡេង",
    learnKhmer: "សិក្សាភាសាខ្មែរ",
    
    // Blog page
    blogTitle: "អត្ថបទវប្បធម៌",
    recentArticles: "អត្ថបទថ្មីៗ",
    culturalNews: "ព័ត៌មានវប្បធម៌",
    
    // Contact page
    contactTitle: "ទំនាក់ទំនងយើងខ្ញុំ",
    name: "ឈ្មោះ",
    email: "អ៊ីមែល",
    message: "សារ",
    sendMessage: "ផ្ញើសារ",
    
    // Cultural content
    angkorDescription: "ប្រាសាទអង្គរវត្តជាអាណាចក្រដ៏ធំបំផុតនៅលើពិភពលោក និងជាបេតិកភណ្ឌពិភពលោករបស់ UNESCO។",
    amokDescription: "អាម៉ុកជាម្ហូបប្រពៃណីដ៏ពេញនិយម ធ្វើពីត្រីដែលចម្អិនជាមួយទឹកដោះគោកូរជាមួយគ្រឿងទេសខ្មែរ។",
    khmerNewYearDescription: "បុណ្យចូលឆ្នាំខ្មែរជាពិធីបុណ្យប្រពៃណីដ៏សំខាន់បំផុតនៅកម្ពុជា ដែលប្រារព្ធឡើងក្នុងខែមេសា។"
  },
  en: {
    // Navigation
    home: "Home",
    history: "History",
    cuisine: "Cuisine",
    clothing: "Traditional Clothing",
    festivals: "Festivals",
    tourism: "Tourism",
    arts: "Arts & Crafts",
    language: "Language",
    blog: "Cultural Blog",
    contact: "Contact",
    
    // Common
    darkMode: "Dark Mode",
    lightMode: "Light Mode",
    languageSwitch: "Language",
    khmer: "Khmer",
    english: "English",
    search: "Search",
    readMore: "Read More",
    learnMore: "Learn More",
    
    // Hero section
    heroTitle: "Discover Cambodian Culture",
    heroSubtitle: "Embark on a journey through the rich cultural heritage of Cambodia",
    exploreNow: "Explore Now",
    
    // Footer
    copyright: "© 2025 Cambodian Culture. All rights reserved.",
    
    // Cultural descriptions
    cambodiaCulture: "Cambodia is a country with a long history and rich culture. From the magnificent Angkor architecture to delicious traditional cuisine, Cambodia has much to discover.",
    
    // History page
    historyTitle: "Cambodian History",
    ancientKingdoms: "Ancient Kingdoms",
    khmerEmpire: "Khmer Empire",
    modernEra: "Modern Era",
    
    // Cuisine page
    cuisineTitle: "Traditional Khmer Cuisine",
    popularDishes: "Popular Dishes",
    traditionalRecipes: "Traditional Recipes",
    appetizers: "Appetizers",
    mainCourses: "Main Courses",
    desserts: "Desserts",
    drinks: "Drinks",
    
    // Clothing page
    clothingTitle: "Traditional Khmer Clothing",
    traditionalAttire: "Traditional Attire",
    sampot: "Sampot",
    krama: "Krama",
    culturalSignificance: "Cultural Significance",
    
    // Festivals page
    festivalsTitle: "Traditional Festivals & Celebrations",
    khmerNewYear: "Khmer New Year",
    waterFestival: "Water Festival",
    pchumBen: "Pchum Ben",
    
    // Tourism page
    tourismTitle: "Popular Tourist Destinations",
    angkorWat: "Angkor Wat",
    phnomPenh: "Phnom Penh",
    siemReap: "Siem Reap",
    
    // Arts page
    artsTitle: "Khmer Arts & Crafts",
    traditionalArts: "Traditional Arts",
    handicrafts: "Handicrafts",
    artisans: "Artisans",
    
    // Language page
    languageTitle: "Khmer Language",
    basicPhrases: "Basic Phrases",
    pronunciation: "Pronunciation",
    learnKhmer: "Learn Khmer",
    
    // Blog page
    blogTitle: "Cultural Articles",
    recentArticles: "Recent Articles",
    culturalNews: "Cultural News",
    
    // Contact page
    contactTitle: "Contact Us",
    name: "Name",
    email: "Email",
    message: "Message",
    sendMessage: "Send Message",
    
    // Cultural content
    angkorDescription: "Angkor Wat is the largest religious monument in the world and a UNESCO World Heritage site.",
    amokDescription: "Amok is a popular traditional dish made from fish cooked in coconut milk with Khmer spices.",
    khmerNewYearDescription: "Khmer New Year is the most important traditional festival in Cambodia, celebrated in April."
  }
};

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('km');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const savedLanguage = localStorage.getItem('language');
    
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    }
    
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleTheme = () => setDarkMode(!darkMode);
  const toggleLanguage = () => setLanguage(language === 'km' ? 'en' : 'km');

  const t = translations[language];

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
        <Router>
          <div className={`min-h-screen transition-colors duration-300 ${
            darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
          }`}>
            <Navbar />
            <main className="pt-20">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/history" element={<History />} />
                <Route path="/cuisine" element={<Cuisine />} />
                <Route path="/clothing" element={<Clothing />} />
                <Route path="/festivals" element={<Festivals />} />
                <Route path="/tourism" element={<Tourism />} />
                <Route path="/tourism/:id" element={<DetailedTourism />} />
                <Route path="/arts" element={<Arts />} />
                <Route path="/language" element={<Language />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<DetailedBlog />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;