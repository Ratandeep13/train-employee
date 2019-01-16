import { mapGetters, mapActions } from 'vuex'

export default {
	name: 'AddEmployee',
	computed: {
		...mapGetters(['createdEmpData'])
	},
	methods: {
		...mapActions(['createNewEmp']),

		setData (evt, key) {
			this.$store.commit(key, evt.currentTarget.value)
		},
		addEmpSuccess () {
			this.$router.push('/employee/all')
		},
		failure (error) {
			console.log(error)
		},
		addEmp () {
			this.$store.dispatch('createNewEmp', {
				empData: this.createdEmpData,
				success: this.addEmpSuccess,
				failure: this.failure
			})
		}
	}
}