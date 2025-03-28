# EcommerceReact Native E-commerce App
A simple e-commerce mobile application built with React Native that integrates with the Fake Store API. This app demonstrates how to create a functional e-commerce experience with product listing, details, and management features.

Features:
=> View detailed product information
=> Add new products
=> Edit existing products
=> Delete products
=> Real-time API integration
=> This project uses the Fake Store API for all product operations:

Prerequisites:
=> Node.js 
=> Android Studio 
=> Android Emulator or Physical Device

Setup Instructions:
Clone the repository
git clone https://github.com/monicamreddy/Ecommerce.git
cd Ecommerce

Dependencies:
These are the libraries required to run the application.
1) @react-navigation/native: npm install @react-navigation/native
2) @react-navigation/stack: npm install @react-navigation/stack
3) react-native-gesture-handler: npm install react-native-gesture-handler
4) react-native-reanimated: npm install react-native-reanimated
5) react-native-safe-area-context: npm install react-native-safe-area-context
6) react-native-screens: npm install react-native-screens
7) react-native-vector-icons: npm install react-native-vector-icons
8) To install all the dependencies (both dependencies and devDependencies): npm install

Steps to run:
1) npx react-native start
2) npx raect-native run-android

Note:
The Fake Store API is a demo/mock API that simulates responses but doesn't actually persist changes to its database. When you:

1. Make a PUT request to update a product - it returns a success response with the updated data
2. Make a POST request to add a product - it returns a success response with the new product and ID
3. But when you fetch the products list again, you get the original dataset, not including your changes.

This is by design - the API documentation states: "Note: post, put and delete calls don't really update the store."

Screenshots:
Here are some screenshots of the app with descriptions:

<div align="center">
    <img src="assets/screenshots/AllProduct.png" alt="All Product List" width="60%" />
    <p><strong>All product list where users can view, edit, delete, and add their product details.
    </strong></p>
</div>

<div align="center">
    <img src="assets/screenshots/ViewProduct1.png" alt="View Product 1" width="60%" />
    <p><strong>Detailed information of the product.</strong></p>
</div>

<div align="center">
    <img src="assets/screenshots/ViewProduct2.png" alt="View Product 2" width="60%" />
    <p><strong>Detailed information of the product.</strong></p>
</div>

<div align="center">
    <img src="assets/screenshots/DeleteProduct.png" alt="Delete Product" width="60%" />
    <p><strong>Deleting the product.</strong></p>
</div>

<div align="center">
    <img src="assets/screenshots/DeleteProductSuccess.png" alt="Delete Product Success" width="60%" />
    <p><strong>Deleting the product is successful.</strong></p>
</div>

<div align="center">
    <img src="assets/screenshots/AfterDelete.png" alt="After Delete" width="60%" />
    <p><strong>After Deleting the product, the product list.</strong></p>
</div>

<div align="center">
    <img src="assets/screenshots/EditProduct.png" alt="Edit Product" width="60%" />
    <p><strong>Updating the product.</strong></p>
</div>

<div align="center">
    <img src="assets/screenshots/EditProductSuccess.png" alt="Edit Product Success" width="60%" />
    <p><strong>Updating the product is successful.</strong></p>
</div>

<div align="center">
    <img src="assets/screenshots/ConsoleEdit.png" alt="Console for Edit" width="60%" />
    <p><strong>Console for edit product.</strong></p>
</div>

<div align="center">
    <img src="assets/screenshots/AddNewProduct.png" alt="Adding new Product" width="60%" />
    <p><strong>Adding new product.</strong></p>
</div>

<div align="center">
    <img src="assets/screenshots/NewProductDetails.png" alt="Entering new Product details" width="60%" />
    <p><strong>Entering the details for adding new product.</strong></p>
</div>

<div align="center">
    <img src="assets/screenshots/AddProductSuccess.png" alt="Added new product successfully" width="60%" />
    <p><strong>Adding new product successfull.</strong></p>
</div>

<div align="center">
    <img src="assets/screenshots/ConsoleAdd.png" alt="Console for product added" width="60%" />
    <p><strong>Console for adding new product.</strong></p>
</div>