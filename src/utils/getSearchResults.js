const getSearchResults = async (baseUrl, searchPostcode) => {
  try {
    const response = await fetch(
      `${baseUrl}${searchPostcode}`,
      {
        method: 'GET',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" },
      }
    );
    const json = await response.json()
    return json;
  } catch (err) {
    console.log('error', err)
    return {}
  }
};

export default getSearchResults