import {
	post,
	get
} from '@/api/api.js'


//学生查看所有所选课程
export function listAll(data) {
	return get('/base/course/listAll', data)
}
//课程评价
export function evaluate(data) {
	return post('/base/evaluate', data)
}
