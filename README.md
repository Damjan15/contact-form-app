# Contact Form Application

<img src="desktop-preview.jpg" alt="project-cover">

A responsive, accessible, and validated contact form built using React.js and Tailwind. This project demonstrates form state management, custom validation logic, and dynamic error handling without relying on default browser validation.

## 🚀 Features

- **Responsive Design:** Fully responsive layout that adapts to mobile, tablet, and desktop screens.
- **Custom Validation:**
  - **First Name:** Required, 3-20 characters.
  - **Last Name:** Required, 3-40 characters.
  - **Email:** Required, valid email format regex.
  - **Query Type:** Required selection.
  - **Message:** Required.
  - **Consent:** Must be checked to submit.
- **Real-time Feedback:** Visual error states (red borders and error messages) appear upon submission attempt.
- **Success Handling:** Displays a success toast notification upon valid submission and clears the form.
- **Accessible Inputs:** All form inputs are associated with labels and handle focus states.

## 🛠️ Tech Stack

- **Frontend:** React.js
- **Styling:** Tailwind CSS

## 📂 Project Structure

```text
src/
├── components/
│   ├── inputs/
│   │   ├── CheckboxInput.jsx
│   │   ├── EmailInput.jsx
│   │   ├── RadioInput.jsx
│   │   ├── TextAreaInput.jsx
│   │   └── TextInput.jsx
│   └── ContactCard.jsx
├── App.jsx
├── index.css  # Contains the custom styling and theme public
└── index.html
```

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone [https://github.com/your-username/contact-form-app.git](https://github.com/your-username/contact-form-app.git)
cd contact-form-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

### 4. Open in Browser & Visit: `http://localhost:5173`
