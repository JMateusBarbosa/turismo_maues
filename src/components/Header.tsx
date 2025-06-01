import React, { useState } from 'react';
import { Menu, Globe } from 'lucide-react';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { useLocation } from 'react-router-dom';

/**
 * NavItem Component
 * 
 * Renders a navigation item with styling for the main navigation.
 * Includes special styling for active state and hover animations.
 * 
 * @param {string} href - The URL the nav item links to
 * @param {React.ReactNode} children - The content of the nav item
 * @param {string} className - Additional classes to apply
 * @param {boolean} isActive - Whether this nav item represents the current page
 */
interface NavItemProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  isActive?: boolean;
}

const NavItem = ({ href, children, className, isActive }: NavItemProps) => (
  <li className={cn("px-3", className)}>
    <a 
      href={href} 
      className={cn(
        "nav-link relative uppercase font-medium text-sm tracking-wide py-1",
        isActive && "text-vermelho-guarana font-semibold after:scale-x-100 after:origin-bottom-left"
      )}
    >
      {children}
    </a>
  </li>
);

/**
 * Header Component
 * 
 * Main navigation header for the website, featuring:
 * - Responsive design with mobile drawer navigation
 * - Scroll-aware styling (shadow on scroll)
 * - City logo and main navigation
 * - Language selection utility
 */
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Add shadow effect when page is scrolled
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Navigation links configuration with active state based on current URL
  const navLinks = [
    { name: "Home", href: "/", isActive: location.pathname === "/" },
    { name: "História", href: "/historia", isActive: location.pathname === "/historia" },
    { name: "Pontos Turísticos", href: "/pontos-turisticos", isActive: location.pathname === "/pontos-turisticos" },
    { name: "Passeios", href: "/passeios", isActive: location.pathname === "/passeios" },
    { name: "Hospedagem", href: "/hospedagem", isActive: location.pathname === "/hospedagem" },
    { name: "Passagens", href: "/passagens", isActive: location.pathname === "/passagens" },
    { name: "Eventos", href: "/eventos", isActive: location.pathname === "/eventos" },
    { name: "Contato", href: "/contato", isActive: location.pathname === "/contato" }
  ];

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full h-16 bg-verde-escuro bg-opacity-85 border-b border-verde-claro",
      isScrolled && "shadow-md"
    )}>
      <div className="max-w-5xl mx-auto flex items-center justify-between h-full px-4">
        {/* Completely reimplemented Logo container with explicit sizing */}
        <div className="flex-shrink-0">
          <a href="/" className="block">
            <div className="hidden lg:block">
              <img 
                src="/lovable-uploads/13ab3c9f-f365-4f99-95f3-3c6f3655cc37.png"
                alt="Fruto do Guaraná - Símbolo de Maués"
                style={{ height: '55px', width: 'auto' }}
                className="object-contain rounded-lg"
                title="Maués - Terra do Guaraná"
              />
            </div>
            <div className="lg:hidden">
              <img 
                src="/lovable-uploads/13ab3c9f-f365-4f99-95f3-3c6f3655cc37.png"
                alt="Fruto do Guaraná - Símbolo de Maués"
                style={{ height: '48px', width: 'auto' }}
                className="object-contain rounded-lg"
                title="Maués - Terra do Guaraná"
              />
            </div>
          </a>
        </div>

        {/* Mobile Branding - Only visible on mobile */}
        <div className="lg:hidden text-center pointer-events-none">
          <h1 className="text-[#F9F9F9] font-serif font-bold text-lg">Terra do Guaraná</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-6 items-center">
            {navLinks.map((link) => (
              <NavItem key={link.name} href={link.href} isActive={link.isActive}>
                {link.name}
              </NavItem>
            ))}
          </ul>
        </nav>

        {/* Desktop Utility Icons */}
        <div className="hidden lg:flex items-center">
          <button className="text-[#F9F9F9] hover:text-vermelho-guarana hover:scale-110 transition-all" aria-label="Mudar idioma">
            <Globe size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="text-[#F9F9F9] p-2 hover:text-vermelho-guarana transition-colors" aria-label="Menu">
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[75%] bg-white">
              <div className="flex justify-between items-center mb-8 mt-2">
                <h2 className="text-xl font-serif font-bold text-verde-escuro">Menu</h2>
                {/* Only one close button is needed, SheetContent already includes a close button */}
              </div>
              <nav>
                <ul className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.name}>
                      <li>
                        <a 
                          href={link.href} 
                          className={cn(
                            "block py-2 uppercase font-medium text-verde-escuro hover:text-vermelho-guarana transition-colors",
                            link.isActive && "text-vermelho-guarana font-semibold"
                          )}
                        >
                          {link.name}
                        </a>
                      </li>
                    </SheetClose>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
