import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";

function Content() {
    return (
        <div className="container-fluid mt-3">
            <div className="row">
                <div className="col-1"></div>
                <div className="col-7">
                    <Carousel className="auto-slide">
                        <Carousel.Item>
                            <img height={350} width={800}
                                className="d-block"
                                src="https://xenticebucket21.s3.ap-south-1.amazonaws.com/adv/8OHYcD4EA5hpJqQgtQmNVfLrO0YXspuEDfseTmXX.png"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img height={350} width={800}
                                className="d-block"
                                src="https://xenticebucket21.s3.ap-south-1.amazonaws.com/adv/T8KFRAQZrEa0ptImqcxSlURKmEMp2rzggcARfhoD.png"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="col-3">
                    <Card>
                        <Card.Img height={350} 
                            variant="top"
                            src="https://xenticebucket21.s3.ap-south-1.amazonaws.com/adv/M2dhebuxJ100xVTDB0sKwbvlQYyG9POXRyEYz9rk.png"
                        />
                    </Card>
                </div>
                <div className="col-1"></div>
            </div>
        </div>
    );
}

export default Content;
