export type MallProduct = {
  product: string;
  retailPrice: number;
  category: string;
  images: string[],
  rank: number,
  shop: {
    businessName: string;
    projectId: string,
    applicationId: string
  }
};
