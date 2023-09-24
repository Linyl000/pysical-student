import {
	post,
	get
} from '@/api/api.js'

//登录
export function fianlResult(data) {
	return get('/work/studentWork/fianlResult', data)
}
