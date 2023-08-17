import {
	post,
	get
} from '@/api/api.js'

//视频练习开始
export function start(data) {
	return get('/work/studentWork/practice/video/', data)
}

//视频练习提交
export function submit(data) {
	return get('/work/studentWork/practice/video/submit', data)
}
