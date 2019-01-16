import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'EmployeeList',
  computed: {
    ...mapGetters(['allEmployeesData']),

    employeeList: function() {
      return this.allEmployeesData
    }
  },
  methods: {
    ...mapActions(['getEmployeeList', 'deleteEmpData']),

    getEmployeeListData: function () {
      this.$store.dispatch('getEmployeeList', {
        success: this.callOnSuccess,
        failure: this.callOnFail
      })
    },
    addEmployee () {
      this.$router.push('/employee/addEmployee')
    },
    editDetails (data) {
      let empData = JSON.parse(JSON.stringify(data))
      empData.dateOfBirth = this.convertTStoDate(data.dateOfBirth)
      empData.dateOfJoining = this.convertTStoDate(data.dateOfJoining)
      this.$store.commit('UPDATE_EDIT_EMP_DATA', empData)
      this.$router.push('/employee/editEmployee')
    },
    callOnSuccess: function (response) {
      console.log(response)
    },
    callOnFail: function (error) {
      console.log(error)
    },
    convertTStoDate: function (timestamp) {
      let a = new Date(timestamp)
      let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      let year = a.getFullYear()
      let month = months[a.getMonth()]
      let monthNo = a.getMonth() + 1
      let date = a.getDate()
      return date + '-' + monthNo + '-' + year.toString()
    },
    deleteEmpSuccess () {
      this.getEmployeeListData()
    },
    deleteEmp (empId) {
      this.$store.dispatch('deleteEmpData', {
        employeeId: empId,
        success: this.deleteEmpSuccess,
        failure: this.callOnFail
      })
    }
  },
  created () {
    this.getEmployeeListData()
  }
}
