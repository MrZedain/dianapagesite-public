# Diana Page — Portfolio Website (Next.js App Router)

This repository contains the source code for a modern, performance-focused portfolio website for the artist Diana Page, built with Next.js App Router.
The public version of this repository intentionally excludes all artwork assets, focusing instead on architecture, UX, performance, and frontend engineering practices.

(Source code for the previous version of the site, built using React.js and vanilla CSS, can be viewed [here](https://github.com/MrZedain/DianaPageSite-public-outdated)


# Project Overview

A responsive, image-heavy portfolio site designed for showcasing large art collections while maintaining smooth navigation, fast load times, and a refined user experience across devices.

## Key priorities:

Performance on image-heavy pages

Mobile-first responsiveness

Smooth navigation without layout shift

Clean separation between server and client concerns

## 🧱 Tech Stack

Next.js v16.0.10 (App Router)

React

TypeScript

Tailwind CSS

Vercel Hosting

Vercel Analytics & Speed Insights

Native View Transitions API

Modern Server Components architecture

## 🧠 Architecture Highlights
Server Components by Default

Pages and components that don’t require client-side state are implemented as server components, reducing bundle size and JavaScript sent to the browser.

Client components are used only where necessary (modals, interactions, animations).

App Router + File-Based Routing

Dynamic gallery routes using [collection]

Clean separation of layout and page responsibilities

Automatic streaming and route-level performance optimizations

## 🖼️ Advanced Image Handling
Custom Responsive Image Modal

Click-to-open modal gallery

Pinch / zoom / pan support on touch devices

Mouse-wheel zoom on desktop

Prevents background scroll when open

Designed for high-resolution artwork viewing

Progressive Image Loading

Low-resolution placeholders displayed immediately

Heavy blur applied to low-res images to reduce pixelation

Smooth fade transition into full-resolution images once loaded

Eliminates white flashes and layout jumps during initial load

Lazy Loading

Images load only when needed

Prevents unnecessary network requests when browsing large collections

Improves perceived performance on slower connections

## 📱 Responsive UX

Fully responsive layout across:

Mobile

Tablet

Desktop

Mobile-first design decisions

Touch-friendly navigation and interactions

Header, modals, and galleries adapt cleanly to viewport changes

## 🔄 Page Transitions

Uses the native View Transitions API instead of JavaScript animation libraries

Avoids double-render and animation issues commonly encountered with App Router transitions

Results in:

Smooth page transitions

No hydration conflicts

Minimal runtime overhead

## ✉️ Newsletter Sign-Up UX

Persistent newsletter sign-up bubble rendered globally

Subtle animated affordances to attract attention without being intrusive

Opens a modal subscription form

Designed to be lightweight and non-blocking for page performance

## ⚙️ Performance & Monitoring

Vercel Speed Insights for real-world performance tracking

Vercel Analytics for page navigation insights

Optimized layout structure to avoid reflows and cumulative layout shift (CLS)

Minimal client-side JavaScript footprint

## 🧰 Developer Tooling
Image Normalization Script

Custom tooling for:

Generating low-resolution versions of images in a given folder

Saving generated low-res images into a lowres/ directory at the same location

Supporting progressive image loading workflows

Git Hygiene

Asset folders excluded from the public repository

Clean commit history focused on functionality and architecture

## 🚫 Excluded From This Repository

Public asset folders containing high-resolution artwork images

This repository is intended to demonstrate engineering quality, not to distribute artwork.

# 📌 Key Skills Demonstrated

Next.js App Router proficiency

Server vs Client component architecture

Advanced image UX (zoom, pan, progressive loading)

Performance optimization for image-heavy sites

Responsive design and accessibility-aware interactions

Production debugging (case sensitivity, deployment edge cases)

Clean, maintainable frontend architecture

# 📄 License

This repository contains code only and is shared for demonstrative purposes.
Artwork and visual assets remain the property of their respective owner, Diana Page, and are not included.
