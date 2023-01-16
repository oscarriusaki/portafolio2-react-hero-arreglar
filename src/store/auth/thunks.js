import { checking, login } from "./authSlice";

export const loginWithEmailPassword = ({email, password}) => {
    return async(dispatch) => {
        dispatch(checking())
        const url = 'http://localhost:8080/login';
        const method= 'POST'
        const headers = {
            "Context-type":"application/json",
        }
        const formdata = new FormData();
        formdata.append("email", email);
        formdata.append("pas", password);

        const resp = await fetch(url, {
            method: method,
            headers: headers,
            body: formdata
        });
        const data = await resp.json();
        const user = {
            id: data.user.id_user,
            first_name: data.user.first_name,
            email: data.user.email,
            token: data.token,
            fecha: data.user.fecha
        }
        localStorage.setItem('token', data.token)
        dispatch(login(user))
    }
}

export const registerWithEmailPassword = ({first_name, email, password}) => {
    return async (dispatch) => {
        dispatch(checking());
        const url = 'http://localhost:8080/user';
        const method = "post"
        const headers = {
            "Context-Type":"application/json"
        }
        const formData = new FormData();
        formData.append("first_name",first_name)
        formData.append("email",email)
        formData.append("pas",password)
         
        const resp = await fetch(url, {
            method: method,
            headers: headers,
            body:formData,
        })
        const data = await resp.json()

        const user = {
            id: data.user.id_user,
            first_name: data.user.first_name,
            email: data.user.email,
            token: data.token,
            fecha: data.user.fecha
        }
        localStorage.setItem('token', data.token)
        dispatch(login(user))
    }
}
export const validarToken = (data) => {
    return async(dispatch) => {
        await dispatch(checking())
        const user = await {
            id: data.id_user,
            first_name: data.first_name,
            email: data.email,
            token: data.token,
            fecha: data.fecha
        }
        dispatch(login(user))
    }
}
