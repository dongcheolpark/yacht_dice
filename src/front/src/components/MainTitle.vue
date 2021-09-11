<template>
<div>
	<h1>MainTitle</h1>
	<input @keyup.enter="RoomNumCheck" v-model="RoomNum" placeholder="1~9999까지 입력하세요"> 
	<p v-if="ErrorShow">{{RoomNum}}</p>
	<button v-on:click="RoomNumCheck">submit</button>
</div>
</template>

<script>
export default {
	name : 'MainTitle',
	data() {
		return {
			msg : "hello",
			RoomNum : 0,
			ErrorShow : false,
		}
	},
	method : {
		RoomNumCheck() {
			this.msg = "에러발생";
			this.ErrorShow = true;
		},
	}
}
</script>