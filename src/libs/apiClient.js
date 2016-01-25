const methods = ['get', 'post', 'put', 'patch', 'del'];

function formatUrl(path) {
  const adjustedPath = path[0] !== '/' ? '/' + path : path;
  return '/api' + adjustedPath;
}

export default class ApiClient {
  constructor(req) {
    methods.forEach((method) =>
      this[method] = (path, { params, data, token, attach } = {}) => {

        function status(response) {
          if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response)
          } else {
            return Promise.reject(new Error(response.statusText))
          }
        }

        function json(response) {
          return response.json();
        }
        const options = {
          method,
          redirect: 'follow',
          headers: {},
        };

        if (params) {
          request.query(params);
        }


        if (data) {
          options.body = JSON.parse(data);
        }

        if (token) {
          options.headers.authorization = 'Bearer ' + token;
        }

        return fetch(path, options).then(status).then(json);

      });
  }
}
