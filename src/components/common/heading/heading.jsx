import ContainerLarge from '../container-large/container-l';
import styles from './heading.module.css';
// eslint-disable-next-line react/prop-types
const Heading = ({ children }) => {
  return (
    <ContainerLarge>
      <h1 className="h1Font text-center text-darkblue">{children}</h1>
    </ContainerLarge>
  );
};

export default Heading;
