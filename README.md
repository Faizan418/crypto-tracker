# Crypto Tracker

A real-time cryptocurrency price tracking application built for the **HackVerse Hackathon** at KUBS, University of Karachi. This project allows users to monitor live prices, view historical data, and search for their favorite cryptocurrencies in a clean, modern interface.

### Features

* **Live Price Updates:** Fetches and displays real-time prices for multiple cryptocurrencies from the CoinGecko API.
* **Interactive Area Charts:** Each cryptocurrency card includes a filled-in area chart showing price trends over the last 24 hours.
* **24h Price Change:** Displays the percentage change in price over 24 hours with visual indicators.
* **Search Functionality:** A search bar in the header allows users to filter cryptocurrencies by name.
* **Dark/Light Mode:** A toggle button to switch between a sleek dark theme and a clean light theme.
* **Responsive Design:** The application's UI is optimized for both desktop and mobile devices.

### Technologies Used
* **Next.js 15:** A React framework for building fast and scalable web applications.
* **React:** For building the user interface.
* **Tailwind CSS:** A utility-first CSS framework for rapid and consistent styling.
* **Recharts:** A charting library for displaying the price trend graphs.
* **CoinGecko API:** A powerful and free API used to fetch real-time and historical crypto data.

### Project Structure
This project follows a well-organized structure to separate concerns and ensure maintainability.



Haan bhai, bilkul. Ek achhi README.md file banana bahut zaruri hai. Isse tumhara project professional lagega aur sabko samajh aa jayega ke tumne kya banaya hai.

Yeh lo ek complete README.md file ka content. Tum bas isse README.md naam ki file mein copy-paste kar sakte ho aur apni details add kar sakte ho.

Markdown

# Crypto Tracker

A real-time cryptocurrency price tracking application built for the **HackVerse Hackathon** at KUBS, University of Karachi. This project allows users to monitor live prices, view historical data, and search for their favorite cryptocurrencies in a clean, modern interface.

### Features
* **Live Price Updates:** Fetches and displays real-time prices for multiple cryptocurrencies from the CoinGecko API.

* **Interactive Area Charts:** Each cryptocurrency card includes a filled-in area chart showing price trends over the last 24 hours.

* **24h Price Change:** Displays the percentage change in price over 24 hours with visual indicators.
* **Search Functionality:** A search bar in the header allows users to filter cryptocurrencies by name.
* **Dark/Light Mode:** A toggle button to switch between a sleek dark theme and a clean light theme.
* **Responsive Design:** The application's UI is optimized for both desktop and mobile devices.

### Technologies Used
* **Next.js 15:** A React framework for building fast and scalable web applications.
* **React:** For building the user interface.
* **Tailwind CSS:** A utility-first CSS framework for rapid and consistent styling.
* **Recharts:** A charting library for displaying the price trend graphs.
* **CoinGecko API:** A powerful and free API used to fetch real-time and historical crypto data.

### Project Structure
This project follows a well-organized structure to separate concerns and ensure maintainability.


/crypto-tracker
├── app/
│   ├── layout.js              # Main app layout and ThemeProvider
│   └── page.js                # Main homepage component with all logic
├── components/
│   ├── CryptoCard.js          # Reusable component for each crypto's card
│   ├── Header.js              # The app's header with search and theme toggle
│   ├── loading.jsx            # Loading spinner component
│   └── ThemeContext.js        # React Context for managing themes
├── lib/
│   └── cryptoApi.js           # Functions for fetching data from the API
├── public/                    # Static assets like images
├── styles/
│   └── globals.css            # Global Tailwind and base styles
├── .env.local                 # Environment variables (API URLs)
└── package.json               # Project dependencies and scripts


### Getting Started
Follow these steps to set up and run the project locally.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Faizan418/crypto-tracker
    cd crypto-tracker
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a file named `.env.local` in the root of your project and add the following API URLs:
    ```
    NEXT_PUBLIC_COINGECKO_API_URL=[https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin,shiba-inu,solana,cardano&vs_currencies=usd,pkr&include_24hr_change=true](https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin,shiba-inu,solana,cardano&vs_currencies=usd,pkr&include_24hr_change=true)
    NEXT_PUBLIC_COINGECKO_HISTORICAL_API_URL=[https://api.coingecko.com/api/v3/coins/](https://api.coingecko.com/api/v3/coins/)
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:3000`.

### Contact
* **Name:** Muhammad Faizan
* **Email:** muhammadf4060@gmail.com