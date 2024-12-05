import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../Layout/Layout";

// Lazy load all route components
const Home = lazy(() => import("../../pages/Home"));
const ServerLess = lazy(() => import("../../pages/Services/ServerLess"));
const DevOps = lazy(() => import("../../pages/Services/DevOps"));
const MobileAppDevelopment = lazy(() => import("../../pages/Services/MobileAppDevelopment"));
const Plugin = lazy(() => import("../../pages/Services/Plugin"));
const Software = lazy(() => import("../../pages/Services/Software"));
const CloudMigration = lazy(() => import("../../pages/Services/CloudMigration"));
const AiComponent = lazy(() => import("../../pages/Services/AiComponent"));
const Contact = lazy(() => import("../../pages/Contact"));
const BlogDetails = lazy(() => import("../../pages/BlogDetails"));
const Aboutus = lazy(() => import("../../pages/Aboutus"));
const Policy = lazy(() => import("../../pages/Policy"));
const Blog = lazy(() => import("../../pages/Blog"));
const News = lazy(() => import("../../pages/News"));
const Careers = lazy(() => import("../../pages/Careers"));
const ErrorPage = lazy(() => import("./ErrorPage"));

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

const Routers = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        {/* This wraps only the valid routes */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/serverless-computing" element={<ServerLess />} />
          <Route path="/devops" element={<DevOps />} />
          <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
          <Route path="/plugin-development" element={<Plugin />} />
          <Route path="/software-development" element={<Software />} />
          <Route path="/cloud-migration" element={<CloudMigration />} />
          <Route path="/Artificial-intelligence" element={<AiComponent />} />
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/blogs/:slug" element={<BlogDetails />} />
          <Route path="/cookie-policy" element={<Policy />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/news" element={<News />} />
          <Route path="/careers" element={<Careers />} />
        </Route>

        {/* This route only applies for invalid URLs (404 page) */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
};

export default Routers;
