import { Globe, BrainCircuit, MessageSquare, Megaphone, Bot, Workflow, Phone } from "lucide-react";

export interface Service {
    id: string;
    title: string;
    slug: string;
    description: string;
    iconName: string;
    color: string;
    textColor: string; // New field for contrast control
    howItWorks: {
        title: string;
        steps: string[];
    };
    useCase: {
        title: string;
        problem: string;
        solution: string;
        result: string;
    };
}

export const services: Service[] = [
    {
        id: "02",
        title: "AI Consulting & Strategy",
        slug: "ai-consulting-strategy",
        description: "We audit your business processes and identify high-impact AI opportunities.",
        iconName: "BrainCircuit",
        color: "bg-bond-lime",
        textColor: "text-bond-navy",
        howItWorks: {
            title: "The AI Audit",
            steps: ["Workflow Analysis", "Tool Selection", "Implementation Roadmap", "Team Training"]
        },
        useCase: {
            title: "Bloom Interio",
            problem: "Interior design firm struggling to handle initial client inquiries and qualify leads efficiently.",
            solution: "Implemented an AI strategy to categorize leads and automate initial responses based on project budget and type.",
            result: "30+ Hours Saved/Month | Higher Quality Consultations"
        }
    },
    {
        id: "01",
        title: "Web Design & Development",
        slug: "web-design-development",
        description: "High-performance, visually stunning websites that convert visitors into clients.",
        iconName: "Globe",
        color: "bg-bond-purple",
        textColor: "text-white",
        howItWorks: {
            title: "From Concept to Launch",
            steps: ["Discovery & Strategy", "UX/UI Design", "Development & SEO", "Launch & Optimization"]
        },
        useCase: {
            title: "The Rich Royals",
            problem: "A Forex institute with 30k followers on Instagram but no website. Manual payment processing via DM was unscalable.",
            solution: "Designed a premium, high-trust website with automated course enrollment and payment gateway integration.",
            result: "2x Revenue Increase | 100% Automated Enrolments"
        }
    },
    {
        id: "03",
        title: "WhatsApp Business Automation",
        slug: "whatsapp-automation",
        description: "Turn WhatsApp into a 24/7 sales and support machine.",
        iconName: "MessageSquare",
        color: "bg-bond-cyan",
        textColor: "text-bond-navy",
        howItWorks: {
            title: "Chatbot Architecture",
            steps: ["Flow Design", "API Integration", "Testing & Refinement", "Live Deployment"]
        },
        useCase: {
            title: "Elite Tours & Travels",
            problem: "Travel agency missing leads due to delayed responses on WhatsApp.",
            solution: "Deployed a WhatsApp bot to handle FAQs, send itinerary options, and book consultations instantly.",
            result: "Zero Missed Leads | 24/7 Response Time"
        }
    },
    {
        id: "04",
        title: "Digital Marketing",
        slug: "digital-marketing",
        description: "Data-driven campaigns that target your ideal customer profile with precision.",
        iconName: "Megaphone",
        color: "bg-bond-purple",
        textColor: "text-white",
        howItWorks: {
            title: "Growth Engine",
            steps: ["Market Research", "Ad Creative & Copy", "Campaign Setup", "Analytics & Scaling"]
        },
        useCase: {
            title: "Forex Trading Coach",
            problem: "Running ads but getting low-quality leads and high CPA (Cost Per Acquisition).",
            solution: "Refined ad targeting and landing page copy to attract serious students only.",
            result: "3x ROAS (Return on Ad Spend)"
        }
    },
    {
        id: "05",
        title: "AI Conversational Agents",
        slug: "ai-conversational-agents",
        description: "Deploy intelligent voice and text agents that handle complex customer interactions.",
        iconName: "Bot",
        color: "bg-bond-lime",
        textColor: "text-bond-navy",
        howItWorks: {
            title: "Agent Training",
            steps: ["Knowledge Base Setup", "Personality Design", "Integration", "Continuous Learning"]
        },
        useCase: {
            title: "Medical Clinic",
            problem: "Receptionist overwhelmed with appointment rescheduling calls.",
            solution: "Built a Voice AI agent to handle appointment management and common queries over the phone.",
            result: "45% Reduction in Admin Calls"
        }
    },
    {
        id: "06",
        title: "AI Automation Workflows",
        slug: "ai-automation-workflows",
        description: "Connect your apps (CRM, Email, Sheets) to put boring tasks on autopilot.",
        iconName: "Workflow",
        color: "bg-bond-cyan",
        textColor: "text-bond-navy",
        howItWorks: {
            title: "System Integration",
            steps: ["Process Mapping", "API Connection", "Logic Implementation", "Error Handling"]
        },
        useCase: {
            title: "E-commerce Brand",
            problem: "Manually copying order data to spreadsheet for inventory tracking.",
            solution: "Automated the flow from Shopify to Google Sheets/Airtable implicitly.",
            result: "100% Data Accuracy | 10h/Week Saved"
        }
    },
    {
        id: "07",
        title: "Voice AI Solutions",
        slug: "voice-ai-solutions",
        description: "Next-gen voice agents that sound human and solve problems over the phone.",
        iconName: "Phone",
        color: "bg-bond-lime",
        textColor: "text-bond-navy",
        howItWorks: {
            title: "Voice Design",
            steps: ["Scripting & Flow", "Voice Synthesis", "Telephony Setup", "Live Testing"]
        },
        useCase: {
            title: "Real Estate Agency",
            problem: "Agents wasting time calling dead leads.",
            solution: "Deployed a Voice AI to pre-qualify leads and book calls only with interested buyers.",
            result: "Agents Focused on Closing | 3x More Meetings"
        }
    }
];

export function getServiceBySlug(slug: string): Service | undefined {
    return services.find(service => service.slug === slug);
}
