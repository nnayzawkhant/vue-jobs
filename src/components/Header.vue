<script setup>

</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container  justify-content-between">

    <router-link class="navbar-brand" to="/">Vue Jobs</router-link>

     <div class="d-flex">
        
        <ul class="nav">
            <li class="nav-item">
                <router-link class="nav-link text-light"  to="/login">Login</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link text-light"  to="/register">Register</router-link>
            </li>
        </ul>

        <router-link class="btn btn-outline-success" to="/post-job">Post a Job</router-link>

     </div>
    
      
  </div>
</nav>
</template>

<style scoped>

</style>
