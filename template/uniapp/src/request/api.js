import http from './http.js'
class Api {
	getTest(parms){
		return http.get(`http:test.com`,
		parms,
		{
			headers: {
			          'Content-Type': 'application/json',
			          'token': uni.getStorageSync('token'),
			        },
		})
	}
}
export default new Api()