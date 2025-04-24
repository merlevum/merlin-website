import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faStar, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faBluesky,
  faEtsy,
  faInstagram,
  faTiktok,
  faTumblr,
  faTwitch,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { faBluesky as inprnt } from "./icons/inprnt";
import { faBluesky as kofi } from "./icons/kofi";

const CreateButton = ({ brand, externalLink = "", transforms = { x: 0, y: 0, scale: 1 }, mouseOver = false, setMouseOver, }) => {
  const usedIcon = 
    brand === "email" ? faEnvelope :
    brand === "bluesky" ? faBluesky : 
    brand === "etsy" ? faEtsy :
    brand === "inprnt" ? inprnt :
    brand === "instagram" ? faInstagram :
    brand === "kofi" ? kofi :
    brand === "tiktok" ? faTiktok :
    brand === "tumblr" ? faTumblr :
    brand === "twitch" ? faTwitch :
    brand === "youtube" ? faYoutube : 
    ""

  return (
    <a href={externalLink} target="_blank" rel="noreferrer">
      <FontAwesomeIcon
        icon={usedIcon}
        onMouseEnter={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
        style={{
          fontSize: `${1.6 * transforms.scale}rem`,
          color: "white",
          transform: `translateY(${transforms.y}px) translateX(${transforms.x}px)`,
        }}
      />
    </a>
  );
};

const StarButton = ({ data }) => {
  const { brand, externalLink } = data;
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <div style={{ height: "50px", width: "50px", margin: "5px", }} className="d-flex align-items-center justify-content-center fa-layers" >
      <a href={externalLink} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faStar} onMouseEnter={() => setMouseOver(true)} onMouseLeave={() => setMouseOver(false)} 
        style={{ fontSize: "3rem", transform: "translateX(-3px)",}} 
        className={`${mouseOver ? "starIconActive " : "starIcon "}`}
          />
          
      </a>

      {brand === "email" &&     <CreateButton externalLink={externalLink} mouseOver={mouseOver} setMouseOver={setMouseOver} brand={"email"}     transforms={{x: -1, y: 3,  scale: 0.9}} />}
      {brand === "bluesky" &&   <CreateButton externalLink={externalLink} mouseOver={mouseOver} setMouseOver={setMouseOver} brand={"bluesky"}   transforms={{x: -1, y: 4,  scale: 0.9}}/>}
      {brand === "etsy" &&      <CreateButton externalLink={externalLink} mouseOver={mouseOver} setMouseOver={setMouseOver} brand={"etsy"}      transforms={{x: -1, y: 4,  scale: 0.9}}/>}
      {brand === "inprnt" &&    <CreateButton externalLink={externalLink} mouseOver={mouseOver} setMouseOver={setMouseOver} brand={"inprnt"}    transforms={{x: -2, y: 8,  scale: 0.9}}/>}
      {brand === "instagram" && <CreateButton externalLink={externalLink} mouseOver={mouseOver} setMouseOver={setMouseOver} brand={"instagram"} transforms={{x: -1, y: 3,  scale: 1}}/>}
      {brand === "kofi" &&      <CreateButton externalLink={externalLink} mouseOver={mouseOver} setMouseOver={setMouseOver} brand={"kofi"}      transforms={{x: 13, y: 18, scale: 2}}/>}
      {brand === "tiktok" &&    <CreateButton externalLink={externalLink} mouseOver={mouseOver} setMouseOver={setMouseOver} brand={"tiktok"}    transforms={{x: 0,  y: 2,  scale: 1}}/>}
      {brand === "tumblr" &&    <CreateButton externalLink={externalLink} mouseOver={mouseOver} setMouseOver={setMouseOver} brand={"tumblr"}    transforms={{x: -1, y: 2,  scale: 1}}/>}
      {brand === "twitch" &&    <CreateButton externalLink={externalLink} mouseOver={mouseOver} setMouseOver={setMouseOver} brand={"twitch"}    transforms={{x: 0,  y: 3,  scale: 0.8}}/>}
      {brand === "youtube" &&   <CreateButton externalLink={externalLink} mouseOver={mouseOver} setMouseOver={setMouseOver} brand={"youtube"}   transforms={{x: -1, y: 2,  scale: 0.8}}/>}



    </div>
  );
};

