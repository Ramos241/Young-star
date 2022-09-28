const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            token: localStorage.getItem("token") || "",
            email: "",
            password: "",
            user: [],
            // backendUrl: process.env.BACKEND_URL,
            post: [],
        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },

            userLogout: () => {
                localStorage.removeItem("token"),
                    setStore({ token: "" })
                alert("seccios cerrada con exito")
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
                    let response = await fetch(`http://127.0.0.1:3001/api/login`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(user),
                    })
                    if (response.ok) {
                        let data = await response.json()
                        let actions = getActions()
                        setStore({
                            token: data.token,
                        })
                        localStorage.setItem("token", data.token)
                        actions.getUserInfo()
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

            getUserInfo: async () => {
                let store = getStore()
                try {

                    let response = await fetch(`http://127.0.0.1:3001/api/users/single_user`, {

                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    })
                    if (response.ok) {
                        let data = await response.json()
                        setStore({
                            username: data.username,
                            email: data.email,
                        })
                        return true
                    } else {
                        return false
                    }
                } catch (error) {
                    console.log(`Error: ${error}`)
                }
            },

            uploadImg: async (post) => {
                const store = getStore();
                try {
                    const response = await fetch(`http://127.0.0.1:3001/api/post`, {
                        method: "POST",
                        body: post,
                    });
                    getActions().getPost();
                } catch (error) {
                    console.log("getPost Error", error);
                }
            },

            getPost: async () => {
                const store = getStore();
                try {
                    const response = await fetch(`http://127.0.0.1:3001/api/post`);
                    const data = await response.json();
                    if (!response.ok) {
                        throw new Error("getPost error", error);
                    }
                    setStore({
                        ...store,
                        post: data,
                    });
                } catch (error) {
                    console.log("getPost Error", error);
                }
            },

            deletePost: async (post_id) => {
                const store = getStore();
                try {
                    const response = await fetch(`http://127.0.0.1:3001/api/post/${post_id}`,
                        {
                            method: "DELETE",
                        }
                    );
                    console.log(response);
                    getActions().getPost();
                } catch (error) {
                    console.log("deletePost error", error);
                }
            },
        }
    };
};

export default getState;