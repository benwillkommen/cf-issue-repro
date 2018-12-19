const _ = require('lodash');

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
  })
  
  async function handleRequest(request) {
    const message = _.join(["Hello world", "using lodash"], "");
    return new Response(message);
  }
