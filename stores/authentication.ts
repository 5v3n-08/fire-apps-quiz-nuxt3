import { validateEmail, validateRequired } from "./../helpers/validation";
import { acceptHMRUpdate, defineStore } from "pinia";
import { User } from "~/models/user.model";
import { mande } from "mande";

const autehnticationApi = mande("/api/users");
export const useAuthentication = defineStore({
  id: "authentication",

  state: () => ({
    token: null as String | null,
    authUser: null as User | null,
  }),

  getters: {
    authUser: (state) => state.authUser,
    token: (state) => state.token,
    isAuthenticated: (state) => state.token != null,
  },

  actions: {
    async requestAuthentication(
      mode: ERequestAuthenticationMode,
      options?: IRequestAuthenticationOptions
    ) {
      if (mode === ERequestAuthenticationMode.login) {
        console.log(0);

        if (
          validateEmail(options.email) &&
          validateRequired(options.password)
        ) {
          console.log(1);
          autehnticationApi.post("/authentication/login", {
            email: options.email,
            password: options.password,
          });
        }
      }
      return null;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthentication, import.meta.hot));
}

export enum ERequestAuthenticationMode {
  login,
  register,
  token,
}
interface IRequestAuthenticationOptions {
  email?: string;
  password?: string;
}
