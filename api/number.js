import {
	post,
	get
} from '@/api/api.js'

//学院积分排行
export function integralCollege(data) {
	return get('/system/user/integralCollege/list', data)
}
//学校积分排行
export function integralSchool(data) {
	return get('/system/user/integralSchool/list', data)
}
