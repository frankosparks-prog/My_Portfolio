import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import ScrollToTop from "./components/scrollTop";
import { Toaster } from "react-hot-toast";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FAQs from "./pages/FAQs";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
// import ManageBlogs from "./Admin/ManageBlogs";
// import Comments from "./Admin/Comments";
// import AdminFAQs from "./Admin/AdminFAQs";
// import ManageGallery from "./Admin/ManageGallery";
// import AdminLogin from "./Admin/AdminLogin";
// import ProtectedRoute from "./Admin/ProtectedRoute";
// import AdminDashboard from "./Admin/AdminDashboard";
// import VisitorTracker from "./components/VisitorTracker";

// 👇 create a wrapper component to manage layout
function AppLayout() {
  const location = useLocation();

  // Check if current route starts with /admin
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {/* <ScrollToTop /> */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          success: {
            style: {
              background: '#D1FAE5',
              color: '#065F46',
            },
          },
          error: {
            style: {
              background: '#FEE2E2',
              color: '#991B1B',
            },
          },
        }}
      />
      {/* <VisitorTracker /> */}

      {/* 👇 Only show Navbar & Footer if NOT on admin routes */}
      {!isAdminRoute && <Navbar />}
      <div className="min-h-screen">
        <AppRoutes />
      </div>
      {!isAdminRoute && <Footer />}
    </>
  );
}

// 👇 split routes into a separate component
function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/FAQs" element={<FAQs />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="*" element={<NotFound />} />

      {/* Admin routes */}
      {/* <Route path="/adminlyc" element={<AdminLogin />} />
       <Route
        path="/adminlyc/dashboard/*"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="visitors" replace />} />
        <Route path="visitors" element={<UsersDetails />} />
        <Route path="profiles" element={<ManageProfiles />} />
        <Route path="opportunities" element={<ManageOppo />} />
        <Route path="subscribed" element={<Subscribed />} />
        <Route path="blog" element={<ManageBlogs />} />
        <Route path="testimonials" element={<AdminTestimonials />} />
        <Route path="comments" element={<Comments />} />  
        <Route path="faqs" element={<AdminFAQs />} />
        <Route path="events" element={<ManageEvents />} />
        <Route path="gallery" element={<ManageGallery />} />
      </Route> */}
    </Routes>
  );
}

// 👇 Main App
function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
