import { defineStore } from 'pinia'
import { ref } from 'vue'
import { userGetInfoService } from '@/api/user'
// import { async } from "@kangc/v-md-editor";

export const useUserStore = defineStore(
  'user',
  () => {
    // 用户信息
    const userInfo = ref({})
    const getUserInfo = async () => {
      const res = await userGetInfoService()
      userInfo.value = res.data
    }
    const setUserInfo = (obj: object) => {
      userInfo.value = obj
    }
    const removeUserInfo = () => {
      userInfo.value = {}
    }
    // token
    const token = ref('')
    const setToken = (newToken: string) => {
      token.value = newToken
    }
    const removeToken = () => {
      token.value = ''
    }
    return {
      userInfo,
      getUserInfo,
      setUserInfo,
      token,
      setToken,
      removeToken,
      removeUserInfo
    }
  },
  {
    persist: true,
    // 数据持久化
    // key: 'wqer'
  }
)
