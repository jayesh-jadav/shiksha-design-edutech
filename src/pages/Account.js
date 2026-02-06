import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
export default function Account() {
    const { session, signOut } = useAuth();
    const navigate = useNavigate();
    const handleSignOut = async () => {
        await signOut();
        navigate('/');
    };
    if (!session) {
        return (_jsx("div", { className: "min-h-screen flex items-center justify-center", children: _jsx("p", { children: "Loading..." }) }));
    }
    return (_jsxs("div", { className: "min-h-screen bg-secondary-50", children: [_jsx("nav", { className: "bg-white shadow-sm", children: _jsxs("div", { className: "max-w-7xl mx-auto px-8 py-6 flex justify-between items-center", children: [_jsx("h1", { className: "text-2xl font-bold text-primary-700", children: "Account Settings" }), _jsx("button", { onClick: () => navigate('/dashboard'), className: "px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition", children: "Back to Dashboard" })] }) }), _jsx("div", { className: "max-w-2xl mx-auto px-8 py-12", children: _jsxs("div", { className: "bg-white rounded-xl shadow-md p-8", children: [_jsx("h2", { className: "text-2xl font-bold text-secondary-900 mb-6", children: "Account Information" }), _jsxs("div", { className: "space-y-6", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-secondary-700 mb-2", children: "Email" }), _jsx("input", { type: "email", value: session.user.email || '', disabled: true, className: "w-full px-4 py-2 border border-secondary-300 rounded-lg bg-secondary-50 text-secondary-600" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-secondary-700 mb-2", children: "User ID" }), _jsx("input", { type: "text", value: session.user.id, disabled: true, className: "w-full px-4 py-2 border border-secondary-300 rounded-lg bg-secondary-50 text-secondary-600 font-mono text-sm" })] })] }), _jsx("div", { className: "mt-8 pt-8 border-t border-secondary-200", children: _jsx("button", { onClick: handleSignOut, className: "px-8 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition", children: "Sign Out" }) })] }) })] }));
}
