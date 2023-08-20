import {
	post,
	get
} from '@/api/api.js'


//成绩列表
export function resultList(data) {
	return get('/work/studentWork/result/list', data)
}
