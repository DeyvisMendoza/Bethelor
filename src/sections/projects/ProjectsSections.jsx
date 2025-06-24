import { useState } from "react";
import { projectSections } from "../../lib/dataProjects";
import { motion, AnimatePresence } from "framer-motion";
import "../projects/ProjectsSections.css";

const filters = [
  { label: "All Projects", value: "all" },
  { label: "Kitchen Remodeling", value: "kitchen" },
  { label: "Bathrooms", value: "bathroom" },
  { label: "Home Renovations", value: "renovations" },
  { label: "Additions", value: "additions" },
  { label: "Outdoor Spaces", value: "outdoor" },
  { label: "Interiors", value: "interiors" },
];

export default function ProjectsSections() {
  const [activeType, setActiveType] = useState("all");

  const filtered = projectSections.filter(
    (p) => activeType === "all" || p.type === activeType
  );

  return (
    <div className="project-section">
      <ul className="filters">
        {filters.map((f) => (
          <li
            key={f.value}
            className={f.value === activeType ? "active" : ""}
            onClick={() => setActiveType(f.value)}
          >
            {f.label}
          </li>
        ))}
      </ul>

      <div className="grid">
        <AnimatePresence>
          {filtered.map((project, index) => (
            <motion.div
              className="card"
              key={project.title + index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              layout
            >
              {project.image ? (
                <img src={project.image.src} alt={project.title} />
              ) : (
                <div className="placeholder" />
              )}
              <p className="category">{project.sub_title}</p>
              <p className="title">{project.title}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
