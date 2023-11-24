
export const userLogin = async (api, email, password) => { 
    let result = null;
    let state_data = {};
    let sucess = false;

    await api.post('/accounts/login/', {
        email: email,
        password: password})
    .then(res => {
        state_data = {
            access: res.data.access,
            refresh: res.data.refresh,
            profile_picture: res.data.profile_picture,
            user_id: res.data.id
            };
        result = res;
        sucess = true })
    .catch(res => {
        sucess = false;
            result = res; 
          })

    return (
        {
            result: result,
            sucess: sucess,
            state_data: state_data
        }
    )
}

export const userSignIn = async (
    api, user_name, email, profile_picture, banner_picture, is_active, is_staff, is_content_creator, is_escourt
    ) => {
    let sucess = false;
    let response = null;
    let result = null;

    await api.post('/accounts/user', {
        
    })
}