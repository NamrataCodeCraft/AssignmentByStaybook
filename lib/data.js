let users = [];
let userData = '';

export const postData = async (data) => {
    userData = data;
    return userData
    // return users.push(data);
}

export const getUser = () => users