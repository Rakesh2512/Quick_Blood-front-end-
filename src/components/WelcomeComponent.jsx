import React,{Component} from "react"
import {Link} from "react-router-dom"
import {Carousel} from "react-bootstrap"
import blood3 from "../images/donor.jpg"
import blood1 from "../images/reqeust.jpg"
import blood2 from "../images/blood-bank1.jpg"

class WelcomeComponent extends Component {
    render() {
        return (
            <>
              <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={blood1}
      alt="First slide"
    />
    <Carousel.Caption>
      <p>It Takesh Only an Hour Donate blood save lives! Read Blood Donation Facts</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={blood2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <p>You will get free refreshments after donation Donation of blood is safe and healthy</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </>
        )        
    }
}
export default WelcomeComponent