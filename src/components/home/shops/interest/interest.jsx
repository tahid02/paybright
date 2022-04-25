import { FilterContext } from 'pages/HomePage';
import { useContext } from 'react';
import { Form } from 'react-bootstrap';
import styles from './interes.module.css';

const Interest = () => {
  const { zeroInterest, setZeroInterest } = useContext(FilterContext);
  return (
    <section className="container-fluid position-relative d-flex justify-content-center justify-content-xl-start pt-3">
      <section className="w-100 container-fluid">
        <section className={`${styles.interest} ${styles.contentMargin} `}>
          <div className="w-75 d-inline-block">Show only 0% interest*</div>
          <div className="w-25 d-inline-block ">
            <Form className="d-flex">
              <Form.Check
                className="mb-0 ms-auto"
                type="switch"
                id="custom-switch"
                label=""
                onClick={() => setZeroInterest(!zeroInterest)}
              />
            </Form>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Interest;
