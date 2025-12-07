import Navbar from "./Navbar";

const Header=()=>{
    return <>
    <header class="fixed z-10 w-full text-gray-600  body-font bg-green-500 text-white  ">
  <div class="container  mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      {/* <svg xmlns="blob:https://in.pinterest.com/833d9241-98cc-4990-80e4-6dc53b63f679" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" >
        
      </svg> */}
      <img src="https://i.pinimg.com/736x/a5/21/e7/a521e77cce4ec082525c298fee400e7b.jpg" className=" w-15 h-15 text-white p-2  rounded-full" alt="logo" />
      <span class="ml-3 text-xl text-white"><a href="https://en.wikipedia.org/wiki/Digital_agriculture">Smart Farming</a></span>
    </a>
  <Navbar>  </Navbar>
    <button class="inline-flex items-center bg-transparent text border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-base mt-4 md:mt-0">Login
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
       <path d="M5 12h14M12 5l7 7-7 7"></path> 
      </svg>
    </button>
  </div>
</header>



    </>
}
export default Header;