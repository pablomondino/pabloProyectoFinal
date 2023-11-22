
import { Avatar, Badge} from 'antd';
import {ShoppingCartOutlined} from '@ant-design/icons';
//agrego context para consumir

import { CartContext } from '../../context/cartContext';

import { useContext } from 'react';
//
//import { Avatar, Badge } from 'antd';
//import { ShoppingCartOutlined } from '@ant-design/icons';
//import { useContext } from 'react';
//import { CartContext } from '../../context/cartContext';

//
const CartWitget = () => {

    // para consumir context -----AGREGUE NUMERO EN EL COUNTERMAS ABAJO******
    //const{numero}=useContext(CartContext)
    const { cartLength } = useContext(CartContext);
    return (
        <>
            <Badge count={cartLength}>
                <Avatar shape="square" size="large" icon={<ShoppingCartOutlined />} />
            </Badge>
        </>
    )
}

export default CartWitget