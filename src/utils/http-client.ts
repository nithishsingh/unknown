export class HttpClient {
  private baseUrl: string;
  
  constructor(baseUrl: string = '') {
    this.baseUrl = baseUrl;
  }

  private async request(url: string, options: RequestInit = {}) {
    const response = await fetch(this.baseUrl + url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  public async get(url: string) {
    return this.request(url);
  }

  public async post(url: string, data: any) {
    return this.request(url, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
}

// Create singleton instance
export const httpClient = new HttpClient(import.meta.env.PUBLIC_API_URL || ''); 