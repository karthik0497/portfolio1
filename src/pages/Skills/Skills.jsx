import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Paintbrush, Database, Layout, Cpu, Cloud } from "lucide-react";
import {
  FaPython,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaFigma,
  FaAws,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiPostgresql,
  SiPycharm,
  SiVite,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";
import { MdAnimation, MdMoney, MdOutlineGames, MdSportsBar } from "react-icons/md";
import { FcWorkflow } from "react-icons/fc";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="h-full bg-white border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
    <CardContent className="p-6">
      <div className="flex items-center gap-4 mb-6">
        <div className={`p-3 rounded-xl bg-blue-50 ${color}`}>
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="bg-gray-50 text-gray-700 border-gray-200 py-2 px-3 hover:bg-white hover:text-blue-600 hover:border-blue-200 transition-colors"
          >
            <span className="mr-2 text-gray-500">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Backend Development",
      color: "text-blue-600",
      skills: [
        {
          name: "Python",
          icon: <FaPython className="w-4 h-4 text-[#3776AB]" />,
        },
        {
          name: "FastAPI",
          icon: <BsGrid1X2 className="w-4 h-4 text-[#009688]" />,
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="w-4 h-4 text-[#336791]" />,
        },
        {
          name: "Django (Basic)",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#092E20]" />,
        },
        {
          name: "REST APIs",
          icon: <BsGrid1X2 className="w-4 h-4 text-[#61DAFB]" />,
        },
      ],
    },
    {
      icon: Layout,
      title: "Robotics & Automation",
      color: "text-purple-600",
      skills: [
        {
          name: "ROS2",
          icon: <Cpu className="w-4 h-4 text-[#22314E]" />,
        },
        { name: "PLC Integration", icon: <FaFigma className="w-4 h-4 text-[#F24E1E]" /> },
        {
          name: "Modbus (RS485)",
          icon: <Layout className="w-4 h-4 text-[#5A67D8]" />,
        },
        {
          name: "PyPLC Library",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#3776AB]" />,
        },
        {
          name: "ASRS / SCARA",
          icon: <MdAnimation className="w-4 h-4 text-[#D69E2E]" />
        },
        {
          name: "Industrial IoT",
          icon: <BsGrid1X2 className="w-4 h-4 text-[#718096]" />,
        },
      ],
    },
    {
      icon: Database,
      title: "Infrastructure & DevOps",
      color: "text-green-600",
      skills: [
        { name: "Docker", icon: <FaDocker className="w-4 h-4 text-[#2496ED]" /> },
        { name: "Linux Administration", icon: <FaLinux className="w-4 h-4 text-[#FCC624]" /> },
        { name: "AWS (EC2/RDS)", icon: <FaAws className="w-4 h-4 text-[#FF9900]" /> },
        { name: "MQTT / RabbitMQ", icon: <Cloud className="w-4 h-4 text-[#FF6600]" /> },
        {
          name: "System Monitoring",
          icon: <SiVite className="w-4 h-4 text-[#E34F26]" />,
        },
      ],
    },
    {
      icon: Cpu,
      title: "Tools & Technologies",
      color: "text-pink-600",
      skills: [
        { name: "Git & GitHub", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
        {
          name: "Postman",
          icon: <TbBrandVscode className="w-4 h-4 text-[#FF6C37]" />,
        },
        { name: "Bash / SSH / tmux", icon: <FaLinux className="w-4 h-4 text-slate-700" /> },
        {
          name: "VS Code / PyCharm",
          icon: <SiPycharm className="w-4 h-4 text-[#21D789]" />,
        },
      ],
    },
    {
      icon: Paintbrush,
      title: "Client-Side (Support)",
      color: "text-yellow-600",
      skills: [
        {
          name: "HTML5 & CSS3",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#E34F26]" />,
        },
        {
          name: "JavaScript (Basic)",
          icon: <SiJavascript className="w-4 h-4 text-[#F7DF1E]" />,
        },
        {
          name: "Bootstrap",
          icon: <SiBootstrap className="w-4 h-4 text-[#7952B3]" />,
        },
      ],
    },
  ];

  return (
    <div className="py-32 bg-white" id="skills">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900">
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
