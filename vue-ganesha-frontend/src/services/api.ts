import axios, { AxiosInstance, AxiosResponse } from 'axios'
import type { ApiResponse } from '@/types'

class ApiService {
  private api: AxiosInstance

  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      }
    })

    this.setupInterceptors()
  }

  private setupInterceptors(): void {
    // Request interceptor
    this.api.interceptors.request.use(
      (config) => {
        // Add auth token if available
        const token = localStorage.getItem('authToken')
        if (token) {
          config.headers.Authorization = `Bearer ${token}`
        }
        return config
      },
      (error) => Promise.reject(error)
    )

    // Response interceptor
    this.api.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error) => {
        if (error.response?.status === 401) {
          // Handle unauthorized access
          localStorage.removeItem('authToken')
          // Redirect to login if needed
        }
        return Promise.reject(error)
      }
    )
  }

  async get<T>(url: string, params?: any): Promise<ApiResponse<T>> {
    try {
      const response = await this.api.get(url, { params })
      return response.data
    } catch (error: any) {
      throw this.handleError(error)
    }
  }

  async post<T>(url: string, data?: any): Promise<ApiResponse<T>> {
    try {
      const response = await this.api.post(url, data)
      return response.data
    } catch (error: any) {
      throw this.handleError(error)
    }
  }

  async put<T>(url: string, data?: any): Promise<ApiResponse<T>> {
    try {
      const response = await this.api.put(url, data)
      return response.data
    } catch (error: any) {
      throw this.handleError(error)
    }
  }

  async delete<T>(url: string): Promise<ApiResponse<T>> {
    try {
      const response = await this.api.delete(url)
      return response.data
    } catch (error: any) {
      throw this.handleError(error)
    }
  }

  private handleError(error: any): Error {
    const message = error.response?.data?.message || error.message || 'An unexpected error occurred'
    return new Error(message)
  }
}

export const apiService = new ApiService()
