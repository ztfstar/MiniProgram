import { GETPOST,GETPOSTSUCCESS,GETPOSTERROR ,ADDPOST,ADDPOSTSUCCESS,ADDPOSTERROR} from '../constants'

const INITIAL_STATE = {
  postList: []
}

export default function post (state=INITIAL_STATE, action) {
  console.log('action',action)
  //let { postList } = state;
  let {postList} = action;
  switch (action.type) {

      case ADDPOST:
      return {
        ...state,
        //postList: []
      } 
      case ADDPOSTSUCCESS:
      return {
        ...state,
        //postList: []
      } 
      case ADDPOSTERROR:
      return {
        ...state,
        //postList: []
      } 



      case GETPOST:
      return {
        ...state,
        postList: []
      }  

      case GETPOSTSUCCESS:
      return {
        ...state,
        postList: postList
      }
      
      case GETPOSTERROR:
      return {
        ...state,
        postList: []
      }
    default:
      return state
  }
}

