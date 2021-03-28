export const authProvider = {
  login: async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    localStorage.setItem("isAuth", "true");
    localStorage.setItem("user", JSON.stringify({ username, password }));
  },
  logout: async () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isAuth");
  },
  checkAuth: async () => {
    return JSON.parse(localStorage.getItem("isAuth") || "");
  },
  checkError: async (error: any) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem("token");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  getMe: async () => {
    return JSON.parse(localStorage.getItem("user") || "");
  },
  getPermissions: async () => {
    const role = localStorage.getItem("permissions");
    return role ? Promise.resolve(role) : Promise.reject();
  },
};
