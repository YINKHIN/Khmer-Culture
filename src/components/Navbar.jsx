import React, { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext, LanguageContext } from "../App";
import Logo from "/angkorwat.jpg"
import {
  Sun,
  Moon,
  Globe,
  Menu,
  X,
  ChevronDown,
  Home,
  BookOpen,
  Utensils,
  Shirt,
  Calendar,
  MapPin,
  Palette,
  MessageCircle,
  Newspaper,
  Mail,
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const { language, toggleLanguage, t } = useContext(LanguageContext);
  const location = useLocation();

  const navItems = [
    { path: "/", label: t.home, icon: Home },
    {
      path: "/culture",
      label: "វប្បធម៌",
      icon: BookOpen,
      dropdown: [
        { path: "/history", label: t.history },
        { path: "/cuisine", label: t.cuisine },
        { path: "/clothing", label: t.clothing },
        { path: "/festivals", label: t.festivals },
      ],
    },
    { path: "/tourism", label: t.tourism, icon: MapPin },
    { path: "/arts", label: t.arts, icon: Palette },
    { path: "/language", label: t.language, icon: MessageCircle },
    { path: "/blog", label: t.blog, icon: Newspaper },
    { path: "/contact", label: t.contact, icon: Mail },
  ];

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        darkMode
          ? "bg-gray-800/95 backdrop-blur-sm border-b border-gray-700"
          : "bg-white/95 backdrop-blur-sm border-b border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-angkor-gold to-temple-stone rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">
                <img className="rounded-full w-10 h-10" src={Logo} alt="Angkor Wat" />
              </span>
            </div>
            <span
              className={`font-bold text-lg khmer-text ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              វប្បធម៌កម្ពុជា 
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => handleDropdownToggle(index)}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                        activeDropdown === index
                          ? darkMode
                            ? "bg-gray-700 text-angkor-gold"
                            : "bg-gray-100 text-angkor-gold"
                          : darkMode
                          ? "text-gray-300 hover:text-white hover:bg-gray-700"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                      <span className="khmer-text text-sm">{item.label}</span>
                      <ChevronDown
                        className={`w-3 h-3 transition-transform duration-200 ${
                          activeDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {activeDropdown === index && (
                      <div
                        className={`absolute top-full left-0 mt-2 w-48 rounded-lg shadow-lg py-2 ${
                          darkMode
                            ? "bg-gray-800 border border-gray-700"
                            : "bg-white border border-gray-200"
                        }`}
                      >
                        {item.dropdown.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.path}
                            className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                              isActive(subItem.path)
                                ? darkMode
                                  ? "text-angkor-gold bg-gray-700"
                                  : "text-angkor-gold bg-gray-100"
                                : darkMode
                                ? "text-gray-300 hover:text-white hover:bg-gray-700"
                                : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                            }`}
                            onClick={() => {
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                            }}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                      isActive(item.path)
                        ? darkMode
                          ? "bg-gray-700 text-angkor-gold"
                          : "bg-gray-100 text-angkor-gold"
                        : darkMode
                        ? "text-gray-300 hover:text-white hover:bg-gray-700"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="khmer-text text-sm">{item.label}</span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Theme and Language Toggles */}
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-200 ${
                darkMode
                  ? "text-gray-300 hover:text-white hover:bg-gray-700"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
              title={darkMode ? t.lightMode : t.darkMode}
            >
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            <button
              onClick={toggleLanguage}
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                darkMode
                  ? "text-gray-300 hover:text-white hover:bg-gray-700"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
              title={t.languageSwitch}
            >
              <Globe className="w-5 h-5" />
              <span className="text-sm font-medium">
                {language === "km" ? "EN" : "KM"}
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-all duration-200 ${
                darkMode
                  ? "text-gray-300 hover:text-white hover:bg-gray-700"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`md:hidden py-4 border-t ${
              darkMode ? "border-gray-700" : "border-gray-200"
            }`}
          >
            {navItems.map((item, index) => (
              <div key={index} className="mb-2">
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => handleDropdownToggle(index)}
                      className={`w-full flex items-center justify-between px-4 py-2 rounded-lg transition-all duration-200 ${
                        activeDropdown === index
                          ? darkMode
                            ? "bg-gray-700 text-angkor-gold"
                            : "bg-gray-100 text-angkor-gold"
                          : darkMode
                          ? "text-gray-300 hover:text-white hover:bg-gray-700"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <item.icon className="w-4 h-4" />
                        <span className="khmer-text">{item.label}</span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {activeDropdown === index && (
                      <div className="mt-2 ml-8 space-y-1">
                        {item.dropdown.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.path}
                            className={`block px-4 py-2 rounded-lg transition-all duration-200 ${
                              isActive(subItem.path)
                                ? darkMode
                                  ? "text-angkor-gold bg-gray-700"
                                  : "text-angkor-gold bg-gray-100"
                                : darkMode
                                ? "text-gray-300 hover:text-white hover:bg-gray-700"
                                : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                            }`}
                            onClick={() => {
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                            }}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                      isActive(item.path)
                        ? darkMode
                          ? "bg-gray-700 text-angkor-gold"
                          : "bg-gray-100 text-angkor-gold"
                        : darkMode
                        ? "text-gray-300 hover:text-white hover:bg-gray-700"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="khmer-text">{item.label}</span>
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
