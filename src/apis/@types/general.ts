export interface PaginatedResponse {
  total: number;
  skip: number;
  limit: number;
}

export interface PaginationParams {
  limit?: number;
  skip?: number;
}
