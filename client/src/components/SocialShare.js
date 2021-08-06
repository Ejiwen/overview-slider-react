import React from 'react';
import { GrFacebook, GrLinkedin } from 'react-icons/gr';
import { FaTwitterSquare } from 'react-icons/fa';

const SocialShare = () => {
  const shareFb = () => {
    var params = 'menubar=no,toolbar=no,status=no,width=570,height=570';
    let shareUrl = `http://www.facebook.com/sharer/sharer.php?u=https://fec-overview.netlify.app/`;
    window.open(shareUrl, 'NewWindow', params);
  };

  const shareTwitter = () => {
    var text = encodeURIComponent('007LY team ... FEC');
    var user_id = 'ejiwen';
    var hash_tags = 'HackReactor_FEC';
    var url = 'https://fec-overview.netlify.app/';

    let shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}&via=${user_id}&hashtags=${hash_tags}`;

    var params = 'menubar=no,toolbar=no,status=no,width=570,height=570';
    window.open(shareUrl, 'NewWindow', params);
  };

  const shareLinkdin = () => {
    var params = 'menubar=no,toolbar=no,status=no,width=570,height=570';
    var url = 'https://fec-overview.netlify.app/';
    let shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;

    window.open(shareUrl, 'NewWindow', params);
  };

  return (
    <div style={{ marginTop: '50px' }}>
      <GrFacebook onClick={shareFb} className="socialBtn" />
      <FaTwitterSquare onClick={shareTwitter} className="socialBtn" />
      <GrLinkedin onClick={shareLinkdin} className="socialBtn" />
      <span>Hello</span>
    </div>
  );
};

export default SocialShare;
