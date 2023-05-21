import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/main/home.page';
import HomeForumComponent from './pages/forum/home.page';
import NotLoggedPage from './pages/main/notLogged.page';
import ZetRulePage from './pages/zet/rules.page';
import ForumByUuidPage from './pages/forum/uuid.page';
import CreateForumPage from './pages/forum/create.page';
import AdminHomePage from './pages/admin/home.page';
import AdminUserPage from './pages/admin/user.page';
import AdminForumPage from './pages/admin/forum.page';
import OptionPage from './pages/main/options.page';
import DataHomePage from './pages/data/home.page';
import DataReport from './pages/data/report.page';
import ChatHistoryPage from './pages/history/chat/history.chat.page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/forum" element={<HomeForumComponent />} />
        <Route path="/forum/:uuid" element={<ForumByUuidPage />} />
        <Route path="/forum/create" element={<CreateForumPage />} />
        <Route path="/user/disconnected" element={<NotLoggedPage />} />
        <Route path="/zet/rules" element={<ZetRulePage />} />
        <Route path="/admin" element={<AdminHomePage />} />
        <Route path="/admin/user" element={<AdminUserPage />} />
        <Route path="/admin/forum" element={<AdminForumPage />} />
        <Route path="/options" element={<OptionPage />} />
        <Route path="/data" element={<DataHomePage />} />
        <Route path="/data/report" element={<DataReport />} />
        <Route path="/history/chat/:uuid" element={<ChatHistoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
