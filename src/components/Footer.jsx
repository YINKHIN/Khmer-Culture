import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext, LanguageContext } from "../App";
import Logo from "/angkorwat.jpg"
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Heart,
} from "lucide-react";

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);
  const { t } = useContext(LanguageContext);

  const footerSections = [
    {
      title: "វប្បធម៌កម្ពុជា",
      links: [
        { label: t.home, path: "/" },
        { label: t.history, path: "/history" },
        { label: t.cuisine, path: "/cuisine" },
        { label: t.clothing, path: "/clothing" },
      ],
    },
    {
      title: "ការរីករាល់",
      links: [
        { label: t.tourism, path: "/tourism" },
        { label: t.arts, path: "/arts" },
        { label: t.festivals, path: "/festivals" },
        { label: t.language, path: "/language" },
      ],
    },
    {
      title: "ធនធាន",
      links: [
        { label: t.blog, path: "/blog" },
        { label: t.contact, path: "/contact" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "Youtube" },
  ];

  const contactInfo = [
    { icon: MapPin, text: "ភ្នំពេញ, កម្ពុជា" },
    { icon: Phone, text: "+៨៥៥ ២៣ ៩៨៧ ៦៥៤" },
    { icon: Mail, text: "info@cambodianculture.kh" },
  ];

  return (
    <footer
      className={`${
        darkMode
          ? "bg-gray-800 border-t border-gray-700"
          : "bg-gray-50 border-t border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-angkor-gold to-temple-stone rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">
                    <img className="rounded-full w-10 h-10" src={Logo} alt="Angkor Wat" />
                </span>
              </div>
              <span
                className={`font-bold text-xl khmer-text ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                វប្បធម៌កម្ពុជា
              </span>
            </div>

            <p
              className={`text-sm leading-relaxed ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {t.cambodiaCulture}
            </p>

            <div className="flex items-center space-x-2">
              <Heart
                className={`w-4 h-4 ${
                  darkMode ? "text-red-400" : "text-red-500"
                }`}
              />
              <span
                className={`text-sm ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                បង្កើតឡើងដោយស្នេហាវប្បធម៌
              </span>
            </div>
          </div>

          {/* Navigation Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3
                className={`font-semibold text-lg mb-4 khmer-text ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className={`text-sm transition-colors duration-200 hover:text-angkor-gold ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div
          className={`mt-8 pt-8 border-t ${
            darkMode ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Details */}
            <div>
              <h3
                className={`font-semibold text-lg mb-4 khmer-text ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                ទំនាក់ទំនង
              </h3>
              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <info.icon
                      className={`w-4 h-4 ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {info.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3
                className={`font-semibold text-lg mb-4 khmer-text ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                បណ្តាញសង្គម
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`p-2 rounded-lg transition-all duration-200 ${
                      darkMode
                        ? "text-gray-300 hover:text-white hover:bg-gray-700"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className={`mt-8 pt-8 border-t text-center ${
            darkMode ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <p
            className={`text-sm ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
