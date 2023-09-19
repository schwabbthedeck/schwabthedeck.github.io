import React from "react"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Elevator } from "elevator.js"
import Ding from "../music/ding.mp3"
import elevatorMusic from "../music/elevator.mp3"
import collection from 'easter-egg-collection'
import ChevronDown from "../components/icons/chevron-down"

const IndexPage = () => 
{
  if (typeof document !== `undefined`) {
    var elevator = new Elevator({
      mainAudio: elevatorMusic,
      endAudio: Ding
    });
  }
  
  return (
    <Layout>
      <SEO title="Hello" />
      <div class="grid grid-cols-3 grid-flow-row gap-4 pt-16 m-3 place-content-stretch items-center">
        <div class="place-content-center">
          <StaticImage class="rounded-full w-1/2"
              src="../images/ProfilePic.png"
              alt="Profile Picture"
          />
        </div>
        <div class="col-span-2">
          <p class="text-3xl">Jane Schwab</p>
        </div>
      </div>
      <div class="grid grid-cols-1 grid-flow-row gap-4 pt-16 m-1 place-content-stretch items-center">
        <div class="py-16">
          <StaticImage class=""
              src="../images/wordart.png"
              alt="Under Construction"
          />
        </div>
        <div class="p-16 h16 flex items-center justify-left text-xl">
          <p>You definitely don't want to scroll to the bottom of the page.</p>
        </div>
        <div class="p-16 h16 flex items-center justify-center text-center">
          <ChevronDown></ChevronDown>
        </div>
        <div class="p-16 h16 flex items-center justify-center text-center text-xl">
          <p>Are you sure you wanna keep scrolling?</p>
        </div>
        <div class="p-16 h16 flex items-center justify-center text-center">
          <ChevronDown></ChevronDown>
        </div>
        <div class="p-16 h16 flex items-center justify-end text-xl">
          <p>I guess you could keep going...</p>
        </div>
        <div class="p-16 h16 flex items-center justify-center text-center">
          <ChevronDown></ChevronDown>
        </div>
        <div class="p-16 h16 flex items-center justify-center text-center">
          <p>Definitely don't type "hi". Or "unicorn."</p>
        </div>
        <div class="p-16 h16 flex items-center justify-center text-center">
          <ChevronDown></ChevronDown>
        </div>
        <div class="p-16 h16 flex items-center justify-center text-center">
          <p>
            <a href="https://github.com/WeiChiaChang/easter-egg-collection" target="_blank"  rel="noreferrer">
              Or any other random words like "pokeball".
            </a>
          </p>
        </div>
        <div class="p-16 h16 flex items-center justify-center text-center">
            <ChevronDown></ChevronDown>
        </div>
        <div class="p-16 h16 flex items-center justify-center text-center">
          <p>(Sorry if you are on mobile.)</p>
        </div>
        <div class="p-16 h16 flex items-center justify-center text-center">
          <ChevronDown></ChevronDown>
        </div>
        <div class="p-16 h16 flex items-center text-xl">
          <p>You're really sure, huh?</p>
        </div>
        <div class="p-16 h16 flex items-center justify-center text-center">
          <ChevronDown></ChevronDown>
        </div>
        <div class="p-16 h16 flex items-center justify-center text-center text-xl">
          <p>What goes up, must come down.</p>
        </div>
        <div class="p-16 h16 flex items-center justify-center text-center">
          <ChevronDown></ChevronDown>
        </div>
        <div class="p-16 h16 flex items-center justify-end text-xl">
          <p>Wait.</p>
        </div>
        <div class="p-16 h16 flex items-center justify-center text-center">
          <ChevronDown></ChevronDown>
        </div>
        <div class="p-16 h16 flex items-center justify-center text-center text-xl">
          <p>What has been scrolled down on, must go back up?</p>
        </div>
        <div class="p-16 h16 flex items-center justify-center text-center">
          <ChevronDown></ChevronDown>
        </div>
        <div class="p-16 h16 flex items-center text-xl">
          <p>Get ready to be underwhelmed.</p>
        </div>
        <div class="p-16 h16 flex items-center justify-center text-center">
          <ChevronDown></ChevronDown>
        </div>
        <div class="p-16 h16 flex items-center justify-center text-center text-center text-xl">
          <p>(This will be more fun with the sound on before you hit the up button.)</p>
        </div>
        <div class="flex items-center justify-center text-center">
          <span class="svg-hover" onClick={() => elevator.elevate()}>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square-rounded-chevrons-up-filled" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm-.707 9.293a1 1 0 0 1 1.32 -.083l.094 .083l3 3a1 1 0 0 1 -1.32 1.497l-.094 -.083l-2.293 -2.292l-2.293 2.292a1 1 0 0 1 -1.32 .083l-.094 -.083a1 1 0 0 1 -.083 -1.32l.083 -.094l3 -3zm0 -4a1 1 0 0 1 1.32 -.083l.094 .083l3 3a1 1 0 0 1 -1.32 1.497l-.094 -.083l-2.293 -2.292l-2.293 2.292a1 1 0 0 1 -1.32 .083l-.094 -.083a1 1 0 0 1 -.083 -1.32l.083 -.094l3 -3z" fill="currentColor" stroke-width="0" />
            </svg>
          </span>
        </div>
        <div class="p-16 h16 text-center text-center thanks">
          <p>Thanks to:</p>
          <p>
            <a href="https://github.com/tholman/elevator.js" target="_blank" rel="noreferrer">
              Elevator.js
            </a>
          </p>
          <p>
            <a href="https://github.com/WeiChiaChang/easter-egg-collection" target="_blank" rel="noreferrer">
              Easter egg collection
            </a>
          </p>
        </div>
      </div>
      
    </Layout>
  )
}

export default IndexPage
