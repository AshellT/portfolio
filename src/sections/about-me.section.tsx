import { useState } from 'react';
import { SectionTitle } from '../components/section-title.component';

const timeline = [
	{
		title: 'Experience',
		items: [
			{
				title: 'System Developer',
				place: 'Econet (Omnicontact)',
				timePeriod: 'January 2025',
				description: (
					<ul>
						<li>
							Designed and developed responsive, revenue-generating websites
							using modern frameworks (React.js, Node.js, Vite) to support
							business growth.
						</li>
						<li>
							Collaborated with product owners and stakeholders to transform
							business requirements into scalable web solutions.
						</li>
						<li>
							Integrated secure payment systems and APIs to enable seamless
							transactions and improve customer experience.
						</li>
					</ul>
				),
			},
			{
				title: 'HR System Developer',
				place: 'Econet (Omnicontact)',
				timePeriod: 'November 2023 – Dec 2024',
				description: (
					<ul>
						<li>
							Developed and styled web pages using HTML5, CSS3, and JavaScript,
							enhancing system performance for HR operations.
						</li>
						<li>
							Designed and managed databases (MySQL, PostgreSQL, and MongoDB) to
							support HR systems.
						</li>
						<li>
							Assisted in recruitment efforts and developed a Botpress Chatbot to
							streamline HR services.
						</li>
					</ul>
				),
			},
			{
				title: 'Technical Support (Part-Time)',
				place: 'Prometric',
				timePeriod: 'Jul 2023 – Dec 2023',
				description: (
					<ul>
						<li>
							Provided technical support for proctors during exam sessions,
							resolving network challenges and ensuring smooth operations.
						</li>
						<li>
							Troubleshot network-related issues to minimize disruptions during
							online assessments.
						</li>
					</ul>
				),
			},
			{
				title: 'Technical Support Assistant',
				place: 'Econet (Omnicontact)',
				timePeriod: 'March 2023 – October 2023',
				description: (
					<ul>
						<li>
							Provided first-line support for hardware, software, and networking
							issues across multiple departments.
						</li>
						<li>
							Installed and configured operating systems, applications, and
							company-approved software.
						</li>
						<li>
							Monitored server health and network traffic to prevent downtime and
							service interruptions.
						</li>
					</ul>
				),
			},
			{
				title: 'Technical Support Assistant',
				place: 'Liquid Intelligent Technologies',
				timePeriod: 'Feb 2022 – Dec 2022',
				description: (
					<ul>
						<li>
							Conducted routine maintenance and repairs on IT equipment, ensuring
							optimal performance and minimal downtime.
						</li>
						<li>
							Managed network security configurations for firewalls and monitored
							system performance.
						</li>
						<li>
							Improved functionality of internal web applications through
							JavaScript and jQuery.
						</li>
					</ul>
				),
			},
			{
				title: 'Technical Support Engineer',
				place: 'Shanghai Wicresoft Co., Ltd, China',
				timePeriod: 'Jul 2021 – Dec 2021',
				description: (
					<ul>
						<li>
							Provided technical support for a wide range of issues, including
							hardware/software troubleshooting, network configuration, and system
							diagnostics.
						</li>
						<li>
							Delivered efficient remote support using TeamViewer and AnyDesk,
							achieving a high resolution rate.
						</li>
						<li>
							Managed network troubleshooting tasks such as IP addressing, DNS,
							and DHCP configuration.
						</li>
						<li>
							Ensured smooth operation of installed software applications,
							performing regular updates and maintenance.
						</li>
					</ul>
				),
			},
		],
	},
	{
		title: 'Projects',
		items: [
			{
				title: 'Employee Management System',
				place: 'React.js, Node.js, MySQL',
				timePeriod: '2024',
				description: (
					<ul>
						<li>
							Developed a centralized system to streamline HR processes
							(onboarding, offboarding, data management) with enhanced role-based
							security controls.
						</li>
						<li>
							Implemented comprehensive role-based access control for secure data
							management.
						</li>
					</ul>
				),
			},
			{
				title: 'HR Chatbot',
				place: 'Botpress, JavaScript, APIs',
				timePeriod: '2024',
				description: (
					<ul>
						<li>
							Designed and deployed an HR chatbot using Botpress, improving
							employee engagement and reducing administrative workload.
						</li>
						<li>
							Automated common HR queries and provided 24/7 support to employees.
						</li>
					</ul>
				),
			},
			{
				title: 'School Management System (SMS)',
				place: 'React.js, Node.js, MongoDB',
				timePeriod: '2023',
				description: (
					<ul>
						<li>
							Built an LMS for training and upskilling customer representatives,
							enabling efficient course management and performance tracking.
						</li>
						<li>
							Integrated analytics dashboard for real-time progress monitoring.
						</li>
					</ul>
				),
			},
			{
				title: 'Performance Management System',
				place: 'React.js, Node.js, PostgreSQL',
				timePeriod: '2023',
				description: (
					<ul>
						<li>
							Implemented a real-time performance tracking tool, providing
							actionable insights to boost productivity and operations.
						</li>
						<li>
							Created visual dashboards for managers to monitor team performance.
						</li>
					</ul>
				),
			},
			{
				title: 'Recruitment Management System',
				place: 'React.js, Node.js, MySQL',
				timePeriod: '2023',
				description: (
					<ul>
						<li>
							Created a role-based recruitment platform for candidates,
							recruiters, and admins, streamlining hiring and enhancing the
							candidate experience.
						</li>
						<li>
							Automated application tracking and interview scheduling processes.
						</li>
					</ul>
				),
			},
			{
				title: 'Payroll Ticketing System',
				place: 'React.js, Node.js, MySQL',
				timePeriod: '2023',
				description: (
					<ul>
						<li>
							Automated payroll-related queries through a ticketing system,
							reducing response times and improving employee satisfaction.
						</li>
						<li>
							Implemented priority-based ticket routing and automated notifications.
						</li>
					</ul>
				),
			},
			{
				title: 'IS Reporting Tracker',
				place: 'React.js, Node.js, PostgreSQL',
				timePeriod: '2023',
				description: (
					<ul>
						<li>
							Built an incident and service reporting tracker with real-time
							dashboards to ensure transparency, timely escalations, and better
							decision-making.
						</li>
						<li>
							Integrated automated escalation workflows and SLA monitoring.
						</li>
					</ul>
				),
			},
			{
				title: 'Mining Company Website',
				place: 'React.js, Vite, Tailwind CSS',
				timePeriod: '2024',
				description: (
					<ul>
						<li>
							Designed and developed a modern mining company website with a
							responsive interface, showcasing services, projects, and investor
							relations.
						</li>
						<li>
							Optimized for SEO and mobile responsiveness with fast loading times.
						</li>
					</ul>
				),
			},
			{
				title: 'SHE Reporting Tracker Website',
				place: 'React.js, Node.js, MongoDB',
				timePeriod: '2024',
				description: (
					<ul>
						<li>
							Implemented a Safety, Health, and Environment (SHE) reporting system
							for incident tracking, compliance monitoring, and real-time reporting
							dashboards.
						</li>
						<li>
							Enabled automated compliance alerts and comprehensive audit trails.
						</li>
					</ul>
				),
			},
		],
	},
	{
		title: 'Education',
		items: [
			{
				title: 'Bachelor of Science in Computer Science and Technology',
				place: 'Liaoning Petrochemical University, China',
				timePeriod: '2017 – 2021',
				description: '',
			},
			{
				title: 'Advanced Level',
				place: 'Mutero High School, Gutu',
				timePeriod: '2014 – 2015',
				description: '',
			},
			{
				title: 'Ordinary Level',
				place: 'St Anthony`s High School, Masvingo',
				timePeriod: '2010 – 2013',
				description: '',
			},
		],
	},
	{
		title: 'Certifications',
		items: [
			{
				title: 'Certificate of Recognition',
				place: 'Econet (Omnicontact)',
				timePeriod: 'June 2023 – May 2024',
				description: 'Awarded for exceptional hard work and dedication.',
			},
			{
				title: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional Certificate',
				place: 'Oracle',
				timePeriod: '2025',
				description: '',
			},
			{
				title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate Certificate',
				place: 'Oracle',
				timePeriod: '2025',
				description: '',
			},
			{
				title: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate Certificate',
				place: 'Oracle',
				timePeriod: '2025',
				description: '',
			},
			{
				title: 'Oracle Data Platform 2025 Certified Foundations Associate Certificate',
				place: 'Oracle',
				timePeriod: '2025',
				description: '',
			},
			{
				title: 'Oracle Fusion AI Agent Studio Foundations Associate - Rel 1 Certificate',
				place: 'Oracle',
				timePeriod: '2025',
				description: '',
			},
			{
				title: 'Cisco Networking Academy Network Basics Certificate',
				place: 'Cisco',
				timePeriod: '',
				description: '',
			},
		],
	},
];

