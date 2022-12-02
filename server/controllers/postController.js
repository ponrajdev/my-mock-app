const fetch =  require('node-fetch');

const getAllPost = async (req,res) => {
    try{

        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let result      = await response.json();
        if(result 
            && Object.keys(result).length === 0) {
            //res.status(400).json({message: 'Error'})
            throw 'Parameter is not a number!';
        }
        res.status(200).json({data: result})

    } catch(e){

        res.status(400).json({message: e.message})
    }
    
}

module.exports = {
    getAllPost
}