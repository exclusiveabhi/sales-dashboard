# Dashboard

This is a responsive and interactive dashboard built with **React**, **TailwindCSS**, and **Chart.js**. It displays various sales-related metrics such as total sales, sales distribution, revenue updates, yearly sales comparison, active user tracking, and payment gateway statistics.

## Approach

The goal of this project is to replicate the dashboard design shared in the internship task PDF with a focus on:

- **Responsive Design**: The dashboard is designed to look great on desktops, tablets, and smartphones.
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
git clone https://github.com/your-username/aspireit-dashboard.git
cd aspireit-dashboard
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
npm start
```

This will start the development server on `http://localhost:3000`, and you can view the dashboard in your browser.

### 5. Build the Project (For Production)
To build the project for production, use:

```bash
npm run build
```

This will create an optimized build of your application in the `build/` directory.

### 6. Deploy the Application
You can deploy the built project to platforms like **Netlify** or **Vercel** for free. 

- For **Netlify**, you can follow the steps in [Netlify's deployment documentation](https://docs.netlify.com/site-deploys/create-deploys/).
- For **Vercel**, you can deploy your project by running:
  ```bash
  vercel
  ```
  (Make sure you have **Vercel CLI** installed).

---

## Folder Structure

The folder structure of the project is as follows:

```
aspireit-dashboard/
├── public/
│   ├── index.html               # Main HTML file
├── src/
│   ├── components/              # React components
│   │   ├── ActiveUsersCard.js   # Active user card component
│   │   ├── BarChart.js          # Bar chart component (total sales)
│   │   ├── ErrorBoundary.js     # Error boundary component
│   │   ├── PaymentGateways.js  # Payment gateways statistics
│   │   ├── PieChart.js          # Pie chart component (sales distribution)
│   │   ├── RevenueUpdates.js    # Revenue updates component
│   │   ├── SalesComparison.js   # Sales comparison component (line chart)
│   │   ├── SkeletonLoader.js    # Skeleton loader component
│   ├── App.js                   # Main app component
│   ├── index.css                # TailwindCSS and custom styles
│   ├── index.js                 # Entry point for the app
│   ├── mockApi.js               # Mock API for data fetching
├── tailwind.config.js           # TailwindCSS configuration
├── package.json                 # Project dependencies and scripts
└── README.md                    # Project documentation
```

---

## Additional Information

- **Real-time Data**: The mock API (`mockApi.js`) simulates fetching data. In a real-world scenario, you could replace this with an actual API.
- **Responsive Design**: TailwindCSS makes it easy to handle different screen sizes. The grid layout and Tailwind utility classes automatically adapt the dashboard to desktops, tablets, and smartphones.

---

## Troubleshooting

- **Tailwind not applying styles**: Ensure that you've followed the correct installation steps for TailwindCSS. Check if `index.css` has the Tailwind directives and that `index.css` is imported in `index.js`.
  
- **Chart not rendering**: Ensure that `Chart.js` components (Bar, Pie, Line) are properly registered using `ChartJS.register()`.

---

### **Contributors**
- **Your Name** - [GitHub Profile](https://github.com/your-username)

---

### **License**
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

### **Conclusion**

This README provides a clear guide for setting up and running the **Aspireit Dashboard** project locally, building it for production, and deploying it online. It also gives an overview of the project structure and technologies used. Let me know if any further details are needed!