import { Link, Outlet } from 'react-router-dom';
import * as S from './style';

function Layout() {
  return (
    <>
      <S.NavBar>
        <S.Ul>
          <li>
            {' '}
            <Link to='/'>Home</Link>{' '}
          </li>
          <li>
            <Link to='/signin'>로그인</Link>{' '}
          </li>
          <li>
            <Link to='/signup'>회원가입</Link>{' '}
          </li>
          <li>
            <Link to='/todo'>할일리스트</Link>{' '}
          </li>
        </S.Ul>
      </S.NavBar>
      <Outlet />
    </>
  );
}

export default Layout;
