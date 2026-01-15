// variables.js
import { Code2, PenTool, Database, Server, Smartphone, Cpu } from "lucide-react";
import p1 from "../../assets/images/p1.png";
import p2 from "../../assets/images/p2.png";

import ros2 from "../../assets/images/ros2.png";
import pythonResumePdf from "../../assets/KarthikB_PythonSoftwareEngineer_2026.pdf";
import roboticsResumePdf from "../../assets/KarthikB_RoboticsSoftwareEngineer_2026.pdf";

export const role = "Python Backend & Robotics Engineer";
export const bio = "I’m a Software Engineer with 3 years of production experience building scalable backend systems and robotics software. My expertise bridges the gap between high-performance APIs and industrial automation, integrating Python, ROS2, and IoT for real-world impact.";

export const titles = [
  "Python Backend Engineer",
  "Robotics Software Engineer",
  "IoT Solutions Architect",
  "DevOps Enthusiast",
];


export const intro = "Karthik"
export const greet = "Hi,I'm"

export const skills = `class Profile:
  def __init__(self):
    self.name = "Karthik B"
    self.role = "Python Backend & Robotics Engineer"
    self.learning = True
    self.skills = {
            "Backend & API": [
                "Python", "FastAPI", "Django (Basic)", 
                "REST API Design", "PostgreSQL", "SQL"
            ],
            "Robotics & Automation": [
                "ROS2", "Robotics Testing", "PLC Integration",
                "Modbus (RS485)", "PyPLC", "ASRS / SCARA",
                "Industrial Automation"
            ],
            "Infrastructure & DevOps": [
                "Docker", "Linux", "AWS (EC2)", "Nginx", 
                "MQTT", "RabbitMQ", "System Monitoring (Prometheus/Grafana)"
            ],
            "Tools & Client-Side": [
                "Git/GitHub", "Postman", "Linux CLI", "SSH", "tmux",
                "HTML5", "CSS3", "JavaScript (Basic)"
            ]
        }`;


export const skills1 = `class Profile:
def __init__(self):
    self.name = "Karthik B"
    self.skills = {
  "Backend": ["Python", "FastAPI", "PostgreSQL"],
  "Robotics": ["ROS2", "PLC", "Modbus", "ASRS"],
  "Infra": ["Docker", "Linux", "MQTT", "AWS"],
  "Tools": ["Git", "Postman", "Linux CLI"]
}`;



export const highlight_words_1 = "Scalability"
export const highlight_words_2 = "Automation"
export const highlight_words_3 = "Reliability"

export const linkedin_profile = "https://linkedin.com/in/karthik04"
export const github_profile = "https://github.com/karthik0497"
export const python_resume = pythonResumePdf;
export const robotics_resume = roboticsResumePdf;

export const location = "Bengaluru, India"
export const email = "karthik042412@gmail.com"
export const phone = "+91 9952749512"
export const get_in_touch = "Open to opportunities in Python Backend Engineering and Robotics Software. Feel free to reach out for collaborations or if you'd like to discuss scalable systems and automation."

export const degree = "Bachelor of Engineering - Automobile"
export const university = "Paavai College of Engineering"
export const year = "2016 - 2020"


export const education = [
  {
    degree: "Bachelor of Engineering - Automobile Engineering",
    school: "Paavai College of Engineering, Anna University",
    mascot: "🎓",
    year: "2016 - 2020",
    achievements: ["Percentage: 70%"],
    skills: [],
    description: "Specialized in Automobile Engineering.",
  }
];


export const experience = [
  {
    icon: Code2,
    title: "Software Engineer",
    company: "Leapmile Robotics",
    period: "Aug 2023 - Present",
    description: [
      "Designed and maintained scalable backend services and REST APIs using Python and FastAPI for production applications.",
      "Developed robotics software for ASRS, AMR, and SCARA systems, leading testing and automation workflows.",
      "Built the 'PyPLC' library for reliable Modbus (RS485) communication, integrating PLCs, Arduino, and industrial sensors.",
      "Managed on-premise Linux infrastructure using Docker, SSH, and tmux for stable production deployments.",
      "Implemented MQTT-based asynchronous communication for real-time data exchange between backend and robots.",
      "Monitored system health using Prometheus and Grafana, resolving infrastructure issues via Linux CLI tools.",
      "Collaborated with cross-functional teams to integrate backend APIs with mobile apps and operational dashboards."
    ],
  },
  {
    icon: Smartphone,
    title: "Web Development Intern",
    company: "BasketHunt Pvt Ltd",
    period: "Jan 2023 - July 2023",
    description: [
      "Implemented responsive web page designs using HTML, CSS, and JavaScript.",
      "Assisted senior developers in building and maintaining frontend pages for local business websites."
    ],
  },
  {
    icon: Server,
    title: "GPS Operations Partner",
    company: "BlackBuck Logistics",
    period: "2021 - 2022",
    description: [
      "Supported GPS-based fleet operations and system coordination for logistics management."
    ],
  }
];



export const project = [
  {
    title: "ROS 2 Publish–Subscribe Demo",
    description:
      "Created ROS 2 workspaces to demonstrate inter-node communication using rclpy/rclcpp. Validated node execution and messaging with ROS 2 CLI and rqt_graph.",
    src: ros2,
    link: "https://github.com/karthik0497/ros2_developments",
    color: "#22c55e", // Green for ROS
    githubLink: "https://github.com/karthik0497/ros2_developments"
  },
  {
    title: "Crypto Price Notification Bot",
    description:
      "Asynchronous Python Telegram bot for real-time crypto alerts and portfolio tracking. Uses CoinMarketCap API, PostgreSQL, and deployed on Docker/AWS.",
    src: p2,
    link: "https://t.me/Crypto_priceloop_bot",
    color: "#5196fd",
    githubLink: "https://github.com/karthik0497/telegram_crypto_notification_bot"
  },
  {
    title: "Spare Parts E-Commerce Site",
    description:
      "Designed and deployed a responsive commercial website for spare parts with frontend and backend integration.",
    src: p1, // Placeholder
    link: "https://paramountautointegrals-cars.vercel.app",
    color: "#eab308", // Yellow
    githubLink: ""
  }
];


export const sentence_1 = "Professional Journey";
export const sentence_3 = "Academic Background";


export const sentence_2 = "Experience & Education"
