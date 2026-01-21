# Mini Time Tracker

Test task: implementation of a simplified work time tracker.

## Tech Stack

### Frontend

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
0. node 20+, postgresql@14
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
   # USER — PostgreSQL user and password if necessarily
   # time_tracker — database name
   echo DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/time_tracker" > .env
   npx prisma generate
   # Creating a database and tables
   npx prisma migrate dev --name init
   npm run start:dev
```

3. Frontend setup
```bash
   cd frontend
   npm install
   npm run dev
```
