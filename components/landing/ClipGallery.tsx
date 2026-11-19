"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import CreatorClip from "./CreatorClip";
import { clipPoster, clipSrc, type ClipGroup } from "@/lib/clips";
import styles from "./landing.module.css";

// The example videos, one kind of content at a time, chosen with tabs like PersonaTabs.
// Every panel is in the page for search engines; clips in a hidden panel aren't on screen,
// so they don't download or play until their tab is opened.
export default function ClipGallery({ groups }: { groups: ClipGroup[] }) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>) {
    const step = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const next = (active + step + groups.length) % groups.length;
    setActive(next);
    tabs.current[next]?.focus();
  }

  return (
    <div>
      <div className={`${styles.tabs} ${styles.tabsOnNavy}`} role="tablist" aria-label="Kind of video">
        {groups.map((group, i) => (
          <button
            key={group.tab}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`clips-tab-${i}`}
            aria-selected={i === active}
            aria-controls={`clips-panel-${i}`}
            tabIndex={i === active ? 0 : -1}
            className={`${styles.tab} ${i === active ? styles.tabActive : ""}`}
            onClick={() => setActive(i)}
            onKeyDown={onKeyDown}
          >
            {group.tab}
          </button>
        ))}
      </div>

      {groups.map((group, i) => {
        const wide = group.clips.every((clip) => clip.wide);
        return (
          <div
            key={group.tab}
            role="tabpanel"
            id={`clips-panel-${i}`}
            aria-labelledby={`clips-tab-${i}`}
            hidden={i !== active}
          >
            <p className={styles.clipsLead}>{group.lead}</p>
            <ul className={`${styles.clips} ${wide ? styles.clipsWide : ""}`}>
              {group.clips.map(({ name, title, description, wide }) => (
                <li key={name}>
                  <CreatorClip
                    src={clipSrc(name)}
                    poster={clipPoster(name)}
                    title={title}
                    description={description}
                    wide={wide}
                  />
                  <p className={styles.clipCaption}>{title}</p>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
