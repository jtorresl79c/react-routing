import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
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







                        {/* <Route path="/posts/" component={Posts} /> */}
                        {/* --RPPYM-- Al poner este path (:year/:month), ahora quiere decir que para renderizar Posts se necesita poner una url con la forma: '/posts/2012/02' si no se pone de
                        esa forma (un ejemplo seria '/posts/2018' sin el mes) el 'Switch' no renderizara <Posts/>, si no que renderizara 'Home' esto para porque ya que no encontrara una url con LA MISMA FORMA '/posts/:year/:month'
                        y si bien '/' tampoco es que se parezca mucho, si es cierto que es lo mas parecido a '/posts/2018' disponible dentro del switch, aqui vemos que al poner '/' hasta abajo del Switch
                        este actua como el 'default' de una sentencia 'Switch' normal. */}
                        {/* <Route path="/posts/:year/:month" component={Posts} /> */}
                        <Route path="/posts/:year/:month?" component={Posts} /> {/* De acuerdo a lo de arriba, :year y :month son parametros OBLIGATORIOS por default, pero podemos
                        hacer que sean parametros OPCIONALES, para esto basta con agregar el signo '?' al final del parametro como se ve en la linea de arriba,  utilizando el mismo ejemplo
                        de arriba en el url ponemos '/posts/2018' ahora en vez de llevarnos a <Home/> nos seguira llevando a <Post/> todo gracias a que ahora el parametro es opcional*/}










                        <Route path="/admin" component={Dashboard} />
                        {/* El tag Route es como un v-if de vue, si el path coincide con la url escrita en la barra de direcciones entonces se renderiza el componente asosiado
                        al tag Route, cosa que difiere un poco con Vue en donde tenemos que establecer en <router-view>, aqui es mas parecido al vue-if siendo el path la condicion en este caso */}








                        <Route path="/not-found" component={NotFound} /> {/* RNF125 */} 
                        {/* Aqui con este tag Route renderizamos el componente <NotFound/> */}

                        <Redirect from="/messages" to="/posts/2018"/>
                        {/* Otro ejemplo de Redirect es este, en donde especificamos un path especifico y lo reedireccionamos a donde queramos */}

                        <Route path="/" exact component={Home} />
                        {/* Sin poner el exact, cuando nosotros naveguemos a un ruta que no existe por default se muestra el componente <Home/> (porque su ruta por default es /), PERO al poner
                        el atributo 'exact' si nosotros ponemos una url no existente la situacion recien comentada (que si ponemos una url inexistente por default se renderiza <Home/>) ya no pasara,
                        ahora al poner una url inexistente NO SE RENDERIZARA NADA EN PANTALLA
                        */}

                        <Redirect to="/not-found" />
                        {/* Ahora como el path '/' tiene el atributo exact, el Switch no renderizara, por lo que no le quedara mas de otra que ejecutar este tag <Redirect>, 
                        el switch reedireccionara a la ruta '/not-found' RNF125 , notemos como se juega con esto, NO RENDERIZAMOS un componentente en esta linea, si no que
                        reedireccionamos y un componente <Route/> normal se hace cargo del renderizado
                        */}
                    </Switch>
                </div>



            </div>
        );
    }
}

export default App;
