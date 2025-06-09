// src/routes/AppRoutes.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import NotFound from "./NotFound";

const Home = lazy(() => import("./home/index"));
const Login = lazy(() => import("./auth/Login"));
const Case = lazy(() => import("./chat/[caseId]"));
const StudentDashboard = lazy(() => import("./dashboard/student"));
const TutorDashboard = lazy(() => import("./dashboard/tutor"));

export function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/case/:caseId" element={<Case />} />
        <Route path="/dashboard/student" element={<StudentDashboard />} />
        <Route path="/dashboard/tutor" element={<TutorDashboard />} />
        {/* catch-all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
