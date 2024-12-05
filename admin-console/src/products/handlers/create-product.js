
const createProduct = async (productInfo) => {
  if (!productInfo) {
    throw new Error('Missing product information');
  }

  if (productInfo.sku === 'duplicate') {
    throw new Error('duplicate_sku');
  }

  return {
    ...productInfo,
    uuid: 'b9b5bcc4-18eb-41f5-ae11-63a7229b9753',
  };
}

export { createProduct };
