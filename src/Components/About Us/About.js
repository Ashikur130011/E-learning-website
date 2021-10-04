
import React from 'react';
import { Card} from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
               /* ---------- About-banner --------- */
        <div className="body-background">
            <h1 className="mt-3 fw-bold text-primary">We share knowledge in the World</h1>
            <p className="fw-bold">Learning-Tech is where lifelong learners come to learn the skills they need, to land the jobs they want, to build the lives they deserve.</p>
            <div className="about my-5">
                <div style={{ width: '40%' }}>
                    <h2 className="fw-bold text-primary">Our Mission</h2>
                    <p>Our mission is to train the world’s workforce in the careers of the future. We partner with leading technology companies to learn how technology is transforming industries, and teach the critical tech skills that companies are looking for in their workforce. With our powerful and flexible digital education platform, even the busiest learners can prepare themselves to take on the most in-demand tech roles.</p>
                </div>
            <div>
                <img src="/about.jpg" alt="" />
            </div>
        </div>
            <div>
                <h1 className="fw-bold text-primary">Changing learning for the better</h1>
                <h6>Whether you want to learn or to share what you know, you’ve come to the right place. As a global destination for online learning, we connect people through knowledge.
                </h6>
            </div>
            
            {/*---------- About-cart ---------- */}
            <div className="about-banner m-5">
                <Card className="bg-primary text-white" style={{ width: '23rem' }}>
                  <Card.Body>
                    <Card.Title>Work with us</Card.Title>
                    <Card.Text>
                    At Udemy, we’re all learners and instructors. We live out our values every day to create a culture that is diverse, inclusive, and committed to helping employees thrive.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>Join our team</Card.Footer>
                </Card>
                  <Card className='bg-info' style={{ width: '23rem' }}>
                  <Card.Body>
                    <Card.Title>See our research</Card.Title>
                    <Card.Text>
                    We’re committed to changing the future of learning for the better. Dig into our original research to learn about the forces that are shaping the modern workplace.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>Join our team</Card.Footer>
                </Card>
                  <Card className="bg-success text-white" style={{ width: '23rem' }}>
                  <Card.Body>
                    <Card.Title>Read our blog</Card.Title>
                    <Card.Text>
                    Want to know what we’ve been up to lately? Check out the Udemy blog to get the scoop on the latest news, ideas and projects, and more.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>Join our team</Card.Footer>
                </Card>
              </div>
        </div>
    );
};

export default About;