export default function NotFound() {
  return (
    <div style={{ padding: "4rem 2rem", textAlign: "center" }}>
      <h1 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "1rem" }}>
        찾을 수 없는 페이지입니다
      </h1>
      <a href="/" style={{ color: "var(--accent)", fontSize: "0.875rem" }}>
        ← 처음으로
      </a>
    </div>
  );
}
