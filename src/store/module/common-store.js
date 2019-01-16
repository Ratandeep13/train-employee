import employeeService from '@/api/employee-service'

const state = {
  allEmployeesData: [],
  createEmployee: {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    dateOfJoining: '',
  },
  editEmployee: {}
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
  },
  EDIT_EMP_FIRST_NAME: (state, firstName) => {
    state.editEmployee.firstName = firstName
  },
  EDIT_EMP_LAST_NAME: (state, lastName) => {
    state.editEmployee.lastName = lastName
  },
  EDIT_EMP_DOB: (state, dob) => {
    state.editEmployee.dateOfBirth = dob
  },
  EDIT_EMP_DOJ: (state, doj) => {
    state.editEmployee.dateOfJoining = doj
  },
  UPDATE_EDIT_EMP_DATA: (state, empObj) => {
    state.editEmployee = empObj
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

  createNewEmp ({commit}, {empData ,success, failure}) {
    employeeService.addNewEmployee((response) => {
      success(response)
    }, (error) => {
      failure(error)
    }, empData)
  },

  deleteEmpData ({commit}, {employeeId ,success, failure}) {
    employeeService.deleteEmployeeById((response) => {
      success(response)
    }, (error) => {
      failure(error)
    }, employeeId)
  },

  editEmp ({commit}, {empData ,success, failure}) {
    employeeService.updateEmployee((response) => {
      success(response)
    }, (error) => {
      failure(error)
    }, empData)
  }

}

const getters = {
  allEmployeesData: (state) => {
    return state.allEmployeesData
  },
  createdEmpData: (state) => {
    return state.createEmployee
  },
  getEditEmpData: (state) => {
    return state.editEmployee
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
