function EnquiryDetails({ data }) {
  return (
    <div>
      <h2>Enquiry Details</h2>

      <p>Student Name: {data.studentName}</p>
      <p>Email: {data.email}</p>
      <p>Phone: {data.phone}</p>
      <p>Course: {data.course}</p>
      <p>Preferred Mode: {data.mode}</p>
    </div>
  );
}

export default EnquiryDetails;