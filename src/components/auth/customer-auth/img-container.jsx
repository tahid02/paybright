import React from 'react';

export function LeftImgContainer() {
  return (
    <>
      <div className="d-none d-sm-block d-lg-none">
        <div className="position-absolute end-0" style={{ top: '10%' }}>
          <div className="w-75 ms-auto">
            <img
              src="https://portal.paybright.com/static/media/plant.4a390000.png"
              alt=""
              className="w-100 "
            />
          </div>
        </div>
      </div>

      <div className="d-block d-sm-none">
        <div className="d-flex ">
          <div className="cycle w-50">
            <img
              src="https://portal.paybright.com/static/media/sporting-goods.9a8fe835.png"
              alt=""
              className="w-100"
            />
          </div>
          <div className="camera w-50">
            <div className="w-25 ms-auto">
              <img
                src="https://portal.paybright.com/static/media/electronics.22ab6569.png"
                alt=""
                className="w-100 "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function RightImgContainer() {
  return (
    <>
      <div className="position-relative">
        <img
          src="https://portal.paybright.com/static/media/login-light-blobs.f2d0252a.png"
          alt=""
          style={{ height: '80vh' }}
          className=" w-100"
        />
        <div
          className="position-absolute w-100"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
          }}
        >
          <div className="w-75 mx-auto">
            <img
              src="https://portal.paybright.com/static/media/login-shape.c056e360.png"
              alt=""
              className=" w-100"
            />
          </div>
        </div>
      </div>
    </>
  );
}
