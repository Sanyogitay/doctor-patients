import { Route, Routes } from "react-router-dom";
import ForggotedForm from "../../components/AllForms/ForggotedForm";
import LoginForm from "../../components/AllForms/LoginForm";
import RegisterForm from "../../components/AllForms/RegisterForm";
import SignupForm from "../../components/AllForms/SignupForm";
import Home from "../../components/Home";
import BookingSuccess from "../../components/NavBar/DropDown2/BookingSucces";
import FavouritesDoctor from "../../components/NavBar/DropDown2/FavouritesDocter";
import Calendar from "../../components/NavBar/DropDown3/Calender";
import Components from "../../components/NavBar/DropDown3/Components";
import ForgotPassword from "../../components/NavBar/DropDown3/Forgot Password";
import InvoiceView from "../../components/NavBar/DropDown3/Invoices/DropDown/Invoice View";
import Invoices from "../../components/NavBar/DropDown3/Invoices/DropDown/Invoices";
import Login from "../../components/NavBar/DropDown3/Login";
import Register from "../../components/NavBar/DropDown3/Register";
import StarterPage from "../../components/NavBar/DropDown3/StarterPage";
import SignInPatient from "../../components/NavBar/DropDown2/SignInPatient";
import SignInDoctor from "../../components/NavBar/DropDown1/SignInDoctor";
import DoctorRegistration from "../../components/NavBar/DropDown1/Registration";
import PatientRegistration from "../../components/NavBar/DropDown2/Registration";
import CreateProfile from "../../components/NavBar/DropDown1/CreateProfile";
import AudioConsultation from "../../components/NavBar/DropDown1/Calling/Voice Call";
import VideoConsultation from "../../components/NavBar/DropDown1/Calling/Video Call";
import Payment from "../../components/NavBar/DropDown1/Payment";
import HistoryOfAppointment from "../../components/NavBar/DropDown1/HistoryOfAppointment";
import ReviewsAndRating from "../../components/NavBar/DropDown1/Reviews & Rating";
import VoiceCall from "../../components/NavBar/DropDown2/Calling/Audio Consultation";
import VideoCall from "../../components/NavBar/DropDown2/Calling/Video Consultation";
import AppointmentHistory from "../../components/NavBar/DropDown2/Appointment History";
import Profile from "../../components/NavBar/DropDown2/Profile";
import RateAndReviews from "../../components/NavBar/DropDown2/Rate & Reviews";
import Logout from "../../components/NavBar/DropDown1/Logout";
import LogoutPatient from "../../components/NavBar/DropDown2/Logout";
import DoctorProfile from "../../components/NavBar/DropDown1/Doctor Profile";
import Dashboard from "../../components/NavBar/DropDown1/Dashboard";
import TotalEarnings from "../../components/NavBar/DropDown1/Dashboard/Transactions";
import PrivacyPolicy from "../../components/NavBar/DropDown1/Privacy Policy";
import TermAndCondition from "../../components/NavBar/DropDown1/Terms and Condition";
import AppointmentRequest from "../../components/NavBar/DropDown1/Appointment Request";
import PrivacyPolicyPatient from "../../components/NavBar/DropDown2/Privacy Policy";
import TermsAndConditions from "../../components/NavBar/DropDown2/Terms & Conditions";
import PatientList from "../../components/NavBar/DropDown1/Patient List";
import DoctorAvailability from "../../components/NavBar/DropDown2/Nearby Doctors/Doctor's Availability";
import BookAppointment from "../../components/NavBar/DropDown2/Nearby Doctors/Book Appointment";
import ProfileAndReviews from "../../components/NavBar/DropDown2/Nearby Doctors/profile and Reviews";
import CategorySpecification from "../../components/NavBar/DropDown2/Nearby Doctors/Category Specification";
import FAQ from "../../components/NavBar/DropDown2/FAQ's";
import CustomerSupport from "../../components/NavBar/DropDown2/Customer Support";
import RequestProduct from "../../components/NavBar/DropDown2/Request product";
import PaymentGatewayIntegration from "../../components/NavBar/DropDown2/Payment Integration";
import AppointmentStatusTracking from "../../components/NavBar/DropDown2/Appointment Status Tracking";
import OTPVerification from "../../components/NavBar/DropDown1/OTP";
import ConfirmBooking from "../../components/Vendor/ConfirmBooking";
import UploadCertificate from "../../components/Vendor/UploadCertificate";
import VendoreProfile from "../../components/Vendor/VendoreProfile";
import LoginVendor from "../../components/Vendor/LoginVendor";
import VendorRegistration from "../../components/Vendor/VendorRegistration";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignInDoctor />} />
      <Route path="/home" element={<Home />} />

      {/* doctors  */}
      <Route path="/sign-in-doctor" element={<SignInDoctor />} />
      <Route path="/otp-verification" element={<OTPVerification />} />
      <Route path="/doctor-registration" element={<DoctorRegistration />} />
      <Route path="/create-profile" element={<CreateProfile />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/patient-list" element={<PatientList />} />
      <Route path="/total-earnings" element={<TotalEarnings />} />
      <Route path="/appointment-request" element={<AppointmentRequest />} />
      <Route path="/audio-consultation" element={<AudioConsultation />} />
      <Route path="/video-consultation" element={<VideoConsultation />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/history-of-appointment" element={<HistoryOfAppointment />} />
      <Route path="/doctor-profile" element={< DoctorProfile/>} />
      <Route path="/reviews-and-rating" element={<ReviewsAndRating />} />
      <Route path="/privacy-policy" element={< PrivacyPolicy/>} />
      <Route path="/term-and-condition" element={< TermAndCondition/>} />
      <Route path="/logout-doctor" element={<Logout/>} />



      




      {/* patients */}
      <Route path="/sign-in-patient" element={<SignInPatient />} />
      <Route path="/patient-registration" element={<PatientRegistration />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile-and-reviews" element={<ProfileAndReviews />} />
      <Route path="/category-specification" element={<CategorySpecification />} />
      <Route path="/doctors-availability" element={<DoctorAvailability />} />
      <Route path="/book-appointment" element={<BookAppointment />} />
      <Route path="/voice-call" element={< VoiceCall/>} />
      <Route path="/video-call" element={<VideoCall />} />
      <Route path="/appointment-status-tracking" element={<AppointmentStatusTracking />} />
      <Route path="/rate-and-reviews" element={<RateAndReviews />} />
      <Route path="/appointmentHistory" element={<AppointmentHistory />} />
      <Route path="/request-product" element={<RequestProduct />} />
      <Route path="/payment-gateway-integration" element={<PaymentGatewayIntegration />} />
      <Route path="/customer-support" element={<CustomerSupport />} />
      <Route path="/faq's" element={<FAQ/>} />
      <Route path="/patient-privacy-policy" element={<PrivacyPolicyPatient/>} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions/>} />
      <Route path="/booking-success" element={<BookingSuccess />} />
      <Route path="/favourites-doctor" element={<FavouritesDoctor />} />
      <Route path="/logout-patient" element={<LogoutPatient/>} />


      {/* vendor */}
      <Route path="/confirm-booking" element={<ConfirmBooking />} />
      <Route path="/upload-certificate" element={<UploadCertificate />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/invoice-view" element={<InvoiceView />} />
      <Route path="/starter-page" element={<StarterPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registers" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/vender-profile" element={<VendoreProfile/>}/>
      <Route path="/login-vendor" element={<LoginVendor/>} />
      <Route path="/vendor-register" element={<VendorRegistration />} />
      <Route path="/forgot-password" element={<ForggotedForm />} />
      <Route path="/register" element={<SignupForm />} />
    </Routes>
  );
};
export default AllRoutes;
