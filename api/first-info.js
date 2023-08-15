import {
	post,
	get
} from '@/api/api.js'

//登录
export function login(data) {
	return post('/login', data)
}
//获取验证码
export function getCodeImg() {
	return get('/captchaImage')
}
