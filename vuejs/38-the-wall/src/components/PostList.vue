<template>
  <div>
    <ul>
      <li>item1</li>
      <li>item2</li>
    </ul>

    {{ posts }}

  </div>
</template>

<script>
// import * as firebase from "firebase"
// import 'firebase/auth'
// import 'firebase/firestore';

export default {
  name: 'PostList',
  data: function(){
    return {
      posts: [] //firebase.firestore().collection('posts')
    }
  },
}
</script>