# MERN E-Commerce Platform

A full-stack e-commerce application built with the MERN stack, Redux Toolkit, and Material UI.

**Live Demo:** [mernecommerceful.netlify.app](https://mernecommerceful.netlify.app)  
**Backend API:** [e-commerce-mern-paji.onrender.com](https://e-commerce-mern-paji.onrender.com)

![ecommerce-homepage](https://github.com/RishiBakshii/mern-ecommerce/blob/main/frontend/src/assets/images/front.png?raw=true)

---

## Features

### User
- Secure signup, login, OTP email verification, and password reset
- Browse products with filters by category, brand, and price
- Add to cart, adjust quantities, and checkout
- Wishlist with personal notes
- Order history and order tracking
- Profile management with multiple saved addresses
- Product reviews — write, edit, delete with live rating updates

### Admin
- Add, edit, soft-delete products
- Manage orders and update order status
- Dashboard with overview stats

---

## Tech Stack

| Layer | Tech |
|---|---|
| Frontend | React, Redux Toolkit, Material UI, Framer Motion |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Auth | JWT, HTTP-only cookies, bcrypt |
| Email | Nodemailer (Gmail SMTP) |
| Deployment | Netlify (frontend), Render (backend), MongoDB Atlas |

---

## Project Setup

### Prerequisites
- Node.js v18+
- MongoDB (local or Atlas)

### Clone

```bash
git clone https://github.com/AbhishekSharma9161/E-commerce-MERN.git
cd E-commerce-MERN
```

### Install Dependencies

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install --legacy-peer-deps
```

### Environment Variables

**backend/.env**
```env
MONGO_URI=your_mongodb_connection_string
ORIGIN=http://localhost:3000
JWT_SECRET=your_jwt_secret
JWT_EXPIRY=7d
COOKIE_EXPIRATION_DAYS=7
OTP_EXPIRY=10
OTP_EXPIRATION_TIME=600000
PASSWORD_RESET_TOKEN_EXPIRY=15
PASSWORD_RESET_TOKEN_EXPIRATION=900000
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
EMAIL=your_email@gmail.com
PASSWORD=your_gmail_app_password
PRODUCTION=false
```

**frontend/.env**
```env
REACT_APP_BASE_URL=http://localhost:8000
```

### Seed Database

```bash
cd backend
node seed/seed.js
```

### Run

```bash
# Backend (terminal 1)
cd backend
npm run dev

# Frontend (terminal 2)
cd frontend
npm start
```

- Frontend: http://localhost:3000
- Backend: http://localhost:8000

### Demo Account

```
email: demo@gmail.com
password: helloWorld@123
```

> Note: OTP verification and password reset require a real email account.

---

## Resume Snippet

```latex
\resumeProjectHeading
  {\textbf{Full Stack E-Commerce Platform} $|$
   \emph{React, Node.js, MongoDB, Express, Redux Toolkit} $|$
   \href{https://github.com/AbhishekSharma9161/E-commerce-MERN}{\underline{GitHub}} $|$
   \href{https://mernecommerceful.netlify.app}{\underline{Live}}
  }{}
  \resumeItemListStart
    \resumeItem{Built a full-stack MERN e-commerce app with JWT authentication, OTP email verification, and secure HTTP-only cookie sessions.}
    \resumeItem{Implemented product browsing with category/brand/price filters, shopping cart, wishlist, and order management.}
    \resumeItem{Developed an admin dashboard for product CRUD, soft-delete, and real-time order status updates.}
    \resumeItem{Integrated Nodemailer for OTP and password reset emails; deployed frontend on Netlify and backend on Render with MongoDB Atlas.}
  \resumeItemListEnd
```
