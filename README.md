# Strapi Project

This project uses Strapi as a headless CMS.

## Getting Started

### Prerequisites
- Node.js (Latest LTS version recommended)
- Yarn or npm
- Strapi installed globally (optional)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo.git
   cd your-project
   ```

2. Install dependencies:
   ```sh
   yarn install  # or npm install
   ```

### Environment Variables

Create a `.env` file in the root directory and add the following:

```env
STRAPI_URL="https://your-strapi-instance.com"
```

This variable is used to connect the frontend/backend with the Strapi API.

### Running the Project

Start the Strapi server:
```sh
yarn develop  # or npm run develop
```

### Deployment

For production, ensure `STRAPI_URL` is set correctly in your environment variables.

### License

This project is licensed under the MIT License.
