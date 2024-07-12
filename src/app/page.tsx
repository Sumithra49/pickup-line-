// // pages/index.tsx
"use client";
// import Link from 'next/link';
// import { useState } from 'react';
// import Page1 from './pages/Page1';
// import Page2 from './pages/Page2';
// import Page3 from './pages/Page3';
// import Page4 from './pages/Page4';
// import Page5 from './pages/Page5';

// const HomePage = () => {
//     const [currentPage, setCurrentPage] = useState('Page1'); // Default to Page1

//     const handleNavigation = (page: string) => {
//         setCurrentPage(page);
//     };

//     const goToNextPage = () => {
//         switch (currentPage) {
//             case 'Page1':
//                 setCurrentPage('Page2');
//                 break;
//             case 'Page2':
//                 setCurrentPage('Page3');
//                 break;
//             case 'Page3':
//                 setCurrentPage('Page4');
//                 break;
//             case 'Page4':
//                 setCurrentPage('Page5');
//                 break;
//             default:
//                 break;
//         }
//     };

//     return (
//         <div style={{ paddingTop: '50px' }}>
//             {/* Fixed Navigation Bar */}
//             <nav style={{ position: 'fixed', top: 0, width: '100%', backgroundColor: '#f0f0f0', zIndex: 1000 }}>
//                 <ul style={{ display: 'flex', listStyleType: 'none', justifyContent: 'space-evenly', textDecoration: 'none', padding: 0 }}>
//                     <li>
//                         <Link href="#" onClick={() => handleNavigation('Page1')} style={{ textDecoration: 'none', color: currentPage === 'Page1' ? 'blue' : 'black' }}>
//                             Page 1
//                         </Link>
//                     </li>
//                     <li>
//                         <Link href="#" onClick={() => handleNavigation('Page2')} style={{ textDecoration: 'none', color: currentPage === 'Page2' ? 'blue' : 'black' }}>
//                             Page 2
//                         </Link>
//                     </li>
//                     <li>
//                         <Link href="#" onClick={() => handleNavigation('Page3')} style={{ textDecoration: 'none', color: currentPage === 'Page3' ? 'blue' : 'black' }}>
//                             Page 3
//                         </Link>
//                     </li>
//                     <li>
//                         <Link href="#" onClick={() => handleNavigation('Page4')} style={{ textDecoration: 'none', color: currentPage === 'Page4' ? 'blue' : 'black' }}>
//                             Page 4
//                         </Link>
//                     </li>
//                     <li>
//                         <Link href="#" onClick={() => handleNavigation('Page5')} style={{ textDecoration: 'none', color: currentPage === 'Page5' ? 'blue' : 'black' }}>
//                             Page 5
//                         </Link>
//                     </li>
//                 </ul>
//             </nav>

//             {/* Render Current Page */}
//             <div style={{ marginTop: '50px' }}>
//                 {currentPage === 'Page1' && <Page1 onNext={goToNextPage} />}
//                 {currentPage === 'Page2' && <Page2 />}
//                 {currentPage === 'Page3' && <Page3 />}
//                 {currentPage === 'Page4' && <Page4 />}
//                 {currentPage === 'Page5' && <Page5 />}
//             </div>
//         </div>
//     );
// };

// export default HomePage;
// pages/index.tsx

import Link from 'next/link';
import { useState } from 'react';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';

const HomePage = () => {
    const [currentPage, setCurrentPage] = useState('Page1'); // Default to Page1

    const handleNavigation = (action: 'next' | 'previous') => {
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
                        <Link href="#" onClick={() => handleNavigation('previous')} style={{ textDecoration: 'none', color: currentPage === 'Page1' ? '#ccc' : 'blue', pointerEvents: currentPage === 'Page1' ? 'none' : 'auto' }}>
                            Previous Page
                        </Link>
                    </li>
                    <li style={{ flex: '1' }}>
                        <Link href="#" onClick={() => handleNavigation('next')} style={{ textDecoration: 'none', color: currentPage === 'Page5' ? '#ccc' : 'blue', pointerEvents: currentPage === 'Page5' ? 'none' : 'auto' }}>
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
                    <Page5 />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
