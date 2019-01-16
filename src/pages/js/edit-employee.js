import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'EditEmployee',
  data () {
    return {
      empData: {}
    }
  },
  computed: {
    ...mapGetters(['getEditEmpData'])
  },
  methods: {
    setData (evt, key) {
      debugger
      this.$store.commit(key, evt.currentTarget.value)
    },
    editSuccess (response) {
      this.$router.push('/employee/all')
      console.log(response)
    },
    callOnFail (error) {
      console.log(error)
    },
    editEmp () {
      this.$store.dispatch('editEmp', {
        empData: this.getEditEmpData,
        success: this.editSuccess,
        failure: this.callOnFail
      })
    }
  },
  mounted () {
    this.empData = JSON.parse(JSON.stringify(this.getEditEmpData))
  }
}