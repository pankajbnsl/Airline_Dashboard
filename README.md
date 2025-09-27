# ✈️ Airline Dashboard

The **Airline Dashboard** is a full-stack project that helps visualize and manage airline schedule data. It is built with a **Node.js + Express backend** and a **Next.js + TypeScript frontend**. The backend serves structured data through REST APIs, while the frontend consumes these APIs and displays the information in a clean, component-based interface.

---

## 🚀 Features

* **Backend (Node.js + Express)**

  * Proper file structure for routes, controllers, and utilities.
  * JSON file used as the data source.
  * REST API endpoints created to fetch data.
  * Easy to extend with additional routes and logic.

* **Frontend (Next.js + TypeScript)**

  * Clean and modular component-based design.
  * API calls made to the backend for data fetching.
  * Data rendered dynamically in tables, charts, and UI components.
  * TypeScript ensures type safety and better development experience.

* **General Highlights**

  * Clear separation between frontend and backend.
  * Easy to set up locally.
  * Scalable design that can be expanded to use a real database in the future.

---

## 🛠️ Tech Stack

**Backend:**

* Node.js
* Express.js
* JSON (as mock database)

**Frontend:**

* Next.js (React framework)
* TypeScript
* CSS/Tailwind (if styling added)

---

## 📂 Project Structure

### Backend (Node.js + Express)

```
backend/
│── package.json
│── app.js
│── /routes
│     └── crewRoutes.js
│     └── dashboardRoutes.js
│     └── reportRoutes.js
│── /controllers
│     └── crewController.js
│     └── dashboardController.js
│     └── reportController.js
│── /data
│     └── crew.json
```

### Frontend (Next.js + TypeScript)

```
frontend/
│── package.json
│── next.config.js
│── tsconfig.json
│── /src
│    │── /app
│    │     └── page.tsx          # Main entry pages
│    │
│    │── /crew
│    │     └── page.tsx         # Crew-related views
│    │
│    │── /report
│    │     └── page.tsx         # Reports UI
│    │
│    │── /docs
│    │     └── page.tsx         # Documentation pages
│    │
│    │── /components
│    │     └── charts/
│    │           └── BarChart.tsx
│    │     └── dashboard/
│    │           └── flightTable.tsx
│    │
│    │── /interfaces
│    │     └── crew.ts           # TypeScript interface for crew data
│    │
│    │── /services
│    │     └── crewServices.ts            # Centralized API calls

```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/airline-dashboard.git
cd airline-dashboard
```

### 2. Backend Setup

```bash
cd backend
npm install
```

* Start backend server:

```bash
npm start
```

By default, it will run on **[http://localhost:5000](http://localhost:5000)** (configurable in `app.js`).

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

* Start frontend development server:

```bash
npm run dev
```

By default, it will run on **[http://localhost:3000](http://localhost:3000)**.

---

## 🔗 API Endpoints

Example endpoints available in the backend:

* **GET /api/dashboard** → Fetch all dashboard data.
* **GET /api/crew/ → Fetch all crew data.

These APIs are consumed in the Next.js frontend using `fetch` or Axios.

---

## 📊 Example Workflow

1. Backend serves data from `dashboard.json`.
2. Frontend calls the backend API (e.g., `/api/dashboard`).
3. Data is displayed in a dashboard view with cards, tables, or charts.
4. Users can view schedules, statuses, and airline details.

---


## 📌 Future Improvements

* Replace JSON file with a real database (MongoDB / PostgreSQL).
* Add authentication & role-based access.
* Enhance UI with filters, sorting, and charts.
* Add unit and integration tests.

---


