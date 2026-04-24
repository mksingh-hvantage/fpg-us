import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { ChevronLeft, ChevronRight, MessageCircle, X } from "lucide-react";
import ProcessLayout from "../components/ProcessLayout";
import { useOrder } from "../contexts/OrderContext";

interface Errors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  smsConsent?: string;
}

export default function ProcessContact() {

  const navigate = useNavigate();
  const { order, setContactInfo } = useOrder();

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  const [firstName,setFirstName] = useState(order.contactInfo.firstName);
  const [lastName,setLastName] = useState(order.contactInfo.lastName);
  const [email,setEmail] = useState(order.contactInfo.email);
  const [phone,setPhone] = useState(order.contactInfo.phone);

  const [smsConsent,setSmsConsent] = useState(order.contactInfo.smsConsent);

  const [showChat,setShowChat] = useState(false);

  const [errors,setErrors] = useState<Errors>({});

  const validateEmail = (value:string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const validateForm = () => {

    const newErrors:Errors = {};

    if(!firstName.trim()){
      newErrors.firstName = "First name is required";
    }

    if(!lastName.trim()){
      newErrors.lastName = "Last name is required";
    }

    if(!email.trim()){
      newErrors.email = "Email is required";
    }
    else if(!validateEmail(email)){
      newErrors.email = "Enter a valid email address";
    }

    if(!phone || phone.length < 10){
      newErrors.phone = "Please provide a valid phone number";
    }

    if(!smsConsent){
      newErrors.smsConsent = "Consent is required";
    }

    setErrors(newErrors);

    if(Object.keys(newErrors).length > 0){
      scrollToError(newErrors);
      return false;
    }

    return true;
  };

  const scrollToError = (err:Errors) => {

    if(err.firstName && firstNameRef.current){
      firstNameRef.current.scrollIntoView({behavior:"smooth",block:"center"});
      return;
    }

    if(err.lastName && lastNameRef.current){
      lastNameRef.current.scrollIntoView({behavior:"smooth",block:"center"});
      return;
    }

    if(err.email && emailRef.current){
      emailRef.current.scrollIntoView({behavior:"smooth",block:"center"});
      return;
    }

    if(err.phone && phoneRef.current){
      phoneRef.current.scrollIntoView({behavior:"smooth",block:"center"});
      return;
    }

  };

  const handleNext = () => {

    if(validateForm()){
      setContactInfo({ firstName, lastName, email, phone, smsConsent });
      navigate("/process-company-address");
    }

  };

  const isFormValid =
    firstName.trim() &&
    lastName.trim() &&
    validateEmail(email) &&
    phone.length >= 10 &&
    smsConsent;

  return (

    <ProcessLayout progress={35} title="Contact Information">

          <div className="bg-white rounded-lg border border-gray-200 p-8">

              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>

              <div className="grid grid-cols-2 gap-4">

                {/* First Name */}

                <div>

                  <label className="text-sm font-semibold">
                    First Name
                  </label>

                  <input
                    ref={firstNameRef}
                    value={firstName}
                    onChange={(e)=>setFirstName(e.target.value)}
                    className={`w-full mt-2 px-4 py-3 border rounded-lg
                    ${errors.firstName ? "border-red-500" : "border-gray-300"}`}
                  />

                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.firstName}
                    </p>
                  )}

                </div>

                {/* Last Name */}

                <div>

                  <label className="text-sm font-semibold">
                    Last Name
                  </label>

                  <input
                    ref={lastNameRef}
                    value={lastName}
                    onChange={(e)=>setLastName(e.target.value)}
                    className={`w-full mt-2 px-4 py-3 border rounded-lg
                    ${errors.lastName ? "border-red-500" : "border-gray-300"}`}
                  />

                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.lastName}
                    </p>
                  )}

                </div>

                {/* Email */}

                <div>

                  <label className="text-sm font-semibold">
                    Email Address
                  </label>

                  <input
                    ref={emailRef}
                    type="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value.toLowerCase())}
                    className={`w-full mt-2 px-4 py-3 border rounded-lg
                    ${errors.email ? "border-red-500" : "border-gray-300"}`}
                  />

                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email}
                    </p>
                  )}

                </div>

                {/* Phone */}

                <div ref={phoneRef}>

                  <label className="text-sm font-semibold">
                    Phone Number
                  </label>

                  <div className="mt-2">

                    <PhoneInput
                      country={"us"}
                      value={phone}
                      onChange={(value)=>setPhone(value)}
                      enableSearch
                      containerStyle={{width:"100%"}}
                      inputStyle={{
                        width:"100%",
                        height:"48px",
                        borderRadius:"8px",
                        border: errors.phone ? "1px solid #ef4444" : "1px solid #d1d5db",
                        paddingLeft:"48px"
                      }}
                    />

                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}

                  </div>

                </div>

              </div>

              {/* SMS */}

              <div className="mt-6">

                <div className="flex items-start gap-3">

                  <input
                    type="checkbox"
                    checked={smsConsent}
                    onChange={()=>setSmsConsent(!smsConsent)}
                    className="mt-1 w-4 h-4 accent-cyan-500"
                  />

                  <p className="text-sm text-gray-700">
                    I consent to receiving SMS text messages and phone calls regarding my order.
                  </p>

                </div>

                {errors.smsConsent && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.smsConsent}
                  </p>
                )}

              </div>

              {/* BUTTONS */}

              <div className="flex gap-4 mt-8 pt-6 border-t">

                <button
                  onClick={()=>navigate("/process-expedite")}
                  className="flex items-center gap-2 px-6 py-3 border rounded-lg"
                >
                  <ChevronLeft size={16}/>
                  Back
                </button>

                <button
                  onClick={handleNext}
                  disabled={!isFormValid}
                  className={`ml-auto flex items-center gap-2 px-6 py-3 rounded-lg text-white cursor-pointer
                  ${isFormValid ? "bg-cyan-600" : "bg-gray-400 cursor-not-allowed"}`}
                >
                  Next
                  <ChevronRight size={16}/>
                </button>

              </div>

            </div>

      {/* CHAT */}

      <button
        onClick={()=>setShowChat(!showChat)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg"
      >
        {showChat ? <X/> : <MessageCircle/>}
      </button>

    </ProcessLayout>
  );
}
