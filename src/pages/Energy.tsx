import React from "react";

interface EnergyProps { }

export const Energy: React.FC<EnergyProps> = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "20px",
                backgroundColor: "#f0f9ff",
                gap: "20px",
            }}
        >
            <div
                style={{
                    flex: "1 1 60%",
                    maxWidth: "600px",
                    fontSize: "16px",
                    lineHeight: "1.6",
                    color: "#2a2a2a",
                }}
            >
                <h1
                    style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "10px" }}
                >
                    What is Energy?
                </h1>
                <p>
                    Energy is the ability to do work. Scientists define energy as the
                    ability to do work. Modern civilization is possible because people
                    have learned how to change energy from one form to another and then
                    use it to do work. People use energy for a variety of things, such as
                    to walk and bicycle, to move cars along roads and boats through water,
                    to cook food on stoves, to make ice in freezers, to light our homes
                    and offices, to manufacture products, and to send astronauts into
                    space. There are many forms of energy: Heat, Light, Motion,
                    Electrical, Chemical, Gravitational. Energy is the ability to do work.
                    Work means moving an object by some distance. For instance, moving
                    your hand requires energy.
                </p>

                <p>
                    Energy can be classified as either potential (stored) energy or
                    kinetic energy, which is the energy of movement. Some other types of
                    energy include heat energy and light energy. Most energy that fuels
                    life on Earth comes from the sun. These forms of energy can be grouped
                    into two general types of energy for doing work: Potential, or stored,
                    energy and Kinetic, or working, energy. Energy can be converted from
                    one form to another. For example, the food you eat contains chemical
                    energy, and your body stores this energy until you use it as kinetic
                    energy during work or play.
                </p>

                <p>
                    The stored chemical energy in coal or natural gas and the kinetic
                    energy of water flowing in rivers can be converted to electrical
                    energy, which can be converted to light and heat. Energy sources are
                    renewable or nonrenewable? There are many different sources of energy,
                    but they can all be divided into two categories: Renewable energy
                    sources and Nonrenewable energy sources.
                </p>

                <p>
                    Renewable and nonrenewable energy sources can be used as primary
                    energy sources to produce useful energy such as heat, or they can be
                    used to produce secondary energy sources such as electricity and
                    hydrogen.
                </p>
                <p>
                    Energy is the ability to do work, and it is one of the fundamental
                    elements that all human activities rely on. Since ancient times,
                    civilizations have attempted to harness available resources to produce
                    and use energy for daily life and for advancing their cultures. In
                    ancient Egypt, there was a close relationship between energy and the
                    development of civilization, both through the use of natural energy
                    sources and through technologies developed in various fields.
                </p>

                <p>Types of Energy in Ancient Egyptian Civilization</p>

                <p>
                    Human Energy: Human energy formed the core of ancient Egyptian
                    civilization. The workforce was heavily utilized in building the
                    pyramids and temples, as well as in agriculture and handicrafts. The
                    pharaohs depended largely on laborers and slaves to carry out
                    monumental projects.
                </p>

                <p>
                    Animal Energy: The use of animals, such as donkeys and oxen, was
                    widespread in ancient Egypt. Animals were used in agriculture, to pull
                    carts, and to carry heavy loads, which helped improve productivity and
                    the economy.
                </p>

                <p>
                    Water Energy: The ancient Egyptians harnessed water energy through the
                    Nile for irrigation and transportation. They also developed irrigation
                    systems to distribute the Nile’s water across fields for agriculture.
                    Additionally, there were water-driven machines like the "sakia" (water
                    wheels) that helped raise water from the river to irrigate fields.
                </p>

                <p>
                    Solar Energy: The sun was a primary source of energy in ancient Egypt,
                    particularly in agriculture. The Egyptian agricultural system relied
                    on the annual flooding of the Nile, which was triggered by rains in
                    the Ethiopian highlands. The dark surface of the water absorbed
                    sunlight, creating a favorable environment for agriculture. Egyptians
                    also benefited from sunlight in their architecture, using natural
                    light in temples and tombs and in the design of buildings.
                </p>

                <p>
                    Thermal Energy: The ancient Egyptians used fire and heat in many
                    activities such as cooking, heating homes, and in industry (e.g.,
                    pottery and metallurgy). They also used furnaces to melt metals such
                    as gold and copper.
                </p>

                <p>
                    Technological Developments Related to Energy: The ancient Egyptians
                    were remarkable engineers, developing many technologies based on
                    natural forces: The Pyramids and the Use of Energy: The pyramids are
                    perhaps the most prominent example of the use of human energy and
                    advanced engineering techniques in ancient Egypt. Building the
                    pyramids required extensive organization of labor and significant
                    resources, including human, animal, and water energy for transporting,
                    lifting, and cutting materials. The technology behind the pyramids
                    relied on an in-depth understanding of nature and the physical forces
                    at play, along with logistical organization and the use of locally
                    available materials.
                </p>
            </div>

            {/* Image Content */}
            <div
                style={{
                    flex: "1 1 35%",
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    flexDirection: "column",
                }}
            >
                <img
                    src="/energy.jpg"
                    alt="Water Cycle"
                    style={{
                        width: "100%",
                        maxWidth: "400px",
                        height: "auto",
                        borderRadius: "10px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    }}
                />
                <img
                    src="/energy.jpg" // Replace with the actual image path
                    alt="Water Cycle"
                    style={{
                        width: "100%",
                        maxWidth: "400px",
                        height: "auto",
                        borderRadius: "10px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    }}
                />
                <img
                    src="/energy.jpg" // Replace with the actual image path
                    alt="Water Cycle"
                    style={{
                        width: "100%",
                        maxWidth: "400px",
                        height: "auto",
                        borderRadius: "10px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    }}
                />
                <img
                    src="/energy.jpg" // Replace with the actual image path
                    alt="Water Cycle"
                    style={{
                        width: "100%",
                        maxWidth: "400px",
                        height: "auto",
                        borderRadius: "10px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    }}
                />
            </div>
        </div>
    );
};
