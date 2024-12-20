import React from "react";

interface WindProps { }

export const Wind: React.FC<WindProps> = () => {
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
                    What is Wind?
                </h1>
                <p>
                    In a hurricane, it can reach speeds of more than 130 miles per hour. In a tornado, it can swirl at more than 200 miles per hour. What am I talking about? The wind! Wind is the movement of air caused by differences in air pressure.
                    What Causes Wind?
                    Did you know that warm air rises? That's why hot air balloons float up into the sky. When the sun shines, it heats up the air and rises into the sky, just like the warm air inside a hot air balloon to rise.
                </p>

                <p>
                    The wind blows because the sun heats land faster than it heats water, which causes changes in air pressure. Air pressure is a measure of how heavy a patch of air is and how much it pushes down on the earth. When hot air rises off the earth, it is exerting less pressure on the earth - that's low pressure air. Cold air is heavier, so it presses down on the earth with more force, and this is high pressure air. As low pressure (warm) air rises, high pressure (cooler) air will move to take over the space where the warm air was.
                </p>
                <h1
                    style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "10px" }}
                >
                    How is wind measured?
                </h1>

                <p>
                    Meteorologists use two main measurements to describe wind: direction and speed.
                    Wind Direction - Wind direction is described by using the direction that the wind came from. For example, a southerly wind would blow from the south to the north. Wind direction is measured a number of ways including weather vanes, flags, and windsocks.
                    Wind Speed - The speed of wind is measured in miles per hour or kilometers per hour. Scientists typically use a tool called an anemometer to measure the speed of the wind.
                </p>

                <h1
                    style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "10px" }}
                >
                    Interesting Facts about Wind
                </h1>
                <p>
                    The fastest winds on Earth occur inside tornadoes where wind speeds can reach 250 miles per hour.
                    Meteorologists use barometers to measure air pressure. Barometers can tell us if the air pressure is dropping or rising.
                    The wind has helped to shape the land through the process of erosion.
                    Other planets with atmospheres have winds. Neptune has the highest speed sustained winds in the solar system with wind speeds of 1,300 miles per hour.
                    The solar wind is a stream of charged particles that flows from the Sun.
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
                    src="/wind.jpg"
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
                    src="/wind.jpg"
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
                    src="/wind.jpg" // Replace with the actual image path
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
