Frontend README
GoodsGallery - Frontend
GoodsGallery is a full-stack e-commerce website built with the MERN stack. The frontend is developed using React.js and focuses on providing a seamless user experience with features such as pagination, searching, categorization, and sorting of products.

Features
Responsive Design: Fully responsive with a mobile-first design approach.
Product Display: Fixed-size product cards to display essential product information concisely.
Pagination: Navigate through products efficiently with page numbers and navigation buttons.
Searching: Search products based on their name.
Categorization: Filter products by brand, category, and price range.
Sorting: Sort products by price and date added.
Authentication: Google and Email/Password authentication using Firebase.
Navigation: Includes a Navbar with the website name/logo and relevant routes.
Footer: A Footer with necessary information and links.
Getting Started
Prerequisites
Node.js
npm or Yarn
React.js
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/goodsgallery-frontend.git
cd goodsgallery-frontend
Install dependencies:

bash
Copy code
npm install
Create a .env file in the root directory and add the following environment variables:

makefile
Copy code
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
Start the development server:

bash
Copy code
npm start
Open the app in your browser at https://magenta-creponne-04216c.netlify.app/

Project Structure
src/: Contains all the frontend code.
src/components/: Reusable components like Navbar, Footer, and ProductCard.
src/pages/: Pages like Home, Login, and ProductDetail.
src/context/: Context API for managing global state.
src/services/: API calls and Firebase setup.
Deployment
You can deploy the frontend on platforms like Netlify, Vercel, or any static hosting service.

License
This project is licensed under the MIT License.
