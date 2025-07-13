import React from "react";

interface DownloadButtonProps {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  variant?: "primary" | "secondary" | "success" | "danger";
}

const variantStyles: Record<string, React.CSSProperties> = {
  primary: {
    backgroundColor: "#2563eb",
    color: "white",
  },
  secondary: {
    backgroundColor: "#f3f4f6",
    color: "#1f2937",
    border: "1px solid #d1d5db",
  },
  success: {
    backgroundColor: "#10b981",
    color: "white",
  },
  danger: {
    backgroundColor: "#ef4444",
    color: "white",
  },
};

export const DownloadButton: React.FC<DownloadButtonProps> = ({
  href,
  children,
  icon,
  style,
  className = "",
  variant = "primary",
}) => (
  <a
    href={href}
    download
    target="_blank"
    rel="noopener noreferrer"
    className={className}
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "0.5rem",
      padding: "0.75rem 1.5rem",
      borderRadius: "0.5rem",
      fontWeight: 500,
      textDecoration: "none",
      fontSize: "1rem",
      border: "none",
      cursor: "pointer",
      transition: "background-color 0.2s",
      ...variantStyles[variant],
      ...style,
    }}
  >
    {icon}
    {children}
  </a>
);

export default DownloadButton; 