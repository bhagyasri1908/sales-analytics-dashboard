# Sales Analytics Dashboard - Shanture Company Assignment

## Project Overview

This project is a **Sales Analytics Dashboard** built with the **MERN stack** (MongoDB, Express, React, Node.js).  
It demonstrates:

- Data aggregation for total revenue, top products, and region-wise metrics.
- Interactive charts and tables for sales insights.
- Date-range filtering.
- Modular backend and frontend architecture.

---

## Project Structure

sales-analytics-dashboard/
├── backend/
│ ├── config/db.js # MongoDB connection setup
│ ├── controllers/analyticsController.js
│ ├── models/customer.js
│ ├── models/product.js
│ ├── models/sale.js
│ ├── routes/analyticsRoutes.js
│ ├── seed/seedData.js # Optional script to seed database
│ ├── server.js
│ └── package.json
├── frontend/
│ ├── public/index.html
│ ├── src/components/
│ │ ├── DateRangePicker.jsx
│ │ ├── RevenueChart.jsx
│ │ ├── TopProducts.jsx
│ │ └── RegionStats.jsx
│ ├── src/pages/Dashboard.jsx
│ ├── src/services/api.js
│ ├── src/App.jsx
│ ├── src/main.jsx
│ └── src/index.css
│ └── package.json
├── .gitignore
├── README.md
└── .env.example


---

## Features

- **Date Range Filtering**: Select start and end dates to filter sales data.
- **Revenue Charts**: Visualize total revenue over time.
- **Top Products**: See the highest-selling products.
- **Region Stats**: Compare sales performance by region.
- **Responsive Design**: Works on desktop and mobile.

---

## Prerequisites

- Node.js v18+  
- npm v9+  
- MongoDB (local or Atlas)  

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/sales-analytics-dashboard.git
cd sales-analytics-dashboard

2. Backend Setup
cd backend
npm install


Create a .env file (or use .env.example) with:

PORT=5000
MONGO_URI=mongodb://localhost:27017/salesdb


Optional: Seed the database

node seed/seedData.js


Start the backend server:

npx nodemon server.js


Backend runs at: http://localhost:5000

3. Frontend Setup
cd frontend
npm install
npm run dev


Frontend runs at: http://localhost:5173
API requests will go to: http://localhost:5000/api

Usage

Open frontend in browser: http://localhost:5173

Select a date range.

View Revenue Chart, Top Products, and Region Stats.

The dashboard automatically fetches data from the backend API.

Technologies Used

Backend: Node.js, Express.js, MongoDB, Mongoose, dotenv, cors

Frontend: React, Vite, Material-UI, Recharts, Axios

Dev Tools: Nodemon, VSCode


