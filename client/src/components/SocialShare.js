import React from 'react';
import { GrFacebook, GrLinkedin } from 'react-icons/gr';
import { FaTwitterSquare } from 'react-icons/fa';

const SocialShare = () => {
  return (
    <div style={{ marginTop: '50px' }}>
      <GrFacebook className="socialBtn" />
      <FaTwitterSquare className="socialBtn" />
      <GrLinkedin className="socialBtn" />
    </div>
  );
};

export default SocialShare;
