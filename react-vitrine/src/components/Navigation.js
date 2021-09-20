import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
    <div className="navigation">
        <ul>
            <NavLink to="/" exact className="hover" activeClassName="nav-active">
                <li>Accueil</li>
            </NavLink>

            <li className="nav-portfolio">Porfolio
                <ul className="nav-projects">
                    <NavLink to="/project-1" className="hover" activeClassName="nav-active">
                        <li>irisimages</li>
                    </NavLink>
                    <NavLink to="/project-2" className="hover" activeClassName="nav-active">
                        <li>Studio Nawake</li>
                    </NavLink>
                    <NavLink to="/project-3" className="hover" activeClassName="nav-active">
                        <li>ZywaK</li>
                    </NavLink>
                    <NavLink to="/project-4" className="hover" activeClassName="nav-active">
                        <li>Iris Dev</li>
                    </NavLink>
                </ul>
            </li>

            <NavLink to="/contact" exact className="hover" activeClassName="nav-active">
                <li>Contact</li>
            </NavLink>
        </ul>
    </div>
    );
};

export default Navigation;