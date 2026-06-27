# Mantra_hotel_website_2026
# Meridian Hotel & Spa — Sample Hotel Website

A frontend hotel website built for the MANTRA 2026 Summer School assignment
(Assignment 1: Frontend Website Design, SEO, Responsiveness & Netlify Hosting).

## Website Type
Hotel Website

## Technologies Used
- HTML5
- CSS3
- JavaScript
- GitHub
- Netlify

## Pages Included
- Home (`index.html`)
- About (`about.html`)
- Rooms (`rooms.html`)
- Gallery (`gallery.html`)
- Booking (`booking.html`)
- Contact (`contact.html`)

## Features
- Responsive design for mobile, tablet and desktop (CSS media queries)
- Basic SEO on every page: title tag, meta description, meta keywords,
  one `<h1>` per page, `<h2>`/`<h3>` section headings, descriptive alt text
- Mobile navigation menu (JavaScript toggle)
- Room booking form with JavaScript validation (required fields, email format,
  10-digit phone number, check-out date after check-in date)
- Room stay cost calculator (room type × nights × number of rooms)
- Gallery filter buttons (Rooms / Dining / Pool & Spa / Exterior) using JavaScript
- Custom SVG illustrations for the hero banner, all four room types and the
  gallery (no external/copyrighted images used)
- Consistent navy-and-gold visual identity with Playfair Display + Lato fonts

## File Structure
```
hotel-website/
├── index.html
├── about.html
├── rooms.html
├── gallery.html
├── booking.html
├── contact.html
├── style.css
├── script.js
├── README.md
└── images/
    ├── hero.svg
    ├── room-deluxe.svg
    ├── room-premier.svg
    ├── room-executive.svg
    ├── room-royal.svg
    ├── gallery-pool.svg
    ├── gallery-dining.svg
    └── gallery-exterior.svg
```

## How to Run Locally
Open `index.html` in any browser. No build step or server is required.

## GitHub + Netlify Deployment Steps
1. Create a new public GitHub repository.
2. Upload all files in this folder (keeping the `images/` folder structure intact).
3. Log in to [Netlify](https://www.netlify.com).
4. Click **Add new site** → **Import an existing project**.
5. Connect your GitHub repository.
6. Leave build settings empty (it's a static site) and click **Deploy**.
7. Once deployed, copy the live Netlify URL for submission.

## Submission Checklist
- [ ] GitHub repository link (public, contains all files + this README)
- [ ] Netlify live website link
- [ ] Selected topic: **Hotel**
