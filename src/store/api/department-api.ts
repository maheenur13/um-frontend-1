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
      transformResponse: async (response: IDepartment[], meta: IMeta) => {
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
    getDepartmentById: build.query({
      query: (id: string) => ({
        url: `${DEPARTMENT_URL}/${id}`,
        method: "GET",
      }),
      transformResponse: async (response: IDepartment, meta: IMeta) => {
        return {
          departments: response,
          meta,
        };
      },
      providesTags: [tagTypes.department],
    }),
    updateDepartment: build.mutation({
      query: (payload) => ({
        url: `${DEPARTMENT_URL}/${payload.id}`,
        method: "PATCH",
        data: payload.body,
      }),
      invalidatesTags: [tagTypes.department],
    }),
    deleteDepartment: build.mutation({
      query: (payload) => ({
        url: `${DEPARTMENT_URL}/${payload.id}`,
        method: "Delete",
      }),
      invalidatesTags: [tagTypes.department],
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreateDepartmentMutation,
  useGetDepartmentsQuery,
  useGetDepartmentByIdQuery,
  useUpdateDepartmentMutation,
  useDeleteDepartmentMutation,
} = departmentApi;
