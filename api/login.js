import Http from "@/utils/request.js"
export default {
	login() {
		let token =
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6bnVsbCwicGhvbmUiOm51bGwsImlkIjo4NjMsInVzZXJuYW1lIjoieWFuZ2xpbmdtciIsIm5pY2tuYW1lIjoiIiwicGFzc3dvcmQiOiI4ZDk2OWVlZjZlY2FkM2MyOWEzYTYyOTI4MGU2ODZjZjBjM2Y1ZDVhODZhZmYzY2ExMjAyMGM5MjNhZGM2YzkyIiwiYXZhdGFyIjoiIiwid2VpeGluX3VuaW9uaWQiOm51bGwsInNleCI6IuacquefpSIsImRlc2MiOiIiLCJzdGF0dXMiOjEsImNyZWF0ZWRfdGltZSI6IjIwMjItMTEtMzBUMTQ6Mjg6MzUuMDAwWiIsInVwZGF0ZWRfdGltZSI6IjIwMjItMTEtMzBUMTQ6Mjg6MzUuMDAwWiIsImlhdCI6MTY2OTgxODUzN30.0LhtKDtf2EqYMUW7dp-fYjynEtdHcOr-FQaLhWoyyXA'
		return Http.request({
			url: "/login",
			header: {
				token
			}
		})
	},
