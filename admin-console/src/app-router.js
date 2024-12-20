

export const routes = [
  {
    path: '/products',
    component: 'products-page',
  },
  {
    path: '/products/create',
    component: 'create-product-page',
  },
  {
    path: '/products/:uuid',
    component: 'edit-product-page',
  },
  {
    path: '/stores',
    component: 'stores-page',
  },
  {
    path: '/stores/create',
    component: 'create-store-page',
  },
  {
    path: '/stores/:uuid',
    component: 'edit-store-page',
  },
];


