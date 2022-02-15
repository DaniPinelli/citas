import { useState, useEffect } from 'react';
import Error from './Error';

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);

    useEffect(() => {
        if (Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre);
            setPropietario(paciente.propietario);
            setEmail(paciente.email);
            setFecha(paciente.fecha);
            setSintomas(paciente.sintomas);
        }
    }, [paciente])

    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36);

        return random + fecha;
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if ([nombre, propietario, email, fecha, sintomas].includes('')) {


            setError(true)
            return;
        }

        setError(false)

        const objetoPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas,

        }
        if (paciente.id) {
            objetoPaciente.id = paciente.id;

            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id ===
                paciente.id ? objetoPaciente : pacienteState)

            setPacientes(pacientesActualizados)
            setPaciente({})



        } else {
            objetoPaciente.id = generarId();
            setPacientes([...pacientes, objetoPaciente])
        }



        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
    }


    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5" >
            <h2 className="font-black text-3xl text-center" >Seguimiento Pacientes</h2>

            <p className="text-lg mt-5 text-center" >
                Agregar Pacientes {''}
                <span className="text-indigo-600 font-bold " >Administrar</span>
            </p>

            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-2 px-5" >


                {error && <Error><p className="text-red-600 text-center uppercase font-bold mt-2" >Todos los campos son obligatorios</p></Error>}
                <div className="mt-5" >
                    <label className="block text-gray-800 uppercase font-bold" htmlFor="mascota" >Nombre Mascota</label>
                    <input value={nombre} onChange={(e) => setNombre(e.target.value)} id="mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md" type="text" placeholder="Nombre de mascota" />
                </div>
                <div className="mt-5" >
                    <label className="block text-gray-800 uppercase font-bold" htmlFor="propietario" >Nombre  Propietario</label>
                    <input value={propietario} onChange={(e) => setPropietario(e.target.value)} id="propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md" type="text" placeholder="Nombre de propietario" />
                </div>
                <div className="mt-5" >
                    <label className="block text-gray-800 uppercase font-bold" htmlFor="email" >E-mail</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} id="email" className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md" type="email" placeholder="Correo electrónico" />
                </div>
                <div className="mt-5" >
                    <label className="block text-gray-800 uppercase font-bold" htmlFor="alta" >Alta</label>
                    <input value={fecha} onChange={(e) => setFecha(e.target.value)} id="alta" className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md" type="date" />
                </div>
                <div className="mt-5" >
                    <label className="block text-gray-800 uppercase font-bold" htmlFor="sintomas" >Síntomas</label>
                    <textarea value={sintomas} onChange={(e) => setSintomas(e.target.value)} id="sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md" placeholder="Descripción de los síntomas" />
                </div>

                <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase rounded-md hover:bg-indigo-800 cursor-pointer" value={paciente.id ? 'Guardar Cambios' : 'Agregar Paciente'} />
            </form>
        </div>
    )
}



export default Formulario
