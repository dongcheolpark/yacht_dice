
<template>
  <div class = "frame">
    <div class="header">
      <h1>게임 화면</h1>
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
import axios from 'axios';
import Chat from '../components/game/Chat.vue';
import config from '@/Config.js';
import UserList from '../components/game/UserList.vue';

export default {
  name: 'Main',
  components: {
    UserList,
    Chat,
  },
  props : ['roomid'], 
  data() {
    return {
      room : null,
    }
  },
  mounted() {
    this.routeLoaded();
  },
  watch: {
      $route() {
          this.$nextTick(this.routeLoaded);
        }   
  },
  methods: {
      routeLoaded() {
        axios.get(config.back(`getroom?RoomNum=${this.roomid}`)).then((res) => {
          this.room = res.data;
        })
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