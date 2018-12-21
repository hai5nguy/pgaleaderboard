export default async (query) => {
  const url = process.env.GRAPHQL_ENDPOINT;
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    if (response.status !== 200) {
      return { error: 'NETWORK_ERROR', data: null };
    }

    const { data, errors } = await response.json();
    if (errors) {
      return { error: errors, data: null };
    }
    return { error: null, data };
  } catch (error) {
    return { error, data: null };
  }
};
