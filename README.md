# Mini Time Tracker

Test task: implementation of a simplified work time tracker.

## Tech Stack

### Frontend
- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Fetch API**

### Backend
- **NestJS**
- **TypeScript**
- **REST API**

### Database
- **PostgreSQL**
- **Prisma ORM**


## Project Structure
### API Endpoints
#### POST /entries
Creating a time entry.

#### GET /entries
Retrieving all records.
The response returns a flat list; grouping and calculations are performed on the frontend.


## How to Run Locally
### Prerequisites
- Node.js v20 or higher
- PostgreSQL v14 or higher

1. Clone repository
```bash
  git clone <repository-url>
  cd <repository>
```

2. Backend setup
```bash
   cd backend
   npm install
   # Create a .env file in the backend folder
   touch .env
   # Add the database connection string:
   # USER — enter your PostgreSQL user name
   # time_tracker — database name
   echo DATABASE_URL="postgresql://USER@localhost:5432/time_tracker" > .env
   echo SERVER_PORT=3001 > .env
   echo FRONT_URL='http://localhost:3000' > .env
   # Generate Prisma client and apply migrations:
   npx prisma generate
   npx prisma migrate dev --name init
   # Start backend in development mode:
   npm run start:dev
```
Backend will be available at: http://localhost:3001

3. Frontend setup
```bash
   cd frontend
   npm install
   npm run dev
```
Frontend will be available at: http://localhost:3000
