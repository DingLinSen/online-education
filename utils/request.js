class Http {
	static appid = 'bd9d01ecc75dbbaaefce',
		static baseUrl = 'http://demonuxtapi.dishait.cn/mobile'
	static request(options = {}) {
		return new Promise((resolve, reject) => {
			uni.request({
				url: Http.baseUrl + options.url,
				data,
				header: {
					appid: Http.appid,
					...options.header
				},
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
