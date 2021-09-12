<template>
  <div>
    <div  class="form_box">
      <h1>방 참가</h1>
      <backward @back="$emit('show',3)"/>
      <div class="form_box_contents">
        <input @keyup.enter="RoomNumCheck" v-model="RoomNum" placeholder="1~9999까지 입력하세요"> 
        <button  @click="RoomNumCheck">submit</button>
        <p v-if="ErrorShow">{{msg}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import backward from "./buttons/backward.vue";
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
  methods : {
    RoomNumCheck() {
      this.ErrorShow = false;
      if(this.RoomNum<0 || this.RoomNum > 9999) {
        this.msg = "숫자는 0부터 9999사이여야합니다.";
        this.ErrorShow = true;
      }
      else {
        console.log('입장');
      }
    },
  }
}
</script>