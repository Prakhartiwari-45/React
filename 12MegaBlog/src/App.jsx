import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Header, Footer } from "./components";
import authService from "./appWrite/auth";
import { login, logout } from "./store/authSlice";
import "./App.css";

function App() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        authService
            .getCurrentUser()
            .then((userData) => {
                if (userData) {
                    dispatch(login(userData));
                } else {
                    dispatch(logout());
                }
            })
            .catch(() => {
                dispatch(logout());
            })
            .finally(() => setLoading(false));
    }, [dispatch]);

    // if (loading) {
    //     return <h2>Loading...</h2>;
    // }

    return !loading?(
        <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
            <div className="w-full block">
                <Header />
                <main>
                    {/* <Outlet /> */}
                </main>
                <Footer />
            </div>
        </div>
    ):null
}

export default App;