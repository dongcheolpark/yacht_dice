<template>
	<div class="user-list">
		<user v-for="user in userList" :key="user"/>
	</div>
</template>
<script>
import User from './Node/User.vue'

export default {
	name : "UserList",
	components : {
		User
	},
	props : [""]
}
</script>
<style scoped>
.user-list {
	height: 100%;
	margin: 0px;
	max-width : 200px;
}
</style>