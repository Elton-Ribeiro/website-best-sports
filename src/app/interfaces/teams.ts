export interface Teams {
  data: [
    {
      id: string;
      abbreviation: string;
      city: string;
      conference: string;
      division: string;
      full_name: string;
      name: string;
    }
  ],
  meta: {
    total_pages: number;
    current_page: number;
    next_page: null;
    per_page: number;
    total_count: number;
  }
}