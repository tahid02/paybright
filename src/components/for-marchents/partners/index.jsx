import styles from './partners.module.css';
import { AiOutlineRight } from 'react-icons/ai';
const Partners = () => {
  return (
    <section style={{ backgroundColor: '#f2f2fa' }}>
      {/* <section className={`${styles.partnerContainer}  `}> */}
      <section className={`${styles.contentMargin}  `}>
        <div className="container-fluid">
          {/* <div className={`${styles.wrap}  `}> */}
          <div className="row g-2">
            <div className="col-xs-12 col-md-12 col-lg-12 col-xl-6 d-flex align-items-center">
              <div className="mx-auto ">
                <div className={`${styles.cardW} `}>
                  <div className={`${styles.card} mx-auto `}>
                    <h2 className={`${styles.h2} text-darkblue`}>
                      Our integration partners
                    </h2>
                    <p className={`${styles.p} text-darkblue `}>
                      We provide seamless in-store and e-commerce platform
                      integrations for a true omnichannel shopping experience.
                    </p>
                    <p
                      className={`${styles.p} text-lightblue `}
                      style={{ fontWeight: '600' }}
                    >
                      See our APIs
                      <span>
                        <AiOutlineRight />
                      </span>{' '}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-md-12 col-lg-12  col-xl-6 d-flex justify-content-center">
              <img
                src="https://www.datocms-assets.com/19671/1584670650-partner-logos.png?auto=format&dpr=0.42&w=1924"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
          {/* </div> */}
        </div>
      </section>
    </section>
  );
};

export default Partners;
// import styles from './partners.module.css';
// import { AiOutlineRight } from 'react-icons/ai';
// const Partners = () => {
//   return (
//     <section style={{ backgroundColor: '#f2f2fa' }}>
//       <section className={`${styles.partnerContainer}  `}>
//         {/*
//         <div className={` `}>
//           <div className={`  `}>
//             <div className="row g-3">

//             </div>

//           </div>
//         </div>
//       </div> */}
//         <div className={`${styles.wrap}  `}>
//           <div className="row ">
//             <div className="col-xs-12 col-md-12 col-lg-12 col-xl-6 d-flex justify-content-center align-items-center">
//               <div className={`${styles.cardW}  `}>
//                 <div className={`${styles.card}  `}>
//                   <h2 className={`${styles.h2} text-darkblue`}>
//                     Our integration partners
//                   </h2>
//                   <p className={`${styles.p} text-darkblue `}>
//                     We provide seamless in-store and e-commerce platform
//                     integrations for a true omnichannel shopping experience.
//                   </p>
//                   <p
//                     className={`${styles.p} text-lightblue `}
//                     style={{ fontWeight: '600' }}
//                   >
//                     See our APIs
//                     <span>
//                       <AiOutlineRight />
//                     </span>{' '}
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-xs-12 col-md-12 col-lg-12  col-xl-6 d-flex justify-content-center">
//               <img
//                 src="https://www.datocms-assets.com/19671/1584670650-partner-logos.png?auto=format&dpr=0.42&w=1924"
//                 alt=""
//                 className="img-fluid"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </section>
//   );
// };

// export default Partners;
