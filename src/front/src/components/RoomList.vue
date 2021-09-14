<template>
	<div class="form_box">
		<h1>RoomList</h1>
		<backward @back="$emit('show',0)" />
		<button @click="GetRoomList()">불러오기</button>
		<div v-for="room in RoomListData" :key="room">
			<room-list-node :Room="room"/>
		</div>
	</div>
</template>
<script>
import axios from "axios";
import backward from "./buttons/backward.vue";
import RoomListNode from "./Lists/RoomListNode.vue";

export default {
	name : 'roomList',
	components : {
		backward,
		RoomListNode
	},
	data() {
		return {
			RoomListData : []
		}
	},
	methods : {
		GetRoomList() {
			axios.get("http://localhost:8081/Room").then(a => {
				this.RoomListData = a.data;
				console.log(RoomListNode[0]);
			})			
		}
	}
}
</script>
<style scoped>

</style>