import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import axios from "axios";
import Navbar from "./UI/Navbar";
import Hero from "./UI/Hero";

// ✅ API key setup
const PERENUAL_API_KEY = "sk-qwLX68efe3a2394a812930"; // Replace with your actual API key from Perenual

// ✅ Navbar Component



// ✅ Main App Component (handles search, fetching, and rendering crop data)
function App() {
  // 🌿 State Management
  const [plants, setPlants] = useState([]);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);

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
}

export default App;