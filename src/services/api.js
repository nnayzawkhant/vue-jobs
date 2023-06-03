
import { ContentType, HttpClient } from "./httpClient";

export class Api extends HttpClient {


    jobs = {

      getJobs: (
        query,
        params = {},
      ) =>
        this.request({
          path: `/jobs`,
          method: "GET",
          query: query,
          secure: false,
          ...params,
        }),

      createJob: (
        data,
        params = {},
      ) =>
        this.request({
          path: `/jobs`,
          method: "POST",
          body: data,
          secure: true,
          ...params,
        }),

      getJob: (id, params = {}) =>
        this.request({
          path: `/articles/${slug}`,
          method: "GET",
          secure: false,
          ...params,
        }),
  
      updateJob: (
        id,
        data,
        params = {},
      ) =>
        this.request({
          path: `/jobs/${id}`,
          method: "PUT",
          body: data,
          secure: true,
          ...params,
        }),
  
      deleteJob: (id, params = {}) =>
        this.request({
          path: `/jobs/${id}`,
          method: "DELETE",
          secure: true,
          ...params,
        }),
    };
    
  }

