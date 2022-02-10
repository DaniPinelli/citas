

const Formulario = () => {
    return (
        <div className="md:w-1/2 lg:w-2/5" >
            <h2 className="font-black text-3xl text-center" >Seguimiento Pacientes</h2>

            <p className="text-lg mt-5 text-center " >
                Agregar Pacientes {''}
                <span className="text-indigo-600 font-bold " >Administrar</span>
            </p>

            <form className="bg-white shadow-md rounded-lg py-2 px-5" >
                <div className="mt-5" >
                    <label className="block text-gray-800 uppercase font-bold" htmlFor="mascota" >Nombre Mascota</label>
                    <input id="mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md" type="text" placeholder="Nombre de mascota" />
                </div>
                <div className="mt-5" >
                    <label className="block text-gray-800 uppercase font-bold" htmlFor="propietario" >Nombre  Propietario</label>
                    <input id="propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md" type="text" placeholder="Nombre de propietario" />
                </div>
                <div className="mt-5" >
                    <label className="block text-gray-800 uppercase font-bold" htmlFor="email" >E-mail</label>
                    <input id="email" className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md" type="email" placeholder="Correo electrónico" />
                </div>
                <div className="mt-5" >
                    <label className="block text-gray-800 uppercase font-bold" htmlFor="alta" >Alta</label>
                    <input id="alta" className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md" type="date" />
                </div>
                <div className="mt-5" >
                    <label className="block text-gray-800 uppercase font-bold" htmlFor="sintomas" >Síntomas</label>
                    <textarea id="sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md" placeholder="Descripción de los síntomas" />
                </div>

                <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase rounded-md hover:bg-indigo-800 cursor-pointer" value="Agregar Paciente" />
            </form>
        </div>
    )
}



export default Formulario
