import React from 'react';

interface WaterProps { }

export const Water: React.FC<WaterProps> = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '20px',
                backgroundColor: '#f0f9ff',
                gap: '20px',
            }}
        >
            <div
                style={{
                    flex: '1 1 60%',
                    maxWidth: '600px',
                    fontSize: '16px',
                    lineHeight: '1.6',
                    color: '#2a2a2a',
                }}
            >
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px' }}>What is Water?</h1>
                <p>Water is the liquid that makes life on Earth possible. All living things, from tiny cyanobacteria to giant blue whales, need water to survive. Without water, life as we know it would not exist. And life exists wherever there is water.</p>

                <p>Water is made of tiny units called molecules, which are combinations of even smaller units called atoms. A molecule of water is made of two hydrogen atoms and one oxygen atom. The scientific formula for water is H2O.</p>

                <p>Water can be found in three physical states: liquid, solid (ice), or gas (steam or vapor). The molecules in all three states are constantly moving. The speed of this movement determines water’s physical state. In ice, the water molecules vibrate but basically stay in place. In liquid water, the molecules move more quickly but stay near each other. In vapor, the molecules move so quickly that they fly away in all directions.</p>

                <p>Heat causes water to change from one physical state to another. When ice is heated, the water molecules move faster and farther apart. This causes the ice to melt into liquid. When liquid water is heated, the molecules speed up even more. Molecules at the surface of the liquid begin to break loose and fly into the air. In this way the liquid evaporates, or becomes vapor.</p>

                <p>This process also works in reverse. Cooling temperatures slow down the molecules so that vapor turns back into liquid. Very cold temperatures turn liquid into ice.</p>

                <p>The Water Cycle</p>

                <p>Water on Earth is always moving. It moves from Earth’s surface into the atmosphere and then returns to the surface. This movement is called the water cycle.</p>

                <p>The Sun, air, and gravity work together to create the water cycle. Heat from the Sun causes water to evaporate from the surface of lakes, streams, oceans, and plants. The water vapor moves into the atmosphere. In the cool air high above the ground, the water vapor changes into droplets of water. Large groups of these droplets are called clouds. Gravity pulls the droplets back to Earth as rain. The rain falls into oceans and lakes, enters rivers, and seeps into the ground.</p>

                <p>Water is the most important liquid on Earth. It covers almost 75 percent of Earth’s surface in the form of oceans, rivers, and lakes. All plants and animals need water to live.</p>

                <p>People have many uses for water besides drinking. They use it for washing and cooking. They use it to irrigate crops and lawns, to clean streets, and to operate air-conditioning units and heating systems. They also use the power of flowing water to produce electricity.</p>

                <p>Water plays an essential part in the beliefs and rituals of religions and cultures throughout the world. New members are welcomed into Christianity with a baptism by water. Hindus believe the Ganges River is a goddess brought to Earth. Native Americans place great importance on water in many of their ceremonies.</p>

                <p>Life on earth descends from water, and water is the lifeblood of our planet. Existence, and prosperity of the mankind depends on access to safe water, and access to water has been the key of any sustainable civilization. All great civilizations have grown up, and thrived around water. Not only water is necessary for drinking and hygiene, indeed it is a base for agriculture, commerce, transportation, and even defense from the foes. The growth and evolution of human culture and civilization have had a strong relationship with water resources. Ancient civilizations, such as the Egyptians, Romans, Venetian Empire, and the Omayyad dynasty were all based upon sustainable water resources, which helped them to survive and thrive. The sustainability and development of past, and present human societies have been conditioned by advances in water science, and by their use through engineering and technology.</p>

                <p>Water was a fundamental element in the development of ancient Egyptian civilization, with the Nile River serving as the vital source that supported life in Egypt throughout the ages. The relationship between water and Egyptian civilization was extremely close, as the ancient Egyptians relied heavily on the Nile for agriculture, transportation, trade, and even in the construction of monumental projects.</p>

                <p>The Importance of Water in Egyptian Civilization</p>

                <p>The Nile River: The Nile River was the primary element that made ancient Egypt one of the oldest and greatest civilizations. The Nile was not just a river; it was the lifeblood of ancient Egyptians. It provided them with the water needed for drinking, agriculture, transportation, and trade, and its annual floods were one of the key factors that contributed to Egypt’s agricultural and economic success.</p>

                <p>Irrigation and Agriculture: Agriculture was the backbone of the Egyptian economy, and water from the Nile was a decisive factor in the success of this sector. During the annual flooding of the Nile, the river inundated the surrounding land, leaving behind a layer of nutrient-rich silt, which fertilized the soil. This enabled the Egyptians to cultivate crops such as wheat, barley, flax, fruits, and vegetables.</p>

                <p>Irrigation Systems: The ancient Egyptians developed advanced irrigation systems to harness water. They used canals, and water-lifting devices (such as the "sakia"), which were animal-powered wheels that lifted water from the Nile to irrigate the fields. They also built systems to distribute water across different lands to ensure widespread crop irrigation.</p>

                <p>Transportation and Trade: River transport via the Nile was the primary mode of transportation within ancient Egypt. The river helped connect various regions of the country and facilitated trade and transportation of goods, such as grain and raw materials. Egyptian ships could easily travel between the north and south of the country, and the Nile also linked Egypt to neighboring regions via the Mediterranean and the Red Sea.</p>

                <p>Water Storage and Preservation: To ensure a steady water supply during periods of drought, the ancient Egyptians developed methods to store water, such as building large reservoirs and water storage systems. They also created artificial lakes to hold water for use during times of lower Nile levels.</p>

                <p>Daily Life and Religious Rituals: Water was not only crucial for economic needs but also played a significant role in the spiritual and religious life of the ancient Egyptians. Purity and water were closely linked to religious rites, with Egyptians believing that water symbolized life and fertility. It was used for ritual purification before religious ceremonies, and temples often contained sacred water basins for purification.</p>

                <p>Geographical and Climatic Influences: Despite Egypt being largely desert, the Nile created a fertile environment along its banks. The contrast between the desert and the river helped the Egyptians maintain an ecological balance that enabled the rise of their civilization. The geography of the Nile Valley was conducive to farming, while also providing materials necessary for construction.</p>

                <p>Engineering Achievements Related to Water:</p>

                <p>Canals and Dams: The ancient Egyptians developed complex canal systems to channel water from the Nile to agricultural lands. They also built small dams to prevent excessive flooding, ensuring that the land remained irrigated without being inundated.</p>

                <p>Water Lifting Devices: The ancient Egyptians used water wheels, such as the "sakia", to raise water from the Nile to their agricultural fields. These were powered by animals, such as oxen and donkeys.</p>

                <p>Artificial Lakes: Artificial lakes were created to store water for irrigation purposes. These lakes helped ensure sustainable agriculture during dry periods.</p>
            </div>

            {/* Image Content */}
            <div
                style={{
                    flex: '1 1 35%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    flexDirection: 'column',
                }}
            >
                <img
                    src="/water.jpg"
                    alt="Water Cycle"
                    style={{
                        width: '100%',
                        maxWidth: '400px',
                        height: 'auto',
                        borderRadius: '10px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    }}
                />
                <img
                    src="/water.jpg"
                    alt="Water Cycle"
                    style={{
                        width: '100%',
                        maxWidth: '400px',
                        height: 'auto',
                        borderRadius: '10px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    }}
                />
                <img
                    src="/water.jpg" // Replace with the actual image path
                    alt="Water Cycle"
                    style={{
                        width: '100%',
                        maxWidth: '400px',
                        height: 'auto',
                        borderRadius: '10px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    }}
                />
                <img
                    src="/water.jpg" // Replace with the actual image path
                    alt="Water Cycle"
                    style={{
                        width: '100%',
                        maxWidth: '400px',
                        height: 'auto',
                        borderRadius: '10px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    }}
                />
                <img
                    src="/water.jpg" // Replace with the actual image path
                    alt="Water Cycle"
                    style={{
                        width: '100%',
                        maxWidth: '400px',
                        height: 'auto',
                        borderRadius: '10px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    }}
                />
                <img
                    src="/water.jpg"
                    alt="Water Cycle"
                    style={{
                        width: '100%',
                        maxWidth: '400px',
                        height: 'auto',
                        borderRadius: '10px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    }}
                />
                <img
                    src="/water.jpg" // Replace with the actual image path
                    alt="Water Cycle"
                    style={{
                        width: '100%',
                        maxWidth: '400px',
                        height: 'auto',
                        borderRadius: '10px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    }}
                />
            </div>
        </div>
    );
};
