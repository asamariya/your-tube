import React from 'react';
import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
// import Loading from '../assets/loading.svg';

// import { Paper, Typography } from '@material-ui/core';

const VideoPlayer = ({ video, show, onHide }) => {
  if (!video) return <div>Loading...</div>;

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <Modal
      // {...
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
          allowfullscreen="0"
        />
      </Modal.Body>
    </Modal>

    // {/* <img src={Loading} alt="" /> */}
    // {/* <Paper elevation={6} style={{ height: '70%' }}>
    //         <iframe
    //           frameBorder="0"
    //           height="100%"
    //           width="100%"
    //           title="Video Player"
    //           src={videoSrc}
    //           allowfullscreen="0"
    //         />
    //       </Paper>
    //       <Paper elevation={6} style={{ padding: '15px' }}>
    //         <Typography variant="h4">
    //           {video.snippet.title} - {video.snippet.channelTitle}
    //         </Typography>
    //         <Typography variant="subtitle1">
    //           {video.snippet.channelTitle}
    //         </Typography>
    //         <Typography variant="subtitle2">{video.snippet.description}</Typography>
    //       </Paper> */}
    //     </React.Fragment>
  );
};

export default VideoPlayer;

// <!--Sky-->
// <a href="#" data-toggle="modal" data-target="#skyModal">
//   <div class="row thumbnail sky">

//     <div class="col-sm-6 thumbImg">
//       <img src="assets/images/bla.jpg" class="img-fluid" alt="">
//       <p>Cinematography by Abhishek Samariya</p>
//     </div>
//     <div class="col-sm-6 thumbTitle">
//       <h4>Isadoré - Sky</h4>
//     </div>
//   </div></a>

// <!--skyModal-->
// <div class="modal fade" id="skyModal" tabindex="-1" role="dialog" aria-labelledby="sky" aria-hidden="true">
//   <div class="modal-dialog" role="document">
//       <div class="modal-content">
//           <div class="modal-header">
//               <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                   <span aria-hidden="true">&times;</span>
//               </button>
//           </div>
//           <div class="modal-body">
//             <div class="embed-responsive embed-responsive-16by9">
//               <iframe src="https://player.vimeo.com/video/251249206" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
//               </div>
//           </div>
//       </div>
//   </div>
// </div><!--/skyModal-->
