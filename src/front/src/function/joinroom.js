import axios from "axios"
import config from "@/Config.js";

var joinroom = (t,user,roomId) => {
	var formdata = {
		user,
	}
	axios.post(config.back(`JoinRoom?roomId=${roomId}`,formdata)).then(() => {
		t.$router.push(`/game?room=${roomId}`)
	});	
}
export default joinroom;