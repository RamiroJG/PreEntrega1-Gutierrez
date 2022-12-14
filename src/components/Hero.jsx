const Hero = () => {
  return (
    <>
    <img src="./src/assets/img/fondoD.png" alt=""  className="absolute desaparece"/>
    <div className="container md:flex items-center mx-auto justify-center pt-7 relative p-3 ">
      <div>
        <img 
            src="./src/assets/img/hero1.png" 
            alt="banner img"
            className="mx-auto w-2/4 md:w-3/4"
          />
      </div>
      <div className=" uppercase">
        <p className="font-fuenteJP w-1/2 mb-4 md:text-left text-center mx-auto md:mx-0 md:text-4xl text-sm text-white">enjoy our snacks as well as our Mangas.</p>
        <a 
          href="#"
          className="
          font-fuenteJP 
          p-3 rounded-md 
          bg-button 
          text-white 
          drop-shadow-2xl 
          block 
          text-center 
          w-1/3 
          mx-auto 
          md:mx-0
          hover:bg-red-800
          transition-all
          "
        >
          Buy now!
        </a>
      </div>
      
    </div>
    <img src="./src/assets/img/fondoI.png" alt="" className="flex margin container w-72 absolute desaparece"/>
    </>
    
  )
}

export default Hero