function SectionTitle({ tag, title, description, center = false }) {
  return (
    <div className={`section-title ${center ? "text-center" : ""}`}>
      {tag && <span className="section-tag">{tag}</span>}

      <h2>{title}</h2>

      {description && <p>{description}</p>}
    </div>
  );
}

export default SectionTitle;