// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { FaMapMarkerAlt, FaWhatsapp, FaShare, FaCalendar, FaUserTie } from 'react-icons/fa';

// export function Jobs() {
//   const [activeTab, setActiveTab] = useState('private');
//   const [jobsData, setJobsData] = useState([]);
//   const [filteredJobs, setFilteredJobs] = useState([]);
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [locationFilter, setLocationFilter] = useState('');
//   const [jobProfileFilter, setJobProfileFilter] = useState('');
//   // const [JobLink, setJobLink] = useState('');

//   const navigate = useNavigate();

//   const googleSheetUrls = {
//     government: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQwQv0QSfbhlGS2Pvo729YKsIG52TctoYV4_p-1wSVXePTU7R4EupdtbuGbkYeV_0KBRk5BD0bZ6Xkp/pub?gid=0&single=true&output=csv',
//     private: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQwQv0QSfbhlGS2Pvo729YKsIG52TctoYV4_p-1wSVXePTU7R4EupdtbuGbkYeV_0KBRk5BD0bZ6Xkp/pub?gid=717397891&single=true&output=csv',
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       const url = googleSheetUrls[activeTab];
//       const response = await fetch(url);
//       const csvText = await response.text();
//       const rows = csvText.split('\n');
//       const headers = rows[0].split(',').map(header => header.trim());

//       const data = rows.slice(1).map(row => {
//         const values = row.split(',');
//         const job = {};
//         headers.forEach((header, index) => {
//           job[header] = values[index]?.trim() || '';
//         });
//         return job;
//       });

//       const validJobs = data.filter(job => job['Job Title'])
//         .sort((a, b) => new Date(b['Start Date']) - new Date(a['Start Date']));

//       setJobsData(validJobs);
//       setFilteredJobs(validJobs);
//     };

//     fetchData();
//   }, [activeTab]);

//   const handleFilter = () => {
//     const filtered = jobsData.filter(job => {
//       const jobStartDate = new Date(job['Start Date']);
//       const jobEndDate = new Date(job['End Date']);
//       const filterStart = startDate ? new Date(startDate) : null;
//       const filterEnd = endDate ? new Date(endDate) : null;

//       const matchesDate =
//         (!filterStart || jobStartDate >= filterStart) &&
//         (!filterEnd || jobEndDate <= filterEnd);

//       const matchesLocation =
//         !locationFilter || job['Location']?.toLowerCase().includes(locationFilter.toLowerCase());

//       const matchesJobProfile =
//         !jobProfileFilter || job['Job Profile']?.toLowerCase().includes(jobProfileFilter.toLowerCase());

//       return matchesDate && matchesLocation && matchesJobProfile;
//     });

//     setFilteredJobs(filtered);
//   };

//   const shareOnWhatsApp = (job) => {
//     const message = `📢 *Job Alert!* 📢

// 🔹 *Job Title:* ${job['Job Title']}
// 🏢 *Company:* ${job['Organization/Company Name']}
// 📍 *Location:* ${job['Location'] || 'Not specified'}
// 📅 *Start Date:* ${job['Start Date']}
// ⏳ *End Date:* ${job['End Date']}

// 🔗 More Details: https://ajaydhurwe.tech/
// 📲 Download App: https://play.google.com/store/apps/details?id=com.ajaykumardhurwe.ajaydhurwe

// Apply now! ✅`;

//     const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
//     window.open(whatsappUrl, '_blank');
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-6">Jobs 📌</h1>

//       <div className="flex space-x-4 mb-4">
//         <button
//           className={`px-4 py-2 rounded ${activeTab === 'private' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
//           onClick={() => setActiveTab('private')}
//         >
//           🏢 It Companies Job List in 2025
//         </button>
//       </div>

//       <div className="flex flex-wrap gap-4 mb-4">
//         <label className="flex flex-col">
//           <span className="flex items-center space-x-2">
//             <FaMapMarkerAlt className="text-red-500" />
//             <span>Location:</span>
//           </span>
//           <select className="border rounded px-2 py-1" value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)}>
//             <option value="">All Locations</option>
//             {
//            [
//   'Bengaluru',
//   'Hyderabad',
//   'Mumbai',
//   'Pune',


