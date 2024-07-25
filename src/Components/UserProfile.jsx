import React, { useState, useRef, useCallback } from 'react';
import Webcam from 'react-webcam';

const ImageUploader = () => {
  const [image, setImage] = useState(localStorage.getItem('userImage') || null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isImagePreviewOpen, setIsImagePreviewOpen] = useState(false);
  const webcamRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result;
        setImage(result);
        localStorage.setItem('userImage', result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCapture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
    localStorage.setItem('userImage', imageSrc);
    setIsCameraOpen(false);
  }, [webcamRef]);

  const handleImageClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleFileUploadClick = () => {
    setIsMenuOpen(false);
    fileInputRef.current.click();
  };

  const handleCameraClick = () => {
    setIsMenuOpen(false);
    setIsCameraOpen(true);
  };

  const handleImagePreviewClick = () => {
    setIsMenuOpen(false);
    setIsImagePreviewOpen(true);
  };

  const handleCancelCapture = () => {
    setIsCameraOpen(false);
  };

  const handleDeleteImage = () => {
    localStorage.removeItem('userImage');
    setImage(null);
    setIsMenuOpen(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div
        style={{ width: 150, height: 150, borderRadius: '50%', overflow: 'hidden', marginBottom: 20, position: 'relative', cursor: 'pointer' }}
        onClick={handleImageClick}
      >
        {image ? (
          <img src={image} alt="User" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <div style={{ width: '100%', height: '100%', backgroundColor: '#f0f0f0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <span>No Image</span>
          </div>
        )}
      </div>
      {isMenuOpen && (
        <div style={{ position: 'absolute', top: 180, display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', padding: '10px', zIndex: 1 }}>
          <button onClick={handleFileUploadClick} style={menuButtonStyle}> העלה תמונה מהמכשיר </button>
          <button onClick={handleCameraClick} style={menuButtonStyle}> פתח מצלמה </button>
          <button onClick={handleImagePreviewClick} style={menuButtonStyle}> הגדל תמונה </button>
          {image && (
            <button onClick={handleDeleteImage} style={{ ...menuButtonStyle, backgroundColor: '#dc3545' }}> הסר תמונה </button>
          )}
        </div>
      )}
      <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} style={{ display: 'none' }} />
      {isCameraOpen && (
        <div style={{ position: 'absolute', top: 180, display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', padding: '10px', zIndex: 1 }}>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={150}
            height={150}
            videoConstraints={{ facingMode: 'user' }}
          />
          <button onClick={handleCapture} style={menuButtonStyle}> צלם </button>
          <button onClick={handleCancelCapture} style={menuButtonStyle}> בטל  </button>
        </div>
      )}
      {isImagePreviewOpen && image && (
        <div onClick={() => setIsImagePreviewOpen(false)} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2 }}>
          <img src={image} alt="Preview" style={{ maxWidth: '90%', maxHeight: '90%' }} />
        </div>
      )}
    </div>
  );
};

const menuButtonStyle = {
  backgroundColor: '#007BFF',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  margin: '5px 0',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px'
};

export default ImageUploader;
