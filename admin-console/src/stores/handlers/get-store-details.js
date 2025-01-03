

const randomType = () => Math.random() * 100 > 50 ? 'store' : 'warehouse';

const getStoreById = async (uuid) => {
  if (!uuid || uuid.trim() === '') {
    throw new Error('not_found');
  }

  return {
    uuid,
    name: `name-[${uuid}]`,
    address: `address-[${uuid}]`,
    isEnabled: true,
    type: randomType(),
  };
};

export { getStoreById };
