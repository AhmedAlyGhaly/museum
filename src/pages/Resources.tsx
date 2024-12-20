import React from 'react';

interface ResourcesProps { }

export const Resources: React.FC<ResourcesProps> = () => {
  const links = [
    "https://climatekids.nasa.gov/water-cycle/",
    "https://www.natgeokids.com/uk/discover/science/nature/water-cycle/",
    "https://parenting.firstcry.com/articles/water-cycle-for-kids-process-and-fun-facts/",
    "https://study.com/academy/lesson/wind-lesson-for-kids-facts-causes.html",
    "https://www.weatherwizkids.com/weather-wind.htm",
    "https://solarschools.net/knowledge-bank/energy/types",
    "https://www.thoughtco.com/main-energy-forms-and-examples-609254",
    "https://www.primaryhomeworkhelp.co.uk/egypt/farming.htm#:~:text=The%20most%20important%20crop%20was,%2C%20beans%2C%20cucumbers%20and%20lettuce.",
    "https://www.eia.gov/energyexplained/what-is-energy/",
    "https://study.com/academy/lesson/what-is-energy-lesson-for-kids.html"
  ];

  return (
    <ul>
      {
        links.map((link) => (
          <li key={link}>
            <a href={link}>{link}</a>
          </li>
        ))
      }
    </ul>
  );
};