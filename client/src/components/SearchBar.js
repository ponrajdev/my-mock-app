import React,{ useState,useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const SearchBar = ({ onQuery,keyword }) => {

    let postList = useSelector((state) => state.post.postList);

    
    const ref = useRef();
    const [toggle,setToggle] = useState(false);
    const [text,setText] = useState('');

    const handleChange = () => {
        onQuery(ref.current.value);

        if(ref.current.value) {
            setToggle(true)
           
           
        } else {
            setToggle(false)
        }
    }

    const handleClick = (e) => {
        
        ref.current.value = e;
        onQuery(e);
        setToggle(false)

    }

    postList =  postList.filter((item) => {
        return item.title.toLowerCase().includes(keyword.toLowerCase());
    });
    

    return (
        
        <div className="row m-2 justify-content-center">
           <div className="col-md-6 autocomplete">
                <input  type="text"  
                        ref={ref}
                        onChange={handleChange} className="w-100"/>
                        <ul id="myUL">
                            {
                                 toggle && postList && postList.map((item,key)=><li key={key}><p onClick={()=>handleClick(item.title)}>{item.title}</p></li>)
                            }
                            
                        </ul>
            </div>
            
        </div>
            
    );
}

export default React.memo(SearchBar);