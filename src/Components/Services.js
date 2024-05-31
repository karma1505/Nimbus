import React, { useState } from 'react';

const ServicesSkills = () => {
    const [activeIndex, setActiveIndex] = useState(0); // State to manage the active index

    // Function to toggle active state
    const toggleActive = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="services-skills-container">
            <div className='services-heading'>
                <h1>OUR SERVICES</h1>
            </div>
            <div className="services-content">
                <div className="services-buttons">
                    {services.map((service, index) => (
                        <button key={index} className={`services-button ${index === activeIndex ? 'active' : ''}`} onClick={() => toggleActive(index)}>{service.name}</button>
                    ))}
                </div>
                <div className="subitems-container">
                    {activeIndex !== null && (
                        <ul className="subitems">
                            {services[activeIndex].subitems.map((subitem, index) => (
                                <li key={index}>
                                    <span className="arrow">&#8594;</span> {subitem}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

// Sample services data
const services = [
    {
        name: 'Web development services',
        subitems: ['Website development', 'Corporate website', 'Landings and promo sites', 'E-commerce', 'Web applications development']
    },
    {
        name: 'Design services',
        subitems: ['Graphic Design', 'UI/UX Design', 'Logo Design']
    },
    {
        name: 'SEO Services',
        subitems: ['On-page SEO', 'Off-page SEO', 'SEO copywriting']
    },
    {
        name:'Advertisement Services',
        subitems : ['Google Ads','Facebook Ads']
    }
];

export default ServicesSkills;