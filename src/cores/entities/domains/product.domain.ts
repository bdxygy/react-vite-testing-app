export type ProductDomainT = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export class ProductDomain {
  id: number = 0;
  constructor(newProduct: ProductDomainT) {
    Object.assign(this, newProduct);
  }
}
