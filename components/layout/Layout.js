"use client";
import { useEffect, useState } from "react";
import Breadcrumb from "./Breadcrumb";
import Footer1 from "./Footer1";
import Header1 from "./Header1";
import Header2 from "./Header2";
import PageHead from "./PageHead";

export default function Layout({ headerStyle, handleRemove, footerStyle, headTitle, breadcrumbTitle, children }) {
  const [scroll, setScroll] = useState(0);

  // Calculate scrollbar width and set CSS custom property
  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.setProperty("--scrollbar-width", `${scrollbarWidth}px`);
  }, []);

  // Moblile Menu
  const [isMobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
    !isMobileMenu
      ? document.body.classList.add("mobile-menu-visible")
      : document.body.classList.remove("mobile-menu-visible");
  };

  const [isSearch, setSearch] = useState(false);
  const handleSearch = () => setSearch(!isSearch);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  }, []);
  return (
    <>
      <PageHead />
      <div className="page-wrapper" id="top">
        {!headerStyle && (
          <Header1
            scroll={scroll}
            isMobileMenu={isMobileMenu}
            handleMobileMenu={handleMobileMenu}
            isSearch={isSearch}
            handleSearch={handleSearch}
          />
        )}
        {headerStyle == 1 ? (
          <Header1
            scroll={scroll}
            isMobileMenu={isMobileMenu}
            handleMobileMenu={handleMobileMenu}
            isSearch={isSearch}
            handleSearch={handleSearch}
          />
        ) : null}
        {headerStyle == 2 ? (
          <Header2
            scroll={scroll}
            isMobileMenu={isMobileMenu}
            handleMobileMenu={handleMobileMenu}
            isSearch={isSearch}
            handleSearch={handleSearch}
          />
        ) : null}

        <main className="main">
          {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

          {children}
        </main>

        {!footerStyle && <Footer1 />}
        {footerStyle == 1 ? <Footer1 /> : null}
      </div>
    </>
  );
}
