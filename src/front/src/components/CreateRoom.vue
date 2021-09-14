<template>
	<div class="form_box">
		<h1>방 생성</h1>
		<backward @back="$emit('show',0)"/>
		<div class="form_box_contents">
			<div>방제</div>
			<input v-model="roomTitle"/>
		</div>
		<div class="form_box_contents">
			<div>최대인원 : {{maxPeople}}</div>
			<input type="range" min="1" max="8" v-model="maxPeople"/>
		</div>
		<button @click="addRoom()">방만들기</button>
	</div>
</template>

<script>
import axios from "axios";
import backward from "./buttons/backward.vue";
export default {
	name : "CreateRoom",
	components : {
		backward,
	},
	data() {
		return {
			roomTitle : "UnTitled",
			maxPeople : 4,
		}
	},
	methods : {
		addRoom() {
			const formdata = {
				roomTitle : this.roomTitle,
				maxPeople : this.maxPeople
			}
			axios.post("http://localhost:8081/Room",formdata,{
				headers: {
					"Content-Type": `application/json`,
					"access-control-allow-origin" : "*"
				}
			})
		}
	}
}
</script>

<style scoped>
</style>