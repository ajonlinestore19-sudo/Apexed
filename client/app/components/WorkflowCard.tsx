"use client";
import variants from "motion/react";
import { motion } from "framer-motion";
import { Database, MessageSquare, Mail, FileText } from "lucide-react";
import { useEffect, useState } from "react";

const steps = [
  { icon: <Database />, label: "Data Enters CRM" },
  { icon: <MessageSquare />, label: "AI Chatbot Engages" },
  { icon: <Mail />, label: "Automated Email Sent" },
  { icon: <FileText />, label: "Report Generated" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

function WorkflowItem({
  icon,
  label,
  active,
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
}) {
  return (
    <motion.div
      variants={item}
      className={`flex items-center gap-4 rounded-xl px-4 py-4 mb-4 border transition-all duration-500 ${
        active
          ? "border-brand-orange bg-brand-orange/10 shadow-[0_0_25px_rgba(249,115,22,0.4)]"
          : "border-zinc-800"
      }`}
    >
      <div className="text-brand-orange">{icon}</div>
      <span className="text-sm text-white">{label}</span>
    </motion.div>
  );
}

export default function WorkflowCard() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 shadow-soft"
    >
      <div className="mb-6 text-center text-xs tracking-widest text-zinc-400">
        WORKFLOW ENGINE V2.4
      </div>

      {steps.map((step, index) => (
        <WorkflowItem
          key={index}
          icon={step.icon}
          label={step.label}
          active={active === index}
        />
      ))}
    </motion.div>
  );
}
