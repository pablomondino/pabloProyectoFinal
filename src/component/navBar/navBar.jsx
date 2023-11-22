import { DownOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import CartWitget from '../cartWidget/cartWidget';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const items = [
  {
    label: <Link to={'/bienvenida'}>Ir a Bienvenida</Link>,
    key: '0',
  },
  {
    label: <Link to={'/'}>Ir a productos</Link>,
  },
  {
    label: <Link to={'/cart'}>Ir a Carrito</Link>,
    key: '1',
  },
  {
    label: <Link to={'/checkout'}>Ir a Checkout</Link>,
    key: '2',
  },
  {
    type: 'divider',
  },
  {
    label: '3rd menu item (disabled)',
    key: '3',
    disabled: true,
  },
];

const NavBar = () => {
  const { getCart } = useContext(CartContext);

  const arrayDeCategorias = [];

  return (
    <div>
      <p>
        La Pietá - En esta tienda encontrás lo que buscás ({getCart().length}{' '}
        productos en el carrito)
      </p>
      {arrayDeCategorias.map((cat, index) => (
        <p key={index}>{cat}</p>
      )}
      <Dropdown menu={{ items }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            Menu <DownOutlined />
          </Space>
        </a>
      </Dropdown>
      <Link to="/cart">
        <Space>
          <ShoppingCartOutlined style={{ fontSize: '24px' }} />
          Carrito ({getCart().length})
        </Space>
      </Link>
      <CartWitget />
    </div>
  );
};

export default NavBar;