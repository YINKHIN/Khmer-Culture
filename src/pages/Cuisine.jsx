import React, { useContext, useState } from "react";
import { LanguageContext, ThemeContext } from "../App";
import Bb from "../image/ម្ហូប/បបរ.jpg"
import Bang from "../image/ម្ហូប/ប៉ាង.jpg"
import Man from "../image/ម្ហូប/មាន.jpg"
import Amok from "../image/ម្ហូប/អាមុក.jpg"
import {
  Search,
  Filter,
  Clock,
  Users,
  Star,
  ChefHat,
  Utensils,
  Flame,
  Leaf,
  Fish,
  ReceiptCent,
  Heart,
  Share2,
  Bookmark,
  Timer,
  User,
  Award,
  Calendar,
} from "lucide-react";

const Cuisine = () => {
  const { t, language } = useContext(LanguageContext);
  const [searchTerm, setSearchTerm] = useState("");
  const { darkMode } = useContext(ThemeContext);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [favorites, setFavorites] = useState(new Set());
  const [sortBy, setSortBy] = useState("popular");

  const categories = [
    { id: "all", label: language === "km" ? "ទាំងអស់" : "All", icon: Utensils, count: 12 },
    { id: "appetizers", label: t.appetizers, icon: Leaf, count: 3 },
    { id: "main-courses", label: t.mainCourses, icon: ChefHat, count: 6 },
    { id: "desserts", label: t.desserts, icon: ReceiptCent, count: 2 },
    { id: "drinks", label: t.drinks, icon: Fish, count: 1 },
    { id: "street-food", label: language === "km" ? "ម្ហូបតាមផ្លូវ" : "Street Food", icon: Flame, count: 4 },
  ];

  const sortOptions = [
    { id: "popular", label: language === "km" ? "ពេញនិយម" : "Popular" },
    { id: "time", label: language === "km" ? "ពេលវេលា" : "Cooking Time" },
    { id: "difficulty", label: language === "km" ? "កម្រិត" : "Difficulty" },
    { id: "rating", label: language === "km" ? "ការវាយតម្លៃ" : "Rating" },
  ];

  const recipes = [
    {
      id: 1,
      name: language === "km" ? "អាម៉ុកត្រី" : "Fish Amok",
      khmerName: "អាម៉ុកត្រី",
      category: "main-courses",
      image:`${Amok}`,
      traditionalImage:`${Amok}`,
      rating: 4.8,
      prepTime: language === "km" ? "៤៥ នាទី" : "45 min",
      cookTime: language === "km" ? "៣០ នាទី" : "30 min",
      totalTime: language === "km" ? "១ ម៉ោង ១៥ នាទី" : "1 hour 15 min",
      servings: 4,
      difficulty: language === "km" ? "មធ្យម" : "Medium",
      spiceLevel: 2,
      calories: 320,
      region: language === "km" ? "តំបន់អង្គរ" : "Angkor Region",
      history: language === "km" 
        ? "អាម៉ុកគឺជាម្ហូបបុរាណដែលមានអាយុកាលជាង ១០០០ ឆ្នាំ មកពីសម័យអាណាចក្រខ្មែរ។ វាត្រូវបានធ្វើឡើងជាប្រពៃណីនៅក្នុងស្លឹកត្នោត និងមានរសជាតិដ៏ប្លែកពីក្រេមសាច់ត្រី និងគ្រឿងទេស។"
        : "Amok is an ancient dish dating back over 1000 years from the Khmer Empire era. Traditionally steamed in banana leaves, it has a unique flavor from fish and aromatic spices.",
      description: language === "km"
        ? "អាម៉ុកជាម្ហូបប្រពៃណីដ៏ពេញនិយម ធ្វើពីត្រីដែលចម្អិនជាមួយទឹកដោះគោកូរជាមួយគ្រឿងទេសខ្មែរ ហើយចម្អិនក្នុងស្លឹកត្នោត"
        : "Amok is a popular traditional dish made from fish cooked in coconut milk with Khmer spices, traditionally steamed in banana leaves",
      ingredients: [
        "500g fish fillet (catfish or snakehead)",
        "200ml coconut milk",
        "2 tbsp fish sauce",
        "1 tbsp palm sugar",
        "2 eggs",
        "100g noni leaves (or spinach)",
        "3 cloves garlic",
        "3 shallots",
        "2 lemongrass stalks",
        "3 dried red chilies",
        "1 tsp turmeric",
        "1 tsp galangal",
        "1 tsp kaffir lime zest",
        "Banana leaves for wrapping",
      ],
      instructions: [
        "Grind all spices (garlic, shallots, lemongrass, chilies, turmeric, galangal, kaffir lime) into a smooth kroeung paste",
        "Cut fish into bite-sized pieces and mix with kroeung paste, marinate for 30 minutes",
        "Heat coconut milk in a pan until it starts to simmer",
        "Add marinated fish and cook gently until the fish is cooked through",
        "Beat eggs and slowly incorporate into the mixture, stirring constantly",
        "Add noni leaves and season with fish sauce and palm sugar",
        "Wrap the mixture in banana leaves and steam for 15-20 minutes",
        "Serve hot with jasmine rice",
      ],
      tips: [
        language === "km" ? "ប្រើត្រីស្រស់សម្រាប់រសជាតិល្អបំផុត" : "Use fresh fish for best flavor",
        language === "km" ? "កុំធ្វើឲ្យក្រេមពុះខ្លាំងពេក" : "Don't let the coconut milk boil too vigorously",
        language === "km" ? "អាចជំនួសស្លឹកត្នោតដោយចានដែកបាន" : "Can substitute banana leaves with metal bowls",
      ],
      nutrition: {
        calories: 320,
        protein: "25g",
        carbs: "12g",
        fat: "18g"
      }
    },
    {
      id: 2,
      name: language === "km" ? "លក់សាច់បំពង" : "Beef Lok Lak",
      khmerName: "លក់សាច់បំពង",
      category: "main-courses",
      image: `${Man}`,
      traditionalImage: `${Man}`,
      rating: 4.5,
      prepTime: language === "km" ? "២០ នាទី" : "20 min",
      cookTime: language === "km" ? "១០ នាទី" : "10 min",
      totalTime: language === "km" ? "៣០ នាទី" : "30 min",
      servings: 3,
      difficulty: language === "km" ? "ងាយស្រួល" : "Easy",
      spiceLevel: 1,
      calories: 280,
      region: language === "km" ? "ភ្នំពេញ" : "Phnom Penh",
      history: language === "km"
        ? "លក់សាច់បំពងមានប្រភពមកពីឥទ្ធិពលបារាំងក្នុងសតវត្សរ៍ទី១៩ ប៉ុន្តែត្រូវបានប្រែក្លាយទៅជារសជាតិខ្មែរតាមរយៈការប្រើគ្រឿងទេសក្នុងស្រុក"
        : "Lok Lak has French colonial origins from the 19th century but was adapted to Khmer tastes using local spices and ingredients",
      description: language === "km"
        ? "លក់សាច់បំពងជាម្ហូបដ៏ពេញនិយមដែលបណ្តាលមកពីឥទ្ធិពលបារាំង តែត្រូវបានកែច្នៃឲ្យទៅជារសជាតិខ្មែរ"
        : "Lok Lak is a popular dish with French influence, featuring stir-fried beef with Khmer flavors",
      ingredients: [
        "500g beef tenderloin, cubed",
        "2 tbsp oyster sauce",
        "1 tbsp soy sauce",
        "1 tsp sugar",
        "2 tomatoes, sliced",
        "1 large onion, sliced",
        "Fresh lettuce leaves",
        "2 tbsp black pepper",
        "2 limes, juiced",
        "3 cloves garlic, minced",
        "1 tbsp vegetable oil",
        "Salt to taste"
      ],
      instructions: [
        "Cut beef into 2cm cubes and marinate with oyster sauce, soy sauce, and sugar for 15 minutes",
        "Heat oil in a wok or large pan over high heat",
        "Add minced garlic and stir-fry until fragrant (about 30 seconds)",
        "Add marinated beef and stir-fry for 3-4 minutes until browned but still tender",
        "Season with black pepper and salt to taste",
        "Arrange lettuce leaves on a serving plate",
        "Place cooked beef on top of lettuce",
        "Garnish with sliced tomatoes and onions",
        "Serve with lime juice dipping sauce and steamed rice"
      ],
      tips: [
        language === "km" ? "ប្រើសាច់គោថ្មីសម្រាប់ភាពទន់" : "Use fresh beef for tenderness",
        language === "km" ? "កុំចម្អិនសាច់យូរពេក" : "Don't overcook the beef",
        language === "km" ? "អាចបន្ថែមបន្លែផ្សេងទៀតតាមចំណង់" : "Add other vegetables as desired"
      ],
      nutrition: {
        calories: 280,
        protein: "35g",
        carbs: "8g",
        fat: "12g"
      }
    },
    {
      id: 3,
      name: language === "km" ? "ណាំប៉ាង" : "Num Pang Khmer Sandwich",
      khmerName: "ណាំប៉ាង",
      category: "street-food",
      image: `${Bang}`,
      traditionalImage:`${Bang}`,
      rating: 4.3,
      prepTime: language === "km" ? "១៥ នាទី" : "15 min",
      cookTime: language === "km" ? "១០ នាទី" : "10 min",
      totalTime: language === "km" ? "២៥ នាទី" : "25 min",
      servings: 2,
      difficulty: language === "km" ? "ងាយស្រួល" : "Easy",
      spiceLevel: 2,
      calories: 380,
      region: language === "km" ? "ទូទាំងប្រទេស" : "Nationwide",
      history: language === "km"
        ? "ណាំប៉ាងគឺជាការប្រែក្លាយរបស់ខ្មែរលើបាហ្គេតបារាំង ដោយបន្ថែមគ្រឿងទេស និងរសជាតិខ្មែរតាំងពីសម័យអាណានិគម"
        : "Num Pang is the Khmer adaptation of French baguette, infused with local spices and flavors since colonial times",
      description: language === "km"
        ? "ណាំប៉ាងជាបាយប្រើសដែលមានឥទ្ធិពលបារាំង តែបានប្តូរតាមរសជាតិខ្មែរដោយប្រើគ្រឿងទេស និងបន្លែត្រាប់ត្រា"
        : "Num Pang is a Khmer sandwich with French influence but adapted to Khmer tastes using local spices and pickled vegetables",
      ingredients: [
        "2 fresh baguettes",
        "200g grilled pork or chicken",
        "½ cup pickled carrots and daikon",
        "½ cucumber, sliced",
        "Fresh cilantro leaves",
        "2-3 fresh chili peppers",
        "2 tbsp mayonnaise",
        "1 tbsp fish sauce with lime",
        "2 cloves garlic, minced",
        "1 tbsp soy sauce"
      ],
      instructions: [
        "Slice baguettes lengthwise but not all the way through",
        "Mix minced garlic with mayonnaise and spread inside the baguettes",
        "Grill pork or chicken until cooked and slightly charred",
        "Slice the grilled meat and arrange inside the baguettes",
        "Add pickled carrots and daikon, cucumber slices, and cilantro",
        "Drizzle with fish sauce and lime mixture",
        "Add fresh chili peppers according to spice preference",
        "Press gently and serve immediately"
      ],
      tips: [
        language === "km" ? "ប្រើបាហ្គេតទើបតែអាំងសម្រាប់រសជាតិល្អ" : "Use freshly baked baguettes for best taste",
        language === "km" ? "អាចជំនួសសាច់ដោយត្រីឬបន្លែ" : "Can substitute meat with fish or vegetables",
        language === "km" ? "បន្ថែមសាច់មាន់ដុតសម្រាប់រសជាតិប្លែក" : "Add grilled chicken for variety"
      ],
      nutrition: {
        calories: 380,
        protein: "18g",
        carbs: "45g",
        fat: "15g"
      }
    },
    // Add more recipes following the same detailed structure...
    {
      id: 4,
      name: language === "km" ? "បបរគ្រឿង" : "Samlor Korko",
      khmerName: "បបរគ្រឿង",
      category: "main-courses",
      image: `${Bb}`,
      traditionalImage: `${Bb}`,
      rating: 4.2,
      prepTime: language === "km" ? "៣០ នាទី" : "30 min",
      cookTime: language === "km" ? "៤០ នាទី" : "40 min",
      totalTime: language === "km" ? "១ ម៉ោង ១០ នាទី" : "1 hour 10 min",
      servings: 4,
      difficulty: language === "km" ? "មធ្យម" : "Medium",
      spiceLevel: 1,
      calories: 180,
      region: language === "km" ? "ជនបទ" : "Rural Areas",
      history: language === "km"
        ? "បបរគ្រឿងជាស៊ុបបុរាណដែលធ្វើឡើងដោយកសិករខ្មែរ ប្រើបន្លែស្រស់ពីស្រែចំការ និងគ្រឿងទេសក្នុងស្រុក"
        : "Samlor Korko is a traditional soup made by Khmer farmers using fresh vegetables from fields and local spices",
      description: language === "km"
        ? "បបរគ្រឿងជាស៊ុបបន្លែប្រពៃណីដែលមានគ្រឿងទេសជាច្រើន និងរសជាតិពិសេសពីប្រហុក"
        : "Samlor Korko is a traditional vegetable soup with many spices and unique flavor from prahok",
      ingredients: [
        "200g pumpkin, cubed",
        "150g long beans, cut",
        "100g eggplant, cubed",
        "50g yardlong beans",
        "2 tbsp fish sauce",
        "1 tbsp palm sugar",
        "200ml coconut milk",
        "2 tbsp kroeung (spice paste)",
        "1 tbsp prahok (fermented fish)",
        "4 cups water",
        "2 stalks lemongrass, bruised",
        "4 kaffir lime leaves"
      ],
      instructions: [
        "Prepare all vegetables by washing and cutting into bite-sized pieces",
        "Make kroeung spice paste by grinding lemongrass, galangal, turmeric, garlic, and shallots",
        "Heat a pot and add kroeung paste, cook until fragrant",
        "Add prahok and stir for 1 minute",
        "Add water and bring to a boil",
        "Add hard vegetables first (pumpkin, long beans)",
        "After 10 minutes, add softer vegetables (eggplant)",
        "Add coconut milk and season with fish sauce and palm sugar",
        "Simmer until all vegetables are tender but not mushy",
        "Serve hot with steamed rice"
      ],
      tips: [
        language === "km" ? "បន្ថែមបន្លែតាមរដូវសម្រាប់រសជាតិល្អបំផុត" : "Add seasonal vegetables for best flavor",
        language === "km" ? "កុំធ្វើឲ្យបន្លែផុយពេក" : "Don't overcook vegetables",
        language === "km" ? "អាចកែច្នៃគ្រឿងទេសតាមចំណង់" : "Adjust spices to taste"
      ],
      nutrition: {
        calories: 180,
        protein: "8g",
        carbs: "25g",
        fat: "6g"
      }
    }
  ];

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch =
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.khmerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || recipe.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedRecipes = [...filteredRecipes].sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.rating - a.rating;
      case "time":
        return a.totalTime.localeCompare(b.totalTime);
      // eslint-disable-next-line no-case-declarations
      case "difficulty":const difficultyOrder = { "Easy": 1, "ងាយស្រួល": 1, "Medium": 2, "មធ្យម": 2, "Hard": 3, "ពិបាក": 3 };
        return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
      default:
        return b.rating - a.rating;
    }
  });

  const toggleFavorite = (recipeId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(recipeId)) {
      newFavorites.delete(recipeId);
    } else {
      newFavorites.add(recipeId);
    }
    setFavorites(newFavorites);
  };

  const RecipeModal = ({ recipe, onClose }) => {
    if (!recipe) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
        <div
          className={`max-w-6xl w-full max-h-screen overflow-y-auto rounded-2xl ${
            darkMode ? "bg-gray-800" : "bg-white"
          } shadow-2xl`}
        >
          <div className="relative">
            <div className="grid md:grid-cols-2 gap-0">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-64 md:h-full object-cover"
              />
              <img
                src={recipe.traditionalImage}
                alt={language === "km" ? "រូបភាពប្រពៃណី" : "Traditional presentation"}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <button
              onClick={onClose}
              className={`absolute top-4 right-4 p-2 rounded-full ${
                darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900"
              } shadow-lg`}
            >
              ✕
            </button>
          </div>

          <div className="p-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div>
                <h2
                  className={`text-3xl font-bold mb-2 khmer-text ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {recipe.name}
                </h2>
                <p className={`text-lg khmer-text ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  {recipe.khmerName}
                </p>
              </div>
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <button
                  onClick={() => toggleFavorite(recipe.id)}
                  className={`p-2 rounded-full ${
                    favorites.has(recipe.id)
                      ? "bg-red-500 text-white"
                      : darkMode
                      ? "bg-gray-700 text-gray-300"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  <Heart className="w-5 h-5" fill={favorites.has(recipe.id) ? "currentColor" : "none"} />
                </button>
                <button className={`p-2 rounded-full ${
                  darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-600"
                }`}>
                  <Share2 className="w-5 h-5" />
                </button>
                <button className={`p-2 rounded-full ${
                  darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-600"
                }`}>
                  <Bookmark className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Recipe Meta Information */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 p-4 rounded-lg bg-gradient-to-r from-angkor-gold/10 to-temple-stone/10">
              <div className="text-center">
                <Clock className="w-6 h-6 text-angkor-gold mx-auto mb-1" />
                <div className="text-sm font-medium">{recipe.totalTime}</div>
                <div className="text-xs text-gray-500">{language === "km" ? "ពេលវេលា" : "Total Time"}</div>
              </div>
              <div className="text-center">
                <Users className="w-6 h-6 text-angkor-gold mx-auto mb-1" />
                <div className="text-sm font-medium">{recipe.servings} {language === "km" ? "នាក់" : "servings"}</div>
                <div className="text-xs text-gray-500">{language === "km" ? "ចំនួន" : "Servings"}</div>
              </div>
              <div className="text-center">
                <ChefHat className="w-6 h-6 text-angkor-gold mx-auto mb-1" />
                <div className="text-sm font-medium">{recipe.difficulty}</div>
                <div className="text-xs text-gray-500">{language === "km" ? "កម្រិត" : "Difficulty"}</div>
              </div>
              <div className="text-center">
                <Flame className="w-6 h-6 text-angkor-gold mx-auto mb-1" />
                <div className="text-sm font-medium">{recipe.calories} {language === "km" ? "កាឡូរី" : "cal"}</div>
                <div className="text-xs text-gray-500">{language === "km" ? "កាឡូរី" : "Calories"}</div>
              </div>
            </div>

            {/* History and Description */}
            <div className="mb-8">
              <h3 className={`text-xl font-bold mb-3 khmer-text ${
                darkMode ? "text-white" : "text-gray-900"
              }`}>
                {language === "km" ? "ប្រវត្តិនៃម្ហូប" : "Dish History"}
              </h3>
              <p className={`mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                {recipe.history}
              </p>
              <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                {recipe.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Ingredients */}
              <div>
                <h3
                  className={`text-xl font-bold mb-4 khmer-text ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {language === "km" ? "សម្ភារៈ និងគ្រឿងផ្សំ" : "Ingredients"}
                </h3>
                <ul className="space-y-3">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className={`w-2 h-2 rounded-full bg-angkor-gold mt-2 flex-shrink-0`}></span>
                      <span className={darkMode ? "text-gray-300" : "text-gray-700"}>
                        {ingredient}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Nutrition Facts */}
                <div className="mt-6 p-4 rounded-lg border border-angkor-gold/20">
                  <h4 className={`font-bold mb-3 khmer-text ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}>
                    {language === "km" ? "តម្លៃអាហារូបត្ថម្ភ" : "Nutrition Facts"}
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>{language === "km" ? "កាឡូរី" : "Calories"}: {recipe.nutrition.calories}</div>
                    <div>{language === "km" ? "ប្រូតេអ៊ីន" : "Protein"}: {recipe.nutrition.protein}</div>
                    <div>{language === "km" ? "កាបូអ៊ីដ្រាត" : "Carbs"}: {recipe.nutrition.carbs}</div>
                    <div>{language === "km" ? "ខ្លាញ់" : "Fat"}: {recipe.nutrition.fat}</div>
                  </div>
                </div>
              </div>

              {/* Instructions */}
              <div>
                <h3
                  className={`text-xl font-bold mb-4 khmer-text ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {language === "km" ? "វិធីធ្វើ" : "Instructions"}
                </h3>
                <ol className="space-y-4">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="flex items-start space-x-4">
                      <span
                        className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-angkor-gold to-temple-stone text-white flex items-center justify-center text-sm font-bold`}
                      >
                        {index + 1}
                      </span>
                      <span className={darkMode ? "text-gray-300" : "text-gray-700"}>
                        {instruction}
                      </span>
                    </li>
                  ))}
                </ol>

                {/* Tips */}
                <div className="mt-6">
                  <h4 className={`font-bold mb-3 khmer-text ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}>
                    {language === "km" ? "គន្លឹះ" : "Tips"}
                  </h4>
                  <ul className="space-y-2">
                    {recipe.tips.map((tip, index) => (
                      <li key={index} className="flex items-start space-x-2 text-sm">
                        <span className="text-angkor-gold">💡</span>
                        <span className={darkMode ? "text-gray-300" : "text-gray-600"}>
                          {tip}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
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
            {t.cuisineTitle}
          </h1>
          <p
            className={`text-lg max-w-3xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {language === "km"
              ? "ស្វែងយល់អំពីម្ហូបប្រពៃណីខ្មែរដ៏ឈ្ងុយឆ្ងាញ់ និងរបៀបធ្វើពួកវា។ ម្ហូបខ្មែរមានប្រវត្តិយូរអង្វែងជាង ២០០០ ឆ្នាំ ដែលឆ្លុះបញ្ចាំងពីអរិយធម៌ និងវប្បធម៌របស់ជនជាតិខ្មែរ។"
              : "Discover the delicious traditional Khmer cuisine and learn how to prepare them. Khmer cuisine has a history spanning over 2000 years, reflecting the civilization and culture of the Khmer people."}
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center">
            {/* Search Bar */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder={language === "km" ? "ស្វែងរកម្ហូប..." : "Search recipes..."}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 transition-colors duration-200 ${
                  darkMode
                    ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-angkor-gold"
                    : "bg-white border-gray-200 text-gray-900 placeholder-gray-500 focus:border-angkor-gold"
                }`}
              />
            </div>

            {/* Sort Options */}
            <div className="flex items-center space-x-3">
              <span className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                {language === "km" ? "តម្រៀបតាម:" : "Sort by:"}
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className={`px-3 py-2 rounded-lg border transition-colors duration-200 ${
                  darkMode
                    ? "bg-gray-800 border-gray-700 text-white"
                    : "bg-white border-gray-200 text-gray-900"
                }`}
              >
                {sortOptions.map(option => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mt-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-200 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-angkor-gold to-temple-stone text-white shadow-lg"
                    : darkMode
                    ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    : "bg-white text-gray-600 hover:bg-gray-50 shadow-md"
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span className="text-sm khmer-text">{category.label}</span>
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                  selectedCategory === category.id
                    ? "bg-white/20"
                    : darkMode
                    ? "bg-gray-700"
                    : "bg-gray-200"
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className={`group rounded-2xl overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
              onClick={() => setSelectedRecipe(recipe)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Favorite Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(recipe.id);
                  }}
                  className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 ${
                    favorites.has(recipe.id)
                      ? "bg-red-500 text-white"
                      : "bg-white/20 text-white backdrop-blur-sm"
                  }`}
                >
                  <Heart 
                    className="w-4 h-4" 
                    fill={favorites.has(recipe.id) ? "currentColor" : "none"} 
                  />
                </button>

                {/* Rating */}
                <div className="absolute top-3 left-3">
                  <div className="flex items-center space-x-1 bg-black/50 text-white px-2 py-1 rounded-lg text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>{recipe.rating}</span>
                  </div>
                </div>

                {/* Region Badge */}
                <div className="absolute bottom-3 left-3">
                  <div className="bg-angkor-gold text-white px-2 py-1 rounded text-xs">
                    {recipe.region}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3
                    className={`text-xl font-bold khmer-text ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {recipe.name}
                  </h3>
                </div>
                
                <p className={`text-sm mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  {recipe.khmerName}
                </p>

                <p
                  className={`text-sm mb-4 line-clamp-2 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {recipe.description}
                </p>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4 text-angkor-gold" />
                      <span>{recipe.prepTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4 text-angkor-gold" />
                      <span>{recipe.servings}</span>
                    </div>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      recipe.difficulty === "Easy" || recipe.difficulty === "ងាយស្រួល"
                        ? "bg-green-100 text-green-800"
                        : recipe.difficulty === "Medium" || recipe.difficulty === "មធ្យម"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {recipe.difficulty}
                  </span>
                </div>

                {/* Spice Level */}
                <div className="flex items-center space-x-2 mt-3">
                  <span className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                    {language === "km" ? "កំហាប់ម្ទេស:" : "Spice Level:"}
                  </span>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((level) => (
                      <div
                        key={level}
                        className={`w-2 h-2 rounded-full ${
                          level <= recipe.spiceLevel
                            ? "bg-red-500"
                            : darkMode
                            ? "bg-gray-600"
                            : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {sortedRecipes.length === 0 && (
          <div className="text-center py-16">
            <Utensils className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3
              className={`text-xl font-bold mb-2 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {language === "km" ? "មិនមានលទ្ធផល" : "No Results Found"}
            </h3>
            <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
              {language === "km"
                ? "សូមព្យាយាមស្វែងរកដោយប្រើពាក្យផ្សេង"
                : "Please try searching with different keywords"}
            </p>
          </div>
        )}

        {/* Traditional Cuisine Info */}
        <div className={`mt-16 p-8 rounded-2xl ${
          darkMode ? "bg-gray-800" : "bg-gradient-to-r from-angkor-gold/10 to-temple-stone/10"
        }`}>
          <h2 className={`text-3xl font-bold text-center mb-8 khmer-text ${
            darkMode ? "text-white" : "text-gray-900"
          }`}>
            {language === "km" ? "វប្បធម៌ម្ហូបអាហារខ្មែរ" : "Khmer Culinary Culture"}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Award className="w-12 h-12 text-angkor-gold mx-auto mb-4" />
              <h3 className={`text-lg font-bold mb-2 khmer-text ${
                darkMode ? "text-white" : "text-gray-900"
              }`}>
                {language === "km" ? "ប្រវត្តិសាស្ត្រយូរអង្វែង" : "Ancient History"}
              </h3>
              <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                {language === "km" 
                  ? "ម្ហូបខ្មែរមានប្រវត្តិជាង ២០០០ ឆ្នាំ ចាប់ពីសម័យអាណាចក្រភ្នំ"
                  : "Khmer cuisine dates back over 2000 years to the Funan Empire era"}
              </p>
            </div>
            <div className="text-center">
              <Leaf className="w-12 h-12 text-angkor-gold mx-auto mb-4" />
              <h3 className={`text-lg font-bold mb-2 khmer-text ${
                darkMode ? "text-white" : "text-gray-900"
              }`}>
                {language === "km" ? "គ្រឿងទេសធម្មជាតិ" : "Natural Ingredients"}
              </h3>
              <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                {language === "km"
                  ? "ប្រើគ្រឿងទេសធម្មជាតិដូចជា រំដេង ល្មើយ ម្រេច និងស្លឹកម្រះព្រៅ"
                  : "Uses natural herbs like lemongrass, galangal, pepper, and kaffir lime leaves"}
              </p>
            </div>
            <div className="text-center">
              <User className="w-12 h-12 text-angkor-gold mx-auto mb-4" />
              <h3 className={`text-lg font-bold mb-2 khmer-text ${
                darkMode ? "text-white" : "text-gray-900"
              }`}>
                {language === "km" ? "តម្លៃវប្បធម៌" : "Cultural Values"}
              </h3>
              <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                {language === "km"
                  ? "ឆ្លុះបញ្ចាំងពីភាពចុះសម្រុងគ្នា ការគោរព និងការចែករំលែក"
                  : "Reflects harmony, respect, and sharing in Khmer society"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Recipe Modal */}
      <RecipeModal
        recipe={selectedRecipe}
        onClose={() => setSelectedRecipe(null)}
      />
    </div>
  );
};

export default Cuisine;