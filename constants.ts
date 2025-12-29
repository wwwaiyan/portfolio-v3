import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "Wai Yan Soe",
  title: "DevOps Engineer",
  contact: {
    phone: "06 2929 0678",
    email: "hello.waiyansoe@gmail.com",
    location: "Bangkok, Thailand"
  },
  links: [
    { platform: "Portfolio", url: "https://waiyansoe.vercel.app", icon: "Globe" },
    { platform: "GitHub", url: "https://github.com/wwwaiyan", icon: "Github" },
    { platform: "LinkedIn", url: "https://linkedin.com/in/waiyansoe", icon: "Linkedin" },
    { platform: "Medium", url: "https://medium.com/@wwwaiyan", icon: "BookOpen" },
    { platform: "Credly", url: "https://credly.com/users/waiyansoe", icon: "Award" },
  ],
  experience: [
    {
      company: "Yoma Fleet Co.,Ltd",
      role: "DevOps Engineer",
      period: "Sep 2024 – Present",
      location: "Yangon, Myanmar | Remote",
      description: [
        "Maintained and optimized microservices architecture to enhance scalability and deployment flexibility.",
        "Provisioned secure infrastructure using Terraform/Terraform Cloud with private custom modules for AWS.",
        "Built containerized workloads on Amazon ECS, integrated with API Gateway and Lambda.",
        "Implemented DevSecOps practices using SonarQube, Snyk, Trivy, and AWS Security Hub.",
        "Deployed monitoring solutions including Grafana Cloud and Sentry for real-time observability."
      ]
    },
    {
      company: "HQS Co.,Ltd | QSlogic",
      role: "DevOps Engineer",
      period: "Nov 2022 – Aug 2024",
      location: "Yangon, Myanmar",
      description: [
        "Streamlined CI/CD pipelines using Jenkins and Bitbucket Pipelines.",
        "Containerized applications (Node.js, Java, Python) for AWS EC2 and on-prem VMs.",
        "Managed Nginx reverse proxies and PostgreSQL High Availability with Patroni.",
        "Deployed ELK Stack for system monitoring and automated backups via Bash/Cron.",
        "Designed comprehensive system architecture diagrams for documentation."
      ]
    },
    {
      company: "ATG Systems Co., Ltd",
      role: "Infrastructure Support Engineer",
      period: "Apr 2021 – Oct 2022",
      location: "Yangon, Myanmar",
      description: [
        "Provided on-site customer support for network and system infrastructure.",
        "Monitored on-premise infrastructure including routers, switches, servers, and virtualization.",
        "Collaborated with technical teams for rapid issue resolution."
      ]
    },
    {
      company: "Myanmar Intel Essen Logistics",
      role: "Senior Operations Executive",
      period: "May 2016 – Feb 2021",
      location: "Yangon, Myanmar",
      description: [
        "Analyzed logistics operations to identify inefficiencies.",
        "Optimized transportation and warehouse processes for cost savings."
      ]
    }
  ],
  skills: [
    {
      category: "Cloud & IaC",
      items: ["AWS (VPC, ECS, Lambda, IAM)", "Terraform", "Terraform Cloud", "CloudFormation"]
    },
    {
      category: "Orchestration & Containers",
      items: ["Docker", "Kubernetes", "Amazon ECS", "Amazon EKS"]
    },
    {
      category: "CI/CD & DevSecOps",
      items: ["Jenkins", "GitHub Actions", "GitLab CI", "SonarQube", "Snyk", "Trivy", "Checkov"]
    },
    {
      category: "Observability",
      items: ["Grafana", "Prometheus", "AWS CloudWatch", "ELK Stack"]
    },
    {
      category: "Scripting & DB",
      items: ["Python", "Go (Learning)", "Bash", "PostgreSQL", "MongoDB"]
    }
  ],
  achievements: [
    {
      title: "CI/CD Pipeline Migration",
      category: "CI/CD",
      description: [
        "Migrated pipelines from Jenkins to Bitbucket Pipelines.",
        "Integrated Ansible for zero-touch deployments."
      ],
      metric: "-35% Build Time"
    },
    {
      title: "Infrastructure Security Hardening",
      category: "Security",
      description: [
        "Scanning with Prowler, Security Hub, and Checkov.",
        "Remediated 90% of reported vulnerabilities in IaC."
      ],
      metric: "85% Risk Reduction"
    },
    {
      title: "Observability Overhaul",
      category: "Observability",
      description: [
        "Developed custom Grafana dashboards for app logs.",
        "Integrated IoT hardware logs for real-time visibility."
      ],
      metric: "-50% Response Time"
    }
  ]
};