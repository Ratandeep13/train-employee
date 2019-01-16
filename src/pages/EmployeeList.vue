<template>
  <div class="container">
    <div class="row">
      <div class="heading">
        <h4>Employee List</h4>
        <div class="button__wrapper">
          <button name="addEmployee" @click="addEmployee">Add Employee</button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col s12 m6" v-for="(emp, index) in employeeList" v-bind:key="index">
        <div class="card">
          <div class="card-content teal lighten-5">
            <div class="image__wrapper">
              <img src="/static/images/dummy-pic.png">
            </div>
            <div>Employee Name: {{emp.firstName}} {{emp.lastName}}</div>
            <div>Date of Birth: {{convertTStoDate(emp.dateOfBirth)}}</div>
            <div>Date of Joining: {{convertTStoDate(emp.dateOfJoining)}}</div>
          </div>
          <div class="card-action teal lighten-1">
            <a href="javaScript:void(0)"
              @click="editDetails(emp)">Edit</a>
            <a href="javaScript:void(0)"
              @click="deleteEmp(emp.employeeId)">Delete</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style type="text/css">
  .heading {
    padding: 10px 24px;
    background-color: #e0f2f1;
    margin: 0 auto;
    width: calc(100% - 18px);
    border-radius: 4px;
    display: flex;
  }
  h4 {
    margin: 0px;
    width: 80%;
  }
  .image__wrapper {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: 20px;
  }
  .image__wrapper img {
    width: 150px;
    height: 150px;
  }
  .card-content {
    text-align: center;
  }
  .button__wrapper {
    text-align: right;
    width: 20%;
  }
  .button__wrapper button {
    outline: none;
    padding: 10px;
    border: none;
    background: #26a69a;
    cursor: pointer;
  }
</style>

<script src="./js/employee-list.js"></script>
