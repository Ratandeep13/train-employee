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
  deleteEmployeeById (callback, errHandler, id) {
    commonService.getDataViaApi(apiPath.deleteEmpById(id), callback, errHandler)
  },
  addNewEmployee (callback, errHandler, empObj) {
    commonService.postDataViaApi(apiPath.add_employee, empObj, callback, errHandler)
  },
  updateEmployee (callback, errHandler, empObj) {
    commonService.postDataViaApi(apiPath.add_employee, empObj, callback, errHandler)
  }
}

export default employeeService
