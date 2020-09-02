<template>
  <div>
    <p>I'm a Github Card</p>
    <img :src="user.avatar" alt="" style="width: 200px;">
    <h2>Username: {{ user.login }}</h2>
    <h4>Name: {{ user.name }}</h4>
    <div>Public Repos: {{ user.repos }}</div>
    <div>Followers: {{ user.followers }}</div>
    <div>Following: {{ user.following }}</div>
    <div>Public Gists: {{ user.gists }}</div>
    <div><b>Total Score: {{ user.score }}</b></div>

    <div v-if="followers.length > 0">
      <hr>
      <h5>Followers</h5>
      <ul>
        <li v-for="(account, idx) in followers" :key="idx">
          <img :src="account.avatar_url" style="width: 50px;">
          <div>{{ account.login }}</div>
        </li>
      </ul>
    </div>    

  </div>
</template>

<script>
export default {
  name: 'GithubCard',
  props: {
    username: String
  },
  data: function(){
    return {
      user: {
        avatar: null,
        login: null,
        name: null,
        followers: null,
        following: null,
        gists: null,
        score: null,
      },
      followers: []
    }
  },
  mounted: function(){
    this.getGithubData(this.username);
  },
  methods: {

    getGithubData: async function(username){

      try {
        
        const principal    = await this.$http.get(`https://api.github.com/users/${username}`);
        const followers    = await this.$http.get(`https://api.github.com/users/${username}/followers`);

        console.log(principal.data);
        console.log(followers.data);

        this.user.avatar    = principal.data.avatar_url;
        this.user.login     = principal.data.login;
        this.user.name      = principal.data.name;
        this.user.repos     = principal.data.public_repos;
        this.user.followers = principal.data.followers;
        this.user.following = principal.data.following;
        this.user.gists     = principal.data.public_gists;
        this.user.score     = this.user.repos + this.user.followers + this.user.following + this.user.gists;

        this.followers      = followers.data;

      } catch(error){
        console.log(`Something went wrong: ${error}`);
      }

    }

  }
}
</script>