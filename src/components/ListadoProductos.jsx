import React from 'react'

const ListadoProductos = () => {
  return (
    <>
        <div className='pt-12'>
            <div className='text-center mb-10 mt-10 md:mt-0'>
                <h3 
                    className='text-5xl'
                >
                    New revenues
                </h3>
                <p className='text-lg mt-1 text-gray-700 font-semibold'>most wanted products</p>
            </div>

            <div className='grid md:grid-cols-4 gap-4 container mx-auto justify-items-center items-center shadow-md shadow-slate-500 rounded-md p-7'>
                <div className=''>
                    <div className=''>
                        <img 
                            src="./src/assets/img/producto01.png" 
                            alt="" 
                            className='mx-auto transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300' 
                        />
                    </div>

                    <div className='text-center'>
                        <p>chocolate dipped cookies <span className='block'></span></p>
                    </div>
                </div>{/* fin producto 1 */}
                <div>
                    <div>
                        <img 
                            src="./src/assets/img/producto02.png" 
                            alt="" 
                            className='mx-auto transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300' 
                        />
                    </div>

                    <div className='text-center'>
                        <p>Galletas Baston Pepero <span className='block'></span></p>
                    </div>
                </div>{/* fin producto 2 */}
                <div>
                    <div>
                        <img 
                            src="./src/assets/img/producto03.png" 
                            alt="" 
                            className='mx-auto transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300' 
                        />
                    </div>

                    <div className='text-center'>
                        <p>chocolate dipped cookies<span className='block'></span></p>
                    </div>
                </div>{/* fin producto 3 */}
                <div>
                    <div>
                        <img 
                            src="./src/assets/img/producto04.png" 
                            alt="" 
                            className='mx-auto transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300' 
                        />
                    </div>

                    <div className='text-center'>
                        <p>chocolate and peanut sticks <span className='block'></span></p>
                    </div>
                </div>{/* fin producto 4 */}
                <div>
                    <div>
                        <img 
                            src="./src/assets/img/producto05.png" 
                            alt="" 
                            className='mx-auto h-56 transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300' 
                        />
                    </div>

                    <div className='text-center'>
                        <p>Pack x4 Snacks de Fideos Noodle de <span className='block'> Pollo Demon Slayer Surtidos</span></p>
                    </div>
                </div>{/* fin producto 5 */}
                <div>
                    <div>
                        <img 
                            src="./src/assets/img/producto06.png" 
                            alt="" 
                            className='mx-auto h-56 transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300' 
                        />
                    </div>

                    <div className='text-center'>
                        <p>Galletas Baston Pocky <span className='block'> 55 gr sabor Chocolate</span></p>
                    </div>
                </div>{/* fin producto 6 */}
                <div>
                    <div>
                        <img 
                            src="./src/assets/img/producto07.png" 
                            alt="" 
                            className='mx-auto h-56 transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300' 
                        />
                    </div>

                    <div className='text-center'>
                        <p>Galletas Baston Pepero <span className='block'> Original 47 gr</span></p>
                    </div>
                </div>{/* fin producto 7 */}
                <div>
                    <div>
                        <img 
                            src="./src/assets/img/producto08.png" 
                            alt="" 
                            className='mx-auto h-56 transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300' 
                        />
                    </div>

                    <div className='text-center'>
                        <p>Galletas Baston Pocky <span className='block'> 55 gr sabor Frutilla</span></p>
                    </div>
                </div>{/* fin producto 8 */}
            </div>
        </div>
    </>
  )
}

export default ListadoProductos