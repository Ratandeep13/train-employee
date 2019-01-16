<template>
  <div class="container">
    <div class="row">
      <div class="heading">
        <h4>ADD EMPLOYEE</h4>
      </div>
      <div class="fields__wrapper">
        <div class="row">
          <div class="input-field col s6">
            <input id="firstName" type="text" class="validate"
              @keyup="setData($event, 'CREATE_EMP_FIRST_NAME')">
            <label for="firstName">First Name</label>
          </div>
          <div class="input-field col s6">
            <input id="lastName" type="text" class="validate"
              @keyup="setData($event, 'CREATE_EMP_LAST_NAME')">
            <label for="lastName">Last Name</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="dob" type="text" class="datepicker"
              @keyup="setData($event, 'CREATE_EMP_DOB')">
            <label for="dob">Date Of Birth</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="doj" type="text" class="validate"
              @keyup="setData($event, 'CREATE_EMP_DOJ')">
            <label for="doj">Date Of Joining</label>
          </div>
        </div>
        <div class="row">
          <div class="col s12">
            <a class="waves-effect waves-light btn"
              @click="addEmp()"><i class="material-icons left">cloud</i>Add Employee</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript" src="./js/add-employee.js"></script>

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
