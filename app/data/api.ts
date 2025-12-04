"use client";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export interface Opportunity {
  id: string;
  title: string;
  description: string;
  responsibilities: string;
  requirements: string;
  idealCandidate: string;
  categories: string[];
  opType: string; 
  startDate: string;
  endDate: string;
  deadline: string;
  location: string[];
  requiredSkills: string[];
  whenAndWhere: string;
  orgID: string;
  datePosted: string;
  status: string;
  applicantsCount: number;
  viewsCount: number;
  orgName: string;
  logoUrl: string;
  isBookmarked: boolean;
  isRolling: boolean;
  questions: string | null; 
  createdAt: string;
  updatedAt: string;
  orgPrimaryPhone: string;
  orgEmail: string;
  average_rating: number;
  total_reviews: number;
}


export interface OpportunitiesResponse {
  success: boolean;
  message: string;
  data: Opportunity[]; 
}


export interface SingleOpportunityResponse {
  success: boolean;
  message: string;
  data: Opportunity; 
}

// API Slice
export const opportunitiesApi = createApi({
  reducerPath: "opportunitiesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://akil-backend.onrender.com/" }),
  endpoints: (builder) => ({

    getAllOpportunities: builder.query<OpportunitiesResponse, void>({
      query: () => "opportunities/search",
    }),

    getOpportunityById: builder.query<SingleOpportunityResponse, string>({
      query: (id) => `opportunities/${id}`,
    }),
    
  }),
});


export const { 
  useGetAllOpportunitiesQuery, 
  useGetOpportunityByIdQuery 
} = opportunitiesApi;