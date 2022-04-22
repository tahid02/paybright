import Achievements from 'components/company/achievements/achievements';
import CompanyHeader from 'components/company/company-header/header';
import JoinOurTeam from 'components/company/join-team/join-team';
import Mission from 'components/company/mission/mission';
import Team from 'components/company/team/team';
import NavFooterLayout from 'layout/nav-footer-layout';

const CompanyPage = () => {
  return (
    <NavFooterLayout>
      <CompanyHeader />
      <Mission />
      <div style={{ height: '6.75rem' }}></div>
      <div style={{ height: '1.5rem' }}></div>
      <Team />
      <div style={{ height: '4.5rem' }}></div>
      <Achievements /> <div style={{ height: '3rem' }}></div>
      <JoinOurTeam />
    </NavFooterLayout>
  );
};

export default CompanyPage;
