import {Routes, BrowserRouter, Route} from 'react-router-dom'
import Feed from '../pages/Feed'
import LoginPage from '../pages/Login'
import SignUp from '../pages/signUp'
import SignUpAddress from '../pages/signUpAddress'
import Restaurants from '../pages/Restaurants'
import Profile from '../pages/Profile'
import Cart from '../pages/Cart'


const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index path='/' element={<LoginPage/>}/>
                <Route path='/signUp' element={<SignUp/>}/>
                <Route path='/signUp/address' element={<SignUpAddress/>}/>
                <Route path='/feed' element={<Feed/>}/>
                <Route path='/feed/:restaurantId' element={<Restaurants/>}/>
                <Route path='profile' element={<Profile/>}/>
                <Route path='cart' element={<Cart/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router