//              'New Delhi',
//   'Noida',
//   'Ahmedabad',
//   'Bhopal',
//   'Bhubaneswar',
//   'Chandigarh',
//   'Chennai',
//   'Coimbatore',
//   'Dehradun',
//   'Goa',
//   'Gurgaon',
//   'Gwalior',
//   'Indore',
//   'Jaipur',
//   'Jalandhar',
//   'Kolkata',
//   'Lucknow',
//   'Madurai',
//   'Mysuru',
//   'Nagpur',
//   'Raipur',
//   'Rajkot',
//   'Renigunta',
//   'Surat',
//   'Tenkasi',
//   'Thiruvananthapuram',
//   'Trichy',
//   'Vadodara',
//   'Visakhapatnam'
// ]

// .map((loc, i) => (
//               <option key={i} value={loc}>{loc}</option>
//             ))}
//           </select>
//         </label>

//         <label className="flex flex-col">
//           <span>💼 Job Profile:</span>
//           <select className="border rounded px-2 py-1" value={jobProfileFilter} onChange={(e) => setJobProfileFilter(e.target.value)}>
//             <option value="">All Profiles</option>
//             {
//             // ['SDE', 'BDA', 'SWE', 'Intern', 'HR']
//             [
//               'Frontend Developer',
//   'Full Stack Developer',
//   'Mobile App Developer',

//   'Cloud Engineer',
//  'Data Analyst',
//   'Data Engineer',
//   'Data Scientist',
//   'AI Engineer',
//   'Agile Coach',
//   'Automation Test Engineer',
//   'Backend Developer',
//   'Blockchain Developer',
//   'Business Analyst',
//   'Business Intelligence Analyst',
//   'Cloud Solutions Architect',
//   'CI/CD Engineer',
//   'Computer Vision Engineer',
//   'CRM Developer',
//   'Cybersecurity Consultant',
//   'Database Administrator',
//   'Deep Learning Engineer',
//   'DevOps Engineer',
//   'ERP Consultant',
//   'Ethical Hacker',
//   'Game Developer',
//   'Information Security Manager',
//   'Infrastructure Engineer',
//   'Interaction Designer',
//   'IoT Developer',
//   'IT Auditor',
//   'IT Consultant',
//   'IT Support Specialist',
//   'Kubernetes Engineer',
//   'Machine Learning Engineer',
//   'Manual Tester',
//   'Network Engineer',
//   'NLP Engineer',
//   'Performance Tester',
//   'Pre-Sales Engineer',
//   'Product Designer',
//   'Product Manager',
//   'Project Manager',
//   'QA Engineer',
//   'Scrum Master',
//   'Security Analyst',
//   'Security Engineer',
//   'Security Tester',
//   'Site Reliability Engineer',
//   'SOC Analyst',
//   'Software Developer',
//   'System Administrator',
//   'Technical Writer',
//   'UI Designer',
//   'UX Designer',
//   'UX Researcher',
//   'Web Developer'
// ]

//             .map((profile, i) => (
//               <option key={i} value={profile}>{profile}</option>
//             ))}
//           </select>
//         </label>
//         <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={handleFilter}>🔍 Apply Filter</button>
//       </div>

//       <div className="border p-4 rounded shadow">
//         {filteredJobs.length > 0 ? (
//           <ul className="space-y-2">
//             {filteredJobs.map((job, index) => (
//               <li key={index} className="flex justify-between items-center p-3 bg-green-100 rounded shadow hover:bg-green-200">
//                 <div className="flex items-center space-x-4">
//                   <img src={job['Image Link']} alt={job['Job Title']} className="w-12 h-12 rounded-full border" />
//                   <div>
//                     <div className="text-lg font-medium">{job['Job Title']}</div>
//                     <div className="text-sm text-gray-600">{job['Description']}</div>
//                     <div className="text-sm text-gray-500">
//                       <div className="flex items-center space-x-1"><FaMapMarkerAlt className="text-orange-500" /> <span>{job['Location'] || 'Not specified'}</span></div>
//                       <div className="flex items-center space-x-1"> <span>🏢Company: {job['Organization/Company Name']}</span></div>
//        <button 
//   onClick={() => window.open(job['Job Link'], '_blank')}
//   className="bg-blue-500 text-white text-sm px-2 py-1 rounded hover:bg-blue-600 flex items-center gap-2"
// >
//   <FaShare />
//   {/* <FaWhatsapp /> */}
//   <span>Read More</span>
// </button>

