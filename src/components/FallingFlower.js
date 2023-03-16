import { ImgFlower } from "../assets";


function FallingFlower({ top, duration }) {
    return (
        <img
            src={ImgFlower}
            alt="Falling Flower"
            className="falling-flower absolute w-2"
            style={{
                top: top,
                left: Math.floor(Math.random() * 100) + "vw",
                // left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * duration}s`,
            }}
        />
    );
}

export default FallingFlower
