const apiRequest = async (url = '', optionsObj = null) => {
  let errMsg = null;
  try {
    const responsive = await fetch(url, optionsObj);
    if (!responsive.ok) throw new Error('Plese reload the app');
    return await responsive.json();
  } catch (err) {
    errMsg = err.mesesge;
    return { error: errMsg };
  }
};

export default apiRequest;
