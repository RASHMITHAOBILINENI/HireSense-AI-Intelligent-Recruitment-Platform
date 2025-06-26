# HireSense-AI

An intelligent recruitment platform that automates resume parsing, personality analysis via IBM Watson, and smart candidate scoring.

## Tech Stack
- Node.js
- Express.js
- MongoDB
- IBM Watson Personality Insights
- PDF Resume Parsing

## Setup

```bash
git clone https://github.com/yourusername/hiresense-ai.git
cd hiresense-ai
npm install
cp .env.example .env
# Add your MongoDB and IBM Watson credentials
npm run dev
```

## API Endpoints
- `POST /api/candidates/upload` – Upload resume (PDF)