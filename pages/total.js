import { formatearDinero } from "@/helpers";
import useQuiosco from "@/hooks/useQuiosco";
import Layout from "@/layout/Layout";
import { useEffect, useCallback } from "react";


export default function Total() {

  const { pedido, nombre, setNombre, colocarOrden, total } = useQuiosco()

  const comprobarPedido = useCallback( () => {
    return  pedido.length ===  0 || nombre === '' || nombre.length < 3;
  }, [pedido, nombre])

  useEffect(() => {

    comprobarPedido()

  }, [pedido, comprobarPedido])



  return (
    <Layout pagina='Total'>
        <h1 className="text-4xl font-black">Total:</h1>
        <p className="text-2xl my-10  font-bold">{formatearDinero(total)}</p>

        <form 
          onSubmit={colocarOrden}
          >
          <div>
            <label htmlFor="nombre" className="block upppercase texxt-slate-800 font-bold text-xl">Nombre</label>

            <input 
               type="text"
               id="nombre"
               className="bg-gray-200 w-full lg:w-1/3 mt-3"
               onChange={e => setNombre(e.target.value)}
               />

          </div>
          <div className="mt-10">
           <p>Total a pagar {''} <span className="font-bold">  </span> </p>
          </div>

          <div>
            <input 
              type="submit" 
              className={`${comprobarPedido() ? 'bg-indigo-100': 'bg-indigo-600 hover:bg-indigo-800'} w-full mt-10 lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center`}
              value="Confirmar pedido"
              disabled={comprobarPedido()}
              />
          </div>

        </form>


    </Layout>
  )
}
