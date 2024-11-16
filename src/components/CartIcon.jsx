import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";

const CartIcon = () => {
  return (
    <Link to="/cart" className="flex items-center">
      <HiOutlineShoppingBag size={30} />
      <span className="ml-2 pt-2">Cart</span>
    </Link>
  );
};

export default CartIcon;
