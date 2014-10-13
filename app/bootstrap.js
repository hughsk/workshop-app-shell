process.env.PATH = [
    process.env.PATH
  , '/usr/local/bin'
].join(':')

window.resizeTo(
    window.screen.availWidth || window.screen.width
  , window.screen.availHeight || window.screen.height
)

require('@workshop/server')({
  nw: true
}, function(err, uri) {
  if (err) throw err

  var iframe = document.body.appendChild(
    document.createElement('iframe')
  )

  iframe.setAttribute('src', uri)
  iframe.style.position = 'absolute'
  iframe.style.top = 0
  iframe.style.left = 0
  iframe.style.width = '100%'
  iframe.style.height = '100%'
  iframe.style.border = 0
  iframe.style.margin = 0
  iframe.style.padding = 0
})
