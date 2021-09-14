<template>
	<div class="roomListNode">
		<p>
			{{Room.roomTitle}}
			{{Room.maxPeople}}
		</p>
	</div>
</template>
<script>
export default {
	name : "RoomListNode",
	props : ['Room'],
	methods : {

	}
}
</script>
<style scoped>
.roomListNode {
	border : 1px solid black;
	margin : 1rem;
}
</style>