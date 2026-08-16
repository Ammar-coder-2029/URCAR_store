# 🚗 URCAR — Your Garage, Your Rules

A sleek multi-page car store built from scratch with **vanilla HTML, CSS, and JavaScript** — no frameworks, no shortcuts. Browse a curated fleet, filter by vibe (sport vs. everyday), drop cars into your cart, and check out the experience end to end. Everything runs entirely in your browser, powered by `localStorage`.

**🔗 Live demo:** https://ammar-coder-2029.github.io/URCAR_store/
**📦 Repository:** https://github.com/Ammar-coder-2029/URCAR_store

## ✨ Overview

URCAR is a hands-on deep dive into core JavaScript — DOM manipulation, event-driven UI, array methods (`find`, `map`, `filter`, `reduce`), and client-side state persistence — built as a real, working multi-page product instead of scattered exercises.

## 🛠️ Tech Stack

- HTML5
- Tailwind CSS (CDN) + custom `style.css` for the glow/pulse animations and layout
- Vanilla JavaScript (ES6+) — no frameworks, no build step, no dependencies
- Font Awesome (icons)
- Google Fonts
- Browser `localStorage` as the entire data layer — no backend, no database, no server

## 🚀 Features

- **Multi-page flow** — Home, Login, Register, and Cart pages that actually talk to each other.
- **12-car catalog** rendered dynamically from a single JS data source.
- **Live category filtering** — flip between "sports car" and "normal car" instantly, no reload.
- **Smart cart** — add the same car twice and it bumps the quantity instead of cluttering your cart with duplicates.
- **Real-time cart badge** — total item count updates the moment you add or remove anything.
- **Cart preview dropdown** — a quick glance at what's in your cart without leaving the page.
- **Full cart page** — decrement quantity one at a time, down to a clean removal at zero.
- **Session-aware header** — the UI reshapes itself based on whether you're logged in.
- **Persistent sessions** — log out and log back in with the same account, no re-registering required.
- **Client-side auth** — register and log in with credentials checked against stored data.
- **Animated, responsive UI** — glowing borders, hover scaling, and a blurred-background hover effect on product images, all built with Tailwind + custom CSS keyframes.

## ⚡ Setup

Zero install, zero build step — Tailwind loads straight from a CDN.

```bash
git clone https://github.com/Ammar-coder-2029/URCAR_store.git
cd URCAR_store
# open index.html directly in a browser, or serve it locally:
python -m http.server
```

Or just try the [live demo](https://ammar-coder-2029.github.io/URCAR_store/) directly — no setup needed.

## 🎮 Usage

1. **Register** a new account → redirects to login.
2. **Log in** → redirects to home.
3. Flip between **"sports car" / "normal car"** to filter the fleet.
4. Set a **quantity** and hit **add** — items merge smartly, no duplicates, and the cart badge updates live.
5. Click the **cart icon** for a quick preview, or **"View all products"** for the full cart page.
6. On the cart page, **remove** brings quantity down one at a time.
7. **LOG OUT** ends your session — log back in anytime with the same account.

## 🧠 Built With Intention

This is a front-end-only project by design — everything runs client-side with `localStorage` as the data layer, which keeps it lightweight, dependency-free, and easy to run anywhere with zero setup. That tradeoff means auth and storage stay simple rather than production-grade, which is exactly the point of a project like this: a focused space to master DOM logic, state management, and array methods without backend complexity getting in the way.

## 🔍 Known Issues

Being upfront about where this stands today:

- **Passwords are stored in plaintext** in `localStorage`. Fine for a client-side demo, not how a real app should handle credentials — a production version would hash them server-side.
- **One account at a time** — registering a new account overwrites the previous one, since there's no real multi-user database behind this.
- **Some event bindings still use inline `onclick`** rather than `addEventListener`, which is on the list to clean up.
- **Validation is minimal** — forms check for empty fields but don't check email format or password strength yet.

## 🗺️ Roadmap

Things on deck for future iterations:

- Move event bindings fully to `addEventListener` for cleaner separation of markup and logic.
- Support multiple stored accounts for a more realistic multi-user feel.
- Add richer form validation (email format, password strength).
- Explore a lightweight backend for persistent, shared product data.

## 🤝 Contribution

Solo learning project — not currently open to external contributions, but feedback and ideas are always welcome via GitHub issues.

## 📄 License

MIT
