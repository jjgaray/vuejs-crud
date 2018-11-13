var app = new Vue({
	el: "#app",
	data: function() {
		return {
			username: null,
			email: null,
			fullname: null,
			address: null,
			mydetail: [
				
			]
		}
	},
	methods: {
		Add: function() {
			this.mydetail.push({
				username: this.username,
				email: this.email,
				fullname: this.fullname,
				address: this.address
			})

		}

	}
})