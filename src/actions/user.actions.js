// import { userConstants } from './constants';
// // import firebase from 'firebase/app'
// import firebase from 'firebase';

// export const getRealTimeUsers = (uid)=>{

//   return async(dispatch)=>{
//     dispatch({type:`${userConstants.getRealTimeUsers}_REQUEST`});
//     const db=firebase.firestore();
//     db.collection('users')
//     // .where("uid","!=",uid)
//     .onSnapshot((querySnapshot)=>{
//       const users=[];
//       querySnapshot.forEach(function(doc){
//         if(doc.data().uid!=uid)
//         {
//           users.push(doc.data());
//         }
//       });
//       // console.log(users);
//       dispatch({
//         type:`${userConstants.getRealTimeUsers}_SUCCESS`,
//         payload:{users}
//       });
//     });
//   }
// }

// export const updateMessage = (msgObj) => {
//     return async dispatch => {

//         const db = firebase.firestore();
//         db.collection('conversations')
//         .add({
//             ...msgObj,
//             isView: false,
//             createdAt: new Date()
//         })
//         .then((data) => {
//             console.log(data)
//             //success
//             // dispatch({
//             //     type: userConstants.GET_REALTIME_MESSAGES,
//             // })


//         })
//         .catch(error => {
//             console.log(error)
//         });

//     }
// }

// export const getRealtimeConversations = (user) => {
//     return async dispatch => {

//         const db = firebase.firestore();
//         db.collection('conversations')
//         .where('user_uid_1', 'in', [user.uid_1, user.uid_2])
//         .orderBy('createdAt', 'asc')
//         .onSnapshot((querySnapshot) => {

//             const conversations = [];

//             querySnapshot.forEach(doc => {

//                 if(
//                     (doc.data().user_uid_1 == user.uid_1 && doc.data().user_uid_2 == user.uid_2)
//                     || 
//                     (doc.data().user_uid_1 == user.uid_2 && doc.data().user_uid_2 == user.uid_1)
//                 ){
//                     conversations.push(doc.data())
//                 }

                

//                 // if(conversations.length > 0){
                    
//                 // }else{
//                 //     dispatch({
//                 //         type: `${userConstants.GET_REALTIME_MESSAGES}_FAILURE`,
//                 //         payload: { conversations }
//                 //     })
//                 // }



                
//             });

//             dispatch({
//                 type: userConstants.GET_REALTIME_MESSAGES,
//                 payload: { conversations }
//             })

//             console.log(conversations);
//         })
//         //user_uid_1 == 'myid' and user_uid_2 = 'yourId' OR user_uid_1 = 'yourId' and user_uid_2 = 'myId'


//     }
// // }
// import firebase from 'firebase/app'
import firebase from 'firebase';
import { userConstants } from "./constants";
// import firestore from 'firebase';


export const getRealTimeUsers=(uid)=>{
    return async (dispatch) => {
        dispatch({type:`${userConstants.GET_REALTIME_USERS}_REQUEST`});
        const db = firebase.firestore();
        const unsubscribe=db.collection('users')
        .onSnapshot((querySnapshot)=>{
            const users=[];
            querySnapshot.forEach(function(doc){
                if(doc.data().uid!=uid){
                    users.push(doc.data());
                }
            });
            // console.log(users)
            dispatch({type:`${userConstants.GET_REALTIME_USERS}_SUCCESS`,
                payload: {users}
            });
        });
        return unsubscribe;
    }
}
// export default getRealtimeUsers;

//   const getRealtimeUsers = (uid) => {

//     //console.log('uid', uid)

//     return async (dispatch) => {

//         dispatch({ type: `${userConstants.GET_REALTIME_USERS}_REQUEST` });

//         const db = firebase.firestore();
//         const unsubscribe = db.collection("users")
//         //.where("uid", "!=", uid)
//         .onSnapshot((querySnapshot) => {
//             const users = [];
//             querySnapshot.forEach(function(doc) {
//                 if(doc.data().uid != uid){
//                     users.push(doc.data());
//                 }
//             });
//             //console.log(users);

//             dispatch({ 
//                 type: `${userConstants.GET_REALTIME_USERS}_SUCCESS`,
//                 payload: { users }
//             });

//         });

//         return unsubscribe;

//     }

// }
// export const updateMessage = (msgObj) => {
//     return async dispatch => {

//         const db = firebase.firestore();
//         db.collection('discussion')
//         .add({
//             ...msgObj,
//             isView: false,
//             createdAt: new Date()
//         })
//         .then((data) => {
//             console.log(data)
//             //success
//             // dispatch({
//             //     type: userConstants.GET_REALTIME_MESSAGES,
//             // })


