"use client"

import * as React from "react"
import { IconMenu2, IconSettings, IconUser, IconHelp } from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export function DrawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">
          <IconMenu2 className="mr-2 h-4 w-4" />
          Open Menu
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Project Settings</DrawerTitle>
            <DrawerDescription>
              Configure your project preferences and settings.
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 hover:bg-gray-100 rounded-lg cursor-pointer">
                <IconUser className="h-5 w-5 text-gray-600" />
                <span>User Profile</span>
              </div>
              <div className="flex items-center space-x-3 p-3 hover:bg-gray-100 rounded-lg cursor-pointer">
                <IconSettings className="h-5 w-5 text-gray-600" />
                <span>Preferences</span>
              </div>
              <div className="flex items-center space-x-3 p-3 hover:bg-gray-100 rounded-lg cursor-pointer">
                <IconHelp className="h-5 w-5 text-gray-600" />
                <span>Help & Support</span>
              </div>
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
