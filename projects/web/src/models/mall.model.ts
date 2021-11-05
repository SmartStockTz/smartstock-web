export type MallModel = {
  uid: string,
  shop: {
    businessName: string;
    ecommerce: {
      logo: string;
      cover: string;
      about: string;
    };
    projectId: string;
    country: string;
    region: string;
    applicationId: string;
  }
};
