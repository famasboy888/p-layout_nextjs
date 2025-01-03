export default function Footer() {
  return (
    <div className="hidden md:flex">
      <footer className="footer footer-center sticky top-[100vh] border-t-2 border-gray-100 bg-base-100 p-4 text-base-content">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            P-Layout | BLUSH Flowers & Events.
          </p>
        </aside>
      </footer>
    </div>
  );
}
