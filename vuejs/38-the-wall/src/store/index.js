import Vue from 'vue'
import Vuex from 'vuex'
import * as fb from '../firebase'
import router from '../router/index'

Vue.use(Vuex)

/*
// realtime firebase
fb.postsCollection.orderBy('createdOn', 'desc').onSnapshot(snapshot => {
  let postsArray = []

  snapshot.forEach(doc => {
    let post = doc.data()
    post.id = doc.id

    postsArray.push(post)
  })

  store.commit('setPosts', postsArray)
})
*/

const store = new Vuex.Store({
  state: {
    session: {
      uid: null,
      name: null,
      email: null
    },
    // posts: []
  },
  mutations: {
    
    setUserProfile(state, payload) {

      // console.log("payload de setUser");
      // console.log(payload);

      // if(payload.uid && payload.displayName && payload.email){
      if(payload){
        state.session.uid   = payload.uid;
        state.session.name  = payload.displayName;
        state.session.email = payload.email;
      }
        
      // } else {
      //   state.session.uid   = null;
      //   state.session.name  = null;
      //   state.session.email = null;
      // }      

    },
    // removeUserProfile(state){
    //   state.session.uid   = null;
    //   state.session.name  = null;
    //   state.session.email = null;
    // }

    // setPerformingRequest(state, val) {
    //   state.performingRequest = val
    // },
    // setPosts(state, val) {
    //   state.posts = val
    // }
  },
  actions: {
    
    async login({ dispatch }, form) {
      // sign user in

      try {
        const { user } = await fb.auth.signInWithEmailAndPassword(form.email, form.password)
        // fetch user profile and set in state
        dispatch('fetchUserProfile', user)

      } catch(e){
        console.error(e);
      }  
      
      

      
    },
    

    
    async signup({ dispatch }, form) {
      // sign user up
      const { user } = await fb.auth.createUserWithEmailAndPassword(form.email, form.password)

      user.updateProfile({
        displayName: form.name
      }).then(() => {});



      /*
      .then(data => {
        data.user.updateProfile({
          //displayName: this.form.title
          displayName: this.form.name
        }).then(() => {});
      })
      .catch(err => {
        this.error = err.message;
      });
      */


      // create user object in userCollections
      // await fb.usersCollection.doc(user.uid).set({
      //   name: form.name,
      //   title: form.title
      // })

      // fetch user profile and set in state
      dispatch('fetchUserProfile', user)
    },
    

    
    async fetchUserProfile({ commit }, user) {
      // fetch user profile
      //const userProfile = await fb.usersCollection.doc(user.uid).get()
      // console.log(user);

      // set user profile in state
      //commit('setUserProfile', userProfile.data())

      commit('setUserProfile', user)
      

      // change route to dashboard
      if (router.currentRoute.path === '/login') {
        // router.push('/')
        router.push({ name: 'dashboard' });
      }
    },


    
    async logout() {
      // log user out
      await fb.auth.signOut()

      // clear user data from state
      // commit('removeUserProfile')

      // redirect to login view
      router.push('/login')
    },
    

    /*
    async createPost({ state, commit }, post) {
      // create post in firebase
      await fb.postsCollection.add({
        createdOn: new Date(),
        content: post.content,
        userId: fb.auth.currentUser.uid,
        userName: state.userProfile.name,
        comments: 0,
        likes: 0
      })
    },
    */

    /*
    async likePost ({ commit }, post) {
      const userId = fb.auth.currentUser.uid
      const docId = `${userId}_${post.id}`

      // check if user has liked post
      const doc = await fb.likesCollection.doc(docId).get()
      if (doc.exists) { return }

      // create post
      await fb.likesCollection.doc(docId).set({
        postId: post.id,
        userId: userId
      })

      // update post likes count
      fb.postsCollection.doc(post.id).update({
        likes: post.likesCount + 1
      })
    },
    */

    /*
    async updateProfile({ dispatch }, user) {
      const userId = fb.auth.currentUser.uid
      // update user object
      const userRef = await fb.usersCollection.doc(userId).update({
        name: user.name,
        title: user.title
      })

      dispatch('fetchUserProfile', { uid: userId })

      // update all posts by user
      const postDocs = await fb.postsCollection.where('userId', '==', userId).get()
      postDocs.forEach(doc => {
        fb.postsCollection.doc(doc.id).update({
          userName: user.name
        })
      })

      // update all comments by user
      const commentDocs = await fb.commentsCollection.where('userId', '==', userId).get()
      commentDocs.forEach(doc => {
        fb.commentsCollection.doc(doc.id).update({
          userName: user.name
        })
      })
    }
    */
  }
})

export default store