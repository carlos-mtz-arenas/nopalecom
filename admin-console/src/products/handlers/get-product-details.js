

const getProductDetails = async (sku) => {
  if (!sku || sku.trim() === '') {
    throw new Error('invalid_sku');
  }

  return {
    uuid: '948fff52-9fd1-4616-b8ea-06333a30cc36',
    name: 'product description ' + sku,
    sku: sku,
    description: 'fake description for the product to showcase how this works',
    regularPrice: 10.0,
    salesPrice: 8.0,
  };
};

export { getProductDetails };
