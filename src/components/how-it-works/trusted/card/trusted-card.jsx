import styles from './trusted-card.module.css';

// eslint-disable-next-line react/prop-types
const TrustedCard = ({ cardPosition, quote, name }) => {
  return (
    <div className={`${styles[cardPosition] || styles.upperCard}  `}>
      {' '}
      <p className="text-darkblue" style={{ fontWeight: '500' }}>
        {quote}{' '}
      </p>
      <p className="text-darkblue">{name} </p>
    </div>
  );
};

export default TrustedCard;
