import { Avatar, Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

import { CartContext } from "../../context/cartContext";

import { useContext } from "react";

const CartWitget = () => {
  const { cartLength } = useContext(CartContext);

  return (
    <>
      <Badge count={cartLength}>
        <Avatar shape="square" size="large" icon={<ShoppingCartOutlined />} />
      </Badge>
    </>
  );
};

export default CartWitget;
