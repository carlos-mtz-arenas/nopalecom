

const searchProducts = async (filters) => {
  if (!filters) {
    console.debug('Not using filters');
  }

  const searchPayload = {
    filters: (filters || {})
  };

  return [
    {
      uuid: '5f918052-1c5f-49e5-a441-5ee6eb34e65f',
      sku: 'ff17dc59-e788-43ec-be79-8f1dccede03b',
      name: 'product 1',
      description: 'lorem ipsum',
      brand: 'marca 1',
      isEnabled: true,
    },
    {
      uuid: 'b381ef61-55a8-4e74-a2e2-6c21800cd221',
      sku: 'dcb62041-8830-4b98-a506-a6e51740d2ad',
      name: 'product 2',
      description: 'lorem ipsum',
      brand: 'marca 2',
      isEnabled: true,
    },
    {
      uuid: 'e2b8ffb7-ced7-458f-9c82-b536b8392e4e',
      sku: '72cfff30-3ad0-4bf9-b09f-5531935a2691',
      name: 'product 3',
      description: 'lorem ipsum',
      brand: 'marca 1',
      isEnabled: false,
    }
  ]
}

export { searchProducts };
