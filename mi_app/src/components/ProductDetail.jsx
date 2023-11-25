import '../hoja-de-estilo/ProductDetail.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function ProductDetail(props){
  return(
    < Card style={ { width: '18rem' } } className='container-tienda'>
    <div className='container-tienda'>
    <div className="contenedor-imagen">
    <Card.Img variant="top"src={require( `../imagenes/producto-${props.imagen}.jpg` )} alt='fotoMarisa'
     className="fixed-size-image centered-image"
    />
    </div>
      <Card.Body>
        <Card.Title>{props.nombre}</Card.Title>
        <Card.Text> {props.descripcion}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Precio:{props.precio}</ListGroup.Item>
        <ListGroup.Item>Sku:{props.SKU}</ListGroup.Item>
        <ListGroup.Item>Cantidad disponible:{props.cantidadDisponible}</ListGroup.Item>
      </ListGroup> 
  </div> 
  </Card>
  )
} 


export default ProductDetail;