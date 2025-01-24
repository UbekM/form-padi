<!-- @format -->

# Form Padi - MAP Developer Challenge

I have only worked on the UI, if given more time, I'll add the functionalities.

Had a hard time with the API, so I used a mock API, which was also took time integrating...

Thank you.

## Overview

Form Padi is a form searcher app built with **Next.js**, allowing users to search and filter form templates from a mock REST API. It is responsive and uses a component-based architecture for maintainability.

## Features

- Search templates by category: All, Education, E-commerce, Health.
- Filter templates by:
  - Alphabetical Order: Default, Ascending, Descending.
  - Date Created: Default, Ascending, Descending.
- Responsive design for mobile and tablet screens.

## Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **HTTP Client**: Axios
- **Hosting**: Vercel

## API Details

- **Endpoint**: `https://caselops.free.beeceptor.com/template`
- **Method**: GET
- **Sample Response**:
  ```json
  [
    {
      "name": "Blood donation form template",
      "created": "2020-11-04T16:26:44.666569Z",
      "category": ["Health"],
      "description": "Testing template",
      "link": ""
    }
  ]
  ```

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/[your-username]/map-form-padi-[your-initials].git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the app:
   ```bash
   npm run dev
   ```

## Deployment

- [Live Project](https://your-vercel-project-link.vercel.app)

## Notes

- The `link` field in the API response is not active.
- Large datasets and pagination are not supported.

---

**Built with ❤️ by [Your Name]**
