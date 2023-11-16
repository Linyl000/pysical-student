import {
	post,
	get
} from '@/api/api.js'

//获取信息
export function getBolb(data) {
	return get('/wxapi/common/bolb/getBolb', data)
}
