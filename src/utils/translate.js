import { getCookie } from "./cookie";

let language = "";

export const t = (word) => {
	if(!language) {
		language = getCookie("lang") || "vi";
	}

	return dictionary[language][word];
}

const dictionary = {
	"vi": {
		"management_line": "Quản lý line",
		"management_tracking_tool": "Tool quản lý / tracking",
		"sign_in": "Đăng nhập",
		"username": "Tên đăng nhập",
		"password": "Mật khẩu",
	},
	"en": {
		"management_line": "Management Line",
		"management_tracking_tool": "Management / tracking tool",
		"sign_in": "Sign In",
		"username": "Username",
		"password": "Password",
	}
}