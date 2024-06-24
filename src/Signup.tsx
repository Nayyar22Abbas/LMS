import React, { useState, ChangeEvent, FormEvent } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

interface FormData {
  studentUserName: string;
  firstName: string;
  lastName: string;
  studentId: string;
  className: string;
  studentCNIC: string;
  password: string;
  cardIssueDate: string;
  cardExpiryDate: string;
  studentPhoneNo: string;
}

export const Signup: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    studentUserName: '',
    firstName: '',
    lastName: '',
    studentId: '',
    className: '',
    studentCNIC: '',
    password: '',
    cardIssueDate: '',
    cardExpiryDate: '',
    studentPhoneNo: ''
  });

  const [errors, setErrors] = useState({
    studentUserName: '',
    firstName: '',
    lastName: '',
    studentId: '',
    className: '',
    studentCNIC: '',
    password: '',
    cardIssueDate: '',
    cardExpiryDate: '',
    studentPhoneNo: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let valid = true;
    let newErrors: any = {};

    if (formData.studentCNIC.length !== 14 || isNaN(Number(formData.studentCNIC))) {
      newErrors.studentCNIC = 'CNIC must be 14 digits long.';
      valid = false;
    }

    if (!/^[a-zA-Z]+$/.test(formData.firstName)) {
      newErrors.firstName = 'First name must contain only letters.';
      valid = false;
    }
    if (!/^[a-zA-Z]+$/.test(formData.lastName)) {
      newErrors.lastName = 'Last name must contain only letters.';
      valid = false;
    }

    if (formData.studentId.length < 4 || isNaN(Number(formData.studentId))) {
      newErrors.studentId = 'Student ID must be at least 4 digits long.';
      valid = false;
    }

    if (formData.studentPhoneNo.length !== 11 || isNaN(Number(formData.studentPhoneNo))) {
      newErrors.studentPhoneNo = 'Phone number must be 11 digits long.';
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      localStorage.setItem('formData', JSON.stringify(formData));
      alert('Form data saved!');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f8f9fa', padding: '20px' }}>
      <div style={{ backgroundColor: '#d3d3d3', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '500px' }}>
        <Form onSubmit={handleSubmit}>
          <h1 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '32px', color: '#007bff' }}>Registration Form</h1>
          <Form.Group style={{ marginBottom: '20px' }}>
            <Form.Label>Student User Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Student User Name"
              name="studentUserName"
              value={formData.studentUserName}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group style={{ marginBottom: '20px' }}>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              isInvalid={!!errors.firstName}
            />
            <Form.Control.Feedback type="invalid" style={{ color: 'red' }}>{errors.firstName}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group style={{ marginBottom: '20px' }}>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              isInvalid={!!errors.lastName}
            />
            <Form.Control.Feedback type="invalid" style={{ color: 'red' }}>{errors.lastName}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group style={{ marginBottom: '20px' }}>
            <Form.Label>Student ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Student ID"
              name="studentId"
              value={formData.studentId}
              onChange={handleChange}
              isInvalid={!!errors.studentId}
            />
            <Form.Control.Feedback type="invalid" style={{ color: 'red' }}>{errors.studentId}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group style={{ marginBottom: '20px' }}>
            <Form.Label>Class Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Class Name"
              name="className"
              value={formData.className}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group style={{ marginBottom: '20px' }}>
            <Form.Label>Student CNIC</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Student CNIC"
              name="studentCNIC"
              value={formData.studentCNIC}
              onChange={handleChange}
              isInvalid={!!errors.studentCNIC}
            />
            <Form.Control.Feedback type="invalid" style={{ color: 'red' }}>{errors.studentCNIC}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group style={{ marginBottom: '20px' }}>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group style={{ marginBottom: '20px' }}>
            <Form.Label>Card Issue Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter Card Issue Date"
              name="cardIssueDate"
              value={formData.cardIssueDate}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group style={{ marginBottom: '20px' }}>
            <Form.Label>Card Expiry Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter Card Expiry Date"
              name="cardExpiryDate"
              value={formData.cardExpiryDate}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group style={{ marginBottom: '20px' }}>
            <Form.Label>Student Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Student Phone Number"
              name="studentPhoneNo"
              value={formData.studentPhoneNo}
              onChange={handleChange}
              isInvalid={!!errors.studentPhoneNo}
            />
            <Form.Control.Feedback type="invalid" style={{ color: 'red' }}>{errors.studentPhoneNo}</Form.Control.Feedback>
          </Form.Group>
          <Button style={{ width: '100%', padding: '12px', backgroundColor: '#007bff', color: '#ffffff', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s', fontSize: '16px' }} type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

