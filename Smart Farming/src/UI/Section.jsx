const Section=()=>{

const Card=[{category:"CATEGORY",name:"The Catalyzer",url:"https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.webp?s=1024x1024&w=is&k=20&c=NQtm4v1Uzp2luv-6f3qORcq9pDtz2H56p8g9Xix8cY0=",content:"Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",views:"1.2K" ,message:"6"},{category:"CATEGORY",name:"The Catalyzer",url:"https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.webp?s=1024x1024&w=is&k=20&c=NQtm4v1Uzp2luv-6f3qORcq9pDtz2H56p8g9Xix8cY0=",content:"Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",views:"1.2K" ,message:"6"},{category:"CATEGORY",name:"The Catalyzer",url:"https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.webp?s=1024x1024&w=is&k=20&c=NQtm4v1Uzp2luv-6f3qORcq9pDtz2H56p8g9Xix8cY0=",content:"Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",views:"1.2K" ,message:"6"}]

    return <>
    <section id="about" class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto swiper-slide" data-swiper-autoplay="2000">
    <div class="flex flex-wrap -m-4">
      {Card.map((i)=>(<div class="p-4 md:w-1/3">
      <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            
      <img class="lg:h-38 object-cover md:h-26 w-full" src={`${i.url}`}alt={`${i.name}`}/>
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{i.category}</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{i.name}</h1>
            <p class="leading-relaxed mb-3">{i.content}.</p>
            <div class="flex items-center flex-wrap ">
              <a href="https://www.iotforall.com/smart-farming-future-of-agriculture" target="_blank" class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>{i.views}
              </span>
              <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>{i.message}
              </span>
            </div>
          </div>

        </div>
        
      </div>
))}
      
    </div>
    
  </div>
</section>
    </>
}
export default Section;