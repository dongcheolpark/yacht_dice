<template>
	<div>
		<h1>방 참가</h1>
		<p>
			<input @keyup.enter="RoomNumCheck" v-model="RoomNum" placeholder="1~9999까지 입력하세요"> 
			<button @click="RoomNumCheck">submit</button>
		</p>
		<p v-if="ErrorShow">{{msg}}</p>
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
	methods : {
		RoomNumCheck() {
			this.msg = "에러발생";
			this.ErrorShow = true;
		},
	}
}
</script>