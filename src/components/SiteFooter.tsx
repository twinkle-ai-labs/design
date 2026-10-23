import StarMark from "@/components/StarMark";
import { CONTACT_EMAIL, HOME_URL, NAME, NAV_LINKS } from "@/lib/site";
import { STUDIO_APPS, STUDIO_SOCIALS } from "@/lib/studio";
import s from "./SiteFooter.module.css";

export default function SiteFooter() {
  return (
    <footer className={s.footer}>
      <div className={s.shell}>
        <div className={s.top}>
          <div className={s.brand}>
            <a href={HOME_URL} className={s.name}>
              <span className={s.symbol}>
                <StarMark gradientId="footer-brand" />
              </span>
              {NAME}
            </a>
            <p>필요한 도구를, 좋아하는 모습으로.</p>
            <span className={s.caption}>독립적으로 만들고, 직접 쓰며 다듬습니다.</span>
          </div>
          <nav className={s.column} aria-label="푸터 앱 목록">
            <h2>APPS</h2>
            {STUDIO_APPS.map((app) => (
              <a key={app.href} href={app.href}>
                {app.name}
              </a>
            ))}
          </nav>
          <nav className={s.column} aria-label="바닥글 메뉴">
            <h2>EXPLORE</h2>
            {NAV_LINKS.filter((link) => link.key !== "home").map((link) => (
              <a key={link.key} href={link.key === "design" ? "/" : link.href}>
                {link.label}
                <span aria-hidden="true">{link.key !== "design" && "↗"}</span>
              </a>
            ))}
          </nav>
          <div className={s.column}>
            <h2>LET’S TALK</h2>
            <a className={s.mail} href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
              <span aria-hidden="true">↗</span>
            </a>
            <p className={s.invitation}>앱에 대한 생각, 편하게 들려주세요.</p>
            <nav className={s.social} aria-label="소셜 미디어">
              {STUDIO_SOCIALS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${link.label} (새 탭에서 열림)`}
                >
                  {link.label}
                  <span aria-hidden="true">↗</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
        <div className={s.bottom}>
          <span>
            © {new Date().getFullYear()} {NAME}
          </span>
          <span className={s.signature}>
            <StarMark />
            스스로 빛나다.
          </span>
        </div>
      </div>
    </footer>
  );
}
