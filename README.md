### Software used to develop the app
- React 18+
- TanStack Query v5
- Zustand
- Zustand
- Clean Architecture + Feature-Based + Separation of concerns

**This architecture is designed for large, real-world apps (SaaS, fintech, dashboards, etc.).**

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
  
**Technical conclusions**
- Here's a clear technical analysis from a developer's perspective on     whether it's better to use Zustand or TanStack Query (and when), especially for a project using React 19 + TypeScript 5.2:

  -***Zustand***
    1. It is a lightweight global state library for React.
    2. It is designed for local state and UI (e.g., modals, themes, preferences, data that does not come from a server).
    3. Very easy to configure (without context providers or typical Redux reducers).
    4.Ideal for client-side state.

  ### Typical usage example:
  - [x] UI theme
  - [x] Opening/closing of modals
  - [x] Wizard steps
  - [x] Local filter status
  - [x] Simple authentication status


  - **TanStack Query**
    - It is a library specializing in server state: fetching, caching, synchronization, retries, invalidation, polling, pagination, background updates.
    - It is not a replacement for a full state manager, but a tool focused on asynchronous data coming from a backend/AR API.

  ### Typical usage example:
  - [x] API listings with smart caching
  - [x] Automatic pagination/re-fetch
  - [x] Efficient handling of loading/error states
  - [x] Local filter status
  - [x] Mutations with cache invalidation

### Which is better ?

- It's not about choosing one in general, but about choosing according to the type of state you need to handle:**

***If your data is server-side (API)***
  - TanStack Query is the best option.Because it handles fetching, caching, and synchronization automatically with minimal code. (tanstack.com)
  Example: product data, user data, post data, dashboards, etc.

***If your status is local / UI / client***

 - ***Zustand is a better option. ***
 It allows you to save and react to local changes without complications.

 ## Example: 

 - light/dark theme, form state, modals, and other states that do not come from an API.

 ### Use both?

- Yes, many teams do

  - [x] TanStack Query for server state
  - [x] Zustand for client/UI state
  - [x]  (Context API or URL parameters for other needs) 
  
**This pattern keeps your code clean and specialized: each tool does what it does best.**
