import { commonRequest } from "./commonRequest";
import { BASE_URL } from "./base_url";
// for api call, like u had http in angular, we have axios here
// we r passing file here, so we need to put contenttype as applictaion/json in header
// this is needed only for post and not for get request
// we make a common request format with common header and body and v will call them wen needed
// register api
export const empRegister = async (body, header) => {
    return await commonRequest("POST", `${BASE_URL}/employee/register`, body, header)
}

// getallusers api
export const getallusers = async (search) => {
    return await commonRequest("GET", `${BASE_URL}/get-all-employees?search=${search}`, "")
}

// profile api
export const viewuser = async (id) => {
    return await commonRequest("GET", `${BASE_URL}/employee/view/${id}`, "")
}

// edit api
export const editUser = async (id, body, header) => {
    return await commonRequest("PUT", `${BASE_URL}/employee/edit/${id}`, body, header)
}

// edit status
export const editStatus = async (id, body, header) => {
    return await commonRequest("PUT", `${BASE_URL}/employee/edit/status/${id}`, body, header);
}

// del user
export const deleteuser = async (id) => {
    return await commonRequest("DELETE", `${BASE_URL}/employee/delete/${id}`, {})
}