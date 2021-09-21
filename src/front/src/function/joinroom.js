import axios from "axios"
import config from "@/Config.js";

var joinroom = (t,user,roomId) => {
	var formdata = {
		user,
	}
	axios.post(config.back(`JoinRoom?roomId=${roomId}`,formdata),{
		Headers : {
			"Content-Type" : "application/json"
		}
	}).then(() => {
		t.$router.push(`/Game?room=${roomId}`)
	});	
}
export default joinroom;