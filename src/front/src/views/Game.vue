
<template>
  <div class = "frame">
    <div class="header">
      <h1>게임 화면{{room}}</h1>
    </div>
    <div class="container">
      <div class="user_list">
        <user-list/>
      </div>
      <div class="game_list">
        <chat/>
      </div>
    </div>
  </div>
</template>

<script>
import Chat from '../components/game/Chat.vue';
import UserList from '../components/game/UserList.vue';

export default {
  name: 'Main',
  components: {
    UserList,
    Chat,
  },
  created : () => {
  },
  props : {
    room : {}
  },
  data() {
    return {
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.frame {
  width : 1000px;
  margin : 0 auto;
  border : 1px solid black;
}
.header {
  padding:40px 10px;
  text-align: center;
  background: #eee;
  margin-bottom: 20px;
}
.container {
  overflow: hidden;
}
.user_list {
  float: left;
  width: 200px;
  margin-right: 50px;
}
.content {
  float: left;
  width: 600px;
}

</style>