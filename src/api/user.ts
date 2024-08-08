import request from '@/utils/request'

// 获取用户信息接口
export const userGetInfoService = () =>
  request.get('/my/userinfo')