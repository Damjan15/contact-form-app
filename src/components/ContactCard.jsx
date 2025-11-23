import { useState } from "react";
import CheckboxInput from "./inputs/CheckboxInput";
import EmailInput from "./inputs/EmailInput";
import RadioInput from "./inputs/RadioInput";
import TextAreaInput from "./inputs/TextAreaInput";
import TextInput from "./inputs/TextInput";
import SuccessMessage from "./SuccessMessage";

const ContactCard = () => {
  // State Management
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    queryType: "",
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  // Validation Logic
  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    // First Name Validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = "This field is required";
      isValid = false;
    } else if (formData.firstName.length < 3) {
      newErrors.firstName = "First name must be at least 3 characters";
      isValid = false;
    } else if (formData.firstName.length > 20) {
      newErrors.first_name = "First name must be less than 20 characters";
      isValid = false;
    }

    // Last Name Validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = "This field is required";
      isValid = false;
    } else if (formData.lastName.length < 3) {
      newErrors.lastName = "Last name must be at least 3 characters";
      isValid = false;
    } else if (formData.lastName.length > 40) {
      newErrors.lastName = "Last name must be less than 40 characters";
      isValid = false;
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "This field is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Query Type Validation
    if (!formData.queryType) {
      newErrors.queryType = "Please select a query type";
      isValid = false;
    }

    // Message Validation
    if (!formData.message.trim()) {
      newErrors.message = "This field is required";
      isValid = false;
    }

    // Consent Validation
    if (!formData.consent) {
      newErrors.consent =
        "To submit this form, please consent to being contacted";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(false);

    if (validateForm()) {
      // Form is valid
      setIsSuccess(true);

      // Clear form data & clear errors
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        queryType: "",
        message: "",
        consent: false,
      });
      setErrors({});

      // Show success message
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  return (
    <div className="w-full bg-white rounded-xl p-6 md:p-12 md:max-w-[600px] xl:max-w-[750px]">
      {isSuccess && <SuccessMessage />}
      <div>
        <h1>Contact Us</h1>
      </div>

      <form
        className="flex flex-col space-y-6 mt-8"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
          <TextInput
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            error={errors.firstName}
            required
          />
          <TextInput
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            error={errors.lastName}
            required
          />
        </div>
        <div className="w-full">
          <EmailInput
            label="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            required
          />
        </div>
        <div className="w-full">
          <RadioInput
            onChange={handleChange}
            selectedValue={formData.queryType}
            error={errors.queryType}
            required
          />
        </div>
        <div className="w-full">
          <TextAreaInput
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            error={errors.message}
            required
          />
        </div>
        <div className="w-full">
          <CheckboxInput
            onChange={handleChange}
            checked={formData.consent}
            error={errors.consent}
          />
        </div>

        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default ContactCard;
