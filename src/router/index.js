import Vue from 'vue'
import Router from 'vue-router'
import EmployeeHome from '@/pages/EmployeeHome'
import EmployeeList from '@/pages/EmployeeList'
import AddEmployee from '@/pages/AddEmployee'

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
    }]
  }]
})
