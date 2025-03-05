// Mobile Menu Toggle
const mobileMenu = document.getElementById("mobile-menu")
const navMenu = document.querySelector(".nav-menu")

if (mobileMenu) {
  mobileMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("active")
    navMenu.classList.toggle("active")
  })
}

// Close mobile menu when clicking on a nav link
const navLinks = document.querySelectorAll(".nav-link")
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active")
    navMenu.classList.remove("active")
  })
})

// Menu Tabs
const tabBtns = document.querySelectorAll(".tab-btn")
const menuCategories = document.querySelectorAll(".menu-category")

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons and categories
    tabBtns.forEach((btn) => btn.classList.remove("active"))
    menuCategories.forEach((category) => category.classList.remove("active"))

    // Add active class to clicked button
    btn.classList.add("active")

    // Show corresponding category
    const categoryId = btn.getAttribute("data-category")
    document.getElementById(categoryId).classList.add("active")
  })
})

// Testimonial Slider
const slides = document.querySelectorAll(".testimonial-slide")
const dots = document.querySelectorAll(".dot")
const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
let currentSlide = 0

// Function to show a specific slide
function showSlide(n) {
  // Remove active class from all slides and dots
  slides.forEach((slide) => slide.classList.remove("active"))
  dots.forEach((dot) => dot.classList.remove("active"))

  // Set current slide index
  currentSlide = (n + slides.length) % slides.length

  // Add active class to current slide and dot
  slides[currentSlide].classList.add("active")
  dots[currentSlide].classList.add("active")
}

// Event listeners for prev/next buttons
if (prevBtn && nextBtn) {
  prevBtn.addEventListener("click", () => {
    showSlide(currentSlide - 1)
  })

  nextBtn.addEventListener("click", () => {
    showSlide(currentSlide + 1)
  })
}

// Event listeners for dots
dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const slideIndex = Number.parseInt(dot.getAttribute("data-slide"))
    showSlide(slideIndex)
  })
})

// Auto slide change
function autoSlide() {
  showSlide(currentSlide + 1)
}

// Set interval for auto slide
const slideInterval = setInterval(autoSlide, 5000)

// Pause auto slide on hover
const testimonialSlider = document.querySelector(".testimonial-slider")
if (testimonialSlider) {
  testimonialSlider.addEventListener("mouseenter", () => {
    clearInterval(slideInterval)
  })
}

// Form Submission
const contactForm = document.getElementById("contactForm")
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form values
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const message = document.getElementById("message").value

    // Here you would typically send the form data to a server
    // For this demo, we'll just log it and show an alert
    console.log("Form submitted:", { name, email, message })

    alert("Thank you for your message! We will get back to you soon.")
    contactForm.reset()
  })
}

// Newsletter Form
const newsletterForm = document.getElementById("newsletterForm")
if (newsletterForm) {
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get email value
    const email = newsletterForm.querySelector('input[type="email"]').value

    // Here you would typically send the email to a server
    // For this demo, we'll just log it and show an alert
    console.log("Newsletter subscription:", email)

    alert("Thank you for subscribing to our newsletter!")
    newsletterForm.reset()
  })
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()

    const targetId = this.getAttribute("href")
    const targetElement = document.querySelector(targetId)

    if (targetElement) {
      // Calculate header height
      const headerHeight = document.querySelector("header").offsetHeight

      // Scroll to target with offset for header
      window.scrollTo({
        top: targetElement.offsetTop - headerHeight,
        behavior: "smooth",
      })
    }
  })
})

// Scroll to top button
window.addEventListener("scroll", () => {
  // You can add a scroll-to-top button here if needed
})

// Initialize the testimonial slider on page load
document.addEventListener("DOMContentLoaded", () => {
  showSlide(0)
})

