import { apiService } from './api'
import type { Product, ProductCategory, PaginatedResponse, PaginationParams } from '@/types'

export const productService = {
  async getProducts(params?: PaginationParams & { category?: string; featured?: boolean }) {
    return apiService.get<PaginatedResponse<Product>>('/products', params)
  },

  async getProduct(id: string) {
    return apiService.get<Product>(`/products/${id}`)
  },

  async getCategories() {
    return apiService.get<ProductCategory[]>('/products/categories')
  },

  async getFeaturedProducts() {
    return apiService.get<Product[]>('/products/featured')
  }
}
