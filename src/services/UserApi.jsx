import axios from "axios";

axios.defaults.baseURL = 'https://6469e4ba03bb12ac2094d276.mockapi.io/api/Users';

const Users = {
getUsers,
getUsersPagination,
updateFollowersUser,
};

async function getUsers() {
    const config = {
        method: 'get',
    }
    const res = await axios(config);
    return res.data;
}

async function getUsersPagination(page) {
    const config = {
        method: 'get',
        params: {limit: 3, page: `${page}`},
    }
    const res = await axios(config);
    return res.data;
}

async function updateFollowersUser({id, user, tweets, followers, avatar}) {
    const config = {
        method: 'PUT',
        url: `/${id}`,
        data: {user, tweets, followers, avatar},
    }
    const res = await axios(config);
    return res.data;
}

export default Users;
