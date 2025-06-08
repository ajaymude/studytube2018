import React from 'react';

const footerLinks = [
  { name: 'Home',    href: '/'       },
  { name: 'About',   href: '/about'  },
  { name: 'Contact', href: '/contact'},
  { name: 'Terms',   href: '/terms'  },
  { name: 'Privacy', href: '/privacy'},
];

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold">YourAppName</h3>
          <p className="text-sm">
            © {new Date().getFullYear()} YourAppName. All rights reserved.
          </p>
        </div>
        <nav>
          <ul className="flex flex-col sm:flex-row gap-4 text-sm">
            {footerLinks.map(({ name, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="hover:text-white"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
