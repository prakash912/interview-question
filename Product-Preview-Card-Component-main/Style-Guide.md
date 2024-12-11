# Style Guide

This style guide provides an overview of the design and coding conventions used in the Product Preview Card Component.

## Design Tokens

### Colors

- **Primary Colors**
  - Dark Cyan: `hsl(158, 36%, 37%)` (`#004d40`)
  - Cream: `hsl(30, 38%, 92%)` (`#f9f5e7`)

- **Neutral Colors**
  - Very Dark Blue: `hsl(212, 21%, 14%)` (`#1e2a38`)
  - Dark Grayish Blue: `hsl(228, 12%, 48%)` (`#7c8a8f`)
  - White: `hsl(0, 0%, 100%)` (`#ffffff`)
  - Dark Blue: `hsl(180, 100%, 18.65%)` (`#003e3e`)

### Typography

- **Headings and Product Name**
  - Font Family: [Fraunces](https://fonts.google.com/specimen/Fraunces)
  - Font Weight: 700 (Bold)
  - Font Size: 2.2rem for product name, adjust as needed for responsiveness

- **Body Text and Button Text**
  - Font Family: [Montserrat](https://fonts.google.com/specimen/Montserrat)
  - Font Weight: 500 (Medium)
  - Font Size: 1em for buttons, adjust as needed for responsiveness

- **Category Text**
  - Font Family: [Montserrat](https://fonts.google.com/specimen/Montserrat)
  - Font Weight: 500 (Medium)
  - Font Size: 14px, adjust as needed for responsiveness

### Spacing

- **Margins and Padding**
  - Main Container: Margin of 30px auto, padding and spacing adjusted based on screen size
  - Button: Padding of 15px 60px
  - Elements in Description Section: Margin and spacing adjusted for readability and responsiveness

### Layout

- **Main Container**
  - Display: Flexbox for alignment
  - Flex Direction: Row for larger screens, column for mobile screens
  - Border Radius: 15px
  - Box Shadow: 1px 2px 10px rgba(0, 0, 0, 0.3)

- **Image Section**
  - Width: 130% for desktop, adjusted for mobile
  - Display: Block

- **Description Section**
  - Width: 60% for desktop, 100% for mobile
  - Position: Relative to adjust content alignment

### Buttons

- **Styles**
  - Background Color: Dark Cyan (`var(--dark-cyan)`)
  - Text Color: White (`var(--white)`)
  - Border Radius: 10px
  - Padding: 15px 60px
  - Font Size: 1em
  - Hover State: Background Color changes to Dark Blue, slight scale transform and box shadow

### Responsive Design

- **Breakpoints**
  - Mobile: max-width: 768px
  - Extra Small Mobile: max-width: 361px

- **Adjustments**
  - Image Size: Adjusted for mobile screens
  - Description Section: Width and padding adjusted for mobile
  - Font Sizes: Adjusted for readability on smaller screens
  - Button Size: Adjusted for touch targets on mobile

## Accessibility

- **Interactive Elements**
  - Buttons: Include `aria-label` for screen readers
  - Links: Ensure proper focus states and contrast ratios

## Usage

This style guide ensures consistency in design and development. Use the provided design tokens and guidelines when implementing new components or features to maintain visual harmony and accessibility across the project.

For any updates or changes to the design, refer to the latest guidelines and incorporate them into the component accordingly.