const Header = () => {
  return (
    <header className="">
        <div className="md:flex justify-around items-center">
            <div className="text-2xl text-center">
                <a href="../index.html">
                   <img 
                        src="./src/assets/img/LOGO.png" 
                        alt="imagen logo"
                        className="w-40"
                    /> 
                </a>
                
            </div>

            <div className="flex flex-col md:flex-row text-center gap-4 mt-2">
                <a href="#" className="font-semibold text-sm uppercase">Inicio</a>
                <a href="#" className="font-semibold text-sm uppercase">Nosotros</a>
                <a href="#" className="font-semibold text-sm uppercase">Mangas</a>
                <a href="#" className="font-semibold text-sm uppercase">Contacto</a>
            </div>
        </div>
    </header>
  )
}

export default Header