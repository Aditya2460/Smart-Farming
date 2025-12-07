
  
// import { Outlet } from "react-router-dom";
import Footer from "./UI/Footer";
import Header from "./UI/Header";
import './index.css'


import Section from "./UI/Section";
import SwiperSlider from "./UI/Swiper";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import axios from "axios";
import Navbar from "./UI/Navbar";
import Hero from "./UI/Hero";
import Seasional_crop from "./UI/Seasional_crops";

// ✅ API key setup
const PERENUAL_API_KEY = "sk-FtUu68efeeca5818f12930"; // Replace with your actual API key from Perenual

// ✅ Navbar Component



// ✅ Main App Component (handles search, fetching, and rendering crop data)
function App() {
  // 🌿 State Management
  const [plants, setPlants] = useState([]);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);

  const indianSeasonalCropNames = [
  "Rice",
  "Wheat",
  "Maize",
  "Cotton",
  "Sugarcane",
  "Millet"
];

  // 🌿 Function: Fetch plant data based on user query
  async function fetchPlants(q) {
    if (!q) {
      setPlants([]);
      return;
    }
    setLoading(true);
    try {
      const resp = await axios.get(
        `https://perenual.com/api/v2/species-list?key=${PERENUAL_API_KEY}&q=${encodeURIComponent(q)}`
      );
      setPlants(resp.data.data || []);
    } catch (err) {
      console.error("Error fetching plants:", err);
      setPlants([]);
    } finally {
      setLoading(false);
    }
  }



  // Seasional crop data fetching

// State for regular searched crops
// const [plants, setPlants] = useState([]);

// State for seasonal crops
const [seasonalCrops, setSeasonalCrops] = useState([]);

  useEffect(() => {
  const fetchSeasonalCrops = async () => {
    try {
      const results = await Promise.all(
        indianSeasonalCropNames.map(async (crop) => {
          const res = await axios.get(
            `https://perenual.com/api/v2/species-list?key=${PERENUAL_API_KEY}&q=${crop}`
          );
          return res.data.data[0]; // Take the first matching crop
        })
      );

      setSeasonalCrops(results.filter(Boolean));
    } catch (error) {
      console.error("Error fetching seasonal crops", error);
    }
  };

  fetchSeasonalCrops();
}, []);

  // 🌿 Function: Fetch plant details when a card is clicked
  async function fetchPlantDetails(id) {
    try {
      const resp = await axios.get(
        `https://perenual.com/api/v2/species/details/${id}?key=${PERENUAL_API_KEY}`
      );
      return resp.data;
    } catch (err) {
      console.error("Error fetching plant detail:", err);
      return null;
    }
  }

  // 🌿 Effect: Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchPlants(query);
    }, 500);
    return () => clearTimeout(timer);
  }, [query]);


  return (
    <div className="min-h-screen flex flex-col bg-green-50">
      {/* <Navbar /> */}
      <Header/>
      <Hero />

      {/* ✅ Main Content Section */}
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* 🔍 Search Bar */}
        <div className="flex items-center w-500 h-fit gap-2 max-w-md mx-auto">
          <FiSearch className="w-5 h-5 text-gray-400" />
          <input
            className="p-2 rounded border w-full"
            placeholder="Search plant or crop..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {/* ⏳ Loading Indicator */}
        {loading && <p className="mt-6 text-center">Loading…</p>}

        {/* 🌿 Crop Cards Section */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plants.map((pl) => (
            <motion.div
              key={pl.id}
              className="bg-white rounded-lg shadow cursor-pointer overflow-hidden hover:shadow-lg"
              whileHover={{ scale: 1.03 }}
              onClick={async () => {
                const detail = await fetchPlantDetails(pl.id);
                setSelected(detail);
              }}
            >
              <img
                src={pl.default_image?.medium_url}
                alt={pl.common_name}
                className="h-40 w-full object-cover"
              />
              <div className="p-3">
                <h3 className="text-lg font-semibold text-green-700">{pl.common_name}</h3>
                <p className="text-sm text-gray-600">
                  {pl.scientific_name?.join(", ")}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        {/* 🌾 Seasonal Crops Section */}
{/* ============================ */}
<Seasional_crop seasonalCrops= {seasonalCrops} ></Seasional_crop>


        {/* 🌱 Plant Details Modal */}
        <AnimatePresence>
          {console.log(selected)}
          {selected && (
            <motion.div
              className="fixed inset-0 bg-black/50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white rounded-xl max-w-md w-full p-6 shadow-lg overflow-auto max-h-[90vh] relative"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
              >
                {/* ❌ Close Button */}
                <button
                  className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
                  onClick={() => setSelected(null)}
                >
                  ✕
                </button>

                {/* 🖼️ Plant Image */}
                <img
                  src={selected.default_image?.regular_url}
                  alt={selected.common_name}
                  className="h-48 w-full object-cover rounded-lg"
                />

                {/* 🌿 Plant Info */}
                <h2 className="text-2xl font-bold mt-4 text-green-800">
                  {selected.common_name}
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  {selected.scientific_name?.join(", ")}
                </p>

                <div className="text-sm text-gray-700 space-y-2">
                  <p><strong>Watering:</strong> {selected.watering}</p>
                  <p><strong>Sunlight:</strong> {selected.sunlight}</p>
                  {selected.soil && <p><strong>Soil:</strong> {selected.soil}</p>}
                  {selected.care_level && (
                    <p><strong>Care Level:</strong> {selected.care_level}</p>
                  )}

                  {/* 🌸 Plant Anatomy */}
                  {selected.plant_anatomy && (
                    <>
                      <h4 className="font-semibold mt-2">Plant Parts</h4>
                      <ul className="list-disc list-inside">
                        {selected.plant_anatomy.map((part, idx) => (
                          <li key={idx}>
                            {part.part}: {part.color?.join(", ")}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* ✅ Footer Section */}
      <Footer />
    </div>
  );
}

export default App;