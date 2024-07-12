// pages/Page1.tsx

import Image from 'next/image';
import logo from '../images/pickup.png';

interface Page1Props {
    onNext: () => void; // Function to navigate to the next page
}

const Page1: React.FC<Page1Props> = ({ onNext }) => {
    return (
        <div>
          
            <Image src={logo} alt="Logo" width={1540} height={800} />
            <button className="button" >
          <span className="heart">&hearts;</span> Generate for me <span className="heart">&hearts;</span>
        </button>
        <button onClick={onNext}>Next</button>
        </div>
    );
};

export default Page1;
