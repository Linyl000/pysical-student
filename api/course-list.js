import {
	post,
	get
} from '@/api/api.js'


//课程列表
export function coureseTaskList(data) {
	return get('/work/coureseTask/list', data)
}
