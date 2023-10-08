import {
	post,
	get
} from '@/api/api.js'

//视频练习开始
export function start(data) {
	return get('/work/studentWork/practice/video/' + data.id)
}

//视频练习提交
export function submit(data) {
	return post('/work/studentWork/practice/video/submit', data)
}
//切片上传
export function upload(data) {
	return post('/background/file/upload', data)
}
//合并
export function merge(data) {
	return post('/background/file/merge', data)
}
