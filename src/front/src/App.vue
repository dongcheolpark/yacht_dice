<template>
  <div>
    <router-view/>
  </div>  
</template>
<script>
export default {
  name : "App",
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.form_box {
	display : block;
	margin : 0px auto;
	max-width: 300px;
	border : 1px solid black;
	padding : 1rem;
}
.form_box_contents {
	margin : 1rem;
}

.titlebutton {
  margin: 2px;
}
</style>