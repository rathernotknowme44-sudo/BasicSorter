console.log("JJK Real Gojo Sticker Active.");

function applyGojoWorkspace() {
    const backgroundUrl = chrome.runtime.getURL('background.jfif');
    const bannerUrl = chrome.runtime.getURL('baby_gojo.png');
    const emailFrameUrl = chrome.runtime.getURL('email-frame.png');
    const composeOpen = !!document.querySelector(
        '[role="dialog"], [aria-label*="Compose"], [aria-label*="compose"], [aria-label*="New Message"], .nH.bkK, .nH.Pf'
    );

    // 1. Show the wallpaper through the inbox and prepare the sticker and frame overlays.
    let themeStyle = document.getElementById('jjk-glass-theme');
    if (!themeStyle) {
        themeStyle = document.createElement('style');
        themeStyle.id = 'jjk-glass-theme';
        document.head.appendChild(themeStyle);
    }
    const themeCss = `
            html,
            body,
            #gsr,
            body > div,
            body > div > div,
            body > div > div > div,
            body > div > div > div > div,
            .gb_za,
            .gb_2b,
            .gb_0b,
            .gb_1b,
            .gb_3b,
            .gb_4b,
            .gb_5b,
            .gb_6b,
            .gb_7b,
            .gb_8b,
            .gb_9b,
            .gb_aa,
            .gb_ba,
            .gb_ca,
            .gb_da,
            .gb_ea,
            .gb_fa,
            .gb_ga,
            .gb_ha,
            .gb_ia,
            .gb_ja,
            .gb_ka,
            .gb_la,
            .gb_ma,
            .gb_na,
            .gb_oa,
            .gb_pa,
            .gb_qa,
            .gb_ra,
            .gb_sa,
            .gb_ta,
            .gb_ua,
            .aeN,
            .nH,
            [role="main"],
            [role="main"] .nH,
            [role="main"] .aeF,
            [role="main"] .bkK,
            [role="main"] .ae4,
            [role="main"] .AO,
            [role="main"] .aDP,
            [role="main"] .Bk,
            [role="main"] .aKh,
            [role="main"] .bGI,
            [role="main"] .nH > .nH,
            [role="main"] .xY,
            [role="main"] .y6,
            [role="main"] .yW,
            [role="main"] .xS,
            [role="main"] .a3s,
            [role="main"] .bq,
            [role="main"] .aQC,
            [role="main"] [gh="tm"],
            [role="main"] [role="toolbar"],
            [role="main"] .gb_ia,
            [role="main"] .gb_ja,
            [role="main"] .gb_Fa,
            [role="main"] .gb_ub,
            [role="main"] .aqL,
            [role="main"] .brC-aM3,
            [role="main"] .aeJ,
            [role="main"] .aeH,
            [role="main"] .aeI,
            [role="main"] .aRz,
            [role="main"] .n3,
            [role="main"] .p9,
            header,
            [role="banner"],
            [role="search"],
            [aria-label*="Search"],
            input[aria-label*="Search"],
            div[aria-label*="Search"],
            .gb_0b,
            .gb_1b,
            .gb_2b,
            .gb_3b,
            .gb_nb,
            .gb_ob,
            .gb_qb,
            .gb_rb,
            .gb_0c,
            .gb_1c,
            .gb_2c,
            .gb_3c,
            .gb_4c,
            .gb_5c,
            .gb_6c,
            .gb_7c,
            .gb_8c,
            .gb_9c {
                background-color: transparent !important;
                background-image: none !important;
                box-shadow: none !important;
                border-color: transparent !important;
            }
            #jjk-inbox-banner {
                position: fixed !important;
                top: 4px !important;
                left: 15vw !important;
                transform: none !important;
                box-sizing: border-box !important;
                width: calc(78vw - 24px) !important;
                height: min(11.25vw, 180px) !important;
                aspect-ratio: auto !important;
                margin: 0 !important;
                padding: 0 !important;
                border: 0 !important;
                background: transparent !important;
                box-shadow: none !important;
                z-index: 2147483000 !important;
                pointer-events: none !important;
            }
            #jjk-inbox-banner .jjk-inbox-banner-art {
                display: block !important;
                width: 100% !important;
                height: 100% !important;
                object-fit: fill !important;
            }
            #jjk-inbox-banner .jjk-banner-corner-glint {
                position: absolute !important;
                top: 8px !important;
                right: 5% !important;
                width: 30px !important;
                height: 30px !important;
                border-radius: 50% !important;
                background: radial-gradient(circle, #fff 0%, rgba(213,252,255,1) 18%, rgba(82,220,255,0.95) 42%, rgba(66,210,255,0) 76%) !important;
                box-shadow: 0 0 14px 6px rgba(112,230,255,0.95) !important;
                animation: jjk-banner-corner-sweep 1.8s ease-in-out infinite !important;
                pointer-events: none !important;
            }
            @keyframes jjk-banner-corner-sweep {
                0% { transform: translate(-40px, 0); opacity: 0; }
                28% { transform: translate(0, 0); opacity: 1; }
                72% { transform: translate(0, 38px); opacity: 0.95; }
                100% { transform: translate(0, 38px); opacity: 0; }
            }
            @media (max-width: 520px) {
                #jjk-inbox-banner {
                    left: 50% !important;
                    transform: translateX(-50%) !important;
                    width: calc(100vw - 20px) !important;
                    height: auto !important;
                    aspect-ratio: 1668 / 414 !important;
                }
            }
            input[aria-label*="Search"],
            [role="searchbox"],
            [role="search"] input,
            .gb_3e,
            .gb_3f,
            .gb_3g {
                background: rgba(12, 18, 32, 0.7) !important;
                border: 1px solid rgba(255, 255, 255, 0.18) !important;
                border-radius: 12px !important;
                box-shadow: inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 1px rgba(13, 19, 27, 0.35) !important;
                color: #edf6ff !important;
            }
            [role="search"] input::placeholder,
            input[aria-label*="Search"]::placeholder {
                color: rgba(237, 246, 255, 0.72) !important;
            }
            div[role="listbox"],
            [role="listbox"],
            [role="listbox"] [role="option"],
            [role="listbox"] div {
                background: rgba(9, 15, 25, 0.88) !important;
                border: 1px solid rgba(255, 255, 255, 0.12) !important;
                border-radius: 12px !important;
                box-shadow: 0 12px 28px rgba(0,0,0,0.25) !important;
                color: #edf6ff !important;
            }
            [role="listbox"] [role="option"] {
                background: rgba(14, 22, 36, 0.8) !important;
                border-radius: 10px !important;
                border: 0 !important;
                color: #edf6ff !important;
            }
            [role="main"] tr.zA,
            [role="main"] tr.zA > td {
                background-color: transparent !important;
                background-image: none !important;
                color: #fff !important;
                text-shadow: 0 0 3px #fff, 0 0 8px rgba(255, 255, 255, 0.85) !important;
            }
            [role="main"] tr.zA *,
            [role="main"] .y6 *,
            [role="main"] .xY *,
            [role="main"] .yW *,
            [role="main"] .a3s *,
            [role="main"] .bq *,
            [role="main"] .aQC *,
            [role="main"] [role="toolbar"] *,
            [role="main"] [gh="tm"] *,
            [role="main"] .gb_ia *,
            [role="main"] .gb_ja *,
            [role="main"] .gb_Fa *,
            [role="main"] .gb_ub *,
            [role="main"] .aqL *,
            [role="main"] .aeJ *,
            [role="main"] .aeH *,
            [role="main"] .aeI *,
            [role="main"] .aRz *,
            [role="main"] .n3 *,
            [role="main"] .p9 *,
            header *,
            [role="banner"] *,
            [role="search"] *,
            [aria-label*="Search"] *,
            input[aria-label*="Search"] *,
            div[aria-label*="Search"] * {
                background-color: transparent !important;
                color: #fff !important;
            }
            [role="main"] table:has(tr.jjk-framed-email) {
                border-collapse: separate !important;
                border-spacing: 0 8px !important;
                border: 0 !important;
                border-top: 0 !important;
                border-bottom: 0 !important;
            }
            div.YhbRke,
            div.YhbRke > span.a5D.Ym,
            div.YhbRke > span.a5D.Yn {
                display: none !important;
                width: 0 !important;
                min-width: 0 !important;
                max-width: 0 !important;
                border: 0 !important;
                border-top: 0 !important;
                border-bottom: 0 !important;
                background: transparent !important;
                box-shadow: none !important;
                opacity: 0 !important;
            }
            [role="main"] tr.zA,
            [role="main"] tr.zA:hover {
                position: relative !important;
                isolation: isolate !important;
                background: transparent !important;
                border: 0 !important;
                border-top: 0 !important;
                border-bottom: 0 !important;
                outline: 0 !important;
                box-shadow: none !important;
            }
            [role="main"] tr.zA > td,
            [role="main"] tr.zA:hover > td {
                position: relative !important;
                overflow: visible !important;
                background: transparent !important;
                border: 0 !important;
                border-top: 0 !important;
                border-bottom: 0 !important;
                border-left: 0 !important;
                border-right: 0 !important;
                border-radius: 0 !important;
                box-shadow: none !important;
                padding-top: 9px !important;
                padding-bottom: 9px !important;
                z-index: 1 !important;
            }
            [role="main"] tr.jjk-framed-email > .jjk-email-frame {
                position: absolute !important;
                left: 0 !important;
                top: 0 !important;
                width: 100% !important;
                height: 100% !important;
                z-index: 0 !important;
                box-sizing: border-box !important;
                border-style: solid !important;
                border-width: 8px 10px !important;
                border-image-source: url("${emailFrameUrl}") !important;
                border-image-slice: 12 12 12 12 fill !important;
                border-image-width: 8px 10px !important;
                border-image-repeat: stretch !important;
                background: rgba(12, 18, 24, 0.16) !important;
                box-shadow: inset 0 0 0 1px rgba(255,255,255,0.04), 0 0 12px rgba(0, 195, 255, 0.14) !important;
                pointer-events: none !important;
                display: block !important;
                opacity: 1 !important;
            }
            [role="main"] [role="toolbar"],
            [role="main"] [gh="tm"],
            [role="main"] [gh="mtb"] {
                position: relative !important;
                z-index: 20 !important;
                background: transparent !important;
                border-color: transparent !important;
                box-shadow: none !important;
            }
            [role="navigation"],
            .aeN {
                position: relative !important;
                top: -100px !important;
                z-index: 20 !important;
            }
            [aria-label="Gmail"] {
                position: relative !important;
                top: -50px !important;
            }
            [aria-label="Main menu"] {
                position: fixed !important;
                top: 16px !important;
                left: 16px !important;
                z-index: 2147483001 !important;
                visibility: visible !important;
                opacity: 1 !important;
            }
            [aria-label*="Compose"] {
                position: relative !important;
                isolation: isolate !important;
                overflow: visible !important;
                z-index: 2147483002 !important;
            }
            .aeN [aria-label*="Compose"],
            .aeN .aYF {
                position: relative !important;
                isolation: isolate !important;
                overflow: visible !important;
                z-index: 2147483002 !important;
            }
            [role="dialog"] .jjk-email-frame,
            [role="dialog"] .jjk-badge,
            [role="dialog"] .jjk-framed-email {
                display: none !important;
                opacity: 0 !important;
            }
            [role="main"] tr.zA * {
                color: #fff !important;
                text-shadow: 0 0 3px #fff, 0 0 8px rgba(255, 255, 255, 0.85) !important;
            }
            [role="main"] tr.zA,
            [role="main"] tr.zA .oZ,
            [role="main"] tr.zA [role="checkbox"],
            [role="main"] tr.zA .T-KT,
            [role="main"] tr.zA .pG {
                filter: none;
            }
            [role="main"] .jjk-badge {
                display: inline-block;
                border: 1px solid #c4b5fd !important;
                box-shadow: none !important;
                text-shadow: none !important;
            }
            [role="main"] tr.zA .jjk-badge-cyan {
                background-color: #1e1b4b !important;
                text-shadow: none !important;
            }
            [role="main"] tr.zA .jjk-badge-violet {
                background-color: #4c1d95 !important;
                text-shadow: none !important;
            }
            body,
            body * {
                color: #fff !important;
                text-shadow: 0 1px 3px rgba(0, 0, 0, 0.95) !important;
            }
        `;
    if (themeStyle.textContent !== themeCss) {
        themeStyle.textContent = themeCss;
    }

    const rootElements = [
        document.documentElement,
        document.body,
        document.querySelector('#gsr'),
        document.querySelector('[role="main"]'),
        document.querySelector('.gb_za'),
        document.querySelector('.aeN'),
        ...Array.from(document.querySelectorAll('body > div'))
    ].filter(Boolean);

    rootElements.forEach(el => {
        el.style.setProperty('background-color', 'transparent', 'important');
        el.style.setProperty('background-image', `url("${backgroundUrl}")`, 'important');
        el.style.setProperty('background-position', 'center center', 'important');
        el.style.setProperty('background-size', 'cover', 'important');
        el.style.setProperty('background-repeat', 'no-repeat', 'important');
        el.style.setProperty('background-attachment', 'fixed', 'important');
    });

    const inboxTable = Array.from(document.querySelectorAll('[role="main"] table'))
        .find(table => table.querySelector('tr.zA'));
    if (inboxTable) {
        inboxTable.style.setProperty('border-collapse', 'separate', 'important');
        inboxTable.style.setProperty('border-spacing', '0 14px', 'important');
    }

    let banner = document.getElementById('jjk-inbox-banner');
    if (!banner) {
        banner = document.createElement('div');
        banner.id = 'jjk-inbox-banner';

        const bannerArt = document.createElement('img');
        bannerArt.className = 'jjk-inbox-banner-art';
        bannerArt.src = bannerUrl;
        bannerArt.alt = '';
        bannerArt.setAttribute('aria-hidden', 'true');
        banner.appendChild(bannerArt);
        document.body.appendChild(banner);
    }

    if (!banner.querySelector('.jjk-banner-corner-glint')) {
        const cornerGlint = document.createElement('span');
        cornerGlint.className = 'jjk-banner-corner-glint';
        cornerGlint.setAttribute('aria-hidden', 'true');
        banner.appendChild(cornerGlint);
    }

    const searchInput = document.querySelector('input[aria-label*="Search"]');
    const searchHeader = searchInput?.closest('[role="banner"], header')
        || searchInput?.closest('[role="search"]')?.parentElement;
    if (searchHeader) {
        searchHeader.style.setProperty('box-sizing', 'border-box', 'important');
        const bannerHeight = Math.ceil(banner.getBoundingClientRect().height);
        searchHeader.style.setProperty('padding-top', `${bannerHeight + 12}px`, 'important');
        searchHeader.dataset.jjkBannerOffset = 'true';
    }

    // 2. Email Row Badges
    const emailRows = inboxTable?.querySelectorAll('tr.zA') || [];
    emailRows.forEach(row => {
        const rowText = row.innerText.toLowerCase();
        row.classList.add('jjk-framed-email');
        row.style.setProperty('position', 'relative', 'important');
        row.style.setProperty('overflow', 'visible', 'important');
        const cells = row.querySelectorAll(':scope > td');
        cells.forEach(cell => {
            cell.style.setProperty('border', '0', 'important');
        });

        let frame = row.querySelector(':scope > .jjk-email-frame');
        if (!frame) {
            frame = row.querySelector('.jjk-email-frame') || document.createElement('div');
            frame.className = 'jjk-email-frame';
            frame.setAttribute('aria-hidden', 'true');
            row.appendChild(frame);
        }

        frame.style.left = '0px';
        frame.style.top = '0px';
        frame.style.width = '100%';
        frame.style.height = '100%';
        frame.style.display = composeOpen ? 'none' : 'block';
        frame.style.opacity = composeOpen ? '0' : '1';

        const badges = row.querySelectorAll('.jjk-badge');
        badges.forEach(badge => {
            badge.style.visibility = composeOpen ? 'hidden' : 'visible';
        });

        let badge = row.querySelector('.jjk-badge');
        if (!badge) {
            badge = document.createElement('span');
            badge.className = "jjk-badge";
            badge.style.marginLeft = "12px";
            badge.style.padding = "2px 8px";
            badge.style.fontSize = "9px";
            badge.style.fontWeight = "900";
            badge.style.borderRadius = "4px";

            const subjectContainer = row.querySelector('.y6');
            if (subjectContainer) {
                subjectContainer.appendChild(badge);
            }
        }

        const textContent = rowText;
        if (textContent.includes('unsubscribe') || textContent.includes('offer') || textContent.includes('promo')) {
            badge.className = 'jjk-badge jjk-badge-cyan';
            badge.innerText = "⚡ INFINITE VOID";
            badge.style.backgroundColor = "#1e1b4b";
            badge.style.color = "#38bdf8";
        } else if (textContent.includes('security') || textContent.includes('alert') || textContent.includes('urgent')) {
            badge.className = 'jjk-badge jjk-badge-violet';
            badge.innerText = "🔥 CURSED ENERGY";
            badge.style.backgroundColor = "#4c1d95";
            badge.style.color = "#e9d5ff";
        } else {
            badge.className = 'jjk-badge jjk-badge-violet';
            badge.innerText = "👁️ SIX EYES";
            badge.style.backgroundColor = "#4c1d95";
            badge.style.color = "#e9d5ff";
        }
    });
}

setInterval(applyGojoWorkspace, 1000);