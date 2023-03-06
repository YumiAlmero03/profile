import React from 'react';

export default function ApplicationLogo({ className }) {
    return (
        <div class="">
            <svg fill="currentColor" className={className + 'text-black stroke-black dark:stroke-white dark:text-white hover:text-blue-500'} viewBox="0 0 316 316" xmlns="http://www.w3.org/2000/svg">
                <polygon points="0,-119.784392 35.203749,-48.453804 113.921726,-37.015413 56.960863,18.507706 70.407499,96.907608 0,59.892196 -70.407499,96.907608 -56.960863,18.507706 -113.921726,-37.015413 -35.203749,-48.453804 0,-119.784392" transform="matrix(-.686792 0.726854-.726854-.686792 148.678204 163.848263)" stroke-width="0"/>
                <path d="" fill="none" stroke="#000221" stroke-width="10"/>
                <path d="M10.489031,0q0,0,0,300L150,300Q10.48903,0,10.489031,0Z" transform="matrix(1 0 0 0.960694 0.000002 5.8959)" fill="none" stroke-width="10"/>
                <path d="M150,300L290.196527,0l.685556,300" transform="matrix(1 0 0 0.960694 0.000002 5.8959)" fill="none" stroke-width="10"/>
                <path d="M286.083181,162.477148l-71.297989-2.74223" transform="matrix(1.524042 0 0 1-136.002784 2.056673)" fill="none" stroke-width="10"/>
            </svg>
            <center className="dark:text-white">Lailanie Almero</center> 
        </div>
    );
}
