# WhoAmI – Trust-Aware IP Endpoint

A tiny Express.js service that shows **who the caller is** and **why that IP is trusted**.

## Endpoint
```
GET /whoami
```

Returns:
- client IP (`req.ip`)
- optional `X-Forwarded-For`
- HTTP method
- timestamp
- trust decision explanation

## Configuration
```env
TRUST_PROXY=true
```
true → trust proxy headers

false → use socket IP only

## Run
```
npm install
```

```
curl -H "X-Forwarded-For: 8.8.8.8" http://localhost:3000/whoami
```

```powershell
iwr http://localhost:3000/whoami -Headers @{ "X-Forwarded-For" = "8.8.8.8" }
```
## Purpose
Learn how Express resolves client IPs and why trust proxy is a security-critical decision.
