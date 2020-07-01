import React from "react";

const Producto = ({producto,carrito,agregarProducto,productos}) =>{

    const {nombre,precio,id} = producto;

    //Agregar producto a carrito

    const seleccionarProducto =id =>{
        const producto =productos.filter(producto => producto.id === id)[0];
        agregarProducto([
            ...carrito,
            producto
        ]);
    }

    //eliminar del carrito
    const eliminarnarProducto = id =>{
        const productos = carrito.filter(producto => producto.id != id);

        //colocar en el state

        agregarProducto(productos);

    }

    return (
        <div>
            <h2>{nombre}</h2>
            <p>$ {precio}</p>

            {productos

            ?
                (
                    <button type="button" onClick={()=>seleccionarProducto(id)}>
                        Comprar
                    </button>
                )

                :

                (
                    <button type="button" onClick={()=>eliminarnarProducto(id)}>
                        Eliminar
                    </button>
                )



            }
        </div>

    );
}



export default Producto;