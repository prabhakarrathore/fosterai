import { Config, Method, useApi } from "../../util/fetch/ApiProvider";
import { UserLogin } from "./Login.model";

export const _userLogin = (data: UserLogin): Config => ({
    endpoint: `/loginUser`,
    method: Method.POST,
    body: data
});

export const useLogin = () => {
    const { callApi } = useApi();
    return async (data: UserLogin) => {
        const config: Config = _userLogin(data);
        return callApi(config);
    };
};