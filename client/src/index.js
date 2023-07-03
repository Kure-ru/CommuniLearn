import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import HomeScreen from "./screens/HomeScreen.jsx";
import RegisterScreen from "./screens/RegisterScreen.jsx";
import LoginScreen from "./screens/LoginScreen.jsx";
import CreateLessonScreen from "./screens/CreateLessonScreen.jsx";
import SearchScreen from "./screens/SearchScreen.jsx";
import TeacherDashboard from "./screens/TeacherDashboardScreen.jsx";
import LessonScreen from "./screens/LessonScreen";
import SettingsScreen from "./screens/SettingsScreen";
import EditLessonScreen from "./screens/EditLessonScreen";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/new" element={<CreateLessonScreen />} />
      <Route path="/search" element={<SearchScreen />} />
      <Route path="/profile" element={<TeacherDashboard />} />
      <Route path="/lesson/:lessonID" element={<LessonScreen />} />
      <Route path="/edit/:lessonID" element={<EditLessonScreen />} />
      <Route path="/settings" element={<SettingsScreen />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
