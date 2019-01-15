<template>
  <div class="container">
    <div class="row">
      Employee List
    </div>
    <div class="row">
      <div class="col s12 m6" v-for="(emp, index) in employeeList" v-bind:key="index">
        <div class="card">
          <div class="card-content teal lighten-5">
            <div>Employee Name: {{emp.firstName}} {{emp.lastName}}</div>
            <div>Date of Birth: {{convertTStoDate(emp.dateOfBirth)}}</div>
            <div>Date of Joining: {{convertTStoDate(emp.dateOfJoining)}}</div>
          </div>
          <div class="card-action teal lighten-1">
            <a href="#">Edit</a>
            <a href="#">Update</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./js/employee-list.js"></script>
