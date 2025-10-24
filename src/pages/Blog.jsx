import React, { useContext, useState } from "react";
import { LanguageContext, ThemeContext } from "../App";
import { Search, Calendar, User, Tag, Clock, ArrowRight } from "lucide-react";
import Hist from "../image/bon/chakro.jpg";
import Omtuk from "../image/bon/Tuk ngor 1.jpg";
import Amok from "../image/bon/amok.png";
import NewYearKh from "../image/bon/ចូលឆ្នាំ.jpg";
import AngKor from "../image/bon/visit.jpg";
import Apsara from "../image/bon/apsara.jpg";
import { Link } from "react-router-dom";

const Blog = () => {
  const { t, language } = useContext(LanguageContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { darkMode } = useContext(ThemeContext);

  const categories = [
    { id: "all", label: language === "km" ? "ទាំងអស់" : "All" },
    { id: "culture", label: language === "km" ? "វប្បធម៌" : "Culture" },
    { id: "history", label: language === "km" ? "ប្រវត្តិ" : "History" },
    { id: "food", label: language === "km" ? "ម្ហូប" : "Food" },
    { id: "travel", label: language === "km" ? "ការធ្វើដំណើរ" : "Travel" },
    { id: "events", label: language === "km" ? "ព្រឹត្តិការណ៍" : "Events" },
  ];

  const articles = [
    {
      id: 1,
      title:
        language === "km"
          ? "បុណ្យចូលឆ្នាំខ្មែរ៖ ប្រពៃណីនិងអត្ថន័យ"
          : "Khmer New Year: Traditions and Meanings",
      category: "culture",
      author: "អ្នកនិពន្ធ",
      date: "2025-04-15",
      readTime: language === "km" ? "៥ នាទី" : "5 min read",
      image: `${NewYearKh}`,
      excerpt:
        language === "km"
          ? "បុណ្យចូលឆ្នាំខ្មែរជាពិធីបុណ្យប្រពៃណីដ៏សំខាន់បំផុតនៅកម្ពុជា..."
          : "Khmer New Year is the most important traditional festival in Cambodia...",
      content:
        language === "km"
          ? "បុណ្យចូលឆ្នាំខ្មែរត្រូវបានប្រារព្ធឡើងក្នុងខែមេសា ជារៀងរាល់ឆ្នាំ..."
          : "Khmer New Year is celebrated in April every year...",
    },
    {
      id: 2,
      title:
        language === "km"
          ? "សិល្បៈអប្សារា៖ កេរ្តិ៍ដំណែលពីអង្គរ"
          : "Apsara Dance: Heritage from Angkor",
      category: "culture",
      author: "អ្នកសិល្បៈ",
      date: "2025-04-10",
      readTime: language === "km" ? "៧ នាទី" : "7 min read",
      image: `${Apsara}`,
      excerpt:
        language === "km"
          ? "របាំអប្សារាជាសិល្បៈដ៏ល្អឯកដែលបានរក្សាពីសម័យអង្គរ..."
          : "Apsara dance is an exquisite art form preserved from the Angkor era...",
      content:
        language === "km"
          ? "របាំអប្សារាមានប្រវត្តិយូរលង់ចាប់ពីសម័យអង្គរ..."
          : "Apsara dance has a long history dating back to the Angkor era...",
    },
    {
      id: 3,
      title:
        language === "km"
          ? "ម្ហូបប្រពៃណីខ្មែរ៖ អាម៉ុកនិងលក់សាច់បំពង"
          : "Traditional Khmer Cuisine: Amok and Lok Lak",
      category: "food",
      author: "អ្នកចុងភៅ",
      date: "2025-04-05",
      readTime: language === "km" ? "៦ នាទី" : "6 min read",
      image: `${Amok}`,
      excerpt:
        language === "km"
          ? "ម្ហូបប្រពៃណីខ្មែរមានរសជាតិឈ្ងុយឆ្ងាញ់និងគ្រឿងទេសជាច្រើន..."
          : "Traditional Khmer cuisine has delicious flavors and many spices...",
      content:
        language === "km"
          ? "អាម៉ុកនិងលក់សាច់បំពងជាម្ហូបដ៏ពេញនិយមនៅកម្ពុជា..."
          : "Amok and Lok Lak are popular dishes in Cambodia...",
    },
    {
      id: 4,
      title:
        language === "km"
          ? "ដំណើរកំសាន្តទៅប្រាសាទកាន់អង្គរវត្ត"
          : "Journey to Angkor Wat",
      category: "travel",
      author: "អ្នកធ្វើដំណើរ",
      date: "2025-03-28",
      readTime: language === "km" ? "៨ នាទី" : "8 min read",
      image: `${AngKor}`,
      excerpt:
        language === "km"
          ? "អង្គរវត្តជាប្រាសាទដ៏ល្បីល្បាញនៅលើពិភពលោក..."
          : "Angkor Wat is the most famous temple in the world...",
      content:
        language === "km"
          ? "ការទៅលេងអង្គរវត្តជាបទពិសោធន៍ដ៏អស្ចារ្យ..."
          : "Visiting Angkor Wat is an amazing experience...",
    },
    {
      id: 5,
      title:
        language === "km"
          ? "ប្រវត្តិចក្រភពខ្មែរ"
          : "History of the Khmer Empire",
      category: "history",
      author: "អ្នកប្រវត្តិសាស្ត្រ",
      date: "2025-03-20",
      readTime: language === "km" ? "១០ នាទី" : "10 min read",
      image: `${Hist}`,
      excerpt:
        language === "km"
          ? "ចក្រភពខ្មែរជាអាណាចក្រដ៏ធំនៅអាស៊ីអាគ្នេយ៍..."
          : "The Khmer Empire was a great kingdom in Southeast Asia...",
      content:
        language === "km"
          ? "ចក្រភពខ្មែរបានកាន់កាប់ផ្ទៃដីធំជាងគេ..."
          : "The Khmer Empire controlled the largest territory...",
    },
    {
      id: 6,
      title: language === "km" ? "​ពិធីបុណ្យ​អុំទូក" : "Water Festival ",
      category: "events",
      author: "អ្នករៀបចំ",
      date: "2025-03-15",
      readTime: language === "km" ? "៤ នាទី" : "4 min read",
      image: `${Omtuk}`,
      excerpt:
        language === "km"
          ? "ព្រះរាជពិធីបុណ្យ អុំទូក បណ្តែតប្រទីប និងសំពះព្រះខែ អកអំបុក តែងតែប្រារព្ធក្នុងរយៈពេល៣ថ្ងៃ គឺពីថ្ងៃ១៤កើត ១៥កើត និងថ្ងៃ១រោច ខែកត្តិក ..."
          : "The Royal Festival of Water Rafting, Floating Boats, and Moon Worship, Ak Ambok, is always celebrated for 3 days, from the 14th and 15th of the lunar month, and the 1st of the lunar month, Kathik....",
      content:
        language === "km"
          ? "បុណ្យទឹកមានការប្រណាំងទូកនិងល្បែងទឹក..."
          : "Water Festival features boat races and water games...",
    },
  ];

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
            {t.blogTitle}
          </h1>
          <p
            className={`text-lg max-w-3xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {language === "km"
              ? "អានអត្ថបទអំពីវប្បធម៌កម្ពុជា ប្រវត្តិសាស្ត្រ និងព្រឹត្តិការណ៍ថ្មីៗ"
              : "Read articles about Cambodian culture, history, and recent events"}
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search Bar */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder={
                  language === "km" ? "ស្វែងរកអត្ថបទ..." : "Search articles..."
                }
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 transition-colors duration-200 ${
                  darkMode
                    ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-angkor-gold"
                    : "bg-white border-gray-200 text-gray-900 placeholder-gray-500 focus:border-angkor-gold"
                }`}
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 ${
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
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className={`group rounded-2xl overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-angkor-gold text-white px-3 py-1 rounded-full text-sm font-bold">
                    {
                      categories.find((cat) => cat.id === article.category)
                        ?.label
                    }
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold mb-2 khmer-text line-clamp-2">
                    {article.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-4 mb-3 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <p
                  className={`text-sm mb-4 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <Link
                    to={`/blog/${article.id}`}
                    className="flex items-center space-x-2 text-angkor-gold hover:text-yellow-600 font-medium transition-colors duration-200"
                  >
                    <span>{language === "km" ? "អានបន្ថែម" : "Read More"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <div className="flex items-center space-x-1">
                    <Tag className="w-4 h-4 text-gray-400" />
                    <span className="text-xs text-gray-500">
                      {article.category}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-16">
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3
              className={`text-xl font-bold mb-2 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {language === "km" ? "មិនមានអត្ថបទ" : "No Articles Found"}
            </h3>
            <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
              {language === "km"
                ? "មិនមានអត្ថបទដែលត្រូវនឹងការស្វែងរករបស់អ្នក"
                : "No articles found matching your search"}
            </p>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mb-16">
          <div
            className={`p-8 rounded-2xl text-center ${
              darkMode ? "bg-gray-800" : "bg-white"
            } shadow-lg`}
          >
            <h3
              className={`text-2xl font-bold mb-4 khmer-text ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {language === "km" ? "បញ្ជាក់ព័ត៌មានថ្មីៗ" : "Stay Updated"}
            </h3>
            <p
              className={`mb-6 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
            >
              {language === "km"
                ? "ទទួលបានអត្ថបទថ្មីៗនិងព័ត៌មានវប្បធម៌ខ្មែរដោយឥតគិតថ្លៃ"
                : "Get new articles and Cambodian culture news for free"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={
                  language === "km" ? "អ៊ីមែលរបស់អ្នក" : "Your email"
                }
                className={`flex-1 px-4 py-3 rounded-lg border-2 ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    : "bg-white border-gray-200 text-gray-900 placeholder-gray-500"
                }`}
              />
              <button className="px-6 py-3 bg-gradient-to-r from-angkor-gold to-temple-stone text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105">
                {language === "km" ? "ចុះឈ្មោះ" : "Subscribe"}
              </button>
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
              {language === "km" ? "មានសំណួរ?" : "Have Questions?"}
            </h3>
            <p
              className={`mb-6 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
            >
              {language === "km"
                ? "ទាក់ទងមកយើងខ្ញុំសម្រាប់ព័ត៌មានបន្ថែម"
                : "Contact us for more information"}
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-angkor-gold to-temple-stone text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <User className="w-5 h-5" />
              <span className="khmer-text">{t.contact}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
