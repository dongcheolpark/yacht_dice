<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <MainTitle/>
    <CreateRoom/>
    <joinRoom/>
  </div>
</template>

<script>
import MainTitle from './components/MainTitle.vue';
import CreateRoom from './components/CreateRoom.vue';
import JoinRoom from './components/JoinRoom.vue';

export default {
  name: 'App',
  components: {
    MainTitle,
    CreateRoom,
    JoinRoom
  }
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
</style>
