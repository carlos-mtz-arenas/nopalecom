

const searchStores = async (filters) => {
  if (!filters) {
    console.debug('Not using filters');
  }

  const searchPayload = {
    filters: (filters || {})
  };

  return [
    {
      uuid: '77db94e4-52c7-47fa-bf52-6ba360ca3daa',
      name: `name-[77db94e4-52c7-47fa-bf52-6ba360ca3daa]`,
      address: `address-[77db94e4-52c7-47fa-bf52-6ba360ca3daa]`,
      isEnabled: true,
    },
    {
      uuid: 'd4185ec1-94f3-4281-b261-77f6f43937b4',
      name: `name-[d4185ec1-94f3-4281-b261-77f6f43937b4]`,
      address: `address-[d4185ec1-94f3-4281-b261-77f6f43937b4]`,
      isEnabled: true,
    },
    {
      uuid: '11e04f9a-a6b2-4231-a9cb-250ea2f3d770',
      name: `name-[11e04f9a-a6b2-4231-a9cb-250ea2f3d770]`,
      address: `address-[11e04f9a-a6b2-4231-a9cb-250ea2f3d770]`,
      isEnabled: false,
    },
  ]
}

export { searchStores };
