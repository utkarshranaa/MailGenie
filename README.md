# Mail Genie🧞

**Mail Genie** is a SaaS platform for creating and customizing email templates using modern web technologies. Built from the ground up with Next.js and serverless functions on Vercel, it features a robust backend powered by Convex and integrates the Gemini API for AI-driven email content generation. The platform offers an intuitive interface developed with advanced React techniques, enabling users to design professional emails quickly and efficiently.

[View the live demo](https://mailgenie-eight.vercel.app/)

---

## Features

- **SaaS Architecture:** Designed as a scalable, reliable, and high-performance platform with 99.95% uptime and optimized load times.
- **AI-Powered Content Generation:** Integrates the Gemini API to streamline the email drafting process, significantly reducing composition time.
- **Modern UI/UX:** Developed with Next.js, React, and Tailwind CSS for a responsive and engaging user experience.
- **Robust Backend:** Utilizes Convex for efficient data management and serverless operations.
- **Customizable Templates:** Offers flexible, customizable email templates to suit diverse business needs.

---

## Project Structure

- **app/** – Main Next.js application files, including pages, API routes, and global styles.
  - **(main)/dashboard/** – Dashboard for email template management.
  - **(main)/editor/** – Interface for creating and editing email templates.
  - **api/ai-email-generate/** – API endpoint leveraging the Gemini API for AI-powered email content generation.
- **components/** – Contains reusable UI components.
  - **custom/** – Custom components for functionalities like AI input, editor header, and various element components (e.g., Button, Divider, Image).
  - **ui/** – Common UI components such as buttons, dialogs, inputs, and sliders.
- **context/** – React contexts for state management (e.g., email template context, user details).
- **Data/** – Files for default layouts, prompts, and element lists.
- **convex/** – Backend configuration and schema definitions using Convex.
- **lib/** – Utility functions.
- **public/** – Static assets including images and SVGs.

---

## Usage

- **Dashboard:** Manage and organize your email templates through a user-friendly dashboard.
- **Editor:** Create and customize email templates using an intuitive interface designed for quick modifications.
- **AI Email Generation:** Leverage the integrated Gemini API to generate email content, streamlining the email drafting process.
- **Customization:** Easily modify and style components to align with your brand’s identity.

---

## Technologies Used

- **Next.js:** For server-side rendering and building a robust React application.
- **React:** To create dynamic and interactive UI components.
- **Tailwind CSS:** For efficient and responsive styling.
- **Convex:** For backend data management and serverless operations.
- **Gemini API:** For AI-driven email content generation.
- **Vercel:** For hosting and deployment of the SaaS platform.

---

## Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to open an issue or submit a pull request. For major changes, please open an issue first to discuss your ideas.

1. Fork the repository.
2. Create a new branch (`feature/your-feature`).
3. Make your changes.
4. Commit your changes.
5. Open a pull request.

---

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

---

## Acknowledgements

- Thanks to the open source community for their invaluable tools and libraries.
- Special thanks to the teams behind Next.js, React, Tailwind CSS, Convex, and the Gemini API for making this project possible.
