import React from 'react';
import Modal from 'react-bootstrap/Modal';

const VideoPlayer = ({ video, show, onHide }) => {
  if (!video) return <div>Loading...</div>;

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <Modal
      video={video}
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName="modal-100w modal-100h"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {video.snippet.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="embed-responsive embed-responsive-16by9">
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
          allowFullScreen="0"
        />
      </Modal.Body>
    </Modal>
  );
};

export default VideoPlayer;
