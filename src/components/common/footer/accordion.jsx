import styles from './accordion.module.css';
import Accordion from 'react-bootstrap/Accordion';
const FooterAccordion = () => {
  return (
    <section className={`${styles.footerAccordion} `}>
      <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header className="">
            {' '}
            <span className="text-darkblue h4">Company</span>{' '}
          </Accordion.Header>
          <Accordion.Body>
            <p className={`${styles.footerP} text-lightblue `}>About</p>
            <p className={`${styles.footerP} text-lightblue `}>Partnerships</p>
            <p className={`${styles.footerP} text-lightblue `}>Press</p>
            <p className={`${styles.footerP} text-lightblue `}>Careers</p>
            <p className={`${styles.footerP} text-lightblue `}>Blog</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            {' '}
            <span className="text-darkblue h4">Customers</span>{' '}
          </Accordion.Header>
          <Accordion.Body>
            <p className={`${styles.footerP} text-lightblue `}>Login</p>
            <p className={`${styles.footerP} text-lightblue `}>How it works</p>
            <p className={`${styles.footerP} text-lightblue `}>Help center</p>
            <p className={`${styles.footerP} text-lightblue `}>Contact</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            {' '}
            <span className="text-darkblue h4">Merchants</span>{' '}
          </Accordion.Header>
          <Accordion.Body>
            <p className={`${styles.footerP} text-lightblue `}>Enroll now</p>
            <p className={`${styles.footerP} text-lightblue `}>Get in touch</p>
            <p className={`${styles.footerP} text-lightblue `}>Resources</p>
            <p className={`${styles.footerP} text-lightblue `}>Merchants FAQ</p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
};

export default FooterAccordion;
