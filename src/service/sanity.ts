import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: false, // 동적인 데이터가 들어있으니까 캐싱 안함
  apiVersion: '2024-01-26', // use current date (YYYY-MM-DD) to target the latest API version
  token: process.env.SANITY_SECRET_TOKEN, // Only if you want to update content with the client
});
