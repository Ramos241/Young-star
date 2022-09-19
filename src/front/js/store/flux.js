const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: localStorage.getItem("token") || "",
			users: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			loginValidityChecker: (user) => {
				if (user.email.trim() != "" && user.password.trim() != "") {
					return true
				}
				else {
					return false
				}
			},

			userLogin: async (user) => {
				try {
					let response = await fetch(`http://172.0.0.1:3001/api/login`, {
						method: 'POST',
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(user),
					})
					if (response.ok) {
						let data = await response.json()
						setStore({ token: data.token })
						localStorage.setItem("token", data.token)
						return true
					} else {
						return false
					}
				} catch (error) {
					console.log(`Error: ${error}`)
				}
			},

			signupValidityChecker: (user) => {
				if (user.email == undefined || user.username == undefined || user.password == undefined) {
					return false
				} else {
					if (user.email.trim() != "" &&
						(user.email.includes("@gmail.com") || user.email.includes("@outlook.com") || user.email.includes("@hotmail.com")) &&
						user.username.trim() != "" &&
						user.password.trim() != "" &&
						user.password.length >= 8) {
						return true
					}
					else {
						alert("Error:Hay campos no validos")
						return false
					}
				}
			},

			userSignup: async (user) => {
				try {
					let response = await fetch(`http://127.0.0.1:3001/api/signup`, {
						method: 'POST',
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(user),
					})
					if (response.ok) {
						return true
					} else {
						return false
					}
				} catch (error) {
					console.log(`Error: ${error}`)
				}
			},


		}
	};
};

export default getState;
