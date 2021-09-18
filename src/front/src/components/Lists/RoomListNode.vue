<template>
	<div class="roomListNode" >
		<a class="fill-div" :href="`/Game?room=${Room.roomNum}`">
			<p>
				{{Room.roomTitle}}
				{{Room.maxPeople}}
			</p>
		</a>
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
.a.fill-div {
	display: block;
    height: 100%;
    width: 100%;
    text-decoration: none;
}
.roomListNode {
	border : 1px solid black;
	margin : 1rem;
}
</style>