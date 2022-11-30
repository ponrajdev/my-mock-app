
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Card = ({data}) => {
    
console.log(typeof data)
    
  if(data.length === 0) {
    return  <div>Loading...</div>
  }

    return (
        
        <div className="row my-4">{
            data.map((item,key)=>(
<div key={key} className=" col-md-3 col-lg-4 mb-4" >

                <div className="card  h-100">
  <div className="card-header">
  {item.title} 

  </div>
  <div className="card-body">
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
            
            ))
            
            }</div>
    );
}

export default Card;