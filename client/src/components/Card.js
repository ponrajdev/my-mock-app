
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CardDetails from './CardDetail';

const Card = ({data,keyword}) => {
  
      
  if(data.length === 0 && keyword.length === 0) {
    return  <div>Loading...</div>
  } else if(data.length === 0 && keyword.length !== 0) {
    return  <div className='col-md-6 offset-md-3' ><div className="alert alert-warning" role="alert">No record found</div></div>
  }

    return (
        
        <div className="row my-4">
        {
            data.map((item,key)=>(
                <CardDetails data={item} key={key} />
            ))
            
        }
        </div>
    );
}

export default Card;