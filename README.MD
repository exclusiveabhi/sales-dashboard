# Dashboard

This is a responsive and interactive dashboard built with **React**, **TailwindCSS**, and **Chart.js**. It displays various sales-related metrics such as total sales, sales distribution, revenue updates, yearly sales comparison, active user tracking, and payment gateway statistics.

## Live Demo

[Click here](https://sales-dashboard-ashen.vercel.app/)

## Approach

- **Design**: The dashboard is designed to look great.
- **Interactive Charts**: Sales metrics are displayed using dynamic charts built with **Chart.js**, including Bar, Pie, and Line charts.
- **Data Fetching**: Data is fetched from a mock API (using `mockApi.js`) to simulate real-time updates.
- **Performance Optimization**: Techniques such as **React hooks** (useState, useEffect) and proper chart destruction are employed to optimize performance and avoid canvas reuse errors.
- **User Experience**: Smooth animations and transitions using **TailwindCSS** and **Framer Motion** are included for a polished experience.

### Key Features:
1. **Total Sales**: Displayed as a bar chart.
2. **Sales Distribution**: Displayed as a pie chart across different platforms (Online, In-store, Wholesale).
3. **Yearly Sales Comparison**: Displayed as a line chart for sales comparison over the years.
4. **Revenue Updates**: A dynamic list showing weekly revenue updates.
5. **Active Users**: A card showing the number of active users.
6. **Payment Gateways**: A list of payment gateways (PayPal, Stripe) with the number of transactions.

## Technologies Used
- **React**: For building the frontend components.
- **TailwindCSS**: For styling and layout (responsive design).
- **Chart.js**: For rendering dynamic and interactive charts.
- **Axios**: For fetching data from a mock API.
- **Framer Motion**: For animations and transitions.
- **React hooks**: For state management (`useState`, `useEffect`, `useRef`).

---

## Setup Instructions

Follow these steps to get the project up and running:

### 1. Clone the Repository
First, clone the repository to your local machine:

```bash
git clone https://github.com/exclusiveabhi/sales-dashboard.git
cd sales-dashboard
```

### 2. Install Dependencies
Next, install the required dependencies using **npm**:

```bash
npm install
```

This will install all the necessary packages, including React, TailwindCSS, Chart.js, and other dependencies.

### 3. Configure TailwindCSS
Ensure that TailwindCSS is correctly set up. If you followed the steps above, your project should already have the necessary configurations in the `tailwind.config.js` file and the correct classes in your `index.css`.

### 4. Start the Development Server
To start the development server and view the dashboard in your browser, run:

```bash
npm run dev
```

This will start the development server on `http://localhost:5173`, and you can view the dashboard in your browser.