export const AboutMe = () => {
	const [showAllProjects, setShowAllProjects] = useState(false);
	const [showAllExperience, setShowAllExperience] = useState(false);
	const [showAllCertifications, setShowAllCertifications] = useState(false);

	const getDisplayedProjects = () => {
		const projectSection = timeline.find((section) => section.title === 'Projects');
		if (!projectSection) return [];
		return showAllProjects ? projectSection.items : projectSection.items.slice(0, 3);
	};

	const getDisplayedExperience = () => {
		const experienceSection = timeline.find((section) => section.title === 'Experience');
		if (!experienceSection) return [];
		return showAllExperience ? experienceSection.items : experienceSection.items.slice(0, 3);
	};

	const getDisplayedCertifications = () => {
		const certificationsSection = timeline.find((section) => section.title === 'Certifications');
		if (!certificationsSection) return [];
		return showAllCertifications ? certificationsSection.items : certificationsSection.items.slice(0, 3);
	};

	return (
		<section
			className='about-me container'
			id='about-me'
		>
			<div>
				<SectionTitle
					title='About'
					subTitle='ME'
				/>
			</div>
			<div>
				<div className='intro'>
					<p style={{ marginTop: '20px' }}>
						👋 Hey, I'm Ashell Tinotenda Gonese, a{' '}
						<strong>Full Stack Developer</strong>,{' '}
						<strong>System Architect</strong>,{' '}
						<strong>Technical Support Specialist</strong>, and{' '}
						<strong>AI Enthusiast</strong> — passionate and resourceful with{' '}
						<strong>three years of experience</strong> in delivering innovative,
						high-impact solutions.
					</p>
					<p>
						Driven by the desire to <strong>exceed expectations</strong> and make
						meaningful contributions to organizational success, I excel at
						transforming challenges into opportunities for growth through{' '}
						<strong>problem-solving</strong> and quickly mastering new skills.
					</p>
					<p>
						With a strong commitment to <strong>continuous improvement</strong>,
						I am eager to leverage my expertise and proactive mind-set to drive
						results, foster collaboration, and contribute to a forward-thinking
						team.
					</p>
					<div style={{ marginTop: '2rem' }}>
						<a
							href='/path-to-your-cv.pdf'
							target='_blank'
							rel='noopener noreferrer'
							style={{
								display: 'inline-block',
								padding: '0.75rem 2rem',
								background: 'rgb(var(--primary))',
								color: '#000',
								fontWeight: 'bold',
								borderRadius: '5px',
								textDecoration: 'none',
								transition: 'all 0.3s ease',
								letterSpacing: '0.05rem',
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.transform = 'translateY(-2px)';
								e.currentTarget.style.boxShadow =
									'0 5px 15px rgba(31, 195, 255, 0.4)';
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.transform = 'translateY(0)';
								e.currentTarget.style.boxShadow = 'none';
							}}
						>
							📄 Download My CV
						</a>
					</div>
				</div>
				<div>
				{timeline.map(({ items, title }, idx) => {
					let displayItems = items;
					if (title === 'Projects') {
						displayItems = getDisplayedProjects();
					} else if (title === 'Experience') {
						displayItems = getDisplayedExperience();
					} else if (title === 'Certifications') {
						displayItems = getDisplayedCertifications();
					}
					
					return (
						<div
							className='timeline'
							key={idx}
							style={{ marginBottom: idx < timeline.length - 1 ? '3rem' : '0' }}
						>
							<h1>{title}</h1>
							{displayItems.map(({ title, place, timePeriod, description }, idx) => (
								<div
									className='timeline-list'
									key={idx}
								>
									<div className='timeline-item'>
										<p className='designation'>{title}</p>
										<p className='place'>
											{place} | {timePeriod}
										</p>
										<div className='timeline-description'>{description}</div>
									</div>
								</div>
							))}
							{(title === 'Projects' || title === 'Experience' || title === 'Certifications') && timeline.find(s => s.title === title)?.items.length! > 3 && (
								<div style={{ 
									marginTop: '2rem', 
									marginLeft: '2rem',
									display: 'flex',
									justifyContent: 'center'
								}}>
									<button
									onClick={() => title === 'Projects' ? setShowAllProjects(!showAllProjects) : title === 'Experience' ? setShowAllExperience(!showAllExperience) : setShowAllCertifications(!showAllCertifications)}
										style={{
											padding: '0.75rem 2rem',
											background: 'transparent',
											color: 'rgb(var(--primary))',
											border: '2px solid rgb(var(--primary))',
											borderRadius: '5px',
											cursor: 'pointer',
											fontWeight: 'bold',
											fontSize: '1rem',
											letterSpacing: '0.05rem',
											transition: 'all 0.3s ease',
										}}
										onMouseEnter={(e) => {
											e.currentTarget.style.background = 'rgb(var(--primary))';
											e.currentTarget.style.color = '#000';
											e.currentTarget.style.transform = 'translateY(-2px)';
											e.currentTarget.style.boxShadow = '0 5px 15px rgba(31, 195, 255, 0.4)';
										}}
										onMouseLeave={(e) => {
											e.currentTarget.style.background = 'transparent';
											e.currentTarget.style.color = 'rgb(var(--primary))';
											e.currentTarget.style.transform = 'translateY(0)';
											e.currentTarget.style.boxShadow = 'none';
										}}
									>
										{title === 'Projects' 
										? (showAllProjects ? '← Show Less Projects' : 'View All Projects →')
										: title === 'Experience'
										? (showAllExperience ? '← Show Less Experience' : 'View All Experience →')
										: (showAllCertifications ? '← Show Less Certifications' : 'View All Certifications →')
									}
									</button>
								</div>
							)}
						</div>
				);
				})}
				</div>
			</div>
		</section>
	);
};
