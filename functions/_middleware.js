export async function onRequest(context) {
  const { request, next } = context
  const auth = request.headers.get('Authorization')

  if (auth && auth.startsWith('Basic ')) {
    try {
      const decoded = atob(auth.slice(6))
      const password = decoded.slice(decoded.indexOf(':') + 1)
      if (password === '002424') {
        return next()
      }
    } catch {}
  }

  return new Response('Zugang gesperrt', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Cillian Studio"',
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
