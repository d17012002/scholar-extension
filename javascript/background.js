const PREFIX = location.origin + '/?url=';
  self.onfetch = e => {
    const {url} = e.request;
    if (url.startsWith(PREFIX)) {
      e.respondWith(fetch(url.slice(PREFIX.length)).then(r => new Response(r.body, {
        headers: {'Content-Type': 'text/javascript'},
      })));
    }
  };
