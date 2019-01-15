import employeeService from '@/api/employee-service'

const state = {
  allEmployeesData: []
}

const mutations = {
  ALL_EMPLOYEES_DATA: (state, list) => {
    state.allEmployeesData = list
  }
}

const actions = {
  getEmployeeList ({ commit }, { success, failure }) {
    employeeService.getAllEmployeeList((response) => {
      commit('ALL_EMPLOYEES_DATA', response.body)
    }, (error) => {
      commit('ALL_EMPLOYEES_DATA', [])
      failure(error)
    })
  }
}

const getters = {
  allEmployeesData: (state) => {
    return state.allEmployeesData
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
