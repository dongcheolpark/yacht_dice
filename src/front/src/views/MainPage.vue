<template>
  <div>
    <img alt="Yachtlogo" src="@/assets/Logo.png">
    <h1>Yacht Dice</h1>
    <MainTitle v-if="show.MainTitle" @show="routing($event)"/>
    <CreateRoom v-if="show.CreateRoom" @show="routing($event)"/>
    <JoinRoom v-if="show.JoinRoom" @show="routing($event)"/>
  </div>
</template>

<script>
import MainTitle from '@/components/MainTitle.vue';
import CreateRoom from "@/components/CreateRoom.vue";
import JoinRoom from "@/components/JoinRoom.vue";

export default {
  name: 'App',
  components: {
    MainTitle,
    CreateRoom,
    JoinRoom
  },
  data() {
    return {
      show : {
        MainTitle : true,
        CreateRoom : false,
        JoinRoom : false,
      }
    }
  },
  methods : {
    routing(a) {
      if(a === 1) {
        this.show.MainTitle = false;
        this.show.CreateRoom = true;
        this.show.JoinRoom =false;
      }
      else if(a === 2) {
        this.show.MainTitle = false;
        this.show.CreateRoom = false;
        this.show.JoinRoom = true;
      }
      if(a === 3) {
        this.show.MainTitle = true;
        this.show.CreateRoom = false;
        this.show.JoinRoom = false;
      }
    }
  }
}
</script>

<style>
</style>
