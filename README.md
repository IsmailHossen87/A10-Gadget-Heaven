## Live Website

Visit the live website here: [GadgetHaven](https://assignment8-gadgetheaven.surge.sh/)

## Project Requirements

Refer to the detailed requirements document here: [GadgetHaven Requirements](https://drive.google.com/file/d/1JcShVgr6tCdAmmpBxZdwYJUOBUMqqGim/view?usp=drive_link)

---

## Key React Concepts Used

This project leverages core React concepts to enhance the functionality and user experience:

1. **Functional Components**: Modular, reusable components make up the UI.
2. **JSX**: Combines JavaScript and HTML for rendering dynamic content.
3. **State Management**: Uses `useState` for managing internal states like form inputs.
4. **React Router**: Seamlessly navigates pages (Home, Cart, Wishlist).
5. **useEffect**: Manages side effects (e.g., data fetching).
6. **Conditional Rendering**: Dynamically renders components based on interactions.
7. **useLocation and useNavigate**: Handles page-specific styles and navigation.

---

## State Management with Context API

**Global State Management**: The Context API enables global state sharing, primarily for managing cart and wishlist data across components:

- **Centralized State**: Reduces the need for prop drilling, enhancing performance and making data access straightforward.
- **Real-Time Cart & Wishlist Updates**: Changes to the cart or wishlist reflect instantly across the application, providing a unified experience.

---

## Features

1. **Responsive Design**: Optimized for all devices (desktop, tablet, mobile).
2. **Category Sidebar**: Allows filtering by categories (e.g., Phones, Computers).
3. **Shopping Cart**: Add, remove, and sort items, with real-time price updates and a $1000 limit.
4. **Wishlist**: Save items to a wishlist and easily transfer them to the cart.
5. **Order Confirmation Modal**: Confirms purchases and redirects to the homepage.
6. **Price & Category Filtering**: Refines product search results.
7. **404 Error Page**: Custom error page for unrecognized routes.

---

## Key Pages and Navigation

1. **Home Page**:

   - Features banner linking to the dashboard.
   - Showcases featured products in a grid format.
   - Sidebar for selecting categories.

2. **Product Dashboard**:

   - Displays products with options to view more details.

3. **Shopping Cart**:

   - Shows items added to the cart, with options to sort by price and a cap of $1000.

4. **Wishlist**:

   - View saved items, each with an "Add to Cart" button.

5. **Statistics Page**:

   - Offers insights on product pricing and rating correlations.

6. **404 Error Page**:
   - Custom page for invalid routes.

---

## Functionality

### Shopping Cart & Wishlist Management

- **Adding to Cart**: Items can be added to the cart, with toast notifications for confirmation.
- **Removing from Cart**: Updates the total price and reflects across pages.
- **Cart Value Limit**: The cart total is capped at $1000.
- **Sorting by Price**: A button enables sorting items by price in descending order.

### Wishlist Features

- **Add to Wishlist**: Save items for later in the wishlist.
- **Move to Cart**: Items can be moved to the cart if the cart total remains within the limit.
- **Remove from Wishlist**: Remove items as needed.

### Purchase Confirmation

- **Confirmation Modal**: A modal with a congratulatory message appears post-purchase, redirecting users to the homepage.

---

## Dynamic Page Title & Favicon

- **Dynamic Page Titles**: Page titles reflect the current route, providing context (e.g., "GadgetHaven - Cart").
- **Custom Favicon**: A unique favicon enhances branding.

---
