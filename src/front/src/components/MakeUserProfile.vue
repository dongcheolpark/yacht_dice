<template>
	<div class="form_field">
		<div>
			<p>사용자이름</p>
			<p>
				<input type="text" v-model="user.userName"/>
				<button @click="makeUser()">설정</button>
			</p>
		</div>
	</div>
</template>
<script>
import axios from 'axios';
import config from '@/Config.js';
export default {
	name : 'MakeUserProfile',
	data() {
		return {
			user : {
				key : null,
				userName : undefined
			}
		}
	},
	methods : {
		makeUser() {
			axios.post(config.back('users'),{"UserName" : this.user.userName}).then((res) => {
				this.user.key = res.data;
				console.log(this.user);
				this.$emit('UserProfile',this.User)
			})
		}
	}
}
</script>
<style scoped>
.form_field {
	padding : 1rem;
	margin : 1rem auto;
	width : 300px;
	border : 1px solid black;
}
.form_unit {
	height: 1rem;
}
</style>