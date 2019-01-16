import Vue from 'vue'
import Router from 'vue-router'
import EmployeeHome from '@/pages/EmployeeHome'
import EmployeeList from '@/pages/EmployeeList'
import AddEmployee from '@/pages/AddEmployee'
import EditEmployee from '@/pages/EditEmployee'

Vue.use(Router)

const BASE_PATH = '/employee'
export default new Router({
  mode: 'history',
  routes: [{
    path: BASE_PATH,
    name: 'EmployeeHome',
    component: EmployeeHome,
    children: [{
      path: '',
      name: 'EmployeeHome',
      redirect: { name: 'EmployeeList' }
    },
    {
      path: 'all',
      name: 'EmployeeList',
      component: EmployeeList
    },
    {
      path: 'addEmployee',
      name: 'AddEmployee',
      component: AddEmployee
    },
    {
      path: 'editEmployee',
      name: 'EditEmployee',
      component: EditEmployee
    }]
  }]
})
