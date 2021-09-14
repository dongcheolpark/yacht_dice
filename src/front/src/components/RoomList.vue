<template>
	<div class="form_box">
		<h1>RoomList</h1>
		<backward @back="$emit('show',0)" />
	</div>
</template>
<script>
import backward from "./buttons/backward.vue";

export default {
	name : 'roomList',
	components : {
		backward
	},
	methods : {
		
	}
}
</script>
<style scoped>

</style>