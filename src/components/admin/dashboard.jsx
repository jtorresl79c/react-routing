import React from "react";
import { Route, Switch} from "react-router-dom";
import Users from './users';
import Posts from './posts';
import Sidebar from "./sidebar";

// El tema es parecido a un <route-view/> dentro de otro <route-view/> (Nesting Routes) de Vue, de hecho es lo mismo
// aunque logicamente la forma en la que se escribe es diferente, pero los dos tratan el mismo tema, como vemos abajo
// podemos poner etiquetas Route dentro de otros componentes, para poder llegar a ellos basta con poner la ruta exacta
// En App.js tenemos (RAD68478) tenemos un <Route/> el cual su direccion es '/admin', por lo que si ponemos en el url 
// '/admin' se renderiza el component 'dashboard.jsx' PERO como vemos abajo, tenemos etiquetas <Route/> dentro del
// component mismo, podemos hacer esto, vemos que debemos de poner el to del <Route> con las iniciales del Route padre 
// ('/admin+loQueQuieras) y de esta forma lo rendereizamos.
const Dashboard = ({ match }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>

      <Sidebar/>

      {/* Si solo ponemos en la ruta '/admin' pues ninguno de estos dos componentes se renderizara */}
      <Route path="/admin/users" component={Users} />
      <Route path="/admin/posts" component={Posts} />


    </div>
  );
};

export default Dashboard;
