import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
   <>
   <div className='bg-light py-2 container-fluid mt-5'>
  <Row className='p-5'>
    <Col sm={12} md={5}>
    <h3>MediaPlayer 2024 </h3>
    <p style={{textAlign:'justify'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, aspernatur quae? Temporibus maxime sit velit, ab vitae nam cupiditate deleniti quae est consectetur minima iusto magnam eum eveniet alias fugiat?</p>
    <p style={{textAlign:'justify'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, aspernatur quae? Temporibus maxime sit velit, ab vitae nam cupiditate deleniti quae est consectetur minima iusto magnam eum eveniet alias fugiat?</p>

    </Col>
    <Col sm={12} md={2}>
    <h3>Links</h3>
<div className='d-flex flex-column'>
      <Link to={'/'}>Landing</Link>
      <Link to={'/home'}>Home</Link>

      <Link to={'/his'}>Watch History</Link>
  
</div>   
 </Col>
    <Col sm={12} md={5}>
    <h3>FeedBack</h3>
    <textarea name="" id="" className='form-control' style={{height:'150px'}}></textarea>
    <button className='btn btn-danger mt-3'>Send</button>
    </Col>
  </Row>
   </div>
   
   </>
  )
}

export default Footer