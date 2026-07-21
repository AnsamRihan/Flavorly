import React from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  Avatar,
  DropdownHeader,
  DropdownItem,
  DropdownDivider,
} from "flowbite-react";

export default function ProfileDropdown() {
  return (
    <Dropdown arrowIcon={false} inline
      label={
        <Avatar
          alt="User settings"
          img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          rounded
          className="cursor-pointer"/>} 
          className="bg-bg-secondary! text-primary-foreground!">

      <DropdownHeader className="text-primary-foreground!">
        <span className="block text-sm font-semibold">
          Bonnie Green
        </span>
        <span className="block truncate text-sm font-medium">
          name@flowbite.com
        </span>
      </DropdownHeader>

      <DropdownItem className="avatar-link">
        Dashboard
      </DropdownItem>

      <DropdownItem className="avatar-link">
        Settings
      </DropdownItem>

      <DropdownItem className="avatar-link">
        Earnings
      </DropdownItem>

      <DropdownItem className="avatar-link">
        <Link to="/subscriptionPolicy">
          Subscription Policy
        </Link>
      </DropdownItem>

      <DropdownDivider className="bg-primary!" />

      <DropdownItem className="avatar-link">
        Sign out
      </DropdownItem>
    </Dropdown>
  );
}