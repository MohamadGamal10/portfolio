
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Bars3Icon , XMarkIcon } from '@heroicons/react/24/outline'


const NavItem = styled.a`
  &:hover {
    background-color: #29A587;
  }
  
`;


export default function Header() {
  const [isOpen, setOpen] = useState(false);
  // const location = useLocation();
  // const path = location.pathname;

  const navigation = [
    { name: 'Projects', href:  '#projects'  },
    { name: 'Contact', href: '#contact'  },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }



    const smoothScroll = (e, href) => {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        setOpen(!isOpen);
      }
    };
  return (
    <Disclosure as="nav" className={'fixed w-full z-50'} style={{ backgroundColor: "#F1ECE4" }}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          
          <div className="flex flex-1  sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
             <Link to={"/"} className="text-black text-2xl font-bold  align-middle" ><i style={{ color: '#29A587' }} className="fa-solid fa-angle-left font-bold "></i>Mohamed<span style={{ color: '#29A587' }} className='font-bold '>/</span>Gamal<i style={{ color: '#29A587' }} className=" font-bold fa-solid fa-angle-right"></i></Link>
            </div>
            <div className="hidden sm:ms-auto   sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <NavItem
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {smoothScroll(e, item.href); } }
                    className={classNames(
                         'text-black  hover:text-white',
                        'rounded-md px-3 py-2 text-lg font-medium'
                      )}
                  >
                    {item.name}
                  </NavItem>
                ))}
              </div>
            </div>
          </div>
 
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton  className="group relative p-2 inline-flex items-center justify-center rounded-md text-white bg-black hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
              {/* <Hamburger toggled={isOpen} toggle={setOpen} /> */}
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1  px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-black text-white' : 'text-black hover:bg-black hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
     <hr />
    </Disclosure>
  )
}
