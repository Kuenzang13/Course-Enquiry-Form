import { useState } from "react";
import EnquiryDetails from "./EnquiryDetails";

function CourseEnquiryForm() {
  const [formData, setFormData] = useState({
    studentName: "",
    email: "",
    phone: "",
    course: "",
    mode: ""
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div>
      <h1>Course Enquiry Form</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Student Name: </label>
          <input
            type="text"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <div>
          <label>Phone: </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <div>
          <label>Course Interested In: </label>
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          >
            <option value="">Select Course</option>
            <option value="BCA">BCA</option>
            <option value="MCA">MCA</option>
            <option value="BBA">BBA</option>
            <option value="MBA">MBA</option>
          </select>
        </div>

        <br />

        <div>
          <label>Preferred Mode: </label>
          <select
            name="mode"
            value={formData.mode}
            onChange={handleChange}
            required
          >
            <option value="">Select Mode</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>

        <br />

        <button type="submit">Submit Enquiry</button>
      </form>

      {submittedData && (
        <div>
          <h2>Thank you for your enquiry!</h2>
          <EnquiryDetails data={submittedData} />
        </div>
      )}
    </div>
  );
}

export default CourseEnquiryForm;