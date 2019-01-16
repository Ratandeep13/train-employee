<template>
  <div class="container">
    <div class="row">
      <div class="heading">
        <h4>EDIT EMPLOYEE</h4>
      </div>
      <div class="fields__wrapper">
        <div class="row">
          <div class="input-field col s6">
            <input id="firstName" type="text" class="validate"
              @keyup="setData($event, 'EDIT_EMP_FIRST_NAME')"
              v-model="empData.firstName">
          </div>
          <div class="input-field col s6">
            <input id="lastName" type="text" class="validate"
              @keyup="setData($event, 'EDIT_EMP_LAST_NAME')"
              v-model="empData.lastName">
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="dob" type="text" class="datepicker"
              @keyup="setData($event, 'EDIT_EMP_DOB')"
              v-model="empData.dateOfBirth">
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="doj" type="text" class="validate"
              @keyup="setData($event, 'EDIT_EMP_DOJ')"
              v-model="empData.dateOfJoining">
          </div>
        </div>
        <div class="row">
          <div class="col s12">
            <a class="waves-effect waves-light btn"
              @click="editEmp()"><i class="material-icons left">cloud</i>Edit Employee</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript" src="./js/edit-employee.js"></script>

<style type="text/css">
.heading {
  padding: 10px 24px;
  background-color: #e0f2f1;
  margin: 0 auto;
  width: calc(100% - 18px);
  border-radius: 4px;
}
h4 {
  margin: 0px;
}
.fields__wrapper {
  width: 98%;
  margin: 20px auto;
  border-radius: 4px;
  border: 1px solid #26a69a;
  background-color: #e0f2f1;
  padding: 24px;
}
</style>
