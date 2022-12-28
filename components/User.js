import React from "react";
import { FaUserCircle } from "react-icons/fa";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0/client";

function User() {
  const { user } = useUser();
  const route = useRouter();

  if (!user)
    return (
      <Profile onClick={() => route.push("/api/auth/login")}>
        <FaUserCircle />
        <p>Profile</p>
      </Profile>
    );

  return (
    <Profile onClick={() => route.push("/profile")}>
      <img src={user.picture} alt={user.given_name} />
      <p>{user.given_name}</p>
    </Profile>
  );
}

const Profile = styled.div`
  font-size: medium;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #434343a6;
  margin-top: 0.4rem;
  padding: 0.5rem 1.5rem;
  svg {
    font-size: 1.8rem;
  }
  :hover {
    cursor: pointer;
    color: #14213d;
    scale: 1.2;
  }
  img {
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
  }
`;

export default User;
