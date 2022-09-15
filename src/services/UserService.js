import ApiService from '@/services/ApiService'

const UserService = {
  login(data) {
    return ApiService.post('/api/login', data)
  },
  logout() {
    return ApiService.delete('/api/logout')
  },
  register(data) {
    return ApiService.post('/api/register', data)
  },
  signup(params, data) {
    return ApiService.post(`/api/register-step2/${params.id}/user/${params.token}`, data)
  },
  getUserProfile() {
    return ApiService.get(`api/user/profile`)
  },
  updateUserProfile(data) {
    return ApiService.update(`api/user/profile/edit`, data)
  },
  changePassword(data) {
    return ApiService.post(`api/user/profile/change-password`, data)
  }
}

export default UserService
