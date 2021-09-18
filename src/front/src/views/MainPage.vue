<template>
  <div>
    <img alt="Yachtlogo" src="@/assets/Logo.png">
    <h1>Yacht Dice</h1>
    <MakeUserProfile @UserProfile="SaveProfile($event)"/>
    <MainTitle v-if="show.MainTitle" @show="routing($event)"/>
    <CreateRoom v-if="show.CreateRoom" :user="UserProfile" @show="routing($event)"/>
    <JoinRoom v-if="show.JoinRoom" :user="UserProfile" @show="routing($event)"/>
    <RoomList v-if="show.RoomList" @show="routing($event)"/>
  </div>
</template>

<script>
import MainTitle from '@/components/MainTitle.vue';
import CreateRoom from "@/components/CreateRoom.vue";
import JoinRoom from "@/components/JoinRoom.vue";
import RoomList from "@/components/RoomList.vue";
import MakeUserProfile from '../components/MakeUserProfile.vue';

export default {
  name: 'App',
  components: {
    MainTitle,
    CreateRoom,
    JoinRoom,
    RoomList,
    MakeUserProfile
  },
  data() {
    return {
      show : {
        MainTitle : true,
        CreateRoom : false,
        JoinRoom : false,
        RoomList : false,
      },
      UserProfile : undefined
    }
  },
  methods : {
    routing(a) {
      if(a === 0) {
        this.show.MainTitle = true;
        this.show.CreateRoom = false;
        this.show.JoinRoom = false;
        this.show.RoomList = false;
      }
      else if(a === 1) {
        this.show.MainTitle = false;
        this.show.CreateRoom = true;
        this.show.JoinRoom = false;
        this.show.RoomList = false;
      }
      else if(a === 2) {
        this.show.MainTitle = false;
        this.show.CreateRoom = false;
        this.show.JoinRoom = true;
        this.show.RoomList = false;
      }
      else if(a === 3) {
        this.show.MainTitle = false;
        this.show.CreateRoom = false;
        this.show.JoinRoom = false;
        this.show.RoomList = true;
      }
    },
    SaveProfile(username) {
      this.UserProfile = username
    }
  }
}
</script>

<style>
</style>
