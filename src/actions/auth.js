export const userLogin = async (api, email, password) => {
  let result = null;
  let state_data = {};
  let sucess = false;

  await api
    .post("/accounts/login/", {
      email: email,
      password: password,
    })
    .then((res) => {
      state_data = {
        access: res.data.access,
        refresh: res.data.refresh,
        profile_picture: res.data.profile_picture,
        user_id: res.data.id,
      };
      result = res;
      sucess = true;
    })
    .catch((res) => {
      sucess = false;
      result = res;
    });

  return {
    result: result,
    sucess: sucess,
    state_data: state_data,
  };
};

export const userSignUp = async (
    api, user_name, email, password,
    ) => {
    let sucess = false;
    let response = null;
    let result = null;

    await api.post('/accounts/users/', {
        "name_user": user_name,
        "email": email,
        "password": password
    })
    .then(res => {
        sucess = true;
        response = res;
        result = res.data
    })
    .catch(res => {
        sucess = false;
        response = res
    })

    return ({
        sucess: sucess,
        response: response,
        result: result
    })
}

export const userSendRestorecode = async (
    api, email
    ) => {
    let sucess = false;
    let response = null;
    let result = null;

    await api.post('/accounts/send_email/', {
        "receiver": email
    })
    .then(res => {
        sucess = true;
        response = res;
        result = res.data
    })
    .catch(res => {
        sucess = false;
        response = res
    })

    return ({
        sucess: sucess,
        response: response,
        result: result
    })
}


export const userChangePassword = async (
    api, email, code, new_password
    ) => {
    let sucess = false;
    let response = null;
    let result = null;

    await api.post('/accounts/restore_pswd/', {
        "email": email,
        "code": code,
        "new_password": new_password
    })
    .then(res => {
        sucess = true;
        response = res;
        result = res.data
    })
    .catch(res => {
        sucess = false;
        response = res
    })

    return ({
        sucess: sucess,
        response: response,
        result: result
    })
}