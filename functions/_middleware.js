const PASSWORD = '002424'
const COOKIE = 'cs_auth'
const TOKEN = 'ok-cillian-2026'

const LOGIN_HTML = (error) => `<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Cillian Studio</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html,body{height:100%}
body{font-family:'Inter',-apple-system,sans-serif;background:#0a0a0a;color:#f0f0f0;display:flex;align-items:center;justify-content:center;padding:24px}
.card{width:100%;max-width:380px;background:#111;border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:40px 32px;box-shadow:0 20px 60px rgba(0,0,0,0.5)}
.logo{font-size:20px;font-weight:600;letter-spacing:0.02em;margin-bottom:6px}
.sub{font-size:13px;color:#888;margin-bottom:28px}
label{display:block;font-size:12px;color:#aaa;margin-bottom:8px;letter-spacing:0.02em}
input{width:100%;background:#0a0a0a;border:1px solid rgba(255,255,255,0.12);border-radius:10px;padding:12px 14px;color:#fff;font-size:15px;font-family:inherit;transition:border-color .15s}
input:focus{outline:none;border-color:rgba(255,255,255,0.35)}
button{width:100%;margin-top:16px;background:#fff;color:#000;border:none;border-radius:10px;padding:12px;font-size:14px;font-weight:600;font-family:inherit;cursor:pointer;transition:background .15s}
button:hover{background:#e5e5e5}
.error{background:rgba(244,63,94,0.08);border:1px solid rgba(244,63,94,0.25);color:#f87171;font-size:13px;padding:10px 12px;border-radius:8px;margin-bottom:16px}
</style>
</head>
<body>
<form class="card" method="POST" action="/">
<div class="logo">Cillian Studio</div>
<div class="sub">Geschuetzter Bereich</div>
${error ? '<div class="error">Falsches Passwort</div>' : ''}
<label for="p">Passwort</label>
<input id="p" name="password" type="password" autofocus autocomplete="current-password" required>
<button type="submit">Zugang</button>
</form>
</body>
</html>`

export async function onRequest(context) {
  const { request, next } = context
  const url = new URL(request.url)

  const cookies = request.headers.get('Cookie') || ''
  const authed = cookies.split(';').some(c => c.trim() === `${COOKIE}=${TOKEN}`)

  if (authed) return next()

  if (request.method === 'POST') {
    const form = await request.formData()
    if (form.get('password') === PASSWORD) {
      return new Response(null, {
        status: 303,
        headers: {
          'Location': url.pathname,
          'Set-Cookie': `${COOKIE}=${TOKEN}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=2592000`,
        },
      })
    }
    return new Response(LOGIN_HTML(true), {
      status: 401,
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    })
  }

  return new Response(LOGIN_HTML(false), {
    status: 401,
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  })
}