//         })
         
//         .catch(error => {
//             console.log(error)
//         });

//     }
// }

// export const getRealtimeConversations = (user) => {
//     return async dispatch => {

//         const db = firebase.firestore();
//         db.collection('discussion')
//         .where('user_uid_1', 'in', [user.uid_1, user.uid_2])
//         .orderBy('createdAt', 'asc') 
//         .onSnapshot((querySnapshot) => {

//             const conversationss = [];

//             querySnapshot.forEach(doc => {

//                 if(
//                     (doc.data().user_uid_1 == user.uid_1 && doc.data().user_uid_2 == user.uid_2)
//                     || 
//                     (doc.data().user_uid_1 == user.uid_2 && doc.data().user_uid_2 == user.uid_1)
//                 ){
//                     conversationss.push(doc.data())
//                 }

                

//                 // if(conversations.length > 0){
                    
//                 // }else{
//                 //     dispatch({
//                 //         type: `${userConstants.GET_REALTIME_MESSAGES}_FAILURE`,
//                 //         payload: { conversations }
//                 //     })
//                 // }



                
//             });

//             dispatch({
//                 type: userConstants.GET_REALTIME_MESSAGES,
//                 payload: { conversationss }
//             })

//             console.log(conversationss);
//         })
//         //user_uid_1 == 'myid' and user_uid_2 = 'yourId' OR user_uid_1 = 'yourId' and user_uid_2 = 'myId'


//     }
// }

export const updateMessage = (msgObj) => {
    return async dispatch => {

        const db = firebase.firestore();
        db.collection('conversations')
        .add({
            ...msgObj,
            isView: false,
            createdAt: new Date()
        })
        .then((data) => {
            console.log(data)
            //success
            // dispatch({
            //     type: userConstants.GET_REALTIME_MESSAGES,
            // })


        })
        .catch(error => {
            console.log(error)
        });

    }
}
export const getRealtimeConversations = (user) => {
    return async dispatch => {

        const db = firebase.firestore();
        db.collection('conversations')
        .where('user_uid_1', 'in', [user.uid_1, user.uid_2])
        .orderBy('createdAt', 'asc')
        .onSnapshot((querySnapshot) => {
            const conversations = [];

            querySnapshot.forEach(doc => {

                if(
                    (doc.data().user_uid_1 == user.uid_1 && doc.data().user_uid_2 == user.uid_2)
                    || 
                    (doc.data().user_uid_1 == user.uid_2 && doc.data().user_uid_2 == user.uid_1)
                ){
                    conversations.push(doc.data())
                }

                

                // if(conversations.length > 0){
                    
                // }else{
                //     dispatch({
                //         type: `${userConstants.GET_REALTIME_MESSAGES}_FAILURE`,
                //         payload: { conversations }
                //     })
                // }



                
            });

            dispatch({
                type: userConstants.GET_REALTIME_MESSAGES,
                payload: { conversations }
            })

            console.log(conversations);
        })
        //user_uid_1 == 'myid' and user_uid_2 = 'yourId' OR user_uid_1 = 'yourId' and user_uid_2 = 'myId'


    }
}
// export const getRealtimeConversations = (user) => {
//     return async dispatch => {

//         // const db = firebase.firestore();
//         db.collection('discussion')
//         .where('user_uid_1', 'in', [user.uid_1, user.uid_2])
//         .orderBy('createdAt', 'asc')
//         .onSnapshot((querySnapshot) => {

//             const conversations = [];

//             querySnapshot.forEach(doc => {

//                 if(
//                     (doc.data().user_uid_1 == user.uid_1 && doc.data().user_uid_2 == user.uid_2)
//                     || 
//                     (doc.data().user_uid_1 == user.uid_2 && doc.data().user_uid_2 == user.uid_1)
//                 ){
//                     conversations.push(doc.data())
//                 }

                

//                 // if(conversations.length > 0){
                    
//                 // }else{
//                 //     dispatch({
//                 //         type: `${userConstants.GET_REALTIME_MESSAGES}_FAILURE`,
//                 //         payload: { conversations }
//                 //     })
//                 // }



                
//             });

//             dispatch({
//                 type: userConstants.GET_REALTIME_MESSAGES,
//                 payload: { conversations }
//             })

//             console.log(conversations);
//         })
//         //user_uid_1 == 'myid' and user_uid_2 = 'yourId' OR user_uid_1 = 'yourId' and user_uid_2 = 'myId'


//     }
// }