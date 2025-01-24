# My Blog

![My Blog Banner](public/banner.png)

Welcome to **My Blog**, a modern blogging platform built with Next.js. This project allows users to read, write, and manage their blog posts with seamless authentication using Kinde.

## 🚀 Live Demo

🔗 [My Blog - Live Site](https://blog-assignment-ejp.vercel.app)

---

## 🛠️ Technologies Used

- **Frontend:** React.js, Next.js, Tailwind CSS
- **Backend:** Node.js, Next.js API Routes
- **Authentication:** Kinde
- **Deployment:** Vercel
- **Icons:** React-Icons

---


## ✨ Features

- 🔐 **Authentication:** Secure login/logout using Kinde
- 📱 **Responsive Design:** Fully responsive on all devices
- 🚀 **Fast Performance:** Optimized with Next.js for speed

---

## ⚙️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Hayder987/simple-blog-nextJs
   ```

2. Navigate to the project folder:
   ```bash
   cd my-blog-ejp
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables in `.env.local`:
   ```plaintext
   KINDE_CLIENT_ID=your_client_id
   KINDE_CLIENT_SECRET=your_client_secret
   KINDE_ISSUER_URL=https://yourdomain.kinde.com
   KINDE_SITE_URL=http://localhost:3000
   KINDE_POST_LOGIN_REDIRECT_URL=http://localhost:3000/api/auth/callback
   KINDE_POST_LOGOUT_REDIRECT_URL=http://localhost:3000
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open the project in your browser:
   ```
   http://localhost:3000
   ```

---

## 🚀 Deployment

### Deploy to Vercel
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Deploy the project:
   ```bash
   vercel --prod
   ```
3. Add environment variables in Vercel Dashboard.

---

## 🔐 Authentication Setup

Ensure the following URLs are added to your Kinde application's **Allowed Callback URLs:**

- `https://blog-assignment-ejp.vercel.app/api/auth/callback`
- `http://localhost:3000/api/auth/callback`

---


## 🧑‍💻 Author

- **Hayder** - [Profile](https://hayder-ali.web.app)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

---


⭐ **Don't forget to star the repo if you find it useful!**

