# React Jobs Project

This project is a comprehensive CRUD application for listing jobs. I coded along with [YouTube crash course by Traversy Media](https://youtu.be/LDB4uaJ87e0). Special thanks to [Traversy Media](https://www.youtube.com/@TraversyMedia) for providing such a valuable and detailed tutorial for free!

## What I Learned

- **React & Vite Setup**: Configuring a React project with Vite for a modern development experience.
- **Tailwind CSS Integration**: Adding Tailwind CSS to style components efficiently.
- **Component Creation**: Building and utilizing React components throughout the application.
- **FontAwesome Icons**: Implementing FontAwesome icons using `react-icons`.
- **React Router**: Setting up routing with `react-router-dom`, including `NavLink` and `Outlet` for navigation and nested routes.
- **Main Layout**: Creating a main layout component for consistent application structure.
- **JSON Server**: Using JSON-Server to simulate a backend for development.
- **React Spinners**: Adding loading indicators with `react-spinners`.
- **Proxy Configuration**: Setting up proxies for API requests.
- **React Hooks**: Leveraging various React hooks such as `useEffect`, `useNavigate`, `useState`, `useParams`, and `useLoaderData`.
- **React Toastify**: Implementing notifications with `react-toastify`.
  
  and so many othe things :)

## Usage

This project utilizes JSON-Server for a mock backend. Follow these instructions to run the project locally.

### Run JSON Server

Start the JSON-Server to simulate the backend API. It will be accessible at [http://localhost:8000](http://localhost:8000).

```bash
npm run server
```

## Run Vite Frontend
Launch the React frontend using Vite. The application will be available at http://localhost:3000.

```bash
npm run dev
```
Note: If you deploy this project, it won't show the jobs list since it relies on the local JSON-Server. To make it functional in a production environment, you will need to set up a real backend using technologies like Express, Django, or any other suitable framework.
