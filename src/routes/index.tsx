import { Route, Routes } from 'react-router-dom';
import { Home } from 'components/pages/Home';
import { LoginForm, RegisterForm } from 'components/organisms/Forum';
import DocList from '@/components/pages/patient/DocList';
import Profile from '@/components/pages/patient/profile';
export const AppRoutes = () => {
    return (
        <Routes>
            {/* <Route path="/" element={<LoginForm onSubmit={function (data: any): void {
                throw new Error('Function not implemented.');
            } } />} /> */}
            {/* <Route path="/" element={<RegisterForm onSubmit={function (data: any): void { */}
        
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/doctors" element={<DocList />} />
        <Route path="/login" element={<LoginForm onSubmit={function (data: any): void {
            throw new Error('Function not implemented.');
        } } />} />
        <Route path="/register" element={<RegisterForm onSubmit={function (data: any): void {
            throw new Error('Function not implemented.');
        } } />} />
        <Route path="/login" element={<LoginForm onSubmit={function (data: any): void {
            throw new Error('Function not implemented.');
        } } />} />
        
        </Routes>
    );
};
