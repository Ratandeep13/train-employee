import employeeService from '@/api/employee-service'

const state = {
  allEmployeesData: [],
  createEmployee: {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    dateOfJoining: '',
    isActive: true
  }
}

const mutations = {
  ALL_EMPLOYEES_DATA: (state, list) => {
    state.allEmployeesData = list
  },
  CREATE_EMP_FIRST_NAME: (state, firstName) => {
    state.createEmployee.firstName = firstName
  },
  CREATE_EMP_LAST_NAME: (state, lastName) => {
    state.createEmployee.lastName = lastName
  },
  CREATE_EMP_DOB: (state, dob) => {
    state.createEmployee.dateOfBirth = dob
  },
  CREATE_EMP_DOJ: (state, doj) => {
    state.createEmployee.dateOfJoining = doj
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
  },
  createNewEmp ({commit}, {empData, success, failure}) {
    employeeService.addNewemployee((response) => {
      success(response)
    }, (error) => {
      failure(error)
    })
  }
}

const getters = {
  allEmployeesData: (state) => {
    return state.allEmployeesData
  },
  createdEmpData: (state) => {
    return state.createEmployee
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
