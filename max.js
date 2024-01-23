window.onload = function() {
  var maxWidthThreshold = 700;

  if (window.innerWidth > maxWidthThreshold) {
    var newDoc = document.implementation.createHTMLDocument('Unsupported Device');

    newDoc.body.innerHTML = '<h1>Only supported on certain Android devices.</h1>';
    newDoc.body.innerHTML += '<p>Soon will support more android devices.</p>';
    newDoc.body.innerHTML += '<p>For now use android devices that have 700px width or less.</p>';
    newDoc.body.innerHTML += '<p>Have a nice day:)</p>'

    document.documentElement.replaceWith(newDoc.documentElement);
  }
};