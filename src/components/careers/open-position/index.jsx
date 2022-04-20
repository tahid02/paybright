import MyButton from 'components/common/button/my-button';

const OpenPosition = () => {
  return (
    <section className="pb-5" style={{}}>
      <div className="bg-white " style={{ height: '3rem' }}></div>
      <div
        className="container bg-lightblue position-relative "
        style={{ height: '40vh', borderRadius: '10px' }}
      >
        <img
          src="https://paybright.com/static/left-cropped-2bffa39bd0d098b235726044ff3e2eb9.png"
          alt=""
          className="img-fluid h-100"
          style={{ position: 'absolute', top: '0', left: '0' }}
        />
        <img
          src="https://paybright.com/static/right-cropped-52c9e70655292002dfa2fabe4ea04a23.png"
          alt=""
          className="img-fluid h-100"
          style={{ position: 'absolute', top: '0', right: '0' }}
        />
        <div
          className=""
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
          }}
        >
          <h2 className="text-center text-white">
            We’re now remote-first. And we’re hiring.
          </h2>
          <p className="text-center">
            <MyButton bgColor="white" textColor="lightblue">
              See open position now
            </MyButton>
          </p>
        </div>
      </div>
    </section>
  );
};

export default OpenPosition;
