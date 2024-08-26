import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';

function Landing() {
  return (
    <>
    <div className='container-fluid mb-5 d-flex align-item-center' style={{height:'80vh'}}>
      <Row>
        <Col className='p-5' sm={12} md={6}>
        <h2>
        <i className="fa-brands fa-youtube fa-4x" style={{color:"#8a0512"}}></i>

          Media Player 2024</h2>
          <p style={{textAlign:'justify'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. A, cumque nobis explicabo voluptatibus alias doloribus, velit vitae praesentium earum hic totam quae. Labore, iure obcaecati. Corporis adipisci assumenda at quos.</p>
       <div className='d-grid'>
        <Link to={'/home'} className='btn btn-success'>Let's Go</Link>
       </div>
       
        </Col>
        <Col className='py-4' sm={12} md={6}>
        <img src="https://www.pngall.com/wp-content/uploads/5/Media-PNG-File-Download-Free.png" className='img-fluid rounded' alt="" />
        </Col>
      </Row>
      
    </div>
<div className='container-fluid mt-5'>
  <h2 className='my-3 text-center'>Features</h2>
  <div className='p-4 d-flex justify-content-around'>
  <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" height={'200px'} src="https://media.tenor.com/01fHdcawbZMAAAAi/youtube-new-post.gif" />
        <Card.Body>
          <Card.Title>Upload Youtube Videos</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
  

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" height={'200px'} src="https://cliply.co/wp-content/uploads/2020/02/372002880_GRAY_ROUNDNESS_PACK.gif" />
        <Card.Body>
          <Card.Title>Add Categories</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" height={'200px'} src="https://classroomclipart.com/images/gallery/Animations/History/roman-emperor-animated-gif.gif" />
        <Card.Body>
          <Card.Title>History</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

</div>
  </div> 

<div>
  <Row>

<Col sm={12} md={7}>
<h1 className='ms-3 '>Simple & Faster</h1>
<p className='ms-3' style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi deserunt assumenda voluptatum. Quod, ea eum. Odit, fuga? Corporis, doloremque enim commodi, voluptas sint, cupiditate incidunt excepturi ullam placeat quas pariatur.</p>
<p className='ms-3' style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi deserunt assumenda voluptatum. Quod, ea eum. Odit, fuga? Corporis, doloremque enim commodi, voluptas sint, cupiditate incidunt excepturi ullam placeat quas pariatur.</p>

</Col>
<Col sm={12} md={5}>
<iframe width="550" height="380" src="https://www.youtube.com/embed/w7ejDZ8SWv8" title="React JS Crash Course" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</Col>

  </Row>
</div>
   </>
  )
}

export default Landing