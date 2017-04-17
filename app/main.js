var search = location.search;
var query = {};
if (search) {
  search = search.substr(1);
  search = search.split('&');
  for (var i = 0, len = search.length; i < len; i++) {
    var kv = search[i].split('=');
    if (!isNaN(kv[1])) {
      kv[1] = Number(kv[1]);
    }
    if (/^true|false$/i.test(kv[1])) {
      kv[1] = Boolean(kv[1]);
    }
    query[kv[0]] = kv[1];
  }
}

Reveal.initialize({
  history: true,
  controls: 'controls' in query ? query.controls : true,
  transition: query.transition || 'slide',
  dependencies: [
    {
      src: './node_modules/reveal.js/plugin/markdown/marked.js',
      condition: function () {
        return !!document.querySelector('[data-markdown]');
      }
    },
    {
      src: './node_modules/reveal.js/plugin/markdown/markdown.js',
      condition: function () {
        return !!document.querySelector('[data-markdown]');
      }
    },
    {
      src: './node_modules/reveal.js/plugin/highlight/highlight.js',
      async: true,
      callback: function () {
        hljs.initHighlightingOnLoad();
      }
    }
  ]
});

if (query.print) {
  var link = document.createElement( 'link' );
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = './node_modules/reveal.js/css/print/pdf.css';
  document.getElementsByTagName( 'head' )[0].appendChild( link );
}