<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-6">
                <form>
                    <div class="mb-3">
                        <h4>Login to Post a Job</h4>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1">
                    </div>
                    <div>
                        <p class="text-start">Don't have an account? <router-link to="/register">Register</router-link> </p>
                    </div>
                    <button type="submit" class="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    
</style>