# Style Guide

## Overview

This style guide outlines the design principles and CSS rules used in the Testimonials Grid Section project. It includes details about colors, typography, layout, and components to ensure consistency and maintainability across the project.

## Colors

### Primary Colors

- **Moderate Violet**: `hsl(263, 55%, 52%)`
- **Very Dark Grayish Blue**: `hsl(217, 19%, 35%)`
- **Very Dark Blackish Blue**: `hsl(219, 29%, 14%)`
- **White**: `hsl(0, 0%, 100%)`

### Neutral Colors

- **Light Gray**: `hsl(0, 0%, 81%)`
- **Light Grayish Blue**: `hsl(210, 46%, 95%)`

## Typography

### Font Family

- **Primary Font**: "Barlow Semi Condensed", sans-serif
  - Font weights: 500 (regular), 600 (bold)

### Font Sizes and Weights

- **Headings**:
  - `h1, h2, h3, h4, h5, h6`: Font weight 500
  - `h4`: Font size 23px, Font weight 600

- **Paragraphs**:
  - `p`: Font size 15px, Line height 1.4

## Layout

### General Styles

- **Box Model**:
  - `*`: Margin and padding set to 0, Box-sizing set to border-box

- **Container**:
  - Display: Grid
  - Gap: 20px
  - Margin: 20px

### Grid Layout

- **Default (Mobile)**:
  - `.container`: Grid-template-columns set to 1fr

- **Tablet and Up (Min-width: 640px)**:
  - `.container`: Grid-template-columns set to repeat(2, 1fr)

- **Desktop and Up (Min-width: 1280px)**:
  - `.container`: Grid-template-columns set to repeat(4, 1fr)
  - Max-width: 1200px, Margin: 50px auto

### Components

#### Cards

- **General Styles**:
  - Padding: 20px
  - Border-radius: 10px
  - Box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5)
  - Color: `var(--white)`

- **Card Variants**:
  - **mviolet**:
    - Background-color: `var(--moderate-violet)`
    - Small text color: `hsla(263, 55%, 86%, 0.7)`
  - **gray-blue**:
    - Background-color: `var(--very-dark-grayish-blue)`
  - **white**:
    - Background-color: `var(--white)`
    - Color: `var(--very-dark-grayish-blue)`
    - Paragraph text color: `hsla(219, 35%, 38%, 0.7)`
  - **black-blue**:
    - Background-color: `var(--very-dark-blackish-blue)`

#### Image

- **Profile Images**:
  - Border-radius: 50%
  - Height: 44px
  - Border: 3px solid `var(--light-gray)`
  - Margin-right: 10px

#### Quotes

- **Quote Icon**:
  - Position: Absolute
  - Right: 50px
  - Top: 0
  - Width: 90px

## Responsive Design

- **Mobile-First**:
  - Default styles are optimized for mobile devices and use a single-column layout.

- **Tablet**:
  - Two-column grid layout starting at 640px.

- **Desktop**:
  - Four-column grid layout starting at 1280px.
  - Specific grid placements for certain card variants to enhance layout and visual hierarchy.
