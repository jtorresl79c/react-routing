import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                {/* El problema con esta forma es que por ejemplo, si nosotros vamos a 
                /products el componente 'Products.jsx' se renderizara PERO el componente
                'Home.jsx' tambien, PORQUE el algoritmo de react-router es como un LIKE '%%' */}
                {/* <div className="content">
                    <Route path="/products" component={Products}/>
                    <Route path="/posts" component={Posts}/>
                    <Route path="/admin" component={Dashboard}/>
                    <Route path="/" component={Home}/>
                </div> */}

                {/* Para hacer que ya no aparezca el componente Home (cuando se halla ido especificamente
                al componente Products por ejemplo) ponemos el atributo 'exact', esto le indica a
                React que para que se renderize Home la direccion en la URL debe de decir exactamente '/' */}
                {/* <div className="content">
                    <Route path="/products" component={Products}/>
                    <Route path="/posts" component={Posts}/>
                    <Route path="/admin" component={Dashboard}/>
                    <Route path="/" exact component={Home}/>
                </div> */}

                {/* Esta es otra forma, y en funcionamiento es como el Switch de toda la vida, y al igual que el if y el switch
                aqui el orden importa si nosotros fuearamos a: '/products', '/posts' u '/admin' PERO '/' estuviera en primer lugar
                SIEMPRE se imprimiria el componete Home, porque al funcionar igual que el Switch normal '/' seria la primera coincidencia
                y entonces no renderizaria mas para abajo */}
                <div className="content">
                    <Switch>
                        <Route path="/products" component={Products} />
                        <Route path="/posts" component={Posts} />
                        <Route path="/admin" component={Dashboard} />
                        <Route path="/" component={Home} />
                    </Switch>
                </div>



            </div>
        );
    }
}

export default App;
