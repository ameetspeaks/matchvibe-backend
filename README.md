# MatchVibe Backend

A Node.js backend API for the MatchVibe application, built with Express and Supabase.

## Features

- User management
- Team management
- Player management
- Match scheduling and results
- Tournament organization
- Role-based access control
- User type management

## Tech Stack

- Node.js
- Express.js
- Supabase (PostgreSQL)
- Vercel (Deployment)

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Supabase account
- Vercel account

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/matchvibe-backend.git
   cd matchvibe-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with your Supabase credentials:
   ```
   SUPABASE_URL=your_supabase_project_url
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
   ```

4. Set up your Supabase database with the following tables:
   - users
   - teams
   - players
   - matches
   - tournaments
   - roles
   - usertype

## Development

Run the development server:
```bash
npm run dev
```

The server will start on `http://localhost:3000`

## API Endpoints

### Users
- GET /api/users
- POST /api/users
- PUT /api/users/:id
- DELETE /api/users/:id

### Teams
- GET /api/teams
- POST /api/teams
- PUT /api/teams/:id
- DELETE /api/teams/:id

### Players
- GET /api/players
- POST /api/players
- PUT /api/players/:id
- DELETE /api/players/:id

### Matches
- GET /api/matches
- POST /api/matches
- PUT /api/matches/:id
- DELETE /api/matches/:id

### Tournaments
- GET /api/tournaments
- POST /api/tournaments
- PUT /api/tournaments/:id
- DELETE /api/tournaments/:id

### Roles
- GET /api/roles
- POST /api/roles
- PUT /api/roles/:id
- DELETE /api/roles/:id

### Usertype
- GET /api/usertype
- POST /api/usertype
- PUT /api/usertype/:id
- DELETE /api/usertype/:id

## Deployment

1. Push your code to GitHub

2. Connect your repository to Vercel:
   - Go to [Vercel Dashboard](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Add your environment variables (SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY)
   - Deploy

3. Your API will be available at `https://your-project.vercel.app/api`

## Security

- All sensitive data is stored in environment variables
- Supabase service role key is only used server-side
- Row Level Security (RLS) is enabled in Supabase
- CORS is configured for secure cross-origin requests

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License. 