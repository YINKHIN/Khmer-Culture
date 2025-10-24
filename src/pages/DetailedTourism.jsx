/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { LanguageContext, ThemeContext } from "../App";
import {
  MapPin,
  Star,
  Clock,
  DollarSign,
  Camera,
  Navigation,
  ArrowLeft,
  Share2,
  Heart,
  Calendar,
  Users,
  Globe,
  Phone,
  Wifi,
  Car,
  Utensils
} from "lucide-react";

// Import your images
import AngkorWat from "../image/tourism/AngkorWat.webp";
import PhnomPenh from "../image/tourism/PhnomPenh.webp";
import SiemReap from "../image/tourism/SiemReap.jpg";
import Sihanoiklle from "../image/tourism/Sihanoukville.jpg";
import Krovanh from "../image/tourism/krovanh.jpg";
import TonleSap from "../image/tourism/TonleSap.jpg";

const DetailedTourism = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, language } = useContext(LanguageContext);
  const { darkMode } = useContext(ThemeContext);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const destinations = [
    {
      id: 1,
      name: t.angkorWat,
      category: "temples",
      location: "Siem Reap",
      rating: 5,
      price: language === "km" ? "៣៧ ដុល្លារ" : "$37",
      image: AngkorWat,
      images: [AngkorWat, AngkorWat, AngkorWat],
      description: t.angkorDescription,
      detailedDescription: language === "km" ? `
        <p>អង្គរវត្តគឺជាប្រាសាទដ៏ធំបំផុតនៅលើពិភពលោក និងជាតំណាងឱ្យស្នាដៃស្ថាបត្យកម្មដ៏អស្ចារ្យរបស់អារ្យធម៌ខ្មែរ។ ប្រាសាទនេះត្រូវបានសាងសង់ឡើងក្នុងសតវត្សរ៍ទី១២ ដោយព្រះមហាក្សត្រសូរ្យវរ្ម័នទី២។</p>
        
        <h3>លក្ខណៈពិសេស</h3>
        <ul>
          <li>ផ្ទៃដីសរុប៖ ១៦២.៦ ហិកតា</li>
          <li>កម្ពស់៖ ៦៥ ម៉ែត្រ</li>
          <li>សម័យកាល៖ សតវត្សរ៍ទី១២</li>
          <li>សាសនា៖ ហិណ្ឌូ</li>
        </ul>

        <h3>កាលវិភាគទស្សនា</h3>
        <p>ពេលវេលាល្អបំផុតសម្រាប់ទស្សនាគឺពេលព្រលឹតព្រះអាទិត្យ (៥:០០-៦:០០ព្រឹក) និងពេលល្ងាច (៤:០០-៥:៣០ល្ងាច)។</p>
      ` : `
        <p>Angkor Wat is the largest temple in the world and represents the amazing architectural achievement of Khmer civilization. This temple was built in the 12th century by King Suryavarman II.</p>
        
        <h3>Features</h3>
        <ul>
          <li>Total area: 162.6 hectares</li>
          <li>Height: 65 meters</li>
          <li>Period: 12th century</li>
          <li>Religion: Hindu</li>
        </ul>

        <h3>Visiting Schedule</h3>
        <p>The best time to visit is during sunrise (5:00-6:00 AM) and sunset (4:00-5:30 PM).</p>
      `,
      highlights: [
        language === "km" ? "ប្រាសាទអង្គរវត្ត" : "Angkor Wat Temple",
        language === "km" ? "ប្រាសាទបាយ័ន" : "Bayon Temple",
        language === "km" ? "ប្រាសាទតាព្រហ្ម" : "Ta Prohm Temple",
        language === "km" ? "ព្រះអាទិត្យរៀប" : "Sunrise viewing",
      ],
      bestTime: language === "km" ? "វេលាព្រឹក" : "Early morning",
      duration: language === "km" ? "១-២ ថ្ងៃ" : "1-2 days",
      coordinates: { lat: 13.4125, lng: 103.867 },
      openingHours: language === "km" ? "៥:០០ព្រឹក - ៥:៣០ល្ងាច" : "5:00 AM - 5:30 PM",
      ticketPrice: language === "km" ? "៣៧ ដុល្លារ (១ថ្ងៃ)" : "$37 (1 day)",
      facilities: [
        language === "km" ? "បង្គោលព័ត៌មាន" : "Information desk",
        language === "km" ? "បន្ទប់ទឹក" : "Restrooms",
        language === "km" ? "ហាងកាហ្វេ" : "Cafe",
        language === "km" ? "អ្នកណែនាំ" : "Tour guides",
      ],
      tips: [
        language === "km" ? "ស្លៀកពាក់ឱ្យសមរម្យ" : "Dress appropriately",
        language === "km" ? "នាំយកទឹកផឹក" : "Bring drinking water",
        language === "km" ? "ជួបជាមួយអ្នកណែនាំ" : "Hire a guide",
        language === "km" ? "ទិញសំបុត្រមុន" : "Buy tickets in advance",
      ]
    },
    {
      id: 2,
      name: language === "km" ? "ព្រះធានីភ្នំពេញ" : "Phnom Penh Capital",
      category: "culture",
      location: "Phnom Penh",
      rating: 4,
      price: language === "km" ? "ឥតគិតថ្លៃ" : "Free",
      image: PhnomPenh,
      images: [PhnomPenh, PhnomPenh, PhnomPenh],
      description: language === "km" 
        ? "រាជធានីភ្នំពេញជាទីក្រុងដ៏ធំនៅកម្ពុជា មានប្រវត្តិសាស្ត្រវែងឆ្ងាយ"
        : "Phnom Penh is the largest city in Cambodia with a rich history",
      detailedDescription: language === "km" ? `
        <p>ភ្នំពេញគឺជារាជធានីនៃព្រះរាជាណាចក្រកម្ពុជា និងជាមជ្ឈមណ្ឌលនយោបាយ សេដ្ឋកិច្ច និងវប្បធម៌របស់ប្រទេស។ ទីក្រុងនេះមានប្រវត្តិសាស្ត្រចាប់ពីសតវត្សរ៍ទី១៥។</p>
        
        <h3>ទីតាំងសំខាន់ៗ</h3>
        <ul>
          <li>ព្រះបរមរាជវាំង</li>
          <li>វត្តព្រះកែវ</li>
          <li>វិមានឯករាជ្យ</li>
          <li>ទន្លេបួនមុខ</li>
        </ul>
      ` : `
        <p>Phnom Penh is the capital of the Kingdom of Cambodia and the political, economic, and cultural center of the country. The city has a history dating back to the 15th century.</p>
        
        <h3>Main Locations</h3>
        <ul>
          <li>Royal Palace</li>
          <li>Silver Pagoda</li>
          <li>Independence Monument</li>
          <li>Four Rivers Area</li>
        </ul>
      `,
      highlights: [
        language === "km" ? "ព្រះបរមរាជវាំង" : "Royal Palace",
        language === "km" ? "វត្តព្រះកែវ" : "Silver Pagoda",
        language === "km" ? "វិថីធម្មជាតិ" : "Riverside",
        language === "km" ? "ផ្សារធំថ្មី" : "Central Market",
      ],
      bestTime: language === "km" ? "ពេលល្ងាច" : "Evening",
      duration: language === "km" ? "២-៣ ថ្ងៃ" : "2-3 days",
      coordinates: { lat: 11.5449, lng: 104.8922 },
      openingHours: language === "km" ? "៨:០០ព្រឹក - ៥:០០ល្ងាច" : "8:00 AM - 5:00 PM",
      ticketPrice: language === "km" ? "ឥតគិតថ្លៃ" : "Free",
      facilities: [
        language === "km" ? "ផ្លូវថ្នល់ល្អ" : "Good roads",
        language === "km" ? "ភោជនីយដ្ឋាន" : "Restaurants",
        language === "km" ? "សណ្ឋាគារ" : "Hotels",
        language === "km" ? "ហាងលក់របស់របរ" : "Souvenir shops",
      ]
    },
    {
      id: 3,
      name: language === "km" ? "ទីក្រុងសៀមរាប" : "Siem Reap City",
      category: "culture",
      location: "Siem Reap Province",
      rating: 5,
      price: language === "km" ? "ចាប់ពី $៥០" : "From $50",
      image: SiemReap,
      images: [SiemReap, SiemReap, SiemReap],
      description: language === "km"
        ? "សៀមរាបជាទីក្រុងទេសចរណ៍ដ៏ល្បីនៅកម្ពុជា ជាទីតាំងនៃប្រាសាទអង្គរ"
        : "Siem Reap is a famous tourist city in Cambodia, home to Angkor temples",
      detailedDescription: language === "km" ? `
        <p>ទីក្រុងសៀមរាបគឺជាចំណុចកណ្តាលទេសចរណ៍ដ៏សំខាន់បំផុតនៅកម្ពុជា។ ទីក្រុងនេះមិនត្រឹមតែជាច្រកចូលទៅកាន់ប្រាសាទអង្គរប៉ុណ្ណោះទេ ថែមទាំងជាមជ្ឈមណ្ឌលវប្បធម៌ដ៏សកម្មផងដែរ។</p>
        
        <h3>សកម្មភាពពេញនិយម</h3>
        <ul>
          <li>ទស្សនាប្រាសាទអង្គរ</li>
          <li>ទស្សនារបាំអប្សារា</li>
          <li>ផ្សាររាត្រី</li>
          <li>ទស្សនាភូមិវប្បធម៌</li>
          <li>ទស្សនាបឹងទន្លេសាប</li>
        </ul>
      ` : `
        <p>Siem Reap City is the most important tourism hub in Cambodia. This city is not only the gateway to Angkor temples but also an active cultural center.</p>
        
        <h3>Popular Activities</h3>
        <ul>
          <li>Visiting Angkor temples</li>
          <li>Watching Apsara dance</li>
          <li>Night markets</li>
          <li>Cultural village tour</li>
          <li>Tonle Sap lake visit</li>
        </ul>
      `,
      highlights: [
        language === "km" ? "ប្រាសាទអង្គរ" : "Angkor Archaeological Park",
        language === "km" ? "ផ្សាររាត្រី" : "Night Market",
        language === "km" ? "រាំរបាំអប្សារា" : "Apsara Dance Show",
        language === "km" ? "ទស្សនាភូមិវប្បធម៌" : "Cultural Village",
      ],
      bestTime: language === "km" ? "វេលាព្រឹកនិងល្ងាច" : "Morning and evening",
      duration: language === "km" ? "៣-៤ ថ្ងៃ" : "3-4 days",
      coordinates: { lat: 13.3618, lng: 103.8606 },
      openingHours: language === "km" ? "២៤ម៉ោង" : "24 hours",
      ticketPrice: language === "km" ? "ឥតគិតថ្លៃ" : "Free",
      facilities: [
        language === "km" ? "សណ្ឋាគារ ៥ ផ្កាយ" : "5-star hotels",
        language === "km" ? "ភោជនីយដ្ឋានអន្តរជាតិ" : "International restaurants",
        language === "km" ? "ស្រែបាញ់ហ្គីហ្វ" : "Golf courses",
        language === "km" ? "ស្បៃស្ពៃ" : "Spas",
      ]
    },
    {
      id: 5,
      name: language === "km" ? "ភ្នំក្រវាញ" : "Cardamom Mountains",
      category: "nature",
      location: "Southwest Cambodia",
      rating: 4,
      price: language === "km" ? "ចាប់ពី $២០" : "From $20",
      image: Krovanh,
      images: [Krovanh, Krovanh, Krovanh],
      description: language === "km"
        ? "ជួរភ្នំក្រវាញជាតំបន់ធម្មជាតិដ៏ធំនៅកម្ពុជា"
        : "Cardamom Mountains are a large natural area in Cambodia",
      detailedDescription: language === "km" ? `
        <p>ភ្នំក្រវាញគឺជាជួរភ្នំដ៏ធំមួយស្ថិតនៅភាគខាងលិចនៃប្រទេសកម្ពុជា។ តំបន់នេះល្បីខាងភាពសម្បូរបែបជីវចម្រុះ និងជាទីអាស្រ័យរបស់សត្វព្រៃជាច្រើនប្រភេទ។</p>
        
        <h3>សកម្មភាពទេសចរណ៍</h3>
        <ul>
          <li>ដើរភ្នំនិងរុករកព្រៃ</li>
          <li>មើលសត្វព្រៃនិងបក្សី</li>
          <li>ទស្សនាទឹកធ្លាក់</li>
          <li>ស្គាល់ជីវភាពជនជាតិដើម</li>
          <li>ជិះទូកតាមផ្លូវទឹក</li>
        </ul>
      ` : `
        <p>The Cardamom Mountains are a large mountain range located in western Cambodia. This area is famous for its biodiversity and is home to many wildlife species.</p>
        
        <h3>Tourism Activities</h3>
        <ul>
          <li>Trekking and jungle exploration</li>
          <li>Wildlife and bird watching</li>
          <li>Waterfall visits</li>
          <li>Learning about indigenous cultures</li>
          <li>Boat trips along waterways</li>
        </ul>
      `,
      highlights: [
        language === "km" ? "ដើរភ្នំ" : "Hiking",
        language === "km" ? "មើលសត្វព្រៃ" : "Wildlife watching",
        language === "km" ? "ទឹកធ្លាក់" : "Waterfalls",
        language === "km" ? "ជីវភាពជនជាតិដើម" : "Indigenous culture",
      ],
      bestTime: language === "km" ? "វេលាព្រឹក" : "Early morning",
      duration: language === "km" ? "២-៣ ថ្ងៃ" : "2-3 days",
      coordinates: { lat: 12.0, lng: 103.0 },
      openingHours: language === "km" ? "៦:០០ព្រឹក - ៦:០០ល្ងាច" : "6:00 AM - 6:00 PM",
      ticketPrice: language === "km" ? "ចាប់ពី $២០" : "From $20",
      facilities: [
        language === "km" ? "មណ្ឌលទេសចរណ៍" : "Tourist center",
        language === "km" ? "មគ្គុទេសក៍ក្នុងតំបន់" : "Local guides",
        language === "km" ? "កន្លែងតាមដានសត្វ" : "Wildlife observation points",
        language === "km" ? "ផ្ទះសំណាក់" : "Guest houses",
      ]
    },
    {
      id: 4,
      name: language === "km" ? "ឆ្នេរសីហនុ" : "Sihanouk Beaches",
      category: "beaches",
      location: "Sihanouk Province",
      rating: 4,
      price: language === "km" ? "ឥតគិតថ្លៃ" : "Free",
      image: Sihanoiklle,
      images: [Sihanoiklle, Sihanoiklle, Sihanoiklle],
      description: language === "km"
        ? "សីហនុមានឆ្នេរសមុទ្រដ៏ស្រស់ស្អាតជាច្រើន"
        : "Sihanoukville has many beautiful beaches and islands",
      detailedDescription: language === "km" ? `
        <p>ខេត្តព្រះសីហនុគឺជាច្រកចេញចូលសមុទ្រសំខាន់របស់កម្ពុជា និងជាតំបន់ទេសចរណ៍ឆ្នេរសមុទ្រដ៏ពេញនិយម។ តំបន់នេះមានឆ្នេរខ្សាច់សល្អប្រណីត និងកោះដ៏ស្រស់ស្អាតជាច្រើន។</p>
        
        <h3>ឆ្នេរនិងកោះសំខាន់ៗ</h3>
        <ul>
          <li>ឆ្នេរអូរឈើទាល</li>
          <li>ឆ្នេរសេរ៉េនឌីពីទី</li>
          <li>កោះរ៉ុង</li>
          <li>កោះរ៉ុងសន្លឹម</li>
          <li>កោះកោះតុង</li>
        </ul>
      ` : `
        <p>Sihanoukville Province is Cambodia's main seaport and a popular beach tourism area. This area has beautiful sandy beaches and many beautiful islands.</p>
        
        <h3>Main Beaches and Islands</h3>
        <ul>
          <li>Ochheuteal Beach</li>
          <li>Serendipity Beach</li>
          <li>Koh Rong Island</li>
          <li>Koh Rong Sanloem</li>
          <li>Koh Totang</li>
        </ul>
      `,
      highlights: [
        language === "km" ? "ឆ្នេរអូរឈើទាល" : "Ochheuteal Beach",
        language === "km" ? "ឆ្នេរស្រីលanka" : "Serendipity Beach",
        language === "km" ? "កោះរ៉ុង" : "Koh Rong Island",
        language === "km" ? "កោះរ៉ុងសន្លឹម" : "Koh Rong Sanloem",
      ],
      bestTime: language === "km" ? "រដូវប្រាំង" : "Dry season",
      duration: language === "km" ? "២-៤ ថ្ងៃ" : "2-4 days",
      coordinates: { lat: 10.6093, lng: 103.5296 },
      openingHours: language === "km" ? "២៤ម៉ោង" : "24 hours",
      ticketPrice: language === "km" ? "ឥតគិតថ្លៃ" : "Free",
      facilities: [
        language === "km" ? "ឆ្នេរខ្សាច់ស" : "Sandy beaches",
        language === "km" ? "កន្លែងហែលទឹក" : "Swimming areas",
        language === "km" ? "ភោជនីយដ្ឋានតាមឆ្នេរ" : "Beach restaurants",
        language === "km" ? "សណ្ឋាគារឆ្នេរសមុទ្រ" : "Beach resorts",
      ]
    },
    {
      id: 6,
      name: language === "km" ? "បឹងទន្លេសាប" : "Tonle Sap Lake",
      category: "nature",
      location: "Central Cambodia",
      rating: 4,
      price: language === "km" ? "ចាប់ពី $១៥" : "From $15",
      image: TonleSap,
      images: [TonleSap, TonleSap, TonleSap],
      description: language === "km"
        ? "បឹងទន្លេសាបជាបឹងដ៏ធំនៅអាស៊ីអាគ្នេយ៍"
        : "Tonle Sap is the largest lake in Southeast Asia",
      detailedDescription: language === "km" ? `
        <p>បឹងទន្លេសាបគឺជាប្រព័ន្ធធារាសាស្ត្រដ៏សំខាន់បំផុតនៅកម្ពុជា និងជាបឹងដ៏ធំបំផុតនៅអាស៊ីអាគ្នេយ៍។ បឹងនេះមានលក្ខណៈពិសេសគឺមានទំហំប្រែប្រួលតាមរដូវ។</p>
        
        <h3>ការទស្សនាពិសេស</h3>
        <ul>
          <li>ភូមិលើទឹកនៅកំពង់ផែ</li>
          <li>ភូមិលើទឹកចាម់កាក់</li>
          <li>ឧទ្យានជាតិបឹងទន្លេសាប</li>
          <li>មើលបក្សីរដូវវស្សា</li>
          <li>ស្គាល់ជីវភាពអ្នកនេសាទ</li>
        </ul>
      ` : `
        <p>Tonle Sap Lake is the most important hydrological system in Cambodia and the largest lake in Southeast Asia. This lake has the special characteristic of changing size according to the season.</p>
        
        <h3>Special Attractions</h3>
        <ul>
          <li>Floating villages in Kampong Phluk</li>
          <li>Floating villages in Chong Kneas</li>
          <li>Tonle Sap Biosphere Reserve</li>
          <li>Bird watching in rainy season</li>
          <li>Learning about fishermen's life</li>
        </ul>
      `,
      highlights: [
        language === "km" ? "ទស្សនាផ្ទះលើទឹក" : "Floating villages",
        language === "km" ? "បក្សីទេសចរណ៍" : "Bird watching",
        language === "km" ? "ត្រីព្រៃ" : "Freshwater fish",
        language === "km" ? "ជីវិតជនបទ" : "Rural life",
      ],
      bestTime: language === "km" ? "វេលាព្រឹក" : "Morning",
      duration: language === "km" ? "១ ថ្ងៃ" : "1 day",
      coordinates: { lat: 12.8797, lng: 104.5283 },
      openingHours: language === "km" ? "៧:០០ព្រឹក - ៥:០០ល្ងាច" : "7:00 AM - 5:00 PM",
      ticketPrice: language === "km" ? "ចាប់ពី $១៥" : "From $15",
      facilities: [
        language === "km" ? "ទូកទេសចរណ៍" : "Tour boats",
        language === "km" ? "មគ្គុទេសក៍ក្នុងតំបន់" : "Local guides",
        language === "km" ? "កន្លែងមើលបក្សី" : "Bird watching spots",
        language === "km" ? "ហាងលក់ចំណីអាហារ" : "Food stalls",
      ]
    }
  ];


  const destination = destinations.find(dest => dest.id === parseInt(id));

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className={`text-2xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
            {language === "km" ? "រកមិនឃើញទីតាំង" : "Destination Not Found"}
          </h2>
          <Link
            to="/tourism"
            className="inline-flex items-center space-x-2 bg-angkor-gold text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{language === "km" ? "ត្រលប់ទៅទំព័រទេសចរណ៍" : "Back to Tourism"}</span>
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: destination.name,
          text: destination.description,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert(language === "km" ? "ចម្លងរួចរាល់!" : "Copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <button
            onClick={() => navigate(-1)}
            className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              darkMode 
                ? "text-gray-300 hover:text-white hover:bg-gray-700" 
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{language === "km" ? "ត្រលប់ក្រោយ" : "Go Back"}</span>
          </button>
        </div>

        {/* Main Content */}
        <div className={`rounded-2xl overflow-hidden ${darkMode ? "bg-gray-800" : "bg-white"} shadow-2xl`}>
          {/* Image Gallery */}
          <div className="relative h-96 overflow-hidden">
            <img
              src={destination.images[selectedImage]}
              alt={destination.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            
            {/* Image Navigation */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {destination.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    selectedImage === index 
                      ? "bg-white" 
                      : "bg-white/50"
                  }`}
                />
              ))}
            </div>

            {/* Action Buttons */}
            <div className="absolute top-4 right-4 flex space-x-2">
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`p-2 rounded-full backdrop-blur-sm ${
                  isFavorite 
                    ? "bg-red-500 text-white" 
                    : "bg-white/20 text-white hover:bg-white/30"
                } transition-colors`}
              >
                <Heart className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`} />
              </button>
              <button
                onClick={handleShare}
                className="p-2 rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 transition-colors"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            {/* Title Overlay */}
            <div className="absolute bottom-8 left-8 text-white">
              <h1 className="text-4xl font-bold mb-2 khmer-text">{destination.name}</h1>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-5 h-5" />
                  <span>{destination.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 fill-current" />
                  <span>{destination.rating}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Description */}
                <section className="mb-8">
                  <h2 className={`text-2xl font-bold mb-4 khmer-text ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}>
                    {language === "km" ? "ការពិពណ៌នា" : "Description"}
                  </h2>
                  <div 
                    className={`prose max-w-none ${
                      darkMode ? "prose-invert text-gray-300" : "text-gray-600"
                    }`}
                    dangerouslySetInnerHTML={{ __html: destination.detailedDescription }}
                  />
                </section>

                {/* Highlights */}
                <section className="mb-8">
                  <h2 className={`text-2xl font-bold mb-4 khmer-text ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}>
                    {language === "km" ? "ចំណុចពិសេស" : "Highlights"}
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    {destination.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-angkor-gold rounded-full"></div>
                        <span className={darkMode ? "text-gray-300" : "text-gray-600"}>
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Travel Tips */}
                {destination.tips && (
                  <section className="mb-8">
                    <h2 className={`text-2xl font-bold mb-4 khmer-text ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}>
                      {language === "km" ? "គន្លឹះធ្វើដំណើរ" : "Travel Tips"}
                    </h2>
                    <div className="grid gap-3">
                      {destination.tips.map((tip, index) => (
                        <div key={index} className={`p-4 rounded-lg ${
                          darkMode ? "bg-gray-700" : "bg-gray-50"
                        }`}>
                          <span className={darkMode ? "text-gray-300" : "text-gray-600"}>
                            {tip}
                          </span>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Info */}
                <div className={`p-6 rounded-2xl ${
                  darkMode ? "bg-gray-700" : "bg-gray-50"
                }`}>
                  <h3 className={`text-xl font-bold mb-4 khmer-text ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}>
                    {language === "km" ? "ព័ត៌មានរហ័ស" : "Quick Info"}
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={darkMode ? "text-gray-300" : "text-gray-600"}>
                        {language === "km" ? "តម្លៃសំបុត្រ" : "Ticket Price"}
                      </span>
                      <span className="font-bold text-angkor-gold">{destination.ticketPrice}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className={darkMode ? "text-gray-300" : "text-gray-600"}>
                        {language === "km" ? "ម៉ោងបើក" : "Opening Hours"}
                      </span>
                      <span className="font-medium">{destination.openingHours}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className={darkMode ? "text-gray-300" : "text-gray-600"}>
                        {language === "km" ? "ពេលវេលាល្អ" : "Best Time"}
                      </span>
                      <span className="font-medium">{destination.bestTime}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className={darkMode ? "text-gray-300" : "text-gray-600"}>
                        {language === "km" ? "រយៈពេល" : "Duration"}
                      </span>
                      <span className="font-medium">{destination.duration}</span>
                    </div>
                  </div>

                  <button className="w-full mt-6 bg-gradient-to-r from-angkor-gold to-temple-stone text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                    {language === "km" ? "កក់ឥឡូវនេះ" : "Book Now"}
                  </button>
                </div>

                {/* Facilities */}
                <div className={`p-6 rounded-2xl ${
                  darkMode ? "bg-gray-700" : "bg-gray-50"
                }`}>
                  <h3 className={`text-xl font-bold mb-4 khmer-text ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}>
                    {language === "km" ? "សេវាកម្ម" : "Facilities"}
                  </h3>
                  <div className="grid gap-2">
                    {destination.facilities.map((facility, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className={darkMode ? "text-gray-300" : "text-gray-600"}>
                          {facility}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Location Map */}
                <div className={`p-6 rounded-2xl ${
                  darkMode ? "bg-gray-700" : "bg-gray-50"
                }`}>
                  <h3 className={`text-xl font-bold mb-4 khmer-text ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}>
                    {language === "km" ? "ទីតាំង" : "Location"}
                  </h3>
                  <div className="aspect-video bg-gray-300 rounded-lg flex items-center justify-center">
                    <MapPin className="w-12 h-12 text-gray-500" />
                  </div>
                  <p className={`mt-2 text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                    {destination.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedTourism;