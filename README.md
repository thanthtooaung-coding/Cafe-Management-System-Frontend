# Cafe Management System - Frontend (Vue.js)

## Project Overview
This is the frontend of the Cafe Management System, built with Vue.js to manage employees, orders, inventory, and customers.

## Features
- User Authentication
- Role-based access control (Admin, Staff)
- Order management
- Employee and customer data handling

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
``` 

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Folder Structure

```sh
/cafe-management-system
├── /public
│   ├── index.html
│   └── favicon.ico
├── /src
│   ├── /assets                     # Images, fonts, and other assets
│   │   └── logo.svg
│   ├── /components                 # Reusable components
│   │   ├── Sidebar.vue
│   │   ├── SidebarGroup.vue
│   │   ├── SidebarLink.vue
│   │   ├── SidebarDropdown.vue
│   │   ├── /orders                 # Components related to orders
│   │   │   ├── OrderAddForm.vue
│   │   │   └── OrderEditForm.vue
│   │   ├── /products               # Components related to products
│   │   │   ├── ProductAddForm.vue
│   │   │   └── ProductEditForm.vue
│   │   └── /customers              # Components related to customers
│   │       ├── CustomerAddForm.vue
│   │       └── CustomerEditForm.vue
│   ├── /layouts                    # Layout components (e.g., MainLayout, AuthLayout)
│   │   └── MainLayout.vue
│   ├── /views                      # Page components (each representing a route)
│   │   ├── HomeView.vue
│   │   ├── DashboardView.vue
│   │   ├── OrdersView.vue
│   │   └── ProductsView.vue
│   ├── /router                     # Vue Router configuration
│   │   └── index.js
│   ├── /store                      # Vuex store (state management)
│   │   └── index.js
│   ├── /services                   # API service files
│   │   └── ApiService.js
│   ├── /utils                      # Utility functions
│   │   └── helpers.js
│   ├── /styles                     # Global and component-specific styles
│   │   └── global.css
│   ├── App.vue                     # Main Vue component
│   └── main.js                     # Entry file
├── /tests                          # Unit and integration tests
│   └── example.test.js
├── .env                            # Environment variables
├── .gitignore                      # Git ignore file
├── package.json                    # npm package configuration
└── README.md                       # Documentation
```