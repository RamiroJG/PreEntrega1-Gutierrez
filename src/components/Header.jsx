const Header = () => {
  return (
    <header className="container mx-auto">
        <div className="md:flex justify-around items-center ">
            <div className="text-2xl text-center">
                <a href="../index.html">
                   <img 
                        src="./src/assets/img/LOGO.png" 
                        alt="imagen logo"
                        className="w-40 mx-auto"
                    /> 
                </a>
                
            </div>

            <div className="flex flex-col md:flex-row text-center gap-4 mt-2 items-center">
                <a href="#" className="font-semibold text-sm uppercase">Inicio</a>
                <a href="#" className="font-semibold text-sm uppercase">Nosotros</a>
                <a href="#" className="font-semibold text-sm uppercase">Mangas</a>
                <a href="#" className="font-semibold text-sm uppercase">Comida</a>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-circle" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="12" cy="12" r="9" />
                    <circle cx="12" cy="10" r="3" />
                    <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="6" cy="19" r="2" />
                    <circle cx="17" cy="19" r="2" />
                    <path d="M17 17h-11v-14h-2" />
                    <path d="M6 5l14 1l-1 7h-13" />
                </svg>
            </div>
        </div>
    </header>
  )
}

export default Header