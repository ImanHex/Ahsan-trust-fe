import Footer from "components/common/Footer";
import Navbar from "components/common/Navbar";
import RegisterProductForm from "components/RegisterForm";
export function Register() {
  return (
    <div className="bg-blue-50">
      <Navbar/>
      <RegisterProductForm />
      <Footer/>
    </div>
  );
}
