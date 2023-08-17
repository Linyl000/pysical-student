import {
	post,
	get
} from '@/api/api.js'


//学生查看所选课程
export function courseList() {
	return get('/base/course/list')
}
