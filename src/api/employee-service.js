import commonService from '@/api/index'

const apiPath = {
  employees_list: '/backend/employee/getAll',
  deleteEmpById: id => `/backend/employee/delete/${encodeURIComponent(id)}`,
  add_employee: '/backend/employee/addOrUpdate'
}

const employeeService = {
  getAllEmployeeList (callback, errHandler) {
    commonService.getDataViaApi(apiPath.employees_list, callback, errHandler)
  },
  deleteEmployeeById (id, callback, errHandler) {
    commonService.getDataViaApi(apiPath.deleteEmployeeById(id), callback, errHandler)
  },
  addNewemployee (empObj, callback, errHandler) {
    commonService.postDataViaApi(apiPath.add_employee, empObj, callback, errHandler)
  },
  updateEmployee (empObj, callback, errHandler) {
    commonService.postDataViaApi(apiPath.add_employee, empObj, callback, errHandler)
  }
}

export default employeeService
