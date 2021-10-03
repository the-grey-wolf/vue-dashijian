import request from '@/utils/request'

export const reguser = (data) => {
    return request({
        url: '/api/reg',
        method: 'post',
        data
    })
}

export const login = (data) => {
    return request({
        url: '/api/login',
        method: 'post',
        data
    })
}