/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { LanguageContext, ThemeContext } from "../App";
import {
  Calendar,
  User,
  Clock,
  Tag,
  ArrowLeft,
  Share2,
  Bookmark,
  Heart,
} from "lucide-react";
import Hist from "../image/bon/chakro.jpg";
import Hist1 from "../image/bon/angkor.webp";
import Hist2 from "../image/bon/hist2.png";
import Omtuk from "../image/bon/Tuk ngor 1.jpg";
import Amok from "../image/bon/amok.png";
import NewYearKh from "../image/bon/ចូលឆ្នាំ.jpg";
import AngKor from "../image/bon/visit.jpg";
import AngKor1 from "../image/bon/Equinox-at-Angkor-Wat.jpg";
import Apsara from "../image/bon/apsara.jpg";
// import { Link } from "react-router-dom";
const DetailedBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, language } = useContext(LanguageContext);
  const { darkMode } = useContext(ThemeContext);
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  // Your existing articles data
  const articles = [
    {
      id: 1,
      title:
        language === "km"
          ? "បុណ្យចូលឆ្នាំខ្មែរ៖ ប្រពៃណីនិងអត្ថន័យ"
          : "Khmer New Year: Traditions and Meanings",
      category: "culture",
      author: language === "km" ? "អ្នកនិពន្ធ" : "Author",
      date: "2025-04-15",
      readTime: language === "km" ? "៥ នាទី" : "5 min read",
      image: `${NewYearKh}`,
      excerpt:
        language === "km"
          ? "បុណ្យចូលឆ្នាំខ្មែរជាពិធីបុណ្យប្រពៃណីដ៏សំខាន់បំផុតនៅកម្ពុជា..."
          : "Khmer New Year is the most important traditional festival in Cambodia...",
      content:
        language === "km"
          ? `
      <h2>ប្រវត្តិបុណ្យចូលឆ្នាំខ្មែរ</h2>
      <p>បុណ្យចូលឆ្នាំខ្មែរត្រូវបានប្រារព្ធឡើងក្នុងខែមេសា ជារៀងរាល់ឆ្នាំ។ ពិធីនេះមានរយៈពេល៣ថ្ងៃ ហើយគេនិយមហៅថា មហាសង្ក្រាន្ត។</p>
      
      <h2>ពិធីបុណ្យសំខាន់ៗ</h2>
      <ul>
        <li>ថ្ងៃទី១៖ មហាសង្ក្រាន្ត - ការចាប់ផ្តើមឆ្នាំថ្មី</li>
        <li>ថ្ងៃទី២៖ វារាឡើងស័ក - ការបញ្ជូនការអនុគ្រោះ</li>
        <li>ថ្ងៃទី៣៖ វារាឡើងស័ក - ការលាងជម្រះខ្លួនប្រាណ</li>
      </ul>
      
      <h2>សកម្មភាពប្រពៃណី</h2>
      <p>ក្នុងឱកាសនេះ ប្រជាជនខ្មែរនិយមរៀបចំអាហារបុណ្យ ស្លៀកពាក់ខោអាវថ្មី និងទៅវត្តអារាមដើម្បីធ្វើបុណ្យ។</p>
    `
          : `
      <h2>History of Khmer New Year</h2>
      <p>Khmer New Year is celebrated in April every year. This ceremony lasts for 3 days and is commonly called Maha Sangkran.</p>
      
      <h2>Main Ceremonies</h2>
      <ul>
        <li>Day 1: Maha Sangkran - The beginning of the new year</li>
        <li>Day 2: Virak Wanabat - Sending blessings</li>
        <li>Day 3: Virak Laeung Saka - Cleansing the body</li>
      </ul>
      
      <h2>Traditional Activities</h2>
      <p>On this occasion, Cambodian people like to prepare holiday food, wear new clothes, and go to pagodas to make merit.</p>
    `,
    },
    {
      id: 2,
      title:
        language === "km"
          ? "សិល្បៈអប្សារា៖ កេរ្តិ៍ដំណែលពីអង្គរ"
          : "Apsara Dance: Heritage from Angkor",
      category: "culture",
      author: language === "km" ? "អ្នកសិល្បៈ" : "Artist",
      date: "2025-04-10",
      readTime: language === "km" ? "៧ នាទី" : "7 min read",
      image: `${Apsara}`,
      excerpt:
        language === "km"
          ? "របាំអប្សារាជាសិល្បៈដ៏ល្អឯកដែលបានរក្សាពីសម័យអង្គរ..."
          : "Apsara dance is an exquisite art form preserved from the Angkor era...",
      content:
        language === "km"
          ? `
      <h2>ប្រវត្តិរបាំអប្សារា</h2>
      <p>របាំអប្សារាមានប្រវត្តិយូរលង់ចាប់ពីសម័យអង្គរ ដែលត្រូវបានឆ្លាក់នៅលើជញ្ជាំងប្រាសាទអង្គរវត្ត។ របាំនេះតំណាងឱ្យសិល្បៈដ៏ឧត្តុង្គឧត្តមនៃអារ្យធម៌ខ្មែរ។</p>
      
      <h2>លក្ខណៈពិសេសនៃរបាំអប្សារា</h2>
      <ul>
        <li>ទីតាំងដៃនិងអង្អិលដៃដ៏ចំៗ</li>
        <li>ចលនារាងកាយដ៏រលូន</li>
        <li>សម្លៀកបំពាក់តុក្កតាដ៏ប្រណិត</li>
        <li>តន្ត្រីដ៏ពិសេសដោយឧបករណ៍ភ្លេងប្រពៃណី</li>
      </ul>
      
      <h2>សារៈសំខាន់វប្បធម៌</h2>
      <p>របាំអប្សារាត្រូវបានទទួលស្គាល់ដោយអង្គការយូណេស្កូថាជាកេរដំណែលវប្បធម៌ដែលមិនមែនជារូបវន្តនៃមនុស្សជាតិ។</p>
    `
          : `
      <h2>History of Apsara Dance</h2>
      <p>Apsara dance has a long history dating back to the Angkor era, carved on the walls of Angkor Wat. This dance represents the sublime art of Khmer civilization.</p>
      
      <h2>Characteristics of Apsara Dance</h2>
      <ul>
        <li>Precise hand positions and finger movements</li>
        <li>Graceful body movements</li>
        <li>Elaborate traditional costumes</li>
        <li>Special music with traditional instruments</li>
      </ul>
      
      <h2>Cultural Significance</h2>
      <p>Apsara dance is recognized by UNESCO as an intangible cultural heritage of humanity.</p>
    `,
    },
    {
      id: 3,
      title:
        language === "km"
          ? "ម្ហូបប្រពៃណីខ្មែរ៖ អាម៉ុកនិងលក់សាច់បំពង"
          : "Traditional Khmer Cuisine: Amok and Lok Lak",
      category: "food",
      author: language === "km" ? "អ្នកចុងភៅ" : "Chef",
      date: "2025-04-05",
      readTime: language === "km" ? "៦ នាទី" : "6 min read",
      image: `${Amok}`,
      excerpt:
        language === "km"
          ? "ម្ហូបប្រពៃណីខ្មែរមានរសជាតិឈ្ងុយឆ្ងាញ់និងគ្រឿងទេសជាច្រើន..."
          : "Traditional Khmer cuisine has delicious flavors and many spices...",
      content:
        language === "km"
          ? `
      <h2>អាម៉ុកត្រី</h2>
      <p>អាម៉ុកជាម្ហូបប្រពៃណីដ៏ពេញនិយមដែលធ្វើពីត្រី ដោយលាយជាមួយគ្រឿងការ៉េមក្រូង ស្លឹកគ្រៃ និងគ្រឿងទេសផ្សេងៗទៀត។</p>
      
      <h2>គ្រឿងផ្សំសំខាន់</h2>
      <ul>
        <li>ត្រីរ៉ស់</li>
        <li>ស្លឹកក្រូច</li>
        <li>ស្លឹកគ្រៃ</li>
        <li>ខ្ទឹមស</li>
        <li>...</li>
        <li>ទឹកអំបិល</li>
      </ul>
      
      <h2>លក់សាច់បំពង</h2>
      <p>លក់សាច់បំពងជាម្ហូបមួយទៀតដ៏ពេញនិយម ធ្វើពីសាច់គោដែលត្រូវបានចំអិនជាមួយគ្រឿងទេសពិសេស និងបម្រើជាមួយពងមាន់ និងភេសជ្ជៈឆ្ងាញ់។</p>
    `
          : `
      <h2>Fish Amok</h2>
      <p>Amok is a popular traditional dish made from fish, mixed with kroeung curry paste, kaffir lime leaves, and other spices.</p>
      
      <h2>Main Ingredients</h2>
      <ul>
        <li>Snakehead fish or goby fish</li>
        <li>Kroeung curry paste</li>
        <li>Kaffir lime leaves</li>
        <li>Garlic</li>
        <li>Lemongrass</li>
        <li>Fish sauce</li>
      </ul>
      
      <h2>Beef Lok Lak</h2>
      <p>Lok Lak is another popular dish made from beef that is cooked with special spices and served with egg and delicious sauce.</p>
    `,
    },
    {
      id: 4,
      title:
        language === "km"
          ? "ដំណើរកំសាន្តទៅប្រាសាទកាន់អង្គរវត្ត"
          : "Journey to Angkor Wat",
      category: "travel",
      author: language === "km" ? "អ្នកធ្វើដំណើរ" : "Traveler",
      date: "2025-03-28",
      readTime: language === "km" ? "៨ នាទី" : "8 min read",
      image: `${AngKor}`,
      excerpt:
        language === "km"
          ? "អង្គរវត្តជាប្រាសាទដ៏ល្បីល្បាញនៅលើពិភពលោក..."
          : "Angkor Wat is the most famous temple in the world...",
      content:
        language === "km"
          ? `
    <h2>ប្រាសាទអង្គរវត្ត</h2>
    <p>ការទៅលេងអង្គរវត្តជាបទពិសោធន៍ដ៏អស្ចារ្យសម្រាប់អ្នកដំណើរទាំងអស់។ ប្រាសាទនេះត្រូវបានសាងសង់ក្នុងសតវត្សរ៍ទី១២ ដោយព្រះមហាក្សត្រសូរ្យវរ្ម័នទី២។</p>
    
    <h2>អ្វីដែលត្រូវមើល</h2>
    <ul>
      <li>រូបចម្លាក់ដ៏អស្ចារ្យនៅលើជញ្ជាំង</li>
      <li>ទេសភាពព្រលឹតព្រះអាទិត្យដ៏គួរឱ្យចង់មើល</li>
      <li>ប្រាសាទបាយ័នដែលមានមុខព្រះអវលោកេស្វរៈ</li>
    </ul>
    <br/>
    <hr/>
    <h2>សៀមរាប៖ ខេត្តទេសចរណ៍ដ៏សំខាន់</h2>
    <p>ខេត្តសៀមរាប គឺជាខេត្តទេសចរណ៍សំខាន់ជាងគេនៅកម្ពុជា ព្រោះមានប្រាង្គប្រាសាទជាច្រើនស្ថិតនៅទីនោះ ជាពិសេស ប្រាសាទអង្គរវត្ត ដែលជាអច្ឆរិយៈវត្ថុដ៏អស្ចារ្យរបស់ពិភពលោក។</p>
    
    <h2>ប្រវត្តិសាស្ត្រដ៏យូរលង់</h2>
    <p>ប្រាសាទអង្គរវត្ត ដែលចាប់ផ្តើមសាងសង់ក្នុងសតវត្សរ៍ទី១២នៃគ្រិស្តសករាជដោយព្រះបាទសូរ្យវរ្ម័នទី២ បានក្លាយជាសំណង់ស្ថាបត្យកម្មដ៏ល្អឯកក្នុងប្រវត្តិសាស្ត្រមនុស្សជាតិ។</p>
    
    <h2>ទស្សនាអង្គរវត្ត</h2>
    <img src="${AngKor1}" alt="Angkor Wat Temple" style="width: 100%; height: auto; border-radius: 8px; margin: 20px 0;" />
    
    <p>បច្ចុប្បន្ន បេតិកភណ្ឌរបស់ពិភពលោកដពិសិដ្ឋនេះ បានក្លាយជាគោលដៅទេសចរណ៍ទី១របស់ភ្ញៀវទេសចរបរទេស ដែលបានឆ្លងដែនមកដល់ទឹកដីនៃប្រទេសកម្ពុជា។</p>
    
    <h2>បទពិសោធន៍ពីភ្ញៀវទេសចរ</h2>
    <p>លោក STUART BLAIR ជាភ្ញៀវទេសចរជនជាតិអូស្ត្រាលីម្នាក់ ដែលកំពុងដើរទស្សនារូបចម្លាក់នៅជញ្ជាំងប្រាសាទអង្គរវត្តជាមួយភរិយារបស់ខ្លួន បានប្រាប់សារព័ត៌មានថ្មីៗថា លោកបានស្គាល់ប្រាសាទអង្គរវត្តតាមរយៈទង់ជាតិខ្មែរ។</p>
    
    <p>នៅពេលលោកបានមកទស្សនាផ្ទាល់ លោកបានបង្ហាញអារម្មណ៍រំភើប និងបានស្ងើចសរសើរមិនដាច់ពីមាត់ចំពោះដូនតាខ្មែរ ដែលបានសាងសង់សំណង់ដ៏មហិមានៅក្នុងប្រវត្តិសាស្ត្រមនុស្សជាតិ។</p>
    
    <h2>ការបែងចែកពីក្រុងផ្សេងទៀត</h2>
    <p>មានមាឌធាត់ និងរាងខ្ពស់ ព្រមទាំងមានសក់ស្គូវផង លោក Stuart Blair ដែលបានមកទស្សនាប្រាសាទអង្គរវត្តជាលើកទីមួយ បានរៀបរាប់ទាំងទឹកមុខសប្បាយរីករាយថា៖</p>
    
    <blockquote style="border-left: 4px solid #D4AF37; padding-left: 16px; margin: 20px 0; font-style: italic;">
      «វាពិតគួរឲ្យភ្ញាក់ផ្អើលណាស់។ ខ្ញុំបានឃើញសំណង់ស្ថាបត្យកម្មដ៏អស្ចារ្យ ដែលពិភពលោកពុំដែលមានទេ។ វាមានអាយុកាលរាប់ពាន់ឆ្នាំ។ ក្រៅពីប្រាសាទ នៅសៀមរាប គឺជាក្រុងមួយដ៏ធំ និងមានតំបន់ទេសចរណ៍ជាច្រើនផ្សេងទៀត។ សៀមរាបមានហេដ្ឋារចនាសម្ព័ន្ធល្អគួរសម ខណៈដែលការទុកដាក់សំរាម ក៏គ្រាន់បើដែរដែលវាខុសពីក្រុងព្រះសីហនុ»។
    </blockquote>
    
    <h2>គន្លឹះសម្រាប់អ្នកធ្វើដំណើរ</h2>
    <ul>
      <li>វាជាការល្អប្រសើរជាងក្នុងការទៅមើលព្រលឹតព្រះអាទិត្យ</li>
      <li>ជួបជាមួយមគ្គុទេសក៍ទេសចរណ៍ម្នាក់ដើម្បីទទួលបានព័ត៌មានលម្អិតអំពីប្រវត្តិសាស្ត្រ</li>
      <li>ស្លៀកពាក់ឱ្យសមរម្យ និងងាយស្រួលក្នុងការដើរ</li>
      <li>នាំយកទឹក និងគ្រឿងការពារព្រះអាទិត្យ</li>
      <li>ទិញសំបុត្រមុនពេលទៅទស្សនា</li>
    </ul>
  `
          : `
    <h2>Angkor Wat Temple</h2>
    <p>Visiting Angkor Wat is an amazing experience for all travelers. This temple was built in the 12th century by King Suryavarman II.</p>
    
    <h2>What to See</h2>
    <ul>
      <li>Magnificent carvings on the walls</li>
      <li>Breathtaking sunrise views</li>
      <li>Bayon Temple with its Avalokitesvara faces</li>
      <li>Ta Prohm with trees growing through the temple</li>
    </ul>

    <h2>Siem Reap: The Premier Tourist Province</h2>
    <p>Siem Reap is the most important tourist province in Cambodia because there are many temples located there, especially Angkor Wat, which is an amazing wonder of the world.</p>
    
    <h2>Ancient History</h2>
    <p>Angkor Wat, which began construction in the 12th century AD by King Suryavarman II, has become an exceptional architectural structure in human history.</p>
    
    <h2>Visiting Angkor Wat</h2>
    <p>Currently, this sacred world heritage site has become the number one tourist destination for foreign tourists who have crossed borders to reach Cambodian soil.</p>
    
    <h2>Tourist Experience</h2>
    <p>Mr. STUART BLAIR, an Australian tourist who was walking to see the carvings on the walls of Angkor Wat with his wife, told the news that he knew about Angkor Wat through the Cambodian flag.</p>
    
    <p>When he came to visit in person, he showed excited emotions and continuously praised the Khmer ancestors who built this magnificent structure in human history.</p>
    
    <h2>Distinction from Other Cities</h2>
    <p>Stout and tall, with gray hair, Mr. Stuart Blair, who visited Angkor Wat for the first time, described with a happy face:</p>
    
    <blockquote style="border-left: 4px solid #D4AF37; padding-left: 16px; margin: 20px 0; font-style: italic;">
      "It's truly amazing. I've seen amazing architecture that the world has never had before. It's thousands of years old. Besides the temples, in Siem Reap, it's a big city and there are many other tourist areas. Siem Reap has adequate infrastructure, while waste management is also sufficient, which makes it different from Sihanoukville."
    </blockquote>
    
    <h2>Travel Tips</h2>
    <ul>
      <li>It's better to go for sunrise viewing</li>
      <li>Meet with a tour guide to get detailed information about history</li>
      <li>Dress appropriately and comfortably for walking</li>
      <li>Bring water and sun protection</li>
      <li>Buy tickets before going to visit</li>
    </ul>
  `,
    },
    {
      id: 5,
      title:
        language === "km"
          ? "ប្រវត្តិចក្រភពខ្មែរ"
          : "History of the Khmer Empire",
      category: "history",
      author: language === "km" ? "អ្នកប្រវត្តិសាស្ត្រ" : "Historian",
      date: "2025-03-20",
      readTime: language === "km" ? "១០ នាទី" : "10 min read",
      image: `${Hist}`,
      excerpt:
        language === "km"
          ? "ចក្រភពខ្មែរជាអាណាចក្រដ៏ធំនៅអាស៊ីអាគ្នេយ៍..."
          : "The Khmer Empire was a great kingdom in Southeast Asia...",
      content:
        language === "km"
          ? `
    <h2>ការកើតឡើងនៃចក្រភពខ្មែរ</h2>
    <p>ចក្រភពខ្មែរបានកាន់កាប់ផ្ទៃដីធំជាងគេនៅអាស៊ីអាគ្នេយ៍ ដោយមានអាណាខេត្តលាតសន្ធឹងពីវៀតណាមទៅភូមា និងពីឡាវទៅម៉ាឡេស៊ី។ ចក្រភពនេះបានគ្រប់គ្រងតំបន់ភាគច្រើននៃឧបទ្វីបឥណ្ឌូចិនក្នុងសម័យរុងរឿងរបស់ខ្លួន។</p>
    
    <img src="${Hist1}" alt="ចក្រភពខ្មែរ" style="width: 100%; height: auto; border-radius: 8px; margin: 20px 0;" />
    
    <h2>សម័យកាលសំខាន់ៗ</h2>
    <ul>
      <li><strong>សតវត្សរ៍ទី៩-១៥៖</strong> សម័យអង្គរ - យុគសម័យមាសរបស់ចក្រភពខ្មែរ</li>
      <li><strong>សតវត្សរ៍ទី៩៖</strong> ព្រះបាទជ័យវរ្ម័នទី២ បង្កើតចក្រភព និងបង្កើតទីក្រុងហរិហរាលយៈ</li>
      <li><strong>សតវត្សរ៍ទី១២៖</strong> ព្រះបាទសូរ្យវរ្ម័នទី២ សាងអង្គរវត្ត ប្រាសាទដ៏ធំបំផុតនៅលើពិភពលោក</li>
      <li><strong>សតវត្សរ៍ទី១៣៖</strong> ព្រះបាទជ័យវរ្ម័នទី៧ សាងបាយ័ន និងប្រព័ន្ធផ្លូវថ្នល់ដ៏ធំ</li>
    </ul>
    
    <h2>អាណាចក្រដ៏ធំធេង</h2>
    <p>នៅចុងសតវត្សរ៍ទី១២ ចក្រភពខ្មែរបានឈានទៅដល់កំពូលអំណាច ដោយមានផ្ទៃដីលាតសន្ធឹងជាង ១ លានគីឡូម៉ែត្រការ៉េ។ អាណាចក្រនេះរួមមាន៖</p>
    
    <ul>
      <li>ប្រទេសកម្ពុជាបច្ចុប្បន្ន</li>
      <li>ផ្នែកខ្លះនៃវៀតណាម ឡាវ ថៃ និងម៉ាឡេស៊ី</li>
      <li>តំបន់ដីសណ្ដភាគខាងត្បូងនៃភូមា</li>
    </ul>
    
    <h2>ប្រព័ន្ធគ្រប់គ្រងដ៏ចម្រុះ</h2>
    <p>ចក្រភពខ្មែរមានប្រព័ន្ធគ្រប់គ្រងដ៏ស្មុគស្មាញ ដែលរួមមាន៖</p>
    
    <ul>
      <li><strong>ប្រព័ន្ធធារាសាស្ត្រ៖</strong> បារាយណ៍ និងប្រព័ន្ធបង្ហូរទឹកដ៏ធំ</li>
      <li><strong>បណ្តាញផ្លូវថ្នល់៖</strong> ផ្លូវថ្នល់ដែលភ្ជាប់ទីក្រុងសំខាន់ៗ</li>
      <li><strong>ប្រព័ន្ធពាណិជ្ជកម្ម៖</strong> ការធ្វើពាណិជ្ជកម្មជាមួយចិន ឥណ្ឌា និងប្រទេសដទៃទៀត</li>
    </ul>
    <img src="${Hist2}" alt="ចក្រភពខ្មែរ" style="width: 100%; height:400px; border-radius: 8px; margin: 20px 0;"  />
    <h2>ស្នាដៃស្ថាបត្យកម្ម</h2>
    <p>ចក្រភពខ្មែរបានបន្សល់ទុកនូវស្នាដៃវប្បធម៌ដ៏អស្ចារ្យ ជាពិសេសប្រាសាទអង្គរវត្ត ដែលជាប្រាសាទដ៏ធំបំផុតនៅលើពិភពលោក។ ស្នាដៃសំខាន់ៗរួមមាន៖</p>
    
    <ul>
      <li><strong>អង្គរវត្ត៖</strong> ប្រាសាទហិនឌូដែលតំណាងឱ្យភ្នំមេរុ</li>
      <li><strong>បាយ័ន៖</strong> ប្រាសាទព្រះពុទ្ធដែលល្បីល្បាញដោយមុខព្រះអវលោកេស្វរៈ</li>
      <li><strong>តាព្រហ្ម៖</strong> ប្រាសាទដែលល្បីដោយសារតែឫសឈើដុះគ្រប</li>
      <li><strong>បានតេយ៍ស្រេះ៖</strong> ប្រាសាទភ្នំដែលសាងឡើងដោយថ្មភក់</li>
    </ul>
    
    <h2>ស្នាដៃវប្បធម៌ផ្សេងទៀត</h2>
    <p>ក្រៅពីស្ថាបត្យកម្ម ចក្រភពខ្មែរក៏មានស្នាដៃវប្បធម៌ដ៏សំខាន់ផ្សេងទៀត៖</p>
    
    <ul>
      <li><strong>សិល្បៈរបាំ៖</strong> របាំអប្សារាដែលមានប្រវត្តិរាប់ពាន់ឆ្នាំ</li>
      <li><strong>អក្សរសាស្ត្រ៖</strong> សិលាចារឹកនៅលើប្រាសាទផ្សេងៗ</li>
      <li><strong>វិទ្យាសាស្ត្រ៖</strong> ចំណេះដឹងខាងតារាសាស្ត្រ និងគណិតវិទ្យា</li>
      <li><strong>កសិកម្ម៖</strong> បច្ចេកទេសដាំដុះដ៏ក្លៀវក្លា</li>
    </ul>
    
    <h2>ការធ្លាក់ចុះនៃចក្រភព</h2>
    <p>ចក្រភពខ្មែរបានចាប់ផ្តើមធ្លាក់ចុះក្នុងសតវត្សរ៍ទី១៣ ដោយសារតែ៖</p>
    
    <ul>
      <li>ការឈ្លានពានពីប្រទេសជិតខាង</li>
      <li>បញ្ហាបរិស្ថាន និងការប្រែប្រួលអាកាសធាតុ</li>
      <li>ការធ្លាក់ចុះនៃប្រព័ន្ធធារាសាស្ត្រ</li>
      <li>ការផ្លាស់ប្តូរសាសនា ពីហិណ្ឌូទៅព្រះពុទ្ធសាសនា</li>
    </ul>
    
    <h2>មរតកដែលនៅសេសសល់</h2>
    <p>ទោះបីជាចក្រភពខ្មែរបានធ្លាក់ចុះក៏ដោយ ក៏វាបានបន្សល់ទុកនូវមរតកដ៏យូរអង្វែង៖</p>
    
    <ul>
      <li>ប្រាសាទអង្គរដែលក្លាយជាតំណាងឱ្យអត្តសញ្ញាណជាតិខ្មែរ</li>
      <li>វប្បធម៌ និងប្រពៃណីដែលនៅតែមានឥទ្ធិពលលើសង្គមខ្មែរសព្វថ្ងៃ</li>
      <li>ប្រព័ន្ធសរសេរ និងភាសាដែលបន្តរស់រាន</li>
      <li>ការទទួលស្គាល់ពីអង្គការយូណេស្កូជាបេតិកភណ្ឌពិភពលោក</li>
    </ul>
  `
          : `
    <h2>Rise of the Khmer Empire</h2>
    <p>The Khmer Empire controlled the largest territory in Southeast Asia, with territories stretching from Vietnam to Burma and from Laos to Malaysia. This empire ruled most of the Indochinese peninsula during its glorious era.</p>
    
  <img scr="${Hist1}" alt="ចក្រភពខ្មែរ" style="width: 100%; height: auto; border-radius: 8px; margin: 20px 0;"  />
    <h2>Major Periods</h2>
    <ul>
      <li><strong>9th-15th Century:</strong> Angkor Period - The golden age of the Khmer Empire</li>
      <li><strong>9th Century:</strong> King Jayavarman II establishes the empire and founds the city of Hariharalaya</li>
      <li><strong>12th Century:</strong> King Suryavarman II builds Angkor Wat, the largest temple in the world</li>
      <li><strong>13th Century:</strong> King Jayavarman VII builds Bayon and the great road system</li>
    </ul>
    
    <h2>The Vast Kingdom</h2>
    <p>By the end of the 12th century, the Khmer Empire reached its peak of power, with territory spanning over 1 million square kilometers. This kingdom included:</p>
    
    <ul>
      <li>Present-day Cambodia</li>
      <li>Parts of Vietnam, Laos, Thailand, and Malaysia</li>
      <li>The southern region of Burma</li>
    </ul>
    
    <h2>Sophisticated Governance System</h2>
    <p>The Khmer Empire had a complex governance system that included:</p>
    
    <ul>
      <li><strong>Hydraulic System:</strong> Large reservoirs and water management systems</li>
      <li><strong>Road Network:</strong> Highways connecting major cities</li>
      <li><strong>Trading System:</strong> Trade with China, India, and other countries</li>
    </ul>
    
    <h2>Architectural Achievements</h2>
    <p>The Khmer Empire left behind amazing cultural achievements, especially Angkor Wat, which is the largest temple in the world. Major achievements include:</p>
    
    <ul>
      <li><strong>Angkor Wat:</strong> Hindu temple representing Mount Meru</li>
      <li><strong>Bayon:</strong> Buddhist temple famous for its Avalokitesvara faces</li>
      <li><strong>Ta Prohm:</strong> Temple famous for tree roots covering it</li>
      <li><strong>Banteay Srei:</strong> Mountain temple built with pink sandstone</li>
    </ul>
    
    <h2>Other Cultural Achievements</h2>
    <p>Besides architecture, the Khmer Empire also had other important cultural achievements:</p>
    
    <ul>
      <li><strong>Dance Art:</strong> Apsara dance with thousands of years of history</li>
      <li><strong>Literature:</strong> Inscriptions on various temples</li>
      <li><strong>Science:</strong> Knowledge of astronomy and mathematics</li>
      <li><strong>Agriculture:</strong> Advanced farming techniques</li>
    </ul>
      <img scr="${Hist2}" alt="ចក្រភពខ្មែរ" style="width: 100%; height: auto; border-radius: 8px; margin: 20px 0;"  />
    <h2>Decline of the Empire</h2>
    <p>The Khmer Empire began to decline in the 13th century due to:</p>
    
    <ul>
      <li>Invasions from neighboring countries</li>
      <li>Environmental problems and climate change</li>
      <li>Decline of the hydraulic system</li>
      <li>Religious changes from Hinduism to Buddhism</li>
    </ul>
    
    <h2>Lasting Legacy</h2>
    <p>Although the Khmer Empire declined, it left behind a lasting legacy:</p>
    
    <ul>
      <li>Angkor temples that became symbols of Khmer national identity</li>
      <li>Culture and traditions that still influence Cambodian society today</li>
      <li>Writing system and language that continue to thrive</li>
      <li>UNESCO recognition as World Heritage sites</li>
    </ul>
  `,
    },
    {
      id: 6,
      title: language === "km" ? "ពិធីបុណ្យអុំទូក" : "Water Festival",
      category: "events",
      author: language === "km" ? "អ្នករៀបចំ" : "Organizer",
      date: "2025-03-15",
      readTime: language === "km" ? "៤ នាទី" : "4 min read",
      image: `${Omtuk}`,
      excerpt:
        language === "km"
          ? "ព្រះរាជពិធីបុណ្យ អុំទូក បណ្តែតប្រទីប និងសំពះព្រះខែ អកអំបុក តែងតែប្រារព្ធក្នុងរយៈពេល៣ថ្ងៃ គឺពីថ្ងៃ១៤កើត ១៥កើត និងថ្ងៃ១រោច ខែកត្តិក ..."
          : "The Royal Festival of Water Rafting, Floating Boats, and Moon Worship, Ak Ambok, is always celebrated for 3 days, from the 14th and 15th of the lunar month, and the 1st of the lunar month, Kathik....",
      content:
        language === "km"
          ? `
      <h2>បុណ្យអុំទូក</h2>
      <p>បុណ្យទឹកមានការប្រណាំងទូកនិងល្បែងទឹកដ៏អស្ចារ្យ។ ពិធីនេះត្រូវបានប្រារព្ធឡើងនៅរាជធានីភ្នំពេញ នៅតាមដងទន្លេមេគង្គ និងទន្លេសាប។</p>
      
      <h2>សកម្មភាពសំខាន់</h2>
      <ul>
        <li>ការប្រណាំងទូកប្រពៃណី</li>
        <li>ការបណ្តែតប្រទីបនៅលើទន្លេ</li>
        <li>ការសំពះព្រះខែ</li>
        <li>លេងអកអំបុក</li>
        <li>លែងរបាំប្រពៃណី</li>
      </ul>
      
      <h2>សារៈសំខាន់</h2>
      <p>បុណ្យនេះគឺដើម្បីអរគុណដល់ទន្លេ និងស្តែងនូវការគោរពចំពោះធាតុទឹក ដែលជាប្រភពនៃជីវិត។ វាក៏ជាឱកាសដើម្បីប្រមូលផ្តុំគ្រួសារ និងមិត្តភក្តិផងដែរ។</p>
    `
          : `
      <h2>Water Festival</h2>
      <p>Water Festival features boat races and amazing water games. This ceremony is celebrated in Phnom Penh capital, along the Mekong River and Tonle Sap River.</p>
      
      <h2>Main Activities</h2>
      <ul>
        <li>Traditional boat racing</li>
        <li>Floating lanterns on the river</li>
        <li>Moon worship</li>
        <li>Ak Ambok games</li>
        <li>Traditional music and dance</li>
      </ul>
      
      <h2>Significance</h2>
      <p>This festival is to give thanks to the rivers and show respect to the water element, which is the source of life. It's also an opportunity to gather family and friends.</p>
    `,
    },
  ];

  useEffect(() => {
    // Find the current article
    const foundArticle = articles.find(
      (article) => article.id === parseInt(id)
    );
    setArticle(foundArticle);

    // Find related articles (same category, excluding current)
    if (foundArticle) {
      const related = articles
        .filter(
          (a) =>
            a.category === foundArticle.category && a.id !== foundArticle.id
        )
        .slice(0, 3);
      setRelatedArticles(related);
    }
  }, [id, language]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.excerpt,
          url: window.location.href,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert(language === "km" ? "ចម្លងរួចរាល់!" : "Copied to clipboard!");
    }
  };

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2
            className={`text-2xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {language === "km" ? "រកមិនឃើញអត្ថបទ" : "Article Not Found"}
          </h2>
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 bg-angkor-gold text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>
              {language === "km" ? "ត្រលប់ទៅទំព័រអត្ថបទ" : "Back to Blog"}
            </span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="bg-angkor-gold text-white px-3 py-1 rounded-full text-sm font-bold">
              {article.category}
            </span>
          </div>

          <h1
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 khmer-text ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 mb-6 text-sm">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4 text-gray-400" />
              <span className={darkMode ? "text-gray-300" : "text-gray-600"}>
                {article.author}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-gray-400" />
              <span className={darkMode ? "text-gray-300" : "text-gray-600"}>
                {article.date}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-gray-400" />
              <span className={darkMode ? "text-gray-300" : "text-gray-600"}>
                {article.readTime}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4 mb-8">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                isLiked
                  ? "text-red-500 bg-red-50 dark:bg-red-900/20"
                  : darkMode
                  ? "text-gray-400 hover:text-red-500 hover:bg-gray-700"
                  : "text-gray-400 hover:text-red-500 hover:bg-gray-100"
              }`}
            >
              <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
              <span>{language === "km" ? "ចូលចិត្ត" : "Like"}</span>
            </button>

            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                isBookmarked
                  ? "text-blue-500 bg-blue-50 dark:bg-blue-900/20"
                  : darkMode
                  ? "text-gray-400 hover:text-blue-500 hover:bg-gray-700"
                  : "text-gray-400 hover:text-blue-500 hover:bg-gray-100"
              }`}
            >
              <Bookmark
                className={`w-5 h-5 ${isBookmarked ? "fill-current" : ""}`}
              />
              <span>{language === "km" ? "រក្សាទុក" : "Save"}</span>
            </button>

            <button
              onClick={handleShare}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:text-gray-300 dark:hover:bg-gray-700"
            >
              <Share2 className="w-5 h-5" />
              <span>{language === "km" ? "ចែករំលែក" : "Share"}</span>
            </button>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8 rounded-2xl overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none mb-16">
          <div
            className={`${darkMode ? "prose-invert" : ""}`}
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>

        {/* Tags */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2">
            <span
              className={`font-medium ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {language === "km" ? "ស្លាក៖" : "Tags:"}
            </span>
            {[article.category, "cambodia", "culture"].map((tag, index) => (
              <span
                key={index}
                className={`px-3 py-1 rounded-full text-sm ${
                  darkMode
                    ? "bg-gray-700 text-gray-300"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="mb-16">
            <h2
              className={`text-2xl font-bold mb-8 khmer-text ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {language === "km" ? "អត្ថបទពាក់ព័ន្ធ" : "Related Articles"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <Link
                  key={relatedArticle.id}
                  to={`/blog/${relatedArticle.id}`}
                  className={`block rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                    darkMode ? "bg-gray-800" : "bg-white"
                  }`}
                >
                  <div className="h-40 overflow-hidden">
                    <img
                      src={relatedArticle.image}
                      alt={relatedArticle.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3
                      className={`font-bold mb-2 line-clamp-2 khmer-text ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {relatedArticle.title}
                    </h3>
                    <p
                      className={`text-sm mb-2 ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {relatedArticle.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{relatedArticle.date}</span>
                      <span>{relatedArticle.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Newsletter Signup */}
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
            {language === "km" ? "ចូលរួមជាមួយយើង" : "Join Our Community"}
          </h3>
          <p className={`mb-6 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            {language === "km"
              ? "ទទួលយកអត្ថបទថ្មីៗអំពីវប្បធម៌ខ្មែរតាមអ៊ីមែល"
              : "Get new articles about Khmer culture delivered to your inbox"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder={language === "km" ? "អ៊ីមែលរបស់អ្នក" : "Your email"}
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
    </div>
  );
};

export default DetailedBlog;
