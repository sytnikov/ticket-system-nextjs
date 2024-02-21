"use client";

import Image from "next/image";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Fragment, useState } from "react";

import Logo from "../components/ticket-me.png";
import LogoutButton from "./LogoutButton";

export default function Navbar({ user }) {
  const [isOpen, setIsOpen] = useState(false);
  const [popoverState, setPopoverState] = useState("")

  const handleOpenPopover = () => {
    setIsOpen(true)
    setPopoverState("open")
  }

  const handleClosePopover = () => {
    setIsOpen(false)
    setPopoverState("")
  }

  return (
    <Popover>
      <nav>
        <Image
          src={Logo}
          alt="Ticket.me logo"
          width={70}
          quality={100}
          placeholder="blur"
          className="flex"
        />
        <h1>TICKET.ME</h1>
        <div className="grow">
          <div className="hidden sm:flex item-center justify-center gap-2 md:gap-8">
            <Link href="/">Dashboard</Link>
            <Link href="/tickets" className="mr-auto">
              Tickets
            </Link>
          </div>
        </div>

        <div className="flex grow items-center justify-end sm:hidden">
          <Popover.Button
            className="btn-popover"
            onClick={handleOpenPopover}
          >
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        {isOpen && (
          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
            >
              <div className="rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
                <div className="px-5 pt-5 pb-6">
                  <div className="flex items-center justify-between pb-4 border-b-2 border-gray-200">
                    <h1>TICKET.ME</h1>
                    <div className="-mr-2">
                      <Popover.Button className="btn-popover" onClick={handleClosePopover}>
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="flex flex-col items-start gap-y-8">
                      <Link href="/" onClick={handleClosePopover}>Dashboard</Link>
                      <Link href="/tickets" onClick={handleClosePopover}>Tickets</Link>
                      <LogoutButton onClick={handleClosePopover}/>
                    </div>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        )}

        <div className="hidden sm:flex item-center justify-center gap-4">
          {user && <span>Hello, {user.email}</span>}
          <LogoutButton />
        </div>
      </nav>
    </Popover>
  );
}
