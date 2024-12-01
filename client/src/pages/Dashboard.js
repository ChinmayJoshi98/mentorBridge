import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
   return (
       <div style={{ padding: '20px' }}>
           <h1>Welcome to MentorBridge</h1>
           <nav style={{ marginTop: '20px' }}>
               <ul>
                   <li><Link to="/course-selection">Go to Course Selection</Link></li>
                   {/* Add more links as needed */}
               </ul>
           </nav>
       </div>
   );
};

export default Dashboard;
