# PH Car Wash System — Client

Modern, responsive web application for the PH Car Wash booking system, built with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS 4**, and **Better Auth**.

---

## 🚀 Features

- **Public Services Catalog (`/services`):**
  - Browse available car wash and detailing services.
  - Filter by branch (**Dhaka, Chittagong, Khulna, Sylhet**) with zero-JS plain URL links (`?branch=Dhaka`).
- **Service Details (`/services/[id]`):**
  - Full service specifications, pricing, duration, included features, and direct "Book Now" CTA.
  - Safe image handling with fallback placeholders.
- **Package Comparison (`/compare`):**
  - Side-by-side comparison of features, pricing, and turnaround time across wash packages.
- **Informational Pages (`/`, `/about`):**
  - Welcoming homepage highlighting key services and branches.
  - Informative About Us page outlining company mission and eco-friendly standards.
- **Authentication (`/signin`, `/signup`, `/forgot-password`):**
  - Complete user registration and session management powered by **Better Auth**.
  - Role-based permissions (`user`, `branchManager`, `admin`).
- **Role-Protected Dashboards (`/dashboard`):**
  - **User Dashboard (`/dashboard/user`):** View bookings, upcoming schedule, and personal profile.
  - **Branch Manager Dashboard (`/dashboard/branchManager`):** Manage branch services via an interactive table and "Add Service" modal dialog. Form submissions create services through verified Server Actions.
  - **Admin Dashboard (`/dashboard/admin`):** Central administrative management for users, all branches, services, and bookings.
  - Automated server-side protection redirects unauthenticated visitors to `/signin` and non-authorized roles to their respective dashboards.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/) with Turbopack & React Compiler
- **Library:** [React 19](https://react.dev/)
- **Language:** TypeScript 5
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) (built on `@base-ui/react`)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Authentication:** [Better Auth](https://www.better-auth.com/) with `@better-auth/mongo-adapter`
- **Database Driver:** Native `mongodb` driver (reads shared collections)

---

## 📋 Prerequisites

- **Node.js:** v20.x or higher
- **MongoDB:** Active connection string (MongoDB Atlas or local instance)
- **Express Backend:** Running backend instance (default: `http://localhost:5000`)

---

## ⚙️ Environment Variables

Create a `.env` file in the `car-wash-system-client` directory by copying `.env.example`:

```bash
cp .env.example .env
```

Fill in the required configuration variables:

```env
# Better Auth signing secret (long random string)
BETTER_AUTH_SECRET=your_32_character_minimum_random_secret_here

# Base URL of this Next.js app
BETTER_AUTH_URL=http://localhost:3000

# MongoDB connection string (same database as the Express backend)
DB_URI=mongodb+srv://<username>:<password>@<cluster-host>/ph-car-wash-system?retryWrites=true&w=majority

# Express backend base URL (no trailing slash)
NEXT_PUBLIC_API_URL=http://localhost:5000
```

---

## 🏃 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Run type checks & linter
```bash
npx tsc --noEmit
npm run lint
```

### 4. Build for production
```bash
npm run build
npm start
```

---

## 📂 Project Structure

```
car-wash-system-client/
├── public/                 # Static public assets and SVGs
├── src/
│   ├── app/                # Next.js App Router routes
│   │   ├── (auth)/         # /signin, /signup, /forgot-password
│   │   ├── (dashboard)/    # Role-protected dashboard layouts and sub-routes
│   │   │   └── dashboard/
│   │   │       ├── admin/          # Admin routes & role layout
│   │   │       ├── branchManager/  # Branch manager services & role layout
│   │   │       └── user/           # User bookings & profile
│   │   ├── (root)/         # Public pages (/, /services, /about, /compare, /booking)
│   │   └── api/auth/       # Better Auth API route handler ([...all])
│   ├── assets/             # Brand images and illustration assets
│   ├── components/         # Reusable UI and layout components
│   │   ├── auth/           # Signin, Signup, and Password inputs
│   │   ├── dashboard/      # Sidebar, header, tables, and dialogs
│   │   ├── services/       # Service cards and presentation items
│   │   ├── shared/         # Site Header, Navbar, Signout trigger
│   │   └── ui/             # shadcn / Base UI primitives
│   ├── hooks/              # Custom React hooks (e.g. useIsMobile)
│   ├── lib/                # Utility libraries, Auth client/server, API fetchers
│   │   ├── action/         # Next.js Server Actions (createService)
│   │   ├── api/            # API client fetchers (getServices, getServiceById)
│   │   ├── auth.ts         # Better Auth server configuration
│   │   ├── auth-client.ts  # Better Auth client configuration
│   │   └── branches.ts     # Hardcoded canonical branch definitions
│   └── types/              # TypeScript interface and type declarations
├── .env.example            # Environment template
├── next.config.ts          # Next.js & Turbopack configuration
├── package.json
└── tsconfig.json
```

---

## 🔒 Security & Architecture Notes

- **Optimistic Guards & Server Protection:** Every dashboard route verifies the session on the server via `auth.api.getSession({ headers })` before rendering. Unauthenticated requests are immediately redirected via HTTP `307` to `/signin`.
- **Role Isolation:** Dedicated layouts for `/dashboard/admin` and `/dashboard/branchManager` enforce strict authorization boundaries; non-matching users are redirected to their own role dashboard.
- **Client/Server Isolation:** Client components import `auth-client.ts` with type-only references to server auth, avoiding bundling database drivers into the browser.
