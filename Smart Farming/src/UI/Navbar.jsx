const Navbar=()=>{
    return <>
    <nav className="bg-green-700 text-white p-4 flex justify-between items-center shadow-md">
    <h1 className="text-2xl font-bold">🌾 CropLearn</h1>
    <ul className="flex space-x-6">
      <li className="hover:text-green-200 cursor-pointer">Home</li>
      <li className="hover:text-green-200 cursor-pointer">About</li>
      <li className="hover:text-green-200 cursor-pointer">Contact</li>
    </ul>
  </nav>
    </>
}
export default Navbar;