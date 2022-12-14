import store from '@/store/index.js'
class Http {
	static appid = 'bd9d01ecc75dbbaaefce'
	//#ifdef H5
	static baseUrl = '/api'
	// #endif
	static token = store.state.token
	static request(options = {}) {
		return new Promise((resolve, reject) => {
			uni.request({
				url: Http.baseUrl + options.url,
				data: options.data || {}
				header: {
					appid: Http.appid,
					token: Http.token,
					...options.header
				},
				method: options.method || "GET"
				success: (res) => {
					resolve(res)
				},
				fail: (err) => {
					reject(err)
				}
			})
		})
	}
}
export default Http
