// variables.js
import { Code2 } from "lucide-react"; // Ensure the icon import is correct
import p1 from "../../assets/images/p1.png";
import p2 from "../../assets/images/p2.png";

import exp from "constants";

export const role = "Aspiring Software Engineer";
export const bio = "I’m a Software Engineer with hands-on experience in backend development, robotics, IoT, and scalable cloud infrastructure. I build robust systems that integrate hardware and software for real-world impact."
export const titles = [
  "Tech Enthusiast",
  "Robotics IoT Explorer",
  "DevOps Practitioner",
  "Microservices Architect",
];


export const intro ="Karthik"
export const greet = "Hi,I'm"

export const skills = `class Profile:
  def __init__(self):
    self.name = "Karthik"
    self.adaptable = True
    self.frequent_upgrade = True
    self.skills = {
            "Client-side": [
                "HTML5", "CSS3", "JavaScript (Basic)", 
                "Bootstrap"
            ],
            "Server-side & Programming": [
                "Python", "FastAPI", "Django (Basic)", "Pandas",
                "PostgreSQL", "API Integration", "API Gateway",
                "Blockchain (Basics)"
            ],
            "Robotics & IoT": [
                "Robotics Testing", "PLC", "Modbus", "Arduino",
                "IoT", "ASRS", "SCARA", "Automation"
            ],
            "DevOps & Backend Infrastructure": [
                "Microservices", "EC2", "RDS", "RabbitMQ", "MQTT",
                "Cloud Deployment", "Backend Development", 
                "System Monitoring"
            ],
            "Operating Systems": [
                "Linux", "Windows", "MacOS"
            ]
        }`;


export const skills1 = `class Profile:
def __init__(self):
    self.name = "Karthik"
    self.adaptable = True
    self.frequent_upgrade = True
    self.skills = {
  "Client-side": 
    [
        "HTML5",
        "CSS3",
        "JavaScript (Basic)",
        "Bootstrap"
    ],
  "Server-side & Programming": 
    [
        "Python",
        "FastAPI",
        "Django (Basic)",
        "Pandas",
        "PostgreSQL",
        "API Integration",
        "API Gateway",
        "Blockchain (Basics)"
    ],
  "Robotics & IoT": 
    [
        "Robotics Testing",
        "PLC",
        "Modbus",
        "Arduino",
        "IoT",
        "ASRS",
        "SCARA",
        "Robots Automation"
    ],
  "DevOps & Backend Infrastructure": 
    [
        "Microservices",
        "EC2",
        "RDS",
        "RabbitMQ",
        "MQTT",
        "Cloud Deployment",
        "Backend Development",
        "System Monitoring"
    ],
    "Operating Systems": 
    [
        "Linux",
        "Windows",
        "MacOS"
    ]
}`;



export const highlight_words_1 = "Precision"
export const highlight_words_2 = "adaptability"
export const highlight_words_3 = "Innovation"

export const linkedin_profile = "https://www.linkedin.com/in/Karthik04/"
export const drive_link = "https://drive.google.com/file/d/1zR0fEmcMHSUw_NYZBTUiyYEZOnjOKHS1/view?usp=drive_link"

export const location = "Bengaluru, India"
export const email = "Karthik042412@gmail.com"
export const phone = "+91  9952749512"
export const get_in_touch = "Feel free to reach out for any queries, collaboration opportunities, or projects you'd like to work on together. I'm always open to learning, connecting, and exploring new possibilities. Looking forward to hearing from you!"
export const degree="Bachelor of Engineering in Automobile"
export const university= "Anna University"
export const year  = "2016 - 2020"
  

export const education = [
    {
      degree: "Bachelor of Engineering in Automobile",
      school: "Anna University",
      mascot: "",
      year: "2016 - 2020",
      achievements: [],
      skills: [],
      description:
        "",
    }

  ];


export const experience = [
  {
    icon: Code2,
    title: "Software Engineer",
    company: "Leapmile Robotics",
    period: "Aug 2023 - Present",
    description: [
      "Designed, developed, and tested microservices using REST APIs with FastAPI, building scalable backend systems.",
      "Managed cloud infrastructure on Digital Ocean and AWS, including Linux-based droplets, EC2 instances, and RDS databases.",
      "Handled data transformation and migration using SQL across backend services.",
      "Led robotics testing and automation and integrated Arduino and PLC using Python, including sensor calibration for nano warehouse systems.",
      "Built a custom Python PLC library for Modbus communication, enhancing hardware-software reliability.",
      "Supported backend API development for a FlutterFlow mobile app, enabling real-time data transfer.",
      "Worked with RabbitMQ and MQTT for real-time, asynchronous messaging across microservices and IoT devices.",
      "Automated ASRS and SCARA robotic testing workflows with Python to ensure system stability.",
      "Collaborated with cross-functional teams to ensure seamless integration of hardware and software components."

    ],
  }, 
];



export const project = [
  {
    title: "Dynamic automated spare parts website",
    description:
      "Developed and deployed a user-friendly spare parts Freelance website",
    src: p1,
    link: "https://paramountautointegrals-cars.vercel.app",
    color: "#5196fd",
    githubLink: ""
  },
  {
    title: "Telegram bot for cryptocurrency price notiﬁcations",
    description:
      "Developed a Python-based Telegram bot for cryptocurrency price notiﬁcations, featuring real-time data retrieval from CoinMarketCap APIs and portfolio tracking. Deployed the solution on a cloud-based server using Amazon EC2 (Elastic Compute Cloud) for continuous, scalable availability",
    src: p2,
    link: "https://t.me/K4r7h1k04_bot",
    color: "#5196fd",
    githubLink: ""
  }
];


export const sentence_1 = "Take a look at my professional background, including the roles I've held and the skills I've gained.";
export const sentence_3 = "Take a look at my academic background, including the institutions I've attended and the degrees I've earned.";


export const sentence_2 = "Experience & Education"


