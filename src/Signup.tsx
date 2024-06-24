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
export const Signup = () => {
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
    let errors: any = {};

    if (formData.studentCNIC.length !== 14 || isNaN(Number(formData.studentCNIC))) {
      errors.studentCNIC = 'CNIC must be 14 digits long.';
      valid = false;
    }

    if (!/^[a-zA-Z]+$/.test(formData.firstName)) {
      errors.firstName = 'First name must contain only letters.';
      valid = false;
    }
    if (!/^[a-zA-Z]+$/.test(formData.lastName)) {
      errors.lastName = 'Last name must contain only letters.';
      valid = false;
    }

    if (formData.studentId.length < 4 || isNaN(Number(formData.studentId))) {
      errors.studentId = 'Student ID must be at least 4 digits long.';
      valid = false;
    }

    if (formData.studentPhoneNo.length !== 11 || isNaN(Number(formData.studentPhoneNo))) {
      errors.studentPhoneNo = 'Phone number must be 11 digits long.';
      valid = false;
    }
    setErrors(errors);
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
    <div className="formsdiv" style={ {display: 'flex',
      justifyContent: 'space-between',
      gap: '20px',
      marginTop: '',marginLeft:'28%'}}>
      <div className="form" style={{ backgroundColor: '#D3D3D3', padding: '20px', borderRadius: '10px' }}>
        <Form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>Registration Form</h1>
          <Form.Group controlId="formGroupStudentUserName" style={{ marginBottom: '15px' }}>
            <Form.Label>Student User Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Student User Name"
              name="studentUserName"
              value={formData.studentUserName}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formGroupFirstName" style={{ marginBottom: '15px' }}>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              isInvalid={!!errors.firstName}
            />
            <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formGroupLastName" style={{ marginBottom: '15px' }}>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              isInvalid={!!errors.lastName}
            />
            <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formGroupStudentId" style={{ marginBottom: '15px' }}>
            <Form.Label>Student ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Student ID"
              name="studentId"
              value={formData.studentId}
              onChange={handleChange}
              isInvalid={!!errors.studentId}
            />
            <Form.Control.Feedback type="invalid">{errors.studentId}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formGroupClassName" style={{ marginBottom: '15px' }}>
            <Form.Label>Class Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Class Name"
              name="className"
              value={formData.className}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formGroupStudentCNIC" style={{ marginBottom: '15px' }}>
            <Form.Label>Student CNIC</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Student CNIC"
              name="studentCNIC"
              value={formData.studentCNIC}
              onChange={handleChange}
              isInvalid={!!errors.studentCNIC}
            />
            <Form.Control.Feedback type="invalid">{errors.studentCNIC}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formGroupPassword" style={{ marginBottom: '15px' }}>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formGroupCardIssueDate" style={{ marginBottom: '15px' }}>
            <Form.Label>Card Issue Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter Card Issue Date"
              name="cardIssueDate"
              value={formData.cardIssueDate}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formGroupCardExpiryDate" style={{ marginBottom: '15px' }}>
            <Form.Label>Card Expiry Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter Card Expiry Date"
              name="cardExpiryDate"
              value={formData.cardExpiryDate}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formGroupStudentPhoneNo" style={{ marginBottom: '15px' }}>
            <Form.Label>Student Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Student Phone Number"
              name="studentPhoneNo"
              value={formData.studentPhoneNo}
              onChange={handleChange}
              isInvalid={!!errors.studentPhoneNo}
            />
            <Form.Control.Feedback type="invalid">{errors.studentPhoneNo}</Form.Control.Feedback>
          </Form.Group>
          <Button style={{ marginTop: '20px', display: 'block', width: '40%', marginLeft: '20%' }} type="submit">Submit</Button>
        </Form>
      </div>
    </div>
  );
};
