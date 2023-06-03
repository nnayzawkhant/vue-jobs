<template lang="">
     <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <form class="row">
                    <div class="col-lg-12 mb-3">
                        <h4>Post a New Job</h4>
                    </div>
                    <div class="col-lg-12 mb-3">
                        <label for="exampleInputJobTitle1" class="form-label">Job Title</label>
                        <input type="text" class="form-control" id="exampleInputJobTitle1">
                    </div>
                    <div class="col-lg-6 mb-3">
                        <label for="exampleInputCompany1" class="form-label">Company</label>
                        <input type="text" class="form-control" id="exampleInputCompany1" >
                    </div>
                    <div class="col-lg-6 mb-3">
                        <label for="exampleInputCompanyLogo1" class="form-label">Company Logo</label>
                        <input type="file" class="form-control" id="exampleInputCompanyLogo1" >
                    </div>
                    <div class="col-lg-6 mb-3">
                        <label for="exampleInputCategory1" class="form-label">Category</label>
                        <input type="text" class="form-control" id="exampleInputCategory1" >
                    </div>
                    <div class="col-lg-6 mb-3">
                        <label for="exampleInputSalary2" class="form-label">Salary</label>
                        <input type="text" class="form-control" id="exampleInputSalary2">
                    </div>
                    <div class="col-lg-12 mb-3">
                        <label for="description" class="form-label">Description</label>
                        <textarea class="form-control" id="description" rows="5"></textarea>
                    </div>

                    <div class="col-lg-12 mb-3">
                    <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>