// src/routes/index.tsx
import { Navigate } from "react-router-dom";

export default function Index() {
  return <Navigate to="/home" replace />;
}
