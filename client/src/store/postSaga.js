import { takeLatest,put,call,fork } from 'redux-saga/effects';
import post, { getAllPost, setAllPost } from './post';
import { getAllPostDetails } from '../api/index'


function* loadAllPostAsync({payload}) {

    try{

        const postName = payload;
        const response = yield call(getAllPostDetails,postName);
        
        if(response.status === 200)  {
            //console.log(response.status,response);
            yield put(setAllPost(response.data.data));
        }

    }catch(error){
        console.log(error);
    }
}

function* loadAllPost(){
    yield takeLatest(getAllPost.type,loadAllPostAsync);
}

export const postSaga = [fork(loadAllPost)];