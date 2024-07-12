// pages/index.tsx
"use client";

import Link from 'next/link';
import { useState } from 'react';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';

type ActionType = 'next' | 'previous';

const HomePage: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<string>('Page1'); // Default to Page1

    const handleNavigation = (action: ActionType) => {
        switch (action) {
            case 'next':
                switch (currentPage) {
                    case 'Page1':
                        setCurrentPage('Page2');
                        break;
                    case 'Page2':
                        setCurrentPage('Page3');
                        break;
                    case 'Page3':
                        setCurrentPage('Page4');
                        break;
                    case 'Page4':
                        setCurrentPage('Page5');
                        break;
                    default:
                        break;
                }
                break;
            case 'previous':
                switch (currentPage) {
                    case 'Page2':
                        setCurrentPage('Page1');
                        break;
                    case 'Page3':
                        setCurrentPage('Page2');
                        break;
                    case 'Page4':
                        setCurrentPage('Page3');
                        break;
                    case 'Page5':
                        setCurrentPage('Page4');
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
    };

    return (
        <div style={{ paddingTop: '50px' }}>
            {/* Fixed Navigation Bar */}
            <nav style={{ position: 'fixed', top: 0, width: '100%', backgroundColor: '#f0f0f0', zIndex: 1000 }}>
                <ul style={{ display: 'flex', listStyleType: 'none', justifyContent: 'space-evenly', textDecoration: 'none', padding: 0 }}>
                    <li style={{ flex: '1' }}>
                        <Link 
                            href="#" 
                            onClick={() => handleNavigation('previous')} 
                            style={{ textDecoration: 'none', color: currentPage === 'Page1' ? '#ccc' : 'blue', pointerEvents: currentPage === 'Page1' ? 'none' : 'auto' }}
                        >
                            Previous Page
                        </Link>
                    </li>
                    <li style={{ flex: '1' }}>
                        <Link 
                            href="#" 
                            onClick={() => handleNavigation('next')} 
                            style={{ textDecoration: 'none', color: currentPage === 'Page5' ? '#ccc' : 'blue', pointerEvents: currentPage === 'Page5' ? 'none' : 'auto' }}
                        >
                            Next Page
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Render Current Page */}
            <div style={{ marginTop: '50px' }}>
                {/* Conditionally render all pages */}
                <div style={{ display: currentPage === 'Page1' ? 'block' : 'none' }}>
                    <Page1 onNext={() => handleNavigation('next')} />
                </div>
                <div style={{ display: currentPage === 'Page2' ? 'block' : 'none' }}>
                    <Page2 onNext={() => handleNavigation('next')} />
                </div>
                <div style={{ display: currentPage === 'Page3' ? 'block' : 'none' }}>
                    <Page3 onNext={() => handleNavigation('next')} />
                </div>
                <div style={{ display: currentPage === 'Page4' ? 'block' : 'none' }}>
                    <Page4 onNext={() => handleNavigation('next')} />
                </div>
                <div style={{ display: currentPage === 'Page5' ? 'block' : 'none' }}>
                    <Page5 onNext={() => handleNavigation('next')} />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
