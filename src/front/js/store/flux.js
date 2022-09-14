const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: localStorage.getItem("token") || "",
			users: []
		},
		actions: {
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
						return false
					}
				}
			},
			userRegister: async () => {
				let store = getStore();
				try {
					let response = await fetch(`http://172.16.0.7:3001/api/private`, {
						method: 'GET',
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${store.token}`,
						},
						body: JSON.stringify(),
					})
					if (response.ok) {
						let data = await response.json();
						setStore({ users: data });
						return true
					} else {
						return false
					}
				} catch (error) {
					console.log(`Error: ${error}`)
				}
			},

			test: () => {
				console.log("Hello")
			},

			userSignup: async (user) => {
				try {
					let response = await fetch(`http://172.16.0.7:3001/api/signup`, {
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
