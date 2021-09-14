<template>
	<div>
		<button class="titlebutton" @click="$emit('show',1)">방생성</button>
		<button class="titlebutton" @click="$emit('show',2)">방입장</button>
		<button class="titlebutton" @click="$emit('show',3)">방찾기</button>
	</div>
</template>

<script>
export default {
	name : 'MainTitle',
};
</script>

<style scoped>

</style>