export default StarButton;

// {brand === "faEnvelope" && ( <a href={externalLink} target="_blank" rel="noreferrer" > <FontAwesomeIcon icon={faEnvelope}  onMouseEnter={() => setMouseOver(true)} onMouseLeave={() => setMouseOver(false)} style={{ fontSize: "1.5rem", color: "white", transform: "translateY(2px) translateX(0px)",   }} /> </a> )}  {/ * "email" * /}
// {brand === "faBluesky" && (  <a href={externalLink} target="_blank" rel="noreferrer" > <FontAwesomeIcon icon={faBluesky}   onMouseEnter={() => setMouseOver(true)} onMouseLeave={() => setMouseOver(false)} style={{ fontSize: "1.5rem", color: "white", transform: "translateY(2px) translateX(0px)",   }} /> </a> )}  {/ * "bluesky" * /}
// {brand === "faEtsy" && (     <a href={externalLink} target="_blank" rel="noreferrer" > <FontAwesomeIcon icon={faEtsy}      onMouseEnter={() => setMouseOver(true)} onMouseLeave={() => setMouseOver(false)} style={{ fontSize: "1.5rem", color: "white", transform: "translateY(2px) translateX(0px)",   }} /> </a> )}  {/ * "etsy" * /}
// {brand === "inprnt" && (     <a href={externalLink} target="_blank" rel="noreferrer" > <FontAwesomeIcon icon={inprnt}      onMouseEnter={() => setMouseOver(true)} onMouseLeave={() => setMouseOver(false)} style={{ fontSize: "1.5rem", color: "white", transform: "translateY(8px) translateX(-2px)",  }} /> </a> )}  {/ * "inprnt" * /}
// {brand === "faInstagram" &&  <a href={externalLink} target="_blank" rel="noreferrer" > <FontAwesomeIcon icon={faInstagram} onMouseEnter={() => setMouseOver(true)} onMouseLeave={() => setMouseOver(false)} style={{ fontSize: "1.5rem", color: "white", transform: "translateY(2px) translateX(0px)",   }} /> </a> )}  {/ * "instagram" * /}
// {brand === "kofi" && (       <a href={externalLink} target="_blank" rel="noreferrer" > <FontAwesomeIcon icon={kofi}        onMouseEnter={() => setMouseOver(true)} onMouseLeave={() => setMouseOver(false)} style={{ fontSize: "3rem",   color: "white", transform: "translateY(17px) translateX(13px)", }} /> </a> )}  {/ * "kofi" * /}
// {brand === "faTiktok" && (   <a href={externalLink} target="_blank" rel="noreferrer" > <FontAwesomeIcon icon={faTiktok}    onMouseEnter={() => setMouseOver(true)} onMouseLeave={() => setMouseOver(false)} style={{ fontSize: "1.5rem", color: "white", transform: "translateY(2px) translateX(0px)",   }} /> </a> )}  {/ * "tiktok" * /}
// {brand === "faTumblr" && (   <a href={externalLink} target="_blank" rel="noreferrer" > <FontAwesomeIcon icon={faTumblr}    onMouseEnter={() => setMouseOver(true)} onMouseLeave={() => setMouseOver(false)} style={{ fontSize: "1.5rem", color: "white", transform: "translateY(2px) translateX(0px)",   }} /> </a> )}  {/ * "tumblr" * /}
// {brand === "faTwitch" && (   <a href={externalLink} target="_blank" rel="noreferrer" > <FontAwesomeIcon icon={faTwitch}    onMouseEnter={() => setMouseOver(true)} onMouseLeave={() => setMouseOver(false)} style={{ fontSize: "1.5rem", color: "white", transform: "translateY(2px) translateX(0px)",   }} /> </a> )}  {/ * "twitch" * /}
// {brand === "faYoutube" && (  <a href={externalLink} target="_blank" rel="noreferrer" > <FontAwesomeIcon icon={faYoutube}   onMouseEnter={() => setMouseOver(true)} onMouseLeave={() => setMouseOver(false)} style={{ fontSize: "1.5rem", color: "white", transform: "translateY(2px) translateX(0px)",   }} /> </a> )}  {/ * "youtube" * /}