//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex flex-col space-y-1 items-center">
//                   <button
//                     onClick={() => shareOnWhatsApp(job)}
//                     className="text-green-600 text-2xl"
//                     title="Share on WhatsApp"
//                   >
//                     <FaShare /> <FaWhatsapp />
//                   </button>
               

           
//                 </div>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <div className="flex flex-col items-center text-gray-500 mt-4">
//             <span className="text-4xl animate-spin">🔄</span>
//             <p className="mt-2 text-lg font-semibold">Searching Jobs</p>
//             <span className="text-3xl">🤔</span>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }




















import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaMapMarkerAlt, FaWhatsapp, FaShare, FaCalendar, FaUserTie } from 'react-icons/fa';

export function Jobs() {
  const [activeTab, setActiveTab] = useState('private');
  const [jobsData, setJobsData] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [jobProfileFilter, setJobProfileFilter] = useState('');

  const navigate = useNavigate();

  const googleSheetUrls = {
    government: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQwQv0QSfbhlGS2Pvo729YKsIG52TctoYV4_p-1wSVXePTU7R4EupdtbuGbkYeV_0KBRk5BD0bZ6Xkp/pub?gid=0&single=true&output=csv',
    private: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQwQv0QSfbhlGS2Pvo729YKsIG52TctoYV4_p-1wSVXePTU7R4EupdtbuGbkYeV_0KBRk5BD0bZ6Xkp/pub?gid=717397891&single=true&output=csv',
  };

  useEffect(() => {
    const fetchData = async () => {
      const url = googleSheetUrls[activeTab];
      const response = await fetch(url);
      const csvText = await response.text();
      const rows = csvText.split('\n');
      const headers = rows[0].split(',').map(header => header.trim());

      const data = rows.slice(1).map(row => {
        const values = row.split(',');
        const job = {};
        headers.forEach((header, index) => {
          job[header] = values[index]?.trim() || '';
        });
        return job;
      });

      const validJobs = data.filter(job => job['Job Title'])
        .sort((a, b) => new Date(b['Start Date']) - new Date(a['Start Date']));

      setJobsData(validJobs);
      setFilteredJobs(validJobs);
    };

    fetchData();
  }, [activeTab]);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//pl26845957.profitableratecpm.com/8b/43/58/8b4358898221501481e3f4a17941c967.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleFilter = () => {
    const filtered = jobsData.filter(job => {
      const jobStartDate = new Date(job['Start Date']);
      const jobEndDate = new Date(job['End Date']);
      const filterStart = startDate ? new Date(startDate) : null;
      const filterEnd = endDate ? new Date(endDate) : null;

      const matchesDate =
        (!filterStart || jobStartDate >= filterStart) &&
        (!filterEnd || jobEndDate <= filterEnd);

      const matchesLocation =
        !locationFilter || job['Location']?.toLowerCase().includes(locationFilter.toLowerCase());

      const matchesJobProfile =
        !jobProfileFilter || job['Job Profile']?.toLowerCase().includes(jobProfileFilter.toLowerCase());

      return matchesDate && matchesLocation && matchesJobProfile;
    });

    setFilteredJobs(filtered);
  };

  const shareOnWhatsApp = (job) => {
    const message = `📢 *Job Alert!* 📢

🔹 *Job Title:* ${job['Job Title']}
🏢 *Company:* ${job['Organization/Company Name']}
📍 *Location:* ${job['Location'] || 'Not specified'}
📅 *Start Date:* ${job['Start Date']}
⏳ *End Date:* ${job['End Date']}

🔗 More Details: https://ajaydhurwe.tech/
📲 Download App: https://play.google.com/store/apps/details?id=com.ajaykumardhurwe.ajaydhurwe

Apply now! ✅`;

    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Jobs 📌</h1>

      <div className="flex space-x-4 mb-4">
        <button
          className={`px-4 py-2 rounded ${activeTab === 'private' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setActiveTab('private')}
        >
          🏢 IT Companies Job List in 2025
        </button>
      </div>

      <div className="flex flex-wrap gap-4 mb-4">
        <label className="flex flex-col">
          <span className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-red-500" />
            <span>Location:</span>
          </span>
          <select className="border rounded px-2 py-1" value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)}>
            <option value="">All Locations</option>
            {[
              'Bengaluru', 'Hyderabad', 'Mumbai', 'Pune', 'New Delhi', 'Noida', 'Ahmedabad', 'Bhopal',
              'Bhubaneswar', 'Chandigarh', 'Chennai', 'Coimbatore', 'Dehradun', 'Goa', 'Gurgaon', 'Gwalior',
              'Indore', 'Jaipur', 'Jalandhar', 'Kolkata', 'Lucknow', 'Madurai', 'Mysuru', 'Nagpur', 'Raipur',
              'Rajkot', 'Renigunta', 'Surat', 'Tenkasi', 'Thiruvananthapuram', 'Trichy', 'Vadodara', 'Visakhapatnam'
            ].map((loc, i) => (
              <option key={i} value={loc}>{loc}</option>
            ))}
          </select>
        </label>

        <label className="flex flex-col">
          <span>💼 Job Profile:</span>
          <select className="border rounded px-2 py-1" value={jobProfileFilter} onChange={(e) => setJobProfileFilter(e.target.value)}>
            <option value="">All Profiles</option>
            {[
              'Frontend Developer', 'Full Stack Developer', 'Mobile App Developer', 'Cloud Engineer', 'Data Analyst',
              'Data Engineer', 'Data Scientist', 'AI Engineer', 'Agile Coach', 'Automation Test Engineer',
              'Backend Developer', 'Blockchain Developer', 'Business Analyst', 'Business Intelligence Analyst',
              'Cloud Solutions Architect', 'CI/CD Engineer', 'Computer Vision Engineer', 'CRM Developer',
              'Cybersecurity Consultant', 'Database Administrator', 'Deep Learning Engineer', 'DevOps Engineer',
              'ERP Consultant', 'Ethical Hacker', 'Game Developer', 'Information Security Manager', 'Infrastructure Engineer',
              'Interaction Designer', 'IoT Developer', 'IT Auditor', 'IT Consultant', 'IT Support Specialist',
              'Kubernetes Engineer', 'Machine Learning Engineer', 'Manual Tester', 'Network Engineer', 'NLP Engineer',
              'Performance Tester', 'Pre-Sales Engineer', 'Product Designer', 'Product Manager', 'Project Manager',
              'QA Engineer', 'Scrum Master', 'Security Analyst', 'Security Engineer', 'Security Tester',
              'Site Reliability Engineer', 'SOC Analyst', 'Software Developer', 'System Administrator',
              'Technical Writer', 'UI Designer', 'UX Designer', 'UX Researcher', 'Web Developer'
            ].map((profile, i) => (
              <option key={i} value={profile}>{profile}</option>
            ))}
          </select>
        </label>
        <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={handleFilter}>🔍 Apply Filter</button>
      </div>

      <div className="border p-4 rounded shadow">
        {filteredJobs.length > 0 ? (
          <ul className="space-y-2">
            {filteredJobs.map((job, index) => (
              <li key={index} className="flex justify-between items-center p-3 bg-green-100 rounded shadow hover:bg-green-200">
                <div className="flex items-center space-x-4">
                  <img src={job['Image Link']} alt={job['Job Title']} className="w-12 h-12 rounded-full border" />
                  <div>
                    <div className="text-lg font-medium">{job['Job Title']}</div>
                    <div className="text-sm text-gray-600">{job['Description']}</div>
                    <div className="text-sm text-gray-500">
                      <div className="flex items-center space-x-1"><FaMapMarkerAlt className="text-orange-500" /> <span>{job['Location'] || 'Not specified'}</span></div>
                      <div className="flex items-center space-x-1"> <span>🏢Company: {job['Organization/Company Name']}</span></div>
                      <button 
                        onClick={() => window.open(job['Job Link'], '_blank')}
                        className="bg-blue-500 text-white text-sm px-2 py-1 rounded hover:bg-blue-600 flex items-center gap-2 mt-1"
                      >
                        <FaShare />
                        <FaWhatsapp />
                        <span>Read More</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-y-1 items-center">
                  <button
                    onClick={() => shareOnWhatsApp(job)}
                    className="text-green-600 text-2xl"
                    title="Share on WhatsApp"
                  >
                    <FaShare /> <FaWhatsapp />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex flex-col items-center text-gray-500 mt-4">
            <span className="text-4xl animate-spin">🔄</span>
            <p className="mt-2 text-lg font-semibold">Searching Jobs</p>
            <span className="text-3xl">🤔</span>
          </div>
        )}
      </div>
    </div>
  );
}
