import React, { useContext, useState } from "react";
import { LanguageContext, ThemeContext } from "../App";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageSquare,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

const Contact = () => {
  const { t, language } = useContext(LanguageContext);
    const { darkMode } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage(
        language === "km"
          ? "សាររបស់អ្នកបានផ្ញើដោយជោគជ័យ! យើងខ្ញុំនឹងទាក់ទងអ្នកក្នុងពេលឆាប់ៗ។"
          : "Your message has been sent successfully! We will contact you soon."
      );
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: language === "km" ? "អ៊ីមែល" : "Email",
      content: "info@cambodianculture.kh",
      description: language === "km" ? "ផ្ញើសារមកយើង" : "Send us an email",
    },
    {
      icon: Phone,
      title: language === "km" ? "ទូរស័ព្ទ" : "Phone",
      content: "+855 23 987 654",
      description: language === "km" ? "ហៅយើងឥឡូវនេះ" : "Call us now",
    },
    {
      icon: MapPin,
      title: language === "km" ? "ទីតាំង" : "Location",
      content: "ភ្នំពេញ, កម្ពុជា",
      description: language === "km" ? "មកជួបយើង" : "Visit us",
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "Youtube" },
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
            {t.contactTitle}
          </h1>
          <p
            className={`text-lg max-w-3xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {language === "km"
              ? "យើងខ្ញុំស្វាគមន៍សំណួរ សំណូមពរ និងមតិយោបល់របស់អ្នក"
              : "We welcome your questions, suggestions, and feedback"}
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl text-center ${
                darkMode ? "bg-gray-800" : "bg-white"
              } shadow-lg transition-all duration-300 transform hover:scale-105`}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-angkor-gold to-temple-stone rounded-full flex items-center justify-center mx-auto mb-6">
                <info.icon className="w-8 h-8 text-white" />
              </div>
              <h3
                className={`text-xl font-bold mb-2 khmer-text ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {info.title}
              </h3>
              <p
                className={`text-lg font-medium mb-2 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {info.content}
              </p>
              <p
                className={`text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {info.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2
              className={`text-2xl font-bold mb-8 khmer-text ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {language === "km" ? "ផ្ញើសារមកយើង" : "Send us a message"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {t.name}
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 transition-colors duration-200 ${
                      darkMode
                        ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-angkor-gold"
                        : "bg-white border-gray-200 text-gray-900 placeholder-gray-500 focus:border-angkor-gold"
                    }`}
                    placeholder={
                      language === "km" ? "ឈ្មោះរបស់អ្នក" : "Your name"
                    }
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {language === "km" ? "អ៊ីមែល" : "Email"}
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 transition-colors duration-200 ${
                      darkMode
                        ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-angkor-gold"
                        : "bg-white border-gray-200 text-gray-900 placeholder-gray-500 focus:border-angkor-gold"
                    }`}
                    placeholder={
                      language === "km" ? "អ៊ីមែលរបស់អ្នក" : "Your email"
                    }
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {language === "km" ? "ប្រធានបទ" : "Subject"}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-colors duration-200 ${
                    darkMode
                      ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-angkor-gold"
                      : "bg-white border-gray-200 text-gray-900 placeholder-gray-500 focus:border-angkor-gold"
                  }`}
                  placeholder={
                    language === "km" ? "ប្រធានបទសារ" : "Message subject"
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {t.message}
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 transition-colors duration-200 resize-none ${
                      darkMode
                        ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-angkor-gold"
                        : "bg-white border-gray-200 text-gray-900 placeholder-gray-500 focus:border-angkor-gold"
                    }`}
                    placeholder={
                      language === "km" ? "សាររបស់អ្នក..." : "Your message..."
                    }
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center space-x-2 py-4 px-6 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-angkor-gold to-temple-stone hover:from-yellow-600 hover:to-yellow-700"
                } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>
                      {language === "km" ? "កំពុងផ្ញើ..." : "Sending..."}
                    </span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>
                      {language === "km" ? "ផ្ញើសារ" : "Send Message"}
                    </span>
                  </>
                )}
              </button>

              {submitMessage && (
                <div
                  className={`p-4 rounded-xl ${
                    darkMode
                      ? "bg-green-900/20 text-green-300"
                      : "bg-green-50 text-green-700"
                  }`}
                >
                  {submitMessage}
                </div>
              )}
            </form>
          </div>

          {/* Additional Information */}
          <div>
            <h2
              className={`text-2xl font-bold mb-8 khmer-text ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {language === "km" ? "ព័ត៌មានបន្ថែម" : "Additional Information"}
            </h2>

            <div className="space-y-8">
              {/* Business Hours */}
              <div
                className={`p-6 rounded-xl ${
                  darkMode ? "bg-gray-800" : "bg-white"
                } shadow-lg`}
              >
                <h3
                  className={`text-lg font-bold mb-4 khmer-text ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {language === "km" ? "ម៉ោងធ្វើការ" : "Business Hours"}
                </h3>
                <div
                  className={`space-y-2 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  <div className="flex justify-between">
                    <span>
                      {language === "km" ? "ច័ន្ទ-សុក្រ" : "Monday-Friday"}
                    </span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{language === "km" ? "សៅរ៍" : "Saturday"}</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{language === "km" ? "អាទិត្យ" : "Sunday"}</span>
                    <span>{language === "km" ? "បិទ" : "Closed"}</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div
                className={`p-6 rounded-xl ${
                  darkMode ? "bg-gray-800" : "bg-white"
                } shadow-lg`}
              >
                <h3
                  className={`text-lg font-bold mb-4 khmer-text ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {language === "km" ? "បណ្តាញសង្គម" : "Social Media"}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                        darkMode
                          ? "bg-gray-700 hover:bg-angkor-gold"
                          : "bg-gray-100 hover:bg-angkor-gold"
                      } hover:text-white`}
                    >
                      <social.icon className="w-5 h-5" />
                      <span className="text-sm font-medium">
                        {social.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div
                className={`p-6 rounded-xl ${
                  darkMode ? "bg-gray-800" : "bg-white"
                } shadow-lg`}
              >
                <h3
                  className={`text-lg font-bold mb-4 khmer-text ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {language === "km" ? "សំណួរដែលគេសួរញឹកញាប់" : "FAQ"}
                </h3>
                <div
                  className={`space-y-3 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  <div>
                    <p className="font-medium">
                      {language === "km"
                        ? "តើអ្នកផ្តល់ដំណើរកំសាន្តទេ?"
                        : "Do you offer tours?"}
                    </p>
                    <p className="text-sm">
                      {language === "km"
                        ? "បាទ យើងផ្តល់ដំណើរកំសាន្តវប្បធម៌ជាច្រើនប្រភេទ"
                        : "Yes, we offer various cultural tours"}
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">
                      {language === "km"
                        ? "តើអាចរៀនភាសាខ្មែរជាមួយអ្នកទេ?"
                        : "Can I learn Khmer with you?"}
                    </p>
                    <p className="text-sm">
                      {language === "km"
                        ? "បាទ យើងមានវគ្គសិក្សាភាសាខ្មែរ"
                        : "Yes, we have Khmer language courses"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
