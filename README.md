# 📂 FileShare - A Node.js File Sharing Platform

**FileShare** is a cloud-based file sharing and storage platform built using **Node.js**, **Express.js**, **EJS**, **ImageKit**, and **MongoDB**.  
It provides functionality similar to **Google Drive**, featuring **user authentication**, **file uploads**, **secure file access**, and **role-based authorization**.

---

## 🚀 Features

- ✅ User registration and login with secure password hashing
- ✅ Authentication with Passport.js
- ✅ Upload files (images, documents, etc.) to ImageKit
- ✅ Preview uploaded files inside the application
- ✅ Organized folder structure (create folders, upload inside folders)
- ✅ Shareable public links (optional)
- ✅ Authorization control (only owners can delete/edit files)
- ✅ Flash messages for real-time user feedback
- ✅ Fully responsive EJS templates

---

## 🛠️ Tech Stack

| Technology       | Purpose                        |
| :--------------- | :----------------------------- |
| **Node.js**       | Server-side JavaScript runtime  |
| **Express.js**    | Web framework                  |
| **MongoDB Atlas** | Cloud-based NoSQL database     |
| **Mongoose**      | ODM for MongoDB                |
| **EJS**           | Templating engine              |
| **ImageKit.io**   | Media storage and optimization |
| **Express-Session** | Session management           |

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/HaqueJunaid/ourdrive.git

# Navigate to the project directory
cd ourdrive

# Install dependencies
npm install

# Fill in your own MongoDB URI, ImageKit credentials, and session secrets

# Run the server
npm run dev
```

---

## 🔐 Authentication & Authorization

- Users must register and log in to access the dashboard.
- Files and folders are user-specific.
- Only the uploader can delete or modify their files.
- Public sharing link generation available (optional).

---

## 📁 Folder Structure

```
/controllers   # Business logic
/models        # Mongoose schemas
/routes        # Express routes
/views         # EJS templates
/public        # Static files (CSS, JS)
```

---

## 🙏 Acknowledgements

- [ImageKit.io](https://imagekit.io/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Express.js](https://expressjs.com/)
- [EJS Templates](https://ejs.co/)

---

## 📬 Contact

**Made with ❤️ by Junaid haque**

- GitHub: [@HaqueJunaid]([https://github.com/your-username](https://github.com/HaqueJunaid))
- Email: junaid132boss@gmail.com

---

> _Feel free to ⭐️ this repository if you find it useful!_
```
