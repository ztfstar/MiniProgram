import { 
  GETPOST,
  GETPOSTSUCCESS,
  GETPOSTERROR ,

  ADDPOST,
  ADDPOSTSUCCESS,
  ADDPOSTERROR,

  GETCOMMIT,
  GETCOMMITSUCESS,
  GETCOMMITERROR,

  GETREPLY,
  GETREPLYSUCCESS,
  GETREPLYERROR,

  ADDCOMMITSUCCESS,
} from '../constants'

const INITIAL_STATE = {
  postList: [],
  commitList:[],
  replyList:[]
}

export default function post (state=INITIAL_STATE, action) {
  //console.log('action',action)
  //let { postList } = state;
  let {postList,commitList,replyList,newCommitPostId} = action;
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


      case GETCOMMIT:
      return{
        ...state,
        commitList:[]
      }
      case GETCOMMITSUCESS:
        return{
          ...state,
          commitList:commitList
        }
      case GETCOMMITERROR:
        return{
          ...state,
          commitList:[]
        }


      case GETREPLY:
        return{
          ...state,
          replyList:[]
        }
      case GETREPLYSUCCESS:
        return{
          ...state,
          replyList:replyList
        }
      case GETREPLYERROR:
        return{
          ...state,
          replyList:[]
        }
      

      case ADDCOMMITSUCCESS:
        return{
          ...state,
          newCommitPostId:newCommitPostId
        }
      

      

    default:
      return state
  }
}

