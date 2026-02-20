### How to install de application
- json server backend mock
  1. you have to install npx
  2. Run `npx json-server --watch data/db.json --routes routes.json`
  3. The db.json files contents user json mock

- Frontend app
  1. Run `npm install`
  2. Run `npm run dev`

### General principles of architecture
- [x] Feature-based structure
- [x] Clean Architecture (domain / application / infrastructure presentation)
- [x] Server state ≠ Client state
- [x] High scalability
- [x] High testability

### Final result
- Enterprise architecture:
  - Clean Architecture
  - CQRS
  - DI
  - Repository Pattern
  - Zustand UI state
  - TanStack Query server state
  - Full decoupling

### It supports without issues.
  - Applications with millions of users
  - fintech
  - SaaS enterprise
  - trading platforms
  - microfrontends

### CRUD example with (CREATR,UPDATE,LIST AND DELETE)
- The structure of actions is
  - [x] DOMAIN
  - [x] INFRASTRUCTURE (API Layer)
  - [x] APPLICATION (Use Case Layer)
  - [x] TANSTACK QUERY (Mutation Hook Enterprise Pattern)
  - [x] PRESENTATION (UI)
  
