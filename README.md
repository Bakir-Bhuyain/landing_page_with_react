# 🌟 DigiTools - Premium Digital Tools Landing Page 🌟

## 📖 About the Project
Welcome to **DigiTools**, a lightning-fast, responsive, and beautifully designed landing page showcasing premium digital tools. The page is crafted to captivate users with its elegant design and interactive features.

---

## 🛠️ Technologies Used
- ⚛️ **React** (19.2.4)
- 🚀 **Vite** (8.0.1)
- 🎨 **Tailwind CSS** (4.2.2) + DaisyUI (5.5.19)
- 🌟 **React Icons (Lucide)**  
- 🔥 **React Toastify**
- 👨‍🎨 **ESLint**

---

## ✨ Features
- 🌐 **Responsive Design**: Fits seamlessly on all devices 🚀.
- 🖼️ **Beautiful UI Components**: Tailwind CSS & DaisyUI integration 🎨.
- 🎏 **Interactive User Experience**: Dynamic product and cart management.

---

## 🏗️ React Component Patterns
### 1. **State Management with Hooks**
- ⚡ Managed using **useState**.  
  _For example, `ModelCart` uses `useState` for product "Buy Now" handling._

### 2. **Props Drilling**
- 🔄 Data is passed across multiple component levels, connecting `App.jsx` → `DigitalTools.jsx` → `Navbar.jsx`.

### 3. **Lifting State Up**
- 📤 Shared global states like `selectedCards` and `carts` are centrally managed in `App`, benefiting all child components.  

---

## 📂 Component Architecture
🌟 Below is a breakdown of reusable, modular components:
- **`App.jsx`**: 📊 State manager and entry-point hub.
- **`Navbar.jsx`**: 🛒 Shows cart count dynamically.
- **`DigitalTools.jsx`**: Central component for products.
- **`Cards.jsx`**: Maps and displays products.
- **`ModelCart.jsx`**: Displays individual product details.
- **`SelectedAi.jsx`**: Highlights selected cart items.
- **Supporting Components**:  
  - `Footer.jsx`, `Banner.jsx`, `GetStarted.jsx`, `Subscription.jsx`, `State.jsx`

---

## 🚀 Installation and Setup
1. **Clone the repository**:  
   ```bash
   git clone https://github.com/Bakir-Bhuyain/landing_page_with_react
