
module.exports =  class Router {
  constructor () {
    this.endpoints = {};
  };

  // endpoints = {
  //   '/person': {
  //     'GET': handler_1,
  //     'POST': handler_2,
  //     'PUT': handler_3,
  //     'DELETE': handler_4,
  //   }
  // }

  request(method = 'GET', path, handler) {
    if (!this.endpoints[path]) {
      this.endpoints[path] = {};
    }

    const endpoint = this.endpoints[path];

    if (endpoint[method]) {
      throw new Error(`[${method}] with ${path} has already exit`)
    }

    endpoint[method] = handler;
  };

  get(path, handler) {
    this.request('GET', path, handler);
  };
  post(path, handler) {
    this.request('POST', path, handler);
  };
  put(path, handler) {
    this.request('PUT', path, handler);
  };
  delete(path, handler) {
    this.request('DELETE', path, handler);
  };

};