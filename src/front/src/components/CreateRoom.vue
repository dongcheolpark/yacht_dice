<template>
	<div class="form_box">
		<h1>방 생성</h1>
		<backward @back="$emit('show',3)"/>
		<div class="form_box_contents">
			<div>방제</div>
			<input/>
		</div>
	</div>
</template>

<script>
import backward from "./buttons/backward.vue";
export default {
	name : "CreateRoom",
	components : {
		backward,
	}
}
</script>

<style scoped>
</style>