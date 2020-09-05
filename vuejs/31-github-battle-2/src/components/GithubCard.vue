<template>
  <div class="card">

    <div class="card-header">
      <input type="text" v-model="username" placeholder="Username">
      <button type="button" v-on:click="getGithubData">Go</button>
    </div>    


    <div class="card-body" v-if="user.login != ''">
      <img class="card-img" :src="user.avatar" alt="">

      <h2 class="username">
        <img src="@/assets/img/github.svg"/>
        <span>{{ user.login }}</span>
      </h2>
      
      <h4 class="name">{{ user.name }}</h4>

      <table class="table">
        <tbody>
          <tr>
            <th>Public Repos</th>
            <td width="50">{{ user.repos }}</td>
          </tr>
          <tr>
            <th>Followers</th>
            <td>{{ user.followers }}</td>
          </tr>
          <tr>
            <th>Following</th>
            <td>{{ user.following }}</td>
          </tr>          
          <tr>
            <th>Public Gists</th>
            <td>{{ user.gists }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>Total Score</th>
            <td>{{ user.score }}</td>
          </tr>
        </tfoot>
      </table>

      <div v-if="followers.length > 0">
        <hr>
        <h5 class="followers">Followers</h5>
        <ul class="followers-list">
          <li v-for="(account, idx) in followers" :key="idx">
            <img :src="account.avatar_url" :title="account.login">
          </li>
        </ul>
      </div>    
    </div>

  </div>
</template>

<script>
export default {
  name: 'GithubCard',
  data: function(){
    return {
      username: '',
      user: {
        avatar: '',
        login: '',
        name: '',
        followers: '',
        following: '',
        gists: '',
        score: '',
      },
      followers: []
    }
  },
  mounted: function(){
    this.getGithubData(this.username);
  },
  methods: {

    getGithubData: async function(){

      try {
        
        const principal    = await this.$http.get(`https://api.github.com/users/${this.username}`);
        const followers    = await this.$http.get(`https://api.github.com/users/${this.username}/followers`);

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
<style>
.card{
  width: 280px;
  background-color: white;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
}
.card-header{
  color: #4f5356;
  background-color: #f7f7f7;
  border-bottom: 1px solid #E0E0E0;
  height: 38px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-header input{
  color: #4f5356;
  background-color: #ffffff;
  border: 1px solid #d4d4d4;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  padding: 4px 8px;
  width: 110px;
  outline: none;
}
.card-header input:focus{
  background-color: #fbf9ef;
  /* border: 1px solid #d4d4d4; */
}
.card-header button{
  color: #ffffff;
  background-color: #3567e8;
  border: 1px solid #3060da;
  padding: 3px 8px;
  margin-left: -1px;
  font-size: 15px;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  cursor: pointer;
  outline: none;
}
.card-header button:active{
  background-color: #4868bb;
  border: 1px solid #4868bb;
}
.card-body{
  padding: 10px 20px;
}
.card-body .card-img{
  width: 100%;
}

.username{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0 6px 0;
}
.username img{
  width: 20px;
  margin-right: 6px;
}
.name{
  margin: 0;
  font-size: 14px;
  font-weight: 500;
}

hr{
  border: none;
  border-bottom: 1px solid #d0d0d0;
  margin: 12px 0;
}

.table{
  width: 100%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  border-collapse: collapse;
  color: #212529;
  background-color: #fbfbfb;
  border: 1px solid #e6e6e6;
  font-size: 14px;
  margin-top: 16px;
}
.table tbody th,
.table tfoot th{
  color: #212529;
  background-color: #f3f3f3;
  border-color: #e6e6e6;
  vertical-align: middle;
  border-bottom: 1px solid #e6e6e6;
  font-weight: 500;
  padding: 2px 0px 2px 20px;
  text-align: left;
}
.table tbody td {
  color: #212529;
  background-color: #ffffff;
  border: 1px solid #e6e6e6;
}
.table tfoot td {
  color: #212529;
  font-weight: 700;
  background-color: #ffffff;
  border: 1px solid #e6e6e6;
}

.followers{
  margin: 10px 0;
  padding: 0;
  color: #3F51B5;
}
.followers-list{
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.followers-list img{
  width: 70px;
  margin: 5px;
}
</style>