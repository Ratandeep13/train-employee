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
    ...mapActions(['getEmployeeList']),
    getEmployeeListData: function () {
      this.$store.dispatch('getEmployeeList', {
        success: this.callOnSuccess,
        failure: this.callOnFail
      })
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
    }
  },
  created () {
    this.getEmployeeListData()
  }
}
