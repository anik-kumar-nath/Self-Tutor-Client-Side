import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {

    return (
        <div className='d-flex flex-column min-vh-100' >
            <Header></Header>
            <Outlet></Outlet>
            <div className='mt-auto'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;