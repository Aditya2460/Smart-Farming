const Seasional_crop = ({seasonalCrops})=>{
return <>
{/* 🌾 Seasonal Crops Section */}
{/* ============================ */}
<div className="mt-10">
  <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
    Seasonal Crops in India
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {seasonalCrops.map((crop, index) => (
      <div
        key={index}
        className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition"
      >
        <img
          src={crop.default_image?.original_url}
          alt={crop.common_name}
          className="w-full h-40 object-cover"
        />
        <div className="p-4 text-center">
          <h3 className="font-bold text-lg text-gray-800">
            {crop.common_name}
          </h3>
          <p className="text-sm text-gray-500 italic">
            {crop.scientific_name?.[0]}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>
</>

}

export default Seasional_crop;