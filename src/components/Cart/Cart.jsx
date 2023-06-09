import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'
import Checkout from '../Checkout/Checkout'

function Cart( { greeting })  {
    const [checkout, setCheckout] = useState(false)

    const {cartList, clearCart, totalBuys, totalInCart} = useContext(CartContext)
    
    const handleCheckout = () => {
        setCheckout(true)
    }

    if(checkout){
       <Checkout cartList={cartList} totalBuys={totalBuys}/>
    }


    if (totalInCart() === 0 ) {
        return(
            <div className='text-center p-5 m-5'>
                <h1 className=' display-5 fw-semibold my-5 text-dark'>Su carrito está vacio</h1>
                <Link to='/' className='btn btn-outline-info fw-semibold fs-5 m-5'>Realizar Compra</Link>
            </div>
        )
    }
    return (
        <div className=' d-flex flex-sm-column gap-5'>
            <h2 className='text-center pt-5 fs-1 fw-semibold'> { greeting } </h2>
            <div className=" d-flex flex-column align-items-center gap-2 w-100">            
            
             { cartList.map( prod => <CartItem key = {prod.id} {...prod} /> ) }

            </div>

            <div className="carrito__acciones d-sm-flex justify-content-around">
                <div className="carrito__acciones--izquierda">
                    <button onClick={ clearCart } className='btn btn-outline-danger mx-2'>Vaciar Carrito</button>
                </div>

                <div className="carrito__acciones--derecha d-sm-flex gap-5">
                    <p className='carrito__acciones--total'>Total a pagar: $ { totalBuys() }</p>
                    <Link className='btn btn-outline-info' to='/ckeckout' onClick={handleCheckout}> Comprar</Link>
                    
                </div>
            </div>

        </div>
    )
}
export default Cart
