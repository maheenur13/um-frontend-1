import { IDepartment, IMeta } from "@/interfaces";
import { tagTypes } from "../tagTypes";
import { baseApi } from "./base-api";

const DEPARTMENT_URL = "/management-departments";

const departmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getDepartments: build.query({
      query: (arg: Record<string, any>) => ({
        url: DEPARTMENT_URL,
        method: "GET",
        params: arg,
      }),
      transformResponse: async (response: IDepartment, meta: IMeta) => {
        return {
          departments: response,
          meta,
        };
      },
      providesTags: [tagTypes.department],
    }),
    createDepartment: build.mutation({
      query: (payload) => ({
        url: `${DEPARTMENT_URL}`,
        method: "POST",
        data: payload,
      }),
      invalidatesTags: [tagTypes.department],
    }),
  }),
  overrideExisting: false,
});

export const { useCreateDepartmentMutation, useGetDepartmentsQuery } =
  departmentApi;
