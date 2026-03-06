import { useIsmobileWidth } from '../../Helper';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';

export const Layout = () => {
  return (
    <>
      <Header />
      <Main />
      {useIsmobileWidth() ? <Footer /> : null}
    </>
  );
};
