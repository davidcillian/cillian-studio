import { NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}

export function middleware(request: NextRequest) {
  const basicAuth = request.headers.get('authorization')

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1]
    const decoded = atob(authValue)
    const colonIndex = decoded.indexOf(':')
    const password = decoded.substring(colonIndex + 1)

    if (password === '002424') {
      return NextResponse.next()
    }
  }

  return new NextResponse('Zugang gesperrt', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Cillian Studio"',
    },
  })
}
