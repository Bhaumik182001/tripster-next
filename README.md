# Tripster - Destination Booking Web Application

**Live Demo**: [Tripster on Vercel](https://tripster-next-bhaumik182001.vercel.app)

Tripster is a destination booking web application built with Next.js and React.js. The app provides accommodation listings based on search inputs like date range, number of guests, and location. Enhanced by Tailwind CSS, the application offers a robust, visually appealing, and stable UI that's responsive across devices. Continue reading to learn more about its features and the technologies involved.

<img src="https://i.imgur.com/PzHvMQk.png" alt="BuzzBox Preview" height="500">

---

## Table of Contents

- [Live Demo](#live-demo)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)

---

## Live Demo

Visit the live demo here: [Tripster on Vercel](https://tripster-next-bhaumik182001.vercel.app).

---

## Features

- **User Authentication**: Authenticate via Google, GitHub, or Discord.
- **Dynamic Searching**: Listings based on date range, guests, and location.
- **Payment Processing**: Integrated Stripe for secure transactions.
- **Real-time Mapping**: Uses Mapbox for real-time location mapping.
- **Responsive Design**: Adapts to various device aspect ratios.

---

## Technologies

- **Next.js**: For server-side rendering and robustness.
- **React.js**: For building the user interface.
- **Stripe**: For payment processing and verification.
- **Rapid API**: Data sourcing based on search input.
- **Mapbox**: Real-time mapping and location marking with react-map-gl.
- **JSONKeeper**: Fallback data storage for API call exhaustion.
- **Imgur**: Image asset management.
- **next-auth**: User authentication.
- **Heroicons**: SVG icon rendering.
- **TailwindCSS**: Styling for performance and speed.
- **Vercel**: Hosting and custom domain.

---

## Installation

To run this project locally:

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/Tripster.git
    ```

2. Navigate to the project directory:

    ```bash
    cd Tripster
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Set up environment variables:

    ```bash
    # .env file
    NEXT_PUBLIC_STRIPE_KEY=your_stripe_key
    ```

5. Run the development server:

    ```bash
    npm run dev
    ```

---

## Usage

Open [http://localhost:3000](http://localhost:3000) with your browser to see the app.



