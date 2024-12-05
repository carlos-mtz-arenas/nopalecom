

const getProductDetailsById = async (uuid) => {
  if (!uuid || uuid.trim() === '') {
    throw new Error('invalid_sku');
  }

  return {
    uuid,
    name: 'product description ' + uuid,
    sku: `hardcoded-087080bd-7e6a-4de3-b681-5ab50208d704`,
    description: 'fake description for the product to showcase how this works',
    regularPrice: 10.0,
    salesPrice: 8.0,
  };
};

export { getProductDetailsById };
