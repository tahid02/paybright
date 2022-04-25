import { Carousel } from 'react-bootstrap';
import TrustedCard from './card/trusted-card';

const TrustCarousel = () => {
  return (
    <section className="container-fluid text-start">
      <Carousel
        className="text-dark "
        nextIcon={''}
        prevIcon={''}
        style={{ height: '50vh' }}
      >
        <Carousel.Item
          interval={1000}
          style={{ height: '50vh', position: 'relative' }}
        >
          <Carousel.Caption className="w-100  position-absolute start-0   text-start">
            <TrustedCard
              quote="Love, love, love how fast and easy it was to go through the application process."
              name="Joyce G"
            />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          interval={1000}
          style={{ height: '50vh', position: 'relative' }}
        >
          <Carousel.Caption className="w-100  position-absolute start-0  text-start">
            <TrustedCard
              quote={`"This is the future of flexible payment. The process was streamlined and very easy."`}
              name="Anthony A."
            />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          interval={1000}
          style={{ height: '50vh', position: 'relative' }}
        >
          <Carousel.Caption className="w-100 position-absolute start-0  text-start">
            <TrustedCard
              quote={`"This is the future of flexible payment. The process was streamlined and very easy."`}
              name="Anthony A."
            />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          interval={1000}
          style={{ height: '50vh', position: 'relative' }}
        >
          {' '}
          <Carousel.Caption className="w-100  position-absolute start-0  text-start">
            <TrustedCard
              quote="Very simple process! As easy as online shopping can get."
              name="Zoltan L."
            />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          interval={1000}
          style={{ height: '50vh', position: 'relative' }}
        >
          <Carousel.Caption className="w-100  position-absolute start-0  text-start">
            <TrustedCard
              quote="PayBright was so easy to use and has allowed me to slowly pay for my purchase as opposed to paying one lump sum! Thank you."
              name="zonathon w."
            />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default TrustCarousel;
