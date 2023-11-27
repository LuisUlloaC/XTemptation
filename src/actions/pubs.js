

export const getPublications = async (api) => {
    let result = null;
    let response = null;
    let sucess = false;
    await api.get('/publications/pub/')
    .then(res => {
        response = res;
        result = res.data;
        sucess = true;
    })
    .catch(res => {
        sucess = false;
        response = res;

    });

    return(
        {
            response: response,
            result: result,
            sucess: sucess
        }
    )
}

export const getPublicationsById = async (api, pub_id) => {
    let result = null;
    let response = null;
    let sucess = false;

    await api.get('/publications/pub/'+pub_id)
    .then(res => {
        result = res.data;
        response = res;
        sucess = true;
    })
    .catch(res => {
        response = res;
        sucess = false;
    });

    return(
        {
            response: response,
            result: result,
            sucess: sucess
        }
    )
}

export const getPublicationsByUser = async (api, user_id) => {
    let result = null;
    let response = null;
    let sucess = false;

    await api.get('/publications/user/'+user_id)
    .then(res => {
        result = res.data;
        response = res;
        sucess = true;
    })
    .catch(res => {
        response = res;
        sucess = false;
    });

    return(
        {
            response: response,
            result: result,
            sucess: sucess
        }
    )
}