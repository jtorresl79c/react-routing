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
                SIEMPRE se imprimiria el componente Home, porque al funcionar igual que el Switch normal '/' seria la primera coincidencia
                y entonces no renderizaria mas para abajo */}
                <div className="content">
                    <Switch>
                        {/* Repasando la teoria de renderizado de mas abajo (con la analogia al v-if), para renderizar el componente 'ProductDetails' aqui estamos indicando
                        que la url debe de seguir la forma '/products/:id' que se puede traducir en: /products/1, /products/2, /products/3, algo que notamos es que el switch
                        no funciona como el LIKE '%%' al menos no al 100%, ya que si nosotros vamos a to='/products' se renderizara el componente <Products/> Y NO EL COMPONENT
                        <ProductDetails/>, por lo que encontramos que por lo general el switch funciona como un === EXCEPTO por el path="/" en donde si tiene que ir al ultimo */}
                        <Route path="/products/:id" component={ProductDetails} />

                        {/* Recordemos que en el Capitulo 4 vimos que podemos pasar props a un componente, podriamos hacer algo como esto: <Products sortBy='newest'/>,
                        pero aqui no podemos hacer eso, porque especificamos en componente que queremos renderizar con la propiedad component={Componente}, pero si
                        en vez de poner component usamos la propiedad render de la forma que se ve a continuacion podemos mandar props como siempre se ha hecho */}
                        {/* <Route path="/products" render={ () => <Products sortBy="newest"/> } /> El problema de esta sintaxis es que, en los ejemplos de
                        abajo en donde usamos el atributo 'component' en vez del atributo 'render' se envian 2 props de forma automatica al componente
                        renderizado llamados history, location y match, estos props (que podriamos necesitar mas adelante) se pierden */}
                        <Route path="/products" render={props => <Products sortBy="newest" {...props} />} /> { /** Para enviar los props que hacen falta y se perdieron, 
                         declaramos en la funcion el argumento 'props', despues debemos de usar el spread operator y poner {...props} de esta forma se estaran enviando los props
                         faltantes (Usa React developers tools y busca el componente 'Products' al mirar sus props veremos de los props de los que estamos hablando) */ }


                        





                        <Route path="/posts" component={Posts} />
                        <Route path="/admin" component={Dashboard} />
                        {/* El tag Route es como un v-if de vue, si el path coincide con la url escrita en la barra de direcciones entonces se renderiza el componente asosiado
                        al tag Route, cosa que difiere un poco con Vue en donde tenemos que establecer en <router-view>, aqui es mas parecido al vue-if siendo el path la condicion en este caso */}
                        <Route path="/" component={Home} />
                    </Switch>
                </div>



            </div>
        );
    }
}

export default App;
