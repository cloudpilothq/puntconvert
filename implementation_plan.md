# Bet Code Converter Web Application

We will build a high-quality, modern web application that replicates the core functionality of ConvertBetCodes while sporting a dramatically improved, sleek, and premium design. 

## Goal Description
The goal is to create a fully functional frontend for a "Bet Code Converter." The app allows users to input a booking code from one sports betting platform and convert it to a code for another platform. We will focus on a rich user experience with micro-animations, glassmorphism, and a vibrant dark-mode theme suited for sports betting.

## User Review Required
> [!IMPORTANT]
> - **Framework**: I propose using Next.js with React and regular CSS modules (or global vanilla CSS as per instructions) to give us complete control over the animations and design.
> - **Mock Data vs API**: The actual conversion of bet codes across different bookmakers typically requires backend integrations with each bookie. For this replica, the frontend will be fully functional, and we will mock the backend API conversion logic unless you have a real API endpoint you want me to hook up to?
> - **Tailwind CSS**: The general instruction is to avoid Tailwind unless requested. I will write custom, pure Vanilla CSS for a deeply customized premium design. Are you okay with vanilla CSS for styling, or would you prefer Tailwind?

## Proposed Architecture & Features

### Core Stack
- **Frontend**: Next.js (App Router), React, Vanilla CSS.
- **Icons**: Lucide React for modern, scalable iconography.

### Pages & Routing
We will start by scaffolding the following core routes:
1. `/` - Home Page featuring the main Bet Converter form, latest conversions feed, and top tipsters list.
2. `/predictions` - Free/Hot predictions mockup page.
3. `/services` - Page describing API, applet, widget, and bet editor.

### Feature Breakdown

- **Hero Converter Section**: 
  - Dynamic input field for the booking code.
  - Custom dropdown menus for "Origin Bookmaker" and "Destination Bookmaker" featuring logos or distinctive colors for popular choices (e.g., Bet9ja, SportyBet, 1xBet).
  - A glowing, animated "Convert" button.
- **Live Feed (Recently Converted)**:
  - An auto-scrolling ticker or live-updating list showing recently converted codes from other users to build social proof.
- **Top Tipsters Section**:
  - Cards displaying top tipsters with profile images, stats, and links to their Telegram/socials.
- **Design Tokens**:
  - **Colors**: Deep dark background (`#0b0f19`), vibrant neon accents (`#00f2fe` and `#4facfe` for gradients, `#38ef7d` for success states).
  - **Typography**: `Inter` and `Outfit` for sporty, clean readability.
  - **Effects**: Backdrop filters for glassmorphism panels.

## Execution Steps

1. **Initialization**: Create a new Next.js project using `npx create-next-app@latest ./`.
2. **Design System**: Set up `app/globals.css` with the vibrant color palette, CSS variables, and modern web font imports (Google Fonts).
3. **Layout & Navigation**: Create a persistent modern top navigation bar and responsive footer.
4. **Hero Component**: Build the core conversion form UI with smooth transitions and hover states.
5. **Additional Components**: Construct the Recent Conversions list and Tipster cards.
6. **Assembly**: Integrate components onto the page and refine animations.

## Open Questions
> [!WARNING]
> Please confirm the following before I begin scaffolding the application:
> 1. Should I proceed with initializing Next.js in the current directory (`c:\Users\HP\Documents\bet_project`)?
> 2. How many bookmakers should we include in the dropdown options initially? (e.g. 10 most popular like Bet9ja, Sportybet, 1xbet, Paripesa, etc.)
> 3. Does the proposed dark-themed, glassmorphic design sound good to you?

## Verification Plan
### Automated Verification
- Ensure the Next.js development server runs cleanly without errors.
- Confirm all semantic HTML elements and CSS transitions trigger correctly on hover/focus.

### Manual Verification
- Ask the user to run `npm run dev` and test the platform visually on their browser.
- Validate that the Conversion process gives a highly satisfying visual feedback state.
