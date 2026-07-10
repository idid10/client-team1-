import { House } from "lucide-react";
import "./HomeButton.css";

function HomeButton() {
  return (
    <div className="home-button">
      <div className="home-button-content">
        <House size={24} color="white" strokeWidth={2.5} />
        <span>홈</span>
      </div>
    </div>
  );
}

export default HomeButton;