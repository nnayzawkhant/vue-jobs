<script setup>
import { useJobs } from '../composables/useJobs'
const {
  fetchJobs,
  jobsDownloading,
  jobsCount,
  jobs,
  updateJob,
  page,
  changePage,
} = useJobs()

await fetchJobs()
console.log("jobs", jobs)
</script>

<template>
                <div class="col-lg-12">
                <div
                    v-if="jobsDownloading"
                    class="jobs-preview"
                >
                    Loading. Please wait...!
                </div>
                <div
                    v-else-if="jobs.length === 0"
                    class="jobs-preview"
                >
                    No jobs are here... yet.
                </div>

                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Job Title</th>
                        <th scope="col">Company</th>
                        <th scope="col">Salary</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr
                        v-for="(job, index) in jobs"
                        :key="job.id"
                        >
                        <td scope="row">{{ job.id }}</td>
                        <td>{{job.title}}</td>
                        <td>{{job.company}} </td>
                        <td>{{ job.salary }}</td>
                        </tr>
                       
                    </tbody>
                    </table>
            </div>
</template>

<style lang="">
    
</style>