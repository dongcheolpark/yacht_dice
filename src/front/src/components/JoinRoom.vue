<template>
  <div>
    <div  class="form_box">
      <h1>방 참가</h1>
      <backward @back="$emit('show',0)"/>
      <div class="form_box_contents">
        <input @keyup.enter="RoomNumCheck" v-model="RoomNum" placeholder="1~9999까지 입력하세요"> 
        <button  @click="RoomNumCheck()">submit</button>
        <p v-if="ErrorShow">{{msg}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import backward from "./buttons/backward.vue";
import joinroom from "@/function/joinroom.js";
export default {
  name : 'MainTitle',
  data() {
    return {
      msg : "hello",
      RoomNum : 0,
      ErrorShow : false,
    }
  },
  components : {
    backward,
  },
  props : ['user'],
  methods : {
    RoomNumCheck() {
      this.ErrorShow = false;
      if(this.RoomNum<0 || this.RoomNum > 9999) {
        this.msg = "숫자는 0부터 9999사이여야합니다.";
        this.ErrorShow = true;
      }
      else {
        axios.get(`http://localhost:8081/GetRoom?RoomNum=${Number(this.RoomNum)}`).then(a => {
          if(a.data == '') {
            this.msg = "존재하지 않는 방입니다.";
            this.ErrorShow = true;
          }
          else {
            joinroom(this,this.user,this.RoomNum);
          }
        });
      }
    },
  }
}
</script>