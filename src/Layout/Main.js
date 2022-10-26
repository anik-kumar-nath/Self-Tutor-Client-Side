import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {

    return (
        <div >
            <Header></Header>
            <Outlet></Outlet>
            <div className='pt-5'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;