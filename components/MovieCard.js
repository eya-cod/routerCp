import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, 
  } from 'reactstrap';
  import Rating from './Rating'
  import {Link} from 'react-router-dom'
  

const MovieCard = ({Movie}) => {

    return (
       
           <Card>
             <Link to={`/Trailer/${Movie.title}`}>
                <CardImg style={{width: "300px",borderRadius:8}} src={Movie.posterUrl} alt="" />
                <div className='card' style={{textDecoration:"none"}} >
                <CardBody  >
                  <CardTitle tag="h5">{Movie.title}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted"> </CardSubtitle>
                  <Rating Rate={Movie.rate} />
                  
                  <CardText style={{width:300 }}> {Movie.description} </CardText>
                  
                </CardBody>
                </div>
                </Link>
            </Card>
          
           
          );
    
}

export default MovieCard
