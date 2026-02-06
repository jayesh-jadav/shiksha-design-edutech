import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
export default function Dashboard() {
    const { session, signOut } = useAuth();
    const navigate = useNavigate();
    const handleSignOut = async () => {
        await signOut();
        navigate('/');
    };
    if (!session) {
        return (_jsx("div", { className: "min-h-screen flex items-center justify-center", children: _jsx("p", { children: "Loading..." }) }));
    }
    return (_jsxs("div", { className: "min-h-screen bg-secondary-50", children: [_jsx("nav", { className: "bg-white shadow-sm", children: _jsxs("div", { className: "max-w-7xl mx-auto px-8 py-6 flex justify-between items-center", children: [_jsx("h1", { className: "text-2xl font-bold text-primary-700", children: "Dashboard" }), _jsx("button", { onClick: handleSignOut, className: "px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition", children: "Sign Out" })] }) }), _jsxs("div", { className: "max-w-7xl mx-auto px-8 py-12", children: [_jsxs("div", { className: "bg-white rounded-xl shadow-md p-8 mb-8", children: [_jsx("h2", { className: "text-2xl font-bold text-secondary-900 mb-2", children: "Welcome back!" }), _jsxs("p", { className: "text-secondary-600", children: ["Signed in as: ", _jsx("span", { className: "font-medium", children: session.user.email })] })] }), _jsxs("div", { className: "grid md:grid-cols-3 gap-8", children: [_jsxs("div", { className: "bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition", children: [_jsx("h3", { className: "text-lg font-bold text-secondary-900 mb-4", children: "My Courses" }), _jsx("p", { className: "text-secondary-600 mb-4", children: "0 courses enrolled" }), _jsx("button", { className: "text-primary-600 hover:text-primary-700 font-medium", children: "Browse Courses \u2192" })] }), _jsxs("div", { className: "bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition", children: [_jsx("h3", { className: "text-lg font-bold text-secondary-900 mb-4", children: "Learning Progress" }), _jsx("p", { className: "text-secondary-600 mb-4", children: "0% overall" }), _jsx("button", { className: "text-primary-600 hover:text-primary-700 font-medium", children: "View Details \u2192" })] }), _jsxs("div", { className: "bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition", children: [_jsx("h3", { className: "text-lg font-bold text-secondary-900 mb-4", children: "Certificates" }), _jsx("p", { className: "text-secondary-600 mb-4", children: "0 earned" }), _jsx("button", { className: "text-primary-600 hover:text-primary-700 font-medium", children: "View Certificates \u2192" })] })] })] })] }));
}
