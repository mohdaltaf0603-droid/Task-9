import { ArrowUpRight } from "lucide-react";

function Button({ children, href = "#contact", variant = "primary" }) {
  return (
    <a className={`btn btn-${variant}`} href={href}>
      {children}
      <ArrowUpRight size={18} />
    </a>
  );
}

export default Button;