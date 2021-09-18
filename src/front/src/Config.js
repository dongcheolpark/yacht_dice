export default {
	back_address : "http://localhost:8081/",
	back(query) {
		return this.back_address + query
	}
}
