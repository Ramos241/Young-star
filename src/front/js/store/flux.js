const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: localStorage.getItem("token") || "",
      email: "",
      password: "",
      user: [],
      post: [],
      urlBase: "http://127.0.0.1:3001",
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      userLogout: () => {
        localStorage.removeItem("token"), setStore({ token: "" });
        alert("seccion cerrada con exito");
      },

      loginValidityChecker: (user) => {
        if (user.email.trim() != "" && user.password.trim() != "") {
          return true;
        } else {
          return false;
        }
      },

      userLogin: async (user) => {
        try {
          let store = getStore();
          let response = await fetch(`${store.urlBase}/api/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          });
          if (response.ok) {
            let data = await response.json();
            let actions = getActions();
            setStore({
              token: data.token,
            });
            localStorage.setItem("token", data.token);
            actions.getUserInfo();
            return true;
          } else {
            alert("usted no esta registrado");
          }
        } catch (error) {
          console.log(`Error: ${error}`);
        }
      },

      signupValidityChecker: (user) => {
        if (
          user.email == undefined ||
          user.username == undefined ||
          user.password == undefined
        ) {
          return false;
        } else {
          if (
            user.email.trim() != "" &&
            (user.email.includes("@gmail.com") ||
              user.email.includes("@outlook.com") ||
              user.email.includes("@hotmail.com")) &&
            user.username.trim() != "" &&
            user.password.trim() != "" &&
            user.password.length >= 8
          ) {
            return true;
          } else {
            alert("Hay campos no validos");
          }
        }
      },

      userSignup: async (user) => {
        try {
          let store = getStore();
          let response = await fetch(`${store.urlBase}/api/signup`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          });
          if (response.ok) {
            return true;
          } else {
            return false;
          }
        } catch (error) {
          console.log(`Error: ${error}`);
        }
      },

      getUserInfo: async () => {
        let store = getStore();
        try {
          let response = await fetch(`${store.urlBase}/api/users/single_user`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (response.ok) {
            let data = await response.json();
            setStore({
              username: data.username,
              email: data.email,
            });
            return true;
          } else {
            return false;
          }
        } catch (error) {
          console.log(`Error: ${error}`);
        }
      },

      uploadImg: async (post) => {
        const store = getStore();
        try {
          const response = await fetch(`${store.urlBase}/api/post`, {
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
          const response = await fetch(`${store.urlBase}/api/post`);
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
          const response = await fetch(`${store.urlBase}/api/post/${post_id}`, {
            method: "DELETE",
          });
          console.log(response);
          getActions().getPost();
        } catch (error) {
          console.log("deletePost error", error);
        }
      },
    },
  };
};

export default getState;
