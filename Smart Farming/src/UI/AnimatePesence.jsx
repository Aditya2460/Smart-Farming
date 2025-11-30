

import { motion, AnimatePresence } from "framer-motion"; 


const AnimatePresence=()=>{

    return <>
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
    </>
}

export default AnimatePresence;