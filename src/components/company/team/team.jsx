import ContainerMarginL from 'components/common/container-large-margin/containerL-margin';
import styles from './team.module.css';
import TeamCard from './team-card/team-card';

const Team = () => {
  return (
    <ContainerMarginL>
      <div className={`${styles.contW}   mx-auto`}>
        <div className="container-fluid">
          <div className="row row-cols-2 row-cols-md-4 row-cols-xl-6">
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
          </div>
        </div>
      </div>
    </ContainerMarginL>
  );
};

export default Team;
