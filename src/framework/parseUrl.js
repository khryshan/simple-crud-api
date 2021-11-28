module.exports = (baseUrl) => (req, res) => {
  const parsedUrl = new URL(req.url, baseUrl);
  const pathname = parsedUrl.pathname;
  const paramsUrl = pathname.split('/').filter(el => el !== "");
  
  if (paramsUrl.indexOf('person') !== -1 && paramsUrl.length === 2) {
    req.personId = paramsUrl[1];
    return req.pathname = `/${paramsUrl[0]}/:id`;
  }

  return req.pathname = `/${paramsUrl.join('/')}`;
}