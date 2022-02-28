import React, { Component } from "react";

class ProductDetails extends Component {
  handleSave = () => {
    // Navigate to /products
    // this.props.history.push('/products') // Esta forma guarda el historial al navegar al 
    // path que le estamos indicando, por lo tanto podemos usar el boton de atras


    this.props.history.replace('/products') // En cambio este tambien nos mueve a la ruta
    // '/products' con la diferencia que este no guarda el historial, por lo que no es
    // posible usar el boton de atras, porque no se guarda historial, comentan que este es util
    // cuando se aplasta el boton de Login, ya que al presionar el boton de atras no queremos
    // que lo manden de nuevo a la pagina del login.
  };

  render() {
    return (
      <div>
        {/* En App.js en la parte en donde dice '{...props}' se explica que se pone esto porque de lo contrario no se envian 3 props (porque se usa el atributo render en vez del atributo
        component), uno de esos props que al no poner '{...props}' no se envian es el props 'match', enviar este prop es importante, ya que este prop es el que contiene los atributos
        en la url y que como en este caso podemos necesitar: */}
        <h1>Product Details - {this.props.match.params.id}</h1>
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

export default ProductDetails;
