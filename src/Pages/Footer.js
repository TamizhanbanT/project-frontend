import React from 'react';
import './footer.css'; // Import the CSS file for styling

const Footer1 = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>Contact Us</h3>
            <p>
              Feel free to reach out to us for any questions or inquiries.
            </p>
            <p>Email: example@example.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
          <div className="col-md-6">
            {/* Additional footer content can be added here */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
