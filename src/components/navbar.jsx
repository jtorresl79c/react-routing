import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <ul>
      <li>
        {/* Al igual que en Vue no podemos tener etiquetas a normales porque recargarian la
        pagina, es por eso que en vez de eso se utiliza el tag '<Link>' con el atributo to */}
        {/* <a href="/">Home</a> */}
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/posts/2018/06">Posts</Link>
      </li>
      <li>
        <Link to="/admin">Admin</Link>
      </li>
    </ul>
  );
};

export default NavBar;
